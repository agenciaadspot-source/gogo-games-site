import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

/* ------------------------------------------------------------------
   GoGo Games — premium 3D gamepad (fully procedural, no external model)
   Model space: front faces +Z, grips point to -Y, triggers on +Y edge.
   ------------------------------------------------------------------ */

export const MODEL_W = 3.2; // reference width (model units) used for on-screen sizing
export const FLOOR_Y = -1.25; // shadow floor

export const BLUE = '#27abdf';
export const ORANGE = '#ee5b1c';

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/* ---------- canvas helpers ---------- */
function canvasTex(w, h, draw, { srgb = true, repeat } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(...repeat);
  }
  return t;
}
function radialTex(stops) {
  return canvasTex(128, 128, (g, w, h) => {
    const r = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    stops.forEach(([o, c]) => r.addColorStop(o, c));
    g.fillStyle = r;
    g.fillRect(0, 0, w, h);
  });
}
// soft-touch micro-bump (noise dots)
function grainTex() {
  return canvasTex(
    256,
    256,
    (g, w, h) => {
      g.fillStyle = '#808080';
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 5200; i++) {
        const v = 90 + Math.random() * 90;
        g.fillStyle = `rgb(${v},${v},${v})`;
        const s = Math.random() * 2 + 0.6;
        g.fillRect(Math.random() * w, Math.random() * h, s, s);
      }
    },
    { srgb: false, repeat: [5, 5] }
  );
}
// hex-dot pattern for stick caps / grips
function dotsTex() {
  return canvasTex(
    128,
    128,
    (g, w, h) => {
      g.fillStyle = '#707070';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#d8d8d8';
      for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
          g.beginPath();
          g.arc(x * 16 + (y % 2 ? 8 : 0) + 4, y * 16 + 8, 3.2, 0, Math.PI * 2);
          g.fill();
        }
    },
    { srgb: false, repeat: [3, 3] }
  );
}
// PCB texture with traces + pads (brand blue)
function pcbTex() {
  return canvasTex(512, 384, (g, w, h) => {
    g.fillStyle = '#0a2236';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(47,181,229,.55)';
    g.lineWidth = 2;
    for (let i = 0; i < 60; i++) {
      let x = Math.random() * w,
        y = Math.random() * h;
      g.beginPath();
      g.moveTo(x, y);
      for (let k = 0; k < 4; k++) {
        if (Math.random() > 0.5) x += (Math.random() - 0.5) * 140;
        else y += (Math.random() - 0.5) * 100;
        g.lineTo(x, y);
      }
      g.stroke();
    }
    g.fillStyle = '#e9a24a';
    for (let i = 0; i < 160; i++) g.fillRect(Math.random() * w, Math.random() * h, 5, 5);
    g.strokeStyle = 'rgba(236,90,26,.8)';
    g.lineWidth = 3;
    g.strokeRect(150, 120, 120, 90);
  });
}
// face-plate: deep navy gradient, micro-grid, soft glow
function faceTex() {
  const t = canvasTex(512, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, '#0d1722');
    gr.addColorStop(0.5, '#060a10');
    gr.addColorStop(1, '#0a1119');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    const rg = g.createRadialGradient(w / 2, h * 0.3, 10, w / 2, h * 0.3, w * 0.55);
    rg.addColorStop(0, 'rgba(39,171,223,.16)');
    rg.addColorStop(1, 'rgba(39,171,223,0)');
    g.fillStyle = rg;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(120,190,230,.07)';
    g.lineWidth = 1;
    for (let i = -h; i < w; i += 9) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + h, h); g.stroke(); }
    g.strokeStyle = 'rgba(236,90,26,.10)';
    for (let i = 0; i < w; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.offset.set(0.5, 0.5);
  return t;
}
function glyphTex(txt, color, size = 128) {
  return canvasTex(size, size, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = color;
    g.font = `700 ${w * 0.62}px Geist, Arial, sans-serif`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(txt, w / 2, h / 2 + h * 0.04);
  });
}

/* ---------- body outline ---------- */
// right-half cubic bezier path: [c1, c2, p]
const HALF = [
  [[0.38, 0.56], [0.62, 0.66], [0.98, 0.64]],
  [[1.16, 0.63], [1.3, 0.48], [1.36, 0.22]],
  [[1.42, -0.06], [1.46, -0.52], [1.4, -0.82]],
  [[1.35, -1.06], [1.12, -1.12], [0.98, -0.98]],
  [[0.82, -0.84], [0.74, -0.52], [0.6, -0.36]],
  [[0.46, -0.22], [0.26, -0.2], [0, -0.2]],
];
const START = [0, 0.56];

function outlineShape(k = 1, hole = null) {
  const c = [0, 0.1];
  const T = ([x, y]) => [c[0] + (x - c[0]) * k, c[1] + (y - c[1]) * k];
  const sh = new THREE.Shape();
  const s0 = T(START);
  sh.moveTo(...s0);
  let prev = START;
  const segs = [];
  HALF.forEach(([c1, c2, p]) => {
    segs.push({ from: prev, c1, c2, to: p });
    prev = p;
  });
  segs.forEach(({ c1, c2, to }) => sh.bezierCurveTo(...T(c1), ...T(c2), ...T(to)));
  // mirrored, reversed
  for (let i = segs.length - 1; i >= 0; i--) {
    const { from, c1, c2, to } = segs[i];
    const m = (p) => T([-p[0], p[1]]);
    sh.bezierCurveTo(...m(c2), ...m(c1), ...m(from));
  }
  return sh;
}

/* ---------- geometry: adaptive conforming subdivision ---------- */
function subdivide(geo, maxEdge) {
  const pos = geo.attributes.position;
  const out = [];
  const tri = (a, b, c) => {
    const L = [a.distanceTo(b) > maxEdge, b.distanceTo(c) > maxEdge, c.distanceTo(a) > maxEdge];
    const n = L.filter(Boolean).length;
    if (!n) return out.push(a, b, c);
    const mid = (p, q) => p.clone().add(q).multiplyScalar(0.5);
    if (n === 3) {
      const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
      tri(a, ab, ca); tri(ab, b, bc); tri(ca, bc, c); tri(ab, bc, ca);
    } else if (n === 2) {
      // rotate so that the short edge is c->a  (edges: ab long, bc long)
      if (!L[0]) return tri(b, c, a);
      if (!L[1]) return tri(c, a, b);
      if (!L[2]) {
        const ab = mid(a, b), bc = mid(b, c);
        tri(ab, b, bc); tri(a, ab, c); tri(ab, bc, c);
      } else tri(a, b, c);
    } else {
      if (L[0]) { const m = mid(a, b); tri(a, m, c); tri(m, b, c); }
      else if (L[1]) { const m = mid(b, c); tri(a, b, m); tri(a, m, c); }
      else { const m = mid(c, a); tri(a, b, m); tri(m, b, c); }
    }
  };
  for (let i = 0; i < pos.count; i += 3) {
    tri(
      new THREE.Vector3().fromBufferAttribute(pos, i),
      new THREE.Vector3().fromBufferAttribute(pos, i + 1),
      new THREE.Vector3().fromBufferAttribute(pos, i + 2)
    );
  }
  const arr = new Float32Array(out.length * 3);
  out.forEach((v, i) => v.toArray(arr, i * 3));
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  return g;
}

// grips sweep backwards (-Z), body gets a subtle crown
function bend(x, y) {
  const g = smooth(-0.1, -1.1, y);
  const sideways = smooth(0.2, 1.1, Math.abs(x));
  return -0.62 * g * g * (0.5 + 0.5 * sideways);
}

function sculpt(shape, { depth, bevel, segs = 8, z0 = 0, maxEdge = 0.075, uvScale = 0.55 }) {
  let g = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: segs,
    curveSegments: 22,
    steps: 1,
  });
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  g = subdivide(g, maxEdge);
  const p = g.attributes.position;
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    p.setZ(i, p.getZ(i) + z0 + bend(x, y));
    uv[i * 2] = x * uvScale;
    uv[i * 2 + 1] = y * uvScale;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g = mergeVertices(g, 1e-4);
  g.computeVertexNormals();
  return g;
}

function lathe(points, seg = 48) {
  return new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(r, y)), seg);
}

/* =================================================================== */
export class Controller {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.mobile = !!opts.mobile;
    const r = (this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: true,
    }));
    r.setClearColor(0x000000, 0);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.08;
    r.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.environment = this.makeEnv();
    this.camera = new THREE.PerspectiveCamera(28, 1, 0.01, 200);
    this.camera.position.set(0, 0, 14);

    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(-4, 6, 6);
    const rimB = (this.rimB = new THREE.DirectionalLight(0x27abdf, 3.4));
    rimB.position.set(-6, 1, -5);
    const rimO = (this.rimO = new THREE.DirectionalLight(0xee5b1c, 3.2));
    rimO.position.set(6, 1.5, -5);
    const hemi = new THREE.HemisphereLight(0xffffff, 0x0a1624, 0.5);
    this.scene.add(key, rimB, rimO, hemi);

    this.stage = new THREE.Group();
    this.craft = new THREE.Group();
    this.pivot = new THREE.Group();
    this.stage.add(this.craft);
    this.craft.add(this.pivot);
    this.scene.add(this.stage);

    this.parts = [];
    this.anchors = {};
    this.btns = [];
    this.leds = [];
    this.build();

    // contact shadow
    this.shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 4.4),
      new THREE.MeshBasicMaterial({
        map: radialTex([[0, 'rgba(0,0,0,.6)'], [0.45, 'rgba(0,0,0,.22)'], [1, 'rgba(0,0,0,0)']]),
        transparent: true,
        depthWrite: false,
        opacity: 0,
      })
    );
    this.shadow.rotation.x = -Math.PI / 2;
    this.stage.add(this.shadow);
    this.buildDock();

    this.state = {
      x: 0, y: 0, s: 400, yaw: 0, pitch: 0, roll: 0, tilt: 0.35, explode: 0, prop: 1,
      shadow: 0, lift: 0, lens: 0, vis: 1, pad: 0, padX: 0, padY: 0, padS: 0, padTilt: 0.5, padGlow: 0,
      spin: 0,
    };
    this.time = 0;
    this.flip = 0;
    this.pressT = 1.2;
    this.pulse = 0;
    this.color = new THREE.Color('#14181e');
    this.targetColor = this.color.clone();
    this.ledColor = new THREE.Color(BLUE);
    this.targetLed = this.ledColor.clone();
    this.resize();
  }

  /* ---------- procedural studio environment (soft boxes) ---------- */
  makeEnv() {
    const env = new THREE.Scene();
    const room = new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x0b1622, side: THREE.BackSide })
    );
    env.add(room);
    const box = (w, h, col, intensity, pos, look = [0, 0, 0]) => {
      const c = new THREE.Color(col).multiplyScalar(intensity);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
      m.position.set(...pos);
      m.lookAt(...look);
      env.add(m);
    };
    box(16, 10, 0xffffff, 6, [-8, 14, 10]); // big key softbox
    box(5, 22, 0xdff4ff, 3.5, [18, 3, 8]); // right strip
    box(26, 3, 0xffffff, 2.2, [0, -10, 12]); // floor bounce
    box(6, 22, 0x27abdf, 6, [-18, 2, -8]); // blue rim
    box(6, 22, 0xee5b1c, 6, [18, 2, -10]); // orange rim
    box(20, 6, 0xffffff, 2.6, [0, 16, -6]); // top back
    box(22, 9, 0xffffff, 3.2, [2, 7, 18]); // front-top fill (reflects on the face)
    box(14, 2.4, 0x9fdcff, 4, [-4, -2, 18]); // front strip
    const pm = new THREE.PMREMGenerator(this.renderer);
    const tex = pm.fromScene(env, 0.035).texture;
    pm.dispose();
    return tex;
  }

  /* ---------- build the pad ---------- */
  build() {
    const P = this.pivot;
    const grain = grainTex();
    const dots = dotsTex();

    const mat = (this.mat = {
      shellF: new THREE.MeshPhysicalMaterial({ color: '#14181e', roughness: 0.3, metalness: 0.15, clearcoat: 0.9, clearcoatRoughness: 0.14 }),
      shellB: new THREE.MeshPhysicalMaterial({ color: '#14181e', roughness: 0.62, metalness: 0.1, bumpMap: grain, bumpScale: 0.6, clearcoat: 0.15, clearcoatRoughness: 0.6 }),
      face: new THREE.MeshPhysicalMaterial({ map: faceTex(), color: '#ffffff', roughness: 0.2, metalness: 0.35, clearcoat: 1, clearcoatRoughness: 0.06 }),
      accent: new THREE.MeshPhysicalMaterial({ color: ORANGE, roughness: 0.35, metalness: 0.1, emissive: '#ee5b1c', emissiveIntensity: 0.12, clearcoat: 0.6 }),
      metal: new THREE.MeshPhysicalMaterial({ color: '#8f9aa6', roughness: 0.22, metalness: 1 }),
      darkmetal: new THREE.MeshPhysicalMaterial({ color: '#2b3038', roughness: 0.3, metalness: 0.95 }),
      rubber: new THREE.MeshStandardMaterial({ color: '#0c0e12', roughness: 0.85, metalness: 0, bumpMap: dots, bumpScale: 1.4 }),
      btn: new THREE.MeshPhysicalMaterial({ color: '#0b0e13', roughness: 0.18, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 }),
      glass: new THREE.MeshPhysicalMaterial({ color: '#04070a', roughness: 0.03, metalness: 0.2, clearcoat: 1, transmission: 0, reflectivity: 1 }),
      led: new THREE.MeshBasicMaterial({ color: BLUE, toneMapped: false }),
      pcb: new THREE.MeshStandardMaterial({ map: pcbTex(), roughness: 0.55, metalness: 0.3 }),
      chip: new THREE.MeshStandardMaterial({ color: '#15191f', roughness: 0.4, metalness: 0.6 }),
      gold: new THREE.MeshStandardMaterial({ color: '#d9a441', roughness: 0.3, metalness: 1 }),
    });

    const addPart = (name, obj, dir, rot, anchor) => {
      obj.userData.home = obj.position.clone();
      obj.userData.dir = dir || new THREE.Vector3();
      obj.userData.rot = rot || new THREE.Vector3();
      P.add(obj);
      this.parts.push(obj);
      if (anchor) this.anchor(name, obj, ...anchor);
      return obj;
    };
    const mesh = (g, m, p, r) => {
      const o = new THREE.Mesh(g, m);
      if (p) o.position.set(...p);
      if (r) o.rotation.set(...r);
      return o;
    };

    const D = 0.12; // extrusion depth for each half-shell (plus 2 bevels)
    const B = 0.13;

    /* ----- front shell + face plate + LED rim ----- */
    const front = new THREE.Group();
    front.add(mesh(sculpt(outlineShape(1), { depth: D, bevel: B, z0: 0.0 }), mat.shellF));
    const topZ = D + B; // front plane z
    front.userData.topZ = topZ;
    // piano-black face plate (inset)
    front.add(mesh(sculpt(outlineShape(0.9), { depth: 0.012, bevel: 0.01, segs: 3, z0: topZ - 0.004, maxEdge: 0.07, uvScale: 0.3 }), mat.face));
    // LED rim: thin ring (outer .925 -> inner .905)
    const ring = outlineShape(0.935);
    const hole = outlineShape(0.915);
    ring.holes.push(new THREE.Path(hole.getPoints(80).reverse()));
    front.add(mesh(sculpt(ring, { depth: 0.006, bevel: 0.004, segs: 2, z0: topZ + 0.004, maxEdge: 0.06 }), mat.led));
    // engraved GoGo dots (decorative: 4 dots like the face-button motif)
    this.front = front;
    addPart('shell', front, new THREE.Vector3(0, 0, 0.9), new THREE.Vector3(0, 0, 0), [0, 0.0, topZ]);

    /* ----- back shell ----- */
    const back = new THREE.Group();
    back.add(mesh(sculpt(outlineShape(1), { depth: D, bevel: B, z0: -(D + 2 * B) }), mat.shellB));
    // soft-touch rubber grip pads that follow the grip curvature
    const rr = (cx, cy, w, h, r) => {
      const sh = new THREE.Shape();
      const x = cx - w / 2, y = cy - h / 2;
      sh.moveTo(x + r, y); sh.lineTo(x + w - r, y); sh.quadraticCurveTo(x + w, y, x + w, y + r);
      sh.lineTo(x + w, y + h - r); sh.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      sh.lineTo(x + r, y + h); sh.quadraticCurveTo(x, y + h, x, y + h - r);
      sh.lineTo(x, y + r); sh.quadraticCurveTo(x, y, x + r, y);
      return sh;
    };
    [-1, 1].forEach((sd) => {
      back.add(mesh(sculpt(rr(sd * 0.98, -0.55, 0.52, 0.9, 0.2), { depth: 0.014, bevel: 0.018, segs: 4, z0: -0.5, maxEdge: 0.07, uvScale: 1.6 }), mat.rubber));
    });
    // back details: LED light-bar + 4-dot motif + seam lines
    back.add(mesh(new RoundedBoxGeometry(0.7, 0.025, 0.012, 2, 0.006), mat.led, [0, 0.36, -0.512]));
    [[0, 0.1], [0.1, 0], [0, -0.1], [-0.1, 0]].forEach(([x, y], i) => {
      const d = mesh(new THREE.SphereGeometry(0.03, 16, 10), i % 2 ? mat.accent : mat.led, [x, y + 0.08, -0.512]);
      d.scale.set(1, 1, 0.35);
      back.add(d);
    });
    // usb-c port on the top edge (seam)
    const port = new THREE.Group();
    port.add(mesh(new RoundedBoxGeometry(0.24, 0.05, 0.1, 3, 0.025), mat.darkmetal, [0, 0.62, -0.13]));
    port.add(mesh(new RoundedBoxGeometry(0.18, 0.052, 0.05, 3, 0.02), mat.glass, [0, 0.627, -0.13]));
    back.add(port);
    addPart('back', back, new THREE.Vector3(0, 0, -1.15), new THREE.Vector3(0, 0, 0), [0, -0.3, -0.5]);

    /* ----- PCB + internals ----- */
    const pcb = new THREE.Group();
    const pcbShape = outlineShape(0.82);
    pcb.add(mesh(sculpt(pcbShape, { depth: 0.02, bevel: 0.006, segs: 2, z0: -0.01, maxEdge: 0.08 }), mat.pcb));
    pcb.add(mesh(new RoundedBoxGeometry(0.3, 0.3, 0.05, 3, 0.012), mat.chip, [0, 0.12, 0.04]));
    pcb.add(mesh(new THREE.BoxGeometry(0.16, 0.16, 0.035), mat.chip, [-0.5, -0.08, 0.035]));
    pcb.add(mesh(new THREE.BoxGeometry(0.16, 0.12, 0.035), mat.chip, [0.5, -0.06, 0.035]));
    pcb.add(mesh(new THREE.TorusGeometry(0.11, 0.012, 8, 24), mat.gold, [0, 0.12, 0.07]));
    // glowing blue core on the board
    pcb.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 24), mat.led, [0, 0.12, 0.075], [Math.PI / 2, 0, 0]));
    addPart('pcb', pcb, new THREE.Vector3(0, 0, 0.3), new THREE.Vector3(0, 0, 0), [0, 0.12, 0.08]);

    const batt = new THREE.Group();
    batt.add(mesh(new RoundedBoxGeometry(0.9, 0.5, 0.1, 4, 0.04), mat.shellB.clone(), [0, -0.02, -0.01]));
    batt.add(mesh(new RoundedBoxGeometry(0.88, 0.07, 0.102, 2, 0.02), mat.accent, [0, 0.12, 0.0]));
    batt.position.set(0, 0.02, -0.14);
    batt.children[0].material.color.set('#1a2432');
    addPart('battery', batt, new THREE.Vector3(0, 0, -0.55), new THREE.Vector3(0, 0, 0));

    // haptic motors in the grips
    [-1, 1].forEach((s) => {
      const m = new THREE.Group();
      m.add(mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 24), mat.darkmetal, [0, 0, 0], [0, 0, Math.PI / 2]));
      m.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.22, 16), mat.metal, [0, 0, 0], [0, 0, Math.PI / 2]));
      m.position.set(s * 1.08, -0.62, -0.1 + bend(s * 1.08, -0.62) * 0.7);
      m.rotation.z = s * 0.1;
      addPart('haptic' + s, m, new THREE.Vector3(s * 0.15, -0.2, -0.38));
    });

    /* ----- face-mounted controls ----- */
    const fz = topZ + 0.016;

    const makeStick = (x, y, name) => {
      const g = new THREE.Group();
      g.add(mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.014, 56), mat.glass, [0, 0, 0.0], [Math.PI / 2, 0, 0]));
      g.add(mesh(new THREE.TorusGeometry(0.235, 0.022, 14, 64), mat.darkmetal, [0, 0, 0.004]));
      g.add(mesh(new THREE.TorusGeometry(0.205, 0.006, 8, 64), mat.led, [0, 0, 0.012]));
      const cap = new THREE.Group();
      // stem
      cap.add(mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.1, 24), mat.darkmetal, [0, 0, 0.06], [Math.PI / 2, 0, 0]));
      // concave cap (lathe about Y then rotate to Z)
      const capGeo = lathe(
        [[0.0, 0.0], [0.14, 0.0], [0.168, 0.012], [0.18, 0.04], [0.172, 0.062], [0.15, 0.072], [0.12, 0.062], [0.07, 0.046], [0.0, 0.04]],
        48
      );
      const c = mesh(capGeo, mat.rubber, [0, 0, 0.1], [Math.PI / 2, 0, 0]);
      cap.add(c);
      cap.add(mesh(new THREE.TorusGeometry(0.168, 0.008, 8, 48), mat.metal, [0, 0, 0.14]));
      cap.userData.base = 0;
      g.add(cap);
      g.position.set(x, y, fz);
      this.btns.push({ obj: cap, depth: 0.045, kind: 'stick', phase: Math.random() * 6 });
      return addPart(name, g, new THREE.Vector3(0, 0, 1.55), new THREE.Vector3(0.12, -0.08, 0.1), [0, 0, 0.2]);
    };
    makeStick(-0.74, 0.17, 'stickL');
    makeStick(0.4, -0.14, 'stickR');

    // d-pad
    {
      const g = new THREE.Group();
      g.add(mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.014, 48), mat.glass, [0, 0, 0], [Math.PI / 2, 0, 0]));
      g.add(mesh(new THREE.TorusGeometry(0.2, 0.018, 12, 48), mat.darkmetal, [0, 0, 0.004]));
      const w = 0.105, l = 0.19, r = 0.03;
      const s = new THREE.Shape();
      s.moveTo(-w / 2 + r, l);
      s.lineTo(w / 2 - r, l); s.quadraticCurveTo(w / 2, l, w / 2, l - r);
      s.lineTo(w / 2, w / 2); s.lineTo(l - r, w / 2); s.quadraticCurveTo(l, w / 2, l, w / 2 - r);
      s.lineTo(l, -w / 2 + r); s.quadraticCurveTo(l, -w / 2, l - r, -w / 2);
      s.lineTo(w / 2, -w / 2); s.lineTo(w / 2, -l + r); s.quadraticCurveTo(w / 2, -l, w / 2 - r, -l);
      s.lineTo(-w / 2 + r, -l); s.quadraticCurveTo(-w / 2, -l, -w / 2, -l + r);
      s.lineTo(-w / 2, -w / 2); s.lineTo(-l + r, -w / 2); s.quadraticCurveTo(-l, -w / 2, -l, -w / 2 + r);
      s.lineTo(-l, w / 2 - r); s.quadraticCurveTo(-l, w / 2, -l + r, w / 2);
      s.lineTo(-w / 2, w / 2); s.lineTo(-w / 2, l - r); s.quadraticCurveTo(-w / 2, l, -w / 2 + r, l);
      const geo = new THREE.ExtrudeGeometry(s, { depth: 0.045, bevelEnabled: true, bevelThickness: 0.022, bevelSize: 0.016, bevelSegments: 5, curveSegments: 6 });
      const cross = mesh(geo, mat.btn, [0, 0, 0.012]);
      const tint = mesh(new THREE.RingGeometry(0.0, 0.034, 32), mat.led, [0, 0, 0.1]);
      cross.add(tint);
      g.add(cross);
      g.position.set(-0.4, -0.14, fz);
      this.btns.push({ obj: cross, depth: 0.025, kind: 'dpad', phase: 2 });
      addPart('dpad', g, new THREE.Vector3(0, 0, 1.3), new THREE.Vector3(-0.1, 0.1, -0.08), [0, 0, 0.12]);
    }

    // face buttons (diamond)
    {
      const g = new THREE.Group();
      g.add(mesh(new THREE.CylinderGeometry(0.33, 0.33, 0.012, 56), mat.glass, [0, 0, -0.002], [Math.PI / 2, 0, 0]));
      g.add(mesh(new THREE.TorusGeometry(0.33, 0.018, 10, 64), mat.darkmetal, [0, 0, 0.002]));
      const defs = [
        ['Y', ORANGE, 0, 0.165],
        ['B', '#ffffff', 0.165, 0],
        ['A', BLUE, 0, -0.165],
        ['X', '#ffffff', -0.165, 0],
      ];
      defs.forEach(([ch, col, x, y], i) => {
        const b = new THREE.Group();
        const cap = mesh(
          lathe([[0, 0], [0.078, 0], [0.086, 0.012], [0.086, 0.028], [0.07, 0.04], [0.035, 0.046], [0, 0.047]], 36),
          mat.btn,
          [0, 0, 0],
          [Math.PI / 2, 0, 0]
        );
        b.add(cap);
        const gl = mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ map: glyphTex(ch, col), transparent: true, toneMapped: false }), [0, 0, 0.049]);
        b.add(gl);
        b.position.set(x, y, 0.016);
        g.add(b);
        this.btns.push({ obj: b, depth: 0.03, kind: 'face', phase: i * 1.4 });
      });
      g.position.set(0.74, 0.17, fz);
      addPart('face', g, new THREE.Vector3(0, 0, 1.45), new THREE.Vector3(0.1, 0.12, -0.1), [0, 0, 0.12]);
    }

    // guide button (hub) + view / menu / player LEDs
    {
      const g = new THREE.Group();
      g.add(mesh(new THREE.TorusGeometry(0.13, 0.016, 12, 56), mat.led, [0, 0, 0.008]));
      g.add(mesh(new THREE.TorusGeometry(0.152, 0.012, 10, 56), mat.darkmetal, [0, 0, 0.004]));
      const dome = mesh(new THREE.SphereGeometry(0.118, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), mat.glass, [0, 0, 0.0], [Math.PI / 2, 0, 0]);
      dome.scale.set(1, 0.55, 1);
      g.add(dome);
      // GoGo 4-dot motif inside the hub
      [[0, 0.05], [0.05, 0], [0, -0.05], [-0.05, 0]].forEach(([x, y], i) => {
        const d = mesh(new THREE.SphereGeometry(0.014, 12, 8), i % 2 ? mat.accent : mat.led, [x, y, 0.07]);
        g.add(d);
      });
      [-1, 1].forEach((s) => {
        const sm = mesh(lathe([[0, 0], [0.04, 0], [0.044, 0.01], [0.04, 0.018], [0, 0.02]], 24), mat.btn, [s * 0.26, 0.04, 0.0], [Math.PI / 2, 0, 0]);
        g.add(sm);
      });
      for (let i = 0; i < 4; i++) {
        const d = mesh(new THREE.SphereGeometry(0.014, 10, 8), mat.led, [-0.075 + i * 0.05, -0.16, 0.012]);
        d.scale.z = 0.4;
        g.add(d);
        this.leds.push(d);
      }
      g.position.set(0, 0.3, fz);
      this.guide = g;
      addPart('guide', g, new THREE.Vector3(0, 0.1, 1.2), new THREE.Vector3(0, 0, 0), [0, 0, 0.1]);
      this.lensLocal = new THREE.Vector3(0, 0.3, fz + 0.06);
      // hole punch (video / game reel shows through the hub when diving in)
      this.holeMat = new THREE.MeshBasicMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc: THREE.ZeroFactor,
        blendDst: THREE.ZeroFactor,
        blendSrcAlpha: THREE.ZeroFactor,
        blendDstAlpha: THREE.ZeroFactor,
      });
      this.hole = mesh(new THREE.CircleGeometry(0.118, 48), this.holeMat, [0, 0, 0.085]);
      this.hole.renderOrder = 999;
      this.hole.scale.setScalar(0.001);
      g.add(this.hole);
    }

    /* ----- bumpers + triggers ----- */
    [-1, 1].forEach((s) => {
      const bn = s < 0 ? 'bumperL' : 'bumperR';
      const bump = mesh(new RoundedBoxGeometry(0.86, 0.13, 0.34, 6, 0.062), mat.shellF, [0, 0, 0]);
      const stripe = mesh(new RoundedBoxGeometry(0.52, 0.012, 0.16, 2, 0.005), mat.accent, [0, 0.066, 0.02]);
      bump.add(stripe);
      const g = new THREE.Group();
      g.add(bump);
      g.position.set(s * 0.9, 0.6, 0.03);
      g.rotation.z = -s * 0.3;
      this.btns.push({ obj: bump, depth: 0.03, kind: 'bump', phase: s + 3, axis: 'y' });
      addPart(bn, g, new THREE.Vector3(s * 0.35, 0.5, 0.7), new THREE.Vector3(0, 0, -s * 0.15), [0, 0.05, 0.1]);

      // trigger: curved profile extruded along X, tucked behind the bumper
      const prof = new THREE.Shape();
      prof.moveTo(0, 0);
      prof.bezierCurveTo(0.1, 0.12, 0.16, 0.25, 0.1, 0.34);
      prof.lineTo(-0.06, 0.34);
      prof.bezierCurveTo(-0.09, 0.22, -0.09, 0.1, -0.1, 0);
      prof.closePath();
      const tg = new THREE.ExtrudeGeometry(prof, { depth: 0.4, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.03, bevelSegments: 5, curveSegments: 14 });
      tg.translate(0, 0, -0.2);
      tg.rotateY(Math.PI / 2);
      const trig = mesh(tg, mat.btn);
      trig.rotation.set(0.5, 0, 0);
      const tgp = new THREE.Group();
      tgp.add(trig);
      tgp.position.set(s * 0.92, 0.42, -0.2);
      tgp.rotation.z = -s * 0.22;
      this.btns.push({ obj: trig, depth: 0.04, kind: 'trig', phase: s + 5, axis: 'y' });
      addPart('trigger' + s, tgp, new THREE.Vector3(s * 0.3, 0.4, -0.3), new THREE.Vector3(0, 0, 0));
    });

    this.holeLocal = this.lensLocal.clone();
  }

  anchor(name, obj, x, y, z) {
    const a = new THREE.Object3D();
    a.position.set(x, y, z);
    obj.add(a);
    this.anchors[name] = a;
  }

  /* ---------- landing dock ---------- */
  buildDock() {
    const t = (this.padGroup = new THREE.Group());
    const add = (geo, color, op) => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false, side: THREE.DoubleSide }));
      m.rotation.x = -Math.PI / 2;
      t.add(m);
      return m;
    };
    this.padBase = add(new THREE.CircleGeometry(1.6, 96), '#000000', 0.16);
    this.padRing = add(new THREE.RingGeometry(1.52, 1.6, 96), '#ffffff', 0.95);
    add(new THREE.RingGeometry(1.1, 1.12, 96), '#ffffff', 0.5);
    this.padPulse = add(new THREE.RingGeometry(1.6, 1.65, 96), '#ffffff', 0);
    // four dock ticks
    for (let i = 0; i < 4; i++) {
      const r = add(new THREE.PlaneGeometry(0.05, 0.28), '#ffffff', 0.9);
      const a = (i * Math.PI) / 2 + Math.PI / 4;
      r.position.set(Math.cos(a) * 1.82, 0, Math.sin(a) * 1.82);
      r.rotation.z = -a + Math.PI / 2;
    }
    t.visible = false;
    this.scene.add(t);
  }

  /* ---------- api ---------- */
  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.w = w;
    this.h = h;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.mobile ? 1.5 : 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.wpp = (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.position.z) / h;
  }
  setColor(c) { this.targetColor.set(c); }
  setLed(c) { this.targetLed.set(c); }
  doFlip() { this.flipT = 0; this.flipping = true; }
  doSpin() { this.spinT = 0; this.spinning = true; }
  press() { this.pulse = 1; this.pressT = 0; }
  project(o) {
    const v = new THREE.Vector3();
    o.getWorldPosition(v);
    v.project(this.camera);
    return { x: ((v.x + 1) / 2) * this.w, y: ((1 - v.y) / 2) * this.h };
  }
  anchorScreen(n) { return this.anchors[n] ? this.project(this.anchors[n]) : null; }
  lensScreen() {
    const c = this.project(this.guide);
    const e = new THREE.Object3D();
    // edge of the hub: 0.118 to the right in local space
    const v = new THREE.Vector3(0.118, 0, 0.085);
    this.guide.localToWorld(v);
    v.project(this.camera);
    const ex = ((v.x + 1) / 2) * this.w, ey = ((1 - v.y) / 2) * this.h;
    // lens centre = projected hole centre
    const hc = new THREE.Vector3(0, 0, 0.085);
    this.guide.localToWorld(hc);
    hc.project(this.camera);
    const cx = ((hc.x + 1) / 2) * this.w, cy = ((1 - hc.y) / 2) * this.h;
    return { x: cx, y: cy, r: Math.hypot(ex - cx, ey - cy) };
  }

  update(dt) {
    const st = this.state;
    this.time += dt;
    const t = this.time;

    // colour easing (skin + LED)
    this.color.lerp(this.targetColor, 1 - Math.exp(-dt * 6));
    this.ledColor.lerp(this.targetLed, 1 - Math.exp(-dt * 5));
    this.mat.shellF.color.copy(this.color);
    this.mat.shellB.color.copy(this.color).multiplyScalar(0.62);
    const light = this.color.getHSL({}).l > 0.6;
    this.mat.shellF.roughness = light ? 0.38 : 0.3;
    this.mat.face.color.set(light ? '#7d8794' : '#ffffff');
    this.mat.led.color.copy(this.ledColor).multiplyScalar(1 + this.pulse * 0.6);
    this.mat.accent.emissiveIntensity = 0.12 + this.pulse * 0.7;
    this.pulse *= Math.exp(-dt * 2.4);

    const r = (st.s * this.wpp) / MODEL_W;
    this.stage.visible = st.vis > 0.01 && st.s > 1;
    this.stage.position.set(st.x * this.wpp, -st.y * this.wpp, 0);
    this.stage.scale.setScalar(r);
    this.stage.rotation.set(-st.tilt, 0, 0);
    this.pivot.position.copy(this.lensLocal).multiplyScalar(-st.lens);

    const o = st.prop;
    const bob = Math.sin(t * 1.7) * 0.05 * o * (1 - st.lens);
    this.craft.position.set(0, bob + st.lift, 0);

    if (this.flipping) {
      this.flipT += dt / 0.95;
      if (this.flipT >= 1) { this.flipping = false; this.flipT = 1; }
    }
    if (this.spinning) {
      this.spinT += dt / 1.1;
      if (this.spinT >= 1) { this.spinning = false; this.spinT = 1; }
    }
    const fl = this.flipping ? this.flipT : 0;
    const roll = fl ? (1 - Math.pow(1 - fl, 3)) * Math.PI * 2 : 0;
    const sp = this.spinning ? this.spinT : 0;
    const yawKick = sp ? (1 - Math.pow(1 - sp, 3)) * Math.PI * 2 : 0;
    this.craft.rotation.set(
      st.pitch + Math.sin(t * 1.3) * 0.025 * o,
      st.yaw + yawKick,
      st.roll + Math.sin(t * 1.1 + 1) * 0.03 * o + roll,
      'YXZ'
    );

    // exploded view
    const h = st.explode;
    for (const p of this.parts) {
      p.position.copy(p.userData.home).addScaledVector(p.userData.dir, h * 0.8);
      p.rotation.set(p.userData.rot.x * h, p.userData.rot.y * h, p.userData.rot.z * h);
    }

    // idle button presses
    this.pressT -= dt;
    if (this.pressT < 0 && h < 0.2) {
      this.pressT = 1.8 + Math.random() * 2.2;
      this.pressIdx = Math.floor(Math.random() * this.btns.length);
      this.pressLife = 0.28;
    }
    if (this.pressLife > 0) this.pressLife -= dt;
    this.btns.forEach((b, i) => {
      let d = 0;
      if (i === this.pressIdx && this.pressLife > 0) d = Math.sin((this.pressLife / 0.28) * Math.PI);
      if (this.pulse > 0.2 && b.kind === 'face') d = Math.max(d, Math.sin((t * 14 + b.phase) * 0.5) * 0.5 + 0.5) * this.pulse;
      b.d = (b.d || 0) + (d - (b.d || 0)) * Math.min(1, dt * 24);
      if (b.kind === 'stick') {
        const sx = Math.sin(t * 0.9 + b.phase) * 0.018 * (1 - h), sy = Math.cos(t * 1.1 + b.phase) * 0.018 * (1 - h);
        b.obj.position.set(sx, sy, -b.d * b.depth);
      } else if (b.axis === 'y') {
        b.obj.position.y = -b.d * b.depth * 0.5;
      } else b.obj.position.z = (b.obj.userData.homeZ ?? (b.obj.userData.homeZ = b.obj.position.z)) - b.d * b.depth;
    });
    // player LEDs chase
    this.leds.forEach((l, i) => {
      l.visible = true;
      l.material = this.mat.led;
      l.scale.setScalar(0.7 + 0.5 * (Math.sin(t * 3 - i * 0.8) * 0.5 + 0.5));
    });

    // hub lens hole
    const u = st.lens > 0.6 ? Math.min(1, (st.lens - 0.6) / 0.25) : 0;
    this.hole.scale.setScalar(Math.max(0.001, u));

    // shadow + dock
    this.shadow.position.y = FLOOR_Y - st.lift;
    this.shadow.material.opacity = st.shadow;
    const fs = 1 + st.lift * 0.6;
    this.shadow.scale.set(fs, fs, fs);
    const p = this.padGroup;
    p.visible = st.pad > 0.01;
    if (p.visible) {
      const sc = (st.padS * this.wpp) / MODEL_W;
      p.position.set(st.padX * this.wpp, -st.padY * this.wpp, -0.01);
      p.scale.setScalar(sc * (0.9 + 0.1 * st.pad));
      p.rotation.set(st.padTilt, 0, 0);
      this.padBase.material.opacity = 0.16 * st.pad;
      this.padRing.material.opacity = 0.95 * st.pad;
      const m = (t * 0.8) % 1;
      this.padPulse.scale.setScalar(1 + m * 0.35 * st.padGlow);
      this.padPulse.material.opacity = (1 - m) * 0.7 * st.padGlow * st.pad;
    }

    // nothing on screen → skip the draw call (saves battery on phones)
    if (!this.stage.visible && !p.visible) {
      if (!this._blank) { this.renderer.clear(); this._blank = true; }
      return;
    }
    this._blank = false;
    this.renderer.render(this.scene, this.camera);
  }
}
