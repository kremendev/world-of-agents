import{R as hi,S as fi,r as Uo,f as ed,B as qo,D as uc,F as Vt,a as us,b as Yo,t as Dr,c as vf,i as _r,d as Mf,C as th,e as nh,p as Sa,g as ih,h as yf,W as ba}from"./index-CkdFeWEh.js";const dc="187",Bs={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,sh=1,bf=2,Tr=1,wf=2,xr=3,ss=0,Bn=1,mn=2,ds=0,zs=1,bi=2,rh=3,oh=4,Tf=5,Ns=100,Ef=101,Af=102,Rf=103,Cf=104,Pf=200,Lf=201,Df=202,If=203,td=204,nd=205,Nf=206,Uf=207,Of=208,Ff=209,Bf=210,zf=211,kf=212,Hf=213,Gf=214,fl=0,pl=1,ml=2,Ir=3,gl=4,_l=5,xl=6,vl=7,id=0,Vf=1,Wf=2,Vi=0,fc=1,pc=2,mc=3,ua=4,gc=5,_c=6,xc=7,ah="attached",Xf="detached",sd=300,Vs=301,Nr=302,wa=303,Ta=304,ri=1e3,Xn=1001,Ko=1002,wn=1003,rd=1004,vr=1005,In=1006,Oo=1007,Ti=1008,$n=1009,od=1010,ad=1011,Ur=1012,vc=1013,pi=1014,si=1015,zn=1016,Mc=1017,yc=1018,Ws=1020,ld=35902,cd=35899,hd=1021,ud=1022,ui=1023,rs=1026,ts=1027,da=1028,Sc=1029,fs=1030,bc=1031,wc=1033,Fo=33776,Bo=33777,zo=33778,ko=33779,Ml=35840,yl=35841,Sl=35842,bl=35843,wl=36196,Tl=37492,El=37496,Al=37488,Rl=37489,Zo=37490,Cl=37491,Pl=37808,Ll=37809,Dl=37810,Il=37811,Nl=37812,Ul=37813,Ol=37814,Fl=37815,Bl=37816,zl=37817,kl=37818,Hl=37819,Gl=37820,Vl=37821,Wl=36492,Xl=36494,ql=36495,Yl=36283,Kl=36284,Jo=36285,Zl=36286,qf=2200,Yf=2201,Kf=2202,Or=2300,Fr=2301,Ea=2302,lh=2303,Os=2400,Fs=2401,$o=2402,Tc=2500,Zf=2501,Jf=0,dd=1,Jl=2,$f=3200,Br=0,Qf=1,zi="",bn="srgb",jn="srgb-linear",Qo="linear",on="srgb",Aa=7680,jf=519,ep=512,tp=513,np=514,fd=515,ip=516,sp=517,pd=518,md=519,gd=35044,ch="300 es",di=2e3,zr=2001;function rp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function op(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){const s=kr("canvas");return s.style.display="block",s}const hh={};function jo(...s){const e="THREE."+s.shift();console.log(e,...s)}function _d(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=_d(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ht(...s){s=_d(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ks(...s){const e=s.join(" ");e in hh||(hh[e]=!0,Nt(...s))}function lp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const cp={[fl]:fl,[ml]:xl,[gl]:gl,[Ir]:_l,[pl]:pl,[xl]:ml,[vl]:vl,[_l]:Ir};class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uh=1234567;const Er=Math.PI/180,Xs=180/Math.PI;function mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Ec(s,e){return(s%e+e)%e}function hp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function up(s,e,t){return s!==e?(t-s)/(e-s):0}function Ar(s,e,t){return(1-t)*s+t*e}function dp(s,e,t,n){return Ar(s,e,1-Math.exp(-t*n))}function fp(s,e=1){return e-Math.abs(Ec(s,e*2)-e)}function pp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _p(s,e){return s+Math.random()*(e-s)}function xp(s){return s*(.5-Math.random())}function vp(s){s!==void 0&&(uh=s);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mp(s){return s*Er}function yp(s){return s*Xs}function Sp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function bp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fa(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ac(s,e){if(e.constructor===Float32Array)return s;const t=fa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Rc(s,e){if(e.constructor===Float32Array)return s;const t=fa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const ea={DEG2RAD:Er,RAD2DEG:Xs,generateUUID:mi,clamp:Kt,euclideanModulo:Ec,mapLinear:hp,inverseLerp:up,lerp:Ar,damp:dp,pingpong:fp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:_p,randFloatSpread:xp,seededRandom:vp,degToRad:Mp,radToDeg:yp,isPowerOfTwo:Sp,ceilPowerOfTwo:bp,floorPowerOfTwo:xd,setQuaternionFromProperEuler:wp,normalize:Rc,denormalize:Ac},Zc=class Zc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zc.prototype.isVector2=!0;let Oe=Zc;class gn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*u-c*f,e[t+1]=l*p+h*f+c*d-a*u,e[t+2]=c*p+h*u+a*f-l*d,e[t+3]=h*p-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jc=class Jc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this.z=Kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this.z=Kt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jc.prototype.isVector3=!0;let k=Jc;const Ra=new k,dh=new gn,$c=class $c{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],M=i[1],E=i[4],w=i[7],I=i[2],P=i[5],v=i[8];return r[0]=o*x+a*M+l*I,r[3]=o*m+a*E+l*P,r[6]=o*g+a*w+l*v,r[1]=c*x+h*M+d*I,r[4]=c*m+h*E+d*P,r[7]=c*g+h*w+d*v,r[2]=f*x+u*M+p*I,r[5]=f*m+u*E+p*P,r[8]=f*g+u*w+p*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;let Xt=$c;const Ca=new Xt,fh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tp(){const s={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===on&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===on&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?Qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jn]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:on,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),s}const jt=Tp();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class Ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=kr("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ap=0;class Cc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Pa(i[o].image)):r.push(Pa(i[o]))}else r=Pa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ep.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Rp=0;const La=new k;class An extends qi{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Xn,i=Xn,r=In,o=Ti,a=ui,l=$n,c=An.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=mi(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=sd;An.DEFAULT_ANISOTROPY=1;const Qc=class Qc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,w=(u+1)/2,I=(g+1)/2,P=(h+f)/4,v=(d+x)/4,b=(p+m)/4;return E>w&&E>I?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=v/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=P/i,r=b/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=v/r,i=b/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this.z=Kt(this.z,e.z,t.z),this.w=Kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this.z=Kt(this.z,e,t),this.w=Kt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qc.prototype.isVector4=!0;let un=Qc;class Cp extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new An({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Cc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vd extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pp extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ha=class ha{constructor(e,t,n,i,r,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,f,u,p,x,m)}set(e,t,n,i,r,o,a,l,c,h,d,f,u,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,p=c*h,x=c*d;t[0]=f+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,p=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,u=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-u,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Dp)}lookAt(e,t,n){const i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ki.crossVectors(n,Zn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ki.crossVectors(n,Zn)),Ki.normalize(),Qr.crossVectors(Zn,Ki),i[0]=Ki.x,i[4]=Qr.x,i[8]=Zn.x,i[1]=Ki.y,i[5]=Qr.y,i[9]=Zn.y,i[2]=Ki.z,i[6]=Qr.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],E=n[7],w=n[11],I=n[15],P=i[0],v=i[4],b=i[8],F=i[12],U=i[1],q=i[5],se=i[9],j=i[13],N=i[2],ie=i[6],ae=i[10],Z=i[14],V=i[3],ne=i[7],he=i[11],be=i[15];return r[0]=o*P+a*U+l*N+c*V,r[4]=o*v+a*q+l*ie+c*ne,r[8]=o*b+a*se+l*ae+c*he,r[12]=o*F+a*j+l*Z+c*be,r[1]=h*P+d*U+f*N+u*V,r[5]=h*v+d*q+f*ie+u*ne,r[9]=h*b+d*se+f*ae+u*he,r[13]=h*F+d*j+f*Z+u*be,r[2]=p*P+x*U+m*N+g*V,r[6]=p*v+x*q+m*ie+g*ne,r[10]=p*b+x*se+m*ae+g*he,r[14]=p*F+x*j+m*Z+g*be,r[3]=M*P+E*U+w*N+I*V,r[7]=M*v+E*q+w*ie+I*ne,r[11]=M*b+E*se+w*ae+I*he,r[15]=M*F+E*j+w*Z+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],M=l*u-c*f,E=a*u-c*d,w=a*f-l*d,I=o*u-c*h,P=o*f-l*h,v=o*d-a*h;return t*(x*M-m*E+g*w)-n*(p*M-m*I+g*P)+i*(p*E-x*I+g*v)-r*(p*w-x*P+m*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],M=t*a-n*o,E=t*l-i*o,w=t*c-r*o,I=n*l-i*a,P=n*c-r*a,v=i*c-r*l,b=h*x-d*p,F=h*m-f*p,U=h*g-u*p,q=d*m-f*x,se=d*g-u*x,j=f*g-u*m,N=M*j-E*se+w*q+I*U-P*F+v*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/N;return e[0]=(a*j-l*se+c*q)*ie,e[1]=(i*se-n*j-r*q)*ie,e[2]=(x*v-m*P+g*I)*ie,e[3]=(f*P-d*v-u*I)*ie,e[4]=(l*U-o*j-c*F)*ie,e[5]=(t*j-i*U+r*F)*ie,e[6]=(m*w-p*v-g*E)*ie,e[7]=(h*v-f*w+u*E)*ie,e[8]=(o*se-a*U+c*b)*ie,e[9]=(n*U-t*se-r*b)*ie,e[10]=(p*P-x*w+g*M)*ie,e[11]=(d*w-h*P-u*M)*ie,e[12]=(a*F-o*q-l*b)*ie,e[13]=(t*q-n*F+i*b)*ie,e[14]=(x*E-p*I-m*M)*ie,e[15]=(h*I-d*E+f*M)*ie,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,M=l*c,E=l*h,w=l*d,I=n.x,P=n.y,v=n.z;return i[0]=(1-(x+g))*I,i[1]=(u+w)*I,i[2]=(p-E)*I,i[3]=0,i[4]=(u-w)*P,i[5]=(1-(f+g))*P,i[6]=(m+M)*P,i[7]=0,i[8]=(p+E)*v,i[9]=(m-M)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_s.set(i[0],i[1],i[2]).length();const a=_s.set(i[4],i[5],i[6]).length(),l=_s.set(i[8],i[9],i[10]).length();r<0&&(o=-o),oi.copy(this);const c=1/o,h=1/a,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=di,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===di)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=di,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===di)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===zr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ha.prototype.isMatrix4=!0;let kt=ha;const _s=new k,oi=new kt,Lp=new k(0,0,0),Dp=new k(1,1,1),Ki=new k,Qr=new k,Zn=new k,mh=new kt,gh=new gn;class Ai{constructor(e=0,t=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ip=0;const _h=new k,xs=new gn,Li=new kt,jr=new k,ir=new k,Np=new k,Up=new gn,xh=new k(1,0,0),vh=new k(0,1,0),Mh=new k(0,0,1),yh={type:"added"},Op={type:"removed"},vs={type:"childadded",child:null},Da={type:"childremoved",child:null};class pn extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new k,t=new Ai,n=new gn,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Xt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ir,jr,this.up):Li.lookAt(jr,ir,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Li),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Op),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pn.DEFAULT_UP=new k(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ae extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=jt.workingColorSpace){if(e=Ec(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(e,t=bn){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return jt.workingToColorSpace(On.copy(this),e),Math.round(Kt(On.r*255,0,255))*65536+Math.round(Kt(On.g*255,0,255))*256+Math.round(Kt(On.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(On.copy(this),t);const n=On.r,i=On.g,r=On.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=bn){jt.workingToColorSpace(On.copy(this),e);const t=On.r,n=On.g,i=On.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(eo);const n=Ar(Zi.h,eo.h,t),i=Ar(Zi.s,eo.s,t),r=Ar(Zi.l,eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new At;At.NAMES=Md;class Lc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=t,this.far=n}clone(){return new Lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bp extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ai=new k,Di=new k,Ua=new k,Ii=new k,Ms=new k,ys=new k,Sh=new k,Oa=new k,Fa=new k,Ba=new k,za=new un,ka=new un,Ha=new un;class ii{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ai.subVectors(i,t),Di.subVectors(n,t),Ua.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Di),l=ai.dot(Ua),c=Di.dot(Di),h=Di.dot(Ua),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return za.setScalar(0),ka.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),Di.subVectors(e,t),ai.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ai.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ms.subVectors(i,n),ys.subVectors(r,n),Oa.subVectors(e,n);const l=Ms.dot(Oa),c=ys.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Fa.subVectors(e,i);const h=Ms.dot(Fa),d=ys.dot(Fa);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ms,o);Ba.subVectors(e,r);const u=Ms.dot(Ba),p=ys.dot(Ba);if(p>=0&&u<=p)return t.copy(r);const x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ys,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Sh.subVectors(r,i),a=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(Sh,a);const g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(Ms,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ri{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),no.subVectors(this.max,sr),Ss.subVectors(e.a,sr),bs.subVectors(e.b,sr),ws.subVectors(e.c,sr),Ji.subVectors(bs,Ss),$i.subVectors(ws,bs),os.subVectors(Ss,ws);let t=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-os.z,os.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,os.z,0,-os.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-os.y,os.x,0];return!Ga(t,Ss,bs,ws,no)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Ss,bs,ws,no))?!1:(io.crossVectors(Ji,$i),t=[io.x,io.y,io.z],Ga(t,Ss,bs,ws,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new k,new k,new k,new k,new k,new k,new k,new k],li=new k,to=new Ri,Ss=new k,bs=new k,ws=new k,Ji=new k,$i=new k,os=new k,sr=new k,no=new k,io=new k,as=new k;function Ga(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){as.fromArray(s,r);const a=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sn=new k,so=new Oe;let zp=0;class Dn extends qi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gd,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?fa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ac(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rc(e,this.array)}}class yd extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sd extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kp=new Ri,rr=new k,Va=new k;class Ci{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Va)),this.expandByPoint(rr.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hp=0;const ei=new kt,Wa=new pn,Ts=new k,Jn=new Ri,or=new Ri,Ln=new k;class ln extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?Sd:yd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(Jn.min,or.min),Jn.expandByPoint(Ln),Ln.addVectors(Jn.max,or.max),Jn.expandByPoint(Ln)):(Jn.expandByPoint(or.min),Jn.expandByPoint(or.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ln.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ln));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ln.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Ln.add(Ts)),i=Math.max(i,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)a[F]=new k,l[F]=new k;const h=new k,d=new k,f=new k,u=new Oe,p=new Oe,x=new Oe,m=new k,g=new k;function M(F,U,q){c[F]=c[U]=c[q]=1,h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,q),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,U),x.fromBufferAttribute(r,q),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const se=1/(p.x*x.y-x.x*p.y);isFinite(se)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(se),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(se),a[F].add(m),a[U].add(m),a[q].add(m),l[F].add(g),l[U].add(g),l[q].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,U=E.length;F<U;++F){const q=E[F],se=q.start,j=q.count;for(let N=se,ie=se+j;N<ie;N+=3)M(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new k,I=new k,P=new k,v=new k;function b(F){P.fromBufferAttribute(i,F),v.copy(P);const U=a[F];w.copy(U),w.sub(P.multiplyScalar(P.dot(U))).normalize(),I.crossVectors(v,U);const se=I.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,se)}for(let F=0,U=n.count;F<U;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,u=e.count;f<u;f+=3){const p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Dn(f,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gd,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=bh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=bh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function bh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=mi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Gn=new k;class Hr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?fa(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ac(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rc(e,this.data.array)}}const Xa=new k,Gp=new k,Vp=new Xt;class Bi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xa.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vp.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wp=0;class Qn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=zs,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Nt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class is extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const ar=new k,As=new k,Rs=new k,Cs=new Oe,lr=new Oe,wd=new kt,ro=new k,cr=new k,oo=new k,wh=new Oe,qa=new Oe,Th=new Oe;class Xi extends pn{constructor(e=new is){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bd(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Hr(n,3,0,!1)),Es.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ao(ro.set(-.5,-.5,0),Rs,o,As,i,r),ao(cr.set(.5,-.5,0),Rs,o,As,i,r),ao(oo.set(.5,.5,0),Rs,o,As,i,r),wh.set(0,0),qa.set(1,0),Th.set(1,1);let a=e.ray.intersectTriangle(ro,cr,oo,!1,ar);if(a===null&&(ao(cr.set(-.5,.5,0),Rs,o,As,i,r),qa.set(0,1),a=e.ray.intersectTriangle(ro,oo,cr,!1,ar),a===null))return;const l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:ii.getInterpolation(ar,ro,cr,oo,wh,qa,Th,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ao(s,e,t,n,i,r){Cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(lr.x=r*Cs.x-i*Cs.y,lr.y=i*Cs.x+r*Cs.y):lr.copy(Cs),s.copy(e),s.x+=lr.x,s.y+=lr.y,s.applyMatrix4(wd)}const Ui=new k,Ya=new k,lo=new k,co=new k;class Js{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ya.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),co.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lo),a=co.dot(this.direction),l=-co.dot(lo),c=co.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ya).addScaledVector(lo,f),u}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,E=n.z-o.z,w=Math.abs(l),I=Math.abs(c),P=Math.abs(h);let v,b,F,U,q,se,j,N,ie,ae,Z,V;if(w>=I&&w>=P?(F=l,se=d,ie=p,V=g,l>=0?(v=c,b=h,U=f,q=u,j=x,N=m,ae=M,Z=E):(v=h,b=c,U=u,q=f,j=m,N=x,ae=E,Z=M)):I>=P?(F=c,se=f,ie=x,V=M,c>=0?(v=h,b=l,U=u,q=d,j=m,N=p,ae=E,Z=g):(v=l,b=h,U=d,q=u,j=p,N=m,ae=g,Z=E)):(F=h,se=u,ie=m,V=E,h>=0?(v=l,b=c,U=d,q=f,j=p,N=x,ae=g,Z=M):(v=c,b=l,U=f,q=d,j=x,N=p,ae=M,Z=g)),F===0)return null;const ne=v/F,he=b/F,be=1/F,Je=U-ne*se,ut=q-he*se,fe=j-ne*ie,Ke=N-he*ie,at=ae-ne*V,gt=Z-he*V,Qe=at*Ke-gt*fe,xt=Je*gt-ut*at,qt=fe*ut-Ke*Je;if(i){if(Qe<0||xt<0||qt<0)return null}else if((Qe<0||xt<0||qt<0)&&(Qe>0||xt>0||qt>0))return null;const pt=Qe+xt+qt;if(pt===0)return null;const Rt=be*(Qe*se+xt*ie+qt*V);return(pt>0?Rt<0:Rt>0)?null:this.at(Rt/pt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nn extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Eh=new kt,ls=new Js,ho=new Ci,Ah=new k,uo=new k,fo=new k,po=new k,Ka=new k,mo=new k,Rh=new k,go=new k;class Wt extends pn{constructor(e=new ln,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ka.fromBufferAttribute(d,e),o?mo.addScaledVector(Ka,h):mo.addScaledVector(Ka.sub(t),h))}t.add(mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(ho.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ho,Ah)===null||ls.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,I=E;w<I;w+=3){const P=a.getX(w),v=a.getX(w+1),b=a.getX(w+2);i=_o(this,g,e,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);i=_o(this,o,e,n,c,h,d,M,E,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,I=E;w<I;w+=3){const P=w,v=w+1,b=w+2;i=_o(this,g,e,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=m,E=m+1,w=m+2;i=_o(this,o,e,n,c,h,d,M,E,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Xp(s,e,t,n,i,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ss,a),l===null)return null;go.copy(a),go.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:s}}function _o(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,uo),s.getVertexPosition(l,fo),s.getVertexPosition(c,po);const h=Xp(s,e,t,n,uo,fo,po,Rh);if(h){const d=new k;ii.getBarycoord(Rh,uo,fo,po,d),i&&(h.uv=ii.getInterpolatedAttribute(i,a,l,c,d,new Oe)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,l,c,d,new Oe)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};ii.getNormal(uo,fo,po,f.normal),h.face=f,h.barycoord=d}return h}const hr=new un,Ch=new un,Ph=new un,qp=new un,Lh=new kt,xo=new k,Za=new Ci,Dh=new kt,Ja=new Js;class Yp extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ah,this.bindMatrix=new kt,this.bindMatrixInverse=new kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(i),e.ray.intersectsSphere(Za)!==!1&&(Dh.copy(i).invert(),Ja.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&Ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ja)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new un,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ch.fromBufferAttribute(i.attributes.skinIndex,e),Ph.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(hr.copy(t),t.set(0,0,0,0)):(hr.set(t.x,t.y,t.z,1),t.set(0,0,0)),hr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Ph.getComponent(r);if(o!==0){const a=Ch.getComponent(r);Lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qp.copy(hr).applyMatrix4(Lh),o)}}return t.isVector4&&(t.w=hr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Td extends pn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pa extends An{constructor(e=null,t=1,n=1,i,r,o,a,l,c=wn,h=wn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new kt,Kp=new kt;class Dc{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new kt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new kt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Kp;Ih.multiplyMatrices(a,t[r]),Ih.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pa(t,e,e,ui,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Nt("Skeleton: No bone found with UUID:",r),o=new Td),this.bones.push(o),this.boneInverses.push(new kt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ta extends Dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new kt,Nh=new kt,vo=[],Uh=new Ri,Zp=new kt,ur=new Wt,dr=new Ci;class Gr extends Wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Uh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),dr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),Nh.multiplyMatrices(n,Ps),ur.matrixWorld=Nh,ur.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){const l=vo[o];l.instanceId=r,l.object=this,t.push(l)}vo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pa(new Float32Array(i*this.count),i,this.count,da,si));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cs=new Ci,Jp=new Oe(.5,.5),Mo=new k;class Vr{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],E=r[13],w=r[14],I=r[15];if(i[0].setComponents(c-o,u-h,g-p,I-M).normalize(),i[1].setComponents(c+o,u+h,g+p,I+M).normalize(),i[2].setComponents(c+a,u+d,g+x,I+E).normalize(),i[3].setComponents(c-a,u-d,g-x,I-E).normalize(),n)i[4].setComponents(l,f,m,w).normalize(),i[5].setComponents(c-l,u-f,g-m,I-w).normalize();else if(i[4].setComponents(c-l,u-f,g-m,I-w).normalize(),t===di)i[5].setComponents(c+l,u+f,g+m,I+w).normalize();else if(t===zr)i[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=Jp.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mo.x=i.normal.x>0?e.max.x:e.min.x,Mo.y=i.normal.y>0?e.max.y:e.min.y,Mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Oh=new kt;class Ic{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];Oh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Vr),n[i].setFromProjectionMatrix(Oh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Vr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Ic().copy(this)}}class Ed extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new k,ia=new k,Fh=new kt,fr=new Js,yo=new Ci,$a=new k,Bh=new k;class Nc extends pn{constructor(e=new ln,t=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)na.fromBufferAttribute(t,i-1),ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);e.setAttribute("lineDistance",new zt(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Fh.copy(i).invert(),fr.copy(e.ray).applyMatrix4(Fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=h.getX(x),M=h.getX(x+1),E=So(this,e,fr,l,g,M,x);E&&t.push(E)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(u),g=So(this,e,fr,l,x,m,p-1);g&&t.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=So(this,e,fr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=So(this,e,fr,l,p-1,u,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function So(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(na.fromBufferAttribute(a,i),ia.fromBufferAttribute(a,r),t.distanceSqToSegment(na,ia,$a,Bh)>n)return;$a.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo($a);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const zh=new k,kh=new k;class $p extends Nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zh.distanceTo(kh);e.setAttribute("lineDistance",new zt(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qp extends Nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rr extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new kt,$l=new Js,bo=new Ci,wo=new k;class Mr extends pn{constructor(e=new ln,t=new Rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(i),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;Hh.copy(i).invert(),$l.copy(e.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){const m=c.getX(p);wo.fromBufferAttribute(d,m),Gh(wo,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)wo.fromBufferAttribute(d,p),Gh(wo,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(s,e,t,n,i,r,o){const a=$l.distanceSqToPoint(s);if(a<t){const l=new k;$l.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ad extends An{constructor(e=[],t=Vs,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ql extends An{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends An{constructor(e,t,n=pi,i,r,o,a=wn,l=wn,c,h=rs,d=1){if(h!==rs&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rd extends ps{constructor(e,t=pi,n=Vs,i,r,o=wn,a=wn,l,c=rs){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cd extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Le extends ln{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function p(x,m,g,M,E,w,I,P,v,b,F){const U=w/v,q=I/b,se=w/2,j=I/2,N=P/2,ie=v+1,ae=b+1;let Z=0,V=0;const ne=new k;for(let he=0;he<ae;he++){const be=he*q-j;for(let Je=0;Je<ie;Je++){const ut=Je*U-se;ne[x]=ut*M,ne[m]=be*E,ne[g]=N,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[g]=P>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Je/v),d.push(1-he/b),Z+=1}}for(let he=0;he<b;he++)for(let be=0;be<v;be++){const Je=f+be+ie*he,ut=f+be+ie*(he+1),fe=f+(be+1)+ie*(he+1),Ke=f+(be+1)+ie*he;l.push(Je,ut,Ke),l.push(ut,fe,Ke),V+=6}a.addGroup(u,V,F),u+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sa extends ln{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,x=i+1,m=new k,g=new k;for(let M=0;M<=p;M++){let E=0,w=0,I=0,P=0;if(M<=n){const F=M/n,U=F*Math.PI/2;w=-h-e*Math.cos(U),I=e*Math.sin(U),P=-e*Math.cos(U),E=F*d}else if(M<=n+r){const F=(M-n)/r;w=-h+F*t,I=e,P=0,E=d+F*f}else{const F=(M-n-r)/n,U=F*Math.PI/2;w=h+e*Math.sin(U),I=e*Math.cos(U),P=e*Math.sin(U),E=d+f+F*d}const v=Math.max(0,Math.min(1,E/u));let b=0;M===0?b=.5/i:M===p&&(b=-.5/i);for(let F=0;F<=i;F++){const U=F/i,q=U*Math.PI*2,se=Math.sin(q),j=Math.cos(q);g.x=-I*j,g.y=w,g.z=I*se,a.push(g.x,g.y,g.z),m.set(-I*j,P,I*se),m.normalize(),l.push(m.x,m.y,m.z),c.push(U+b,v)}if(M>0){const F=(M-1)*x;for(let U=0;U<i;U++){const q=F+U,se=F+U+1,j=M*x+U,N=M*x+U+1;o.push(q,se,j),o.push(se,N,j)}}}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ci extends ln{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new k,h=new Oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rt extends ln{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(u,2));function M(){const w=new k,I=new k;let P=0;const v=(t-e)/n;for(let b=0;b<=r;b++){const F=[],U=b/r,q=U*(t-e)+e;for(let se=0;se<=i;se++){const j=se/i,N=j*l+a,ie=Math.sin(N),ae=Math.cos(N);I.x=q*ie,I.y=-U*n+m,I.z=q*ae,d.push(I.x,I.y,I.z),w.set(ie,v,ae).normalize(),f.push(w.x,w.y,w.z),u.push(j,1-U),F.push(p++)}x.push(F)}for(let b=0;b<i;b++)for(let F=0;F<r;F++){const U=x[F][b],q=x[F+1][b],se=x[F+1][b+1],j=x[F][b+1];(e>0||F!==0)&&(h.push(U,q,j),P+=3),(t>0||F!==r-1)&&(h.push(q,se,j),P+=3)}c.addGroup(g,P,0),g+=P}function E(w){const I=p,P=new Oe,v=new k;let b=0;const F=w===!0?e:t,U=w===!0?1:-1;for(let se=1;se<=i;se++)d.push(0,m*U,0),f.push(0,U,0),u.push(.5,.5),p++;const q=p;for(let se=0;se<=i;se++){const N=se/i*l+a,ie=Math.cos(N),ae=Math.sin(N);v.x=F*ae,v.y=m*U,v.z=F*ie,d.push(v.x,v.y,v.z),f.push(0,U,0),P.x=ie*.5+.5,P.y=ae*.5*U+.5,u.push(P.x,P.y),p++}for(let se=0;se<i;se++){const j=I+se,N=q+se;w===!0?h.push(N,N+1,j):h.push(N+1,N,j),b+=3}c.addGroup(g,b,w===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mn extends rt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends ln{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new k,w=new k,I=new k;for(let P=0;P<t.length;P+=3)u(t[P+0],E),u(t[P+1],w),u(t[P+2],I),l(E,w,I,M)}function l(M,E,w,I){const P=I+1,v=[];for(let b=0;b<=P;b++){v[b]=[];const F=M.clone().lerp(w,b/P),U=E.clone().lerp(w,b/P),q=P-b;for(let se=0;se<=q;se++)se===0&&b===P?v[b][se]=F:v[b][se]=F.clone().lerp(U,se/q)}for(let b=0;b<P;b++)for(let F=0;F<2*(P-b)-1;F++){const U=Math.floor(F/2);F%2===0?(f(v[b][U+1]),f(v[b+1][U]),f(v[b][U])):(f(v[b][U+1]),f(v[b+1][U+1]),f(v[b+1][U]))}}function c(M){const E=new k;for(let w=0;w<r.length;w+=3)E.x=r[w+0],E.y=r[w+1],E.z=r[w+2],E.normalize().multiplyScalar(M),r[w+0]=E.x,r[w+1]=E.y,r[w+2]=E.z}function h(){const M=new k;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const w=m(M)/2/Math.PI+.5,I=g(M)/Math.PI+.5;o.push(w,1-I)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){const E=o[M+0],w=o[M+2],I=o[M+4],P=Math.max(E,w,I),v=Math.min(E,w,I);P>.9&&v<.1&&(E<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,E){const w=M*3;E.x=e[w+0],E.y=e[w+1],E.z=e[w+2]}function p(){const M=new k,E=new k,w=new k,I=new k,P=new Oe,v=new Oe,b=new Oe;for(let F=0,U=0;F<r.length;F+=9,U+=6){M.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),w.set(r[F+6],r[F+7],r[F+8]),P.set(o[U+0],o[U+1]),v.set(o[U+2],o[U+3]),b.set(o[U+4],o[U+5]),I.copy(M).add(E).add(w).divideScalar(3);const q=m(I);x(P,U+0,M,q),x(v,U+2,E,q),x(b,U+4,w,q)}}function x(M,E,w,I){I<0&&M.x===1&&(o[E]=M.x-1),w.x===0&&w.z===0&&(o[E]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.vertices,e.indices,e.radius,e.detail)}}class wi extends ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wi(e.radius,e.detail)}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Oe:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new k,i=[],r=[],o=[],a=new k,l=new kt;for(let u=0;u<=e;u++){const p=u/e;i[u]=this.getTangentAt(p,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Kt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(Kt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Uc extends Pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jp extends Uc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Vh=new k,Wh=new k,Qa=new Oc,ja=new Oc,el=new Oc;class e0 extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Wh.subVectors(i[0],i[1]).add(i[0]),c=Wh);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Vh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Vh),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Qa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),ja.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),el.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ja.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),el.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Qa.calc(l),ja.calc(l),el.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function t0(s,e){const t=1-s;return t*t*e}function n0(s,e){return 2*(1-s)*s*e}function i0(s,e){return s*s*e}function Cr(s,e,t,n){return t0(s,e)+n0(s,t)+i0(s,n)}function s0(s,e){const t=1-s;return t*t*t*e}function r0(s,e){const t=1-s;return 3*t*t*s*e}function o0(s,e){return 3*(1-s)*s*s*e}function a0(s,e){return s*s*s*e}function Pr(s,e,t,n,i){return s0(s,e)+r0(s,t)+o0(s,n)+a0(s,i)}class Pd extends Pi{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(e,i.x,r.x,o.x,a.x),Pr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l0 extends Pi{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(e,i.x,r.x,o.x,a.x),Pr(e,i.y,r.y,o.y,a.y),Pr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ld extends Pi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c0 extends Pi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends Pi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h0 extends Pi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y),Cr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Xh(a,l.x,c.x,h.x,d.x),Xh(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:jp,CatmullRomCurve3:e0,CubicBezierCurve:Pd,CubicBezierCurve3:l0,EllipseCurve:Uc,LineCurve:Ld,LineCurve3:c0,QuadraticBezierCurve:Dd,QuadraticBezierCurve3:h0,SplineCurve:Id});class u0 extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new jl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class qh extends u0{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ld(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Dd(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Pd(this.currentPoint.clone(),new Oe(e,t),new Oe(n,i),new Oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Id(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Uc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wr extends qh{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new qh().fromJSON(i))}return this}}function d0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Nd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=_0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,d=l;for(let f=t;f<i;f+=t){const u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Xr(r,o,t,a,l,c,0),o}function Nd(s,e,t,n,i){let r;if(i===R0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Yh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Yh(o/n|0,s[o],s[o+1],r);return r&&qs(r,r.next)&&(Yr(r),r=r.next),r}function ms(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(qs(t,t.next)||_n(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&S0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?p0(s,n,i,r):f0(s)){e.push(l.i,s.i,c.i),Yr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=m0(ms(s),e),Xr(s,e,t,n,i,r,2)):o===2&&g0(s,e,t,n,i,r):Xr(ms(s),e,t,n,i,r,1);break}}}function f0(s){const e=s.prev,t=s,n=s.next;if(_n(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&yr(i,a,r,l,o,c,p.x,p.y)&&_n(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function p0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(_n(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=ec(u,p,e,t,n),M=ec(x,m,e,t,n);let E=s.prevZ,w=s.nextZ;for(;E&&E.z>=g&&w&&w.z<=M;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&yr(a,h,l,d,c,f,E.x,E.y)&&_n(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&yr(a,h,l,d,c,f,w.x,w.y)&&_n(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=g;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&yr(a,h,l,d,c,f,E.x,E.y)&&_n(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=M;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&yr(a,h,l,d,c,f,w.x,w.y)&&_n(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function m0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!qs(n,i)&&Od(n,t,t.next,i)&&qr(n,i)&&qr(i,n)&&(e.push(n.i,t.i,i.i),Yr(t),Yr(t.next),t=s=i),t=t.next}while(t!==s);return ms(t)}function g0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T0(o,a)){let l=Fd(o,a);o=ms(o,o.next),l=ms(l,l.next),Xr(o,e,t,n,i,r,0),Xr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function _0(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Nd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(w0(c))}i.sort(x0);for(let r=0;r<i.length;r++)t=v0(i[r],t);return t}function x0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function v0(s,e){const t=M0(s,e);if(!t)return e;const n=Fd(t,s);return ms(n,n.next),ms(t,t.next)}function M0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(qs(s,t))return t;do{if(qs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ud(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);qr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&y0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function y0(s,e){return _n(s.prev,s,e.prev)<0&&_n(e.next,s,s.next)<0}function S0(s,e,t,n){let i=s;do i.z===0&&(i.z=ec(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,b0(i)}function b0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ec(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function w0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ud(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function yr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Ud(s,e,t,n,i,r,o,a)}function T0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!E0(s,e)&&(qr(s,e)&&qr(e,s)&&A0(s,e)&&(_n(s.prev,s,e.prev)||_n(s,e.prev,e))||qs(s,e)&&_n(s.prev,s,s.next)>0&&_n(e.prev,e,e.next)>0)}function _n(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function qs(s,e){return s.x===e.x&&s.y===e.y}function Od(s,e,t,n){const i=Eo(_n(s,e,t)),r=Eo(_n(s,e,n)),o=Eo(_n(t,n,s)),a=Eo(_n(t,n,e));return!!(i!==r&&o!==a||i===0&&To(s,t,e)||r===0&&To(s,n,e)||o===0&&To(t,s,n)||a===0&&To(t,e,n))}function To(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Eo(s){return s>0?1:s<0?-1:0}function E0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function qr(s,e){return _n(s.prev,s,s.next)<0?_n(s,e,s.next)>=0&&_n(s,s.prev,e)>=0:_n(s,e,s.prev)<0||_n(s,s.next,e)<0}function A0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Fd(s,e){const t=tc(s.i,s.x,s.y),n=tc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yh(s,e,t,n){const i=tc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function tc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class C0{static triangulate(e,t,n=2){return d0(e,t,n)}}class ki{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ki.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Kh(e),Zh(n,e);let o=e.length;t.forEach(Kh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Zh(n,t[l]);const a=C0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Kh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Zh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ra extends ln{constructor(e=new Wr([new Oe(.5,.5),new Oe(-.5,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new zt(i,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:P0;let E,w=!1,I,P,v,b;if(g){E=g.getSpacedPoints(h),w=!0,f=!1;const Re=g.isCatmullRomCurve3?g.closed:!1;I=g.computeFrenetFrames(h,Re),P=new k,v=new k,b=new k}f||(m=0,u=0,p=0,x=0);const F=a.extractPoints(c);let U=F.shape;const q=F.holes;if(!ki.isClockWise(U)){U=U.reverse();for(let Re=0,qe=q.length;Re<qe;Re++){const it=q[Re];ki.isClockWise(it)&&(q[Re]=it.reverse())}}function j(Re){const it=10000000000000001e-36;let lt=Re[0];for(let st=1;st<=Re.length;st++){const ct=st%Re.length,dt=Re[ct],ye=dt.x-lt.x,ke=dt.y-lt.y,ze=ye*ye+ke*ke,L=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(lt.x),Math.abs(lt.y)),tt=it*L*L;if(ze<=tt){Re.splice(ct,1),st--;continue}lt=dt}}j(U),q.forEach(j);const N=q.length,ie=U;for(let Re=0;Re<N;Re++){const qe=q[Re];U=U.concat(qe)}function ae(Re,qe,it){return qe||Ht("ExtrudeGeometry: vec does not exist"),Re.clone().addScaledVector(qe,it)}const Z=U.length;function V(Re,qe,it){let lt,st,ct;const dt=Re.x-qe.x,ye=Re.y-qe.y,ke=it.x-Re.x,ze=it.y-Re.y,L=dt*dt+ye*ye,tt=dt*ze-ye*ke;if(Math.abs(tt)>Number.EPSILON){const je=Math.sqrt(L),Ye=Math.sqrt(ke*ke+ze*ze),Ce=qe.x-ye/je,nt=qe.y+dt/je,Se=it.x-ze/Ye,le=it.y+ke/Ye,C=((Se-Ce)*ze-(le-nt)*ke)/(dt*ze-ye*ke);lt=Ce+dt*C-Re.x,st=nt+ye*C-Re.y;const S=lt*lt+st*st;if(S<=2)return new Oe(lt,st);ct=Math.sqrt(S/2)}else{let je=!1;dt>Number.EPSILON?ke>Number.EPSILON&&(je=!0):dt<-Number.EPSILON?ke<-Number.EPSILON&&(je=!0):Math.sign(ye)===Math.sign(ze)&&(je=!0),je?(lt=-ye,st=dt,ct=Math.sqrt(L)):(lt=dt,st=ye,ct=Math.sqrt(L/2))}return new Oe(lt/ct,st/ct)}const ne=[];for(let Re=0,qe=ie.length,it=qe-1,lt=Re+1;Re<qe;Re++,it++,lt++)it===qe&&(it=0),lt===qe&&(lt=0),ne[Re]=V(ie[Re],ie[it],ie[lt]);const he=[];let be,Je=ne.concat();for(let Re=0,qe=N;Re<qe;Re++){const it=q[Re];be=[];for(let lt=0,st=it.length,ct=st-1,dt=lt+1;lt<st;lt++,ct++,dt++)ct===st&&(ct=0),dt===st&&(dt=0),be[lt]=V(it[lt],it[ct],it[dt]);he.push(be),Je=Je.concat(be)}let ut;if(m===0)ut=ki.triangulateShape(ie,q);else{const Re=[],qe=[];for(let it=0;it<m;it++){const lt=it/m,st=u*Math.cos(lt*Math.PI/2),ct=p*Math.sin(lt*Math.PI/2)+x;for(let dt=0,ye=ie.length;dt<ye;dt++){const ke=ae(ie[dt],ne[dt],ct);xt(ke.x,ke.y,-st),lt===0&&Re.push(ke)}for(let dt=0,ye=N;dt<ye;dt++){const ke=q[dt];be=he[dt];const ze=[];for(let L=0,tt=ke.length;L<tt;L++){const je=ae(ke[L],be[L],ct);xt(je.x,je.y,-st),lt===0&&ze.push(je)}lt===0&&qe.push(ze)}}ut=ki.triangulateShape(Re,qe)}const fe=ut.length,Ke=p+x;for(let Re=0;Re<Z;Re++){const qe=f?ae(U[Re],Je[Re],Ke):U[Re];w?(v.copy(I.normals[0]).multiplyScalar(qe.x),P.copy(I.binormals[0]).multiplyScalar(qe.y),b.copy(E[0]).add(v).add(P),xt(b.x,b.y,b.z)):xt(qe.x,qe.y,0)}for(let Re=1;Re<=h;Re++)for(let qe=0;qe<Z;qe++){const it=f?ae(U[qe],Je[qe],Ke):U[qe];w?(v.copy(I.normals[Re]).multiplyScalar(it.x),P.copy(I.binormals[Re]).multiplyScalar(it.y),b.copy(E[Re]).add(v).add(P),xt(b.x,b.y,b.z)):xt(it.x,it.y,d/h*Re)}for(let Re=m-1;Re>=0;Re--){const qe=Re/m,it=u*Math.cos(qe*Math.PI/2),lt=p*Math.sin(qe*Math.PI/2)+x;for(let st=0,ct=ie.length;st<ct;st++){const dt=ae(ie[st],ne[st],lt);xt(dt.x,dt.y,d+it)}for(let st=0,ct=q.length;st<ct;st++){const dt=q[st];be=he[st];for(let ye=0,ke=dt.length;ye<ke;ye++){const ze=ae(dt[ye],be[ye],lt);w?xt(ze.x,ze.y+E[h-1].y,E[h-1].x+it):xt(ze.x,ze.y,d+it)}}}at(),gt();function at(){const Re=i.length/3;if(f){let qe=0,it=Z*qe;for(let lt=0;lt<fe;lt++){const st=ut[lt];qt(st[2]+it,st[1]+it,st[0]+it)}qe=h+m*2,it=Z*qe;for(let lt=0;lt<fe;lt++){const st=ut[lt];qt(st[0]+it,st[1]+it,st[2]+it)}}else{for(let qe=0;qe<fe;qe++){const it=ut[qe];qt(it[2],it[1],it[0])}for(let qe=0;qe<fe;qe++){const it=ut[qe];qt(it[0]+Z*h,it[1]+Z*h,it[2]+Z*h)}}n.addGroup(Re,i.length/3-Re,0)}function gt(){const Re=i.length/3;let qe=0;Qe(ie,qe),qe+=ie.length;for(let it=0,lt=q.length;it<lt;it++){const st=q[it];Qe(st,qe),qe+=st.length}n.addGroup(Re,i.length/3-Re,1)}function Qe(Re,qe){let it=Re.length;for(;--it>=0;){const lt=it;let st=it-1;st<0&&(st=Re.length-1);for(let ct=0,dt=h+m*2;ct<dt;ct++){const ye=Z*ct,ke=Z*(ct+1),ze=qe+lt+ye,L=qe+st+ye,tt=qe+st+ke,je=qe+lt+ke;pt(ze,L,tt,je)}}}function xt(Re,qe,it){l.push(Re),l.push(qe),l.push(it)}function qt(Re,qe,it){Rt(Re),Rt(qe),Rt(it);const lt=i.length/3,st=M.generateTopUV(n,i,lt-3,lt-2,lt-1);Pt(st[0]),Pt(st[1]),Pt(st[2])}function pt(Re,qe,it,lt){Rt(Re),Rt(qe),Rt(lt),Rt(qe),Rt(it),Rt(lt);const st=i.length/3,ct=M.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);Pt(ct[0]),Pt(ct[1]),Pt(ct[3]),Pt(ct[1]),Pt(ct[2]),Pt(ct[3])}function Rt(Re){i.push(l[Re*3+0]),i.push(l[Re*3+1]),i.push(l[Re*3+2])}function Pt(Re){r.push(Re.x),r.push(Re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return L0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new jl[i.type]().fromJSON(i)),new ra(n,e.options)}}const P0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Oe(r,o),new Oe(a,l),new Oe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Oe(o,1-l),new Oe(c,1-d),new Oe(f,1-p),new Oe(x,1-g)]:[new Oe(a,1-l),new Oe(h,1-d),new Oe(u,1-p),new Oe(m,1-g)]}};function L0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fc extends ln{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,d=new k,f=new Oe,u=new k,p=new k,x=new k;let m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let M=0;M<=t;M++){const E=n+M*h*i,w=Math.sin(E),I=Math.cos(E);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*w,d.y=e[P].y,d.z=e[P].x*I,o.push(d.x,d.y,d.z),f.x=M/t,f.y=P/(e.length-1),a.push(f.x,f.y);const v=l[3*P+0]*w,b=l[3*P+1],F=l[3*P+0]*I;c.push(v,b,F)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){const w=E+M*e.length,I=w,P=w+e.length,v=w+e.length+1,b=w+1;r.push(I,P,b),r.push(v,b,P)}this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.points,e.segments,e.phiStart,e.phiLength)}}class Bc extends ma{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bc(e.radius,e.detail)}}class tn extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*f-o;for(let E=0;E<c;E++){const w=E*d-r;p.push(w,-M,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const E=M+c*g,w=M+c*(g+1),I=M+1+c*(g+1),P=M+1+c*g;u.push(E,w,P),u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class zc extends ln{constructor(e=new Wr([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new zt(i,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(o,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const p=f.holes;ki.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];ki.isClockWise(M)===!0&&(p[m]=M.reverse())}const x=ki.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];u=u.concat(M)}for(let m=0,g=u.length;m<g;m++){const M=u[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=x.length;m<g;m++){const M=x[m],E=M[0]+d,w=M[1]+d,I=M[2]+d;n.push(E,w,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return D0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new zc(n,e.curveSegments)}}function D0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class en extends ln{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],E=g/n,w=o+E*a,I=e*Math.cos(w),P=Math.sqrt(e*e-I*I);let v=0;g===0&&o===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const F=b/t,U=i+F*r;d.x=-P*Math.cos(U),d.y=I,d.z=P*Math.sin(U),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(F+v,1-E),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){const E=h[g][M+1],w=h[g][M],I=h[g+1][M],P=h[g+1][M+1];(g!==0||o>0)&&u.push(E,w,P),(g!==n-1||l<Math.PI)&&u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vn extends ln{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new k,u=new k,p=new k;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const M=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,M=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,w=(i+1)*x+m;l.push(g,M,w),l.push(M,E,w)}this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Jh(i))i.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Jh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Wn(s){const e={};for(let t=0;t<s.length;t++){const n=Ys(s[t]);for(const i in n)e[i]=n[i]}return e}function Jh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function I0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const Kr={clone:Ys,merge:Wn};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(i.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new un().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zd extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ks extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends Ks{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ks('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ks('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ho extends Qn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new At(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class O0 extends Qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class F0 extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B0 extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function es(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function z0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $h(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function k0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class $s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class H0 extends $s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,a=2*t-n;break;case $o:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fs:o=e,l=2*n-t;break;case $o:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,E=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+M*o[c+I]+E*o[l+I]+w*o[d+I];return r}}class kd extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class G0 extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class V0 extends $s{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}const f=a*2,u=e-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=u*f+p*2,M=d[g],E=d[g+1],w=e*f+p*2,I=h[w],P=h[w+1],v=X0(n,t,M,I,i);r[p]=Hd(v,x,E,P,m)}return r}}function Hd(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function W0(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function X0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Hd(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const l=W0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class _i{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Sr(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new G0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new H0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new V0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Fr:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break;case lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Sr(this.settings)&&(Qh(this.settings.inTangents,e),Qh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Sr(this.settings)&&(jh(this.settings.inTangents,e),jh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&op(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const x=t[d+p];if(x!==t[f+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Sr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Qh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function jh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Fr;class Qs extends _i{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Or;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gd extends _i{constructor(e,t,n,i){super(e,t,n,i)}}Gd.prototype.ValueTypeName="color";class Zr extends _i{constructor(e,t,n,i){super(e,t,n,i)}}Zr.prototype.ValueTypeName="number";class q0 extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)gn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Jr extends _i{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new q0(this.times,this.values,this.getValueSize(),e)}}Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends _i{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Or;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends _i{constructor(e,t,n,i){super(e,t,n,i)}}oa.prototype.ValueTypeName="vector";class nc{constructor(e="",t=-1,n=[],i=Tc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(K0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_i.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=z0(l);l=$h(l,1,h),c=$h(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Y0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return oa;case"color":return Gd;case"quaternion":return Jr;case"bool":case"boolean":return Qs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function K0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y0(s.type);if(s.times===void 0){const n=[],i=[];k0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Sr(s.settings)&&(t.settings={inTangents:es(s.settings.inTangents,Float32Array),outTangents:es(s.settings.outTangents,Float32Array)}),t}const Hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(eu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!eu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function eu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Z0=new Vd;class er{constructor(e){this.manager=e!==void 0?e:Z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class J0 extends Error{constructor(e,t){super(e),this.response=t}}class Wd extends er{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Oi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let x=0;const m=new ReadableStream({start(g){M();function M(){d.read().then(({done:E,value:w})=>{if(E)g.close();else{x+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let P=0,v=h.length;P<v;P++){const b=h[P];b.onProgress&&b.onProgress(I)}g.enqueue(w),M()}},E=>{g.error(E)})}}});return new Response(m)}else throw new J0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Hi.add(`file:${e}`,c);const h=Oi[e];delete Oi[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class $0 extends er{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ls.get(o);d===void 0&&(d=[],Ls.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=kr("img");function l(){h(),t&&t(this);const d=Ls.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Hi.remove(`image:${e}`);const f=Ls.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class Q0 extends er{constructor(e){super(e)}load(e,t,n,i){const r=new An,o=new $0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ga extends pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class j0 extends ga{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const tl=new kt,tu=new k,nu=new k;class kc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===zr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ao=new k,Ro=new gn,vi=new k;class Xd extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ao,Ro,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ao,Ro,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new k,iu=new Oe,su=new Oe;class Kn extends Xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,iu,su),t.subVectors(su,iu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class em extends kc{constructor(){super(new Kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class tm extends ga{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new em}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class nm extends kc{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gi extends ga{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class _a extends Xd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class im extends kc{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new im}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const nl=new WeakMap;class sm extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{nl.has(o)===!0?(i&&i(nl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),nl.set(l,c),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ds=-90,Is=1;class ic extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kn(Ds,Is,e,t);i.layers=this.layers,this.add(i);const r=new Kn(Ds,Is,e,t);r.layers=this.layers,this.add(r);const o=new Kn(Ds,Is,e,t);o.layers=this.layers,this.add(o);const a=new Kn(Ds,Is,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Ds,Is,e,t);l.layers=this.layers,this.add(l);const c=new Kn(Ds,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class rm extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class om{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=am.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function am(){this._document.hidden===!1&&this.reset()}class lm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){gn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;gn.multiplyQuaternionsFlat(e,o,e,t,e,n),gn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Hc="\\[\\]\\.:\\/",cm=new RegExp("["+Hc+"]","g"),Gc="[^"+Hc+"]",hm="[^"+Hc.replace("\\.","")+"]",um=/((?:WC+[\/:])*)/.source.replace("WC",Gc),dm=/(WCOD+)?/.source.replace("WCOD",hm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),mm=new RegExp("^"+um+dm+fm+pm+"$"),gm=["material","materials","bones","map"];class _m{constructor(e,t,n){const i=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class an{constructor(e,t,n){this.path=t,this.parsedPath=n||an.parseTrackName(t),this.node=an.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new an.Composite(e,t,n):new an(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(e){const t=mm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=an.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}an.Composite=_m;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Os,endingEnd:Os};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Yf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Zf:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Tc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Kf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===qf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Fs,i.endingEnd=Fs):(e?i.endingStart=this.zeroSlopeAtStart?Fs:Os:i.endingStart=$o,t?i.endingEnd=this.zeroSlopeAtEnd?Fs:Os:i.endingEnd=$o)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const vm=new Float32Array(1);class Mm extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;p=new lm(an.create(n,u,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new kd(new Float32Array(2),new Float32Array(2),1,vm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?nc.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Tc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new xm(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?nc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const ru=new kt;class Yd{constructor(e,t,n=0,i=1/0){this.ray=new Js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(e,t=!0,n=[]){return sc(e,this,n,t),n.sort(ou),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)sc(e[i],this,n,t);return n.sort(ou),n}}function ou(s,e){return s.distance-e.distance}function sc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)sc(r[o],e,t,!0)}}class au{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ym extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lu(s,e,t,n){const i=Sm(n);switch(t){case hd:return s*e;case da:return s*e/i.components*i.byteLength;case Sc:return s*e/i.components*i.byteLength;case fs:return s*e*2/i.components*i.byteLength;case bc:return s*e*2/i.components*i.byteLength;case ud:return s*e*3/i.components*i.byteLength;case ui:return s*e*4/i.components*i.byteLength;case wc:return s*e*4/i.components*i.byteLength;case Fo:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:case bl:return Math.max(s,16)*Math.max(e,8)/4;case Ml:case Sl:return Math.max(s,8)*Math.max(e,8)/2;case wl:case Tl:case Al:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Zo:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case ql:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yl:case Kl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jo:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(s){switch(s){case $n:case od:return{byteLength:1,components:1};case Ur:case ad:case zn:return{byteLength:2,components:1};case Mc:case yc:return{byteLength:2,components:4};case pi:case vc:case si:return{byteLength:4,components:1};case ld:case cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);function Kd(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bm(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Bm=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
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
#endif`,yg=`uniform sampler2D dfgLUT;
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
}`,Sg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`uniform float backgroundBlurriness;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,L_=`#define DISTANCE
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
}`,D_=`#define DISTANCE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,O_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,G_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,q_=`#define PHONG
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
}`,Y_=`#define STANDARD
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
}`,K_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,$_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,ex=`uniform vec3 color;
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
}`,tx=`uniform float rotation;
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
}`,nx=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:wm,alphahash_pars_fragment:Tm,alphamap_fragment:Em,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Im,begin_vertex:Nm,beginnormal_vertex:Um,bsdfs:Om,iridescence_fragment:Fm,bumpmap_pars_fragment:Bm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Gm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:Ym,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:$m,emissivemap_pars_fragment:Qm,colorspace_fragment:jm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:xg,lights_phong_pars_fragment:vg,lights_physical_fragment:Mg,lights_physical_pars_fragment:yg,lights_fragment_begin:Sg,lights_fragment_maps:bg,lights_fragment_end:wg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Og,morphcolor_vertex:Fg,morphnormal_vertex:Bg,morphtarget_pars_vertex:zg,morphtarget_vertex:kg,normal_fragment_begin:Hg,normal_fragment_maps:Gg,normal_pars_fragment:Vg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:$g,packing:Qg,premultiplied_alpha_fragment:jg,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:x_,uv_pars_fragment:v_,uv_pars_vertex:M_,uv_vertex:y_,worldpos_vertex:S_,background_vert:b_,background_frag:w_,backgroundCube_vert:T_,backgroundCube_frag:E_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:P_,distance_vert:L_,distance_frag:D_,equirect_vert:I_,equirect_frag:N_,linedashed_vert:U_,linedashed_frag:O_,meshbasic_vert:F_,meshbasic_frag:B_,meshlambert_vert:z_,meshlambert_frag:k_,meshmatcap_vert:H_,meshmatcap_frag:G_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:q_,meshphysical_vert:Y_,meshphysical_frag:K_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:$_,points_frag:Q_,shadow_vert:j_,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},St={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Si={basic:{uniforms:Wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Wn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Wn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new At(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Wn([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Wn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Wn([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Wn([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Wn([St.common,St.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Wn([St.lights,St.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Si.physical={uniforms:Wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Co={r:0,b:0,g:0},ix=new kt,Zd=new Xt;Zd.set(-1,0,0,0,1,0,0,0,1);function sx(s,e,t,n,i,r){const o=new At(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const w=M.backgroundBlurriness>0;E=e.get(E,w)}return E}function p(M){let E=!1;const w=u(M);w===null?m(o,a):w&&w.isColor&&(m(w,1),E=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,E){const w=u(E);w&&w.isCubeTexture?(c===void 0&&(c=new Wt(new Le(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ys(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=jt.getTransfer(w.colorSpace)!==on,(h!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Wt(new tn(2,2),new qn({name:"BackgroundMaterial",uniforms:Ys(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=jt.getTransfer(w.colorSpace)!==on,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Co,Bd(s)),t.buffers.color.setClear(Co.r,Co.g,Co.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:x,dispose:g}}function rx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(q,se,j,N,ie){let ae=!1;const Z=d(q,N,j,se);r!==Z&&(r=Z,c(r.object)),ae=u(q,N,j,ie),ae&&p(q,N,j,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,w(q,se,j,N),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return s.createVertexArray()}function c(q){return s.bindVertexArray(q)}function h(q){return s.deleteVertexArray(q)}function d(q,se,j,N){const ie=N.wireframe===!0;let ae=n[se.id];ae===void 0&&(ae={},n[se.id]=ae);const Z=q.isInstancedMesh===!0?q.id:0;let V=ae[Z];V===void 0&&(V={},ae[Z]=V);let ne=V[j.id];ne===void 0&&(ne={},V[j.id]=ne);let he=ne[ie];return he===void 0&&(he=f(l()),ne[ie]=he),he}function f(q){const se=[],j=[],N=[];for(let ie=0;ie<t;ie++)se[ie]=0,j[ie]=0,N[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:j,attributeDivisors:N,object:q,attributes:{},index:null}}function u(q,se,j,N){const ie=r.attributes,ae=se.attributes;let Z=0;const V=j.getAttributes();for(const ne in V)if(V[ne].location>=0){const be=ie[ne];let Je=ae[ne];if(Je===void 0&&(ne==="instanceMatrix"&&q.instanceMatrix&&(Je=q.instanceMatrix),ne==="instanceColor"&&q.instanceColor&&(Je=q.instanceColor)),be===void 0||be.attribute!==Je||Je&&be.data!==Je.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function p(q,se,j,N){const ie={},ae=se.attributes;let Z=0;const V=j.getAttributes();for(const ne in V)if(V[ne].location>=0){let be=ae[ne];be===void 0&&(ne==="instanceMatrix"&&q.instanceMatrix&&(be=q.instanceMatrix),ne==="instanceColor"&&q.instanceColor&&(be=q.instanceColor));const Je={};Je.attribute=be,be&&be.data&&(Je.data=be.data),ie[ne]=Je,Z++}r.attributes=ie,r.attributesNum=Z,r.index=N}function x(){const q=r.newAttributes;for(let se=0,j=q.length;se<j;se++)q[se]=0}function m(q){g(q,0)}function g(q,se){const j=r.newAttributes,N=r.enabledAttributes,ie=r.attributeDivisors;j[q]=1,N[q]===0&&(s.enableVertexAttribArray(q),N[q]=1),ie[q]!==se&&(s.vertexAttribDivisor(q,se),ie[q]=se)}function M(){const q=r.newAttributes,se=r.enabledAttributes;for(let j=0,N=se.length;j<N;j++)se[j]!==q[j]&&(s.disableVertexAttribArray(j),se[j]=0)}function E(q,se,j,N,ie,ae,Z){Z===!0?s.vertexAttribIPointer(q,se,j,ie,ae):s.vertexAttribPointer(q,se,j,N,ie,ae)}function w(q,se,j,N){x();const ie=N.attributes,ae=j.getAttributes(),Z=se.defaultAttributeValues;for(const V in ae){const ne=ae[V];if(ne.location>=0){let he=ie[V];if(he===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(he=q.instanceColor)),he!==void 0){const be=he.normalized,Je=he.itemSize,ut=e.get(he);if(ut===void 0)continue;const fe=ut.buffer,Ke=ut.type,at=ut.bytesPerElement,gt=Ke===s.INT||Ke===s.UNSIGNED_INT||he.gpuType===vc;if(he.isInterleavedBufferAttribute){const Qe=he.data,xt=Qe.isInterleavedBuffer===!0?Qe.stride:Qe.itemSize,qt=he.offset;if(Qe.isInstancedInterleavedBuffer||Qe.isInstancedBufferAttribute){for(let pt=0;pt<ne.locationSize;pt++)g(ne.location+pt,Qe.meshPerAttribute);q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let pt=0;pt<ne.locationSize;pt++)m(ne.location+pt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let pt=0;pt<ne.locationSize;pt++)E(ne.location+pt,Je/ne.locationSize,Ke,be,xt*at,(qt+Je/ne.locationSize*pt)*at,gt)}else{if(he.isInstancedBufferAttribute){for(let Qe=0;Qe<ne.locationSize;Qe++)g(ne.location+Qe,he.meshPerAttribute);q.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Qe=0;Qe<ne.locationSize;Qe++)m(ne.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Qe=0;Qe<ne.locationSize;Qe++)E(ne.location+Qe,Je/ne.locationSize,Ke,be,Je*at,Je/ne.locationSize*Qe*at,gt)}}else if(Z!==void 0){const be=Z[V];if(be!==void 0)switch(be.length){case 2:s.vertexAttrib2fv(ne.location,be);break;case 3:s.vertexAttrib3fv(ne.location,be);break;case 4:s.vertexAttrib4fv(ne.location,be);break;default:s.vertexAttrib1fv(ne.location,be)}}}}M()}function I(){F();for(const q in n){const se=n[q];for(const j in se){const N=se[j];for(const ie in N){const ae=N[ie];for(const Z in ae)h(ae[Z].object),delete ae[Z];delete N[ie]}}delete n[q]}}function P(q){if(n[q.id]===void 0)return;const se=n[q.id];for(const j in se){const N=se[j];for(const ie in N){const ae=N[ie];for(const Z in ae)h(ae[Z].object),delete ae[Z];delete N[ie]}}delete n[q.id]}function v(q){for(const se in n){const j=n[se];for(const N in j){const ie=j[N];if(ie[q.id]===void 0)continue;const ae=ie[q.id];for(const Z in ae)h(ae[Z].object),delete ae[Z];delete ie[q.id]}}}function b(q){for(const se in n){const j=n[se],N=q.isInstancedMesh===!0?q.id:0,ie=j[N];if(ie!==void 0){for(const ae in ie){const Z=ie[ae];for(const V in Z)h(Z[V].object),delete Z[V];delete ie[ae]}delete j[N],Object.keys(j).length===0&&delete n[se]}}}function F(){U(),o=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function ox(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ax(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==ui&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const b=v===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$n&&v!==si&&!b&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:w,maxSamples:I,samples:P}}function lx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Bi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,E=M*4;let w=g.clippingState||null;l.value=w,w=h(p,f,E,u);for(let I=0;I!==E;++I)w[I]=t[I];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=u+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,w=u;E!==x;++E,w+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class Vc extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ad(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Le(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:ds});r.uniforms.tEquirect.value=t;const o=new Wt(i,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=In),new ic(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const cu=256,cx=3,hx=20,Jd=256,$d=16,ux=3,dx=new k,fx=new At;class aa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ic(1,10,null),this._boxMesh=new Wt(new Le(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=dx}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(fx));const m=new ic(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cu,xd(e))}_fromTexture(e,t){e.mapping===Vs||e.mapping===Nr?this._setSize(e.image.length===0?cu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=hu(e,!1,!1),n=Math.log2(e)-cx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vs||e.mapping===Nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=px(),this._integrationMaterial=mx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$d);for(let o=0;o<=n;o++){const a=aa.lodToRoughness(o,n);if(o>n-ux)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(Jd*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function hu(s,e,t){return new Vc(s,{minFilter:Ti,generateMipmaps:e,type:zn,colorSpace:jn,depthBuffer:t})}function $r(s,e,t){return new qn({name:s,uniforms:e,vertexShader:Zt.cube_vert,fragmentShader:t,side:Bn,blending:ds,depthTest:!1,depthWrite:!1})}function px(){return $r("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jd}u

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
	`)}function mx(){return $r("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$d}},`

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
	`)}function gx(){return $r("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hx}
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
	`)}function uu(){return $r("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function du(){return $r("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _x(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===wa||u===Ta)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new Vc(p.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===wa||u===Ta,x=u===Vs||u===Nr;if(p||x){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new aa(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new aa(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===wa?f.mapping=Vs:u===Ta&&(f.mapping=Nr),f}function l(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function xx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ks("WebGLRenderer: "+n+" extension not supported."),i}}}function vx(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)e.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?Sd:yd,w=new E(Math.ceil(M/3)*6,1),I=w.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,F=0;b<M;b+=3){const U=v[b+0],q=v[b+1],se=v[b+2];I[F++]=U,I[F++]=q,I[F++]=q,I[F++]=se,I[F++]=se,I[F++]=U}}else{g=m.version;for(let v=0,b=0;v<M;v+=3){const F=v+0,U=v+1,q=v+2;I[b++]=F,I[b++]=U,I[b++]=U,I[b++]=q,I[b++]=q,I[b++]=F}}w.version=g;const P=r.get(p);P&&e.remove(P),r.set(p,w)}function f(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Mx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sx(s,e,t){const n=new WeakMap,i=new un;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let F=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;u===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let w=a.attributes.position.count*E,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*I*4*d),v=new vd(P,w,I,d);v.type=si,v.needsUpdate=!0;const b=E*4;for(let U=0;U<d;U++){const q=m[U],se=g[U],j=M[U],N=w*I*4*U;for(let ie=0;ie<q.count;ie++){const ae=ie*b;u===!0&&(i.fromBufferAttribute(q,ie),P[N+ae+0]=i.x,P[N+ae+1]=i.y,P[N+ae+2]=i.z,P[N+ae+3]=0),p===!0&&(i.fromBufferAttribute(se,ie),P[N+ae+4]=i.x,P[N+ae+5]=i.y,P[N+ae+6]=i.z,P[N+ae+7]=0),x===!0&&(i.fromBufferAttribute(j,ie),P[N+ae+8]=i.x,P[N+ae+9]=i.y,P[N+ae+10]=i.z,P[N+ae+11]=j.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new Oe(w,I)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function bx(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const wx={[fc]:"LINEAR_TONE_MAPPING",[pc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[ua]:"ACES_FILMIC_TONE_MAPPING",[_c]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};function Tx(s,e,t,n,i,r){const o=new kn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new ln;h.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new zt([0,2,0,0,2,0],2));const d=new zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Wt(h,d),u=new _a(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,E=[],w=!1;this.setSize=function(I,P){o.setSize(I,P),a!==null&&a.setSize(I,P),l!==null&&l.setSize(I,P);for(let v=0;v<E.length;v++){const b=E[v];b.setSize&&b.setSize(I,P)}},this.setEffects=function(I){E=I,w=E.length>0&&E[0].isRenderPass===!0;const P=o.width,v=o.height;E.length>0&&a===null&&(a=new kn(P,v,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new kn(P,v,{type:zn,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&E.some(F=>F.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new ps(P,v),r===!0&&(c.format=ts,c.type=Ws)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let F=0;F<E.length;F++){const U=E[F];U.setSize&&U.setSize(P,v),b&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,P){if(m||I.toneMapping===Vi&&E.length===0)return!1;if(M=P,P!==null){const v=P.width,b=P.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return w===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=Vi,!0},this.hasRenderPass=function(){return w},this.end=function(I,P){I.toneMapping=g,m=!0;let v=o,b=a;for(let F=0;F<E.length;F++){const U=E[F];U.enabled!==!1&&(U.render(I,b,v,P),U.needsSwap!==!1&&(v=b,b=b===a?l:a))}if(p!==I.outputColorSpace||x!==I.toneMapping){p=I.outputColorSpace,x=I.toneMapping,d.defines={},jt.getTransfer(p)===on&&(d.defines.SRGB_TRANSFER="");const F=wx[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,I.setRenderTarget(M),I.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Qd=new An,jd=new ps(1,1),ef=new Rd(1),tf=new vd,nf=new Pp,sf=new Ad,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function tr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=fu[i];if(r===void 0&&(r=new Float32Array(i),fu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Cn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xa(s,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ex(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Cn(t,e)}}function Rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Cn(t,e)}}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Cn(t,e)}}function Px(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;_u.set(n),s.uniformMatrix2fv(this.addr,!1,_u),Cn(t,n)}}function Lx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;gu.set(n),s.uniformMatrix3fv(this.addr,!1,gu),Cn(t,n)}}function Dx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;mu.set(n),s.uniformMatrix4fv(this.addr,!1,mu),Cn(t,n)}}function Ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Cn(t,e)}}function Ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Cn(t,e)}}function Ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Cn(t,e)}}function Fx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Cn(t,e)}}function zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Cn(t,e)}}function kx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Cn(t,e)}}function va(s){return s.version===0&&(s.compareFunction=md,s.needsUpdate=!0),s}function Hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=va(jd):r=Qd,t.setTexture2D(e||r,i)}function Gx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nf,i)}function Vx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=va(ef):r=sf,t.setTextureCube(e||r,i)}function Wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tf,i)}function Xx(s){switch(s){case 5126:return Ex;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ix;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 5125:return Fx;case 36294:return Bx;case 36295:return zx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qx(s,e){s.uniform1fv(this.addr,e)}function Yx(s,e){const t=tr(e,this.size,2);s.uniform2fv(this.addr,t)}function Kx(s,e){const t=tr(e,this.size,3);s.uniform3fv(this.addr,t)}function Zx(s,e){const t=tr(e,this.size,4);s.uniform4fv(this.addr,t)}function Jx(s,e){const t=tr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $x(s,e){const t=tr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qx(s,e){const t=tr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jx(s,e){s.uniform1iv(this.addr,e)}function ev(s,e){s.uniform2iv(this.addr,e)}function tv(s,e){s.uniform3iv(this.addr,e)}function nv(s,e){s.uniform4iv(this.addr,e)}function iv(s,e){s.uniform1uiv(this.addr,e)}function sv(s,e){s.uniform2uiv(this.addr,e)}function rv(s,e){s.uniform3uiv(this.addr,e)}function ov(s,e){s.uniform4uiv(this.addr,e)}function av(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=va(jd):o=Qd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function lv(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||nf,r[o])}function cv(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=va(ef):o=sf;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function hv(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tf,r[o])}function uv(s){switch(s){case 5126:return qx;case 35664:return Yx;case 35665:return Kx;case 35666:return Zx;case 35674:return Jx;case 35675:return $x;case 35676:return Qx;case 5124:case 35670:return jx;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}}class fv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uv(t.type)}}class pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const il=/(\w+)(\])?(\[|\.)?/g;function xu(s,e){s.seq.push(e),s.map[e.id]=e}function mv(s,e,t){const n=s.name,i=n.length;for(il.lastIndex=0;;){const r=il.exec(n),o=il.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xu(t,c===void 0?new dv(a,s,e):new fv(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new pv(a),xu(t,d)),t=d}}}class Go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const gv=37297;let _v=0;function xv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Mu=new Xt;function vv(s){jt._getMatrix(Mu,jt.workingColorSpace,s);const e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(s)){case Qo:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xv(s.getShaderSource(e),a)}else return r}function Mv(s,e){const t=vv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yv={[fc]:"Linear",[pc]:"Reinhard",[mc]:"Cineon",[ua]:"ACESFilmic",[_c]:"AgX",[xc]:"Neutral",[gc]:"Custom"};function Sv(s,e){const t=yv[e];return t===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new k;function bv(){jt.getLuminanceCoefficients(Po);const s=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Tv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ev(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function br(s){return s!==""}function Su(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(s){return s.replace(Av,Rv)}function Rv(s,e){const t=Zt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return rc(t)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(s){return s.replace(Cv,Pv)}function Pv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Lv={[Tr]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Dv(s){return Lv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Iv={[Nr]:"ENVMAP_MODE_REFRACTION"};function Nv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Iv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Uv={[id]:"ENVMAP_BLENDING_MULTIPLY",[Vf]:"ENVMAP_BLENDING_MIX",[Wf]:"ENVMAP_BLENDING_ADD"};function Ov(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Uv[s.combine]||"ENVMAP_BLENDING_NONE"}function Fv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Dv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nv(t),d=Ov(t),f=wv(t),u=Tv(r),p=i.createProgram();let x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(br).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(br).join(`
`),m.length>0&&(m+=`
`)):(x=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Zt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=rc(o),o=Su(o,t),o=bu(o,t),a=rc(a),a=Su(a,t),a=bu(a,t),o=wu(o),a=wu(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+o,E=g+m+a,w=vu(i,i.VERTEX_SHADER,M),I=vu(i,i.FRAGMENT_SHADER,E);i.attachShader(p,w),i.attachShader(p,I),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(U){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p)||"",se=i.getShaderInfoLog(w)||"",j=i.getShaderInfoLog(I)||"",N=q.trim(),ie=se.trim(),ae=j.trim();let Z=!0,V=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,I);else{const ne=yu(i,w,"vertex"),he=yu(i,I,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+ne+`
`+he)}else N!==""?Nt("WebGLProgram: Program Info Log:",N):(ie===""||ae==="")&&(V=!1);V&&(U.diagnostics={runnable:Z,programLog:N,vertexShader:{log:ie,prefix:x},fragmentShader:{log:ae,prefix:m}})}i.deleteShader(w),i.deleteShader(I),v=new Go(i,p),b=Ev(i,p)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,gv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=I,this}let Bv=0;class zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kv(e),t.set(e,n)),n}}class kv{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}}function Hv(s){return s===fs||s===Zo||s===Jo}function Gv(s,e,t,n,i,r){const o=new Pc,a=new zv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,F,U,q,se){const j=U.fog,N=q.geometry,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,ae=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||ie,ae),V=f[v.type];let ne=n.precision;v.precision!==null&&(ne=n.getMaxPrecision(v.precision),ne!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",ne,"instead."));const he=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=he!==void 0?he.length:0;let Je=0;N.morphAttributes.position!==void 0&&(Je=1),N.morphAttributes.normal!==void 0&&(Je=2),N.morphAttributes.color!==void 0&&(Je=3);let ut,fe,Ke,at;if(V){const O=Si[V];ut=O.vertexShader,fe=O.fragmentShader}else{ut=v.vertexShader,fe=v.fragmentShader;const O=a.getVertexShaderStage(v),re=a.getFragmentShaderStage(v);a.update(v,O,re),Ke=O.id,at=re.id}const gt=s.getRenderTarget(),Qe=s.state.buffers.depth.getReversed(),xt=q.isInstancedMesh===!0,qt=q.isBatchedMesh===!0,pt=!!v.map,Rt=!!v.matcap,Pt=!!Z,Re=Pt&&Z.isPMREMTexture===!0,qe=!!v.aoMap,it=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,st=!!v.normalMap,ct=!!v.displacementMap,dt=!!v.emissiveMap,ye=!!v.metalnessMap,ke=!!v.roughnessMap,ze=v.anisotropy>0,L=v.clearcoat>0,tt=v.diffuseRoughness>0,je=v.dispersion>0,Ye=v.retroreflectivity>0,Ce=v.iridescence>0,nt=v.sheen>0,Se=v.transmission>0,le=ze&&!!v.anisotropyMap,C=L&&!!v.clearcoatMap,S=L&&!!v.clearcoatNormalMap,Q=L&&!!v.clearcoatRoughnessMap,Me=tt&&!!v.diffuseRoughnessMap,pe=Ce&&!!v.iridescenceMap,Ue=Ce&&!!v.iridescenceThicknessMap,He=nt&&!!v.sheenColorMap,ve=nt&&!!v.sheenRoughnessMap,we=!!v.specularMap,Ie=!!v.specularColorMap,W=!!v.specularIntensityMap,xe=Se&&!!v.transmissionMap,ge=Se&&!!v.thicknessMap,Xe=!!v.gradientMap,te=!!v.alphaMap,J=v.alphaTest>0,de=!!v.alphaHash,De=!!v.extensions;let _=Vi;v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(_=s.toneMapping);const z=Re?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,X={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:ut,fragmentShader:fe,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:ne,batching:qt,batchingColor:qt&&q._colorsTexture!==null,instancing:xt,instancingColor:xt&&q.instanceColor!==null,instancingMorph:xt&&q.morphTexture!==null,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:pt,matcap:Rt,envMap:Pt,envMapMode:Pt&&Z.mapping,envMapPMREM:Re,envMapMaxLod:Re?z.length-1:null,envMapSize:Re?z[0].width:null,aoMap:qe,lightMap:it,bumpMap:lt,normalMap:st,displacementMap:ct,emissiveMap:dt,normalMapObjectSpace:st&&v.normalMapType===Qf,normalMapTangentSpace:st&&v.normalMapType===Br,packedNormalMap:st&&v.normalMapType===Br&&Hv(v.normalMap.format),metalnessMap:ye,roughnessMap:ke,anisotropy:ze,anisotropyMap:le,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:Q,diffuseRoughness:tt,diffuseRoughnessMap:Me,dispersion:je,retroreflection:Ye,iridescence:Ce,iridescenceMap:pe,iridescenceThicknessMap:Ue,sheen:nt,sheenColorMap:He,sheenRoughnessMap:ve,specularMap:we,specularColorMap:Ie,specularIntensityMap:W,transmission:Se,transmissionMap:xe,thicknessMap:ge,gradientMap:Xe,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:J,alphaHash:de,combine:v.combine,mapUv:pt&&u(v.map.channel),aoMapUv:qe&&u(v.aoMap.channel),lightMapUv:it&&u(v.lightMap.channel),bumpMapUv:lt&&u(v.bumpMap.channel),normalMapUv:st&&u(v.normalMap.channel),displacementMapUv:ct&&u(v.displacementMap.channel),emissiveMapUv:dt&&u(v.emissiveMap.channel),metalnessMapUv:ye&&u(v.metalnessMap.channel),roughnessMapUv:ke&&u(v.roughnessMap.channel),anisotropyMapUv:le&&u(v.anisotropyMap.channel),clearcoatMapUv:C&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&u(v.sheenRoughnessMap.channel),specularMapUv:we&&u(v.specularMap.channel),specularColorMapUv:Ie&&u(v.specularColorMap.channel),specularIntensityMapUv:W&&u(v.specularIntensityMap.channel),transmissionMapUv:xe&&u(v.transmissionMap.channel),thicknessMapUv:ge&&u(v.thicknessMap.channel),alphaMapUv:te&&u(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(st||ze),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(pt||te),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&st===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Qe,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Je,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:se.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:_,decodeVideoTexture:pt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===on,decodeVideoTextureEmissive:dt&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===on,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===Bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||qt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return X.vertexUv1s=l.has(1),X.vertexUv2s=l.has(2),X.vertexUv3s=l.has(3),l.clear(),X}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const b=f[v.type];let F;if(b){const U=Si[b];F=Kr.clone(U.uniforms)}else F=v.uniforms;return F}function E(v,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new Fv(s,b,v,i),c.push(F),h.set(b,F)),F}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function I(v){a.remove(v)}function P(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:E,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:P}}function Vv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Wv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Eu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Au(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[e]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=g),e++,M}function l(f,u,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const E=a(f,u,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):t.push(E)}function c(f,u,p,x,m,g){const M=a(f,u,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(f,u){t.length>1&&t.sort(f||Wv),n.length>1&&n.sort(u||Eu),i.length>1&&i.sort(u||Eu)}function d(){for(let f=e,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Xv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Au,s.set(n,[o])):i>=r.length?(o=new Au,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function qv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new At};break;case"SpotLight":t={position:new k,direction:new k,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function Yv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Kv=0;function Zv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Jv(s){const e=new qv,t=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new kt,o=new kt;function a(c){let h=0,d=0,f=0;for(let se=0;se<9;se++)n.probe[se].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,M=0,E=0,w=0,I=0,P=0,v=0,b=0,F=0,U=0;c.sort(Zv);for(let se=0,j=c.length;se<j;se++){const N=c[se],ie=N.color,ae=N.intensity,Z=N.distance;let V=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===fs?V=N.shadow.map.texture:V=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=ie.r*ae,d+=ie.g*ae,f+=ie.b*ae;else if(N.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(N.sh.coefficients[ne],ae);U++}else if(N.isSunLight){const ne=e.get(N);if(ne.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),n.sunShadow[p]=be,n.sunShadowMap[p]=V;const Je=he.getViewportCount();for(let ut=0;ut<Je;ut++)n.sunShadowMatrix[x+ut]=he.getMatrix(ut),n.sunShadowCascade[x+ut]=he._cascadeData[ut];x+=Je,p++}n.sun[u]=ne,u++}else if(N.isDirectionalLight){const ne=e.get(N);if(ne.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize=he.mapSize,n.directionalShadow[m]=be,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=N.shadow.matrix,I++}n.directional[m]=ne,m++}else if(N.isSpotLight){const ne=e.get(N);ne.position.setFromMatrixPosition(N.matrixWorld),ne.color.copy(ie).multiplyScalar(ae),ne.distance=Z,ne.coneCos=Math.cos(N.angle),ne.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ne.decay=N.decay,n.spot[M]=ne;const he=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,he.updateMatrices(N),N.castShadow&&F++),n.spotLightMatrix[M]=he.matrix,N.castShadow){const be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize=he.mapSize,n.spotShadow[M]=be,n.spotShadowMap[M]=V,v++}M++}else if(N.isRectAreaLight){const ne=e.get(N);ne.color.copy(ie).multiplyScalar(ae),ne.halfWidth.set(N.width*.5,0,0),ne.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=ne,E++}else if(N.isPointLight){const ne=e.get(N);if(ne.color.copy(N.color).multiplyScalar(N.intensity),ne.distance=N.distance,ne.decay=N.decay,N.castShadow){const he=N.shadow,be=t.get(N);be.shadowIntensity=he.intensity,be.shadowBias=he.bias,be.shadowNormalBias=he.normalBias,be.shadowRadius=he.radius,be.shadowMapSize=he.mapSize,be.shadowCameraNear=he.camera.near,be.shadowCameraFar=he.camera.far,n.pointShadow[g]=be,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=N.shadow.matrix,P++}n.point[g]=ne,g++}else if(N.isHemisphereLight){const ne=e.get(N);ne.skyColor.copy(N.color).multiplyScalar(ae),ne.groundColor.copy(N.groundColor).multiplyScalar(ae),n.hemi[w]=ne,w++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const q=n.hash;(q.sunLength!==u||q.directionalLength!==m||q.pointLength!==g||q.spotLength!==M||q.rectAreaLength!==E||q.hemiLength!==w||q.numSunShadows!==p||q.numDirectionalShadows!==I||q.numPointShadows!==P||q.numSpotShadows!==v||q.numSpotMaps!==b||q.numLightProbes!==U)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=U,q.sunLength=u,q.directionalLength=m,q.pointLength=g,q.spotLength=M,q.rectAreaLength=E,q.hemiLength=w,q.numSunShadows=p,q.numDirectionalShadows=I,q.numPointShadows=P,q.numSpotShadows=v,q.numSpotMaps=b,q.numLightProbes=U,n.version=Kv++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const w=c[M];if(w.isSunLight){const I=n.sun[d];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),d++}else if(w.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),f++}else if(w.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const I=n.rectArea[x];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const I=n.point[u];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Ru(s){const e=new Jv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $v(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ru(s),e.set(i,[a])):r>=o.length?(a=new Ru(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
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
}`,eM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],tM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Cu=new kt,pr=new k,sl=new k;function nM(s,e,t){let n=new Vr;const i=new Oe,r=new Oe,o=new un,a=new F0,l=new B0,c={},h=t.maxTextureSize,d={[ss]:Bn,[Bn]:ss,[mn]:mn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Qv,fragmentShader:jv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new ln;p.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let g=this.type;this.render=function(P,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===wf&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);const F=s.getRenderTarget(),U=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),se=s.state;se.setBlending(ds),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const j=g!==this.type;j&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(ie=>ie.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,ie=P.length;N<ie;N++){const ae=P[N],Z=ae.shadow;if(Z===void 0){Nt("WebGLShadowMap:",ae,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const V=Z.getFrameExtents();i.multiply(V),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,Z.mapSize.y=r.y));const ne=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ne,Z.map===null||j===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===xr){if(ae.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new kn(i.x,i.y,{format:fs,type:zn,minFilter:In,magFilter:In,generateMipmaps:!1}),Z.map.texture.name=ae.name+".shadowMap",Z.map.depthTexture=new ps(i.x,i.y,si),Z.map.depthTexture.name=ae.name+".shadowMapDepth",Z.map.depthTexture.format=rs,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=wn,Z.map.depthTexture.magFilter=wn}else ae.isPointLight?(Z.map=new Vc(i.x),Z.map.depthTexture=new Rd(i.x,pi)):(Z.map=new kn(i.x,i.y),Z.map.depthTexture=new ps(i.x,i.y,pi)),Z.map.depthTexture.name=ae.name+".shadowMap",Z.map.depthTexture.format=rs,this.type===Tr?(Z.map.depthTexture.compareFunction=ne?pd:fd,Z.map.depthTexture.minFilter=In,Z.map.depthTexture.magFilter=In):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=wn,Z.map.depthTexture.magFilter=wn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);const he=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();ae.isPointLight!==!0&&Z.updateMatrices(ae,b);const be=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:b.layers;for(let Je=0;Je<he;Je++){const ut=Z.getCamera(Je);if(ae.isPointLight){const fe=Z.camera,Ke=Z.matrix,at=ae.distance||fe.far;at!==fe.far&&(fe.far=at,fe.updateProjectionMatrix()),pr.setFromMatrixPosition(ae.matrixWorld),fe.position.copy(pr),sl.copy(fe.position),sl.add(eM[Je]),fe.up.copy(tM[Je]),fe.lookAt(sl),fe.updateMatrixWorld(),Ke.makeTranslation(-pr.x,-pr.y,-pr.z),Cu.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Cu,fe.coordinateSystem,fe.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,Je),s.clear();else{Je===0&&(s.setRenderTarget(Z.map),s.clear());const fe=Z.getViewport(Je);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),se.viewport(o)}n=Z.getFrustum(Je),w(v,b,ut,ae,be,this.type)}Z.isPointLightShadow!==!0&&this.type===xr&&M(Z,b),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(F,U,q)};function M(P,v){const b=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null?P.mapPass=new kn(i.x,i.y,{format:fs,type:zn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(v,null,b,f,x,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(v,null,b,u,x,null)}function E(P,v,b,F){let U=null;const q=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)U=q;else if(U=b.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const se=U.uuid,j=v.uuid;let N=c[se];N===void 0&&(N={},c[se]=N);let ie=N[j];ie===void 0&&(ie=U.clone(),N[j]=ie,v.addEventListener("dispose",I)),U=ie}if(U.visible=v.visible,U.wireframe=v.wireframe,F===xr?U.side=v.shadowSide!==null?v.shadowSide:v.side:U.side=v.shadowSide!==null?v.shadowSide:d[v.side],U.alphaMap=v.alphaMap,U.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,U.map=v.map,U.clipShadows=v.clipShadows,U.clippingPlanes=v.clippingPlanes,U.clipIntersection=v.clipIntersection,U.displacementMap=v.displacementMap,U.displacementScale=v.displacementScale,U.displacementBias=v.displacementBias,U.wireframeLinewidth=v.wireframeLinewidth,U.linewidth=v.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const se=s.properties.get(U);se.light=b}return U}function w(P,v,b,F,U,q){if(P.visible===!1)return;if(P.layers.test(U)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&q===xr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const N=e.update(P),ie=P.material;if(Array.isArray(ie)){const ae=N.groups;for(let Z=0,V=ae.length;Z<V;Z++){const ne=ae[Z],he=ie[ne.materialIndex];if(he&&he.visible){const be=E(P,he,F,q);P.onBeforeShadow(s,P,v,b,N,be,ne),s.renderBufferDirect(b,null,N,be,P,ne),P.onAfterShadow(s,P,v,b,N,be,ne)}}}else if(ie.visible){const ae=E(P,ie,F,q);P.onBeforeShadow(s,P,v,b,N,ae,null),s.renderBufferDirect(b,null,N,ae,P,null),P.onAfterShadow(s,P,v,b,N,ae,null)}}const j=P.children;for(let N=0,ie=j.length;N<ie;N++)w(j[N],v,b,F,U,q)}function I(P){P.target.removeEventListener("dispose",I);for(const b in c){const F=c[b],U=P.target.uuid;U in F&&(F[U].dispose(),delete F[U])}}}function iM(s,e){function t(){let W=!1;const xe=new un;let ge=null;const Xe=new un(0,0,0,0);return{setMask:function(te){ge!==te&&!W&&(s.colorMask(te,te,te,te),ge=te)},setLocked:function(te){W=te},setClear:function(te,J,de,De,_){_===!0&&(te*=De,J*=De,de*=De),xe.set(te,J,de,De),Xe.equals(xe)===!1&&(s.clearColor(te,J,de,De),Xe.copy(xe))},reset:function(){W=!1,ge=null,Xe.set(-1,0,0,0)}}}function n(){let W=!1,xe=!1,ge=null,Xe=null,te=null;return{setReversed:function(J){if(xe!==J){const de=e.get("EXT_clip_control");J?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),xe=J;const De=te;te=null,this.setClear(De)}},getReversed:function(){return xe},setTest:function(J){J?Qe(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(J){ge!==J&&!W&&(s.depthMask(J),ge=J)},setFunc:function(J){if(xe&&(J=cp[J]),Xe!==J){switch(J){case fl:s.depthFunc(s.NEVER);break;case pl:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case Ir:s.depthFunc(s.LEQUAL);break;case gl:s.depthFunc(s.EQUAL);break;case _l:s.depthFunc(s.GEQUAL);break;case xl:s.depthFunc(s.GREATER);break;case vl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=J}},setLocked:function(J){W=J},setClear:function(J){te!==J&&(te=J,xe&&(J=1-J),s.clearDepth(J))},reset:function(){W=!1,ge=null,Xe=null,te=null,xe=!1}}}function i(){let W=!1,xe=null,ge=null,Xe=null,te=null,J=null,de=null,De=null,_=null;return{setTest:function(z){W||(z?Qe(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(z){xe!==z&&!W&&(s.stencilMask(z),xe=z)},setFunc:function(z,X,O){(ge!==z||Xe!==X||te!==O)&&(s.stencilFunc(z,X,O),ge=z,Xe=X,te=O)},setOp:function(z,X,O){(J!==z||de!==X||De!==O)&&(s.stencilOp(z,X,O),J=z,de=X,De=O)},setLocked:function(z){W=z},setClear:function(z){_!==z&&(s.clearStencil(z),_=z)},reset:function(){W=!1,xe=null,ge=null,Xe=null,te=null,J=null,de=null,De=null,_=null}}}const r=new t,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,E=null,w=null,I=null,P=null,v=null,b=new At(0,0,0),F=0,U=!1,q=null,se=null,j=null,N=null,ie=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=V>=2);let he=null,be={};const Je=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),fe=new un().fromArray(Je),Ke=new un().fromArray(ut);function at(W,xe,ge,Xe){const te=new Uint8Array(4),J=s.createTexture();s.bindTexture(W,J),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<ge;de++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(xe+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return J}const gt={};gt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Qe(s.DEPTH_TEST),o.setFunc(Ir),lt(!1),st(sh),Qe(s.CULL_FACE),qe(ds);function Qe(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function xt(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function qt(W,xe){return f[W]!==xe?(s.bindFramebuffer(W,xe),f[W]=xe,W===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=xe),W===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function pt(W,xe){let ge=p,Xe=!1;if(W){ge=u.get(xe),ge===void 0&&(ge=[],u.set(xe,ge));const te=W.textures;if(ge.length!==te.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let J=0,de=te.length;J<de;J++)ge[J]=s.COLOR_ATTACHMENT0+J;ge.length=te.length,Xe=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(ge)}function Rt(W){return x!==W?(s.useProgram(W),x=W,!0):!1}const Pt={[Ns]:s.FUNC_ADD,[Ef]:s.FUNC_SUBTRACT,[Af]:s.FUNC_REVERSE_SUBTRACT};Pt[Rf]=s.MIN,Pt[Cf]=s.MAX;const Re={[Pf]:s.ZERO,[Lf]:s.ONE,[Df]:s.SRC_COLOR,[td]:s.SRC_ALPHA,[Bf]:s.SRC_ALPHA_SATURATE,[Of]:s.DST_COLOR,[Nf]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[nd]:s.ONE_MINUS_SRC_ALPHA,[Ff]:s.ONE_MINUS_DST_COLOR,[Uf]:s.ONE_MINUS_DST_ALPHA,[zf]:s.CONSTANT_COLOR,[kf]:s.ONE_MINUS_CONSTANT_COLOR,[Hf]:s.CONSTANT_ALPHA,[Gf]:s.ONE_MINUS_CONSTANT_ALPHA};function qe(W,xe,ge,Xe,te,J,de,De,_,z){if(W===ds){m===!0&&(xt(s.BLEND),m=!1);return}if(m===!1&&(Qe(s.BLEND),m=!0),W!==Tf){if(W!==g||z!==U){if((M!==Ns||I!==Ns)&&(s.blendEquation(s.FUNC_ADD),M=Ns,I=Ns),z)switch(W){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bi:s.blendFunc(s.ONE,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",W);break}else switch(W){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rh:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",W);break}E=null,w=null,P=null,v=null,b.set(0,0,0),F=0,g=W,U=z}return}te=te||xe,J=J||ge,de=de||Xe,(xe!==M||te!==I)&&(s.blendEquationSeparate(Pt[xe],Pt[te]),M=xe,I=te),(ge!==E||Xe!==w||J!==P||de!==v)&&(s.blendFuncSeparate(Re[ge],Re[Xe],Re[J],Re[de]),E=ge,w=Xe,P=J,v=de),(De.equals(b)===!1||_!==F)&&(s.blendColor(De.r,De.g,De.b,_),b.copy(De),F=_),g=W,U=!1}function it(W,xe){W.side===mn?xt(s.CULL_FACE):Qe(s.CULL_FACE);let ge=W.side===Bn;xe&&(ge=!ge),lt(ge),W.blending===zs&&W.transparent===!1?qe(ds):qe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Xe=W.stencilWrite;a.setTest(Xe),Xe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Qe(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){q!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),q=W)}function st(W){W!==Sf?(Qe(s.CULL_FACE),W!==se&&(W===sh?s.cullFace(s.BACK):W===bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),se=W}function ct(W){W!==j&&(Z&&s.lineWidth(W),j=W)}function dt(W,xe,ge){W?(Qe(s.POLYGON_OFFSET_FILL),(N!==xe||ie!==ge)&&(N=xe,ie=ge,o.getReversed()&&(xe=-xe,ge=-ge),s.polygonOffset(xe,ge))):xt(s.POLYGON_OFFSET_FILL)}function ye(W){W?Qe(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function ke(W){W===void 0&&(W=s.TEXTURE0+ae-1),he!==W&&(s.activeTexture(W),he=W)}function ze(W,xe,ge){ge===void 0&&(he===null?ge=s.TEXTURE0+ae-1:ge=he);let Xe=be[ge];Xe===void 0&&(Xe={type:void 0,texture:void 0},be[ge]=Xe),(Xe.type!==W||Xe.texture!==xe)&&(he!==ge&&(s.activeTexture(ge),he=ge),s.bindTexture(W,xe||gt[W]),Xe.type=W,Xe.texture=xe)}function L(){const W=be[he];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function tt(){try{s.compressedTexImage2D(...arguments)}catch(W){Ht("WebGLState:",W)}}function je(){try{s.compressedTexImage3D(...arguments)}catch(W){Ht("WebGLState:",W)}}function Ye(){try{s.texSubImage2D(...arguments)}catch(W){Ht("WebGLState:",W)}}function Ce(){try{s.texSubImage3D(...arguments)}catch(W){Ht("WebGLState:",W)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ht("WebGLState:",W)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ht("WebGLState:",W)}}function le(){try{s.texStorage2D(...arguments)}catch(W){Ht("WebGLState:",W)}}function C(){try{s.texStorage3D(...arguments)}catch(W){Ht("WebGLState:",W)}}function S(){try{s.texImage2D(...arguments)}catch(W){Ht("WebGLState:",W)}}function Q(){try{s.texImage3D(...arguments)}catch(W){Ht("WebGLState:",W)}}function Me(W){return d[W]!==void 0?d[W]:s.getParameter(W)}function pe(W,xe){d[W]!==xe&&(s.pixelStorei(W,xe),d[W]=xe)}function Ue(W){fe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),fe.copy(W))}function He(W){Ke.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ke.copy(W))}function ve(W,xe){let ge=c.get(xe);ge===void 0&&(ge=new WeakMap,c.set(xe,ge));let Xe=ge.get(W);Xe===void 0&&(Xe=s.getUniformBlockIndex(xe,W.name),s.uniformBlockBinding(xe,Xe,Xe),ge.set(W,Xe))}function we(W,xe,ge){const te=c.get(xe).get(W);l[te]!==ge&&(s.bindBufferBase(s.UNIFORM_BUFFER,te,ge),l[te]=ge)}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},he=null,be={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,E=null,w=null,I=null,P=null,v=null,b=new At(0,0,0),F=0,U=!1,q=null,se=null,j=null,N=null,ie=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Qe,disable:xt,bindFramebuffer:qt,drawBuffers:pt,useProgram:Rt,setBlending:qe,setMaterial:it,setFlipSided:lt,setCullFace:st,setLineWidth:ct,setPolygonOffset:dt,setScissorTest:ye,activeTexture:ke,bindTexture:ze,unbindTexture:L,compressedTexImage2D:tt,compressedTexImage3D:je,texImage2D:S,texImage3D:Q,pixelStorei:pe,getParameter:Me,updateUBOMapping:ve,uniformBlockBinding:we,texStorage2D:le,texStorage3D:C,texSubImage2D:Ye,texSubImage3D:Ce,compressedTexSubImage2D:nt,compressedTexSubImage3D:Se,scissor:Ue,viewport:He,reset:Ie}}function sM(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):kr("canvas")}function M(C,S,Q){let Me=1;const pe=le(C);if((pe.width>Q||pe.height>Q)&&(Me=Q/Math.max(pe.width,pe.height)),Me<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ue=Math.floor(Me*pe.width),He=Math.floor(Me*pe.height);f===void 0&&(f=g(Ue,He));const ve=S?g(Ue,He):f;return ve.width=Ue,ve.height=He,ve.getContext("2d").drawImage(C,0,0,Ue,He),Nt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ue+"x"+He+")."),ve}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),C;return C}function E(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,S,Q,Me,pe,Ue=!1){if(C!==null){if(s[C]!==void 0)return s[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let He;Me&&(He=e.get("EXT_texture_norm16"),He||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=S;if(S===s.RED&&(Q===s.FLOAT&&(ve=s.R32F),Q===s.HALF_FLOAT&&(ve=s.R16F),Q===s.UNSIGNED_BYTE&&(ve=s.R8),Q===s.UNSIGNED_SHORT&&He&&(ve=He.R16_EXT),Q===s.SHORT&&He&&(ve=He.R16_SNORM_EXT)),S===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.R8UI),Q===s.UNSIGNED_SHORT&&(ve=s.R16UI),Q===s.UNSIGNED_INT&&(ve=s.R32UI),Q===s.BYTE&&(ve=s.R8I),Q===s.SHORT&&(ve=s.R16I),Q===s.INT&&(ve=s.R32I)),S===s.RG&&(Q===s.FLOAT&&(ve=s.RG32F),Q===s.HALF_FLOAT&&(ve=s.RG16F),Q===s.UNSIGNED_BYTE&&(ve=s.RG8),Q===s.UNSIGNED_SHORT&&He&&(ve=He.RG16_EXT),Q===s.SHORT&&He&&(ve=He.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ve=s.RG16UI),Q===s.UNSIGNED_INT&&(ve=s.RG32UI),Q===s.BYTE&&(ve=s.RG8I),Q===s.SHORT&&(ve=s.RG16I),Q===s.INT&&(ve=s.RG32I)),S===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),Q===s.UNSIGNED_INT&&(ve=s.RGB32UI),Q===s.BYTE&&(ve=s.RGB8I),Q===s.SHORT&&(ve=s.RGB16I),Q===s.INT&&(ve=s.RGB32I)),S===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ve=s.RGBA32UI),Q===s.BYTE&&(ve=s.RGBA8I),Q===s.SHORT&&(ve=s.RGBA16I),Q===s.INT&&(ve=s.RGBA32I)),S===s.RGB&&(Q===s.UNSIGNED_SHORT&&He&&(ve=He.RGB16_EXT),Q===s.SHORT&&He&&(ve=He.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),S===s.RGBA){const we=Ue?Qo:jt.getTransfer(pe);Q===s.FLOAT&&(ve=s.RGBA32F),Q===s.HALF_FLOAT&&(ve=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ve=we===on?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&He&&(ve=He.RGBA16_EXT),Q===s.SHORT&&He&&(ve=He.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function v(C,S){let Q;return C?S===null||S===pi||S===Ws?Q=s.DEPTH24_STENCIL8:S===si?Q=s.DEPTH32F_STENCIL8:S===Ur&&(Q=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===Ws?Q=s.DEPTH_COMPONENT24:S===si?Q=s.DEPTH_COMPONENT32F:S===Ur&&(Q=s.DEPTH_COMPONENT16),Q}function b(C,S){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function F(C){const S=new WeakRef(C);n.get(C).__ref=S,p.add(S),x.register(C,S,S)}function U(C){const S=n.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function q(C){j(C.target)}function se(C){N(C.target)}function j(C){C.removeEventListener("dispose",q),U(C),ae(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",se),U(C),V(C)}function ie(){for(const C of p){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):j(S))}p.clear(),d.clear()}function ae(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Q=C.source,Me=u.get(Q);if(Me){const pe=Me[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&Z(C),Object.keys(Me).length===0&&u.delete(Q)}n.remove(C)}function Z(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const Q=C.source,Me=u.get(Q);delete Me[S.__cacheKey],o.memory.textures--}function V(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const Q=C.depthTexture;if(Q&&Q.renderTarget===C&&j(Q),C.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(S.__webglFramebuffer[pe]))for(let Ue=0;Ue<S.__webglFramebuffer[pe].length;Ue++)s.deleteFramebuffer(S.__webglFramebuffer[pe][Ue]);else s.deleteFramebuffer(S.__webglFramebuffer[pe]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[pe])}else{if(Array.isArray(S.__webglFramebuffer))for(let pe=0;pe<S.__webglFramebuffer.length;pe++)s.deleteFramebuffer(S.__webglFramebuffer[pe]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pe=0;pe<S.__webglColorRenderbuffer.length;pe++)S.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[pe]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Me=C.textures;for(let pe=0,Ue=Me.length;pe<Ue;pe++){const He=n.get(Me[pe]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),o.memory.textures--),n.remove(Me[pe])}n.remove(C)}let ne=0;function he(){ne=0}function be(){return ne}function Je(C){ne=C}function ut(){const C=ne;return C>=i.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),ne+=1,C}function fe(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Ke(C,S){const Q=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Q.__version!==C.version){const Me=C.image;if(Me===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Q,C,S);return}}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+S)}function at(C,S){const Q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){it(Q,C,S);return}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+S)}function gt(C,S){const Q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){it(Q,C,S);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+S)}function Qe(C,S){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){lt(Q,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+S)}const xt={[ri]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[Ko]:s.MIRRORED_REPEAT},qt={[wn]:s.NEAREST,[rd]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Oo]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},pt={[ep]:s.NEVER,[md]:s.ALWAYS,[tp]:s.LESS,[fd]:s.LEQUAL,[np]:s.EQUAL,[pd]:s.GEQUAL,[ip]:s.GREATER,[sp]:s.NOTEQUAL};function Rt(C,S){if(S.type===si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===In||S.magFilter===Oo||S.magFilter===vr||S.magFilter===Ti||S.minFilter===In||S.minFilter===Oo||S.minFilter===vr||S.minFilter===Ti)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,xt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,xt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,xt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,qt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,qt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==vr&&S.minFilter!==Ti||S.type===si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pt(C,S){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",q),F(S));const Me=S.source;let pe=u.get(Me);pe===void 0&&(pe={},u.set(Me,pe));const Ue=fe(S);if(Ue!==C.__cacheKey){pe[Ue]===void 0&&(pe[Ue]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),pe[Ue].usedTimes++;const He=pe[C.__cacheKey];He!==void 0&&(pe[C.__cacheKey].usedTimes--,He.usedTimes===0&&Z(S)),C.__cacheKey=Ue,C.__webglTexture=pe[Ue].texture}return Q}function Re(C,S,Q){return Math.floor(Math.floor(C/Q)/S)}function qe(C,S,Q,Me){const Ue=C.updateRanges;if(Ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,Q,Me,S.data);else{Ue.sort((W,xe)=>W.start-xe.start);let He=0;for(let W=1;W<Ue.length;W++){const xe=Ue[He],ge=Ue[W],Xe=xe.start+xe.count,te=Re(ge.start,S.width,4),J=Re(xe.start,S.width,4);ge.start<=Xe+1&&te===J&&Re(ge.start+ge.count-1,S.width,4)===te?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++He,Ue[He]=ge)}Ue.length=He+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let W=0,xe=Ue.length;W<xe;W++){const ge=Ue[W],Xe=Math.floor(ge.start/4),te=Math.ceil(ge.count/4),J=Xe%S.width,de=Math.floor(Xe/S.width),De=te,_=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,de),t.texSubImage2D(s.TEXTURE_2D,0,J,de,De,_,Q,Me,S.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function it(C,S,Q){let Me=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Me=s.TEXTURE_3D);const pe=Pt(C,S),Ue=S.source;t.bindTexture(Me,C.__webglTexture,s.TEXTURE0+Q);const He=n.get(Ue);if(Ue.version!==He.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const _=jt.getPrimaries(jt.workingColorSpace),z=S.colorSpace===zi?null:jt.getPrimaries(S.colorSpace),X=S.colorSpace===zi||_===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let we=M(S.image,!1,i.maxTextureSize);we=Se(S,we);const Ie=r.convert(S.format,S.colorSpace),W=r.convert(S.type);let xe=P(S.internalFormat,Ie,W,S.normalized,S.colorSpace,S.isVideoTexture);Rt(Me,S);let ge;const Xe=S.mipmaps,te=S.isVideoTexture!==!0,J=He.__version===void 0||pe===!0,de=Ue.dataReady,De=b(S,we);if(S.isDepthTexture)xe=v(S.format===ts,S.type),J&&(te?t.texStorage2D(s.TEXTURE_2D,1,xe,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,xe,we.width,we.height,0,Ie,W,null));else if(S.isDataTexture)if(Xe.length>0){te&&J&&t.texStorage2D(s.TEXTURE_2D,De,xe,Xe[0].width,Xe[0].height);for(let _=0,z=Xe.length;_<z;_++)ge=Xe[_],te?de&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,ge.width,ge.height,Ie,W,ge.data):t.texImage2D(s.TEXTURE_2D,_,xe,ge.width,ge.height,0,Ie,W,ge.data);S.generateMipmaps=!1}else te?(J&&t.texStorage2D(s.TEXTURE_2D,De,xe,we.width,we.height),de&&qe(S,we,Ie,W)):t.texImage2D(s.TEXTURE_2D,0,xe,we.width,we.height,0,Ie,W,we.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,xe,Xe[0].width,Xe[0].height,we.depth);for(let _=0,z=Xe.length;_<z;_++)if(ge=Xe[_],S.format!==ui)if(Ie!==null)if(te){if(de)if(S.layerUpdates.size>0){const X=lu(ge.width,ge.height,S.format,S.type);for(const O of S.layerUpdates){const re=ge.data.subarray(O*X/ge.data.BYTES_PER_ELEMENT,(O+1)*X/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,O,ge.width,ge.height,1,Ie,re)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,ge.width,ge.height,we.depth,Ie,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_,xe,ge.width,ge.height,we.depth,0,ge.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?de&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,ge.width,ge.height,we.depth,Ie,W,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_,xe,ge.width,ge.height,we.depth,0,Ie,W,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{te&&J&&t.texStorage2D(s.TEXTURE_2D,De,xe,Xe[0].width,Xe[0].height);for(let _=0,z=Xe.length;_<z;_++)ge=Xe[_],S.format!==ui?Ie!==null?te?de&&t.compressedTexSubImage2D(s.TEXTURE_2D,_,0,0,ge.width,ge.height,Ie,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,_,xe,ge.width,ge.height,0,ge.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?de&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,ge.width,ge.height,Ie,W,ge.data):t.texImage2D(s.TEXTURE_2D,_,xe,ge.width,ge.height,0,Ie,W,ge.data)}else if(S.isDataArrayTexture)if(te){if(J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,xe,we.width,we.height,we.depth),de)if(S.layerUpdates.size>0){const _=lu(we.width,we.height,S.format,S.type);for(const z of S.layerUpdates){const X=we.data.subarray(z*_/we.data.BYTES_PER_ELEMENT,(z+1)*_/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,z,we.width,we.height,1,Ie,W,X)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,W,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,we.width,we.height,we.depth,0,Ie,W,we.data);else if(S.isData3DTexture)te?(J&&t.texStorage3D(s.TEXTURE_3D,De,xe,we.width,we.height,we.depth),de&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,W,we.data)):t.texImage3D(s.TEXTURE_3D,0,xe,we.width,we.height,we.depth,0,Ie,W,we.data);else if(S.isFramebufferTexture){if(J)if(te)t.texStorage2D(s.TEXTURE_2D,De,xe,we.width,we.height);else{let _=we.width,z=we.height;for(let X=0;X<De;X++)t.texImage2D(s.TEXTURE_2D,X,xe,_,z,0,Ie,W,null),_>>=1,z>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const _=s.canvas;if(_.hasAttribute("layoutsubtree")||_.setAttribute("layoutsubtree","true"),we.parentNode!==_){_.appendChild(we),d.add(S),_.onpaint=z=>{const X=z.changedElements;for(const O of d)X.includes(O.image)&&(O.needsUpdate=!0)},_.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,we);else{const X=s.RGBA,O=s.RGBA,re=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,X,O,re,we)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(te&&J){const _=le(Xe[0]);t.texStorage2D(s.TEXTURE_2D,De,xe,_.width,_.height)}for(let _=0,z=Xe.length;_<z;_++)ge=Xe[_],te?de&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,Ie,W,ge):t.texImage2D(s.TEXTURE_2D,_,xe,Ie,W,ge);S.generateMipmaps=!1}else if(te){if(J){const _=le(we);t.texStorage2D(s.TEXTURE_2D,De,xe,_.width,_.height)}de&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,W,we)}else t.texImage2D(s.TEXTURE_2D,0,xe,Ie,W,we);E(S)&&S.mipmapsAutoUpdate===!0&&w(Me),He.__version=Ue.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function lt(C,S,Q){if(S.image.length!==6)return;const Me=Pt(C,S),pe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Q);const Ue=n.get(pe);if(pe.version!==Ue.__version||Me===!0){t.activeTexture(s.TEXTURE0+Q);const He=jt.getPrimaries(jt.workingColorSpace),ve=S.colorSpace===zi?null:jt.getPrimaries(S.colorSpace),we=S.colorSpace===zi||He===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,W=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let O=0;O<6;O++)!Ie&&!W?xe[O]=M(S.image[O],!0,i.maxCubemapSize):xe[O]=W?S.image[O].image:S.image[O],xe[O]=Se(S,xe[O]);const ge=xe[0],Xe=r.convert(S.format,S.colorSpace),te=r.convert(S.type);let J=P(S.internalFormat,Xe,te,S.normalized,S.colorSpace);const de=S.isVideoTexture!==!0,De=Ue.__version===void 0||Me===!0,_=pe.dataReady;let z=b(S,ge);Rt(s.TEXTURE_CUBE_MAP,S);let X;if(S.isDepthTexture){if(J=v(S.format===ts,S.type),De)if(de)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,J,ge.width,ge.height);else for(let O=0;O<6;O++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,J,ge.width,ge.height,0,Xe,te,null)}else if(Ie){de&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,z,J,ge.width,ge.height);for(let O=0;O<6;O++){X=xe[O].mipmaps;for(let re=0;re<X.length;re++){const ce=X[re];S.format!==ui?Xe!==null?de?_&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,ce.width,ce.height,Xe,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,J,ce.width,ce.height,0,ce.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,ce.width,ce.height,Xe,te,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,J,ce.width,ce.height,0,Xe,te,ce.data)}}}else{if(X=S.mipmaps,de&&De){X.length>0&&z++;const O=le(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,z,J,O.width,O.height)}for(let O=0;O<6;O++)if(W){de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,xe[O].width,xe[O].height,Xe,te,xe[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,J,xe[O].width,xe[O].height,0,Xe,te,xe[O].data);for(let re=0;re<X.length;re++){const Ge=X[re].image[O].image;de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Ge.width,Ge.height,Xe,te,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,J,Ge.width,Ge.height,0,Xe,te,Ge.data)}}else{de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Xe,te,xe[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,J,Xe,te,xe[O]);for(let re=0;re<X.length;re++){const ce=X[re];de?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Xe,te,ce.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,J,Xe,te,ce.image[O])}}}E(S)&&S.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),Ue.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function st(C,S,Q,Me,pe,Ue){const He=r.convert(Q.format,Q.colorSpace),ve=r.convert(Q.type),we=P(Q.internalFormat,He,ve,Q.normalized,Q.colorSpace),Ie=n.get(S),W=n.get(Q);if(W.__renderTarget=S,!Ie.__hasExternalTextures){const xe=Math.max(1,S.width>>Ue),ge=Math.max(1,S.height>>Ue);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ue,we,xe,ge,S.depth,0,He,ve,null):t.texImage2D(pe,Ue,we,xe,ge,0,He,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ce(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,pe,W.__webglTexture,0,Ye(S)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,pe,W.__webglTexture,Ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(C,S,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Me=S.depthTexture,pe=Me&&Me.isDepthTexture?Me.type:null,Ue=v(S.stencilBuffer,pe),He=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ce(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye(S),Ue,S.width,S.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye(S),Ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,C)}else{const Me=S.textures;for(let pe=0;pe<Me.length;pe++){const Ue=Me[pe],He=r.convert(Ue.format,Ue.colorSpace),ve=r.convert(Ue.type),we=P(Ue.internalFormat,He,ve,Ue.normalized,Ue.colorSpace);Ce(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye(S),we,S.width,S.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye(S),we,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,we,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(C,S,Q){const Me=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=n.get(S.depthTexture);pe.__renderTarget=S;const Ue=Me?S.depthTexture.image[0]:S.depthTexture.image;(!pe.__webglTexture||Ue.width!==S.width||Ue.height!==S.height)&&(Ue.width=S.width,Ue.height=S.height,S.depthTexture.needsUpdate=!0),Me?Qe(S.depthTexture,0):Ke(S.depthTexture,0);const He=pe.__webglTexture,ve=Ye(S),we=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,Ie=S.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===rs)Ce(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,we,He,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,we,He,0);else if(S.depthTexture.format===ts)Ce(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,we,He,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,we,He,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(C){const S=n.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Me=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Me){const pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Me.removeEventListener("dispose",pe)};Me.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=Me}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(Q)for(let Me=0;Me<6;Me++)dt(S.__webglFramebuffer[Me],C,Me);else C.texture.mipmaps.length>0?dt(S.__webglFramebuffer[0],C,0):dt(S.__webglFramebuffer,C,0);else if(Q){S.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Me]),S.__webglDepthbuffer[Me]===void 0)S.__webglDepthbuffer[Me]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[Me],C,!1);else{const pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=S.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ue)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,C,!1);else{const pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(C,S,Q){const Me=n.get(C);S!==void 0&&st(Me.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ye(C)}function ze(C){const S=C.texture,Q=n.get(C),Me=n.get(S);C.addEventListener("dispose",se),F(C);const pe=C.textures,Ue=C.isWebGLCubeRenderTarget===!0,He=pe.length>1;if(He||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=S.version,o.memory.textures++),Ue){Q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps.length>0){Q.__webglFramebuffer[ve]=[];for(let we=0;we<S.mipmaps.length;we++)Q.__webglFramebuffer[ve][we]=s.createFramebuffer()}else Q.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)Q.__webglFramebuffer[ve]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(He)for(let ve=0,we=pe.length;ve<we;ve++){const Ie=n.get(pe[ve]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Ce(C)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){const we=pe[ve];Q.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ve]);const Ie=r.convert(we.format,we.colorSpace),W=r.convert(we.type),xe=P(we.internalFormat,Ie,W,we.normalized,we.colorSpace,C.isXRRenderTarget===!0),ge=Ye(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,xe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(Q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ue){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)st(Q.__webglFramebuffer[ve][we],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else st(Q.__webglFramebuffer[ve],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);E(S)?w(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(He){for(let ve=0,we=pe.length;ve<we;ve++){const Ie=pe[ve],W=n.get(Ie);let xe=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,W.__webglTexture),Rt(xe,Ie),st(Q.__webglFramebuffer,C,Ie,s.COLOR_ATTACHMENT0+ve,xe,0),E(Ie)&&w(xe)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Me.__webglTexture),Rt(ve,S),S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)st(Q.__webglFramebuffer[we],C,S,s.COLOR_ATTACHMENT0,ve,we);else st(Q.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ve,0);E(S)?w(ve):S.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ye(C)}function L(C){const S=C.textures;for(let Q=0,Me=S.length;Q<Me;Q++){const pe=S[Q];if(E(pe)&&pe.mipmapsAutoUpdate===!0){const Ue=I(C),He=n.get(pe).__webglTexture;t.bindTexture(Ue,He),w(Ue),t.unbindTexture()}}}const tt=[];function je(C){if(C.samples>0){if(Ce(C)===!1){const S=C.textures,Q=C.width,Me=C.height;let pe=s.COLOR_BUFFER_BIT;const Ue=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=n.get(C),ve=S.length>1;if(ve)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const W=n.get(S[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,W,0)}s.blitFramebuffer(0,0,Q,Me,0,0,Q,Me,pe,s.NEAREST),l===!0&&(tt.length=0,tt.push(s.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&tt.push(Ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const W=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,W,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ye(C){return Math.min(i.maxSamples,C.samples)}function Ce(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Se(C,S){const Q=C.colorSpace,Me=C.format,pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Q!==jn&&Q!==zi&&(jt.getTransfer(Q)===on?(Me!==ui||pe!==$n)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",Q)),S}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ut,this.resetTextureUnits=he,this.getTextureUnits=be,this.setTextureUnits=Je,this.setTexture2D=Ke,this.setTexture2DArray=at,this.setTexture3D=gt,this.setTextureCube=Qe,this.rebindTextures=ke,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ce,this.dispose=ie}function rM(s,e){function t(n,i=zi){let r;const o=jt.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===Mc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===od)return s.BYTE;if(n===ad)return s.SHORT;if(n===Ur)return s.UNSIGNED_SHORT;if(n===vc)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===si)return s.FLOAT;if(n===zn)return s.HALF_FLOAT;if(n===hd)return s.ALPHA;if(n===ud)return s.RGB;if(n===ui)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===da)return s.RED;if(n===Sc)return s.RED_INTEGER;if(n===fs)return s.RG;if(n===bc)return s.RG_INTEGER;if(n===wc)return s.RGBA_INTEGER;if(n===Fo||n===Bo||n===zo||n===ko)if(o===on)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===yl||n===Sl||n===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Tl||n===El||n===Al||n===Rl||n===Zo||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Tl)return o===on?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Ll||n===Dl||n===Il||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Gl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wl)return o===on?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Kl||n===Jo||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`;class lM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:oM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cM extends qi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new lM,g={},M=t.getContextAttributes();let E=null,w=null;const I=[],P=[],v=new Oe;let b=null,F=null;const U=new Kn;U.viewport=new un;const q=new Kn;q.viewport=new un;const se=[U,q],j=new rm;let N=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let Ke=I[fe];return Ke===void 0&&(Ke=new Ia,I[fe]=Ke),Ke.getTargetRaySpace()},this.getControllerGrip=function(fe){let Ke=I[fe];return Ke===void 0&&(Ke=new Ia,I[fe]=Ke),Ke.getGripSpace()},this.getHand=function(fe){let Ke=I[fe];return Ke===void 0&&(Ke=new Ia,I[fe]=Ke),Ke.getHandSpace()};function ae(fe){const Ke=P.indexOf(fe.inputSource);if(Ke===-1)return;const at=I[Ke];at!==void 0&&(at.update(fe.inputSource,fe.frame,c||o),at.dispatchEvent({type:fe.type,data:fe.inputSource}))}function Z(){i.removeEventListener("select",ae),i.removeEventListener("selectstart",ae),i.removeEventListener("selectend",ae),i.removeEventListener("squeeze",ae),i.removeEventListener("squeezestart",ae),i.removeEventListener("squeezeend",ae),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",V);for(let fe=0;fe<I.length;fe++){const Ke=P[fe];Ke!==null&&(P[fe]=null,I[fe].disconnect(Ke))}N=null,ie=null,m.reset();for(const fe in g)delete g[fe];if(e.setRenderTarget(E),u=null,f=null,d=null,i=null,w=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),F!==null){const fe=F.camera;fe.fov=F.fov,fe.zoom=F.zoom,fe.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){r=fe,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){a=fe,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(fe){if(i=fe,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",ae),i.addEventListener("selectstart",ae),i.addEventListener("selectend",ae),i.addEventListener("squeeze",ae),i.addEventListener("squeezestart",ae),i.addEventListener("squeezeend",ae),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,gt=null,Qe=null;M.depth&&(Qe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,at=M.stencil?ts:rs,gt=M.stencil?Ws:pi);const xt={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new kn(f.textureWidth,f.textureHeight,{format:ui,type:$n,depthTexture:new ps(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const at={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,at),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new kn(u.framebufferWidth,u.framebufferHeight,{format:ui,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(fe){for(let Ke=0;Ke<fe.removed.length;Ke++){const at=fe.removed[Ke],gt=P.indexOf(at);gt>=0&&(P[gt]=null,I[gt].disconnect(at))}for(let Ke=0;Ke<fe.added.length;Ke++){const at=fe.added[Ke];let gt=P.indexOf(at);if(gt===-1){for(let xt=0;xt<I.length;xt++)if(xt>=P.length){P.push(at),gt=xt;break}else if(P[xt]===null){P[xt]=at,gt=xt;break}if(gt===-1)break}const Qe=I[gt];Qe&&Qe.connect(at)}}function ne(fe,Ke){Ke===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(Ke.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(i===null)return;let Ke=fe.near,at=fe.far;m.texture!==null&&(m.depthNear>0&&(Ke=m.depthNear),m.depthFar>0&&(at=m.depthFar)),j.near=q.near=U.near=Ke,j.far=q.far=U.far=at,(N!==j.near||ie!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,ie=j.far),j.layers.mask=fe.layers.mask|6,U.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const gt=fe.parent,Qe=j.cameras;ne(j,gt);for(let xt=0;xt<Qe.length;xt++)ne(Qe[xt],gt);j.projectionMatrix.copy(U.projectionMatrix),j.projectionMatrixInverse.copy(U.projectionMatrixInverse),F===null&&fe.isPerspectiveCamera&&(F={camera:fe,fov:fe.fov,zoom:fe.zoom}),he(fe,j,gt)};function he(fe,Ke,at){at===null?fe.matrix.copy(Ke.matrixWorld):(fe.matrix.copy(at.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(Ke.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(Ke.projectionMatrix),fe.projectionMatrixInverse.copy(Ke.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Xs*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(fe){l=fe,f!==null&&(f.fixedFoveation=fe),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=fe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(fe){return g[fe]};let be=null;function Je(fe,Ke){if(h=Ke.getViewerPose(c||o),p=Ke,h!==null){const at=h.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let gt=!1;at.length!==j.cameras.length&&(j.cameras.length=0,gt=!0);for(let pt=0;pt<at.length;pt++){const Rt=at[pt];let Pt=null;if(u!==null)Pt=u.getViewport(Rt);else{const qe=d.getViewSubImage(f,Rt);Pt=qe.viewport,pt===0&&(e.setRenderTargetTextures(w,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(w))}let Re=se[pt];Re===void 0&&(Re=new Kn,Re.layers.enable(pt),Re.viewport=new un,se[pt]=Re),Re.matrix.fromArray(Rt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Rt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),pt===0&&(j.matrix.copy(Re.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),gt===!0&&j.cameras.push(Re)}const Qe=i.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const pt=d.getDepthInformation(at[0]);pt&&pt.isValid&&pt.texture&&m.init(pt,i.renderState)}if(Qe&&Qe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let pt=0;pt<at.length;pt++){const Rt=at[pt].camera;if(Rt){let Pt=g[Rt];Pt||(Pt=new Cd,g[Rt]=Pt);const Re=d.getCameraImage(Rt);Pt.sourceTexture=Re}}}}for(let at=0;at<I.length;at++){const gt=P[at],Qe=I[at];gt!==null&&Qe!==void 0&&Qe.update(gt,Ke,c||o)}be&&be(fe,Ke),Ke.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ke}),p=null}const ut=new Kd;ut.setAnimationLoop(Je),this.setAnimationLoop=function(fe){be=fe},this.dispose=function(){}}}const hM=new kt,rf=new Xt;rf.set(-1,0,0,0,1,0,0,0,1);function uM(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,E,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),E=M.envMap,w=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dM(s,e,t,n){let i={},r={};function o(M,E){const w=E.program;n.uniformBlockBinding(M,w,i[M.id])}function a(M,E){let w=i[M.id];w===void 0&&(p(M),w=l(M),i[M.id]=w,M.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(M,I);const P=e.render.frame;r[M.id]!==P&&(c(M),r[M.id]=P)}function l(M){const E=s.createBuffer(),w=M.__size,I=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,w,I),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(M){const E=i[M.id],w=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,v=w.length;P<v;P++){const b=w[P];if(Array.isArray(b))for(let F=0,U=b.length;F<U;F++)h(b[F],P,F,I);else h(b,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,E,w,I){if(f(M,E,w,I)===!0){const P=M.__offset,v=M.value;if(Array.isArray(v)){let b=0;for(let F=0;F<v.length;F++){const U=v[F],q=x(U,!0);d(U,M.__data,b),b+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,M.__data)}}function d(M,E,w){typeof M=="number"||typeof M=="boolean"?E[w]=M:M.isMatrix3?(E[w]=M.elements[0],E[w+1]=M.elements[1],E[w+2]=M.elements[2],E[w+3]=0,E[w+4]=M.elements[3],E[w+5]=M.elements[4],E[w+6]=M.elements[5],E[w+7]=0,E[w+8]=M.elements[6],E[w+9]=M.elements[7],E[w+10]=M.elements[8],E[w+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-w),w):M.toArray(E,w)}function f(M,E,w,I){const P=M.value,v=E+"_"+w;if(Array.isArray(P)){I[v]===void 0&&(I[v]=[]);const b=I[v];let F=!1;for(let U=0;U<P.length;U++)u(P[U],b,U)===!0&&(F=!0);return F}return u(P,I,v)}function u(M,E,w){if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:ArrayBuffer.isView(M)?E[w]=M.slice():E[w]=M.clone(),!0;{const I=E[w];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return E[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function p(M){const E=M.uniforms;let w=0;const I=16;for(let v=0,b=E.length;v<b;v++){const F=Array.isArray(E[v])?E[v]:[E[v]];for(let U=0,q=F.length;U<q;U++){const se=F[U],j=Array.isArray(se.value)?se.value:[se.value],N=Array.isArray(E[v])||Array.isArray(se.value);let ie=w;for(let Z=0,V=j.length;Z<V;Z++){const ne=j[Z],he=x(ne,N),be=w%I,Je=be%he.boundary,ut=be+Je;w+=Je,ut!==0&&I-ut<he.storage&&(w+=I-ut),Z===0&&(ie=w),w+=he.storage}const ae=se.type==="int"?Int32Array:se.type==="uint"?Uint32Array:Float32Array;se.__data=new ae((w-ie)/Float32Array.BYTES_PER_ELEMENT),se.__offset=ie}}const P=w%I;return P>0&&(w+=I-P),M.__size=w,M.__cache={},this}function x(M,E){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(M){const E=M.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:g}}const fM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function pM(){return Mi===null&&(Mi=new pa(fM,16,16,fs,zn),Mi.name="DFG_LUT",Mi.minFilter=In,Mi.magFilter=In,Mi.wrapS=Xn,Mi.wrapT=Xn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class mM{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=$n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=u,m=new Set([wc,bc,Sc]),g=new Set([$n,pi,Ur,Ws,Mc,yc]),M=new Uint32Array(4),E=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const v=[],b=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let q=!1,se=null,j=null,N=null,ie=null;this._outputColorSpace=bn;let ae=0,Z=0,V=null,ne=-1,he=null;const be=new un,Je=new un;let ut=null;const fe=new At(0);let Ke=0,at=t.width,gt=t.height,Qe=1,xt=null,qt=null;const pt=new un(0,0,at,gt),Rt=new un(0,0,at,gt);let Pt=!1;const Re=new Vr,qe=new Ic;let it=!1,lt=!1;const st=new kt,ct=new k,dt=new un,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ze(){return V===null?Qe:1}let L=n;function tt(y,R){return t.getContext(y,R)}let je,Ye,Ce,nt,Se,le,C,S,Q,Me,pe,Ue,He,ve,we,Ie,W,xe,ge,Xe,te,J,de;try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",z,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",O,!1),L===null){const R="webgl2";if(L=tt(R,y),L===null)throw tt(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(y){throw t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",O,!1),Ht("WebGLRenderer: "+y.message),y}function De(){je=new xx(L),je.init(),te=new rM(L,je),Ye=new ax(L,je,e,te),Ce=new iM(L,je),Ye.reversedDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),j=L.createFramebuffer(),N=L.createFramebuffer(),ie=L.createFramebuffer(),nt=new yx(L),Se=new Vv,le=new sM(L,je,Ce,Se,Ye,te,nt),C=new _x(U),S=new bm(L),J=new rx(L,S),Q=new vx(L,S,nt,J),Me=new bx(L,Q,S,J,nt),xe=new Sx(L,Ye,le),we=new lx(Se),pe=new Gv(U,C,je,Ye,J,we),Ue=new uM(U,Se),He=new Xv,ve=new $v(je),W=new sx(U,C,Ce,Me,p,l),Ie=new nM(U,Me,Ye),de=new dM(L,nt,Ye,Ce),ge=new ox(L,je,nt),Xe=new Mx(L,je,nt),nt.programs=pe.programs,U.capabilities=Ye,U.extensions=je,U.properties=Se,U.renderLists=He,U.shadowMap=Ie,U.state=Ce,U.info=nt}x!==$n&&(F=new Tx(x,t.width,t.height,a,i,r));const _=new cM(U,L);this.xr=_,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Qe},this.setPixelRatio=function(y){y!==void 0&&(Qe=y,this.setSize(at,gt,!1))},this.getSize=function(y){return y.set(at,gt)},this.setSize=function(y,R,Y=!0){if(_.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=y,gt=R,t.width=Math.floor(y*Qe),t.height=Math.floor(R*Qe),Y===!0&&(t.style.width=y+"px",t.style.height=R+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(at*Qe,gt*Qe).floor()},this.setDrawingBufferSize=function(y,R,Y){at=y,gt=R,Qe=Y,t.width=Math.floor(y*Y),t.height=Math.floor(R*Y),this.setViewport(0,0,y,R)},this.setEffects=function(y){if(x===$n){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let R=0;R<y.length;R++)if(y[R].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(be)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,R,Y,B){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,R,Y,B),Ce.viewport(be.copy(pt).multiplyScalar(ze()).round())},this.getScissor=function(y){return y.copy(Rt)},this.setScissor=function(y,R,Y,B){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,R,Y,B),Ce.scissor(Je.copy(Rt).multiplyScalar(ze()).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(y){Ce.setScissorTest(Pt=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){qt=y},this.getClearColor=function(y){return y.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(y=!0,R=!0,Y=!0){let B=0;if(y){let K=!1;if(V!==null){const me=V.texture.format;K=m.has(me)}if(K){const me=V.texture.type,Ne=g.has(me),Fe=W.getClearColor(),Be=W.getClearAlpha(),et=Fe.r,ft=Fe.g,_t=Fe.b;Ne?(M[0]=et,M[1]=ft,M[2]=_t,M[3]=Be,L.clearBufferuiv(L.COLOR,0,M)):(E[0]=et,E[1]=ft,E[2]=_t,E[3]=Be,L.clearBufferiv(L.COLOR,0,E))}else B|=L.COLOR_BUFFER_BIT}R&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),se=y},this.dispose=function(){t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",O,!1),W.dispose(),He.dispose(),ve.dispose(),le.dispose(),Se.dispose(),C.dispose(),Me.dispose(),Q.dispose(),J.dispose(),de.dispose(),pe.dispose(),_.dispose(),_.removeEventListener("sessionstart",Ft),_.removeEventListener("sessionend",Lt),Ze.stop()};function z(y){y.preventDefault(),jo("WebGLRenderer: Context Lost."),q=!0}function X(){jo("WebGLRenderer: Context Restored."),q=!1;const y=nt.autoReset,R=Ie.enabled,Y=Ie.autoUpdate,B=Ie.needsUpdate,K=Ie.type;De(),nt.autoReset=y,Ie.enabled=R,Ie.autoUpdate=Y,Ie.needsUpdate=B,Ie.type=K}function O(y){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function re(y){const R=y.target;R.removeEventListener("dispose",re),ce(R)}function ce(y){Ge(y),Se.remove(y)}function Ge(y){const R=Se.get(y).programs;R!==void 0&&(R.forEach(function(Y){pe.releaseProgram(Y)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,Y,B,K,me){R===null&&(R=ye);const Ne=K.isMesh&&K.matrixWorld.determinantAffine()<0,Fe=ee(y,R,Y,B,K);Ce.setMaterial(B,Ne);let Be=Y.index,et=1;if(B.wireframe===!0){if(Be=Q.getWireframeAttribute(Y),Be===void 0)return;et=2}const ft=Y.drawRange,_t=Y.attributes.position;let ht=ft.start*et,Ot=(ft.start+ft.count)*et;me!==null&&(ht=Math.max(ht,me.start*et),Ot=Math.min(Ot,(me.start+me.count)*et)),Be!==null?(ht=Math.max(ht,0),Ot=Math.min(Ot,Be.count)):_t!=null&&(ht=Math.max(ht,0),Ot=Math.min(Ot,_t.count));const Bt=Ot-ht;if(Bt<0||Bt===1/0)return;J.setup(K,B,Fe,Y,Be);let It,Gt=ge;if(Be!==null&&(It=S.get(Be),Gt=Xe,Gt.setIndex(It)),K.isMesh)B.wireframe===!0?(Ce.setLineWidth(B.wireframeLinewidth*ze()),Gt.setMode(L.LINES)):Gt.setMode(L.TRIANGLES);else if(K.isLine){let cn=B.linewidth;cn===void 0&&(cn=1),Ce.setLineWidth(cn*ze()),K.isLineSegments?Gt.setMode(L.LINES):K.isLineLoop?Gt.setMode(L.LINE_LOOP):Gt.setMode(L.LINE_STRIP)}else K.isPoints?Gt.setMode(L.POINTS):K.isSprite&&Gt.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const cn=K._multiDrawStarts,G=K._multiDrawCounts,Ee=K._multiDrawCount,Pe=Be?S.get(Be).bytesPerElement:1,Ct=Se.get(B).currentProgram.getUniforms();for(let Et=0;Et<Ee;Et++)Ct.setValue(L,"_gl_DrawID",Et),Gt.render(cn[Et]/Pe,G[Et])}else if(K.isInstancedMesh)Gt.renderInstances(ht,Bt,K.count);else if(Y.isInstancedBufferGeometry){const cn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,G=Math.min(Y.instanceCount,cn);Gt.renderInstances(ht,Bt,G)}else Gt.render(ht,Bt)};function Tt(y,R,Y,B){se!==null&&y.isNodeMaterial&&se.setObject(B,y),it===!0&&we.setState(y,Y,!1),y.transparent===!0&&y.side===mn&&y.forceSinglePass===!1?(y.side=Bn,y.needsUpdate=!0,H(y,R,B),y.side=ss,y.needsUpdate=!0,H(y,R,B),y.side=mn):H(y,R,B)}this.compile=function(y,R,Y=null){Y===null&&(Y=y),se!==null&&se.renderStart(y,R,Y),P=ve.get(Y),P.init(R),b.push(P),Y.traverseVisible(function(K){K.isLight&&K.layers.test(R.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),y!==Y&&y.traverseVisible(function(K){K.isLight&&K.layers.test(R.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights(),se!==null&&se.updateLights(P.state.lightsArray),lt=this.localClippingEnabled,it=we.init(this.clippingPlanes,lt),it===!0&&we.setGlobalState(this.clippingPlanes,R),se!==null&&Ie.render(P.state.shadowsArray,Y,R);const B=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const me=K.material;if(me)if(Array.isArray(me))for(let Ne=0;Ne<me.length;Ne++){const Fe=me[Ne];Tt(Fe,Y,R,K),B.add(Fe)}else Tt(me,Y,R,K),B.add(me)}),P=b.pop(),se!==null&&se.renderEnd(),B},this.compileAsync=function(y,R,Y=null){const B=this.compile(y,R,Y);return new Promise(K=>{function me(){if(B.forEach(function(Ne){const Be=Se.get(Ne).currentProgram;(Be===void 0||Be.isReady())&&B.delete(Ne)}),B.size===0){K(y);return}setTimeout(me,10)}je.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Dt=null;function Mt(y){Dt&&Dt(y)}function Ft(){Ze.stop()}function Lt(){Ze.start()}const Ze=new Kd;Ze.setAnimationLoop(Mt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(y){Dt=y,_.setAnimationLoop(y),y===null?Ze.stop():Ze.start()},_.addEventListener("sessionstart",Ft),_.addEventListener("sessionend",Lt),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;se!==null&&se.renderStart(y,R);const Y=_.enabled===!0&&_.isPresenting===!0,B=F!==null&&(V===null||Y)&&F.begin(U,V);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(_.cameraAutoUpdate===!0&&_.updateCamera(R),R=_.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,R,V),P=ve.get(y,b.length),P.init(R),P.state.textureUnits=le.getTextureUnits(),b.push(P),st.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?qe.setFromArrayCamera(R):Re.setFromProjectionMatrix(st,di,R.reversedDepth),lt=this.localClippingEnabled,it=we.init(this.clippingPlanes,lt),I=He.get(y,v.length),I.init(),v.push(I),this.info.render.frame++,_.enabled===!0&&_.isPresenting===!0){const Ne=U.xr.getDepthSensingMesh();Ne!==null&&yt(Ne,R,-1/0,U.sortObjects)}yt(y,R,0,U.sortObjects),I.finish(),se!==null&&se.updateLights(P.state.lightsArray),U.sortObjects===!0&&I.sort(xt,qt),ke=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,ke&&W.addToRenderList(I,y),this.info.autoReset===!0&&this.info.reset(),it===!0&&we.beginShadows();const K=P.state.shadowsArray;if(Ie.render(K,y,R),it===!0&&we.endShadows(),(B&&F.hasRenderPass())===!1){const Ne=I.opaque,Fe=I.transmissive;if(P.setupLights(),R.isArrayCamera){const Be=R.cameras;if(Fe.length>0)for(let et=0,ft=Be.length;et<ft;et++){const _t=Be[et];yn(Ne,Fe,y,_t)}ke&&W.render(y);for(let et=0,ft=Be.length;et<ft;et++){const _t=Be[et];rn(I,y,_t,_t.viewport)}}else Fe.length>0&&yn(Ne,Fe,y,R),ke&&W.render(y),rn(I,y,R)}V!==null&&Z===0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V)),B&&F.end(U),y.isScene===!0&&y.onAfterRender(U,y,R),J.resetDefaultState(),ne=-1,he=null,b.pop(),b.length>0?(P=b[b.length-1],le.setTextureUnits(P.state.textureUnits),it===!0&&we.setGlobalState(U.clippingPlanes,P.state.camera)):P=null,v.pop(),v.length>0?I=v[v.length-1]:I=null,se!==null&&se.renderEnd()};function yt(y,R,Y,B){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){const Ne=R.isArrayCamera?qe:Re;if(!y.frustumCulled||y.intersectsFrustum(Ne)){B&&dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);const Fe=Me.update(y),Be=y.material;Be.visible&&I.push(y,Fe,Be,Y,dt.z,null,R)}}else if(y.isMesh||y.isLine||y.isPoints){const Ne=R.isArrayCamera?qe:Re;if(!y.frustumCulled||y.intersectsFrustum(Ne)){const Fe=Me.update(y),Be=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),dt.copy(y.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),dt.copy(Fe.boundingSphere.center)),dt.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(Be)){const et=Fe.groups;for(let ft=0,_t=et.length;ft<_t;ft++){const ht=et[ft],Ot=Be[ht.materialIndex];Ot&&Ot.visible&&I.push(y,Fe,Ot,Y,dt.z,ht,R)}}else Be.visible&&I.push(y,Fe,Be,Y,dt.z,null,R)}}}const me=y.children;for(let Ne=0,Fe=me.length;Ne<Fe;Ne++)yt(me[Ne],R,Y,B)}function rn(y,R,Y,B){const{opaque:K,transmissive:me,transparent:Ne}=y;P.setupLightsView(Y),it===!0&&we.setGlobalState(U.clippingPlanes,Y),B&&Ce.viewport(be.copy(B)),K.length>0&&hn(K,R,Y),me.length>0&&hn(me,R,Y),Ne.length>0&&hn(Ne,R,Y),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function yn(y,R,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[B.id]===void 0){const ht=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[B.id]=new kn(1,1,{generateMipmaps:!0,type:ht?zn:$n,minFilter:Ti,samples:Math.max(4,Ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const me=P.state.transmissionRenderTarget[B.id],Ne=B.viewport||be;me.setSize(Ne.z*U.transmissionResolutionScale,Ne.w*U.transmissionResolutionScale);const Fe=U.getRenderTarget(),Be=U.getActiveCubeFace(),et=U.getActiveMipmapLevel();U.setRenderTarget(me),U.getClearColor(fe),Ke=U.getClearAlpha(),Ke<1&&U.setClearColor(16777215,.5),U.clear(),ke&&W.render(Y);const ft=U.toneMapping;U.toneMapping=Vi;const _t=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),P.setupLightsView(B),it===!0&&we.setGlobalState(U.clippingPlanes,B),hn(y,Y,B),le.updateMultisampleRenderTarget(me),le.updateRenderTargetMipmap(me),je.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ot=0,Bt=R.length;Ot<Bt;Ot++){const It=R[Ot],{object:Gt,geometry:cn,material:G,group:Ee}=It;if(G.side===mn&&Gt.layers.test(B.layers)){const Pe=G.side;G.side=Bn,G.needsUpdate=!0,T(Gt,Y,B,cn,G,Ee),G.side=Pe,G.needsUpdate=!0,ht=!0}}ht===!0&&(le.updateMultisampleRenderTarget(me),le.updateRenderTargetMipmap(me))}U.setRenderTarget(Fe,Be,et),U.setClearColor(fe,Ke),_t!==void 0&&(B.viewport=_t),U.toneMapping=ft}function hn(y,R,Y){const B=R.isScene===!0?R.overrideMaterial:null;for(let K=0,me=y.length;K<me;K++){const Ne=y[K],{object:Fe,geometry:Be,group:et}=Ne;let ft=Ne.material;ft.allowOverride===!0&&B!==null&&(ft=B),Fe.layers.test(Y.layers)&&T(Fe,R,Y,Be,ft,et)}}function T(y,R,Y,B,K,me){se!==null&&K.isNodeMaterial&&se.setObject(y,K),y.onBeforeRender(U,R,Y,B,K,me),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(U,R,Y,B,y,me),K.transparent===!0&&K.side===mn&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,U.renderBufferDirect(Y,R,B,K,y,me),K.side=ss,K.needsUpdate=!0,U.renderBufferDirect(Y,R,B,K,y,me),K.side=mn):U.renderBufferDirect(Y,R,B,K,y,me),y.onAfterRender(U,R,Y,B,K,me)}function D(y){let R=0;for(const Y of y)Y.texture!==null&&R++;return R}function H(y,R,Y){R.isScene!==!0&&(R=ye);const B=Se.get(y),K=P.state.lights,me=P.state.shadowsArray,Ne=K.state.version,Fe=pe.getParameters(y,K.state,me,R,Y,P.state.lightProbeGridArray),Be=pe.getProgramCacheKey(Fe);let et=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;const ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=C.get(y.envMap||B.environment,ft),B.envMapRotation=B.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,et===void 0&&(y.addEventListener("dispose",re),et=new Map,B.programs=et,B.programVariants=new Map);let _t=et.get(Be);if(_t!==void 0){if(B.currentProgram===_t&&B.lightsStateVersion===Ne)return Te(y,Fe),_t}else Fe.uniforms=pe.getUniforms(y),se!==null&&y.isNodeMaterial&&se.build(y,Y,Fe),y.onBeforeCompile(Fe,U),_t=pe.acquireProgram(Fe,Be),et.set(Be,_t),B.uniforms=Fe.uniforms;const ht=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ht.clippingPlanes=we.uniform),Te(y,Fe),B.needsLights=_e(y),B.lightsStateVersion=Ne,B.needsLights&&(ht.ambientLightColor.value=K.state.ambient,ht.lightProbe.value=K.state.probe,ht.sunLights.value=K.state.sun,ht.sunLightShadows.value=K.state.sunShadow,ht.directionalLights.value=K.state.directional,ht.directionalLightShadows.value=K.state.directionalShadow,ht.spotLights.value=K.state.spot,ht.spotLightShadows.value=K.state.spotShadow,ht.rectAreaLights.value=K.state.rectArea,ht.ltc_1.value=K.state.rectAreaLTC1,ht.ltc_2.value=K.state.rectAreaLTC2,ht.pointLights.value=K.state.point,ht.pointLightShadows.value=K.state.pointShadow,ht.hemisphereLights.value=K.state.hemi,ht.sunShadowMatrix.value=K.state.sunShadowMatrix,ht.sunShadowCascade.value=K.state.sunShadowCascade,ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ht.spotLightMatrix.value=K.state.spotLightMatrix,ht.spotLightMap.value=K.state.spotLightMap,ht.pointShadowMatrix.value=K.state.pointShadowMatrix),B.numLightProbeGrids=D(P.state.lightProbeGridArray),B.currentProgram=_t,B.uniformsList=null,_t}function $(y,R,Y,B,K){const me=Se.get(y),Ne=me.currentProgram.id+","+B+","+K;let Fe=me.programVariants.get(Ne);return Fe===void 0?(Fe=H(y,R,Y),me.programVariants.set(Ne,Fe)):(me.currentProgram=Fe,me.uniformsList=null,me.outputColorSpace=B,me.toneMapping=K),Fe}function ue(y){if(y.uniformsList===null){const R=y.currentProgram.getUniforms();y.uniformsList=Go.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function Te(y,R){const Y=Se.get(y);Y.outputColorSpace=R.outputColorSpace,Y.batching=R.batching,Y.batchingColor=R.batchingColor,Y.instancing=R.instancing,Y.instancingColor=R.instancingColor,Y.instancingMorph=R.instancingMorph,Y.skinning=R.skinning,Y.morphTargets=R.morphTargets,Y.morphNormals=R.morphNormals,Y.morphColors=R.morphColors,Y.morphTargetsCount=R.morphTargetsCount,Y.numClippingPlanes=R.numClippingPlanes,Y.numIntersection=R.numClipIntersection,Y.vertexAlphas=R.vertexAlphas,Y.vertexTangents=R.vertexTangents,Y.toneMapping=R.toneMapping}function ee(y,R,Y,B,K){R.isScene!==!0&&(R=ye),le.resetTextureUnits();const me=R.fog,Ne=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,Fe=V===null?U.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:jt.workingColorSpace,Be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,et=C.get(B.envMap||Ne,Be),ft=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,_t=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ht=!!Y.morphAttributes.position,Ot=!!Y.morphAttributes.normal,Bt=!!Y.morphAttributes.color;let It=Vi;B.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(It=U.toneMapping);const Gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,cn=Gt!==void 0?Gt.length:0,G=Se.get(B),Ee=P.state.lights;if(it===!0&&(lt===!0||y!==he)){const ot=y===he&&B.id===ne;we.setState(B,y,ot)}let Pe=!1,Ct=!1;B.version===G.__version?G.needsLights&&G.lightsStateVersion!==Ee.state.version||K.isBatchedMesh&&G.batching===!1||!K.isBatchedMesh&&G.batching===!0||K.isBatchedMesh&&G.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&G.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&G.instancing===!1||!K.isInstancedMesh&&G.instancing===!0||K.isSkinnedMesh&&G.skinning===!1||!K.isSkinnedMesh&&G.skinning===!0||K.isInstancedMesh&&G.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&G.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&G.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&G.instancingMorph===!1&&K.morphTexture!==null||G.envMap!==et||B.fog===!0&&G.fog!==me||G.numClippingPlanes!==void 0&&(G.numClippingPlanes!==we.numPlanes||G.numIntersection!==we.numIntersection)||G.vertexAlphas!==ft||G.vertexTangents!==_t||G.morphTargets!==ht||G.morphNormals!==Ot||G.morphColors!==Bt||G.morphTargetsCount!==cn||G.numLightProbeGrids!==D(P.state.lightProbeGridArray)?Pe=!0:(G.outputColorSpace!==Fe||G.toneMapping!==It)&&(Ct=!0):(Pe=!0,G.__version=B.version);let Et=G.currentProgram;(Pe===!0||Ct===!0)&&(Et=Ct===!0?$(B,R,K,Fe,It):H(B,R,K),se&&B.isNodeMaterial&&se.onUpdateProgram(B,Et,G));let bt=!1,We=!1,mt=!1;const Ve=Et.getUniforms(),vt=G.uniforms;if(Ce.useProgram(Et.program)&&(bt=!0,We=!0,mt=!0),B.id!==ne&&(ne=B.id,We=!0),bt||he!==y){Ce.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ve.setValue(L,"projectionMatrix",y.projectionMatrix),Ve.setValue(L,"viewMatrix",y.matrixWorldInverse);const Ut=Ve.map.cameraPosition;Ut!==void 0&&Ut.setValue(L,ct.setFromMatrixPosition(y.matrixWorld)),Ye.logarithmicDepthBuffer&&Ve.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ve.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),he!==y&&(he=y,We=!0,mt=!0)}if(G.needsLights&&(Ee.state.sunShadowMap.length>0&&Ve.setValue(L,"sunShadowMap",Ee.state.sunShadowMap,le),Ee.state.directionalShadowMap.length>0&&Ve.setValue(L,"directionalShadowMap",Ee.state.directionalShadowMap,le),Ee.state.spotShadowMap.length>0&&Ve.setValue(L,"spotShadowMap",Ee.state.spotShadowMap,le),Ee.state.pointShadowMap.length>0&&Ve.setValue(L,"pointShadowMap",Ee.state.pointShadowMap,le)),K.isSkinnedMesh){Ve.setOptional(L,K,"bindMatrix"),Ve.setOptional(L,K,"bindMatrixInverse");const ot=K.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),Ve.setValue(L,"boneTexture",ot.boneTexture,le))}K.isBatchedMesh&&(Ve.setOptional(L,K,"batchingTexture"),Ve.setValue(L,"batchingTexture",K._matricesTexture,le),Ve.setOptional(L,K,"batchingIdTexture"),Ve.setValue(L,"batchingIdTexture",K._indirectTexture,le),Ve.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(L,"batchingColorTexture",K._colorsTexture,le));const $e=Y.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&xe.update(K,Y,Et),(We||G.receiveShadow!==K.receiveShadow)&&(G.receiveShadow=K.receiveShadow,Ve.setValue(L,"receiveShadow",K.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(vt.envMapIntensity.value=R.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=pM()),We){if(Ve.setValue(L,"toneMappingExposure",U.toneMappingExposure),G.needsLights&&A(vt,mt),me&&B.fog===!0&&Ue.refreshFogUniforms(vt,me),Ue.refreshMaterialUniforms(vt,B,Qe,gt,P.state.transmissionRenderTarget[y.id]),G.needsLights&&G.numLightProbeGrids>0){const ot=w;let Ut=0;for(const Yt of P.state.lightProbeGridArray)Yt.texture!==null&&(ot.textures[Ut]=Yt.texture,ot.min[Ut]=Yt.boundingBox.min,ot.max[Ut]=Yt.boundingBox.max,ot.resolution[Ut]=Yt.resolution,Ut++);for(const Yt in ot)ot[Yt].length=Ut;vt.probesSH.value=ot.textures,vt.probesMin.value=ot.min,vt.probesMax.value=ot.max,vt.probesResolution.value=ot.resolution}Go.upload(L,ue(G),vt,le)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Go.upload(L,ue(G),vt,le),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ve.setValue(L,"center",K.center),Ve.setValue(L,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(L,"normalMatrix",K.normalMatrix),Ve.setValue(L,"modelMatrix",K.matrixWorld),B.uniformsGroups!==void 0){const ot=B.uniformsGroups;for(let Ut=0,Yt=ot.length;Ut<Yt;Ut++){const dn=ot[Ut];de.update(dn,Et),de.bind(dn,Et)}}return Et}function A(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.sunLights.needsUpdate=R,y.sunLightShadows.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function _e(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(y,R,Y){const B=Se.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Se.get(y.texture).__webglTexture=R,Se.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,R){const Y=Se.get(y);Y.__webglFramebuffer=R,Y.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,Y=0){V=y,ae=R,Z=Y;let B=null,K=!1,me=!1;if(y){const Fe=Se.get(y);if(Fe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(L.FRAMEBUFFER,Fe.__webglFramebuffer),be.copy(y.viewport),Je.copy(y.scissor),ut=y.scissorTest,Ce.viewport(be),Ce.scissor(Je),Ce.setScissorTest(ut),ne=-1;return}else if(Fe.__webglFramebuffer===void 0)le.setupRenderTarget(y);else if(Fe.__hasExternalTextures)le.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ft=y.depthTexture;if(Fe.__boundDepthTexture!==ft){if(ft!==null&&Se.has(ft)&&(y.width!==ft.image.width||y.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(y)}}const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const et=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(et[R])?B=et[R][Y]:B=et[R],K=!0):y.samples>0&&le.useMultisampledRTT(y)===!1?B=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(et)?B=et[Y]:B=et,be.copy(y.viewport),Je.copy(y.scissor),ut=y.scissorTest}else be.copy(pt).multiplyScalar(Qe).floor(),Je.copy(Rt).multiplyScalar(Qe).floor(),ut=Pt;if(Y!==0&&(B=j),Ce.bindFramebuffer(L.FRAMEBUFFER,B)&&Ce.drawBuffers(y,B),Ce.viewport(be),Ce.scissor(Je),Ce.setScissorTest(ut),K){const Fe=Se.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,Fe.__webglTexture,Y)}else if(me){const Fe=R;for(let Be=0;Be<y.textures.length;Be++){const et=Se.get(y.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,et.__webglTexture,Y,Fe)}}else if(y!==null&&Y!==0){const Fe=Se.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,Y)}ne=-1};function oe(y){const R=Se.get(y);return(R.__readFormat!==y.format||R.__readType!==y.type)&&(R.__readFormat=y.format,R.__readType=y.type,R.__formatReadable=Ye.textureFormatReadable(y.format),R.__typeReadable=Ye.textureTypeReadable(y.type)),R}this.readRenderTargetPixels=function(y,R,Y,B,K,me,Ne,Fe=0){if(!(y&&y.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne],Array.isArray(Be)&&(Be=Be[0])),Be){Ce.bindFramebuffer(L.FRAMEBUFFER,Be);try{const et=y.textures[Fe],ft=et.format,_t=et.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe);const ht=oe(et);if(ht.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ht.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-B&&Y>=0&&Y<=y.height-K&&L.readPixels(R,Y,B,K,te.convert(ft),te.convert(_t),me)}finally{const et=V!==null?Se.get(V).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(y,R,Y,B,K,me,Ne,Fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne],Array.isArray(Be)&&(Be=Be[0])),Be)if(R>=0&&R<=y.width-B&&Y>=0&&Y<=y.height-K){Ce.bindFramebuffer(L.FRAMEBUFFER,Be);const et=y.textures[Fe],ft=et.format,_t=et.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe);const ht=oe(et);if(ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(R,Y,B,K,te.convert(ft),te.convert(_t),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Bt=V!==null?Se.get(V).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,Bt);const It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lp(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ot),L.deleteSync(It),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,R=null,Y=0){const B=Math.pow(2,-Y),K=Math.floor(y.image.width*B),me=Math.floor(y.image.height*B),Ne=R!==null?R.x:0,Fe=R!==null?R.y:0;le.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ne,Fe,K,me),Ce.unbindTexture()},this.copyTextureToTexture=function(y,R,Y=null,B=null,K=0,me=0){let Ne,Fe,Be,et,ft,_t,ht,Ot,Bt;const It=y.isCompressedTexture?y.mipmaps[me]:y.image;if(Y!==null)Ne=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,Be=Y.isBox3?Y.max.z-Y.min.z:1,et=Y.min.x,ft=Y.min.y,_t=Y.isBox3?Y.min.z:0;else{const Ve=Math.pow(2,-K);Ne=Math.floor(It.width*Ve),Fe=Math.floor(It.height*Ve),y.isDataArrayTexture?Be=It.depth:y.isData3DTexture?Be=Math.floor(It.depth*Ve):Be=1,et=0,ft=0,_t=0}B!==null?(ht=B.x,Ot=B.y,Bt=B.z):(ht=0,Ot=0,Bt=0);const Gt=te.convert(R.format),cn=te.convert(R.type);let G;R.isData3DTexture?(le.setTexture3D(R,0),G=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(le.setTexture2DArray(R,0),G=L.TEXTURE_2D_ARRAY):(le.setTexture2D(R,0),G=L.TEXTURE_2D),Ce.activeTexture(L.TEXTURE0),Ce.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),Ce.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Ce.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);const Ee=Ce.getParameter(L.UNPACK_ROW_LENGTH),Pe=Ce.getParameter(L.UNPACK_IMAGE_HEIGHT),Ct=Ce.getParameter(L.UNPACK_SKIP_PIXELS),Et=Ce.getParameter(L.UNPACK_SKIP_ROWS),bt=Ce.getParameter(L.UNPACK_SKIP_IMAGES);Ce.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),Ce.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),Ce.pixelStorei(L.UNPACK_SKIP_PIXELS,et),Ce.pixelStorei(L.UNPACK_SKIP_ROWS,ft),Ce.pixelStorei(L.UNPACK_SKIP_IMAGES,_t);const We=y.isDataArrayTexture||y.isData3DTexture,mt=R.isDataArrayTexture||R.isData3DTexture;if(y.isDepthTexture){const Ve=Se.get(y),vt=Se.get(R),$e=Se.get(Ve.__renderTarget),ot=Se.get(vt.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,$e.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Ut=0;Ut<Be;Ut++)We&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(y).__webglTexture,K,_t+Ut),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(R).__webglTexture,me,Bt+Ut)),L.blitFramebuffer(et,ft,et+Ne,ft+Fe,ht,Ot,ht+Ne,Ot+Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||y.isRenderTargetTexture||Se.has(y)){const Ve=Se.get(y),vt=Se.get(R);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,N),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,ie);for(let $e=0;$e<Be;$e++)We?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,K,_t+$e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,K),mt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.__webglTexture,me,Bt+$e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vt.__webglTexture,me),K!==0?L.blitFramebuffer(et,ft,et+Ne,ft+Fe,ht,Ot,ht+Ne,Ot+Fe,L.COLOR_BUFFER_BIT,L.NEAREST):mt?L.copyTexSubImage3D(G,me,ht,Ot,Bt+$e,et,ft,Ne,Fe):L.copyTexSubImage2D(G,me,ht,Ot,et,ft,Ne,Fe);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(G,me,ht,Ot,Bt,Ne,Fe,Be,Gt,cn,It.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(G,me,ht,Ot,Bt,Ne,Fe,Be,Gt,It.data):L.texSubImage3D(G,me,ht,Ot,Bt,Ne,Fe,Be,Gt,cn,It):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,ht,Ot,Ne,Fe,Gt,cn,It.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,ht,Ot,It.width,It.height,Gt,It.data):L.texSubImage2D(L.TEXTURE_2D,me,ht,Ot,Ne,Fe,Gt,cn,It);Ce.pixelStorei(L.UNPACK_ROW_LENGTH,Ee),Ce.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe),Ce.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),Ce.pixelStorei(L.UNPACK_SKIP_ROWS,Et),Ce.pixelStorei(L.UNPACK_SKIP_IMAGES,bt),me===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&L.generateMipmap(G),Ce.unbindTexture()},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&le.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?le.setTextureCube(y,0):y.isData3DTexture?le.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?le.setTexture2DArray(y,0):le.setTexture2D(y,0),Ce.unbindTexture()},this.resetState=function(){ae=0,Z=0,V=null,Ce.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const Pu={type:"change"},Wc={type:"start"},of={type:"end"},Lo=new Js,Lu=new Bi,gM=Math.cos(70*ea.DEG2RAD),Tn=new k,Yn=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rl=1e-6;class _M extends ym{constructor(e,t=null){super(e,t),this.state=sn.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new gn,this._lastTargetPosition=new k,this._quat=new gn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new au,this._sphericalDelta=new au,this._scale=1,this._panOffset=new k,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new k,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vM.bind(this),this._onPointerDown=xM.bind(this),this._onPointerUp=MM.bind(this),this._onContextMenu=AM.bind(this),this._onMouseWheel=bM.bind(this),this._onKeyDown=wM.bind(this),this._onTouchStart=TM.bind(this),this._onTouchMove=EM.bind(this),this._onMouseDown=yM.bind(this),this._onMouseMove=SM.bind(this),this._interceptControlDown=RM.bind(this),this._interceptControlUp=CM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=sn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pu),this.update(),this.state=sn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Tn.copy(t).sub(this.target),Tn.applyQuaternion(this._quat),this._spherical.setFromVector3(Tn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Yn:n>Math.PI&&(n-=Yn),i<-Math.PI?i+=Yn:i>Math.PI&&(i-=Yn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Tn.setFromSpherical(this._spherical),Tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<gM?this.object.lookAt(this.target):(Lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(Lu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rl||this._lastTargetPosition.distanceToSquared(this.target)>rl?(this.dispatchEvent(Pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tn.setFromMatrixColumn(t,0),Tn.multiplyScalar(-e),this._panOffset.add(Tn)}_panUp(e,t){this.screenSpacePanning===!0?Tn.setFromMatrixColumn(t,1):(Tn.setFromMatrixColumn(t,0),Tn.crossVectors(this.object.up,Tn)),Tn.multiplyScalar(e),this._panOffset.add(Tn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Tn.copy(i).sub(this.target);let r=Tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function xM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function vM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function MM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(of),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=sn.DOLLY;break;case Bs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=sn.ROTATE}break;case Bs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Wc)}function SM(s){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function bM(s){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(s.preventDefault(),this.dispatchEvent(Wc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(of))}function wM(s){this.enabled!==!1&&this._handleKeyDown(s)}function TM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1){this.state=sn.NONE;break}this._handleTouchStartRotate(s),this.state=sn.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1){this.state=sn.NONE;break}this._handleTouchStartPan(s),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=sn.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Wc)}function EM(s){switch(this._trackPointer(s),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=sn.NONE}}function AM(s){this.enabled!==!1&&s.preventDefault()}function RM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PM=new _a(-1,1,1,-1,0,1);class LM extends ln{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const DM=new LM;class Xc{constructor(e){this._mesh=new Wt(DM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class oc extends nr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kr.clone(e.uniforms),this.material=new qn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Du extends nr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class IM extends nr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class NM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oc(Vo),this.copyPass.material.blending=ds,this.timer=new om}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Du!==void 0&&(o instanceof Du?n=!0:o instanceof IM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Do={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class UM extends nr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Kr.clone(Do.uniforms),this.material=new zd({name:Do.name,uniforms:this.uniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this._fsQuad=new Xc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===on&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class OM extends nr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new At}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const FM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zs extends nr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new At(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(r,o,{type:zn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new kn(r,o,{type:zn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new kn(r,o,{type:zn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=FM;this.highPassUniforms=Kr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Kr.clone(Vo.uniforms),this.blendMaterial=new qn({uniforms:this.copyUniforms,vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,premultipliedAlpha:!0,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new At,this._oldClearAlpha=1,this._basic=new Nn,this._fsQuad=new Xc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<e;o+=2){const a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new qn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new qn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Zs.BlurDirectionX=new Oe(1,0);Zs.BlurDirectionY=new Oe(0,1);function qc(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ln;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Iu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=Iu(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Iu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Dn(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){const x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Nu(s,e){if(e===Jf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Jl||e===dd){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Jl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const Fn={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function BM(s,e){const t=hi[s],n=t.kind==="house"?Math.max(t.w,t.d)*1.15+8:t.r*1.6+7,i=Math.hypot(e[0],e[1]),[r,o]=i>0?[e[0]/i,e[1]/i]:[.45,.9];return{target:[t.x,1,t.z],position:[t.x+r*n,n*.85,t.z+o*n]}}const zM=2.5,Uu=3e3,Ei=(s,e=Number.NEGATIVE_INFINITY)=>({spot:s,since:e,walk:null,holdUntil:null,next:null}),af=s=>({x:fi[s].x,z:fi[s].z});function kM(s,e){const t=fi[s],n=t.viaW?[{x:t.viaW[0],z:t.viaW[1],leave:t.anchor}]:[];return[af(s),...n,...Uo(t.anchor,e)]}const HM=s=>s.slice(1).reduce((e,t,n)=>e+Math.hypot(t.x-s[n].x,t.z-s[n].z),0);function Yc(s,e){let t=Math.max(0,e)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a.x-o.x,a.z-o.z);if(t<l-1e-9){const c=t/l;return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(a.x-o.x,a.z-o.z)}}t-=l}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:fi[s.to].ry}}function GM(s,e,t){const n=Yc(s,t-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...Uo(r.node,e)]:r?.leave?[i,r,...Uo(r.leave,e)]:[i,...Uo(fi[s.to].anchor,e)]}function lf(s,e){return!s.walk||!Yc(s.walk,e-s.walk.startedAt).arrived?s:Ei(s.walk.to,s.walk.startedAt+HM(s.walk.path)/s.walk.speed*1e3)}const cf=(s,e,t,n)=>({...Ei(s,t),walk:{path:kM(s,e),to:e,startedAt:t,speed:n}});function Ou(s,e,t,n,i,r){const o=lf(s,t);return o.walk?o.walk.to===e?o:i?Ei(e,t):{...o,walk:{path:GM(o.walk,e,t),to:e,startedAt:t,speed:n*zM}}:o.holdUntil!==null?e===o.spot?Ei(o.spot,o.since):{...o,next:e}:r&&o.spot===r&&e!==r&&t-o.since<Uu?{...o,next:e,holdUntil:o.since+Uu}:o.spot===e?o:i?Ei(e,t):cf(o.spot,e,t,n)}function Fu(s,e,t,n){return s.walk?lf(s,e):s.holdUntil===null||e<s.holdUntil?s:s.next?n?Ei(s.next,e):cf(s.spot,s.next,e,t):{...s,holdUntil:null}}function VM(s,e){return s.walk?Ei(s.walk.to,e):s.holdUntil!==null?Ei(s.next??s.spot,e):s}const Bu=(s,e)=>s.holdUntil!==null&&e<s.holdUntil;function zu(s,e){if(!s.walk)return{...af(s.spot),heading:fi[s.spot].ry,walking:!1};const{x:t,z:n,heading:i,arrived:r}=Yc(s.walk,e-s.walk.startedAt);return{x:t,z:n,heading:i,walking:!r}}const{PI:$t}=Math,ku=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function WM(s,e,t,n,i){const{scene:r,M:o,COL:a,TEX:l,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:x,rr:m,pick:g,tiled:M,instanced:E}=s,{FLAGS:w,SPINNERS:I,skull:P,horns:v,flame:b,anvil:F,weaponRack:U,brazier:q,poleBanner:se,skullPole:j,barrel:N,well:ie,bench:ae,stall:Z,lampPost:V,crate:ne,sack:he,torch:be,dummy:Je,target:ut,hay:fe,easel:Ke,candle:at,plantFlora:gt,bunk:Qe,chest:xt,hangingBanner:qt,table:pt,partition:Rt,wolf:Pt,spikes:Re,cart:qe,fence:it,skullCandle:lt,tent:st,signPost:ct}=e,{patch:dt}=t,{buildHouse:ye,inH:ke,outH:ze,onWall:L}=n,tt=new Ks({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),je=new Ks({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:Ye,chimneyTop:Ce,emberBase:nt}=(()=>{const te=hi.forge,J=new Ae;J.position.set(te.x,0,te.z),r.add(J),r.add(i.forge);const de=-.6,De=new Ae;De.position.set(0,.16,de),J.add(De),De.add(u(f(new ci(1,24,0,$t),tt,!1),0,1.05,1.705)),De.add(u(f(new tn(2,1.05),tt,!1),0,.53,1.705)),De.add(u(f(new tn(1.4,.45),je,!1),0,.32,1.71));{const re=new Ae;for(let ce=0;ce<4;ce++)re.add(u(f(new Le(.9-ce*.08,.14,1.2-ce*.1),ce%2?o.redD:h("#5a3a2a")),0,.5+ce*.16,0));re.add(u(f(new Le(1,.08,1.3),o.wood),0,.45,0)),re.add(p(u(f(new rt(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,$t/2)),De.add(u(re,-2.9,0,.2))}const _=new Gi("#ff8a3a",14,16,2);_.position.set(0,1.4,2.8),De.add(_),De.updateMatrixWorld(!0);const z=De.localToWorld(new k(0,10.9,-.5)),X=De.localToWorld(new k(0,1,2));x(J,F(),-2.9,2.9,ed(-2.9,2.9,-3.9,3.9)+$t/2,.16);{const re=new Ae;re.add(u(f(new Le(1.5,.55,.7),o.wood),0,.27,0)),re.add(p(u(f(new tn(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-$t/2,0,0)),x(J,re,3.5,3,-.5,.16)}const O=[];for(let re=0;re<40;re++)O.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});E(new wi(1,0),O,{});for(let re=0;re<6;re++)J.add(u(f(new en(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));x(J,U(4),-5.3,-2,Math.atan2(5.3,2),.16),x(J,U(4),5.7,.9,-$t/2,.16);{const re=new Ae;re.add(u(f(new Le(.9,.5,.5),o.wood),0,.25,0));const ce=u(p(f(new rt(.45,.45,.16,18),h("#8a8078")),0,0,$t/2),0,.8,0);re.add(ce),x(J,re,-4.8,.2,.4,.16)}for(const re of[.4,2,3.9,5.2])x(J,q(0),Math.cos(re)*6.9,Math.sin(re)*6.9,0,.16);return x(J,se(4),-1.9,-3.8,0,.16),x(J,se(4),1.9,-3.8,0,.16),x(J,j(2.6),6,-3.6,0,.16),x(J,N(),-6,2,0,.16),{fireLight:_,chimneyTop:z,emberBase:X}})();{const te=hi.court,J=new Ae;J.position.set(te.x,0,te.z),r.add(J),x(J,ie(),-5.8,2),x(J,ae(1.9,!0),-5.2,-4,0),x(J,Z(),6.2,1.2,-$t/2);{const de=new Ae;for(const De of[-1,1])de.add(u(f(new Le(.12,2.2,.12),o.woodD),De*.8,1.1,0));de.add(u(f(new Le(1.8,1.1,.08),o.wood),0,1.55,0));for(let De=0;De<6;De++)de.add(u(p(f(new tn(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+De%3*.6,1.8-Math.floor(De/3)*.5,.05));de.add(p(u(f(new Le(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),x(J,de,5.6,-5.4,-$t/2)}x(J,V(6),-5.8,-1),x(J,N(),8,-.6),x(J,ne(.55),3.8,3.4,.3),x(J,he(),4.4,3),x(J,j(2.4),-7.8,6);{const de=new Ae;de.add(u(f(new Le(1.6,.5,.6),o.wood),0,.25,0)),de.add(p(u(f(new tn(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-$t/2,0,0)),x(J,de,-7.6,3.6,$t/2)}dt("dirt",te.x-4,te.z+.5,4.4,5.6,0,.013)}{const te=hi.yard;if(te.kind==="house")throw new Error("the yard is an open area");const J=te.gate??0,de=new Ae;de.position.set(te.x,0,te.z),r.add(de),dt("sand",te.x,te.z,te.r+.6,te.r+.6,0,.014,5),de.add(i.yard);{const De=new Ae,_=Math.cos(J),z=Math.sin(J);De.position.set(_*te.r,0,z*te.r),De.rotation.y=Math.atan2(_,z);for(const X of[-1,1])De.add(u(be(),X*1.55,2,.24));de.add(De),x(de,j(2.6),_*(te.r+1.6)-z*2.2,z*(te.r+1.6)+_*2.2),x(de,j(2.2),_*(te.r+1.6)+z*2.2,z*(te.r+1.6)-_*2.2)}x(de,Je(),-3.2,2.1,$t),x(de,Je(),1.6,3.2,$t),x(de,ut(),4.4,3.6,Math.atan2(-4.4,-3.6)),x(de,U(4),-5.4,-2.6,Math.atan2(5.4,2.6)),x(de,fe(),-5.6,3.8,.4),x(de,fe(),-4.8,4.7,1.2),x(de,p(fe(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const De of[2,3.4,4.6])x(de,se(3.4),Math.cos(De)*(te.r-.7),Math.sin(De)*(te.r-.7),Math.atan2(-Math.cos(De),-Math.sin(De)));x(de,ae(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),x(de,N(),-.6,-5.8),x(de,q(0,.9),Math.cos(J)*(te.r-1.2)-Math.sin(J)*1.8,Math.sin(J)*(te.r-1.2)+Math.cos(J)*1.8)}const Se={x:-30,z:-20,r:2.6,mouthA:0},le=l.ripple;le.wrapS=le.wrapT=ri;const C=new At("#1f5f8c"),S=new At("#6fb6d2"),Q=new At("#a6d8e6"),Me="#bdb3c4",pe=te=>new Nn({map:le,color:Me,vertexColors:!0,side:mn,polygonOffset:!0,polygonOffsetFactor:-1-te,polygonOffsetUnits:-4-te*4}),Ue=new At;function He(te,J,de){const De=Math.hypot(te-Se.x,J-Se.z),_=ku(1-De/Se.r);return Ue.copy(S).lerp(C,_*.95),de&&Ue.lerp(Q,de*ku((De-Se.r)/1.2)*.45),[Ue.r*1.27,Ue.g*1.27,Ue.b*1.27]}const ve=2.2;{const De=[],_=[],z=[],X=[],O=(A,_e)=>{De.push(A,.045,_e),_.push(...He(A,_e,0)),z.push(A/ve,_e/ve)};O(Se.x,Se.z);for(let A=1;A<=5;A++)for(let _e=0;_e<72;_e++){const oe=_e/72*2*$t,y=Se.r*A/5;O(Se.x+Math.cos(oe)*y,Se.z+Math.sin(oe)*y)}for(let A=0;A<72;A++)X.push(0,1+(A+1)%72,1+A);for(let A=1;A<5;A++)for(let _e=0;_e<72;_e++){const oe=1+(A-1)*72+_e,y=1+(A-1)*72+(_e+1)%72,R=oe+72,Y=y+72;X.push(oe,y,R,y,Y,R)}const re=new ln;re.setAttribute("position",new zt(De,3)),re.setAttribute("color",new zt(_,3)),re.setAttribute("uv",new zt(z,2)),re.setIndex(X),r.add(f(re,pe(0),!1));const ce=qo,Ge=ce[0],Tt=Math.hypot(Ge[0]-Se.x,Ge[1]-Se.z),Dt=(Ge[0]-Se.x)/Tt,Mt=(Ge[1]-Se.z)/Tt;Se.mouthA=Math.atan2(Mt,Dt);const Ft=[];for(let A=Se.r-1.2;A<Tt-.2;A+=.3)Ft.push([Se.x+Dt*A,Se.z+Mt*A]);Ft.push(...ce);const Lt=.7,Ze=Se.r*Se.r,yt=Math.sqrt(Ze-1.5*1.5),rn=Se.r+.8,yn=-(yt/1.5)*(rn-yt),hn=A=>{const _e=Ft[A],oe=Math.hypot(_e[0]-Se.x,_e[1]-Se.z);if(oe<=yt)return Math.sqrt(Math.max(0,Ze-oe*oe))-.02;if(oe>=rn)return Lt;const y=(oe-yt)/(rn-yt),R=y*y,Y=R*y;return(2*Y-3*R+1)*1.48+(Y-2*R+y)*yn+(-2*Y+3*R)*Lt},T=[],D=[],H=[],$=[],ue=[-1,-.5,0,.5,1];for(let A=0;A<Ft.length;A++){const _e=Ft[Math.max(0,A-1)],oe=Ft[Math.min(Ft.length-1,A+1)],y=Ft[A],R=Math.hypot(oe[0]-_e[0],oe[1]-_e[1])||1,Y=-(oe[1]-_e[1])/R,B=(oe[0]-_e[0])/R,K=hn(A);for(const me of ue){const Ne=y[0]+Y*me*K,Fe=y[1]+B*me*K;T.push(Ne,.05,Fe),D.push(...He(Ne,Fe,Math.abs(me))),H.push(Ne/ve,Fe/ve)}if(A>0)for(let me=0;me<4;me++){const Ne=(A-1)*5+me,Fe=Ne+1,Be=A*5+me,et=Be+1;$.push(Ne,Be,Fe,Fe,Be,et)}}const Te=new ln;Te.setAttribute("position",new zt(T,3)),Te.setAttribute("color",new zt(D,3)),Te.setAttribute("uv",new zt(H,2)),Te.setIndex($),r.add(f(Te,pe(1),!1));const ee=[];for(let A=1;A<Ft.length-1;A+=2){const _e=Ft[A];if(Math.hypot(_e[0]-Se.x,_e[1]-Se.z)<Se.r+.9)continue;const oe=Ft[A-1],y=Ft[A+1],R=Math.hypot(y[0]-oe[0],y[1]-oe[1])||1,Y=-(y[1]-oe[1])/R,B=(y[0]-oe[0])/R,K=hn(A)+.16;for(const me of[-1,1])ee.push({x:_e[0]+Y*me*K,y:.06,z:_e[1]+B*me*K,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}E(new wi(1,0),ee,{})}for(const te of t.crossings){const J=i.bridge.clone();J.position.set(te.x,0,te.z),J.rotation.y=te.ang,J.scale.x=(te.len+.6)/3.4,r.add(J)}{const te=hi.garden;if(te.kind==="house")throw new Error("the garden is an open area");const J=new Ae;J.position.set(te.x,0,te.z),r.add(J);const de=Math.atan2(4.6,5.6);J.add(i.garden);{const O=Math.cos(de)*te.r,re=Math.sin(de)*te.r,ce=new Ae;ce.position.set(O,0,re),ce.rotation.y=Math.atan2(Math.cos(de),Math.sin(de)),ce.add(u(V(0).children[2].clone(),0,2.6,0)),J.add(ce)}const De=[],_=[];for(let O=0;O<26;O++){const re=O/26*2*$t;let ce=Math.abs(re-Se.mouthA);ce=Math.min(ce,2*$t-ce),!(ce<.62)&&De.push({x:Se.x+Math.cos(re)*2.75,y:.08,z:Se.z+Math.sin(re)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let O=0;O<7;O++)_.push({x:Se.x+m(-1.6,1.6),y:.065,z:Se.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});E(new wi(1,0),De,{}),E(new rt(.22,.22,.02,12),_,{}),x(J,Ke(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),x(J,ae(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[O,re]of[[-5.6,-2.2],[4.9,-.6]]){const ce=new Ae;ce.add(u(f(new rt(.22,.28,.9,6),o.stone),0,.45,0)),ce.add(u(f(new Le(.5,.36,.5),o.stone),0,1.08,0)),ce.add(u(f(new Le(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),ce.add(u(f(new Mn(.48,.36,4),o.redD),0,1.44,0)),x(J,ce,O,re,$t/4)}{const O=new Ae;O.add(u(f(new Le(.9,.6,.6),o.stone),0,.3,0)),O.add(u(P(.26),0,.75,0));for(const re of[-1,1])O.add(u(at(.18),re*.3,.6,.12));x(J,O,-4.4,-5.4,Math.atan2(4.4,5.4))}gt("tree_willow",1,te.x-6.2,te.z-2.8),gt("tree_cherry",.95,te.x+5.3,te.z-4.9),gt("tree_fruit",.85,te.x-3,te.z+6.2);const z=[];let X=0;for(;z.length<90&&X<4e3;){X++;const O=m(0,2*$t),re=m(5.3,6.7),ce=Math.cos(O)*re,Ge=Math.sin(O)*re;Math.min(Math.abs(O-de),2*$t-Math.abs(O-de))<.35||Math.hypot(ce-3,Ge+3.4)<1.3||Math.hypot(ce-2.2,Ge+4.3)<1||z.push({x:te.x+ce,y:.18,z:te.z+Ge,sx:.9,sy:.9,sz:.9,c:g([a.red,a.bone,"#d98a3a",a.redL,"#e8c860"])})}E(new en(.11,8,6),z,{})}const we=M(l.water,1,6),Ie=[];{const te=qo,[J,de]=te[te.length-1],[De,_]=te[te.length-3],z=Math.hypot(J-De,de-_),X=(J-De)/z,O=(de-_)/z,re=new Wt(new tn(1.4,40),new Nn({map:we,color:"#acb5c8",transparent:!0,opacity:.85,side:mn,depthWrite:!1}));re.position.set(J+X*.9,-20+.05,de+O*.9),re.rotation.y=Math.atan2(X,O),r.add(re);const ce=new is({map:l.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let Ge=0;Ge<9;Ge++){const Tt=new Xi(ce);Tt.position.set(J+X*m(1,2.4),m(-38,-30),de+O*m(1,2.4)+m(-1,1)),Tt.scale.setScalar(m(3,5.5)),r.add(Tt),Ie.push(Tt)}for(let Ge=0;Ge<4;Ge++){const Tt=new Xi(ce);Tt.position.set(J+X*1,m(-.6,.3),de+O*1+m(-.5,.5)),Tt.scale.setScalar(m(1,1.6)),r.add(Tt),Ie.push(Tt)}}for(const te of uc)if(te.kind==="hut"){const J=ye({...te,wallH:2.5},{id:te.id,pitch:.66,chimney:te.id==="barracks"?[1.4,-.6]:null});if(te.id==="barracks"&&(ke(J,Qe(),-1.6,-.9),ke(J,Qe(),.4,-.9),ke(J,xt(),2.2,-1.6,-$t/2),ke(J,q(0,.7),2.3,1.2),L(J,"W",U(3),0,Vt,.3),L(J,"S",qt(.8,1.3),1.6,Vt+2.3,.04)),te.id==="store"){ke(J,pt(1.6,.6,.9,o.wood),-1.2,-1.3);for(let de=0;de<4;de++)ke(J,ne(.45),-1.8+de*.4,-1.3).position.y=Vt+.95;ke(J,N(),1.6,-1.2),ke(J,N(.9),1.9,-.4),ke(J,he(),.6,-1.3),ke(J,he(),1,.6),ke(J,ne(.6),-1.8,.8,.3)}if(te.id==="stable"){const de=f(new tn(te.w-.6,te.d-.6),o.straw,!1);de.rotation.x=-$t/2,ke(J,de,0,0).position.y=Vt+.01;for(const De of[-1,1.2])ke(J,Rt(2.2,1.1),De,-.6);ke(J,Pt(),-2.2,-.3,.4),ke(J,Pt(),.1,-.5,-.5).scale.setScalar(.9),ke(J,fe(),2.4,-1,.2);{const De=new Ae;De.add(u(f(new Le(1.2,.4,.45),o.wood),0,.2,0)),De.add(p(u(f(new tn(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-$t/2,0,0)),ke(J,De,2.2,1)}}if(te.id==="granary"){for(let de=0;de<6;de++)ke(J,he(),-1.4+de%3*.5,-1.2+Math.floor(de/3)*.55);ke(J,N(),1.5,-1.1);{const de=f(new Le(1.2,.8,.8),o.wood);de.position.y=.4;const De=new Ae;De.add(de),De.add(u(f(new Le(1.1,.05,.7),o.straw),0,.78,0)),ke(J,De,1.2,.7)}}te.id==="barracks"&&(ze(J,U(4),-1.4,3.3),ze(J,Re(2.6),3.8,3,.6),ze(J,se(3),3.6,.6),ze(J,j(2.4),-3.8,2.4)),te.id==="store"&&(ze(J,ne(.7),-1.6,2.8,.2),ze(J,ne(.5),-.9,3.1,.7),ze(J,he(),.6,2.9),ze(J,he(),1.1,3.2),ze(J,N(),2.3,2.9)),te.id==="stable"&&(ze(J,fe(),-2.8,2.6,.3),ze(J,fe(),-2,3,1.1),ze(J,qe(),2,3.4,-.3),it(J.g,[[-3.2,4.4],[3.2,4.4]],.9)),te.id==="granary"&&(ze(J,he(),-1.2,2.6),ze(J,he(),-.6,2.9),ze(J,he(),-1,3.3),ze(J,N(.9),1.6,2.7))}else if(te.kind==="windmill"){const J=new Ae;J.position.set(te.x,0,te.z),J.add(u(f(new rt(1.7,2.4,6.6,18),h("#ffffff",{map:M(l.castleWall,3,2.2)})),0,3.3,0)),J.add(u(f(new Mn(2.3,2.8,18),h("#ffffff",{map:M(l.roof,4,1.5)})),0,7.9,0)),J.add(u(f(new Le(1,1.7,.2),o.woodD),0,.85,2.25));for(const[De,_]of[[.6,3.6],[-.9,4.8]])J.add(u(p(f(new Le(.5,.6,.1),o.pane,!1),0,De,0),Math.sin(De)*2,_,Math.cos(De)*2));const de=u(new Ae,0,6.2,2);de.add(p(f(new rt(.22,.22,.5,10),o.woodD),$t/2,0,0));for(let De=0;De<4;De++){const _=new Ae;_.rotation.z=De*$t/2,_.add(u(f(new Le(.12,4.4,.08),o.woodD),0,2.3,.2)),_.add(u(f(new Le(.9,3.4,.04),h("#e3d5b6",{side:mn})),.5,2.6,.24)),_.add(u(f(new Le(.06,3.4,.06),o.wood),.95,2.6,.26)),de.add(_)}J.add(de),I.push({o:de,axis:"z",v:.5}),J.add(u(he(),-1.6,0,2.6)),J.add(u(he(),-2.2,0,2.2)),r.add(J)}else if(te.kind==="watch"){const J=new Ae;J.position.set(te.x,0,te.z),J.add(i.watch),J.add(u(q(0,.7),.6,6.5,-.6)),r.add(J)}else if(te.kind==="shrine"){const J=new Ae;J.position.set(te.x,0,te.z),J.add(i.altar);for(const de of[.9,2.5,4.1,5.6])J.add(u(lt(),Math.cos(de)*1.4,0,Math.sin(de)*1.4));J.add(u(q(0,.8),1.6,0,1.4)),r.add(J),dt("dirt",te.x,te.z,3.4,3.4,0,.013)}else{const J=new Ae;J.position.set(te.x,0,te.z),J.add(u(p(st(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),J.add(u(p(st(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let de=0;de<8;de++){const De=de/8*2*$t;J.add(u(f(new wi(.18,0),o.stone),Math.cos(De)*.55,.1,Math.sin(De)*.55))}for(let de=0;de<3;de++)J.add(p(u(f(new rt(.07,.07,.8,6),o.woodD),0,.12,0),$t/2,de*1.05,0));b(J,0,.12,0,1.8);for(const de of[.6,2.4,4.4])J.add(u(p(f(new rt(.2,.2,1.4,8),o.wood),0,-de,$t/2),Math.cos(de)*1.6,.2,Math.sin(de)*1.6));J.add(u(j(2.4),-3.2,0,-1.2)),J.add(u(N(),3.1,0,-.8)),r.add(J),dt("dirt",te.x,te.z,4.2,4,0,.013)}function W(te,J,de,De=.018,_=o.dark){const z=new k(...J),X=new k(...de),O=z.distanceTo(X),re=f(new rt(De,De,O,5),_,!1);return re.position.copy(z).add(X).multiplyScalar(.5),re.quaternion.setFromUnitVectors(c,X.clone().sub(z).normalize()),te.add(re),re}function xe(){const te=new Ae,J=f(new en(1,22,12,0,$t*2,$t/2,$t/2),h("#ffffff",{map:l.planks}));J.scale.set(2.7,1,1.15),te.add(J);const de=f(new rt(1,1,.1,24),o.woodL);de.scale.set(2.62,1,1.1),te.add(u(de,0,.02,0));const De=f(new vn(1,.06,6,36),o.woodD);De.rotation.x=$t/2,De.scale.set(2.68,1.13,1),De.position.y=.14,te.add(De),te.add(p(u(f(new rt(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),te.add(u(p(P(.32),0,$t/2,0),2.75,.32,0)),te.add(u(p(v(.8),0,$t/2,0),2.75,.42,0)),te.add(u(f(new rt(.07,.09,2.8,8),o.woodD),.3,1.4,0));const _=u(new Ae,.3,2.85,0);_.add(u(f(new Le(.9,.36,.02),o.red),.45,0,0)),te.add(_),w.push(_);const z=u(new Ae,-1.5,.06,0);z.add(u(f(new Le(1.1,.8,1.1),h("#ffffff",{map:l.planks})),0,.4,0)),z.add(u(p(f(new rt(.75,.75,1.3,3),h("#ffffff",{map:l.roof})),0,0,$t/2),0,1.05,0)),z.add(u(f(new Le(.3,.3,.04),o.pane,!1),.56,.5,0)),te.add(z);const X=f(new en(1,24,16),h("#ffffff",{map:l.balloon}));X.scale.set(3.6,1.5,1.7),X.position.y=4.4,te.add(X);const O=f(new vn(1,.05,6,40),o.bone);O.rotation.x=$t/2,O.scale.set(3.62,1.72,1),O.position.y=4.1,te.add(O);for(const[ce,Ge,Tt,Dt]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])W(te,[ce,4.05,Ge],[Tt,.16,Dt]);const re=u(new Ae,-2.95,.65,0);re.add(p(f(new rt(.1,.1,.3,8),o.iron),0,0,$t/2));for(let ce=0;ce<3;ce++){const Ge=u(new Ae,0,0,0);Ge.rotation.x=ce/3*$t*2,Ge.add(u(p(f(new Le(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),re.add(Ge)}te.add(re),I.push({o:re,axis:"x",v:7}),te.add(u(f(new Le(.06,.9,.7),o.redD),-2.75,.1,0));for(const ce of[2.4,-2.4])te.add(u(f(new en(.1,8,6),d("#ffc070",2.2),!1),ce,.5,0));return te.add(u(ne(.45),1.3,.07,.4)),te.add(u(N(.6),1.2,.07,-.45)),te}const ge=xe(),Xe=xe();{const te=us.find(Dt=>Dt.id==="dock");if(!te)throw new Error("no dock road");const J=te.line,[de,De]=J[J.length-1],[_,z]=J[J.length-4],X=Math.hypot(de-_,De-z),O=(de-_)/X,re=(De-z)/X,ce=new Ae;ce.position.set(de,0,De),ce.rotation.y=Math.atan2(O,re),r.add(ce),ce.add(i.dock),ce.add(u(ne(.55),2.8,1.17,6.8));for(const[Dt,Mt]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])ce.add(u(f(new en(.12,8,6),d("#ffc070",2.2),!1),Dt,1.32,Mt));ce.add(u(ne(.6),-.85,.22,1.3)),ce.add(u(ne(.45),-.75,.22,2)),ce.add(u(N(.85),.85,.22,1)),ce.add(u(he(),.6,.22,3.6)),ce.add(u(se(3.4),-1.45,.22,.4)),ge.position.set(4.1,-.4,5.6),ge.rotation.y=-$t/2,ce.add(ge);const Ge=f(new Le(1.6,.08,.7),o.woodL);Ge.position.set(2.3,.05,5.6),Ge.rotation.z=-.18,ce.add(Ge);const Tt=u(new Ae,-4.6,0,-3.8);Tt.add(u(be(),-.2,1.6,1.3)),Tt.add(u(ne(.6),1.9,0,.8)),Tt.add(u(N(),1.8,0,-.4)),ce.add(Tt),ce.add(u(p(ct("SKY DOCK"),0,$t/2,0),2.2,0,-2.4)),r.add(Xe),Xe.scale.setScalar(1.5),Xe.userData={a:1.2,r:96,y:15}}{const te=new Ae;te.position.set(-44,0,26),r.add(te);for(const[J,de,De]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])te.add(u(p(st(1.8,2.6,De),0,Math.atan2(-J,-de),0),J,0,de));for(let J=0;J<8;J++){const de=J/8*2*$t;te.add(u(f(new wi(.18,0),o.stone),Math.cos(de)*.55,.1,Math.sin(de)*.55))}b(te,0,.1,0,1.8),te.add(u(j(2.6),3.6,0,1.8)),te.add(u(se(3),-3.6,0,1.6)),te.add(u(p(Re(3),0,.6,0),4.6,0,-2.6)),dt("dirt",-44,26,5,4.6,.3,.013)}return dt("field",54,-8,6.5,4.2,.35,.013,3),dt("field",51,6,5.2,3.6,-.2,.013,3),dt("field",10,-44.5,6,3.6,.1,.013,3),x(r,Je(),55.5,-2.6,.4),x(r,fe(),48.6,-12.6,.4),x(r,fe(),49.4,-11.8,1.3),{mouthMat:tt,coreMat:je,fireLight:Ye,chimneyTop:Ce,emberBase:nt,waterTex:le,fallTex:we,mists:Ie,skyBoat:ge,airship:Xe}}const XM=[3,5,7,9,11];function qM(s){const e=[];for(let t=0;t<s;t++)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return new qn({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}const YM=`

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

		}`,KM=`varying vec2 vUv;
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
				}`;function ZM(s){s.separableBlurMaterials.forEach((e,t)=>{e.dispose(),s.separableBlurMaterials[t]=qM(XM[t]??3)}),s.materialHighPassFilter.fragmentShader=YM,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=KM,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function JM(s){const e=new Map,t=new Map,n=s.clone();return hf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function hf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)hf(s.children[n],e.children[n],t)}class uf extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new Hu(t,Qt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t,Qt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new my(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Lr.extractUrlBase(e);o=Lr.resolveURL(c,this.path)}else o=Lr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Wd(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===df){try{o[Qt.KHR_BINARY_GLTF]=new gy(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Qt.KHR_MATERIALS_UNLIT:o[d]=new jM;break;case Qt.KHR_DRACO_MESH_COMPRESSION:o[d]=new _y(r,this.dracoLoader);break;case Qt.KHR_TEXTURE_TRANSFORM:o[d]=new xy;break;case Qt.KHR_MESH_QUANTIZATION:o[d]=new vy;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $M(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function xn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class QM{constructor(e){this.parser=e,this.name=Qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new At(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gi(h),c.distance=d;break;case"spot":c=new tm(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class jM{constructor(){this.name=Qt.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){const i=[];e.color=new At(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,bn))}return Promise.all(i)}}class ey{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class ty{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(i)}}class ny{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class iy{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class sy{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class ry{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_SHEEN}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new At(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class oy{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class ay{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_VOLUME}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new At().setRGB(r[0],r[1],r[2],jn),Promise.all(i)}}class ly{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_IOR}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class cy{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new At().setRGB(r[0],r[1],r[2],jn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bn)),Promise.all(i)}}class hy{constructor(e){this.parser=e,this.name=Qt.EXT_MATERIALS_BUMP}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class uy{constructor(e){this.parser=e,this.name=Qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return xn(this.parser,e,this.name)!==null?gi:null}extendMaterialParams(e,t){const n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class dy{constructor(e){this.parser=e,this.name=Qt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class fy{constructor(e){this.parser=e,this.name=Qt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class py{constructor(e){this.parser=e,this.name=Qt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Hu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class my{constructor(e){this.name=Qt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const x=new kt,m=new k,g=new gn,M=new k(1,1,1),E=new Gr(p.geometry,p.material,f);for(let I=0;I<f;I++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,I),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,I),l.SCALE&&M.fromBufferAttribute(l.SCALE,I),E.setMatrixAt(I,x.compose(m,g,M));let w=null;for(const I in l)if(I==="_COLOR_0"){const P=l[I];E.instanceColor=new ta(P.array,P.itemSize,P.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(w===null){const v=E.geometry;w=new ln,w.name=v.name;for(const b in v.attributes)w.setAttribute(b,v.attributes[b]);for(const b in v.morphAttributes)w.morphAttributes[b]=v.morphAttributes[b];v.index!==null&&w.setIndex(v.index),w.morphTargetsRelative=v.morphTargetsRelative;for(const b of v.groups)w.addGroup(b.start,b.count,b.materialIndex);v.boundingBox!==null&&(w.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(w.boundingSphere=v.boundingSphere.clone()),w.drawRange.start=v.drawRange.start,w.drawRange.count=v.drawRange.count,w.userData=Object.assign({},v.userData),E.geometry=w}const P=l[I];w.setAttribute(I,new ta(P.array,P.itemSize,P.normalized))}pn.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),u.push(E)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const df="glTF",mr=12,Gu={JSON:1313821514,BIN:5130562};class gy{constructor(e){this.name=Qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mr,r=new DataView(e,mr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Gu.JSON){const c=new Uint8Array(e,mr+o,a);this.content=n.decode(c)}else if(l===Gu.BIN){const c=mr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _y{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=ac[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=ac[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],u=Gs[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const x=u.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(u)},a,c,jn,f)})})}}class xy{constructor(){this.name=Qt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class vy{constructor(){this.name=Qt.KHR_MESH_QUANTIZATION}}class ff extends $s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*c,x=p-c,m=-2*u+3*f,g=u-f,M=1-m,E=g-f+d;for(let w=0;w!==a;w++){const I=o[x+w+a],P=o[x+w+l]*h,v=o[p+w+a],b=o[p+w]*h;r[w]=M*I+E*P+m*v+g*b}return r}}const My=new gn;class yy extends ff{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return My.fromArray(r).normalize().toArray(r),r}}const ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:wn,9729:In,9984:rd,9985:Oo,9986:vr,9987:Ti},Wu={33071:Xn,33648:Ko,10497:ri},ol={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sy={CUBICSPLINE:void 0,LINEAR:Fr,STEP:Or},al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function by(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ks({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ss})),s.DefaultMaterial}function hs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ty(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ey(s){let e;const t=s.extensions&&s.extensions[Qt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ll(t.attributes):e=s.indices+":"+ll(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ll(s.targets[n]);return e}function ll(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function lc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ay(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ry=new kt;class Cy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $M,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Q0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new sm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wd(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hs(r,a,i),yi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Lr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ol[i.type],a=Gs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Dn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ol[i.type],c=Gs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(u&&u!==d){const g=Math.floor(f/u),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=t.cache.get(M);E||(x=new c(a,g*u,i.count*u/h),E=new bd(x,u/h),t.cache.add(M,E)),m=new Hr(E,l,f%u/h,p)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new Dn(x,l,p);if(i.sparse!==void 0){const g=ol.SCALAR,M=Gs[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,I=new M(o[1],E,i.sparse.count*g),P=new c(o[2],w,i.sparse.count*l);a!==null&&(m=new Dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,b=I.length;v<b;v++){const F=I[v];if(m.setX(F,P[v*l]),l>=2&&m.setY(F,P[v*l+1]),l>=3&&m.setZ(F,P[v*l+2]),l>=4&&m.setW(F,P[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vu[f.magFilter]||In,h.minFilter=Vu[f.minFilter]||Ti,h.wrapS=Wu[f.wrapS]||ri,h.wrapT=Wu[f.wrapT]||ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wn&&h.minFilter!==In,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(m){const g=new An(m);g.needsUpdate=!0,u(g)}),t.load(Lr.resolveURL(f,r.path),x,void 0,p)})})}const d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),yi(f,o),f.userData.mimeType=o.mimeType||Ay(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rr,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ed,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ks}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qt.KHR_MATERIALS_UNLIT]){const d=i[Qt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],jn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,bn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);const h=r.alphaMode||al.OPAQUE;if(h===al.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===al.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Nn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nn){const d=r.emissiveFactor;a.emissive=new At().setRGB(d[0],d[1],d[2],jn)}return r.emissiveTexture!==void 0&&o!==Nn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bn)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),yi(d,r),t.associations.set(d,{materials:e}),r.extensions&&hs(i,d,r),d})}createUniqueName(e){const t=an.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Xu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Ey(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Qt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Xu(new ln,c,t),c.mode===ni.TRIANGLE_STRIP?f=f.then(u=>Nu(u,dd)):c.mode===ni.TRIANGLE_FAN&&(f=f.then(u=>Nu(u,Jl))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?by(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const x=h[u],m=o[u];let g;const M=c[u];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,w=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&w?new Yp(x,M):new Wt(x,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ni.LINES)g=new $p(x,M);else if(m.mode===ni.LINE_STRIP)g=new Nc(x,M);else if(m.mode===ni.LINE_LOOP)g=new Qp(x,M);else if(m.mode===ni.POINTS)g=new Mr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Ty(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),yi(g,r),m.extensions&&hs(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&hs(i,d[0],r),d[0];const f=new Ae;r.extensions&&hs(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kn(ea.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _a(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new kt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let E=0,w=f.length;E<w;E++){const I=f[E],P=u[E],v=p[E],b=x[E],F=m[E];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const U=n._createAnimationTracks(I,P,v,b,F);if(U)for(let q=0;q<U.length;q++)g.push(U[q])}const M=new nc(r,void 0,g);return yi(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,Ry)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new k().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Td:c.length>1?h=new Ae:c.length===1?h=c[0]:h=new pn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),yi(h,r),r.extensions&&hs(n,h,r),r.matrix!==void 0){const d=new kt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ae;n.name&&(r.name=i.createUniqueName(n.name)),yi(r,n),n.extensions&&hs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(JM(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof Qn||f instanceof An)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}ji[r.path]===ji.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(ji[r.path]){case ji.weights:h=Zr;break;case ji.rotation:h=Jr;break;case ji.translation:case ji.scale:h=oa;break;default:n.itemSize===1?h=Zr:h=oa;break}const d=i.interpolation!==void 0?Sy[i.interpolation]:Fr,f=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const x=new h(l[u]+"."+ji[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=lc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Jr?yy:ff;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Py(s,e,t){const n=e.attributes,i=new Ri;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const h=lc(Gs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const x=lc(Gs[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ci;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Xu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ac[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return jt.workingColorSpace!==jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),yi(s,e),Py(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wy(s,e.targets,t):s})}const Ly="/assets/altar-BLnKV2Du.glb",Dy="/assets/backend-0N1rHeCk.glb",Iy="/assets/bridge-ETZK_L1i.glb",Ny="/assets/designer-DbLc0S5w.glb",Uy="/assets/dock-Dz4b5cxY.glb",Oy="/assets/flora-7jxy9LaY.glb",Fy="/assets/forge-DNia5kCh.glb",By="/assets/frontend-BagVIkFr.glb",zy="/assets/garden-iFD0puy8.glb",ky="/assets/gate-CLzj2aEg.glb",Hy="/assets/house_library-a_INcIO_.glb",Gy="/assets/house_studio-prPn7xt-.glb",Vy="/assets/house_tavern-DhJciONJ.glb",Wy="/assets/house_war-CErgsJUC.glb",Xy="/assets/house_workshop-DizOAfBl.glb",qy="/assets/lead-B8dKTGTU.glb",Yy="/assets/reviewer-CjFLqSzL.glb",Ky="/assets/towers-DiePBDd1.glb",Zy="/assets/underside-CtDt-w8A.glb",Jy="/assets/walls-DL6hLM5P.glb",$y="/assets/watch-D_FLfKo1.glb",Qy="/assets/yard-BCXHtimJ.glb",jy="/assets/backend-BO6EdEPd.jpg",e1="/assets/designer-3Dfjr5eY.jpg",t1="/assets/frontend-ChC8gXK4.jpg",n1="/assets/lead-BVut_pmU.jpg",i1="/assets/reviewer-r8WJ7XTx.jpg",s1=Object.assign({"../models/altar.glb":Ly,"../models/backend.glb":Dy,"../models/bridge.glb":Iy,"../models/designer.glb":Ny,"../models/dock.glb":Uy,"../models/flora.glb":Oy,"../models/forge.glb":Fy,"../models/frontend.glb":By,"../models/garden.glb":zy,"../models/gate.glb":ky,"../models/house_library.glb":Hy,"../models/house_studio.glb":Gy,"../models/house_tavern.glb":Vy,"../models/house_war.glb":Wy,"../models/house_workshop.glb":Xy,"../models/lead.glb":qy,"../models/reviewer.glb":Yy,"../models/towers.glb":Ky,"../models/underside.glb":Zy,"../models/walls.glb":Jy,"../models/watch.glb":$y,"../models/yard.glb":Qy}),cc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},ns=["lead","designer","frontend","backend","reviewer"],r1=Object.assign({"../models/backend.jpg":jy,"../models/designer.jpg":e1,"../models/frontend.jpg":t1,"../models/lead.jpg":n1,"../models/reviewer.jpg":i1});function Kc(s){const e=s1[`../models/${s}.glb`];if(!e)throw new Error(`no model ${s} in the bundle`);return e}function o1(s){const e=r1[`../models/${s}`];if(!e)throw new Error(`no texture ${s} in the bundle`);return e}const cl=new kt,a1=new kt;function pf(s){const e=new Set;return s.scene.traverse(t=>{const n=t.userData.woa_q;if(n&&(cl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),t.matrix.compose(t.position,t.quaternion,t.scale).multiply(a1.copy(cl).invert()),t.matrix.decompose(t.position,t.quaternion,t.scale)),!(t instanceof Wt)||e.has(t.geometry))return;const i=t.geometry;e.add(i);for(const[o,a]of Object.entries(i.attributes)){if(o==="skinIndex"||a.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in a))continue;const l=a.itemSize,c=new Float32Array(a.count*l);for(let h=0;h<a.count;h++)c[h*l]=a.getX(h),l>1&&(c[h*l+1]=a.getY(h)),l>2&&(c[h*l+2]=a.getZ(h)),l>3&&(c[h*l+3]=a.getW(h));i.setAttribute(o,new Dn(c,l))}const r=n||t.parent?.userData.woa_q;r&&i.applyMatrix4(cl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function mf(s,e){const t=e,n=t.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((t.emissiveIntensity||1)*40)/100)):s.toon("#"+t.color.getHexString())}const l1=s=>s.isMeshStandardMaterial===!0;function gf(s,e){const t=new Map;return e.traverse(n=>{if(!(n instanceof Wt))return;const i=mf(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.applyMatrix4(n.matrixWorld);const a=t.get(i);a?a.push(o):t.set(i,[o])}),t}function c1(s,e){e.scene.updateMatrixWorld(!0);const t=new Ae;for(const[n,i]of gf(s,e.scene)){const r=i.length===1?i[0]:qc(i,!1);if(!r)continue;const o=new Wt(r,n);o.castShadow=!l1(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o)}return t}function _f(s,e){let t=null;return s.scene.traverse(n=>{!t&&(n.userData.name===e||n.name===e)&&(t=n)}),t}async function h1(){const s=new uf,e=Object.keys(cc),t=await Promise.all(e.map(n=>s.loadAsync(Kc(n)).then(pf)));return Object.fromEntries(e.map((n,i)=>[n,t[i]]))}function u1(s,e){const t={};for(const n of Object.keys(cc)){const i=e[n];t[n]=cc[n]==="static"?c1(s,i):i}return t}const Wo={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function d1(s,e){const t=.075*s/1.8,n=(e-t)*.5;return Math.max(.5,n+t-.02)}const f1={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit"},hl={intensity:2.5,distance:4},xf=new Set(["type","smash","readsit","sit","drink"]),p1=.59;function m1(s){const e=Kc(s),t=new Vd;return t.setURLModifier(n=>n===e?n:o1(n.slice(n.lastIndexOf("/")+1))),new uf(t)}async function g1(){const s=await Promise.all(ns.map(e=>m1(e).loadAsync(Kc(e)).then(pf)));return s.forEach((e,t)=>{e.scene.traverse(n=>{if(n instanceof Wt&&!n.material.map)throw new Error(`the ${ns[t]} model's texture did not load`)})}),Object.fromEntries(ns.map((e,t)=>[e,s[t]]))}function _1(s){const e=Yo.filter(n=>n.kind==="house"),t=hi.forge;return(n,i)=>{for(const r of e){const[o,a]=Dr(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(a)<r.d/2+.1)return Vt;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&a>r.deck[2]&&a<r.deck[3])return .2}if(Math.hypot(n-t.x,i-t.z)<7.8)return .16;for(const r of s){const o=n-r.x,a=i-r.z,l=(r.len+.6)/2,c=o*Math.cos(r.ang)-a*Math.sin(r.ang),h=o*Math.sin(r.ang)+a*Math.cos(r.ang);if(Math.abs(c)<l&&Math.abs(h)<.6)return .12+.32*(1-(c/l)**2)}return .02}}const x1=.055,la=new k,wr=new k,qu=new k,v1=new k,Xo=new k,ul=new k,M1=new k,Yu=new gn,Ku=new gn,ca=new gn,Zu=new gn,dl=new Yd;function Ju(s,e,t){Yu.setFromUnitVectors(e,t),s.getWorldQuaternion(Ku),s.parent.getWorldQuaternion(ca).invert(),s.quaternion.copy(ca.multiply(Yu).multiply(Ku)),s.updateMatrixWorld(!0)}function y1(s,e,t,n){const i=s.up.getWorldPosition(wr),r=s.low.getWorldPosition(qu),o=s.foot.getWorldPosition(la);s.foot.getWorldQuaternion(Zu);const a=i.distanceTo(r),l=r.distanceTo(o),c=Xo.set(o.x,e+t,o.z).sub(i),h=ea.clamp(c.length(),Math.abs(a-l)+1e-4,a+l-1e-4);c.normalize();const d=ul.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=ea.clamp((a*a+h*h-l*l)/(2*a*h),-1,1),u=M1.copy(i).addScaledVector(c,a*f).addScaledVector(d,a*Math.sqrt(1-f*f)),p=v1.copy(i).addScaledVector(c,h);Ju(s.up,ul.subVectors(r,i).normalize(),Xo.subVectors(u,i).normalize());const x=s.low.getWorldPosition(qu),m=s.foot.getWorldPosition(la);Ju(s.low,ul.subVectors(m,x).normalize(),Xo.subVectors(p,x).normalize()),s.foot.parent.getWorldQuaternion(ca).invert(),s.foot.quaternion.copy(ca.multiply(Zu)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function S1(s,e,t,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of ns){const f=new Ae;f.userData.agentId=d,e.add(f);const u=fi[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:x,speed:m}=Wo[d],g=t[d],M=g.scene;M.updateMatrixWorld(!0);const E=new Ri().setFromObject(M),w=p/Math.max(.01,E.max.y-E.min.y);M.scale.setScalar(w);const I=-E.min.y*w;M.position.y=I;const P=new Map;M.traverse(V=>{if(!(V instanceof Wt))return;const ne=V.material;let he=P.get(ne);he||(ne.map&&(ne.map.colorSpace=bn),he=i("#ffffff",{map:ne.map??null}),P.set(ne,he)),V.material=he,V.castShadow=!0,V.receiveShadow=!0,V.frustumCulled=!1,V.raycast=()=>{}});let v=null,b=null;if(d==="reviewer"){v=new Gi("#6dffa0",hl.intensity,hl.distance,2),v.position.set(-.18,2.2,.35),f.add(v);const V=M.getObjectByName("mixamorigRightHand");if(!V)throw new Error("the reviewer model has no right hand");const ne=new Ae,he=new Ae;ne.add(he);const be=new Xi(new is({map:n.flameTex,color:new At(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));be.center.set(.5,.05),be.scale.set(.16,.3,1),be.position.y=.02;const Je=new Xi(new is({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:bi}));Je.scale.setScalar(.25),Je.position.y=.08,be.raycast=()=>{},Je.raycast=()=>{},he.add(be,Je),V.add(ne),M.updateMatrixWorld(!0),ne.scale.setScalar(1/V.getWorldScale(new k).x),b={group:ne,flicker:he}}const F={};for(const V of g.animations){const ne=V.tracks.find(he=>/Hips\.position$/.test(he.name));ne&&(F[V.name]=ne.values[1]*w)}const U=new Mm(M),q={};for(const V of g.animations){const ne=U.clipAction(V);ne.enabled=!0,ne.setEffectiveTimeScale(1),ne.setEffectiveWeight(V.name==="idle"?1:0),ne.time=Math.random()*V.duration,ne.play(),q[V.name]=ne}if(!q.idle||!q.walk||!q.sit||!q.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const se=Math.min(2.6,Math.max(.8,m/(p1*p)));q.walk.timeScale=se,U.update(0);const j=V=>M.getObjectByName("mixamorig"+V),N=["Left","Right"].map(V=>({up:j(V+"UpLeg"),low:j(V+"Leg"),foot:j(V+"Foot")}));M.updateMatrixWorld(!0);const ie=N.every(V=>V.up&&V.low&&V.foot)?N.map(V=>({up:V.up,low:V.low,foot:V.foot,saved:[new gn,new gn,new gn]})):null,ae=ie?Math.min(...ie.map(V=>V.foot.getWorldPosition(la).y)):0,Z=j("Hips");if(!Z)throw new Error(`the ${d} model has no hips`);f.add(M),o[d]={id:d,root:f,H:p,seatY:d1(p,x),phase:n.phases[d],model:{obj:M,mixer:U,acts:q,cur:"idle",baseY:I,walkScale:se,seat:F,hips:Z,legs:ie,ankleH:ae,bent:!1,ikW:0},lantern:v,lamp:b}}const a=new Map;function l(d,f,u,p){const x=a.get(d);if(x!==void 0)return x;const m=[];for(const[M,E]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){dl.set(la.set(f+M,p+1.2,u+E),Xo.set(0,-1,0)),dl.far=1.3;for(const w of dl.intersectObjects(e.children,!0)){let I=!1,P=!0;for(let F=w.object;F;F=F.parent)F.userData.agentId&&(I=!0),F.visible||(P=!1);const v=w.point.y-p,b=w.object;if(!I&&P&&b.isMesh&&!b.material.transparent&&v>.25&&v<.66){m.push(v);break}}}const g=m.length?Math.max(...m):null;return a.set(d,g),g}function c(d,f,u,p,x=1){const m=d.model;if(m.bent&&m.legs)for(const U of m.legs)U.up.quaternion.copy(U.saved[0]),U.low.quaternion.copy(U.saved[1]),U.foot.quaternion.copy(U.saved[2]);m.bent=!1;const g=f1[f],M=g&&m.acts[g]?g:"idle";if(M!==m.cur){const U=m.acts[m.cur],q=m.acts[M];q.enabled=!0,q.setEffectiveWeight(1),q.time=0,r?U.setEffectiveWeight(0):U.crossFadeTo(q,.3,!1),m.cur=M}M==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*x)),m.mixer.update(r?0:u);const E=M!=="walk"&&M!=="idle";let w=null;const I=n.groundY(d.root.position.x,d.root.position.z);if(E&&p&&m.legs&&m.acts[M].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const U=m.hips.getWorldPosition(wr);w=l(p+"|"+d.id,U.x,U.z,I)}let P=m.baseY,v=0,b=0;if(w!==null){P=m.obj.position.y+(I+w+x1*d.H)-wr.y;const U=d.root.rotation.y,q=Math.cos(U),se=Math.sin(U),j=d.root.position.x-wr.x,N=d.root.position.z-wr.z;v=m.obj.position.x+j*q-N*se,b=m.obj.position.z+j*se+N*q}else E&&m.seat[M]!==void 0&&(P=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[M])));const F=r?1:Math.min(1,u*8);if(m.obj.position.x+=(v-m.obj.position.x)*F,m.obj.position.y+=(P-m.obj.position.y)*F,m.obj.position.z+=(b-m.obj.position.z)*F,m.ikW=w===null?0:Math.min(1,m.ikW+(r?1:u/.3)),w!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const U of m.legs)U.saved[0].copy(U.up.quaternion),U.saved[1].copy(U.low.quaternion),U.saved[2].copy(U.foot.quaternion),y1(U,I,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!xf.has(f)&&f!=="read"?hl.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const gr=new k;function ti(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;gr.copy(e),gr[n]=0,gr.normalize();const c=.5*o/(o+a),h=1-gr.angleTo(s)/l;return Math.sign(gr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Ma extends Le{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new k,c=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new k,m=.5/o;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[M+0]=ti(x,c,"z","y",r,n),u[M+1]=1-ti(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[M+0]=1-ti(x,c,"z","y",r,n),u[M+1]=1-ti(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[M+0]=1-ti(x,c,"x","z",r,e),u[M+1]=ti(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[M+0]=1-ti(x,c,"x","z",r,e),u[M+1]=1-ti(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[M+0]=1-ti(x,c,"x","y",r,e),u[M+1]=1-ti(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[M+0]=ti(x,c,"x","y",r,e),u[M+1]=1-ti(x,c,"y","x",r,t);break}}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.segments,e.radius)}}const b1="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:Fi}=Math,hc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function w1(){const s=new FontFace("M PLUS Rounded 1c",`url("${b1}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const Vn={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function T1(s,e,t,n){s.setPixelRatio(Math.min(n,2)),s.setSize(e,t),s.shadowMap.enabled=!0,s.shadowMap.type=Tr,s.toneMapping=ua,s.toneMappingExposure=.95}function $u(s){let e=s;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function E1(s,e){const t=new pa(new Uint8Array([70,150,255]),3,1,da);t.minFilter=t.magFilter=wn,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Nn({color:2824987,side:Bn}),i=0,r=1,o=new k(0,1,0),a={uRimColor:{value:new At("#ffd2a6")},uRimAmt:{value:.45}};function l(_){return _.onBeforeCompile=z=>{z.uniforms.uRimColor=a.uRimColor,z.uniforms.uRimAmt=a.uRimAmt,z.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+z.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},_.customProgramCacheKey=()=>"rim1",_}const c=new Map;function h(_,z){if(!z){let X=c.get(_);return X||(X=l(new Ho({color:_,gradientMap:t})),c.set(_,X)),X}return l(new Ho(Object.assign({color:_,gradientMap:t},z)))}const d=new Map;function f(_,z=2){const X=_+z;let O=d.get(X);return O||(O=new Ks({color:0,emissive:_,emissiveIntensity:z,roughness:1}),d.set(X,O)),O}function u(_,z,X=!0){z&&z.userData.autoUV&&_.attributes.uv&&!_.userData.planar&&(_.type==="BoxGeometry"||_.type==="RoundedBoxGeometry")&&(q(_,.9),_.userData.planar=!0);const O=new Wt(_,z);return O.castShadow=X,O.receiveShadow=!0,O}const p=(_,z,X,O=.03)=>new Ma(_,z,X,2,Math.min(O,_/2.1,z/2.1,X/2.1));function x(_,z,X=i,O=!0){const re=u(_,z,O);if(X){const ce=new Wt(_,n);ce.scale.setScalar(1+X*r),ce.raycast=()=>{},re.add(ce)}return re}function m(_,z,X,O){return _.position.set(z,X,O),_}function g(_,z,X,O){return _.rotation.set(z,X,O),_}function M(_,z,X,O,re=0,ce=0){return z.position.set(X,ce,O),z.rotation.y=re,_.add(z),z}function E(_,z,X,O,re,ce,Ge=i*1.6,Tt=7){const Dt=X.clone().normalize(),Mt=x(new Mn(re,O,Tt),ce,Ge);return Mt.quaternion.setFromUnitVectors(o,Dt),Mt.position.copy(z).addScaledVector(Dt,O*.45),_.add(Mt),Mt}const w=$u(20261116),I=(_,z)=>_+(z-_)*w(),P=_=>_[Math.floor(w()*_.length)],v=$u(777),b=(_,z)=>_+(z-_)*v();function F(_,z,X,O){const re=document.createElement("canvas");re.width=_,re.height=z;const ce=re.getContext("2d");ce&&X(ce,_,z);const Ge=new Ql(re);return Ge.colorSpace=bn,Ge.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),Ge.wrapS=Ge.wrapT=ri,O&&Ge.repeat.set(O[0],O[1]),Ge}function U(_,z,X){const O=_.clone();return O.wrapS=O.wrapT=ri,O.repeat.set(z,X),O.needsUpdate=!0,O}function q(_,z=1,X=z){const O=_.attributes.position,re=_.attributes.normal,ce=_.attributes.uv;for(let Ge=0;Ge<O.count;Ge++){const Tt=Math.abs(re.getX(Ge)),Dt=Math.abs(re.getY(Ge)),Mt=Math.abs(re.getZ(Ge));let Ft,Lt;Dt>=Tt&&Dt>=Mt?(Ft=O.getX(Ge),Lt=O.getZ(Ge)):Tt>=Mt?(Ft=O.getZ(Ge),Lt=O.getY(Ge)):(Ft=O.getX(Ge),Lt=O.getY(Ge)),ce.setXY(Ge,Ft/z,Lt/X)}return ce.needsUpdate=!0,_}function se(_,z,X,O=0,re=z){const ce=_.attributes.position,Ge=_.attributes.normal,Tt=_.attributes.uv;for(let Dt=0;Dt<ce.count;Dt++){const Mt=Math.abs(Ge.getX(Dt)),Ft=Math.abs(Ge.getZ(Dt)),Lt=(Mt>Ft?ce.getZ(Dt):ce.getX(Dt))/X;Tt.setXY(Dt,Lt,(ce.getY(Dt)+z/2+O)/re)}return Tt.needsUpdate=!0,_}const j=new kt,N=new gn,ie=new Ai,ae=new k,Z=new k,V=new At;function ne(_,z,X={}){if(!z.length)return null;const O=X.mat||l(new Ho({color:16777215,gradientMap:t})),re=new Gr(_,O,z.length);return re.castShadow=!!X.cast,re.receiveShadow=X.receive!==!1,z.forEach((ce,Ge)=>{ce.m?j.copy(ce.m):(ie.set(ce.rx||0,ce.ry||0,ce.rz||0),N.setFromEuler(ie),ae.set(ce.x??0,ce.y??0,ce.z??0),Z.set(ce.sx??1,ce.sy??1,ce.sz??1),j.compose(ae,N,Z)),re.setMatrixAt(Ge,j),(!X.mat||X.colors)&&re.setColorAt(Ge,V.set(ce.c||"#ffffff"))}),re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),re.computeBoundingSphere(),(X.parent||e).add(re),re}const he=new Le(1,1,1);function be(_,z,X,O=!0){return X.length?ne(he,X.map(([re,ce,Ge,Tt,Dt,Mt,Ft=0,Lt=0,Ze=0])=>({x:re,y:ce,z:Ge,sx:Tt,sy:Dt,sz:Mt,rx:Ft,ry:Lt,rz:Ze})),{mat:z,parent:_,cast:O}):null}function Je(_,z,X,O,re,ce,Ge,Tt){for(let Dt=0;Dt<re;Dt++){const Mt=b(0,z),Ft=b(0,X),Lt=b(ce,Ge);for(const[Ze,yt]of[[0,0],[z,0],[-z,0],[0,X],[0,-X]]){const rn=_.createRadialGradient(Mt+Ze,Ft+yt,0,Mt+Ze,Ft+yt,Lt),yn=O[Math.floor(v()*O.length)];rn.addColorStop(0,yn+Tt),rn.addColorStop(1,yn+"00"),_.fillStyle=rn,_.fillRect(Mt+Ze-Lt,Ft+yt-Lt,Lt*2,Lt*2)}}}function ut(_,z,X,O=.16){_.globalCompositeOperation="destination-in";const re=_.createLinearGradient(0,0,z,0);re.addColorStop(0,"rgba(0,0,0,0)"),re.addColorStop(O,"rgba(0,0,0,1)"),re.addColorStop(1-O,"rgba(0,0,0,1)"),re.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=re,_.fillRect(0,0,z,X),_.globalCompositeOperation="source-over"}function fe(_,z,X,O,re,ce,Ge,Tt,Dt,Mt,Ft){for(let Lt=X;Lt<re;Lt+=ce){let Ze=z-b(0,Tt);for(;Ze<O;){const yt=b(Ge,Tt);_.fillStyle=Dt[Math.floor(v()*Dt.length)],_.beginPath(),_.roundRect(Ze+Mt,Lt+Mt,yt-Mt*2,ce-Mt*2,Ft),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Ze+Mt*2,Lt+Mt*1.5,yt-Mt*4,3),Ze+=yt}}}function Ke(_,z,X,O,re,ce,Ge,Tt,Dt){const Mt=X/O;for(let Ft=0;Ft<O;Ft++){const Lt=Ft*Mt;let Ze=b(0,ce);const yt=Ze;for(;Ze<yt+z;){const rn=Math.min(b(re,ce),yt+z-Ze);if(rn<re*.5)break;const yn=Ge[Math.floor(v()*Ge.length)];for(const hn of[0,-z])_.fillStyle=yn,_.beginPath(),_.roundRect(Ze+hn+Tt,Lt+Tt,rn-Tt*2,Mt-Tt*2,Dt),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Ze+hn+Tt*2,Lt+Tt*1.5,rn-Tt*4,3);Ze+=rn}}}function at(_,z,X,O){for(let re=0;re<8;re++){let ce=-b(0,200);for(;ce<z;){const Ge=b(160,340);_.fillStyle=O[Math.floor(v()*O.length)],_.fillRect(ce,re*64,Ge,64),_.strokeStyle="rgba(255, 230, 200, 0.06)",_.lineWidth=2;for(let Tt=0;Tt<3;Tt++){const Dt=re*64+b(10,54);_.beginPath(),_.moveTo(ce+6,Dt),_.bezierCurveTo(ce+Ge*.3,Dt+b(-4,4),ce+Ge*.6,Dt+b(-4,4),ce+Ge-6,Dt),_.stroke()}_.fillStyle="rgba(20, 10, 6, 0.4)",_.fillRect(ce,re*64,3,64),_.fillStyle="rgba(20, 10, 6, 0.35)",_.beginPath(),_.arc(ce+10,re*64+14,2.5,0,Fi*2),_.arc(ce+10,re*64+50,2.5,0,Fi*2),_.fill(),ce+=Ge}_.fillStyle="rgba(20, 10, 6, 0.45)",_.fillRect(0,re*64,z,3)}}const gt=(_,z,X)=>{const O=_.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,z),O.addColorStop(1,X),_.fillStyle=O,_.fillRect(0,0,64,64)},Qe=F(512,512,(_,z,X)=>{_.fillStyle="#6f8b49",_.fillRect(0,0,z,X),Je(_,z,X,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let O=0;O<900;O++){_.strokeStyle=v()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",_.lineWidth=2;const re=b(0,z),ce=b(0,X);_.beginPath(),_.moveTo(re,ce),_.lineTo(re+b(-2,2),ce-b(5,10)),_.stroke()}}),xt=F(256,256,(_,z,X)=>{_.fillStyle="#8b6a4b",_.fillRect(0,0,z,X),Je(_,z,X,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let O=0;O<120;O++)_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",_.beginPath(),_.ellipse(b(0,z),b(0,X),b(1.5,4),b(1,3),b(0,3),0,Fi*2),_.fill()}),qt=F(256,256,(_,z,X)=>{_.fillStyle="#b0906a",_.fillRect(0,0,z,X),Je(_,z,X,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let O=0;O<160;O++)_.fillStyle="rgba(120, 90, 60, 0.25)",_.fillRect(b(0,z),b(0,X),2,2)}),pt=F(512,512,(_,z,X)=>{_.fillStyle="#5b524c",_.fillRect(0,0,z,X),Ke(_,z,X,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),Rt=F(512,512,(_,z,X)=>{_.fillStyle="#6a6058",_.fillRect(0,0,z,X),Ke(_,z,X,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),Pt=F(512,512,(_,z,X)=>{_.fillStyle="#8f6c4b",_.fillRect(0,0,z,X),Je(_,z,X,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let O=0;O<260;O++){const re=b(6,z-6),ce=b(6,X-6);_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",_.beginPath(),_.ellipse(re,ce,b(1.5,4),b(1,3),0,0,Fi*2),_.fill()}}),Re=F(256,512,(_,z,X)=>{const O=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let re=0;for(const[ce,Ge]of O)_.fillStyle=ce,_.fillRect(0,re,z,Ge*X+2),re+=Ge*X;Je(_,z,X,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let ce=0;ce<40;ce++){_.strokeStyle="rgba(40, 26, 18, 0.35)",_.lineWidth=2;const Ge=b(0,z),Tt=b(.15*X,X);_.beginPath(),_.moveTo(Ge,Tt),_.lineTo(Ge+b(-10,10),Tt+b(10,40)),_.stroke()}_.fillStyle="#5a7a44";for(let ce=0;ce<z;ce+=6)_.beginPath(),_.moveTo(ce,0),_.lineTo(ce+3,b(14,34)),_.lineTo(ce+6,0),_.fill()}),qe=F(256,128,(_,z,X)=>{_.fillStyle="#7a2420",_.fillRect(0,0,z,X);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a2a24":"#6a1e1a",_.fillRect(O*32,0,32,X);_.fillStyle="#e3d5b6",_.fillRect(0,X*.46,z,X*.08),_.fillStyle="#2a2224",_.fillRect(0,X*.43,z,3),_.fillRect(0,X*.57,z,3)}),it=F(256,256,(_,z,X)=>{for(let O=0;O<2;O++)_.fillStyle=["#a59a8c","#958a7d"][O],_.beginPath(),_.ellipse(z/2+b(-20,20),X*(.25+O*.5),z*.32,X*.17,b(-.3,.3),0,Fi*2),_.fill()}),lt=F(512,512,(_,z,X)=>{_.fillStyle="#5f5650",_.fillRect(0,0,z,X),fe(_,0,0,z,X,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),st=F(512,512,(_,z,X)=>at(_,z,X,["#5a3a2a","#4e3224","#62402e","#553728"])),ct=F(512,512,(_,z,X)=>at(_,z,X,["#4a3226","#553a2b","#3f2a20","#4e3428"])),dt=F(512,512,(_,z,X)=>at(_,z,X,["#a17a55","#94704d","#ab845e","#9a7552"])),ye=F(512,512,(_,z,X)=>at(_,z,X,["#7a5236","#6e4a31","#84593b","#734d33"])),ke=F(512,512,(_,z,X)=>{_.fillStyle="#3f3a3a",_.fillRect(0,0,z,X);for(let O=0;O<4;O++)for(let re=0;re<4;re++)_.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(re+O*3)%4],_.beginPath(),_.roundRect(re*128+4,O*128+4,120,120,6),_.fill(),_.fillStyle="rgba(255,255,255,0.05)",_.fillRect(re*128+10,O*128+10,108,6)}),ze=F(512,512,(_,z,X)=>{_.fillStyle="#4f4843",_.fillRect(0,0,z,X),fe(_,0,0,z,X,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),L=F(512,512,(_,z,X)=>{_.fillStyle="#4a433f",_.fillRect(0,0,z,X),fe(_,0,0,z,X,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Je(_,z,X,["#3e5a34","#4a3a30"],14,20,60,"30")}),tt=F(512,512,(_,z,X)=>{for(let O=0;O<8;O++)_.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][O%4],_.fillRect(O*64,0,64,X),_.fillStyle="rgba(25, 14, 10, 0.45)",_.fillRect(O*64,0,3,X),_.fillStyle="rgba(255, 220, 190, 0.05)",_.fillRect(O*64+8,0,3,X);_.fillStyle="#7a2320",_.fillRect(0,34,z,70),_.strokeStyle="#d9c9a6",_.lineWidth=6,_.lineJoin="round",_.beginPath();for(let O=0;O<=z;O+=32)_.lineTo(O,O%64?52:86);_.stroke()}),je=F(256,256,(_,z,X)=>{_.fillStyle="#4e1612",_.fillRect(0,0,z,X);for(let O=0;O<8;O++){const re=O%2?16:0;for(let ce=-32;ce<z+32;ce+=32)_.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(v()*4)],_.beginPath(),_.roundRect(ce+re+1,O*32+2,30,30,[2,2,12,12]),_.fill(),_.fillStyle="rgba(255, 200, 170, 0.12)",_.fillRect(ce+re+5,O*32+5,22,3);_.fillStyle="rgba(30, 6, 6, 0.35)",_.fillRect(0,O*32,z,3)}}),Ye=F(256,256,(_,z,X)=>{for(let O=0;O<4;O++)_.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][O],_.fillRect(O*64,0,64,X),_.fillStyle="rgba(20, 8, 6, 0.45)",_.fillRect(O*64,0,3,X)}),Ce=F(256,512,(_,z,X)=>{_.fillStyle="#6e1a19",_.fillRect(0,0,z,X),_.fillStyle="#2a1e1f",_.fillRect(0,0,z,26),_.fillRect(0,0,14,X),_.fillRect(z-14,0,14,X),_.fillStyle="#b08a3e",_.fillRect(0,26,z,6),_.fillStyle="#e3d5b6",_.beginPath(),_.moveTo(52,300),_.lineTo(204,300),_.lineTo(188,332),_.lineTo(156,332),_.lineTo(164,368),_.lineTo(196,368),_.lineTo(196,396),_.lineTo(60,396),_.lineTo(60,368),_.lineTo(92,368),_.lineTo(100,332),_.lineTo(68,332),_.closePath(),_.fill(),_.beginPath(),_.moveTo(128,120),_.bezierCurveTo(168,164,176,192,164,216),_.bezierCurveTo(152,236,104,236,92,216),_.bezierCurveTo(80,192,100,176,112,152),_.bezierCurveTo(120,168,124,172,132,176),_.bezierCurveTo(132,160,128,140,128,120),_.fill(),_.fillStyle="#6e1a19",_.beginPath(),_.moveTo(0,X),_.lineTo(z/2,X-60),_.lineTo(z,X),_.fill()}),nt=F(64,256,(_,z,X)=>{_.fillStyle="#6fa9c9",_.fillRect(0,0,z,X);for(let O=0;O<40;O++)_.fillStyle=O%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",_.fillRect(O*23%64,O*41%256,3+O%3*2,18+O%5*10)}),Se=F(128,128,(_,z,X)=>{_.fillStyle="#c4c4c4",_.fillRect(0,0,z,X);for(let O=0;O<70;O++){const re=O*37%z,ce=(O*59+O%7*11)%X,Ge=4+O%4*3;_.fillStyle=O%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",_.beginPath(),_.ellipse(re,ce,Ge,1.2+O%3*.5,O*.7%3.14,0,2*Math.PI),_.fill(),re+Ge>z&&(_.beginPath(),_.ellipse(re-z,ce,Ge,1.4,O*.7%3.14,0,2*Math.PI),_.fill())}}),le=F(256,180,(_,z,X)=>{_.fillStyle="#efe4cc",_.fillRect(0,0,z,X),_.strokeStyle="#4f76b0",_.lineWidth=3,_.strokeRect(20,20,216,30),_.strokeRect(20,62,66,46),_.strokeRect(95,62,66,46),_.strokeRect(170,62,66,46),_.strokeRect(20,120,216,42),_.strokeStyle="#b8483e",_.beginPath(),_.moveTo(26,150),_.lineTo(80,132),_.lineTo(130,145),_.lineTo(226,126),_.stroke()}),C=F(256,200,(_,z,X)=>{const O=_.createLinearGradient(0,0,0,X);O.addColorStop(0,"#d98a62"),O.addColorStop(1,"#f2d2a8"),_.fillStyle=O,_.fillRect(0,0,z,X),_.fillStyle="#5c6f48",_.beginPath(),_.moveTo(0,150),_.quadraticCurveTo(80,100,150,140),_.quadraticCurveTo(210,120,256,135),_.lineTo(256,200),_.lineTo(0,200),_.fill(),_.fillStyle="#4a3a3c",_.fillRect(150,70,44,72),_.fillStyle="#7a2420",_.beginPath(),_.moveTo(144,72),_.lineTo(172,40),_.lineTo(200,72),_.fill(),_.fillStyle="#ffd27a",_.fillRect(165,92,14,18)}),S=F(256,200,_=>{_.fillStyle="#c8b18a",_.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((z,X)=>{_.fillStyle=z,_.fillRect(16+X%3*78,16+Math.floor(X/3)*60,66,48)}),_.fillStyle="#efe4cc",_.fillRect(16,140,224,44),_.fillStyle="#2b3a36",_.fillRect(28,152,120,8),_.fillRect(28,166,80,6)}),Q=F(256,160,(_,z,X)=>{_.fillStyle="rgba(40, 200, 220, 0.18)",_.fillRect(0,0,z,X);const O=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let re=0;re<9;re++)_.fillStyle=O[re%4],_.fillRect(18+re%3*12,18+re*14,40+re*53%140,6)}),Me=F(256,128,(_,z,X)=>{_.fillStyle="#3d6f99",_.fillRect(0,0,z,X),_.fillStyle="#8aa866";for(const[O,re,ce,Ge]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])_.beginPath(),_.ellipse(O,re,ce,Ge,.3,0,Fi*2),_.fill()}),pe=F(128,128,(_,z,X)=>{_.fillStyle="#c9a75a",_.fillRect(0,0,z,X);for(let O=0;O<160;O++){_.strokeStyle=O%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",_.lineWidth=2;const re=b(0,z),ce=b(0,X);_.beginPath(),_.moveTo(re,ce),_.lineTo(re+6,ce+2),_.stroke()}}),Ue=F(128,128,_=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((z,X)=>{_.fillStyle=z,_.beginPath(),_.arc(64,64,62-X*12,0,Fi*2),_.fill()})}),He=F(256,256,(_,z,X)=>{_.fillStyle="#7a5a3c",_.fillRect(0,0,z,X);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a9a48":"#a7a24e",_.fillRect(0,O*32+6,z,20)}),ve=F(64,64,_=>gt(_,"rgba(255,255,255,1)","rgba(255,255,255,0)")),we=F(64,64,_=>gt(_,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Ie=F(64,64,_=>{_.translate(32,32),_.fillStyle="#fff6c8",_.beginPath();for(let z=0;z<8;z++){const X=z%2?9:30,O=z*Fi/4;_.lineTo(Math.cos(O)*X,Math.sin(O)*X)}_.closePath(),_.fill()}),W=F(8,512,(_,z,X)=>{const O=_.createLinearGradient(0,0,0,X);O.addColorStop(0,"#4c6994"),O.addColorStop(.38,"#8ea6c4"),O.addColorStop(.62,"#d8c2a6"),O.addColorStop(.8,"#e2a682"),O.addColorStop(1,"#b8674f"),_.fillStyle=O,_.fillRect(0,0,z,X)});W.wrapS=W.wrapT=Xn;const xe={grass:Qe,dirt:xt,sand:qt,tCobble:pt,tFlag:Rt,tDirt:Pt,strata:Re,balloon:qe,roadStones:it,plaza:lt,planksWar:st,planksDark:ct,planksLight:dt,planks:ye,slate:ke,stoneWall:ze,castleWall:L,plankWall:tt,roof:je,gable:Ye,banner:Ce,water:nt,ripple:Se,paper:le,painting:C,moodboard:S,code:Q,globe:Me,straw:pe,target:Ue,field:He,soft:ve,blob:we,spark:Ie,sky:W,grain:void 0};function ge(_,z=2.2){const X=_.image,O=X.width,re=X.height;if(!(O>0)||!(re>0))return _;const ce=X.getContext("2d");if(!ce)return _;const Ge=ce.getImageData(0,0,O,re).data,Tt=new Float32Array(O*re);for(let Ze=0;Ze<O*re;Ze++)Tt[Ze]=((Ge[Ze*4]??0)*.299+(Ge[Ze*4+1]??0)*.587+(Ge[Ze*4+2]??0)*.114)/255;const Dt=document.createElement("canvas");Dt.width=O,Dt.height=re;const Mt=Dt.getContext("2d");if(!Mt)return _;const Ft=Mt.createImageData(O,re);for(let Ze=0;Ze<re;Ze++)for(let yt=0;yt<O;yt++){const rn=Tt[Ze*O+(yt-1+O)%O]??0,yn=Tt[Ze*O+(yt+1)%O]??0,hn=Tt[(Ze-1+re)%re*O+yt]??0,T=Tt[(Ze+1)%re*O+yt]??0,D=(rn-yn)*z,H=(T-hn)*z,$=Math.hypot(D,H,1),ue=(Ze*O+yt)*4;Ft.data[ue]=(D/$*.5+.5)*255,Ft.data[ue+1]=(H/$*.5+.5)*255,Ft.data[ue+2]=(1/$*.5+.5)*255,Ft.data[ue+3]=255}Mt.putImageData(Ft,0,0);const Lt=new Ql(Dt);return Lt.wrapS=Lt.wrapT=ri,Lt.colorSpace=zi,Lt.anisotropy=_.anisotropy,Lt.repeat.copy(_.repeat),Lt}const Xe={},te=(_,z)=>Xe[_]||=ge(xe[_],z);function J(_,z=1,X=1,O=2.2,re={}){const ce=z===1&&X===1?xe[_]:U(xe[_],z,X),Ge=z===1&&X===1?te(_,O):U(te(_,O),z,X);return h("#ffffff",Object.assign({map:ce,normalMap:Ge,normalScale:new Oe(1,1)},re))}xe.grain=F(256,256,(_,z,X)=>{_.fillStyle="#d6cbbf",_.fillRect(0,0,z,X);for(let O=0;O<70;O++){_.strokeStyle=v()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",_.lineWidth=b(1,3);const re=b(0,z);_.beginPath(),_.moveTo(re,0),_.bezierCurveTo(re+b(-8,8),X*.3,re+b(-8,8),X*.7,re+b(-4,4),X),_.stroke()}for(let O=0;O<6;O++){const re=b(10,z-10),ce=b(10,X-10);_.strokeStyle="rgba(80, 50, 30, 0.3)",_.lineWidth=2,_.beginPath(),_.ellipse(re,ce,b(3,6),b(8,14),0,0,Fi*2),_.stroke()}});const de=_=>{const z=h(_,{map:xe.grain,normalMap:te("grain",1.5)});return z.userData.autoUV=!0,z},De={stone:J("stoneWall",1,1,2),castle:J("castleWall",1,1,2),plankWall:J("plankWall",1,1,1.4),timber:h(Vn.timber),wood:de(Vn.wood),woodD:de(Vn.woodD),woodL:de(Vn.woodL),iron:h(Vn.iron),ironL:h(Vn.ironL),rust:h(Vn.rust),bone:h(Vn.bone),boneD:h(Vn.boneD),red:h(Vn.red),redD:h(Vn.redD),redL:h(Vn.redL),black:h(Vn.black),gold:h(Vn.gold),straw:h("#ffffff",{map:xe.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:e,renderer:s,COL:Vn,GRAD:t,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:l,toon:h,glow:f,mesh:u,rbox:p,part:x,at:m,rot:g,put:M,spike:E,rnd:w,rr:I,pick:P,trnd:v,tr:b,canvasTex:F,blobs:Je,edgeFade:ut,tiled:U,planarUV:q,wallUV:se,instanced:ne,boxes:be,UNIT_BOX:he,TEX:xe,nrm:te,relief:J,woodMat:de,M:De,_c:V}}const{PI:nn}=Math,En=.32,Io=s=>s.userData.up,A1=s=>s.userData.cutY;function R1(s,e,t,n,i){const{scene:r,M:o,COL:a,TEX:l,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:x,put:m,spike:g,rr:M,pick:E,tiled:w,planarUV:I,wallUV:P,boxes:v}=s,{SPINNERS:b,skull:F,horns:U,torch:q,flame:se,table:j,skullCandle:N,throne:ie,rug:ae,trophy:Z,hangingBanner:V,weaponRack:ne,shield:he,brazier:be,chest:Je,crate:ut,barrel:fe,stool:Ke,drum:at,poleBanner:gt,skullPole:Qe,woodpile:xt,spikes:qt,bookshelf:pt,desk:Rt,candle:Pt,fence:Re,plant:qe,cauldron:it,bench:lt,lampPost:st,scrollStack:ct,telescope:dt,starGlobe:ye,crystal:ke,wallMap:ze,easel:L,bottle:tt,anvil:je,sack:Ye,cart:Ce,roundTable:nt,mug:Se,lanternString:le,signPost:C,bed:S,curtain:Q,partition:Me,wardrobe:pe}=e,{patch:Ue}=t,He={},ve={war:[l.planksWar,2.6],dark:[l.planksDark,2.6],light:[l.planksLight,2.6],planks:[l.planks,2.6],tiles:[l.slate,3.6]};function we(ee,A,_e,oe,y,R,Y={}){const B=Y.T||En,K=Y.base||0,me=Y.stone!==!1,Ne=me?1.15:K,Fe=me?Vt:K,Be=me?Ne:K+.9,et=p(new Ae,0,Be,0);ee.add(et),ee.userData.up=et,et.userData.movesWithWall=!0,ee.userData.cutY=Be;const ft={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function _t(Ve,vt){const[$e,ot,Ut,Yt,dn,Jt,Hn=0,Pn=0,Yi=0]=vt,xi=ot-dn/2,ya=ot+dn/2,[jc,eh]=ft[Ve];Hn||Yi||xi>=Be-.01?eh.push([$e,ot-Be,Ut,Yt,dn,Jt,Hn,Pn,Yi]):ya<=Be+.01?jc.push(vt):(jc.push([$e,(xi+Be)/2,Ut,Yt,Be-xi,Jt,Hn,Pn,Yi]),eh.push([$e,(Be+ya)/2-Be,Ut,Yt,ya-Be,Jt,Hn,Pn,Yi]))}const ht=oe?oe.x-oe.w/2:0,Ot=oe?oe.x+oe.w/2:0,Bt=oe?[[-A/2,ht],[Ot,A/2]]:[[-A/2,A/2]],It=_e-Ne;for(const[Ve,vt]of Bt){const $e=vt-Ve;if($e<.05)continue;const ot=(Ve+vt)/2;if(me)ee.add(p(u(I(new Le($e,Ne,B+.08),1.6),o.stone),ot,Ne/2,0)),et.add(p(u(P(new Le($e,It,B),It,1.3),o.plankWall),ot,It/2,0));else{const Ut=Be-Ne,Yt=_e-Be;ee.add(p(u(P(new Le($e,Ut,B),Ut,1.3,0,It),o.plankWall),ot,Ne+Ut/2,0)),et.add(p(u(P(new Le($e,Yt,B),Yt,1.3,Ut,It),o.plankWall),ot,Yt/2,0))}}if(oe){const Ve=Vt+2.3,vt=_e-Ve;et.add(p(u(P(new Le(oe.w,vt,B),vt,1.3),o.plankWall),oe.x,Ve+vt/2-Be,0)),_t("timber",[oe.x-oe.w/2-.1,(Ve+.1)/2,0,.24,Ve+.1,B+.16]),_t("timber",[oe.x+oe.w/2+.1,(Ve+.1)/2,0,.24,Ve+.1,B+.16]),_t("timber",[oe.x,Ve+.08,0,oe.w+.8,.3,B+.2]);for(const $e of[-1,1])for(let ot=0;ot<4;ot++)_t("timber",[oe.x+$e*(oe.w/2+.1),.35+ot*.55,B/2+.09,.07,.07,.04]);et.add(p(F(.26),oe.x,Ve+.42-Be,B/2+.17)),et.add(p(U(.6),oe.x,Ve+.48-Be,B/2+.15));for(const $e of[-1,1])et.add(p(q(),oe.x+$e*(oe.w/2+.55),Vt+1.7-Be,B/2+.02))}_t("timber",[0,Ne+(me?0:.09),0,A,.18,B+.12]),_t("timber",[0,_e-.1,0,A,.22,B+.12]);const Gt=Math.max(1,Math.round(A/2.3)),cn=[];for(let Ve=1;Ve<Gt;Ve++){const vt=-A/2+Ve*A/Gt;if(!(oe&&vt>ht-.45&&vt<Ot+.45)){cn.push(vt),_t("timber",[vt,Ne+It/2,0,.2,It,B+.1]);for(const $e of[Ne+.09,_e-.1])_t("timber",[vt,$e,B/2+.08,.09,.09,.06])}}if(y)for(const Ve of[-A/2+.2,A/2-.2])_t("timber",[Ve,(K+_e+.12)/2,0,.42,_e-K+.12,B+.18]);const G=[-A/2+(y?.41:0),...cn,A/2-(y?.41:0)];oe&&G.push(ht-.22,Ot+.22),G.sort((Ve,vt)=>Ve-vt);let Ee=0;for(let Ve=0;Ve<G.length-1;Ve++){const vt=G[Ve],$e=G[Ve+1],ot=$e-vt,Ut=(vt+$e)/2;if(!(ot<.9)&&!(oe&&Ut>ht-.3&&Ut<Ot+.3)){if(Ee++,R&&ot>1.5&&Ee%2===1){const Yt=Fe+(me?1.62:1.35);_t("panes",[Ut,Yt,0,.86,.78,Y.paneT||B+.04]);for(const dn of[[Ut,Yt+.44,0,1.08,.1,B+.12],[Ut,Yt-.44,0,1.12,.12,B+.16],[Ut-.48,Yt,0,.1,.96,B+.12],[Ut+.48,Yt,0,.1,.96,B+.12],[Ut,Yt,0,.06,.78,B+.06],[Ut,Yt,0,.86,.05,B+.06]])_t("timber",dn);for(const dn of[-1,1])_t("shutters",[Ut+dn*.78,Yt,B/2+.05,.42,.86,.05,0,dn*.35,0]),_t("timber",[Ut+dn*.78+dn*.012,Yt,B/2+.09,.44,.08,.03,0,dn*.35,0])}else if(ot>1){const Yt=It-.3,dn=Math.atan2(Yt,ot-.2),Jt=Math.hypot(Yt,ot-.2);for(const Hn of[-1,1])_t("timber",[Ut,Ne+It/2,B/2+.04,Jt,.13,.06,0,0,Hn*dn])}}}const[Pe,Ct]=ft.timber,[Et,bt]=ft.panes,[We,mt]=ft.shutters;v(ee,o.timber,Pe),v(et,o.timber,Ct),v(ee,o.pane,Et,!1),v(et,o.pane,bt,!1),v(ee,o.red,We),v(et,o.red,mt),Xe(ee,Be)}const Ie=new k,W=new kt,xe=new kt,ge=new kt;function Xe(ee,A){const _e=Io(ee),oe=new Map;ee.traverse(B=>{if(!(B instanceof Wt)||Array.isArray(B.material))return;for(let Ne=B;Ne&&Ne!==ee;Ne=Ne.parent)if(Ne===_e)return;const K=B.material,me=oe.get(K);me?me.push(B):oe.set(K,[B])});const y=B=>{const K=B;return(K.color?K.color.r*.3+K.color.g*.59+K.color.b*.11:0)+(K.map?.5:0)},R=[...oe.keys()].sort((B,K)=>y(B)-y(K));ee.updateWorldMatrix(!0,!0),ge.copy(ee.matrixWorld).invert();const Y=new Set;R.forEach((B,K)=>{if(K)for(const me of oe.get(B)??[]){const Ne=me.geometry;if(Y.has(Ne))continue;Y.add(Ne),W.multiplyMatrices(ge,me.matrixWorld),xe.copy(W).invert();const Fe=Ne.attributes.position;let Be=!1;for(let et=0;et<Fe.count;et++)Ie.fromBufferAttribute(Fe,et).applyMatrix4(W),!(Math.abs(Ie.y-A)>.002)&&(Ie.y-=.003*K,Ie.applyMatrix4(xe),Fe.setXYZ(et,Ie.x,Ie.y,Ie.z),Be=!0);Be&&(Fe.needsUpdate=!0,Ne.computeBoundingBox(),Ne.computeBoundingSphere())}})}function te(ee){const A=[],_e=new Map;return ee.traverse(oe=>{if(!(oe instanceof Wt))return;const y=oe.material;let R=_e.get(y);R||(R=y.clone(),R.transparent=!0,_e.set(y,R),A.push(R)),oe.material=R}),A}function J(ee,A,_e){const oe=ee.r,y=_e.pitch||.6,R=.6,Y=oe.d/2+R,B=new Ae;B.position.y=A-R*Math.tan(y),ee.g.add(B);const K=Y*Math.tan(y),me=R*Math.tan(y),Ne=Y/Math.cos(y),Fe=d("#ffffff",{map:l.roof});for(const Bt of[-1,1]){const It=u(I(new Le(oe.w+R*2,.18,Ne),1.6),Fe);It.rotation.x=Bt<0?-y:y,It.position.set(0,K/2,Bt*Y/2),B.add(It)}const Be=new Wr;Be.moveTo(-oe.d/2,me),Be.lineTo(oe.d/2,me),Be.lineTo(0,K-.12),Be.closePath();const et=new zc(Be),ft=d("#ffffff",{map:l.gable,side:mn});for(const Bt of[-1,1])B.add(p(x(u(et,ft),0,nn/2,0),Bt*(oe.w/2+.02),0,0)),B.add(p(x(F(.34),0,Bt*nn/2,0),Bt*(oe.w/2+.2),me+(K-me)*.42,0)),B.add(p(x(U(1.1),0,Bt*nn/2,0),Bt*(oe.w/2+R+.05),K+.12,0));B.add(p(u(new Le(oe.w+R*2+.2,.2,.26),o.iron),0,K+.04,0));const _t=Math.floor((oe.w+R)/1.5);for(let Bt=0;Bt<_t;Bt++)g(B,new k(-oe.w/2+.5+Bt*(oe.w-1)/Math.max(1,_t-1),K+.12,0),h,.34,.06,o.boneD,0,5);let ht=null;if(_e.chimney){const[Bt,It]=_e.chimney,Gt=K+1.4;B.add(p(u(I(new Le(.85,Gt,.85),1.2),o.stone),Bt,Gt/2,It)),B.add(p(u(new Le(1.05,.16,1.05),o.iron),Bt,Gt+.05,It)),ht=[Bt,Gt+.3,It]}const Ot=te(B);return{R:B,mats:Ot,base:B.position.y,hR:K,smokeAt:ht}}function de(ee){return{S:{c:[0,ee.d/2],n:[0,1],L:ee.w+En},N:{c:[0,-ee.d/2],n:[0,-1],L:ee.w+En},E:{c:[ee.w/2,0],n:[1,0],L:ee.d-En},W:{c:[-ee.w/2,0],n:[-1,0],L:ee.d-En}}}function De(ee,A){const _e=new Ae;ee.add(_e);const oe=new Ae;return oe.position.set(A.c[0],0,A.c[1]),oe.rotation.y=Math.atan2(A.n[0],A.n[1]),_e.add(oe),{sg:_e,sf:oe}}function _(ee,A,_e){if(!A)return;A.updateWorldMatrix(!0,!0),ee.g.updateMatrixWorld(!0);const oe=[];A.traverse(y=>{y instanceof Wt&&oe.push(y)});for(const y of oe){const R=y.geometry;R.attributes.uv||R.setAttribute("uv",new zt(new Float32Array(R.attributes.position.count*2),2));const Y=mf(s,y.material),B=new Wt(R,Y);B.castShadow=!Y.isMeshStandardMaterial,B.receiveShadow=!0,y.matrixWorld.decompose(B.position,B.quaternion,B.scale),ee.g.add(B),B.updateMatrixWorld(!0),_e.attach(B)}}function z(ee,A,_e,oe,y,R={}){const Y=R.T||En,B=R.stone!==!1,K=R.base||0,me=B?1.15:K+.9,Ne=p(new Ae,0,me,0);if(A.add(Ne),A.userData.up=Ne,Ne.userData.movesWithWall=!0,A.userData.cutY=me,_(ee,_e,A),_(ee,oe,Ne),Xe(A,me),y)for(const Fe of[-1,1])Ne.add(p(q(),y.x+Fe*(y.w/2+.55),Vt+1.7-me,Y/2+.08))}function X(ee,A,_e,oe){const y=ee.r,R=_e.pitch||.6,Y=.6,B=y.d/2+Y,K=new Ae;K.position.y=A-Y*Math.tan(R),ee.g.add(K);const me=B*Math.tan(R);_(ee,oe,K);const Ne=te(K);let Fe=null;if(_e.chimney){const[Be,et]=_e.chimney;Fe=[Be,me+1.4+.3,et]}return{R:K,mats:Ne,base:K.position.y,hR:me,smokeAt:Fe}}const O={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function re(ee,A={}){const _e=new Ae;_e.position.set(ee.x,0,ee.z),_e.rotation.y=ee.ry||0,r.add(_e);const oe=ee.id||A.id,y={id:oe,r:ee,g:_e,sides:{},lift:0,view:"ground",deco:!!A.deco,name:ee.name,top:0},R=O[oe],Y=ft=>R?_f(R,oe+"_"+ft):null;R?_(y,Y("base"),_e):_e.add(p(u(I(new Le(ee.w+.6,Vt+.3,ee.d+.6),1.4),o.stone),0,(Vt+.3)/2-.3,0));const[B,K]=ve[ee.floor||"planks"];_e.add(x(p(u(new tn(ee.w,ee.d),d("#ffffff",{map:w(B,ee.w/K,ee.d/K)}),!1),0,Vt+.004,0),-nn/2,0,0));const me=Vt+ee.wallH,Ne=de(ee),Fe=ee.doorLocal||[0,ee.d/2],Be=ee.door?ee.door.side:"S";for(const[ft,_t]of Object.entries(Ne)){const{sg:ht,sf:Ot}=De(_e,_t),Bt=Math.cos(Ot.rotation.y),It=-Math.sin(Ot.rotation.y),Gt=Be===ft?{x:(Fe[0]-_t.c[0])*Bt+(Fe[1]-_t.c[1])*It,w:ee.door&&ee.door.width||1.4}:null;R?z(y,Ot,Y(ft+"_lo"),Y(ft+"_hi"),Gt):we(Ot,_t.L,me,Gt,ft==="N"||ft==="S",A.windows!==!1),y.sides[ft]={g:ht,sf:Ot,up:Io(Ot),n:_t.n,s:1}}if(!R){const ft=ee.doorN||[0,1],_t=Math.abs(ft[0])>0?[.7,(ee.door&&ee.door.width||1.4)+.5]:[(ee.door&&ee.door.width||1.4)+.5,.7];_e.add(p(u(I(new Le(_t[0],.14,_t[1]),1.2),o.stone),Fe[0]+ft[0]*.62,.07,Fe[1]+ft[1]*.62))}let et=me;if(ee.storeys===2){const ft=ee.upperH||2.5,_t=p(new Ae,0,me,0);_t.userData.movesWithWall=!0,_e.add(_t);const ht={U:_t,sides:{},lift:0,mats:[],top:me};if(y.upper=ht,R)_(y,Y("Ufloor"),_t);else{const Bt=d("#ffffff",{map:B}),[It,Gt,cn,G]=A.stairHole||[0,0,0,0],Ee=ee.w/2,Pe=ee.d/2,Ct=A.stairHole?[[-Ee,It,-Pe,Pe],[Gt,Ee,-Pe,Pe],[It,Gt,-Pe,cn],[It,Gt,G,Pe]]:[[-Ee,Ee,-Pe,Pe]];for(const[Et,bt,We,mt]of Ct)bt-Et<.05||mt-We<.05||_t.add(p(u(I(new Le(bt-Et,.22,mt-We),K),Bt),(Et+bt)/2,.09,(We+mt)/2))}const Ot=[];for(const[Bt,It]of Object.entries(Ne)){const{sg:Gt,sf:cn}=De(_t,It);R?z(y,cn,Y("U"+Bt+"_lo"),Y("U"+Bt+"_hi"),null,{base:.2,stone:!1,T:En-.05}):(we(cn,It.L,.2+ft,null,Bt==="N"||Bt==="S",!0,{base:.2,stone:!1,T:En-.05,paneT:En-.03}),Ot.push([0,.05,.2,It.L+.2,.2,.18]),v(cn,o.timber,Ot.slice(-1))),ht.sides[Bt]={g:Gt,sf:cn,up:Io(cn),n:It.n,s:1}}et=me+.2+ft}return y.top=et,y.roof=R?X(y,et,A,Y("roof")):J(y,et,A),He[oe]=y,y}function ce(ee,A,_e,oe,y){const R=ee.upper,Y=12,B=R.top+.2-Vt,K=(oe-_e)/Y,me=[];for(let ft=0;ft<Y;ft++){const _t=B*(ft+1)/Y;me.push([A,Vt+_t/2,_e+K*(ft+.5),y,_t,Math.abs(K)+.01])}v(ee.g,o.wood,me);const Ne=A>0?-1:1,Fe=A+Ne*(y/2+.04);for(let ft=0;ft<=4;ft++){const _t=_e+(oe-_e)*ft/4,ht=Vt+B*ft/4;ee.g.add(p(u(new Le(.07,.95,.07),o.woodD),Fe,ht+.5,_t))}const Be=Math.hypot(oe-_e,B),et=p(u(new Le(.08,.08,Be),o.woodL),Fe,Vt+B/2+.95,(_e+oe)/2);et.rotation.x=-Math.atan2(B,oe-_e),ee.g.add(et)}function Ge(ee,A,_e,oe,y){const R=A1(ee);oe>R?(A.position.set(_e,oe-R,y),Io(ee).add(A)):(A.position.set(_e,oe,y),ee.add(A))}const Tt=(ee,A)=>ee==="S"?A:ee==="N"||ee==="E"?-A:A;function Dt(ee,A,_e,oe,y,R=.1){const Y=ee.upper.sides[A];return _e.rotation.y=nn,Ge(Y.sf,_e,Tt(A,oe),y,-((En-.05)/2+R/2+.01)),_e}const Mt=(ee,A,_e,oe,y=0)=>m(ee.upper.U,A,_e,oe,y,.2);function Ft(ee,A,_e=0,oe=.9){for(let y=0;y<A.length-1;y++){const[R,Y]=A[y],[B,K]=A[y+1],me=Math.hypot(B-R,K-Y),Ne=p(u(new Le(me,.07,.07),o.woodL),(R+B)/2,_e+oe,(Y+K)/2);Ne.rotation.y=-Math.atan2(K-Y,B-R),ee.add(Ne);const Fe=Math.max(1,Math.round(me/.5));for(let Be=0;Be<=Fe;Be++)ee.add(p(u(new Le(.05,oe,.05),o.woodD),R+(B-R)*Be/Fe,_e+oe/2,Y+(K-Y)*Be/Fe))}}function Lt(ee,A,_e,oe,y,R=.1,Y=!0){const B=ee.sides[A];return Y&&(_e.rotation.y=nn),Ge(B.sf,_e,Tt(A,oe),y,Y?-(En/2+R/2+.01):En/2+R/2+.01),_e}const Ze=(ee,A,_e,oe,y=0)=>m(ee.g,A,_e,oe,y,Vt),yt=(ee,A,_e,oe,y=0)=>m(ee.g,A,_e,oe,y,0),rn=(ee,A,_e)=>vf(ee,A,_e),yn=document.createElement("canvas");yn.width=512,yn.height=280;const hn=new Ql(yn);hn.colorSpace=bn;let T=i;function D(ee=T){T=ee;const A=yn.getContext("2d");if(!A)return;const _e=512,oe=ee.filter(R=>R==="done").length;A.fillStyle="#2e2422",A.fillRect(0,0,_e,280),A.fillStyle="#e3d5b6",A.font=`800 40px ${hc}`,A.textAlign="left",A.fillText("TASKS",28,58),A.fillStyle="#ffd27a",A.textAlign="right",A.fillText(`${oe} / 5`,_e-28,58);const y={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((R,Y)=>{const B=28+Y*94,K=90;A.fillStyle=y[ee[Y]??"todo"],A.beginPath(),A.roundRect(B,K,78,96,14),A.fill(),A.fillStyle="rgba(255, 255, 255, 0.22)",A.beginPath(),A.roundRect(B+6,K+6,66,18,8),A.fill(),A.fillStyle="#1e1a1c",A.font=`800 46px ${hc}`,A.textAlign="center",A.fillText(R,B+39,K+70)}),A.fillStyle="#1b1616",A.beginPath(),A.roundRect(28,220,_e-56,28,14),A.fill(),oe&&(A.fillStyle="#d9762e",A.beginPath(),A.roundRect(28,220,(_e-56)*oe/5,28,14),A.fill()),hn.needsUpdate=!0}D(),document.fonts&&document.fonts.ready.then(()=>D());function H(){const ee=new Ae;return ee.add(u(new Le(2.7,1.65,.1),o.woodD)),ee.add(p(new Wt(new tn(2.45,1.35),new Nn({map:hn,toneMapped:!1})),0,0,.06)),ee.add(p(u(new Le(2.9,.14,.2),o.wood),0,.9,.02)),ee.add(p(F(.18),0,1.08,.06)),ee}{const ee=hi.war,A=re(ee,{pitch:.62}),_e=Vt+ee.wallH;Ze(A,j(3.4,2,.86),-2.5,-.6);{const oe=new tn(3,1.7,26,16),y=oe.attributes.position,R=[];for(let B=0;B<y.count;B++){const K=y.getX(B),me=y.getY(B),Ne=Math.max(0,Math.sin(K*2.1+1)*Math.cos(me*2.7)*.1+Math.sin(K*5+me*3)*.03);y.setZ(B,Ne),R.push(...Ne>.08?[.86,.82,.76]:Ne>.03?[.5,.38,.28]:Ne>.005?[.42,.55,.32]:[.32,.5,.62])}oe.setAttribute("color",new zt(R,3)),oe.computeVertexNormals();const Y=x(p(u(oe,new Ho({vertexColors:!0,gradientMap:c}),!1),-2.5,Vt+.91,-.6),-nn/2,0,0);A.g.add(Y);for(const[B,K,me]of[[-.9,-.3,a.red],[.4,.3,"#3f5f8f"],[1,-.4,a.gold],[-.2,-.5,a.red]])A.g.add(p(u(new rt(.012,.012,.24,4),o.dark,!1),-2.5+B,Vt+1.05,-.6+K)),A.g.add(p(u(new Le(.12,.07,.01),d(me),!1),-2.5+B+.06,Vt+1.13,-.6+K));for(const[B,K]of[[-1.55,-.85],[1.55,.85]])Ze(A,N(),-2.5+B,-.6+K).position.y=Vt+.9}Ze(A,ie(),-6.1,-2.6,ed(-6.1,-2.6,-2.5,-.6)),Ze(A,ae(1.6,[a.redD,a.bone,a.red,a.black,a.redL,a.redD]),-4.6,.6),Lt(A,"N",H(),3.8,Vt+1.95,.12),Lt(A,"N",Z(),-2.5,Vt+2.2,.1),Lt(A,"N",Z(),.9,Vt+2.1,.1),Lt(A,"N",V(1,1.9),-5.4,_e-.3,.04),Lt(A,"N",V(1,1.9),6.4,_e-.3,.04),Lt(A,"W",ne(4),.6,Vt,.3),Lt(A,"E",he(a.red),-2,Vt+1.9,.1),Lt(A,"E",he(a.black),1.2,Vt+1.9,.1),Ze(A,be(7),6.3,-3.3),Ze(A,be(0,.85),-6.7,3.5),Ze(A,Je(),6.3,1.6,-nn/2),Ze(A,ut(.6),5.3,3.6,.3),Ze(A,ut(.45),5.9,3.7,.9),Ze(A,fe(.9),-6.6,-.6),Ze(A,Ke(),-.9,-2.2),Ue("plaza",...rn(ee,0,7.4),5.8,3.6,-ee.ry,.014),yt(A,at(),-4.4,6,.3),yt(A,at(),5.6,5.9,-.2),yt(A,gt(3.4),-2.6,5),yt(A,gt(3.4),2.6,5),yt(A,Qe(2.6),-7,6.2),yt(A,Qe(2.2),7.8,5.4),yt(A,be(0),-6.2,5),yt(A,xt(2.4),-3,-6),yt(A,fe(),4.4,-5.6),yt(A,fe(.9),5,-6.1),yt(A,fe(1,!0),3.6,-6.2,.4),yt(A,x(ne(4),0,nn,0),.8,-5.6),yt(A,qt(3),-8.6,-1,nn/2)}{const ee=hi.library,A=re(ee,{pitch:.66,stairHole:[4,4.84,-2,0]}),_e=Vt+ee.wallH;for(const R of[-3.6,-1.4])Ze(A,pt(2),R,-ee.d/2+En/2+.27);for(const R of[-2.1,.3])Ze(A,pt(2),-ee.w/2+En/2+.27,R,nn/2);const oe=Rt("books");Ze(A,oe.g,1.8,-1.2),Ze(A,Pt(.18,4),2.45,-.95).position.y=Vt+.79;{const R=new Ae;R.add(p(u(new Le(1,.45,.9),d("#5a1f2a")),0,.3,0)),R.add(p(u(new Le(.86,.12,.74),d("#7a2a36")),0,.58,.04)),R.add(p(u(new Le(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const Y of[-1,1])R.add(p(u(new Le(.2,.6,.9),d("#4a1822")),Y*.5,.52,0));Ze(A,R,-3.3,1.9,.9)}Ze(A,ae(1.5,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const R=new Ae;R.add(p(u(new rt(.08,.2,1,8),o.woodD),0,.5,0)),R.add(x(p(u(new Le(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),R.add(x(p(u(new Le(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Ze(A,R,2.3,2.5,-.5)}{const R=new Ae;R.add(p(u(new rt(.05,.2,.9,10),o.woodD),0,.45,0));const Y=p(new Ae,0,1.25,0);Y.rotation.z=.4;const B=u(new en(.34,24,16),d("#ffffff",{map:l.globe}));Y.add(B),Y.add(x(u(new vn(.4,.02,6,28),o.gold),0,nn/2,0)),R.add(Y),Ze(A,R,.5,3),b.push({o:B,axis:"y",v:.25})}{const R=new Ae;R.add(p(u(new rt(.16,.26,.9,8),o.woodD),0,.45,0)),R.add(p(u(new en(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let Y=0;Y<3;Y++){const B=Y/3*nn*2;g(R,new k(Math.cos(B)*.14,.92,Math.sin(B)*.14),new k(Math.cos(B),2,Math.sin(B)),.3,.03,o.bone,0,5)}Ze(A,R,3,-3.2)}const y=[];for(const[R,Y,B]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[K,me]=rn(ee,R,Y);let Ne=Vt;for(let Fe=0;Fe<B;Fe++){const Be=M(.06,.1);y.push({x:K+M(-.03,.03),y:Ne+Be/2,z:me+M(-.03,.03),sx:M(.32,.42),sy:Be,sz:M(.24,.3),ry:ee.ry+M(-.3,.3),c:E(e.BOOK_COLS)}),Ne+=Be}}s.instanced(s.UNIT_BOX,y,{cast:!0}),Ze(A,N(),-4.3,3.4).position.y=Vt+.42,Ze(A,Pt(.5),-4.5,2.9),Ze(A,Pt(.34),-4.2,2.7),Lt(A,"E",V(.9,1.6),-3,_e-.3,.04),Lt(A,"S",Z(),1.6,Vt+2.1,.1);{const R=new Ae;R.add(p(u(new rt(2.2,2.4,7.6,22),d("#ffffff",{map:w(l.castleWall,3.5,2.4)})),0,3.8,0)),R.add(p(u(new rt(2.6,2.4,.4,22),o.stone),0,7.7,0)),R.add(p(u(new Mn(2.9,3.6,22),d("#ffffff",{map:w(l.roof,5,2)})),0,9.7,0)),R.add(p(F(.45),0,11.8,0));for(const[Y,B]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])R.add(p(x(u(new Le(.4,.9,.12),o.pane,!1),0,-Y+nn/2,0),Math.cos(Y)*2.32,B,Math.sin(Y)*2.32));R.add(p(x(V(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),yt(A,R,5.6,3.4)}Re(A.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let R=0;R<10;R++)yt(A,qe(M(.6,.9)),M(-8.6,-6.2),M(5.3,7.1));yt(A,it(),1.2,6.2),yt(A,lt(1.6,!0),3,6.7,nn),yt(A,Qe(2.2),-.4,5.6),yt(A,st(0),-4.6,4.6),yt(A,ut(.55),6.2,-1.4,.3),yt(A,ut(.4),6.3,-.8,.8),Ue("dirt",...rn(ee,.5,6.4),4.6,2.2,-ee.ry,.013),ce(A,4.42,-3.4,-.2,.84),Ft(A.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const R of[-3.6,-1.4,1])Mt(A,pt(2),R,-ee.d/2+En/2+.27);for(const R of[-2.1,.3,2.5])Mt(A,pt(2),-ee.w/2+En/2+.27,R,nn/2);Mt(A,j(2.2,1,.8,o.wood),.2,.7),Mt(A,ct(),-.4,.6).position.y=1.04,Mt(A,ct(),.9,.9).position.y=1.04,Mt(A,p(u(new Le(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,Mt(A,Pt(.2),-.6,1).position.y=1,Mt(A,Pt(.14),.95,.4).position.y=1,Mt(A,Ke(),.2,1.6),Mt(A,Ke(),-.9,1.5),Mt(A,dt(),2.4,2.9,nn),Mt(A,ye(),-2.6,2.6),Mt(A,ke(),2.9,-2.8),Mt(A,ae(1.3,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Dt(A,"S",ze(),-.6,1.75,.06),Dt(A,"E",Z(),2.4,1.8,.1),Mt(A,Je(),-3.6,3.2,0)}{const ee=hi.studio,A=re(ee,{pitch:.58}),_e=Vt+ee.wallH,oe=Rt("paper");Ze(A,oe.g,-2,-1.6);{const me=new Ae;me.add(u(new Le(1.6,1.25,.08),o.wood)),me.add(p(new Wt(new tn(1.45,1.1),new Nn({map:l.moodboard,toneMapped:!1})),0,0,.05)),Lt(A,"N",me,1.6,Vt+1.75,.08)}Ze(A,j(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[me,Ne,Fe]of[[-.35,-.1,"#3f5f8f"],[0,.12,a.red],[.32,-.05,a.gold],[.12,-.2,"#5f8a52"]])Ze(A,p(u(new rt(.08,.09,.16,12),d(Fe)),0,.08,0),2.6+me,-2+Ne).position.y=Vt+.78;for(let me=0;me<3;me++){const Ne=p(u(new Le(.8,.6,.04),d(E(["#efe4cc","#e2d4b6"]))),0,.3,0);Ne.rotation.x=-.22,Ze(A,Ne,3.7-me*.1,1.4+me*.12,-nn/2)}Ze(A,qe(1.1),3.8,2.8),Ze(A,qe(.9),-3.8,2.9),Ze(A,pt(1.6),-ee.w/2+En/2+.27,.6,nn/2),Lt(A,"E",V(.9,1.5),.6,_e-.3,.04);const[y,R,Y,B]=ee.deck;A.g.add(p(u(I(new Le(R-y,.2,B-Y),2.6),d("#ffffff",{map:l.planks})),(y+R)/2,.1,(Y+B)/2));const K=p(new Ae,0,.2,0);A.g.add(K),Re(K,[[y,Y+.1],[y,B],[-2,B]],.85),Re(K,[[3.4,B],[R,B],[R,Y+.1]],.85),m(K,L(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(K,lt(1.6,!0),3,4.4,0),m(K,qe(1),-3.7,4),m(K,qe(.8),3.8,7.1),m(K,st(0),-3.9,7.3),m(K,p(u(new rt(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(K,p(u(new rt(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let me=0;me<14;me++)yt(A,p(u(new en(.14,8,6),d(E([a.red,a.bone,"#d98a3a",a.redL]))),0,.14,0),M(-3.5,3.5),M(-5.2,-4.2));yt(A,Qe(2),4.9,-4.6)}const $=Rt("screen"),ue=Rt("screen");{const ee=hi.workshop,A=re(ee,{pitch:.6,chimney:[-4,-1.6]}),_e=Vt+ee.wallH;Ze(A,$.g,-3,-1.4),Ze(A,ue.g,2,-1.4),Ze(A,ke(),-5,2.6);{const oe=new Ae;for(const y of[.9,1.5])oe.add(p(u(new Le(2.4,.06,.4),o.wood),0,y,0));for(const y of[-1,1])oe.add(p(u(new Le(.06,1.7,.4),o.woodD),y*1.2,.85,0));for(let y=0;y<7;y++)oe.add(p(tt(E(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+y*.32,.93+y%2*.6,0));oe.add(p(F(.14),.9,1.65,0)),Ze(A,oe,-.5,-ee.d/2+En/2+.25)}{const oe=j(2,.8,.86,o.woodD);oe.add(p(je(),.4,.9,0)),oe.add(x(p(u(new rt(.02,.02,.4,6),o.wood),-.5,.92,.1),nn/2,0,.4)),Ze(A,oe,3.9,-3.2)}{const oe=new Ae;oe.add(p(u(new Le(.9,.8,.8),o.iron),0,.4,0)),oe.add(p(u(new tn(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),oe.add(p(u(new rt(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Ze(A,oe,-5.2,.7,nn/2)}for(const[oe,y,R,Y]of[[4.2,1.7,.4,a.gold],[3.5,1.35,.26,a.ironL]]){const B=new Ae;B.add(x(u(new rt(R,R,.1,18),d(Y)),nn/2,0,0));for(let K=0;K<10;K++){const me=K/10*nn*2;B.add(p(u(new Le(.12,.12,.1),d(Y)),Math.cos(me)*(R+.05),Math.sin(me)*(R+.05),0))}Lt(A,"N",B,oe,Vt+y,.1),b.push({o:B,axis:"z",v:Y===a.gold?.6:-.9})}Lt(A,"W",ne(4),-1.2,Vt,.3),Lt(A,"S",V(1,1.7),-2.4,_e-.3,.04),Lt(A,"S",he(a.red),2.6,Vt+1.8,.1),Ze(A,fe(),-5.2,-3.2),Ze(A,ut(.6),-4.6,-3.4,.3),Ze(A,ut(.6),5,3.2,.2),Ze(A,Ye(),4.3,3.4),Ue("dirt",...rn(ee,0,6.2),6.6,2.8,-ee.ry,.013),yt(A,xt(2.6),-2.6,5.4),yt(A,Ce(),2.6,6.2,.4);{const oe=new Ae;oe.add(p(u(new rt(.4,.45,.6,12),o.woodL),0,.3,0)),oe.add(x(p(u(new rt(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),oe.add(x(p(u(new Le(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),yt(A,oe,-5,5.6)}yt(A,fe(),5.2,5),yt(A,fe(.85),5.8,5.6),yt(A,Qe(2.4),-6.6,6.8),yt(A,be(0,.9),7.4,-1.4)}let Te;{const ee=hi.tavern,A=re(ee,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),_e=Vt+ee.wallH;{const oe=new Ae;oe.add(p(u(new Le(.9,1.1,5),o.wood),0,.55,0)),oe.add(p(u(new Le(1.1,.08,5.2),o.woodL),0,1.14,0));for(let R=0;R<5;R++)oe.add(p(u(new Le(.02,.9,.9),o.woodD),-.46,.5,-2+R));for(let R=0;R<6;R++)oe.add(p(tt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),M(-.2,.2),1.18,-2.2+R*.8));oe.add(p(F(.2),0,1.3,2.3)),Ze(A,oe,4.1,-.6);const y=new Ae;for(const R of[1.5,2])y.add(p(u(new Le(.3,.05,4),o.wood),0,R,0));for(let R=0;R<10;R++)y.add(p(tt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,R%2?2.03:1.53,-1.8+R*.4));Ze(A,y,5.12,-.6),Ze(A,fe(.9,!0),4.85,2.6,nn/2),Ze(A,fe(.9,!0),4.85,3.4,nn/2)}{const oe=new Ae;oe.add(p(u(I(new Le(2.6,2,.9),1.4),o.stone),0,1,0)),oe.add(p(u(new Le(2.9,.18,1.1),o.wood),0,2.05,.05)),oe.add(p(u(new tn(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),oe.add(p(it(),0,0,.85)),oe.add(p(F(.22),0,2.32,.1)),Te=new Gi("#ff9a4a",12,9,2),Te.position.set(0,.9,1.2),oe.add(Te),se(oe,0,.3,.3,1.4),Ze(A,oe,-1.5,-ee.d/2+En/2+.46)}Ze(A,nt(),-2.2,.8),Ze(A,Ke(),-3.1,.8),Ze(A,Ke(),-1.3,.8),Ze(A,nt(.65),1,2.3),Ze(A,Ke(),.1,2.3),Ze(A,Ke(),1.9,2.3),Ze(A,Ke(),1,3.2);for(const[oe,y]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Ze(A,Se(),oe,y).position.y=Vt+.8;Ze(A,Ke(),3.2,-2.4),Lt(A,"N",Z(),2.6,Vt+2.1,.1),Lt(A,"S",he(a.black),-3,Vt+1.9,.1),Lt(A,"S",V(.9,1.6),1.6,_e-.3,.04),Lt(A,"W",Z(),-2.6,Vt+2.2,.1),Ue("dirt",...rn(ee,-.5,6.4),4.8,2.6,-ee.ry,.013),yt(A,j(3.6,.9,.8,o.woodL),.4,6.55),yt(A,lt(3.6,!1),.4,5.75),yt(A,lt(3.6,!1),.4,7.35,nn);for(const[oe,y]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])yt(A,Se(),oe,y).position.y=.84;Re(A.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[oe,y]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])yt(A,p(u(new rt(.06,.08,2.6,6),o.woodD),0,1.3,0),oe,y);le(A.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),yt(A,fe(),3,5.2),yt(A,fe(.8,!0),2.6,7.9,.3),yt(A,C("TAVERN"),-6.4,3.6,-nn/2),yt(A,Qe(2.2),-8.4,5.6),ce(A,-4.89,-3.6,-.6,.9),Ft(A.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[oe,y]of[[-2.6,a.red],[.8,"#3f5f8f"],[4,a.redD]])Mt(A,S(y),oe,-2.75),Mt(A,Je(),oe+.95,-3.4,nn/2).scale.setScalar(.7),Mt(A,Q(.8,1.6),oe-.5,-1.35),Mt(A,Pt(.16),oe-.62,-3.55);for(const oe of[-.9,2.4])Mt(A,Me(2.5),oe,-2.6);{const oe=u(new tn(8.6,1.1),d(a.redD),!1);oe.rotation.x=-nn/2,Mt(A,oe,.4,.9).position.y=.212}Mt(A,pe(),.8,3.45,nn),Mt(A,lt(1.6,!0),2.8,3.4,nn),Mt(A,j(.9,.7,.8,o.woodL),4.4,1.6),Mt(A,Ke(),4.4,2.4),Mt(A,Pt(.16,0),4.5,1.5).position.y=1;{const oe=new Ae;oe.add(p(u(new rt(.06,.12,.8,8),o.woodD),0,.4,0)),oe.add(p(u(new rt(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),oe.add(x(p(u(new ci(.24,14),d("#5f8fa8"),!1),0,.92,0),-nn/2,0,0)),Mt(A,oe,-2.2,3.3)}Mt(A,qe(.9),-3.6,3.3),Dt(A,"S",he(a.red),-1.2,1.7,.1),Dt(A,"E",V(.9,1.5),1.6,2.5,.04)}return{HOUSES:He,buildHouse:re,inH:Ze,outH:yt,onWall:Lt,W2:rn,deskF:$,deskB:ue,hearthLight:Te,drawBoard:D}}const{PI:fn}=Math;function No(s,e,t){let n=1e9;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[a,l]=t[i+1],c=a-r,h=l-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(e-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,e-o-h*f))}return n}function Qu(s,e,t,n){const i=t?[...s,s[0]]:s,r=[],o=[],a=[];let l=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(t&&(h===0||h===i.length-1)){const E=s[s.length-1],w=s[1];u=w[0]-E[0],p=w[1]-E[1]}const x=Math.hypot(u,p)||1,m=-p/x,g=u/x,M=i[h];if(h>0){const E=i[h-1];l+=Math.hypot(M[0]-E[0],M[1]-E[1])}if(r.push(M[0]+m*e/2,n,M[1]+g*e/2,M[0]-m*e/2,n,M[1]-g*e/2),o.push(0,l,1,l),h>0){const E=h*2;a.push(E-2,E,E-1,E-1,E,E+1)}}const c=new ln;return c.setAttribute("position",new zt(r,3)),c.setAttribute("uv",new zt(o,2)),c.setIndex(a),c.computeVertexNormals(),c}async function C1(s,e,t){const{scene:n,TEX:i,toon:r,mesh:o,at:a,rot:l,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:x,instanced:m}=s,{SPINNERS:g,plantFlora:M,skullPole:E,totem:w,brazier:I,hay:P}=e,v=new k(-62,27,70).normalize(),b=new Wt(new en(600,32,16),new qn({side:Bn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new At("#2b3b78")},mid:{value:new At("#7f8fc4")},hor:{value:new At("#f2aa7c")},low:{value:new At("#c98a72")},sunCol:{value:new At("#ffa864")},sunDir:{value:v}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));b.renderOrder=-100,b.frustumCulled=!1,n.add(b),n.fog=new Lc("#d6a487",230,640),n.add(new j0("#9aa8d8","#4a3428",1.05));const F=new qd("#ffb070",2.3);F.position.copy(v).multiplyScalar(110),F.castShadow=!0,F.shadow.mapSize.set(4096,4096),Object.assign(F.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),F.shadow.camera.updateProjectionMatrix(),F.shadow.bias=-5e-4,F.shadow.normalBias=.05,n.add(F);const U=new Wr;for(let ye=0;ye<=160;ye++){const ke=ye/160*fn*2,ze=_r(ke),L=Math.cos(ke)*ze,tt=-Math.sin(ke)*ze;ye===0?U.moveTo(L,tt):U.lineTo(L,tt)}const q=new ra(U,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});q.rotateX(-fn/2);const se=c(i.grass,1/9,1/9);function j(ye,ke){const ze=i.strata.clone();return ze.wrapS=ri,ze.wrapT=Xn,ze.repeat.set(1/8,-1/(ke-ye)),ze.offset.set(0,ke/(ke-ye)),ze.needsUpdate=!0,r("#ffffff",{map:ze})}const N=new Wt(q,[r("#ffffff",{map:se}),j(-1.9,1.5)]);N.position.y=-2.9,N.receiveShadow=!0,n.add(N);const ie=u1(s,await t);n.add(ie.underside);for(const ye of["walls","towers","gate"])n.add(ie[ye]);const ae=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),Z=new en(1,16,12),V=new Ae;n.add(V);for(let ye=0;ye<22;ye++){const ke=ye/22*fn*2+d(-.12,.12),ze=d(100,260),L=d(1.6,3.2),tt=new Ae;for(let je=0;je<7;je++){const Ye=new Wt(Z,ae),Ce=d(1.6,2.8)*L;Ye.scale.set(Ce,Ce*.7,Ce),Ye.position.set(d(-3.5,3.5)*L,d(-.3,1.2)*L,d(-1.8,1.8)*L),tt.add(Ye)}tt.position.set(Math.cos(ke)*ze,d(-45,28),Math.sin(ke)*ze),V.add(tt)}{const ye=[],ke=[],ze=[];for(let L=0;L<420;L++){const tt=L/420*fn*2+d(-.006,.006),je=_r(tt);if(h()<.55){const Ye=d(.5,2.8),Ce=d(-.55,-1.8);ye.push({x:Math.cos(tt)*(je+.8),y:Ce-Ye/2,z:Math.sin(tt)*(je+.8),sx:d(.7,1.3),sy:Ye,sz:d(.7,1.3),rx:fn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}L%2===0&&ke.push({x:Math.cos(tt)*(je+.3),y:-.06,z:Math.sin(tt)*(je+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let L=0;L<7;L++){const tt=d(0,fn*2),je=_r(tt)+d(4,12);ze.push({x:Math.cos(tt)*je,y:d(-14,-4),z:Math.sin(tt)*je,s:d(.8,2.2)})}m(new Mn(.06,1,4),ye,{}),m(new en(1,10,6),ke,{});for(const L of ze){const tt=new Ae;tt.add(a(o(new wi(1.2*L.s,0),r("#6e5240")),0,-.4*L.s,0)),tt.add(a(o(new rt(1*L.s,1.1*L.s,.3*L.s,9),r("#6f8b49")),0,.5*L.s,0)),h()<.6&&tt.add(a(e.tree(f(["pine","autumn","dead"]),.5*L.s),0,.6*L.s,0)),tt.position.set(L.x,L.y,L.z),tt.rotation.y=d(0,6),n.add(tt)}}const ne=j(-.75,1.35),he={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},be=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Je(ye,ke,ze,L,tt){M(ke,ze,ye.position.x+L,ye.position.z+tt,ye.position.y)}function ut(ye,ke,ze,L){const{trees:tt,clear:je}=he[ze],Ye=ke/10,Ce=[...je.map(([Se,le,C])=>[Se,le,C]),...L.map(([Se,le])=>[Se,le,.16])],nt=(Se,le,C)=>{for(let S=0;S<60;S++){const Q=d(0,fn*2),Me=d(Se,le),pe=Math.cos(Q)*Me,Ue=Math.sin(Q)*Me;if(Ce.every(([He,ve,we])=>Math.hypot(pe-He,Ue-ve)>we+C))return Ce.push([pe,Ue,C]),[pe*ke,Ue*ke]}return null};for(let Se=0;Se<7;Se++){const le=nt(.3,.74,.12);le&&M(tt[Se%tt.length],d(1,1.3)*Ye,ye.position.x+le[0],ye.position.z+le[1],ye.position.y)}for(let Se=0;Se<9;Se++){const le=nt(.15,.78,.05);le&&M(f(be),d(.75,1.25)*Ye,ye.position.x+le[0],ye.position.z+le[1],ye.position.y)}}const fe=c(i.water,1,4);function Ke(ye,ke,ze,L,tt,je){const Ye=new Ae;Ye.position.set(ye,ke,ze),n.add(Ye);const Ce=new Wr;for(let C=0;C<=56;C++){const S=C/56*fn*2,Q=L*(1+.12*Math.sin(3*S+je)+.07*Math.sin(5*S+2*je));C===0?Ce.moveTo(Math.cos(S)*Q,-Math.sin(S)*Q):Ce.lineTo(Math.cos(S)*Q,-Math.sin(S)*Q)}const nt=new ra(Ce,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});nt.rotateX(-fn/2),Ye.add(a(new Wt(nt,[r("#ffffff",{map:se}),ne]),0,-1.75,0));const Se=o(new Mn(L*.95,L*2.3,12,3),r("#6e5240"),!1);Se.rotation.x=fn,Se.position.y=-2.1-L*1.15,Ye.add(Se);for(let C=0;C<14;C++){const S=d(0,fn*2),Q=d(.2,.9);Ye.add(a(l(o(new wi(d(.8,2)*(L/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*L*.95*Q,-2.1-(1-Q)*L*2.3,Math.sin(S)*L*.95*Q))}for(let C=0;C<26;C++){const S=d(0,fn*2),Q=d(.6,2.4);Ye.add(a(l(o(new Mn(.07,Q,4),r("#4a3424")),fn,0,0),Math.cos(S)*L*1.02,-.6-Q/2,Math.sin(S)*L*1.02))}const le=L/10;if(tt==="ruin"){const C=a(new Ae,-L*.25,0,-L*.1);C.add(a(o(new rt(1.7*le,1.9*le,5.5*le,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*le,0));for(let Q=0;Q<7;Q++){const Me=Q/7*fn*2;C.add(a(o(new Le(.7*le,d(.4,1.6)*le,.5*le),x.stone),Math.cos(Me)*1.6*le,5.6*le,Math.sin(Me)*1.6*le))}C.add(a(o(new Le(.4*le,1*le,.1),x.pane,!1),0,2.6*le,1.85*le)),Ye.add(C);for(const Q of[-1,1])Ye.add(a(o(new Le(.7*le,3.2*le,.7*le),x.stone),L*.35+Q*1.3*le,1.6*le,L*.3));Ye.add(a(o(new Le(3.3*le,.6*le,.7*le),x.stone),L*.35,3.4*le,L*.3)),Ye.add(a(E(2.4),L*.1,0,L*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[Q,Me,pe]of S)Je(Ye,pe,1.2*le,Q*L,Me*L);ut(Ye,L,tt,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(tt==="farm"){const C=a(new Ae,-L*.2,0,-L*.15);C.add(a(o(u(new Le(3.6*le,2.2*le,2.8*le),2.2*le,1.3),x.plankWall),0,1.1*le,0));const S=new rt(2.1*le,2.1*le,4*le,3,1);C.add(a(l(o(S,r("#ffffff",{map:i.roof})),0,0,fn/2),0,2.2*le+.9*le,0)),C.add(a(o(new Le(.8*le,1.5*le,.1),x.woodD),0,.75*le,1.42*le)),C.add(a(o(new Le(.6*le,.6*le,.1),x.pane,!1),1.1*le,1.3*le,1.42*le)),Ye.add(C);const Q=o(new tn(L*.8,L*.5),r("#ffffff",{map:i.field}),!1);Q.rotation.x=-fn/2,Q.position.set(L*.3,.03,L*.25),Ye.add(Q);const Me=a(new Ae,L*.35,0,-L*.45);Me.add(a(o(new rt(.8*le,1.2*le,4*le,12),r("#e3d5b6")),0,2*le,0)),Me.add(a(o(new Mn(1.2*le,1.4*le,12),r("#ffffff",{map:i.roof})),0,4.7*le,0));const pe=a(new Ae,0,3.6*le,1*le);for(let Ue=0;Ue<4;Ue++){const He=new Ae;He.rotation.z=Ue*fn/2,He.add(a(o(new Le(.5*le,2.6*le,.04),r("#e3d5b6",{side:mn})),.3*le,1.5*le,0)),pe.add(He)}Me.add(pe),g.push({o:pe,axis:"z",v:.4}),Ye.add(Me),Je(Ye,"tree_maple",1.1*le,-L*.55,L*.4),Ye.add(a(P(.5*le),L*.05,0,L*.55)),ut(Ye,L,tt,[[-.55,.4]])}else if(tt==="shrine"){for(let S=0;S<6;S++){const Q=S/6*fn*2;Ye.add(a(l(o(new Le(.7*le,d(2,3)*le,.5*le),x.stone),0,-Q,d(-.1,.1)),Math.cos(Q)*3*le,1.2*le,Math.sin(Q)*3*le))}Ye.add(w(4*le));for(const S of[.8,3.9])Ye.add(a(I(0,1.2*le),Math.cos(S)*1.8*le,0,Math.sin(S)*1.8*le));const C=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,Q]of C)Je(Ye,"tree_maple",1.1*le,S*L,Q*L);ut(Ye,L,tt,C)}else{const C=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[Me,pe,Ue]of C)Je(Ye,Ue,1.2*le,Me*L,pe*L);ut(Ye,L,tt,C),Ye.add(a(l(o(new ci(L*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-fn/2,0,0),L*.25,.04,L*.3));const S=new Wt(new tn(1.8*le,L*3.2),new Nn({map:fe,color:"#acb5c8",transparent:!0,opacity:.85,side:mn,depthWrite:!1}));S.position.set(L*.62,-L*1.6,L*.62),S.rotation.y=fn/4,Ye.add(S);const Q=o(new tn(1.2*le,L*.55),r("#6fa9c9"),!1);Q.rotation.set(-fn/2,0,-fn/4),Q.position.set(L*.45,.05,L*.45),Ye.add(Q)}return Ye}Ke(-150,6,-105,11,"ruin",.4),Ke(165,-4,-60,13,"farm",1.7),Ke(115,20,135,9,"shrine",2.9),Ke(-165,-14,85,12,"falls",4.1);const at={};function gt(ye){const ke=at[ye];if(ke)return ke;const ze={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[ye],L=s.canvasTex(256,256,(je,Ye,Ce)=>{const nt=je.createRadialGradient(Ye/2,Ce/2,Ye*.3,Ye/2,Ce/2,Ye/2);nt.addColorStop(0,"rgba(255,255,255,1)"),nt.addColorStop(1,"rgba(255,255,255,0)"),je.fillStyle=nt,je.fillRect(0,0,Ye,Ce)});L.wrapS=L.wrapT=Xn;const tt={src:ze,mask:L};return at[ye]=tt,tt}let Qe=0;function xt(ye,ke,ze,L,tt,je=0,Ye=.012,Ce=4){const nt=gt(ye),Se=c(nt.src,L*2/Ce,tt*2/Ce),le=new Wt(new tn(L*2,tt*2),r("#ffffff",{map:Se,alphaMap:nt.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Qe}));return le.rotation.set(-fn/2,0,je),le.position.set(ke,Ye,ze),le.receiveShadow=!0,le.renderOrder=-10+Qe++*.01,n.add(le),le}const qt={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},pt={},Rt=ye=>{const ke=Math.max(0,Math.min(1,ye));return ke*ke*(3-2*ke)},Pt=[],Re=ye=>ye==="cobble"||ye==="flag",qe=ye=>ye.closed?[...ye.line,ye.line[0]]:ye.line;function it(ye,ke){let ze=null,L=1e9;for(const tt of us){if(tt===ke||tt.kind==="stones")continue;const je=No(ye[0],ye[1],qe(tt))-tt.w/2;je<L&&(L=je,ze=tt)}return L<.6?ze:null}function lt(ye,ke,ze){const L=qe(ze),tt=ze.w/2+.02,je=ke?[...ye].reverse():[...ye];let Ye=0;for(;Ye<je.length-2&&No(je[Ye][0],je[Ye][1],L)<tt;)Ye++;if(Ye===0)return null;let Ce=je[Ye-1],nt=je[Ye];for(let C=0;C<12;C++){const S=[(Ce[0]+nt[0])/2,(Ce[1]+nt[1])/2];No(S[0],S[1],L)<tt?Ce=S:nt=S}const le=[[(Ce[0]+nt[0])/2,(Ce[1]+nt[1])/2],...je.slice(Ye)];return ke?le.reverse():le}function st(ye,ke){const ze=ye.kind;let L=qe(ye);const tt=ye.closed?[!1,!1]:[!ye.refs[0],!ye.refs[ye.refs.length-1]];if(!ye.closed&&Re(ze))for(const Ie of[0,1]){if(!tt[Ie])continue;const W=Ie?L[L.length-1]:L[0],xe=it(W,ye);if(!xe||xe.kind===ze||!Re(xe.kind))continue;const ge=lt(L,Ie===1,xe);if(!ge)continue;L=ge,tt[Ie]=!1;const Xe=Ie?L[L.length-1]:L[0],te=Ie?L[L.length-2]:L[1],J=Math.hypot(Xe[0]-te[0],Xe[1]-te[1])||1;Pt.push({x:Xe[0],z:Xe[1],tx:(Xe[0]-te[0])/J,tz:(Xe[1]-te[1])/J,w:ye.w,kind:ze})}const je=L.length,[Ye,Ce,nt,Se]=qt[ze],le=[0];for(let Ie=1;Ie<je;Ie++){const W=L[Ie],xe=L[Ie-1];le.push(le[Ie-1]+Math.hypot(W[0]-xe[0],W[1]-xe[1]))}const C=le[je-1],S=.02+ke*.0015,Q=[],Me=[],pe=[],Ue=[];for(let Ie=0;Ie<je;Ie++){const W=L[Math.max(0,Ie-1)],xe=L[Math.min(je-1,Ie+1)];let ge=xe[0]-W[0],Xe=xe[1]-W[1];if(ye.closed&&(Ie===0||Ie===je-1)){const ce=L[je-2],Ge=L[1];ge=Ge[0]-ce[0],Xe=Ge[1]-ce[1]}const te=Math.hypot(ge,Xe)||1,J=-Xe/te,de=ge/te;let De=1,_=1;if(!ye.closed)for(const ce of[0,1]){const Ge=ce?C-le[Ie]:le[Ie];tt[ce]&&(De=Math.max(De,1+.5*(1-Rt(Ge/2.4))),_=Math.min(_,Rt(Ge/2.2)))}const z=ye.w/2*De,X=[-(z+nt),-(z-nt),z-nt,z+nt],O=[0,_,_,0],re=L[Ie];for(let ce=0;ce<4;ce++){const Ge=re[0]+J*X[ce],Tt=re[1]+de*X[ce];Q.push(Ge,S,Tt),Me.push(Ge/Ce,Tt/Ce),pe.push(1,1,1,O[ce])}if(Ie>0)for(let ce=0;ce<3;ce++){const Ge=(Ie-1)*4+ce,Tt=Ge+1,Dt=Ie*4+ce,Mt=Dt+1;Ue.push(Tt,Mt,Ge,Ge,Mt,Dt)}}const He=new ln;He.setAttribute("position",new zt(Q,3)),He.setAttribute("uv",new zt(Me,2)),He.setAttribute("color",new zt(pe,4)),He.setIndex(Ue),He.computeVertexNormals();let ve=pt[ze];ve||(ve=r("#ffffff",{map:Ye,normalMap:p(Se,ze==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),pt[ze]=ve);const we=new Wt(He,ve);we.receiveShadow=!0,we.renderOrder=-5+ke*.01,n.add(we)}const ct=[];function dt(ye){const ke=ye.length,ze=ye.map(([Ye,Ce])=>No(Ye,Ce,qo)<1.35);if(!ze.some(Boolean))return[{pts:[...ye],closed:!0}];const L=ze.findIndex((Ye,Ce)=>!Ye&&ze[(Ce-1+ke)%ke]),tt=[];let je=[];for(let Ye=0;Ye<=ke;Ye++){const Ce=(L+Ye)%ke;if(!ze[Ce]&&Ye<ke){je.push(ye[Ce]);continue}if(je.length>1&&tt.push({pts:je,closed:!1}),Ye<ke&&ze[Ce]&&je.length){let nt=Ye;for(;nt<ke&&ze[(L+nt)%ke];)nt++;const Se=je[je.length-1],le=ye[(L+nt)%ke],C=le[0]-Se[0],S=le[1]-Se[1],Q=Math.hypot(C,S);ct.push({x:(Se[0]+le[0])/2,z:(Se[1]+le[1])/2,ang:Math.atan2(-S,C),len:Q})}je=[]}return tt}us.forEach((ye,ke)=>{if(ye.kind!=="stones"){st(ye,ke);return}const ze=i.roadStones.clone();ze.wrapS=Xn,ze.wrapT=ri,ze.repeat.set(1,1/1.3),ze.needsUpdate=!0;const L=r("#ffffff",{map:ze,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const tt of dt(ye.line)){const je=new Wt(Qu(tt.pts,ye.w,tt.closed,.03),L);je.receiveShadow=!0,n.add(je)}});{const ye=(nt,Se,le,C,S,Q)=>{const Me=S-le,pe=Q-C,Ue=Me*Me+pe*pe||1,He=Math.max(0,Math.min(1,((nt-le)*Me+(Se-C)*pe)/Ue));return Math.hypot(nt-le-Me*He,Se-C-pe*He)},ke=(nt,Se,le,C)=>{for(const S of us){if(S===le)continue;const Q=qe(S),Me=S.w/2+C;for(let pe=0;pe<Q.length-1;pe++){const Ue=Q[pe],He=Q[pe+1];if(!(Math.abs(Ue[0]-nt)>Me+1||Math.abs(Ue[1]-Se)>Me+1)&&ye(nt,Se,Ue[0],Ue[1],He[0],He[1])<Me)return!0}}return!1},ze=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],L=(nt,Se)=>{const le=Math.hypot(nt,Se),C=Math.atan2(Se,nt);if(le>7.4&&le<9&&ze.some(S=>{let Q=Math.abs(C-S)%(2*fn);return Q=Math.min(Q,2*fn-Q),Q*le<1.45}))return!0;for(const S of Yo)if(S.kind==="house"){const[Q,Me]=Dr(S,nt,Se);if(Math.abs(Q)<S.w/2+.9&&Math.abs(Me)<S.d/2+.9||S.deck&&Q>S.deck[0]-.5&&Q<S.deck[1]+.5&&Me>S.deck[2]&&Me<S.deck[3]+.5)return!0}else if(Math.hypot(nt-S.x,Se-S.z)<S.r+.6)return!0;for(const S of uc)if(S.kind==="hut"){const[Q,Me]=Dr(S,nt,Se);if(Math.abs(Q)<S.w/2+.9&&Math.abs(Me)<S.d/2+.9)return!0}else if(Math.hypot(nt-S.x,Se-S.z)<(S.r||2)+.4)return!0;return Math.hypot(nt,Se)>_r(Math.atan2(Se,nt))-1.2},tt=[],je=[],Ye=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const nt of us){if(nt.kind==="stones")continue;const Se=qe(nt),le=nt.kind!=="dirt",C=S=>{const Q=Se[Math.max(0,S-1)],Me=Se[Math.min(Se.length-1,S+1)],pe=Math.hypot(Me[0]-Q[0],Me[1]-Q[1])||1;return[-(Me[1]-Q[1])/pe,(Me[0]-Q[0])/pe]};for(let S=0;S<Se.length;S++){const[Q,Me]=C(S),pe=Math.atan2(Q,Me)+fn/2,Ue=Se[S];for(const He of[-1,1]){const ve=nt.w/2+.07,we=Ue[0]+Q*He*ve,Ie=Ue[1]+Me*He*ve;if(!(L(we,Ie)||ke(we,Ie,nt,.25))&&(le&&tt.push({x:we,y:.04,z:Ie,sx:.2,sy:.13,sz:d(.4,.47),ry:pe+d(-.04,.04),c:nt.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const W=ve+(le?.25:.1)+d(0,.35),xe=Ue[0]+Q*He*W,ge=Ue[1]+Me*He*W;if(!L(xe,ge)&&!ke(xe,ge,nt,.2)){const Xe=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let te=0;te<5;te++)je.push({x:xe+d(-.15,.15),y:.11,z:ge+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Xe})}}}}if(!le&&nt.w>1.5)for(const S of[-1,1]){const Q=Se.map((pe,Ue)=>{const[He,ve]=C(Ue);return[pe[0]+He*S*.45,pe[1]+ve*S*.45]}),Me=new Wt(Qu(Q,.18,!1,.035),Ye);Me.receiveShadow=!0,Me.renderOrder=-4,n.add(Me)}}for(const nt of Pt){const Se=-nt.tz,le=nt.tx,C=Math.max(2,Math.round((nt.w+.3)/.42));for(let S=0;S<C;S++){const Q=-((nt.w+.3)/2)+(S+.5)*(nt.w+.3)/C;tt.push({x:nt.x+Se*Q-nt.tx*.1,y:.045,z:nt.z+le*Q-nt.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(Se,le)+fn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new Ma(1,1,1,1,.2),tt,{cast:!1});const Ce=m(new Mn(.06,.24,4),je,{});Ce&&(Ce.userData.noLine=!0)}return{models:ie,skyDome:b,sun:F,island:N,cloudRing:V,grassTex:se,strataMat:j,crossings:ct,patch:xt}}const{PI:wt}=Math;function P1(s){const{M:e,COL:t,TEX:n,toon:i,glow:r,mesh:o,rbox:a,at:l,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:x,tiled:m,planarUV:g,wallUV:M}=s,E=s.scene,w=[],I=[],P=[],v=[],b=x(64,128,(T,D,H)=>{const $=()=>{T.beginPath(),T.moveTo(D/2,2),T.bezierCurveTo(D*.62,H*.3,D*.98,H*.55,D*.86,H*.8),T.bezierCurveTo(D*.76,H*.98,D*.24,H*.98,D*.14,H*.8),T.bezierCurveTo(D*.02,H*.55,D*.38,H*.3,D/2,2),T.closePath()},ue=T.createLinearGradient(0,H,0,0);ue.addColorStop(0,"rgba(255, 246, 214, 1)"),ue.addColorStop(.3,"rgba(255, 196, 92, 1)"),ue.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ue.addColorStop(1,"rgba(220, 40, 30, 0)"),$(),T.fillStyle=ue,T.fill(),T.save(),T.translate(D*.5,H*.92),T.scale(.5,.55),T.translate(-D*.5,-H*.92),$(),T.fillStyle="rgba(255, 252, 235, 0.9)",T.fill(),T.restore()});b.wrapS=b.wrapT=Xn;const F=new is({map:b,color:new At(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),U=new is({map:b,color:new At(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),q=new is({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:bi});function se(T,D,H,$,ue=1){const Te=new Ae,ee=new Xi(F);ee.center.set(.5,.06),ee.scale.set(.34*ue,.68*ue,1),Te.add(ee);const A=new Xi(U);A.center.set(.5,.04),A.scale.set(.18*ue,.34*ue,1),Te.add(A);const _e=new Xi(q);return _e.scale.setScalar(1.5*ue),_e.position.y=.2*ue,Te.add(_e),Te.position.set(D,H,$),T.add(Te),I.push({f:Te,ph:u(0,6),s:ue}),Te}const j=(()=>{const T=new Ae,D=o(new en(.5,16,12),e.bone);D.scale.set(1,.92,1.05),D.position.y=.14,T.add(D),T.add(l(o(new Le(.62,.28,.5),e.bone),0,-.24,.16));for(const H of[-1,1]){const $=o(new en(.14,10,8),e.dark,!1);$.scale.z=.5,$.position.set(H*.19,.08,.45),T.add($)}return T.add(c(l(o(new Mn(.06,.12,3),e.dark,!1),0,-.1,.5),wt,0,0)),T.add(l(o(new Le(.42,.03,.02),e.dark,!1),0,-.25,.42)),T})();function N(T=.3){const D=j.clone();return D.scale.setScalar(T),D}function ie(T=1,D=e.bone){const H=new Ae;for(const $ of[-1,1]){const ue=o(new vn(.5*T,.09*T,6,12,wt*.6),D);ue.rotation.set(0,$>0?0:wt,.25),ue.position.set($*.35*T,0,0),H.add(ue)}return H}let ae=7;const Z=(T,D)=>T+(D-T)*((ae=ae*16807%2147483647)/2147483647);function V(T,D,H,$,ue,Te,ee,A,_e=0){const oe=l(o(_e?a(Te,ee,A,_e):new Le(Te,ee,A),D),H,$,ue);return T.add(oe),oe}function ne(T,D,H,$=.75){const ue=new Le(T,D,H),Te=ue.attributes.position;for(let ee=0;ee<Te.count;ee++)Te.getY(ee)<0&&(Te.setX(ee,Te.getX(ee)*$),Te.setZ(ee,Te.getZ(ee)*$));return ue.computeVertexNormals(),ue}function he(T,D,H,$,ue,Te,ee=Math.max(2,Math.round(H/.2))){const A=H/ee;for(let _e=0;_e<ee;_e++)V(T,Te,0,$+Z(-.004,.004),-H/2+A*(_e+.5),D+Z(-.02,.02),ue,A-.012,.012)}function be(T,D,H,$,ue,Te){V(T,e.iron,D-ue*.055,H,$-Te*.012,.13,.014,.028),V(T,e.iron,D-ue*.012,H,$-Te*.055,.028,.014,.13)}const Je=(()=>{const T=[];for(let D=0;D<=10;D++){const H=D/10;T.push(new Oe(.3+Math.sin(H*wt)*.06,(H-.5)*.8))}return new Fc(T,20)})(),ut=T=>.3+Math.sin((T/.8+.5)*wt)*.06;function fe(T=1,D=!1){const H=new Ae,$=o(Je,i("#ffffff",{map:n.planks}));for(const ue of[-.33,-.17,.17,.33])$.add(l(c(o(new vn(ut(ue)+.006,.02,5,24),e.iron),wt/2,0,0),0,ue,0));for(const ue of[-.17,.17])for(let Te=0;Te<6;Te++){const ee=Te/6*wt*2;$.add(l(o(new en(.016,5,4),e.ironL),Math.cos(ee)*(ut(ue)+.025),ue,Math.sin(ee)*(ut(ue)+.025)))}$.add(l(c(o(new ci(.3,20),e.woodD),-wt/2,0,0),0,.392,0)),$.add(l(c(o(new vn(.3,.018,4,24),e.woodD),wt/2,0,0),0,.4,0));for(const ue of[-.1,0,.1])$.add(l(o(new Le(.004,.004,.5),e.dark,!1),ue,.394,0));return $.add(l(o(new rt(.035,.035,.03,8),e.woodL),.15,.4,.05)),$.scale.setScalar(T),D?($.rotation.z=wt/2,$.position.y=.36*T):$.position.y=.4*T,H.add($),H}const Ke=i("#ffffff",{map:x(128,128,(T,D,H)=>{T.fillStyle="#7a5538",T.fillRect(0,0,D,H);for(let $=0;$<4;$++)T.fillStyle=$%2?"#70502f":"#84603f",T.fillRect(0,$*32,D,30),T.fillStyle="rgba(40, 24, 14, 0.6)",T.fillRect(0,$*32+30,D,2)})});function at(T=.6){const D=new Ae;V(D,Ke,0,T/2,0,T*.94,T*.94,T*.94);const H=T*.09,$=T/2-H/2;for(const ue of[-1,1])for(const Te of[-1,1])V(D,e.woodD,ue*$,T/2,Te*$,H,T,H),V(D,e.woodD,0,T/2+ue*$,Te*$,T-H*2,H,H),V(D,e.woodD,ue*$,T/2+Te*$,0,H,H,T-H*2);for(const ue of[-1,1]){const Te=V(D,e.woodD,0,T/2,ue*(T*.47+.006),T*1.1,H*.8,H*.4);Te.rotation.z=ue*wt/4}for(const ue of[-1,1])for(const Te of[-1,1])for(const ee of[-1,1])V(D,e.iron,ue*($+.006),T/2+Te*($+.006),ee*($+.006),H*1.2,H*1.2,H*1.2);return D}function gt(){const T=new Ae,D=o(new en(.28,12,10),i("#b8a07a"));return D.scale.set(1,1.15,.9),D.position.y=.3,T.add(D),T.add(l(o(new rt(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),T}function Qe(T,D,H=.8,$=e.wood){const ue=new Ae,Te=.07;he(ue,T,D,H-Te/2,Te,$);for(const A of[-1,1])V(ue,e.woodD,0,H-Te-.06,A*(D/2-.12),T-.34,.12,.04,.01),V(ue,e.woodD,A*(T/2-.12),H-Te-.06,0,.04,.12,D-.34,.01);const ee=ne(.1,H-Te,.1,.72);for(const[A,_e]of[[-1,-1],[1,-1],[-1,1],[1,1]])ue.add(l(o(ee,e.woodD),A*(T/2-.12),(H-Te)/2,_e*(D/2-.12))),be(ue,A*T/2,H+.004,_e*D/2,A,_e);V(ue,e.woodD,0,.17,0,T-.3,.06,.05,.01);for(const A of[-1,1])V(ue,e.woodD,A*(T/2-.12),.17,0,.05,.06,D-.3,.01);return ue}function xt(T=.7){const D=new Ae;D.add(l(o(new rt(T,T,.08,24),e.wood),0,.76,0)),D.add(l(c(o(new vn(T,.022,5,32),e.iron),wt/2,0,0),0,.76,0));for(const H of[-T*.5,0,T*.5])V(D,e.dark,H,.801,0,.006,.004,Math.sqrt(T*T-H*H)*1.96);D.add(l(o(new rt(.08,.11,.7,10),e.woodD),0,.37,0)),D.add(l(o(new rt(.13,.13,.06,10),e.iron),0,.5,0));for(let H=0;H<4;H++){const $=H*wt/2+wt/4,ue=V(D,e.woodD,Math.sin($)*T*.25,.05,Math.cos($)*T*.25,.09,.08,T*.6,.015);ue.rotation.y=$}return D}function qt(){const T=new Ae;T.add(l(o(new rt(.24,.24,.07,16),e.wood),0,.45,0)),T.add(l(c(o(new vn(.24,.012,4,20),e.iron),wt/2,0,0),0,.45,0));for(let D=0;D<3;D++){const H=D/3*wt*2+.5,$=o(new rt(.028,.034,.46,6),e.woodD);$.position.set(Math.cos(H)*.15,.22,Math.sin(H)*.15),$.rotation.set(-Math.sin(H)*.2,0,Math.cos(H)*.2),T.add($)}return T.add(l(c(o(new vn(.16,.014,4,14),e.woodD),wt/2,0,0),0,.17,0)),T}function pt(T=1.8,D=!0){const H=new Ae;for(const $ of[-1,1])V(H,e.woodL,Z(-.01,.01),.45,$*.11,T,.07,.2,.015);for(const $ of[-1,1]){const ue=$*(T/2-.2);for(const Te of[-1,1]){const ee=l(o(ne(.08,.44,.07,1),e.woodD),ue,.21,Te*.12);ee.rotation.x=-Te*.2,H.add(ee)}V(H,e.woodD,ue,.385,0,.09,.06,.44,.01),V(H,e.iron,ue,.487,.2,.1,.012,.03)}if(V(H,e.woodD,0,.14,0,T-.4,.05,.05,.01),D){for(const $ of[-1,1])V(H,e.woodD,$*(T/2-.2),.74,-.21,.07,.56,.06,.012);for(const $ of[.64,.9])V(H,e.woodL,Z(-.01,.01),$,-.225,T-.1,.11,.05,.015)}return H}function Rt(T=.16,D=0){const H=new Ae;if(H.add(l(o(new rt(.04,.045,T,10),i("#eadfc4")),0,T/2,0)),se(H,0,T,0,.35),D){const $=new Gi("#ffb36a",D,5,2);$.position.y=T+.15,H.add($)}return H}function Pt(){const T=new Ae;return T.add(l(N(.22),0,.12,0)),T.add(l(Rt(.14),0,.24,0)),T}function Re(T){const D=new Ae,H=i(T,{emissive:T,emissiveIntensity:.18});return D.add(l(o(new rt(.06,.07,.2,10),H),0,.1,0)),D.add(l(o(new rt(.022,.03,.1,8),H),0,.25,0)),D}function qe(){const T=new Ae;return T.add(l(o(new rt(.07,.06,.15,12),e.woodL),0,.075,0)),T.add(l(c(o(new ci(.062,12),i("#efe0b0")),-wt/2,0,0),0,.14,0)),T.add(l(o(new vn(.045,.012,6,12),e.woodL),.08,.08,0)),T}function it(T=1){const D=new Ae;D.add(l(o(new rt(.22*T,.16*T,.34*T,12),i("#8a4a30")),0,.17*T,0));for(let H=0;H<6;H++){const $=H/6*wt*2;d(D,new k(Math.cos($)*.06*T,.32*T,Math.sin($)*.06*T),new k(Math.cos($)*.5,1,Math.sin($)*.5),.5*T,.1*T,i(p([t.leaf,t.leafD,t.leafL])),0,5)}return D}const lt=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],st=s.UNIT_BOX;function ct(T=2){const D=new Ae,H=2.4,$=.5;V(D,i("#3a2519"),0,H/2,-$/2+.03,T-.1,H-.1,.04);for(const Te of[-1,1])V(D,e.woodD,Te*(T/2-.04),H/2,0,.08,H,$,.015);for(let Te=0;Te<4;Te++){const ee=Te<3?.27+Te*.72:H-.03;V(D,e.wood,0,ee,0,T-.14,.06,$-.04),V(D,e.woodL,0,ee+.01,$/2-.02,T-.12,.08,.04,.01)}V(D,e.woodD,0,.1,.02,T,.2,$,.02),V(D,e.wood,0,H+.04,.02,T+.1,.08,$+.08,.02),V(D,e.woodD,0,H+.11,.03,T+.18,.07,$+.14,.02);for(const Te of[-1,1])V(D,e.iron,Te*(T/2-.02),H-.12,$/2+.004,.06,.2,.012),V(D,e.iron,Te*(T/2-.1),H-.04,$/2+.004,.2,.06,.012);D.add(l(N(.13),T/2-.25,2.62,.05));const ue=[];for(let Te=0;Te<3;Te++){let ee=-T/2+.12;for(;ee<T/2-.2;){if(f()<.12){ee+=.18;continue}const A=u(.07,.14),_e=u(.34,.56),oe=f()<.1?.18:0;ue.push({x:ee+A/2,y:.33+Te*.72+_e/2,z:.08,sx:A,sy:_e,sz:u(.28,.36),rz:oe,c:p(lt)}),ee+=A+.012+oe*.4}}return s.instanced(st,ue,{parent:D,cast:!0}),D}function dt(T,D){const H=x(512,512,(Te,ee)=>{D.forEach((A,_e)=>{Te.fillStyle=A,Te.beginPath(),Te.arc(ee/2,ee/2,ee/2-_e*34,0,wt*2),Te.fill()}),Te.fillStyle=D[1];for(let A=0;A<12;A++){const _e=A/12*wt*2;Te.beginPath(),Te.arc(256+Math.cos(_e)*196,256+Math.sin(_e)*196,10,0,wt*2),Te.fill()}}),$=o(new ci(T,48),i("#ffffff",{map:H}),!1);$.rotation.x=-wt/2,$.position.y=.012;const ue=new Ae;return ue.add($),ue}function ye(T=n.painting){const D=new Ae;for(const H of[-1,1]){const $=l(o(new Le(.06,1.8,.06),e.wood),H*.36,.9,0);$.rotation.z=H*-.12,D.add($)}return D.add(c(l(o(new Le(.06,1.7,.06),e.wood),0,.84,-.3),.35,0,0)),D.add(l(o(new Le(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),D.add(l(new Wt(new tn(.95,.72),new Nn({map:T,toneMapped:!1})),0,1.25,.079)),D.add(l(o(new Le(1,.05,.14),e.wood),0,.82,.08)),D}function ke(T){const D=new Ae;he(D,1.7,.84,.745,.08,e.woodL,4),V(D,e.woodD,0,.78,.43,1.74,.05,.03,.01),V(D,e.wood,.55,.36,0,.5,.66,.76,.02);for(let $=0;$<3;$++)V(D,e.woodL,.55,.15+$*.2,.385,.44,.17,.02,.01),V(D,e.iron,.55,.17+$*.2,.402,.12,.025,.02);for(const $ of[-.34,.34])D.add(l(o(ne(.09,.7,.09,.7),e.woodD),-.76,.35,$));V(D,e.woodD,-.76,.14,0,.05,.05,.62,.01);for(const $ of[-1,1])be(D,$*.85,.79,.42,$,1);const H={g:D,kb:null,screen:null,light:null};if(T==="screen"){const $=l(new Ae,-.12,.805,-.25);$.userData.y0=.805,$.add(o(new Le(.62,.035,.2),e.iron));for(const[_e,oe]of[[-.06,.54],[0,.56],[.06,.5]])$.add(l(o(new Le(oe,.012,.04),r("#ff5a3a",.55),!1),0,.022,_e));D.add($),H.kb=$;const ue=new Ae;ue.add(o(new Le(1.04,.7,.05),e.woodD));const Te=new Nn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),ee=c(l(new Wt(new tn(.92,.58),Te),0,0,-.03),0,wt,0);ue.add(ee),H.screen=ee,ue.add(l(new Wt(new tn(.92,.58),Te),0,0,.03)),ue.add(l(o(new Le(.08,.13,.08),e.woodD),0,-.41,0)),ue.add(l(o(new Le(.34,.02,.2),e.woodD),0,-.455,0)),ue.add(l(N(.09),.46,.4,0)),ue.position.set(-.12,1.25,.17),D.add(ue);const A=new Gi("#7fe8ff",0,3.2,2);A.position.set(-.12,1.25,-.35),D.add(A),H.light=A,D.add(l(qe(),.6,.79,.15))}else T==="paper"?(D.add(c(l(new Wt(new tn(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-wt/2,0,0)),D.add(c(l(o(new rt(.012,.012,.22,6),e.red),.35,.81,.1),0,0,wt/2)),D.add(l(Rt(.12),.65,.79,-.25))):T==="books"&&(D.add(l(o(new Le(.42,.06,.3),e.red),-.35,.82,0)),D.add(l(o(new Le(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),D.add(l(o(new Le(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),D.add(l(Pt(),.62,.79,-.22)));return D.add(l(o(new rt(.25,.21,.44,14),e.woodD),0,.22,-.78)),H}function ze(){const T=new Ae;return T.add(l(o(new rt(.3,.38,.5,10),e.woodD),0,.25,0)),T.add(l(o(new Le(.34,.2,.22),e.iron),0,.6,0)),T.add(l(o(new Le(.7,.14,.3),e.ironL),0,.77,0)),d(T,new k(.35,.77,0),new k(1,0,0),.32,.1,e.ironL,0,10),T.add(l(o(new Le(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),T}function L(){const T=new Ae;return T.add(l(o(new rt(.06,.06,1.6,8),e.wood),0,.8,0)),T.add(l(o(new rt(.28,.32,.8,12),e.straw),0,1.15,0)),T.add(l(o(new en(.22,12,10),e.straw),0,1.75,0)),T.add(l(o(new Le(.9,.08,.08),e.wood),0,1.35,0)),T.add(l(c(o(new vn(.3,.03,6,16),e.red),wt/2,0,0),0,1.2,0)),T}function tt(){const T=new Ae;T.add(c(l(o(new rt(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),wt/2,0,0));for(const D of[-1,1])T.add(c(l(o(new Le(.06,1.4,.06),e.wood),D*.35,.7,-.2),0,0,D*.2));return T}function je(T=.42){const D=new Ae;return D.add(c(l(o(new rt(T,T,.7,16),e.straw),0,T,0),0,0,wt/2)),D}function Ye(T=0,D=1){const H=new Ae;for(let $=0;$<3;$++){const ue=$/3*wt*2,Te=o(new rt(.035,.045,1.1,6),e.iron);Te.position.set(Math.cos(ue)*.22,.5,Math.sin(ue)*.22),Te.rotation.set(Math.sin(ue)*.3,0,-Math.cos(ue)*.3),H.add(Te)}H.add(l(o(new rt(.42,.24,.3,14,1,!0),e.iron),0,1.05,0)),H.add(c(l(o(new ci(.36,14),e.dark,!1),0,1.12,0),-wt/2,0,0)),H.add(l(o(new en(.3,10,6,0,wt*2,0,wt/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let $=0;$<4;$++){const ue=$/4*wt*2;d(H,new k(Math.cos(ue)*.42,1.18,Math.sin(ue)*.42),new k(Math.cos(ue)*.4,1,Math.sin(ue)*.4),.22,.04,e.iron,0,5)}if(se(H,0,1.12,0,1.6),T){const $=new Gi("#ff9a4a",T,9,2);$.position.y=1.7,H.add($),v.push({l:$,base:T,ph:u(0,6)})}return H.scale.setScalar(D),H}function Ce(){const T=new Ae;T.add(c(l(o(new Le(.06,.06,.3),e.iron),0,0,.12),0,0,0));const D=l(o(new rt(.045,.06,.5,8),e.woodD),0,.12,.26);return D.rotation.x=.35,T.add(D),T.add(l(o(new rt(.08,.06,.12,8),e.iron),0,.36,.34)),se(T,0,.4,.35,.9),T}function nt(T=3.2,D=n.banner){const H=new Ae;H.add(l(o(new rt(.05,.07,T+.6,8),e.woodD),0,(T+.6)/2,0)),H.add(c(l(o(new rt(.03,.03,1,6),e.iron),0,T+.4,.05),0,0,wt/2)),H.add(l(N(.16),0,T+.72,.02));const $=new Wt(new tn(.9,1.9,1,8),i("#ffffff",{map:D,side:mn})),ue=$.geometry.attributes.position;for(let Te=0;Te<ue.count;Te++)ue.setZ(Te,Math.sin(ue.getY(Te)*2.6)*.05);return $.geometry.computeVertexNormals(),$.position.set(0,T-.55,.08),$.castShadow=!0,H.add($),H}function Se(T=1.2,D=2.6){const H=new Ae;H.add(c(l(o(new rt(.04,.04,T+.3,6),e.iron),0,0,.04),0,0,wt/2));const $=o(new tn(T,D),i("#ffffff",{map:n.banner,side:mn}),!1);return $.position.set(0,-D/2,.05),H.add($),H}function le(T=2.4){const D=new Ae;D.add(l(o(new rt(.05,.08,T,7),e.woodD),0,T/2,0)),D.add(l(N(.24),0,T+.12,0)),D.add(l(ie(.5),0,T+.2,0));for(let H=0;H<3;H++){const $=o(new tn(.12,u(.5,.9)),i(p([t.red,t.redD,t.bone]),{side:mn}),!1);$.position.set(Math.cos(H*2.1)*.08,T-.5,Math.sin(H*2.1)*.08),$.rotation.y=H*2.1,D.add($)}return D}function C(T=3){const D=new Ae,H=Math.max(2,Math.round(T/.9));D.add(c(l(o(new rt(.1,.1,T,8),e.wood),0,.45,0),0,0,wt/2));for(let $=0;$<H;$++){const ue=-T/2+($+.5)*T/H;for(const Te of[-1,1]){const ee=new Ae;ee.add(l(o(new rt(.07,.07,1.4,7),e.woodL),0,0,0)),ee.add(l(o(new Mn(.07,.3,7),e.boneD),0,.85,0)),ee.position.set(ue,.45,0),ee.rotation.x=Te*.8,D.add(ee)}}return D}function S(){const T=new Ae;T.add(l(o(new rt(.55,.5,.9,18),e.redD),0,.75,0)),T.add(l(o(new rt(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let D=0;D<3;D++){const H=D/3*wt*2;T.add(c(l(o(new rt(.04,.05,.7,6),e.woodD),Math.cos(H)*.42,.3,Math.sin(H)*.42),Math.sin(H)*.2,0,-Math.cos(H)*.2))}return T.add(l(c(o(new vn(.53,.03,6,20),e.bone),wt/2,0,0),0,1.05,0)),T}function Q(T=4){const D=new Ae,H=[t.red,t.woodL,t.redD,t.wood];for(let $=0;$<4;$++){const ue=o(new rt(.42,.46,T/4,10),i(H[$]));ue.position.y=T/8+$*T/4,D.add(ue);for(const Te of[-1,1])D.add(l(o(new Le(.12,.08,.06),e.bone),Te*.15,ue.position.y+.05,.42));D.add(l(o(new Le(.36,.06,.06),e.dark),0,ue.position.y-.18,.43))}D.add(l(N(.45),0,T+.25,0)),D.add(l(ie(1.1),0,T+.35,0));for(const $ of[-1,1])D.add(c(l(o(new Le(1,.12,.1),e.woodD),$*.55,T*.72,0),0,0,$*.2));return D}function Me(T=1.9,D=2.6,H="#8a6a4a"){const $=new Ae,ue=o(new Mn(T,D,8,1,!0),i(H,{side:mn}));ue.position.y=D/2,$.add(ue);for(let Te=0;Te<3;Te++){const ee=Te/3*wt*2+.4;$.add(c(l(o(new rt(.04,.04,.9,6),e.woodD),Math.cos(ee)*.12,D+.25,Math.sin(ee)*.12),Math.sin(ee)*.4,0,-Math.cos(ee)*.4))}return $.add(c(l(o(new tn(.9,1.3),e.dark,!1),0,.65,T*.82),-.6,0,0)),$.add(c(l(o(new vn(T*.62,.05,6,24),e.redD),0,D*.35,0),wt/2,0,0)),$}function pe(T=4){const D=new Ae;D.add(l(o(new Le(1.8,.1,.1),e.wood),0,1.25,0)),D.add(l(o(new Le(1.8,.1,.1),e.wood),0,.3,.12));for(const H of[-1,1])D.add(l(o(new Le(.1,1.35,.1),e.woodD),H*.85,.67,0));for(let H=0;H<T;H++){const $=-.6+H*1.2/(T-1),ue=new Ae;H%2?(ue.add(l(o(new Le(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ue.add(l(o(new Le(.22,.05,.06),e.gold),0,.2,0))):(ue.add(l(o(new rt(.03,.03,1.4,6),e.woodD),0,.7,0)),ue.add(l(o(new Le(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ue.position.set($,.05,.08),ue.rotation.z=.08,D.add(ue)}return D}function Ue(T=2){const D=new Ae,H=[];for(let $=0;$<4;$++)for(let ue=0;ue<Math.floor(T/.26)-$;ue++)H.push([-T/2+.13+ue*.26+$*.13,.13+$*.22,0]);for(const[$,ue]of H)D.add(c(l(o(new rt(.12,.12,.9,8),i(p([t.woodL,"#8a6440","#6e4a30"]))),$,ue,0),wt/2,0,0));return D}function He(){const T=new Ae;T.add(l(o(new Le(1.6,.12,1),e.wood),0,.62,0));for(const D of[-1,1])T.add(l(o(new Le(1.6,.36,.06),e.woodL),0,.85,D*.47)),T.add(c(l(o(new rt(.42,.42,.08,14),e.woodD),0,.42,D*.58),wt/2,0,0));for(const D of[-1,1])T.add(c(l(o(new Le(1.4,.07,.07),e.woodD),1.3,.55,D*.35),0,0,-.18));return T.add(l(gt(),-.3,.68,.1)),T.add(l(at(.4),.35,.68,-.15)),T}function ve(){const T=new Ae;T.add(Qe(2.2,.9,.9,e.woodL));for(const[$,ue]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])T.add(l(o(new Le(.08,2.2,.08),e.woodD),$,1.1,ue));const D=x(256,64,($,ue,Te)=>{for(let ee=0;ee<8;ee++)$.fillStyle=ee%2?"#e3d5b6":"#8a2420",$.fillRect(ee*32,0,32,Te)}),H=o(new Le(2.5,.05,1.4),i("#ffffff",{map:D}));H.position.set(0,2.2,.15),H.rotation.x=.22,T.add(H);for(let $=0;$<9;$++)T.add(l(o(new en(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return T.add(l(at(.5),-1.4,0,.3)),T.add(l(fe(.8),1.5,0,-.1)),T}function we(){const T=new Ae;T.add(l(o(g(new rt(1,1.1,.9,22),1.2),e.stone),0,.45,0)),T.add(c(l(o(new ci(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-wt/2,0,0));for(const H of[-1,1])T.add(l(o(new Le(.14,1.7,.14),e.woodD),H*.95,1.5,0));const D=o(new Mn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return D.position.y=2.65,D.rotation.y=wt/4,T.add(D),T.add(c(l(o(new rt(.06,.06,1.9,8),e.wood),0,2.05,0),0,0,wt/2)),T.add(l(o(new rt(.15,.13,.22,10),e.woodL),.2,1.55,0)),T.add(l(N(.18),0,3.15,0)),T}function Ie(T=0){const D=new Ae;D.add(l(o(new rt(.07,.1,2.8,8),e.iron),0,1.4,0)),D.add(l(o(new Le(.55,.06,.06),e.iron),.22,2.7,0));const H=new Ae;if(H.add(o(new rt(.14,.18,.32,8),e.iron)),H.add(l(o(new en(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),T){const $=new Gi("#ffc477",T,9,2);H.add($)}return H.position.set(.44,2.44,0),D.add(H),D}function W(){const T=new Ae;V(T,e.wood,0,.25,0,1,.5,.6,.02),T.add(c(l(o(new rt(.3,.3,1,16,1,!1,0,wt),e.woodL),0,.5,0),0,0,wt/2));for(const D of[-.38,.38])V(T,e.iron,D,.27,0,.07,.52,.62),T.add(l(c(o(new vn(.31,.025,4,16,wt),e.iron),0,wt/2,0),D,.5,0));for(const D of[-1,1])for(const H of[-1,1])V(T,e.iron,D*.49,.05,H*.29,.06,.1,.06);V(T,e.gold,0,.44,.31,.16,.2,.025),V(T,e.dark,0,.42,.325,.03,.06,.01);for(const D of[-1,1])T.add(l(c(o(new vn(.06,.012,4,12),e.iron),0,wt/2,0),D*.51,.3,0));return T.add(l(N(.1),0,.62,.22)),T}function xe(){const T=new Ae;V(T,e.woodD,0,.25,0,1.3,.5,1.1,.03),V(T,e.red,0,.58,.05,1.08,.16,.9,.06),V(T,e.woodD,0,1.2,-.48,1.3,1.9,.2,.03),V(T,e.red,0,1.25,-.36,.9,1.3,.06,.03);for(let D=0;D<4;D++)for(const H of[-1,1])T.add(l(o(new en(.03,6,4),e.gold),H*.4,.7+D*.36,-.32));for(const D of[-1,1])V(T,e.woodD,D*.62,.75,0,.18,.5,1,.03),V(T,e.iron,D*.62,1.01,.1,.22,.04,.8,.01),T.add(l(N(.12),D*.62,1.1,.45)),d(T,new k(D*.55,2.15,-.48),new k(D*.3,1,0),.5,.08,e.bone,0,6);return T.add(l(N(.32),0,2.25,-.4)),T.add(l(ie(1),0,2.3,-.4)),T}function ge(T=t.red){const D=new Ae;return D.add(c(o(new rt(.42,.42,.06,18),i(T)),wt/2,0,0)),D.add(c(l(o(new vn(.42,.04,6,20),e.iron),0,0,.03),0,0,0)),D.add(l(N(.16),0,0,.08)),D}function Xe(){const T=new Ae;return T.add(o(new Le(.7,.8,.08),e.woodD)),T.add(l(N(.32),0,.02,.18)),T.add(l(ie(1),0,.12,.16)),T}function te(T=.7,D=6){const H=new Ae;H.add(l(o(new rt(.012,.012,1,4),e.iron),0,.5,0)),H.add(c(o(new vn(T,.04,6,24),e.iron),wt/2,0,0));for(let $=0;$<D;$++){const ue=$/D*wt*2;H.add(l(Rt(.12),Math.cos(ue)*T,.02,Math.sin(ue)*T))}return H}function J(T,D,H,$){for(let ue=0;ue<D.length-1;ue++){const[Te,ee]=D[ue],[A,_e]=D[ue+1],oe=5;for(let Y=1;Y<oe;Y++){const B=Y/oe,K=Te+(A-Te)*B,me=ee+(_e-ee)*B,Ne=H-Math.sin(B*wt)*$;T.add(l(o(new en(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),K,Ne,me))}const y=Math.hypot(A-Te,_e-ee),R=o(new rt(.008,.008,y,3),e.dark,!1);R.position.set((Te+A)/2,H-$*.6,(ee+_e)/2),R.rotation.set(0,-Math.atan2(_e-ee,A-Te),wt/2),T.add(R)}}function de(T="round",D=1){const H=new Ae;if(H.add(l(o(new rt(.18*D,.3*D,1.8*D,8),e.wood),0,.9*D,0)),T==="pine")for(let $=0;$<4;$++)H.add(l(o(new Mn((1.5-$*.3)*D,1.4*D,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+$*.8)*D,0));else if(T==="dead")for(let $=0;$<4;$++){const ue=o(new rt(.04*D,.1*D,1.2*D,6),e.woodD),Te=$*1.7;ue.position.set(Math.cos(Te)*.3*D,(1.6+$*.25)*D,Math.sin(Te)*.3*D),ue.rotation.set(Math.sin(Te)*.8,0,-Math.cos(Te)*.8),H.add(ue)}else{const $=T==="autumn"?[t.autumn1,t.autumn2,t.autumn3]:[t.leaf,t.leafD,t.leafL];for(const[ue,Te,ee,A]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])H.add(l(o(new en(A*D,14,10),i(p($))),ue*D,Te*D,ee*D))}return H.rotation.y=u(0,3),H}const De=new Map;function _(T,D,H,$,ue=0){const Te=new kt().compose(new k(H,ue,$),new gn().setFromAxisAngle(new k(0,1,0),u(0,2*wt)),new k(D*u(.92,1.08),D*u(.9,1.12),D*u(.92,1.08))),ee=De.get(T);return ee?ee.push(Te):De.set(T,[Te]),!0}function z(T){T.flora.scene.updateMatrixWorld(!0);for(const[D,H]of De){const $=_f(T.flora,D);if(!$)throw new Error(`no flora model for ${D}`);for(const[ue,Te]of gf(s,$)){const ee=Te.length===1?Te[0]:qc(Te,!1);if(!ee)continue;const A=new Gr(ee,ue,H.length);H.forEach((_e,oe)=>A.setMatrixAt(oe,_e)),A.castShadow=!ue.isMeshStandardMaterial,A.receiveShadow=!0,A.frustumCulled=!1,E.add(A)}}}function X(){const T=new Ae;T.add(l(o(new rt(.3,.38,.6,8),e.stone),0,.3,0));const D=l(o(new Bc(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return D.scale.y=1.7,T.add(D),P.push({o:D,axis:"y",v:.6,bob:!0,y0:1}),T}function O(){const T=new Ae;T.add(l(o(new en(.5,16,10,0,wt*2,wt*.3,wt*.7),i("#2e2a2c",{side:mn})),0,.55,0)),T.add(c(l(o(new ci(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-wt/2,0,0));for(let D=0;D<3;D++){const H=D/3*wt*2;T.add(l(o(new rt(.04,.04,.3,6),e.iron),Math.cos(H)*.32,.12,Math.sin(H)*.32))}return T}function re(T,D,H=.9,$=-1){for(let ue=0;ue<D.length-1;ue++){if(ue===$)continue;const[Te,ee]=D[ue],[A,_e]=D[ue+1],oe=Math.hypot(A-Te,_e-ee),y=-Math.atan2(_e-ee,A-Te);for(const R of[H*.45,H*.85]){const Y=o(new Le(oe,.07,.06),e.woodL);Y.position.set((Te+A)/2,R,(ee+_e)/2),Y.rotation.y=y,T.add(Y)}for(const[R,Y]of[[Te,ee],[A,_e]])T.add(l(o(new Le(.12,H+.15,.12),e.woodD),R,(H+.15)/2,Y))}}function ce(T){const D=new Ae;D.add(l(o(new Le(.1,2.2,.1),e.woodD),0,1.1,0));const H=x(256,96,($,ue,Te)=>{$.fillStyle="#6a4630",$.fillRect(0,0,ue,Te),$.strokeStyle="#3a2419",$.lineWidth=8,$.strokeRect(4,4,ue-8,Te-8),$.fillStyle="#e3d5b6",$.font=`800 40px ${hc}`,$.textAlign="center",$.textBaseline="middle",$.fillText(T,ue/2,Te/2+2)});return D.add(l(o(new Le(1.1,.42,.06),i("#ffffff",{map:H})),.25,1.85,0)),D}function Ge(T=t.red){const D=new Ae;for(const H of[-1,1])V(D,e.woodD,H*.48,.24,0,.07,.18,1.96,.015);for(const[H,$,ue]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])V(D,e.woodD,H,ue/2,$,.1,ue,.1,.015),D.add(l(o(new en(.065,8,6),e.wood),H,ue+.04,$));for(let H=0;H<5;H++)V(D,e.wood,-.32+H*.16,.66,-.98,.07,.5,.04,.01);return V(D,e.woodD,0,.92,-.98,.98,.09,.07,.015),V(D,e.woodD,0,.42,-.98,.98,.07,.07,.015),V(D,e.woodD,0,.5,.98,.98,.14,.06,.015),V(D,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),V(D,i(T),0,.5,.25,.96,.07,1.36,.03),V(D,i(T),0,.535,-.38,.96,.05,.16,.025),V(D,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),V(D,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),D.add(l(N(.12),0,1.08,-.94)),D}function Tt(){const T=new Ae;T.add(Ge(t.redD));const D=Ge("#4a3a30");D.position.y=1.15,T.add(D);for(const[H,$]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])T.add(l(o(new Le(.1,2.2,.1),e.wood),H,1.1,$));for(let H=0;H<5;H++)T.add(l(o(new Le(.06,.05,.06),e.woodL),.52,.4+H*.3,.9));return T}function Dt(){const T=new Ae;V(T,e.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const D of[-1,1]){V(T,e.wood,D*.3,1.05,.31,.56,1.78,.03,.01);for(const H of[.62,1.48])V(T,e.woodL,D*.3,H,.33,.4,.66,.02,.008);for(const H of[.4,1.7])V(T,e.iron,D*.52,H,.33,.14,.05,.015);V(T,e.gold,D*.06,1.08,.34,.03,.14,.03)}V(T,e.wood,0,2.05,0,1.32,.1,.68,.02),V(T,e.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const D of[-1,1])for(const H of[-1,1])V(T,e.woodD,D*.54,.05,H*.24,.12,.1,.12,.02);return T}function Mt(T,D=1.8){const H=new Ae;return H.add(l(o(M(new Le(.12,D,T),D,1.3),e.plankWall),0,D/2,0)),H.add(l(o(new Le(.18,.1,T+.04),e.timber),0,D,0)),H}function Ft(T=.8,D=1.6){const H=new Wt(new tn(T,D,6,1),i(t.red,{side:mn})),$=H.geometry.attributes.position;for(let Te=0;Te<$.count;Te++)$.setZ(Te,Math.sin($.getX(Te)*14)*.04);H.geometry.computeVertexNormals(),H.position.y=D/2+.1;const ue=new Ae;return ue.add(H),ue.add(l(c(o(new rt(.02,.02,T+.2,6),e.iron),0,0,wt/2),0,D+.12,0)),ue}function Lt(){const T=new Ae;for(let D=0;D<5;D++)T.add(c(l(o(new rt(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+D%3*.08,u(-.1,.1)),0,u(-.4,.4),wt/2));return T}function Ze(){const T=new Ae;for(let H=0;H<3;H++){const $=H/3*wt*2;T.add(c(l(o(new rt(.025,.03,1.3,6),e.woodD),Math.cos($)*.22,.62,Math.sin($)*.22),Math.sin($)*.32,0,-Math.cos($)*.32))}const D=l(c(o(new rt(.07,.11,1.3,12),e.gold),.9,0,0),0,1.35,.15);return T.add(D),T}function yt(){const T=new Ae;T.add(l(o(new rt(.06,.22,.9,10),e.woodD),0,.45,0)),T.add(l(o(new en(.34,20,14),i("#2a3050")),0,1.25,0));for(let D=0;D<14;D++){const H=u(0,2*wt),$=u(-1.2,1.2);T.add(l(o(new en(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(H)*Math.cos($)*.345,1.25+Math.sin($)*.345,Math.sin(H)*Math.cos($)*.345))}return T.add(l(c(o(new vn(.4,.02,6,28),e.gold),0,wt/2,.3),0,1.25,0)),T}const rn=x(256,192,(T,D,H)=>{T.fillStyle="#d8c8a0",T.fillRect(0,0,D,H),T.strokeStyle="#6a4a30",T.lineWidth=3,T.beginPath(),T.moveTo(30,150),T.bezierCurveTo(60,60,140,40,220,90),T.bezierCurveTo(200,150,120,170,30,150),T.stroke(),T.fillStyle="#8a2420";for(const[$,ue]of[[90,100],[150,80],[180,120]])T.beginPath(),T.arc($,ue,6,0,wt*2),T.fill();T.strokeStyle="rgba(106, 74, 48, 0.5)",T.setLineDash([6,6]),T.beginPath(),T.moveTo(90,100),T.lineTo(150,80),T.lineTo(180,120),T.stroke()});function yn(){const T=new Ae;return T.add(o(new Le(1.4,1.05,.04),e.woodD)),T.add(l(new Wt(new tn(1.3,.95),new Nn({map:rn,toneMapped:!1})),0,0,.03)),T}function hn(){const T=new Ae,D=i("#6e6668"),H=i("#4a4446"),$=i("#b8b0a8"),ue=o(new sa(.32,.8,6,12),D);ue.rotation.x=wt/2,ue.position.set(0,.34,0),ue.scale.set(1.05,1,.85),T.add(ue),T.add(l(o(new en(.24,12,10),$),0,.22,.25));const Te=l(new Ae,0,.5,.78);Te.add(o(new en(.24,14,10),D)),Te.add(c(l(o(new Mn(.12,.34,10),H),0,-.05,.26),wt/2,0,0)),Te.add(l(o(new en(.04,6,4),e.dark,!1),0,-.03,.43));for(const ee of[-1,1])Te.add(c(l(o(new Mn(.07,.2,6),H),ee*.13,.22,-.02),0,0,-ee*.3)),Te.add(l(o(new en(.03,6,4),r("#ffb84a",1.2),!1),ee*.1,.05,.2));Te.rotation.x=.25,T.add(Te);for(const[ee,A]of[[-.2,.55],[.2,.55]])T.add(c(l(o(new sa(.07,.36,4,8),D),ee,.08,A+.15),wt/2,0,0));return T.add(c(l(o(new Mn(.12,.7,8),H),.25,.22,-.75),1.2,.6,0)),T.add(c(l(o(new vn(.2,.03,6,16),e.red),0,.42,.62),wt/2.4,0,0)),T}return{FLAGS:w,FLAMES:I,SPINNERS:P,FIRE_LIGHTS:v,BOOK_COLS:lt,flameTex:b,flame:se,skull:N,horns:ie,fj:Z,bx:V,taper:ne,boards:he,cornerIron:be,barrel:fe,crate:at,sack:gt,table:Qe,roundTable:xt,stool:qt,bench:pt,candle:Rt,skullCandle:Pt,bottle:Re,mug:qe,plant:it,bookshelf:ct,rug:dt,easel:ye,desk:ke,anvil:ze,dummy:L,target:tt,hay:je,brazier:Ye,torch:Ce,poleBanner:nt,hangingBanner:Se,skullPole:le,spikes:C,drum:S,totem:Q,tent:Me,weaponRack:pe,woodpile:Ue,cart:He,stall:ve,well:we,lampPost:Ie,chest:W,throne:xe,shield:ge,trophy:Xe,chandelier:te,lanternString:J,tree:de,plantFlora:_,growFlora:z,crystal:X,cauldron:O,fence:re,signPost:ce,bed:Ge,bunk:Tt,wardrobe:Dt,partition:Mt,curtain:Ft,scrollStack:Lt,telescope:Ze,starGlobe:yt,wallMap:yn,wolf:hn,put:h}}const{PI:ju}=Math;function L1(s,e,t,n){const{scene:i,COL:r,toon:o,mesh:a,at:l,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:x,growFlora:m,lampPost:g,skullPole:M}=e,E=th.pts;function w(j,N){let ie=!1;for(let ae=0,Z=E.length-1;ae<E.length;Z=ae++){const[V,ne]=E[ae],[he,be]=E[Z];ne>N!=be>N&&j<(he-V)*(N-ne)/(be-ne)+V&&(ie=!ie)}return ie}function I(j,N,ie,ae,Z,V){const ne=Z-ie,he=V-ae,be=ne*ne+he*he||1,Je=Math.max(0,Math.min(1,((j-ie)*ne+(N-ae)*he)/be));return Math.hypot(j-ie-ne*Je,N-ae-he*Je)}const P=[...us.map(j=>({w:j.w*.65,pts:j.closed?[...j.line,j.line[0]]:j.line})),{w:1,pts:qo}],v=[],b=Mf.map(j=>fi[j]);function F(j,N,ie=.6){const ae=Math.atan2(N,j);if(Math.hypot(j,N)>_r(ae)-1.6)return!1;for(const Z of P){const V=Z.pts;for(let ne=0;ne<V.length-1;ne++){const he=V[ne],be=V[ne+1];if(!(Math.abs(he[0]-j)>Z.w+ie+1.5||Math.abs(he[1]-N)>Z.w+ie+1.5)&&I(j,N,he[0],he[1],be[0],be[1])<Z.w+ie)return!1}}for(const Z of Yo)if(Z.kind==="house"){const[V,ne]=Dr(Z,j,N),he=3.4+ie;if(Math.abs(V)<Z.w/2+he&&ne>-Z.d/2-he&&ne<Z.d/2+he+(Z.deck?4.5:0)+(Z.id==="tavern"?5:0))return!1}else if(Math.hypot(j-Z.x,N-Z.z)<Z.r+(Z.kind==="open"?2.2:1.4)+ie)return!1;for(const Z of uc)if(Z.kind==="hut"){const[V,ne]=Dr(Z,j,N);if(Math.abs(V)<Z.w/2+2.6+ie&&Math.abs(ne)<Z.d/2+2.6+ie)return!1}else if(Math.hypot(j-Z.x,N-Z.z)<Z.r+1.8+ie)return!1;for(let Z=0;Z<E.length;Z++){const[V,ne]=E[Z],[he,be]=E[(Z+1)%E.length];if(I(j,N,V,ne,he,be)<th.thick/2+.8+ie||Math.hypot(j-V,N-ne)<3.6+ie)return!1}if(Math.hypot(j+44,N-26)<6+ie||Math.hypot(j-nh[0],N-nh[1])<9+ie)return!1;for(const Z of b)if(Math.hypot(j-Z.x,N-Z.z)<1.2+ie)return!1;for(const Z of v)if(Math.hypot(j-Z.x,N-Z.z)<Z.r+ie)return!1;return!0}function U(j,N,ie,ae){let Z=0;for(let V=0;V<N&&Z<j;V++){const ne=f(0,2*ju),he=Math.sqrt(d())*58,be=Math.cos(ne)*he*1.04,Je=Math.sin(ne)*he*.9;ie(be,Je)&&(ae(be,Je),Z++)}}U(34,6e3,(j,N)=>w(j,N)&&F(j,N,1.4),(j,N)=>{x(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),j,N),v.push({x:j,z:N,r:2.2})}),U(80,9e3,(j,N)=>!w(j,N)&&F(j,N,1.6),(j,N)=>{x(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),j,N),v.push({x:j,z:N,r:2.4})});{const j=[],N=[],ie=[];U(90,9e3,(ae,Z)=>F(ae,Z,.5),(ae,Z)=>{const V=f(.55,1);x(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),V*1.25,ae,Z),v.push({x:ae,z:Z,r:V})}),U(60,6e3,(ae,Z)=>F(ae,Z,.4),(ae,Z)=>{const V=f(.25,.8);j.push({x:ae,y:V*.3,z:Z,sx:V,sy:V*f(.5,.85),sz:V*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),v.push({x:ae,z:Z,r:V})}),U(1200,16e3,(ae,Z)=>F(ae,Z,.1),(ae,Z)=>{const V=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let ne=0;ne<4;ne++)N.push({x:ae+f(-.12,.12),y:.11,z:Z+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:V})}),U(320,12e3,(ae,Z)=>F(ae,Z,.1),(ae,Z)=>{ie.push({x:ae,y:.16,z:Z,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new wi(1,0),j,{cast:!0});for(const ae of[p(new Mn(.06,.24,4),N,{}),p(new en(.09,7,5),ie,{})])ae&&(ae.userData.noLine=!0)}m(n);for(const[j,N,ie]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const ae=us.find(V=>V.id===j);if(!ae)continue;const Z=ae.line;for(let V=6;V<Z.length-6;V+=N*2){const[ne,he]=Z[V-1],[be,Je]=Z[V+1],ut=Z[V],fe=Math.hypot(be-ne,Je-he)||1,Ke=-(Je-he)/fe,at=(be-ne)/fe,gt=V/(N*2)%2?1:-1,Qe=ut[0]+Ke*gt*(ae.w*.62+.5),xt=ut[1]+at*gt*(ae.w*.62+.5);if(j==="ring"&&Math.hypot(Qe,xt)<10)continue;let qt=!0;for(const pt of b)Math.hypot(Qe-pt.x,xt-pt.z)<2&&(qt=!1);for(const pt of Yo)pt.kind!=="house"&&Math.hypot(Qe-pt.x,xt-pt.z)<pt.r+.5&&pt.id!=="court"&&(qt=!1);qt&&h(i,ie==="lamp"?g(0):M(f(2,2.6)),Qe,xt,Math.atan2(-Ke*gt,-at*gt))}}const q=[];function se(){const j=new Ae,N=o("#2a2426");j.add(l(a(new en(.16,8,6),N),0,0,0)),j.children[0].scale.set(1,.8,1.6),j.add(l(a(new en(.1,8,6),N),0,.08,.2)),j.add(c(l(a(new Mn(.03,.12,4),o("#c79a45")),0,.07,.33),ju/2,0,0));for(const ie of[-1,1]){const ae=l(new Ae,ie*.1,.02,0);ae.add(l(a(new Le(.55,.03,.22),N),ie*.27,0,0)),j.add(ae)}return j}for(let j=0;j<6;j++){const N=se();N.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},N.scale.setScalar(1.8),i.add(N),q.push(N)}for(const j of["war","library","tavern"]){const N=t.HOUSES[j];if(!N)continue;const ie=N.roof;for(let ae=0;ae<2;ae++){const Z=se(),V=Z.children[3],ne=Z.children[4];V.visible=ne.visible=!0,V.rotation.z=.9,ne.rotation.z=-.9,Z.position.set(f(-N.r.w/3,N.r.w/3),ie.hR+.3,0),Z.rotation.y=f(0,6),ie.R.add(Z)}}return{CROWS:q}}async function I1(s){const e=s.reducedMotion;let t=s.width,n=s.height;const i=new mM({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});T1(i,t,n,s.dpr);const r=new Bp,o=E1(i,r),a=h1(),l=g1(),c=w1(),h=P1(o),d=await C1(o,h,a);await c;const f=R1(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=WM(o,h,d,f,d.models),p=L1(o,h,f,d.models),{TEX:x,COL:m,toon:g,rnd:M,rr:E,pick:w,_c:I}=o,{FLAMES:P,SPINNERS:v,FLAGS:b,FIRE_LIGHTS:F}=h,{HOUSES:U,deskF:q,deskB:se,hearthLight:j}=f,{mouthMat:N,coreMat:ie,fireLight:ae,chimneyTop:Z,emberBase:V,waterTex:ne,fallTex:he,mists:be,skyBoat:Je,airship:ut}=u,{CROWS:fe}=p,{skyDome:Ke,cloudRing:at}=d,gt=Object.fromEntries(ns.map(G=>[G,M()*6])),Qe=_1(d.crossings),xt=S1(o,r,await l,{reducedMotion:e,phases:gt,start:ih,groundY:Qe,flameTex:h.flameTex}),qt=Object.values(xt.actors),pt=()=>Object.fromEntries(ns.map(G=>[G,Ei(ih[G])]));let Rt=pt(),Pt=null,Re=!1;const qe=new Set,it=new Set(["thinking","reading","writing","waiting"]),lt={},st=[];{const G=new Set;for(const bt of Object.values(U)){for(const We of Object.values(bt.sides))G.add(We.up);if(G.add(bt.roof.R),bt.upper){const We=bt.upper;G.add(We.U);const mt=new Map;We.U.traverse(Ve=>{if(!(Ve instanceof Wt))return;const vt=Ve.material;let $e=mt.get(vt);$e||($e=vt.clone(),mt.set(vt,$e),We.mats.push($e)),Ve.material=$e})}}for(const bt of qt)G.add(bt.root);for(const{f:bt}of P)G.add(bt);for(const bt of v)G.add(bt.o);for(const bt of b)G.add(bt);for(const bt of fe)G.add(bt);[q.g,se.g,Je,ut,at,Ke].forEach(bt=>G.add(bt)),r.updateMatrixWorld(!0);const Ee=new Map,Pe=["position","normal","uv"],Ct=bt=>{if(G.has(bt))return;for(const ot of[...bt.children])Ct(ot);if(!(bt instanceof Wt)||bt instanceof Gr||bt.children.length||Array.isArray(bt.material))return;const We=bt.material,mt=bt.geometry;if(We.transparent||We.vertexColors||We.isShaderMaterial||We.depthWrite===!1||!mt.attributes.uv||!mt.attributes.normal||mt.attributes.color)return;const Ve=mt.index?mt.toNonIndexed():mt.clone();for(const ot of Object.keys(Ve.attributes))Pe.includes(ot)||Ve.deleteAttribute(ot);Ve.morphAttributes={},Ve.clearGroups(),Ve.applyMatrix4(bt.matrixWorld);const vt=We.uuid+(bt.castShadow?"s":"n"),$e=Ee.get(vt);$e?$e.geos.push(Ve):Ee.set(vt,{m:We,cast:bt.castShadow,geos:[Ve]}),bt.parent?.remove(bt)};Ct(r);for(const{m:bt,cast:We,geos:mt}of Ee.values()){const Ve=qc(mt,!1);if(!Ve){console.warn("could not merge",bt.type);continue}const vt=new Wt(Ve,bt);vt.castShadow=We,vt.receiveShadow=!0,vt.matrixAutoUpdate=!1,r.add(vt)}const Et=new Nn({visible:!1});for(const[bt,We]of Object.entries(U)){const mt=We.top+We.roof.hR,Ve=new Wt(new Le(We.r.w+.6,mt,We.r.d+.6),Et);Ve.position.set(We.r.x,mt/2,We.r.z),Ve.rotation.y=We.r.ry||0,Ve.userData.houseId=bt,r.add(Ve),Ve.updateMatrixWorld(!0),st.push(Ve)}}const ct=new Kn(Fn.fov,t/n,Fn.near,Fn.far),dt={t:new k(...Fn.home.target),p:new k(...Fn.home.position)};ct.position.copy(dt.p);const ye=new _M(ct,i.domElement);ye.target.copy(dt.t),ye.enableDamping=!0,ye.dampingFactor=.08,ye.minDistance=Fn.minDistance,ye.maxDistance=Fn.maxDistance,ye.maxPolarAngle=Fn.maxPolarAngle,ye.minPolarAngle=Fn.minPolarAngle,ye.screenSpacePanning=!1,ye.zoomSpeed=.8,ye.update();function ke(){const G=ye.target,Ee=Math.hypot(G.x,G.z),Pe=Fn.targetRadius;if(Ee>Pe){const Ct=Pe/Ee;ct.position.x-=G.x*(1-Ct),ct.position.z-=G.z*(1-Ct),G.x*=Ct,G.z*=Ct}if(G.y<Fn.targetMinY||G.y>Fn.targetMaxY){const Ct=Math.max(Fn.targetMinY,Math.min(Fn.targetMaxY,G.y));ct.position.y+=Ct-G.y,G.y=Ct}ct.position.y<Fn.minHeight&&(ct.position.y=Fn.minHeight)}let ze=null,L=null,tt=!1;function je(G,Ee){if(e){ye.target.copy(G),ct.position.copy(Ee),ye.update();return}ze={t0:performance.now(),dur:1100,ft:ye.target.clone(),fp:ct.position.clone(),tt:G,tp:Ee}}function Ye(G){if(G==="overview"){L=null,je(dt.t.clone(),dt.p.clone());return}const Ee=U[G];L=G,Ee&&(Ee.view="ground");const Pe=BM(G,[ct.position.x-ye.target.x,ct.position.z-ye.target.z]);je(new k(...Pe.target),new k(...Pe.position))}let Ce=null,nt=null,Se=null,le=null;const C=new Yd,S=new Oe,Q=qt.map(G=>G.root);function Me(G){const Ee=i.domElement.getBoundingClientRect();if(Ee.width===0||Ee.height===0)return null;S.set((G.clientX-Ee.left)/Ee.width*2-1,-((G.clientY-Ee.top)/Ee.height)*2+1),C.setFromCamera(S,ct);for(let Pe=C.intersectObjects(Q,!0)[0]?.object??null;Pe;Pe=Pe.parent){const Ct=Pe.userData.agentId;if(Ct)return Ct}return null}const pe=()=>{ze=null,Se=null,Ce?.()};let Ue=0;const He=G=>{ze=null,le={x:G.clientX,y:G.clientY,moved:!1}},ve=G=>{!le&&G.pointerType==="mouse"&&G.timeStamp-Ue>90&&(Ue=G.timeStamp,i.domElement.style.cursor=Me(G)?"pointer":""),!(!le||le.moved||Math.hypot(G.clientX-le.x,G.clientY-le.y)<=4)&&(le.moved=!0,pe())},we=G=>{const Ee=le&&!le.moved;if(le=null,G.type!=="pointerup"||!Ee)return;const Pe=Me(G);Pe&&nt?.(Pe)},W=[["pointerdown",He],["pointermove",ve],["pointerup",we],["pointercancel",we],["wheel",pe],["keydown",G=>{G.key.startsWith("Arrow")&&pe()}]];for(const[G,Ee]of W)i.domElement.addEventListener(G,Ee,{passive:!0});ye.listenToKeyEvents(i.domElement);const xe=G=>{if(!Se)return!1;const Ee=fi[Rt[Se].spot];return Ee.room===G.id&&!Ee.out},ge=G=>tt||L===G.id||!!G.near||xe(G);function Xe(G,Ee){const Pe=ye.target,Ct=Math.hypot(G.r.x-Pe.x,G.r.z-Pe.z),Et=Math.max(G.r.w,G.r.d)*.8+9;G.near=G.near?Ee<72&&Ct<Et+4:Ee<64&&Ct<Et}function te(G,Ee,Pe){if(Pe.fading!==Ee){Pe.fading=Ee;for(const Ct of G)Ct.transparent=Ee,Ct.needsUpdate=!0}}function J(G,Ee,Pe){const Ct=Ee?0:1;G.s+=(Ct-G.s)*Pe,Math.abs(G.s-Ct)<.004&&(G.s=Ct),G.up.scale.y=Math.max(.001,G.s),G.up.visible=G.s>.03}function de(G){const Ee=ct.position.distanceTo(ye.target),Pe=e?1:Math.min(1,G*5),Ct=e?1:Math.min(1,G*6);for(const Et of Object.values(U)){Xe(Et,Ee);const bt=ge(Et),We=bt&&!!Et.upper&&Et.view==="upper",mt=bt?1:0;Et.lift+=(mt-Et.lift)*Pe,Math.abs(Et.lift-mt)<.002&&(Et.lift=mt);const Ve=Et.roof;Ve.R.position.y=Ve.base+Et.lift*3.4,Ve.R.visible=Et.lift<.97;for(const Jt of Ve.mats)Jt.opacity=1-Et.lift;const vt=ct.position.x-Et.r.x,$e=ct.position.z-Et.r.z,ot=Math.hypot(vt,$e)||1,Ut=Math.cos(Et.r.ry||0),Yt=Math.sin(Et.r.ry||0),dn=Jt=>{const Hn=((Jt.n[0]*Ut+Jt.n[1]*Yt)*vt+(-Jt.n[0]*Yt+Jt.n[1]*Ut)*$e)/ot;return Hn>.32?Jt.wish=!0:Hn<.06&&(Jt.wish=!1),!!Jt.wish};for(const Jt of Object.values(Et.sides))J(Jt,bt&&!We&&dn(Jt),Ct);if(Et.upper){const Jt=Et.upper,Hn=bt&&!We?1:0;Jt.lift+=(Hn-Jt.lift)*Pe,Math.abs(Jt.lift-Hn)<.002&&(Jt.lift=Hn),te(Jt.mats,Jt.lift>0,Jt),Jt.U.position.y=Jt.top+Jt.lift*3.4,Jt.U.visible=Jt.lift<.97;for(const Pn of Jt.mats)Pn.opacity=1-Jt.lift;for(const Pn of Object.values(Jt.sides))J(Pn,We&&dn(Pn),Ct)}}}function De(G,Ee,Pe,Ct,Et,bt){const We=new ln;We.setAttribute("position",new Dn(new Float32Array(G*3),3));const mt=new Mr(We,new Rr({color:Ee,size:Pe,map:Ct,transparent:!0,opacity:Et,depthWrite:!1,blending:Ct?zs:bi}));return mt.frustumCulled=!1,mt.userData.seed=Float32Array.from({length:G},()=>Math.random()),mt.userData.h=Float32Array.from({length:G},()=>Math.random()*bt),mt.userData.top=bt,mt.visible=!e,r.add(mt),mt}const _=[{at:Z,p:De(30,"#d8cfc6",2.2,x.soft,.5,9),heat:!0}];for(const G of Object.values(U)){if(!G.roof.smokeAt)continue;G.g.updateMatrixWorld(!0);const Ee=G.roof.R.localToWorld(new k(...G.roof.smokeAt));_.push({at:Ee,p:De(14,"#d8cfc6",1.4,x.soft,.45,5),house:G})}const z=De(60,"#ffb04a",.11,null,.9,4),X=[];for(let G=0;G<4;G++){const Ee=new Xi(new is({map:x.spark,color:G%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:bi}));Ee.scale.setScalar(.25),q.g.add(Ee),X.push(Ee)}const O=[];{const G=new Set;for(const Pe of Object.values(U)){G.add(Pe.roof.R);for(const Ct of Object.values(Pe.sides))G.add(Ct.up);if(Pe.upper){G.add(Pe.upper.U);for(const Ct of Object.values(Pe.upper.sides))G.add(Ct.up)}}r.updateMatrixWorld(!0);const Ee=[];r.traverse(Pe=>{Pe instanceof Gi&&Ee.push(Pe)});for(const Pe of Ee){const Ct=[];let Et=!1;for(let bt=Pe.parent,We=0;bt&&We<40;bt=bt.parent,We++)G.has(bt)&&Ct.push(bt),bt.userData.agentId&&(Et=!0);Et||(r.attach(Pe),Ct.length&&O.push({l:Pe,anc:Ct,base:Pe.intensity}))}}function re(){for(const G of O)G.anc.every(Pe=>Pe.visible)?G.l.intensity===0&&(G.l.intensity=G.base):G.l.intensity=0}const ce=1;r.updateMatrixWorld(!0);const Ge=[];for(const{f:G,s:Ee}of P){if(Ee<1.3)continue;let Pe=G,Ct=!1;for(let Et=0;Pe&&Et<40;Et++)Pe.userData.movesWithWall===!0&&(Ct=!0),Pe=Pe.parent;Ct||Ge.push(G.getWorldPosition(new k))}function Tt(G){const Ee=new ln;Ee.setAttribute("position",new Dn(new Float32Array(G*3),3)),Ee.setAttribute("color",new Dn(new Float32Array(G*3),3));const Pe=new Mr(Ee,new Rr({size:.09,map:x.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:bi,toneMapped:!1}));return Pe.frustumCulled=!1,Pe.visible=!e,r.add(Pe),Pe}const Dt=Tt(Math.max(1,Ge.length*7)),Mt=Dt.geometry.attributes.position.count,Ft={src:Float32Array.from({length:Mt},(G,Ee)=>Ee%Math.max(1,Ge.length)),life:Float32Array.from({length:Mt},()=>Math.random()),sd:Float32Array.from({length:Mt},()=>Math.random())},Lt=240,Ze=new Mr(new ln,new Rr({size:.07,map:x.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:bi}));Ze.geometry.setAttribute("position",new Dn(new Float32Array(Lt*3),3));const yt=Float32Array.from({length:Lt*3},()=>Math.random());Ze.frustumCulled=!1,Ze.visible=!e,r.add(Ze);const rn=80,yn=new tn(.16,.1),hn=new Gr(yn,g("#ffffff",{side:mn}),rn),T=[];for(let G=0;G<rn;G++)hn.setColorAt(G,I.set(w([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),T.push({x:E(-30,30),y:E(0,12),z:E(-30,30),r:E(0,6),v:E(.5,.9),w:E(1,3)});hn.instanceColor&&(hn.instanceColor.needsUpdate=!0),hn.frustumCulled=!1,hn.visible=!e,r.add(hn);const D=new kt,H=new gn,$=new Ai,ue=new k,Te=new k(1,1,1);function ee(G,Ee){const Pe=Dt.geometry.attributes.position,Ct=Dt.geometry.attributes.color;for(let We=0;We<Pe.count;We++){const mt=Ge[Ft.src[We]];if(!mt)break;Ft.life[We]=Ft.life[We]+Ee*(.35+Ft.sd[We]*.4),Ft.life[We]>1&&(Ft.life[We]=Ft.life[We]-1);const Ve=Ft.life[We],vt=Ft.sd[We];Pe.setXYZ(We,mt.x+Math.sin(G*(1+vt)+vt*20)*.25*Ve,mt.y+.2+Ve*2.2,mt.z+Math.cos(G*(.8+vt)+vt*9)*.25*Ve);const $e=(1-Ve)*(.6+.4*Math.sin(G*13+vt*30))*2.2;Ct.setXYZ(We,$e,$e*.48,$e*.16)}Pe.needsUpdate=!0,Ct.needsUpdate=!0;const Et=Ze.geometry.attributes.position,bt=ye.target;for(let We=0;We<Lt;We++){const mt=yt[We*3],Ve=yt[We*3+1],vt=yt[We*3+2],$e=((mt*44+G*.25*(Ve-.5)-bt.x)%44+66)%44-22,ot=((Ve*44+G*.18*(mt-.3)-bt.z)%44+66)%44-22;Et.setXYZ(We,bt.x+$e,.6+vt*9+Math.sin(G*.5+mt*20)*.4,bt.z+ot)}Et.needsUpdate=!0;for(let We=0;We<rn;We++){const mt=T[We];mt.y-=Ee*mt.v,mt.y<.05&&(mt.y=E(8,13),mt.x=bt.x+E(-28,28),mt.z=bt.z+E(-28,28)),ue.set(mt.x+Math.sin(G*.9+mt.r)*.9,mt.y,mt.z+Math.cos(G*.7+mt.r)*.6),$.set(G*mt.w+mt.r,G*.6+mt.r,Math.sin(G*2+mt.r)*1.2),D.compose(ue,H.setFromEuler($),Te),hn.setMatrixAt(We,D)}hn.instanceMatrix.needsUpdate=!0}r.traverse(G=>{const Ee=G.material;(G instanceof Mr||G instanceof Xi||G.userData.noLine||Ee&&!Array.isArray(Ee)&&(Ee.blending===bi||Ee.depthWrite===!1))&&G.layers.set(ce)});for(const G of[at,hn,Ke])G.traverse(Ee=>Ee.layers.set(ce));ct.layers.enable(ce);const A=new O0({side:mn}),_e=new kn(1,1,{type:zn});_e.depthTexture=new ps(1,1),_e.depthTexture.type=pi;const oe=new At(.5,.5,1),y=new At;function R(){r.overrideMaterial=A,ct.layers.disable(ce);const G=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(y);const Ee=i.getClearAlpha();i.setClearColor(oe,1),i.setRenderTarget(_e),i.clear(),i.render(r,ct),i.setRenderTarget(null),i.setClearColor(y,Ee),i.shadowMap.autoUpdate=G,ct.layers.enable(ce),r.overrideMaterial=null}const Y=new NM(i,new kn(1,1,{type:zn,samples:4}));Y.setPixelRatio(i.getPixelRatio()),Y.addPass(new OM(r,ct));const B="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",K=new oc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Oe},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:B,fragmentShader:`#include <packing>
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
    }`});Y.addPass(K);const me=new Zs(new Oe(t,n),.42,.55,.88);ZM(me),Y.addPass(me),Y.addPass(new UM);const Ne=new oc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Oe},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:B,fragmentShader:`#include <packing>
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
    }`});Y.addPass(Ne);const Fe=K.uniforms,Be=Ne.uniforms,et=(G,Ee)=>G[Ee];et(Fe,"tDepth").value=_e.depthTexture,et(Be,"tDepth").value=_e.depthTexture;function ft(G,Ee){const Pe=i.getPixelRatio();i.setSize(G,Ee),Y.setSize(G,Ee),me.setSize(G,Ee),_e.setSize(Math.floor(G*Pe),Math.floor(Ee*Pe)),et(Fe,"texel").value.set(1/(G*Pe),1/(Ee*Pe)),et(Be,"texel").value.copy(et(Fe,"texel").value),et(Fe,"width").value=Math.max(1,Pe*.85),ct.aspect=G/Ee,ct.updateProjectionMatrix()}for(const G of[Fe,Be])et(G,"near").value=ct.near,et(G,"far").value=ct.far;ft(t,n);const _t=0;let ht=-1,Ot=0,Bt=0,It=!1;const Gt=new k;function cn(G){ht<0&&(ht=G);const Ee=(G-ht)/1e3,Pe=Math.min(.05,Ee-Ot);Ot=Ee;for(const We of qt){const mt=Wo[We.id].speed;let Ve=Fu(Rt[We.id],G,mt,e);if(Pt&&Re&&!Ve.walk&&Ve.spot===yf[We.id]&&Sa(We.id,Pt,Re,qe)===Ve.spot){for(const Jt of Pt.tasks)Jt.owner===We.id&&qe.add(Jt.id);const dn=Sa(We.id,Pt,Re,qe);dn&&(Ve=Ou(Ve,dn,G,mt,e,ba[We.id]))}Rt[We.id]=Ve;const vt=zu(Ve,G);if(We.root.position.x=vt.x,We.root.position.z=vt.z,vt.walking){const dn=vt.heading-We.root.rotation.y;We.root.rotation.y+=Math.atan2(Math.sin(dn),Math.cos(dn))*Math.min(1,Pe*10)}else We.root.rotation.y=vt.heading;const $e=Qe(We.root.position.x,We.root.position.z);We.root.position.y+=($e-We.root.position.y)*Math.min(1,Pe*12);const ot=Bu(Ve,G),Ut=fi[Ve.spot].pose,Yt=vt.walking?"walk":ot?xf.has(Ut)?"sit":"idle":Ut;lt[We.id]=!vt.walking&&!ot&&Ve.spot===ba[We.id]&&!!Pt&&it.has(Pt.agents[We.id].state),xt.lanternFor(We,Yt,Ee),xt.drive(We,Yt,Pe,vt.walking?null:Ve.spot,Ve.walk?Ve.walk.speed/mt:1)}const Ct=!!lt.frontend&&Pt?.agents.frontend.state==="writing",Et=.25+_t*.35,bt=e?0:Math.sin(Ee*9)*.08+Math.sin(Ee*23)*.05;N.emissiveIntensity=.9+Et*1.4+bt,ie.emissiveIntensity=1.2+Et*1.8+bt,ae.intensity=8+Et*16+bt*20;for(const[We,mt]of[[q,"frontend"],[se,"backend"]]){const Ve=!!lt[mt],vt=We.screen?.material;vt&&(vt.opacity+=((Ve?1:.3)-vt.opacity)*Math.min(1,Pe*4)),We.light&&(We.light.intensity=Ve?3.5:0)}if(de(Pe),!e){for(const{f:$e,ph:ot}of P){const Ut=1+Math.sin(Ee*11+ot)*.16+Math.sin(Ee*27+ot*2)*.08;$e.scale.set(1/Math.sqrt(Ut),Ut,1/Math.sqrt(Ut))}for(const $e of F)$e.l.intensity=$e.base*(1+Math.sin(Ee*9+$e.ph)*.12+Math.sin(Ee*23+$e.ph)*.06);j.intensity=11+Math.sin(Ee*7)*1.5;for(const $e of v)$e.o.rotation[$e.axis]+=Pe*$e.v,$e.bob&&($e.o.position.y=($e.y0??0)+Math.sin(Ee*1.6)*.06);const We=Math.abs(Math.sin(Ee*5.2+gt.frontend));X.forEach(($e,ot)=>{const Ut=Ct&&We<.25;$e.material.opacity=Ut?1-We*4:0,$e.position.set(-.4+ot*.19,.95+ot%2*.12+(Ut?(.25-We)*.8:0),ot%2*.08-.29),$e.material.rotation=Ee*3+ot}),q.kb&&(q.kb.position.y=q.kb.userData.y0+(Ct&&We<.2?.03:0));const mt=z.geometry.attributes.position,Ve=z.userData.h,vt=z.userData.seed;for(let $e=0;$e<mt.count;$e++){const ot=vt[$e];Ve[$e]=Ve[$e]+Pe*(.5+ot*.7)*(.5+Et),Ve[$e]>z.userData.top&&(Ve[$e]=0),mt.setXYZ($e,V.x+Math.sin(Ee*(.6+ot)+ot*10)*.8*ot,V.y+Ve[$e],V.z+Math.cos(Ee*.7+ot*7)*.5*ot)}mt.needsUpdate=!0,z.material.opacity=Math.min(.95,.2+Et*.5);for(const $e of _){const ot=$e.p,Ut=ot.geometry.attributes.position,Yt=ot.userData.h,dn=ot.userData.seed,Jt=$e.house?$e.house.lift:0;ot.visible=Jt<.5;const Hn=$e.heat?.6+Et:.7;for(let Pn=0;Pn<Ut.count;Pn++){const Yi=dn[Pn];Yt[Pn]=Yt[Pn]+Pe*(.5+Yi*.4)*Hn,Yt[Pn]>ot.userData.top&&(Yt[Pn]=0);const xi=Yt[Pn];Ut.setXYZ(Pn,$e.at.x+Math.sin(xi*.8+Yi*6)*xi*.16+xi*.3,$e.at.y+xi,$e.at.z+Math.cos(xi*.6+Yi*4)*xi*.14)}Ut.needsUpdate=!0}he.offset.y=(he.offset.y+Pe*1.6)%1,ne.offset.x=(ne.offset.x+Pe*.12)%1,at.rotation.y+=Pe*.004,be.forEach(($e,ot)=>{$e.material.opacity=.42+Math.sin(Ee*.8+ot)*.1});for(const $e of fe){const ot=$e.userData;ot.a+=Pe*ot.s,$e.position.set(Math.cos(ot.a)*ot.r,ot.y+Math.sin(ot.a*3)*.8,Math.sin(ot.a)*ot.r),$e.rotation.y=-ot.a,$e.children[3].rotation.z=Math.sin(Ee*10+ot.r)*.6,$e.children[4].rotation.z=-Math.sin(Ee*10+ot.r)*.6}b.forEach(($e,ot)=>{$e.rotation.y=Math.sin(Ee*2+ot)*.3}),Je.position.y=-.4+Math.sin(Ee*.9)*.2,Je.rotation.x=Math.sin(Ee*.7)*.03;{const $e=ut.userData;$e.a+=Pe*.022,ut.position.set(Math.cos($e.a)*$e.r,$e.y+Math.sin(Ee*.5)*.8,Math.sin($e.a)*$e.r),ut.rotation.y=Math.atan2(-Math.cos($e.a),-Math.sin($e.a))}}if(ze){const We=Math.min(1,(performance.now()-ze.t0)/ze.dur),mt=We<.5?4*We*We*We:1-Math.pow(-2*We+2,3)/2;ye.target.lerpVectors(ze.ft,ze.tt,mt),ct.position.lerpVectors(ze.fp,ze.tp,mt),We>=1&&(ze=null)}else if(Se){xt.actors[Se].root.getWorldPosition(Gt),Gt.y+=.8;const We=Gt.sub(ye.target).multiplyScalar(e?1:Math.min(1,Pe*4));ye.target.add(We),ct.position.add(We)}re(),ye.update(),ke(),e||ee(Ee,Pe),Ke.position.copy(ct.position),et(Be,"focus").value=ct.position.distanceTo(ye.target),et(Be,"time").value=e?0:Ee,R(),Y.render(),Bt++}return{renderer:i,scene:r,camera:ct,controls:ye,housePicks:st,agentPhase:gt,cast:xt,groundY:Qe,place(G,Ee){const Pe=fi[Ee];xt.actors[G].root.position.y=Qe(Pe.x,Pe.z),Rt[G]=Ei(Ee,performance.now())},update(G,Ee){Pt=G,Re=Ee;const Pe=performance.now();for(const Ct of ns){const Et=Sa(Ct,G,Re,qe);Et&&(Rt[Ct]=Ou(Rt[Ct],Et,Pe,Wo[Ct].speed,e,ba[Ct]))}},land(){const G=performance.now();for(const Ee of ns)Rt[Ee]=VM(Rt[Ee],G)},restart(){Rt=pt(),qe.clear()},whereIs(G){const Ee=performance.now(),Pe=Fu(Rt[G],Ee,Wo[G].speed,e),Ct=zu(Pe,Ee).walking,Et=Ct?Pe.walk:null;return{spot:Pe.spot,to:Et?.to??null,path:Et?.path??null,walking:Ct,held:Bu(Pe,Ee)}},get frames(){return Bt},start(){It=!1,i.setAnimationLoop(G=>{It||cn(G)})},stop(){It=!0,i.setAnimationLoop(null)},resize(G,Ee){t=G,n=Ee,ft(G,Ee)},flyToRoom:Ye,onHandMove(G){return Ce=G,()=>{Ce===G&&(Ce=null)}},onPick(G){return nt=G,()=>{nt===G&&(nt=null)}},follow(G){Se=G,G&&(ze=null,L=null)},setOpenHouses(G){tt=G},setTasks(G){f.drawBoard(G)},dispose(){i.setAnimationLoop(null);for(const[G,Ee]of W)i.domElement.removeEventListener(G,Ee);Ce=null,nt=null,ye.dispose(),Y.dispose(),_e.dispose(),i.dispose()}}}export{I1 as createWorld};
