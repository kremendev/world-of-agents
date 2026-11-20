import{R as gi,S as li,r as ko,f as id,B as Jo,D as gc,F as Wt,a as ps,b as $o,t as Fr,c as yf,i as yr,d as Sf,C as sh,e as rh,p as Ea,g as oh,h as bf,W as Aa}from"./index-sZ7IQL_E.js";const _c="187",Gs={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wf=0,ah=1,Tf=2,Pr=1,Ef=2,Sr=3,as=0,Hn=1,gn=2,ms=0,Vs=1,Ai=2,lh=3,ch=4,Af=5,Bs=100,Rf=101,Cf=102,Pf=103,Lf=104,Df=200,If=201,Nf=202,Uf=203,sd=204,rd=205,Of=206,Ff=207,Bf=208,zf=209,kf=210,Hf=211,Gf=212,Vf=213,Wf=214,_l=0,xl=1,vl=2,Br=3,Ml=4,yl=5,Sl=6,bl=7,od=0,Xf=1,qf=2,Yi=0,xc=1,vc=2,Mc=3,ma=4,yc=5,Sc=6,bc=7,hh="attached",Yf="detached",ad=300,Ys=301,zr=302,Ra=303,Ca=304,hi=1e3,Yn=1001,Qo=1002,En=1003,ld=1004,br=1005,On=1006,Ho=1007,Ci=1008,ti=1009,cd=1010,hd=1011,kr=1012,wc=1013,vi=1014,ci=1015,Gn=1016,Tc=1017,Ec=1018,Ks=1020,ud=35902,dd=35899,fd=1021,pd=1022,_i=1023,ls=1026,ss=1027,ga=1028,Ac=1029,gs=1030,Rc=1031,Cc=1033,Go=33776,Vo=33777,Wo=33778,Xo=33779,wl=35840,Tl=35841,El=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Ll=37488,Dl=37489,jo=37490,Il=37491,Nl=37808,Ul=37809,Ol=37810,Fl=37811,Bl=37812,zl=37813,kl=37814,Hl=37815,Gl=37816,Vl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Kl=36492,Zl=36494,Jl=36495,$l=36283,Ql=36284,ea=36285,jl=36286,Kf=2200,Zf=2201,Jf=2202,Hr=2300,Gr=2301,Pa=2302,uh=2303,ks=2400,Hs=2401,ta=2402,Pc=2500,$f=2501,Qf=0,md=1,ec=2,jf=3200,Vr=0,ep=1,Vi="",Tn="srgb",ii="srgb-linear",na="linear",ln="srgb",La=7680,tp=519,np=512,ip=513,sp=514,gd=515,rp=516,op=517,_d=518,xd=519,vd=35044,dh="300 es",xi=2e3,Wr=2001;function ap(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cp(){const s=Xr("canvas");return s.style.display="block",s}const fh={};function ia(...s){const e="THREE."+s.shift();console.log(e,...s)}function Md(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=Md(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Gt(...s){s=Md(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ws(...s){const e=s.join(" ");e in fh||(fh[e]=!0,It(...s))}function hp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const up={[_l]:_l,[vl]:Sl,[Ml]:Ml,[Br]:yl,[xl]:xl,[Sl]:vl,[bl]:bl,[yl]:Br};class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const Lr=Math.PI/180,Zs=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Lc(s,e){return(s%e+e)%e}function dp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fp(s,e,t){return s!==e?(t-s)/(e-s):0}function Dr(s,e,t){return(1-t)*s+t*e}function pp(s,e,t,n){return Dr(s,e,1-Math.exp(-t*n))}function mp(s,e=1){return e-Math.abs(Lc(s,e*2)-e)}function gp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vp(s,e){return s+Math.random()*(e-s)}function Mp(s){return s*(.5-Math.random())}function yp(s){s!==void 0&&(ph=s);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(s){return s*Lr}function bp(s){return s*Zs}function wp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Tp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ep(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _a(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dc(s,e){if(e.constructor===Float32Array)return s;const t=_a(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ic(s,e){if(e.constructor===Float32Array)return s;const t=_a(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const sa={DEG2RAD:Lr,RAD2DEG:Zs,generateUUID:Mi,clamp:Kt,euclideanModulo:Lc,mapLinear:dp,inverseLerp:fp,lerp:Dr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:xp,randFloat:vp,randFloatSpread:Mp,seededRandom:yp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:wp,ceilPowerOfTwo:Tp,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Ep,normalize:Ic,denormalize:Dc},eh=class eh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eh.prototype.isVector2=!0;let Oe=eh;class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*u-c*f,e[t+1]=l*p+h*f+c*d-a*u,e[t+2]=c*p+h*u+a*f-l*d,e[t+3]=h*p-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const th=class th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this.z=Kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this.z=Kt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;let k=th;const Da=new k,mh=new _n,nh=class nh{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],M=i[1],E=i[4],w=i[7],I=i[2],P=i[5],v=i[8];return r[0]=o*x+a*M+l*I,r[3]=o*m+a*E+l*P,r[6]=o*g+a*w+l*v,r[1]=c*x+h*M+d*I,r[4]=c*m+h*E+d*P,r[7]=c*g+h*w+d*v,r[2]=f*x+u*M+p*I,r[5]=f*m+u*E+p*P,r[8]=f*g+u*w+p*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;let qt=nh;const Ia=new qt,gh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ap(){const s={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ln&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ln&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?na:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ii]:{primaries:e,whitePoint:n,transfer:na,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:ln,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),s}const Qt=Ap();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class Rp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Xr("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cp=0;class Nc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Na(i[o].image)):r.push(Na(i[o]))}else r=Na(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let Pp=0;const Ua=new k;class Cn extends Ji{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=Yn,i=Yn,r=On,o=Ci,a=_i,l=ti,c=Cn.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Mi(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){It(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){It(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=ad;Cn.DEFAULT_ANISOTROPY=1;const ih=class ih{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,w=(u+1)/2,I=(g+1)/2,P=(h+f)/4,v=(d+x)/4,b=(p+m)/4;return E>w&&E>I?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=v/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=P/i,r=b/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=v/r,i=b/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this.z=Kt(this.z,e.z,t.z),this.w=Kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this.z=Kt(this.z,e,t),this.w=Kt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;let dn=ih;class Lp extends Ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Cn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Nc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Lp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sd extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dp extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pa=class pa{constructor(e,t,n,i,r,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,f,u,p,x,m)}set(e,t,n,i,r,o,a,l,c,h,d,f,u,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,p=c*h,x=c*d;t[0]=f+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,p=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,u=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-u,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Np)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),$i.crossVectors(n,jn),$i.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),$i.crossVectors(n,jn)),$i.normalize(),io.crossVectors(jn,$i),i[0]=$i.x,i[4]=io.x,i[8]=jn.x,i[1]=$i.y,i[5]=io.y,i[9]=jn.y,i[2]=$i.z,i[6]=io.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],E=n[7],w=n[11],I=n[15],P=i[0],v=i[4],b=i[8],F=i[12],U=i[1],X=i[5],se=i[9],Q=i[13],N=i[2],ie=i[6],ae=i[10],K=i[14],G=i[3],te=i[7],he=i[11],be=i[15];return r[0]=o*P+a*U+l*N+c*G,r[4]=o*v+a*X+l*ie+c*te,r[8]=o*b+a*se+l*ae+c*he,r[12]=o*F+a*Q+l*K+c*be,r[1]=h*P+d*U+f*N+u*G,r[5]=h*v+d*X+f*ie+u*te,r[9]=h*b+d*se+f*ae+u*he,r[13]=h*F+d*Q+f*K+u*be,r[2]=p*P+x*U+m*N+g*G,r[6]=p*v+x*X+m*ie+g*te,r[10]=p*b+x*se+m*ae+g*he,r[14]=p*F+x*Q+m*K+g*be,r[3]=M*P+E*U+w*N+I*G,r[7]=M*v+E*X+w*ie+I*te,r[11]=M*b+E*se+w*ae+I*he,r[15]=M*F+E*Q+w*K+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],M=l*u-c*f,E=a*u-c*d,w=a*f-l*d,I=o*u-c*h,P=o*f-l*h,v=o*d-a*h;return t*(x*M-m*E+g*w)-n*(p*M-m*I+g*P)+i*(p*E-x*I+g*v)-r*(p*w-x*P+m*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],M=t*a-n*o,E=t*l-i*o,w=t*c-r*o,I=n*l-i*a,P=n*c-r*a,v=i*c-r*l,b=h*x-d*p,F=h*m-f*p,U=h*g-u*p,X=d*m-f*x,se=d*g-u*x,Q=f*g-u*m,N=M*Q-E*se+w*X+I*U-P*F+v*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/N;return e[0]=(a*Q-l*se+c*X)*ie,e[1]=(i*se-n*Q-r*X)*ie,e[2]=(x*v-m*P+g*I)*ie,e[3]=(f*P-d*v-u*I)*ie,e[4]=(l*U-o*Q-c*F)*ie,e[5]=(t*Q-i*U+r*F)*ie,e[6]=(m*w-p*v-g*E)*ie,e[7]=(h*v-f*w+u*E)*ie,e[8]=(o*se-a*U+c*b)*ie,e[9]=(n*U-t*se-r*b)*ie,e[10]=(p*P-x*w+g*M)*ie,e[11]=(d*w-h*P-u*M)*ie,e[12]=(a*F-o*X-l*b)*ie,e[13]=(t*X-n*F+i*b)*ie,e[14]=(x*E-p*I-m*M)*ie,e[15]=(h*I-d*E+f*M)*ie,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,M=l*c,E=l*h,w=l*d,I=n.x,P=n.y,v=n.z;return i[0]=(1-(x+g))*I,i[1]=(u+w)*I,i[2]=(p-E)*I,i[3]=0,i[4]=(u-w)*P,i[5]=(1-(f+g))*P,i[6]=(m+M)*P,i[7]=0,i[8]=(p+E)*v,i[9]=(m-M)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ys.set(i[0],i[1],i[2]).length();const a=ys.set(i[4],i[5],i[6]).length(),l=ys.set(i[8],i[9],i[10]).length();r<0&&(o=-o),di.copy(this);const c=1/o,h=1/a,d=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=xi,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===xi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Wr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=xi,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===xi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Wr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pa.prototype.isMatrix4=!0;let kt=pa;const ys=new k,di=new kt,Ip=new k(0,0,0),Np=new k(1,1,1),$i=new k,io=new k,jn=new k,xh=new kt,vh=new _n;class Li{constructor(e=0,t=0,n=0,i=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Up=0;const Mh=new k,Ss=new _n,Ui=new kt,so=new k,ar=new k,Op=new k,Fp=new _n,yh=new k(1,0,0),Sh=new k(0,1,0),bh=new k(0,0,1),wh={type:"added"},Bp={type:"removed"},bs={type:"childadded",child:null},Oa={type:"childremoved",child:null};class pn extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new k,t=new Li,n=new _n,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new qt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ar,so,this.up):Ui.lookAt(so,ar,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),bs.child=e,this.dispatchEvent(bs),bs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bp),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pn.DEFAULT_UP=new k(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Re extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Ba(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=Lc(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ba(o,r,e+1/3),this.g=Ba(o,r,e),this.b=Ba(o,r,e-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:It("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);It("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):It("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Qt.workingToColorSpace(zn.copy(this),e),Math.round(Kt(zn.r*255,0,255))*65536+Math.round(Kt(zn.g*255,0,255))*256+Math.round(Kt(zn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.workingToColorSpace(zn.copy(this),t);const n=zn.r,i=zn.g,r=zn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qt.workingColorSpace){return Qt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Tn){Qt.workingToColorSpace(zn.copy(this),e);const t=zn.r,n=zn.g,i=zn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(ro);const n=Dr(Qi.h,ro.h,t),i=Dr(Qi.s,ro.s,t),r=Dr(Qi.l,ro.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new At;At.NAMES=bd;class Oc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=t,this.far=n}clone(){return new Oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kp extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fi=new k,Oi=new k,za=new k,Fi=new k,ws=new k,Ts=new k,Th=new k,ka=new k,Ha=new k,Ga=new k,Va=new dn,Wa=new dn,Xa=new dn;class ai{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fi.subVectors(i,t),Oi.subVectors(n,t),za.subVectors(e,t);const o=fi.dot(fi),a=fi.dot(Oi),l=fi.dot(za),c=Oi.dot(Oi),h=Oi.dot(za),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Va.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Va.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Oi.subVectors(e,t),fi.cross(Oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ws.subVectors(i,n),Ts.subVectors(r,n),ka.subVectors(e,n);const l=ws.dot(ka),c=Ts.dot(ka);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,i);const h=ws.dot(Ha),d=Ts.dot(Ha);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(ws,o);Ga.subVectors(e,r);const u=ws.dot(Ga),p=Ts.dot(Ga);if(p>=0&&u<=p)return t.copy(r);const x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ts,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Th.subVectors(r,i),a=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(Th,a);const g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Di{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ao.subVectors(this.max,lr),Es.subVectors(e.a,lr),As.subVectors(e.b,lr),Rs.subVectors(e.c,lr),ji.subVectors(As,Es),es.subVectors(Rs,As),cs.subVectors(Es,Rs);let t=[0,-ji.z,ji.y,0,-es.z,es.y,0,-cs.z,cs.y,ji.z,0,-ji.x,es.z,0,-es.x,cs.z,0,-cs.x,-ji.y,ji.x,0,-es.y,es.x,0,-cs.y,cs.x,0];return!qa(t,Es,As,Rs,ao)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Es,As,Rs,ao))?!1:(lo.crossVectors(ji,es),t=[lo.x,lo.y,lo.z],qa(t,Es,As,Rs,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new k,new k,new k,new k,new k,new k,new k,new k],pi=new k,oo=new Di,Es=new k,As=new k,Rs=new k,ji=new k,es=new k,cs=new k,lr=new k,ao=new k,lo=new k,hs=new k;function qa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hs.fromArray(s,r);const a=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wn=new k,co=new Oe;let Hp=0;class In extends Ji{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vd,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?_a(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Dc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ic(e,this.array)}}class wd extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Td extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Gp=new Di,cr=new k,Ya=new k;class Ii{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ya)),this.expandByPoint(cr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vp=0;const si=new kt,Ka=new pn,Cs=new k,ei=new Di,hr=new Di,Dn=new k;class hn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?Td:wd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(ei.min,hr.min),ei.expandByPoint(Dn),Dn.addVectors(ei.max,hr.max),ei.expandByPoint(Dn)):(ei.expandByPoint(hr.min),ei.expandByPoint(hr.max))}ei.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dn.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Dn.add(Cs)),i=Math.max(i,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)a[F]=new k,l[F]=new k;const h=new k,d=new k,f=new k,u=new Oe,p=new Oe,x=new Oe,m=new k,g=new k;function M(F,U,X){c[F]=c[U]=c[X]=1,h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,X),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,U),x.fromBufferAttribute(r,X),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const se=1/(p.x*x.y-x.x*p.y);isFinite(se)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(se),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(se),a[F].add(m),a[U].add(m),a[X].add(m),l[F].add(g),l[U].add(g),l[X].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,U=E.length;F<U;++F){const X=E[F],se=X.start,Q=X.count;for(let N=se,ie=se+Q;N<ie;N+=3)M(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new k,I=new k,P=new k,v=new k;function b(F){P.fromBufferAttribute(i,F),v.copy(P);const U=a[F];w.copy(U),w.sub(P.multiplyScalar(P.dot(U))).normalize(),I.crossVectors(v,U);const se=I.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,se)}for(let F=0,U=n.count;F<U;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,u=e.count;f<u;f+=3){const p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new In(f,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ed{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vd,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Eh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Eh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Eh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Mi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Wn=new k;class qr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?_a(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Dc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ic(e,this.data.array)}}const Za=new k,Wp=new k,Xp=new qt;class Gi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Za.subVectors(n,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xp.getNormalMatrix(e),i=this.coplanarPoint(Za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qp=0;class ni extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Vs,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){It(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){It(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class os extends ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ps;const ur=new k,Ls=new k,Ds=new k,Is=new Oe,dr=new Oe,Ad=new kt,ho=new k,fr=new k,uo=new k,Ah=new Oe,Ja=new Oe,Rh=new Oe;class Zi extends pn{constructor(e=new os){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ed(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new qr(n,3,0,!1)),Ps.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;fo(ho.set(-.5,-.5,0),Ds,o,Ls,i,r),fo(fr.set(.5,-.5,0),Ds,o,Ls,i,r),fo(uo.set(.5,.5,0),Ds,o,Ls,i,r),Ah.set(0,0),Ja.set(1,0),Rh.set(1,1);let a=e.ray.intersectTriangle(ho,fr,uo,!1,ur);if(a===null&&(fo(fr.set(-.5,.5,0),Ds,o,Ls,i,r),Ja.set(0,1),a=e.ray.intersectTriangle(ho,uo,fr,!1,ur),a===null))return;const l=e.ray.origin.distanceTo(ur);l<e.near||l>e.far||t.push({distance:l,point:ur.clone(),uv:ai.getInterpolation(ur,ho,fr,uo,Ah,Ja,Rh,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function fo(s,e,t,n,i,r){Is.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(dr.x=r*Is.x-i*Is.y,dr.y=i*Is.x+r*Is.y):dr.copy(Is),s.copy(e),s.x+=dr.x,s.y+=dr.y,s.applyMatrix4(Ad)}const zi=new k,$a=new k,po=new k,mo=new k;class er{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$a.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($a).addScaledVector(po,f),u}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,E=n.z-o.z,w=Math.abs(l),I=Math.abs(c),P=Math.abs(h);let v,b,F,U,X,se,Q,N,ie,ae,K,G;if(w>=I&&w>=P?(F=l,se=d,ie=p,G=g,l>=0?(v=c,b=h,U=f,X=u,Q=x,N=m,ae=M,K=E):(v=h,b=c,U=u,X=f,Q=m,N=x,ae=E,K=M)):I>=P?(F=c,se=f,ie=x,G=M,c>=0?(v=h,b=l,U=u,X=d,Q=m,N=p,ae=E,K=g):(v=l,b=h,U=d,X=u,Q=p,N=m,ae=g,K=E)):(F=h,se=u,ie=m,G=E,h>=0?(v=l,b=c,U=d,X=f,Q=p,N=x,ae=g,K=M):(v=c,b=l,U=f,X=d,Q=x,N=p,ae=M,K=g)),F===0)return null;const te=v/F,he=b/F,be=1/F,Je=U-te*se,ft=X-he*se,fe=Q-te*ie,Ke=N-he*ie,at=ae-te*G,xt=K-he*G,Qe=at*Ke-xt*fe,vt=Je*xt-ft*at,Yt=fe*ft-Ke*Je;if(i){if(Qe<0||vt<0||Yt<0)return null}else if((Qe<0||vt<0||Yt<0)&&(Qe>0||vt>0||Yt>0))return null;const _t=Qe+vt+Yt;if(_t===0)return null;const Rt=be*(Qe*se+vt*ie+Yt*G);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ch=new kt,us=new er,go=new Ii,Ph=new k,_o=new k,xo=new k,vo=new k,Qa=new k,Mo=new k,Lh=new k,yo=new k;class Xt extends pn{constructor(e=new hn,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Qa.fromBufferAttribute(d,e),o?Mo.addScaledVector(Qa,h):Mo.addScaledVector(Qa.sub(t),h))}t.add(Mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(go.containsPoint(us.origin)===!1&&(us.intersectSphere(go,Ph)===null||us.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),us.copy(e.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,I=E;w<I;w+=3){const P=a.getX(w),v=a.getX(w+1),b=a.getX(w+2);i=So(this,g,e,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);i=So(this,o,e,n,c,h,d,M,E,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,I=E;w<I;w+=3){const P=w,v=w+1,b=w+2;i=So(this,g,e,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=m,E=m+1,w=m+2;i=So(this,o,e,n,c,h,d,M,E,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Yp(s,e,t,n,i,r,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===as,a),l===null)return null;yo.copy(a),yo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yo);return c<t.near||c>t.far?null:{distance:c,point:yo.clone(),object:s}}function So(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,_o),s.getVertexPosition(l,xo),s.getVertexPosition(c,vo);const h=Yp(s,e,t,n,_o,xo,vo,Lh);if(h){const d=new k;ai.getBarycoord(Lh,_o,xo,vo,d),i&&(h.uv=ai.getInterpolatedAttribute(i,a,l,c,d,new Oe)),r&&(h.uv1=ai.getInterpolatedAttribute(r,a,l,c,d,new Oe)),o&&(h.normal=ai.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};ai.getNormal(_o,xo,vo,f.normal),h.face=f,h.barycoord=d}return h}const pr=new dn,Dh=new dn,Ih=new dn,Kp=new dn,Nh=new kt,bo=new k,ja=new Ii,Uh=new kt,el=new er;class Zp extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new kt,this.bindMatrixInverse=new kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingBox.expandByPoint(bo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingSphere.expandByPoint(bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1&&(Uh.copy(i).invert(),el.copy(e.ray).applyMatrix4(Uh),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():It("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dh.fromBufferAttribute(i.attributes.skinIndex,e),Ih.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(pr.copy(t),t.set(0,0,0,0)):(pr.set(t.x,t.y,t.z,1),t.set(0,0,0)),pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Ih.getComponent(r);if(o!==0){const a=Dh.getComponent(r);Nh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Kp.copy(pr).applyMatrix4(Nh),o)}}return t.isVector4&&(t.w=pr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Rd extends pn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xa extends Cn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=En,h=En,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new kt,Jp=new kt;class Fc{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){It("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new kt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new kt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Jp;Oh.multiplyMatrices(a,t[r]),Oh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xa(t,e,e,_i,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(It("Skeleton: No bone found with UUID:",r),o=new Rd),this.bones.push(o),this.boneInverses.push(new kt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ra extends In{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new kt,Fh=new kt,wo=[],Bh=new Di,$p=new kt,mr=new Xt,gr=new Ii;class Yr extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$p)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Bh.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Bh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),gr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),Fh.multiplyMatrices(n,Ns),mr.matrixWorld=Fh,mr.raycast(e,wo);for(let o=0,a=wo.length;o<a;o++){const l=wo[o];l.instanceId=r,l.object=this,t.push(l)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(i*this.count),i,this.count,ga,ci));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ds=new Ii,Qp=new Oe(.5,.5),To=new k;class Kr{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],E=r[13],w=r[14],I=r[15];if(i[0].setComponents(c-o,u-h,g-p,I-M).normalize(),i[1].setComponents(c+o,u+h,g+p,I+M).normalize(),i[2].setComponents(c+a,u+d,g+x,I+E).normalize(),i[3].setComponents(c-a,u-d,g-x,I-E).normalize(),n)i[4].setComponents(l,f,m,w).normalize(),i[5].setComponents(c-l,u-f,g-m,I-w).normalize();else if(i[4].setComponents(c-l,u-f,g-m,I-w).normalize(),t===xi)i[5].setComponents(c+l,u+f,g+m,I+w).normalize();else if(t===Wr)i[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=Qp.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(To.x=i.normal.x>0?e.max.x:e.min.x,To.y=i.normal.y>0?e.max.y:e.min.y,To.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const zh=new kt;class Bc{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];zh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Kr),n[i].setFromProjectionMatrix(zh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Kr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Bc().copy(this)}}class Cd extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new k,aa=new k,kh=new kt,_r=new er,Eo=new Ii,tl=new k,Hh=new k;class zc extends pn{constructor(e=new hn,t=new Cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oa.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new zt(n,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;kh.copy(i).invert(),_r.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=h.getX(x),M=h.getX(x+1),E=Ao(this,e,_r,l,g,M,x);E&&t.push(E)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(u),g=Ao(this,e,_r,l,x,m,p-1);g&&t.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=Ao(this,e,_r,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=Ao(this,e,_r,l,p-1,u,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ao(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(oa.fromBufferAttribute(a,i),aa.fromBufferAttribute(a,r),t.distanceSqToSegment(oa,aa,tl,Hh)>n)return;tl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(tl);if(!(c<e.near||c>e.far))return{distance:c,point:Hh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Gh=new k,Vh=new k;class jp extends zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gh.distanceTo(Vh);e.setAttribute("lineDistance",new zt(n,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e0 extends zc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ir extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new kt,tc=new er,Ro=new Ii,Co=new k;class wr extends pn{constructor(e=new hn,t=new Ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Wh.copy(i).invert(),tc.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){const m=c.getX(p);Co.fromBufferAttribute(d,m),Xh(Co,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)Co.fromBufferAttribute(d,p),Xh(Co,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(s,e,t,n,i,r,o){const a=tc.distanceSqToPoint(s);if(a<t){const l=new k;tc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pd extends Cn{constructor(e=[],t=Ys,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nc extends Cn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _s extends Cn{constructor(e,t,n=vi,i,r,o,a=En,l=En,c,h=ls,d=1){if(h!==ls&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ld extends _s{constructor(e,t=vi,n=Ys,i,r,o=En,a=En,l,c=ls){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dd extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Le extends hn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function p(x,m,g,M,E,w,I,P,v,b,F){const U=w/v,X=I/b,se=w/2,Q=I/2,N=P/2,ie=v+1,ae=b+1;let K=0,G=0;const te=new k;for(let he=0;he<ae;he++){const be=he*X-Q;for(let Je=0;Je<ie;Je++){const ft=Je*U-se;te[x]=ft*M,te[m]=be*E,te[g]=N,c.push(te.x,te.y,te.z),te[x]=0,te[m]=0,te[g]=P>0?1:-1,h.push(te.x,te.y,te.z),d.push(Je/v),d.push(1-he/b),K+=1}}for(let he=0;he<b;he++)for(let be=0;be<v;be++){const Je=f+be+ie*he,ft=f+be+ie*(he+1),fe=f+(be+1)+ie*(he+1),Ke=f+(be+1)+ie*he;l.push(Je,ft,Ke),l.push(ft,fe,Ke),G+=6}a.addGroup(u,G,F),u+=G,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class la extends hn{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,x=i+1,m=new k,g=new k;for(let M=0;M<=p;M++){let E=0,w=0,I=0,P=0;if(M<=n){const F=M/n,U=F*Math.PI/2;w=-h-e*Math.cos(U),I=e*Math.sin(U),P=-e*Math.cos(U),E=F*d}else if(M<=n+r){const F=(M-n)/r;w=-h+F*t,I=e,P=0,E=d+F*f}else{const F=(M-n-r)/n,U=F*Math.PI/2;w=h+e*Math.sin(U),I=e*Math.cos(U),P=e*Math.sin(U),E=d+f+F*d}const v=Math.max(0,Math.min(1,E/u));let b=0;M===0?b=.5/i:M===p&&(b=-.5/i);for(let F=0;F<=i;F++){const U=F/i,X=U*Math.PI*2,se=Math.sin(X),Q=Math.cos(X);g.x=-I*Q,g.y=w,g.z=I*se,a.push(g.x,g.y,g.z),m.set(-I*Q,P,I*se),m.normalize(),l.push(m.x,m.y,m.z),c.push(U+b,v)}if(M>0){const F=(M-1)*x;for(let U=0;U<i;U++){const X=F+U,se=F+U+1,Q=M*x+U,N=M*x+U+1;o.push(X,se,Q),o.push(se,N,Q)}}}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mi extends hn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new k,h=new Oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rt extends hn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(u,2));function M(){const w=new k,I=new k;let P=0;const v=(t-e)/n;for(let b=0;b<=r;b++){const F=[],U=b/r,X=U*(t-e)+e;for(let se=0;se<=i;se++){const Q=se/i,N=Q*l+a,ie=Math.sin(N),ae=Math.cos(N);I.x=X*ie,I.y=-U*n+m,I.z=X*ae,d.push(I.x,I.y,I.z),w.set(ie,v,ae).normalize(),f.push(w.x,w.y,w.z),u.push(Q,1-U),F.push(p++)}x.push(F)}for(let b=0;b<i;b++)for(let F=0;F<r;F++){const U=x[F][b],X=x[F+1][b],se=x[F+1][b+1],Q=x[F][b+1];(e>0||F!==0)&&(h.push(U,X,Q),P+=3),(t>0||F!==r-1)&&(h.push(X,se,Q),P+=3)}c.addGroup(g,P,0),g+=P}function E(w){const I=p,P=new Oe,v=new k;let b=0;const F=w===!0?e:t,U=w===!0?1:-1;for(let se=1;se<=i;se++)d.push(0,m*U,0),f.push(0,U,0),u.push(.5,.5),p++;const X=p;for(let se=0;se<=i;se++){const N=se/i*l+a,ie=Math.cos(N),ae=Math.sin(N);v.x=F*ae,v.y=m*U,v.z=F*ie,d.push(v.x,v.y,v.z),f.push(0,U,0),P.x=ie*.5+.5,P.y=ae*.5*U+.5,u.push(P.x,P.y),p++}for(let se=0;se<i;se++){const Q=I+se,N=X+se;w===!0?h.push(N,N+1,Q):h.push(N+1,N,Q),b+=3}c.addGroup(g,b,w===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sn extends rt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Sn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class va extends hn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new k,w=new k,I=new k;for(let P=0;P<t.length;P+=3)u(t[P+0],E),u(t[P+1],w),u(t[P+2],I),l(E,w,I,M)}function l(M,E,w,I){const P=I+1,v=[];for(let b=0;b<=P;b++){v[b]=[];const F=M.clone().lerp(w,b/P),U=E.clone().lerp(w,b/P),X=P-b;for(let se=0;se<=X;se++)se===0&&b===P?v[b][se]=F:v[b][se]=F.clone().lerp(U,se/X)}for(let b=0;b<P;b++)for(let F=0;F<2*(P-b)-1;F++){const U=Math.floor(F/2);F%2===0?(f(v[b][U+1]),f(v[b+1][U]),f(v[b][U])):(f(v[b][U+1]),f(v[b+1][U+1]),f(v[b+1][U]))}}function c(M){const E=new k;for(let w=0;w<r.length;w+=3)E.x=r[w+0],E.y=r[w+1],E.z=r[w+2],E.normalize().multiplyScalar(M),r[w+0]=E.x,r[w+1]=E.y,r[w+2]=E.z}function h(){const M=new k;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const w=m(M)/2/Math.PI+.5,I=g(M)/Math.PI+.5;o.push(w,1-I)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){const E=o[M+0],w=o[M+2],I=o[M+4],P=Math.max(E,w,I),v=Math.min(E,w,I);P>.9&&v<.1&&(E<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,E){const w=M*3;E.x=e[w+0],E.y=e[w+1],E.z=e[w+2]}function p(){const M=new k,E=new k,w=new k,I=new k,P=new Oe,v=new Oe,b=new Oe;for(let F=0,U=0;F<r.length;F+=9,U+=6){M.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),w.set(r[F+6],r[F+7],r[F+8]),P.set(o[U+0],o[U+1]),v.set(o[U+2],o[U+3]),b.set(o[U+4],o[U+5]),I.copy(M).add(E).add(w).divideScalar(3);const X=m(I);x(P,U+0,M,X),x(v,U+2,E,X),x(b,U+4,w,X)}}function x(M,E,w,I){I<0&&M.x===1&&(o[E]=M.x-1),w.x===0&&w.z===0&&(o[E]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.vertices,e.indices,e.radius,e.detail)}}class Ri extends va{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ri(e.radius,e.detail)}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Oe:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new k,i=[],r=[],o=[],a=new k,l=new kt;for(let u=0;u<=e;u++){const p=u/e;i[u]=this.getTangentAt(p,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Kt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(Kt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class kc extends Ni{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class t0 extends kc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const qh=new k,Yh=new k,nl=new Hc,il=new Hc,sl=new Hc;class n0 extends Ni{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Yh.subVectors(i[0],i[1]).add(i[0]),c=Yh);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(qh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=qh),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),nl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),il.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),sl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),il.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function i0(s,e){const t=1-s;return t*t*e}function s0(s,e){return 2*(1-s)*s*e}function r0(s,e){return s*s*e}function Nr(s,e,t,n){return i0(s,e)+s0(s,t)+r0(s,n)}function o0(s,e){const t=1-s;return t*t*t*e}function a0(s,e){const t=1-s;return 3*t*t*s*e}function l0(s,e){return 3*(1-s)*s*s*e}function c0(s,e){return s*s*s*e}function Ur(s,e,t,n,i){return o0(s,e)+a0(s,t)+l0(s,n)+c0(s,i)}class Id extends Ni{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,i.x,r.x,o.x,a.x),Ur(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class h0 extends Ni{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,i.x,r.x,o.x,a.x),Ur(e,i.y,r.y,o.y,a.y),Ur(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nd extends Ni{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u0 extends Ni{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ud extends Ni{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Nr(e,i.x,r.x,o.x),Nr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d0 extends Ni{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Nr(e,i.x,r.x,o.x),Nr(e,i.y,r.y,o.y),Nr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Kh(a,l.x,c.x,h.x,d.x),Kh(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}}var ic=Object.freeze({__proto__:null,ArcCurve:t0,CatmullRomCurve3:n0,CubicBezierCurve:Id,CubicBezierCurve3:h0,EllipseCurve:kc,LineCurve:Nd,LineCurve3:u0,QuadraticBezierCurve:Ud,QuadraticBezierCurve3:d0,SplineCurve:Od});class f0 extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ic[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Zh extends f0{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Nd(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ud(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Id(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i),new Oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Od(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new kc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zr extends Zh{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Zh().fromJSON(i))}return this}}function p0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Fd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=v0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,d=l;for(let f=t;f<i;f+=t){const u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Jr(r,o,t,a,l,c,0),o}function Fd(s,e,t,n,i){let r;if(i===P0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Jh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Jh(o/n|0,s[o],s[o+1],r);return r&&Js(r,r.next)&&(Qr(r),r=r.next),r}function xs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Js(t,t.next)||xn(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&w0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?g0(s,n,i,r):m0(s)){e.push(l.i,s.i,c.i),Qr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=_0(xs(s),e),Jr(s,e,t,n,i,r,2)):o===2&&x0(s,e,t,n,i,r):Jr(xs(s),e,t,n,i,r,1);break}}}function m0(s){const e=s.prev,t=s,n=s.next;if(xn(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Tr(i,a,r,l,o,c,p.x,p.y)&&xn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function g0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(xn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=sc(u,p,e,t,n),M=sc(x,m,e,t,n);let E=s.prevZ,w=s.nextZ;for(;E&&E.z>=g&&w&&w.z<=M;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Tr(a,h,l,d,c,f,E.x,E.y)&&xn(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Tr(a,h,l,d,c,f,w.x,w.y)&&xn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=g;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Tr(a,h,l,d,c,f,E.x,E.y)&&xn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=M;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Tr(a,h,l,d,c,f,w.x,w.y)&&xn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function _0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Js(n,i)&&zd(n,t,t.next,i)&&$r(n,i)&&$r(i,n)&&(e.push(n.i,t.i,i.i),Qr(t),Qr(t.next),t=s=i),t=t.next}while(t!==s);return xs(t)}function x0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&A0(o,a)){let l=kd(o,a);o=xs(o,o.next),l=xs(l,l.next),Jr(o,e,t,n,i,r,0),Jr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function v0(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Fd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(E0(c))}i.sort(M0);for(let r=0;r<i.length;r++)t=y0(i[r],t);return t}function M0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function y0(s,e){const t=S0(s,e);if(!t)return e;const n=kd(t,s);return xs(n,n.next),xs(t,t.next)}function S0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Js(s,t))return t;do{if(Js(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Bd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);$r(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&b0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function b0(s,e){return xn(s.prev,s,e.prev)<0&&xn(e.next,s,s.next)<0}function w0(s,e,t,n){let i=s;do i.z===0&&(i.z=sc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,T0(i)}function T0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function sc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function E0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Bd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Tr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Bd(s,e,t,n,i,r,o,a)}function A0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!R0(s,e)&&($r(s,e)&&$r(e,s)&&C0(s,e)&&(xn(s.prev,s,e.prev)||xn(s,e.prev,e))||Js(s,e)&&xn(s.prev,s,s.next)>0&&xn(e.prev,e,e.next)>0)}function xn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Js(s,e){return s.x===e.x&&s.y===e.y}function zd(s,e,t,n){const i=Lo(xn(s,e,t)),r=Lo(xn(s,e,n)),o=Lo(xn(t,n,s)),a=Lo(xn(t,n,e));return!!(i!==r&&o!==a||i===0&&Po(s,t,e)||r===0&&Po(s,n,e)||o===0&&Po(t,s,n)||a===0&&Po(t,e,n))}function Po(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Lo(s){return s>0?1:s<0?-1:0}function R0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function $r(s,e){return xn(s.prev,s,s.next)<0?xn(s,e,s.next)>=0&&xn(s,s.prev,e)>=0:xn(s,e,s.prev)<0||xn(s,s.next,e)<0}function C0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function kd(s,e){const t=rc(s.i,s.x,s.y),n=rc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jh(s,e,t,n){const i=rc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function P0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class L0{static triangulate(e,t,n=2){return p0(e,t,n)}}class Wi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Wi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$h(e),Qh(n,e);let o=e.length;t.forEach($h);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Qh(n,t[l]);const a=L0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $h(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ca extends hn{constructor(e=new Zr([new Oe(.5,.5),new Oe(-.5,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new zt(i,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:D0;let E,w=!1,I,P,v,b;if(g){E=g.getSpacedPoints(h),w=!0,f=!1;const Ce=g.isCatmullRomCurve3?g.closed:!1;I=g.computeFrenetFrames(h,Ce),P=new k,v=new k,b=new k}f||(m=0,u=0,p=0,x=0);const F=a.extractPoints(c);let U=F.shape;const X=F.holes;if(!Wi.isClockWise(U)){U=U.reverse();for(let Ce=0,Xe=X.length;Ce<Xe;Ce++){const it=X[Ce];Wi.isClockWise(it)&&(X[Ce]=it.reverse())}}function Q(Ce){const it=10000000000000001e-36;let ct=Ce[0];for(let st=1;st<=Ce.length;st++){const ht=st%Ce.length,pt=Ce[ht],Me=pt.x-ct.x,He=pt.y-ct.y,ke=Me*Me+He*He,L=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(ct.x),Math.abs(ct.y)),tt=it*L*L;if(ke<=tt){Ce.splice(ht,1),st--;continue}ct=pt}}Q(U),X.forEach(Q);const N=X.length,ie=U;for(let Ce=0;Ce<N;Ce++){const Xe=X[Ce];U=U.concat(Xe)}function ae(Ce,Xe,it){return Xe||Gt("ExtrudeGeometry: vec does not exist"),Ce.clone().addScaledVector(Xe,it)}const K=U.length;function G(Ce,Xe,it){let ct,st,ht;const pt=Ce.x-Xe.x,Me=Ce.y-Xe.y,He=it.x-Ce.x,ke=it.y-Ce.y,L=pt*pt+Me*Me,tt=pt*ke-Me*He;if(Math.abs(tt)>Number.EPSILON){const je=Math.sqrt(L),qe=Math.sqrt(He*He+ke*ke),Pe=Xe.x-Me/je,nt=Xe.y+pt/je,Se=it.x-ke/qe,le=it.y+He/qe,C=((Se-Pe)*ke-(le-nt)*He)/(pt*ke-Me*He);ct=Pe+pt*C-Ce.x,st=nt+Me*C-Ce.y;const S=ct*ct+st*st;if(S<=2)return new Oe(ct,st);ht=Math.sqrt(S/2)}else{let je=!1;pt>Number.EPSILON?He>Number.EPSILON&&(je=!0):pt<-Number.EPSILON?He<-Number.EPSILON&&(je=!0):Math.sign(Me)===Math.sign(ke)&&(je=!0),je?(ct=-Me,st=pt,ht=Math.sqrt(L)):(ct=pt,st=Me,ht=Math.sqrt(L/2))}return new Oe(ct/ht,st/ht)}const te=[];for(let Ce=0,Xe=ie.length,it=Xe-1,ct=Ce+1;Ce<Xe;Ce++,it++,ct++)it===Xe&&(it=0),ct===Xe&&(ct=0),te[Ce]=G(ie[Ce],ie[it],ie[ct]);const he=[];let be,Je=te.concat();for(let Ce=0,Xe=N;Ce<Xe;Ce++){const it=X[Ce];be=[];for(let ct=0,st=it.length,ht=st-1,pt=ct+1;ct<st;ct++,ht++,pt++)ht===st&&(ht=0),pt===st&&(pt=0),be[ct]=G(it[ct],it[ht],it[pt]);he.push(be),Je=Je.concat(be)}let ft;if(m===0)ft=Wi.triangulateShape(ie,X);else{const Ce=[],Xe=[];for(let it=0;it<m;it++){const ct=it/m,st=u*Math.cos(ct*Math.PI/2),ht=p*Math.sin(ct*Math.PI/2)+x;for(let pt=0,Me=ie.length;pt<Me;pt++){const He=ae(ie[pt],te[pt],ht);vt(He.x,He.y,-st),ct===0&&Ce.push(He)}for(let pt=0,Me=N;pt<Me;pt++){const He=X[pt];be=he[pt];const ke=[];for(let L=0,tt=He.length;L<tt;L++){const je=ae(He[L],be[L],ht);vt(je.x,je.y,-st),ct===0&&ke.push(je)}ct===0&&Xe.push(ke)}}ft=Wi.triangulateShape(Ce,Xe)}const fe=ft.length,Ke=p+x;for(let Ce=0;Ce<K;Ce++){const Xe=f?ae(U[Ce],Je[Ce],Ke):U[Ce];w?(v.copy(I.normals[0]).multiplyScalar(Xe.x),P.copy(I.binormals[0]).multiplyScalar(Xe.y),b.copy(E[0]).add(v).add(P),vt(b.x,b.y,b.z)):vt(Xe.x,Xe.y,0)}for(let Ce=1;Ce<=h;Ce++)for(let Xe=0;Xe<K;Xe++){const it=f?ae(U[Xe],Je[Xe],Ke):U[Xe];w?(v.copy(I.normals[Ce]).multiplyScalar(it.x),P.copy(I.binormals[Ce]).multiplyScalar(it.y),b.copy(E[Ce]).add(v).add(P),vt(b.x,b.y,b.z)):vt(it.x,it.y,d/h*Ce)}for(let Ce=m-1;Ce>=0;Ce--){const Xe=Ce/m,it=u*Math.cos(Xe*Math.PI/2),ct=p*Math.sin(Xe*Math.PI/2)+x;for(let st=0,ht=ie.length;st<ht;st++){const pt=ae(ie[st],te[st],ct);vt(pt.x,pt.y,d+it)}for(let st=0,ht=X.length;st<ht;st++){const pt=X[st];be=he[st];for(let Me=0,He=pt.length;Me<He;Me++){const ke=ae(pt[Me],be[Me],ct);w?vt(ke.x,ke.y+E[h-1].y,E[h-1].x+it):vt(ke.x,ke.y,d+it)}}}at(),xt();function at(){const Ce=i.length/3;if(f){let Xe=0,it=K*Xe;for(let ct=0;ct<fe;ct++){const st=ft[ct];Yt(st[2]+it,st[1]+it,st[0]+it)}Xe=h+m*2,it=K*Xe;for(let ct=0;ct<fe;ct++){const st=ft[ct];Yt(st[0]+it,st[1]+it,st[2]+it)}}else{for(let Xe=0;Xe<fe;Xe++){const it=ft[Xe];Yt(it[2],it[1],it[0])}for(let Xe=0;Xe<fe;Xe++){const it=ft[Xe];Yt(it[0]+K*h,it[1]+K*h,it[2]+K*h)}}n.addGroup(Ce,i.length/3-Ce,0)}function xt(){const Ce=i.length/3;let Xe=0;Qe(ie,Xe),Xe+=ie.length;for(let it=0,ct=X.length;it<ct;it++){const st=X[it];Qe(st,Xe),Xe+=st.length}n.addGroup(Ce,i.length/3-Ce,1)}function Qe(Ce,Xe){let it=Ce.length;for(;--it>=0;){const ct=it;let st=it-1;st<0&&(st=Ce.length-1);for(let ht=0,pt=h+m*2;ht<pt;ht++){const Me=K*ht,He=K*(ht+1),ke=Xe+ct+Me,L=Xe+st+Me,tt=Xe+st+He,je=Xe+ct+He;_t(ke,L,tt,je)}}}function vt(Ce,Xe,it){l.push(Ce),l.push(Xe),l.push(it)}function Yt(Ce,Xe,it){Rt(Ce),Rt(Xe),Rt(it);const ct=i.length/3,st=M.generateTopUV(n,i,ct-3,ct-2,ct-1);Ct(st[0]),Ct(st[1]),Ct(st[2])}function _t(Ce,Xe,it,ct){Rt(Ce),Rt(Xe),Rt(ct),Rt(Xe),Rt(it),Rt(ct);const st=i.length/3,ht=M.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);Ct(ht[0]),Ct(ht[1]),Ct(ht[3]),Ct(ht[1]),Ct(ht[2]),Ct(ht[3])}function Rt(Ce){i.push(l[Ce*3+0]),i.push(l[Ce*3+1]),i.push(l[Ce*3+2])}function Ct(Ce){r.push(Ce.x),r.push(Ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return I0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ic[i.type]().fromJSON(i)),new ca(n,e.options)}}const D0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Oe(r,o),new Oe(a,l),new Oe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Oe(o,1-l),new Oe(c,1-d),new Oe(f,1-p),new Oe(x,1-g)]:[new Oe(a,1-l),new Oe(h,1-d),new Oe(u,1-p),new Oe(m,1-g)]}};function I0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Gc extends hn{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,d=new k,f=new Oe,u=new k,p=new k,x=new k;let m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let M=0;M<=t;M++){const E=n+M*h*i,w=Math.sin(E),I=Math.cos(E);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*w,d.y=e[P].y,d.z=e[P].x*I,o.push(d.x,d.y,d.z),f.x=M/t,f.y=P/(e.length-1),a.push(f.x,f.y);const v=l[3*P+0]*w,b=l[3*P+1],F=l[3*P+0]*I;c.push(v,b,F)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){const w=E+M*e.length,I=w,P=w+e.length,v=w+e.length+1,b=w+1;r.push(I,P,b),r.push(v,b,P)}this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.points,e.segments,e.phiStart,e.phiLength)}}class Vc extends va{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class tn extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*f-o;for(let E=0;E<c;E++){const w=E*d-r;p.push(w,-M,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const E=M+c*g,w=M+c*(g+1),I=M+1+c*(g+1),P=M+1+c*g;u.push(E,w,P),u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wc extends hn{constructor(e=new Zr([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new zt(i,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(o,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const p=f.holes;Wi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];Wi.isClockWise(M)===!0&&(p[m]=M.reverse())}const x=Wi.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];u=u.concat(M)}for(let m=0,g=u.length;m<g;m++){const M=u[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=x.length;m<g;m++){const M=x[m],E=M[0]+d,w=M[1]+d,I=M[2]+d;n.push(E,w,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return N0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Wc(n,e.curveSegments)}}function N0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class en extends hn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],E=g/n,w=o+E*a,I=e*Math.cos(w),P=Math.sqrt(e*e-I*I);let v=0;g===0&&o===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const F=b/t,U=i+F*r;d.x=-P*Math.cos(U),d.y=I,d.z=P*Math.sin(U),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(F+v,1-E),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){const E=h[g][M+1],w=h[g][M],I=h[g+1][M],P=h[g+1][M+1];(g!==0||o>0)&&u.push(E,w,P),(g!==n-1||l<Math.PI)&&u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yn extends hn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new k,u=new k,p=new k;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const M=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,M=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,w=(i+1)*x+m;l.push(g,M,w),l.push(M,E,w)}this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function $s(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(jh(i))i.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(jh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function qn(s){const e={};for(let t=0;t<s.length;t++){const n=$s(s[t]);for(const i in n)e[i]=n[i]}return e}function jh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function U0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qt.workingColorSpace}const jr={clone:$s,merge:qn};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(i.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new dn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gd extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qs extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yi extends Qs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qo extends ni{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new At(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class B0 extends ni{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class z0 extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function is(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Er(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function H0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function eu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function G0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class V0 extends tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ks,endingEnd:ks}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,a=2*t-n;break;case ta:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hs:o=e,l=2*n-t;break;case ta:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,E=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+M*o[c+I]+E*o[l+I]+w*o[d+I];return r}}class Vd extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class W0 extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class X0 extends tr{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}const f=a*2,u=e-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=u*f+p*2,M=d[g],E=d[g+1],w=e*f+p*2,I=h[w],P=h[w+1],v=Y0(n,t,M,I,i);r[p]=Wd(v,x,E,P,m)}return r}}function Wd(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function q0(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Y0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Wd(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const l=q0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Er(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new W0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new V0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new X0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Gr:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Er(this.settings)&&(tu(this.settings.inTangents,e),tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Er(this.settings)&&(nu(this.settings.inTangents,e),nu(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&lp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const x=t[d+p];if(x!==t[f+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Er(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function tu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function nu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Gr;class nr extends Si{constructor(e,t,n){super(e,t,n)}}nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Hr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xd extends Si{constructor(e,t,n,i){super(e,t,n,i)}}Xd.prototype.ValueTypeName="color";class eo extends Si{constructor(e,t,n,i){super(e,t,n,i)}}eo.prototype.ValueTypeName="number";class K0 extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}}class to extends Si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new K0(this.times,this.values,this.getValueSize(),e)}}to.prototype.ValueTypeName="quaternion";to.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Si{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Hr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ha extends Si{constructor(e,t,n,i){super(e,t,n,i)}}ha.prototype.ValueTypeName="vector";class oc{constructor(e="",t=-1,n=[],i=Pc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(J0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=H0(l);l=eu(l,1,h),c=eu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new eo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Z0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return eo;case"vector":case"vector2":case"vector3":case"vector4":return ha;case"color":return Xd;case"quaternion":return to;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function J0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Z0(s.type);if(s.times===void 0){const n=[],i=[];G0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Er(s.settings)&&(t.settings={inTangents:is(s.settings.inTangents,Float32Array),outTangents:is(s.settings.outTangents,Float32Array)}),t}const Xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(iu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!iu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function iu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class qd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $0=new qd;class sr{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class Q0 extends Error{constructor(e,t){super(e),this.response=t}}class Yd extends sr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:i});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&It("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ki[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let x=0;const m=new ReadableStream({start(g){M();function M(){d.read().then(({done:E,value:w})=>{if(E)g.close();else{x+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let P=0,v=h.length;P<v;P++){const b=h[P];b.onProgress&&b.onProgress(I)}g.enqueue(w),M()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Q0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Xi.add(`file:${e}`,c);const h=ki[e];delete ki[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Us=new WeakMap;class j0 extends sr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Us.get(o);d===void 0&&(d=[],Us.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Xr("img");function l(){h(),t&&t(this);const d=Us.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Us.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Xi.remove(`image:${e}`);const f=Us.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class em extends sr{constructor(e){super(e)}load(e,t,n,i){const r=new Cn,o=new j0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ma extends pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class tm extends Ma{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rl=new kt,su=new k,ru=new k;class Xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Wr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Do=new k,Io=new _n,bi=new k;class Kd extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Io,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Io,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Do,Io,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Io,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new k,ou=new Oe,au=new Oe;class $n extends Kd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,ou,au),t.subVectors(au,ou)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nm extends Xc{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class im extends Ma{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class sm extends Xc{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class qi extends Ma{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ya extends Kd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rm extends Xc{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends Ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new rm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ol=new WeakMap;class om extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&It("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&It("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ol.has(o)===!0?(i&&i(ol.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ol.set(l,c),Xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=-90,Fs=1;class ac extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(Os,Fs,e,t);i.layers=this.layers,this.add(i);const r=new $n(Os,Fs,e,t);r.layers=this.layers,this.add(r);const o=new $n(Os,Fs,e,t);o.layers=this.layers,this.add(o);const a=new $n(Os,Fs,e,t);a.layers=this.layers,this.add(a);const l=new $n(Os,Fs,e,t);l.layers=this.layers,this.add(l);const c=new $n(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class am extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class lm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cm(){this._document.hidden===!1&&this.reset()}class hm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){_n.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;_n.multiplyQuaternionsFlat(e,o,e,t,e,n),_n.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const qc="\\[\\]\\.:\\/",um=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",dm="[^"+qc.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",Yc),pm=/(WCOD+)?/.source.replace("WCOD",dm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),_m=new RegExp("^"+fm+pm+mm+gm+"$"),xm=["material","materials","bones","map"];class vm{constructor(e,t,n){const i=n||cn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class cn{constructor(e,t,n){this.path=t,this.parsedPath=n||cn.parseTrackName(t),this.node=cn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new cn.Composite(e,t,n):new cn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(um,"")}static parseTrackName(e){const t=_m.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=cn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}cn.Composite=vm;cn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};cn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};cn.prototype.GetterByBindingType=[cn.prototype._getValue_direct,cn.prototype._getValue_array,cn.prototype._getValue_arrayElement,cn.prototype._getValue_toArray];cn.prototype.SetterByBindingTypeAndVersioning=[[cn.prototype._setValue_direct,cn.prototype._setValue_direct_setNeedsUpdate,cn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_array,cn.prototype._setValue_array_setNeedsUpdate,cn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_arrayElement,cn.prototype._setValue_arrayElement_setNeedsUpdate,cn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_fromArray,cn.prototype._setValue_fromArray_setNeedsUpdate,cn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ks,endingEnd:ks};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case $f:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Pc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Jf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Kf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(e?i.endingStart=this.zeroSlopeAtStart?Hs:ks:i.endingStart=ta,t?i.endingEnd=this.zeroSlopeAtEnd?Hs:ks:i.endingEnd=ta)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const ym=new Float32Array(1);class Sm extends Ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;p=new hm(cn.create(n,u,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Vd(new Float32Array(2),new Float32Array(2),1,ym),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?oc.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Pc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Mm(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?oc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const lu=new kt;class Jd{constructor(e,t,n=0,i=1/0){this.ray=new er(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(e,t=!0,n=[]){return lc(e,this,n,t),n.sort(cu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)lc(e[i],this,n,t);return n.sort(cu),n}}function cu(s,e){return s.distance-e.distance}function lc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)lc(r[o],e,t,!0)}}class hu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bm extends Ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function uu(s,e,t,n){const i=wm(n);switch(t){case fd:return s*e;case ga:return s*e/i.components*i.byteLength;case Ac:return s*e/i.components*i.byteLength;case gs:return s*e*2/i.components*i.byteLength;case Rc:return s*e*2/i.components*i.byteLength;case pd:return s*e*3/i.components*i.byteLength;case _i:return s*e*4/i.components*i.byteLength;case Cc:return s*e*4/i.components*i.byteLength;case Go:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(s,16)*Math.max(e,8)/4;case wl:case El:return Math.max(s,8)*Math.max(e,8)/2;case Rl:case Cl:case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case jo:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Zl:case Jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $l:case Ql:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ea:case jl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wm(s){switch(s){case ti:case cd:return{byteLength:1,components:1};case kr:case hd:case Gn:return{byteLength:2,components:1};case Tc:case Ec:return{byteLength:2,components:4};case vi:case wc:case ci:return{byteLength:4,components:1};case ud:case dd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);function $d(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tm(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nm=`#ifdef USE_BATCHING
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
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zm=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zm=`#define PI 3.141592653589793
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
} // validated`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_g=`#ifdef USE_ENVMAP
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
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
#endif`,bg=`uniform sampler2D dfgLUT;
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
}`,wg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
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
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
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
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform float backgroundBlurriness;
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,D_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,N_=`#define DISTANCE
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,H_=`#define LAMBERT
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
}`,G_=`#define LAMBERT
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
}`,V_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,Z_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,$_=`#define TOON
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
}`,Q_=`#define TOON
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
}`,j_=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,sx=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Em,alphahash_pars_fragment:Am,alphamap_fragment:Rm,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Lm,aomap_fragment:Dm,aomap_pars_fragment:Im,batching_pars_vertex:Nm,batching_vertex:Um,begin_vertex:Om,beginnormal_vertex:Fm,bsdfs:Bm,iridescence_fragment:zm,bumpmap_pars_fragment:km,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:qm,color_pars_vertex:Ym,color_vertex:Km,common:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:$m,displacementmap_vertex:Qm,emissivemap_fragment:jm,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:og,envmap_physical_pars_fragment:_g,envmap_vertex:ag,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:vg,lights_phong_fragment:Mg,lights_phong_pars_fragment:yg,lights_physical_fragment:Sg,lights_physical_pars_fragment:bg,lights_fragment_begin:wg,lights_fragment_maps:Tg,lights_fragment_end:Eg,lightprobes_pars_fragment:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Lg,map_fragment:Dg,map_pars_fragment:Ig,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Bg,morphcolor_vertex:zg,morphnormal_vertex:kg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Qg,opaque_fragment:jg,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:M_,uv_pars_fragment:y_,uv_pars_vertex:S_,uv_vertex:b_,worldpos_vertex:w_,background_vert:T_,background_frag:E_,backgroundCube_vert:A_,backgroundCube_frag:R_,cube_vert:C_,cube_frag:P_,depth_vert:L_,depth_frag:D_,distance_vert:I_,distance_frag:N_,equirect_vert:U_,equirect_frag:O_,linedashed_vert:F_,linedashed_frag:B_,meshbasic_vert:z_,meshbasic_frag:k_,meshlambert_vert:H_,meshlambert_frag:G_,meshmatcap_vert:V_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:K_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:$_,meshtoon_frag:Q_,points_vert:j_,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},bt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ei={basic:{uniforms:qn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new At(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qn([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qn([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qn([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:qn([bt.common,bt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:qn([bt.lights,bt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Ei.physical={uniforms:qn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const No={r:0,b:0,g:0},rx=new kt,Qd=new qt;Qd.set(-1,0,0,0,1,0,0,0,1);function ox(s,e,t,n,i,r){const o=new At(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const w=M.backgroundBlurriness>0;E=e.get(E,w)}return E}function p(M){let E=!1;const w=u(M);w===null?m(o,a):w&&w.isColor&&(m(w,1),E=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,E){const w=u(E);w&&w.isCubeTexture?(c===void 0&&(c=new Xt(new Le(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:$s(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qd),c.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ln,(h!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Xt(new tn(2,2),new Kn({name:"BackgroundMaterial",uniforms:$s(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ln,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(No,Hd(s)),t.buffers.color.setClear(No.r,No.g,No.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:x,dispose:g}}function ax(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(X,se,Q,N,ie){let ae=!1;const K=d(X,N,Q,se);r!==K&&(r=K,c(r.object)),ae=u(X,N,Q,ie),ae&&p(X,N,Q,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,w(X,se,Q,N),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return s.createVertexArray()}function c(X){return s.bindVertexArray(X)}function h(X){return s.deleteVertexArray(X)}function d(X,se,Q,N){const ie=N.wireframe===!0;let ae=n[se.id];ae===void 0&&(ae={},n[se.id]=ae);const K=X.isInstancedMesh===!0?X.id:0;let G=ae[K];G===void 0&&(G={},ae[K]=G);let te=G[Q.id];te===void 0&&(te={},G[Q.id]=te);let he=te[ie];return he===void 0&&(he=f(l()),te[ie]=he),he}function f(X){const se=[],Q=[],N=[];for(let ie=0;ie<t;ie++)se[ie]=0,Q[ie]=0,N[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:Q,attributeDivisors:N,object:X,attributes:{},index:null}}function u(X,se,Q,N){const ie=r.attributes,ae=se.attributes;let K=0;const G=Q.getAttributes();for(const te in G)if(G[te].location>=0){const be=ie[te];let Je=ae[te];if(Je===void 0&&(te==="instanceMatrix"&&X.instanceMatrix&&(Je=X.instanceMatrix),te==="instanceColor"&&X.instanceColor&&(Je=X.instanceColor)),be===void 0||be.attribute!==Je||Je&&be.data!==Je.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function p(X,se,Q,N){const ie={},ae=se.attributes;let K=0;const G=Q.getAttributes();for(const te in G)if(G[te].location>=0){let be=ae[te];be===void 0&&(te==="instanceMatrix"&&X.instanceMatrix&&(be=X.instanceMatrix),te==="instanceColor"&&X.instanceColor&&(be=X.instanceColor));const Je={};Je.attribute=be,be&&be.data&&(Je.data=be.data),ie[te]=Je,K++}r.attributes=ie,r.attributesNum=K,r.index=N}function x(){const X=r.newAttributes;for(let se=0,Q=X.length;se<Q;se++)X[se]=0}function m(X){g(X,0)}function g(X,se){const Q=r.newAttributes,N=r.enabledAttributes,ie=r.attributeDivisors;Q[X]=1,N[X]===0&&(s.enableVertexAttribArray(X),N[X]=1),ie[X]!==se&&(s.vertexAttribDivisor(X,se),ie[X]=se)}function M(){const X=r.newAttributes,se=r.enabledAttributes;for(let Q=0,N=se.length;Q<N;Q++)se[Q]!==X[Q]&&(s.disableVertexAttribArray(Q),se[Q]=0)}function E(X,se,Q,N,ie,ae,K){K===!0?s.vertexAttribIPointer(X,se,Q,ie,ae):s.vertexAttribPointer(X,se,Q,N,ie,ae)}function w(X,se,Q,N){x();const ie=N.attributes,ae=Q.getAttributes(),K=se.defaultAttributeValues;for(const G in ae){const te=ae[G];if(te.location>=0){let he=ie[G];if(he===void 0&&(G==="instanceMatrix"&&X.instanceMatrix&&(he=X.instanceMatrix),G==="instanceColor"&&X.instanceColor&&(he=X.instanceColor)),he!==void 0){const be=he.normalized,Je=he.itemSize,ft=e.get(he);if(ft===void 0)continue;const fe=ft.buffer,Ke=ft.type,at=ft.bytesPerElement,xt=Ke===s.INT||Ke===s.UNSIGNED_INT||he.gpuType===wc;if(he.isInterleavedBufferAttribute){const Qe=he.data,vt=Qe.isInterleavedBuffer===!0?Qe.stride:Qe.itemSize,Yt=he.offset;if(Qe.isInstancedInterleavedBuffer||Qe.isInstancedBufferAttribute){for(let _t=0;_t<te.locationSize;_t++)g(te.location+_t,Qe.meshPerAttribute);X.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let _t=0;_t<te.locationSize;_t++)m(te.location+_t);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let _t=0;_t<te.locationSize;_t++)E(te.location+_t,Je/te.locationSize,Ke,be,vt*at,(Yt+Je/te.locationSize*_t)*at,xt)}else{if(he.isInstancedBufferAttribute){for(let Qe=0;Qe<te.locationSize;Qe++)g(te.location+Qe,he.meshPerAttribute);X.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Qe=0;Qe<te.locationSize;Qe++)m(te.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Qe=0;Qe<te.locationSize;Qe++)E(te.location+Qe,Je/te.locationSize,Ke,be,Je*at,Je/te.locationSize*Qe*at,xt)}}else if(K!==void 0){const be=K[G];if(be!==void 0)switch(be.length){case 2:s.vertexAttrib2fv(te.location,be);break;case 3:s.vertexAttrib3fv(te.location,be);break;case 4:s.vertexAttrib4fv(te.location,be);break;default:s.vertexAttrib1fv(te.location,be)}}}}M()}function I(){F();for(const X in n){const se=n[X];for(const Q in se){const N=se[Q];for(const ie in N){const ae=N[ie];for(const K in ae)h(ae[K].object),delete ae[K];delete N[ie]}}delete n[X]}}function P(X){if(n[X.id]===void 0)return;const se=n[X.id];for(const Q in se){const N=se[Q];for(const ie in N){const ae=N[ie];for(const K in ae)h(ae[K].object),delete ae[K];delete N[ie]}}delete n[X.id]}function v(X){for(const se in n){const Q=n[se];for(const N in Q){const ie=Q[N];if(ie[X.id]===void 0)continue;const ae=ie[X.id];for(const K in ae)h(ae[K].object),delete ae[K];delete ie[X.id]}}}function b(X){for(const se in n){const Q=n[se],N=X.isInstancedMesh===!0?X.id:0,ie=Q[N];if(ie!==void 0){for(const ae in ie){const K=ie[ae];for(const G in K)h(K[G].object),delete K[G];delete ie[ae]}delete Q[N],Object.keys(Q).length===0&&delete n[se]}}}function F(){U(),o=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function lx(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==_i&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const b=v===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==ti&&v!==ci&&!b&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:w,maxSamples:I,samples:P}}function hx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Gi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,E=M*4;let w=g.clippingState||null;l.value=w,w=h(p,f,E,u);for(let I=0;I!==E;++I)w[I]=t[I];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=u+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,w=u;E!==x;++E,w+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class Kc extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Pd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Le(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:ms});r.uniforms.tEquirect.value=t;const o=new Xt(i,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=On),new ac(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const du=256,ux=3,dx=20,jd=256,ef=16,fx=3,px=new k,mx=new At;class ua{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ac(1,10,null),this._boxMesh=new Xt(new Le(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=px}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(mx));const m=new ac(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(du,yd(e))}_fromTexture(e,t){e.mapping===Ys||e.mapping===zr?this._setSize(e.image.length===0?du:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=fu(e,!1,!1),n=Math.log2(e)-ux;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ys||e.mapping===zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gx(),this._integrationMaterial=_x());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ef);for(let o=0;o<=n;o++){const a=ua.lodToRoughness(o,n);if(o>n-fx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(jd*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function fu(s,e,t){return new Kc(s,{minFilter:Ci,generateMipmaps:e,type:Gn,colorSpace:ii,depthBuffer:t})}function no(s,e,t){return new Kn({name:s,uniforms:e,vertexShader:Zt.cube_vert,fragmentShader:t,side:Hn,blending:ms,depthTest:!1,depthWrite:!1})}function gx(){return no("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jd}u

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
	`)}function _x(){return no("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ef}},`

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
	`)}function xx(){return no("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dx}
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
	`)}function pu(){return no("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mu(){return no("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Ra||u===Ca)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new Kc(p.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Ra||u===Ca,x=u===Ys||u===zr;if(p||x){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ua(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new ua(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Ra?f.mapping=Ys:u===Ca&&(f.mapping=zr),f}function l(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Mx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ws("WebGLRenderer: "+n+" extension not supported."),i}}}function yx(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)e.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?Td:wd,w=new E(Math.ceil(M/3)*6,1),I=w.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,F=0;b<M;b+=3){const U=v[b+0],X=v[b+1],se=v[b+2];I[F++]=U,I[F++]=X,I[F++]=X,I[F++]=se,I[F++]=se,I[F++]=U}}else{g=m.version;for(let v=0,b=0;v<M;v+=3){const F=v+0,U=v+1,X=v+2;I[b++]=F,I[b++]=U,I[b++]=U,I[b++]=X,I[b++]=X,I[b++]=F}}w.version=g;const P=r.get(p);P&&e.remove(P),r.set(p,w)}function f(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Sx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wx(s,e,t){const n=new WeakMap,i=new dn;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let F=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;u===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let w=a.attributes.position.count*E,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*I*4*d),v=new Sd(P,w,I,d);v.type=ci,v.needsUpdate=!0;const b=E*4;for(let U=0;U<d;U++){const X=m[U],se=g[U],Q=M[U],N=w*I*4*U;for(let ie=0;ie<X.count;ie++){const ae=ie*b;u===!0&&(i.fromBufferAttribute(X,ie),P[N+ae+0]=i.x,P[N+ae+1]=i.y,P[N+ae+2]=i.z,P[N+ae+3]=0),p===!0&&(i.fromBufferAttribute(se,ie),P[N+ae+4]=i.x,P[N+ae+5]=i.y,P[N+ae+6]=i.z,P[N+ae+7]=0),x===!0&&(i.fromBufferAttribute(Q,ie),P[N+ae+8]=i.x,P[N+ae+9]=i.y,P[N+ae+10]=i.z,P[N+ae+11]=Q.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new Oe(w,I)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Tx(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const Ex={[xc]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function Ax(s,e,t,n,i,r){const o=new Vn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new hn;h.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new zt([0,2,0,0,2,0],2));const d=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Xt(h,d),u=new ya(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,E=[],w=!1;this.setSize=function(I,P){o.setSize(I,P),a!==null&&a.setSize(I,P),l!==null&&l.setSize(I,P);for(let v=0;v<E.length;v++){const b=E[v];b.setSize&&b.setSize(I,P)}},this.setEffects=function(I){E=I,w=E.length>0&&E[0].isRenderPass===!0;const P=o.width,v=o.height;E.length>0&&a===null&&(a=new Vn(P,v,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(P,v,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&E.some(F=>F.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new _s(P,v),r===!0&&(c.format=ss,c.type=Ks)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let F=0;F<E.length;F++){const U=E[F];U.setSize&&U.setSize(P,v),b&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,P){if(m||I.toneMapping===Yi&&E.length===0)return!1;if(M=P,P!==null){const v=P.width,b=P.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return w===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=Yi,!0},this.hasRenderPass=function(){return w},this.end=function(I,P){I.toneMapping=g,m=!0;let v=o,b=a;for(let F=0;F<E.length;F++){const U=E[F];U.enabled!==!1&&(U.render(I,b,v,P),U.needsSwap!==!1&&(v=b,b=b===a?l:a))}if(p!==I.outputColorSpace||x!==I.toneMapping){p=I.outputColorSpace,x=I.toneMapping,d.defines={},Qt.getTransfer(p)===ln&&(d.defines.SRGB_TRANSFER="");const F=Ex[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,I.setRenderTarget(M),I.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const tf=new Cn,nf=new _s(1,1),sf=new Ld(1),rf=new Sd,of=new Dp,af=new Pd,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),Mu=new Float32Array(4);function rr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=gu[i];if(r===void 0&&(r=new Float32Array(i),gu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Pn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sa(s,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Rx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2fv(this.addr,e),Ln(t,e)}}function Px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;s.uniform3fv(this.addr,e),Ln(t,e)}}function Lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4fv(this.addr,e),Ln(t,e)}}function Dx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,n))return;Mu.set(n),s.uniformMatrix2fv(this.addr,!1,Mu),Ln(t,n)}}function Ix(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,n))return;vu.set(n),s.uniformMatrix3fv(this.addr,!1,vu),Ln(t,n)}}function Nx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,n))return;xu.set(n),s.uniformMatrix4fv(this.addr,!1,xu),Ln(t,n)}}function Ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2iv(this.addr,e),Ln(t,e)}}function Fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;s.uniform3iv(this.addr,e),Ln(t,e)}}function Bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4iv(this.addr,e),Ln(t,e)}}function zx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2uiv(this.addr,e),Ln(t,e)}}function Hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;s.uniform3uiv(this.addr,e),Ln(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4uiv(this.addr,e),Ln(t,e)}}function ba(s){return s.version===0&&(s.compareFunction=xd,s.needsUpdate=!0),s}function Vx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ba(nf):r=tf,t.setTexture2D(e||r,i)}function Wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||of,i)}function Xx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ba(sf):r=af,t.setTextureCube(e||r,i)}function qx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rf,i)}function Yx(s){switch(s){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Ix;case 35676:return Nx;case 5124:case 35670:return Ux;case 35667:case 35671:return Ox;case 35668:case 35672:return Fx;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return kx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Kx(s,e){s.uniform1fv(this.addr,e)}function Zx(s,e){const t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function Jx(s,e){const t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function $x(s,e){const t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function Qx(s,e){const t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jx(s,e){const t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ev(s,e){const t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tv(s,e){s.uniform1iv(this.addr,e)}function nv(s,e){s.uniform2iv(this.addr,e)}function iv(s,e){s.uniform3iv(this.addr,e)}function sv(s,e){s.uniform4iv(this.addr,e)}function rv(s,e){s.uniform1uiv(this.addr,e)}function ov(s,e){s.uniform2uiv(this.addr,e)}function av(s,e){s.uniform3uiv(this.addr,e)}function lv(s,e){s.uniform4uiv(this.addr,e)}function cv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Pn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ba(nf):o=tf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function hv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Pn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||of,r[o])}function uv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Pn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=ba(sf):o=af;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function dv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Pn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rf,r[o])}function fv(s){switch(s){case 5126:return Kx;case 35664:return Zx;case 35665:return Jx;case 35666:return $x;case 35674:return Qx;case 35675:return jx;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function yu(s,e){s.seq.push(e),s.map[e.id]=e}function _v(s,e,t){const n=s.name,i=n.length;for(al.lastIndex=0;;){const r=al.exec(n),o=al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){yu(t,c===void 0?new pv(a,s,e):new mv(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new gv(a),yu(t,d)),t=d}}}class Yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);_v(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Su(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const xv=37297;let vv=0;function Mv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const bu=new qt;function yv(s){Qt._getMatrix(bu,Qt.workingColorSpace,s);const e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(Qt.getTransfer(s)){case na:return[e,"LinearTransferOETF"];case ln:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Mv(s.getShaderSource(e),a)}else return r}function Sv(s,e){const t=yv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const bv={[xc]:"Linear",[vc]:"Reinhard",[Mc]:"Cineon",[ma]:"ACESFilmic",[Sc]:"AgX",[bc]:"Neutral",[yc]:"Custom"};function wv(s,e){const t=bv[e];return t===void 0?(It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new k;function Tv(){Qt.getLuminanceCoefficients(Uo);const s=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Av(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ar(s){return s!==""}function Tu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Eu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(s){return s.replace(Cv,Pv)}function Pv(s,e){const t=Zt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cc(t)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(s){return s.replace(Lv,Dv)}function Dv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ru(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Iv={[Pr]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function Nv(s){return Iv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Uv={[zr]:"ENVMAP_MODE_REFRACTION"};function Ov(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fv={[od]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function Bv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[s.combine]||"ENVMAP_BLENDING_NONE"}function zv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Nv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ov(t),d=Bv(t),f=Ev(t),u=Av(r),p=i.createProgram();let x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ar).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ar).join(`
`),m.length>0&&(m+=`
`)):(x=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),m=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Zt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),Tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),o=cc(o),o=Tu(o,t),o=Eu(o,t),a=cc(a),a=Tu(a,t),a=Eu(a,t),o=Au(o),a=Au(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+o,E=g+m+a,w=Su(i,i.VERTEX_SHADER,M),I=Su(i,i.FRAGMENT_SHADER,E);i.attachShader(p,w),i.attachShader(p,I),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(U){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(p)||"",se=i.getShaderInfoLog(w)||"",Q=i.getShaderInfoLog(I)||"",N=X.trim(),ie=se.trim(),ae=Q.trim();let K=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,I);else{const te=wu(i,w,"vertex"),he=wu(i,I,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+te+`
`+he)}else N!==""?It("WebGLProgram: Program Info Log:",N):(ie===""||ae==="")&&(G=!1);G&&(U.diagnostics={runnable:K,programLog:N,vertexShader:{log:ie,prefix:x},fragmentShader:{log:ae,prefix:m}})}i.deleteShader(w),i.deleteShader(I),v=new Yo(i,p),b=Rv(i,p)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,xv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=I,this}let kv=0;class Hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gv(e),t.set(e,n)),n}}class Gv{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}}function Vv(s){return s===gs||s===jo||s===ea}function Wv(s,e,t,n,i,r){const o=new Uc,a=new Hv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,F,U,X,se){const Q=U.fog,N=X.geometry,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,ae=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||ie,ae),G=f[v.type];let te=n.precision;v.precision!==null&&(te=n.getMaxPrecision(v.precision),te!==v.precision&&It("WebGLProgram.getParameters:",v.precision,"not supported, using",te,"instead."));const he=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=he!==void 0?he.length:0;let Je=0;N.morphAttributes.position!==void 0&&(Je=1),N.morphAttributes.normal!==void 0&&(Je=2),N.morphAttributes.color!==void 0&&(Je=3);let ft,fe,Ke,at;if(G){const O=Ei[G];ft=O.vertexShader,fe=O.fragmentShader}else{ft=v.vertexShader,fe=v.fragmentShader;const O=a.getVertexShaderStage(v),re=a.getFragmentShaderStage(v);a.update(v,O,re),Ke=O.id,at=re.id}const xt=s.getRenderTarget(),Qe=s.state.buffers.depth.getReversed(),vt=X.isInstancedMesh===!0,Yt=X.isBatchedMesh===!0,_t=!!v.map,Rt=!!v.matcap,Ct=!!K,Ce=Ct&&K.isPMREMTexture===!0,Xe=!!v.aoMap,it=!!v.lightMap,ct=!!v.bumpMap&&v.wireframe===!1,st=!!v.normalMap,ht=!!v.displacementMap,pt=!!v.emissiveMap,Me=!!v.metalnessMap,He=!!v.roughnessMap,ke=v.anisotropy>0,L=v.clearcoat>0,tt=v.diffuseRoughness>0,je=v.dispersion>0,qe=v.retroreflectivity>0,Pe=v.iridescence>0,nt=v.sheen>0,Se=v.transmission>0,le=ke&&!!v.anisotropyMap,C=L&&!!v.clearcoatMap,S=L&&!!v.clearcoatNormalMap,$=L&&!!v.clearcoatRoughnessMap,ye=tt&&!!v.diffuseRoughnessMap,pe=Pe&&!!v.iridescenceMap,Ue=Pe&&!!v.iridescenceThicknessMap,Ge=nt&&!!v.sheenColorMap,ve=nt&&!!v.sheenRoughnessMap,we=!!v.specularMap,Ie=!!v.specularColorMap,V=!!v.specularIntensityMap,xe=Se&&!!v.transmissionMap,ge=Se&&!!v.thicknessMap,We=!!v.gradientMap,ee=!!v.alphaMap,Z=v.alphaTest>0,de=!!v.alphaHash,De=!!v.extensions;let _=Yi;v.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(_=s.toneMapping);const z=Ce?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,W={shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:ft,fragmentShader:fe,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:te,batching:Yt,batchingColor:Yt&&X._colorsTexture!==null,instancing:vt,instancingColor:vt&&X.instanceColor!==null,instancingMorph:vt&&X.morphTexture!==null,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:_t,matcap:Rt,envMap:Ct,envMapMode:Ct&&K.mapping,envMapPMREM:Ce,envMapMaxLod:Ce?z.length-1:null,envMapSize:Ce?z[0].width:null,aoMap:Xe,lightMap:it,bumpMap:ct,normalMap:st,displacementMap:ht,emissiveMap:pt,normalMapObjectSpace:st&&v.normalMapType===ep,normalMapTangentSpace:st&&v.normalMapType===Vr,packedNormalMap:st&&v.normalMapType===Vr&&Vv(v.normalMap.format),metalnessMap:Me,roughnessMap:He,anisotropy:ke,anisotropyMap:le,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:$,diffuseRoughness:tt,diffuseRoughnessMap:ye,dispersion:je,retroreflection:qe,iridescence:Pe,iridescenceMap:pe,iridescenceThicknessMap:Ue,sheen:nt,sheenColorMap:Ge,sheenRoughnessMap:ve,specularMap:we,specularColorMap:Ie,specularIntensityMap:V,transmission:Se,transmissionMap:xe,thicknessMap:ge,gradientMap:We,opaque:v.transparent===!1&&v.blending===Vs&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:Z,alphaHash:de,combine:v.combine,mapUv:_t&&u(v.map.channel),aoMapUv:Xe&&u(v.aoMap.channel),lightMapUv:it&&u(v.lightMap.channel),bumpMapUv:ct&&u(v.bumpMap.channel),normalMapUv:st&&u(v.normalMap.channel),displacementMapUv:ht&&u(v.displacementMap.channel),emissiveMapUv:pt&&u(v.emissiveMap.channel),metalnessMapUv:Me&&u(v.metalnessMap.channel),roughnessMapUv:He&&u(v.roughnessMap.channel),anisotropyMapUv:le&&u(v.anisotropyMap.channel),clearcoatMapUv:C&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&u(v.sheenRoughnessMap.channel),specularMapUv:we&&u(v.specularMap.channel),specularColorMapUv:Ie&&u(v.specularColorMap.channel),specularIntensityMapUv:V&&u(v.specularIntensityMap.channel),transmissionMapUv:xe&&u(v.transmissionMap.channel),thicknessMapUv:ge&&u(v.thicknessMap.channel),alphaMapUv:ee&&u(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(st||ke),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!N.attributes.uv&&(_t||ee),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&st===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Qe,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Je,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:se.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:_,decodeVideoTexture:_t&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ln,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===ln,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===Hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||Yt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return W.vertexUv1s=l.has(1),W.vertexUv2s=l.has(2),W.vertexUv3s=l.has(3),l.clear(),W}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const b=f[v.type];let F;if(b){const U=Ei[b];F=jr.clone(U.uniforms)}else F=v.uniforms;return F}function E(v,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new zv(s,b,v,i),c.push(F),h.set(b,F)),F}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function I(v){a.remove(v)}function P(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:E,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:P}}function Xv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[e]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=g),e++,M}function l(f,u,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const E=a(f,u,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):t.push(E)}function c(f,u,p,x,m,g){const M=a(f,u,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(f,u){t.length>1&&t.sort(f||qv),n.length>1&&n.sort(u||Cu),i.length>1&&i.sort(u||Cu)}function d(){for(let f=e,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Yv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Pu,s.set(n,[o])):i>=r.length?(o=new Pu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new At};break;case"SpotLight":t={position:new k,direction:new k,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function Zv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jv=0;function $v(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qv(s){const e=new Kv,t=Zv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new kt,o=new kt;function a(c){let h=0,d=0,f=0;for(let se=0;se<9;se++)n.probe[se].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,M=0,E=0,w=0,I=0,P=0,v=0,b=0,F=0,U=0;c.sort($v);for(let se=0,Q=c.length;se<Q;se++){const N=c[se],ie=N.color,ae=N.intensity,K=N.distance;let G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===gs?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=ie.r*ae,d+=ie.g*ae,f+=ie.b*ae;else if(N.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(N.sh.coefficients[te],ae);U++}else if(N.isSunLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),n.sunShadow[p]=be,n.sunShadowMap[p]=G;const Je=he.getViewportCount();for(let ft=0;ft<Je;ft++)n.sunShadowMatrix[x+ft]=he.getMatrix(ft),n.sunShadowCascade[x+ft]=he._cascadeData[ft];x+=Je,p++}n.sun[u]=te,u++}else if(N.isDirectionalLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize=he.mapSize,n.directionalShadow[m]=be,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=N.shadow.matrix,I++}n.directional[m]=te,m++}else if(N.isSpotLight){const te=e.get(N);te.position.setFromMatrixPosition(N.matrixWorld),te.color.copy(ie).multiplyScalar(ae),te.distance=K,te.coneCos=Math.cos(N.angle),te.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),te.decay=N.decay,n.spot[M]=te;const he=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,he.updateMatrices(N),N.castShadow&&F++),n.spotLightMatrix[M]=he.matrix,N.castShadow){const be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize=he.mapSize,n.spotShadow[M]=be,n.spotShadowMap[M]=G,v++}M++}else if(N.isRectAreaLight){const te=e.get(N);te.color.copy(ie).multiplyScalar(ae),te.halfWidth.set(N.width*.5,0,0),te.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=te,E++}else if(N.isPointLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),te.distance=N.distance,te.decay=N.decay,N.castShadow){const he=N.shadow,be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize=he.mapSize,be.shadowCameraNear=he.camera.near,be.shadowCameraFar=he.camera.far,n.pointShadow[g]=be,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=N.shadow.matrix,P++}n.point[g]=te,g++}else if(N.isHemisphereLight){const te=e.get(N);te.skyColor.copy(N.color).multiplyScalar(ae),te.groundColor.copy(N.groundColor).multiplyScalar(ae),n.hemi[w]=te,w++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const X=n.hash;(X.sunLength!==u||X.directionalLength!==m||X.pointLength!==g||X.spotLength!==M||X.rectAreaLength!==E||X.hemiLength!==w||X.numSunShadows!==p||X.numDirectionalShadows!==I||X.numPointShadows!==P||X.numSpotShadows!==v||X.numSpotMaps!==b||X.numLightProbes!==U)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=U,X.sunLength=u,X.directionalLength=m,X.pointLength=g,X.spotLength=M,X.rectAreaLength=E,X.hemiLength=w,X.numSunShadows=p,X.numDirectionalShadows=I,X.numPointShadows=P,X.numSpotShadows=v,X.numSpotMaps=b,X.numLightProbes=U,n.version=Jv++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const w=c[M];if(w.isSunLight){const I=n.sun[d];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),d++}else if(w.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),f++}else if(w.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const I=n.rectArea[x];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const I=n.point[u];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Lu(s){const e=new Qv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Lu(s),e.set(i,[a])):r>=o.length?(a=new Lu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
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
}`,nM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],iM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Du=new kt,xr=new k,ll=new k;function sM(s,e,t){let n=new Kr;const i=new Oe,r=new Oe,o=new dn,a=new z0,l=new k0,c={},h=t.maxTextureSize,d={[as]:Hn,[Hn]:as,[gn]:gn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new hn;p.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let g=this.type;this.render=function(P,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===Ef&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);const F=s.getRenderTarget(),U=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),se=s.state;se.setBlending(ms),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Q=g!==this.type;Q&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(ie=>ie.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,ie=P.length;N<ie;N++){const ae=P[N],K=ae.shadow;if(K===void 0){It("WebGLShadowMap:",ae,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const G=K.getFrameExtents();i.multiply(G),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,K.mapSize.y=r.y));const te=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=te,K.map===null||Q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Sr){if(ae.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Vn(i.x,i.y,{format:gs,type:Gn,minFilter:On,magFilter:On,generateMipmaps:!1}),K.map.texture.name=ae.name+".shadowMap",K.map.depthTexture=new _s(i.x,i.y,ci),K.map.depthTexture.name=ae.name+".shadowMapDepth",K.map.depthTexture.format=ls,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=En,K.map.depthTexture.magFilter=En}else ae.isPointLight?(K.map=new Kc(i.x),K.map.depthTexture=new Ld(i.x,vi)):(K.map=new Vn(i.x,i.y),K.map.depthTexture=new _s(i.x,i.y,vi)),K.map.depthTexture.name=ae.name+".shadowMap",K.map.depthTexture.format=ls,this.type===Pr?(K.map.depthTexture.compareFunction=te?_d:gd,K.map.depthTexture.minFilter=On,K.map.depthTexture.magFilter=On):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=En,K.map.depthTexture.magFilter=En);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==i.x||K.map.height!==i.y)&&K.map.setSize(i.x,i.y);const he=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ae.isPointLight!==!0&&K.updateMatrices(ae,b);const be=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:b.layers;for(let Je=0;Je<he;Je++){const ft=K.getCamera(Je);if(ae.isPointLight){const fe=K.camera,Ke=K.matrix,at=ae.distance||fe.far;at!==fe.far&&(fe.far=at,fe.updateProjectionMatrix()),xr.setFromMatrixPosition(ae.matrixWorld),fe.position.copy(xr),ll.copy(fe.position),ll.add(nM[Je]),fe.up.copy(iM[Je]),fe.lookAt(ll),fe.updateMatrixWorld(),Ke.makeTranslation(-xr.x,-xr.y,-xr.z),Du.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Du,fe.coordinateSystem,fe.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,Je),s.clear();else{Je===0&&(s.setRenderTarget(K.map),s.clear());const fe=K.getViewport(Je);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),se.viewport(o)}n=K.getFrustum(Je),w(v,b,ft,ae,be,this.type)}K.isPointLightShadow!==!0&&this.type===Sr&&M(K,b),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(F,U,X)};function M(P,v){const b=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null?P.mapPass=new Vn(i.x,i.y,{format:gs,type:Gn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(v,null,b,f,x,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(v,null,b,u,x,null)}function E(P,v,b,F){let U=null;const X=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)U=X;else if(U=b.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const se=U.uuid,Q=v.uuid;let N=c[se];N===void 0&&(N={},c[se]=N);let ie=N[Q];ie===void 0&&(ie=U.clone(),N[Q]=ie,v.addEventListener("dispose",I)),U=ie}if(U.visible=v.visible,U.wireframe=v.wireframe,F===Sr?U.side=v.shadowSide!==null?v.shadowSide:v.side:U.side=v.shadowSide!==null?v.shadowSide:d[v.side],U.alphaMap=v.alphaMap,U.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,U.map=v.map,U.clipShadows=v.clipShadows,U.clippingPlanes=v.clippingPlanes,U.clipIntersection=v.clipIntersection,U.displacementMap=v.displacementMap,U.displacementScale=v.displacementScale,U.displacementBias=v.displacementBias,U.wireframeLinewidth=v.wireframeLinewidth,U.linewidth=v.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const se=s.properties.get(U);se.light=b}return U}function w(P,v,b,F,U,X){if(P.visible===!1)return;if(P.layers.test(U)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===Sr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const N=e.update(P),ie=P.material;if(Array.isArray(ie)){const ae=N.groups;for(let K=0,G=ae.length;K<G;K++){const te=ae[K],he=ie[te.materialIndex];if(he&&he.visible){const be=E(P,he,F,X);P.onBeforeShadow(s,P,v,b,N,be,te),s.renderBufferDirect(b,null,N,be,P,te),P.onAfterShadow(s,P,v,b,N,be,te)}}}else if(ie.visible){const ae=E(P,ie,F,X);P.onBeforeShadow(s,P,v,b,N,ae,null),s.renderBufferDirect(b,null,N,ae,P,null),P.onAfterShadow(s,P,v,b,N,ae,null)}}const Q=P.children;for(let N=0,ie=Q.length;N<ie;N++)w(Q[N],v,b,F,U,X)}function I(P){P.target.removeEventListener("dispose",I);for(const b in c){const F=c[b],U=P.target.uuid;U in F&&(F[U].dispose(),delete F[U])}}}function rM(s,e){function t(){let V=!1;const xe=new dn;let ge=null;const We=new dn(0,0,0,0);return{setMask:function(ee){ge!==ee&&!V&&(s.colorMask(ee,ee,ee,ee),ge=ee)},setLocked:function(ee){V=ee},setClear:function(ee,Z,de,De,_){_===!0&&(ee*=De,Z*=De,de*=De),xe.set(ee,Z,de,De),We.equals(xe)===!1&&(s.clearColor(ee,Z,de,De),We.copy(xe))},reset:function(){V=!1,ge=null,We.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,ge=null,We=null,ee=null;return{setReversed:function(Z){if(xe!==Z){const de=e.get("EXT_clip_control");Z?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),xe=Z;const De=ee;ee=null,this.setClear(De)}},getReversed:function(){return xe},setTest:function(Z){Z?Qe(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(Z){ge!==Z&&!V&&(s.depthMask(Z),ge=Z)},setFunc:function(Z){if(xe&&(Z=up[Z]),We!==Z){switch(Z){case _l:s.depthFunc(s.NEVER);break;case xl:s.depthFunc(s.ALWAYS);break;case vl:s.depthFunc(s.LESS);break;case Br:s.depthFunc(s.LEQUAL);break;case Ml:s.depthFunc(s.EQUAL);break;case yl:s.depthFunc(s.GEQUAL);break;case Sl:s.depthFunc(s.GREATER);break;case bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}We=Z}},setLocked:function(Z){V=Z},setClear:function(Z){ee!==Z&&(ee=Z,xe&&(Z=1-Z),s.clearDepth(Z))},reset:function(){V=!1,ge=null,We=null,ee=null,xe=!1}}}function i(){let V=!1,xe=null,ge=null,We=null,ee=null,Z=null,de=null,De=null,_=null;return{setTest:function(z){V||(z?Qe(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(z){xe!==z&&!V&&(s.stencilMask(z),xe=z)},setFunc:function(z,W,O){(ge!==z||We!==W||ee!==O)&&(s.stencilFunc(z,W,O),ge=z,We=W,ee=O)},setOp:function(z,W,O){(Z!==z||de!==W||De!==O)&&(s.stencilOp(z,W,O),Z=z,de=W,De=O)},setLocked:function(z){V=z},setClear:function(z){_!==z&&(s.clearStencil(z),_=z)},reset:function(){V=!1,xe=null,ge=null,We=null,ee=null,Z=null,de=null,De=null,_=null}}}const r=new t,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,E=null,w=null,I=null,P=null,v=null,b=new At(0,0,0),F=0,U=!1,X=null,se=null,Q=null,N=null,ie=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),K=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),K=G>=2);let he=null,be={};const Je=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),fe=new dn().fromArray(Je),Ke=new dn().fromArray(ft);function at(V,xe,ge,We){const ee=new Uint8Array(4),Z=s.createTexture();s.bindTexture(V,Z),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<ge;de++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,We,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(xe+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return Z}const xt={};xt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Qe(s.DEPTH_TEST),o.setFunc(Br),ct(!1),st(ah),Qe(s.CULL_FACE),Xe(ms);function Qe(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function vt(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Yt(V,xe){return f[V]!==xe?(s.bindFramebuffer(V,xe),f[V]=xe,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=xe),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function _t(V,xe){let ge=p,We=!1;if(V){ge=u.get(xe),ge===void 0&&(ge=[],u.set(xe,ge));const ee=V.textures;if(ge.length!==ee.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,de=ee.length;Z<de;Z++)ge[Z]=s.COLOR_ATTACHMENT0+Z;ge.length=ee.length,We=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,We=!0);We&&s.drawBuffers(ge)}function Rt(V){return x!==V?(s.useProgram(V),x=V,!0):!1}const Ct={[Bs]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};Ct[Pf]=s.MIN,Ct[Lf]=s.MAX;const Ce={[Df]:s.ZERO,[If]:s.ONE,[Nf]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[kf]:s.SRC_ALPHA_SATURATE,[Bf]:s.DST_COLOR,[Of]:s.DST_ALPHA,[Uf]:s.ONE_MINUS_SRC_COLOR,[rd]:s.ONE_MINUS_SRC_ALPHA,[zf]:s.ONE_MINUS_DST_COLOR,[Ff]:s.ONE_MINUS_DST_ALPHA,[Hf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Vf]:s.CONSTANT_ALPHA,[Wf]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(V,xe,ge,We,ee,Z,de,De,_,z){if(V===ms){m===!0&&(vt(s.BLEND),m=!1);return}if(m===!1&&(Qe(s.BLEND),m=!0),V!==Af){if(V!==g||z!==U){if((M!==Bs||I!==Bs)&&(s.blendEquation(s.FUNC_ADD),M=Bs,I=Bs),z)switch(V){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.ONE,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ch:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",V);break}else switch(V){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lh:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",V);break}E=null,w=null,P=null,v=null,b.set(0,0,0),F=0,g=V,U=z}return}ee=ee||xe,Z=Z||ge,de=de||We,(xe!==M||ee!==I)&&(s.blendEquationSeparate(Ct[xe],Ct[ee]),M=xe,I=ee),(ge!==E||We!==w||Z!==P||de!==v)&&(s.blendFuncSeparate(Ce[ge],Ce[We],Ce[Z],Ce[de]),E=ge,w=We,P=Z,v=de),(De.equals(b)===!1||_!==F)&&(s.blendColor(De.r,De.g,De.b,_),b.copy(De),F=_),g=V,U=!1}function it(V,xe){V.side===gn?vt(s.CULL_FACE):Qe(s.CULL_FACE);let ge=V.side===Hn;xe&&(ge=!ge),ct(ge),V.blending===Vs&&V.transparent===!1?Xe(ms):Xe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const We=V.stencilWrite;a.setTest(We),We&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Qe(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){X!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),X=V)}function st(V){V!==wf?(Qe(s.CULL_FACE),V!==se&&(V===ah?s.cullFace(s.BACK):V===Tf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),se=V}function ht(V){V!==Q&&(K&&s.lineWidth(V),Q=V)}function pt(V,xe,ge){V?(Qe(s.POLYGON_OFFSET_FILL),(N!==xe||ie!==ge)&&(N=xe,ie=ge,o.getReversed()&&(xe=-xe,ge=-ge),s.polygonOffset(xe,ge))):vt(s.POLYGON_OFFSET_FILL)}function Me(V){V?Qe(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function He(V){V===void 0&&(V=s.TEXTURE0+ae-1),he!==V&&(s.activeTexture(V),he=V)}function ke(V,xe,ge){ge===void 0&&(he===null?ge=s.TEXTURE0+ae-1:ge=he);let We=be[ge];We===void 0&&(We={type:void 0,texture:void 0},be[ge]=We),(We.type!==V||We.texture!==xe)&&(he!==ge&&(s.activeTexture(ge),he=ge),s.bindTexture(V,xe||xt[V]),We.type=V,We.texture=xe)}function L(){const V=be[he];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function tt(){try{s.compressedTexImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function je(){try{s.compressedTexImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function qe(){try{s.texSubImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function le(){try{s.texStorage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function C(){try{s.texStorage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function S(){try{s.texImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function $(){try{s.texImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function ye(V){return d[V]!==void 0?d[V]:s.getParameter(V)}function pe(V,xe){d[V]!==xe&&(s.pixelStorei(V,xe),d[V]=xe)}function Ue(V){fe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),fe.copy(V))}function Ge(V){Ke.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ke.copy(V))}function ve(V,xe){let ge=c.get(xe);ge===void 0&&(ge=new WeakMap,c.set(xe,ge));let We=ge.get(V);We===void 0&&(We=s.getUniformBlockIndex(xe,V.name),s.uniformBlockBinding(xe,We,We),ge.set(V,We))}function we(V,xe,ge){const ee=c.get(xe).get(V);l[ee]!==ge&&(s.bindBufferBase(s.UNIFORM_BUFFER,ee,ge),l[ee]=ge)}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},he=null,be={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,E=null,w=null,I=null,P=null,v=null,b=new At(0,0,0),F=0,U=!1,X=null,se=null,Q=null,N=null,ie=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Qe,disable:vt,bindFramebuffer:Yt,drawBuffers:_t,useProgram:Rt,setBlending:Xe,setMaterial:it,setFlipSided:ct,setCullFace:st,setLineWidth:ht,setPolygonOffset:pt,setScissorTest:Me,activeTexture:He,bindTexture:ke,unbindTexture:L,compressedTexImage2D:tt,compressedTexImage3D:je,texImage2D:S,texImage3D:$,pixelStorei:pe,getParameter:ye,updateUBOMapping:ve,uniformBlockBinding:we,texStorage2D:le,texStorage3D:C,texSubImage2D:qe,texSubImage3D:Pe,compressedTexSubImage2D:nt,compressedTexSubImage3D:Se,scissor:Ue,viewport:Ge,reset:Ie}}function oM(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Xr("canvas")}function M(C,S,$){let ye=1;const pe=le(C);if((pe.width>$||pe.height>$)&&(ye=$/Math.max(pe.width,pe.height)),ye<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ue=Math.floor(ye*pe.width),Ge=Math.floor(ye*pe.height);f===void 0&&(f=g(Ue,Ge));const ve=S?g(Ue,Ge):f;return ve.width=Ue,ve.height=Ge,ve.getContext("2d").drawImage(C,0,0,Ue,Ge),It("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ue+"x"+Ge+")."),ve}else return"data"in C&&It("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),C;return C}function E(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,S,$,ye,pe,Ue=!1){if(C!==null){if(s[C]!==void 0)return s[C];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ge;ye&&(Ge=e.get("EXT_texture_norm16"),Ge||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=S;if(S===s.RED&&($===s.FLOAT&&(ve=s.R32F),$===s.HALF_FLOAT&&(ve=s.R16F),$===s.UNSIGNED_BYTE&&(ve=s.R8),$===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.R16_EXT),$===s.SHORT&&Ge&&(ve=Ge.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ve=s.R8UI),$===s.UNSIGNED_SHORT&&(ve=s.R16UI),$===s.UNSIGNED_INT&&(ve=s.R32UI),$===s.BYTE&&(ve=s.R8I),$===s.SHORT&&(ve=s.R16I),$===s.INT&&(ve=s.R32I)),S===s.RG&&($===s.FLOAT&&(ve=s.RG32F),$===s.HALF_FLOAT&&(ve=s.RG16F),$===s.UNSIGNED_BYTE&&(ve=s.RG8),$===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.RG16_EXT),$===s.SHORT&&Ge&&(ve=Ge.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ve=s.RG8UI),$===s.UNSIGNED_SHORT&&(ve=s.RG16UI),$===s.UNSIGNED_INT&&(ve=s.RG32UI),$===s.BYTE&&(ve=s.RG8I),$===s.SHORT&&(ve=s.RG16I),$===s.INT&&(ve=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),$===s.UNSIGNED_INT&&(ve=s.RGB32UI),$===s.BYTE&&(ve=s.RGB8I),$===s.SHORT&&(ve=s.RGB16I),$===s.INT&&(ve=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),$===s.UNSIGNED_INT&&(ve=s.RGBA32UI),$===s.BYTE&&(ve=s.RGBA8I),$===s.SHORT&&(ve=s.RGBA16I),$===s.INT&&(ve=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.RGB16_EXT),$===s.SHORT&&Ge&&(ve=Ge.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),S===s.RGBA){const we=Ue?na:Qt.getTransfer(pe);$===s.FLOAT&&(ve=s.RGBA32F),$===s.HALF_FLOAT&&(ve=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ve=we===ln?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.RGBA16_EXT),$===s.SHORT&&Ge&&(ve=Ge.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function v(C,S){let $;return C?S===null||S===vi||S===Ks?$=s.DEPTH24_STENCIL8:S===ci?$=s.DEPTH32F_STENCIL8:S===kr&&($=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Ks?$=s.DEPTH_COMPONENT24:S===ci?$=s.DEPTH_COMPONENT32F:S===kr&&($=s.DEPTH_COMPONENT16),$}function b(C,S){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function F(C){const S=new WeakRef(C);n.get(C).__ref=S,p.add(S),x.register(C,S,S)}function U(C){const S=n.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function X(C){Q(C.target)}function se(C){N(C.target)}function Q(C){C.removeEventListener("dispose",X),U(C),ae(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",se),U(C),G(C)}function ie(){for(const C of p){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):Q(S))}p.clear(),d.clear()}function ae(C){const S=n.get(C);if(S.__webglInit===void 0)return;const $=C.source,ye=u.get($);if(ye){const pe=ye[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&K(C),Object.keys(ye).length===0&&u.delete($)}n.remove(C)}function K(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const $=C.source,ye=u.get($);delete ye[S.__cacheKey],o.memory.textures--}function G(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const $=C.depthTexture;if($&&$.renderTarget===C&&Q($),C.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(S.__webglFramebuffer[pe]))for(let Ue=0;Ue<S.__webglFramebuffer[pe].length;Ue++)s.deleteFramebuffer(S.__webglFramebuffer[pe][Ue]);else s.deleteFramebuffer(S.__webglFramebuffer[pe]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[pe])}else{if(Array.isArray(S.__webglFramebuffer))for(let pe=0;pe<S.__webglFramebuffer.length;pe++)s.deleteFramebuffer(S.__webglFramebuffer[pe]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pe=0;pe<S.__webglColorRenderbuffer.length;pe++)S.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[pe]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ye=C.textures;for(let pe=0,Ue=ye.length;pe<Ue;pe++){const Ge=n.get(ye[pe]);Ge.__webglTexture&&(s.deleteTexture(Ge.__webglTexture),o.memory.textures--),n.remove(ye[pe])}n.remove(C)}let te=0;function he(){te=0}function be(){return te}function Je(C){te=C}function ft(){const C=te;return C>=i.maxTextures&&It("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),te+=1,C}function fe(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Ke(C,S){const $=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){const ye=C.image;if(ye===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{it($,C,S);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function at(C,S){const $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){it($,C,S);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function xt(C,S){const $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){it($,C,S);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function Qe(C,S){const $=n.get(C);if(C.version>0&&$.__version!==C.version){ct($,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const vt={[hi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Qo]:s.MIRRORED_REPEAT},Yt={[En]:s.NEAREST,[ld]:s.NEAREST_MIPMAP_NEAREST,[br]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Ho]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},_t={[np]:s.NEVER,[xd]:s.ALWAYS,[ip]:s.LESS,[gd]:s.LEQUAL,[sp]:s.EQUAL,[_d]:s.GEQUAL,[rp]:s.GREATER,[op]:s.NOTEQUAL};function Rt(C,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===Ho||S.magFilter===br||S.magFilter===Ci||S.minFilter===On||S.minFilter===Ho||S.minFilter===br||S.minFilter===Ci)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,vt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,vt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,vt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Yt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Yt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===En||S.minFilter!==br&&S.minFilter!==Ci||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(C,S){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",X),F(S));const ye=S.source;let pe=u.get(ye);pe===void 0&&(pe={},u.set(ye,pe));const Ue=fe(S);if(Ue!==C.__cacheKey){pe[Ue]===void 0&&(pe[Ue]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),pe[Ue].usedTimes++;const Ge=pe[C.__cacheKey];Ge!==void 0&&(pe[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&K(S)),C.__cacheKey=Ue,C.__webglTexture=pe[Ue].texture}return $}function Ce(C,S,$){return Math.floor(Math.floor(C/$)/S)}function Xe(C,S,$,ye){const Ue=C.updateRanges;if(Ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,ye,S.data);else{Ue.sort((V,xe)=>V.start-xe.start);let Ge=0;for(let V=1;V<Ue.length;V++){const xe=Ue[Ge],ge=Ue[V],We=xe.start+xe.count,ee=Ce(ge.start,S.width,4),Z=Ce(xe.start,S.width,4);ge.start<=We+1&&ee===Z&&Ce(ge.start+ge.count-1,S.width,4)===ee?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++Ge,Ue[Ge]=ge)}Ue.length=Ge+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let V=0,xe=Ue.length;V<xe;V++){const ge=Ue[V],We=Math.floor(ge.start/4),ee=Math.ceil(ge.count/4),Z=We%S.width,de=Math.floor(We/S.width),De=ee,_=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(s.UNPACK_SKIP_ROWS,de),t.texSubImage2D(s.TEXTURE_2D,0,Z,de,De,_,$,ye,S.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function it(C,S,$){let ye=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ye=s.TEXTURE_3D);const pe=Ct(C,S),Ue=S.source;t.bindTexture(ye,C.__webglTexture,s.TEXTURE0+$);const Ge=n.get(Ue);if(Ue.version!==Ge.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const _=Qt.getPrimaries(Qt.workingColorSpace),z=S.colorSpace===Vi?null:Qt.getPrimaries(S.colorSpace),W=S.colorSpace===Vi||_===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,W)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let we=M(S.image,!1,i.maxTextureSize);we=Se(S,we);const Ie=r.convert(S.format,S.colorSpace),V=r.convert(S.type);let xe=P(S.internalFormat,Ie,V,S.normalized,S.colorSpace,S.isVideoTexture);Rt(ye,S);let ge;const We=S.mipmaps,ee=S.isVideoTexture!==!0,Z=Ge.__version===void 0||pe===!0,de=Ue.dataReady,De=b(S,we);if(S.isDepthTexture)xe=v(S.format===ss,S.type),Z&&(ee?t.texStorage2D(s.TEXTURE_2D,1,xe,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,xe,we.width,we.height,0,Ie,V,null));else if(S.isDataTexture)if(We.length>0){ee&&Z&&t.texStorage2D(s.TEXTURE_2D,De,xe,We[0].width,We[0].height);for(let _=0,z=We.length;_<z;_++)ge=We[_],ee?de&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,ge.width,ge.height,Ie,V,ge.data):t.texImage2D(s.TEXTURE_2D,_,xe,ge.width,ge.height,0,Ie,V,ge.data);S.generateMipmaps=!1}else ee?(Z&&t.texStorage2D(s.TEXTURE_2D,De,xe,we.width,we.height),de&&Xe(S,we,Ie,V)):t.texImage2D(s.TEXTURE_2D,0,xe,we.width,we.height,0,Ie,V,we.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ee&&Z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,xe,We[0].width,We[0].height,we.depth);for(let _=0,z=We.length;_<z;_++)if(ge=We[_],S.format!==_i)if(Ie!==null)if(ee){if(de)if(S.layerUpdates.size>0){const W=uu(ge.width,ge.height,S.format,S.type);for(const O of S.layerUpdates){const re=ge.data.subarray(O*W/ge.data.BYTES_PER_ELEMENT,(O+1)*W/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,O,ge.width,ge.height,1,Ie,re)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,ge.width,ge.height,we.depth,Ie,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_,xe,ge.width,ge.height,we.depth,0,ge.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?de&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,ge.width,ge.height,we.depth,Ie,V,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_,xe,ge.width,ge.height,we.depth,0,Ie,V,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ee&&Z&&t.texStorage2D(s.TEXTURE_2D,De,xe,We[0].width,We[0].height);for(let _=0,z=We.length;_<z;_++)ge=We[_],S.format!==_i?Ie!==null?ee?de&&t.compressedTexSubImage2D(s.TEXTURE_2D,_,0,0,ge.width,ge.height,Ie,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,_,xe,ge.width,ge.height,0,ge.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?de&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,ge.width,ge.height,Ie,V,ge.data):t.texImage2D(s.TEXTURE_2D,_,xe,ge.width,ge.height,0,Ie,V,ge.data)}else if(S.isDataArrayTexture)if(ee){if(Z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,xe,we.width,we.height,we.depth),de)if(S.layerUpdates.size>0){const _=uu(we.width,we.height,S.format,S.type);for(const z of S.layerUpdates){const W=we.data.subarray(z*_/we.data.BYTES_PER_ELEMENT,(z+1)*_/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,z,we.width,we.height,1,Ie,V,W)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,V,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,we.width,we.height,we.depth,0,Ie,V,we.data);else if(S.isData3DTexture)ee?(Z&&t.texStorage3D(s.TEXTURE_3D,De,xe,we.width,we.height,we.depth),de&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,V,we.data)):t.texImage3D(s.TEXTURE_3D,0,xe,we.width,we.height,we.depth,0,Ie,V,we.data);else if(S.isFramebufferTexture){if(Z)if(ee)t.texStorage2D(s.TEXTURE_2D,De,xe,we.width,we.height);else{let _=we.width,z=we.height;for(let W=0;W<De;W++)t.texImage2D(s.TEXTURE_2D,W,xe,_,z,0,Ie,V,null),_>>=1,z>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const _=s.canvas;if(_.hasAttribute("layoutsubtree")||_.setAttribute("layoutsubtree","true"),we.parentNode!==_){_.appendChild(we),d.add(S),_.onpaint=z=>{const W=z.changedElements;for(const O of d)W.includes(O.image)&&(O.needsUpdate=!0)},_.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,we);else{const W=s.RGBA,O=s.RGBA,re=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,W,O,re,we)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(We.length>0){if(ee&&Z){const _=le(We[0]);t.texStorage2D(s.TEXTURE_2D,De,xe,_.width,_.height)}for(let _=0,z=We.length;_<z;_++)ge=We[_],ee?de&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,Ie,V,ge):t.texImage2D(s.TEXTURE_2D,_,xe,Ie,V,ge);S.generateMipmaps=!1}else if(ee){if(Z){const _=le(we);t.texStorage2D(s.TEXTURE_2D,De,xe,_.width,_.height)}de&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,V,we)}else t.texImage2D(s.TEXTURE_2D,0,xe,Ie,V,we);E(S)&&S.mipmapsAutoUpdate===!0&&w(ye),Ge.__version=Ue.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ct(C,S,$){if(S.image.length!==6)return;const ye=Ct(C,S),pe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+$);const Ue=n.get(pe);if(pe.version!==Ue.__version||ye===!0){t.activeTexture(s.TEXTURE0+$);const Ge=Qt.getPrimaries(Qt.workingColorSpace),ve=S.colorSpace===Vi?null:Qt.getPrimaries(S.colorSpace),we=S.colorSpace===Vi||Ge===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,V=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let O=0;O<6;O++)!Ie&&!V?xe[O]=M(S.image[O],!0,i.maxCubemapSize):xe[O]=V?S.image[O].image:S.image[O],xe[O]=Se(S,xe[O]);const ge=xe[0],We=r.convert(S.format,S.colorSpace),ee=r.convert(S.type);let Z=P(S.internalFormat,We,ee,S.normalized,S.colorSpace);const de=S.isVideoTexture!==!0,De=Ue.__version===void 0||ye===!0,_=pe.dataReady;let z=b(S,ge);Rt(s.TEXTURE_CUBE_MAP,S);let W;if(S.isDepthTexture){if(Z=v(S.format===ss,S.type),De)if(de)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Z,ge.width,ge.height);else for(let O=0;O<6;O++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Z,ge.width,ge.height,0,We,ee,null)}else if(Ie){de&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,z,Z,ge.width,ge.height);for(let O=0;O<6;O++){W=xe[O].mipmaps;for(let re=0;re<W.length;re++){const ce=W[re];S.format!==_i?We!==null?de?_&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,ce.width,ce.height,We,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,Z,ce.width,ce.height,0,ce.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,ce.width,ce.height,We,ee,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,Z,ce.width,ce.height,0,We,ee,ce.data)}}}else{if(W=S.mipmaps,de&&De){W.length>0&&z++;const O=le(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,z,Z,O.width,O.height)}for(let O=0;O<6;O++)if(V){de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,xe[O].width,xe[O].height,We,ee,xe[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Z,xe[O].width,xe[O].height,0,We,ee,xe[O].data);for(let re=0;re<W.length;re++){const Ve=W[re].image[O].image;de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Ve.width,Ve.height,We,ee,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,Z,Ve.width,Ve.height,0,We,ee,Ve.data)}}else{de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,We,ee,xe[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Z,We,ee,xe[O]);for(let re=0;re<W.length;re++){const ce=W[re];de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,We,ee,ce.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,Z,We,ee,ce.image[O])}}}E(S)&&S.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),Ue.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function st(C,S,$,ye,pe,Ue){const Ge=r.convert($.format,$.colorSpace),ve=r.convert($.type),we=P($.internalFormat,Ge,ve,$.normalized,$.colorSpace),Ie=n.get(S),V=n.get($);if(V.__renderTarget=S,!Ie.__hasExternalTextures){const xe=Math.max(1,S.width>>Ue),ge=Math.max(1,S.height>>Ue);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ue,we,xe,ge,S.depth,0,Ge,ve,null):t.texImage2D(pe,Ue,we,xe,ge,0,Ge,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Pe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,pe,V.__webglTexture,0,qe(S)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,pe,V.__webglTexture,Ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(C,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const ye=S.depthTexture,pe=ye&&ye.isDepthTexture?ye.type:null,Ue=v(S.stencilBuffer,pe),Ge=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),Ue,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),Ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,C)}else{const ye=S.textures;for(let pe=0;pe<ye.length;pe++){const Ue=ye[pe],Ge=r.convert(Ue.format,Ue.colorSpace),ve=r.convert(Ue.type),we=P(Ue.internalFormat,Ge,ve,Ue.normalized,Ue.colorSpace);Pe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),we,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),we,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,we,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(C,S,$){const ye=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=n.get(S.depthTexture);pe.__renderTarget=S;const Ue=ye?S.depthTexture.image[0]:S.depthTexture.image;(!pe.__webglTexture||Ue.width!==S.width||Ue.height!==S.height)&&(Ue.width=S.width,Ue.height=S.height,S.depthTexture.needsUpdate=!0),ye?Qe(S.depthTexture,0):Ke(S.depthTexture,0);const Ge=pe.__webglTexture,ve=qe(S),we=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,Ie=S.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ls)Pe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,we,Ge,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,we,Ge,0);else if(S.depthTexture.format===ss)Pe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,we,Ge,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,we,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(C){const S=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ye=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ye){const pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ye.removeEventListener("dispose",pe)};ye.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=ye}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let ye=0;ye<6;ye++)pt(S.__webglFramebuffer[ye],C,ye);else C.texture.mipmaps.length>0?pt(S.__webglFramebuffer[0],C,0):pt(S.__webglFramebuffer,C,0);else if($){S.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ye]),S.__webglDepthbuffer[ye]===void 0)S.__webglDepthbuffer[ye]=s.createRenderbuffer(),ht(S.__webglDepthbuffer[ye],C,!1);else{const pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=S.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ue)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ht(S.__webglDepthbuffer,C,!1);else{const pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(C,S,$){const ye=n.get(C);S!==void 0&&st(ye.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Me(C)}function ke(C){const S=C.texture,$=n.get(C),ye=n.get(S);C.addEventListener("dispose",se),F(C);const pe=C.textures,Ue=C.isWebGLCubeRenderTarget===!0,Ge=pe.length>1;if(Ge||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=S.version,o.memory.textures++),Ue){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps.length>0){$.__webglFramebuffer[ve]=[];for(let we=0;we<S.mipmaps.length;we++)$.__webglFramebuffer[ve][we]=s.createFramebuffer()}else $.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(S.mipmaps.length>0){$.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)$.__webglFramebuffer[ve]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let ve=0,we=pe.length;ve<we;ve++){const Ie=n.get(pe[ve]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Pe(C)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){const we=pe[ve];$.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);const Ie=r.convert(we.format,we.colorSpace),V=r.convert(we.type),xe=P(we.internalFormat,Ie,V,we.normalized,we.colorSpace,C.isXRRenderTarget===!0),ge=qe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,xe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,$.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ht($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ue){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)st($.__webglFramebuffer[ve][we],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else st($.__webglFramebuffer[ve],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);E(S)?w(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Ge){for(let ve=0,we=pe.length;ve<we;ve++){const Ie=pe[ve],V=n.get(Ie);let xe=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,V.__webglTexture),Rt(xe,Ie),st($.__webglFramebuffer,C,Ie,s.COLOR_ATTACHMENT0+ve,xe,0),E(Ie)&&w(xe)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,ye.__webglTexture),Rt(ve,S),S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)st($.__webglFramebuffer[we],C,S,s.COLOR_ATTACHMENT0,ve,we);else st($.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ve,0);E(S)?w(ve):S.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Me(C)}function L(C){const S=C.textures;for(let $=0,ye=S.length;$<ye;$++){const pe=S[$];if(E(pe)&&pe.mipmapsAutoUpdate===!0){const Ue=I(C),Ge=n.get(pe).__webglTexture;t.bindTexture(Ue,Ge),w(Ue),t.unbindTexture()}}}const tt=[];function je(C){if(C.samples>0){if(Pe(C)===!1){const S=C.textures,$=C.width,ye=C.height;let pe=s.COLOR_BUFFER_BIT;const Ue=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=n.get(C),ve=S.length>1;if(ve)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const V=n.get(S[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,$,ye,0,0,$,ye,pe,s.NEAREST),l===!0&&(tt.length=0,tt.push(s.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&tt.push(Ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const V=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function qe(C){return Math.min(i.maxSamples,C.samples)}function Pe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Se(C,S){const $=C.colorSpace,ye=C.format,pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==ii&&$!==Vi&&(Qt.getTransfer($)===ln?(ye!==_i||pe!==ti)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",$)),S}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ft,this.resetTextureUnits=he,this.getTextureUnits=be,this.setTextureUnits=Je,this.setTexture2D=Ke,this.setTexture2DArray=at,this.setTexture3D=xt,this.setTextureCube=Qe,this.rebindTextures=He,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Pe,this.dispose=ie}function aM(s,e){function t(n,i=Vi){let r;const o=Qt.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===Tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ud)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===cd)return s.BYTE;if(n===hd)return s.SHORT;if(n===kr)return s.UNSIGNED_SHORT;if(n===wc)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===ci)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===fd)return s.ALPHA;if(n===pd)return s.RGB;if(n===_i)return s.RGBA;if(n===ls)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===ga)return s.RED;if(n===Ac)return s.RED_INTEGER;if(n===gs)return s.RG;if(n===Rc)return s.RG_INTEGER;if(n===Cc)return s.RGBA_INTEGER;if(n===Go||n===Vo||n===Wo||n===Xo)if(o===ln)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Tl||n===El||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl||n===Ll||n===Dl||n===jo||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ll)return r.COMPRESSED_R11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Zl||n===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kl)return o===ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Ql||n===ea||n===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
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

}`;class hM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uM extends Ji{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new hM,g={},M=t.getContextAttributes();let E=null,w=null;const I=[],P=[],v=new Oe;let b=null,F=null;const U=new $n;U.viewport=new dn;const X=new $n;X.viewport=new dn;const se=[U,X],Q=new am;let N=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let Ke=I[fe];return Ke===void 0&&(Ke=new Fa,I[fe]=Ke),Ke.getTargetRaySpace()},this.getControllerGrip=function(fe){let Ke=I[fe];return Ke===void 0&&(Ke=new Fa,I[fe]=Ke),Ke.getGripSpace()},this.getHand=function(fe){let Ke=I[fe];return Ke===void 0&&(Ke=new Fa,I[fe]=Ke),Ke.getHandSpace()};function ae(fe){const Ke=P.indexOf(fe.inputSource);if(Ke===-1)return;const at=I[Ke];at!==void 0&&(at.update(fe.inputSource,fe.frame,c||o),at.dispatchEvent({type:fe.type,data:fe.inputSource}))}function K(){i.removeEventListener("select",ae),i.removeEventListener("selectstart",ae),i.removeEventListener("selectend",ae),i.removeEventListener("squeeze",ae),i.removeEventListener("squeezestart",ae),i.removeEventListener("squeezeend",ae),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",G);for(let fe=0;fe<I.length;fe++){const Ke=P[fe];Ke!==null&&(P[fe]=null,I[fe].disconnect(Ke))}N=null,ie=null,m.reset();for(const fe in g)delete g[fe];if(e.setRenderTarget(E),u=null,f=null,d=null,i=null,w=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),F!==null){const fe=F.camera;fe.fov=F.fov,fe.zoom=F.zoom,fe.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){r=fe,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){a=fe,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(fe){if(i=fe,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",ae),i.addEventListener("selectstart",ae),i.addEventListener("selectend",ae),i.addEventListener("squeeze",ae),i.addEventListener("squeezestart",ae),i.addEventListener("squeezeend",ae),i.addEventListener("end",K),i.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,xt=null,Qe=null;M.depth&&(Qe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,at=M.stencil?ss:ls,xt=M.stencil?Ks:vi);const vt={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(vt),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Vn(f.textureWidth,f.textureHeight,{format:_i,type:ti,depthTexture:new _s(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const at={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,at),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Vn(u.framebufferWidth,u.framebufferHeight,{format:_i,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(fe){for(let Ke=0;Ke<fe.removed.length;Ke++){const at=fe.removed[Ke],xt=P.indexOf(at);xt>=0&&(P[xt]=null,I[xt].disconnect(at))}for(let Ke=0;Ke<fe.added.length;Ke++){const at=fe.added[Ke];let xt=P.indexOf(at);if(xt===-1){for(let vt=0;vt<I.length;vt++)if(vt>=P.length){P.push(at),xt=vt;break}else if(P[vt]===null){P[vt]=at,xt=vt;break}if(xt===-1)break}const Qe=I[xt];Qe&&Qe.connect(at)}}function te(fe,Ke){Ke===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(Ke.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(i===null)return;let Ke=fe.near,at=fe.far;m.texture!==null&&(m.depthNear>0&&(Ke=m.depthNear),m.depthFar>0&&(at=m.depthFar)),Q.near=X.near=U.near=Ke,Q.far=X.far=U.far=at,(N!==Q.near||ie!==Q.far)&&(i.updateRenderState({depthNear:Q.near,depthFar:Q.far}),N=Q.near,ie=Q.far),Q.layers.mask=fe.layers.mask|6,U.layers.mask=Q.layers.mask&-5,X.layers.mask=Q.layers.mask&-3;const xt=fe.parent,Qe=Q.cameras;te(Q,xt);for(let vt=0;vt<Qe.length;vt++)te(Qe[vt],xt);Q.projectionMatrix.copy(U.projectionMatrix),Q.projectionMatrixInverse.copy(U.projectionMatrixInverse),F===null&&fe.isPerspectiveCamera&&(F={camera:fe,fov:fe.fov,zoom:fe.zoom}),he(fe,Q,xt)};function he(fe,Ke,at){at===null?fe.matrix.copy(Ke.matrixWorld):(fe.matrix.copy(at.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(Ke.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(Ke.projectionMatrix),fe.projectionMatrixInverse.copy(Ke.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Zs*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(fe){l=fe,f!==null&&(f.fixedFoveation=fe),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=fe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(fe){return g[fe]};let be=null;function Je(fe,Ke){if(h=Ke.getViewerPose(c||o),p=Ke,h!==null){const at=h.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let xt=!1;at.length!==Q.cameras.length&&(Q.cameras.length=0,xt=!0);for(let _t=0;_t<at.length;_t++){const Rt=at[_t];let Ct=null;if(u!==null)Ct=u.getViewport(Rt);else{const Xe=d.getViewSubImage(f,Rt);Ct=Xe.viewport,_t===0&&(e.setRenderTargetTextures(w,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(w))}let Ce=se[_t];Ce===void 0&&(Ce=new $n,Ce.layers.enable(_t),Ce.viewport=new dn,se[_t]=Ce),Ce.matrix.fromArray(Rt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Rt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),_t===0&&(Q.matrix.copy(Ce.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),xt===!0&&Q.cameras.push(Ce)}const Qe=i.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const _t=d.getDepthInformation(at[0]);_t&&_t.isValid&&_t.texture&&m.init(_t,i.renderState)}if(Qe&&Qe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let _t=0;_t<at.length;_t++){const Rt=at[_t].camera;if(Rt){let Ct=g[Rt];Ct||(Ct=new Dd,g[Rt]=Ct);const Ce=d.getCameraImage(Rt);Ct.sourceTexture=Ce}}}}for(let at=0;at<I.length;at++){const xt=P[at],Qe=I[at];xt!==null&&Qe!==void 0&&Qe.update(xt,Ke,c||o)}be&&be(fe,Ke),Ke.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ke}),p=null}const ft=new $d;ft.setAnimationLoop(Je),this.setAnimationLoop=function(fe){be=fe},this.dispose=function(){}}}const dM=new kt,lf=new qt;lf.set(-1,0,0,0,1,0,0,0,1);function fM(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Hd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,E,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Hn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Hn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),E=M.envMap,w=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pM(s,e,t,n){let i={},r={};function o(M,E){const w=E.program;n.uniformBlockBinding(M,w,i[M.id])}function a(M,E){let w=i[M.id];w===void 0&&(p(M),w=l(M),i[M.id]=w,M.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(M,I);const P=e.render.frame;r[M.id]!==P&&(c(M),r[M.id]=P)}function l(M){const E=s.createBuffer(),w=M.__size,I=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,w,I),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(M){const E=i[M.id],w=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,v=w.length;P<v;P++){const b=w[P];if(Array.isArray(b))for(let F=0,U=b.length;F<U;F++)h(b[F],P,F,I);else h(b,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,E,w,I){if(f(M,E,w,I)===!0){const P=M.__offset,v=M.value;if(Array.isArray(v)){let b=0;for(let F=0;F<v.length;F++){const U=v[F],X=x(U,!0);d(U,M.__data,b),b+=X.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,M.__data)}}function d(M,E,w){typeof M=="number"||typeof M=="boolean"?E[w]=M:M.isMatrix3?(E[w]=M.elements[0],E[w+1]=M.elements[1],E[w+2]=M.elements[2],E[w+3]=0,E[w+4]=M.elements[3],E[w+5]=M.elements[4],E[w+6]=M.elements[5],E[w+7]=0,E[w+8]=M.elements[6],E[w+9]=M.elements[7],E[w+10]=M.elements[8],E[w+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-w),w):M.toArray(E,w)}function f(M,E,w,I){const P=M.value,v=E+"_"+w;if(Array.isArray(P)){I[v]===void 0&&(I[v]=[]);const b=I[v];let F=!1;for(let U=0;U<P.length;U++)u(P[U],b,U)===!0&&(F=!0);return F}return u(P,I,v)}function u(M,E,w){if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:ArrayBuffer.isView(M)?E[w]=M.slice():E[w]=M.clone(),!0;{const I=E[w];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return E[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function p(M){const E=M.uniforms;let w=0;const I=16;for(let v=0,b=E.length;v<b;v++){const F=Array.isArray(E[v])?E[v]:[E[v]];for(let U=0,X=F.length;U<X;U++){const se=F[U],Q=Array.isArray(se.value)?se.value:[se.value],N=Array.isArray(E[v])||Array.isArray(se.value);let ie=w;for(let K=0,G=Q.length;K<G;K++){const te=Q[K],he=x(te,N),be=w%I,Je=be%he.boundary,ft=be+Je;w+=Je,ft!==0&&I-ft<he.storage&&(w+=I-ft),K===0&&(ie=w),w+=he.storage}const ae=se.type==="int"?Int32Array:se.type==="uint"?Uint32Array:Float32Array;se.__data=new ae((w-ie)/Float32Array.BYTES_PER_ELEMENT),se.__offset=ie}}const P=w%I;return P>0&&(w+=I-P),M.__size=w,M.__cache={},this}function x(M,E){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):It("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(M){const E=M.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:g}}const mM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function gM(){return wi===null&&(wi=new xa(mM,16,16,gs,Gn),wi.name="DFG_LUT",wi.minFilter=On,wi.magFilter=On,wi.wrapS=Yn,wi.wrapT=Yn,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class _M{constructor(e={}){const{canvas:t=cp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ti}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=u,m=new Set([Cc,Rc,Ac]),g=new Set([ti,vi,kr,Ks,Tc,Ec]),M=new Uint32Array(4),E=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const v=[],b=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let X=!1,se=null,Q=null,N=null,ie=null;this._outputColorSpace=Tn;let ae=0,K=0,G=null,te=-1,he=null;const be=new dn,Je=new dn;let ft=null;const fe=new At(0);let Ke=0,at=t.width,xt=t.height,Qe=1,vt=null,Yt=null;const _t=new dn(0,0,at,xt),Rt=new dn(0,0,at,xt);let Ct=!1;const Ce=new Kr,Xe=new Bc;let it=!1,ct=!1;const st=new kt,ht=new k,pt=new dn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ke(){return G===null?Qe:1}let L=n;function tt(y,R){return t.getContext(y,R)}let je,qe,Pe,nt,Se,le,C,S,$,ye,pe,Ue,Ge,ve,we,Ie,V,xe,ge,We,ee,Z,de;try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",z,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",O,!1),L===null){const R="webgl2";if(L=tt(R,y),L===null)throw tt(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(y){throw t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",O,!1),Gt("WebGLRenderer: "+y.message),y}function De(){je=new Mx(L),je.init(),ee=new aM(L,je),qe=new cx(L,je,e,ee),Pe=new rM(L,je),qe.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),Q=L.createFramebuffer(),N=L.createFramebuffer(),ie=L.createFramebuffer(),nt=new bx(L),Se=new Xv,le=new oM(L,je,Pe,Se,qe,ee,nt),C=new vx(U),S=new Tm(L),Z=new ax(L,S),$=new yx(L,S,nt,Z),ye=new Tx(L,$,S,Z,nt),xe=new wx(L,qe,le),we=new hx(Se),pe=new Wv(U,C,je,qe,Z,we),Ue=new fM(U,Se),Ge=new Yv,ve=new jv(je),V=new ox(U,C,Pe,ye,p,l),Ie=new sM(U,ye,qe),de=new pM(L,nt,qe,Pe),ge=new lx(L,je,nt),We=new Sx(L,je,nt),nt.programs=pe.programs,U.capabilities=qe,U.extensions=je,U.properties=Se,U.renderLists=Ge,U.shadowMap=Ie,U.state=Pe,U.info=nt}x!==ti&&(F=new Ax(x,t.width,t.height,a,i,r));const _=new uM(U,L);this.xr=_,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Qe},this.setPixelRatio=function(y){y!==void 0&&(Qe=y,this.setSize(at,xt,!1))},this.getSize=function(y){return y.set(at,xt)},this.setSize=function(y,R,q=!0){if(_.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}at=y,xt=R,t.width=Math.floor(y*Qe),t.height=Math.floor(R*Qe),q===!0&&(t.style.width=y+"px",t.style.height=R+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(at*Qe,xt*Qe).floor()},this.setDrawingBufferSize=function(y,R,q){at=y,xt=R,Qe=q,t.width=Math.floor(y*q),t.height=Math.floor(R*q),this.setViewport(0,0,y,R)},this.setEffects=function(y){if(x===ti){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let R=0;R<y.length;R++)if(y[R].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(be)},this.getViewport=function(y){return y.copy(_t)},this.setViewport=function(y,R,q,B){y.isVector4?_t.set(y.x,y.y,y.z,y.w):_t.set(y,R,q,B),Pe.viewport(be.copy(_t).multiplyScalar(ke()).round())},this.getScissor=function(y){return y.copy(Rt)},this.setScissor=function(y,R,q,B){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,R,q,B),Pe.scissor(Je.copy(Rt).multiplyScalar(ke()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(y){Pe.setScissorTest(Ct=y)},this.setOpaqueSort=function(y){vt=y},this.setTransparentSort=function(y){Yt=y},this.getClearColor=function(y){return y.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(y=!0,R=!0,q=!0){let B=0;if(y){let Y=!1;if(G!==null){const me=G.texture.format;Y=m.has(me)}if(Y){const me=G.texture.type,Ne=g.has(me),Fe=V.getClearColor(),Be=V.getClearAlpha(),et=Fe.r,mt=Fe.g,Mt=Fe.b;Ne?(M[0]=et,M[1]=mt,M[2]=Mt,M[3]=Be,L.clearBufferuiv(L.COLOR,0,M)):(E[0]=et,E[1]=mt,E[2]=Mt,E[3]=Be,L.clearBufferiv(L.COLOR,0,E))}else B|=L.COLOR_BUFFER_BIT}R&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),se=y},this.dispose=function(){t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",O,!1),V.dispose(),Ge.dispose(),ve.dispose(),le.dispose(),Se.dispose(),C.dispose(),ye.dispose(),$.dispose(),Z.dispose(),de.dispose(),pe.dispose(),_.dispose(),_.removeEventListener("sessionstart",Ot),_.removeEventListener("sessionend",Pt),Ze.stop()};function z(y){y.preventDefault(),ia("WebGLRenderer: Context Lost."),X=!0}function W(){ia("WebGLRenderer: Context Restored."),X=!1;const y=nt.autoReset,R=Ie.enabled,q=Ie.autoUpdate,B=Ie.needsUpdate,Y=Ie.type;De(),nt.autoReset=y,Ie.enabled=R,Ie.autoUpdate=q,Ie.needsUpdate=B,Ie.type=Y}function O(y){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function re(y){const R=y.target;R.removeEventListener("dispose",re),ce(R)}function ce(y){Ve(y),Se.remove(y)}function Ve(y){const R=Se.get(y).programs;R!==void 0&&(R.forEach(function(q){pe.releaseProgram(q)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,q,B,Y,me){R===null&&(R=Me);const Ne=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Fe=j(y,R,q,B,Y);Pe.setMaterial(B,Ne);let Be=q.index,et=1;if(B.wireframe===!0){if(Be=$.getWireframeAttribute(q),Be===void 0)return;et=2}const mt=q.drawRange,Mt=q.attributes.position;let dt=mt.start*et,Nt=(mt.start+mt.count)*et;me!==null&&(dt=Math.max(dt,me.start*et),Nt=Math.min(Nt,(me.start+me.count)*et)),Be!==null?(dt=Math.max(dt,0),Nt=Math.min(Nt,Be.count)):Mt!=null&&(dt=Math.max(dt,0),Nt=Math.min(Nt,Mt.count));const Bt=Nt-dt;if(Bt<0||Bt===1/0)return;Z.setup(Y,B,Fe,q,Be);let Dt,Vt=ge;if(Be!==null&&(Dt=S.get(Be),Vt=We,Vt.setIndex(Dt)),Y.isMesh)B.wireframe===!0?(Pe.setLineWidth(B.wireframeLinewidth*ke()),Vt.setMode(L.LINES)):Vt.setMode(L.TRIANGLES);else if(Y.isLine){let on=B.linewidth;on===void 0&&(on=1),Pe.setLineWidth(on*ke()),Y.isLineSegments?Vt.setMode(L.LINES):Y.isLineLoop?Vt.setMode(L.LINE_LOOP):Vt.setMode(L.LINE_STRIP)}else Y.isPoints?Vt.setMode(L.POINTS):Y.isSprite&&Vt.setMode(L.TRIANGLES);if(Y.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const on=Y._multiDrawStarts,wt=Y._multiDrawCounts,an=Y._multiDrawCount,Ht=Be?S.get(Be).bytesPerElement:1,Qn=Se.get(B).currentProgram.getUniforms();for(let mn=0;mn<an;mn++)Qn.setValue(L,"_gl_DrawID",mn),Vt.render(on[mn]/Ht,wt[mn])}else if(Y.isInstancedMesh)Vt.renderInstances(dt,Bt,Y.count);else if(q.isInstancedBufferGeometry){const on=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,on);Vt.renderInstances(dt,Bt,wt)}else Vt.render(dt,Bt)};function Et(y,R,q,B){se!==null&&y.isNodeMaterial&&se.setObject(B,y),it===!0&&we.setState(y,q,!1),y.transparent===!0&&y.side===gn&&y.forceSinglePass===!1?(y.side=Hn,y.needsUpdate=!0,H(y,R,B),y.side=as,y.needsUpdate=!0,H(y,R,B),y.side=gn):H(y,R,B)}this.compile=function(y,R,q=null){q===null&&(q=y),se!==null&&se.renderStart(y,R,q),P=ve.get(q),P.init(R),b.push(P),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(R.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),y!==q&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(R.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),P.setupLights(),se!==null&&se.updateLights(P.state.lightsArray),ct=this.localClippingEnabled,it=we.init(this.clippingPlanes,ct),it===!0&&we.setGlobalState(this.clippingPlanes,R),se!==null&&Ie.render(P.state.shadowsArray,q,R);const B=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const me=Y.material;if(me)if(Array.isArray(me))for(let Ne=0;Ne<me.length;Ne++){const Fe=me[Ne];Et(Fe,q,R,Y),B.add(Fe)}else Et(me,q,R,Y),B.add(me)}),P=b.pop(),se!==null&&se.renderEnd(),B},this.compileAsync=function(y,R,q=null){const B=this.compile(y,R,q);return new Promise(Y=>{function me(){if(B.forEach(function(Ne){const Be=Se.get(Ne).currentProgram;(Be===void 0||Be.isReady())&&B.delete(Ne)}),B.size===0){Y(y);return}setTimeout(me,10)}je.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Lt=null;function yt(y){Lt&&Lt(y)}function Ot(){Ze.stop()}function Pt(){Ze.start()}const Ze=new $d;Ze.setAnimationLoop(yt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(y){Lt=y,_.setAnimationLoop(y),y===null?Ze.stop():Ze.start()},_.addEventListener("sessionstart",Ot),_.addEventListener("sessionend",Pt),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;se!==null&&se.renderStart(y,R);const q=_.enabled===!0&&_.isPresenting===!0,B=F!==null&&(G===null||q)&&F.begin(U,G);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(_.cameraAutoUpdate===!0&&_.updateCamera(R),R=_.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,R,G),P=ve.get(y,b.length),P.init(R),P.state.textureUnits=le.getTextureUnits(),b.push(P),st.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?Xe.setFromArrayCamera(R):Ce.setFromProjectionMatrix(st,xi,R.reversedDepth),ct=this.localClippingEnabled,it=we.init(this.clippingPlanes,ct),I=Ge.get(y,v.length),I.init(),v.push(I),this.info.render.frame++,_.enabled===!0&&_.isPresenting===!0){const Ne=U.xr.getDepthSensingMesh();Ne!==null&&St(Ne,R,-1/0,U.sortObjects)}St(y,R,0,U.sortObjects),I.finish(),se!==null&&se.updateLights(P.state.lightsArray),U.sortObjects===!0&&I.sort(vt,Yt),He=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,He&&V.addToRenderList(I,y),this.info.autoReset===!0&&this.info.reset(),it===!0&&we.beginShadows();const Y=P.state.shadowsArray;if(Ie.render(Y,y,R),it===!0&&we.endShadows(),(B&&F.hasRenderPass())===!1){const Ne=I.opaque,Fe=I.transmissive;if(P.setupLights(),R.isArrayCamera){const Be=R.cameras;if(Fe.length>0)for(let et=0,mt=Be.length;et<mt;et++){const Mt=Be[et];bn(Ne,Fe,y,Mt)}He&&V.render(y);for(let et=0,mt=Be.length;et<mt;et++){const Mt=Be[et];rn(I,y,Mt,Mt.viewport)}}else Fe.length>0&&bn(Ne,Fe,y,R),He&&V.render(y),rn(I,y,R)}G!==null&&K===0&&(le.updateMultisampleRenderTarget(G),le.updateRenderTargetMipmap(G)),B&&F.end(U),y.isScene===!0&&y.onAfterRender(U,y,R),Z.resetDefaultState(),te=-1,he=null,b.pop(),b.length>0?(P=b[b.length-1],le.setTextureUnits(P.state.textureUnits),it===!0&&we.setGlobalState(U.clippingPlanes,P.state.camera)):P=null,v.pop(),v.length>0?I=v[v.length-1]:I=null,se!==null&&se.renderEnd()};function St(y,R,q,B){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){const Ne=R.isArrayCamera?Xe:Ce;if(!y.frustumCulled||y.intersectsFrustum(Ne)){B&&pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);const Fe=ye.update(y),Be=y.material;Be.visible&&I.push(y,Fe,Be,q,pt.z,null,R)}}else if(y.isMesh||y.isLine||y.isPoints){const Ne=R.isArrayCamera?Xe:Ce;if(!y.frustumCulled||y.intersectsFrustum(Ne)){const Fe=ye.update(y),Be=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pt.copy(y.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),pt.copy(Fe.boundingSphere.center)),pt.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(Be)){const et=Fe.groups;for(let mt=0,Mt=et.length;mt<Mt;mt++){const dt=et[mt],Nt=Be[dt.materialIndex];Nt&&Nt.visible&&I.push(y,Fe,Nt,q,pt.z,dt,R)}}else Be.visible&&I.push(y,Fe,Be,q,pt.z,null,R)}}}const me=y.children;for(let Ne=0,Fe=me.length;Ne<Fe;Ne++)St(me[Ne],R,q,B)}function rn(y,R,q,B){const{opaque:Y,transmissive:me,transparent:Ne}=y;P.setupLightsView(q),it===!0&&we.setGlobalState(U.clippingPlanes,q),B&&Pe.viewport(be.copy(B)),Y.length>0&&un(Y,R,q),me.length>0&&un(me,R,q),Ne.length>0&&un(Ne,R,q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function bn(y,R,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[B.id]===void 0){const dt=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[B.id]=new Vn(1,1,{generateMipmaps:!0,type:dt?Gn:ti,minFilter:Ci,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const me=P.state.transmissionRenderTarget[B.id],Ne=B.viewport||be;me.setSize(Ne.z*U.transmissionResolutionScale,Ne.w*U.transmissionResolutionScale);const Fe=U.getRenderTarget(),Be=U.getActiveCubeFace(),et=U.getActiveMipmapLevel();U.setRenderTarget(me),U.getClearColor(fe),Ke=U.getClearAlpha(),Ke<1&&U.setClearColor(16777215,.5),U.clear(),He&&V.render(q);const mt=U.toneMapping;U.toneMapping=Yi;const Mt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),P.setupLightsView(B),it===!0&&we.setGlobalState(U.clippingPlanes,B),un(y,q,B),le.updateMultisampleRenderTarget(me),le.updateRenderTargetMipmap(me),je.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Nt=0,Bt=R.length;Nt<Bt;Nt++){const Dt=R[Nt],{object:Vt,geometry:on,material:wt,group:an}=Dt;if(wt.side===gn&&Vt.layers.test(B.layers)){const Ht=wt.side;wt.side=Hn,wt.needsUpdate=!0,T(Vt,q,B,on,wt,an),wt.side=Ht,wt.needsUpdate=!0,dt=!0}}dt===!0&&(le.updateMultisampleRenderTarget(me),le.updateRenderTargetMipmap(me))}U.setRenderTarget(Fe,Be,et),U.setClearColor(fe,Ke),Mt!==void 0&&(B.viewport=Mt),U.toneMapping=mt}function un(y,R,q){const B=R.isScene===!0?R.overrideMaterial:null;for(let Y=0,me=y.length;Y<me;Y++){const Ne=y[Y],{object:Fe,geometry:Be,group:et}=Ne;let mt=Ne.material;mt.allowOverride===!0&&B!==null&&(mt=B),Fe.layers.test(q.layers)&&T(Fe,R,q,Be,mt,et)}}function T(y,R,q,B,Y,me){se!==null&&Y.isNodeMaterial&&se.setObject(y,Y),y.onBeforeRender(U,R,q,B,Y,me),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(U,R,q,B,y,me),Y.transparent===!0&&Y.side===gn&&Y.forceSinglePass===!1?(Y.side=Hn,Y.needsUpdate=!0,U.renderBufferDirect(q,R,B,Y,y,me),Y.side=as,Y.needsUpdate=!0,U.renderBufferDirect(q,R,B,Y,y,me),Y.side=gn):U.renderBufferDirect(q,R,B,Y,y,me),y.onAfterRender(U,R,q,B,Y,me)}function D(y){let R=0;for(const q of y)q.texture!==null&&R++;return R}function H(y,R,q){R.isScene!==!0&&(R=Me);const B=Se.get(y),Y=P.state.lights,me=P.state.shadowsArray,Ne=Y.state.version,Fe=pe.getParameters(y,Y.state,me,R,q,P.state.lightProbeGridArray),Be=pe.getProgramCacheKey(Fe);let et=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;const mt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=C.get(y.envMap||B.environment,mt),B.envMapRotation=B.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,et===void 0&&(y.addEventListener("dispose",re),et=new Map,B.programs=et,B.programVariants=new Map);let Mt=et.get(Be);if(Mt!==void 0){if(B.currentProgram===Mt&&B.lightsStateVersion===Ne)return Te(y,Fe),Mt}else Fe.uniforms=pe.getUniforms(y),se!==null&&y.isNodeMaterial&&se.build(y,q,Fe),y.onBeforeCompile(Fe,U),Mt=pe.acquireProgram(Fe,Be),et.set(Be,Mt),B.uniforms=Fe.uniforms;const dt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(dt.clippingPlanes=we.uniform),Te(y,Fe),B.needsLights=_e(y),B.lightsStateVersion=Ne,B.needsLights&&(dt.ambientLightColor.value=Y.state.ambient,dt.lightProbe.value=Y.state.probe,dt.sunLights.value=Y.state.sun,dt.sunLightShadows.value=Y.state.sunShadow,dt.directionalLights.value=Y.state.directional,dt.directionalLightShadows.value=Y.state.directionalShadow,dt.spotLights.value=Y.state.spot,dt.spotLightShadows.value=Y.state.spotShadow,dt.rectAreaLights.value=Y.state.rectArea,dt.ltc_1.value=Y.state.rectAreaLTC1,dt.ltc_2.value=Y.state.rectAreaLTC2,dt.pointLights.value=Y.state.point,dt.pointLightShadows.value=Y.state.pointShadow,dt.hemisphereLights.value=Y.state.hemi,dt.sunShadowMatrix.value=Y.state.sunShadowMatrix,dt.sunShadowCascade.value=Y.state.sunShadowCascade,dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,dt.spotLightMatrix.value=Y.state.spotLightMatrix,dt.spotLightMap.value=Y.state.spotLightMap,dt.pointShadowMatrix.value=Y.state.pointShadowMatrix),B.numLightProbeGrids=D(P.state.lightProbeGridArray),B.currentProgram=Mt,B.uniformsList=null,Mt}function J(y,R,q,B,Y){const me=Se.get(y),Ne=me.currentProgram.id+","+B+","+Y;let Fe=me.programVariants.get(Ne);return Fe===void 0?(Fe=H(y,R,q),me.programVariants.set(Ne,Fe)):(me.currentProgram=Fe,me.uniformsList=null,me.outputColorSpace=B,me.toneMapping=Y),Fe}function ue(y){if(y.uniformsList===null){const R=y.currentProgram.getUniforms();y.uniformsList=Yo.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function Te(y,R){const q=Se.get(y);q.outputColorSpace=R.outputColorSpace,q.batching=R.batching,q.batchingColor=R.batchingColor,q.instancing=R.instancing,q.instancingColor=R.instancingColor,q.instancingMorph=R.instancingMorph,q.skinning=R.skinning,q.morphTargets=R.morphTargets,q.morphNormals=R.morphNormals,q.morphColors=R.morphColors,q.morphTargetsCount=R.morphTargetsCount,q.numClippingPlanes=R.numClippingPlanes,q.numIntersection=R.numClipIntersection,q.vertexAlphas=R.vertexAlphas,q.vertexTangents=R.vertexTangents,q.toneMapping=R.toneMapping}function j(y,R,q,B,Y){R.isScene!==!0&&(R=Me),le.resetTextureUnits();const me=R.fog,Ne=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,Fe=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Qt.workingColorSpace,Be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,et=C.get(B.envMap||Ne,Be),mt=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Mt=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),dt=!!q.morphAttributes.position,Nt=!!q.morphAttributes.normal,Bt=!!q.morphAttributes.color;let Dt=Yi;B.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Dt=U.toneMapping);const Vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,on=Vt!==void 0?Vt.length:0,wt=Se.get(B),an=P.state.lights;if(it===!0&&(ct===!0||y!==he)){const Ae=y===he&&B.id===te;we.setState(B,y,Ae)}let Ht=!1,Qn=!1;B.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==an.state.version||Y.isBatchedMesh&&wt.batching===!1||!Y.isBatchedMesh&&wt.batching===!0||Y.isBatchedMesh&&wt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&wt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&wt.instancing===!1||!Y.isInstancedMesh&&wt.instancing===!0||Y.isSkinnedMesh&&wt.skinning===!1||!Y.isSkinnedMesh&&wt.skinning===!0||Y.isInstancedMesh&&wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&wt.instancingMorph===!1&&Y.morphTexture!==null||wt.envMap!==et||B.fog===!0&&wt.fog!==me||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==we.numPlanes||wt.numIntersection!==we.numIntersection)||wt.vertexAlphas!==mt||wt.vertexTangents!==Mt||wt.morphTargets!==dt||wt.morphNormals!==Nt||wt.morphColors!==Bt||wt.morphTargetsCount!==on||wt.numLightProbeGrids!==D(P.state.lightProbeGridArray)?Ht=!0:(wt.outputColorSpace!==Fe||wt.toneMapping!==Dt)&&(Qn=!0):(Ht=!0,wt.__version=B.version);let mn=wt.currentProgram;(Ht===!0||Qn===!0)&&(mn=Qn===!0?J(B,R,Y,Fe,Dt):H(B,R,Y),se&&B.isNodeMaterial&&se.onUpdateProgram(B,mn,wt));let ne=!1,Ee=!1,Ye=!1;const ze=mn.getUniforms(),ut=wt.uniforms;if(Pe.useProgram(mn.program)&&(ne=!0,Ee=!0,Ye=!0),B.id!==te&&(te=B.id,Ee=!0),ne||he!==y){Pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ze.setValue(L,"projectionMatrix",y.projectionMatrix),ze.setValue(L,"viewMatrix",y.matrixWorldInverse);const $e=ze.map.cameraPosition;$e!==void 0&&$e.setValue(L,ht.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&ze.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ze.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),he!==y&&(he=y,Ee=!0,Ye=!0)}if(wt.needsLights&&(an.state.sunShadowMap.length>0&&ze.setValue(L,"sunShadowMap",an.state.sunShadowMap,le),an.state.directionalShadowMap.length>0&&ze.setValue(L,"directionalShadowMap",an.state.directionalShadowMap,le),an.state.spotShadowMap.length>0&&ze.setValue(L,"spotShadowMap",an.state.spotShadowMap,le),an.state.pointShadowMap.length>0&&ze.setValue(L,"pointShadowMap",an.state.pointShadowMap,le)),Y.isSkinnedMesh){ze.setOptional(L,Y,"bindMatrix"),ze.setOptional(L,Y,"bindMatrixInverse");const Ae=Y.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ze.setValue(L,"boneTexture",Ae.boneTexture,le))}Y.isBatchedMesh&&(ze.setOptional(L,Y,"batchingTexture"),ze.setValue(L,"batchingTexture",Y._matricesTexture,le),ze.setOptional(L,Y,"batchingIdTexture"),ze.setValue(L,"batchingIdTexture",Y._indirectTexture,le),ze.setOptional(L,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ze.setValue(L,"batchingColorTexture",Y._colorsTexture,le));const ot=q.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0)&&xe.update(Y,q,mn),(Ee||wt.receiveShadow!==Y.receiveShadow)&&(wt.receiveShadow=Y.receiveShadow,ze.setValue(L,"receiveShadow",Y.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(ut.envMapIntensity.value=R.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=gM()),Ee){if(ze.setValue(L,"toneMappingExposure",U.toneMappingExposure),wt.needsLights&&A(ut,Ye),me&&B.fog===!0&&Ue.refreshFogUniforms(ut,me),Ue.refreshMaterialUniforms(ut,B,Qe,xt,P.state.transmissionRenderTarget[y.id]),wt.needsLights&&wt.numLightProbeGrids>0){const Ae=w;let $e=0;for(const lt of P.state.lightProbeGridArray)lt.texture!==null&&(Ae.textures[$e]=lt.texture,Ae.min[$e]=lt.boundingBox.min,Ae.max[$e]=lt.boundingBox.max,Ae.resolution[$e]=lt.resolution,$e++);for(const lt in Ae)Ae[lt].length=$e;ut.probesSH.value=Ae.textures,ut.probesMin.value=Ae.min,ut.probesMax.value=Ae.max,ut.probesResolution.value=Ae.resolution}Yo.upload(L,ue(wt),ut,le)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Yo.upload(L,ue(wt),ut,le),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ze.setValue(L,"center",Y.center),ze.setValue(L,"modelViewMatrix",Y.modelViewMatrix),ze.setValue(L,"normalMatrix",Y.normalMatrix),ze.setValue(L,"modelMatrix",Y.matrixWorld),B.uniformsGroups!==void 0){const Ae=B.uniformsGroups;for(let $e=0,lt=Ae.length;$e<lt;$e++){const Ut=Ae[$e];de.update(Ut,mn),de.bind(Ut,mn)}}return mn}function A(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.sunLights.needsUpdate=R,y.sunLightShadows.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function _e(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,R,q){const B=Se.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Se.get(y.texture).__webglTexture=R,Se.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,R){const q=Se.get(y);q.__webglFramebuffer=R,q.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,q=0){G=y,ae=R,K=q;let B=null,Y=!1,me=!1;if(y){const Fe=Se.get(y);if(Fe.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(L.FRAMEBUFFER,Fe.__webglFramebuffer),be.copy(y.viewport),Je.copy(y.scissor),ft=y.scissorTest,Pe.viewport(be),Pe.scissor(Je),Pe.setScissorTest(ft),te=-1;return}else if(Fe.__webglFramebuffer===void 0)le.setupRenderTarget(y);else if(Fe.__hasExternalTextures)le.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const mt=y.depthTexture;if(Fe.__boundDepthTexture!==mt){if(mt!==null&&Se.has(mt)&&(y.width!==mt.image.width||y.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(y)}}const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const et=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(et[R])?B=et[R][q]:B=et[R],Y=!0):y.samples>0&&le.useMultisampledRTT(y)===!1?B=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(et)?B=et[q]:B=et,be.copy(y.viewport),Je.copy(y.scissor),ft=y.scissorTest}else be.copy(_t).multiplyScalar(Qe).floor(),Je.copy(Rt).multiplyScalar(Qe).floor(),ft=Ct;if(q!==0&&(B=Q),Pe.bindFramebuffer(L.FRAMEBUFFER,B)&&Pe.drawBuffers(y,B),Pe.viewport(be),Pe.scissor(Je),Pe.setScissorTest(ft),Y){const Fe=Se.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,Fe.__webglTexture,q)}else if(me){const Fe=R;for(let Be=0;Be<y.textures.length;Be++){const et=Se.get(y.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,et.__webglTexture,q,Fe)}}else if(y!==null&&q!==0){const Fe=Se.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,q)}te=-1};function oe(y){const R=Se.get(y);return(R.__readFormat!==y.format||R.__readType!==y.type)&&(R.__readFormat=y.format,R.__readType=y.type,R.__formatReadable=qe.textureFormatReadable(y.format),R.__typeReadable=qe.textureTypeReadable(y.type)),R}this.readRenderTargetPixels=function(y,R,q,B,Y,me,Ne,Fe=0){if(!(y&&y.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne],Array.isArray(Be)&&(Be=Be[0])),Be){Pe.bindFramebuffer(L.FRAMEBUFFER,Be);try{const et=y.textures[Fe],mt=et.format,Mt=et.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe);const dt=oe(et);if(dt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(dt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-B&&q>=0&&q<=y.height-Y&&L.readPixels(R,q,B,Y,ee.convert(mt),ee.convert(Mt),me)}finally{const et=G!==null?Se.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(y,R,q,B,Y,me,Ne,Fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne],Array.isArray(Be)&&(Be=Be[0])),Be)if(R>=0&&R<=y.width-B&&q>=0&&q<=y.height-Y){Pe.bindFramebuffer(L.FRAMEBUFFER,Be);const et=y.textures[Fe],mt=et.format,Mt=et.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe);const dt=oe(et);if(dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Nt),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(R,q,B,Y,ee.convert(mt),ee.convert(Mt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Bt=G!==null?Se.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Bt);const Dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hp(L,Dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Nt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Nt),L.deleteSync(Dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,R=null,q=0){const B=Math.pow(2,-q),Y=Math.floor(y.image.width*B),me=Math.floor(y.image.height*B),Ne=R!==null?R.x:0,Fe=R!==null?R.y:0;le.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ne,Fe,Y,me),Pe.unbindTexture()},this.copyTextureToTexture=function(y,R,q=null,B=null,Y=0,me=0){let Ne,Fe,Be,et,mt,Mt,dt,Nt,Bt;const Dt=y.isCompressedTexture?y.mipmaps[me]:y.image;if(q!==null)Ne=q.max.x-q.min.x,Fe=q.max.y-q.min.y,Be=q.isBox3?q.max.z-q.min.z:1,et=q.min.x,mt=q.min.y,Mt=q.isBox3?q.min.z:0;else{const ze=Math.pow(2,-Y);Ne=Math.floor(Dt.width*ze),Fe=Math.floor(Dt.height*ze),y.isDataArrayTexture?Be=Dt.depth:y.isData3DTexture?Be=Math.floor(Dt.depth*ze):Be=1,et=0,mt=0,Mt=0}B!==null?(dt=B.x,Nt=B.y,Bt=B.z):(dt=0,Nt=0,Bt=0);const Vt=ee.convert(R.format),on=ee.convert(R.type);let wt;R.isData3DTexture?(le.setTexture3D(R,0),wt=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(le.setTexture2DArray(R,0),wt=L.TEXTURE_2D_ARRAY):(le.setTexture2D(R,0),wt=L.TEXTURE_2D),Pe.activeTexture(L.TEXTURE0),Pe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),Pe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Pe.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);const an=Pe.getParameter(L.UNPACK_ROW_LENGTH),Ht=Pe.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=Pe.getParameter(L.UNPACK_SKIP_PIXELS),mn=Pe.getParameter(L.UNPACK_SKIP_ROWS),ne=Pe.getParameter(L.UNPACK_SKIP_IMAGES);Pe.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),Pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),Pe.pixelStorei(L.UNPACK_SKIP_PIXELS,et),Pe.pixelStorei(L.UNPACK_SKIP_ROWS,mt),Pe.pixelStorei(L.UNPACK_SKIP_IMAGES,Mt);const Ee=y.isDataArrayTexture||y.isData3DTexture,Ye=R.isDataArrayTexture||R.isData3DTexture;if(y.isDepthTexture){const ze=Se.get(y),ut=Se.get(R),ot=Se.get(ze.__renderTarget),Ae=Se.get(ut.__renderTarget);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,ot.__webglFramebuffer),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let $e=0;$e<Be;$e++)Ee&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(y).__webglTexture,Y,Mt+$e),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(R).__webglTexture,me,Bt+$e)),L.blitFramebuffer(et,mt,et+Ne,mt+Fe,dt,Nt,dt+Ne,Nt+Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||Se.has(y)){const ze=Se.get(y),ut=Se.get(R);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,N),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ie);for(let ot=0;ot<Be;ot++)Ee?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,Y,Mt+ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,Y),Ye?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.__webglTexture,me,Bt+ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,me),Y!==0?L.blitFramebuffer(et,mt,et+Ne,mt+Fe,dt,Nt,dt+Ne,Nt+Fe,L.COLOR_BUFFER_BIT,L.NEAREST):Ye?L.copyTexSubImage3D(wt,me,dt,Nt,Bt+ot,et,mt,Ne,Fe):L.copyTexSubImage2D(wt,me,dt,Nt,et,mt,Ne,Fe);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ye?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(wt,me,dt,Nt,Bt,Ne,Fe,Be,Vt,on,Dt.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,me,dt,Nt,Bt,Ne,Fe,Be,Vt,Dt.data):L.texSubImage3D(wt,me,dt,Nt,Bt,Ne,Fe,Be,Vt,on,Dt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,dt,Nt,Ne,Fe,Vt,on,Dt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,dt,Nt,Dt.width,Dt.height,Vt,Dt.data):L.texSubImage2D(L.TEXTURE_2D,me,dt,Nt,Ne,Fe,Vt,on,Dt);Pe.pixelStorei(L.UNPACK_ROW_LENGTH,an),Pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht),Pe.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),Pe.pixelStorei(L.UNPACK_SKIP_ROWS,mn),Pe.pixelStorei(L.UNPACK_SKIP_IMAGES,ne),me===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&L.generateMipmap(wt),Pe.unbindTexture()},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&le.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?le.setTextureCube(y,0):y.isData3DTexture?le.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?le.setTexture2DArray(y,0):le.setTexture2D(y,0),Pe.unbindTexture()},this.resetState=function(){ae=0,K=0,G=null,Pe.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qt._getUnpackColorSpace()}}const Iu={type:"change"},Zc={type:"start"},cf={type:"end"},Oo=new er,Nu=new Gi,xM=Math.cos(70*sa.DEG2RAD),An=new k,Jn=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cl=1e-6;class vM extends bm{constructor(e,t=null){super(e,t),this.state=sn.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new _n,this._lastTargetPosition=new k,this._quat=new _n().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hu,this._sphericalDelta=new hu,this._scale=1,this._panOffset=new k,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new k,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yM.bind(this),this._onPointerDown=MM.bind(this),this._onPointerUp=SM.bind(this),this._onContextMenu=CM.bind(this),this._onMouseWheel=TM.bind(this),this._onKeyDown=EM.bind(this),this._onTouchStart=AM.bind(this),this._onTouchMove=RM.bind(this),this._onMouseDown=bM.bind(this),this._onMouseMove=wM.bind(this),this._interceptControlDown=PM.bind(this),this._interceptControlUp=LM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=sn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Iu),this.update(),this.state=sn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;An.copy(t).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Jn:n>Math.PI&&(n-=Jn),i<-Math.PI?i+=Jn:i>Math.PI&&(i-=Jn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),t.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=An.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<xM?this.object.lookAt(this.target):(Nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Nu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cl||this._lastTargetPosition.distanceToSquared(this.target)>cl?(this.dispatchEvent(Iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){An.setFromMatrixColumn(t,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,t){this.screenSpacePanning===!0?An.setFromMatrixColumn(t,1):(An.setFromMatrixColumn(t,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;An.copy(i).sub(this.target);let r=An.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function MM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function SM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=sn.DOLLY;break;case Gs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=sn.ROTATE}break;case Gs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Zc)}function wM(s){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function TM(s){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(s.preventDefault(),this.dispatchEvent(Zc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(cf))}function EM(s){this.enabled!==!1&&this._handleKeyDown(s)}function AM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1){this.state=sn.NONE;break}this._handleTouchStartRotate(s),this.state=sn.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1){this.state=sn.NONE;break}this._handleTouchStartPan(s),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=sn.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Zc)}function RM(s){switch(this._trackPointer(s),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=sn.NONE}}function CM(s){this.enabled!==!1&&s.preventDefault()}function PM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const DM=new ya(-1,1,1,-1,0,1);class IM extends hn{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const NM=new IM;class Jc{constructor(e){this._mesh=new Xt(NM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hc extends or{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jr.clone(e.uniforms),this.material=new Kn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Jc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uu extends or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class UM extends or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class OM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new Vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hc(Ko),this.copyPass.material.blending=ms,this.timer=new lm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uu!==void 0&&(o instanceof Uu?n=!0:o instanceof UM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Fo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class FM extends or{constructor(){super(),this.isOutputPass=!0,this.uniforms=jr.clone(Fo.uniforms),this.material=new Gd({name:Fo.name,uniforms:this.uniforms,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader}),this._fsQuad=new Jc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ln&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class BM extends or{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new At}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const zM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class js extends or{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new At(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Vn(r,o,{type:Gn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Vn(r,o,{type:Gn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Vn(r,o,{type:Gn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=zM;this.highPassUniforms=jr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=jr.clone(Ko.uniforms),this.blendMaterial=new Kn({uniforms:this.copyUniforms,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,premultipliedAlpha:!0,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new At,this._oldClearAlpha=1,this._basic=new Fn,this._fsQuad=new Jc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=js.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=js.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<e;o+=2){const a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Kn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Kn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}js.BlurDirectionX=new Oe(1,0);js.BlurDirectionY=new Oe(0,1);function $c(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new hn;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Ou(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=Ou(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Ou(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new In(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){const x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Fu(s,e){if(e===Qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ec||e===md){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ec)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const kn={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function kM(s,e){const t=gi[s],n=t.kind==="house"?Math.max(t.w,t.d)*1.15+8:t.r*1.6+7,i=Math.hypot(e[0],e[1]),[r,o]=i>0?[e[0]/i,e[1]/i]:[.45,.9];return{target:[t.x,1,t.z],position:[t.x+r*n,n*.85,t.z+o*n]}}const HM=2.5,Bu=3e3,Pi=(s,e=Number.NEGATIVE_INFINITY)=>({spot:s,since:e,walk:null,holdUntil:null,next:null}),hf=s=>({x:li[s].x,z:li[s].z});function GM(s,e){const t=li[s],n=t.viaW?[{x:t.viaW[0],z:t.viaW[1],leave:t.anchor}]:[];return[hf(s),...n,...ko(t.anchor,e)]}const VM=s=>s.slice(1).reduce((e,t,n)=>e+Math.hypot(t.x-s[n].x,t.z-s[n].z),0);function Qc(s,e){let t=Math.max(0,e)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a.x-o.x,a.z-o.z);if(t<l-1e-9){const c=t/l;return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(a.x-o.x,a.z-o.z)}}t-=l}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:li[s.to].ry}}function WM(s,e,t){const n=Qc(s,t-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...ko(r.node,e)]:r?.leave?[i,r,...ko(r.leave,e)]:[i,...ko(li[s.to].anchor,e)]}function uf(s,e){return!s.walk||!Qc(s.walk,e-s.walk.startedAt).arrived?s:Pi(s.walk.to,s.walk.startedAt+VM(s.walk.path)/s.walk.speed*1e3)}const df=(s,e,t,n)=>({...Pi(s,t),walk:{path:GM(s,e),to:e,startedAt:t,speed:n}});function zu(s,e,t,n,i,r){const o=uf(s,t);return o.walk?o.walk.to===e?o:i?Pi(e,t):{...o,walk:{path:WM(o.walk,e,t),to:e,startedAt:t,speed:n*HM}}:o.holdUntil!==null?e===o.spot?Pi(o.spot,o.since):{...o,next:e}:r&&o.spot===r&&e!==r&&t-o.since<Bu?{...o,next:e,holdUntil:o.since+Bu}:o.spot===e?o:i?Pi(e,t):df(o.spot,e,t,n)}function ku(s,e,t,n){return s.walk?uf(s,e):s.holdUntil===null||e<s.holdUntil?s:s.next?n?Pi(s.next,e):df(s.spot,s.next,e,t):{...s,holdUntil:null}}function XM(s,e){return s.walk?Pi(s.walk.to,e):s.holdUntil!==null?Pi(s.next??s.spot,e):s}const Hu=(s,e)=>s.holdUntil!==null&&e<s.holdUntil;function Gu(s,e){if(!s.walk)return{...hf(s.spot),heading:li[s.spot].ry,walking:!1};const{x:t,z:n,heading:i,arrived:r}=Qc(s.walk,e-s.walk.startedAt);return{x:t,z:n,heading:i,walking:!r}}const{PI:Jt}=Math,Vu=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function qM(s,e,t,n,i){const{scene:r,M:o,COL:a,TEX:l,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:x,rr:m,pick:g,tiled:M,instanced:E}=s,{FLAGS:w,SPINNERS:I,skull:P,horns:v,flame:b,anvil:F,weaponRack:U,brazier:X,poleBanner:se,skullPole:Q,barrel:N,well:ie,bench:ae,stall:K,lampPost:G,crate:te,sack:he,torch:be,dummy:Je,target:ft,hay:fe,easel:Ke,candle:at,plantFlora:xt,bunk:Qe,chest:vt,hangingBanner:Yt,table:_t,partition:Rt,wolf:Ct,spikes:Ce,cart:Xe,fence:it,skullCandle:ct,tent:st,signPost:ht}=e,{patch:pt}=t,{buildHouse:Me,inH:He,outH:ke,onWall:L}=n,tt=new Qs({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),je=new Qs({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:qe,chimneyTop:Pe,emberBase:nt}=(()=>{const ee=gi.forge,Z=new Re;Z.position.set(ee.x,0,ee.z),r.add(Z),r.add(i.forge);const de=-.6,De=new Re;De.position.set(0,.16,de),Z.add(De),De.add(u(f(new mi(1,24,0,Jt),tt,!1),0,1.05,1.705)),De.add(u(f(new tn(2,1.05),tt,!1),0,.53,1.705)),De.add(u(f(new tn(1.4,.45),je,!1),0,.32,1.71));{const re=new Re;for(let ce=0;ce<4;ce++)re.add(u(f(new Le(.9-ce*.08,.14,1.2-ce*.1),ce%2?o.redD:h("#5a3a2a")),0,.5+ce*.16,0));re.add(u(f(new Le(1,.08,1.3),o.wood),0,.45,0)),re.add(p(u(f(new rt(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,Jt/2)),De.add(u(re,-2.9,0,.2))}const _=new qi("#ff8a3a",14,16,2);_.position.set(0,1.4,2.8),De.add(_),De.updateMatrixWorld(!0);const z=De.localToWorld(new k(0,10.9,-.5)),W=De.localToWorld(new k(0,1,2));x(Z,F(),-2.9,2.9,id(-2.9,2.9,-3.9,3.9)+Jt/2,.16);{const re=new Re;re.add(u(f(new Le(1.5,.55,.7),o.wood),0,.27,0)),re.add(p(u(f(new tn(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-Jt/2,0,0)),x(Z,re,3.5,3,-.5,.16)}const O=[];for(let re=0;re<40;re++)O.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});E(new Ri(1,0),O,{});for(let re=0;re<6;re++)Z.add(u(f(new en(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));x(Z,U(4),-5.3,-2,Math.atan2(5.3,2),.16),x(Z,U(4),5.7,.9,-Jt/2,.16);{const re=new Re;re.add(u(f(new Le(.9,.5,.5),o.wood),0,.25,0));const ce=u(p(f(new rt(.45,.45,.16,18),h("#8a8078")),0,0,Jt/2),0,.8,0);re.add(ce),x(Z,re,-4.8,.2,.4,.16)}for(const re of[.4,2,3.9,5.2])x(Z,X(0),Math.cos(re)*6.9,Math.sin(re)*6.9,0,.16);return x(Z,se(4),-1.9,-3.8,0,.16),x(Z,se(4),1.9,-3.8,0,.16),x(Z,Q(2.6),6,-3.6,0,.16),x(Z,N(),-6,2,0,.16),{fireLight:_,chimneyTop:z,emberBase:W}})();{const ee=gi.court,Z=new Re;Z.position.set(ee.x,0,ee.z),r.add(Z),x(Z,ie(),-5.8,2),x(Z,ae(1.9,!0),-5.2,-4,0),x(Z,K(),6.2,1.2,-Jt/2);{const de=new Re;for(const De of[-1,1])de.add(u(f(new Le(.12,2.2,.12),o.woodD),De*.8,1.1,0));de.add(u(f(new Le(1.8,1.1,.08),o.wood),0,1.55,0));for(let De=0;De<6;De++)de.add(u(p(f(new tn(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+De%3*.6,1.8-Math.floor(De/3)*.5,.05));de.add(p(u(f(new Le(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),x(Z,de,5.6,-5.4,-Jt/2)}x(Z,G(6),-5.8,-1),x(Z,N(),8,-.6),x(Z,te(.55),3.8,3.4,.3),x(Z,he(),4.4,3),x(Z,Q(2.4),-7.8,6);{const de=new Re;de.add(u(f(new Le(1.6,.5,.6),o.wood),0,.25,0)),de.add(p(u(f(new tn(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-Jt/2,0,0)),x(Z,de,-7.6,3.6,Jt/2)}pt("dirt",ee.x-4,ee.z+.5,4.4,5.6,0,.013)}{const ee=gi.yard;if(ee.kind==="house")throw new Error("the yard is an open area");const Z=ee.gate??0,de=new Re;de.position.set(ee.x,0,ee.z),r.add(de),pt("sand",ee.x,ee.z,ee.r+.6,ee.r+.6,0,.014,5),de.add(i.yard);{const De=new Re,_=Math.cos(Z),z=Math.sin(Z);De.position.set(_*ee.r,0,z*ee.r),De.rotation.y=Math.atan2(_,z);for(const W of[-1,1])De.add(u(be(),W*1.55,2,.24));de.add(De),x(de,Q(2.6),_*(ee.r+1.6)-z*2.2,z*(ee.r+1.6)+_*2.2),x(de,Q(2.2),_*(ee.r+1.6)+z*2.2,z*(ee.r+1.6)-_*2.2)}x(de,Je(),-3.2,2.1,Jt),x(de,Je(),1.6,3.2,Jt),x(de,ft(),4.4,3.6,Math.atan2(-4.4,-3.6)),x(de,U(4),-5.4,-2.6,Math.atan2(5.4,2.6)),x(de,fe(),-5.6,3.8,.4),x(de,fe(),-4.8,4.7,1.2),x(de,p(fe(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const De of[2,3.4,4.6])x(de,se(3.4),Math.cos(De)*(ee.r-.7),Math.sin(De)*(ee.r-.7),Math.atan2(-Math.cos(De),-Math.sin(De)));x(de,ae(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),x(de,N(),-.6,-5.8),x(de,X(0,.9),Math.cos(Z)*(ee.r-1.2)-Math.sin(Z)*1.8,Math.sin(Z)*(ee.r-1.2)+Math.cos(Z)*1.8)}const Se={x:-30,z:-20,r:2.6,mouthA:0},le=l.ripple;le.wrapS=le.wrapT=hi;const C=new At("#1f5f8c"),S=new At("#6fb6d2"),$=new At("#a6d8e6"),ye="#bdb3c4",pe=ee=>new Fn({map:le,color:ye,vertexColors:!0,side:gn,polygonOffset:!0,polygonOffsetFactor:-1-ee,polygonOffsetUnits:-4-ee*4}),Ue=new At;function Ge(ee,Z,de){const De=Math.hypot(ee-Se.x,Z-Se.z),_=Vu(1-De/Se.r);return Ue.copy(S).lerp(C,_*.95),de&&Ue.lerp($,de*Vu((De-Se.r)/1.2)*.45),[Ue.r*1.27,Ue.g*1.27,Ue.b*1.27]}const ve=2.2;{const De=[],_=[],z=[],W=[],O=(A,_e)=>{De.push(A,.045,_e),_.push(...Ge(A,_e,0)),z.push(A/ve,_e/ve)};O(Se.x,Se.z);for(let A=1;A<=5;A++)for(let _e=0;_e<72;_e++){const oe=_e/72*2*Jt,y=Se.r*A/5;O(Se.x+Math.cos(oe)*y,Se.z+Math.sin(oe)*y)}for(let A=0;A<72;A++)W.push(0,1+(A+1)%72,1+A);for(let A=1;A<5;A++)for(let _e=0;_e<72;_e++){const oe=1+(A-1)*72+_e,y=1+(A-1)*72+(_e+1)%72,R=oe+72,q=y+72;W.push(oe,y,R,y,q,R)}const re=new hn;re.setAttribute("position",new zt(De,3)),re.setAttribute("color",new zt(_,3)),re.setAttribute("uv",new zt(z,2)),re.setIndex(W),r.add(f(re,pe(0),!1));const ce=Jo,Ve=ce[0],Et=Math.hypot(Ve[0]-Se.x,Ve[1]-Se.z),Lt=(Ve[0]-Se.x)/Et,yt=(Ve[1]-Se.z)/Et;Se.mouthA=Math.atan2(yt,Lt);const Ot=[];for(let A=Se.r-1.2;A<Et-.2;A+=.3)Ot.push([Se.x+Lt*A,Se.z+yt*A]);Ot.push(...ce);const Pt=.7,Ze=Se.r*Se.r,St=Math.sqrt(Ze-1.5*1.5),rn=Se.r+.8,bn=-(St/1.5)*(rn-St),un=A=>{const _e=Ot[A],oe=Math.hypot(_e[0]-Se.x,_e[1]-Se.z);if(oe<=St)return Math.sqrt(Math.max(0,Ze-oe*oe))-.02;if(oe>=rn)return Pt;const y=(oe-St)/(rn-St),R=y*y,q=R*y;return(2*q-3*R+1)*1.48+(q-2*R+y)*bn+(-2*q+3*R)*Pt},T=[],D=[],H=[],J=[],ue=[-1,-.5,0,.5,1];for(let A=0;A<Ot.length;A++){const _e=Ot[Math.max(0,A-1)],oe=Ot[Math.min(Ot.length-1,A+1)],y=Ot[A],R=Math.hypot(oe[0]-_e[0],oe[1]-_e[1])||1,q=-(oe[1]-_e[1])/R,B=(oe[0]-_e[0])/R,Y=un(A);for(const me of ue){const Ne=y[0]+q*me*Y,Fe=y[1]+B*me*Y;T.push(Ne,.05,Fe),D.push(...Ge(Ne,Fe,Math.abs(me))),H.push(Ne/ve,Fe/ve)}if(A>0)for(let me=0;me<4;me++){const Ne=(A-1)*5+me,Fe=Ne+1,Be=A*5+me,et=Be+1;J.push(Ne,Be,Fe,Fe,Be,et)}}const Te=new hn;Te.setAttribute("position",new zt(T,3)),Te.setAttribute("color",new zt(D,3)),Te.setAttribute("uv",new zt(H,2)),Te.setIndex(J),r.add(f(Te,pe(1),!1));const j=[];for(let A=1;A<Ot.length-1;A+=2){const _e=Ot[A];if(Math.hypot(_e[0]-Se.x,_e[1]-Se.z)<Se.r+.9)continue;const oe=Ot[A-1],y=Ot[A+1],R=Math.hypot(y[0]-oe[0],y[1]-oe[1])||1,q=-(y[1]-oe[1])/R,B=(y[0]-oe[0])/R,Y=un(A)+.16;for(const me of[-1,1])j.push({x:_e[0]+q*me*Y,y:.06,z:_e[1]+B*me*Y,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}E(new Ri(1,0),j,{})}for(const ee of t.crossings){const Z=i.bridge.clone();Z.position.set(ee.x,0,ee.z),Z.rotation.y=ee.ang,Z.scale.x=(ee.len+.6)/3.4,r.add(Z)}{const ee=gi.garden;if(ee.kind==="house")throw new Error("the garden is an open area");const Z=new Re;Z.position.set(ee.x,0,ee.z),r.add(Z);const de=Math.atan2(4.6,5.6);Z.add(i.garden);{const O=Math.cos(de)*ee.r,re=Math.sin(de)*ee.r,ce=new Re;ce.position.set(O,0,re),ce.rotation.y=Math.atan2(Math.cos(de),Math.sin(de)),ce.add(u(G(0).children[2].clone(),0,2.6,0)),Z.add(ce)}const De=[],_=[];for(let O=0;O<26;O++){const re=O/26*2*Jt;let ce=Math.abs(re-Se.mouthA);ce=Math.min(ce,2*Jt-ce),!(ce<.62)&&De.push({x:Se.x+Math.cos(re)*2.75,y:.08,z:Se.z+Math.sin(re)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let O=0;O<7;O++)_.push({x:Se.x+m(-1.6,1.6),y:.065,z:Se.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});E(new Ri(1,0),De,{}),E(new rt(.22,.22,.02,12),_,{}),x(Z,Ke(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),x(Z,ae(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[O,re]of[[-5.6,-2.2],[4.9,-.6]]){const ce=new Re;ce.add(u(f(new rt(.22,.28,.9,6),o.stone),0,.45,0)),ce.add(u(f(new Le(.5,.36,.5),o.stone),0,1.08,0)),ce.add(u(f(new Le(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),ce.add(u(f(new Sn(.48,.36,4),o.redD),0,1.44,0)),x(Z,ce,O,re,Jt/4)}{const O=new Re;O.add(u(f(new Le(.9,.6,.6),o.stone),0,.3,0)),O.add(u(P(.26),0,.75,0));for(const re of[-1,1])O.add(u(at(.18),re*.3,.6,.12));x(Z,O,-4.4,-5.4,Math.atan2(4.4,5.4))}xt("tree_willow",1,ee.x-6.2,ee.z-2.8),xt("tree_cherry",.95,ee.x+5.3,ee.z-4.9),xt("tree_fruit",.85,ee.x-3,ee.z+6.2);const z=[];let W=0;for(;z.length<90&&W<4e3;){W++;const O=m(0,2*Jt),re=m(5.3,6.7),ce=Math.cos(O)*re,Ve=Math.sin(O)*re;Math.min(Math.abs(O-de),2*Jt-Math.abs(O-de))<.35||Math.hypot(ce-3,Ve+3.4)<1.3||Math.hypot(ce-2.2,Ve+4.3)<1||z.push({x:ee.x+ce,y:.18,z:ee.z+Ve,sx:.9,sy:.9,sz:.9,c:g([a.red,a.bone,"#d98a3a",a.redL,"#e8c860"])})}E(new en(.11,8,6),z,{})}const we=M(l.water,1,6),Ie=[];{const ee=Jo,[Z,de]=ee[ee.length-1],[De,_]=ee[ee.length-3],z=Math.hypot(Z-De,de-_),W=(Z-De)/z,O=(de-_)/z,re=new Xt(new tn(1.4,40),new Fn({map:we,color:"#acb5c8",transparent:!0,opacity:.85,side:gn,depthWrite:!1}));re.position.set(Z+W*.9,-20+.05,de+O*.9),re.rotation.y=Math.atan2(W,O),r.add(re);const ce=new os({map:l.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let Ve=0;Ve<9;Ve++){const Et=new Zi(ce);Et.position.set(Z+W*m(1,2.4),m(-38,-30),de+O*m(1,2.4)+m(-1,1)),Et.scale.setScalar(m(3,5.5)),r.add(Et),Ie.push(Et)}for(let Ve=0;Ve<4;Ve++){const Et=new Zi(ce);Et.position.set(Z+W*1,m(-.6,.3),de+O*1+m(-.5,.5)),Et.scale.setScalar(m(1,1.6)),r.add(Et),Ie.push(Et)}}for(const ee of gc)if(ee.kind==="hut"){const Z=Me({...ee,wallH:2.5},{id:ee.id,pitch:.66,chimney:ee.id==="barracks"?[1.4,-.6]:null});if(ee.id==="barracks"&&(He(Z,Qe(),-1.6,-.9),He(Z,Qe(),.4,-.9),He(Z,vt(),2.2,-1.6,-Jt/2),He(Z,X(0,.7),2.3,1.2),L(Z,"W",U(3),0,Wt,.3),L(Z,"S",Yt(.8,1.3),1.6,Wt+2.3,.04)),ee.id==="store"){He(Z,_t(1.6,.6,.9,o.wood),-1.2,-1.3);for(let de=0;de<4;de++)He(Z,te(.45),-1.8+de*.4,-1.3).position.y=Wt+.95;He(Z,N(),1.6,-1.2),He(Z,N(.9),1.9,-.4),He(Z,he(),.6,-1.3),He(Z,he(),1,.6),He(Z,te(.6),-1.8,.8,.3)}if(ee.id==="stable"){const de=f(new tn(ee.w-.6,ee.d-.6),o.straw,!1);de.rotation.x=-Jt/2,He(Z,de,0,0).position.y=Wt+.01;for(const De of[-1,1.2])He(Z,Rt(2.2,1.1),De,-.6);He(Z,Ct(),-2.2,-.3,.4),He(Z,Ct(),.1,-.5,-.5).scale.setScalar(.9),He(Z,fe(),2.4,-1,.2);{const De=new Re;De.add(u(f(new Le(1.2,.4,.45),o.wood),0,.2,0)),De.add(p(u(f(new tn(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-Jt/2,0,0)),He(Z,De,2.2,1)}}if(ee.id==="granary"){for(let de=0;de<6;de++)He(Z,he(),-1.4+de%3*.5,-1.2+Math.floor(de/3)*.55);He(Z,N(),1.5,-1.1);{const de=f(new Le(1.2,.8,.8),o.wood);de.position.y=.4;const De=new Re;De.add(de),De.add(u(f(new Le(1.1,.05,.7),o.straw),0,.78,0)),He(Z,De,1.2,.7)}}ee.id==="barracks"&&(ke(Z,U(4),-1.4,3.3),ke(Z,Ce(2.6),3.8,3,.6),ke(Z,se(3),3.6,.6),ke(Z,Q(2.4),-3.8,2.4)),ee.id==="store"&&(ke(Z,te(.7),-1.6,2.8,.2),ke(Z,te(.5),-.9,3.1,.7),ke(Z,he(),.6,2.9),ke(Z,he(),1.1,3.2),ke(Z,N(),2.3,2.9)),ee.id==="stable"&&(ke(Z,fe(),-2.8,2.6,.3),ke(Z,fe(),-2,3,1.1),ke(Z,Xe(),2,3.4,-.3),it(Z.g,[[-3.2,4.4],[3.2,4.4]],.9)),ee.id==="granary"&&(ke(Z,he(),-1.2,2.6),ke(Z,he(),-.6,2.9),ke(Z,he(),-1,3.3),ke(Z,N(.9),1.6,2.7))}else if(ee.kind==="windmill"){const Z=new Re;Z.position.set(ee.x,0,ee.z),Z.add(u(f(new rt(1.7,2.4,6.6,18),h("#ffffff",{map:M(l.castleWall,3,2.2)})),0,3.3,0)),Z.add(u(f(new Sn(2.3,2.8,18),h("#ffffff",{map:M(l.roof,4,1.5)})),0,7.9,0)),Z.add(u(f(new Le(1,1.7,.2),o.woodD),0,.85,2.25));for(const[De,_]of[[.6,3.6],[-.9,4.8]])Z.add(u(p(f(new Le(.5,.6,.1),o.pane,!1),0,De,0),Math.sin(De)*2,_,Math.cos(De)*2));const de=u(new Re,0,6.2,2);de.add(p(f(new rt(.22,.22,.5,10),o.woodD),Jt/2,0,0));for(let De=0;De<4;De++){const _=new Re;_.rotation.z=De*Jt/2,_.add(u(f(new Le(.12,4.4,.08),o.woodD),0,2.3,.2)),_.add(u(f(new Le(.9,3.4,.04),h("#e3d5b6",{side:gn})),.5,2.6,.24)),_.add(u(f(new Le(.06,3.4,.06),o.wood),.95,2.6,.26)),de.add(_)}Z.add(de),I.push({o:de,axis:"z",v:.5}),Z.add(u(he(),-1.6,0,2.6)),Z.add(u(he(),-2.2,0,2.2)),r.add(Z)}else if(ee.kind==="watch"){const Z=new Re;Z.position.set(ee.x,0,ee.z),Z.add(i.watch),Z.add(u(X(0,.7),.6,6.5,-.6)),r.add(Z)}else if(ee.kind==="shrine"){const Z=new Re;Z.position.set(ee.x,0,ee.z),Z.add(i.altar);for(const de of[.9,2.5,4.1,5.6])Z.add(u(ct(),Math.cos(de)*1.4,0,Math.sin(de)*1.4));Z.add(u(X(0,.8),1.6,0,1.4)),r.add(Z),pt("dirt",ee.x,ee.z,3.4,3.4,0,.013)}else{const Z=new Re;Z.position.set(ee.x,0,ee.z),Z.add(u(p(st(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),Z.add(u(p(st(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let de=0;de<8;de++){const De=de/8*2*Jt;Z.add(u(f(new Ri(.18,0),o.stone),Math.cos(De)*.55,.1,Math.sin(De)*.55))}for(let de=0;de<3;de++)Z.add(p(u(f(new rt(.07,.07,.8,6),o.woodD),0,.12,0),Jt/2,de*1.05,0));b(Z,0,.12,0,1.8);for(const de of[.6,2.4,4.4])Z.add(u(p(f(new rt(.2,.2,1.4,8),o.wood),0,-de,Jt/2),Math.cos(de)*1.6,.2,Math.sin(de)*1.6));Z.add(u(Q(2.4),-3.2,0,-1.2)),Z.add(u(N(),3.1,0,-.8)),r.add(Z),pt("dirt",ee.x,ee.z,4.2,4,0,.013)}function V(ee,Z,de,De=.018,_=o.dark){const z=new k(...Z),W=new k(...de),O=z.distanceTo(W),re=f(new rt(De,De,O,5),_,!1);return re.position.copy(z).add(W).multiplyScalar(.5),re.quaternion.setFromUnitVectors(c,W.clone().sub(z).normalize()),ee.add(re),re}function xe(){const ee=new Re,Z=f(new en(1,22,12,0,Jt*2,Jt/2,Jt/2),h("#ffffff",{map:l.planks}));Z.scale.set(2.7,1,1.15),ee.add(Z);const de=f(new rt(1,1,.1,24),o.woodL);de.scale.set(2.62,1,1.1),ee.add(u(de,0,.02,0));const De=f(new yn(1,.06,6,36),o.woodD);De.rotation.x=Jt/2,De.scale.set(2.68,1.13,1),De.position.y=.14,ee.add(De),ee.add(p(u(f(new rt(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),ee.add(u(p(P(.32),0,Jt/2,0),2.75,.32,0)),ee.add(u(p(v(.8),0,Jt/2,0),2.75,.42,0)),ee.add(u(f(new rt(.07,.09,2.8,8),o.woodD),.3,1.4,0));const _=u(new Re,.3,2.85,0);_.add(u(f(new Le(.9,.36,.02),o.red),.45,0,0)),ee.add(_),w.push(_);const z=u(new Re,-1.5,.06,0);z.add(u(f(new Le(1.1,.8,1.1),h("#ffffff",{map:l.planks})),0,.4,0)),z.add(u(p(f(new rt(.75,.75,1.3,3),h("#ffffff",{map:l.roof})),0,0,Jt/2),0,1.05,0)),z.add(u(f(new Le(.3,.3,.04),o.pane,!1),.56,.5,0)),ee.add(z);const W=f(new en(1,24,16),h("#ffffff",{map:l.balloon}));W.scale.set(3.6,1.5,1.7),W.position.y=4.4,ee.add(W);const O=f(new yn(1,.05,6,40),o.bone);O.rotation.x=Jt/2,O.scale.set(3.62,1.72,1),O.position.y=4.1,ee.add(O);for(const[ce,Ve,Et,Lt]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])V(ee,[ce,4.05,Ve],[Et,.16,Lt]);const re=u(new Re,-2.95,.65,0);re.add(p(f(new rt(.1,.1,.3,8),o.iron),0,0,Jt/2));for(let ce=0;ce<3;ce++){const Ve=u(new Re,0,0,0);Ve.rotation.x=ce/3*Jt*2,Ve.add(u(p(f(new Le(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),re.add(Ve)}ee.add(re),I.push({o:re,axis:"x",v:7}),ee.add(u(f(new Le(.06,.9,.7),o.redD),-2.75,.1,0));for(const ce of[2.4,-2.4])ee.add(u(f(new en(.1,8,6),d("#ffc070",2.2),!1),ce,.5,0));return ee.add(u(te(.45),1.3,.07,.4)),ee.add(u(N(.6),1.2,.07,-.45)),ee}const ge=xe(),We=xe();{const ee=ps.find(Lt=>Lt.id==="dock");if(!ee)throw new Error("no dock road");const Z=ee.line,[de,De]=Z[Z.length-1],[_,z]=Z[Z.length-4],W=Math.hypot(de-_,De-z),O=(de-_)/W,re=(De-z)/W,ce=new Re;ce.position.set(de,0,De),ce.rotation.y=Math.atan2(O,re),r.add(ce),ce.add(i.dock),ce.add(u(te(.55),2.8,1.17,6.8));for(const[Lt,yt]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])ce.add(u(f(new en(.12,8,6),d("#ffc070",2.2),!1),Lt,1.32,yt));ce.add(u(te(.6),-.85,.22,1.3)),ce.add(u(te(.45),-.75,.22,2)),ce.add(u(N(.85),.85,.22,1)),ce.add(u(he(),.6,.22,3.6)),ce.add(u(se(3.4),-1.45,.22,.4)),ge.position.set(4.1,-.4,5.6),ge.rotation.y=-Jt/2,ce.add(ge);const Ve=f(new Le(1.6,.08,.7),o.woodL);Ve.position.set(2.3,.05,5.6),Ve.rotation.z=-.18,ce.add(Ve);const Et=u(new Re,-4.6,0,-3.8);Et.add(u(be(),-.2,1.6,1.3)),Et.add(u(te(.6),1.9,0,.8)),Et.add(u(N(),1.8,0,-.4)),ce.add(Et),ce.add(u(p(ht("SKY DOCK"),0,Jt/2,0),2.2,0,-2.4)),r.add(We),We.scale.setScalar(1.5),We.userData={a:1.2,r:96,y:15}}{const ee=new Re;ee.position.set(-44,0,26),r.add(ee);for(const[Z,de,De]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])ee.add(u(p(st(1.8,2.6,De),0,Math.atan2(-Z,-de),0),Z,0,de));for(let Z=0;Z<8;Z++){const de=Z/8*2*Jt;ee.add(u(f(new Ri(.18,0),o.stone),Math.cos(de)*.55,.1,Math.sin(de)*.55))}b(ee,0,.1,0,1.8),ee.add(u(Q(2.6),3.6,0,1.8)),ee.add(u(se(3),-3.6,0,1.6)),ee.add(u(p(Ce(3),0,.6,0),4.6,0,-2.6)),pt("dirt",-44,26,5,4.6,.3,.013)}return pt("field",54,-8,6.5,4.2,.35,.013,3),pt("field",51,6,5.2,3.6,-.2,.013,3),pt("field",10,-44.5,6,3.6,.1,.013,3),x(r,Je(),55.5,-2.6,.4),x(r,fe(),48.6,-12.6,.4),x(r,fe(),49.4,-11.8,1.3),{mouthMat:tt,coreMat:je,fireLight:qe,chimneyTop:Pe,emberBase:nt,waterTex:le,fallTex:we,mists:Ie,skyBoat:ge,airship:We}}const YM=[3,5,7,9,11];function KM(s){const e=[];for(let t=0;t<s;t++)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return new Kn({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}const ZM=`

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

		}`,JM=`varying vec2 vUv;
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
				}`;function $M(s){s.separableBlurMaterials.forEach((e,t)=>{e.dispose(),s.separableBlurMaterials[t]=KM(YM[t]??3)}),s.materialHighPassFilter.fragmentShader=ZM,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=JM,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function QM(s){const e=new Map,t=new Map,n=s.clone();return ff(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ff(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ff(s.children[n],e.children[n],t)}class pf extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new Wu(t,$t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wu(t,$t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new _y(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Or.extractUrlBase(e);o=Or.resolveURL(c,this.path)}else o=Or.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Yd(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mf){try{o[$t.KHR_BINARY_GLTF]=new xy(e)}catch(d){i&&i(d);return}r=JSON.parse(o[$t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ly(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case $t.KHR_MATERIALS_UNLIT:o[d]=new ty;break;case $t.KHR_DRACO_MESH_COMPRESSION:o[d]=new vy(r,this.dracoLoader);break;case $t.KHR_TEXTURE_TRANSFORM:o[d]=new My;break;case $t.KHR_MESH_QUANTIZATION:o[d]=new yy;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function jM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function vn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ey{constructor(e){this.parser=e,this.name=$t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new At(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ii);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qi(h),c.distance=d;break;case"spot":c=new im(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ty{constructor(){this.name=$t.KHR_MATERIALS_UNLIT}getMaterialType(){return Fn}extendParams(e,t,n){const i=[];e.color=new At(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ii),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tn))}return Promise.all(i)}}class ny{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class iy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(i)}}class sy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class ry{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class oy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class ay{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_SHEEN}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new At(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ii)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class ly{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class cy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_VOLUME}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new At().setRGB(r[0],r[1],r[2],ii),Promise.all(i)}}class hy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_IOR}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class uy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new At().setRGB(r[0],r[1],r[2],ii),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tn)),Promise.all(i)}}class dy{constructor(e){this.parser=e,this.name=$t.EXT_MATERIALS_BUMP}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class fy{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return vn(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){const n=vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class py{constructor(e){this.parser=e,this.name=$t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class my{constructor(e){this.parser=e,this.name=$t.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class gy{constructor(e){this.parser=e,this.name=$t.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Wu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class _y{constructor(e){this.name=$t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const x=new kt,m=new k,g=new _n,M=new k(1,1,1),E=new Yr(p.geometry,p.material,f);for(let I=0;I<f;I++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,I),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,I),l.SCALE&&M.fromBufferAttribute(l.SCALE,I),E.setMatrixAt(I,x.compose(m,g,M));let w=null;for(const I in l)if(I==="_COLOR_0"){const P=l[I];E.instanceColor=new ra(P.array,P.itemSize,P.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(w===null){const v=E.geometry;w=new hn,w.name=v.name;for(const b in v.attributes)w.setAttribute(b,v.attributes[b]);for(const b in v.morphAttributes)w.morphAttributes[b]=v.morphAttributes[b];v.index!==null&&w.setIndex(v.index),w.morphTargetsRelative=v.morphTargetsRelative;for(const b of v.groups)w.addGroup(b.start,b.count,b.materialIndex);v.boundingBox!==null&&(w.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(w.boundingSphere=v.boundingSphere.clone()),w.drawRange.start=v.drawRange.start,w.drawRange.count=v.drawRange.count,w.userData=Object.assign({},v.userData),E.geometry=w}const P=l[I];w.setAttribute(I,new ra(P.array,P.itemSize,P.normalized))}pn.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),u.push(E)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const mf="glTF",vr=12,Xu={JSON:1313821514,BIN:5130562};class xy{constructor(e){this.name=$t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vr,r=new DataView(e,vr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Xu.JSON){const c=new Uint8Array(e,vr+o,a);this.content=n.decode(c)}else if(l===Xu.BIN){const c=vr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=uc[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=uc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],u=qs[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const x=u.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(u)},a,c,ii,f)})})}}class My{constructor(){this.name=$t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class yy{constructor(){this.name=$t.KHR_MESH_QUANTIZATION}}class gf extends tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*c,x=p-c,m=-2*u+3*f,g=u-f,M=1-m,E=g-f+d;for(let w=0;w!==a;w++){const I=o[x+w+a],P=o[x+w+l]*h,v=o[p+w+a],b=o[p+w]*h;r[w]=M*I+E*P+m*v+g*b}return r}}const Sy=new _n;class by extends gf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Sy.fromArray(r).normalize().toArray(r),r}}const oi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qu={9728:En,9729:On,9984:ld,9985:Ho,9986:br,9987:Ci},Yu={33071:Yn,33648:Qo,10497:hi},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wy={CUBICSPLINE:void 0,LINEAR:Gr,STEP:Hr},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ty(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:as})),s.DefaultMaterial}function fs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ey(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ay(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ry(s){let e;const t=s.extensions&&s.extensions[$t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dl(t.attributes):e=s.indices+":"+dl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+dl(s.targets[n]);return e}function dl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Py=new kt;class Ly{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new em(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new om(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yd(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fs(r,a,i),Ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Or.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=hl[i.type],a=qs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new In(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=hl[i.type],c=qs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(u&&u!==d){const g=Math.floor(f/u),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=t.cache.get(M);E||(x=new c(a,g*u,i.count*u/h),E=new Ed(x,u/h),t.cache.add(M,E)),m=new qr(E,l,f%u/h,p)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new In(x,l,p);if(i.sparse!==void 0){const g=hl.SCALAR,M=qs[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,I=new M(o[1],E,i.sparse.count*g),P=new c(o[2],w,i.sparse.count*l);a!==null&&(m=new In(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,b=I.length;v<b;v++){const F=I[v];if(m.setX(F,P[v*l]),l>=2&&m.setY(F,P[v*l+1]),l>=3&&m.setZ(F,P[v*l+2]),l>=4&&m.setW(F,P[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=qu[f.magFilter]||On,h.minFilter=qu[f.minFilter]||Ci,h.wrapS=Yu[f.wrapS]||hi,h.wrapT=Yu[f.wrapT]||hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==En&&h.minFilter!==On,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(m){const g=new Cn(m);g.needsUpdate=!0,u(g)}),t.load(Or.resolveURL(f,r.path),x,void 0,p)})})}const d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),Ti(f,o),f.userData.mimeType=o.mimeType||Cy(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ir,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cd,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$t.KHR_MATERIALS_UNLIT]){const d=i[$t.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ii),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Tn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gn);const h=r.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ul.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Fn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Fn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Fn){const d=r.emissiveFactor;a.emissive=new At().setRGB(d[0],d[1],d[2],ii)}return r.emissiveTexture!==void 0&&o!==Fn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tn)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ti(d,r),t.associations.set(d,{materials:e}),r.extensions&&fs(i,d,r),d})}createUniqueName(e){const t=cn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ku(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Ry(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[$t.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ku(new hn,c,t),c.mode===oi.TRIANGLE_STRIP?f=f.then(u=>Fu(u,md)):c.mode===oi.TRIANGLE_FAN&&(f=f.then(u=>Fu(u,ec))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Ty(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const x=h[u],m=o[u];let g;const M=c[u];if(m.mode===oi.TRIANGLES||m.mode===oi.TRIANGLE_STRIP||m.mode===oi.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,w=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&w?new Zp(x,M):new Xt(x,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===oi.LINES)g=new jp(x,M);else if(m.mode===oi.LINE_STRIP)g=new zc(x,M);else if(m.mode===oi.LINE_LOOP)g=new e0(x,M);else if(m.mode===oi.POINTS)g=new wr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Ay(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ti(g,r),m.extensions&&fs(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&fs(i,d[0],r),d[0];const f=new Re;r.extensions&&fs(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $n(sa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ya(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new kt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let E=0,w=f.length;E<w;E++){const I=f[E],P=u[E],v=p[E],b=x[E],F=m[E];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const U=n._createAnimationTracks(I,P,v,b,F);if(U)for(let X=0;X<U.length;X++)g.push(U[X])}const M=new oc(r,void 0,g);return Ti(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,Py)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new k().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Rd:c.length>1?h=new Re:c.length===1?h=c[0]:h=new pn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Ti(h,r),r.extensions&&fs(n,h,r),r.matrix!==void 0){const d=new kt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Re;n.name&&(r.name=i.createUniqueName(n.name)),Ti(r,n),n.extensions&&fs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(QM(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof ni||f instanceof Cn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}ns[r.path]===ns.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(ns[r.path]){case ns.weights:h=eo;break;case ns.rotation:h=to;break;case ns.translation:case ns.scale:h=ha;break;default:n.itemSize===1?h=eo:h=ha;break}const d=i.interpolation!==void 0?wy[i.interpolation]:Gr,f=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const x=new h(l[u]+"."+ns[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof to?by:gf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Dy(s,e,t){const n=e.attributes,i=new Di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const h=dc(qs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const x=dc(qs[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ii;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ku(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=uc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qt.workingColorSpace!==ii&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),Ti(s,e),Dy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ey(s,e.targets,t):s})}const Iy="/assets/altar-BLnKV2Du.glb",Ny="/assets/backend-0N1rHeCk.glb",Uy="/assets/bridge-ETZK_L1i.glb",Oy="/assets/designer-DbLc0S5w.glb",Fy="/assets/dock-Dz4b5cxY.glb",By="/assets/flora-7jxy9LaY.glb",zy="/assets/forge-DNia5kCh.glb",ky="/assets/frontend-BagVIkFr.glb",Hy="/assets/garden-iFD0puy8.glb",Gy="/assets/gate-CLzj2aEg.glb",Vy="/assets/house_library-a_INcIO_.glb",Wy="/assets/house_studio-prPn7xt-.glb",Xy="/assets/house_tavern-DhJciONJ.glb",qy="/assets/house_war-CErgsJUC.glb",Yy="/assets/house_workshop-DizOAfBl.glb",Ky="/assets/lead-B8dKTGTU.glb",Zy="/assets/reviewer-CjFLqSzL.glb",Jy="/assets/towers-DiePBDd1.glb",$y="/assets/underside-CtDt-w8A.glb",Qy="/assets/walls-DL6hLM5P.glb",jy="/assets/watch-D_FLfKo1.glb",e1="/assets/yard-BCXHtimJ.glb",t1="/assets/backend-BO6EdEPd.jpg",n1="/assets/designer-3Dfjr5eY.jpg",i1="/assets/frontend-ChC8gXK4.jpg",s1="/assets/lead-BVut_pmU.jpg",r1="/assets/reviewer-r8WJ7XTx.jpg",o1=Object.assign({"../models/altar.glb":Iy,"../models/backend.glb":Ny,"../models/bridge.glb":Uy,"../models/designer.glb":Oy,"../models/dock.glb":Fy,"../models/flora.glb":By,"../models/forge.glb":zy,"../models/frontend.glb":ky,"../models/garden.glb":Hy,"../models/gate.glb":Gy,"../models/house_library.glb":Vy,"../models/house_studio.glb":Wy,"../models/house_tavern.glb":Xy,"../models/house_war.glb":qy,"../models/house_workshop.glb":Yy,"../models/lead.glb":Ky,"../models/reviewer.glb":Zy,"../models/towers.glb":Jy,"../models/underside.glb":$y,"../models/walls.glb":Qy,"../models/watch.glb":jy,"../models/yard.glb":e1}),fc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},rs=["lead","designer","frontend","backend","reviewer"],a1=Object.assign({"../models/backend.jpg":t1,"../models/designer.jpg":n1,"../models/frontend.jpg":i1,"../models/lead.jpg":s1,"../models/reviewer.jpg":r1});function jc(s){const e=o1[`../models/${s}.glb`];if(!e)throw new Error(`no model ${s} in the bundle`);return e}function l1(s){const e=a1[`../models/${s}`];if(!e)throw new Error(`no texture ${s} in the bundle`);return e}const fl=new kt,c1=new kt;function _f(s){const e=new Set;return s.scene.traverse(t=>{const n=t.userData.woa_q;if(n&&(fl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),t.matrix.compose(t.position,t.quaternion,t.scale).multiply(c1.copy(fl).invert()),t.matrix.decompose(t.position,t.quaternion,t.scale)),!(t instanceof Xt)||e.has(t.geometry))return;const i=t.geometry;e.add(i);for(const[o,a]of Object.entries(i.attributes)){if(o==="skinIndex"||a.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in a))continue;const l=a.itemSize,c=new Float32Array(a.count*l);for(let h=0;h<a.count;h++)c[h*l]=a.getX(h),l>1&&(c[h*l+1]=a.getY(h)),l>2&&(c[h*l+2]=a.getZ(h)),l>3&&(c[h*l+3]=a.getW(h));i.setAttribute(o,new In(c,l))}const r=n||t.parent?.userData.woa_q;r&&i.applyMatrix4(fl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function xf(s,e){const t=e,n=t.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((t.emissiveIntensity||1)*40)/100)):s.toon("#"+t.color.getHexString())}const h1=s=>s.isMeshStandardMaterial===!0;function vf(s,e){const t=new Map;return e.traverse(n=>{if(!(n instanceof Xt))return;const i=xf(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.applyMatrix4(n.matrixWorld);const a=t.get(i);a?a.push(o):t.set(i,[o])}),t}function u1(s,e){e.scene.updateMatrixWorld(!0);const t=new Re;for(const[n,i]of vf(s,e.scene)){const r=i.length===1?i[0]:$c(i,!1);if(!r)continue;const o=new Xt(r,n);o.castShadow=!h1(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o)}return t}function Mf(s,e){let t=null;return s.scene.traverse(n=>{!t&&(n.userData.name===e||n.name===e)&&(t=n)}),t}async function d1(){const s=new pf,e=Object.keys(fc),t=await Promise.all(e.map(n=>s.loadAsync(jc(n)).then(_f)));return Object.fromEntries(e.map((n,i)=>[n,t[i]]))}function f1(s,e){const t={};for(const n of Object.keys(fc)){const i=e[n];t[n]=fc[n]==="static"?u1(s,i):i}return t}const Rr={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function p1(s,e){const t=.075*s/1.8,n=(e-t)*.5;return Math.max(.5,n+t-.02)}const m1={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit"},pl={intensity:2.5,distance:4},pc=new Set(["type","smash","readsit","sit","drink"]),g1=.59;function _1(s){const e=jc(s),t=new qd;return t.setURLModifier(n=>n===e?n:l1(n.slice(n.lastIndexOf("/")+1))),new pf(t)}async function x1(){const s=await Promise.all(rs.map(e=>_1(e).loadAsync(jc(e)).then(_f)));return s.forEach((e,t)=>{e.scene.traverse(n=>{if(n instanceof Xt&&!n.material.map)throw new Error(`the ${rs[t]} model's texture did not load`)})}),Object.fromEntries(rs.map((e,t)=>[e,s[t]]))}function v1(s){const e=$o.filter(n=>n.kind==="house"),t=gi.forge;return(n,i)=>{for(const r of e){const[o,a]=Fr(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(a)<r.d/2+.1)return Wt;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&a>r.deck[2]&&a<r.deck[3])return .2}if(Math.hypot(n-t.x,i-t.z)<7.8)return .16;for(const r of s){const o=n-r.x,a=i-r.z,l=(r.len+.6)/2,c=o*Math.cos(r.ang)-a*Math.sin(r.ang),h=o*Math.sin(r.ang)+a*Math.cos(r.ang);if(Math.abs(c)<l&&Math.abs(h)<.6)return .12+.32*(1-(c/l)**2)}return .02}}const M1=.055,da=new k,Cr=new k,Zu=new k,y1=new k,Zo=new k,ml=new k,S1=new k,Ju=new _n,$u=new _n,fa=new _n,Qu=new _n,gl=new Jd;function ju(s,e,t){Ju.setFromUnitVectors(e,t),s.getWorldQuaternion($u),s.parent.getWorldQuaternion(fa).invert(),s.quaternion.copy(fa.multiply(Ju).multiply($u)),s.updateMatrixWorld(!0)}function b1(s,e,t,n){const i=s.up.getWorldPosition(Cr),r=s.low.getWorldPosition(Zu),o=s.foot.getWorldPosition(da);s.foot.getWorldQuaternion(Qu);const a=i.distanceTo(r),l=r.distanceTo(o),c=Zo.set(o.x,e+t,o.z).sub(i),h=sa.clamp(c.length(),Math.abs(a-l)+1e-4,a+l-1e-4);c.normalize();const d=ml.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=sa.clamp((a*a+h*h-l*l)/(2*a*h),-1,1),u=S1.copy(i).addScaledVector(c,a*f).addScaledVector(d,a*Math.sqrt(1-f*f)),p=y1.copy(i).addScaledVector(c,h);ju(s.up,ml.subVectors(r,i).normalize(),Zo.subVectors(u,i).normalize());const x=s.low.getWorldPosition(Zu),m=s.foot.getWorldPosition(da);ju(s.low,ml.subVectors(m,x).normalize(),Zo.subVectors(p,x).normalize()),s.foot.parent.getWorldQuaternion(fa).invert(),s.foot.quaternion.copy(fa.multiply(Qu)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function w1(s,e,t,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of rs){const f=new Re;f.userData.agentId=d,e.add(f);const u=li[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:x,speed:m}=Rr[d],g=t[d],M=g.scene;M.updateMatrixWorld(!0);const E=new Di().setFromObject(M),w=p/Math.max(.01,E.max.y-E.min.y);M.scale.setScalar(w);const I=-E.min.y*w;M.position.y=I;const P=new Map;M.traverse(G=>{if(!(G instanceof Xt))return;const te=G.material;let he=P.get(te);he||(te.map&&(te.map.colorSpace=Tn),he=i("#ffffff",{map:te.map??null}),P.set(te,he)),G.material=he,G.castShadow=!0,G.receiveShadow=!0,G.frustumCulled=!1,G.raycast=()=>{}});let v=null,b=null;if(d==="reviewer"){v=new qi("#6dffa0",pl.intensity,pl.distance,2),v.position.set(-.18,2.2,.35),f.add(v);const G=M.getObjectByName("mixamorigRightHand");if(!G)throw new Error("the reviewer model has no right hand");const te=new Re,he=new Re;te.add(he);const be=new Zi(new os({map:n.flameTex,color:new At(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));be.center.set(.5,.05),be.scale.set(.16,.3,1),be.position.y=.02;const Je=new Zi(new os({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:Ai}));Je.scale.setScalar(.25),Je.position.y=.08,be.raycast=()=>{},Je.raycast=()=>{},he.add(be,Je),G.add(te),M.updateMatrixWorld(!0),te.scale.setScalar(1/G.getWorldScale(new k).x),b={group:te,flicker:he}}const F={};for(const G of g.animations){const te=G.tracks.find(he=>/Hips\.position$/.test(he.name));te&&(F[G.name]=te.values[1]*w)}const U=new Sm(M),X={};for(const G of g.animations){const te=U.clipAction(G);te.enabled=!0,te.setEffectiveTimeScale(1),te.setEffectiveWeight(G.name==="idle"?1:0),te.time=Math.random()*G.duration,te.play(),X[G.name]=te}if(!X.idle||!X.walk||!X.sit||!X.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const se=Math.min(2.6,Math.max(.8,m/(g1*p)));X.walk.timeScale=se,U.update(0);const Q=G=>M.getObjectByName("mixamorig"+G),N=["Left","Right"].map(G=>({up:Q(G+"UpLeg"),low:Q(G+"Leg"),foot:Q(G+"Foot")}));M.updateMatrixWorld(!0);const ie=N.every(G=>G.up&&G.low&&G.foot)?N.map(G=>({up:G.up,low:G.low,foot:G.foot,saved:[new _n,new _n,new _n]})):null,ae=ie?Math.min(...ie.map(G=>G.foot.getWorldPosition(da).y)):0,K=Q("Hips");if(!K)throw new Error(`the ${d} model has no hips`);f.add(M),o[d]={id:d,root:f,H:p,seatY:p1(p,x),phase:n.phases[d],model:{obj:M,mixer:U,acts:X,cur:"idle",baseY:I,walkScale:se,seat:F,hips:K,legs:ie,ankleH:ae,bent:!1,ikW:0},lantern:v,lamp:b}}const a=new Map;function l(d,f,u,p){const x=a.get(d);if(x!==void 0)return x;const m=[];for(const[M,E]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){gl.set(da.set(f+M,p+1.2,u+E),Zo.set(0,-1,0)),gl.far=1.3;for(const w of gl.intersectObjects(e.children,!0)){let I=!1,P=!0;for(let F=w.object;F;F=F.parent)F.userData.agentId&&(I=!0),F.visible||(P=!1);const v=w.point.y-p,b=w.object;if(!I&&P&&b.isMesh&&!b.material.transparent&&v>.25&&v<.66){m.push(v);break}}}const g=m.length?Math.max(...m):null;return a.set(d,g),g}function c(d,f,u,p,x=1){const m=d.model;if(m.bent&&m.legs)for(const U of m.legs)U.up.quaternion.copy(U.saved[0]),U.low.quaternion.copy(U.saved[1]),U.foot.quaternion.copy(U.saved[2]);m.bent=!1;const g=m1[f],M=g&&m.acts[g]?g:"idle";if(M!==m.cur){const U=m.acts[m.cur],X=m.acts[M];X.enabled=!0,X.setEffectiveWeight(1),X.time=0,r?U.setEffectiveWeight(0):U.crossFadeTo(X,.3,!1),m.cur=M}M==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*x)),m.mixer.update(r?0:u);const E=M!=="walk"&&M!=="idle";let w=null;const I=n.groundY(d.root.position.x,d.root.position.z);if(E&&p&&m.legs&&m.acts[M].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const U=m.hips.getWorldPosition(Cr);w=l(p+"|"+d.id,U.x,U.z,I)}let P=m.baseY,v=0,b=0;if(w!==null){P=m.obj.position.y+(I+w+M1*d.H)-Cr.y;const U=d.root.rotation.y,X=Math.cos(U),se=Math.sin(U),Q=d.root.position.x-Cr.x,N=d.root.position.z-Cr.z;v=m.obj.position.x+Q*X-N*se,b=m.obj.position.z+Q*se+N*X}else E&&m.seat[M]!==void 0&&(P=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[M])));const F=r?1:Math.min(1,u*8);if(m.obj.position.x+=(v-m.obj.position.x)*F,m.obj.position.y+=(P-m.obj.position.y)*F,m.obj.position.z+=(b-m.obj.position.z)*F,m.ikW=w===null?0:Math.min(1,m.ikW+(r?1:u/.3)),w!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const U of m.legs)U.saved[0].copy(U.up.quaternion),U.saved[1].copy(U.low.quaternion),U.saved[2].copy(U.foot.quaternion),b1(U,I,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!pc.has(f)&&f!=="read"?pl.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const Mr=new k;function ri(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Mr.copy(e),Mr[n]=0,Mr.normalize();const c=.5*o/(o+a),h=1-Mr.angleTo(s)/l;return Math.sign(Mr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class wa extends Le{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new k,c=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new k,m=.5/o;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[M+0]=ri(x,c,"z","y",r,n),u[M+1]=1-ri(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[M+0]=1-ri(x,c,"z","y",r,n),u[M+1]=1-ri(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[M+0]=1-ri(x,c,"x","z",r,e),u[M+1]=ri(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[M+0]=1-ri(x,c,"x","z",r,e),u[M+1]=1-ri(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[M+0]=1-ri(x,c,"x","y",r,e),u[M+1]=1-ri(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[M+0]=ri(x,c,"x","y",r,e),u[M+1]=1-ri(x,c,"y","x",r,t);break}}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.segments,e.radius)}}const T1="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:Hi}=Math,mc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function E1(){const s=new FontFace("M PLUS Rounded 1c",`url("${T1}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const Xn={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function A1(s,e,t,n){s.setPixelRatio(Math.min(n,2)),s.setSize(e,t),s.shadowMap.enabled=!0,s.shadowMap.type=Pr,s.toneMapping=ma,s.toneMappingExposure=.95}function ed(s){let e=s;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function R1(s,e){const t=new xa(new Uint8Array([70,150,255]),3,1,ga);t.minFilter=t.magFilter=En,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Fn({color:2824987,side:Hn}),i=0,r=1,o=new k(0,1,0),a={uRimColor:{value:new At("#ffd2a6")},uRimAmt:{value:.45}};function l(_){return _.onBeforeCompile=z=>{z.uniforms.uRimColor=a.uRimColor,z.uniforms.uRimAmt=a.uRimAmt,z.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+z.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},_.customProgramCacheKey=()=>"rim1",_}const c=new Map;function h(_,z){if(!z){let W=c.get(_);return W||(W=l(new qo({color:_,gradientMap:t})),c.set(_,W)),W}return l(new qo(Object.assign({color:_,gradientMap:t},z)))}const d=new Map;function f(_,z=2){const W=_+z;let O=d.get(W);return O||(O=new Qs({color:0,emissive:_,emissiveIntensity:z,roughness:1}),d.set(W,O)),O}function u(_,z,W=!0){z&&z.userData.autoUV&&_.attributes.uv&&!_.userData.planar&&(_.type==="BoxGeometry"||_.type==="RoundedBoxGeometry")&&(X(_,.9),_.userData.planar=!0);const O=new Xt(_,z);return O.castShadow=W,O.receiveShadow=!0,O}const p=(_,z,W,O=.03)=>new wa(_,z,W,2,Math.min(O,_/2.1,z/2.1,W/2.1));function x(_,z,W=i,O=!0){const re=u(_,z,O);if(W){const ce=new Xt(_,n);ce.scale.setScalar(1+W*r),ce.raycast=()=>{},re.add(ce)}return re}function m(_,z,W,O){return _.position.set(z,W,O),_}function g(_,z,W,O){return _.rotation.set(z,W,O),_}function M(_,z,W,O,re=0,ce=0){return z.position.set(W,ce,O),z.rotation.y=re,_.add(z),z}function E(_,z,W,O,re,ce,Ve=i*1.6,Et=7){const Lt=W.clone().normalize(),yt=x(new Sn(re,O,Et),ce,Ve);return yt.quaternion.setFromUnitVectors(o,Lt),yt.position.copy(z).addScaledVector(Lt,O*.45),_.add(yt),yt}const w=ed(20261116),I=(_,z)=>_+(z-_)*w(),P=_=>_[Math.floor(w()*_.length)],v=ed(777),b=(_,z)=>_+(z-_)*v();function F(_,z,W,O){const re=document.createElement("canvas");re.width=_,re.height=z;const ce=re.getContext("2d");ce&&W(ce,_,z);const Ve=new nc(re);return Ve.colorSpace=Tn,Ve.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),Ve.wrapS=Ve.wrapT=hi,O&&Ve.repeat.set(O[0],O[1]),Ve}function U(_,z,W){const O=_.clone();return O.wrapS=O.wrapT=hi,O.repeat.set(z,W),O.needsUpdate=!0,O}function X(_,z=1,W=z){const O=_.attributes.position,re=_.attributes.normal,ce=_.attributes.uv;for(let Ve=0;Ve<O.count;Ve++){const Et=Math.abs(re.getX(Ve)),Lt=Math.abs(re.getY(Ve)),yt=Math.abs(re.getZ(Ve));let Ot,Pt;Lt>=Et&&Lt>=yt?(Ot=O.getX(Ve),Pt=O.getZ(Ve)):Et>=yt?(Ot=O.getZ(Ve),Pt=O.getY(Ve)):(Ot=O.getX(Ve),Pt=O.getY(Ve)),ce.setXY(Ve,Ot/z,Pt/W)}return ce.needsUpdate=!0,_}function se(_,z,W,O=0,re=z){const ce=_.attributes.position,Ve=_.attributes.normal,Et=_.attributes.uv;for(let Lt=0;Lt<ce.count;Lt++){const yt=Math.abs(Ve.getX(Lt)),Ot=Math.abs(Ve.getZ(Lt)),Pt=(yt>Ot?ce.getZ(Lt):ce.getX(Lt))/W;Et.setXY(Lt,Pt,(ce.getY(Lt)+z/2+O)/re)}return Et.needsUpdate=!0,_}const Q=new kt,N=new _n,ie=new Li,ae=new k,K=new k,G=new At;function te(_,z,W={}){if(!z.length)return null;const O=W.mat||l(new qo({color:16777215,gradientMap:t})),re=new Yr(_,O,z.length);return re.castShadow=!!W.cast,re.receiveShadow=W.receive!==!1,z.forEach((ce,Ve)=>{ce.m?Q.copy(ce.m):(ie.set(ce.rx||0,ce.ry||0,ce.rz||0),N.setFromEuler(ie),ae.set(ce.x??0,ce.y??0,ce.z??0),K.set(ce.sx??1,ce.sy??1,ce.sz??1),Q.compose(ae,N,K)),re.setMatrixAt(Ve,Q),(!W.mat||W.colors)&&re.setColorAt(Ve,G.set(ce.c||"#ffffff"))}),re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),re.computeBoundingSphere(),(W.parent||e).add(re),re}const he=new Le(1,1,1);function be(_,z,W,O=!0){return W.length?te(he,W.map(([re,ce,Ve,Et,Lt,yt,Ot=0,Pt=0,Ze=0])=>({x:re,y:ce,z:Ve,sx:Et,sy:Lt,sz:yt,rx:Ot,ry:Pt,rz:Ze})),{mat:z,parent:_,cast:O}):null}function Je(_,z,W,O,re,ce,Ve,Et){for(let Lt=0;Lt<re;Lt++){const yt=b(0,z),Ot=b(0,W),Pt=b(ce,Ve);for(const[Ze,St]of[[0,0],[z,0],[-z,0],[0,W],[0,-W]]){const rn=_.createRadialGradient(yt+Ze,Ot+St,0,yt+Ze,Ot+St,Pt),bn=O[Math.floor(v()*O.length)];rn.addColorStop(0,bn+Et),rn.addColorStop(1,bn+"00"),_.fillStyle=rn,_.fillRect(yt+Ze-Pt,Ot+St-Pt,Pt*2,Pt*2)}}}function ft(_,z,W,O=.16){_.globalCompositeOperation="destination-in";const re=_.createLinearGradient(0,0,z,0);re.addColorStop(0,"rgba(0,0,0,0)"),re.addColorStop(O,"rgba(0,0,0,1)"),re.addColorStop(1-O,"rgba(0,0,0,1)"),re.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=re,_.fillRect(0,0,z,W),_.globalCompositeOperation="source-over"}function fe(_,z,W,O,re,ce,Ve,Et,Lt,yt,Ot){for(let Pt=W;Pt<re;Pt+=ce){let Ze=z-b(0,Et);for(;Ze<O;){const St=b(Ve,Et);_.fillStyle=Lt[Math.floor(v()*Lt.length)],_.beginPath(),_.roundRect(Ze+yt,Pt+yt,St-yt*2,ce-yt*2,Ot),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Ze+yt*2,Pt+yt*1.5,St-yt*4,3),Ze+=St}}}function Ke(_,z,W,O,re,ce,Ve,Et,Lt){const yt=W/O;for(let Ot=0;Ot<O;Ot++){const Pt=Ot*yt;let Ze=b(0,ce);const St=Ze;for(;Ze<St+z;){const rn=Math.min(b(re,ce),St+z-Ze);if(rn<re*.5)break;const bn=Ve[Math.floor(v()*Ve.length)];for(const un of[0,-z])_.fillStyle=bn,_.beginPath(),_.roundRect(Ze+un+Et,Pt+Et,rn-Et*2,yt-Et*2,Lt),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Ze+un+Et*2,Pt+Et*1.5,rn-Et*4,3);Ze+=rn}}}function at(_,z,W,O){for(let re=0;re<8;re++){let ce=-b(0,200);for(;ce<z;){const Ve=b(160,340);_.fillStyle=O[Math.floor(v()*O.length)],_.fillRect(ce,re*64,Ve,64),_.strokeStyle="rgba(255, 230, 200, 0.06)",_.lineWidth=2;for(let Et=0;Et<3;Et++){const Lt=re*64+b(10,54);_.beginPath(),_.moveTo(ce+6,Lt),_.bezierCurveTo(ce+Ve*.3,Lt+b(-4,4),ce+Ve*.6,Lt+b(-4,4),ce+Ve-6,Lt),_.stroke()}_.fillStyle="rgba(20, 10, 6, 0.4)",_.fillRect(ce,re*64,3,64),_.fillStyle="rgba(20, 10, 6, 0.35)",_.beginPath(),_.arc(ce+10,re*64+14,2.5,0,Hi*2),_.arc(ce+10,re*64+50,2.5,0,Hi*2),_.fill(),ce+=Ve}_.fillStyle="rgba(20, 10, 6, 0.45)",_.fillRect(0,re*64,z,3)}}const xt=(_,z,W)=>{const O=_.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,z),O.addColorStop(1,W),_.fillStyle=O,_.fillRect(0,0,64,64)},Qe=F(512,512,(_,z,W)=>{_.fillStyle="#6f8b49",_.fillRect(0,0,z,W),Je(_,z,W,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let O=0;O<900;O++){_.strokeStyle=v()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",_.lineWidth=2;const re=b(0,z),ce=b(0,W);_.beginPath(),_.moveTo(re,ce),_.lineTo(re+b(-2,2),ce-b(5,10)),_.stroke()}}),vt=F(256,256,(_,z,W)=>{_.fillStyle="#8b6a4b",_.fillRect(0,0,z,W),Je(_,z,W,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let O=0;O<120;O++)_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",_.beginPath(),_.ellipse(b(0,z),b(0,W),b(1.5,4),b(1,3),b(0,3),0,Hi*2),_.fill()}),Yt=F(256,256,(_,z,W)=>{_.fillStyle="#b0906a",_.fillRect(0,0,z,W),Je(_,z,W,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let O=0;O<160;O++)_.fillStyle="rgba(120, 90, 60, 0.25)",_.fillRect(b(0,z),b(0,W),2,2)}),_t=F(512,512,(_,z,W)=>{_.fillStyle="#5b524c",_.fillRect(0,0,z,W),Ke(_,z,W,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),Rt=F(512,512,(_,z,W)=>{_.fillStyle="#6a6058",_.fillRect(0,0,z,W),Ke(_,z,W,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),Ct=F(512,512,(_,z,W)=>{_.fillStyle="#8f6c4b",_.fillRect(0,0,z,W),Je(_,z,W,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let O=0;O<260;O++){const re=b(6,z-6),ce=b(6,W-6);_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",_.beginPath(),_.ellipse(re,ce,b(1.5,4),b(1,3),0,0,Hi*2),_.fill()}}),Ce=F(256,512,(_,z,W)=>{const O=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let re=0;for(const[ce,Ve]of O)_.fillStyle=ce,_.fillRect(0,re,z,Ve*W+2),re+=Ve*W;Je(_,z,W,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let ce=0;ce<40;ce++){_.strokeStyle="rgba(40, 26, 18, 0.35)",_.lineWidth=2;const Ve=b(0,z),Et=b(.15*W,W);_.beginPath(),_.moveTo(Ve,Et),_.lineTo(Ve+b(-10,10),Et+b(10,40)),_.stroke()}_.fillStyle="#5a7a44";for(let ce=0;ce<z;ce+=6)_.beginPath(),_.moveTo(ce,0),_.lineTo(ce+3,b(14,34)),_.lineTo(ce+6,0),_.fill()}),Xe=F(256,128,(_,z,W)=>{_.fillStyle="#7a2420",_.fillRect(0,0,z,W);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a2a24":"#6a1e1a",_.fillRect(O*32,0,32,W);_.fillStyle="#e3d5b6",_.fillRect(0,W*.46,z,W*.08),_.fillStyle="#2a2224",_.fillRect(0,W*.43,z,3),_.fillRect(0,W*.57,z,3)}),it=F(256,256,(_,z,W)=>{for(let O=0;O<2;O++)_.fillStyle=["#a59a8c","#958a7d"][O],_.beginPath(),_.ellipse(z/2+b(-20,20),W*(.25+O*.5),z*.32,W*.17,b(-.3,.3),0,Hi*2),_.fill()}),ct=F(512,512,(_,z,W)=>{_.fillStyle="#5f5650",_.fillRect(0,0,z,W),fe(_,0,0,z,W,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),st=F(512,512,(_,z,W)=>at(_,z,W,["#5a3a2a","#4e3224","#62402e","#553728"])),ht=F(512,512,(_,z,W)=>at(_,z,W,["#4a3226","#553a2b","#3f2a20","#4e3428"])),pt=F(512,512,(_,z,W)=>at(_,z,W,["#a17a55","#94704d","#ab845e","#9a7552"])),Me=F(512,512,(_,z,W)=>at(_,z,W,["#7a5236","#6e4a31","#84593b","#734d33"])),He=F(512,512,(_,z,W)=>{_.fillStyle="#3f3a3a",_.fillRect(0,0,z,W);for(let O=0;O<4;O++)for(let re=0;re<4;re++)_.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(re+O*3)%4],_.beginPath(),_.roundRect(re*128+4,O*128+4,120,120,6),_.fill(),_.fillStyle="rgba(255,255,255,0.05)",_.fillRect(re*128+10,O*128+10,108,6)}),ke=F(512,512,(_,z,W)=>{_.fillStyle="#4f4843",_.fillRect(0,0,z,W),fe(_,0,0,z,W,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),L=F(512,512,(_,z,W)=>{_.fillStyle="#4a433f",_.fillRect(0,0,z,W),fe(_,0,0,z,W,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Je(_,z,W,["#3e5a34","#4a3a30"],14,20,60,"30")}),tt=F(512,512,(_,z,W)=>{for(let O=0;O<8;O++)_.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][O%4],_.fillRect(O*64,0,64,W),_.fillStyle="rgba(25, 14, 10, 0.45)",_.fillRect(O*64,0,3,W),_.fillStyle="rgba(255, 220, 190, 0.05)",_.fillRect(O*64+8,0,3,W);_.fillStyle="#7a2320",_.fillRect(0,34,z,70),_.strokeStyle="#d9c9a6",_.lineWidth=6,_.lineJoin="round",_.beginPath();for(let O=0;O<=z;O+=32)_.lineTo(O,O%64?52:86);_.stroke()}),je=F(256,256,(_,z,W)=>{_.fillStyle="#4e1612",_.fillRect(0,0,z,W);for(let O=0;O<8;O++){const re=O%2?16:0;for(let ce=-32;ce<z+32;ce+=32)_.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(v()*4)],_.beginPath(),_.roundRect(ce+re+1,O*32+2,30,30,[2,2,12,12]),_.fill(),_.fillStyle="rgba(255, 200, 170, 0.12)",_.fillRect(ce+re+5,O*32+5,22,3);_.fillStyle="rgba(30, 6, 6, 0.35)",_.fillRect(0,O*32,z,3)}}),qe=F(256,256,(_,z,W)=>{for(let O=0;O<4;O++)_.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][O],_.fillRect(O*64,0,64,W),_.fillStyle="rgba(20, 8, 6, 0.45)",_.fillRect(O*64,0,3,W)}),Pe=F(256,512,(_,z,W)=>{_.fillStyle="#6e1a19",_.fillRect(0,0,z,W),_.fillStyle="#2a1e1f",_.fillRect(0,0,z,26),_.fillRect(0,0,14,W),_.fillRect(z-14,0,14,W),_.fillStyle="#b08a3e",_.fillRect(0,26,z,6),_.fillStyle="#e3d5b6",_.beginPath(),_.moveTo(52,300),_.lineTo(204,300),_.lineTo(188,332),_.lineTo(156,332),_.lineTo(164,368),_.lineTo(196,368),_.lineTo(196,396),_.lineTo(60,396),_.lineTo(60,368),_.lineTo(92,368),_.lineTo(100,332),_.lineTo(68,332),_.closePath(),_.fill(),_.beginPath(),_.moveTo(128,120),_.bezierCurveTo(168,164,176,192,164,216),_.bezierCurveTo(152,236,104,236,92,216),_.bezierCurveTo(80,192,100,176,112,152),_.bezierCurveTo(120,168,124,172,132,176),_.bezierCurveTo(132,160,128,140,128,120),_.fill(),_.fillStyle="#6e1a19",_.beginPath(),_.moveTo(0,W),_.lineTo(z/2,W-60),_.lineTo(z,W),_.fill()}),nt=F(64,256,(_,z,W)=>{_.fillStyle="#6fa9c9",_.fillRect(0,0,z,W);for(let O=0;O<40;O++)_.fillStyle=O%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",_.fillRect(O*23%64,O*41%256,3+O%3*2,18+O%5*10)}),Se=F(128,128,(_,z,W)=>{_.fillStyle="#c4c4c4",_.fillRect(0,0,z,W);for(let O=0;O<70;O++){const re=O*37%z,ce=(O*59+O%7*11)%W,Ve=4+O%4*3;_.fillStyle=O%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",_.beginPath(),_.ellipse(re,ce,Ve,1.2+O%3*.5,O*.7%3.14,0,2*Math.PI),_.fill(),re+Ve>z&&(_.beginPath(),_.ellipse(re-z,ce,Ve,1.4,O*.7%3.14,0,2*Math.PI),_.fill())}}),le=F(256,180,(_,z,W)=>{_.fillStyle="#efe4cc",_.fillRect(0,0,z,W),_.strokeStyle="#4f76b0",_.lineWidth=3,_.strokeRect(20,20,216,30),_.strokeRect(20,62,66,46),_.strokeRect(95,62,66,46),_.strokeRect(170,62,66,46),_.strokeRect(20,120,216,42),_.strokeStyle="#b8483e",_.beginPath(),_.moveTo(26,150),_.lineTo(80,132),_.lineTo(130,145),_.lineTo(226,126),_.stroke()}),C=F(256,200,(_,z,W)=>{const O=_.createLinearGradient(0,0,0,W);O.addColorStop(0,"#d98a62"),O.addColorStop(1,"#f2d2a8"),_.fillStyle=O,_.fillRect(0,0,z,W),_.fillStyle="#5c6f48",_.beginPath(),_.moveTo(0,150),_.quadraticCurveTo(80,100,150,140),_.quadraticCurveTo(210,120,256,135),_.lineTo(256,200),_.lineTo(0,200),_.fill(),_.fillStyle="#4a3a3c",_.fillRect(150,70,44,72),_.fillStyle="#7a2420",_.beginPath(),_.moveTo(144,72),_.lineTo(172,40),_.lineTo(200,72),_.fill(),_.fillStyle="#ffd27a",_.fillRect(165,92,14,18)}),S=F(256,200,_=>{_.fillStyle="#c8b18a",_.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((z,W)=>{_.fillStyle=z,_.fillRect(16+W%3*78,16+Math.floor(W/3)*60,66,48)}),_.fillStyle="#efe4cc",_.fillRect(16,140,224,44),_.fillStyle="#2b3a36",_.fillRect(28,152,120,8),_.fillRect(28,166,80,6)}),$=F(256,160,(_,z,W)=>{_.fillStyle="rgba(40, 200, 220, 0.18)",_.fillRect(0,0,z,W);const O=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let re=0;re<9;re++)_.fillStyle=O[re%4],_.fillRect(18+re%3*12,18+re*14,40+re*53%140,6)}),ye=F(256,128,(_,z,W)=>{_.fillStyle="#3d6f99",_.fillRect(0,0,z,W),_.fillStyle="#8aa866";for(const[O,re,ce,Ve]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])_.beginPath(),_.ellipse(O,re,ce,Ve,.3,0,Hi*2),_.fill()}),pe=F(128,128,(_,z,W)=>{_.fillStyle="#c9a75a",_.fillRect(0,0,z,W);for(let O=0;O<160;O++){_.strokeStyle=O%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",_.lineWidth=2;const re=b(0,z),ce=b(0,W);_.beginPath(),_.moveTo(re,ce),_.lineTo(re+6,ce+2),_.stroke()}}),Ue=F(128,128,_=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((z,W)=>{_.fillStyle=z,_.beginPath(),_.arc(64,64,62-W*12,0,Hi*2),_.fill()})}),Ge=F(256,256,(_,z,W)=>{_.fillStyle="#7a5a3c",_.fillRect(0,0,z,W);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a9a48":"#a7a24e",_.fillRect(0,O*32+6,z,20)}),ve=F(64,64,_=>xt(_,"rgba(255,255,255,1)","rgba(255,255,255,0)")),we=F(64,64,_=>xt(_,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Ie=F(64,64,_=>{_.translate(32,32),_.fillStyle="#fff6c8",_.beginPath();for(let z=0;z<8;z++){const W=z%2?9:30,O=z*Hi/4;_.lineTo(Math.cos(O)*W,Math.sin(O)*W)}_.closePath(),_.fill()}),V=F(8,512,(_,z,W)=>{const O=_.createLinearGradient(0,0,0,W);O.addColorStop(0,"#4c6994"),O.addColorStop(.38,"#8ea6c4"),O.addColorStop(.62,"#d8c2a6"),O.addColorStop(.8,"#e2a682"),O.addColorStop(1,"#b8674f"),_.fillStyle=O,_.fillRect(0,0,z,W)});V.wrapS=V.wrapT=Yn;const xe={grass:Qe,dirt:vt,sand:Yt,tCobble:_t,tFlag:Rt,tDirt:Ct,strata:Ce,balloon:Xe,roadStones:it,plaza:ct,planksWar:st,planksDark:ht,planksLight:pt,planks:Me,slate:He,stoneWall:ke,castleWall:L,plankWall:tt,roof:je,gable:qe,banner:Pe,water:nt,ripple:Se,paper:le,painting:C,moodboard:S,code:$,globe:ye,straw:pe,target:Ue,field:Ge,soft:ve,blob:we,spark:Ie,sky:V,grain:void 0};function ge(_,z=2.2){const W=_.image,O=W.width,re=W.height;if(!(O>0)||!(re>0))return _;const ce=W.getContext("2d");if(!ce)return _;const Ve=ce.getImageData(0,0,O,re).data,Et=new Float32Array(O*re);for(let Ze=0;Ze<O*re;Ze++)Et[Ze]=((Ve[Ze*4]??0)*.299+(Ve[Ze*4+1]??0)*.587+(Ve[Ze*4+2]??0)*.114)/255;const Lt=document.createElement("canvas");Lt.width=O,Lt.height=re;const yt=Lt.getContext("2d");if(!yt)return _;const Ot=yt.createImageData(O,re);for(let Ze=0;Ze<re;Ze++)for(let St=0;St<O;St++){const rn=Et[Ze*O+(St-1+O)%O]??0,bn=Et[Ze*O+(St+1)%O]??0,un=Et[(Ze-1+re)%re*O+St]??0,T=Et[(Ze+1)%re*O+St]??0,D=(rn-bn)*z,H=(T-un)*z,J=Math.hypot(D,H,1),ue=(Ze*O+St)*4;Ot.data[ue]=(D/J*.5+.5)*255,Ot.data[ue+1]=(H/J*.5+.5)*255,Ot.data[ue+2]=(1/J*.5+.5)*255,Ot.data[ue+3]=255}yt.putImageData(Ot,0,0);const Pt=new nc(Lt);return Pt.wrapS=Pt.wrapT=hi,Pt.colorSpace=Vi,Pt.anisotropy=_.anisotropy,Pt.repeat.copy(_.repeat),Pt}const We={},ee=(_,z)=>We[_]||=ge(xe[_],z);function Z(_,z=1,W=1,O=2.2,re={}){const ce=z===1&&W===1?xe[_]:U(xe[_],z,W),Ve=z===1&&W===1?ee(_,O):U(ee(_,O),z,W);return h("#ffffff",Object.assign({map:ce,normalMap:Ve,normalScale:new Oe(1,1)},re))}xe.grain=F(256,256,(_,z,W)=>{_.fillStyle="#d6cbbf",_.fillRect(0,0,z,W);for(let O=0;O<70;O++){_.strokeStyle=v()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",_.lineWidth=b(1,3);const re=b(0,z);_.beginPath(),_.moveTo(re,0),_.bezierCurveTo(re+b(-8,8),W*.3,re+b(-8,8),W*.7,re+b(-4,4),W),_.stroke()}for(let O=0;O<6;O++){const re=b(10,z-10),ce=b(10,W-10);_.strokeStyle="rgba(80, 50, 30, 0.3)",_.lineWidth=2,_.beginPath(),_.ellipse(re,ce,b(3,6),b(8,14),0,0,Hi*2),_.stroke()}});const de=_=>{const z=h(_,{map:xe.grain,normalMap:ee("grain",1.5)});return z.userData.autoUV=!0,z},De={stone:Z("stoneWall",1,1,2),castle:Z("castleWall",1,1,2),plankWall:Z("plankWall",1,1,1.4),timber:h(Xn.timber),wood:de(Xn.wood),woodD:de(Xn.woodD),woodL:de(Xn.woodL),iron:h(Xn.iron),ironL:h(Xn.ironL),rust:h(Xn.rust),bone:h(Xn.bone),boneD:h(Xn.boneD),red:h(Xn.red),redD:h(Xn.redD),redL:h(Xn.redL),black:h(Xn.black),gold:h(Xn.gold),straw:h("#ffffff",{map:xe.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:e,renderer:s,COL:Xn,GRAD:t,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:l,toon:h,glow:f,mesh:u,rbox:p,part:x,at:m,rot:g,put:M,spike:E,rnd:w,rr:I,pick:P,trnd:v,tr:b,canvasTex:F,blobs:Je,edgeFade:ft,tiled:U,planarUV:X,wallUV:se,instanced:te,boxes:be,UNIT_BOX:he,TEX:xe,nrm:ee,relief:Z,woodMat:de,M:De,_c:G}}const{PI:nn}=Math,Rn=.32,Bo=s=>s.userData.up,C1=s=>s.userData.cutY;function P1(s,e,t,n,i){const{scene:r,M:o,COL:a,TEX:l,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:x,put:m,spike:g,rr:M,pick:E,tiled:w,planarUV:I,wallUV:P,boxes:v}=s,{SPINNERS:b,skull:F,horns:U,torch:X,flame:se,table:Q,skullCandle:N,throne:ie,rug:ae,trophy:K,hangingBanner:G,weaponRack:te,shield:he,brazier:be,chest:Je,crate:ft,barrel:fe,stool:Ke,drum:at,poleBanner:xt,skullPole:Qe,woodpile:vt,spikes:Yt,bookshelf:_t,desk:Rt,candle:Ct,fence:Ce,plant:Xe,cauldron:it,bench:ct,lampPost:st,scrollStack:ht,telescope:pt,starGlobe:Me,crystal:He,wallMap:ke,easel:L,bottle:tt,anvil:je,sack:qe,cart:Pe,roundTable:nt,mug:Se,lanternString:le,signPost:C,bed:S,curtain:$,partition:ye,wardrobe:pe}=e,{patch:Ue}=t,Ge={},ve={war:[l.planksWar,2.6],dark:[l.planksDark,2.6],light:[l.planksLight,2.6],planks:[l.planks,2.6],tiles:[l.slate,3.6]};function we(j,A,_e,oe,y,R,q={}){const B=q.T||Rn,Y=q.base||0,me=q.stone!==!1,Ne=me?1.15:Y,Fe=me?Wt:Y,Be=me?Ne:Y+.9,et=p(new Re,0,Be,0);j.add(et),j.userData.up=et,et.userData.movesWithWall=!0,j.userData.cutY=Be;const mt={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function Mt(ze,ut){const[ot,Ae,$e,lt,Ut,gt,Ft=0,Mn=0,Nn=0]=ut,Zn=Ae-Ut/2,jt=Ae+Ut/2,[ui,Un]=mt[ze];Ft||Nn||Zn>=Be-.01?Un.push([ot,Ae-Be,$e,lt,Ut,gt,Ft,Mn,Nn]):jt<=Be+.01?ui.push(ut):(ui.push([ot,(Zn+Be)/2,$e,lt,Be-Zn,gt,Ft,Mn,Nn]),Un.push([ot,(Be+jt)/2-Be,$e,lt,jt-Be,gt,Ft,Mn,Nn]))}const dt=oe?oe.x-oe.w/2:0,Nt=oe?oe.x+oe.w/2:0,Bt=oe?[[-A/2,dt],[Nt,A/2]]:[[-A/2,A/2]],Dt=_e-Ne;for(const[ze,ut]of Bt){const ot=ut-ze;if(ot<.05)continue;const Ae=(ze+ut)/2;if(me)j.add(p(u(I(new Le(ot,Ne,B+.08),1.6),o.stone),Ae,Ne/2,0)),et.add(p(u(P(new Le(ot,Dt,B),Dt,1.3),o.plankWall),Ae,Dt/2,0));else{const $e=Be-Ne,lt=_e-Be;j.add(p(u(P(new Le(ot,$e,B),$e,1.3,0,Dt),o.plankWall),Ae,Ne+$e/2,0)),et.add(p(u(P(new Le(ot,lt,B),lt,1.3,$e,Dt),o.plankWall),Ae,lt/2,0))}}if(oe){const ze=Wt+2.3,ut=_e-ze;et.add(p(u(P(new Le(oe.w,ut,B),ut,1.3),o.plankWall),oe.x,ze+ut/2-Be,0)),Mt("timber",[oe.x-oe.w/2-.1,(ze+.1)/2,0,.24,ze+.1,B+.16]),Mt("timber",[oe.x+oe.w/2+.1,(ze+.1)/2,0,.24,ze+.1,B+.16]),Mt("timber",[oe.x,ze+.08,0,oe.w+.8,.3,B+.2]);for(const ot of[-1,1])for(let Ae=0;Ae<4;Ae++)Mt("timber",[oe.x+ot*(oe.w/2+.1),.35+Ae*.55,B/2+.09,.07,.07,.04]);et.add(p(F(.26),oe.x,ze+.42-Be,B/2+.17)),et.add(p(U(.6),oe.x,ze+.48-Be,B/2+.15));for(const ot of[-1,1])et.add(p(X(),oe.x+ot*(oe.w/2+.55),Wt+1.7-Be,B/2+.02))}Mt("timber",[0,Ne+(me?0:.09),0,A,.18,B+.12]),Mt("timber",[0,_e-.1,0,A,.22,B+.12]);const Vt=Math.max(1,Math.round(A/2.3)),on=[];for(let ze=1;ze<Vt;ze++){const ut=-A/2+ze*A/Vt;if(!(oe&&ut>dt-.45&&ut<Nt+.45)){on.push(ut),Mt("timber",[ut,Ne+Dt/2,0,.2,Dt,B+.1]);for(const ot of[Ne+.09,_e-.1])Mt("timber",[ut,ot,B/2+.08,.09,.09,.06])}}if(y)for(const ze of[-A/2+.2,A/2-.2])Mt("timber",[ze,(Y+_e+.12)/2,0,.42,_e-Y+.12,B+.18]);const wt=[-A/2+(y?.41:0),...on,A/2-(y?.41:0)];oe&&wt.push(dt-.22,Nt+.22),wt.sort((ze,ut)=>ze-ut);let an=0;for(let ze=0;ze<wt.length-1;ze++){const ut=wt[ze],ot=wt[ze+1],Ae=ot-ut,$e=(ut+ot)/2;if(!(Ae<.9)&&!(oe&&$e>dt-.3&&$e<Nt+.3)){if(an++,R&&Ae>1.5&&an%2===1){const lt=Fe+(me?1.62:1.35);Mt("panes",[$e,lt,0,.86,.78,q.paneT||B+.04]);for(const Ut of[[$e,lt+.44,0,1.08,.1,B+.12],[$e,lt-.44,0,1.12,.12,B+.16],[$e-.48,lt,0,.1,.96,B+.12],[$e+.48,lt,0,.1,.96,B+.12],[$e,lt,0,.06,.78,B+.06],[$e,lt,0,.86,.05,B+.06]])Mt("timber",Ut);for(const Ut of[-1,1])Mt("shutters",[$e+Ut*.78,lt,B/2+.05,.42,.86,.05,0,Ut*.35,0]),Mt("timber",[$e+Ut*.78+Ut*.012,lt,B/2+.09,.44,.08,.03,0,Ut*.35,0])}else if(Ae>1){const lt=Dt-.3,Ut=Math.atan2(lt,Ae-.2),gt=Math.hypot(lt,Ae-.2);for(const Ft of[-1,1])Mt("timber",[$e,Ne+Dt/2,B/2+.04,gt,.13,.06,0,0,Ft*Ut])}}}const[Ht,Qn]=mt.timber,[mn,ne]=mt.panes,[Ee,Ye]=mt.shutters;v(j,o.timber,Ht),v(et,o.timber,Qn),v(j,o.pane,mn,!1),v(et,o.pane,ne,!1),v(j,o.red,Ee),v(et,o.red,Ye),We(j,Be)}const Ie=new k,V=new kt,xe=new kt,ge=new kt;function We(j,A){const _e=Bo(j),oe=new Map;j.traverse(B=>{if(!(B instanceof Xt)||Array.isArray(B.material))return;for(let Ne=B;Ne&&Ne!==j;Ne=Ne.parent)if(Ne===_e)return;const Y=B.material,me=oe.get(Y);me?me.push(B):oe.set(Y,[B])});const y=B=>{const Y=B;return(Y.color?Y.color.r*.3+Y.color.g*.59+Y.color.b*.11:0)+(Y.map?.5:0)},R=[...oe.keys()].sort((B,Y)=>y(B)-y(Y));j.updateWorldMatrix(!0,!0),ge.copy(j.matrixWorld).invert();const q=new Set;R.forEach((B,Y)=>{if(Y)for(const me of oe.get(B)??[]){const Ne=me.geometry;if(q.has(Ne))continue;q.add(Ne),V.multiplyMatrices(ge,me.matrixWorld),xe.copy(V).invert();const Fe=Ne.attributes.position;let Be=!1;for(let et=0;et<Fe.count;et++)Ie.fromBufferAttribute(Fe,et).applyMatrix4(V),!(Math.abs(Ie.y-A)>.002)&&(Ie.y-=.003*Y,Ie.applyMatrix4(xe),Fe.setXYZ(et,Ie.x,Ie.y,Ie.z),Be=!0);Be&&(Fe.needsUpdate=!0,Ne.computeBoundingBox(),Ne.computeBoundingSphere())}})}function ee(j){const A=[],_e=new Map;return j.traverse(oe=>{if(!(oe instanceof Xt))return;const y=oe.material;let R=_e.get(y);R||(R=y.clone(),R.transparent=!0,_e.set(y,R),A.push(R)),oe.material=R}),A}function Z(j,A,_e){const oe=j.r,y=_e.pitch||.6,R=.6,q=oe.d/2+R,B=new Re;B.position.y=A-R*Math.tan(y),j.g.add(B);const Y=q*Math.tan(y),me=R*Math.tan(y),Ne=q/Math.cos(y),Fe=d("#ffffff",{map:l.roof});for(const Bt of[-1,1]){const Dt=u(I(new Le(oe.w+R*2,.18,Ne),1.6),Fe);Dt.rotation.x=Bt<0?-y:y,Dt.position.set(0,Y/2,Bt*q/2),B.add(Dt)}const Be=new Zr;Be.moveTo(-oe.d/2,me),Be.lineTo(oe.d/2,me),Be.lineTo(0,Y-.12),Be.closePath();const et=new Wc(Be),mt=d("#ffffff",{map:l.gable,side:gn});for(const Bt of[-1,1])B.add(p(x(u(et,mt),0,nn/2,0),Bt*(oe.w/2+.02),0,0)),B.add(p(x(F(.34),0,Bt*nn/2,0),Bt*(oe.w/2+.2),me+(Y-me)*.42,0)),B.add(p(x(U(1.1),0,Bt*nn/2,0),Bt*(oe.w/2+R+.05),Y+.12,0));B.add(p(u(new Le(oe.w+R*2+.2,.2,.26),o.iron),0,Y+.04,0));const Mt=Math.floor((oe.w+R)/1.5);for(let Bt=0;Bt<Mt;Bt++)g(B,new k(-oe.w/2+.5+Bt*(oe.w-1)/Math.max(1,Mt-1),Y+.12,0),h,.34,.06,o.boneD,0,5);let dt=null;if(_e.chimney){const[Bt,Dt]=_e.chimney,Vt=Y+1.4;B.add(p(u(I(new Le(.85,Vt,.85),1.2),o.stone),Bt,Vt/2,Dt)),B.add(p(u(new Le(1.05,.16,1.05),o.iron),Bt,Vt+.05,Dt)),dt=[Bt,Vt+.3,Dt]}const Nt=ee(B);return{R:B,mats:Nt,base:B.position.y,hR:Y,smokeAt:dt}}function de(j){return{S:{c:[0,j.d/2],n:[0,1],L:j.w+Rn},N:{c:[0,-j.d/2],n:[0,-1],L:j.w+Rn},E:{c:[j.w/2,0],n:[1,0],L:j.d-Rn},W:{c:[-j.w/2,0],n:[-1,0],L:j.d-Rn}}}function De(j,A){const _e=new Re;j.add(_e);const oe=new Re;return oe.position.set(A.c[0],0,A.c[1]),oe.rotation.y=Math.atan2(A.n[0],A.n[1]),_e.add(oe),{sg:_e,sf:oe}}function _(j,A,_e){if(!A)return;A.updateWorldMatrix(!0,!0),j.g.updateMatrixWorld(!0);const oe=[];A.traverse(y=>{y instanceof Xt&&oe.push(y)});for(const y of oe){const R=y.geometry;R.attributes.uv||R.setAttribute("uv",new zt(new Float32Array(R.attributes.position.count*2),2));const q=xf(s,y.material),B=new Xt(R,q);B.castShadow=!q.isMeshStandardMaterial,B.receiveShadow=!0,y.matrixWorld.decompose(B.position,B.quaternion,B.scale),j.g.add(B),B.updateMatrixWorld(!0),_e.attach(B)}}function z(j,A,_e,oe,y,R={}){const q=R.T||Rn,B=R.stone!==!1,Y=R.base||0,me=B?1.15:Y+.9,Ne=p(new Re,0,me,0);if(A.add(Ne),A.userData.up=Ne,Ne.userData.movesWithWall=!0,A.userData.cutY=me,_(j,_e,A),_(j,oe,Ne),We(A,me),y)for(const Fe of[-1,1])Ne.add(p(X(),y.x+Fe*(y.w/2+.55),Wt+1.7-me,q/2+.08))}function W(j,A,_e,oe){const y=j.r,R=_e.pitch||.6,q=.6,B=y.d/2+q,Y=new Re;Y.position.y=A-q*Math.tan(R),j.g.add(Y);const me=B*Math.tan(R);_(j,oe,Y);const Ne=ee(Y);let Fe=null;if(_e.chimney){const[Be,et]=_e.chimney;Fe=[Be,me+1.4+.3,et]}return{R:Y,mats:Ne,base:Y.position.y,hR:me,smokeAt:Fe}}const O={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function re(j,A={}){const _e=new Re;_e.position.set(j.x,0,j.z),_e.rotation.y=j.ry||0,r.add(_e);const oe=j.id||A.id,y={id:oe,r:j,g:_e,sides:{},lift:0,view:"ground",deco:!!A.deco,name:j.name,top:0},R=O[oe],q=mt=>R?Mf(R,oe+"_"+mt):null;R?_(y,q("base"),_e):_e.add(p(u(I(new Le(j.w+.6,Wt+.3,j.d+.6),1.4),o.stone),0,(Wt+.3)/2-.3,0));const[B,Y]=ve[j.floor||"planks"];_e.add(x(p(u(new tn(j.w,j.d),d("#ffffff",{map:w(B,j.w/Y,j.d/Y)}),!1),0,Wt+.004,0),-nn/2,0,0));const me=Wt+j.wallH,Ne=de(j),Fe=j.doorLocal||[0,j.d/2],Be=j.door?j.door.side:"S";for(const[mt,Mt]of Object.entries(Ne)){const{sg:dt,sf:Nt}=De(_e,Mt),Bt=Math.cos(Nt.rotation.y),Dt=-Math.sin(Nt.rotation.y),Vt=Be===mt?{x:(Fe[0]-Mt.c[0])*Bt+(Fe[1]-Mt.c[1])*Dt,w:j.door&&j.door.width||1.4}:null;R?z(y,Nt,q(mt+"_lo"),q(mt+"_hi"),Vt):we(Nt,Mt.L,me,Vt,mt==="N"||mt==="S",A.windows!==!1),y.sides[mt]={g:dt,sf:Nt,up:Bo(Nt),n:Mt.n,s:1}}if(!R){const mt=j.doorN||[0,1],Mt=Math.abs(mt[0])>0?[.7,(j.door&&j.door.width||1.4)+.5]:[(j.door&&j.door.width||1.4)+.5,.7];_e.add(p(u(I(new Le(Mt[0],.14,Mt[1]),1.2),o.stone),Fe[0]+mt[0]*.62,.07,Fe[1]+mt[1]*.62))}let et=me;if(j.storeys===2){const mt=j.upperH||2.5,Mt=p(new Re,0,me,0);Mt.userData.movesWithWall=!0,_e.add(Mt);const dt={U:Mt,sides:{},lift:0,mats:[],top:me};if(y.upper=dt,R)_(y,q("Ufloor"),Mt);else{const Bt=d("#ffffff",{map:B}),[Dt,Vt,on,wt]=A.stairHole||[0,0,0,0],an=j.w/2,Ht=j.d/2,Qn=A.stairHole?[[-an,Dt,-Ht,Ht],[Vt,an,-Ht,Ht],[Dt,Vt,-Ht,on],[Dt,Vt,wt,Ht]]:[[-an,an,-Ht,Ht]];for(const[mn,ne,Ee,Ye]of Qn)ne-mn<.05||Ye-Ee<.05||Mt.add(p(u(I(new Le(ne-mn,.22,Ye-Ee),Y),Bt),(mn+ne)/2,.09,(Ee+Ye)/2))}const Nt=[];for(const[Bt,Dt]of Object.entries(Ne)){const{sg:Vt,sf:on}=De(Mt,Dt);R?z(y,on,q("U"+Bt+"_lo"),q("U"+Bt+"_hi"),null,{base:.2,stone:!1,T:Rn-.05}):(we(on,Dt.L,.2+mt,null,Bt==="N"||Bt==="S",!0,{base:.2,stone:!1,T:Rn-.05,paneT:Rn-.03}),Nt.push([0,.05,.2,Dt.L+.2,.2,.18]),v(on,o.timber,Nt.slice(-1))),dt.sides[Bt]={g:Vt,sf:on,up:Bo(on),n:Dt.n,s:1}}et=me+.2+mt}return y.top=et,y.roof=R?W(y,et,A,q("roof")):Z(y,et,A),Ge[oe]=y,y}function ce(j,A,_e,oe,y){const R=j.upper,q=12,B=R.top+.2-Wt,Y=(oe-_e)/q,me=[];for(let mt=0;mt<q;mt++){const Mt=B*(mt+1)/q;me.push([A,Wt+Mt/2,_e+Y*(mt+.5),y,Mt,Math.abs(Y)+.01])}v(j.g,o.wood,me);const Ne=A>0?-1:1,Fe=A+Ne*(y/2+.04);for(let mt=0;mt<=4;mt++){const Mt=_e+(oe-_e)*mt/4,dt=Wt+B*mt/4;j.g.add(p(u(new Le(.07,.95,.07),o.woodD),Fe,dt+.5,Mt))}const Be=Math.hypot(oe-_e,B),et=p(u(new Le(.08,.08,Be),o.woodL),Fe,Wt+B/2+.95,(_e+oe)/2);et.rotation.x=-Math.atan2(B,oe-_e),j.g.add(et)}function Ve(j,A,_e,oe,y){const R=C1(j);oe>R?(A.position.set(_e,oe-R,y),Bo(j).add(A)):(A.position.set(_e,oe,y),j.add(A))}const Et=(j,A)=>j==="S"?A:j==="N"||j==="E"?-A:A;function Lt(j,A,_e,oe,y,R=.1){const q=j.upper.sides[A];return _e.rotation.y=nn,Ve(q.sf,_e,Et(A,oe),y,-((Rn-.05)/2+R/2+.01)),_e}const yt=(j,A,_e,oe,y=0)=>m(j.upper.U,A,_e,oe,y,.2);function Ot(j,A,_e=0,oe=.9){for(let y=0;y<A.length-1;y++){const[R,q]=A[y],[B,Y]=A[y+1],me=Math.hypot(B-R,Y-q),Ne=p(u(new Le(me,.07,.07),o.woodL),(R+B)/2,_e+oe,(q+Y)/2);Ne.rotation.y=-Math.atan2(Y-q,B-R),j.add(Ne);const Fe=Math.max(1,Math.round(me/.5));for(let Be=0;Be<=Fe;Be++)j.add(p(u(new Le(.05,oe,.05),o.woodD),R+(B-R)*Be/Fe,_e+oe/2,q+(Y-q)*Be/Fe))}}function Pt(j,A,_e,oe,y,R=.1,q=!0){const B=j.sides[A];return q&&(_e.rotation.y=nn),Ve(B.sf,_e,Et(A,oe),y,q?-(Rn/2+R/2+.01):Rn/2+R/2+.01),_e}const Ze=(j,A,_e,oe,y=0)=>m(j.g,A,_e,oe,y,Wt),St=(j,A,_e,oe,y=0)=>m(j.g,A,_e,oe,y,0),rn=(j,A,_e)=>yf(j,A,_e),bn=document.createElement("canvas");bn.width=512,bn.height=280;const un=new nc(bn);un.colorSpace=Tn;let T=i;function D(j=T){T=j;const A=bn.getContext("2d");if(!A)return;const _e=512,oe=j.filter(R=>R==="done").length;A.fillStyle="#2e2422",A.fillRect(0,0,_e,280),A.fillStyle="#e3d5b6",A.font=`800 40px ${mc}`,A.textAlign="left",A.fillText("TASKS",28,58),A.fillStyle="#ffd27a",A.textAlign="right",A.fillText(`${oe} / 5`,_e-28,58);const y={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((R,q)=>{const B=28+q*94,Y=90;A.fillStyle=y[j[q]??"todo"],A.beginPath(),A.roundRect(B,Y,78,96,14),A.fill(),A.fillStyle="rgba(255, 255, 255, 0.22)",A.beginPath(),A.roundRect(B+6,Y+6,66,18,8),A.fill(),A.fillStyle="#1e1a1c",A.font=`800 46px ${mc}`,A.textAlign="center",A.fillText(R,B+39,Y+70)}),A.fillStyle="#1b1616",A.beginPath(),A.roundRect(28,220,_e-56,28,14),A.fill(),oe&&(A.fillStyle="#d9762e",A.beginPath(),A.roundRect(28,220,(_e-56)*oe/5,28,14),A.fill()),un.needsUpdate=!0}D(),document.fonts&&document.fonts.ready.then(()=>D());function H(){const j=new Re;return j.add(u(new Le(2.7,1.65,.1),o.woodD)),j.add(p(new Xt(new tn(2.45,1.35),new Fn({map:un,toneMapped:!1})),0,0,.06)),j.add(p(u(new Le(2.9,.14,.2),o.wood),0,.9,.02)),j.add(p(F(.18),0,1.08,.06)),j}{const j=gi.war,A=re(j,{pitch:.62}),_e=Wt+j.wallH;Ze(A,Q(3.4,2,.86),-2.5,-.6);{const oe=new tn(3,1.7,26,16),y=oe.attributes.position,R=[];for(let B=0;B<y.count;B++){const Y=y.getX(B),me=y.getY(B),Ne=Math.max(0,Math.sin(Y*2.1+1)*Math.cos(me*2.7)*.1+Math.sin(Y*5+me*3)*.03);y.setZ(B,Ne),R.push(...Ne>.08?[.86,.82,.76]:Ne>.03?[.5,.38,.28]:Ne>.005?[.42,.55,.32]:[.32,.5,.62])}oe.setAttribute("color",new zt(R,3)),oe.computeVertexNormals();const q=x(p(u(oe,new qo({vertexColors:!0,gradientMap:c}),!1),-2.5,Wt+.91,-.6),-nn/2,0,0);A.g.add(q);for(const[B,Y,me]of[[-.9,-.3,a.red],[.4,.3,"#3f5f8f"],[1,-.4,a.gold],[-.2,-.5,a.red]])A.g.add(p(u(new rt(.012,.012,.24,4),o.dark,!1),-2.5+B,Wt+1.05,-.6+Y)),A.g.add(p(u(new Le(.12,.07,.01),d(me),!1),-2.5+B+.06,Wt+1.13,-.6+Y));for(const[B,Y]of[[-1.55,-.85],[1.55,.85]])Ze(A,N(),-2.5+B,-.6+Y).position.y=Wt+.9}Ze(A,ie(),-6.1,-2.6,id(-6.1,-2.6,-2.5,-.6)),Ze(A,ae(1.6,[a.redD,a.bone,a.red,a.black,a.redL,a.redD]),-4.6,.6),Pt(A,"N",H(),3.8,Wt+1.95,.12),Pt(A,"N",K(),-2.5,Wt+2.2,.1),Pt(A,"N",K(),.9,Wt+2.1,.1),Pt(A,"N",G(1,1.9),-5.4,_e-.3,.04),Pt(A,"N",G(1,1.9),6.4,_e-.3,.04),Pt(A,"W",te(4),.6,Wt,.3),Pt(A,"E",he(a.red),-2,Wt+1.9,.1),Pt(A,"E",he(a.black),1.2,Wt+1.9,.1),Ze(A,be(7),6.3,-3.3),Ze(A,be(0,.85),-6.7,3.5),Ze(A,Je(),6.3,1.6,-nn/2),Ze(A,ft(.6),5.3,3.6,.3),Ze(A,ft(.45),5.9,3.7,.9),Ze(A,fe(.9),-6.6,-.6),Ze(A,Ke(),-.9,-2.2),Ue("plaza",...rn(j,0,7.4),5.8,3.6,-j.ry,.014),St(A,at(),-4.4,6,.3),St(A,at(),5.6,5.9,-.2),St(A,xt(3.4),-2.6,5),St(A,xt(3.4),2.6,5),St(A,Qe(2.6),-7,6.2),St(A,Qe(2.2),7.8,5.4),St(A,be(0),-6.2,5),St(A,vt(2.4),-3,-6),St(A,fe(),4.4,-5.6),St(A,fe(.9),5,-6.1),St(A,fe(1,!0),3.6,-6.2,.4),St(A,x(te(4),0,nn,0),.8,-5.6),St(A,Yt(3),-8.6,-1,nn/2)}{const j=gi.library,A=re(j,{pitch:.66,stairHole:[4,4.84,-2,0]}),_e=Wt+j.wallH;for(const R of[-3.6,-1.4])Ze(A,_t(2),R,-j.d/2+Rn/2+.27);for(const R of[-2.1,.3])Ze(A,_t(2),-j.w/2+Rn/2+.27,R,nn/2);const oe=Rt("books");Ze(A,oe.g,1.8,-1.2),Ze(A,Ct(.18,4),2.45,-.95).position.y=Wt+.79;{const R=new Re;R.add(p(u(new Le(1,.45,.9),d("#5a1f2a")),0,.3,0)),R.add(p(u(new Le(.86,.12,.74),d("#7a2a36")),0,.58,.04)),R.add(p(u(new Le(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const q of[-1,1])R.add(p(u(new Le(.2,.6,.9),d("#4a1822")),q*.5,.52,0));Ze(A,R,-3.3,1.9,.9)}Ze(A,ae(1.5,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const R=new Re;R.add(p(u(new rt(.08,.2,1,8),o.woodD),0,.5,0)),R.add(x(p(u(new Le(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),R.add(x(p(u(new Le(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Ze(A,R,2.3,2.5,-.5)}{const R=new Re;R.add(p(u(new rt(.05,.2,.9,10),o.woodD),0,.45,0));const q=p(new Re,0,1.25,0);q.rotation.z=.4;const B=u(new en(.34,24,16),d("#ffffff",{map:l.globe}));q.add(B),q.add(x(u(new yn(.4,.02,6,28),o.gold),0,nn/2,0)),R.add(q),Ze(A,R,.5,3),b.push({o:B,axis:"y",v:.25})}{const R=new Re;R.add(p(u(new rt(.16,.26,.9,8),o.woodD),0,.45,0)),R.add(p(u(new en(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let q=0;q<3;q++){const B=q/3*nn*2;g(R,new k(Math.cos(B)*.14,.92,Math.sin(B)*.14),new k(Math.cos(B),2,Math.sin(B)),.3,.03,o.bone,0,5)}Ze(A,R,3,-3.2)}const y=[];for(const[R,q,B]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[Y,me]=rn(j,R,q);let Ne=Wt;for(let Fe=0;Fe<B;Fe++){const Be=M(.06,.1);y.push({x:Y+M(-.03,.03),y:Ne+Be/2,z:me+M(-.03,.03),sx:M(.32,.42),sy:Be,sz:M(.24,.3),ry:j.ry+M(-.3,.3),c:E(e.BOOK_COLS)}),Ne+=Be}}s.instanced(s.UNIT_BOX,y,{cast:!0}),Ze(A,N(),-4.3,3.4).position.y=Wt+.42,Ze(A,Ct(.5),-4.5,2.9),Ze(A,Ct(.34),-4.2,2.7),Pt(A,"E",G(.9,1.6),-3,_e-.3,.04),Pt(A,"S",K(),1.6,Wt+2.1,.1);{const R=new Re;R.add(p(u(new rt(2.2,2.4,7.6,22),d("#ffffff",{map:w(l.castleWall,3.5,2.4)})),0,3.8,0)),R.add(p(u(new rt(2.6,2.4,.4,22),o.stone),0,7.7,0)),R.add(p(u(new Sn(2.9,3.6,22),d("#ffffff",{map:w(l.roof,5,2)})),0,9.7,0)),R.add(p(F(.45),0,11.8,0));for(const[q,B]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])R.add(p(x(u(new Le(.4,.9,.12),o.pane,!1),0,-q+nn/2,0),Math.cos(q)*2.32,B,Math.sin(q)*2.32));R.add(p(x(G(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),St(A,R,5.6,3.4)}Ce(A.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let R=0;R<10;R++)St(A,Xe(M(.6,.9)),M(-8.6,-6.2),M(5.3,7.1));St(A,it(),1.2,6.2),St(A,ct(1.6,!0),3,6.7,nn),St(A,Qe(2.2),-.4,5.6),St(A,st(0),-4.6,4.6),St(A,ft(.55),6.2,-1.4,.3),St(A,ft(.4),6.3,-.8,.8),Ue("dirt",...rn(j,.5,6.4),4.6,2.2,-j.ry,.013),ce(A,4.42,-3.4,-.2,.84),Ot(A.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const R of[-3.6,-1.4,1])yt(A,_t(2),R,-j.d/2+Rn/2+.27);for(const R of[-2.1,.3,2.5])yt(A,_t(2),-j.w/2+Rn/2+.27,R,nn/2);yt(A,Q(2.2,1,.8,o.wood),.2,.7),yt(A,ht(),-.4,.6).position.y=1.04,yt(A,ht(),.9,.9).position.y=1.04,yt(A,p(u(new Le(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,yt(A,Ct(.2),-.6,1).position.y=1,yt(A,Ct(.14),.95,.4).position.y=1,yt(A,Ke(),.2,1.6),yt(A,Ke(),-.9,1.5),yt(A,pt(),2.4,2.9,nn),yt(A,Me(),-2.6,2.6),yt(A,He(),2.9,-2.8),yt(A,ae(1.3,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Lt(A,"S",ke(),-.6,1.75,.06),Lt(A,"E",K(),2.4,1.8,.1),yt(A,Je(),-3.6,3.2,0)}{const j=gi.studio,A=re(j,{pitch:.58}),_e=Wt+j.wallH,oe=Rt("paper");Ze(A,oe.g,-2,-1.6);{const me=new Re;me.add(u(new Le(1.6,1.25,.08),o.wood)),me.add(p(new Xt(new tn(1.45,1.1),new Fn({map:l.moodboard,toneMapped:!1})),0,0,.05)),Pt(A,"N",me,1.6,Wt+1.75,.08)}Ze(A,Q(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[me,Ne,Fe]of[[-.35,-.1,"#3f5f8f"],[0,.12,a.red],[.32,-.05,a.gold],[.12,-.2,"#5f8a52"]])Ze(A,p(u(new rt(.08,.09,.16,12),d(Fe)),0,.08,0),2.6+me,-2+Ne).position.y=Wt+.78;for(let me=0;me<3;me++){const Ne=p(u(new Le(.8,.6,.04),d(E(["#efe4cc","#e2d4b6"]))),0,.3,0);Ne.rotation.x=-.22,Ze(A,Ne,3.7-me*.1,1.4+me*.12,-nn/2)}Ze(A,Xe(1.1),3.8,2.8),Ze(A,Xe(.9),-3.8,2.9),Ze(A,_t(1.6),-j.w/2+Rn/2+.27,.6,nn/2),Pt(A,"E",G(.9,1.5),.6,_e-.3,.04);const[y,R,q,B]=j.deck;A.g.add(p(u(I(new Le(R-y,.2,B-q),2.6),d("#ffffff",{map:l.planks})),(y+R)/2,.1,(q+B)/2));const Y=p(new Re,0,.2,0);A.g.add(Y),Ce(Y,[[y,q+.1],[y,B],[-2,B]],.85),Ce(Y,[[3.4,B],[R,B],[R,q+.1]],.85),m(Y,L(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(Y,ct(1.6,!0),3,4.4,0),m(Y,Xe(1),-3.7,4),m(Y,Xe(.8),3.8,7.1),m(Y,st(0),-3.9,7.3),m(Y,p(u(new rt(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(Y,p(u(new rt(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let me=0;me<14;me++)St(A,p(u(new en(.14,8,6),d(E([a.red,a.bone,"#d98a3a",a.redL]))),0,.14,0),M(-3.5,3.5),M(-5.2,-4.2));St(A,Qe(2),4.9,-4.6)}const J=Rt("screen"),ue=Rt("screen");{const j=gi.workshop,A=re(j,{pitch:.6,chimney:[-4,-1.6]}),_e=Wt+j.wallH;Ze(A,J.g,-3,-1.4),Ze(A,ue.g,2,-1.4),Ze(A,He(),-5,2.6);{const oe=new Re;for(const y of[.9,1.5])oe.add(p(u(new Le(2.4,.06,.4),o.wood),0,y,0));for(const y of[-1,1])oe.add(p(u(new Le(.06,1.7,.4),o.woodD),y*1.2,.85,0));for(let y=0;y<7;y++)oe.add(p(tt(E(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+y*.32,.93+y%2*.6,0));oe.add(p(F(.14),.9,1.65,0)),Ze(A,oe,-.5,-j.d/2+Rn/2+.25)}{const oe=Q(2,.8,.86,o.woodD);oe.add(p(je(),.4,.9,0)),oe.add(x(p(u(new rt(.02,.02,.4,6),o.wood),-.5,.92,.1),nn/2,0,.4)),Ze(A,oe,3.9,-3.2)}{const oe=new Re;oe.add(p(u(new Le(.9,.8,.8),o.iron),0,.4,0)),oe.add(p(u(new tn(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),oe.add(p(u(new rt(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Ze(A,oe,-5.2,.7,nn/2)}for(const[oe,y,R,q]of[[4.2,1.7,.4,a.gold],[3.5,1.35,.26,a.ironL]]){const B=new Re;B.add(x(u(new rt(R,R,.1,18),d(q)),nn/2,0,0));for(let Y=0;Y<10;Y++){const me=Y/10*nn*2;B.add(p(u(new Le(.12,.12,.1),d(q)),Math.cos(me)*(R+.05),Math.sin(me)*(R+.05),0))}Pt(A,"N",B,oe,Wt+y,.1),b.push({o:B,axis:"z",v:q===a.gold?.6:-.9})}Pt(A,"W",te(4),-1.2,Wt,.3),Pt(A,"S",G(1,1.7),-2.4,_e-.3,.04),Pt(A,"S",he(a.red),2.6,Wt+1.8,.1),Ze(A,fe(),-5.2,-3.2),Ze(A,ft(.6),-4.6,-3.4,.3),Ze(A,ft(.6),5,3.2,.2),Ze(A,qe(),4.3,3.4),Ue("dirt",...rn(j,0,6.2),6.6,2.8,-j.ry,.013),St(A,vt(2.6),-2.6,5.4),St(A,Pe(),2.6,6.2,.4);{const oe=new Re;oe.add(p(u(new rt(.4,.45,.6,12),o.woodL),0,.3,0)),oe.add(x(p(u(new rt(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),oe.add(x(p(u(new Le(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),St(A,oe,-5,5.6)}St(A,fe(),5.2,5),St(A,fe(.85),5.8,5.6),St(A,Qe(2.4),-6.6,6.8),St(A,be(0,.9),7.4,-1.4)}let Te;{const j=gi.tavern,A=re(j,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),_e=Wt+j.wallH;{const oe=new Re;oe.add(p(u(new Le(.9,1.1,5),o.wood),0,.55,0)),oe.add(p(u(new Le(1.1,.08,5.2),o.woodL),0,1.14,0));for(let R=0;R<5;R++)oe.add(p(u(new Le(.02,.9,.9),o.woodD),-.46,.5,-2+R));for(let R=0;R<6;R++)oe.add(p(tt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),M(-.2,.2),1.18,-2.2+R*.8));oe.add(p(F(.2),0,1.3,2.3)),Ze(A,oe,4.1,-.6);const y=new Re;for(const R of[1.5,2])y.add(p(u(new Le(.3,.05,4),o.wood),0,R,0));for(let R=0;R<10;R++)y.add(p(tt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,R%2?2.03:1.53,-1.8+R*.4));Ze(A,y,5.12,-.6),Ze(A,fe(.9,!0),4.85,2.6,nn/2),Ze(A,fe(.9,!0),4.85,3.4,nn/2)}{const oe=new Re;oe.add(p(u(I(new Le(2.6,2,.9),1.4),o.stone),0,1,0)),oe.add(p(u(new Le(2.9,.18,1.1),o.wood),0,2.05,.05)),oe.add(p(u(new tn(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),oe.add(p(it(),0,0,.85)),oe.add(p(F(.22),0,2.32,.1)),Te=new qi("#ff9a4a",12,9,2),Te.position.set(0,.9,1.2),oe.add(Te),se(oe,0,.3,.3,1.4),Ze(A,oe,-1.5,-j.d/2+Rn/2+.46)}Ze(A,nt(),-2.2,.8),Ze(A,Ke(),-3.1,.8),Ze(A,Ke(),-1.3,.8),Ze(A,nt(.65),1,2.3),Ze(A,Ke(),.1,2.3),Ze(A,Ke(),1.9,2.3),Ze(A,Ke(),1,3.2);for(const[oe,y]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Ze(A,Se(),oe,y).position.y=Wt+.8;Ze(A,Ke(),3.2,-2.4),Pt(A,"N",K(),2.6,Wt+2.1,.1),Pt(A,"S",he(a.black),-3,Wt+1.9,.1),Pt(A,"S",G(.9,1.6),1.6,_e-.3,.04),Pt(A,"W",K(),-2.6,Wt+2.2,.1),Ue("dirt",...rn(j,-.5,6.4),4.8,2.6,-j.ry,.013),St(A,Q(3.6,.9,.8,o.woodL),.4,6.55),St(A,ct(3.6,!1),.4,5.75),St(A,ct(3.6,!1),.4,7.35,nn);for(const[oe,y]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])St(A,Se(),oe,y).position.y=.84;Ce(A.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[oe,y]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])St(A,p(u(new rt(.06,.08,2.6,6),o.woodD),0,1.3,0),oe,y);le(A.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),St(A,fe(),3,5.2),St(A,fe(.8,!0),2.6,7.9,.3),St(A,C("TAVERN"),-6.4,3.6,-nn/2),St(A,Qe(2.2),-8.4,5.6),ce(A,-4.89,-3.6,-.6,.9),Ot(A.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[oe,y]of[[-2.6,a.red],[.8,"#3f5f8f"],[4,a.redD]])yt(A,S(y),oe,-2.75),yt(A,Je(),oe+.95,-3.4,nn/2).scale.setScalar(.7),yt(A,$(.8,1.6),oe-.5,-1.35),yt(A,Ct(.16),oe-.62,-3.55);for(const oe of[-.9,2.4])yt(A,ye(2.5),oe,-2.6);{const oe=u(new tn(8.6,1.1),d(a.redD),!1);oe.rotation.x=-nn/2,yt(A,oe,.4,.9).position.y=.212}yt(A,pe(),.8,3.45,nn),yt(A,ct(1.6,!0),2.8,3.4,nn),yt(A,Q(.9,.7,.8,o.woodL),4.4,1.6),yt(A,Ke(),4.4,2.4),yt(A,Ct(.16,0),4.5,1.5).position.y=1;{const oe=new Re;oe.add(p(u(new rt(.06,.12,.8,8),o.woodD),0,.4,0)),oe.add(p(u(new rt(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),oe.add(x(p(u(new mi(.24,14),d("#5f8fa8"),!1),0,.92,0),-nn/2,0,0)),yt(A,oe,-2.2,3.3)}yt(A,Xe(.9),-3.6,3.3),Lt(A,"S",he(a.red),-1.2,1.7,.1),Lt(A,"E",G(.9,1.5),1.6,2.5,.04)}return{HOUSES:Ge,buildHouse:re,inH:Ze,outH:St,onWall:Pt,W2:rn,deskF:J,deskB:ue,hearthLight:Te,drawBoard:D}}const{PI:fn}=Math;function zo(s,e,t){let n=1e9;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[a,l]=t[i+1],c=a-r,h=l-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(e-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,e-o-h*f))}return n}function td(s,e,t,n){const i=t?[...s,s[0]]:s,r=[],o=[],a=[];let l=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(t&&(h===0||h===i.length-1)){const E=s[s.length-1],w=s[1];u=w[0]-E[0],p=w[1]-E[1]}const x=Math.hypot(u,p)||1,m=-p/x,g=u/x,M=i[h];if(h>0){const E=i[h-1];l+=Math.hypot(M[0]-E[0],M[1]-E[1])}if(r.push(M[0]+m*e/2,n,M[1]+g*e/2,M[0]-m*e/2,n,M[1]-g*e/2),o.push(0,l,1,l),h>0){const E=h*2;a.push(E-2,E,E-1,E-1,E,E+1)}}const c=new hn;return c.setAttribute("position",new zt(r,3)),c.setAttribute("uv",new zt(o,2)),c.setIndex(a),c.computeVertexNormals(),c}async function L1(s,e,t){const{scene:n,TEX:i,toon:r,mesh:o,at:a,rot:l,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:x,instanced:m}=s,{SPINNERS:g,plantFlora:M,skullPole:E,totem:w,brazier:I,hay:P}=e,v=new k(-62,27,70).normalize(),b=new Xt(new en(600,32,16),new Kn({side:Hn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new At("#2b3b78")},mid:{value:new At("#7f8fc4")},hor:{value:new At("#f2aa7c")},low:{value:new At("#c98a72")},sunCol:{value:new At("#ffa864")},sunDir:{value:v}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));b.renderOrder=-100,b.frustumCulled=!1,n.add(b),n.fog=new Oc("#d6a487",230,640),n.add(new tm("#9aa8d8","#4a3428",1.05));const F=new Zd("#ffb070",2.3);F.position.copy(v).multiplyScalar(110),F.castShadow=!0,F.shadow.mapSize.set(4096,4096),Object.assign(F.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),F.shadow.camera.updateProjectionMatrix(),F.shadow.bias=-5e-4,F.shadow.normalBias=.05,n.add(F);const U=new Zr;for(let Me=0;Me<=160;Me++){const He=Me/160*fn*2,ke=yr(He),L=Math.cos(He)*ke,tt=-Math.sin(He)*ke;Me===0?U.moveTo(L,tt):U.lineTo(L,tt)}const X=new ca(U,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});X.rotateX(-fn/2);const se=c(i.grass,1/9,1/9);function Q(Me,He){const ke=i.strata.clone();return ke.wrapS=hi,ke.wrapT=Yn,ke.repeat.set(1/8,-1/(He-Me)),ke.offset.set(0,He/(He-Me)),ke.needsUpdate=!0,r("#ffffff",{map:ke})}const N=new Xt(X,[r("#ffffff",{map:se}),Q(-1.9,1.5)]);N.position.y=-2.9,N.receiveShadow=!0,n.add(N);const ie=f1(s,await t);n.add(ie.underside);for(const Me of["walls","towers","gate"])n.add(ie[Me]);const ae=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),K=new en(1,16,12),G=new Re;n.add(G);for(let Me=0;Me<22;Me++){const He=Me/22*fn*2+d(-.12,.12),ke=d(100,260),L=d(1.6,3.2),tt=new Re;for(let je=0;je<7;je++){const qe=new Xt(K,ae),Pe=d(1.6,2.8)*L;qe.scale.set(Pe,Pe*.7,Pe),qe.position.set(d(-3.5,3.5)*L,d(-.3,1.2)*L,d(-1.8,1.8)*L),tt.add(qe)}tt.position.set(Math.cos(He)*ke,d(-45,28),Math.sin(He)*ke),G.add(tt)}{const Me=[],He=[],ke=[];for(let L=0;L<420;L++){const tt=L/420*fn*2+d(-.006,.006),je=yr(tt);if(h()<.55){const qe=d(.5,2.8),Pe=d(-.55,-1.8);Me.push({x:Math.cos(tt)*(je+.8),y:Pe-qe/2,z:Math.sin(tt)*(je+.8),sx:d(.7,1.3),sy:qe,sz:d(.7,1.3),rx:fn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}L%2===0&&He.push({x:Math.cos(tt)*(je+.3),y:-.06,z:Math.sin(tt)*(je+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let L=0;L<7;L++){const tt=d(0,fn*2),je=yr(tt)+d(4,12);ke.push({x:Math.cos(tt)*je,y:d(-14,-4),z:Math.sin(tt)*je,s:d(.8,2.2)})}m(new Sn(.06,1,4),Me,{}),m(new en(1,10,6),He,{});for(const L of ke){const tt=new Re;tt.add(a(o(new Ri(1.2*L.s,0),r("#6e5240")),0,-.4*L.s,0)),tt.add(a(o(new rt(1*L.s,1.1*L.s,.3*L.s,9),r("#6f8b49")),0,.5*L.s,0)),h()<.6&&tt.add(a(e.tree(f(["pine","autumn","dead"]),.5*L.s),0,.6*L.s,0)),tt.position.set(L.x,L.y,L.z),tt.rotation.y=d(0,6),n.add(tt)}}const te=Q(-.75,1.35),he={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},be=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Je(Me,He,ke,L,tt){M(He,ke,Me.position.x+L,Me.position.z+tt,Me.position.y)}function ft(Me,He,ke,L){const{trees:tt,clear:je}=he[ke],qe=He/10,Pe=[...je.map(([Se,le,C])=>[Se,le,C]),...L.map(([Se,le])=>[Se,le,.16])],nt=(Se,le,C)=>{for(let S=0;S<60;S++){const $=d(0,fn*2),ye=d(Se,le),pe=Math.cos($)*ye,Ue=Math.sin($)*ye;if(Pe.every(([Ge,ve,we])=>Math.hypot(pe-Ge,Ue-ve)>we+C))return Pe.push([pe,Ue,C]),[pe*He,Ue*He]}return null};for(let Se=0;Se<7;Se++){const le=nt(.3,.74,.12);le&&M(tt[Se%tt.length],d(1,1.3)*qe,Me.position.x+le[0],Me.position.z+le[1],Me.position.y)}for(let Se=0;Se<9;Se++){const le=nt(.15,.78,.05);le&&M(f(be),d(.75,1.25)*qe,Me.position.x+le[0],Me.position.z+le[1],Me.position.y)}}const fe=c(i.water,1,4);function Ke(Me,He,ke,L,tt,je){const qe=new Re;qe.position.set(Me,He,ke),n.add(qe);const Pe=new Zr;for(let C=0;C<=56;C++){const S=C/56*fn*2,$=L*(1+.12*Math.sin(3*S+je)+.07*Math.sin(5*S+2*je));C===0?Pe.moveTo(Math.cos(S)*$,-Math.sin(S)*$):Pe.lineTo(Math.cos(S)*$,-Math.sin(S)*$)}const nt=new ca(Pe,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});nt.rotateX(-fn/2),qe.add(a(new Xt(nt,[r("#ffffff",{map:se}),te]),0,-1.75,0));const Se=o(new Sn(L*.95,L*2.3,12,3),r("#6e5240"),!1);Se.rotation.x=fn,Se.position.y=-2.1-L*1.15,qe.add(Se);for(let C=0;C<14;C++){const S=d(0,fn*2),$=d(.2,.9);qe.add(a(l(o(new Ri(d(.8,2)*(L/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*L*.95*$,-2.1-(1-$)*L*2.3,Math.sin(S)*L*.95*$))}for(let C=0;C<26;C++){const S=d(0,fn*2),$=d(.6,2.4);qe.add(a(l(o(new Sn(.07,$,4),r("#4a3424")),fn,0,0),Math.cos(S)*L*1.02,-.6-$/2,Math.sin(S)*L*1.02))}const le=L/10;if(tt==="ruin"){const C=a(new Re,-L*.25,0,-L*.1);C.add(a(o(new rt(1.7*le,1.9*le,5.5*le,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*le,0));for(let $=0;$<7;$++){const ye=$/7*fn*2;C.add(a(o(new Le(.7*le,d(.4,1.6)*le,.5*le),x.stone),Math.cos(ye)*1.6*le,5.6*le,Math.sin(ye)*1.6*le))}C.add(a(o(new Le(.4*le,1*le,.1),x.pane,!1),0,2.6*le,1.85*le)),qe.add(C);for(const $ of[-1,1])qe.add(a(o(new Le(.7*le,3.2*le,.7*le),x.stone),L*.35+$*1.3*le,1.6*le,L*.3));qe.add(a(o(new Le(3.3*le,.6*le,.7*le),x.stone),L*.35,3.4*le,L*.3)),qe.add(a(E(2.4),L*.1,0,L*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[$,ye,pe]of S)Je(qe,pe,1.2*le,$*L,ye*L);ft(qe,L,tt,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(tt==="farm"){const C=a(new Re,-L*.2,0,-L*.15);C.add(a(o(u(new Le(3.6*le,2.2*le,2.8*le),2.2*le,1.3),x.plankWall),0,1.1*le,0));const S=new rt(2.1*le,2.1*le,4*le,3,1);C.add(a(l(o(S,r("#ffffff",{map:i.roof})),0,0,fn/2),0,2.2*le+.9*le,0)),C.add(a(o(new Le(.8*le,1.5*le,.1),x.woodD),0,.75*le,1.42*le)),C.add(a(o(new Le(.6*le,.6*le,.1),x.pane,!1),1.1*le,1.3*le,1.42*le)),qe.add(C);const $=o(new tn(L*.8,L*.5),r("#ffffff",{map:i.field}),!1);$.rotation.x=-fn/2,$.position.set(L*.3,.03,L*.25),qe.add($);const ye=a(new Re,L*.35,0,-L*.45);ye.add(a(o(new rt(.8*le,1.2*le,4*le,12),r("#e3d5b6")),0,2*le,0)),ye.add(a(o(new Sn(1.2*le,1.4*le,12),r("#ffffff",{map:i.roof})),0,4.7*le,0));const pe=a(new Re,0,3.6*le,1*le);for(let Ue=0;Ue<4;Ue++){const Ge=new Re;Ge.rotation.z=Ue*fn/2,Ge.add(a(o(new Le(.5*le,2.6*le,.04),r("#e3d5b6",{side:gn})),.3*le,1.5*le,0)),pe.add(Ge)}ye.add(pe),g.push({o:pe,axis:"z",v:.4}),qe.add(ye),Je(qe,"tree_maple",1.1*le,-L*.55,L*.4),qe.add(a(P(.5*le),L*.05,0,L*.55)),ft(qe,L,tt,[[-.55,.4]])}else if(tt==="shrine"){for(let S=0;S<6;S++){const $=S/6*fn*2;qe.add(a(l(o(new Le(.7*le,d(2,3)*le,.5*le),x.stone),0,-$,d(-.1,.1)),Math.cos($)*3*le,1.2*le,Math.sin($)*3*le))}qe.add(w(4*le));for(const S of[.8,3.9])qe.add(a(I(0,1.2*le),Math.cos(S)*1.8*le,0,Math.sin(S)*1.8*le));const C=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,$]of C)Je(qe,"tree_maple",1.1*le,S*L,$*L);ft(qe,L,tt,C)}else{const C=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[ye,pe,Ue]of C)Je(qe,Ue,1.2*le,ye*L,pe*L);ft(qe,L,tt,C),qe.add(a(l(o(new mi(L*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-fn/2,0,0),L*.25,.04,L*.3));const S=new Xt(new tn(1.8*le,L*3.2),new Fn({map:fe,color:"#acb5c8",transparent:!0,opacity:.85,side:gn,depthWrite:!1}));S.position.set(L*.62,-L*1.6,L*.62),S.rotation.y=fn/4,qe.add(S);const $=o(new tn(1.2*le,L*.55),r("#6fa9c9"),!1);$.rotation.set(-fn/2,0,-fn/4),$.position.set(L*.45,.05,L*.45),qe.add($)}return qe}Ke(-150,6,-105,11,"ruin",.4),Ke(165,-4,-60,13,"farm",1.7),Ke(115,20,135,9,"shrine",2.9),Ke(-165,-14,85,12,"falls",4.1);const at={};function xt(Me){const He=at[Me];if(He)return He;const ke={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Me],L=s.canvasTex(256,256,(je,qe,Pe)=>{const nt=je.createRadialGradient(qe/2,Pe/2,qe*.3,qe/2,Pe/2,qe/2);nt.addColorStop(0,"rgba(255,255,255,1)"),nt.addColorStop(1,"rgba(255,255,255,0)"),je.fillStyle=nt,je.fillRect(0,0,qe,Pe)});L.wrapS=L.wrapT=Yn;const tt={src:ke,mask:L};return at[Me]=tt,tt}let Qe=0;function vt(Me,He,ke,L,tt,je=0,qe=.012,Pe=4){const nt=xt(Me),Se=c(nt.src,L*2/Pe,tt*2/Pe),le=new Xt(new tn(L*2,tt*2),r("#ffffff",{map:Se,alphaMap:nt.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Qe}));return le.rotation.set(-fn/2,0,je),le.position.set(He,qe,ke),le.receiveShadow=!0,le.renderOrder=-10+Qe++*.01,n.add(le),le}const Yt={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},_t={},Rt=Me=>{const He=Math.max(0,Math.min(1,Me));return He*He*(3-2*He)},Ct=[],Ce=Me=>Me==="cobble"||Me==="flag",Xe=Me=>Me.closed?[...Me.line,Me.line[0]]:Me.line;function it(Me,He){let ke=null,L=1e9;for(const tt of ps){if(tt===He||tt.kind==="stones")continue;const je=zo(Me[0],Me[1],Xe(tt))-tt.w/2;je<L&&(L=je,ke=tt)}return L<.6?ke:null}function ct(Me,He,ke){const L=Xe(ke),tt=ke.w/2+.02,je=He?[...Me].reverse():[...Me];let qe=0;for(;qe<je.length-2&&zo(je[qe][0],je[qe][1],L)<tt;)qe++;if(qe===0)return null;let Pe=je[qe-1],nt=je[qe];for(let C=0;C<12;C++){const S=[(Pe[0]+nt[0])/2,(Pe[1]+nt[1])/2];zo(S[0],S[1],L)<tt?Pe=S:nt=S}const le=[[(Pe[0]+nt[0])/2,(Pe[1]+nt[1])/2],...je.slice(qe)];return He?le.reverse():le}function st(Me,He){const ke=Me.kind;let L=Xe(Me);const tt=Me.closed?[!1,!1]:[!Me.refs[0],!Me.refs[Me.refs.length-1]];if(!Me.closed&&Ce(ke))for(const Ie of[0,1]){if(!tt[Ie])continue;const V=Ie?L[L.length-1]:L[0],xe=it(V,Me);if(!xe||xe.kind===ke||!Ce(xe.kind))continue;const ge=ct(L,Ie===1,xe);if(!ge)continue;L=ge,tt[Ie]=!1;const We=Ie?L[L.length-1]:L[0],ee=Ie?L[L.length-2]:L[1],Z=Math.hypot(We[0]-ee[0],We[1]-ee[1])||1;Ct.push({x:We[0],z:We[1],tx:(We[0]-ee[0])/Z,tz:(We[1]-ee[1])/Z,w:Me.w,kind:ke})}const je=L.length,[qe,Pe,nt,Se]=Yt[ke],le=[0];for(let Ie=1;Ie<je;Ie++){const V=L[Ie],xe=L[Ie-1];le.push(le[Ie-1]+Math.hypot(V[0]-xe[0],V[1]-xe[1]))}const C=le[je-1],S=.02+He*.0015,$=[],ye=[],pe=[],Ue=[];for(let Ie=0;Ie<je;Ie++){const V=L[Math.max(0,Ie-1)],xe=L[Math.min(je-1,Ie+1)];let ge=xe[0]-V[0],We=xe[1]-V[1];if(Me.closed&&(Ie===0||Ie===je-1)){const ce=L[je-2],Ve=L[1];ge=Ve[0]-ce[0],We=Ve[1]-ce[1]}const ee=Math.hypot(ge,We)||1,Z=-We/ee,de=ge/ee;let De=1,_=1;if(!Me.closed)for(const ce of[0,1]){const Ve=ce?C-le[Ie]:le[Ie];tt[ce]&&(De=Math.max(De,1+.5*(1-Rt(Ve/2.4))),_=Math.min(_,Rt(Ve/2.2)))}const z=Me.w/2*De,W=[-(z+nt),-(z-nt),z-nt,z+nt],O=[0,_,_,0],re=L[Ie];for(let ce=0;ce<4;ce++){const Ve=re[0]+Z*W[ce],Et=re[1]+de*W[ce];$.push(Ve,S,Et),ye.push(Ve/Pe,Et/Pe),pe.push(1,1,1,O[ce])}if(Ie>0)for(let ce=0;ce<3;ce++){const Ve=(Ie-1)*4+ce,Et=Ve+1,Lt=Ie*4+ce,yt=Lt+1;Ue.push(Et,yt,Ve,Ve,yt,Lt)}}const Ge=new hn;Ge.setAttribute("position",new zt($,3)),Ge.setAttribute("uv",new zt(ye,2)),Ge.setAttribute("color",new zt(pe,4)),Ge.setIndex(Ue),Ge.computeVertexNormals();let ve=_t[ke];ve||(ve=r("#ffffff",{map:qe,normalMap:p(Se,ke==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),_t[ke]=ve);const we=new Xt(Ge,ve);we.receiveShadow=!0,we.renderOrder=-5+He*.01,n.add(we)}const ht=[];function pt(Me){const He=Me.length,ke=Me.map(([qe,Pe])=>zo(qe,Pe,Jo)<1.35);if(!ke.some(Boolean))return[{pts:[...Me],closed:!0}];const L=ke.findIndex((qe,Pe)=>!qe&&ke[(Pe-1+He)%He]),tt=[];let je=[];for(let qe=0;qe<=He;qe++){const Pe=(L+qe)%He;if(!ke[Pe]&&qe<He){je.push(Me[Pe]);continue}if(je.length>1&&tt.push({pts:je,closed:!1}),qe<He&&ke[Pe]&&je.length){let nt=qe;for(;nt<He&&ke[(L+nt)%He];)nt++;const Se=je[je.length-1],le=Me[(L+nt)%He],C=le[0]-Se[0],S=le[1]-Se[1],$=Math.hypot(C,S);ht.push({x:(Se[0]+le[0])/2,z:(Se[1]+le[1])/2,ang:Math.atan2(-S,C),len:$})}je=[]}return tt}ps.forEach((Me,He)=>{if(Me.kind!=="stones"){st(Me,He);return}const ke=i.roadStones.clone();ke.wrapS=Yn,ke.wrapT=hi,ke.repeat.set(1,1/1.3),ke.needsUpdate=!0;const L=r("#ffffff",{map:ke,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const tt of pt(Me.line)){const je=new Xt(td(tt.pts,Me.w,tt.closed,.03),L);je.receiveShadow=!0,n.add(je)}});{const Me=(nt,Se,le,C,S,$)=>{const ye=S-le,pe=$-C,Ue=ye*ye+pe*pe||1,Ge=Math.max(0,Math.min(1,((nt-le)*ye+(Se-C)*pe)/Ue));return Math.hypot(nt-le-ye*Ge,Se-C-pe*Ge)},He=(nt,Se,le,C)=>{for(const S of ps){if(S===le)continue;const $=Xe(S),ye=S.w/2+C;for(let pe=0;pe<$.length-1;pe++){const Ue=$[pe],Ge=$[pe+1];if(!(Math.abs(Ue[0]-nt)>ye+1||Math.abs(Ue[1]-Se)>ye+1)&&Me(nt,Se,Ue[0],Ue[1],Ge[0],Ge[1])<ye)return!0}}return!1},ke=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],L=(nt,Se)=>{const le=Math.hypot(nt,Se),C=Math.atan2(Se,nt);if(le>7.4&&le<9&&ke.some(S=>{let $=Math.abs(C-S)%(2*fn);return $=Math.min($,2*fn-$),$*le<1.45}))return!0;for(const S of $o)if(S.kind==="house"){const[$,ye]=Fr(S,nt,Se);if(Math.abs($)<S.w/2+.9&&Math.abs(ye)<S.d/2+.9||S.deck&&$>S.deck[0]-.5&&$<S.deck[1]+.5&&ye>S.deck[2]&&ye<S.deck[3]+.5)return!0}else if(Math.hypot(nt-S.x,Se-S.z)<S.r+.6)return!0;for(const S of gc)if(S.kind==="hut"){const[$,ye]=Fr(S,nt,Se);if(Math.abs($)<S.w/2+.9&&Math.abs(ye)<S.d/2+.9)return!0}else if(Math.hypot(nt-S.x,Se-S.z)<(S.r||2)+.4)return!0;return Math.hypot(nt,Se)>yr(Math.atan2(Se,nt))-1.2},tt=[],je=[],qe=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const nt of ps){if(nt.kind==="stones")continue;const Se=Xe(nt),le=nt.kind!=="dirt",C=S=>{const $=Se[Math.max(0,S-1)],ye=Se[Math.min(Se.length-1,S+1)],pe=Math.hypot(ye[0]-$[0],ye[1]-$[1])||1;return[-(ye[1]-$[1])/pe,(ye[0]-$[0])/pe]};for(let S=0;S<Se.length;S++){const[$,ye]=C(S),pe=Math.atan2($,ye)+fn/2,Ue=Se[S];for(const Ge of[-1,1]){const ve=nt.w/2+.07,we=Ue[0]+$*Ge*ve,Ie=Ue[1]+ye*Ge*ve;if(!(L(we,Ie)||He(we,Ie,nt,.25))&&(le&&tt.push({x:we,y:.04,z:Ie,sx:.2,sy:.13,sz:d(.4,.47),ry:pe+d(-.04,.04),c:nt.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const V=ve+(le?.25:.1)+d(0,.35),xe=Ue[0]+$*Ge*V,ge=Ue[1]+ye*Ge*V;if(!L(xe,ge)&&!He(xe,ge,nt,.2)){const We=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let ee=0;ee<5;ee++)je.push({x:xe+d(-.15,.15),y:.11,z:ge+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:We})}}}}if(!le&&nt.w>1.5)for(const S of[-1,1]){const $=Se.map((pe,Ue)=>{const[Ge,ve]=C(Ue);return[pe[0]+Ge*S*.45,pe[1]+ve*S*.45]}),ye=new Xt(td($,.18,!1,.035),qe);ye.receiveShadow=!0,ye.renderOrder=-4,n.add(ye)}}for(const nt of Ct){const Se=-nt.tz,le=nt.tx,C=Math.max(2,Math.round((nt.w+.3)/.42));for(let S=0;S<C;S++){const $=-((nt.w+.3)/2)+(S+.5)*(nt.w+.3)/C;tt.push({x:nt.x+Se*$-nt.tx*.1,y:.045,z:nt.z+le*$-nt.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(Se,le)+fn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new wa(1,1,1,1,.2),tt,{cast:!1});const Pe=m(new Sn(.06,.24,4),je,{});Pe&&(Pe.userData.noLine=!0)}return{models:ie,skyDome:b,sun:F,island:N,cloudRing:G,grassTex:se,strataMat:Q,crossings:ht,patch:vt}}const{PI:Tt}=Math;function D1(s){const{M:e,COL:t,TEX:n,toon:i,glow:r,mesh:o,rbox:a,at:l,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:x,tiled:m,planarUV:g,wallUV:M}=s,E=s.scene,w=[],I=[],P=[],v=[],b=x(64,128,(T,D,H)=>{const J=()=>{T.beginPath(),T.moveTo(D/2,2),T.bezierCurveTo(D*.62,H*.3,D*.98,H*.55,D*.86,H*.8),T.bezierCurveTo(D*.76,H*.98,D*.24,H*.98,D*.14,H*.8),T.bezierCurveTo(D*.02,H*.55,D*.38,H*.3,D/2,2),T.closePath()},ue=T.createLinearGradient(0,H,0,0);ue.addColorStop(0,"rgba(255, 246, 214, 1)"),ue.addColorStop(.3,"rgba(255, 196, 92, 1)"),ue.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ue.addColorStop(1,"rgba(220, 40, 30, 0)"),J(),T.fillStyle=ue,T.fill(),T.save(),T.translate(D*.5,H*.92),T.scale(.5,.55),T.translate(-D*.5,-H*.92),J(),T.fillStyle="rgba(255, 252, 235, 0.9)",T.fill(),T.restore()});b.wrapS=b.wrapT=Yn;const F=new os({map:b,color:new At(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),U=new os({map:b,color:new At(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),X=new os({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Ai});function se(T,D,H,J,ue=1){const Te=new Re,j=new Zi(F);j.center.set(.5,.06),j.scale.set(.34*ue,.68*ue,1),Te.add(j);const A=new Zi(U);A.center.set(.5,.04),A.scale.set(.18*ue,.34*ue,1),Te.add(A);const _e=new Zi(X);return _e.scale.setScalar(1.5*ue),_e.position.y=.2*ue,Te.add(_e),Te.position.set(D,H,J),T.add(Te),I.push({f:Te,ph:u(0,6),s:ue}),Te}const Q=(()=>{const T=new Re,D=o(new en(.5,16,12),e.bone);D.scale.set(1,.92,1.05),D.position.y=.14,T.add(D),T.add(l(o(new Le(.62,.28,.5),e.bone),0,-.24,.16));for(const H of[-1,1]){const J=o(new en(.14,10,8),e.dark,!1);J.scale.z=.5,J.position.set(H*.19,.08,.45),T.add(J)}return T.add(c(l(o(new Sn(.06,.12,3),e.dark,!1),0,-.1,.5),Tt,0,0)),T.add(l(o(new Le(.42,.03,.02),e.dark,!1),0,-.25,.42)),T})();function N(T=.3){const D=Q.clone();return D.scale.setScalar(T),D}function ie(T=1,D=e.bone){const H=new Re;for(const J of[-1,1]){const ue=o(new yn(.5*T,.09*T,6,12,Tt*.6),D);ue.rotation.set(0,J>0?0:Tt,.25),ue.position.set(J*.35*T,0,0),H.add(ue)}return H}let ae=7;const K=(T,D)=>T+(D-T)*((ae=ae*16807%2147483647)/2147483647);function G(T,D,H,J,ue,Te,j,A,_e=0){const oe=l(o(_e?a(Te,j,A,_e):new Le(Te,j,A),D),H,J,ue);return T.add(oe),oe}function te(T,D,H,J=.75){const ue=new Le(T,D,H),Te=ue.attributes.position;for(let j=0;j<Te.count;j++)Te.getY(j)<0&&(Te.setX(j,Te.getX(j)*J),Te.setZ(j,Te.getZ(j)*J));return ue.computeVertexNormals(),ue}function he(T,D,H,J,ue,Te,j=Math.max(2,Math.round(H/.2))){const A=H/j;for(let _e=0;_e<j;_e++)G(T,Te,0,J+K(-.004,.004),-H/2+A*(_e+.5),D+K(-.02,.02),ue,A-.012,.012)}function be(T,D,H,J,ue,Te){G(T,e.iron,D-ue*.055,H,J-Te*.012,.13,.014,.028),G(T,e.iron,D-ue*.012,H,J-Te*.055,.028,.014,.13)}const Je=(()=>{const T=[];for(let D=0;D<=10;D++){const H=D/10;T.push(new Oe(.3+Math.sin(H*Tt)*.06,(H-.5)*.8))}return new Gc(T,20)})(),ft=T=>.3+Math.sin((T/.8+.5)*Tt)*.06;function fe(T=1,D=!1){const H=new Re,J=o(Je,i("#ffffff",{map:n.planks}));for(const ue of[-.33,-.17,.17,.33])J.add(l(c(o(new yn(ft(ue)+.006,.02,5,24),e.iron),Tt/2,0,0),0,ue,0));for(const ue of[-.17,.17])for(let Te=0;Te<6;Te++){const j=Te/6*Tt*2;J.add(l(o(new en(.016,5,4),e.ironL),Math.cos(j)*(ft(ue)+.025),ue,Math.sin(j)*(ft(ue)+.025)))}J.add(l(c(o(new mi(.3,20),e.woodD),-Tt/2,0,0),0,.392,0)),J.add(l(c(o(new yn(.3,.018,4,24),e.woodD),Tt/2,0,0),0,.4,0));for(const ue of[-.1,0,.1])J.add(l(o(new Le(.004,.004,.5),e.dark,!1),ue,.394,0));return J.add(l(o(new rt(.035,.035,.03,8),e.woodL),.15,.4,.05)),J.scale.setScalar(T),D?(J.rotation.z=Tt/2,J.position.y=.36*T):J.position.y=.4*T,H.add(J),H}const Ke=i("#ffffff",{map:x(128,128,(T,D,H)=>{T.fillStyle="#7a5538",T.fillRect(0,0,D,H);for(let J=0;J<4;J++)T.fillStyle=J%2?"#70502f":"#84603f",T.fillRect(0,J*32,D,30),T.fillStyle="rgba(40, 24, 14, 0.6)",T.fillRect(0,J*32+30,D,2)})});function at(T=.6){const D=new Re;G(D,Ke,0,T/2,0,T*.94,T*.94,T*.94);const H=T*.09,J=T/2-H/2;for(const ue of[-1,1])for(const Te of[-1,1])G(D,e.woodD,ue*J,T/2,Te*J,H,T,H),G(D,e.woodD,0,T/2+ue*J,Te*J,T-H*2,H,H),G(D,e.woodD,ue*J,T/2+Te*J,0,H,H,T-H*2);for(const ue of[-1,1]){const Te=G(D,e.woodD,0,T/2,ue*(T*.47+.006),T*1.1,H*.8,H*.4);Te.rotation.z=ue*Tt/4}for(const ue of[-1,1])for(const Te of[-1,1])for(const j of[-1,1])G(D,e.iron,ue*(J+.006),T/2+Te*(J+.006),j*(J+.006),H*1.2,H*1.2,H*1.2);return D}function xt(){const T=new Re,D=o(new en(.28,12,10),i("#b8a07a"));return D.scale.set(1,1.15,.9),D.position.y=.3,T.add(D),T.add(l(o(new rt(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),T}function Qe(T,D,H=.8,J=e.wood){const ue=new Re,Te=.07;he(ue,T,D,H-Te/2,Te,J);for(const A of[-1,1])G(ue,e.woodD,0,H-Te-.06,A*(D/2-.12),T-.34,.12,.04,.01),G(ue,e.woodD,A*(T/2-.12),H-Te-.06,0,.04,.12,D-.34,.01);const j=te(.1,H-Te,.1,.72);for(const[A,_e]of[[-1,-1],[1,-1],[-1,1],[1,1]])ue.add(l(o(j,e.woodD),A*(T/2-.12),(H-Te)/2,_e*(D/2-.12))),be(ue,A*T/2,H+.004,_e*D/2,A,_e);G(ue,e.woodD,0,.17,0,T-.3,.06,.05,.01);for(const A of[-1,1])G(ue,e.woodD,A*(T/2-.12),.17,0,.05,.06,D-.3,.01);return ue}function vt(T=.7){const D=new Re;D.add(l(o(new rt(T,T,.08,24),e.wood),0,.76,0)),D.add(l(c(o(new yn(T,.022,5,32),e.iron),Tt/2,0,0),0,.76,0));for(const H of[-T*.5,0,T*.5])G(D,e.dark,H,.801,0,.006,.004,Math.sqrt(T*T-H*H)*1.96);D.add(l(o(new rt(.08,.11,.7,10),e.woodD),0,.37,0)),D.add(l(o(new rt(.13,.13,.06,10),e.iron),0,.5,0));for(let H=0;H<4;H++){const J=H*Tt/2+Tt/4,ue=G(D,e.woodD,Math.sin(J)*T*.25,.05,Math.cos(J)*T*.25,.09,.08,T*.6,.015);ue.rotation.y=J}return D}function Yt(){const T=new Re;T.add(l(o(new rt(.24,.24,.07,16),e.wood),0,.45,0)),T.add(l(c(o(new yn(.24,.012,4,20),e.iron),Tt/2,0,0),0,.45,0));for(let D=0;D<3;D++){const H=D/3*Tt*2+.5,J=o(new rt(.028,.034,.46,6),e.woodD);J.position.set(Math.cos(H)*.15,.22,Math.sin(H)*.15),J.rotation.set(-Math.sin(H)*.2,0,Math.cos(H)*.2),T.add(J)}return T.add(l(c(o(new yn(.16,.014,4,14),e.woodD),Tt/2,0,0),0,.17,0)),T}function _t(T=1.8,D=!0){const H=new Re;for(const J of[-1,1])G(H,e.woodL,K(-.01,.01),.45,J*.11,T,.07,.2,.015);for(const J of[-1,1]){const ue=J*(T/2-.2);for(const Te of[-1,1]){const j=l(o(te(.08,.44,.07,1),e.woodD),ue,.21,Te*.12);j.rotation.x=-Te*.2,H.add(j)}G(H,e.woodD,ue,.385,0,.09,.06,.44,.01),G(H,e.iron,ue,.487,.2,.1,.012,.03)}if(G(H,e.woodD,0,.14,0,T-.4,.05,.05,.01),D){for(const J of[-1,1])G(H,e.woodD,J*(T/2-.2),.74,-.21,.07,.56,.06,.012);for(const J of[.64,.9])G(H,e.woodL,K(-.01,.01),J,-.225,T-.1,.11,.05,.015)}return H}function Rt(T=.16,D=0){const H=new Re;if(H.add(l(o(new rt(.04,.045,T,10),i("#eadfc4")),0,T/2,0)),se(H,0,T,0,.35),D){const J=new qi("#ffb36a",D,5,2);J.position.y=T+.15,H.add(J)}return H}function Ct(){const T=new Re;return T.add(l(N(.22),0,.12,0)),T.add(l(Rt(.14),0,.24,0)),T}function Ce(T){const D=new Re,H=i(T,{emissive:T,emissiveIntensity:.18});return D.add(l(o(new rt(.06,.07,.2,10),H),0,.1,0)),D.add(l(o(new rt(.022,.03,.1,8),H),0,.25,0)),D}function Xe(){const T=new Re;return T.add(l(o(new rt(.07,.06,.15,12),e.woodL),0,.075,0)),T.add(l(c(o(new mi(.062,12),i("#efe0b0")),-Tt/2,0,0),0,.14,0)),T.add(l(o(new yn(.045,.012,6,12),e.woodL),.08,.08,0)),T}function it(T=1){const D=new Re;D.add(l(o(new rt(.22*T,.16*T,.34*T,12),i("#8a4a30")),0,.17*T,0));for(let H=0;H<6;H++){const J=H/6*Tt*2;d(D,new k(Math.cos(J)*.06*T,.32*T,Math.sin(J)*.06*T),new k(Math.cos(J)*.5,1,Math.sin(J)*.5),.5*T,.1*T,i(p([t.leaf,t.leafD,t.leafL])),0,5)}return D}const ct=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],st=s.UNIT_BOX;function ht(T=2){const D=new Re,H=2.4,J=.5;G(D,i("#3a2519"),0,H/2,-J/2+.03,T-.1,H-.1,.04);for(const Te of[-1,1])G(D,e.woodD,Te*(T/2-.04),H/2,0,.08,H,J,.015);for(let Te=0;Te<4;Te++){const j=Te<3?.27+Te*.72:H-.03;G(D,e.wood,0,j,0,T-.14,.06,J-.04),G(D,e.woodL,0,j+.01,J/2-.02,T-.12,.08,.04,.01)}G(D,e.woodD,0,.1,.02,T,.2,J,.02),G(D,e.wood,0,H+.04,.02,T+.1,.08,J+.08,.02),G(D,e.woodD,0,H+.11,.03,T+.18,.07,J+.14,.02);for(const Te of[-1,1])G(D,e.iron,Te*(T/2-.02),H-.12,J/2+.004,.06,.2,.012),G(D,e.iron,Te*(T/2-.1),H-.04,J/2+.004,.2,.06,.012);D.add(l(N(.13),T/2-.25,2.62,.05));const ue=[];for(let Te=0;Te<3;Te++){let j=-T/2+.12;for(;j<T/2-.2;){if(f()<.12){j+=.18;continue}const A=u(.07,.14),_e=u(.34,.56),oe=f()<.1?.18:0;ue.push({x:j+A/2,y:.33+Te*.72+_e/2,z:.08,sx:A,sy:_e,sz:u(.28,.36),rz:oe,c:p(ct)}),j+=A+.012+oe*.4}}return s.instanced(st,ue,{parent:D,cast:!0}),D}function pt(T,D){const H=x(512,512,(Te,j)=>{D.forEach((A,_e)=>{Te.fillStyle=A,Te.beginPath(),Te.arc(j/2,j/2,j/2-_e*34,0,Tt*2),Te.fill()}),Te.fillStyle=D[1];for(let A=0;A<12;A++){const _e=A/12*Tt*2;Te.beginPath(),Te.arc(256+Math.cos(_e)*196,256+Math.sin(_e)*196,10,0,Tt*2),Te.fill()}}),J=o(new mi(T,48),i("#ffffff",{map:H}),!1);J.rotation.x=-Tt/2,J.position.y=.012;const ue=new Re;return ue.add(J),ue}function Me(T=n.painting){const D=new Re;for(const H of[-1,1]){const J=l(o(new Le(.06,1.8,.06),e.wood),H*.36,.9,0);J.rotation.z=H*-.12,D.add(J)}return D.add(c(l(o(new Le(.06,1.7,.06),e.wood),0,.84,-.3),.35,0,0)),D.add(l(o(new Le(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),D.add(l(new Xt(new tn(.95,.72),new Fn({map:T,toneMapped:!1})),0,1.25,.079)),D.add(l(o(new Le(1,.05,.14),e.wood),0,.82,.08)),D}function He(T){const D=new Re;he(D,1.7,.84,.745,.08,e.woodL,4),G(D,e.woodD,0,.78,.43,1.74,.05,.03,.01),G(D,e.wood,.55,.36,0,.5,.66,.76,.02);for(let J=0;J<3;J++)G(D,e.woodL,.55,.15+J*.2,.385,.44,.17,.02,.01),G(D,e.iron,.55,.17+J*.2,.402,.12,.025,.02);for(const J of[-.34,.34])D.add(l(o(te(.09,.7,.09,.7),e.woodD),-.76,.35,J));G(D,e.woodD,-.76,.14,0,.05,.05,.62,.01);for(const J of[-1,1])be(D,J*.85,.79,.42,J,1);const H={g:D,kb:null,screen:null,light:null};if(T==="screen"){const J=l(new Re,-.12,.805,-.25);J.userData.y0=.805,J.add(o(new Le(.62,.035,.2),e.iron));for(const[_e,oe]of[[-.06,.54],[0,.56],[.06,.5]])J.add(l(o(new Le(oe,.012,.04),r("#ff5a3a",.55),!1),0,.022,_e));D.add(J),H.kb=J;const ue=new Re;ue.add(o(new Le(1.04,.7,.05),e.woodD));const Te=new Fn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),j=c(l(new Xt(new tn(.92,.58),Te),0,0,-.03),0,Tt,0);ue.add(j),H.screen=j,ue.add(l(new Xt(new tn(.92,.58),Te),0,0,.03)),ue.add(l(o(new Le(.08,.13,.08),e.woodD),0,-.41,0)),ue.add(l(o(new Le(.34,.02,.2),e.woodD),0,-.455,0)),ue.add(l(N(.09),.46,.4,0)),ue.position.set(-.12,1.25,.17),D.add(ue);const A=new qi("#7fe8ff",0,3.2,2);A.position.set(-.12,1.25,-.35),D.add(A),H.light=A,D.add(l(Xe(),.6,.79,.15))}else T==="paper"?(D.add(c(l(new Xt(new tn(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-Tt/2,0,0)),D.add(c(l(o(new rt(.012,.012,.22,6),e.red),.35,.81,.1),0,0,Tt/2)),D.add(l(Rt(.12),.65,.79,-.25))):T==="books"&&(D.add(l(o(new Le(.42,.06,.3),e.red),-.35,.82,0)),D.add(l(o(new Le(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),D.add(l(o(new Le(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),D.add(l(Ct(),.62,.79,-.22)));return D.add(l(o(new rt(.25,.21,.44,14),e.woodD),0,.22,-.78)),H}function ke(){const T=new Re;return T.add(l(o(new rt(.3,.38,.5,10),e.woodD),0,.25,0)),T.add(l(o(new Le(.34,.2,.22),e.iron),0,.6,0)),T.add(l(o(new Le(.7,.14,.3),e.ironL),0,.77,0)),d(T,new k(.35,.77,0),new k(1,0,0),.32,.1,e.ironL,0,10),T.add(l(o(new Le(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),T}function L(){const T=new Re;return T.add(l(o(new rt(.06,.06,1.6,8),e.wood),0,.8,0)),T.add(l(o(new rt(.28,.32,.8,12),e.straw),0,1.15,0)),T.add(l(o(new en(.22,12,10),e.straw),0,1.75,0)),T.add(l(o(new Le(.9,.08,.08),e.wood),0,1.35,0)),T.add(l(c(o(new yn(.3,.03,6,16),e.red),Tt/2,0,0),0,1.2,0)),T}function tt(){const T=new Re;T.add(c(l(o(new rt(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),Tt/2,0,0));for(const D of[-1,1])T.add(c(l(o(new Le(.06,1.4,.06),e.wood),D*.35,.7,-.2),0,0,D*.2));return T}function je(T=.42){const D=new Re;return D.add(c(l(o(new rt(T,T,.7,16),e.straw),0,T,0),0,0,Tt/2)),D}function qe(T=0,D=1){const H=new Re;for(let J=0;J<3;J++){const ue=J/3*Tt*2,Te=o(new rt(.035,.045,1.1,6),e.iron);Te.position.set(Math.cos(ue)*.22,.5,Math.sin(ue)*.22),Te.rotation.set(Math.sin(ue)*.3,0,-Math.cos(ue)*.3),H.add(Te)}H.add(l(o(new rt(.42,.24,.3,14,1,!0),e.iron),0,1.05,0)),H.add(c(l(o(new mi(.36,14),e.dark,!1),0,1.12,0),-Tt/2,0,0)),H.add(l(o(new en(.3,10,6,0,Tt*2,0,Tt/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let J=0;J<4;J++){const ue=J/4*Tt*2;d(H,new k(Math.cos(ue)*.42,1.18,Math.sin(ue)*.42),new k(Math.cos(ue)*.4,1,Math.sin(ue)*.4),.22,.04,e.iron,0,5)}if(se(H,0,1.12,0,1.6),T){const J=new qi("#ff9a4a",T,9,2);J.position.y=1.7,H.add(J),v.push({l:J,base:T,ph:u(0,6)})}return H.scale.setScalar(D),H}function Pe(){const T=new Re;T.add(c(l(o(new Le(.06,.06,.3),e.iron),0,0,.12),0,0,0));const D=l(o(new rt(.045,.06,.5,8),e.woodD),0,.12,.26);return D.rotation.x=.35,T.add(D),T.add(l(o(new rt(.08,.06,.12,8),e.iron),0,.36,.34)),se(T,0,.4,.35,.9),T}function nt(T=3.2,D=n.banner){const H=new Re;H.add(l(o(new rt(.05,.07,T+.6,8),e.woodD),0,(T+.6)/2,0)),H.add(c(l(o(new rt(.03,.03,1,6),e.iron),0,T+.4,.05),0,0,Tt/2)),H.add(l(N(.16),0,T+.72,.02));const J=new Xt(new tn(.9,1.9,1,8),i("#ffffff",{map:D,side:gn})),ue=J.geometry.attributes.position;for(let Te=0;Te<ue.count;Te++)ue.setZ(Te,Math.sin(ue.getY(Te)*2.6)*.05);return J.geometry.computeVertexNormals(),J.position.set(0,T-.55,.08),J.castShadow=!0,H.add(J),H}function Se(T=1.2,D=2.6){const H=new Re;H.add(c(l(o(new rt(.04,.04,T+.3,6),e.iron),0,0,.04),0,0,Tt/2));const J=o(new tn(T,D),i("#ffffff",{map:n.banner,side:gn}),!1);return J.position.set(0,-D/2,.05),H.add(J),H}function le(T=2.4){const D=new Re;D.add(l(o(new rt(.05,.08,T,7),e.woodD),0,T/2,0)),D.add(l(N(.24),0,T+.12,0)),D.add(l(ie(.5),0,T+.2,0));for(let H=0;H<3;H++){const J=o(new tn(.12,u(.5,.9)),i(p([t.red,t.redD,t.bone]),{side:gn}),!1);J.position.set(Math.cos(H*2.1)*.08,T-.5,Math.sin(H*2.1)*.08),J.rotation.y=H*2.1,D.add(J)}return D}function C(T=3){const D=new Re,H=Math.max(2,Math.round(T/.9));D.add(c(l(o(new rt(.1,.1,T,8),e.wood),0,.45,0),0,0,Tt/2));for(let J=0;J<H;J++){const ue=-T/2+(J+.5)*T/H;for(const Te of[-1,1]){const j=new Re;j.add(l(o(new rt(.07,.07,1.4,7),e.woodL),0,0,0)),j.add(l(o(new Sn(.07,.3,7),e.boneD),0,.85,0)),j.position.set(ue,.45,0),j.rotation.x=Te*.8,D.add(j)}}return D}function S(){const T=new Re;T.add(l(o(new rt(.55,.5,.9,18),e.redD),0,.75,0)),T.add(l(o(new rt(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let D=0;D<3;D++){const H=D/3*Tt*2;T.add(c(l(o(new rt(.04,.05,.7,6),e.woodD),Math.cos(H)*.42,.3,Math.sin(H)*.42),Math.sin(H)*.2,0,-Math.cos(H)*.2))}return T.add(l(c(o(new yn(.53,.03,6,20),e.bone),Tt/2,0,0),0,1.05,0)),T}function $(T=4){const D=new Re,H=[t.red,t.woodL,t.redD,t.wood];for(let J=0;J<4;J++){const ue=o(new rt(.42,.46,T/4,10),i(H[J]));ue.position.y=T/8+J*T/4,D.add(ue);for(const Te of[-1,1])D.add(l(o(new Le(.12,.08,.06),e.bone),Te*.15,ue.position.y+.05,.42));D.add(l(o(new Le(.36,.06,.06),e.dark),0,ue.position.y-.18,.43))}D.add(l(N(.45),0,T+.25,0)),D.add(l(ie(1.1),0,T+.35,0));for(const J of[-1,1])D.add(c(l(o(new Le(1,.12,.1),e.woodD),J*.55,T*.72,0),0,0,J*.2));return D}function ye(T=1.9,D=2.6,H="#8a6a4a"){const J=new Re,ue=o(new Sn(T,D,8,1,!0),i(H,{side:gn}));ue.position.y=D/2,J.add(ue);for(let Te=0;Te<3;Te++){const j=Te/3*Tt*2+.4;J.add(c(l(o(new rt(.04,.04,.9,6),e.woodD),Math.cos(j)*.12,D+.25,Math.sin(j)*.12),Math.sin(j)*.4,0,-Math.cos(j)*.4))}return J.add(c(l(o(new tn(.9,1.3),e.dark,!1),0,.65,T*.82),-.6,0,0)),J.add(c(l(o(new yn(T*.62,.05,6,24),e.redD),0,D*.35,0),Tt/2,0,0)),J}function pe(T=4){const D=new Re;D.add(l(o(new Le(1.8,.1,.1),e.wood),0,1.25,0)),D.add(l(o(new Le(1.8,.1,.1),e.wood),0,.3,.12));for(const H of[-1,1])D.add(l(o(new Le(.1,1.35,.1),e.woodD),H*.85,.67,0));for(let H=0;H<T;H++){const J=-.6+H*1.2/(T-1),ue=new Re;H%2?(ue.add(l(o(new Le(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ue.add(l(o(new Le(.22,.05,.06),e.gold),0,.2,0))):(ue.add(l(o(new rt(.03,.03,1.4,6),e.woodD),0,.7,0)),ue.add(l(o(new Le(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ue.position.set(J,.05,.08),ue.rotation.z=.08,D.add(ue)}return D}function Ue(T=2){const D=new Re,H=[];for(let J=0;J<4;J++)for(let ue=0;ue<Math.floor(T/.26)-J;ue++)H.push([-T/2+.13+ue*.26+J*.13,.13+J*.22,0]);for(const[J,ue]of H)D.add(c(l(o(new rt(.12,.12,.9,8),i(p([t.woodL,"#8a6440","#6e4a30"]))),J,ue,0),Tt/2,0,0));return D}function Ge(){const T=new Re;T.add(l(o(new Le(1.6,.12,1),e.wood),0,.62,0));for(const D of[-1,1])T.add(l(o(new Le(1.6,.36,.06),e.woodL),0,.85,D*.47)),T.add(c(l(o(new rt(.42,.42,.08,14),e.woodD),0,.42,D*.58),Tt/2,0,0));for(const D of[-1,1])T.add(c(l(o(new Le(1.4,.07,.07),e.woodD),1.3,.55,D*.35),0,0,-.18));return T.add(l(xt(),-.3,.68,.1)),T.add(l(at(.4),.35,.68,-.15)),T}function ve(){const T=new Re;T.add(Qe(2.2,.9,.9,e.woodL));for(const[J,ue]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])T.add(l(o(new Le(.08,2.2,.08),e.woodD),J,1.1,ue));const D=x(256,64,(J,ue,Te)=>{for(let j=0;j<8;j++)J.fillStyle=j%2?"#e3d5b6":"#8a2420",J.fillRect(j*32,0,32,Te)}),H=o(new Le(2.5,.05,1.4),i("#ffffff",{map:D}));H.position.set(0,2.2,.15),H.rotation.x=.22,T.add(H);for(let J=0;J<9;J++)T.add(l(o(new en(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return T.add(l(at(.5),-1.4,0,.3)),T.add(l(fe(.8),1.5,0,-.1)),T}function we(){const T=new Re;T.add(l(o(g(new rt(1,1.1,.9,22),1.2),e.stone),0,.45,0)),T.add(c(l(o(new mi(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-Tt/2,0,0));for(const H of[-1,1])T.add(l(o(new Le(.14,1.7,.14),e.woodD),H*.95,1.5,0));const D=o(new Sn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return D.position.y=2.65,D.rotation.y=Tt/4,T.add(D),T.add(c(l(o(new rt(.06,.06,1.9,8),e.wood),0,2.05,0),0,0,Tt/2)),T.add(l(o(new rt(.15,.13,.22,10),e.woodL),.2,1.55,0)),T.add(l(N(.18),0,3.15,0)),T}function Ie(T=0){const D=new Re;D.add(l(o(new rt(.07,.1,2.8,8),e.iron),0,1.4,0)),D.add(l(o(new Le(.55,.06,.06),e.iron),.22,2.7,0));const H=new Re;if(H.add(o(new rt(.14,.18,.32,8),e.iron)),H.add(l(o(new en(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),T){const J=new qi("#ffc477",T,9,2);H.add(J)}return H.position.set(.44,2.44,0),D.add(H),D}function V(){const T=new Re;G(T,e.wood,0,.25,0,1,.5,.6,.02),T.add(c(l(o(new rt(.3,.3,1,16,1,!1,0,Tt),e.woodL),0,.5,0),0,0,Tt/2));for(const D of[-.38,.38])G(T,e.iron,D,.27,0,.07,.52,.62),T.add(l(c(o(new yn(.31,.025,4,16,Tt),e.iron),0,Tt/2,0),D,.5,0));for(const D of[-1,1])for(const H of[-1,1])G(T,e.iron,D*.49,.05,H*.29,.06,.1,.06);G(T,e.gold,0,.44,.31,.16,.2,.025),G(T,e.dark,0,.42,.325,.03,.06,.01);for(const D of[-1,1])T.add(l(c(o(new yn(.06,.012,4,12),e.iron),0,Tt/2,0),D*.51,.3,0));return T.add(l(N(.1),0,.62,.22)),T}function xe(){const T=new Re;G(T,e.woodD,0,.25,0,1.3,.5,1.1,.03),G(T,e.red,0,.58,.05,1.08,.16,.9,.06),G(T,e.woodD,0,1.2,-.48,1.3,1.9,.2,.03),G(T,e.red,0,1.25,-.36,.9,1.3,.06,.03);for(let D=0;D<4;D++)for(const H of[-1,1])T.add(l(o(new en(.03,6,4),e.gold),H*.4,.7+D*.36,-.32));for(const D of[-1,1])G(T,e.woodD,D*.62,.75,0,.18,.5,1,.03),G(T,e.iron,D*.62,1.01,.1,.22,.04,.8,.01),T.add(l(N(.12),D*.62,1.1,.45)),d(T,new k(D*.55,2.15,-.48),new k(D*.3,1,0),.5,.08,e.bone,0,6);return T.add(l(N(.32),0,2.25,-.4)),T.add(l(ie(1),0,2.3,-.4)),T}function ge(T=t.red){const D=new Re;return D.add(c(o(new rt(.42,.42,.06,18),i(T)),Tt/2,0,0)),D.add(c(l(o(new yn(.42,.04,6,20),e.iron),0,0,.03),0,0,0)),D.add(l(N(.16),0,0,.08)),D}function We(){const T=new Re;return T.add(o(new Le(.7,.8,.08),e.woodD)),T.add(l(N(.32),0,.02,.18)),T.add(l(ie(1),0,.12,.16)),T}function ee(T=.7,D=6){const H=new Re;H.add(l(o(new rt(.012,.012,1,4),e.iron),0,.5,0)),H.add(c(o(new yn(T,.04,6,24),e.iron),Tt/2,0,0));for(let J=0;J<D;J++){const ue=J/D*Tt*2;H.add(l(Rt(.12),Math.cos(ue)*T,.02,Math.sin(ue)*T))}return H}function Z(T,D,H,J){for(let ue=0;ue<D.length-1;ue++){const[Te,j]=D[ue],[A,_e]=D[ue+1],oe=5;for(let q=1;q<oe;q++){const B=q/oe,Y=Te+(A-Te)*B,me=j+(_e-j)*B,Ne=H-Math.sin(B*Tt)*J;T.add(l(o(new en(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),Y,Ne,me))}const y=Math.hypot(A-Te,_e-j),R=o(new rt(.008,.008,y,3),e.dark,!1);R.position.set((Te+A)/2,H-J*.6,(j+_e)/2),R.rotation.set(0,-Math.atan2(_e-j,A-Te),Tt/2),T.add(R)}}function de(T="round",D=1){const H=new Re;if(H.add(l(o(new rt(.18*D,.3*D,1.8*D,8),e.wood),0,.9*D,0)),T==="pine")for(let J=0;J<4;J++)H.add(l(o(new Sn((1.5-J*.3)*D,1.4*D,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+J*.8)*D,0));else if(T==="dead")for(let J=0;J<4;J++){const ue=o(new rt(.04*D,.1*D,1.2*D,6),e.woodD),Te=J*1.7;ue.position.set(Math.cos(Te)*.3*D,(1.6+J*.25)*D,Math.sin(Te)*.3*D),ue.rotation.set(Math.sin(Te)*.8,0,-Math.cos(Te)*.8),H.add(ue)}else{const J=T==="autumn"?[t.autumn1,t.autumn2,t.autumn3]:[t.leaf,t.leafD,t.leafL];for(const[ue,Te,j,A]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])H.add(l(o(new en(A*D,14,10),i(p(J))),ue*D,Te*D,j*D))}return H.rotation.y=u(0,3),H}const De=new Map;function _(T,D,H,J,ue=0){const Te=new kt().compose(new k(H,ue,J),new _n().setFromAxisAngle(new k(0,1,0),u(0,2*Tt)),new k(D*u(.92,1.08),D*u(.9,1.12),D*u(.92,1.08))),j=De.get(T);return j?j.push(Te):De.set(T,[Te]),!0}function z(T){T.flora.scene.updateMatrixWorld(!0);for(const[D,H]of De){const J=Mf(T.flora,D);if(!J)throw new Error(`no flora model for ${D}`);for(const[ue,Te]of vf(s,J)){const j=Te.length===1?Te[0]:$c(Te,!1);if(!j)continue;const A=new Yr(j,ue,H.length);H.forEach((_e,oe)=>A.setMatrixAt(oe,_e)),A.castShadow=!ue.isMeshStandardMaterial,A.receiveShadow=!0,A.frustumCulled=!1,E.add(A)}}}function W(){const T=new Re;T.add(l(o(new rt(.3,.38,.6,8),e.stone),0,.3,0));const D=l(o(new Vc(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return D.scale.y=1.7,T.add(D),P.push({o:D,axis:"y",v:.6,bob:!0,y0:1}),T}function O(){const T=new Re;T.add(l(o(new en(.5,16,10,0,Tt*2,Tt*.3,Tt*.7),i("#2e2a2c",{side:gn})),0,.55,0)),T.add(c(l(o(new mi(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-Tt/2,0,0));for(let D=0;D<3;D++){const H=D/3*Tt*2;T.add(l(o(new rt(.04,.04,.3,6),e.iron),Math.cos(H)*.32,.12,Math.sin(H)*.32))}return T}function re(T,D,H=.9,J=-1){for(let ue=0;ue<D.length-1;ue++){if(ue===J)continue;const[Te,j]=D[ue],[A,_e]=D[ue+1],oe=Math.hypot(A-Te,_e-j),y=-Math.atan2(_e-j,A-Te);for(const R of[H*.45,H*.85]){const q=o(new Le(oe,.07,.06),e.woodL);q.position.set((Te+A)/2,R,(j+_e)/2),q.rotation.y=y,T.add(q)}for(const[R,q]of[[Te,j],[A,_e]])T.add(l(o(new Le(.12,H+.15,.12),e.woodD),R,(H+.15)/2,q))}}function ce(T){const D=new Re;D.add(l(o(new Le(.1,2.2,.1),e.woodD),0,1.1,0));const H=x(256,96,(J,ue,Te)=>{J.fillStyle="#6a4630",J.fillRect(0,0,ue,Te),J.strokeStyle="#3a2419",J.lineWidth=8,J.strokeRect(4,4,ue-8,Te-8),J.fillStyle="#e3d5b6",J.font=`800 40px ${mc}`,J.textAlign="center",J.textBaseline="middle",J.fillText(T,ue/2,Te/2+2)});return D.add(l(o(new Le(1.1,.42,.06),i("#ffffff",{map:H})),.25,1.85,0)),D}function Ve(T=t.red){const D=new Re;for(const H of[-1,1])G(D,e.woodD,H*.48,.24,0,.07,.18,1.96,.015);for(const[H,J,ue]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])G(D,e.woodD,H,ue/2,J,.1,ue,.1,.015),D.add(l(o(new en(.065,8,6),e.wood),H,ue+.04,J));for(let H=0;H<5;H++)G(D,e.wood,-.32+H*.16,.66,-.98,.07,.5,.04,.01);return G(D,e.woodD,0,.92,-.98,.98,.09,.07,.015),G(D,e.woodD,0,.42,-.98,.98,.07,.07,.015),G(D,e.woodD,0,.5,.98,.98,.14,.06,.015),G(D,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),G(D,i(T),0,.5,.25,.96,.07,1.36,.03),G(D,i(T),0,.535,-.38,.96,.05,.16,.025),G(D,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),G(D,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),D.add(l(N(.12),0,1.08,-.94)),D}function Et(){const T=new Re;T.add(Ve(t.redD));const D=Ve("#4a3a30");D.position.y=1.15,T.add(D);for(const[H,J]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])T.add(l(o(new Le(.1,2.2,.1),e.wood),H,1.1,J));for(let H=0;H<5;H++)T.add(l(o(new Le(.06,.05,.06),e.woodL),.52,.4+H*.3,.9));return T}function Lt(){const T=new Re;G(T,e.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const D of[-1,1]){G(T,e.wood,D*.3,1.05,.31,.56,1.78,.03,.01);for(const H of[.62,1.48])G(T,e.woodL,D*.3,H,.33,.4,.66,.02,.008);for(const H of[.4,1.7])G(T,e.iron,D*.52,H,.33,.14,.05,.015);G(T,e.gold,D*.06,1.08,.34,.03,.14,.03)}G(T,e.wood,0,2.05,0,1.32,.1,.68,.02),G(T,e.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const D of[-1,1])for(const H of[-1,1])G(T,e.woodD,D*.54,.05,H*.24,.12,.1,.12,.02);return T}function yt(T,D=1.8){const H=new Re;return H.add(l(o(M(new Le(.12,D,T),D,1.3),e.plankWall),0,D/2,0)),H.add(l(o(new Le(.18,.1,T+.04),e.timber),0,D,0)),H}function Ot(T=.8,D=1.6){const H=new Xt(new tn(T,D,6,1),i(t.red,{side:gn})),J=H.geometry.attributes.position;for(let Te=0;Te<J.count;Te++)J.setZ(Te,Math.sin(J.getX(Te)*14)*.04);H.geometry.computeVertexNormals(),H.position.y=D/2+.1;const ue=new Re;return ue.add(H),ue.add(l(c(o(new rt(.02,.02,T+.2,6),e.iron),0,0,Tt/2),0,D+.12,0)),ue}function Pt(){const T=new Re;for(let D=0;D<5;D++)T.add(c(l(o(new rt(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+D%3*.08,u(-.1,.1)),0,u(-.4,.4),Tt/2));return T}function Ze(){const T=new Re;for(let H=0;H<3;H++){const J=H/3*Tt*2;T.add(c(l(o(new rt(.025,.03,1.3,6),e.woodD),Math.cos(J)*.22,.62,Math.sin(J)*.22),Math.sin(J)*.32,0,-Math.cos(J)*.32))}const D=l(c(o(new rt(.07,.11,1.3,12),e.gold),.9,0,0),0,1.35,.15);return T.add(D),T}function St(){const T=new Re;T.add(l(o(new rt(.06,.22,.9,10),e.woodD),0,.45,0)),T.add(l(o(new en(.34,20,14),i("#2a3050")),0,1.25,0));for(let D=0;D<14;D++){const H=u(0,2*Tt),J=u(-1.2,1.2);T.add(l(o(new en(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(H)*Math.cos(J)*.345,1.25+Math.sin(J)*.345,Math.sin(H)*Math.cos(J)*.345))}return T.add(l(c(o(new yn(.4,.02,6,28),e.gold),0,Tt/2,.3),0,1.25,0)),T}const rn=x(256,192,(T,D,H)=>{T.fillStyle="#d8c8a0",T.fillRect(0,0,D,H),T.strokeStyle="#6a4a30",T.lineWidth=3,T.beginPath(),T.moveTo(30,150),T.bezierCurveTo(60,60,140,40,220,90),T.bezierCurveTo(200,150,120,170,30,150),T.stroke(),T.fillStyle="#8a2420";for(const[J,ue]of[[90,100],[150,80],[180,120]])T.beginPath(),T.arc(J,ue,6,0,Tt*2),T.fill();T.strokeStyle="rgba(106, 74, 48, 0.5)",T.setLineDash([6,6]),T.beginPath(),T.moveTo(90,100),T.lineTo(150,80),T.lineTo(180,120),T.stroke()});function bn(){const T=new Re;return T.add(o(new Le(1.4,1.05,.04),e.woodD)),T.add(l(new Xt(new tn(1.3,.95),new Fn({map:rn,toneMapped:!1})),0,0,.03)),T}function un(){const T=new Re,D=i("#6e6668"),H=i("#4a4446"),J=i("#b8b0a8"),ue=o(new la(.32,.8,6,12),D);ue.rotation.x=Tt/2,ue.position.set(0,.34,0),ue.scale.set(1.05,1,.85),T.add(ue),T.add(l(o(new en(.24,12,10),J),0,.22,.25));const Te=l(new Re,0,.5,.78);Te.add(o(new en(.24,14,10),D)),Te.add(c(l(o(new Sn(.12,.34,10),H),0,-.05,.26),Tt/2,0,0)),Te.add(l(o(new en(.04,6,4),e.dark,!1),0,-.03,.43));for(const j of[-1,1])Te.add(c(l(o(new Sn(.07,.2,6),H),j*.13,.22,-.02),0,0,-j*.3)),Te.add(l(o(new en(.03,6,4),r("#ffb84a",1.2),!1),j*.1,.05,.2));Te.rotation.x=.25,T.add(Te);for(const[j,A]of[[-.2,.55],[.2,.55]])T.add(c(l(o(new la(.07,.36,4,8),D),j,.08,A+.15),Tt/2,0,0));return T.add(c(l(o(new Sn(.12,.7,8),H),.25,.22,-.75),1.2,.6,0)),T.add(c(l(o(new yn(.2,.03,6,16),e.red),0,.42,.62),Tt/2.4,0,0)),T}return{FLAGS:w,FLAMES:I,SPINNERS:P,FIRE_LIGHTS:v,BOOK_COLS:ct,flameTex:b,flame:se,skull:N,horns:ie,fj:K,bx:G,taper:te,boards:he,cornerIron:be,barrel:fe,crate:at,sack:xt,table:Qe,roundTable:vt,stool:Yt,bench:_t,candle:Rt,skullCandle:Ct,bottle:Ce,mug:Xe,plant:it,bookshelf:ht,rug:pt,easel:Me,desk:He,anvil:ke,dummy:L,target:tt,hay:je,brazier:qe,torch:Pe,poleBanner:nt,hangingBanner:Se,skullPole:le,spikes:C,drum:S,totem:$,tent:ye,weaponRack:pe,woodpile:Ue,cart:Ge,stall:ve,well:we,lampPost:Ie,chest:V,throne:xe,shield:ge,trophy:We,chandelier:ee,lanternString:Z,tree:de,plantFlora:_,growFlora:z,crystal:W,cauldron:O,fence:re,signPost:ce,bed:Ve,bunk:Et,wardrobe:Lt,partition:yt,curtain:Ot,scrollStack:Pt,telescope:Ze,starGlobe:St,wallMap:bn,wolf:un,put:h}}const{PI:nd}=Math;function I1(s,e,t,n){const{scene:i,COL:r,toon:o,mesh:a,at:l,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:x,growFlora:m,lampPost:g,skullPole:M}=e,E=sh.pts;function w(Q,N){let ie=!1;for(let ae=0,K=E.length-1;ae<E.length;K=ae++){const[G,te]=E[ae],[he,be]=E[K];te>N!=be>N&&Q<(he-G)*(N-te)/(be-te)+G&&(ie=!ie)}return ie}function I(Q,N,ie,ae,K,G){const te=K-ie,he=G-ae,be=te*te+he*he||1,Je=Math.max(0,Math.min(1,((Q-ie)*te+(N-ae)*he)/be));return Math.hypot(Q-ie-te*Je,N-ae-he*Je)}const P=[...ps.map(Q=>({w:Q.w*.65,pts:Q.closed?[...Q.line,Q.line[0]]:Q.line})),{w:1,pts:Jo}],v=[],b=Sf.map(Q=>li[Q]);function F(Q,N,ie=.6){const ae=Math.atan2(N,Q);if(Math.hypot(Q,N)>yr(ae)-1.6)return!1;for(const K of P){const G=K.pts;for(let te=0;te<G.length-1;te++){const he=G[te],be=G[te+1];if(!(Math.abs(he[0]-Q)>K.w+ie+1.5||Math.abs(he[1]-N)>K.w+ie+1.5)&&I(Q,N,he[0],he[1],be[0],be[1])<K.w+ie)return!1}}for(const K of $o)if(K.kind==="house"){const[G,te]=Fr(K,Q,N),he=3.4+ie;if(Math.abs(G)<K.w/2+he&&te>-K.d/2-he&&te<K.d/2+he+(K.deck?4.5:0)+(K.id==="tavern"?5:0))return!1}else if(Math.hypot(Q-K.x,N-K.z)<K.r+(K.kind==="open"?2.2:1.4)+ie)return!1;for(const K of gc)if(K.kind==="hut"){const[G,te]=Fr(K,Q,N);if(Math.abs(G)<K.w/2+2.6+ie&&Math.abs(te)<K.d/2+2.6+ie)return!1}else if(Math.hypot(Q-K.x,N-K.z)<K.r+1.8+ie)return!1;for(let K=0;K<E.length;K++){const[G,te]=E[K],[he,be]=E[(K+1)%E.length];if(I(Q,N,G,te,he,be)<sh.thick/2+.8+ie||Math.hypot(Q-G,N-te)<3.6+ie)return!1}if(Math.hypot(Q+44,N-26)<6+ie||Math.hypot(Q-rh[0],N-rh[1])<9+ie)return!1;for(const K of b)if(Math.hypot(Q-K.x,N-K.z)<1.2+ie)return!1;for(const K of v)if(Math.hypot(Q-K.x,N-K.z)<K.r+ie)return!1;return!0}function U(Q,N,ie,ae){let K=0;for(let G=0;G<N&&K<Q;G++){const te=f(0,2*nd),he=Math.sqrt(d())*58,be=Math.cos(te)*he*1.04,Je=Math.sin(te)*he*.9;ie(be,Je)&&(ae(be,Je),K++)}}U(34,6e3,(Q,N)=>w(Q,N)&&F(Q,N,1.4),(Q,N)=>{x(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),Q,N),v.push({x:Q,z:N,r:2.2})}),U(80,9e3,(Q,N)=>!w(Q,N)&&F(Q,N,1.6),(Q,N)=>{x(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),Q,N),v.push({x:Q,z:N,r:2.4})});{const Q=[],N=[],ie=[];U(90,9e3,(ae,K)=>F(ae,K,.5),(ae,K)=>{const G=f(.55,1);x(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),G*1.25,ae,K),v.push({x:ae,z:K,r:G})}),U(60,6e3,(ae,K)=>F(ae,K,.4),(ae,K)=>{const G=f(.25,.8);Q.push({x:ae,y:G*.3,z:K,sx:G,sy:G*f(.5,.85),sz:G*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),v.push({x:ae,z:K,r:G})}),U(1200,16e3,(ae,K)=>F(ae,K,.1),(ae,K)=>{const G=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let te=0;te<4;te++)N.push({x:ae+f(-.12,.12),y:.11,z:K+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:G})}),U(320,12e3,(ae,K)=>F(ae,K,.1),(ae,K)=>{ie.push({x:ae,y:.16,z:K,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Ri(1,0),Q,{cast:!0});for(const ae of[p(new Sn(.06,.24,4),N,{}),p(new en(.09,7,5),ie,{})])ae&&(ae.userData.noLine=!0)}m(n);for(const[Q,N,ie]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const ae=ps.find(G=>G.id===Q);if(!ae)continue;const K=ae.line;for(let G=6;G<K.length-6;G+=N*2){const[te,he]=K[G-1],[be,Je]=K[G+1],ft=K[G],fe=Math.hypot(be-te,Je-he)||1,Ke=-(Je-he)/fe,at=(be-te)/fe,xt=G/(N*2)%2?1:-1,Qe=ft[0]+Ke*xt*(ae.w*.62+.5),vt=ft[1]+at*xt*(ae.w*.62+.5);if(Q==="ring"&&Math.hypot(Qe,vt)<10)continue;let Yt=!0;for(const _t of b)Math.hypot(Qe-_t.x,vt-_t.z)<2&&(Yt=!1);for(const _t of $o)_t.kind!=="house"&&Math.hypot(Qe-_t.x,vt-_t.z)<_t.r+.5&&_t.id!=="court"&&(Yt=!1);Yt&&h(i,ie==="lamp"?g(0):M(f(2,2.6)),Qe,vt,Math.atan2(-Ke*xt,-at*xt))}}const X=[];function se(){const Q=new Re,N=o("#2a2426");Q.add(l(a(new en(.16,8,6),N),0,0,0)),Q.children[0].scale.set(1,.8,1.6),Q.add(l(a(new en(.1,8,6),N),0,.08,.2)),Q.add(c(l(a(new Sn(.03,.12,4),o("#c79a45")),0,.07,.33),nd/2,0,0));for(const ie of[-1,1]){const ae=l(new Re,ie*.1,.02,0);ae.add(l(a(new Le(.55,.03,.22),N),ie*.27,0,0)),Q.add(ae)}return Q}for(let Q=0;Q<6;Q++){const N=se();N.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},N.scale.setScalar(1.8),i.add(N),X.push(N)}for(const Q of["war","library","tavern"]){const N=t.HOUSES[Q];if(!N)continue;const ie=N.roof;for(let ae=0;ae<2;ae++){const K=se(),G=K.children[3],te=K.children[4];G.visible=te.visible=!0,G.rotation.z=.9,te.rotation.z=-.9,K.position.set(f(-N.r.w/3,N.r.w/3),ie.hR+.3,0),K.rotation.y=f(0,6),ie.R.add(K)}}return{CROWS:X}}async function U1(s){const e=s.reducedMotion;let t=s.width,n=s.height;const i=new _M({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});A1(i,t,n,s.dpr);const r=new kp,o=R1(i,r),a=d1(),l=x1(),c=E1(),h=D1(o),d=await L1(o,h,a);await c;const f=P1(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=qM(o,h,d,f,d.models),p=I1(o,h,f,d.models),{TEX:x,COL:m,toon:g,rnd:M,rr:E,pick:w,_c:I}=o,{FLAMES:P,SPINNERS:v,FLAGS:b,FIRE_LIGHTS:F}=h,{HOUSES:U,deskF:X,deskB:se,hearthLight:Q}=f,{mouthMat:N,coreMat:ie,fireLight:ae,chimneyTop:K,emberBase:G,waterTex:te,fallTex:he,mists:be,skyBoat:Je,airship:ft}=u,{CROWS:fe}=p,{skyDome:Ke,cloudRing:at}=d,xt=Object.fromEntries(rs.map(ne=>[ne,M()*6])),Qe=v1(d.crossings),vt=w1(o,r,await l,{reducedMotion:e,phases:xt,start:oh,groundY:Qe,flameTex:h.flameTex}),Yt=Object.values(vt.actors),_t=()=>Object.fromEntries(rs.map(ne=>[ne,Pi(oh[ne])]));let Rt=_t(),Ct=null,Ce=!1;const Xe=new Set,it=new Set(["thinking","reading","writing","waiting"]),ct={},st=[];{const ne=new Set;for(const ot of Object.values(U)){for(const Ae of Object.values(ot.sides))ne.add(Ae.up);if(ne.add(ot.roof.R),ot.upper){const Ae=ot.upper;ne.add(Ae.U);const $e=new Map;Ae.U.traverse(lt=>{if(!(lt instanceof Xt))return;const Ut=lt.material;let gt=$e.get(Ut);gt||(gt=Ut.clone(),$e.set(Ut,gt),Ae.mats.push(gt)),lt.material=gt})}}for(const ot of Yt)ne.add(ot.root);for(const{f:ot}of P)ne.add(ot);for(const ot of v)ne.add(ot.o);for(const ot of b)ne.add(ot);for(const ot of fe)ne.add(ot);[X.g,se.g,Je,ft,at,Ke].forEach(ot=>ne.add(ot)),r.updateMatrixWorld(!0);const Ee=new Map,Ye=["position","normal","uv"],ze=ot=>{if(ne.has(ot))return;for(const Ft of[...ot.children])ze(Ft);if(!(ot instanceof Xt)||ot instanceof Yr||ot.children.length||Array.isArray(ot.material))return;const Ae=ot.material,$e=ot.geometry;if(Ae.transparent||Ae.vertexColors||Ae.isShaderMaterial||Ae.depthWrite===!1||!$e.attributes.uv||!$e.attributes.normal||$e.attributes.color)return;const lt=$e.index?$e.toNonIndexed():$e.clone();for(const Ft of Object.keys(lt.attributes))Ye.includes(Ft)||lt.deleteAttribute(Ft);lt.morphAttributes={},lt.clearGroups(),lt.applyMatrix4(ot.matrixWorld);const Ut=Ae.uuid+(ot.castShadow?"s":"n"),gt=Ee.get(Ut);gt?gt.geos.push(lt):Ee.set(Ut,{m:Ae,cast:ot.castShadow,geos:[lt]}),ot.parent?.remove(ot)};ze(r);for(const{m:ot,cast:Ae,geos:$e}of Ee.values()){const lt=$c($e,!1);if(!lt){console.warn("could not merge",ot.type);continue}const Ut=new Xt(lt,ot);Ut.castShadow=Ae,Ut.receiveShadow=!0,Ut.matrixAutoUpdate=!1,r.add(Ut)}const ut=new Fn({visible:!1});for(const[ot,Ae]of Object.entries(U)){const $e=Ae.top+Ae.roof.hR,lt=new Xt(new Le(Ae.r.w+.6,$e,Ae.r.d+.6),ut);lt.position.set(Ae.r.x,$e/2,Ae.r.z),lt.rotation.y=Ae.r.ry||0,lt.userData.houseId=ot,r.add(lt),lt.updateMatrixWorld(!0),st.push(lt)}}const ht=new $n(kn.fov,t/n,kn.near,kn.far),pt={t:new k(...kn.home.target),p:new k(...kn.home.position)};ht.position.copy(pt.p);const Me=new vM(ht,i.domElement);Me.target.copy(pt.t),Me.enableDamping=!0,Me.dampingFactor=.08,Me.minDistance=kn.minDistance,Me.maxDistance=kn.maxDistance,Me.maxPolarAngle=kn.maxPolarAngle,Me.minPolarAngle=kn.minPolarAngle,Me.screenSpacePanning=!1,Me.zoomSpeed=.8,Me.update();function He(){const ne=Me.target,Ee=Math.hypot(ne.x,ne.z),Ye=kn.targetRadius;if(Ee>Ye){const ze=Ye/Ee;ht.position.x-=ne.x*(1-ze),ht.position.z-=ne.z*(1-ze),ne.x*=ze,ne.z*=ze}if(ne.y<kn.targetMinY||ne.y>kn.targetMaxY){const ze=Math.max(kn.targetMinY,Math.min(kn.targetMaxY,ne.y));ht.position.y+=ze-ne.y,ne.y=ze}ht.position.y<kn.minHeight&&(ht.position.y=kn.minHeight)}let ke=null,L=null,tt=!1;function je(ne,Ee){if(e){Me.target.copy(ne),ht.position.copy(Ee),Me.update();return}ke={t0:performance.now(),dur:1100,ft:Me.target.clone(),fp:ht.position.clone(),tt:ne,tp:Ee}}function qe(ne){if(ne==="overview"){L=null,je(pt.t.clone(),pt.p.clone());return}const Ee=U[ne];L=ne,Ee&&(Ee.view="ground");const Ye=kM(ne,[ht.position.x-Me.target.x,ht.position.z-Me.target.z]);je(new k(...Ye.target),new k(...Ye.position))}let Pe=null,nt=null,Se=null,le=null;const C=new Jd,S=new Oe,$=Yt.map(ne=>ne.root);function ye(ne){const Ee=i.domElement.getBoundingClientRect();if(Ee.width===0||Ee.height===0)return null;S.set((ne.clientX-Ee.left)/Ee.width*2-1,-((ne.clientY-Ee.top)/Ee.height)*2+1),C.setFromCamera(S,ht);for(let Ye=C.intersectObjects($,!0)[0]?.object??null;Ye;Ye=Ye.parent){const ze=Ye.userData.agentId;if(ze)return ze}return null}const pe=()=>{ke=null,Se=null,Pe?.()};let Ue=0;const Ge=ne=>{ke=null,le={x:ne.clientX,y:ne.clientY,moved:!1}},ve=ne=>{!le&&ne.pointerType==="mouse"&&ne.timeStamp-Ue>90&&(Ue=ne.timeStamp,i.domElement.style.cursor=ye(ne)?"pointer":""),!(!le||le.moved||Math.hypot(ne.clientX-le.x,ne.clientY-le.y)<=4)&&(le.moved=!0,pe())},we=ne=>{const Ee=le&&!le.moved;if(le=null,ne.type!=="pointerup"||!Ee)return;const Ye=ye(ne);Ye&&nt?.(Ye)},V=[["pointerdown",Ge],["pointermove",ve],["pointerup",we],["pointercancel",we],["wheel",pe],["keydown",ne=>{ne.key.startsWith("Arrow")&&pe()}]];for(const[ne,Ee]of V)i.domElement.addEventListener(ne,Ee,{passive:!0});Me.listenToKeyEvents(i.domElement);const xe=ne=>{if(!Se)return!1;const Ee=li[Rt[Se].spot];return Ee.room===ne.id&&!Ee.out},ge=ne=>tt||L===ne.id||!!ne.near||xe(ne);function We(ne,Ee){const Ye=Me.target,ze=Math.hypot(ne.r.x-Ye.x,ne.r.z-Ye.z),ut=Math.max(ne.r.w,ne.r.d)*.8+9;ne.near=ne.near?Ee<72&&ze<ut+4:Ee<64&&ze<ut}function ee(ne,Ee,Ye){if(Ye.fading!==Ee){Ye.fading=Ee;for(const ze of ne)ze.transparent=Ee,ze.needsUpdate=!0}}function Z(ne,Ee,Ye){const ze=Ee?0:1;ne.s+=(ze-ne.s)*Ye,Math.abs(ne.s-ze)<.004&&(ne.s=ze),ne.up.scale.y=Math.max(.001,ne.s),ne.up.visible=ne.s>.03}function de(ne){const Ee=ht.position.distanceTo(Me.target),Ye=e?1:Math.min(1,ne*5),ze=e?1:Math.min(1,ne*6);for(const ut of Object.values(U)){We(ut,Ee);const ot=ge(ut),Ae=ot&&!!ut.upper&&ut.view==="upper",$e=ot?1:0;ut.lift+=($e-ut.lift)*Ye,Math.abs(ut.lift-$e)<.002&&(ut.lift=$e);const lt=ut.roof;lt.R.position.y=lt.base+ut.lift*3.4,lt.R.visible=ut.lift<.97;for(const jt of lt.mats)jt.opacity=1-ut.lift;const Ut=ht.position.x-ut.r.x,gt=ht.position.z-ut.r.z,Ft=Math.hypot(Ut,gt)||1,Mn=Math.cos(ut.r.ry||0),Nn=Math.sin(ut.r.ry||0),Zn=jt=>{const ui=((jt.n[0]*Mn+jt.n[1]*Nn)*Ut+(-jt.n[0]*Nn+jt.n[1]*Mn)*gt)/Ft;return ui>.32?jt.wish=!0:ui<.06&&(jt.wish=!1),!!jt.wish};for(const jt of Object.values(ut.sides))Z(jt,ot&&!Ae&&Zn(jt),ze);if(ut.upper){const jt=ut.upper,ui=ot&&!Ae?1:0;jt.lift+=(ui-jt.lift)*Ye,Math.abs(jt.lift-ui)<.002&&(jt.lift=ui),ee(jt.mats,jt.lift>0,jt),jt.U.position.y=jt.top+jt.lift*3.4,jt.U.visible=jt.lift<.97;for(const Un of jt.mats)Un.opacity=1-jt.lift;for(const Un of Object.values(jt.sides))Z(Un,Ae&&Zn(Un),ze)}}}function De(ne,Ee,Ye,ze,ut,ot){const Ae=new hn;Ae.setAttribute("position",new In(new Float32Array(ne*3),3));const $e=new wr(Ae,new Ir({color:Ee,size:Ye,map:ze,transparent:!0,opacity:ut,depthWrite:!1,blending:ze?Vs:Ai}));return $e.frustumCulled=!1,$e.userData.seed=Float32Array.from({length:ne},()=>Math.random()),$e.userData.h=Float32Array.from({length:ne},()=>Math.random()*ot),$e.userData.top=ot,$e.visible=!e,r.add($e),$e}const _=[{at:K,p:De(30,"#d8cfc6",2.2,x.soft,.5,9),heat:!0}];for(const ne of Object.values(U)){if(!ne.roof.smokeAt)continue;ne.g.updateMatrixWorld(!0);const Ee=ne.roof.R.localToWorld(new k(...ne.roof.smokeAt));_.push({at:Ee,p:De(14,"#d8cfc6",1.4,x.soft,.45,5),house:ne})}const z=De(60,"#ffb04a",.11,null,.9,4),W=[];for(let ne=0;ne<4;ne++){const Ee=new Zi(new os({map:x.spark,color:ne%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ai}));Ee.scale.setScalar(.25),X.g.add(Ee),W.push(Ee)}const O=[];{const ne=new Set;for(const Ye of Object.values(U)){ne.add(Ye.roof.R);for(const ze of Object.values(Ye.sides))ne.add(ze.up);if(Ye.upper){ne.add(Ye.upper.U);for(const ze of Object.values(Ye.upper.sides))ne.add(ze.up)}}r.updateMatrixWorld(!0);const Ee=[];r.traverse(Ye=>{Ye instanceof qi&&Ee.push(Ye)});for(const Ye of Ee){const ze=[];let ut=!1;for(let ot=Ye.parent,Ae=0;ot&&Ae<40;ot=ot.parent,Ae++)ne.has(ot)&&ze.push(ot),ot.userData.agentId&&(ut=!0);ut||(r.attach(Ye),ze.length&&O.push({l:Ye,anc:ze,base:Ye.intensity}))}}function re(){for(const ne of O)ne.anc.every(Ye=>Ye.visible)?ne.l.intensity===0&&(ne.l.intensity=ne.base):ne.l.intensity=0}const ce=1;r.updateMatrixWorld(!0);const Ve=[];for(const{f:ne,s:Ee}of P){if(Ee<1.3)continue;let Ye=ne,ze=!1;for(let ut=0;Ye&&ut<40;ut++)Ye.userData.movesWithWall===!0&&(ze=!0),Ye=Ye.parent;ze||Ve.push(ne.getWorldPosition(new k))}function Et(ne){const Ee=new hn;Ee.setAttribute("position",new In(new Float32Array(ne*3),3)),Ee.setAttribute("color",new In(new Float32Array(ne*3),3));const Ye=new wr(Ee,new Ir({size:.09,map:x.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ai,toneMapped:!1}));return Ye.frustumCulled=!1,Ye.visible=!e,r.add(Ye),Ye}const Lt=Et(Math.max(1,Ve.length*7)),yt=Lt.geometry.attributes.position.count,Ot={src:Float32Array.from({length:yt},(ne,Ee)=>Ee%Math.max(1,Ve.length)),life:Float32Array.from({length:yt},()=>Math.random()),sd:Float32Array.from({length:yt},()=>Math.random())},Pt=240,Ze=new wr(new hn,new Ir({size:.07,map:x.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Ai}));Ze.geometry.setAttribute("position",new In(new Float32Array(Pt*3),3));const St=Float32Array.from({length:Pt*3},()=>Math.random());Ze.frustumCulled=!1,Ze.visible=!e,r.add(Ze);const rn=80,bn=new tn(.16,.1),un=new Yr(bn,g("#ffffff",{side:gn}),rn),T=[];for(let ne=0;ne<rn;ne++)un.setColorAt(ne,I.set(w([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),T.push({x:E(-30,30),y:E(0,12),z:E(-30,30),r:E(0,6),v:E(.5,.9),w:E(1,3)});un.instanceColor&&(un.instanceColor.needsUpdate=!0),un.frustumCulled=!1,un.visible=!e,r.add(un);const D=new kt,H=new _n,J=new Li,ue=new k,Te=new k(1,1,1);function j(ne,Ee){const Ye=Lt.geometry.attributes.position,ze=Lt.geometry.attributes.color;for(let Ae=0;Ae<Ye.count;Ae++){const $e=Ve[Ot.src[Ae]];if(!$e)break;Ot.life[Ae]=Ot.life[Ae]+Ee*(.35+Ot.sd[Ae]*.4),Ot.life[Ae]>1&&(Ot.life[Ae]=Ot.life[Ae]-1);const lt=Ot.life[Ae],Ut=Ot.sd[Ae];Ye.setXYZ(Ae,$e.x+Math.sin(ne*(1+Ut)+Ut*20)*.25*lt,$e.y+.2+lt*2.2,$e.z+Math.cos(ne*(.8+Ut)+Ut*9)*.25*lt);const gt=(1-lt)*(.6+.4*Math.sin(ne*13+Ut*30))*2.2;ze.setXYZ(Ae,gt,gt*.48,gt*.16)}Ye.needsUpdate=!0,ze.needsUpdate=!0;const ut=Ze.geometry.attributes.position,ot=Me.target;for(let Ae=0;Ae<Pt;Ae++){const $e=St[Ae*3],lt=St[Ae*3+1],Ut=St[Ae*3+2],gt=(($e*44+ne*.25*(lt-.5)-ot.x)%44+66)%44-22,Ft=((lt*44+ne*.18*($e-.3)-ot.z)%44+66)%44-22;ut.setXYZ(Ae,ot.x+gt,.6+Ut*9+Math.sin(ne*.5+$e*20)*.4,ot.z+Ft)}ut.needsUpdate=!0;for(let Ae=0;Ae<rn;Ae++){const $e=T[Ae];$e.y-=Ee*$e.v,$e.y<.05&&($e.y=E(8,13),$e.x=ot.x+E(-28,28),$e.z=ot.z+E(-28,28)),ue.set($e.x+Math.sin(ne*.9+$e.r)*.9,$e.y,$e.z+Math.cos(ne*.7+$e.r)*.6),J.set(ne*$e.w+$e.r,ne*.6+$e.r,Math.sin(ne*2+$e.r)*1.2),D.compose(ue,H.setFromEuler(J),Te),un.setMatrixAt(Ae,D)}un.instanceMatrix.needsUpdate=!0}r.traverse(ne=>{const Ee=ne.material;(ne instanceof wr||ne instanceof Zi||ne.userData.noLine||Ee&&!Array.isArray(Ee)&&(Ee.blending===Ai||Ee.depthWrite===!1))&&ne.layers.set(ce)});for(const ne of[at,un,Ke])ne.traverse(Ee=>Ee.layers.set(ce));ht.layers.enable(ce);const A=new B0({side:gn}),_e=new Vn(1,1,{type:Gn});_e.depthTexture=new _s(1,1),_e.depthTexture.type=vi;const oe=new At(.5,.5,1),y=new At;function R(){r.overrideMaterial=A,ht.layers.disable(ce);const ne=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(y);const Ee=i.getClearAlpha();i.setClearColor(oe,1),i.setRenderTarget(_e),i.clear(),i.render(r,ht),i.setRenderTarget(null),i.setClearColor(y,Ee),i.shadowMap.autoUpdate=ne,ht.layers.enable(ce),r.overrideMaterial=null}const q=new OM(i,new Vn(1,1,{type:Gn,samples:4}));q.setPixelRatio(i.getPixelRatio()),q.addPass(new BM(r,ht));const B="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Y=new hc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Oe},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:B,fragmentShader:`#include <packing>
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
    }`});q.addPass(Y);const me=new js(new Oe(t,n),.42,.55,.88);$M(me),q.addPass(me),q.addPass(new FM);const Ne=new hc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Oe},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:B,fragmentShader:`#include <packing>
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
    }`});q.addPass(Ne);const Fe=Y.uniforms,Be=Ne.uniforms,et=(ne,Ee)=>ne[Ee];et(Fe,"tDepth").value=_e.depthTexture,et(Be,"tDepth").value=_e.depthTexture;function mt(ne,Ee){const Ye=i.getPixelRatio();i.setSize(ne,Ee),q.setSize(ne,Ee),me.setSize(ne,Ee),_e.setSize(Math.floor(ne*Ye),Math.floor(Ee*Ye)),et(Fe,"texel").value.set(1/(ne*Ye),1/(Ee*Ye)),et(Be,"texel").value.copy(et(Fe,"texel").value),et(Fe,"width").value=Math.max(1,Ye*.85),ht.aspect=ne/Ee,ht.updateProjectionMatrix()}for(const ne of[Fe,Be])et(ne,"near").value=ht.near,et(ne,"far").value=ht.far;mt(t,n);const Mt=0;let dt=-1,Nt=0,Bt=0,Dt=!1;const Vt=new k,on={},wt={};let an=null;const Ht=new k;function Qn(){if(!an)return;const ne={};for(const Ee of Yt)Ee.root.getWorldPosition(Ht),Ht.y+=Rr[Ee.id].H*(wt[Ee.id]?.74:1)+.25,Ht.project(ht),ne[Ee.id]={x:Ht.x,y:Ht.y,z:Ht.z,walking:!!on[Ee.id]};an(ne)}function mn(ne){dt<0&&(dt=ne);const Ee=(ne-dt)/1e3,Ye=Math.min(.05,Ee-Nt);Nt=Ee;for(const Ae of Yt){const $e=Rr[Ae.id].speed;let lt=ku(Rt[Ae.id],ne,$e,e);if(Ct&&Ce&&!lt.walk&&lt.spot===bf[Ae.id]&&Ea(Ae.id,Ct,Ce,Xe)===lt.spot){for(const jt of Ct.tasks)jt.owner===Ae.id&&Xe.add(jt.id);const Zn=Ea(Ae.id,Ct,Ce,Xe);Zn&&(lt=zu(lt,Zn,ne,$e,e,Aa[Ae.id]))}Rt[Ae.id]=lt;const Ut=Gu(lt,ne);if(Ae.root.position.x=Ut.x,Ae.root.position.z=Ut.z,Ut.walking){const Zn=Ut.heading-Ae.root.rotation.y;Ae.root.rotation.y+=Math.atan2(Math.sin(Zn),Math.cos(Zn))*Math.min(1,Ye*10)}else Ae.root.rotation.y=Ut.heading;const gt=Qe(Ae.root.position.x,Ae.root.position.z);Ae.root.position.y+=(gt-Ae.root.position.y)*Math.min(1,Ye*12);const Ft=Hu(lt,ne),Mn=li[lt.spot].pose,Nn=Ut.walking?"walk":Ft?pc.has(Mn)?"sit":"idle":Mn;ct[Ae.id]=!Ut.walking&&!Ft&&lt.spot===Aa[Ae.id]&&!!Ct&&it.has(Ct.agents[Ae.id].state),on[Ae.id]=Ut.walking,wt[Ae.id]=!Ut.walking&&(Nn==="sit"||pc.has(Mn)),vt.lanternFor(Ae,Nn,Ee),vt.drive(Ae,Nn,Ye,Ut.walking?null:lt.spot,lt.walk?lt.walk.speed/$e:1)}const ze=!!ct.frontend&&Ct?.agents.frontend.state==="writing",ut=.25+Mt*.35,ot=e?0:Math.sin(Ee*9)*.08+Math.sin(Ee*23)*.05;N.emissiveIntensity=.9+ut*1.4+ot,ie.emissiveIntensity=1.2+ut*1.8+ot,ae.intensity=8+ut*16+ot*20;for(const[Ae,$e]of[[X,"frontend"],[se,"backend"]]){const lt=!!ct[$e],Ut=Ae.screen?.material;Ut&&(Ut.opacity+=((lt?1:.3)-Ut.opacity)*Math.min(1,Ye*4)),Ae.light&&(Ae.light.intensity=lt?3.5:0)}if(de(Ye),!e){for(const{f:gt,ph:Ft}of P){const Mn=1+Math.sin(Ee*11+Ft)*.16+Math.sin(Ee*27+Ft*2)*.08;gt.scale.set(1/Math.sqrt(Mn),Mn,1/Math.sqrt(Mn))}for(const gt of F)gt.l.intensity=gt.base*(1+Math.sin(Ee*9+gt.ph)*.12+Math.sin(Ee*23+gt.ph)*.06);Q.intensity=11+Math.sin(Ee*7)*1.5;for(const gt of v)gt.o.rotation[gt.axis]+=Ye*gt.v,gt.bob&&(gt.o.position.y=(gt.y0??0)+Math.sin(Ee*1.6)*.06);const Ae=Math.abs(Math.sin(Ee*5.2+xt.frontend));W.forEach((gt,Ft)=>{const Mn=ze&&Ae<.25;gt.material.opacity=Mn?1-Ae*4:0,gt.position.set(-.4+Ft*.19,.95+Ft%2*.12+(Mn?(.25-Ae)*.8:0),Ft%2*.08-.29),gt.material.rotation=Ee*3+Ft}),X.kb&&(X.kb.position.y=X.kb.userData.y0+(ze&&Ae<.2?.03:0));const $e=z.geometry.attributes.position,lt=z.userData.h,Ut=z.userData.seed;for(let gt=0;gt<$e.count;gt++){const Ft=Ut[gt];lt[gt]=lt[gt]+Ye*(.5+Ft*.7)*(.5+ut),lt[gt]>z.userData.top&&(lt[gt]=0),$e.setXYZ(gt,G.x+Math.sin(Ee*(.6+Ft)+Ft*10)*.8*Ft,G.y+lt[gt],G.z+Math.cos(Ee*.7+Ft*7)*.5*Ft)}$e.needsUpdate=!0,z.material.opacity=Math.min(.95,.2+ut*.5);for(const gt of _){const Ft=gt.p,Mn=Ft.geometry.attributes.position,Nn=Ft.userData.h,Zn=Ft.userData.seed,jt=gt.house?gt.house.lift:0;Ft.visible=jt<.5;const ui=gt.heat?.6+ut:.7;for(let Un=0;Un<Mn.count;Un++){const Ta=Zn[Un];Nn[Un]=Nn[Un]+Ye*(.5+Ta*.4)*ui,Nn[Un]>Ft.userData.top&&(Nn[Un]=0);const vs=Nn[Un];Mn.setXYZ(Un,gt.at.x+Math.sin(vs*.8+Ta*6)*vs*.16+vs*.3,gt.at.y+vs,gt.at.z+Math.cos(vs*.6+Ta*4)*vs*.14)}Mn.needsUpdate=!0}he.offset.y=(he.offset.y+Ye*1.6)%1,te.offset.x=(te.offset.x+Ye*.12)%1,at.rotation.y+=Ye*.004,be.forEach((gt,Ft)=>{gt.material.opacity=.42+Math.sin(Ee*.8+Ft)*.1});for(const gt of fe){const Ft=gt.userData;Ft.a+=Ye*Ft.s,gt.position.set(Math.cos(Ft.a)*Ft.r,Ft.y+Math.sin(Ft.a*3)*.8,Math.sin(Ft.a)*Ft.r),gt.rotation.y=-Ft.a,gt.children[3].rotation.z=Math.sin(Ee*10+Ft.r)*.6,gt.children[4].rotation.z=-Math.sin(Ee*10+Ft.r)*.6}b.forEach((gt,Ft)=>{gt.rotation.y=Math.sin(Ee*2+Ft)*.3}),Je.position.y=-.4+Math.sin(Ee*.9)*.2,Je.rotation.x=Math.sin(Ee*.7)*.03;{const gt=ft.userData;gt.a+=Ye*.022,ft.position.set(Math.cos(gt.a)*gt.r,gt.y+Math.sin(Ee*.5)*.8,Math.sin(gt.a)*gt.r),ft.rotation.y=Math.atan2(-Math.cos(gt.a),-Math.sin(gt.a))}}if(ke){const Ae=Math.min(1,(performance.now()-ke.t0)/ke.dur),$e=Ae<.5?4*Ae*Ae*Ae:1-Math.pow(-2*Ae+2,3)/2;Me.target.lerpVectors(ke.ft,ke.tt,$e),ht.position.lerpVectors(ke.fp,ke.tp,$e),Ae>=1&&(ke=null)}else if(Se){vt.actors[Se].root.getWorldPosition(Vt),Vt.y+=.8;const Ae=Vt.sub(Me.target).multiplyScalar(e?1:Math.min(1,Ye*4));Me.target.add(Ae),ht.position.add(Ae)}re(),Me.update(),He(),Qn(),e||j(Ee,Ye),Ke.position.copy(ht.position),et(Be,"focus").value=ht.position.distanceTo(Me.target),et(Be,"time").value=e?0:Ee,R(),q.render(),Bt++}return{renderer:i,scene:r,camera:ht,controls:Me,housePicks:st,agentPhase:xt,cast:vt,groundY:Qe,place(ne,Ee){const Ye=li[Ee];vt.actors[ne].root.position.y=Qe(Ye.x,Ye.z),Rt[ne]=Pi(Ee,performance.now())},update(ne,Ee){Ct=ne,Ce=Ee;const Ye=performance.now();for(const ze of rs){const ut=Ea(ze,ne,Ce,Xe);ut&&(Rt[ze]=zu(Rt[ze],ut,Ye,Rr[ze].speed,e,Aa[ze]))}},land(){const ne=performance.now();for(const Ee of rs)Rt[Ee]=XM(Rt[Ee],ne)},restart(){Rt=_t(),Xe.clear()},whereIs(ne){const Ee=performance.now(),Ye=ku(Rt[ne],Ee,Rr[ne].speed,e),ze=Gu(Ye,Ee).walking,ut=ze?Ye.walk:null;return{spot:Ye.spot,to:ut?.to??null,path:ut?.path??null,walking:ze,held:Hu(Ye,Ee)}},get frames(){return Bt},start(){Dt=!1,i.setAnimationLoop(ne=>{Dt||mn(ne)})},stop(){Dt=!0,i.setAnimationLoop(null)},resize(ne,Ee){t=ne,n=Ee,mt(ne,Ee)},flyToRoom:qe,onHandMove(ne){return Pe=ne,()=>{Pe===ne&&(Pe=null)}},onFrame(ne){return an=ne,()=>{an===ne&&(an=null)}},onPick(ne){return nt=ne,()=>{nt===ne&&(nt=null)}},flyToAgent(ne){Se=null;const Ee=li[Rt[ne].spot];L=U[Ee.room]&&!Ee.out?Ee.room:null;const Ye=vt.actors[ne].root.getWorldPosition(new k);Ye.y+=.8;const ze=ht.position.clone().sub(Me.target);ze.lengthSq()<1e-6&&ze.set(.45,.85,.9),ze.normalize(),ze.y=Math.max(ze.y,.6),ze.normalize(),je(Ye,Ye.clone().addScaledVector(ze,14))},follow(ne){Se=ne,ne&&(ke=null,L=null)},setOpenHouses(ne){tt=ne},setTasks(ne){f.drawBoard(ne)},dispose(){i.setAnimationLoop(null);for(const[ne,Ee]of V)i.domElement.removeEventListener(ne,Ee);Pe=null,nt=null,an=null,Me.dispose(),q.dispose(),_e.dispose(),i.dispose()}}}export{U1 as createWorld};
