import{R as Ri,W as la,S as bs,a as Qn,A as Bh,r as ca,f as Od,B as va,D as qc,F as We,b as Is,c as Ma,t as no,d as ip,i as Hr,e as sp,C as zh,g as kh,w as rp,p as $a,h as op}from"./index-DBpnizkD.js";const Kc="187",ar={ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ap=0,Hh=1,lp=2,Zr=1,cp=2,Gr=3,Ts=0,jn=1,yn=2,Ns=0,lr=1,Ei=2,Gh=3,Vh=4,hp=5,ir=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,_p=202,xp=203,Fd=204,Bd=205,vp=206,Mp=207,yp=208,Sp=209,bp=210,wp=211,Tp=212,Ep=213,Ap=214,ql=0,Kl=1,Zl=2,io=3,Jl=4,$l=5,Ql=6,jl=7,zd=0,Rp=1,Cp=2,hs=0,Zc=1,Jc=2,$c=3,ka=4,Qc=5,jc=6,th=7,Wh="attached",Pp="detached",kd=300,dr=301,so=302,Qa=303,ja=304,Si=1e3,oi=1001,ya=1002,Un=1003,Hd=1004,Vr=1005,Xn=1006,ha=1007,Vi=1008,pi=1009,Gd=1010,Vd=1011,ro=1012,eh=1013,Li=1014,yi=1015,ti=1016,nh=1017,ih=1018,fr=1020,Wd=35902,Xd=35899,Yd=1021,qd=1022,Ci=1023,Es=1026,ws=1027,Ha=1028,sh=1029,Us=1030,rh=1031,oh=1033,ua=33776,da=33777,fa=33778,pa=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37488,lc=37489,Sa=37490,cc=37491,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,Mc=37818,yc=37819,Sc=37820,bc=37821,wc=36492,Tc=36494,Ec=36495,Ac=36283,Rc=36284,ba=36285,Cc=36286,Lp=2200,Dp=2201,Ip=2202,oo=2300,ao=2301,tl=2302,Xh=2303,rr=2400,or=2401,wa=2402,ah=2500,Np=2501,Up=0,Kd=1,Pc=2,Op=3200,lo=0,Fp=1,os="",Nn="srgb",gi="srgb-linear",Ta="linear",fn="srgb",el=7680,Bp=519,zp=512,kp=513,Hp=514,Zd=515,Gp=516,Vp=517,Jd=518,$d=519,Qd=35044,Yh="300 es",Pi=2e3,co=2001;function Wp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yp(){const s=ho("canvas");return s.style.display="block",s}const qh={};function Ea(...s){const t="THREE."+s.shift();console.log(t,...s)}function jd(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=jd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Be(...s){s=jd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function cr(...s){const t=s.join(" ");t in qh||(qh[t]=!0,Pe(...s))}function qp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Kp={[ql]:ql,[Zl]:Ql,[Jl]:Jl,[io]:$l,[Kl]:Kl,[Ql]:Zl,[jl]:jl,[$l]:io};class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kh=1234567;const Jr=Math.PI/180,pr=180/Math.PI;function Di(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[e&63|128]+Zn[e>>8&255]+"-"+Zn[e>>16&255]+Zn[e>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function $e(s,t,e){return Math.max(t,Math.min(e,s))}function lh(s,t){return(s%t+t)%t}function Zp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Jp(s,t,e){return s!==t?(e-s)/(t-s):0}function $r(s,t,e){return(1-e)*s+e*t}function $p(s,t,e,n){return $r(s,t,1-Math.exp(-e*n))}function Qp(s,t=1){return t-Math.abs(lh(s,t*2)-t)}function jp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function t0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function e0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function n0(s,t){return s+Math.random()*(t-s)}function i0(s){return s*(.5-Math.random())}function s0(s){s!==void 0&&(Kh=s);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function r0(s){return s*Jr}function o0(s){return s*pr}function a0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function l0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function c0(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ga(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ch(s,t){if(t.constructor===Float32Array)return s;const e=Ga(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function hh(s,t){if(t.constructor===Float32Array)return s;const e=Ga(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Aa={DEG2RAD:Jr,RAD2DEG:pr,generateUUID:Di,clamp:$e,euclideanModulo:lh,mapLinear:Zp,inverseLerp:Jp,lerp:$r,damp:$p,pingpong:Qp,smoothstep:jp,smootherstep:t0,randInt:e0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:tf,setQuaternionFromProperEuler:c0,normalize:hh,denormalize:ch},Nh=class Nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;let It=Nh;class Sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*v;m<0&&(f=-f,u=-u,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);g=Math.sin(g*y)/T,a=Math.sin(a*y)/T,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+v*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uh=class Uh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this.z=$e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this.z=$e(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;let G=Uh;const nl=new G,Zh=new Sn,Oh=class Oh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],v=i[0],m=i[3],g=i[6],y=i[1],T=i[4],b=i[7],D=i[2],R=i[5],M=i[8];return r[0]=o*v+a*y+l*D,r[3]=o*m+a*T+l*R,r[6]=o*g+a*b+l*M,r[1]=c*v+h*y+d*D,r[4]=c*m+h*T+d*R,r[7]=c*g+h*b+d*M,r[2]=f*v+u*y+p*D,r[5]=f*m+u*T+p*R,r[8]=f*g+u*b+p*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(il.makeScale(t,e)),this}rotate(t){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(il.makeRotation(-t)),this}translate(t,e){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;let Xe=Oh;const il=new Xe,Jh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h0(){const s={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fn&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fn&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===os?Ta:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gi]:{primaries:t,whitePoint:n,transfer:Ta,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:n,transfer:fn,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),s}const on=h0();function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class u0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zs===void 0&&(zs=ho("canvas")),zs.width=t.width,zs.height=t.height;const i=zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=us(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d0=0;class uh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sl(i[o].image)):r.push(sl(i[o]))}else r=sl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function sl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?u0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let f0=0;const rl=new G;class Bn extends fs{constructor(t=Bn.DEFAULT_IMAGE,e=Bn.DEFAULT_MAPPING,n=oi,i=oi,r=Xn,o=Vi,a=Ci,l=pi,c=Bn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Di(),this.name="",this.source=new uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Pe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Pe(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=kd;Bn.DEFAULT_ANISOTROPY=1;const Fh=class Fh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(u+1)/2,D=(g+1)/2,R=(h+f)/4,M=(d+v)/4,w=(p+m)/4;return T>b&&T>D?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=R/n,r=M/n):b>D?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=w/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=M/r,i=w/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this.z=$e(this.z,t.z,e.z),this.w=$e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this.z=$e(this.z,t,e),this.w=$e(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;let mn=Fh;class p0 extends fs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new mn(0,0,t,e),this.scissorTest=!1,this.viewport=new mn(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Bn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new uh(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends p0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ef extends Bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class m0 extends Bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const za=class za{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,v=c*d;e[0]=f+v*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,u=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g0,t,_0)}lookAt(t,e,n){const i=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),gs.crossVectors(n,di),gs.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),gs.crossVectors(n,di)),gs.normalize(),To.crossVectors(di,gs),i[0]=gs.x,i[4]=To.x,i[8]=di.x,i[1]=gs.y,i[5]=To.y,i[9]=di.y,i[2]=gs.z,i[6]=To.z,i[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],v=n[6],m=n[10],g=n[14],y=n[3],T=n[7],b=n[11],D=n[15],R=i[0],M=i[4],w=i[8],B=i[12],O=i[1],q=i[5],it=i[9],j=i[13],N=i[2],st=i[6],at=i[10],$=i[14],ot=i[3],nt=i[7],Q=i[11],St=i[15];return r[0]=o*R+a*O+l*N+c*ot,r[4]=o*M+a*q+l*st+c*nt,r[8]=o*w+a*it+l*at+c*Q,r[12]=o*B+a*j+l*$+c*St,r[1]=h*R+d*O+f*N+u*ot,r[5]=h*M+d*q+f*st+u*nt,r[9]=h*w+d*it+f*at+u*Q,r[13]=h*B+d*j+f*$+u*St,r[2]=p*R+v*O+m*N+g*ot,r[6]=p*M+v*q+m*st+g*nt,r[10]=p*w+v*it+m*at+g*Q,r[14]=p*B+v*j+m*$+g*St,r[3]=y*R+T*O+b*N+D*ot,r[7]=y*M+T*q+b*st+D*nt,r[11]=y*w+T*it+b*at+D*Q,r[15]=y*B+T*j+b*$+D*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],v=t[7],m=t[11],g=t[15],y=l*u-c*f,T=a*u-c*d,b=a*f-l*d,D=o*u-c*h,R=o*f-l*h,M=o*d-a*h;return e*(v*y-m*T+g*b)-n*(p*y-m*D+g*R)+i*(p*T-v*D+g*M)-r*(p*b-v*R+m*M)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=e*a-n*o,T=e*l-i*o,b=e*c-r*o,D=n*l-i*a,R=n*c-r*a,M=i*c-r*l,w=h*v-d*p,B=h*m-f*p,O=h*g-u*p,q=d*m-f*v,it=d*g-u*v,j=f*g-u*m,N=y*j-T*it+b*q+D*O-R*B+M*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const st=1/N;return t[0]=(a*j-l*it+c*q)*st,t[1]=(i*it-n*j-r*q)*st,t[2]=(v*M-m*R+g*D)*st,t[3]=(f*R-d*M-u*D)*st,t[4]=(l*O-o*j-c*B)*st,t[5]=(e*j-i*O+r*B)*st,t[6]=(m*b-p*M-g*T)*st,t[7]=(h*M-f*b+u*T)*st,t[8]=(o*it-a*O+c*w)*st,t[9]=(n*O-e*it-r*w)*st,t[10]=(p*R-v*b+g*y)*st,t[11]=(d*b-h*R-u*y)*st,t[12]=(a*B-o*q-l*w)*st,t[13]=(e*q-n*B+i*w)*st,t[14]=(v*T-p*D-m*y)*st,t[15]=(h*D-d*T+f*y)*st,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,v=o*h,m=o*d,g=a*d,y=l*c,T=l*h,b=l*d,D=n.x,R=n.y,M=n.z;return i[0]=(1-(v+g))*D,i[1]=(u+b)*D,i[2]=(p-T)*D,i[3]=0,i[4]=(u-b)*R,i[5]=(1-(f+g))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(p+T)*M,i[9]=(m-y)*M,i[10]=(1-(f+v))*M,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ks.set(i[0],i[1],i[2]).length();const a=ks.set(i[4],i[5],i[6]).length(),l=ks.set(i[8],i[9],i[10]).length();r<0&&(o=-o),bi.copy(this);const c=1/o,h=1/a,d=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,e.setFromRotationMatrix(bi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Pi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===Pi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===co)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Pi,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===Pi)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===co)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};za.prototype.isMatrix4=!0;let Ue=za;const ks=new G,bi=new Ue,g0=new G(0,0,0),_0=new G(1,1,1),gs=new G,To=new G,di=new G,Qh=new Ue,jh=new Sn;class Yi{constructor(t=0,e=0,n=0,i=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let x0=0;const tu=new G,Hs=new Sn,Qi=new Ue,Eo=new G,Ar=new G,v0=new G,M0=new Sn,eu=new G(1,0,0),nu=new G(0,1,0),iu=new G(0,0,1),su={type:"added"},y0={type:"removed"},Gs={type:"childadded",child:null},ol={type:"childremoved",child:null};class Mn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new G,e=new Yi,n=new Sn,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Xe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ar,Eo,this.up):Qi.lookAt(Eo,Ar,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(y0),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,v0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,M0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mn.DEFAULT_UP=new G(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S0={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function ll(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ye{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,on.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=on.workingColorSpace){return this.r=t,this.g=e,this.b=n,on.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=on.workingColorSpace){if(t=lh(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ll(o,r,t+1/3),this.g=ll(o,r,t),this.b=ll(o,r,t-1/3)}return on.colorSpaceToWorking(this,i),this}setStyle(t,e=Nn){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pe("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){const n=nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return on.workingToColorSpace(Jn.copy(this),t),Math.round($e(Jn.r*255,0,255))*65536+Math.round($e(Jn.g*255,0,255))*256+Math.round($e(Jn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=on.workingColorSpace){on.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,i=Jn.g,r=Jn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=on.workingColorSpace){return on.workingToColorSpace(Jn.copy(this),e),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Nn){on.workingToColorSpace(Jn.copy(this),t);const e=Jn.r,n=Jn.g,i=Jn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+e,_s.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_s),t.getHSL(Ao);const n=$r(_s.h,Ao.h,e),i=$r(_s.s,Ao.s,e),r=$r(_s.l,Ao.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new ye;ye.NAMES=nf;class fh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=e,this.far=n}clone(){return new fh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class b0 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wi=new G,ji=new G,cl=new G,ts=new G,Vs=new G,Ws=new G,ru=new G,hl=new G,ul=new G,dl=new G,fl=new mn,pl=new mn,ml=new mn;class Mi{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wi.subVectors(t,e),i.cross(wi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wi.subVectors(i,e),ji.subVectors(n,e),cl.subVectors(t,e);const o=wi.dot(wi),a=wi.dot(ji),l=wi.dot(cl),c=ji.dot(ji),h=ji.dot(cl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(t,e),pl.fromBufferAttribute(t,n),ml.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(pl,r.y),o.addScaledVector(ml,r.z),o}static isFrontFacing(t,e,n,i){return wi.subVectors(n,e),ji.subVectors(t,e),wi.cross(ji).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),wi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Mi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Vs.subVectors(i,n),Ws.subVectors(r,n),hl.subVectors(t,n);const l=Vs.dot(hl),c=Ws.dot(hl);if(l<=0&&c<=0)return e.copy(n);ul.subVectors(t,i);const h=Vs.dot(ul),d=Ws.dot(ul);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Vs,o);dl.subVectors(t,r);const u=Vs.dot(dl),p=Ws.dot(dl);if(p>=0&&u<=p)return e.copy(r);const v=u*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ws,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return ru.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(ru,a);const g=1/(m+v+f);return o=v*g,a=f*g,e.copy(n).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qi{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),Co.subVectors(this.max,Rr),Xs.subVectors(t.a,Rr),Ys.subVectors(t.b,Rr),qs.subVectors(t.c,Rr),xs.subVectors(Ys,Xs),vs.subVectors(qs,Ys),As.subVectors(Xs,qs);let e=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-As.z,As.y,xs.z,0,-xs.x,vs.z,0,-vs.x,As.z,0,-As.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-As.y,As.x,0];return!gl(e,Xs,Ys,qs,Co)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,Xs,Ys,qs,Co))?!1:(Po.crossVectors(xs,vs),e=[Po.x,Po.y,Po.z],gl(e,Xs,Ys,qs,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const es=[new G,new G,new G,new G,new G,new G,new G,new G],Ti=new G,Ro=new qi,Xs=new G,Ys=new G,qs=new G,xs=new G,vs=new G,As=new G,Rr=new G,Co=new G,Po=new G,Rs=new G;function gl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rs.fromArray(s,r);const a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),l=t.dot(Rs),c=e.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const In=new G,Lo=new It;let w0=0;class Gn extends fs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qd,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=t!==void 0?Ga(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ch(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):hh(t,this.array)}}class sf extends Gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rf extends Gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends Gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const T0=new qi,Cr=new G,_l=new G;class Ki{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):T0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(_l)),this.expandByPoint(Cr.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let E0=0;const _i=new Ue,xl=new Mn,Ks=new G,fi=new qi,Pr=new qi,Hn=new G;class dn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?rf:sf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return xl.lookAt(t),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(fi.min,Pr.min),fi.expandByPoint(Hn),Hn.addVectors(fi.max,Pr.max),fi.expandByPoint(Hn)):(fi.expandByPoint(Pr.min),fi.expandByPoint(Pr.max))}fi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Hn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Hn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Hn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),Hn.add(Ks)),i=Math.max(i,n.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)a[B]=new G,l[B]=new G;const h=new G,d=new G,f=new G,u=new It,p=new It,v=new It,m=new G,g=new G;function y(B,O,q){c[B]=c[O]=c[q]=1,h.fromBufferAttribute(n,B),d.fromBufferAttribute(n,O),f.fromBufferAttribute(n,q),u.fromBufferAttribute(r,B),p.fromBufferAttribute(r,O),v.fromBufferAttribute(r,q),d.sub(h),f.sub(h),p.sub(u),v.sub(u);const it=1/(p.x*v.y-v.x*p.y);isFinite(it)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(it),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(it),a[B].add(m),a[O].add(m),a[q].add(m),l[B].add(g),l[O].add(g),l[q].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,O=T.length;B<O;++B){const q=T[B],it=q.start,j=q.count;for(let N=it,st=it+j;N<st;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new G,D=new G,R=new G,M=new G;function w(B){R.fromBufferAttribute(i,B),M.copy(R);const O=a[B];b.copy(O),b.sub(R.multiplyScalar(R.dot(O))).normalize(),D.crossVectors(M,O);const it=D.dot(l[B])<0?-1:1;o.setXYZW(B,b.x,b.y,b.z,it)}for(let B=0,O=n.count;B<O;++B)c[B]&&w(B);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Hn.fromBufferAttribute(t,e),Hn.normalize(),t.setXYZ(e,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Gn(f,h,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class of{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qd,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=ou(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=ou(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function ou(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Di()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ii=new G;class uo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Ga(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ch(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):hh(t,this.data.array)}}const vl=new G,A0=new G,R0=new Xe;class rs{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vl.subVectors(n,e).cross(A0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(vl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||R0.getNormalMatrix(t),i=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let C0=0;class mi extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=lr,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Bd,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Pe(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Pe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new rs().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ds extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zs;const Lr=new G,Js=new G,$s=new G,Qs=new It,Dr=new It,af=new Ue,Do=new G,Ir=new G,Io=new G,au=new It,Ml=new It,lu=new It;class Wi extends Mn{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new dn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new of(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new uo(n,3,0,!1)),Zs.setAttribute("uv",new uo(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new It(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),af.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;No(Do.set(-.5,-.5,0),$s,o,Js,i,r),No(Ir.set(.5,-.5,0),$s,o,Js,i,r),No(Io.set(.5,.5,0),$s,o,Js,i,r),au.set(0,0),Ml.set(1,0),lu.set(1,1);let a=t.ray.intersectTriangle(Do,Ir,Io,!1,Lr);if(a===null&&(No(Ir.set(-.5,.5,0),$s,o,Js,i,r),Ml.set(0,1),a=t.ray.intersectTriangle(Do,Io,Ir,!1,Lr),a===null))return;const l=t.ray.origin.distanceTo(Lr);l<t.near||l>t.far||e.push({distance:l,point:Lr.clone(),uv:Mi.getInterpolation(Lr,Do,Ir,Io,au,Ml,lu,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function No(s,t,e,n,i,r){Qs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Dr.x=r*Qs.x-i*Qs.y,Dr.y=i*Qs.x+r*Qs.y):Dr.copy(Qs),s.copy(t),s.x+=Dr.x,s.y+=Dr.y,s.applyMatrix4(af)}const ns=new G,yl=new G,Uo=new G,Oo=new G;class vr{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yl.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(yl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Uo),a=Oo.dot(this.direction),l=-Oo.dot(Uo),c=Oo.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const v=1/h;d*=v,f*=v,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yl).addScaledVector(Uo,f),u}intersectSphere(t,e){if(t.radius<0)return null;ns.subVectors(t.center,this.origin);const n=ns.dot(this.direction),i=ns.dot(ns)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,T=n.z-o.z,b=Math.abs(l),D=Math.abs(c),R=Math.abs(h);let M,w,B,O,q,it,j,N,st,at,$,ot;if(b>=D&&b>=R?(B=l,it=d,st=p,ot=g,l>=0?(M=c,w=h,O=f,q=u,j=v,N=m,at=y,$=T):(M=h,w=c,O=u,q=f,j=m,N=v,at=T,$=y)):D>=R?(B=c,it=f,st=v,ot=y,c>=0?(M=h,w=l,O=u,q=d,j=m,N=p,at=T,$=g):(M=l,w=h,O=d,q=u,j=p,N=m,at=g,$=T)):(B=h,it=u,st=m,ot=T,h>=0?(M=l,w=c,O=d,q=f,j=p,N=v,at=g,$=y):(M=c,w=l,O=f,q=d,j=v,N=p,at=y,$=g)),B===0)return null;const nt=M/B,Q=w/B,St=1/B,Yt=O-nt*it,ce=q-Q*it,gt=j-nt*st,Wt=N-Q*st,ne=at-nt*ot,ue=$-Q*ot,jt=ne*Wt-ue*gt,re=Yt*ue-ce*ne,ze=gt*ce-Wt*Yt;if(i){if(jt<0||re<0||ze<0)return null}else if((jt<0||re<0||ze<0)&&(jt>0||re>0||ze>0))return null;const me=jt+re+ze;if(me===0)return null;const _e=St*(jt*it+re*st+ze*ot);return(me>0?_e<0:_e>0)?null:this.at(_e/me,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cu=new Ue,Cs=new vr,Fo=new Ki,hu=new G,Bo=new G,zo=new G,ko=new G,Sl=new G,Ho=new G,uu=new G,Go=new G;class Ge extends Mn{constructor(t=new dn,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Sl.fromBufferAttribute(d,t),o?Ho.addScaledVector(Sl,h):Ho.addScaledVector(Sl.sub(e),h))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Cs.copy(t.ray).recast(t.near),!(Fo.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Fo,hu)===null||Cs.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cs)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,D=T;b<D;b+=3){const R=a.getX(b),M=a.getX(b+1),w=a.getX(b+2);i=Vo(this,g,t,n,c,h,d,R,M,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){const y=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);i=Vo(this,o,t,n,c,h,d,y,T,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,D=T;b<D;b+=3){const R=b,M=b+1,w=b+2;i=Vo(this,g,t,n,c,h,d,R,M,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){const y=m,T=m+1,b=m+2;i=Vo(this,o,t,n,c,h,d,y,T,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function P0(s,t,e,n,i,r,o,a){let l;if(t.side===jn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ts,a),l===null)return null;Go.copy(a),Go.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:s}}function Vo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Bo),s.getVertexPosition(l,zo),s.getVertexPosition(c,ko);const h=P0(s,t,e,n,Bo,zo,ko,uu);if(h){const d=new G;Mi.getBarycoord(uu,Bo,zo,ko,d),i&&(h.uv=Mi.getInterpolatedAttribute(i,a,l,c,d,new It)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,d,new It)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};Mi.getNormal(Bo,zo,ko,f.normal),h.face=f,h.barycoord=d}return h}const Nr=new mn,du=new mn,fu=new mn,L0=new mn,pu=new Ue,Wo=new G,bl=new Ki,mu=new Ue,wl=new vr;class D0 extends Ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wo),this.boundingSphere.expandByPoint(Wo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(i),t.ray.intersectsSphere(bl)!==!1&&(mu.copy(i).invert(),wl.copy(t.ray).applyMatrix4(mu),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,wl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new mn,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;du.fromBufferAttribute(i.attributes.skinIndex,t),fu.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Nr.copy(e),e.set(0,0,0,0)):(Nr.set(e.x,e.y,e.z,1),e.set(0,0,0)),Nr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=fu.getComponent(r);if(o!==0){const a=du.getComponent(r);pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(L0.copy(Nr).applyMatrix4(pu),o)}}return e.isVector4&&(e.w=Nr.w),e.applyMatrix4(this.bindMatrixInverse)}}class lf extends Mn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Va extends Bn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Un,h=Un,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=new Ue,I0=new Ue;class ph{constructor(t=[],e=[]){this.uuid=Di(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ue;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:I0;gu.multiplyMatrices(a,e[r]),gu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ph(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Va(e,t,t,Ci,yi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Pe("Skeleton: No bone found with UUID:",r),o=new lf),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ra extends Gn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const js=new Ue,_u=new Ue,Xo=[],xu=new qi,N0=new Ue,Ur=new Ge,Or=new Ki;class fo extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ra(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,N0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),xu.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(xu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),Or.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,js),_u.multiplyMatrices(n,js),Ur.matrixWorld=_u,Ur.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){const l=Xo[o];l.instanceId=r,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Va(new Float32Array(i*this.count),i,this.count,Ha,yi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ps=new Ki,U0=new It(.5,.5),Yo=new G;class po{constructor(t=new rs,e=new rs,n=new rs,i=new rs,r=new rs,o=new rs){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],T=r[13],b=r[14],D=r[15];if(i[0].setComponents(c-o,u-h,g-p,D-y).normalize(),i[1].setComponents(c+o,u+h,g+p,D+y).normalize(),i[2].setComponents(c+a,u+d,g+v,D+T).normalize(),i[3].setComponents(c-a,u-d,g-v,D-T).normalize(),n)i[4].setComponents(l,f,m,b).normalize(),i[5].setComponents(c-l,u-f,g-m,D-b).normalize();else if(i[4].setComponents(c-l,u-f,g-m,D-b).normalize(),e===Pi)i[5].setComponents(c+l,u+f,g+m,D+b).normalize();else if(e===co)i[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const e=U0.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yo.x=i.normal.x>0?t.max.x:t.min.x,Yo.y=i.normal.y>0?t.max.y:t.min.y,Yo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vu=new Ue;class mh{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];vu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new po),n[i].setFromProjectionMatrix(vu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new po),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new mh().copy(this)}}class cf extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ca=new G,Pa=new G,Mu=new Ue,Fr=new vr,qo=new Ki,Tl=new G,yu=new G;class gh extends Mn{constructor(t=new dn,e=new cf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ca.fromBufferAttribute(e,i-1),Pa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ca.distanceTo(Pa);t.setAttribute("lineDistance",new De(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;Mu.copy(i).invert(),Fr.copy(t.ray).applyMatrix4(Mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const g=h.getX(v),y=h.getX(v+1),T=Ko(this,t,Fr,l,g,y,v);T&&e.push(T)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(u),g=Ko(this,t,Fr,l,v,m,p-1);g&&e.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const g=Ko(this,t,Fr,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=Ko(this,t,Fr,l,p-1,u,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ko(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ca.fromBufferAttribute(a,i),Pa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ca,Pa,Tl,yu)>n)return;Tl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Tl);if(!(c<t.near||c>t.far))return{distance:c,point:yu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Su=new G,bu=new G;class O0 extends gh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Su.fromBufferAttribute(e,i),bu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Su.distanceTo(bu);t.setAttribute("lineDistance",new De(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F0 extends gh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Qr extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wu=new Ue,Lc=new vr,Zo=new Ki,Jo=new G;class Wr extends Mn{constructor(t=new dn,e=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;wu.copy(i).invert(),Lc.copy(t.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,v=u;p<v;p++){const m=c.getX(p);Jo.fromBufferAttribute(d,m),Tu(Jo,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,v=u;p<v;p++)Jo.fromBufferAttribute(d,p),Tu(Jo,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tu(s,t,e,n,i,r,o){const a=Lc.distanceSqToPoint(s);if(a<e){const l=new G;Lc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hf extends Bn{constructor(t=[],e=dr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dc extends Bn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Os extends Bn{constructor(t,e,n=Li,i,r,o,a=Un,l=Un,c,h=Es,d=1){if(h!==Es&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class uf extends Os{constructor(t,e=Li,n=dr,i,r,o=Un,a=Un,l,c=Es){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class df extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pt extends dn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2));function p(v,m,g,y,T,b,D,R,M,w,B){const O=b/M,q=D/w,it=b/2,j=D/2,N=R/2,st=M+1,at=w+1;let $=0,ot=0;const nt=new G;for(let Q=0;Q<at;Q++){const St=Q*q-j;for(let Yt=0;Yt<st;Yt++){const ce=Yt*O-it;nt[v]=ce*y,nt[m]=St*T,nt[g]=N,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[g]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Yt/M),d.push(1-Q/w),$+=1}}for(let Q=0;Q<w;Q++)for(let St=0;St<M;St++){const Yt=f+St+st*Q,ce=f+St+st*(Q+1),gt=f+(St+1)+st*(Q+1),Wt=f+(St+1)+st*Q;l.push(Yt,ce,Wt),l.push(ce,gt,Wt),ot+=6}a.addGroup(u,ot,B),u+=ot,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class La extends dn{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=n*2+r,v=i+1,m=new G,g=new G;for(let y=0;y<=p;y++){let T=0,b=0,D=0,R=0;if(y<=n){const B=y/n,O=B*Math.PI/2;b=-h-t*Math.cos(O),D=t*Math.sin(O),R=-t*Math.cos(O),T=B*d}else if(y<=n+r){const B=(y-n)/r;b=-h+B*e,D=t,R=0,T=d+B*f}else{const B=(y-n-r)/n,O=B*Math.PI/2;b=h+t*Math.sin(O),D=t*Math.cos(O),R=t*Math.sin(O),T=d+f+B*d}const M=Math.max(0,Math.min(1,T/u));let w=0;y===0?w=.5/i:y===p&&(w=-.5/i);for(let B=0;B<=i;B++){const O=B/i,q=O*Math.PI*2,it=Math.sin(q),j=Math.cos(q);g.x=-D*j,g.y=b,g.z=D*it,a.push(g.x,g.y,g.z),m.set(-D*j,R,D*it),m.normalize(),l.push(m.x,m.y,m.z),c.push(O+w,M)}if(y>0){const B=(y-1)*v;for(let O=0;O<i;O++){const q=B+O,it=B+O+1,j=y*v+O,N=y*v+O+1;o.push(q,it,j),o.push(it,N,j)}}}this.setIndex(o),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ai extends dn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new G,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class se extends dn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const v=[],m=n/2;let g=0;y(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(u,2));function y(){const b=new G,D=new G;let R=0;const M=(e-t)/n;for(let w=0;w<=r;w++){const B=[],O=w/r,q=O*(e-t)+t;for(let it=0;it<=i;it++){const j=it/i,N=j*l+a,st=Math.sin(N),at=Math.cos(N);D.x=q*st,D.y=-O*n+m,D.z=q*at,d.push(D.x,D.y,D.z),b.set(st,M,at).normalize(),f.push(b.x,b.y,b.z),u.push(j,1-O),B.push(p++)}v.push(B)}for(let w=0;w<i;w++)for(let B=0;B<r;B++){const O=v[B][w],q=v[B+1][w],it=v[B+1][w+1],j=v[B][w+1];(t>0||B!==0)&&(h.push(O,q,j),R+=3),(e>0||B!==r-1)&&(h.push(q,it,j),R+=3)}c.addGroup(g,R,0),g+=R}function T(b){const D=p,R=new It,M=new G;let w=0;const B=b===!0?t:e,O=b===!0?1:-1;for(let it=1;it<=i;it++)d.push(0,m*O,0),f.push(0,O,0),u.push(.5,.5),p++;const q=p;for(let it=0;it<=i;it++){const N=it/i*l+a,st=Math.cos(N),at=Math.sin(N);M.x=B*at,M.y=m*O,M.z=B*st,d.push(M.x,M.y,M.z),f.push(0,O,0),R.x=st*.5+.5,R.y=at*.5*O+.5,u.push(R.x,R.y),p++}for(let it=0;it<i;it++){const j=D+it,N=q+it;b===!0?h.push(N,N+1,j):h.push(N+1,N,j),w+=3}c.addGroup(g,w,b===!0?1:2),g+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends se{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wa extends dn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new G,b=new G,D=new G;for(let R=0;R<e.length;R+=3)u(e[R+0],T),u(e[R+1],b),u(e[R+2],D),l(T,b,D,y)}function l(y,T,b,D){const R=D+1,M=[];for(let w=0;w<=R;w++){M[w]=[];const B=y.clone().lerp(b,w/R),O=T.clone().lerp(b,w/R),q=R-w;for(let it=0;it<=q;it++)it===0&&w===R?M[w][it]=B:M[w][it]=B.clone().lerp(O,it/q)}for(let w=0;w<R;w++)for(let B=0;B<2*(R-w)-1;B++){const O=Math.floor(B/2);B%2===0?(f(M[w][O+1]),f(M[w+1][O]),f(M[w][O])):(f(M[w][O+1]),f(M[w+1][O+1]),f(M[w+1][O]))}}function c(y){const T=new G;for(let b=0;b<r.length;b+=3)T.x=r[b+0],T.y=r[b+1],T.z=r[b+2],T.normalize().multiplyScalar(y),r[b+0]=T.x,r[b+1]=T.y,r[b+2]=T.z}function h(){const y=new G;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const b=m(y)/2/Math.PI+.5,D=g(y)/Math.PI+.5;o.push(b,1-D)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){const T=o[y+0],b=o[y+2],D=o[y+4],R=Math.max(T,b,D),M=Math.min(T,b,D);R>.9&&M<.1&&(T<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),D<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,T){const b=y*3;T.x=t[b+0],T.y=t[b+1],T.z=t[b+2]}function p(){const y=new G,T=new G,b=new G,D=new G,R=new It,M=new It,w=new It;for(let B=0,O=0;B<r.length;B+=9,O+=6){y.set(r[B+0],r[B+1],r[B+2]),T.set(r[B+3],r[B+4],r[B+5]),b.set(r[B+6],r[B+7],r[B+8]),R.set(o[O+0],o[O+1]),M.set(o[O+2],o[O+3]),w.set(o[O+4],o[O+5]),D.copy(y).add(T).add(b).divideScalar(3);const q=m(D);v(R,O+0,y,q),v(M,O+2,T,q),v(w,O+4,b,q)}}function v(y,T,b,D){D<0&&y.x===1&&(o[T]=y.x-1),b.x===0&&b.z===0&&(o[T]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.vertices,t.indices,t.radius,t.detail)}}class Gi extends Wa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gi(t.radius,t.detail)}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new It:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new G,i=[],r=[],o=[],a=new G,l=new Ue;for(let u=0;u<=t;u++){const p=u/t;i[u]=this.getTangentAt(p,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos($e(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos($e(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class _h extends Zi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class B0 extends _h{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Eu=new G,Au=new G,El=new xh,Al=new xh,Rl=new xh;class ff extends Zi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Au.subVectors(i[0],i[1]).add(i[0]),c=Au);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Eu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Eu),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),El.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,v,m),Al.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,v,m),Rl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Al.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Rl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(El.calc(l),Al.calc(l),Rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ru(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function z0(s,t){const e=1-s;return e*e*t}function k0(s,t){return 2*(1-s)*s*t}function H0(s,t){return s*s*t}function jr(s,t,e,n){return z0(s,t)+k0(s,e)+H0(s,n)}function G0(s,t){const e=1-s;return e*e*e*t}function V0(s,t){const e=1-s;return 3*e*e*s*t}function W0(s,t){return 3*(1-s)*s*s*t}function X0(s,t){return s*s*s*t}function to(s,t,e,n,i){return G0(s,t)+V0(s,e)+W0(s,n)+X0(s,i)}class pf extends Zi{constructor(t=new It,e=new It,n=new It,i=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new It){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(to(t,i.x,r.x,o.x,a.x),to(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y0 extends Zi{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(to(t,i.x,r.x,o.x,a.x),to(t,i.y,r.y,o.y,a.y),to(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mf extends Zi{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q0 extends Zi{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends Zi{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(jr(t,i.x,r.x,o.x),jr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends Zi{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(jr(t,i.x,r.x,o.x),jr(t,i.y,r.y,o.y),jr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends Zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ru(a,l.x,c.x,h.x,d.x),Ru(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new It().fromArray(i))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:B0,CatmullRomCurve3:ff,CubicBezierCurve:pf,CubicBezierCurve3:Y0,EllipseCurve:_h,LineCurve:mf,LineCurve3:q0,QuadraticBezierCurve:gf,QuadraticBezierCurve3:_f,SplineCurve:xf});class K0 extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Da[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Cu extends K0{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mf(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new gf(this.currentPoint.clone(),new It(t,e),new It(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new pf(this.currentPoint.clone(),new It(t,e),new It(n,i),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new _h(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mo extends Cu{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Cu().fromJSON(i))}return this}}function Z0(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=vf(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=tm(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){const u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return go(r,o,e,a,l,c,0),o}function vf(s,t,e,n,i){let r;if(i===um(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Pu(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Pu(o/n|0,s[o],s[o+1],r);return r&&mr(r,r.next)&&(xo(r),r=r.next),r}function Fs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||Tn(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function go(s,t,e,n,i,r,o){if(!s)return;!o&&r&&rm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?$0(s,n,i,r):J0(s)){t.push(l.i,s.i,c.i),xo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Q0(Fs(s),t),go(s,t,e,n,i,r,2)):o===2&&j0(s,t,e,n,i,r):go(Fs(s),t,e,n,i,r,1);break}}}function J0(s){const t=s.prev,e=s,n=s.next;if(Tn(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Xr(i,a,r,l,o,c,p.x,p.y)&&Tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function $0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Tn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),v=Math.max(a,l,c),m=Math.max(h,d,f),g=Ic(u,p,t,e,n),y=Ic(v,m,t,e,n);let T=s.prevZ,b=s.nextZ;for(;T&&T.z>=g&&b&&b.z<=y;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Xr(a,h,l,d,c,f,T.x,T.y)&&Tn(T.prev,T,T.next)>=0||(T=T.prevZ,b.x>=u&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Xr(a,h,l,d,c,f,b.x,b.y)&&Tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;T&&T.z>=g;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Xr(a,h,l,d,c,f,T.x,T.y)&&Tn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;b&&b.z<=y;){if(b.x>=u&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Xr(a,h,l,d,c,f,b.x,b.y)&&Tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Q0(s,t){let e=s;do{const n=e.prev,i=e.next.next;!mr(n,i)&&yf(n,e,e.next,i)&&_o(n,i)&&_o(i,n)&&(t.push(n.i,e.i,i.i),xo(e),xo(e.next),e=s=i),e=e.next}while(e!==s);return Fs(e)}function j0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lm(o,a)){let l=Sf(o,a);o=Fs(o,o.next),l=Fs(l,l.next),go(o,t,e,n,i,r,0),go(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tm(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=vf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(am(c))}i.sort(em);for(let r=0;r<i.length;r++)e=nm(i[r],e);return e}function em(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function nm(s,t){const e=im(s,t);if(!e)return t;const n=Sf(e,s);return Fs(n,n.next),Fs(e,e.next)}function im(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(mr(s,e))return e;do{if(mr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Mf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);_o(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&sm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function sm(s,t){return Tn(s.prev,s,t.prev)<0&&Tn(t.next,s,s.next)<0}function rm(s,t,e,n){let i=s;do i.z===0&&(i.z=Ic(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,om(i)}function om(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Ic(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function am(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Mf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Xr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Mf(s,t,e,n,i,r,o,a)}function lm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cm(s,t)&&(_o(s,t)&&_o(t,s)&&hm(s,t)&&(Tn(s.prev,s,t.prev)||Tn(s,t.prev,t))||mr(s,t)&&Tn(s.prev,s,s.next)>0&&Tn(t.prev,t,t.next)>0)}function Tn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function mr(s,t){return s.x===t.x&&s.y===t.y}function yf(s,t,e,n){const i=Qo(Tn(s,t,e)),r=Qo(Tn(s,t,n)),o=Qo(Tn(e,n,s)),a=Qo(Tn(e,n,t));return!!(i!==r&&o!==a||i===0&&$o(s,e,t)||r===0&&$o(s,n,t)||o===0&&$o(e,s,n)||a===0&&$o(e,t,n))}function $o(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Qo(s){return s>0?1:s<0?-1:0}function cm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&yf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function _o(s,t){return Tn(s.prev,s,s.next)<0?Tn(s,t,s.next)>=0&&Tn(s,s.prev,t)>=0:Tn(s,t,s.prev)<0||Tn(s,s.next,t)<0}function hm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sf(s,t){const e=Nc(s.i,s.x,s.y),n=Nc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pu(s,t,e,n){const i=Nc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class dm{static triangulate(t,e,n=2){return Z0(t,e,n)}}class as{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return as.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Lu(t),Du(n,t);let o=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Du(n,e[l]);const a=dm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Lu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Du(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ia extends dn{constructor(t=new mo([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new De(i,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:fm;let T,b=!1,D,R,M,w;if(g){T=g.getSpacedPoints(h),b=!0,f=!1;const Et=g.isCatmullRomCurve3?g.closed:!1;D=g.computeFrenetFrames(h,Et),R=new G,M=new G,w=new G}f||(m=0,u=0,p=0,v=0);const B=a.extractPoints(c);let O=B.shape;const q=B.holes;if(!as.isClockWise(O)){O=O.reverse();for(let Et=0,Kt=q.length;Et<Kt;Et++){const Qt=q[Et];as.isClockWise(Qt)&&(q[Et]=Qt.reverse())}}function j(Et){const Qt=10000000000000001e-36;let oe=Et[0];for(let Lt=1;Lt<=Et.length;Lt++){const Ae=Lt%Et.length,Zt=Et[Ae],Ut=Zt.x-oe.x,Ct=Zt.y-oe.y,Ft=Ut*Ut+Ct*Ct,L=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(oe.x),Math.abs(oe.y)),te=Qt*L*L;if(Ft<=te){Et.splice(Ae,1),Lt--;continue}oe=Zt}}j(O),q.forEach(j);const N=q.length,st=O;for(let Et=0;Et<N;Et++){const Kt=q[Et];O=O.concat(Kt)}function at(Et,Kt,Qt){return Kt||Be("ExtrudeGeometry: vec does not exist"),Et.clone().addScaledVector(Kt,Qt)}const $=O.length;function ot(Et,Kt,Qt){let oe,Lt,Ae;const Zt=Et.x-Kt.x,Ut=Et.y-Kt.y,Ct=Qt.x-Et.x,Ft=Qt.y-Et.y,L=Zt*Zt+Ut*Ut,te=Zt*Ft-Ut*Ct;if(Math.abs(te)>Number.EPSILON){const Jt=Math.sqrt(L),qt=Math.sqrt(Ct*Ct+Ft*Ft),Rt=Kt.x-Ut/Jt,ee=Kt.y+Zt/Jt,Mt=Qt.x-Ft/qt,lt=Qt.y+Ct/qt,C=((Mt-Rt)*Ft-(lt-ee)*Ct)/(Zt*Ft-Ut*Ct);oe=Rt+Zt*C-Et.x,Lt=ee+Ut*C-Et.y;const S=oe*oe+Lt*Lt;if(S<=2)return new It(oe,Lt);Ae=Math.sqrt(S/2)}else{let Jt=!1;Zt>Number.EPSILON?Ct>Number.EPSILON&&(Jt=!0):Zt<-Number.EPSILON?Ct<-Number.EPSILON&&(Jt=!0):Math.sign(Ut)===Math.sign(Ft)&&(Jt=!0),Jt?(oe=-Ut,Lt=Zt,Ae=Math.sqrt(L)):(oe=Zt,Lt=Ut,Ae=Math.sqrt(L/2))}return new It(oe/Ae,Lt/Ae)}const nt=[];for(let Et=0,Kt=st.length,Qt=Kt-1,oe=Et+1;Et<Kt;Et++,Qt++,oe++)Qt===Kt&&(Qt=0),oe===Kt&&(oe=0),nt[Et]=ot(st[Et],st[Qt],st[oe]);const Q=[];let St,Yt=nt.concat();for(let Et=0,Kt=N;Et<Kt;Et++){const Qt=q[Et];St=[];for(let oe=0,Lt=Qt.length,Ae=Lt-1,Zt=oe+1;oe<Lt;oe++,Ae++,Zt++)Ae===Lt&&(Ae=0),Zt===Lt&&(Zt=0),St[oe]=ot(Qt[oe],Qt[Ae],Qt[Zt]);Q.push(St),Yt=Yt.concat(St)}let ce;if(m===0)ce=as.triangulateShape(st,q);else{const Et=[],Kt=[];for(let Qt=0;Qt<m;Qt++){const oe=Qt/m,Lt=u*Math.cos(oe*Math.PI/2),Ae=p*Math.sin(oe*Math.PI/2)+v;for(let Zt=0,Ut=st.length;Zt<Ut;Zt++){const Ct=at(st[Zt],nt[Zt],Ae);re(Ct.x,Ct.y,-Lt),oe===0&&Et.push(Ct)}for(let Zt=0,Ut=N;Zt<Ut;Zt++){const Ct=q[Zt];St=Q[Zt];const Ft=[];for(let L=0,te=Ct.length;L<te;L++){const Jt=at(Ct[L],St[L],Ae);re(Jt.x,Jt.y,-Lt),oe===0&&Ft.push(Jt)}oe===0&&Kt.push(Ft)}}ce=as.triangulateShape(Et,Kt)}const gt=ce.length,Wt=p+v;for(let Et=0;Et<$;Et++){const Kt=f?at(O[Et],Yt[Et],Wt):O[Et];b?(M.copy(D.normals[0]).multiplyScalar(Kt.x),R.copy(D.binormals[0]).multiplyScalar(Kt.y),w.copy(T[0]).add(M).add(R),re(w.x,w.y,w.z)):re(Kt.x,Kt.y,0)}for(let Et=1;Et<=h;Et++)for(let Kt=0;Kt<$;Kt++){const Qt=f?at(O[Kt],Yt[Kt],Wt):O[Kt];b?(M.copy(D.normals[Et]).multiplyScalar(Qt.x),R.copy(D.binormals[Et]).multiplyScalar(Qt.y),w.copy(T[Et]).add(M).add(R),re(w.x,w.y,w.z)):re(Qt.x,Qt.y,d/h*Et)}for(let Et=m-1;Et>=0;Et--){const Kt=Et/m,Qt=u*Math.cos(Kt*Math.PI/2),oe=p*Math.sin(Kt*Math.PI/2)+v;for(let Lt=0,Ae=st.length;Lt<Ae;Lt++){const Zt=at(st[Lt],nt[Lt],oe);re(Zt.x,Zt.y,d+Qt)}for(let Lt=0,Ae=q.length;Lt<Ae;Lt++){const Zt=q[Lt];St=Q[Lt];for(let Ut=0,Ct=Zt.length;Ut<Ct;Ut++){const Ft=at(Zt[Ut],St[Ut],oe);b?re(Ft.x,Ft.y+T[h-1].y,T[h-1].x+Qt):re(Ft.x,Ft.y,d+Qt)}}}ne(),ue();function ne(){const Et=i.length/3;if(f){let Kt=0,Qt=$*Kt;for(let oe=0;oe<gt;oe++){const Lt=ce[oe];ze(Lt[2]+Qt,Lt[1]+Qt,Lt[0]+Qt)}Kt=h+m*2,Qt=$*Kt;for(let oe=0;oe<gt;oe++){const Lt=ce[oe];ze(Lt[0]+Qt,Lt[1]+Qt,Lt[2]+Qt)}}else{for(let Kt=0;Kt<gt;Kt++){const Qt=ce[Kt];ze(Qt[2],Qt[1],Qt[0])}for(let Kt=0;Kt<gt;Kt++){const Qt=ce[Kt];ze(Qt[0]+$*h,Qt[1]+$*h,Qt[2]+$*h)}}n.addGroup(Et,i.length/3-Et,0)}function ue(){const Et=i.length/3;let Kt=0;jt(st,Kt),Kt+=st.length;for(let Qt=0,oe=q.length;Qt<oe;Qt++){const Lt=q[Qt];jt(Lt,Kt),Kt+=Lt.length}n.addGroup(Et,i.length/3-Et,1)}function jt(Et,Kt){let Qt=Et.length;for(;--Qt>=0;){const oe=Qt;let Lt=Qt-1;Lt<0&&(Lt=Et.length-1);for(let Ae=0,Zt=h+m*2;Ae<Zt;Ae++){const Ut=$*Ae,Ct=$*(Ae+1),Ft=Kt+oe+Ut,L=Kt+Lt+Ut,te=Kt+Lt+Ct,Jt=Kt+oe+Ct;me(Ft,L,te,Jt)}}}function re(Et,Kt,Qt){l.push(Et),l.push(Kt),l.push(Qt)}function ze(Et,Kt,Qt){_e(Et),_e(Kt),_e(Qt);const oe=i.length/3,Lt=y.generateTopUV(n,i,oe-3,oe-2,oe-1);Te(Lt[0]),Te(Lt[1]),Te(Lt[2])}function me(Et,Kt,Qt,oe){_e(Et),_e(Kt),_e(oe),_e(Kt),_e(Qt),_e(oe);const Lt=i.length/3,Ae=y.generateSideWallUV(n,i,Lt-6,Lt-3,Lt-2,Lt-1);Te(Ae[0]),Te(Ae[1]),Te(Ae[3]),Te(Ae[1]),Te(Ae[2]),Te(Ae[3])}function _e(Et){i.push(l[Et*3+0]),i.push(l[Et*3+1]),i.push(l[Et*3+2])}function Te(Et){r.push(Et.x),r.push(Et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Da[i.type]().fromJSON(i)),new Ia(n,t.options)}}const fm={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new It(r,o),new It(a,l),new It(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new It(o,1-l),new It(c,1-d),new It(f,1-p),new It(v,1-g)]:[new It(a,1-l),new It(h,1-d),new It(u,1-p),new It(m,1-g)]}};function pm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vh extends dn{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$e(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new G,f=new It,u=new G,p=new G,v=new G;let m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,u.x=g*1,u.y=-m,u.z=g*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(p)}for(let y=0;y<=e;y++){const T=n+y*h*i,b=Math.sin(T),D=Math.cos(T);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*b,d.y=t[R].y,d.z=t[R].x*D,o.push(d.x,d.y,d.z),f.x=y/e,f.y=R/(t.length-1),a.push(f.x,f.y);const M=l[3*R+0]*b,w=l[3*R+1],B=l[3*R+0]*D;c.push(M,w,B)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){const b=T+y*t.length,D=b,R=b+t.length,M=b+t.length+1,w=b+1;r.push(D,R,w),r.push(M,w,R)}this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("uv",new De(a,2)),this.setAttribute("normal",new De(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.points,t.segments,t.phiStart,t.phiLength)}}class Mh extends Wa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mh(t.radius,t.detail)}}class cn extends dn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const y=g*f-o;for(let T=0;T<c;T++){const b=T*d-r;p.push(b,-y,0),v.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const T=y+c*g,b=y+c*(g+1),D=y+1+c*(g+1),R=y+1+c*g;u.push(T,b,R),u.push(b,D,R)}this.setIndex(u),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class yh extends dn{constructor(t=new mo([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new De(i,3)),this.setAttribute("normal",new De(r,3)),this.setAttribute("uv",new De(o,2));function c(h){const d=i.length/3,f=h.extractPoints(e);let u=f.shape;const p=f.holes;as.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];as.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=as.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){const y=u[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){const y=v[m],T=y[0]+d,b=y[1]+d,D=y[2]+d;n.push(T,b,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new yh(n,t.curveSegments)}}function mm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class an extends dn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new G,f=new G,u=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const y=[],T=g/n,b=o+T*a,D=t*Math.cos(b),R=Math.sqrt(t*t-D*D);let M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const B=w/e,O=i+B*r;d.x=-R*Math.cos(O),d.y=D,d.z=R*Math.sin(O),p.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(B+M,1-T),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const T=h[g][y+1],b=h[g][y],D=h[g+1][y],R=h[g+1][y+1];(g!==0||o>0)&&u.push(T,b,R),(g!==n-1||l<Math.PI)&&u.push(b,D,R)}this.setIndex(u),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cn extends dn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new G,u=new G,p=new G;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let g=0;g<=i;g++){const y=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,y=(i+1)*(v-1)+m-1,T=(i+1)*(v-1)+m,b=(i+1)*v+m;l.push(g,y,b),l.push(y,T,b)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Sh extends dn{constructor(t=new _f(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new G,l=new G,c=new It;let h=new G;const d=[],f=[],u=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(u,2));function v(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),y(),g()}function m(T){h=t.getPointAt(T/e,h);const b=o.normals[T],D=o.binormals[T];for(let R=0;R<=i;R++){const M=R/i*Math.PI*2,w=Math.sin(M),B=-Math.cos(M);l.x=B*b.x+w*D.x,l.y=B*b.y+w*D.y,l.z=B*b.z+w*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let T=1;T<=e;T++)for(let b=1;b<=i;b++){const D=(i+1)*(T-1)+(b-1),R=(i+1)*T+(b-1),M=(i+1)*T+b,w=(i+1)*(T-1)+b;p.push(D,R,w),p.push(R,M,w)}}function y(){for(let T=0;T<=e;T++)for(let b=0;b<=i;b++)c.x=T/e,c.y=b/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sh(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function gr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Iu(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Iu(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ri(s){const t={};for(let e=0;e<s.length;e++){const n=gr(s[e]);for(const i in n)t[i]=n[i]}return t}function Iu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function gm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:on.workingColorSpace}const vo={clone:gr,merge:ri};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new It().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class wf extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _r extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ii extends _r{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return cr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){cr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ma extends mi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class vm extends mi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Mm extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ym extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ss(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Yr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Sm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Nu(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function bm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class Mr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class wm extends Mr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rr,endingEnd:rr}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case or:r=t,a=2*e-n;break;case wa:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case or:o=t,l=2*n-e;break;case wa:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,T=(-1-u)*m+(1.5+u)*v+.5*p,b=u*m-u*v;for(let D=0;D!==a;++D)r[D]=g*o[h+D]+y*o[c+D]+T*o[l+D]+b*o[d+D];return r}}class Tf extends Mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class Tm extends Mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Em extends Mr{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}const f=a*2,u=t-1;for(let p=0;p!==a;++p){const v=o[c+p],m=o[l+p],g=u*f+p*2,y=d[g],T=d[g+1],b=t*f+p*2,D=h[b],R=h[b+1],M=Rm(n,e,y,D,i);r[p]=Ef(M,v,T,R,m)}return r}}function Ef(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Am(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Rm(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=Ef(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Am(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Ni{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Yr(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Em(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break;case Xh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Yr(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Yr(this.settings)&&(Ou(this.settings.inTangents,t),Ou(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Be("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Xp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const v=e[d+p];if(v!==e[f+p]||v!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Yr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Uu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Ou(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=ao;class yr extends Ni{constructor(t,e,n){super(t,e,n)}}yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=oo;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Af extends Ni{constructor(t,e,n,i){super(t,e,n,i)}}Af.prototype.ValueTypeName="color";class Mo extends Ni{constructor(t,e,n,i){super(t,e,n,i)}}Mo.prototype.ValueTypeName="number";class Cm extends Mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class yo extends Ni{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Cm(this.times,this.values,this.getValueSize(),t)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends Ni{constructor(t,e,n){super(t,e,n)}}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=oo;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Na extends Ni{constructor(t,e,n,i){super(t,e,n,i)}}Na.prototype.ValueTypeName="vector";class Uc{constructor(t="",e=-1,n=[],i=ah){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Lm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Sm(l);l=Nu(l,1,h),c=Nu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mo(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Pm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return Na;case"color":return Af;case"quaternion":return yo;case"bool":case"boolean":return yr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Lm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Pm(s.type);if(s.times===void 0){const n=[],i=[];bm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Yr(s.settings)&&(e.settings={inTangents:Ss(s.settings.inTangents,Float32Array),outTangents:Ss(s.settings.outTangents,Float32Array)}),e}const ls={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Fu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Fu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Fu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Rf{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Dm=new Rf;class br{constructor(t){this.manager=t!==void 0?t:Dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}br.DEFAULT_MATERIAL_NAME="__DEFAULT";const is={};class Im extends Error{constructor(t,e){super(t),this.response=e}}class Cf extends br{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ls.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(is[t]!==void 0){is[t].push({onLoad:e,onProgress:n,onError:i});return}is[t]=[],is[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=is[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let v=0;const m=new ReadableStream({start(g){y();function y(){d.read().then(({done:T,value:b})=>{if(T)g.close();else{v+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:u});for(let R=0,M=h.length;R<M;R++){const w=h[R];w.onProgress&&w.onProgress(D)}g.enqueue(b),y()}},T=>{g.error(T)})}}});return new Response(m)}else throw new Im(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{ls.add(`file:${t}`,c);const h=is[t];delete is[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=is[t];if(h===void 0)throw this.manager.itemError(t),c;delete is[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const tr=new WeakMap;class Nm extends br{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ls.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=tr.get(o);d===void 0&&(d=[],tr.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=ho("img");function l(){h(),e&&e(this);const d=tr.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}tr.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),ls.remove(`image:${t}`);const f=tr.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}tr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ls.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Um extends br{constructor(t){super(t)}load(t,e,n,i){const r=new Bn,o=new Nm(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Xa extends Mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Om extends Xa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Cl=new Ue,Bu=new G,zu=new G;class bh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===co||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jo=new G,ta=new Sn,Fi=new G;class Pf extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jo,ta,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,ta,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(jo,ta,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,ta,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new G,ku=new It,Hu=new It;class hi extends Pf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Hu),e.subVectors(Hu,ku)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fm extends bh{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=pr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Bm extends Xa{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class zm extends bh{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class cs extends Xa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ya extends Pf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class km extends bh{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends Xa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new km}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class eo{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Pl=new WeakMap;class Hm extends br{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ls.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Pl.has(o)===!0?(i&&i(Pl.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Pl.set(l,c),ls.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ls.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const er=-90,nr=1;class Oc extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hi(er,nr,t,e);i.layers=this.layers,this.add(i);const r=new hi(er,nr,t,e);r.layers=this.layers,this.add(r);const o=new hi(er,nr,t,e);o.layers=this.layers,this.add(o);const a=new hi(er,nr,t,e);a.layers=this.layers,this.add(a);const l=new hi(er,nr,t,e);l.layers=this.layers,this.add(l);const c=new hi(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Gm extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Vm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Wm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Wm(){this._document.hidden===!1&&this.reset()}class Xm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Sn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;Sn.multiplyQuaternionsFlat(t,o,t,e,t,n),Sn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const wh="\\[\\]\\.:\\/",Ym=new RegExp("["+wh+"]","g"),Th="[^"+wh+"]",qm="[^"+wh.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",Th),Zm=/(WCOD+)?/.source.replace("WCOD",qm),Jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Qm=new RegExp("^"+Km+Zm+Jm+$m+"$"),jm=["material","materials","bones","map"];class tg{constructor(t,e,n){const i=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pn{constructor(t,e,n){this.path=e,this.parsedPath=n||pn.parseTrackName(e),this.node=pn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pn.Composite(t,e,n):new pn(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(t){const e=Qm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=pn.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pn.Composite=tg;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class eg{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:rr,endingEnd:rr};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Dp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Np:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case ah:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Ip;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Lp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=or,i.endingEnd=or):(t?i.endingStart=this.zeroSlopeAtStart?or:rr:i.endingStart=wa,e?i.endingEnd=this.zeroSlopeAtEnd?or:rr:i.endingEnd=wa)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const ng=new Float32Array(1);class ig extends fs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}const v=e&&e._propertyBindings[d].binding.parsedPath;p=new Xm(pn.create(n,u,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Tf(new Float32Array(2),new Float32Array(2),1,ng),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?Uc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ah),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new eg(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Uc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Gu=new Ue;class Df{constructor(t,e,n=0,i=1/0){this.ray=new vr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(t,e=!0,n=[]){return Fc(t,this,n,e),n.sort(Vu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Fc(t[i],this,n,e);return n.sort(Vu),n}}function Vu(s,t){return s.distance-t.distance}function Fc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],t,e,!0)}}class Wu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sg extends fs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xu(s,t,e,n){const i=rg(n);switch(e){case Yd:return s*t;case Ha:return s*t/i.components*i.byteLength;case sh:return s*t/i.components*i.byteLength;case Us:return s*t*2/i.components*i.byteLength;case rh:return s*t*2/i.components*i.byteLength;case qd:return s*t*3/i.components*i.byteLength;case Ci:return s*t*4/i.components*i.byteLength;case oh:return s*t*4/i.components*i.byteLength;case ua:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(s,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(s,8)*Math.max(t,8)/2;case sc:case rc:case ac:case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oc:case Sa:case cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wc:case Tc:case Ec:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ac:case Rc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ba:case Cc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rg(s){switch(s){case pi:case Gd:return{byteLength:1,components:1};case ro:case Vd:case ti:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Li:case eh:case yi:return{byteLength:4,components:1};case Wd:case Xd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);function If(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function og(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],v=d[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const v=d[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,s_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,fx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,px=`#define DISTANCE
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
}`,mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,wx=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rx=`#define PHONG
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
}`,Cx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Px=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Dx=`#define TOON
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
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Nx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Fx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,en={alphahash_fragment:ag,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:hg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:xg,bsdfs:vg,iridescence_fragment:Mg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Tg,color_fragment:Eg,color_pars_fragment:Ag,color_pars_vertex:Rg,color_vertex:Cg,common:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ig,emissivemap_fragment:Ng,emissivemap_pars_fragment:Ug,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:kg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Vg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:Yg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:$g,lights_toon_fragment:jg,lights_toon_pars_fragment:t_,lights_phong_fragment:e_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:a_,lightprobes_pars_fragment:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:x_,morphinstance_vertex:v_,morphcolor_vertex:M_,morphnormal_vertex:y_,morphtarget_pars_vertex:S_,morphtarget_vertex:b_,normal_fragment_begin:w_,normal_fragment_maps:T_,normal_pars_fragment:E_,normal_pars_vertex:A_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:I_,opaque_fragment:N_,packing:U_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:B_,dithering_pars_fragment:z_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:Y_,skinning_pars_vertex:q_,skinning_vertex:K_,skinnormal_vertex:Z_,specularmap_fragment:J_,specularmap_pars_fragment:$_,tonemapping_fragment:Q_,tonemapping_pars_fragment:j_,transmission_fragment:tx,transmission_pars_fragment:ex,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:rx,background_vert:ox,background_frag:ax,backgroundCube_vert:lx,backgroundCube_frag:cx,cube_vert:hx,cube_frag:ux,depth_vert:dx,depth_frag:fx,distance_vert:px,distance_frag:mx,equirect_vert:gx,equirect_frag:_x,linedashed_vert:xx,linedashed_frag:vx,meshbasic_vert:Mx,meshbasic_frag:yx,meshlambert_vert:Sx,meshlambert_frag:bx,meshmatcap_vert:wx,meshmatcap_frag:Tx,meshnormal_vert:Ex,meshnormal_frag:Ax,meshphong_vert:Rx,meshphong_frag:Cx,meshphysical_vert:Px,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Ix,points_vert:Nx,points_frag:Ux,shadow_vert:Ox,shadow_frag:Fx,sprite_vert:Bx,sprite_frag:zx},pe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ki={basic:{uniforms:ri([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:en.meshbasic_vert,fragmentShader:en.meshbasic_frag},lambert:{uniforms:ri([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:en.meshlambert_vert,fragmentShader:en.meshlambert_frag},phong:{uniforms:ri([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:en.meshphong_vert,fragmentShader:en.meshphong_frag},standard:{uniforms:ri([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag},toon:{uniforms:ri([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ye(0)}}]),vertexShader:en.meshtoon_vert,fragmentShader:en.meshtoon_frag},matcap:{uniforms:ri([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:en.meshmatcap_vert,fragmentShader:en.meshmatcap_frag},points:{uniforms:ri([pe.points,pe.fog]),vertexShader:en.points_vert,fragmentShader:en.points_frag},dashed:{uniforms:ri([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:en.linedashed_vert,fragmentShader:en.linedashed_frag},depth:{uniforms:ri([pe.common,pe.displacementmap]),vertexShader:en.depth_vert,fragmentShader:en.depth_frag},normal:{uniforms:ri([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:en.meshnormal_vert,fragmentShader:en.meshnormal_frag},sprite:{uniforms:ri([pe.sprite,pe.fog]),vertexShader:en.sprite_vert,fragmentShader:en.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:en.background_vert,fragmentShader:en.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:en.backgroundCube_vert,fragmentShader:en.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:en.cube_vert,fragmentShader:en.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:en.equirect_vert,fragmentShader:en.equirect_frag},distance:{uniforms:ri([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:en.distance_vert,fragmentShader:en.distance_frag},shadow:{uniforms:ri([pe.lights,pe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:en.shadow_vert,fragmentShader:en.shadow_frag}};ki.physical={uniforms:ri([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag};const ea={r:0,b:0,g:0},kx=new Ue,Nf=new Xe;Nf.set(-1,0,0,0,1,0,0,0,1);function Hx(s,t,e,n,i,r){const o=new ye(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=t.get(T,b)}return T}function p(y){let T=!1;const b=u(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),T=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,T){const b=u(T);b&&b.isCubeTexture?(c===void 0&&(c=new Ge(new Pt(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:gr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nf),c.material.toneMapped=on.getTransfer(b.colorSpace)!==fn,(h!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ge(new cn(2,2),new ai({name:"BackgroundMaterial",uniforms:gr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=on.getTransfer(b.colorSpace)!==fn,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(ea,bf(s)),e.buffers.color.setClear(ea.r,ea.g,ea.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Gx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(q,it,j,N,st){let at=!1;const $=d(q,N,j,it);r!==$&&(r=$,c(r.object)),at=u(q,N,j,st),at&&p(q,N,j,st),st!==null&&t.update(st,s.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,b(q,it,j,N),st!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return s.createVertexArray()}function c(q){return s.bindVertexArray(q)}function h(q){return s.deleteVertexArray(q)}function d(q,it,j,N){const st=N.wireframe===!0;let at=n[it.id];at===void 0&&(at={},n[it.id]=at);const $=q.isInstancedMesh===!0?q.id:0;let ot=at[$];ot===void 0&&(ot={},at[$]=ot);let nt=ot[j.id];nt===void 0&&(nt={},ot[j.id]=nt);let Q=nt[st];return Q===void 0&&(Q=f(l()),nt[st]=Q),Q}function f(q){const it=[],j=[],N=[];for(let st=0;st<e;st++)it[st]=0,j[st]=0,N[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:it,enabledAttributes:j,attributeDivisors:N,object:q,attributes:{},index:null}}function u(q,it,j,N){const st=r.attributes,at=it.attributes;let $=0;const ot=j.getAttributes();for(const nt in ot)if(ot[nt].location>=0){const St=st[nt];let Yt=at[nt];if(Yt===void 0&&(nt==="instanceMatrix"&&q.instanceMatrix&&(Yt=q.instanceMatrix),nt==="instanceColor"&&q.instanceColor&&(Yt=q.instanceColor)),St===void 0||St.attribute!==Yt||Yt&&St.data!==Yt.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function p(q,it,j,N){const st={},at=it.attributes;let $=0;const ot=j.getAttributes();for(const nt in ot)if(ot[nt].location>=0){let St=at[nt];St===void 0&&(nt==="instanceMatrix"&&q.instanceMatrix&&(St=q.instanceMatrix),nt==="instanceColor"&&q.instanceColor&&(St=q.instanceColor));const Yt={};Yt.attribute=St,St&&St.data&&(Yt.data=St.data),st[nt]=Yt,$++}r.attributes=st,r.attributesNum=$,r.index=N}function v(){const q=r.newAttributes;for(let it=0,j=q.length;it<j;it++)q[it]=0}function m(q){g(q,0)}function g(q,it){const j=r.newAttributes,N=r.enabledAttributes,st=r.attributeDivisors;j[q]=1,N[q]===0&&(s.enableVertexAttribArray(q),N[q]=1),st[q]!==it&&(s.vertexAttribDivisor(q,it),st[q]=it)}function y(){const q=r.newAttributes,it=r.enabledAttributes;for(let j=0,N=it.length;j<N;j++)it[j]!==q[j]&&(s.disableVertexAttribArray(j),it[j]=0)}function T(q,it,j,N,st,at,$){$===!0?s.vertexAttribIPointer(q,it,j,st,at):s.vertexAttribPointer(q,it,j,N,st,at)}function b(q,it,j,N){v();const st=N.attributes,at=j.getAttributes(),$=it.defaultAttributeValues;for(const ot in at){const nt=at[ot];if(nt.location>=0){let Q=st[ot];if(Q===void 0&&(ot==="instanceMatrix"&&q.instanceMatrix&&(Q=q.instanceMatrix),ot==="instanceColor"&&q.instanceColor&&(Q=q.instanceColor)),Q!==void 0){const St=Q.normalized,Yt=Q.itemSize,ce=t.get(Q);if(ce===void 0)continue;const gt=ce.buffer,Wt=ce.type,ne=ce.bytesPerElement,ue=Wt===s.INT||Wt===s.UNSIGNED_INT||Q.gpuType===eh;if(Q.isInterleavedBufferAttribute){const jt=Q.data,re=jt.isInterleavedBuffer===!0?jt.stride:jt.itemSize,ze=Q.offset;if(jt.isInstancedInterleavedBuffer||jt.isInstancedBufferAttribute){for(let me=0;me<nt.locationSize;me++)g(nt.location+me,jt.meshPerAttribute);q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let me=0;me<nt.locationSize;me++)m(nt.location+me);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let me=0;me<nt.locationSize;me++)T(nt.location+me,Yt/nt.locationSize,Wt,St,re*ne,(ze+Yt/nt.locationSize*me)*ne,ue)}else{if(Q.isInstancedBufferAttribute){for(let jt=0;jt<nt.locationSize;jt++)g(nt.location+jt,Q.meshPerAttribute);q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let jt=0;jt<nt.locationSize;jt++)m(nt.location+jt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let jt=0;jt<nt.locationSize;jt++)T(nt.location+jt,Yt/nt.locationSize,Wt,St,Yt*ne,Yt/nt.locationSize*jt*ne,ue)}}else if($!==void 0){const St=$[ot];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(nt.location,St);break;case 3:s.vertexAttrib3fv(nt.location,St);break;case 4:s.vertexAttrib4fv(nt.location,St);break;default:s.vertexAttrib1fv(nt.location,St)}}}}y()}function D(){B();for(const q in n){const it=n[q];for(const j in it){const N=it[j];for(const st in N){const at=N[st];for(const $ in at)h(at[$].object),delete at[$];delete N[st]}}delete n[q]}}function R(q){if(n[q.id]===void 0)return;const it=n[q.id];for(const j in it){const N=it[j];for(const st in N){const at=N[st];for(const $ in at)h(at[$].object),delete at[$];delete N[st]}}delete n[q.id]}function M(q){for(const it in n){const j=n[it];for(const N in j){const st=j[N];if(st[q.id]===void 0)continue;const at=st[q.id];for(const $ in at)h(at[$].object),delete at[$];delete st[q.id]}}}function w(q){for(const it in n){const j=n[it],N=q.isInstancedMesh===!0?q.id:0,st=j[N];if(st!==void 0){for(const at in st){const $=st[at];for(const ot in $)h($[ot].object),delete $[ot];delete st[at]}delete j[N],Object.keys(j).length===0&&delete n[it]}}}function B(){O(),o=!0,r!==i&&(r=i,c(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Vx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Ci&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const w=M===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==pi&&M!==yi&&!w&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:D,samples:R}}function Xx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new rs,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,T=y*4;let b=g.clippingState||null;l.value=b,b=h(p,f,T,u);for(let D=0;D!==T;++D)b[D]=e[D];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=u+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,b=u;T!==v;++T,b+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class Eh extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pt(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Ns});r.uniforms.tEquirect.value=e;const o=new Ge(i,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Xn),new Oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Yu=256,Yx=3,qx=20,Uf=256,Of=16,Kx=3,Zx=new G,Jx=new ye;class Ua{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Oc(1,10,null),this._boxMesh=new Ge(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Zx}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Jx));const m=new Oc(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Yu,tf(t))}_fromTexture(t,e){t.mapping===dr||t.mapping===so?this._setSize(t.image.length===0?Yu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=qu(t,!1,!1),n=Math.log2(t)-Yx;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=qu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===dr||t.mapping===so?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ku()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$x(),this._integrationMaterial=Qx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Of);for(let o=0;o<=n;o++){const a=Ua.lodToRoughness(o,n);if(o>n-Kx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Uf*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=jx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function qu(s,t,e){return new Eh(s,{minFilter:Vi,generateMipmaps:t,type:ti,colorSpace:gi,depthBuffer:e})}function So(s,t,e){return new ai({name:s,uniforms:t,vertexShader:en.cube_vert,fragmentShader:e,side:jn,blending:Ns,depthTest:!1,depthWrite:!1})}function $x(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Uf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qx(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Of}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jx(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ku(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zu(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Qa||u===ja)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const v=new Eh(p.height);return v.fromEquirectangularTexture(s,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Qa||u===ja,v=u===dr||u===so;if(p||v){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ua(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return p&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Ua(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Qa?f.mapping=dr:u===ja&&(f.mapping=so),f}function l(f){let u=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ev(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&cr("WebGLRenderer: "+n+" extension not supported."),i}}}function nv(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(p){const v=p.attributes;for(const m in v)t.update(v[m],s.ARRAY_BUFFER)}function d(p){const v=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const y=v!==null?v.array.length:m.array.length/3-1,T=m.count>=65535?rf:sf,b=new T(Math.ceil(y/3)*6,1),D=b.array;if(v!==null){const M=v.array;g=v.version;for(let w=0,B=0;w<y;w+=3){const O=M[w+0],q=M[w+1],it=M[w+2];D[B++]=O,D[B++]=q,D[B++]=q,D[B++]=it,D[B++]=it,D[B++]=O}}else{g=m.version;for(let M=0,w=0;M<y;M+=3){const B=M+0,O=M+1,q=M+2;D[w++]=B,D[w++]=O,D[w++]=O,D[w++]=q,D[w++]=q,D[w++]=B}}b.version=g;const R=r.get(p);R&&t.remove(R),r.set(p,b)}function f(p){const v=r.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function iv(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function rv(s,t,e){const n=new WeakMap,i=new mn;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let B=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;u===!0&&(T=1),p===!0&&(T=2),v===!0&&(T=3);let b=a.attributes.position.count*T,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*D*4*d),M=new ef(R,b,D,d);M.type=yi,M.needsUpdate=!0;const w=T*4;for(let O=0;O<d;O++){const q=m[O],it=g[O],j=y[O],N=b*D*4*O;for(let st=0;st<q.count;st++){const at=st*w;u===!0&&(i.fromBufferAttribute(q,st),R[N+at+0]=i.x,R[N+at+1]=i.y,R[N+at+2]=i.z,R[N+at+3]=0),p===!0&&(i.fromBufferAttribute(it,st),R[N+at+4]=i.x,R[N+at+5]=i.y,R[N+at+6]=i.z,R[N+at+7]=0),v===!0&&(i.fromBufferAttribute(j,st),R[N+at+8]=i.x,R[N+at+9]=i.y,R[N+at+10]=i.z,R[N+at+11]=j.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new It(b,D)},n.set(a,f),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ov(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const av={[Zc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[ka]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function lv(s,t,e,n,i,r){const o=new ei(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new dn;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));const d=new wf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ge(h,d),u=new Ya(-1,1,1,-1,0,1);let p=null,v=null,m=!1,g,y=null,T=[],b=!1;this.setSize=function(D,R){o.setSize(D,R),a!==null&&a.setSize(D,R),l!==null&&l.setSize(D,R);for(let M=0;M<T.length;M++){const w=T[M];w.setSize&&w.setSize(D,R)}},this.setEffects=function(D){T=D,b=T.length>0&&T[0].isRenderPass===!0;const R=o.width,M=o.height;T.length>0&&a===null&&(a=new ei(R,M,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new ei(R,M,{type:ti,depthBuffer:!1,stencilBuffer:!1}));const w=i===!0&&T.some(B=>B.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Os(R,M),r===!0&&(c.format=ws,c.type=fr)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let B=0;B<T.length;B++){const O=T[B];O.setSize&&O.setSize(R,M),w&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(D,R){if(m||D.toneMapping===hs&&T.length===0)return!1;if(y=R,R!==null){const M=R.width,w=R.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return b===!1&&D.setRenderTarget(o),g=D.toneMapping,D.toneMapping=hs,!0},this.hasRenderPass=function(){return b},this.end=function(D,R){D.toneMapping=g,m=!0;let M=o,w=a;for(let B=0;B<T.length;B++){const O=T[B];O.enabled!==!1&&(O.render(D,w,M,R),O.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(p!==D.outputColorSpace||v!==D.toneMapping){p=D.outputColorSpace,v=D.toneMapping,d.defines={},on.getTransfer(p)===fn&&(d.defines.SRGB_TRANSFER="");const B=av[v];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,D.setRenderTarget(y),D.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Ff=new Bn,Bf=new Os(1,1),zf=new uf(1),kf=new ef,Hf=new m0,Gf=new hf,Ju=[],$u=[],Qu=new Float32Array(16),ju=new Float32Array(9),td=new Float32Array(4);function wr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ju[i];if(r===void 0&&(r=new Float32Array(i),Ju[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function zn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function kn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qa(s,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function cv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;s.uniform2fv(this.addr,t),kn(e,t)}}function uv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(zn(e,t))return;s.uniform3fv(this.addr,t),kn(e,t)}}function dv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;s.uniform4fv(this.addr,t),kn(e,t)}}function fv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),kn(e,t)}else{if(zn(e,n))return;td.set(n),s.uniformMatrix2fv(this.addr,!1,td),kn(e,n)}}function pv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),kn(e,t)}else{if(zn(e,n))return;ju.set(n),s.uniformMatrix3fv(this.addr,!1,ju),kn(e,n)}}function mv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),kn(e,t)}else{if(zn(e,n))return;Qu.set(n),s.uniformMatrix4fv(this.addr,!1,Qu),kn(e,n)}}function gv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _v(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;s.uniform2iv(this.addr,t),kn(e,t)}}function xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;s.uniform3iv(this.addr,t),kn(e,t)}}function vv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;s.uniform4iv(this.addr,t),kn(e,t)}}function Mv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;s.uniform2uiv(this.addr,t),kn(e,t)}}function Sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;s.uniform3uiv(this.addr,t),kn(e,t)}}function bv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;s.uniform4uiv(this.addr,t),kn(e,t)}}function Ka(s){return s.version===0&&(s.compareFunction=$d,s.needsUpdate=!0),s}function wv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ka(Bf):r=Ff,e.setTexture2D(t||r,i)}function Tv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hf,i)}function Ev(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ka(zf):r=Gf,e.setTextureCube(t||r,i)}function Av(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kf,i)}function Rv(s){switch(s){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return Mv;case 36294:return yv;case 36295:return Sv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}function Cv(s,t){s.uniform1fv(this.addr,t)}function Pv(s,t){const e=wr(t,this.size,2);s.uniform2fv(this.addr,e)}function Lv(s,t){const e=wr(t,this.size,3);s.uniform3fv(this.addr,e)}function Dv(s,t){const e=wr(t,this.size,4);s.uniform4fv(this.addr,e)}function Iv(s,t){const e=wr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Nv(s,t){const e=wr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Uv(s,t){const e=wr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ov(s,t){s.uniform1iv(this.addr,t)}function Fv(s,t){s.uniform2iv(this.addr,t)}function Bv(s,t){s.uniform3iv(this.addr,t)}function zv(s,t){s.uniform4iv(this.addr,t)}function kv(s,t){s.uniform1uiv(this.addr,t)}function Hv(s,t){s.uniform2uiv(this.addr,t)}function Gv(s,t){s.uniform3uiv(this.addr,t)}function Vv(s,t){s.uniform4uiv(this.addr,t)}function Wv(s,t,e){const n=this.cache,i=t.length,r=qa(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),kn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ka(Bf):o=Ff;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Xv(s,t,e){const n=this.cache,i=t.length,r=qa(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),kn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hf,r[o])}function Yv(s,t,e){const n=this.cache,i=t.length,r=qa(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),kn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ka(zf):o=Gf;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function qv(s,t,e){const n=this.cache,i=t.length,r=qa(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),kn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||kf,r[o])}function Kv(s){switch(s){case 5126:return Cv;case 35664:return Pv;case 35665:return Lv;case 35666:return Dv;case 35674:return Iv;case 35675:return Nv;case 35676:return Uv;case 5124:case 35670:return Ov;case 35667:case 35671:return Fv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return kv;case 36294:return Hv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return qv}}class Zv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rv(e.type)}}class Jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kv(e.type)}}class $v{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function ed(s,t){s.seq.push(t),s.map[t.id]=t}function Qv(s,t,e){const n=s.name,i=n.length;for(Ll.lastIndex=0;;){const r=Ll.exec(n),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ed(e,c===void 0?new Zv(a,s,t):new Jv(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new $v(a),ed(e,d)),e=d}}}class ga{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Qv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function nd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const jv=37297;let tM=0;function eM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const id=new Xe;function nM(s){on._getMatrix(id,on.workingColorSpace,s);const t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(on.getTransfer(s)){case Ta:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function sd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+eM(s.getShaderSource(t),a)}else return r}function iM(s,t){const e=nM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const sM={[Zc]:"Linear",[Jc]:"Reinhard",[$c]:"Cineon",[ka]:"ACESFilmic",[jc]:"AgX",[th]:"Neutral",[Qc]:"Custom"};function rM(s,t){const e=sM[t];return e===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const na=new G;function oM(){on.getLuminanceCoefficients(na);const s=na.x.toFixed(4),t=na.y.toFixed(4),e=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function lM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function qr(s){return s!==""}function rd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function od(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(s){return s.replace(hM,uM)}function uM(s,t){const e=en[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bc(e)}const dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(s){return s.replace(dM,fM)}function fM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const pM={[Zr]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function mM(s){return pM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gM={[so]:"ENVMAP_MODE_REFRACTION"};function _M(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xM={[zd]:"ENVMAP_BLENDING_MULTIPLY",[Rp]:"ENVMAP_BLENDING_MIX",[Cp]:"ENVMAP_BLENDING_ADD"};function vM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xM[s.combine]||"ENVMAP_BLENDING_NONE"}function MM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=mM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_M(e),d=vM(e),f=aM(e),u=lM(r),p=i.createProgram();let v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(qr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(qr).join(`
`),m.length>0&&(m+=`
`)):(v=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),m=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?en.tonemapping_pars_fragment:"",e.toneMapping!==hs?rM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",en.colorspace_pars_fragment,iM("linearToOutputTexel",e.outputColorSpace),oM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=Bc(o),o=rd(o,e),o=od(o,e),a=Bc(a),a=rd(a,e),a=od(a,e),o=ad(o),a=ad(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=g+v+o,T=g+m+a,b=nd(i,i.VERTEX_SHADER,y),D=nd(i,i.FRAGMENT_SHADER,T);i.attachShader(p,b),i.attachShader(p,D),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(O){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p)||"",it=i.getShaderInfoLog(b)||"",j=i.getShaderInfoLog(D)||"",N=q.trim(),st=it.trim(),at=j.trim();let $=!0,ot=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,D);else{const nt=sd(i,b,"vertex"),Q=sd(i,D,"fragment");Be("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+nt+`
`+Q)}else N!==""?Pe("WebGLProgram: Program Info Log:",N):(st===""||at==="")&&(ot=!1);ot&&(O.diagnostics={runnable:$,programLog:N,vertexShader:{log:st,prefix:v},fragmentShader:{log:at,prefix:m}})}i.deleteShader(b),i.deleteShader(D),M=new ga(i,p),w=cM(i,p)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,jv)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=D,this}let yM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bM(t),e.set(t,n)),n}}class bM{constructor(t){this.id=yM++,this.code=t,this.usedTimes=0}}function wM(s){return s===Us||s===Sa||s===ba}function TM(s,t,e,n,i,r){const o=new dh,a=new SM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,w,B,O,q,it){const j=O.fog,N=q.geometry,st=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,at=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||st,at),ot=f[M.type];let nt=n.precision;M.precision!==null&&(nt=n.getMaxPrecision(M.precision),nt!==M.precision&&Pe("WebGLProgram.getParameters:",M.precision,"not supported, using",nt,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,St=Q!==void 0?Q.length:0;let Yt=0;N.morphAttributes.position!==void 0&&(Yt=1),N.morphAttributes.normal!==void 0&&(Yt=2),N.morphAttributes.color!==void 0&&(Yt=3);let ce,gt,Wt,ne;if(ot){const F=ki[ot];ce=F.vertexShader,gt=F.fragmentShader}else{ce=M.vertexShader,gt=M.fragmentShader;const F=a.getVertexShaderStage(M),rt=a.getFragmentShaderStage(M);a.update(M,F,rt),Wt=F.id,ne=rt.id}const ue=s.getRenderTarget(),jt=s.state.buffers.depth.getReversed(),re=q.isInstancedMesh===!0,ze=q.isBatchedMesh===!0,me=!!M.map,_e=!!M.matcap,Te=!!$,Et=Te&&$.isPMREMTexture===!0,Kt=!!M.aoMap,Qt=!!M.lightMap,oe=!!M.bumpMap&&M.wireframe===!1,Lt=!!M.normalMap,Ae=!!M.displacementMap,Zt=!!M.emissiveMap,Ut=!!M.metalnessMap,Ct=!!M.roughnessMap,Ft=M.anisotropy>0,L=M.clearcoat>0,te=M.diffuseRoughness>0,Jt=M.dispersion>0,qt=M.retroreflectivity>0,Rt=M.iridescence>0,ee=M.sheen>0,Mt=M.transmission>0,lt=Ft&&!!M.anisotropyMap,C=L&&!!M.clearcoatMap,S=L&&!!M.clearcoatNormalMap,J=L&&!!M.clearcoatRoughnessMap,vt=te&&!!M.diffuseRoughnessMap,pt=Rt&&!!M.iridescenceMap,Nt=Rt&&!!M.iridescenceThicknessMap,Bt=ee&&!!M.sheenColorMap,xt=ee&&!!M.sheenRoughnessMap,wt=!!M.specularMap,Ot=!!M.specularColorMap,W=!!M.specularIntensityMap,_t=Mt&&!!M.transmissionMap,mt=Mt&&!!M.thicknessMap,Xt=!!M.gradientMap,et=!!M.alphaMap,K=M.alphaTest>0,dt=!!M.alphaHash,Dt=!!M.extensions;let x=hs;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(x=s.toneMapping);const k=Et?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,X={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:gt,defines:M.defines,customVertexShaderID:Wt,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:nt,batching:ze,batchingColor:ze&&q._colorsTexture!==null,instancing:re,instancingColor:re&&q.instanceColor!==null,instancingMorph:re&&q.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:on.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:me,matcap:_e,envMap:Te,envMapMode:Te&&$.mapping,envMapPMREM:Et,envMapMaxLod:Et?k.length-1:null,envMapSize:Et?k[0].width:null,aoMap:Kt,lightMap:Qt,bumpMap:oe,normalMap:Lt,displacementMap:Ae,emissiveMap:Zt,normalMapObjectSpace:Lt&&M.normalMapType===Fp,normalMapTangentSpace:Lt&&M.normalMapType===lo,packedNormalMap:Lt&&M.normalMapType===lo&&wM(M.normalMap.format),metalnessMap:Ut,roughnessMap:Ct,anisotropy:Ft,anisotropyMap:lt,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:J,diffuseRoughness:te,diffuseRoughnessMap:vt,dispersion:Jt,retroreflection:qt,iridescence:Rt,iridescenceMap:pt,iridescenceThicknessMap:Nt,sheen:ee,sheenColorMap:Bt,sheenRoughnessMap:xt,specularMap:wt,specularColorMap:Ot,specularIntensityMap:W,transmission:Mt,transmissionMap:_t,thicknessMap:mt,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===lr&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:K,alphaHash:dt,combine:M.combine,mapUv:me&&u(M.map.channel),aoMapUv:Kt&&u(M.aoMap.channel),lightMapUv:Qt&&u(M.lightMap.channel),bumpMapUv:oe&&u(M.bumpMap.channel),normalMapUv:Lt&&u(M.normalMap.channel),displacementMapUv:Ae&&u(M.displacementMap.channel),emissiveMapUv:Zt&&u(M.emissiveMap.channel),metalnessMapUv:Ut&&u(M.metalnessMap.channel),roughnessMapUv:Ct&&u(M.roughnessMap.channel),anisotropyMapUv:lt&&u(M.anisotropyMap.channel),clearcoatMapUv:C&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&u(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:vt&&u(M.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&u(M.sheenRoughnessMap.channel),specularMapUv:wt&&u(M.specularMap.channel),specularColorMapUv:Ot&&u(M.specularColorMap.channel),specularIntensityMapUv:W&&u(M.specularIntensityMap.channel),transmissionMapUv:_t&&u(M.transmissionMap.channel),thicknessMapUv:mt&&u(M.thicknessMap.channel),alphaMapUv:et&&u(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Lt||Ft),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(me||et),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&Lt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:jt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Yt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:it.filter(F=>F.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:x,decodeVideoTexture:me&&M.map.isVideoTexture===!0&&on.getTransfer(M.map.colorSpace)===fn,decodeVideoTextureEmissive:Zt&&M.emissiveMap.isVideoTexture===!0&&on.getTransfer(M.emissiveMap.colorSpace)===fn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Dt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&M.extensions.multiDraw===!0||ze)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return X.vertexUv1s=l.has(1),X.vertexUv2s=l.has(2),X.vertexUv3s=l.has(3),l.clear(),X}function v(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)w.push(B),w.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(m(w,M),g(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapPMREM),M.push(w.envMapMaxLod),M.push(w.envMapSize),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.diffuseRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.numLightProbeGrids),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){const w=f[M.type];let B;if(w){const O=ki[w];B=vo.clone(O.uniforms)}else B=M.uniforms;return B}function T(M,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new MM(s,w,M,i),c.push(B),h.set(w,B)),B}function b(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function D(M){a.remove(M)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:D,programs:c,dispose:R}}function EM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function AM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function cd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,v,m,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,u,p,v,m,g,y){y.reversedDepth===!0&&(m=-m);const T=a(f,u,p,v,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(f,u,p,v,m,g){const y=a(f,u,p,v,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||AM),n.length>1&&n.sort(u||cd),i.length>1&&i.sort(u||cd)}function d(){for(let f=t,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function RM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new hd,s.set(n,[o])):i>=r.length?(o=new hd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function CM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new ye};break;case"SpotLight":e={position:new G,direction:new G,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function PM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let LM=0;function DM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function IM(s){const t=new CM,e=PM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,r=new Ue,o=new Ue;function a(c){let h=0,d=0,f=0;for(let it=0;it<9;it++)n.probe[it].set(0,0,0);let u=0,p=0,v=0,m=0,g=0,y=0,T=0,b=0,D=0,R=0,M=0,w=0,B=0,O=0;c.sort(DM);for(let it=0,j=c.length;it<j;it++){const N=c[it],st=N.color,at=N.intensity,$=N.distance;let ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Us?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=st.r*at,d+=st.g*at,f+=st.b*at;else if(N.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(N.sh.coefficients[nt],at);O++}else if(N.isSunLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=St,n.sunShadowMap[p]=ot;const Yt=Q.getViewportCount();for(let ce=0;ce<Yt;ce++)n.sunShadowMatrix[v+ce]=Q.getMatrix(ce),n.sunShadowCascade[v+ce]=Q._cascadeData[ce];v+=Yt,p++}n.sun[u]=nt,u++}else if(N.isDirectionalLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize=Q.mapSize,n.directionalShadow[m]=St,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=N.shadow.matrix,D++}n.directional[m]=nt,m++}else if(N.isSpotLight){const nt=t.get(N);nt.position.setFromMatrixPosition(N.matrixWorld),nt.color.copy(st).multiplyScalar(at),nt.distance=$,nt.coneCos=Math.cos(N.angle),nt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),nt.decay=N.decay,n.spot[y]=nt;const Q=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,Q.updateMatrices(N),N.castShadow&&B++),n.spotLightMatrix[y]=Q.matrix,N.castShadow){const St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize=Q.mapSize,n.spotShadow[y]=St,n.spotShadowMap[y]=ot,M++}y++}else if(N.isRectAreaLight){const nt=t.get(N);nt.color.copy(st).multiplyScalar(at),nt.halfWidth.set(N.width*.5,0,0),nt.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=nt,T++}else if(N.isPointLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),nt.distance=N.distance,nt.decay=N.decay,N.castShadow){const Q=N.shadow,St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize=Q.mapSize,St.shadowCameraNear=Q.camera.near,St.shadowCameraFar=Q.camera.far,n.pointShadow[g]=St,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=N.shadow.matrix,R++}n.point[g]=nt,g++}else if(N.isHemisphereLight){const nt=t.get(N);nt.skyColor.copy(N.color).multiplyScalar(at),nt.groundColor.copy(N.groundColor).multiplyScalar(at),n.hemi[b]=nt,b++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const q=n.hash;(q.sunLength!==u||q.directionalLength!==m||q.pointLength!==g||q.spotLength!==y||q.rectAreaLength!==T||q.hemiLength!==b||q.numSunShadows!==p||q.numDirectionalShadows!==D||q.numPointShadows!==R||q.numSpotShadows!==M||q.numSpotMaps!==w||q.numLightProbes!==O)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.directionalShadowMatrix.length=D,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+w-B,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=O,q.sunLength=u,q.directionalLength=m,q.pointLength=g,q.spotLength=y,q.rectAreaLength=T,q.hemiLength=b,q.numSunShadows=p,q.numDirectionalShadows=D,q.numPointShadows=R,q.numSpotShadows=M,q.numSpotMaps=w,q.numLightProbes=O,n.version=LM++)}function l(c,h){let d=0,f=0,u=0,p=0,v=0,m=0;const g=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const b=c[y];if(b.isSunLight){const D=n.sun[d];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(g),d++}else if(b.isDirectionalLight){const D=n.directional[f];D.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(g),f++}else if(b.isSpotLight){const D=n.spot[p];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const D=n.rectArea[v];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const D=n.point[u];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){const D=n.hemi[m];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function ud(s){const t=new IM(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function NM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ud(s),t.set(i,[a])):r>=o.length?(a=new ud(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],BM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],dd=new Ue,Br=new G,Dl=new G;function zM(s,t,e){let n=new po;const i=new It,r=new It,o=new mn,a=new Mm,l=new ym,c={},h=e.maxTextureSize,d={[Ts]:jn,[jn]:Ts,[yn]:yn},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:UM,fragmentShader:OM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new dn;p.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let g=this.type;this.render=function(R,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===cp&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);const B=s.getRenderTarget(),O=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),it=s.state;it.setBlending(Ns),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const j=g!==this.type;j&&M.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(st=>st.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,st=R.length;N<st;N++){const at=R[N],$=at.shadow;if($===void 0){Pe("WebGLShadowMap:",at,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ot=$.getFrameExtents();i.multiply(ot),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,$.mapSize.y=r.y));const nt=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=nt,$.map===null||j===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Gr){if(at.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ei(i.x,i.y,{format:Us,type:ti,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),$.map.texture.name=at.name+".shadowMap",$.map.depthTexture=new Os(i.x,i.y,yi),$.map.depthTexture.name=at.name+".shadowMapDepth",$.map.depthTexture.format=Es,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un}else at.isPointLight?($.map=new Eh(i.x),$.map.depthTexture=new uf(i.x,Li)):($.map=new ei(i.x,i.y),$.map.depthTexture=new Os(i.x,i.y,Li)),$.map.depthTexture.name=at.name+".shadowMap",$.map.depthTexture.format=Es,this.type===Zr?($.map.depthTexture.compareFunction=nt?Jd:Zd,$.map.depthTexture.minFilter=Xn,$.map.depthTexture.magFilter=Xn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);const Q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();at.isPointLight!==!0&&$.updateMatrices(at,w);const St=($.camera.layers.mask&4294967294)!==0?$.camera.layers:w.layers;for(let Yt=0;Yt<Q;Yt++){const ce=$.getCamera(Yt);if(at.isPointLight){const gt=$.camera,Wt=$.matrix,ne=at.distance||gt.far;ne!==gt.far&&(gt.far=ne,gt.updateProjectionMatrix()),Br.setFromMatrixPosition(at.matrixWorld),gt.position.copy(Br),Dl.copy(gt.position),Dl.add(FM[Yt]),gt.up.copy(BM[Yt]),gt.lookAt(Dl),gt.updateMatrixWorld(),Wt.makeTranslation(-Br.x,-Br.y,-Br.z),dd.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(dd,gt.coordinateSystem,gt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,Yt),s.clear();else{Yt===0&&(s.setRenderTarget($.map),s.clear());const gt=$.getViewport(Yt);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),it.viewport(o)}n=$.getFrustum(Yt),b(M,w,ce,at,St,this.type)}$.isPointLightShadow!==!0&&this.type===Gr&&y($,w),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(B,O,q)};function y(R,M){const w=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new ei(i.x,i.y,{format:Us,type:ti}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,v,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(M,null,w,u,v,null)}function T(R,M,w,B){let O=null;const q=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(q!==void 0)O=q;else if(O=w.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const it=O.uuid,j=M.uuid;let N=c[it];N===void 0&&(N={},c[it]=N);let st=N[j];st===void 0&&(st=O.clone(),N[j]=st,M.addEventListener("dispose",D)),O=st}if(O.visible=M.visible,O.wireframe=M.wireframe,B===Gr?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:d[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,w.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const it=s.properties.get(O);it.light=w}return O}function b(R,M,w,B,O,q){if(R.visible===!1)return;if(R.layers.test(O)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&q===Gr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const N=t.update(R),st=R.material;if(Array.isArray(st)){const at=N.groups;for(let $=0,ot=at.length;$<ot;$++){const nt=at[$],Q=st[nt.materialIndex];if(Q&&Q.visible){const St=T(R,Q,B,q);R.onBeforeShadow(s,R,M,w,N,St,nt),s.renderBufferDirect(w,null,N,St,R,nt),R.onAfterShadow(s,R,M,w,N,St,nt)}}}else if(st.visible){const at=T(R,st,B,q);R.onBeforeShadow(s,R,M,w,N,at,null),s.renderBufferDirect(w,null,N,at,R,null),R.onAfterShadow(s,R,M,w,N,at,null)}}const j=R.children;for(let N=0,st=j.length;N<st;N++)b(j[N],M,w,B,O,q)}function D(R){R.target.removeEventListener("dispose",D);for(const w in c){const B=c[w],O=R.target.uuid;O in B&&(B[O].dispose(),delete B[O])}}}function kM(s,t){function e(){let W=!1;const _t=new mn;let mt=null;const Xt=new mn(0,0,0,0);return{setMask:function(et){mt!==et&&!W&&(s.colorMask(et,et,et,et),mt=et)},setLocked:function(et){W=et},setClear:function(et,K,dt,Dt,x){x===!0&&(et*=Dt,K*=Dt,dt*=Dt),_t.set(et,K,dt,Dt),Xt.equals(_t)===!1&&(s.clearColor(et,K,dt,Dt),Xt.copy(_t))},reset:function(){W=!1,mt=null,Xt.set(-1,0,0,0)}}}function n(){let W=!1,_t=!1,mt=null,Xt=null,et=null;return{setReversed:function(K){if(_t!==K){const dt=t.get("EXT_clip_control");K?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),_t=K;const Dt=et;et=null,this.setClear(Dt)}},getReversed:function(){return _t},setTest:function(K){K?jt(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(K){mt!==K&&!W&&(s.depthMask(K),mt=K)},setFunc:function(K){if(_t&&(K=Kp[K]),Xt!==K){switch(K){case ql:s.depthFunc(s.NEVER);break;case Kl:s.depthFunc(s.ALWAYS);break;case Zl:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case $l:s.depthFunc(s.GEQUAL);break;case Ql:s.depthFunc(s.GREATER);break;case jl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xt=K}},setLocked:function(K){W=K},setClear:function(K){et!==K&&(et=K,_t&&(K=1-K),s.clearDepth(K))},reset:function(){W=!1,mt=null,Xt=null,et=null,_t=!1}}}function i(){let W=!1,_t=null,mt=null,Xt=null,et=null,K=null,dt=null,Dt=null,x=null;return{setTest:function(k){W||(k?jt(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(k){_t!==k&&!W&&(s.stencilMask(k),_t=k)},setFunc:function(k,X,F){(mt!==k||Xt!==X||et!==F)&&(s.stencilFunc(k,X,F),mt=k,Xt=X,et=F)},setOp:function(k,X,F){(K!==k||dt!==X||Dt!==F)&&(s.stencilOp(k,X,F),K=k,dt=X,Dt=F)},setLocked:function(k){W=k},setClear:function(k){x!==k&&(s.clearStencil(k),x=k)},reset:function(){W=!1,_t=null,mt=null,Xt=null,et=null,K=null,dt=null,Dt=null,x=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],v=null,m=!1,g=null,y=null,T=null,b=null,D=null,R=null,M=null,w=new ye(0,0,0),B=0,O=!1,q=null,it=null,j=null,N=null,st=null;const at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ot=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(nt)[1]),$=ot>=1):nt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),$=ot>=2);let Q=null,St={};const Yt=s.getParameter(s.SCISSOR_BOX),ce=s.getParameter(s.VIEWPORT),gt=new mn().fromArray(Yt),Wt=new mn().fromArray(ce);function ne(W,_t,mt,Xt){const et=new Uint8Array(4),K=s.createTexture();s.bindTexture(W,K),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<mt;dt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,Xt,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(_t+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return K}const ue={};ue[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),jt(s.DEPTH_TEST),o.setFunc(io),oe(!1),Lt(Hh),jt(s.CULL_FACE),Kt(Ns);function jt(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function re(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function ze(W,_t){return f[W]!==_t?(s.bindFramebuffer(W,_t),f[W]=_t,W===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),W===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function me(W,_t){let mt=p,Xt=!1;if(W){mt=u.get(_t),mt===void 0&&(mt=[],u.set(_t,mt));const et=W.textures;if(mt.length!==et.length||mt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,dt=et.length;K<dt;K++)mt[K]=s.COLOR_ATTACHMENT0+K;mt.length=et.length,Xt=!0}}else mt[0]!==s.BACK&&(mt[0]=s.BACK,Xt=!0);Xt&&s.drawBuffers(mt)}function _e(W){return v!==W?(s.useProgram(W),v=W,!0):!1}const Te={[ir]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[dp]:s.FUNC_REVERSE_SUBTRACT};Te[fp]=s.MIN,Te[pp]=s.MAX;const Et={[mp]:s.ZERO,[gp]:s.ONE,[_p]:s.SRC_COLOR,[Fd]:s.SRC_ALPHA,[bp]:s.SRC_ALPHA_SATURATE,[yp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[xp]:s.ONE_MINUS_SRC_COLOR,[Bd]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[Mp]:s.ONE_MINUS_DST_ALPHA,[wp]:s.CONSTANT_COLOR,[Tp]:s.ONE_MINUS_CONSTANT_COLOR,[Ep]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(W,_t,mt,Xt,et,K,dt,Dt,x,k){if(W===Ns){m===!0&&(re(s.BLEND),m=!1);return}if(m===!1&&(jt(s.BLEND),m=!0),W!==hp){if(W!==g||k!==O){if((y!==ir||D!==ir)&&(s.blendEquation(s.FUNC_ADD),y=ir,D=ir),k)switch(W){case lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.ONE,s.ONE);break;case Gh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Be("WebGLState: Invalid blending: ",W);break}else switch(W){case lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",W);break}T=null,b=null,R=null,M=null,w.set(0,0,0),B=0,g=W,O=k}return}et=et||_t,K=K||mt,dt=dt||Xt,(_t!==y||et!==D)&&(s.blendEquationSeparate(Te[_t],Te[et]),y=_t,D=et),(mt!==T||Xt!==b||K!==R||dt!==M)&&(s.blendFuncSeparate(Et[mt],Et[Xt],Et[K],Et[dt]),T=mt,b=Xt,R=K,M=dt),(Dt.equals(w)===!1||x!==B)&&(s.blendColor(Dt.r,Dt.g,Dt.b,x),w.copy(Dt),B=x),g=W,O=!1}function Qt(W,_t){W.side===yn?re(s.CULL_FACE):jt(s.CULL_FACE);let mt=W.side===jn;_t&&(mt=!mt),oe(mt),W.blending===lr&&W.transparent===!1?Kt(Ns):Kt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Xt=W.stencilWrite;a.setTest(Xt),Xt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?jt(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){q!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),q=W)}function Lt(W){W!==ap?(jt(s.CULL_FACE),W!==it&&(W===Hh?s.cullFace(s.BACK):W===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),it=W}function Ae(W){W!==j&&($&&s.lineWidth(W),j=W)}function Zt(W,_t,mt){W?(jt(s.POLYGON_OFFSET_FILL),(N!==_t||st!==mt)&&(N=_t,st=mt,o.getReversed()&&(_t=-_t,mt=-mt),s.polygonOffset(_t,mt))):re(s.POLYGON_OFFSET_FILL)}function Ut(W){W?jt(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function Ct(W){W===void 0&&(W=s.TEXTURE0+at-1),Q!==W&&(s.activeTexture(W),Q=W)}function Ft(W,_t,mt){mt===void 0&&(Q===null?mt=s.TEXTURE0+at-1:mt=Q);let Xt=St[mt];Xt===void 0&&(Xt={type:void 0,texture:void 0},St[mt]=Xt),(Xt.type!==W||Xt.texture!==_t)&&(Q!==mt&&(s.activeTexture(mt),Q=mt),s.bindTexture(W,_t||ue[W]),Xt.type=W,Xt.texture=_t)}function L(){const W=St[Q];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function qt(){try{s.texSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Rt(){try{s.texSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Mt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function lt(){try{s.texStorage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function C(){try{s.texStorage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function S(){try{s.texImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function J(){try{s.texImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function vt(W){return d[W]!==void 0?d[W]:s.getParameter(W)}function pt(W,_t){d[W]!==_t&&(s.pixelStorei(W,_t),d[W]=_t)}function Nt(W){gt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Bt(W){Wt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Wt.copy(W))}function xt(W,_t){let mt=c.get(_t);mt===void 0&&(mt=new WeakMap,c.set(_t,mt));let Xt=mt.get(W);Xt===void 0&&(Xt=s.getUniformBlockIndex(_t,W.name),s.uniformBlockBinding(_t,Xt,Xt),mt.set(W,Xt))}function wt(W,_t,mt){const et=c.get(_t).get(W);l[et]!==mt&&(s.bindBufferBase(s.UNIFORM_BUFFER,et,mt),l[et]=mt)}function Ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,St={},f={},l={},u=new WeakMap,p=[],v=null,m=!1,g=null,y=null,T=null,b=null,D=null,R=null,M=null,w=new ye(0,0,0),B=0,O=!1,q=null,it=null,j=null,N=null,st=null,gt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:jt,disable:re,bindFramebuffer:ze,drawBuffers:me,useProgram:_e,setBlending:Kt,setMaterial:Qt,setFlipSided:oe,setCullFace:Lt,setLineWidth:Ae,setPolygonOffset:Zt,setScissorTest:Ut,activeTexture:Ct,bindTexture:Ft,unbindTexture:L,compressedTexImage2D:te,compressedTexImage3D:Jt,texImage2D:S,texImage3D:J,pixelStorei:pt,getParameter:vt,updateUBOMapping:xt,uniformBlockBinding:wt,texStorage2D:lt,texStorage3D:C,texSubImage2D:qt,texSubImage3D:Rt,compressedTexSubImage2D:ee,compressedTexSubImage3D:Mt,scissor:Nt,viewport:Bt,reset:Ot}}function HM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,v=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):ho("canvas")}function y(C,S,J){let vt=1;const pt=lt(C);if((pt.width>J||pt.height>J)&&(vt=J/Math.max(pt.width,pt.height)),vt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Nt=Math.floor(vt*pt.width),Bt=Math.floor(vt*pt.height);f===void 0&&(f=g(Nt,Bt));const xt=S?g(Nt,Bt):f;return xt.width=Nt,xt.height=Bt,xt.getContext("2d").drawImage(C,0,0,Nt,Bt),Pe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Nt+"x"+Bt+")."),xt}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),C;return C}function T(C){return C.generateMipmaps}function b(C){s.generateMipmap(C)}function D(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(C,S,J,vt,pt,Nt=!1){if(C!==null){if(s[C]!==void 0)return s[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Bt;vt&&(Bt=t.get("EXT_texture_norm16"),Bt||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=S;if(S===s.RED&&(J===s.FLOAT&&(xt=s.R32F),J===s.HALF_FLOAT&&(xt=s.R16F),J===s.UNSIGNED_BYTE&&(xt=s.R8),J===s.UNSIGNED_SHORT&&Bt&&(xt=Bt.R16_EXT),J===s.SHORT&&Bt&&(xt=Bt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.R8UI),J===s.UNSIGNED_SHORT&&(xt=s.R16UI),J===s.UNSIGNED_INT&&(xt=s.R32UI),J===s.BYTE&&(xt=s.R8I),J===s.SHORT&&(xt=s.R16I),J===s.INT&&(xt=s.R32I)),S===s.RG&&(J===s.FLOAT&&(xt=s.RG32F),J===s.HALF_FLOAT&&(xt=s.RG16F),J===s.UNSIGNED_BYTE&&(xt=s.RG8),J===s.UNSIGNED_SHORT&&Bt&&(xt=Bt.RG16_EXT),J===s.SHORT&&Bt&&(xt=Bt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.RG8UI),J===s.UNSIGNED_SHORT&&(xt=s.RG16UI),J===s.UNSIGNED_INT&&(xt=s.RG32UI),J===s.BYTE&&(xt=s.RG8I),J===s.SHORT&&(xt=s.RG16I),J===s.INT&&(xt=s.RG32I)),S===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.RGB8UI),J===s.UNSIGNED_SHORT&&(xt=s.RGB16UI),J===s.UNSIGNED_INT&&(xt=s.RGB32UI),J===s.BYTE&&(xt=s.RGB8I),J===s.SHORT&&(xt=s.RGB16I),J===s.INT&&(xt=s.RGB32I)),S===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(xt=s.RGBA16UI),J===s.UNSIGNED_INT&&(xt=s.RGBA32UI),J===s.BYTE&&(xt=s.RGBA8I),J===s.SHORT&&(xt=s.RGBA16I),J===s.INT&&(xt=s.RGBA32I)),S===s.RGB&&(J===s.UNSIGNED_SHORT&&Bt&&(xt=Bt.RGB16_EXT),J===s.SHORT&&Bt&&(xt=Bt.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(xt=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(xt=s.R11F_G11F_B10F)),S===s.RGBA){const wt=Nt?Ta:on.getTransfer(pt);J===s.FLOAT&&(xt=s.RGBA32F),J===s.HALF_FLOAT&&(xt=s.RGBA16F),J===s.UNSIGNED_BYTE&&(xt=wt===fn?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Bt&&(xt=Bt.RGBA16_EXT),J===s.SHORT&&Bt&&(xt=Bt.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function M(C,S){let J;return C?S===null||S===Li||S===fr?J=s.DEPTH24_STENCIL8:S===yi?J=s.DEPTH32F_STENCIL8:S===ro&&(J=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===fr?J=s.DEPTH_COMPONENT24:S===yi?J=s.DEPTH_COMPONENT32F:S===ro&&(J=s.DEPTH_COMPONENT16),J}function w(C,S){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function B(C){const S=new WeakRef(C);n.get(C).__ref=S,p.add(S),v.register(C,S,S)}function O(C){const S=n.get(C).__ref;S!==void 0&&(p.delete(S),v.unregister(S))}function q(C){j(C.target)}function it(C){N(C.target)}function j(C){C.removeEventListener("dispose",q),O(C),at(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",it),O(C),ot(C)}function st(){for(const C of p){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):j(S))}p.clear(),d.clear()}function at(C){const S=n.get(C);if(S.__webglInit===void 0)return;const J=C.source,vt=u.get(J);if(vt){const pt=vt[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&$(C),Object.keys(vt).length===0&&u.delete(J)}n.remove(C)}function $(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const J=C.source,vt=u.get(J);delete vt[S.__cacheKey],o.memory.textures--}function ot(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const J=C.depthTexture;if(J&&J.renderTarget===C&&j(J),C.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(S.__webglFramebuffer[pt]))for(let Nt=0;Nt<S.__webglFramebuffer[pt].length;Nt++)s.deleteFramebuffer(S.__webglFramebuffer[pt][Nt]);else s.deleteFramebuffer(S.__webglFramebuffer[pt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[pt])}else{if(Array.isArray(S.__webglFramebuffer))for(let pt=0;pt<S.__webglFramebuffer.length;pt++)s.deleteFramebuffer(S.__webglFramebuffer[pt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pt=0;pt<S.__webglColorRenderbuffer.length;pt++)S.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[pt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const vt=C.textures;for(let pt=0,Nt=vt.length;pt<Nt;pt++){const Bt=n.get(vt[pt]);Bt.__webglTexture&&(s.deleteTexture(Bt.__webglTexture),o.memory.textures--),n.remove(vt[pt])}n.remove(C)}let nt=0;function Q(){nt=0}function St(){return nt}function Yt(C){nt=C}function ce(){const C=nt;return C>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),nt+=1,C}function gt(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Wt(C,S){const J=n.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&J.__version!==C.version){const vt=C.image;if(vt===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(J,C,S);return}}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+S)}function ne(C,S){const J=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){Qt(J,C,S);return}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+S)}function ue(C,S){const J=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){Qt(J,C,S);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+S)}function jt(C,S){const J=n.get(C);if(C.version>0&&J.__version!==C.version){oe(J,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+S)}const re={[Si]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[ya]:s.MIRRORED_REPEAT},ze={[Un]:s.NEAREST,[Hd]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[ha]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},me={[zp]:s.NEVER,[$d]:s.ALWAYS,[kp]:s.LESS,[Zd]:s.LEQUAL,[Hp]:s.EQUAL,[Jd]:s.GEQUAL,[Gp]:s.GREATER,[Vp]:s.NOTEQUAL};function _e(C,S){if(S.type===yi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Xn||S.magFilter===ha||S.magFilter===Vr||S.magFilter===Vi||S.minFilter===Xn||S.minFilter===ha||S.minFilter===Vr||S.minFilter===Vi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,re[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,re[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,re[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ze[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ze[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==Vr&&S.minFilter!==Vi||S.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Te(C,S){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",q),B(S));const vt=S.source;let pt=u.get(vt);pt===void 0&&(pt={},u.set(vt,pt));const Nt=gt(S);if(Nt!==C.__cacheKey){pt[Nt]===void 0&&(pt[Nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pt[Nt].usedTimes++;const Bt=pt[C.__cacheKey];Bt!==void 0&&(pt[C.__cacheKey].usedTimes--,Bt.usedTimes===0&&$(S)),C.__cacheKey=Nt,C.__webglTexture=pt[Nt].texture}return J}function Et(C,S,J){return Math.floor(Math.floor(C/J)/S)}function Kt(C,S,J,vt){const Nt=C.updateRanges;if(Nt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,J,vt,S.data);else{Nt.sort((W,_t)=>W.start-_t.start);let Bt=0;for(let W=1;W<Nt.length;W++){const _t=Nt[Bt],mt=Nt[W],Xt=_t.start+_t.count,et=Et(mt.start,S.width,4),K=Et(_t.start,S.width,4);mt.start<=Xt+1&&et===K&&Et(mt.start+mt.count-1,S.width,4)===et?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++Bt,Nt[Bt]=mt)}Nt.length=Bt+1;const xt=e.getParameter(s.UNPACK_ROW_LENGTH),wt=e.getParameter(s.UNPACK_SKIP_PIXELS),Ot=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let W=0,_t=Nt.length;W<_t;W++){const mt=Nt[W],Xt=Math.floor(mt.start/4),et=Math.ceil(mt.count/4),K=Xt%S.width,dt=Math.floor(Xt/S.width),Dt=et,x=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(s.TEXTURE_2D,0,K,dt,Dt,x,J,vt,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,xt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ot)}}function Qt(C,S,J){let vt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(vt=s.TEXTURE_3D);const pt=Te(C,S),Nt=S.source;e.bindTexture(vt,C.__webglTexture,s.TEXTURE0+J);const Bt=n.get(Nt);if(Nt.version!==Bt.__version||pt===!0){if(e.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const x=on.getPrimaries(on.workingColorSpace),k=S.colorSpace===os?null:on.getPrimaries(S.colorSpace),X=S.colorSpace===os||x===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let wt=y(S.image,!1,i.maxTextureSize);wt=Mt(S,wt);const Ot=r.convert(S.format,S.colorSpace),W=r.convert(S.type);let _t=R(S.internalFormat,Ot,W,S.normalized,S.colorSpace,S.isVideoTexture);_e(vt,S);let mt;const Xt=S.mipmaps,et=S.isVideoTexture!==!0,K=Bt.__version===void 0||pt===!0,dt=Nt.dataReady,Dt=w(S,wt);if(S.isDepthTexture)_t=M(S.format===ws,S.type),K&&(et?e.texStorage2D(s.TEXTURE_2D,1,_t,wt.width,wt.height):e.texImage2D(s.TEXTURE_2D,0,_t,wt.width,wt.height,0,Ot,W,null));else if(S.isDataTexture)if(Xt.length>0){et&&K&&e.texStorage2D(s.TEXTURE_2D,Dt,_t,Xt[0].width,Xt[0].height);for(let x=0,k=Xt.length;x<k;x++)mt=Xt[x],et?dt&&e.texSubImage2D(s.TEXTURE_2D,x,0,0,mt.width,mt.height,Ot,W,mt.data):e.texImage2D(s.TEXTURE_2D,x,_t,mt.width,mt.height,0,Ot,W,mt.data);S.generateMipmaps=!1}else et?(K&&e.texStorage2D(s.TEXTURE_2D,Dt,_t,wt.width,wt.height),dt&&Kt(S,wt,Ot,W)):e.texImage2D(s.TEXTURE_2D,0,_t,wt.width,wt.height,0,Ot,W,wt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,_t,Xt[0].width,Xt[0].height,wt.depth);for(let x=0,k=Xt.length;x<k;x++)if(mt=Xt[x],S.format!==Ci)if(Ot!==null)if(et){if(dt)if(S.layerUpdates.size>0){const X=Xu(mt.width,mt.height,S.format,S.type);for(const F of S.layerUpdates){const rt=mt.data.subarray(F*X/mt.data.BYTES_PER_ELEMENT,(F+1)*X/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,F,mt.width,mt.height,1,Ot,rt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,mt.width,mt.height,wt.depth,Ot,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,x,_t,mt.width,mt.height,wt.depth,0,mt.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,mt.width,mt.height,wt.depth,Ot,W,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,x,_t,mt.width,mt.height,wt.depth,0,Ot,W,mt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&K&&e.texStorage2D(s.TEXTURE_2D,Dt,_t,Xt[0].width,Xt[0].height);for(let x=0,k=Xt.length;x<k;x++)mt=Xt[x],S.format!==Ci?Ot!==null?et?dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,x,0,0,mt.width,mt.height,Ot,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,x,_t,mt.width,mt.height,0,mt.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?dt&&e.texSubImage2D(s.TEXTURE_2D,x,0,0,mt.width,mt.height,Ot,W,mt.data):e.texImage2D(s.TEXTURE_2D,x,_t,mt.width,mt.height,0,Ot,W,mt.data)}else if(S.isDataArrayTexture)if(et){if(K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,_t,wt.width,wt.height,wt.depth),dt)if(S.layerUpdates.size>0){const x=Xu(wt.width,wt.height,S.format,S.type);for(const k of S.layerUpdates){const X=wt.data.subarray(k*x/wt.data.BYTES_PER_ELEMENT,(k+1)*x/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,k,wt.width,wt.height,1,Ot,W,X)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ot,W,wt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,wt.width,wt.height,wt.depth,0,Ot,W,wt.data);else if(S.isData3DTexture)et?(K&&e.texStorage3D(s.TEXTURE_3D,Dt,_t,wt.width,wt.height,wt.depth),dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ot,W,wt.data)):e.texImage3D(s.TEXTURE_3D,0,_t,wt.width,wt.height,wt.depth,0,Ot,W,wt.data);else if(S.isFramebufferTexture){if(K)if(et)e.texStorage2D(s.TEXTURE_2D,Dt,_t,wt.width,wt.height);else{let x=wt.width,k=wt.height;for(let X=0;X<Dt;X++)e.texImage2D(s.TEXTURE_2D,X,_t,x,k,0,Ot,W,null),x>>=1,k>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const x=s.canvas;if(x.hasAttribute("layoutsubtree")||x.setAttribute("layoutsubtree","true"),wt.parentNode!==x){x.appendChild(wt),d.add(S),x.onpaint=k=>{const X=k.changedElements;for(const F of d)X.includes(F.image)&&(F.needsUpdate=!0)},x.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,wt);else{const X=s.RGBA,F=s.RGBA,rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,X,F,rt,wt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(et&&K){const x=lt(Xt[0]);e.texStorage2D(s.TEXTURE_2D,Dt,_t,x.width,x.height)}for(let x=0,k=Xt.length;x<k;x++)mt=Xt[x],et?dt&&e.texSubImage2D(s.TEXTURE_2D,x,0,0,Ot,W,mt):e.texImage2D(s.TEXTURE_2D,x,_t,Ot,W,mt);S.generateMipmaps=!1}else if(et){if(K){const x=lt(wt);e.texStorage2D(s.TEXTURE_2D,Dt,_t,x.width,x.height)}dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,W,wt)}else e.texImage2D(s.TEXTURE_2D,0,_t,Ot,W,wt);T(S)&&S.mipmapsAutoUpdate===!0&&b(vt),Bt.__version=Nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,J){if(S.image.length!==6)return;const vt=Te(C,S),pt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+J);const Nt=n.get(pt);if(pt.version!==Nt.__version||vt===!0){e.activeTexture(s.TEXTURE0+J);const Bt=on.getPrimaries(on.workingColorSpace),xt=S.colorSpace===os?null:on.getPrimaries(S.colorSpace),wt=S.colorSpace===os||Bt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,W=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let F=0;F<6;F++)!Ot&&!W?_t[F]=y(S.image[F],!0,i.maxCubemapSize):_t[F]=W?S.image[F].image:S.image[F],_t[F]=Mt(S,_t[F]);const mt=_t[0],Xt=r.convert(S.format,S.colorSpace),et=r.convert(S.type);let K=R(S.internalFormat,Xt,et,S.normalized,S.colorSpace);const dt=S.isVideoTexture!==!0,Dt=Nt.__version===void 0||vt===!0,x=pt.dataReady;let k=w(S,mt);_e(s.TEXTURE_CUBE_MAP,S);let X;if(S.isDepthTexture){if(K=M(S.format===ws,S.type),Dt)if(dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,K,mt.width,mt.height);else for(let F=0;F<6;F++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,K,mt.width,mt.height,0,Xt,et,null)}else if(Ot){dt&&Dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,k,K,mt.width,mt.height);for(let F=0;F<6;F++){X=_t[F].mipmaps;for(let rt=0;rt<X.length;rt++){const ct=X[rt];S.format!==Ci?Xt!==null?dt?x&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,0,0,ct.width,ct.height,Xt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,K,ct.width,ct.height,0,ct.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,0,0,ct.width,ct.height,Xt,et,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,K,ct.width,ct.height,0,Xt,et,ct.data)}}}else{if(X=S.mipmaps,dt&&Dt){X.length>0&&k++;const F=lt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,k,K,F.width,F.height)}for(let F=0;F<6;F++)if(W){dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,_t[F].width,_t[F].height,Xt,et,_t[F].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,K,_t[F].width,_t[F].height,0,Xt,et,_t[F].data);for(let rt=0;rt<X.length;rt++){const kt=X[rt].image[F].image;dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,0,0,kt.width,kt.height,Xt,et,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,K,kt.width,kt.height,0,Xt,et,kt.data)}}else{dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Xt,et,_t[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,K,Xt,et,_t[F]);for(let rt=0;rt<X.length;rt++){const ct=X[rt];dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,0,0,Xt,et,ct.image[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,K,Xt,et,ct.image[F])}}}T(S)&&S.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),Nt.__version=pt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Lt(C,S,J,vt,pt,Nt){const Bt=r.convert(J.format,J.colorSpace),xt=r.convert(J.type),wt=R(J.internalFormat,Bt,xt,J.normalized,J.colorSpace),Ot=n.get(S),W=n.get(J);if(W.__renderTarget=S,!Ot.__hasExternalTextures){const _t=Math.max(1,S.width>>Nt),mt=Math.max(1,S.height>>Nt);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?e.texImage3D(pt,Nt,wt,_t,mt,S.depth,0,Bt,xt,null):e.texImage2D(pt,Nt,wt,_t,mt,0,Bt,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,pt,W.__webglTexture,0,qt(S)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,pt,W.__webglTexture,Nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(C,S,J){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const vt=S.depthTexture,pt=vt&&vt.isDepthTexture?vt.type:null,Nt=M(S.stencilBuffer,pt),Bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Rt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(S),Nt,S.width,S.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(S),Nt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Nt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Bt,s.RENDERBUFFER,C)}else{const vt=S.textures;for(let pt=0;pt<vt.length;pt++){const Nt=vt[pt],Bt=r.convert(Nt.format,Nt.colorSpace),xt=r.convert(Nt.type),wt=R(Nt.internalFormat,Bt,xt,Nt.normalized,Nt.colorSpace);Rt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(S),wt,S.width,S.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(S),wt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,wt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(C,S,J){const vt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=n.get(S.depthTexture);pt.__renderTarget=S;const Nt=vt?S.depthTexture.image[0]:S.depthTexture.image;(!pt.__webglTexture||Nt.width!==S.width||Nt.height!==S.height)&&(Nt.width=S.width,Nt.height=S.height,S.depthTexture.needsUpdate=!0),vt?jt(S.depthTexture,0):Wt(S.depthTexture,0);const Bt=pt.__webglTexture,xt=qt(S),wt=vt?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Ot=S.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Es)Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ot,wt,Bt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,Ot,wt,Bt,0);else if(S.depthTexture.format===ws)Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ot,wt,Bt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,Ot,wt,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(C){const S=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const vt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),vt){const pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,vt.removeEventListener("dispose",pt)};vt.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=vt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(J)for(let vt=0;vt<6;vt++)Zt(S.__webglFramebuffer[vt],C,vt);else C.texture.mipmaps.length>0?Zt(S.__webglFramebuffer[0],C,0):Zt(S.__webglFramebuffer,C,0);else if(J){S.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[vt]),S.__webglDepthbuffer[vt]===void 0)S.__webglDepthbuffer[vt]=s.createRenderbuffer(),Ae(S.__webglDepthbuffer[vt],C,!1);else{const pt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer[vt];s.bindRenderbuffer(s.RENDERBUFFER,Nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Nt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ae(S.__webglDepthbuffer,C,!1);else{const pt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(C,S,J){const vt=n.get(C);S!==void 0&&Lt(vt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ut(C)}function Ft(C){const S=C.texture,J=n.get(C),vt=n.get(S);C.addEventListener("dispose",it),B(C);const pt=C.textures,Nt=C.isWebGLCubeRenderTarget===!0,Bt=pt.length>1;if(Bt||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=S.version,o.memory.textures++),Nt){J.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(S.mipmaps.length>0){J.__webglFramebuffer[xt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)J.__webglFramebuffer[xt][wt]=s.createFramebuffer()}else J.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(S.mipmaps.length>0){J.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)J.__webglFramebuffer[xt]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Bt)for(let xt=0,wt=pt.length;xt<wt;xt++){const Ot=n.get(pt[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xt=0;xt<pt.length;xt++){const wt=pt[xt];J.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[xt]);const Ot=r.convert(wt.format,wt.colorSpace),W=r.convert(wt.type),_t=R(wt.internalFormat,Ot,W,wt.normalized,wt.colorSpace,C.isXRRenderTarget===!0),mt=qt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,J.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(J.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),_e(s.TEXTURE_CUBE_MAP,S);for(let xt=0;xt<6;xt++)if(S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Lt(J.__webglFramebuffer[xt][wt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt);else Lt(J.__webglFramebuffer[xt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);T(S)?b(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Bt){for(let xt=0,wt=pt.length;xt<wt;xt++){const Ot=pt[xt],W=n.get(Ot);let _t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,W.__webglTexture),_e(_t,Ot),Lt(J.__webglFramebuffer,C,Ot,s.COLOR_ATTACHMENT0+xt,_t,0),T(Ot)&&b(_t)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,vt.__webglTexture),_e(xt,S),S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Lt(J.__webglFramebuffer[wt],C,S,s.COLOR_ATTACHMENT0,xt,wt);else Lt(J.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,xt,0);T(S)?b(xt):S.mipmaps.length>0&&s.texParameteri(xt,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Ut(C)}function L(C){const S=C.textures;for(let J=0,vt=S.length;J<vt;J++){const pt=S[J];if(T(pt)&&pt.mipmapsAutoUpdate===!0){const Nt=D(C),Bt=n.get(pt).__webglTexture;e.bindTexture(Nt,Bt),b(Nt),e.unbindTexture()}}}const te=[];function Jt(C){if(C.samples>0){if(Rt(C)===!1){const S=C.textures,J=C.width,vt=C.height;let pt=s.COLOR_BUFFER_BIT;const Nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=n.get(C),xt=S.length>1;if(xt)for(let Ot=0;Ot<S.length;Ot++)e.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ot=0;Ot<S.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ot]);const W=n.get(S[Ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,W,0)}s.blitFramebuffer(0,0,J,vt,0,0,J,vt,pt,s.NEAREST),l===!0&&(te.length=0,te.push(s.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&te.push(Nt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Ot=0;Ot<S.length;Ot++){e.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ot]);const W=n.get(S[Ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,W,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function qt(C){return Math.min(i.maxSamples,C.samples)}function Rt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Mt(C,S){const J=C.colorSpace,vt=C.format,pt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||J!==gi&&J!==os&&(on.getTransfer(J)===fn?(vt!==Ci||pt!==pi)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",J)),S}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=Q,this.getTextureUnits=St,this.setTextureUnits=Yt,this.setTexture2D=Wt,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=jt,this.rebindTextures=Ct,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Rt,this.dispose=st}function GM(s,t){function e(n,i=os){let r;const o=on.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===nh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gd)return s.BYTE;if(n===Vd)return s.SHORT;if(n===ro)return s.UNSIGNED_SHORT;if(n===eh)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===ti)return s.HALF_FLOAT;if(n===Yd)return s.ALPHA;if(n===qd)return s.RGB;if(n===Ci)return s.RGBA;if(n===Es)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===Ha)return s.RED;if(n===sh)return s.RED_INTEGER;if(n===Us)return s.RG;if(n===rh)return s.RG_INTEGER;if(n===oh)return s.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(o===fn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc||n===ac||n===lc||n===Sa||n===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return r.COMPRESSED_R11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===Mc||n===yc||n===Sc||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Tc||n===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return o===fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===ba||n===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const VM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
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

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new df(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ai({vertexShader:VM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends fs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const v=typeof XRWebGLBinding<"u",m=new XM,g={},y=e.getContextAttributes();let T=null,b=null;const D=[],R=[],M=new It;let w=null,B=null;const O=new hi;O.viewport=new mn;const q=new hi;q.viewport=new mn;const it=[O,q],j=new Gm;let N=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let Wt=D[gt];return Wt===void 0&&(Wt=new al,D[gt]=Wt),Wt.getTargetRaySpace()},this.getControllerGrip=function(gt){let Wt=D[gt];return Wt===void 0&&(Wt=new al,D[gt]=Wt),Wt.getGripSpace()},this.getHand=function(gt){let Wt=D[gt];return Wt===void 0&&(Wt=new al,D[gt]=Wt),Wt.getHandSpace()};function at(gt){const Wt=R.indexOf(gt.inputSource);if(Wt===-1)return;const ne=D[Wt];ne!==void 0&&(ne.update(gt.inputSource,gt.frame,c||o),ne.dispatchEvent({type:gt.type,data:gt.inputSource}))}function $(){i.removeEventListener("select",at),i.removeEventListener("selectstart",at),i.removeEventListener("selectend",at),i.removeEventListener("squeeze",at),i.removeEventListener("squeezestart",at),i.removeEventListener("squeezeend",at),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ot);for(let gt=0;gt<D.length;gt++){const Wt=R[gt];Wt!==null&&(R[gt]=null,D[gt].disconnect(Wt))}N=null,st=null,m.reset();for(const gt in g)delete g[gt];if(t.setRenderTarget(T),u=null,f=null,d=null,i=null,b=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(M.width,M.height,!1),B!==null){const gt=B.camera;gt.fov=B.fov,gt.zoom=B.zoom,gt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){a=gt,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(gt){c=gt},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(gt){if(i=gt,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",at),i.addEventListener("selectstart",at),i.addEventListener("selectend",at),i.addEventListener("squeeze",at),i.addEventListener("squeezestart",at),i.addEventListener("squeezeend",at),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ue=null,jt=null;y.depth&&(jt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ne=y.stencil?ws:Es,ue=y.stencil?fr:Li);const re={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(re),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ei(f.textureWidth,f.textureHeight,{format:Ci,type:pi,depthTexture:new Os(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,ne),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new ei(u.framebufferWidth,u.framebufferHeight,{format:Ci,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(gt){for(let Wt=0;Wt<gt.removed.length;Wt++){const ne=gt.removed[Wt],ue=R.indexOf(ne);ue>=0&&(R[ue]=null,D[ue].disconnect(ne))}for(let Wt=0;Wt<gt.added.length;Wt++){const ne=gt.added[Wt];let ue=R.indexOf(ne);if(ue===-1){for(let re=0;re<D.length;re++)if(re>=R.length){R.push(ne),ue=re;break}else if(R[re]===null){R[re]=ne,ue=re;break}if(ue===-1)break}const jt=D[ue];jt&&jt.connect(ne)}}function nt(gt,Wt){Wt===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(Wt.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(i===null)return;let Wt=gt.near,ne=gt.far;m.texture!==null&&(m.depthNear>0&&(Wt=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),j.near=q.near=O.near=Wt,j.far=q.far=O.far=ne,(N!==j.near||st!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,st=j.far),j.layers.mask=gt.layers.mask|6,O.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const ue=gt.parent,jt=j.cameras;nt(j,ue);for(let re=0;re<jt.length;re++)nt(jt[re],ue);j.projectionMatrix.copy(O.projectionMatrix),j.projectionMatrixInverse.copy(O.projectionMatrixInverse),B===null&&gt.isPerspectiveCamera&&(B={camera:gt,fov:gt.fov,zoom:gt.zoom}),Q(gt,j,ue)};function Q(gt,Wt,ne){ne===null?gt.matrix.copy(Wt.matrixWorld):(gt.matrix.copy(ne.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(Wt.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(Wt.projectionMatrix),gt.projectionMatrixInverse.copy(Wt.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=pr*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(gt){l=gt,f!==null&&(f.fixedFoveation=gt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=gt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(gt){return g[gt]};let St=null;function Yt(gt,Wt){if(h=Wt.getViewerPose(c||o),p=Wt,h!==null){const ne=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let ue=!1;ne.length!==j.cameras.length&&(j.cameras.length=0,ue=!0);for(let me=0;me<ne.length;me++){const _e=ne[me];let Te=null;if(u!==null)Te=u.getViewport(_e);else{const Kt=d.getViewSubImage(f,_e);Te=Kt.viewport,me===0&&(t.setRenderTargetTextures(b,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(b))}let Et=it[me];Et===void 0&&(Et=new hi,Et.layers.enable(me),Et.viewport=new mn,it[me]=Et),Et.matrix.fromArray(_e.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(_e.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Te.x,Te.y,Te.width,Te.height),me===0&&(j.matrix.copy(Et.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ue===!0&&j.cameras.push(Et)}const jt=i.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const me=d.getDepthInformation(ne[0]);me&&me.isValid&&me.texture&&m.init(me,i.renderState)}if(jt&&jt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let me=0;me<ne.length;me++){const _e=ne[me].camera;if(_e){let Te=g[_e];Te||(Te=new df,g[_e]=Te);const Et=d.getCameraImage(_e);Te.sourceTexture=Et}}}}for(let ne=0;ne<D.length;ne++){const ue=R[ne],jt=D[ne];ue!==null&&jt!==void 0&&jt.update(ue,Wt,c||o)}St&&St(gt,Wt),Wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Wt}),p=null}const ce=new If;ce.setAnimationLoop(Yt),this.setAnimationLoop=function(gt){St=gt},this.dispose=function(){}}}const qM=new Ue,Vf=new Xe;Vf.set(-1,0,0,0,1,0,0,0,1);function KM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,bf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===jn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===jn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=t.get(g),T=y.envMap,b=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZM(s,t,e,n){let i={},r={};function o(y,T){const b=T.program;n.uniformBlockBinding(y,b,i[y.id])}function a(y,T){let b=i[y.id];b===void 0&&(p(y),b=l(y),i[y.id]=b,y.addEventListener("dispose",m));const D=T.program;n.updateUBOMapping(y,D);const R=t.render.frame;r[y.id]!==R&&(c(y),r[y.id]=R)}function l(y){const T=s.createBuffer(),b=y.__size,D=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,b,D),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(y){const T=i[y.id],b=y.uniforms,D=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let R=0,M=b.length;R<M;R++){const w=b[R];if(Array.isArray(w))for(let B=0,O=w.length;B<O;B++)h(w[B],R,B,D);else h(w,R,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,T,b,D){if(f(y,T,b,D)===!0){const R=y.__offset,M=y.value;if(Array.isArray(M)){let w=0;for(let B=0;B<M.length;B++){const O=M[B],q=v(O,!0);d(O,y.__data,w),w+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,R,y.__data)}}function d(y,T,b){typeof y=="number"||typeof y=="boolean"?T[b]=y:y.isMatrix3?(T[b]=y.elements[0],T[b+1]=y.elements[1],T[b+2]=y.elements[2],T[b+3]=0,T[b+4]=y.elements[3],T[b+5]=y.elements[4],T[b+6]=y.elements[5],T[b+7]=0,T[b+8]=y.elements[6],T[b+9]=y.elements[7],T[b+10]=y.elements[8],T[b+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-b),b):y.toArray(T,b)}function f(y,T,b,D){const R=y.value,M=T+"_"+b;if(Array.isArray(R)){D[M]===void 0&&(D[M]=[]);const w=D[M];let B=!1;for(let O=0;O<R.length;O++)u(R[O],w,O)===!0&&(B=!0);return B}return u(R,D,M)}function u(y,T,b){if(T[b]===void 0)return typeof y=="number"||typeof y=="boolean"?T[b]=y:ArrayBuffer.isView(y)?T[b]=y.slice():T[b]=y.clone(),!0;{const D=T[b];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return T[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function p(y){const T=y.uniforms;let b=0;const D=16;for(let M=0,w=T.length;M<w;M++){const B=Array.isArray(T[M])?T[M]:[T[M]];for(let O=0,q=B.length;O<q;O++){const it=B[O],j=Array.isArray(it.value)?it.value:[it.value],N=Array.isArray(T[M])||Array.isArray(it.value);let st=b;for(let $=0,ot=j.length;$<ot;$++){const nt=j[$],Q=v(nt,N),St=b%D,Yt=St%Q.boundary,ce=St+Yt;b+=Yt,ce!==0&&D-ce<Q.storage&&(b+=D-ce),$===0&&(st=b),b+=Q.storage}const at=it.type==="int"?Int32Array:it.type==="uint"?Uint32Array:Float32Array;it.__data=new at((b-st)/Float32Array.BYTES_PER_ELEMENT),it.__offset=st}}const R=b%D;return R>0&&(b+=D-R),y.__size=b,y.__cache={},this}function v(y,T){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){const T=y.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}const JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function $M(){return Bi===null&&(Bi=new Va(JM,16,16,Us,ti),Bi.name="DFG_LUT",Bi.minFilter=Xn,Bi.magFilter=Xn,Bi.wrapS=oi,Bi.wrapT=oi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class QM{constructor(t={}){const{canvas:e=Yp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=pi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=u,m=new Set([oh,rh,sh]),g=new Set([pi,Li,ro,fr,nh,ih]),y=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let D=null,R=null;const M=[],w=[];let B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let q=!1,it=null,j=null,N=null,st=null;this._outputColorSpace=Nn;let at=0,$=0,ot=null,nt=-1,Q=null;const St=new mn,Yt=new mn;let ce=null;const gt=new ye(0);let Wt=0,ne=e.width,ue=e.height,jt=1,re=null,ze=null;const me=new mn(0,0,ne,ue),_e=new mn(0,0,ne,ue);let Te=!1;const Et=new po,Kt=new mh;let Qt=!1,oe=!1;const Lt=new Ue,Ae=new G,Zt=new mn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ft(){return ot===null?jt:1}let L=n;function te(_,P){return e.getContext(_,P)}let Jt,qt,Rt,ee,Mt,lt,C,S,J,vt,pt,Nt,Bt,xt,wt,Ot,W,_t,mt,Xt,et,K,dt;try{const _={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",F,!1),L===null){const P="webgl2";if(L=te(P,_),L===null)throw te(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(_){throw e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",F,!1),Be("WebGLRenderer: "+_.message),_}function Dt(){Jt=new ev(L),Jt.init(),et=new GM(L,Jt),qt=new Wx(L,Jt,t,et),Rt=new kM(L,Jt),qt.reversedDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),j=L.createFramebuffer(),N=L.createFramebuffer(),st=L.createFramebuffer(),ee=new sv(L),Mt=new EM,lt=new HM(L,Jt,Rt,Mt,qt,et,ee),C=new tv(O),S=new og(L),K=new Gx(L,S),J=new nv(L,S,ee,K),vt=new ov(L,J,S,K,ee),_t=new rv(L,qt,lt),wt=new Xx(Mt),pt=new TM(O,C,Jt,qt,K,wt),Nt=new KM(O,Mt),Bt=new RM,xt=new NM(Jt),W=new Hx(O,C,Rt,vt,p,l),Ot=new zM(O,vt,qt),dt=new ZM(L,ee,qt,Rt),mt=new Vx(L,Jt,ee),Xt=new iv(L,Jt,ee),ee.programs=pt.programs,O.capabilities=qt,O.extensions=Jt,O.properties=Mt,O.renderLists=Bt,O.shadowMap=Ot,O.state=Rt,O.info=ee}v!==pi&&(B=new lv(v,e.width,e.height,a,i,r));const x=new YM(O,L);this.xr=x,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const _=Jt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Jt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(_){_!==void 0&&(jt=_,this.setSize(ne,ue,!1))},this.getSize=function(_){return _.set(ne,ue)},this.setSize=function(_,P,H=!0){if(x.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=_,ue=P,e.width=Math.floor(_*jt),e.height=Math.floor(P*jt),H===!0&&(e.style.width=_+"px",e.style.height=P+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(ne*jt,ue*jt).floor()},this.setDrawingBufferSize=function(_,P,H){ne=_,ue=P,jt=H,e.width=Math.floor(_*H),e.height=Math.floor(P*H),this.setViewport(0,0,_,P)},this.setEffects=function(_){if(v===pi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let P=0;P<_.length;P++)if(_[P].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(St)},this.getViewport=function(_){return _.copy(me)},this.setViewport=function(_,P,H,Y){_.isVector4?me.set(_.x,_.y,_.z,_.w):me.set(_,P,H,Y),Rt.viewport(St.copy(me).multiplyScalar(Ft()).round())},this.getScissor=function(_){return _.copy(_e)},this.setScissor=function(_,P,H,Y){_.isVector4?_e.set(_.x,_.y,_.z,_.w):_e.set(_,P,H,Y),Rt.scissor(Yt.copy(_e).multiplyScalar(Ft()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(_){Rt.setScissorTest(Te=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){ze=_},this.getClearColor=function(_){return _.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,H=!0){let Y=0;if(_){let z=!1;if(ot!==null){const ht=ot.texture.format;z=m.has(ht)}if(z){const ht=ot.texture.type,At=g.has(ht),bt=W.getClearColor(),Gt=W.getClearAlpha(),$t=bt.r,ae=bt.g,de=bt.b;At?(y[0]=$t,y[1]=ae,y[2]=de,y[3]=Gt,L.clearBufferuiv(L.COLOR,0,y)):(T[0]=$t,T[1]=ae,T[2]=de,T[3]=Gt,L.clearBufferiv(L.COLOR,0,T))}else Y|=L.COLOR_BUFFER_BIT}P&&(Y|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),it=_},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",F,!1),W.dispose(),Bt.dispose(),xt.dispose(),lt.dispose(),Mt.dispose(),C.dispose(),vt.dispose(),J.dispose(),K.dispose(),dt.dispose(),pt.dispose(),x.dispose(),x.removeEventListener("sessionstart",ge),x.removeEventListener("sessionend",Ye),Me.stop()};function k(_){_.preventDefault(),Ea("WebGLRenderer: Context Lost."),q=!0}function X(){Ea("WebGLRenderer: Context Restored."),q=!1;const _=ee.autoReset,P=Ot.enabled,H=Ot.autoUpdate,Y=Ot.needsUpdate,z=Ot.type;Dt(),ee.autoReset=_,Ot.enabled=P,Ot.autoUpdate=H,Ot.needsUpdate=Y,Ot.type=z}function F(_){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function rt(_){const P=_.target;P.removeEventListener("dispose",rt),ct(P)}function ct(_){kt(_),Mt.remove(_)}function kt(_){const P=Mt.get(_).programs;P!==void 0&&(P.forEach(function(H){pt.releaseProgram(H)}),_.isShaderMaterial&&pt.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,H,Y,z,ht){P===null&&(P=Ut);const At=z.isMesh&&z.matrixWorld.determinantAffine()<0,bt=ut(_,P,H,Y,z);Rt.setMaterial(Y,At);let Gt=H.index,$t=1;if(Y.wireframe===!0){if(Gt=J.getWireframeAttribute(H),Gt===void 0)return;$t=2}const ae=H.drawRange,de=H.attributes.position;let Vt=ae.start*$t,Ie=(ae.start+ae.count)*$t;ht!==null&&(Vt=Math.max(Vt,ht.start*$t),Ie=Math.min(Ie,(ht.start+ht.count)*$t)),Gt!==null?(Vt=Math.max(Vt,0),Ie=Math.min(Ie,Gt.count)):de!=null&&(Vt=Math.max(Vt,0),Ie=Math.min(Ie,de.count));const je=Ie-Vt;if(je<0||je===1/0)return;K.setup(z,Y,bt,H,Gt);let Ce,Re=mt;if(Gt!==null&&(Ce=S.get(Gt),Re=Xt,Re.setIndex(Ce)),z.isMesh)Y.wireframe===!0?(Rt.setLineWidth(Y.wireframeLinewidth*Ft()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if(z.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),Rt.setLineWidth(qe*Ft()),z.isLineSegments?Re.setMode(L.LINES):z.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else z.isPoints?Re.setMode(L.POINTS):z.isSprite&&Re.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qe=z._multiDrawStarts,he=z._multiDrawCounts,gn=z._multiDrawCount,Qe=Gt?S.get(Gt).bytesPerElement:1,An=Mt.get(Y).currentProgram.getUniforms();for(let wn=0;wn<gn;wn++)An.setValue(L,"_gl_DrawID",wn),Re.render(qe[wn]/Qe,he[wn])}else if(z.isInstancedMesh)Re.renderInstances(Vt,je,z.count);else if(H.isInstancedBufferGeometry){const qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,he=Math.min(H.instanceCount,qe);Re.renderInstances(Vt,je,he)}else Re.render(Vt,je)};function ve(_,P,H,Y){it!==null&&_.isNodeMaterial&&it.setObject(Y,_),Qt===!0&&wt.setState(_,H,!1),_.transparent===!0&&_.side===yn&&_.forceSinglePass===!1?(_.side=jn,_.needsUpdate=!0,E(_,P,Y),_.side=Ts,_.needsUpdate=!0,E(_,P,Y),_.side=yn):E(_,P,Y)}this.compile=function(_,P,H=null){H===null&&(H=_),it!==null&&it.renderStart(_,P,H),R=xt.get(H),R.init(P),w.push(R),H.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),_!==H&&_.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),R.setupLights(),it!==null&&it.updateLights(R.state.lightsArray),oe=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,oe),Qt===!0&&wt.setGlobalState(this.clippingPlanes,P),it!==null&&Ot.render(R.state.shadowsArray,H,P);const Y=new Set;return _.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ht=z.material;if(ht)if(Array.isArray(ht))for(let At=0;At<ht.length;At++){const bt=ht[At];ve(bt,H,P,z),Y.add(bt)}else ve(ht,H,P,z),Y.add(ht)}),R=w.pop(),it!==null&&it.renderEnd(),Y},this.compileAsync=function(_,P,H=null){const Y=this.compile(_,P,H);return new Promise(z=>{function ht(){if(Y.forEach(function(At){const Gt=Mt.get(At).currentProgram;(Gt===void 0||Gt.isReady())&&Y.delete(At)}),Y.size===0){z(_);return}setTimeout(ht,10)}Jt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ee=null;function Ne(_){Ee&&Ee(_)}function ge(){Me.stop()}function Ye(){Me.start()}const Me=new If;Me.setAnimationLoop(Ne),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(_){Ee=_,x.setAnimationLoop(_),_===null?Me.stop():Me.start()},x.addEventListener("sessionstart",ge),x.addEventListener("sessionend",Ye),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;it!==null&&it.renderStart(_,P);const H=x.enabled===!0&&x.isPresenting===!0,Y=B!==null&&(ot===null||H)&&B.begin(O,ot);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(x.cameraAutoUpdate===!0&&x.updateCamera(P),P=x.getCamera()),_.isScene===!0&&_.onBeforeRender(O,_,P,ot),R=xt.get(_,w.length),R.init(P),R.state.textureUnits=lt.getTextureUnits(),w.push(R),Lt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Kt.setFromArrayCamera(P):Et.setFromProjectionMatrix(Lt,Pi,P.reversedDepth),oe=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,oe),D=Bt.get(_,M.length),D.init(),M.push(D),this.info.render.frame++,x.enabled===!0&&x.isPresenting===!0){const At=O.xr.getDepthSensingMesh();At!==null&&ie(At,P,-1/0,O.sortObjects)}ie(_,P,0,O.sortObjects),D.finish(),it!==null&&it.updateLights(R.state.lightsArray),O.sortObjects===!0&&D.sort(re,ze),Ct=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Ct&&W.addToRenderList(D,_),this.info.autoReset===!0&&this.info.reset(),Qt===!0&&wt.beginShadows();const z=R.state.shadowsArray;if(Ot.render(z,_,P),Qt===!0&&wt.endShadows(),(Y&&B.hasRenderPass())===!1){const At=D.opaque,bt=D.transmissive;if(R.setupLights(),P.isArrayCamera){const Gt=P.cameras;if(bt.length>0)for(let $t=0,ae=Gt.length;$t<ae;$t++){const de=Gt[$t];xn(At,bt,_,de)}Ct&&W.render(_);for(let $t=0,ae=Gt.length;$t<ae;$t++){const de=Gt[$t];we(D,_,de,de.viewport)}}else bt.length>0&&xn(At,bt,_,P),Ct&&W.render(_),we(D,_,P)}ot!==null&&$===0&&(lt.updateMultisampleRenderTarget(ot),lt.updateRenderTargetMipmap(ot)),Y&&B.end(O),_.isScene===!0&&_.onAfterRender(O,_,P),K.resetDefaultState(),nt=-1,Q=null,w.pop(),w.length>0?(R=w[w.length-1],lt.setTextureUnits(R.state.textureUnits),Qt===!0&&wt.setGlobalState(O.clippingPlanes,R.state.camera)):R=null,M.pop(),M.length>0?D=M[M.length-1]:D=null,it!==null&&it.renderEnd()};function ie(_,P,H,Y){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)R.pushLight(_),_.castShadow&&R.pushShadow(_);else if(_.isSprite){const At=P.isArrayCamera?Kt:Et;if(!_.frustumCulled||_.intersectsFrustum(At)){Y&&Zt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Lt);const bt=vt.update(_),Gt=_.material;Gt.visible&&D.push(_,bt,Gt,H,Zt.z,null,P)}}else if(_.isMesh||_.isLine||_.isPoints){const At=P.isArrayCamera?Kt:Et;if(!_.frustumCulled||_.intersectsFrustum(At)){const bt=vt.update(_),Gt=_.material;if(Y&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Zt.copy(_.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Zt.copy(bt.boundingSphere.center)),Zt.applyMatrix4(_.matrixWorld).applyMatrix4(Lt)),Array.isArray(Gt)){const $t=bt.groups;for(let ae=0,de=$t.length;ae<de;ae++){const Vt=$t[ae],Ie=Gt[Vt.materialIndex];Ie&&Ie.visible&&D.push(_,bt,Ie,H,Zt.z,Vt,P)}}else Gt.visible&&D.push(_,bt,Gt,H,Zt.z,null,P)}}}const ht=_.children;for(let At=0,bt=ht.length;At<bt;At++)ie(ht[At],P,H,Y)}function we(_,P,H,Y){const{opaque:z,transmissive:ht,transparent:At}=_;R.setupLightsView(H),Qt===!0&&wt.setGlobalState(O.clippingPlanes,H),Y&&Rt.viewport(St.copy(Y)),z.length>0&&bn(z,P,H),ht.length>0&&bn(ht,P,H),At.length>0&&bn(At,P,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function xn(_,P,H,Y){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){const Vt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:Vt?ti:pi,minFilter:Vi,samples:Math.max(4,qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:on.workingColorSpace})}const ht=R.state.transmissionRenderTarget[Y.id],At=Y.viewport||St;ht.setSize(At.z*O.transmissionResolutionScale,At.w*O.transmissionResolutionScale);const bt=O.getRenderTarget(),Gt=O.getActiveCubeFace(),$t=O.getActiveMipmapLevel();O.setRenderTarget(ht),O.getClearColor(gt),Wt=O.getClearAlpha(),Wt<1&&O.setClearColor(16777215,.5),O.clear(),Ct&&W.render(H);const ae=O.toneMapping;O.toneMapping=hs;const de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),Qt===!0&&wt.setGlobalState(O.clippingPlanes,Y),bn(_,H,Y),lt.updateMultisampleRenderTarget(ht),lt.updateRenderTargetMipmap(ht),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ie=0,je=P.length;Ie<je;Ie++){const Ce=P[Ie],{object:Re,geometry:qe,material:he,group:gn}=Ce;if(he.side===yn&&Re.layers.test(Y.layers)){const Qe=he.side;he.side=jn,he.needsUpdate=!0,Vn(Re,H,Y,qe,he,gn),he.side=Qe,he.needsUpdate=!0,Vt=!0}}Vt===!0&&(lt.updateMultisampleRenderTarget(ht),lt.updateRenderTargetMipmap(ht))}O.setRenderTarget(bt,Gt,$t),O.setClearColor(gt,Wt),de!==void 0&&(Y.viewport=de),O.toneMapping=ae}function bn(_,P,H){const Y=P.isScene===!0?P.overrideMaterial:null;for(let z=0,ht=_.length;z<ht;z++){const At=_[z],{object:bt,geometry:Gt,group:$t}=At;let ae=At.material;ae.allowOverride===!0&&Y!==null&&(ae=Y),bt.layers.test(H.layers)&&Vn(bt,P,H,Gt,ae,$t)}}function Vn(_,P,H,Y,z,ht){it!==null&&z.isNodeMaterial&&it.setObject(_,z),_.onBeforeRender(O,P,H,Y,z,ht),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),z.onBeforeRender(O,P,H,Y,_,ht),z.transparent===!0&&z.side===yn&&z.forceSinglePass===!1?(z.side=jn,z.needsUpdate=!0,O.renderBufferDirect(H,P,Y,z,_,ht),z.side=Ts,z.needsUpdate=!0,O.renderBufferDirect(H,P,Y,z,_,ht),z.side=yn):O.renderBufferDirect(H,P,Y,z,_,ht),_.onAfterRender(O,P,H,Y,z,ht)}function ni(_){let P=0;for(const H of _)H.texture!==null&&P++;return P}function E(_,P,H){P.isScene!==!0&&(P=Ut);const Y=Mt.get(_),z=R.state.lights,ht=R.state.shadowsArray,At=z.state.version,bt=pt.getParameters(_,z.state,ht,P,H,R.state.lightProbeGridArray),Gt=pt.getProgramCacheKey(bt);let $t=Y.programs;Y.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y.fog=P.fog;const ae=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;Y.envMap=C.get(_.envMap||Y.environment,ae),Y.envMapRotation=Y.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,$t===void 0&&(_.addEventListener("dispose",rt),$t=new Map,Y.programs=$t,Y.programVariants=new Map);let de=$t.get(Gt);if(de!==void 0){if(Y.currentProgram===de&&Y.lightsStateVersion===At)return Z(_,bt),de}else bt.uniforms=pt.getUniforms(_),it!==null&&_.isNodeMaterial&&it.build(_,H,bt),_.onBeforeCompile(bt,O),de=pt.acquireProgram(bt,Gt),$t.set(Gt,de),Y.uniforms=bt.uniforms;const Vt=Y.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Vt.clippingPlanes=wt.uniform),Z(_,bt),Y.needsLights=A(_),Y.lightsStateVersion=At,Y.needsLights&&(Vt.ambientLightColor.value=z.state.ambient,Vt.lightProbe.value=z.state.probe,Vt.sunLights.value=z.state.sun,Vt.sunLightShadows.value=z.state.sunShadow,Vt.directionalLights.value=z.state.directional,Vt.directionalLightShadows.value=z.state.directionalShadow,Vt.spotLights.value=z.state.spot,Vt.spotLightShadows.value=z.state.spotShadow,Vt.rectAreaLights.value=z.state.rectArea,Vt.ltc_1.value=z.state.rectAreaLTC1,Vt.ltc_2.value=z.state.rectAreaLTC2,Vt.pointLights.value=z.state.point,Vt.pointLightShadows.value=z.state.pointShadow,Vt.hemisphereLights.value=z.state.hemi,Vt.sunShadowMatrix.value=z.state.sunShadowMatrix,Vt.sunShadowCascade.value=z.state.sunShadowCascade,Vt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Vt.spotLightMatrix.value=z.state.spotLightMatrix,Vt.spotLightMap.value=z.state.spotLightMap,Vt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.numLightProbeGrids=ni(R.state.lightProbeGridArray),Y.currentProgram=de,Y.uniformsList=null,de}function I(_,P,H,Y,z){const ht=Mt.get(_),At=ht.currentProgram.id+","+Y+","+z;let bt=ht.programVariants.get(At);return bt===void 0?(bt=E(_,P,H),ht.programVariants.set(At,bt)):(ht.currentProgram=bt,ht.uniformsList=null,ht.outputColorSpace=Y,ht.toneMapping=z),bt}function V(_){if(_.uniformsList===null){const P=_.currentProgram.getUniforms();_.uniformsList=ga.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function Z(_,P){const H=Mt.get(_);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function ut(_,P,H,Y,z){P.isScene!==!0&&(P=Ut),lt.resetTextureUnits();const ht=P.fog,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?P.environment:null,bt=ot===null?O.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:on.workingColorSpace,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,$t=C.get(Y.envMap||At,Gt),ae=Y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,de=!!H.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!H.morphAttributes.position,Ie=!!H.morphAttributes.normal,je=!!H.morphAttributes.color;let Ce=hs;Y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ce=O.toneMapping);const Re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qe=Re!==void 0?Re.length:0,he=Mt.get(Y),gn=R.state.lights;if(Qt===!0&&(oe===!0||_!==Q)){const He=_===Q&&Y.id===nt;wt.setState(Y,_,He)}let Qe=!1,An=!1;Y.version===he.__version?he.needsLights&&he.lightsStateVersion!==gn.state.version||z.isBatchedMesh&&he.batching===!1||!z.isBatchedMesh&&he.batching===!0||z.isBatchedMesh&&he.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&he.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&he.instancing===!1||!z.isInstancedMesh&&he.instancing===!0||z.isSkinnedMesh&&he.skinning===!1||!z.isSkinnedMesh&&he.skinning===!0||z.isInstancedMesh&&he.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&he.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&he.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&he.instancingMorph===!1&&z.morphTexture!==null||he.envMap!==$t||Y.fog===!0&&he.fog!==ht||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==wt.numPlanes||he.numIntersection!==wt.numIntersection)||he.vertexAlphas!==ae||he.vertexTangents!==de||he.morphTargets!==Vt||he.morphNormals!==Ie||he.morphColors!==je||he.morphTargetsCount!==qe||he.numLightProbeGrids!==ni(R.state.lightProbeGridArray)?Qe=!0:(he.outputColorSpace!==bt||he.toneMapping!==Ce)&&(An=!0):(Qe=!0,he.__version=Y.version);let wn=he.currentProgram;(Qe===!0||An===!0)&&(wn=An===!0?I(Y,P,z,bt,Ce):E(Y,P,z),it&&Y.isNodeMaterial&&it.onUpdateProgram(Y,wn,he));let li=!1,Wn=!1,qn=!1;const Je=wn.getUniforms(),ke=he.uniforms;if(Rt.useProgram(wn.program)&&(li=!0,Wn=!0,qn=!0),Y.id!==nt&&(nt=Y.id,Wn=!0),li||Q!==_){Rt.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Je.setValue(L,"projectionMatrix",_.projectionMatrix),Je.setValue(L,"viewMatrix",_.matrixWorldInverse);const Ke=Je.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,Ae.setFromMatrixPosition(_.matrixWorld)),qt.logarithmicDepthBuffer&&Je.setValue(L,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Je.setValue(L,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,Wn=!0,qn=!0)}if(he.needsLights&&(gn.state.sunShadowMap.length>0&&Je.setValue(L,"sunShadowMap",gn.state.sunShadowMap,lt),gn.state.directionalShadowMap.length>0&&Je.setValue(L,"directionalShadowMap",gn.state.directionalShadowMap,lt),gn.state.spotShadowMap.length>0&&Je.setValue(L,"spotShadowMap",gn.state.spotShadowMap,lt),gn.state.pointShadowMap.length>0&&Je.setValue(L,"pointShadowMap",gn.state.pointShadowMap,lt)),z.isSkinnedMesh){Je.setOptional(L,z,"bindMatrix"),Je.setOptional(L,z,"bindMatrixInverse");const He=z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Je.setValue(L,"boneTexture",He.boneTexture,lt))}z.isBatchedMesh&&(Je.setOptional(L,z,"batchingTexture"),Je.setValue(L,"batchingTexture",z._matricesTexture,lt),Je.setOptional(L,z,"batchingIdTexture"),Je.setValue(L,"batchingIdTexture",z._indirectTexture,lt),Je.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Je.setValue(L,"batchingColorTexture",z._colorsTexture,lt));const rn=H.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&_t.update(z,H,wn),(Wn||he.receiveShadow!==z.receiveShadow)&&(he.receiveShadow=z.receiveShadow,Je.setValue(L,"receiveShadow",z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&P.environment!==null&&(ke.envMapIntensity.value=P.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=$M()),Wn){if(Je.setValue(L,"toneMappingExposure",O.toneMappingExposure),he.needsLights&&U(ke,qn),ht&&Y.fog===!0&&Nt.refreshFogUniforms(ke,ht),Nt.refreshMaterialUniforms(ke,Y,jt,ue,R.state.transmissionRenderTarget[_.id]),he.needsLights&&he.numLightProbeGrids>0){const He=b;let Ke=0;for(const ln of R.state.lightProbeGridArray)ln.texture!==null&&(He.textures[Ke]=ln.texture,He.min[Ke]=ln.boundingBox.min,He.max[Ke]=ln.boundingBox.max,He.resolution[Ke]=ln.resolution,Ke++);for(const ln in He)He[ln].length=Ke;ke.probesSH.value=He.textures,ke.probesMin.value=He.min,ke.probesMax.value=He.max,ke.probesResolution.value=He.resolution}ga.upload(L,V(he),ke,lt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ga.upload(L,V(he),ke,lt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Je.setValue(L,"center",z.center),Je.setValue(L,"modelViewMatrix",z.modelViewMatrix),Je.setValue(L,"normalMatrix",z.normalMatrix),Je.setValue(L,"modelMatrix",z.matrixWorld),Y.uniformsGroups!==void 0){const He=Y.uniformsGroups;for(let Ke=0,ln=He.length;Ke<ln;Ke++){const vn=He[Ke];dt.update(vn,wn),dt.bind(vn,wn)}}return wn}function U(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.sunLights.needsUpdate=P,_.sunLightShadows.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function A(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(_,P,H){const Y=Mt.get(_);Y.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Mt.get(_.texture).__webglTexture=P,Mt.get(_.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:H,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){const H=Mt.get(_);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(_,P=0,H=0){ot=_,at=P,$=H;let Y=null,z=!1,ht=!1;if(_){const bt=Mt.get(_);if(bt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(L.FRAMEBUFFER,bt.__webglFramebuffer),St.copy(_.viewport),Yt.copy(_.scissor),ce=_.scissorTest,Rt.viewport(St),Rt.scissor(Yt),Rt.setScissorTest(ce),nt=-1;return}else if(bt.__webglFramebuffer===void 0)lt.setupRenderTarget(_);else if(bt.__hasExternalTextures)lt.rebindTextures(_,Mt.get(_.texture).__webglTexture,Mt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ae=_.depthTexture;if(bt.__boundDepthTexture!==ae){if(ae!==null&&Mt.has(ae)&&(_.width!==ae.image.width||_.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(_)}}const Gt=_.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(ht=!0);const $t=Mt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray($t[P])?Y=$t[P][H]:Y=$t[P],z=!0):_.samples>0&&lt.useMultisampledRTT(_)===!1?Y=Mt.get(_).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[H]:Y=$t,St.copy(_.viewport),Yt.copy(_.scissor),ce=_.scissorTest}else St.copy(me).multiplyScalar(jt).floor(),Yt.copy(_e).multiplyScalar(jt).floor(),ce=Te;if(H!==0&&(Y=j),Rt.bindFramebuffer(L.FRAMEBUFFER,Y)&&Rt.drawBuffers(_,Y),Rt.viewport(St),Rt.scissor(Yt),Rt.setScissorTest(ce),z){const bt=Mt.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,bt.__webglTexture,H)}else if(ht){const bt=P;for(let Gt=0;Gt<_.textures.length;Gt++){const $t=Mt.get(_.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,$t.__webglTexture,H,bt)}}else if(_!==null&&H!==0){const bt=Mt.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,H)}nt=-1};function ft(_){const P=Mt.get(_);return(P.__readFormat!==_.format||P.__readType!==_.type)&&(P.__readFormat=_.format,P.__readType=_.type,P.__formatReadable=qt.textureFormatReadable(_.format),P.__typeReadable=qt.textureTypeReadable(_.type)),P}this.readRenderTargetPixels=function(_,P,H,Y,z,ht,At,bt=0){if(!(_&&_.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Mt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&At!==void 0&&(Gt=Gt[At],Array.isArray(Gt)&&(Gt=Gt[0])),Gt){Rt.bindFramebuffer(L.FRAMEBUFFER,Gt);try{const $t=_.textures[bt],ae=$t.format,de=$t.type;_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);const Vt=ft($t);if(Vt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-Y&&H>=0&&H<=_.height-z&&L.readPixels(P,H,Y,z,et.convert(ae),et.convert(de),ht)}finally{const $t=ot!==null?Mt.get(ot).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(_,P,H,Y,z,ht,At,bt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Mt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&At!==void 0&&(Gt=Gt[At],Array.isArray(Gt)&&(Gt=Gt[0])),Gt)if(P>=0&&P<=_.width-Y&&H>=0&&H<=_.height-z){Rt.bindFramebuffer(L.FRAMEBUFFER,Gt);const $t=_.textures[bt],ae=$t.format,de=$t.type;_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);const Vt=ft($t);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(P,H,Y,z,et.convert(ae),et.convert(de),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const je=ot!==null?Mt.get(ot).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,je);const Ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qp(L,Ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ie),L.deleteSync(Ce),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,H=0){const Y=Math.pow(2,-H),z=Math.floor(_.image.width*Y),ht=Math.floor(_.image.height*Y),At=P!==null?P.x:0,bt=P!==null?P.y:0;lt.setTexture2D(_,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,At,bt,z,ht),Rt.unbindTexture()},this.copyTextureToTexture=function(_,P,H=null,Y=null,z=0,ht=0){let At,bt,Gt,$t,ae,de,Vt,Ie,je;const Ce=_.isCompressedTexture?_.mipmaps[ht]:_.image;if(H!==null)At=H.max.x-H.min.x,bt=H.max.y-H.min.y,Gt=H.isBox3?H.max.z-H.min.z:1,$t=H.min.x,ae=H.min.y,de=H.isBox3?H.min.z:0;else{const Je=Math.pow(2,-z);At=Math.floor(Ce.width*Je),bt=Math.floor(Ce.height*Je),_.isDataArrayTexture?Gt=Ce.depth:_.isData3DTexture?Gt=Math.floor(Ce.depth*Je):Gt=1,$t=0,ae=0,de=0}Y!==null?(Vt=Y.x,Ie=Y.y,je=Y.z):(Vt=0,Ie=0,je=0);const Re=et.convert(P.format),qe=et.convert(P.type);let he;P.isData3DTexture?(lt.setTexture3D(P,0),he=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(lt.setTexture2DArray(P,0),he=L.TEXTURE_2D_ARRAY):(lt.setTexture2D(P,0),he=L.TEXTURE_2D),Rt.activeTexture(L.TEXTURE0),Rt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),Rt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Rt.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);const gn=Rt.getParameter(L.UNPACK_ROW_LENGTH),Qe=Rt.getParameter(L.UNPACK_IMAGE_HEIGHT),An=Rt.getParameter(L.UNPACK_SKIP_PIXELS),wn=Rt.getParameter(L.UNPACK_SKIP_ROWS),li=Rt.getParameter(L.UNPACK_SKIP_IMAGES);Rt.pixelStorei(L.UNPACK_ROW_LENGTH,Ce.width),Rt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ce.height),Rt.pixelStorei(L.UNPACK_SKIP_PIXELS,$t),Rt.pixelStorei(L.UNPACK_SKIP_ROWS,ae),Rt.pixelStorei(L.UNPACK_SKIP_IMAGES,de);const Wn=_.isDataArrayTexture||_.isData3DTexture,qn=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){const Je=Mt.get(_),ke=Mt.get(P),rn=Mt.get(Je.__renderTarget),He=Mt.get(ke.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,rn.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ke=0;Ke<Gt;Ke++)Wn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(_).__webglTexture,z,de+Ke),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,ht,je+Ke)),L.blitFramebuffer($t,ae,$t+At,ae+bt,Vt,Ie,Vt+At,Ie+bt,L.DEPTH_BUFFER_BIT,L.NEAREST);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||_.isRenderTargetTexture||Mt.has(_)){const Je=Mt.get(_),ke=Mt.get(P);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,N),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,st);for(let rn=0;rn<Gt;rn++)Wn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Je.__webglTexture,z,de+rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Je.__webglTexture,z),qn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,ht,je+rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,ht),z!==0?L.blitFramebuffer($t,ae,$t+At,ae+bt,Vt,Ie,Vt+At,Ie+bt,L.COLOR_BUFFER_BIT,L.NEAREST):qn?L.copyTexSubImage3D(he,ht,Vt,Ie,je+rn,$t,ae,At,bt):L.copyTexSubImage2D(he,ht,Vt,Ie,$t,ae,At,bt);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else qn?_.isDataTexture||_.isData3DTexture?L.texSubImage3D(he,ht,Vt,Ie,je,At,bt,Gt,Re,qe,Ce.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(he,ht,Vt,Ie,je,At,bt,Gt,Re,Ce.data):L.texSubImage3D(he,ht,Vt,Ie,je,At,bt,Gt,Re,qe,Ce):_.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,Vt,Ie,At,bt,Re,qe,Ce.data):_.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,Vt,Ie,Ce.width,Ce.height,Re,Ce.data):L.texSubImage2D(L.TEXTURE_2D,ht,Vt,Ie,At,bt,Re,qe,Ce);Rt.pixelStorei(L.UNPACK_ROW_LENGTH,gn),Rt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),Rt.pixelStorei(L.UNPACK_SKIP_PIXELS,An),Rt.pixelStorei(L.UNPACK_SKIP_ROWS,wn),Rt.pixelStorei(L.UNPACK_SKIP_IMAGES,li),ht===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(he),Rt.unbindTexture()},this.initRenderTarget=function(_){Mt.get(_).__webglFramebuffer===void 0&&lt.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?lt.setTextureCube(_,0):_.isData3DTexture?lt.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?lt.setTexture2DArray(_,0):lt.setTexture2D(_,0),Rt.unbindTexture()},this.resetState=function(){at=0,$=0,ot=null,Rt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=on._getDrawingBufferColorSpace(t),e.unpackColorSpace=on._getUnpackColorSpace()}}const fd={type:"change"},Ah={type:"start"},Wf={type:"end"},ia=new vr,pd=new rs,jM=Math.cos(70*Aa.DEG2RAD),On=new G,ci=2*Math.PI,un={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6;class t1 extends sg{constructor(t,e=null){super(t,e),this.state=un.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Sn,this._lastTargetPosition=new G,this._quat=new Sn().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wu,this._sphericalDelta=new Wu,this._scale=1,this._panOffset=new G,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new G,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=i1.bind(this),this._onContextMenu=h1.bind(this),this._onMouseWheel=o1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=l1.bind(this),this._onTouchMove=c1.bind(this),this._onMouseDown=s1.bind(this),this._onMouseMove=r1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=d1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=un.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fd),this.update(),this.state=un.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;On.copy(e).sub(this.target),On.applyQuaternion(this._quat),this._spherical.setFromVector3(On),this.autoRotate&&this.state===un.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ci:n>Math.PI&&(n-=ci),i<-Math.PI?i+=ci:i>Math.PI&&(i-=ci),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(On.setFromSpherical(this._spherical),On.applyQuaternion(this._quatInverse),e.copy(this.target).add(On),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=On.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=On.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ia.origin.copy(this.object.position),ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ia.direction))<jM?this.object.lookAt(this.target):(pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ia.intersectPlane(pd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ci/60*this.autoRotateSpeed*t:ci/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){On.setFromMatrixColumn(e,0),On.multiplyScalar(-t),this._panOffset.add(On)}_panUp(t,e){this.screenSpacePanning===!0?On.setFromMatrixColumn(e,1):(On.setFromMatrixColumn(e,0),On.crossVectors(this.object.up,On)),On.multiplyScalar(t),this._panOffset.add(On)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;On.copy(i).sub(this.target);let r=On.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/e.clientHeight),this._rotateUp(ci*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/e.clientHeight),this._rotateUp(ci*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function e1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function n1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function i1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wf),this.state=un.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function s1(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=un.DOLLY;break;case ar.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=un.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=un.ROTATE}break;case ar.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=un.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=un.PAN}break;default:this.state=un.NONE}this.state!==un.NONE&&this.dispatchEvent(Ah)}function r1(s){switch(this.state){case un.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case un.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function o1(s){this.enabled===!1||this.enableZoom===!1||this.state!==un.NONE||(s.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Wf))}function a1(s){this.enabled!==!1&&this._handleKeyDown(s)}function l1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case sr.ROTATE:if(this.enableRotate===!1){this.state=un.NONE;break}this._handleTouchStartRotate(s),this.state=un.TOUCH_ROTATE;break;case sr.PAN:if(this.enablePan===!1){this.state=un.NONE;break}this._handleTouchStartPan(s),this.state=un.TOUCH_PAN;break;default:this.state=un.NONE}break;case 2:switch(this.touches.TWO){case sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=un.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=un.TOUCH_DOLLY_ROTATE;break;default:this.state=un.NONE}break;default:this.state=un.NONE}this.state!==un.NONE&&this.dispatchEvent(Ah)}function c1(s){switch(this._trackPointer(s),this.state){case un.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case un.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case un.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case un.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=un.NONE}}function h1(s){this.enabled!==!1&&s.preventDefault()}function u1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const f1=new Ya(-1,1,1,-1,0,1);class p1 extends dn{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}}const m1=new p1;class Rh{constructor(t){this._mesh=new Ge(m1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,f1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class zc extends Tr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ai?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vo.clone(t.uniforms),this.material=new ai({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Rh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class md extends Tr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class g1 extends Tr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zc(_a),this.copyPass.material.blending=Ns,this.timer=new Vm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}md!==void 0&&(o instanceof md?n=!0:o instanceof g1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class x1 extends Tr{constructor(){super(),this.isOutputPass=!0,this.uniforms=vo.clone(sa.uniforms),this.material=new wf({name:sa.name,uniforms:this.uniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader}),this._fsQuad=new Rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},on.getTransfer(this._outputColorSpace)===fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===th?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class v1 extends Tr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const M1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xr extends Tr{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(r,o,{type:ti,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ei(r,o,{type:ti,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ei(r,o,{type:ti,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=M1;this.highPassUniforms=vo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ai({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vo.clone(_a.uniforms),this.blendMaterial=new ai({uniforms:this.copyUniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,premultipliedAlpha:!0,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Yn,this._fsQuad=new Rh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new ai({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ai({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}xr.BlurDirectionX=new It(1,0);xr.BlurDirectionY=new It(0,1);function Ch(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new dn;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=gd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<o[h].length;++v)u.push(o[h][v][f]);const p=gd(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function gd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Gn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const v=h.getComponent(f,p);a.setComponent(f+d,p,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function _d(s,t){if(t===Up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Pc||t===Kd){let e=s.getIndex();if(e===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Pc)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const $n={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2},y1={library:[-.38,.92],court:[1,0]};function S1(s,t){const e=Ri[s],n=e.kind==="house"?Math.max(e.w,e.d)*1.15+8:e.r*1.6+7,i=y1[s]??t,r=Math.hypot(i[0],i[1]),[o,a]=r>0?[i[0]/r,i[1]/r]:[.45,.9];return{target:[e.x,1,e.z],position:[e.x+o*n,n*.85,e.z+a*n]}}function b1(s,t,e){if(!e||s<=0||t<=0)return null;const{left:n,right:i,top:r,bottom:o}=e;if(n+i>=s||r+o>=t)return null;const a=(i-n)/2,l=(o-r)/2;return a===0&&l===0?null:{x:a,y:l}}const xd={x:0,y:0},kc=250;function vd(s,t,e,n){if(n||e>=kc)return t;const r=1-(1-Math.max(0,e)/kc)**3;return{x:s.x+(t.x-s.x)*r,y:s.y+(t.y-s.y)*r}}const Nl={cold:"#5a2a10",one:"#f08a3c",busy:"#ffb15a"},w1=4;function T1(s){const t=Math.max(0,Math.min(s,w1));return{mouth:t===0?Nl.cold:t===1?Nl.one:Nl.busy,heat:.25+t*.35}}const E1=(s,t)=>t?0:Math.sin(s*9)*.08+Math.sin(s*23)*.05,Xf={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit",raise:"raise_hand"},Ph=new Set(["type","smash","readsit","sit","drink"]),A1=s=>Xf[s]??"idle";function R1(s){return s.walking?"walk":s.needsYou&&s.hasRaise?"raise":s.needsYou||s.held?Ph.has(s.pose)?"sit":"idle":s.pose}const C1=new Set(["thinking","reading","writing","waiting"]);function P1(s,t){return!t.walking&&!t.held&&t.spot===la[s]&&t.state!==null&&C1.has(t.state)}const Hc={lead:["garden-pond","court-well","yard-2"],designer:["garden-easel","garden-pond"],frontend:["yard-1","tavern-1"],backend:["tavern-2","yard-2"],reviewer:["court-bench","tavern-1"]},L1={lead:[8e3,15e3],others:[45e3,9e4]},D1=new Set(["frontend","backend"]);function Oa(s,t,e){const{room:n,pose:i}=Qn[t],r=D1.has(s)?n==="yard"?"sparks":i==="drink"?"mug":null:null;return{spot:t,clip:A1(i),prop:r,ms:e}}function I1(s,t,e){let n=(s^Math.imul(e+1,2654435761))>>>0;for(const i of t)n=Math.imul(n^i.charCodeAt(0),2246822507)>>>0;return()=>{n=n+1831565813>>>0;let i=n;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Md(s,t,{seed:e,from:n=null,taken:i=new Set,reducedMotion:r=!1}){if(r)return Oa(s,bs[s],Number.POSITIVE_INFINITY);const o=I1(e,s,t),a=Hc[s],l=Math.floor(o()*a.length),c=p=>!i.has(p),h=a.map((p,v)=>a[(l+v)%a.length]),d=h.find(p=>c(p)&&p!==n)??h.find(c)??bs[s],[f,u]=L1[s==="lead"?"lead":"others"];return Oa(s,d,Math.round(f+o()*(u-f)))}function N1(s,t,e,n,{seed:i,reducedMotion:r}){const o={},a={},l=c=>new Set(Bh.filter(h=>h!==c).map(h=>o[h]?.act.spot??s[h]?.act.spot??e[h].to??e[h].spot));for(const c of Bh){if(!t.has(c))continue;const h=e[c],d=s[c];if(!d){const v=Md(c,0,{seed:i,reducedMotion:r}).ms,m=l(c);if(!h.walking&&Hc[c].includes(h.spot)&&!m.has(h.spot)){o[c]={n:0,act:Oa(c,h.spot,v),since:n};continue}const g=m.has(bs[c])?Hc[c].find(y=>!m.has(y))??bs[c]:bs[c];o[c]={n:0,act:Oa(c,g,v),since:null},g!==bs[c]&&(a[c]=g);continue}const f=!h.walking&&h.spot===d.act.spot,u=d.since??(f?n:null);if(u===null||n-u<d.act.ms){o[c]=u===d.since?d:{...d,since:u};continue}const p=Md(c,d.n+1,{seed:i,from:d.act.spot,taken:l(c),reducedMotion:r});o[c]={n:d.n+1,act:p,since:null},p.spot!==h.spot&&(a[c]=p.spot)}return{runs:o,to:a}}const U1=2.5,yd=3e3,Xi=(s,t=Number.NEGATIVE_INFINITY)=>({spot:s,since:t,walk:null,holdUntil:null,next:null}),Lh=s=>({x:Qn[s].x,z:Qn[s].z});function O1(s,t){const e=Qn[s],n=e.viaW?[{x:e.viaW[0],z:e.viaW[1],leave:e.anchor}]:[];return[Lh(s),...n,...ca(e.anchor,t)]}const F1=s=>s.slice(1).reduce((t,e,n)=>t+Math.hypot(e.x-s[n].x,e.z-s[n].z),0);function Dh(s,t){let e=Math.max(0,t)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a.x-o.x,a.z-o.z);if(e<l-1e-9){const c=e/l;return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(a.x-o.x,a.z-o.z)}}e-=l}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:Qn[s.to].ry}}function B1(s,t,e){const n=Dh(s,e-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...ca(r.node,t)]:r?.leave?[i,r,...ca(r.leave,t)]:[i,...ca(Qn[s.to].anchor,t)]}function Yf(s,t){return!s.walk||!Dh(s.walk,t-s.walk.startedAt).arrived?s:Xi(s.walk.to,s.walk.startedAt+F1(s.walk.path)/s.walk.speed*1e3)}const qf=(s,t,e,n)=>({...Xi(s,e),walk:{path:O1(s,t),to:t,startedAt:e,speed:n}});function Ul(s,t,e,n,i,r){const o=Yf(s,e);return o.walk?o.walk.to===t?o:i?Xi(t,e):{...o,walk:{path:B1(o.walk,t,e),to:t,startedAt:e,speed:n*U1}}:o.holdUntil!==null?t===o.spot?Xi(o.spot,o.since):{...o,next:t}:r&&o.spot===r&&t!==r&&e-o.since<yd?{...o,next:t,holdUntil:o.since+yd}:o.spot===t?o:i?Xi(t,e):qf(o.spot,t,e,n)}function Ol(s,t,e,n){return s.walk?Yf(s,t):s.holdUntil===null||t<s.holdUntil?s:s.next?n?Xi(s.next,t):qf(s.spot,s.next,t,e):{...s,holdUntil:null}}function Kf(s,t){return s.walk?Xi(s.walk.to,t):s.holdUntil!==null?Xi(s.next??s.spot,t):s}function z1(s,t,e){if(e){const i=Kf(s,t).spot;return{...Lh(i),spot:i,track:!1}}const n=Gc(s,t);return{x:n.x,z:n.z,spot:s.walk?s.walk.to:s.spot,track:n.walking}}const Fl=(s,t)=>s.holdUntil!==null&&t<s.holdUntil;function Gc(s,t){if(!s.walk)return{...Lh(s.spot),heading:Qn[s.spot].ry,walking:!1};const{x:e,z:n,heading:i,arrived:r}=Dh(s.walk,t-s.walk.startedAt);return{x:e,z:n,heading:i,walking:!r}}const{PI:nn}=Math,Sd=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};function k1(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:v,rr:m,pick:g,tiled:y,instanced:T}=s,{FLAGS:b,SPINNERS:D,skull:R,horns:M,flame:w,anvil:B,weaponRack:O,brazier:q,poleBanner:it,skullPole:j,barrel:N,well:st,bench:at,stall:$,lampPost:ot,crate:nt,sack:Q,torch:St,dummy:Yt,target:ce,hay:gt,easel:Wt,candle:ne,plantFlora:ue,bunk:jt,chest:re,hangingBanner:ze,table:me,partition:_e,wolf:Te,spikes:Et,cart:Kt,fence:Qt,skullCandle:oe,tent:Lt,signPost:Ae}=t,{patch:Zt}=e,{buildHouse:Ut,inH:Ct,outH:Ft,onWall:L}=n,te=new _r({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),Jt=new _r({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:qt,chimneyTop:Rt,emberBase:ee}=(()=>{const et=Ri.forge,K=new Tt;K.position.set(et.x,0,et.z),r.add(K),r.add(i.forge);const dt=-.6,Dt=new Tt;Dt.position.set(0,.16,dt),K.add(Dt),Dt.add(u(f(new Ai(1,24,0,nn),te,!1),0,1.05,1.705)),Dt.add(u(f(new cn(2,1.05),te,!1),0,.53,1.705)),Dt.add(u(f(new cn(1.4,.45),Jt,!1),0,.32,1.71));{const rt=new Tt;for(let ct=0;ct<4;ct++)rt.add(u(f(new Pt(.9-ct*.08,.14,1.2-ct*.1),ct%2?o.redD:h("#5a3a2a")),0,.5+ct*.16,0));rt.add(u(f(new Pt(1,.08,1.3),o.wood),0,.45,0)),rt.add(p(u(f(new se(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,nn/2)),Dt.add(u(rt,-2.9,0,.2))}const x=new cs("#ff8a3a",14,16,2);x.position.set(0,1.4,2.8),Dt.add(x),Dt.updateMatrixWorld(!0);const k=Dt.localToWorld(new G(0,10.9,-.5)),X=Dt.localToWorld(new G(0,1,2));v(K,B(),-2.9,2.9,Od(-2.9,2.9,-3.9,3.9)+nn/2,.16);{const rt=new Tt;rt.add(u(f(new Pt(1.5,.55,.7),o.wood),0,.27,0)),rt.add(p(u(f(new cn(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-nn/2,0,0)),v(K,rt,3.5,3,-.5,.16)}const F=[];for(let rt=0;rt<40;rt++)F.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});T(new Gi(1,0),F,{});for(let rt=0;rt<6;rt++)K.add(u(f(new an(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));v(K,O(4),-5.3,-2,Math.atan2(5.3,2),.16),v(K,O(4),5.7,.9,-nn/2,.16);{const rt=new Tt;rt.add(u(f(new Pt(.9,.5,.5),o.wood),0,.25,0));const ct=u(p(f(new se(.45,.45,.16,18),h("#8a8078")),0,0,nn/2),0,.8,0);rt.add(ct),v(K,rt,-4.8,.2,.4,.16)}for(const rt of[.4,2,3.9,5.2])v(K,q(0),Math.cos(rt)*6.9,Math.sin(rt)*6.9,0,.16);return v(K,it(4),-1.9,-3.8,0,.16),v(K,it(4),1.9,-3.8,0,.16),v(K,j(2.6),6,-3.6,0,.16),v(K,N(),-6,2,0,.16),{fireLight:x,chimneyTop:k,emberBase:X}})();{const et=Ri.court,K=new Tt;K.position.set(et.x,0,et.z),r.add(K),v(K,st(),-5.8,2),v(K,at(1.9,!0),-5.2,-4,0),v(K,$(),6.2,1.2,-nn/2);{const dt=new Tt;for(const Dt of[-1,1])dt.add(u(f(new Pt(.12,2.2,.12),o.woodD),Dt*.8,1.1,0));dt.add(u(f(new Pt(1.8,1.1,.08),o.wood),0,1.55,0));for(let Dt=0;Dt<6;Dt++)dt.add(u(p(f(new cn(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+Dt%3*.6,1.8-Math.floor(Dt/3)*.5,.05));dt.add(p(u(f(new Pt(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),v(K,dt,5.6,-5.4,-nn/2)}v(K,ot(6),-5.8,-1),v(K,N(),8,-.6),v(K,nt(.55),3.8,3.4,.3),v(K,Q(),4.4,3),v(K,j(2.4),-7.8,6);{const dt=new Tt;dt.add(u(f(new Pt(1.6,.5,.6),o.wood),0,.25,0)),dt.add(p(u(f(new cn(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-nn/2,0,0)),v(K,dt,-7.6,3.6,nn/2)}Zt("dirt",et.x-4,et.z+.5,4.4,5.6,0,.013)}{const et=Ri.yard;if(et.kind==="house")throw new Error("the yard is an open area");const K=et.gate??0,dt=new Tt;dt.position.set(et.x,0,et.z),r.add(dt),Zt("sand",et.x,et.z,et.r+.6,et.r+.6,0,.014,5),dt.add(i.yard);{const Dt=new Tt,x=Math.cos(K),k=Math.sin(K);Dt.position.set(x*et.r,0,k*et.r),Dt.rotation.y=Math.atan2(x,k);for(const X of[-1,1])Dt.add(u(St(),X*1.55,2,.24));dt.add(Dt),v(dt,j(2.6),x*(et.r+1.6)-k*2.2,k*(et.r+1.6)+x*2.2),v(dt,j(2.2),x*(et.r+1.6)+k*2.2,k*(et.r+1.6)-x*2.2)}v(dt,Yt(),-3.2,2.1,nn),v(dt,Yt(),1.6,3.2,nn),v(dt,ce(),4.4,3.6,Math.atan2(-4.4,-3.6)),v(dt,O(4),-5.4,-2.6,Math.atan2(5.4,2.6)),v(dt,gt(),-5.6,3.8,.4),v(dt,gt(),-4.8,4.7,1.2),v(dt,p(gt(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const Dt of[2,3.4,4.6])v(dt,it(3.4),Math.cos(Dt)*(et.r-.7),Math.sin(Dt)*(et.r-.7),Math.atan2(-Math.cos(Dt),-Math.sin(Dt)));v(dt,at(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),v(dt,N(),-.6,-5.8),v(dt,q(0,.9),Math.cos(K)*(et.r-1.2)-Math.sin(K)*1.8,Math.sin(K)*(et.r-1.2)+Math.cos(K)*1.8)}const Mt={x:-30,z:-20,r:2.6,mouthA:0},lt=l.ripple;lt.wrapS=lt.wrapT=Si;const C=new ye("#1f5f8c"),S=new ye("#6fb6d2"),J=new ye("#a6d8e6"),vt="#bdb3c4",pt=et=>new Yn({map:lt,color:vt,vertexColors:!0,side:yn,polygonOffset:!0,polygonOffsetFactor:-1-et,polygonOffsetUnits:-4-et*4}),Nt=new ye;function Bt(et,K,dt){const Dt=Math.hypot(et-Mt.x,K-Mt.z),x=Sd(1-Dt/Mt.r);return Nt.copy(S).lerp(C,x*.95),dt&&Nt.lerp(J,dt*Sd((Dt-Mt.r)/1.2)*.45),[Nt.r*1.27,Nt.g*1.27,Nt.b*1.27]}const xt=2.2;{const Dt=[],x=[],k=[],X=[],F=(U,A)=>{Dt.push(U,.045,A),x.push(...Bt(U,A,0)),k.push(U/xt,A/xt)};F(Mt.x,Mt.z);for(let U=1;U<=5;U++)for(let A=0;A<72;A++){const ft=A/72*2*nn,_=Mt.r*U/5;F(Mt.x+Math.cos(ft)*_,Mt.z+Math.sin(ft)*_)}for(let U=0;U<72;U++)X.push(0,1+(U+1)%72,1+U);for(let U=1;U<5;U++)for(let A=0;A<72;A++){const ft=1+(U-1)*72+A,_=1+(U-1)*72+(A+1)%72,P=ft+72,H=_+72;X.push(ft,_,P,_,H,P)}const rt=new dn;rt.setAttribute("position",new De(Dt,3)),rt.setAttribute("color",new De(x,3)),rt.setAttribute("uv",new De(k,2)),rt.setIndex(X),r.add(f(rt,pt(0),!1));const ct=va,kt=ct[0],ve=Math.hypot(kt[0]-Mt.x,kt[1]-Mt.z),Ee=(kt[0]-Mt.x)/ve,Ne=(kt[1]-Mt.z)/ve;Mt.mouthA=Math.atan2(Ne,Ee);const ge=[];for(let U=Mt.r-1.2;U<ve-.2;U+=.3)ge.push([Mt.x+Ee*U,Mt.z+Ne*U]);ge.push(...ct);const Ye=.7,Me=Mt.r*Mt.r,ie=Math.sqrt(Me-1.5*1.5),we=Mt.r+.8,xn=-(ie/1.5)*(we-ie),bn=U=>{const A=ge[U],ft=Math.hypot(A[0]-Mt.x,A[1]-Mt.z);if(ft<=ie)return Math.sqrt(Math.max(0,Me-ft*ft))-.02;if(ft>=we)return Ye;const _=(ft-ie)/(we-ie),P=_*_,H=P*_;return(2*H-3*P+1)*1.48+(H-2*P+_)*xn+(-2*H+3*P)*Ye},Vn=[],ni=[],E=[],I=[],V=[-1,-.5,0,.5,1];for(let U=0;U<ge.length;U++){const A=ge[Math.max(0,U-1)],ft=ge[Math.min(ge.length-1,U+1)],_=ge[U],P=Math.hypot(ft[0]-A[0],ft[1]-A[1])||1,H=-(ft[1]-A[1])/P,Y=(ft[0]-A[0])/P,z=bn(U);for(const ht of V){const At=_[0]+H*ht*z,bt=_[1]+Y*ht*z;Vn.push(At,.05,bt),ni.push(...Bt(At,bt,Math.abs(ht))),E.push(At/xt,bt/xt)}if(U>0)for(let ht=0;ht<4;ht++){const At=(U-1)*5+ht,bt=At+1,Gt=U*5+ht,$t=Gt+1;I.push(At,Gt,bt,bt,Gt,$t)}}const Z=new dn;Z.setAttribute("position",new De(Vn,3)),Z.setAttribute("color",new De(ni,3)),Z.setAttribute("uv",new De(E,2)),Z.setIndex(I),r.add(f(Z,pt(1),!1));const ut=[];for(let U=1;U<ge.length-1;U+=2){const A=ge[U];if(Math.hypot(A[0]-Mt.x,A[1]-Mt.z)<Mt.r+.9)continue;const ft=ge[U-1],_=ge[U+1],P=Math.hypot(_[0]-ft[0],_[1]-ft[1])||1,H=-(_[1]-ft[1])/P,Y=(_[0]-ft[0])/P,z=bn(U)+.16;for(const ht of[-1,1])ut.push({x:A[0]+H*ht*z,y:.06,z:A[1]+Y*ht*z,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}T(new Gi(1,0),ut,{})}for(const et of e.crossings){const K=i.bridge.clone();K.position.set(et.x,0,et.z),K.rotation.y=et.ang,K.scale.x=(et.len+.6)/3.4,r.add(K)}{const et=Ri.garden;if(et.kind==="house")throw new Error("the garden is an open area");const K=new Tt;K.position.set(et.x,0,et.z),r.add(K);const dt=Math.atan2(4.6,5.6);K.add(i.garden);{const F=Math.cos(dt)*et.r,rt=Math.sin(dt)*et.r,ct=new Tt;ct.position.set(F,0,rt),ct.rotation.y=Math.atan2(Math.cos(dt),Math.sin(dt)),ct.add(u(ot(0).children[2].clone(),0,2.6,0)),K.add(ct)}const Dt=[],x=[];for(let F=0;F<26;F++){const rt=F/26*2*nn;let ct=Math.abs(rt-Mt.mouthA);ct=Math.min(ct,2*nn-ct),!(ct<.62)&&Dt.push({x:Mt.x+Math.cos(rt)*2.75,y:.08,z:Mt.z+Math.sin(rt)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let F=0;F<7;F++)x.push({x:Mt.x+m(-1.6,1.6),y:.065,z:Mt.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});T(new Gi(1,0),Dt,{}),T(new se(.22,.22,.02,12),x,{}),v(K,Wt(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),v(K,at(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[F,rt]of[[-5.6,-2.2],[4.9,-.6]]){const ct=new Tt;ct.add(u(f(new se(.22,.28,.9,6),o.stone),0,.45,0)),ct.add(u(f(new Pt(.5,.36,.5),o.stone),0,1.08,0)),ct.add(u(f(new Pt(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),ct.add(u(f(new Pn(.48,.36,4),o.redD),0,1.44,0)),v(K,ct,F,rt,nn/4)}{const F=new Tt;F.add(u(f(new Pt(.9,.6,.6),o.stone),0,.3,0)),F.add(u(R(.26),0,.75,0));for(const rt of[-1,1])F.add(u(ne(.18),rt*.3,.6,.12));v(K,F,-4.4,-5.4,Math.atan2(4.4,5.4))}ue("tree_willow",1,et.x-6.2,et.z-2.8),ue("tree_cherry",.95,et.x+5.3,et.z-4.9),ue("tree_fruit",.85,et.x-3,et.z+6.2);const k=[];let X=0;for(;k.length<90&&X<4e3;){X++;const F=m(0,2*nn),rt=m(5.3,6.7),ct=Math.cos(F)*rt,kt=Math.sin(F)*rt;Math.min(Math.abs(F-dt),2*nn-Math.abs(F-dt))<.35||Math.hypot(ct-3,kt+3.4)<1.3||Math.hypot(ct-2.2,kt+4.3)<1||k.push({x:et.x+ct,y:.18,z:et.z+kt,sx:.9,sy:.9,sz:.9,c:g([a.red,a.bone,"#d98a3a",a.redL,"#e8c860"])})}T(new an(.11,8,6),k,{})}const wt=y(l.water,1,6),Ot=[];{const et=va,[K,dt]=et[et.length-1],[Dt,x]=et[et.length-3],k=Math.hypot(K-Dt,dt-x),X=(K-Dt)/k,F=(dt-x)/k,rt=new Ge(new cn(1.4,40),new Yn({map:wt,color:"#acb5c8",transparent:!0,opacity:.85,side:yn,depthWrite:!1}));rt.position.set(K+X*.9,-20+.05,dt+F*.9),rt.rotation.y=Math.atan2(X,F),r.add(rt);const ct=new ds({map:l.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let kt=0;kt<9;kt++){const ve=new Wi(ct);ve.position.set(K+X*m(1,2.4),m(-38,-30),dt+F*m(1,2.4)+m(-1,1)),ve.scale.setScalar(m(3,5.5)),r.add(ve),Ot.push(ve)}for(let kt=0;kt<4;kt++){const ve=new Wi(ct);ve.position.set(K+X*1,m(-.6,.3),dt+F*1+m(-.5,.5)),ve.scale.setScalar(m(1,1.6)),r.add(ve),Ot.push(ve)}}for(const et of qc)if(et.kind==="hut"){const K=Ut({...et,wallH:2.5},{id:et.id,pitch:.66,chimney:et.id==="barracks"?[1.4,-.6]:null});if(et.id==="barracks"&&(Ct(K,jt(),-1.6,-.9),Ct(K,jt(),.4,-.9),Ct(K,re(),2.2,-1.6,-nn/2),Ct(K,q(0,.7),2.3,1.2),L(K,"W",O(3),0,We,.3),L(K,"S",ze(.8,1.3),1.6,We+2.3,.04)),et.id==="store"){Ct(K,me(1.6,.6,.9,o.wood),-1.2,-1.3);for(let dt=0;dt<4;dt++)Ct(K,nt(.45),-1.8+dt*.4,-1.3).position.y=We+.95;Ct(K,N(),1.6,-1.2),Ct(K,N(.9),1.9,-.4),Ct(K,Q(),.6,-1.3),Ct(K,Q(),1,.6),Ct(K,nt(.6),-1.8,.8,.3)}if(et.id==="stable"){const dt=f(new cn(et.w-.6,et.d-.6),o.straw,!1);dt.rotation.x=-nn/2,Ct(K,dt,0,0).position.y=We+.01;for(const Dt of[-1,1.2])Ct(K,_e(2.2,1.1),Dt,-.6);Ct(K,Te(),-2.2,-.3,.4),Ct(K,Te(),.1,-.5,-.5).scale.setScalar(.9),Ct(K,gt(),2.4,-1,.2);{const Dt=new Tt;Dt.add(u(f(new Pt(1.2,.4,.45),o.wood),0,.2,0)),Dt.add(p(u(f(new cn(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-nn/2,0,0)),Ct(K,Dt,2.2,1)}}if(et.id==="granary"){for(let dt=0;dt<6;dt++)Ct(K,Q(),-1.4+dt%3*.5,-1.2+Math.floor(dt/3)*.55);Ct(K,N(),1.5,-1.1);{const dt=f(new Pt(1.2,.8,.8),o.wood);dt.position.y=.4;const Dt=new Tt;Dt.add(dt),Dt.add(u(f(new Pt(1.1,.05,.7),o.straw),0,.78,0)),Ct(K,Dt,1.2,.7)}}et.id==="barracks"&&(Ft(K,O(4),-1.4,3.3),Ft(K,Et(2.6),3.8,3,.6),Ft(K,it(3),3.6,.6),Ft(K,j(2.4),-3.8,2.4)),et.id==="store"&&(Ft(K,nt(.7),-1.6,2.8,.2),Ft(K,nt(.5),-.9,3.1,.7),Ft(K,Q(),.6,2.9),Ft(K,Q(),1.1,3.2),Ft(K,N(),2.3,2.9)),et.id==="stable"&&(Ft(K,gt(),-2.8,2.6,.3),Ft(K,gt(),-2,3,1.1),Ft(K,Kt(),2,3.4,-.3),Qt(K.g,[[-3.2,4.4],[3.2,4.4]],.9)),et.id==="granary"&&(Ft(K,Q(),-1.2,2.6),Ft(K,Q(),-.6,2.9),Ft(K,Q(),-1,3.3),Ft(K,N(.9),1.6,2.7))}else if(et.kind==="windmill"){const K=new Tt;K.position.set(et.x,0,et.z),K.add(u(f(new se(1.7,2.4,6.6,18),h("#ffffff",{map:y(l.castleWall,3,2.2)})),0,3.3,0)),K.add(u(f(new Pn(2.3,2.8,18),h("#ffffff",{map:y(l.roof,4,1.5)})),0,7.9,0)),K.add(u(f(new Pt(1,1.7,.2),o.woodD),0,.85,2.25));for(const[Dt,x]of[[.6,3.6],[-.9,4.8]])K.add(u(p(f(new Pt(.5,.6,.1),o.pane,!1),0,Dt,0),Math.sin(Dt)*2,x,Math.cos(Dt)*2));const dt=u(new Tt,0,6.2,2);dt.add(p(f(new se(.22,.22,.5,10),o.woodD),nn/2,0,0));for(let Dt=0;Dt<4;Dt++){const x=new Tt;x.rotation.z=Dt*nn/2,x.add(u(f(new Pt(.12,4.4,.08),o.woodD),0,2.3,.2)),x.add(u(f(new Pt(.9,3.4,.04),h("#e3d5b6",{side:yn})),.5,2.6,.24)),x.add(u(f(new Pt(.06,3.4,.06),o.wood),.95,2.6,.26)),dt.add(x)}K.add(dt),D.push({o:dt,axis:"z",v:.5}),K.add(u(Q(),-1.6,0,2.6)),K.add(u(Q(),-2.2,0,2.2)),r.add(K)}else if(et.kind==="watch"){const K=new Tt;K.position.set(et.x,0,et.z),K.add(i.watch),K.add(u(q(0,.7),.6,6.5,-.6)),r.add(K)}else if(et.kind==="shrine"){const K=new Tt;K.position.set(et.x,0,et.z),K.add(i.altar);for(const dt of[.9,2.5,4.1,5.6])K.add(u(oe(),Math.cos(dt)*1.4,0,Math.sin(dt)*1.4));K.add(u(q(0,.8),1.6,0,1.4)),r.add(K),Zt("dirt",et.x,et.z,3.4,3.4,0,.013)}else{const K=new Tt;K.position.set(et.x,0,et.z),K.add(u(p(Lt(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),K.add(u(p(Lt(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let dt=0;dt<8;dt++){const Dt=dt/8*2*nn;K.add(u(f(new Gi(.18,0),o.stone),Math.cos(Dt)*.55,.1,Math.sin(Dt)*.55))}for(let dt=0;dt<3;dt++)K.add(p(u(f(new se(.07,.07,.8,6),o.woodD),0,.12,0),nn/2,dt*1.05,0));w(K,0,.12,0,1.8);for(const dt of[.6,2.4,4.4])K.add(u(p(f(new se(.2,.2,1.4,8),o.wood),0,-dt,nn/2),Math.cos(dt)*1.6,.2,Math.sin(dt)*1.6));K.add(u(j(2.4),-3.2,0,-1.2)),K.add(u(N(),3.1,0,-.8)),r.add(K),Zt("dirt",et.x,et.z,4.2,4,0,.013)}function W(et,K,dt,Dt=.018,x=o.dark){const k=new G(...K),X=new G(...dt),F=k.distanceTo(X),rt=f(new se(Dt,Dt,F,5),x,!1);return rt.position.copy(k).add(X).multiplyScalar(.5),rt.quaternion.setFromUnitVectors(c,X.clone().sub(k).normalize()),et.add(rt),rt}function _t(){const et=new Tt,K=f(new an(1,22,12,0,nn*2,nn/2,nn/2),h("#ffffff",{map:l.planks}));K.scale.set(2.7,1,1.15),et.add(K);const dt=f(new se(1,1,.1,24),o.woodL);dt.scale.set(2.62,1,1.1),et.add(u(dt,0,.02,0));const Dt=f(new Cn(1,.06,6,36),o.woodD);Dt.rotation.x=nn/2,Dt.scale.set(2.68,1.13,1),Dt.position.y=.14,et.add(Dt),et.add(p(u(f(new se(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),et.add(u(p(R(.32),0,nn/2,0),2.75,.32,0)),et.add(u(p(M(.8),0,nn/2,0),2.75,.42,0)),et.add(u(f(new se(.07,.09,2.8,8),o.woodD),.3,1.4,0));const x=u(new Tt,.3,2.85,0);x.add(u(f(new Pt(.9,.36,.02),o.red),.45,0,0)),et.add(x),b.push(x);const k=u(new Tt,-1.5,.06,0);k.add(u(f(new Pt(1.1,.8,1.1),h("#ffffff",{map:l.planks})),0,.4,0)),k.add(u(p(f(new se(.75,.75,1.3,3),h("#ffffff",{map:l.roof})),0,0,nn/2),0,1.05,0)),k.add(u(f(new Pt(.3,.3,.04),o.pane,!1),.56,.5,0)),et.add(k);const X=f(new an(1,24,16),h("#ffffff",{map:l.balloon}));X.scale.set(3.6,1.5,1.7),X.position.y=4.4,et.add(X);const F=f(new Cn(1,.05,6,40),o.bone);F.rotation.x=nn/2,F.scale.set(3.62,1.72,1),F.position.y=4.1,et.add(F);for(const[ct,kt,ve,Ee]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])W(et,[ct,4.05,kt],[ve,.16,Ee]);const rt=u(new Tt,-2.95,.65,0);rt.add(p(f(new se(.1,.1,.3,8),o.iron),0,0,nn/2));for(let ct=0;ct<3;ct++){const kt=u(new Tt,0,0,0);kt.rotation.x=ct/3*nn*2,kt.add(u(p(f(new Pt(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),rt.add(kt)}et.add(rt),D.push({o:rt,axis:"x",v:7}),et.add(u(f(new Pt(.06,.9,.7),o.redD),-2.75,.1,0));for(const ct of[2.4,-2.4])et.add(u(f(new an(.1,8,6),d("#ffc070",2.2),!1),ct,.5,0));return et.add(u(nt(.45),1.3,.07,.4)),et.add(u(N(.6),1.2,.07,-.45)),et}const mt=_t(),Xt=_t();{const et=Is.find(Ee=>Ee.id==="dock");if(!et)throw new Error("no dock road");const K=et.line,[dt,Dt]=K[K.length-1],[x,k]=K[K.length-4],X=Math.hypot(dt-x,Dt-k),F=(dt-x)/X,rt=(Dt-k)/X,ct=new Tt;ct.position.set(dt,0,Dt),ct.rotation.y=Math.atan2(F,rt),r.add(ct),ct.add(i.dock),ct.add(u(nt(.55),2.8,1.17,6.8));for(const[Ee,Ne]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])ct.add(u(f(new an(.12,8,6),d("#ffc070",2.2),!1),Ee,1.32,Ne));ct.add(u(nt(.6),-.85,.22,1.3)),ct.add(u(nt(.45),-.75,.22,2)),ct.add(u(N(.85),.85,.22,1)),ct.add(u(Q(),.6,.22,3.6)),ct.add(u(it(3.4),-1.45,.22,.4)),mt.position.set(4.1,-.4,5.6),mt.rotation.y=-nn/2,ct.add(mt);const kt=f(new Pt(1.6,.08,.7),o.woodL);kt.position.set(2.3,.05,5.6),kt.rotation.z=-.18,ct.add(kt);const ve=u(new Tt,-4.6,0,-3.8);ve.add(u(St(),-.2,1.6,1.3)),ve.add(u(nt(.6),1.9,0,.8)),ve.add(u(N(),1.8,0,-.4)),ct.add(ve),ct.add(u(p(Ae("SKY DOCK"),0,nn/2,0),2.2,0,-2.4)),r.add(Xt),Xt.scale.setScalar(1.5),Xt.userData={a:1.2,r:96,y:15}}{const et=new Tt;et.position.set(-44,0,26),r.add(et);for(const[K,dt,Dt]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])et.add(u(p(Lt(1.8,2.6,Dt),0,Math.atan2(-K,-dt),0),K,0,dt));for(let K=0;K<8;K++){const dt=K/8*2*nn;et.add(u(f(new Gi(.18,0),o.stone),Math.cos(dt)*.55,.1,Math.sin(dt)*.55))}w(et,0,.1,0,1.8),et.add(u(j(2.6),3.6,0,1.8)),et.add(u(it(3),-3.6,0,1.6)),et.add(u(p(Et(3),0,.6,0),4.6,0,-2.6)),Zt("dirt",-44,26,5,4.6,.3,.013)}return Zt("field",54,-8,6.5,4.2,.35,.013,3),Zt("field",51,6,5.2,3.6,-.2,.013,3),Zt("field",10,-44.5,6,3.6,.1,.013,3),v(r,Yt(),55.5,-2.6,.4),v(r,gt(),48.6,-12.6,.4),v(r,gt(),49.4,-11.8,1.3),{mouthMat:te,coreMat:Jt,fireLight:qt,chimneyTop:Rt,emberBase:ee,waterTex:lt,fallTex:wt,mists:Ot,skyBoat:mt,airship:Xt}}const H1=[3,5,7,9,11];function G1(s){const t=[];for(let e=0;e<s;e++)t.push(.39894*Math.exp(-.5*e*e/(s*s))/s);return new ai({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}const V1=`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,W1=`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`;function X1(s){s.separableBlurMaterials.forEach((t,e)=>{t.dispose(),s.separableBlurMaterials[e]=G1(H1[e]??3)}),s.materialHighPassFilter.fragmentShader=V1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=W1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function Y1(s){const t=new Map,e=new Map,n=s.clone();return Zf(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zf(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Zf(s.children[n],t.children[n],e)}class Jf extends br{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new $1(e)}),this.register(function(e){return new Q1(e)}),this.register(function(e){return new j1(e)}),this.register(function(e){return new ly(e)}),this.register(function(e){return new cy(e)}),this.register(function(e){return new hy(e)}),this.register(function(e){return new ey(e)}),this.register(function(e){return new ny(e)}),this.register(function(e){return new iy(e)}),this.register(function(e){return new sy(e)}),this.register(function(e){return new J1(e)}),this.register(function(e){return new ry(e)}),this.register(function(e){return new ty(e)}),this.register(function(e){return new ay(e)}),this.register(function(e){return new oy(e)}),this.register(function(e){return new K1(e)}),this.register(function(e){return new bd(e,sn.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new bd(e,sn.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new uy(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=eo.extractUrlBase(t);o=eo.resolveURL(c,this.path)}else o=eo.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Cf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===$f){try{o[sn.KHR_BINARY_GLTF]=new dy(t)}catch(d){i&&i(d);return}r=JSON.parse(o[sn.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ty(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case sn.KHR_MATERIALS_UNLIT:o[d]=new Z1;break;case sn.KHR_DRACO_MESH_COMPRESSION:o[d]=new fy(r,this.dracoLoader);break;case sn.KHR_TEXTURE_TRANSFORM:o[d]=new py;break;case sn.KHR_MESH_QUANTIZATION:o[d]=new my;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function q1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function En(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const sn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K1{constructor(t){this.parser=t,this.name=sn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],gi);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cs(h),c.distance=d;break;case"spot":c=new Bm(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Z1{constructor(){this.name=sn.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(t,e,n){const i=[];t.color=new ye(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],gi),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Nn))}return Promise.all(i)}}class J1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class $1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new It(r,r)}return Promise.all(i)}}class Q1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class j1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DISPERSION}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class ty{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class ey{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SHEEN}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new ye(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],gi)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Nn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class ny{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class iy{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_VOLUME}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new ye().setRGB(r[0],r[1],r[2],gi),Promise.all(i)}}class sy{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IOR}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class ry{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SPECULAR}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new ye().setRGB(r[0],r[1],r[2],gi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Nn)),Promise.all(i)}}class oy{constructor(t){this.parser=t,this.name=sn.EXT_MATERIALS_BUMP}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class ay{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return En(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=En(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class ly{constructor(t){this.parser=t,this.name=sn.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class cy{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class hy{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class bd{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class uy{constructor(t){this.name=sn.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const v=new Ue,m=new G,g=new Sn,y=new G(1,1,1),T=new fo(p.geometry,p.material,f);for(let D=0;D<f;D++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,D),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,D),l.SCALE&&y.fromBufferAttribute(l.SCALE,D),T.setMatrixAt(D,v.compose(m,g,y));let b=null;for(const D in l)if(D==="_COLOR_0"){const R=l[D];T.instanceColor=new Ra(R.array,R.itemSize,R.normalized)}else if(D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"){if(b===null){const M=T.geometry;b=new dn,b.name=M.name;for(const w in M.attributes)b.setAttribute(w,M.attributes[w]);for(const w in M.morphAttributes)b.morphAttributes[w]=M.morphAttributes[w];M.index!==null&&b.setIndex(M.index),b.morphTargetsRelative=M.morphTargetsRelative;for(const w of M.groups)b.addGroup(w.start,w.count,w.materialIndex);M.boundingBox!==null&&(b.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(b.boundingSphere=M.boundingSphere.clone()),b.drawRange.start=M.drawRange.start,b.drawRange.count=M.drawRange.count,b.userData=Object.assign({},M.userData),T.geometry=b}const R=l[D];b.setAttribute(D,new Ra(R.array,R.itemSize,R.normalized))}Mn.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),u.push(T)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const $f="glTF",zr=12,wd={JSON:1313821514,BIN:5130562};class dy{constructor(t){this.name=sn.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==$f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zr,r=new DataView(t,zr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===wd.JSON){const c=new Uint8Array(t,zr+o,a);this.content=n.decode(c)}else if(l===wd.BIN){const c=zr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=sn.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Vc[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=Vc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],u=ur[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const v=u.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}d(u)},a,c,gi,f)})})}}class py{constructor(){this.name=sn.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class my{constructor(){this.name=sn.KHR_MESH_QUANTIZATION}}class Qf extends Mr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,d=(n-e)/h,f=d*d,u=f*d,p=t*c,v=p-c,m=-2*u+3*f,g=u-f,y=1-m,T=g-f+d;for(let b=0;b!==a;b++){const D=o[v+b+a],R=o[v+b+l]*h,M=o[p+b+a],w=o[p+b]*h;r[b]=y*D+T*R+m*M+g*w}return r}}const gy=new Sn;class _y extends Qf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return gy.fromArray(r).normalize().toArray(r),r}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Td={9728:Un,9729:Xn,9984:Hd,9985:ha,9986:Vr,9987:Vi},Ed={33071:oi,33648:ya,10497:Si},Bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xy={CUBICSPLINE:void 0,LINEAR:ao,STEP:oo},zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _r({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ts})),s.DefaultMaterial}function Ls(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function zi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function My(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(n){const f=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function yy(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sy(s){let t;const e=s.extensions&&s.extensions[sn.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+kl(e.attributes):t=s.indices+":"+kl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+kl(s.targets[n]);return t}function kl(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Wc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function by(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wy=new Ue;class Ty{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Um(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Hm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ls(r,a,i),zi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[sn.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(eo.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Bl[i.type],a=ur[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Gn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Bl[i.type],c=ur[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let v,m;if(u&&u!==d){const g=Math.floor(f/u),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=e.cache.get(y);T||(v=new c(a,g*u,i.count*u/h),T=new of(v,u/h),e.cache.add(y,T)),m=new uo(T,l,f%u/h,p)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),m=new Gn(v,l,p);if(i.sparse!==void 0){const g=Bl.SCALAR,y=ur[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,D=new y(o[1],T,i.sparse.count*g),R=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new Gn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=D.length;M<w;M++){const B=D[M];if(m.setX(B,R[M*l]),l>=2&&m.setY(B,R[M*l+1]),l>=3&&m.setZ(B,R[M*l+2]),l>=4&&m.setW(B,R[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Td[f.magFilter]||Xn,h.minFilter=Td[f.minFilter]||Vi,h.wrapS=Ed[f.wrapS]||Si,h.wrapT=Ed[f.wrapT]||Si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Un&&h.minFilter!==Xn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){e.parse(f,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let v=u;e.isImageBitmapLoader===!0&&(v=function(m){const g=new Bn(m);g.needsUpdate=!0,u(g)}),e.load(eo.resolveURL(f,r.path),v,void 0,p)})})}const d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),zi(f,o),f.userData.mimeType=o.mimeType||by(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[sn.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[sn.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[sn.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Qr,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cf,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return _r}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[sn.KHR_MATERIALS_UNLIT]){const d=i[sn.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,e))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],gi),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",d.baseColorTexture,Nn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=yn);const h=r.alphaMode||zl.OPAQUE;if(h===zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new It(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Yn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yn){const d=r.emissiveFactor;a.emissive=new ye().setRGB(d[0],d[1],d[2],gi)}return r.emissiveTexture!==void 0&&o!==Yn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Nn)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),zi(d,r),e.associations.set(d,{materials:t}),r.extensions&&Ls(i,d,r),d})}createUniqueName(t){const e=pn.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[sn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Ad(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=Sy(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[sn.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ad(new dn,c,e),c.mode===vi.TRIANGLE_STRIP?f=f.then(u=>_d(u,Kd)):c.mode===vi.TRIANGLE_FAN&&(f=f.then(u=>_d(u,Pc))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?vy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const v=h[u],m=o[u];let g;const y=c[u];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0){const T=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&b?new D0(v,y):new Ge(v,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===vi.LINES)g=new O0(v,y);else if(m.mode===vi.LINE_STRIP)g=new gh(v,y);else if(m.mode===vi.LINE_LOOP)g=new F0(v,y);else if(m.mode===vi.POINTS)g=new Wr(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&yy(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),zi(g,r),m.extensions&&Ls(i,g,m),e.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)e.associations.set(d[u],{meshes:t,primitives:u});if(d.length===1)return r.extensions&&Ls(i,d[0],r),d[0];const f=new Tt;r.extensions&&Ls(i,f,r),e.associations.set(f,{meshes:t});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new hi(Aa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ya(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),zi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new Ue;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ph(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],v=u.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],v=d[3],m=d[4],g=[];for(let T=0,b=f.length;T<b;T++){const D=f[T],R=u[T],M=p[T],w=v[T],B=m[T];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const O=n._createAnimationTracks(D,R,M,w,B);if(O)for(let q=0;q<O.length;q++)g.push(O[q])}const y=new Uc(r,void 0,g);return zi(y,i),y})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,wy)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new G().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new lf:c.length>1?h=new Tt:c.length===1?h=c[0]:h=new Mn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&Ls(n,h,r),r.matrix!==void 0){const d=new Ue;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Tt;n.name&&(r.name=i.createUniqueName(n.name)),zi(r,n),n.extensions&&Ls(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(Y1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof mi||f instanceof Bn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}ys[r.path]===ys.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(ys[r.path]){case ys.weights:h=Mo;break;case ys.rotation:h=yo;break;case ys.translation:case ys.scale:h=Na;break;default:n.itemSize===1?h=Mo:h=Na;break}const d=i.interpolation!==void 0?xy[i.interpolation]:ao,f=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const v=new h(l[u]+"."+ys[r.path],e.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Wc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof yo?_y:Qf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ey(s,t,e){const n=t.attributes,i=new qi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){const h=Wc(ur[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new G,l=new G;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=e.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const v=Wc(ur[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ki;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ad(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Vc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return on.workingColorSpace!==gi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${on.workingColorSpace}" not supported.`),zi(s,t),Ey(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?My(s,t.targets,e):s})}const Ay="/assets/altar-BLnKV2Du.glb",Ry="/assets/backend-0N1rHeCk.glb",Cy="/assets/bridge-ETZK_L1i.glb",Py="/assets/designer-DbLc0S5w.glb",Ly="/assets/dock-Dz4b5cxY.glb",Dy="/assets/flora-7jxy9LaY.glb",Iy="/assets/forge-DNia5kCh.glb",Ny="/assets/frontend-BagVIkFr.glb",Uy="/assets/garden-iFD0puy8.glb",Oy="/assets/gate-CLzj2aEg.glb",Fy="/assets/house_library-a_INcIO_.glb",By="/assets/house_studio-prPn7xt-.glb",zy="/assets/house_tavern-DhJciONJ.glb",ky="/assets/house_war-CErgsJUC.glb",Hy="/assets/house_workshop-DizOAfBl.glb",Gy="/assets/lead-B8dKTGTU.glb",Vy="/assets/reviewer-CjFLqSzL.glb",Wy="/assets/towers-DiePBDd1.glb",Xy="/assets/underside-CtDt-w8A.glb",Yy="/assets/walls-DL6hLM5P.glb",qy="/assets/watch-D_FLfKo1.glb",Ky="/assets/yard-BCXHtimJ.glb",Zy="/assets/backend-BO6EdEPd.jpg",Jy="/assets/designer-3Dfjr5eY.jpg",$y="/assets/frontend-ChC8gXK4.jpg",Qy="/assets/lead-BVut_pmU.jpg",jy="/assets/reviewer-r8WJ7XTx.jpg",tS=Object.assign({"../models/altar.glb":Ay,"../models/backend.glb":Ry,"../models/bridge.glb":Cy,"../models/designer.glb":Py,"../models/dock.glb":Ly,"../models/flora.glb":Dy,"../models/forge.glb":Iy,"../models/frontend.glb":Ny,"../models/garden.glb":Uy,"../models/gate.glb":Oy,"../models/house_library.glb":Fy,"../models/house_studio.glb":By,"../models/house_tavern.glb":zy,"../models/house_war.glb":ky,"../models/house_workshop.glb":Hy,"../models/lead.glb":Gy,"../models/reviewer.glb":Vy,"../models/towers.glb":Wy,"../models/underside.glb":Xy,"../models/walls.glb":Yy,"../models/watch.glb":qy,"../models/yard.glb":Ky}),Xc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},Hi=["lead","designer","frontend","backend","reviewer"],eS=Object.assign({"../models/backend.jpg":Zy,"../models/designer.jpg":Jy,"../models/frontend.jpg":$y,"../models/lead.jpg":Qy,"../models/reviewer.jpg":jy});function Ih(s){const t=tS[`../models/${s}.glb`];if(!t)throw new Error(`no model ${s} in the bundle`);return t}function nS(s){const t=eS[`../models/${s}`];if(!t)throw new Error(`no texture ${s} in the bundle`);return t}const Hl=new Ue,iS=new Ue;function jf(s){const t=new Set;return s.scene.traverse(e=>{const n=e.userData.woa_q;if(n&&(Hl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),e.matrix.compose(e.position,e.quaternion,e.scale).multiply(iS.copy(Hl).invert()),e.matrix.decompose(e.position,e.quaternion,e.scale)),!(e instanceof Ge)||t.has(e.geometry))return;const i=e.geometry;t.add(i);for(const[o,a]of Object.entries(i.attributes)){if(o==="skinIndex"||a.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in a))continue;const l=a.itemSize,c=new Float32Array(a.count*l);for(let h=0;h<a.count;h++)c[h*l]=a.getX(h),l>1&&(c[h*l+1]=a.getY(h)),l>2&&(c[h*l+2]=a.getZ(h)),l>3&&(c[h*l+3]=a.getW(h));i.setAttribute(o,new Gn(c,l))}const r=n||e.parent?.userData.woa_q;r&&i.applyMatrix4(Hl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function tp(s,t){const e=t,n=e.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((e.emissiveIntensity||1)*40)/100)):s.toon("#"+e.color.getHexString())}const sS=s=>s.isMeshStandardMaterial===!0;function ep(s,t){const e=new Map;return t.traverse(n=>{if(!(n instanceof Ge))return;const i=tp(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.applyMatrix4(n.matrixWorld);const a=e.get(i);a?a.push(o):e.set(i,[o])}),e}function rS(s,t){t.scene.updateMatrixWorld(!0);const e=new Tt;for(const[n,i]of ep(s,t.scene)){const r=i.length===1?i[0]:Ch(i,!1);if(!r)continue;const o=new Ge(r,n);o.castShadow=!sS(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,e.add(o)}return e}function np(s,t){let e=null;return s.scene.traverse(n=>{!e&&(n.userData.name===t||n.name===t)&&(e=n)}),e}async function oS(){const s=new Jf,t=Object.keys(Xc),e=await Promise.all(t.map(n=>s.loadAsync(Ih(n)).then(jf)));return Object.fromEntries(t.map((n,i)=>[n,e[i]]))}function aS(s,t){const e={};for(const n of Object.keys(Xc)){const i=t[n];e[n]=Xc[n]==="static"?rS(s,i):i}return e}const Ds={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function lS(s,t){const e=.075*s/1.8,n=(t-e)*.5;return Math.max(.5,n+e-.02)}const Gl={intensity:2.5,distance:4},cS=.59;function hS(s){const t=Ih(s),e=new Rf;return e.setURLModifier(n=>n===t?n:nS(n.slice(n.lastIndexOf("/")+1))),new Jf(e)}async function uS(){const s=await Promise.all(Hi.map(t=>hS(t).loadAsync(Ih(t)).then(jf)));return s.forEach((t,e)=>{t.scene.traverse(n=>{if(n instanceof Ge&&!n.material.map)throw new Error(`the ${Hi[e]} model's texture did not load`)})}),Object.fromEntries(Hi.map((t,e)=>[t,s[e]]))}function dS(s){const t=Ma.filter(n=>n.kind==="house"),e=Ri.forge;return(n,i)=>{for(const r of t){const[o,a]=no(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(a)<r.d/2+.1)return We;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&a>r.deck[2]&&a<r.deck[3])return .2}if(Math.hypot(n-e.x,i-e.z)<7.8)return .16;for(const r of s){const o=n-r.x,a=i-r.z,l=(r.len+.6)/2,c=o*Math.cos(r.ang)-a*Math.sin(r.ang),h=o*Math.sin(r.ang)+a*Math.cos(r.ang);if(Math.abs(c)<l&&Math.abs(h)<.6)return .12+.32*(1-(c/l)**2)}return .02}}const fS=.055,Fa=new G,Kr=new G,Rd=new G,pS=new G,xa=new G,Vl=new G,mS=new G,Cd=new Sn,Pd=new Sn,Ba=new Sn,Ld=new Sn,Wl=new Df;function Dd(s,t,e){Cd.setFromUnitVectors(t,e),s.getWorldQuaternion(Pd),s.parent.getWorldQuaternion(Ba).invert(),s.quaternion.copy(Ba.multiply(Cd).multiply(Pd)),s.updateMatrixWorld(!0)}function gS(s,t,e,n){const i=s.up.getWorldPosition(Kr),r=s.low.getWorldPosition(Rd),o=s.foot.getWorldPosition(Fa);s.foot.getWorldQuaternion(Ld);const a=i.distanceTo(r),l=r.distanceTo(o),c=xa.set(o.x,t+e,o.z).sub(i),h=Aa.clamp(c.length(),Math.abs(a-l)+1e-4,a+l-1e-4);c.normalize();const d=Vl.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=Aa.clamp((a*a+h*h-l*l)/(2*a*h),-1,1),u=mS.copy(i).addScaledVector(c,a*f).addScaledVector(d,a*Math.sqrt(1-f*f)),p=pS.copy(i).addScaledVector(c,h);Dd(s.up,Vl.subVectors(r,i).normalize(),xa.subVectors(u,i).normalize());const v=s.low.getWorldPosition(Rd),m=s.foot.getWorldPosition(Fa);Dd(s.low,Vl.subVectors(m,v).normalize(),xa.subVectors(p,v).normalize()),s.foot.parent.getWorldQuaternion(Ba).invert(),s.foot.quaternion.copy(Ba.multiply(Ld)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function _S(s,t,e,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of Hi){const f=new Tt;f.userData.agentId=d,t.add(f);const u=Qn[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:v,speed:m}=Ds[d],g=e[d],y=g.scene;y.updateMatrixWorld(!0);const T=new qi().setFromObject(y),b=p/Math.max(.01,T.max.y-T.min.y);y.scale.setScalar(b);const D=-T.min.y*b;y.position.y=D;const R=new Map;y.traverse(ot=>{if(!(ot instanceof Ge))return;const nt=ot.material;let Q=R.get(nt);Q||(nt.map&&(nt.map.colorSpace=Nn),Q=i("#ffffff",{map:nt.map??null}),R.set(nt,Q)),ot.material=Q,ot.castShadow=!0,ot.receiveShadow=!0,ot.frustumCulled=!1,ot.raycast=()=>{}});let M=null,w=null;if(d==="reviewer"){M=new cs("#6dffa0",Gl.intensity,Gl.distance,2),M.position.set(-.18,2.2,.35),f.add(M);const ot=y.getObjectByName("mixamorigRightHand");if(!ot)throw new Error("the reviewer model has no right hand");const nt=new Tt,Q=new Tt;nt.add(Q);const St=new Wi(new ds({map:n.flameTex,color:new ye(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));St.center.set(.5,.05),St.scale.set(.16,.3,1),St.position.y=.02;const Yt=new Wi(new ds({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:Ei}));Yt.scale.setScalar(.25),Yt.position.y=.08,St.raycast=()=>{},Yt.raycast=()=>{},Q.add(St,Yt),ot.add(nt),y.updateMatrixWorld(!0),nt.scale.setScalar(1/ot.getWorldScale(new G).x),w={group:nt,flicker:Q}}const B={};for(const ot of g.animations){const nt=ot.tracks.find(Q=>/Hips\.position$/.test(Q.name));nt&&(B[ot.name]=nt.values[1]*b)}const O=new ig(y),q={};for(const ot of g.animations){const nt=O.clipAction(ot);nt.enabled=!0,nt.setEffectiveTimeScale(1),nt.setEffectiveWeight(ot.name==="idle"?1:0),nt.time=Math.random()*ot.duration,nt.play(),q[ot.name]=nt}if(!q.idle||!q.walk||!q.sit||!q.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const it=Math.min(2.6,Math.max(.8,m/(cS*p)));q.walk.timeScale=it,O.update(0);const j=ot=>y.getObjectByName("mixamorig"+ot),N=["Left","Right"].map(ot=>({up:j(ot+"UpLeg"),low:j(ot+"Leg"),foot:j(ot+"Foot")}));y.updateMatrixWorld(!0);const st=N.every(ot=>ot.up&&ot.low&&ot.foot)?N.map(ot=>({up:ot.up,low:ot.low,foot:ot.foot,saved:[new Sn,new Sn,new Sn]})):null,at=st?Math.min(...st.map(ot=>ot.foot.getWorldPosition(Fa).y)):0,$=j("Hips");if(!$)throw new Error(`the ${d} model has no hips`);f.add(y),o[d]={id:d,root:f,H:p,seatY:lS(p,v),phase:n.phases[d],model:{obj:y,mixer:O,acts:q,cur:"idle",baseY:D,walkScale:it,seat:B,hips:$,legs:st,ankleH:at,bent:!1,ikW:0},lantern:M,lamp:w}}const a=new Map;function l(d,f,u,p){const v=a.get(d);if(v!==void 0)return v;const m=[];for(const[y,T]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){Wl.set(Fa.set(f+y,p+1.2,u+T),xa.set(0,-1,0)),Wl.far=1.3;for(const b of Wl.intersectObjects(t.children,!0)){let D=!1,R=!0;for(let B=b.object;B;B=B.parent)B.userData.agentId&&(D=!0),B.visible||(R=!1);const M=b.point.y-p,w=b.object;if(!D&&R&&w.isMesh&&!w.material.transparent&&M>.25&&M<.66){m.push(M);break}}}const g=m.length?Math.max(...m):null;return a.set(d,g),g}function c(d,f,u,p,v=1){const m=d.model;if(m.bent&&m.legs)for(const O of m.legs)O.up.quaternion.copy(O.saved[0]),O.low.quaternion.copy(O.saved[1]),O.foot.quaternion.copy(O.saved[2]);m.bent=!1;const g=Xf[f],y=g&&m.acts[g]?g:"idle";if(y!==m.cur){const O=m.acts[m.cur],q=m.acts[y];q.enabled=!0,q.setEffectiveWeight(1),q.time=0,r?O.setEffectiveWeight(0):O.crossFadeTo(q,.3,!1),m.cur=y}y==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*v)),m.mixer.update(r?0:u);const T=y!=="walk"&&y!=="idle";let b=null;const D=n.groundY(d.root.position.x,d.root.position.z);if(T&&p&&m.legs&&m.acts[y].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const O=m.hips.getWorldPosition(Kr);b=l(p+"|"+d.id,O.x,O.z,D)}let R=m.baseY,M=0,w=0;if(b!==null){R=m.obj.position.y+(D+b+fS*d.H)-Kr.y;const O=d.root.rotation.y,q=Math.cos(O),it=Math.sin(O),j=d.root.position.x-Kr.x,N=d.root.position.z-Kr.z;M=m.obj.position.x+j*q-N*it,w=m.obj.position.z+j*it+N*q}else T&&m.seat[y]!==void 0&&(R=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[y])));const B=r?1:Math.min(1,u*8);if(m.obj.position.x+=(M-m.obj.position.x)*B,m.obj.position.y+=(R-m.obj.position.y)*B,m.obj.position.z+=(w-m.obj.position.z)*B,m.ikW=b===null?0:Math.min(1,m.ikW+(r?1:u/.3)),b!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const O of m.legs)O.saved[0].copy(O.up.quaternion),O.saved[1].copy(O.low.quaternion),O.saved[2].copy(O.foot.quaternion),gS(O,D,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!Ph.has(f)&&f!=="read"?Gl.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const kr=new G;function xi(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;kr.copy(t),kr[n]=0,kr.normalize();const c=.5*o/(o+a),h=1-kr.angleTo(s)/l;return Math.sign(kr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Za extends Pt{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new G,c=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,v=new G,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),u[y+0]=xi(v,c,"z","y",r,n),u[y+1]=1-xi(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),u[y+0]=1-xi(v,c,"z","y",r,n),u[y+1]=1-xi(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),u[y+0]=1-xi(v,c,"x","z",r,t),u[y+1]=xi(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[y+0]=1-xi(v,c,"x","z",r,t),u[y+1]=1-xi(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[y+0]=1-xi(v,c,"x","y",r,t),u[y+1]=1-xi(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),u[y+0]=xi(v,c,"x","y",r,t),u[y+1]=1-xi(v,c,"y","x",r,e);break}}static fromJSON(t){return new Za(t.width,t.height,t.depth,t.segments,t.radius)}}const xS="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:ss}=Math,Yc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function vS(){const s=new FontFace("M PLUS Rounded 1c",`url("${xS}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const si={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function MS(s,t,e,n){s.setPixelRatio(Math.min(n,2)),s.setSize(t,e),s.shadowMap.enabled=!0,s.shadowMap.type=Zr,s.toneMapping=ka,s.toneMappingExposure=.95}function Id(s){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function yS(s,t){const e=new Va(new Uint8Array([70,150,255]),3,1,Ha);e.minFilter=e.magFilter=Un,e.generateMipmaps=!1,e.needsUpdate=!0;const n=new Yn({color:2824987,side:jn}),i=0,r=1,o=new G(0,1,0),a={uRimColor:{value:new ye("#ffd2a6")},uRimAmt:{value:.45}};function l(x){return x.onBeforeCompile=k=>{k.uniforms.uRimColor=a.uRimColor,k.uniforms.uRimAmt=a.uRimAmt,k.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+k.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},x.customProgramCacheKey=()=>"rim1",x}const c=new Map;function h(x,k){if(!k){let X=c.get(x);return X||(X=l(new ma({color:x,gradientMap:e})),c.set(x,X)),X}return l(new ma(Object.assign({color:x,gradientMap:e},k)))}const d=new Map;function f(x,k=2){const X=x+k;let F=d.get(X);return F||(F=new _r({color:0,emissive:x,emissiveIntensity:k,roughness:1}),d.set(X,F)),F}function u(x,k,X=!0){k&&k.userData.autoUV&&x.attributes.uv&&!x.userData.planar&&(x.type==="BoxGeometry"||x.type==="RoundedBoxGeometry")&&(q(x,.9),x.userData.planar=!0);const F=new Ge(x,k);return F.castShadow=X,F.receiveShadow=!0,F}const p=(x,k,X,F=.03)=>new Za(x,k,X,2,Math.min(F,x/2.1,k/2.1,X/2.1));function v(x,k,X=i,F=!0){const rt=u(x,k,F);if(X){const ct=new Ge(x,n);ct.scale.setScalar(1+X*r),ct.raycast=()=>{},rt.add(ct)}return rt}function m(x,k,X,F){return x.position.set(k,X,F),x}function g(x,k,X,F){return x.rotation.set(k,X,F),x}function y(x,k,X,F,rt=0,ct=0){return k.position.set(X,ct,F),k.rotation.y=rt,x.add(k),k}function T(x,k,X,F,rt,ct,kt=i*1.6,ve=7){const Ee=X.clone().normalize(),Ne=v(new Pn(rt,F,ve),ct,kt);return Ne.quaternion.setFromUnitVectors(o,Ee),Ne.position.copy(k).addScaledVector(Ee,F*.45),x.add(Ne),Ne}const b=Id(20261116),D=(x,k)=>x+(k-x)*b(),R=x=>x[Math.floor(b()*x.length)],M=Id(777),w=(x,k)=>x+(k-x)*M();function B(x,k,X,F){const rt=document.createElement("canvas");rt.width=x,rt.height=k;const ct=rt.getContext("2d");ct&&X(ct,x,k);const kt=new Dc(rt);return kt.colorSpace=Nn,kt.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),kt.wrapS=kt.wrapT=Si,F&&kt.repeat.set(F[0],F[1]),kt}function O(x,k,X){const F=x.clone();return F.wrapS=F.wrapT=Si,F.repeat.set(k,X),F.needsUpdate=!0,F}function q(x,k=1,X=k){const F=x.attributes.position,rt=x.attributes.normal,ct=x.attributes.uv;for(let kt=0;kt<F.count;kt++){const ve=Math.abs(rt.getX(kt)),Ee=Math.abs(rt.getY(kt)),Ne=Math.abs(rt.getZ(kt));let ge,Ye;Ee>=ve&&Ee>=Ne?(ge=F.getX(kt),Ye=F.getZ(kt)):ve>=Ne?(ge=F.getZ(kt),Ye=F.getY(kt)):(ge=F.getX(kt),Ye=F.getY(kt)),ct.setXY(kt,ge/k,Ye/X)}return ct.needsUpdate=!0,x}function it(x,k,X,F=0,rt=k){const ct=x.attributes.position,kt=x.attributes.normal,ve=x.attributes.uv;for(let Ee=0;Ee<ct.count;Ee++){const Ne=Math.abs(kt.getX(Ee)),ge=Math.abs(kt.getZ(Ee)),Ye=(Ne>ge?ct.getZ(Ee):ct.getX(Ee))/X;ve.setXY(Ee,Ye,(ct.getY(Ee)+k/2+F)/rt)}return ve.needsUpdate=!0,x}const j=new Ue,N=new Sn,st=new Yi,at=new G,$=new G,ot=new ye;function nt(x,k,X={}){if(!k.length)return null;const F=X.mat||l(new ma({color:16777215,gradientMap:e})),rt=new fo(x,F,k.length);return rt.castShadow=!!X.cast,rt.receiveShadow=X.receive!==!1,k.forEach((ct,kt)=>{ct.m?j.copy(ct.m):(st.set(ct.rx||0,ct.ry||0,ct.rz||0),N.setFromEuler(st),at.set(ct.x??0,ct.y??0,ct.z??0),$.set(ct.sx??1,ct.sy??1,ct.sz??1),j.compose(at,N,$)),rt.setMatrixAt(kt,j),(!X.mat||X.colors)&&rt.setColorAt(kt,ot.set(ct.c||"#ffffff"))}),rt.instanceMatrix.needsUpdate=!0,rt.instanceColor&&(rt.instanceColor.needsUpdate=!0),rt.computeBoundingSphere(),(X.parent||t).add(rt),rt}const Q=new Pt(1,1,1);function St(x,k,X,F=!0){return X.length?nt(Q,X.map(([rt,ct,kt,ve,Ee,Ne,ge=0,Ye=0,Me=0])=>({x:rt,y:ct,z:kt,sx:ve,sy:Ee,sz:Ne,rx:ge,ry:Ye,rz:Me})),{mat:k,parent:x,cast:F}):null}function Yt(x,k,X,F,rt,ct,kt,ve){for(let Ee=0;Ee<rt;Ee++){const Ne=w(0,k),ge=w(0,X),Ye=w(ct,kt);for(const[Me,ie]of[[0,0],[k,0],[-k,0],[0,X],[0,-X]]){const we=x.createRadialGradient(Ne+Me,ge+ie,0,Ne+Me,ge+ie,Ye),xn=F[Math.floor(M()*F.length)];we.addColorStop(0,xn+ve),we.addColorStop(1,xn+"00"),x.fillStyle=we,x.fillRect(Ne+Me-Ye,ge+ie-Ye,Ye*2,Ye*2)}}}function ce(x,k,X,F=.16){x.globalCompositeOperation="destination-in";const rt=x.createLinearGradient(0,0,k,0);rt.addColorStop(0,"rgba(0,0,0,0)"),rt.addColorStop(F,"rgba(0,0,0,1)"),rt.addColorStop(1-F,"rgba(0,0,0,1)"),rt.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=rt,x.fillRect(0,0,k,X),x.globalCompositeOperation="source-over"}function gt(x,k,X,F,rt,ct,kt,ve,Ee,Ne,ge){for(let Ye=X;Ye<rt;Ye+=ct){let Me=k-w(0,ve);for(;Me<F;){const ie=w(kt,ve);x.fillStyle=Ee[Math.floor(M()*Ee.length)],x.beginPath(),x.roundRect(Me+Ne,Ye+Ne,ie-Ne*2,ct-Ne*2,ge),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(Me+Ne*2,Ye+Ne*1.5,ie-Ne*4,3),Me+=ie}}}function Wt(x,k,X,F,rt,ct,kt,ve,Ee){const Ne=X/F;for(let ge=0;ge<F;ge++){const Ye=ge*Ne;let Me=w(0,ct);const ie=Me;for(;Me<ie+k;){const we=Math.min(w(rt,ct),ie+k-Me);if(we<rt*.5)break;const xn=kt[Math.floor(M()*kt.length)];for(const bn of[0,-k])x.fillStyle=xn,x.beginPath(),x.roundRect(Me+bn+ve,Ye+ve,we-ve*2,Ne-ve*2,Ee),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(Me+bn+ve*2,Ye+ve*1.5,we-ve*4,3);Me+=we}}}function ne(x,k,X,F){for(let rt=0;rt<8;rt++){let ct=-w(0,200);for(;ct<k;){const kt=w(160,340);x.fillStyle=F[Math.floor(M()*F.length)],x.fillRect(ct,rt*64,kt,64),x.strokeStyle="rgba(255, 230, 200, 0.06)",x.lineWidth=2;for(let ve=0;ve<3;ve++){const Ee=rt*64+w(10,54);x.beginPath(),x.moveTo(ct+6,Ee),x.bezierCurveTo(ct+kt*.3,Ee+w(-4,4),ct+kt*.6,Ee+w(-4,4),ct+kt-6,Ee),x.stroke()}x.fillStyle="rgba(20, 10, 6, 0.4)",x.fillRect(ct,rt*64,3,64),x.fillStyle="rgba(20, 10, 6, 0.35)",x.beginPath(),x.arc(ct+10,rt*64+14,2.5,0,ss*2),x.arc(ct+10,rt*64+50,2.5,0,ss*2),x.fill(),ct+=kt}x.fillStyle="rgba(20, 10, 6, 0.45)",x.fillRect(0,rt*64,k,3)}}const ue=(x,k,X)=>{const F=x.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,k),F.addColorStop(1,X),x.fillStyle=F,x.fillRect(0,0,64,64)},jt=B(512,512,(x,k,X)=>{x.fillStyle="#6f8b49",x.fillRect(0,0,k,X),Yt(x,k,X,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let F=0;F<900;F++){x.strokeStyle=M()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",x.lineWidth=2;const rt=w(0,k),ct=w(0,X);x.beginPath(),x.moveTo(rt,ct),x.lineTo(rt+w(-2,2),ct-w(5,10)),x.stroke()}}),re=B(256,256,(x,k,X)=>{x.fillStyle="#8b6a4b",x.fillRect(0,0,k,X),Yt(x,k,X,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let F=0;F<120;F++)x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",x.beginPath(),x.ellipse(w(0,k),w(0,X),w(1.5,4),w(1,3),w(0,3),0,ss*2),x.fill()}),ze=B(256,256,(x,k,X)=>{x.fillStyle="#b0906a",x.fillRect(0,0,k,X),Yt(x,k,X,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let F=0;F<160;F++)x.fillStyle="rgba(120, 90, 60, 0.25)",x.fillRect(w(0,k),w(0,X),2,2)}),me=B(512,512,(x,k,X)=>{x.fillStyle="#5b524c",x.fillRect(0,0,k,X),Wt(x,k,X,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),_e=B(512,512,(x,k,X)=>{x.fillStyle="#6a6058",x.fillRect(0,0,k,X),Wt(x,k,X,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),Te=B(512,512,(x,k,X)=>{x.fillStyle="#8f6c4b",x.fillRect(0,0,k,X),Yt(x,k,X,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let F=0;F<260;F++){const rt=w(6,k-6),ct=w(6,X-6);x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",x.beginPath(),x.ellipse(rt,ct,w(1.5,4),w(1,3),0,0,ss*2),x.fill()}}),Et=B(256,512,(x,k,X)=>{const F=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let rt=0;for(const[ct,kt]of F)x.fillStyle=ct,x.fillRect(0,rt,k,kt*X+2),rt+=kt*X;Yt(x,k,X,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let ct=0;ct<40;ct++){x.strokeStyle="rgba(40, 26, 18, 0.35)",x.lineWidth=2;const kt=w(0,k),ve=w(.15*X,X);x.beginPath(),x.moveTo(kt,ve),x.lineTo(kt+w(-10,10),ve+w(10,40)),x.stroke()}x.fillStyle="#5a7a44";for(let ct=0;ct<k;ct+=6)x.beginPath(),x.moveTo(ct,0),x.lineTo(ct+3,w(14,34)),x.lineTo(ct+6,0),x.fill()}),Kt=B(256,128,(x,k,X)=>{x.fillStyle="#7a2420",x.fillRect(0,0,k,X);for(let F=0;F<8;F++)x.fillStyle=F%2?"#8a2a24":"#6a1e1a",x.fillRect(F*32,0,32,X);x.fillStyle="#e3d5b6",x.fillRect(0,X*.46,k,X*.08),x.fillStyle="#2a2224",x.fillRect(0,X*.43,k,3),x.fillRect(0,X*.57,k,3)}),Qt=B(256,256,(x,k,X)=>{for(let F=0;F<2;F++)x.fillStyle=["#a59a8c","#958a7d"][F],x.beginPath(),x.ellipse(k/2+w(-20,20),X*(.25+F*.5),k*.32,X*.17,w(-.3,.3),0,ss*2),x.fill()}),oe=B(512,512,(x,k,X)=>{x.fillStyle="#5f5650",x.fillRect(0,0,k,X),gt(x,0,0,k,X,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),Lt=B(512,512,(x,k,X)=>ne(x,k,X,["#5a3a2a","#4e3224","#62402e","#553728"])),Ae=B(512,512,(x,k,X)=>ne(x,k,X,["#4a3226","#553a2b","#3f2a20","#4e3428"])),Zt=B(512,512,(x,k,X)=>ne(x,k,X,["#a17a55","#94704d","#ab845e","#9a7552"])),Ut=B(512,512,(x,k,X)=>ne(x,k,X,["#7a5236","#6e4a31","#84593b","#734d33"])),Ct=B(512,512,(x,k,X)=>{x.fillStyle="#3f3a3a",x.fillRect(0,0,k,X);for(let F=0;F<4;F++)for(let rt=0;rt<4;rt++)x.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(rt+F*3)%4],x.beginPath(),x.roundRect(rt*128+4,F*128+4,120,120,6),x.fill(),x.fillStyle="rgba(255,255,255,0.05)",x.fillRect(rt*128+10,F*128+10,108,6)}),Ft=B(512,512,(x,k,X)=>{x.fillStyle="#4f4843",x.fillRect(0,0,k,X),gt(x,0,0,k,X,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),L=B(512,512,(x,k,X)=>{x.fillStyle="#4a433f",x.fillRect(0,0,k,X),gt(x,0,0,k,X,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Yt(x,k,X,["#3e5a34","#4a3a30"],14,20,60,"30")}),te=B(512,512,(x,k,X)=>{for(let F=0;F<8;F++)x.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][F%4],x.fillRect(F*64,0,64,X),x.fillStyle="rgba(25, 14, 10, 0.45)",x.fillRect(F*64,0,3,X),x.fillStyle="rgba(255, 220, 190, 0.05)",x.fillRect(F*64+8,0,3,X);x.fillStyle="#7a2320",x.fillRect(0,34,k,70),x.strokeStyle="#d9c9a6",x.lineWidth=6,x.lineJoin="round",x.beginPath();for(let F=0;F<=k;F+=32)x.lineTo(F,F%64?52:86);x.stroke()}),Jt=B(256,256,(x,k,X)=>{x.fillStyle="#4e1612",x.fillRect(0,0,k,X);for(let F=0;F<8;F++){const rt=F%2?16:0;for(let ct=-32;ct<k+32;ct+=32)x.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(M()*4)],x.beginPath(),x.roundRect(ct+rt+1,F*32+2,30,30,[2,2,12,12]),x.fill(),x.fillStyle="rgba(255, 200, 170, 0.12)",x.fillRect(ct+rt+5,F*32+5,22,3);x.fillStyle="rgba(30, 6, 6, 0.35)",x.fillRect(0,F*32,k,3)}}),qt=B(256,256,(x,k,X)=>{for(let F=0;F<4;F++)x.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][F],x.fillRect(F*64,0,64,X),x.fillStyle="rgba(20, 8, 6, 0.45)",x.fillRect(F*64,0,3,X)}),Rt=B(256,512,(x,k,X)=>{x.fillStyle="#6e1a19",x.fillRect(0,0,k,X),x.fillStyle="#2a1e1f",x.fillRect(0,0,k,26),x.fillRect(0,0,14,X),x.fillRect(k-14,0,14,X),x.fillStyle="#b08a3e",x.fillRect(0,26,k,6),x.fillStyle="#e3d5b6",x.beginPath(),x.moveTo(52,300),x.lineTo(204,300),x.lineTo(188,332),x.lineTo(156,332),x.lineTo(164,368),x.lineTo(196,368),x.lineTo(196,396),x.lineTo(60,396),x.lineTo(60,368),x.lineTo(92,368),x.lineTo(100,332),x.lineTo(68,332),x.closePath(),x.fill(),x.beginPath(),x.moveTo(128,120),x.bezierCurveTo(168,164,176,192,164,216),x.bezierCurveTo(152,236,104,236,92,216),x.bezierCurveTo(80,192,100,176,112,152),x.bezierCurveTo(120,168,124,172,132,176),x.bezierCurveTo(132,160,128,140,128,120),x.fill(),x.fillStyle="#6e1a19",x.beginPath(),x.moveTo(0,X),x.lineTo(k/2,X-60),x.lineTo(k,X),x.fill()}),ee=B(64,256,(x,k,X)=>{x.fillStyle="#6fa9c9",x.fillRect(0,0,k,X);for(let F=0;F<40;F++)x.fillStyle=F%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",x.fillRect(F*23%64,F*41%256,3+F%3*2,18+F%5*10)}),Mt=B(128,128,(x,k,X)=>{x.fillStyle="#c4c4c4",x.fillRect(0,0,k,X);for(let F=0;F<70;F++){const rt=F*37%k,ct=(F*59+F%7*11)%X,kt=4+F%4*3;x.fillStyle=F%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",x.beginPath(),x.ellipse(rt,ct,kt,1.2+F%3*.5,F*.7%3.14,0,2*Math.PI),x.fill(),rt+kt>k&&(x.beginPath(),x.ellipse(rt-k,ct,kt,1.4,F*.7%3.14,0,2*Math.PI),x.fill())}}),lt=B(256,180,(x,k,X)=>{x.fillStyle="#efe4cc",x.fillRect(0,0,k,X),x.strokeStyle="#4f76b0",x.lineWidth=3,x.strokeRect(20,20,216,30),x.strokeRect(20,62,66,46),x.strokeRect(95,62,66,46),x.strokeRect(170,62,66,46),x.strokeRect(20,120,216,42),x.strokeStyle="#b8483e",x.beginPath(),x.moveTo(26,150),x.lineTo(80,132),x.lineTo(130,145),x.lineTo(226,126),x.stroke()}),C=B(256,200,(x,k,X)=>{const F=x.createLinearGradient(0,0,0,X);F.addColorStop(0,"#d98a62"),F.addColorStop(1,"#f2d2a8"),x.fillStyle=F,x.fillRect(0,0,k,X),x.fillStyle="#5c6f48",x.beginPath(),x.moveTo(0,150),x.quadraticCurveTo(80,100,150,140),x.quadraticCurveTo(210,120,256,135),x.lineTo(256,200),x.lineTo(0,200),x.fill(),x.fillStyle="#4a3a3c",x.fillRect(150,70,44,72),x.fillStyle="#7a2420",x.beginPath(),x.moveTo(144,72),x.lineTo(172,40),x.lineTo(200,72),x.fill(),x.fillStyle="#ffd27a",x.fillRect(165,92,14,18)}),S=B(256,200,x=>{x.fillStyle="#c8b18a",x.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((k,X)=>{x.fillStyle=k,x.fillRect(16+X%3*78,16+Math.floor(X/3)*60,66,48)}),x.fillStyle="#efe4cc",x.fillRect(16,140,224,44),x.fillStyle="#2b3a36",x.fillRect(28,152,120,8),x.fillRect(28,166,80,6)}),J=B(256,160,(x,k,X)=>{x.fillStyle="rgba(40, 200, 220, 0.18)",x.fillRect(0,0,k,X);const F=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let rt=0;rt<9;rt++)x.fillStyle=F[rt%4],x.fillRect(18+rt%3*12,18+rt*14,40+rt*53%140,6)}),vt=B(256,128,(x,k,X)=>{x.fillStyle="#3d6f99",x.fillRect(0,0,k,X),x.fillStyle="#8aa866";for(const[F,rt,ct,kt]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])x.beginPath(),x.ellipse(F,rt,ct,kt,.3,0,ss*2),x.fill()}),pt=B(128,128,(x,k,X)=>{x.fillStyle="#c9a75a",x.fillRect(0,0,k,X);for(let F=0;F<160;F++){x.strokeStyle=F%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",x.lineWidth=2;const rt=w(0,k),ct=w(0,X);x.beginPath(),x.moveTo(rt,ct),x.lineTo(rt+6,ct+2),x.stroke()}}),Nt=B(128,128,x=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((k,X)=>{x.fillStyle=k,x.beginPath(),x.arc(64,64,62-X*12,0,ss*2),x.fill()})}),Bt=B(256,256,(x,k,X)=>{x.fillStyle="#7a5a3c",x.fillRect(0,0,k,X);for(let F=0;F<8;F++)x.fillStyle=F%2?"#8a9a48":"#a7a24e",x.fillRect(0,F*32+6,k,20)}),xt=B(64,64,x=>ue(x,"rgba(255,255,255,1)","rgba(255,255,255,0)")),wt=B(64,64,x=>ue(x,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Ot=B(64,64,x=>{x.translate(32,32),x.fillStyle="#fff6c8",x.beginPath();for(let k=0;k<8;k++){const X=k%2?9:30,F=k*ss/4;x.lineTo(Math.cos(F)*X,Math.sin(F)*X)}x.closePath(),x.fill()}),W=B(8,512,(x,k,X)=>{const F=x.createLinearGradient(0,0,0,X);F.addColorStop(0,"#4c6994"),F.addColorStop(.38,"#8ea6c4"),F.addColorStop(.62,"#d8c2a6"),F.addColorStop(.8,"#e2a682"),F.addColorStop(1,"#b8674f"),x.fillStyle=F,x.fillRect(0,0,k,X)});W.wrapS=W.wrapT=oi;const _t={grass:jt,dirt:re,sand:ze,tCobble:me,tFlag:_e,tDirt:Te,strata:Et,balloon:Kt,roadStones:Qt,plaza:oe,planksWar:Lt,planksDark:Ae,planksLight:Zt,planks:Ut,slate:Ct,stoneWall:Ft,castleWall:L,plankWall:te,roof:Jt,gable:qt,banner:Rt,water:ee,ripple:Mt,paper:lt,painting:C,moodboard:S,code:J,globe:vt,straw:pt,target:Nt,field:Bt,soft:xt,blob:wt,spark:Ot,sky:W,grain:void 0};function mt(x,k=2.2){const X=x.image,F=X.width,rt=X.height;if(!(F>0)||!(rt>0))return x;const ct=X.getContext("2d");if(!ct)return x;const kt=ct.getImageData(0,0,F,rt).data,ve=new Float32Array(F*rt);for(let Me=0;Me<F*rt;Me++)ve[Me]=((kt[Me*4]??0)*.299+(kt[Me*4+1]??0)*.587+(kt[Me*4+2]??0)*.114)/255;const Ee=document.createElement("canvas");Ee.width=F,Ee.height=rt;const Ne=Ee.getContext("2d");if(!Ne)return x;const ge=Ne.createImageData(F,rt);for(let Me=0;Me<rt;Me++)for(let ie=0;ie<F;ie++){const we=ve[Me*F+(ie-1+F)%F]??0,xn=ve[Me*F+(ie+1)%F]??0,bn=ve[(Me-1+rt)%rt*F+ie]??0,Vn=ve[(Me+1)%rt*F+ie]??0,ni=(we-xn)*k,E=(Vn-bn)*k,I=Math.hypot(ni,E,1),V=(Me*F+ie)*4;ge.data[V]=(ni/I*.5+.5)*255,ge.data[V+1]=(E/I*.5+.5)*255,ge.data[V+2]=(1/I*.5+.5)*255,ge.data[V+3]=255}Ne.putImageData(ge,0,0);const Ye=new Dc(Ee);return Ye.wrapS=Ye.wrapT=Si,Ye.colorSpace=os,Ye.anisotropy=x.anisotropy,Ye.repeat.copy(x.repeat),Ye}const Xt={},et=(x,k)=>Xt[x]||=mt(_t[x],k);function K(x,k=1,X=1,F=2.2,rt={}){const ct=k===1&&X===1?_t[x]:O(_t[x],k,X),kt=k===1&&X===1?et(x,F):O(et(x,F),k,X);return h("#ffffff",Object.assign({map:ct,normalMap:kt,normalScale:new It(1,1)},rt))}_t.grain=B(256,256,(x,k,X)=>{x.fillStyle="#d6cbbf",x.fillRect(0,0,k,X);for(let F=0;F<70;F++){x.strokeStyle=M()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",x.lineWidth=w(1,3);const rt=w(0,k);x.beginPath(),x.moveTo(rt,0),x.bezierCurveTo(rt+w(-8,8),X*.3,rt+w(-8,8),X*.7,rt+w(-4,4),X),x.stroke()}for(let F=0;F<6;F++){const rt=w(10,k-10),ct=w(10,X-10);x.strokeStyle="rgba(80, 50, 30, 0.3)",x.lineWidth=2,x.beginPath(),x.ellipse(rt,ct,w(3,6),w(8,14),0,0,ss*2),x.stroke()}});const dt=x=>{const k=h(x,{map:_t.grain,normalMap:et("grain",1.5)});return k.userData.autoUV=!0,k},Dt={stone:K("stoneWall",1,1,2),castle:K("castleWall",1,1,2),plankWall:K("plankWall",1,1,1.4),timber:h(si.timber),wood:dt(si.wood),woodD:dt(si.woodD),woodL:dt(si.woodL),iron:h(si.iron),ironL:h(si.ironL),rust:h(si.rust),bone:h(si.bone),boneD:h(si.boneD),red:h(si.red),redD:h(si.redD),redL:h(si.redL),black:h(si.black),gold:h(si.gold),straw:h("#ffffff",{map:_t.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:t,renderer:s,COL:si,GRAD:e,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:l,toon:h,glow:f,mesh:u,rbox:p,part:v,at:m,rot:g,put:y,spike:T,rnd:b,rr:D,pick:R,trnd:M,tr:w,canvasTex:B,blobs:Yt,edgeFade:ce,tiled:O,planarUV:q,wallUV:it,instanced:nt,boxes:St,UNIT_BOX:Q,TEX:_t,nrm:et,relief:K,woodMat:dt,M:Dt,_c:ot}}const{PI:hn}=Math,Fn=.32,ra=s=>s.userData.up,SS=s=>s.userData.cutY;function bS(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:v,put:m,spike:g,rr:y,pick:T,tiled:b,planarUV:D,wallUV:R,boxes:M}=s,{SPINNERS:w,skull:B,hornedSkull:O,horns:q,torch:it,flame:j,table:N,skullCandle:st,throne:at,rug:$,trophy:ot,hangingBanner:nt,weaponRack:Q,shield:St,brazier:Yt,chest:ce,crate:gt,barrel:Wt,stool:ne,drum:ue,poleBanner:jt,skullPole:re,woodpile:ze,spikes:me,bookshelf:_e,desk:Te,candle:Et,fence:Kt,plant:Qt,cauldron:oe,bench:Lt,lampPost:Ae,scrollStack:Zt,telescope:Ut,starGlobe:Ct,crystal:Ft,wallMap:L,easel:te,bottle:Jt,anvil:qt,sack:Rt,cart:ee,roundTable:Mt,mug:lt,lanternString:C,signPost:S,bed:J,curtain:vt,partition:pt,wardrobe:Nt}=t,{patch:Bt}=e,xt={},wt={war:[l.planksWar,2.6],dark:[l.planksDark,2.6],light:[l.planksLight,2.6],planks:[l.planks,2.6],tiles:[l.slate,3.6]};function Ot(U,A,ft,_,P,H,Y={}){const z=Y.T||Fn,ht=Y.base||0,At=Y.stone!==!1,bt=At?1.15:ht,Gt=At?We:ht,$t=At?bt:ht+.9,ae=p(new Tt,0,$t,0);U.add(ae),U.userData.up=ae,ae.userData.movesWithWall=!0,U.userData.cutY=$t;const de={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function Vt(ke,rn){const[He,Ke,ln,vn,Kn,ps,ui=0,Ui=0,ms=0]=rn,Er=Ke-Kn/2,Oi=Ke+Kn/2,[bo,wo]=de[ke];ui||ms||Er>=$t-.01?wo.push([He,Ke-$t,ln,vn,Kn,ps,ui,Ui,ms]):Oi<=$t+.01?bo.push(rn):(bo.push([He,(Er+$t)/2,ln,vn,$t-Er,ps,ui,Ui,ms]),wo.push([He,($t+Oi)/2-$t,ln,vn,Oi-$t,ps,ui,Ui,ms]))}const Ie=_?_.x-_.w/2:0,je=_?_.x+_.w/2:0,Ce=_?[[-A/2,Ie],[je,A/2]]:[[-A/2,A/2]],Re=ft-bt;for(const[ke,rn]of Ce){const He=rn-ke;if(He<.05)continue;const Ke=(ke+rn)/2;if(At)U.add(p(u(D(new Pt(He,bt,z+.08),1.6),o.stone),Ke,bt/2,0)),ae.add(p(u(R(new Pt(He,Re,z),Re,1.3),o.plankWall),Ke,Re/2,0));else{const ln=$t-bt,vn=ft-$t;U.add(p(u(R(new Pt(He,ln,z),ln,1.3,0,Re),o.plankWall),Ke,bt+ln/2,0)),ae.add(p(u(R(new Pt(He,vn,z),vn,1.3,ln,Re),o.plankWall),Ke,vn/2,0))}}if(_){const ke=We+2.3,rn=ft-ke;ae.add(p(u(R(new Pt(_.w,rn,z),rn,1.3),o.plankWall),_.x,ke+rn/2-$t,0)),Vt("timber",[_.x-_.w/2-.1,(ke+.1)/2,0,.24,ke+.1,z+.16]),Vt("timber",[_.x+_.w/2+.1,(ke+.1)/2,0,.24,ke+.1,z+.16]),Vt("timber",[_.x,ke+.08,0,_.w+.8,.3,z+.2]);for(const He of[-1,1])for(let Ke=0;Ke<4;Ke++)Vt("timber",[_.x+He*(_.w/2+.1),.35+Ke*.55,z/2+.09,.07,.07,.04]);ae.add(p(O(.26),_.x,ke+.42-$t,z/2+.17));for(const He of[-1,1])ae.add(p(it(),_.x+He*(_.w/2+.55),We+1.7-$t,z/2+.02))}Vt("timber",[0,bt+(At?0:.09),0,A,.18,z+.12]),Vt("timber",[0,ft-.1,0,A,.22,z+.12]);const qe=Math.max(1,Math.round(A/2.3)),he=[];for(let ke=1;ke<qe;ke++){const rn=-A/2+ke*A/qe;if(!(_&&rn>Ie-.45&&rn<je+.45)){he.push(rn),Vt("timber",[rn,bt+Re/2,0,.2,Re,z+.1]);for(const He of[bt+.09,ft-.1])Vt("timber",[rn,He,z/2+.08,.09,.09,.06])}}if(P)for(const ke of[-A/2+.2,A/2-.2])Vt("timber",[ke,(ht+ft+.12)/2,0,.42,ft-ht+.12,z+.18]);const gn=[-A/2+(P?.41:0),...he,A/2-(P?.41:0)];_&&gn.push(Ie-.22,je+.22),gn.sort((ke,rn)=>ke-rn);let Qe=0;for(let ke=0;ke<gn.length-1;ke++){const rn=gn[ke],He=gn[ke+1],Ke=He-rn,ln=(rn+He)/2;if(!(Ke<.9)&&!(_&&ln>Ie-.3&&ln<je+.3)){if(Qe++,H&&Ke>1.5&&Qe%2===1){const vn=Gt+(At?1.62:1.35);Vt("panes",[ln,vn,0,.86,.78,Y.paneT||z+.04]);for(const Kn of[[ln,vn+.44,0,1.08,.1,z+.12],[ln,vn-.44,0,1.12,.12,z+.16],[ln-.48,vn,0,.1,.96,z+.12],[ln+.48,vn,0,.1,.96,z+.12],[ln,vn,0,.06,.78,z+.06],[ln,vn,0,.86,.05,z+.06]])Vt("timber",Kn);for(const Kn of[-1,1])Vt("shutters",[ln+Kn*.78,vn,z/2+.05,.42,.86,.05,0,Kn*.35,0]),Vt("timber",[ln+Kn*.78+Kn*.012,vn,z/2+.09,.44,.08,.03,0,Kn*.35,0])}else if(Ke>1){const vn=Re-.3,Kn=Math.atan2(vn,Ke-.2),ps=Math.hypot(vn,Ke-.2);for(const ui of[-1,1])Vt("timber",[ln,bt+Re/2,z/2+.04,ps,.13,.06,0,0,ui*Kn])}}}const[An,wn]=de.timber,[li,Wn]=de.panes,[qn,Je]=de.shutters;M(U,o.timber,An),M(ae,o.timber,wn),M(U,o.pane,li,!1),M(ae,o.pane,Wn,!1),M(U,o.red,qn),M(ae,o.red,Je),et(U,$t)}const W=new G,_t=new Ue,mt=new Ue,Xt=new Ue;function et(U,A){const ft=ra(U),_=new Map;U.traverse(z=>{if(!(z instanceof Ge)||Array.isArray(z.material))return;for(let bt=z;bt&&bt!==U;bt=bt.parent)if(bt===ft)return;const ht=z.material,At=_.get(ht);At?At.push(z):_.set(ht,[z])});const P=z=>{const ht=z;return(ht.color?ht.color.r*.3+ht.color.g*.59+ht.color.b*.11:0)+(ht.map?.5:0)},H=[..._.keys()].sort((z,ht)=>P(z)-P(ht));U.updateWorldMatrix(!0,!0),Xt.copy(U.matrixWorld).invert();const Y=new Set;H.forEach((z,ht)=>{if(ht)for(const At of _.get(z)??[]){const bt=At.geometry;if(Y.has(bt))continue;Y.add(bt),_t.multiplyMatrices(Xt,At.matrixWorld),mt.copy(_t).invert();const Gt=bt.attributes.position;let $t=!1;for(let ae=0;ae<Gt.count;ae++)W.fromBufferAttribute(Gt,ae).applyMatrix4(_t),!(Math.abs(W.y-A)>.002)&&(W.y-=.003*ht,W.applyMatrix4(mt),Gt.setXYZ(ae,W.x,W.y,W.z),$t=!0);$t&&(Gt.needsUpdate=!0,bt.computeBoundingBox(),bt.computeBoundingSphere())}})}function K(U){const A=[],ft=new Map;return U.traverse(_=>{if(!(_ instanceof Ge))return;const P=_.material;let H=ft.get(P);H||(H=P.clone(),H.transparent=!0,ft.set(P,H),A.push(H)),_.material=H}),A}function dt(U,A,ft){const _=U.r,P=ft.pitch||.6,H=.6,Y=_.d/2+H,z=new Tt;z.position.y=A-H*Math.tan(P),U.g.add(z);const ht=Y*Math.tan(P),At=H*Math.tan(P),bt=Y/Math.cos(P),Gt=d("#ffffff",{map:l.roof});for(const Ce of[-1,1]){const Re=u(D(new Pt(_.w+H*2,.18,bt),1.6),Gt);Re.rotation.x=Ce<0?-P:P,Re.position.set(0,ht/2,Ce*Y/2),z.add(Re)}const $t=new mo;$t.moveTo(-_.d/2,At),$t.lineTo(_.d/2,At),$t.lineTo(0,ht-.12),$t.closePath();const ae=new yh($t),de=d("#ffffff",{map:l.gable,side:yn});for(const Ce of[-1,1])z.add(p(v(u(ae,de),0,hn/2,0),Ce*(_.w/2+.02),0,0)),z.add(p(v(B(.34),0,Ce*hn/2,0),Ce*(_.w/2+.2),At+(ht-At)*.42,0)),z.add(p(v(q(1.1),0,Ce*hn/2,0),Ce*(_.w/2+H+.05),ht+.12,0));z.add(p(u(new Pt(_.w+H*2+.2,.2,.26),o.iron),0,ht+.04,0));const Vt=Math.floor((_.w+H)/1.5);for(let Ce=0;Ce<Vt;Ce++)g(z,new G(-_.w/2+.5+Ce*(_.w-1)/Math.max(1,Vt-1),ht+.12,0),h,.34,.06,o.boneD,0,5);let Ie=null;if(ft.chimney){const[Ce,Re]=ft.chimney,qe=ht+1.4;z.add(p(u(D(new Pt(.85,qe,.85),1.2),o.stone),Ce,qe/2,Re)),z.add(p(u(new Pt(1.05,.16,1.05),o.iron),Ce,qe+.05,Re)),Ie=[Ce,qe+.3,Re]}const je=K(z);return{R:z,mats:je,base:z.position.y,hR:ht,smokeAt:Ie}}function Dt(U){return{S:{c:[0,U.d/2],n:[0,1],L:U.w+Fn},N:{c:[0,-U.d/2],n:[0,-1],L:U.w+Fn},E:{c:[U.w/2,0],n:[1,0],L:U.d-Fn},W:{c:[-U.w/2,0],n:[-1,0],L:U.d-Fn}}}function x(U,A){const ft=new Tt;U.add(ft);const _=new Tt;return _.position.set(A.c[0],0,A.c[1]),_.rotation.y=Math.atan2(A.n[0],A.n[1]),ft.add(_),{sg:ft,sf:_}}function k(U,A,ft){if(!A)return;A.updateWorldMatrix(!0,!0),U.g.updateMatrixWorld(!0);const _=[];A.traverse(P=>{P instanceof Ge&&_.push(P)});for(const P of _){const H=P.geometry;H.attributes.uv||H.setAttribute("uv",new De(new Float32Array(H.attributes.position.count*2),2));const Y=tp(s,P.material),z=new Ge(H,Y);z.castShadow=!Y.isMeshStandardMaterial,z.receiveShadow=!0,P.matrixWorld.decompose(z.position,z.quaternion,z.scale),U.g.add(z),z.updateMatrixWorld(!0),ft.attach(z)}}function X(U,A,ft,_,P,H={}){const Y=H.T||Fn,z=H.stone!==!1,ht=H.base||0,At=z?1.15:ht+.9,bt=p(new Tt,0,At,0);if(A.add(bt),A.userData.up=bt,bt.userData.movesWithWall=!0,A.userData.cutY=At,k(U,ft,A),k(U,_,bt),et(A,At),P)for(const Gt of[-1,1])bt.add(p(it(),P.x+Gt*(P.w/2+.55),We+1.7-At,Y/2+.08))}function F(U,A,ft,_){const P=U.r,H=ft.pitch||.6,Y=.6,z=P.d/2+Y,ht=new Tt;ht.position.y=A-Y*Math.tan(H),U.g.add(ht);const At=z*Math.tan(H);k(U,_,ht);const bt=K(ht);let Gt=null;if(ft.chimney){const[$t,ae]=ft.chimney;Gt=[$t,At+1.4+.3,ae]}return{R:ht,mats:bt,base:ht.position.y,hR:At,smokeAt:Gt}}const rt={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function ct(U,A={}){const ft=new Tt;ft.position.set(U.x,0,U.z),ft.rotation.y=U.ry||0,r.add(ft);const _=U.id||A.id,P={id:_,r:U,g:ft,sides:{},lift:0,view:"ground",deco:!!A.deco,name:U.name,top:0},H=rt[_],Y=de=>H?np(H,_+"_"+de):null;H?k(P,Y("base"),ft):ft.add(p(u(D(new Pt(U.w+.6,We+.3,U.d+.6),1.4),o.stone),0,(We+.3)/2-.3,0));const[z,ht]=wt[U.floor||"planks"];ft.add(v(p(u(new cn(U.w,U.d),d("#ffffff",{map:b(z,U.w/ht,U.d/ht)}),!1),0,We+.004,0),-hn/2,0,0));const At=We+U.wallH,bt=Dt(U),Gt=U.doorLocal||[0,U.d/2],$t=U.door?U.door.side:"S";for(const[de,Vt]of Object.entries(bt)){const{sg:Ie,sf:je}=x(ft,Vt),Ce=Math.cos(je.rotation.y),Re=-Math.sin(je.rotation.y),qe=$t===de?{x:(Gt[0]-Vt.c[0])*Ce+(Gt[1]-Vt.c[1])*Re,w:U.door&&U.door.width||1.4}:null;H?X(P,je,Y(de+"_lo"),Y(de+"_hi"),qe):Ot(je,Vt.L,At,qe,de==="N"||de==="S",A.windows!==!1),P.sides[de]={g:Ie,sf:je,up:ra(je),n:Vt.n,s:1}}if(!H){const de=U.doorN||[0,1],Vt=Math.abs(de[0])>0?[.7,(U.door&&U.door.width||1.4)+.5]:[(U.door&&U.door.width||1.4)+.5,.7];ft.add(p(u(D(new Pt(Vt[0],.14,Vt[1]),1.2),o.stone),Gt[0]+de[0]*.62,.07,Gt[1]+de[1]*.62))}let ae=At;if(U.storeys===2){const de=U.upperH||2.5,Vt=p(new Tt,0,At,0);Vt.userData.movesWithWall=!0,ft.add(Vt);const Ie={U:Vt,sides:{},lift:0,mats:[],top:At};if(P.upper=Ie,H)k(P,Y("Ufloor"),Vt);else{const Ce=d("#ffffff",{map:z}),[Re,qe,he,gn]=A.stairHole||[0,0,0,0],Qe=U.w/2,An=U.d/2,wn=A.stairHole?[[-Qe,Re,-An,An],[qe,Qe,-An,An],[Re,qe,-An,he],[Re,qe,gn,An]]:[[-Qe,Qe,-An,An]];for(const[li,Wn,qn,Je]of wn)Wn-li<.05||Je-qn<.05||Vt.add(p(u(D(new Pt(Wn-li,.22,Je-qn),ht),Ce),(li+Wn)/2,.09,(qn+Je)/2))}const je=[];for(const[Ce,Re]of Object.entries(bt)){const{sg:qe,sf:he}=x(Vt,Re);H?X(P,he,Y("U"+Ce+"_lo"),Y("U"+Ce+"_hi"),null,{base:.2,stone:!1,T:Fn-.05}):(Ot(he,Re.L,.2+de,null,Ce==="N"||Ce==="S",!0,{base:.2,stone:!1,T:Fn-.05,paneT:Fn-.03}),je.push([0,.05,.2,Re.L+.2,.2,.18]),M(he,o.timber,je.slice(-1))),Ie.sides[Ce]={g:qe,sf:he,up:ra(he),n:Re.n,s:1}}ae=At+.2+de}return P.top=ae,P.roof=H?F(P,ae,A,Y("roof")):dt(P,ae,A),xt[_]=P,P}function kt(U,A,ft,_,P){const H=U.upper,Y=12,z=H.top+.2-We,ht=(_-ft)/Y,At=[];for(let de=0;de<Y;de++){const Vt=z*(de+1)/Y;At.push([A,We+Vt/2,ft+ht*(de+.5),P,Vt,Math.abs(ht)+.01])}M(U.g,o.wood,At);const bt=A>0?-1:1,Gt=A+bt*(P/2+.04);for(let de=0;de<=4;de++){const Vt=ft+(_-ft)*de/4,Ie=We+z*de/4;U.g.add(p(u(new Pt(.07,.95,.07),o.woodD),Gt,Ie+.5,Vt))}const $t=Math.hypot(_-ft,z),ae=p(u(new Pt(.08,.08,$t),o.woodL),Gt,We+z/2+.95,(ft+_)/2);ae.rotation.x=-Math.atan2(z,_-ft),U.g.add(ae)}function ve(U,A,ft,_,P){const H=SS(U);_>H?(A.position.set(ft,_-H,P),ra(U).add(A)):(A.position.set(ft,_,P),U.add(A))}const Ee=(U,A)=>U==="S"?A:U==="N"||U==="E"?-A:A;function Ne(U,A,ft,_,P,H=.1){const Y=U.upper.sides[A];return ft.rotation.y=hn,ve(Y.sf,ft,Ee(A,_),P,-((Fn-.05)/2+H/2+.01)),ft}const ge=(U,A,ft,_,P=0)=>m(U.upper.U,A,ft,_,P,.2);function Ye(U,A,ft=0,_=.9){for(let P=0;P<A.length-1;P++){const[H,Y]=A[P],[z,ht]=A[P+1],At=Math.hypot(z-H,ht-Y),bt=p(u(new Pt(At,.07,.07),o.woodL),(H+z)/2,ft+_,(Y+ht)/2);bt.rotation.y=-Math.atan2(ht-Y,z-H),U.add(bt);const Gt=Math.max(1,Math.round(At/.5));for(let $t=0;$t<=Gt;$t++)U.add(p(u(new Pt(.05,_,.05),o.woodD),H+(z-H)*$t/Gt,ft+_/2,Y+(ht-Y)*$t/Gt))}}function Me(U,A,ft,_,P,H=.1,Y=!0){const z=U.sides[A];return Y&&(ft.rotation.y=hn),ve(z.sf,ft,Ee(A,_),P,Y?-(Fn/2+H/2+.01):Fn/2+H/2+.01),ft}const ie=(U,A,ft,_,P=0)=>m(U.g,A,ft,_,P,We),we=(U,A,ft,_,P=0)=>m(U.g,A,ft,_,P,0),xn=(U,A,ft)=>ip(U,A,ft),bn=document.createElement("canvas");bn.width=512,bn.height=280;const Vn=new Dc(bn);Vn.colorSpace=Nn;let ni=i;function E(U=ni){ni=U;const A=bn.getContext("2d");if(!A)return;const ft=512,_=U.filter(H=>H==="done").length;A.fillStyle="#2e2422",A.fillRect(0,0,ft,280),A.fillStyle="#e3d5b6",A.font=`800 40px ${Yc}`,A.textAlign="left",A.fillText("TASKS",28,58),A.fillStyle="#ffd27a",A.textAlign="right",A.fillText(`${_} / 5`,ft-28,58);const P={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((H,Y)=>{const z=28+Y*94,ht=90;A.fillStyle=P[U[Y]??"todo"],A.beginPath(),A.roundRect(z,ht,78,96,14),A.fill(),A.fillStyle="rgba(255, 255, 255, 0.22)",A.beginPath(),A.roundRect(z+6,ht+6,66,18,8),A.fill(),A.fillStyle="#1e1a1c",A.font=`800 46px ${Yc}`,A.textAlign="center",A.fillText(H,z+39,ht+70)}),A.fillStyle="#1b1616",A.beginPath(),A.roundRect(28,220,ft-56,28,14),A.fill(),_&&(A.fillStyle="#d9762e",A.beginPath(),A.roundRect(28,220,(ft-56)*_/5,28,14),A.fill()),Vn.needsUpdate=!0}E(),document.fonts&&document.fonts.ready.then(()=>E());function I(){const U=new Tt;return U.add(u(new Pt(2.7,1.65,.1),o.woodD)),U.add(p(new Ge(new cn(2.45,1.35),new Yn({map:Vn,toneMapped:!1})),0,0,.06)),U.add(p(u(new Pt(2.9,.14,.2),o.wood),0,.9,.02)),U.add(p(B(.18),0,1.08,.06)),U}{const U=Ri.war,A=ct(U,{pitch:.62}),ft=We+U.wallH;ie(A,N(3.4,2,.86),-2.5,-.6);{const _=new cn(3,1.7,26,16),P=_.attributes.position,H=[];for(let z=0;z<P.count;z++){const ht=P.getX(z),At=P.getY(z),bt=Math.max(0,Math.sin(ht*2.1+1)*Math.cos(At*2.7)*.1+Math.sin(ht*5+At*3)*.03);P.setZ(z,bt),H.push(...bt>.08?[.86,.82,.76]:bt>.03?[.5,.38,.28]:bt>.005?[.42,.55,.32]:[.32,.5,.62])}_.setAttribute("color",new De(H,3)),_.computeVertexNormals();const Y=v(p(u(_,new ma({vertexColors:!0,gradientMap:c}),!1),-2.5,We+.91,-.6),-hn/2,0,0);A.g.add(Y);for(const[z,ht,At]of[[-.9,-.3,a.red],[.4,.3,"#3f5f8f"],[1,-.4,a.gold],[-.2,-.5,a.red]])A.g.add(p(u(new se(.012,.012,.24,4),o.dark,!1),-2.5+z,We+1.05,-.6+ht)),A.g.add(p(u(new Pt(.12,.07,.01),d(At),!1),-2.5+z+.06,We+1.13,-.6+ht));for(const[z,ht]of[[-1.55,-.85],[1.55,.85]])ie(A,st(),-2.5+z,-.6+ht).position.y=We+.9}ie(A,at(),-6.1,-2.6,Od(-6.1,-2.6,-2.5,-.6)),ie(A,$(1.6,[a.redD,a.bone,a.red,a.black,a.redL,a.redD]),-4.6,.6),Me(A,"N",I(),3.8,We+1.95,.12),Me(A,"N",ot(),-2.5,We+2.2,.1),Me(A,"N",ot(),.9,We+2.1,.1),Me(A,"N",nt(1,1.9),-5.4,ft-.3,.04),Me(A,"N",nt(1,1.9),6.4,ft-.3,.04),Me(A,"W",Q(4),.6,We,.3),Me(A,"E",St(a.red),-2,We+1.9,.1),Me(A,"E",St(a.black),1.2,We+1.9,.1),ie(A,Yt(7),6.3,-3.3),ie(A,Yt(0,.85),-6.7,3.5),ie(A,ce(),6.3,1.6,-hn/2),ie(A,gt(.6),5.3,3.6,.3),ie(A,gt(.45),5.9,3.7,.9),ie(A,Wt(.9),-6.6,-.6),ie(A,ne(),-.9,-2.2),Bt("plaza",...xn(U,0,7.4),5.8,3.6,-U.ry,.014),we(A,ue(),-4.4,6,.3),we(A,ue(),5.6,5.9,-.2),we(A,jt(3.4),-2.6,5),we(A,jt(3.4),2.6,5),we(A,re(2.6),-7,6.2),we(A,re(2.2),7.8,5.4),we(A,Yt(0),-6.2,5),we(A,ze(2.4),-3,-6),we(A,Wt(),4.4,-5.6),we(A,Wt(.9),5,-6.1),we(A,Wt(1,!0),3.6,-6.2,.4),we(A,v(Q(4),0,hn,0),.8,-5.6),we(A,me(3),-8.6,-1,hn/2)}{const U=Ri.library,A=ct(U,{pitch:.66,stairHole:[4,4.84,-2,0]}),ft=We+U.wallH;for(const H of[-3.6,-1.4])ie(A,_e(2),H,-U.d/2+Fn/2+.27);for(const H of[-2.1,.3])ie(A,_e(2),-U.w/2+Fn/2+.27,H,hn/2);const _=Te("books");ie(A,_.g,1.8,-1.2),ie(A,Et(.18,4),2.45,-.95).position.y=We+.79;{const H=new Tt;H.add(p(u(new Pt(1,.45,.9),d("#5a1f2a")),0,.3,0)),H.add(p(u(new Pt(.86,.12,.74),d("#7a2a36")),0,.58,.04)),H.add(p(u(new Pt(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const Y of[-1,1])H.add(p(u(new Pt(.2,.6,.9),d("#4a1822")),Y*.5,.52,0));ie(A,H,-3.3,1.9,.9)}ie(A,$(1.5,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const H=new Tt;H.add(p(u(new se(.08,.2,1,8),o.woodD),0,.5,0)),H.add(v(p(u(new Pt(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),H.add(v(p(u(new Pt(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),ie(A,H,2.3,2.5,-.5)}{const H=new Tt;H.add(p(u(new se(.05,.2,.9,10),o.woodD),0,.45,0));const Y=p(new Tt,0,1.25,0);Y.rotation.z=.4;const z=u(new an(.34,24,16),d("#ffffff",{map:l.globe}));Y.add(z),Y.add(v(u(new Cn(.4,.02,6,28),o.gold),0,hn/2,0)),H.add(Y),ie(A,H,.5,3),w.push({o:z,axis:"y",v:.25})}{const H=new Tt;H.add(p(u(new se(.16,.26,.9,8),o.woodD),0,.45,0)),H.add(p(u(new an(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let Y=0;Y<3;Y++){const z=Y/3*hn*2;g(H,new G(Math.cos(z)*.14,.92,Math.sin(z)*.14),new G(Math.cos(z),2,Math.sin(z)),.3,.03,o.bone,0,5)}ie(A,H,3,-3.2)}const P=[];for(const[H,Y,z]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[ht,At]=xn(U,H,Y);let bt=We;for(let Gt=0;Gt<z;Gt++){const $t=y(.06,.1);P.push({x:ht+y(-.03,.03),y:bt+$t/2,z:At+y(-.03,.03),sx:y(.32,.42),sy:$t,sz:y(.24,.3),ry:U.ry+y(-.3,.3),c:T(t.BOOK_COLS)}),bt+=$t}}s.instanced(s.UNIT_BOX,P,{cast:!0}),ie(A,st(),-4.3,3.4).position.y=We+.42,ie(A,Et(.5),-4.5,2.9),ie(A,Et(.34),-4.2,2.7),Me(A,"E",nt(.9,1.6),-3,ft-.3,.04),Me(A,"S",ot(),1.6,We+2.1,.1);{const H=new Tt;H.add(p(u(new se(2.2,2.4,7.6,22),d("#ffffff",{map:b(l.castleWall,3.5,2.4)})),0,3.8,0)),H.add(p(u(new se(2.6,2.4,.4,22),o.stone),0,7.7,0)),H.add(p(u(new Pn(2.9,3.6,22),d("#ffffff",{map:b(l.roof,5,2)})),0,9.7,0)),H.add(p(B(.45),0,11.8,0));for(const[Y,z]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])H.add(p(v(u(new Pt(.4,.9,.12),o.pane,!1),0,-Y+hn/2,0),Math.cos(Y)*2.32,z,Math.sin(Y)*2.32));H.add(p(v(nt(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),we(A,H,5.6,3.4)}Kt(A.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let H=0;H<10;H++)we(A,Qt(y(.6,.9)),y(-8.6,-6.2),y(5.3,7.1));we(A,oe(),1.2,6.2),we(A,Lt(1.6,!0),3,6.7,hn),we(A,re(2.2),-.4,5.6),we(A,Ae(0),-4.6,4.6),we(A,gt(.55),6.2,-1.4,.3),we(A,gt(.4),6.3,-.8,.8),Bt("dirt",...xn(U,.5,6.4),4.6,2.2,-U.ry,.013),kt(A,4.42,-3.4,-.2,.84),Ye(A.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const H of[-3.6,-1.4,1])ge(A,_e(2),H,-U.d/2+Fn/2+.27);for(const H of[-2.1,.3,2.5])ge(A,_e(2),-U.w/2+Fn/2+.27,H,hn/2);ge(A,N(2.2,1,.8,o.wood),.2,.7),ge(A,Zt(),-.4,.6).position.y=1.04,ge(A,Zt(),.9,.9).position.y=1.04,ge(A,p(u(new Pt(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,ge(A,Et(.2),-.6,1).position.y=1,ge(A,Et(.14),.95,.4).position.y=1,ge(A,ne(),.2,1.6),ge(A,ne(),-.9,1.5),ge(A,Ut(),2.4,2.9,hn),ge(A,Ct(),-2.6,2.6),ge(A,Ft(),2.9,-2.8),ge(A,$(1.3,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Ne(A,"S",L(),-.6,1.75,.06),Ne(A,"E",ot(),2.4,1.8,.1),ge(A,ce(),-3.6,3.2,0)}{const U=Ri.studio,A=ct(U,{pitch:.58}),ft=We+U.wallH,_=Te("paper");ie(A,_.g,-2,-1.6);{const At=new Tt;At.add(u(new Pt(1.6,1.25,.08),o.wood)),At.add(p(new Ge(new cn(1.45,1.1),new Yn({map:l.moodboard,toneMapped:!1})),0,0,.05)),Me(A,"N",At,1.6,We+1.75,.08)}ie(A,N(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[At,bt,Gt]of[[-.35,-.1,"#3f5f8f"],[0,.12,a.red],[.32,-.05,a.gold],[.12,-.2,"#5f8a52"]])ie(A,p(u(new se(.08,.09,.16,12),d(Gt)),0,.08,0),2.6+At,-2+bt).position.y=We+.78;for(let At=0;At<3;At++){const bt=p(u(new Pt(.8,.6,.04),d(T(["#efe4cc","#e2d4b6"]))),0,.3,0);bt.rotation.x=-.22,ie(A,bt,3.7-At*.1,1.4+At*.12,-hn/2)}ie(A,Qt(1.1),3.8,2.8),ie(A,Qt(.9),-3.8,2.9),ie(A,_e(1.6),-U.w/2+Fn/2+.27,.6,hn/2),Me(A,"E",nt(.9,1.5),.6,ft-.3,.04);const[P,H,Y,z]=U.deck;A.g.add(p(u(D(new Pt(H-P,.2,z-Y),2.6),d("#ffffff",{map:l.planks})),(P+H)/2,.1,(Y+z)/2));const ht=p(new Tt,0,.2,0);A.g.add(ht),Kt(ht,[[P,Y+.1],[P,z],[-2,z]],.85),Kt(ht,[[3.4,z],[H,z],[H,Y+.1]],.85),m(ht,te(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(ht,Lt(1.6,!0),3,4.4,0),m(ht,Qt(1),-3.7,4),m(ht,Qt(.8),3.8,7.1),m(ht,Ae(0),-3.9,7.3),m(ht,p(u(new se(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(ht,p(u(new se(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let At=0;At<14;At++)we(A,p(u(new an(.14,8,6),d(T([a.red,a.bone,"#d98a3a",a.redL]))),0,.14,0),y(-3.5,3.5),y(-5.2,-4.2));we(A,re(2),4.9,-4.6)}const V=Te("screen"),Z=Te("screen");{const U=Ri.workshop,A=ct(U,{pitch:.6,chimney:[-4,-1.6]}),ft=We+U.wallH;ie(A,V.g,-3,-1.4),ie(A,Z.g,2,-1.4),ie(A,Ft(),-5,2.6);{const _=new Tt;for(const P of[.9,1.5])_.add(p(u(new Pt(2.4,.06,.4),o.wood),0,P,0));for(const P of[-1,1])_.add(p(u(new Pt(.06,1.7,.4),o.woodD),P*1.2,.85,0));for(let P=0;P<7;P++)_.add(p(Jt(T(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+P*.32,.93+P%2*.6,0));_.add(p(B(.14),.9,1.65,0)),ie(A,_,-.5,-U.d/2+Fn/2+.25)}{const _=N(2,.8,.86,o.woodD);_.add(p(qt(),.4,.9,0)),_.add(v(p(u(new se(.02,.02,.4,6),o.wood),-.5,.92,.1),hn/2,0,.4)),ie(A,_,3.9,-3.2)}{const _=new Tt;_.add(p(u(new Pt(.9,.8,.8),o.iron),0,.4,0)),_.add(p(u(new cn(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),_.add(p(u(new se(.1,.1,2.2,8),o.iron),0,1.9,-.2)),ie(A,_,-5.2,.7,hn/2)}for(const[_,P,H,Y]of[[4.2,1.7,.4,a.gold],[3.5,1.35,.26,a.ironL]]){const z=new Tt;z.add(v(u(new se(H,H,.1,18),d(Y)),hn/2,0,0));for(let ht=0;ht<10;ht++){const At=ht/10*hn*2;z.add(p(u(new Pt(.12,.12,.1),d(Y)),Math.cos(At)*(H+.05),Math.sin(At)*(H+.05),0))}Me(A,"N",z,_,We+P,.1),w.push({o:z,axis:"z",v:Y===a.gold?.6:-.9})}Me(A,"W",Q(4),-1.2,We,.3),Me(A,"S",nt(1,1.7),-2.4,ft-.3,.04),Me(A,"S",St(a.red),2.6,We+1.8,.1),ie(A,Wt(),-5.2,-3.2),ie(A,gt(.6),-4.6,-3.4,.3),ie(A,gt(.6),5,3.2,.2),ie(A,Rt(),4.3,3.4),Bt("dirt",...xn(U,0,6.2),6.6,2.8,-U.ry,.013),we(A,ze(2.6),-2.6,5.4),we(A,ee(),2.6,6.2,.4);{const _=new Tt;_.add(p(u(new se(.4,.45,.6,12),o.woodL),0,.3,0)),_.add(v(p(u(new se(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),_.add(v(p(u(new Pt(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),we(A,_,-5,5.6)}we(A,Wt(),5.2,5),we(A,Wt(.85),5.8,5.6),we(A,re(2.4),-6.6,6.8),we(A,Yt(0,.9),7.4,-1.4)}let ut;{const U=Ri.tavern,A=ct(U,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),ft=We+U.wallH;{const _=new Tt;_.add(p(u(new Pt(.9,1.1,5),o.wood),0,.55,0)),_.add(p(u(new Pt(1.1,.08,5.2),o.woodL),0,1.14,0));for(let H=0;H<5;H++)_.add(p(u(new Pt(.02,.9,.9),o.woodD),-.46,.5,-2+H));for(let H=0;H<6;H++)_.add(p(Jt(T(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),y(-.2,.2),1.18,-2.2+H*.8));_.add(p(B(.2),0,1.3,2.3)),ie(A,_,4.1,-.6);const P=new Tt;for(const H of[1.5,2])P.add(p(u(new Pt(.3,.05,4),o.wood),0,H,0));for(let H=0;H<10;H++)P.add(p(Jt(T(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,H%2?2.03:1.53,-1.8+H*.4));ie(A,P,5.12,-.6),ie(A,Wt(.9,!0),4.85,2.6,hn/2),ie(A,Wt(.9,!0),4.85,3.4,hn/2)}{const _=new Tt;_.add(p(u(D(new Pt(2.6,2,.9),1.4),o.stone),0,1,0)),_.add(p(u(new Pt(2.9,.18,1.1),o.wood),0,2.05,.05)),_.add(p(u(new cn(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),_.add(p(oe(),0,0,.85)),_.add(p(B(.22),0,2.32,.1)),ut=new cs("#ff9a4a",12,9,2),ut.position.set(0,.9,1.2),_.add(ut),j(_,0,.3,.3,1.4),ie(A,_,-1.5,-U.d/2+Fn/2+.46)}ie(A,Mt(),-2.2,.8),ie(A,ne(),-3.1,.8),ie(A,ne(),-1.3,.8),ie(A,Mt(.65),1,2.3),ie(A,ne(),.1,2.3),ie(A,ne(),1.9,2.3),ie(A,ne(),1,3.2);for(const[_,P]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])ie(A,lt(),_,P).position.y=We+.8;ie(A,ne(),3.2,-2.4),Me(A,"N",ot(),2.6,We+2.1,.1),Me(A,"S",St(a.black),-3,We+1.9,.1),Me(A,"S",nt(.9,1.6),1.6,ft-.3,.04),Me(A,"W",ot(),-2.6,We+2.2,.1),Bt("dirt",...xn(U,-.5,6.4),4.8,2.6,-U.ry,.013),we(A,N(3.6,.9,.8,o.woodL),.4,6.55),we(A,Lt(3.6,!1),.4,5.75),we(A,Lt(3.6,!1),.4,7.35,hn);for(const[_,P]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])we(A,lt(),_,P).position.y=.84;Kt(A.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[_,P]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])we(A,p(u(new se(.06,.08,2.6,6),o.woodD),0,1.3,0),_,P);C(A.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),we(A,Wt(),3,5.2),we(A,Wt(.8,!0),2.6,7.9,.3),we(A,S("TAVERN"),-6.4,3.6,-hn/2),we(A,re(2.2),-8.4,5.6),kt(A,-4.89,-3.6,-.6,.9),Ye(A.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[_,P]of[[-2.6,a.red],[.8,"#3f5f8f"],[4,a.redD]])ge(A,J(P),_,-2.75),ge(A,ce(),_+.95,-3.4,hn/2).scale.setScalar(.7),ge(A,vt(.8,1.6),_-.5,-1.35),ge(A,Et(.16),_-.62,-3.55);for(const _ of[-.9,2.4])ge(A,pt(2.5),_,-2.6);{const _=u(new cn(8.6,1.1),d(a.redD),!1);_.rotation.x=-hn/2,ge(A,_,.4,.9).position.y=.212}ge(A,Nt(),.8,3.45,hn),ge(A,Lt(1.6,!0),2.8,3.4,hn),ge(A,N(.9,.7,.8,o.woodL),4.4,1.6),ge(A,ne(),4.4,2.4),ge(A,Et(.16,0),4.5,1.5).position.y=1;{const _=new Tt;_.add(p(u(new se(.06,.12,.8,8),o.woodD),0,.4,0)),_.add(p(u(new se(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),_.add(v(p(u(new Ai(.24,14),d("#5f8fa8"),!1),0,.92,0),-hn/2,0,0)),ge(A,_,-2.2,3.3)}ge(A,Qt(.9),-3.6,3.3),Ne(A,"S",St(a.red),-1.2,1.7,.1),Ne(A,"E",nt(.9,1.5),1.6,2.5,.04)}return{HOUSES:xt,buildHouse:ct,inH:ie,outH:we,onWall:Me,W2:xn,deskF:V,deskB:Z,hearthLight:ut,drawBoard:E}}const{PI:_n}=Math;function oa(s,t,e){let n=1e9;for(let i=0;i<e.length-1;i++){const[r,o]=e[i],[a,l]=e[i+1],c=a-r,h=l-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(t-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,t-o-h*f))}return n}function Nd(s,t,e,n){const i=e?[...s,s[0]]:s,r=[],o=[],a=[];let l=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(e&&(h===0||h===i.length-1)){const T=s[s.length-1],b=s[1];u=b[0]-T[0],p=b[1]-T[1]}const v=Math.hypot(u,p)||1,m=-p/v,g=u/v,y=i[h];if(h>0){const T=i[h-1];l+=Math.hypot(y[0]-T[0],y[1]-T[1])}if(r.push(y[0]+m*t/2,n,y[1]+g*t/2,y[0]-m*t/2,n,y[1]-g*t/2),o.push(0,l,1,l),h>0){const T=h*2;a.push(T-2,T,T-1,T-1,T,T+1)}}const c=new dn;return c.setAttribute("position",new De(r,3)),c.setAttribute("uv",new De(o,2)),c.setIndex(a),c.computeVertexNormals(),c}async function wS(s,t,e){const{scene:n,TEX:i,toon:r,mesh:o,at:a,rot:l,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:v,instanced:m}=s,{SPINNERS:g,plantFlora:y,skullPole:T,totem:b,brazier:D,hay:R}=t,M=new G(-62,27,70).normalize(),w=new Ge(new an(600,32,16),new ai({side:jn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new ye("#2b3b78")},mid:{value:new ye("#7f8fc4")},hor:{value:new ye("#f2aa7c")},low:{value:new ye("#c98a72")},sunCol:{value:new ye("#ffa864")},sunDir:{value:M}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));w.renderOrder=-100,w.frustumCulled=!1,n.add(w),n.fog=new fh("#d6a487",230,640),n.add(new Om("#9aa8d8","#4a3428",1.05));const B=new Lf("#ffb070",2.3);B.position.copy(M).multiplyScalar(110),B.castShadow=!0,B.shadow.mapSize.set(4096,4096),Object.assign(B.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),B.shadow.camera.updateProjectionMatrix(),B.shadow.bias=-5e-4,B.shadow.normalBias=.05,n.add(B);const O=new mo;for(let Ut=0;Ut<=160;Ut++){const Ct=Ut/160*_n*2,Ft=Hr(Ct),L=Math.cos(Ct)*Ft,te=-Math.sin(Ct)*Ft;Ut===0?O.moveTo(L,te):O.lineTo(L,te)}const q=new Ia(O,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});q.rotateX(-_n/2);const it=c(i.grass,1/9,1/9);function j(Ut,Ct){const Ft=i.strata.clone();return Ft.wrapS=Si,Ft.wrapT=oi,Ft.repeat.set(1/8,-1/(Ct-Ut)),Ft.offset.set(0,Ct/(Ct-Ut)),Ft.needsUpdate=!0,r("#ffffff",{map:Ft})}const N=new Ge(q,[r("#ffffff",{map:it}),j(-1.9,1.5)]);N.position.y=-2.9,N.receiveShadow=!0,n.add(N);const st=aS(s,await e);n.add(st.underside);for(const Ut of["walls","towers","gate"])n.add(st[Ut]);const at=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),$=new an(1,16,12),ot=new Tt;n.add(ot);for(let Ut=0;Ut<22;Ut++){const Ct=Ut/22*_n*2+d(-.12,.12),Ft=d(100,260),L=d(1.6,3.2),te=new Tt;for(let Jt=0;Jt<7;Jt++){const qt=new Ge($,at),Rt=d(1.6,2.8)*L;qt.scale.set(Rt,Rt*.7,Rt),qt.position.set(d(-3.5,3.5)*L,d(-.3,1.2)*L,d(-1.8,1.8)*L),te.add(qt)}te.position.set(Math.cos(Ct)*Ft,d(-45,28),Math.sin(Ct)*Ft),ot.add(te)}{const Ut=[],Ct=[],Ft=[];for(let L=0;L<420;L++){const te=L/420*_n*2+d(-.006,.006),Jt=Hr(te);if(h()<.55){const qt=d(.5,2.8),Rt=d(-.55,-1.8);Ut.push({x:Math.cos(te)*(Jt+.8),y:Rt-qt/2,z:Math.sin(te)*(Jt+.8),sx:d(.7,1.3),sy:qt,sz:d(.7,1.3),rx:_n+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}L%2===0&&Ct.push({x:Math.cos(te)*(Jt+.3),y:-.06,z:Math.sin(te)*(Jt+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let L=0;L<7;L++){const te=d(0,_n*2),Jt=Hr(te)+d(4,12);Ft.push({x:Math.cos(te)*Jt,y:d(-14,-4),z:Math.sin(te)*Jt,s:d(.8,2.2)})}m(new Pn(.06,1,4),Ut,{}),m(new an(1,10,6),Ct,{});for(const L of Ft){const te=new Tt;te.add(a(o(new Gi(1.2*L.s,0),r("#6e5240")),0,-.4*L.s,0)),te.add(a(o(new se(1*L.s,1.1*L.s,.3*L.s,9),r("#6f8b49")),0,.5*L.s,0)),h()<.6&&te.add(a(t.tree(f(["pine","autumn","dead"]),.5*L.s),0,.6*L.s,0)),te.position.set(L.x,L.y,L.z),te.rotation.y=d(0,6),n.add(te)}}const nt=j(-.75,1.35),Q={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},St=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Yt(Ut,Ct,Ft,L,te){y(Ct,Ft,Ut.position.x+L,Ut.position.z+te,Ut.position.y)}function ce(Ut,Ct,Ft,L){const{trees:te,clear:Jt}=Q[Ft],qt=Ct/10,Rt=[...Jt.map(([Mt,lt,C])=>[Mt,lt,C]),...L.map(([Mt,lt])=>[Mt,lt,.16])],ee=(Mt,lt,C)=>{for(let S=0;S<60;S++){const J=d(0,_n*2),vt=d(Mt,lt),pt=Math.cos(J)*vt,Nt=Math.sin(J)*vt;if(Rt.every(([Bt,xt,wt])=>Math.hypot(pt-Bt,Nt-xt)>wt+C))return Rt.push([pt,Nt,C]),[pt*Ct,Nt*Ct]}return null};for(let Mt=0;Mt<7;Mt++){const lt=ee(.3,.74,.12);lt&&y(te[Mt%te.length],d(1,1.3)*qt,Ut.position.x+lt[0],Ut.position.z+lt[1],Ut.position.y)}for(let Mt=0;Mt<9;Mt++){const lt=ee(.15,.78,.05);lt&&y(f(St),d(.75,1.25)*qt,Ut.position.x+lt[0],Ut.position.z+lt[1],Ut.position.y)}}const gt=c(i.water,1,4);function Wt(Ut,Ct,Ft,L,te,Jt){const qt=new Tt;qt.position.set(Ut,Ct,Ft),n.add(qt);const Rt=new mo;for(let C=0;C<=56;C++){const S=C/56*_n*2,J=L*(1+.12*Math.sin(3*S+Jt)+.07*Math.sin(5*S+2*Jt));C===0?Rt.moveTo(Math.cos(S)*J,-Math.sin(S)*J):Rt.lineTo(Math.cos(S)*J,-Math.sin(S)*J)}const ee=new Ia(Rt,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});ee.rotateX(-_n/2),qt.add(a(new Ge(ee,[r("#ffffff",{map:it}),nt]),0,-1.75,0));const Mt=o(new Pn(L*.95,L*2.3,12,3),r("#6e5240"),!1);Mt.rotation.x=_n,Mt.position.y=-2.1-L*1.15,qt.add(Mt);for(let C=0;C<14;C++){const S=d(0,_n*2),J=d(.2,.9);qt.add(a(l(o(new Gi(d(.8,2)*(L/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*L*.95*J,-2.1-(1-J)*L*2.3,Math.sin(S)*L*.95*J))}for(let C=0;C<26;C++){const S=d(0,_n*2),J=d(.6,2.4);qt.add(a(l(o(new Pn(.07,J,4),r("#4a3424")),_n,0,0),Math.cos(S)*L*1.02,-.6-J/2,Math.sin(S)*L*1.02))}const lt=L/10;if(te==="ruin"){const C=a(new Tt,-L*.25,0,-L*.1);C.add(a(o(new se(1.7*lt,1.9*lt,5.5*lt,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*lt,0));for(let J=0;J<7;J++){const vt=J/7*_n*2;C.add(a(o(new Pt(.7*lt,d(.4,1.6)*lt,.5*lt),v.stone),Math.cos(vt)*1.6*lt,5.6*lt,Math.sin(vt)*1.6*lt))}C.add(a(o(new Pt(.4*lt,1*lt,.1),v.pane,!1),0,2.6*lt,1.85*lt)),qt.add(C);for(const J of[-1,1])qt.add(a(o(new Pt(.7*lt,3.2*lt,.7*lt),v.stone),L*.35+J*1.3*lt,1.6*lt,L*.3));qt.add(a(o(new Pt(3.3*lt,.6*lt,.7*lt),v.stone),L*.35,3.4*lt,L*.3)),qt.add(a(T(2.4),L*.1,0,L*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[J,vt,pt]of S)Yt(qt,pt,1.2*lt,J*L,vt*L);ce(qt,L,te,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(te==="farm"){const C=a(new Tt,-L*.2,0,-L*.15);C.add(a(o(u(new Pt(3.6*lt,2.2*lt,2.8*lt),2.2*lt,1.3),v.plankWall),0,1.1*lt,0));const S=new se(2.1*lt,2.1*lt,4*lt,3,1);C.add(a(l(o(S,r("#ffffff",{map:i.roof})),0,0,_n/2),0,2.2*lt+.9*lt,0)),C.add(a(o(new Pt(.8*lt,1.5*lt,.1),v.woodD),0,.75*lt,1.42*lt)),C.add(a(o(new Pt(.6*lt,.6*lt,.1),v.pane,!1),1.1*lt,1.3*lt,1.42*lt)),qt.add(C);const J=o(new cn(L*.8,L*.5),r("#ffffff",{map:i.field}),!1);J.rotation.x=-_n/2,J.position.set(L*.3,.03,L*.25),qt.add(J);const vt=a(new Tt,L*.35,0,-L*.45);vt.add(a(o(new se(.8*lt,1.2*lt,4*lt,12),r("#e3d5b6")),0,2*lt,0)),vt.add(a(o(new Pn(1.2*lt,1.4*lt,12),r("#ffffff",{map:i.roof})),0,4.7*lt,0));const pt=a(new Tt,0,3.6*lt,1*lt);for(let Nt=0;Nt<4;Nt++){const Bt=new Tt;Bt.rotation.z=Nt*_n/2,Bt.add(a(o(new Pt(.5*lt,2.6*lt,.04),r("#e3d5b6",{side:yn})),.3*lt,1.5*lt,0)),pt.add(Bt)}vt.add(pt),g.push({o:pt,axis:"z",v:.4}),qt.add(vt),Yt(qt,"tree_maple",1.1*lt,-L*.55,L*.4),qt.add(a(R(.5*lt),L*.05,0,L*.55)),ce(qt,L,te,[[-.55,.4]])}else if(te==="shrine"){for(let S=0;S<6;S++){const J=S/6*_n*2;qt.add(a(l(o(new Pt(.7*lt,d(2,3)*lt,.5*lt),v.stone),0,-J,d(-.1,.1)),Math.cos(J)*3*lt,1.2*lt,Math.sin(J)*3*lt))}qt.add(b(4*lt));for(const S of[.8,3.9])qt.add(a(D(0,1.2*lt),Math.cos(S)*1.8*lt,0,Math.sin(S)*1.8*lt));const C=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,J]of C)Yt(qt,"tree_maple",1.1*lt,S*L,J*L);ce(qt,L,te,C)}else{const C=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[vt,pt,Nt]of C)Yt(qt,Nt,1.2*lt,vt*L,pt*L);ce(qt,L,te,C),qt.add(a(l(o(new Ai(L*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-_n/2,0,0),L*.25,.04,L*.3));const S=new Ge(new cn(1.8*lt,L*3.2),new Yn({map:gt,color:"#acb5c8",transparent:!0,opacity:.85,side:yn,depthWrite:!1}));S.position.set(L*.62,-L*1.6,L*.62),S.rotation.y=_n/4,qt.add(S);const J=o(new cn(1.2*lt,L*.55),r("#6fa9c9"),!1);J.rotation.set(-_n/2,0,-_n/4),J.position.set(L*.45,.05,L*.45),qt.add(J)}return qt}Wt(-150,6,-105,11,"ruin",.4),Wt(165,-4,-60,13,"farm",1.7),Wt(115,20,135,9,"shrine",2.9),Wt(-165,-14,85,12,"falls",4.1);const ne={};function ue(Ut){const Ct=ne[Ut];if(Ct)return Ct;const Ft={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Ut],L=s.canvasTex(256,256,(Jt,qt,Rt)=>{const ee=Jt.createRadialGradient(qt/2,Rt/2,qt*.3,qt/2,Rt/2,qt/2);ee.addColorStop(0,"rgba(255,255,255,1)"),ee.addColorStop(1,"rgba(255,255,255,0)"),Jt.fillStyle=ee,Jt.fillRect(0,0,qt,Rt)});L.wrapS=L.wrapT=oi;const te={src:Ft,mask:L};return ne[Ut]=te,te}let jt=0;function re(Ut,Ct,Ft,L,te,Jt=0,qt=.012,Rt=4){const ee=ue(Ut),Mt=c(ee.src,L*2/Rt,te*2/Rt),lt=new Ge(new cn(L*2,te*2),r("#ffffff",{map:Mt,alphaMap:ee.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-jt}));return lt.rotation.set(-_n/2,0,Jt),lt.position.set(Ct,qt,Ft),lt.receiveShadow=!0,lt.renderOrder=-10+jt++*.01,n.add(lt),lt}const ze={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},me={},_e=Ut=>{const Ct=Math.max(0,Math.min(1,Ut));return Ct*Ct*(3-2*Ct)},Te=[],Et=Ut=>Ut==="cobble"||Ut==="flag",Kt=Ut=>Ut.closed?[...Ut.line,Ut.line[0]]:Ut.line;function Qt(Ut,Ct){let Ft=null,L=1e9;for(const te of Is){if(te===Ct||te.kind==="stones")continue;const Jt=oa(Ut[0],Ut[1],Kt(te))-te.w/2;Jt<L&&(L=Jt,Ft=te)}return L<.6?Ft:null}function oe(Ut,Ct,Ft){const L=Kt(Ft),te=Ft.w/2+.02,Jt=Ct?[...Ut].reverse():[...Ut];let qt=0;for(;qt<Jt.length-2&&oa(Jt[qt][0],Jt[qt][1],L)<te;)qt++;if(qt===0)return null;let Rt=Jt[qt-1],ee=Jt[qt];for(let C=0;C<12;C++){const S=[(Rt[0]+ee[0])/2,(Rt[1]+ee[1])/2];oa(S[0],S[1],L)<te?Rt=S:ee=S}const lt=[[(Rt[0]+ee[0])/2,(Rt[1]+ee[1])/2],...Jt.slice(qt)];return Ct?lt.reverse():lt}function Lt(Ut,Ct){const Ft=Ut.kind;let L=Kt(Ut);const te=Ut.closed?[!1,!1]:[!Ut.refs[0],!Ut.refs[Ut.refs.length-1]];if(!Ut.closed&&Et(Ft))for(const Ot of[0,1]){if(!te[Ot])continue;const W=Ot?L[L.length-1]:L[0],_t=Qt(W,Ut);if(!_t||_t.kind===Ft||!Et(_t.kind))continue;const mt=oe(L,Ot===1,_t);if(!mt)continue;L=mt,te[Ot]=!1;const Xt=Ot?L[L.length-1]:L[0],et=Ot?L[L.length-2]:L[1],K=Math.hypot(Xt[0]-et[0],Xt[1]-et[1])||1;Te.push({x:Xt[0],z:Xt[1],tx:(Xt[0]-et[0])/K,tz:(Xt[1]-et[1])/K,w:Ut.w,kind:Ft})}const Jt=L.length,[qt,Rt,ee,Mt]=ze[Ft],lt=[0];for(let Ot=1;Ot<Jt;Ot++){const W=L[Ot],_t=L[Ot-1];lt.push(lt[Ot-1]+Math.hypot(W[0]-_t[0],W[1]-_t[1]))}const C=lt[Jt-1],S=.02+Ct*.0015,J=[],vt=[],pt=[],Nt=[];for(let Ot=0;Ot<Jt;Ot++){const W=L[Math.max(0,Ot-1)],_t=L[Math.min(Jt-1,Ot+1)];let mt=_t[0]-W[0],Xt=_t[1]-W[1];if(Ut.closed&&(Ot===0||Ot===Jt-1)){const ct=L[Jt-2],kt=L[1];mt=kt[0]-ct[0],Xt=kt[1]-ct[1]}const et=Math.hypot(mt,Xt)||1,K=-Xt/et,dt=mt/et;let Dt=1,x=1;if(!Ut.closed)for(const ct of[0,1]){const kt=ct?C-lt[Ot]:lt[Ot];te[ct]&&(Dt=Math.max(Dt,1+.5*(1-_e(kt/2.4))),x=Math.min(x,_e(kt/2.2)))}const k=Ut.w/2*Dt,X=[-(k+ee),-(k-ee),k-ee,k+ee],F=[0,x,x,0],rt=L[Ot];for(let ct=0;ct<4;ct++){const kt=rt[0]+K*X[ct],ve=rt[1]+dt*X[ct];J.push(kt,S,ve),vt.push(kt/Rt,ve/Rt),pt.push(1,1,1,F[ct])}if(Ot>0)for(let ct=0;ct<3;ct++){const kt=(Ot-1)*4+ct,ve=kt+1,Ee=Ot*4+ct,Ne=Ee+1;Nt.push(ve,Ne,kt,kt,Ne,Ee)}}const Bt=new dn;Bt.setAttribute("position",new De(J,3)),Bt.setAttribute("uv",new De(vt,2)),Bt.setAttribute("color",new De(pt,4)),Bt.setIndex(Nt),Bt.computeVertexNormals();let xt=me[Ft];xt||(xt=r("#ffffff",{map:qt,normalMap:p(Mt,Ft==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),me[Ft]=xt);const wt=new Ge(Bt,xt);wt.receiveShadow=!0,wt.renderOrder=-5+Ct*.01,n.add(wt)}const Ae=[];function Zt(Ut){const Ct=Ut.length,Ft=Ut.map(([qt,Rt])=>oa(qt,Rt,va)<1.35);if(!Ft.some(Boolean))return[{pts:[...Ut],closed:!0}];const L=Ft.findIndex((qt,Rt)=>!qt&&Ft[(Rt-1+Ct)%Ct]),te=[];let Jt=[];for(let qt=0;qt<=Ct;qt++){const Rt=(L+qt)%Ct;if(!Ft[Rt]&&qt<Ct){Jt.push(Ut[Rt]);continue}if(Jt.length>1&&te.push({pts:Jt,closed:!1}),qt<Ct&&Ft[Rt]&&Jt.length){let ee=qt;for(;ee<Ct&&Ft[(L+ee)%Ct];)ee++;const Mt=Jt[Jt.length-1],lt=Ut[(L+ee)%Ct],C=lt[0]-Mt[0],S=lt[1]-Mt[1],J=Math.hypot(C,S);Ae.push({x:(Mt[0]+lt[0])/2,z:(Mt[1]+lt[1])/2,ang:Math.atan2(-S,C),len:J})}Jt=[]}return te}Is.forEach((Ut,Ct)=>{if(Ut.kind!=="stones"){Lt(Ut,Ct);return}const Ft=i.roadStones.clone();Ft.wrapS=oi,Ft.wrapT=Si,Ft.repeat.set(1,1/1.3),Ft.needsUpdate=!0;const L=r("#ffffff",{map:Ft,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const te of Zt(Ut.line)){const Jt=new Ge(Nd(te.pts,Ut.w,te.closed,.03),L);Jt.receiveShadow=!0,n.add(Jt)}});{const Ut=(ee,Mt,lt,C,S,J)=>{const vt=S-lt,pt=J-C,Nt=vt*vt+pt*pt||1,Bt=Math.max(0,Math.min(1,((ee-lt)*vt+(Mt-C)*pt)/Nt));return Math.hypot(ee-lt-vt*Bt,Mt-C-pt*Bt)},Ct=(ee,Mt,lt,C)=>{for(const S of Is){if(S===lt)continue;const J=Kt(S),vt=S.w/2+C;for(let pt=0;pt<J.length-1;pt++){const Nt=J[pt],Bt=J[pt+1];if(!(Math.abs(Nt[0]-ee)>vt+1||Math.abs(Nt[1]-Mt)>vt+1)&&Ut(ee,Mt,Nt[0],Nt[1],Bt[0],Bt[1])<vt)return!0}}return!1},Ft=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],L=(ee,Mt)=>{const lt=Math.hypot(ee,Mt),C=Math.atan2(Mt,ee);if(lt>7.4&&lt<9&&Ft.some(S=>{let J=Math.abs(C-S)%(2*_n);return J=Math.min(J,2*_n-J),J*lt<1.45}))return!0;for(const S of Ma)if(S.kind==="house"){const[J,vt]=no(S,ee,Mt);if(Math.abs(J)<S.w/2+.9&&Math.abs(vt)<S.d/2+.9||S.deck&&J>S.deck[0]-.5&&J<S.deck[1]+.5&&vt>S.deck[2]&&vt<S.deck[3]+.5)return!0}else if(Math.hypot(ee-S.x,Mt-S.z)<S.r+.6)return!0;for(const S of qc)if(S.kind==="hut"){const[J,vt]=no(S,ee,Mt);if(Math.abs(J)<S.w/2+.9&&Math.abs(vt)<S.d/2+.9)return!0}else if(Math.hypot(ee-S.x,Mt-S.z)<(S.r||2)+.4)return!0;return Math.hypot(ee,Mt)>Hr(Math.atan2(Mt,ee))-1.2},te=[],Jt=[],qt=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const ee of Is){if(ee.kind==="stones")continue;const Mt=Kt(ee),lt=ee.kind!=="dirt",C=S=>{const J=Mt[Math.max(0,S-1)],vt=Mt[Math.min(Mt.length-1,S+1)],pt=Math.hypot(vt[0]-J[0],vt[1]-J[1])||1;return[-(vt[1]-J[1])/pt,(vt[0]-J[0])/pt]};for(let S=0;S<Mt.length;S++){const[J,vt]=C(S),pt=Math.atan2(J,vt)+_n/2,Nt=Mt[S];for(const Bt of[-1,1]){const xt=ee.w/2+.07,wt=Nt[0]+J*Bt*xt,Ot=Nt[1]+vt*Bt*xt;if(!(L(wt,Ot)||Ct(wt,Ot,ee,.25))&&(lt&&te.push({x:wt,y:.04,z:Ot,sx:.2,sy:.13,sz:d(.4,.47),ry:pt+d(-.04,.04),c:ee.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const W=xt+(lt?.25:.1)+d(0,.35),_t=Nt[0]+J*Bt*W,mt=Nt[1]+vt*Bt*W;if(!L(_t,mt)&&!Ct(_t,mt,ee,.2)){const Xt=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let et=0;et<5;et++)Jt.push({x:_t+d(-.15,.15),y:.11,z:mt+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Xt})}}}}if(!lt&&ee.w>1.5)for(const S of[-1,1]){const J=Mt.map((pt,Nt)=>{const[Bt,xt]=C(Nt);return[pt[0]+Bt*S*.45,pt[1]+xt*S*.45]}),vt=new Ge(Nd(J,.18,!1,.035),qt);vt.receiveShadow=!0,vt.renderOrder=-4,n.add(vt)}}for(const ee of Te){const Mt=-ee.tz,lt=ee.tx,C=Math.max(2,Math.round((ee.w+.3)/.42));for(let S=0;S<C;S++){const J=-((ee.w+.3)/2)+(S+.5)*(ee.w+.3)/C;te.push({x:ee.x+Mt*J-ee.tx*.1,y:.045,z:ee.z+lt*J-ee.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(Mt,lt)+_n/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new Za(1,1,1,1,.2),te,{cast:!1});const Rt=m(new Pn(.06,.24,4),Jt,{});Rt&&(Rt.userData.noLine=!0)}return{models:st,skyDome:w,sun:B,island:N,cloudRing:ot,grassTex:it,strataMat:j,crossings:Ae,patch:re}}const Xl={radius:.5,y:.14,scale:[1,.92,1.05]},TS=[[.18,.3,0],[.5,.4,.04],[.84,.52,.08],[1.14,.74,.08],[1.32,1.04,.05],[1.36,1.38,0],[1.28,1.66,-.05]],ES=.17,aa=24,Yl=8,AS=s=>1-.97*s**1.2;function RS(){const s=new ff(TS.map(([r,o,a])=>new G(r,o,a))),t=new Sh(s,aa,ES,Yl,!1),e=t.attributes.position,n=new G,i=new G;for(let r=0;r<=aa;r++){s.getPointAt(r/aa,n);const o=AS(r/aa);for(let a=0;a<=Yl;a++){const l=r*(Yl+1)+a;i.fromBufferAttribute(e,l).sub(n).multiplyScalar(o).add(n),e.setXYZ(l,i.x,i.y,i.z)}}return t}const{PI:xe}=Math;function CS(s){const{M:t,COL:e,TEX:n,toon:i,glow:r,mesh:o,rbox:a,at:l,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:v,tiled:m,planarUV:g,wallUV:y}=s,T=s.scene,b=[],D=[],R=[],M=[],w=v(64,128,(E,I,V)=>{const Z=()=>{E.beginPath(),E.moveTo(I/2,2),E.bezierCurveTo(I*.62,V*.3,I*.98,V*.55,I*.86,V*.8),E.bezierCurveTo(I*.76,V*.98,I*.24,V*.98,I*.14,V*.8),E.bezierCurveTo(I*.02,V*.55,I*.38,V*.3,I/2,2),E.closePath()},ut=E.createLinearGradient(0,V,0,0);ut.addColorStop(0,"rgba(255, 246, 214, 1)"),ut.addColorStop(.3,"rgba(255, 196, 92, 1)"),ut.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ut.addColorStop(1,"rgba(220, 40, 30, 0)"),Z(),E.fillStyle=ut,E.fill(),E.save(),E.translate(I*.5,V*.92),E.scale(.5,.55),E.translate(-I*.5,-V*.92),Z(),E.fillStyle="rgba(255, 252, 235, 0.9)",E.fill(),E.restore()});w.wrapS=w.wrapT=oi;const B=new ds({map:w,color:new ye(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),O=new ds({map:w,color:new ye(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),q=new ds({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Ei});function it(E,I,V,Z,ut=1){const U=new Tt,A=new Wi(B);A.center.set(.5,.06),A.scale.set(.34*ut,.68*ut,1),U.add(A);const ft=new Wi(O);ft.center.set(.5,.04),ft.scale.set(.18*ut,.34*ut,1),U.add(ft);const _=new Wi(q);return _.scale.setScalar(1.5*ut),_.position.y=.2*ut,U.add(_),U.position.set(I,V,Z),E.add(U),D.push({f:U,ph:u(0,6),s:ut}),U}const j=(()=>{const E=new Tt,I=o(new an(Xl.radius,16,12),t.bone);I.scale.set(...Xl.scale),I.position.y=Xl.y,E.add(I),E.add(l(o(new Pt(.62,.28,.5),t.bone),0,-.24,.16));for(const V of[-1,1]){const Z=o(new an(.14,10,8),t.dark,!1);Z.scale.z=.5,Z.position.set(V*.19,.08,.45),E.add(Z)}return E.add(c(l(o(new Pn(.06,.12,3),t.dark,!1),0,-.1,.5),xe,0,0)),E.add(l(o(new Pt(.42,.03,.02),t.dark,!1),0,-.25,.42)),E})();function N(E=.3){const I=j.clone();return I.scale.setScalar(E),I}const st=RS();function at(E=.3){const I=j.clone();for(const V of[-1,1]){const Z=o(st,t.bone);Z.scale.x=V,I.add(Z)}return I.scale.setScalar(E),I}function $(E=1,I=t.bone){const V=new Tt;for(const Z of[-1,1]){const ut=o(new Cn(.5*E,.09*E,6,12,xe*.6),I);ut.rotation.set(0,Z>0?0:xe,.25),ut.position.set(Z*.35*E,0,0),V.add(ut)}return V}let ot=7;const nt=(E,I)=>E+(I-E)*((ot=ot*16807%2147483647)/2147483647);function Q(E,I,V,Z,ut,U,A,ft,_=0){const P=l(o(_?a(U,A,ft,_):new Pt(U,A,ft),I),V,Z,ut);return E.add(P),P}function St(E,I,V,Z=.75){const ut=new Pt(E,I,V),U=ut.attributes.position;for(let A=0;A<U.count;A++)U.getY(A)<0&&(U.setX(A,U.getX(A)*Z),U.setZ(A,U.getZ(A)*Z));return ut.computeVertexNormals(),ut}function Yt(E,I,V,Z,ut,U,A=Math.max(2,Math.round(V/.2))){const ft=V/A;for(let _=0;_<A;_++)Q(E,U,0,Z+nt(-.004,.004),-V/2+ft*(_+.5),I+nt(-.02,.02),ut,ft-.012,.012)}function ce(E,I,V,Z,ut,U){Q(E,t.iron,I-ut*.055,V,Z-U*.012,.13,.014,.028),Q(E,t.iron,I-ut*.012,V,Z-U*.055,.028,.014,.13)}const gt=(()=>{const E=[];for(let I=0;I<=10;I++){const V=I/10;E.push(new It(.3+Math.sin(V*xe)*.06,(V-.5)*.8))}return new vh(E,20)})(),Wt=E=>.3+Math.sin((E/.8+.5)*xe)*.06;function ne(E=1,I=!1){const V=new Tt,Z=o(gt,i("#ffffff",{map:n.planks}));for(const ut of[-.33,-.17,.17,.33])Z.add(l(c(o(new Cn(Wt(ut)+.006,.02,5,24),t.iron),xe/2,0,0),0,ut,0));for(const ut of[-.17,.17])for(let U=0;U<6;U++){const A=U/6*xe*2;Z.add(l(o(new an(.016,5,4),t.ironL),Math.cos(A)*(Wt(ut)+.025),ut,Math.sin(A)*(Wt(ut)+.025)))}Z.add(l(c(o(new Ai(.3,20),t.woodD),-xe/2,0,0),0,.392,0)),Z.add(l(c(o(new Cn(.3,.018,4,24),t.woodD),xe/2,0,0),0,.4,0));for(const ut of[-.1,0,.1])Z.add(l(o(new Pt(.004,.004,.5),t.dark,!1),ut,.394,0));return Z.add(l(o(new se(.035,.035,.03,8),t.woodL),.15,.4,.05)),Z.scale.setScalar(E),I?(Z.rotation.z=xe/2,Z.position.y=.36*E):Z.position.y=.4*E,V.add(Z),V}const ue=i("#ffffff",{map:v(128,128,(E,I,V)=>{E.fillStyle="#7a5538",E.fillRect(0,0,I,V);for(let Z=0;Z<4;Z++)E.fillStyle=Z%2?"#70502f":"#84603f",E.fillRect(0,Z*32,I,30),E.fillStyle="rgba(40, 24, 14, 0.6)",E.fillRect(0,Z*32+30,I,2)})});function jt(E=.6){const I=new Tt;Q(I,ue,0,E/2,0,E*.94,E*.94,E*.94);const V=E*.09,Z=E/2-V/2;for(const ut of[-1,1])for(const U of[-1,1])Q(I,t.woodD,ut*Z,E/2,U*Z,V,E,V),Q(I,t.woodD,0,E/2+ut*Z,U*Z,E-V*2,V,V),Q(I,t.woodD,ut*Z,E/2+U*Z,0,V,V,E-V*2);for(const ut of[-1,1]){const U=Q(I,t.woodD,0,E/2,ut*(E*.47+.006),E*1.1,V*.8,V*.4);U.rotation.z=ut*xe/4}for(const ut of[-1,1])for(const U of[-1,1])for(const A of[-1,1])Q(I,t.iron,ut*(Z+.006),E/2+U*(Z+.006),A*(Z+.006),V*1.2,V*1.2,V*1.2);return I}function re(){const E=new Tt,I=o(new an(.28,12,10),i("#b8a07a"));return I.scale.set(1,1.15,.9),I.position.y=.3,E.add(I),E.add(l(o(new se(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),E}function ze(E,I,V=.8,Z=t.wood){const ut=new Tt,U=.07;Yt(ut,E,I,V-U/2,U,Z);for(const ft of[-1,1])Q(ut,t.woodD,0,V-U-.06,ft*(I/2-.12),E-.34,.12,.04,.01),Q(ut,t.woodD,ft*(E/2-.12),V-U-.06,0,.04,.12,I-.34,.01);const A=St(.1,V-U,.1,.72);for(const[ft,_]of[[-1,-1],[1,-1],[-1,1],[1,1]])ut.add(l(o(A,t.woodD),ft*(E/2-.12),(V-U)/2,_*(I/2-.12))),ce(ut,ft*E/2,V+.004,_*I/2,ft,_);Q(ut,t.woodD,0,.17,0,E-.3,.06,.05,.01);for(const ft of[-1,1])Q(ut,t.woodD,ft*(E/2-.12),.17,0,.05,.06,I-.3,.01);return ut}function me(E=.7){const I=new Tt;I.add(l(o(new se(E,E,.08,24),t.wood),0,.76,0)),I.add(l(c(o(new Cn(E,.022,5,32),t.iron),xe/2,0,0),0,.76,0));for(const V of[-E*.5,0,E*.5])Q(I,t.dark,V,.801,0,.006,.004,Math.sqrt(E*E-V*V)*1.96);I.add(l(o(new se(.08,.11,.7,10),t.woodD),0,.37,0)),I.add(l(o(new se(.13,.13,.06,10),t.iron),0,.5,0));for(let V=0;V<4;V++){const Z=V*xe/2+xe/4,ut=Q(I,t.woodD,Math.sin(Z)*E*.25,.05,Math.cos(Z)*E*.25,.09,.08,E*.6,.015);ut.rotation.y=Z}return I}function _e(){const E=new Tt;E.add(l(o(new se(.24,.24,.07,16),t.wood),0,.45,0)),E.add(l(c(o(new Cn(.24,.012,4,20),t.iron),xe/2,0,0),0,.45,0));for(let I=0;I<3;I++){const V=I/3*xe*2+.5,Z=o(new se(.028,.034,.46,6),t.woodD);Z.position.set(Math.cos(V)*.15,.22,Math.sin(V)*.15),Z.rotation.set(-Math.sin(V)*.2,0,Math.cos(V)*.2),E.add(Z)}return E.add(l(c(o(new Cn(.16,.014,4,14),t.woodD),xe/2,0,0),0,.17,0)),E}function Te(E=1.8,I=!0){const V=new Tt;for(const Z of[-1,1])Q(V,t.woodL,nt(-.01,.01),.45,Z*.11,E,.07,.2,.015);for(const Z of[-1,1]){const ut=Z*(E/2-.2);for(const U of[-1,1]){const A=l(o(St(.08,.44,.07,1),t.woodD),ut,.21,U*.12);A.rotation.x=-U*.2,V.add(A)}Q(V,t.woodD,ut,.385,0,.09,.06,.44,.01),Q(V,t.iron,ut,.487,.2,.1,.012,.03)}if(Q(V,t.woodD,0,.14,0,E-.4,.05,.05,.01),I){for(const Z of[-1,1])Q(V,t.woodD,Z*(E/2-.2),.74,-.21,.07,.56,.06,.012);for(const Z of[.64,.9])Q(V,t.woodL,nt(-.01,.01),Z,-.225,E-.1,.11,.05,.015)}return V}function Et(E=.16,I=0){const V=new Tt;if(V.add(l(o(new se(.04,.045,E,10),i("#eadfc4")),0,E/2,0)),it(V,0,E,0,.35),I){const Z=new cs("#ffb36a",I,5,2);Z.position.y=E+.15,V.add(Z)}return V}function Kt(){const E=new Tt;return E.add(l(N(.22),0,.12,0)),E.add(l(Et(.14),0,.24,0)),E}function Qt(E){const I=new Tt,V=i(E,{emissive:E,emissiveIntensity:.18});return I.add(l(o(new se(.06,.07,.2,10),V),0,.1,0)),I.add(l(o(new se(.022,.03,.1,8),V),0,.25,0)),I}function oe(){const E=new Tt;return E.add(l(o(new se(.07,.06,.15,12),t.woodL),0,.075,0)),E.add(l(c(o(new Ai(.062,12),i("#efe0b0")),-xe/2,0,0),0,.14,0)),E.add(l(o(new Cn(.045,.012,6,12),t.woodL),.08,.08,0)),E}function Lt(E=1){const I=new Tt;I.add(l(o(new se(.22*E,.16*E,.34*E,12),i("#8a4a30")),0,.17*E,0));for(let V=0;V<6;V++){const Z=V/6*xe*2;d(I,new G(Math.cos(Z)*.06*E,.32*E,Math.sin(Z)*.06*E),new G(Math.cos(Z)*.5,1,Math.sin(Z)*.5),.5*E,.1*E,i(p([e.leaf,e.leafD,e.leafL])),0,5)}return I}const Ae=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],Zt=s.UNIT_BOX;function Ut(E=2){const I=new Tt,V=2.4,Z=.5;Q(I,i("#3a2519"),0,V/2,-Z/2+.03,E-.1,V-.1,.04);for(const U of[-1,1])Q(I,t.woodD,U*(E/2-.04),V/2,0,.08,V,Z,.015);for(let U=0;U<4;U++){const A=U<3?.27+U*.72:V-.03;Q(I,t.wood,0,A,0,E-.14,.06,Z-.04),Q(I,t.woodL,0,A+.01,Z/2-.02,E-.12,.08,.04,.01)}Q(I,t.woodD,0,.1,.02,E,.2,Z,.02),Q(I,t.wood,0,V+.04,.02,E+.1,.08,Z+.08,.02),Q(I,t.woodD,0,V+.11,.03,E+.18,.07,Z+.14,.02);for(const U of[-1,1])Q(I,t.iron,U*(E/2-.02),V-.12,Z/2+.004,.06,.2,.012),Q(I,t.iron,U*(E/2-.1),V-.04,Z/2+.004,.2,.06,.012);I.add(l(N(.13),E/2-.25,2.62,.05));const ut=[];for(let U=0;U<3;U++){let A=-E/2+.12;for(;A<E/2-.2;){if(f()<.12){A+=.18;continue}const ft=u(.07,.14),_=u(.34,.56),P=f()<.1?.18:0;ut.push({x:A+ft/2,y:.33+U*.72+_/2,z:.08,sx:ft,sy:_,sz:u(.28,.36),rz:P,c:p(Ae)}),A+=ft+.012+P*.4}}return s.instanced(Zt,ut,{parent:I,cast:!0}),I}function Ct(E,I){const V=v(512,512,(U,A)=>{I.forEach((ft,_)=>{U.fillStyle=ft,U.beginPath(),U.arc(A/2,A/2,A/2-_*34,0,xe*2),U.fill()}),U.fillStyle=I[1];for(let ft=0;ft<12;ft++){const _=ft/12*xe*2;U.beginPath(),U.arc(256+Math.cos(_)*196,256+Math.sin(_)*196,10,0,xe*2),U.fill()}}),Z=o(new Ai(E,48),i("#ffffff",{map:V}),!1);Z.rotation.x=-xe/2,Z.position.y=.012;const ut=new Tt;return ut.add(Z),ut}function Ft(E=n.painting){const I=new Tt;for(const V of[-1,1]){const Z=l(o(new Pt(.06,1.8,.06),t.wood),V*.36,.9,0);Z.rotation.z=V*-.12,I.add(Z)}return I.add(c(l(o(new Pt(.06,1.7,.06),t.wood),0,.84,-.3),.35,0,0)),I.add(l(o(new Pt(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),I.add(l(new Ge(new cn(.95,.72),new Yn({map:E,toneMapped:!1})),0,1.25,.079)),I.add(l(o(new Pt(1,.05,.14),t.wood),0,.82,.08)),I}function L(E){const I=new Tt;Yt(I,1.7,.84,.745,.08,t.woodL,4),Q(I,t.woodD,0,.78,.43,1.74,.05,.03,.01),Q(I,t.wood,.55,.36,0,.5,.66,.76,.02);for(let Z=0;Z<3;Z++)Q(I,t.woodL,.55,.15+Z*.2,.385,.44,.17,.02,.01),Q(I,t.iron,.55,.17+Z*.2,.402,.12,.025,.02);for(const Z of[-.34,.34])I.add(l(o(St(.09,.7,.09,.7),t.woodD),-.76,.35,Z));Q(I,t.woodD,-.76,.14,0,.05,.05,.62,.01);for(const Z of[-1,1])ce(I,Z*.85,.79,.42,Z,1);const V={g:I,kb:null,screen:null,light:null};if(E==="screen"){const Z=l(new Tt,-.12,.805,-.25);Z.userData.y0=.805,Z.add(o(new Pt(.62,.035,.2),t.iron));for(const[_,P]of[[-.06,.54],[0,.56],[.06,.5]])Z.add(l(o(new Pt(P,.012,.04),r("#ff5a3a",.55),!1),0,.022,_));I.add(Z),V.kb=Z;const ut=new Tt;ut.add(o(new Pt(1.04,.7,.05),t.woodD));const U=new Yn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),A=c(l(new Ge(new cn(.92,.58),U),0,0,-.03),0,xe,0);ut.add(A),V.screen=A,ut.add(l(new Ge(new cn(.92,.58),U),0,0,.03)),ut.add(l(o(new Pt(.08,.13,.08),t.woodD),0,-.41,0)),ut.add(l(o(new Pt(.34,.02,.2),t.woodD),0,-.455,0)),ut.add(l(N(.09),.46,.4,0)),ut.position.set(-.12,1.25,.17),I.add(ut);const ft=new cs("#7fe8ff",0,3.2,2);ft.position.set(-.12,1.25,-.35),I.add(ft),V.light=ft,I.add(l(oe(),.6,.79,.15))}else E==="paper"?(I.add(c(l(new Ge(new cn(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-xe/2,0,0)),I.add(c(l(o(new se(.012,.012,.22,6),t.red),.35,.81,.1),0,0,xe/2)),I.add(l(Et(.12),.65,.79,-.25))):E==="books"&&(I.add(l(o(new Pt(.42,.06,.3),t.red),-.35,.82,0)),I.add(l(o(new Pt(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),I.add(l(o(new Pt(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),I.add(l(Kt(),.62,.79,-.22)));return I.add(l(o(new se(.25,.21,.44,14),t.woodD),0,.22,-.78)),V}function te(){const E=new Tt;return E.add(l(o(new se(.3,.38,.5,10),t.woodD),0,.25,0)),E.add(l(o(new Pt(.34,.2,.22),t.iron),0,.6,0)),E.add(l(o(new Pt(.7,.14,.3),t.ironL),0,.77,0)),d(E,new G(.35,.77,0),new G(1,0,0),.32,.1,t.ironL,0,10),E.add(l(o(new Pt(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),E}function Jt(){const E=new Tt;return E.add(l(o(new se(.06,.06,1.6,8),t.wood),0,.8,0)),E.add(l(o(new se(.28,.32,.8,12),t.straw),0,1.15,0)),E.add(l(o(new an(.22,12,10),t.straw),0,1.75,0)),E.add(l(o(new Pt(.9,.08,.08),t.wood),0,1.35,0)),E.add(l(c(o(new Cn(.3,.03,6,16),t.red),xe/2,0,0),0,1.2,0)),E}function qt(){const E=new Tt;E.add(c(l(o(new se(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),xe/2,0,0));for(const I of[-1,1])E.add(c(l(o(new Pt(.06,1.4,.06),t.wood),I*.35,.7,-.2),0,0,I*.2));return E}function Rt(E=.42){const I=new Tt;return I.add(c(l(o(new se(E,E,.7,16),t.straw),0,E,0),0,0,xe/2)),I}function ee(E=0,I=1){const V=new Tt;for(let Z=0;Z<3;Z++){const ut=Z/3*xe*2,U=o(new se(.035,.045,1.1,6),t.iron);U.position.set(Math.cos(ut)*.22,.5,Math.sin(ut)*.22),U.rotation.set(Math.sin(ut)*.3,0,-Math.cos(ut)*.3),V.add(U)}V.add(l(o(new se(.42,.24,.3,14,1,!0),t.iron),0,1.05,0)),V.add(c(l(o(new Ai(.36,14),t.dark,!1),0,1.12,0),-xe/2,0,0)),V.add(l(o(new an(.3,10,6,0,xe*2,0,xe/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let Z=0;Z<4;Z++){const ut=Z/4*xe*2;d(V,new G(Math.cos(ut)*.42,1.18,Math.sin(ut)*.42),new G(Math.cos(ut)*.4,1,Math.sin(ut)*.4),.22,.04,t.iron,0,5)}if(it(V,0,1.12,0,1.6),E){const Z=new cs("#ff9a4a",E,9,2);Z.position.y=1.7,V.add(Z),M.push({l:Z,base:E,ph:u(0,6)})}return V.scale.setScalar(I),V}function Mt(){const E=new Tt;E.add(c(l(o(new Pt(.06,.06,.3),t.iron),0,0,.12),0,0,0));const I=l(o(new se(.045,.06,.5,8),t.woodD),0,.12,.26);return I.rotation.x=.35,E.add(I),E.add(l(o(new se(.08,.06,.12,8),t.iron),0,.36,.34)),it(E,0,.4,.35,.9),E}function lt(E=3.2,I=n.banner){const V=new Tt;V.add(l(o(new se(.05,.07,E+.6,8),t.woodD),0,(E+.6)/2,0)),V.add(c(l(o(new se(.03,.03,1,6),t.iron),0,E+.4,.05),0,0,xe/2)),V.add(l(N(.16),0,E+.72,.02));const Z=new Ge(new cn(.9,1.9,1,8),i("#ffffff",{map:I,side:yn})),ut=Z.geometry.attributes.position;for(let U=0;U<ut.count;U++)ut.setZ(U,Math.sin(ut.getY(U)*2.6)*.05);return Z.geometry.computeVertexNormals(),Z.position.set(0,E-.55,.08),Z.castShadow=!0,V.add(Z),V}function C(E=1.2,I=2.6){const V=new Tt;V.add(c(l(o(new se(.04,.04,E+.3,6),t.iron),0,0,.04),0,0,xe/2));const Z=o(new cn(E,I),i("#ffffff",{map:n.banner,side:yn}),!1);return Z.position.set(0,-I/2,.05),V.add(Z),V}function S(E=2.4){const I=new Tt;I.add(l(o(new se(.05,.08,E,7),t.woodD),0,E/2,0)),I.add(l(at(.24),0,E+.12,0));for(let V=0;V<3;V++){const Z=o(new cn(.12,u(.5,.9)),i(p([e.red,e.redD,e.bone]),{side:yn}),!1);Z.position.set(Math.cos(V*2.1)*.08,E-.5,Math.sin(V*2.1)*.08),Z.rotation.y=V*2.1,I.add(Z)}return I}function J(E=3){const I=new Tt,V=Math.max(2,Math.round(E/.9));I.add(c(l(o(new se(.1,.1,E,8),t.wood),0,.45,0),0,0,xe/2));for(let Z=0;Z<V;Z++){const ut=-E/2+(Z+.5)*E/V;for(const U of[-1,1]){const A=new Tt;A.add(l(o(new se(.07,.07,1.4,7),t.woodL),0,0,0)),A.add(l(o(new Pn(.07,.3,7),t.boneD),0,.85,0)),A.position.set(ut,.45,0),A.rotation.x=U*.8,I.add(A)}}return I}function vt(){const E=new Tt;E.add(l(o(new se(.55,.5,.9,18),t.redD),0,.75,0)),E.add(l(o(new se(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let I=0;I<3;I++){const V=I/3*xe*2;E.add(c(l(o(new se(.04,.05,.7,6),t.woodD),Math.cos(V)*.42,.3,Math.sin(V)*.42),Math.sin(V)*.2,0,-Math.cos(V)*.2))}return E.add(l(c(o(new Cn(.53,.03,6,20),t.bone),xe/2,0,0),0,1.05,0)),E}function pt(E=4){const I=new Tt,V=[e.red,e.woodL,e.redD,e.wood];for(let Z=0;Z<4;Z++){const ut=o(new se(.42,.46,E/4,10),i(V[Z]));ut.position.y=E/8+Z*E/4,I.add(ut);for(const U of[-1,1])I.add(l(o(new Pt(.12,.08,.06),t.bone),U*.15,ut.position.y+.05,.42));I.add(l(o(new Pt(.36,.06,.06),t.dark),0,ut.position.y-.18,.43))}I.add(l(N(.45),0,E+.25,0)),I.add(l($(1.1),0,E+.35,0));for(const Z of[-1,1])I.add(c(l(o(new Pt(1,.12,.1),t.woodD),Z*.55,E*.72,0),0,0,Z*.2));return I}function Nt(E=1.9,I=2.6,V="#8a6a4a"){const Z=new Tt,ut=o(new Pn(E,I,8,1,!0),i(V,{side:yn}));ut.position.y=I/2,Z.add(ut);for(let U=0;U<3;U++){const A=U/3*xe*2+.4;Z.add(c(l(o(new se(.04,.04,.9,6),t.woodD),Math.cos(A)*.12,I+.25,Math.sin(A)*.12),Math.sin(A)*.4,0,-Math.cos(A)*.4))}return Z.add(c(l(o(new cn(.9,1.3),t.dark,!1),0,.65,E*.82),-.6,0,0)),Z.add(c(l(o(new Cn(E*.62,.05,6,24),t.redD),0,I*.35,0),xe/2,0,0)),Z}function Bt(E=4){const I=new Tt;I.add(l(o(new Pt(1.8,.1,.1),t.wood),0,1.25,0)),I.add(l(o(new Pt(1.8,.1,.1),t.wood),0,.3,.12));for(const V of[-1,1])I.add(l(o(new Pt(.1,1.35,.1),t.woodD),V*.85,.67,0));for(let V=0;V<E;V++){const Z=-.6+V*1.2/(E-1),ut=new Tt;V%2?(ut.add(l(o(new Pt(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ut.add(l(o(new Pt(.22,.05,.06),t.gold),0,.2,0))):(ut.add(l(o(new se(.03,.03,1.4,6),t.woodD),0,.7,0)),ut.add(l(o(new Pt(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ut.position.set(Z,.05,.08),ut.rotation.z=.08,I.add(ut)}return I}function xt(E=2){const I=new Tt,V=[];for(let Z=0;Z<4;Z++)for(let ut=0;ut<Math.floor(E/.26)-Z;ut++)V.push([-E/2+.13+ut*.26+Z*.13,.13+Z*.22,0]);for(const[Z,ut]of V)I.add(c(l(o(new se(.12,.12,.9,8),i(p([e.woodL,"#8a6440","#6e4a30"]))),Z,ut,0),xe/2,0,0));return I}function wt(){const E=new Tt;E.add(l(o(new Pt(1.6,.12,1),t.wood),0,.62,0));for(const I of[-1,1])E.add(l(o(new Pt(1.6,.36,.06),t.woodL),0,.85,I*.47)),E.add(c(l(o(new se(.42,.42,.08,14),t.woodD),0,.42,I*.58),xe/2,0,0));for(const I of[-1,1])E.add(c(l(o(new Pt(1.4,.07,.07),t.woodD),1.3,.55,I*.35),0,0,-.18));return E.add(l(re(),-.3,.68,.1)),E.add(l(jt(.4),.35,.68,-.15)),E}function Ot(){const E=new Tt;E.add(ze(2.2,.9,.9,t.woodL));for(const[Z,ut]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])E.add(l(o(new Pt(.08,2.2,.08),t.woodD),Z,1.1,ut));const I=v(256,64,(Z,ut,U)=>{for(let A=0;A<8;A++)Z.fillStyle=A%2?"#e3d5b6":"#8a2420",Z.fillRect(A*32,0,32,U)}),V=o(new Pt(2.5,.05,1.4),i("#ffffff",{map:I}));V.position.set(0,2.2,.15),V.rotation.x=.22,E.add(V);for(let Z=0;Z<9;Z++)E.add(l(o(new an(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return E.add(l(jt(.5),-1.4,0,.3)),E.add(l(ne(.8),1.5,0,-.1)),E}function W(){const E=new Tt;E.add(l(o(g(new se(1,1.1,.9,22),1.2),t.stone),0,.45,0)),E.add(c(l(o(new Ai(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-xe/2,0,0));for(const V of[-1,1])E.add(l(o(new Pt(.14,1.7,.14),t.woodD),V*.95,1.5,0));const I=o(new Pn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return I.position.y=2.65,I.rotation.y=xe/4,E.add(I),E.add(c(l(o(new se(.06,.06,1.9,8),t.wood),0,2.05,0),0,0,xe/2)),E.add(l(o(new se(.15,.13,.22,10),t.woodL),.2,1.55,0)),E.add(l(N(.18),0,3.15,0)),E}function _t(E=0){const I=new Tt;I.add(l(o(new se(.07,.1,2.8,8),t.iron),0,1.4,0)),I.add(l(o(new Pt(.55,.06,.06),t.iron),.22,2.7,0));const V=new Tt;if(V.add(o(new se(.14,.18,.32,8),t.iron)),V.add(l(o(new an(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),E){const Z=new cs("#ffc477",E,9,2);V.add(Z)}return V.position.set(.44,2.44,0),I.add(V),I}function mt(){const E=new Tt;Q(E,t.wood,0,.25,0,1,.5,.6,.02),E.add(c(l(o(new se(.3,.3,1,16,1,!1,0,xe),t.woodL),0,.5,0),0,0,xe/2));for(const I of[-.38,.38])Q(E,t.iron,I,.27,0,.07,.52,.62),E.add(l(c(o(new Cn(.31,.025,4,16,xe),t.iron),0,xe/2,0),I,.5,0));for(const I of[-1,1])for(const V of[-1,1])Q(E,t.iron,I*.49,.05,V*.29,.06,.1,.06);Q(E,t.gold,0,.44,.31,.16,.2,.025),Q(E,t.dark,0,.42,.325,.03,.06,.01);for(const I of[-1,1])E.add(l(c(o(new Cn(.06,.012,4,12),t.iron),0,xe/2,0),I*.51,.3,0));return E.add(l(N(.1),0,.62,.22)),E}function Xt(){const E=new Tt;Q(E,t.woodD,0,.25,0,1.3,.5,1.1,.03),Q(E,t.red,0,.58,.05,1.08,.16,.9,.06),Q(E,t.woodD,0,1.2,-.48,1.3,1.9,.2,.03),Q(E,t.red,0,1.25,-.36,.9,1.3,.06,.03);for(let I=0;I<4;I++)for(const V of[-1,1])E.add(l(o(new an(.03,6,4),t.gold),V*.4,.7+I*.36,-.32));for(const I of[-1,1])Q(E,t.woodD,I*.62,.75,0,.18,.5,1,.03),Q(E,t.iron,I*.62,1.01,.1,.22,.04,.8,.01),E.add(l(N(.12),I*.62,1.1,.45)),d(E,new G(I*.55,2.15,-.48),new G(I*.3,1,0),.5,.08,t.bone,0,6);return E.add(l(N(.32),0,2.25,-.4)),E.add(l($(1),0,2.3,-.4)),E}function et(E=e.red){const I=new Tt;return I.add(c(o(new se(.42,.42,.06,18),i(E)),xe/2,0,0)),I.add(c(l(o(new Cn(.42,.04,6,20),t.iron),0,0,.03),0,0,0)),I.add(l(N(.16),0,0,.08)),I}function K(){const E=new Tt;return E.add(o(new Pt(.7,.8,.08),t.woodD)),E.add(l(at(.32),0,.02,.18)),E}function dt(E=.7,I=6){const V=new Tt;V.add(l(o(new se(.012,.012,1,4),t.iron),0,.5,0)),V.add(c(o(new Cn(E,.04,6,24),t.iron),xe/2,0,0));for(let Z=0;Z<I;Z++){const ut=Z/I*xe*2;V.add(l(Et(.12),Math.cos(ut)*E,.02,Math.sin(ut)*E))}return V}function Dt(E,I,V,Z){for(let ut=0;ut<I.length-1;ut++){const[U,A]=I[ut],[ft,_]=I[ut+1],P=5;for(let z=1;z<P;z++){const ht=z/P,At=U+(ft-U)*ht,bt=A+(_-A)*ht,Gt=V-Math.sin(ht*xe)*Z;E.add(l(o(new an(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),At,Gt,bt))}const H=Math.hypot(ft-U,_-A),Y=o(new se(.008,.008,H,3),t.dark,!1);Y.position.set((U+ft)/2,V-Z*.6,(A+_)/2),Y.rotation.set(0,-Math.atan2(_-A,ft-U),xe/2),E.add(Y)}}function x(E="round",I=1){const V=new Tt;if(V.add(l(o(new se(.18*I,.3*I,1.8*I,8),t.wood),0,.9*I,0)),E==="pine")for(let Z=0;Z<4;Z++)V.add(l(o(new Pn((1.5-Z*.3)*I,1.4*I,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+Z*.8)*I,0));else if(E==="dead")for(let Z=0;Z<4;Z++){const ut=o(new se(.04*I,.1*I,1.2*I,6),t.woodD),U=Z*1.7;ut.position.set(Math.cos(U)*.3*I,(1.6+Z*.25)*I,Math.sin(U)*.3*I),ut.rotation.set(Math.sin(U)*.8,0,-Math.cos(U)*.8),V.add(ut)}else{const Z=E==="autumn"?[e.autumn1,e.autumn2,e.autumn3]:[e.leaf,e.leafD,e.leafL];for(const[ut,U,A,ft]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])V.add(l(o(new an(ft*I,14,10),i(p(Z))),ut*I,U*I,A*I))}return V.rotation.y=u(0,3),V}const k=new Map;function X(E,I,V,Z,ut=0){const U=new Ue().compose(new G(V,ut,Z),new Sn().setFromAxisAngle(new G(0,1,0),u(0,2*xe)),new G(I*u(.92,1.08),I*u(.9,1.12),I*u(.92,1.08))),A=k.get(E);return A?A.push(U):k.set(E,[U]),!0}function F(E){E.flora.scene.updateMatrixWorld(!0);for(const[I,V]of k){const Z=np(E.flora,I);if(!Z)throw new Error(`no flora model for ${I}`);for(const[ut,U]of ep(s,Z)){const A=U.length===1?U[0]:Ch(U,!1);if(!A)continue;const ft=new fo(A,ut,V.length);V.forEach((_,P)=>ft.setMatrixAt(P,_)),ft.castShadow=!ut.isMeshStandardMaterial,ft.receiveShadow=!0,ft.frustumCulled=!1,T.add(ft)}}}function rt(){const E=new Tt;E.add(l(o(new se(.3,.38,.6,8),t.stone),0,.3,0));const I=l(o(new Mh(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return I.scale.y=1.7,E.add(I),R.push({o:I,axis:"y",v:.6,bob:!0,y0:1}),E}function ct(){const E=new Tt;E.add(l(o(new an(.5,16,10,0,xe*2,xe*.3,xe*.7),i("#2e2a2c",{side:yn})),0,.55,0)),E.add(c(l(o(new Ai(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-xe/2,0,0));for(let I=0;I<3;I++){const V=I/3*xe*2;E.add(l(o(new se(.04,.04,.3,6),t.iron),Math.cos(V)*.32,.12,Math.sin(V)*.32))}return E}function kt(E,I,V=.9,Z=-1){for(let ut=0;ut<I.length-1;ut++){if(ut===Z)continue;const[U,A]=I[ut],[ft,_]=I[ut+1],P=Math.hypot(ft-U,_-A),H=-Math.atan2(_-A,ft-U);for(const Y of[V*.45,V*.85]){const z=o(new Pt(P,.07,.06),t.woodL);z.position.set((U+ft)/2,Y,(A+_)/2),z.rotation.y=H,E.add(z)}for(const[Y,z]of[[U,A],[ft,_]])E.add(l(o(new Pt(.12,V+.15,.12),t.woodD),Y,(V+.15)/2,z))}}function ve(E){const I=new Tt;I.add(l(o(new Pt(.1,2.2,.1),t.woodD),0,1.1,0));const V=v(256,96,(Z,ut,U)=>{Z.fillStyle="#6a4630",Z.fillRect(0,0,ut,U),Z.strokeStyle="#3a2419",Z.lineWidth=8,Z.strokeRect(4,4,ut-8,U-8),Z.fillStyle="#e3d5b6",Z.font=`800 40px ${Yc}`,Z.textAlign="center",Z.textBaseline="middle",Z.fillText(E,ut/2,U/2+2)});return I.add(l(o(new Pt(1.1,.42,.06),i("#ffffff",{map:V})),.25,1.85,0)),I}function Ee(E=e.red){const I=new Tt;for(const V of[-1,1])Q(I,t.woodD,V*.48,.24,0,.07,.18,1.96,.015);for(const[V,Z,ut]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])Q(I,t.woodD,V,ut/2,Z,.1,ut,.1,.015),I.add(l(o(new an(.065,8,6),t.wood),V,ut+.04,Z));for(let V=0;V<5;V++)Q(I,t.wood,-.32+V*.16,.66,-.98,.07,.5,.04,.01);return Q(I,t.woodD,0,.92,-.98,.98,.09,.07,.015),Q(I,t.woodD,0,.42,-.98,.98,.07,.07,.015),Q(I,t.woodD,0,.5,.98,.98,.14,.06,.015),Q(I,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),Q(I,i(E),0,.5,.25,.96,.07,1.36,.03),Q(I,i(E),0,.535,-.38,.96,.05,.16,.025),Q(I,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),Q(I,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),I.add(l(N(.12),0,1.08,-.94)),I}function Ne(){const E=new Tt;E.add(Ee(e.redD));const I=Ee("#4a3a30");I.position.y=1.15,E.add(I);for(const[V,Z]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])E.add(l(o(new Pt(.1,2.2,.1),t.wood),V,1.1,Z));for(let V=0;V<5;V++)E.add(l(o(new Pt(.06,.05,.06),t.woodL),.52,.4+V*.3,.9));return E}function ge(){const E=new Tt;Q(E,t.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const I of[-1,1]){Q(E,t.wood,I*.3,1.05,.31,.56,1.78,.03,.01);for(const V of[.62,1.48])Q(E,t.woodL,I*.3,V,.33,.4,.66,.02,.008);for(const V of[.4,1.7])Q(E,t.iron,I*.52,V,.33,.14,.05,.015);Q(E,t.gold,I*.06,1.08,.34,.03,.14,.03)}Q(E,t.wood,0,2.05,0,1.32,.1,.68,.02),Q(E,t.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const I of[-1,1])for(const V of[-1,1])Q(E,t.woodD,I*.54,.05,V*.24,.12,.1,.12,.02);return E}function Ye(E,I=1.8){const V=new Tt;return V.add(l(o(y(new Pt(.12,I,E),I,1.3),t.plankWall),0,I/2,0)),V.add(l(o(new Pt(.18,.1,E+.04),t.timber),0,I,0)),V}function Me(E=.8,I=1.6){const V=new Ge(new cn(E,I,6,1),i(e.red,{side:yn})),Z=V.geometry.attributes.position;for(let U=0;U<Z.count;U++)Z.setZ(U,Math.sin(Z.getX(U)*14)*.04);V.geometry.computeVertexNormals(),V.position.y=I/2+.1;const ut=new Tt;return ut.add(V),ut.add(l(c(o(new se(.02,.02,E+.2,6),t.iron),0,0,xe/2),0,I+.12,0)),ut}function ie(){const E=new Tt;for(let I=0;I<5;I++)E.add(c(l(o(new se(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+I%3*.08,u(-.1,.1)),0,u(-.4,.4),xe/2));return E}function we(){const E=new Tt;for(let V=0;V<3;V++){const Z=V/3*xe*2;E.add(c(l(o(new se(.025,.03,1.3,6),t.woodD),Math.cos(Z)*.22,.62,Math.sin(Z)*.22),Math.sin(Z)*.32,0,-Math.cos(Z)*.32))}const I=l(c(o(new se(.07,.11,1.3,12),t.gold),.9,0,0),0,1.35,.15);return E.add(I),E}function xn(){const E=new Tt;E.add(l(o(new se(.06,.22,.9,10),t.woodD),0,.45,0)),E.add(l(o(new an(.34,20,14),i("#2a3050")),0,1.25,0));for(let I=0;I<14;I++){const V=u(0,2*xe),Z=u(-1.2,1.2);E.add(l(o(new an(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(V)*Math.cos(Z)*.345,1.25+Math.sin(Z)*.345,Math.sin(V)*Math.cos(Z)*.345))}return E.add(l(c(o(new Cn(.4,.02,6,28),t.gold),0,xe/2,.3),0,1.25,0)),E}const bn=v(256,192,(E,I,V)=>{E.fillStyle="#d8c8a0",E.fillRect(0,0,I,V),E.strokeStyle="#6a4a30",E.lineWidth=3,E.beginPath(),E.moveTo(30,150),E.bezierCurveTo(60,60,140,40,220,90),E.bezierCurveTo(200,150,120,170,30,150),E.stroke(),E.fillStyle="#8a2420";for(const[Z,ut]of[[90,100],[150,80],[180,120]])E.beginPath(),E.arc(Z,ut,6,0,xe*2),E.fill();E.strokeStyle="rgba(106, 74, 48, 0.5)",E.setLineDash([6,6]),E.beginPath(),E.moveTo(90,100),E.lineTo(150,80),E.lineTo(180,120),E.stroke()});function Vn(){const E=new Tt;return E.add(o(new Pt(1.4,1.05,.04),t.woodD)),E.add(l(new Ge(new cn(1.3,.95),new Yn({map:bn,toneMapped:!1})),0,0,.03)),E}function ni(){const E=new Tt,I=i("#6e6668"),V=i("#4a4446"),Z=i("#b8b0a8"),ut=o(new La(.32,.8,6,12),I);ut.rotation.x=xe/2,ut.position.set(0,.34,0),ut.scale.set(1.05,1,.85),E.add(ut),E.add(l(o(new an(.24,12,10),Z),0,.22,.25));const U=l(new Tt,0,.5,.78);U.add(o(new an(.24,14,10),I)),U.add(c(l(o(new Pn(.12,.34,10),V),0,-.05,.26),xe/2,0,0)),U.add(l(o(new an(.04,6,4),t.dark,!1),0,-.03,.43));for(const A of[-1,1])U.add(c(l(o(new Pn(.07,.2,6),V),A*.13,.22,-.02),0,0,-A*.3)),U.add(l(o(new an(.03,6,4),r("#ffb84a",1.2),!1),A*.1,.05,.2));U.rotation.x=.25,E.add(U);for(const[A,ft]of[[-.2,.55],[.2,.55]])E.add(c(l(o(new La(.07,.36,4,8),I),A,.08,ft+.15),xe/2,0,0));return E.add(c(l(o(new Pn(.12,.7,8),V),.25,.22,-.75),1.2,.6,0)),E.add(c(l(o(new Cn(.2,.03,6,16),t.red),0,.42,.62),xe/2.4,0,0)),E}return{FLAGS:b,FLAMES:D,SPINNERS:R,FIRE_LIGHTS:M,BOOK_COLS:Ae,flameTex:w,flame:it,skull:N,hornedSkull:at,horns:$,fj:nt,bx:Q,taper:St,boards:Yt,cornerIron:ce,barrel:ne,crate:jt,sack:re,table:ze,roundTable:me,stool:_e,bench:Te,candle:Et,skullCandle:Kt,bottle:Qt,mug:oe,plant:Lt,bookshelf:Ut,rug:Ct,easel:Ft,desk:L,anvil:te,dummy:Jt,target:qt,hay:Rt,brazier:ee,torch:Mt,poleBanner:lt,hangingBanner:C,skullPole:S,spikes:J,drum:vt,totem:pt,tent:Nt,weaponRack:Bt,woodpile:xt,cart:wt,stall:Ot,well:W,lampPost:_t,chest:mt,throne:Xt,shield:et,trophy:K,chandelier:dt,lanternString:Dt,tree:x,plantFlora:X,growFlora:F,crystal:rt,cauldron:ct,fence:kt,signPost:ve,bed:Ee,bunk:Ne,wardrobe:ge,partition:Ye,curtain:Me,scrollStack:ie,telescope:we,starGlobe:xn,wallMap:Vn,wolf:ni,put:h}}const{PI:Ud}=Math;function PS(s,t,e,n){const{scene:i,COL:r,toon:o,mesh:a,at:l,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:v,growFlora:m,lampPost:g,skullPole:y}=t,T=zh.pts;function b(j,N){let st=!1;for(let at=0,$=T.length-1;at<T.length;$=at++){const[ot,nt]=T[at],[Q,St]=T[$];nt>N!=St>N&&j<(Q-ot)*(N-nt)/(St-nt)+ot&&(st=!st)}return st}function D(j,N,st,at,$,ot){const nt=$-st,Q=ot-at,St=nt*nt+Q*Q||1,Yt=Math.max(0,Math.min(1,((j-st)*nt+(N-at)*Q)/St));return Math.hypot(j-st-nt*Yt,N-at-Q*Yt)}const R=[...Is.map(j=>({w:j.w*.65,pts:j.closed?[...j.line,j.line[0]]:j.line})),{w:1,pts:va}],M=[],w=sp.map(j=>Qn[j]);function B(j,N,st=.6){const at=Math.atan2(N,j);if(Math.hypot(j,N)>Hr(at)-1.6)return!1;for(const $ of R){const ot=$.pts;for(let nt=0;nt<ot.length-1;nt++){const Q=ot[nt],St=ot[nt+1];if(!(Math.abs(Q[0]-j)>$.w+st+1.5||Math.abs(Q[1]-N)>$.w+st+1.5)&&D(j,N,Q[0],Q[1],St[0],St[1])<$.w+st)return!1}}for(const $ of Ma)if($.kind==="house"){const[ot,nt]=no($,j,N),Q=3.4+st;if(Math.abs(ot)<$.w/2+Q&&nt>-$.d/2-Q&&nt<$.d/2+Q+($.deck?4.5:0)+($.id==="tavern"?5:0))return!1}else if(Math.hypot(j-$.x,N-$.z)<$.r+($.kind==="open"?2.2:1.4)+st)return!1;for(const $ of qc)if($.kind==="hut"){const[ot,nt]=no($,j,N);if(Math.abs(ot)<$.w/2+2.6+st&&Math.abs(nt)<$.d/2+2.6+st)return!1}else if(Math.hypot(j-$.x,N-$.z)<$.r+1.8+st)return!1;for(let $=0;$<T.length;$++){const[ot,nt]=T[$],[Q,St]=T[($+1)%T.length];if(D(j,N,ot,nt,Q,St)<zh.thick/2+.8+st||Math.hypot(j-ot,N-nt)<3.6+st)return!1}if(Math.hypot(j+44,N-26)<6+st||Math.hypot(j-kh[0],N-kh[1])<9+st)return!1;for(const $ of w)if(Math.hypot(j-$.x,N-$.z)<1.2+st)return!1;for(const $ of M)if(Math.hypot(j-$.x,N-$.z)<$.r+st)return!1;return!0}function O(j,N,st,at){let $=0;for(let ot=0;ot<N&&$<j;ot++){const nt=f(0,2*Ud),Q=Math.sqrt(d())*58,St=Math.cos(nt)*Q*1.04,Yt=Math.sin(nt)*Q*.9;st(St,Yt)&&(at(St,Yt),$++)}}O(34,6e3,(j,N)=>b(j,N)&&B(j,N,1.4),(j,N)=>{v(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),j,N),M.push({x:j,z:N,r:2.2})}),O(80,9e3,(j,N)=>!b(j,N)&&B(j,N,1.6),(j,N)=>{v(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),j,N),M.push({x:j,z:N,r:2.4})});{const j=[],N=[],st=[];O(90,9e3,(at,$)=>B(at,$,.5),(at,$)=>{const ot=f(.55,1);v(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),ot*1.25,at,$),M.push({x:at,z:$,r:ot})}),O(60,6e3,(at,$)=>B(at,$,.4),(at,$)=>{const ot=f(.25,.8);j.push({x:at,y:ot*.3,z:$,sx:ot,sy:ot*f(.5,.85),sz:ot*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),M.push({x:at,z:$,r:ot})}),O(1200,16e3,(at,$)=>B(at,$,.1),(at,$)=>{const ot=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let nt=0;nt<4;nt++)N.push({x:at+f(-.12,.12),y:.11,z:$+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:ot})}),O(320,12e3,(at,$)=>B(at,$,.1),(at,$)=>{st.push({x:at,y:.16,z:$,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Gi(1,0),j,{cast:!0});for(const at of[p(new Pn(.06,.24,4),N,{}),p(new an(.09,7,5),st,{})])at&&(at.userData.noLine=!0)}m(n);for(const[j,N,st]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const at=Is.find(ot=>ot.id===j);if(!at)continue;const $=at.line;for(let ot=6;ot<$.length-6;ot+=N*2){const[nt,Q]=$[ot-1],[St,Yt]=$[ot+1],ce=$[ot],gt=Math.hypot(St-nt,Yt-Q)||1,Wt=-(Yt-Q)/gt,ne=(St-nt)/gt,ue=ot/(N*2)%2?1:-1,jt=ce[0]+Wt*ue*(at.w*.62+.5),re=ce[1]+ne*ue*(at.w*.62+.5);if(j==="ring"&&Math.hypot(jt,re)<10)continue;let ze=!0;for(const me of w)Math.hypot(jt-me.x,re-me.z)<2&&(ze=!1);for(const me of Ma)me.kind!=="house"&&Math.hypot(jt-me.x,re-me.z)<me.r+.5&&me.id!=="court"&&(ze=!1);ze&&h(i,st==="lamp"?g(0):y(f(2,2.6)),jt,re,Math.atan2(-Wt*ue,-ne*ue))}}const q=[];function it(){const j=new Tt,N=o("#2a2426");j.add(l(a(new an(.16,8,6),N),0,0,0)),j.children[0].scale.set(1,.8,1.6),j.add(l(a(new an(.1,8,6),N),0,.08,.2)),j.add(c(l(a(new Pn(.03,.12,4),o("#c79a45")),0,.07,.33),Ud/2,0,0));for(const st of[-1,1]){const at=l(new Tt,st*.1,.02,0);at.add(l(a(new Pt(.55,.03,.22),N),st*.27,0,0)),j.add(at)}return j}for(let j=0;j<6;j++){const N=it();N.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},N.scale.setScalar(1.8),i.add(N),q.push(N)}for(const j of["war","library","tavern"]){const N=e.HOUSES[j];if(!N)continue;const st=N.roof;for(let at=0;at<2;at++){const $=it(),ot=$.children[3],nt=$.children[4];ot.visible=nt.visible=!0,ot.rotation.z=.9,nt.rotation.z=-.9,$.position.set(f(-N.r.w/3,N.r.w/3),st.hR+.3,0),$.rotation.y=f(0,6),st.R.add($)}}return{CROWS:q}}async function DS(s){const t=s.reducedMotion;let e=s.width,n=s.height;const i=new QM({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});MS(i,e,n,s.dpr);const r=new b0,o=yS(i,r),a=oS(),l=uS(),c=vS(),h=CS(o),d=await wS(o,h,a);await c;const f=bS(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=k1(o,h,d,f,d.models),p=PS(o,h,f,d.models),{TEX:v,COL:m,toon:g,rnd:y,rr:T,pick:b,_c:D}=o,{FLAMES:R,SPINNERS:M,FLAGS:w,FIRE_LIGHTS:B}=h,{HOUSES:O,deskF:q,deskB:it,hearthLight:j}=f,{mouthMat:N,coreMat:st,fireLight:at,chimneyTop:$,emberBase:ot,waterTex:nt,fallTex:Q,mists:St,skyBoat:Yt,airship:ce}=u,{CROWS:gt}=p,{skyDome:Wt,cloudRing:ne}=d,ue=Object.fromEntries(Hi.map(tt=>[tt,y()*6])),jt=dS(d.crossings),re=_S(o,r,await l,{reducedMotion:t,phases:ue,start:bs,groundY:jt,flameTex:h.flameTex}),ze=Object.values(re.actors),me=()=>Object.fromEntries(Hi.map(tt=>[tt,Xi(bs[tt])]));let _e=me(),Te=null,Et=!1;const Kt=new Set,Qt={},oe=[];{const tt=new Set;for(const Se of Object.values(O)){for(const be of Object.values(Se.sides))tt.add(be.up);if(tt.add(Se.roof.R),Se.upper){const be=Se.upper;tt.add(be.U);const Ht=new Map;be.U.traverse(Oe=>{if(!(Oe instanceof Ge))return;const Fe=Oe.material;let Ve=Ht.get(Fe);Ve||(Ve=Fe.clone(),Ht.set(Fe,Ve),be.mats.push(Ve)),Oe.material=Ve})}}for(const Se of ze)tt.add(Se.root);for(const{f:Se}of R)tt.add(Se);for(const Se of M)tt.add(Se.o);for(const Se of w)tt.add(Se);for(const Se of gt)tt.add(Se);[q.g,it.g,Yt,ce,ne,Wt].forEach(Se=>tt.add(Se)),r.updateMatrixWorld(!0);const yt=new Map,zt=["position","normal","uv"],le=Se=>{if(tt.has(Se))return;for(const fe of[...Se.children])le(fe);if(!(Se instanceof Ge)||Se instanceof fo||Se.children.length||Array.isArray(Se.material))return;const be=Se.material,Ht=Se.geometry;if(be.transparent||be.vertexColors||be.isShaderMaterial||be.depthWrite===!1||!Ht.attributes.uv||!Ht.attributes.normal||Ht.attributes.color)return;const Oe=Ht.index?Ht.toNonIndexed():Ht.clone();for(const fe of Object.keys(Oe.attributes))zt.includes(fe)||Oe.deleteAttribute(fe);Oe.morphAttributes={},Oe.clearGroups(),Oe.applyMatrix4(Se.matrixWorld);const Fe=be.uuid+(Se.castShadow?"s":"n"),Ve=yt.get(Fe);Ve?Ve.geos.push(Oe):yt.set(Fe,{m:be,cast:Se.castShadow,geos:[Oe]}),Se.parent?.remove(Se)};le(r);for(const{m:Se,cast:be,geos:Ht}of yt.values()){const Oe=Ch(Ht,!1);if(!Oe){console.warn("could not merge",Se.type);continue}const Fe=new Ge(Oe,Se);Fe.castShadow=be,Fe.receiveShadow=!0,Fe.matrixAutoUpdate=!1,r.add(Fe)}const Le=new Yn({visible:!1});for(const[Se,be]of Object.entries(O)){const Ht=be.top+be.roof.hR,Oe=new Ge(new Pt(be.r.w+.6,Ht,be.r.d+.6),Le);Oe.position.set(be.r.x,Ht/2,be.r.z),Oe.rotation.y=be.r.ry||0,Oe.userData.houseId=Se,r.add(Oe),Oe.updateMatrixWorld(!0),oe.push(Oe)}}const Lt=new hi($n.fov,e/n,$n.near,$n.far),Ae={t:new G(...$n.home.target),p:new G(...$n.home.position)};Lt.position.copy(Ae.p);const Zt=new t1(Lt,i.domElement);Zt.target.copy(Ae.t),Zt.enableDamping=!0,Zt.dampingFactor=.08,Zt.minDistance=$n.minDistance,Zt.maxDistance=$n.maxDistance,Zt.maxPolarAngle=$n.maxPolarAngle,Zt.minPolarAngle=$n.minPolarAngle,Zt.screenSpacePanning=!1,Zt.zoomSpeed=.8,Zt.update();function Ut(){const tt=Zt.target,yt=Math.hypot(tt.x,tt.z),zt=$n.targetRadius;if(yt>zt){const le=zt/yt;Lt.position.x-=tt.x*(1-le),Lt.position.z-=tt.z*(1-le),tt.x*=le,tt.z*=le}if(tt.y<$n.targetMinY||tt.y>$n.targetMaxY){const le=Math.max($n.targetMinY,Math.min($n.targetMaxY,tt.y));Lt.position.y+=le-tt.y,tt.y=le}Lt.position.y<$n.minHeight&&(Lt.position.y=$n.minHeight)}let Ct=null,Ft=null,L=null,te=!1;function Jt(tt,yt){if(t){Zt.target.copy(tt),Lt.position.copy(yt),Zt.update();return}Ct={t0:performance.now(),dur:1100,ft:Zt.target.clone(),fp:Lt.position.clone(),tt,tp:yt}}function qt(tt){if(Ft=null,tt==="overview"){L=null,Jt(Ae.t.clone(),Ae.p.clone());return}const yt=O[tt];L=tt,yt&&(yt.view="ground");const zt=S1(tt,[Lt.position.x-Zt.target.x,Lt.position.z-Zt.target.z]);Jt(new G(...zt.target),new G(...zt.position))}let Rt=null,ee=null,Mt=null,lt=null;const C=new Df,S=new It,J=ze.map(tt=>tt.root);function vt(tt){const yt=i.domElement.getBoundingClientRect();if(yt.width===0||yt.height===0)return null;S.set((tt.clientX-yt.left)/yt.width*2-1,-((tt.clientY-yt.top)/yt.height)*2+1),C.setFromCamera(S,Lt);for(let zt=C.intersectObjects(J,!0)[0]?.object??null;zt;zt=zt.parent){const le=zt.userData.agentId;if(le)return le}return null}const pt=()=>{Ct=null,Ft=null,Mt=null,Rt?.()};let Nt=0;const Bt=tt=>{Ct=null,Ft=null,lt={x:tt.clientX,y:tt.clientY,moved:!1}},xt=tt=>{!lt&&tt.pointerType==="mouse"&&tt.timeStamp-Nt>90&&(Nt=tt.timeStamp,i.domElement.style.cursor=vt(tt)?"pointer":""),!(!lt||lt.moved||Math.hypot(tt.clientX-lt.x,tt.clientY-lt.y)<=4)&&(lt.moved=!0,pt())},wt=tt=>{const yt=lt&&!lt.moved;if(lt=null,tt.type!=="pointerup"||!yt)return;const zt=vt(tt);zt&&ee?.(zt)},W=[["pointerdown",Bt],["pointermove",xt],["pointerup",wt],["pointercancel",wt],["wheel",pt],["keydown",tt=>{tt.key.startsWith("Arrow")&&pt()}]];for(const[tt,yt]of W)i.domElement.addEventListener(tt,yt,{passive:!0});Zt.listenToKeyEvents(i.domElement);const _t=tt=>{if(!Mt)return!1;const yt=Qn[_e[Mt].spot];return yt.room===tt.id&&!yt.out},mt=tt=>te||L===tt.id||!!tt.near||_t(tt);function Xt(tt,yt){const zt=Zt.target,le=Math.hypot(tt.r.x-zt.x,tt.r.z-zt.z),Le=Math.max(tt.r.w,tt.r.d)*.8+9;tt.near=tt.near?yt<72&&le<Le+4:yt<64&&le<Le}function et(tt,yt,zt){if(zt.fading!==yt){zt.fading=yt;for(const le of tt)le.transparent=yt,le.needsUpdate=!0}}function K(tt,yt,zt){const le=yt?0:1;tt.s+=(le-tt.s)*zt,Math.abs(tt.s-le)<.004&&(tt.s=le),tt.up.scale.y=Math.max(.001,tt.s),tt.up.visible=tt.s>.03}function dt(tt){const yt=Lt.position.distanceTo(Zt.target),zt=t?1:Math.min(1,tt*5),le=t?1:Math.min(1,tt*6);for(const Le of Object.values(O)){Xt(Le,yt);const Se=mt(Le),be=Se&&!!Le.upper&&Le.view==="upper",Ht=Se?1:0;Le.lift+=(Ht-Le.lift)*zt,Math.abs(Le.lift-Ht)<.002&&(Le.lift=Ht);const Oe=Le.roof;Oe.R.position.y=Oe.base+Le.lift*3.4,Oe.R.visible=Le.lift<.97;for(const tn of Oe.mats)tn.opacity=1-Le.lift;const Fe=Lt.position.x-Le.r.x,Ve=Lt.position.z-Le.r.z,fe=Math.hypot(Fe,Ve)||1,Ze=Math.cos(Le.r.ry||0),Ln=Math.sin(Le.r.ry||0),Dn=tn=>{const Rn=((tn.n[0]*Ze+tn.n[1]*Ln)*Fe+(-tn.n[0]*Ln+tn.n[1]*Ze)*Ve)/fe;return Rn>.32?tn.wish=!0:Rn<.06&&(tn.wish=!1),!!tn.wish};for(const tn of Object.values(Le.sides))K(tn,Se&&!be&&Dn(tn),le);if(Le.upper){const tn=Le.upper,Rn=Se&&!be?1:0;tn.lift+=(Rn-tn.lift)*zt,Math.abs(tn.lift-Rn)<.002&&(tn.lift=Rn),et(tn.mats,tn.lift>0,tn),tn.U.position.y=tn.top+tn.lift*3.4,tn.U.visible=tn.lift<.97;for(const Ji of tn.mats)Ji.opacity=1-tn.lift;for(const Ji of Object.values(tn.sides))K(Ji,be&&Dn(Ji),le)}}}function Dt(tt,yt,zt,le,Le,Se){const be=new dn;be.setAttribute("position",new Gn(new Float32Array(tt*3),3));const Ht=new Wr(be,new Qr({color:yt,size:zt,map:le,transparent:!0,opacity:Le,depthWrite:!1,blending:le?lr:Ei}));return Ht.frustumCulled=!1,Ht.userData.seed=Float32Array.from({length:tt},()=>Math.random()),Ht.userData.h=Float32Array.from({length:tt},()=>Math.random()*Se),Ht.userData.top=Se,Ht.visible=!t,r.add(Ht),Ht}const x=[{at:$,p:Dt(30,"#d8cfc6",2.2,v.soft,.5,9),heat:!0}];for(const tt of Object.values(O)){if(!tt.roof.smokeAt)continue;tt.g.updateMatrixWorld(!0);const yt=tt.roof.R.localToWorld(new G(...tt.roof.smokeAt));x.push({at:yt,p:Dt(14,"#d8cfc6",1.4,v.soft,.45,5),house:tt})}const k=Dt(60,"#ffb04a",.11,null,.9,4),X=[];for(let tt=0;tt<4;tt++){const yt=new Wi(new ds({map:v.spark,color:tt%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ei}));yt.scale.setScalar(.25),q.g.add(yt),X.push(yt)}const F=tt=>{const yt=new Wi(new ds({map:v.spark,color:tt%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ei}));return yt.scale.setScalar(.22),yt.raycast=()=>{},yt},rt=["yard-1","yard-2"].map((tt,yt)=>{const zt=Qn[tt],le=new Tt;le.position.set(zt.x+Math.sin(zt.ry)*1.1,1.2,zt.z+Math.cos(zt.ry)*1.1);const Le=[0,1,2].map(F);return le.add(...Le),r.add(le),{spot:tt,sprites:Le,ph:yt*1.7}}),ct={};for(const tt of["frontend","backend"]){const yt=re.actors[tt].root.getObjectByName("mixamorigRightHand");if(!yt)continue;const zt=new Tt,le=new Ge(new se(.055,.05,.13,10),g(m.woodL)),Le=new Ge(new se(.057,.057,.025,10),g("#f3ead2"));Le.position.y=.075,zt.add(le,Le),zt.position.set(0,.09,.05),yt.add(zt),re.actors[tt].root.updateMatrixWorld(!0),zt.scale.setScalar(1/yt.getWorldScale(new G).x),zt.visible=!1,ct[tt]=zt}const kt=[];{const tt=new Set;for(const zt of Object.values(O)){tt.add(zt.roof.R);for(const le of Object.values(zt.sides))tt.add(le.up);if(zt.upper){tt.add(zt.upper.U);for(const le of Object.values(zt.upper.sides))tt.add(le.up)}}r.updateMatrixWorld(!0);const yt=[];r.traverse(zt=>{zt instanceof cs&&yt.push(zt)});for(const zt of yt){const le=[];let Le=!1;for(let Se=zt.parent,be=0;Se&&be<40;Se=Se.parent,be++)tt.has(Se)&&le.push(Se),Se.userData.agentId&&(Le=!0);Le||(r.attach(zt),le.length&&kt.push({l:zt,anc:le,base:zt.intensity}))}}function ve(){for(const tt of kt)tt.anc.every(zt=>zt.visible)?tt.l.intensity===0&&(tt.l.intensity=tt.base):tt.l.intensity=0}const Ee=1;r.updateMatrixWorld(!0);const Ne=[];for(const{f:tt,s:yt}of R){if(yt<1.3)continue;let zt=tt,le=!1;for(let Le=0;zt&&Le<40;Le++)zt.userData.movesWithWall===!0&&(le=!0),zt=zt.parent;le||Ne.push(tt.getWorldPosition(new G))}function ge(tt){const yt=new dn;yt.setAttribute("position",new Gn(new Float32Array(tt*3),3)),yt.setAttribute("color",new Gn(new Float32Array(tt*3),3));const zt=new Wr(yt,new Qr({size:.09,map:v.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1}));return zt.frustumCulled=!1,zt.visible=!t,r.add(zt),zt}const Ye=ge(Math.max(1,Ne.length*7)),Me=Ye.geometry.attributes.position.count,ie={src:Float32Array.from({length:Me},(tt,yt)=>yt%Math.max(1,Ne.length)),life:Float32Array.from({length:Me},()=>Math.random()),sd:Float32Array.from({length:Me},()=>Math.random())},we=240,xn=new Wr(new dn,new Qr({size:.07,map:v.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Ei}));xn.geometry.setAttribute("position",new Gn(new Float32Array(we*3),3));const bn=Float32Array.from({length:we*3},()=>Math.random());xn.frustumCulled=!1,xn.visible=!t,r.add(xn);const Vn=80,ni=new cn(.16,.1),E=new fo(ni,g("#ffffff",{side:yn}),Vn),I=[];for(let tt=0;tt<Vn;tt++)E.setColorAt(tt,D.set(b([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),I.push({x:T(-30,30),y:T(0,12),z:T(-30,30),r:T(0,6),v:T(.5,.9),w:T(1,3)});E.instanceColor&&(E.instanceColor.needsUpdate=!0),E.frustumCulled=!1,E.visible=!t,r.add(E);const V=new Ue,Z=new Sn,ut=new Yi,U=new G,A=new G(1,1,1);function ft(tt,yt){const zt=Ye.geometry.attributes.position,le=Ye.geometry.attributes.color;for(let be=0;be<zt.count;be++){const Ht=Ne[ie.src[be]];if(!Ht)break;ie.life[be]=ie.life[be]+yt*(.35+ie.sd[be]*.4),ie.life[be]>1&&(ie.life[be]=ie.life[be]-1);const Oe=ie.life[be],Fe=ie.sd[be];zt.setXYZ(be,Ht.x+Math.sin(tt*(1+Fe)+Fe*20)*.25*Oe,Ht.y+.2+Oe*2.2,Ht.z+Math.cos(tt*(.8+Fe)+Fe*9)*.25*Oe);const Ve=(1-Oe)*(.6+.4*Math.sin(tt*13+Fe*30))*2.2;le.setXYZ(be,Ve,Ve*.48,Ve*.16)}zt.needsUpdate=!0,le.needsUpdate=!0;const Le=xn.geometry.attributes.position,Se=Zt.target;for(let be=0;be<we;be++){const Ht=bn[be*3],Oe=bn[be*3+1],Fe=bn[be*3+2],Ve=((Ht*44+tt*.25*(Oe-.5)-Se.x)%44+66)%44-22,fe=((Oe*44+tt*.18*(Ht-.3)-Se.z)%44+66)%44-22;Le.setXYZ(be,Se.x+Ve,.6+Fe*9+Math.sin(tt*.5+Ht*20)*.4,Se.z+fe)}Le.needsUpdate=!0;for(let be=0;be<Vn;be++){const Ht=I[be];Ht.y-=yt*Ht.v,Ht.y<.05&&(Ht.y=T(8,13),Ht.x=Se.x+T(-28,28),Ht.z=Se.z+T(-28,28)),U.set(Ht.x+Math.sin(tt*.9+Ht.r)*.9,Ht.y,Ht.z+Math.cos(tt*.7+Ht.r)*.6),ut.set(tt*Ht.w+Ht.r,tt*.6+Ht.r,Math.sin(tt*2+Ht.r)*1.2),V.compose(U,Z.setFromEuler(ut),A),E.setMatrixAt(be,V)}E.instanceMatrix.needsUpdate=!0}r.traverse(tt=>{const yt=tt.material;(tt instanceof Wr||tt instanceof Wi||tt.userData.noLine||yt&&!Array.isArray(yt)&&(yt.blending===Ei||yt.depthWrite===!1))&&tt.layers.set(Ee)});for(const tt of[ne,E,Wt])tt.traverse(yt=>yt.layers.set(Ee));Lt.layers.enable(Ee);const _=new vm({side:yn}),P=new ei(1,1,{type:ti});P.depthTexture=new Os(1,1),P.depthTexture.type=Li;const H=new ye(.5,.5,1),Y=new ye;function z(){r.overrideMaterial=_,Lt.layers.disable(Ee);const tt=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(Y);const yt=i.getClearAlpha();i.setClearColor(H,1),i.setRenderTarget(P),i.clear(),i.render(r,Lt),i.setRenderTarget(null),i.setClearColor(Y,yt),i.shadowMap.autoUpdate=tt,Lt.layers.enable(Ee),r.overrideMaterial=null}const ht=new _1(i,new ei(1,1,{type:ti,samples:4}));ht.setPixelRatio(i.getPixelRatio()),ht.addPass(new v1(r,Lt));const At="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",bt=new zc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new It},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:At,fragmentShader:`#include <packing>
    uniform sampler2D tDiffuse, tNormal, tDepth; uniform vec2 texel; uniform float width, near, far; varying vec2 vUv;
    float vz(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
    vec3 nr(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float z = vz(vUv);
      if (z > far * 0.98) { gl_FragColor = c; return; }
      vec2 ox = vec2(texel.x * width, 0.0), oy = vec2(0.0, texel.y * width);
      float zl = vz(vUv - ox), zr = vz(vUv + ox), zu = vz(vUv + oy), zd = vz(vUv - oy);
      // silhouettes: neighbours fall away behind this pixel (second difference, so flat ground stays clean)
      float d2 = max(zl + zr - 2.0 * z, zu + zd - 2.0 * z) / z;
      float sil = smoothstep(0.012, 0.03, d2);
      // creases: the surface turns sharply
      vec3 n = nr(vUv);
      float cr = max(1.0 - dot(n, nr(vUv + ox)), 1.0 - dot(n, nr(vUv + oy)));
      float crease = smoothstep(0.28, 0.5, cr);
      float line = max(sil, crease) * (1.0 - 0.6 * smoothstep(70.0, 260.0, z));
      vec3 ink = c.rgb * vec3(0.26, 0.2, 0.24) + vec3(0.012, 0.004, 0.01);
      gl_FragColor = vec4(mix(c.rgb, ink, line * 0.9), c.a);
    }`});ht.addPass(bt);const Gt=new xr(new It(e,n),.42,.55,.88);X1(Gt),ht.addPass(Gt),ht.addPass(new x1);const $t=new zc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new It},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:At,fragmentShader:`#include <packing>
    uniform sampler2D tDiffuse, tDepth; uniform vec2 texel; uniform float near, far, focus, dof, time, ca; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      float z = -perspectiveDepthToViewZ(texture2D(tDepth, vUv).x, near, far);
      float coc = clamp((abs(z - focus) / focus - 0.35) * 1.3, 0.0, 1.0) * dof;
      vec2 dc = vUv - 0.5, cao = dc * dot(dc, dc) * ca * 4.0;
      vec3 col;
      if (coc < 0.5) col = vec3(texture2D(tDiffuse, vUv + cao).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - cao).b);
      else {
        col = vec3(0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i), r = sqrt((fi + 0.5) / 12.0) * coc, a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * r * texel;
          col += vec3(texture2D(tDiffuse, vUv + o + cao).r, texture2D(tDiffuse, vUv + o).g, texture2D(tDiffuse, vUv + o - cao).b);
        }
        col /= 12.0;
      }
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.12);
      col = (col - 0.5) * 1.07 + 0.5;
      col *= mix(vec3(0.9, 0.97, 1.08), vec3(1.05, 1.0, 0.93), smoothstep(0.15, 0.75, l));
      col *= mix(0.8, 1.0, 1.0 - smoothstep(0.35, 0.95, length(dc * vec2(1.0, 0.8))));
      col += (hash(vUv / texel + fract(time) * 91.0) - 0.5) * 0.028;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`});ht.addPass($t);const ae=bt.uniforms,de=$t.uniforms,Vt=(tt,yt)=>tt[yt];Vt(ae,"tDepth").value=P.depthTexture,Vt(de,"tDepth").value=P.depthTexture;function Ie(tt,yt){const zt=i.getPixelRatio();i.setSize(tt,yt),ht.setSize(tt,yt),Gt.setSize(tt,yt),P.setSize(Math.floor(tt*zt),Math.floor(yt*zt)),Vt(ae,"texel").value.set(1/(tt*zt),1/(yt*zt)),Vt(de,"texel").value.copy(Vt(ae,"texel").value),Vt(ae,"width").value=Math.max(1,zt*.85),Lt.aspect=tt/yt,Qe()}let je=null,Ce=!1,Re=xd,qe=null;const he=()=>b1(e,n,je)??xd;function gn(tt){Re=tt,tt.x===0&&tt.y===0?Lt.clearViewOffset():Lt.setViewOffset(e,n,tt.x,tt.y,e,n)}function Qe(){qe=null,gn(he())}for(const tt of[ae,de])Vt(tt,"near").value=Lt.near,Vt(tt,"far").value=Lt.far;Ie(e,n);let An=0,wn="",li=-1,Wn=0,qn=0,Je=!1;const ke=new G,rn=new G,He={};let Ke={},ln=Number.NEGATIVE_INFINITY;const vn=24301,Kn=new Set(["idle","done"]),ps={};let ui=null,Ui=null,ms="";function Er(){if(!Ui)return;const tt={};for(const zt of ze){const le=_e[zt.id];tt[zt.id]=Qn[le.next??le.walk?.to??le.spot].room}const yt=ze.map(zt=>tt[zt.id]).join();yt!==ms&&(ms=yt,Ui(tt))}const Oi=new G;function bo(){if(!ui)return;const tt={};for(const yt of ze){yt.root.getWorldPosition(Oi),Oi.y+=Ds[yt.id].H*(ps[yt.id]?.74:1)+.25,Oi.project(Lt);const zt=!!He[yt.id],le=zt?null:Qn[_e[yt.id].spot].room;tt[yt.id]={x:Oi.x,y:Oi.y,z:Oi.z,walking:zt,room:le}}ui(tt)}function wo(tt){li<0&&(li=tt);const yt=(tt-li)/1e3,zt=Math.min(.05,yt-Wn);Wn=yt;for(const Ht of ze){const Oe=Ds[Ht.id].speed;let Fe=Ol(_e[Ht.id],tt,Oe,t);if(Te&&Et&&!Fe.walk&&Fe.spot===op[Ht.id]&&$a(Ht.id,Te,Et,Kt)===Fe.spot){for(const Ji of Te.tasks)Ji.owner===Ht.id&&Kt.add(Ji.id);const Rn=$a(Ht.id,Te,Et,Kt);Rn&&(Fe=Ul(Fe,Rn,tt,Oe,t,la[Ht.id]))}_e[Ht.id]=Fe;const Ve=Gc(Fe,tt);if(Ht.root.position.x=Ve.x,Ht.root.position.z=Ve.z,Ve.walking){const Rn=Ve.heading-Ht.root.rotation.y;Ht.root.rotation.y+=Math.atan2(Math.sin(Rn),Math.cos(Rn))*Math.min(1,zt*10)}else Ht.root.rotation.y=Ve.heading;const fe=jt(Ht.root.position.x,Ht.root.position.z);Ht.root.position.y+=(fe-Ht.root.position.y)*Math.min(1,zt*12);const Ze=Fl(Fe,tt),Ln=Qn[Fe.spot].pose,Dn=R1({walking:Ve.walking,pose:Ln,held:Ze,needsYou:Te?.agents[Ht.id].state==="needs-you",hasRaise:!!Ht.model.acts.raise_hand});Qt[Ht.id]=P1(Ht.id,{spot:Fe.spot,walking:Ve.walking,held:Ze,state:Te?.agents[Ht.id].state??null}),He[Ht.id]=Ve.walking,ps[Ht.id]=!Ve.walking&&(Dn==="sit"||Ph.has(Ln)),re.lanternFor(Ht,Dn,yt),re.drive(Ht,Dn,zt,Ve.walking?null:Fe.spot,Fe.walk?Fe.walk.speed/Oe:1);const tn=ct[Ht.id];if(tn){const Rn=Ke[Ht.id];tn.visible=!!Rn&&Rn.act.prop==="mug"&&!Ve.walking&&Fe.spot===Rn.act.spot}}if(Te&&tt-ln>=250){ln=tt;const Ht=new Set(Hi.filter(Ve=>Kn.has(Te?.agents[Ve].state??"idle"))),Oe={};for(const Ve of Hi){const fe=_e[Ve];Oe[Ve]={spot:fe.spot,to:fe.walk?.to??null,walking:!!He[Ve]}}const Fe=N1(Ke,Ht,Oe,tt,{seed:vn,reducedMotion:t});Ke=Fe.runs;for(const[Ve,fe]of Object.entries(Fe.to))_e[Ve]=Ul(_e[Ve],fe,tt,Ds[Ve].speed,t,la[Ve])}const le=!!Qt.frontend&&Te?.agents.frontend.state==="writing",Le=T1(An),Se=Le.heat,be=E1(yt,t);Le.mouth!==wn&&(wn=Le.mouth,N.emissive.set(Le.mouth)),N.emissiveIntensity=.9+Se*1.4+be,st.emissiveIntensity=1.2+Se*1.8+be,at.intensity=8+Se*16+be*20;for(const[Ht,Oe]of[[q,"frontend"],[it,"backend"]]){const Fe=!!Qt[Oe],Ve=Ht.screen?.material;Ve&&(Ve.opacity+=((Fe?1:.3)-Ve.opacity)*Math.min(1,zt*4)),Ht.light&&(Ht.light.intensity=Fe?3.5:0)}if(dt(zt),!t){for(const{f:fe,ph:Ze}of R){const Ln=1+Math.sin(yt*11+Ze)*.16+Math.sin(yt*27+Ze*2)*.08;fe.scale.set(1/Math.sqrt(Ln),Ln,1/Math.sqrt(Ln))}for(const fe of B)fe.l.intensity=fe.base*(1+Math.sin(yt*9+fe.ph)*.12+Math.sin(yt*23+fe.ph)*.06);j.intensity=11+Math.sin(yt*7)*1.5;for(const fe of M)fe.o.rotation[fe.axis]+=zt*fe.v,fe.bob&&(fe.o.position.y=(fe.y0??0)+Math.sin(yt*1.6)*.06);const Ht=Math.abs(Math.sin(yt*5.2+ue.frontend));X.forEach((fe,Ze)=>{const Ln=le&&Ht<.25;fe.material.opacity=Ln?1-Ht*4:0,fe.position.set(-.4+Ze*.19,.95+Ze%2*.12+(Ln?(.25-Ht)*.8:0),Ze%2*.08-.29),fe.material.rotation=yt*3+Ze});for(const fe of rt){const Ze=["frontend","backend"].some(Dn=>{const tn=Ke[Dn];return tn?.act.prop==="sparks"&&tn.act.spot===fe.spot&&_e[Dn].spot===fe.spot&&!He[Dn]}),Ln=Math.abs(Math.sin(yt*.9+fe.ph));fe.sprites.forEach((Dn,tn)=>{const Rn=Ze&&Ln>.97;Dn.material.opacity=Rn?(Ln-.97)*33:0,Dn.position.set((tn-1)*.16,tn%2*.1+(Rn?(1-Ln)*6:0),0),Dn.material.rotation=yt*3+tn})}q.kb&&(q.kb.position.y=q.kb.userData.y0+(le&&Ht<.2?.03:0));const Oe=k.geometry.attributes.position,Fe=k.userData.h,Ve=k.userData.seed;for(let fe=0;fe<Oe.count;fe++){const Ze=Ve[fe];Fe[fe]=Fe[fe]+zt*(.5+Ze*.7)*(.5+Se),Fe[fe]>k.userData.top&&(Fe[fe]=0),Oe.setXYZ(fe,ot.x+Math.sin(yt*(.6+Ze)+Ze*10)*.8*Ze,ot.y+Fe[fe],ot.z+Math.cos(yt*.7+Ze*7)*.5*Ze)}Oe.needsUpdate=!0,k.material.opacity=Math.min(.95,.2+Se*.5);for(const fe of x){const Ze=fe.p,Ln=Ze.geometry.attributes.position,Dn=Ze.userData.h,tn=Ze.userData.seed,Rn=fe.house?fe.house.lift:0;Ze.visible=Rn<.5;const Ji=fe.heat?.6+Se:.7;for(let $i=0;$i<Ln.count;$i++){const Ja=tn[$i];Dn[$i]=Dn[$i]+zt*(.5+Ja*.4)*Ji,Dn[$i]>Ze.userData.top&&(Dn[$i]=0);const Bs=Dn[$i];Ln.setXYZ($i,fe.at.x+Math.sin(Bs*.8+Ja*6)*Bs*.16+Bs*.3,fe.at.y+Bs,fe.at.z+Math.cos(Bs*.6+Ja*4)*Bs*.14)}Ln.needsUpdate=!0}Q.offset.y=(Q.offset.y+zt*1.6)%1,nt.offset.x=(nt.offset.x+zt*.12)%1,ne.rotation.y+=zt*.004,St.forEach((fe,Ze)=>{fe.material.opacity=.42+Math.sin(yt*.8+Ze)*.1});for(const fe of gt){const Ze=fe.userData;Ze.a+=zt*Ze.s,fe.position.set(Math.cos(Ze.a)*Ze.r,Ze.y+Math.sin(Ze.a*3)*.8,Math.sin(Ze.a)*Ze.r),fe.rotation.y=-Ze.a,fe.children[3].rotation.z=Math.sin(yt*10+Ze.r)*.6,fe.children[4].rotation.z=-Math.sin(yt*10+Ze.r)*.6}w.forEach((fe,Ze)=>{fe.rotation.y=Math.sin(yt*2+Ze)*.3}),Yt.position.y=-.4+Math.sin(yt*.9)*.2,Yt.rotation.x=Math.sin(yt*.7)*.03;{const fe=ce.userData;fe.a+=zt*.022,ce.position.set(Math.cos(fe.a)*fe.r,fe.y+Math.sin(yt*.5)*.8,Math.sin(fe.a)*fe.r),ce.rotation.y=Math.atan2(-Math.cos(fe.a),-Math.sin(fe.a))}}if(Ft&&(re.actors[Ft].root.getWorldPosition(rn),rn.y+=.8),Ct){Ft&&(Ct.tp.add(rn).sub(Ct.tt),Ct.tt.copy(rn));const Ht=Math.min(1,(performance.now()-Ct.t0)/Ct.dur),Oe=Ht<.5?4*Ht*Ht*Ht:1-Math.pow(-2*Ht+2,3)/2;Zt.target.lerpVectors(Ct.ft,Ct.tt,Oe),Lt.position.lerpVectors(Ct.fp,Ct.tp,Oe),Ht>=1&&(Ct=null)}else if(Ft)if(!He[Ft])Ft=null;else{const Ht=rn.sub(Zt.target).multiplyScalar(Math.min(1,zt*4));Zt.target.add(Ht),Lt.position.add(Ht)}else if(Mt){re.actors[Mt].root.getWorldPosition(ke),ke.y+=.8;const Ht=ke.sub(Zt.target).multiplyScalar(t?1:Math.min(1,zt*4));Zt.target.add(Ht),Lt.position.add(Ht)}if(qe){const Ht=performance.now()-qe.t0;gn(vd(qe.from,qe.to,Ht,t)),(t||Ht>=kc)&&(qe=null)}ve(),Zt.update(),Ut(),bo(),Er(),t||ft(yt,zt),Wt.position.copy(Lt.position),Vt(de,"focus").value=Lt.position.distanceTo(Zt.target),Vt(de,"time").value=t?0:yt,z(),ht.render(),qn++}return{renderer:i,scene:r,camera:Lt,controls:Zt,housePicks:oe,houses:O,agentPhase:ue,cast:re,groundY:jt,place(tt,yt){const zt=Qn[yt];re.actors[tt].root.position.y=jt(zt.x,zt.z),_e[tt]=Xi(yt,performance.now())},update(tt,yt){Te=tt,Et=yt,An=rp(tt);const zt=performance.now();for(const le of Hi){const Le=Kn.has(tt.agents[le].state)?Ke[le]:void 0,Se=Le?Le.act.spot:$a(le,tt,Et,Kt);Se&&(_e[le]=Ul(_e[le],Se,zt,Ds[le].speed,t,la[le]))}},land(){const tt=performance.now();for(const yt of Hi)_e[yt]=Kf(_e[yt],tt)},restart(){_e=me(),Kt.clear(),Ke={}},whereIs(tt){const yt=performance.now(),zt=Ol(_e[tt],yt,Ds[tt].speed,t),le=Gc(zt,yt).walking,Le=le?zt.walk:null;return{spot:zt.spot,to:Le?.to??null,path:Le?.path??null,walking:le,held:Fl(zt,yt)}},get frames(){return qn},start(){Je=!1,i.setAnimationLoop(tt=>{Je||wo(tt)})},stop(){Je=!0,i.setAnimationLoop(null)},resize(tt,yt){e=tt,n=yt,Ie(tt,yt)},flyToRoom:qt,onHandMove(tt){return Rt=tt,()=>{Rt===tt&&(Rt=null)}},onFrame(tt){return ui=tt,()=>{ui===tt&&(ui=null)}},onRooms(tt){return Ui=tt,ms="",()=>{Ui===tt&&(Ui=null)}},onPick(tt){return ee=tt,()=>{ee===tt&&(ee=null)}},flyToAgent(tt){Mt=null;const yt=performance.now(),zt=Ol(_e[tt],yt,Ds[tt].speed,t),le=z1(zt,yt,t),Le=Qn[le.spot];L=O[Le.room]&&!Le.out?Le.room:null,Ft=le.track?tt:null;const be=!t||!zt.walk&&!Fl(zt,yt)?re.actors[tt].root.getWorldPosition(new G):new G(le.x,jt(le.x,le.z),le.z);be.y+=.8;const Ht=Lt.position.clone().sub(Zt.target);Ht.lengthSq()<1e-6&&Ht.set(.45,.85,.9),Ht.normalize(),Ht.y=Math.max(Ht.y,.6),Ht.normalize(),Jt(be,be.clone().addScaledVector(Ht,14))},follow(tt){Mt=tt,Ft=null,tt&&(Ct=null,L=null)},setOpenHouses(tt){te=tt},setFreeArea(tt){je=tt;const yt=he(),zt=!Ce;Ce=!0;const le=qe?qe.to:Re;yt.x===le.x&&yt.y===le.y||(qe={from:zt?yt:Re,to:yt,t0:performance.now()},gn(vd(qe.from,yt,0,t)))},setTasks(tt){f.drawBoard(tt)},dispose(){i.setAnimationLoop(null);for(const[tt,yt]of W)i.domElement.removeEventListener(tt,yt);Rt=null,ee=null,ui=null,Ui=null,Zt.dispose(),ht.dispose(),P.dispose(),i.dispose()}}}export{DS as createWorld};
