import{R as Ci,W as oa,S as ys,a as Qn,A as Dh,r as aa,f as Id,B as _a,D as Gc,F as Ve,b as Ps,c as xa,t as no,d as tp,i as Hr,e as ep,C as Ih,g as Nh,w as np,p as Za,h as ip}from"./index-DsHh0irw.js";const Vc="187",rr={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sp=0,Uh=1,rp=2,Zr=1,op=2,Gr=3,bs=0,jn=1,Sn=2,Ls=0,or=1,Ai=2,Oh=3,Fh=4,ap=5,tr=100,lp=101,cp=102,hp=103,up=104,dp=200,fp=201,pp=202,mp=203,Nd=204,Ud=205,gp=206,_p=207,xp=208,vp=209,Mp=210,yp=211,Sp=212,bp=213,wp=214,Vl=0,Wl=1,Xl=2,io=3,Yl=4,ql=5,Kl=6,Zl=7,Od=0,Tp=1,Ep=2,hs=0,Wc=1,Xc=2,Yc=3,Ba=4,qc=5,Kc=6,Zc=7,Bh="attached",Ap="detached",Fd=300,hr=301,so=302,Ja=303,$a=304,Si=1e3,oi=1001,va=1002,Fn=1003,Bd=1004,Vr=1005,qn=1006,la=1007,Vi=1008,fi=1009,zd=1010,kd=1011,ro=1012,Jc=1013,Di=1014,yi=1015,ti=1016,$c=1017,Qc=1018,ur=1020,Hd=35902,Gd=35899,Vd=1021,Wd=1022,Pi=1023,ws=1026,Ss=1027,za=1028,jc=1029,Ds=1030,th=1031,eh=1033,ca=33776,ha=33777,ua=33778,da=33779,Jl=35840,$l=35841,Ql=35842,jl=35843,tc=36196,ec=37492,nc=37496,ic=37488,sc=37489,Ma=37490,rc=37491,oc=37808,ac=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,_c=37819,xc=37820,vc=37821,Mc=36492,yc=36494,Sc=36495,bc=36283,wc=36284,ya=36285,Tc=36286,Rp=2200,Cp=2201,Pp=2202,oo=2300,ao=2301,Qa=2302,zh=2303,ir=2400,sr=2401,Sa=2402,nh=2500,Lp=2501,Dp=0,Xd=1,Ec=2,Ip=3200,lo=0,Np=1,os="",On="srgb",mi="srgb-linear",ba="linear",fn="srgb",ja=7680,Up=519,Op=512,Fp=513,Bp=514,Yd=515,zp=516,kp=517,qd=518,Kd=519,Zd=35044,kh="300 es",Li=2e3,co=2001;function Hp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vp(){const s=ho("canvas");return s.style.display="block",s}const Hh={};function wa(...s){const t="THREE."+s.shift();console.log(t,...s)}function Jd(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=Jd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ze(...s){s=Jd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ar(...s){const t=s.join(" ");t in Hh||(Hh[t]=!0,Pe(...s))}function Wp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Xp={[Vl]:Vl,[Xl]:Kl,[Yl]:Yl,[io]:ql,[Wl]:Wl,[Kl]:Xl,[Zl]:Zl,[ql]:io};class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const Jr=Math.PI/180,dr=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[e&63|128]+Zn[e>>8&255]+"-"+Zn[e>>16&255]+Zn[e>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function Je(s,t,e){return Math.max(t,Math.min(e,s))}function ih(s,t){return(s%t+t)%t}function Yp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qp(s,t,e){return s!==t?(e-s)/(t-s):0}function $r(s,t,e){return(1-e)*s+e*t}function Kp(s,t,e,n){return $r(s,t,1-Math.exp(-e*n))}function Zp(s,t=1){return t-Math.abs(ih(s,t*2)-t)}function Jp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $p(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function jp(s,t){return s+Math.random()*(t-s)}function t0(s){return s*(.5-Math.random())}function e0(s){s!==void 0&&(Gh=s);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function n0(s){return s*Jr}function i0(s){return s*dr}function s0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function r0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $d(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o0(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ka(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sh(s,t){if(t.constructor===Float32Array)return s;const e=ka(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function rh(s,t){if(t.constructor===Float32Array)return s;const e=ka(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Ta={DEG2RAD:Jr,RAD2DEG:dr,generateUUID:Ii,clamp:Je,euclideanModulo:ih,mapLinear:Yp,inverseLerp:qp,lerp:$r,damp:Kp,pingpong:Zp,smoothstep:Jp,smootherstep:$p,randInt:Qp,randFloat:jp,randFloatSpread:t0,seededRandom:e0,degToRad:n0,radToDeg:i0,isPowerOfTwo:s0,ceilPowerOfTwo:r0,floorPowerOfTwo:$d,setQuaternionFromProperEuler:o0,normalize:rh,denormalize:sh},Rh=class Rh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Je(this.x,t.x,e.x),this.y=Je(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Je(this.x,t,e),this.y=Je(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let Lt=Rh;class bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*v;m<0&&(f=-f,u=-u,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);g=Math.sin(g*y)/T,a=Math.sin(a*y)/T,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+v*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ch=class Ch{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Je(this.x,t.x,e.x),this.y=Je(this.y,t.y,e.y),this.z=Je(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Je(this.x,t,e),this.y=Je(this.y,t,e),this.z=Je(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ch.prototype.isVector3=!0;let G=Ch;const tl=new G,Vh=new bn,Ph=class Ph{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],v=i[0],m=i[3],g=i[6],y=i[1],T=i[4],b=i[7],L=i[2],R=i[5],M=i[8];return r[0]=o*v+a*y+l*L,r[3]=o*m+a*T+l*R,r[6]=o*g+a*b+l*M,r[1]=c*v+h*y+d*L,r[4]=c*m+h*T+d*R,r[7]=c*g+h*b+d*M,r[2]=f*v+u*y+p*L,r[5]=f*m+u*T+p*R,r[8]=f*g+u*b+p*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(t,e)),this}rotate(t){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-t)),this}translate(t,e){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;let Xe=Ph;const el=new Xe,Wh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){const s={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fn&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fn&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===os?ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mi]:{primaries:t,whitePoint:n,transfer:ba,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:n,transfer:fn,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),s}const rn=a0();function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class l0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=ho("canvas")),Os.width=t.width,Os.height=t.height;const i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=us(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let c0=0;class oh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nl(i[o].image)):r.push(nl(i[o]))}else r=nl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function nl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let h0=0;const il=new G;class kn extends fs{constructor(t=kn.DEFAULT_IMAGE,e=kn.DEFAULT_MAPPING,n=oi,i=oi,r=qn,o=Vi,a=Pi,l=fi,c=kn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ii(),this.name="",this.source=new oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Pe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Pe(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Fd;kn.DEFAULT_ANISOTROPY=1;const Lh=class Lh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(u+1)/2,L=(g+1)/2,R=(h+f)/4,M=(d+v)/4,w=(p+m)/4;return T>b&&T>L?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=R/n,r=M/n):b>L?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=w/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=M/r,i=w/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Je(this.x,t.x,e.x),this.y=Je(this.y,t.y,e.y),this.z=Je(this.z,t.z,e.z),this.w=Je(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Je(this.x,t,e),this.y=Je(this.y,t,e),this.z=Je(this.z,t,e),this.w=Je(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;let mn=Lh;class u0 extends fs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new mn(0,0,t,e),this.scissorTest=!1,this.viewport=new mn(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new kn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new oh(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends u0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qd extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Fa=class Fa{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,v=c*d;e[0]=f+v*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,u=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,p0)}lookAt(t,e,n){const i=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ps.crossVectors(n,ui),ps.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ps.crossVectors(n,ui)),ps.normalize(),bo.crossVectors(ui,ps),i[0]=ps.x,i[4]=bo.x,i[8]=ui.x,i[1]=ps.y,i[5]=bo.y,i[9]=ui.y,i[2]=ps.z,i[6]=bo.z,i[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],v=n[6],m=n[10],g=n[14],y=n[3],T=n[7],b=n[11],L=n[15],R=i[0],M=i[4],w=i[8],z=i[12],O=i[1],q=i[5],it=i[9],j=i[13],N=i[2],st=i[6],at=i[10],$=i[14],ot=i[3],nt=i[7],Q=i[11],St=i[15];return r[0]=o*R+a*O+l*N+c*ot,r[4]=o*M+a*q+l*st+c*nt,r[8]=o*w+a*it+l*at+c*Q,r[12]=o*z+a*j+l*$+c*St,r[1]=h*R+d*O+f*N+u*ot,r[5]=h*M+d*q+f*st+u*nt,r[9]=h*w+d*it+f*at+u*Q,r[13]=h*z+d*j+f*$+u*St,r[2]=p*R+v*O+m*N+g*ot,r[6]=p*M+v*q+m*st+g*nt,r[10]=p*w+v*it+m*at+g*Q,r[14]=p*z+v*j+m*$+g*St,r[3]=y*R+T*O+b*N+L*ot,r[7]=y*M+T*q+b*st+L*nt,r[11]=y*w+T*it+b*at+L*Q,r[15]=y*z+T*j+b*$+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],v=t[7],m=t[11],g=t[15],y=l*u-c*f,T=a*u-c*d,b=a*f-l*d,L=o*u-c*h,R=o*f-l*h,M=o*d-a*h;return e*(v*y-m*T+g*b)-n*(p*y-m*L+g*R)+i*(p*T-v*L+g*M)-r*(p*b-v*R+m*M)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=e*a-n*o,T=e*l-i*o,b=e*c-r*o,L=n*l-i*a,R=n*c-r*a,M=i*c-r*l,w=h*v-d*p,z=h*m-f*p,O=h*g-u*p,q=d*m-f*v,it=d*g-u*v,j=f*g-u*m,N=y*j-T*it+b*q+L*O-R*z+M*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const st=1/N;return t[0]=(a*j-l*it+c*q)*st,t[1]=(i*it-n*j-r*q)*st,t[2]=(v*M-m*R+g*L)*st,t[3]=(f*R-d*M-u*L)*st,t[4]=(l*O-o*j-c*z)*st,t[5]=(e*j-i*O+r*z)*st,t[6]=(m*b-p*M-g*T)*st,t[7]=(h*M-f*b+u*T)*st,t[8]=(o*it-a*O+c*w)*st,t[9]=(n*O-e*it-r*w)*st,t[10]=(p*R-v*b+g*y)*st,t[11]=(d*b-h*R-u*y)*st,t[12]=(a*z-o*q-l*w)*st,t[13]=(e*q-n*z+i*w)*st,t[14]=(v*T-p*L-m*y)*st,t[15]=(h*L-d*T+f*y)*st,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,v=o*h,m=o*d,g=a*d,y=l*c,T=l*h,b=l*d,L=n.x,R=n.y,M=n.z;return i[0]=(1-(v+g))*L,i[1]=(u+b)*L,i[2]=(p-T)*L,i[3]=0,i[4]=(u-b)*R,i[5]=(1-(f+g))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(p+T)*M,i[9]=(m-y)*M,i[10]=(1-(f+v))*M,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fs.set(i[0],i[1],i[2]).length();const a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),wi.copy(this);const c=1/o,h=1/a,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,e.setFromRotationMatrix(wi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Li,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===Li)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===co)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Li,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===Li)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===co)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fa.prototype.isMatrix4=!0;let Ne=Fa;const Fs=new G,wi=new Ne,f0=new G(0,0,0),p0=new G(1,1,1),ps=new G,bo=new G,ui=new G,Yh=new Ne,qh=new bn;class Yi{constructor(t=0,e=0,n=0,i=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let m0=0;const Kh=new G,Bs=new bn,Qi=new Ne,wo=new G,Ar=new G,g0=new G,_0=new bn,Zh=new G(1,0,0),Jh=new G(0,1,0),$h=new G(0,0,1),Qh={type:"added"},x0={type:"removed"},zs={type:"childadded",child:null},sl={type:"childremoved",child:null};class vn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new G,e=new Yi,n=new bn,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Zh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ar,wo,this.up):Qi.lookAt(wo,Ar,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qh),zs.child=t,this.dispatchEvent(zs),zs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x0),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qh),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,g0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,_0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new G(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},To={h:0,s:0,l:0};function ol(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ye{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,rn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=rn.workingColorSpace){return this.r=t,this.g=e,this.b=n,rn.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=rn.workingColorSpace){if(t=ih(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return rn.colorSpaceToWorking(this,i),this}setStyle(t,e=On){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pe("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=On){const n=jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return rn.workingToColorSpace(Jn.copy(this),t),Math.round(Je(Jn.r*255,0,255))*65536+Math.round(Je(Jn.g*255,0,255))*256+Math.round(Je(Jn.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=rn.workingColorSpace){rn.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,i=Jn.g,r=Jn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=rn.workingColorSpace){return rn.workingToColorSpace(Jn.copy(this),e),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=On){rn.workingToColorSpace(Jn.copy(this),t);const e=Jn.r,n=Jn.g,i=Jn.b;return t!==On?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+e,ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ms),t.getHSL(To);const n=$r(ms.h,To.h,e),i=$r(ms.s,To.s,e),r=$r(ms.l,To.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new ye;ye.NAMES=jd;class lh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=e,this.far=n}clone(){return new lh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class M0 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ti=new G,ji=new G,al=new G,ts=new G,ks=new G,Hs=new G,jh=new G,ll=new G,cl=new G,hl=new G,ul=new mn,dl=new mn,fl=new mn;class Mi{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ti.subVectors(t,e),i.cross(Ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ti.subVectors(i,e),ji.subVectors(n,e),al.subVectors(t,e);const o=Ti.dot(Ti),a=Ti.dot(ji),l=Ti.dot(al),c=ji.dot(ji),h=ji.dot(al),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ul.setScalar(0),dl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(t,e),dl.fromBufferAttribute(t,n),fl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(dl,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(t,e,n,i){return Ti.subVectors(n,e),ji.subVectors(t,e),Ti.cross(ji).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ti.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Mi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ks.subVectors(i,n),Hs.subVectors(r,n),ll.subVectors(t,n);const l=ks.dot(ll),c=Hs.dot(ll);if(l<=0&&c<=0)return e.copy(n);cl.subVectors(t,i);const h=ks.dot(cl),d=Hs.dot(cl);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ks,o);hl.subVectors(t,r);const u=ks.dot(hl),p=Hs.dot(hl);if(p>=0&&u<=p)return e.copy(r);const v=u*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Hs,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return jh.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(jh,a);const g=1/(m+v+f);return o=v*g,a=f*g,e.copy(n).addScaledVector(ks,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qi{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),Ao.subVectors(this.max,Rr),Gs.subVectors(t.a,Rr),Vs.subVectors(t.b,Rr),Ws.subVectors(t.c,Rr),gs.subVectors(Vs,Gs),_s.subVectors(Ws,Vs),Ts.subVectors(Gs,Ws);let e=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-Ts.z,Ts.y,gs.z,0,-gs.x,_s.z,0,-_s.x,Ts.z,0,-Ts.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-Ts.y,Ts.x,0];return!pl(e,Gs,Vs,Ws,Ao)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,Gs,Vs,Ws,Ao))?!1:(Ro.crossVectors(gs,_s),e=[Ro.x,Ro.y,Ro.z],pl(e,Gs,Vs,Ws,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const es=[new G,new G,new G,new G,new G,new G,new G,new G],Ei=new G,Eo=new qi,Gs=new G,Vs=new G,Ws=new G,gs=new G,_s=new G,Ts=new G,Rr=new G,Ao=new G,Ro=new G,Es=new G;function pl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);const a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Un=new G,Co=new Lt;let y0=0;class Wn extends fs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zd,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=t!==void 0?ka(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix3(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):rh(t,this.array)}}class tf extends Wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ef extends Wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends Wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const S0=new qi,Cr=new G,ml=new G;class Ki{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):S0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(ml)),this.expandByPoint(Cr.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let b0=0;const _i=new Ne,gl=new vn,Xs=new G,di=new qi,Pr=new qi,Vn=new G;class dn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?ef:tf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vn.addVectors(di.min,Pr.min),di.expandByPoint(Vn),Vn.addVectors(di.max,Pr.max),di.expandByPoint(Vn)):(di.expandByPoint(Pr.min),di.expandByPoint(Pr.max))}di.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Vn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Vn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vn.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),Vn.add(Xs)),i=Math.max(i,n.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)a[z]=new G,l[z]=new G;const h=new G,d=new G,f=new G,u=new Lt,p=new Lt,v=new Lt,m=new G,g=new G;function y(z,O,q){c[z]=c[O]=c[q]=1,h.fromBufferAttribute(n,z),d.fromBufferAttribute(n,O),f.fromBufferAttribute(n,q),u.fromBufferAttribute(r,z),p.fromBufferAttribute(r,O),v.fromBufferAttribute(r,q),d.sub(h),f.sub(h),p.sub(u),v.sub(u);const it=1/(p.x*v.y-v.x*p.y);isFinite(it)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(it),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(it),a[z].add(m),a[O].add(m),a[q].add(m),l[z].add(g),l[O].add(g),l[q].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,O=T.length;z<O;++z){const q=T[z],it=q.start,j=q.count;for(let N=it,st=it+j;N<st;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new G,L=new G,R=new G,M=new G;function w(z){R.fromBufferAttribute(i,z),M.copy(R);const O=a[z];b.copy(O),b.sub(R.multiplyScalar(R.dot(O))).normalize(),L.crossVectors(M,O);const it=L.dot(l[z])<0?-1:1;o.setXYZW(z,b.x,b.y,b.z,it)}for(let z=0,O=n.count;z<O;++z)c[z]&&w(z);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Vn.fromBufferAttribute(t,e),Vn.normalize(),t.setXYZ(e,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Wn(f,h,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zd,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=tu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=tu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function tu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ii()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ii=new G;class uo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?ka(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):rh(t,this.data.array)}}const _l=new G,w0=new G,T0=new Xe;class rs{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_l.subVectors(n,e).cross(w0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(_l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||T0.getNormalMatrix(t),i=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let E0=0;class pi extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=or,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Ud,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Pe(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Pe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new rs().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ds extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ys;const Lr=new G,qs=new G,Ks=new G,Zs=new Lt,Dr=new Lt,sf=new Ne,Po=new G,Ir=new G,Lo=new G,eu=new Lt,xl=new Lt,nu=new Lt;class Wi extends vn{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new dn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nf(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new uo(n,3,0,!1)),Ys.setAttribute("uv",new uo(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new Lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),sf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ks.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Do(Po.set(-.5,-.5,0),Ks,o,qs,i,r),Do(Ir.set(.5,-.5,0),Ks,o,qs,i,r),Do(Lo.set(.5,.5,0),Ks,o,qs,i,r),eu.set(0,0),xl.set(1,0),nu.set(1,1);let a=t.ray.intersectTriangle(Po,Ir,Lo,!1,Lr);if(a===null&&(Do(Ir.set(-.5,.5,0),Ks,o,qs,i,r),xl.set(0,1),a=t.ray.intersectTriangle(Po,Lo,Ir,!1,Lr),a===null))return;const l=t.ray.origin.distanceTo(Lr);l<t.near||l>t.far||e.push({distance:l,point:Lr.clone(),uv:Mi.getInterpolation(Lr,Po,Ir,Lo,eu,xl,nu,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Do(s,t,e,n,i,r){Zs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Dr.x=r*Zs.x-i*Zs.y,Dr.y=i*Zs.x+r*Zs.y):Dr.copy(Zs),s.copy(t),s.x+=Dr.x,s.y+=Dr.y,s.applyMatrix4(sf)}const ns=new G,vl=new G,Io=new G,No=new G;class _r{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vl.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),No.copy(this.origin).sub(vl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=No.dot(this.direction),l=-No.dot(Io),c=No.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const v=1/h;d*=v,f*=v,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vl).addScaledVector(Io,f),u}intersectSphere(t,e){if(t.radius<0)return null;ns.subVectors(t.center,this.origin);const n=ns.dot(this.direction),i=ns.dot(ns)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,T=n.z-o.z,b=Math.abs(l),L=Math.abs(c),R=Math.abs(h);let M,w,z,O,q,it,j,N,st,at,$,ot;if(b>=L&&b>=R?(z=l,it=d,st=p,ot=g,l>=0?(M=c,w=h,O=f,q=u,j=v,N=m,at=y,$=T):(M=h,w=c,O=u,q=f,j=m,N=v,at=T,$=y)):L>=R?(z=c,it=f,st=v,ot=y,c>=0?(M=h,w=l,O=u,q=d,j=m,N=p,at=T,$=g):(M=l,w=h,O=d,q=u,j=p,N=m,at=g,$=T)):(z=h,it=u,st=m,ot=T,h>=0?(M=l,w=c,O=d,q=f,j=p,N=v,at=g,$=y):(M=c,w=l,O=f,q=d,j=v,N=p,at=y,$=g)),z===0)return null;const nt=M/z,Q=w/z,St=1/z,Xt=O-nt*it,ue=q-Q*it,gt=j-nt*st,Vt=N-Q*st,ne=at-nt*ot,fe=$-Q*ot,jt=ne*Vt-fe*gt,re=Xt*fe-ue*ne,ke=gt*ue-Vt*Xt;if(i){if(jt<0||re<0||ke<0)return null}else if((jt<0||re<0||ke<0)&&(jt>0||re>0||ke>0))return null;const xe=jt+re+ke;if(xe===0)return null;const ve=St*(jt*it+re*st+ke*ot);return(xe>0?ve<0:ve>0)?null:this.at(ve/xe,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kn extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const iu=new Ne,As=new _r,Uo=new Ki,su=new G,Oo=new G,Fo=new G,Bo=new G,Ml=new G,zo=new G,ru=new G,ko=new G;class He extends vn{constructor(t=new dn,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ml.fromBufferAttribute(d,t),o?zo.addScaledVector(Ml,h):zo.addScaledVector(Ml.sub(e),h))}e.add(zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(Uo.containsPoint(As.origin)===!1&&(As.intersectSphere(Uo,su)===null||As.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),As.copy(t.ray).applyMatrix4(iu),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,L=T;b<L;b+=3){const R=a.getX(b),M=a.getX(b+1),w=a.getX(b+2);i=Ho(this,g,t,n,c,h,d,R,M,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){const y=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);i=Ho(this,o,t,n,c,h,d,y,T,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,L=T;b<L;b+=3){const R=b,M=b+1,w=b+2;i=Ho(this,g,t,n,c,h,d,R,M,w),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){const y=m,T=m+1,b=m+2;i=Ho(this,o,t,n,c,h,d,y,T,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function A0(s,t,e,n,i,r,o,a){let l;if(t.side===jn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===bs,a),l===null)return null;ko.copy(a),ko.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:s}}function Ho(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Oo),s.getVertexPosition(l,Fo),s.getVertexPosition(c,Bo);const h=A0(s,t,e,n,Oo,Fo,Bo,ru);if(h){const d=new G;Mi.getBarycoord(ru,Oo,Fo,Bo,d),i&&(h.uv=Mi.getInterpolatedAttribute(i,a,l,c,d,new Lt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,d,new Lt)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};Mi.getNormal(Oo,Fo,Bo,f.normal),h.face=f,h.barycoord=d}return h}const Nr=new mn,ou=new mn,au=new mn,R0=new mn,lu=new Ne,Go=new G,yl=new Ki,cu=new Ne,Sl=new _r;class C0 extends He{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bh,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(i),t.ray.intersectsSphere(yl)!==!1&&(cu.copy(i).invert(),Sl.copy(t.ray).applyMatrix4(cu),!(this.boundingBox!==null&&Sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new mn,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ou.fromBufferAttribute(i.attributes.skinIndex,t),au.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Nr.copy(e),e.set(0,0,0,0)):(Nr.set(e.x,e.y,e.z,1),e.set(0,0,0)),Nr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=au.getComponent(r);if(o!==0){const a=ou.getComponent(r);lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(R0.copy(Nr).applyMatrix4(lu),o)}}return e.isVector4&&(e.w=Nr.w),e.applyMatrix4(this.bindMatrixInverse)}}class rf extends vn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ha extends kn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Fn,h=Fn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new Ne,P0=new Ne;class ch{constructor(t=[],e=[]){this.uuid=Ii(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:P0;hu.multiplyMatrices(a,e[r]),hu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ch(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ha(e,t,t,Pi,yi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Pe("Skeleton: No bone found with UUID:",r),o=new rf),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ea extends Wn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Js=new Ne,uu=new Ne,Vo=[],du=new qi,L0=new Ne,Ur=new He,Or=new Ki;class fo extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ea(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),du.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(du)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Or.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),uu.multiplyMatrices(n,Js),Ur.matrixWorld=uu,Ur.raycast(t,Vo);for(let o=0,a=Vo.length;o<a;o++){const l=Vo[o];l.instanceId=r,l.object=this,e.push(l)}Vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(i*this.count),i,this.count,za,yi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rs=new Ki,D0=new Lt(.5,.5),Wo=new G;class po{constructor(t=new rs,e=new rs,n=new rs,i=new rs,r=new rs,o=new rs){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],T=r[13],b=r[14],L=r[15];if(i[0].setComponents(c-o,u-h,g-p,L-y).normalize(),i[1].setComponents(c+o,u+h,g+p,L+y).normalize(),i[2].setComponents(c+a,u+d,g+v,L+T).normalize(),i[3].setComponents(c-a,u-d,g-v,L-T).normalize(),n)i[4].setComponents(l,f,m,b).normalize(),i[5].setComponents(c-l,u-f,g-m,L-b).normalize();else if(i[4].setComponents(c-l,u-f,g-m,L-b).normalize(),e===Li)i[5].setComponents(c+l,u+f,g+m,L+b).normalize();else if(e===co)i[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const e=D0.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wo.x=i.normal.x>0?t.max.x:t.min.x,Wo.y=i.normal.y>0?t.max.y:t.min.y,Wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fu=new Ne;class hh{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new po),n[i].setFromProjectionMatrix(fu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new po),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new hh().copy(this)}}class of extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Aa=new G,Ra=new G,pu=new Ne,Fr=new _r,Xo=new Ki,bl=new G,mu=new G;class uh extends vn{constructor(t=new dn,e=new of){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Aa.fromBufferAttribute(e,i-1),Ra.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Aa.distanceTo(Ra);t.setAttribute("lineDistance",new Le(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;pu.copy(i).invert(),Fr.copy(t.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const g=h.getX(v),y=h.getX(v+1),T=Yo(this,t,Fr,l,g,y,v);T&&e.push(T)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(u),g=Yo(this,t,Fr,l,v,m,p-1);g&&e.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const g=Yo(this,t,Fr,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=Yo(this,t,Fr,l,p-1,u,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Aa.fromBufferAttribute(a,i),Ra.fromBufferAttribute(a,r),e.distanceSqToSegment(Aa,Ra,bl,mu)>n)return;bl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(bl);if(!(c<t.near||c>t.far))return{distance:c,point:mu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const gu=new G,_u=new G;class I0 extends uh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)gu.fromBufferAttribute(e,i),_u.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gu.distanceTo(_u);t.setAttribute("lineDistance",new Le(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class N0 extends uh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Qr extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xu=new Ne,Ac=new _r,qo=new Ki,Ko=new G;class Wr extends vn{constructor(t=new dn,e=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;xu.copy(i).invert(),Ac.copy(t.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,v=u;p<v;p++){const m=c.getX(p);Ko.fromBufferAttribute(d,m),vu(Ko,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,v=u;p<v;p++)Ko.fromBufferAttribute(d,p),vu(Ko,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vu(s,t,e,n,i,r,o){const a=Ac.distanceSqToPoint(s);if(a<e){const l=new G;Ac.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class af extends kn{constructor(t=[],e=hr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rc extends kn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Is extends kn{constructor(t,e,n=Di,i,r,o,a=Fn,l=Fn,c,h=ws,d=1){if(h!==ws&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class lf extends Is{constructor(t,e=Di,n=hr,i,r,o=Fn,a=Fn,l,c=ws){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cf extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ct extends dn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function p(v,m,g,y,T,b,L,R,M,w,z){const O=b/M,q=L/w,it=b/2,j=L/2,N=R/2,st=M+1,at=w+1;let $=0,ot=0;const nt=new G;for(let Q=0;Q<at;Q++){const St=Q*q-j;for(let Xt=0;Xt<st;Xt++){const ue=Xt*O-it;nt[v]=ue*y,nt[m]=St*T,nt[g]=N,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[g]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Xt/M),d.push(1-Q/w),$+=1}}for(let Q=0;Q<w;Q++)for(let St=0;St<M;St++){const Xt=f+St+st*Q,ue=f+St+st*(Q+1),gt=f+(St+1)+st*(Q+1),Vt=f+(St+1)+st*Q;l.push(Xt,ue,Vt),l.push(ue,gt,Vt),ot+=6}a.addGroup(u,ot,z),u+=ot,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ca extends dn{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=n*2+r,v=i+1,m=new G,g=new G;for(let y=0;y<=p;y++){let T=0,b=0,L=0,R=0;if(y<=n){const z=y/n,O=z*Math.PI/2;b=-h-t*Math.cos(O),L=t*Math.sin(O),R=-t*Math.cos(O),T=z*d}else if(y<=n+r){const z=(y-n)/r;b=-h+z*e,L=t,R=0,T=d+z*f}else{const z=(y-n-r)/n,O=z*Math.PI/2;b=h+t*Math.sin(O),L=t*Math.cos(O),R=t*Math.sin(O),T=d+f+z*d}const M=Math.max(0,Math.min(1,T/u));let w=0;y===0?w=.5/i:y===p&&(w=-.5/i);for(let z=0;z<=i;z++){const O=z/i,q=O*Math.PI*2,it=Math.sin(q),j=Math.cos(q);g.x=-L*j,g.y=b,g.z=L*it,a.push(g.x,g.y,g.z),m.set(-L*j,R,L*it),m.normalize(),l.push(m.x,m.y,m.z),c.push(O+w,M)}if(y>0){const z=(y-1)*v;for(let O=0;O<i;O++){const q=z+O,it=z+O+1,j=y*v+O,N=y*v+O+1;o.push(q,it,j),o.push(it,N,j)}}}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ri extends dn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new G,h=new Lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends dn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const v=[],m=n/2;let g=0;y(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(u,2));function y(){const b=new G,L=new G;let R=0;const M=(e-t)/n;for(let w=0;w<=r;w++){const z=[],O=w/r,q=O*(e-t)+t;for(let it=0;it<=i;it++){const j=it/i,N=j*l+a,st=Math.sin(N),at=Math.cos(N);L.x=q*st,L.y=-O*n+m,L.z=q*at,d.push(L.x,L.y,L.z),b.set(st,M,at).normalize(),f.push(b.x,b.y,b.z),u.push(j,1-O),z.push(p++)}v.push(z)}for(let w=0;w<i;w++)for(let z=0;z<r;z++){const O=v[z][w],q=v[z+1][w],it=v[z+1][w+1],j=v[z][w+1];(t>0||z!==0)&&(h.push(O,q,j),R+=3),(e>0||z!==r-1)&&(h.push(q,it,j),R+=3)}c.addGroup(g,R,0),g+=R}function T(b){const L=p,R=new Lt,M=new G;let w=0;const z=b===!0?t:e,O=b===!0?1:-1;for(let it=1;it<=i;it++)d.push(0,m*O,0),f.push(0,O,0),u.push(.5,.5),p++;const q=p;for(let it=0;it<=i;it++){const N=it/i*l+a,st=Math.cos(N),at=Math.sin(N);M.x=z*at,M.y=m*O,M.z=z*st,d.push(M.x,M.y,M.z),f.push(0,O,0),R.x=st*.5+.5,R.y=at*.5*O+.5,u.push(R.x,R.y),p++}for(let it=0;it<i;it++){const j=L+it,N=q+it;b===!0?h.push(N,N+1,j):h.push(N+1,N,j),w+=3}c.addGroup(g,w,b===!0?1:2),g+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ln extends ie{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ln(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ga extends dn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new G,b=new G,L=new G;for(let R=0;R<e.length;R+=3)u(e[R+0],T),u(e[R+1],b),u(e[R+2],L),l(T,b,L,y)}function l(y,T,b,L){const R=L+1,M=[];for(let w=0;w<=R;w++){M[w]=[];const z=y.clone().lerp(b,w/R),O=T.clone().lerp(b,w/R),q=R-w;for(let it=0;it<=q;it++)it===0&&w===R?M[w][it]=z:M[w][it]=z.clone().lerp(O,it/q)}for(let w=0;w<R;w++)for(let z=0;z<2*(R-w)-1;z++){const O=Math.floor(z/2);z%2===0?(f(M[w][O+1]),f(M[w+1][O]),f(M[w][O])):(f(M[w][O+1]),f(M[w+1][O+1]),f(M[w+1][O]))}}function c(y){const T=new G;for(let b=0;b<r.length;b+=3)T.x=r[b+0],T.y=r[b+1],T.z=r[b+2],T.normalize().multiplyScalar(y),r[b+0]=T.x,r[b+1]=T.y,r[b+2]=T.z}function h(){const y=new G;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const b=m(y)/2/Math.PI+.5,L=g(y)/Math.PI+.5;o.push(b,1-L)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){const T=o[y+0],b=o[y+2],L=o[y+4],R=Math.max(T,b,L),M=Math.min(T,b,L);R>.9&&M<.1&&(T<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,T){const b=y*3;T.x=t[b+0],T.y=t[b+1],T.z=t[b+2]}function p(){const y=new G,T=new G,b=new G,L=new G,R=new Lt,M=new Lt,w=new Lt;for(let z=0,O=0;z<r.length;z+=9,O+=6){y.set(r[z+0],r[z+1],r[z+2]),T.set(r[z+3],r[z+4],r[z+5]),b.set(r[z+6],r[z+7],r[z+8]),R.set(o[O+0],o[O+1]),M.set(o[O+2],o[O+3]),w.set(o[O+4],o[O+5]),L.copy(y).add(T).add(b).divideScalar(3);const q=m(L);v(R,O+0,y,q),v(M,O+2,T,q),v(w,O+4,b,q)}}function v(y,T,b,L){L<0&&y.x===1&&(o[T]=y.x-1),b.x===0&&b.z===0&&(o[T]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.vertices,t.indices,t.radius,t.detail)}}class Gi extends Ga{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gi(t.radius,t.detail)}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Lt:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new G,i=[],r=[],o=[],a=new G,l=new Ne;for(let u=0;u<=t;u++){const p=u/t;i[u]=this.getTangentAt(p,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Je(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Je(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class dh extends Zi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Lt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class U0 extends dh{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Mu=new G,yu=new G,wl=new fh,Tl=new fh,El=new fh;class hf extends Zi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(yu.subVectors(i[0],i[1]).add(i[0]),c=yu);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Mu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),wl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,v,m),Tl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,v,m),El.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Tl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),El.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(wl.calc(l),Tl.calc(l),El.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Su(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function O0(s,t){const e=1-s;return e*e*t}function F0(s,t){return 2*(1-s)*s*t}function B0(s,t){return s*s*t}function jr(s,t,e,n){return O0(s,t)+F0(s,e)+B0(s,n)}function z0(s,t){const e=1-s;return e*e*e*t}function k0(s,t){const e=1-s;return 3*e*e*s*t}function H0(s,t){return 3*(1-s)*s*s*t}function G0(s,t){return s*s*s*t}function to(s,t,e,n,i){return z0(s,t)+k0(s,e)+H0(s,n)+G0(s,i)}class uf extends Zi{constructor(t=new Lt,e=new Lt,n=new Lt,i=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Lt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(to(t,i.x,r.x,o.x,a.x),to(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V0 extends Zi{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(to(t,i.x,r.x,o.x,a.x),to(t,i.y,r.y,o.y,a.y),to(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends Zi{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W0 extends Zi{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends Zi{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(jr(t,i.x,r.x,o.x),jr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends Zi{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(jr(t,i.x,r.x,o.x),jr(t,i.y,r.y,o.y),jr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends Zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Su(a,l.x,c.x,h.x,d.x),Su(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Lt().fromArray(i))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:U0,CatmullRomCurve3:hf,CubicBezierCurve:uf,CubicBezierCurve3:V0,EllipseCurve:dh,LineCurve:df,LineCurve3:W0,QuadraticBezierCurve:ff,QuadraticBezierCurve3:pf,SplineCurve:mf});class X0 extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Pa[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class bu extends X0{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new df(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new ff(this.currentPoint.clone(),new Lt(t,e),new Lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new uf(this.currentPoint.clone(),new Lt(t,e),new Lt(n,i),new Lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new dh(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mo extends bu{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new bu().fromJSON(i))}return this}}function Y0(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=gf(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=$0(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){const u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return go(r,o,e,a,l,c,0),o}function gf(s,t,e,n,i){let r;if(i===lm(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=wu(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=wu(o/n|0,s[o],s[o+1],r);return r&&fr(r,r.next)&&(xo(r),r=r.next),r}function Ns(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(fr(e,e.next)||En(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function go(s,t,e,n,i,r,o){if(!s)return;!o&&r&&nm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?K0(s,n,i,r):q0(s)){t.push(l.i,s.i,c.i),xo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Z0(Ns(s),t),go(s,t,e,n,i,r,2)):o===2&&J0(s,t,e,n,i,r):go(Ns(s),t,e,n,i,r,1);break}}}function q0(s){const t=s.prev,e=s,n=s.next;if(En(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Xr(i,a,r,l,o,c,p.x,p.y)&&En(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function K0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(En(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),v=Math.max(a,l,c),m=Math.max(h,d,f),g=Cc(u,p,t,e,n),y=Cc(v,m,t,e,n);let T=s.prevZ,b=s.nextZ;for(;T&&T.z>=g&&b&&b.z<=y;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Xr(a,h,l,d,c,f,T.x,T.y)&&En(T.prev,T,T.next)>=0||(T=T.prevZ,b.x>=u&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Xr(a,h,l,d,c,f,b.x,b.y)&&En(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;T&&T.z>=g;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Xr(a,h,l,d,c,f,T.x,T.y)&&En(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;b&&b.z<=y;){if(b.x>=u&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Xr(a,h,l,d,c,f,b.x,b.y)&&En(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Z0(s,t){let e=s;do{const n=e.prev,i=e.next.next;!fr(n,i)&&xf(n,e,e.next,i)&&_o(n,i)&&_o(i,n)&&(t.push(n.i,e.i,i.i),xo(e),xo(e.next),e=s=i),e=e.next}while(e!==s);return Ns(e)}function J0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rm(o,a)){let l=vf(o,a);o=Ns(o,o.next),l=Ns(l,l.next),go(o,t,e,n,i,r,0),go(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $0(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=gf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(sm(c))}i.sort(Q0);for(let r=0;r<i.length;r++)e=j0(i[r],e);return e}function Q0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function j0(s,t){const e=tm(s,t);if(!e)return t;const n=vf(e,s);return Ns(n,n.next),Ns(e,e.next)}function tm(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(fr(s,e))return e;do{if(fr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_f(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);_o(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&em(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function em(s,t){return En(s.prev,s,t.prev)<0&&En(t.next,s,s.next)<0}function nm(s,t,e,n){let i=s;do i.z===0&&(i.z=Cc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,im(i)}function im(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Cc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function sm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _f(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Xr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&_f(s,t,e,n,i,r,o,a)}function rm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!om(s,t)&&(_o(s,t)&&_o(t,s)&&am(s,t)&&(En(s.prev,s,t.prev)||En(s,t.prev,t))||fr(s,t)&&En(s.prev,s,s.next)>0&&En(t.prev,t,t.next)>0)}function En(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function fr(s,t){return s.x===t.x&&s.y===t.y}function xf(s,t,e,n){const i=Jo(En(s,t,e)),r=Jo(En(s,t,n)),o=Jo(En(e,n,s)),a=Jo(En(e,n,t));return!!(i!==r&&o!==a||i===0&&Zo(s,e,t)||r===0&&Zo(s,n,t)||o===0&&Zo(e,s,n)||a===0&&Zo(e,t,n))}function Zo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jo(s){return s>0?1:s<0?-1:0}function om(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function _o(s,t){return En(s.prev,s,s.next)<0?En(s,t,s.next)>=0&&En(s,s.prev,t)>=0:En(s,t,s.prev)<0||En(s,s.next,t)<0}function am(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function vf(s,t){const e=Pc(s.i,s.x,s.y),n=Pc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(s,t,e,n){const i=Pc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class cm{static triangulate(t,e,n=2){return Y0(t,e,n)}}class as{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return as.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Tu(t),Eu(n,t);let o=t.length;e.forEach(Tu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Eu(n,e[l]);const a=cm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Tu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Eu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class La extends dn{constructor(t=new mo([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:hm;let T,b=!1,L,R,M,w;if(g){T=g.getSpacedPoints(h),b=!0,f=!1;const Et=g.isCatmullRomCurve3?g.closed:!1;L=g.computeFrenetFrames(h,Et),R=new G,M=new G,w=new G}f||(m=0,u=0,p=0,v=0);const z=a.extractPoints(c);let O=z.shape;const q=z.holes;if(!as.isClockWise(O)){O=O.reverse();for(let Et=0,qt=q.length;Et<qt;Et++){const Qt=q[Et];as.isClockWise(Qt)&&(q[Et]=Qt.reverse())}}function j(Et){const Qt=10000000000000001e-36;let oe=Et[0];for(let Dt=1;Dt<=Et.length;Dt++){const Re=Dt%Et.length,Kt=Et[Re],Ut=Kt.x-oe.x,Pt=Kt.y-oe.y,Bt=Ut*Ut+Pt*Pt,D=Math.max(Math.abs(Kt.x),Math.abs(Kt.y),Math.abs(oe.x),Math.abs(oe.y)),ee=Qt*D*D;if(Bt<=ee){Et.splice(Re,1),Dt--;continue}oe=Kt}}j(O),q.forEach(j);const N=q.length,st=O;for(let Et=0;Et<N;Et++){const qt=q[Et];O=O.concat(qt)}function at(Et,qt,Qt){return qt||ze("ExtrudeGeometry: vec does not exist"),Et.clone().addScaledVector(qt,Qt)}const $=O.length;function ot(Et,qt,Qt){let oe,Dt,Re;const Kt=Et.x-qt.x,Ut=Et.y-qt.y,Pt=Qt.x-Et.x,Bt=Qt.y-Et.y,D=Kt*Kt+Ut*Ut,ee=Kt*Bt-Ut*Pt;if(Math.abs(ee)>Number.EPSILON){const Jt=Math.sqrt(D),Ht=Math.sqrt(Pt*Pt+Bt*Bt),Rt=qt.x-Ut/Jt,te=qt.y+Kt/Jt,vt=Qt.x-Bt/Ht,ct=Qt.y+Pt/Ht,C=((vt-Rt)*Bt-(ct-te)*Pt)/(Kt*Bt-Ut*Pt);oe=Rt+Kt*C-Et.x,Dt=te+Ut*C-Et.y;const S=oe*oe+Dt*Dt;if(S<=2)return new Lt(oe,Dt);Re=Math.sqrt(S/2)}else{let Jt=!1;Kt>Number.EPSILON?Pt>Number.EPSILON&&(Jt=!0):Kt<-Number.EPSILON?Pt<-Number.EPSILON&&(Jt=!0):Math.sign(Ut)===Math.sign(Bt)&&(Jt=!0),Jt?(oe=-Ut,Dt=Kt,Re=Math.sqrt(D)):(oe=Kt,Dt=Ut,Re=Math.sqrt(D/2))}return new Lt(oe/Re,Dt/Re)}const nt=[];for(let Et=0,qt=st.length,Qt=qt-1,oe=Et+1;Et<qt;Et++,Qt++,oe++)Qt===qt&&(Qt=0),oe===qt&&(oe=0),nt[Et]=ot(st[Et],st[Qt],st[oe]);const Q=[];let St,Xt=nt.concat();for(let Et=0,qt=N;Et<qt;Et++){const Qt=q[Et];St=[];for(let oe=0,Dt=Qt.length,Re=Dt-1,Kt=oe+1;oe<Dt;oe++,Re++,Kt++)Re===Dt&&(Re=0),Kt===Dt&&(Kt=0),St[oe]=ot(Qt[oe],Qt[Re],Qt[Kt]);Q.push(St),Xt=Xt.concat(St)}let ue;if(m===0)ue=as.triangulateShape(st,q);else{const Et=[],qt=[];for(let Qt=0;Qt<m;Qt++){const oe=Qt/m,Dt=u*Math.cos(oe*Math.PI/2),Re=p*Math.sin(oe*Math.PI/2)+v;for(let Kt=0,Ut=st.length;Kt<Ut;Kt++){const Pt=at(st[Kt],nt[Kt],Re);re(Pt.x,Pt.y,-Dt),oe===0&&Et.push(Pt)}for(let Kt=0,Ut=N;Kt<Ut;Kt++){const Pt=q[Kt];St=Q[Kt];const Bt=[];for(let D=0,ee=Pt.length;D<ee;D++){const Jt=at(Pt[D],St[D],Re);re(Jt.x,Jt.y,-Dt),oe===0&&Bt.push(Jt)}oe===0&&qt.push(Bt)}}ue=as.triangulateShape(Et,qt)}const gt=ue.length,Vt=p+v;for(let Et=0;Et<$;Et++){const qt=f?at(O[Et],Xt[Et],Vt):O[Et];b?(M.copy(L.normals[0]).multiplyScalar(qt.x),R.copy(L.binormals[0]).multiplyScalar(qt.y),w.copy(T[0]).add(M).add(R),re(w.x,w.y,w.z)):re(qt.x,qt.y,0)}for(let Et=1;Et<=h;Et++)for(let qt=0;qt<$;qt++){const Qt=f?at(O[qt],Xt[qt],Vt):O[qt];b?(M.copy(L.normals[Et]).multiplyScalar(Qt.x),R.copy(L.binormals[Et]).multiplyScalar(Qt.y),w.copy(T[Et]).add(M).add(R),re(w.x,w.y,w.z)):re(Qt.x,Qt.y,d/h*Et)}for(let Et=m-1;Et>=0;Et--){const qt=Et/m,Qt=u*Math.cos(qt*Math.PI/2),oe=p*Math.sin(qt*Math.PI/2)+v;for(let Dt=0,Re=st.length;Dt<Re;Dt++){const Kt=at(st[Dt],nt[Dt],oe);re(Kt.x,Kt.y,d+Qt)}for(let Dt=0,Re=q.length;Dt<Re;Dt++){const Kt=q[Dt];St=Q[Dt];for(let Ut=0,Pt=Kt.length;Ut<Pt;Ut++){const Bt=at(Kt[Ut],St[Ut],oe);b?re(Bt.x,Bt.y+T[h-1].y,T[h-1].x+Qt):re(Bt.x,Bt.y,d+Qt)}}}ne(),fe();function ne(){const Et=i.length/3;if(f){let qt=0,Qt=$*qt;for(let oe=0;oe<gt;oe++){const Dt=ue[oe];ke(Dt[2]+Qt,Dt[1]+Qt,Dt[0]+Qt)}qt=h+m*2,Qt=$*qt;for(let oe=0;oe<gt;oe++){const Dt=ue[oe];ke(Dt[0]+Qt,Dt[1]+Qt,Dt[2]+Qt)}}else{for(let qt=0;qt<gt;qt++){const Qt=ue[qt];ke(Qt[2],Qt[1],Qt[0])}for(let qt=0;qt<gt;qt++){const Qt=ue[qt];ke(Qt[0]+$*h,Qt[1]+$*h,Qt[2]+$*h)}}n.addGroup(Et,i.length/3-Et,0)}function fe(){const Et=i.length/3;let qt=0;jt(st,qt),qt+=st.length;for(let Qt=0,oe=q.length;Qt<oe;Qt++){const Dt=q[Qt];jt(Dt,qt),qt+=Dt.length}n.addGroup(Et,i.length/3-Et,1)}function jt(Et,qt){let Qt=Et.length;for(;--Qt>=0;){const oe=Qt;let Dt=Qt-1;Dt<0&&(Dt=Et.length-1);for(let Re=0,Kt=h+m*2;Re<Kt;Re++){const Ut=$*Re,Pt=$*(Re+1),Bt=qt+oe+Ut,D=qt+Dt+Ut,ee=qt+Dt+Pt,Jt=qt+oe+Pt;xe(Bt,D,ee,Jt)}}}function re(Et,qt,Qt){l.push(Et),l.push(qt),l.push(Qt)}function ke(Et,qt,Qt){ve(Et),ve(qt),ve(Qt);const oe=i.length/3,Dt=y.generateTopUV(n,i,oe-3,oe-2,oe-1);Te(Dt[0]),Te(Dt[1]),Te(Dt[2])}function xe(Et,qt,Qt,oe){ve(Et),ve(qt),ve(oe),ve(qt),ve(Qt),ve(oe);const Dt=i.length/3,Re=y.generateSideWallUV(n,i,Dt-6,Dt-3,Dt-2,Dt-1);Te(Re[0]),Te(Re[1]),Te(Re[3]),Te(Re[1]),Te(Re[2]),Te(Re[3])}function ve(Et){i.push(l[Et*3+0]),i.push(l[Et*3+1]),i.push(l[Et*3+2])}function Te(Et){r.push(Et.x),r.push(Et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return um(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Pa[i.type]().fromJSON(i)),new La(n,t.options)}}const hm={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Lt(r,o),new Lt(a,l),new Lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Lt(o,1-l),new Lt(c,1-d),new Lt(f,1-p),new Lt(v,1-g)]:[new Lt(a,1-l),new Lt(h,1-d),new Lt(u,1-p),new Lt(m,1-g)]}};function um(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ph extends dn{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Je(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new G,f=new Lt,u=new G,p=new G,v=new G;let m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,u.x=g*1,u.y=-m,u.z=g*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(p)}for(let y=0;y<=e;y++){const T=n+y*h*i,b=Math.sin(T),L=Math.cos(T);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*b,d.y=t[R].y,d.z=t[R].x*L,o.push(d.x,d.y,d.z),f.x=y/e,f.y=R/(t.length-1),a.push(f.x,f.y);const M=l[3*R+0]*b,w=l[3*R+1],z=l[3*R+0]*L;c.push(M,w,z)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){const b=T+y*t.length,L=b,R=b+t.length,M=b+t.length+1,w=b+1;r.push(L,R,w),r.push(M,w,R)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.points,t.segments,t.phiStart,t.phiLength)}}class mh extends Ga{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mh(t.radius,t.detail)}}class cn extends dn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const y=g*f-o;for(let T=0;T<c;T++){const b=T*d-r;p.push(b,-y,0),v.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const T=y+c*g,b=y+c*(g+1),L=y+1+c*(g+1),R=y+1+c*g;u.push(T,b,R),u.push(b,L,R)}this.setIndex(u),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class gh extends dn{constructor(t=new mo([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(o,2));function c(h){const d=i.length/3,f=h.extractPoints(e);let u=f.shape;const p=f.holes;as.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];as.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=as.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){const y=u[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){const y=v[m],T=y[0]+d,b=y[1]+d,L=y[2]+d;n.push(T,b,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return dm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new gh(n,t.curveSegments)}}function dm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class an extends dn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new G,f=new G,u=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const y=[],T=g/n,b=o+T*a,L=t*Math.cos(b),R=Math.sqrt(t*t-L*L);let M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const z=w/e,O=i+z*r;d.x=-R*Math.cos(O),d.y=L,d.z=R*Math.sin(O),p.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(z+M,1-T),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const T=h[g][y+1],b=h[g][y],L=h[g+1][y],R=h[g+1][y+1];(g!==0||o>0)&&u.push(T,b,R),(g!==n-1||l<Math.PI)&&u.push(b,L,R)}this.setIndex(u),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pn extends dn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new G,u=new G,p=new G;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let g=0;g<=i;g++){const y=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,y=(i+1)*(v-1)+m-1,T=(i+1)*(v-1)+m,b=(i+1)*v+m;l.push(g,y,b),l.push(y,T,b)}this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class _h extends dn{constructor(t=new pf(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new G,l=new G,c=new Lt;let h=new G;const d=[],f=[],u=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(u,2));function v(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),y(),g()}function m(T){h=t.getPointAt(T/e,h);const b=o.normals[T],L=o.binormals[T];for(let R=0;R<=i;R++){const M=R/i*Math.PI*2,w=Math.sin(M),z=-Math.cos(M);l.x=z*b.x+w*L.x,l.y=z*b.y+w*L.y,l.z=z*b.z+w*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let T=1;T<=e;T++)for(let b=1;b<=i;b++){const L=(i+1)*(T-1)+(b-1),R=(i+1)*T+(b-1),M=(i+1)*T+b,w=(i+1)*(T-1)+b;p.push(L,R,w),p.push(R,M,w)}}function y(){for(let T=0;T<=e;T++)for(let b=0;b<=i;b++)c.x=T/e,c.y=b/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _h(new Pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function pr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Au(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Au(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ri(s){const t={};for(let e=0;e<s.length;e++){const n=pr(s[e]);for(const i in n)t[i]=n[i]}return t}function Au(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rn.workingColorSpace}const vo={clone:pr,merge:ri};var pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class yf extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mr extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ni extends mr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ar('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ar('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fa extends pi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class gm extends pi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class _m extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ms(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Yr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function vm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Ru(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Mm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class xr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class ym extends xr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sr:r=t,a=2*e-n;break;case Sa:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sr:o=t,l=2*n-e;break;case Sa:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,T=(-1-u)*m+(1.5+u)*v+.5*p,b=u*m-u*v;for(let L=0;L!==a;++L)r[L]=g*o[h+L]+y*o[c+L]+T*o[l+L]+b*o[d+L];return r}}class Sf extends xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class Sm extends xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class bm extends xr{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}const f=a*2,u=t-1;for(let p=0;p!==a;++p){const v=o[c+p],m=o[l+p],g=u*f+p*2,y=d[g],T=d[g+1],b=t*f+p*2,L=h[b],R=h[b+1],M=Tm(n,e,y,L,i);r[p]=bf(M,v,T,R,m)}return r}}function bf(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function wm(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Tm(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=bf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=wm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Ui{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Yr(t.settings)&&(n.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ym(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new bm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break;case zh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Qa;case this.InterpolantFactoryMethodBezier:return zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Yr(this.settings)&&(Cu(this.settings.inTangents,t),Cu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Yr(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ze("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Gp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const v=e[d+p];if(v!==e[f+p]||v!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Yr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Cu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Pu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=ao;class vr extends Ui{constructor(t,e,n){super(t,e,n)}}vr.prototype.ValueTypeName="bool";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=oo;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class wf extends Ui{constructor(t,e,n,i){super(t,e,n,i)}}wf.prototype.ValueTypeName="color";class Mo extends Ui{constructor(t,e,n,i){super(t,e,n,i)}}Mo.prototype.ValueTypeName="number";class Em extends xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class yo extends Ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Em(this.times,this.values,this.getValueSize(),t)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends Ui{constructor(t,e,n){super(t,e,n)}}Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=oo;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Da extends Ui{constructor(t,e,n,i){super(t,e,n,i)}}Da.prototype.ValueTypeName="vector";class Lc{constructor(t="",e=-1,n=[],i=nh){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Rm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=vm(l);l=Ru(l,1,h),c=Ru(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mo(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Am(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return Da;case"color":return wf;case"quaternion":return yo;case"bool":case"boolean":return vr;case"string":return Mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Am(s.type);if(s.times===void 0){const n=[],i=[];Mm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Yr(s.settings)&&(e.settings={inTangents:Ms(s.settings.inTangents,Float32Array),outTangents:Ms(s.settings.outTangents,Float32Array)}),e}const ls={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Lu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Lu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Tf{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cm=new Tf;class yr{constructor(t){this.manager=t!==void 0?t:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const is={};class Pm extends Error{constructor(t,e){super(t),this.response=e}}class Ef extends yr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ls.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(is[t]!==void 0){is[t].push({onLoad:e,onProgress:n,onError:i});return}is[t]=[],is[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=is[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let v=0;const m=new ReadableStream({start(g){y();function y(){d.read().then(({done:T,value:b})=>{if(T)g.close();else{v+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:u});for(let R=0,M=h.length;R<M;R++){const w=h[R];w.onProgress&&w.onProgress(L)}g.enqueue(b),y()}},T=>{g.error(T)})}}});return new Response(m)}else throw new Pm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{ls.add(`file:${t}`,c);const h=is[t];delete is[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=is[t];if(h===void 0)throw this.manager.itemError(t),c;delete is[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $s=new WeakMap;class Lm extends yr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ls.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=$s.get(o);d===void 0&&(d=[],$s.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=ho("img");function l(){h(),e&&e(this);const d=$s.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}$s.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),ls.remove(`image:${t}`);const f=$s.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}$s.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ls.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Dm extends yr{constructor(t){super(t)}load(t,e,n,i){const r=new kn,o=new Lm(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Va extends vn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Im extends Va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Al=new Ne,Du=new G,Iu=new G;class xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Al,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===co||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $o=new G,Qo=new bn,Fi=new G;class Af extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($o,Qo,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Qo,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($o,Qo,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Qo,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new G,Nu=new Lt,Uu=new Lt;class ci extends Af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,Uu),e.subVectors(Uu,Nu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Nm extends xh{constructor(){super(new ci(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=dr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Um extends Va{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Om extends xh{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class cs extends Va{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Om}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Wa extends Af{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fm extends xh{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rf extends Va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Fm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class eo{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Rl=new WeakMap;class Bm extends yr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ls.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Rl.has(o)===!0?(i&&i(Rl.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Rl.set(l,c),ls.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ls.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qs=-90,js=1;class Dc extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ci(Qs,js,t,e);i.layers=this.layers,this.add(i);const r=new ci(Qs,js,t,e);r.layers=this.layers,this.add(r);const o=new ci(Qs,js,t,e);o.layers=this.layers,this.add(o);const a=new ci(Qs,js,t,e);a.layers=this.layers,this.add(a);const l=new ci(Qs,js,t,e);l.layers=this.layers,this.add(l);const c=new ci(Qs,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zm extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class km{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Hm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Hm(){this._document.hidden===!1&&this.reset()}class Gm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){bn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;bn.multiplyQuaternionsFlat(t,o,t,e,t,n),bn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const vh="\\[\\]\\.:\\/",Vm=new RegExp("["+vh+"]","g"),Mh="[^"+vh+"]",Wm="[^"+vh.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",Mh),Ym=/(WCOD+)?/.source.replace("WCOD",Wm),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),Km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),Zm=new RegExp("^"+Xm+Ym+qm+Km+"$"),Jm=["material","materials","bones","map"];class $m{constructor(t,e,n){const i=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pn{constructor(t,e,n){this.path=e,this.parsedPath=n||pn.parseTrackName(e),this.node=pn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pn.Composite(t,e,n):new pn(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vm,"")}static parseTrackName(t){const e=Zm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=pn.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pn.Composite=$m;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qm{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ir,endingEnd:ir};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Cp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Lp:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case nh:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Pp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Rp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=sr,i.endingEnd=sr):(t?i.endingStart=this.zeroSlopeAtStart?sr:ir:i.endingStart=Sa,e?i.endingEnd=this.zeroSlopeAtEnd?sr:ir:i.endingEnd=Sa)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const jm=new Float32Array(1);class tg extends fs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}const v=e&&e._propertyBindings[d].binding.parsedPath;p=new Gm(pn.create(n,u,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Sf(new Float32Array(2),new Float32Array(2),1,jm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?Lc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=nh),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Qm(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Lc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Ou=new Ne;class Cf{constructor(t,e,n=0,i=1/0){this.ray=new _r(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ze("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ou),this}intersectObject(t,e=!0,n=[]){return Ic(t,this,n,e),n.sort(Fu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ic(t[i],this,n,e);return n.sort(Fu),n}}function Fu(s,t){return s.distance-t.distance}function Ic(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Ic(r[o],t,e,!0)}}class Bu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eg extends fs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function zu(s,t,e,n){const i=ng(n);switch(e){case Vd:return s*t;case za:return s*t/i.components*i.byteLength;case jc:return s*t/i.components*i.byteLength;case Ds:return s*t*2/i.components*i.byteLength;case th:return s*t*2/i.components*i.byteLength;case Wd:return s*t*3/i.components*i.byteLength;case Pi:return s*t*4/i.components*i.byteLength;case eh:return s*t*4/i.components*i.byteLength;case ca:case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $l:case jl:return Math.max(s,16)*Math.max(t,8)/4;case Jl:case Ql:return Math.max(s,8)*Math.max(t,8)/2;case tc:case ec:case ic:case sc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nc:case Ma:case rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mc:case yc:case Sc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bc:case wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ya:case Tc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ng(s){switch(s){case fi:case zd:return{byteLength:1,components:1};case ro:case kd:case ti:return{byteLength:2,components:1};case $c:case Qc:return{byteLength:2,components:4};case Di:case Jc:case yi:return{byteLength:4,components:1};case Hd:case Gd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Pf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ig(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],v=d[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const v=d[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
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
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,xg=`#ifdef USE_BUMPMAP
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ag=`#define PI 3.141592653589793
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
} // validated`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
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
#endif`,e_=`uniform sampler2D dfgLUT;
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
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
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform float backgroundBlurriness;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,wx=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,Ex=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:hg,aomap_pars_fragment:ug,batching_pars_vertex:dg,batching_vertex:fg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:_g,bumpmap_pars_fragment:xg,clipping_planes_fragment:vg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:Sg,color_fragment:bg,color_pars_fragment:wg,color_pars_vertex:Tg,color_vertex:Eg,common:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ig,colorspace_pars_fragment:Ng,envmap_fragment:Ug,envmap_common_pars_fragment:Og,envmap_pars_fragment:Fg,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Zg,envmap_vertex:zg,fog_vertex:kg,fog_pars_vertex:Hg,fog_fragment:Gg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:qg,lights_pars_begin:Kg,lights_toon_fragment:Jg,lights_toon_pars_fragment:$g,lights_phong_fragment:Qg,lights_phong_pars_fragment:jg,lights_physical_fragment:t_,lights_physical_pars_fragment:e_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:s_,lightprobes_pars_fragment:r_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:h_,map_pars_fragment:u_,map_particle_fragment:d_,map_particle_pars_fragment:f_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphinstance_vertex:g_,morphcolor_vertex:__,morphnormal_vertex:x_,morphtarget_pars_vertex:v_,morphtarget_vertex:M_,normal_fragment_begin:y_,normal_fragment_maps:S_,normal_pars_fragment:b_,normal_pars_vertex:w_,normal_vertex:T_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:P_,opaque_fragment:L_,packing:D_,premultiplied_alpha_fragment:I_,project_vertex:N_,dithering_fragment:U_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:k_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:V_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:Y_,specularmap_fragment:q_,specularmap_pars_fragment:K_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:$_,transmission_pars_fragment:Q_,uv_pars_fragment:j_,uv_pars_vertex:tx,uv_vertex:ex,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:hx,distance_vert:ux,distance_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:xx,meshlambert_vert:vx,meshlambert_frag:Mx,meshmatcap_vert:yx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:wx,meshphong_vert:Tx,meshphong_frag:Ex,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Lx,points_frag:Dx,shadow_vert:Ix,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Ox},_e={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ki={basic:{uniforms:ri([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:ri([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:ri([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:ri([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:ri([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ye(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:ri([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:ri([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:ri([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:ri([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:ri([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:ri([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:ri([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:ri([_e.lights,_e.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ki.physical={uniforms:ri([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const jo={r:0,b:0,g:0},Fx=new Ne,Lf=new Xe;Lf.set(-1,0,0,0,1,0,0,0,1);function Bx(s,t,e,n,i,r){const o=new ye(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=t.get(T,b)}return T}function p(y){let T=!1;const b=u(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),T=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,T){const b=u(T);b&&b.isCubeTexture?(c===void 0&&(c=new He(new Ct(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:pr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lf),c.material.toneMapped=rn.getTransfer(b.colorSpace)!==fn,(h!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new He(new cn(2,2),new ai({name:"BackgroundMaterial",uniforms:pr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=rn.getTransfer(b.colorSpace)!==fn,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(jo,Mf(s)),e.buffers.color.setClear(jo.r,jo.g,jo.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function zx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(q,it,j,N,st){let at=!1;const $=d(q,N,j,it);r!==$&&(r=$,c(r.object)),at=u(q,N,j,st),at&&p(q,N,j,st),st!==null&&t.update(st,s.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,b(q,it,j,N),st!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return s.createVertexArray()}function c(q){return s.bindVertexArray(q)}function h(q){return s.deleteVertexArray(q)}function d(q,it,j,N){const st=N.wireframe===!0;let at=n[it.id];at===void 0&&(at={},n[it.id]=at);const $=q.isInstancedMesh===!0?q.id:0;let ot=at[$];ot===void 0&&(ot={},at[$]=ot);let nt=ot[j.id];nt===void 0&&(nt={},ot[j.id]=nt);let Q=nt[st];return Q===void 0&&(Q=f(l()),nt[st]=Q),Q}function f(q){const it=[],j=[],N=[];for(let st=0;st<e;st++)it[st]=0,j[st]=0,N[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:it,enabledAttributes:j,attributeDivisors:N,object:q,attributes:{},index:null}}function u(q,it,j,N){const st=r.attributes,at=it.attributes;let $=0;const ot=j.getAttributes();for(const nt in ot)if(ot[nt].location>=0){const St=st[nt];let Xt=at[nt];if(Xt===void 0&&(nt==="instanceMatrix"&&q.instanceMatrix&&(Xt=q.instanceMatrix),nt==="instanceColor"&&q.instanceColor&&(Xt=q.instanceColor)),St===void 0||St.attribute!==Xt||Xt&&St.data!==Xt.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function p(q,it,j,N){const st={},at=it.attributes;let $=0;const ot=j.getAttributes();for(const nt in ot)if(ot[nt].location>=0){let St=at[nt];St===void 0&&(nt==="instanceMatrix"&&q.instanceMatrix&&(St=q.instanceMatrix),nt==="instanceColor"&&q.instanceColor&&(St=q.instanceColor));const Xt={};Xt.attribute=St,St&&St.data&&(Xt.data=St.data),st[nt]=Xt,$++}r.attributes=st,r.attributesNum=$,r.index=N}function v(){const q=r.newAttributes;for(let it=0,j=q.length;it<j;it++)q[it]=0}function m(q){g(q,0)}function g(q,it){const j=r.newAttributes,N=r.enabledAttributes,st=r.attributeDivisors;j[q]=1,N[q]===0&&(s.enableVertexAttribArray(q),N[q]=1),st[q]!==it&&(s.vertexAttribDivisor(q,it),st[q]=it)}function y(){const q=r.newAttributes,it=r.enabledAttributes;for(let j=0,N=it.length;j<N;j++)it[j]!==q[j]&&(s.disableVertexAttribArray(j),it[j]=0)}function T(q,it,j,N,st,at,$){$===!0?s.vertexAttribIPointer(q,it,j,st,at):s.vertexAttribPointer(q,it,j,N,st,at)}function b(q,it,j,N){v();const st=N.attributes,at=j.getAttributes(),$=it.defaultAttributeValues;for(const ot in at){const nt=at[ot];if(nt.location>=0){let Q=st[ot];if(Q===void 0&&(ot==="instanceMatrix"&&q.instanceMatrix&&(Q=q.instanceMatrix),ot==="instanceColor"&&q.instanceColor&&(Q=q.instanceColor)),Q!==void 0){const St=Q.normalized,Xt=Q.itemSize,ue=t.get(Q);if(ue===void 0)continue;const gt=ue.buffer,Vt=ue.type,ne=ue.bytesPerElement,fe=Vt===s.INT||Vt===s.UNSIGNED_INT||Q.gpuType===Jc;if(Q.isInterleavedBufferAttribute){const jt=Q.data,re=jt.isInterleavedBuffer===!0?jt.stride:jt.itemSize,ke=Q.offset;if(jt.isInstancedInterleavedBuffer||jt.isInstancedBufferAttribute){for(let xe=0;xe<nt.locationSize;xe++)g(nt.location+xe,jt.meshPerAttribute);q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let xe=0;xe<nt.locationSize;xe++)m(nt.location+xe);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let xe=0;xe<nt.locationSize;xe++)T(nt.location+xe,Xt/nt.locationSize,Vt,St,re*ne,(ke+Xt/nt.locationSize*xe)*ne,fe)}else{if(Q.isInstancedBufferAttribute){for(let jt=0;jt<nt.locationSize;jt++)g(nt.location+jt,Q.meshPerAttribute);q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let jt=0;jt<nt.locationSize;jt++)m(nt.location+jt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let jt=0;jt<nt.locationSize;jt++)T(nt.location+jt,Xt/nt.locationSize,Vt,St,Xt*ne,Xt/nt.locationSize*jt*ne,fe)}}else if($!==void 0){const St=$[ot];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(nt.location,St);break;case 3:s.vertexAttrib3fv(nt.location,St);break;case 4:s.vertexAttrib4fv(nt.location,St);break;default:s.vertexAttrib1fv(nt.location,St)}}}}y()}function L(){z();for(const q in n){const it=n[q];for(const j in it){const N=it[j];for(const st in N){const at=N[st];for(const $ in at)h(at[$].object),delete at[$];delete N[st]}}delete n[q]}}function R(q){if(n[q.id]===void 0)return;const it=n[q.id];for(const j in it){const N=it[j];for(const st in N){const at=N[st];for(const $ in at)h(at[$].object),delete at[$];delete N[st]}}delete n[q.id]}function M(q){for(const it in n){const j=n[it];for(const N in j){const st=j[N];if(st[q.id]===void 0)continue;const at=st[q.id];for(const $ in at)h(at[$].object),delete at[$];delete st[q.id]}}}function w(q){for(const it in n){const j=n[it],N=q.isInstancedMesh===!0?q.id:0,st=j[N];if(st!==void 0){for(const at in st){const $=st[at];for(const ot in $)h($[ot].object),delete $[ot];delete st[at]}delete j[N],Object.keys(j).length===0&&delete n[it]}}}function z(){O(),o=!0,r!==i&&(r=i,c(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:z,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function kx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Hx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Pi&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const w=M===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==fi&&M!==yi&&!w&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:L,samples:R}}function Gx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new rs,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,T=y*4;let b=g.clippingState||null;l.value=b,b=h(p,f,T,u);for(let L=0;L!==T;++L)b[L]=e[L];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=u+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,b=u;T!==v;++T,b+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class yh extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new af(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ct(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Ls});r.uniforms.tEquirect.value=e;const o=new He(i,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=qn),new Dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const ku=256,Vx=3,Wx=20,Df=256,If=16,Xx=3,Yx=new G,qx=new ye;class Ia{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Dc(1,10,null),this._boxMesh=new He(new Ct(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Yx}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(qx));const m=new Dc(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ku,$d(t))}_fromTexture(t,e){t.mapping===hr||t.mapping===so?this._setSize(t.image.length===0?ku:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Hu(t,!1,!1),n=Math.log2(t)-Vx;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===hr||t.mapping===so?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Kx(),this._integrationMaterial=Zx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/If);for(let o=0;o<=n;o++){const a=Ia.lodToRoughness(o,n);if(o>n-Xx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Df*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Jx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function Hu(s,t,e){return new yh(s,{minFilter:Vi,generateMipmaps:t,type:ti,colorSpace:mi,depthBuffer:e})}function So(s,t,e){return new ai({name:s,uniforms:t,vertexShader:je.cube_vert,fragmentShader:e,side:jn,blending:Ls,depthTest:!1,depthWrite:!1})}function Kx(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Df}u

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
	`)}function Zx(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:If}},`

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
	`)}function Jx(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wx}
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
	`)}function Gu(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Vu(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $x(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Ja||u===$a)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const v=new yh(p.height);return v.fromEquirectangularTexture(s,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Ja||u===$a,v=u===hr||u===so;if(p||v){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ia(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return p&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Ia(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Ja?f.mapping=hr:u===$a&&(f.mapping=so),f}function l(f){let u=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Qx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ar("WebGLRenderer: "+n+" extension not supported."),i}}}function jx(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(p){const v=p.attributes;for(const m in v)t.update(v[m],s.ARRAY_BUFFER)}function d(p){const v=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const y=v!==null?v.array.length:m.array.length/3-1,T=m.count>=65535?ef:tf,b=new T(Math.ceil(y/3)*6,1),L=b.array;if(v!==null){const M=v.array;g=v.version;for(let w=0,z=0;w<y;w+=3){const O=M[w+0],q=M[w+1],it=M[w+2];L[z++]=O,L[z++]=q,L[z++]=q,L[z++]=it,L[z++]=it,L[z++]=O}}else{g=m.version;for(let M=0,w=0;M<y;M+=3){const z=M+0,O=M+1,q=M+2;L[w++]=z,L[w++]=O,L[w++]=O,L[w++]=q,L[w++]=q,L[w++]=z}}b.version=g;const R=r.get(p);R&&t.remove(R),r.set(p,b)}function f(p){const v=r.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function tv(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ev(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function nv(s,t,e){const n=new WeakMap,i=new mn;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let z=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;u===!0&&(T=1),p===!0&&(T=2),v===!0&&(T=3);let b=a.attributes.position.count*T,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*L*4*d),M=new Qd(R,b,L,d);M.type=yi,M.needsUpdate=!0;const w=T*4;for(let O=0;O<d;O++){const q=m[O],it=g[O],j=y[O],N=b*L*4*O;for(let st=0;st<q.count;st++){const at=st*w;u===!0&&(i.fromBufferAttribute(q,st),R[N+at+0]=i.x,R[N+at+1]=i.y,R[N+at+2]=i.z,R[N+at+3]=0),p===!0&&(i.fromBufferAttribute(it,st),R[N+at+4]=i.x,R[N+at+5]=i.y,R[N+at+6]=i.z,R[N+at+7]=0),v===!0&&(i.fromBufferAttribute(j,st),R[N+at+8]=i.x,R[N+at+9]=i.y,R[N+at+10]=i.z,R[N+at+11]=j.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new Lt(b,L)},n.set(a,f),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function iv(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const sv={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[Ba]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};function rv(s,t,e,n,i,r){const o=new ei(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new dn;h.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Le([0,2,0,0,2,0],2));const d=new yf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new He(h,d),u=new Wa(-1,1,1,-1,0,1);let p=null,v=null,m=!1,g,y=null,T=[],b=!1;this.setSize=function(L,R){o.setSize(L,R),a!==null&&a.setSize(L,R),l!==null&&l.setSize(L,R);for(let M=0;M<T.length;M++){const w=T[M];w.setSize&&w.setSize(L,R)}},this.setEffects=function(L){T=L,b=T.length>0&&T[0].isRenderPass===!0;const R=o.width,M=o.height;T.length>0&&a===null&&(a=new ei(R,M,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new ei(R,M,{type:ti,depthBuffer:!1,stencilBuffer:!1}));const w=i===!0&&T.some(z=>z.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Is(R,M),r===!0&&(c.format=Ss,c.type=ur)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let z=0;z<T.length;z++){const O=T[z];O.setSize&&O.setSize(R,M),w&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(L,R){if(m||L.toneMapping===hs&&T.length===0)return!1;if(y=R,R!==null){const M=R.width,w=R.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return b===!1&&L.setRenderTarget(o),g=L.toneMapping,L.toneMapping=hs,!0},this.hasRenderPass=function(){return b},this.end=function(L,R){L.toneMapping=g,m=!0;let M=o,w=a;for(let z=0;z<T.length;z++){const O=T[z];O.enabled!==!1&&(O.render(L,w,M,R),O.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(p!==L.outputColorSpace||v!==L.toneMapping){p=L.outputColorSpace,v=L.toneMapping,d.defines={},rn.getTransfer(p)===fn&&(d.defines.SRGB_TRANSFER="");const z=sv[v];z&&(d.defines[z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,L.setRenderTarget(y),L.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Nf=new kn,Uf=new Is(1,1),Of=new lf(1),Ff=new Qd,Bf=new d0,zf=new af,Wu=[],Xu=[],Yu=new Float32Array(16),qu=new Float32Array(9),Ku=new Float32Array(4);function Sr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Wu[i];if(r===void 0&&(r=new Float32Array(i),Wu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Hn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Gn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xa(s,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ov(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function av(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;s.uniform2fv(this.addr,t),Gn(e,t)}}function lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Hn(e,t))return;s.uniform3fv(this.addr,t),Gn(e,t)}}function cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;s.uniform4fv(this.addr,t),Gn(e,t)}}function hv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Hn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,n))return;Ku.set(n),s.uniformMatrix2fv(this.addr,!1,Ku),Gn(e,n)}}function uv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Hn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,n))return;qu.set(n),s.uniformMatrix3fv(this.addr,!1,qu),Gn(e,n)}}function dv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Hn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,n))return;Yu.set(n),s.uniformMatrix4fv(this.addr,!1,Yu),Gn(e,n)}}function fv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;s.uniform2iv(this.addr,t),Gn(e,t)}}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Hn(e,t))return;s.uniform3iv(this.addr,t),Gn(e,t)}}function gv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;s.uniform4iv(this.addr,t),Gn(e,t)}}function _v(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;s.uniform2uiv(this.addr,t),Gn(e,t)}}function vv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Hn(e,t))return;s.uniform3uiv(this.addr,t),Gn(e,t)}}function Mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;s.uniform4uiv(this.addr,t),Gn(e,t)}}function Ya(s){return s.version===0&&(s.compareFunction=Kd,s.needsUpdate=!0),s}function yv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ya(Uf):r=Nf,e.setTexture2D(t||r,i)}function Sv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bf,i)}function bv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ya(Of):r=zf,e.setTextureCube(t||r,i)}function wv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ff,i)}function Tv(s){switch(s){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return hv;case 35675:return uv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return _v;case 36294:return xv;case 36295:return vv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return wv}}function Ev(s,t){s.uniform1fv(this.addr,t)}function Av(s,t){const e=Sr(t,this.size,2);s.uniform2fv(this.addr,e)}function Rv(s,t){const e=Sr(t,this.size,3);s.uniform3fv(this.addr,e)}function Cv(s,t){const e=Sr(t,this.size,4);s.uniform4fv(this.addr,e)}function Pv(s,t){const e=Sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lv(s,t){const e=Sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dv(s,t){const e=Sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Iv(s,t){s.uniform1iv(this.addr,t)}function Nv(s,t){s.uniform2iv(this.addr,t)}function Uv(s,t){s.uniform3iv(this.addr,t)}function Ov(s,t){s.uniform4iv(this.addr,t)}function Fv(s,t){s.uniform1uiv(this.addr,t)}function Bv(s,t){s.uniform2uiv(this.addr,t)}function zv(s,t){s.uniform3uiv(this.addr,t)}function kv(s,t){s.uniform4uiv(this.addr,t)}function Hv(s,t,e){const n=this.cache,i=t.length,r=Xa(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ya(Uf):o=Nf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Gv(s,t,e){const n=this.cache,i=t.length,r=Xa(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Bf,r[o])}function Vv(s,t,e){const n=this.cache,i=t.length,r=Xa(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ya(Of):o=zf;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Wv(s,t,e){const n=this.cache,i=t.length,r=Xa(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ff,r[o])}function Xv(s){switch(s){case 5126:return Ev;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Iv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return Bv;case 36295:return zv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Wv}}class Yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tv(e.type)}}class qv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xv(e.type)}}class Kv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function Zu(s,t){s.seq.push(t),s.map[t.id]=t}function Zv(s,t,e){const n=s.name,i=n.length;for(Cl.lastIndex=0;;){const r=Cl.exec(n),o=Cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zu(e,c===void 0?new Yv(a,s,t):new qv(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Kv(a),Zu(e,d)),e=d}}}class pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Zv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ju(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jv=37297;let $v=0;function Qv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $u=new Xe;function jv(s){rn._getMatrix($u,rn.workingColorSpace,s);const t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(rn.getTransfer(s)){case ba:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qv(s.getShaderSource(t),a)}else return r}function tM(s,t){const e=jv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const eM={[Wc]:"Linear",[Xc]:"Reinhard",[Yc]:"Cineon",[Ba]:"ACESFilmic",[Kc]:"AgX",[Zc]:"Neutral",[qc]:"Custom"};function nM(s,t){const e=eM[t];return e===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new G;function iM(){rn.getLuminanceCoefficients(ta);const s=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function rM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function qr(s){return s!==""}function ju(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function td(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(aM,lM)}function lM(s,t){const e=je[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nc(e)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(s){return s.replace(cM,hM)}function hM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const uM={[Zr]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function dM(s){return uM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fM={[so]:"ENVMAP_MODE_REFRACTION"};function pM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":fM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mM={[Od]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function gM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mM[s.combine]||"ENVMAP_BLENDING_NONE"}function _M(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=dM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=pM(e),d=gM(e),f=sM(e),u=rM(r),p=i.createProgram();let v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(qr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(qr).join(`
`),m.length>0&&(m+=`
`)):(v=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),m=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?je.tonemapping_pars_fragment:"",e.toneMapping!==hs?nM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,tM("linearToOutputTexel",e.outputColorSpace),iM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=Nc(o),o=ju(o,e),o=td(o,e),a=Nc(a),a=ju(a,e),a=td(a,e),o=ed(o),a=ed(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=g+v+o,T=g+m+a,b=Ju(i,i.VERTEX_SHADER,y),L=Ju(i,i.FRAGMENT_SHADER,T);i.attachShader(p,b),i.attachShader(p,L),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(O){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p)||"",it=i.getShaderInfoLog(b)||"",j=i.getShaderInfoLog(L)||"",N=q.trim(),st=it.trim(),at=j.trim();let $=!0,ot=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,L);else{const nt=Qu(i,b,"vertex"),Q=Qu(i,L,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+nt+`
`+Q)}else N!==""?Pe("WebGLProgram: Program Info Log:",N):(st===""||at==="")&&(ot=!1);ot&&(O.diagnostics={runnable:$,programLog:N,vertexShader:{log:st,prefix:v},fragmentShader:{log:at,prefix:m}})}i.deleteShader(b),i.deleteShader(L),M=new pa(i,p),w=oM(i,p)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(p,Jv)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$v++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=L,this}let xM=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new MM(t),e.set(t,n)),n}}class MM{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}}function yM(s){return s===Ds||s===Ma||s===ya}function SM(s,t,e,n,i,r){const o=new ah,a=new vM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,w,z,O,q,it){const j=O.fog,N=q.geometry,st=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,at=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||st,at),ot=f[M.type];let nt=n.precision;M.precision!==null&&(nt=n.getMaxPrecision(M.precision),nt!==M.precision&&Pe("WebGLProgram.getParameters:",M.precision,"not supported, using",nt,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,St=Q!==void 0?Q.length:0;let Xt=0;N.morphAttributes.position!==void 0&&(Xt=1),N.morphAttributes.normal!==void 0&&(Xt=2),N.morphAttributes.color!==void 0&&(Xt=3);let ue,gt,Vt,ne;if(ot){const F=ki[ot];ue=F.vertexShader,gt=F.fragmentShader}else{ue=M.vertexShader,gt=M.fragmentShader;const F=a.getVertexShaderStage(M),rt=a.getFragmentShaderStage(M);a.update(M,F,rt),Vt=F.id,ne=rt.id}const fe=s.getRenderTarget(),jt=s.state.buffers.depth.getReversed(),re=q.isInstancedMesh===!0,ke=q.isBatchedMesh===!0,xe=!!M.map,ve=!!M.matcap,Te=!!$,Et=Te&&$.isPMREMTexture===!0,qt=!!M.aoMap,Qt=!!M.lightMap,oe=!!M.bumpMap&&M.wireframe===!1,Dt=!!M.normalMap,Re=!!M.displacementMap,Kt=!!M.emissiveMap,Ut=!!M.metalnessMap,Pt=!!M.roughnessMap,Bt=M.anisotropy>0,D=M.clearcoat>0,ee=M.diffuseRoughness>0,Jt=M.dispersion>0,Ht=M.retroreflectivity>0,Rt=M.iridescence>0,te=M.sheen>0,vt=M.transmission>0,ct=Bt&&!!M.anisotropyMap,C=D&&!!M.clearcoatMap,S=D&&!!M.clearcoatNormalMap,J=D&&!!M.clearcoatRoughnessMap,yt=ee&&!!M.diffuseRoughnessMap,pt=Rt&&!!M.iridescenceMap,Ot=Rt&&!!M.iridescenceThicknessMap,Ft=te&&!!M.sheenColorMap,xt=te&&!!M.sheenRoughnessMap,wt=!!M.specularMap,Nt=!!M.specularColorMap,W=!!M.specularIntensityMap,_t=vt&&!!M.transmissionMap,mt=vt&&!!M.thicknessMap,Wt=!!M.gradientMap,et=!!M.alphaMap,K=M.alphaTest>0,dt=!!M.alphaHash,It=!!M.extensions;let x=hs;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(x=s.toneMapping);const k=Et?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,X={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:gt,defines:M.defines,customVertexShaderID:Vt,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:nt,batching:ke,batchingColor:ke&&q._colorsTexture!==null,instancing:re,instancingColor:re&&q.instanceColor!==null,instancingMorph:re&&q.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:rn.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:ve,envMap:Te,envMapMode:Te&&$.mapping,envMapPMREM:Et,envMapMaxLod:Et?k.length-1:null,envMapSize:Et?k[0].width:null,aoMap:qt,lightMap:Qt,bumpMap:oe,normalMap:Dt,displacementMap:Re,emissiveMap:Kt,normalMapObjectSpace:Dt&&M.normalMapType===Np,normalMapTangentSpace:Dt&&M.normalMapType===lo,packedNormalMap:Dt&&M.normalMapType===lo&&yM(M.normalMap.format),metalnessMap:Ut,roughnessMap:Pt,anisotropy:Bt,anisotropyMap:ct,clearcoat:D,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:J,diffuseRoughness:ee,diffuseRoughnessMap:yt,dispersion:Jt,retroreflection:Ht,iridescence:Rt,iridescenceMap:pt,iridescenceThicknessMap:Ot,sheen:te,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:wt,specularColorMap:Nt,specularIntensityMap:W,transmission:vt,transmissionMap:_t,thicknessMap:mt,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===or&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:K,alphaHash:dt,combine:M.combine,mapUv:xe&&u(M.map.channel),aoMapUv:qt&&u(M.aoMap.channel),lightMapUv:Qt&&u(M.lightMap.channel),bumpMapUv:oe&&u(M.bumpMap.channel),normalMapUv:Dt&&u(M.normalMap.channel),displacementMapUv:Re&&u(M.displacementMap.channel),emissiveMapUv:Kt&&u(M.emissiveMap.channel),metalnessMapUv:Ut&&u(M.metalnessMap.channel),roughnessMapUv:Pt&&u(M.roughnessMap.channel),anisotropyMapUv:ct&&u(M.anisotropyMap.channel),clearcoatMapUv:C&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&u(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:yt&&u(M.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&u(M.sheenRoughnessMap.channel),specularMapUv:wt&&u(M.specularMap.channel),specularColorMapUv:Nt&&u(M.specularColorMap.channel),specularIntensityMapUv:W&&u(M.specularIntensityMap.channel),transmissionMapUv:_t&&u(M.transmissionMap.channel),thicknessMapUv:mt&&u(M.thicknessMap.channel),alphaMapUv:et&&u(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Dt||Bt),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(xe||et),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&Dt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:jt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Xt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:it.filter(F=>F.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:x,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&rn.getTransfer(M.map.colorSpace)===fn,decodeVideoTextureEmissive:Kt&&M.emissiveMap.isVideoTexture===!0&&rn.getTransfer(M.emissiveMap.colorSpace)===fn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:It&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&M.extensions.multiDraw===!0||ke)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return X.vertexUv1s=l.has(1),X.vertexUv2s=l.has(2),X.vertexUv3s=l.has(3),l.clear(),X}function v(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)w.push(z),w.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(m(w,M),g(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapPMREM),M.push(w.envMapMaxLod),M.push(w.envMapSize),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.diffuseRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.numLightProbeGrids),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){const w=f[M.type];let z;if(w){const O=ki[w];z=vo.clone(O.uniforms)}else z=M.uniforms;return z}function T(M,w){let z=h.get(w);return z!==void 0?++z.usedTimes:(z=new _M(s,w,M,i),c.push(z),h.set(w,z)),z}function b(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function L(M){a.remove(M)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:L,programs:c,dispose:R}}function bM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function id(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function sd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,v,m,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,u,p,v,m,g,y){y.reversedDepth===!0&&(m=-m);const T=a(f,u,p,v,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(f,u,p,v,m,g){const y=a(f,u,p,v,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||wM),n.length>1&&n.sort(u||id),i.length>1&&i.sort(u||id)}function d(){for(let f=t,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function TM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new sd,s.set(n,[o])):i>=r.length?(o=new sd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function EM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new ye};break;case"SpotLight":e={position:new G,direction:new G,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function AM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let RM=0;function CM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PM(s){const t=new EM,e=AM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,r=new Ne,o=new Ne;function a(c){let h=0,d=0,f=0;for(let it=0;it<9;it++)n.probe[it].set(0,0,0);let u=0,p=0,v=0,m=0,g=0,y=0,T=0,b=0,L=0,R=0,M=0,w=0,z=0,O=0;c.sort(CM);for(let it=0,j=c.length;it<j;it++){const N=c[it],st=N.color,at=N.intensity,$=N.distance;let ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ds?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=st.r*at,d+=st.g*at,f+=st.b*at;else if(N.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(N.sh.coefficients[nt],at);O++}else if(N.isSunLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=St,n.sunShadowMap[p]=ot;const Xt=Q.getViewportCount();for(let ue=0;ue<Xt;ue++)n.sunShadowMatrix[v+ue]=Q.getMatrix(ue),n.sunShadowCascade[v+ue]=Q._cascadeData[ue];v+=Xt,p++}n.sun[u]=nt,u++}else if(N.isDirectionalLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize=Q.mapSize,n.directionalShadow[m]=St,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=N.shadow.matrix,L++}n.directional[m]=nt,m++}else if(N.isSpotLight){const nt=t.get(N);nt.position.setFromMatrixPosition(N.matrixWorld),nt.color.copy(st).multiplyScalar(at),nt.distance=$,nt.coneCos=Math.cos(N.angle),nt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),nt.decay=N.decay,n.spot[y]=nt;const Q=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,Q.updateMatrices(N),N.castShadow&&z++),n.spotLightMatrix[y]=Q.matrix,N.castShadow){const St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize=Q.mapSize,n.spotShadow[y]=St,n.spotShadowMap[y]=ot,M++}y++}else if(N.isRectAreaLight){const nt=t.get(N);nt.color.copy(st).multiplyScalar(at),nt.halfWidth.set(N.width*.5,0,0),nt.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=nt,T++}else if(N.isPointLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),nt.distance=N.distance,nt.decay=N.decay,N.castShadow){const Q=N.shadow,St=e.get(N);St.shadowIntensity=Q.intensity,St.shadowBias=Q.bias,St.shadowNormalBias=Q.normalBias,St.shadowRadius=Q.radius,St.shadowMapSize=Q.mapSize,St.shadowCameraNear=Q.camera.near,St.shadowCameraFar=Q.camera.far,n.pointShadow[g]=St,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=N.shadow.matrix,R++}n.point[g]=nt,g++}else if(N.isHemisphereLight){const nt=t.get(N);nt.skyColor.copy(N.color).multiplyScalar(at),nt.groundColor.copy(N.groundColor).multiplyScalar(at),n.hemi[b]=nt,b++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const q=n.hash;(q.sunLength!==u||q.directionalLength!==m||q.pointLength!==g||q.spotLength!==y||q.rectAreaLength!==T||q.hemiLength!==b||q.numSunShadows!==p||q.numDirectionalShadows!==L||q.numPointShadows!==R||q.numSpotShadows!==M||q.numSpotMaps!==w||q.numLightProbes!==O)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+w-z,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=O,q.sunLength=u,q.directionalLength=m,q.pointLength=g,q.spotLength=y,q.rectAreaLength=T,q.hemiLength=b,q.numSunShadows=p,q.numDirectionalShadows=L,q.numPointShadows=R,q.numSpotShadows=M,q.numSpotMaps=w,q.numLightProbes=O,n.version=RM++)}function l(c,h){let d=0,f=0,u=0,p=0,v=0,m=0;const g=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const b=c[y];if(b.isSunLight){const L=n.sun[d];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(g),d++}else if(b.isDirectionalLight){const L=n.directional[f];L.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(g),f++}else if(b.isSpotLight){const L=n.spot[p];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const L=n.rectArea[v];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const L=n.point[u];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){const L=n.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function rd(s){const t=new PM(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function LM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new rd(s),t.set(i,[a])):r>=o.length?(a=new rd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`,NM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],UM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],od=new Ne,Br=new G,Pl=new G;function OM(s,t,e){let n=new po;const i=new Lt,r=new Lt,o=new mn,a=new _m,l=new xm,c={},h=e.maxTextureSize,d={[bs]:jn,[jn]:bs,[Sn]:Sn},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:DM,fragmentShader:IM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new dn;p.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let g=this.type;this.render=function(R,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===op&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);const z=s.getRenderTarget(),O=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),it=s.state;it.setBlending(Ls),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const j=g!==this.type;j&&M.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(st=>st.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,st=R.length;N<st;N++){const at=R[N],$=at.shadow;if($===void 0){Pe("WebGLShadowMap:",at,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ot=$.getFrameExtents();i.multiply(ot),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,$.mapSize.y=r.y));const nt=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=nt,$.map===null||j===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Gr){if(at.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ei(i.x,i.y,{format:Ds,type:ti,minFilter:qn,magFilter:qn,generateMipmaps:!1}),$.map.texture.name=at.name+".shadowMap",$.map.depthTexture=new Is(i.x,i.y,yi),$.map.depthTexture.name=at.name+".shadowMapDepth",$.map.depthTexture.format=ws,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn}else at.isPointLight?($.map=new yh(i.x),$.map.depthTexture=new lf(i.x,Di)):($.map=new ei(i.x,i.y),$.map.depthTexture=new Is(i.x,i.y,Di)),$.map.depthTexture.name=at.name+".shadowMap",$.map.depthTexture.format=ws,this.type===Zr?($.map.depthTexture.compareFunction=nt?qd:Yd,$.map.depthTexture.minFilter=qn,$.map.depthTexture.magFilter=qn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);const Q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();at.isPointLight!==!0&&$.updateMatrices(at,w);const St=($.camera.layers.mask&4294967294)!==0?$.camera.layers:w.layers;for(let Xt=0;Xt<Q;Xt++){const ue=$.getCamera(Xt);if(at.isPointLight){const gt=$.camera,Vt=$.matrix,ne=at.distance||gt.far;ne!==gt.far&&(gt.far=ne,gt.updateProjectionMatrix()),Br.setFromMatrixPosition(at.matrixWorld),gt.position.copy(Br),Pl.copy(gt.position),Pl.add(NM[Xt]),gt.up.copy(UM[Xt]),gt.lookAt(Pl),gt.updateMatrixWorld(),Vt.makeTranslation(-Br.x,-Br.y,-Br.z),od.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(od,gt.coordinateSystem,gt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,Xt),s.clear();else{Xt===0&&(s.setRenderTarget($.map),s.clear());const gt=$.getViewport(Xt);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),it.viewport(o)}n=$.getFrustum(Xt),b(M,w,ue,at,St,this.type)}$.isPointLightShadow!==!0&&this.type===Gr&&y($,w),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(z,O,q)};function y(R,M){const w=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new ei(i.x,i.y,{format:Ds,type:ti}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,v,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(M,null,w,u,v,null)}function T(R,M,w,z){let O=null;const q=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(q!==void 0)O=q;else if(O=w.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const it=O.uuid,j=M.uuid;let N=c[it];N===void 0&&(N={},c[it]=N);let st=N[j];st===void 0&&(st=O.clone(),N[j]=st,M.addEventListener("dispose",L)),O=st}if(O.visible=M.visible,O.wireframe=M.wireframe,z===Gr?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:d[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,w.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const it=s.properties.get(O);it.light=w}return O}function b(R,M,w,z,O,q){if(R.visible===!1)return;if(R.layers.test(O)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&q===Gr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const N=t.update(R),st=R.material;if(Array.isArray(st)){const at=N.groups;for(let $=0,ot=at.length;$<ot;$++){const nt=at[$],Q=st[nt.materialIndex];if(Q&&Q.visible){const St=T(R,Q,z,q);R.onBeforeShadow(s,R,M,w,N,St,nt),s.renderBufferDirect(w,null,N,St,R,nt),R.onAfterShadow(s,R,M,w,N,St,nt)}}}else if(st.visible){const at=T(R,st,z,q);R.onBeforeShadow(s,R,M,w,N,at,null),s.renderBufferDirect(w,null,N,at,R,null),R.onAfterShadow(s,R,M,w,N,at,null)}}const j=R.children;for(let N=0,st=j.length;N<st;N++)b(j[N],M,w,z,O,q)}function L(R){R.target.removeEventListener("dispose",L);for(const w in c){const z=c[w],O=R.target.uuid;O in z&&(z[O].dispose(),delete z[O])}}}function FM(s,t){function e(){let W=!1;const _t=new mn;let mt=null;const Wt=new mn(0,0,0,0);return{setMask:function(et){mt!==et&&!W&&(s.colorMask(et,et,et,et),mt=et)},setLocked:function(et){W=et},setClear:function(et,K,dt,It,x){x===!0&&(et*=It,K*=It,dt*=It),_t.set(et,K,dt,It),Wt.equals(_t)===!1&&(s.clearColor(et,K,dt,It),Wt.copy(_t))},reset:function(){W=!1,mt=null,Wt.set(-1,0,0,0)}}}function n(){let W=!1,_t=!1,mt=null,Wt=null,et=null;return{setReversed:function(K){if(_t!==K){const dt=t.get("EXT_clip_control");K?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),_t=K;const It=et;et=null,this.setClear(It)}},getReversed:function(){return _t},setTest:function(K){K?jt(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(K){mt!==K&&!W&&(s.depthMask(K),mt=K)},setFunc:function(K){if(_t&&(K=Xp[K]),Wt!==K){switch(K){case Vl:s.depthFunc(s.NEVER);break;case Wl:s.depthFunc(s.ALWAYS);break;case Xl:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Yl:s.depthFunc(s.EQUAL);break;case ql:s.depthFunc(s.GEQUAL);break;case Kl:s.depthFunc(s.GREATER);break;case Zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Wt=K}},setLocked:function(K){W=K},setClear:function(K){et!==K&&(et=K,_t&&(K=1-K),s.clearDepth(K))},reset:function(){W=!1,mt=null,Wt=null,et=null,_t=!1}}}function i(){let W=!1,_t=null,mt=null,Wt=null,et=null,K=null,dt=null,It=null,x=null;return{setTest:function(k){W||(k?jt(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(k){_t!==k&&!W&&(s.stencilMask(k),_t=k)},setFunc:function(k,X,F){(mt!==k||Wt!==X||et!==F)&&(s.stencilFunc(k,X,F),mt=k,Wt=X,et=F)},setOp:function(k,X,F){(K!==k||dt!==X||It!==F)&&(s.stencilOp(k,X,F),K=k,dt=X,It=F)},setLocked:function(k){W=k},setClear:function(k){x!==k&&(s.clearStencil(k),x=k)},reset:function(){W=!1,_t=null,mt=null,Wt=null,et=null,K=null,dt=null,It=null,x=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],v=null,m=!1,g=null,y=null,T=null,b=null,L=null,R=null,M=null,w=new ye(0,0,0),z=0,O=!1,q=null,it=null,j=null,N=null,st=null;const at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ot=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(nt)[1]),$=ot>=1):nt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),$=ot>=2);let Q=null,St={};const Xt=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),gt=new mn().fromArray(Xt),Vt=new mn().fromArray(ue);function ne(W,_t,mt,Wt){const et=new Uint8Array(4),K=s.createTexture();s.bindTexture(W,K),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<mt;dt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,Wt,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(_t+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return K}const fe={};fe[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),jt(s.DEPTH_TEST),o.setFunc(io),oe(!1),Dt(Uh),jt(s.CULL_FACE),qt(Ls);function jt(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function re(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function ke(W,_t){return f[W]!==_t?(s.bindFramebuffer(W,_t),f[W]=_t,W===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),W===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function xe(W,_t){let mt=p,Wt=!1;if(W){mt=u.get(_t),mt===void 0&&(mt=[],u.set(_t,mt));const et=W.textures;if(mt.length!==et.length||mt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,dt=et.length;K<dt;K++)mt[K]=s.COLOR_ATTACHMENT0+K;mt.length=et.length,Wt=!0}}else mt[0]!==s.BACK&&(mt[0]=s.BACK,Wt=!0);Wt&&s.drawBuffers(mt)}function ve(W){return v!==W?(s.useProgram(W),v=W,!0):!1}const Te={[tr]:s.FUNC_ADD,[lp]:s.FUNC_SUBTRACT,[cp]:s.FUNC_REVERSE_SUBTRACT};Te[hp]=s.MIN,Te[up]=s.MAX;const Et={[dp]:s.ZERO,[fp]:s.ONE,[pp]:s.SRC_COLOR,[Nd]:s.SRC_ALPHA,[Mp]:s.SRC_ALPHA_SATURATE,[xp]:s.DST_COLOR,[gp]:s.DST_ALPHA,[mp]:s.ONE_MINUS_SRC_COLOR,[Ud]:s.ONE_MINUS_SRC_ALPHA,[vp]:s.ONE_MINUS_DST_COLOR,[_p]:s.ONE_MINUS_DST_ALPHA,[yp]:s.CONSTANT_COLOR,[Sp]:s.ONE_MINUS_CONSTANT_COLOR,[bp]:s.CONSTANT_ALPHA,[wp]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(W,_t,mt,Wt,et,K,dt,It,x,k){if(W===Ls){m===!0&&(re(s.BLEND),m=!1);return}if(m===!1&&(jt(s.BLEND),m=!0),W!==ap){if(W!==g||k!==O){if((y!==tr||L!==tr)&&(s.blendEquation(s.FUNC_ADD),y=tr,L=tr),k)switch(W){case or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.ONE,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",W);break}else switch(W){case or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Oh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",W);break}T=null,b=null,R=null,M=null,w.set(0,0,0),z=0,g=W,O=k}return}et=et||_t,K=K||mt,dt=dt||Wt,(_t!==y||et!==L)&&(s.blendEquationSeparate(Te[_t],Te[et]),y=_t,L=et),(mt!==T||Wt!==b||K!==R||dt!==M)&&(s.blendFuncSeparate(Et[mt],Et[Wt],Et[K],Et[dt]),T=mt,b=Wt,R=K,M=dt),(It.equals(w)===!1||x!==z)&&(s.blendColor(It.r,It.g,It.b,x),w.copy(It),z=x),g=W,O=!1}function Qt(W,_t){W.side===Sn?re(s.CULL_FACE):jt(s.CULL_FACE);let mt=W.side===jn;_t&&(mt=!mt),oe(mt),W.blending===or&&W.transparent===!1?qt(Ls):qt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Wt=W.stencilWrite;a.setTest(Wt),Wt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?jt(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){q!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),q=W)}function Dt(W){W!==sp?(jt(s.CULL_FACE),W!==it&&(W===Uh?s.cullFace(s.BACK):W===rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),it=W}function Re(W){W!==j&&($&&s.lineWidth(W),j=W)}function Kt(W,_t,mt){W?(jt(s.POLYGON_OFFSET_FILL),(N!==_t||st!==mt)&&(N=_t,st=mt,o.getReversed()&&(_t=-_t,mt=-mt),s.polygonOffset(_t,mt))):re(s.POLYGON_OFFSET_FILL)}function Ut(W){W?jt(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function Pt(W){W===void 0&&(W=s.TEXTURE0+at-1),Q!==W&&(s.activeTexture(W),Q=W)}function Bt(W,_t,mt){mt===void 0&&(Q===null?mt=s.TEXTURE0+at-1:mt=Q);let Wt=St[mt];Wt===void 0&&(Wt={type:void 0,texture:void 0},St[mt]=Wt),(Wt.type!==W||Wt.texture!==_t)&&(Q!==mt&&(s.activeTexture(mt),Q=mt),s.bindTexture(W,_t||fe[W]),Wt.type=W,Wt.texture=_t)}function D(){const W=St[Q];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function Rt(){try{s.texSubImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function vt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function ct(){try{s.texStorage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function C(){try{s.texStorage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function S(){try{s.texImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function J(){try{s.texImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function yt(W){return d[W]!==void 0?d[W]:s.getParameter(W)}function pt(W,_t){d[W]!==_t&&(s.pixelStorei(W,_t),d[W]=_t)}function Ot(W){gt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Ft(W){Vt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Vt.copy(W))}function xt(W,_t){let mt=c.get(_t);mt===void 0&&(mt=new WeakMap,c.set(_t,mt));let Wt=mt.get(W);Wt===void 0&&(Wt=s.getUniformBlockIndex(_t,W.name),s.uniformBlockBinding(_t,Wt,Wt),mt.set(W,Wt))}function wt(W,_t,mt){const et=c.get(_t).get(W);l[et]!==mt&&(s.bindBufferBase(s.UNIFORM_BUFFER,et,mt),l[et]=mt)}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,St={},f={},l={},u=new WeakMap,p=[],v=null,m=!1,g=null,y=null,T=null,b=null,L=null,R=null,M=null,w=new ye(0,0,0),z=0,O=!1,q=null,it=null,j=null,N=null,st=null,gt.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:jt,disable:re,bindFramebuffer:ke,drawBuffers:xe,useProgram:ve,setBlending:qt,setMaterial:Qt,setFlipSided:oe,setCullFace:Dt,setLineWidth:Re,setPolygonOffset:Kt,setScissorTest:Ut,activeTexture:Pt,bindTexture:Bt,unbindTexture:D,compressedTexImage2D:ee,compressedTexImage3D:Jt,texImage2D:S,texImage3D:J,pixelStorei:pt,getParameter:yt,updateUBOMapping:xt,uniformBlockBinding:wt,texStorage2D:ct,texStorage3D:C,texSubImage2D:Ht,texSubImage3D:Rt,compressedTexSubImage2D:te,compressedTexSubImage3D:vt,scissor:Ot,viewport:Ft,reset:Nt}}function BM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,v=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):ho("canvas")}function y(C,S,J){let yt=1;const pt=ct(C);if((pt.width>J||pt.height>J)&&(yt=J/Math.max(pt.width,pt.height)),yt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ot=Math.floor(yt*pt.width),Ft=Math.floor(yt*pt.height);f===void 0&&(f=g(Ot,Ft));const xt=S?g(Ot,Ft):f;return xt.width=Ot,xt.height=Ft,xt.getContext("2d").drawImage(C,0,0,Ot,Ft),Pe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Ot+"x"+Ft+")."),xt}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),C;return C}function T(C){return C.generateMipmaps}function b(C){s.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(C,S,J,yt,pt,Ot=!1){if(C!==null){if(s[C]!==void 0)return s[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ft;yt&&(Ft=t.get("EXT_texture_norm16"),Ft||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=S;if(S===s.RED&&(J===s.FLOAT&&(xt=s.R32F),J===s.HALF_FLOAT&&(xt=s.R16F),J===s.UNSIGNED_BYTE&&(xt=s.R8),J===s.UNSIGNED_SHORT&&Ft&&(xt=Ft.R16_EXT),J===s.SHORT&&Ft&&(xt=Ft.R16_SNORM_EXT)),S===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.R8UI),J===s.UNSIGNED_SHORT&&(xt=s.R16UI),J===s.UNSIGNED_INT&&(xt=s.R32UI),J===s.BYTE&&(xt=s.R8I),J===s.SHORT&&(xt=s.R16I),J===s.INT&&(xt=s.R32I)),S===s.RG&&(J===s.FLOAT&&(xt=s.RG32F),J===s.HALF_FLOAT&&(xt=s.RG16F),J===s.UNSIGNED_BYTE&&(xt=s.RG8),J===s.UNSIGNED_SHORT&&Ft&&(xt=Ft.RG16_EXT),J===s.SHORT&&Ft&&(xt=Ft.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.RG8UI),J===s.UNSIGNED_SHORT&&(xt=s.RG16UI),J===s.UNSIGNED_INT&&(xt=s.RG32UI),J===s.BYTE&&(xt=s.RG8I),J===s.SHORT&&(xt=s.RG16I),J===s.INT&&(xt=s.RG32I)),S===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.RGB8UI),J===s.UNSIGNED_SHORT&&(xt=s.RGB16UI),J===s.UNSIGNED_INT&&(xt=s.RGB32UI),J===s.BYTE&&(xt=s.RGB8I),J===s.SHORT&&(xt=s.RGB16I),J===s.INT&&(xt=s.RGB32I)),S===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(xt=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(xt=s.RGBA16UI),J===s.UNSIGNED_INT&&(xt=s.RGBA32UI),J===s.BYTE&&(xt=s.RGBA8I),J===s.SHORT&&(xt=s.RGBA16I),J===s.INT&&(xt=s.RGBA32I)),S===s.RGB&&(J===s.UNSIGNED_SHORT&&Ft&&(xt=Ft.RGB16_EXT),J===s.SHORT&&Ft&&(xt=Ft.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(xt=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(xt=s.R11F_G11F_B10F)),S===s.RGBA){const wt=Ot?ba:rn.getTransfer(pt);J===s.FLOAT&&(xt=s.RGBA32F),J===s.HALF_FLOAT&&(xt=s.RGBA16F),J===s.UNSIGNED_BYTE&&(xt=wt===fn?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ft&&(xt=Ft.RGBA16_EXT),J===s.SHORT&&Ft&&(xt=Ft.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function M(C,S){let J;return C?S===null||S===Di||S===ur?J=s.DEPTH24_STENCIL8:S===yi?J=s.DEPTH32F_STENCIL8:S===ro&&(J=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===ur?J=s.DEPTH_COMPONENT24:S===yi?J=s.DEPTH_COMPONENT32F:S===ro&&(J=s.DEPTH_COMPONENT16),J}function w(C,S){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==qn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function z(C){const S=new WeakRef(C);n.get(C).__ref=S,p.add(S),v.register(C,S,S)}function O(C){const S=n.get(C).__ref;S!==void 0&&(p.delete(S),v.unregister(S))}function q(C){j(C.target)}function it(C){N(C.target)}function j(C){C.removeEventListener("dispose",q),O(C),at(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",it),O(C),ot(C)}function st(){for(const C of p){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):j(S))}p.clear(),d.clear()}function at(C){const S=n.get(C);if(S.__webglInit===void 0)return;const J=C.source,yt=u.get(J);if(yt){const pt=yt[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&$(C),Object.keys(yt).length===0&&u.delete(J)}n.remove(C)}function $(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const J=C.source,yt=u.get(J);delete yt[S.__cacheKey],o.memory.textures--}function ot(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const J=C.depthTexture;if(J&&J.renderTarget===C&&j(J),C.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(S.__webglFramebuffer[pt]))for(let Ot=0;Ot<S.__webglFramebuffer[pt].length;Ot++)s.deleteFramebuffer(S.__webglFramebuffer[pt][Ot]);else s.deleteFramebuffer(S.__webglFramebuffer[pt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[pt])}else{if(Array.isArray(S.__webglFramebuffer))for(let pt=0;pt<S.__webglFramebuffer.length;pt++)s.deleteFramebuffer(S.__webglFramebuffer[pt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pt=0;pt<S.__webglColorRenderbuffer.length;pt++)S.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[pt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const yt=C.textures;for(let pt=0,Ot=yt.length;pt<Ot;pt++){const Ft=n.get(yt[pt]);Ft.__webglTexture&&(s.deleteTexture(Ft.__webglTexture),o.memory.textures--),n.remove(yt[pt])}n.remove(C)}let nt=0;function Q(){nt=0}function St(){return nt}function Xt(C){nt=C}function ue(){const C=nt;return C>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),nt+=1,C}function gt(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Vt(C,S){const J=n.get(C);if(C.isVideoTexture&&te(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&J.__version!==C.version){const yt=C.image;if(yt===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(J,C,S);return}}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+S)}function ne(C,S){const J=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){Qt(J,C,S);return}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+S)}function fe(C,S){const J=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){Qt(J,C,S);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+S)}function jt(C,S){const J=n.get(C);if(C.version>0&&J.__version!==C.version){oe(J,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+S)}const re={[Si]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},ke={[Fn]:s.NEAREST,[Bd]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[la]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},xe={[Op]:s.NEVER,[Kd]:s.ALWAYS,[Fp]:s.LESS,[Yd]:s.LEQUAL,[Bp]:s.EQUAL,[qd]:s.GEQUAL,[zp]:s.GREATER,[kp]:s.NOTEQUAL};function ve(C,S){if(S.type===yi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===qn||S.magFilter===la||S.magFilter===Vr||S.magFilter===Vi||S.minFilter===qn||S.minFilter===la||S.minFilter===Vr||S.minFilter===Vi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,re[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,re[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,re[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ke[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ke[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==Vr&&S.minFilter!==Vi||S.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Te(C,S){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",q),z(S));const yt=S.source;let pt=u.get(yt);pt===void 0&&(pt={},u.set(yt,pt));const Ot=gt(S);if(Ot!==C.__cacheKey){pt[Ot]===void 0&&(pt[Ot]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pt[Ot].usedTimes++;const Ft=pt[C.__cacheKey];Ft!==void 0&&(pt[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&$(S)),C.__cacheKey=Ot,C.__webglTexture=pt[Ot].texture}return J}function Et(C,S,J){return Math.floor(Math.floor(C/J)/S)}function qt(C,S,J,yt){const Ot=C.updateRanges;if(Ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,J,yt,S.data);else{Ot.sort((W,_t)=>W.start-_t.start);let Ft=0;for(let W=1;W<Ot.length;W++){const _t=Ot[Ft],mt=Ot[W],Wt=_t.start+_t.count,et=Et(mt.start,S.width,4),K=Et(_t.start,S.width,4);mt.start<=Wt+1&&et===K&&Et(mt.start+mt.count-1,S.width,4)===et?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++Ft,Ot[Ft]=mt)}Ot.length=Ft+1;const xt=e.getParameter(s.UNPACK_ROW_LENGTH),wt=e.getParameter(s.UNPACK_SKIP_PIXELS),Nt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let W=0,_t=Ot.length;W<_t;W++){const mt=Ot[W],Wt=Math.floor(mt.start/4),et=Math.ceil(mt.count/4),K=Wt%S.width,dt=Math.floor(Wt/S.width),It=et,x=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(s.TEXTURE_2D,0,K,dt,It,x,J,yt,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,xt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Nt)}}function Qt(C,S,J){let yt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(yt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(yt=s.TEXTURE_3D);const pt=Te(C,S),Ot=S.source;e.bindTexture(yt,C.__webglTexture,s.TEXTURE0+J);const Ft=n.get(Ot);if(Ot.version!==Ft.__version||pt===!0){if(e.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const x=rn.getPrimaries(rn.workingColorSpace),k=S.colorSpace===os?null:rn.getPrimaries(S.colorSpace),X=S.colorSpace===os||x===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let wt=y(S.image,!1,i.maxTextureSize);wt=vt(S,wt);const Nt=r.convert(S.format,S.colorSpace),W=r.convert(S.type);let _t=R(S.internalFormat,Nt,W,S.normalized,S.colorSpace,S.isVideoTexture);ve(yt,S);let mt;const Wt=S.mipmaps,et=S.isVideoTexture!==!0,K=Ft.__version===void 0||pt===!0,dt=Ot.dataReady,It=w(S,wt);if(S.isDepthTexture)_t=M(S.format===Ss,S.type),K&&(et?e.texStorage2D(s.TEXTURE_2D,1,_t,wt.width,wt.height):e.texImage2D(s.TEXTURE_2D,0,_t,wt.width,wt.height,0,Nt,W,null));else if(S.isDataTexture)if(Wt.length>0){et&&K&&e.texStorage2D(s.TEXTURE_2D,It,_t,Wt[0].width,Wt[0].height);for(let x=0,k=Wt.length;x<k;x++)mt=Wt[x],et?dt&&e.texSubImage2D(s.TEXTURE_2D,x,0,0,mt.width,mt.height,Nt,W,mt.data):e.texImage2D(s.TEXTURE_2D,x,_t,mt.width,mt.height,0,Nt,W,mt.data);S.generateMipmaps=!1}else et?(K&&e.texStorage2D(s.TEXTURE_2D,It,_t,wt.width,wt.height),dt&&qt(S,wt,Nt,W)):e.texImage2D(s.TEXTURE_2D,0,_t,wt.width,wt.height,0,Nt,W,wt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,_t,Wt[0].width,Wt[0].height,wt.depth);for(let x=0,k=Wt.length;x<k;x++)if(mt=Wt[x],S.format!==Pi)if(Nt!==null)if(et){if(dt)if(S.layerUpdates.size>0){const X=zu(mt.width,mt.height,S.format,S.type);for(const F of S.layerUpdates){const rt=mt.data.subarray(F*X/mt.data.BYTES_PER_ELEMENT,(F+1)*X/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,F,mt.width,mt.height,1,Nt,rt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,mt.width,mt.height,wt.depth,Nt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,x,_t,mt.width,mt.height,wt.depth,0,mt.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,mt.width,mt.height,wt.depth,Nt,W,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,x,_t,mt.width,mt.height,wt.depth,0,Nt,W,mt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&K&&e.texStorage2D(s.TEXTURE_2D,It,_t,Wt[0].width,Wt[0].height);for(let x=0,k=Wt.length;x<k;x++)mt=Wt[x],S.format!==Pi?Nt!==null?et?dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,x,0,0,mt.width,mt.height,Nt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,x,_t,mt.width,mt.height,0,mt.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?dt&&e.texSubImage2D(s.TEXTURE_2D,x,0,0,mt.width,mt.height,Nt,W,mt.data):e.texImage2D(s.TEXTURE_2D,x,_t,mt.width,mt.height,0,Nt,W,mt.data)}else if(S.isDataArrayTexture)if(et){if(K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,_t,wt.width,wt.height,wt.depth),dt)if(S.layerUpdates.size>0){const x=zu(wt.width,wt.height,S.format,S.type);for(const k of S.layerUpdates){const X=wt.data.subarray(k*x/wt.data.BYTES_PER_ELEMENT,(k+1)*x/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,k,wt.width,wt.height,1,Nt,W,X)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Nt,W,wt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,wt.width,wt.height,wt.depth,0,Nt,W,wt.data);else if(S.isData3DTexture)et?(K&&e.texStorage3D(s.TEXTURE_3D,It,_t,wt.width,wt.height,wt.depth),dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Nt,W,wt.data)):e.texImage3D(s.TEXTURE_3D,0,_t,wt.width,wt.height,wt.depth,0,Nt,W,wt.data);else if(S.isFramebufferTexture){if(K)if(et)e.texStorage2D(s.TEXTURE_2D,It,_t,wt.width,wt.height);else{let x=wt.width,k=wt.height;for(let X=0;X<It;X++)e.texImage2D(s.TEXTURE_2D,X,_t,x,k,0,Nt,W,null),x>>=1,k>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const x=s.canvas;if(x.hasAttribute("layoutsubtree")||x.setAttribute("layoutsubtree","true"),wt.parentNode!==x){x.appendChild(wt),d.add(S),x.onpaint=k=>{const X=k.changedElements;for(const F of d)X.includes(F.image)&&(F.needsUpdate=!0)},x.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,wt);else{const X=s.RGBA,F=s.RGBA,rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,X,F,rt,wt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(et&&K){const x=ct(Wt[0]);e.texStorage2D(s.TEXTURE_2D,It,_t,x.width,x.height)}for(let x=0,k=Wt.length;x<k;x++)mt=Wt[x],et?dt&&e.texSubImage2D(s.TEXTURE_2D,x,0,0,Nt,W,mt):e.texImage2D(s.TEXTURE_2D,x,_t,Nt,W,mt);S.generateMipmaps=!1}else if(et){if(K){const x=ct(wt);e.texStorage2D(s.TEXTURE_2D,It,_t,x.width,x.height)}dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,W,wt)}else e.texImage2D(s.TEXTURE_2D,0,_t,Nt,W,wt);T(S)&&S.mipmapsAutoUpdate===!0&&b(yt),Ft.__version=Ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,J){if(S.image.length!==6)return;const yt=Te(C,S),pt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+J);const Ot=n.get(pt);if(pt.version!==Ot.__version||yt===!0){e.activeTexture(s.TEXTURE0+J);const Ft=rn.getPrimaries(rn.workingColorSpace),xt=S.colorSpace===os?null:rn.getPrimaries(S.colorSpace),wt=S.colorSpace===os||Ft===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,W=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let F=0;F<6;F++)!Nt&&!W?_t[F]=y(S.image[F],!0,i.maxCubemapSize):_t[F]=W?S.image[F].image:S.image[F],_t[F]=vt(S,_t[F]);const mt=_t[0],Wt=r.convert(S.format,S.colorSpace),et=r.convert(S.type);let K=R(S.internalFormat,Wt,et,S.normalized,S.colorSpace);const dt=S.isVideoTexture!==!0,It=Ot.__version===void 0||yt===!0,x=pt.dataReady;let k=w(S,mt);ve(s.TEXTURE_CUBE_MAP,S);let X;if(S.isDepthTexture){if(K=M(S.format===Ss,S.type),It)if(dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,K,mt.width,mt.height);else for(let F=0;F<6;F++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,K,mt.width,mt.height,0,Wt,et,null)}else if(Nt){dt&&It&&e.texStorage2D(s.TEXTURE_CUBE_MAP,k,K,mt.width,mt.height);for(let F=0;F<6;F++){X=_t[F].mipmaps;for(let rt=0;rt<X.length;rt++){const lt=X[rt];S.format!==Pi?Wt!==null?dt?x&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,0,0,lt.width,lt.height,Wt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,K,lt.width,lt.height,0,lt.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,0,0,lt.width,lt.height,Wt,et,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt,K,lt.width,lt.height,0,Wt,et,lt.data)}}}else{if(X=S.mipmaps,dt&&It){X.length>0&&k++;const F=ct(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,k,K,F.width,F.height)}for(let F=0;F<6;F++)if(W){dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,_t[F].width,_t[F].height,Wt,et,_t[F].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,K,_t[F].width,_t[F].height,0,Wt,et,_t[F].data);for(let rt=0;rt<X.length;rt++){const kt=X[rt].image[F].image;dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,0,0,kt.width,kt.height,Wt,et,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,K,kt.width,kt.height,0,Wt,et,kt.data)}}else{dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Wt,et,_t[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,K,Wt,et,_t[F]);for(let rt=0;rt<X.length;rt++){const lt=X[rt];dt?x&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,0,0,Wt,et,lt.image[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt+1,K,Wt,et,lt.image[F])}}}T(S)&&S.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),Ot.__version=pt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Dt(C,S,J,yt,pt,Ot){const Ft=r.convert(J.format,J.colorSpace),xt=r.convert(J.type),wt=R(J.internalFormat,Ft,xt,J.normalized,J.colorSpace),Nt=n.get(S),W=n.get(J);if(W.__renderTarget=S,!Nt.__hasExternalTextures){const _t=Math.max(1,S.width>>Ot),mt=Math.max(1,S.height>>Ot);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?e.texImage3D(pt,Ot,wt,_t,mt,S.depth,0,Ft,xt,null):e.texImage2D(pt,Ot,wt,_t,mt,0,Ft,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,pt,W.__webglTexture,0,Ht(S)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,yt,pt,W.__webglTexture,Ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(C,S,J){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const yt=S.depthTexture,pt=yt&&yt.isDepthTexture?yt.type:null,Ot=M(S.stencilBuffer,pt),Ft=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Rt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(S),Ot,S.width,S.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(S),Ot,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ot,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,C)}else{const yt=S.textures;for(let pt=0;pt<yt.length;pt++){const Ot=yt[pt],Ft=r.convert(Ot.format,Ot.colorSpace),xt=r.convert(Ot.type),wt=R(Ot.internalFormat,Ft,xt,Ot.normalized,Ot.colorSpace);Rt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(S),wt,S.width,S.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(S),wt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,wt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Kt(C,S,J){const yt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=n.get(S.depthTexture);pt.__renderTarget=S;const Ot=yt?S.depthTexture.image[0]:S.depthTexture.image;(!pt.__webglTexture||Ot.width!==S.width||Ot.height!==S.height)&&(Ot.width=S.width,Ot.height=S.height,S.depthTexture.needsUpdate=!0),yt?jt(S.depthTexture,0):Vt(S.depthTexture,0);const Ft=pt.__webglTexture,xt=Ht(S),wt=yt?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Nt=S.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ws)Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Nt,wt,Ft,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,Nt,wt,Ft,0);else if(S.depthTexture.format===Ss)Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Nt,wt,Ft,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,Nt,wt,Ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(C){const S=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const yt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),yt){const pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,yt.removeEventListener("dispose",pt)};yt.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=yt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(J)for(let yt=0;yt<6;yt++)Kt(S.__webglFramebuffer[yt],C,yt);else C.texture.mipmaps.length>0?Kt(S.__webglFramebuffer[0],C,0):Kt(S.__webglFramebuffer,C,0);else if(J){S.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[yt]),S.__webglDepthbuffer[yt]===void 0)S.__webglDepthbuffer[yt]=s.createRenderbuffer(),Re(S.__webglDepthbuffer[yt],C,!1);else{const pt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=S.__webglDepthbuffer[yt];s.bindRenderbuffer(s.RENDERBUFFER,Ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Ot)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Re(S.__webglDepthbuffer,C,!1);else{const pt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(C,S,J){const yt=n.get(C);S!==void 0&&Dt(yt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ut(C)}function Bt(C){const S=C.texture,J=n.get(C),yt=n.get(S);C.addEventListener("dispose",it),z(C);const pt=C.textures,Ot=C.isWebGLCubeRenderTarget===!0,Ft=pt.length>1;if(Ft||(yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture()),yt.__version=S.version,o.memory.textures++),Ot){J.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(S.mipmaps.length>0){J.__webglFramebuffer[xt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)J.__webglFramebuffer[xt][wt]=s.createFramebuffer()}else J.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(S.mipmaps.length>0){J.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)J.__webglFramebuffer[xt]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let xt=0,wt=pt.length;xt<wt;xt++){const Nt=n.get(pt[xt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xt=0;xt<pt.length;xt++){const wt=pt[xt];J.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[xt]);const Nt=r.convert(wt.format,wt.colorSpace),W=r.convert(wt.type),_t=R(wt.internalFormat,Nt,W,wt.normalized,wt.colorSpace,C.isXRRenderTarget===!0),mt=Ht(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,J.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(J.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ot){e.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),ve(s.TEXTURE_CUBE_MAP,S);for(let xt=0;xt<6;xt++)if(S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Dt(J.__webglFramebuffer[xt][wt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt);else Dt(J.__webglFramebuffer[xt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);T(S)?b(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Ft){for(let xt=0,wt=pt.length;xt<wt;xt++){const Nt=pt[xt],W=n.get(Nt);let _t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,W.__webglTexture),ve(_t,Nt),Dt(J.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+xt,_t,0),T(Nt)&&b(_t)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,yt.__webglTexture),ve(xt,S),S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Dt(J.__webglFramebuffer[wt],C,S,s.COLOR_ATTACHMENT0,xt,wt);else Dt(J.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,xt,0);T(S)?b(xt):S.mipmaps.length>0&&s.texParameteri(xt,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Ut(C)}function D(C){const S=C.textures;for(let J=0,yt=S.length;J<yt;J++){const pt=S[J];if(T(pt)&&pt.mipmapsAutoUpdate===!0){const Ot=L(C),Ft=n.get(pt).__webglTexture;e.bindTexture(Ot,Ft),b(Ot),e.unbindTexture()}}}const ee=[];function Jt(C){if(C.samples>0){if(Rt(C)===!1){const S=C.textures,J=C.width,yt=C.height;let pt=s.COLOR_BUFFER_BIT;const Ot=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(C),xt=S.length>1;if(xt)for(let Nt=0;Nt<S.length;Nt++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Nt=0;Nt<S.length;Nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);const W=n.get(S[Nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,W,0)}s.blitFramebuffer(0,0,J,yt,0,0,J,yt,pt,s.NEAREST),l===!0&&(ee.length=0,ee.push(s.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ee.push(Ot),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Nt=0;Nt<S.length;Nt++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);const W=n.get(S[Nt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,W,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ht(C){return Math.min(i.maxSamples,C.samples)}function Rt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function te(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function vt(C,S){const J=C.colorSpace,yt=C.format,pt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||J!==mi&&J!==os&&(rn.getTransfer(J)===fn?(yt!==Pi||pt!==fi)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",J)),S}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ue,this.resetTextureUnits=Q,this.getTextureUnits=St,this.setTextureUnits=Xt,this.setTexture2D=Vt,this.setTexture2DArray=ne,this.setTexture3D=fe,this.setTextureCube=jt,this.rebindTextures=Pt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Rt,this.dispose=st}function zM(s,t){function e(n,i=os){let r;const o=rn.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===$c)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zd)return s.BYTE;if(n===kd)return s.SHORT;if(n===ro)return s.UNSIGNED_SHORT;if(n===Jc)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===ti)return s.HALF_FLOAT;if(n===Vd)return s.ALPHA;if(n===Wd)return s.RGB;if(n===Pi)return s.RGBA;if(n===ws)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===za)return s.RED;if(n===jc)return s.RED_INTEGER;if(n===Ds)return s.RG;if(n===th)return s.RG_INTEGER;if(n===eh)return s.RGBA_INTEGER;if(n===ca||n===ha||n===ua||n===da)if(o===fn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===$l||n===Ql||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===Ma||n===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return o===fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ic)return r.COMPRESSED_R11_EAC;if(n===sc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ma)return r.COMPRESSED_RG11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===yc||n===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return o===fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===wc||n===ya||n===Tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`;class GM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new cf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ai({vertexShader:kM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VM extends fs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const v=typeof XRWebGLBinding<"u",m=new GM,g={},y=e.getContextAttributes();let T=null,b=null;const L=[],R=[],M=new Lt;let w=null,z=null;const O=new ci;O.viewport=new mn;const q=new ci;q.viewport=new mn;const it=[O,q],j=new zm;let N=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let Vt=L[gt];return Vt===void 0&&(Vt=new rl,L[gt]=Vt),Vt.getTargetRaySpace()},this.getControllerGrip=function(gt){let Vt=L[gt];return Vt===void 0&&(Vt=new rl,L[gt]=Vt),Vt.getGripSpace()},this.getHand=function(gt){let Vt=L[gt];return Vt===void 0&&(Vt=new rl,L[gt]=Vt),Vt.getHandSpace()};function at(gt){const Vt=R.indexOf(gt.inputSource);if(Vt===-1)return;const ne=L[Vt];ne!==void 0&&(ne.update(gt.inputSource,gt.frame,c||o),ne.dispatchEvent({type:gt.type,data:gt.inputSource}))}function $(){i.removeEventListener("select",at),i.removeEventListener("selectstart",at),i.removeEventListener("selectend",at),i.removeEventListener("squeeze",at),i.removeEventListener("squeezestart",at),i.removeEventListener("squeezeend",at),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ot);for(let gt=0;gt<L.length;gt++){const Vt=R[gt];Vt!==null&&(R[gt]=null,L[gt].disconnect(Vt))}N=null,st=null,m.reset();for(const gt in g)delete g[gt];if(t.setRenderTarget(T),u=null,f=null,d=null,i=null,b=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(M.width,M.height,!1),z!==null){const gt=z.camera;gt.fov=z.fov,gt.zoom=z.zoom,gt.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){a=gt,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(gt){c=gt},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(gt){if(i=gt,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",at),i.addEventListener("selectstart",at),i.addEventListener("selectend",at),i.addEventListener("squeeze",at),i.addEventListener("squeezestart",at),i.addEventListener("squeezeend",at),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,fe=null,jt=null;y.depth&&(jt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ne=y.stencil?Ss:ws,fe=y.stencil?ur:Di);const re={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(re),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ei(f.textureWidth,f.textureHeight,{format:Pi,type:fi,depthTexture:new Is(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,ne),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new ei(u.framebufferWidth,u.framebufferHeight,{format:Pi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(gt){for(let Vt=0;Vt<gt.removed.length;Vt++){const ne=gt.removed[Vt],fe=R.indexOf(ne);fe>=0&&(R[fe]=null,L[fe].disconnect(ne))}for(let Vt=0;Vt<gt.added.length;Vt++){const ne=gt.added[Vt];let fe=R.indexOf(ne);if(fe===-1){for(let re=0;re<L.length;re++)if(re>=R.length){R.push(ne),fe=re;break}else if(R[re]===null){R[re]=ne,fe=re;break}if(fe===-1)break}const jt=L[fe];jt&&jt.connect(ne)}}function nt(gt,Vt){Vt===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(Vt.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(i===null)return;let Vt=gt.near,ne=gt.far;m.texture!==null&&(m.depthNear>0&&(Vt=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),j.near=q.near=O.near=Vt,j.far=q.far=O.far=ne,(N!==j.near||st!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,st=j.far),j.layers.mask=gt.layers.mask|6,O.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const fe=gt.parent,jt=j.cameras;nt(j,fe);for(let re=0;re<jt.length;re++)nt(jt[re],fe);j.projectionMatrix.copy(O.projectionMatrix),j.projectionMatrixInverse.copy(O.projectionMatrixInverse),z===null&&gt.isPerspectiveCamera&&(z={camera:gt,fov:gt.fov,zoom:gt.zoom}),Q(gt,j,fe)};function Q(gt,Vt,ne){ne===null?gt.matrix.copy(Vt.matrixWorld):(gt.matrix.copy(ne.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(Vt.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(Vt.projectionMatrix),gt.projectionMatrixInverse.copy(Vt.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=dr*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(gt){l=gt,f!==null&&(f.fixedFoveation=gt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=gt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(gt){return g[gt]};let St=null;function Xt(gt,Vt){if(h=Vt.getViewerPose(c||o),p=Vt,h!==null){const ne=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let fe=!1;ne.length!==j.cameras.length&&(j.cameras.length=0,fe=!0);for(let xe=0;xe<ne.length;xe++){const ve=ne[xe];let Te=null;if(u!==null)Te=u.getViewport(ve);else{const qt=d.getViewSubImage(f,ve);Te=qt.viewport,xe===0&&(t.setRenderTargetTextures(b,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(b))}let Et=it[xe];Et===void 0&&(Et=new ci,Et.layers.enable(xe),Et.viewport=new mn,it[xe]=Et),Et.matrix.fromArray(ve.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(ve.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&(j.matrix.copy(Et.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),fe===!0&&j.cameras.push(Et)}const jt=i.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const xe=d.getDepthInformation(ne[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,i.renderState)}if(jt&&jt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let xe=0;xe<ne.length;xe++){const ve=ne[xe].camera;if(ve){let Te=g[ve];Te||(Te=new cf,g[ve]=Te);const Et=d.getCameraImage(ve);Te.sourceTexture=Et}}}}for(let ne=0;ne<L.length;ne++){const fe=R[ne],jt=L[ne];fe!==null&&jt!==void 0&&jt.update(fe,Vt,c||o)}St&&St(gt,Vt),Vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Vt}),p=null}const ue=new Pf;ue.setAnimationLoop(Xt),this.setAnimationLoop=function(gt){St=gt},this.dispose=function(){}}}const WM=new Ne,kf=new Xe;kf.set(-1,0,0,0,1,0,0,0,1);function XM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Mf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===jn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===jn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=t.get(g),T=y.envMap,b=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function YM(s,t,e,n){let i={},r={};function o(y,T){const b=T.program;n.uniformBlockBinding(y,b,i[y.id])}function a(y,T){let b=i[y.id];b===void 0&&(p(y),b=l(y),i[y.id]=b,y.addEventListener("dispose",m));const L=T.program;n.updateUBOMapping(y,L);const R=t.render.frame;r[y.id]!==R&&(c(y),r[y.id]=R)}function l(y){const T=s.createBuffer(),b=y.__size,L=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,b,L),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(y){const T=i[y.id],b=y.uniforms,L=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let R=0,M=b.length;R<M;R++){const w=b[R];if(Array.isArray(w))for(let z=0,O=w.length;z<O;z++)h(w[z],R,z,L);else h(w,R,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,T,b,L){if(f(y,T,b,L)===!0){const R=y.__offset,M=y.value;if(Array.isArray(M)){let w=0;for(let z=0;z<M.length;z++){const O=M[z],q=v(O,!0);d(O,y.__data,w),w+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,R,y.__data)}}function d(y,T,b){typeof y=="number"||typeof y=="boolean"?T[b]=y:y.isMatrix3?(T[b]=y.elements[0],T[b+1]=y.elements[1],T[b+2]=y.elements[2],T[b+3]=0,T[b+4]=y.elements[3],T[b+5]=y.elements[4],T[b+6]=y.elements[5],T[b+7]=0,T[b+8]=y.elements[6],T[b+9]=y.elements[7],T[b+10]=y.elements[8],T[b+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-b),b):y.toArray(T,b)}function f(y,T,b,L){const R=y.value,M=T+"_"+b;if(Array.isArray(R)){L[M]===void 0&&(L[M]=[]);const w=L[M];let z=!1;for(let O=0;O<R.length;O++)u(R[O],w,O)===!0&&(z=!0);return z}return u(R,L,M)}function u(y,T,b){if(T[b]===void 0)return typeof y=="number"||typeof y=="boolean"?T[b]=y:ArrayBuffer.isView(y)?T[b]=y.slice():T[b]=y.clone(),!0;{const L=T[b];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return T[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function p(y){const T=y.uniforms;let b=0;const L=16;for(let M=0,w=T.length;M<w;M++){const z=Array.isArray(T[M])?T[M]:[T[M]];for(let O=0,q=z.length;O<q;O++){const it=z[O],j=Array.isArray(it.value)?it.value:[it.value],N=Array.isArray(T[M])||Array.isArray(it.value);let st=b;for(let $=0,ot=j.length;$<ot;$++){const nt=j[$],Q=v(nt,N),St=b%L,Xt=St%Q.boundary,ue=St+Xt;b+=Xt,ue!==0&&L-ue<Q.storage&&(b+=L-ue),$===0&&(st=b),b+=Q.storage}const at=it.type==="int"?Int32Array:it.type==="uint"?Uint32Array:Float32Array;it.__data=new at((b-st)/Float32Array.BYTES_PER_ELEMENT),it.__offset=st}}const R=b%L;return R>0&&(b+=L-R),y.__size=b,y.__cache={},this}function v(y,T){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){const T=y.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}const qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function KM(){return Bi===null&&(Bi=new Ha(qM,16,16,Ds,ti),Bi.name="DFG_LUT",Bi.minFilter=qn,Bi.magFilter=qn,Bi.wrapS=oi,Bi.wrapT=oi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class ZM{constructor(t={}){const{canvas:e=Vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=fi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=u,m=new Set([eh,th,jc]),g=new Set([fi,Di,ro,ur,$c,Qc]),y=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let L=null,R=null;const M=[],w=[];let z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let q=!1,it=null,j=null,N=null,st=null;this._outputColorSpace=On;let at=0,$=0,ot=null,nt=-1,Q=null;const St=new mn,Xt=new mn;let ue=null;const gt=new ye(0);let Vt=0,ne=e.width,fe=e.height,jt=1,re=null,ke=null;const xe=new mn(0,0,ne,fe),ve=new mn(0,0,ne,fe);let Te=!1;const Et=new po,qt=new hh;let Qt=!1,oe=!1;const Dt=new Ne,Re=new G,Kt=new mn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Bt(){return ot===null?jt:1}let D=n;function ee(_,P){return e.getContext(_,P)}let Jt,Ht,Rt,te,vt,ct,C,S,J,yt,pt,Ot,Ft,xt,wt,Nt,W,_t,mt,Wt,et,K,dt;try{const _={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vc}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",F,!1),D===null){const P="webgl2";if(D=ee(P,_),D===null)throw ee(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(_){throw e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",F,!1),ze("WebGLRenderer: "+_.message),_}function It(){Jt=new Qx(D),Jt.init(),et=new zM(D,Jt),Ht=new Hx(D,Jt,t,et),Rt=new FM(D,Jt),Ht.reversedDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),j=D.createFramebuffer(),N=D.createFramebuffer(),st=D.createFramebuffer(),te=new ev(D),vt=new bM,ct=new BM(D,Jt,Rt,vt,Ht,et,te),C=new $x(O),S=new ig(D),K=new zx(D,S),J=new jx(D,S,te,K),yt=new iv(D,J,S,K,te),_t=new nv(D,Ht,ct),wt=new Gx(vt),pt=new SM(O,C,Jt,Ht,K,wt),Ot=new XM(O,vt),Ft=new TM,xt=new LM(Jt),W=new Bx(O,C,Rt,yt,p,l),Nt=new OM(O,yt,Ht),dt=new YM(D,te,Ht,Rt),mt=new kx(D,Jt,te),Wt=new tv(D,Jt,te),te.programs=pt.programs,O.capabilities=Ht,O.extensions=Jt,O.properties=vt,O.renderLists=Ft,O.shadowMap=Nt,O.state=Rt,O.info=te}v!==fi&&(z=new rv(v,e.width,e.height,a,i,r));const x=new VM(O,D);this.xr=x,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const _=Jt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Jt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(_){_!==void 0&&(jt=_,this.setSize(ne,fe,!1))},this.getSize=function(_){return _.set(ne,fe)},this.setSize=function(_,P,H=!0){if(x.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=_,fe=P,e.width=Math.floor(_*jt),e.height=Math.floor(P*jt),H===!0&&(e.style.width=_+"px",e.style.height=P+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(ne*jt,fe*jt).floor()},this.setDrawingBufferSize=function(_,P,H){ne=_,fe=P,jt=H,e.width=Math.floor(_*H),e.height=Math.floor(P*H),this.setViewport(0,0,_,P)},this.setEffects=function(_){if(v===fi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let P=0;P<_.length;P++)if(_[P].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(St)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,P,H,Y){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,P,H,Y),Rt.viewport(St.copy(xe).multiplyScalar(Bt()).round())},this.getScissor=function(_){return _.copy(ve)},this.setScissor=function(_,P,H,Y){_.isVector4?ve.set(_.x,_.y,_.z,_.w):ve.set(_,P,H,Y),Rt.scissor(Xt.copy(ve).multiplyScalar(Bt()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(_){Rt.setScissorTest(Te=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){ke=_},this.getClearColor=function(_){return _.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,H=!0){let Y=0;if(_){let B=!1;if(ot!==null){const ht=ot.texture.format;B=m.has(ht)}if(B){const ht=ot.texture.type,At=g.has(ht),bt=W.getClearColor(),Gt=W.getClearAlpha(),Yt=bt.r,ce=bt.g,ae=bt.b;At?(y[0]=Yt,y[1]=ce,y[2]=ae,y[3]=Gt,D.clearBufferuiv(D.COLOR,0,y)):(T[0]=Yt,T[1]=ce,T[2]=ae,T[3]=Gt,D.clearBufferiv(D.COLOR,0,T))}else Y|=D.COLOR_BUFFER_BIT}P&&(Y|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),it=_},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",F,!1),W.dispose(),Ft.dispose(),xt.dispose(),ct.dispose(),vt.dispose(),C.dispose(),yt.dispose(),J.dispose(),K.dispose(),dt.dispose(),pt.dispose(),x.dispose(),x.removeEventListener("sessionstart",me),x.removeEventListener("sessionend",Ye),de.stop()};function k(_){_.preventDefault(),wa("WebGLRenderer: Context Lost."),q=!0}function X(){wa("WebGLRenderer: Context Restored."),q=!1;const _=te.autoReset,P=Nt.enabled,H=Nt.autoUpdate,Y=Nt.needsUpdate,B=Nt.type;It(),te.autoReset=_,Nt.enabled=P,Nt.autoUpdate=H,Nt.needsUpdate=Y,Nt.type=B}function F(_){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function rt(_){const P=_.target;P.removeEventListener("dispose",rt),lt(P)}function lt(_){kt(_),vt.remove(_)}function kt(_){const P=vt.get(_).programs;P!==void 0&&(P.forEach(function(H){pt.releaseProgram(H)}),_.isShaderMaterial&&pt.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,H,Y,B,ht){P===null&&(P=Ut);const At=B.isMesh&&B.matrixWorld.determinantAffine()<0,bt=ut(_,P,H,Y,B);Rt.setMaterial(Y,At);let Gt=H.index,Yt=1;if(Y.wireframe===!0){if(Gt=J.getWireframeAttribute(H),Gt===void 0)return;Yt=2}const ce=H.drawRange,ae=H.attributes.position;let Zt=ce.start*Yt,De=(ce.start+ce.count)*Yt;ht!==null&&(Zt=Math.max(Zt,ht.start*Yt),De=Math.min(De,(ht.start+ht.count)*Yt)),Gt!==null?(Zt=Math.max(Zt,0),De=Math.min(De,Gt.count)):ae!=null&&(Zt=Math.max(Zt,0),De=Math.min(De,ae.count));const $e=De-Zt;if($e<0||$e===1/0)return;K.setup(B,Y,bt,H,Gt);let Ce,Se=mt;if(Gt!==null&&(Ce=S.get(Gt),Se=Wt,Se.setIndex(Ce)),B.isMesh)Y.wireframe===!0?(Rt.setLineWidth(Y.wireframeLinewidth*Bt()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(B.isLine){let on=Y.linewidth;on===void 0&&(on=1),Rt.setLineWidth(on*Bt()),B.isLineSegments?Se.setMode(D.LINES):B.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else B.isPoints?Se.setMode(D.POINTS):B.isSprite&&Se.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const on=B._multiDrawStarts,he=B._multiDrawCounts,xn=B._multiDrawCount,Ze=Gt?S.get(Gt).bytesPerElement:1,Rn=vt.get(Y).currentProgram.getUniforms();for(let yn=0;yn<xn;yn++)Rn.setValue(D,"_gl_DrawID",yn),Se.render(on[yn]/Ze,he[yn])}else if(B.isInstancedMesh)Se.renderInstances(Zt,$e,B.count);else if(H.isInstancedBufferGeometry){const on=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,he=Math.min(H.instanceCount,on);Se.renderInstances(Zt,$e,he)}else Se.render(Zt,$e)};function pe(_,P,H,Y){it!==null&&_.isNodeMaterial&&it.setObject(Y,_),Qt===!0&&wt.setState(_,H,!1),_.transparent===!0&&_.side===Sn&&_.forceSinglePass===!1?(_.side=jn,_.needsUpdate=!0,E(_,P,Y),_.side=bs,_.needsUpdate=!0,E(_,P,Y),_.side=Sn):E(_,P,Y)}this.compile=function(_,P,H=null){H===null&&(H=_),it!==null&&it.renderStart(_,P,H),R=xt.get(H),R.init(P),w.push(R),H.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(R.pushLight(B),B.castShadow&&R.pushShadow(B))}),_!==H&&_.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(R.pushLight(B),B.castShadow&&R.pushShadow(B))}),R.setupLights(),it!==null&&it.updateLights(R.state.lightsArray),oe=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,oe),Qt===!0&&wt.setGlobalState(this.clippingPlanes,P),it!==null&&Nt.render(R.state.shadowsArray,H,P);const Y=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ht=B.material;if(ht)if(Array.isArray(ht))for(let At=0;At<ht.length;At++){const bt=ht[At];pe(bt,H,P,B),Y.add(bt)}else pe(ht,H,P,B),Y.add(ht)}),R=w.pop(),it!==null&&it.renderEnd(),Y},this.compileAsync=function(_,P,H=null){const Y=this.compile(_,P,H);return new Promise(B=>{function ht(){if(Y.forEach(function(At){const Gt=vt.get(At).currentProgram;(Gt===void 0||Gt.isReady())&&Y.delete(At)}),Y.size===0){B(_);return}setTimeout(ht,10)}Jt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ee=null;function Oe(_){Ee&&Ee(_)}function me(){de.stop()}function Ye(){de.start()}const de=new Pf;de.setAnimationLoop(Oe),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(_){Ee=_,x.setAnimationLoop(_),_===null?de.stop():de.start()},x.addEventListener("sessionstart",me),x.addEventListener("sessionend",Ye),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;it!==null&&it.renderStart(_,P);const H=x.enabled===!0&&x.isPresenting===!0,Y=z!==null&&(ot===null||H)&&z.begin(O,ot);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(x.cameraAutoUpdate===!0&&x.updateCamera(P),P=x.getCamera()),_.isScene===!0&&_.onBeforeRender(O,_,P,ot),R=xt.get(_,w.length),R.init(P),R.state.textureUnits=ct.getTextureUnits(),w.push(R),Dt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?qt.setFromArrayCamera(P):Et.setFromProjectionMatrix(Dt,Li,P.reversedDepth),oe=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,oe),L=Ft.get(_,M.length),L.init(),M.push(L),this.info.render.frame++,x.enabled===!0&&x.isPresenting===!0){const At=O.xr.getDepthSensingMesh();At!==null&&se(At,P,-1/0,O.sortObjects)}se(_,P,0,O.sortObjects),L.finish(),it!==null&&it.updateLights(R.state.lightsArray),O.sortObjects===!0&&L.sort(re,ke),Pt=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Pt&&W.addToRenderList(L,_),this.info.autoReset===!0&&this.info.reset(),Qt===!0&&wt.beginShadows();const B=R.state.shadowsArray;if(Nt.render(B,_,P),Qt===!0&&wt.endShadows(),(Y&&z.hasRenderPass())===!1){const At=L.opaque,bt=L.transmissive;if(R.setupLights(),P.isArrayCamera){const Gt=P.cameras;if(bt.length>0)for(let Yt=0,ce=Gt.length;Yt<ce;Yt++){const ae=Gt[Yt];Mn(At,bt,_,ae)}Pt&&W.render(_);for(let Yt=0,ce=Gt.length;Yt<ce;Yt++){const ae=Gt[Yt];we(L,_,ae,ae.viewport)}}else bt.length>0&&Mn(At,bt,_,P),Pt&&W.render(_),we(L,_,P)}ot!==null&&$===0&&(ct.updateMultisampleRenderTarget(ot),ct.updateRenderTargetMipmap(ot)),Y&&z.end(O),_.isScene===!0&&_.onAfterRender(O,_,P),K.resetDefaultState(),nt=-1,Q=null,w.pop(),w.length>0?(R=w[w.length-1],ct.setTextureUnits(R.state.textureUnits),Qt===!0&&wt.setGlobalState(O.clippingPlanes,R.state.camera)):R=null,M.pop(),M.length>0?L=M[M.length-1]:L=null,it!==null&&it.renderEnd()};function se(_,P,H,Y){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)R.pushLight(_),_.castShadow&&R.pushShadow(_);else if(_.isSprite){const At=P.isArrayCamera?qt:Et;if(!_.frustumCulled||_.intersectsFrustum(At)){Y&&Kt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Dt);const bt=yt.update(_),Gt=_.material;Gt.visible&&L.push(_,bt,Gt,H,Kt.z,null,P)}}else if(_.isMesh||_.isLine||_.isPoints){const At=P.isArrayCamera?qt:Et;if(!_.frustumCulled||_.intersectsFrustum(At)){const bt=yt.update(_),Gt=_.material;if(Y&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Kt.copy(_.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Kt.copy(bt.boundingSphere.center)),Kt.applyMatrix4(_.matrixWorld).applyMatrix4(Dt)),Array.isArray(Gt)){const Yt=bt.groups;for(let ce=0,ae=Yt.length;ce<ae;ce++){const Zt=Yt[ce],De=Gt[Zt.materialIndex];De&&De.visible&&L.push(_,bt,De,H,Kt.z,Zt,P)}}else Gt.visible&&L.push(_,bt,Gt,H,Kt.z,null,P)}}}const ht=_.children;for(let At=0,bt=ht.length;At<bt;At++)se(ht[At],P,H,Y)}function we(_,P,H,Y){const{opaque:B,transmissive:ht,transparent:At}=_;R.setupLightsView(H),Qt===!0&&wt.setGlobalState(O.clippingPlanes,H),Y&&Rt.viewport(St.copy(Y)),B.length>0&&wn(B,P,H),ht.length>0&&wn(ht,P,H),At.length>0&&wn(At,P,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Mn(_,P,H,Y){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){const Zt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:Zt?ti:fi,minFilter:Vi,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rn.workingColorSpace})}const ht=R.state.transmissionRenderTarget[Y.id],At=Y.viewport||St;ht.setSize(At.z*O.transmissionResolutionScale,At.w*O.transmissionResolutionScale);const bt=O.getRenderTarget(),Gt=O.getActiveCubeFace(),Yt=O.getActiveMipmapLevel();O.setRenderTarget(ht),O.getClearColor(gt),Vt=O.getClearAlpha(),Vt<1&&O.setClearColor(16777215,.5),O.clear(),Pt&&W.render(H);const ce=O.toneMapping;O.toneMapping=hs;const ae=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),Qt===!0&&wt.setGlobalState(O.clippingPlanes,Y),wn(_,H,Y),ct.updateMultisampleRenderTarget(ht),ct.updateRenderTargetMipmap(ht),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let De=0,$e=P.length;De<$e;De++){const Ce=P[De],{object:Se,geometry:on,material:he,group:xn}=Ce;if(he.side===Sn&&Se.layers.test(Y.layers)){const Ze=he.side;he.side=jn,he.needsUpdate=!0,ni(Se,H,Y,on,he,xn),he.side=Ze,he.needsUpdate=!0,Zt=!0}}Zt===!0&&(ct.updateMultisampleRenderTarget(ht),ct.updateRenderTargetMipmap(ht))}O.setRenderTarget(bt,Gt,Yt),O.setClearColor(gt,Vt),ae!==void 0&&(Y.viewport=ae),O.toneMapping=ce}function wn(_,P,H){const Y=P.isScene===!0?P.overrideMaterial:null;for(let B=0,ht=_.length;B<ht;B++){const At=_[B],{object:bt,geometry:Gt,group:Yt}=At;let ce=At.material;ce.allowOverride===!0&&Y!==null&&(ce=Y),bt.layers.test(H.layers)&&ni(bt,P,H,Gt,ce,Yt)}}function ni(_,P,H,Y,B,ht){it!==null&&B.isNodeMaterial&&it.setObject(_,B),_.onBeforeRender(O,P,H,Y,B,ht),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(O,P,H,Y,_,ht),B.transparent===!0&&B.side===Sn&&B.forceSinglePass===!1?(B.side=jn,B.needsUpdate=!0,O.renderBufferDirect(H,P,Y,B,_,ht),B.side=bs,B.needsUpdate=!0,O.renderBufferDirect(H,P,Y,B,_,ht),B.side=Sn):O.renderBufferDirect(H,P,Y,B,_,ht),_.onAfterRender(O,P,H,Y,B,ht)}function Tn(_){let P=0;for(const H of _)H.texture!==null&&P++;return P}function E(_,P,H){P.isScene!==!0&&(P=Ut);const Y=vt.get(_),B=R.state.lights,ht=R.state.shadowsArray,At=B.state.version,bt=pt.getParameters(_,B.state,ht,P,H,R.state.lightProbeGridArray),Gt=pt.getProgramCacheKey(bt);let Yt=Y.programs;Y.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y.fog=P.fog;const ce=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;Y.envMap=C.get(_.envMap||Y.environment,ce),Y.envMapRotation=Y.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,Yt===void 0&&(_.addEventListener("dispose",rt),Yt=new Map,Y.programs=Yt,Y.programVariants=new Map);let ae=Yt.get(Gt);if(ae!==void 0){if(Y.currentProgram===ae&&Y.lightsStateVersion===At)return Z(_,bt),ae}else bt.uniforms=pt.getUniforms(_),it!==null&&_.isNodeMaterial&&it.build(_,H,bt),_.onBeforeCompile(bt,O),ae=pt.acquireProgram(bt,Gt),Yt.set(Gt,ae),Y.uniforms=bt.uniforms;const Zt=Y.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Zt.clippingPlanes=wt.uniform),Z(_,bt),Y.needsLights=A(_),Y.lightsStateVersion=At,Y.needsLights&&(Zt.ambientLightColor.value=B.state.ambient,Zt.lightProbe.value=B.state.probe,Zt.sunLights.value=B.state.sun,Zt.sunLightShadows.value=B.state.sunShadow,Zt.directionalLights.value=B.state.directional,Zt.directionalLightShadows.value=B.state.directionalShadow,Zt.spotLights.value=B.state.spot,Zt.spotLightShadows.value=B.state.spotShadow,Zt.rectAreaLights.value=B.state.rectArea,Zt.ltc_1.value=B.state.rectAreaLTC1,Zt.ltc_2.value=B.state.rectAreaLTC2,Zt.pointLights.value=B.state.point,Zt.pointLightShadows.value=B.state.pointShadow,Zt.hemisphereLights.value=B.state.hemi,Zt.sunShadowMatrix.value=B.state.sunShadowMatrix,Zt.sunShadowCascade.value=B.state.sunShadowCascade,Zt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Zt.spotLightMatrix.value=B.state.spotLightMatrix,Zt.spotLightMap.value=B.state.spotLightMap,Zt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.numLightProbeGrids=Tn(R.state.lightProbeGridArray),Y.currentProgram=ae,Y.uniformsList=null,ae}function I(_,P,H,Y,B){const ht=vt.get(_),At=ht.currentProgram.id+","+Y+","+B;let bt=ht.programVariants.get(At);return bt===void 0?(bt=E(_,P,H),ht.programVariants.set(At,bt)):(ht.currentProgram=bt,ht.uniformsList=null,ht.outputColorSpace=Y,ht.toneMapping=B),bt}function V(_){if(_.uniformsList===null){const P=_.currentProgram.getUniforms();_.uniformsList=pa.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function Z(_,P){const H=vt.get(_);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function ut(_,P,H,Y,B){P.isScene!==!0&&(P=Ut),ct.resetTextureUnits();const ht=P.fog,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?P.environment:null,bt=ot===null?O.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:rn.workingColorSpace,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Yt=C.get(Y.envMap||At,Gt),ce=Y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ae=!!H.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Zt=!!H.morphAttributes.position,De=!!H.morphAttributes.normal,$e=!!H.morphAttributes.color;let Ce=hs;Y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ce=O.toneMapping);const Se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,on=Se!==void 0?Se.length:0,he=vt.get(Y),xn=R.state.lights;if(Qt===!0&&(oe===!0||_!==Q)){const We=_===Q&&Y.id===nt;wt.setState(Y,_,We)}let Ze=!1,Rn=!1;Y.version===he.__version?he.needsLights&&he.lightsStateVersion!==xn.state.version||B.isBatchedMesh&&he.batching===!1||!B.isBatchedMesh&&he.batching===!0||B.isBatchedMesh&&he.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&he.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&he.instancing===!1||!B.isInstancedMesh&&he.instancing===!0||B.isSkinnedMesh&&he.skinning===!1||!B.isSkinnedMesh&&he.skinning===!0||B.isInstancedMesh&&he.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&he.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&he.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&he.instancingMorph===!1&&B.morphTexture!==null||he.envMap!==Yt||Y.fog===!0&&he.fog!==ht||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==wt.numPlanes||he.numIntersection!==wt.numIntersection)||he.vertexAlphas!==ce||he.vertexTangents!==ae||he.morphTargets!==Zt||he.morphNormals!==De||he.morphColors!==$e||he.morphTargetsCount!==on||he.numLightProbeGrids!==Tn(R.state.lightProbeGridArray)?Ze=!0:(he.outputColorSpace!==bt||he.toneMapping!==Ce)&&(Rn=!0):(Ze=!0,he.__version=Y.version);let yn=he.currentProgram;(Ze===!0||Rn===!0)&&(yn=Rn===!0?I(Y,P,B,bt,Ce):E(Y,P,B),it&&Y.isNodeMaterial&&it.onUpdateProgram(Y,yn,he));let hi=!1,Xn=!1,Yn=!1;const Ke=yn.getUniforms(),Fe=he.uniforms;if(Rt.useProgram(yn.program)&&(hi=!0,Xn=!0,Yn=!0),Y.id!==nt&&(nt=Y.id,Xn=!0),hi||Q!==_){Rt.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Ke.setValue(D,"projectionMatrix",_.projectionMatrix),Ke.setValue(D,"viewMatrix",_.matrixWorldInverse);const en=Ke.map.cameraPosition;en!==void 0&&en.setValue(D,Re.setFromMatrixPosition(_.matrixWorld)),Ht.logarithmicDepthBuffer&&Ke.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ke.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,Xn=!0,Yn=!0)}if(he.needsLights&&(xn.state.sunShadowMap.length>0&&Ke.setValue(D,"sunShadowMap",xn.state.sunShadowMap,ct),xn.state.directionalShadowMap.length>0&&Ke.setValue(D,"directionalShadowMap",xn.state.directionalShadowMap,ct),xn.state.spotShadowMap.length>0&&Ke.setValue(D,"spotShadowMap",xn.state.spotShadowMap,ct),xn.state.pointShadowMap.length>0&&Ke.setValue(D,"pointShadowMap",xn.state.pointShadowMap,ct)),B.isSkinnedMesh){Ke.setOptional(D,B,"bindMatrix"),Ke.setOptional(D,B,"bindMatrixInverse");const We=B.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ke.setValue(D,"boneTexture",We.boneTexture,ct))}B.isBatchedMesh&&(Ke.setOptional(D,B,"batchingTexture"),Ke.setValue(D,"batchingTexture",B._matricesTexture,ct),Ke.setOptional(D,B,"batchingIdTexture"),Ke.setValue(D,"batchingIdTexture",B._indirectTexture,ct),Ke.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Ke.setValue(D,"batchingColorTexture",B._colorsTexture,ct));const tn=H.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&_t.update(B,H,yn),(Xn||he.receiveShadow!==B.receiveShadow)&&(he.receiveShadow=B.receiveShadow,Ke.setValue(D,"receiveShadow",B.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&P.environment!==null&&(Fe.envMapIntensity.value=P.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=KM()),Xn){if(Ke.setValue(D,"toneMappingExposure",O.toneMappingExposure),he.needsLights&&U(Fe,Yn),ht&&Y.fog===!0&&Ot.refreshFogUniforms(Fe,ht),Ot.refreshMaterialUniforms(Fe,Y,jt,fe,R.state.transmissionRenderTarget[_.id]),he.needsLights&&he.numLightProbeGrids>0){const We=b;let en=0;for(const ln of R.state.lightProbeGridArray)ln.texture!==null&&(We.textures[en]=ln.texture,We.min[en]=ln.boundingBox.min,We.max[en]=ln.boundingBox.max,We.resolution[en]=ln.resolution,en++);for(const ln in We)We[ln].length=en;Fe.probesSH.value=We.textures,Fe.probesMin.value=We.min,Fe.probesMax.value=We.max,Fe.probesResolution.value=We.resolution}pa.upload(D,V(he),Fe,ct)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(pa.upload(D,V(he),Fe,ct),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ke.setValue(D,"center",B.center),Ke.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ke.setValue(D,"normalMatrix",B.normalMatrix),Ke.setValue(D,"modelMatrix",B.matrixWorld),Y.uniformsGroups!==void 0){const We=Y.uniformsGroups;for(let en=0,ln=We.length;en<ln;en++){const _n=We[en];dt.update(_n,yn),dt.bind(_n,yn)}}return yn}function U(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.sunLights.needsUpdate=P,_.sunLightShadows.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function A(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(_,P,H){const Y=vt.get(_);Y.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),vt.get(_.texture).__webglTexture=P,vt.get(_.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:H,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){const H=vt.get(_);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(_,P=0,H=0){ot=_,at=P,$=H;let Y=null,B=!1,ht=!1;if(_){const bt=vt.get(_);if(bt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(D.FRAMEBUFFER,bt.__webglFramebuffer),St.copy(_.viewport),Xt.copy(_.scissor),ue=_.scissorTest,Rt.viewport(St),Rt.scissor(Xt),Rt.setScissorTest(ue),nt=-1;return}else if(bt.__webglFramebuffer===void 0)ct.setupRenderTarget(_);else if(bt.__hasExternalTextures)ct.rebindTextures(_,vt.get(_.texture).__webglTexture,vt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ce=_.depthTexture;if(bt.__boundDepthTexture!==ce){if(ce!==null&&vt.has(ce)&&(_.width!==ce.image.width||_.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(_)}}const Gt=_.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(ht=!0);const Yt=vt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Yt[P])?Y=Yt[P][H]:Y=Yt[P],B=!0):_.samples>0&&ct.useMultisampledRTT(_)===!1?Y=vt.get(_).__webglMultisampledFramebuffer:Array.isArray(Yt)?Y=Yt[H]:Y=Yt,St.copy(_.viewport),Xt.copy(_.scissor),ue=_.scissorTest}else St.copy(xe).multiplyScalar(jt).floor(),Xt.copy(ve).multiplyScalar(jt).floor(),ue=Te;if(H!==0&&(Y=j),Rt.bindFramebuffer(D.FRAMEBUFFER,Y)&&Rt.drawBuffers(_,Y),Rt.viewport(St),Rt.scissor(Xt),Rt.setScissorTest(ue),B){const bt=vt.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,bt.__webglTexture,H)}else if(ht){const bt=P;for(let Gt=0;Gt<_.textures.length;Gt++){const Yt=vt.get(_.textures[Gt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Gt,Yt.__webglTexture,H,bt)}}else if(_!==null&&H!==0){const bt=vt.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,H)}nt=-1};function ft(_){const P=vt.get(_);return(P.__readFormat!==_.format||P.__readType!==_.type)&&(P.__readFormat=_.format,P.__readType=_.type,P.__formatReadable=Ht.textureFormatReadable(_.format),P.__typeReadable=Ht.textureTypeReadable(_.type)),P}this.readRenderTargetPixels=function(_,P,H,Y,B,ht,At,bt=0){if(!(_&&_.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=vt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&At!==void 0&&(Gt=Gt[At],Array.isArray(Gt)&&(Gt=Gt[0])),Gt){Rt.bindFramebuffer(D.FRAMEBUFFER,Gt);try{const Yt=_.textures[bt],ce=Yt.format,ae=Yt.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt);const Zt=ft(Yt);if(Zt.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-Y&&H>=0&&H<=_.height-B&&D.readPixels(P,H,Y,B,et.convert(ce),et.convert(ae),ht)}finally{const Yt=ot!==null?vt.get(ot).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(_,P,H,Y,B,ht,At,bt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=vt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&At!==void 0&&(Gt=Gt[At],Array.isArray(Gt)&&(Gt=Gt[0])),Gt)if(P>=0&&P<=_.width-Y&&H>=0&&H<=_.height-B){Rt.bindFramebuffer(D.FRAMEBUFFER,Gt);const Yt=_.textures[bt],ce=Yt.format,ae=Yt.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt);const Zt=ft(Yt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(P,H,Y,B,et.convert(ce),et.convert(ae),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const $e=ot!==null?vt.get(ot).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,$e);const Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wp(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(De),D.deleteSync(Ce),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,H=0){const Y=Math.pow(2,-H),B=Math.floor(_.image.width*Y),ht=Math.floor(_.image.height*Y),At=P!==null?P.x:0,bt=P!==null?P.y:0;ct.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,At,bt,B,ht),Rt.unbindTexture()},this.copyTextureToTexture=function(_,P,H=null,Y=null,B=0,ht=0){let At,bt,Gt,Yt,ce,ae,Zt,De,$e;const Ce=_.isCompressedTexture?_.mipmaps[ht]:_.image;if(H!==null)At=H.max.x-H.min.x,bt=H.max.y-H.min.y,Gt=H.isBox3?H.max.z-H.min.z:1,Yt=H.min.x,ce=H.min.y,ae=H.isBox3?H.min.z:0;else{const Ke=Math.pow(2,-B);At=Math.floor(Ce.width*Ke),bt=Math.floor(Ce.height*Ke),_.isDataArrayTexture?Gt=Ce.depth:_.isData3DTexture?Gt=Math.floor(Ce.depth*Ke):Gt=1,Yt=0,ce=0,ae=0}Y!==null?(Zt=Y.x,De=Y.y,$e=Y.z):(Zt=0,De=0,$e=0);const Se=et.convert(P.format),on=et.convert(P.type);let he;P.isData3DTexture?(ct.setTexture3D(P,0),he=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(ct.setTexture2DArray(P,0),he=D.TEXTURE_2D_ARRAY):(ct.setTexture2D(P,0),he=D.TEXTURE_2D),Rt.activeTexture(D.TEXTURE0),Rt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),Rt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Rt.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const xn=Rt.getParameter(D.UNPACK_ROW_LENGTH),Ze=Rt.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=Rt.getParameter(D.UNPACK_SKIP_PIXELS),yn=Rt.getParameter(D.UNPACK_SKIP_ROWS),hi=Rt.getParameter(D.UNPACK_SKIP_IMAGES);Rt.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),Rt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),Rt.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),Rt.pixelStorei(D.UNPACK_SKIP_ROWS,ce),Rt.pixelStorei(D.UNPACK_SKIP_IMAGES,ae);const Xn=_.isDataArrayTexture||_.isData3DTexture,Yn=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){const Ke=vt.get(_),Fe=vt.get(P),tn=vt.get(Ke.__renderTarget),We=vt.get(Fe.__renderTarget);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let en=0;en<Gt;en++)Xn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(_).__webglTexture,B,ae+en),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(P).__webglTexture,ht,$e+en)),D.blitFramebuffer(Yt,ce,Yt+At,ce+bt,Zt,De,Zt+At,De+bt,D.DEPTH_BUFFER_BIT,D.NEAREST);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||_.isRenderTargetTexture||vt.has(_)){const Ke=vt.get(_),Fe=vt.get(P);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,N),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,st);for(let tn=0;tn<Gt;tn++)Xn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,B,ae+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,B),Yn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,ht,$e+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,ht),B!==0?D.blitFramebuffer(Yt,ce,Yt+At,ce+bt,Zt,De,Zt+At,De+bt,D.COLOR_BUFFER_BIT,D.NEAREST):Yn?D.copyTexSubImage3D(he,ht,Zt,De,$e+tn,Yt,ce,At,bt):D.copyTexSubImage2D(he,ht,Zt,De,Yt,ce,At,bt);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Yn?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(he,ht,Zt,De,$e,At,bt,Gt,Se,on,Ce.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(he,ht,Zt,De,$e,At,bt,Gt,Se,Ce.data):D.texSubImage3D(he,ht,Zt,De,$e,At,bt,Gt,Se,on,Ce):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ht,Zt,De,At,bt,Se,on,Ce.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ht,Zt,De,Ce.width,Ce.height,Se,Ce.data):D.texSubImage2D(D.TEXTURE_2D,ht,Zt,De,At,bt,Se,on,Ce);Rt.pixelStorei(D.UNPACK_ROW_LENGTH,xn),Rt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),Rt.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),Rt.pixelStorei(D.UNPACK_SKIP_ROWS,yn),Rt.pixelStorei(D.UNPACK_SKIP_IMAGES,hi),ht===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&D.generateMipmap(he),Rt.unbindTexture()},this.initRenderTarget=function(_){vt.get(_).__webglFramebuffer===void 0&&ct.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?ct.setTextureCube(_,0):_.isData3DTexture?ct.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?ct.setTexture2DArray(_,0):ct.setTexture2D(_,0),Rt.unbindTexture()},this.resetState=function(){at=0,$=0,ot=null,Rt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(t),e.unpackColorSpace=rn._getUnpackColorSpace()}}const ad={type:"change"},Sh={type:"start"},Hf={type:"end"},ea=new _r,ld=new rs,JM=Math.cos(70*Ta.DEG2RAD),Bn=new G,li=2*Math.PI,un={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ll=1e-6;class $M extends eg{constructor(t,e=null){super(t,e),this.state=un.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rr.ROTATE,MIDDLE:rr.DOLLY,RIGHT:rr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new bn,this._lastTargetPosition=new G,this._quat=new bn().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bu,this._sphericalDelta=new Bu,this._scale=1,this._panOffset=new G,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new G,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jM.bind(this),this._onPointerDown=QM.bind(this),this._onPointerUp=t1.bind(this),this._onContextMenu=a1.bind(this),this._onMouseWheel=i1.bind(this),this._onKeyDown=s1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=o1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=n1.bind(this),this._interceptControlDown=l1.bind(this),this._interceptControlUp=c1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=un.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ad),this.update(),this.state=un.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Bn.copy(e).sub(this.target),Bn.applyQuaternion(this._quat),this._spherical.setFromVector3(Bn),this.autoRotate&&this.state===un.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=li:n>Math.PI&&(n-=li),i<-Math.PI?i+=li:i>Math.PI&&(i-=li),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bn.setFromSpherical(this._spherical),Bn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Bn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ea.origin.copy(this.object.position),ea.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ea.direction))<JM?this.object.lookAt(this.target):(ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),ea.intersectPlane(ld,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ll||this._lastTargetPosition.distanceToSquared(this.target)>Ll?(this.dispatchEvent(ad),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?li/60*this.autoRotateSpeed*t:li/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Bn.setFromMatrixColumn(e,0),Bn.multiplyScalar(-t),this._panOffset.add(Bn)}_panUp(t,e){this.screenSpacePanning===!0?Bn.setFromMatrixColumn(e,1):(Bn.setFromMatrixColumn(e,0),Bn.crossVectors(this.object.up,Bn)),Bn.multiplyScalar(t),this._panOffset.add(Bn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Bn.copy(i).sub(this.target);let r=Bn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(li*this._rotateDelta.x/e.clientHeight),this._rotateUp(li*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(li*this._rotateDelta.x/e.clientHeight),this._rotateUp(li*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function QM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function t1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hf),this.state=un.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function e1(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=un.DOLLY;break;case rr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=un.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=un.ROTATE}break;case rr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=un.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=un.PAN}break;default:this.state=un.NONE}this.state!==un.NONE&&this.dispatchEvent(Sh)}function n1(s){switch(this.state){case un.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case un.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function i1(s){this.enabled===!1||this.enableZoom===!1||this.state!==un.NONE||(s.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Hf))}function s1(s){this.enabled!==!1&&this._handleKeyDown(s)}function r1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1){this.state=un.NONE;break}this._handleTouchStartRotate(s),this.state=un.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1){this.state=un.NONE;break}this._handleTouchStartPan(s),this.state=un.TOUCH_PAN;break;default:this.state=un.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=un.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=un.TOUCH_DOLLY_ROTATE;break;default:this.state=un.NONE}break;default:this.state=un.NONE}this.state!==un.NONE&&this.dispatchEvent(Sh)}function o1(s){switch(this._trackPointer(s),this.state){case un.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case un.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case un.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case un.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=un.NONE}}function a1(s){this.enabled!==!1&&s.preventDefault()}function l1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h1=new Wa(-1,1,1,-1,0,1);class u1 extends dn{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const d1=new u1;class bh{constructor(t){this._mesh=new He(d1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,h1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Uc extends br{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ai?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vo.clone(t.uniforms),this.material=new ai({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new bh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class cd extends br{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class f1 extends br{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class p1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uc(ma),this.copyPass.material.blending=Ls,this.timer=new km}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cd!==void 0&&(o instanceof cd?n=!0:o instanceof f1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const na={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class m1 extends br{constructor(){super(),this.isOutputPass=!0,this.uniforms=vo.clone(na.uniforms),this.material=new yf({name:na.name,uniforms:this.uniforms,vertexShader:na.vertexShader,fragmentShader:na.fragmentShader}),this._fsQuad=new bh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},rn.getTransfer(this._outputColorSpace)===fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class g1 extends br{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const _1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class gr extends br{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(r,o,{type:ti,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ei(r,o,{type:ti,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ei(r,o,{type:ti,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=_1;this.highPassUniforms=vo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ai({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vo.clone(ma.uniforms),this.blendMaterial=new ai({uniforms:this.copyUniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,premultipliedAlpha:!0,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Kn,this._fsQuad=new bh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=gr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=gr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new ai({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}}gr.BlurDirectionX=new Lt(1,0);gr.BlurDirectionY=new Lt(0,1);function wh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new dn;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=hd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<o[h].length;++v)u.push(o[h][v][f]);const p=hd(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function hd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Wn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const v=h.getComponent(f,p);a.setComponent(f+d,p,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function ud(s,t){if(t===Dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Ec||t===Xd){let e=s.getIndex();if(e===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Ec)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const $n={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2},x1={library:[-.38,.92],court:[1,0]};function v1(s,t){const e=Ci[s],n=e.kind==="house"?Math.max(e.w,e.d)*1.15+8:e.r*1.6+7,i=x1[s]??t,r=Math.hypot(i[0],i[1]),[o,a]=r>0?[i[0]/r,i[1]/r]:[.45,.9];return{target:[e.x,1,e.z],position:[e.x+o*n,n*.85,e.z+a*n]}}function M1(s,t,e){if(!e||s<=0||t<=0)return null;const{left:n,right:i,top:r,bottom:o}=e;if(n+i>=s||r+o>=t)return null;const a=(i-n)/2,l=(o-r)/2;return a===0&&l===0?null:{x:a,y:l}}const dd={x:0,y:0},Oc=250;function fd(s,t,e,n){if(n||e>=Oc)return t;const r=1-(1-Math.max(0,e)/Oc)**3;return{x:s.x+(t.x-s.x)*r,y:s.y+(t.y-s.y)*r}}const Dl={cold:"#5a2a10",one:"#f08a3c",busy:"#ffb15a"},y1=4;function S1(s){const t=Math.max(0,Math.min(s,y1));return{mouth:t===0?Dl.cold:t===1?Dl.one:Dl.busy,heat:.25+t*.35}}const b1=(s,t)=>t?0:Math.sin(s*9)*.08+Math.sin(s*23)*.05,Gf={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit",raise:"raise_hand"},Th=new Set(["type","smash","readsit","sit","drink"]),w1=s=>Gf[s]??"idle";function T1(s){return s.walking?"walk":s.needsYou&&s.hasRaise?"raise":s.needsYou||s.held?Th.has(s.pose)?"sit":"idle":s.pose}const E1=new Set(["thinking","reading","writing","waiting"]);function A1(s,t){return!t.walking&&!t.held&&t.spot===oa[s]&&t.state!==null&&E1.has(t.state)}const Fc={lead:["garden-pond","court-well","yard-2"],designer:["garden-easel","garden-pond"],frontend:["yard-1","tavern-1"],backend:["tavern-2","yard-2"],reviewer:["court-bench","tavern-1"]},R1={lead:[8e3,15e3],others:[45e3,9e4]},C1=new Set(["frontend","backend"]);function Na(s,t,e){const{room:n,pose:i}=Qn[t],r=C1.has(s)?n==="yard"?"sparks":i==="drink"?"mug":null:null;return{spot:t,clip:w1(i),prop:r,ms:e}}function P1(s,t,e){let n=(s^Math.imul(e+1,2654435761))>>>0;for(const i of t)n=Math.imul(n^i.charCodeAt(0),2246822507)>>>0;return()=>{n=n+1831565813>>>0;let i=n;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function pd(s,t,{seed:e,from:n=null,taken:i=new Set,reducedMotion:r=!1}){if(r)return Na(s,ys[s],Number.POSITIVE_INFINITY);const o=P1(e,s,t),a=Fc[s],l=Math.floor(o()*a.length),c=p=>!i.has(p),h=a.map((p,v)=>a[(l+v)%a.length]),d=h.find(p=>c(p)&&p!==n)??h.find(c)??ys[s],[f,u]=R1[s==="lead"?"lead":"others"];return Na(s,d,Math.round(f+o()*(u-f)))}function L1(s,t,e,n,{seed:i,reducedMotion:r}){const o={},a={},l=c=>new Set(Dh.filter(h=>h!==c).map(h=>o[h]?.act.spot??s[h]?.act.spot??e[h].to??e[h].spot));for(const c of Dh){if(!t.has(c))continue;const h=e[c],d=s[c];if(!d){const v=pd(c,0,{seed:i,reducedMotion:r}).ms,m=l(c);if(!h.walking&&Fc[c].includes(h.spot)&&!m.has(h.spot)){o[c]={n:0,act:Na(c,h.spot,v),since:n};continue}const g=m.has(ys[c])?Fc[c].find(y=>!m.has(y))??ys[c]:ys[c];o[c]={n:0,act:Na(c,g,v),since:null},g!==ys[c]&&(a[c]=g);continue}const f=!h.walking&&h.spot===d.act.spot,u=d.since??(f?n:null);if(u===null||n-u<d.act.ms){o[c]=u===d.since?d:{...d,since:u};continue}const p=pd(c,d.n+1,{seed:i,from:d.act.spot,taken:l(c),reducedMotion:r});o[c]={n:d.n+1,act:p,since:null},p.spot!==h.spot&&(a[c]=p.spot)}return{runs:o,to:a}}const D1=2.5,md=3e3,Xi=(s,t=Number.NEGATIVE_INFINITY)=>({spot:s,since:t,walk:null,holdUntil:null,next:null}),Vf=s=>({x:Qn[s].x,z:Qn[s].z});function I1(s,t){const e=Qn[s],n=e.viaW?[{x:e.viaW[0],z:e.viaW[1],leave:e.anchor}]:[];return[Vf(s),...n,...aa(e.anchor,t)]}const N1=s=>s.slice(1).reduce((t,e,n)=>t+Math.hypot(e.x-s[n].x,e.z-s[n].z),0);function Eh(s,t){let e=Math.max(0,t)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a.x-o.x,a.z-o.z);if(e<l-1e-9){const c=e/l;return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(a.x-o.x,a.z-o.z)}}e-=l}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:Qn[s.to].ry}}function U1(s,t,e){const n=Eh(s,e-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...aa(r.node,t)]:r?.leave?[i,r,...aa(r.leave,t)]:[i,...aa(Qn[s.to].anchor,t)]}function Wf(s,t){return!s.walk||!Eh(s.walk,t-s.walk.startedAt).arrived?s:Xi(s.walk.to,s.walk.startedAt+N1(s.walk.path)/s.walk.speed*1e3)}const Xf=(s,t,e,n)=>({...Xi(s,e),walk:{path:I1(s,t),to:t,startedAt:e,speed:n}});function Il(s,t,e,n,i,r){const o=Wf(s,e);return o.walk?o.walk.to===t?o:i?Xi(t,e):{...o,walk:{path:U1(o.walk,t,e),to:t,startedAt:e,speed:n*D1}}:o.holdUntil!==null?t===o.spot?Xi(o.spot,o.since):{...o,next:t}:r&&o.spot===r&&t!==r&&e-o.since<md?{...o,next:t,holdUntil:o.since+md}:o.spot===t?o:i?Xi(t,e):Xf(o.spot,t,e,n)}function gd(s,t,e,n){return s.walk?Wf(s,t):s.holdUntil===null||t<s.holdUntil?s:s.next?n?Xi(s.next,t):Xf(s.spot,s.next,t,e):{...s,holdUntil:null}}function O1(s,t){return s.walk?Xi(s.walk.to,t):s.holdUntil!==null?Xi(s.next??s.spot,t):s}const _d=(s,t)=>s.holdUntil!==null&&t<s.holdUntil;function xd(s,t){if(!s.walk)return{...Vf(s.spot),heading:Qn[s.spot].ry,walking:!1};const{x:e,z:n,heading:i,arrived:r}=Eh(s.walk,t-s.walk.startedAt);return{x:e,z:n,heading:i,walking:!r}}const{PI:nn}=Math,vd=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};function F1(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:v,rr:m,pick:g,tiled:y,instanced:T}=s,{FLAGS:b,SPINNERS:L,skull:R,horns:M,flame:w,anvil:z,weaponRack:O,brazier:q,poleBanner:it,skullPole:j,barrel:N,well:st,bench:at,stall:$,lampPost:ot,crate:nt,sack:Q,torch:St,dummy:Xt,target:ue,hay:gt,easel:Vt,candle:ne,plantFlora:fe,bunk:jt,chest:re,hangingBanner:ke,table:xe,partition:ve,wolf:Te,spikes:Et,cart:qt,fence:Qt,skullCandle:oe,tent:Dt,signPost:Re}=t,{patch:Kt}=e,{buildHouse:Ut,inH:Pt,outH:Bt,onWall:D}=n,ee=new mr({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),Jt=new mr({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:Ht,chimneyTop:Rt,emberBase:te}=(()=>{const et=Ci.forge,K=new Tt;K.position.set(et.x,0,et.z),r.add(K),r.add(i.forge);const dt=-.6,It=new Tt;It.position.set(0,.16,dt),K.add(It),It.add(u(f(new Ri(1,24,0,nn),ee,!1),0,1.05,1.705)),It.add(u(f(new cn(2,1.05),ee,!1),0,.53,1.705)),It.add(u(f(new cn(1.4,.45),Jt,!1),0,.32,1.71));{const rt=new Tt;for(let lt=0;lt<4;lt++)rt.add(u(f(new Ct(.9-lt*.08,.14,1.2-lt*.1),lt%2?o.redD:h("#5a3a2a")),0,.5+lt*.16,0));rt.add(u(f(new Ct(1,.08,1.3),o.wood),0,.45,0)),rt.add(p(u(f(new ie(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,nn/2)),It.add(u(rt,-2.9,0,.2))}const x=new cs("#ff8a3a",14,16,2);x.position.set(0,1.4,2.8),It.add(x),It.updateMatrixWorld(!0);const k=It.localToWorld(new G(0,10.9,-.5)),X=It.localToWorld(new G(0,1,2));v(K,z(),-2.9,2.9,Id(-2.9,2.9,-3.9,3.9)+nn/2,.16);{const rt=new Tt;rt.add(u(f(new Ct(1.5,.55,.7),o.wood),0,.27,0)),rt.add(p(u(f(new cn(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-nn/2,0,0)),v(K,rt,3.5,3,-.5,.16)}const F=[];for(let rt=0;rt<40;rt++)F.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});T(new Gi(1,0),F,{});for(let rt=0;rt<6;rt++)K.add(u(f(new an(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));v(K,O(4),-5.3,-2,Math.atan2(5.3,2),.16),v(K,O(4),5.7,.9,-nn/2,.16);{const rt=new Tt;rt.add(u(f(new Ct(.9,.5,.5),o.wood),0,.25,0));const lt=u(p(f(new ie(.45,.45,.16,18),h("#8a8078")),0,0,nn/2),0,.8,0);rt.add(lt),v(K,rt,-4.8,.2,.4,.16)}for(const rt of[.4,2,3.9,5.2])v(K,q(0),Math.cos(rt)*6.9,Math.sin(rt)*6.9,0,.16);return v(K,it(4),-1.9,-3.8,0,.16),v(K,it(4),1.9,-3.8,0,.16),v(K,j(2.6),6,-3.6,0,.16),v(K,N(),-6,2,0,.16),{fireLight:x,chimneyTop:k,emberBase:X}})();{const et=Ci.court,K=new Tt;K.position.set(et.x,0,et.z),r.add(K),v(K,st(),-5.8,2),v(K,at(1.9,!0),-5.2,-4,0),v(K,$(),6.2,1.2,-nn/2);{const dt=new Tt;for(const It of[-1,1])dt.add(u(f(new Ct(.12,2.2,.12),o.woodD),It*.8,1.1,0));dt.add(u(f(new Ct(1.8,1.1,.08),o.wood),0,1.55,0));for(let It=0;It<6;It++)dt.add(u(p(f(new cn(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+It%3*.6,1.8-Math.floor(It/3)*.5,.05));dt.add(p(u(f(new Ct(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),v(K,dt,5.6,-5.4,-nn/2)}v(K,ot(6),-5.8,-1),v(K,N(),8,-.6),v(K,nt(.55),3.8,3.4,.3),v(K,Q(),4.4,3),v(K,j(2.4),-7.8,6);{const dt=new Tt;dt.add(u(f(new Ct(1.6,.5,.6),o.wood),0,.25,0)),dt.add(p(u(f(new cn(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-nn/2,0,0)),v(K,dt,-7.6,3.6,nn/2)}Kt("dirt",et.x-4,et.z+.5,4.4,5.6,0,.013)}{const et=Ci.yard;if(et.kind==="house")throw new Error("the yard is an open area");const K=et.gate??0,dt=new Tt;dt.position.set(et.x,0,et.z),r.add(dt),Kt("sand",et.x,et.z,et.r+.6,et.r+.6,0,.014,5),dt.add(i.yard);{const It=new Tt,x=Math.cos(K),k=Math.sin(K);It.position.set(x*et.r,0,k*et.r),It.rotation.y=Math.atan2(x,k);for(const X of[-1,1])It.add(u(St(),X*1.55,2,.24));dt.add(It),v(dt,j(2.6),x*(et.r+1.6)-k*2.2,k*(et.r+1.6)+x*2.2),v(dt,j(2.2),x*(et.r+1.6)+k*2.2,k*(et.r+1.6)-x*2.2)}v(dt,Xt(),-3.2,2.1,nn),v(dt,Xt(),1.6,3.2,nn),v(dt,ue(),4.4,3.6,Math.atan2(-4.4,-3.6)),v(dt,O(4),-5.4,-2.6,Math.atan2(5.4,2.6)),v(dt,gt(),-5.6,3.8,.4),v(dt,gt(),-4.8,4.7,1.2),v(dt,p(gt(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const It of[2,3.4,4.6])v(dt,it(3.4),Math.cos(It)*(et.r-.7),Math.sin(It)*(et.r-.7),Math.atan2(-Math.cos(It),-Math.sin(It)));v(dt,at(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),v(dt,N(),-.6,-5.8),v(dt,q(0,.9),Math.cos(K)*(et.r-1.2)-Math.sin(K)*1.8,Math.sin(K)*(et.r-1.2)+Math.cos(K)*1.8)}const vt={x:-30,z:-20,r:2.6,mouthA:0},ct=l.ripple;ct.wrapS=ct.wrapT=Si;const C=new ye("#1f5f8c"),S=new ye("#6fb6d2"),J=new ye("#a6d8e6"),yt="#bdb3c4",pt=et=>new Kn({map:ct,color:yt,vertexColors:!0,side:Sn,polygonOffset:!0,polygonOffsetFactor:-1-et,polygonOffsetUnits:-4-et*4}),Ot=new ye;function Ft(et,K,dt){const It=Math.hypot(et-vt.x,K-vt.z),x=vd(1-It/vt.r);return Ot.copy(S).lerp(C,x*.95),dt&&Ot.lerp(J,dt*vd((It-vt.r)/1.2)*.45),[Ot.r*1.27,Ot.g*1.27,Ot.b*1.27]}const xt=2.2;{const It=[],x=[],k=[],X=[],F=(U,A)=>{It.push(U,.045,A),x.push(...Ft(U,A,0)),k.push(U/xt,A/xt)};F(vt.x,vt.z);for(let U=1;U<=5;U++)for(let A=0;A<72;A++){const ft=A/72*2*nn,_=vt.r*U/5;F(vt.x+Math.cos(ft)*_,vt.z+Math.sin(ft)*_)}for(let U=0;U<72;U++)X.push(0,1+(U+1)%72,1+U);for(let U=1;U<5;U++)for(let A=0;A<72;A++){const ft=1+(U-1)*72+A,_=1+(U-1)*72+(A+1)%72,P=ft+72,H=_+72;X.push(ft,_,P,_,H,P)}const rt=new dn;rt.setAttribute("position",new Le(It,3)),rt.setAttribute("color",new Le(x,3)),rt.setAttribute("uv",new Le(k,2)),rt.setIndex(X),r.add(f(rt,pt(0),!1));const lt=_a,kt=lt[0],pe=Math.hypot(kt[0]-vt.x,kt[1]-vt.z),Ee=(kt[0]-vt.x)/pe,Oe=(kt[1]-vt.z)/pe;vt.mouthA=Math.atan2(Oe,Ee);const me=[];for(let U=vt.r-1.2;U<pe-.2;U+=.3)me.push([vt.x+Ee*U,vt.z+Oe*U]);me.push(...lt);const Ye=.7,de=vt.r*vt.r,se=Math.sqrt(de-1.5*1.5),we=vt.r+.8,Mn=-(se/1.5)*(we-se),wn=U=>{const A=me[U],ft=Math.hypot(A[0]-vt.x,A[1]-vt.z);if(ft<=se)return Math.sqrt(Math.max(0,de-ft*ft))-.02;if(ft>=we)return Ye;const _=(ft-se)/(we-se),P=_*_,H=P*_;return(2*H-3*P+1)*1.48+(H-2*P+_)*Mn+(-2*H+3*P)*Ye},ni=[],Tn=[],E=[],I=[],V=[-1,-.5,0,.5,1];for(let U=0;U<me.length;U++){const A=me[Math.max(0,U-1)],ft=me[Math.min(me.length-1,U+1)],_=me[U],P=Math.hypot(ft[0]-A[0],ft[1]-A[1])||1,H=-(ft[1]-A[1])/P,Y=(ft[0]-A[0])/P,B=wn(U);for(const ht of V){const At=_[0]+H*ht*B,bt=_[1]+Y*ht*B;ni.push(At,.05,bt),Tn.push(...Ft(At,bt,Math.abs(ht))),E.push(At/xt,bt/xt)}if(U>0)for(let ht=0;ht<4;ht++){const At=(U-1)*5+ht,bt=At+1,Gt=U*5+ht,Yt=Gt+1;I.push(At,Gt,bt,bt,Gt,Yt)}}const Z=new dn;Z.setAttribute("position",new Le(ni,3)),Z.setAttribute("color",new Le(Tn,3)),Z.setAttribute("uv",new Le(E,2)),Z.setIndex(I),r.add(f(Z,pt(1),!1));const ut=[];for(let U=1;U<me.length-1;U+=2){const A=me[U];if(Math.hypot(A[0]-vt.x,A[1]-vt.z)<vt.r+.9)continue;const ft=me[U-1],_=me[U+1],P=Math.hypot(_[0]-ft[0],_[1]-ft[1])||1,H=-(_[1]-ft[1])/P,Y=(_[0]-ft[0])/P,B=wn(U)+.16;for(const ht of[-1,1])ut.push({x:A[0]+H*ht*B,y:.06,z:A[1]+Y*ht*B,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}T(new Gi(1,0),ut,{})}for(const et of e.crossings){const K=i.bridge.clone();K.position.set(et.x,0,et.z),K.rotation.y=et.ang,K.scale.x=(et.len+.6)/3.4,r.add(K)}{const et=Ci.garden;if(et.kind==="house")throw new Error("the garden is an open area");const K=new Tt;K.position.set(et.x,0,et.z),r.add(K);const dt=Math.atan2(4.6,5.6);K.add(i.garden);{const F=Math.cos(dt)*et.r,rt=Math.sin(dt)*et.r,lt=new Tt;lt.position.set(F,0,rt),lt.rotation.y=Math.atan2(Math.cos(dt),Math.sin(dt)),lt.add(u(ot(0).children[2].clone(),0,2.6,0)),K.add(lt)}const It=[],x=[];for(let F=0;F<26;F++){const rt=F/26*2*nn;let lt=Math.abs(rt-vt.mouthA);lt=Math.min(lt,2*nn-lt),!(lt<.62)&&It.push({x:vt.x+Math.cos(rt)*2.75,y:.08,z:vt.z+Math.sin(rt)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let F=0;F<7;F++)x.push({x:vt.x+m(-1.6,1.6),y:.065,z:vt.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});T(new Gi(1,0),It,{}),T(new ie(.22,.22,.02,12),x,{}),v(K,Vt(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),v(K,at(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[F,rt]of[[-5.6,-2.2],[4.9,-.6]]){const lt=new Tt;lt.add(u(f(new ie(.22,.28,.9,6),o.stone),0,.45,0)),lt.add(u(f(new Ct(.5,.36,.5),o.stone),0,1.08,0)),lt.add(u(f(new Ct(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),lt.add(u(f(new Ln(.48,.36,4),o.redD),0,1.44,0)),v(K,lt,F,rt,nn/4)}{const F=new Tt;F.add(u(f(new Ct(.9,.6,.6),o.stone),0,.3,0)),F.add(u(R(.26),0,.75,0));for(const rt of[-1,1])F.add(u(ne(.18),rt*.3,.6,.12));v(K,F,-4.4,-5.4,Math.atan2(4.4,5.4))}fe("tree_willow",1,et.x-6.2,et.z-2.8),fe("tree_cherry",.95,et.x+5.3,et.z-4.9),fe("tree_fruit",.85,et.x-3,et.z+6.2);const k=[];let X=0;for(;k.length<90&&X<4e3;){X++;const F=m(0,2*nn),rt=m(5.3,6.7),lt=Math.cos(F)*rt,kt=Math.sin(F)*rt;Math.min(Math.abs(F-dt),2*nn-Math.abs(F-dt))<.35||Math.hypot(lt-3,kt+3.4)<1.3||Math.hypot(lt-2.2,kt+4.3)<1||k.push({x:et.x+lt,y:.18,z:et.z+kt,sx:.9,sy:.9,sz:.9,c:g([a.red,a.bone,"#d98a3a",a.redL,"#e8c860"])})}T(new an(.11,8,6),k,{})}const wt=y(l.water,1,6),Nt=[];{const et=_a,[K,dt]=et[et.length-1],[It,x]=et[et.length-3],k=Math.hypot(K-It,dt-x),X=(K-It)/k,F=(dt-x)/k,rt=new He(new cn(1.4,40),new Kn({map:wt,color:"#acb5c8",transparent:!0,opacity:.85,side:Sn,depthWrite:!1}));rt.position.set(K+X*.9,-20+.05,dt+F*.9),rt.rotation.y=Math.atan2(X,F),r.add(rt);const lt=new ds({map:l.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let kt=0;kt<9;kt++){const pe=new Wi(lt);pe.position.set(K+X*m(1,2.4),m(-38,-30),dt+F*m(1,2.4)+m(-1,1)),pe.scale.setScalar(m(3,5.5)),r.add(pe),Nt.push(pe)}for(let kt=0;kt<4;kt++){const pe=new Wi(lt);pe.position.set(K+X*1,m(-.6,.3),dt+F*1+m(-.5,.5)),pe.scale.setScalar(m(1,1.6)),r.add(pe),Nt.push(pe)}}for(const et of Gc)if(et.kind==="hut"){const K=Ut({...et,wallH:2.5},{id:et.id,pitch:.66,chimney:et.id==="barracks"?[1.4,-.6]:null});if(et.id==="barracks"&&(Pt(K,jt(),-1.6,-.9),Pt(K,jt(),.4,-.9),Pt(K,re(),2.2,-1.6,-nn/2),Pt(K,q(0,.7),2.3,1.2),D(K,"W",O(3),0,Ve,.3),D(K,"S",ke(.8,1.3),1.6,Ve+2.3,.04)),et.id==="store"){Pt(K,xe(1.6,.6,.9,o.wood),-1.2,-1.3);for(let dt=0;dt<4;dt++)Pt(K,nt(.45),-1.8+dt*.4,-1.3).position.y=Ve+.95;Pt(K,N(),1.6,-1.2),Pt(K,N(.9),1.9,-.4),Pt(K,Q(),.6,-1.3),Pt(K,Q(),1,.6),Pt(K,nt(.6),-1.8,.8,.3)}if(et.id==="stable"){const dt=f(new cn(et.w-.6,et.d-.6),o.straw,!1);dt.rotation.x=-nn/2,Pt(K,dt,0,0).position.y=Ve+.01;for(const It of[-1,1.2])Pt(K,ve(2.2,1.1),It,-.6);Pt(K,Te(),-2.2,-.3,.4),Pt(K,Te(),.1,-.5,-.5).scale.setScalar(.9),Pt(K,gt(),2.4,-1,.2);{const It=new Tt;It.add(u(f(new Ct(1.2,.4,.45),o.wood),0,.2,0)),It.add(p(u(f(new cn(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-nn/2,0,0)),Pt(K,It,2.2,1)}}if(et.id==="granary"){for(let dt=0;dt<6;dt++)Pt(K,Q(),-1.4+dt%3*.5,-1.2+Math.floor(dt/3)*.55);Pt(K,N(),1.5,-1.1);{const dt=f(new Ct(1.2,.8,.8),o.wood);dt.position.y=.4;const It=new Tt;It.add(dt),It.add(u(f(new Ct(1.1,.05,.7),o.straw),0,.78,0)),Pt(K,It,1.2,.7)}}et.id==="barracks"&&(Bt(K,O(4),-1.4,3.3),Bt(K,Et(2.6),3.8,3,.6),Bt(K,it(3),3.6,.6),Bt(K,j(2.4),-3.8,2.4)),et.id==="store"&&(Bt(K,nt(.7),-1.6,2.8,.2),Bt(K,nt(.5),-.9,3.1,.7),Bt(K,Q(),.6,2.9),Bt(K,Q(),1.1,3.2),Bt(K,N(),2.3,2.9)),et.id==="stable"&&(Bt(K,gt(),-2.8,2.6,.3),Bt(K,gt(),-2,3,1.1),Bt(K,qt(),2,3.4,-.3),Qt(K.g,[[-3.2,4.4],[3.2,4.4]],.9)),et.id==="granary"&&(Bt(K,Q(),-1.2,2.6),Bt(K,Q(),-.6,2.9),Bt(K,Q(),-1,3.3),Bt(K,N(.9),1.6,2.7))}else if(et.kind==="windmill"){const K=new Tt;K.position.set(et.x,0,et.z),K.add(u(f(new ie(1.7,2.4,6.6,18),h("#ffffff",{map:y(l.castleWall,3,2.2)})),0,3.3,0)),K.add(u(f(new Ln(2.3,2.8,18),h("#ffffff",{map:y(l.roof,4,1.5)})),0,7.9,0)),K.add(u(f(new Ct(1,1.7,.2),o.woodD),0,.85,2.25));for(const[It,x]of[[.6,3.6],[-.9,4.8]])K.add(u(p(f(new Ct(.5,.6,.1),o.pane,!1),0,It,0),Math.sin(It)*2,x,Math.cos(It)*2));const dt=u(new Tt,0,6.2,2);dt.add(p(f(new ie(.22,.22,.5,10),o.woodD),nn/2,0,0));for(let It=0;It<4;It++){const x=new Tt;x.rotation.z=It*nn/2,x.add(u(f(new Ct(.12,4.4,.08),o.woodD),0,2.3,.2)),x.add(u(f(new Ct(.9,3.4,.04),h("#e3d5b6",{side:Sn})),.5,2.6,.24)),x.add(u(f(new Ct(.06,3.4,.06),o.wood),.95,2.6,.26)),dt.add(x)}K.add(dt),L.push({o:dt,axis:"z",v:.5}),K.add(u(Q(),-1.6,0,2.6)),K.add(u(Q(),-2.2,0,2.2)),r.add(K)}else if(et.kind==="watch"){const K=new Tt;K.position.set(et.x,0,et.z),K.add(i.watch),K.add(u(q(0,.7),.6,6.5,-.6)),r.add(K)}else if(et.kind==="shrine"){const K=new Tt;K.position.set(et.x,0,et.z),K.add(i.altar);for(const dt of[.9,2.5,4.1,5.6])K.add(u(oe(),Math.cos(dt)*1.4,0,Math.sin(dt)*1.4));K.add(u(q(0,.8),1.6,0,1.4)),r.add(K),Kt("dirt",et.x,et.z,3.4,3.4,0,.013)}else{const K=new Tt;K.position.set(et.x,0,et.z),K.add(u(p(Dt(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),K.add(u(p(Dt(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let dt=0;dt<8;dt++){const It=dt/8*2*nn;K.add(u(f(new Gi(.18,0),o.stone),Math.cos(It)*.55,.1,Math.sin(It)*.55))}for(let dt=0;dt<3;dt++)K.add(p(u(f(new ie(.07,.07,.8,6),o.woodD),0,.12,0),nn/2,dt*1.05,0));w(K,0,.12,0,1.8);for(const dt of[.6,2.4,4.4])K.add(u(p(f(new ie(.2,.2,1.4,8),o.wood),0,-dt,nn/2),Math.cos(dt)*1.6,.2,Math.sin(dt)*1.6));K.add(u(j(2.4),-3.2,0,-1.2)),K.add(u(N(),3.1,0,-.8)),r.add(K),Kt("dirt",et.x,et.z,4.2,4,0,.013)}function W(et,K,dt,It=.018,x=o.dark){const k=new G(...K),X=new G(...dt),F=k.distanceTo(X),rt=f(new ie(It,It,F,5),x,!1);return rt.position.copy(k).add(X).multiplyScalar(.5),rt.quaternion.setFromUnitVectors(c,X.clone().sub(k).normalize()),et.add(rt),rt}function _t(){const et=new Tt,K=f(new an(1,22,12,0,nn*2,nn/2,nn/2),h("#ffffff",{map:l.planks}));K.scale.set(2.7,1,1.15),et.add(K);const dt=f(new ie(1,1,.1,24),o.woodL);dt.scale.set(2.62,1,1.1),et.add(u(dt,0,.02,0));const It=f(new Pn(1,.06,6,36),o.woodD);It.rotation.x=nn/2,It.scale.set(2.68,1.13,1),It.position.y=.14,et.add(It),et.add(p(u(f(new ie(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),et.add(u(p(R(.32),0,nn/2,0),2.75,.32,0)),et.add(u(p(M(.8),0,nn/2,0),2.75,.42,0)),et.add(u(f(new ie(.07,.09,2.8,8),o.woodD),.3,1.4,0));const x=u(new Tt,.3,2.85,0);x.add(u(f(new Ct(.9,.36,.02),o.red),.45,0,0)),et.add(x),b.push(x);const k=u(new Tt,-1.5,.06,0);k.add(u(f(new Ct(1.1,.8,1.1),h("#ffffff",{map:l.planks})),0,.4,0)),k.add(u(p(f(new ie(.75,.75,1.3,3),h("#ffffff",{map:l.roof})),0,0,nn/2),0,1.05,0)),k.add(u(f(new Ct(.3,.3,.04),o.pane,!1),.56,.5,0)),et.add(k);const X=f(new an(1,24,16),h("#ffffff",{map:l.balloon}));X.scale.set(3.6,1.5,1.7),X.position.y=4.4,et.add(X);const F=f(new Pn(1,.05,6,40),o.bone);F.rotation.x=nn/2,F.scale.set(3.62,1.72,1),F.position.y=4.1,et.add(F);for(const[lt,kt,pe,Ee]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])W(et,[lt,4.05,kt],[pe,.16,Ee]);const rt=u(new Tt,-2.95,.65,0);rt.add(p(f(new ie(.1,.1,.3,8),o.iron),0,0,nn/2));for(let lt=0;lt<3;lt++){const kt=u(new Tt,0,0,0);kt.rotation.x=lt/3*nn*2,kt.add(u(p(f(new Ct(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),rt.add(kt)}et.add(rt),L.push({o:rt,axis:"x",v:7}),et.add(u(f(new Ct(.06,.9,.7),o.redD),-2.75,.1,0));for(const lt of[2.4,-2.4])et.add(u(f(new an(.1,8,6),d("#ffc070",2.2),!1),lt,.5,0));return et.add(u(nt(.45),1.3,.07,.4)),et.add(u(N(.6),1.2,.07,-.45)),et}const mt=_t(),Wt=_t();{const et=Ps.find(Ee=>Ee.id==="dock");if(!et)throw new Error("no dock road");const K=et.line,[dt,It]=K[K.length-1],[x,k]=K[K.length-4],X=Math.hypot(dt-x,It-k),F=(dt-x)/X,rt=(It-k)/X,lt=new Tt;lt.position.set(dt,0,It),lt.rotation.y=Math.atan2(F,rt),r.add(lt),lt.add(i.dock),lt.add(u(nt(.55),2.8,1.17,6.8));for(const[Ee,Oe]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])lt.add(u(f(new an(.12,8,6),d("#ffc070",2.2),!1),Ee,1.32,Oe));lt.add(u(nt(.6),-.85,.22,1.3)),lt.add(u(nt(.45),-.75,.22,2)),lt.add(u(N(.85),.85,.22,1)),lt.add(u(Q(),.6,.22,3.6)),lt.add(u(it(3.4),-1.45,.22,.4)),mt.position.set(4.1,-.4,5.6),mt.rotation.y=-nn/2,lt.add(mt);const kt=f(new Ct(1.6,.08,.7),o.woodL);kt.position.set(2.3,.05,5.6),kt.rotation.z=-.18,lt.add(kt);const pe=u(new Tt,-4.6,0,-3.8);pe.add(u(St(),-.2,1.6,1.3)),pe.add(u(nt(.6),1.9,0,.8)),pe.add(u(N(),1.8,0,-.4)),lt.add(pe),lt.add(u(p(Re("SKY DOCK"),0,nn/2,0),2.2,0,-2.4)),r.add(Wt),Wt.scale.setScalar(1.5),Wt.userData={a:1.2,r:96,y:15}}{const et=new Tt;et.position.set(-44,0,26),r.add(et);for(const[K,dt,It]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])et.add(u(p(Dt(1.8,2.6,It),0,Math.atan2(-K,-dt),0),K,0,dt));for(let K=0;K<8;K++){const dt=K/8*2*nn;et.add(u(f(new Gi(.18,0),o.stone),Math.cos(dt)*.55,.1,Math.sin(dt)*.55))}w(et,0,.1,0,1.8),et.add(u(j(2.6),3.6,0,1.8)),et.add(u(it(3),-3.6,0,1.6)),et.add(u(p(Et(3),0,.6,0),4.6,0,-2.6)),Kt("dirt",-44,26,5,4.6,.3,.013)}return Kt("field",54,-8,6.5,4.2,.35,.013,3),Kt("field",51,6,5.2,3.6,-.2,.013,3),Kt("field",10,-44.5,6,3.6,.1,.013,3),v(r,Xt(),55.5,-2.6,.4),v(r,gt(),48.6,-12.6,.4),v(r,gt(),49.4,-11.8,1.3),{mouthMat:ee,coreMat:Jt,fireLight:Ht,chimneyTop:Rt,emberBase:te,waterTex:ct,fallTex:wt,mists:Nt,skyBoat:mt,airship:Wt}}const B1=[3,5,7,9,11];function z1(s){const t=[];for(let e=0;e<s;e++)t.push(.39894*Math.exp(-.5*e*e/(s*s))/s);return new ai({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}const k1=`

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

		}`,H1=`varying vec2 vUv;
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
				}`;function G1(s){s.separableBlurMaterials.forEach((t,e)=>{t.dispose(),s.separableBlurMaterials[e]=z1(B1[e]??3)}),s.materialHighPassFilter.fragmentShader=k1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=H1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function V1(s){const t=new Map,e=new Map,n=s.clone();return Yf(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yf(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Yf(s.children[n],t.children[n],e)}class qf extends yr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new K1(e)}),this.register(function(e){return new Z1(e)}),this.register(function(e){return new J1(e)}),this.register(function(e){return new ry(e)}),this.register(function(e){return new oy(e)}),this.register(function(e){return new ay(e)}),this.register(function(e){return new Q1(e)}),this.register(function(e){return new j1(e)}),this.register(function(e){return new ty(e)}),this.register(function(e){return new ey(e)}),this.register(function(e){return new q1(e)}),this.register(function(e){return new ny(e)}),this.register(function(e){return new $1(e)}),this.register(function(e){return new sy(e)}),this.register(function(e){return new iy(e)}),this.register(function(e){return new X1(e)}),this.register(function(e){return new Md(e,sn.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Md(e,sn.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new ly(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=eo.extractUrlBase(t);o=eo.resolveURL(c,this.path)}else o=eo.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Ef(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Kf){try{o[sn.KHR_BINARY_GLTF]=new cy(t)}catch(d){i&&i(d);return}r=JSON.parse(o[sn.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Sy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case sn.KHR_MATERIALS_UNLIT:o[d]=new Y1;break;case sn.KHR_DRACO_MESH_COMPRESSION:o[d]=new hy(r,this.dracoLoader);break;case sn.KHR_TEXTURE_TRANSFORM:o[d]=new uy;break;case sn.KHR_MESH_QUANTIZATION:o[d]=new dy;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function W1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function An(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const sn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X1{constructor(t){this.parser=t,this.name=sn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],mi);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cs(h),c.distance=d;break;case"spot":c=new Um(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Y1{constructor(){this.name=sn.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(t,e,n){const i=[];t.color=new ye(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],mi),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,On))}return Promise.all(i)}}class q1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class K1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Lt(r,r)}return Promise.all(i)}}class Z1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class J1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DISPERSION}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class $1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Q1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SHEEN}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new ye(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],mi)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,On)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class j1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class ty{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_VOLUME}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new ye().setRGB(r[0],r[1],r[2],mi),Promise.all(i)}}class ey{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IOR}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class ny{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SPECULAR}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new ye().setRGB(r[0],r[1],r[2],mi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,On)),Promise.all(i)}}class iy{constructor(t){this.parser=t,this.name=sn.EXT_MATERIALS_BUMP}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class sy{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return An(this.parser,t,this.name)!==null?Ni:null}extendMaterialParams(t,e){const n=An(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class ry{constructor(t){this.parser=t,this.name=sn.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class oy{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class ay{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class Md{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class ly{constructor(t){this.name=sn.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const v=new Ne,m=new G,g=new bn,y=new G(1,1,1),T=new fo(p.geometry,p.material,f);for(let L=0;L<f;L++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,L),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,L),l.SCALE&&y.fromBufferAttribute(l.SCALE,L),T.setMatrixAt(L,v.compose(m,g,y));let b=null;for(const L in l)if(L==="_COLOR_0"){const R=l[L];T.instanceColor=new Ea(R.array,R.itemSize,R.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(b===null){const M=T.geometry;b=new dn,b.name=M.name;for(const w in M.attributes)b.setAttribute(w,M.attributes[w]);for(const w in M.morphAttributes)b.morphAttributes[w]=M.morphAttributes[w];M.index!==null&&b.setIndex(M.index),b.morphTargetsRelative=M.morphTargetsRelative;for(const w of M.groups)b.addGroup(w.start,w.count,w.materialIndex);M.boundingBox!==null&&(b.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(b.boundingSphere=M.boundingSphere.clone()),b.drawRange.start=M.drawRange.start,b.drawRange.count=M.drawRange.count,b.userData=Object.assign({},M.userData),T.geometry=b}const R=l[L];b.setAttribute(L,new Ea(R.array,R.itemSize,R.normalized))}vn.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),u.push(T)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Kf="glTF",zr=12,yd={JSON:1313821514,BIN:5130562};class cy{constructor(t){this.name=sn.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Kf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zr,r=new DataView(t,zr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===yd.JSON){const c=new Uint8Array(t,zr+o,a);this.content=n.decode(c)}else if(l===yd.BIN){const c=zr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=sn.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Bc[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=Bc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],u=cr[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const v=u.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}d(u)},a,c,mi,f)})})}}class uy{constructor(){this.name=sn.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class dy{constructor(){this.name=sn.KHR_MESH_QUANTIZATION}}class Zf extends xr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,d=(n-e)/h,f=d*d,u=f*d,p=t*c,v=p-c,m=-2*u+3*f,g=u-f,y=1-m,T=g-f+d;for(let b=0;b!==a;b++){const L=o[v+b+a],R=o[v+b+l]*h,M=o[p+b+a],w=o[p+b]*h;r[b]=y*L+T*R+m*M+g*w}return r}}const fy=new bn;class py extends Zf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return fy.fromArray(r).normalize().toArray(r),r}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sd={9728:Fn,9729:qn,9984:Bd,9985:la,9986:Vr,9987:Vi},bd={33071:oi,33648:va,10497:Si},Nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},my={CUBICSPLINE:void 0,LINEAR:ao,STEP:oo},Ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bs})),s.DefaultMaterial}function Cs(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function zi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function _y(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(n){const f=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function xy(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vy(s){let t;const e=s.extensions&&s.extensions[sn.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ol(e.attributes):t=s.indices+":"+Ol(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Ol(s.targets[n]);return t}function Ol(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function zc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function My(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yy=new Ne;class Sy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new W1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Dm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Bm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ef(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Cs(r,a,i),zi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[sn.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(eo.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nl[i.type],a=cr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Nl[i.type],c=cr[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let v,m;if(u&&u!==d){const g=Math.floor(f/u),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=e.cache.get(y);T||(v=new c(a,g*u,i.count*u/h),T=new nf(v,u/h),e.cache.add(y,T)),m=new uo(T,l,f%u/h,p)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),m=new Wn(v,l,p);if(i.sparse!==void 0){const g=Nl.SCALAR,y=cr[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,L=new y(o[1],T,i.sparse.count*g),R=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new Wn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=L.length;M<w;M++){const z=L[M];if(m.setX(z,R[M*l]),l>=2&&m.setY(z,R[M*l+1]),l>=3&&m.setZ(z,R[M*l+2]),l>=4&&m.setW(z,R[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Sd[f.magFilter]||qn,h.minFilter=Sd[f.minFilter]||Vi,h.wrapS=bd[f.wrapS]||Si,h.wrapT=bd[f.wrapT]||Si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Fn&&h.minFilter!==qn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){e.parse(f,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let v=u;e.isImageBitmapLoader===!0&&(v=function(m){const g=new kn(m);g.needsUpdate=!0,u(g)}),e.load(eo.resolveURL(f,r.path),v,void 0,p)})})}const d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),zi(f,o),f.userData.mimeType=o.mimeType||My(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[sn.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[sn.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[sn.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Qr,pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new of,pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return mr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[sn.KHR_MATERIALS_UNLIT]){const d=i[sn.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,e))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],mi),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",d.baseColorTexture,On)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Sn);const h=r.alphaMode||Ul.OPAQUE;if(h===Ul.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ul.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Kn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Lt(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Kn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Kn){const d=r.emissiveFactor;a.emissive=new ye().setRGB(d[0],d[1],d[2],mi)}return r.emissiveTexture!==void 0&&o!==Kn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,On)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),zi(d,r),e.associations.set(d,{materials:t}),r.extensions&&Cs(i,d,r),d})}createUniqueName(t){const e=pn.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[sn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return wd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=vy(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[sn.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=wd(new dn,c,e),c.mode===vi.TRIANGLE_STRIP?f=f.then(u=>ud(u,Xd)):c.mode===vi.TRIANGLE_FAN&&(f=f.then(u=>ud(u,Ec))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?gy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const v=h[u],m=o[u];let g;const y=c[u];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0){const T=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&b?new C0(v,y):new He(v,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===vi.LINES)g=new I0(v,y);else if(m.mode===vi.LINE_STRIP)g=new uh(v,y);else if(m.mode===vi.LINE_LOOP)g=new N0(v,y);else if(m.mode===vi.POINTS)g=new Wr(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&xy(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),zi(g,r),m.extensions&&Cs(i,g,m),e.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)e.associations.set(d[u],{meshes:t,primitives:u});if(d.length===1)return r.extensions&&Cs(i,d[0],r),d[0];const f=new Tt;r.extensions&&Cs(i,f,r),e.associations.set(f,{meshes:t});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ci(Ta.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Wa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),zi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new Ne;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ch(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],v=u.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],v=d[3],m=d[4],g=[];for(let T=0,b=f.length;T<b;T++){const L=f[T],R=u[T],M=p[T],w=v[T],z=m[T];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const O=n._createAnimationTracks(L,R,M,w,z);if(O)for(let q=0;q<O.length;q++)g.push(O[q])}const y=new Lc(r,void 0,g);return zi(y,i),y})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,yy)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new G().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new rf:c.length>1?h=new Tt:c.length===1?h=c[0]:h=new vn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&Cs(n,h,r),r.matrix!==void 0){const d=new Ne;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Tt;n.name&&(r.name=i.createUniqueName(n.name)),zi(r,n),n.extensions&&Cs(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(V1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof pi||f instanceof kn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}vs[r.path]===vs.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(vs[r.path]){case vs.weights:h=Mo;break;case vs.rotation:h=yo;break;case vs.translation:case vs.scale:h=Da;break;default:n.itemSize===1?h=Mo:h=Da;break}const d=i.interpolation!==void 0?my[i.interpolation]:ao,f=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const v=new h(l[u]+"."+vs[r.path],e.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=zc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof yo?py:Zf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function by(s,t,e){const n=t.attributes,i=new qi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){const h=zc(cr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new G,l=new G;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=e.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const v=zc(cr[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ki;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function wd(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Bc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return rn.workingColorSpace!==mi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rn.workingColorSpace}" not supported.`),zi(s,t),by(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?_y(s,t.targets,e):s})}const wy="/assets/altar-BLnKV2Du.glb",Ty="/assets/backend-0N1rHeCk.glb",Ey="/assets/bridge-ETZK_L1i.glb",Ay="/assets/designer-DbLc0S5w.glb",Ry="/assets/dock-Dz4b5cxY.glb",Cy="/assets/flora-7jxy9LaY.glb",Py="/assets/forge-DNia5kCh.glb",Ly="/assets/frontend-BagVIkFr.glb",Dy="/assets/garden-iFD0puy8.glb",Iy="/assets/gate-CLzj2aEg.glb",Ny="/assets/house_library-a_INcIO_.glb",Uy="/assets/house_studio-prPn7xt-.glb",Oy="/assets/house_tavern-DhJciONJ.glb",Fy="/assets/house_war-CErgsJUC.glb",By="/assets/house_workshop-DizOAfBl.glb",zy="/assets/lead-B8dKTGTU.glb",ky="/assets/reviewer-CjFLqSzL.glb",Hy="/assets/towers-DiePBDd1.glb",Gy="/assets/underside-CtDt-w8A.glb",Vy="/assets/walls-DL6hLM5P.glb",Wy="/assets/watch-D_FLfKo1.glb",Xy="/assets/yard-BCXHtimJ.glb",Yy="/assets/backend-BO6EdEPd.jpg",qy="/assets/designer-3Dfjr5eY.jpg",Ky="/assets/frontend-ChC8gXK4.jpg",Zy="/assets/lead-BVut_pmU.jpg",Jy="/assets/reviewer-r8WJ7XTx.jpg",$y=Object.assign({"../models/altar.glb":wy,"../models/backend.glb":Ty,"../models/bridge.glb":Ey,"../models/designer.glb":Ay,"../models/dock.glb":Ry,"../models/flora.glb":Cy,"../models/forge.glb":Py,"../models/frontend.glb":Ly,"../models/garden.glb":Dy,"../models/gate.glb":Iy,"../models/house_library.glb":Ny,"../models/house_studio.glb":Uy,"../models/house_tavern.glb":Oy,"../models/house_war.glb":Fy,"../models/house_workshop.glb":By,"../models/lead.glb":zy,"../models/reviewer.glb":ky,"../models/towers.glb":Hy,"../models/underside.glb":Gy,"../models/walls.glb":Vy,"../models/watch.glb":Wy,"../models/yard.glb":Xy}),kc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},Hi=["lead","designer","frontend","backend","reviewer"],Qy=Object.assign({"../models/backend.jpg":Yy,"../models/designer.jpg":qy,"../models/frontend.jpg":Ky,"../models/lead.jpg":Zy,"../models/reviewer.jpg":Jy});function Ah(s){const t=$y[`../models/${s}.glb`];if(!t)throw new Error(`no model ${s} in the bundle`);return t}function jy(s){const t=Qy[`../models/${s}`];if(!t)throw new Error(`no texture ${s} in the bundle`);return t}const Fl=new Ne,tS=new Ne;function Jf(s){const t=new Set;return s.scene.traverse(e=>{const n=e.userData.woa_q;if(n&&(Fl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),e.matrix.compose(e.position,e.quaternion,e.scale).multiply(tS.copy(Fl).invert()),e.matrix.decompose(e.position,e.quaternion,e.scale)),!(e instanceof He)||t.has(e.geometry))return;const i=e.geometry;t.add(i);for(const[o,a]of Object.entries(i.attributes)){if(o==="skinIndex"||a.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in a))continue;const l=a.itemSize,c=new Float32Array(a.count*l);for(let h=0;h<a.count;h++)c[h*l]=a.getX(h),l>1&&(c[h*l+1]=a.getY(h)),l>2&&(c[h*l+2]=a.getZ(h)),l>3&&(c[h*l+3]=a.getW(h));i.setAttribute(o,new Wn(c,l))}const r=n||e.parent?.userData.woa_q;r&&i.applyMatrix4(Fl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function $f(s,t){const e=t,n=e.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((e.emissiveIntensity||1)*40)/100)):s.toon("#"+e.color.getHexString())}const eS=s=>s.isMeshStandardMaterial===!0;function Qf(s,t){const e=new Map;return t.traverse(n=>{if(!(n instanceof He))return;const i=$f(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.applyMatrix4(n.matrixWorld);const a=e.get(i);a?a.push(o):e.set(i,[o])}),e}function nS(s,t){t.scene.updateMatrixWorld(!0);const e=new Tt;for(const[n,i]of Qf(s,t.scene)){const r=i.length===1?i[0]:wh(i,!1);if(!r)continue;const o=new He(r,n);o.castShadow=!eS(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,e.add(o)}return e}function jf(s,t){let e=null;return s.scene.traverse(n=>{!e&&(n.userData.name===t||n.name===t)&&(e=n)}),e}async function iS(){const s=new qf,t=Object.keys(kc),e=await Promise.all(t.map(n=>s.loadAsync(Ah(n)).then(Jf)));return Object.fromEntries(t.map((n,i)=>[n,e[i]]))}function sS(s,t){const e={};for(const n of Object.keys(kc)){const i=t[n];e[n]=kc[n]==="static"?nS(s,i):i}return e}const er={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function rS(s,t){const e=.075*s/1.8,n=(t-e)*.5;return Math.max(.5,n+e-.02)}const Bl={intensity:2.5,distance:4},oS=.59;function aS(s){const t=Ah(s),e=new Tf;return e.setURLModifier(n=>n===t?n:jy(n.slice(n.lastIndexOf("/")+1))),new qf(e)}async function lS(){const s=await Promise.all(Hi.map(t=>aS(t).loadAsync(Ah(t)).then(Jf)));return s.forEach((t,e)=>{t.scene.traverse(n=>{if(n instanceof He&&!n.material.map)throw new Error(`the ${Hi[e]} model's texture did not load`)})}),Object.fromEntries(Hi.map((t,e)=>[t,s[e]]))}function cS(s){const t=xa.filter(n=>n.kind==="house"),e=Ci.forge;return(n,i)=>{for(const r of t){const[o,a]=no(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(a)<r.d/2+.1)return Ve;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&a>r.deck[2]&&a<r.deck[3])return .2}if(Math.hypot(n-e.x,i-e.z)<7.8)return .16;for(const r of s){const o=n-r.x,a=i-r.z,l=(r.len+.6)/2,c=o*Math.cos(r.ang)-a*Math.sin(r.ang),h=o*Math.sin(r.ang)+a*Math.cos(r.ang);if(Math.abs(c)<l&&Math.abs(h)<.6)return .12+.32*(1-(c/l)**2)}return .02}}const hS=.055,Ua=new G,Kr=new G,Td=new G,uS=new G,ga=new G,zl=new G,dS=new G,Ed=new bn,Ad=new bn,Oa=new bn,Rd=new bn,kl=new Cf;function Cd(s,t,e){Ed.setFromUnitVectors(t,e),s.getWorldQuaternion(Ad),s.parent.getWorldQuaternion(Oa).invert(),s.quaternion.copy(Oa.multiply(Ed).multiply(Ad)),s.updateMatrixWorld(!0)}function fS(s,t,e,n){const i=s.up.getWorldPosition(Kr),r=s.low.getWorldPosition(Td),o=s.foot.getWorldPosition(Ua);s.foot.getWorldQuaternion(Rd);const a=i.distanceTo(r),l=r.distanceTo(o),c=ga.set(o.x,t+e,o.z).sub(i),h=Ta.clamp(c.length(),Math.abs(a-l)+1e-4,a+l-1e-4);c.normalize();const d=zl.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=Ta.clamp((a*a+h*h-l*l)/(2*a*h),-1,1),u=dS.copy(i).addScaledVector(c,a*f).addScaledVector(d,a*Math.sqrt(1-f*f)),p=uS.copy(i).addScaledVector(c,h);Cd(s.up,zl.subVectors(r,i).normalize(),ga.subVectors(u,i).normalize());const v=s.low.getWorldPosition(Td),m=s.foot.getWorldPosition(Ua);Cd(s.low,zl.subVectors(m,v).normalize(),ga.subVectors(p,v).normalize()),s.foot.parent.getWorldQuaternion(Oa).invert(),s.foot.quaternion.copy(Oa.multiply(Rd)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function pS(s,t,e,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of Hi){const f=new Tt;f.userData.agentId=d,t.add(f);const u=Qn[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:v,speed:m}=er[d],g=e[d],y=g.scene;y.updateMatrixWorld(!0);const T=new qi().setFromObject(y),b=p/Math.max(.01,T.max.y-T.min.y);y.scale.setScalar(b);const L=-T.min.y*b;y.position.y=L;const R=new Map;y.traverse(ot=>{if(!(ot instanceof He))return;const nt=ot.material;let Q=R.get(nt);Q||(nt.map&&(nt.map.colorSpace=On),Q=i("#ffffff",{map:nt.map??null}),R.set(nt,Q)),ot.material=Q,ot.castShadow=!0,ot.receiveShadow=!0,ot.frustumCulled=!1,ot.raycast=()=>{}});let M=null,w=null;if(d==="reviewer"){M=new cs("#6dffa0",Bl.intensity,Bl.distance,2),M.position.set(-.18,2.2,.35),f.add(M);const ot=y.getObjectByName("mixamorigRightHand");if(!ot)throw new Error("the reviewer model has no right hand");const nt=new Tt,Q=new Tt;nt.add(Q);const St=new Wi(new ds({map:n.flameTex,color:new ye(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));St.center.set(.5,.05),St.scale.set(.16,.3,1),St.position.y=.02;const Xt=new Wi(new ds({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:Ai}));Xt.scale.setScalar(.25),Xt.position.y=.08,St.raycast=()=>{},Xt.raycast=()=>{},Q.add(St,Xt),ot.add(nt),y.updateMatrixWorld(!0),nt.scale.setScalar(1/ot.getWorldScale(new G).x),w={group:nt,flicker:Q}}const z={};for(const ot of g.animations){const nt=ot.tracks.find(Q=>/Hips\.position$/.test(Q.name));nt&&(z[ot.name]=nt.values[1]*b)}const O=new tg(y),q={};for(const ot of g.animations){const nt=O.clipAction(ot);nt.enabled=!0,nt.setEffectiveTimeScale(1),nt.setEffectiveWeight(ot.name==="idle"?1:0),nt.time=Math.random()*ot.duration,nt.play(),q[ot.name]=nt}if(!q.idle||!q.walk||!q.sit||!q.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const it=Math.min(2.6,Math.max(.8,m/(oS*p)));q.walk.timeScale=it,O.update(0);const j=ot=>y.getObjectByName("mixamorig"+ot),N=["Left","Right"].map(ot=>({up:j(ot+"UpLeg"),low:j(ot+"Leg"),foot:j(ot+"Foot")}));y.updateMatrixWorld(!0);const st=N.every(ot=>ot.up&&ot.low&&ot.foot)?N.map(ot=>({up:ot.up,low:ot.low,foot:ot.foot,saved:[new bn,new bn,new bn]})):null,at=st?Math.min(...st.map(ot=>ot.foot.getWorldPosition(Ua).y)):0,$=j("Hips");if(!$)throw new Error(`the ${d} model has no hips`);f.add(y),o[d]={id:d,root:f,H:p,seatY:rS(p,v),phase:n.phases[d],model:{obj:y,mixer:O,acts:q,cur:"idle",baseY:L,walkScale:it,seat:z,hips:$,legs:st,ankleH:at,bent:!1,ikW:0},lantern:M,lamp:w}}const a=new Map;function l(d,f,u,p){const v=a.get(d);if(v!==void 0)return v;const m=[];for(const[y,T]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){kl.set(Ua.set(f+y,p+1.2,u+T),ga.set(0,-1,0)),kl.far=1.3;for(const b of kl.intersectObjects(t.children,!0)){let L=!1,R=!0;for(let z=b.object;z;z=z.parent)z.userData.agentId&&(L=!0),z.visible||(R=!1);const M=b.point.y-p,w=b.object;if(!L&&R&&w.isMesh&&!w.material.transparent&&M>.25&&M<.66){m.push(M);break}}}const g=m.length?Math.max(...m):null;return a.set(d,g),g}function c(d,f,u,p,v=1){const m=d.model;if(m.bent&&m.legs)for(const O of m.legs)O.up.quaternion.copy(O.saved[0]),O.low.quaternion.copy(O.saved[1]),O.foot.quaternion.copy(O.saved[2]);m.bent=!1;const g=Gf[f],y=g&&m.acts[g]?g:"idle";if(y!==m.cur){const O=m.acts[m.cur],q=m.acts[y];q.enabled=!0,q.setEffectiveWeight(1),q.time=0,r?O.setEffectiveWeight(0):O.crossFadeTo(q,.3,!1),m.cur=y}y==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*v)),m.mixer.update(r?0:u);const T=y!=="walk"&&y!=="idle";let b=null;const L=n.groundY(d.root.position.x,d.root.position.z);if(T&&p&&m.legs&&m.acts[y].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const O=m.hips.getWorldPosition(Kr);b=l(p+"|"+d.id,O.x,O.z,L)}let R=m.baseY,M=0,w=0;if(b!==null){R=m.obj.position.y+(L+b+hS*d.H)-Kr.y;const O=d.root.rotation.y,q=Math.cos(O),it=Math.sin(O),j=d.root.position.x-Kr.x,N=d.root.position.z-Kr.z;M=m.obj.position.x+j*q-N*it,w=m.obj.position.z+j*it+N*q}else T&&m.seat[y]!==void 0&&(R=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[y])));const z=r?1:Math.min(1,u*8);if(m.obj.position.x+=(M-m.obj.position.x)*z,m.obj.position.y+=(R-m.obj.position.y)*z,m.obj.position.z+=(w-m.obj.position.z)*z,m.ikW=b===null?0:Math.min(1,m.ikW+(r?1:u/.3)),b!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const O of m.legs)O.saved[0].copy(O.up.quaternion),O.saved[1].copy(O.low.quaternion),O.saved[2].copy(O.foot.quaternion),fS(O,L,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!Th.has(f)&&f!=="read"?Bl.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const kr=new G;function xi(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;kr.copy(t),kr[n]=0,kr.normalize();const c=.5*o/(o+a),h=1-kr.angleTo(s)/l;return Math.sign(kr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class qa extends Ct{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new G,c=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,v=new G,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),u[y+0]=xi(v,c,"z","y",r,n),u[y+1]=1-xi(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),u[y+0]=1-xi(v,c,"z","y",r,n),u[y+1]=1-xi(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),u[y+0]=1-xi(v,c,"x","z",r,t),u[y+1]=xi(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[y+0]=1-xi(v,c,"x","z",r,t),u[y+1]=1-xi(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[y+0]=1-xi(v,c,"x","y",r,t),u[y+1]=1-xi(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),u[y+0]=xi(v,c,"x","y",r,t),u[y+1]=1-xi(v,c,"y","x",r,e);break}}static fromJSON(t){return new qa(t.width,t.height,t.depth,t.segments,t.radius)}}const mS="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:ss}=Math,Hc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function gS(){const s=new FontFace("M PLUS Rounded 1c",`url("${mS}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const si={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function _S(s,t,e,n){s.setPixelRatio(Math.min(n,2)),s.setSize(t,e),s.shadowMap.enabled=!0,s.shadowMap.type=Zr,s.toneMapping=Ba,s.toneMappingExposure=.95}function Pd(s){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function xS(s,t){const e=new Ha(new Uint8Array([70,150,255]),3,1,za);e.minFilter=e.magFilter=Fn,e.generateMipmaps=!1,e.needsUpdate=!0;const n=new Kn({color:2824987,side:jn}),i=0,r=1,o=new G(0,1,0),a={uRimColor:{value:new ye("#ffd2a6")},uRimAmt:{value:.45}};function l(x){return x.onBeforeCompile=k=>{k.uniforms.uRimColor=a.uRimColor,k.uniforms.uRimAmt=a.uRimAmt,k.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+k.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},x.customProgramCacheKey=()=>"rim1",x}const c=new Map;function h(x,k){if(!k){let X=c.get(x);return X||(X=l(new fa({color:x,gradientMap:e})),c.set(x,X)),X}return l(new fa(Object.assign({color:x,gradientMap:e},k)))}const d=new Map;function f(x,k=2){const X=x+k;let F=d.get(X);return F||(F=new mr({color:0,emissive:x,emissiveIntensity:k,roughness:1}),d.set(X,F)),F}function u(x,k,X=!0){k&&k.userData.autoUV&&x.attributes.uv&&!x.userData.planar&&(x.type==="BoxGeometry"||x.type==="RoundedBoxGeometry")&&(q(x,.9),x.userData.planar=!0);const F=new He(x,k);return F.castShadow=X,F.receiveShadow=!0,F}const p=(x,k,X,F=.03)=>new qa(x,k,X,2,Math.min(F,x/2.1,k/2.1,X/2.1));function v(x,k,X=i,F=!0){const rt=u(x,k,F);if(X){const lt=new He(x,n);lt.scale.setScalar(1+X*r),lt.raycast=()=>{},rt.add(lt)}return rt}function m(x,k,X,F){return x.position.set(k,X,F),x}function g(x,k,X,F){return x.rotation.set(k,X,F),x}function y(x,k,X,F,rt=0,lt=0){return k.position.set(X,lt,F),k.rotation.y=rt,x.add(k),k}function T(x,k,X,F,rt,lt,kt=i*1.6,pe=7){const Ee=X.clone().normalize(),Oe=v(new Ln(rt,F,pe),lt,kt);return Oe.quaternion.setFromUnitVectors(o,Ee),Oe.position.copy(k).addScaledVector(Ee,F*.45),x.add(Oe),Oe}const b=Pd(20261116),L=(x,k)=>x+(k-x)*b(),R=x=>x[Math.floor(b()*x.length)],M=Pd(777),w=(x,k)=>x+(k-x)*M();function z(x,k,X,F){const rt=document.createElement("canvas");rt.width=x,rt.height=k;const lt=rt.getContext("2d");lt&&X(lt,x,k);const kt=new Rc(rt);return kt.colorSpace=On,kt.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),kt.wrapS=kt.wrapT=Si,F&&kt.repeat.set(F[0],F[1]),kt}function O(x,k,X){const F=x.clone();return F.wrapS=F.wrapT=Si,F.repeat.set(k,X),F.needsUpdate=!0,F}function q(x,k=1,X=k){const F=x.attributes.position,rt=x.attributes.normal,lt=x.attributes.uv;for(let kt=0;kt<F.count;kt++){const pe=Math.abs(rt.getX(kt)),Ee=Math.abs(rt.getY(kt)),Oe=Math.abs(rt.getZ(kt));let me,Ye;Ee>=pe&&Ee>=Oe?(me=F.getX(kt),Ye=F.getZ(kt)):pe>=Oe?(me=F.getZ(kt),Ye=F.getY(kt)):(me=F.getX(kt),Ye=F.getY(kt)),lt.setXY(kt,me/k,Ye/X)}return lt.needsUpdate=!0,x}function it(x,k,X,F=0,rt=k){const lt=x.attributes.position,kt=x.attributes.normal,pe=x.attributes.uv;for(let Ee=0;Ee<lt.count;Ee++){const Oe=Math.abs(kt.getX(Ee)),me=Math.abs(kt.getZ(Ee)),Ye=(Oe>me?lt.getZ(Ee):lt.getX(Ee))/X;pe.setXY(Ee,Ye,(lt.getY(Ee)+k/2+F)/rt)}return pe.needsUpdate=!0,x}const j=new Ne,N=new bn,st=new Yi,at=new G,$=new G,ot=new ye;function nt(x,k,X={}){if(!k.length)return null;const F=X.mat||l(new fa({color:16777215,gradientMap:e})),rt=new fo(x,F,k.length);return rt.castShadow=!!X.cast,rt.receiveShadow=X.receive!==!1,k.forEach((lt,kt)=>{lt.m?j.copy(lt.m):(st.set(lt.rx||0,lt.ry||0,lt.rz||0),N.setFromEuler(st),at.set(lt.x??0,lt.y??0,lt.z??0),$.set(lt.sx??1,lt.sy??1,lt.sz??1),j.compose(at,N,$)),rt.setMatrixAt(kt,j),(!X.mat||X.colors)&&rt.setColorAt(kt,ot.set(lt.c||"#ffffff"))}),rt.instanceMatrix.needsUpdate=!0,rt.instanceColor&&(rt.instanceColor.needsUpdate=!0),rt.computeBoundingSphere(),(X.parent||t).add(rt),rt}const Q=new Ct(1,1,1);function St(x,k,X,F=!0){return X.length?nt(Q,X.map(([rt,lt,kt,pe,Ee,Oe,me=0,Ye=0,de=0])=>({x:rt,y:lt,z:kt,sx:pe,sy:Ee,sz:Oe,rx:me,ry:Ye,rz:de})),{mat:k,parent:x,cast:F}):null}function Xt(x,k,X,F,rt,lt,kt,pe){for(let Ee=0;Ee<rt;Ee++){const Oe=w(0,k),me=w(0,X),Ye=w(lt,kt);for(const[de,se]of[[0,0],[k,0],[-k,0],[0,X],[0,-X]]){const we=x.createRadialGradient(Oe+de,me+se,0,Oe+de,me+se,Ye),Mn=F[Math.floor(M()*F.length)];we.addColorStop(0,Mn+pe),we.addColorStop(1,Mn+"00"),x.fillStyle=we,x.fillRect(Oe+de-Ye,me+se-Ye,Ye*2,Ye*2)}}}function ue(x,k,X,F=.16){x.globalCompositeOperation="destination-in";const rt=x.createLinearGradient(0,0,k,0);rt.addColorStop(0,"rgba(0,0,0,0)"),rt.addColorStop(F,"rgba(0,0,0,1)"),rt.addColorStop(1-F,"rgba(0,0,0,1)"),rt.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=rt,x.fillRect(0,0,k,X),x.globalCompositeOperation="source-over"}function gt(x,k,X,F,rt,lt,kt,pe,Ee,Oe,me){for(let Ye=X;Ye<rt;Ye+=lt){let de=k-w(0,pe);for(;de<F;){const se=w(kt,pe);x.fillStyle=Ee[Math.floor(M()*Ee.length)],x.beginPath(),x.roundRect(de+Oe,Ye+Oe,se-Oe*2,lt-Oe*2,me),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(de+Oe*2,Ye+Oe*1.5,se-Oe*4,3),de+=se}}}function Vt(x,k,X,F,rt,lt,kt,pe,Ee){const Oe=X/F;for(let me=0;me<F;me++){const Ye=me*Oe;let de=w(0,lt);const se=de;for(;de<se+k;){const we=Math.min(w(rt,lt),se+k-de);if(we<rt*.5)break;const Mn=kt[Math.floor(M()*kt.length)];for(const wn of[0,-k])x.fillStyle=Mn,x.beginPath(),x.roundRect(de+wn+pe,Ye+pe,we-pe*2,Oe-pe*2,Ee),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(de+wn+pe*2,Ye+pe*1.5,we-pe*4,3);de+=we}}}function ne(x,k,X,F){for(let rt=0;rt<8;rt++){let lt=-w(0,200);for(;lt<k;){const kt=w(160,340);x.fillStyle=F[Math.floor(M()*F.length)],x.fillRect(lt,rt*64,kt,64),x.strokeStyle="rgba(255, 230, 200, 0.06)",x.lineWidth=2;for(let pe=0;pe<3;pe++){const Ee=rt*64+w(10,54);x.beginPath(),x.moveTo(lt+6,Ee),x.bezierCurveTo(lt+kt*.3,Ee+w(-4,4),lt+kt*.6,Ee+w(-4,4),lt+kt-6,Ee),x.stroke()}x.fillStyle="rgba(20, 10, 6, 0.4)",x.fillRect(lt,rt*64,3,64),x.fillStyle="rgba(20, 10, 6, 0.35)",x.beginPath(),x.arc(lt+10,rt*64+14,2.5,0,ss*2),x.arc(lt+10,rt*64+50,2.5,0,ss*2),x.fill(),lt+=kt}x.fillStyle="rgba(20, 10, 6, 0.45)",x.fillRect(0,rt*64,k,3)}}const fe=(x,k,X)=>{const F=x.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,k),F.addColorStop(1,X),x.fillStyle=F,x.fillRect(0,0,64,64)},jt=z(512,512,(x,k,X)=>{x.fillStyle="#6f8b49",x.fillRect(0,0,k,X),Xt(x,k,X,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let F=0;F<900;F++){x.strokeStyle=M()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",x.lineWidth=2;const rt=w(0,k),lt=w(0,X);x.beginPath(),x.moveTo(rt,lt),x.lineTo(rt+w(-2,2),lt-w(5,10)),x.stroke()}}),re=z(256,256,(x,k,X)=>{x.fillStyle="#8b6a4b",x.fillRect(0,0,k,X),Xt(x,k,X,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let F=0;F<120;F++)x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",x.beginPath(),x.ellipse(w(0,k),w(0,X),w(1.5,4),w(1,3),w(0,3),0,ss*2),x.fill()}),ke=z(256,256,(x,k,X)=>{x.fillStyle="#b0906a",x.fillRect(0,0,k,X),Xt(x,k,X,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let F=0;F<160;F++)x.fillStyle="rgba(120, 90, 60, 0.25)",x.fillRect(w(0,k),w(0,X),2,2)}),xe=z(512,512,(x,k,X)=>{x.fillStyle="#5b524c",x.fillRect(0,0,k,X),Vt(x,k,X,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),ve=z(512,512,(x,k,X)=>{x.fillStyle="#6a6058",x.fillRect(0,0,k,X),Vt(x,k,X,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),Te=z(512,512,(x,k,X)=>{x.fillStyle="#8f6c4b",x.fillRect(0,0,k,X),Xt(x,k,X,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let F=0;F<260;F++){const rt=w(6,k-6),lt=w(6,X-6);x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",x.beginPath(),x.ellipse(rt,lt,w(1.5,4),w(1,3),0,0,ss*2),x.fill()}}),Et=z(256,512,(x,k,X)=>{const F=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let rt=0;for(const[lt,kt]of F)x.fillStyle=lt,x.fillRect(0,rt,k,kt*X+2),rt+=kt*X;Xt(x,k,X,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let lt=0;lt<40;lt++){x.strokeStyle="rgba(40, 26, 18, 0.35)",x.lineWidth=2;const kt=w(0,k),pe=w(.15*X,X);x.beginPath(),x.moveTo(kt,pe),x.lineTo(kt+w(-10,10),pe+w(10,40)),x.stroke()}x.fillStyle="#5a7a44";for(let lt=0;lt<k;lt+=6)x.beginPath(),x.moveTo(lt,0),x.lineTo(lt+3,w(14,34)),x.lineTo(lt+6,0),x.fill()}),qt=z(256,128,(x,k,X)=>{x.fillStyle="#7a2420",x.fillRect(0,0,k,X);for(let F=0;F<8;F++)x.fillStyle=F%2?"#8a2a24":"#6a1e1a",x.fillRect(F*32,0,32,X);x.fillStyle="#e3d5b6",x.fillRect(0,X*.46,k,X*.08),x.fillStyle="#2a2224",x.fillRect(0,X*.43,k,3),x.fillRect(0,X*.57,k,3)}),Qt=z(256,256,(x,k,X)=>{for(let F=0;F<2;F++)x.fillStyle=["#a59a8c","#958a7d"][F],x.beginPath(),x.ellipse(k/2+w(-20,20),X*(.25+F*.5),k*.32,X*.17,w(-.3,.3),0,ss*2),x.fill()}),oe=z(512,512,(x,k,X)=>{x.fillStyle="#5f5650",x.fillRect(0,0,k,X),gt(x,0,0,k,X,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),Dt=z(512,512,(x,k,X)=>ne(x,k,X,["#5a3a2a","#4e3224","#62402e","#553728"])),Re=z(512,512,(x,k,X)=>ne(x,k,X,["#4a3226","#553a2b","#3f2a20","#4e3428"])),Kt=z(512,512,(x,k,X)=>ne(x,k,X,["#a17a55","#94704d","#ab845e","#9a7552"])),Ut=z(512,512,(x,k,X)=>ne(x,k,X,["#7a5236","#6e4a31","#84593b","#734d33"])),Pt=z(512,512,(x,k,X)=>{x.fillStyle="#3f3a3a",x.fillRect(0,0,k,X);for(let F=0;F<4;F++)for(let rt=0;rt<4;rt++)x.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(rt+F*3)%4],x.beginPath(),x.roundRect(rt*128+4,F*128+4,120,120,6),x.fill(),x.fillStyle="rgba(255,255,255,0.05)",x.fillRect(rt*128+10,F*128+10,108,6)}),Bt=z(512,512,(x,k,X)=>{x.fillStyle="#4f4843",x.fillRect(0,0,k,X),gt(x,0,0,k,X,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),D=z(512,512,(x,k,X)=>{x.fillStyle="#4a433f",x.fillRect(0,0,k,X),gt(x,0,0,k,X,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Xt(x,k,X,["#3e5a34","#4a3a30"],14,20,60,"30")}),ee=z(512,512,(x,k,X)=>{for(let F=0;F<8;F++)x.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][F%4],x.fillRect(F*64,0,64,X),x.fillStyle="rgba(25, 14, 10, 0.45)",x.fillRect(F*64,0,3,X),x.fillStyle="rgba(255, 220, 190, 0.05)",x.fillRect(F*64+8,0,3,X);x.fillStyle="#7a2320",x.fillRect(0,34,k,70),x.strokeStyle="#d9c9a6",x.lineWidth=6,x.lineJoin="round",x.beginPath();for(let F=0;F<=k;F+=32)x.lineTo(F,F%64?52:86);x.stroke()}),Jt=z(256,256,(x,k,X)=>{x.fillStyle="#4e1612",x.fillRect(0,0,k,X);for(let F=0;F<8;F++){const rt=F%2?16:0;for(let lt=-32;lt<k+32;lt+=32)x.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(M()*4)],x.beginPath(),x.roundRect(lt+rt+1,F*32+2,30,30,[2,2,12,12]),x.fill(),x.fillStyle="rgba(255, 200, 170, 0.12)",x.fillRect(lt+rt+5,F*32+5,22,3);x.fillStyle="rgba(30, 6, 6, 0.35)",x.fillRect(0,F*32,k,3)}}),Ht=z(256,256,(x,k,X)=>{for(let F=0;F<4;F++)x.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][F],x.fillRect(F*64,0,64,X),x.fillStyle="rgba(20, 8, 6, 0.45)",x.fillRect(F*64,0,3,X)}),Rt=z(256,512,(x,k,X)=>{x.fillStyle="#6e1a19",x.fillRect(0,0,k,X),x.fillStyle="#2a1e1f",x.fillRect(0,0,k,26),x.fillRect(0,0,14,X),x.fillRect(k-14,0,14,X),x.fillStyle="#b08a3e",x.fillRect(0,26,k,6),x.fillStyle="#e3d5b6",x.beginPath(),x.moveTo(52,300),x.lineTo(204,300),x.lineTo(188,332),x.lineTo(156,332),x.lineTo(164,368),x.lineTo(196,368),x.lineTo(196,396),x.lineTo(60,396),x.lineTo(60,368),x.lineTo(92,368),x.lineTo(100,332),x.lineTo(68,332),x.closePath(),x.fill(),x.beginPath(),x.moveTo(128,120),x.bezierCurveTo(168,164,176,192,164,216),x.bezierCurveTo(152,236,104,236,92,216),x.bezierCurveTo(80,192,100,176,112,152),x.bezierCurveTo(120,168,124,172,132,176),x.bezierCurveTo(132,160,128,140,128,120),x.fill(),x.fillStyle="#6e1a19",x.beginPath(),x.moveTo(0,X),x.lineTo(k/2,X-60),x.lineTo(k,X),x.fill()}),te=z(64,256,(x,k,X)=>{x.fillStyle="#6fa9c9",x.fillRect(0,0,k,X);for(let F=0;F<40;F++)x.fillStyle=F%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",x.fillRect(F*23%64,F*41%256,3+F%3*2,18+F%5*10)}),vt=z(128,128,(x,k,X)=>{x.fillStyle="#c4c4c4",x.fillRect(0,0,k,X);for(let F=0;F<70;F++){const rt=F*37%k,lt=(F*59+F%7*11)%X,kt=4+F%4*3;x.fillStyle=F%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",x.beginPath(),x.ellipse(rt,lt,kt,1.2+F%3*.5,F*.7%3.14,0,2*Math.PI),x.fill(),rt+kt>k&&(x.beginPath(),x.ellipse(rt-k,lt,kt,1.4,F*.7%3.14,0,2*Math.PI),x.fill())}}),ct=z(256,180,(x,k,X)=>{x.fillStyle="#efe4cc",x.fillRect(0,0,k,X),x.strokeStyle="#4f76b0",x.lineWidth=3,x.strokeRect(20,20,216,30),x.strokeRect(20,62,66,46),x.strokeRect(95,62,66,46),x.strokeRect(170,62,66,46),x.strokeRect(20,120,216,42),x.strokeStyle="#b8483e",x.beginPath(),x.moveTo(26,150),x.lineTo(80,132),x.lineTo(130,145),x.lineTo(226,126),x.stroke()}),C=z(256,200,(x,k,X)=>{const F=x.createLinearGradient(0,0,0,X);F.addColorStop(0,"#d98a62"),F.addColorStop(1,"#f2d2a8"),x.fillStyle=F,x.fillRect(0,0,k,X),x.fillStyle="#5c6f48",x.beginPath(),x.moveTo(0,150),x.quadraticCurveTo(80,100,150,140),x.quadraticCurveTo(210,120,256,135),x.lineTo(256,200),x.lineTo(0,200),x.fill(),x.fillStyle="#4a3a3c",x.fillRect(150,70,44,72),x.fillStyle="#7a2420",x.beginPath(),x.moveTo(144,72),x.lineTo(172,40),x.lineTo(200,72),x.fill(),x.fillStyle="#ffd27a",x.fillRect(165,92,14,18)}),S=z(256,200,x=>{x.fillStyle="#c8b18a",x.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((k,X)=>{x.fillStyle=k,x.fillRect(16+X%3*78,16+Math.floor(X/3)*60,66,48)}),x.fillStyle="#efe4cc",x.fillRect(16,140,224,44),x.fillStyle="#2b3a36",x.fillRect(28,152,120,8),x.fillRect(28,166,80,6)}),J=z(256,160,(x,k,X)=>{x.fillStyle="rgba(40, 200, 220, 0.18)",x.fillRect(0,0,k,X);const F=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let rt=0;rt<9;rt++)x.fillStyle=F[rt%4],x.fillRect(18+rt%3*12,18+rt*14,40+rt*53%140,6)}),yt=z(256,128,(x,k,X)=>{x.fillStyle="#3d6f99",x.fillRect(0,0,k,X),x.fillStyle="#8aa866";for(const[F,rt,lt,kt]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])x.beginPath(),x.ellipse(F,rt,lt,kt,.3,0,ss*2),x.fill()}),pt=z(128,128,(x,k,X)=>{x.fillStyle="#c9a75a",x.fillRect(0,0,k,X);for(let F=0;F<160;F++){x.strokeStyle=F%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",x.lineWidth=2;const rt=w(0,k),lt=w(0,X);x.beginPath(),x.moveTo(rt,lt),x.lineTo(rt+6,lt+2),x.stroke()}}),Ot=z(128,128,x=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((k,X)=>{x.fillStyle=k,x.beginPath(),x.arc(64,64,62-X*12,0,ss*2),x.fill()})}),Ft=z(256,256,(x,k,X)=>{x.fillStyle="#7a5a3c",x.fillRect(0,0,k,X);for(let F=0;F<8;F++)x.fillStyle=F%2?"#8a9a48":"#a7a24e",x.fillRect(0,F*32+6,k,20)}),xt=z(64,64,x=>fe(x,"rgba(255,255,255,1)","rgba(255,255,255,0)")),wt=z(64,64,x=>fe(x,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Nt=z(64,64,x=>{x.translate(32,32),x.fillStyle="#fff6c8",x.beginPath();for(let k=0;k<8;k++){const X=k%2?9:30,F=k*ss/4;x.lineTo(Math.cos(F)*X,Math.sin(F)*X)}x.closePath(),x.fill()}),W=z(8,512,(x,k,X)=>{const F=x.createLinearGradient(0,0,0,X);F.addColorStop(0,"#4c6994"),F.addColorStop(.38,"#8ea6c4"),F.addColorStop(.62,"#d8c2a6"),F.addColorStop(.8,"#e2a682"),F.addColorStop(1,"#b8674f"),x.fillStyle=F,x.fillRect(0,0,k,X)});W.wrapS=W.wrapT=oi;const _t={grass:jt,dirt:re,sand:ke,tCobble:xe,tFlag:ve,tDirt:Te,strata:Et,balloon:qt,roadStones:Qt,plaza:oe,planksWar:Dt,planksDark:Re,planksLight:Kt,planks:Ut,slate:Pt,stoneWall:Bt,castleWall:D,plankWall:ee,roof:Jt,gable:Ht,banner:Rt,water:te,ripple:vt,paper:ct,painting:C,moodboard:S,code:J,globe:yt,straw:pt,target:Ot,field:Ft,soft:xt,blob:wt,spark:Nt,sky:W,grain:void 0};function mt(x,k=2.2){const X=x.image,F=X.width,rt=X.height;if(!(F>0)||!(rt>0))return x;const lt=X.getContext("2d");if(!lt)return x;const kt=lt.getImageData(0,0,F,rt).data,pe=new Float32Array(F*rt);for(let de=0;de<F*rt;de++)pe[de]=((kt[de*4]??0)*.299+(kt[de*4+1]??0)*.587+(kt[de*4+2]??0)*.114)/255;const Ee=document.createElement("canvas");Ee.width=F,Ee.height=rt;const Oe=Ee.getContext("2d");if(!Oe)return x;const me=Oe.createImageData(F,rt);for(let de=0;de<rt;de++)for(let se=0;se<F;se++){const we=pe[de*F+(se-1+F)%F]??0,Mn=pe[de*F+(se+1)%F]??0,wn=pe[(de-1+rt)%rt*F+se]??0,ni=pe[(de+1)%rt*F+se]??0,Tn=(we-Mn)*k,E=(ni-wn)*k,I=Math.hypot(Tn,E,1),V=(de*F+se)*4;me.data[V]=(Tn/I*.5+.5)*255,me.data[V+1]=(E/I*.5+.5)*255,me.data[V+2]=(1/I*.5+.5)*255,me.data[V+3]=255}Oe.putImageData(me,0,0);const Ye=new Rc(Ee);return Ye.wrapS=Ye.wrapT=Si,Ye.colorSpace=os,Ye.anisotropy=x.anisotropy,Ye.repeat.copy(x.repeat),Ye}const Wt={},et=(x,k)=>Wt[x]||=mt(_t[x],k);function K(x,k=1,X=1,F=2.2,rt={}){const lt=k===1&&X===1?_t[x]:O(_t[x],k,X),kt=k===1&&X===1?et(x,F):O(et(x,F),k,X);return h("#ffffff",Object.assign({map:lt,normalMap:kt,normalScale:new Lt(1,1)},rt))}_t.grain=z(256,256,(x,k,X)=>{x.fillStyle="#d6cbbf",x.fillRect(0,0,k,X);for(let F=0;F<70;F++){x.strokeStyle=M()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",x.lineWidth=w(1,3);const rt=w(0,k);x.beginPath(),x.moveTo(rt,0),x.bezierCurveTo(rt+w(-8,8),X*.3,rt+w(-8,8),X*.7,rt+w(-4,4),X),x.stroke()}for(let F=0;F<6;F++){const rt=w(10,k-10),lt=w(10,X-10);x.strokeStyle="rgba(80, 50, 30, 0.3)",x.lineWidth=2,x.beginPath(),x.ellipse(rt,lt,w(3,6),w(8,14),0,0,ss*2),x.stroke()}});const dt=x=>{const k=h(x,{map:_t.grain,normalMap:et("grain",1.5)});return k.userData.autoUV=!0,k},It={stone:K("stoneWall",1,1,2),castle:K("castleWall",1,1,2),plankWall:K("plankWall",1,1,1.4),timber:h(si.timber),wood:dt(si.wood),woodD:dt(si.woodD),woodL:dt(si.woodL),iron:h(si.iron),ironL:h(si.ironL),rust:h(si.rust),bone:h(si.bone),boneD:h(si.boneD),red:h(si.red),redD:h(si.redD),redL:h(si.redL),black:h(si.black),gold:h(si.gold),straw:h("#ffffff",{map:_t.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:t,renderer:s,COL:si,GRAD:e,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:l,toon:h,glow:f,mesh:u,rbox:p,part:v,at:m,rot:g,put:y,spike:T,rnd:b,rr:L,pick:R,trnd:M,tr:w,canvasTex:z,blobs:Xt,edgeFade:ue,tiled:O,planarUV:q,wallUV:it,instanced:nt,boxes:St,UNIT_BOX:Q,TEX:_t,nrm:et,relief:K,woodMat:dt,M:It,_c:ot}}const{PI:hn}=Math,zn=.32,ia=s=>s.userData.up,vS=s=>s.userData.cutY;function MS(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:v,put:m,spike:g,rr:y,pick:T,tiled:b,planarUV:L,wallUV:R,boxes:M}=s,{SPINNERS:w,skull:z,hornedSkull:O,horns:q,torch:it,flame:j,table:N,skullCandle:st,throne:at,rug:$,trophy:ot,hangingBanner:nt,weaponRack:Q,shield:St,brazier:Xt,chest:ue,crate:gt,barrel:Vt,stool:ne,drum:fe,poleBanner:jt,skullPole:re,woodpile:ke,spikes:xe,bookshelf:ve,desk:Te,candle:Et,fence:qt,plant:Qt,cauldron:oe,bench:Dt,lampPost:Re,scrollStack:Kt,telescope:Ut,starGlobe:Pt,crystal:Bt,wallMap:D,easel:ee,bottle:Jt,anvil:Ht,sack:Rt,cart:te,roundTable:vt,mug:ct,lanternString:C,signPost:S,bed:J,curtain:yt,partition:pt,wardrobe:Ot}=t,{patch:Ft}=e,xt={},wt={war:[l.planksWar,2.6],dark:[l.planksDark,2.6],light:[l.planksLight,2.6],planks:[l.planks,2.6],tiles:[l.slate,3.6]};function Nt(U,A,ft,_,P,H,Y={}){const B=Y.T||zn,ht=Y.base||0,At=Y.stone!==!1,bt=At?1.15:ht,Gt=At?Ve:ht,Yt=At?bt:ht+.9,ce=p(new Tt,0,Yt,0);U.add(ce),U.userData.up=ce,ce.userData.movesWithWall=!0,U.userData.cutY=Yt;const ae={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function Zt(Fe,tn){const[We,en,ln,_n,Dn,gi,Oi=0,wr=0,bi=0]=tn,Tr=en-Dn/2,Er=en+Dn/2,[tt,Mt]=ae[Fe];Oi||bi||Tr>=Yt-.01?Mt.push([We,en-Yt,ln,_n,Dn,gi,Oi,wr,bi]):Er<=Yt+.01?tt.push(tn):(tt.push([We,(Tr+Yt)/2,ln,_n,Yt-Tr,gi,Oi,wr,bi]),Mt.push([We,(Yt+Er)/2-Yt,ln,_n,Er-Yt,gi,Oi,wr,bi]))}const De=_?_.x-_.w/2:0,$e=_?_.x+_.w/2:0,Ce=_?[[-A/2,De],[$e,A/2]]:[[-A/2,A/2]],Se=ft-bt;for(const[Fe,tn]of Ce){const We=tn-Fe;if(We<.05)continue;const en=(Fe+tn)/2;if(At)U.add(p(u(L(new Ct(We,bt,B+.08),1.6),o.stone),en,bt/2,0)),ce.add(p(u(R(new Ct(We,Se,B),Se,1.3),o.plankWall),en,Se/2,0));else{const ln=Yt-bt,_n=ft-Yt;U.add(p(u(R(new Ct(We,ln,B),ln,1.3,0,Se),o.plankWall),en,bt+ln/2,0)),ce.add(p(u(R(new Ct(We,_n,B),_n,1.3,ln,Se),o.plankWall),en,_n/2,0))}}if(_){const Fe=Ve+2.3,tn=ft-Fe;ce.add(p(u(R(new Ct(_.w,tn,B),tn,1.3),o.plankWall),_.x,Fe+tn/2-Yt,0)),Zt("timber",[_.x-_.w/2-.1,(Fe+.1)/2,0,.24,Fe+.1,B+.16]),Zt("timber",[_.x+_.w/2+.1,(Fe+.1)/2,0,.24,Fe+.1,B+.16]),Zt("timber",[_.x,Fe+.08,0,_.w+.8,.3,B+.2]);for(const We of[-1,1])for(let en=0;en<4;en++)Zt("timber",[_.x+We*(_.w/2+.1),.35+en*.55,B/2+.09,.07,.07,.04]);ce.add(p(O(.26),_.x,Fe+.42-Yt,B/2+.17));for(const We of[-1,1])ce.add(p(it(),_.x+We*(_.w/2+.55),Ve+1.7-Yt,B/2+.02))}Zt("timber",[0,bt+(At?0:.09),0,A,.18,B+.12]),Zt("timber",[0,ft-.1,0,A,.22,B+.12]);const on=Math.max(1,Math.round(A/2.3)),he=[];for(let Fe=1;Fe<on;Fe++){const tn=-A/2+Fe*A/on;if(!(_&&tn>De-.45&&tn<$e+.45)){he.push(tn),Zt("timber",[tn,bt+Se/2,0,.2,Se,B+.1]);for(const We of[bt+.09,ft-.1])Zt("timber",[tn,We,B/2+.08,.09,.09,.06])}}if(P)for(const Fe of[-A/2+.2,A/2-.2])Zt("timber",[Fe,(ht+ft+.12)/2,0,.42,ft-ht+.12,B+.18]);const xn=[-A/2+(P?.41:0),...he,A/2-(P?.41:0)];_&&xn.push(De-.22,$e+.22),xn.sort((Fe,tn)=>Fe-tn);let Ze=0;for(let Fe=0;Fe<xn.length-1;Fe++){const tn=xn[Fe],We=xn[Fe+1],en=We-tn,ln=(tn+We)/2;if(!(en<.9)&&!(_&&ln>De-.3&&ln<$e+.3)){if(Ze++,H&&en>1.5&&Ze%2===1){const _n=Gt+(At?1.62:1.35);Zt("panes",[ln,_n,0,.86,.78,Y.paneT||B+.04]);for(const Dn of[[ln,_n+.44,0,1.08,.1,B+.12],[ln,_n-.44,0,1.12,.12,B+.16],[ln-.48,_n,0,.1,.96,B+.12],[ln+.48,_n,0,.1,.96,B+.12],[ln,_n,0,.06,.78,B+.06],[ln,_n,0,.86,.05,B+.06]])Zt("timber",Dn);for(const Dn of[-1,1])Zt("shutters",[ln+Dn*.78,_n,B/2+.05,.42,.86,.05,0,Dn*.35,0]),Zt("timber",[ln+Dn*.78+Dn*.012,_n,B/2+.09,.44,.08,.03,0,Dn*.35,0])}else if(en>1){const _n=Se-.3,Dn=Math.atan2(_n,en-.2),gi=Math.hypot(_n,en-.2);for(const Oi of[-1,1])Zt("timber",[ln,bt+Se/2,B/2+.04,gi,.13,.06,0,0,Oi*Dn])}}}const[Rn,yn]=ae.timber,[hi,Xn]=ae.panes,[Yn,Ke]=ae.shutters;M(U,o.timber,Rn),M(ce,o.timber,yn),M(U,o.pane,hi,!1),M(ce,o.pane,Xn,!1),M(U,o.red,Yn),M(ce,o.red,Ke),et(U,Yt)}const W=new G,_t=new Ne,mt=new Ne,Wt=new Ne;function et(U,A){const ft=ia(U),_=new Map;U.traverse(B=>{if(!(B instanceof He)||Array.isArray(B.material))return;for(let bt=B;bt&&bt!==U;bt=bt.parent)if(bt===ft)return;const ht=B.material,At=_.get(ht);At?At.push(B):_.set(ht,[B])});const P=B=>{const ht=B;return(ht.color?ht.color.r*.3+ht.color.g*.59+ht.color.b*.11:0)+(ht.map?.5:0)},H=[..._.keys()].sort((B,ht)=>P(B)-P(ht));U.updateWorldMatrix(!0,!0),Wt.copy(U.matrixWorld).invert();const Y=new Set;H.forEach((B,ht)=>{if(ht)for(const At of _.get(B)??[]){const bt=At.geometry;if(Y.has(bt))continue;Y.add(bt),_t.multiplyMatrices(Wt,At.matrixWorld),mt.copy(_t).invert();const Gt=bt.attributes.position;let Yt=!1;for(let ce=0;ce<Gt.count;ce++)W.fromBufferAttribute(Gt,ce).applyMatrix4(_t),!(Math.abs(W.y-A)>.002)&&(W.y-=.003*ht,W.applyMatrix4(mt),Gt.setXYZ(ce,W.x,W.y,W.z),Yt=!0);Yt&&(Gt.needsUpdate=!0,bt.computeBoundingBox(),bt.computeBoundingSphere())}})}function K(U){const A=[],ft=new Map;return U.traverse(_=>{if(!(_ instanceof He))return;const P=_.material;let H=ft.get(P);H||(H=P.clone(),H.transparent=!0,ft.set(P,H),A.push(H)),_.material=H}),A}function dt(U,A,ft){const _=U.r,P=ft.pitch||.6,H=.6,Y=_.d/2+H,B=new Tt;B.position.y=A-H*Math.tan(P),U.g.add(B);const ht=Y*Math.tan(P),At=H*Math.tan(P),bt=Y/Math.cos(P),Gt=d("#ffffff",{map:l.roof});for(const Ce of[-1,1]){const Se=u(L(new Ct(_.w+H*2,.18,bt),1.6),Gt);Se.rotation.x=Ce<0?-P:P,Se.position.set(0,ht/2,Ce*Y/2),B.add(Se)}const Yt=new mo;Yt.moveTo(-_.d/2,At),Yt.lineTo(_.d/2,At),Yt.lineTo(0,ht-.12),Yt.closePath();const ce=new gh(Yt),ae=d("#ffffff",{map:l.gable,side:Sn});for(const Ce of[-1,1])B.add(p(v(u(ce,ae),0,hn/2,0),Ce*(_.w/2+.02),0,0)),B.add(p(v(z(.34),0,Ce*hn/2,0),Ce*(_.w/2+.2),At+(ht-At)*.42,0)),B.add(p(v(q(1.1),0,Ce*hn/2,0),Ce*(_.w/2+H+.05),ht+.12,0));B.add(p(u(new Ct(_.w+H*2+.2,.2,.26),o.iron),0,ht+.04,0));const Zt=Math.floor((_.w+H)/1.5);for(let Ce=0;Ce<Zt;Ce++)g(B,new G(-_.w/2+.5+Ce*(_.w-1)/Math.max(1,Zt-1),ht+.12,0),h,.34,.06,o.boneD,0,5);let De=null;if(ft.chimney){const[Ce,Se]=ft.chimney,on=ht+1.4;B.add(p(u(L(new Ct(.85,on,.85),1.2),o.stone),Ce,on/2,Se)),B.add(p(u(new Ct(1.05,.16,1.05),o.iron),Ce,on+.05,Se)),De=[Ce,on+.3,Se]}const $e=K(B);return{R:B,mats:$e,base:B.position.y,hR:ht,smokeAt:De}}function It(U){return{S:{c:[0,U.d/2],n:[0,1],L:U.w+zn},N:{c:[0,-U.d/2],n:[0,-1],L:U.w+zn},E:{c:[U.w/2,0],n:[1,0],L:U.d-zn},W:{c:[-U.w/2,0],n:[-1,0],L:U.d-zn}}}function x(U,A){const ft=new Tt;U.add(ft);const _=new Tt;return _.position.set(A.c[0],0,A.c[1]),_.rotation.y=Math.atan2(A.n[0],A.n[1]),ft.add(_),{sg:ft,sf:_}}function k(U,A,ft){if(!A)return;A.updateWorldMatrix(!0,!0),U.g.updateMatrixWorld(!0);const _=[];A.traverse(P=>{P instanceof He&&_.push(P)});for(const P of _){const H=P.geometry;H.attributes.uv||H.setAttribute("uv",new Le(new Float32Array(H.attributes.position.count*2),2));const Y=$f(s,P.material),B=new He(H,Y);B.castShadow=!Y.isMeshStandardMaterial,B.receiveShadow=!0,P.matrixWorld.decompose(B.position,B.quaternion,B.scale),U.g.add(B),B.updateMatrixWorld(!0),ft.attach(B)}}function X(U,A,ft,_,P,H={}){const Y=H.T||zn,B=H.stone!==!1,ht=H.base||0,At=B?1.15:ht+.9,bt=p(new Tt,0,At,0);if(A.add(bt),A.userData.up=bt,bt.userData.movesWithWall=!0,A.userData.cutY=At,k(U,ft,A),k(U,_,bt),et(A,At),P)for(const Gt of[-1,1])bt.add(p(it(),P.x+Gt*(P.w/2+.55),Ve+1.7-At,Y/2+.08))}function F(U,A,ft,_){const P=U.r,H=ft.pitch||.6,Y=.6,B=P.d/2+Y,ht=new Tt;ht.position.y=A-Y*Math.tan(H),U.g.add(ht);const At=B*Math.tan(H);k(U,_,ht);const bt=K(ht);let Gt=null;if(ft.chimney){const[Yt,ce]=ft.chimney;Gt=[Yt,At+1.4+.3,ce]}return{R:ht,mats:bt,base:ht.position.y,hR:At,smokeAt:Gt}}const rt={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function lt(U,A={}){const ft=new Tt;ft.position.set(U.x,0,U.z),ft.rotation.y=U.ry||0,r.add(ft);const _=U.id||A.id,P={id:_,r:U,g:ft,sides:{},lift:0,view:"ground",deco:!!A.deco,name:U.name,top:0},H=rt[_],Y=ae=>H?jf(H,_+"_"+ae):null;H?k(P,Y("base"),ft):ft.add(p(u(L(new Ct(U.w+.6,Ve+.3,U.d+.6),1.4),o.stone),0,(Ve+.3)/2-.3,0));const[B,ht]=wt[U.floor||"planks"];ft.add(v(p(u(new cn(U.w,U.d),d("#ffffff",{map:b(B,U.w/ht,U.d/ht)}),!1),0,Ve+.004,0),-hn/2,0,0));const At=Ve+U.wallH,bt=It(U),Gt=U.doorLocal||[0,U.d/2],Yt=U.door?U.door.side:"S";for(const[ae,Zt]of Object.entries(bt)){const{sg:De,sf:$e}=x(ft,Zt),Ce=Math.cos($e.rotation.y),Se=-Math.sin($e.rotation.y),on=Yt===ae?{x:(Gt[0]-Zt.c[0])*Ce+(Gt[1]-Zt.c[1])*Se,w:U.door&&U.door.width||1.4}:null;H?X(P,$e,Y(ae+"_lo"),Y(ae+"_hi"),on):Nt($e,Zt.L,At,on,ae==="N"||ae==="S",A.windows!==!1),P.sides[ae]={g:De,sf:$e,up:ia($e),n:Zt.n,s:1}}if(!H){const ae=U.doorN||[0,1],Zt=Math.abs(ae[0])>0?[.7,(U.door&&U.door.width||1.4)+.5]:[(U.door&&U.door.width||1.4)+.5,.7];ft.add(p(u(L(new Ct(Zt[0],.14,Zt[1]),1.2),o.stone),Gt[0]+ae[0]*.62,.07,Gt[1]+ae[1]*.62))}let ce=At;if(U.storeys===2){const ae=U.upperH||2.5,Zt=p(new Tt,0,At,0);Zt.userData.movesWithWall=!0,ft.add(Zt);const De={U:Zt,sides:{},lift:0,mats:[],top:At};if(P.upper=De,H)k(P,Y("Ufloor"),Zt);else{const Ce=d("#ffffff",{map:B}),[Se,on,he,xn]=A.stairHole||[0,0,0,0],Ze=U.w/2,Rn=U.d/2,yn=A.stairHole?[[-Ze,Se,-Rn,Rn],[on,Ze,-Rn,Rn],[Se,on,-Rn,he],[Se,on,xn,Rn]]:[[-Ze,Ze,-Rn,Rn]];for(const[hi,Xn,Yn,Ke]of yn)Xn-hi<.05||Ke-Yn<.05||Zt.add(p(u(L(new Ct(Xn-hi,.22,Ke-Yn),ht),Ce),(hi+Xn)/2,.09,(Yn+Ke)/2))}const $e=[];for(const[Ce,Se]of Object.entries(bt)){const{sg:on,sf:he}=x(Zt,Se);H?X(P,he,Y("U"+Ce+"_lo"),Y("U"+Ce+"_hi"),null,{base:.2,stone:!1,T:zn-.05}):(Nt(he,Se.L,.2+ae,null,Ce==="N"||Ce==="S",!0,{base:.2,stone:!1,T:zn-.05,paneT:zn-.03}),$e.push([0,.05,.2,Se.L+.2,.2,.18]),M(he,o.timber,$e.slice(-1))),De.sides[Ce]={g:on,sf:he,up:ia(he),n:Se.n,s:1}}ce=At+.2+ae}return P.top=ce,P.roof=H?F(P,ce,A,Y("roof")):dt(P,ce,A),xt[_]=P,P}function kt(U,A,ft,_,P){const H=U.upper,Y=12,B=H.top+.2-Ve,ht=(_-ft)/Y,At=[];for(let ae=0;ae<Y;ae++){const Zt=B*(ae+1)/Y;At.push([A,Ve+Zt/2,ft+ht*(ae+.5),P,Zt,Math.abs(ht)+.01])}M(U.g,o.wood,At);const bt=A>0?-1:1,Gt=A+bt*(P/2+.04);for(let ae=0;ae<=4;ae++){const Zt=ft+(_-ft)*ae/4,De=Ve+B*ae/4;U.g.add(p(u(new Ct(.07,.95,.07),o.woodD),Gt,De+.5,Zt))}const Yt=Math.hypot(_-ft,B),ce=p(u(new Ct(.08,.08,Yt),o.woodL),Gt,Ve+B/2+.95,(ft+_)/2);ce.rotation.x=-Math.atan2(B,_-ft),U.g.add(ce)}function pe(U,A,ft,_,P){const H=vS(U);_>H?(A.position.set(ft,_-H,P),ia(U).add(A)):(A.position.set(ft,_,P),U.add(A))}const Ee=(U,A)=>U==="S"?A:U==="N"||U==="E"?-A:A;function Oe(U,A,ft,_,P,H=.1){const Y=U.upper.sides[A];return ft.rotation.y=hn,pe(Y.sf,ft,Ee(A,_),P,-((zn-.05)/2+H/2+.01)),ft}const me=(U,A,ft,_,P=0)=>m(U.upper.U,A,ft,_,P,.2);function Ye(U,A,ft=0,_=.9){for(let P=0;P<A.length-1;P++){const[H,Y]=A[P],[B,ht]=A[P+1],At=Math.hypot(B-H,ht-Y),bt=p(u(new Ct(At,.07,.07),o.woodL),(H+B)/2,ft+_,(Y+ht)/2);bt.rotation.y=-Math.atan2(ht-Y,B-H),U.add(bt);const Gt=Math.max(1,Math.round(At/.5));for(let Yt=0;Yt<=Gt;Yt++)U.add(p(u(new Ct(.05,_,.05),o.woodD),H+(B-H)*Yt/Gt,ft+_/2,Y+(ht-Y)*Yt/Gt))}}function de(U,A,ft,_,P,H=.1,Y=!0){const B=U.sides[A];return Y&&(ft.rotation.y=hn),pe(B.sf,ft,Ee(A,_),P,Y?-(zn/2+H/2+.01):zn/2+H/2+.01),ft}const se=(U,A,ft,_,P=0)=>m(U.g,A,ft,_,P,Ve),we=(U,A,ft,_,P=0)=>m(U.g,A,ft,_,P,0),Mn=(U,A,ft)=>tp(U,A,ft),wn=document.createElement("canvas");wn.width=512,wn.height=280;const ni=new Rc(wn);ni.colorSpace=On;let Tn=i;function E(U=Tn){Tn=U;const A=wn.getContext("2d");if(!A)return;const ft=512,_=U.filter(H=>H==="done").length;A.fillStyle="#2e2422",A.fillRect(0,0,ft,280),A.fillStyle="#e3d5b6",A.font=`800 40px ${Hc}`,A.textAlign="left",A.fillText("TASKS",28,58),A.fillStyle="#ffd27a",A.textAlign="right",A.fillText(`${_} / 5`,ft-28,58);const P={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((H,Y)=>{const B=28+Y*94,ht=90;A.fillStyle=P[U[Y]??"todo"],A.beginPath(),A.roundRect(B,ht,78,96,14),A.fill(),A.fillStyle="rgba(255, 255, 255, 0.22)",A.beginPath(),A.roundRect(B+6,ht+6,66,18,8),A.fill(),A.fillStyle="#1e1a1c",A.font=`800 46px ${Hc}`,A.textAlign="center",A.fillText(H,B+39,ht+70)}),A.fillStyle="#1b1616",A.beginPath(),A.roundRect(28,220,ft-56,28,14),A.fill(),_&&(A.fillStyle="#d9762e",A.beginPath(),A.roundRect(28,220,(ft-56)*_/5,28,14),A.fill()),ni.needsUpdate=!0}E(),document.fonts&&document.fonts.ready.then(()=>E());function I(){const U=new Tt;return U.add(u(new Ct(2.7,1.65,.1),o.woodD)),U.add(p(new He(new cn(2.45,1.35),new Kn({map:ni,toneMapped:!1})),0,0,.06)),U.add(p(u(new Ct(2.9,.14,.2),o.wood),0,.9,.02)),U.add(p(z(.18),0,1.08,.06)),U}{const U=Ci.war,A=lt(U,{pitch:.62}),ft=Ve+U.wallH;se(A,N(3.4,2,.86),-2.5,-.6);{const _=new cn(3,1.7,26,16),P=_.attributes.position,H=[];for(let B=0;B<P.count;B++){const ht=P.getX(B),At=P.getY(B),bt=Math.max(0,Math.sin(ht*2.1+1)*Math.cos(At*2.7)*.1+Math.sin(ht*5+At*3)*.03);P.setZ(B,bt),H.push(...bt>.08?[.86,.82,.76]:bt>.03?[.5,.38,.28]:bt>.005?[.42,.55,.32]:[.32,.5,.62])}_.setAttribute("color",new Le(H,3)),_.computeVertexNormals();const Y=v(p(u(_,new fa({vertexColors:!0,gradientMap:c}),!1),-2.5,Ve+.91,-.6),-hn/2,0,0);A.g.add(Y);for(const[B,ht,At]of[[-.9,-.3,a.red],[.4,.3,"#3f5f8f"],[1,-.4,a.gold],[-.2,-.5,a.red]])A.g.add(p(u(new ie(.012,.012,.24,4),o.dark,!1),-2.5+B,Ve+1.05,-.6+ht)),A.g.add(p(u(new Ct(.12,.07,.01),d(At),!1),-2.5+B+.06,Ve+1.13,-.6+ht));for(const[B,ht]of[[-1.55,-.85],[1.55,.85]])se(A,st(),-2.5+B,-.6+ht).position.y=Ve+.9}se(A,at(),-6.1,-2.6,Id(-6.1,-2.6,-2.5,-.6)),se(A,$(1.6,[a.redD,a.bone,a.red,a.black,a.redL,a.redD]),-4.6,.6),de(A,"N",I(),3.8,Ve+1.95,.12),de(A,"N",ot(),-2.5,Ve+2.2,.1),de(A,"N",ot(),.9,Ve+2.1,.1),de(A,"N",nt(1,1.9),-5.4,ft-.3,.04),de(A,"N",nt(1,1.9),6.4,ft-.3,.04),de(A,"W",Q(4),.6,Ve,.3),de(A,"E",St(a.red),-2,Ve+1.9,.1),de(A,"E",St(a.black),1.2,Ve+1.9,.1),se(A,Xt(7),6.3,-3.3),se(A,Xt(0,.85),-6.7,3.5),se(A,ue(),6.3,1.6,-hn/2),se(A,gt(.6),5.3,3.6,.3),se(A,gt(.45),5.9,3.7,.9),se(A,Vt(.9),-6.6,-.6),se(A,ne(),-.9,-2.2),Ft("plaza",...Mn(U,0,7.4),5.8,3.6,-U.ry,.014),we(A,fe(),-4.4,6,.3),we(A,fe(),5.6,5.9,-.2),we(A,jt(3.4),-2.6,5),we(A,jt(3.4),2.6,5),we(A,re(2.6),-7,6.2),we(A,re(2.2),7.8,5.4),we(A,Xt(0),-6.2,5),we(A,ke(2.4),-3,-6),we(A,Vt(),4.4,-5.6),we(A,Vt(.9),5,-6.1),we(A,Vt(1,!0),3.6,-6.2,.4),we(A,v(Q(4),0,hn,0),.8,-5.6),we(A,xe(3),-8.6,-1,hn/2)}{const U=Ci.library,A=lt(U,{pitch:.66,stairHole:[4,4.84,-2,0]}),ft=Ve+U.wallH;for(const H of[-3.6,-1.4])se(A,ve(2),H,-U.d/2+zn/2+.27);for(const H of[-2.1,.3])se(A,ve(2),-U.w/2+zn/2+.27,H,hn/2);const _=Te("books");se(A,_.g,1.8,-1.2),se(A,Et(.18,4),2.45,-.95).position.y=Ve+.79;{const H=new Tt;H.add(p(u(new Ct(1,.45,.9),d("#5a1f2a")),0,.3,0)),H.add(p(u(new Ct(.86,.12,.74),d("#7a2a36")),0,.58,.04)),H.add(p(u(new Ct(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const Y of[-1,1])H.add(p(u(new Ct(.2,.6,.9),d("#4a1822")),Y*.5,.52,0));se(A,H,-3.3,1.9,.9)}se(A,$(1.5,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const H=new Tt;H.add(p(u(new ie(.08,.2,1,8),o.woodD),0,.5,0)),H.add(v(p(u(new Ct(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),H.add(v(p(u(new Ct(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),se(A,H,2.3,2.5,-.5)}{const H=new Tt;H.add(p(u(new ie(.05,.2,.9,10),o.woodD),0,.45,0));const Y=p(new Tt,0,1.25,0);Y.rotation.z=.4;const B=u(new an(.34,24,16),d("#ffffff",{map:l.globe}));Y.add(B),Y.add(v(u(new Pn(.4,.02,6,28),o.gold),0,hn/2,0)),H.add(Y),se(A,H,.5,3),w.push({o:B,axis:"y",v:.25})}{const H=new Tt;H.add(p(u(new ie(.16,.26,.9,8),o.woodD),0,.45,0)),H.add(p(u(new an(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let Y=0;Y<3;Y++){const B=Y/3*hn*2;g(H,new G(Math.cos(B)*.14,.92,Math.sin(B)*.14),new G(Math.cos(B),2,Math.sin(B)),.3,.03,o.bone,0,5)}se(A,H,3,-3.2)}const P=[];for(const[H,Y,B]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[ht,At]=Mn(U,H,Y);let bt=Ve;for(let Gt=0;Gt<B;Gt++){const Yt=y(.06,.1);P.push({x:ht+y(-.03,.03),y:bt+Yt/2,z:At+y(-.03,.03),sx:y(.32,.42),sy:Yt,sz:y(.24,.3),ry:U.ry+y(-.3,.3),c:T(t.BOOK_COLS)}),bt+=Yt}}s.instanced(s.UNIT_BOX,P,{cast:!0}),se(A,st(),-4.3,3.4).position.y=Ve+.42,se(A,Et(.5),-4.5,2.9),se(A,Et(.34),-4.2,2.7),de(A,"E",nt(.9,1.6),-3,ft-.3,.04),de(A,"S",ot(),1.6,Ve+2.1,.1);{const H=new Tt;H.add(p(u(new ie(2.2,2.4,7.6,22),d("#ffffff",{map:b(l.castleWall,3.5,2.4)})),0,3.8,0)),H.add(p(u(new ie(2.6,2.4,.4,22),o.stone),0,7.7,0)),H.add(p(u(new Ln(2.9,3.6,22),d("#ffffff",{map:b(l.roof,5,2)})),0,9.7,0)),H.add(p(z(.45),0,11.8,0));for(const[Y,B]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])H.add(p(v(u(new Ct(.4,.9,.12),o.pane,!1),0,-Y+hn/2,0),Math.cos(Y)*2.32,B,Math.sin(Y)*2.32));H.add(p(v(nt(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),we(A,H,5.6,3.4)}qt(A.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let H=0;H<10;H++)we(A,Qt(y(.6,.9)),y(-8.6,-6.2),y(5.3,7.1));we(A,oe(),1.2,6.2),we(A,Dt(1.6,!0),3,6.7,hn),we(A,re(2.2),-.4,5.6),we(A,Re(0),-4.6,4.6),we(A,gt(.55),6.2,-1.4,.3),we(A,gt(.4),6.3,-.8,.8),Ft("dirt",...Mn(U,.5,6.4),4.6,2.2,-U.ry,.013),kt(A,4.42,-3.4,-.2,.84),Ye(A.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const H of[-3.6,-1.4,1])me(A,ve(2),H,-U.d/2+zn/2+.27);for(const H of[-2.1,.3,2.5])me(A,ve(2),-U.w/2+zn/2+.27,H,hn/2);me(A,N(2.2,1,.8,o.wood),.2,.7),me(A,Kt(),-.4,.6).position.y=1.04,me(A,Kt(),.9,.9).position.y=1.04,me(A,p(u(new Ct(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,me(A,Et(.2),-.6,1).position.y=1,me(A,Et(.14),.95,.4).position.y=1,me(A,ne(),.2,1.6),me(A,ne(),-.9,1.5),me(A,Ut(),2.4,2.9,hn),me(A,Pt(),-2.6,2.6),me(A,Bt(),2.9,-2.8),me(A,$(1.3,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Oe(A,"S",D(),-.6,1.75,.06),Oe(A,"E",ot(),2.4,1.8,.1),me(A,ue(),-3.6,3.2,0)}{const U=Ci.studio,A=lt(U,{pitch:.58}),ft=Ve+U.wallH,_=Te("paper");se(A,_.g,-2,-1.6);{const At=new Tt;At.add(u(new Ct(1.6,1.25,.08),o.wood)),At.add(p(new He(new cn(1.45,1.1),new Kn({map:l.moodboard,toneMapped:!1})),0,0,.05)),de(A,"N",At,1.6,Ve+1.75,.08)}se(A,N(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[At,bt,Gt]of[[-.35,-.1,"#3f5f8f"],[0,.12,a.red],[.32,-.05,a.gold],[.12,-.2,"#5f8a52"]])se(A,p(u(new ie(.08,.09,.16,12),d(Gt)),0,.08,0),2.6+At,-2+bt).position.y=Ve+.78;for(let At=0;At<3;At++){const bt=p(u(new Ct(.8,.6,.04),d(T(["#efe4cc","#e2d4b6"]))),0,.3,0);bt.rotation.x=-.22,se(A,bt,3.7-At*.1,1.4+At*.12,-hn/2)}se(A,Qt(1.1),3.8,2.8),se(A,Qt(.9),-3.8,2.9),se(A,ve(1.6),-U.w/2+zn/2+.27,.6,hn/2),de(A,"E",nt(.9,1.5),.6,ft-.3,.04);const[P,H,Y,B]=U.deck;A.g.add(p(u(L(new Ct(H-P,.2,B-Y),2.6),d("#ffffff",{map:l.planks})),(P+H)/2,.1,(Y+B)/2));const ht=p(new Tt,0,.2,0);A.g.add(ht),qt(ht,[[P,Y+.1],[P,B],[-2,B]],.85),qt(ht,[[3.4,B],[H,B],[H,Y+.1]],.85),m(ht,ee(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(ht,Dt(1.6,!0),3,4.4,0),m(ht,Qt(1),-3.7,4),m(ht,Qt(.8),3.8,7.1),m(ht,Re(0),-3.9,7.3),m(ht,p(u(new ie(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(ht,p(u(new ie(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let At=0;At<14;At++)we(A,p(u(new an(.14,8,6),d(T([a.red,a.bone,"#d98a3a",a.redL]))),0,.14,0),y(-3.5,3.5),y(-5.2,-4.2));we(A,re(2),4.9,-4.6)}const V=Te("screen"),Z=Te("screen");{const U=Ci.workshop,A=lt(U,{pitch:.6,chimney:[-4,-1.6]}),ft=Ve+U.wallH;se(A,V.g,-3,-1.4),se(A,Z.g,2,-1.4),se(A,Bt(),-5,2.6);{const _=new Tt;for(const P of[.9,1.5])_.add(p(u(new Ct(2.4,.06,.4),o.wood),0,P,0));for(const P of[-1,1])_.add(p(u(new Ct(.06,1.7,.4),o.woodD),P*1.2,.85,0));for(let P=0;P<7;P++)_.add(p(Jt(T(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+P*.32,.93+P%2*.6,0));_.add(p(z(.14),.9,1.65,0)),se(A,_,-.5,-U.d/2+zn/2+.25)}{const _=N(2,.8,.86,o.woodD);_.add(p(Ht(),.4,.9,0)),_.add(v(p(u(new ie(.02,.02,.4,6),o.wood),-.5,.92,.1),hn/2,0,.4)),se(A,_,3.9,-3.2)}{const _=new Tt;_.add(p(u(new Ct(.9,.8,.8),o.iron),0,.4,0)),_.add(p(u(new cn(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),_.add(p(u(new ie(.1,.1,2.2,8),o.iron),0,1.9,-.2)),se(A,_,-5.2,.7,hn/2)}for(const[_,P,H,Y]of[[4.2,1.7,.4,a.gold],[3.5,1.35,.26,a.ironL]]){const B=new Tt;B.add(v(u(new ie(H,H,.1,18),d(Y)),hn/2,0,0));for(let ht=0;ht<10;ht++){const At=ht/10*hn*2;B.add(p(u(new Ct(.12,.12,.1),d(Y)),Math.cos(At)*(H+.05),Math.sin(At)*(H+.05),0))}de(A,"N",B,_,Ve+P,.1),w.push({o:B,axis:"z",v:Y===a.gold?.6:-.9})}de(A,"W",Q(4),-1.2,Ve,.3),de(A,"S",nt(1,1.7),-2.4,ft-.3,.04),de(A,"S",St(a.red),2.6,Ve+1.8,.1),se(A,Vt(),-5.2,-3.2),se(A,gt(.6),-4.6,-3.4,.3),se(A,gt(.6),5,3.2,.2),se(A,Rt(),4.3,3.4),Ft("dirt",...Mn(U,0,6.2),6.6,2.8,-U.ry,.013),we(A,ke(2.6),-2.6,5.4),we(A,te(),2.6,6.2,.4);{const _=new Tt;_.add(p(u(new ie(.4,.45,.6,12),o.woodL),0,.3,0)),_.add(v(p(u(new ie(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),_.add(v(p(u(new Ct(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),we(A,_,-5,5.6)}we(A,Vt(),5.2,5),we(A,Vt(.85),5.8,5.6),we(A,re(2.4),-6.6,6.8),we(A,Xt(0,.9),7.4,-1.4)}let ut;{const U=Ci.tavern,A=lt(U,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),ft=Ve+U.wallH;{const _=new Tt;_.add(p(u(new Ct(.9,1.1,5),o.wood),0,.55,0)),_.add(p(u(new Ct(1.1,.08,5.2),o.woodL),0,1.14,0));for(let H=0;H<5;H++)_.add(p(u(new Ct(.02,.9,.9),o.woodD),-.46,.5,-2+H));for(let H=0;H<6;H++)_.add(p(Jt(T(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),y(-.2,.2),1.18,-2.2+H*.8));_.add(p(z(.2),0,1.3,2.3)),se(A,_,4.1,-.6);const P=new Tt;for(const H of[1.5,2])P.add(p(u(new Ct(.3,.05,4),o.wood),0,H,0));for(let H=0;H<10;H++)P.add(p(Jt(T(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,H%2?2.03:1.53,-1.8+H*.4));se(A,P,5.12,-.6),se(A,Vt(.9,!0),4.85,2.6,hn/2),se(A,Vt(.9,!0),4.85,3.4,hn/2)}{const _=new Tt;_.add(p(u(L(new Ct(2.6,2,.9),1.4),o.stone),0,1,0)),_.add(p(u(new Ct(2.9,.18,1.1),o.wood),0,2.05,.05)),_.add(p(u(new cn(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),_.add(p(oe(),0,0,.85)),_.add(p(z(.22),0,2.32,.1)),ut=new cs("#ff9a4a",12,9,2),ut.position.set(0,.9,1.2),_.add(ut),j(_,0,.3,.3,1.4),se(A,_,-1.5,-U.d/2+zn/2+.46)}se(A,vt(),-2.2,.8),se(A,ne(),-3.1,.8),se(A,ne(),-1.3,.8),se(A,vt(.65),1,2.3),se(A,ne(),.1,2.3),se(A,ne(),1.9,2.3),se(A,ne(),1,3.2);for(const[_,P]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])se(A,ct(),_,P).position.y=Ve+.8;se(A,ne(),3.2,-2.4),de(A,"N",ot(),2.6,Ve+2.1,.1),de(A,"S",St(a.black),-3,Ve+1.9,.1),de(A,"S",nt(.9,1.6),1.6,ft-.3,.04),de(A,"W",ot(),-2.6,Ve+2.2,.1),Ft("dirt",...Mn(U,-.5,6.4),4.8,2.6,-U.ry,.013),we(A,N(3.6,.9,.8,o.woodL),.4,6.55),we(A,Dt(3.6,!1),.4,5.75),we(A,Dt(3.6,!1),.4,7.35,hn);for(const[_,P]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])we(A,ct(),_,P).position.y=.84;qt(A.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[_,P]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])we(A,p(u(new ie(.06,.08,2.6,6),o.woodD),0,1.3,0),_,P);C(A.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),we(A,Vt(),3,5.2),we(A,Vt(.8,!0),2.6,7.9,.3),we(A,S("TAVERN"),-6.4,3.6,-hn/2),we(A,re(2.2),-8.4,5.6),kt(A,-4.89,-3.6,-.6,.9),Ye(A.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[_,P]of[[-2.6,a.red],[.8,"#3f5f8f"],[4,a.redD]])me(A,J(P),_,-2.75),me(A,ue(),_+.95,-3.4,hn/2).scale.setScalar(.7),me(A,yt(.8,1.6),_-.5,-1.35),me(A,Et(.16),_-.62,-3.55);for(const _ of[-.9,2.4])me(A,pt(2.5),_,-2.6);{const _=u(new cn(8.6,1.1),d(a.redD),!1);_.rotation.x=-hn/2,me(A,_,.4,.9).position.y=.212}me(A,Ot(),.8,3.45,hn),me(A,Dt(1.6,!0),2.8,3.4,hn),me(A,N(.9,.7,.8,o.woodL),4.4,1.6),me(A,ne(),4.4,2.4),me(A,Et(.16,0),4.5,1.5).position.y=1;{const _=new Tt;_.add(p(u(new ie(.06,.12,.8,8),o.woodD),0,.4,0)),_.add(p(u(new ie(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),_.add(v(p(u(new Ri(.24,14),d("#5f8fa8"),!1),0,.92,0),-hn/2,0,0)),me(A,_,-2.2,3.3)}me(A,Qt(.9),-3.6,3.3),Oe(A,"S",St(a.red),-1.2,1.7,.1),Oe(A,"E",nt(.9,1.5),1.6,2.5,.04)}return{HOUSES:xt,buildHouse:lt,inH:se,outH:we,onWall:de,W2:Mn,deskF:V,deskB:Z,hearthLight:ut,drawBoard:E}}const{PI:gn}=Math;function sa(s,t,e){let n=1e9;for(let i=0;i<e.length-1;i++){const[r,o]=e[i],[a,l]=e[i+1],c=a-r,h=l-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(t-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,t-o-h*f))}return n}function Ld(s,t,e,n){const i=e?[...s,s[0]]:s,r=[],o=[],a=[];let l=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(e&&(h===0||h===i.length-1)){const T=s[s.length-1],b=s[1];u=b[0]-T[0],p=b[1]-T[1]}const v=Math.hypot(u,p)||1,m=-p/v,g=u/v,y=i[h];if(h>0){const T=i[h-1];l+=Math.hypot(y[0]-T[0],y[1]-T[1])}if(r.push(y[0]+m*t/2,n,y[1]+g*t/2,y[0]-m*t/2,n,y[1]-g*t/2),o.push(0,l,1,l),h>0){const T=h*2;a.push(T-2,T,T-1,T-1,T,T+1)}}const c=new dn;return c.setAttribute("position",new Le(r,3)),c.setAttribute("uv",new Le(o,2)),c.setIndex(a),c.computeVertexNormals(),c}async function yS(s,t,e){const{scene:n,TEX:i,toon:r,mesh:o,at:a,rot:l,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:v,instanced:m}=s,{SPINNERS:g,plantFlora:y,skullPole:T,totem:b,brazier:L,hay:R}=t,M=new G(-62,27,70).normalize(),w=new He(new an(600,32,16),new ai({side:jn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new ye("#2b3b78")},mid:{value:new ye("#7f8fc4")},hor:{value:new ye("#f2aa7c")},low:{value:new ye("#c98a72")},sunCol:{value:new ye("#ffa864")},sunDir:{value:M}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));w.renderOrder=-100,w.frustumCulled=!1,n.add(w),n.fog=new lh("#d6a487",230,640),n.add(new Im("#9aa8d8","#4a3428",1.05));const z=new Rf("#ffb070",2.3);z.position.copy(M).multiplyScalar(110),z.castShadow=!0,z.shadow.mapSize.set(4096,4096),Object.assign(z.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),z.shadow.camera.updateProjectionMatrix(),z.shadow.bias=-5e-4,z.shadow.normalBias=.05,n.add(z);const O=new mo;for(let Ut=0;Ut<=160;Ut++){const Pt=Ut/160*gn*2,Bt=Hr(Pt),D=Math.cos(Pt)*Bt,ee=-Math.sin(Pt)*Bt;Ut===0?O.moveTo(D,ee):O.lineTo(D,ee)}const q=new La(O,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});q.rotateX(-gn/2);const it=c(i.grass,1/9,1/9);function j(Ut,Pt){const Bt=i.strata.clone();return Bt.wrapS=Si,Bt.wrapT=oi,Bt.repeat.set(1/8,-1/(Pt-Ut)),Bt.offset.set(0,Pt/(Pt-Ut)),Bt.needsUpdate=!0,r("#ffffff",{map:Bt})}const N=new He(q,[r("#ffffff",{map:it}),j(-1.9,1.5)]);N.position.y=-2.9,N.receiveShadow=!0,n.add(N);const st=sS(s,await e);n.add(st.underside);for(const Ut of["walls","towers","gate"])n.add(st[Ut]);const at=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),$=new an(1,16,12),ot=new Tt;n.add(ot);for(let Ut=0;Ut<22;Ut++){const Pt=Ut/22*gn*2+d(-.12,.12),Bt=d(100,260),D=d(1.6,3.2),ee=new Tt;for(let Jt=0;Jt<7;Jt++){const Ht=new He($,at),Rt=d(1.6,2.8)*D;Ht.scale.set(Rt,Rt*.7,Rt),Ht.position.set(d(-3.5,3.5)*D,d(-.3,1.2)*D,d(-1.8,1.8)*D),ee.add(Ht)}ee.position.set(Math.cos(Pt)*Bt,d(-45,28),Math.sin(Pt)*Bt),ot.add(ee)}{const Ut=[],Pt=[],Bt=[];for(let D=0;D<420;D++){const ee=D/420*gn*2+d(-.006,.006),Jt=Hr(ee);if(h()<.55){const Ht=d(.5,2.8),Rt=d(-.55,-1.8);Ut.push({x:Math.cos(ee)*(Jt+.8),y:Rt-Ht/2,z:Math.sin(ee)*(Jt+.8),sx:d(.7,1.3),sy:Ht,sz:d(.7,1.3),rx:gn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}D%2===0&&Pt.push({x:Math.cos(ee)*(Jt+.3),y:-.06,z:Math.sin(ee)*(Jt+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let D=0;D<7;D++){const ee=d(0,gn*2),Jt=Hr(ee)+d(4,12);Bt.push({x:Math.cos(ee)*Jt,y:d(-14,-4),z:Math.sin(ee)*Jt,s:d(.8,2.2)})}m(new Ln(.06,1,4),Ut,{}),m(new an(1,10,6),Pt,{});for(const D of Bt){const ee=new Tt;ee.add(a(o(new Gi(1.2*D.s,0),r("#6e5240")),0,-.4*D.s,0)),ee.add(a(o(new ie(1*D.s,1.1*D.s,.3*D.s,9),r("#6f8b49")),0,.5*D.s,0)),h()<.6&&ee.add(a(t.tree(f(["pine","autumn","dead"]),.5*D.s),0,.6*D.s,0)),ee.position.set(D.x,D.y,D.z),ee.rotation.y=d(0,6),n.add(ee)}}const nt=j(-.75,1.35),Q={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},St=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Xt(Ut,Pt,Bt,D,ee){y(Pt,Bt,Ut.position.x+D,Ut.position.z+ee,Ut.position.y)}function ue(Ut,Pt,Bt,D){const{trees:ee,clear:Jt}=Q[Bt],Ht=Pt/10,Rt=[...Jt.map(([vt,ct,C])=>[vt,ct,C]),...D.map(([vt,ct])=>[vt,ct,.16])],te=(vt,ct,C)=>{for(let S=0;S<60;S++){const J=d(0,gn*2),yt=d(vt,ct),pt=Math.cos(J)*yt,Ot=Math.sin(J)*yt;if(Rt.every(([Ft,xt,wt])=>Math.hypot(pt-Ft,Ot-xt)>wt+C))return Rt.push([pt,Ot,C]),[pt*Pt,Ot*Pt]}return null};for(let vt=0;vt<7;vt++){const ct=te(.3,.74,.12);ct&&y(ee[vt%ee.length],d(1,1.3)*Ht,Ut.position.x+ct[0],Ut.position.z+ct[1],Ut.position.y)}for(let vt=0;vt<9;vt++){const ct=te(.15,.78,.05);ct&&y(f(St),d(.75,1.25)*Ht,Ut.position.x+ct[0],Ut.position.z+ct[1],Ut.position.y)}}const gt=c(i.water,1,4);function Vt(Ut,Pt,Bt,D,ee,Jt){const Ht=new Tt;Ht.position.set(Ut,Pt,Bt),n.add(Ht);const Rt=new mo;for(let C=0;C<=56;C++){const S=C/56*gn*2,J=D*(1+.12*Math.sin(3*S+Jt)+.07*Math.sin(5*S+2*Jt));C===0?Rt.moveTo(Math.cos(S)*J,-Math.sin(S)*J):Rt.lineTo(Math.cos(S)*J,-Math.sin(S)*J)}const te=new La(Rt,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});te.rotateX(-gn/2),Ht.add(a(new He(te,[r("#ffffff",{map:it}),nt]),0,-1.75,0));const vt=o(new Ln(D*.95,D*2.3,12,3),r("#6e5240"),!1);vt.rotation.x=gn,vt.position.y=-2.1-D*1.15,Ht.add(vt);for(let C=0;C<14;C++){const S=d(0,gn*2),J=d(.2,.9);Ht.add(a(l(o(new Gi(d(.8,2)*(D/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*D*.95*J,-2.1-(1-J)*D*2.3,Math.sin(S)*D*.95*J))}for(let C=0;C<26;C++){const S=d(0,gn*2),J=d(.6,2.4);Ht.add(a(l(o(new Ln(.07,J,4),r("#4a3424")),gn,0,0),Math.cos(S)*D*1.02,-.6-J/2,Math.sin(S)*D*1.02))}const ct=D/10;if(ee==="ruin"){const C=a(new Tt,-D*.25,0,-D*.1);C.add(a(o(new ie(1.7*ct,1.9*ct,5.5*ct,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*ct,0));for(let J=0;J<7;J++){const yt=J/7*gn*2;C.add(a(o(new Ct(.7*ct,d(.4,1.6)*ct,.5*ct),v.stone),Math.cos(yt)*1.6*ct,5.6*ct,Math.sin(yt)*1.6*ct))}C.add(a(o(new Ct(.4*ct,1*ct,.1),v.pane,!1),0,2.6*ct,1.85*ct)),Ht.add(C);for(const J of[-1,1])Ht.add(a(o(new Ct(.7*ct,3.2*ct,.7*ct),v.stone),D*.35+J*1.3*ct,1.6*ct,D*.3));Ht.add(a(o(new Ct(3.3*ct,.6*ct,.7*ct),v.stone),D*.35,3.4*ct,D*.3)),Ht.add(a(T(2.4),D*.1,0,D*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[J,yt,pt]of S)Xt(Ht,pt,1.2*ct,J*D,yt*D);ue(Ht,D,ee,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(ee==="farm"){const C=a(new Tt,-D*.2,0,-D*.15);C.add(a(o(u(new Ct(3.6*ct,2.2*ct,2.8*ct),2.2*ct,1.3),v.plankWall),0,1.1*ct,0));const S=new ie(2.1*ct,2.1*ct,4*ct,3,1);C.add(a(l(o(S,r("#ffffff",{map:i.roof})),0,0,gn/2),0,2.2*ct+.9*ct,0)),C.add(a(o(new Ct(.8*ct,1.5*ct,.1),v.woodD),0,.75*ct,1.42*ct)),C.add(a(o(new Ct(.6*ct,.6*ct,.1),v.pane,!1),1.1*ct,1.3*ct,1.42*ct)),Ht.add(C);const J=o(new cn(D*.8,D*.5),r("#ffffff",{map:i.field}),!1);J.rotation.x=-gn/2,J.position.set(D*.3,.03,D*.25),Ht.add(J);const yt=a(new Tt,D*.35,0,-D*.45);yt.add(a(o(new ie(.8*ct,1.2*ct,4*ct,12),r("#e3d5b6")),0,2*ct,0)),yt.add(a(o(new Ln(1.2*ct,1.4*ct,12),r("#ffffff",{map:i.roof})),0,4.7*ct,0));const pt=a(new Tt,0,3.6*ct,1*ct);for(let Ot=0;Ot<4;Ot++){const Ft=new Tt;Ft.rotation.z=Ot*gn/2,Ft.add(a(o(new Ct(.5*ct,2.6*ct,.04),r("#e3d5b6",{side:Sn})),.3*ct,1.5*ct,0)),pt.add(Ft)}yt.add(pt),g.push({o:pt,axis:"z",v:.4}),Ht.add(yt),Xt(Ht,"tree_maple",1.1*ct,-D*.55,D*.4),Ht.add(a(R(.5*ct),D*.05,0,D*.55)),ue(Ht,D,ee,[[-.55,.4]])}else if(ee==="shrine"){for(let S=0;S<6;S++){const J=S/6*gn*2;Ht.add(a(l(o(new Ct(.7*ct,d(2,3)*ct,.5*ct),v.stone),0,-J,d(-.1,.1)),Math.cos(J)*3*ct,1.2*ct,Math.sin(J)*3*ct))}Ht.add(b(4*ct));for(const S of[.8,3.9])Ht.add(a(L(0,1.2*ct),Math.cos(S)*1.8*ct,0,Math.sin(S)*1.8*ct));const C=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,J]of C)Xt(Ht,"tree_maple",1.1*ct,S*D,J*D);ue(Ht,D,ee,C)}else{const C=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[yt,pt,Ot]of C)Xt(Ht,Ot,1.2*ct,yt*D,pt*D);ue(Ht,D,ee,C),Ht.add(a(l(o(new Ri(D*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-gn/2,0,0),D*.25,.04,D*.3));const S=new He(new cn(1.8*ct,D*3.2),new Kn({map:gt,color:"#acb5c8",transparent:!0,opacity:.85,side:Sn,depthWrite:!1}));S.position.set(D*.62,-D*1.6,D*.62),S.rotation.y=gn/4,Ht.add(S);const J=o(new cn(1.2*ct,D*.55),r("#6fa9c9"),!1);J.rotation.set(-gn/2,0,-gn/4),J.position.set(D*.45,.05,D*.45),Ht.add(J)}return Ht}Vt(-150,6,-105,11,"ruin",.4),Vt(165,-4,-60,13,"farm",1.7),Vt(115,20,135,9,"shrine",2.9),Vt(-165,-14,85,12,"falls",4.1);const ne={};function fe(Ut){const Pt=ne[Ut];if(Pt)return Pt;const Bt={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Ut],D=s.canvasTex(256,256,(Jt,Ht,Rt)=>{const te=Jt.createRadialGradient(Ht/2,Rt/2,Ht*.3,Ht/2,Rt/2,Ht/2);te.addColorStop(0,"rgba(255,255,255,1)"),te.addColorStop(1,"rgba(255,255,255,0)"),Jt.fillStyle=te,Jt.fillRect(0,0,Ht,Rt)});D.wrapS=D.wrapT=oi;const ee={src:Bt,mask:D};return ne[Ut]=ee,ee}let jt=0;function re(Ut,Pt,Bt,D,ee,Jt=0,Ht=.012,Rt=4){const te=fe(Ut),vt=c(te.src,D*2/Rt,ee*2/Rt),ct=new He(new cn(D*2,ee*2),r("#ffffff",{map:vt,alphaMap:te.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-jt}));return ct.rotation.set(-gn/2,0,Jt),ct.position.set(Pt,Ht,Bt),ct.receiveShadow=!0,ct.renderOrder=-10+jt++*.01,n.add(ct),ct}const ke={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},xe={},ve=Ut=>{const Pt=Math.max(0,Math.min(1,Ut));return Pt*Pt*(3-2*Pt)},Te=[],Et=Ut=>Ut==="cobble"||Ut==="flag",qt=Ut=>Ut.closed?[...Ut.line,Ut.line[0]]:Ut.line;function Qt(Ut,Pt){let Bt=null,D=1e9;for(const ee of Ps){if(ee===Pt||ee.kind==="stones")continue;const Jt=sa(Ut[0],Ut[1],qt(ee))-ee.w/2;Jt<D&&(D=Jt,Bt=ee)}return D<.6?Bt:null}function oe(Ut,Pt,Bt){const D=qt(Bt),ee=Bt.w/2+.02,Jt=Pt?[...Ut].reverse():[...Ut];let Ht=0;for(;Ht<Jt.length-2&&sa(Jt[Ht][0],Jt[Ht][1],D)<ee;)Ht++;if(Ht===0)return null;let Rt=Jt[Ht-1],te=Jt[Ht];for(let C=0;C<12;C++){const S=[(Rt[0]+te[0])/2,(Rt[1]+te[1])/2];sa(S[0],S[1],D)<ee?Rt=S:te=S}const ct=[[(Rt[0]+te[0])/2,(Rt[1]+te[1])/2],...Jt.slice(Ht)];return Pt?ct.reverse():ct}function Dt(Ut,Pt){const Bt=Ut.kind;let D=qt(Ut);const ee=Ut.closed?[!1,!1]:[!Ut.refs[0],!Ut.refs[Ut.refs.length-1]];if(!Ut.closed&&Et(Bt))for(const Nt of[0,1]){if(!ee[Nt])continue;const W=Nt?D[D.length-1]:D[0],_t=Qt(W,Ut);if(!_t||_t.kind===Bt||!Et(_t.kind))continue;const mt=oe(D,Nt===1,_t);if(!mt)continue;D=mt,ee[Nt]=!1;const Wt=Nt?D[D.length-1]:D[0],et=Nt?D[D.length-2]:D[1],K=Math.hypot(Wt[0]-et[0],Wt[1]-et[1])||1;Te.push({x:Wt[0],z:Wt[1],tx:(Wt[0]-et[0])/K,tz:(Wt[1]-et[1])/K,w:Ut.w,kind:Bt})}const Jt=D.length,[Ht,Rt,te,vt]=ke[Bt],ct=[0];for(let Nt=1;Nt<Jt;Nt++){const W=D[Nt],_t=D[Nt-1];ct.push(ct[Nt-1]+Math.hypot(W[0]-_t[0],W[1]-_t[1]))}const C=ct[Jt-1],S=.02+Pt*.0015,J=[],yt=[],pt=[],Ot=[];for(let Nt=0;Nt<Jt;Nt++){const W=D[Math.max(0,Nt-1)],_t=D[Math.min(Jt-1,Nt+1)];let mt=_t[0]-W[0],Wt=_t[1]-W[1];if(Ut.closed&&(Nt===0||Nt===Jt-1)){const lt=D[Jt-2],kt=D[1];mt=kt[0]-lt[0],Wt=kt[1]-lt[1]}const et=Math.hypot(mt,Wt)||1,K=-Wt/et,dt=mt/et;let It=1,x=1;if(!Ut.closed)for(const lt of[0,1]){const kt=lt?C-ct[Nt]:ct[Nt];ee[lt]&&(It=Math.max(It,1+.5*(1-ve(kt/2.4))),x=Math.min(x,ve(kt/2.2)))}const k=Ut.w/2*It,X=[-(k+te),-(k-te),k-te,k+te],F=[0,x,x,0],rt=D[Nt];for(let lt=0;lt<4;lt++){const kt=rt[0]+K*X[lt],pe=rt[1]+dt*X[lt];J.push(kt,S,pe),yt.push(kt/Rt,pe/Rt),pt.push(1,1,1,F[lt])}if(Nt>0)for(let lt=0;lt<3;lt++){const kt=(Nt-1)*4+lt,pe=kt+1,Ee=Nt*4+lt,Oe=Ee+1;Ot.push(pe,Oe,kt,kt,Oe,Ee)}}const Ft=new dn;Ft.setAttribute("position",new Le(J,3)),Ft.setAttribute("uv",new Le(yt,2)),Ft.setAttribute("color",new Le(pt,4)),Ft.setIndex(Ot),Ft.computeVertexNormals();let xt=xe[Bt];xt||(xt=r("#ffffff",{map:Ht,normalMap:p(vt,Bt==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),xe[Bt]=xt);const wt=new He(Ft,xt);wt.receiveShadow=!0,wt.renderOrder=-5+Pt*.01,n.add(wt)}const Re=[];function Kt(Ut){const Pt=Ut.length,Bt=Ut.map(([Ht,Rt])=>sa(Ht,Rt,_a)<1.35);if(!Bt.some(Boolean))return[{pts:[...Ut],closed:!0}];const D=Bt.findIndex((Ht,Rt)=>!Ht&&Bt[(Rt-1+Pt)%Pt]),ee=[];let Jt=[];for(let Ht=0;Ht<=Pt;Ht++){const Rt=(D+Ht)%Pt;if(!Bt[Rt]&&Ht<Pt){Jt.push(Ut[Rt]);continue}if(Jt.length>1&&ee.push({pts:Jt,closed:!1}),Ht<Pt&&Bt[Rt]&&Jt.length){let te=Ht;for(;te<Pt&&Bt[(D+te)%Pt];)te++;const vt=Jt[Jt.length-1],ct=Ut[(D+te)%Pt],C=ct[0]-vt[0],S=ct[1]-vt[1],J=Math.hypot(C,S);Re.push({x:(vt[0]+ct[0])/2,z:(vt[1]+ct[1])/2,ang:Math.atan2(-S,C),len:J})}Jt=[]}return ee}Ps.forEach((Ut,Pt)=>{if(Ut.kind!=="stones"){Dt(Ut,Pt);return}const Bt=i.roadStones.clone();Bt.wrapS=oi,Bt.wrapT=Si,Bt.repeat.set(1,1/1.3),Bt.needsUpdate=!0;const D=r("#ffffff",{map:Bt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const ee of Kt(Ut.line)){const Jt=new He(Ld(ee.pts,Ut.w,ee.closed,.03),D);Jt.receiveShadow=!0,n.add(Jt)}});{const Ut=(te,vt,ct,C,S,J)=>{const yt=S-ct,pt=J-C,Ot=yt*yt+pt*pt||1,Ft=Math.max(0,Math.min(1,((te-ct)*yt+(vt-C)*pt)/Ot));return Math.hypot(te-ct-yt*Ft,vt-C-pt*Ft)},Pt=(te,vt,ct,C)=>{for(const S of Ps){if(S===ct)continue;const J=qt(S),yt=S.w/2+C;for(let pt=0;pt<J.length-1;pt++){const Ot=J[pt],Ft=J[pt+1];if(!(Math.abs(Ot[0]-te)>yt+1||Math.abs(Ot[1]-vt)>yt+1)&&Ut(te,vt,Ot[0],Ot[1],Ft[0],Ft[1])<yt)return!0}}return!1},Bt=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],D=(te,vt)=>{const ct=Math.hypot(te,vt),C=Math.atan2(vt,te);if(ct>7.4&&ct<9&&Bt.some(S=>{let J=Math.abs(C-S)%(2*gn);return J=Math.min(J,2*gn-J),J*ct<1.45}))return!0;for(const S of xa)if(S.kind==="house"){const[J,yt]=no(S,te,vt);if(Math.abs(J)<S.w/2+.9&&Math.abs(yt)<S.d/2+.9||S.deck&&J>S.deck[0]-.5&&J<S.deck[1]+.5&&yt>S.deck[2]&&yt<S.deck[3]+.5)return!0}else if(Math.hypot(te-S.x,vt-S.z)<S.r+.6)return!0;for(const S of Gc)if(S.kind==="hut"){const[J,yt]=no(S,te,vt);if(Math.abs(J)<S.w/2+.9&&Math.abs(yt)<S.d/2+.9)return!0}else if(Math.hypot(te-S.x,vt-S.z)<(S.r||2)+.4)return!0;return Math.hypot(te,vt)>Hr(Math.atan2(vt,te))-1.2},ee=[],Jt=[],Ht=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const te of Ps){if(te.kind==="stones")continue;const vt=qt(te),ct=te.kind!=="dirt",C=S=>{const J=vt[Math.max(0,S-1)],yt=vt[Math.min(vt.length-1,S+1)],pt=Math.hypot(yt[0]-J[0],yt[1]-J[1])||1;return[-(yt[1]-J[1])/pt,(yt[0]-J[0])/pt]};for(let S=0;S<vt.length;S++){const[J,yt]=C(S),pt=Math.atan2(J,yt)+gn/2,Ot=vt[S];for(const Ft of[-1,1]){const xt=te.w/2+.07,wt=Ot[0]+J*Ft*xt,Nt=Ot[1]+yt*Ft*xt;if(!(D(wt,Nt)||Pt(wt,Nt,te,.25))&&(ct&&ee.push({x:wt,y:.04,z:Nt,sx:.2,sy:.13,sz:d(.4,.47),ry:pt+d(-.04,.04),c:te.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const W=xt+(ct?.25:.1)+d(0,.35),_t=Ot[0]+J*Ft*W,mt=Ot[1]+yt*Ft*W;if(!D(_t,mt)&&!Pt(_t,mt,te,.2)){const Wt=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let et=0;et<5;et++)Jt.push({x:_t+d(-.15,.15),y:.11,z:mt+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Wt})}}}}if(!ct&&te.w>1.5)for(const S of[-1,1]){const J=vt.map((pt,Ot)=>{const[Ft,xt]=C(Ot);return[pt[0]+Ft*S*.45,pt[1]+xt*S*.45]}),yt=new He(Ld(J,.18,!1,.035),Ht);yt.receiveShadow=!0,yt.renderOrder=-4,n.add(yt)}}for(const te of Te){const vt=-te.tz,ct=te.tx,C=Math.max(2,Math.round((te.w+.3)/.42));for(let S=0;S<C;S++){const J=-((te.w+.3)/2)+(S+.5)*(te.w+.3)/C;ee.push({x:te.x+vt*J-te.tx*.1,y:.045,z:te.z+ct*J-te.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(vt,ct)+gn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new qa(1,1,1,1,.2),ee,{cast:!1});const Rt=m(new Ln(.06,.24,4),Jt,{});Rt&&(Rt.userData.noLine=!0)}return{models:st,skyDome:w,sun:z,island:N,cloudRing:ot,grassTex:it,strataMat:j,crossings:Re,patch:re}}const Hl={radius:.5,y:.14,scale:[1,.92,1.05]},SS=[[.18,.3,0],[.5,.4,.04],[.84,.52,.08],[1.14,.74,.08],[1.32,1.04,.05],[1.36,1.38,0],[1.28,1.66,-.05]],bS=.17,ra=24,Gl=8,wS=s=>1-.97*s**1.2;function TS(){const s=new hf(SS.map(([r,o,a])=>new G(r,o,a))),t=new _h(s,ra,bS,Gl,!1),e=t.attributes.position,n=new G,i=new G;for(let r=0;r<=ra;r++){s.getPointAt(r/ra,n);const o=wS(r/ra);for(let a=0;a<=Gl;a++){const l=r*(Gl+1)+a;i.fromBufferAttribute(e,l).sub(n).multiplyScalar(o).add(n),e.setXYZ(l,i.x,i.y,i.z)}}return t}const{PI:Me}=Math;function ES(s){const{M:t,COL:e,TEX:n,toon:i,glow:r,mesh:o,rbox:a,at:l,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:v,tiled:m,planarUV:g,wallUV:y}=s,T=s.scene,b=[],L=[],R=[],M=[],w=v(64,128,(E,I,V)=>{const Z=()=>{E.beginPath(),E.moveTo(I/2,2),E.bezierCurveTo(I*.62,V*.3,I*.98,V*.55,I*.86,V*.8),E.bezierCurveTo(I*.76,V*.98,I*.24,V*.98,I*.14,V*.8),E.bezierCurveTo(I*.02,V*.55,I*.38,V*.3,I/2,2),E.closePath()},ut=E.createLinearGradient(0,V,0,0);ut.addColorStop(0,"rgba(255, 246, 214, 1)"),ut.addColorStop(.3,"rgba(255, 196, 92, 1)"),ut.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ut.addColorStop(1,"rgba(220, 40, 30, 0)"),Z(),E.fillStyle=ut,E.fill(),E.save(),E.translate(I*.5,V*.92),E.scale(.5,.55),E.translate(-I*.5,-V*.92),Z(),E.fillStyle="rgba(255, 252, 235, 0.9)",E.fill(),E.restore()});w.wrapS=w.wrapT=oi;const z=new ds({map:w,color:new ye(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),O=new ds({map:w,color:new ye(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),q=new ds({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Ai});function it(E,I,V,Z,ut=1){const U=new Tt,A=new Wi(z);A.center.set(.5,.06),A.scale.set(.34*ut,.68*ut,1),U.add(A);const ft=new Wi(O);ft.center.set(.5,.04),ft.scale.set(.18*ut,.34*ut,1),U.add(ft);const _=new Wi(q);return _.scale.setScalar(1.5*ut),_.position.y=.2*ut,U.add(_),U.position.set(I,V,Z),E.add(U),L.push({f:U,ph:u(0,6),s:ut}),U}const j=(()=>{const E=new Tt,I=o(new an(Hl.radius,16,12),t.bone);I.scale.set(...Hl.scale),I.position.y=Hl.y,E.add(I),E.add(l(o(new Ct(.62,.28,.5),t.bone),0,-.24,.16));for(const V of[-1,1]){const Z=o(new an(.14,10,8),t.dark,!1);Z.scale.z=.5,Z.position.set(V*.19,.08,.45),E.add(Z)}return E.add(c(l(o(new Ln(.06,.12,3),t.dark,!1),0,-.1,.5),Me,0,0)),E.add(l(o(new Ct(.42,.03,.02),t.dark,!1),0,-.25,.42)),E})();function N(E=.3){const I=j.clone();return I.scale.setScalar(E),I}const st=TS();function at(E=.3){const I=j.clone();for(const V of[-1,1]){const Z=o(st,t.bone);Z.scale.x=V,I.add(Z)}return I.scale.setScalar(E),I}function $(E=1,I=t.bone){const V=new Tt;for(const Z of[-1,1]){const ut=o(new Pn(.5*E,.09*E,6,12,Me*.6),I);ut.rotation.set(0,Z>0?0:Me,.25),ut.position.set(Z*.35*E,0,0),V.add(ut)}return V}let ot=7;const nt=(E,I)=>E+(I-E)*((ot=ot*16807%2147483647)/2147483647);function Q(E,I,V,Z,ut,U,A,ft,_=0){const P=l(o(_?a(U,A,ft,_):new Ct(U,A,ft),I),V,Z,ut);return E.add(P),P}function St(E,I,V,Z=.75){const ut=new Ct(E,I,V),U=ut.attributes.position;for(let A=0;A<U.count;A++)U.getY(A)<0&&(U.setX(A,U.getX(A)*Z),U.setZ(A,U.getZ(A)*Z));return ut.computeVertexNormals(),ut}function Xt(E,I,V,Z,ut,U,A=Math.max(2,Math.round(V/.2))){const ft=V/A;for(let _=0;_<A;_++)Q(E,U,0,Z+nt(-.004,.004),-V/2+ft*(_+.5),I+nt(-.02,.02),ut,ft-.012,.012)}function ue(E,I,V,Z,ut,U){Q(E,t.iron,I-ut*.055,V,Z-U*.012,.13,.014,.028),Q(E,t.iron,I-ut*.012,V,Z-U*.055,.028,.014,.13)}const gt=(()=>{const E=[];for(let I=0;I<=10;I++){const V=I/10;E.push(new Lt(.3+Math.sin(V*Me)*.06,(V-.5)*.8))}return new ph(E,20)})(),Vt=E=>.3+Math.sin((E/.8+.5)*Me)*.06;function ne(E=1,I=!1){const V=new Tt,Z=o(gt,i("#ffffff",{map:n.planks}));for(const ut of[-.33,-.17,.17,.33])Z.add(l(c(o(new Pn(Vt(ut)+.006,.02,5,24),t.iron),Me/2,0,0),0,ut,0));for(const ut of[-.17,.17])for(let U=0;U<6;U++){const A=U/6*Me*2;Z.add(l(o(new an(.016,5,4),t.ironL),Math.cos(A)*(Vt(ut)+.025),ut,Math.sin(A)*(Vt(ut)+.025)))}Z.add(l(c(o(new Ri(.3,20),t.woodD),-Me/2,0,0),0,.392,0)),Z.add(l(c(o(new Pn(.3,.018,4,24),t.woodD),Me/2,0,0),0,.4,0));for(const ut of[-.1,0,.1])Z.add(l(o(new Ct(.004,.004,.5),t.dark,!1),ut,.394,0));return Z.add(l(o(new ie(.035,.035,.03,8),t.woodL),.15,.4,.05)),Z.scale.setScalar(E),I?(Z.rotation.z=Me/2,Z.position.y=.36*E):Z.position.y=.4*E,V.add(Z),V}const fe=i("#ffffff",{map:v(128,128,(E,I,V)=>{E.fillStyle="#7a5538",E.fillRect(0,0,I,V);for(let Z=0;Z<4;Z++)E.fillStyle=Z%2?"#70502f":"#84603f",E.fillRect(0,Z*32,I,30),E.fillStyle="rgba(40, 24, 14, 0.6)",E.fillRect(0,Z*32+30,I,2)})});function jt(E=.6){const I=new Tt;Q(I,fe,0,E/2,0,E*.94,E*.94,E*.94);const V=E*.09,Z=E/2-V/2;for(const ut of[-1,1])for(const U of[-1,1])Q(I,t.woodD,ut*Z,E/2,U*Z,V,E,V),Q(I,t.woodD,0,E/2+ut*Z,U*Z,E-V*2,V,V),Q(I,t.woodD,ut*Z,E/2+U*Z,0,V,V,E-V*2);for(const ut of[-1,1]){const U=Q(I,t.woodD,0,E/2,ut*(E*.47+.006),E*1.1,V*.8,V*.4);U.rotation.z=ut*Me/4}for(const ut of[-1,1])for(const U of[-1,1])for(const A of[-1,1])Q(I,t.iron,ut*(Z+.006),E/2+U*(Z+.006),A*(Z+.006),V*1.2,V*1.2,V*1.2);return I}function re(){const E=new Tt,I=o(new an(.28,12,10),i("#b8a07a"));return I.scale.set(1,1.15,.9),I.position.y=.3,E.add(I),E.add(l(o(new ie(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),E}function ke(E,I,V=.8,Z=t.wood){const ut=new Tt,U=.07;Xt(ut,E,I,V-U/2,U,Z);for(const ft of[-1,1])Q(ut,t.woodD,0,V-U-.06,ft*(I/2-.12),E-.34,.12,.04,.01),Q(ut,t.woodD,ft*(E/2-.12),V-U-.06,0,.04,.12,I-.34,.01);const A=St(.1,V-U,.1,.72);for(const[ft,_]of[[-1,-1],[1,-1],[-1,1],[1,1]])ut.add(l(o(A,t.woodD),ft*(E/2-.12),(V-U)/2,_*(I/2-.12))),ue(ut,ft*E/2,V+.004,_*I/2,ft,_);Q(ut,t.woodD,0,.17,0,E-.3,.06,.05,.01);for(const ft of[-1,1])Q(ut,t.woodD,ft*(E/2-.12),.17,0,.05,.06,I-.3,.01);return ut}function xe(E=.7){const I=new Tt;I.add(l(o(new ie(E,E,.08,24),t.wood),0,.76,0)),I.add(l(c(o(new Pn(E,.022,5,32),t.iron),Me/2,0,0),0,.76,0));for(const V of[-E*.5,0,E*.5])Q(I,t.dark,V,.801,0,.006,.004,Math.sqrt(E*E-V*V)*1.96);I.add(l(o(new ie(.08,.11,.7,10),t.woodD),0,.37,0)),I.add(l(o(new ie(.13,.13,.06,10),t.iron),0,.5,0));for(let V=0;V<4;V++){const Z=V*Me/2+Me/4,ut=Q(I,t.woodD,Math.sin(Z)*E*.25,.05,Math.cos(Z)*E*.25,.09,.08,E*.6,.015);ut.rotation.y=Z}return I}function ve(){const E=new Tt;E.add(l(o(new ie(.24,.24,.07,16),t.wood),0,.45,0)),E.add(l(c(o(new Pn(.24,.012,4,20),t.iron),Me/2,0,0),0,.45,0));for(let I=0;I<3;I++){const V=I/3*Me*2+.5,Z=o(new ie(.028,.034,.46,6),t.woodD);Z.position.set(Math.cos(V)*.15,.22,Math.sin(V)*.15),Z.rotation.set(-Math.sin(V)*.2,0,Math.cos(V)*.2),E.add(Z)}return E.add(l(c(o(new Pn(.16,.014,4,14),t.woodD),Me/2,0,0),0,.17,0)),E}function Te(E=1.8,I=!0){const V=new Tt;for(const Z of[-1,1])Q(V,t.woodL,nt(-.01,.01),.45,Z*.11,E,.07,.2,.015);for(const Z of[-1,1]){const ut=Z*(E/2-.2);for(const U of[-1,1]){const A=l(o(St(.08,.44,.07,1),t.woodD),ut,.21,U*.12);A.rotation.x=-U*.2,V.add(A)}Q(V,t.woodD,ut,.385,0,.09,.06,.44,.01),Q(V,t.iron,ut,.487,.2,.1,.012,.03)}if(Q(V,t.woodD,0,.14,0,E-.4,.05,.05,.01),I){for(const Z of[-1,1])Q(V,t.woodD,Z*(E/2-.2),.74,-.21,.07,.56,.06,.012);for(const Z of[.64,.9])Q(V,t.woodL,nt(-.01,.01),Z,-.225,E-.1,.11,.05,.015)}return V}function Et(E=.16,I=0){const V=new Tt;if(V.add(l(o(new ie(.04,.045,E,10),i("#eadfc4")),0,E/2,0)),it(V,0,E,0,.35),I){const Z=new cs("#ffb36a",I,5,2);Z.position.y=E+.15,V.add(Z)}return V}function qt(){const E=new Tt;return E.add(l(N(.22),0,.12,0)),E.add(l(Et(.14),0,.24,0)),E}function Qt(E){const I=new Tt,V=i(E,{emissive:E,emissiveIntensity:.18});return I.add(l(o(new ie(.06,.07,.2,10),V),0,.1,0)),I.add(l(o(new ie(.022,.03,.1,8),V),0,.25,0)),I}function oe(){const E=new Tt;return E.add(l(o(new ie(.07,.06,.15,12),t.woodL),0,.075,0)),E.add(l(c(o(new Ri(.062,12),i("#efe0b0")),-Me/2,0,0),0,.14,0)),E.add(l(o(new Pn(.045,.012,6,12),t.woodL),.08,.08,0)),E}function Dt(E=1){const I=new Tt;I.add(l(o(new ie(.22*E,.16*E,.34*E,12),i("#8a4a30")),0,.17*E,0));for(let V=0;V<6;V++){const Z=V/6*Me*2;d(I,new G(Math.cos(Z)*.06*E,.32*E,Math.sin(Z)*.06*E),new G(Math.cos(Z)*.5,1,Math.sin(Z)*.5),.5*E,.1*E,i(p([e.leaf,e.leafD,e.leafL])),0,5)}return I}const Re=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],Kt=s.UNIT_BOX;function Ut(E=2){const I=new Tt,V=2.4,Z=.5;Q(I,i("#3a2519"),0,V/2,-Z/2+.03,E-.1,V-.1,.04);for(const U of[-1,1])Q(I,t.woodD,U*(E/2-.04),V/2,0,.08,V,Z,.015);for(let U=0;U<4;U++){const A=U<3?.27+U*.72:V-.03;Q(I,t.wood,0,A,0,E-.14,.06,Z-.04),Q(I,t.woodL,0,A+.01,Z/2-.02,E-.12,.08,.04,.01)}Q(I,t.woodD,0,.1,.02,E,.2,Z,.02),Q(I,t.wood,0,V+.04,.02,E+.1,.08,Z+.08,.02),Q(I,t.woodD,0,V+.11,.03,E+.18,.07,Z+.14,.02);for(const U of[-1,1])Q(I,t.iron,U*(E/2-.02),V-.12,Z/2+.004,.06,.2,.012),Q(I,t.iron,U*(E/2-.1),V-.04,Z/2+.004,.2,.06,.012);I.add(l(N(.13),E/2-.25,2.62,.05));const ut=[];for(let U=0;U<3;U++){let A=-E/2+.12;for(;A<E/2-.2;){if(f()<.12){A+=.18;continue}const ft=u(.07,.14),_=u(.34,.56),P=f()<.1?.18:0;ut.push({x:A+ft/2,y:.33+U*.72+_/2,z:.08,sx:ft,sy:_,sz:u(.28,.36),rz:P,c:p(Re)}),A+=ft+.012+P*.4}}return s.instanced(Kt,ut,{parent:I,cast:!0}),I}function Pt(E,I){const V=v(512,512,(U,A)=>{I.forEach((ft,_)=>{U.fillStyle=ft,U.beginPath(),U.arc(A/2,A/2,A/2-_*34,0,Me*2),U.fill()}),U.fillStyle=I[1];for(let ft=0;ft<12;ft++){const _=ft/12*Me*2;U.beginPath(),U.arc(256+Math.cos(_)*196,256+Math.sin(_)*196,10,0,Me*2),U.fill()}}),Z=o(new Ri(E,48),i("#ffffff",{map:V}),!1);Z.rotation.x=-Me/2,Z.position.y=.012;const ut=new Tt;return ut.add(Z),ut}function Bt(E=n.painting){const I=new Tt;for(const V of[-1,1]){const Z=l(o(new Ct(.06,1.8,.06),t.wood),V*.36,.9,0);Z.rotation.z=V*-.12,I.add(Z)}return I.add(c(l(o(new Ct(.06,1.7,.06),t.wood),0,.84,-.3),.35,0,0)),I.add(l(o(new Ct(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),I.add(l(new He(new cn(.95,.72),new Kn({map:E,toneMapped:!1})),0,1.25,.079)),I.add(l(o(new Ct(1,.05,.14),t.wood),0,.82,.08)),I}function D(E){const I=new Tt;Xt(I,1.7,.84,.745,.08,t.woodL,4),Q(I,t.woodD,0,.78,.43,1.74,.05,.03,.01),Q(I,t.wood,.55,.36,0,.5,.66,.76,.02);for(let Z=0;Z<3;Z++)Q(I,t.woodL,.55,.15+Z*.2,.385,.44,.17,.02,.01),Q(I,t.iron,.55,.17+Z*.2,.402,.12,.025,.02);for(const Z of[-.34,.34])I.add(l(o(St(.09,.7,.09,.7),t.woodD),-.76,.35,Z));Q(I,t.woodD,-.76,.14,0,.05,.05,.62,.01);for(const Z of[-1,1])ue(I,Z*.85,.79,.42,Z,1);const V={g:I,kb:null,screen:null,light:null};if(E==="screen"){const Z=l(new Tt,-.12,.805,-.25);Z.userData.y0=.805,Z.add(o(new Ct(.62,.035,.2),t.iron));for(const[_,P]of[[-.06,.54],[0,.56],[.06,.5]])Z.add(l(o(new Ct(P,.012,.04),r("#ff5a3a",.55),!1),0,.022,_));I.add(Z),V.kb=Z;const ut=new Tt;ut.add(o(new Ct(1.04,.7,.05),t.woodD));const U=new Kn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),A=c(l(new He(new cn(.92,.58),U),0,0,-.03),0,Me,0);ut.add(A),V.screen=A,ut.add(l(new He(new cn(.92,.58),U),0,0,.03)),ut.add(l(o(new Ct(.08,.13,.08),t.woodD),0,-.41,0)),ut.add(l(o(new Ct(.34,.02,.2),t.woodD),0,-.455,0)),ut.add(l(N(.09),.46,.4,0)),ut.position.set(-.12,1.25,.17),I.add(ut);const ft=new cs("#7fe8ff",0,3.2,2);ft.position.set(-.12,1.25,-.35),I.add(ft),V.light=ft,I.add(l(oe(),.6,.79,.15))}else E==="paper"?(I.add(c(l(new He(new cn(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-Me/2,0,0)),I.add(c(l(o(new ie(.012,.012,.22,6),t.red),.35,.81,.1),0,0,Me/2)),I.add(l(Et(.12),.65,.79,-.25))):E==="books"&&(I.add(l(o(new Ct(.42,.06,.3),t.red),-.35,.82,0)),I.add(l(o(new Ct(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),I.add(l(o(new Ct(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),I.add(l(qt(),.62,.79,-.22)));return I.add(l(o(new ie(.25,.21,.44,14),t.woodD),0,.22,-.78)),V}function ee(){const E=new Tt;return E.add(l(o(new ie(.3,.38,.5,10),t.woodD),0,.25,0)),E.add(l(o(new Ct(.34,.2,.22),t.iron),0,.6,0)),E.add(l(o(new Ct(.7,.14,.3),t.ironL),0,.77,0)),d(E,new G(.35,.77,0),new G(1,0,0),.32,.1,t.ironL,0,10),E.add(l(o(new Ct(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),E}function Jt(){const E=new Tt;return E.add(l(o(new ie(.06,.06,1.6,8),t.wood),0,.8,0)),E.add(l(o(new ie(.28,.32,.8,12),t.straw),0,1.15,0)),E.add(l(o(new an(.22,12,10),t.straw),0,1.75,0)),E.add(l(o(new Ct(.9,.08,.08),t.wood),0,1.35,0)),E.add(l(c(o(new Pn(.3,.03,6,16),t.red),Me/2,0,0),0,1.2,0)),E}function Ht(){const E=new Tt;E.add(c(l(o(new ie(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),Me/2,0,0));for(const I of[-1,1])E.add(c(l(o(new Ct(.06,1.4,.06),t.wood),I*.35,.7,-.2),0,0,I*.2));return E}function Rt(E=.42){const I=new Tt;return I.add(c(l(o(new ie(E,E,.7,16),t.straw),0,E,0),0,0,Me/2)),I}function te(E=0,I=1){const V=new Tt;for(let Z=0;Z<3;Z++){const ut=Z/3*Me*2,U=o(new ie(.035,.045,1.1,6),t.iron);U.position.set(Math.cos(ut)*.22,.5,Math.sin(ut)*.22),U.rotation.set(Math.sin(ut)*.3,0,-Math.cos(ut)*.3),V.add(U)}V.add(l(o(new ie(.42,.24,.3,14,1,!0),t.iron),0,1.05,0)),V.add(c(l(o(new Ri(.36,14),t.dark,!1),0,1.12,0),-Me/2,0,0)),V.add(l(o(new an(.3,10,6,0,Me*2,0,Me/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let Z=0;Z<4;Z++){const ut=Z/4*Me*2;d(V,new G(Math.cos(ut)*.42,1.18,Math.sin(ut)*.42),new G(Math.cos(ut)*.4,1,Math.sin(ut)*.4),.22,.04,t.iron,0,5)}if(it(V,0,1.12,0,1.6),E){const Z=new cs("#ff9a4a",E,9,2);Z.position.y=1.7,V.add(Z),M.push({l:Z,base:E,ph:u(0,6)})}return V.scale.setScalar(I),V}function vt(){const E=new Tt;E.add(c(l(o(new Ct(.06,.06,.3),t.iron),0,0,.12),0,0,0));const I=l(o(new ie(.045,.06,.5,8),t.woodD),0,.12,.26);return I.rotation.x=.35,E.add(I),E.add(l(o(new ie(.08,.06,.12,8),t.iron),0,.36,.34)),it(E,0,.4,.35,.9),E}function ct(E=3.2,I=n.banner){const V=new Tt;V.add(l(o(new ie(.05,.07,E+.6,8),t.woodD),0,(E+.6)/2,0)),V.add(c(l(o(new ie(.03,.03,1,6),t.iron),0,E+.4,.05),0,0,Me/2)),V.add(l(N(.16),0,E+.72,.02));const Z=new He(new cn(.9,1.9,1,8),i("#ffffff",{map:I,side:Sn})),ut=Z.geometry.attributes.position;for(let U=0;U<ut.count;U++)ut.setZ(U,Math.sin(ut.getY(U)*2.6)*.05);return Z.geometry.computeVertexNormals(),Z.position.set(0,E-.55,.08),Z.castShadow=!0,V.add(Z),V}function C(E=1.2,I=2.6){const V=new Tt;V.add(c(l(o(new ie(.04,.04,E+.3,6),t.iron),0,0,.04),0,0,Me/2));const Z=o(new cn(E,I),i("#ffffff",{map:n.banner,side:Sn}),!1);return Z.position.set(0,-I/2,.05),V.add(Z),V}function S(E=2.4){const I=new Tt;I.add(l(o(new ie(.05,.08,E,7),t.woodD),0,E/2,0)),I.add(l(N(.24),0,E+.12,0)),I.add(l($(.5),0,E+.2,0));for(let V=0;V<3;V++){const Z=o(new cn(.12,u(.5,.9)),i(p([e.red,e.redD,e.bone]),{side:Sn}),!1);Z.position.set(Math.cos(V*2.1)*.08,E-.5,Math.sin(V*2.1)*.08),Z.rotation.y=V*2.1,I.add(Z)}return I}function J(E=3){const I=new Tt,V=Math.max(2,Math.round(E/.9));I.add(c(l(o(new ie(.1,.1,E,8),t.wood),0,.45,0),0,0,Me/2));for(let Z=0;Z<V;Z++){const ut=-E/2+(Z+.5)*E/V;for(const U of[-1,1]){const A=new Tt;A.add(l(o(new ie(.07,.07,1.4,7),t.woodL),0,0,0)),A.add(l(o(new Ln(.07,.3,7),t.boneD),0,.85,0)),A.position.set(ut,.45,0),A.rotation.x=U*.8,I.add(A)}}return I}function yt(){const E=new Tt;E.add(l(o(new ie(.55,.5,.9,18),t.redD),0,.75,0)),E.add(l(o(new ie(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let I=0;I<3;I++){const V=I/3*Me*2;E.add(c(l(o(new ie(.04,.05,.7,6),t.woodD),Math.cos(V)*.42,.3,Math.sin(V)*.42),Math.sin(V)*.2,0,-Math.cos(V)*.2))}return E.add(l(c(o(new Pn(.53,.03,6,20),t.bone),Me/2,0,0),0,1.05,0)),E}function pt(E=4){const I=new Tt,V=[e.red,e.woodL,e.redD,e.wood];for(let Z=0;Z<4;Z++){const ut=o(new ie(.42,.46,E/4,10),i(V[Z]));ut.position.y=E/8+Z*E/4,I.add(ut);for(const U of[-1,1])I.add(l(o(new Ct(.12,.08,.06),t.bone),U*.15,ut.position.y+.05,.42));I.add(l(o(new Ct(.36,.06,.06),t.dark),0,ut.position.y-.18,.43))}I.add(l(N(.45),0,E+.25,0)),I.add(l($(1.1),0,E+.35,0));for(const Z of[-1,1])I.add(c(l(o(new Ct(1,.12,.1),t.woodD),Z*.55,E*.72,0),0,0,Z*.2));return I}function Ot(E=1.9,I=2.6,V="#8a6a4a"){const Z=new Tt,ut=o(new Ln(E,I,8,1,!0),i(V,{side:Sn}));ut.position.y=I/2,Z.add(ut);for(let U=0;U<3;U++){const A=U/3*Me*2+.4;Z.add(c(l(o(new ie(.04,.04,.9,6),t.woodD),Math.cos(A)*.12,I+.25,Math.sin(A)*.12),Math.sin(A)*.4,0,-Math.cos(A)*.4))}return Z.add(c(l(o(new cn(.9,1.3),t.dark,!1),0,.65,E*.82),-.6,0,0)),Z.add(c(l(o(new Pn(E*.62,.05,6,24),t.redD),0,I*.35,0),Me/2,0,0)),Z}function Ft(E=4){const I=new Tt;I.add(l(o(new Ct(1.8,.1,.1),t.wood),0,1.25,0)),I.add(l(o(new Ct(1.8,.1,.1),t.wood),0,.3,.12));for(const V of[-1,1])I.add(l(o(new Ct(.1,1.35,.1),t.woodD),V*.85,.67,0));for(let V=0;V<E;V++){const Z=-.6+V*1.2/(E-1),ut=new Tt;V%2?(ut.add(l(o(new Ct(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ut.add(l(o(new Ct(.22,.05,.06),t.gold),0,.2,0))):(ut.add(l(o(new ie(.03,.03,1.4,6),t.woodD),0,.7,0)),ut.add(l(o(new Ct(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ut.position.set(Z,.05,.08),ut.rotation.z=.08,I.add(ut)}return I}function xt(E=2){const I=new Tt,V=[];for(let Z=0;Z<4;Z++)for(let ut=0;ut<Math.floor(E/.26)-Z;ut++)V.push([-E/2+.13+ut*.26+Z*.13,.13+Z*.22,0]);for(const[Z,ut]of V)I.add(c(l(o(new ie(.12,.12,.9,8),i(p([e.woodL,"#8a6440","#6e4a30"]))),Z,ut,0),Me/2,0,0));return I}function wt(){const E=new Tt;E.add(l(o(new Ct(1.6,.12,1),t.wood),0,.62,0));for(const I of[-1,1])E.add(l(o(new Ct(1.6,.36,.06),t.woodL),0,.85,I*.47)),E.add(c(l(o(new ie(.42,.42,.08,14),t.woodD),0,.42,I*.58),Me/2,0,0));for(const I of[-1,1])E.add(c(l(o(new Ct(1.4,.07,.07),t.woodD),1.3,.55,I*.35),0,0,-.18));return E.add(l(re(),-.3,.68,.1)),E.add(l(jt(.4),.35,.68,-.15)),E}function Nt(){const E=new Tt;E.add(ke(2.2,.9,.9,t.woodL));for(const[Z,ut]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])E.add(l(o(new Ct(.08,2.2,.08),t.woodD),Z,1.1,ut));const I=v(256,64,(Z,ut,U)=>{for(let A=0;A<8;A++)Z.fillStyle=A%2?"#e3d5b6":"#8a2420",Z.fillRect(A*32,0,32,U)}),V=o(new Ct(2.5,.05,1.4),i("#ffffff",{map:I}));V.position.set(0,2.2,.15),V.rotation.x=.22,E.add(V);for(let Z=0;Z<9;Z++)E.add(l(o(new an(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return E.add(l(jt(.5),-1.4,0,.3)),E.add(l(ne(.8),1.5,0,-.1)),E}function W(){const E=new Tt;E.add(l(o(g(new ie(1,1.1,.9,22),1.2),t.stone),0,.45,0)),E.add(c(l(o(new Ri(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-Me/2,0,0));for(const V of[-1,1])E.add(l(o(new Ct(.14,1.7,.14),t.woodD),V*.95,1.5,0));const I=o(new Ln(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return I.position.y=2.65,I.rotation.y=Me/4,E.add(I),E.add(c(l(o(new ie(.06,.06,1.9,8),t.wood),0,2.05,0),0,0,Me/2)),E.add(l(o(new ie(.15,.13,.22,10),t.woodL),.2,1.55,0)),E.add(l(N(.18),0,3.15,0)),E}function _t(E=0){const I=new Tt;I.add(l(o(new ie(.07,.1,2.8,8),t.iron),0,1.4,0)),I.add(l(o(new Ct(.55,.06,.06),t.iron),.22,2.7,0));const V=new Tt;if(V.add(o(new ie(.14,.18,.32,8),t.iron)),V.add(l(o(new an(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),E){const Z=new cs("#ffc477",E,9,2);V.add(Z)}return V.position.set(.44,2.44,0),I.add(V),I}function mt(){const E=new Tt;Q(E,t.wood,0,.25,0,1,.5,.6,.02),E.add(c(l(o(new ie(.3,.3,1,16,1,!1,0,Me),t.woodL),0,.5,0),0,0,Me/2));for(const I of[-.38,.38])Q(E,t.iron,I,.27,0,.07,.52,.62),E.add(l(c(o(new Pn(.31,.025,4,16,Me),t.iron),0,Me/2,0),I,.5,0));for(const I of[-1,1])for(const V of[-1,1])Q(E,t.iron,I*.49,.05,V*.29,.06,.1,.06);Q(E,t.gold,0,.44,.31,.16,.2,.025),Q(E,t.dark,0,.42,.325,.03,.06,.01);for(const I of[-1,1])E.add(l(c(o(new Pn(.06,.012,4,12),t.iron),0,Me/2,0),I*.51,.3,0));return E.add(l(N(.1),0,.62,.22)),E}function Wt(){const E=new Tt;Q(E,t.woodD,0,.25,0,1.3,.5,1.1,.03),Q(E,t.red,0,.58,.05,1.08,.16,.9,.06),Q(E,t.woodD,0,1.2,-.48,1.3,1.9,.2,.03),Q(E,t.red,0,1.25,-.36,.9,1.3,.06,.03);for(let I=0;I<4;I++)for(const V of[-1,1])E.add(l(o(new an(.03,6,4),t.gold),V*.4,.7+I*.36,-.32));for(const I of[-1,1])Q(E,t.woodD,I*.62,.75,0,.18,.5,1,.03),Q(E,t.iron,I*.62,1.01,.1,.22,.04,.8,.01),E.add(l(N(.12),I*.62,1.1,.45)),d(E,new G(I*.55,2.15,-.48),new G(I*.3,1,0),.5,.08,t.bone,0,6);return E.add(l(N(.32),0,2.25,-.4)),E.add(l($(1),0,2.3,-.4)),E}function et(E=e.red){const I=new Tt;return I.add(c(o(new ie(.42,.42,.06,18),i(E)),Me/2,0,0)),I.add(c(l(o(new Pn(.42,.04,6,20),t.iron),0,0,.03),0,0,0)),I.add(l(N(.16),0,0,.08)),I}function K(){const E=new Tt;return E.add(o(new Ct(.7,.8,.08),t.woodD)),E.add(l(at(.32),0,.02,.18)),E}function dt(E=.7,I=6){const V=new Tt;V.add(l(o(new ie(.012,.012,1,4),t.iron),0,.5,0)),V.add(c(o(new Pn(E,.04,6,24),t.iron),Me/2,0,0));for(let Z=0;Z<I;Z++){const ut=Z/I*Me*2;V.add(l(Et(.12),Math.cos(ut)*E,.02,Math.sin(ut)*E))}return V}function It(E,I,V,Z){for(let ut=0;ut<I.length-1;ut++){const[U,A]=I[ut],[ft,_]=I[ut+1],P=5;for(let B=1;B<P;B++){const ht=B/P,At=U+(ft-U)*ht,bt=A+(_-A)*ht,Gt=V-Math.sin(ht*Me)*Z;E.add(l(o(new an(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),At,Gt,bt))}const H=Math.hypot(ft-U,_-A),Y=o(new ie(.008,.008,H,3),t.dark,!1);Y.position.set((U+ft)/2,V-Z*.6,(A+_)/2),Y.rotation.set(0,-Math.atan2(_-A,ft-U),Me/2),E.add(Y)}}function x(E="round",I=1){const V=new Tt;if(V.add(l(o(new ie(.18*I,.3*I,1.8*I,8),t.wood),0,.9*I,0)),E==="pine")for(let Z=0;Z<4;Z++)V.add(l(o(new Ln((1.5-Z*.3)*I,1.4*I,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+Z*.8)*I,0));else if(E==="dead")for(let Z=0;Z<4;Z++){const ut=o(new ie(.04*I,.1*I,1.2*I,6),t.woodD),U=Z*1.7;ut.position.set(Math.cos(U)*.3*I,(1.6+Z*.25)*I,Math.sin(U)*.3*I),ut.rotation.set(Math.sin(U)*.8,0,-Math.cos(U)*.8),V.add(ut)}else{const Z=E==="autumn"?[e.autumn1,e.autumn2,e.autumn3]:[e.leaf,e.leafD,e.leafL];for(const[ut,U,A,ft]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])V.add(l(o(new an(ft*I,14,10),i(p(Z))),ut*I,U*I,A*I))}return V.rotation.y=u(0,3),V}const k=new Map;function X(E,I,V,Z,ut=0){const U=new Ne().compose(new G(V,ut,Z),new bn().setFromAxisAngle(new G(0,1,0),u(0,2*Me)),new G(I*u(.92,1.08),I*u(.9,1.12),I*u(.92,1.08))),A=k.get(E);return A?A.push(U):k.set(E,[U]),!0}function F(E){E.flora.scene.updateMatrixWorld(!0);for(const[I,V]of k){const Z=jf(E.flora,I);if(!Z)throw new Error(`no flora model for ${I}`);for(const[ut,U]of Qf(s,Z)){const A=U.length===1?U[0]:wh(U,!1);if(!A)continue;const ft=new fo(A,ut,V.length);V.forEach((_,P)=>ft.setMatrixAt(P,_)),ft.castShadow=!ut.isMeshStandardMaterial,ft.receiveShadow=!0,ft.frustumCulled=!1,T.add(ft)}}}function rt(){const E=new Tt;E.add(l(o(new ie(.3,.38,.6,8),t.stone),0,.3,0));const I=l(o(new mh(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return I.scale.y=1.7,E.add(I),R.push({o:I,axis:"y",v:.6,bob:!0,y0:1}),E}function lt(){const E=new Tt;E.add(l(o(new an(.5,16,10,0,Me*2,Me*.3,Me*.7),i("#2e2a2c",{side:Sn})),0,.55,0)),E.add(c(l(o(new Ri(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-Me/2,0,0));for(let I=0;I<3;I++){const V=I/3*Me*2;E.add(l(o(new ie(.04,.04,.3,6),t.iron),Math.cos(V)*.32,.12,Math.sin(V)*.32))}return E}function kt(E,I,V=.9,Z=-1){for(let ut=0;ut<I.length-1;ut++){if(ut===Z)continue;const[U,A]=I[ut],[ft,_]=I[ut+1],P=Math.hypot(ft-U,_-A),H=-Math.atan2(_-A,ft-U);for(const Y of[V*.45,V*.85]){const B=o(new Ct(P,.07,.06),t.woodL);B.position.set((U+ft)/2,Y,(A+_)/2),B.rotation.y=H,E.add(B)}for(const[Y,B]of[[U,A],[ft,_]])E.add(l(o(new Ct(.12,V+.15,.12),t.woodD),Y,(V+.15)/2,B))}}function pe(E){const I=new Tt;I.add(l(o(new Ct(.1,2.2,.1),t.woodD),0,1.1,0));const V=v(256,96,(Z,ut,U)=>{Z.fillStyle="#6a4630",Z.fillRect(0,0,ut,U),Z.strokeStyle="#3a2419",Z.lineWidth=8,Z.strokeRect(4,4,ut-8,U-8),Z.fillStyle="#e3d5b6",Z.font=`800 40px ${Hc}`,Z.textAlign="center",Z.textBaseline="middle",Z.fillText(E,ut/2,U/2+2)});return I.add(l(o(new Ct(1.1,.42,.06),i("#ffffff",{map:V})),.25,1.85,0)),I}function Ee(E=e.red){const I=new Tt;for(const V of[-1,1])Q(I,t.woodD,V*.48,.24,0,.07,.18,1.96,.015);for(const[V,Z,ut]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])Q(I,t.woodD,V,ut/2,Z,.1,ut,.1,.015),I.add(l(o(new an(.065,8,6),t.wood),V,ut+.04,Z));for(let V=0;V<5;V++)Q(I,t.wood,-.32+V*.16,.66,-.98,.07,.5,.04,.01);return Q(I,t.woodD,0,.92,-.98,.98,.09,.07,.015),Q(I,t.woodD,0,.42,-.98,.98,.07,.07,.015),Q(I,t.woodD,0,.5,.98,.98,.14,.06,.015),Q(I,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),Q(I,i(E),0,.5,.25,.96,.07,1.36,.03),Q(I,i(E),0,.535,-.38,.96,.05,.16,.025),Q(I,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),Q(I,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),I.add(l(N(.12),0,1.08,-.94)),I}function Oe(){const E=new Tt;E.add(Ee(e.redD));const I=Ee("#4a3a30");I.position.y=1.15,E.add(I);for(const[V,Z]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])E.add(l(o(new Ct(.1,2.2,.1),t.wood),V,1.1,Z));for(let V=0;V<5;V++)E.add(l(o(new Ct(.06,.05,.06),t.woodL),.52,.4+V*.3,.9));return E}function me(){const E=new Tt;Q(E,t.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const I of[-1,1]){Q(E,t.wood,I*.3,1.05,.31,.56,1.78,.03,.01);for(const V of[.62,1.48])Q(E,t.woodL,I*.3,V,.33,.4,.66,.02,.008);for(const V of[.4,1.7])Q(E,t.iron,I*.52,V,.33,.14,.05,.015);Q(E,t.gold,I*.06,1.08,.34,.03,.14,.03)}Q(E,t.wood,0,2.05,0,1.32,.1,.68,.02),Q(E,t.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const I of[-1,1])for(const V of[-1,1])Q(E,t.woodD,I*.54,.05,V*.24,.12,.1,.12,.02);return E}function Ye(E,I=1.8){const V=new Tt;return V.add(l(o(y(new Ct(.12,I,E),I,1.3),t.plankWall),0,I/2,0)),V.add(l(o(new Ct(.18,.1,E+.04),t.timber),0,I,0)),V}function de(E=.8,I=1.6){const V=new He(new cn(E,I,6,1),i(e.red,{side:Sn})),Z=V.geometry.attributes.position;for(let U=0;U<Z.count;U++)Z.setZ(U,Math.sin(Z.getX(U)*14)*.04);V.geometry.computeVertexNormals(),V.position.y=I/2+.1;const ut=new Tt;return ut.add(V),ut.add(l(c(o(new ie(.02,.02,E+.2,6),t.iron),0,0,Me/2),0,I+.12,0)),ut}function se(){const E=new Tt;for(let I=0;I<5;I++)E.add(c(l(o(new ie(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+I%3*.08,u(-.1,.1)),0,u(-.4,.4),Me/2));return E}function we(){const E=new Tt;for(let V=0;V<3;V++){const Z=V/3*Me*2;E.add(c(l(o(new ie(.025,.03,1.3,6),t.woodD),Math.cos(Z)*.22,.62,Math.sin(Z)*.22),Math.sin(Z)*.32,0,-Math.cos(Z)*.32))}const I=l(c(o(new ie(.07,.11,1.3,12),t.gold),.9,0,0),0,1.35,.15);return E.add(I),E}function Mn(){const E=new Tt;E.add(l(o(new ie(.06,.22,.9,10),t.woodD),0,.45,0)),E.add(l(o(new an(.34,20,14),i("#2a3050")),0,1.25,0));for(let I=0;I<14;I++){const V=u(0,2*Me),Z=u(-1.2,1.2);E.add(l(o(new an(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(V)*Math.cos(Z)*.345,1.25+Math.sin(Z)*.345,Math.sin(V)*Math.cos(Z)*.345))}return E.add(l(c(o(new Pn(.4,.02,6,28),t.gold),0,Me/2,.3),0,1.25,0)),E}const wn=v(256,192,(E,I,V)=>{E.fillStyle="#d8c8a0",E.fillRect(0,0,I,V),E.strokeStyle="#6a4a30",E.lineWidth=3,E.beginPath(),E.moveTo(30,150),E.bezierCurveTo(60,60,140,40,220,90),E.bezierCurveTo(200,150,120,170,30,150),E.stroke(),E.fillStyle="#8a2420";for(const[Z,ut]of[[90,100],[150,80],[180,120]])E.beginPath(),E.arc(Z,ut,6,0,Me*2),E.fill();E.strokeStyle="rgba(106, 74, 48, 0.5)",E.setLineDash([6,6]),E.beginPath(),E.moveTo(90,100),E.lineTo(150,80),E.lineTo(180,120),E.stroke()});function ni(){const E=new Tt;return E.add(o(new Ct(1.4,1.05,.04),t.woodD)),E.add(l(new He(new cn(1.3,.95),new Kn({map:wn,toneMapped:!1})),0,0,.03)),E}function Tn(){const E=new Tt,I=i("#6e6668"),V=i("#4a4446"),Z=i("#b8b0a8"),ut=o(new Ca(.32,.8,6,12),I);ut.rotation.x=Me/2,ut.position.set(0,.34,0),ut.scale.set(1.05,1,.85),E.add(ut),E.add(l(o(new an(.24,12,10),Z),0,.22,.25));const U=l(new Tt,0,.5,.78);U.add(o(new an(.24,14,10),I)),U.add(c(l(o(new Ln(.12,.34,10),V),0,-.05,.26),Me/2,0,0)),U.add(l(o(new an(.04,6,4),t.dark,!1),0,-.03,.43));for(const A of[-1,1])U.add(c(l(o(new Ln(.07,.2,6),V),A*.13,.22,-.02),0,0,-A*.3)),U.add(l(o(new an(.03,6,4),r("#ffb84a",1.2),!1),A*.1,.05,.2));U.rotation.x=.25,E.add(U);for(const[A,ft]of[[-.2,.55],[.2,.55]])E.add(c(l(o(new Ca(.07,.36,4,8),I),A,.08,ft+.15),Me/2,0,0));return E.add(c(l(o(new Ln(.12,.7,8),V),.25,.22,-.75),1.2,.6,0)),E.add(c(l(o(new Pn(.2,.03,6,16),t.red),0,.42,.62),Me/2.4,0,0)),E}return{FLAGS:b,FLAMES:L,SPINNERS:R,FIRE_LIGHTS:M,BOOK_COLS:Re,flameTex:w,flame:it,skull:N,hornedSkull:at,horns:$,fj:nt,bx:Q,taper:St,boards:Xt,cornerIron:ue,barrel:ne,crate:jt,sack:re,table:ke,roundTable:xe,stool:ve,bench:Te,candle:Et,skullCandle:qt,bottle:Qt,mug:oe,plant:Dt,bookshelf:Ut,rug:Pt,easel:Bt,desk:D,anvil:ee,dummy:Jt,target:Ht,hay:Rt,brazier:te,torch:vt,poleBanner:ct,hangingBanner:C,skullPole:S,spikes:J,drum:yt,totem:pt,tent:Ot,weaponRack:Ft,woodpile:xt,cart:wt,stall:Nt,well:W,lampPost:_t,chest:mt,throne:Wt,shield:et,trophy:K,chandelier:dt,lanternString:It,tree:x,plantFlora:X,growFlora:F,crystal:rt,cauldron:lt,fence:kt,signPost:pe,bed:Ee,bunk:Oe,wardrobe:me,partition:Ye,curtain:de,scrollStack:se,telescope:we,starGlobe:Mn,wallMap:ni,wolf:Tn,put:h}}const{PI:Dd}=Math;function AS(s,t,e,n){const{scene:i,COL:r,toon:o,mesh:a,at:l,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:v,growFlora:m,lampPost:g,skullPole:y}=t,T=Ih.pts;function b(j,N){let st=!1;for(let at=0,$=T.length-1;at<T.length;$=at++){const[ot,nt]=T[at],[Q,St]=T[$];nt>N!=St>N&&j<(Q-ot)*(N-nt)/(St-nt)+ot&&(st=!st)}return st}function L(j,N,st,at,$,ot){const nt=$-st,Q=ot-at,St=nt*nt+Q*Q||1,Xt=Math.max(0,Math.min(1,((j-st)*nt+(N-at)*Q)/St));return Math.hypot(j-st-nt*Xt,N-at-Q*Xt)}const R=[...Ps.map(j=>({w:j.w*.65,pts:j.closed?[...j.line,j.line[0]]:j.line})),{w:1,pts:_a}],M=[],w=ep.map(j=>Qn[j]);function z(j,N,st=.6){const at=Math.atan2(N,j);if(Math.hypot(j,N)>Hr(at)-1.6)return!1;for(const $ of R){const ot=$.pts;for(let nt=0;nt<ot.length-1;nt++){const Q=ot[nt],St=ot[nt+1];if(!(Math.abs(Q[0]-j)>$.w+st+1.5||Math.abs(Q[1]-N)>$.w+st+1.5)&&L(j,N,Q[0],Q[1],St[0],St[1])<$.w+st)return!1}}for(const $ of xa)if($.kind==="house"){const[ot,nt]=no($,j,N),Q=3.4+st;if(Math.abs(ot)<$.w/2+Q&&nt>-$.d/2-Q&&nt<$.d/2+Q+($.deck?4.5:0)+($.id==="tavern"?5:0))return!1}else if(Math.hypot(j-$.x,N-$.z)<$.r+($.kind==="open"?2.2:1.4)+st)return!1;for(const $ of Gc)if($.kind==="hut"){const[ot,nt]=no($,j,N);if(Math.abs(ot)<$.w/2+2.6+st&&Math.abs(nt)<$.d/2+2.6+st)return!1}else if(Math.hypot(j-$.x,N-$.z)<$.r+1.8+st)return!1;for(let $=0;$<T.length;$++){const[ot,nt]=T[$],[Q,St]=T[($+1)%T.length];if(L(j,N,ot,nt,Q,St)<Ih.thick/2+.8+st||Math.hypot(j-ot,N-nt)<3.6+st)return!1}if(Math.hypot(j+44,N-26)<6+st||Math.hypot(j-Nh[0],N-Nh[1])<9+st)return!1;for(const $ of w)if(Math.hypot(j-$.x,N-$.z)<1.2+st)return!1;for(const $ of M)if(Math.hypot(j-$.x,N-$.z)<$.r+st)return!1;return!0}function O(j,N,st,at){let $=0;for(let ot=0;ot<N&&$<j;ot++){const nt=f(0,2*Dd),Q=Math.sqrt(d())*58,St=Math.cos(nt)*Q*1.04,Xt=Math.sin(nt)*Q*.9;st(St,Xt)&&(at(St,Xt),$++)}}O(34,6e3,(j,N)=>b(j,N)&&z(j,N,1.4),(j,N)=>{v(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),j,N),M.push({x:j,z:N,r:2.2})}),O(80,9e3,(j,N)=>!b(j,N)&&z(j,N,1.6),(j,N)=>{v(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),j,N),M.push({x:j,z:N,r:2.4})});{const j=[],N=[],st=[];O(90,9e3,(at,$)=>z(at,$,.5),(at,$)=>{const ot=f(.55,1);v(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),ot*1.25,at,$),M.push({x:at,z:$,r:ot})}),O(60,6e3,(at,$)=>z(at,$,.4),(at,$)=>{const ot=f(.25,.8);j.push({x:at,y:ot*.3,z:$,sx:ot,sy:ot*f(.5,.85),sz:ot*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),M.push({x:at,z:$,r:ot})}),O(1200,16e3,(at,$)=>z(at,$,.1),(at,$)=>{const ot=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let nt=0;nt<4;nt++)N.push({x:at+f(-.12,.12),y:.11,z:$+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:ot})}),O(320,12e3,(at,$)=>z(at,$,.1),(at,$)=>{st.push({x:at,y:.16,z:$,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Gi(1,0),j,{cast:!0});for(const at of[p(new Ln(.06,.24,4),N,{}),p(new an(.09,7,5),st,{})])at&&(at.userData.noLine=!0)}m(n);for(const[j,N,st]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const at=Ps.find(ot=>ot.id===j);if(!at)continue;const $=at.line;for(let ot=6;ot<$.length-6;ot+=N*2){const[nt,Q]=$[ot-1],[St,Xt]=$[ot+1],ue=$[ot],gt=Math.hypot(St-nt,Xt-Q)||1,Vt=-(Xt-Q)/gt,ne=(St-nt)/gt,fe=ot/(N*2)%2?1:-1,jt=ue[0]+Vt*fe*(at.w*.62+.5),re=ue[1]+ne*fe*(at.w*.62+.5);if(j==="ring"&&Math.hypot(jt,re)<10)continue;let ke=!0;for(const xe of w)Math.hypot(jt-xe.x,re-xe.z)<2&&(ke=!1);for(const xe of xa)xe.kind!=="house"&&Math.hypot(jt-xe.x,re-xe.z)<xe.r+.5&&xe.id!=="court"&&(ke=!1);ke&&h(i,st==="lamp"?g(0):y(f(2,2.6)),jt,re,Math.atan2(-Vt*fe,-ne*fe))}}const q=[];function it(){const j=new Tt,N=o("#2a2426");j.add(l(a(new an(.16,8,6),N),0,0,0)),j.children[0].scale.set(1,.8,1.6),j.add(l(a(new an(.1,8,6),N),0,.08,.2)),j.add(c(l(a(new Ln(.03,.12,4),o("#c79a45")),0,.07,.33),Dd/2,0,0));for(const st of[-1,1]){const at=l(new Tt,st*.1,.02,0);at.add(l(a(new Ct(.55,.03,.22),N),st*.27,0,0)),j.add(at)}return j}for(let j=0;j<6;j++){const N=it();N.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},N.scale.setScalar(1.8),i.add(N),q.push(N)}for(const j of["war","library","tavern"]){const N=e.HOUSES[j];if(!N)continue;const st=N.roof;for(let at=0;at<2;at++){const $=it(),ot=$.children[3],nt=$.children[4];ot.visible=nt.visible=!0,ot.rotation.z=.9,nt.rotation.z=-.9,$.position.set(f(-N.r.w/3,N.r.w/3),st.hR+.3,0),$.rotation.y=f(0,6),st.R.add($)}}return{CROWS:q}}async function CS(s){const t=s.reducedMotion;let e=s.width,n=s.height;const i=new ZM({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});_S(i,e,n,s.dpr);const r=new M0,o=xS(i,r),a=iS(),l=lS(),c=gS(),h=ES(o),d=await yS(o,h,a);await c;const f=MS(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=F1(o,h,d,f,d.models),p=AS(o,h,f,d.models),{TEX:v,COL:m,toon:g,rnd:y,rr:T,pick:b,_c:L}=o,{FLAMES:R,SPINNERS:M,FLAGS:w,FIRE_LIGHTS:z}=h,{HOUSES:O,deskF:q,deskB:it,hearthLight:j}=f,{mouthMat:N,coreMat:st,fireLight:at,chimneyTop:$,emberBase:ot,waterTex:nt,fallTex:Q,mists:St,skyBoat:Xt,airship:ue}=u,{CROWS:gt}=p,{skyDome:Vt,cloudRing:ne}=d,fe=Object.fromEntries(Hi.map(tt=>[tt,y()*6])),jt=cS(d.crossings),re=pS(o,r,await l,{reducedMotion:t,phases:fe,start:ys,groundY:jt,flameTex:h.flameTex}),ke=Object.values(re.actors),xe=()=>Object.fromEntries(Hi.map(tt=>[tt,Xi(ys[tt])]));let ve=xe(),Te=null,Et=!1;const qt=new Set,Qt={},oe=[];{const tt=new Set;for(const be of Object.values(O)){for(const Ae of Object.values(be.sides))tt.add(Ae.up);if(tt.add(be.roof.R),be.upper){const Ae=be.upper;tt.add(Ae.U);const $t=new Map;Ae.U.traverse(Ue=>{if(!(Ue instanceof He))return;const Be=Ue.material;let Ge=$t.get(Be);Ge||(Ge=Be.clone(),$t.set(Be,Ge),Ae.mats.push(Ge)),Ue.material=Ge})}}for(const be of ke)tt.add(be.root);for(const{f:be}of R)tt.add(be);for(const be of M)tt.add(be.o);for(const be of w)tt.add(be);for(const be of gt)tt.add(be);[q.g,it.g,Xt,ue,ne,Vt].forEach(be=>tt.add(be)),r.updateMatrixWorld(!0);const Mt=new Map,zt=["position","normal","uv"],le=be=>{if(tt.has(be))return;for(const ge of[...be.children])le(ge);if(!(be instanceof He)||be instanceof fo||be.children.length||Array.isArray(be.material))return;const Ae=be.material,$t=be.geometry;if(Ae.transparent||Ae.vertexColors||Ae.isShaderMaterial||Ae.depthWrite===!1||!$t.attributes.uv||!$t.attributes.normal||$t.attributes.color)return;const Ue=$t.index?$t.toNonIndexed():$t.clone();for(const ge of Object.keys(Ue.attributes))zt.includes(ge)||Ue.deleteAttribute(ge);Ue.morphAttributes={},Ue.clearGroups(),Ue.applyMatrix4(be.matrixWorld);const Be=Ae.uuid+(be.castShadow?"s":"n"),Ge=Mt.get(Be);Ge?Ge.geos.push(Ue):Mt.set(Be,{m:Ae,cast:be.castShadow,geos:[Ue]}),be.parent?.remove(be)};le(r);for(const{m:be,cast:Ae,geos:$t}of Mt.values()){const Ue=wh($t,!1);if(!Ue){console.warn("could not merge",be.type);continue}const Be=new He(Ue,be);Be.castShadow=Ae,Be.receiveShadow=!0,Be.matrixAutoUpdate=!1,r.add(Be)}const Ie=new Kn({visible:!1});for(const[be,Ae]of Object.entries(O)){const $t=Ae.top+Ae.roof.hR,Ue=new He(new Ct(Ae.r.w+.6,$t,Ae.r.d+.6),Ie);Ue.position.set(Ae.r.x,$t/2,Ae.r.z),Ue.rotation.y=Ae.r.ry||0,Ue.userData.houseId=be,r.add(Ue),Ue.updateMatrixWorld(!0),oe.push(Ue)}}const Dt=new ci($n.fov,e/n,$n.near,$n.far),Re={t:new G(...$n.home.target),p:new G(...$n.home.position)};Dt.position.copy(Re.p);const Kt=new $M(Dt,i.domElement);Kt.target.copy(Re.t),Kt.enableDamping=!0,Kt.dampingFactor=.08,Kt.minDistance=$n.minDistance,Kt.maxDistance=$n.maxDistance,Kt.maxPolarAngle=$n.maxPolarAngle,Kt.minPolarAngle=$n.minPolarAngle,Kt.screenSpacePanning=!1,Kt.zoomSpeed=.8,Kt.update();function Ut(){const tt=Kt.target,Mt=Math.hypot(tt.x,tt.z),zt=$n.targetRadius;if(Mt>zt){const le=zt/Mt;Dt.position.x-=tt.x*(1-le),Dt.position.z-=tt.z*(1-le),tt.x*=le,tt.z*=le}if(tt.y<$n.targetMinY||tt.y>$n.targetMaxY){const le=Math.max($n.targetMinY,Math.min($n.targetMaxY,tt.y));Dt.position.y+=le-tt.y,tt.y=le}Dt.position.y<$n.minHeight&&(Dt.position.y=$n.minHeight)}let Pt=null,Bt=null,D=!1;function ee(tt,Mt){if(t){Kt.target.copy(tt),Dt.position.copy(Mt),Kt.update();return}Pt={t0:performance.now(),dur:1100,ft:Kt.target.clone(),fp:Dt.position.clone(),tt,tp:Mt}}function Jt(tt){if(tt==="overview"){Bt=null,ee(Re.t.clone(),Re.p.clone());return}const Mt=O[tt];Bt=tt,Mt&&(Mt.view="ground");const zt=v1(tt,[Dt.position.x-Kt.target.x,Dt.position.z-Kt.target.z]);ee(new G(...zt.target),new G(...zt.position))}let Ht=null,Rt=null,te=null,vt=null;const ct=new Cf,C=new Lt,S=ke.map(tt=>tt.root);function J(tt){const Mt=i.domElement.getBoundingClientRect();if(Mt.width===0||Mt.height===0)return null;C.set((tt.clientX-Mt.left)/Mt.width*2-1,-((tt.clientY-Mt.top)/Mt.height)*2+1),ct.setFromCamera(C,Dt);for(let zt=ct.intersectObjects(S,!0)[0]?.object??null;zt;zt=zt.parent){const le=zt.userData.agentId;if(le)return le}return null}const yt=()=>{Pt=null,te=null,Ht?.()};let pt=0;const Ot=tt=>{Pt=null,vt={x:tt.clientX,y:tt.clientY,moved:!1}},Ft=tt=>{!vt&&tt.pointerType==="mouse"&&tt.timeStamp-pt>90&&(pt=tt.timeStamp,i.domElement.style.cursor=J(tt)?"pointer":""),!(!vt||vt.moved||Math.hypot(tt.clientX-vt.x,tt.clientY-vt.y)<=4)&&(vt.moved=!0,yt())},xt=tt=>{const Mt=vt&&!vt.moved;if(vt=null,tt.type!=="pointerup"||!Mt)return;const zt=J(tt);zt&&Rt?.(zt)},Nt=[["pointerdown",Ot],["pointermove",Ft],["pointerup",xt],["pointercancel",xt],["wheel",yt],["keydown",tt=>{tt.key.startsWith("Arrow")&&yt()}]];for(const[tt,Mt]of Nt)i.domElement.addEventListener(tt,Mt,{passive:!0});Kt.listenToKeyEvents(i.domElement);const W=tt=>{if(!te)return!1;const Mt=Qn[ve[te].spot];return Mt.room===tt.id&&!Mt.out},_t=tt=>D||Bt===tt.id||!!tt.near||W(tt);function mt(tt,Mt){const zt=Kt.target,le=Math.hypot(tt.r.x-zt.x,tt.r.z-zt.z),Ie=Math.max(tt.r.w,tt.r.d)*.8+9;tt.near=tt.near?Mt<72&&le<Ie+4:Mt<64&&le<Ie}function Wt(tt,Mt,zt){if(zt.fading!==Mt){zt.fading=Mt;for(const le of tt)le.transparent=Mt,le.needsUpdate=!0}}function et(tt,Mt,zt){const le=Mt?0:1;tt.s+=(le-tt.s)*zt,Math.abs(tt.s-le)<.004&&(tt.s=le),tt.up.scale.y=Math.max(.001,tt.s),tt.up.visible=tt.s>.03}function K(tt){const Mt=Dt.position.distanceTo(Kt.target),zt=t?1:Math.min(1,tt*5),le=t?1:Math.min(1,tt*6);for(const Ie of Object.values(O)){mt(Ie,Mt);const be=_t(Ie),Ae=be&&!!Ie.upper&&Ie.view==="upper",$t=be?1:0;Ie.lift+=($t-Ie.lift)*zt,Math.abs(Ie.lift-$t)<.002&&(Ie.lift=$t);const Ue=Ie.roof;Ue.R.position.y=Ue.base+Ie.lift*3.4,Ue.R.visible=Ie.lift<.97;for(const Qe of Ue.mats)Qe.opacity=1-Ie.lift;const Be=Dt.position.x-Ie.r.x,Ge=Dt.position.z-Ie.r.z,ge=Math.hypot(Be,Ge)||1,qe=Math.cos(Ie.r.ry||0),In=Math.sin(Ie.r.ry||0),Nn=Qe=>{const Cn=((Qe.n[0]*qe+Qe.n[1]*In)*Be+(-Qe.n[0]*In+Qe.n[1]*qe)*Ge)/ge;return Cn>.32?Qe.wish=!0:Cn<.06&&(Qe.wish=!1),!!Qe.wish};for(const Qe of Object.values(Ie.sides))et(Qe,be&&!Ae&&Nn(Qe),le);if(Ie.upper){const Qe=Ie.upper,Cn=be&&!Ae?1:0;Qe.lift+=(Cn-Qe.lift)*zt,Math.abs(Qe.lift-Cn)<.002&&(Qe.lift=Cn),Wt(Qe.mats,Qe.lift>0,Qe),Qe.U.position.y=Qe.top+Qe.lift*3.4,Qe.U.visible=Qe.lift<.97;for(const Ji of Qe.mats)Ji.opacity=1-Qe.lift;for(const Ji of Object.values(Qe.sides))et(Ji,Ae&&Nn(Ji),le)}}}function dt(tt,Mt,zt,le,Ie,be){const Ae=new dn;Ae.setAttribute("position",new Wn(new Float32Array(tt*3),3));const $t=new Wr(Ae,new Qr({color:Mt,size:zt,map:le,transparent:!0,opacity:Ie,depthWrite:!1,blending:le?or:Ai}));return $t.frustumCulled=!1,$t.userData.seed=Float32Array.from({length:tt},()=>Math.random()),$t.userData.h=Float32Array.from({length:tt},()=>Math.random()*be),$t.userData.top=be,$t.visible=!t,r.add($t),$t}const It=[{at:$,p:dt(30,"#d8cfc6",2.2,v.soft,.5,9),heat:!0}];for(const tt of Object.values(O)){if(!tt.roof.smokeAt)continue;tt.g.updateMatrixWorld(!0);const Mt=tt.roof.R.localToWorld(new G(...tt.roof.smokeAt));It.push({at:Mt,p:dt(14,"#d8cfc6",1.4,v.soft,.45,5),house:tt})}const x=dt(60,"#ffb04a",.11,null,.9,4),k=[];for(let tt=0;tt<4;tt++){const Mt=new Wi(new ds({map:v.spark,color:tt%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ai}));Mt.scale.setScalar(.25),q.g.add(Mt),k.push(Mt)}const X=tt=>{const Mt=new Wi(new ds({map:v.spark,color:tt%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ai}));return Mt.scale.setScalar(.22),Mt.raycast=()=>{},Mt},F=["yard-1","yard-2"].map((tt,Mt)=>{const zt=Qn[tt],le=new Tt;le.position.set(zt.x+Math.sin(zt.ry)*1.1,1.2,zt.z+Math.cos(zt.ry)*1.1);const Ie=[0,1,2].map(X);return le.add(...Ie),r.add(le),{spot:tt,sprites:Ie,ph:Mt*1.7}}),rt={};for(const tt of["frontend","backend"]){const Mt=re.actors[tt].root.getObjectByName("mixamorigRightHand");if(!Mt)continue;const zt=new Tt,le=new He(new ie(.055,.05,.13,10),g(m.woodL)),Ie=new He(new ie(.057,.057,.025,10),g("#f3ead2"));Ie.position.y=.075,zt.add(le,Ie),zt.position.set(0,.09,.05),Mt.add(zt),re.actors[tt].root.updateMatrixWorld(!0),zt.scale.setScalar(1/Mt.getWorldScale(new G).x),zt.visible=!1,rt[tt]=zt}const lt=[];{const tt=new Set;for(const zt of Object.values(O)){tt.add(zt.roof.R);for(const le of Object.values(zt.sides))tt.add(le.up);if(zt.upper){tt.add(zt.upper.U);for(const le of Object.values(zt.upper.sides))tt.add(le.up)}}r.updateMatrixWorld(!0);const Mt=[];r.traverse(zt=>{zt instanceof cs&&Mt.push(zt)});for(const zt of Mt){const le=[];let Ie=!1;for(let be=zt.parent,Ae=0;be&&Ae<40;be=be.parent,Ae++)tt.has(be)&&le.push(be),be.userData.agentId&&(Ie=!0);Ie||(r.attach(zt),le.length&&lt.push({l:zt,anc:le,base:zt.intensity}))}}function kt(){for(const tt of lt)tt.anc.every(zt=>zt.visible)?tt.l.intensity===0&&(tt.l.intensity=tt.base):tt.l.intensity=0}const pe=1;r.updateMatrixWorld(!0);const Ee=[];for(const{f:tt,s:Mt}of R){if(Mt<1.3)continue;let zt=tt,le=!1;for(let Ie=0;zt&&Ie<40;Ie++)zt.userData.movesWithWall===!0&&(le=!0),zt=zt.parent;le||Ee.push(tt.getWorldPosition(new G))}function Oe(tt){const Mt=new dn;Mt.setAttribute("position",new Wn(new Float32Array(tt*3),3)),Mt.setAttribute("color",new Wn(new Float32Array(tt*3),3));const zt=new Wr(Mt,new Qr({size:.09,map:v.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ai,toneMapped:!1}));return zt.frustumCulled=!1,zt.visible=!t,r.add(zt),zt}const me=Oe(Math.max(1,Ee.length*7)),Ye=me.geometry.attributes.position.count,de={src:Float32Array.from({length:Ye},(tt,Mt)=>Mt%Math.max(1,Ee.length)),life:Float32Array.from({length:Ye},()=>Math.random()),sd:Float32Array.from({length:Ye},()=>Math.random())},se=240,we=new Wr(new dn,new Qr({size:.07,map:v.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Ai}));we.geometry.setAttribute("position",new Wn(new Float32Array(se*3),3));const Mn=Float32Array.from({length:se*3},()=>Math.random());we.frustumCulled=!1,we.visible=!t,r.add(we);const wn=80,ni=new cn(.16,.1),Tn=new fo(ni,g("#ffffff",{side:Sn}),wn),E=[];for(let tt=0;tt<wn;tt++)Tn.setColorAt(tt,L.set(b([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),E.push({x:T(-30,30),y:T(0,12),z:T(-30,30),r:T(0,6),v:T(.5,.9),w:T(1,3)});Tn.instanceColor&&(Tn.instanceColor.needsUpdate=!0),Tn.frustumCulled=!1,Tn.visible=!t,r.add(Tn);const I=new Ne,V=new bn,Z=new Yi,ut=new G,U=new G(1,1,1);function A(tt,Mt){const zt=me.geometry.attributes.position,le=me.geometry.attributes.color;for(let Ae=0;Ae<zt.count;Ae++){const $t=Ee[de.src[Ae]];if(!$t)break;de.life[Ae]=de.life[Ae]+Mt*(.35+de.sd[Ae]*.4),de.life[Ae]>1&&(de.life[Ae]=de.life[Ae]-1);const Ue=de.life[Ae],Be=de.sd[Ae];zt.setXYZ(Ae,$t.x+Math.sin(tt*(1+Be)+Be*20)*.25*Ue,$t.y+.2+Ue*2.2,$t.z+Math.cos(tt*(.8+Be)+Be*9)*.25*Ue);const Ge=(1-Ue)*(.6+.4*Math.sin(tt*13+Be*30))*2.2;le.setXYZ(Ae,Ge,Ge*.48,Ge*.16)}zt.needsUpdate=!0,le.needsUpdate=!0;const Ie=we.geometry.attributes.position,be=Kt.target;for(let Ae=0;Ae<se;Ae++){const $t=Mn[Ae*3],Ue=Mn[Ae*3+1],Be=Mn[Ae*3+2],Ge=(($t*44+tt*.25*(Ue-.5)-be.x)%44+66)%44-22,ge=((Ue*44+tt*.18*($t-.3)-be.z)%44+66)%44-22;Ie.setXYZ(Ae,be.x+Ge,.6+Be*9+Math.sin(tt*.5+$t*20)*.4,be.z+ge)}Ie.needsUpdate=!0;for(let Ae=0;Ae<wn;Ae++){const $t=E[Ae];$t.y-=Mt*$t.v,$t.y<.05&&($t.y=T(8,13),$t.x=be.x+T(-28,28),$t.z=be.z+T(-28,28)),ut.set($t.x+Math.sin(tt*.9+$t.r)*.9,$t.y,$t.z+Math.cos(tt*.7+$t.r)*.6),Z.set(tt*$t.w+$t.r,tt*.6+$t.r,Math.sin(tt*2+$t.r)*1.2),I.compose(ut,V.setFromEuler(Z),U),Tn.setMatrixAt(Ae,I)}Tn.instanceMatrix.needsUpdate=!0}r.traverse(tt=>{const Mt=tt.material;(tt instanceof Wr||tt instanceof Wi||tt.userData.noLine||Mt&&!Array.isArray(Mt)&&(Mt.blending===Ai||Mt.depthWrite===!1))&&tt.layers.set(pe)});for(const tt of[ne,Tn,Vt])tt.traverse(Mt=>Mt.layers.set(pe));Dt.layers.enable(pe);const ft=new gm({side:Sn}),_=new ei(1,1,{type:ti});_.depthTexture=new Is(1,1),_.depthTexture.type=Di;const P=new ye(.5,.5,1),H=new ye;function Y(){r.overrideMaterial=ft,Dt.layers.disable(pe);const tt=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(H);const Mt=i.getClearAlpha();i.setClearColor(P,1),i.setRenderTarget(_),i.clear(),i.render(r,Dt),i.setRenderTarget(null),i.setClearColor(H,Mt),i.shadowMap.autoUpdate=tt,Dt.layers.enable(pe),r.overrideMaterial=null}const B=new p1(i,new ei(1,1,{type:ti,samples:4}));B.setPixelRatio(i.getPixelRatio()),B.addPass(new g1(r,Dt));const ht="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",At=new Uc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Lt},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:ht,fragmentShader:`#include <packing>
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
    }`});B.addPass(At);const bt=new gr(new Lt(e,n),.42,.55,.88);G1(bt),B.addPass(bt),B.addPass(new m1);const Gt=new Uc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Lt},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:ht,fragmentShader:`#include <packing>
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
    }`});B.addPass(Gt);const Yt=At.uniforms,ce=Gt.uniforms,ae=(tt,Mt)=>tt[Mt];ae(Yt,"tDepth").value=_.depthTexture,ae(ce,"tDepth").value=_.depthTexture;function Zt(tt,Mt){const zt=i.getPixelRatio();i.setSize(tt,Mt),B.setSize(tt,Mt),bt.setSize(tt,Mt),_.setSize(Math.floor(tt*zt),Math.floor(Mt*zt)),ae(Yt,"texel").value.set(1/(tt*zt),1/(Mt*zt)),ae(ce,"texel").value.copy(ae(Yt,"texel").value),ae(Yt,"width").value=Math.max(1,zt*.85),Dt.aspect=tt/Mt,xn()}let De=null,$e=!1,Ce=dd,Se=null;const on=()=>M1(e,n,De)??dd;function he(tt){Ce=tt,tt.x===0&&tt.y===0?Dt.clearViewOffset():Dt.setViewOffset(e,n,tt.x,tt.y,e,n)}function xn(){Se=null,he(on())}for(const tt of[Yt,ce])ae(tt,"near").value=Dt.near,ae(tt,"far").value=Dt.far;Zt(e,n);let Ze=0,Rn="",yn=-1,hi=0,Xn=0,Yn=!1;const Ke=new G,Fe={};let tn={},We=Number.NEGATIVE_INFINITY;const en=24301,ln=new Set(["idle","done"]),_n={};let Dn=null,gi=null,Oi="";function wr(){if(!gi)return;const tt={};for(const zt of ke){const le=ve[zt.id];tt[zt.id]=Qn[le.next??le.walk?.to??le.spot].room}const Mt=ke.map(zt=>tt[zt.id]).join();Mt!==Oi&&(Oi=Mt,gi(tt))}const bi=new G;function Tr(){if(!Dn)return;const tt={};for(const Mt of ke){Mt.root.getWorldPosition(bi),bi.y+=er[Mt.id].H*(_n[Mt.id]?.74:1)+.25,bi.project(Dt);const zt=!!Fe[Mt.id],le=zt?null:Qn[ve[Mt.id].spot].room;tt[Mt.id]={x:bi.x,y:bi.y,z:bi.z,walking:zt,room:le}}Dn(tt)}function Er(tt){yn<0&&(yn=tt);const Mt=(tt-yn)/1e3,zt=Math.min(.05,Mt-hi);hi=Mt;for(const $t of ke){const Ue=er[$t.id].speed;let Be=gd(ve[$t.id],tt,Ue,t);if(Te&&Et&&!Be.walk&&Be.spot===ip[$t.id]&&Za($t.id,Te,Et,qt)===Be.spot){for(const Ji of Te.tasks)Ji.owner===$t.id&&qt.add(Ji.id);const Cn=Za($t.id,Te,Et,qt);Cn&&(Be=Il(Be,Cn,tt,Ue,t,oa[$t.id]))}ve[$t.id]=Be;const Ge=xd(Be,tt);if($t.root.position.x=Ge.x,$t.root.position.z=Ge.z,Ge.walking){const Cn=Ge.heading-$t.root.rotation.y;$t.root.rotation.y+=Math.atan2(Math.sin(Cn),Math.cos(Cn))*Math.min(1,zt*10)}else $t.root.rotation.y=Ge.heading;const ge=jt($t.root.position.x,$t.root.position.z);$t.root.position.y+=(ge-$t.root.position.y)*Math.min(1,zt*12);const qe=_d(Be,tt),In=Qn[Be.spot].pose,Nn=T1({walking:Ge.walking,pose:In,held:qe,needsYou:Te?.agents[$t.id].state==="needs-you",hasRaise:!!$t.model.acts.raise_hand});Qt[$t.id]=A1($t.id,{spot:Be.spot,walking:Ge.walking,held:qe,state:Te?.agents[$t.id].state??null}),Fe[$t.id]=Ge.walking,_n[$t.id]=!Ge.walking&&(Nn==="sit"||Th.has(In)),re.lanternFor($t,Nn,Mt),re.drive($t,Nn,zt,Ge.walking?null:Be.spot,Be.walk?Be.walk.speed/Ue:1);const Qe=rt[$t.id];if(Qe){const Cn=tn[$t.id];Qe.visible=!!Cn&&Cn.act.prop==="mug"&&!Ge.walking&&Be.spot===Cn.act.spot}}if(Te&&tt-We>=250){We=tt;const $t=new Set(Hi.filter(Ge=>ln.has(Te?.agents[Ge].state??"idle"))),Ue={};for(const Ge of Hi){const ge=ve[Ge];Ue[Ge]={spot:ge.spot,to:ge.walk?.to??null,walking:!!Fe[Ge]}}const Be=L1(tn,$t,Ue,tt,{seed:en,reducedMotion:t});tn=Be.runs;for(const[Ge,ge]of Object.entries(Be.to))ve[Ge]=Il(ve[Ge],ge,tt,er[Ge].speed,t,oa[Ge])}const le=!!Qt.frontend&&Te?.agents.frontend.state==="writing",Ie=S1(Ze),be=Ie.heat,Ae=b1(Mt,t);Ie.mouth!==Rn&&(Rn=Ie.mouth,N.emissive.set(Ie.mouth)),N.emissiveIntensity=.9+be*1.4+Ae,st.emissiveIntensity=1.2+be*1.8+Ae,at.intensity=8+be*16+Ae*20;for(const[$t,Ue]of[[q,"frontend"],[it,"backend"]]){const Be=!!Qt[Ue],Ge=$t.screen?.material;Ge&&(Ge.opacity+=((Be?1:.3)-Ge.opacity)*Math.min(1,zt*4)),$t.light&&($t.light.intensity=Be?3.5:0)}if(K(zt),!t){for(const{f:ge,ph:qe}of R){const In=1+Math.sin(Mt*11+qe)*.16+Math.sin(Mt*27+qe*2)*.08;ge.scale.set(1/Math.sqrt(In),In,1/Math.sqrt(In))}for(const ge of z)ge.l.intensity=ge.base*(1+Math.sin(Mt*9+ge.ph)*.12+Math.sin(Mt*23+ge.ph)*.06);j.intensity=11+Math.sin(Mt*7)*1.5;for(const ge of M)ge.o.rotation[ge.axis]+=zt*ge.v,ge.bob&&(ge.o.position.y=(ge.y0??0)+Math.sin(Mt*1.6)*.06);const $t=Math.abs(Math.sin(Mt*5.2+fe.frontend));k.forEach((ge,qe)=>{const In=le&&$t<.25;ge.material.opacity=In?1-$t*4:0,ge.position.set(-.4+qe*.19,.95+qe%2*.12+(In?(.25-$t)*.8:0),qe%2*.08-.29),ge.material.rotation=Mt*3+qe});for(const ge of F){const qe=["frontend","backend"].some(Nn=>{const Qe=tn[Nn];return Qe?.act.prop==="sparks"&&Qe.act.spot===ge.spot&&ve[Nn].spot===ge.spot&&!Fe[Nn]}),In=Math.abs(Math.sin(Mt*.9+ge.ph));ge.sprites.forEach((Nn,Qe)=>{const Cn=qe&&In>.97;Nn.material.opacity=Cn?(In-.97)*33:0,Nn.position.set((Qe-1)*.16,Qe%2*.1+(Cn?(1-In)*6:0),0),Nn.material.rotation=Mt*3+Qe})}q.kb&&(q.kb.position.y=q.kb.userData.y0+(le&&$t<.2?.03:0));const Ue=x.geometry.attributes.position,Be=x.userData.h,Ge=x.userData.seed;for(let ge=0;ge<Ue.count;ge++){const qe=Ge[ge];Be[ge]=Be[ge]+zt*(.5+qe*.7)*(.5+be),Be[ge]>x.userData.top&&(Be[ge]=0),Ue.setXYZ(ge,ot.x+Math.sin(Mt*(.6+qe)+qe*10)*.8*qe,ot.y+Be[ge],ot.z+Math.cos(Mt*.7+qe*7)*.5*qe)}Ue.needsUpdate=!0,x.material.opacity=Math.min(.95,.2+be*.5);for(const ge of It){const qe=ge.p,In=qe.geometry.attributes.position,Nn=qe.userData.h,Qe=qe.userData.seed,Cn=ge.house?ge.house.lift:0;qe.visible=Cn<.5;const Ji=ge.heat?.6+be:.7;for(let $i=0;$i<In.count;$i++){const Ka=Qe[$i];Nn[$i]=Nn[$i]+zt*(.5+Ka*.4)*Ji,Nn[$i]>qe.userData.top&&(Nn[$i]=0);const Us=Nn[$i];In.setXYZ($i,ge.at.x+Math.sin(Us*.8+Ka*6)*Us*.16+Us*.3,ge.at.y+Us,ge.at.z+Math.cos(Us*.6+Ka*4)*Us*.14)}In.needsUpdate=!0}Q.offset.y=(Q.offset.y+zt*1.6)%1,nt.offset.x=(nt.offset.x+zt*.12)%1,ne.rotation.y+=zt*.004,St.forEach((ge,qe)=>{ge.material.opacity=.42+Math.sin(Mt*.8+qe)*.1});for(const ge of gt){const qe=ge.userData;qe.a+=zt*qe.s,ge.position.set(Math.cos(qe.a)*qe.r,qe.y+Math.sin(qe.a*3)*.8,Math.sin(qe.a)*qe.r),ge.rotation.y=-qe.a,ge.children[3].rotation.z=Math.sin(Mt*10+qe.r)*.6,ge.children[4].rotation.z=-Math.sin(Mt*10+qe.r)*.6}w.forEach((ge,qe)=>{ge.rotation.y=Math.sin(Mt*2+qe)*.3}),Xt.position.y=-.4+Math.sin(Mt*.9)*.2,Xt.rotation.x=Math.sin(Mt*.7)*.03;{const ge=ue.userData;ge.a+=zt*.022,ue.position.set(Math.cos(ge.a)*ge.r,ge.y+Math.sin(Mt*.5)*.8,Math.sin(ge.a)*ge.r),ue.rotation.y=Math.atan2(-Math.cos(ge.a),-Math.sin(ge.a))}}if(Pt){const $t=Math.min(1,(performance.now()-Pt.t0)/Pt.dur),Ue=$t<.5?4*$t*$t*$t:1-Math.pow(-2*$t+2,3)/2;Kt.target.lerpVectors(Pt.ft,Pt.tt,Ue),Dt.position.lerpVectors(Pt.fp,Pt.tp,Ue),$t>=1&&(Pt=null)}else if(te){re.actors[te].root.getWorldPosition(Ke),Ke.y+=.8;const $t=Ke.sub(Kt.target).multiplyScalar(t?1:Math.min(1,zt*4));Kt.target.add($t),Dt.position.add($t)}if(Se){const $t=performance.now()-Se.t0;he(fd(Se.from,Se.to,$t,t)),(t||$t>=Oc)&&(Se=null)}kt(),Kt.update(),Ut(),Tr(),wr(),t||A(Mt,zt),Vt.position.copy(Dt.position),ae(ce,"focus").value=Dt.position.distanceTo(Kt.target),ae(ce,"time").value=t?0:Mt,Y(),B.render(),Xn++}return{renderer:i,scene:r,camera:Dt,controls:Kt,housePicks:oe,houses:O,agentPhase:fe,cast:re,groundY:jt,place(tt,Mt){const zt=Qn[Mt];re.actors[tt].root.position.y=jt(zt.x,zt.z),ve[tt]=Xi(Mt,performance.now())},update(tt,Mt){Te=tt,Et=Mt,Ze=np(tt);const zt=performance.now();for(const le of Hi){const Ie=ln.has(tt.agents[le].state)?tn[le]:void 0,be=Ie?Ie.act.spot:Za(le,tt,Et,qt);be&&(ve[le]=Il(ve[le],be,zt,er[le].speed,t,oa[le]))}},land(){const tt=performance.now();for(const Mt of Hi)ve[Mt]=O1(ve[Mt],tt)},restart(){ve=xe(),qt.clear(),tn={}},whereIs(tt){const Mt=performance.now(),zt=gd(ve[tt],Mt,er[tt].speed,t),le=xd(zt,Mt).walking,Ie=le?zt.walk:null;return{spot:zt.spot,to:Ie?.to??null,path:Ie?.path??null,walking:le,held:_d(zt,Mt)}},get frames(){return Xn},start(){Yn=!1,i.setAnimationLoop(tt=>{Yn||Er(tt)})},stop(){Yn=!0,i.setAnimationLoop(null)},resize(tt,Mt){e=tt,n=Mt,Zt(tt,Mt)},flyToRoom:Jt,onHandMove(tt){return Ht=tt,()=>{Ht===tt&&(Ht=null)}},onFrame(tt){return Dn=tt,()=>{Dn===tt&&(Dn=null)}},onRooms(tt){return gi=tt,Oi="",()=>{gi===tt&&(gi=null)}},onPick(tt){return Rt=tt,()=>{Rt===tt&&(Rt=null)}},flyToAgent(tt){te=null;const Mt=Qn[ve[tt].spot];Bt=O[Mt.room]&&!Mt.out?Mt.room:null;const zt=re.actors[tt].root.getWorldPosition(new G);zt.y+=.8;const le=Dt.position.clone().sub(Kt.target);le.lengthSq()<1e-6&&le.set(.45,.85,.9),le.normalize(),le.y=Math.max(le.y,.6),le.normalize(),ee(zt,zt.clone().addScaledVector(le,14))},follow(tt){te=tt,tt&&(Pt=null,Bt=null)},setOpenHouses(tt){D=tt},setFreeArea(tt){De=tt;const Mt=on(),zt=!$e;$e=!0;const le=Se?Se.to:Ce;Mt.x===le.x&&Mt.y===le.y||(Se={from:zt?Mt:Ce,to:Mt,t0:performance.now()},he(fd(Se.from,Mt,0,t)))},setTasks(tt){f.drawBoard(tt)},dispose(){i.setAnimationLoop(null);for(const[tt,Mt]of Nt)i.domElement.removeEventListener(tt,Mt);Ht=null,Rt=null,Dn=null,gi=null,Kt.dispose(),B.dispose(),_.dispose(),i.dispose()}}}export{CS as createWorld};
