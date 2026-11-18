const Bs={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gf=0,sh=1,_f=2,Ar=1,xf=2,Mr=3,ji=0,Nn=1,ln=2,ls=0,ks=1,Oi=2,rh=3,oh=4,vf=5,Ns=100,Mf=101,yf=102,Sf=103,bf=104,wf=200,Tf=201,Ef=202,Af=203,ed=204,td=205,Rf=206,Cf=207,Pf=208,Lf=209,Df=210,If=211,Nf=212,Uf=213,Of=214,gl=0,_l=1,xl=2,Or=3,vl=4,Ml=5,yl=6,Sl=7,nd=0,Ff=1,Bf=2,Hi=0,mc=1,gc=2,_c=3,ma=4,xc=5,vc=6,Mc=7,ah="attached",kf="detached",id=300,Ws=301,Fr=302,Ra=303,Ca=304,ii=1e3,zn=1001,Jo=1002,vn=1003,sd=1004,yr=1005,An=1006,Ho=1007,yi=1008,Zn=1009,rd=1010,od=1011,Br=1012,yc=1013,ui=1014,ni=1015,Un=1016,Sc=1017,bc=1018,Xs=1020,ad=35902,ld=35899,cd=1021,hd=1022,ci=1023,es=1026,$i=1027,ga=1028,wc=1029,hs=1030,Tc=1031,Ec=1033,Go=33776,Vo=33777,Wo=33778,Xo=33779,bl=35840,wl=35841,Tl=35842,El=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Ll=37489,$o=37490,Dl=37491,Il=37808,Nl=37809,Ul=37810,Ol=37811,Fl=37812,Bl=37813,kl=37814,zl=37815,Hl=37816,Gl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Kl=36494,Zl=36495,Jl=36283,$l=36284,Qo=36285,Ql=36286,zf=2200,Hf=2201,Gf=2202,kr=2300,zr=2301,Pa=2302,lh=2303,Os=2400,Fs=2401,jo=2402,Ac=2500,Vf=2501,Wf=0,ud=1,jl=2,Xf=3200,Hr=0,qf=1,Fi="",xn="srgb",$n="srgb-linear",ea="linear",Qt="srgb",La=7680,Yf=519,Kf=512,Zf=513,Jf=514,dd=515,$f=516,Qf=517,fd=518,pd=519,md=35044,ch="300 es",hi=2e3,Gr=2001;function jf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ep(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tp(){const s=Vr("canvas");return s.style.display="block",s}const hh={};function ta(...s){const e="THREE."+s.shift();console.log(e,...s)}function gd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=gd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=gd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function zs(...s){const e=s.join(" ");e in hh||(hh[e]=!0,Tt(...s))}function np(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ip={[gl]:gl,[xl]:yl,[vl]:vl,[Or]:Ml,[_l]:_l,[yl]:xl,[Sl]:Sl,[Ml]:Or};class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uh=1234567;const Rr=Math.PI/180,qs=180/Math.PI;function di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function Rc(s,e){return(s%e+e)%e}function sp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function rp(s,e,t){return s!==e?(t-s)/(e-s):0}function Cr(s,e,t){return(1-t)*s+t*e}function op(s,e,t,n){return Cr(s,e,1-Math.exp(-t*n))}function ap(s,e=1){return e-Math.abs(Rc(s,e*2)-e)}function lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function up(s,e){return s+Math.random()*(e-s)}function dp(s){return s*(.5-Math.random())}function fp(s){s!==void 0&&(uh=s);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(s){return s*Rr}function mp(s){return s*qs}function gp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _p(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _d(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xp(s,e,t,n,i){const r=Math.cos,o=Math.sin,l=r(t/2),a=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(l*h,a*d,a*f,l*c);break;case"YZY":s.set(a*f,l*h,a*d,l*c);break;case"ZXZ":s.set(a*d,a*f,l*h,l*c);break;case"XZX":s.set(l*h,a*p,a*u,l*c);break;case"YXY":s.set(a*u,l*h,a*p,l*c);break;case"ZYZ":s.set(a*p,a*u,l*h,l*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _a(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cc(s,e){if(e.constructor===Float32Array)return s;const t=_a(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Pc(s,e){if(e.constructor===Float32Array)return s;const t=_a(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const na={DEG2RAD:Rr,RAD2DEG:qs,generateUUID:di,clamp:Bt,euclideanModulo:Rc,mapLinear:sp,inverseLerp:rp,lerp:Cr,damp:op,pingpong:ap,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:_d,setQuaternionFromProperEuler:xp,normalize:Pc,denormalize:Cc},Qc=class Qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qc.prototype.isVector2=!0;let Ue=Qc;class cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||a!==f||c!==u||h!==p){let m=a*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-l;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);g=Math.sin(g*S)/E,l=Math.sin(l*S)/E,a=a*g+f*l,c=c*g+u*l,h=h*g+p*l,d=d*g+_*l}else{a=a*g+f*l,c=c*g+u*l,h=h*g+p*l,d=d*g+_*l;const S=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=S,c*=S,h*=S,d*=S}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=l*p+h*d+a*u-c*f,e[t+1]=a*p+h*f+c*d-l*u,e[t+2]=c*p+h*u+l*f-a*d,e[t+3]=h*p-l*d-a*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(n/2),h=l(i/2),d=l(r/2),f=a(n/2),u=a(i/2),p=a(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],a=t[9],c=t[2],h=t[6],d=t[10],f=n+l+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-a)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>l&&n>d){const u=2*Math.sqrt(1+n-l-d);this._w=(h-a)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(l>d){const u=2*Math.sqrt(1+l-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(a+h)/u}else{const u=2*Math.sqrt(1+d-n-l);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(a+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+o*l+i*c-r*a,this._y=i*h+o*a+r*l-n*c,this._z=r*h+o*c+n*a-i*l,this._w=o*h-n*l-i*a-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,i=-i,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);a=Math.sin(a*c)/h,t=Math.sin(t*c)/h,this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jc=class jc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*i-l*n),h=2*(l*t-r*i),d=2*(r*n-o*t);return this.x=t+a*c+o*d-l*h,this.y=n+a*h+l*c-r*d,this.z=i+a*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=i*a-r*l,this.y=r*o-n*a,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jc.prototype.isVector3=!0;let V=jc;const Da=new V,dh=new cn,eh=class eh{constructor(e,t,n,i,r,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c)}set(e,t,n,i,r,o,l,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=i[0],m=i[3],g=i[6],S=i[1],E=i[4],T=i[7],I=i[2],P=i[5],M=i[8];return r[0]=o*_+l*S+a*I,r[3]=o*m+l*E+a*P,r[6]=o*g+l*T+a*M,r[1]=c*_+h*S+d*I,r[4]=c*m+h*E+d*P,r[7]=c*g+h*T+d*M,r[2]=f*_+u*S+p*I,r[5]=f*m+u*E+p*P,r[8]=f*g+u*T+p*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8];return t*o*h-t*l*c-n*r*h+n*l*a+i*r*c-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=h*o-l*c,f=l*a-h*r,u=c*r-o*a,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(l*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*a)*_,e[5]=(i*r-l*t)*_,e[6]=u*_,e[7]=(n*a-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+e,-i*c,i*a,-i*(-c*o+a*l)+l+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;let It=eh;const Ia=new It,fh=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){const s={enabled:!0,workingColorSpace:$n,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$n]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:Qt,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),s}const Wt=vp();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class Mp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Vr("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yp=0;class Lc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Na(i[o].image)):r.push(Na(i[o]))}else r=Na(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}let Sp=0;const Ua=new V;class Sn extends Vi{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=zn,i=zn,r=An,o=yi,l=ci,a=Zn,c=Sn.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=di(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Tt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=id;Sn.DEFAULT_ANISOTROPY=1;const th=class th{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const a=e.elements,c=a[0],h=a[4],d=a[8],f=a[1],u=a[5],p=a[9],_=a[2],m=a[6],g=a[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(u+1)/2,I=(g+1)/2,P=(h+f)/4,M=(d+_)/4,w=(p+m)/4;return E>T&&E>I?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=M/n):T>I?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=P/i,r=w/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=M/r,i=w/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(d-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;let sn=th;class bp extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Sn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Lc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends bp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xd extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wp extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pa=class pa{constructor(e,t,n,i,r,o,l,a,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,_,m)}set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=l,g[13]=a,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,p=l*h,_=l*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=u+p*c,t[5]=f-_*c,t[9]=-l*a,t[2]=_-f*c,t[6]=p+u*c,t[10]=o*a}else if(e.order==="YXZ"){const f=a*h,u=a*d,p=c*h,_=c*d;t[0]=f+_*l,t[4]=p*l-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=u*l-p,t[6]=_+f*l,t[10]=o*a}else if(e.order==="ZXY"){const f=a*h,u=a*d,p=c*h,_=c*d;t[0]=f-_*l,t[4]=-o*d,t[8]=p+u*l,t[1]=u+p*l,t[5]=o*h,t[9]=_-f*l,t[2]=-o*c,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const f=o*h,u=o*d,p=l*h,_=l*d;t[0]=a*h,t[4]=p*c-u,t[8]=f*c+_,t[1]=a*d,t[5]=_*c+f,t[9]=u*c-p,t[2]=-c,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const f=o*a,u=o*c,p=l*a,_=l*c;t[0]=a*h,t[4]=_-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*a,u=o*c,p=l*a,_=l*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=l*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ep)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Wi.crossVectors(n,Yn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Wi.crossVectors(n,Yn)),Wi.normalize(),io.crossVectors(Yn,Wi),i[0]=Wi.x,i[4]=io.x,i[8]=Yn.x,i[1]=Wi.y,i[5]=io.y,i[9]=Yn.y,i[2]=Wi.z,i[6]=io.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],E=n[7],T=n[11],I=n[15],P=i[0],M=i[4],w=i[8],U=i[12],k=i[1],j=i[5],ae=i[9],ee=i[13],F=i[2],oe=i[6],se=i[10],X=i[14],te=i[3],le=i[7],fe=i[11],Te=i[15];return r[0]=o*P+l*k+a*F+c*te,r[4]=o*M+l*j+a*oe+c*le,r[8]=o*w+l*ae+a*se+c*fe,r[12]=o*U+l*ee+a*X+c*Te,r[1]=h*P+d*k+f*F+u*te,r[5]=h*M+d*j+f*oe+u*le,r[9]=h*w+d*ae+f*se+u*fe,r[13]=h*U+d*ee+f*X+u*Te,r[2]=p*P+_*k+m*F+g*te,r[6]=p*M+_*j+m*oe+g*le,r[10]=p*w+_*ae+m*se+g*fe,r[14]=p*U+_*ee+m*X+g*Te,r[3]=S*P+E*k+T*F+I*te,r[7]=S*M+E*j+T*oe+I*le,r[11]=S*w+E*ae+T*se+I*fe,r[15]=S*U+E*ee+T*X+I*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],a=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],_=e[7],m=e[11],g=e[15],S=a*u-c*f,E=l*u-c*d,T=l*f-a*d,I=o*u-c*h,P=o*f-a*h,M=o*d-l*h;return t*(_*S-m*E+g*T)-n*(p*S-m*I+g*P)+i*(p*E-_*I+g*M)-r*(p*T-_*P+m*M)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],l=e[9],a=e[2],c=e[6],h=e[10];return t*(o*h-l*c)-n*(r*h-l*a)+i*(r*c-o*a)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],_=e[13],m=e[14],g=e[15],S=t*l-n*o,E=t*a-i*o,T=t*c-r*o,I=n*a-i*l,P=n*c-r*l,M=i*c-r*a,w=h*_-d*p,U=h*m-f*p,k=h*g-u*p,j=d*m-f*_,ae=d*g-u*_,ee=f*g-u*m,F=S*ee-E*ae+T*j+I*k-P*U+M*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const oe=1/F;return e[0]=(l*ee-a*ae+c*j)*oe,e[1]=(i*ae-n*ee-r*j)*oe,e[2]=(_*M-m*P+g*I)*oe,e[3]=(f*P-d*M-u*I)*oe,e[4]=(a*k-o*ee-c*U)*oe,e[5]=(t*ee-i*k+r*U)*oe,e[6]=(m*T-p*M-g*E)*oe,e[7]=(h*M-f*T+u*E)*oe,e[8]=(o*ae-l*k+c*w)*oe,e[9]=(n*k-t*ae-r*w)*oe,e[10]=(p*P-_*T+g*S)*oe,e[11]=(d*T-h*P-u*S)*oe,e[12]=(l*U-o*j-a*w)*oe,e[13]=(t*j-n*U+i*w)*oe,e[14]=(_*E-p*I-m*S)*oe,e[15]=(h*I-d*E+f*S)*oe,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,c=r*o,h=r*l;return this.set(c*o+n,c*l-i*a,c*a+i*l,0,c*l+i*a,h*l+n,h*a-i*o,0,c*a-i*l,h*a+i*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,c=r+r,h=o+o,d=l+l,f=r*c,u=r*h,p=r*d,_=o*h,m=o*d,g=l*d,S=a*c,E=a*h,T=a*d,I=n.x,P=n.y,M=n.z;return i[0]=(1-(_+g))*I,i[1]=(u+T)*I,i[2]=(p-E)*I,i[3]=0,i[4]=(u-T)*P,i[5]=(1-(f+g))*P,i[6]=(m+S)*P,i[7]=0,i[8]=(p+E)*M,i[9]=(m-S)*M,i[10]=(1-(f+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_s.set(i[0],i[1],i[2]).length();const l=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ri.copy(this);const c=1/o,h=1/l,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,i,r,o,l=hi,a=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let p,_;if(a)p=r/(o-r),_=o*r/(o-r);else if(l===hi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(l===Gr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=hi,a=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,_;if(a)p=1/(o-r),_=o/(o-r);else if(l===hi)p=-2/(o-r),_=-(o+r)/(o-r);else if(l===Gr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pa.prototype.isMatrix4=!0;let Rt=pa;const _s=new V,ri=new Rt,Tp=new V(0,0,0),Ep=new V(1,1,1),Wi=new V,io=new V,Yn=new V,mh=new Rt,gh=new cn;class wi{constructor(e=0,t=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],a=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ap=0;const _h=new V,xs=new cn,Ri=new Rt,so=new V,rr=new V,Rp=new V,Cp=new cn,xh=new V(1,0,0),vh=new V(0,1,0),Mh=new V(0,0,1),yh={type:"added"},Pp={type:"removed"},vs={type:"childadded",child:null},Oa={type:"childremoved",child:null};class an extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new V,t=new wi,n=new cn,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new It}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(rr,so,this.up):Ri.lookAt(so,rr,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];r(e.shapes,d)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(e.materials,this.material[a]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];i.animations.push(r(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(l){const a=[];for(const c in l){const h=l[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new V(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ee extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return l!==null&&(l.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Ba(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Wt.workingColorSpace){if(e=Rc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ba(o,r,e+1/3),this.g=Ba(o,r,e),this.b=Ba(o,r,e-1/3)}return Wt.colorSpaceToWorking(this,i),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Tt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Wt.workingToColorSpace(Ln.copy(this),e),Math.round(Bt(Ln.r*255,0,255))*65536+Math.round(Bt(Ln.g*255,0,255))*256+Math.round(Bt(Ln.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let a,c;const h=(l+o)/2;if(l===o)a=0,c=0;else{const d=o-l;switch(c=h<=.5?d/(o+l):d/(2-o-l),o){case n:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-n)/d+2;break;case r:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=xn){Wt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,i=Ln.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ro);const n=Cr(Xi.h,ro.h,t),i=Cr(Xi.s,ro.s,t),r=Cr(Xi.l,ro.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new _t;_t.NAMES=vd;class Ic{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=n}clone(){return new Ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dp extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const oi=new V,Ci=new V,ka=new V,Pi=new V,Ms=new V,ys=new V,Sh=new V,za=new V,Ha=new V,Ga=new V,Va=new sn,Wa=new sn,Xa=new sn;class ti{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),Ci.subVectors(n,t),ka.subVectors(e,t);const o=oi.dot(oi),l=oi.dot(Ci),a=oi.dot(ka),c=Ci.dot(Ci),h=Ci.dot(ka),d=o*c-l*l;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*a-l*h)*f,p=(o*h-l*a)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,i,r,o,l,a){return this.getBarycoord(e,t,n,i,Pi)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Pi.x),a.addScaledVector(o,Pi.y),a.addScaledVector(l,Pi.z),a)}static getInterpolatedAttribute(e,t,n,i,r,o){return Va.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Va.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ci.subVectors(e,t),oi.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),oi.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;Ms.subVectors(i,n),ys.subVectors(r,n),za.subVectors(e,n);const a=Ms.dot(za),c=ys.dot(za);if(a<=0&&c<=0)return t.copy(n);Ha.subVectors(e,i);const h=Ms.dot(Ha),d=ys.dot(Ha);if(h>=0&&d<=h)return t.copy(i);const f=a*d-h*c;if(f<=0&&a>=0&&h<=0&&a-h>0)return o=a/(a-h),t.copy(n).addScaledVector(Ms,o);Ga.subVectors(e,r);const u=Ms.dot(Ga),p=ys.dot(Ga);if(p>=0&&u<=p)return t.copy(r);const _=u*c-a*p;if(_<=0&&c>=0&&p<=0)return l=c/(c-p),t.copy(n).addScaledVector(ys,l);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Sh.subVectors(r,i),l=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(Sh,l);const g=1/(m+_+f);return o=_*g,l=f*g,t.copy(n).addScaledVector(Ms,o).addScaledVector(ys,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ti{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),ao.subVectors(this.max,or),Ss.subVectors(e.a,or),bs.subVectors(e.b,or),ws.subVectors(e.c,or),qi.subVectors(bs,Ss),Yi.subVectors(ws,bs),ts.subVectors(Ss,ws);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ts.z,ts.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ts.z,0,-ts.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ts.y,ts.x,0];return!qa(t,Ss,bs,ws,ao)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Ss,bs,ws,ao))?!1:(lo.crossVectors(qi,Yi),t=[lo.x,lo.y,lo.z],qa(t,Ss,bs,ws,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new V,new V,new V,new V,new V,new V,new V,new V],ai=new V,oo=new Ti,Ss=new V,bs=new V,ws=new V,qi=new V,Yi=new V,ts=new V,or=new V,ao=new V,lo=new V,ns=new V;function qa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ns.fromArray(s,r);const l=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),a=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}const _n=new V,co=new Ue;let Ip=0;class En extends Vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=md,this.updateRanges=[],this.gpuType=ni,this.version=0,this._normalizationScale=e!==void 0?_a(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pc(e,this.array)}}class Md extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yd extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Np=new Ti,ar=new V,Ya=new V;class Ei{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Np.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ya)),this.expandByPoint(ar.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Up=0;const Qn=new Rt,Ka=new an,Ts=new V,Kn=new Ti,lr=new Ti,Tn=new V;class en extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?yd:Md)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];lr.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(Kn.min,lr.min),Kn.expandByPoint(Tn),Tn.addVectors(Kn.max,lr.max),Kn.expandByPoint(Tn)):(Kn.expandByPoint(lr.min),Kn.expandByPoint(lr.max))}Kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tn));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Tn.fromBufferAttribute(l,c),a&&(Ts.fromBufferAttribute(e,c),Tn.add(Ts)),i=Math.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],a=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)l[U]=new V,a[U]=new V;const h=new V,d=new V,f=new V,u=new Ue,p=new Ue,_=new Ue,m=new V,g=new V;function S(U,k,j){c[U]=c[k]=c[j]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,k),f.fromBufferAttribute(n,j),u.fromBufferAttribute(r,U),p.fromBufferAttribute(r,k),_.fromBufferAttribute(r,j),d.sub(h),f.sub(h),p.sub(u),_.sub(u);const ae=1/(p.x*_.y-_.x*p.y);isFinite(ae)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(ae),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(ae),l[U].add(m),l[k].add(m),l[j].add(m),a[U].add(g),a[k].add(g),a[j].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,k=E.length;U<k;++U){const j=E[U],ae=j.start,ee=j.count;for(let F=ae,oe=ae+ee;F<oe;F+=3)S(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new V,I=new V,P=new V,M=new V;function w(U){P.fromBufferAttribute(i,U),M.copy(P);const k=l[U];T.copy(k),T.sub(P.multiplyScalar(P.dot(k))).normalize(),I.crossVectors(M,k);const ae=I.dot(a[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,ae)}for(let U=0,k=n.count;U<k;++U)c[U]&&w(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new V,r=new V,o=new V,l=new V,a=new V,c=new V,h=new V,d=new V;if(e)for(let f=0,u=e.count;f<u;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),l.fromBufferAttribute(n,p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.add(h),a.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(l,a){const c=l.array,h=l.itemSize,d=l.normalized,f=new c.constructor(a.length*h);let u=0,p=0;for(let _=0,m=a.length;_<m;_++){l.isInterleavedBufferAttribute?u=a[_]*l.data.stride+l.offset:u=a[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new En(f,h,d)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,i=this.attributes;for(const l in i){const a=i[l],c=e(a,n);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const a=[],c=r[l];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);a.push(u)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[a]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=md,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=bh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=bh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function bh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=di()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Fn=new V;class Wr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?_a(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pc(e,this.data.array)}}const Za=new V,Op=new V,Fp=new It;class Ui{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Za.subVectors(n,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fp.getNormalMatrix(e),i=this.coplanarPoint(Za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Bp=0;class Jn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ks,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Tt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const a=r[l];delete a.metadata,o.push(a)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gs extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const cr=new V,As=new V,Rs=new V,Cs=new Ue,hr=new Ue,bd=new Rt,ho=new V,ur=new V,uo=new V,wh=new Ue,Ja=new Ue,Th=new Ue;class cs extends an{constructor(e=new Gs){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new en;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sd(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Wr(n,3,0,!1)),Es.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),bd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;fo(ho.set(-.5,-.5,0),Rs,o,As,i,r),fo(ur.set(.5,-.5,0),Rs,o,As,i,r),fo(uo.set(.5,.5,0),Rs,o,As,i,r),wh.set(0,0),Ja.set(1,0),Th.set(1,1);let l=e.ray.intersectTriangle(ho,ur,uo,!1,cr);if(l===null&&(fo(ur.set(-.5,.5,0),Rs,o,As,i,r),Ja.set(0,1),l=e.ray.intersectTriangle(ho,uo,ur,!1,cr),l===null))return;const a=e.ray.origin.distanceTo(cr);a<e.near||a>e.far||t.push({distance:a,point:cr.clone(),uv:ti.getInterpolation(cr,ho,ur,uo,wh,Ja,Th,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function fo(s,e,t,n,i,r){Cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(hr.x=r*Cs.x-i*Cs.y,hr.y=i*Cs.x+r*Cs.y):hr.copy(Cs),s.copy(e),s.x+=hr.x,s.y+=hr.y,s.applyMatrix4(bd)}const Di=new V,$a=new V,po=new V,mo=new V;class $s{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$a.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(po),l=mo.dot(this.direction),a=-mo.dot(po),c=mo.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*a-l,f=o*l-a,p=r*h,d>=0)if(f>=-p)if(f<=p){const _=1/h;d*=_,f*=_,u=d*(d+o*f+2*l)+f*(o*d+f+2*a)+c}else f=r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f=-r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f<=-p?(d=Math.max(0,-(-o*r+l)),f=d>0?-r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+c):(d=Math.max(0,-(o*r+l)),f=d>0?r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($a).addScaledVector(po,f),u}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);const n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(l=(e.min.z-f.z)*d,a=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,a=(e.min.z-f.z)*d),n>a||l>i)||((l>n||n!==n)&&(n=l),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,l=this.direction,a=l.x,c=l.y,h=l.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,S=n.y-o.y,E=n.z-o.z,T=Math.abs(a),I=Math.abs(c),P=Math.abs(h);let M,w,U,k,j,ae,ee,F,oe,se,X,te;if(T>=I&&T>=P?(U=a,ae=d,oe=p,te=g,a>=0?(M=c,w=h,k=f,j=u,ee=_,F=m,se=S,X=E):(M=h,w=c,k=u,j=f,ee=m,F=_,se=E,X=S)):I>=P?(U=c,ae=f,oe=_,te=S,c>=0?(M=h,w=a,k=u,j=d,ee=m,F=p,se=E,X=g):(M=a,w=h,k=d,j=u,ee=p,F=m,se=g,X=E)):(U=h,ae=u,oe=m,te=E,h>=0?(M=a,w=c,k=d,j=f,ee=p,F=_,se=g,X=S):(M=c,w=a,k=f,j=d,ee=_,F=p,se=S,X=g)),U===0)return null;const le=M/U,fe=w/U,Te=1/U,Ke=k-le*ae,rt=j-fe*ae,me=ee-le*oe,We=F-fe*oe,nt=se-le*te,ct=X-fe*te,Xe=nt*We-ct*me,ut=Ke*ct-rt*nt,Ut=me*rt-We*Ke;if(i){if(Xe<0||ut<0||Ut<0)return null}else if((Xe<0||ut<0||Ut<0)&&(Xe>0||ut>0||Ut>0))return null;const at=Xe+ut+Ut;if(at===0)return null;const bt=Te*(Xe*ae+ut*oe+Ut*te);return(at>0?bt<0:bt>0)?null:this.at(bt/at,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Eh=new Rt,is=new $s,go=new Ei,Ah=new V,_o=new V,xo=new V,vo=new V,Qa=new V,Mo=new V,Rh=new V,yo=new V;class Dt extends an{constructor(e=new en,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){Mo.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const h=l[a],d=r[a];h!==0&&(Qa.fromBufferAttribute(d,e),o?Mo.addScaledVector(Qa,h):Mo.addScaledVector(Qa.sub(t),h))}t.add(Mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(go.containsPoint(is.origin)===!1&&(is.intersectSphere(go,Ah)===null||is.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),is.copy(e.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],S=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let T=S,I=E;T<I;T+=3){const P=l.getX(T),M=l.getX(T+1),w=l.getX(T+2);i=So(this,g,e,n,c,h,d,P,M,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){const S=l.getX(m),E=l.getX(m+1),T=l.getX(m+2);i=So(this,o,e,n,c,h,d,S,E,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],S=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let T=S,I=E;T<I;T+=3){const P=T,M=T+1,w=T+2;i=So(this,g,e,n,c,h,d,P,M,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){const S=m,E=m+1,T=m+2;i=So(this,o,e,n,c,h,d,S,E,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function kp(s,e,t,n,i,r,o,l){let a;if(e.side===Nn?a=n.intersectTriangle(o,r,i,!0,l):a=n.intersectTriangle(i,r,o,e.side===ji,l),a===null)return null;yo.copy(l),yo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yo);return c<t.near||c>t.far?null:{distance:c,point:yo.clone(),object:s}}function So(s,e,t,n,i,r,o,l,a,c){s.getVertexPosition(l,_o),s.getVertexPosition(a,xo),s.getVertexPosition(c,vo);const h=kp(s,e,t,n,_o,xo,vo,Rh);if(h){const d=new V;ti.getBarycoord(Rh,_o,xo,vo,d),i&&(h.uv=ti.getInterpolatedAttribute(i,l,a,c,d,new Ue)),r&&(h.uv1=ti.getInterpolatedAttribute(r,l,a,c,d,new Ue)),o&&(h.normal=ti.getInterpolatedAttribute(o,l,a,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:a,c,normal:new V,materialIndex:0};ti.getNormal(_o,xo,vo,f.normal),h.face=f,h.barycoord=d}return h}const dr=new sn,Ch=new sn,Ph=new sn,zp=new sn,Lh=new Rt,bo=new V,ja=new Ei,Dh=new Rt,el=new $s;class Hp extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ah,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingBox.expandByPoint(bo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingSphere.expandByPoint(bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1&&(Dh.copy(i).invert(),el.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new sn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ch.fromBufferAttribute(i.attributes.skinIndex,e),Ph.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(dr.copy(t),t.set(0,0,0,0)):(dr.set(t.x,t.y,t.z,1),t.set(0,0,0)),dr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Ph.getComponent(r);if(o!==0){const l=Ch.getComponent(r);Lh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(zp.copy(dr).applyMatrix4(Lh),o)}}return t.isVector4&&(t.w=dr.w),t.applyMatrix4(this.bindMatrixInverse)}}class wd extends an{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xa extends Sn{constructor(e=null,t=1,n=1,i,r,o,l,a,c=vn,h=vn,d,f){super(null,o,l,a,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new Rt,Gp=new Rt;class Nc{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:Gp;Ih.multiplyMatrices(l,t[r]),Ih.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xa(t,e,e,ci,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Tt("Skeleton: No bone found with UUID:",r),o=new wd),this.bones.push(o),this.boneInverses.push(new Rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class ia extends En{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new Rt,Nh=new Rt,wo=[],Uh=new Ti,Vp=new Rt,fr=new Dt,pr=new Ei;class Xr extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Uh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),pr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),Nh.multiplyMatrices(n,Ps),fr.matrixWorld=Nh,fr.raycast(e,wo);for(let o=0,l=wo.length;o<l;o++){const a=wo[o];a.instanceId=r,a.object=this,t.push(a)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(i*this.count),i,this.count,ga,ni));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=i*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ss=new Ei,Wp=new Ue(.5,.5),To=new V;class qr{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){const i=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],E=r[13],T=r[14],I=r[15];if(i[0].setComponents(c-o,u-h,g-p,I-S).normalize(),i[1].setComponents(c+o,u+h,g+p,I+S).normalize(),i[2].setComponents(c+l,u+d,g+_,I+E).normalize(),i[3].setComponents(c-l,u-d,g-_,I-E).normalize(),n)i[4].setComponents(a,f,m,T).normalize(),i[5].setComponents(c-a,u-f,g-m,I-T).normalize();else if(i[4].setComponents(c-a,u-f,g-m,I-T).normalize(),t===hi)i[5].setComponents(c+a,u+f,g+m,I+T).normalize();else if(t===Gr)i[5].setComponents(a,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=Wp.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(To.x=i.normal.x>0?e.max.x:e.min.x,To.y=i.normal.y>0?e.max.y:e.min.y,To.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Oh=new Rt;class Uc{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];Oh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new qr),n[i].setFromProjectionMatrix(Oh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new qr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Uc().copy(this)}}class Td extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sa=new V,ra=new V,Fh=new Rt,mr=new $s,Eo=new Ei,tl=new V,Bh=new V;class Oc extends an{constructor(e=new en,t=new Td){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)sa.fromBufferAttribute(t,i-1),ra.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sa.distanceTo(ra);e.setAttribute("lineDistance",new At(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Fh.copy(i).invert(),mr.copy(e.ray).applyMatrix4(Fh);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=u,m=p-1;_<m;_+=c){const g=h.getX(_),S=h.getX(_+1),E=Ao(this,e,mr,a,g,S,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(u),g=Ao(this,e,mr,a,_,m,p-1);g&&t.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=u,m=p-1;_<m;_+=c){const g=Ao(this,e,mr,a,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Ao(this,e,mr,a,p-1,u,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Ao(s,e,t,n,i,r,o){const l=s.geometry.attributes.position;if(sa.fromBufferAttribute(l,i),ra.fromBufferAttribute(l,r),t.distanceSqToSegment(sa,ra,tl,Bh)>n)return;tl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(tl);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const kh=new V,zh=new V;class Xp extends Oc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kh.fromBufferAttribute(t,i),zh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kh.distanceTo(zh);e.setAttribute("lineDistance",new At(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qp extends Oc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pr extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new Rt,ec=new $s,Ro=new Ei,Co=new V;class Sr extends an{constructor(e=new en,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Hh.copy(i).invert(),ec.copy(e.ray).applyMatrix4(Hh);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,_=u;p<_;p++){const m=c.getX(p);Co.fromBufferAttribute(d,m),Gh(Co,m,a,i,e,t,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,_=u;p<_;p++)Co.fromBufferAttribute(d,p),Gh(Co,p,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Gh(s,e,t,n,i,r,o){const l=ec.distanceSqToPoint(s);if(l<t){const a=new V;ec.closestPointToPoint(s,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ed extends Sn{constructor(e=[],t=Ws,n,i,r,o,l,a,c,h){super(e,t,n,i,r,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tc extends Sn{constructor(e,t,n,i,r,o,l,a,c){super(e,t,n,i,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends Sn{constructor(e,t,n=ui,i,r,o,l=vn,a=vn,c,h=es,d=1){if(h!==es&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,l,a,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ad extends us{constructor(e,t=ui,n=Ws,i,r,o=vn,l=vn,a,c=es){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,l,a,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rd extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Le extends en{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(a),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function p(_,m,g,S,E,T,I,P,M,w,U){const k=T/M,j=I/w,ae=T/2,ee=I/2,F=P/2,oe=M+1,se=w+1;let X=0,te=0;const le=new V;for(let fe=0;fe<se;fe++){const Te=fe*j-ee;for(let Ke=0;Ke<oe;Ke++){const rt=Ke*k-ae;le[_]=rt*S,le[m]=Te*E,le[g]=F,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[g]=P>0?1:-1,h.push(le.x,le.y,le.z),d.push(Ke/M),d.push(1-fe/w),X+=1}}for(let fe=0;fe<w;fe++)for(let Te=0;Te<M;Te++){const Ke=f+Te+oe*fe,rt=f+Te+oe*(fe+1),me=f+(Te+1)+oe*(fe+1),We=f+(Te+1)+oe*fe;a.push(Ke,rt,We),a.push(rt,me,We),te+=6}l.addGroup(u,te,U),u+=te,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oa extends en{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],l=[],a=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,_=i+1,m=new V,g=new V;for(let S=0;S<=p;S++){let E=0,T=0,I=0,P=0;if(S<=n){const U=S/n,k=U*Math.PI/2;T=-h-e*Math.cos(k),I=e*Math.sin(k),P=-e*Math.cos(k),E=U*d}else if(S<=n+r){const U=(S-n)/r;T=-h+U*t,I=e,P=0,E=d+U*f}else{const U=(S-n-r)/n,k=U*Math.PI/2;T=h+e*Math.sin(k),I=e*Math.cos(k),P=e*Math.sin(k),E=d+f+U*d}const M=Math.max(0,Math.min(1,E/u));let w=0;S===0?w=.5/i:S===p&&(w=-.5/i);for(let U=0;U<=i;U++){const k=U/i,j=k*Math.PI*2,ae=Math.sin(j),ee=Math.cos(j);g.x=-I*ee,g.y=T,g.z=I*ae,l.push(g.x,g.y,g.z),m.set(-I*ee,P,I*ae),m.normalize(),a.push(m.x,m.y,m.z),c.push(k+w,M)}if(S>0){const U=(S-1)*_;for(let k=0;k<i;k++){const j=U+k,ae=U+k+1,ee=S*_+k,F=S*_+k+1;o.push(j,ae,ee),o.push(ae,F,ee)}}}this.setIndex(o),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class li extends en{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],l=[],a=[],c=new V,h=new Ue;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,a.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tt extends en{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const _=[],m=n/2;let g=0;S(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(u,2));function S(){const T=new V,I=new V;let P=0;const M=(t-e)/n;for(let w=0;w<=r;w++){const U=[],k=w/r,j=k*(t-e)+e;for(let ae=0;ae<=i;ae++){const ee=ae/i,F=ee*a+l,oe=Math.sin(F),se=Math.cos(F);I.x=j*oe,I.y=-k*n+m,I.z=j*se,d.push(I.x,I.y,I.z),T.set(oe,M,se).normalize(),f.push(T.x,T.y,T.z),u.push(ee,1-k),U.push(p++)}_.push(U)}for(let w=0;w<i;w++)for(let U=0;U<r;U++){const k=_[U][w],j=_[U+1][w],ae=_[U+1][w+1],ee=_[U][w+1];(e>0||U!==0)&&(h.push(k,j,ee),P+=3),(t>0||U!==r-1)&&(h.push(j,ae,ee),P+=3)}c.addGroup(g,P,0),g+=P}function E(T){const I=p,P=new Ue,M=new V;let w=0;const U=T===!0?e:t,k=T===!0?1:-1;for(let ae=1;ae<=i;ae++)d.push(0,m*k,0),f.push(0,k,0),u.push(.5,.5),p++;const j=p;for(let ae=0;ae<=i;ae++){const F=ae/i*a+l,oe=Math.cos(F),se=Math.sin(F);M.x=U*se,M.y=m*k,M.z=U*oe,d.push(M.x,M.y,M.z),f.push(0,k,0),P.x=oe*.5+.5,P.y=se*.5*k+.5,u.push(P.x,P.y),p++}for(let ae=0;ae<i;ae++){const ee=I+ae,F=j+ae;T===!0?h.push(F,F+1,ee):h.push(F+1,F,ee),w+=3}c.addGroup(g,w,T===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gn extends tt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new gn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class va extends en{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),c(n),h(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(S){const E=new V,T=new V,I=new V;for(let P=0;P<t.length;P+=3)u(t[P+0],E),u(t[P+1],T),u(t[P+2],I),a(E,T,I,S)}function a(S,E,T,I){const P=I+1,M=[];for(let w=0;w<=P;w++){M[w]=[];const U=S.clone().lerp(T,w/P),k=E.clone().lerp(T,w/P),j=P-w;for(let ae=0;ae<=j;ae++)ae===0&&w===P?M[w][ae]=U:M[w][ae]=U.clone().lerp(k,ae/j)}for(let w=0;w<P;w++)for(let U=0;U<2*(P-w)-1;U++){const k=Math.floor(U/2);U%2===0?(f(M[w][k+1]),f(M[w+1][k]),f(M[w][k])):(f(M[w][k+1]),f(M[w+1][k+1]),f(M[w+1][k]))}}function c(S){const E=new V;for(let T=0;T<r.length;T+=3)E.x=r[T+0],E.y=r[T+1],E.z=r[T+2],E.normalize().multiplyScalar(S),r[T+0]=E.x,r[T+1]=E.y,r[T+2]=E.z}function h(){const S=new V;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const T=m(S)/2/Math.PI+.5,I=g(S)/Math.PI+.5;o.push(T,1-I)}p(),d()}function d(){for(let S=0;S<o.length;S+=6){const E=o[S+0],T=o[S+2],I=o[S+4],P=Math.max(E,T,I),M=Math.min(E,T,I);P>.9&&M<.1&&(E<.2&&(o[S+0]+=1),T<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function u(S,E){const T=S*3;E.x=e[T+0],E.y=e[T+1],E.z=e[T+2]}function p(){const S=new V,E=new V,T=new V,I=new V,P=new Ue,M=new Ue,w=new Ue;for(let U=0,k=0;U<r.length;U+=9,k+=6){S.set(r[U+0],r[U+1],r[U+2]),E.set(r[U+3],r[U+4],r[U+5]),T.set(r[U+6],r[U+7],r[U+8]),P.set(o[k+0],o[k+1]),M.set(o[k+2],o[k+3]),w.set(o[k+4],o[k+5]),I.copy(S).add(E).add(T).divideScalar(3);const j=m(I);_(P,k+0,S,j),_(M,k+2,E,j),_(w,k+4,T,j)}}function _(S,E,T,I){I<0&&S.x===1&&(o[E]=S.x-1),T.x===0&&T.z===0&&(o[E]=I/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.vertices,e.indices,e.radius,e.detail)}}class Mi extends va{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mi(e.radius,e.detail)}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(i=Math.floor(l+(a-l)/2),c=n[i]-o,c<0)l=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),l=this.getPoint(r),a=t||(o.isVector2?new Ue:new V);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new V,i=[],r=[],o=[],l=new V,a=new Rt;for(let u=0;u<=e;u++){const p=u/e;i[u]=this.getTangentAt(p,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),l.crossVectors(i[u-1],i[u]),l.length()>Number.EPSILON){l.normalize();const p=Math.acos(Bt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(l,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(Bt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(a.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Fc extends Ai{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Ue){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=a-this.aX,u=c-this.aY;a=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(a,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yp extends Fc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let s=0,e=0,t=0,n=0;function i(r,o,l,a){s=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){i(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,h,d){let f=(o-r)/c-(l-r)/(c+h)+(l-o)/h,u=(l-o)/h-(a-o)/(h+d)+(a-l)/d;f*=h,u*=h,i(o,l,f,u)},calc:function(r){const o=r*r,l=o*r;return s+e*r+t*o+n*l}}}const Vh=new V,Wh=new V,nl=new Bc,il=new Bc,sl=new Bc;class Kp extends Ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,h;this.closed||l>0?c=i[(l-1)%r]:(Wh.subVectors(i[0],i[1]).add(i[0]),c=Wh);const d=i[l%r],f=i[(l+1)%r];if(this.closed||l+2<r?h=i[(l+2)%r]:(Vh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Vh),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),nl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),il.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),sl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),il.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(nl.calc(a),il.calc(a),sl.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new V().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,l=s*s,a=s*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*s+t}function Zp(s,e){const t=1-s;return t*t*e}function Jp(s,e){return 2*(1-s)*s*e}function $p(s,e){return s*s*e}function Lr(s,e,t,n){return Zp(s,e)+Jp(s,t)+$p(s,n)}function Qp(s,e){const t=1-s;return t*t*t*e}function jp(s,e){const t=1-s;return 3*t*t*s*e}function e0(s,e){return 3*(1-s)*s*s*e}function t0(s,e){return s*s*s*e}function Dr(s,e,t,n,i){return Qp(s,e)+jp(s,t)+e0(s,n)+t0(s,i)}class Cd extends Ai{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ue){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Dr(e,i.x,r.x,o.x,l.x),Dr(e,i.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class n0 extends Ai{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Dr(e,i.x,r.x,o.x,l.x),Dr(e,i.y,r.y,o.y,l.y),Dr(e,i.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pd extends Ai{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i0 extends Ai{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ld extends Ai{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,i.x,r.x,o.x),Lr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s0 extends Ai{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,i.x,r.x,o.x),Lr(e,i.y,r.y,o.y),Lr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),l=r-o,a=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Xh(l,a.x,c.x,h.x,d.x),Xh(l,a.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ue().fromArray(i))}return this}}var nc=Object.freeze({__proto__:null,ArcCurve:Yp,CatmullRomCurve3:Kp,CubicBezierCurve:Cd,CubicBezierCurve3:n0,EllipseCurve:Fc,LineCurve:Pd,LineCurve3:i0,QuadraticBezierCurve:Ld,QuadraticBezierCurve3:s0,SplineCurve:Dd});class r0 extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let c=0;c<a.length;c++){const h=a[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new nc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class qh extends r0{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Pd(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ld(this.currentPoint.clone(),new Ue(e,t),new Ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const l=new Cd(this.currentPoint.clone(),new Ue(e,t),new Ue(n,i),new Ue(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,l,a){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,l,a),this}absellipse(e,t,n,i,r,o,l,a){const c=new Fc(e,t,n,i,r,o,l,a);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yr extends qh{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new qh().fromJSON(i))}return this}}function o0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Id(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let l,a,c;if(n&&(r=u0(s,e,r,t)),s.length>80*t){l=s[0],a=s[1];let h=l,d=a;for(let f=t;f<i;f+=t){const u=s[f],p=s[f+1];u<l&&(l=u),p<a&&(a=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-l,d-a),c=c!==0?32767/c:0}return Kr(r,o,t,l,a,c,0),o}function Id(s,e,t,n,i){let r;if(i===S0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Yh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Yh(o/n|0,s[o],s[o+1],r);return r&&Ys(r,r.next)&&(Jr(r),r=r.next),r}function ds(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ys(t,t.next)||un(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&g0(s,n,i,r);let l=s;for(;s.prev!==s.next;){const a=s.prev,c=s.next;if(r?l0(s,n,i,r):a0(s)){e.push(a.i,s.i,c.i),Jr(s),s=c.next,l=c.next;continue}if(s=c,s===l){o?o===1?(s=c0(ds(s),e),Kr(s,e,t,n,i,r,2)):o===2&&h0(s,e,t,n,i,r):Kr(ds(s),e,t,n,i,r,1);break}}}function a0(s){const e=s.prev,t=s,n=s.next;if(un(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,l=e.y,a=t.y,c=n.y,h=Math.min(i,r,o),d=Math.min(l,a,c),f=Math.max(i,r,o),u=Math.max(l,a,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&br(i,l,r,a,o,c,p.x,p.y)&&un(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function l0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(un(i,r,o)>=0)return!1;const l=i.x,a=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(l,a,c),p=Math.min(h,d,f),_=Math.max(l,a,c),m=Math.max(h,d,f),g=ic(u,p,e,t,n),S=ic(_,m,e,t,n);let E=s.prevZ,T=s.nextZ;for(;E&&E.z>=g&&T&&T.z<=S;){if(E.x>=u&&E.x<=_&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&br(l,h,a,d,c,f,E.x,E.y)&&un(E.prev,E,E.next)>=0||(E=E.prevZ,T.x>=u&&T.x<=_&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&br(l,h,a,d,c,f,T.x,T.y)&&un(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;E&&E.z>=g;){if(E.x>=u&&E.x<=_&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&br(l,h,a,d,c,f,E.x,E.y)&&un(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;T&&T.z<=S;){if(T.x>=u&&T.x<=_&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&br(l,h,a,d,c,f,T.x,T.y)&&un(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function c0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ys(n,i)&&Ud(n,t,t.next,i)&&Zr(n,i)&&Zr(i,n)&&(e.push(n.i,t.i,i.i),Jr(t),Jr(t.next),t=s=i),t=t.next}while(t!==s);return ds(t)}function h0(s,e,t,n,i,r){let o=s;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&v0(o,l)){let a=Od(o,l);o=ds(o,o.next),a=ds(a,a.next),Kr(o,e,t,n,i,r,0),Kr(a,e,t,n,i,r,0);return}l=l.next}o=o.next}while(o!==s)}function u0(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const l=e[r]*n,a=r<o-1?e[r+1]*n:s.length,c=Id(s,l,a,n,!1);c===c.next&&(c.steiner=!0),i.push(x0(c))}i.sort(d0);for(let r=0;r<i.length;r++)t=f0(i[r],t);return t}function d0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function f0(s,e){const t=p0(s,e);if(!t)return e;const n=Od(t,s);return ds(n,n.next),ds(t,t.next)}function p0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Ys(s,t))return t;do{if(Ys(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const l=o,a=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&Nd(i<c?n:r,i,a,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Zr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&m0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function m0(s,e){return un(s.prev,s,e.prev)<0&&un(e.next,s,s.next)<0}function g0(s,e,t,n){let i=s;do i.z===0&&(i.z=ic(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_0(i)}function _0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let c=0;c<t&&(l++,o=o.nextZ,!!o);c++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,l--):(i=o,o=o.nextZ,a--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ic(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function x0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Nd(s,e,t,n,i,r,o,l){return(i-o)*(e-l)>=(s-o)*(r-l)&&(s-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(i-o)*(n-l)}function br(s,e,t,n,i,r,o,l){return!(s===o&&e===l)&&Nd(s,e,t,n,i,r,o,l)}function v0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!M0(s,e)&&(Zr(s,e)&&Zr(e,s)&&y0(s,e)&&(un(s.prev,s,e.prev)||un(s,e.prev,e))||Ys(s,e)&&un(s.prev,s,s.next)>0&&un(e.prev,e,e.next)>0)}function un(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ys(s,e){return s.x===e.x&&s.y===e.y}function Ud(s,e,t,n){const i=Lo(un(s,e,t)),r=Lo(un(s,e,n)),o=Lo(un(t,n,s)),l=Lo(un(t,n,e));return!!(i!==r&&o!==l||i===0&&Po(s,t,e)||r===0&&Po(s,n,e)||o===0&&Po(t,s,n)||l===0&&Po(t,e,n))}function Po(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Lo(s){return s>0?1:s<0?-1:0}function M0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zr(s,e){return un(s.prev,s,s.next)<0?un(s,e,s.next)>=0&&un(s,s.prev,e)>=0:un(s,e,s.prev)<0||un(s,s.next,e)<0}function y0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Od(s,e){const t=sc(s.i,s.x,s.y),n=sc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yh(s,e,t,n){const i=sc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function S0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class b0{static triangulate(e,t,n=2){return o0(e,t,n)}}class Bi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Bi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Kh(e),Zh(n,e);let o=e.length;t.forEach(Kh);for(let a=0;a<t.length;a++)i.push(o),o+=t[a].length,Zh(n,t[a]);const l=b0.triangulate(n,i);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}}function Kh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Zh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class aa extends en{constructor(e=new Yr([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let l=0,a=e.length;l<a;l++){const c=e[l];o(c)}this.setAttribute("position",new At(i,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function o(l){const a=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:w0;let E,T=!1,I,P,M,w;if(g){E=g.getSpacedPoints(h),T=!0,f=!1;const Re=g.isCatmullRomCurve3?g.closed:!1;I=g.computeFrenetFrames(h,Re),P=new V,M=new V,w=new V}f||(m=0,u=0,p=0,_=0);const U=l.extractPoints(c);let k=U.shape;const j=U.holes;if(!Bi.isClockWise(k)){k=k.reverse();for(let Re=0,Ne=j.length;Re<Ne;Re++){const Je=j[Re];Bi.isClockWise(Je)&&(j[Re]=Je.reverse())}}function ee(Re){const Je=10000000000000001e-36;let et=Re[0];for(let je=1;je<=Re.length;je++){const wt=je%Re.length,lt=Re[wt],Oe=lt.x-et.x,Fe=lt.y-et.y,Ge=Oe*Oe+Fe*Fe,D=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(et.x),Math.abs(et.y)),Ze=Je*D*D;if(Ge<=Ze){Re.splice(wt,1),je--;continue}et=lt}}ee(k),j.forEach(ee);const F=j.length,oe=k;for(let Re=0;Re<F;Re++){const Ne=j[Re];k=k.concat(Ne)}function se(Re,Ne,Je){return Ne||Ct("ExtrudeGeometry: vec does not exist"),Re.clone().addScaledVector(Ne,Je)}const X=k.length;function te(Re,Ne,Je){let et,je,wt;const lt=Re.x-Ne.x,Oe=Re.y-Ne.y,Fe=Je.x-Re.x,Ge=Je.y-Re.y,D=lt*lt+Oe*Oe,Ze=lt*Ge-Oe*Fe;if(Math.abs(Ze)>Number.EPSILON){const Ye=Math.sqrt(D),Ve=Math.sqrt(Fe*Fe+Ge*Ge),Pe=Ne.x-Oe/Ye,$e=Ne.y+lt/Ye,ye=Je.x-Ge/Ve,ue=Je.y+Fe/Ve,L=((ye-Pe)*Ge-(ue-$e)*Fe)/(lt*Ge-Oe*Fe);et=Pe+lt*L-Re.x,je=$e+Oe*L-Re.y;const b=et*et+je*je;if(b<=2)return new Ue(et,je);wt=Math.sqrt(b/2)}else{let Ye=!1;lt>Number.EPSILON?Fe>Number.EPSILON&&(Ye=!0):lt<-Number.EPSILON?Fe<-Number.EPSILON&&(Ye=!0):Math.sign(Oe)===Math.sign(Ge)&&(Ye=!0),Ye?(et=-Oe,je=lt,wt=Math.sqrt(D)):(et=lt,je=Oe,wt=Math.sqrt(D/2))}return new Ue(et/wt,je/wt)}const le=[];for(let Re=0,Ne=oe.length,Je=Ne-1,et=Re+1;Re<Ne;Re++,Je++,et++)Je===Ne&&(Je=0),et===Ne&&(et=0),le[Re]=te(oe[Re],oe[Je],oe[et]);const fe=[];let Te,Ke=le.concat();for(let Re=0,Ne=F;Re<Ne;Re++){const Je=j[Re];Te=[];for(let et=0,je=Je.length,wt=je-1,lt=et+1;et<je;et++,wt++,lt++)wt===je&&(wt=0),lt===je&&(lt=0),Te[et]=te(Je[et],Je[wt],Je[lt]);fe.push(Te),Ke=Ke.concat(Te)}let rt;if(m===0)rt=Bi.triangulateShape(oe,j);else{const Re=[],Ne=[];for(let Je=0;Je<m;Je++){const et=Je/m,je=u*Math.cos(et*Math.PI/2),wt=p*Math.sin(et*Math.PI/2)+_;for(let lt=0,Oe=oe.length;lt<Oe;lt++){const Fe=se(oe[lt],le[lt],wt);ut(Fe.x,Fe.y,-je),et===0&&Re.push(Fe)}for(let lt=0,Oe=F;lt<Oe;lt++){const Fe=j[lt];Te=fe[lt];const Ge=[];for(let D=0,Ze=Fe.length;D<Ze;D++){const Ye=se(Fe[D],Te[D],wt);ut(Ye.x,Ye.y,-je),et===0&&Ge.push(Ye)}et===0&&Ne.push(Ge)}}rt=Bi.triangulateShape(Re,Ne)}const me=rt.length,We=p+_;for(let Re=0;Re<X;Re++){const Ne=f?se(k[Re],Ke[Re],We):k[Re];T?(M.copy(I.normals[0]).multiplyScalar(Ne.x),P.copy(I.binormals[0]).multiplyScalar(Ne.y),w.copy(E[0]).add(M).add(P),ut(w.x,w.y,w.z)):ut(Ne.x,Ne.y,0)}for(let Re=1;Re<=h;Re++)for(let Ne=0;Ne<X;Ne++){const Je=f?se(k[Ne],Ke[Ne],We):k[Ne];T?(M.copy(I.normals[Re]).multiplyScalar(Je.x),P.copy(I.binormals[Re]).multiplyScalar(Je.y),w.copy(E[Re]).add(M).add(P),ut(w.x,w.y,w.z)):ut(Je.x,Je.y,d/h*Re)}for(let Re=m-1;Re>=0;Re--){const Ne=Re/m,Je=u*Math.cos(Ne*Math.PI/2),et=p*Math.sin(Ne*Math.PI/2)+_;for(let je=0,wt=oe.length;je<wt;je++){const lt=se(oe[je],le[je],et);ut(lt.x,lt.y,d+Je)}for(let je=0,wt=j.length;je<wt;je++){const lt=j[je];Te=fe[je];for(let Oe=0,Fe=lt.length;Oe<Fe;Oe++){const Ge=se(lt[Oe],Te[Oe],et);T?ut(Ge.x,Ge.y+E[h-1].y,E[h-1].x+Je):ut(Ge.x,Ge.y,d+Je)}}}nt(),ct();function nt(){const Re=i.length/3;if(f){let Ne=0,Je=X*Ne;for(let et=0;et<me;et++){const je=rt[et];Ut(je[2]+Je,je[1]+Je,je[0]+Je)}Ne=h+m*2,Je=X*Ne;for(let et=0;et<me;et++){const je=rt[et];Ut(je[0]+Je,je[1]+Je,je[2]+Je)}}else{for(let Ne=0;Ne<me;Ne++){const Je=rt[Ne];Ut(Je[2],Je[1],Je[0])}for(let Ne=0;Ne<me;Ne++){const Je=rt[Ne];Ut(Je[0]+X*h,Je[1]+X*h,Je[2]+X*h)}}n.addGroup(Re,i.length/3-Re,0)}function ct(){const Re=i.length/3;let Ne=0;Xe(oe,Ne),Ne+=oe.length;for(let Je=0,et=j.length;Je<et;Je++){const je=j[Je];Xe(je,Ne),Ne+=je.length}n.addGroup(Re,i.length/3-Re,1)}function Xe(Re,Ne){let Je=Re.length;for(;--Je>=0;){const et=Je;let je=Je-1;je<0&&(je=Re.length-1);for(let wt=0,lt=h+m*2;wt<lt;wt++){const Oe=X*wt,Fe=X*(wt+1),Ge=Ne+et+Oe,D=Ne+je+Oe,Ze=Ne+je+Fe,Ye=Ne+et+Fe;at(Ge,D,Ze,Ye)}}}function ut(Re,Ne,Je){a.push(Re),a.push(Ne),a.push(Je)}function Ut(Re,Ne,Je){bt(Re),bt(Ne),bt(Je);const et=i.length/3,je=S.generateTopUV(n,i,et-3,et-2,et-1);it(je[0]),it(je[1]),it(je[2])}function at(Re,Ne,Je,et){bt(Re),bt(Ne),bt(et),bt(Ne),bt(Je),bt(et);const je=i.length/3,wt=S.generateSideWallUV(n,i,je-6,je-3,je-2,je-1);it(wt[0]),it(wt[1]),it(wt[3]),it(wt[1]),it(wt[2]),it(wt[3])}function bt(Re){i.push(a[Re*3+0]),i.push(a[Re*3+1]),i.push(a[Re*3+2])}function it(Re){r.push(Re.x),r.push(Re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return T0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new nc[i.type]().fromJSON(i)),new aa(n,e.options)}}const w0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],l=e[n*3],a=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Ue(r,o),new Ue(l,a),new Ue(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],l=e[t*3+1],a=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(l-h)<Math.abs(o-c)?[new Ue(o,1-a),new Ue(c,1-d),new Ue(f,1-p),new Ue(_,1-g)]:[new Ue(l,1-a),new Ue(h,1-d),new Ue(u,1-p),new Ue(m,1-g)]}};function T0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class kc extends en{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Bt(i,0,Math.PI*2);const r=[],o=[],l=[],a=[],c=[],h=1/t,d=new V,f=new Ue,u=new V,p=new V,_=new V;let m=0,g=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,u.x=g*1,u.y=-m,u.z=g*0,_.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:_.normalize(),a.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),a.push(u.x,u.y,u.z),_.copy(p)}for(let S=0;S<=t;S++){const E=n+S*h*i,T=Math.sin(E),I=Math.cos(E);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*T,d.y=e[P].y,d.z=e[P].x*I,o.push(d.x,d.y,d.z),f.x=S/t,f.y=P/(e.length-1),l.push(f.x,f.y);const M=a[3*P+0]*T,w=a[3*P+1],U=a[3*P+0]*I;c.push(M,w,U)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){const T=E+S*e.length,I=T,P=T+e.length,M=T+e.length+1,w=T+1;r.push(I,P,w),r.push(M,w,P)}this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("uv",new At(l,2)),this.setAttribute("normal",new At(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.points,e.segments,e.phiStart,e.phiLength)}}class zc extends va{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zc(e.radius,e.detail)}}class qt extends en{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(i),c=l+1,h=a+1,d=e/l,f=t/a,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const S=g*f-o;for(let E=0;E<c;E++){const T=E*d-r;p.push(T,-S,0),_.push(0,0,1),m.push(E/l),m.push(1-g/a)}}for(let g=0;g<a;g++)for(let S=0;S<l;S++){const E=S+c*g,T=S+c*(g+1),I=S+1+c*(g+1),P=S+1+c*g;u.push(E,T,P),u.push(T,I,P)}this.setIndex(u),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hc extends en{constructor(e=new Yr([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let l=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new At(i,3)),this.setAttribute("normal",new At(r,3)),this.setAttribute("uv",new At(o,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const p=f.holes;Bi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const S=p[m];Bi.isClockWise(S)===!0&&(p[m]=S.reverse())}const _=Bi.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const S=p[m];u=u.concat(S)}for(let m=0,g=u.length;m<g;m++){const S=u[m];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,g=_.length;m<g;m++){const S=_[m],E=S[0]+d,T=S[1]+d,I=S[2]+d;n.push(E,T,I),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return E0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Hc(n,e.curveSegments)}}function E0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Xt extends en{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(o+l,Math.PI);let c=0;const h=[],d=new V,f=new V,u=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const S=[],E=g/n,T=o+E*l,I=e*Math.cos(T),P=Math.sqrt(e*e-I*I);let M=0;g===0&&o===0?M=.5/t:g===n&&a===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const U=w/t,k=i+U*r;d.x=-P*Math.cos(k),d.y=I,d.z=P*Math.sin(k),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(U+M,1-E),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const E=h[g][S+1],T=h[g][S],I=h[g+1][S],P=h[g+1][S+1];(g!==0||o>0)&&u.push(E,T,P),(g!==n-1||a<Math.PI)&&u.push(T,I,P)}this.setIndex(u),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends en{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],h=[],d=[],f=new V,u=new V,p=new V;for(let _=0;_<=n;_++){const m=o+_/n*l;for(let g=0;g<=i;g++){const S=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(S),u.y=(e+t*Math.cos(m))*Math.sin(S),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,E=(i+1)*(_-1)+m,T=(i+1)*_+m;a.push(g,S,T),a.push(S,E,T)}this.setIndex(a),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Jh(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Jh(i[0])){const r=[];for(let o=0,l=i.length;o<l;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const n=Ks(s[t]);for(const i in n)e[i]=n[i]}return e}function Jh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function A0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const $r={clone:Ks,merge:kn};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new _t().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new sn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new It().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bd extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zs extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends Zs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qo extends Jn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class P0 extends Jn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class L0 extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D0 extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ji(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function wr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function I0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $h(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let a=0;a!==e;++a)i[o++]=s[l+a]}return i}function N0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Qs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class U0 extends Qs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,l=i[r],a=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,l=2*t-n;break;case jo:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Fs:o=e,a=2*n-t;break;case jo:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,E=(-1-u)*m+(1.5+u)*_+.5*p,T=u*m-u*_;for(let I=0;I!==l;++I)r[I]=g*o[h+I]+S*o[c+I]+E*o[a+I]+T*o[d+I];return r}}class kd extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==l;++f)r[f]=o[c+f]*d+o[a+f]*h;return r}}class O0 extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class F0 extends Qs{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),_=1-p;for(let m=0;m!==l;++m)r[m]=o[c+m]*_+o[a+m]*p;return r}const f=l*2,u=e-1;for(let p=0;p!==l;++p){const _=o[c+p],m=o[a+p],g=u*f+p*2,S=d[g],E=d[g+1],T=e*f+p*2,I=h[T],P=h[T+1],M=k0(n,t,S,I,i);r[p]=zd(M,_,E,P,m)}return r}}function zd(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function B0(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function k0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const l=zd(r,e,t,n,i)-s;if(Math.abs(l)<1e-10)break;const a=B0(r,e,t,n,i);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),wr(e.settings)&&(n.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new O0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new U0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new F0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;wr(this.settings)&&(Qh(this.settings.inTangents,e),Qh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;wr(this.settings)&&(jh(this.settings.inTangents,e),jh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const a=n[l];if(typeof a=="number"&&isNaN(a)){Ct("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){Ct("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(i!==void 0&&ep(i))for(let l=0,a=i.length;l!==a;++l){const c=i[l];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,r=e.length-1;let o=1;for(let l=1;l<r;++l){let a=!1;const c=e[l],h=e[l+1];if(c!==h&&(l!==1||c!==e[0]))if(i)a=!0;else{const d=l*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const _=t[d+p];if(_!==t[f+p]||_!==t[u+p]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];const d=l*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[l+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,wr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Qh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function jh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=zr;class js extends pi{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=kr;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Hd extends pi{constructor(e,t,n,i){super(e,t,n,i)}}Hd.prototype.ValueTypeName="color";class Qr extends pi{constructor(e,t,n,i){super(e,t,n,i)}}Qr.prototype.ValueTypeName="number";class z0 extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(i-t);let c=e*l;for(let h=c+l;c!==h;c+=4)cn.slerpFlat(r,0,o,c-l,o,c,a);return r}}class jr extends pi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new z0(this.times,this.values,this.getValueSize(),e)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends pi{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=kr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class la extends pi{constructor(e,t,n,i){super(e,t,n,i)}}la.prototype.ValueTypeName="vector";class rc{constructor(e="",t=-1,n=[],i=Ac){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(G0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(pi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let l=0;l<r;l++){let a=[],c=[];a.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);const h=I0(a);a=$h(a,1,h),c=$h(c,1,h),!i&&a[0]===0&&(a.push(r),c.push(c[0])),o.push(new Qr(".morphTargetInfluences["+t[l].name+"]",a,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,a=e.length;l<a;l++){const c=e[l],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function H0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qr;case"vector":case"vector2":case"vector3":case"vector4":return la;case"color":return Hd;case"quaternion":return jr;case"bool":case"boolean":return js;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function G0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=H0(s.type);if(s.times===void 0){const n=[],i=[];N0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),wr(s.settings)&&(t.settings={inTangents:Ji(s.settings.inTangents,Float32Array),outTangents:Ji(s.settings.outTangents,Float32Array)}),t}const ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(eu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!eu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function eu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Gd{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const V0=new Gd;class tr{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class W0 extends Error{constructor(e,t){super(e),this.response=t}}class Vd extends tr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:i});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,a=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ii[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let _=0;const m=new ReadableStream({start(g){S();function S(){d.read().then(({done:E,value:T})=>{if(E)g.close();else{_+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:u});for(let P=0,M=h.length;P<M;P++){const w=h[P];w.onProgress&&w.onProgress(I)}g.enqueue(T),S()}},E=>{g.error(E)})}}});return new Response(m)}else throw new W0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return c.json();default:if(l==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{ki.add(`file:${e}`,c);const h=Ii[e];delete Ii[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=Ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class X0 extends tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ls.get(o);d===void 0&&(d=[],Ls.set(o,d)),d.push({onLoad:t,onError:i})}return o}const l=Vr("img");function a(){h(),t&&t(this);const d=Ls.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),ki.remove(`image:${e}`);const f=Ls.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),ki.add(`image:${e}`,l),r.manager.itemStart(e),l.fetchPriority=this.priority,l.src=e,l}}class q0 extends tr{constructor(e){super(e)}load(e,t,n,i){const r=new Sn,o=new X0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ma extends an{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Y0 extends Ma{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rl=new Rt,tu=new V,nu=new V;class Gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,l=i?i.w/r.y:1,a=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Gr||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Do=new V,Io=new cn,gi=new V;class Wd extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Io,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Io,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Do,Io,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Io,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new V,iu=new Ue,su=new Ue;class Wn extends Wd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,iu,su),t.subVectors(su,iu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class K0 extends Gc{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Z0 extends Ma{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new K0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class J0 extends Gc{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0}}class zi extends Ma{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ya extends Wd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $0 extends Gc{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xd extends Ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new $0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ol=new WeakMap;class Q0 extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ol.has(o)===!0?(i&&i(ol.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const l={};l.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",l.headers=this.requestHeader,l.priority=this.priority,l.cache=this.cache,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const a=fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ol.set(a,c),ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ds=-90,Is=1;class oc extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wn(Ds,Is,e,t);i.layers=this.layers,this.add(i);const r=new Wn(Ds,Is,e,t);r.layers=this.layers,this.add(r);const o=new Wn(Ds,Is,e,t);o.layers=this.layers,this.add(o);const l=new Wn(Ds,Is,e,t);l.layers=this.layers,this.add(l);const a=new Wn(Ds,Is,e,t);a.layers=this.layers,this.add(a);const c=new Wn(Ds,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,a]=t;for(const c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,a,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class j0 extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class em{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=tm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function tm(){this._document.hidden===!1&&this.reset()}class nm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let l=0;l!==i;++l)n[r+l]=n[l];o=t}else{o+=t;const l=t/o;this._mixBufferRegion(n,r,0,l,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){l.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){cn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;cn.multiplyQuaternionsFlat(e,o,e,t,e,n),cn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let l=0;l!==r;++l){const a=t+l;e[a]=e[a]*o+e[n+l]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]+e[n+o]*i}}}const Vc="\\[\\]\\.:\\/",im=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",sm="[^"+Vc.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",Wc),om=/(WCOD+)?/.source.replace("WCOD",sm),am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),cm=new RegExp("^"+rm+om+am+lm+"$"),hm=["material","materials","bones","map"];class um{constructor(e,t,n){const i=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class jt{constructor(e,t,n){this.path=t,this.parsedPath=n||jt.parseTrackName(t),this.node=jt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new jt.Composite(e,t,n):new jt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(im,"")}static parseTrackName(e){const t=cm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const a=n(l.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=jt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ct("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}jt.Composite=um;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,l=new Array(o),a={endingStart:Os,endingEnd:Os};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);l[c]=h,h.settings=a}this._interpolantSettings=a,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Hf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,l=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=i._lendControlInterpolant(),this._timeScaleInterpolant=l);const a=l.parameterPositions,c=l.sampleValues;return a[0]=r,a[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const a=(e-r)*n;a<0||n===0?t=0:(this._startTime=null,t=n*a)}t*=this._updateTimeScale(e);const o=this._updateTime(t),l=this._updateWeight(e);if(l>0){const a=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Vf:for(let h=0,d=a.length;h!==d;++h)a[h].evaluate(o),c[h].accumulateAdditive(l);break;case Ac:default:for(let h=0,d=a.length;h!==d;++h)a[h].evaluate(o),c[h].accumulate(i,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Gf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===zf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const l=Math.floor(i/t);i-=t*l,r+=Math.abs(l);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Fs,i.endingEnd=Fs):(e?i.endingStart=this.zeroSlopeAtStart?Fs:Os:i.endingStart=jo,t?i.endingEnd=this.zeroSlopeAtEnd?Fs:Os:i.endingEnd=jo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const l=o.parameterPositions,a=o.sampleValues;return l[0]=r,a[0]=t,l[1]=r+e,a[1]=n,this}}const fm=new Float32Array(1);class pm extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,l=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let h=c[a];h===void 0&&(h={},c[a]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,a,u));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;p=new nm(jt.create(n,u,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,a,u),o[d]=p}l[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,l=o[r],a=l.knownActions,c=a[a.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,a[h]=c,a.pop(),e._byClipCacheIndex=null;const d=l.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],a.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new kd(new Float32Array(2),new Float32Array(2),1,fm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?rc.findByName(i,e):e;const l=o!==null?o.uuid:e,a=this._actionsByClip[l];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ac),a!==void 0){const d=a.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=a.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new dm(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,l,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?rc.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const l=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)l[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let l=0,a=o.length;l!==a;++l){const c=o[l];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const l=n[o].actionByRoot,a=l[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const ru=new Rt;class mm{constructor(e,t,n=0,i=1/0){this.ray=new $s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(e,t=!0,n=[]){return ac(e,this,n,t),n.sort(ou),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ac(e[i],this,n,t);return n.sort(ou),n}}function ou(s,e){return s.distance-e.distance}function ac(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,l=r.length;o<l;o++)ac(r[o],e,t,!0)}}class au{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gm extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lu(s,e,t,n){const i=_m(n);switch(t){case cd:return s*e;case ga:return s*e/i.components*i.byteLength;case wc:return s*e/i.components*i.byteLength;case hs:return s*e*2/i.components*i.byteLength;case Tc:return s*e*2/i.components*i.byteLength;case hd:return s*e*3/i.components*i.byteLength;case ci:return s*e*4/i.components*i.byteLength;case Ec:return s*e*4/i.components*i.byteLength;case Go:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wl:case El:return Math.max(s,16)*Math.max(e,8)/4;case bl:case Tl:return Math.max(s,8)*Math.max(e,8)/2;case Al:case Rl:case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case $o:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Kl:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jl:case $l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qo:case Ql:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _m(s){switch(s){case Zn:case rd:return{byteLength:1,components:1};case Br:case od:case Un:return{byteLength:2,components:1};case Sc:case bc:return{byteLength:2,components:4};case ui:case yc:case ni:return{byteLength:4,components:1};case ad:case ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qd(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function xm(s){const e=new WeakMap;function t(l,a){const c=l.array,h=l.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(a,f),s.bufferData(a,c,h),l.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,a,c){const h=a.array,d=a.updateRanges;if(s.bindBuffer(c,l),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(s.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:i,remove:r,update:o}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`#ifdef USE_BATCHING
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
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gm=`#define PI 3.141592653589793
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
} // validated`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
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
}`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hg=`#ifdef USE_ENVMAP
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
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,gg=`uniform sampler2D dfgLUT;
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
}`,_g=`
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rg=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform float backgroundBlurriness;
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,N_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,O_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,G_=`#define STANDARD
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
}`,V_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,q_=`uniform float size;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,Z_=`uniform vec3 color;
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
}`,J_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:vm,alphahash_pars_fragment:Mm,alphamap_fragment:ym,alphamap_pars_fragment:Sm,alphatest_fragment:bm,alphatest_pars_fragment:wm,aomap_fragment:Tm,aomap_pars_fragment:Em,batching_pars_vertex:Am,batching_vertex:Rm,begin_vertex:Cm,beginnormal_vertex:Pm,bsdfs:Lm,iridescence_fragment:Dm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Nm,clipping_planes_pars_fragment:Um,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Fm,color_fragment:Bm,color_pars_fragment:km,color_pars_vertex:zm,color_vertex:Hm,common:Gm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Km,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Qm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:hg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:og,lights_lambert_fragment:ag,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:ug,lights_toon_pars_fragment:dg,lights_phong_fragment:fg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:_g,lights_fragment_maps:xg,lights_fragment_end:vg,lightprobes_pars_fragment:Mg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:wg,map_fragment:Tg,map_pars_fragment:Eg,map_particle_fragment:Ag,map_particle_pars_fragment:Rg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Lg,morphcolor_vertex:Dg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Ng,morphtarget_vertex:Ug,normal_fragment_begin:Og,normal_fragment_maps:Fg,normal_pars_fragment:Bg,normal_pars_vertex:kg,normal_vertex:zg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:Kg,project_vertex:Zg,dithering_fragment:Jg,dithering_pars_fragment:$g,roughnessmap_fragment:Qg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:x_,background_frag:v_,backgroundCube_vert:M_,backgroundCube_frag:y_,cube_vert:S_,cube_frag:b_,depth_vert:w_,depth_frag:T_,distance_vert:E_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:I_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:O_,meshmatcap_frag:F_,meshnormal_vert:B_,meshnormal_frag:k_,meshphong_vert:z_,meshphong_frag:H_,meshphysical_vert:G_,meshphysical_frag:V_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:K_,shadow_frag:Z_,sprite_vert:J_,sprite_frag:$_},dt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},vi={basic:{uniforms:kn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:kn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:kn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:kn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:kn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:kn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:kn([dt.points,dt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:kn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:kn([dt.common,dt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:kn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:kn([dt.sprite,dt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:kn([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:kn([dt.lights,dt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};vi.physical={uniforms:kn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const No={r:0,b:0,g:0},Q_=new Rt,Yd=new It;Yd.set(-1,0,0,0,1,0,0,0,1);function j_(s,e,t,n,i,r){const o=new _t(0);let l=i===!0?0:1,a,c,h=null,d=0,f=null;function u(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const T=S.backgroundBlurriness>0;E=e.get(E,T)}return E}function p(S){let E=!1;const T=u(S);T===null?m(o,l):T&&T.isColor&&(m(T,1),E=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,E){const T=u(E);T&&T.isCubeTexture?(c===void 0&&(c=new Dt(new Le(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ks(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(E.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yd),c.material.toneMapped=Wt.getTransfer(T.colorSpace)!==Qt,(h!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(a===void 0&&(a=new Dt(new qt(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ks(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=T,a.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,a.material.toneMapped=Wt.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),a.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(a.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),a.layers.enableAll(),S.unshift(a,a.geometry,a.material,0,0,null))}function m(S,E){S.getRGB(No,Fd(s)),t.buffers.color.setClear(No.r,No.g,No.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:p,addToRenderList:_,dispose:g}}function ex(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function l(j,ae,ee,F,oe){let se=!1;const X=d(j,F,ee,ae);r!==X&&(r=X,c(r.object)),se=u(j,F,ee,oe),se&&p(j,F,ee,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,T(j,ae,ee,F),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function a(){return s.createVertexArray()}function c(j){return s.bindVertexArray(j)}function h(j){return s.deleteVertexArray(j)}function d(j,ae,ee,F){const oe=F.wireframe===!0;let se=n[ae.id];se===void 0&&(se={},n[ae.id]=se);const X=j.isInstancedMesh===!0?j.id:0;let te=se[X];te===void 0&&(te={},se[X]=te);let le=te[ee.id];le===void 0&&(le={},te[ee.id]=le);let fe=le[oe];return fe===void 0&&(fe=f(a()),le[oe]=fe),fe}function f(j){const ae=[],ee=[],F=[];for(let oe=0;oe<t;oe++)ae[oe]=0,ee[oe]=0,F[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:ee,attributeDivisors:F,object:j,attributes:{},index:null}}function u(j,ae,ee,F){const oe=r.attributes,se=ae.attributes;let X=0;const te=ee.getAttributes();for(const le in te)if(te[le].location>=0){const Te=oe[le];let Ke=se[le];if(Ke===void 0&&(le==="instanceMatrix"&&j.instanceMatrix&&(Ke=j.instanceMatrix),le==="instanceColor"&&j.instanceColor&&(Ke=j.instanceColor)),Te===void 0||Te.attribute!==Ke||Ke&&Te.data!==Ke.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function p(j,ae,ee,F){const oe={},se=ae.attributes;let X=0;const te=ee.getAttributes();for(const le in te)if(te[le].location>=0){let Te=se[le];Te===void 0&&(le==="instanceMatrix"&&j.instanceMatrix&&(Te=j.instanceMatrix),le==="instanceColor"&&j.instanceColor&&(Te=j.instanceColor));const Ke={};Ke.attribute=Te,Te&&Te.data&&(Ke.data=Te.data),oe[le]=Ke,X++}r.attributes=oe,r.attributesNum=X,r.index=F}function _(){const j=r.newAttributes;for(let ae=0,ee=j.length;ae<ee;ae++)j[ae]=0}function m(j){g(j,0)}function g(j,ae){const ee=r.newAttributes,F=r.enabledAttributes,oe=r.attributeDivisors;ee[j]=1,F[j]===0&&(s.enableVertexAttribArray(j),F[j]=1),oe[j]!==ae&&(s.vertexAttribDivisor(j,ae),oe[j]=ae)}function S(){const j=r.newAttributes,ae=r.enabledAttributes;for(let ee=0,F=ae.length;ee<F;ee++)ae[ee]!==j[ee]&&(s.disableVertexAttribArray(ee),ae[ee]=0)}function E(j,ae,ee,F,oe,se,X){X===!0?s.vertexAttribIPointer(j,ae,ee,oe,se):s.vertexAttribPointer(j,ae,ee,F,oe,se)}function T(j,ae,ee,F){_();const oe=F.attributes,se=ee.getAttributes(),X=ae.defaultAttributeValues;for(const te in se){const le=se[te];if(le.location>=0){let fe=oe[te];if(fe===void 0&&(te==="instanceMatrix"&&j.instanceMatrix&&(fe=j.instanceMatrix),te==="instanceColor"&&j.instanceColor&&(fe=j.instanceColor)),fe!==void 0){const Te=fe.normalized,Ke=fe.itemSize,rt=e.get(fe);if(rt===void 0)continue;const me=rt.buffer,We=rt.type,nt=rt.bytesPerElement,ct=We===s.INT||We===s.UNSIGNED_INT||fe.gpuType===yc;if(fe.isInterleavedBufferAttribute){const Xe=fe.data,ut=Xe.isInterleavedBuffer===!0?Xe.stride:Xe.itemSize,Ut=fe.offset;if(Xe.isInstancedInterleavedBuffer||Xe.isInstancedBufferAttribute){for(let at=0;at<le.locationSize;at++)g(le.location+at,Xe.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let at=0;at<le.locationSize;at++)m(le.location+at);s.bindBuffer(s.ARRAY_BUFFER,me);for(let at=0;at<le.locationSize;at++)E(le.location+at,Ke/le.locationSize,We,Te,ut*nt,(Ut+Ke/le.locationSize*at)*nt,ct)}else{if(fe.isInstancedBufferAttribute){for(let Xe=0;Xe<le.locationSize;Xe++)g(le.location+Xe,fe.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Xe=0;Xe<le.locationSize;Xe++)m(le.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Xe=0;Xe<le.locationSize;Xe++)E(le.location+Xe,Ke/le.locationSize,We,Te,Ke*nt,Ke/le.locationSize*Xe*nt,ct)}}else if(X!==void 0){const Te=X[te];if(Te!==void 0)switch(Te.length){case 2:s.vertexAttrib2fv(le.location,Te);break;case 3:s.vertexAttrib3fv(le.location,Te);break;case 4:s.vertexAttrib4fv(le.location,Te);break;default:s.vertexAttrib1fv(le.location,Te)}}}}S()}function I(){U();for(const j in n){const ae=n[j];for(const ee in ae){const F=ae[ee];for(const oe in F){const se=F[oe];for(const X in se)h(se[X].object),delete se[X];delete F[oe]}}delete n[j]}}function P(j){if(n[j.id]===void 0)return;const ae=n[j.id];for(const ee in ae){const F=ae[ee];for(const oe in F){const se=F[oe];for(const X in se)h(se[X].object),delete se[X];delete F[oe]}}delete n[j.id]}function M(j){for(const ae in n){const ee=n[ae];for(const F in ee){const oe=ee[F];if(oe[j.id]===void 0)continue;const se=oe[j.id];for(const X in se)h(se[X].object),delete se[X];delete oe[j.id]}}}function w(j){for(const ae in n){const ee=n[ae],F=j.isInstancedMesh===!0?j.id:0,oe=ee[F];if(oe!==void 0){for(const se in oe){const X=oe[se];for(const te in X)h(X[te].object),delete X[te];delete oe[se]}delete ee[F],Object.keys(ee).length===0&&delete n[ae]}}}function U(){k(),o=!0,r!==i&&(r=i,c(r.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:U,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function tx(s,e,t){let n;function i(a){n=a}function r(a,c){s.drawArrays(n,a,c),t.update(c,n,1)}function o(a,c,h){h!==0&&(s.drawArraysInstanced(n,a,c,h),t.update(c,n,h))}function l(a,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function nx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==ci&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(M){const w=M===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Zn&&M!==ni&&!w&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function a(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:T,maxSamples:I,samples:P}}function ix(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ui,l=new It,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,E=S*4;let T=g.clippingState||null;a.value=T,T=h(p,f,E,u);for(let I=0;I!==E;++I)T[I]=t[I];g.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=a.value,p!==!0||m===null){const g=u+_*4,S=f.matrixWorldInverse;l.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,T=u;E!==_;++E,T+=4)o.copy(d[E]).applyMatrix4(S,l),o.normal.toArray(m,T),m[T+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}class Xc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ed(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Le(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:ls});r.uniforms.tEquirect.value=t;const o=new Dt(i,r),l=t.minFilter;return t.minFilter===yi&&(t.minFilter=An),new oc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const cu=256,sx=3,rx=20,Kd=256,Zd=16,ox=3,ax=new V,lx=new _t;class ca{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oc(1,10,null),this._boxMesh=new Dt(new Le(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:l=ax}=r,a=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=a.autoClear,f=a.autoClearColor,u=a.autoClearDepth,p=a.autoClearStencil,_=e.background;a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,_===null&&(e.background=a.getClearColor(lx));const m=new oc(n,i,h);return m.position.copy(l),m.update(a,e),a.autoClear=d,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cu,_d(e))}_fromTexture(e,t){e.mapping===Ws||e.mapping===Fr?this._setSize(e.image.length===0?cu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=hu(e,!1,!1),n=Math.log2(e)-sx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ws||e.mapping===Fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cx(),this._integrationMaterial=hx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Zd);for(let o=0;o<=n;o++){const l=ca.lodToRoughness(o,n);if(o>n-ox)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const a=l>0?Math.log2(t)+.5*Math.log2(6/(Kd*Math.pow(l,4)))+.5:0;i.roughness.value=l,i.lodBias.value=a,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ux());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function hu(s,e,t){return new Xc(s,{minFilter:yi,generateMipmaps:e,type:Un,colorSpace:$n,depthBuffer:t})}function to(s,e,t){return new Hn({name:s,uniforms:e,vertexShader:zt.cube_vert,fragmentShader:t,side:Nn,blending:ls,depthTest:!1,depthWrite:!1})}function cx(){return to("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kd}u

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
	`)}function hx(){return to("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zd}},`

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
	`)}function ux(){return to("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rx}
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
	`)}function uu(){return to("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function du(){return to("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Ra||u===Ca)if(e.has(f)){const p=e.get(f).texture;return l(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new Xc(p.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",c),l(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Ra||u===Ca,_=u===Ws||u===Fr;if(p||_){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ca(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new ca(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function l(f,u){return u===Ra?f.mapping=Ws:u===Ca&&(f.mapping=Fr),f}function a(f){let u=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function fx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("WebGLRenderer: "+n+" extension not supported."),i}}}function px(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function l(p){a(p.target)}function a(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",l),delete i[p.id],o.unregister(p);const _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",l),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){const _=p.attributes;for(const m in _)e.update(_[m],s.ARRAY_BUFFER)}function d(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const S=_!==null?_.array.length:m.array.length/3-1,E=m.count>=65535?yd:Md,T=new E(Math.ceil(S/3)*6,1),I=T.array;if(_!==null){const M=_.array;g=_.version;for(let w=0,U=0;w<S;w+=3){const k=M[w+0],j=M[w+1],ae=M[w+2];I[U++]=k,I[U++]=j,I[U++]=j,I[U++]=ae,I[U++]=ae,I[U++]=k}}else{g=m.version;for(let M=0,w=0;M<S;M+=3){const U=M+0,k=M+1,j=M+2;I[w++]=U,I[w++]=k,I[w++]=k,I[w++]=j,I[w++]=j,I[w++]=U}}T.version=g;const P=r.get(p);P&&e.remove(P),r.set(p,T)}function f(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const _=i[p].deref();_!==void 0&&a(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function mx(s,e,t){let n;function i(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function a(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];t.update(_,n,1)}this.setMode=i,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function gx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:Ct("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _x(s,e,t){const n=new WeakMap,i=new sn;function r(o,l,a){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(l);if(f===void 0||f.count!==d){let U=function(){M.dispose(),n.delete(l),l.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();const u=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let E=0;u===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let T=l.attributes.position.count*E,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*I*4*d),M=new xd(P,T,I,d);M.type=ni,M.needsUpdate=!0;const w=E*4;for(let k=0;k<d;k++){const j=m[k],ae=g[k],ee=S[k],F=T*I*4*k;for(let oe=0;oe<j.count;oe++){const se=oe*w;u===!0&&(i.fromBufferAttribute(j,oe),P[F+se+0]=i.x,P[F+se+1]=i.y,P[F+se+2]=i.z,P[F+se+3]=0),p===!0&&(i.fromBufferAttribute(ae,oe),P[F+se+4]=i.x,P[F+se+5]=i.y,P[F+se+6]=i.z,P[F+se+7]=0),_===!0&&(i.fromBufferAttribute(ee,oe),P[F+se+8]=i.x,P[F+se+9]=i.y,P[F+se+10]=i.z,P[F+se+11]=ee.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new Ue(T,I)},n.set(l,f),l.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const p=l.morphTargetsRelative?1:1-u;a.getUniforms().setValue(s,"morphTargetBaseInfluence",p),a.getUniforms().setValue(s,"morphTargetInfluences",c)}a.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),a.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function xx(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function l(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const vx={[mc]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function Mx(s,e,t,n,i,r){const o=new On(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,a=null,c=null;const h=new en;h.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new At([0,2,0,0,2,0],2));const d=new Bd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Dt(h,d),u=new ya(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,S=null,E=[],T=!1;this.setSize=function(I,P){o.setSize(I,P),l!==null&&l.setSize(I,P),a!==null&&a.setSize(I,P);for(let M=0;M<E.length;M++){const w=E[M];w.setSize&&w.setSize(I,P)}},this.setEffects=function(I){E=I,T=E.length>0&&E[0].isRenderPass===!0;const P=o.width,M=o.height;E.length>0&&l===null&&(l=new On(P,M,{type:Un,depthBuffer:!1,stencilBuffer:!1}),a=new On(P,M,{type:Un,depthBuffer:!1,stencilBuffer:!1}));const w=i===!0&&E.some(U=>U.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new us(P,M),r===!0&&(c.format=$i,c.type=Xs)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let U=0;U<E.length;U++){const k=E[U];k.setSize&&k.setSize(P,M),w&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(I,P){if(m||I.toneMapping===Hi&&E.length===0)return!1;if(S=P,P!==null){const M=P.width,w=P.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return T===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=Hi,!0},this.hasRenderPass=function(){return T},this.end=function(I,P){I.toneMapping=g,m=!0;let M=o,w=l;for(let U=0;U<E.length;U++){const k=E[U];k.enabled!==!1&&(k.render(I,w,M,P),k.needsSwap!==!1&&(M=w,w=w===l?a:l))}if(p!==I.outputColorSpace||_!==I.toneMapping){p=I.outputColorSpace,_=I.toneMapping,d.defines={},Wt.getTransfer(p)===Qt&&(d.defines.SRGB_TRANSFER="");const U=vx[_];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,I.setRenderTarget(S),I.render(f,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),h.dispose(),d.dispose()}}const Jd=new Sn,$d=new us(1,1),Qd=new Ad(1),jd=new xd,ef=new wp,tf=new Ed,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function nr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=fu[i];if(r===void 0&&(r=new Float32Array(i),fu[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sa(s,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function Tx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;_u.set(n),s.uniformMatrix2fv(this.addr,!1,_u),wn(t,n)}}function Ex(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;gu.set(n),s.uniformMatrix3fv(this.addr,!1,gu),wn(t,n)}}function Ax(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;mu.set(n),s.uniformMatrix4fv(this.addr,!1,mu),wn(t,n)}}function Rx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function Px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function Lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Dx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function Ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function ba(s){return s.version===0&&(s.compareFunction=pd,s.needsUpdate=!0),s}function Ox(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ba($d):r=Jd,t.setTexture2D(e||r,i)}function Fx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ef,i)}function Bx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ba(Qd):r=tf,t.setTextureCube(e||r,i)}function kx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jd,i)}function zx(s){switch(s){case 5126:return yx;case 35664:return Sx;case 35665:return bx;case 35666:return wx;case 35674:return Tx;case 35675:return Ex;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Ix;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return kx}}function Hx(s,e){s.uniform1fv(this.addr,e)}function Gx(s,e){const t=nr(e,this.size,2);s.uniform2fv(this.addr,t)}function Vx(s,e){const t=nr(e,this.size,3);s.uniform3fv(this.addr,t)}function Wx(s,e){const t=nr(e,this.size,4);s.uniform4fv(this.addr,t)}function Xx(s,e){const t=nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qx(s,e){const t=nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Yx(s,e){const t=nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Kx(s,e){s.uniform1iv(this.addr,e)}function Zx(s,e){s.uniform2iv(this.addr,e)}function Jx(s,e){s.uniform3iv(this.addr,e)}function $x(s,e){s.uniform4iv(this.addr,e)}function Qx(s,e){s.uniform1uiv(this.addr,e)}function jx(s,e){s.uniform2uiv(this.addr,e)}function ev(s,e){s.uniform3uiv(this.addr,e)}function tv(s,e){s.uniform4uiv(this.addr,e)}function nv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ba($d):o=Jd;for(let l=0;l!==i;++l)t.setTexture2D(e[l]||o,r[l])}function iv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ef,r[o])}function sv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=ba(Qd):o=tf;for(let l=0;l!==i;++l)t.setTextureCube(e[l]||o,r[l])}function rv(s,e,t){const n=this.cache,i=e.length,r=Sa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||jd,r[o])}function ov(s){switch(s){case 5126:return Hx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return $x;case 5125:return Qx;case 36294:return jx;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zx(t.type)}}class lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ov(t.type)}}class cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function xu(s,e){s.seq.push(e),s.map[e.id]=e}function hv(s,e,t){const n=s.name,i=n.length;for(al.lastIndex=0;;){const r=al.exec(n),o=al.lastIndex;let l=r[1];const a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===i){xu(t,c===void 0?new av(l,s,e):new lv(l,s,e));break}else{let d=t.map[l];d===void 0&&(d=new cv(l),xu(t,d)),t=d}}}class Yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);hv(l,a,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const uv=37297;let dv=0;function fv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Mu=new It;function pv(s){Wt._getMatrix(Mu,Wt.workingColorSpace,s);const e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case ea:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fv(s.getShaderSource(e),l)}else return r}function mv(s,e){const t=pv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const gv={[mc]:"Linear",[gc]:"Reinhard",[_c]:"Cineon",[ma]:"ACESFilmic",[vc]:"AgX",[Mc]:"Neutral",[xc]:"Custom"};function _v(s,e){const t=gv[e];return t===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new V;function xv(){Wt.getLuminanceCoefficients(Uo);const s=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Mv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function Tr(s){return s!==""}function Su(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(s){return s.replace(Sv,bv)}function bv(s,e){const t=zt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lc(t)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(s){return s.replace(wv,Tv)}function Tv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Ev={[Ar]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function Av(s){return Ev[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rv={[Fr]:"ENVMAP_MODE_REFRACTION"};function Cv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Rv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pv={[nd]:"ENVMAP_BLENDING_MULTIPLY",[Ff]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function Lv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Pv[s.combine]||"ENVMAP_BLENDING_NONE"}function Dv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=Av(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Cv(t),d=Lv(t),f=vv(t),u=Mv(r),p=i.createProgram();let _,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Tr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Tr).join(`
`),m.length>0&&(m+=`
`)):(_=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),m=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?zt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?_v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=lc(o),o=Su(o,t),o=bu(o,t),l=lc(l),l=Su(l,t),l=bu(l,t),o=wu(o),l=wu(l),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+_+o,E=g+m+l,T=vu(i,i.VERTEX_SHADER,S),I=vu(i,i.FRAGMENT_SHADER,E);i.attachShader(p,T),i.attachShader(p,I),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(k){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(p)||"",ae=i.getShaderInfoLog(T)||"",ee=i.getShaderInfoLog(I)||"",F=j.trim(),oe=ae.trim(),se=ee.trim();let X=!0,te=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,I);else{const le=yu(i,T,"vertex"),fe=yu(i,I,"fragment");Ct("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+le+`
`+fe)}else F!==""?Tt("WebGLProgram: Program Info Log:",F):(oe===""||se==="")&&(te=!1);te&&(k.diagnostics={runnable:X,programLog:F,vertexShader:{log:oe,prefix:_},fragmentShader:{log:se,prefix:m}})}i.deleteShader(T),i.deleteShader(I),M=new Yo(i,p),w=yv(i,p)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,uv)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=I,this}let Iv=0;class Nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uv(e),t.set(e,n)),n}}class Uv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Ov(s){return s===hs||s===$o||s===Qo}function Fv(s,e,t,n,i,r){const o=new Dc,l=new Nv,a=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return a.add(M),M===0?"uv":`uv${M}`}function p(M,w,U,k,j,ae){const ee=k.fog,F=j.geometry,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,X=e.get(M.envMap||oe,se),te=f[M.type];let le=n.precision;M.precision!==null&&(le=n.getMaxPrecision(M.precision),le!==M.precision&&Tt("WebGLProgram.getParameters:",M.precision,"not supported, using",le,"instead."));const fe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Te=fe!==void 0?fe.length:0;let Ke=0;F.morphAttributes.position!==void 0&&(Ke=1),F.morphAttributes.normal!==void 0&&(Ke=2),F.morphAttributes.color!==void 0&&(Ke=3);let rt,me,We,nt;if(te){const B=vi[te];rt=B.vertexShader,me=B.fragmentShader}else{rt=M.vertexShader,me=M.fragmentShader;const B=l.getVertexShaderStage(M),re=l.getFragmentShaderStage(M);l.update(M,B,re),We=B.id,nt=re.id}const ct=s.getRenderTarget(),Xe=s.state.buffers.depth.getReversed(),ut=j.isInstancedMesh===!0,Ut=j.isBatchedMesh===!0,at=!!M.map,bt=!!M.matcap,it=!!X,Re=it&&X.isPMREMTexture===!0,Ne=!!M.aoMap,Je=!!M.lightMap,et=!!M.bumpMap&&M.wireframe===!1,je=!!M.normalMap,wt=!!M.displacementMap,lt=!!M.emissiveMap,Oe=!!M.metalnessMap,Fe=!!M.roughnessMap,Ge=M.anisotropy>0,D=M.clearcoat>0,Ze=M.diffuseRoughness>0,Ye=M.dispersion>0,Ve=M.retroreflectivity>0,Pe=M.iridescence>0,$e=M.sheen>0,ye=M.transmission>0,ue=Ge&&!!M.anisotropyMap,L=D&&!!M.clearcoatMap,b=D&&!!M.clearcoatNormalMap,Z=D&&!!M.clearcoatRoughnessMap,Me=Ze&&!!M.diffuseRoughnessMap,ge=Pe&&!!M.iridescenceMap,Ie=Pe&&!!M.iridescenceThicknessMap,Be=$e&&!!M.sheenColorMap,_e=$e&&!!M.sheenRoughnessMap,be=!!M.specularMap,Ae=!!M.specularColorMap,q=!!M.specularIntensityMap,ve=ye&&!!M.transmissionMap,xe=ye&&!!M.thicknessMap,ke=!!M.gradientMap,ie=!!M.alphaMap,J=M.alphaTest>0,pe=!!M.alphaHash,De=!!M.extensions;let x=Hi;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(x=s.toneMapping);const H=Re?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Y={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:me,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:le,batching:Ut,batchingColor:Ut&&j._colorsTexture!==null,instancing:ut,instancingColor:ut&&j.instanceColor!==null,instancingMorph:ut&&j.morphTexture!==null,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:bt,envMap:it,envMapMode:it&&X.mapping,envMapPMREM:Re,envMapMaxLod:Re?H.length-1:null,envMapSize:Re?H[0].width:null,aoMap:Ne,lightMap:Je,bumpMap:et,normalMap:je,displacementMap:wt,emissiveMap:lt,normalMapObjectSpace:je&&M.normalMapType===qf,normalMapTangentSpace:je&&M.normalMapType===Hr,packedNormalMap:je&&M.normalMapType===Hr&&Ov(M.normalMap.format),metalnessMap:Oe,roughnessMap:Fe,anisotropy:Ge,anisotropyMap:ue,clearcoat:D,clearcoatMap:L,clearcoatNormalMap:b,clearcoatRoughnessMap:Z,diffuseRoughness:Ze,diffuseRoughnessMap:Me,dispersion:Ye,retroreflection:Ve,iridescence:Pe,iridescenceMap:ge,iridescenceThicknessMap:Ie,sheen:$e,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:be,specularColorMap:Ae,specularIntensityMap:q,transmission:ye,transmissionMap:ve,thicknessMap:xe,gradientMap:ke,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:J,alphaHash:pe,combine:M.combine,mapUv:at&&u(M.map.channel),aoMapUv:Ne&&u(M.aoMap.channel),lightMapUv:Je&&u(M.lightMap.channel),bumpMapUv:et&&u(M.bumpMap.channel),normalMapUv:je&&u(M.normalMap.channel),displacementMapUv:wt&&u(M.displacementMap.channel),emissiveMapUv:lt&&u(M.emissiveMap.channel),metalnessMapUv:Oe&&u(M.metalnessMap.channel),roughnessMapUv:Fe&&u(M.roughnessMap.channel),anisotropyMapUv:ue&&u(M.anisotropyMap.channel),clearcoatMapUv:L&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&u(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&u(M.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&u(M.sheenRoughnessMap.channel),specularMapUv:be&&u(M.specularMap.channel),specularColorMapUv:Ae&&u(M.specularColorMap.channel),specularIntensityMapUv:q&&u(M.specularIntensityMap.channel),transmissionMapUv:ve&&u(M.transmissionMap.channel),thicknessMapUv:xe&&u(M.thicknessMap.channel),alphaMapUv:ie&&u(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(je||Ge),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!F.attributes.uv&&(at||ie),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&je===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Xe,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ke,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:ae.filter(B=>B.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:x,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&Wt.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Y.vertexUv1s=a.has(1),Y.vertexUv2s=a.has(2),Y.vertexUv3s=a.has(3),a.clear(),Y}function _(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(m(w,M),g(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapPMREM),M.push(w.envMapMaxLod),M.push(w.envMapSize),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.diffuseRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.numLightProbeGrids),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function S(M){const w=f[M.type];let U;if(w){const k=vi[w];U=$r.clone(k.uniforms)}else U=M.uniforms;return U}function E(M,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new Dv(s,w,M,i),c.push(U),h.set(w,U)),U}function T(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function I(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:E,releaseProgram:T,releaseShaderCache:I,programs:c,dispose:P}}function Bv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function i(o,l,a){s.get(o)[l]=a}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function kv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Eu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Au(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function l(f,u,p,_,m,g){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},s[e]=S):(S.id=f.id,S.object=f,S.geometry=u,S.material=p,S.materialVariant=o(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=m,S.group=g),e++,S}function a(f,u,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);const E=l(f,u,p,_,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):t.push(E)}function c(f,u,p,_,m,g){const S=l(f,u,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function h(f,u){t.length>1&&t.sort(f||kv),n.length>1&&n.sort(u||Eu),i.length>1&&i.sort(u||Eu)}function d(){for(let f=e,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:h}}function zv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Au,s.set(n,[o])):i>=r.length?(o=new Au,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Hv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new _t};break;case"SpotLight":t={position:new V,direction:new V,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function Gv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Vv=0;function Wv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xv(s){const e=new Hv,t=Gv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,r=new Rt,o=new Rt;function l(c){let h=0,d=0,f=0;for(let ae=0;ae<9;ae++)n.probe[ae].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,S=0,E=0,T=0,I=0,P=0,M=0,w=0,U=0,k=0;c.sort(Wv);for(let ae=0,ee=c.length;ae<ee;ae++){const F=c[ae],oe=F.color,se=F.intensity,X=F.distance;let te=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===hs?te=F.shadow.map.texture:te=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=oe.r*se,d+=oe.g*se,f+=oe.b*se;else if(F.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(F.sh.coefficients[le],se);k++}else if(F.isSunLight){const le=e.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const fe=F.shadow,Te=t.get(F);Te.shadowIntensity=fe.intensity,Te.shadowBias=fe.bias,Te.shadowNormalBias=fe.normalBias,Te.shadowRadius=fe.radius,Te.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),n.sunShadow[p]=Te,n.sunShadowMap[p]=te;const Ke=fe.getViewportCount();for(let rt=0;rt<Ke;rt++)n.sunShadowMatrix[_+rt]=fe.getMatrix(rt),n.sunShadowCascade[_+rt]=fe._cascadeData[rt];_+=Ke,p++}n.sun[u]=le,u++}else if(F.isDirectionalLight){const le=e.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const fe=F.shadow,Te=t.get(F);Te.shadowIntensity=fe.intensity,Te.shadowBias=fe.bias,Te.shadowNormalBias=fe.normalBias,Te.shadowRadius=fe.radius,Te.shadowMapSize=fe.mapSize,n.directionalShadow[m]=Te,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=F.shadow.matrix,I++}n.directional[m]=le,m++}else if(F.isSpotLight){const le=e.get(F);le.position.setFromMatrixPosition(F.matrixWorld),le.color.copy(oe).multiplyScalar(se),le.distance=X,le.coneCos=Math.cos(F.angle),le.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),le.decay=F.decay,n.spot[S]=le;const fe=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,fe.updateMatrices(F),F.castShadow&&U++),n.spotLightMatrix[S]=fe.matrix,F.castShadow){const Te=t.get(F);Te.shadowIntensity=fe.intensity,Te.shadowBias=fe.bias,Te.shadowNormalBias=fe.normalBias,Te.shadowRadius=fe.radius,Te.shadowMapSize=fe.mapSize,n.spotShadow[S]=Te,n.spotShadowMap[S]=te,M++}S++}else if(F.isRectAreaLight){const le=e.get(F);le.color.copy(oe).multiplyScalar(se),le.halfWidth.set(F.width*.5,0,0),le.halfHeight.set(0,F.height*.5,0),n.rectArea[E]=le,E++}else if(F.isPointLight){const le=e.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity),le.distance=F.distance,le.decay=F.decay,F.castShadow){const fe=F.shadow,Te=t.get(F);Te.shadowIntensity=fe.intensity,Te.shadowBias=fe.bias,Te.shadowNormalBias=fe.normalBias,Te.shadowRadius=fe.radius,Te.shadowMapSize=fe.mapSize,Te.shadowCameraNear=fe.camera.near,Te.shadowCameraFar=fe.camera.far,n.pointShadow[g]=Te,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=F.shadow.matrix,P++}n.point[g]=le,g++}else if(F.isHemisphereLight){const le=e.get(F);le.skyColor.copy(F.color).multiplyScalar(se),le.groundColor.copy(F.groundColor).multiplyScalar(se),n.hemi[T]=le,T++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const j=n.hash;(j.sunLength!==u||j.directionalLength!==m||j.pointLength!==g||j.spotLength!==S||j.rectAreaLength!==E||j.hemiLength!==T||j.numSunShadows!==p||j.numDirectionalShadows!==I||j.numPointShadows!==P||j.numSpotShadows!==M||j.numSpotMaps!==w||j.numLightProbes!==k)&&(n.sun.length=u,n.directional.length=m,n.spot.length=S,n.rectArea.length=E,n.point.length=g,n.hemi.length=T,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+w-U,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=k,j.sunLength=u,j.directionalLength=m,j.pointLength=g,j.spotLength=S,j.rectAreaLength=E,j.hemiLength=T,j.numSunShadows=p,j.numDirectionalShadows=I,j.numPointShadows=P,j.numSpotShadows=M,j.numSpotMaps=w,j.numLightProbes=k,n.version=Vv++)}function a(c,h){let d=0,f=0,u=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){const T=c[S];if(T.isSunLight){const I=n.sun[d];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(g),d++}else if(T.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),f++}else if(T.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const I=n.rectArea[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const I=n.point[u];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:l,setupView:a,state:n}}function Ru(s){const e=new Xv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function l(d){n.push(d)}function a(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:l}}function qv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let l;return o===void 0?(l=new Ru(s),e.set(i,[l])):r>=o.length?(l=new Ru(s),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
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
}`,Zv=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Jv=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Cu=new Rt,gr=new V,ll=new V;function $v(s,e,t){let n=new qr;const i=new Ue,r=new Ue,o=new sn,l=new L0,a=new D0,c={},h=t.maxTextureSize,d={[ji]:Nn,[Nn]:ji,[ln]:ln},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Yv,fragmentShader:Kv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new en;p.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let g=this.type;this.render=function(P,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===xf&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);const U=s.getRenderTarget(),k=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(ls),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=g!==this.type;ee&&M.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(oe=>oe.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,oe=P.length;F<oe;F++){const se=P[F],X=se.shadow;if(X===void 0){Tt("WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const te=X.getFrameExtents();i.multiply(te),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,X.mapSize.y=r.y));const le=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=le,X.map===null||ee===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Mr){if(se.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new On(i.x,i.y,{format:hs,type:Un,minFilter:An,magFilter:An,generateMipmaps:!1}),X.map.texture.name=se.name+".shadowMap",X.map.depthTexture=new us(i.x,i.y,ni),X.map.depthTexture.name=se.name+".shadowMapDepth",X.map.depthTexture.format=es,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else se.isPointLight?(X.map=new Xc(i.x),X.map.depthTexture=new Ad(i.x,ui)):(X.map=new On(i.x,i.y),X.map.depthTexture=new us(i.x,i.y,ui)),X.map.depthTexture.name=se.name+".shadowMap",X.map.depthTexture.format=es,this.type===Ar?(X.map.depthTexture.compareFunction=le?fd:dd,X.map.depthTexture.minFilter=An,X.map.depthTexture.magFilter=An):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);const fe=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();se.isPointLight!==!0&&X.updateMatrices(se,w);const Te=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:w.layers;for(let Ke=0;Ke<fe;Ke++){const rt=X.getCamera(Ke);if(se.isPointLight){const me=X.camera,We=X.matrix,nt=se.distance||me.far;nt!==me.far&&(me.far=nt,me.updateProjectionMatrix()),gr.setFromMatrixPosition(se.matrixWorld),me.position.copy(gr),ll.copy(me.position),ll.add(Zv[Ke]),me.up.copy(Jv[Ke]),me.lookAt(ll),me.updateMatrixWorld(),We.makeTranslation(-gr.x,-gr.y,-gr.z),Cu.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Cu,me.coordinateSystem,me.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,Ke),s.clear();else{Ke===0&&(s.setRenderTarget(X.map),s.clear());const me=X.getViewport(Ke);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),ae.viewport(o)}n=X.getFrustum(Ke),T(M,w,rt,se,Te,this.type)}X.isPointLightShadow!==!0&&this.type===Mr&&S(X,w),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(U,k,j)};function S(P,M){const w=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null?P.mapPass=new On(i.x,i.y,{format:hs,type:Un}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,_,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(M,null,w,u,_,null)}function E(P,M,w,U){let k=null;const j=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)k=j;else if(k=w.isPointLight===!0?a:l,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const ae=k.uuid,ee=M.uuid;let F=c[ae];F===void 0&&(F={},c[ae]=F);let oe=F[ee];oe===void 0&&(oe=k.clone(),F[ee]=oe,M.addEventListener("dispose",I)),k=oe}if(k.visible=M.visible,k.wireframe=M.wireframe,U===Mr?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:d[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,k.map=M.map,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const ae=s.properties.get(k);ae.light=w}return k}function T(P,M,w,U,k,j){if(P.visible===!1)return;if(P.layers.test(k)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&j===Mr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const F=e.update(P),oe=P.material;if(Array.isArray(oe)){const se=F.groups;for(let X=0,te=se.length;X<te;X++){const le=se[X],fe=oe[le.materialIndex];if(fe&&fe.visible){const Te=E(P,fe,U,j);P.onBeforeShadow(s,P,M,w,F,Te,le),s.renderBufferDirect(w,null,F,Te,P,le),P.onAfterShadow(s,P,M,w,F,Te,le)}}}else if(oe.visible){const se=E(P,oe,U,j);P.onBeforeShadow(s,P,M,w,F,se,null),s.renderBufferDirect(w,null,F,se,P,null),P.onAfterShadow(s,P,M,w,F,se,null)}}const ee=P.children;for(let F=0,oe=ee.length;F<oe;F++)T(ee[F],M,w,U,k,j)}function I(P){P.target.removeEventListener("dispose",I);for(const w in c){const U=c[w],k=P.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function Qv(s,e){function t(){let q=!1;const ve=new sn;let xe=null;const ke=new sn(0,0,0,0);return{setMask:function(ie){xe!==ie&&!q&&(s.colorMask(ie,ie,ie,ie),xe=ie)},setLocked:function(ie){q=ie},setClear:function(ie,J,pe,De,x){x===!0&&(ie*=De,J*=De,pe*=De),ve.set(ie,J,pe,De),ke.equals(ve)===!1&&(s.clearColor(ie,J,pe,De),ke.copy(ve))},reset:function(){q=!1,xe=null,ke.set(-1,0,0,0)}}}function n(){let q=!1,ve=!1,xe=null,ke=null,ie=null;return{setReversed:function(J){if(ve!==J){const pe=e.get("EXT_clip_control");J?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ve=J;const De=ie;ie=null,this.setClear(De)}},getReversed:function(){return ve},setTest:function(J){J?Xe(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(J){xe!==J&&!q&&(s.depthMask(J),xe=J)},setFunc:function(J){if(ve&&(J=ip[J]),ke!==J){switch(J){case gl:s.depthFunc(s.NEVER);break;case _l:s.depthFunc(s.ALWAYS);break;case xl:s.depthFunc(s.LESS);break;case Or:s.depthFunc(s.LEQUAL);break;case vl:s.depthFunc(s.EQUAL);break;case Ml:s.depthFunc(s.GEQUAL);break;case yl:s.depthFunc(s.GREATER);break;case Sl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=J}},setLocked:function(J){q=J},setClear:function(J){ie!==J&&(ie=J,ve&&(J=1-J),s.clearDepth(J))},reset:function(){q=!1,xe=null,ke=null,ie=null,ve=!1}}}function i(){let q=!1,ve=null,xe=null,ke=null,ie=null,J=null,pe=null,De=null,x=null;return{setTest:function(H){q||(H?Xe(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(H){ve!==H&&!q&&(s.stencilMask(H),ve=H)},setFunc:function(H,Y,B){(xe!==H||ke!==Y||ie!==B)&&(s.stencilFunc(H,Y,B),xe=H,ke=Y,ie=B)},setOp:function(H,Y,B){(J!==H||pe!==Y||De!==B)&&(s.stencilOp(H,Y,B),J=H,pe=Y,De=B)},setLocked:function(H){q=H},setClear:function(H){x!==H&&(s.clearStencil(H),x=H)},reset:function(){q=!1,ve=null,xe=null,ke=null,ie=null,J=null,pe=null,De=null,x=null}}}const r=new t,o=new n,l=new i;let a={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,S=null,E=null,T=null,I=null,P=null,M=null,w=new _t(0,0,0),U=0,k=!1,j=null,ae=null,ee=null,F=null,oe=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,te=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),X=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),X=te>=2);let fe=null,Te={};const Ke=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),me=new sn().fromArray(Ke),We=new sn().fromArray(rt);function nt(q,ve,xe,ke){const ie=new Uint8Array(4),J=s.createTexture();s.bindTexture(q,J),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<xe;pe++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(ve+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return J}const ct={};ct[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Xe(s.DEPTH_TEST),o.setFunc(Or),et(!1),je(sh),Xe(s.CULL_FACE),Ne(ls);function Xe(q){h[q]!==!0&&(s.enable(q),h[q]=!0)}function ut(q){h[q]!==!1&&(s.disable(q),h[q]=!1)}function Ut(q,ve){return f[q]!==ve?(s.bindFramebuffer(q,ve),f[q]=ve,q===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ve),q===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function at(q,ve){let xe=p,ke=!1;if(q){xe=u.get(ve),xe===void 0&&(xe=[],u.set(ve,xe));const ie=q.textures;if(xe.length!==ie.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let J=0,pe=ie.length;J<pe;J++)xe[J]=s.COLOR_ATTACHMENT0+J;xe.length=ie.length,ke=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,ke=!0);ke&&s.drawBuffers(xe)}function bt(q){return _!==q?(s.useProgram(q),_=q,!0):!1}const it={[Ns]:s.FUNC_ADD,[Mf]:s.FUNC_SUBTRACT,[yf]:s.FUNC_REVERSE_SUBTRACT};it[Sf]=s.MIN,it[bf]=s.MAX;const Re={[wf]:s.ZERO,[Tf]:s.ONE,[Ef]:s.SRC_COLOR,[ed]:s.SRC_ALPHA,[Df]:s.SRC_ALPHA_SATURATE,[Pf]:s.DST_COLOR,[Rf]:s.DST_ALPHA,[Af]:s.ONE_MINUS_SRC_COLOR,[td]:s.ONE_MINUS_SRC_ALPHA,[Lf]:s.ONE_MINUS_DST_COLOR,[Cf]:s.ONE_MINUS_DST_ALPHA,[If]:s.CONSTANT_COLOR,[Nf]:s.ONE_MINUS_CONSTANT_COLOR,[Uf]:s.CONSTANT_ALPHA,[Of]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(q,ve,xe,ke,ie,J,pe,De,x,H){if(q===ls){m===!0&&(ut(s.BLEND),m=!1);return}if(m===!1&&(Xe(s.BLEND),m=!0),q!==vf){if(q!==g||H!==k){if((S!==Ns||I!==Ns)&&(s.blendEquation(s.FUNC_ADD),S=Ns,I=Ns),H)switch(q){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oi:s.blendFunc(s.ONE,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",q);break}else switch(q){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rh:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",q);break}E=null,T=null,P=null,M=null,w.set(0,0,0),U=0,g=q,k=H}return}ie=ie||ve,J=J||xe,pe=pe||ke,(ve!==S||ie!==I)&&(s.blendEquationSeparate(it[ve],it[ie]),S=ve,I=ie),(xe!==E||ke!==T||J!==P||pe!==M)&&(s.blendFuncSeparate(Re[xe],Re[ke],Re[J],Re[pe]),E=xe,T=ke,P=J,M=pe),(De.equals(w)===!1||x!==U)&&(s.blendColor(De.r,De.g,De.b,x),w.copy(De),U=x),g=q,k=!1}function Je(q,ve){q.side===ln?ut(s.CULL_FACE):Xe(s.CULL_FACE);let xe=q.side===Nn;ve&&(xe=!xe),et(xe),q.blending===ks&&q.transparent===!1?Ne(ls):Ne(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const ke=q.stencilWrite;l.setTest(ke),ke&&(l.setMask(q.stencilWriteMask),l.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),l.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),lt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Xe(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(q){j!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),j=q)}function je(q){q!==gf?(Xe(s.CULL_FACE),q!==ae&&(q===sh?s.cullFace(s.BACK):q===_f?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),ae=q}function wt(q){q!==ee&&(X&&s.lineWidth(q),ee=q)}function lt(q,ve,xe){q?(Xe(s.POLYGON_OFFSET_FILL),(F!==ve||oe!==xe)&&(F=ve,oe=xe,o.getReversed()&&(ve=-ve,xe=-xe),s.polygonOffset(ve,xe))):ut(s.POLYGON_OFFSET_FILL)}function Oe(q){q?Xe(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function Fe(q){q===void 0&&(q=s.TEXTURE0+se-1),fe!==q&&(s.activeTexture(q),fe=q)}function Ge(q,ve,xe){xe===void 0&&(fe===null?xe=s.TEXTURE0+se-1:xe=fe);let ke=Te[xe];ke===void 0&&(ke={type:void 0,texture:void 0},Te[xe]=ke),(ke.type!==q||ke.texture!==ve)&&(fe!==xe&&(s.activeTexture(xe),fe=xe),s.bindTexture(q,ve||ct[q]),ke.type=q,ke.texture=ve)}function D(){const q=Te[fe];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ze(){try{s.compressedTexImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ye(){try{s.compressedTexImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ve(){try{s.texSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function $e(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function ue(){try{s.texStorage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function L(){try{s.texStorage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function b(){try{s.texImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Z(){try{s.texImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Me(q){return d[q]!==void 0?d[q]:s.getParameter(q)}function ge(q,ve){d[q]!==ve&&(s.pixelStorei(q,ve),d[q]=ve)}function Ie(q){me.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),me.copy(q))}function Be(q){We.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),We.copy(q))}function _e(q,ve){let xe=c.get(ve);xe===void 0&&(xe=new WeakMap,c.set(ve,xe));let ke=xe.get(q);ke===void 0&&(ke=s.getUniformBlockIndex(ve,q.name),s.uniformBlockBinding(ve,ke,ke),xe.set(q,ke))}function be(q,ve,xe){const ie=c.get(ve).get(q);a[ie]!==xe&&(s.bindBufferBase(s.UNIFORM_BUFFER,ie,xe),a[ie]=xe)}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},fe=null,Te={},f={},a={},u=new WeakMap,p=[],_=null,m=!1,g=null,S=null,E=null,T=null,I=null,P=null,M=null,w=new _t(0,0,0),U=0,k=!1,j=null,ae=null,ee=null,F=null,oe=null,me.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:Xe,disable:ut,bindFramebuffer:Ut,drawBuffers:at,useProgram:bt,setBlending:Ne,setMaterial:Je,setFlipSided:et,setCullFace:je,setLineWidth:wt,setPolygonOffset:lt,setScissorTest:Oe,activeTexture:Fe,bindTexture:Ge,unbindTexture:D,compressedTexImage2D:Ze,compressedTexImage3D:Ye,texImage2D:b,texImage3D:Z,pixelStorei:ge,getParameter:Me,updateUBOMapping:_e,uniformBlockBinding:be,texStorage2D:ue,texStorage3D:L,texSubImage2D:Ve,texSubImage3D:Pe,compressedTexSubImage2D:$e,compressedTexSubImage3D:ye,scissor:Ie,viewport:Be,reset:Ae}}function jv(s,e,t,n,i,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,_=new FinalizationRegistry(L=>p.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return m?new OffscreenCanvas(L,b):Vr("canvas")}function S(L,b,Z){let Me=1;const ge=ue(L);if((ge.width>Z||ge.height>Z)&&(Me=Z/Math.max(ge.width,ge.height)),Me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ie=Math.floor(Me*ge.width),Be=Math.floor(Me*ge.height);f===void 0&&(f=g(Ie,Be));const _e=b?g(Ie,Be):f;return _e.width=Ie,_e.height=Be,_e.getContext("2d").drawImage(L,0,0,Ie,Be),Tt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ie+"x"+Be+")."),_e}else return"data"in L&&Tt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function E(L){return L.generateMipmaps}function T(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,b,Z,Me,ge,Ie=!1){if(L!==null){if(s[L]!==void 0)return s[L];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Be;Me&&(Be=e.get("EXT_texture_norm16"),Be||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=b;if(b===s.RED&&(Z===s.FLOAT&&(_e=s.R32F),Z===s.HALF_FLOAT&&(_e=s.R16F),Z===s.UNSIGNED_BYTE&&(_e=s.R8),Z===s.UNSIGNED_SHORT&&Be&&(_e=Be.R16_EXT),Z===s.SHORT&&Be&&(_e=Be.R16_SNORM_EXT)),b===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(_e=s.R8UI),Z===s.UNSIGNED_SHORT&&(_e=s.R16UI),Z===s.UNSIGNED_INT&&(_e=s.R32UI),Z===s.BYTE&&(_e=s.R8I),Z===s.SHORT&&(_e=s.R16I),Z===s.INT&&(_e=s.R32I)),b===s.RG&&(Z===s.FLOAT&&(_e=s.RG32F),Z===s.HALF_FLOAT&&(_e=s.RG16F),Z===s.UNSIGNED_BYTE&&(_e=s.RG8),Z===s.UNSIGNED_SHORT&&Be&&(_e=Be.RG16_EXT),Z===s.SHORT&&Be&&(_e=Be.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(_e=s.RG8UI),Z===s.UNSIGNED_SHORT&&(_e=s.RG16UI),Z===s.UNSIGNED_INT&&(_e=s.RG32UI),Z===s.BYTE&&(_e=s.RG8I),Z===s.SHORT&&(_e=s.RG16I),Z===s.INT&&(_e=s.RG32I)),b===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),Z===s.UNSIGNED_INT&&(_e=s.RGB32UI),Z===s.BYTE&&(_e=s.RGB8I),Z===s.SHORT&&(_e=s.RGB16I),Z===s.INT&&(_e=s.RGB32I)),b===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),Z===s.UNSIGNED_INT&&(_e=s.RGBA32UI),Z===s.BYTE&&(_e=s.RGBA8I),Z===s.SHORT&&(_e=s.RGBA16I),Z===s.INT&&(_e=s.RGBA32I)),b===s.RGB&&(Z===s.UNSIGNED_SHORT&&Be&&(_e=Be.RGB16_EXT),Z===s.SHORT&&Be&&(_e=Be.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(_e=s.R11F_G11F_B10F)),b===s.RGBA){const be=Ie?ea:Wt.getTransfer(ge);Z===s.FLOAT&&(_e=s.RGBA32F),Z===s.HALF_FLOAT&&(_e=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(_e=be===Qt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Be&&(_e=Be.RGBA16_EXT),Z===s.SHORT&&Be&&(_e=Be.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function M(L,b){let Z;return L?b===null||b===ui||b===Xs?Z=s.DEPTH24_STENCIL8:b===ni?Z=s.DEPTH32F_STENCIL8:b===Br&&(Z=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ui||b===Xs?Z=s.DEPTH_COMPONENT24:b===ni?Z=s.DEPTH_COMPONENT32F:b===Br&&(Z=s.DEPTH_COMPONENT16),Z}function w(L,b){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==vn&&L.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function U(L){const b=new WeakRef(L);n.get(L).__ref=b,p.add(b),_.register(L,b,b)}function k(L){const b=n.get(L).__ref;b!==void 0&&(p.delete(b),_.unregister(b))}function j(L){ee(L.target)}function ae(L){F(L.target)}function ee(L){L.removeEventListener("dispose",j),k(L),se(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&d.delete(L)}function F(L){L.removeEventListener("dispose",ae),k(L),te(L)}function oe(){for(const L of p){const b=L.deref();b!==void 0&&(b.isRenderTarget===!0?F(b):ee(b))}p.clear(),d.clear()}function se(L){const b=n.get(L);if(b.__webglInit===void 0)return;const Z=L.source,Me=u.get(Z);if(Me){const ge=Me[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&X(L),Object.keys(Me).length===0&&u.delete(Z)}n.remove(L)}function X(L){const b=n.get(L);s.deleteTexture(b.__webglTexture);const Z=L.source,Me=u.get(Z);delete Me[b.__cacheKey],o.memory.textures--}function te(L){const b=n.get(L);b.__depthDisposeCallback&&b.__depthDisposeCallback();const Z=L.depthTexture;if(Z&&Z.renderTarget===L&&ee(Z),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let Ie=0;Ie<b.__webglFramebuffer[ge].length;Ie++)s.deleteFramebuffer(b.__webglFramebuffer[ge][Ie]);else s.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)s.deleteFramebuffer(b.__webglFramebuffer[ge]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Me=L.textures;for(let ge=0,Ie=Me.length;ge<Ie;ge++){const Be=n.get(Me[ge]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),o.memory.textures--),n.remove(Me[ge])}n.remove(L)}let le=0;function fe(){le=0}function Te(){return le}function Ke(L){le=L}function rt(){const L=le;return L>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),le+=1,L}function me(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.mipmapsAutoUpdate),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function We(L,b){const Z=n.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const Me=L.image;if(Me===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Je(Z,L,b);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+b)}function nt(L,b){const Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Je(Z,L,b);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+b)}function ct(L,b){const Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Je(Z,L,b);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+b)}function Xe(L,b){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){et(Z,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+b)}const ut={[ii]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Jo]:s.MIRRORED_REPEAT},Ut={[vn]:s.NEAREST,[sd]:s.NEAREST_MIPMAP_NEAREST,[yr]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Ho]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},at={[Kf]:s.NEVER,[pd]:s.ALWAYS,[Zf]:s.LESS,[dd]:s.LEQUAL,[Jf]:s.EQUAL,[fd]:s.GEQUAL,[$f]:s.GREATER,[Qf]:s.NOTEQUAL};function bt(L,b){if(b.type===ni&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===Ho||b.magFilter===yr||b.magFilter===yi||b.minFilter===An||b.minFilter===Ho||b.minFilter===yr||b.minFilter===yi)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ut[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ut[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ut[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ut[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ut[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==yr&&b.minFilter!==yi||b.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function it(L,b){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",j),U(b));const Me=b.source;let ge=u.get(Me);ge===void 0&&(ge={},u.set(Me,ge));const Ie=me(b);if(Ie!==L.__cacheKey){ge[Ie]===void 0&&(ge[Ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ge[Ie].usedTimes++;const Be=ge[L.__cacheKey];Be!==void 0&&(ge[L.__cacheKey].usedTimes--,Be.usedTimes===0&&X(b)),L.__cacheKey=Ie,L.__webglTexture=ge[Ie].texture}return Z}function Re(L,b,Z){return Math.floor(Math.floor(L/Z)/b)}function Ne(L,b,Z,Me){const Ie=L.updateRanges;if(Ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Z,Me,b.data);else{Ie.sort((q,ve)=>q.start-ve.start);let Be=0;for(let q=1;q<Ie.length;q++){const ve=Ie[Be],xe=Ie[q],ke=ve.start+ve.count,ie=Re(xe.start,b.width,4),J=Re(ve.start,b.width,4);xe.start<=ke+1&&ie===J&&Re(xe.start+xe.count-1,b.width,4)===ie?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++Be,Ie[Be]=xe)}Ie.length=Be+1;const _e=t.getParameter(s.UNPACK_ROW_LENGTH),be=t.getParameter(s.UNPACK_SKIP_PIXELS),Ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let q=0,ve=Ie.length;q<ve;q++){const xe=Ie[q],ke=Math.floor(xe.start/4),ie=Math.ceil(xe.count/4),J=ke%b.width,pe=Math.floor(ke/b.width),De=ie,x=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe),t.texSubImage2D(s.TEXTURE_2D,0,J,pe,De,x,Z,Me,b.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,_e),t.pixelStorei(s.UNPACK_SKIP_PIXELS,be),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Je(L,b,Z){let Me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Me=s.TEXTURE_3D);const ge=it(L,b),Ie=b.source;t.bindTexture(Me,L.__webglTexture,s.TEXTURE0+Z);const Be=n.get(Ie);if(Ie.version!==Be.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const x=Wt.getPrimaries(Wt.workingColorSpace),H=b.colorSpace===Fi?null:Wt.getPrimaries(b.colorSpace),Y=b.colorSpace===Fi||x===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let be=S(b.image,!1,i.maxTextureSize);be=ye(b,be);const Ae=r.convert(b.format,b.colorSpace),q=r.convert(b.type);let ve=P(b.internalFormat,Ae,q,b.normalized,b.colorSpace,b.isVideoTexture);bt(Me,b);let xe;const ke=b.mipmaps,ie=b.isVideoTexture!==!0,J=Be.__version===void 0||ge===!0,pe=Ie.dataReady,De=w(b,be);if(b.isDepthTexture)ve=M(b.format===$i,b.type),J&&(ie?t.texStorage2D(s.TEXTURE_2D,1,ve,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,ve,be.width,be.height,0,Ae,q,null));else if(b.isDataTexture)if(ke.length>0){ie&&J&&t.texStorage2D(s.TEXTURE_2D,De,ve,ke[0].width,ke[0].height);for(let x=0,H=ke.length;x<H;x++)xe=ke[x],ie?pe&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,xe.width,xe.height,Ae,q,xe.data):t.texImage2D(s.TEXTURE_2D,x,ve,xe.width,xe.height,0,Ae,q,xe.data);b.generateMipmaps=!1}else ie?(J&&t.texStorage2D(s.TEXTURE_2D,De,ve,be.width,be.height),pe&&Ne(b,be,Ae,q)):t.texImage2D(s.TEXTURE_2D,0,ve,be.width,be.height,0,Ae,q,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ve,ke[0].width,ke[0].height,be.depth);for(let x=0,H=ke.length;x<H;x++)if(xe=ke[x],b.format!==ci)if(Ae!==null)if(ie){if(pe)if(b.layerUpdates.size>0){const Y=lu(xe.width,xe.height,b.format,b.type);for(const B of b.layerUpdates){const re=xe.data.subarray(B*Y/xe.data.BYTES_PER_ELEMENT,(B+1)*Y/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,B,xe.width,xe.height,1,Ae,re)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,xe.width,xe.height,be.depth,Ae,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,x,ve,xe.width,xe.height,be.depth,0,xe.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,xe.width,xe.height,be.depth,Ae,q,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,x,ve,xe.width,xe.height,be.depth,0,Ae,q,xe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ie&&J&&t.texStorage2D(s.TEXTURE_2D,De,ve,ke[0].width,ke[0].height);for(let x=0,H=ke.length;x<H;x++)xe=ke[x],b.format!==ci?Ae!==null?ie?pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,x,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,x,ve,xe.width,xe.height,0,xe.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?pe&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,xe.width,xe.height,Ae,q,xe.data):t.texImage2D(s.TEXTURE_2D,x,ve,xe.width,xe.height,0,Ae,q,xe.data)}else if(b.isDataArrayTexture)if(ie){if(J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ve,be.width,be.height,be.depth),pe)if(b.layerUpdates.size>0){const x=lu(be.width,be.height,b.format,b.type);for(const H of b.layerUpdates){const Y=be.data.subarray(H*x/be.data.BYTES_PER_ELEMENT,(H+1)*x/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,H,be.width,be.height,1,Ae,q,Y)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ae,q,be.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,be.width,be.height,be.depth,0,Ae,q,be.data);else if(b.isData3DTexture)ie?(J&&t.texStorage3D(s.TEXTURE_3D,De,ve,be.width,be.height,be.depth),pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ae,q,be.data)):t.texImage3D(s.TEXTURE_3D,0,ve,be.width,be.height,be.depth,0,Ae,q,be.data);else if(b.isFramebufferTexture){if(J)if(ie)t.texStorage2D(s.TEXTURE_2D,De,ve,be.width,be.height);else{let x=be.width,H=be.height;for(let Y=0;Y<De;Y++)t.texImage2D(s.TEXTURE_2D,Y,ve,x,H,0,Ae,q,null),x>>=1,H>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const x=s.canvas;if(x.hasAttribute("layoutsubtree")||x.setAttribute("layoutsubtree","true"),be.parentNode!==x){x.appendChild(be),d.add(b),x.onpaint=H=>{const Y=H.changedElements;for(const B of d)Y.includes(B.image)&&(B.needsUpdate=!0)},x.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,be);else{const Y=s.RGBA,B=s.RGBA,re=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Y,B,re,be)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ke.length>0){if(ie&&J){const x=ue(ke[0]);t.texStorage2D(s.TEXTURE_2D,De,ve,x.width,x.height)}for(let x=0,H=ke.length;x<H;x++)xe=ke[x],ie?pe&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,Ae,q,xe):t.texImage2D(s.TEXTURE_2D,x,ve,Ae,q,xe);b.generateMipmaps=!1}else if(ie){if(J){const x=ue(be);t.texStorage2D(s.TEXTURE_2D,De,ve,x.width,x.height)}pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,q,be)}else t.texImage2D(s.TEXTURE_2D,0,ve,Ae,q,be);E(b)&&b.mipmapsAutoUpdate===!0&&T(Me),Be.__version=Ie.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function et(L,b,Z){if(b.image.length!==6)return;const Me=it(L,b),ge=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const Ie=n.get(ge);if(ge.version!==Ie.__version||Me===!0){t.activeTexture(s.TEXTURE0+Z);const Be=Wt.getPrimaries(Wt.workingColorSpace),_e=b.colorSpace===Fi?null:Wt.getPrimaries(b.colorSpace),be=b.colorSpace===Fi||Be===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,q=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let B=0;B<6;B++)!Ae&&!q?ve[B]=S(b.image[B],!0,i.maxCubemapSize):ve[B]=q?b.image[B].image:b.image[B],ve[B]=ye(b,ve[B]);const xe=ve[0],ke=r.convert(b.format,b.colorSpace),ie=r.convert(b.type);let J=P(b.internalFormat,ke,ie,b.normalized,b.colorSpace);const pe=b.isVideoTexture!==!0,De=Ie.__version===void 0||Me===!0,x=ge.dataReady;let H=w(b,xe);bt(s.TEXTURE_CUBE_MAP,b);let Y;if(b.isDepthTexture){if(J=M(b.format===$i,b.type),De)if(pe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,J,xe.width,xe.height);else for(let B=0;B<6;B++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,J,xe.width,xe.height,0,ke,ie,null)}else if(Ae){pe&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,J,xe.width,xe.height);for(let B=0;B<6;B++){Y=ve[B].mipmaps;for(let re=0;re<Y.length;re++){const ce=Y[re];b.format!==ci?ke!==null?pe?x&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re,0,0,ce.width,ce.height,ke,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re,J,ce.width,ce.height,0,ce.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re,0,0,ce.width,ce.height,ke,ie,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re,J,ce.width,ce.height,0,ke,ie,ce.data)}}}else{if(Y=b.mipmaps,pe&&De){Y.length>0&&H++;const B=ue(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,H,J,B.width,B.height)}for(let B=0;B<6;B++)if(q){pe?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ve[B].width,ve[B].height,ke,ie,ve[B].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,J,ve[B].width,ve[B].height,0,ke,ie,ve[B].data);for(let re=0;re<Y.length;re++){const ze=Y[re].image[B].image;pe?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re+1,0,0,ze.width,ze.height,ke,ie,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re+1,J,ze.width,ze.height,0,ke,ie,ze.data)}}else{pe?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ke,ie,ve[B]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,J,ke,ie,ve[B]);for(let re=0;re<Y.length;re++){const ce=Y[re];pe?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re+1,0,0,ke,ie,ce.image[B]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,re+1,J,ke,ie,ce.image[B])}}}E(b)&&b.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),Ie.__version=ge.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function je(L,b,Z,Me,ge,Ie){const Be=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),be=P(Z.internalFormat,Be,_e,Z.normalized,Z.colorSpace),Ae=n.get(b),q=n.get(Z);if(q.__renderTarget=b,!Ae.__hasExternalTextures){const ve=Math.max(1,b.width>>Ie),xe=Math.max(1,b.height>>Ie);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ie,be,ve,xe,b.depth,0,Be,_e,null):t.texImage2D(ge,Ie,be,ve,xe,0,Be,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,ge,q.__webglTexture,0,Ve(b)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,ge,q.__webglTexture,Ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(L,b,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const Me=b.depthTexture,ge=Me&&Me.isDepthTexture?Me.type:null,Ie=M(b.stencilBuffer,ge),Be=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve(b),Ie,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve(b),Ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,L)}else{const Me=b.textures;for(let ge=0;ge<Me.length;ge++){const Ie=Me[ge],Be=r.convert(Ie.format,Ie.colorSpace),_e=r.convert(Ie.type),be=P(Ie.internalFormat,Be,_e,Ie.normalized,Ie.colorSpace);Pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve(b),be,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve(b),be,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,be,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(L,b,Z){const Me=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(b.depthTexture);ge.__renderTarget=b;const Ie=Me?b.depthTexture.image[0]:b.depthTexture.image;(!ge.__webglTexture||Ie.width!==b.width||Ie.height!==b.height)&&(Ie.width=b.width,Ie.height=b.height,b.depthTexture.needsUpdate=!0),Me?Xe(b.depthTexture,0):We(b.depthTexture,0);const Be=ge.__webglTexture,_e=Ve(b),be=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,Ae=b.depthTexture.format===$i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===es)Pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,be,Be,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,be,Be,0);else if(b.depthTexture.format===$i)Pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,be,Be,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,be,Be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(L){const b=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const Me=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Me){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Me.removeEventListener("dispose",ge)};Me.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=Me}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let Me=0;Me<6;Me++)lt(b.__webglFramebuffer[Me],L,Me);else L.texture.mipmaps.length>0?lt(b.__webglFramebuffer[0],L,0):lt(b.__webglFramebuffer,L,0);else if(Z){b.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Me]),b.__webglDepthbuffer[Me]===void 0)b.__webglDepthbuffer[Me]=s.createRenderbuffer(),wt(b.__webglDepthbuffer[Me],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=b.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ie)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),wt(b.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(L,b,Z){const Me=n.get(L);b!==void 0&&je(Me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Oe(L)}function Ge(L){const b=L.texture,Z=n.get(L),Me=n.get(b);L.addEventListener("dispose",ae),U(L);const ge=L.textures,Ie=L.isWebGLCubeRenderTarget===!0,Be=ge.length>1;if(Be||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=b.version,o.memory.textures++),Ie){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let be=0;be<b.mipmaps.length;be++)Z.__webglFramebuffer[_e][be]=s.createFramebuffer()}else Z.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Be)for(let _e=0,be=ge.length;_e<be;_e++){const Ae=n.get(ge[_e]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Pe(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const be=ge[_e];Z.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[_e]);const Ae=r.convert(be.format,be.colorSpace),q=r.convert(be.type),ve=P(be.internalFormat,Ae,q,be.normalized,be.colorSpace,L.isXRRenderTarget===!0),xe=Ve(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ve,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Z.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),wt(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),bt(s.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)je(Z.__webglFramebuffer[_e][be],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else je(Z.__webglFramebuffer[_e],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);E(b)?T(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Be){for(let _e=0,be=ge.length;_e<be;_e++){const Ae=ge[_e],q=n.get(Ae);let ve=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,q.__webglTexture),bt(ve,Ae),je(Z.__webglFramebuffer,L,Ae,s.COLOR_ATTACHMENT0+_e,ve,0),E(Ae)&&T(ve)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,Me.__webglTexture),bt(_e,b),b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)je(Z.__webglFramebuffer[be],L,b,s.COLOR_ATTACHMENT0,_e,be);else je(Z.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,_e,0);E(b)?T(_e):b.mipmaps.length>0&&s.texParameteri(_e,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Oe(L)}function D(L){const b=L.textures;for(let Z=0,Me=b.length;Z<Me;Z++){const ge=b[Z];if(E(ge)&&ge.mipmapsAutoUpdate===!0){const Ie=I(L),Be=n.get(ge).__webglTexture;t.bindTexture(Ie,Be),T(Ie),t.unbindTexture()}}}const Ze=[];function Ye(L){if(L.samples>0){if(Pe(L)===!1){const b=L.textures,Z=L.width,Me=L.height;let ge=s.COLOR_BUFFER_BIT;const Ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(L),_e=b.length>1;if(_e)for(let Ae=0;Ae<b.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ae]);const q=n.get(b[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,q,0)}s.blitFramebuffer(0,0,Z,Me,0,0,Z,Me,ge,s.NEAREST),a===!0&&(Ze.length=0,Ze.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ze.push(Ie),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<b.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ae]);const q=n.get(b[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&a){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ve(L){return Math.min(i.maxSamples,L.samples)}function Pe(L){const b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $e(L){const b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function ye(L,b){const Z=L.colorSpace,Me=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==$n&&Z!==Fi&&(Wt.getTransfer(Z)===Qt?(Me!==ci||ge!==Zn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Z)),b}function ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=fe,this.getTextureUnits=Te,this.setTextureUnits=Ke,this.setTexture2D=We,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=Xe,this.rebindTextures=Fe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Pe,this.dispose=oe}function e1(s,e){function t(n,i=Fi){let r;const o=Wt.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===Sc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rd)return s.BYTE;if(n===od)return s.SHORT;if(n===Br)return s.UNSIGNED_SHORT;if(n===yc)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===cd)return s.ALPHA;if(n===hd)return s.RGB;if(n===ci)return s.RGBA;if(n===es)return s.DEPTH_COMPONENT;if(n===$i)return s.DEPTH_STENCIL;if(n===ga)return s.RED;if(n===wc)return s.RED_INTEGER;if(n===hs)return s.RG;if(n===Tc)return s.RG_INTEGER;if(n===Ec)return s.RGBA_INTEGER;if(n===Go||n===Vo||n===Wo||n===Xo)if(o===Qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===wl||n===Tl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===$o||n===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$o)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===kl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Kl||n===Zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===$l||n===Qo||n===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s1 extends Vi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",a=1,c=null,h=null,d=null,f=null,u=null,p=null;const _=typeof XRWebGLBinding<"u",m=new i1,g={},S=t.getContextAttributes();let E=null,T=null;const I=[],P=[],M=new Ue;let w=null,U=null;const k=new Wn;k.viewport=new sn;const j=new Wn;j.viewport=new sn;const ae=[k,j],ee=new j0;let F=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let We=I[me];return We===void 0&&(We=new Fa,I[me]=We),We.getTargetRaySpace()},this.getControllerGrip=function(me){let We=I[me];return We===void 0&&(We=new Fa,I[me]=We),We.getGripSpace()},this.getHand=function(me){let We=I[me];return We===void 0&&(We=new Fa,I[me]=We),We.getHandSpace()};function se(me){const We=P.indexOf(me.inputSource);if(We===-1)return;const nt=I[We];nt!==void 0&&(nt.update(me.inputSource,me.frame,c||o),nt.dispatchEvent({type:me.type,data:me.inputSource}))}function X(){i.removeEventListener("select",se),i.removeEventListener("selectstart",se),i.removeEventListener("selectend",se),i.removeEventListener("squeeze",se),i.removeEventListener("squeezestart",se),i.removeEventListener("squeezeend",se),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",te);for(let me=0;me<I.length;me++){const We=P[me];We!==null&&(P[me]=null,I[me].disconnect(We))}F=null,oe=null,m.reset();for(const me in g)delete g[me];if(e.setRenderTarget(E),u=null,f=null,d=null,i=null,T=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),U!==null){const me=U.camera;me.fov=U.fov,me.zoom=U.zoom,me.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){r=me,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){l=me,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(me){if(i=me,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",se),i.addEventListener("selectstart",se),i.addEventListener("selectend",se),i.addEventListener("squeeze",se),i.addEventListener("squeezestart",se),i.addEventListener("squeezeend",se),i.addEventListener("end",X),i.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ct=null,Xe=null;S.depth&&(Xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,nt=S.stencil?$i:es,ct=S.stencil?Xs:ui);const ut={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ut),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new On(f.textureWidth,f.textureHeight,{format:ci,type:Zn,depthTexture:new us(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const nt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,nt),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new On(u.framebufferWidth,u.framebufferHeight,{format:ci,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await i.requestReferenceSpace(l),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(me){for(let We=0;We<me.removed.length;We++){const nt=me.removed[We],ct=P.indexOf(nt);ct>=0&&(P[ct]=null,I[ct].disconnect(nt))}for(let We=0;We<me.added.length;We++){const nt=me.added[We];let ct=P.indexOf(nt);if(ct===-1){for(let ut=0;ut<I.length;ut++)if(ut>=P.length){P.push(nt),ct=ut;break}else if(P[ut]===null){P[ut]=nt,ct=ut;break}if(ct===-1)break}const Xe=I[ct];Xe&&Xe.connect(nt)}}function le(me,We){We===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(We.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(i===null)return;let We=me.near,nt=me.far;m.texture!==null&&(m.depthNear>0&&(We=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),ee.near=j.near=k.near=We,ee.far=j.far=k.far=nt,(F!==ee.near||oe!==ee.far)&&(i.updateRenderState({depthNear:ee.near,depthFar:ee.far}),F=ee.near,oe=ee.far),ee.layers.mask=me.layers.mask|6,k.layers.mask=ee.layers.mask&-5,j.layers.mask=ee.layers.mask&-3;const ct=me.parent,Xe=ee.cameras;le(ee,ct);for(let ut=0;ut<Xe.length;ut++)le(Xe[ut],ct);ee.projectionMatrix.copy(k.projectionMatrix),ee.projectionMatrixInverse.copy(k.projectionMatrixInverse),U===null&&me.isPerspectiveCamera&&(U={camera:me,fov:me.fov,zoom:me.zoom}),fe(me,ee,ct)};function fe(me,We,nt){nt===null?me.matrix.copy(We.matrixWorld):(me.matrix.copy(nt.matrixWorld),me.matrix.invert(),me.matrix.multiply(We.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(We.projectionMatrix),me.projectionMatrixInverse.copy(We.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=qs*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(f===null&&u===null))return a},this.setFoveation=function(me){a=me,f!==null&&(f.fixedFoveation=me),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=me)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ee)},this.getCameraTexture=function(me){return g[me]};let Te=null;function Ke(me,We){if(h=We.getViewerPose(c||o),p=We,h!==null){const nt=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let ct=!1;nt.length!==ee.cameras.length&&(ee.cameras.length=0,ct=!0);for(let at=0;at<nt.length;at++){const bt=nt[at];let it=null;if(u!==null)it=u.getViewport(bt);else{const Ne=d.getViewSubImage(f,bt);it=Ne.viewport,at===0&&(e.setRenderTargetTextures(T,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(T))}let Re=ae[at];Re===void 0&&(Re=new Wn,Re.layers.enable(at),Re.viewport=new sn,ae[at]=Re),Re.matrix.fromArray(bt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(bt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(it.x,it.y,it.width,it.height),at===0&&(ee.matrix.copy(Re.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),ct===!0&&ee.cameras.push(Re)}const Xe=i.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const at=d.getDepthInformation(nt[0]);at&&at.isValid&&at.texture&&m.init(at,i.renderState)}if(Xe&&Xe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let at=0;at<nt.length;at++){const bt=nt[at].camera;if(bt){let it=g[bt];it||(it=new Rd,g[bt]=it);const Re=d.getCameraImage(bt);it.sourceTexture=Re}}}}for(let nt=0;nt<I.length;nt++){const ct=P[nt],Xe=I[nt];ct!==null&&Xe!==void 0&&Xe.update(ct,We,c||o)}Te&&Te(me,We),We.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:We}),p=null}const rt=new qd;rt.setAnimationLoop(Ke),this.setAnimationLoop=function(me){Te=me},this.dispose=function(){}}}const r1=new Rt,nf=new It;nf.set(-1,0,0,0,1,0,0,0,1);function o1(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Fd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,E,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,T)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&l(m,g)):g.isPointsMaterial?a(m,g,S,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=e.get(g),E=S.envMap,T=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(T)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function l(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,S,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a1(s,e,t,n){let i={},r={};function o(S,E){const T=E.program;n.uniformBlockBinding(S,T,i[S.id])}function l(S,E){let T=i[S.id];T===void 0&&(p(S),T=a(S),i[S.id]=T,S.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(S,I);const P=e.render.frame;r[S.id]!==P&&(c(S),r[S.id]=P)}function a(S){const E=s.createBuffer(),T=S.__size,I=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,T,I),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(S){const E=i[S.id],T=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,M=T.length;P<M;P++){const w=T[P];if(Array.isArray(w))for(let U=0,k=w.length;U<k;U++)h(w[U],P,U,I);else h(w,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,E,T,I){if(f(S,E,T,I)===!0){const P=S.__offset,M=S.value;if(Array.isArray(M)){let w=0;for(let U=0;U<M.length;U++){const k=M[U],j=_(k,!0);d(k,S.__data,w),w+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,S.__data)}}function d(S,E,T){typeof S=="number"||typeof S=="boolean"?E[T]=S:S.isMatrix3?(E[T]=S.elements[0],E[T+1]=S.elements[1],E[T+2]=S.elements[2],E[T+3]=0,E[T+4]=S.elements[3],E[T+5]=S.elements[4],E[T+6]=S.elements[5],E[T+7]=0,E[T+8]=S.elements[6],E[T+9]=S.elements[7],E[T+10]=S.elements[8],E[T+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-T),T):S.toArray(E,T)}function f(S,E,T,I){const P=S.value,M=E+"_"+T;if(Array.isArray(P)){I[M]===void 0&&(I[M]=[]);const w=I[M];let U=!1;for(let k=0;k<P.length;k++)u(P[k],w,k)===!0&&(U=!0);return U}return u(P,I,M)}function u(S,E,T){if(E[T]===void 0)return typeof S=="number"||typeof S=="boolean"?E[T]=S:ArrayBuffer.isView(S)?E[T]=S.slice():E[T]=S.clone(),!0;{const I=E[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return E[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(I.equals(S)===!1)return I.copy(S),!0}}return!1}function p(S){const E=S.uniforms;let T=0;const I=16;for(let M=0,w=E.length;M<w;M++){const U=Array.isArray(E[M])?E[M]:[E[M]];for(let k=0,j=U.length;k<j;k++){const ae=U[k],ee=Array.isArray(ae.value)?ae.value:[ae.value],F=Array.isArray(E[M])||Array.isArray(ae.value);let oe=T;for(let X=0,te=ee.length;X<te;X++){const le=ee[X],fe=_(le,F),Te=T%I,Ke=Te%fe.boundary,rt=Te+Ke;T+=Ke,rt!==0&&I-rt<fe.storage&&(T+=I-rt),X===0&&(oe=T),T+=fe.storage}const se=ae.type==="int"?Int32Array:ae.type==="uint"?Uint32Array:Float32Array;ae.__data=new se((T-oe)/Float32Array.BYTES_PER_ELEMENT),ae.__offset=oe}}const P=T%I;return P>0&&(T+=I-P),S.__size=T,S.__cache={},this}function _(S,E){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(S){const E=S.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:l,dispose:g}}const l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function c1(){return _i===null&&(_i=new xa(l1,16,16,hs,Un),_i.name="DFG_LUT",_i.minFilter=An,_i.magFilter=An,_i.wrapS=zn,_i.wrapT=zn,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class h1{constructor(e={}){const{canvas:t=tp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Zn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=u,m=new Set([Ec,Tc,wc]),g=new Set([Zn,ui,Br,Xs,Sc,bc]),S=new Uint32Array(4),E=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const M=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let j=!1,ae=null,ee=null,F=null,oe=null;this._outputColorSpace=xn;let se=0,X=0,te=null,le=-1,fe=null;const Te=new sn,Ke=new sn;let rt=null;const me=new _t(0);let We=0,nt=t.width,ct=t.height,Xe=1,ut=null,Ut=null;const at=new sn(0,0,nt,ct),bt=new sn(0,0,nt,ct);let it=!1;const Re=new qr,Ne=new Uc;let Je=!1,et=!1;const je=new Rt,wt=new V,lt=new sn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ge(){return te===null?Xe:1}let D=n;function Ze(v,R){return t.getContext(v,R)}let Ye,Ve,Pe,$e,ye,ue,L,b,Z,Me,ge,Ie,Be,_e,be,Ae,q,ve,xe,ke,ie,J,pe;try{const v={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",B,!1),D===null){const R="webgl2";if(D=Ze(R,v),D===null)throw Ze(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",B,!1),Ct("WebGLRenderer: "+v.message),v}function De(){Ye=new fx(D),Ye.init(),ie=new e1(D,Ye),Ve=new nx(D,Ye,e,ie),Pe=new Qv(D,Ye),Ve.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),ee=D.createFramebuffer(),F=D.createFramebuffer(),oe=D.createFramebuffer(),$e=new gx(D),ye=new Bv,ue=new jv(D,Ye,Pe,ye,Ve,ie,$e),L=new dx(k),b=new xm(D),J=new ex(D,b),Z=new px(D,b,$e,J),Me=new xx(D,Z,b,J,$e),ve=new _x(D,Ve,ue),be=new ix(ye),ge=new Fv(k,L,Ye,Ve,J,be),Ie=new o1(k,ye),Be=new zv,_e=new qv(Ye),q=new j_(k,L,Pe,Me,p,a),Ae=new $v(k,Me,Ve),pe=new a1(D,$e,Ve,Pe),xe=new tx(D,Ye,$e),ke=new mx(D,Ye,$e),$e.programs=ge.programs,k.capabilities=Ve,k.extensions=Ye,k.properties=ye,k.renderLists=Be,k.shadowMap=Ae,k.state=Pe,k.info=$e}_!==Zn&&(U=new Mx(_,t.width,t.height,l,i,r));const x=new s1(k,D);this.xr=x,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Ye.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ye.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(v){v!==void 0&&(Xe=v,this.setSize(nt,ct,!1))},this.getSize=function(v){return v.set(nt,ct)},this.setSize=function(v,R,O=!0){if(x.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=v,ct=R,t.width=Math.floor(v*Xe),t.height=Math.floor(R*Xe),O===!0&&(t.style.width=v+"px",t.style.height=R+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(nt*Xe,ct*Xe).floor()},this.setDrawingBufferSize=function(v,R,O){nt=v,ct=R,Xe=O,t.width=Math.floor(v*O),t.height=Math.floor(R*O),this.setViewport(0,0,v,R)},this.setEffects=function(v){if(_===Zn){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let R=0;R<v.length;R++)if(v[R].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Te)},this.getViewport=function(v){return v.copy(at)},this.setViewport=function(v,R,O,C){v.isVector4?at.set(v.x,v.y,v.z,v.w):at.set(v,R,O,C),Pe.viewport(Te.copy(at).multiplyScalar(Ge()).round())},this.getScissor=function(v){return v.copy(bt)},this.setScissor=function(v,R,O,C){v.isVector4?bt.set(v.x,v.y,v.z,v.w):bt.set(v,R,O,C),Pe.scissor(Ke.copy(bt).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){Pe.setScissorTest(it=v)},this.setOpaqueSort=function(v){ut=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(v=!0,R=!0,O=!0){let C=0;if(v){let z=!1;if(te!==null){const K=te.texture.format;z=m.has(K)}if(z){const K=te.texture.type,he=g.has(K),we=q.getClearColor(),Ce=q.getClearAlpha(),Qe=we.r,st=we.g,ot=we.b;he?(S[0]=Qe,S[1]=st,S[2]=ot,S[3]=Ce,D.clearBufferuiv(D.COLOR,0,S)):(E[0]=Qe,E[1]=st,E[2]=ot,E[3]=Ce,D.clearBufferiv(D.COLOR,0,E))}else C|=D.COLOR_BUFFER_BIT}R&&(C|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),O&&(C|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&D.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),ae=v},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",B,!1),q.dispose(),Be.dispose(),_e.dispose(),ue.dispose(),ye.dispose(),L.dispose(),Me.dispose(),Z.dispose(),J.dispose(),pe.dispose(),ge.dispose(),x.dispose(),x.removeEventListener("sessionstart",Pt),x.removeEventListener("sessionend",Mt),qe.stop()};function H(v){v.preventDefault(),ta("WebGLRenderer: Context Lost."),j=!0}function Y(){ta("WebGLRenderer: Context Restored."),j=!1;const v=$e.autoReset,R=Ae.enabled,O=Ae.autoUpdate,C=Ae.needsUpdate,z=Ae.type;De(),$e.autoReset=v,Ae.enabled=R,Ae.autoUpdate=O,Ae.needsUpdate=C,Ae.type=z}function B(v){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function re(v){const R=v.target;R.removeEventListener("dispose",re),ce(R)}function ce(v){ze(v),ye.remove(v)}function ze(v){const R=ye.get(v).programs;R!==void 0&&(R.forEach(function(O){ge.releaseProgram(O)}),v.isShaderMaterial&&ge.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,O,C,z,K){R===null&&(R=Oe);const he=z.isMesh&&z.matrixWorld.determinantAffine()<0,we=ne(v,R,O,C,z);Pe.setMaterial(C,he);let Ce=O.index,Qe=1;if(C.wireframe===!0){if(Ce=Z.getWireframeAttribute(O),Ce===void 0)return;Qe=2}const st=O.drawRange,ot=O.attributes.position;let He=st.start*Qe,vt=(st.start+st.count)*Qe;K!==null&&(He=Math.max(He,K.start*Qe),vt=Math.min(vt,(K.start+K.count)*Qe)),Ce!==null?(He=Math.max(He,0),vt=Math.min(vt,Ce.count)):ot!=null&&(He=Math.max(He,0),vt=Math.min(vt,ot.count));const yt=vt-He;if(yt<0||yt===1/0)return;J.setup(z,C,we,O,Ce);let Et,Nt=xe;if(Ce!==null&&(Et=b.get(Ce),Nt=ke,Nt.setIndex(Et)),z.isMesh)C.wireframe===!0?(Pe.setLineWidth(C.wireframeLinewidth*Ge()),Nt.setMode(D.LINES)):Nt.setMode(D.TRIANGLES);else if(z.isLine){let rn=C.linewidth;rn===void 0&&(rn=1),Pe.setLineWidth(rn*Ge()),z.isLineSegments?Nt.setMode(D.LINES):z.isLineLoop?Nt.setMode(D.LINE_LOOP):Nt.setMode(D.LINE_STRIP)}else z.isPoints?Nt.setMode(D.POINTS):z.isSprite&&Nt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const rn=z._multiDrawStarts,gt=z._multiDrawCounts,hn=z._multiDrawCount,Ot=Ce?b.get(Ce).bytesPerElement:1,si=ye.get(C).currentProgram.getUniforms();for(let fn=0;fn<hn;fn++)si.setValue(D,"_gl_DrawID",fn),Nt.render(rn[fn]/Ot,gt[fn])}else if(z.isInstancedMesh)Nt.renderInstances(He,yt,z.count);else if(O.isInstancedBufferGeometry){const rn=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gt=Math.min(O.instanceCount,rn);Nt.renderInstances(He,yt,gt)}else Nt.render(He,yt)};function mt(v,R,O,C){ae!==null&&v.isNodeMaterial&&ae.setObject(C,v),Je===!0&&be.setState(v,O,!1),v.transparent===!0&&v.side===ln&&v.forceSinglePass===!1?(v.side=Nn,v.needsUpdate=!0,W(v,R,C),v.side=ji,v.needsUpdate=!0,W(v,R,C),v.side=ln):W(v,R,C)}this.compile=function(v,R,O=null){O===null&&(O=v),ae!==null&&ae.renderStart(v,R,O),P=_e.get(O),P.init(R),w.push(P),O.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(P.pushLight(z),z.castShadow&&P.pushShadow(z))}),v!==O&&v.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(P.pushLight(z),z.castShadow&&P.pushShadow(z))}),P.setupLights(),ae!==null&&ae.updateLights(P.state.lightsArray),et=this.localClippingEnabled,Je=be.init(this.clippingPlanes,et),Je===!0&&be.setGlobalState(this.clippingPlanes,R),ae!==null&&Ae.render(P.state.shadowsArray,O,R);const C=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const K=z.material;if(K)if(Array.isArray(K))for(let he=0;he<K.length;he++){const we=K[he];mt(we,O,R,z),C.add(we)}else mt(K,O,R,z),C.add(K)}),P=w.pop(),ae!==null&&ae.renderEnd(),C},this.compileAsync=function(v,R,O=null){const C=this.compile(v,R,O);return new Promise(z=>{function K(){if(C.forEach(function(he){const Ce=ye.get(he).currentProgram;(Ce===void 0||Ce.isReady())&&C.delete(he)}),C.size===0){z(v);return}setTimeout(K,10)}Ye.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let xt=null;function ft(v){xt&&xt(v)}function Pt(){qe.stop()}function Mt(){qe.start()}const qe=new qd;qe.setAnimationLoop(ft),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(v){xt=v,x.setAnimationLoop(v),v===null?qe.stop():qe.start()},x.addEventListener("sessionstart",Pt),x.addEventListener("sessionend",Mt),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;ae!==null&&ae.renderStart(v,R);const O=x.enabled===!0&&x.isPresenting===!0,C=U!==null&&(te===null||O)&&U.begin(k,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(x.cameraAutoUpdate===!0&&x.updateCamera(R),R=x.getCamera()),v.isScene===!0&&v.onBeforeRender(k,v,R,te),P=_e.get(v,w.length),P.init(R),P.state.textureUnits=ue.getTextureUnits(),w.push(P),je.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?Ne.setFromArrayCamera(R):Re.setFromProjectionMatrix(je,hi,R.reversedDepth),et=this.localClippingEnabled,Je=be.init(this.clippingPlanes,et),I=Be.get(v,M.length),I.init(),M.push(I),this.info.render.frame++,x.enabled===!0&&x.isPresenting===!0){const he=k.xr.getDepthSensingMesh();he!==null&&ht(he,R,-1/0,k.sortObjects)}ht(v,R,0,k.sortObjects),I.finish(),ae!==null&&ae.updateLights(P.state.lightsArray),k.sortObjects===!0&&I.sort(ut,Ut),Fe=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Fe&&q.addToRenderList(I,v),this.info.autoReset===!0&&this.info.reset(),Je===!0&&be.beginShadows();const z=P.state.shadowsArray;if(Ae.render(z,v,R),Je===!0&&be.endShadows(),(C&&U.hasRenderPass())===!1){const he=I.opaque,we=I.transmissive;if(P.setupLights(),R.isArrayCamera){const Ce=R.cameras;if(we.length>0)for(let Qe=0,st=Ce.length;Qe<st;Qe++){const ot=Ce[Qe];tn(he,we,v,ot)}Fe&&q.render(v);for(let Qe=0,st=Ce.length;Qe<st;Qe++){const ot=Ce[Qe];Yt(I,v,ot,ot.viewport)}}else we.length>0&&tn(he,we,v,R),Fe&&q.render(v),Yt(I,v,R)}te!==null&&X===0&&(ue.updateMultisampleRenderTarget(te),ue.updateRenderTargetMipmap(te)),C&&U.end(k),v.isScene===!0&&v.onAfterRender(k,v,R),J.resetDefaultState(),le=-1,fe=null,w.pop(),w.length>0?(P=w[w.length-1],ue.setTextureUnits(P.state.textureUnits),Je===!0&&be.setGlobalState(k.clippingPlanes,P.state.camera)):P=null,M.pop(),M.length>0?I=M[M.length-1]:I=null,ae!==null&&ae.renderEnd()};function ht(v,R,O,C){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)P.pushLight(v),v.castShadow&&P.pushShadow(v);else if(v.isSprite){const he=R.isArrayCamera?Ne:Re;if(!v.frustumCulled||v.intersectsFrustum(he)){C&&lt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(je);const we=Me.update(v),Ce=v.material;Ce.visible&&I.push(v,we,Ce,O,lt.z,null,R)}}else if(v.isMesh||v.isLine||v.isPoints){const he=R.isArrayCamera?Ne:Re;if(!v.frustumCulled||v.intersectsFrustum(he)){const we=Me.update(v),Ce=v.material;if(C&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),lt.copy(v.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),lt.copy(we.boundingSphere.center)),lt.applyMatrix4(v.matrixWorld).applyMatrix4(je)),Array.isArray(Ce)){const Qe=we.groups;for(let st=0,ot=Qe.length;st<ot;st++){const He=Qe[st],vt=Ce[He.materialIndex];vt&&vt.visible&&I.push(v,we,vt,O,lt.z,He,R)}}else Ce.visible&&I.push(v,we,Ce,O,lt.z,null,R)}}}const K=v.children;for(let he=0,we=K.length;he<we;he++)ht(K[he],R,O,C)}function Yt(v,R,O,C){const{opaque:z,transmissive:K,transparent:he}=v;P.setupLightsView(O),Je===!0&&be.setGlobalState(k.clippingPlanes,O),C&&Pe.viewport(Te.copy(C)),z.length>0&&pn(z,R,O),K.length>0&&pn(K,R,O),he.length>0&&pn(he,R,O),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function tn(v,R,O,C){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[C.id]===void 0){const He=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[C.id]=new On(1,1,{generateMipmaps:!0,type:He?Un:Zn,minFilter:yi,samples:Math.max(4,Ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const K=P.state.transmissionRenderTarget[C.id],he=C.viewport||Te;K.setSize(he.z*k.transmissionResolutionScale,he.w*k.transmissionResolutionScale);const we=k.getRenderTarget(),Ce=k.getActiveCubeFace(),Qe=k.getActiveMipmapLevel();k.setRenderTarget(K),k.getClearColor(me),We=k.getClearAlpha(),We<1&&k.setClearColor(16777215,.5),k.clear(),Fe&&q.render(O);const st=k.toneMapping;k.toneMapping=Hi;const ot=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),P.setupLightsView(C),Je===!0&&be.setGlobalState(k.clippingPlanes,C),pn(v,O,C),ue.updateMultisampleRenderTarget(K),ue.updateRenderTargetMipmap(K),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let vt=0,yt=R.length;vt<yt;vt++){const Et=R[vt],{object:Nt,geometry:rn,material:gt,group:hn}=Et;if(gt.side===ln&&Nt.layers.test(C.layers)){const Ot=gt.side;gt.side=Nn,gt.needsUpdate=!0,A(Nt,O,C,rn,gt,hn),gt.side=Ot,gt.needsUpdate=!0,He=!0}}He===!0&&(ue.updateMultisampleRenderTarget(K),ue.updateRenderTargetMipmap(K))}k.setRenderTarget(we,Ce,Qe),k.setClearColor(me,We),ot!==void 0&&(C.viewport=ot),k.toneMapping=st}function pn(v,R,O){const C=R.isScene===!0?R.overrideMaterial:null;for(let z=0,K=v.length;z<K;z++){const he=v[z],{object:we,geometry:Ce,group:Qe}=he;let st=he.material;st.allowOverride===!0&&C!==null&&(st=C),we.layers.test(O.layers)&&A(we,R,O,Ce,st,Qe)}}function A(v,R,O,C,z,K){ae!==null&&z.isNodeMaterial&&ae.setObject(v,z),v.onBeforeRender(k,R,O,C,z,K),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(k,R,O,C,v,K),z.transparent===!0&&z.side===ln&&z.forceSinglePass===!1?(z.side=Nn,z.needsUpdate=!0,k.renderBufferDirect(O,R,C,z,v,K),z.side=ji,z.needsUpdate=!0,k.renderBufferDirect(O,R,C,z,v,K),z.side=ln):k.renderBufferDirect(O,R,C,z,v,K),v.onAfterRender(k,R,O,C,z,K)}function N(v){let R=0;for(const O of v)O.texture!==null&&R++;return R}function W(v,R,O){R.isScene!==!0&&(R=Oe);const C=ye.get(v),z=P.state.lights,K=P.state.shadowsArray,he=z.state.version,we=ge.getParameters(v,z.state,K,R,O,P.state.lightProbeGridArray),Ce=ge.getProgramCacheKey(we);let Qe=C.programs;C.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,C.fog=R.fog;const st=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;C.envMap=L.get(v.envMap||C.environment,st),C.envMapRotation=C.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,Qe===void 0&&(v.addEventListener("dispose",re),Qe=new Map,C.programs=Qe,C.programVariants=new Map);let ot=Qe.get(Ce);if(ot!==void 0){if(C.currentProgram===ot&&C.lightsStateVersion===he)return Se(v,we),ot}else we.uniforms=ge.getUniforms(v),ae!==null&&v.isNodeMaterial&&ae.build(v,O,we),v.onBeforeCompile(we,k),ot=ge.acquireProgram(we,Ce),Qe.set(Ce,ot),C.uniforms=we.uniforms;const He=C.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(He.clippingPlanes=be.uniform),Se(v,we),C.needsLights=$(v),C.lightsStateVersion=he,C.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.sunLights.value=z.state.sun,He.sunLightShadows.value=z.state.sunShadow,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.sunShadowMatrix.value=z.state.sunShadowMatrix,He.sunShadowCascade.value=z.state.sunShadowCascade,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),C.numLightProbeGrids=N(P.state.lightProbeGridArray),C.currentProgram=ot,C.uniformsList=null,ot}function Q(v,R,O,C,z){const K=ye.get(v),he=K.currentProgram.id+","+C+","+z;let we=K.programVariants.get(he);return we===void 0?(we=W(v,R,O),K.programVariants.set(he,we)):(K.currentProgram=we,K.uniformsList=null,K.outputColorSpace=C,K.toneMapping=z),we}function de(v){if(v.uniformsList===null){const R=v.currentProgram.getUniforms();v.uniformsList=Yo.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function Se(v,R){const O=ye.get(v);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.batchingColor=R.batchingColor,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.instancingMorph=R.instancingMorph,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function ne(v,R,O,C,z){R.isScene!==!0&&(R=Oe),ue.resetTextureUnits();const K=R.fog,he=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?R.environment:null,we=te===null?k.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Wt.workingColorSpace,Ce=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Qe=L.get(C.envMap||he,Ce),st=C.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ot=!!O.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),He=!!O.morphAttributes.position,vt=!!O.morphAttributes.normal,yt=!!O.morphAttributes.color;let Et=Hi;C.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Et=k.toneMapping);const Nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rn=Nt!==void 0?Nt.length:0,gt=ye.get(C),hn=P.state.lights;if(Je===!0&&(et===!0||v!==fe)){const Ft=v===fe&&C.id===le;be.setState(C,v,Ft)}let Ot=!1,si=!1;C.version===gt.__version?gt.needsLights&&gt.lightsStateVersion!==hn.state.version||z.isBatchedMesh&&gt.batching===!1||!z.isBatchedMesh&&gt.batching===!0||z.isBatchedMesh&&gt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&gt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&gt.instancing===!1||!z.isInstancedMesh&&gt.instancing===!0||z.isSkinnedMesh&&gt.skinning===!1||!z.isSkinnedMesh&&gt.skinning===!0||z.isInstancedMesh&&gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&gt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&gt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&gt.instancingMorph===!1&&z.morphTexture!==null||gt.envMap!==Qe||C.fog===!0&&gt.fog!==K||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==be.numPlanes||gt.numIntersection!==be.numIntersection)||gt.vertexAlphas!==st||gt.vertexTangents!==ot||gt.morphTargets!==He||gt.morphNormals!==vt||gt.morphColors!==yt||gt.morphTargetsCount!==rn||gt.numLightProbeGrids!==N(P.state.lightProbeGridArray)?Ot=!0:(gt.outputColorSpace!==we||gt.toneMapping!==Et)&&(si=!0):(Ot=!0,gt.__version=C.version);let fn=gt.currentProgram;(Ot===!0||si===!0)&&(fn=si===!0?Q(C,R,z,we,Et):W(C,R,z),ae&&C.isNodeMaterial&&ae.onUpdateProgram(C,fn,gt));let mi=!1,Gn=!1,qn=!1;const St=fn.getUniforms(),Vt=gt.uniforms;if(Pe.useProgram(fn.program)&&(mi=!0,Gn=!0,qn=!0),C.id!==le&&(le=C.id,Gn=!0),mi||fe!==v){Pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),St.setValue(D,"projectionMatrix",v.projectionMatrix),St.setValue(D,"viewMatrix",v.matrixWorldInverse);const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(D,wt.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&St.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),fe!==v&&(fe=v,Gn=!0,qn=!0)}if(gt.needsLights&&(hn.state.sunShadowMap.length>0&&St.setValue(D,"sunShadowMap",hn.state.sunShadowMap,ue),hn.state.directionalShadowMap.length>0&&St.setValue(D,"directionalShadowMap",hn.state.directionalShadowMap,ue),hn.state.spotShadowMap.length>0&&St.setValue(D,"spotShadowMap",hn.state.spotShadowMap,ue),hn.state.pointShadowMap.length>0&&St.setValue(D,"pointShadowMap",hn.state.pointShadowMap,ue)),z.isSkinnedMesh){St.setOptional(D,z,"bindMatrix"),St.setOptional(D,z,"bindMatrixInverse");const Ft=z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),St.setValue(D,"boneTexture",Ft.boneTexture,ue))}z.isBatchedMesh&&(St.setOptional(D,z,"batchingTexture"),St.setValue(D,"batchingTexture",z._matricesTexture,ue),St.setOptional(D,z,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",z._indirectTexture,ue),St.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",z._colorsTexture,ue));const Jt=O.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ve.update(z,O,fn),(Gn||gt.receiveShadow!==z.receiveShadow)&&(gt.receiveShadow=z.receiveShadow,St.setValue(D,"receiveShadow",z.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&R.environment!==null&&(Vt.envMapIntensity.value=R.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=c1()),Gn){if(St.setValue(D,"toneMappingExposure",k.toneMappingExposure),gt.needsLights&&y(Vt,qn),K&&C.fog===!0&&Ie.refreshFogUniforms(Vt,K),Ie.refreshMaterialUniforms(Vt,C,Xe,ct,P.state.transmissionRenderTarget[v.id]),gt.needsLights&&gt.numLightProbeGrids>0){const Ft=T;let kt=0;for(const $t of P.state.lightProbeGridArray)$t.texture!==null&&(Ft.textures[kt]=$t.texture,Ft.min[kt]=$t.boundingBox.min,Ft.max[kt]=$t.boundingBox.max,Ft.resolution[kt]=$t.resolution,kt++);for(const $t in Ft)Ft[$t].length=kt;Vt.probesSH.value=Ft.textures,Vt.probesMin.value=Ft.min,Vt.probesMax.value=Ft.max,Vt.probesResolution.value=Ft.resolution}Yo.upload(D,de(gt),Vt,ue)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Yo.upload(D,de(gt),Vt,ue),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&St.setValue(D,"center",z.center),St.setValue(D,"modelViewMatrix",z.modelViewMatrix),St.setValue(D,"normalMatrix",z.normalMatrix),St.setValue(D,"modelMatrix",z.matrixWorld),C.uniformsGroups!==void 0){const Ft=C.uniformsGroups;for(let kt=0,$t=Ft.length;kt<$t;kt++){const Cn=Ft[kt];pe.update(Cn,fn),pe.bind(Cn,fn)}}return fn}function y(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.sunLights.needsUpdate=R,v.sunLightShadows.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function $(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,R,O){const C=ye.get(v);C.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),ye.get(v.texture).__webglTexture=R,ye.get(v.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:O,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,R){const O=ye.get(v);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,O=0){te=v,se=R,X=O;let C=null,z=!1,K=!1;if(v){const we=ye.get(v);if(we.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(D.FRAMEBUFFER,we.__webglFramebuffer),Te.copy(v.viewport),Ke.copy(v.scissor),rt=v.scissorTest,Pe.viewport(Te),Pe.scissor(Ke),Pe.setScissorTest(rt),le=-1;return}else if(we.__webglFramebuffer===void 0)ue.setupRenderTarget(v);else if(we.__hasExternalTextures)ue.rebindTextures(v,ye.get(v.texture).__webglTexture,ye.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const st=v.depthTexture;if(we.__boundDepthTexture!==st){if(st!==null&&ye.has(st)&&(v.width!==st.image.width||v.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(K=!0);const Qe=ye.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Qe[R])?C=Qe[R][O]:C=Qe[R],z=!0):v.samples>0&&ue.useMultisampledRTT(v)===!1?C=ye.get(v).__webglMultisampledFramebuffer:Array.isArray(Qe)?C=Qe[O]:C=Qe,Te.copy(v.viewport),Ke.copy(v.scissor),rt=v.scissorTest}else Te.copy(at).multiplyScalar(Xe).floor(),Ke.copy(bt).multiplyScalar(Xe).floor(),rt=it;if(O!==0&&(C=ee),Pe.bindFramebuffer(D.FRAMEBUFFER,C)&&Pe.drawBuffers(v,C),Pe.viewport(Te),Pe.scissor(Ke),Pe.setScissorTest(rt),z){const we=ye.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,we.__webglTexture,O)}else if(K){const we=R;for(let Ce=0;Ce<v.textures.length;Ce++){const Qe=ye.get(v.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Qe.__webglTexture,O,we)}}else if(v!==null&&O!==0){const we=ye.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,O)}le=-1};function G(v){const R=ye.get(v);return(R.__readFormat!==v.format||R.__readType!==v.type)&&(R.__readFormat=v.format,R.__readType=v.type,R.__formatReadable=Ve.textureFormatReadable(v.format),R.__typeReadable=Ve.textureTypeReadable(v.type)),R}this.readRenderTargetPixels=function(v,R,O,C,z,K,he,we=0){if(!(v&&v.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(Ce=Ce[he],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Pe.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Qe=v.textures[we],st=Qe.format,ot=Qe.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we);const He=G(Qe);if(He.__formatReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-C&&O>=0&&O<=v.height-z&&D.readPixels(R,O,C,z,ie.convert(st),ie.convert(ot),K)}finally{const Qe=te!==null?ye.get(te).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(v,R,O,C,z,K,he,we=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(Ce=Ce[he],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(R>=0&&R<=v.width-C&&O>=0&&O<=v.height-z){Pe.bindFramebuffer(D.FRAMEBUFFER,Ce);const Qe=v.textures[we],st=Qe.format,ot=Qe.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we);const He=G(Qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.bufferData(D.PIXEL_PACK_BUFFER,K.byteLength,D.STREAM_READ),D.readPixels(R,O,C,z,ie.convert(st),ie.convert(ot),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const yt=te!==null?ye.get(te).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,yt);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await np(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,K),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(vt),D.deleteSync(Et),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,O=0){const C=Math.pow(2,-O),z=Math.floor(v.image.width*C),K=Math.floor(v.image.height*C),he=R!==null?R.x:0,we=R!==null?R.y:0;ue.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,he,we,z,K),Pe.unbindTexture()},this.copyTextureToTexture=function(v,R,O=null,C=null,z=0,K=0){let he,we,Ce,Qe,st,ot,He,vt,yt;const Et=v.isCompressedTexture?v.mipmaps[K]:v.image;if(O!==null)he=O.max.x-O.min.x,we=O.max.y-O.min.y,Ce=O.isBox3?O.max.z-O.min.z:1,Qe=O.min.x,st=O.min.y,ot=O.isBox3?O.min.z:0;else{const St=Math.pow(2,-z);he=Math.floor(Et.width*St),we=Math.floor(Et.height*St),v.isDataArrayTexture?Ce=Et.depth:v.isData3DTexture?Ce=Math.floor(Et.depth*St):Ce=1,Qe=0,st=0,ot=0}C!==null?(He=C.x,vt=C.y,yt=C.z):(He=0,vt=0,yt=0);const Nt=ie.convert(R.format),rn=ie.convert(R.type);let gt;R.isData3DTexture?(ue.setTexture3D(R,0),gt=D.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(ue.setTexture2DArray(R,0),gt=D.TEXTURE_2D_ARRAY):(ue.setTexture2D(R,0),gt=D.TEXTURE_2D),Pe.activeTexture(D.TEXTURE0),Pe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),Pe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Pe.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);const hn=Pe.getParameter(D.UNPACK_ROW_LENGTH),Ot=Pe.getParameter(D.UNPACK_IMAGE_HEIGHT),si=Pe.getParameter(D.UNPACK_SKIP_PIXELS),fn=Pe.getParameter(D.UNPACK_SKIP_ROWS),mi=Pe.getParameter(D.UNPACK_SKIP_IMAGES);Pe.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),Pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),Pe.pixelStorei(D.UNPACK_SKIP_PIXELS,Qe),Pe.pixelStorei(D.UNPACK_SKIP_ROWS,st),Pe.pixelStorei(D.UNPACK_SKIP_IMAGES,ot);const Gn=v.isDataArrayTexture||v.isData3DTexture,qn=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){const St=ye.get(v),Vt=ye.get(R),Jt=ye.get(St.__renderTarget),Ft=ye.get(Vt.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let kt=0;kt<Ce;kt++)Gn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(v).__webglTexture,z,ot+kt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,K,yt+kt)),D.blitFramebuffer(Qe,st,Qe+he,st+we,He,vt,He+he,vt+we,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||ye.has(v)){const St=ye.get(v),Vt=ye.get(R);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,F),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,oe);for(let Jt=0;Jt<Ce;Jt++)Gn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,z,ot+Jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,z),qn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vt.__webglTexture,K,yt+Jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vt.__webglTexture,K),z!==0?D.blitFramebuffer(Qe,st,Qe+he,st+we,He,vt,He+he,vt+we,D.COLOR_BUFFER_BIT,D.NEAREST):qn?D.copyTexSubImage3D(gt,K,He,vt,yt+Jt,Qe,st,he,we):D.copyTexSubImage2D(gt,K,He,vt,Qe,st,he,we);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qn?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(gt,K,He,vt,yt,he,we,Ce,Nt,rn,Et.data):R.isCompressedArrayTexture?D.compressedTexSubImage3D(gt,K,He,vt,yt,he,we,Ce,Nt,Et.data):D.texSubImage3D(gt,K,He,vt,yt,he,we,Ce,Nt,rn,Et):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,K,He,vt,he,we,Nt,rn,Et.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,K,He,vt,Et.width,Et.height,Nt,Et.data):D.texSubImage2D(D.TEXTURE_2D,K,He,vt,he,we,Nt,rn,Et);Pe.pixelStorei(D.UNPACK_ROW_LENGTH,hn),Pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot),Pe.pixelStorei(D.UNPACK_SKIP_PIXELS,si),Pe.pixelStorei(D.UNPACK_SKIP_ROWS,fn),Pe.pixelStorei(D.UNPACK_SKIP_IMAGES,mi),K===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&D.generateMipmap(gt),Pe.unbindTexture()},this.initRenderTarget=function(v){ye.get(v).__webglFramebuffer===void 0&&ue.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ue.setTextureCube(v,0):v.isData3DTexture?ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ue.setTexture2DArray(v,0):ue.setTexture2D(v,0),Pe.unbindTexture()},this.resetState=function(){se=0,X=0,te=null,Pe.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}const Pu={type:"change"},qc={type:"start"},sf={type:"end"},Oo=new $s,Lu=new Ui,u1=Math.cos(70*na.DEG2RAD),Mn=new V,Vn=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cl=1e-6;class d1 extends gm{constructor(e,t=null){super(e,t),this.state=Zt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new cn,this._lastTargetPosition=new V,this._quat=new cn().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new au,this._sphericalDelta=new au,this._scale=1,this._panOffset=new V,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new V,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=p1.bind(this),this._onPointerDown=f1.bind(this),this._onPointerUp=m1.bind(this),this._onContextMenu=S1.bind(this),this._onMouseWheel=x1.bind(this),this._onKeyDown=v1.bind(this),this._onTouchStart=M1.bind(this),this._onTouchMove=y1.bind(this),this._onMouseDown=g1.bind(this),this._onMouseMove=_1.bind(this),this._interceptControlDown=b1.bind(this),this._interceptControlUp=w1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Zt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pu),this.update(),this.state=Zt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Vn:n>Math.PI&&(n-=Vn),i<-Math.PI?i+=Vn:i>Math.PI&&(i-=Vn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=Mn.length();o=this._clampDistance(l*this._scale);const a=l-o;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),r=!!a}else if(this.object.isOrthographicCamera){const l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=a!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),o=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<u1?this.object.lookAt(this.target):(Lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Lu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cl||this._lastTargetPosition.distanceToSquared(this.target)>cl?(this.dispatchEvent(Pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Mn.copy(i).sub(this.target);let r=Mn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function f1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function p1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function m1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=Zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function g1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Zt.DOLLY;break;case Bs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Zt.ROTATE}break;case Bs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(qc)}function _1(s){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function x1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(s.preventDefault(),this.dispatchEvent(qc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sf))}function v1(s){this.enabled!==!1&&this._handleKeyDown(s)}function M1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1){this.state=Zt.NONE;break}this._handleTouchStartRotate(s),this.state=Zt.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1){this.state=Zt.NONE;break}this._handleTouchStartPan(s),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Zt.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(qc)}function y1(s){switch(this._trackPointer(s),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Zt.NONE}}function S1(s){this.enabled!==!1&&s.preventDefault()}function b1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function w1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T1=new ya(-1,1,1,-1,0,1);class E1 extends en{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const A1=new E1;class Yc{constructor(e){this._mesh=new Dt(A1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,T1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cc extends ir{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$r.clone(e.uniforms),this.material=new Hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Du extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class R1 extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class C1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cc(Ko),this.copyPass.material.blending=ls,this.timer=new em}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Du!==void 0&&(o instanceof Du?n=!0:o instanceof R1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Fo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class P1 extends ir{constructor(){super(),this.isOutputPass=!0,this.uniforms=$r.clone(Fo.uniforms),this.material=new Bd({name:Fo.name,uniforms:this.uniforms,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader}),this._fsQuad=new Yc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class L1 extends ir{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _t}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const D1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Js extends ir{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new On(r,o,{type:Un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new On(r,o,{type:Un,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new On(r,o,{type:Un,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const l=D1;this.highPassUniforms=$r.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Hn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$r.clone(Ko.uniforms),this.blendMaterial=new Hn({uniforms:this.copyUniforms,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,premultipliedAlpha:!0,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new Rn,this._fsQuad=new Yc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=Js.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Js.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<e;o+=2){const l=t[o],a=o+1<e?t[o+1]:0,c=l+a;i.push((o*l+(o+1)*a)/c),r.push(c)}return new Hn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Js.BlurDirectionX=new Ue(1,0);Js.BlurDirectionY=new Ue(0,1);function Kc(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},l=s[0].morphTargetsRelative,a=new en;a.morphTargetsRelative=l;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}a.setIndex(d)}for(const h in r){const d=Iu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][f]);const p=Iu(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(p)}}}return a}function Iu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),l=new En(o,t,n);let a=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=a/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){const _=h.getComponent(f,p);l.setComponent(f+d,p,_)}}else o.set(h.array,a);a+=h.count*t}return i!==void 0&&(l.gpuType=i),l}function Nu(s,e){if(e===Wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===jl||e===ud){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===jl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const{cos:fs,sin:Si,atan2:Zc,hypot:Nr,PI:os}=Math,Lt=.22,Qi=(s,e,t)=>{const n=s.ry;return[s.x+e*fs(n)+t*Si(n),s.z-e*Si(n)+t*fs(n)]},eo=(s,e,t)=>{const n=s.ry,i=e-s.x,r=t-s.z;return[i*fs(n)-r*Si(n),i*Si(n)+r*fs(n)]},In=(s,e,t,n)=>Zc(t-s,n-e),I1={S:[0,1],N:[0,-1],E:[1,0],W:[-1,0]};function _r(s){const{side:e,off:t}=s.door,n=I1[e],i=e==="S"?[t,s.d/2]:e==="N"?[t,-s.d/2]:e==="E"?[s.w/2,t]:[-s.w/2,t],r=[i[0]-n[0]*1.1,i[1]-n[1]*1.1],o=[i[0]+n[0]*1.5,i[1]+n[1]*1.5];return{...s,doorLocal:i,doorN:n,inLocal:r,outLocal:o,inW:Qi(s,...r),outW:Qi(s,...o),hubW:Qi(s,...s.hub)}}function Bo(s){return{...s,hubW:Qi(s,...s.hub),entriesW:s.entries.map(e=>Qi(s,...e))}}const ps=[_r({id:"war",name:"War hall",kind:"house",x:-6,z:-22,ry:.06,w:15,d:9,wallH:3,door:{side:"S",off:0,width:2.4},hub:[0,2.7],floor:"war",desc:"Where the Lead/PM plans the run and keeps the task board."}),_r({id:"library",name:"Library",kind:"house",x:24,z:-21,ry:-.32,w:10,d:8,wallH:2.8,door:{side:"S",off:-2.2,width:1.6},hub:[-1.2,1],floor:"dark",storeys:2,upperH:2.5,desc:"Where the Reviewer checks the work. The archive is upstairs."}),_r({id:"studio",name:"Design studio",kind:"house",x:30,z:2,ry:-1.37,w:9,d:7,wallH:2.7,door:{side:"S",off:0,width:1.6},hub:[0,1.6],floor:"light",deck:[-4.2,4.2,3.5,7.6],desc:"Where the Designer lays out pages. Paints on the terrace when free."}),_r({id:"workshop",name:"Workshop",kind:"house",x:-27,z:-4,ry:.28,w:12,d:8,wallH:2.8,door:{side:"E",off:1,width:1.8},hub:[-.5,1.8],floor:"tiles",desc:"Where the Frontend dev and the Backend dev write code."}),Bo({id:"forge",name:"The Forge",kind:"open",x:0,z:0,ry:0,r:7.6,hub:[-5,5],entries:[[-7.3,7.3]],desc:"The furnace burns hotter the more agents are working."}),_r({id:"tavern",name:"Tavern",kind:"house",x:20.5,z:18.6,ry:-.2,w:11,d:8,wallH:2.8,door:{side:"W",off:1.5,width:1.8},hub:[-3.6,2.6],floor:"planks",storeys:2,upperH:2.5,desc:"Where agents with no task have a drink. Rooms to sleep in upstairs."}),Bo({id:"yard",name:"Training yard",kind:"arena",x:-24,z:17,ry:0,r:7.5,gate:-.526,hub:[.5,-1.4],entries:[[4.85,-2.81],[7.71,-4.47]],desc:"Sparring and target practice between tasks."}),Bo({id:"court",name:"Courtyard",kind:"open",x:2,z:24,ry:0,r:6,hub:[-1.8,.2],entries:[[.4,.2]],desc:"The square inside the gate: the well, the market stall, the notice board."}),Bo({id:"garden",name:"Garden",kind:"open",x:-29,z:-20,ry:0,r:7.4,hub:[3.6,2.4],entries:[[5.6,4.6],[6.6,5.6]],desc:"A quiet ring of hedges around the pond."})],Xn=Object.fromEntries(ps.map(s=>[s.id,s])),nn=(s,e,t,n,i,r,o={})=>({room:s,lx:e,lz:t,lry:n,pose:i,doing:r,...o}),rf={"war-table":nn("war",-.3,.9,In(-.3,.9,-2.5,-.6),"plan","planning at the war table"),"war-board":nn("war",3.8,-2.8,os,"point","updating the task board"),"war-rug":nn("war",-4,1.8,In(-4,1.8,-6.1,-2.6),"idle","thinking it over by the war chief's seat"),"lib-desk":nn("library",1.8,-1.98,0,"readsit","reviewing at the library desk",{via:[.3,-2.1]}),"lib-chair":nn("library",-2,2.3,.4,"read","reading by the armchair"),"lib-shelf":nn("library",-2.4,-2.5,os,"read","browsing the shelves"),"studio-desk":nn("studio",-2,-2.38,0,"type","drafting the layout",{via:[-.6,-2.5]}),"studio-easel":nn("studio",-2.4,6.2,In(-2.4,6.2,-1.5,5.3),"paint","painting on the terrace",{out:!0}),"desk-frontend":nn("workshop",-3,-2.18,0,"smash","writing code",{via:[-.5,-2.45]}),"desk-backend":nn("workshop",2,-2.18,0,"type","writing code",{via:[-.5,-2.45]}),"forge-anvil":nn("forge",-3.9,3.9,In(-3.9,3.9,-2.9,2.9),"spar","hammering at the anvil"),"tavern-1":nn("tavern",-3.1,.8,os/2,"drink","having a drink in the tavern"),"tavern-2":nn("tavern",-1.3,.8,-os/2,"drink","having a drink in the tavern",{via:[-1,2.1]}),"tavern-3":nn("tavern",.4,5.75,0,"drink","having a drink in the beer garden",{out:!0,via:[-6.2,5]}),"tavern-bar":nn("tavern",2.9,-.8,os/2,"idle","leaning on the bar"),"yard-1":nn("yard",-3.2,.7,0,"spar","sparring in the yard"),"yard-2":nn("yard",1.6,1.8,0,"spar","sparring in the yard"),"court-bench":nn("court",-5.2,-4,0,"sit","resting on the courtyard bench"),"court-well":nn("court",-3.9,1,In(-3.9,1,-5.8,2),"idle","chatting by the well"),"garden-easel":nn("garden",3,-3.4,In(3,-3.4,2.2,-4.3),"paint","painting in the garden"),"garden-pond":nn("garden",1.4,2.4,In(1.4,2.4,-1,0),"idle","watching the pond"),"fetch-designer":nn("war",2.7,-1.6,In(2.7,-1.6,3.8,-4.4),"idle","collecting the task scroll"),"fetch-frontend":nn("war",3.8,-1.4,In(3.8,-1.4,3.8,-4.4),"idle","collecting the task scroll"),"fetch-backend":nn("war",4.9,-1.6,In(4.9,-1.6,3.8,-4.4),"idle","collecting the task scroll"),"visit-designer":nn("studio",-3.3,-2.1,In(-3.3,-2.1,-2,-2.38),"read","reviewing the Designer's work",{via:[-3.4,-.6]}),"visit-frontend":nn("workshop",-4.3,-2,In(-4.3,-2,-3,-2.18),"read","reviewing the Frontend dev's work",{via:[-4.4,-.4]}),"visit-backend":nn("workshop",3.2,-2,In(3.2,-2,2,-2.18),"read","reviewing the Backend dev's work",{via:[3.4,-.4]}),"workshop-check":nn("workshop",-.5,.4,In(-.5,.4,-.5,-1.4),"point","checking on the devs")},ha=Object.fromEntries(Object.entries(rf).map(([s,e])=>{const t=Xn[e.room],[n,i]=Qi(t,e.lx,e.lz),r={...e,x:n,z:i,ry:e.lry+t.ry,...e.via?{viaW:Qi(t,...e.via)}:{},anchor:(e.out?"out:":"hub:")+e.room};return[s,r]})),N1=Object.keys(rf),Uu={pts:[[-38,-28],[-12,-35],[18,-34],[40,-22],[45,4],[38,27],[12,35],[-8,35],[-30,30],[-43,6]],thick:1.6},Ou=60,Fu=52,as=s=>Ou*Fu/Nr(Fu*fs(s),Ou*Si(s))*(1+.05*Si(3*s+.7)+.035*Si(5*s+2.1)+.02*Si(9*s)),Jc=[{kind:"hut",id:"barracks",name:"Barracks",desc:"Bunks and spare weapons.",floor:"planks",x:-35.2,z:5,ry:.42,w:6,d:4.4},{kind:"hut",id:"store",name:"Store house",desc:"Supplies for the keep: crates, sacks and barrels.",floor:"planks",x:-37.6,z:-9.5,ry:1.42,w:5,d:3.6},{kind:"hut",id:"stable",name:"Stable",desc:"Where the wolf mounts sleep.",floor:"planks",x:11.5,z:29.4,ry:-.08,w:6.4,d:3.6},{kind:"hut",id:"granary",name:"Granary",desc:"Grain and flour for the tavern.",floor:"planks",x:9.5,z:-27.5,ry:-.2,w:4.6,d:3.8},{kind:"windmill",x:35,z:13,r:2.6},{kind:"watch",x:36.5,z:-8.5,r:2},{kind:"shrine",x:-17.6,z:-28.4,r:2.8},{kind:"camp",x:-13.5,z:27.5,r:4.2}],Bu=(s,e,t,n,i=0)=>Array.from({length:n},(r,o)=>[s+t*fs(i+o/n*2*os),e+t*Si(i+o/n*2*os)]),of=(s,e=0)=>[fs(s)*(as(s)-e),Si(s)*(as(s)-e)],U1=[[-32.4,-19.6],[-35.6,-18],[-40,-14.4],[-45.5,-12.6],[-51,-11.8],of(Zc(-11.4,-56),.4)],hc=of(Zc(49,2.2)),O1=[{id:"main",w:4.4,kind:"cobble",pts:[[2,33.8],[2.6,28],[1.7,21],[.5,14.5],[0,10.4]]},{id:"ring",w:3.2,kind:"cobble",closed:!0,pts:Bu(0,0,10,16)},{id:"war",w:3.6,kind:"flag",pts:[[-.6,-10.4],[-2.8,-13.6],"out:war"]},{id:"library",w:2.3,kind:"dirt",pts:[[7.3,-7],[11.5,-11.4],[16.4,-14.6],"out:library"]},{id:"studio",w:2.2,kind:"flag",pts:[[10.3,1.2],[15.5,2.9],[20.6,2.7],"out:studio"]},{id:"tavern",w:2.8,kind:"cobble",pts:[[2.6,21.4],[7.5,21.2],[11,19.6],"out:tavern"]},{id:"workshop",w:2.8,kind:"cobble",pts:[[-10.3,-1.4],[-14.6,-3.4],"out:workshop"]},{id:"yard",w:2.3,kind:"dirt",pts:[[-7.3,7.1],[-11.6,9.8],"entry:yard"]},{id:"garden",w:1.7,kind:"dirt",pts:[[-14.6,-3.6],[-17.6,-9.4],[-20.6,-12.8],"entry:garden"]},{id:"lib-war",w:1.6,kind:"dirt",pts:[[11.3,-11.3],[5.6,-14.6],[-1.4,-15.2],[-3.2,-14.6]]},{id:"tav-studio",w:1.5,kind:"dirt",pts:[[11,19.6],[12.6,15.8],[15,11.4],[20.4,8],[24.4,4.4]]},{id:"yard-court",w:1.8,kind:"dirt",pts:[[-11.6,9.8],[-10.2,15.4],[-5.6,20.6],[-.4,22.6]]},{id:"dock",w:3.6,kind:"dirt",nav:!1,pts:[[2,36.4],[3.2,41.5],[2.4,46.2],hc]},{id:"pond",w:1.3,kind:"stones",closed:!0,pts:Bu(-30,-20,4.3,12,.3)},{id:"to-shrine",w:1.3,kind:"dirt",nav:!1,pts:[[-20.6,-12.8],[-18.6,-19],[-17.8,-25]]},{id:"to-mill",w:1.4,kind:"dirt",nav:!1,pts:[[20.4,8],[27,9.8],[32.2,12.2]]},{id:"to-watch",w:1.3,kind:"dirt",nav:!1,pts:[[16.4,-14.6],[24,-11],[30.5,-9.4],[34.2,-8.7]]},{id:"to-barracks",w:1.4,kind:"dirt",nav:!1,pts:[[-19.5,-5.1],[-18.6,-.6],[-22,3.6],[-28.6,4.6],[-32.2,6.6]]},{id:"to-stable",w:1.6,kind:"cobble",nav:!1,pts:[[3.4,30.4],[6,30.9],[7.8,29.8]]},{id:"to-granary",w:1.2,kind:"dirt",nav:!1,pts:[[5.6,-14.6],[7.6,-20],[9,-25.2]]},{id:"to-camp",w:1.3,kind:"dirt",nav:!1,pts:[[-5.6,20.6],[-9,24.4],[-10.6,25.8]]}];function F1(s){const[e,t]=s.split(":"),n=Xn[t];if(e==="out"&&n.kind==="house")return n.outW;if(e==="entry"&&n.kind!=="house"){const i=n.entriesW[n.entriesW.length-1];if(i)return i}throw new Error(`no such road point: ${s}`)}function af(s,e,t){const n=s.length,i=f=>{const u=e?s[(f%n+n)%n]:s[Math.max(0,Math.min(n-1,f))];if(!u)throw new Error("no points to sample");return u},r=[],o=e?n:n-1;for(let f=0;f<o;f++){const u=i(f-1),p=i(f),_=i(f+1),m=i(f+2),g=Math.max(6,Math.ceil(Nr(_[0]-p[0],_[1]-p[1])/.2));for(let S=0;S<g;S++){const E=S/g,T=E*E,I=T*E,P=(M,w,U,k)=>.5*(2*w+(-M+U)*E+(2*M-5*w+4*U-k)*T+(-M+3*w-3*U+k)*I);r.push([P(u[0],p[0],_[0],m[0]),P(u[1],p[1],_[1],m[1])])}}r.push(e?r[0]:i(n-1));const a=[r[0]];let c=0;for(let f=1;f<r.length;f++){const u=r[f-1],p=r[f];c+=Nr(p[0]-u[0],p[1]-u[1]),c>=t&&(a.push(p),c=0)}const h=r[r.length-1],d=a[a.length-1];return Nr(d[0]-h[0],d[1]-h[1])<t*.5?a[a.length-1]=h:a.push(h),e&&a.pop(),a}const bi=O1.map(s=>{const e=s.pts.map(t=>typeof t=="string"?F1(t):t);return{...s,ctrl:e,refs:s.pts.map(t=>typeof t=="string"?t:null),line:af(e,!!s.closed,.5)}}),ua=af(U1,!1,.5);function B1(){const s={},e=(a,c,h)=>s[a]={id:a,x:c,z:h,edges:[]},t=a=>{const c=s[a];if(!c)throw new Error(`no node ${a}`);return c},n=(a,c)=>{a===c||t(a).edges.includes(c)||(t(a).edges.push(c),t(c).edges.push(a))};for(const a of ps)if(e(`hub:${a.id}`,...a.hubW),a.kind==="house")e(`in:${a.id}`,...a.inW),e(`out:${a.id}`,...a.outW),n(`hub:${a.id}`,`in:${a.id}`),n(`in:${a.id}`,`out:${a.id}`);else{let c=`hub:${a.id}`;a.entriesW.forEach((h,d)=>{const f=d===a.entriesW.length-1?`entry:${a.id}`:`e:${a.id}:${d}`;e(f,...h),n(c,f),c=f})}const i={},r={};for(const a of bi){if(a.nav===!1)continue;const c=[],h=a.line,d=4;for(let f=0;f<h.length;f++){if(!(!a.closed&&(f===0||f===h.length-1))&&f%d!==0)continue;const p=!a.closed&&f===0?a.refs[0]:!a.closed&&f===h.length-1?a.refs[a.refs.length-1]:null,_=p||`r:${a.id}:${f}`,m=h[f];p||e(_,m[0],m[1]);const g=c[c.length-1];g!==void 0&&n(g,_),c.push(_)}a.closed&&n(c[c.length-1],c[0]),i[a.id]=c,r[a.id]=a.closed?[]:[c[0],c[c.length-1]]}const o=(a,c,h)=>{let d=null,f=1/0;for(const[u,p]of Object.entries(i))if(u!==h)for(const _ of p){const m=Nr(t(_).x-a,t(_).z-c);m<f&&(f=m,d=_)}return[d,f]};for(const a of bi)a.nav===!1||a.closed||(r[a.id]??[]).forEach((c,h)=>{if(a.refs[h===0?0:a.refs.length-1])return;const[d,f]=o(t(c).x,t(c).z,a.id);d&&f<4.5&&n(c,d)});for(const a of ps){if(a.kind==="house")continue;const c=`entry:${a.id}`;if(bi.some(d=>d.refs.includes(c)))continue;const[h]=o(t(c).x,t(c).z,null);h&&n(c,h)}const[l]=o(...Xn.garden.hubW,"garden");return l&&l.startsWith("r:pond")&&n("hub:garden",l),s}B1();const Dn={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function k1(s,e){const t=Xn[s],n=t.kind==="house"?Math.max(t.w,t.d)*1.15+8:t.r*1.6+7,i=Math.hypot(e[0],e[1]),[r,o]=i>0?[e[0]/i,e[1]/i]:[.45,.9];return{target:[t.x,1,t.z],position:[t.x+r*n,n*.85,t.z+o*n]}}const ku={lead:"garden-pond",designer:"garden-easel",frontend:"yard-1",backend:"tavern-2",reviewer:"court-bench"},{PI:Ht}=Math,zu=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function z1(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:_,rr:m,pick:g,tiled:S,instanced:E}=s,{FLAGS:T,SPINNERS:I,skull:P,horns:M,flame:w,anvil:U,weaponRack:k,brazier:j,poleBanner:ae,skullPole:ee,barrel:F,well:oe,bench:se,stall:X,lampPost:te,crate:le,sack:fe,torch:Te,dummy:Ke,target:rt,hay:me,easel:We,candle:nt,plantFlora:ct,bunk:Xe,chest:ut,hangingBanner:Ut,table:at,partition:bt,wolf:it,spikes:Re,cart:Ne,fence:Je,skullCandle:et,tent:je,signPost:wt}=e,{patch:lt}=t,{buildHouse:Oe,inH:Fe,outH:Ge,onWall:D}=n,Ze=new Zs({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),Ye=new Zs({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:Ve,chimneyTop:Pe,emberBase:$e}=(()=>{const ie=Xn.forge,J=new Ee;J.position.set(ie.x,0,ie.z),r.add(J),r.add(i.forge);const pe=-.6,De=new Ee;De.position.set(0,.16,pe),J.add(De),De.add(u(f(new li(1,24,0,Ht),Ze,!1),0,1.05,1.705)),De.add(u(f(new qt(2,1.05),Ze,!1),0,.53,1.705)),De.add(u(f(new qt(1.4,.45),Ye,!1),0,.32,1.71));{const re=new Ee;for(let ce=0;ce<4;ce++)re.add(u(f(new Le(.9-ce*.08,.14,1.2-ce*.1),ce%2?o.redD:h("#5a3a2a")),0,.5+ce*.16,0));re.add(u(f(new Le(1,.08,1.3),o.wood),0,.45,0)),re.add(p(u(f(new tt(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,Ht/2)),De.add(u(re,-2.9,0,.2))}const x=new zi("#ff8a3a",14,16,2);x.position.set(0,1.4,2.8),De.add(x),De.updateMatrixWorld(!0);const H=De.localToWorld(new V(0,10.9,-.5)),Y=De.localToWorld(new V(0,1,2));_(J,U(),-2.9,2.9,In(-2.9,2.9,-3.9,3.9)+Ht/2,.16);{const re=new Ee;re.add(u(f(new Le(1.5,.55,.7),o.wood),0,.27,0)),re.add(p(u(f(new qt(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-Ht/2,0,0)),_(J,re,3.5,3,-.5,.16)}const B=[];for(let re=0;re<40;re++)B.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});E(new Mi(1,0),B,{});for(let re=0;re<6;re++)J.add(u(f(new Xt(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));_(J,k(4),-5.3,-2,Math.atan2(5.3,2),.16),_(J,k(4),5.7,.9,-Ht/2,.16);{const re=new Ee;re.add(u(f(new Le(.9,.5,.5),o.wood),0,.25,0));const ce=u(p(f(new tt(.45,.45,.16,18),h("#8a8078")),0,0,Ht/2),0,.8,0);re.add(ce),_(J,re,-4.8,.2,.4,.16)}for(const re of[.4,2,3.9,5.2])_(J,j(0),Math.cos(re)*6.9,Math.sin(re)*6.9,0,.16);return _(J,ae(4),-1.9,-3.8,0,.16),_(J,ae(4),1.9,-3.8,0,.16),_(J,ee(2.6),6,-3.6,0,.16),_(J,F(),-6,2,0,.16),{fireLight:x,chimneyTop:H,emberBase:Y}})();{const ie=Xn.court,J=new Ee;J.position.set(ie.x,0,ie.z),r.add(J),_(J,oe(),-5.8,2),_(J,se(1.9,!0),-5.2,-4,0),_(J,X(),6.2,1.2,-Ht/2);{const pe=new Ee;for(const De of[-1,1])pe.add(u(f(new Le(.12,2.2,.12),o.woodD),De*.8,1.1,0));pe.add(u(f(new Le(1.8,1.1,.08),o.wood),0,1.55,0));for(let De=0;De<6;De++)pe.add(u(p(f(new qt(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+De%3*.6,1.8-Math.floor(De/3)*.5,.05));pe.add(p(u(f(new Le(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),_(J,pe,5.6,-5.4,-Ht/2)}_(J,te(6),-5.8,-1),_(J,F(),8,-.6),_(J,le(.55),3.8,3.4,.3),_(J,fe(),4.4,3),_(J,ee(2.4),-7.8,6);{const pe=new Ee;pe.add(u(f(new Le(1.6,.5,.6),o.wood),0,.25,0)),pe.add(p(u(f(new qt(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-Ht/2,0,0)),_(J,pe,-7.6,3.6,Ht/2)}lt("dirt",ie.x-4,ie.z+.5,4.4,5.6,0,.013)}{const ie=Xn.yard;if(ie.kind==="house")throw new Error("the yard is an open area");const J=ie.gate??0,pe=new Ee;pe.position.set(ie.x,0,ie.z),r.add(pe),lt("sand",ie.x,ie.z,ie.r+.6,ie.r+.6,0,.014,5),pe.add(i.yard);{const De=new Ee,x=Math.cos(J),H=Math.sin(J);De.position.set(x*ie.r,0,H*ie.r),De.rotation.y=Math.atan2(x,H);for(const Y of[-1,1])De.add(u(Te(),Y*1.55,2,.24));pe.add(De),_(pe,ee(2.6),x*(ie.r+1.6)-H*2.2,H*(ie.r+1.6)+x*2.2),_(pe,ee(2.2),x*(ie.r+1.6)+H*2.2,H*(ie.r+1.6)-x*2.2)}_(pe,Ke(),-3.2,2.1,Ht),_(pe,Ke(),1.6,3.2,Ht),_(pe,rt(),4.4,3.6,Math.atan2(-4.4,-3.6)),_(pe,k(4),-5.4,-2.6,Math.atan2(5.4,2.6)),_(pe,me(),-5.6,3.8,.4),_(pe,me(),-4.8,4.7,1.2),_(pe,p(me(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const De of[2,3.4,4.6])_(pe,ae(3.4),Math.cos(De)*(ie.r-.7),Math.sin(De)*(ie.r-.7),Math.atan2(-Math.cos(De),-Math.sin(De)));_(pe,se(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),_(pe,F(),-.6,-5.8),_(pe,j(0,.9),Math.cos(J)*(ie.r-1.2)-Math.sin(J)*1.8,Math.sin(J)*(ie.r-1.2)+Math.cos(J)*1.8)}const ye={x:-30,z:-20,r:2.6,mouthA:0},ue=a.ripple;ue.wrapS=ue.wrapT=ii;const L=new _t("#1f5f8c"),b=new _t("#6fb6d2"),Z=new _t("#a6d8e6"),Me="#bdb3c4",ge=ie=>new Rn({map:ue,color:Me,vertexColors:!0,side:ln,polygonOffset:!0,polygonOffsetFactor:-1-ie,polygonOffsetUnits:-4-ie*4}),Ie=new _t;function Be(ie,J,pe){const De=Math.hypot(ie-ye.x,J-ye.z),x=zu(1-De/ye.r);return Ie.copy(b).lerp(L,x*.95),pe&&Ie.lerp(Z,pe*zu((De-ye.r)/1.2)*.45),[Ie.r*1.27,Ie.g*1.27,Ie.b*1.27]}const _e=2.2;{const De=[],x=[],H=[],Y=[],B=(y,$)=>{De.push(y,.045,$),x.push(...Be(y,$,0)),H.push(y/_e,$/_e)};B(ye.x,ye.z);for(let y=1;y<=5;y++)for(let $=0;$<72;$++){const G=$/72*2*Ht,v=ye.r*y/5;B(ye.x+Math.cos(G)*v,ye.z+Math.sin(G)*v)}for(let y=0;y<72;y++)Y.push(0,1+(y+1)%72,1+y);for(let y=1;y<5;y++)for(let $=0;$<72;$++){const G=1+(y-1)*72+$,v=1+(y-1)*72+($+1)%72,R=G+72,O=v+72;Y.push(G,v,R,v,O,R)}const re=new en;re.setAttribute("position",new At(De,3)),re.setAttribute("color",new At(x,3)),re.setAttribute("uv",new At(H,2)),re.setIndex(Y),r.add(f(re,ge(0),!1));const ce=ua,ze=ce[0],mt=Math.hypot(ze[0]-ye.x,ze[1]-ye.z),xt=(ze[0]-ye.x)/mt,ft=(ze[1]-ye.z)/mt;ye.mouthA=Math.atan2(ft,xt);const Pt=[];for(let y=ye.r-1.2;y<mt-.2;y+=.3)Pt.push([ye.x+xt*y,ye.z+ft*y]);Pt.push(...ce);const Mt=.7,qe=ye.r*ye.r,ht=Math.sqrt(qe-1.5*1.5),Yt=ye.r+.8,tn=-(ht/1.5)*(Yt-ht),pn=y=>{const $=Pt[y],G=Math.hypot($[0]-ye.x,$[1]-ye.z);if(G<=ht)return Math.sqrt(Math.max(0,qe-G*G))-.02;if(G>=Yt)return Mt;const v=(G-ht)/(Yt-ht),R=v*v,O=R*v;return(2*O-3*R+1)*1.48+(O-2*R+v)*tn+(-2*O+3*R)*Mt},A=[],N=[],W=[],Q=[],de=[-1,-.5,0,.5,1];for(let y=0;y<Pt.length;y++){const $=Pt[Math.max(0,y-1)],G=Pt[Math.min(Pt.length-1,y+1)],v=Pt[y],R=Math.hypot(G[0]-$[0],G[1]-$[1])||1,O=-(G[1]-$[1])/R,C=(G[0]-$[0])/R,z=pn(y);for(const K of de){const he=v[0]+O*K*z,we=v[1]+C*K*z;A.push(he,.05,we),N.push(...Be(he,we,Math.abs(K))),W.push(he/_e,we/_e)}if(y>0)for(let K=0;K<4;K++){const he=(y-1)*5+K,we=he+1,Ce=y*5+K,Qe=Ce+1;Q.push(he,Ce,we,we,Ce,Qe)}}const Se=new en;Se.setAttribute("position",new At(A,3)),Se.setAttribute("color",new At(N,3)),Se.setAttribute("uv",new At(W,2)),Se.setIndex(Q),r.add(f(Se,ge(1),!1));const ne=[];for(let y=1;y<Pt.length-1;y+=2){const $=Pt[y];if(Math.hypot($[0]-ye.x,$[1]-ye.z)<ye.r+.9)continue;const G=Pt[y-1],v=Pt[y+1],R=Math.hypot(v[0]-G[0],v[1]-G[1])||1,O=-(v[1]-G[1])/R,C=(v[0]-G[0])/R,z=pn(y)+.16;for(const K of[-1,1])ne.push({x:$[0]+O*K*z,y:.06,z:$[1]+C*K*z,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}E(new Mi(1,0),ne,{})}for(const ie of t.crossings){const J=i.bridge.clone();J.position.set(ie.x,0,ie.z),J.rotation.y=ie.ang,J.scale.x=(ie.len+.6)/3.4,r.add(J)}{const ie=Xn.garden;if(ie.kind==="house")throw new Error("the garden is an open area");const J=new Ee;J.position.set(ie.x,0,ie.z),r.add(J);const pe=Math.atan2(4.6,5.6);J.add(i.garden);{const B=Math.cos(pe)*ie.r,re=Math.sin(pe)*ie.r,ce=new Ee;ce.position.set(B,0,re),ce.rotation.y=Math.atan2(Math.cos(pe),Math.sin(pe)),ce.add(u(te(0).children[2].clone(),0,2.6,0)),J.add(ce)}const De=[],x=[];for(let B=0;B<26;B++){const re=B/26*2*Ht;let ce=Math.abs(re-ye.mouthA);ce=Math.min(ce,2*Ht-ce),!(ce<.62)&&De.push({x:ye.x+Math.cos(re)*2.75,y:.08,z:ye.z+Math.sin(re)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let B=0;B<7;B++)x.push({x:ye.x+m(-1.6,1.6),y:.065,z:ye.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});E(new Mi(1,0),De,{}),E(new tt(.22,.22,.02,12),x,{}),_(J,We(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),_(J,se(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[B,re]of[[-5.6,-2.2],[4.9,-.6]]){const ce=new Ee;ce.add(u(f(new tt(.22,.28,.9,6),o.stone),0,.45,0)),ce.add(u(f(new Le(.5,.36,.5),o.stone),0,1.08,0)),ce.add(u(f(new Le(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),ce.add(u(f(new gn(.48,.36,4),o.redD),0,1.44,0)),_(J,ce,B,re,Ht/4)}{const B=new Ee;B.add(u(f(new Le(.9,.6,.6),o.stone),0,.3,0)),B.add(u(P(.26),0,.75,0));for(const re of[-1,1])B.add(u(nt(.18),re*.3,.6,.12));_(J,B,-4.4,-5.4,Math.atan2(4.4,5.4))}ct("tree_willow",1,ie.x-6.2,ie.z-2.8),ct("tree_cherry",.95,ie.x+5.3,ie.z-4.9),ct("tree_fruit",.85,ie.x-3,ie.z+6.2);const H=[];let Y=0;for(;H.length<90&&Y<4e3;){Y++;const B=m(0,2*Ht),re=m(5.3,6.7),ce=Math.cos(B)*re,ze=Math.sin(B)*re;Math.min(Math.abs(B-pe),2*Ht-Math.abs(B-pe))<.35||Math.hypot(ce-3,ze+3.4)<1.3||Math.hypot(ce-2.2,ze+4.3)<1||H.push({x:ie.x+ce,y:.18,z:ie.z+ze,sx:.9,sy:.9,sz:.9,c:g([l.red,l.bone,"#d98a3a",l.redL,"#e8c860"])})}E(new Xt(.11,8,6),H,{})}const be=S(a.water,1,6),Ae=[];{const ie=ua,[J,pe]=ie[ie.length-1],[De,x]=ie[ie.length-3],H=Math.hypot(J-De,pe-x),Y=(J-De)/H,B=(pe-x)/H,re=new Dt(new qt(1.4,40),new Rn({map:be,color:"#acb5c8",transparent:!0,opacity:.85,side:ln,depthWrite:!1}));re.position.set(J+Y*.9,-20+.05,pe+B*.9),re.rotation.y=Math.atan2(Y,B),r.add(re);const ce=new Gs({map:a.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let ze=0;ze<9;ze++){const mt=new cs(ce);mt.position.set(J+Y*m(1,2.4),m(-38,-30),pe+B*m(1,2.4)+m(-1,1)),mt.scale.setScalar(m(3,5.5)),r.add(mt),Ae.push(mt)}for(let ze=0;ze<4;ze++){const mt=new cs(ce);mt.position.set(J+Y*1,m(-.6,.3),pe+B*1+m(-.5,.5)),mt.scale.setScalar(m(1,1.6)),r.add(mt),Ae.push(mt)}}for(const ie of Jc)if(ie.kind==="hut"){const J=Oe({...ie,wallH:2.5},{id:ie.id,pitch:.66,chimney:ie.id==="barracks"?[1.4,-.6]:null});if(ie.id==="barracks"&&(Fe(J,Xe(),-1.6,-.9),Fe(J,Xe(),.4,-.9),Fe(J,ut(),2.2,-1.6,-Ht/2),Fe(J,j(0,.7),2.3,1.2),D(J,"W",k(3),0,Lt,.3),D(J,"S",Ut(.8,1.3),1.6,Lt+2.3,.04)),ie.id==="store"){Fe(J,at(1.6,.6,.9,o.wood),-1.2,-1.3);for(let pe=0;pe<4;pe++)Fe(J,le(.45),-1.8+pe*.4,-1.3).position.y=Lt+.95;Fe(J,F(),1.6,-1.2),Fe(J,F(.9),1.9,-.4),Fe(J,fe(),.6,-1.3),Fe(J,fe(),1,.6),Fe(J,le(.6),-1.8,.8,.3)}if(ie.id==="stable"){const pe=f(new qt(ie.w-.6,ie.d-.6),o.straw,!1);pe.rotation.x=-Ht/2,Fe(J,pe,0,0).position.y=Lt+.01;for(const De of[-1,1.2])Fe(J,bt(2.2,1.1),De,-.6);Fe(J,it(),-2.2,-.3,.4),Fe(J,it(),.1,-.5,-.5).scale.setScalar(.9),Fe(J,me(),2.4,-1,.2);{const De=new Ee;De.add(u(f(new Le(1.2,.4,.45),o.wood),0,.2,0)),De.add(p(u(f(new qt(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-Ht/2,0,0)),Fe(J,De,2.2,1)}}if(ie.id==="granary"){for(let pe=0;pe<6;pe++)Fe(J,fe(),-1.4+pe%3*.5,-1.2+Math.floor(pe/3)*.55);Fe(J,F(),1.5,-1.1);{const pe=f(new Le(1.2,.8,.8),o.wood);pe.position.y=.4;const De=new Ee;De.add(pe),De.add(u(f(new Le(1.1,.05,.7),o.straw),0,.78,0)),Fe(J,De,1.2,.7)}}ie.id==="barracks"&&(Ge(J,k(4),-1.4,3.3),Ge(J,Re(2.6),3.8,3,.6),Ge(J,ae(3),3.6,.6),Ge(J,ee(2.4),-3.8,2.4)),ie.id==="store"&&(Ge(J,le(.7),-1.6,2.8,.2),Ge(J,le(.5),-.9,3.1,.7),Ge(J,fe(),.6,2.9),Ge(J,fe(),1.1,3.2),Ge(J,F(),2.3,2.9)),ie.id==="stable"&&(Ge(J,me(),-2.8,2.6,.3),Ge(J,me(),-2,3,1.1),Ge(J,Ne(),2,3.4,-.3),Je(J.g,[[-3.2,4.4],[3.2,4.4]],.9)),ie.id==="granary"&&(Ge(J,fe(),-1.2,2.6),Ge(J,fe(),-.6,2.9),Ge(J,fe(),-1,3.3),Ge(J,F(.9),1.6,2.7))}else if(ie.kind==="windmill"){const J=new Ee;J.position.set(ie.x,0,ie.z),J.add(u(f(new tt(1.7,2.4,6.6,18),h("#ffffff",{map:S(a.castleWall,3,2.2)})),0,3.3,0)),J.add(u(f(new gn(2.3,2.8,18),h("#ffffff",{map:S(a.roof,4,1.5)})),0,7.9,0)),J.add(u(f(new Le(1,1.7,.2),o.woodD),0,.85,2.25));for(const[De,x]of[[.6,3.6],[-.9,4.8]])J.add(u(p(f(new Le(.5,.6,.1),o.pane,!1),0,De,0),Math.sin(De)*2,x,Math.cos(De)*2));const pe=u(new Ee,0,6.2,2);pe.add(p(f(new tt(.22,.22,.5,10),o.woodD),Ht/2,0,0));for(let De=0;De<4;De++){const x=new Ee;x.rotation.z=De*Ht/2,x.add(u(f(new Le(.12,4.4,.08),o.woodD),0,2.3,.2)),x.add(u(f(new Le(.9,3.4,.04),h("#e3d5b6",{side:ln})),.5,2.6,.24)),x.add(u(f(new Le(.06,3.4,.06),o.wood),.95,2.6,.26)),pe.add(x)}J.add(pe),I.push({o:pe,axis:"z",v:.5}),J.add(u(fe(),-1.6,0,2.6)),J.add(u(fe(),-2.2,0,2.2)),r.add(J)}else if(ie.kind==="watch"){const J=new Ee;J.position.set(ie.x,0,ie.z),J.add(i.watch),J.add(u(j(0,.7),.6,6.5,-.6)),r.add(J)}else if(ie.kind==="shrine"){const J=new Ee;J.position.set(ie.x,0,ie.z),J.add(i.altar);for(const pe of[.9,2.5,4.1,5.6])J.add(u(et(),Math.cos(pe)*1.4,0,Math.sin(pe)*1.4));J.add(u(j(0,.8),1.6,0,1.4)),r.add(J),lt("dirt",ie.x,ie.z,3.4,3.4,0,.013)}else{const J=new Ee;J.position.set(ie.x,0,ie.z),J.add(u(p(je(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),J.add(u(p(je(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let pe=0;pe<8;pe++){const De=pe/8*2*Ht;J.add(u(f(new Mi(.18,0),o.stone),Math.cos(De)*.55,.1,Math.sin(De)*.55))}for(let pe=0;pe<3;pe++)J.add(p(u(f(new tt(.07,.07,.8,6),o.woodD),0,.12,0),Ht/2,pe*1.05,0));w(J,0,.12,0,1.8);for(const pe of[.6,2.4,4.4])J.add(u(p(f(new tt(.2,.2,1.4,8),o.wood),0,-pe,Ht/2),Math.cos(pe)*1.6,.2,Math.sin(pe)*1.6));J.add(u(ee(2.4),-3.2,0,-1.2)),J.add(u(F(),3.1,0,-.8)),r.add(J),lt("dirt",ie.x,ie.z,4.2,4,0,.013)}function q(ie,J,pe,De=.018,x=o.dark){const H=new V(...J),Y=new V(...pe),B=H.distanceTo(Y),re=f(new tt(De,De,B,5),x,!1);return re.position.copy(H).add(Y).multiplyScalar(.5),re.quaternion.setFromUnitVectors(c,Y.clone().sub(H).normalize()),ie.add(re),re}function ve(){const ie=new Ee,J=f(new Xt(1,22,12,0,Ht*2,Ht/2,Ht/2),h("#ffffff",{map:a.planks}));J.scale.set(2.7,1,1.15),ie.add(J);const pe=f(new tt(1,1,.1,24),o.woodL);pe.scale.set(2.62,1,1.1),ie.add(u(pe,0,.02,0));const De=f(new mn(1,.06,6,36),o.woodD);De.rotation.x=Ht/2,De.scale.set(2.68,1.13,1),De.position.y=.14,ie.add(De),ie.add(p(u(f(new tt(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),ie.add(u(p(P(.32),0,Ht/2,0),2.75,.32,0)),ie.add(u(p(M(.8),0,Ht/2,0),2.75,.42,0)),ie.add(u(f(new tt(.07,.09,2.8,8),o.woodD),.3,1.4,0));const x=u(new Ee,.3,2.85,0);x.add(u(f(new Le(.9,.36,.02),o.red),.45,0,0)),ie.add(x),T.push(x);const H=u(new Ee,-1.5,.06,0);H.add(u(f(new Le(1.1,.8,1.1),h("#ffffff",{map:a.planks})),0,.4,0)),H.add(u(p(f(new tt(.75,.75,1.3,3),h("#ffffff",{map:a.roof})),0,0,Ht/2),0,1.05,0)),H.add(u(f(new Le(.3,.3,.04),o.pane,!1),.56,.5,0)),ie.add(H);const Y=f(new Xt(1,24,16),h("#ffffff",{map:a.balloon}));Y.scale.set(3.6,1.5,1.7),Y.position.y=4.4,ie.add(Y);const B=f(new mn(1,.05,6,40),o.bone);B.rotation.x=Ht/2,B.scale.set(3.62,1.72,1),B.position.y=4.1,ie.add(B);for(const[ce,ze,mt,xt]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])q(ie,[ce,4.05,ze],[mt,.16,xt]);const re=u(new Ee,-2.95,.65,0);re.add(p(f(new tt(.1,.1,.3,8),o.iron),0,0,Ht/2));for(let ce=0;ce<3;ce++){const ze=u(new Ee,0,0,0);ze.rotation.x=ce/3*Ht*2,ze.add(u(p(f(new Le(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),re.add(ze)}ie.add(re),I.push({o:re,axis:"x",v:7}),ie.add(u(f(new Le(.06,.9,.7),o.redD),-2.75,.1,0));for(const ce of[2.4,-2.4])ie.add(u(f(new Xt(.1,8,6),d("#ffc070",2.2),!1),ce,.5,0));return ie.add(u(le(.45),1.3,.07,.4)),ie.add(u(F(.6),1.2,.07,-.45)),ie}const xe=ve(),ke=ve();{const ie=bi.find(xt=>xt.id==="dock");if(!ie)throw new Error("no dock road");const J=ie.line,[pe,De]=J[J.length-1],[x,H]=J[J.length-4],Y=Math.hypot(pe-x,De-H),B=(pe-x)/Y,re=(De-H)/Y,ce=new Ee;ce.position.set(pe,0,De),ce.rotation.y=Math.atan2(B,re),r.add(ce),ce.add(i.dock),ce.add(u(le(.55),2.8,1.17,6.8));for(const[xt,ft]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])ce.add(u(f(new Xt(.12,8,6),d("#ffc070",2.2),!1),xt,1.32,ft));ce.add(u(le(.6),-.85,.22,1.3)),ce.add(u(le(.45),-.75,.22,2)),ce.add(u(F(.85),.85,.22,1)),ce.add(u(fe(),.6,.22,3.6)),ce.add(u(ae(3.4),-1.45,.22,.4)),xe.position.set(4.1,-.4,5.6),xe.rotation.y=-Ht/2,ce.add(xe);const ze=f(new Le(1.6,.08,.7),o.woodL);ze.position.set(2.3,.05,5.6),ze.rotation.z=-.18,ce.add(ze);const mt=u(new Ee,-4.6,0,-3.8);mt.add(u(Te(),-.2,1.6,1.3)),mt.add(u(le(.6),1.9,0,.8)),mt.add(u(F(),1.8,0,-.4)),ce.add(mt),ce.add(u(p(wt("SKY DOCK"),0,Ht/2,0),2.2,0,-2.4)),r.add(ke),ke.scale.setScalar(1.5),ke.userData={a:1.2,r:96,y:15}}{const ie=new Ee;ie.position.set(-44,0,26),r.add(ie);for(const[J,pe,De]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])ie.add(u(p(je(1.8,2.6,De),0,Math.atan2(-J,-pe),0),J,0,pe));for(let J=0;J<8;J++){const pe=J/8*2*Ht;ie.add(u(f(new Mi(.18,0),o.stone),Math.cos(pe)*.55,.1,Math.sin(pe)*.55))}w(ie,0,.1,0,1.8),ie.add(u(ee(2.6),3.6,0,1.8)),ie.add(u(ae(3),-3.6,0,1.6)),ie.add(u(p(Re(3),0,.6,0),4.6,0,-2.6)),lt("dirt",-44,26,5,4.6,.3,.013)}return lt("field",54,-8,6.5,4.2,.35,.013,3),lt("field",51,6,5.2,3.6,-.2,.013,3),lt("field",10,-44.5,6,3.6,.1,.013,3),_(r,Ke(),55.5,-2.6,.4),_(r,me(),48.6,-12.6,.4),_(r,me(),49.4,-11.8,1.3),{mouthMat:Ze,coreMat:Ye,fireLight:Ve,chimneyTop:Pe,emberBase:$e,waterTex:ue,fallTex:be,mists:Ae,skyBoat:xe,airship:ke}}const H1=[3,5,7,9,11];function G1(s){const e=[];for(let t=0;t<s;t++)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return new Hn({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`;function X1(s){s.separableBlurMaterials.forEach((e,t)=>{e.dispose(),s.separableBlurMaterials[t]=G1(H1[t]??3)}),s.materialHighPassFilter.fragmentShader=V1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=W1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function q1(s){const e=new Map,t=new Map,n=s.clone();return lf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(a){return t.get(a)}),r.bind(r.skeleton,r.bindMatrix)}),n}function lf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)lf(s.children[n],e.children[n],t)}class cf extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new Hu(t,Gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t,Gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new uM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ir.extractUrlBase(e);o=Ir.resolveURL(c,this.path)}else o=Ir.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},a=new Vd(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},l={},a=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===hf){try{o[Gt.KHR_BINARY_GLTF]=new dM(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new TM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Gt.KHR_MATERIALS_UNLIT:o[d]=new Z1;break;case Gt.KHR_DRACO_MESH_COMPRESSION:o[d]=new fM(r,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:o[d]=new pM;break;case Gt.KHR_MESH_QUANTIZATION:o[d]=new mM;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Y1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function dn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K1{constructor(e){this.parser=e,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new _t(16777215);a.color!==void 0&&h.setRGB(a.color[0],a.color[1],a.color[2],$n);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new Xd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zi(h),c.distance=d;break;case"spot":c=new Z0(h),c.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),xi(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return n._getNodeRef(t.cache,l,a)})}}class Z1{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){const i=[];e.color=new _t(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$n),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,xn))}return Promise.all(i)}}class J1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class $1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(r,r)}return Promise.all(i)}}class Q1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class j1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class eM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class tM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new _t(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],$n)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class nM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new _t().setRGB(r[0],r[1],r[2],$n),Promise.all(i)}}class sM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class rM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new _t().setRGB(r[0],r[1],r[2],$n),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xn)),Promise.all(i)}}class oM{constructor(e){this.parser=e,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class aM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return dn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class lM{constructor(e){this.parser=e,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class cM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class hM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class Hu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(l,a,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class uM{constructor(e){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],a={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(h=>(a[c]=h,a[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const _=new Rt,m=new V,g=new cn,S=new V(1,1,1),E=new Xr(p.geometry,p.material,f);for(let I=0;I<f;I++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,I),a.ROTATION&&g.fromBufferAttribute(a.ROTATION,I),a.SCALE&&S.fromBufferAttribute(a.SCALE,I),E.setMatrixAt(I,_.compose(m,g,S));let T=null;for(const I in a)if(I==="_COLOR_0"){const P=a[I];E.instanceColor=new ia(P.array,P.itemSize,P.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(T===null){const M=E.geometry;T=new en,T.name=M.name;for(const w in M.attributes)T.setAttribute(w,M.attributes[w]);for(const w in M.morphAttributes)T.morphAttributes[w]=M.morphAttributes[w];M.index!==null&&T.setIndex(M.index),T.morphTargetsRelative=M.morphTargetsRelative;for(const w of M.groups)T.addGroup(w.start,w.count,w.materialIndex);M.boundingBox!==null&&(T.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(T.boundingSphere=M.boundingSphere.clone()),T.drawRange.start=M.drawRange.start,T.drawRange.count=M.drawRange.count,T.userData=Object.assign({},M.userData),E.geometry=T}const P=a[I];T.setAttribute(I,new ia(P.array,P.itemSize,P.normalized))}an.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),u.push(E)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const hf="glTF",xr=12,Gu={JSON:1313821514,BIN:5130562};class dM{constructor(e){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xr,r=new DataView(e,xr);let o=0;for(;o<i;){const l=r.getUint32(o,!0);o+=4;const a=r.getUint32(o,!0);if(o+=4,a===Gu.JSON){const c=new Uint8Array(e,xr+o,l);this.content=n.decode(c)}else if(a===Gu.BIN){const c=xr+o;this.body=e.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},a={},c={};for(const h in o){const d=uc[h]||h.toLowerCase();l[d]=o[h]}for(const h in e.attributes){const d=uc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],u=Vs[f.componentType];c[d]=u.name,a[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const _=u.attributes[p],m=a[p];m!==void 0&&(_.normalized=m)}d(u)},l,c,$n,f)})})}}class pM{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class mM{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class uf extends Qs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=l*2,c=l*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*c,_=p-c,m=-2*u+3*f,g=u-f,S=1-m,E=g-f+d;for(let T=0;T!==l;T++){const I=o[_+T+l],P=o[_+T+a]*h,M=o[p+T+l],w=o[p+T]*h;r[T]=S*I+E*P+m*M+g*w}return r}}const gM=new cn;class _M extends uf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gM.fromArray(r).normalize().toArray(r),r}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:vn,9729:An,9984:sd,9985:Ho,9986:yr,9987:yi},Wu={33071:zn,33648:Jo,10497:ii},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xM={CUBICSPLINE:void 0,LINEAR:zr,STEP:kr},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),s.DefaultMaterial}function rs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],l=[],a=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;l.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;a.push(f)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function yM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SM(s){let e;const t=s.extensions&&s.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dl(t.attributes):e=s.indices+":"+dl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+dl(s.targets[n]);return e}function dl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wM=new Rt;class TM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const a=l.match(/Version\/(\d+)/);i=n&&a?parseInt(a[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new q0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Q0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vd(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return rs(r,l,i),xi(l,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let l=0,a=o.length;l<a;l++)e[o[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,l)=>{const a=this.associations.get(o);a!=null&&this.associations.set(l,a);for(const[c,h]of o.children.entries())r(h,l.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ir.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=hl[i.type],l=Vs[i.componentType],a=i.normalized===!0,c=new l(i.count*o);return Promise.resolve(new En(c,o,a))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],a=hl[i.type],c=Vs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*a,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(u&&u!==d){const g=Math.floor(f/u),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=t.cache.get(S);E||(_=new c(l,g*u,i.count*u/h),E=new Sd(_,u/h),t.cache.add(S,E)),m=new Wr(E,a,f%u/h,p)}else l===null?_=new c(i.count*a):_=new c(l,f,i.count*a),m=new En(_,a,p);if(i.sparse!==void 0){const g=hl.SCALAR,S=Vs[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,I=new S(o[1],E,i.sparse.count*g),P=new c(o[2],T,i.sparse.count*a);l!==null&&(m=new En(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=I.length;M<w;M++){const U=I[M];if(m.setX(U,P[M*a]),a>=2&&m.setY(U,P[M*a+1]),a>=3&&m.setZ(U,P[M*a+2]),a>=4&&m.setW(U,P[M*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const a=n.manager.getHandler(o.uri);a!==null&&(l=a)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],l=r.images[t],a=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vu[f.magFilter]||An,h.minFilter=Vu[f.minFilter]||yi,h.wrapS=Wu[f.wrapS]||ii,h.wrapT=Wu[f.wrapT]||ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==vn&&h.minFilter!==An,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],l=self.URL||self.webkitURL;let a=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(o.bufferView!==void 0)a=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return a=l.createObjectURL(u),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(a).then(function(f){return new Promise(function(u,p){let _=u;t.isImageBitmapLoader===!0&&(_=function(m){const g=new Sn(m);g.needsUpdate=!0,u(g)}),t.load(Ir.resolveURL(f,r.path),_,void 0,p)})})}const d=h.then(function(f){return c===!0&&l.revokeObjectURL(a),xi(f,o),f.userData.mimeType=o.mimeType||bM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=r.associations.get(o);o=r.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,a)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Pr,Jn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(l,a)),n=a}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Td,Jn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(l,a)),n=a}if(i||r||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=n.clone(),r&&(a.vertexColors=!0),o&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return Zs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const l={},a=r.extensions||{},c=[];if(a[Gt.KHR_MATERIALS_UNLIT]){const d=i[Gt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(l,r,t))}else{const d=r.pbrMetallicRoughness||{};if(l.color=new _t(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],$n),l.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",d.baseColorTexture,xn)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=ln);const h=r.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===ul.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;l.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rn){const d=r.emissiveFactor;l.emissive=new _t().setRGB(d[0],d[1],d[2],$n)}return r.emissiveTexture!==void 0&&o!==Rn&&c.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,xn)),Promise.all(c).then(function(){const d=new o(l);return r.name&&(d.name=r.name),xi(d,r),t.associations.set(d,{materials:e}),r.extensions&&rs(i,d,r),d})}createUniqueName(e){const t=jt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return Xu(a,l,t)})}const o=[];for(let l=0,a=e.length;l<a;l++){const c=e[l],h=SM(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Xu(new en,c,t),c.mode===ei.TRIANGLE_STRIP?f=f.then(u=>Nu(u,ud)):c.mode===ei.TRIANGLE_FAN&&(f=f.then(u=>Nu(u,jl))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let a=0,c=o.length;a<c;a++){const h=o[a].material===void 0?vM(this.cache):this.getDependency("material",o[a].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const _=h[u],m=o[u];let g;const S=c[u];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,T=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");E&&T===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&T?new Hp(_,S):new Dt(_,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ei.LINES)g=new Xp(_,S);else if(m.mode===ei.LINE_STRIP)g=new Oc(_,S);else if(m.mode===ei.LINE_LOOP)g=new qp(_,S);else if(m.mode===ei.POINTS)g=new Sr(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&yM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),xi(g,r),m.extensions&&rs(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&rs(i,d[0],r),d[0];const f=new Ee;r.extensions&&rs(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wn(na.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ya(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,l=[],a=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){l.push(d);const f=new Rt;r!==null&&f.fromArray(r.array,c*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nc(l,a)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],l=[],a=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],_=u.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",S)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],_=d[3],m=d[4],g=[];for(let E=0,T=f.length;E<T;E++){const I=f[E],P=u[E],M=p[E],w=_[E],U=m[E];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const k=n._createAnimationTracks(I,P,M,w,U);if(k)for(let j=0;j<k.length;j++)g.push(k[j])}const S=new rc(r,void 0,g);return xi(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let a=0,c=i.weights.length;a<c;a++)l.morphTargetInfluences[a]=i.weights[a]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=i.children||[];for(let c=0,h=l.length;c<h;c++)o.push(n.getDependency("node",l[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),a]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,wM)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new V().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",l=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&l.push(a),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let h;if(r.isBone===!0?h=new wd:c.length>1?h=new Ee:c.length===1?h=c[0]:h=new an,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),xi(h,r),r.extensions&&rs(n,h,r),r.matrix!==void 0){const d=new Rt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ee;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&rs(t,r,n);const o=n.nodes||[],l=[];for(let a=0,c=o.length;a<c;a++)l.push(i.getDependency("node",o[a]));return Promise.all(l).then(function(a){for(let h=0,d=a.length;h<d;h++){const f=a[h];f.parent!==null?r.add(q1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof Jn||f instanceof Sn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],l=e.name?e.name:e.uuid,a=[];function c(u){u.morphTargetInfluences&&a.push(u.name?u.name:u.uuid)}Zi[r.path]===Zi.weights?(c(e),e.isGroup&&e.children.forEach(c)):a.push(l);let h;switch(Zi[r.path]){case Zi.weights:h=Qr;break;case Zi.rotation:h=jr;break;case Zi.translation:case Zi.scale:h=la;break;default:n.itemSize===1?h=Qr:h=la;break}const d=i.interpolation!==void 0?xM[i.interpolation]:zr,f=this._getArrayFromAccessor(n);for(let u=0,p=a.length;u<p;u++){const _=new h(a[u]+"."+Zi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof jr?_M:uf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EM(s,e,t){const n=e.attributes,i=new Ti;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],a=l.min,c=l.max;if(a!==void 0&&c!==void 0){if(i.set(new V(a[0],a[1],a[2]),new V(c[0],c[1],c[2])),l.normalized){const h=dc(Vs[l.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new V,a=new V;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const _=dc(Vs[f.componentType]);a.multiplyScalar(_)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const o=new Ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Xu(s,e,t){const n=e.attributes,i=[];function r(o,l){return t.getDependency("accessor",o).then(function(a){s.setAttribute(l,a)})}for(const o in n){const l=uc[o]||o.toLowerCase();l in s.attributes||i.push(r(n[o],l))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(o)}return Wt.workingColorSpace!==$n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`),xi(s,e),EM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?MM(s,e.targets,t):s})}const AM="/assets/altar-BLnKV2Du.glb",RM="/assets/backend-0N1rHeCk.glb",CM="/assets/bridge-ETZK_L1i.glb",PM="/assets/designer-DbLc0S5w.glb",LM="/assets/dock-Dz4b5cxY.glb",DM="/assets/flora-7jxy9LaY.glb",IM="/assets/forge-DNia5kCh.glb",NM="/assets/frontend-BagVIkFr.glb",UM="/assets/garden-iFD0puy8.glb",OM="/assets/gate-CLzj2aEg.glb",FM="/assets/house_library-a_INcIO_.glb",BM="/assets/house_studio-prPn7xt-.glb",kM="/assets/house_tavern-DhJciONJ.glb",zM="/assets/house_war-CErgsJUC.glb",HM="/assets/house_workshop-DizOAfBl.glb",GM="/assets/lead-B8dKTGTU.glb",VM="/assets/reviewer-CjFLqSzL.glb",WM="/assets/towers-DiePBDd1.glb",XM="/assets/underside-CtDt-w8A.glb",qM="/assets/walls-DL6hLM5P.glb",YM="/assets/watch-D_FLfKo1.glb",KM="/assets/yard-BCXHtimJ.glb",ZM="/assets/backend-BO6EdEPd.jpg",JM="/assets/designer-3Dfjr5eY.jpg",$M="/assets/frontend-ChC8gXK4.jpg",QM="/assets/lead-BVut_pmU.jpg",jM="/assets/reviewer-r8WJ7XTx.jpg",ey=Object.assign({"../models/altar.glb":AM,"../models/backend.glb":RM,"../models/bridge.glb":CM,"../models/designer.glb":PM,"../models/dock.glb":LM,"../models/flora.glb":DM,"../models/forge.glb":IM,"../models/frontend.glb":NM,"../models/garden.glb":UM,"../models/gate.glb":OM,"../models/house_library.glb":FM,"../models/house_studio.glb":BM,"../models/house_tavern.glb":kM,"../models/house_war.glb":zM,"../models/house_workshop.glb":HM,"../models/lead.glb":GM,"../models/reviewer.glb":VM,"../models/towers.glb":WM,"../models/underside.glb":XM,"../models/walls.glb":qM,"../models/watch.glb":YM,"../models/yard.glb":KM}),fc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},Ur=["lead","designer","frontend","backend","reviewer"],ty=Object.assign({"../models/backend.jpg":ZM,"../models/designer.jpg":JM,"../models/frontend.jpg":$M,"../models/lead.jpg":QM,"../models/reviewer.jpg":jM});function $c(s){const e=ey[`../models/${s}.glb`];if(!e)throw new Error(`no model ${s} in the bundle`);return e}function ny(s){const e=ty[`../models/${s}`];if(!e)throw new Error(`no texture ${s} in the bundle`);return e}const fl=new Rt,iy=new Rt;function df(s){const e=new Set;return s.scene.traverse(t=>{const n=t.userData.woa_q;if(n&&(fl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),t.matrix.compose(t.position,t.quaternion,t.scale).multiply(iy.copy(fl).invert()),t.matrix.decompose(t.position,t.quaternion,t.scale)),!(t instanceof Dt)||e.has(t.geometry))return;const i=t.geometry;e.add(i);for(const[o,l]of Object.entries(i.attributes)){if(o==="skinIndex"||l.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in l))continue;const a=l.itemSize,c=new Float32Array(l.count*a);for(let h=0;h<l.count;h++)c[h*a]=l.getX(h),a>1&&(c[h*a+1]=l.getY(h)),a>2&&(c[h*a+2]=l.getZ(h)),a>3&&(c[h*a+3]=l.getW(h));i.setAttribute(o,new En(c,a))}const r=n||t.parent?.userData.woa_q;r&&i.applyMatrix4(fl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function ff(s,e){const t=e,n=t.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((t.emissiveIntensity||1)*40)/100)):s.toon("#"+t.color.getHexString())}const sy=s=>s.isMeshStandardMaterial===!0;function pf(s,e){const t=new Map;return e.traverse(n=>{if(!(n instanceof Dt))return;const i=ff(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const a of Object.keys(o.attributes))a!=="position"&&a!=="normal"&&o.deleteAttribute(a);o.applyMatrix4(n.matrixWorld);const l=t.get(i);l?l.push(o):t.set(i,[o])}),t}function ry(s,e){e.scene.updateMatrixWorld(!0);const t=new Ee;for(const[n,i]of pf(s,e.scene)){const r=i.length===1?i[0]:Kc(i,!1);if(!r)continue;const o=new Dt(r,n);o.castShadow=!sy(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o)}return t}function mf(s,e){let t=null;return s.scene.traverse(n=>{!t&&(n.userData.name===e||n.name===e)&&(t=n)}),t}async function oy(){const s=new cf,e=Object.keys(fc),t=await Promise.all(e.map(n=>s.loadAsync($c(n)).then(df)));return Object.fromEntries(e.map((n,i)=>[n,t[i]]))}function ay(s,e){const t={};for(const n of Object.keys(fc)){const i=e[n];t[n]=fc[n]==="static"?ry(s,i):i}return t}const ly={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function cy(s,e){const t=.075*s/1.8,n=(e-t)*.5;return Math.max(.5,n+t-.02)}const hy={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit"},uy=new Set(["type","smash","readsit","sit","drink"]),dy=.59;function fy(s){const e=$c(s),t=new Gd;return t.setURLModifier(n=>n===e?n:ny(n.slice(n.lastIndexOf("/")+1))),new cf(t)}async function py(){const s=await Promise.all(Ur.map(e=>fy(e).loadAsync($c(e)).then(df)));return s.forEach((e,t)=>{e.scene.traverse(n=>{if(n instanceof Dt&&!n.material.map)throw new Error(`the ${Ur[t]} model's texture did not load`)})}),Object.fromEntries(Ur.map((e,t)=>[e,s[t]]))}function my(s){const e=ps.filter(n=>n.kind==="house"),t=Xn.forge;return(n,i)=>{for(const r of e){const[o,l]=eo(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(l)<r.d/2+.1)return Lt;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&l>r.deck[2]&&l<r.deck[3])return .2}if(Math.hypot(n-t.x,i-t.z)<7.8)return .16;for(const r of s){const o=n-r.x,l=i-r.z,a=(r.len+.6)/2,c=o*Math.cos(r.ang)-l*Math.sin(r.ang),h=o*Math.sin(r.ang)+l*Math.cos(r.ang);if(Math.abs(c)<a&&Math.abs(h)<.6)return .12+.32*(1-(c/a)**2)}return .02}}const gy=.055,da=new V,Er=new V,qu=new V,_y=new V,Zo=new V,pl=new V,xy=new V,Yu=new cn,Ku=new cn,fa=new cn,Zu=new cn,ml=new mm;function Ju(s,e,t){Yu.setFromUnitVectors(e,t),s.getWorldQuaternion(Ku),s.parent.getWorldQuaternion(fa).invert(),s.quaternion.copy(fa.multiply(Yu).multiply(Ku)),s.updateMatrixWorld(!0)}function vy(s,e,t,n){const i=s.up.getWorldPosition(Er),r=s.low.getWorldPosition(qu),o=s.foot.getWorldPosition(da);s.foot.getWorldQuaternion(Zu);const l=i.distanceTo(r),a=r.distanceTo(o),c=Zo.set(o.x,e+t,o.z).sub(i),h=na.clamp(c.length(),Math.abs(l-a)+1e-4,l+a-1e-4);c.normalize();const d=pl.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=na.clamp((l*l+h*h-a*a)/(2*l*h),-1,1),u=xy.copy(i).addScaledVector(c,l*f).addScaledVector(d,l*Math.sqrt(1-f*f)),p=_y.copy(i).addScaledVector(c,h);Ju(s.up,pl.subVectors(r,i).normalize(),Zo.subVectors(u,i).normalize());const _=s.low.getWorldPosition(qu),m=s.foot.getWorldPosition(da);Ju(s.low,pl.subVectors(m,_).normalize(),Zo.subVectors(p,_).normalize()),s.foot.parent.getWorldQuaternion(fa).invert(),s.foot.quaternion.copy(fa.multiply(Zu)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function My(s,e,t,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of Ur){const f=new Ee;f.userData.agentId=d,e.add(f);const u=ha[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:_,speed:m}=ly[d],g=t[d],S=g.scene;S.updateMatrixWorld(!0);const E=new Ti().setFromObject(S),T=p/Math.max(.01,E.max.y-E.min.y);S.scale.setScalar(T);const I=-E.min.y*T;S.position.y=I;const P=new Map;S.traverse(se=>{if(!(se instanceof Dt))return;const X=se.material;let te=P.get(X);te||(X.map&&(X.map.colorSpace=xn),te=i("#ffffff",{map:X.map??null}),P.set(X,te)),se.material=te,se.castShadow=!0,se.receiveShadow=!0,se.frustumCulled=!1,se.raycast=()=>{}});let M=null;d==="reviewer"&&(M=new zi("#6dffa0",2.5,4,2),M.position.set(-.18,2.2,.35),f.add(M));const w={};for(const se of g.animations){const X=se.tracks.find(te=>/Hips\.position$/.test(te.name));X&&(w[se.name]=X.values[1]*T)}const U=new pm(S),k={};for(const se of g.animations){const X=U.clipAction(se);X.enabled=!0,X.setEffectiveTimeScale(1),X.setEffectiveWeight(se.name==="idle"?1:0),X.time=Math.random()*se.duration,X.play(),k[se.name]=X}if(!k.idle||!k.walk||!k.sit||!k.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);k.walk.timeScale=Math.min(2.6,Math.max(.8,m/(dy*p))),U.update(0);const j=se=>S.getObjectByName("mixamorig"+se),ae=["Left","Right"].map(se=>({up:j(se+"UpLeg"),low:j(se+"Leg"),foot:j(se+"Foot")}));S.updateMatrixWorld(!0);const ee=ae.every(se=>se.up&&se.low&&se.foot)?ae.map(se=>({up:se.up,low:se.low,foot:se.foot,saved:[new cn,new cn,new cn]})):null,F=ee?Math.min(...ee.map(se=>se.foot.getWorldPosition(da).y)):0,oe=j("Hips");if(!oe)throw new Error(`the ${d} model has no hips`);f.add(S),o[d]={id:d,root:f,H:p,seatY:cy(p,_),phase:n.phases[d],model:{obj:S,mixer:U,acts:k,cur:"idle",baseY:I,seat:w,hips:oe,legs:ee,ankleH:F,bent:!1,ikW:0},lantern:M}}const l=new Map;function a(d,f,u,p){const _=l.get(d);if(_!==void 0)return _;const m=[];for(const[S,E]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){ml.set(da.set(f+S,p+1.2,u+E),Zo.set(0,-1,0)),ml.far=1.3;for(const T of ml.intersectObjects(e.children,!0)){let I=!1,P=!0;for(let U=T.object;U;U=U.parent)U.userData.agentId&&(I=!0),U.visible||(P=!1);const M=T.point.y-p,w=T.object;if(!I&&P&&w.isMesh&&!w.material.transparent&&M>.25&&M<.66){m.push(M);break}}}const g=m.length?Math.max(...m):null;return l.set(d,g),g}function c(d,f,u,p){const _=d.model;if(_.bent&&_.legs)for(const U of _.legs)U.up.quaternion.copy(U.saved[0]),U.low.quaternion.copy(U.saved[1]),U.foot.quaternion.copy(U.saved[2]);_.bent=!1;const m=hy[f],g=m&&_.acts[m]?m:"idle";if(g!==_.cur){const U=_.acts[_.cur],k=_.acts[g];k.enabled=!0,k.setEffectiveWeight(1),k.time=0,r?U.setEffectiveWeight(0):U.crossFadeTo(k,.3,!1),g==="walk"&&(k.timeScale=_.acts.walk?.timeScale||1),_.cur=g}_.mixer.update(r?0:u);const S=g!=="walk"&&g!=="idle";let E=null;const T=n.groundY(d.root.position.x,d.root.position.z);if(S&&p&&_.legs&&_.acts[g].getEffectiveWeight()>.99){_.obj.updateWorldMatrix(!0,!0);const U=_.hips.getWorldPosition(Er);E=a(p+"|"+d.id,U.x,U.z,T)}let I=_.baseY,P=0,M=0;if(E!==null){I=_.obj.position.y+(T+E+gy*d.H)-Er.y;const U=d.root.rotation.y,k=Math.cos(U),j=Math.sin(U),ae=d.root.position.x-Er.x,ee=d.root.position.z-Er.z;P=_.obj.position.x+ae*k-ee*j,M=_.obj.position.z+ae*j+ee*k}else S&&_.seat[g]!==void 0&&(I=_.baseY+Math.max(-.22,Math.min(0,d.seatY-_.baseY-_.seat[g])));const w=r?1:Math.min(1,u*8);if(_.obj.position.x+=(P-_.obj.position.x)*w,_.obj.position.y+=(I-_.obj.position.y)*w,_.obj.position.z+=(M-_.obj.position.z)*w,_.ikW=E===null?0:Math.min(1,_.ikW+(r?1:u/.3)),E!==null&&_.legs){_.obj.updateWorldMatrix(!0,!0);for(const U of _.legs)U.saved[0].copy(U.up.quaternion),U.saved[1].copy(U.low.quaternion),U.saved[2].copy(U.foot.quaternion),vy(U,T,_.ankleH,_.ikW);_.bent=!0}}function h(d,f,u){if(!d.lantern||r)return;const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!uy.has(f)&&f!=="read"?2.5*p:0}return{actors:o,drive:c,lanternFor:h}}const vr=new V;function jn(s,e,t,n,i,r){const o=2*Math.PI*i/4,l=Math.max(r-2*i,0),a=Math.PI/4;vr.copy(e),vr[n]=0,vr.normalize();const c=.5*o/(o+l),h=1-vr.angleTo(s)/a;return Math.sign(vr[t])===1?h*c:l/(o+l)+c+c*(1-h)}class wa extends Le{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const a=new V,c=new V,h=new V(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,_=new V,m=.5/o;for(let g=0,S=0;g<d.length;g+=3,S+=2)switch(a.fromArray(d,g),c.copy(a),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(a.x)+c.x*r,d[g+1]=h.y*Math.sign(a.y)+c.y*r,d[g+2]=h.z*Math.sign(a.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),u[S+0]=jn(_,c,"z","y",r,n),u[S+1]=1-jn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),u[S+0]=1-jn(_,c,"z","y",r,n),u[S+1]=1-jn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),u[S+0]=1-jn(_,c,"x","z",r,e),u[S+1]=jn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),u[S+0]=1-jn(_,c,"x","z",r,e),u[S+1]=1-jn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),u[S+0]=1-jn(_,c,"x","y",r,e),u[S+1]=1-jn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),u[S+0]=jn(_,c,"x","y",r,e),u[S+1]=1-jn(_,c,"y","x",r,t);break}}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.segments,e.radius)}}const yy="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:Ni}=Math,pc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function Sy(){const s=new FontFace("M PLUS Rounded 1c",`url("${yy}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const Bn={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function by(s,e,t,n){s.setPixelRatio(Math.min(n,2)),s.setSize(e,t),s.shadowMap.enabled=!0,s.shadowMap.type=Ar,s.toneMapping=ma,s.toneMappingExposure=.95}function $u(s){let e=s;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wy(s,e){const t=new xa(new Uint8Array([70,150,255]),3,1,ga);t.minFilter=t.magFilter=vn,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Rn({color:2824987,side:Nn}),i=0,r=1,o=new V(0,1,0),l={uRimColor:{value:new _t("#ffd2a6")},uRimAmt:{value:.45}};function a(x){return x.onBeforeCompile=H=>{H.uniforms.uRimColor=l.uRimColor,H.uniforms.uRimAmt=l.uRimAmt,H.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+H.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},x.customProgramCacheKey=()=>"rim1",x}const c=new Map;function h(x,H){if(!H){let Y=c.get(x);return Y||(Y=a(new qo({color:x,gradientMap:t})),c.set(x,Y)),Y}return a(new qo(Object.assign({color:x,gradientMap:t},H)))}const d=new Map;function f(x,H=2){const Y=x+H;let B=d.get(Y);return B||(B=new Zs({color:0,emissive:x,emissiveIntensity:H,roughness:1}),d.set(Y,B)),B}function u(x,H,Y=!0){H&&H.userData.autoUV&&x.attributes.uv&&!x.userData.planar&&(x.type==="BoxGeometry"||x.type==="RoundedBoxGeometry")&&(j(x,.9),x.userData.planar=!0);const B=new Dt(x,H);return B.castShadow=Y,B.receiveShadow=!0,B}const p=(x,H,Y,B=.03)=>new wa(x,H,Y,2,Math.min(B,x/2.1,H/2.1,Y/2.1));function _(x,H,Y=i,B=!0){const re=u(x,H,B);if(Y){const ce=new Dt(x,n);ce.scale.setScalar(1+Y*r),ce.raycast=()=>{},re.add(ce)}return re}function m(x,H,Y,B){return x.position.set(H,Y,B),x}function g(x,H,Y,B){return x.rotation.set(H,Y,B),x}function S(x,H,Y,B,re=0,ce=0){return H.position.set(Y,ce,B),H.rotation.y=re,x.add(H),H}function E(x,H,Y,B,re,ce,ze=i*1.6,mt=7){const xt=Y.clone().normalize(),ft=_(new gn(re,B,mt),ce,ze);return ft.quaternion.setFromUnitVectors(o,xt),ft.position.copy(H).addScaledVector(xt,B*.45),x.add(ft),ft}const T=$u(20261116),I=(x,H)=>x+(H-x)*T(),P=x=>x[Math.floor(T()*x.length)],M=$u(777),w=(x,H)=>x+(H-x)*M();function U(x,H,Y,B){const re=document.createElement("canvas");re.width=x,re.height=H;const ce=re.getContext("2d");ce&&Y(ce,x,H);const ze=new tc(re);return ze.colorSpace=xn,ze.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),ze.wrapS=ze.wrapT=ii,B&&ze.repeat.set(B[0],B[1]),ze}function k(x,H,Y){const B=x.clone();return B.wrapS=B.wrapT=ii,B.repeat.set(H,Y),B.needsUpdate=!0,B}function j(x,H=1,Y=H){const B=x.attributes.position,re=x.attributes.normal,ce=x.attributes.uv;for(let ze=0;ze<B.count;ze++){const mt=Math.abs(re.getX(ze)),xt=Math.abs(re.getY(ze)),ft=Math.abs(re.getZ(ze));let Pt,Mt;xt>=mt&&xt>=ft?(Pt=B.getX(ze),Mt=B.getZ(ze)):mt>=ft?(Pt=B.getZ(ze),Mt=B.getY(ze)):(Pt=B.getX(ze),Mt=B.getY(ze)),ce.setXY(ze,Pt/H,Mt/Y)}return ce.needsUpdate=!0,x}function ae(x,H,Y,B=0,re=H){const ce=x.attributes.position,ze=x.attributes.normal,mt=x.attributes.uv;for(let xt=0;xt<ce.count;xt++){const ft=Math.abs(ze.getX(xt)),Pt=Math.abs(ze.getZ(xt)),Mt=(ft>Pt?ce.getZ(xt):ce.getX(xt))/Y;mt.setXY(xt,Mt,(ce.getY(xt)+H/2+B)/re)}return mt.needsUpdate=!0,x}const ee=new Rt,F=new cn,oe=new wi,se=new V,X=new V,te=new _t;function le(x,H,Y={}){if(!H.length)return null;const B=Y.mat||a(new qo({color:16777215,gradientMap:t})),re=new Xr(x,B,H.length);return re.castShadow=!!Y.cast,re.receiveShadow=Y.receive!==!1,H.forEach((ce,ze)=>{ce.m?ee.copy(ce.m):(oe.set(ce.rx||0,ce.ry||0,ce.rz||0),F.setFromEuler(oe),se.set(ce.x??0,ce.y??0,ce.z??0),X.set(ce.sx??1,ce.sy??1,ce.sz??1),ee.compose(se,F,X)),re.setMatrixAt(ze,ee),(!Y.mat||Y.colors)&&re.setColorAt(ze,te.set(ce.c||"#ffffff"))}),re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),re.computeBoundingSphere(),(Y.parent||e).add(re),re}const fe=new Le(1,1,1);function Te(x,H,Y,B=!0){return Y.length?le(fe,Y.map(([re,ce,ze,mt,xt,ft,Pt=0,Mt=0,qe=0])=>({x:re,y:ce,z:ze,sx:mt,sy:xt,sz:ft,rx:Pt,ry:Mt,rz:qe})),{mat:H,parent:x,cast:B}):null}function Ke(x,H,Y,B,re,ce,ze,mt){for(let xt=0;xt<re;xt++){const ft=w(0,H),Pt=w(0,Y),Mt=w(ce,ze);for(const[qe,ht]of[[0,0],[H,0],[-H,0],[0,Y],[0,-Y]]){const Yt=x.createRadialGradient(ft+qe,Pt+ht,0,ft+qe,Pt+ht,Mt),tn=B[Math.floor(M()*B.length)];Yt.addColorStop(0,tn+mt),Yt.addColorStop(1,tn+"00"),x.fillStyle=Yt,x.fillRect(ft+qe-Mt,Pt+ht-Mt,Mt*2,Mt*2)}}}function rt(x,H,Y,B=.16){x.globalCompositeOperation="destination-in";const re=x.createLinearGradient(0,0,H,0);re.addColorStop(0,"rgba(0,0,0,0)"),re.addColorStop(B,"rgba(0,0,0,1)"),re.addColorStop(1-B,"rgba(0,0,0,1)"),re.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=re,x.fillRect(0,0,H,Y),x.globalCompositeOperation="source-over"}function me(x,H,Y,B,re,ce,ze,mt,xt,ft,Pt){for(let Mt=Y;Mt<re;Mt+=ce){let qe=H-w(0,mt);for(;qe<B;){const ht=w(ze,mt);x.fillStyle=xt[Math.floor(M()*xt.length)],x.beginPath(),x.roundRect(qe+ft,Mt+ft,ht-ft*2,ce-ft*2,Pt),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(qe+ft*2,Mt+ft*1.5,ht-ft*4,3),qe+=ht}}}function We(x,H,Y,B,re,ce,ze,mt,xt){const ft=Y/B;for(let Pt=0;Pt<B;Pt++){const Mt=Pt*ft;let qe=w(0,ce);const ht=qe;for(;qe<ht+H;){const Yt=Math.min(w(re,ce),ht+H-qe);if(Yt<re*.5)break;const tn=ze[Math.floor(M()*ze.length)];for(const pn of[0,-H])x.fillStyle=tn,x.beginPath(),x.roundRect(qe+pn+mt,Mt+mt,Yt-mt*2,ft-mt*2,xt),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(qe+pn+mt*2,Mt+mt*1.5,Yt-mt*4,3);qe+=Yt}}}function nt(x,H,Y,B){for(let re=0;re<8;re++){let ce=-w(0,200);for(;ce<H;){const ze=w(160,340);x.fillStyle=B[Math.floor(M()*B.length)],x.fillRect(ce,re*64,ze,64),x.strokeStyle="rgba(255, 230, 200, 0.06)",x.lineWidth=2;for(let mt=0;mt<3;mt++){const xt=re*64+w(10,54);x.beginPath(),x.moveTo(ce+6,xt),x.bezierCurveTo(ce+ze*.3,xt+w(-4,4),ce+ze*.6,xt+w(-4,4),ce+ze-6,xt),x.stroke()}x.fillStyle="rgba(20, 10, 6, 0.4)",x.fillRect(ce,re*64,3,64),x.fillStyle="rgba(20, 10, 6, 0.35)",x.beginPath(),x.arc(ce+10,re*64+14,2.5,0,Ni*2),x.arc(ce+10,re*64+50,2.5,0,Ni*2),x.fill(),ce+=ze}x.fillStyle="rgba(20, 10, 6, 0.45)",x.fillRect(0,re*64,H,3)}}const ct=(x,H,Y)=>{const B=x.createRadialGradient(32,32,0,32,32,32);B.addColorStop(0,H),B.addColorStop(1,Y),x.fillStyle=B,x.fillRect(0,0,64,64)},Xe=U(512,512,(x,H,Y)=>{x.fillStyle="#6f8b49",x.fillRect(0,0,H,Y),Ke(x,H,Y,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let B=0;B<900;B++){x.strokeStyle=M()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",x.lineWidth=2;const re=w(0,H),ce=w(0,Y);x.beginPath(),x.moveTo(re,ce),x.lineTo(re+w(-2,2),ce-w(5,10)),x.stroke()}}),ut=U(256,256,(x,H,Y)=>{x.fillStyle="#8b6a4b",x.fillRect(0,0,H,Y),Ke(x,H,Y,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let B=0;B<120;B++)x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",x.beginPath(),x.ellipse(w(0,H),w(0,Y),w(1.5,4),w(1,3),w(0,3),0,Ni*2),x.fill()}),Ut=U(256,256,(x,H,Y)=>{x.fillStyle="#b0906a",x.fillRect(0,0,H,Y),Ke(x,H,Y,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let B=0;B<160;B++)x.fillStyle="rgba(120, 90, 60, 0.25)",x.fillRect(w(0,H),w(0,Y),2,2)}),at=U(512,512,(x,H,Y)=>{x.fillStyle="#5b524c",x.fillRect(0,0,H,Y),We(x,H,Y,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),bt=U(512,512,(x,H,Y)=>{x.fillStyle="#6a6058",x.fillRect(0,0,H,Y),We(x,H,Y,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),it=U(512,512,(x,H,Y)=>{x.fillStyle="#8f6c4b",x.fillRect(0,0,H,Y),Ke(x,H,Y,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let B=0;B<260;B++){const re=w(6,H-6),ce=w(6,Y-6);x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",x.beginPath(),x.ellipse(re,ce,w(1.5,4),w(1,3),0,0,Ni*2),x.fill()}}),Re=U(256,512,(x,H,Y)=>{const B=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let re=0;for(const[ce,ze]of B)x.fillStyle=ce,x.fillRect(0,re,H,ze*Y+2),re+=ze*Y;Ke(x,H,Y,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let ce=0;ce<40;ce++){x.strokeStyle="rgba(40, 26, 18, 0.35)",x.lineWidth=2;const ze=w(0,H),mt=w(.15*Y,Y);x.beginPath(),x.moveTo(ze,mt),x.lineTo(ze+w(-10,10),mt+w(10,40)),x.stroke()}x.fillStyle="#5a7a44";for(let ce=0;ce<H;ce+=6)x.beginPath(),x.moveTo(ce,0),x.lineTo(ce+3,w(14,34)),x.lineTo(ce+6,0),x.fill()}),Ne=U(256,128,(x,H,Y)=>{x.fillStyle="#7a2420",x.fillRect(0,0,H,Y);for(let B=0;B<8;B++)x.fillStyle=B%2?"#8a2a24":"#6a1e1a",x.fillRect(B*32,0,32,Y);x.fillStyle="#e3d5b6",x.fillRect(0,Y*.46,H,Y*.08),x.fillStyle="#2a2224",x.fillRect(0,Y*.43,H,3),x.fillRect(0,Y*.57,H,3)}),Je=U(256,256,(x,H,Y)=>{for(let B=0;B<2;B++)x.fillStyle=["#a59a8c","#958a7d"][B],x.beginPath(),x.ellipse(H/2+w(-20,20),Y*(.25+B*.5),H*.32,Y*.17,w(-.3,.3),0,Ni*2),x.fill()}),et=U(512,512,(x,H,Y)=>{x.fillStyle="#5f5650",x.fillRect(0,0,H,Y),me(x,0,0,H,Y,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),je=U(512,512,(x,H,Y)=>nt(x,H,Y,["#5a3a2a","#4e3224","#62402e","#553728"])),wt=U(512,512,(x,H,Y)=>nt(x,H,Y,["#4a3226","#553a2b","#3f2a20","#4e3428"])),lt=U(512,512,(x,H,Y)=>nt(x,H,Y,["#a17a55","#94704d","#ab845e","#9a7552"])),Oe=U(512,512,(x,H,Y)=>nt(x,H,Y,["#7a5236","#6e4a31","#84593b","#734d33"])),Fe=U(512,512,(x,H,Y)=>{x.fillStyle="#3f3a3a",x.fillRect(0,0,H,Y);for(let B=0;B<4;B++)for(let re=0;re<4;re++)x.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(re+B*3)%4],x.beginPath(),x.roundRect(re*128+4,B*128+4,120,120,6),x.fill(),x.fillStyle="rgba(255,255,255,0.05)",x.fillRect(re*128+10,B*128+10,108,6)}),Ge=U(512,512,(x,H,Y)=>{x.fillStyle="#4f4843",x.fillRect(0,0,H,Y),me(x,0,0,H,Y,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),D=U(512,512,(x,H,Y)=>{x.fillStyle="#4a433f",x.fillRect(0,0,H,Y),me(x,0,0,H,Y,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Ke(x,H,Y,["#3e5a34","#4a3a30"],14,20,60,"30")}),Ze=U(512,512,(x,H,Y)=>{for(let B=0;B<8;B++)x.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][B%4],x.fillRect(B*64,0,64,Y),x.fillStyle="rgba(25, 14, 10, 0.45)",x.fillRect(B*64,0,3,Y),x.fillStyle="rgba(255, 220, 190, 0.05)",x.fillRect(B*64+8,0,3,Y);x.fillStyle="#7a2320",x.fillRect(0,34,H,70),x.strokeStyle="#d9c9a6",x.lineWidth=6,x.lineJoin="round",x.beginPath();for(let B=0;B<=H;B+=32)x.lineTo(B,B%64?52:86);x.stroke()}),Ye=U(256,256,(x,H,Y)=>{x.fillStyle="#4e1612",x.fillRect(0,0,H,Y);for(let B=0;B<8;B++){const re=B%2?16:0;for(let ce=-32;ce<H+32;ce+=32)x.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(M()*4)],x.beginPath(),x.roundRect(ce+re+1,B*32+2,30,30,[2,2,12,12]),x.fill(),x.fillStyle="rgba(255, 200, 170, 0.12)",x.fillRect(ce+re+5,B*32+5,22,3);x.fillStyle="rgba(30, 6, 6, 0.35)",x.fillRect(0,B*32,H,3)}}),Ve=U(256,256,(x,H,Y)=>{for(let B=0;B<4;B++)x.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][B],x.fillRect(B*64,0,64,Y),x.fillStyle="rgba(20, 8, 6, 0.45)",x.fillRect(B*64,0,3,Y)}),Pe=U(256,512,(x,H,Y)=>{x.fillStyle="#6e1a19",x.fillRect(0,0,H,Y),x.fillStyle="#2a1e1f",x.fillRect(0,0,H,26),x.fillRect(0,0,14,Y),x.fillRect(H-14,0,14,Y),x.fillStyle="#b08a3e",x.fillRect(0,26,H,6),x.fillStyle="#e3d5b6",x.beginPath(),x.moveTo(52,300),x.lineTo(204,300),x.lineTo(188,332),x.lineTo(156,332),x.lineTo(164,368),x.lineTo(196,368),x.lineTo(196,396),x.lineTo(60,396),x.lineTo(60,368),x.lineTo(92,368),x.lineTo(100,332),x.lineTo(68,332),x.closePath(),x.fill(),x.beginPath(),x.moveTo(128,120),x.bezierCurveTo(168,164,176,192,164,216),x.bezierCurveTo(152,236,104,236,92,216),x.bezierCurveTo(80,192,100,176,112,152),x.bezierCurveTo(120,168,124,172,132,176),x.bezierCurveTo(132,160,128,140,128,120),x.fill(),x.fillStyle="#6e1a19",x.beginPath(),x.moveTo(0,Y),x.lineTo(H/2,Y-60),x.lineTo(H,Y),x.fill()}),$e=U(64,256,(x,H,Y)=>{x.fillStyle="#6fa9c9",x.fillRect(0,0,H,Y);for(let B=0;B<40;B++)x.fillStyle=B%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",x.fillRect(B*23%64,B*41%256,3+B%3*2,18+B%5*10)}),ye=U(128,128,(x,H,Y)=>{x.fillStyle="#c4c4c4",x.fillRect(0,0,H,Y);for(let B=0;B<70;B++){const re=B*37%H,ce=(B*59+B%7*11)%Y,ze=4+B%4*3;x.fillStyle=B%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",x.beginPath(),x.ellipse(re,ce,ze,1.2+B%3*.5,B*.7%3.14,0,2*Math.PI),x.fill(),re+ze>H&&(x.beginPath(),x.ellipse(re-H,ce,ze,1.4,B*.7%3.14,0,2*Math.PI),x.fill())}}),ue=U(256,180,(x,H,Y)=>{x.fillStyle="#efe4cc",x.fillRect(0,0,H,Y),x.strokeStyle="#4f76b0",x.lineWidth=3,x.strokeRect(20,20,216,30),x.strokeRect(20,62,66,46),x.strokeRect(95,62,66,46),x.strokeRect(170,62,66,46),x.strokeRect(20,120,216,42),x.strokeStyle="#b8483e",x.beginPath(),x.moveTo(26,150),x.lineTo(80,132),x.lineTo(130,145),x.lineTo(226,126),x.stroke()}),L=U(256,200,(x,H,Y)=>{const B=x.createLinearGradient(0,0,0,Y);B.addColorStop(0,"#d98a62"),B.addColorStop(1,"#f2d2a8"),x.fillStyle=B,x.fillRect(0,0,H,Y),x.fillStyle="#5c6f48",x.beginPath(),x.moveTo(0,150),x.quadraticCurveTo(80,100,150,140),x.quadraticCurveTo(210,120,256,135),x.lineTo(256,200),x.lineTo(0,200),x.fill(),x.fillStyle="#4a3a3c",x.fillRect(150,70,44,72),x.fillStyle="#7a2420",x.beginPath(),x.moveTo(144,72),x.lineTo(172,40),x.lineTo(200,72),x.fill(),x.fillStyle="#ffd27a",x.fillRect(165,92,14,18)}),b=U(256,200,x=>{x.fillStyle="#c8b18a",x.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((H,Y)=>{x.fillStyle=H,x.fillRect(16+Y%3*78,16+Math.floor(Y/3)*60,66,48)}),x.fillStyle="#efe4cc",x.fillRect(16,140,224,44),x.fillStyle="#2b3a36",x.fillRect(28,152,120,8),x.fillRect(28,166,80,6)}),Z=U(256,160,(x,H,Y)=>{x.fillStyle="rgba(40, 200, 220, 0.18)",x.fillRect(0,0,H,Y);const B=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let re=0;re<9;re++)x.fillStyle=B[re%4],x.fillRect(18+re%3*12,18+re*14,40+re*53%140,6)}),Me=U(256,128,(x,H,Y)=>{x.fillStyle="#3d6f99",x.fillRect(0,0,H,Y),x.fillStyle="#8aa866";for(const[B,re,ce,ze]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])x.beginPath(),x.ellipse(B,re,ce,ze,.3,0,Ni*2),x.fill()}),ge=U(128,128,(x,H,Y)=>{x.fillStyle="#c9a75a",x.fillRect(0,0,H,Y);for(let B=0;B<160;B++){x.strokeStyle=B%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",x.lineWidth=2;const re=w(0,H),ce=w(0,Y);x.beginPath(),x.moveTo(re,ce),x.lineTo(re+6,ce+2),x.stroke()}}),Ie=U(128,128,x=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((H,Y)=>{x.fillStyle=H,x.beginPath(),x.arc(64,64,62-Y*12,0,Ni*2),x.fill()})}),Be=U(256,256,(x,H,Y)=>{x.fillStyle="#7a5a3c",x.fillRect(0,0,H,Y);for(let B=0;B<8;B++)x.fillStyle=B%2?"#8a9a48":"#a7a24e",x.fillRect(0,B*32+6,H,20)}),_e=U(64,64,x=>ct(x,"rgba(255,255,255,1)","rgba(255,255,255,0)")),be=U(64,64,x=>ct(x,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Ae=U(64,64,x=>{x.translate(32,32),x.fillStyle="#fff6c8",x.beginPath();for(let H=0;H<8;H++){const Y=H%2?9:30,B=H*Ni/4;x.lineTo(Math.cos(B)*Y,Math.sin(B)*Y)}x.closePath(),x.fill()}),q=U(8,512,(x,H,Y)=>{const B=x.createLinearGradient(0,0,0,Y);B.addColorStop(0,"#4c6994"),B.addColorStop(.38,"#8ea6c4"),B.addColorStop(.62,"#d8c2a6"),B.addColorStop(.8,"#e2a682"),B.addColorStop(1,"#b8674f"),x.fillStyle=B,x.fillRect(0,0,H,Y)});q.wrapS=q.wrapT=zn;const ve={grass:Xe,dirt:ut,sand:Ut,tCobble:at,tFlag:bt,tDirt:it,strata:Re,balloon:Ne,roadStones:Je,plaza:et,planksWar:je,planksDark:wt,planksLight:lt,planks:Oe,slate:Fe,stoneWall:Ge,castleWall:D,plankWall:Ze,roof:Ye,gable:Ve,banner:Pe,water:$e,ripple:ye,paper:ue,painting:L,moodboard:b,code:Z,globe:Me,straw:ge,target:Ie,field:Be,soft:_e,blob:be,spark:Ae,sky:q,grain:void 0};function xe(x,H=2.2){const Y=x.image,B=Y.width,re=Y.height;if(!(B>0)||!(re>0))return x;const ce=Y.getContext("2d");if(!ce)return x;const ze=ce.getImageData(0,0,B,re).data,mt=new Float32Array(B*re);for(let qe=0;qe<B*re;qe++)mt[qe]=((ze[qe*4]??0)*.299+(ze[qe*4+1]??0)*.587+(ze[qe*4+2]??0)*.114)/255;const xt=document.createElement("canvas");xt.width=B,xt.height=re;const ft=xt.getContext("2d");if(!ft)return x;const Pt=ft.createImageData(B,re);for(let qe=0;qe<re;qe++)for(let ht=0;ht<B;ht++){const Yt=mt[qe*B+(ht-1+B)%B]??0,tn=mt[qe*B+(ht+1)%B]??0,pn=mt[(qe-1+re)%re*B+ht]??0,A=mt[(qe+1)%re*B+ht]??0,N=(Yt-tn)*H,W=(A-pn)*H,Q=Math.hypot(N,W,1),de=(qe*B+ht)*4;Pt.data[de]=(N/Q*.5+.5)*255,Pt.data[de+1]=(W/Q*.5+.5)*255,Pt.data[de+2]=(1/Q*.5+.5)*255,Pt.data[de+3]=255}ft.putImageData(Pt,0,0);const Mt=new tc(xt);return Mt.wrapS=Mt.wrapT=ii,Mt.colorSpace=Fi,Mt.anisotropy=x.anisotropy,Mt.repeat.copy(x.repeat),Mt}const ke={},ie=(x,H)=>ke[x]||=xe(ve[x],H);function J(x,H=1,Y=1,B=2.2,re={}){const ce=H===1&&Y===1?ve[x]:k(ve[x],H,Y),ze=H===1&&Y===1?ie(x,B):k(ie(x,B),H,Y);return h("#ffffff",Object.assign({map:ce,normalMap:ze,normalScale:new Ue(1,1)},re))}ve.grain=U(256,256,(x,H,Y)=>{x.fillStyle="#d6cbbf",x.fillRect(0,0,H,Y);for(let B=0;B<70;B++){x.strokeStyle=M()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",x.lineWidth=w(1,3);const re=w(0,H);x.beginPath(),x.moveTo(re,0),x.bezierCurveTo(re+w(-8,8),Y*.3,re+w(-8,8),Y*.7,re+w(-4,4),Y),x.stroke()}for(let B=0;B<6;B++){const re=w(10,H-10),ce=w(10,Y-10);x.strokeStyle="rgba(80, 50, 30, 0.3)",x.lineWidth=2,x.beginPath(),x.ellipse(re,ce,w(3,6),w(8,14),0,0,Ni*2),x.stroke()}});const pe=x=>{const H=h(x,{map:ve.grain,normalMap:ie("grain",1.5)});return H.userData.autoUV=!0,H},De={stone:J("stoneWall",1,1,2),castle:J("castleWall",1,1,2),plankWall:J("plankWall",1,1,1.4),timber:h(Bn.timber),wood:pe(Bn.wood),woodD:pe(Bn.woodD),woodL:pe(Bn.woodL),iron:h(Bn.iron),ironL:h(Bn.ironL),rust:h(Bn.rust),bone:h(Bn.bone),boneD:h(Bn.boneD),red:h(Bn.red),redD:h(Bn.redD),redL:h(Bn.redL),black:h(Bn.black),gold:h(Bn.gold),straw:h("#ffffff",{map:ve.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:e,renderer:s,COL:Bn,GRAD:t,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:a,toon:h,glow:f,mesh:u,rbox:p,part:_,at:m,rot:g,put:S,spike:E,rnd:T,rr:I,pick:P,trnd:M,tr:w,canvasTex:U,blobs:Ke,edgeFade:rt,tiled:k,planarUV:j,wallUV:ae,instanced:le,boxes:Te,UNIT_BOX:fe,TEX:ve,nrm:ie,relief:J,woodMat:pe,M:De,_c:te}}const{PI:Kt}=Math,yn=.32,ko=s=>s.userData.up,Ty=s=>s.userData.cutY;function Ey(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:_,put:m,spike:g,rr:S,pick:E,tiled:T,planarUV:I,wallUV:P,boxes:M}=s,{SPINNERS:w,skull:U,horns:k,torch:j,flame:ae,table:ee,skullCandle:F,throne:oe,rug:se,trophy:X,hangingBanner:te,weaponRack:le,shield:fe,brazier:Te,chest:Ke,crate:rt,barrel:me,stool:We,drum:nt,poleBanner:ct,skullPole:Xe,woodpile:ut,spikes:Ut,bookshelf:at,desk:bt,candle:it,fence:Re,plant:Ne,cauldron:Je,bench:et,lampPost:je,scrollStack:wt,telescope:lt,starGlobe:Oe,crystal:Fe,wallMap:Ge,easel:D,bottle:Ze,anvil:Ye,sack:Ve,cart:Pe,roundTable:$e,mug:ye,lanternString:ue,signPost:L,bed:b,curtain:Z,partition:Me,wardrobe:ge}=e,{patch:Ie}=t,Be={},_e={war:[a.planksWar,2.6],dark:[a.planksDark,2.6],light:[a.planksLight,2.6],planks:[a.planks,2.6],tiles:[a.slate,3.6]};function be(ne,y,$,G,v,R,O={}){const C=O.T||yn,z=O.base||0,K=O.stone!==!1,he=K?1.15:z,we=K?Lt:z,Ce=K?he:z+.9,Qe=p(new Ee,0,Ce,0);ne.add(Qe),ne.userData.up=Qe,Qe.userData.movesWithWall=!0,ne.userData.cutY=Ce;const st={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function ot(St,Vt){const[Jt,Ft,kt,$t,Cn,sr,ms=0,Ta=0,no=0]=Vt,Ea=Ft-Cn/2,Aa=Ft+Cn/2,[nh,ih]=st[St];ms||no||Ea>=Ce-.01?ih.push([Jt,Ft-Ce,kt,$t,Cn,sr,ms,Ta,no]):Aa<=Ce+.01?nh.push(Vt):(nh.push([Jt,(Ea+Ce)/2,kt,$t,Ce-Ea,sr,ms,Ta,no]),ih.push([Jt,(Ce+Aa)/2-Ce,kt,$t,Aa-Ce,sr,ms,Ta,no]))}const He=G?G.x-G.w/2:0,vt=G?G.x+G.w/2:0,yt=G?[[-y/2,He],[vt,y/2]]:[[-y/2,y/2]],Et=$-he;for(const[St,Vt]of yt){const Jt=Vt-St;if(Jt<.05)continue;const Ft=(St+Vt)/2;if(K)ne.add(p(u(I(new Le(Jt,he,C+.08),1.6),o.stone),Ft,he/2,0)),Qe.add(p(u(P(new Le(Jt,Et,C),Et,1.3),o.plankWall),Ft,Et/2,0));else{const kt=Ce-he,$t=$-Ce;ne.add(p(u(P(new Le(Jt,kt,C),kt,1.3,0,Et),o.plankWall),Ft,he+kt/2,0)),Qe.add(p(u(P(new Le(Jt,$t,C),$t,1.3,kt,Et),o.plankWall),Ft,$t/2,0))}}if(G){const St=Lt+2.3,Vt=$-St;Qe.add(p(u(P(new Le(G.w,Vt,C),Vt,1.3),o.plankWall),G.x,St+Vt/2-Ce,0)),ot("timber",[G.x-G.w/2-.1,(St+.1)/2,0,.24,St+.1,C+.16]),ot("timber",[G.x+G.w/2+.1,(St+.1)/2,0,.24,St+.1,C+.16]),ot("timber",[G.x,St+.08,0,G.w+.8,.3,C+.2]);for(const Jt of[-1,1])for(let Ft=0;Ft<4;Ft++)ot("timber",[G.x+Jt*(G.w/2+.1),.35+Ft*.55,C/2+.09,.07,.07,.04]);Qe.add(p(U(.26),G.x,St+.42-Ce,C/2+.17)),Qe.add(p(k(.6),G.x,St+.48-Ce,C/2+.15));for(const Jt of[-1,1])Qe.add(p(j(),G.x+Jt*(G.w/2+.55),Lt+1.7-Ce,C/2+.02))}ot("timber",[0,he+(K?0:.09),0,y,.18,C+.12]),ot("timber",[0,$-.1,0,y,.22,C+.12]);const Nt=Math.max(1,Math.round(y/2.3)),rn=[];for(let St=1;St<Nt;St++){const Vt=-y/2+St*y/Nt;if(!(G&&Vt>He-.45&&Vt<vt+.45)){rn.push(Vt),ot("timber",[Vt,he+Et/2,0,.2,Et,C+.1]);for(const Jt of[he+.09,$-.1])ot("timber",[Vt,Jt,C/2+.08,.09,.09,.06])}}if(v)for(const St of[-y/2+.2,y/2-.2])ot("timber",[St,(z+$+.12)/2,0,.42,$-z+.12,C+.18]);const gt=[-y/2+(v?.41:0),...rn,y/2-(v?.41:0)];G&&gt.push(He-.22,vt+.22),gt.sort((St,Vt)=>St-Vt);let hn=0;for(let St=0;St<gt.length-1;St++){const Vt=gt[St],Jt=gt[St+1],Ft=Jt-Vt,kt=(Vt+Jt)/2;if(!(Ft<.9)&&!(G&&kt>He-.3&&kt<vt+.3)){if(hn++,R&&Ft>1.5&&hn%2===1){const $t=we+(K?1.62:1.35);ot("panes",[kt,$t,0,.86,.78,O.paneT||C+.04]);for(const Cn of[[kt,$t+.44,0,1.08,.1,C+.12],[kt,$t-.44,0,1.12,.12,C+.16],[kt-.48,$t,0,.1,.96,C+.12],[kt+.48,$t,0,.1,.96,C+.12],[kt,$t,0,.06,.78,C+.06],[kt,$t,0,.86,.05,C+.06]])ot("timber",Cn);for(const Cn of[-1,1])ot("shutters",[kt+Cn*.78,$t,C/2+.05,.42,.86,.05,0,Cn*.35,0]),ot("timber",[kt+Cn*.78+Cn*.012,$t,C/2+.09,.44,.08,.03,0,Cn*.35,0])}else if(Ft>1){const $t=Et-.3,Cn=Math.atan2($t,Ft-.2),sr=Math.hypot($t,Ft-.2);for(const ms of[-1,1])ot("timber",[kt,he+Et/2,C/2+.04,sr,.13,.06,0,0,ms*Cn])}}}const[Ot,si]=st.timber,[fn,mi]=st.panes,[Gn,qn]=st.shutters;M(ne,o.timber,Ot),M(Qe,o.timber,si),M(ne,o.pane,fn,!1),M(Qe,o.pane,mi,!1),M(ne,o.red,Gn),M(Qe,o.red,qn),ke(ne,Ce)}const Ae=new V,q=new Rt,ve=new Rt,xe=new Rt;function ke(ne,y){const $=ko(ne),G=new Map;ne.traverse(C=>{if(!(C instanceof Dt)||Array.isArray(C.material))return;for(let he=C;he&&he!==ne;he=he.parent)if(he===$)return;const z=C.material,K=G.get(z);K?K.push(C):G.set(z,[C])});const v=C=>{const z=C;return(z.color?z.color.r*.3+z.color.g*.59+z.color.b*.11:0)+(z.map?.5:0)},R=[...G.keys()].sort((C,z)=>v(C)-v(z));ne.updateWorldMatrix(!0,!0),xe.copy(ne.matrixWorld).invert();const O=new Set;R.forEach((C,z)=>{if(z)for(const K of G.get(C)??[]){const he=K.geometry;if(O.has(he))continue;O.add(he),q.multiplyMatrices(xe,K.matrixWorld),ve.copy(q).invert();const we=he.attributes.position;let Ce=!1;for(let Qe=0;Qe<we.count;Qe++)Ae.fromBufferAttribute(we,Qe).applyMatrix4(q),!(Math.abs(Ae.y-y)>.002)&&(Ae.y-=.003*z,Ae.applyMatrix4(ve),we.setXYZ(Qe,Ae.x,Ae.y,Ae.z),Ce=!0);Ce&&(we.needsUpdate=!0,he.computeBoundingBox(),he.computeBoundingSphere())}})}function ie(ne){const y=[],$=new Map;return ne.traverse(G=>{if(!(G instanceof Dt))return;const v=G.material;let R=$.get(v);R||(R=v.clone(),R.transparent=!0,$.set(v,R),y.push(R)),G.material=R}),y}function J(ne,y,$){const G=ne.r,v=$.pitch||.6,R=.6,O=G.d/2+R,C=new Ee;C.position.y=y-R*Math.tan(v),ne.g.add(C);const z=O*Math.tan(v),K=R*Math.tan(v),he=O/Math.cos(v),we=d("#ffffff",{map:a.roof});for(const yt of[-1,1]){const Et=u(I(new Le(G.w+R*2,.18,he),1.6),we);Et.rotation.x=yt<0?-v:v,Et.position.set(0,z/2,yt*O/2),C.add(Et)}const Ce=new Yr;Ce.moveTo(-G.d/2,K),Ce.lineTo(G.d/2,K),Ce.lineTo(0,z-.12),Ce.closePath();const Qe=new Hc(Ce),st=d("#ffffff",{map:a.gable,side:ln});for(const yt of[-1,1])C.add(p(_(u(Qe,st),0,Kt/2,0),yt*(G.w/2+.02),0,0)),C.add(p(_(U(.34),0,yt*Kt/2,0),yt*(G.w/2+.2),K+(z-K)*.42,0)),C.add(p(_(k(1.1),0,yt*Kt/2,0),yt*(G.w/2+R+.05),z+.12,0));C.add(p(u(new Le(G.w+R*2+.2,.2,.26),o.iron),0,z+.04,0));const ot=Math.floor((G.w+R)/1.5);for(let yt=0;yt<ot;yt++)g(C,new V(-G.w/2+.5+yt*(G.w-1)/Math.max(1,ot-1),z+.12,0),h,.34,.06,o.boneD,0,5);let He=null;if($.chimney){const[yt,Et]=$.chimney,Nt=z+1.4;C.add(p(u(I(new Le(.85,Nt,.85),1.2),o.stone),yt,Nt/2,Et)),C.add(p(u(new Le(1.05,.16,1.05),o.iron),yt,Nt+.05,Et)),He=[yt,Nt+.3,Et]}const vt=ie(C);return{R:C,mats:vt,base:C.position.y,hR:z,smokeAt:He}}function pe(ne){return{S:{c:[0,ne.d/2],n:[0,1],L:ne.w+yn},N:{c:[0,-ne.d/2],n:[0,-1],L:ne.w+yn},E:{c:[ne.w/2,0],n:[1,0],L:ne.d-yn},W:{c:[-ne.w/2,0],n:[-1,0],L:ne.d-yn}}}function De(ne,y){const $=new Ee;ne.add($);const G=new Ee;return G.position.set(y.c[0],0,y.c[1]),G.rotation.y=Math.atan2(y.n[0],y.n[1]),$.add(G),{sg:$,sf:G}}function x(ne,y,$){if(!y)return;y.updateWorldMatrix(!0,!0),ne.g.updateMatrixWorld(!0);const G=[];y.traverse(v=>{v instanceof Dt&&G.push(v)});for(const v of G){const R=v.geometry;R.attributes.uv||R.setAttribute("uv",new At(new Float32Array(R.attributes.position.count*2),2));const O=ff(s,v.material),C=new Dt(R,O);C.castShadow=!O.isMeshStandardMaterial,C.receiveShadow=!0,v.matrixWorld.decompose(C.position,C.quaternion,C.scale),ne.g.add(C),C.updateMatrixWorld(!0),$.attach(C)}}function H(ne,y,$,G,v,R={}){const O=R.T||yn,C=R.stone!==!1,z=R.base||0,K=C?1.15:z+.9,he=p(new Ee,0,K,0);if(y.add(he),y.userData.up=he,he.userData.movesWithWall=!0,y.userData.cutY=K,x(ne,$,y),x(ne,G,he),ke(y,K),v)for(const we of[-1,1])he.add(p(j(),v.x+we*(v.w/2+.55),Lt+1.7-K,O/2+.08))}function Y(ne,y,$,G){const v=ne.r,R=$.pitch||.6,O=.6,C=v.d/2+O,z=new Ee;z.position.y=y-O*Math.tan(R),ne.g.add(z);const K=C*Math.tan(R);x(ne,G,z);const he=ie(z);let we=null;if($.chimney){const[Ce,Qe]=$.chimney;we=[Ce,K+1.4+.3,Qe]}return{R:z,mats:he,base:z.position.y,hR:K,smokeAt:we}}const B={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function re(ne,y={}){const $=new Ee;$.position.set(ne.x,0,ne.z),$.rotation.y=ne.ry||0,r.add($);const G=ne.id||y.id,v={id:G,r:ne,g:$,sides:{},lift:0,view:"ground",deco:!!y.deco,name:ne.name,top:0},R=B[G],O=st=>R?mf(R,G+"_"+st):null;R?x(v,O("base"),$):$.add(p(u(I(new Le(ne.w+.6,Lt+.3,ne.d+.6),1.4),o.stone),0,(Lt+.3)/2-.3,0));const[C,z]=_e[ne.floor||"planks"];$.add(_(p(u(new qt(ne.w,ne.d),d("#ffffff",{map:T(C,ne.w/z,ne.d/z)}),!1),0,Lt+.004,0),-Kt/2,0,0));const K=Lt+ne.wallH,he=pe(ne),we=ne.doorLocal||[0,ne.d/2],Ce=ne.door?ne.door.side:"S";for(const[st,ot]of Object.entries(he)){const{sg:He,sf:vt}=De($,ot),yt=Math.cos(vt.rotation.y),Et=-Math.sin(vt.rotation.y),Nt=Ce===st?{x:(we[0]-ot.c[0])*yt+(we[1]-ot.c[1])*Et,w:ne.door&&ne.door.width||1.4}:null;R?H(v,vt,O(st+"_lo"),O(st+"_hi"),Nt):be(vt,ot.L,K,Nt,st==="N"||st==="S",y.windows!==!1),v.sides[st]={g:He,sf:vt,up:ko(vt),n:ot.n,s:1}}if(!R){const st=ne.doorN||[0,1],ot=Math.abs(st[0])>0?[.7,(ne.door&&ne.door.width||1.4)+.5]:[(ne.door&&ne.door.width||1.4)+.5,.7];$.add(p(u(I(new Le(ot[0],.14,ot[1]),1.2),o.stone),we[0]+st[0]*.62,.07,we[1]+st[1]*.62))}let Qe=K;if(ne.storeys===2){const st=ne.upperH||2.5,ot=p(new Ee,0,K,0);ot.userData.movesWithWall=!0,$.add(ot);const He={U:ot,sides:{},lift:0,mats:[],top:K};if(v.upper=He,R)x(v,O("Ufloor"),ot);else{const yt=d("#ffffff",{map:C}),[Et,Nt,rn,gt]=y.stairHole||[0,0,0,0],hn=ne.w/2,Ot=ne.d/2,si=y.stairHole?[[-hn,Et,-Ot,Ot],[Nt,hn,-Ot,Ot],[Et,Nt,-Ot,rn],[Et,Nt,gt,Ot]]:[[-hn,hn,-Ot,Ot]];for(const[fn,mi,Gn,qn]of si)mi-fn<.05||qn-Gn<.05||ot.add(p(u(I(new Le(mi-fn,.22,qn-Gn),z),yt),(fn+mi)/2,.09,(Gn+qn)/2))}const vt=[];for(const[yt,Et]of Object.entries(he)){const{sg:Nt,sf:rn}=De(ot,Et);R?H(v,rn,O("U"+yt+"_lo"),O("U"+yt+"_hi"),null,{base:.2,stone:!1,T:yn-.05}):(be(rn,Et.L,.2+st,null,yt==="N"||yt==="S",!0,{base:.2,stone:!1,T:yn-.05,paneT:yn-.03}),vt.push([0,.05,.2,Et.L+.2,.2,.18]),M(rn,o.timber,vt.slice(-1))),He.sides[yt]={g:Nt,sf:rn,up:ko(rn),n:Et.n,s:1}}Qe=K+.2+st}return v.top=Qe,v.roof=R?Y(v,Qe,y,O("roof")):J(v,Qe,y),Be[G]=v,v}function ce(ne,y,$,G,v){const R=ne.upper,O=12,C=R.top+.2-Lt,z=(G-$)/O,K=[];for(let st=0;st<O;st++){const ot=C*(st+1)/O;K.push([y,Lt+ot/2,$+z*(st+.5),v,ot,Math.abs(z)+.01])}M(ne.g,o.wood,K);const he=y>0?-1:1,we=y+he*(v/2+.04);for(let st=0;st<=4;st++){const ot=$+(G-$)*st/4,He=Lt+C*st/4;ne.g.add(p(u(new Le(.07,.95,.07),o.woodD),we,He+.5,ot))}const Ce=Math.hypot(G-$,C),Qe=p(u(new Le(.08,.08,Ce),o.woodL),we,Lt+C/2+.95,($+G)/2);Qe.rotation.x=-Math.atan2(C,G-$),ne.g.add(Qe)}function ze(ne,y,$,G,v){const R=Ty(ne);G>R?(y.position.set($,G-R,v),ko(ne).add(y)):(y.position.set($,G,v),ne.add(y))}const mt=(ne,y)=>ne==="S"?y:ne==="N"||ne==="E"?-y:y;function xt(ne,y,$,G,v,R=.1){const O=ne.upper.sides[y];return $.rotation.y=Kt,ze(O.sf,$,mt(y,G),v,-((yn-.05)/2+R/2+.01)),$}const ft=(ne,y,$,G,v=0)=>m(ne.upper.U,y,$,G,v,.2);function Pt(ne,y,$=0,G=.9){for(let v=0;v<y.length-1;v++){const[R,O]=y[v],[C,z]=y[v+1],K=Math.hypot(C-R,z-O),he=p(u(new Le(K,.07,.07),o.woodL),(R+C)/2,$+G,(O+z)/2);he.rotation.y=-Math.atan2(z-O,C-R),ne.add(he);const we=Math.max(1,Math.round(K/.5));for(let Ce=0;Ce<=we;Ce++)ne.add(p(u(new Le(.05,G,.05),o.woodD),R+(C-R)*Ce/we,$+G/2,O+(z-O)*Ce/we))}}function Mt(ne,y,$,G,v,R=.1,O=!0){const C=ne.sides[y];return O&&($.rotation.y=Kt),ze(C.sf,$,mt(y,G),v,O?-(yn/2+R/2+.01):yn/2+R/2+.01),$}const qe=(ne,y,$,G,v=0)=>m(ne.g,y,$,G,v,Lt),ht=(ne,y,$,G,v=0)=>m(ne.g,y,$,G,v,0),Yt=(ne,y,$)=>Qi(ne,y,$),tn=document.createElement("canvas");tn.width=512,tn.height=280;const pn=new tc(tn);pn.colorSpace=xn;let A=i;function N(ne=A){A=ne;const y=tn.getContext("2d");if(!y)return;const $=512,G=ne.filter(R=>R==="done").length;y.fillStyle="#2e2422",y.fillRect(0,0,$,280),y.fillStyle="#e3d5b6",y.font=`800 40px ${pc}`,y.textAlign="left",y.fillText("TASKS",28,58),y.fillStyle="#ffd27a",y.textAlign="right",y.fillText(`${G} / 5`,$-28,58);const v={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((R,O)=>{const C=28+O*94,z=90;y.fillStyle=v[ne[O]??"todo"],y.beginPath(),y.roundRect(C,z,78,96,14),y.fill(),y.fillStyle="rgba(255, 255, 255, 0.22)",y.beginPath(),y.roundRect(C+6,z+6,66,18,8),y.fill(),y.fillStyle="#1e1a1c",y.font=`800 46px ${pc}`,y.textAlign="center",y.fillText(R,C+39,z+70)}),y.fillStyle="#1b1616",y.beginPath(),y.roundRect(28,220,$-56,28,14),y.fill(),G&&(y.fillStyle="#d9762e",y.beginPath(),y.roundRect(28,220,($-56)*G/5,28,14),y.fill()),pn.needsUpdate=!0}N(),document.fonts&&document.fonts.ready.then(()=>N());function W(){const ne=new Ee;return ne.add(u(new Le(2.7,1.65,.1),o.woodD)),ne.add(p(new Dt(new qt(2.45,1.35),new Rn({map:pn,toneMapped:!1})),0,0,.06)),ne.add(p(u(new Le(2.9,.14,.2),o.wood),0,.9,.02)),ne.add(p(U(.18),0,1.08,.06)),ne}{const ne=Xn.war,y=re(ne,{pitch:.62}),$=Lt+ne.wallH;qe(y,ee(3.4,2,.86),-2.5,-.6);{const G=new qt(3,1.7,26,16),v=G.attributes.position,R=[];for(let C=0;C<v.count;C++){const z=v.getX(C),K=v.getY(C),he=Math.max(0,Math.sin(z*2.1+1)*Math.cos(K*2.7)*.1+Math.sin(z*5+K*3)*.03);v.setZ(C,he),R.push(...he>.08?[.86,.82,.76]:he>.03?[.5,.38,.28]:he>.005?[.42,.55,.32]:[.32,.5,.62])}G.setAttribute("color",new At(R,3)),G.computeVertexNormals();const O=_(p(u(G,new qo({vertexColors:!0,gradientMap:c}),!1),-2.5,Lt+.91,-.6),-Kt/2,0,0);y.g.add(O);for(const[C,z,K]of[[-.9,-.3,l.red],[.4,.3,"#3f5f8f"],[1,-.4,l.gold],[-.2,-.5,l.red]])y.g.add(p(u(new tt(.012,.012,.24,4),o.dark,!1),-2.5+C,Lt+1.05,-.6+z)),y.g.add(p(u(new Le(.12,.07,.01),d(K),!1),-2.5+C+.06,Lt+1.13,-.6+z));for(const[C,z]of[[-1.55,-.85],[1.55,.85]])qe(y,F(),-2.5+C,-.6+z).position.y=Lt+.9}qe(y,oe(),-6.1,-2.6,In(-6.1,-2.6,-2.5,-.6)),qe(y,se(1.6,[l.redD,l.bone,l.red,l.black,l.redL,l.redD]),-4.6,.6),Mt(y,"N",W(),3.8,Lt+1.95,.12),Mt(y,"N",X(),-2.5,Lt+2.2,.1),Mt(y,"N",X(),.9,Lt+2.1,.1),Mt(y,"N",te(1,1.9),-5.4,$-.3,.04),Mt(y,"N",te(1,1.9),6.4,$-.3,.04),Mt(y,"W",le(4),.6,Lt,.3),Mt(y,"E",fe(l.red),-2,Lt+1.9,.1),Mt(y,"E",fe(l.black),1.2,Lt+1.9,.1),qe(y,Te(7),6.3,-3.3),qe(y,Te(0,.85),-6.7,3.5),qe(y,Ke(),6.3,1.6,-Kt/2),qe(y,rt(.6),5.3,3.6,.3),qe(y,rt(.45),5.9,3.7,.9),qe(y,me(.9),-6.6,-.6),qe(y,We(),-.9,-2.2),Ie("plaza",...Yt(ne,0,7.4),5.8,3.6,-ne.ry,.014),ht(y,nt(),-4.4,6,.3),ht(y,nt(),5.6,5.9,-.2),ht(y,ct(3.4),-2.6,5),ht(y,ct(3.4),2.6,5),ht(y,Xe(2.6),-7,6.2),ht(y,Xe(2.2),7.8,5.4),ht(y,Te(0),-6.2,5),ht(y,ut(2.4),-3,-6),ht(y,me(),4.4,-5.6),ht(y,me(.9),5,-6.1),ht(y,me(1,!0),3.6,-6.2,.4),ht(y,_(le(4),0,Kt,0),.8,-5.6),ht(y,Ut(3),-8.6,-1,Kt/2)}{const ne=Xn.library,y=re(ne,{pitch:.66,stairHole:[4,4.84,-2,0]}),$=Lt+ne.wallH;for(const R of[-3.6,-1.4])qe(y,at(2),R,-ne.d/2+yn/2+.27);for(const R of[-2.1,.3])qe(y,at(2),-ne.w/2+yn/2+.27,R,Kt/2);const G=bt("books");qe(y,G.g,1.8,-1.2),qe(y,it(.18,4),2.45,-.95).position.y=Lt+.79;{const R=new Ee;R.add(p(u(new Le(1,.45,.9),d("#5a1f2a")),0,.3,0)),R.add(p(u(new Le(.86,.12,.74),d("#7a2a36")),0,.58,.04)),R.add(p(u(new Le(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const O of[-1,1])R.add(p(u(new Le(.2,.6,.9),d("#4a1822")),O*.5,.52,0));qe(y,R,-3.3,1.9,.9)}qe(y,se(1.5,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const R=new Ee;R.add(p(u(new tt(.08,.2,1,8),o.woodD),0,.5,0)),R.add(_(p(u(new Le(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),R.add(_(p(u(new Le(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),qe(y,R,2.3,2.5,-.5)}{const R=new Ee;R.add(p(u(new tt(.05,.2,.9,10),o.woodD),0,.45,0));const O=p(new Ee,0,1.25,0);O.rotation.z=.4;const C=u(new Xt(.34,24,16),d("#ffffff",{map:a.globe}));O.add(C),O.add(_(u(new mn(.4,.02,6,28),o.gold),0,Kt/2,0)),R.add(O),qe(y,R,.5,3),w.push({o:C,axis:"y",v:.25})}{const R=new Ee;R.add(p(u(new tt(.16,.26,.9,8),o.woodD),0,.45,0)),R.add(p(u(new Xt(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let O=0;O<3;O++){const C=O/3*Kt*2;g(R,new V(Math.cos(C)*.14,.92,Math.sin(C)*.14),new V(Math.cos(C),2,Math.sin(C)),.3,.03,o.bone,0,5)}qe(y,R,3,-3.2)}const v=[];for(const[R,O,C]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[z,K]=Yt(ne,R,O);let he=Lt;for(let we=0;we<C;we++){const Ce=S(.06,.1);v.push({x:z+S(-.03,.03),y:he+Ce/2,z:K+S(-.03,.03),sx:S(.32,.42),sy:Ce,sz:S(.24,.3),ry:ne.ry+S(-.3,.3),c:E(e.BOOK_COLS)}),he+=Ce}}s.instanced(s.UNIT_BOX,v,{cast:!0}),qe(y,F(),-4.3,3.4).position.y=Lt+.42,qe(y,it(.5),-4.5,2.9),qe(y,it(.34),-4.2,2.7),Mt(y,"E",te(.9,1.6),-3,$-.3,.04),Mt(y,"S",X(),1.6,Lt+2.1,.1);{const R=new Ee;R.add(p(u(new tt(2.2,2.4,7.6,22),d("#ffffff",{map:T(a.castleWall,3.5,2.4)})),0,3.8,0)),R.add(p(u(new tt(2.6,2.4,.4,22),o.stone),0,7.7,0)),R.add(p(u(new gn(2.9,3.6,22),d("#ffffff",{map:T(a.roof,5,2)})),0,9.7,0)),R.add(p(U(.45),0,11.8,0));for(const[O,C]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])R.add(p(_(u(new Le(.4,.9,.12),o.pane,!1),0,-O+Kt/2,0),Math.cos(O)*2.32,C,Math.sin(O)*2.32));R.add(p(_(te(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),ht(y,R,5.6,3.4)}Re(y.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let R=0;R<10;R++)ht(y,Ne(S(.6,.9)),S(-8.6,-6.2),S(5.3,7.1));ht(y,Je(),1.2,6.2),ht(y,et(1.6,!0),3,6.7,Kt),ht(y,Xe(2.2),-.4,5.6),ht(y,je(0),-4.6,4.6),ht(y,rt(.55),6.2,-1.4,.3),ht(y,rt(.4),6.3,-.8,.8),Ie("dirt",...Yt(ne,.5,6.4),4.6,2.2,-ne.ry,.013),ce(y,4.42,-3.4,-.2,.84),Pt(y.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const R of[-3.6,-1.4,1])ft(y,at(2),R,-ne.d/2+yn/2+.27);for(const R of[-2.1,.3,2.5])ft(y,at(2),-ne.w/2+yn/2+.27,R,Kt/2);ft(y,ee(2.2,1,.8,o.wood),.2,.7),ft(y,wt(),-.4,.6).position.y=1.04,ft(y,wt(),.9,.9).position.y=1.04,ft(y,p(u(new Le(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,ft(y,it(.2),-.6,1).position.y=1,ft(y,it(.14),.95,.4).position.y=1,ft(y,We(),.2,1.6),ft(y,We(),-.9,1.5),ft(y,lt(),2.4,2.9,Kt),ft(y,Oe(),-2.6,2.6),ft(y,Fe(),2.9,-2.8),ft(y,se(1.3,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),.2,.7),xt(y,"S",Ge(),-.6,1.75,.06),xt(y,"E",X(),2.4,1.8,.1),ft(y,Ke(),-3.6,3.2,0)}{const ne=Xn.studio,y=re(ne,{pitch:.58}),$=Lt+ne.wallH,G=bt("paper");qe(y,G.g,-2,-1.6);{const K=new Ee;K.add(u(new Le(1.6,1.25,.08),o.wood)),K.add(p(new Dt(new qt(1.45,1.1),new Rn({map:a.moodboard,toneMapped:!1})),0,0,.05)),Mt(y,"N",K,1.6,Lt+1.75,.08)}qe(y,ee(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[K,he,we]of[[-.35,-.1,"#3f5f8f"],[0,.12,l.red],[.32,-.05,l.gold],[.12,-.2,"#5f8a52"]])qe(y,p(u(new tt(.08,.09,.16,12),d(we)),0,.08,0),2.6+K,-2+he).position.y=Lt+.78;for(let K=0;K<3;K++){const he=p(u(new Le(.8,.6,.04),d(E(["#efe4cc","#e2d4b6"]))),0,.3,0);he.rotation.x=-.22,qe(y,he,3.7-K*.1,1.4+K*.12,-Kt/2)}qe(y,Ne(1.1),3.8,2.8),qe(y,Ne(.9),-3.8,2.9),qe(y,at(1.6),-ne.w/2+yn/2+.27,.6,Kt/2),Mt(y,"E",te(.9,1.5),.6,$-.3,.04);const[v,R,O,C]=ne.deck;y.g.add(p(u(I(new Le(R-v,.2,C-O),2.6),d("#ffffff",{map:a.planks})),(v+R)/2,.1,(O+C)/2));const z=p(new Ee,0,.2,0);y.g.add(z),Re(z,[[v,O+.1],[v,C],[-2,C]],.85),Re(z,[[3.4,C],[R,C],[R,O+.1]],.85),m(z,D(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(z,et(1.6,!0),3,4.4,0),m(z,Ne(1),-3.7,4),m(z,Ne(.8),3.8,7.1),m(z,je(0),-3.9,7.3),m(z,p(u(new tt(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(z,p(u(new tt(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let K=0;K<14;K++)ht(y,p(u(new Xt(.14,8,6),d(E([l.red,l.bone,"#d98a3a",l.redL]))),0,.14,0),S(-3.5,3.5),S(-5.2,-4.2));ht(y,Xe(2),4.9,-4.6)}const Q=bt("screen"),de=bt("screen");{const ne=Xn.workshop,y=re(ne,{pitch:.6,chimney:[-4,-1.6]}),$=Lt+ne.wallH;qe(y,Q.g,-3,-1.4),qe(y,de.g,2,-1.4),qe(y,Fe(),-5,2.6);{const G=new Ee;for(const v of[.9,1.5])G.add(p(u(new Le(2.4,.06,.4),o.wood),0,v,0));for(const v of[-1,1])G.add(p(u(new Le(.06,1.7,.4),o.woodD),v*1.2,.85,0));for(let v=0;v<7;v++)G.add(p(Ze(E(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+v*.32,.93+v%2*.6,0));G.add(p(U(.14),.9,1.65,0)),qe(y,G,-.5,-ne.d/2+yn/2+.25)}{const G=ee(2,.8,.86,o.woodD);G.add(p(Ye(),.4,.9,0)),G.add(_(p(u(new tt(.02,.02,.4,6),o.wood),-.5,.92,.1),Kt/2,0,.4)),qe(y,G,3.9,-3.2)}{const G=new Ee;G.add(p(u(new Le(.9,.8,.8),o.iron),0,.4,0)),G.add(p(u(new qt(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),G.add(p(u(new tt(.1,.1,2.2,8),o.iron),0,1.9,-.2)),qe(y,G,-5.2,.7,Kt/2)}for(const[G,v,R,O]of[[4.2,1.7,.4,l.gold],[3.5,1.35,.26,l.ironL]]){const C=new Ee;C.add(_(u(new tt(R,R,.1,18),d(O)),Kt/2,0,0));for(let z=0;z<10;z++){const K=z/10*Kt*2;C.add(p(u(new Le(.12,.12,.1),d(O)),Math.cos(K)*(R+.05),Math.sin(K)*(R+.05),0))}Mt(y,"N",C,G,Lt+v,.1),w.push({o:C,axis:"z",v:O===l.gold?.6:-.9})}Mt(y,"W",le(4),-1.2,Lt,.3),Mt(y,"S",te(1,1.7),-2.4,$-.3,.04),Mt(y,"S",fe(l.red),2.6,Lt+1.8,.1),qe(y,me(),-5.2,-3.2),qe(y,rt(.6),-4.6,-3.4,.3),qe(y,rt(.6),5,3.2,.2),qe(y,Ve(),4.3,3.4),Ie("dirt",...Yt(ne,0,6.2),6.6,2.8,-ne.ry,.013),ht(y,ut(2.6),-2.6,5.4),ht(y,Pe(),2.6,6.2,.4);{const G=new Ee;G.add(p(u(new tt(.4,.45,.6,12),o.woodL),0,.3,0)),G.add(_(p(u(new tt(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),G.add(_(p(u(new Le(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),ht(y,G,-5,5.6)}ht(y,me(),5.2,5),ht(y,me(.85),5.8,5.6),ht(y,Xe(2.4),-6.6,6.8),ht(y,Te(0,.9),7.4,-1.4)}let Se;{const ne=Xn.tavern,y=re(ne,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),$=Lt+ne.wallH;{const G=new Ee;G.add(p(u(new Le(.9,1.1,5),o.wood),0,.55,0)),G.add(p(u(new Le(1.1,.08,5.2),o.woodL),0,1.14,0));for(let R=0;R<5;R++)G.add(p(u(new Le(.02,.9,.9),o.woodD),-.46,.5,-2+R));for(let R=0;R<6;R++)G.add(p(Ze(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),S(-.2,.2),1.18,-2.2+R*.8));G.add(p(U(.2),0,1.3,2.3)),qe(y,G,4.1,-.6);const v=new Ee;for(const R of[1.5,2])v.add(p(u(new Le(.3,.05,4),o.wood),0,R,0));for(let R=0;R<10;R++)v.add(p(Ze(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,R%2?2.03:1.53,-1.8+R*.4));qe(y,v,5.12,-.6),qe(y,me(.9,!0),4.85,2.6,Kt/2),qe(y,me(.9,!0),4.85,3.4,Kt/2)}{const G=new Ee;G.add(p(u(I(new Le(2.6,2,.9),1.4),o.stone),0,1,0)),G.add(p(u(new Le(2.9,.18,1.1),o.wood),0,2.05,.05)),G.add(p(u(new qt(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),G.add(p(Je(),0,0,.85)),G.add(p(U(.22),0,2.32,.1)),Se=new zi("#ff9a4a",12,9,2),Se.position.set(0,.9,1.2),G.add(Se),ae(G,0,.3,.3,1.4),qe(y,G,-1.5,-ne.d/2+yn/2+.46)}qe(y,$e(),-2.2,.8),qe(y,We(),-3.1,.8),qe(y,We(),-1.3,.8),qe(y,$e(.65),1,2.3),qe(y,We(),.1,2.3),qe(y,We(),1.9,2.3),qe(y,We(),1,3.2);for(const[G,v]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])qe(y,ye(),G,v).position.y=Lt+.8;qe(y,We(),3.2,-2.4),Mt(y,"N",X(),2.6,Lt+2.1,.1),Mt(y,"S",fe(l.black),-3,Lt+1.9,.1),Mt(y,"S",te(.9,1.6),1.6,$-.3,.04),Mt(y,"W",X(),-2.6,Lt+2.2,.1),Ie("dirt",...Yt(ne,-.5,6.4),4.8,2.6,-ne.ry,.013),ht(y,ee(3.6,.9,.8,o.woodL),.4,6.55),ht(y,et(3.6,!1),.4,5.75),ht(y,et(3.6,!1),.4,7.35,Kt);for(const[G,v]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])ht(y,ye(),G,v).position.y=.84;Re(y.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[G,v]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])ht(y,p(u(new tt(.06,.08,2.6,6),o.woodD),0,1.3,0),G,v);ue(y.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),ht(y,me(),3,5.2),ht(y,me(.8,!0),2.6,7.9,.3),ht(y,L("TAVERN"),-6.4,3.6,-Kt/2),ht(y,Xe(2.2),-8.4,5.6),ce(y,-4.89,-3.6,-.6,.9),Pt(y.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[G,v]of[[-2.6,l.red],[.8,"#3f5f8f"],[4,l.redD]])ft(y,b(v),G,-2.75),ft(y,Ke(),G+.95,-3.4,Kt/2).scale.setScalar(.7),ft(y,Z(.8,1.6),G-.5,-1.35),ft(y,it(.16),G-.62,-3.55);for(const G of[-.9,2.4])ft(y,Me(2.5),G,-2.6);{const G=u(new qt(8.6,1.1),d(l.redD),!1);G.rotation.x=-Kt/2,ft(y,G,.4,.9).position.y=.212}ft(y,ge(),.8,3.45,Kt),ft(y,et(1.6,!0),2.8,3.4,Kt),ft(y,ee(.9,.7,.8,o.woodL),4.4,1.6),ft(y,We(),4.4,2.4),ft(y,it(.16,0),4.5,1.5).position.y=1;{const G=new Ee;G.add(p(u(new tt(.06,.12,.8,8),o.woodD),0,.4,0)),G.add(p(u(new tt(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),G.add(_(p(u(new li(.24,14),d("#5f8fa8"),!1),0,.92,0),-Kt/2,0,0)),ft(y,G,-2.2,3.3)}ft(y,Ne(.9),-3.6,3.3),xt(y,"S",fe(l.red),-1.2,1.7,.1),xt(y,"E",te(.9,1.5),1.6,2.5,.04)}return{HOUSES:Be,buildHouse:re,inH:qe,outH:ht,onWall:Mt,W2:Yt,deskF:Q,deskB:de,hearthLight:Se,drawBoard:N}}const{PI:on}=Math;function zo(s,e,t){let n=1e9;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[l,a]=t[i+1],c=l-r,h=a-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(e-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,e-o-h*f))}return n}function Qu(s,e,t,n){const i=t?[...s,s[0]]:s,r=[],o=[],l=[];let a=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(t&&(h===0||h===i.length-1)){const E=s[s.length-1],T=s[1];u=T[0]-E[0],p=T[1]-E[1]}const _=Math.hypot(u,p)||1,m=-p/_,g=u/_,S=i[h];if(h>0){const E=i[h-1];a+=Math.hypot(S[0]-E[0],S[1]-E[1])}if(r.push(S[0]+m*e/2,n,S[1]+g*e/2,S[0]-m*e/2,n,S[1]-g*e/2),o.push(0,a,1,a),h>0){const E=h*2;l.push(E-2,E,E-1,E-1,E,E+1)}}const c=new en;return c.setAttribute("position",new At(r,3)),c.setAttribute("uv",new At(o,2)),c.setIndex(l),c.computeVertexNormals(),c}async function Ay(s,e,t){const{scene:n,TEX:i,toon:r,mesh:o,at:l,rot:a,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:_,instanced:m}=s,{SPINNERS:g,plantFlora:S,skullPole:E,totem:T,brazier:I,hay:P}=e,M=new V(-62,27,70).normalize(),w=new Dt(new Xt(600,32,16),new Hn({side:Nn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new _t("#2b3b78")},mid:{value:new _t("#7f8fc4")},hor:{value:new _t("#f2aa7c")},low:{value:new _t("#c98a72")},sunCol:{value:new _t("#ffa864")},sunDir:{value:M}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));w.renderOrder=-100,w.frustumCulled=!1,n.add(w),n.fog=new Ic("#d6a487",230,640),n.add(new Y0("#9aa8d8","#4a3428",1.05));const U=new Xd("#ffb070",2.3);U.position.copy(M).multiplyScalar(110),U.castShadow=!0,U.shadow.mapSize.set(4096,4096),Object.assign(U.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),U.shadow.camera.updateProjectionMatrix(),U.shadow.bias=-5e-4,U.shadow.normalBias=.05,n.add(U);const k=new Yr;for(let Oe=0;Oe<=160;Oe++){const Fe=Oe/160*on*2,Ge=as(Fe),D=Math.cos(Fe)*Ge,Ze=-Math.sin(Fe)*Ge;Oe===0?k.moveTo(D,Ze):k.lineTo(D,Ze)}const j=new aa(k,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});j.rotateX(-on/2);const ae=c(i.grass,1/9,1/9);function ee(Oe,Fe){const Ge=i.strata.clone();return Ge.wrapS=ii,Ge.wrapT=zn,Ge.repeat.set(1/8,-1/(Fe-Oe)),Ge.offset.set(0,Fe/(Fe-Oe)),Ge.needsUpdate=!0,r("#ffffff",{map:Ge})}const F=new Dt(j,[r("#ffffff",{map:ae}),ee(-1.9,1.5)]);F.position.y=-2.9,F.receiveShadow=!0,n.add(F);const oe=ay(s,await t);n.add(oe.underside);for(const Oe of["walls","towers","gate"])n.add(oe[Oe]);const se=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),X=new Xt(1,16,12),te=new Ee;n.add(te);for(let Oe=0;Oe<22;Oe++){const Fe=Oe/22*on*2+d(-.12,.12),Ge=d(100,260),D=d(1.6,3.2),Ze=new Ee;for(let Ye=0;Ye<7;Ye++){const Ve=new Dt(X,se),Pe=d(1.6,2.8)*D;Ve.scale.set(Pe,Pe*.7,Pe),Ve.position.set(d(-3.5,3.5)*D,d(-.3,1.2)*D,d(-1.8,1.8)*D),Ze.add(Ve)}Ze.position.set(Math.cos(Fe)*Ge,d(-45,28),Math.sin(Fe)*Ge),te.add(Ze)}{const Oe=[],Fe=[],Ge=[];for(let D=0;D<420;D++){const Ze=D/420*on*2+d(-.006,.006),Ye=as(Ze);if(h()<.55){const Ve=d(.5,2.8),Pe=d(-.55,-1.8);Oe.push({x:Math.cos(Ze)*(Ye+.8),y:Pe-Ve/2,z:Math.sin(Ze)*(Ye+.8),sx:d(.7,1.3),sy:Ve,sz:d(.7,1.3),rx:on+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}D%2===0&&Fe.push({x:Math.cos(Ze)*(Ye+.3),y:-.06,z:Math.sin(Ze)*(Ye+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let D=0;D<7;D++){const Ze=d(0,on*2),Ye=as(Ze)+d(4,12);Ge.push({x:Math.cos(Ze)*Ye,y:d(-14,-4),z:Math.sin(Ze)*Ye,s:d(.8,2.2)})}m(new gn(.06,1,4),Oe,{}),m(new Xt(1,10,6),Fe,{});for(const D of Ge){const Ze=new Ee;Ze.add(l(o(new Mi(1.2*D.s,0),r("#6e5240")),0,-.4*D.s,0)),Ze.add(l(o(new tt(1*D.s,1.1*D.s,.3*D.s,9),r("#6f8b49")),0,.5*D.s,0)),h()<.6&&Ze.add(l(e.tree(f(["pine","autumn","dead"]),.5*D.s),0,.6*D.s,0)),Ze.position.set(D.x,D.y,D.z),Ze.rotation.y=d(0,6),n.add(Ze)}}const le=ee(-.75,1.35),fe={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},Te=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Ke(Oe,Fe,Ge,D,Ze){S(Fe,Ge,Oe.position.x+D,Oe.position.z+Ze,Oe.position.y)}function rt(Oe,Fe,Ge,D){const{trees:Ze,clear:Ye}=fe[Ge],Ve=Fe/10,Pe=[...Ye.map(([ye,ue,L])=>[ye,ue,L]),...D.map(([ye,ue])=>[ye,ue,.16])],$e=(ye,ue,L)=>{for(let b=0;b<60;b++){const Z=d(0,on*2),Me=d(ye,ue),ge=Math.cos(Z)*Me,Ie=Math.sin(Z)*Me;if(Pe.every(([Be,_e,be])=>Math.hypot(ge-Be,Ie-_e)>be+L))return Pe.push([ge,Ie,L]),[ge*Fe,Ie*Fe]}return null};for(let ye=0;ye<7;ye++){const ue=$e(.3,.74,.12);ue&&S(Ze[ye%Ze.length],d(1,1.3)*Ve,Oe.position.x+ue[0],Oe.position.z+ue[1],Oe.position.y)}for(let ye=0;ye<9;ye++){const ue=$e(.15,.78,.05);ue&&S(f(Te),d(.75,1.25)*Ve,Oe.position.x+ue[0],Oe.position.z+ue[1],Oe.position.y)}}const me=c(i.water,1,4);function We(Oe,Fe,Ge,D,Ze,Ye){const Ve=new Ee;Ve.position.set(Oe,Fe,Ge),n.add(Ve);const Pe=new Yr;for(let L=0;L<=56;L++){const b=L/56*on*2,Z=D*(1+.12*Math.sin(3*b+Ye)+.07*Math.sin(5*b+2*Ye));L===0?Pe.moveTo(Math.cos(b)*Z,-Math.sin(b)*Z):Pe.lineTo(Math.cos(b)*Z,-Math.sin(b)*Z)}const $e=new aa(Pe,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});$e.rotateX(-on/2),Ve.add(l(new Dt($e,[r("#ffffff",{map:ae}),le]),0,-1.75,0));const ye=o(new gn(D*.95,D*2.3,12,3),r("#6e5240"),!1);ye.rotation.x=on,ye.position.y=-2.1-D*1.15,Ve.add(ye);for(let L=0;L<14;L++){const b=d(0,on*2),Z=d(.2,.9);Ve.add(l(a(o(new Mi(d(.8,2)*(D/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(b)*D*.95*Z,-2.1-(1-Z)*D*2.3,Math.sin(b)*D*.95*Z))}for(let L=0;L<26;L++){const b=d(0,on*2),Z=d(.6,2.4);Ve.add(l(a(o(new gn(.07,Z,4),r("#4a3424")),on,0,0),Math.cos(b)*D*1.02,-.6-Z/2,Math.sin(b)*D*1.02))}const ue=D/10;if(Ze==="ruin"){const L=l(new Ee,-D*.25,0,-D*.1);L.add(l(o(new tt(1.7*ue,1.9*ue,5.5*ue,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*ue,0));for(let Z=0;Z<7;Z++){const Me=Z/7*on*2;L.add(l(o(new Le(.7*ue,d(.4,1.6)*ue,.5*ue),_.stone),Math.cos(Me)*1.6*ue,5.6*ue,Math.sin(Me)*1.6*ue))}L.add(l(o(new Le(.4*ue,1*ue,.1),_.pane,!1),0,2.6*ue,1.85*ue)),Ve.add(L);for(const Z of[-1,1])Ve.add(l(o(new Le(.7*ue,3.2*ue,.7*ue),_.stone),D*.35+Z*1.3*ue,1.6*ue,D*.3));Ve.add(l(o(new Le(3.3*ue,.6*ue,.7*ue),_.stone),D*.35,3.4*ue,D*.3)),Ve.add(l(E(2.4),D*.1,0,D*.5));const b=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[Z,Me,ge]of b)Ke(Ve,ge,1.2*ue,Z*D,Me*D);rt(Ve,D,Ze,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(Ze==="farm"){const L=l(new Ee,-D*.2,0,-D*.15);L.add(l(o(u(new Le(3.6*ue,2.2*ue,2.8*ue),2.2*ue,1.3),_.plankWall),0,1.1*ue,0));const b=new tt(2.1*ue,2.1*ue,4*ue,3,1);L.add(l(a(o(b,r("#ffffff",{map:i.roof})),0,0,on/2),0,2.2*ue+.9*ue,0)),L.add(l(o(new Le(.8*ue,1.5*ue,.1),_.woodD),0,.75*ue,1.42*ue)),L.add(l(o(new Le(.6*ue,.6*ue,.1),_.pane,!1),1.1*ue,1.3*ue,1.42*ue)),Ve.add(L);const Z=o(new qt(D*.8,D*.5),r("#ffffff",{map:i.field}),!1);Z.rotation.x=-on/2,Z.position.set(D*.3,.03,D*.25),Ve.add(Z);const Me=l(new Ee,D*.35,0,-D*.45);Me.add(l(o(new tt(.8*ue,1.2*ue,4*ue,12),r("#e3d5b6")),0,2*ue,0)),Me.add(l(o(new gn(1.2*ue,1.4*ue,12),r("#ffffff",{map:i.roof})),0,4.7*ue,0));const ge=l(new Ee,0,3.6*ue,1*ue);for(let Ie=0;Ie<4;Ie++){const Be=new Ee;Be.rotation.z=Ie*on/2,Be.add(l(o(new Le(.5*ue,2.6*ue,.04),r("#e3d5b6",{side:ln})),.3*ue,1.5*ue,0)),ge.add(Be)}Me.add(ge),g.push({o:ge,axis:"z",v:.4}),Ve.add(Me),Ke(Ve,"tree_maple",1.1*ue,-D*.55,D*.4),Ve.add(l(P(.5*ue),D*.05,0,D*.55)),rt(Ve,D,Ze,[[-.55,.4]])}else if(Ze==="shrine"){for(let b=0;b<6;b++){const Z=b/6*on*2;Ve.add(l(a(o(new Le(.7*ue,d(2,3)*ue,.5*ue),_.stone),0,-Z,d(-.1,.1)),Math.cos(Z)*3*ue,1.2*ue,Math.sin(Z)*3*ue))}Ve.add(T(4*ue));for(const b of[.8,3.9])Ve.add(l(I(0,1.2*ue),Math.cos(b)*1.8*ue,0,Math.sin(b)*1.8*ue));const L=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[b,Z]of L)Ke(Ve,"tree_maple",1.1*ue,b*D,Z*D);rt(Ve,D,Ze,L)}else{const L=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[Me,ge,Ie]of L)Ke(Ve,Ie,1.2*ue,Me*D,ge*D);rt(Ve,D,Ze,L),Ve.add(l(a(o(new li(D*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-on/2,0,0),D*.25,.04,D*.3));const b=new Dt(new qt(1.8*ue,D*3.2),new Rn({map:me,color:"#acb5c8",transparent:!0,opacity:.85,side:ln,depthWrite:!1}));b.position.set(D*.62,-D*1.6,D*.62),b.rotation.y=on/4,Ve.add(b);const Z=o(new qt(1.2*ue,D*.55),r("#6fa9c9"),!1);Z.rotation.set(-on/2,0,-on/4),Z.position.set(D*.45,.05,D*.45),Ve.add(Z)}return Ve}We(-150,6,-105,11,"ruin",.4),We(165,-4,-60,13,"farm",1.7),We(115,20,135,9,"shrine",2.9),We(-165,-14,85,12,"falls",4.1);const nt={};function ct(Oe){const Fe=nt[Oe];if(Fe)return Fe;const Ge={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Oe],D=s.canvasTex(256,256,(Ye,Ve,Pe)=>{const $e=Ye.createRadialGradient(Ve/2,Pe/2,Ve*.3,Ve/2,Pe/2,Ve/2);$e.addColorStop(0,"rgba(255,255,255,1)"),$e.addColorStop(1,"rgba(255,255,255,0)"),Ye.fillStyle=$e,Ye.fillRect(0,0,Ve,Pe)});D.wrapS=D.wrapT=zn;const Ze={src:Ge,mask:D};return nt[Oe]=Ze,Ze}let Xe=0;function ut(Oe,Fe,Ge,D,Ze,Ye=0,Ve=.012,Pe=4){const $e=ct(Oe),ye=c($e.src,D*2/Pe,Ze*2/Pe),ue=new Dt(new qt(D*2,Ze*2),r("#ffffff",{map:ye,alphaMap:$e.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Xe}));return ue.rotation.set(-on/2,0,Ye),ue.position.set(Fe,Ve,Ge),ue.receiveShadow=!0,ue.renderOrder=-10+Xe++*.01,n.add(ue),ue}const Ut={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},at={},bt=Oe=>{const Fe=Math.max(0,Math.min(1,Oe));return Fe*Fe*(3-2*Fe)},it=[],Re=Oe=>Oe==="cobble"||Oe==="flag",Ne=Oe=>Oe.closed?[...Oe.line,Oe.line[0]]:Oe.line;function Je(Oe,Fe){let Ge=null,D=1e9;for(const Ze of bi){if(Ze===Fe||Ze.kind==="stones")continue;const Ye=zo(Oe[0],Oe[1],Ne(Ze))-Ze.w/2;Ye<D&&(D=Ye,Ge=Ze)}return D<.6?Ge:null}function et(Oe,Fe,Ge){const D=Ne(Ge),Ze=Ge.w/2+.02,Ye=Fe?[...Oe].reverse():[...Oe];let Ve=0;for(;Ve<Ye.length-2&&zo(Ye[Ve][0],Ye[Ve][1],D)<Ze;)Ve++;if(Ve===0)return null;let Pe=Ye[Ve-1],$e=Ye[Ve];for(let L=0;L<12;L++){const b=[(Pe[0]+$e[0])/2,(Pe[1]+$e[1])/2];zo(b[0],b[1],D)<Ze?Pe=b:$e=b}const ue=[[(Pe[0]+$e[0])/2,(Pe[1]+$e[1])/2],...Ye.slice(Ve)];return Fe?ue.reverse():ue}function je(Oe,Fe){const Ge=Oe.kind;let D=Ne(Oe);const Ze=Oe.closed?[!1,!1]:[!Oe.refs[0],!Oe.refs[Oe.refs.length-1]];if(!Oe.closed&&Re(Ge))for(const Ae of[0,1]){if(!Ze[Ae])continue;const q=Ae?D[D.length-1]:D[0],ve=Je(q,Oe);if(!ve||ve.kind===Ge||!Re(ve.kind))continue;const xe=et(D,Ae===1,ve);if(!xe)continue;D=xe,Ze[Ae]=!1;const ke=Ae?D[D.length-1]:D[0],ie=Ae?D[D.length-2]:D[1],J=Math.hypot(ke[0]-ie[0],ke[1]-ie[1])||1;it.push({x:ke[0],z:ke[1],tx:(ke[0]-ie[0])/J,tz:(ke[1]-ie[1])/J,w:Oe.w,kind:Ge})}const Ye=D.length,[Ve,Pe,$e,ye]=Ut[Ge],ue=[0];for(let Ae=1;Ae<Ye;Ae++){const q=D[Ae],ve=D[Ae-1];ue.push(ue[Ae-1]+Math.hypot(q[0]-ve[0],q[1]-ve[1]))}const L=ue[Ye-1],b=.02+Fe*.0015,Z=[],Me=[],ge=[],Ie=[];for(let Ae=0;Ae<Ye;Ae++){const q=D[Math.max(0,Ae-1)],ve=D[Math.min(Ye-1,Ae+1)];let xe=ve[0]-q[0],ke=ve[1]-q[1];if(Oe.closed&&(Ae===0||Ae===Ye-1)){const ce=D[Ye-2],ze=D[1];xe=ze[0]-ce[0],ke=ze[1]-ce[1]}const ie=Math.hypot(xe,ke)||1,J=-ke/ie,pe=xe/ie;let De=1,x=1;if(!Oe.closed)for(const ce of[0,1]){const ze=ce?L-ue[Ae]:ue[Ae];Ze[ce]&&(De=Math.max(De,1+.5*(1-bt(ze/2.4))),x=Math.min(x,bt(ze/2.2)))}const H=Oe.w/2*De,Y=[-(H+$e),-(H-$e),H-$e,H+$e],B=[0,x,x,0],re=D[Ae];for(let ce=0;ce<4;ce++){const ze=re[0]+J*Y[ce],mt=re[1]+pe*Y[ce];Z.push(ze,b,mt),Me.push(ze/Pe,mt/Pe),ge.push(1,1,1,B[ce])}if(Ae>0)for(let ce=0;ce<3;ce++){const ze=(Ae-1)*4+ce,mt=ze+1,xt=Ae*4+ce,ft=xt+1;Ie.push(mt,ft,ze,ze,ft,xt)}}const Be=new en;Be.setAttribute("position",new At(Z,3)),Be.setAttribute("uv",new At(Me,2)),Be.setAttribute("color",new At(ge,4)),Be.setIndex(Ie),Be.computeVertexNormals();let _e=at[Ge];_e||(_e=r("#ffffff",{map:Ve,normalMap:p(ye,Ge==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),at[Ge]=_e);const be=new Dt(Be,_e);be.receiveShadow=!0,be.renderOrder=-5+Fe*.01,n.add(be)}const wt=[];function lt(Oe){const Fe=Oe.length,Ge=Oe.map(([Ve,Pe])=>zo(Ve,Pe,ua)<1.35);if(!Ge.some(Boolean))return[{pts:[...Oe],closed:!0}];const D=Ge.findIndex((Ve,Pe)=>!Ve&&Ge[(Pe-1+Fe)%Fe]),Ze=[];let Ye=[];for(let Ve=0;Ve<=Fe;Ve++){const Pe=(D+Ve)%Fe;if(!Ge[Pe]&&Ve<Fe){Ye.push(Oe[Pe]);continue}if(Ye.length>1&&Ze.push({pts:Ye,closed:!1}),Ve<Fe&&Ge[Pe]&&Ye.length){let $e=Ve;for(;$e<Fe&&Ge[(D+$e)%Fe];)$e++;const ye=Ye[Ye.length-1],ue=Oe[(D+$e)%Fe],L=ue[0]-ye[0],b=ue[1]-ye[1],Z=Math.hypot(L,b);wt.push({x:(ye[0]+ue[0])/2,z:(ye[1]+ue[1])/2,ang:Math.atan2(-b,L),len:Z})}Ye=[]}return Ze}bi.forEach((Oe,Fe)=>{if(Oe.kind!=="stones"){je(Oe,Fe);return}const Ge=i.roadStones.clone();Ge.wrapS=zn,Ge.wrapT=ii,Ge.repeat.set(1,1/1.3),Ge.needsUpdate=!0;const D=r("#ffffff",{map:Ge,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const Ze of lt(Oe.line)){const Ye=new Dt(Qu(Ze.pts,Oe.w,Ze.closed,.03),D);Ye.receiveShadow=!0,n.add(Ye)}});{const Oe=($e,ye,ue,L,b,Z)=>{const Me=b-ue,ge=Z-L,Ie=Me*Me+ge*ge||1,Be=Math.max(0,Math.min(1,(($e-ue)*Me+(ye-L)*ge)/Ie));return Math.hypot($e-ue-Me*Be,ye-L-ge*Be)},Fe=($e,ye,ue,L)=>{for(const b of bi){if(b===ue)continue;const Z=Ne(b),Me=b.w/2+L;for(let ge=0;ge<Z.length-1;ge++){const Ie=Z[ge],Be=Z[ge+1];if(!(Math.abs(Ie[0]-$e)>Me+1||Math.abs(Ie[1]-ye)>Me+1)&&Oe($e,ye,Ie[0],Ie[1],Be[0],Be[1])<Me)return!0}}return!1},Ge=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],D=($e,ye)=>{const ue=Math.hypot($e,ye),L=Math.atan2(ye,$e);if(ue>7.4&&ue<9&&Ge.some(b=>{let Z=Math.abs(L-b)%(2*on);return Z=Math.min(Z,2*on-Z),Z*ue<1.45}))return!0;for(const b of ps)if(b.kind==="house"){const[Z,Me]=eo(b,$e,ye);if(Math.abs(Z)<b.w/2+.9&&Math.abs(Me)<b.d/2+.9||b.deck&&Z>b.deck[0]-.5&&Z<b.deck[1]+.5&&Me>b.deck[2]&&Me<b.deck[3]+.5)return!0}else if(Math.hypot($e-b.x,ye-b.z)<b.r+.6)return!0;for(const b of Jc)if(b.kind==="hut"){const[Z,Me]=eo(b,$e,ye);if(Math.abs(Z)<b.w/2+.9&&Math.abs(Me)<b.d/2+.9)return!0}else if(Math.hypot($e-b.x,ye-b.z)<(b.r||2)+.4)return!0;return Math.hypot($e,ye)>as(Math.atan2(ye,$e))-1.2},Ze=[],Ye=[],Ve=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const $e of bi){if($e.kind==="stones")continue;const ye=Ne($e),ue=$e.kind!=="dirt",L=b=>{const Z=ye[Math.max(0,b-1)],Me=ye[Math.min(ye.length-1,b+1)],ge=Math.hypot(Me[0]-Z[0],Me[1]-Z[1])||1;return[-(Me[1]-Z[1])/ge,(Me[0]-Z[0])/ge]};for(let b=0;b<ye.length;b++){const[Z,Me]=L(b),ge=Math.atan2(Z,Me)+on/2,Ie=ye[b];for(const Be of[-1,1]){const _e=$e.w/2+.07,be=Ie[0]+Z*Be*_e,Ae=Ie[1]+Me*Be*_e;if(!(D(be,Ae)||Fe(be,Ae,$e,.25))&&(ue&&Ze.push({x:be,y:.04,z:Ae,sx:.2,sy:.13,sz:d(.4,.47),ry:ge+d(-.04,.04),c:$e.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),b%3===0&&h()<.7)){const q=_e+(ue?.25:.1)+d(0,.35),ve=Ie[0]+Z*Be*q,xe=Ie[1]+Me*Be*q;if(!D(ve,xe)&&!Fe(ve,xe,$e,.2)){const ke=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let ie=0;ie<5;ie++)Ye.push({x:ve+d(-.15,.15),y:.11,z:xe+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:ke})}}}}if(!ue&&$e.w>1.5)for(const b of[-1,1]){const Z=ye.map((ge,Ie)=>{const[Be,_e]=L(Ie);return[ge[0]+Be*b*.45,ge[1]+_e*b*.45]}),Me=new Dt(Qu(Z,.18,!1,.035),Ve);Me.receiveShadow=!0,Me.renderOrder=-4,n.add(Me)}}for(const $e of it){const ye=-$e.tz,ue=$e.tx,L=Math.max(2,Math.round(($e.w+.3)/.42));for(let b=0;b<L;b++){const Z=-(($e.w+.3)/2)+(b+.5)*($e.w+.3)/L;Ze.push({x:$e.x+ye*Z-$e.tx*.1,y:.045,z:$e.z+ue*Z-$e.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(ye,ue)+on/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new wa(1,1,1,1,.2),Ze,{cast:!1});const Pe=m(new gn(.06,.24,4),Ye,{});Pe&&(Pe.userData.noLine=!0)}return{models:oe,skyDome:w,sun:U,island:F,cloudRing:te,grassTex:ae,strataMat:ee,crossings:wt,patch:ut}}const{PI:pt}=Math;function Ry(s){const{M:e,COL:t,TEX:n,toon:i,glow:r,mesh:o,rbox:l,at:a,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:_,tiled:m,planarUV:g,wallUV:S}=s,E=s.scene,T=[],I=[],P=[],M=[],w=_(64,128,(A,N,W)=>{const Q=()=>{A.beginPath(),A.moveTo(N/2,2),A.bezierCurveTo(N*.62,W*.3,N*.98,W*.55,N*.86,W*.8),A.bezierCurveTo(N*.76,W*.98,N*.24,W*.98,N*.14,W*.8),A.bezierCurveTo(N*.02,W*.55,N*.38,W*.3,N/2,2),A.closePath()},de=A.createLinearGradient(0,W,0,0);de.addColorStop(0,"rgba(255, 246, 214, 1)"),de.addColorStop(.3,"rgba(255, 196, 92, 1)"),de.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),de.addColorStop(1,"rgba(220, 40, 30, 0)"),Q(),A.fillStyle=de,A.fill(),A.save(),A.translate(N*.5,W*.92),A.scale(.5,.55),A.translate(-N*.5,-W*.92),Q(),A.fillStyle="rgba(255, 252, 235, 0.9)",A.fill(),A.restore()});w.wrapS=w.wrapT=zn;const U=new Gs({map:w,color:new _t(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),k=new Gs({map:w,color:new _t(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),j=new Gs({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Oi});function ae(A,N,W,Q,de=1){const Se=new Ee,ne=new cs(U);ne.center.set(.5,.06),ne.scale.set(.34*de,.68*de,1),Se.add(ne);const y=new cs(k);y.center.set(.5,.04),y.scale.set(.18*de,.34*de,1),Se.add(y);const $=new cs(j);return $.scale.setScalar(1.5*de),$.position.y=.2*de,Se.add($),Se.position.set(N,W,Q),A.add(Se),I.push({f:Se,ph:u(0,6),s:de}),Se}const ee=(()=>{const A=new Ee,N=o(new Xt(.5,16,12),e.bone);N.scale.set(1,.92,1.05),N.position.y=.14,A.add(N),A.add(a(o(new Le(.62,.28,.5),e.bone),0,-.24,.16));for(const W of[-1,1]){const Q=o(new Xt(.14,10,8),e.dark,!1);Q.scale.z=.5,Q.position.set(W*.19,.08,.45),A.add(Q)}return A.add(c(a(o(new gn(.06,.12,3),e.dark,!1),0,-.1,.5),pt,0,0)),A.add(a(o(new Le(.42,.03,.02),e.dark,!1),0,-.25,.42)),A})();function F(A=.3){const N=ee.clone();return N.scale.setScalar(A),N}function oe(A=1,N=e.bone){const W=new Ee;for(const Q of[-1,1]){const de=o(new mn(.5*A,.09*A,6,12,pt*.6),N);de.rotation.set(0,Q>0?0:pt,.25),de.position.set(Q*.35*A,0,0),W.add(de)}return W}let se=7;const X=(A,N)=>A+(N-A)*((se=se*16807%2147483647)/2147483647);function te(A,N,W,Q,de,Se,ne,y,$=0){const G=a(o($?l(Se,ne,y,$):new Le(Se,ne,y),N),W,Q,de);return A.add(G),G}function le(A,N,W,Q=.75){const de=new Le(A,N,W),Se=de.attributes.position;for(let ne=0;ne<Se.count;ne++)Se.getY(ne)<0&&(Se.setX(ne,Se.getX(ne)*Q),Se.setZ(ne,Se.getZ(ne)*Q));return de.computeVertexNormals(),de}function fe(A,N,W,Q,de,Se,ne=Math.max(2,Math.round(W/.2))){const y=W/ne;for(let $=0;$<ne;$++)te(A,Se,0,Q+X(-.004,.004),-W/2+y*($+.5),N+X(-.02,.02),de,y-.012,.012)}function Te(A,N,W,Q,de,Se){te(A,e.iron,N-de*.055,W,Q-Se*.012,.13,.014,.028),te(A,e.iron,N-de*.012,W,Q-Se*.055,.028,.014,.13)}const Ke=(()=>{const A=[];for(let N=0;N<=10;N++){const W=N/10;A.push(new Ue(.3+Math.sin(W*pt)*.06,(W-.5)*.8))}return new kc(A,20)})(),rt=A=>.3+Math.sin((A/.8+.5)*pt)*.06;function me(A=1,N=!1){const W=new Ee,Q=o(Ke,i("#ffffff",{map:n.planks}));for(const de of[-.33,-.17,.17,.33])Q.add(a(c(o(new mn(rt(de)+.006,.02,5,24),e.iron),pt/2,0,0),0,de,0));for(const de of[-.17,.17])for(let Se=0;Se<6;Se++){const ne=Se/6*pt*2;Q.add(a(o(new Xt(.016,5,4),e.ironL),Math.cos(ne)*(rt(de)+.025),de,Math.sin(ne)*(rt(de)+.025)))}Q.add(a(c(o(new li(.3,20),e.woodD),-pt/2,0,0),0,.392,0)),Q.add(a(c(o(new mn(.3,.018,4,24),e.woodD),pt/2,0,0),0,.4,0));for(const de of[-.1,0,.1])Q.add(a(o(new Le(.004,.004,.5),e.dark,!1),de,.394,0));return Q.add(a(o(new tt(.035,.035,.03,8),e.woodL),.15,.4,.05)),Q.scale.setScalar(A),N?(Q.rotation.z=pt/2,Q.position.y=.36*A):Q.position.y=.4*A,W.add(Q),W}const We=i("#ffffff",{map:_(128,128,(A,N,W)=>{A.fillStyle="#7a5538",A.fillRect(0,0,N,W);for(let Q=0;Q<4;Q++)A.fillStyle=Q%2?"#70502f":"#84603f",A.fillRect(0,Q*32,N,30),A.fillStyle="rgba(40, 24, 14, 0.6)",A.fillRect(0,Q*32+30,N,2)})});function nt(A=.6){const N=new Ee;te(N,We,0,A/2,0,A*.94,A*.94,A*.94);const W=A*.09,Q=A/2-W/2;for(const de of[-1,1])for(const Se of[-1,1])te(N,e.woodD,de*Q,A/2,Se*Q,W,A,W),te(N,e.woodD,0,A/2+de*Q,Se*Q,A-W*2,W,W),te(N,e.woodD,de*Q,A/2+Se*Q,0,W,W,A-W*2);for(const de of[-1,1]){const Se=te(N,e.woodD,0,A/2,de*(A*.47+.006),A*1.1,W*.8,W*.4);Se.rotation.z=de*pt/4}for(const de of[-1,1])for(const Se of[-1,1])for(const ne of[-1,1])te(N,e.iron,de*(Q+.006),A/2+Se*(Q+.006),ne*(Q+.006),W*1.2,W*1.2,W*1.2);return N}function ct(){const A=new Ee,N=o(new Xt(.28,12,10),i("#b8a07a"));return N.scale.set(1,1.15,.9),N.position.y=.3,A.add(N),A.add(a(o(new tt(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),A}function Xe(A,N,W=.8,Q=e.wood){const de=new Ee,Se=.07;fe(de,A,N,W-Se/2,Se,Q);for(const y of[-1,1])te(de,e.woodD,0,W-Se-.06,y*(N/2-.12),A-.34,.12,.04,.01),te(de,e.woodD,y*(A/2-.12),W-Se-.06,0,.04,.12,N-.34,.01);const ne=le(.1,W-Se,.1,.72);for(const[y,$]of[[-1,-1],[1,-1],[-1,1],[1,1]])de.add(a(o(ne,e.woodD),y*(A/2-.12),(W-Se)/2,$*(N/2-.12))),Te(de,y*A/2,W+.004,$*N/2,y,$);te(de,e.woodD,0,.17,0,A-.3,.06,.05,.01);for(const y of[-1,1])te(de,e.woodD,y*(A/2-.12),.17,0,.05,.06,N-.3,.01);return de}function ut(A=.7){const N=new Ee;N.add(a(o(new tt(A,A,.08,24),e.wood),0,.76,0)),N.add(a(c(o(new mn(A,.022,5,32),e.iron),pt/2,0,0),0,.76,0));for(const W of[-A*.5,0,A*.5])te(N,e.dark,W,.801,0,.006,.004,Math.sqrt(A*A-W*W)*1.96);N.add(a(o(new tt(.08,.11,.7,10),e.woodD),0,.37,0)),N.add(a(o(new tt(.13,.13,.06,10),e.iron),0,.5,0));for(let W=0;W<4;W++){const Q=W*pt/2+pt/4,de=te(N,e.woodD,Math.sin(Q)*A*.25,.05,Math.cos(Q)*A*.25,.09,.08,A*.6,.015);de.rotation.y=Q}return N}function Ut(){const A=new Ee;A.add(a(o(new tt(.24,.24,.07,16),e.wood),0,.45,0)),A.add(a(c(o(new mn(.24,.012,4,20),e.iron),pt/2,0,0),0,.45,0));for(let N=0;N<3;N++){const W=N/3*pt*2+.5,Q=o(new tt(.028,.034,.46,6),e.woodD);Q.position.set(Math.cos(W)*.15,.22,Math.sin(W)*.15),Q.rotation.set(-Math.sin(W)*.2,0,Math.cos(W)*.2),A.add(Q)}return A.add(a(c(o(new mn(.16,.014,4,14),e.woodD),pt/2,0,0),0,.17,0)),A}function at(A=1.8,N=!0){const W=new Ee;for(const Q of[-1,1])te(W,e.woodL,X(-.01,.01),.45,Q*.11,A,.07,.2,.015);for(const Q of[-1,1]){const de=Q*(A/2-.2);for(const Se of[-1,1]){const ne=a(o(le(.08,.44,.07,1),e.woodD),de,.21,Se*.12);ne.rotation.x=-Se*.2,W.add(ne)}te(W,e.woodD,de,.385,0,.09,.06,.44,.01),te(W,e.iron,de,.487,.2,.1,.012,.03)}if(te(W,e.woodD,0,.14,0,A-.4,.05,.05,.01),N){for(const Q of[-1,1])te(W,e.woodD,Q*(A/2-.2),.74,-.21,.07,.56,.06,.012);for(const Q of[.64,.9])te(W,e.woodL,X(-.01,.01),Q,-.225,A-.1,.11,.05,.015)}return W}function bt(A=.16,N=0){const W=new Ee;if(W.add(a(o(new tt(.04,.045,A,10),i("#eadfc4")),0,A/2,0)),ae(W,0,A,0,.35),N){const Q=new zi("#ffb36a",N,5,2);Q.position.y=A+.15,W.add(Q)}return W}function it(){const A=new Ee;return A.add(a(F(.22),0,.12,0)),A.add(a(bt(.14),0,.24,0)),A}function Re(A){const N=new Ee,W=i(A,{emissive:A,emissiveIntensity:.18});return N.add(a(o(new tt(.06,.07,.2,10),W),0,.1,0)),N.add(a(o(new tt(.022,.03,.1,8),W),0,.25,0)),N}function Ne(){const A=new Ee;return A.add(a(o(new tt(.07,.06,.15,12),e.woodL),0,.075,0)),A.add(a(c(o(new li(.062,12),i("#efe0b0")),-pt/2,0,0),0,.14,0)),A.add(a(o(new mn(.045,.012,6,12),e.woodL),.08,.08,0)),A}function Je(A=1){const N=new Ee;N.add(a(o(new tt(.22*A,.16*A,.34*A,12),i("#8a4a30")),0,.17*A,0));for(let W=0;W<6;W++){const Q=W/6*pt*2;d(N,new V(Math.cos(Q)*.06*A,.32*A,Math.sin(Q)*.06*A),new V(Math.cos(Q)*.5,1,Math.sin(Q)*.5),.5*A,.1*A,i(p([t.leaf,t.leafD,t.leafL])),0,5)}return N}const et=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],je=s.UNIT_BOX;function wt(A=2){const N=new Ee,W=2.4,Q=.5;te(N,i("#3a2519"),0,W/2,-Q/2+.03,A-.1,W-.1,.04);for(const Se of[-1,1])te(N,e.woodD,Se*(A/2-.04),W/2,0,.08,W,Q,.015);for(let Se=0;Se<4;Se++){const ne=Se<3?.27+Se*.72:W-.03;te(N,e.wood,0,ne,0,A-.14,.06,Q-.04),te(N,e.woodL,0,ne+.01,Q/2-.02,A-.12,.08,.04,.01)}te(N,e.woodD,0,.1,.02,A,.2,Q,.02),te(N,e.wood,0,W+.04,.02,A+.1,.08,Q+.08,.02),te(N,e.woodD,0,W+.11,.03,A+.18,.07,Q+.14,.02);for(const Se of[-1,1])te(N,e.iron,Se*(A/2-.02),W-.12,Q/2+.004,.06,.2,.012),te(N,e.iron,Se*(A/2-.1),W-.04,Q/2+.004,.2,.06,.012);N.add(a(F(.13),A/2-.25,2.62,.05));const de=[];for(let Se=0;Se<3;Se++){let ne=-A/2+.12;for(;ne<A/2-.2;){if(f()<.12){ne+=.18;continue}const y=u(.07,.14),$=u(.34,.56),G=f()<.1?.18:0;de.push({x:ne+y/2,y:.33+Se*.72+$/2,z:.08,sx:y,sy:$,sz:u(.28,.36),rz:G,c:p(et)}),ne+=y+.012+G*.4}}return s.instanced(je,de,{parent:N,cast:!0}),N}function lt(A,N){const W=_(512,512,(Se,ne)=>{N.forEach((y,$)=>{Se.fillStyle=y,Se.beginPath(),Se.arc(ne/2,ne/2,ne/2-$*34,0,pt*2),Se.fill()}),Se.fillStyle=N[1];for(let y=0;y<12;y++){const $=y/12*pt*2;Se.beginPath(),Se.arc(256+Math.cos($)*196,256+Math.sin($)*196,10,0,pt*2),Se.fill()}}),Q=o(new li(A,48),i("#ffffff",{map:W}),!1);Q.rotation.x=-pt/2,Q.position.y=.012;const de=new Ee;return de.add(Q),de}function Oe(A=n.painting){const N=new Ee;for(const W of[-1,1]){const Q=a(o(new Le(.06,1.8,.06),e.wood),W*.36,.9,0);Q.rotation.z=W*-.12,N.add(Q)}return N.add(c(a(o(new Le(.06,1.7,.06),e.wood),0,.84,-.3),.35,0,0)),N.add(a(o(new Le(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),N.add(a(new Dt(new qt(.95,.72),new Rn({map:A,toneMapped:!1})),0,1.25,.079)),N.add(a(o(new Le(1,.05,.14),e.wood),0,.82,.08)),N}function Fe(A){const N=new Ee;fe(N,1.7,.84,.745,.08,e.woodL,4),te(N,e.woodD,0,.78,.43,1.74,.05,.03,.01),te(N,e.wood,.55,.36,0,.5,.66,.76,.02);for(let Q=0;Q<3;Q++)te(N,e.woodL,.55,.15+Q*.2,.385,.44,.17,.02,.01),te(N,e.iron,.55,.17+Q*.2,.402,.12,.025,.02);for(const Q of[-.34,.34])N.add(a(o(le(.09,.7,.09,.7),e.woodD),-.76,.35,Q));te(N,e.woodD,-.76,.14,0,.05,.05,.62,.01);for(const Q of[-1,1])Te(N,Q*.85,.79,.42,Q,1);const W={g:N,kb:null,screen:null,light:null};if(A==="screen"){const Q=a(new Ee,-.12,.805,-.25);Q.userData.y0=.805,Q.add(o(new Le(.62,.035,.2),e.iron));for(const[$,G]of[[-.06,.54],[0,.56],[.06,.5]])Q.add(a(o(new Le(G,.012,.04),r("#ff5a3a",.55),!1),0,.022,$));N.add(Q),W.kb=Q;const de=new Ee;de.add(o(new Le(1.04,.7,.05),e.woodD));const Se=new Rn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),ne=c(a(new Dt(new qt(.92,.58),Se),0,0,-.03),0,pt,0);de.add(ne),W.screen=ne,de.add(a(new Dt(new qt(.92,.58),Se),0,0,.03)),de.add(a(o(new Le(.08,.13,.08),e.woodD),0,-.41,0)),de.add(a(o(new Le(.34,.02,.2),e.woodD),0,-.455,0)),de.add(a(F(.09),.46,.4,0)),de.position.set(-.12,1.25,.17),N.add(de);const y=new zi("#7fe8ff",0,3.2,2);y.position.set(-.12,1.25,-.35),N.add(y),W.light=y,N.add(a(Ne(),.6,.79,.15))}else A==="paper"?(N.add(c(a(new Dt(new qt(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-pt/2,0,0)),N.add(c(a(o(new tt(.012,.012,.22,6),e.red),.35,.81,.1),0,0,pt/2)),N.add(a(bt(.12),.65,.79,-.25))):A==="books"&&(N.add(a(o(new Le(.42,.06,.3),e.red),-.35,.82,0)),N.add(a(o(new Le(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),N.add(a(o(new Le(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),N.add(a(it(),.62,.79,-.22)));return N.add(a(o(new tt(.25,.21,.44,14),e.woodD),0,.22,-.78)),W}function Ge(){const A=new Ee;return A.add(a(o(new tt(.3,.38,.5,10),e.woodD),0,.25,0)),A.add(a(o(new Le(.34,.2,.22),e.iron),0,.6,0)),A.add(a(o(new Le(.7,.14,.3),e.ironL),0,.77,0)),d(A,new V(.35,.77,0),new V(1,0,0),.32,.1,e.ironL,0,10),A.add(a(o(new Le(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),A}function D(){const A=new Ee;return A.add(a(o(new tt(.06,.06,1.6,8),e.wood),0,.8,0)),A.add(a(o(new tt(.28,.32,.8,12),e.straw),0,1.15,0)),A.add(a(o(new Xt(.22,12,10),e.straw),0,1.75,0)),A.add(a(o(new Le(.9,.08,.08),e.wood),0,1.35,0)),A.add(a(c(o(new mn(.3,.03,6,16),e.red),pt/2,0,0),0,1.2,0)),A}function Ze(){const A=new Ee;A.add(c(a(o(new tt(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),pt/2,0,0));for(const N of[-1,1])A.add(c(a(o(new Le(.06,1.4,.06),e.wood),N*.35,.7,-.2),0,0,N*.2));return A}function Ye(A=.42){const N=new Ee;return N.add(c(a(o(new tt(A,A,.7,16),e.straw),0,A,0),0,0,pt/2)),N}function Ve(A=0,N=1){const W=new Ee;for(let Q=0;Q<3;Q++){const de=Q/3*pt*2,Se=o(new tt(.035,.045,1.1,6),e.iron);Se.position.set(Math.cos(de)*.22,.5,Math.sin(de)*.22),Se.rotation.set(Math.sin(de)*.3,0,-Math.cos(de)*.3),W.add(Se)}W.add(a(o(new tt(.42,.24,.3,14,1,!0),e.iron),0,1.05,0)),W.add(c(a(o(new li(.36,14),e.dark,!1),0,1.12,0),-pt/2,0,0)),W.add(a(o(new Xt(.3,10,6,0,pt*2,0,pt/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let Q=0;Q<4;Q++){const de=Q/4*pt*2;d(W,new V(Math.cos(de)*.42,1.18,Math.sin(de)*.42),new V(Math.cos(de)*.4,1,Math.sin(de)*.4),.22,.04,e.iron,0,5)}if(ae(W,0,1.12,0,1.6),A){const Q=new zi("#ff9a4a",A,9,2);Q.position.y=1.7,W.add(Q),M.push({l:Q,base:A,ph:u(0,6)})}return W.scale.setScalar(N),W}function Pe(){const A=new Ee;A.add(c(a(o(new Le(.06,.06,.3),e.iron),0,0,.12),0,0,0));const N=a(o(new tt(.045,.06,.5,8),e.woodD),0,.12,.26);return N.rotation.x=.35,A.add(N),A.add(a(o(new tt(.08,.06,.12,8),e.iron),0,.36,.34)),ae(A,0,.4,.35,.9),A}function $e(A=3.2,N=n.banner){const W=new Ee;W.add(a(o(new tt(.05,.07,A+.6,8),e.woodD),0,(A+.6)/2,0)),W.add(c(a(o(new tt(.03,.03,1,6),e.iron),0,A+.4,.05),0,0,pt/2)),W.add(a(F(.16),0,A+.72,.02));const Q=new Dt(new qt(.9,1.9,1,8),i("#ffffff",{map:N,side:ln})),de=Q.geometry.attributes.position;for(let Se=0;Se<de.count;Se++)de.setZ(Se,Math.sin(de.getY(Se)*2.6)*.05);return Q.geometry.computeVertexNormals(),Q.position.set(0,A-.55,.08),Q.castShadow=!0,W.add(Q),W}function ye(A=1.2,N=2.6){const W=new Ee;W.add(c(a(o(new tt(.04,.04,A+.3,6),e.iron),0,0,.04),0,0,pt/2));const Q=o(new qt(A,N),i("#ffffff",{map:n.banner,side:ln}),!1);return Q.position.set(0,-N/2,.05),W.add(Q),W}function ue(A=2.4){const N=new Ee;N.add(a(o(new tt(.05,.08,A,7),e.woodD),0,A/2,0)),N.add(a(F(.24),0,A+.12,0)),N.add(a(oe(.5),0,A+.2,0));for(let W=0;W<3;W++){const Q=o(new qt(.12,u(.5,.9)),i(p([t.red,t.redD,t.bone]),{side:ln}),!1);Q.position.set(Math.cos(W*2.1)*.08,A-.5,Math.sin(W*2.1)*.08),Q.rotation.y=W*2.1,N.add(Q)}return N}function L(A=3){const N=new Ee,W=Math.max(2,Math.round(A/.9));N.add(c(a(o(new tt(.1,.1,A,8),e.wood),0,.45,0),0,0,pt/2));for(let Q=0;Q<W;Q++){const de=-A/2+(Q+.5)*A/W;for(const Se of[-1,1]){const ne=new Ee;ne.add(a(o(new tt(.07,.07,1.4,7),e.woodL),0,0,0)),ne.add(a(o(new gn(.07,.3,7),e.boneD),0,.85,0)),ne.position.set(de,.45,0),ne.rotation.x=Se*.8,N.add(ne)}}return N}function b(){const A=new Ee;A.add(a(o(new tt(.55,.5,.9,18),e.redD),0,.75,0)),A.add(a(o(new tt(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let N=0;N<3;N++){const W=N/3*pt*2;A.add(c(a(o(new tt(.04,.05,.7,6),e.woodD),Math.cos(W)*.42,.3,Math.sin(W)*.42),Math.sin(W)*.2,0,-Math.cos(W)*.2))}return A.add(a(c(o(new mn(.53,.03,6,20),e.bone),pt/2,0,0),0,1.05,0)),A}function Z(A=4){const N=new Ee,W=[t.red,t.woodL,t.redD,t.wood];for(let Q=0;Q<4;Q++){const de=o(new tt(.42,.46,A/4,10),i(W[Q]));de.position.y=A/8+Q*A/4,N.add(de);for(const Se of[-1,1])N.add(a(o(new Le(.12,.08,.06),e.bone),Se*.15,de.position.y+.05,.42));N.add(a(o(new Le(.36,.06,.06),e.dark),0,de.position.y-.18,.43))}N.add(a(F(.45),0,A+.25,0)),N.add(a(oe(1.1),0,A+.35,0));for(const Q of[-1,1])N.add(c(a(o(new Le(1,.12,.1),e.woodD),Q*.55,A*.72,0),0,0,Q*.2));return N}function Me(A=1.9,N=2.6,W="#8a6a4a"){const Q=new Ee,de=o(new gn(A,N,8,1,!0),i(W,{side:ln}));de.position.y=N/2,Q.add(de);for(let Se=0;Se<3;Se++){const ne=Se/3*pt*2+.4;Q.add(c(a(o(new tt(.04,.04,.9,6),e.woodD),Math.cos(ne)*.12,N+.25,Math.sin(ne)*.12),Math.sin(ne)*.4,0,-Math.cos(ne)*.4))}return Q.add(c(a(o(new qt(.9,1.3),e.dark,!1),0,.65,A*.82),-.6,0,0)),Q.add(c(a(o(new mn(A*.62,.05,6,24),e.redD),0,N*.35,0),pt/2,0,0)),Q}function ge(A=4){const N=new Ee;N.add(a(o(new Le(1.8,.1,.1),e.wood),0,1.25,0)),N.add(a(o(new Le(1.8,.1,.1),e.wood),0,.3,.12));for(const W of[-1,1])N.add(a(o(new Le(.1,1.35,.1),e.woodD),W*.85,.67,0));for(let W=0;W<A;W++){const Q=-.6+W*1.2/(A-1),de=new Ee;W%2?(de.add(a(o(new Le(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),de.add(a(o(new Le(.22,.05,.06),e.gold),0,.2,0))):(de.add(a(o(new tt(.03,.03,1.4,6),e.woodD),0,.7,0)),de.add(a(o(new Le(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),de.position.set(Q,.05,.08),de.rotation.z=.08,N.add(de)}return N}function Ie(A=2){const N=new Ee,W=[];for(let Q=0;Q<4;Q++)for(let de=0;de<Math.floor(A/.26)-Q;de++)W.push([-A/2+.13+de*.26+Q*.13,.13+Q*.22,0]);for(const[Q,de]of W)N.add(c(a(o(new tt(.12,.12,.9,8),i(p([t.woodL,"#8a6440","#6e4a30"]))),Q,de,0),pt/2,0,0));return N}function Be(){const A=new Ee;A.add(a(o(new Le(1.6,.12,1),e.wood),0,.62,0));for(const N of[-1,1])A.add(a(o(new Le(1.6,.36,.06),e.woodL),0,.85,N*.47)),A.add(c(a(o(new tt(.42,.42,.08,14),e.woodD),0,.42,N*.58),pt/2,0,0));for(const N of[-1,1])A.add(c(a(o(new Le(1.4,.07,.07),e.woodD),1.3,.55,N*.35),0,0,-.18));return A.add(a(ct(),-.3,.68,.1)),A.add(a(nt(.4),.35,.68,-.15)),A}function _e(){const A=new Ee;A.add(Xe(2.2,.9,.9,e.woodL));for(const[Q,de]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])A.add(a(o(new Le(.08,2.2,.08),e.woodD),Q,1.1,de));const N=_(256,64,(Q,de,Se)=>{for(let ne=0;ne<8;ne++)Q.fillStyle=ne%2?"#e3d5b6":"#8a2420",Q.fillRect(ne*32,0,32,Se)}),W=o(new Le(2.5,.05,1.4),i("#ffffff",{map:N}));W.position.set(0,2.2,.15),W.rotation.x=.22,A.add(W);for(let Q=0;Q<9;Q++)A.add(a(o(new Xt(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return A.add(a(nt(.5),-1.4,0,.3)),A.add(a(me(.8),1.5,0,-.1)),A}function be(){const A=new Ee;A.add(a(o(g(new tt(1,1.1,.9,22),1.2),e.stone),0,.45,0)),A.add(c(a(o(new li(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-pt/2,0,0));for(const W of[-1,1])A.add(a(o(new Le(.14,1.7,.14),e.woodD),W*.95,1.5,0));const N=o(new gn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return N.position.y=2.65,N.rotation.y=pt/4,A.add(N),A.add(c(a(o(new tt(.06,.06,1.9,8),e.wood),0,2.05,0),0,0,pt/2)),A.add(a(o(new tt(.15,.13,.22,10),e.woodL),.2,1.55,0)),A.add(a(F(.18),0,3.15,0)),A}function Ae(A=0){const N=new Ee;N.add(a(o(new tt(.07,.1,2.8,8),e.iron),0,1.4,0)),N.add(a(o(new Le(.55,.06,.06),e.iron),.22,2.7,0));const W=new Ee;if(W.add(o(new tt(.14,.18,.32,8),e.iron)),W.add(a(o(new Xt(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),A){const Q=new zi("#ffc477",A,9,2);W.add(Q)}return W.position.set(.44,2.44,0),N.add(W),N}function q(){const A=new Ee;te(A,e.wood,0,.25,0,1,.5,.6,.02),A.add(c(a(o(new tt(.3,.3,1,16,1,!1,0,pt),e.woodL),0,.5,0),0,0,pt/2));for(const N of[-.38,.38])te(A,e.iron,N,.27,0,.07,.52,.62),A.add(a(c(o(new mn(.31,.025,4,16,pt),e.iron),0,pt/2,0),N,.5,0));for(const N of[-1,1])for(const W of[-1,1])te(A,e.iron,N*.49,.05,W*.29,.06,.1,.06);te(A,e.gold,0,.44,.31,.16,.2,.025),te(A,e.dark,0,.42,.325,.03,.06,.01);for(const N of[-1,1])A.add(a(c(o(new mn(.06,.012,4,12),e.iron),0,pt/2,0),N*.51,.3,0));return A.add(a(F(.1),0,.62,.22)),A}function ve(){const A=new Ee;te(A,e.woodD,0,.25,0,1.3,.5,1.1,.03),te(A,e.red,0,.58,.05,1.08,.16,.9,.06),te(A,e.woodD,0,1.2,-.48,1.3,1.9,.2,.03),te(A,e.red,0,1.25,-.36,.9,1.3,.06,.03);for(let N=0;N<4;N++)for(const W of[-1,1])A.add(a(o(new Xt(.03,6,4),e.gold),W*.4,.7+N*.36,-.32));for(const N of[-1,1])te(A,e.woodD,N*.62,.75,0,.18,.5,1,.03),te(A,e.iron,N*.62,1.01,.1,.22,.04,.8,.01),A.add(a(F(.12),N*.62,1.1,.45)),d(A,new V(N*.55,2.15,-.48),new V(N*.3,1,0),.5,.08,e.bone,0,6);return A.add(a(F(.32),0,2.25,-.4)),A.add(a(oe(1),0,2.3,-.4)),A}function xe(A=t.red){const N=new Ee;return N.add(c(o(new tt(.42,.42,.06,18),i(A)),pt/2,0,0)),N.add(c(a(o(new mn(.42,.04,6,20),e.iron),0,0,.03),0,0,0)),N.add(a(F(.16),0,0,.08)),N}function ke(){const A=new Ee;return A.add(o(new Le(.7,.8,.08),e.woodD)),A.add(a(F(.32),0,.02,.18)),A.add(a(oe(1),0,.12,.16)),A}function ie(A=.7,N=6){const W=new Ee;W.add(a(o(new tt(.012,.012,1,4),e.iron),0,.5,0)),W.add(c(o(new mn(A,.04,6,24),e.iron),pt/2,0,0));for(let Q=0;Q<N;Q++){const de=Q/N*pt*2;W.add(a(bt(.12),Math.cos(de)*A,.02,Math.sin(de)*A))}return W}function J(A,N,W,Q){for(let de=0;de<N.length-1;de++){const[Se,ne]=N[de],[y,$]=N[de+1],G=5;for(let O=1;O<G;O++){const C=O/G,z=Se+(y-Se)*C,K=ne+($-ne)*C,he=W-Math.sin(C*pt)*Q;A.add(a(o(new Xt(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),z,he,K))}const v=Math.hypot(y-Se,$-ne),R=o(new tt(.008,.008,v,3),e.dark,!1);R.position.set((Se+y)/2,W-Q*.6,(ne+$)/2),R.rotation.set(0,-Math.atan2($-ne,y-Se),pt/2),A.add(R)}}function pe(A="round",N=1){const W=new Ee;if(W.add(a(o(new tt(.18*N,.3*N,1.8*N,8),e.wood),0,.9*N,0)),A==="pine")for(let Q=0;Q<4;Q++)W.add(a(o(new gn((1.5-Q*.3)*N,1.4*N,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+Q*.8)*N,0));else if(A==="dead")for(let Q=0;Q<4;Q++){const de=o(new tt(.04*N,.1*N,1.2*N,6),e.woodD),Se=Q*1.7;de.position.set(Math.cos(Se)*.3*N,(1.6+Q*.25)*N,Math.sin(Se)*.3*N),de.rotation.set(Math.sin(Se)*.8,0,-Math.cos(Se)*.8),W.add(de)}else{const Q=A==="autumn"?[t.autumn1,t.autumn2,t.autumn3]:[t.leaf,t.leafD,t.leafL];for(const[de,Se,ne,y]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])W.add(a(o(new Xt(y*N,14,10),i(p(Q))),de*N,Se*N,ne*N))}return W.rotation.y=u(0,3),W}const De=new Map;function x(A,N,W,Q,de=0){const Se=new Rt().compose(new V(W,de,Q),new cn().setFromAxisAngle(new V(0,1,0),u(0,2*pt)),new V(N*u(.92,1.08),N*u(.9,1.12),N*u(.92,1.08))),ne=De.get(A);return ne?ne.push(Se):De.set(A,[Se]),!0}function H(A){A.flora.scene.updateMatrixWorld(!0);for(const[N,W]of De){const Q=mf(A.flora,N);if(!Q)throw new Error(`no flora model for ${N}`);for(const[de,Se]of pf(s,Q)){const ne=Se.length===1?Se[0]:Kc(Se,!1);if(!ne)continue;const y=new Xr(ne,de,W.length);W.forEach(($,G)=>y.setMatrixAt(G,$)),y.castShadow=!de.isMeshStandardMaterial,y.receiveShadow=!0,y.frustumCulled=!1,E.add(y)}}}function Y(){const A=new Ee;A.add(a(o(new tt(.3,.38,.6,8),e.stone),0,.3,0));const N=a(o(new zc(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return N.scale.y=1.7,A.add(N),P.push({o:N,axis:"y",v:.6,bob:!0,y0:1}),A}function B(){const A=new Ee;A.add(a(o(new Xt(.5,16,10,0,pt*2,pt*.3,pt*.7),i("#2e2a2c",{side:ln})),0,.55,0)),A.add(c(a(o(new li(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-pt/2,0,0));for(let N=0;N<3;N++){const W=N/3*pt*2;A.add(a(o(new tt(.04,.04,.3,6),e.iron),Math.cos(W)*.32,.12,Math.sin(W)*.32))}return A}function re(A,N,W=.9,Q=-1){for(let de=0;de<N.length-1;de++){if(de===Q)continue;const[Se,ne]=N[de],[y,$]=N[de+1],G=Math.hypot(y-Se,$-ne),v=-Math.atan2($-ne,y-Se);for(const R of[W*.45,W*.85]){const O=o(new Le(G,.07,.06),e.woodL);O.position.set((Se+y)/2,R,(ne+$)/2),O.rotation.y=v,A.add(O)}for(const[R,O]of[[Se,ne],[y,$]])A.add(a(o(new Le(.12,W+.15,.12),e.woodD),R,(W+.15)/2,O))}}function ce(A){const N=new Ee;N.add(a(o(new Le(.1,2.2,.1),e.woodD),0,1.1,0));const W=_(256,96,(Q,de,Se)=>{Q.fillStyle="#6a4630",Q.fillRect(0,0,de,Se),Q.strokeStyle="#3a2419",Q.lineWidth=8,Q.strokeRect(4,4,de-8,Se-8),Q.fillStyle="#e3d5b6",Q.font=`800 40px ${pc}`,Q.textAlign="center",Q.textBaseline="middle",Q.fillText(A,de/2,Se/2+2)});return N.add(a(o(new Le(1.1,.42,.06),i("#ffffff",{map:W})),.25,1.85,0)),N}function ze(A=t.red){const N=new Ee;for(const W of[-1,1])te(N,e.woodD,W*.48,.24,0,.07,.18,1.96,.015);for(const[W,Q,de]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])te(N,e.woodD,W,de/2,Q,.1,de,.1,.015),N.add(a(o(new Xt(.065,8,6),e.wood),W,de+.04,Q));for(let W=0;W<5;W++)te(N,e.wood,-.32+W*.16,.66,-.98,.07,.5,.04,.01);return te(N,e.woodD,0,.92,-.98,.98,.09,.07,.015),te(N,e.woodD,0,.42,-.98,.98,.07,.07,.015),te(N,e.woodD,0,.5,.98,.98,.14,.06,.015),te(N,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),te(N,i(A),0,.5,.25,.96,.07,1.36,.03),te(N,i(A),0,.535,-.38,.96,.05,.16,.025),te(N,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),te(N,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),N.add(a(F(.12),0,1.08,-.94)),N}function mt(){const A=new Ee;A.add(ze(t.redD));const N=ze("#4a3a30");N.position.y=1.15,A.add(N);for(const[W,Q]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])A.add(a(o(new Le(.1,2.2,.1),e.wood),W,1.1,Q));for(let W=0;W<5;W++)A.add(a(o(new Le(.06,.05,.06),e.woodL),.52,.4+W*.3,.9));return A}function xt(){const A=new Ee;te(A,e.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const N of[-1,1]){te(A,e.wood,N*.3,1.05,.31,.56,1.78,.03,.01);for(const W of[.62,1.48])te(A,e.woodL,N*.3,W,.33,.4,.66,.02,.008);for(const W of[.4,1.7])te(A,e.iron,N*.52,W,.33,.14,.05,.015);te(A,e.gold,N*.06,1.08,.34,.03,.14,.03)}te(A,e.wood,0,2.05,0,1.32,.1,.68,.02),te(A,e.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const N of[-1,1])for(const W of[-1,1])te(A,e.woodD,N*.54,.05,W*.24,.12,.1,.12,.02);return A}function ft(A,N=1.8){const W=new Ee;return W.add(a(o(S(new Le(.12,N,A),N,1.3),e.plankWall),0,N/2,0)),W.add(a(o(new Le(.18,.1,A+.04),e.timber),0,N,0)),W}function Pt(A=.8,N=1.6){const W=new Dt(new qt(A,N,6,1),i(t.red,{side:ln})),Q=W.geometry.attributes.position;for(let Se=0;Se<Q.count;Se++)Q.setZ(Se,Math.sin(Q.getX(Se)*14)*.04);W.geometry.computeVertexNormals(),W.position.y=N/2+.1;const de=new Ee;return de.add(W),de.add(a(c(o(new tt(.02,.02,A+.2,6),e.iron),0,0,pt/2),0,N+.12,0)),de}function Mt(){const A=new Ee;for(let N=0;N<5;N++)A.add(c(a(o(new tt(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+N%3*.08,u(-.1,.1)),0,u(-.4,.4),pt/2));return A}function qe(){const A=new Ee;for(let W=0;W<3;W++){const Q=W/3*pt*2;A.add(c(a(o(new tt(.025,.03,1.3,6),e.woodD),Math.cos(Q)*.22,.62,Math.sin(Q)*.22),Math.sin(Q)*.32,0,-Math.cos(Q)*.32))}const N=a(c(o(new tt(.07,.11,1.3,12),e.gold),.9,0,0),0,1.35,.15);return A.add(N),A}function ht(){const A=new Ee;A.add(a(o(new tt(.06,.22,.9,10),e.woodD),0,.45,0)),A.add(a(o(new Xt(.34,20,14),i("#2a3050")),0,1.25,0));for(let N=0;N<14;N++){const W=u(0,2*pt),Q=u(-1.2,1.2);A.add(a(o(new Xt(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(W)*Math.cos(Q)*.345,1.25+Math.sin(Q)*.345,Math.sin(W)*Math.cos(Q)*.345))}return A.add(a(c(o(new mn(.4,.02,6,28),e.gold),0,pt/2,.3),0,1.25,0)),A}const Yt=_(256,192,(A,N,W)=>{A.fillStyle="#d8c8a0",A.fillRect(0,0,N,W),A.strokeStyle="#6a4a30",A.lineWidth=3,A.beginPath(),A.moveTo(30,150),A.bezierCurveTo(60,60,140,40,220,90),A.bezierCurveTo(200,150,120,170,30,150),A.stroke(),A.fillStyle="#8a2420";for(const[Q,de]of[[90,100],[150,80],[180,120]])A.beginPath(),A.arc(Q,de,6,0,pt*2),A.fill();A.strokeStyle="rgba(106, 74, 48, 0.5)",A.setLineDash([6,6]),A.beginPath(),A.moveTo(90,100),A.lineTo(150,80),A.lineTo(180,120),A.stroke()});function tn(){const A=new Ee;return A.add(o(new Le(1.4,1.05,.04),e.woodD)),A.add(a(new Dt(new qt(1.3,.95),new Rn({map:Yt,toneMapped:!1})),0,0,.03)),A}function pn(){const A=new Ee,N=i("#6e6668"),W=i("#4a4446"),Q=i("#b8b0a8"),de=o(new oa(.32,.8,6,12),N);de.rotation.x=pt/2,de.position.set(0,.34,0),de.scale.set(1.05,1,.85),A.add(de),A.add(a(o(new Xt(.24,12,10),Q),0,.22,.25));const Se=a(new Ee,0,.5,.78);Se.add(o(new Xt(.24,14,10),N)),Se.add(c(a(o(new gn(.12,.34,10),W),0,-.05,.26),pt/2,0,0)),Se.add(a(o(new Xt(.04,6,4),e.dark,!1),0,-.03,.43));for(const ne of[-1,1])Se.add(c(a(o(new gn(.07,.2,6),W),ne*.13,.22,-.02),0,0,-ne*.3)),Se.add(a(o(new Xt(.03,6,4),r("#ffb84a",1.2),!1),ne*.1,.05,.2));Se.rotation.x=.25,A.add(Se);for(const[ne,y]of[[-.2,.55],[.2,.55]])A.add(c(a(o(new oa(.07,.36,4,8),N),ne,.08,y+.15),pt/2,0,0));return A.add(c(a(o(new gn(.12,.7,8),W),.25,.22,-.75),1.2,.6,0)),A.add(c(a(o(new mn(.2,.03,6,16),e.red),0,.42,.62),pt/2.4,0,0)),A}return{FLAGS:T,FLAMES:I,SPINNERS:P,FIRE_LIGHTS:M,BOOK_COLS:et,flameTex:w,flame:ae,skull:F,horns:oe,fj:X,bx:te,taper:le,boards:fe,cornerIron:Te,barrel:me,crate:nt,sack:ct,table:Xe,roundTable:ut,stool:Ut,bench:at,candle:bt,skullCandle:it,bottle:Re,mug:Ne,plant:Je,bookshelf:wt,rug:lt,easel:Oe,desk:Fe,anvil:Ge,dummy:D,target:Ze,hay:Ye,brazier:Ve,torch:Pe,poleBanner:$e,hangingBanner:ye,skullPole:ue,spikes:L,drum:b,totem:Z,tent:Me,weaponRack:ge,woodpile:Ie,cart:Be,stall:_e,well:be,lampPost:Ae,chest:q,throne:ve,shield:xe,trophy:ke,chandelier:ie,lanternString:J,tree:pe,plantFlora:x,growFlora:H,crystal:Y,cauldron:B,fence:re,signPost:ce,bed:ze,bunk:mt,wardrobe:xt,partition:ft,curtain:Pt,scrollStack:Mt,telescope:qe,starGlobe:ht,wallMap:tn,wolf:pn,put:h}}const{PI:ju}=Math;function Cy(s,e,t,n){const{scene:i,COL:r,toon:o,mesh:l,at:a,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:_,growFlora:m,lampPost:g,skullPole:S}=e,E=Uu.pts;function T(ee,F){let oe=!1;for(let se=0,X=E.length-1;se<E.length;X=se++){const[te,le]=E[se],[fe,Te]=E[X];le>F!=Te>F&&ee<(fe-te)*(F-le)/(Te-le)+te&&(oe=!oe)}return oe}function I(ee,F,oe,se,X,te){const le=X-oe,fe=te-se,Te=le*le+fe*fe||1,Ke=Math.max(0,Math.min(1,((ee-oe)*le+(F-se)*fe)/Te));return Math.hypot(ee-oe-le*Ke,F-se-fe*Ke)}const P=[...bi.map(ee=>({w:ee.w*.65,pts:ee.closed?[...ee.line,ee.line[0]]:ee.line})),{w:1,pts:ua}],M=[],w=N1.map(ee=>ha[ee]);function U(ee,F,oe=.6){const se=Math.atan2(F,ee);if(Math.hypot(ee,F)>as(se)-1.6)return!1;for(const X of P){const te=X.pts;for(let le=0;le<te.length-1;le++){const fe=te[le],Te=te[le+1];if(!(Math.abs(fe[0]-ee)>X.w+oe+1.5||Math.abs(fe[1]-F)>X.w+oe+1.5)&&I(ee,F,fe[0],fe[1],Te[0],Te[1])<X.w+oe)return!1}}for(const X of ps)if(X.kind==="house"){const[te,le]=eo(X,ee,F),fe=3.4+oe;if(Math.abs(te)<X.w/2+fe&&le>-X.d/2-fe&&le<X.d/2+fe+(X.deck?4.5:0)+(X.id==="tavern"?5:0))return!1}else if(Math.hypot(ee-X.x,F-X.z)<X.r+(X.kind==="open"?2.2:1.4)+oe)return!1;for(const X of Jc)if(X.kind==="hut"){const[te,le]=eo(X,ee,F);if(Math.abs(te)<X.w/2+2.6+oe&&Math.abs(le)<X.d/2+2.6+oe)return!1}else if(Math.hypot(ee-X.x,F-X.z)<X.r+1.8+oe)return!1;for(let X=0;X<E.length;X++){const[te,le]=E[X],[fe,Te]=E[(X+1)%E.length];if(I(ee,F,te,le,fe,Te)<Uu.thick/2+.8+oe||Math.hypot(ee-te,F-le)<3.6+oe)return!1}if(Math.hypot(ee+44,F-26)<6+oe||Math.hypot(ee-hc[0],F-hc[1])<9+oe)return!1;for(const X of w)if(Math.hypot(ee-X.x,F-X.z)<1.2+oe)return!1;for(const X of M)if(Math.hypot(ee-X.x,F-X.z)<X.r+oe)return!1;return!0}function k(ee,F,oe,se){let X=0;for(let te=0;te<F&&X<ee;te++){const le=f(0,2*ju),fe=Math.sqrt(d())*58,Te=Math.cos(le)*fe*1.04,Ke=Math.sin(le)*fe*.9;oe(Te,Ke)&&(se(Te,Ke),X++)}}k(34,6e3,(ee,F)=>T(ee,F)&&U(ee,F,1.4),(ee,F)=>{_(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),ee,F),M.push({x:ee,z:F,r:2.2})}),k(80,9e3,(ee,F)=>!T(ee,F)&&U(ee,F,1.6),(ee,F)=>{_(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),ee,F),M.push({x:ee,z:F,r:2.4})});{const ee=[],F=[],oe=[];k(90,9e3,(se,X)=>U(se,X,.5),(se,X)=>{const te=f(.55,1);_(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),te*1.25,se,X),M.push({x:se,z:X,r:te})}),k(60,6e3,(se,X)=>U(se,X,.4),(se,X)=>{const te=f(.25,.8);ee.push({x:se,y:te*.3,z:X,sx:te,sy:te*f(.5,.85),sz:te*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),M.push({x:se,z:X,r:te})}),k(1200,16e3,(se,X)=>U(se,X,.1),(se,X)=>{const te=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let le=0;le<4;le++)F.push({x:se+f(-.12,.12),y:.11,z:X+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:te})}),k(320,12e3,(se,X)=>U(se,X,.1),(se,X)=>{oe.push({x:se,y:.16,z:X,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Mi(1,0),ee,{cast:!0});for(const se of[p(new gn(.06,.24,4),F,{}),p(new Xt(.09,7,5),oe,{})])se&&(se.userData.noLine=!0)}m(n);for(const[ee,F,oe]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const se=bi.find(te=>te.id===ee);if(!se)continue;const X=se.line;for(let te=6;te<X.length-6;te+=F*2){const[le,fe]=X[te-1],[Te,Ke]=X[te+1],rt=X[te],me=Math.hypot(Te-le,Ke-fe)||1,We=-(Ke-fe)/me,nt=(Te-le)/me,ct=te/(F*2)%2?1:-1,Xe=rt[0]+We*ct*(se.w*.62+.5),ut=rt[1]+nt*ct*(se.w*.62+.5);if(ee==="ring"&&Math.hypot(Xe,ut)<10)continue;let Ut=!0;for(const at of w)Math.hypot(Xe-at.x,ut-at.z)<2&&(Ut=!1);for(const at of ps)at.kind!=="house"&&Math.hypot(Xe-at.x,ut-at.z)<at.r+.5&&at.id!=="court"&&(Ut=!1);Ut&&h(i,oe==="lamp"?g(0):S(f(2,2.6)),Xe,ut,Math.atan2(-We*ct,-nt*ct))}}const j=[];function ae(){const ee=new Ee,F=o("#2a2426");ee.add(a(l(new Xt(.16,8,6),F),0,0,0)),ee.children[0].scale.set(1,.8,1.6),ee.add(a(l(new Xt(.1,8,6),F),0,.08,.2)),ee.add(c(a(l(new gn(.03,.12,4),o("#c79a45")),0,.07,.33),ju/2,0,0));for(const oe of[-1,1]){const se=a(new Ee,oe*.1,.02,0);se.add(a(l(new Le(.55,.03,.22),F),oe*.27,0,0)),ee.add(se)}return ee}for(let ee=0;ee<6;ee++){const F=ae();F.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},F.scale.setScalar(1.8),i.add(F),j.push(F)}for(const ee of["war","library","tavern"]){const F=t.HOUSES[ee];if(!F)continue;const oe=F.roof;for(let se=0;se<2;se++){const X=ae(),te=X.children[3],le=X.children[4];te.visible=le.visible=!0,te.rotation.z=.9,le.rotation.z=-.9,X.position.set(f(-F.r.w/3,F.r.w/3),oe.hR+.3,0),X.rotation.y=f(0,6),oe.R.add(X)}}return{CROWS:j}}async function Py(s){const e=s.reducedMotion;let t=s.width,n=s.height;const i=new h1({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});by(i,t,n,s.dpr);const r=new Dp,o=wy(i,r),l=oy(),a=py(),c=Sy(),h=Ry(o),d=await Ay(o,h,l);await c;const f=Ey(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=z1(o,h,d,f,d.models),p=Cy(o,h,f,d.models),{TEX:_,COL:m,toon:g,rnd:S,rr:E,pick:T,_c:I}=o,{FLAMES:P,SPINNERS:M,FLAGS:w,FIRE_LIGHTS:U}=h,{HOUSES:k,deskF:j,deskB:ae,hearthLight:ee}=f,{mouthMat:F,coreMat:oe,fireLight:se,chimneyTop:X,emberBase:te,waterTex:le,fallTex:fe,mists:Te,skyBoat:Ke,airship:rt}=u,{CROWS:me}=p,{skyDome:We,cloudRing:nt}=d,ct=Object.fromEntries(Ur.map(y=>[y,S()*6])),Xe=my(d.crossings),ut=My(o,r,await a,{reducedMotion:e,phases:ct,start:ku,groundY:Xe}),Ut=Object.values(ut.actors),at={...ku},bt=[];{const y=new Set;for(const O of Object.values(k)){for(const C of Object.values(O.sides))y.add(C.up);if(y.add(O.roof.R),O.upper){const C=O.upper;y.add(C.U);const z=new Map;C.U.traverse(K=>{if(!(K instanceof Dt))return;const he=K.material;let we=z.get(he);we||(we=he.clone(),z.set(he,we),C.mats.push(we)),K.material=we})}}for(const O of Ut)y.add(O.root);for(const{f:O}of P)y.add(O);for(const O of M)y.add(O.o);for(const O of w)y.add(O);for(const O of me)y.add(O);[j.g,ae.g,Ke,rt,nt,We].forEach(O=>y.add(O)),r.updateMatrixWorld(!0);const $=new Map,G=["position","normal","uv"],v=O=>{if(y.has(O))return;for(const Ce of[...O.children])v(Ce);if(!(O instanceof Dt)||O instanceof Xr||O.children.length||Array.isArray(O.material))return;const C=O.material,z=O.geometry;if(C.transparent||C.vertexColors||C.isShaderMaterial||C.depthWrite===!1||!z.attributes.uv||!z.attributes.normal||z.attributes.color)return;const K=z.index?z.toNonIndexed():z.clone();for(const Ce of Object.keys(K.attributes))G.includes(Ce)||K.deleteAttribute(Ce);K.morphAttributes={},K.clearGroups(),K.applyMatrix4(O.matrixWorld);const he=C.uuid+(O.castShadow?"s":"n"),we=$.get(he);we?we.geos.push(K):$.set(he,{m:C,cast:O.castShadow,geos:[K]}),O.parent?.remove(O)};v(r);for(const{m:O,cast:C,geos:z}of $.values()){const K=Kc(z,!1);if(!K){console.warn("could not merge",O.type);continue}const he=new Dt(K,O);he.castShadow=C,he.receiveShadow=!0,he.matrixAutoUpdate=!1,r.add(he)}const R=new Rn({visible:!1});for(const[O,C]of Object.entries(k)){const z=C.top+C.roof.hR,K=new Dt(new Le(C.r.w+.6,z,C.r.d+.6),R);K.position.set(C.r.x,z/2,C.r.z),K.rotation.y=C.r.ry||0,K.userData.houseId=O,r.add(K),K.updateMatrixWorld(!0),bt.push(K)}}const it=new Wn(Dn.fov,t/n,Dn.near,Dn.far),Re={t:new V(...Dn.home.target),p:new V(...Dn.home.position)};it.position.copy(Re.p);const Ne=new d1(it,i.domElement);Ne.target.copy(Re.t),Ne.enableDamping=!0,Ne.dampingFactor=.08,Ne.minDistance=Dn.minDistance,Ne.maxDistance=Dn.maxDistance,Ne.maxPolarAngle=Dn.maxPolarAngle,Ne.minPolarAngle=Dn.minPolarAngle,Ne.screenSpacePanning=!1,Ne.zoomSpeed=.8,Ne.update();function Je(){const y=Ne.target,$=Math.hypot(y.x,y.z),G=Dn.targetRadius;if($>G){const v=G/$;it.position.x-=y.x*(1-v),it.position.z-=y.z*(1-v),y.x*=v,y.z*=v}if(y.y<Dn.targetMinY||y.y>Dn.targetMaxY){const v=Math.max(Dn.targetMinY,Math.min(Dn.targetMaxY,y.y));it.position.y+=v-y.y,y.y=v}it.position.y<Dn.minHeight&&(it.position.y=Dn.minHeight)}let et=null,je=null,wt=!1;function lt(y,$){if(e){Ne.target.copy(y),it.position.copy($),Ne.update();return}et={t0:performance.now(),dur:1100,ft:Ne.target.clone(),fp:it.position.clone(),tt:y,tp:$}}function Oe(y){if(y==="overview"){je=null,lt(Re.t.clone(),Re.p.clone());return}const $=k[y];je=y,$&&($.view="ground");const G=k1(y,[it.position.x-Ne.target.x,it.position.z-Ne.target.z]);lt(new V(...G.target),new V(...G.position))}const Fe=()=>{et=null};i.domElement.addEventListener("pointerdown",Fe),i.domElement.addEventListener("wheel",Fe,{passive:!0});const Ge=y=>wt||je===y.id||!!y.near;function D(y,$){const G=Ne.target,v=Math.hypot(y.r.x-G.x,y.r.z-G.z),R=Math.max(y.r.w,y.r.d)*.8+9;y.near=y.near?$<72&&v<R+4:$<64&&v<R}function Ze(y,$,G){if(G.fading!==$){G.fading=$;for(const v of y)v.transparent=$,v.needsUpdate=!0}}function Ye(y,$,G){const v=$?0:1;y.s+=(v-y.s)*G,Math.abs(y.s-v)<.004&&(y.s=v),y.up.scale.y=Math.max(.001,y.s),y.up.visible=y.s>.03}function Ve(y){const $=it.position.distanceTo(Ne.target),G=e?1:Math.min(1,y*5),v=e?1:Math.min(1,y*6);for(const R of Object.values(k)){D(R,$);const O=Ge(R),C=O&&!!R.upper&&R.view==="upper",z=O?1:0;R.lift+=(z-R.lift)*G,Math.abs(R.lift-z)<.002&&(R.lift=z);const K=R.roof;K.R.position.y=K.base+R.lift*3.4,K.R.visible=R.lift<.97;for(const He of K.mats)He.opacity=1-R.lift;const he=it.position.x-R.r.x,we=it.position.z-R.r.z,Ce=Math.hypot(he,we)||1,Qe=Math.cos(R.r.ry||0),st=Math.sin(R.r.ry||0),ot=He=>{const vt=((He.n[0]*Qe+He.n[1]*st)*he+(-He.n[0]*st+He.n[1]*Qe)*we)/Ce;return vt>.32?He.wish=!0:vt<.06&&(He.wish=!1),!!He.wish};for(const He of Object.values(R.sides))Ye(He,O&&!C&&ot(He),v);if(R.upper){const He=R.upper,vt=O&&!C?1:0;He.lift+=(vt-He.lift)*G,Math.abs(He.lift-vt)<.002&&(He.lift=vt),Ze(He.mats,He.lift>0,He),He.U.position.y=He.top+He.lift*3.4,He.U.visible=He.lift<.97;for(const yt of He.mats)yt.opacity=1-He.lift;for(const yt of Object.values(He.sides))Ye(yt,C&&ot(yt),v)}}}function Pe(y,$,G,v,R,O){const C=new en;C.setAttribute("position",new En(new Float32Array(y*3),3));const z=new Sr(C,new Pr({color:$,size:G,map:v,transparent:!0,opacity:R,depthWrite:!1,blending:v?ks:Oi}));return z.frustumCulled=!1,z.userData.seed=Float32Array.from({length:y},()=>Math.random()),z.userData.h=Float32Array.from({length:y},()=>Math.random()*O),z.userData.top=O,z.visible=!e,r.add(z),z}const $e=[{at:X,p:Pe(30,"#d8cfc6",2.2,_.soft,.5,9),heat:!0}];for(const y of Object.values(k)){if(!y.roof.smokeAt)continue;y.g.updateMatrixWorld(!0);const $=y.roof.R.localToWorld(new V(...y.roof.smokeAt));$e.push({at:$,p:Pe(14,"#d8cfc6",1.4,_.soft,.45,5),house:y})}const ye=Pe(60,"#ffb04a",.11,null,.9,4),ue=[];for(let y=0;y<4;y++){const $=new cs(new Gs({map:_.spark,color:y%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Oi}));$.scale.setScalar(.25),j.g.add($),ue.push($)}const L=[];{const y=new Set;for(const G of Object.values(k)){y.add(G.roof.R);for(const v of Object.values(G.sides))y.add(v.up);if(G.upper){y.add(G.upper.U);for(const v of Object.values(G.upper.sides))y.add(v.up)}}r.updateMatrixWorld(!0);const $=[];r.traverse(G=>{G instanceof zi&&$.push(G)});for(const G of $){const v=[];let R=!1;for(let O=G.parent,C=0;O&&C<40;O=O.parent,C++)y.has(O)&&v.push(O),O.userData.agentId&&(R=!0);R||(r.attach(G),v.length&&L.push({l:G,anc:v,base:G.intensity}))}}function b(){for(const y of L)y.anc.every(G=>G.visible)?y.l.intensity===0&&(y.l.intensity=y.base):y.l.intensity=0}const Z=1;r.updateMatrixWorld(!0);const Me=[];for(const{f:y,s:$}of P){if($<1.3)continue;let G=y,v=!1;for(let R=0;G&&R<40;R++)G.userData.movesWithWall===!0&&(v=!0),G=G.parent;v||Me.push(y.getWorldPosition(new V))}function ge(y){const $=new en;$.setAttribute("position",new En(new Float32Array(y*3),3)),$.setAttribute("color",new En(new Float32Array(y*3),3));const G=new Sr($,new Pr({size:.09,map:_.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Oi,toneMapped:!1}));return G.frustumCulled=!1,G.visible=!e,r.add(G),G}const Ie=ge(Math.max(1,Me.length*7)),Be=Ie.geometry.attributes.position.count,_e={src:Float32Array.from({length:Be},(y,$)=>$%Math.max(1,Me.length)),life:Float32Array.from({length:Be},()=>Math.random()),sd:Float32Array.from({length:Be},()=>Math.random())},be=240,Ae=new Sr(new en,new Pr({size:.07,map:_.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Oi}));Ae.geometry.setAttribute("position",new En(new Float32Array(be*3),3));const q=Float32Array.from({length:be*3},()=>Math.random());Ae.frustumCulled=!1,Ae.visible=!e,r.add(Ae);const ve=80,xe=new qt(.16,.1),ke=new Xr(xe,g("#ffffff",{side:ln}),ve),ie=[];for(let y=0;y<ve;y++)ke.setColorAt(y,I.set(T([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),ie.push({x:E(-30,30),y:E(0,12),z:E(-30,30),r:E(0,6),v:E(.5,.9),w:E(1,3)});ke.instanceColor&&(ke.instanceColor.needsUpdate=!0),ke.frustumCulled=!1,ke.visible=!e,r.add(ke);const J=new Rt,pe=new cn,De=new wi,x=new V,H=new V(1,1,1);function Y(y,$){const G=Ie.geometry.attributes.position,v=Ie.geometry.attributes.color;for(let C=0;C<G.count;C++){const z=Me[_e.src[C]];if(!z)break;_e.life[C]=_e.life[C]+$*(.35+_e.sd[C]*.4),_e.life[C]>1&&(_e.life[C]=_e.life[C]-1);const K=_e.life[C],he=_e.sd[C];G.setXYZ(C,z.x+Math.sin(y*(1+he)+he*20)*.25*K,z.y+.2+K*2.2,z.z+Math.cos(y*(.8+he)+he*9)*.25*K);const we=(1-K)*(.6+.4*Math.sin(y*13+he*30))*2.2;v.setXYZ(C,we,we*.48,we*.16)}G.needsUpdate=!0,v.needsUpdate=!0;const R=Ae.geometry.attributes.position,O=Ne.target;for(let C=0;C<be;C++){const z=q[C*3],K=q[C*3+1],he=q[C*3+2],we=((z*44+y*.25*(K-.5)-O.x)%44+66)%44-22,Ce=((K*44+y*.18*(z-.3)-O.z)%44+66)%44-22;R.setXYZ(C,O.x+we,.6+he*9+Math.sin(y*.5+z*20)*.4,O.z+Ce)}R.needsUpdate=!0;for(let C=0;C<ve;C++){const z=ie[C];z.y-=$*z.v,z.y<.05&&(z.y=E(8,13),z.x=O.x+E(-28,28),z.z=O.z+E(-28,28)),x.set(z.x+Math.sin(y*.9+z.r)*.9,z.y,z.z+Math.cos(y*.7+z.r)*.6),De.set(y*z.w+z.r,y*.6+z.r,Math.sin(y*2+z.r)*1.2),J.compose(x,pe.setFromEuler(De),H),ke.setMatrixAt(C,J)}ke.instanceMatrix.needsUpdate=!0}r.traverse(y=>{const $=y.material;(y instanceof Sr||y instanceof cs||y.userData.noLine||$&&!Array.isArray($)&&($.blending===Oi||$.depthWrite===!1))&&y.layers.set(Z)});for(const y of[nt,ke,We])y.traverse($=>$.layers.set(Z));it.layers.enable(Z);const B=new P0({side:ln}),re=new On(1,1,{type:Un});re.depthTexture=new us(1,1),re.depthTexture.type=ui;const ce=new _t(.5,.5,1),ze=new _t;function mt(){r.overrideMaterial=B,it.layers.disable(Z);const y=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(ze);const $=i.getClearAlpha();i.setClearColor(ce,1),i.setRenderTarget(re),i.clear(),i.render(r,it),i.setRenderTarget(null),i.setClearColor(ze,$),i.shadowMap.autoUpdate=y,it.layers.enable(Z),r.overrideMaterial=null}const xt=new C1(i,new On(1,1,{type:Un,samples:4}));xt.setPixelRatio(i.getPixelRatio()),xt.addPass(new L1(r,it));const ft="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Pt=new cc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Ue},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:ft,fragmentShader:`#include <packing>
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
    }`});xt.addPass(Pt);const Mt=new Js(new Ue(t,n),.42,.55,.88);X1(Mt),xt.addPass(Mt),xt.addPass(new P1);const qe=new cc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Ue},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:ft,fragmentShader:`#include <packing>
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
    }`});xt.addPass(qe);const ht=Pt.uniforms,Yt=qe.uniforms,tn=(y,$)=>y[$];tn(ht,"tDepth").value=re.depthTexture,tn(Yt,"tDepth").value=re.depthTexture;function pn(y,$){const G=i.getPixelRatio();i.setSize(y,$),xt.setSize(y,$),Mt.setSize(y,$),re.setSize(Math.floor(y*G),Math.floor($*G)),tn(ht,"texel").value.set(1/(y*G),1/($*G)),tn(Yt,"texel").value.copy(tn(ht,"texel").value),tn(ht,"width").value=Math.max(1,G*.85),it.aspect=y/$,it.updateProjectionMatrix()}for(const y of[ht,Yt])tn(y,"near").value=it.near,tn(y,"far").value=it.far;pn(t,n);const A=0,N={frontend:!1,backend:!1};let W=-1,Q=0,de=0,Se=!1;function ne(y){W<0&&(W=y);const $=(y-W)/1e3,G=Math.min(.05,$-Q);Q=$;for(const O of Ut){const C=Xe(O.root.position.x,O.root.position.z);O.root.position.y+=(C-O.root.position.y)*Math.min(1,G*12);const z=ha[at[O.id]].pose;ut.lanternFor(O,z,$),ut.drive(O,z,G,at[O.id])}const v=.25+A*.35,R=e?0:Math.sin($*9)*.08+Math.sin($*23)*.05;F.emissiveIntensity=.9+v*1.4+R,oe.emissiveIntensity=1.2+v*1.8+R,se.intensity=8+v*16+R*20;for(const[O,C]of[[j,"frontend"],[ae,"backend"]]){const z=N[C],K=O.screen?.material;K&&(K.opacity+=((z?1:.3)-K.opacity)*Math.min(1,G*4)),O.light&&(O.light.intensity=z?3.5:0)}if(Ve(G),!e){for(const{f:K,ph:he}of P){const we=1+Math.sin($*11+he)*.16+Math.sin($*27+he*2)*.08;K.scale.set(1/Math.sqrt(we),we,1/Math.sqrt(we))}for(const K of U)K.l.intensity=K.base*(1+Math.sin($*9+K.ph)*.12+Math.sin($*23+K.ph)*.06);ee.intensity=11+Math.sin($*7)*1.5;for(const K of M)K.o.rotation[K.axis]+=G*K.v,K.bob&&(K.o.position.y=(K.y0??0)+Math.sin($*1.6)*.06);Math.abs(Math.sin($*5.2+ct.frontend)),ue.forEach((K,he)=>{K.material.opacity=0,K.position.set(-.4+he*.19,.95+he%2*.12+0,he%2*.08-.29),K.material.rotation=$*3+he}),j.kb&&(j.kb.position.y=j.kb.userData.y0+0);const O=ye.geometry.attributes.position,C=ye.userData.h,z=ye.userData.seed;for(let K=0;K<O.count;K++){const he=z[K];C[K]=C[K]+G*(.5+he*.7)*(.5+v),C[K]>ye.userData.top&&(C[K]=0),O.setXYZ(K,te.x+Math.sin($*(.6+he)+he*10)*.8*he,te.y+C[K],te.z+Math.cos($*.7+he*7)*.5*he)}O.needsUpdate=!0,ye.material.opacity=Math.min(.95,.2+v*.5);for(const K of $e){const he=K.p,we=he.geometry.attributes.position,Ce=he.userData.h,Qe=he.userData.seed,st=K.house?K.house.lift:0;he.visible=st<.5;const ot=K.heat?.6+v:.7;for(let He=0;He<we.count;He++){const vt=Qe[He];Ce[He]=Ce[He]+G*(.5+vt*.4)*ot,Ce[He]>he.userData.top&&(Ce[He]=0);const yt=Ce[He];we.setXYZ(He,K.at.x+Math.sin(yt*.8+vt*6)*yt*.16+yt*.3,K.at.y+yt,K.at.z+Math.cos(yt*.6+vt*4)*yt*.14)}we.needsUpdate=!0}fe.offset.y=(fe.offset.y+G*1.6)%1,le.offset.x=(le.offset.x+G*.12)%1,nt.rotation.y+=G*.004,Te.forEach((K,he)=>{K.material.opacity=.42+Math.sin($*.8+he)*.1});for(const K of me){const he=K.userData;he.a+=G*he.s,K.position.set(Math.cos(he.a)*he.r,he.y+Math.sin(he.a*3)*.8,Math.sin(he.a)*he.r),K.rotation.y=-he.a,K.children[3].rotation.z=Math.sin($*10+he.r)*.6,K.children[4].rotation.z=-Math.sin($*10+he.r)*.6}w.forEach((K,he)=>{K.rotation.y=Math.sin($*2+he)*.3}),Ke.position.y=-.4+Math.sin($*.9)*.2,Ke.rotation.x=Math.sin($*.7)*.03;{const K=rt.userData;K.a+=G*.022,rt.position.set(Math.cos(K.a)*K.r,K.y+Math.sin($*.5)*.8,Math.sin(K.a)*K.r),rt.rotation.y=Math.atan2(-Math.cos(K.a),-Math.sin(K.a))}}if(et){const O=Math.min(1,(performance.now()-et.t0)/et.dur),C=O<.5?4*O*O*O:1-Math.pow(-2*O+2,3)/2;Ne.target.lerpVectors(et.ft,et.tt,C),it.position.lerpVectors(et.fp,et.tp,C),O>=1&&(et=null)}b(),Ne.update(),Je(),e||Y($,G),We.position.copy(it.position),tn(Yt,"focus").value=it.position.distanceTo(Ne.target),tn(Yt,"time").value=e?0:$,mt(),xt.render(),de++}return{renderer:i,scene:r,camera:it,controls:Ne,housePicks:bt,agentPhase:ct,cast:ut,groundY:Xe,place(y,$){const G=ha[$],v=ut.actors[y];v.root.position.set(G.x,Xe(G.x,G.z),G.z),v.root.rotation.y=G.ry,at[y]=$},get frames(){return de},start(){Se=!1,i.setAnimationLoop(y=>{Se||ne(y)})},stop(){Se=!0,i.setAnimationLoop(null)},resize(y,$){t=y,n=$,pn(y,$)},flyToRoom:Oe,setOpenHouses(y){wt=y},setTasks(y){f.drawBoard(y)},dispose(){i.setAnimationLoop(null),i.domElement.removeEventListener("pointerdown",Fe),i.domElement.removeEventListener("wheel",Fe),Ne.dispose(),xt.dispose(),re.dispose(),i.dispose()}}}export{Py as createWorld};
