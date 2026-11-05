(()=>{var nx=Object.defineProperty;var ix=(s,t,e)=>t in s?nx(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var kt=(s,t,e)=>ix(s,typeof t!="symbol"?t+"":t,e);function es(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Lp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yr={duration:.5,overwrite:!1,delay:0},Wh,Mn,ke,di=1e8,Ie=1/di,Dh=Math.PI*2,sx=Dh/4,rx=0,Dp=Math.sqrt,ox=Math.cos,ax=Math.sin,an=function(t){return typeof t=="string"},qe=function(t){return typeof t=="function"},is=function(t){return typeof t=="number"},Tl=function(t){return typeof t>"u"},Gi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},Xh=function(){return typeof window<"u"},_l=function(t){return qe(t)||an(t)},Up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Uh=/(?:-?\.?\d|\.)+/gi,qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Th=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yh=/[+-]=-?[.\d]+/,Np=/[^,'"\[\]\s]+/gi,lx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,Hi,Nh,$h,ei={},bl={},Op,Fp=function(t){return(bl=ar(t,ei))&&En},Al=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},pa=function(t,e){return!e&&console.warn(t)},Bp=function(t,e){return t&&(ei[t]=e)&&bl&&(bl[t]=e)||ei},ma=function(){return 0},cx={suppressEvents:!0,isStart:!0,kill:!1},xl={suppressEvents:!0,kill:!1},hx={suppressEvents:!0},Zh={},Ps=[],Oh={},kp,Yn={},Ah={},wp=30,vl=[],Jh="",Kh=function(t){var e=t[0],n,i;if(Gi(e)||qe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=vl.length;i--&&!vl[i].targetTest(e););n=vl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new tu(t[i],n)))||t.splice(i,1);return t},Is=function(t){return t._gsap||Kh(fi(t))[0]._gsap},jh=function(t,e,n){return(n=t[e])&&qe(n)?t[e]():Tl(n)&&t.getAttribute&&t.getAttribute(e)||n},Dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ye=function(t){return Math.round(t*1e5)/1e5||0},dn=function(t){return Math.round(t*1e7)/1e7||0},cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ux=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ml=function(){var t=Ps.length,e=Ps.slice(0),n,i;for(Oh={},Ps.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zp=function(t,e,n,i){Ps.length&&!Mn&&Ml(),t.render(e,n,i||Mn&&e<0&&(t._initted||t._startAt)),Ps.length&&!Mn&&Ml()},Hp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Np).length<2?e:an(t)?t.trim():t},Vp=function(t){return t},pi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},dx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ar=function(t,e){for(var n in e)t[n]=e[n];return t},Tp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Gi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ua=function(t){var e=t.parent||He,n=t.keyframes?dx(Sn(t.keyframes)):pi;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},fx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Gp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Cl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ls=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},sr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},px=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Fh=function(t,e,n,i){return t._startAt&&(Mn?t._startAt.revert(xl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},mx=function s(t){return!t||t._ts&&s(t.parent)},Ap=function(t){return t._repeat?$r(t._tTime,t=t.duration()+t._rDelay)*t:0},$r=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},El=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Rl=function(t){return t._end=dn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ie)||0))},Pl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=dn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Rl(t),n._dirty||sr(n,t)),t},Wp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=El(t.rawTime(),e),(!e._dur||xa(0,e.totalDuration(),n)-e._tTime>Ie)&&e.render(n,!0)),sr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ie}},Vi=function(t,e,n,i){return e.parent&&Ls(e),e._start=dn((is(n)?n:n||t!==He?ui(t,n,e):t._time)+e._delay),e._end=dn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gp(t,e,"_first","_last",t._sort?"_start":0),Bh(e)||(t._recent=e),i||Wp(t,e),t._ts<0&&Pl(t,t._tTime),t},Xp=function(t,e){return(ei.ScrollTrigger||Al("scrollTrigger",e))&&ei.ScrollTrigger.create(e,t)},qp=function(t,e,n,i,r){if(iu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&kp!==$n.frame)return Ps.push(t),t._lazy=[r,i],1},gx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Bh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},_x=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&gx(t)&&!(!t._initted&&Bh(t))||(t._ts<0||t._dp._ts<0)&&!Bh(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=xa(0,t._tDur,e),h=$r(l,a),t._yoyo&&h&1&&(o=1-o),h!==$r(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Mn||i||t._zTime===Ie||!e&&t._zTime){if(!t._initted&&qp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ie:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Fh(t,e,n,!0),t._onUpdate&&!n&&ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ls(t,1),!n&&!Mn&&(ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Zr=function(t,e,n,i){var r=t._repeat,o=dn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:dn(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Pl(t,t._tTime=t._tDur*a),t.parent&&Rl(t),n||sr(t.parent,t),t},Cp=function(t){return t instanceof _n?sr(t):Zr(t,t._dur)},vx={_start:0,endTime:ma,totalDuration:ma},ui=function s(t,e,n){var i=t.labels,r=t._recent||vx,o=t.duration()>=di?r.endTime(!1):t._dur,a,l,c;return an(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},da=function(t,e,n){var i=is(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new je(e[0],o,e[r+1])},Ds=function(t,e){return t||t===0?e(t):e},xa=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!an(t)||!(e=lx.exec(t))?"":e[1]},yx=function(t,e,n){return Ds(n,function(i){return xa(t,e,i)})},kh=[].slice,Yp=function(t,e){return t&&Gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Gi(t[0]))&&!t.nodeType&&t!==Hi},bx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return an(i)&&!e||Yp(i,1)?(r=n).push.apply(r,fi(i)):n.push(i)})||n},fi=function(t,e,n){return ke&&!e&&ke.selector?ke.selector(t):an(t)&&!n&&(Nh||!Jr())?kh.call((e||$h).querySelectorAll(t),0):Sn(t)?bx(t,n):Yp(t)?kh.call(t,0):t?[t]:[]},zh=function(t){return t=fi(t)[0]||pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fi(e,n.querySelectorAll?n:n===t?pa("Invalid scope")||$h.createElement("div"):t)}},$p=function(t){return t.sort(function(){return .5-Math.random()})},Zp=function(t){if(qe(t))return t;var e=Gi(t)?t:{each:t},n=rr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return an(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,m){var _=(m||e).length,p=o[_],g,b,M,x,T,E,S,A,v;if(!p){if(v=e.grid==="auto"?0:(e.grid||[1,di])[1],!v){for(S=-di;S<(S=m[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=o[_]=[],g=l?Math.min(v,_)*h-.5:i%v,b=v===di?0:l?_*f/v-.5:i/v|0,S=0,A=di,E=0;E<_;E++)M=E%v-g,x=b-(E/v|0),p[E]=T=c?Math.abs(c==="y"?x:M):Dp(M*M+x*x),T>S&&(S=T),T<A&&(A=T);i==="random"&&$p(p),p.max=S-A,p.min=A,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=xn(e.amount||e.each)||0,n=n&&_<0?sm(n):n}return _=(p[d]-p.min)/p.max||0,dn(p.b+(n?n(_):_)*p.v)+p.u}},Hh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=dn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(is(n)?0:xn(n))}},Jp=function(t,e){var n=Sn(t),i,r;return!n&&Gi(t)&&(i=n=t.radius||di,t.values?(t=fi(t.values),(r=!is(t[0]))&&(i*=i)):t=Hh(t.increment)),Ds(e,n?qe(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=di,h=0,f=t.length,d,u;f--;)r?(d=t[f].x-a,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?t[h]:o,r||h===o||is(o)?h:h+xn(o)}:Hh(t))},Kp=function(t,e,n,i){return Ds(Sn(t)?!e:n===!0?!!(n=0):!i,function(){return Sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Mx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Sx=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},Ex=function(t,e,n){return Qp(t,e,0,1,n)},jp=function(t,e,n){return Ds(n,function(i){return t[~~e(i)]})},wx=function s(t,e,n){var i=e-t;return Sn(t)?jp(t,s(0,t.length),e):Ds(n,function(r){return(i+(r-t)%i)%i+t})},Tx=function s(t,e,n){var i=e-t,r=i*2;return Sn(t)?jp(t,s(0,t.length-1),e):Ds(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Kr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Np:Uh),n+=t.substr(e,i-e)+Kp(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Qp=function(t,e,n,i,r){var o=e-t,a=i-n;return Ds(r,function(l){return n+((l-t)/o*a||0)})},Ax=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=an(t),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Sn(t)&&!Sn(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(s(t[c-1],t[c]));f--,r=function(m){m*=f;var _=Math.min(d,~~m);return h[_](m-_)},n=e}else i||(t=ar(Sn(t)?[]:{},t));if(!h){for(l in e)eu.call(a,t,l,"get",e[l]);r=function(m){return ou(m,a)||(o?t.p:t)}}}return Ds(n,r)},Rp=function(t,e,n){var i=t.labels,r=di,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ti=function(t,e,n){var i=t.vars,r=i[e],o=ke,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ps.length&&Ml(),a&&(ke=a),h=l?r.apply(c,l):r.call(c),ke=o,h},ca=function(t){return Ls(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&ti(t,"onInterrupt"),t},qr,tm=[],em=function(t){if(t)if(t=!t.name&&t.default||t,Xh()||t.headless){var e=t.name,n=qe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ma,render:ou,add:eu,kill:Gx,modifier:Vx,rawVars:0},o={targetTest:0,get:0,getSetter:Il,aliases:{},register:0};if(Jr(),t!==i){if(Yn[e])return;pi(i,pi(Sl(t,r),o)),ar(i.prototype,ar(r,Sl(t,o))),Yn[i.prop=e]=i,t.targetTest&&(vl.push(i),Zh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bp(e,i),t.register&&t.register(En,i,Un)}else tm.push(t)},Te=255,ha={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},Ch=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},nm=function(t,e,n){var i=t?is(t)?[t>>16,t>>8&Te,t&Te]:0:ha.black,r,o,a,l,c,h,f,d,u,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ha[t])i=ha[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Uh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ch(l+1/3,r,o),i[1]=Ch(l,r,o),i[2]=Ch(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(qh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Uh)||ha.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Te,o=i[1]/Te,a=i[2]/Te,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},im=function(t){var e=[],n=[],i=-1;return t.split(ns).forEach(function(r){var o=r.match(lr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Pp=function(t,e,n){var i="",r=(t+i).match(ns),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return t;if(r=r.map(function(d){return(d=nm(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=im(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ns,"1").split(lr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ns),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},ns=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ha)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Cx=/hsl[a]?\(/,Qh=function(t){var e=t.join(" "),n;if(ns.lastIndex=0,ns.test(e))return n=Cx.test(e),t[1]=Pp(t[1],n),t[0]=Pp(t[0],n,im(t[1])),!0},ga,$n=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,f,d,u,m=function _(p){var g=s()-i,b=p===!0,M,x,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,M=T-o,(M>0||b)&&(E=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=M+(M>=r?4:r-M),x=1),b||(l=c(_)),x)for(u=0;u<a.length;u++)a[u](T,d,E,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Op&&(!Nh&&Xh()&&(Hi=Nh=window,$h=Hi.document||{},ei.gsap=En,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(En.version),Fp(bl||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),tm.forEach(em)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},ga=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ga=0,c=ma},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=f.time*1e3+r},add:function(p,g,b){var M=g?function(x,T,E,S){p(x,T,E,S),f.remove(M)}:p;return f.remove(p),a[b?"unshift":"push"](M),Jr(),M},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},f}(),Jr=function(){return!ga&&$n.wake()},ce={},Rx=/^[\d.\-M][\d.\-,\s]/,Px=/["']/g,Ix=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Px,"").trim():+c,i=l.substr(a+1).trim();return e},Lx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Dx=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ix(e[1])]:Lx(t).split(",").map(Hp)):ce._CE&&Rx.test(t)?ce._CE("",t):n},sm=function(t){return function(e){return 1-t(1-e)}},rm=function s(t,e){for(var n=t._first,i;n;)n instanceof _n?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},rr=function(t,e){return t&&(qe(t)?t:ce[t]||Dx(t))||e},hr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Dn(t,function(a){ce[a]=ei[a]=r,ce[o=a.toLowerCase()]=n;for(var l in r)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=r[l]}),r},om=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Dh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ax((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:om(a);return r=Dh/r,l.config=function(c,h){return s(t,c,h)},l},Ph=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:om(n);return i.config=function(r){return s(t,r)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;hr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;hr("Elastic",Rh("in"),Rh("out"),Rh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};hr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);hr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});hr("Circ",function(s){return-(Dp(1-s*s)-1)});hr("Sine",function(s){return s===1?1:-ox(s*sx)+1});hr("Back",Ph("in"),Ph("out"),Ph());ce.SteppedEase=ce.steps=ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ie;return function(a){return((i*xa(0,o,a)|0)+r)*n}}};Yr.ease=ce["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Jh+=s+","+s+"Params,"});var tu=function(t,e){this.id=rx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:jh,this.set=e?e.getSetter:Il},_a=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Zr(this,+e.duration,1,1),this.data=e.data,ke&&(this._ctx=ke,ke.data.push(this)),ga||$n.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Jr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Pl(this,n),!r._dp||r.parent||Wp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ie||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ap(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?$r(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ie?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?El(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ie?0:this._rts,this.totalTime(xa(-Math.abs(this._delay),this._tDur,r),i!==!1),Rl(this),px(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ie&&(this._tTime-=Ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?El(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hx);var i=Mn;return Mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ui(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ie)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=qe(n)?n:Vp,a=function(){var c=i.then;i.then=null,qe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ca(this)},s}();pi(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ie,_prom:0,_ps:!1,_rts:1});var _n=function(s){Lp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zn(n.sortChildren),He&&Vi(n.parent||He,es(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Xp(es(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return da(0,arguments,this),this},e.from=function(i,r,o){return da(1,arguments,this),this},e.fromTo=function(i,r,o,a){return da(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,ua(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new je(i,r,ui(this,o),1),this},e.call=function(i,r,o){return Vi(this,je.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new je(i,o,ui(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,ua(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,f){return a.startAt=o,ua(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,f)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:dn(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,m,_,p,g,b,M,x,T,E,S;if(this!==He&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,M=this._ts,g=!M,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=dn(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),T=$r(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(d=c-d,S=1),_!==T&&!this._lock){var A=E&&T&1,v=A===(E&&_&1);if(_<T&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(S?0:dn(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;rm(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=xx(this,dn(a),dn(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!_&&(ti(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||d>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!g){b=0,m&&(h+=this._zTime=-Ie);break}}u=m}else{u=this._last;for(var y=i<0?i:d;u;){if(m=u._prev,(u._act||y<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(y-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(y-u._start)*u._ts,r,o||Mn&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!g){b=0,m&&(h+=this._zTime=y?-Ie:Ie);break}}u=m}}if(b&&!r&&(this.pause(),b.render(d>=a?0:-Ie)._zTime=d>=a?1:-1,this._ts))return this._start=x,Rl(this),this.render(i,r,o);this._onUpdate&&!r&&ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(is(r)||(r=ui(this,r,i)),!(i instanceof _a)){if(Sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(an(i))return this.addLabel(i,r);if(qe(i))i=je.delayedCall(0,i);else return this}return this!==i?Vi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return an(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(Cl(this,i),i===this._recent&&(this._recent=this._last),sr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dn($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=ui(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=je.delayedCall(0,r||ma,o);return a.data="isPause",this._hasPause=1,Vi(this,a,ui(this,i))},e.removePause=function(i){var r=this._first;for(i=ui(this,i);r;)r._start===i&&r.data==="isPause"&&Ls(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=fi(i),l=this._first,c=is(r),h;l;)l instanceof je?ux(l._targets,a)&&(c?(!Rs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=ui(o,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,m=je.to(o,pi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ie,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Zr(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,f||[])}},r));return d?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,pi({startAt:{time:ui(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rp(this,ui(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rp(this,ui(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ie)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return sr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),sr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=di,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Zr(o,o===He&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(He._ts&&(zp(He,El(i,He)),kp=$n.frame),$n.frame>=wp){wp+=Jn.autoSleep||120;var r=He._first;if((!r||!r._ts)&&Jn.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},t}(_a);pi(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ux=function(t,e,n,i,r,o,a){var l=new Un(this._pt,t,e,0,1,ru,null,r),c=0,h=0,f,d,u,m,_,p,g,b;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Kr(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),d=n.match(Th)||[];f=Th.exec(i);)m=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?cr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Th.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yh.test(i)||g)&&(l.e=0),this._pt=l,l},eu=function(t,e,n,i,r,o,a,l,c,h){qe(i)&&(i=i(r||0,t,o));var f=t[e],d=n!=="get"?n:qe(f)?c?t[e.indexOf("set")||!qe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,u=qe(f)?c?kx:cm:su,m;if(an(i)&&(~i.indexOf("random(")&&(i=Kr(i)),i.charAt(1)==="="&&(m=cr(d,i)+(xn(d)||0),(m||m===0)&&(i=m))),!h||d!==i||Vh)return!isNaN(d*i)&&i!==""?(m=new Un(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?Hx:hm,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!f&&!(e in t)&&Al(e,i),Ux.call(this,t,e,d,i,u,l||Jn.stringFilter,c))},Nx=function(t,e,n,i,r){if(qe(t)&&(t=fa(t,r,e,n,i)),!Gi(t)||t.style&&t.nodeType||Sn(t)||Up(t))return an(t)?fa(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=fa(t[a],r,e,n,i);return o},nu=function(t,e,n,i,r,o){var a,l,c,h;if(Yn[t]&&(a=new Yn[t]).init(r,a.rawVars?e[t]:Nx(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==qr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Rs,Vh,iu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,b=g&&g.data==="nested"?g.vars.targets:p,M=t._overwrite==="auto"&&!Wh,x=t.timeline,T,E,S,A,v,y,P,D,O,z,q,H,Y;if(x&&(!d||!r)&&(r="none"),t._ease=rr(r,Yr.ease),t._yEase=f?sm(rr(f===!0?r:f,Yr.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(D=p[0]?Is(p[0]).harness:0,H=D&&i[D.prop],T=Sl(i,Zh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?xl:cx),_._lazy=0),o){if(Ls(t._startAt=je.set(p,pi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!u)&&t._startAt.revert(xl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),S=pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:g},T),H&&(S[D.prop]=H),Ls(t._startAt=je.set(p,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(xl):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ie,Ie);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Zn(l)||l&&!m,E=0;E<p.length;E++){if(v=p[E],P=v._gsap||Kh(p)[E]._gsap,t._ptLookup[E]=z={},Oh[P.id]&&Ps.length&&Ml(),q=b===p?E:b.indexOf(v),D&&(O=new D).init(v,H||T,t,q,b)!==!1&&(t._pt=A=new Un(t._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){z[G]=A}),O.priority&&(y=1)),!D||H)for(S in T)Yn[S]&&(O=nu(S,T,t,q,v,b))?O.priority&&(y=1):z[S]=A=eu.call(t,v,S,"get",T[S],q,b,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),M&&t._pt&&(Rs=t,He.killTweensOf(v,z,t.globalTime(e)),Y=!t.parent,Rs=0),t._pt&&l&&(Oh[P.id]=1)}y&&au(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&x.render(di,!0,!0)},Ox=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Vh=1,t.vars[e]="+=0",iu(t,a),Vh=0,l?pa(e+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ye(n)+xn(f.e)),f.b&&(f.b=h.s+xn(f.b))},Fx=function(t,e){var n=t[0]?Is(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=ar({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Bx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Sn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},fa=function(t,e,n,i,r){return qe(t)?t.call(e,n,i,r):an(t)&&~t.indexOf("random(")?Kr(t):t},am=Jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lm={};Dn(am+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return lm[s]=1});var je=function(s){Lp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ua(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,b=i.parent||He,M=(Sn(n)||Up(n)?is(n[0]):"length"in i)?[n]:fi(n),x,T,E,S,A,v,y,P;if(a._targets=M.length?Kh(M):pa("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||d||_l(c)||_l(h)){if(i=a.vars,x=a.timeline=new _n({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:M}),x.kill(),x.parent=x._dp=es(a),x._start=0,d||_l(c)||_l(h)){if(S=M.length,y=d&&Zp(d),Gi(d))for(A in d)~am.indexOf(A)&&(P||(P={}),P[A]=d[A]);for(T=0;T<S;T++)E=Sl(i,lm),E.stagger=0,g&&(E.yoyoEase=g),P&&ar(E,P),v=M[T],E.duration=+fa(c,es(a),T,v,M),E.delay=(+fa(h,es(a),T,v,M)||0)-a._delay,!d&&S===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(v,E,y?y(T,v,M):0),x._ease=ce.none;x.duration()?c=h=0:a.timeline=0}else if(m){ua(pi(x.vars.defaults,{ease:"none"})),x._ease=rr(m.ease||i.ease||"none");var D=0,O,z,q;if(Sn(m))m.forEach(function(H){return x.to(M,H,">")}),x.duration();else{E={};for(A in m)A==="ease"||A==="easeEach"||Bx(A,m[A],E,m.easeEach);for(A in E)for(O=E[A].sort(function(H,Y){return H.t-Y.t}),D=0,T=0;T<O.length;T++)z=O[T],q={ease:z.e,duration:(z.t-(T?O[T-1].t:0))/100*c},q[A]=z.v,x.to(M,q,D),D+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return u===!0&&!Wh&&(Rs=es(a),He.killTweensOf(M),Rs=0),Vi(b,es(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!m&&a._start===dn(b._time)&&Zn(f)&&mx(es(a))&&b.data!=="nested")&&(a._tTime=-Ie,a.render(Math.max(0,-h)||0)),p&&Xp(es(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Ie&&!h?l:i<Ie?0:i,d,u,m,_,p,g,b,M,x;if(!c)_x(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=dn(f%_),f===l?(m=this._repeat,d=c):(m=~~(f/_),m&&m===dn(f/_)&&(d=c,m--),d>c&&(d=c)),g=this._yoyo&&m&1,g&&(x=this._yEase,d=c-d),p=$r(this._tTime,_),d===a&&!o&&this._initted&&m===p)return this._tTime=f,this;m!==p&&(M&&this._yEase&&rm(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(dn(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(qp(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!a&&!r&&!m&&(ti(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Fh(this,i,r,o),ti(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Fh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ls(this,1),!r&&!(h&&!a)&&(f||a||g)&&(ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){ga||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||iu(this,c),h=this._ease(c/this._dur),Ox(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Pl(this,0),this.parent||Gp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Rs&&Rs.vars.overwrite!==!0)._first||ca(this),this.parent&&o!==this.timeline.totalDuration()&&Zr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fi(i):a,c=this._ptLookup,h=this._pt,f,d,u,m,_,p,g;if((!r||r==="all")&&fx(a,l))return r==="all"&&(this._pt=0),ca(this);for(f=this._op=this._op||[],r!=="all"&&(an(r)&&(_={},Dn(r,function(b){return _[b]=1}),r=_),r=Fx(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){d=c[g],r==="all"?(f[g]=r,m=d,u={}):(u=f[g]=f[g]||{},m=r);for(_ in m)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Cl(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&ca(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return da(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return da(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return He.killTweensOf(i,r,o)},t}(_a);pi(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(s){je[s]=function(){var t=new _n,e=kh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var su=function(t,e,n){return t[e]=n},cm=function(t,e,n){return t[e](n)},kx=function(t,e,n,i){return t[e](i.fp,n)},zx=function(t,e,n){return t.setAttribute(e,n)},Il=function(t,e){return qe(t[e])?cm:Tl(t[e])&&t.setAttribute?zx:su},hm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Hx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ru=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ou=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Vx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Gx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Cl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Wx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},au=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Un=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||hm,this.d=l||this,this.set=c||su,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Wx,this.m=n,this.mt=r,this.tween=i},s}();Dn(Jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Zh[s]=1});ei.TweenMax=ei.TweenLite=je;ei.TimelineLite=ei.TimelineMax=_n;He=new _n({sortChildren:!1,defaults:Yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Qh;var or=[],yl={},Xx=[],Ip=0,qx=0,Ih=function(t){return(yl[t]||Xx).map(function(e){return e()})},Gh=function(){var t=Date.now(),e=[];t-Ip>2&&(Ih("matchMediaInit"),or.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Hi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ih("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ip=t,Ih("matchMedia"))},um=function(){function s(e,n){this.selector=n&&zh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){qe(n)&&(r=i,i=n,n=qe);var o=this,a=function(){var c=ke,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=zh(r)),ke=o,f=i.apply(o,arguments),qe(f)&&o._r.push(f),ke=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===qe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ke;ke=null,n(this),ke=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof je&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=or.length;o--;)or[o].id===this.id&&or.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),Yx=function(){function s(e){this.contexts=[],this.scope=e,ke&&ke.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Gi(n)||(n={matches:n});var o=new um(0,r||this.scope),a=o.conditions={},l,c,h;ke&&!o.selector&&(o.selector=ke.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Hi.matchMedia(n[c]),l&&(or.indexOf(o)<0&&or.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Gh):l.addEventListener("change",Gh)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),wl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return em(i)})},timeline:function(t){return new _n(t)},getTweensOf:function(t,e){return He.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=fi(t)[0]);var r=Is(t||{}).get,o=n?Vp:Hp;return n==="native"&&(n=""),t&&(e?o((Yn[e]&&Yn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Yn[a]&&Yn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=fi(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}t=t[0]||{};var o=Yn[e],a=Is(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;qr._pt=0,f.init(t,n?h+n:h,qr,0,[t]),f.render(1,f),qr._pt&&ou(1,qr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=En.to(t,ar((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return He.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=rr(t.ease,Yr.ease)),Tp(Yr,t||{})},config:function(t){return Tp(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Yn[a]&&!ei[a]&&pa(e+" effect requires "+a+" plugin.")}),Ah[e]=function(a,l,c){return n(fi(a),pi(l||{},r),c)},o&&(_n.prototype[e]=function(a,l,c){return this.add(Ah[e](a,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=rr(e)},parseEase:function(t,e){return arguments.length?rr(t,e):ce},getById:function(t){return He.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _n(t),i,r;for(n.smoothChildTiming=Zn(t.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(e||!(!i._dur&&i instanceof je&&i.vars.onComplete===i._targets[0]))&&Vi(n,i,i._start-i._delay),i=r;return Vi(He,n,0),n},context:function(t,e){return t?new um(t,e):ke},matchMedia:function(t){return new Yx(t)},matchMediaRefresh:function(){return or.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Gh()},addEventListener:function(t,e){var n=yl[t]||(yl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=yl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:wx,wrapYoyo:Tx,distribute:Zp,random:Kp,snap:Jp,normalize:Ex,getUnit:xn,clamp:yx,splitColor:nm,toArray:fi,selector:zh,mapRange:Qp,pipe:Mx,unitize:Sx,interpolate:Ax,shuffle:$p},install:Fp,effects:Ah,ticker:$n,updateRoot:_n.updateRoot,plugins:Yn,globalTimeline:He,core:{PropTween:Un,globals:Bp,Tween:je,Timeline:_n,Animation:_a,getCache:Is,_removeLinkedListItem:Cl,reverting:function(){return Mn},context:function(t){return t&&ke&&(ke.data.push(t),t._ctx=ke),ke},suppressOverwrites:function(t){return Wh=t}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return wl[s]=je[s]});$n.add(_n.updateRoot);qr=wl.to({},{duration:0});var $x=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Zx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=$x(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Lh=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(an(r)&&(l={},Dn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Zx(a,r)}}}},En=wl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Lh("roundProps",Hh),Lh("modifiers"),Lh("snap",Jp))||wl;je.version=_n.version=En.version="3.12.5";Op=1;Xh()&&Jr();var Jx=ce.Power0,Kx=ce.Power1,jx=ce.Power2,Qx=ce.Power3,tv=ce.Power4,ev=ce.Linear,nv=ce.Quad,iv=ce.Cubic,sv=ce.Quart,rv=ce.Quint,ov=ce.Strong,av=ce.Elastic,lv=ce.Back,cv=ce.SteppedEase,hv=ce.Bounce,uv=ce.Sine,dv=ce.Expo,fv=ce.Circ;var dm,Us,Qr,pu,pr,pv,fm,mu,mv=function(){return typeof window<"u"},rs={},fr=180/Math.PI,to=Math.PI/180,jr=Math.atan2,pm=1e8,gu=/([A-Z])/g,gv=/(left|right|width|margin|padding|x)/i,_v=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Mm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bv=function(t,e,n){return t.style[e]=n},Mv=function(t,e,n){return t.style.setProperty(e,n)},Sv=function(t,e,n){return t._gsap[e]=n},Ev=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},wv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Tv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ve="transform",Kn=Ve+"Origin",Av=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in rs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Wi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ss(i,a)}):this.tfm[t]=o.x?o[t]:ss(i,t),t===Kn&&(this.tfm.zOrigin=o.zOrigin);else return Wi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ve)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=Ve}(r||e)&&this.props.push(t,e,r[t])},Sm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Cv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=mu(),(!r||!r.isStart)&&!n[Ve]&&(Sm(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Em=function(t,e){var n={target:t,props:[],revert:Cv,save:Av};return t._gsap||En.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},wm,uu=function(t,e){var n=Us.createElementNS?Us.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Us.createElement(t);return n&&n.style?n:Us.createElement(t)},Xi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(gu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,eo(e)||e,1)||""},mm="O,Moz,ms,Ms,Webkit".split(","),eo=function(t,e,n){var i=e||pr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(mm[o]+t in r););return o<0?null:(o===3?"ms":o>=0?mm[o]:"")+t},du=function(){mv()&&window.document&&(dm=window,Us=dm.document,Qr=Us.documentElement,pr=uu("div")||{style:{}},pv=uu("div"),Ve=eo(Ve),Kn=Ve+"Origin",pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wm=!!eo("perspective"),mu=En.core.reverting,pu=1)},lu=function s(t){var e=uu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Qr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qr.removeChild(e),this.style.cssText=r,o},gm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tm=function(t){var e;try{e=t.getBBox()}catch{e=lu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===lu||(e=lu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+gm(t,["x","cx","x1"])||0,y:+gm(t,["y","cy","y1"])||0,width:0,height:0}:e},Am=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tm(t))},mr=function(t,e){if(e){var n=t.style,i;e in rs&&e!==Kn&&(e=Ve),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(gu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ns=function(t,e,n,i,r,o){var a=new Un(t._pt,e,n,0,1,o?Mm:bm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},_m={deg:1,rad:1,turn:1},Rv={grid:1,flex:1},Os=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=pr.style,l=gv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",m,_,p,g;if(i===o||!r||_m[i]||_m[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),g=t.getCTM&&Am(t),(u||o==="%")&&(rs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ye(u?r/m*f:r/100*m);if(a[l?"width":"height"]=f+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Us||!_.appendChild)&&(_=Us.body),p=_._gsap,p&&u&&p.width&&l&&p.time===$n.time&&!p.uncache)return Ye(r/p.width*f);if(u&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=f+i,m=t[h],b?t.style[e]=b:mr(t,e)}else(u||o==="%")&&!Rv[Xi(_,"display")]&&(a.position=Xi(t,"position")),_===t&&(a.position="static"),_.appendChild(pr),m=pr[h],_.removeChild(pr),a.position="absolute";return l&&u&&(p=Is(_),p.time=$n.time,p.width=_[h]),Ye(d?m*r/f:m&&r?f/m*r:0)},ss=function(t,e,n,i){var r;return pu||du(),e in Wi&&e!=="transform"&&(e=Wi[e],~e.indexOf(",")&&(e=e.split(",")[0])),rs[e]&&e!=="transform"?(r=ba(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Dl(Xi(t,Kn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ll[e]&&Ll[e](t,e,n)||Xi(t,e)||jh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Os(t,e,r,n)+n:r},Pv=function(t,e,n,i){if(!n||n==="none"){var r=eo(e,t,1),o=r&&Xi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Xi(t,"borderTopColor"))}var a=new Un(this._pt,t.style,e,0,1,ru),l=0,c=0,h,f,d,u,m,_,p,g,b,M,x,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Xi(t,e)||i,_?t.style[e]=_:mr(t,e)),h=[n,i],Qh(h),n=h[0],i=h[1],d=n.match(lr)||[],T=i.match(lr)||[],T.length){for(;f=lr.exec(i);)p=f[0],b=i.substring(l,f.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,x=_.substr((u+"").length),p.charAt(1)==="="&&(p=cr(u,p)+x),g=parseFloat(p),M=p.substr((g+"").length),l=lr.lastIndex-M.length,M||(M=M||Jn.units[e]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(u=Os(t,e,_,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Mm:bm;return Yh.test(i)&&(a.e=0),this._pt=a,a},xm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Iv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=xm[n]||n,e[1]=xm[i]||i,e.join(" ")},Lv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],rs[a]&&(l=1,a=a==="transformOrigin"?Kn:Ve),mr(n,a);l&&(mr(n,Ve),o&&(o.svg&&n.removeAttribute("transform"),ba(n,1),o.uncache=1,Sm(i)))}},Ll={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Un(t._pt,e,n,0,0,Lv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},ya=[1,0,0,1,0,0],Cm={},Rm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},vm=function(t){var e=Xi(t,Ve);return Rm(e)?ya:e.substr(7).match(qh).map(Ye)},_u=function(t,e){var n=t._gsap||Is(t),i=t.style,r=vm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ya:r):(r===ya&&!t.offsetParent&&t!==Qr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Qr.appendChild(t)),r=vm(t),l?i.display=l:mr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Qr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fu=function(t,e,n,i,r,o){var a=t._gsap,l=r||_u(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],b=l[5],M=e.split(" "),x=parseFloat(M[0])||0,T=parseFloat(M[1])||0,E,S,A,v;n?l!==ya&&(S=u*p-m*_)&&(A=x*(p/S)+T*(-_/S)+(_*b-p*g)/S,v=x*(-m/S)+T*(u/S)-(u*b-m*g)/S,x=A,T=v):(E=Tm(t),x=E.x+(~M[0].indexOf("%")?x/100*E.width:x),T=E.y+(~(M[1]||M[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(g=x-c,b=T-h,a.xOffset=f+(g*u+b*_)-g,a.yOffset=d+(g*m+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Kn]="0px 0px",o&&(Ns(o,a,"xOrigin",c,x),Ns(o,a,"yOrigin",h,T),Ns(o,a,"xOffset",f,a.xOffset),Ns(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},ba=function(t,e){var n=t._gsap||new tu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Xi(t,Kn)||"0",h,f,d,u,m,_,p,g,b,M,x,T,E,S,A,v,y,P,D,O,z,q,H,Y,G,st,L,ht,Nt,Qt,Z,it;return h=f=d=_=p=g=b=M=x=0,u=m=1,n.svg=!!(t.getCTM&&Am(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ve]!=="none"?l[Ve]:"")),i.scale=i.rotate=i.translate="none"),S=_u(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),fu(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,S)),T=n.xOrigin||0,E=n.yOrigin||0,S!==ya&&(P=S[0],D=S[1],O=S[2],z=S[3],h=q=S[4],f=H=S[5],S.length===6?(u=Math.sqrt(P*P+D*D),m=Math.sqrt(z*z+O*O),_=P||D?jr(D,P)*fr:0,b=O||z?jr(O,z)*fr+_:0,b&&(m*=Math.abs(Math.cos(b*to))),n.svg&&(h-=T-(T*P+E*O),f-=E-(T*D+E*z))):(it=S[6],Qt=S[7],L=S[8],ht=S[9],Nt=S[10],Z=S[11],h=S[12],f=S[13],d=S[14],A=jr(it,Nt),p=A*fr,A&&(v=Math.cos(-A),y=Math.sin(-A),Y=q*v+L*y,G=H*v+ht*y,st=it*v+Nt*y,L=q*-y+L*v,ht=H*-y+ht*v,Nt=it*-y+Nt*v,Z=Qt*-y+Z*v,q=Y,H=G,it=st),A=jr(-O,Nt),g=A*fr,A&&(v=Math.cos(-A),y=Math.sin(-A),Y=P*v-L*y,G=D*v-ht*y,st=O*v-Nt*y,Z=z*y+Z*v,P=Y,D=G,O=st),A=jr(D,P),_=A*fr,A&&(v=Math.cos(A),y=Math.sin(A),Y=P*v+D*y,G=q*v+H*y,D=D*v-P*y,H=H*v-q*y,P=Y,q=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=Ye(Math.sqrt(P*P+D*D+O*O)),m=Ye(Math.sqrt(H*H+it*it)),A=jr(q,H),b=Math.abs(A)>2e-4?A*fr:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Rm(Xi(t,Ve)),Y&&t.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(u*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ye(u),n.scaleY=Ye(m),n.rotation=Ye(_)+a,n.rotationX=Ye(p)+a,n.rotationY=Ye(g)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Kn]=Dl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Uv:wm?Pm:Dv,n.uncache=0,n},Dl=function(t){return(t=t.split(" "))[0]+" "+t[1]},cu=function(t,e,n){var i=xn(e);return Ye(parseFloat(e)+parseFloat(Os(t,"x",n+"px",i)))+i},Dv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pm(t,e)},ur="0deg",va="0px",dr=") ",Pm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,M=n.zOrigin,x="",T=g==="auto"&&t&&t!==1||g===!0;if(M&&(f!==ur||h!==ur)){var E=parseFloat(h)*to,S=Math.sin(E),A=Math.cos(E),v;E=parseFloat(f)*to,v=Math.cos(E),o=cu(b,o,S*v*-M),a=cu(b,a,-Math.sin(E)*-M),l=cu(b,l,A*v*-M+M)}p!==va&&(x+="perspective("+p+dr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(T||o!==va||a!==va||l!==va)&&(x+=l!==va||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+dr),c!==ur&&(x+="rotate("+c+dr),h!==ur&&(x+="rotateY("+h+dr),f!==ur&&(x+="rotateX("+f+dr),(d!==ur||u!==ur)&&(x+="skew("+d+", "+u+dr),(m!==1||_!==1)&&(x+="scale("+m+", "+_+dr),b.style[Ve]=x||"translate(0, 0)"},Uv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,M=parseFloat(o),x=parseFloat(a),T,E,S,A,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=to,c*=to,T=Math.cos(l)*f,E=Math.sin(l)*f,S=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(h*=to,v=Math.tan(c-h),v=Math.sqrt(1+v*v),S*=v,A*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),T*=v,E*=v)),T=Ye(T),E=Ye(E),S=Ye(S),A=Ye(A)):(T=f,A=d,E=S=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Os(u,"x",o,"px"),x=Os(u,"y",a,"px")),(m||_||p||g)&&(M=Ye(M+m-(m*T+_*S)+p),x=Ye(x+_-(m*E+_*A)+g)),(i||r)&&(v=u.getBBox(),M=Ye(M+i/100*v.width),x=Ye(x+r/100*v.height)),v="matrix("+T+","+E+","+S+","+A+","+M+","+x+")",u.setAttribute("transform",v),b&&(u.style[Ve]=v)},Nv=function(t,e,n,i,r){var o=360,a=an(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?fr:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*pm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*pm)%o-~~(c/o)*o)),t._pt=d=new Un(t._pt,e,n,i,c,xv),d.e=h,d.u="deg",t._props.push(n),d},ym=function(t,e){for(var n in e)t[n]=e[n];return t},Ov=function(t,e,n){var i=ym({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ve]=e,a=ba(n,1),mr(n,Ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ve],o[Ve]=e,a=ba(n,1),o[Ve]=c);for(l in rs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=xn(c),m=xn(h),f=u!==m?Os(n,l,c,m):parseFloat(c),d=parseFloat(h),t._pt=new Un(t._pt,a,l,f,d-f,hu),t._pt.u=m||0,t._props.push(l));ym(a,i)};Dn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ll[t>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(m){return ss(a,m,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var xu={name:"css",register:du,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,d,u,m,_,p,g,b,M,x,T,E,S,A;pu||du(),this.styles=this.styles||Em(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Yn[_]&&nu(_,e,n,i,t,r)))){if(u=typeof h,m=Ll[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Kr(h)),m)m(this,t,_,h,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ns.lastIndex=0,ns.test(c)||(p=xn(c),g=xn(h)),g?p!==g&&(c=Os(t,_,c,g)+g):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),A.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],an(c)&&~c.indexOf("random(")&&(c=Kr(c)),xn(c+"")||c==="auto"||(c+=Jn.units[_]||xn(ss(t,_))||""),(c+"").charAt(1)==="="&&(c=ss(t,_))):c=ss(t,_),d=parseFloat(c),b=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),f=parseFloat(h),_ in Wi&&(_==="autoAlpha"&&(d===1&&ss(t,"visibility")==="hidden"&&f&&(d=0),A.push("visibility",0,a.visibility),Ns(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in rs,M){if(this.styles.save(_),x||(T=t._gsap,T.renderTransform&&!e.parseTransform||ba(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,x=this._pt=new Un(this._pt,a,Ve,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new Un(this._pt,T,"scaleY",T.scaleY,(b?cr(T.scaleY,b+f):f)-T.scaleY||0,hu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(Kn,0,a[Kn]),h=Iv(h),T.svg?fu(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&Ns(this,T,"zOrigin",T.zOrigin,g),Ns(this,a,_,Dl(c),Dl(h)));continue}else if(_==="svgOrigin"){fu(t,h,1,E,0,this);continue}else if(_ in Cm){Nv(this,T,_,d,b?cr(d,b+h):h);continue}else if(_==="smoothOrigin"){Ns(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Ov(this,h,t);continue}}else _ in a||(_=eo(_)||_);if(M||(f||f===0)&&(d||d===0)&&!_v.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),g=xn(h)||(_ in Jn.units?Jn.units[_]:p),p!==g&&(d=Os(t,_,c,g)),this._pt=new Un(this._pt,M?T:a,_,d,(b?cr(d,b+f):f)-d,!M&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?yv:hu),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=vv);else if(_ in a)Pv.call(this,t,_,c,b?b+h:h);else if(_ in t)this.add(t,_,c||t[_],b?b+h:h,i,r);else if(_!=="parseTransform"){Al(_,h);continue}M||(_ in a?A.push(_,0,a[_]):A.push(_,1,c||t[_])),o.push(_)}}S&&au(this)},render:function(t,e){if(e.tween._time||!mu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ss,aliases:Wi,getSetter:function(t,e,n){var i=Wi[e];return i&&i.indexOf(",")<0&&(e=i),e in rs&&e!==Kn&&(t._gsap.x||ss(t,"x"))?n&&fm===n?e==="scale"?Ev:Sv:(fm=n||{})&&(e==="scale"?wv:Tv):t.style&&!Tl(t.style[e])?bv:~e.indexOf("-")?Mv:Il(t,e)},core:{_removeProperty:mr,_getMatrix:_u}};En.utils.checkPrefix=eo;En.core.getStyleSaver=Em;(function(s,t,e,n){var i=Dn(s+","+t+","+e,function(r){rs[r]=1});Dn(t,function(r){Jn.units[r]="deg",Cm[r]=1}),Wi[i[13]]=s+","+t,Dn(n,function(r){var o=r.split(":");Wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Jn.units[s]="px"});En.registerPlugin(xu);var Qe=En.registerPlugin(xu)||En,VT=Qe.core.Tween;function Im(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Fv(s,t,e){return t&&Im(s.prototype,t),e&&Im(s,e),s}var vn,Ol,Bv,ni,Fs,Bs,io,Dm,gr,Sa,Um,os,Ai,Nm,Om=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Fm=1,no=[],oe=[],Ci=[],Ea=Date.now,vu=function(t,e){return e},kv=function(){var t=Sa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Ci),oe=n,Ci=i,vu=function(o,a){return e[o](a)}},ls=function(t,e){return~Ci.indexOf(t)&&Ci[Ci.indexOf(t)+1][e]},wa=function(t){return!!~Um.indexOf(t)},On=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Nn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ul="scrollLeft",Nl="scrollTop",yu=function(){return os&&os.isPressed||oe.cache++},Fl=function(t,e){var n=function i(r){if(r||r===0){Fm&&(ni.history.scrollRestoration="manual");var o=os&&os.isPressed;r=i.v=Math.round(r)||(os&&os.iOS?1:0),t(r),i.cacheID=oe.cache,o&&vu("ss",r)}else(e||oe.cache!==i.cacheID||vu("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Ul,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fl(function(s){return arguments.length?ni.scrollTo(s,en.sc()):ni.pageXOffset||Fs[Ul]||Bs[Ul]||io[Ul]||0})},en={s:Nl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:Fl(function(s){return arguments.length?ni.scrollTo(wn.sc(),s):ni.pageYOffset||Fs[Nl]||Bs[Nl]||io[Nl]||0})},Fn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},as=function(t,e){var n=e.s,i=e.sc;wa(t)&&(t=Fs.scrollingElement||Bs);var r=oe.indexOf(t),o=i===en.sc?1:2;!~r&&(r=oe.push(t)-1),oe[r+o]||On(t,"scroll",yu);var a=oe[r+o],l=a||(oe[r+o]=Fl(ls(t,n),!0)||(wa(t)?i:Fl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Bl=function(t,e,n){var i=t,r=t,o=Ea(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Ea();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(m){var _=a,p=r,g=Ea();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},Ma=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Lm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Bm=function(){Sa=vn.core.globals().ScrollTrigger,Sa&&Sa.core&&kv()},km=function(t){return vn=t||Om(),!Ol&&vn&&typeof document<"u"&&document.body&&(ni=window,Fs=document,Bs=Fs.documentElement,io=Fs.body,Um=[ni,Fs,Bs,io],Bv=vn.utils.clamp,Nm=vn.core.context||function(){},gr="onpointerenter"in io?"pointer":"mouse",Dm=$e.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=$e.eventTypes=("ontouchstart"in Bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fm=0},500),Bm(),Ol=1),Ol};wn.op=en;oe.cache=0;var $e=function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ol||km(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Sa||Bm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,b=n.onDrag,M=n.onPress,x=n.onRelease,T=n.onRight,E=n.onLeft,S=n.onUp,A=n.onDown,v=n.onChangeX,y=n.onChangeY,P=n.onChange,D=n.onToggleX,O=n.onToggleY,z=n.onHover,q=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,G=n.isNormalizer,st=n.onGestureStart,L=n.onGestureEnd,ht=n.onWheel,Nt=n.onEnable,Qt=n.onDisable,Z=n.onClick,it=n.scrollSpeed,bt=n.capture,rt=n.allowClicks,Rt=n.lockAxis,Lt=n.onLockAxis;this.target=a=Fn(a)||Bs,this.vars=n,u&&(u=vn.utils.toArray(u)),i=i||1e-9,r=r||0,m=m||1,it=it||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(io).lineHeight)||22);var Ft,Wt,et,Q,I,wt,nt,B=this,at=0,Ot=0,St=n.passive||!h,R=as(a,wn),w=as(a,en),V=R(),K=w(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",J=wa(a),pt=a.ownerDocument||Fs,dt=[0,0,0],xt=[0,0,0],Zt=0,ot=function(){return Zt=Ea()},ft=function(Dt,ee){return(B.event=Dt)&&u&&~u.indexOf(Dt.target)||ee&&j&&Dt.pointerType!=="touch"||Y&&Y(Dt,ee)},Vt=function(){B._vx.reset(),B._vy.reset(),Wt.pause(),f&&f(B)},zt=function(){var Dt=B.deltaX=Lm(dt),ee=B.deltaY=Lm(xt),Mt=Math.abs(Dt)>=i,Jt=Math.abs(ee)>=i;P&&(Mt||Jt)&&P(B,Dt,ee,dt,xt),Mt&&(T&&B.deltaX>0&&T(B),E&&B.deltaX<0&&E(B),v&&v(B),D&&B.deltaX<0!=at<0&&D(B),at=B.deltaX,dt[0]=dt[1]=dt[2]=0),Jt&&(A&&B.deltaY>0&&A(B),S&&B.deltaY<0&&S(B),y&&y(B),O&&B.deltaY<0!=Ot<0&&O(B),Ot=B.deltaY,xt[0]=xt[1]=xt[2]=0),(Q||et)&&(H&&H(B),et&&(b(B),et=!1),Q=!1),wt&&!(wt=!1)&&Lt&&Lt(B),I&&(ht(B),I=!1),Ft=0},At=function(Dt,ee,Mt){dt[Mt]+=Dt,xt[Mt]+=ee,B._vx.update(Dt),B._vy.update(ee),c?Ft||(Ft=requestAnimationFrame(zt)):zt()},te=function(Dt,ee){Rt&&!nt&&(B.axis=nt=Math.abs(Dt)>Math.abs(ee)?"x":"y",wt=!0),nt!=="y"&&(dt[2]+=Dt,B._vx.update(Dt,!0)),nt!=="x"&&(xt[2]+=ee,B._vy.update(ee,!0)),c?Ft||(Ft=requestAnimationFrame(zt)):zt()},Xt=function(Dt){if(!ft(Dt,1)){Dt=Ma(Dt,h);var ee=Dt.clientX,Mt=Dt.clientY,Jt=ee-B.x,Ut=Mt-B.y,$t=B.isDragging;B.x=ee,B.y=Mt,($t||Math.abs(B.startX-ee)>=r||Math.abs(B.startY-Mt)>=r)&&(b&&(et=!0),$t||(B.isDragging=!0),te(Jt,Ut),$t||p&&p(B))}},ue=B.onPress=function(Tt){ft(Tt,1)||Tt&&Tt.button||(B.axis=nt=null,Wt.pause(),B.isPressed=!0,Tt=Ma(Tt),at=Ot=0,B.startX=B.x=Tt.clientX,B.startY=B.y=Tt.clientY,B._vx.reset(),B._vy.reset(),On(G?a:pt,Ai[1],Xt,St,!0),B.deltaX=B.deltaY=0,M&&M(B))},U=B.onRelease=function(Tt){if(!ft(Tt,1)){Nn(G?a:pt,Ai[1],Xt,!0);var Dt=!isNaN(B.y-B.startY),ee=B.isDragging,Mt=ee&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Jt=Ma(Tt);!Mt&&Dt&&(B._vx.reset(),B._vy.reset(),h&&rt&&vn.delayedCall(.08,function(){if(Ea()-Zt>300&&!Tt.defaultPrevented){if(Tt.target.click)Tt.target.click();else if(pt.createEvent){var Ut=pt.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,ni,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),Tt.target.dispatchEvent(Ut)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,f&&ee&&!G&&Wt.restart(!0),g&&ee&&g(B),x&&x(B,Mt)}},_t=function(Dt){return Dt.touches&&Dt.touches.length>1&&(B.isGesturing=!0)&&st(Dt,B.isDragging)},$=function(){return(B.isGesturing=!1)||L(B)},tt=function(Dt){if(!ft(Dt)){var ee=R(),Mt=w();At((ee-V)*it,(Mt-K)*it,1),V=ee,K=Mt,f&&Wt.restart(!0)}},mt=function(Dt){if(!ft(Dt)){Dt=Ma(Dt,h),ht&&(I=!0);var ee=(Dt.deltaMode===1?l:Dt.deltaMode===2?ni.innerHeight:1)*m;At(Dt.deltaX*ee,Dt.deltaY*ee,0),f&&!G&&Wt.restart(!0)}},vt=function(Dt){if(!ft(Dt)){var ee=Dt.clientX,Mt=Dt.clientY,Jt=ee-B.x,Ut=Mt-B.y;B.x=ee,B.y=Mt,Q=!0,f&&Wt.restart(!0),(Jt||Ut)&&te(Jt,Ut)}},qt=function(Dt){B.event=Dt,z(B)},pe=function(Dt){B.event=Dt,q(B)},Xe=function(Dt){return ft(Dt)||Ma(Dt,h)&&Z(B)};Wt=B._dc=vn.delayedCall(d||.25,Vt).pause(),B.deltaX=B.deltaY=0,B._vx=Bl(0,50,!0),B._vy=Bl(0,50,!0),B.scrollX=R,B.scrollY=w,B.isDragging=B.isGesturing=B.isPressed=!1,Nm(this),B.enable=function(Tt){return B.isEnabled||(On(J?pt:a,"scroll",yu),o.indexOf("scroll")>=0&&On(J?pt:a,"scroll",tt,St,bt),o.indexOf("wheel")>=0&&On(a,"wheel",mt,St,bt),(o.indexOf("touch")>=0&&Dm||o.indexOf("pointer")>=0)&&(On(a,Ai[0],ue,St,bt),On(pt,Ai[2],U),On(pt,Ai[3],U),rt&&On(a,"click",ot,!0,!0),Z&&On(a,"click",Xe),st&&On(pt,"gesturestart",_t),L&&On(pt,"gestureend",$),z&&On(a,gr+"enter",qt),q&&On(a,gr+"leave",pe),H&&On(a,gr+"move",vt)),B.isEnabled=!0,Tt&&Tt.type&&ue(Tt),Nt&&Nt(B)),B},B.disable=function(){B.isEnabled&&(no.filter(function(Tt){return Tt!==B&&wa(Tt.target)}).length||Nn(J?pt:a,"scroll",yu),B.isPressed&&(B._vx.reset(),B._vy.reset(),Nn(G?a:pt,Ai[1],Xt,!0)),Nn(J?pt:a,"scroll",tt,bt),Nn(a,"wheel",mt,bt),Nn(a,Ai[0],ue,bt),Nn(pt,Ai[2],U),Nn(pt,Ai[3],U),Nn(a,"click",ot,!0),Nn(a,"click",Xe),Nn(pt,"gesturestart",_t),Nn(pt,"gestureend",$),Nn(a,gr+"enter",qt),Nn(a,gr+"leave",pe),Nn(a,gr+"move",vt),B.isEnabled=B.isPressed=B.isDragging=!1,Qt&&Qt(B))},B.kill=B.revert=function(){B.disable();var Tt=no.indexOf(B);Tt>=0&&no.splice(Tt,1),os===B&&(os=0)},no.push(B),G&&wa(a)&&(os=B),B.enable(_)},Fv(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();$e.version="3.12.5";$e.create=function(s){return new $e(s)};$e.register=km;$e.getAll=function(){return no.slice()};$e.getById=function(s){return no.filter(function(t){return t.vars.id===s})[0]};Om()&&vn.registerPlugin($e);var Pt,oo,he,Ge,Ri,Ne,ig,tc,Ba,La,Aa,kl,Tn,sc,Cu,kn,zm,Hm,ao,sg,bu,rg,Bn,Ru,og,ag,ks,Pu,Nu,lo,Ou,ec,Iu,Mu,zl=1,An=Date.now,Su=An(),_i=0,Ca=0,Vm=function(t,e,n){var i=si(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Gm=function(t,e){return e&&(!si(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},zv=function s(){return Ca&&requestAnimationFrame(s)},Wm=function(){return sc=1},Xm=function(){return sc=0},qi=function(t){return t},Ra=function(t){return Math.round(t*1e5)/1e5||0},lg=function(){return typeof window<"u"},cg=function(){return Pt||lg()&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},Mr=function(t){return!!~ig.indexOf(t)},hg=function(t){return(t==="Height"?Ou:he["inner"+t])||Ri["client"+t]||Ne["client"+t]},ug=function(t){return ls(t,"getBoundingClientRect")||(Mr(t)?function(){return Ql.width=he.innerWidth,Ql.height=Ou,Ql}:function(){return cs(t)})},Hv=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=ls(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?hg(r):t["client"+r])||0}},Vv=function(t,e){return!e||~Ci.indexOf(t)?ug(t):function(){return Ql}},Yi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ls(t,n))?o()-ug(t)()[r]:Mr(t)?(Ri[n]||Ne[n])-hg(i):t[n]-t["offset"+i])},Hl=function(t,e){for(var n=0;n<ao.length;n+=3)(!e||~e.indexOf(ao[n+1]))&&t(ao[n],ao[n+1],ao[n+2])},si=function(t){return typeof t=="string"},Hn=function(t){return typeof t=="function"},Pa=function(t){return typeof t=="number"},_r=function(t){return typeof t=="object"},Ta=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Eu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},so=Math.abs,dg="left",fg="top",Fu="right",Bu="bottom",vr="width",yr="height",Da="Right",Ua="Left",Na="Top",Oa="Bottom",nn="padding",mi="margin",ho="Width",ku="Height",ln="px",gi=function(t){return he.getComputedStyle(t)},Gv=function(t){var e=gi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},qm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cs=function(t,e){var n=e&&gi(t)[Cu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},nc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},pg=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Wv=function(t){return function(e){return Pt.utils.snap(pg(t),e)}},zu=function(t){var e=Pt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},Xv=function(t){return function(e,n){return zu(pg(t))(e,n.direction)}},Vl=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},pn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Gl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Ym={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wl={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},Zl=function(t,e){if(si(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ic?ic[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Xl=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,m=Ge.createElement("div"),_=Mr(n)||ls(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?Ne:n,b=t.indexOf("start")!==-1,M=b?c:h,x="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(i===en?Fu:Bu)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=x,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Jl(m,0,i,b),m},Jl=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+ho]=1,r["border"+a+ho]=0,r[n.p]=e+"px",Pt.set(t,r)},ae=[],Lu={},ka,$m=function(){return An()-_i>34&&(ka||(ka=requestAnimationFrame(hs)))},ro=function(){(!Bn||!Bn.isPressed||Bn.startX>Ne.clientWidth)&&(oe.cache++,Bn?ka||(ka=requestAnimationFrame(hs)):hs(),_i||Er("scrollStart"),_i=An())},wu=function(){ag=he.innerWidth,og=he.innerHeight},Ia=function(){oe.cache++,!Tn&&!rg&&!Ge.fullscreenElement&&!Ge.webkitFullscreenElement&&(!Ru||ag!==he.innerWidth||Math.abs(he.innerHeight-og)>he.innerHeight*.25)&&tc.restart(!0)},Sr={},qv=[],mg=function s(){return fn(Ht,"scrollEnd",s)||xr(!0)},Er=function(t){return Sr[t]&&Sr[t].map(function(e){return e()})||qv},ii=[],gg=function(t){for(var e=0;e<ii.length;e+=5)(!t||ii[e+4]&&ii[e+4].query===t)&&(ii[e].style.cssText=ii[e+1],ii[e].getBBox&&ii[e].setAttribute("transform",ii[e+2]||""),ii[e+3].uncache=1)},Hu=function(t,e){var n;for(kn=0;kn<ae.length;kn++)n=ae[kn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ec=!0,e&&gg(e),e||Er("revert")},_g=function(t,e){oe.cache++,(e||!zn)&&oe.forEach(function(n){return Hn(n)&&n.cacheID++&&(n.rec=0)}),si(t)&&(he.history.scrollRestoration=Nu=t)},zn,br=0,Zm,Yv=function(){if(Zm!==br){var t=Zm=br;requestAnimationFrame(function(){return t===br&&xr(!0)})}},xg=function(){Ne.appendChild(lo),Ou=!Bn&&lo.offsetHeight||he.innerHeight,Ne.removeChild(lo)},Jm=function(t){return Ba(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},xr=function(t,e){if(_i&&!t&&!ec){pn(Ht,"scrollEnd",mg);return}xg(),zn=Ht.isRefreshing=!0,oe.forEach(function(i){return Hn(i)&&++i.cacheID&&(i.rec=i())});var n=Er("refreshInit");sg&&Ht.sort(),e||Hu(),oe.forEach(function(i){Hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ae.slice(0).forEach(function(i){return i.refresh()}),ec=!1,ae.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Iu=1,Jm(!0),ae.forEach(function(i){var r=Yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Jm(!1),Iu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),_g(Nu,1),tc.pause(),br++,zn=2,hs(2),ae.forEach(function(i){return Hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),zn=Ht.isRefreshing=!1,Er("refresh")},Du=0,Kl=1,Fa,hs=function(t){if(t===2||!zn&&!ec){Ht.isUpdating=!0,Fa&&Fa.update(0);var e=ae.length,n=An(),i=n-Su>=50,r=e&&ae[0].scroll();if(Kl=Du>r?-1:1,zn||(Du=r),i&&(_i&&!sc&&n-_i>200&&(_i=0,Er("scrollEnd")),Aa=Su,Su=n),Kl<0){for(kn=e;kn-- >0;)ae[kn]&&ae[kn].update(0,i);Kl=1}else for(kn=0;kn<e;kn++)ae[kn]&&ae[kn].update(0,i);Ht.isUpdating=!1}ka=0},Uu=[dg,fg,Bu,Fu,mi+Oa,mi+Da,mi+Na,mi+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jl=Uu.concat([vr,yr,"boxSizing","max"+ho,"max"+ku,"position",mi,nn,nn+Na,nn+Da,nn+Oa,nn+Ua]),$v=function(t,e,n){co(n);var i=t._gsap;if(i.spacerIsNative)co(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Tu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Uu.length,o=e.style,a=t.style,l;r--;)l=Uu[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Bu]=a[Fu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vr]=nc(t,wn)+ln,o[yr]=nc(t,en)+ln,o[nn]=a[mi]=a[fg]=a[dg]="0",co(i),a[vr]=a["max"+ho]=n[vr],a[yr]=a["max"+ku]=n[yr],a[nn]=n[nn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Zv=/([A-Z])/g,co=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Pt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Zv,"-$1").toLowerCase())}},ql=function(t){for(var e=jl.length,n=t.style,i=[],r=0;r<e;r++)i.push(jl[r],n[jl[r]]);return i.t=t,i},Jv=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ql={left:0,top:0},Km=function(t,e,n,i,r,o,a,l,c,h,f,d,u,m){Hn(t)&&(t=t(l)),si(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Zl("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,b;if(u&&u.seek(0),isNaN(t)||(t=+t),Pa(t))u&&(t=Pt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),a&&Jl(a,n,i,!0);else{Hn(e)&&(e=e(l));var M=(t||"0").split(" "),x,T,E,S;b=Fn(e,l)||Ne,x=cs(b)||{},(!x||!x.left&&!x.top)&&gi(b).display==="none"&&(S=b.style.display,b.style.display="block",x=cs(b),S?b.style.display=S:b.style.removeProperty("display")),T=Zl(M[0],x[i.d]),E=Zl(M[1]||"0",n),t=x[i.p]-c[i.p]-h+T+r-E,a&&Jl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var A=t+n,v=o._isStart;p="scroll"+i.d2,Jl(o,A,i,v&&A>20||!v&&(f?Math.max(Ne[p],Ri[p]):o.parentNode[p])<=A+1),f&&(c=cs(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ln))}return u&&b&&(p=cs(b),u.seek(d),g=cs(b),u._caScrollDist=p[i.p]-g[i.p],t=t/u._caScrollDist*d),u&&u.seek(_),u?t:Math.round(t)},Kv=/(webkit|moz|length|cssText|inset)/i,jm=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Ne){t._stOrig=r.cssText,a=gi(t);for(o in a)!+o&&!Kv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Pt.core.getCache(t).uncache=1,e.appendChild(t)}},vg=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Yl=function(t,e,n){var i={};i[e.p]="+="+n,Pt.set(t,i)},Qm=function(t,e){var n=as(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,m={};c=c||n();var _=vg(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&hs()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Pt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},pn(t,"wheel",n.wheelHandler),Ht.isTouch&&pn(t,"touchmove",n.wheelHandler),r},Ht=function(){function s(e,n){oo||s.register(Pt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Pu(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ca){this.update=this.refresh=this.kill=qi;return}n=qm(si(n)||Pa(n)||n.nodeType?{trigger:n}:n,Wl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,b=r.onSnapComplete,M=r.once,x=r.snap,T=r.pinReparent,E=r.pinSpacer,S=r.containerAnimation,A=r.fastScrollEnd,v=r.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:en,P=!f&&f!==0,D=Fn(n.scroller||he),O=Pt.core.getCache(D),z=Mr(D),q=("pinType"in n?n.pinType:ls(D,"pinType")||z&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:Wl.markers,st=z?0:parseFloat(gi(D)["border"+y.p2+ho])||0,L=this,ht=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Nt=Hv(D,z,y),Qt=Vv(D,z),Z=0,it=0,bt=0,rt=as(D,y),Rt,Lt,Ft,Wt,et,Q,I,wt,nt,B,at,Ot,St,R,w,V,K,j,J,pt,dt,xt,Zt,ot,ft,Vt,zt,At,te,Xt,ue,U,_t,$,tt,mt,vt,qt,pe;if(L._startClamp=L._endClamp=!1,L._dir=y,p*=45,L.scroller=D,L.scroll=S?S.time.bind(S):rt,Wt=rt(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(sg=1,n.refreshPriority===-9999&&(Fa=L)),O.tweenScroll=O.tweenScroll||{top:Qm(D,en),left:Qm(D,wn)},L.tweenTo=Rt=O.tweenScroll[y.p],L.scrubDuration=function(Mt){_t=Pa(Mt)&&Mt,_t?U?U.duration(Mt):U=Pt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:_t,paused:!0,onComplete:function(){return g&&g(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),Xt=0,l||(l=i.vars.id)),x&&((!_r(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ne.style&&Pt.set(z?[Ne,Ri]:D,{scrollBehavior:"auto"}),oe.forEach(function(Mt){return Hn(Mt)&&Mt.target===(z?Ge.scrollingElement||Ri:D)&&(Mt.smooth=!1)}),Ft=Hn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Wv(i):x.snapTo==="labelsDirectional"?Xv(i):x.directional!==!1?function(Mt,Jt){return zu(x.snapTo)(Mt,An()-it<500?0:Jt.direction)}:Pt.utils.snap(x.snapTo),$=x.duration||{min:.1,max:2},$=_r($)?La($.min,$.max):La($,$),tt=Pt.delayedCall(x.delay||_t/2||.1,function(){var Mt=rt(),Jt=An()-it<500,Ut=Rt.tween;if((Jt||Math.abs(L.getVelocity())<10)&&!Ut&&!sc&&Z!==Mt){var $t=(Mt-Q)/R,Ke=i&&!P?i.totalProgress():$t,re=Jt?0:(Ke-ue)/(An()-Aa)*1e3||0,Pe=Pt.utils.clamp(-$t,1-$t,so(re/2)*re/.185),on=$t+(x.inertia===!1?0:Pe),Ee,we,ge=x,jn=ge.onStart,De=ge.onInterrupt,Ln=ge.onComplete;if(Ee=Ft(on,L),Pa(Ee)||(Ee=on),we=Math.round(Q+Ee*R),Mt<=I&&Mt>=Q&&we!==Mt){if(Ut&&!Ut._initted&&Ut.data<=so(we-Mt))return;x.inertia===!1&&(Pe=Ee-$t),Rt(we,{duration:$(so(Math.max(so(on-Ke),so(Ee-Ke))*.185/re/.05||0)),ease:x.ease||"power3",data:so(we-Mt),onInterrupt:function(){return tt.restart(!0)&&De&&De(L)},onComplete:function(){L.update(),Z=rt(),i&&(U?U.resetTo("totalProgress",Ee,i._tTime/i._tDur):i.progress(Ee)),Xt=ue=i&&!P?i.totalProgress():L.progress,b&&b(L),Ln&&Ln(L)}},Mt,Pe*R,we-Mt-Pe*R),jn&&jn(L,Rt.tween)}}else L.isActive&&Z!==Mt&&tt.restart(!0)}).pause()),l&&(Lu[l]=L),d=L.trigger=Fn(d||u!==!0&&u),pe=d&&d._gsap&&d._gsap.stRevert,pe&&(pe=pe(L)),u=u===!0?d:Fn(u),si(a)&&(a={targets:d,className:a}),u&&(m===!1||m===mi||(m=!m&&u.parentNode&&u.parentNode.style&&gi(u.parentNode).display==="flex"?!1:nn),L.pin=u,Lt=Pt.core.getCache(u),Lt.spacer?w=Lt.pinState:(E&&(E=Fn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Lt.spacerIsNative=!!E,E&&(Lt.spacerState=ql(E))),Lt.spacer=j=E||Ge.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),Lt.pinState=w=ql(u)),n.force3D!==!1&&Pt.set(u,{force3D:!0}),L.spacer=j=Lt.spacer,te=gi(u),ot=te[m+y.os2],pt=Pt.getProperty(u),dt=Pt.quickSetter(u,y.a,ln),Tu(u,j,te),K=ql(u)),G){Ot=_r(G)?qm(G,Ym):Ym,B=Xl("scroller-start",l,D,y,Ot,0),at=Xl("scroller-end",l,D,y,Ot,0,B),J=B["offset"+y.op.d2];var Xe=Fn(ls(D,"content")||D);wt=this.markerStart=Xl("start",l,Xe,y,Ot,J,0,S),nt=this.markerEnd=Xl("end",l,Xe,y,Ot,J,0,S),S&&(qt=Pt.quickSetter([wt,nt],y.a,ln)),!q&&!(Ci.length&&ls(D,"fixedMarkers")===!0)&&(Gv(z?Ne:D),Pt.set([B,at],{force3D:!0}),Vt=Pt.quickSetter(B,y.a,ln),At=Pt.quickSetter(at,y.a,ln))}if(S){var Tt=S.vars.onUpdate,Dt=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){L.update(0,0,1),Tt&&Tt.apply(S,Dt||[])})}if(L.previous=function(){return ae[ae.indexOf(L)-1]},L.next=function(){return ae[ae.indexOf(L)+1]},L.revert=function(Mt,Jt){if(!Jt)return L.kill(!0);var Ut=Mt!==!1||!L.enabled,$t=Tn;Ut!==L.isReverted&&(Ut&&(mt=Math.max(rt(),L.scroll.rec||0),bt=L.progress,vt=i&&i.progress()),wt&&[wt,nt,B,at].forEach(function(Ke){return Ke.style.display=Ut?"none":"block"}),Ut&&(Tn=L,L.update(Ut)),u&&(!T||!L.isActive)&&(Ut?$v(u,j,w):Tu(u,j,gi(u),ft)),Ut||L.update(Ut),Tn=$t,L.isReverted=Ut)},L.refresh=function(Mt,Jt,Ut,$t){if(!((Tn||!L.enabled)&&!Jt)){if(u&&Mt&&_i){pn(s,"scrollEnd",mg);return}!zn&&ht&&ht(L),Tn=L,Rt.tween&&!Ut&&(Rt.tween.kill(),Rt.tween=0),U&&U.pause(),_&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ke=Nt(),re=Qt(),Pe=S?S.duration():Yi(D,y),on=R<=.01,Ee=0,we=$t||0,ge=_r(Ut)?Ut.end:n.end,jn=n.endTrigger||d,De=_r(Ut)?Ut.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),Ln=L.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,L),C=d&&Math.max(0,ae.indexOf(L))||0,F=C,W,X,k,ct,ut,yt,Ct,Yt,Kt,It,jt,me,_e;for(G&&_r(Ut)&&(me=Pt.getProperty(B,y.p),_e=Pt.getProperty(at,y.p));F--;)yt=ae[F],yt.end||yt.refresh(0,1)||(Tn=L),Ct=yt.pin,Ct&&(Ct===d||Ct===u||Ct===Ln)&&!yt.isReverted&&(It||(It=[]),It.unshift(yt),yt.revert(!0,!0)),yt!==ae[F]&&(C--,F--);for(Hn(De)&&(De=De(L)),De=Vm(De,"start",L),Q=Km(De,d,Ke,y,rt(),wt,B,L,re,st,q,Pe,S,L._startClamp&&"_startClamp")||(u?-.001:0),Hn(ge)&&(ge=ge(L)),si(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(si(De)?De.split(" ")[0]:"")+ge:(Ee=Zl(ge.substr(2),Ke),ge=si(De)?De:(S?Pt.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,Q):Q)+Ee,jn=d)),ge=Vm(ge,"end",L),I=Math.max(Q,Km(ge||(jn?"100% 0":Pe),jn,Ke,y,rt()+Ee,nt,at,L,re,st,q,Pe,S,L._endClamp&&"_endClamp"))||-.001,Ee=0,F=C;F--;)yt=ae[F],Ct=yt.pin,Ct&&yt.start-yt._pinPush<=Q&&!S&&yt.end>0&&(W=yt.end-(L._startClamp?Math.max(0,yt.start):yt.start),(Ct===d&&yt.start-yt._pinPush<Q||Ct===Ln)&&isNaN(De)&&(Ee+=W*(1-yt.progress)),Ct===u&&(we+=W));if(Q+=Ee,I+=Ee,L._startClamp&&(L._startClamp+=Ee),L._endClamp&&!zn&&(L._endClamp=I||-.001,I=Math.min(I,Yi(D,y))),R=I-Q||(Q-=.01)&&.001,on&&(bt=Pt.utils.clamp(0,1,Pt.utils.normalize(Q,I,mt))),L._pinPush=we,wt&&Ee&&(W={},W[y.a]="+="+Ee,Ln&&(W[y.p]="-="+rt()),Pt.set([wt,nt],W)),u&&!(Iu&&L.end>=Yi(D,y)))W=gi(u),ct=y===en,k=rt(),xt=parseFloat(pt(y.a))+we,!Pe&&I>1&&(jt=(z?Ge.scrollingElement||Ri:D).style,jt={style:jt,value:jt["overflow"+y.a.toUpperCase()]},z&&gi(Ne)["overflow"+y.a.toUpperCase()]!=="scroll"&&(jt.style["overflow"+y.a.toUpperCase()]="scroll")),Tu(u,j,W),K=ql(u),X=cs(u,!0),Yt=q&&as(D,ct?wn:en)(),m?(ft=[m+y.os2,R+we+ln],ft.t=j,F=m===nn?nc(u,y)+R+we:0,F&&(ft.push(y.d,F+ln),j.style.flexBasis!=="auto"&&(j.style.flexBasis=F+ln)),co(ft),Ln&&ae.forEach(function(tn){tn.pin===Ln&&tn.vars.pinSpacing!==!1&&(tn._subPinOffset=!0)}),q&&rt(mt)):(F=nc(u,y),F&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=F+ln)),q&&(ut={top:X.top+(ct?k-Q:Yt)+ln,left:X.left+(ct?Yt:k-Q)+ln,boxSizing:"border-box",position:"fixed"},ut[vr]=ut["max"+ho]=Math.ceil(X.width)+ln,ut[yr]=ut["max"+ku]=Math.ceil(X.height)+ln,ut[mi]=ut[mi+Na]=ut[mi+Da]=ut[mi+Oa]=ut[mi+Ua]="0",ut[nn]=W[nn],ut[nn+Na]=W[nn+Na],ut[nn+Da]=W[nn+Da],ut[nn+Oa]=W[nn+Oa],ut[nn+Ua]=W[nn+Ua],V=Jv(w,ut,T),zn&&rt(0)),i?(Kt=i._initted,bu(1),i.render(i.duration(),!0,!0),Zt=pt(y.a)-xt+R+we,zt=Math.abs(R-Zt)>1,q&&zt&&V.splice(V.length-2,2),i.render(0,!0,!0),Kt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bu(0)):Zt=R,jt&&(jt.value?jt.style["overflow"+y.a.toUpperCase()]=jt.value:jt.style.removeProperty("overflow-"+y.a));else if(d&&rt()&&!S)for(X=d.parentNode;X&&X!==Ne;)X._pinOffset&&(Q-=X._pinOffset,I-=X._pinOffset),X=X.parentNode;It&&It.forEach(function(tn){return tn.revert(!1,!0)}),L.start=Q,L.end=I,Wt=et=zn?mt:rt(),!S&&!zn&&(Wt<mt&&rt(mt),L.scroll.rec=0),L.revert(!1,!0),it=An(),tt&&(Z=-1,tt.restart(!0)),Tn=0,i&&P&&(i._initted||vt)&&i.progress()!==vt&&i.progress(vt||0,!0).render(i.time(),!0,!0),(on||bt!==L.progress||S||_)&&(i&&!P&&i.totalProgress(S&&Q<-.001&&!bt?Pt.utils.normalize(Q,I,0):bt,!0),L.progress=on||(Wt-Q)/R===bt?0:bt),u&&m&&(j._pinOffset=Math.round(L.progress*Zt)),U&&U.invalidate(),isNaN(me)||(me-=Pt.getProperty(B,y.p),_e-=Pt.getProperty(at,y.p),Yl(B,y,me),Yl(wt,y,me-($t||0)),Yl(at,y,_e),Yl(nt,y,_e-($t||0))),on&&!zn&&L.update(),h&&!zn&&!St&&(St=!0,h(L),St=!1)}},L.getVelocity=function(){return(rt()-et)/(An()-Aa)*1e3||0},L.endAnimation=function(){Ta(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?P||Ta(i,L.direction<0,1):Ta(i,i.reversed()))},L.labelToScroll=function(Mt){return i&&i.labels&&(Q||L.refresh()||Q)+i.labels[Mt]/i.duration()*R||0},L.getTrailing=function(Mt){var Jt=ae.indexOf(L),Ut=L.direction>0?ae.slice(0,Jt).reverse():ae.slice(Jt+1);return(si(Mt)?Ut.filter(function($t){return $t.vars.preventOverlaps===Mt}):Ut).filter(function($t){return L.direction>0?$t.end<=Q:$t.start>=I})},L.update=function(Mt,Jt,Ut){if(!(S&&!Ut&&!Mt)){var $t=zn===!0?mt:L.scroll(),Ke=Mt?0:($t-Q)/R,re=Ke<0?0:Ke>1?1:Ke||0,Pe=L.progress,on,Ee,we,ge,jn,De,Ln,C;if(Jt&&(et=Wt,Wt=S?rt():$t,x&&(ue=Xt,Xt=i&&!P?i.totalProgress():re)),p&&u&&!Tn&&!zl&&_i&&(!re&&Q<$t+($t-et)/(An()-Aa)*p?re=1e-4:re===1&&I>$t+($t-et)/(An()-Aa)*p&&(re=.9999)),re!==Pe&&L.enabled){if(on=L.isActive=!!re&&re<1,Ee=!!Pe&&Pe<1,De=on!==Ee,jn=De||!!re!=!!Pe,L.direction=re>Pe?1:-1,L.progress=re,jn&&!Tn&&(we=re&&!Pe?0:re===1?1:Pe===1?2:3,P&&(ge=!De&&Y[we+1]!=="none"&&Y[we+1]||Y[we],C=i&&(ge==="complete"||ge==="reset"||ge in i))),v&&(De||C)&&(C||f||!i)&&(Hn(v)?v(L):L.getTrailing(v).forEach(function(k){return k.endAnimation()})),P||(U&&!Tn&&!zl?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",re,i._tTime/i._tDur):(U.vars.totalProgress=re,U.invalidate().restart())):i&&i.totalProgress(re,!!(Tn&&(it||Mt)))),u){if(Mt&&m&&(j.style[m+y.os2]=ot),!q)dt(Ra(xt+Zt*re));else if(jn){if(Ln=!Mt&&re>Pe&&I+1>$t&&$t+1>=Yi(D,y),T)if(!Mt&&(on||Ln)){var F=cs(u,!0),W=$t-Q;jm(u,Ne,F.top+(y===en?W:0)+ln,F.left+(y===en?0:W)+ln)}else jm(u,j);co(on||Ln?V:K),zt&&re<1&&on||dt(xt+(re===1&&!Ln?Zt:0))}}x&&!Rt.tween&&!Tn&&!zl&&tt.restart(!0),a&&(De||M&&re&&(re<1||!Mu))&&Ba(a.targets).forEach(function(k){return k.classList[on||M?"add":"remove"](a.className)}),o&&!P&&!Mt&&o(L),jn&&!Tn?(P&&(C&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(L)),(De||!Mu)&&(c&&De&&Eu(L,c),H[we]&&Eu(L,H[we]),M&&(re===1?L.kill(!1,1):H[we]=0),De||(we=re===1?1:3,H[we]&&Eu(L,H[we]))),A&&!on&&Math.abs(L.getVelocity())>(Pa(A)?A:2500)&&(Ta(L.callbackAnimation),U?U.progress(1):Ta(i,ge==="reverse"?1:!re,1))):P&&o&&!Tn&&o(L)}if(At){var X=S?$t/S.duration()*(S._caScrollDist||0):$t;Vt(X+(B._isFlipped?1:0)),At(X)}qt&&qt(-$t/S.duration()*(S._caScrollDist||0))}},L.enable=function(Mt,Jt){L.enabled||(L.enabled=!0,pn(D,"resize",Ia),z||pn(D,"scroll",ro),ht&&pn(s,"refreshInit",ht),Mt!==!1&&(L.progress=bt=0,Wt=et=Z=rt()),Jt!==!1&&L.refresh())},L.getTween=function(Mt){return Mt&&Rt?Rt.tween:U},L.setPositions=function(Mt,Jt,Ut,$t){if(S){var Ke=S.scrollTrigger,re=S.duration(),Pe=Ke.end-Ke.start;Mt=Ke.start+Pe*Mt/re,Jt=Ke.start+Pe*Jt/re}L.refresh(!1,!1,{start:Gm(Mt,Ut&&!!L._startClamp),end:Gm(Jt,Ut&&!!L._endClamp)},$t),L.update()},L.adjustPinSpacing=function(Mt){if(ft&&Mt){var Jt=ft.indexOf(y.d)+1;ft[Jt]=parseFloat(ft[Jt])+Mt+ln,ft[1]=parseFloat(ft[1])+Mt+ln,co(ft)}},L.disable=function(Mt,Jt){if(L.enabled&&(Mt!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Jt||U&&U.pause(),mt=0,Lt&&(Lt.uncache=1),ht&&fn(s,"refreshInit",ht),tt&&(tt.pause(),Rt.tween&&Rt.tween.kill()&&(Rt.tween=0)),!z)){for(var Ut=ae.length;Ut--;)if(ae[Ut].scroller===D&&ae[Ut]!==L)return;fn(D,"resize",Ia),z||fn(D,"scroll",ro)}},L.kill=function(Mt,Jt){L.disable(Mt,Jt),U&&!Jt&&U.kill(),l&&delete Lu[l];var Ut=ae.indexOf(L);Ut>=0&&ae.splice(Ut,1),Ut===kn&&Kl>0&&kn--,Ut=0,ae.forEach(function($t){return $t.scroller===L.scroller&&(Ut=1)}),Ut||zn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Mt&&i.revert({kill:!1}),Jt||i.kill()),wt&&[wt,nt,B,at].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),Fa===L&&(Fa=0),u&&(Lt&&(Lt.uncache=1),Ut=0,ae.forEach(function($t){return $t.pin===u&&Ut++}),Ut||(Lt.spacer=0)),n.onKill&&n.onKill(L)},ae.push(L),L.enable(!1,!1),pe&&pe(L),i&&i.add&&!R){var ee=L.update;L.update=function(){L.update=ee,Q||I||L.refresh()},Pt.delayedCall(.01,L.update),R=.01,Q=I=0}else L.refresh();u&&Yv()},s.register=function(n){return oo||(Pt=n||cg(),lg()&&window.document&&s.enable(),oo=Ca),oo},s.defaults=function(n){if(n)for(var i in n)Wl[i]=n[i];return Wl},s.disable=function(n,i){Ca=0,ae.forEach(function(o){return o[i?"kill":"disable"](n)}),fn(he,"wheel",ro),fn(Ge,"scroll",ro),clearInterval(kl),fn(Ge,"touchcancel",qi),fn(Ne,"touchstart",qi),Vl(fn,Ge,"pointerdown,touchstart,mousedown",Wm),Vl(fn,Ge,"pointerup,touchend,mouseup",Xm),tc.kill(),Hl(fn);for(var r=0;r<oe.length;r+=3)Gl(fn,oe[r],oe[r+1]),Gl(fn,oe[r],oe[r+2])},s.enable=function(){if(he=window,Ge=document,Ri=Ge.documentElement,Ne=Ge.body,Pt&&(Ba=Pt.utils.toArray,La=Pt.utils.clamp,Pu=Pt.core.context||qi,bu=Pt.core.suppressOverwrites||qi,Nu=he.history.scrollRestoration||"auto",Du=he.pageYOffset,Pt.core.globals("ScrollTrigger",s),Ne)){Ca=1,lo=document.createElement("div"),lo.style.height="100vh",lo.style.position="absolute",xg(),zv(),$e.register(Pt),s.isTouch=$e.isTouch,ks=$e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ru=$e.isTouch===1,pn(he,"wheel",ro),ig=[he,Ge,Ri,Ne],Pt.matchMedia?(s.matchMedia=function(l){var c=Pt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Pt.addEventListener("matchMediaInit",function(){return Hu()}),Pt.addEventListener("matchMediaRevert",function(){return gg()}),Pt.addEventListener("matchMedia",function(){xr(0,1),Er("matchMedia")}),Pt.matchMedia("(orientation: portrait)",function(){return wu(),wu})):console.warn("Requires GSAP 3.11.0 or later"),wu(),pn(Ge,"scroll",ro);var n=Ne.style,i=n.borderTopStyle,r=Pt.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=cs(Ne),en.m=Math.round(o.top+en.sc())||0,wn.m=Math.round(o.left+wn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),kl=setInterval($m,250),Pt.delayedCall(.5,function(){return zl=0}),pn(Ge,"touchcancel",qi),pn(Ne,"touchstart",qi),Vl(pn,Ge,"pointerdown,touchstart,mousedown",Wm),Vl(pn,Ge,"pointerup,touchend,mouseup",Xm),Cu=Pt.utils.checkPrefix("transform"),jl.push(Cu),oo=An(),tc=Pt.delayedCall(.2,xr).pause(),ao=[Ge,"visibilitychange",function(){var l=he.innerWidth,c=he.innerHeight;Ge.hidden?(zm=l,Hm=c):(zm!==l||Hm!==c)&&Ia()},Ge,"DOMContentLoaded",xr,he,"load",xr,he,"resize",Ia],Hl(pn),ae.forEach(function(l){return l.enable(0,1)}),a=0;a<oe.length;a+=3)Gl(fn,oe[a],oe[a+1]),Gl(fn,oe[a],oe[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Mu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(kl)||(kl=i)&&setInterval($m,i),"ignoreMobileResize"in n&&(Ru=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hl(fn)||Hl(pn,n.autoRefreshEvents||"none"),rg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Fn(n),o=oe.indexOf(r),a=Mr(r);~o&&oe.splice(o,a?6:2),i&&(a?Ci.unshift(he,i,Ne,i,Ri,i):Ci.unshift(r,i))},s.clearMatchMedia=function(n){ae.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(si(n)?Fn(n):n).getBoundingClientRect(),a=o[r?vr:yr]*i||0;return r?o.right-a>0&&o.left+a<he.innerWidth:o.bottom-a>0&&o.top+a<he.innerHeight},s.positionInViewport=function(n,i,r){si(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[r?vr:yr],l=i==null?a/2:i in ic?ic[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/he.innerWidth:(o.top+l)/he.innerHeight},s.killAll=function(n){if(ae.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Sr.killAll||[];Sr={},i.forEach(function(r){return r()})}},s}();Ht.version="3.12.5";Ht.saveStyles=function(s){return s?Ba(s).forEach(function(t){if(t&&t.style){var e=ii.indexOf(t);e>=0&&ii.splice(e,5),ii.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Pt.core.getCache(t),Pu())}}):ii};Ht.revert=function(s,t){return Hu(!s,t)};Ht.create=function(s,t){return new Ht(s,t)};Ht.refresh=function(s){return s?Ia():(oo||Ht.register())&&xr(!0)};Ht.update=function(s){return++oe.cache&&hs(s===!0?2:0)};Ht.clearScrollMemory=_g;Ht.maxScroll=function(s,t){return Yi(s,t?wn:en)};Ht.getScrollFunc=function(s,t){return as(Fn(s),t?wn:en)};Ht.getById=function(s){return Lu[s]};Ht.getAll=function(){return ae.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ht.isScrolling=function(){return!!_i};Ht.snapDirectional=zu;Ht.addEventListener=function(s,t){var e=Sr[s]||(Sr[s]=[]);~e.indexOf(t)||e.push(t)};Ht.removeEventListener=function(s,t){var e=Sr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Ht.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Pt.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(m){f.length||u.restart(!0),f.push(m.trigger),d.push(m),r<=f.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Hn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Hn(r)&&(r=r(),pn(Ht,"refresh",function(){return r=t.batchMax()})),Ba(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Ht.create(c))}),e};var tg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Au=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+($e.isTouch?" pinch-zoom":""):"none",t===Ri&&s(Ne,e)},$l={auto:1,scroll:1},jv=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Pt.core.getCache(r),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Ne&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!($l[(l=gi(r)).overflowY]||$l[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Mr(r)&&($l[(l=gi(r)).overflowY]||$l[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},yg=function(t,e,n,i){return $e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&jv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(Ge,$e.eventTypes[0],ng,!1,!0)},onDisable:function(){return fn(Ge,$e.eventTypes[0],ng,!0)}})},Qv=/(input|label|select|textarea)/i,eg,ng=function(t){var e=Qv.test(t.target.tagName);(e||eg)&&(t._gsapAllow=!0,eg=e)},ty=function(t){_r(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Fn(t.target)||Ri,h=Pt.core.globals().ScrollSmoother,f=h&&h.get(),d=ks&&(t.content&&Fn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=as(c,en),m=as(c,wn),_=1,p=($e.isTouch&&he.visualViewport?he.visualViewport.scale*he.visualViewport.width:he.outerWidth)/he.innerWidth,g=0,b=Hn(i)?function(){return i(a)}:function(){return i||2.8},M,x,T=yg(c,t.type,!0,r),E=function(){return x=!1},S=qi,A=qi,v=function(){l=Yi(c,en),A=La(ks?1:0,l),n&&(S=La(0,Yi(c,wn))),M=br},y=function(){d._gsap.y=Ra(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},P=function(){if(x){requestAnimationFrame(E);var G=Ra(a.deltaY/2),st=A(u.v-G);if(d&&st!==u.v+u.offset){u.offset=st-u.v;var L=Ra((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",u.cacheID=oe.cache,hs()}return!0}u.offset&&y(),x=!0},D,O,z,q,H=function(){v(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return d&&Pt.set(d,{y:"+=0"}),t.ignoreCheck=function(Y){return ks&&Y.type==="touchmove"&&P(Y)||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){x=!1;var Y=_;_=Ra((he.visualViewport&&he.visualViewport.scale||1)/p),D.pause(),Y!==_&&Au(c,_>1.01?!0:n?!1:"x"),O=m(),z=u(),v(),M=br},t.onRelease=t.onGestureStart=function(Y,G){if(u.offset&&y(),!G)q.restart(!0);else{oe.cache++;var st=b(),L,ht;n&&(L=m(),ht=L+st*.05*-Y.velocityX/.227,st*=tg(m,L,ht,Yi(c,wn)),D.vars.scrollX=S(ht)),L=u(),ht=L+st*.05*-Y.velocityY/.227,st*=tg(u,L,ht,Yi(c,en)),D.vars.scrollY=A(ht),D.invalidate().duration(st).play(.01),(ks&&D.vars.scrollY>=l||L>=l-1)&&Pt.to({},{onUpdate:H,duration:st})}o&&o(Y)},t.onWheel=function(){D._ts&&D.pause(),An()-g>1e3&&(M=0,g=An())},t.onChange=function(Y,G,st,L,ht){if(br!==M&&v(),G&&n&&m(S(L[2]===G?O+(Y.startX-Y.x):m()+G-L[1])),st){u.offset&&y();var Nt=ht[2]===st,Qt=Nt?z+Y.startY-Y.y:u()+st-ht[1],Z=A(Qt);Nt&&Qt!==Z&&(z+=Z-Qt),u(Z)}(st||G)&&hs()},t.onEnable=function(){Au(c,n?!1:"x"),Ht.addEventListener("refresh",H),pn(he,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){Au(c,!0),fn(he,"resize",H),Ht.removeEventListener("refresh",H),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new $e(t),a.iOS=ks,ks&&!u()&&u(1),ks&&Pt.ticker.add(qi),q=a._dc,D=Pt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:vg(u,u(),function(){return D.pause()})},onUpdate:hs,onComplete:q.vars.onComplete}),a};Ht.sort=function(s){return ae.sort(s||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Ht.observe=function(s){return new $e(s)};Ht.normalizeScroll=function(s){if(typeof s>"u")return Bn;if(s===!0&&Bn)return Bn.enable();if(s===!1){Bn&&Bn.kill(),Bn=s;return}var t=s instanceof $e?s:ty(s);return Bn&&Bn.target===t.target&&Bn.kill(),Mr(t.target)&&(Bn=t),t};Ht.core={_getVelocityProp:Bl,_inputObserver:yg,_scrollers:oe,_proxies:Ci,bridge:{ss:function(){_i||Er("scrollStart"),_i=An()},ref:function(){return Tn}}};cg()&&Pt.registerPlugin(Ht);var ey="1.1.20";function Mg(s,t,e){return Math.max(s,Math.min(t,e))}function ny(s,t,e){return(1-e)*s+e*t}function iy(s,t,e,n){return ny(s,t,1-Math.exp(-e*n))}function sy(s,t){return(s%t+t)%t}var ry=class{constructor(){kt(this,"isRunning",!1);kt(this,"value",0);kt(this,"from",0);kt(this,"to",0);kt(this,"currentTime",0);kt(this,"lerp");kt(this,"duration");kt(this,"easing");kt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=Mg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iy(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function oy(s,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(i,n)},t)}}var ay=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){kt(this,"width",0);kt(this,"height",0);kt(this,"scrollHeight",0);kt(this,"scrollWidth",0);kt(this,"debouncedResize");kt(this,"wrapperResizeObserver");kt(this,"contentResizeObserver");kt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});kt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});kt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=oy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Sg=class{constructor(){kt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?.push(t)||(this.events[s]=[t]),()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},bg=100/6,zs={passive:!1},ly=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){kt(this,"touchStart",{x:0,y:0});kt(this,"lastDelta",{x:0,y:0});kt(this,"window",{width:0,height:0});kt(this,"emitter",new Sg);kt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});kt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});kt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});kt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=n===1?bg:n===2?this.window.width:1,r=n===1?bg:n===2?this.window.height:1;t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});kt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zs),this.element.addEventListener("touchstart",this.onTouchStart,zs),this.element.addEventListener("touchmove",this.onTouchMove,zs),this.element.addEventListener("touchend",this.onTouchEnd,zs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,zs),this.element.removeEventListener("touchstart",this.onTouchStart,zs),this.element.removeEventListener("touchmove",this.onTouchMove,zs),this.element.removeEventListener("touchend",this.onTouchEnd,zs)}},Eg=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=E=>Math.min(1,1.001-Math.pow(2,-10*E)),lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:u=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:b=!0,autoRaf:M=!1,anchors:x=!1,__experimental__naiveDimensions:T=!1}={}){kt(this,"_isScrolling",!1);kt(this,"_isStopped",!1);kt(this,"_isLocked",!1);kt(this,"_preventNextNativeScrollEvent",!1);kt(this,"_resetVelocityTimeout",null);kt(this,"__rafID",null);kt(this,"isTouching");kt(this,"time",0);kt(this,"userData",{});kt(this,"lastVelocity",0);kt(this,"velocity",0);kt(this,"direction",0);kt(this,"options");kt(this,"targetScroll");kt(this,"animatedScroll");kt(this,"animate",new ry);kt(this,"emitter",new Sg);kt(this,"dimensions");kt(this,"virtualScroll");kt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});kt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});kt(this,"onClick",s=>{let e=s.composedPath().find(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href")?.startsWith("#"));if(e){let n=e.getAttribute("href");if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(n,i)}}});kt(this,"onPointerDown",s=>{s.button===1&&this.reset()});kt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof h=="function"&&h?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let u=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});kt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});kt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=ey,(!s||s===document.documentElement)&&(s=window),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:b,autoRaf:M,anchors:x,__experimental__naiveDimensions:T},this.dimensions=new ay(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ly(e,{touchMultiplier:u,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof s=="string"&&["top","left","start"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let d;if(typeof s=="string"?d=document.querySelector(s):s instanceof HTMLElement&&s?.nodeType&&(d=s),d){if(this.options.wrapper!==window){let m=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?m.left:m.top}let u=d.getBoundingClientRect();s=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=t,s=Math.round(s),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):s=Mg(0,s,this.limit),s===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=s),this.animate.fromTo(this.animatedScroll,s,{duration:i,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),u||this.emit(),u&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?sy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Wf="170";var cy=0,wg=1,hy=2;var L0=1,uy=2,gs=3,Js=0,Pn=1,vi=2,$s=0,Ro=1,Tg=2,Ag=3,Cg=4,Xf=5,xs=100,dy=101,fy=102,py=103,my=104,Xo=200,gy=201,_y=202,xy=203,yd=204,bd=205,vy=206,yy=207,by=208,My=209,Sy=210,Ey=211,wy=212,Ty=213,Ay=214,Md=0,Sd=1,Ed=2,Do=3,wd=4,Td=5,Ad=6,Cd=7,D0=0,Cy=1,Ry=2,Zs=0,Py=1,Iy=2,Ly=3,qf=4,Dy=5,Uy=6,Ny=7;var U0=300,Uo=301,No=302,Rd=303,Pd=304,ih=306,Oo=1e3,Ur=1001,Id=1002,Ui=1003,Oy=1004;var rc=1005;var Zi=1006,Vu=1007;var Nr=1008;var Ms=1009,N0=1010,O0=1011,ja=1012,Yf=1013,Or=1014,vs=1015,ll=1016,$f=1017,Zf=1018,Fo=1020,F0=35902,B0=1021,k0=1022,Di=1023,z0=1024,H0=1025,Po=1026,Bo=1027,V0=1028,Jf=1029,G0=1030,Kf=1031;var jf=1033,Pc=33776,Ic=33777,Lc=33778,Dc=33779,Ld=35840,Dd=35841,Ud=35842,Nd=35843,Od=36196,Fd=37492,Bd=37496,kd=37808,zd=37809,Hd=37810,Vd=37811,Gd=37812,Wd=37813,Xd=37814,qd=37815,Yd=37816,$d=37817,Zd=37818,Jd=37819,Kd=37820,jd=37821,Uc=36492,Qd=36494,tf=36495,W0=36283,ef=36284,nf=36285,sf=36286;var Nc=2300,rf=2301,Gu=2302,Rg=2400,Pg=2401,Ig=2402;var Fy=3200,By=3201;var X0=0,ky=1,Ys="",Wn="srgb",qo="srgb-linear",sh="linear",Se="srgb";var uo=7680;var Lg=519,zy=512,Hy=513,Vy=514,q0=515,Gy=516,Wy=517,Xy=518,qy=519,Dg=35044;var Ug="300 es",ys=2e3,Oc=2001,Ks=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ng=1234567,qa=Math.PI/180,Qa=180/Math.PI;function Gr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function cn(s,t,e){return Math.max(t,Math.min(e,s))}function Qf(s,t){return(s%t+t)%t}function Yy(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function $y(s,t,e){return s!==t?(e-s)/(t-s):0}function Ya(s,t,e){return(1-e)*s+e*t}function Zy(s,t,e,n){return Ya(s,t,1-Math.exp(-e*n))}function Jy(s,t=1){return t-Math.abs(Qf(s,t*2)-t)}function Ky(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function jy(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qy(s,t){return s+Math.floor(Math.random()*(t-s+1))}function tb(s,t){return s+Math.random()*(t-s)}function eb(s){return s*(.5-Math.random())}function nb(s){s!==void 0&&(Ng=s);let t=Ng+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ib(s){return s*qa}function sb(s){return s*Qa}function rb(s){return(s&s-1)===0&&s!==0}function ob(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ab(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lb(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function To(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Y0={DEG2RAD:qa,RAD2DEG:Qa,generateUUID:Gr,clamp:cn,euclideanModulo:Qf,mapLinear:Yy,inverseLerp:$y,lerp:Ya,damp:Zy,pingpong:Jy,smoothstep:Ky,smootherstep:jy,randInt:Qy,randFloat:tb,randFloatSpread:eb,seededRandom:nb,degToRad:ib,radToDeg:sb,isPowerOfTwo:rb,ceilPowerOfTwo:ob,floorPowerOfTwo:ab,setQuaternionFromProperEuler:lb,normalize:Vn,denormalize:To},gt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],b=i[1],M=i[4],x=i[7],T=i[2],E=i[5],S=i[8];return r[0]=o*_+a*b+l*T,r[3]=o*p+a*M+l*E,r[6]=o*g+a*x+l*S,r[1]=c*_+h*b+f*T,r[4]=c*p+h*M+f*E,r[7]=c*g+h*x+f*S,r[2]=d*_+u*b+m*T,r[5]=d*p+u*M+m*E,r[8]=d*g+u*x+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,m=e*f+n*d+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wu.makeScale(t,e)),this}rotate(t){return this.premultiply(Wu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wu=new ne;function $0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cb(){let s=Fc("canvas");return s.style.display="block",s}var Og={};function Wa(s){s in Og||(Og[s]=!0,console.warn(s))}function hb(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ub(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function db(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var de={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(s.r=Io(s.r),s.g=Io(s.g),s.b=Io(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ys?sh:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fg=[.64,.33,.3,.6,.15,.06],Bg=[.2126,.7152,.0722],kg=[.3127,.329],zg=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hg=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[qo]:{primaries:Fg,whitePoint:kg,transfer:sh,toXYZ:zg,fromXYZ:Hg,luminanceCoefficients:Bg,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:Fg,whitePoint:kg,transfer:Se,toXYZ:zg,fromXYZ:Hg,luminanceCoefficients:Bg,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}});var fo,of=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fo===void 0&&(fo=Fc("canvas")),fo.width=t.width,fo.height=t.height;let n=fo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bs(e[n]/255)*255):e[n]=bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fb=0,Bc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xu(i[o].image)):r.push(Xu(i[o]))}else r=Xu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?of.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pb=0,ai=class s extends Ks{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ur,i=Ur,r=Zi,o=Nr,a=Di,l=Ms,c=s.DEFAULT_ANISOTROPY,h=Ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Gr(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==U0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case Id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case Id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=U0;ai.DEFAULT_ANISOTROPY=1;var Ze=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(u+1)/2,T=(g+1)/2,E=(h+d)/4,S=(f+_)/4,A=(m+p)/4;return M>x&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=S/n):x>T?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=A/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=S/r,i=A/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(f-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},af=class extends Ks{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ai(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ss=class extends af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kc=class extends ai{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lf=class extends ai{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==m){let p=1-a,g=l*d+c*u+h*m+f*_,b=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let T=Math.sqrt(M),E=Math.atan2(T,g*b);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T}let x=a*b;if(l=l*p+d*x,c=c*p+u*x,h=h*p+m*x,f=f*p+_*x,p===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*u-c*d,t[e+1]=l*m+h*d+c*f-a*u,t[e+2]=c*m+h*u+a*d-l*f,t[e+3]=h*m-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),u=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"YZX":this._x=d*h*f+c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f-d*u*m;break;case"XZY":this._x=d*h*f-c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f+d*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qu.copy(this).projectOnVector(t),this.sub(qu)}reflect(t){return this.sub(qu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qu=new N,Vg=new js,Fr=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(r,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(za),ac.subVectors(this.max,za),po.subVectors(t.a,za),mo.subVectors(t.b,za),go.subVectors(t.c,za),Hs.subVectors(mo,po),Vs.subVectors(go,mo),wr.subVectors(po,go);let e=[0,-Hs.z,Hs.y,0,-Vs.z,Vs.y,0,-wr.z,wr.y,Hs.z,0,-Hs.x,Vs.z,0,-Vs.x,wr.z,0,-wr.x,-Hs.y,Hs.x,0,-Vs.y,Vs.x,0,-wr.y,wr.x,0];return!Yu(e,po,mo,go,ac)||(e=[1,0,0,0,1,0,0,0,1],!Yu(e,po,mo,go,ac))?!1:(lc.crossVectors(Hs,Vs),e=[lc.x,lc.y,lc.z],Yu(e,po,mo,go,ac))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},us=[new N,new N,new N,new N,new N,new N,new N,new N],Pi=new N,oc=new Fr,po=new N,mo=new N,go=new N,Hs=new N,Vs=new N,wr=new N,za=new N,ac=new N,lc=new N,Tr=new N;function Yu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Tr.fromArray(s,r);let a=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=t.dot(Tr),c=e.dot(Tr),h=n.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var mb=new Fr,Ha=new N,$u=new N,tl=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mb.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ha.subVectors(t,this.center);let e=Ha.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ha,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ha.copy(t.center).add($u)),this.expandByPoint(Ha.copy(t.center).sub($u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ds=new N,Zu=new N,cc=new N,Gs=new N,Ju=new N,hc=new N,Ku=new N,cf=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ds)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ds.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ds.copy(this.origin).addScaledVector(this.direction,e),ds.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zu.copy(t).add(e).multiplyScalar(.5),cc.copy(e).sub(t).normalize(),Gs.copy(this.origin).sub(Zu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cc),a=Gs.dot(this.direction),l=-Gs.dot(cc),c=Gs.lengthSq(),h=Math.abs(1-o*o),f,d,u,m;if(h>0)if(f=o*l-a,d=o*a-l,m=r*h,f>=0)if(d>=-m)if(d<=m){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zu).addScaledVector(cc,d),u}intersectSphere(t,e){ds.subVectors(t.center,this.origin);let n=ds.dot(this.direction),i=ds.dot(ds)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ds)!==null}intersectTriangle(t,e,n,i,r){Ju.subVectors(e,t),hc.subVectors(n,t),Ku.crossVectors(Ju,hc);let o=this.direction.dot(Ku),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gs.subVectors(this.origin,t);let l=a*this.direction.dot(hc.crossVectors(Gs,hc));if(l<0)return null;let c=a*this.direction.dot(Ju.cross(Gs));if(c<0||l+c>o)return null;let h=-a*Gs.dot(Ku);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class s{constructor(t,e,n,i,r,o,a,l,c,h,f,d,u,m,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,d,u,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,f,d,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/_o.setFromMatrixColumn(t,0).length(),r=1/_o.setFromMatrixColumn(t,1).length(),o=1/_o.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,m=c*h,_=c*f;e[0]=d+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,m=c*h,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=m*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+m,e[10]=d-_*f}else if(t.order==="XZY"){let d=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=o*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gb,t,_b)}lookAt(t,e,n){let i=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ws.crossVectors(n,ri),Ws.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ws.crossVectors(n,ri)),Ws.normalize(),uc.crossVectors(ri,Ws),i[0]=Ws.x,i[4]=uc.x,i[8]=ri.x,i[1]=Ws.y,i[5]=uc.y,i[9]=ri.y,i[2]=Ws.z,i[6]=uc.z,i[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],M=n[7],x=n[11],T=n[15],E=i[0],S=i[4],A=i[8],v=i[12],y=i[1],P=i[5],D=i[9],O=i[13],z=i[2],q=i[6],H=i[10],Y=i[14],G=i[3],st=i[7],L=i[11],ht=i[15];return r[0]=o*E+a*y+l*z+c*G,r[4]=o*S+a*P+l*q+c*st,r[8]=o*A+a*D+l*H+c*L,r[12]=o*v+a*O+l*Y+c*ht,r[1]=h*E+f*y+d*z+u*G,r[5]=h*S+f*P+d*q+u*st,r[9]=h*A+f*D+d*H+u*L,r[13]=h*v+f*O+d*Y+u*ht,r[2]=m*E+_*y+p*z+g*G,r[6]=m*S+_*P+p*q+g*st,r[10]=m*A+_*D+p*H+g*L,r[14]=m*v+_*O+p*Y+g*ht,r[3]=b*E+M*y+x*z+T*G,r[7]=b*S+M*P+x*q+T*st,r[11]=b*A+M*D+x*H+T*L,r[15]=b*v+M*O+x*Y+T*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*u-n*l*u)+_*(+e*l*u-e*c*d+r*o*d-i*o*u+i*c*h-r*l*h)+p*(+e*c*f-e*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+g*(-i*a*h-e*l*f+e*a*d+i*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],b=f*p*c-_*d*c+_*l*u-a*p*u-f*l*g+a*d*g,M=m*d*c-h*p*c-m*l*u+o*p*u+h*l*g-o*d*g,x=h*_*c-m*f*c+m*a*u-o*_*u-h*a*g+o*f*g,T=m*f*l-h*_*l-m*a*d+o*_*d+h*a*p-o*f*p,E=e*b+n*M+i*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return t[0]=b*S,t[1]=(_*d*r-f*p*r-_*i*u+n*p*u+f*i*g-n*d*g)*S,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*g+n*l*g)*S,t[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*u-n*l*u)*S,t[4]=M*S,t[5]=(h*p*r-m*d*r+m*i*u-e*p*u-h*i*g+e*d*g)*S,t[6]=(m*l*r-o*p*r-m*i*c+e*p*c+o*i*g-e*l*g)*S,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*u+e*l*u)*S,t[8]=x*S,t[9]=(m*f*r-h*_*r-m*n*u+e*_*u+h*n*g-e*f*g)*S,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*g+e*a*g)*S,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*u-e*a*u)*S,t[12]=T*S,t[13]=(h*_*i-m*f*i+m*n*d-e*_*d-h*n*p+e*f*p)*S,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*p-e*a*p)*S,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*d+e*a*d)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,m=r*f,_=o*h,p=o*f,g=a*f,b=l*c,M=l*h,x=l*f,T=n.x,E=n.y,S=n.z;return i[0]=(1-(_+g))*T,i[1]=(u+x)*T,i[2]=(m-M)*T,i[3]=0,i[4]=(u-x)*E,i[5]=(1-(d+g))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(m+M)*S,i[9]=(p-b)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=_o.set(i[0],i[1],i[2]).length(),o=_o.set(i[4],i[5],i[6]).length(),a=_o.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ii.copy(this);let c=1/r,h=1/o,f=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,e.setFromRotationMatrix(Ii),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ys){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),u,m;if(a===ys)u=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Oc)u=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ys){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-r),d=(e+t)*c,u=(n+i)*h,m,_;if(a===ys)m=(o+r)*f,_=-2*f;else if(a===Oc)m=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_o=new N,Ii=new Je,gb=new N(0,0,0),_b=new N(1,1,1),Ws=new N,uc=new N,ri=new N,Gg=new Je,Wg=new js,Ji=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var zc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xb=0,Xg=new N,xo=new js,fs=new Je,dc=new N,Va=new N,vb=new N,yb=new js,qg=new N(1,0,0),Yg=new N(0,1,0),$g=new N(0,0,1),Zg={type:"added"},bb={type:"removed"},vo={type:"childadded",child:null},ju={type:"childremoved",child:null},gn=class s extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new N,e=new Ji,n=new js,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new ne}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.multiply(xo),this}rotateOnWorldAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.premultiply(xo),this}rotateX(t){return this.rotateOnAxis(qg,t)}rotateY(t){return this.rotateOnAxis(Yg,t)}rotateZ(t){return this.rotateOnAxis($g,t)}translateOnAxis(t,e){return Xg.copy(t).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qg,t)}translateY(t){return this.translateOnAxis(Yg,t)}translateZ(t){return this.translateOnAxis($g,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dc.copy(t):dc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Va,dc,this.up):fs.lookAt(dc,Va,this.up),this.quaternion.setFromRotationMatrix(fs),i&&(fs.extractRotation(i.matrixWorld),xo.setFromRotationMatrix(fs),this.quaternion.premultiply(xo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zg),vo.child=t,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bb),ju.child=t,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zg),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,t,vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,yb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};gn.DEFAULT_UP=new N(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new N,ps=new N,Qu=new N,ms=new N,yo=new N,bo=new N,Jg=new N,td=new N,ed=new N,nd=new N,id=new Ze,sd=new Ze,rd=new Ze,Lr=class s{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Li.subVectors(i,e),ps.subVectors(n,e),Qu.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(ps),l=Li.dot(Qu),c=ps.dot(ps),h=ps.dot(Qu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ms.x),l.addScaledVector(o,ms.y),l.addScaledVector(a,ms.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return id.setScalar(0),sd.setScalar(0),rd.setScalar(0),id.fromBufferAttribute(t,e),sd.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(id,r.x),o.addScaledVector(sd,r.y),o.addScaledVector(rd,r.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),ps.subVectors(t,e),Li.cross(ps).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),Li.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;yo.subVectors(i,n),bo.subVectors(r,n),td.subVectors(t,n);let l=yo.dot(td),c=bo.dot(td);if(l<=0&&c<=0)return e.copy(n);ed.subVectors(t,i);let h=yo.dot(ed),f=bo.dot(ed);if(h>=0&&f<=h)return e.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yo,o);nd.subVectors(t,r);let u=yo.dot(nd),m=bo.dot(nd);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(bo,a);let p=h*m-u*f;if(p<=0&&f-h>=0&&u-m>=0)return Jg.subVectors(r,i),a=(f-h)/(f-h+(u-m)),e.copy(i).addScaledVector(Jg,a);let g=1/(p+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(yo,o).addScaledVector(bo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},fc={h:0,s:0,l:0};function od(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Qf(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=od(o,r,t+1/3),this.g=od(o,r,t),this.b=od(o,r,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=Wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){let n=Z0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return de.fromWorkingColorSpace(Rn.copy(this),t),Math.round(cn(Rn.r*255,0,255))*65536+Math.round(cn(Rn.g*255,0,255))*256+Math.round(cn(Rn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,r=Rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Wn){de.fromWorkingColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xs),this.setHSL(Xs.h+t,Xs.s+e,Xs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xs),t.getHSL(fc);let n=Ya(Xs.h,fc.h,e),i=Ya(Xs.s,fc.s,e),r=Ya(Xs.l,fc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new ie;ie.NAMES=Z0;var Mb=0,Br=class extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Gr(),this.name="",this.blending=Ro,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=bd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(n.blending=this.blending),this.side!==Js&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yd&&(n.blendSrc=this.blendSrc),this.blendDst!==bd&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yi=class extends Br{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var sn=new N,pc=new gt,qn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dg,this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pc.fromBufferAttribute(this,e),pc.applyMatrix3(t),this.setXY(e,pc.x,pc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=To(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=To(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=To(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=To(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=To(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),n=Vn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),n=Vn(n,this.array),i=Vn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),n=Vn(n,this.array),i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dg&&(t.usage=this.usage),t}};var Hc=class extends qn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vc=class extends qn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends qn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sb=0,xi=new Je,ad=new gn,Mo=new N,oi=new Fr,Ga=new Fr,mn=new N,In=class s extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?Vc:Hc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,n){return xi.makeTranslation(t,e,n),this.applyMatrix4(xi),this}scale(t,e,n){return xi.makeScale(t,e,n),this.applyMatrix4(xi),this}lookAt(t){return ad.lookAt(t),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ga.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(oi.min,Ga.min),oi.expandByPoint(mn),mn.addVectors(oi.max,Ga.max),oi.expandByPoint(mn)):(oi.expandByPoint(Ga.min),oi.expandByPoint(Ga.max))}oi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)mn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(Mo.fromBufferAttribute(t,c),mn.add(Mo)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new N,l[A]=new N;let c=new N,h=new N,f=new N,d=new gt,u=new gt,m=new gt,_=new N,p=new N;function g(A,v,y){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,v),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,y),h.sub(c),f.sub(c),u.sub(d),m.sub(d);let P=1/(u.x*m.y-m.x*u.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(P),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(P),a[A].add(_),a[v].add(_),a[y].add(_),l[A].add(p),l[v].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,v=b.length;A<v;++A){let y=b[A],P=y.start,D=y.count;for(let O=P,z=P+D;O<z;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new N,x=new N,T=new N,E=new N;function S(A){T.fromBufferAttribute(i,A),E.copy(T);let v=a[A];M.copy(v),M.sub(T.multiplyScalar(T.dot(v))).normalize(),x.crossVectors(E,v);let P=x.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,P)}for(let A=0,v=b.length;A<v;++A){let y=b[A],P=y.start,D=y.count;for(let O=P,z=P+D;O<z;O+=3)S(t.getX(O+0)),S(t.getX(O+1)),S(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let d=0,u=t.count;d<u;d+=3){let m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[u++]}return new qn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kg=new Je,Ar=new cf,mc=new tl,jg=new N,gc=new N,_c=new N,xc=new N,ld=new N,vc=new N,Qg=new N,yc=new N,yn=class extends gn{constructor(t=new In,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){vc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(ld.fromBufferAttribute(f,t),o?vc.addScaledVector(ld,h):vc.addScaledVector(ld.sub(e),h))}e.add(vc)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(r),Ar.copy(t.ray).recast(t.near),!(mc.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(mc,jg)===null||Ar.origin.distanceToSquared(jg)>(t.far-t.near)**2))&&(Kg.copy(r).invert(),Ar.copy(t.ray).applyMatrix4(Kg),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ar)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=o[p.materialIndex],b=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=b,T=M;x<T;x+=3){let E=a.getX(x),S=a.getX(x+1),A=a.getX(x+2);i=bc(this,g,t,n,c,h,f,E,S,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let b=a.getX(p),M=a.getX(p+1),x=a.getX(p+2);i=bc(this,o,t,n,c,h,f,b,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=o[p.materialIndex],b=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=b,T=M;x<T;x+=3){let E=x,S=x+1,A=x+2;i=bc(this,g,t,n,c,h,f,E,S,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let b=p,M=p+1,x=p+2;i=bc(this,o,t,n,c,h,f,b,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Eb(s,t,e,n,i,r,o,a){let l;if(t.side===Pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Js,a),l===null)return null;yc.copy(a),yc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(yc);return c<e.near||c>e.far?null:{distance:c,point:yc.clone(),object:s}}function bc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,gc),s.getVertexPosition(l,_c),s.getVertexPosition(c,xc);let h=Eb(s,t,e,n,gc,_c,xc,Qg);if(h){let f=new N;Lr.getBarycoord(Qg,gc,_c,xc,f),i&&(h.uv=Lr.getInterpolatedAttribute(i,a,l,c,f,new gt)),r&&(h.uv1=Lr.getInterpolatedAttribute(r,a,l,c,f,new gt)),o&&(h.normal=Lr.getInterpolatedAttribute(o,a,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Lr.getNormal(gc,_c,xc,d.normal),h.face=d,h.barycoord=f}return h}var Ki=class s extends In{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(f,2));function m(_,p,g,b,M,x,T,E,S,A,v){let y=x/S,P=T/A,D=x/2,O=T/2,z=E/2,q=S+1,H=A+1,Y=0,G=0,st=new N;for(let L=0;L<H;L++){let ht=L*P-O;for(let Nt=0;Nt<q;Nt++){let Qt=Nt*y-D;st[_]=Qt*b,st[p]=ht*M,st[g]=z,c.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[g]=E>0?1:-1,h.push(st.x,st.y,st.z),f.push(Nt/S),f.push(1-L/A),Y+=1}}for(let L=0;L<A;L++)for(let ht=0;ht<S;ht++){let Nt=d+ht+q*L,Qt=d+ht+q*(L+1),Z=d+(ht+1)+q*(L+1),it=d+(ht+1)+q*L;l.push(Nt,Qt,it),l.push(Qt,Z,it),G+=6}a.addGroup(u,G,v),u+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ko(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Gn(s){let t={};for(let e=0;e<s.length;e++){let n=ko(s[e]);for(let i in n)t[i]=n[i]}return t}function wb(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function J0(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Tb={clone:ko,merge:Gn},Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ji=class extends Br{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ko(t.uniforms),this.uniformsGroups=wb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Gc=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ys}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qs=new N,t0=new gt,e0=new gt,Xn=class extends Gc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qs.x,qs.y).multiplyScalar(-t/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qs.x,qs.y).multiplyScalar(-t/qs.z)}getViewSize(t,e){return this.getViewBounds(t,t0,e0),e.subVectors(e0,t0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},So=-90,Eo=1,hf=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xn(So,Eo,t,e);i.layers=this.layers,this.add(i);let r=new Xn(So,Eo,t,e);r.layers=this.layers,this.add(r);let o=new Xn(So,Eo,t,e);o.layers=this.layers,this.add(o);let a=new Xn(So,Eo,t,e);a.layers=this.layers,this.add(a);let l=new Xn(So,Eo,t,e);l.layers=this.layers,this.add(l);let c=new Xn(So,Eo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ys)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Wc=class extends ai{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Uo,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uf=class extends Ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ki(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:$s});r.uniforms.tEquirect.value=e;let o=new yn(i,r),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=Zi),new hf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},cd=new N,Rb=new N,Pb=new ne,_s=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=cd.subVectors(n,e).cross(Rb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(cd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pb.getNormalMatrix(t),i=this.coplanarPoint(cd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new tl,Mc=new N,el=class{constructor(t=new _s,e=new _s,n=new _s,i=new _s,r=new _s,o=new _s){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ys){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],m=i[9],_=i[10],p=i[11],g=i[12],b=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,p-u,x-g).normalize(),n[1].setComponents(l+r,d+c,p+u,x+g).normalize(),n[2].setComponents(l+o,d+h,p+m,x+b).normalize(),n[3].setComponents(l-o,d-h,p-m,x-b).normalize(),n[4].setComponents(l-a,d-f,p-_,x-M).normalize(),e===ys)n[5].setComponents(l+a,d+f,p+_,x+M).normalize();else if(e===Oc)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Mc.x=i.normal.x>0?t.max.x:t.min.x,Mc.y=i.normal.y>0?t.max.y:t.min.y,Mc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function K0(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ib(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){let m=f[d],_=f[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){let _=f[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Es=class s extends In{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,d=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let b=g*d-o;for(let M=0;M<c;M++){let x=M*f-r;m.push(x,-b,0),_.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let M=b+c*g,x=b+c*(g+1),T=b+1+c*(g+1),E=b+1+c*g;u.push(M,x,E),u.push(x,T,E)}this.setIndex(u),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,IS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Lb,alphahash_pars_fragment:Db,alphamap_fragment:Ub,alphamap_pars_fragment:Nb,alphatest_fragment:Ob,alphatest_pars_fragment:Fb,aomap_fragment:Bb,aomap_pars_fragment:kb,batching_pars_vertex:zb,batching_vertex:Hb,begin_vertex:Vb,beginnormal_vertex:Gb,bsdfs:Wb,iridescence_fragment:Xb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Jb,color_fragment:Kb,color_pars_fragment:jb,color_pars_vertex:Qb,color_vertex:tM,common:eM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:sM,displacementmap_vertex:rM,emissivemap_fragment:oM,emissivemap_pars_fragment:aM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:hM,envmap_common_pars_fragment:uM,envmap_pars_fragment:dM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:EM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:_M,fog_pars_fragment:xM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:yM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:MM,lights_pars_begin:SM,lights_toon_fragment:wM,lights_toon_pars_fragment:TM,lights_phong_fragment:AM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:PM,lights_fragment_begin:IM,lights_fragment_maps:LM,lights_fragment_end:DM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:OM,logdepthbuf_vertex:FM,map_fragment:BM,map_pars_fragment:kM,map_particle_fragment:zM,map_particle_pars_fragment:HM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:GM,morphinstance_vertex:WM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:$M,normal_fragment_begin:ZM,normal_fragment_maps:JM,normal_pars_fragment:KM,normal_pars_vertex:jM,normal_vertex:QM,normalmap_pars_fragment:tS,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:sS,opaque_fragment:rS,packing:oS,premultiplied_alpha_fragment:aS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:hS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:_S,skinning_pars_vertex:xS,skinning_vertex:vS,skinnormal_vertex:yS,specularmap_fragment:bS,specularmap_pars_fragment:MS,tonemapping_fragment:SS,tonemapping_pars_fragment:ES,transmission_fragment:wS,transmission_pars_fragment:TS,uv_pars_fragment:AS,uv_pars_vertex:CS,uv_vertex:RS,worldpos_vertex:PS,background_vert:IS,background_frag:LS,backgroundCube_vert:DS,backgroundCube_frag:US,cube_vert:NS,cube_frag:OS,depth_vert:FS,depth_frag:BS,distanceRGBA_vert:kS,distanceRGBA_frag:zS,equirect_vert:HS,equirect_frag:VS,linedashed_vert:GS,linedashed_frag:WS,meshbasic_vert:XS,meshbasic_frag:qS,meshlambert_vert:YS,meshlambert_frag:$S,meshmatcap_vert:ZS,meshmatcap_frag:JS,meshnormal_vert:KS,meshnormal_frag:jS,meshphong_vert:QS,meshphong_frag:t1,meshphysical_vert:e1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:s1,points_vert:r1,points_frag:o1,shadow_vert:a1,shadow_frag:l1,sprite_vert:c1,sprite_frag:h1},Et={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},$i={basic:{uniforms:Gn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Gn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Gn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Gn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Gn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Gn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Gn([Et.points,Et.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Gn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Gn([Et.common,Et.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Gn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Gn([Et.sprite,Et.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Gn([Et.common,Et.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Gn([Et.lights,Et.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};$i.physical={uniforms:Gn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Sc={r:0,b:0,g:0},Rr=new Ji,u1=new Je;function d1(s,t,e,n,i,r,o){let a=new ie(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function _(b){let M=!1,x=m(b);x===null?g(a,l):x&&x.isColor&&(g(x,1),M=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,M){let x=m(M);x&&(x.isCubeTexture||x.mapping===ih)?(h===void 0&&(h=new yn(new Ki(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ko($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rr.copy(M.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Rr)),h.material.toneMapped=de.getTransfer(x.colorSpace)!==Se,(f!==x||d!==x.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,u=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yn(new Es(2,2),new ji({name:"BackgroundMaterial",uniforms:ko($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=de.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,M){b.getRGB(Sc,J0(s)),n.buffers.color.setClear(Sc.r,Sc.g,Sc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(a,l)},render:_,addToRenderList:p}}function f1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,P,D,O,z){let q=!1,H=f(O,D,P);r!==H&&(r=H,c(r.object)),q=u(y,O,D,z),q&&m(y,O,D,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(y,P,D,O),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function f(y,P,D){let O=D.wireframe===!0,z=n[y.id];z===void 0&&(z={},n[y.id]=z);let q=z[P.id];q===void 0&&(q={},z[P.id]=q);let H=q[O];return H===void 0&&(H=d(l()),q[O]=H),H}function d(y){let P=[],D=[],O=[];for(let z=0;z<e;z++)P[z]=0,D[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:y,attributes:{},index:null}}function u(y,P,D,O){let z=r.attributes,q=P.attributes,H=0,Y=D.getAttributes();for(let G in Y)if(Y[G].location>=0){let L=z[G],ht=q[G];if(ht===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),L===void 0||L.attribute!==ht||ht&&L.data!==ht.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function m(y,P,D,O){let z={},q=P.attributes,H=0,Y=D.getAttributes();for(let G in Y)if(Y[G].location>=0){let L=q[G];L===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(L=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(L=y.instanceColor));let ht={};ht.attribute=L,L&&L.data&&(ht.data=L.data),z[G]=ht,H++}r.attributes=z,r.attributesNum=H,r.index=O}function _(){let y=r.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function p(y){g(y,0)}function g(y,P){let D=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;D[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),z[y]!==P&&(s.vertexAttribDivisor(y,P),z[y]=P)}function b(){let y=r.newAttributes,P=r.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==y[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function M(y,P,D,O,z,q,H){H===!0?s.vertexAttribIPointer(y,P,D,z,q):s.vertexAttribPointer(y,P,D,O,z,q)}function x(y,P,D,O){_();let z=O.attributes,q=D.getAttributes(),H=P.defaultAttributeValues;for(let Y in q){let G=q[Y];if(G.location>=0){let st=z[Y];if(st===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let L=st.normalized,ht=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let Qt=Nt.buffer,Z=Nt.type,it=Nt.bytesPerElement,bt=Z===s.INT||Z===s.UNSIGNED_INT||st.gpuType===Yf;if(st.isInterleavedBufferAttribute){let rt=st.data,Rt=rt.stride,Lt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)g(G.location+Ft,rt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)p(G.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Ft=0;Ft<G.locationSize;Ft++)M(G.location+Ft,ht/G.locationSize,Z,L,Rt*it,(Lt+ht/G.locationSize*Ft)*it,bt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)g(G.location+rt,st.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let rt=0;rt<G.locationSize;rt++)M(G.location+rt,ht/G.locationSize,Z,L,ht*it,ht/G.locationSize*rt*it,bt)}}else if(H!==void 0){let L=H[Y];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(G.location,L);break;case 3:s.vertexAttrib3fv(G.location,L);break;case 4:s.vertexAttrib4fv(G.location,L);break;default:s.vertexAttrib1fv(G.location,L)}}}}b()}function T(){A();for(let y in n){let P=n[y];for(let D in P){let O=P[D];for(let z in O)h(O[z].object),delete O[z];delete P[D]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let D in P){let O=P[D];for(let z in O)h(O[z].object),delete O[z];delete P[D]}delete n[y.id]}function S(y){for(let P in n){let D=n[P];if(D[y.id]===void 0)continue;let O=D[y.id];for(let z in O)h(O[z].object),delete O[z];delete D[y.id]}}function A(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function p1(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let m=0;m<f;m++)u+=h[m];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function m1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==Di&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let A=S===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Ms&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==vs&&!A)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function g1(s){let t=this,e=null,n=0,i=!1,r=!1,o=new _s,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=s.get(f);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,M=b*4,x=g.clippingState||null;l.value=x,x=h(m,d,M,u);for(let T=0;T!==M;++T)x[T]=e[T];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,m){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,x=u;M!==_;++M,x+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function _1(s){let t=new WeakMap;function e(o,a){return a===Rd?o.mapping=Uo:a===Pd&&(o.mapping=No),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rd||a===Pd)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uf(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xc=class extends Gc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ao=4,n0=[.125,.215,.35,.446,.526,.582],Dr=20,hd=new Xc,i0=new ie,ud=null,dd=0,fd=0,pd=!1,Ir=(1+Math.sqrt(5))/2,wo=1/Ir,s0=[new N(-Ir,wo,0),new N(Ir,wo,0),new N(-wo,0,Ir),new N(wo,0,Ir),new N(0,Ir,-wo),new N(0,Ir,wo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],zo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ud,dd,fd),this._renderer.xr.enabled=pd,t.scissorTest=!1,Ec(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Uo||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:ll,format:Di,colorSpace:qo,depthBuffer:!1},i=r0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x1(r)),this._blurMaterial=v1(r,t,e)}return i}_compileMaterial(t){let e=new yn(this._lodPlanes[0],t);this._renderer.compile(e,hd)}_sceneToCubeUV(t,e,n,i){let a=new Xn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(i0),h.toneMapping=Zs,h.autoClear=!1;let u=new yi({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),m=new yn(new Ki,u),_=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(i0),_=!0);for(let g=0;g<6;g++){let b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let M=this._cubeSize;Ec(i,b*M,g>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Uo||t.mapping===No;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ec(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,hd)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=s0[(i-r-1)%s0.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new yn(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Dr-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):Dr;p>Dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);let g=[],b=0;for(let S=0;S<Dr;++S){let A=S/_,v=Math.exp(-A*A/2);g.push(v),S===0?b+=v:S<p&&(b+=2*v)}for(let S=0;S<g.length;S++)g[S]=g[S]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let x=this._sizeLods[i],T=3*x*(i>M-Ao?i-M+Ao:0),E=4*(this._cubeSize-x);Ec(e,T,E,3*x,2*x),l.setRenderTarget(e),l.render(f,hd)}};function x1(s){let t=[],e=[],n=[],i=s,r=s-Ao+1+n0.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ao?l=n0[o-s+Ao-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,m=6,_=3,p=2,g=1,b=new Float32Array(_*m*u),M=new Float32Array(p*m*u),x=new Float32Array(g*m*u);for(let E=0;E<u;E++){let S=E%3*2/3-1,A=E>2?0:-1,v=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];b.set(v,_*m*E),M.set(d,p*m*E);let y=[E,E,E,E,E,E];x.set(y,g*m*E)}let T=new In;T.setAttribute("position",new qn(b,_)),T.setAttribute("uv",new qn(M,p)),T.setAttribute("faceIndex",new qn(x,g)),t.push(T),i>Ao&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function r0(s,t,e){let n=new Ss(s,t,e);return n.texture.mapping=ih,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ec(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function v1(s,t,e){let n=new Float32Array(Dr),i=new N(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function o0(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function a0(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y1(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rd||l===Pd,h=l===Uo||l===No;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new zo(s)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new zo(s)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function b1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M1(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let _=d.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let u=f.morphAttributes;for(let m in u){let _=u[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,m=f.attributes.position,_=0;if(u!==null){let b=u.array;_=u.version;for(let M=0,x=b.length;M<x;M+=3){let T=b[M+0],E=b[M+1],S=b[M+2];d.push(T,E,E,S,S,T)}}else if(m!==void 0){let b=m.array;_=m.version;for(let M=0,x=b.length/3-1;M<x;M+=3){let T=M+0,E=M+1,S=M+2;d.push(T,E,E,S,S,T)}}else return;let p=new($0(d)?Vc:Hc)(d,1);p.version=_;let g=r.get(f);g&&t.remove(g),r.set(f,p)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function S1(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,m){m!==0&&(s.drawElementsInstanced(n,u,r,d*o,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=u[g];e.update(p,n,1)}function f(d,u,m,_){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,u[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,_,0,m);let g=0;for(let b=0;b<m;b++)g+=u[b]*_[b];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function E1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function w1(s,t,e){let n=new WeakMap,i=new Ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let v=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*T*4*f),S=new kc(E,x,T,f);S.type=vs,S.needsUpdate=!0;let A=M*4;for(let y=0;y<f;y++){let P=p[y],D=g[y],O=b[y],z=x*T*4*y;for(let q=0;q<P.count;q++){let H=q*A;u===!0&&(i.fromBufferAttribute(P,q),E[z+H+0]=i.x,E[z+H+1]=i.y,E[z+H+2]=i.z,E[z+H+3]=0),m===!0&&(i.fromBufferAttribute(D,q),E[z+H+4]=i.x,E[z+H+5]=i.y,E[z+H+6]=i.z,E[z+H+7]=0),_===!0&&(i.fromBufferAttribute(O,q),E[z+H+8]=i.x,E[z+H+9]=i.y,E[z+H+10]=i.z,E[z+H+11]=O.itemSize===4?i.w:1)}}d={count:f,texture:S,size:new gt(x,T)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function T1(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var qc=class extends ai{constructor(t,e,n,i,r,o,a,l,c,h=Po){if(h!==Po&&h!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Po&&(n=Or),n===void 0&&h===Bo&&(n=Fo),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ui,this.minFilter=l!==void 0?l:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},j0=new ai,l0=new qc(1,1),Q0=new kc,t_=new lf,e_=new Wc,c0=[],h0=[],u0=new Float32Array(16),d0=new Float32Array(9),f0=new Float32Array(4);function Yo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=c0[i];if(r===void 0&&(r=new Float32Array(i),c0[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function hn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function un(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function rh(s,t){let e=h0[t];e===void 0&&(e=new Int32Array(t),h0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function A1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function C1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2fv(this.addr,t),un(e,t)}}function R1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;s.uniform3fv(this.addr,t),un(e,t)}}function P1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4fv(this.addr,t),un(e,t)}}function I1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;f0.set(n),s.uniformMatrix2fv(this.addr,!1,f0),un(e,n)}}function L1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;d0.set(n),s.uniformMatrix3fv(this.addr,!1,d0),un(e,n)}}function D1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;u0.set(n),s.uniformMatrix4fv(this.addr,!1,u0),un(e,n)}}function U1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function N1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2iv(this.addr,t),un(e,t)}}function O1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;s.uniform3iv(this.addr,t),un(e,t)}}function F1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4iv(this.addr,t),un(e,t)}}function B1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function k1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2uiv(this.addr,t),un(e,t)}}function z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;s.uniform3uiv(this.addr,t),un(e,t)}}function H1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4uiv(this.addr,t),un(e,t)}}function V1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(l0.compareFunction=q0,r=l0):r=j0,e.setTexture2D(t||r,i)}function G1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||t_,i)}function W1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||e_,i)}function X1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Q0,i)}function q1(s){switch(s){case 5126:return A1;case 35664:return C1;case 35665:return R1;case 35666:return P1;case 35674:return I1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return N1;case 35668:case 35672:return O1;case 35669:case 35673:return F1;case 5125:return B1;case 36294:return k1;case 36295:return z1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}function Y1(s,t){s.uniform1fv(this.addr,t)}function $1(s,t){let e=Yo(t,this.size,2);s.uniform2fv(this.addr,e)}function Z1(s,t){let e=Yo(t,this.size,3);s.uniform3fv(this.addr,e)}function J1(s,t){let e=Yo(t,this.size,4);s.uniform4fv(this.addr,e)}function K1(s,t){let e=Yo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function j1(s,t){let e=Yo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Q1(s,t){let e=Yo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tE(s,t){s.uniform1iv(this.addr,t)}function eE(s,t){s.uniform2iv(this.addr,t)}function nE(s,t){s.uniform3iv(this.addr,t)}function iE(s,t){s.uniform4iv(this.addr,t)}function sE(s,t){s.uniform1uiv(this.addr,t)}function rE(s,t){s.uniform2uiv(this.addr,t)}function oE(s,t){s.uniform3uiv(this.addr,t)}function aE(s,t){s.uniform4uiv(this.addr,t)}function lE(s,t,e){let n=this.cache,i=t.length,r=rh(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||j0,r[o])}function cE(s,t,e){let n=this.cache,i=t.length,r=rh(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||t_,r[o])}function hE(s,t,e){let n=this.cache,i=t.length,r=rh(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||e_,r[o])}function uE(s,t,e){let n=this.cache,i=t.length,r=rh(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Q0,r[o])}function dE(s){switch(s){case 5126:return Y1;case 35664:return $1;case 35665:return Z1;case 35666:return J1;case 35674:return K1;case 35675:return j1;case 35676:return Q1;case 5124:case 35670:return tE;case 35667:case 35671:return eE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return sE;case 36294:return rE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return uE}}var df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q1(e.type)}},ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dE(e.type)}},pf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},md=/(\w+)(\])?(\[|\.)?/g;function p0(s,t){s.seq.push(t),s.map[t.id]=t}function fE(s,t,e){let n=s.name,i=n.length;for(md.lastIndex=0;;){let r=md.exec(n),o=md.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){p0(e,c===void 0?new df(a,s,t):new ff(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new pf(a),p0(e,f)),e=f}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);fE(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function m0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var pE=37297,mE=0;function gE(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var g0=new ne;function _E(s){de._getMatrix(g0,de.workingColorSpace,s);let t=`mat3( ${g0.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(s)){case sh:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+gE(s.getShaderSource(t),o)}else return i}function xE(s,t){let e=_E(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vE(s,t){let e;switch(t){case Py:e="Linear";break;case Iy:e="Reinhard";break;case Ly:e="Cineon";break;case qf:e="ACESFilmic";break;case Uy:e="AgX";break;case Ny:e="Neutral";break;case Dy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wc=new N;function yE(){de.getLuminanceCoefficients(wc);let s=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function ME(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function SE(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xa(s){return s!==""}function x0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function v0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(s){return s.replace(EE,TE)}var wE=new Map;function TE(s,t){let e=se[t];if(e===void 0){let n=wE.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mf(e)}var AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(s){return s.replace(AE,CE)}function CE(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function b0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===L0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gs&&(t="SHADOWMAP_TYPE_VSM"),t}function PE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Uo:case No:t="ENVMAP_TYPE_CUBE";break;case ih:t="ENVMAP_TYPE_CUBE_UV";break}return t}function IE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function LE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case D0:t="ENVMAP_BLENDING_MULTIPLY";break;case Cy:t="ENVMAP_BLENDING_MIX";break;case Ry:t="ENVMAP_BLENDING_ADD";break}return t}function DE(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function UE(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=RE(e),c=PE(e),h=IE(e),f=LE(e),d=DE(e),u=bE(e),m=ME(r),_=i.createProgram(),p,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xa).join(`
`),g.length>0&&(g+=`
`)):(p=[b0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),g=[b0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zs?"#define TONE_MAPPING":"",e.toneMapping!==Zs?se.tonemapping_pars_fragment:"",e.toneMapping!==Zs?vE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,xE("linearToOutputTexel",e.outputColorSpace),yE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xa).join(`
`)),o=mf(o),o=x0(o,e),o=v0(o,e),a=mf(a),a=x0(a,e),a=v0(a,e),o=y0(o),a=y0(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=b+p+o,x=b+g+a,T=m0(i,i.VERTEX_SHADER,M),E=m0(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(T).trim(),z=i.getShaderInfoLog(E).trim(),q=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,E);else{let Y=_0(i,T,"vertex"),G=_0(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Y+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||z==="")&&(H=!1);H&&(P.diagnostics={runnable:q,programLog:D,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(T),i.deleteShader(E),A=new Lo(i,_),v=SE(i,_)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,pE)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var NE=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _f(t),e.set(t,n)),n}},_f=class{constructor(t){this.id=NE++,this.code=t,this.usedTimes=0}};function OE(s,t,e,n,i,r,o){let a=new zc,l=new gf,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,y,P,D,O){let z=D.fog,q=O.geometry,H=v.isMeshStandardMaterial?D.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),G=Y&&Y.mapping===ih?Y.image.height:null,st=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let L=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=L!==void 0?L.length:0,Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let Qt,Z,it,bt;if(st){let Tt=$i[st];Qt=Tt.vertexShader,Z=Tt.fragmentShader}else Qt=v.vertexShader,Z=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),bt=l.getFragmentShaderID(v);let rt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,Wt=!!v.map,et=!!v.matcap,Q=!!Y,I=!!v.aoMap,wt=!!v.lightMap,nt=!!v.bumpMap,B=!!v.normalMap,at=!!v.displacementMap,Ot=!!v.emissiveMap,St=!!v.metalnessMap,R=!!v.roughnessMap,w=v.anisotropy>0,V=v.clearcoat>0,K=v.dispersion>0,j=v.iridescence>0,J=v.sheen>0,pt=v.transmission>0,dt=w&&!!v.anisotropyMap,xt=V&&!!v.clearcoatMap,Zt=V&&!!v.clearcoatNormalMap,ot=V&&!!v.clearcoatRoughnessMap,ft=j&&!!v.iridescenceMap,Vt=j&&!!v.iridescenceThicknessMap,zt=J&&!!v.sheenColorMap,At=J&&!!v.sheenRoughnessMap,te=!!v.specularMap,Xt=!!v.specularColorMap,ue=!!v.specularIntensityMap,U=pt&&!!v.transmissionMap,_t=pt&&!!v.thicknessMap,$=!!v.gradientMap,tt=!!v.alphaMap,mt=v.alphaTest>0,vt=!!v.alphaHash,qt=!!v.extensions,pe=Zs;v.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=s.toneMapping);let Xe={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:Qt,fragmentShader:Z,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:bt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:qo,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:et,envMap:Q,envMapMode:Q&&Y.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:wt,bumpMap:nt,normalMap:B,displacementMap:d&&at,emissiveMap:Ot,normalMapObjectSpace:B&&v.normalMapType===ky,normalMapTangentSpace:B&&v.normalMapType===X0,metalnessMap:St,roughnessMap:R,anisotropy:w,anisotropyMap:dt,clearcoat:V,clearcoatMap:xt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ot,dispersion:K,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Vt,sheen:J,sheenColorMap:zt,sheenRoughnessMap:At,specularMap:te,specularColorMap:Xt,specularIntensityMap:ue,transmission:pt,transmissionMap:U,thicknessMap:_t,gradientMap:$,opaque:v.transparent===!1&&v.blending===Ro&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:vt,combine:v.combine,mapUv:Wt&&_(v.map.channel),aoMapUv:I&&_(v.aoMap.channel),lightMapUv:wt&&_(v.lightMap.channel),bumpMapUv:nt&&_(v.bumpMap.channel),normalMapUv:B&&_(v.normalMap.channel),displacementMapUv:at&&_(v.displacementMap.channel),emissiveMapUv:Ot&&_(v.emissiveMap.channel),metalnessMapUv:St&&_(v.metalnessMap.channel),roughnessMapUv:R&&_(v.roughnessMap.channel),anisotropyMapUv:dt&&_(v.anisotropyMap.channel),clearcoatMapUv:xt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(v.sheenRoughnessMap.channel),specularMapUv:te&&_(v.specularMap.channel),specularColorMapUv:Xt&&_(v.specularColorMap.channel),specularIntensityMapUv:ue&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:_t&&_(v.thicknessMap.channel),alphaMapUv:tt&&_(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(B||w),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(Wt||tt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Rt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===Se,decodeVideoTextureEmissive:Ot&&v.emissiveMap.isVideoTexture===!0&&de.getTransfer(v.emissiveMap.colorSpace)===Se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===Pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:qt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&v.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function g(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(b(y,v),M(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function b(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){let y=m[v.type],P;if(y){let D=$i[y];P=Tb.clone(D.uniforms)}else P=v.uniforms;return P}function T(v,y){let P;for(let D=0,O=h.length;D<O;D++){let z=h[D];if(z.cacheKey===y){P=z,++P.usedTimes;break}}return P===void 0&&(P=new UE(s,y,v,r),h.push(P)),P}function E(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function S(v){l.remove(v)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:A}}function FE(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function BE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function M0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function S0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,m,_,p){let g=s[t];return g===void 0?(g={id:f.id,object:f,geometry:d,material:u,groupOrder:m,renderOrder:f.renderOrder,z:_,group:p},s[t]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=u,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=_,g.group=p),t++,g}function a(f,d,u,m,_,p){let g=o(f,d,u,m,_,p);u.transmission>0?n.push(g):u.transparent===!0?i.push(g):e.push(g)}function l(f,d,u,m,_,p){let g=o(f,d,u,m,_,p);u.transmission>0?n.unshift(g):u.transparent===!0?i.unshift(g):e.unshift(g)}function c(f,d){e.length>1&&e.sort(f||BE),n.length>1&&n.sort(d||M0),i.length>1&&i.sort(d||M0)}function h(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function kE(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new S0,s.set(n,[o])):i>=r.length?(o=new S0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ie};break;case"SpotLight":e={position:new N,direction:new N,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function HE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var VE=0;function GE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function WE(s){let t=new zE,e=HE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,r=new Je,o=new Je;function a(c){let h=0,f=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,b=0,M=0,x=0,T=0,E=0,S=0;c.sort(GE);for(let v=0,y=c.length;v<y;v++){let P=c[v],D=P.color,O=P.intensity,z=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*O,f+=D.g*O,d+=D.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],O);S++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=P.shadow.matrix,b++}n.directional[u]=H,u++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(D).multiplyScalar(O),H.distance=z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;let Y=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,x++}_++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(D).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let Y=P.shadow,G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=H,m++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[g]=H,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==u||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==g||A.numDirectionalShadows!==b||A.numPointShadows!==M||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==S)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,A.directionalLength=u,A.pointLength=m,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=g,A.numDirectionalShadows=b,A.numPointShadows=M,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=S,n.version=VE++)}function l(c,h){let f=0,d=0,u=0,m=0,_=0,p=h.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let M=c[g];if(M.isDirectionalLight){let x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(M.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(M.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function E0(s){let t=new WE(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function XE(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new E0(s),t.set(i,[a])):r>=o.length?(a=new E0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xf=class extends Br{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vf=class extends Br{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $E(s,t,e){let n=new el,i=new gt,r=new gt,o=new Ze,a=new xf({depthPacking:By}),l=new vf,c={},h=e.maxTextureSize,f={[Js]:Pn,[Pn]:Js,[vi]:vi},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:qE,fragmentShader:YE}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let m=new In;m.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new yn(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let g=this.type;this.render=function(E,S,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let v=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending($s),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=g!==gs&&this.type===gs,z=g===gs&&this.type!==gs;for(let q=0,H=E.length;q<H;q++){let Y=E[q],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let st=G.getFrameExtents();if(i.multiply(st),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||O===!0||z===!0){let ht=this.type!==gs?{minFilter:Ui,magFilter:Ui}:{};G.map!==null&&G.map.dispose(),G.map=new Ss(i.x,i.y,ht),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let L=G.getViewportCount();for(let ht=0;ht<L;ht++){let Nt=G.getViewport(ht);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),D.viewport(o),G.updateMatrices(Y,ht),n=G.getFrustum(),x(S,A,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===gs&&b(G,A),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(v,y,P)};function b(E,S){let A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ss(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,A,d,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,A,u,_,null)}function M(E,S,A,v){let y=null,P=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=A.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let D=y.uuid,O=S.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let q=z[O];q===void 0&&(q=y.clone(),z[O]=q,S.addEventListener("dispose",T)),y=q}if(y.visible=S.visible,y.wireframe=S.wireframe,v===gs?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:f[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=s.properties.get(y);D.light=A}return y}function x(E,S,A,v,y){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===gs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let O=t.update(E),z=E.material;if(Array.isArray(z)){let q=O.groups;for(let H=0,Y=q.length;H<Y;H++){let G=q[H],st=z[G.materialIndex];if(st&&st.visible){let L=M(E,st,v,y);E.onBeforeShadow(s,E,S,A,O,L,G),s.renderBufferDirect(A,null,O,L,E,G),E.onAfterShadow(s,E,S,A,O,L,G)}}}else if(z.visible){let q=M(E,z,v,y);E.onBeforeShadow(s,E,S,A,O,q,null),s.renderBufferDirect(A,null,O,q,E,null),E.onAfterShadow(s,E,S,A,O,q,null)}}let D=E.children;for(let O=0,z=D.length;O<z;O++)x(D[O],S,A,v,y)}function T(E){E.target.removeEventListener("dispose",T);for(let A in c){let v=c[A],y=E.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var ZE={[Md]:Sd,[Ed]:Ad,[wd]:Cd,[Do]:Td,[Sd]:Md,[Ad]:Ed,[Cd]:wd,[Td]:Do};function JE(s,t){function e(){let U=!1,_t=new Ze,$=null,tt=new Ze(0,0,0,0);return{setMask:function(mt){$!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),$=mt)},setLocked:function(mt){U=mt},setClear:function(mt,vt,qt,pe,Xe){Xe===!0&&(mt*=pe,vt*=pe,qt*=pe),_t.set(mt,vt,qt,pe),tt.equals(_t)===!1&&(s.clearColor(mt,vt,qt,pe),tt.copy(_t))},reset:function(){U=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,_t=!1,$=null,tt=null,mt=null;return{setReversed:function(vt){if(_t!==vt){let qt=t.get("EXT_clip_control");_t?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let pe=mt;mt=null,this.setClear(pe)}_t=vt},getReversed:function(){return _t},setTest:function(vt){vt?rt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(vt){$!==vt&&!U&&(s.depthMask(vt),$=vt)},setFunc:function(vt){if(_t&&(vt=ZE[vt]),tt!==vt){switch(vt){case Md:s.depthFunc(s.NEVER);break;case Sd:s.depthFunc(s.ALWAYS);break;case Ed:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Td:s.depthFunc(s.GEQUAL);break;case Ad:s.depthFunc(s.GREATER);break;case Cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=vt}},setLocked:function(vt){U=vt},setClear:function(vt){mt!==vt&&(_t&&(vt=1-vt),s.clearDepth(vt),mt=vt)},reset:function(){U=!1,$=null,tt=null,mt=null,_t=!1}}}function i(){let U=!1,_t=null,$=null,tt=null,mt=null,vt=null,qt=null,pe=null,Xe=null;return{setTest:function(Tt){U||(Tt?rt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(Tt){_t!==Tt&&!U&&(s.stencilMask(Tt),_t=Tt)},setFunc:function(Tt,Dt,ee){($!==Tt||tt!==Dt||mt!==ee)&&(s.stencilFunc(Tt,Dt,ee),$=Tt,tt=Dt,mt=ee)},setOp:function(Tt,Dt,ee){(vt!==Tt||qt!==Dt||pe!==ee)&&(s.stencilOp(Tt,Dt,ee),vt=Tt,qt=Dt,pe=ee)},setLocked:function(Tt){U=Tt},setClear:function(Tt){Xe!==Tt&&(s.clearStencil(Tt),Xe=Tt)},reset:function(){U=!1,_t=null,$=null,tt=null,mt=null,vt=null,qt=null,pe=null,Xe=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],m=null,_=!1,p=null,g=null,b=null,M=null,x=null,T=null,E=null,S=new ie(0,0,0),A=0,v=!1,y=null,P=null,D=null,O=null,z=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Y>=2);let st=null,L={},ht=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),Qt=new Ze().fromArray(ht),Z=new Ze().fromArray(Nt);function it(U,_t,$,tt){let mt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(U,vt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<$;qt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(_t+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return vt}let bt={};bt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(Do),nt(!1),B(wg),rt(s.CULL_FACE),I($s);function rt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Rt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Lt(U,_t){return f[U]!==_t?(s.bindFramebuffer(U,_t),f[U]=_t,U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ft(U,_t){let $=u,tt=!1;if(U){$=d.get(_t),$===void 0&&($=[],d.set(_t,$));let mt=U.textures;if($.length!==mt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,qt=mt.length;vt<qt;vt++)$[vt]=s.COLOR_ATTACHMENT0+vt;$.length=mt.length,tt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,tt=!0);tt&&s.drawBuffers($)}function Wt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let et={[xs]:s.FUNC_ADD,[dy]:s.FUNC_SUBTRACT,[fy]:s.FUNC_REVERSE_SUBTRACT};et[py]=s.MIN,et[my]=s.MAX;let Q={[Xo]:s.ZERO,[gy]:s.ONE,[_y]:s.SRC_COLOR,[yd]:s.SRC_ALPHA,[Sy]:s.SRC_ALPHA_SATURATE,[by]:s.DST_COLOR,[vy]:s.DST_ALPHA,[xy]:s.ONE_MINUS_SRC_COLOR,[bd]:s.ONE_MINUS_SRC_ALPHA,[My]:s.ONE_MINUS_DST_COLOR,[yy]:s.ONE_MINUS_DST_ALPHA,[Ey]:s.CONSTANT_COLOR,[wy]:s.ONE_MINUS_CONSTANT_COLOR,[Ty]:s.CONSTANT_ALPHA,[Ay]:s.ONE_MINUS_CONSTANT_ALPHA};function I(U,_t,$,tt,mt,vt,qt,pe,Xe,Tt){if(U===$s){_===!0&&(Rt(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),U!==Xf){if(U!==p||Tt!==v){if((g!==xs||x!==xs)&&(s.blendEquation(s.FUNC_ADD),g=xs,x=xs),Tt)switch(U){case Ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tg:s.blendFunc(s.ONE,s.ONE);break;case Ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,T=null,E=null,S.set(0,0,0),A=0,p=U,v=Tt}return}mt=mt||_t,vt=vt||$,qt=qt||tt,(_t!==g||mt!==x)&&(s.blendEquationSeparate(et[_t],et[mt]),g=_t,x=mt),($!==b||tt!==M||vt!==T||qt!==E)&&(s.blendFuncSeparate(Q[$],Q[tt],Q[vt],Q[qt]),b=$,M=tt,T=vt,E=qt),(pe.equals(S)===!1||Xe!==A)&&(s.blendColor(pe.r,pe.g,pe.b,Xe),S.copy(pe),A=Xe),p=U,v=!1}function wt(U,_t){U.side===vi?Rt(s.CULL_FACE):rt(s.CULL_FACE);let $=U.side===Pn;_t&&($=!$),nt($),U.blending===Ro&&U.transparent===!1?I($s):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function B(U){U!==cy?(rt(s.CULL_FACE),U!==P&&(U===wg?s.cullFace(s.BACK):U===hy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),P=U}function at(U){U!==D&&(H&&s.lineWidth(U),D=U)}function Ot(U,_t,$){U?(rt(s.POLYGON_OFFSET_FILL),(O!==_t||z!==$)&&(s.polygonOffset(_t,$),O=_t,z=$)):Rt(s.POLYGON_OFFSET_FILL)}function St(U){U?rt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function R(U){U===void 0&&(U=s.TEXTURE0+q-1),st!==U&&(s.activeTexture(U),st=U)}function w(U,_t,$){$===void 0&&(st===null?$=s.TEXTURE0+q-1:$=st);let tt=L[$];tt===void 0&&(tt={type:void 0,texture:void 0},L[$]=tt),(tt.type!==U||tt.texture!==_t)&&(st!==$&&(s.activeTexture($),st=$),s.bindTexture(U,_t||bt[U]),tt.type=U,tt.texture=_t)}function V(){let U=L[st];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(U){Qt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function At(U){Z.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function te(U,_t){let $=c.get(_t);$===void 0&&($=new WeakMap,c.set(_t,$));let tt=$.get(U);tt===void 0&&(tt=s.getUniformBlockIndex(_t,U.name),$.set(U,tt))}function Xt(U,_t){let tt=c.get(_t).get(U);l.get(_t)!==tt&&(s.uniformBlockBinding(_t,tt,U.__bindingPointIndex),l.set(_t,tt))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,L={},f={},d=new WeakMap,u=[],m=null,_=!1,p=null,g=null,b=null,M=null,x=null,T=null,E=null,S=new ie(0,0,0),A=0,v=!1,y=null,P=null,D=null,O=null,z=null,Qt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Rt,bindFramebuffer:Lt,drawBuffers:Ft,useProgram:Wt,setBlending:I,setMaterial:wt,setFlipSided:nt,setCullFace:B,setLineWidth:at,setPolygonOffset:Ot,setScissorTest:St,activeTexture:R,bindTexture:w,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:ft,texImage3D:Vt,updateUBOMapping:te,uniformBlockBinding:Xt,texStorage2D:Zt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:pt,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:zt,viewport:At,reset:ue}}function w0(s,t,e,n){let i=KE(n);switch(e){case B0:return s*t;case z0:return s*t;case H0:return s*t*2;case V0:return s*t/i.components*i.byteLength;case Jf:return s*t/i.components*i.byteLength;case G0:return s*t*2/i.components*i.byteLength;case Kf:return s*t*2/i.components*i.byteLength;case k0:return s*t*3/i.components*i.byteLength;case Di:return s*t*4/i.components*i.byteLength;case jf:return s*t*4/i.components*i.byteLength;case Pc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dd:case Nd:return Math.max(s,16)*Math.max(t,8)/4;case Ld:case Ud:return Math.max(s,8)*Math.max(t,8)/2;case Od:case Fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uc:case Qd:case tf:return Math.ceil(s/4)*Math.ceil(t/4)*16;case W0:case ef:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nf:case sf:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function KE(s){switch(s){case Ms:case N0:return{byteLength:1,components:1};case ja:case O0:case ll:return{byteLength:2,components:1};case $f:case Zf:return{byteLength:2,components:4};case Or:case Yf:case vs:return{byteLength:4,components:1};case F0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jE(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return u?new OffscreenCanvas(R,w):Fc("canvas")}function _(R,w,V){let K=1,j=St(R);if((j.width>V||j.height>V)&&(K=V/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(K*j.width),pt=Math.floor(K*j.height);f===void 0&&(f=m(J,pt));let dt=w?m(J,pt):f;return dt.width=J,dt.height=pt,dt.getContext("2d").drawImage(R,0,0,J,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+pt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,w,V,K,j=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=w;if(w===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),w===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),w===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){let pt=j?sh:de.getTransfer(K);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=pt===Se?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(R,w){let V;return R?w===null||w===Or||w===Fo?V=s.DEPTH24_STENCIL8:w===vs?V=s.DEPTH32F_STENCIL8:w===ja&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Or||w===Fo?V=s.DEPTH_COMPONENT24:w===vs?V=s.DEPTH_COMPONENT32F:w===ja&&(V=s.DEPTH_COMPONENT16),V}function T(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ui&&R.minFilter!==Zi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){let w=R.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&h.delete(w)}function S(R){let w=R.target;w.removeEventListener("dispose",S),y(w)}function A(R){let w=n.get(R);if(w.__webglInit===void 0)return;let V=R.source,K=d.get(V);if(K){let j=K[w.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(R),Object.keys(K).length===0&&d.delete(V)}n.remove(R)}function v(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let V=R.source,K=d.get(V);delete K[w.__cacheKey],o.memory.textures--}function y(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let j=0;j<w.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(w.__webglFramebuffer[K][j]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=R.textures;for(let K=0,j=V.length;K<j;K++){let J=n.get(V[K]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(R)}let P=0;function D(){P=0}function O(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function z(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function q(R,w){let V=n.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,R,w);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function H(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function Y(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,w);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function G(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){it(V,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}let st={[Oo]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[Id]:s.MIRRORED_REPEAT},L={[Ui]:s.NEAREST,[Oy]:s.NEAREST_MIPMAP_NEAREST,[rc]:s.NEAREST_MIPMAP_LINEAR,[Zi]:s.LINEAR,[Vu]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},ht={[zy]:s.NEVER,[qy]:s.ALWAYS,[Hy]:s.LESS,[q0]:s.LEQUAL,[Vy]:s.EQUAL,[Xy]:s.GEQUAL,[Gy]:s.GREATER,[Wy]:s.NOTEQUAL};function Nt(R,w){if(w.type===vs&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Zi||w.magFilter===Vu||w.magFilter===rc||w.magFilter===Nr||w.minFilter===Zi||w.minFilter===Vu||w.minFilter===rc||w.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,st[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,st[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,st[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,L[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ui||w.minFilter!==rc&&w.minFilter!==Nr||w.type===vs&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Qt(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));let K=w.source,j=d.get(K);j===void 0&&(j={},d.set(K,j));let J=z(w);if(J!==R.__cacheKey){j[J]===void 0&&(j[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[J].usedTimes++;let pt=j[R.__cacheKey];pt!==void 0&&(j[R.__cacheKey].usedTimes--,pt.usedTimes===0&&v(w)),R.__cacheKey=J,R.__webglTexture=j[J].texture}return V}function Z(R,w,V){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);let j=Qt(R,w),J=w.source;e.bindTexture(K,R.__webglTexture,s.TEXTURE0+V);let pt=n.get(J);if(J.version!==pt.__version||j===!0){e.activeTexture(s.TEXTURE0+V);let dt=de.getPrimaries(de.workingColorSpace),xt=w.colorSpace===Ys?null:de.getPrimaries(w.colorSpace),Zt=w.colorSpace===Ys||dt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ot=_(w.image,!1,i.maxTextureSize);ot=Ot(w,ot);let ft=r.convert(w.format,w.colorSpace),Vt=r.convert(w.type),zt=M(w.internalFormat,ft,Vt,w.colorSpace,w.isVideoTexture);Nt(K,w);let At,te=w.mipmaps,Xt=w.isVideoTexture!==!0,ue=pt.__version===void 0||j===!0,U=J.dataReady,_t=T(w,ot);if(w.isDepthTexture)zt=x(w.format===Bo,w.type),ue&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,zt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,zt,ot.width,ot.height,0,ft,Vt,null));else if(w.isDataTexture)if(te.length>0){Xt&&ue&&e.texStorage2D(s.TEXTURE_2D,_t,zt,te[0].width,te[0].height);for(let $=0,tt=te.length;$<tt;$++)At=te[$],Xt?U&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,At.width,At.height,ft,Vt,At.data):e.texImage2D(s.TEXTURE_2D,$,zt,At.width,At.height,0,ft,Vt,At.data);w.generateMipmaps=!1}else Xt?(ue&&e.texStorage2D(s.TEXTURE_2D,_t,zt,ot.width,ot.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,ft,Vt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,zt,ot.width,ot.height,0,ft,Vt,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,zt,te[0].width,te[0].height,ot.depth);for(let $=0,tt=te.length;$<tt;$++)if(At=te[$],w.format!==Di)if(ft!==null)if(Xt){if(U)if(w.layerUpdates.size>0){let mt=w0(At.width,At.height,w.format,w.type);for(let vt of w.layerUpdates){let qt=At.data.subarray(vt*mt/At.data.BYTES_PER_ELEMENT,(vt+1)*mt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,vt,At.width,At.height,1,ft,qt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,ot.depth,ft,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,zt,At.width,At.height,ot.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,ot.depth,ft,Vt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,zt,At.width,At.height,ot.depth,0,ft,Vt,At.data)}else{Xt&&ue&&e.texStorage2D(s.TEXTURE_2D,_t,zt,te[0].width,te[0].height);for(let $=0,tt=te.length;$<tt;$++)At=te[$],w.format!==Di?ft!==null?Xt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,At.width,At.height,ft,At.data):e.compressedTexImage2D(s.TEXTURE_2D,$,zt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?U&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,At.width,At.height,ft,Vt,At.data):e.texImage2D(s.TEXTURE_2D,$,zt,At.width,At.height,0,ft,Vt,At.data)}else if(w.isDataArrayTexture)if(Xt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,zt,ot.width,ot.height,ot.depth),U)if(w.layerUpdates.size>0){let $=w0(ot.width,ot.height,w.format,w.type);for(let tt of w.layerUpdates){let mt=ot.data.subarray(tt*$/ot.data.BYTES_PER_ELEMENT,(tt+1)*$/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,ft,Vt,mt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ft,Vt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,ot.width,ot.height,ot.depth,0,ft,Vt,ot.data);else if(w.isData3DTexture)Xt?(ue&&e.texStorage3D(s.TEXTURE_3D,_t,zt,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ft,Vt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,zt,ot.width,ot.height,ot.depth,0,ft,Vt,ot.data);else if(w.isFramebufferTexture){if(ue)if(Xt)e.texStorage2D(s.TEXTURE_2D,_t,zt,ot.width,ot.height);else{let $=ot.width,tt=ot.height;for(let mt=0;mt<_t;mt++)e.texImage2D(s.TEXTURE_2D,mt,zt,$,tt,0,ft,Vt,null),$>>=1,tt>>=1}}else if(te.length>0){if(Xt&&ue){let $=St(te[0]);e.texStorage2D(s.TEXTURE_2D,_t,zt,$.width,$.height)}for(let $=0,tt=te.length;$<tt;$++)At=te[$],Xt?U&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,ft,Vt,At):e.texImage2D(s.TEXTURE_2D,$,zt,ft,Vt,At);w.generateMipmaps=!1}else if(Xt){if(ue){let $=St(ot);e.texStorage2D(s.TEXTURE_2D,_t,zt,$.width,$.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Vt,ot)}else e.texImage2D(s.TEXTURE_2D,0,zt,ft,Vt,ot);p(w)&&g(K),pt.__version=J.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function it(R,w,V){if(w.image.length!==6)return;let K=Qt(R,w),j=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);let J=n.get(j);if(j.version!==J.__version||K===!0){e.activeTexture(s.TEXTURE0+V);let pt=de.getPrimaries(de.workingColorSpace),dt=w.colorSpace===Ys?null:de.getPrimaries(w.colorSpace),xt=w.colorSpace===Ys||pt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Zt=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!Zt&&!ot?ft[tt]=_(w.image[tt],!0,i.maxCubemapSize):ft[tt]=ot?w.image[tt].image:w.image[tt],ft[tt]=Ot(w,ft[tt]);let Vt=ft[0],zt=r.convert(w.format,w.colorSpace),At=r.convert(w.type),te=M(w.internalFormat,zt,At,w.colorSpace),Xt=w.isVideoTexture!==!0,ue=J.__version===void 0||K===!0,U=j.dataReady,_t=T(w,Vt);Nt(s.TEXTURE_CUBE_MAP,w);let $;if(Zt){Xt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,te,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){$=ft[tt].mipmaps;for(let mt=0;mt<$.length;mt++){let vt=$[mt];w.format!==Di?zt!==null?Xt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,vt.width,vt.height,zt,vt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,te,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,vt.width,vt.height,zt,At,vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,te,vt.width,vt.height,0,zt,At,vt.data)}}}else{if($=w.mipmaps,Xt&&ue){$.length>0&&_t++;let tt=St(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,te,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,zt,At,ft[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,ft[tt].width,ft[tt].height,0,zt,At,ft[tt].data);for(let mt=0;mt<$.length;mt++){let qt=$[mt].image[tt].image;Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,qt.width,qt.height,zt,At,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,te,qt.width,qt.height,0,zt,At,qt.data)}}else{Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,At,ft[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,zt,At,ft[tt]);for(let mt=0;mt<$.length;mt++){let vt=$[mt];Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,zt,At,vt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,te,zt,At,vt.image[tt])}}}p(w)&&g(s.TEXTURE_CUBE_MAP),J.__version=j.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function bt(R,w,V,K,j,J){let pt=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),xt=M(V.internalFormat,pt,dt,V.colorSpace),Zt=n.get(w),ot=n.get(V);if(ot.__renderTarget=w,!Zt.__hasExternalTextures){let ft=Math.max(1,w.width>>J),Vt=Math.max(1,w.height>>J);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,J,xt,ft,Vt,w.depth,0,pt,dt,null):e.texImage2D(j,J,xt,ft,Vt,0,pt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),B(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,ot.__webglTexture,0,nt(w)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,ot.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(R,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let K=w.depthTexture,j=K&&K.isDepthTexture?K.type:null,J=x(w.stencilBuffer,j),pt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=nt(w);B(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,J,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,R)}else{let K=w.textures;for(let j=0;j<K.length;j++){let J=K[j],pt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),xt=M(J.internalFormat,pt,dt,J.colorSpace),Zt=nt(w);V&&B(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,xt,w.width,w.height):B(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,xt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,xt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let j=K.__webglTexture,J=nt(w);if(w.depthTexture.format===Po)B(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(w.depthTexture.format===Bo)B(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Lt(R){let w=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let j=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),w.__depthDisposeCallback=j}w.__boundDepthTexture=K}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),rt(w.__webglDepthbuffer[K],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),rt(w.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(R,w,V){let K=n.get(R);w!==void 0&&bt(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Lt(R)}function Wt(R){let w=R.texture,V=n.get(R),K=n.get(w);R.addEventListener("dispose",S);let j=R.textures,J=R.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let xt=0;xt<w.mipmaps.length;xt++)V.__webglFramebuffer[dt][xt]=s.createFramebuffer()}else V.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)V.__webglFramebuffer[dt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(pt)for(let dt=0,xt=j.length;dt<xt;dt++){let Zt=n.get(j[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&B(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){let xt=j[dt];V.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);let Zt=r.convert(xt.format,xt.colorSpace),ot=r.convert(xt.type),ft=M(xt.internalFormat,Zt,ot,xt.colorSpace,R.isXRRenderTarget===!0),Vt=nt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,ft,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,w);for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)bt(V.__webglFramebuffer[dt][xt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else bt(V.__webglFramebuffer[dt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(w)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let dt=0,xt=j.length;dt<xt;dt++){let Zt=j[dt],ot=n.get(Zt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),Nt(s.TEXTURE_2D,Zt),bt(V.__webglFramebuffer,R,Zt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),p(Zt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),Nt(dt,w),w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)bt(V.__webglFramebuffer[xt],R,w,s.COLOR_ATTACHMENT0,dt,xt);else bt(V.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,dt,0);p(w)&&g(dt),e.unbindTexture()}R.depthBuffer&&Lt(R)}function et(R){let w=R.textures;for(let V=0,K=w.length;V<K;V++){let j=w[V];if(p(j)){let J=b(R),pt=n.get(j).__webglTexture;e.bindTexture(J,pt),g(J),e.unbindTexture()}}}let Q=[],I=[];function wt(R){if(R.samples>0){if(B(R)===!1){let w=R.textures,V=R.width,K=R.height,j=s.COLOR_BUFFER_BIT,J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(R),dt=w.length>1;if(dt)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let Zt=n.get(w[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,j,s.NEAREST),l===!0&&(Q.length=0,I.length=0,Q.push(s.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(J),I.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let Zt=n.get(w[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function nt(R){return Math.min(i.maxSamples,R.samples)}function B(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Ot(R,w){let V=R.colorSpace,K=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==qo&&V!==Ys&&(de.getTransfer(V)===Se?(K!==Di||j!==Ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function St(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=B}function QE(s,t){function e(n,i=Ys){let r,o=de.getTransfer(i);if(n===Ms)return s.UNSIGNED_BYTE;if(n===$f)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===F0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===N0)return s.BYTE;if(n===O0)return s.SHORT;if(n===ja)return s.UNSIGNED_SHORT;if(n===Yf)return s.INT;if(n===Or)return s.UNSIGNED_INT;if(n===vs)return s.FLOAT;if(n===ll)return s.HALF_FLOAT;if(n===B0)return s.ALPHA;if(n===k0)return s.RGB;if(n===Di)return s.RGBA;if(n===z0)return s.LUMINANCE;if(n===H0)return s.LUMINANCE_ALPHA;if(n===Po)return s.DEPTH_COMPONENT;if(n===Bo)return s.DEPTH_STENCIL;if(n===V0)return s.RED;if(n===Jf)return s.RED_INTEGER;if(n===G0)return s.RG;if(n===Kf)return s.RG_INTEGER;if(n===jf)return s.RGBA_INTEGER;if(n===Pc||n===Ic||n===Lc||n===Dc)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ic)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ld||n===Dd||n===Ud||n===Nd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ld)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ud)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Od||n===Fd||n===Bd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Od||n===Fd)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kd||n===zd||n===Hd||n===Vd||n===Gd||n===Wd||n===Xd||n===qd||n===Yd||n===$d||n===Zd||n===Jd||n===Kd||n===jd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$d)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jd)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Qd||n===tf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uc)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===W0||n===ef||n===nf||n===sf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ef)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yf=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Oe=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tw={type:"move"},$a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&d>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ai,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ji({vertexShader:ew,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mf=class extends Ks{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,m=null,_=new bf,p=e.getContextAttributes(),g=null,b=null,M=[],x=[],T=new gt,E=null,S=new Xn;S.viewport=new Ze;let A=new Xn;A.viewport=new Ze;let v=[S,A],y=new yf,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=M[Z];return it===void 0&&(it=new $a,M[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=M[Z];return it===void 0&&(it=new $a,M[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=M[Z];return it===void 0&&(it=new $a,M[Z]=it),it.getHandSpace()};function O(Z){let it=x.indexOf(Z.inputSource);if(it===-1)return;let bt=M[it];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,c||o),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let Z=0;Z<M.length;Z++){let it=x[Z];it!==null&&(x[Z]=null,M[Z].disconnect(it))}P=null,D=null,_.reset(),t.setRenderTarget(g),u=null,d=null,f=null,i=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ss(u.framebufferWidth,u.framebufferHeight,{format:Di,type:Ms,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,bt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Bo:Po,bt=p.stencil?Fo:Or);let Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ss(d.textureWidth,d.textureHeight,{format:Di,type:Ms,depthTexture:new qc(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let it=0;it<Z.removed.length;it++){let bt=Z.removed[it],rt=x.indexOf(bt);rt>=0&&(x[rt]=null,M[rt].disconnect(bt))}for(let it=0;it<Z.added.length;it++){let bt=Z.added[it],rt=x.indexOf(bt);if(rt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=x.length){x.push(bt),rt=Lt;break}else if(x[Lt]===null){x[Lt]=bt,rt=Lt;break}if(rt===-1)break}let Rt=M[rt];Rt&&Rt.connect(bt)}}let H=new N,Y=new N;function G(Z,it,bt){H.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(bt.matrixWorld);let rt=H.distanceTo(Y),Rt=it.projectionMatrix.elements,Lt=bt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),Wt=Rt[14]/(Rt[10]+1),et=(Rt[9]+1)/Rt[5],Q=(Rt[9]-1)/Rt[5],I=(Rt[8]-1)/Rt[0],wt=(Lt[8]+1)/Lt[0],nt=Ft*I,B=Ft*wt,at=rt/(-I+wt),Ot=at*-I;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let St=Ft+at,R=Wt+at,w=nt-Ot,V=B+(rt-Ot),K=et*Wt/R*St,j=Q*Wt/R*St;Z.projectionMatrix.makePerspective(w,V,K,j,St,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let it=Z.near,bt=Z.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=A.near=S.near=it,y.far=A.far=S.far=bt,(P!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,D=y.far),S.layers.mask=Z.layers.mask|2,A.layers.mask=Z.layers.mask|4,y.layers.mask=S.layers.mask|A.layers.mask;let rt=Z.parent,Rt=y.cameras;st(y,rt);for(let Lt=0;Lt<Rt.length;Lt++)st(Rt[Lt],rt);Rt.length===2?G(y,S,A):y.projectionMatrix.copy(S.projectionMatrix),L(Z,y,rt)};function L(Z,it,bt){bt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ht=null;function Nt(Z,it){if(h=it.getViewerPose(c||o),m=it,h!==null){let bt=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let rt=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Lt=0;Lt<bt.length;Lt++){let Ft=bt[Lt],Wt=null;if(u!==null)Wt=u.getViewport(Ft);else{let Q=f.getViewSubImage(d,Ft);Wt=Q.viewport,Lt===0&&(t.setRenderTargetTextures(b,Q.colorTexture,d.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(b))}let et=v[Lt];et===void 0&&(et=new Xn,et.layers.enable(Lt),et.viewport=new Ze,v[Lt]=et),et.matrix.fromArray(Ft.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ft.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Lt===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(et)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Lt=f.getDepthInformation(bt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,i.renderState)}}for(let bt=0;bt<M.length;bt++){let rt=x[bt],Rt=M[bt];rt!==null&&Rt!==void 0&&Rt.update(rt,it,c||o)}ht&&ht(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Qt=new K0;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(Z){ht=Z},this.dispose=function(){}}},Pr=new Ji,iw=new Je;function sw(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,J0(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,b,M,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&u(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Pn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Pn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=t.get(g),M=b.envMap,x=b.envMapRotation;M&&(p.envMap.value=M,Pr.copy(x),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),p.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(Pr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let b=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rw(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let x=M.program;n.uniformBlockBinding(b,x)}function c(b,M){let x=i[b.id];x===void 0&&(m(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",p));let T=M.program;n.updateUBOMapping(b,T);let E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){let M=f();b.__bindingPointIndex=M;let x=s.createBuffer(),T=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=i[b.id],x=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,S=x.length;E<S;E++){let A=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,y=A.length;v<y;v++){let P=A[v];if(u(P,E,v,T)===!0){let D=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],z=0;for(let q=0;q<O.length;q++){let H=O[q],Y=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,D+z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(b,M,x,T){let E=b.value,S=M+"_"+x;if(T[S]===void 0)return typeof E=="number"||typeof E=="boolean"?T[S]=E:T[S]=E.clone(),!0;{let A=T[S];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return T[S]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function m(b){let M=b.uniforms,x=0,T=16;for(let S=0,A=M.length;S<A;S++){let v=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,P=v.length;y<P;y++){let D=v[y],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,q=O.length;z<q;z++){let H=O[z],Y=_(H),G=x%T,st=G%Y.boundary,L=G+st;x+=st,L!==0&&T-L<Y.storage&&(x+=T-L),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=Y.storage}}}let E=x%T;return E>0&&(x+=T-E),b.__size=x,b.__cache={},this}function _(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){let M=b.target;M.removeEventListener("dispose",p);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}var Yc=class{constructor(t={}){let{canvas:e=cb(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),_=new Int32Array(4),p=null,g=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Zs,this.toneMappingExposure=1;let x=this,T=!1,E=0,S=0,A=null,v=-1,y=null,P=new Ze,D=new Ze,O=null,z=new ie(0),q=0,H=e.width,Y=e.height,G=1,st=null,L=null,ht=new Ze(0,0,H,Y),Nt=new Ze(0,0,H,Y),Qt=!1,Z=new el,it=!1,bt=!1,rt=new Je,Rt=new Je,Lt=new N,Ft=new Ze,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Q(){return A===null?G:1}let I=n;function wt(C,F){return e.getContext(C,F)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wf}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),I===null){let F="webgl2";if(I=wt(F,C),I===null)throw wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,B,at,Ot,St,R,w,V,K,j,J,pt,dt,xt,Zt,ot,ft,Vt,zt,At,te,Xt,ue,U;function _t(){nt=new b1(I),nt.init(),Xt=new QE(I,nt),B=new m1(I,nt,t,Xt),at=new JE(I,nt),B.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Ot=new E1(I),St=new FE,R=new jE(I,nt,at,St,B,Xt,Ot),w=new _1(x),V=new y1(x),K=new Ib(I),ue=new f1(I,K),j=new M1(I,K,Ot,ue),J=new T1(I,j,K,Ot),zt=new w1(I,B,R),ot=new g1(St),pt=new OE(x,w,V,nt,B,ue,ot),dt=new sw(x,St),xt=new kE,Zt=new XE(nt),Vt=new d1(x,w,V,at,J,u,l),ft=new $E(x,J,B),U=new rw(I,Ot,B,at),At=new p1(I,nt,Ot),te=new S1(I,nt,Ot),Ot.programs=pt.programs,x.capabilities=B,x.extensions=nt,x.properties=St,x.renderLists=xt,x.shadowMap=ft,x.state=at,x.info=Ot}_t();let $=new Mf(x,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(H,Y,!1))},this.getSize=function(C){return C.set(H,Y)},this.setSize=function(C,F,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Y=F,e.width=Math.floor(C*G),e.height=Math.floor(F*G),W===!0&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(H*G,Y*G).floor()},this.setDrawingBufferSize=function(C,F,W){H=C,Y=F,G=W,e.width=Math.floor(C*W),e.height=Math.floor(F*W),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ht)},this.setViewport=function(C,F,W,X){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,F,W,X),at.viewport(P.copy(ht).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,F,W,X){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,F,W,X),at.scissor(D.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(C){at.setScissorTest(Qt=C)},this.setOpaqueSort=function(C){st=C},this.setTransparentSort=function(C){L=C},this.getClearColor=function(C){return C.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(C=!0,F=!0,W=!0){let X=0;if(C){let k=!1;if(A!==null){let ct=A.texture.format;k=ct===jf||ct===Kf||ct===Jf}if(k){let ct=A.texture.type,ut=ct===Ms||ct===Or||ct===ja||ct===Fo||ct===$f||ct===Zf,yt=Vt.getClearColor(),Ct=Vt.getClearAlpha(),Yt=yt.r,Kt=yt.g,It=yt.b;ut?(m[0]=Yt,m[1]=Kt,m[2]=It,m[3]=Ct,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Yt,_[1]=Kt,_[2]=It,_[3]=Ct,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}F&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),xt.dispose(),Zt.dispose(),St.dispose(),w.dispose(),V.dispose(),J.dispose(),ue.dispose(),U.dispose(),pt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Mt),$.removeEventListener("sessionend",Jt),Ut.stop()};function tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let C=Ot.autoReset,F=ft.enabled,W=ft.autoUpdate,X=ft.needsUpdate,k=ft.type;_t(),Ot.autoReset=C,ft.enabled=F,ft.autoUpdate=W,ft.needsUpdate=X,ft.type=k}function vt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qt(C){let F=C.target;F.removeEventListener("dispose",qt),pe(F)}function pe(C){Xe(C),St.remove(C)}function Xe(C){let F=St.get(C).programs;F!==void 0&&(F.forEach(function(W){pt.releaseProgram(W)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,W,X,k,ct){F===null&&(F=Wt);let ut=k.isMesh&&k.matrixWorld.determinant()<0,yt=jn(C,F,W,X,k);at.setMaterial(X,ut);let Ct=W.index,Yt=1;if(X.wireframe===!0){if(Ct=j.getWireframeAttribute(W),Ct===void 0)return;Yt=2}let Kt=W.drawRange,It=W.attributes.position,jt=Kt.start*Yt,me=(Kt.start+Kt.count)*Yt;ct!==null&&(jt=Math.max(jt,ct.start*Yt),me=Math.min(me,(ct.start+ct.count)*Yt)),Ct!==null?(jt=Math.max(jt,0),me=Math.min(me,Ct.count)):It!=null&&(jt=Math.max(jt,0),me=Math.min(me,It.count));let _e=me-jt;if(_e<0||_e===1/0)return;ue.setup(k,X,yt,W,Ct);let tn,xe=At;if(Ct!==null&&(tn=K.get(Ct),xe=te,xe.setIndex(tn)),k.isMesh)X.wireframe===!0?(at.setLineWidth(X.wireframeLinewidth*Q()),xe.setMode(I.LINES)):xe.setMode(I.TRIANGLES);else if(k.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),at.setLineWidth(Bt*Q()),k.isLineSegments?xe.setMode(I.LINES):k.isLineLoop?xe.setMode(I.LINE_LOOP):xe.setMode(I.LINE_STRIP)}else k.isPoints?xe.setMode(I.POINTS):k.isSprite&&xe.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Bt=k._multiDrawStarts,ts=k._multiDrawCounts,ve=k._multiDrawCount,Ti=Ct?K.get(Ct).bytesPerElement:1,Xr=St.get(X).currentProgram.getUniforms();for(let Qn=0;Qn<ve;Qn++)Xr.setValue(I,"_gl_DrawID",Qn),xe.render(Bt[Qn]/Ti,ts[Qn])}else if(k.isInstancedMesh)xe.renderInstances(jt,_e,k.count);else if(W.isInstancedBufferGeometry){let Bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ts=Math.min(W.instanceCount,Bt);xe.renderInstances(jt,_e,ts)}else xe.render(jt,_e)};function Tt(C,F,W){C.transparent===!0&&C.side===vi&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Ee(C,F,W),C.side=Js,C.needsUpdate=!0,Ee(C,F,W),C.side=vi):Ee(C,F,W)}this.compile=function(C,F,W=null){W===null&&(W=C),g=Zt.get(W),g.init(F),M.push(g),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),C!==W&&C.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();let X=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ct=k.material;if(ct)if(Array.isArray(ct))for(let ut=0;ut<ct.length;ut++){let yt=ct[ut];Tt(yt,W,k),X.add(yt)}else Tt(ct,W,k),X.add(ct)}),M.pop(),g=null,X},this.compileAsync=function(C,F,W=null){let X=this.compile(C,F,W);return new Promise(k=>{function ct(){if(X.forEach(function(ut){St.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){k(C);return}setTimeout(ct,10)}nt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Dt=null;function ee(C){Dt&&Dt(C)}function Mt(){Ut.stop()}function Jt(){Ut.start()}let Ut=new K0;Ut.setAnimationLoop(ee),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(C){Dt=C,$.setAnimationLoop(C),C===null?Ut.stop():Ut.start()},$.addEventListener("sessionstart",Mt),$.addEventListener("sessionend",Jt),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,F,A),g=Zt.get(C,M.length),g.init(F),M.push(g),Rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),bt=this.localClippingEnabled,it=ot.init(this.clippingPlanes,bt),p=xt.get(C,b.length),p.init(),b.push(p),$.enabled===!0&&$.isPresenting===!0){let ct=x.xr.getDepthSensingMesh();ct!==null&&$t(ct,F,-1/0,x.sortObjects)}$t(C,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(st,L),et=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,et&&Vt.addToRenderList(p,C),this.info.render.frame++,it===!0&&ot.beginShadows();let W=g.state.shadowsArray;ft.render(W,C,F),it===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,k=p.transmissive;if(g.setupLights(),F.isArrayCamera){let ct=F.cameras;if(k.length>0)for(let ut=0,yt=ct.length;ut<yt;ut++){let Ct=ct[ut];re(X,k,C,Ct)}et&&Vt.render(C);for(let ut=0,yt=ct.length;ut<yt;ut++){let Ct=ct[ut];Ke(p,C,Ct,Ct.viewport)}}else k.length>0&&re(X,k,C,F),et&&Vt.render(C),Ke(p,C,F);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,F),ue.resetDefaultState(),v=-1,y=null,M.pop(),M.length>0?(g=M[M.length-1],it===!0&&ot.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function $t(C,F,W,X){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){X&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);let ut=J.update(C),yt=C.material;yt.visible&&p.push(C,ut,yt,W,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){let ut=J.update(C),yt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ft.copy(ut.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(yt)){let Ct=ut.groups;for(let Yt=0,Kt=Ct.length;Yt<Kt;Yt++){let It=Ct[Yt],jt=yt[It.materialIndex];jt&&jt.visible&&p.push(C,ut,jt,W,Ft.z,It)}}else yt.visible&&p.push(C,ut,yt,W,Ft.z,null)}}let ct=C.children;for(let ut=0,yt=ct.length;ut<yt;ut++)$t(ct[ut],F,W,X)}function Ke(C,F,W,X){let k=C.opaque,ct=C.transmissive,ut=C.transparent;g.setupLightsView(W),it===!0&&ot.setGlobalState(x.clippingPlanes,W),X&&at.viewport(P.copy(X)),k.length>0&&Pe(k,F,W),ct.length>0&&Pe(ct,F,W),ut.length>0&&Pe(ut,F,W),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function re(C,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new Ss(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ll:Ms,minFilter:Nr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let ct=g.state.transmissionRenderTarget[X.id],ut=X.viewport||P;ct.setSize(ut.z,ut.w);let yt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),et&&Vt.render(W);let Ct=x.toneMapping;x.toneMapping=Zs;let Yt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),it===!0&&ot.setGlobalState(x.clippingPlanes,X),Pe(C,W,X),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let It=0,jt=F.length;It<jt;It++){let me=F[It],_e=me.object,tn=me.geometry,xe=me.material,Bt=me.group;if(xe.side===vi&&_e.layers.test(X.layers)){let ts=xe.side;xe.side=Pn,xe.needsUpdate=!0,on(_e,W,X,tn,xe,Bt),xe.side=ts,xe.needsUpdate=!0,Kt=!0}}Kt===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct))}x.setRenderTarget(yt),x.setClearColor(z,q),Yt!==void 0&&(X.viewport=Yt),x.toneMapping=Ct}function Pe(C,F,W){let X=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ct=C.length;k<ct;k++){let ut=C[k],yt=ut.object,Ct=ut.geometry,Yt=X===null?ut.material:X,Kt=ut.group;yt.layers.test(W.layers)&&on(yt,F,W,Ct,Yt,Kt)}}function on(C,F,W,X,k,ct){C.onBeforeRender(x,F,W,X,k,ct),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(x,F,W,X,C,ct),k.transparent===!0&&k.side===vi&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,x.renderBufferDirect(W,F,X,k,C,ct),k.side=Js,k.needsUpdate=!0,x.renderBufferDirect(W,F,X,k,C,ct),k.side=vi):x.renderBufferDirect(W,F,X,k,C,ct),C.onAfterRender(x,F,W,X,k,ct)}function Ee(C,F,W){F.isScene!==!0&&(F=Wt);let X=St.get(C),k=g.state.lights,ct=g.state.shadowsArray,ut=k.state.version,yt=pt.getParameters(C,k.state,ct,F,W),Ct=pt.getProgramCacheKey(yt),Yt=X.programs;X.environment=C.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(C.isMeshStandardMaterial?V:w).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",qt),Yt=new Map,X.programs=Yt);let Kt=Yt.get(Ct);if(Kt!==void 0){if(X.currentProgram===Kt&&X.lightsStateVersion===ut)return ge(C,yt),Kt}else yt.uniforms=pt.getUniforms(C),C.onBeforeCompile(yt,x),Kt=pt.acquireProgram(yt,Ct),Yt.set(Ct,Kt),X.uniforms=yt.uniforms;let It=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=ot.uniform),ge(C,yt),X.needsLights=Ln(C),X.lightsStateVersion=ut,X.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Kt,X.uniformsList=null,Kt}function we(C){if(C.uniformsList===null){let F=C.currentProgram.getUniforms();C.uniformsList=Lo.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function ge(C,F){let W=St.get(C);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function jn(C,F,W,X,k){F.isScene!==!0&&(F=Wt),R.resetTextureUnits();let ct=F.fog,ut=X.isMeshStandardMaterial?F.environment:null,yt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qo,Ct=(X.isMeshStandardMaterial?V:w).get(X.envMap||ut),Yt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,me=!!W.morphAttributes.color,_e=Zs;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=x.toneMapping);let tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=tn!==void 0?tn.length:0,Bt=St.get(X),ts=g.state.lights;if(it===!0&&(bt===!0||C!==y)){let hi=C===y&&X.id===v;ot.setState(X,C,hi)}let ve=!1;X.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ts.state.version||Bt.outputColorSpace!==yt||k.isBatchedMesh&&Bt.batching===!1||!k.isBatchedMesh&&Bt.batching===!0||k.isBatchedMesh&&Bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Bt.instancing===!1||!k.isInstancedMesh&&Bt.instancing===!0||k.isSkinnedMesh&&Bt.skinning===!1||!k.isSkinnedMesh&&Bt.skinning===!0||k.isInstancedMesh&&Bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Bt.instancingMorph===!1&&k.morphTexture!==null||Bt.envMap!==Ct||X.fog===!0&&Bt.fog!==ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ot.numPlanes||Bt.numIntersection!==ot.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==Kt||Bt.morphTargets!==It||Bt.morphNormals!==jt||Bt.morphColors!==me||Bt.toneMapping!==_e||Bt.morphTargetsCount!==xe)&&(ve=!0):(ve=!0,Bt.__version=X.version);let Ti=Bt.currentProgram;ve===!0&&(Ti=Ee(X,F,k));let Xr=!1,Qn=!1,aa=!1,Ue=Ti.getUniforms(),zi=Bt.uniforms;if(at.useProgram(Ti.program)&&(Xr=!0,Qn=!0,aa=!0),X.id!==v&&(v=X.id,Qn=!0),Xr||y!==C){at.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),ub(rt),db(rt),Ue.setValue(I,"projectionMatrix",rt)):Ue.setValue(I,"projectionMatrix",C.projectionMatrix),Ue.setValue(I,"viewMatrix",C.matrixWorldInverse);let As=Ue.map.cameraPosition;As!==void 0&&As.setValue(I,Lt.setFromMatrixPosition(C.matrixWorld)),B.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Qn=!0,aa=!0)}if(k.isSkinnedMesh){Ue.setOptional(I,k,"bindMatrix"),Ue.setOptional(I,k,"bindMatrixInverse");let hi=k.skeleton;hi&&(hi.boneTexture===null&&hi.computeBoneTexture(),Ue.setValue(I,"boneTexture",hi.boneTexture,R))}k.isBatchedMesh&&(Ue.setOptional(I,k,"batchingTexture"),Ue.setValue(I,"batchingTexture",k._matricesTexture,R),Ue.setOptional(I,k,"batchingIdTexture"),Ue.setValue(I,"batchingIdTexture",k._indirectTexture,R),Ue.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Ue.setValue(I,"batchingColorTexture",k._colorsTexture,R));let la=W.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&zt.update(k,W,Ti),(Qn||Bt.receiveShadow!==k.receiveShadow)&&(Bt.receiveShadow=k.receiveShadow,Ue.setValue(I,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zi.envMap.value=Ct,zi.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(zi.envMapIntensity.value=F.environmentIntensity),Qn&&(Ue.setValue(I,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&De(zi,aa),ct&&X.fog===!0&&dt.refreshFogUniforms(zi,ct),dt.refreshMaterialUniforms(zi,X,G,Y,g.state.transmissionRenderTarget[C.id]),Lo.upload(I,we(Bt),zi,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lo.upload(I,we(Bt),zi,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ue.setValue(I,"center",k.center),Ue.setValue(I,"modelViewMatrix",k.modelViewMatrix),Ue.setValue(I,"normalMatrix",k.normalMatrix),Ue.setValue(I,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let hi=X.uniformsGroups;for(let As=0,Cs=hi.length;As<Cs;As++){let Ep=hi[As];U.update(Ep,Ti),U.bind(Ep,Ti)}}return Ti}function De(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function Ln(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,F,W){St.get(C.texture).__webglTexture=F,St.get(C.depthTexture).__webglTexture=W;let X=St.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){let W=St.get(C);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,W=0){A=C,E=F,S=W;let X=!0,k=null,ct=!1,ut=!1;if(C){let Ct=St.get(C);if(Ct.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Ct.__hasExternalTextures)R.rebindTextures(C,St.get(C.texture).__webglTexture,St.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let It=C.depthTexture;if(Ct.__boundDepthTexture!==It){if(It!==null&&St.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}let Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(ut=!0);let Kt=St.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Kt[F])?k=Kt[F][W]:k=Kt[F],ct=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?k=St.get(C).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[W]:k=Kt,P.copy(C.viewport),D.copy(C.scissor),O=C.scissorTest}else P.copy(ht).multiplyScalar(G).floor(),D.copy(Nt).multiplyScalar(G).floor(),O=Qt;if(at.bindFramebuffer(I.FRAMEBUFFER,k)&&X&&at.drawBuffers(C,k),at.viewport(P),at.scissor(D),at.setScissorTest(O),ct){let Ct=St.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,W)}else if(ut){let Ct=St.get(C.texture),Yt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,Yt)}v=-1},this.readRenderTargetPixels=function(C,F,W,X,k,ct,ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){at.bindFramebuffer(I.FRAMEBUFFER,yt);try{let Ct=C.texture,Yt=Ct.format,Kt=Ct.type;if(!B.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-X&&W>=0&&W<=C.height-k&&I.readPixels(F,W,X,k,Xt.convert(Yt),Xt.convert(Kt),ct)}finally{let Ct=A!==null?St.get(A).__webglFramebuffer:null;at.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(C,F,W,X,k,ct,ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){let Ct=C.texture,Yt=Ct.format,Kt=Ct.type;if(!B.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-X&&W>=0&&W<=C.height-k){at.bindFramebuffer(I.FRAMEBUFFER,yt);let It=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.bufferData(I.PIXEL_PACK_BUFFER,ct.byteLength,I.STREAM_READ),I.readPixels(F,W,X,k,Xt.convert(Yt),Xt.convert(Kt),0);let jt=A!==null?St.get(A).__webglFramebuffer:null;at.bindFramebuffer(I.FRAMEBUFFER,jt);let me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hb(I,me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ct),I.deleteBuffer(It),I.deleteSync(me),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,F=null,W=0){C.isTexture!==!0&&(Wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);let X=Math.pow(2,-W),k=Math.floor(C.image.width*X),ct=Math.floor(C.image.height*X),ut=F!==null?F.x:0,yt=F!==null?F.y:0;R.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ut,yt,k,ct),at.unbindTexture()},this.copyTextureToTexture=function(C,F,W=null,X=null,k=0){C.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],F=arguments[2],k=arguments[3]||0,W=null);let ct,ut,yt,Ct,Yt,Kt,It,jt,me,_e=C.isCompressedTexture?C.mipmaps[k]:C.image;W!==null?(ct=W.max.x-W.min.x,ut=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Yt=W.min.y,Kt=W.isBox3?W.min.z:0):(ct=_e.width,ut=_e.height,yt=_e.depth||1,Ct=0,Yt=0,Kt=0),X!==null?(It=X.x,jt=X.y,me=X.z):(It=0,jt=0,me=0);let tn=Xt.convert(F.format),xe=Xt.convert(F.type),Bt;F.isData3DTexture?(R.setTexture3D(F,0),Bt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Bt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Bt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let ts=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ti=I.getParameter(I.UNPACK_SKIP_PIXELS),Xr=I.getParameter(I.UNPACK_SKIP_ROWS),Qn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);let aa=C.isDataArrayTexture||C.isData3DTexture,Ue=F.isDataArrayTexture||F.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let zi=St.get(C),la=St.get(F),hi=St.get(zi.__renderTarget),As=St.get(la.__renderTarget);at.bindFramebuffer(I.READ_FRAMEBUFFER,hi.__webglFramebuffer),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Cs=0;Cs<yt;Cs++)aa&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(C).__webglTexture,k,Kt+Cs),C.isDepthTexture?(Ue&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(F).__webglTexture,k,me+Cs),I.blitFramebuffer(Ct,Yt,ct,ut,It,jt,ct,ut,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ue?I.copyTexSubImage3D(Bt,k,It,jt,me+Cs,Ct,Yt,ct,ut):I.copyTexSubImage2D(Bt,k,It,jt,me+Cs,Ct,Yt,ct,ut);at.bindFramebuffer(I.READ_FRAMEBUFFER,null),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ue?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Bt,k,It,jt,me,ct,ut,yt,tn,xe,_e.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Bt,k,It,jt,me,ct,ut,yt,tn,_e.data):I.texSubImage3D(Bt,k,It,jt,me,ct,ut,yt,tn,xe,_e):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,It,jt,ct,ut,tn,xe,_e.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,It,jt,_e.width,_e.height,tn,_e.data):I.texSubImage2D(I.TEXTURE_2D,k,It,jt,ct,ut,tn,xe,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,ts),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ti),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qn),k===0&&F.generateMipmaps&&I.generateMipmap(Bt),at.unbindTexture()},this.copyTextureToTexture3D=function(C,F,W=null,X=null,k=0){return C.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],F=arguments[3],k=arguments[4]||0),Wa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,F,W,X,k)},this.initRenderTarget=function(C){St.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){E=0,S=0,A=null,at.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var nl=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var $c=class extends ai{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new gt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,i=[],r=[],o=[],a=new N,l=new Je;for(let u=0;u<=t;u++){let m=u/t;i[u]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(cn(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(cn(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},il=class extends bi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sf=class extends il{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ep(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Tc=new N,gd=new ep,_d=new ep,xd=new ep,Ef=class extends bi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Tc.subVectors(i[0],i[1]).add(i[0]),c=Tc);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Tc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),gd.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,_,p),_d.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,_,p),xd.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(gd.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),_d.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),xd.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(gd.calc(l),_d.calc(l),xd.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function T0(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function ow(s,t){let e=1-s;return e*e*t}function aw(s,t){return 2*(1-s)*s*t}function lw(s,t){return s*s*t}function Za(s,t,e,n){return ow(s,t)+aw(s,e)+lw(s,n)}function cw(s,t){let e=1-s;return e*e*e*t}function hw(s,t){let e=1-s;return 3*e*e*s*t}function uw(s,t){return 3*(1-s)*s*s*t}function dw(s,t){return s*s*s*t}function Ja(s,t,e,n,i){return cw(s,t)+hw(s,e)+uw(s,n)+dw(s,i)}var Zc=class extends bi{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ja(t,i.x,r.x,o.x,a.x),Ja(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wf=class extends bi{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ja(t,i.x,r.x,o.x,a.x),Ja(t,i.y,r.y,o.y,a.y),Ja(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jc=class extends bi{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tf=class extends bi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends bi{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Za(t,i.x,r.x,o.x),Za(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Af=class extends bi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Za(t,i.x,r.x,o.x),Za(t,i.y,r.y,o.y),Za(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(T0(a,l.x,c.x,h.x,f.x),T0(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new gt().fromArray(i))}return this}},Cf=Object.freeze({__proto__:null,ArcCurve:Sf,CatmullRomCurve3:Ef,CubicBezierCurve:Zc,CubicBezierCurve3:wf,EllipseCurve:il,LineCurve:Jc,LineCurve3:Tf,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:Af,SplineCurve:jc}),Rf=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Cf[i.type]().fromJSON(i))}return this}},Ho=class extends Rf{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Jc(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Kc(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Zc(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new il(t,e,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qc=class s extends In{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=cn(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new N,d=new gt,u=new N,m=new N,_=new N,p=0,g=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,u.x=g*1,u.y=-p,u.z=g*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,u.x=g*1,u.y=-p,u.z=g*0,m.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(m)}for(let b=0;b<=e;b++){let M=n+b*h*i,x=Math.sin(M),T=Math.cos(M);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*x,f.y=t[E].y,f.z=t[E].x*T,o.push(f.x,f.y,f.z),d.x=b/e,d.y=E/(t.length-1),a.push(d.x,d.y);let S=l[3*E+0]*x,A=l[3*E+1],v=l[3*E+0]*T;c.push(S,A,v)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){let x=M+b*t.length,T=x,E=x+t.length,S=x+t.length+1,A=x+1;r.push(T,E,A),r.push(S,A,E)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var sl=class s extends In{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qi=class s extends In{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],m=0,_=[],p=n/2,g=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(u,2));function b(){let x=new N,T=new N,E=0,S=(e-t)/n;for(let A=0;A<=r;A++){let v=[],y=A/r,P=y*(e-t)+t;for(let D=0;D<=i;D++){let O=D/i,z=O*l+a,q=Math.sin(z),H=Math.cos(z);T.x=P*q,T.y=-y*n+p,T.z=P*H,f.push(T.x,T.y,T.z),x.set(q,S,H).normalize(),d.push(x.x,x.y,x.z),u.push(O,1-y),v.push(m++)}_.push(v)}for(let A=0;A<i;A++)for(let v=0;v<r;v++){let y=_[v][A],P=_[v+1][A],D=_[v+1][A+1],O=_[v][A+1];(t>0||v!==0)&&(h.push(y,P,O),E+=3),(e>0||v!==r-1)&&(h.push(P,D,O),E+=3)}c.addGroup(g,E,0),g+=E}function M(x){let T=m,E=new gt,S=new N,A=0,v=x===!0?t:e,y=x===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,p*y,0),d.push(0,y,0),u.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let z=D/i*l+a,q=Math.cos(z),H=Math.sin(z);S.x=v*H,S.y=p*y,S.z=v*q,f.push(S.x,S.y,S.z),d.push(0,y,0),E.x=q*.5+.5,E.y=H*.5*y+.5,u.push(E.x,E.y),m++}for(let D=0;D<i;D++){let O=T+D,z=P+D;x===!0?h.push(z,z+1,O):h.push(z+1,z,O),A+=3}c.addGroup(g,A,x===!0?1:2),g+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qs=class extends Ho{constructor(t){super(t),this.uuid=Gr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ho().fromJSON(i))}return this}},fw={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=n_(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,d,u;if(n&&(r=xw(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)f=s[m],d=s[m+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return rl(r,o,e,a,l,u,0),o}};function n_(s,t,e,n,i){let r,o;if(i===Rw(s,t,e,n)>0)for(r=t;r<e;r+=n)o=A0(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=A0(r,s[r],s[r+1],o);return o&&oh(o,o.next)&&(al(o),o=o.next),o}function kr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(oh(e,e.next)||We(e.prev,e,e.next)===0)){if(al(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Sw(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?mw(s,n,i,r):pw(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),al(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=gw(kr(s),t,e),rl(s,t,e,n,i,r,2)):o===2&&_w(s,t,e,n,i,r):rl(kr(s),t,e,n,i,r,1);break}}}function pw(s){let t=s.prev,e=s,n=s.next;if(We(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=f&&m.y<=u&&Co(i,a,r,l,o,c,m.x,m.y)&&We(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mw(s,t,e,n){let i=s.prev,r=s,o=s.next;if(We(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,m=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,g=Pf(u,m,t,e,n),b=Pf(_,p,t,e,n),M=s.prevZ,x=s.nextZ;for(;M&&M.z>=g&&x&&x.z<=b;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=p&&M!==i&&M!==o&&Co(a,h,l,f,c,d,M.x,M.y)&&We(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=u&&x.x<=_&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&Co(a,h,l,f,c,d,x.x,x.y)&&We(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=p&&M!==i&&M!==o&&Co(a,h,l,f,c,d,M.x,M.y)&&We(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=b;){if(x.x>=u&&x.x<=_&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&Co(a,h,l,f,c,d,x.x,x.y)&&We(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gw(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!oh(i,r)&&i_(i,n,n.next,r)&&ol(i,r)&&ol(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),al(n),al(n.next),n=s=r),n=n.next}while(n!==s);return kr(n)}function _w(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tw(o,a)){let l=s_(o,a);o=kr(o,o.next),l=kr(l,l.next),rl(o,t,e,n,i,r,0),rl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function xw(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=n_(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ww(c));for(i.sort(vw),r=0;r<i.length;r++)e=yw(i[r],e);return e}function vw(s,t){return s.x-t.x}function yw(s,t){let e=bw(s,t);if(!e)return t;let n=s_(e,s);return kr(n,n.next),kr(e,e.next)}function bw(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,f;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Co(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),ol(e,s)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&Mw(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function Mw(s,t){return We(s.prev,s,t.prev)<0&&We(t.next,s,s.next)<0}function Sw(s,t,e,n){let i=s;do i.z===0&&(i.z=Pf(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ew(i)}function Ew(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Pf(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ww(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Co(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Tw(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Aw(s,t)&&(ol(s,t)&&ol(t,s)&&Cw(s,t)&&(We(s.prev,s,t.prev)||We(s,t.prev,t))||oh(s,t)&&We(s.prev,s,s.next)>0&&We(t.prev,t,t.next)>0)}function We(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function oh(s,t){return s.x===t.x&&s.y===t.y}function i_(s,t,e,n){let i=Cc(We(s,t,e)),r=Cc(We(s,t,n)),o=Cc(We(e,n,s)),a=Cc(We(e,n,t));return!!(i!==r&&o!==a||i===0&&Ac(s,e,t)||r===0&&Ac(s,n,t)||o===0&&Ac(e,s,n)||a===0&&Ac(e,t,n))}function Ac(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Cc(s){return s>0?1:s<0?-1:0}function Aw(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&i_(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ol(s,t){return We(s.prev,s,s.next)<0?We(s,t,s.next)>=0&&We(s,s.prev,t)>=0:We(s,t,s.prev)<0||We(s,s.next,t)<0}function Cw(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function s_(s,t){let e=new If(s.i,s.x,s.y),n=new If(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function A0(s,t,e,n){let i=new If(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function al(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function If(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rw(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ka=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];C0(t),R0(n,t);let o=t.length;e.forEach(C0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,R0(n,e[l]);let a=fw.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function C0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function R0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Vo=class s extends In{constructor(t=new Qs([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Pw,M,x=!1,T,E,S,A;g&&(M=g.getSpacedPoints(h),x=!0,d=!1,T=g.computeFrenetFrames(h,!1),E=new N,S=new N,A=new N),d||(p=0,u=0,m=0,_=0);let v=a.extractPoints(c),y=v.shape,P=v.holes;if(!Ka.isClockWise(y)){y=y.reverse();for(let et=0,Q=P.length;et<Q;et++){let I=P[et];Ka.isClockWise(I)&&(P[et]=I.reverse())}}let O=Ka.triangulateShape(y,P),z=y;for(let et=0,Q=P.length;et<Q;et++){let I=P[et];y=y.concat(I)}function q(et,Q,I){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(Q,I)}let H=y.length,Y=O.length;function G(et,Q,I){let wt,nt,B,at=et.x-Q.x,Ot=et.y-Q.y,St=I.x-et.x,R=I.y-et.y,w=at*at+Ot*Ot,V=at*R-Ot*St;if(Math.abs(V)>Number.EPSILON){let K=Math.sqrt(w),j=Math.sqrt(St*St+R*R),J=Q.x-Ot/K,pt=Q.y+at/K,dt=I.x-R/j,xt=I.y+St/j,Zt=((dt-J)*R-(xt-pt)*St)/(at*R-Ot*St);wt=J+at*Zt-et.x,nt=pt+Ot*Zt-et.y;let ot=wt*wt+nt*nt;if(ot<=2)return new gt(wt,nt);B=Math.sqrt(ot/2)}else{let K=!1;at>Number.EPSILON?St>Number.EPSILON&&(K=!0):at<-Number.EPSILON?St<-Number.EPSILON&&(K=!0):Math.sign(Ot)===Math.sign(R)&&(K=!0),K?(wt=-Ot,nt=at,B=Math.sqrt(w)):(wt=at,nt=Ot,B=Math.sqrt(w/2))}return new gt(wt/B,nt/B)}let st=[];for(let et=0,Q=z.length,I=Q-1,wt=et+1;et<Q;et++,I++,wt++)I===Q&&(I=0),wt===Q&&(wt=0),st[et]=G(z[et],z[I],z[wt]);let L=[],ht,Nt=st.concat();for(let et=0,Q=P.length;et<Q;et++){let I=P[et];ht=[];for(let wt=0,nt=I.length,B=nt-1,at=wt+1;wt<nt;wt++,B++,at++)B===nt&&(B=0),at===nt&&(at=0),ht[wt]=G(I[wt],I[B],I[at]);L.push(ht),Nt=Nt.concat(ht)}for(let et=0;et<p;et++){let Q=et/p,I=u*Math.cos(Q*Math.PI/2),wt=m*Math.sin(Q*Math.PI/2)+_;for(let nt=0,B=z.length;nt<B;nt++){let at=q(z[nt],st[nt],wt);rt(at.x,at.y,-I)}for(let nt=0,B=P.length;nt<B;nt++){let at=P[nt];ht=L[nt];for(let Ot=0,St=at.length;Ot<St;Ot++){let R=q(at[Ot],ht[Ot],wt);rt(R.x,R.y,-I)}}}let Qt=m+_;for(let et=0;et<H;et++){let Q=d?q(y[et],Nt[et],Qt):y[et];x?(S.copy(T.normals[0]).multiplyScalar(Q.x),E.copy(T.binormals[0]).multiplyScalar(Q.y),A.copy(M[0]).add(S).add(E),rt(A.x,A.y,A.z)):rt(Q.x,Q.y,0)}for(let et=1;et<=h;et++)for(let Q=0;Q<H;Q++){let I=d?q(y[Q],Nt[Q],Qt):y[Q];x?(S.copy(T.normals[et]).multiplyScalar(I.x),E.copy(T.binormals[et]).multiplyScalar(I.y),A.copy(M[et]).add(S).add(E),rt(A.x,A.y,A.z)):rt(I.x,I.y,f/h*et)}for(let et=p-1;et>=0;et--){let Q=et/p,I=u*Math.cos(Q*Math.PI/2),wt=m*Math.sin(Q*Math.PI/2)+_;for(let nt=0,B=z.length;nt<B;nt++){let at=q(z[nt],st[nt],wt);rt(at.x,at.y,f+I)}for(let nt=0,B=P.length;nt<B;nt++){let at=P[nt];ht=L[nt];for(let Ot=0,St=at.length;Ot<St;Ot++){let R=q(at[Ot],ht[Ot],wt);x?rt(R.x,R.y+M[h-1].y,M[h-1].x+I):rt(R.x,R.y,f+I)}}}Z(),it();function Z(){let et=i.length/3;if(d){let Q=0,I=H*Q;for(let wt=0;wt<Y;wt++){let nt=O[wt];Rt(nt[2]+I,nt[1]+I,nt[0]+I)}Q=h+p*2,I=H*Q;for(let wt=0;wt<Y;wt++){let nt=O[wt];Rt(nt[0]+I,nt[1]+I,nt[2]+I)}}else{for(let Q=0;Q<Y;Q++){let I=O[Q];Rt(I[2],I[1],I[0])}for(let Q=0;Q<Y;Q++){let I=O[Q];Rt(I[0]+H*h,I[1]+H*h,I[2]+H*h)}}n.addGroup(et,i.length/3-et,0)}function it(){let et=i.length/3,Q=0;bt(z,Q),Q+=z.length;for(let I=0,wt=P.length;I<wt;I++){let nt=P[I];bt(nt,Q),Q+=nt.length}n.addGroup(et,i.length/3-et,1)}function bt(et,Q){let I=et.length;for(;--I>=0;){let wt=I,nt=I-1;nt<0&&(nt=et.length-1);for(let B=0,at=h+p*2;B<at;B++){let Ot=H*B,St=H*(B+1),R=Q+wt+Ot,w=Q+nt+Ot,V=Q+nt+St,K=Q+wt+St;Lt(R,w,V,K)}}}function rt(et,Q,I){l.push(et),l.push(Q),l.push(I)}function Rt(et,Q,I){Ft(et),Ft(Q),Ft(I);let wt=i.length/3,nt=b.generateTopUV(n,i,wt-3,wt-2,wt-1);Wt(nt[0]),Wt(nt[1]),Wt(nt[2])}function Lt(et,Q,I,wt){Ft(et),Ft(Q),Ft(wt),Ft(Q),Ft(I),Ft(wt);let nt=i.length/3,B=b.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);Wt(B[0]),Wt(B[1]),Wt(B[3]),Wt(B[1]),Wt(B[2]),Wt(B[3])}function Ft(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function Wt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Iw(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Cf[i.type]().fromJSON(i)),new s(n,t.options)}},Pw={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[i*3],u=t[i*3+1],m=t[i*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-f),new gt(d,1-m),new gt(_,1-g)]:[new gt(a,1-l),new gt(h,1-f),new gt(u,1-m),new gt(p,1-g)]}};function Iw(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zr=class s extends In{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=t,d=(e-t)/i,u=new N,m=new gt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){let g=r+p/n*o;u.x=f*Math.cos(g),u.y=f*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,h.push(m.x,m.y)}f+=d}for(let _=0;_<i;_++){let p=_*(n+1);for(let g=0;g<n;g++){let b=g+p,M=b,x=b+n+1,T=b+n+2,E=b+1;a.push(M,x,E),a.push(x,T,E)}}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var tr=class s extends In{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new N,d=new N,u=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let b=[],M=g/n,x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let E=T/e;f.x=-t*Math.cos(i+E*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+E*r)*Math.sin(o+M*a),m.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(E+x,1-M),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){let M=h[g][b+1],x=h[g][b],T=h[g+1][b],E=h[g+1][b+1];(g!==0||o>0)&&u.push(M,x,E),(g!==n-1||l<Math.PI)&&u.push(x,T,E)}this.setIndex(u),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ni=class s extends In{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new N,f=new N,d=new N;for(let u=0;u<=n;u++)for(let m=0;m<=i;m++){let _=m/i*r,p=u/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=i;m++){let _=(i+1)*u+m-1,p=(i+1)*(u-1)+m-1,g=(i+1)*(u-1)+m,b=(i+1)*u+m;o.push(_,p,b),o.push(p,g,b)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var er=class extends Br{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X0,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oi=class extends er{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Rc(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Lw(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Go=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lf=class extends Go{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rg,endingEnd:Rg}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pg:r=t,a=2*e-n;break;case Ig:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pg:o=t,l=2*n-e;break;case Ig:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-u)*p+(1.5+u)*_+.5*m,x=u*p-u*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+b*o[c+T]+M*o[l+T]+x*o[f+T];return r}},Df=class extends Go{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Uf=class extends Go{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Fi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rc(e,this.TimeBufferType),this.values=Rc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rc(t.times,Array),values:Rc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Df(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nc:e=this.InterpolantFactoryMethodDiscrete;break;case rf:e=this.InterpolantFactoryMethodLinear;break;case Gu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nc;case this.InterpolantFactoryMethodLinear:return rf;case this.InterpolantFactoryMethodSmooth:return Gu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Lw(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gu,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let m=0;m!==n;++m){let _=e[f+m];if(_!==e[d+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=rf;var Hr=class extends Fi{constructor(t,e,n){super(t,e,n)}};Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Nc;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nf=class extends Fi{};Nf.prototype.ValueTypeName="color";var Of=class extends Fi{};Of.prototype.ValueTypeName="number";var Ff=class extends Go{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)js.slerpFlat(r,0,o,c-a,o,c,l);return r}},th=class extends Fi{InterpolantFactoryMethodLinear(t){return new Ff(this.times,this.values,this.getValueSize(),t)}};th.prototype.ValueTypeName="quaternion";th.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends Fi{constructor(t,e,n){super(t,e,n)}};Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Nc;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bf=class extends Fi{};Bf.prototype.ValueTypeName="vector";var kf=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null}}},Dw=new kf,zf=class{constructor(t){this.manager=t!==void 0?t:Dw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};zf.DEFAULT_MATERIAL_NAME="__DEFAULT";var eh=class extends gn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},nh=class extends eh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vd=new Je,P0=new N,I0=new N,Hf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;P0.setFromMatrixPosition(t.matrixWorld),e.position.copy(P0),I0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(I0),e.updateMatrixWorld(),vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vf=class extends Hf{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wo=class extends eh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Vf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var np="\\[\\]\\.:\\/",Uw=new RegExp("["+np+"]","g"),ip="[^"+np+"]",Nw="[^"+np.replace("\\.","")+"]",Ow=/((?:WC+[\/:])*)/.source.replace("WC",ip),Fw=/(WCOD+)?/.source.replace("WCOD",Nw),Bw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ip),kw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ip),zw=new RegExp("^"+Ow+Fw+Bw+kw+"$"),Hw=["material","materials","bones","map"],Gf=class{constructor(t,e,n){let i=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uw,"")}static parseTrackName(t){let e=zw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Hw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Gf;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tA=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);var cl=new N;function Mi(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;cl.copy(t),cl[n]=0,cl.normalize();let c=.5*o/(o+a),h=1-cl.angleTo(s)/l;return Math.sign(cl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Bi=class extends Ki{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new N,l=new N,c=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,u=h.length/6,m=new N,_=.5/i;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/u)){case 0:m.set(1,0,0),d[g+0]=Mi(m,l,"z","y",r,n),d[g+1]=1-Mi(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),d[g+0]=1-Mi(m,l,"z","y",r,n),d[g+1]=1-Mi(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),d[g+0]=1-Mi(m,l,"x","z",r,t),d[g+1]=Mi(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),d[g+0]=1-Mi(m,l,"x","z",r,t),d[g+1]=1-Mi(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),d[g+0]=1-Mi(m,l,"x","y",r,t),d[g+1]=1-Mi(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),d[g+0]=Mi(m,l,"x","y",r,t),d[g+1]=1-Mi(m,l,"y","x",r,e);break}}};function r_(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,M=a.length;b<M;b++){let x=a[b],T=s.attributes[x];l[x]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let E=s.morphAttributes[x];E&&(c[x]||(c[x]=[]),E.forEach((S,A)=>{let v=new S.array.constructor(S.count*S.itemSize);c[x][A]=new S.constructor(v,S.itemSize,S.normalized)}))}let u=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),p=u*_;for(let b=0;b<r;b++){let M=n?n.getX(b):b,x="";for(let T=0,E=a.length;T<E;T++){let S=a[T],A=s.getAttribute(S),v=A.itemSize;for(let y=0;y<v;y++)x+=`${~~(A[f[y]](M)*_+p)},`}if(x in e)h.push(e[x]);else{for(let T=0,E=a.length;T<E;T++){let S=a[T],A=s.getAttribute(S),v=s.morphAttributes[S],y=A.itemSize,P=l[S],D=c[S];for(let O=0;O<y;O++){let z=f[O],q=d[O];if(P[q](o,A[z](M)),v)for(let H=0,Y=v.length;H<Y;H++)D[H][q](o,v[H][z](M))}}e[x]=o,h.push(o),o++}}let g=s.clone();for(let b in s.attributes){let M=l[b];if(g.setAttribute(b,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),b in c)for(let x=0;x<c[b].length;x++){let T=c[b][x];g.morphAttributes[b][x]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return g.setIndex(h),g}var o_=3.2,Gw=-1.25,Jo="#27abdf",ah="#ee5b1c";var a_=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};function Ko(s,t,e,{srgb:n=!0,repeat:i}={}){let r=document.createElement("canvas");r.width=s,r.height=t,e(r.getContext("2d"),s,t);let o=new $c(r);return n&&(o.colorSpace=Wn),o.anisotropy=8,i&&(o.wrapS=o.wrapT=Oo,o.repeat.set(...i)),o}function Ww(s){return Ko(128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);s.forEach(([r,o])=>i.addColorStop(r,o)),t.fillStyle=i,t.fillRect(0,0,e,n)})}function Xw(){return Ko(256,256,(s,t,e)=>{s.fillStyle="#808080",s.fillRect(0,0,t,e);for(let n=0;n<5200;n++){let i=90+Math.random()*90;s.fillStyle=`rgb(${i},${i},${i})`;let r=Math.random()*2+.6;s.fillRect(Math.random()*t,Math.random()*e,r,r)}},{srgb:!1,repeat:[5,5]})}function qw(){return Ko(128,128,(s,t,e)=>{s.fillStyle="#707070",s.fillRect(0,0,t,e),s.fillStyle="#d8d8d8";for(let n=0;n<8;n++)for(let i=0;i<8;i++)s.beginPath(),s.arc(i*16+(n%2?8:0)+4,n*16+8,3.2,0,Math.PI*2),s.fill()},{srgb:!1,repeat:[3,3]})}function Yw(){return Ko(512,384,(s,t,e)=>{s.fillStyle="#0a2236",s.fillRect(0,0,t,e),s.strokeStyle="rgba(47,181,229,.55)",s.lineWidth=2;for(let n=0;n<60;n++){let i=Math.random()*t,r=Math.random()*e;s.beginPath(),s.moveTo(i,r);for(let o=0;o<4;o++)Math.random()>.5?i+=(Math.random()-.5)*140:r+=(Math.random()-.5)*100,s.lineTo(i,r);s.stroke()}s.fillStyle="#e9a24a";for(let n=0;n<160;n++)s.fillRect(Math.random()*t,Math.random()*e,5,5);s.strokeStyle="rgba(236,90,26,.8)",s.lineWidth=3,s.strokeRect(150,120,120,90)})}function $w(){let s=Ko(512,512,(t,e,n)=>{let i=t.createLinearGradient(0,0,e,n);i.addColorStop(0,"#0d1722"),i.addColorStop(.5,"#060a10"),i.addColorStop(1,"#0a1119"),t.fillStyle=i,t.fillRect(0,0,e,n);let r=t.createRadialGradient(e/2,n*.3,10,e/2,n*.3,e*.55);r.addColorStop(0,"rgba(39,171,223,.16)"),r.addColorStop(1,"rgba(39,171,223,0)"),t.fillStyle=r,t.fillRect(0,0,e,n),t.strokeStyle="rgba(120,190,230,.07)",t.lineWidth=1;for(let o=-n;o<e;o+=9)t.beginPath(),t.moveTo(o,0),t.lineTo(o+n,n),t.stroke();t.strokeStyle="rgba(236,90,26,.10)";for(let o=0;o<e;o+=64)t.beginPath(),t.moveTo(o,0),t.lineTo(o,n),t.stroke()});return s.wrapS=s.wrapT=Oo,s.offset.set(.5,.5),s}function Zw(s,t,e=128){return Ko(e,e,(n,i,r)=>{n.clearRect(0,0,i,r),n.fillStyle=t,n.font=`700 ${i*.62}px Geist, Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(s,i/2,r/2+r*.04)})}var Jw=[[[.38,.56],[.62,.66],[.98,.64]],[[1.16,.63],[1.3,.48],[1.36,.22]],[[1.42,-.06],[1.46,-.52],[1.4,-.82]],[[1.35,-1.06],[1.12,-1.12],[.98,-.98]],[[.82,-.84],[.74,-.52],[.6,-.36]],[[.46,-.22],[.26,-.2],[0,-.2]]],l_=[0,.56];function $o(s=1,t=null){let e=[0,.1],n=([l,c])=>[e[0]+(l-e[0])*s,e[1]+(c-e[1])*s],i=new Qs,r=n(l_);i.moveTo(...r);let o=l_,a=[];Jw.forEach(([l,c,h])=>{a.push({from:o,c1:l,c2:c,to:h}),o=h}),a.forEach(({c1:l,c2:c,to:h})=>i.bezierCurveTo(...n(l),...n(c),...n(h)));for(let l=a.length-1;l>=0;l--){let{from:c,c1:h,c2:f,to:d}=a[l],u=m=>n([-m[0],m[1]]);i.bezierCurveTo(...u(f),...u(h),...u(c))}return i}function Kw(s,t){let e=s.attributes.position,n=[],i=(a,l,c)=>{let h=[a.distanceTo(l)>t,l.distanceTo(c)>t,c.distanceTo(a)>t],f=h.filter(Boolean).length;if(!f)return n.push(a,l,c);let d=(u,m)=>u.clone().add(m).multiplyScalar(.5);if(f===3){let u=d(a,l),m=d(l,c),_=d(c,a);i(a,u,_),i(u,l,m),i(_,m,c),i(u,m,_)}else if(f===2){if(!h[0])return i(l,c,a);if(!h[1])return i(c,a,l);if(h[2])i(a,l,c);else{let u=d(a,l),m=d(l,c);i(u,l,m),i(a,u,c),i(u,m,c)}}else if(h[0]){let u=d(a,l);i(a,u,c),i(u,l,c)}else if(h[1]){let u=d(l,c);i(a,l,u),i(a,u,c)}else{let u=d(c,a);i(a,l,u),i(u,l,c)}};for(let a=0;a<e.count;a+=3)i(new N().fromBufferAttribute(e,a),new N().fromBufferAttribute(e,a+1),new N().fromBufferAttribute(e,a+2));let r=new Float32Array(n.length*3);n.forEach((a,l)=>a.toArray(r,l*3));let o=new In;return o.setAttribute("position",new qn(r,3)),o}function c_(s,t){let e=a_(-.1,-1.1,t),n=a_(.2,1.1,Math.abs(s));return-.62*e*e*(.5+.5*n)}function Zo(s,{depth:t,bevel:e,segs:n=8,z0:i=0,maxEdge:r=.075,uvScale:o=.55}){let a=new Vo(s,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:n,curveSegments:22,steps:1});a.deleteAttribute("uv"),a.deleteAttribute("normal"),a=Kw(a,r);let l=a.attributes.position,c=new Float32Array(l.count*2);for(let h=0;h<l.count;h++){let f=l.getX(h),d=l.getY(h);l.setZ(h,l.getZ(h)+i+c_(f,d)),c[h*2]=f*o,c[h*2+1]=d*o}return a.setAttribute("uv",new qn(c,2)),a=r_(a,1e-4),a.computeVertexNormals(),a}function sp(s,t=48){return new Qc(s.map(([e,n])=>new gt(e,n)),t)}var lh=class{constructor(t,e={}){this.canvas=t,this.mobile=!!e.mobile;let n=this.renderer=new Yc({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance",premultipliedAlpha:!0});n.setClearColor(0,0),n.toneMapping=qf,n.toneMappingExposure=1.08,n.outputColorSpace=Wn,this.scene=new nl,this.scene.environment=this.makeEnv(),this.camera=new Xn(28,1,.01,200),this.camera.position.set(0,0,14);let i=new Wo(16777215,2.4);i.position.set(-4,6,6);let r=this.rimB=new Wo(2599903,3.4);r.position.set(-6,1,-5);let o=this.rimO=new Wo(15620892,3.2);o.position.set(6,1.5,-5);let a=new nh(16777215,661028,.5);this.scene.add(i,r,o,a),this.stage=new Oe,this.craft=new Oe,this.pivot=new Oe,this.stage.add(this.craft),this.craft.add(this.pivot),this.scene.add(this.stage),this.parts=[],this.anchors={},this.btns=[],this.leds=[],this.build(),this.shadow=new yn(new Es(4.4,4.4),new yi({map:Ww([[0,"rgba(0,0,0,.6)"],[.45,"rgba(0,0,0,.22)"],[1,"rgba(0,0,0,0)"]]),transparent:!0,depthWrite:!1,opacity:0})),this.shadow.rotation.x=-Math.PI/2,this.stage.add(this.shadow),this.buildDock(),this.state={x:0,y:0,s:400,yaw:0,pitch:0,roll:0,tilt:.35,explode:0,prop:1,shadow:0,lift:0,lens:0,vis:1,pad:0,padX:0,padY:0,padS:0,padTilt:.5,padGlow:0,spin:0},this.time=0,this.flip=0,this.pressT=1.2,this.pulse=0,this.color=new ie("#14181e"),this.targetColor=this.color.clone(),this.ledColor=new ie(Jo),this.targetLed=this.ledColor.clone(),this.resize()}makeEnv(){let t=new nl,e=new yn(new tr(30,32,16),new yi({color:726562,side:Pn}));t.add(e);let n=(o,a,l,c,h,f=[0,0,0])=>{let d=new ie(l).multiplyScalar(c),u=new yn(new Es(o,a),new yi({color:d,side:vi}));u.position.set(...h),u.lookAt(...f),t.add(u)};n(16,10,16777215,6,[-8,14,10]),n(5,22,14677247,3.5,[18,3,8]),n(26,3,16777215,2.2,[0,-10,12]),n(6,22,2599903,6,[-18,2,-8]),n(6,22,15620892,6,[18,2,-10]),n(20,6,16777215,2.6,[0,16,-6]),n(22,9,16777215,3.2,[2,7,18]),n(14,2.4,10476799,4,[-4,-2,18]);let i=new zo(this.renderer),r=i.fromScene(t,.035).texture;return i.dispose(),r}build(){let t=this.pivot,e=Xw(),n=qw(),i=this.mat={shellF:new Oi({color:"#14181e",roughness:.3,metalness:.15,clearcoat:.9,clearcoatRoughness:.14}),shellB:new Oi({color:"#14181e",roughness:.62,metalness:.1,bumpMap:e,bumpScale:.6,clearcoat:.15,clearcoatRoughness:.6}),face:new Oi({map:$w(),color:"#ffffff",roughness:.2,metalness:.35,clearcoat:1,clearcoatRoughness:.06}),accent:new Oi({color:ah,roughness:.35,metalness:.1,emissive:"#ee5b1c",emissiveIntensity:.12,clearcoat:.6}),metal:new Oi({color:"#8f9aa6",roughness:.22,metalness:1}),darkmetal:new Oi({color:"#2b3038",roughness:.3,metalness:.95}),rubber:new er({color:"#0c0e12",roughness:.85,metalness:0,bumpMap:n,bumpScale:1.4}),btn:new Oi({color:"#0b0e13",roughness:.18,metalness:.3,clearcoat:1,clearcoatRoughness:.05}),glass:new Oi({color:"#04070a",roughness:.03,metalness:.2,clearcoat:1,transmission:0,reflectivity:1}),led:new yi({color:Jo,toneMapped:!1}),pcb:new er({map:Yw(),roughness:.55,metalness:.3}),chip:new er({color:"#15191f",roughness:.4,metalness:.6}),gold:new er({color:"#d9a441",roughness:.3,metalness:1})},r=(T,E,S,A,v)=>(E.userData.home=E.position.clone(),E.userData.dir=S||new N,E.userData.rot=A||new N,t.add(E),this.parts.push(E),v&&this.anchor(T,E,...v),E),o=(T,E,S,A)=>{let v=new yn(T,E);return S&&v.position.set(...S),A&&v.rotation.set(...A),v},a=.12,l=.13,c=new Oe;c.add(o(Zo($o(1),{depth:a,bevel:l,z0:0}),i.shellF));let h=a+l;c.userData.topZ=h,c.add(o(Zo($o(.9),{depth:.012,bevel:.01,segs:3,z0:h-.004,maxEdge:.07,uvScale:.3}),i.face));let f=$o(.935),d=$o(.915);f.holes.push(new Ho(d.getPoints(80).reverse())),c.add(o(Zo(f,{depth:.006,bevel:.004,segs:2,z0:h+.004,maxEdge:.06}),i.led)),this.front=c,r("shell",c,new N(0,0,.9),new N(0,0,0),[0,0,h]);let u=new Oe;u.add(o(Zo($o(1),{depth:a,bevel:l,z0:-(a+2*l)}),i.shellB));let m=(T,E,S,A,v)=>{let y=new Qs,P=T-S/2,D=E-A/2;return y.moveTo(P+v,D),y.lineTo(P+S-v,D),y.quadraticCurveTo(P+S,D,P+S,D+v),y.lineTo(P+S,D+A-v),y.quadraticCurveTo(P+S,D+A,P+S-v,D+A),y.lineTo(P+v,D+A),y.quadraticCurveTo(P,D+A,P,D+A-v),y.lineTo(P,D+v),y.quadraticCurveTo(P,D,P+v,D),y};[-1,1].forEach(T=>{u.add(o(Zo(m(T*.98,-.55,.52,.9,.2),{depth:.014,bevel:.018,segs:4,z0:-.5,maxEdge:.07,uvScale:1.6}),i.rubber))}),u.add(o(new Bi(.7,.025,.012,2,.006),i.led,[0,.36,-.512])),[[0,.1],[.1,0],[0,-.1],[-.1,0]].forEach(([T,E],S)=>{let A=o(new tr(.03,16,10),S%2?i.accent:i.led,[T,E+.08,-.512]);A.scale.set(1,1,.35),u.add(A)});let _=new Oe;_.add(o(new Bi(.24,.05,.1,3,.025),i.darkmetal,[0,.62,-.13])),_.add(o(new Bi(.18,.052,.05,3,.02),i.glass,[0,.627,-.13])),u.add(_),r("back",u,new N(0,0,-1.15),new N(0,0,0),[0,-.3,-.5]);let p=new Oe,g=$o(.82);p.add(o(Zo(g,{depth:.02,bevel:.006,segs:2,z0:-.01,maxEdge:.08}),i.pcb)),p.add(o(new Bi(.3,.3,.05,3,.012),i.chip,[0,.12,.04])),p.add(o(new Ki(.16,.16,.035),i.chip,[-.5,-.08,.035])),p.add(o(new Ki(.16,.12,.035),i.chip,[.5,-.06,.035])),p.add(o(new Ni(.11,.012,8,24),i.gold,[0,.12,.07])),p.add(o(new Qi(.05,.05,.02,24),i.led,[0,.12,.075],[Math.PI/2,0,0])),r("pcb",p,new N(0,0,.3),new N(0,0,0),[0,.12,.08]);let b=new Oe;b.add(o(new Bi(.9,.5,.1,4,.04),i.shellB.clone(),[0,-.02,-.01])),b.add(o(new Bi(.88,.07,.102,2,.02),i.accent,[0,.12,0])),b.position.set(0,.02,-.14),b.children[0].material.color.set("#1a2432"),r("battery",b,new N(0,0,-.55),new N(0,0,0)),[-1,1].forEach(T=>{let E=new Oe;E.add(o(new Qi(.12,.12,.2,24),i.darkmetal,[0,0,0],[0,0,Math.PI/2])),E.add(o(new Qi(.06,.06,.22,16),i.metal,[0,0,0],[0,0,Math.PI/2])),E.position.set(T*1.08,-.62,-.1+c_(T*1.08,-.62)*.7),E.rotation.z=T*.1,r("haptic"+T,E,new N(T*.15,-.2,-.38))});let M=h+.016,x=(T,E,S)=>{let A=new Oe;A.add(o(new Qi(.235,.235,.014,56),i.glass,[0,0,0],[Math.PI/2,0,0])),A.add(o(new Ni(.235,.022,14,64),i.darkmetal,[0,0,.004])),A.add(o(new Ni(.205,.006,8,64),i.led,[0,0,.012]));let v=new Oe;v.add(o(new Qi(.06,.07,.1,24),i.darkmetal,[0,0,.06],[Math.PI/2,0,0]));let y=sp([[0,0],[.14,0],[.168,.012],[.18,.04],[.172,.062],[.15,.072],[.12,.062],[.07,.046],[0,.04]],48),P=o(y,i.rubber,[0,0,.1],[Math.PI/2,0,0]);return v.add(P),v.add(o(new Ni(.168,.008,8,48),i.metal,[0,0,.14])),v.userData.base=0,A.add(v),A.position.set(T,E,M),this.btns.push({obj:v,depth:.045,kind:"stick",phase:Math.random()*6}),r(S,A,new N(0,0,1.55),new N(.12,-.08,.1),[0,0,.2])};x(-.74,.17,"stickL"),x(.4,-.14,"stickR");{let T=new Oe;T.add(o(new Qi(.2,.2,.014,48),i.glass,[0,0,0],[Math.PI/2,0,0])),T.add(o(new Ni(.2,.018,12,48),i.darkmetal,[0,0,.004]));let E=.105,S=.19,A=.03,v=new Qs;v.moveTo(-E/2+A,S),v.lineTo(E/2-A,S),v.quadraticCurveTo(E/2,S,E/2,S-A),v.lineTo(E/2,E/2),v.lineTo(S-A,E/2),v.quadraticCurveTo(S,E/2,S,E/2-A),v.lineTo(S,-E/2+A),v.quadraticCurveTo(S,-E/2,S-A,-E/2),v.lineTo(E/2,-E/2),v.lineTo(E/2,-S+A),v.quadraticCurveTo(E/2,-S,E/2-A,-S),v.lineTo(-E/2+A,-S),v.quadraticCurveTo(-E/2,-S,-E/2,-S+A),v.lineTo(-E/2,-E/2),v.lineTo(-S+A,-E/2),v.quadraticCurveTo(-S,-E/2,-S,-E/2+A),v.lineTo(-S,E/2-A),v.quadraticCurveTo(-S,E/2,-S+A,E/2),v.lineTo(-E/2,E/2),v.lineTo(-E/2,S-A),v.quadraticCurveTo(-E/2,S,-E/2+A,S);let y=new Vo(v,{depth:.045,bevelEnabled:!0,bevelThickness:.022,bevelSize:.016,bevelSegments:5,curveSegments:6}),P=o(y,i.btn,[0,0,.012]),D=o(new zr(0,.034,32),i.led,[0,0,.1]);P.add(D),T.add(P),T.position.set(-.4,-.14,M),this.btns.push({obj:P,depth:.025,kind:"dpad",phase:2}),r("dpad",T,new N(0,0,1.3),new N(-.1,.1,-.08),[0,0,.12])}{let T=new Oe;T.add(o(new Qi(.33,.33,.012,56),i.glass,[0,0,-.002],[Math.PI/2,0,0])),T.add(o(new Ni(.33,.018,10,64),i.darkmetal,[0,0,.002])),[["Y",ah,0,.165],["B","#ffffff",.165,0],["A",Jo,0,-.165],["X","#ffffff",-.165,0]].forEach(([S,A,v,y],P)=>{let D=new Oe,O=o(sp([[0,0],[.078,0],[.086,.012],[.086,.028],[.07,.04],[.035,.046],[0,.047]],36),i.btn,[0,0,0],[Math.PI/2,0,0]);D.add(O);let z=o(new Es(.1,.1),new yi({map:Zw(S,A),transparent:!0,toneMapped:!1}),[0,0,.049]);D.add(z),D.position.set(v,y,.016),T.add(D),this.btns.push({obj:D,depth:.03,kind:"face",phase:P*1.4})}),T.position.set(.74,.17,M),r("face",T,new N(0,0,1.45),new N(.1,.12,-.1),[0,0,.12])}{let T=new Oe;T.add(o(new Ni(.13,.016,12,56),i.led,[0,0,.008])),T.add(o(new Ni(.152,.012,10,56),i.darkmetal,[0,0,.004]));let E=o(new tr(.118,40,20,0,Math.PI*2,0,Math.PI/2),i.glass,[0,0,0],[Math.PI/2,0,0]);E.scale.set(1,.55,1),T.add(E),[[0,.05],[.05,0],[0,-.05],[-.05,0]].forEach(([S,A],v)=>{let y=o(new tr(.014,12,8),v%2?i.accent:i.led,[S,A,.07]);T.add(y)}),[-1,1].forEach(S=>{let A=o(sp([[0,0],[.04,0],[.044,.01],[.04,.018],[0,.02]],24),i.btn,[S*.26,.04,0],[Math.PI/2,0,0]);T.add(A)});for(let S=0;S<4;S++){let A=o(new tr(.014,10,8),i.led,[-.075+S*.05,-.16,.012]);A.scale.z=.4,T.add(A),this.leds.push(A)}T.position.set(0,.3,M),this.guide=T,r("guide",T,new N(0,.1,1.2),new N(0,0,0),[0,0,.1]),this.lensLocal=new N(0,.3,M+.06),this.holeMat=new yi({transparent:!0,depthWrite:!1,blending:Xf,blendEquation:xs,blendSrc:Xo,blendDst:Xo,blendSrcAlpha:Xo,blendDstAlpha:Xo}),this.hole=o(new sl(.118,48),this.holeMat,[0,0,.085]),this.hole.renderOrder=999,this.hole.scale.setScalar(.001),T.add(this.hole)}[-1,1].forEach(T=>{let E=T<0?"bumperL":"bumperR",S=o(new Bi(.86,.13,.34,6,.062),i.shellF,[0,0,0]),A=o(new Bi(.52,.012,.16,2,.005),i.accent,[0,.066,.02]);S.add(A);let v=new Oe;v.add(S),v.position.set(T*.9,.6,.03),v.rotation.z=-T*.3,this.btns.push({obj:S,depth:.03,kind:"bump",phase:T+3,axis:"y"}),r(E,v,new N(T*.35,.5,.7),new N(0,0,-T*.15),[0,.05,.1]);let y=new Qs;y.moveTo(0,0),y.bezierCurveTo(.1,.12,.16,.25,.1,.34),y.lineTo(-.06,.34),y.bezierCurveTo(-.09,.22,-.09,.1,-.1,0),y.closePath();let P=new Vo(y,{depth:.4,bevelEnabled:!0,bevelThickness:.035,bevelSize:.03,bevelSegments:5,curveSegments:14});P.translate(0,0,-.2),P.rotateY(Math.PI/2);let D=o(P,i.btn);D.rotation.set(.5,0,0);let O=new Oe;O.add(D),O.position.set(T*.92,.42,-.2),O.rotation.z=-T*.22,this.btns.push({obj:D,depth:.04,kind:"trig",phase:T+5,axis:"y"}),r("trigger"+T,O,new N(T*.3,.4,-.3),new N(0,0,0))}),this.holeLocal=this.lensLocal.clone()}anchor(t,e,n,i,r){let o=new gn;o.position.set(n,i,r),e.add(o),this.anchors[t]=o}buildDock(){let t=this.padGroup=new Oe,e=(n,i,r)=>{let o=new yn(n,new yi({color:i,transparent:!0,opacity:r,depthWrite:!1,side:vi}));return o.rotation.x=-Math.PI/2,t.add(o),o};this.padBase=e(new sl(1.6,96),"#000000",.16),this.padRing=e(new zr(1.52,1.6,96),"#ffffff",.95),e(new zr(1.1,1.12,96),"#ffffff",.5),this.padPulse=e(new zr(1.6,1.65,96),"#ffffff",0);for(let n=0;n<4;n++){let i=e(new Es(.05,.28),"#ffffff",.9),r=n*Math.PI/2+Math.PI/4;i.position.set(Math.cos(r)*1.82,0,Math.sin(r)*1.82),i.rotation.z=-r+Math.PI/2}t.visible=!1,this.scene.add(t)}resize(){let t=window.innerWidth,e=window.innerHeight;this.w=t,this.h=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.mobile?1.5:2)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.wpp=2*Math.tan(Y0.degToRad(this.camera.fov/2))*this.camera.position.z/e}setColor(t){this.targetColor.set(t)}setLed(t){this.targetLed.set(t)}doFlip(){this.flipT=0,this.flipping=!0}doSpin(){this.spinT=0,this.spinning=!0}press(){this.pulse=1,this.pressT=0}project(t){let e=new N;return t.getWorldPosition(e),e.project(this.camera),{x:(e.x+1)/2*this.w,y:(1-e.y)/2*this.h}}anchorScreen(t){return this.anchors[t]?this.project(this.anchors[t]):null}lensScreen(){let t=this.project(this.guide),e=new gn,n=new N(.118,0,.085);this.guide.localToWorld(n),n.project(this.camera);let i=(n.x+1)/2*this.w,r=(1-n.y)/2*this.h,o=new N(0,0,.085);this.guide.localToWorld(o),o.project(this.camera);let a=(o.x+1)/2*this.w,l=(1-o.y)/2*this.h;return{x:a,y:l,r:Math.hypot(i-a,r-l)}}update(t){let e=this.state;this.time+=t;let n=this.time;this.color.lerp(this.targetColor,1-Math.exp(-t*6)),this.ledColor.lerp(this.targetLed,1-Math.exp(-t*5)),this.mat.shellF.color.copy(this.color),this.mat.shellB.color.copy(this.color).multiplyScalar(.62);let i=this.color.getHSL({}).l>.6;this.mat.shellF.roughness=i?.38:.3,this.mat.face.color.set(i?"#7d8794":"#ffffff"),this.mat.led.color.copy(this.ledColor).multiplyScalar(1+this.pulse*.6),this.mat.accent.emissiveIntensity=.12+this.pulse*.7,this.pulse*=Math.exp(-t*2.4);let r=e.s*this.wpp/o_;this.stage.visible=e.vis>.01&&e.s>1,this.stage.position.set(e.x*this.wpp,-e.y*this.wpp,0),this.stage.scale.setScalar(r),this.stage.rotation.set(-e.tilt,0,0),this.pivot.position.copy(this.lensLocal).multiplyScalar(-e.lens);let o=e.prop,a=Math.sin(n*1.7)*.05*o*(1-e.lens);this.craft.position.set(0,a+e.lift,0),this.flipping&&(this.flipT+=t/.95,this.flipT>=1&&(this.flipping=!1,this.flipT=1)),this.spinning&&(this.spinT+=t/1.1,this.spinT>=1&&(this.spinning=!1,this.spinT=1));let l=this.flipping?this.flipT:0,c=l?(1-Math.pow(1-l,3))*Math.PI*2:0,h=this.spinning?this.spinT:0,f=h?(1-Math.pow(1-h,3))*Math.PI*2:0;this.craft.rotation.set(e.pitch+Math.sin(n*1.3)*.025*o,e.yaw+f,e.roll+Math.sin(n*1.1+1)*.03*o+c,"YXZ");let d=e.explode;for(let p of this.parts)p.position.copy(p.userData.home).addScaledVector(p.userData.dir,d*.8),p.rotation.set(p.userData.rot.x*d,p.userData.rot.y*d,p.userData.rot.z*d);this.pressT-=t,this.pressT<0&&d<.2&&(this.pressT=1.8+Math.random()*2.2,this.pressIdx=Math.floor(Math.random()*this.btns.length),this.pressLife=.28),this.pressLife>0&&(this.pressLife-=t),this.btns.forEach((p,g)=>{let b=0;if(g===this.pressIdx&&this.pressLife>0&&(b=Math.sin(this.pressLife/.28*Math.PI)),this.pulse>.2&&p.kind==="face"&&(b=Math.max(b,Math.sin((n*14+p.phase)*.5)*.5+.5)*this.pulse),p.d=(p.d||0)+(b-(p.d||0))*Math.min(1,t*24),p.kind==="stick"){let M=Math.sin(n*.9+p.phase)*.018*(1-d),x=Math.cos(n*1.1+p.phase)*.018*(1-d);p.obj.position.set(M,x,-p.d*p.depth)}else p.axis==="y"?p.obj.position.y=-p.d*p.depth*.5:p.obj.position.z=(p.obj.userData.homeZ??(p.obj.userData.homeZ=p.obj.position.z))-p.d*p.depth}),this.leds.forEach((p,g)=>{p.visible=!0,p.material=this.mat.led,p.scale.setScalar(.7+.5*(Math.sin(n*3-g*.8)*.5+.5))});let u=e.lens>.6?Math.min(1,(e.lens-.6)/.25):0;this.hole.scale.setScalar(Math.max(.001,u)),this.shadow.position.y=Gw-e.lift,this.shadow.material.opacity=e.shadow;let m=1+e.lift*.6;this.shadow.scale.set(m,m,m);let _=this.padGroup;if(_.visible=e.pad>.01,_.visible){let p=e.padS*this.wpp/o_;_.position.set(e.padX*this.wpp,-e.padY*this.wpp,-.01),_.scale.setScalar(p*(.9+.1*e.pad)),_.rotation.set(e.padTilt,0,0),this.padBase.material.opacity=.16*e.pad,this.padRing.material.opacity=.95*e.pad;let g=n*.8%1;this.padPulse.scale.setScalar(1+g*.35*e.padGlow),this.padPulse.material.opacity=(1-g)*.7*e.padGlow*e.pad}if(!this.stage.visible&&!_.visible){this._blank||(this.renderer.clear(),this._blank=!0);return}this._blank=!1,this.renderer.render(this.scene,this.camera)}};var Si=(s,t,e,n,i=null,r={})=>({id:s,name:t,src:`assets/img/${s}.webp`,w:e,h:n,steam:i,...r}),rp=[Si("cyber-war","Cyber War: Neon City",900,900,null),Si("dwarf-journey","Dwarf Journey",900,900,1501410),Si("super-mombo-quest","Super Mombo Quest",900,506,1262040),Si("monster-meals","Monster Meals",748,779,3021850),Si("hellbrella","Hellbrella",748,896,3510060),Si("lia","LIA: Hacking Destiny",900,900,3740360),Si("legacy-of-evil","Legacy of Evil",900,675,2657360),Si("mombo-combo","Mombo Combo Legacy",900,506,4194840)],ch=[Si("one-lonely-outpost","One Lonely Outpost",900,506,1465550),Si("four-elements","4 The Elements",900,900,2081090),Si("nine-kings","9 Kings",900,900,2784470),Si("infinitevania","Infinitevania",900,900,1983620)],jo={id:"gogo-direct",name:"GoGo Direct \xB7 1st edition",src:"assets/img/gogo-direct.webp",w:1280,h:720,video:"m-R8vVGluEw",url:"https://www.youtube.com/watch?v=m-R8vVGluEw"},op="https://www.youtube.com/@gogogamesinteractive";var hh="gogogamesinteractive@gogogames.com.br",hl=s=>s.url||(s.steam?`https://store.steampowered.com/app/${s.steam}/`:null);var ap=["en","pt"],jw={en:"en",pt:"pt-BR"},u_="gogo-lang",Qw={"meta.title":"GoGo Games Interactive \u2014 Great games. Go further.","meta.desc":"GoGo Games Interactive publishes, distributes and accelerates indie games \u2014 and manages the studios behind them. Publishing, porting and partnerships for developers and players.",skip:"Skip to content","nav.aria":"Main sections","nav.start":"Start","nav.games":"Games","nav.services":"What we do","nav.about":"About","nav.partners":"Partners","nav.cta":"Submit your game","nav.menu":"Menu","nav.menuOpen":"Open menu","nav.menuClose":"Close menu","nav.home":"GoGo Games Interactive \u2014 home","lang.aria":"Language","lang.pt":"Portugu\xEAs (Brasil)","lang.en":"English","pre.top":"PRESS START \xB7 BOOT SEQUENCE","pre.c1":"Controller connected","pre.c2":"Loading game library","pre.c3":"Syncing publisher partners","pre.c4":"Linking studio network","pre.c5":"Calibrating sticks","pre.c6":"Player 1 ready","pre.loading":"Loading\u2026","pre.ready":"Press start","pre.skip":"Skip intro","hero.aria":"Great games. Go further.","hero.t1":"GREAT","hero.t2":"GAMES","hero.t3":"GO FURTHER","hero.panel":"Select mode","hero.pause":"Pause auto-play","hero.menuAria":"GoGo Games areas","hero.mode.games":"Games","hero.mode.publishing":"Publishing","hero.mode.porting":"Porting","hero.mode.studios":"Studios","hero.desc.games":"Our catalog of indie games, published by GoGo Games Interactive.","hero.desc.publishing":"Publishing, distribution and promotions for indie games on the main platforms.","hero.desc.porting":"A porting service for games from other studios.","hero.desc.studios":"We manage studios intelligently \u2014 and build lasting partnerships.","hero.stat.games":"Titles in<br>the catalog","hero.stat.publishing":"Games<br>published","hero.stat.porting":"Games<br>ported","hero.stat.studios":"Partner<br>studios","hero.st1":"Your game.","hero.st2":"Our partnership.","hero.st3":"Further.","hero.lead":"Your game deserves to go further.","hero.copy":"Publishing, distribution, porting and long-term partnerships for independent game studios.","hero.btn1":"Explore our games","hero.btn2":"Partner with us","hero.preview":"Game preview","hero.previewTag":"\u25B6 PREVIEW","hero.watch":"Watch \u25B6","hero.channel":"Channel \u2197","hero.meet":"Meet them \u2193","hero.submitDown":"Submit your game \u2193","hero.studiosName":"Our partner studios","hero.directName":"GoGo Direct \xB7 1st edition","hero.hintClick":"Click for a stunt","hero.hintTap":"Tap the controller","hero.hintScroll":"Scroll to start","link.steam":"Steam page \u2197","link.steamLong":"Trailer & Steam page","link.soon":"Link coming soon","link.video":"Watch the showcase","link.channel":"YouTube channel","link.trailer":"Trailer \u2197","games.h2":"Our games","games.kicker":"02 \u2014 Our games","games.top":"GOGO OS \xB7 GAME SELECT","games.loading":"\u25CF LOADING","games.big1":"press","games.big2":"start.","games.bottom":"OUR GAMES \xB7 08 PUBLISHED \xB7 04 PORTED","games.p1":"PLAYER 1 READY","games.select":"SELECT","games.title":"TITLE","games.score":"SCORE","games.pts":"pts","games.game":"GAME","games.lvl":"LVL","games.press":"PRESS \u25B6 TO PLAY","games.kick":"Published by GoGo","games.kickShow":"Showcase","games.roster":"Game roster","games.swipe":"Swipe to browse","games.alt":"cover art","games.prev":"Previous game","games.next":"Next game","svc.kicker":"03 \u2014 What we do","svc.h2":"More than a publisher. <em>A partner.</em>","svc.p":"Scroll to take the controller apart \u2014 publishing, porting and studio support, piece by piece.","svc.pMobile":"Publishing, porting and studio support \u2014 everything GoGo does for games and the teams behind them.","svc.1.h4":"Publishing","svc.1.t":"Publishing & distribution","svc.1.p":"We publish indie games and bring them to players on the main platforms, with promotions and the best price in mind.","svc.2.h4":"Porting","svc.2.t":"Porting service","svc.2.p":"A dedicated porting service for games from other studios.","svc.3.h4":"Studios","svc.3.t":"Studio management","svc.3.p":"We manage studios intelligently, planning how a game can be taken forward over the years.","svc.4.h4":"IP care","svc.4.t":"Intellectual property","svc.4.p":"We care for IP in a way that strengthens studios, so they don\u2019t lose their greatest asset.","svc.5.h4":"Players","svc.5.t":"Player services ecosystem","svc.5.p":"Stats, progress and performance across all GoGo games, on all platforms.","svc.6.h4":"Creators","svc.6.t":"Creators Program","svc.6.p":"Content creators can join as partners of GoGo Games Interactive.","svc.6.link":"Join the Creators Program \u2197","svc.unit":"titles","svc.small":"In our catalog today","svc.meter":"Exploded view","svc.img":"Exploded view of the GoGo controller showing its internal parts","port.kicker":"04 \u2014 Porting service","port.h2":"Games from other studios. <em>On more screens.</em>","port.p":"Beyond our own publishing, GoGo Games Interactive offers a porting service for other games. These are some of the titles in that line-up.","port.hint":"Keep scrolling \u2192","port.hintSwipe":"Swipe \u2192","port.count":"ported titles","port.small":"Porting service for other games","port.copy":"Have a finished game that should be on more platforms? Tell us about it \u2014 we\u2019ll take it from there.","port.btn":"Ask about porting","port.queue":"PORT QUEUE","port.mailSubject":"Porting request","about.kicker":"05 \u2014 About GoGo Games","about.h2":"A new era for <em>gamers &amp; developers.</em>","about.p":"We are a games company that doesn\u2019t only publish games \u2014 we intelligently manage studios, thinking about how each game can go further over the years. We take care of intellectual property so studios keep their greatest asset.","about.mission":"<b>Our mission:</b> to provide unique experiences for gamers and to build lasting partnerships with talented developers. Whether you\u2019re a gamer eager for something new or a studio looking for a strategic partner, we\u2019re here to push your potential to the max.","about.dist":"Distance","about.status":"Status","about.dodges":"Dodges","about.idle":"IDLE","about.evading":"EVADING","about.touch":"Tap near the controller to try to catch it",s1:"titles in the catalog",s2:"ported games",s3:"publisher partners",s4:"partner studios","about.players":"For players","about.playersP":"Gamers who want a unique experience with the best indie games \u2014 with an ecosystem of player services for all GoGo games on all platforms, bringing the best games at the best price.","pt.kicker":"06 \u2014 Our partners","pt.h2":"Good company <em>makes good games.</em>","pt.p":"The publishers, platforms and studios we build with.","pt.t1":"01 \xB7 Publisher partners","pt.t2":"02 \xB7 Platforms","pt.t3":"03 \xB7 Studio partners","pt.platAlt":"Xbox, PlayStation, Nintendo Switch, Steam, Xsolla and Nuuvem logos","pt.stuAlt":"Partner studios: bytteam, DarkOcean Games, Ludus Studio, Teion Games, Orube Game Studio, Over Games, Sunny Horizon, Uruca, Giant Warrior Studio, Glitch, Cyber Monkey, S.E.R.A Games Studio, Red Sea, Icy Mountain Studios, Out Zoom, Fora do Eixo, Sergames Studio, Shark, HK Games Studio, Ramires Tech Games and Forgate Games","pt.swipe":"Swipe to see all studios \u2192","sub.kicker":"07 \u2014 Submit your game","sub.h2":"Got a game? Insert it <em>here.</em>","sub.lead":"Send us your game or presentation. Pick a skin for the controller while you\u2019re here \u2014 the dock is waiting.","sub.dock":"DOCK \xB7 PLAYER 1","sub.waiting":"WAITING","sub.docking":"DOCKING","sub.ready":"PLAYER 1 READY \u2713","sub.brasil":"GOGO GAMES INTERACTIVE \xB7 BRASIL","sub.skin":"Controller skin","sub.skin1":"Graphite","sub.skin2":"Arctic","sub.skin3":"GoGo Blue","sub.skin4":"GoGo Orange","sub.badge":"Developers \xB7 Open submissions","sub.h3":"Send us your game","sub.need":"What are you looking for?","sub.k1":"Publishing","sub.k1p":"Publishing and distribution for your game","sub.k2":"Porting","sub.k2p":"Bring a finished game to more platforms","sub.k3":"Studio partnership","sub.k3p":"Long-term partnership and studio management","sub.f.studio":"Studio / your name","sub.f.studioPh":"Your studio","sub.f.game":"Game title","sub.f.gamePh":"Your game","sub.f.email":"Email","sub.f.emailPh":"you@studio.com","sub.f.link":"Link to build, trailer or presentation","sub.f.msg":"Tell us about it","sub.f.msgPh":"Genre, platforms, status, team\u2026","sub.send":"Send my game","sub.sending":"Sending\u2026","sub.sub":"We reply by email","sub.err.required":"This field is required.","sub.err.email":"Enter a valid email address.","sub.err.url":"Enter a valid link starting with http:// or https://","sub.err.fix":"Please fix the highlighted fields.","sub.ok":"Thank you! Your game was sent. We\u2019ll get back to you by email.","sub.fail":"We couldn\u2019t send your message right now. Please try again, or email us directly.","sub.notConfigured":"Online submissions are not available yet. Please email us directly:","sub.rate":"Too many attempts. Please wait a moment and try again.","sub.offline":"No connection. Check your internet and try again.","sub.direct":"Prefer email? Write to","sub.c.email":"Email","sub.c.phone":"Phone","sub.c.creators":"Creators","sub.c.creatorsLink":"Creators Program form \u2197","sub.c.store":"Store","ft.line1":"Great games.","ft.line2":"Go further.","ft.cta":"Send us your game \u2192","ft.contact":"Contact","ft.follow":"Follow","ft.explore":"Explore","ft.store":"Official store \u2197","ft.creators":"Creators Program \u2197","ft.direct":"GoGo Direct \xB7 1st edition \u25B6","ft.tag":"Games \xB7 Publishing \xB7 Porting \xB7 Studios","ft.top":"Back to top \u2191","ft.rights":"\xA9 2026 GoGo Games Interactive","vm.close":"Close video","vm.title":"GoGo Direct \u2014 first edition"},tT={"meta.title":"GoGo Games Interactive \u2014 Grandes jogos. V\xE1 mais longe.","meta.desc":"A GoGo Games Interactive publica, distribui e acelera jogos indie \u2014 e gerencia os est\xFAdios por tr\xE1s deles. Publica\xE7\xE3o, porting e parcerias para desenvolvedores e jogadores.",skip:"Ir para o conte\xFAdo","nav.aria":"Se\xE7\xF5es principais","nav.start":"In\xEDcio","nav.games":"Jogos","nav.services":"O que fazemos","nav.about":"Sobre","nav.partners":"Parceiros","nav.cta":"Envie seu jogo","nav.menu":"Menu","nav.menuOpen":"Abrir menu","nav.menuClose":"Fechar menu","nav.home":"GoGo Games Interactive \u2014 in\xEDcio","lang.aria":"Idioma","lang.pt":"Portugu\xEAs (Brasil)","lang.en":"English","pre.top":"PRESS START \xB7 SEQU\xCANCIA DE BOOT","pre.c1":"Controle conectado","pre.c2":"Carregando biblioteca de jogos","pre.c3":"Sincronizando publishers parceiros","pre.c4":"Conectando rede de est\xFAdios","pre.c5":"Calibrando anal\xF3gicos","pre.c6":"Player 1 pronto","pre.loading":"Carregando\u2026","pre.ready":"Aperte start","pre.skip":"Pular introdu\xE7\xE3o","hero.aria":"Grandes jogos. V\xE1 mais longe.","hero.t1":"GRANDES","hero.t2":"JOGOS","hero.t3":"V\xC1 MAIS LONGE","hero.panel":"Escolha o modo","hero.pause":"Pausar reprodu\xE7\xE3o autom\xE1tica","hero.menuAria":"\xC1reas da GoGo Games","hero.mode.games":"Jogos","hero.mode.publishing":"Publica\xE7\xE3o","hero.mode.porting":"Porting","hero.mode.studios":"Est\xFAdios","hero.desc.games":"Nosso cat\xE1logo de jogos indie, publicados pela GoGo Games Interactive.","hero.desc.publishing":"Publica\xE7\xE3o, distribui\xE7\xE3o e promo\xE7\xF5es de jogos indie nas principais plataformas.","hero.desc.porting":"Um servi\xE7o de porting para jogos de outros est\xFAdios.","hero.desc.studios":"Gerenciamos est\xFAdios com intelig\xEAncia \u2014 e constru\xEDmos parcerias duradouras.","hero.stat.games":"T\xEDtulos no<br>cat\xE1logo","hero.stat.publishing":"Jogos<br>publicados","hero.stat.porting":"Jogos<br>portados","hero.stat.studios":"Est\xFAdios<br>parceiros","hero.st1":"Seu jogo.","hero.st2":"Nossa parceria.","hero.st3":"Mais longe.","hero.lead":"Seu jogo merece ir mais longe.","hero.copy":"Publica\xE7\xE3o, distribui\xE7\xE3o, porting e parcerias de longo prazo para est\xFAdios de games independentes.","hero.btn1":"Conhe\xE7a nossos jogos","hero.btn2":"Seja nosso parceiro","hero.preview":"Pr\xE9via do jogo","hero.previewTag":"\u25B6 PR\xC9VIA","hero.watch":"Assistir \u25B6","hero.channel":"Canal \u2197","hero.meet":"Conhe\xE7a \u2193","hero.submitDown":"Envie seu jogo \u2193","hero.studiosName":"Nossos est\xFAdios parceiros","hero.directName":"GoGo Direct \xB7 1\xAA edi\xE7\xE3o","hero.hintClick":"Clique para uma manobra","hero.hintTap":"Toque no controle","hero.hintScroll":"Role para come\xE7ar","link.steam":"P\xE1gina na Steam \u2197","link.steamLong":"Trailer e p\xE1gina na Steam","link.soon":"Link em breve","link.video":"Assistir ao showcase","link.channel":"Canal no YouTube","link.trailer":"Trailer \u2197","games.h2":"Nossos jogos","games.kicker":"02 \u2014 Nossos jogos","games.top":"GOGO OS \xB7 SELE\xC7\xC3O DE JOGO","games.loading":"\u25CF CARREGANDO","games.big1":"press","games.big2":"start.","games.bottom":"NOSSOS JOGOS \xB7 08 PUBLICADOS \xB7 04 PORTADOS","games.p1":"PLAYER 1 PRONTO","games.select":"SELE\xC7\xC3O","games.title":"T\xCDTULO","games.score":"PONTOS","games.pts":"pts","games.game":"JOGO","games.lvl":"N\xCDVEL","games.press":"APERTE \u25B6 PARA JOGAR","games.kick":"Publicado pela GoGo","games.kickShow":"Showcase","games.roster":"Lista de jogos","games.swipe":"Deslize para navegar","games.alt":"arte da capa","games.prev":"Jogo anterior","games.next":"Pr\xF3ximo jogo","svc.kicker":"03 \u2014 O que fazemos","svc.h2":"Mais que uma publisher. <em>Uma parceira.</em>","svc.p":"Role para desmontar o controle \u2014 publica\xE7\xE3o, porting e apoio a est\xFAdios, pe\xE7a por pe\xE7a.","svc.pMobile":"Publica\xE7\xE3o, porting e apoio a est\xFAdios \u2014 tudo o que a GoGo faz pelos jogos e pelas equipes por tr\xE1s deles.","svc.1.h4":"Publica\xE7\xE3o","svc.1.t":"Publica\xE7\xE3o e distribui\xE7\xE3o","svc.1.p":"Publicamos jogos indie e os levamos aos jogadores nas principais plataformas, com promo\xE7\xF5es e o melhor pre\xE7o em mente.","svc.2.h4":"Porting","svc.2.t":"Servi\xE7o de porting","svc.2.p":"Um servi\xE7o dedicado de porting para jogos de outros est\xFAdios.","svc.3.h4":"Est\xFAdios","svc.3.t":"Gest\xE3o de est\xFAdios","svc.3.p":"Gerenciamos est\xFAdios com intelig\xEAncia, planejando como um jogo pode evoluir ao longo dos anos.","svc.4.h4":"Propriedade intelectual","svc.4.t":"Propriedade intelectual","svc.4.p":"Cuidamos da PI de forma a fortalecer os est\xFAdios, para que n\xE3o percam seu maior patrim\xF4nio.","svc.5.h4":"Jogadores","svc.5.t":"Ecossistema de servi\xE7os ao jogador","svc.5.p":"Estat\xEDsticas, progresso e desempenho em todos os jogos da GoGo, em todas as plataformas.","svc.6.h4":"Criadores","svc.6.t":"Programa de Criadores","svc.6.p":"Criadores de conte\xFAdo podem se tornar parceiros da GoGo Games Interactive.","svc.6.link":"Entrar no Programa de Criadores \u2197","svc.unit":"t\xEDtulos","svc.small":"No nosso cat\xE1logo hoje","svc.meter":"Vista explodida","svc.img":"Vista explodida do controle da GoGo mostrando suas pe\xE7as internas","port.kicker":"04 \u2014 Servi\xE7o de porting","port.h2":"Jogos de outros est\xFAdios. <em>Em mais telas.</em>","port.p":"Al\xE9m da nossa pr\xF3pria publica\xE7\xE3o, a GoGo Games Interactive oferece um servi\xE7o de porting para outros jogos. Estes s\xE3o alguns dos t\xEDtulos desse line-up.","port.hint":"Continue rolando \u2192","port.hintSwipe":"Deslize \u2192","port.count":"t\xEDtulos portados","port.small":"Servi\xE7o de porting para outros jogos","port.copy":"Tem um jogo pronto que deveria estar em mais plataformas? Conte para n\xF3s \u2014 a gente cuida do resto.","port.btn":"Fale sobre porting","port.queue":"FILA DE PORTING","port.mailSubject":"Pedido de porting","about.kicker":"05 \u2014 Sobre a GoGo Games","about.h2":"Uma nova era para <em>jogadores e desenvolvedores.</em>","about.p":"Somos uma empresa de games que n\xE3o apenas publica jogos \u2014 gerenciamos est\xFAdios com intelig\xEAncia, pensando em como cada jogo pode ir mais longe ao longo dos anos. Cuidamos da propriedade intelectual para que os est\xFAdios mantenham seu maior patrim\xF4nio.","about.mission":"<b>Nossa miss\xE3o:</b> proporcionar experi\xEAncias \xFAnicas para os jogadores e construir parcerias duradouras com desenvolvedores talentosos. Seja voc\xEA um jogador em busca de novidades ou um est\xFAdio \xE0 procura de um parceiro estrat\xE9gico, estamos aqui para levar seu potencial ao m\xE1ximo.","about.dist":"Dist\xE2ncia","about.status":"Status","about.dodges":"Esquivas","about.idle":"PARADO","about.evading":"ESQUIVANDO","about.touch":"Toque perto do controle para tentar peg\xE1-lo",s1:"t\xEDtulos no cat\xE1logo",s2:"jogos portados",s3:"publishers parceiros",s4:"est\xFAdios parceiros","about.players":"Para os jogadores","about.playersP":"Para quem quer uma experi\xEAncia \xFAnica com os melhores jogos indie \u2014 com um ecossistema de servi\xE7os ao jogador para todos os jogos da GoGo, em todas as plataformas, levando os melhores jogos pelo melhor pre\xE7o.","pt.kicker":"06 \u2014 Nossos parceiros","pt.h2":"Boa companhia <em>faz bons jogos.</em>","pt.p":"Os publishers, plataformas e est\xFAdios com quem constru\xEDmos.","pt.t1":"01 \xB7 Publishers parceiros","pt.t2":"02 \xB7 Plataformas","pt.t3":"03 \xB7 Est\xFAdios parceiros","pt.platAlt":"Logos de Xbox, PlayStation, Nintendo Switch, Steam, Xsolla e Nuuvem","pt.stuAlt":"Est\xFAdios parceiros: bytteam, DarkOcean Games, Ludus Studio, Teion Games, Orube Game Studio, Over Games, Sunny Horizon, Uruca, Giant Warrior Studio, Glitch, Cyber Monkey, S.E.R.A Games Studio, Red Sea, Icy Mountain Studios, Out Zoom, Fora do Eixo, Sergames Studio, Shark, HK Games Studio, Ramires Tech Games e Forgate Games","pt.swipe":"Deslize para ver todos os est\xFAdios \u2192","sub.kicker":"07 \u2014 Envie seu jogo","sub.h2":"Tem um jogo? Encaixe-o <em>aqui.</em>","sub.lead":"Envie seu jogo ou apresenta\xE7\xE3o. Aproveite para escolher uma skin para o controle \u2014 a doca est\xE1 esperando.","sub.dock":"DOCA \xB7 PLAYER 1","sub.waiting":"AGUARDANDO","sub.docking":"ACOPLANDO","sub.ready":"PLAYER 1 PRONTO \u2713","sub.brasil":"GOGO GAMES INTERACTIVE \xB7 BRASIL","sub.skin":"Skin do controle","sub.skin1":"Grafite","sub.skin2":"\xC1rtico","sub.skin3":"Azul GoGo","sub.skin4":"Laranja GoGo","sub.badge":"Desenvolvedores \xB7 Envios abertos","sub.h3":"Envie seu jogo","sub.need":"O que voc\xEA procura?","sub.k1":"Publica\xE7\xE3o","sub.k1p":"Publica\xE7\xE3o e distribui\xE7\xE3o do seu jogo","sub.k2":"Porting","sub.k2p":"Leve um jogo pronto para mais plataformas","sub.k3":"Parceria de est\xFAdio","sub.k3p":"Parceria de longo prazo e gest\xE3o de est\xFAdio","sub.f.studio":"Est\xFAdio / seu nome","sub.f.studioPh":"Seu est\xFAdio","sub.f.game":"T\xEDtulo do jogo","sub.f.gamePh":"Seu jogo","sub.f.email":"E-mail","sub.f.emailPh":"voce@estudio.com","sub.f.link":"Link da build, trailer ou apresenta\xE7\xE3o","sub.f.msg":"Conte mais sobre o jogo","sub.f.msgPh":"G\xEAnero, plataformas, est\xE1gio, equipe\u2026","sub.send":"Enviar meu jogo","sub.sending":"Enviando\u2026","sub.sub":"Respondemos por e-mail","sub.err.required":"Este campo \xE9 obrigat\xF3rio.","sub.err.email":"Informe um e-mail v\xE1lido.","sub.err.url":"Informe um link v\xE1lido, come\xE7ando com http:// ou https://","sub.err.fix":"Corrija os campos destacados.","sub.ok":"Obrigado! Seu jogo foi enviado. Retornaremos por e-mail.","sub.fail":"N\xE3o foi poss\xEDvel enviar agora. Tente novamente ou escreva diretamente para n\xF3s.","sub.notConfigured":"O envio online ainda n\xE3o est\xE1 dispon\xEDvel. Escreva diretamente para:","sub.rate":"Muitas tentativas. Aguarde um instante e tente de novo.","sub.offline":"Sem conex\xE3o. Verifique sua internet e tente novamente.","sub.direct":"Prefere e-mail? Escreva para","sub.c.email":"E-mail","sub.c.phone":"Telefone","sub.c.creators":"Criadores","sub.c.creatorsLink":"Formul\xE1rio do Programa de Criadores \u2197","sub.c.store":"Loja","ft.line1":"Grandes jogos.","ft.line2":"V\xE1 mais longe.","ft.cta":"Envie seu jogo \u2192","ft.contact":"Contato","ft.follow":"Siga","ft.explore":"Explore","ft.store":"Loja oficial \u2197","ft.creators":"Programa de Criadores \u2197","ft.direct":"GoGo Direct \xB7 1\xAA edi\xE7\xE3o \u25B6","ft.tag":"Jogos \xB7 Publica\xE7\xE3o \xB7 Porting \xB7 Est\xFAdios","ft.top":"Voltar ao topo \u2191","ft.rights":"\xA9 2026 GoGo Games Interactive","vm.close":"Fechar v\xEDdeo","vm.title":"GoGo Direct \u2014 primeira edi\xE7\xE3o"},h_={en:Qw,pt:tT},nr="en",d_=[];function f_(){try{let s=new URLSearchParams(location.search).get("lang");if(s&&ap.includes(s.toLowerCase().slice(0,2)))return s.toLowerCase().slice(0,2)}catch{}try{let s=localStorage.getItem(u_);if(s&&ap.includes(s))return s}catch{}return"en"}var Qo=()=>nr,Gt=s=>h_[nr][s]??h_.en[s]??s,ul=s=>d_.push(s);function eT(s=document){s.querySelectorAll("[data-i18n]").forEach(t=>t.textContent=Gt(t.dataset.i18n)),s.querySelectorAll("[data-i18n-html]").forEach(t=>t.innerHTML=Gt(t.dataset.i18nHtml)),s.querySelectorAll("[data-i18n-attr]").forEach(t=>{t.dataset.i18nAttr.split(";").forEach(e=>{let[n,i]=e.split(":").map(r=>r.trim());n&&i&&t.setAttribute(n,Gt(i))})})}function lp(s,{persist:t=!0}={}){ap.includes(s)||(s="en"),nr=s,document.documentElement.lang=jw[nr],document.title=Gt("meta.title");let e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",Gt("meta.desc")),document.querySelectorAll('meta[property="og:title"],meta[name="twitter:title"]').forEach(i=>i.setAttribute("content",Gt("meta.title"))),document.querySelectorAll('meta[property="og:description"],meta[name="twitter:description"]').forEach(i=>i.setAttribute("content",Gt("meta.desc")));let n=document.querySelector('meta[property="og:locale"]');if(n&&n.setAttribute("content",nr==="pt"?"pt_BR":"en_US"),eT(),document.querySelectorAll(".lang button").forEach(i=>{let r=i.dataset.lang===nr;i.classList.toggle("is-on",r),i.setAttribute("aria-pressed",r)}),t)try{localStorage.setItem(u_,nr)}catch{}d_.forEach(i=>i(nr))}Qe.registerPlugin(Ht);var lt=(s,t=document)=>t.querySelector(s),ye=(s,t=document)=>[...t.querySelectorAll(s)],Ei=(s,t,e)=>Math.min(e,Math.max(t,s)),ea=(s,t,e)=>s+(t-s)*e,nT=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,L_=(s,t=0)=>s.toLocaleString(Qo()==="pt"?"pt-BR":"en-US",{minimumFractionDigits:t,maximumFractionDigits:t}),gl=matchMedia("(hover:none),(pointer:coarse)").matches,bn=matchMedia("(prefers-reduced-motion:reduce)").matches,D_="(max-width:900px)",Re=matchMedia(D_).matches,iT=location.search.includes("rt")?1:.05,li=s=>String(s).padStart(2,"0");document.documentElement.classList.toggle("is-m",Re);document.documentElement.classList.toggle("is-touch",gl);var p_;addEventListener("resize",()=>{clearTimeout(p_),p_=setTimeout(()=>{matchMedia(D_).matches!==Re&&location.reload()},350)});var Wr=[];lp(f_(),{persist:!1});ye(".lang button").forEach(s=>s.addEventListener("click",()=>{lp(s.dataset.lang);let t=new URL(location.href);t.searchParams.set("lang",s.dataset.lang),history.replaceState(null,"",t)}));function U_(s){let t=e=>[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(r=>{if(r)if(/^\s+$/.test(r))i.append(" ");else{let o=document.createElement("span");o.className="w",o.innerHTML=`<span>${r}</span>`,i.append(o)}}),n.replaceWith(i)}else t(n)});t(s)}ye(".split-words").forEach(U_);ul(()=>ye(".split-words").forEach(s=>{U_(s),Qe.set(ye(".w>span",s),{clearProps:"all"})}));function sT(s,t=7){let e=0,n="",i=t*97+7,r=()=>(i=(i*9301+49297)%233280)/233280;for(;e<250;){let o=1+Math.floor(r()*3);r()>.35&&(n+=`<rect x="${e}" y="${r()>.8?14:0}" width="${o}" height="40"/>`),e+=o+1}s.setAttribute("viewBox","0 0 250 40"),s.setAttribute("preserveAspectRatio","none"),s.innerHTML=n}var ci=new Eg({lerp:.09,smoothWheel:!bn&&!Re,syncTouch:!1});ci.on("scroll",Ht.update);Qe.ticker.add(s=>ci.raf(s*1e3));Qe.ticker.lagSmoothing(0);ci.stop();var rT=(s,t=1.8)=>ci.scrollTo(s,{duration:bn?0:t,offset:Re?-64:0});document.addEventListener("click",s=>{let t=s.target.closest('a[href^="#"]');if(!t||t.getAttribute("href").length<2)return;let e=lt(t.getAttribute("href"));e&&(s.preventDefault(),Sh(!1),rT(e))});var pl=lt("#burger"),na=lt("#mnav"),Ts=!1;function vp(){pl.setAttribute("aria-label",Gt(Ts?"nav.menuClose":"nav.menuOpen"))}function oT(){Ts=!0,na.hidden=!1,requestAnimationFrame(()=>na.classList.add("is-open")),pl.setAttribute("aria-expanded","true"),document.body.classList.add("menu-open"),ci.stop(),vp(),lt("a",na).focus({preventScroll:!0})}function Sh(s=!0){Ts&&(Ts=!1,na.classList.remove("is-open"),pl.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-open"),!document.body.classList.contains("is-loading")&&oa.hidden&&ci.start(),vp(),setTimeout(()=>!Ts&&(na.hidden=!0),380),s&&pl.focus({preventScroll:!0}))}pl.addEventListener("click",()=>Ts?Sh():oT());na.addEventListener("click",s=>{s.target.closest("a")||Sh()});addEventListener("keydown",s=>s.key==="Escape"&&Ts&&Sh());ul(vp);var le=null;try{le=new lh(lt(".gp-canvas"),{mobile:Re})}catch(s){console.warn("WebGL unavailable \u2014 using static fallback",s),lt(".gp-canvas").remove(),document.documentElement.classList.add("no-webgl")}addEventListener("resize",()=>le&&le.resize());var rn={x:innerWidth/2,y:innerHeight/2,nx:0,ny:0,active:!1};addEventListener("pointermove",s=>{s.pointerType!=="touch"&&(rn.x=s.clientX,rn.y=s.clientY,rn.nx=s.clientX/innerWidth*2-1,rn.ny=s.clientY/innerHeight*2-1,rn.active=!0)});var dl=lt(".cursor");if(!gl&&dl){document.documentElement.classList.add("has-cursor");let s=lt(".cursor-dot"),t=lt(".cursor-ring"),e=lt(".cursor-label"),n=rn.x,i=rn.y;Qe.ticker.add(()=>{n=ea(n,rn.x,.18),i=ea(i,rn.y,.18),s.style.transform=`translate(${rn.x}px,${rn.y}px)`,t.style.transform=`translate(${n}px,${i}px)`}),addEventListener("pointerover",r=>{let o=r.target.closest("[data-cursor]");o?(e.textContent=o.dataset.cursor,dl.classList.add("is-label")):dl.classList.remove("is-label")}),addEventListener("pointerdown",()=>dl.classList.add("is-down")),addEventListener("pointerup",()=>dl.classList.remove("is-down")),ye(".magnetic").forEach(r=>{r.addEventListener("pointermove",o=>{let a=r.getBoundingClientRect();Qe.to(r,{x:(o.clientX-a.left-a.width/2)*.25,y:(o.clientY-a.top-a.height/2)*.35,duration:.4})}),r.addEventListener("pointerleave",()=>Qe.to(r,{x:0,y:0,duration:.7,ease:"elastic.out(1,.4)"}))})}var N_=[...rp,jo],sa=N_.length,aT=(s,t)=>`${li(t+1)} \u2014 ${s.video?Gt("games.kickShow"):Gt("games.kick")}`;function lT(s){if(s.video)return`<button type="button" class="btn btn--solid" data-video="${s.video}" data-cursor="play"><span>${Gt("link.video")}</span><i aria-hidden="true">\u25B6</i></button>
      <a class="btn btn--line" href="${op}" target="_blank" rel="noopener"><span>${Gt("link.channel")}</span><i aria-hidden="true">\u2197</i></a>`;let t=hl(s);return t?`<a class="btn btn--solid" href="${t}" target="_blank" rel="noopener" data-cursor="play"><span>${Gt("link.steamLong")}</span><i aria-hidden="true">\u25B6</i></a>`:`<span class="btn btn--line is-disabled" aria-disabled="true" data-todo="official-link"><span>${Gt("link.soon")}</span></span>`}var O_=s=>s.video?Gt("vm.title"):`${s.name} \u2014 ${Gt("games.alt")}`;function F_(){ye("[data-steam]").forEach(t=>{let e=ch.find(i=>i.id===t.dataset.steam),n=e&&hl(e);n&&(t.href=n)}),ye("[data-game]").forEach(t=>{let e=ch.find(i=>i.id===t.dataset.game),n=e&&hl(e);n&&(t.href=n)});let s=lt("#port-mail");s&&(s.href=`mailto:${hh}?subject=${encodeURIComponent(Gt("port.mailSubject"))}`)}F_();Wr.push(F_);var Eh={games:{led:Jo,list:rp,card:"list",stat:["12",""]},publishing:{led:ah,list:[jo],card:"direct",stat:["08",""]},porting:{led:"#ffffff",list:ch,card:"list",stat:["04",""]},studios:{led:Jo,list:[],card:"studios",stat:["20","+"]}},mh=Object.keys(Eh),Be={mode:"games",idx:0,paused:!1,t:0,cardT:0},uh=lt(".hc-img"),cT=lt(".hc-name"),hT=lt(".hc-idx"),uT=lt(".hc-trailer"),dT=lt(".hc-find"),m_=lt(".stat-num"),fT=lt(".stat-suf"),pT=lt(".stat-label"),cp={v:12};function B_(s,t){let e=Eh[s];if(e.card==="direct")return{src:jo.src,alt:Gt("vm.title"),name:Gt("hero.directName"),a:{href:jo.url,label:Gt("hero.watch"),video:jo.video},b:{href:op,label:Gt("hero.channel")},seed:11,fit:"cover-wide"};if(e.card==="studios")return{src:"assets/img/studios.webp",alt:Gt("pt.stuAlt"),name:Gt("hero.studiosName"),a:{href:"#partners",label:Gt("hero.meet")},b:{href:"#submit",label:Gt("hero.submitDown")},seed:23,fit:"contain"};let n=e.list[t%e.list.length],i=hl(n);return{src:n.src,alt:O_(n),name:n.name,a:i?{href:i,label:Gt("link.steam")}:{soon:!0,label:Gt("link.soon")},b:null,seed:t+2,fit:"cover"}}function k_(s,t,e,n=!0){hT.textContent=`${li(t+1)}/${li(e)}`,uh.src=s.src,uh.alt="",uh.dataset.fit=s.fit,lt(".hc-link").setAttribute("aria-label",s.alt),cT.textContent=s.name;let i=(r,o,a)=>{if(r.hidden=!o,!o)return;if(r.textContent=o.label,r.removeAttribute("data-video"),r.classList.toggle("is-disabled",!!o.soon),o.soon){r.removeAttribute("href"),r.setAttribute("aria-disabled","true");return}r.removeAttribute("aria-disabled"),r.href=o.href,o.video&&(r.dataset.video=o.video);let l=/^https?:/.test(o.href)&&!o.video;r.target=l?"_blank":"",r.rel=l?"noopener":""};i(uT,s.a),i(dT,s.b),sT(lt(".barcode"),s.seed),n&&!bn&&Qe.fromTo(uh,{clipPath:"inset(0 0 100% 0)",scale:1.08},{clipPath:"inset(0 0 0% 0)",scale:1,duration:.8,ease:"expo.out"})}function yp(s,{user:t=!1,keepIdx:e=!1,animate:n=!0}={}){let i=Eh[s];Be.mode=s,e||(Be.idx=0,Be.t=0,Be.cardT=0),ye(".menu button").forEach(l=>{let c=l.dataset.mode===s;l.classList.toggle("is-on",c),l.setAttribute("aria-pressed",c)}),lt(".mm-val").textContent=`${li(mh.indexOf(s)+1)}/04`;let r=lt(".menu-desc");r.textContent=Gt(`hero.desc.${s}`),n&&!bn&&Qe.fromTo(r,{opacity:0,y:6},{opacity:1,y:0,duration:.5,ease:"expo.out"}),pT.innerHTML=Gt(`hero.stat.${s}`),fT.textContent=i.stat[1];let o=parseFloat(i.stat[0]);n&&!bn?(Qe.to(cp,{v:o,duration:.9,ease:"power3.out",onUpdate:()=>m_.textContent=li(Math.round(cp.v))}),Qe.fromTo(".stat-pill",{scale:.92},{scale:1,duration:.8,ease:"elastic.out(1,.5)"})):(cp.v=o,m_.textContent=li(o));let a=i.card==="list"?i.list.length:1;k_(B_(s,Be.idx),Be.idx,a,n),le&&(le.setLed(i.led),n&&le.press(),t&&!bn&&le.doSpin())}ye(".menu button").forEach(s=>s.addEventListener("click",()=>yp(s.dataset.mode,{user:!0})));lt(".panel-pause").addEventListener("click",s=>{Be.paused=!Be.paused,s.currentTarget.setAttribute("aria-pressed",Be.paused)});lt(".s-hero").addEventListener("click",s=>{!s.target.closest(".hero-panel,.hero-card,.hero-brand,.nav,a,button")&&le&&!bn&&(le.doFlip(),le.press())});function mT(s){if(Be.paused||bn||document.hidden)return;let t=Eh[Be.mode];Be.t+=s;let e=7;lt(".mm-bar i").style.transform=`scaleX(${Ei(Be.t/e,0,1)})`,t.card==="list"&&(Be.cardT+=s,Be.cardT>3.4&&(Be.cardT=0,Be.idx=(Be.idx+1)%t.list.length,k_(B_(Be.mode,Be.idx),Be.idx,t.list.length))),Be.t>=e&&yp(mh[(mh.indexOf(Be.mode)+1)%mh.length])}Wr.push(()=>yp(Be.mode,{keepIdx:!0,animate:!1}));var ia=lt(".rain-canvas"),Fe=ia.getContext("2d"),z_=[],H_=!0;function V_(){let s=ia.getBoundingClientRect(),t=Math.min(devicePixelRatio,Re?1.25:2);ia.width=s.width*t,ia.height=s.height*t,Fe.setTransform(t,0,0,t,0,0),z_=Array.from({length:Re?28:90},()=>({x:Math.random()*s.width,y:Math.random()*s.height,z:Math.random(),k:Math.floor(Math.random()*5),a:Math.random()*6.28}))}V_();addEventListener("resize",V_);var dh=0;function gT(s){if(!H_||bn||(dh+=s,Re&&dh<1/30))return;let t=dh;dh=0;let e=ia.clientWidth,n=ia.clientHeight;Fe.clearRect(0,0,e,n);let i=Be.paused?.15:1,r=Math.abs(ci.velocity||0);Fe.lineCap="round";for(let o of z_){let a=(14+o.z*46)*(1+r*.08)*i;o.x+=a*t*.55+rn.nx*o.z*12*t,o.y+=a*t,o.a+=t*(.2+o.z*.6)*i,(o.y>n+30||o.x>e+30)&&(o.y=-30,o.x=Math.random()*(e+200)-200);let l=5+o.z*13;switch(Fe.save(),Fe.translate(o.x,o.y),Fe.rotate(o.a),Fe.strokeStyle=`rgba(255,255,255,${.1+o.z*.32})`,Fe.lineWidth=.8+o.z*1.1,Fe.beginPath(),o.k){case 0:Fe.rect(-l/2,-l/2,l,l);break;case 1:Fe.arc(0,0,l/2,0,6.283);break;case 2:Fe.moveTo(-l/2,0),Fe.lineTo(l/2,0),Fe.moveTo(0,-l/2),Fe.lineTo(0,l/2);break;case 3:Fe.moveTo(0,-l/2),Fe.lineTo(l/2,l/2),Fe.lineTo(-l/2,l/2),Fe.closePath();break;default:Fe.moveTo(-l/2,-l/2),Fe.lineTo(l/2,l/2),Fe.moveTo(l/2,-l/2),Fe.lineTo(-l/2,l/2)}Fe.stroke(),Fe.restore()}}var g_=lt(".gs-bg"),__=lt("#gs-cards"),x_=lt("#gs-chapters"),v_=lt("#gs-roster"),bp=[],Mp=[],G_=[],dp=[],ra=-1;function W_(){g_.innerHTML=__.innerHTML=x_.innerHTML=v_.innerHTML="",lt(".osd-of").textContent=`/ ${li(sa)}`,N_.forEach((t,e)=>{g_.insertAdjacentHTML("beforeend",`<img class="gs-bgimg" src="${t.src}" alt="" aria-hidden="true" decoding="async" loading="lazy">`),__.insertAdjacentHTML("beforeend",`<div class="gs-card" style="--ar:${t.w/t.h}"><img src="${t.src}" alt="${O_(t)}" width="${t.w}" height="${t.h}" decoding="async" loading="lazy"><i class="gs-shine"></i></div>`),x_.insertAdjacentHTML("beforeend",`<article class="gs-ch" aria-hidden="true"><span class="gs-kick mono">${aT(t,e)}</span><h3>${t.video?Gt("hero.directName").replace(" \xB7 ","<br>"):t.name}</h3><div class="gs-actions">${lT(t)}</div></article>`),v_.insertAdjacentHTML("beforeend",`<li><button type="button" data-i="${e}" aria-label="${t.video?Gt("hero.directName"):t.name}" data-cursor="go"><img src="${t.src}" alt="" width="${t.w}" height="${t.h}" loading="lazy" decoding="async"><b class="mono">${li(e+1)}</b></button></li>`)}),bp=ye(".gs-bgimg"),Mp=ye(".gs-card"),G_=ye(".gs-ch"),dp=ye("#gs-roster button"),dp.forEach(t=>t.addEventListener("click",()=>{let e=+t.dataset.i,n=Ce.games,i=.13+(e+.5)/sa*.78;ci.scrollTo(n.start+i*(n.end-n.start),{duration:bn?0:1.4})}));let s=ra;ra=-1,s>=0&&X_(s)}function X_(s){s!==ra&&(ra=s,bp.forEach((t,e)=>t.classList.toggle("is-on",e===s)),Mp.forEach((t,e)=>{t.classList.toggle("is-active",e===s),t.classList.toggle("is-past",e<s)}),G_.forEach((t,e)=>{t.classList.toggle("is-active",e===s),t.classList.toggle("is-past",e<s),t.setAttribute("aria-hidden",e!==s)}),dp.forEach((t,e)=>{t.classList.toggle("is-on",e===s),t.setAttribute("aria-current",e===s?"true":"false")}),lt(".osd-idx").textContent=lt(".osd-game").textContent=lt(".osd-lvl").textContent=li(s+1))}W_();Wr.push(W_);if(!Re){let s="";for(let t=0;t<3;t++)for(let e=1;e<=18;e++)s+=`<span class="${e%3===1?"major":""}">${li((e-1)%sa+1)}</span>`;lt(".compass-tape").innerHTML=s}var oa=lt("#vmodal"),gh=null;function _T(s,t){gh=t||document.activeElement,oa.hidden=!1,lt(".vm-frame").innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${s}?autoplay=1&rel=0" title="${Gt("vm.title")}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen"></iframe>`,document.body.classList.add("vm-open"),ci.stop(),lt(".vm-close").focus()}function Sp(){oa.hidden=!0,lt(".vm-frame").innerHTML="",document.body.classList.remove("vm-open"),!document.body.classList.contains("is-loading")&&!Ts&&ci.start(),gh&&gh.focus&&gh.focus({preventScroll:!0})}document.addEventListener("click",s=>{let t=s.target.closest("[data-video]");t?(s.preventDefault(),_T(t.dataset.video,t)):s.target===oa&&Sp()});lt(".vm-close").addEventListener("click",Sp);addEventListener("keydown",s=>s.key==="Escape"&&!oa.hidden&&Sp());var vh=ye(".callouts .callout"),_h=lt(".anat-lines");_h.innerHTML=vh.map(()=>'<path/><circle r="4"/><circle class="ring" r="9"/>').join("");if(Re){let s=document.createElement("div");s.className="svc-list only-m",vh.forEach(e=>{let n=e.cloneNode(!0);n.removeAttribute("data-anchor"),s.appendChild(n)}),lt(".s-anat").appendChild(s);let t=ye(".callout",s);t.forEach((e,n)=>{e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.classList.toggle("is-open",n===0),e.setAttribute("aria-expanded",n===0);let i=r=>{if(r.target.closest("a"))return;let o=!e.classList.contains("is-open");t.forEach(a=>{a.classList.toggle("is-open",a===e&&o),a.setAttribute("aria-expanded",a===e&&o)})};e.addEventListener("click",i),e.addEventListener("keydown",r=>(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),i(r)))})}var ir=lt(".sense-canvas"),fe=ir.getContext("2d");function q_(){let s=Math.min(devicePixelRatio,2);ir.width=ir.clientWidth*s,ir.height=ir.clientHeight*s,fe.setTransform(s,0,0,s,0,0)}q_();addEventListener("resize",q_);var Ae={x:0,y:0,vx:0,vy:0,count:0,alert:!1,was:!1},Y_=!1,fp=!1,pp=null,y_=0,xT=lt(".s-sense"),vT=s=>{(s.pointerType==="touch"||gl)&&(pp={x:s.clientX,y:s.clientY},clearTimeout(y_),y_=setTimeout(()=>pp=null,1600))};["pointerdown","pointermove"].forEach(s=>xT.addEventListener(s,vT,{passive:!0}));var $_=()=>gl?pp:rn.active?rn:null;new IntersectionObserver(([s])=>fp=s.isIntersecting).observe(lt(".s-sense"));var yT=(s,t)=>Math.sin(s*1.3+t*.7)*.5+Math.sin(s*.37-t*1.1+2)*.7+Math.sin(s*2.1+t*2.7)*.2;function bT(s){let t=ir.clientWidth,e=ir.clientHeight,n=performance.now()/1e3;fe.clearRect(0,0,t,e);let i=Re?18:34,r=Re?36:70,o=n*.25%1;for(let u=0;u<i;u++){let m=u/i,_=e*.45+Math.pow(m,1.6)*e*.62,p=.5+m*1.6,g=1-Math.min(1,Math.abs(m-o)*8);for(let b=0;b<r;b++){let M=b/(r-1)-.5,x=t/2+M*t*p,T=_-yT(M*8,m*6+n*.15)*26*(1-m*.3),E=.08+m*.3+g*.6;fe.fillStyle=g>.1?`rgba(238,${110-g*30},${40-g*20},${E})`:`rgba(47,171,223,${E*.7})`,fe.fillRect(x,T,1.4+m*1.2,1.4+m*1.2)}}if(!s)return;let{x:a,y:l}=s,c=ir.getBoundingClientRect().top,h=l-c;for(let u=1;u<=4;u++)fe.strokeStyle=`rgba(255,255,255,${.14-u*.02})`,fe.lineWidth=1,fe.beginPath(),fe.arc(a,h,70*u+Math.sin(n*2+u)*3,0,6.283),fe.stroke();let f=fe.createConicGradient?fe.createConicGradient(n*2.2,a,h):null;f&&(f.addColorStop(0,"rgba(47,171,223,.30)"),f.addColorStop(.12,"rgba(47,171,223,0)"),f.addColorStop(1,"rgba(47,171,223,0)"),fe.fillStyle=f,fe.beginPath(),fe.arc(a,h,290,0,6.283),fe.fill());let d=$_();if(d){let u=d.y-c,m=Math.hypot(d.x-a,u-h),_=m<260;if(fe.setLineDash([4,6]),fe.strokeStyle=_?"rgba(238,91,28,.95)":"rgba(255,255,255,.35)",fe.beginPath(),fe.moveTo(a,h),fe.lineTo(d.x,u),fe.stroke(),fe.setLineDash([]),fe.strokeStyle=_?"#ee5b1c":"rgba(255,255,255,.6)",fe.strokeRect(d.x-14,u-14,28,28),_){let p=Math.atan2(u-h,d.x-a);fe.strokeStyle="#ee5b1c",fe.lineWidth=4,fe.beginPath(),fe.arc(a,h,120,p-.5,p+.5),fe.stroke(),fe.lineWidth=1}fe.fillStyle="#fff",fe.font='11px "Geist Mono", monospace',fe.fillText(`${L_(m/40,1)} u`,d.x+20,u-18)}}var mp=lt(".gal-track"),MT=ye(".gc-img img"),b_=lt(".mq-track"),xh=0,ta=0;ye(".sw").forEach(s=>s.addEventListener("click",()=>{ye(".sw").forEach(t=>{t.classList.toggle("is-on",t===s),t.setAttribute("aria-checked",t===s)}),le&&(le.setColor(s.dataset.color),le.press())}));var wi=lt("#submit-form"),M_=lt("#form-note"),fh=lt("#submit-btn"),Z_=lt(".kit.is-on").dataset.need,yh=lt(".kit.is-on").dataset.needI18n,ST=(document.querySelector('meta[name="gogo-form-endpoint"]')||{}).content||"/api/submit",hp=!1,S_=0,E_=crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now());ye(".kit").forEach(s=>s.addEventListener("click",()=>{ye(".kit").forEach(t=>{t.classList.toggle("is-on",t===s),t.setAttribute("aria-checked",t===s)}),Z_=s.dataset.need,yh=s.dataset.needI18n,lt(".cta-kit").textContent=Gt(yh),le&&le.press()}));Wr.push(()=>{lt(".cta-kit").textContent=Gt(yh),wi.dataset.invalid&&bh(!0)});lt(".cta-kit").textContent=Gt(yh);var gp={studio:s=>s?"":"sub.err.required",game:s=>s?"":"sub.err.required",email:s=>s?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)?"":"sub.err.email":"sub.err.required",link:s=>{if(!s)return"";try{let t=new URL(s);return/^https?:$/.test(t.protocol)&&t.hostname.includes(".")?"":"sub.err.url"}catch{return"sub.err.url"}}};function bh(s=!0){let t=null,e=!0;return Object.keys(gp).forEach(n=>{let i=wi.elements[n],r=lt(`#e-${n}`),o=gp[n](i.value.trim());i.setAttribute("aria-invalid",o?"true":"false"),r.textContent=s&&o?Gt(o):"",o&&(e=!1,t=t||i)}),wi.dataset.invalid=e?"":"1",{ok:e,first:t}}Object.keys(gp).forEach(s=>{let t=wi.elements[s];t.addEventListener("blur",()=>t.value&&bh(!0)),t.addEventListener("input",()=>{t.getAttribute("aria-invalid")==="true"&&bh(!0)})});var _p=null,J_="",K_=()=>{M_.className=`form-note ${J_}`,M_.innerHTML=_p?_p():""},ws=(s,t="")=>{_p=typeof s=="function"?s:null,J_=t,K_()};Wr.push(K_);var up=()=>`<a href="mailto:${hh}">${hh}</a>`;wi.addEventListener("submit",async s=>{if(s.preventDefault(),hp)return;if(Date.now()<S_)return ws(()=>Gt("sub.ok"),"is-ok");let{ok:t,first:e}=bh(!0);if(!t){ws(()=>Gt("sub.err.fix"),"is-err"),e.focus();return}if(wi.elements.website.value)return;hp=!0,fh.disabled=!0,fh.classList.add("is-loading"),lt(".cta-label").textContent=Gt("sub.sending"),ws(""),le&&le.press();let n={need:Z_,lang:Qo(),idempotencyKey:E_,studio:wi.elements.studio.value.trim(),game:wi.elements.game.value.trim(),email:wi.elements.email.value.trim(),link:wi.elements.link.value.trim(),message:wi.elements.msg.value.trim()},i=new AbortController,r=setTimeout(()=>i.abort(),15e3);try{let o=await fetch(ST,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),signal:i.signal}),a={};try{a=await o.json()}catch{}o.ok&&a.ok===!0?(ws(()=>Gt("sub.ok"),"is-ok"),wi.reset(),ye(".field input,.field textarea").forEach(l=>l.setAttribute("aria-invalid","false")),S_=Date.now()+3e4,E_=crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now()),le&&!bn&&le.doFlip()):o.status===429?ws(()=>Gt("sub.rate"),"is-err"):o.status===404||o.status===405||o.status===501||o.status===503||a.error==="not_configured"?ws(()=>`${Gt("sub.notConfigured")} ${up()}`,"is-err"):o.status===400&&a.fields?(Object.entries(a.fields).forEach(([l,c])=>{let h=lt(`#e-${l}`);h&&(h.textContent=Gt(c))}),ws(()=>Gt("sub.err.fix"),"is-err")):ws(()=>`${Gt("sub.fail")} ${up()}`,"is-err")}catch{ws(()=>navigator.onLine===!1?Gt("sub.offline"):`${Gt("sub.fail")} ${up()}`,"is-err")}finally{clearTimeout(r),hp=!1,fh.disabled=!1,fh.classList.remove("is-loading"),lt(".cta-label").textContent=Gt("sub.send")}});var j_=0,ET=0,Ce={};Ce.hero=Ht.create({trigger:".s-hero",start:"top top",end:"bottom top",onToggle:s=>H_=s.isActive});Ce.games=Ht.create({trigger:".s-games",start:"top top",end:`+=${sa*(Re?62:72)}%`,pin:".gs-stage",scrub:!0,onUpdate:s=>j_=s.progress});Ce.anat=Ht.create({trigger:".s-anat",start:"top top",end:`+=${Re?260:380}%`,pin:".anat-stage",scrub:!0,onUpdate:s=>ET=s.progress});Ce.gal=Ht.create({trigger:".s-gal",start:"top top",end:()=>"+="+Math.max(1,mp.scrollWidth-innerWidth),pin:".gal-stage",scrub:!0,invalidateOnRefresh:!0,onUpdate:s=>xh=s.progress});Ce.sense=Re?Ht.create({trigger:".s-sense",start:"top bottom",end:"bottom top"}):Ht.create({trigger:".s-sense",start:"top top",end:"+=120%",pin:".sense-stage",onToggle:s=>Y_=s.isActive});Ce.partners=Ht.create({trigger:".s-partners",start:"top 90%",end:"top 20%"});Ce.land=Ht.create({trigger:"#pad",start:"center bottom",end:"center 58%"});Ce.all=Ht.create({start:0,end:"max"});Re&&(lt(".buy-right").dataset.theme="light");var w_=null,T_=0;function wT(s){if(s-T_<100)return;T_=s;let t=document.elementsFromPoint(innerWidth/2,72).map(n=>n===document.body?null:n.closest("[data-theme]")).find(n=>n&&n!==document.body);if(!t||t===w_)return;w_=t;let e=t.dataset.theme;document.body.dataset.theme=e,document.body.classList.toggle("theme-light",e==="light"),document.body.classList.toggle("theme-dark",e==="dark")}ye("[data-section]").forEach(s=>Ht.create({trigger:s,start:"top center",end:"bottom center",onToggle:t=>t.isActive&&ye("[data-nav]").forEach(e=>{let n=e.dataset.nav===s.dataset.section;e.classList.toggle("is-active",n),n?e.setAttribute("aria-current","true"):e.removeAttribute("aria-current")})}));bn||(ye(".split-words").forEach(s=>Qe.from(ye(".w>span",s),{yPercent:110,duration:1.1,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:s,start:"top 88%",once:!0}})),Qe.from(".ft-word span",{yPercent:100,duration:1.2,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:".footer",start:"top 80%",once:!0}}),Qe.from(".pt-tile",{y:50,opacity:0,duration:1.1,ease:"expo.out",stagger:.12,scrollTrigger:{trigger:".pt-grid",start:"top 88%",once:!0}}));ye("[data-count]").forEach(s=>{let t=+s.dataset.count;s.textContent=t,!bn&&Ht.create({trigger:s,start:"top 92%",once:!0,onEnter:()=>{let e={v:0};s.textContent=0,Qe.to(e,{v:t,duration:1.6,ease:"power3.out",onUpdate:()=>s.textContent=Math.round(e.v),onComplete:()=>s.textContent=t})}})});var TT=()=>{let s=Re;return[{at:["hero",0],x:Qo()==="pt"?.3:.255,y:Qo()==="pt"?-.23:-.17,s:Qo()==="pt"?.31:.37,yaw:-.55,tilt:.34,pitch:.04,prop:1},{at:["hero",.6],x:.05,y:.05,s:.4,yaw:-.2,tilt:.26},{at:["games",0],x:0,y:0,s:s?.8:.42,yaw:0,tilt:.04,pitch:0,lens:0},{at:["games",.05],s:s?1.4:.9,lens:1},{at:["games",.12],s:s?44:26,lens:1},{at:["games",.13],vis:0},{at:["games",.9],vis:0},{at:["games",.91],vis:1,s:s?44:26,lens:1},{at:["games",.98],s:s?.9:.46,lens:0,yaw:.2,tilt:.1},{at:["anat",0],x:0,y:s?.06:.1,s:s?.62:.36,yaw:.55,tilt:.42,explode:0,shadow:.35},{at:["anat",.25],yaw:.8,tilt:.46},{at:["anat",.6],yaw:.95,tilt:.55,explode:1,s:s?.46:.3},{at:["anat",.85],yaw:.6,tilt:.52,explode:1},{at:["anat",1],yaw:.2,tilt:.3,explode:0,shadow:0},{at:["gal",0],x:-.44,y:.41,s:s?.15:.075,yaw:.5,tilt:.3,pitch:.1},{at:["gal",1],x:.44,y:.41},{at:["sense",0],x:s?0:.14,y:s?.12:.04,s:s?.44:.28,yaw:6.28+.4,tilt:.36},{at:["sense",1],x:s?0:.14,y:s?.12:.04},{at:["partners",0],x:s?0:.14,y:s?.12:.04},{at:["partners",1],y:1.45,tilt:.7,yaw:7.6},{at:["land",0],anchor:"pad",lift:1.2,s:s?.6:.32,yaw:.5,tilt:.55,pitch:0,prop:1,shadow:.1,pad:1,glow:1},{at:["land",.75],lift:.1,prop:1,shadow:.4},{at:["land",1],lift:0,prop:.4,shadow:.5,glow:0}]},Q_={x:0,y:0,s:.3,yaw:0,tilt:.3,pitch:0,roll:0,explode:0,prop:1,shadow:0,lift:0,lens:0,vis:1,pad:0,glow:0,anchor:null},ki=[];function wh(){let s={...Q_};ki=TT().filter(t=>Ce[t.at[0]]).map(t=>{let e=Ce[t.at[0]],n={...s,...t};return n.pos=e.start+t.at[1]*(e.end-e.start),s=n,n}).sort((t,e)=>t.pos-e.pos)}Ht.addEventListener("refresh",wh);ul(wh);var tx=lt("#pad");function AT(){let s=tx.getBoundingClientRect();return{x:s.left+s.width/2-innerWidth/2,y:s.top+s.height*.56-innerHeight/2,s:Math.min(s.width*.78,s.height*1.1)}}function ph(s,t,e){let n={...s};return s.anchor==="pad"&&(n.s=e.s/t,n.x=e.x/innerWidth,n.y=(e.y-(.3+s.lift*.16)*e.s*.55)/innerHeight),n}var A_=["x","y","s","yaw","tilt","pitch","explode","prop","shadow","lift","lens","vis","glow"],Me={...Q_,x:.2,y:.8,s:.06,yaw:-4.2,tilt:.1,vis:1},C_=performance.now(),R_=0,CT=lt(".gs-view"),RT=lt(".gs-pre"),PT=lt(".hero-m-spacer"),IT=lt(".about-m-spacer"),P_=lt(".svc-list"),Le={osdScore:lt(".osd-score"),osdTc:lt(".osd-tc"),tape:lt(".compass-tape"),horizon:lt(".osd-horizon"),gsProg:lt(".gs-progress i"),amBar:lt(".am-bar i"),amVal:lt(".am-val"),flFill:lt(".fl-fill"),flR:lt(".fl-r"),railI:lt(".scroll-rail i"),rail:lt(".rail-alt"),srDist:lt(".sr-dist"),srStatus:lt(".sr-status"),srCount:lt(".sr-count"),pz:lt(".pz-status"),link:lt(".link-layer"),hero:lt(".hero-link"),heroDot:lt(".hero-link-dot"),pill:lt(".stat-pill")};function ex(){let s=performance.now(),t=Math.min(iT,(s-C_)/1e3);C_=s;let e=scrollY,n=Re?innerWidth:Math.min(innerWidth,innerHeight*1.5),i=AT();ki.length||wh();let r;if(e<=ki[0].pos)r=ph(ki[0],n,i);else if(e>=ki[ki.length-1].pos)r=ph(ki[ki.length-1],n,i);else{let m=0;for(;ki[m+1].pos<e;)m++;let _=ph(ki[m],n,i),p=ph(ki[m+1],n,i),g=nT(Ei((e-_.pos)/Math.max(1,p.pos-_.pos),0,1));r={},A_.forEach(b=>r[b]=b==="s"?Math.exp(ea(Math.log(_.s),Math.log(p.s),g)):ea(_[b],p[b],g)),r.vis=p.vis<.5||_.vis<.5?Math.min(_.vis,p.vis):1}let o=Ei(1-e/(innerHeight*.6),0,1),a=.3+.7*o,l=s/1e3;if(Re){if(e<Ce.hero.end-4){let m=PT.getBoundingClientRect();r.x=0,r.y=(m.top+m.height/2-innerHeight/2)/innerHeight,r.s=Math.min(innerWidth*.84,m.height*1.5)/n,r.vis=m.bottom>-40&&m.top<innerHeight+40?1:0}else if(fp){let m=IT.getBoundingClientRect();r.x=0,r.y=(m.top+m.height/2-innerHeight/2)/innerHeight,r.s=Math.min(innerWidth*.6,m.height*1.5)/n,r.vis=1}}else r.x+=(rn.nx*.03+Math.sin(l*.9)*.004)*o,r.y+=(rn.ny*.02+Math.sin(l*1.3)*.006)*o;if(Re&&P_){let m=P_.getBoundingClientRect();m.top<innerHeight&&m.bottom>0&&(r.vis=0)}if(Re?fp:Y_){let m=innerWidth/2+Me.x*innerWidth,_=innerHeight/2+Me.y*innerHeight,p=$_(),g=-Ae.x*6,b=-Ae.y*6,M=Re?180:260;if(Ae.alert=!1,p){let T=m-p.x,E=_-p.y,S=Math.hypot(T,E)||1;if(S<M){let A=(M-S)/M;g+=T/S*A*90,b+=E/S*A*90,Ae.alert=!0}Le.srDist.textContent=`${L_(S/40,1)} u`}Ae.alert&&!Ae.was&&(Ae.count++,Le.srCount.textContent=String(Ae.count).padStart(3,"0"),le&&le.press()),Ae.was=Ae.alert,Le.srStatus.textContent=Gt(Ae.alert?"about.evading":"about.idle"),Le.srStatus.classList.toggle("is-alert",Ae.alert);let x=Re?[.22,.09]:[.3,.25];Ae.vx=(Ae.vx+g*t)*.9,Ae.vy=(Ae.vy+b*t)*.9,Ae.x=Ei(Ae.x+Ae.vx*t,-x[0],x[0]),Ae.y=Ei(Ae.y+Ae.vy*t,-x[1],x[1])}else Ae.x*=.9,Ae.y*=.9;r.x+=Ae.x,r.y+=Ae.y;let c=1-Math.exp(-t*(r.lens>.5?30:Re?16:7));A_.forEach(m=>Me[m]=m==="vis"?r.vis:m==="s"?Math.exp(ea(Math.log(Me.s),Math.log(r.s),c)):ea(Me[m],r[m],c));let h=(Me.x-R_)/Math.max(t,.001);if(R_=Me.x,le){let m=le.state;m.x=Me.x*innerWidth,m.y=Me.y*innerHeight,m.s=Me.s*n,m.yaw=Me.yaw+rn.nx*.3*a+Math.sin(l*.45)*.14*o*(1-Me.lens),m.tilt=Me.tilt+rn.ny*.14*a,m.pitch=Me.pitch+Ei(Math.abs(h)*.4,0,.3)*(1-Me.lens),m.roll=Ei(-h*.5,-.5,.5)*(1-Me.lens)+Math.sin(l*2)*.02*o+Ae.vx*-.4,Object.assign(m,{explode:Me.explode,prop:Me.prop,shadow:Me.shadow,lift:Me.lift,lens:Me.lens,vis:Me.vis,pad:i.s&&(Re?Ce.land.progress>0||tx.getBoundingClientRect().top<innerHeight:e>Ce.gal.end-innerHeight)?1:0,padX:i.x,padY:i.y,padS:i.s,padTilt:.5,padGlow:Me.glow}),le.update(t)}if(!Re)if(o>0&&le){let m=Le.pill.getBoundingClientRect(),_=le.anchorScreen("face");Le.hero.setAttribute("x1",m.left+10),Le.hero.setAttribute("y1",m.bottom),Le.hero.setAttribute("x2",_.x),Le.hero.setAttribute("y2",_.y),Le.heroDot.setAttribute("cx",_.x),Le.heroDot.setAttribute("cy",_.y),Le.link.style.opacity=o}else Le.link.style.opacity=0;wT(s),mT(t),gT(t);{if(Ce.games.isActive||e>Ce.games.start-innerHeight&&e<Ce.games.end+innerHeight){let m=j_,_;if(Me.vis<.5)_="circle(150% at 50% 50%)";else if(le&&Me.lens>.55){let x=le.lensScreen();_=`circle(${x.r*1.25}px at ${x.x}px ${x.y}px)`}else _=le?"circle(0px at 50% 50%)":"circle(150% at 50% 50%)";CT.style.clipPath=_,RT.style.opacity=le?Ei(1-(m-.02)*12,0,1)+(m>.88?Ei((m-.92)*12,0,1):0):0;let p=Ei((m-.13)/.78,0,1),g=Ei(p*sa,0,sa-.001);X_(Math.floor(g));let b=g-Math.floor(g),M=bp[ra];if(M&&(M.style.transform=`scale(${1.12+b*.06}) translate3d(${(b-.5)*-2}%,0,0)`),Le.osdScore.textContent=String(Math.round(p*998700)).padStart(6,"0"),Le.osdTc.textContent=`00:${li(Math.floor(p*59))}:${li(Math.floor(p*59%1*30))}`,Le.tape.style.transform=`translateX(${-(p*18*30)+190}px)`,Le.horizon.style.transform=`translate(-50%,-50%) rotate(${Math.sin(p*11)*4}deg)`,Le.gsProg.style.transform=`scaleX(${p})`,!gl){let x=Mp[ra];x&&(x.style.setProperty("--rx",`${(-rn.ny*7).toFixed(2)}deg`),x.style.setProperty("--ry",`${(rn.nx*9).toFixed(2)}deg`))}}if(Ce.anat.isActive&&le){let m=Me.explode;Le.amBar.style.transform=`scaleX(${m})`,Le.amVal.textContent=Math.round(m*100)+"%";let _=ye("path",_h),p=ye("circle",_h);vh.forEach((g,b)=>{let M=m>.35+b*.06;g.classList.toggle("is-in",M);let x=le.anchorScreen(g.dataset.anchor),T=g.getBoundingClientRect(),E=g.dataset.side==="left",S=E?T.right+12:T.left-12,A=T.top+30,v=E?S+40:S-40;_[b].setAttribute("d",`M${S},${A} L${v},${A} L${x.x},${x.y}`),_[b].style.opacity=M?.55:0,[p[b*2],p[b*2+1]].forEach(y=>{y.setAttribute("cx",x.x),y.setAttribute("cy",x.y),y.style.opacity=M?1:0})})}else Ce.anat.isActive||(vh.forEach(m=>m.classList.remove("is-in")),ye("path,circle",_h).forEach(m=>m.style.opacity=0));if(e>Ce.sense.start-innerHeight&&e<Ce.sense.end+innerHeight&&bT({x:innerWidth/2+Me.x*innerWidth,y:innerHeight/2+Me.y*innerHeight}),e>Ce.gal.start-innerHeight&&e<Ce.gal.end+innerHeight){let m=Math.max(0,mp.scrollWidth-innerWidth);mp.style.transform=`translate3d(${-xh*m}px,0,0)`,Le.flFill.style.transform=`scaleX(${xh})`,Le.flR.textContent=`${li(Math.min(4,Math.floor(xh*4)+1))} / 04`,MT.forEach(_=>{let p=_.parentElement.getBoundingClientRect(),g=(p.left+p.width/2)/innerWidth-.5;_.style.transform=`translate3d(${g*-8}%,0,0)`})}}if(!bn){let m=ci.velocity||0;ta-=(1.2+Math.abs(m)*.25)*(m<0?-1:1);let _=b_.scrollWidth/2;ta<-_&&(ta+=_),ta>0&&(ta-=_),b_.style.transform=`translate3d(${ta}px,0,0) skewX(${Ei(-m*.4,-12,12)}deg)`}let f=Ce.land.progress>.98,d=Le.pz;d.textContent=Gt(f?"sub.ready":Ce.land.progress>0?"sub.docking":"sub.waiting"),d.classList.toggle("is-landed",f);let u=Ce.all.progress||0;Le.railI.style.transform=`scaleY(${u})`,Le.rail.style.top=u*100+"%",Le.rail.textContent=`XP ${String(Math.round(u*999)).padStart(3,"0")}`,requestAnimationFrame(ex)}if(document.documentElement.classList.contains("no-webgl")){let s=document.createElement("img");s.className="hero-fallback",s.src="assets/img/controller-front.webp",s.alt="",s.width=781,s.height=585,lt(".s-hero").appendChild(s)}var Mh=lt(".preloader"),LT=ye(".pre-checks li"),fl={v:0},I_=!1,xp=null;function ml(s=!1){I_||(I_=!0,xp&&xp.kill(),Qe.killTweensOf(fl),Mh&&Mh.remove(),document.body.classList.remove("is-loading"),!Ts&&oa.hidden&&ci.start(),Qe.set(".ht-inner,.hero-panel,.hero-stat,.hero-brand,.hero-card,.hero-hint,.nav",{clearProps:"all"}),Ht.refresh(),le&&!s&&!bn&&(le.press(),le.doSpin()))}function DT(){Qe.to(fl,{v:100,duration:bn?.2:Re?1.4:2.4,ease:"power2.inOut",onUpdate:()=>{lt(".pre-num").textContent=String(Math.round(fl.v)).padStart(3,"0"),lt(".pre-bar i").style.transform=`scaleX(${fl.v/100})`,LT.forEach((s,t)=>s.classList.toggle("ok",fl.v>(t+1)*15))},onComplete:()=>{if(lt(".pre-status").textContent=Gt("pre.ready"),bn)return ml(!0);xp=Qe.timeline({delay:.2,onComplete:()=>ml()}).to(Mh,{yPercent:-100,duration:1,ease:"expo.inOut"}).from(".ht-inner",{yPercent:110,duration:1.1,ease:"expo.out",stagger:.08},"-=.45").from(".hero-panel,.hero-stat,.hero-brand,.hero-card,.hero-hint,.nav",{y:24,opacity:0,duration:.9,ease:"expo.out",stagger:.06},"<.2")}})}DT();setTimeout(()=>ml(!0),7e3);addEventListener("error",()=>setTimeout(()=>ml(!0),300));Mh.addEventListener("click",()=>ml(!0));location.search.includes("dbg")&&(window.__g={en:Ce,lenis:ci,gp:le,cur:Me});Wr.forEach(s=>s());ul(()=>Wr.forEach(s=>s()));Ht.refresh();wh();requestAnimationFrame(ex);(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>Ht.refresh());addEventListener("load",()=>Ht.refresh());})();
