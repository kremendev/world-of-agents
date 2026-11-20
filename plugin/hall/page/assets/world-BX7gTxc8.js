import{R as wi,S as Yr,a as ni,A as _h,r as $o,f as gd,B as aa,D as Cc,F as Ye,b as bs,c as la,t as qr,d as Of,i as Lr,e as Ff,C as xh,g as vh,w as Bf,p as Ba,h as zf,W as po}from"./index-Bbgarp_T.js";const Pc="187",Qs={ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kf=0,Mh=1,Gf=2,zr=1,Hf=2,Dr=3,gs=0,Jn=1,Sn=2,ws=0,js=1,Si=2,yh=3,Sh=4,Vf=5,qs=100,Wf=101,Xf=102,Yf=103,qf=104,Kf=200,Zf=201,Jf=202,$f=203,_d=204,xd=205,Qf=206,jf=207,tp=208,ep=209,np=210,ip=211,sp=212,rp=213,op=214,Pl=0,Ll=1,Dl=2,Kr=3,Il=4,Nl=5,Ul=6,Ol=7,vd=0,ap=1,lp=2,ss=0,Lc=1,Dc=2,Ic=3,Aa=4,Nc=5,Uc=6,Oc=7,bh="attached",cp="detached",Md=300,ir=301,Zr=302,za=303,ka=304,xi=1e3,ii=1001,ca=1002,Nn=1003,yd=1004,Ir=1005,Hn=1006,Qo=1007,Fi=1008,hi=1009,Sd=1010,bd=1011,Jr=1012,Fc=1013,Ai=1014,_i=1015,$n=1016,Bc=1017,zc=1018,sr=1020,wd=35902,Td=35899,Ed=1021,Ad=1022,Ti=1023,_s=1026,ms=1027,Ra=1028,kc=1029,Ts=1030,Gc=1031,Hc=1033,jo=33776,ta=33777,ea=33778,na=33779,Fl=35840,Bl=35841,zl=35842,kl=35843,Gl=36196,Hl=37492,Vl=37496,Wl=37488,Xl=37489,ha=37490,Yl=37491,ql=37808,Kl=37809,Zl=37810,Jl=37811,$l=37812,Ql=37813,jl=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,lc=36494,cc=36495,hc=36283,uc=36284,ua=36285,dc=36286,hp=2200,up=2201,dp=2202,$r=2300,Qr=2301,Ga=2302,wh=2303,Js=2400,$s=2401,da=2402,Vc=2500,fp=2501,pp=0,Rd=1,fc=2,mp=3200,jr=0,gp=1,ts="",In="srgb",di="srgb-linear",fa="linear",fn="srgb",Ha=7680,_p=519,xp=512,vp=513,Mp=514,Cd=515,yp=516,Sp=517,Pd=518,Ld=519,Dd=35044,Th="300 es",Ei=2e3,to=2001;function bp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tp(){const s=eo("canvas");return s.style.display="block",s}const Eh={};function pa(...s){const t="THREE."+s.shift();console.log(t,...s)}function Id(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function De(...s){s=Id(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ke(...s){s=Id(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function tr(...s){const t=s.join(" ");t in Eh||(Eh[t]=!0,De(...s))}function Ep(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ap={[Pl]:Pl,[Dl]:Ul,[Il]:Il,[Kr]:Nl,[Ll]:Ll,[Ul]:Dl,[Ol]:Ol,[Nl]:Kr};class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const kr=Math.PI/180,rr=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[e&63|128]+qn[e>>8&255]+"-"+qn[e>>16&255]+qn[e>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function je(s,t,e){return Math.max(t,Math.min(e,s))}function Wc(s,t){return(s%t+t)%t}function Rp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Cp(s,t,e){return s!==t?(e-s)/(t-s):0}function Gr(s,t,e){return(1-e)*s+e*t}function Pp(s,t,e,n){return Gr(s,t,1-Math.exp(-e*n))}function Lp(s,t=1){return t-Math.abs(Wc(s,t*2)-t)}function Dp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ip(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Np(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Up(s,t){return s+Math.random()*(t-s)}function Op(s){return s*(.5-Math.random())}function Fp(s){s!==void 0&&(Ah=s);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bp(s){return s*kr}function zp(s){return s*rr}function kp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Gp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Nd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hp(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ca(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xc(s,t){if(t.constructor===Float32Array)return s;const e=Ca(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Yc(s,t){if(t.constructor===Float32Array)return s;const e=Ca(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const ma={DEG2RAD:kr,RAD2DEG:rr,generateUUID:Ri,clamp:je,euclideanModulo:Wc,mapLinear:Rp,inverseLerp:Cp,lerp:Gr,damp:Pp,pingpong:Lp,smoothstep:Dp,smootherstep:Ip,randInt:Np,randFloat:Up,randFloatSpread:Op,seededRandom:Fp,degToRad:Bp,radToDeg:zp,isPowerOfTwo:kp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Nd,setQuaternionFromProperEuler:Hp,normalize:Yc,denormalize:Xc},fh=class fh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;let Ut=fh;class bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ph=class ph{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this.z=je(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this.z=je(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;let k=ph;const Va=new k,Rh=new bn,mh=class mh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],M=i[1],E=i[4],w=i[7],I=i[2],P=i[5],v=i[8];return r[0]=o*x+a*M+l*I,r[3]=o*m+a*E+l*P,r[6]=o*g+a*w+l*v,r[1]=c*x+h*M+d*I,r[4]=c*m+h*E+d*P,r[7]=c*g+h*w+d*v,r[2]=f*x+u*M+p*I,r[5]=f*m+u*E+p*P,r[8]=f*g+u*w+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;let Ke=mh;const Wa=new Ke,Ch=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const s={enabled:!0,workingColorSpace:di,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fn&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fn&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ts?fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[di]:{primaries:t,whitePoint:n,transfer:fa,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:n,transfer:fn,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}const rn=Vp();function rs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class Wp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=eo("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xp=0;class qc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xa(i[o].image)):r.push(Xa(i[o]))}else r=Xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Yp=0;const Ya=new k;class Fn extends as{constructor(t=Fn.DEFAULT_IMAGE,e=Fn.DEFAULT_MAPPING,n=ii,i=ii,r=Hn,o=Fi,a=Ti,l=hi,c=Fn.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ri(),this.name="",this.source=new qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){De(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){De(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Md;Fn.DEFAULT_ANISOTROPY=1;const gh=class gh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,w=(u+1)/2,I=(g+1)/2,P=(h+f)/4,v=(d+x)/4,b=(p+m)/4;return E>w&&E>I?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=v/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=P/i,r=b/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=v/r,i=b/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this.z=je(this.z,t.z,e.z),this.w=je(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this.z=je(this.z,t,e),this.w=je(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;let _n=gh;class qp extends as{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _n(0,0,t,e),this.scissorTest=!1,this.viewport=new _n(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Fn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new qc(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends qp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ud extends Fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends Fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ea=class Ea{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,Jp)}lookAt(t,e,n){const i=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ls.crossVectors(n,li),ls.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ls.crossVectors(n,li)),ls.normalize(),mo.crossVectors(li,ls),i[0]=ls.x,i[4]=mo.x,i[8]=li.x,i[1]=ls.y,i[5]=mo.y,i[9]=li.y,i[2]=ls.z,i[6]=mo.z,i[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],E=n[7],w=n[11],I=n[15],P=i[0],v=i[4],b=i[8],F=i[12],U=i[1],X=i[5],st=i[9],j=i[13],N=i[2],it=i[6],at=i[10],Y=i[14],H=i[3],nt=i[7],ht=i[11],wt=i[15];return r[0]=o*P+a*U+l*N+c*H,r[4]=o*v+a*X+l*it+c*nt,r[8]=o*b+a*st+l*at+c*ht,r[12]=o*F+a*j+l*Y+c*wt,r[1]=h*P+d*U+f*N+u*H,r[5]=h*v+d*X+f*it+u*nt,r[9]=h*b+d*st+f*at+u*ht,r[13]=h*F+d*j+f*Y+u*wt,r[2]=p*P+x*U+m*N+g*H,r[6]=p*v+x*X+m*it+g*nt,r[10]=p*b+x*st+m*at+g*ht,r[14]=p*F+x*j+m*Y+g*wt,r[3]=M*P+E*U+w*N+I*H,r[7]=M*v+E*X+w*it+I*nt,r[11]=M*b+E*st+w*at+I*ht,r[15]=M*F+E*j+w*Y+I*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*u-c*f,E=a*u-c*d,w=a*f-l*d,I=o*u-c*h,P=o*f-l*h,v=o*d-a*h;return e*(x*M-m*E+g*w)-n*(p*M-m*I+g*P)+i*(p*E-x*I+g*v)-r*(p*w-x*P+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*a-n*o,E=e*l-i*o,w=e*c-r*o,I=n*l-i*a,P=n*c-r*a,v=i*c-r*l,b=h*x-d*p,F=h*m-f*p,U=h*g-u*p,X=d*m-f*x,st=d*g-u*x,j=f*g-u*m,N=M*j-E*st+w*X+I*U-P*F+v*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/N;return t[0]=(a*j-l*st+c*X)*it,t[1]=(i*st-n*j-r*X)*it,t[2]=(x*v-m*P+g*I)*it,t[3]=(f*P-d*v-u*I)*it,t[4]=(l*U-o*j-c*F)*it,t[5]=(e*j-i*U+r*F)*it,t[6]=(m*w-p*v-g*E)*it,t[7]=(h*v-f*w+u*E)*it,t[8]=(o*st-a*U+c*b)*it,t[9]=(n*U-e*st-r*b)*it,t[10]=(p*P-x*w+g*M)*it,t[11]=(d*w-h*P-u*M)*it,t[12]=(a*F-o*X-l*b)*it,t[13]=(e*X-n*F+i*b)*it,t[14]=(x*E-p*I-m*M)*it,t[15]=(h*I-d*E+f*M)*it,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,M=l*c,E=l*h,w=l*d,I=n.x,P=n.y,v=n.z;return i[0]=(1-(x+g))*I,i[1]=(u+w)*I,i[2]=(p-E)*I,i[3]=0,i[4]=(u-w)*P,i[5]=(1-(f+g))*P,i[6]=(m+M)*P,i[7]=0,i[8]=(p+E)*v,i[9]=(m-M)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ps.set(i[0],i[1],i[2]).length();const a=Ps.set(i[4],i[5],i[6]).length(),l=Ps.set(i[8],i[9],i[10]).length();r<0&&(o=-o),vi.copy(this);const c=1/o,h=1/a,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,e.setFromRotationMatrix(vi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Ei,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===to)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ei,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===to)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ea.prototype.isMatrix4=!0;let ze=Ea;const Ps=new k,vi=new ze,Zp=new k(0,0,0),Jp=new k(1,1,1),ls=new k,mo=new k,li=new k,Lh=new ze,Dh=new bn;class ki{constructor(t=0,e=0,n=0,i=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $p=0;const Ih=new k,Ls=new bn,Yi=new ze,go=new k,_r=new k,Qp=new k,jp=new bn,Nh=new k(1,0,0),Uh=new k(0,1,0),Oh=new k(0,0,1),Fh={type:"added"},t0={type:"removed"},Ds={type:"childadded",child:null},qa={type:"childremoved",child:null};class Mn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new k,e=new ki,n=new bn,i=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ke}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(_r,go,this.up):Yi.lookAt(go,_r,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t0),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mn.DEFAULT_UP=new k(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class At extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e0={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,rn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=rn.workingColorSpace){return this.r=t,this.g=e,this.b=n,rn.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=rn.workingColorSpace){if(t=Wc(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return rn.colorSpaceToWorking(this,i),this}setStyle(t,e=In){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:De("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);De("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){const n=Od[t.toLowerCase()];return n!==void 0?this.setHex(n,e):De("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return rn.workingToColorSpace(Kn.copy(this),t),Math.round(je(Kn.r*255,0,255))*65536+Math.round(je(Kn.g*255,0,255))*256+Math.round(je(Kn.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=rn.workingColorSpace){rn.workingToColorSpace(Kn.copy(this),e);const n=Kn.r,i=Kn.g,r=Kn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=rn.workingColorSpace){return rn.workingToColorSpace(Kn.copy(this),e),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=In){rn.workingToColorSpace(Kn.copy(this),t);const e=Kn.r,n=Kn.g,i=Kn.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(_o);const n=Gr(cs.h,_o.h,e),i=Gr(cs.s,_o.s,e),r=Gr(cs.l,_o.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Te;Te.NAMES=Od;class Zc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(t),this.near=e,this.far=n}clone(){return new Zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n0 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mi=new k,qi=new k,Ja=new k,Ki=new k,Is=new k,Ns=new k,Bh=new k,$a=new k,Qa=new k,ja=new k,tl=new _n,el=new _n,nl=new _n;class gi{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mi.subVectors(t,e),i.cross(Mi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mi.subVectors(i,e),qi.subVectors(n,e),Ja.subVectors(t,e);const o=Mi.dot(Mi),a=Mi.dot(qi),l=Mi.dot(Ja),c=qi.dot(qi),h=qi.dot(Ja),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(el,r.y),o.addScaledVector(nl,r.z),o}static isFrontFacing(t,e,n,i){return Mi.subVectors(n,e),qi.subVectors(t,e),Mi.cross(qi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Mi.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return gi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Is.subVectors(i,n),Ns.subVectors(r,n),$a.subVectors(t,n);const l=Is.dot($a),c=Ns.dot($a);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,i);const h=Is.dot(Qa),d=Ns.dot(Qa);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Is,o);ja.subVectors(t,r);const u=Is.dot(ja),p=Ns.dot(ja);if(p>=0&&u<=p)return e.copy(r);const x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ns,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Bh.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(Bh,a);const g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Is,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),vo.subVectors(this.max,xr),Us.subVectors(t.a,xr),Os.subVectors(t.b,xr),Fs.subVectors(t.c,xr),hs.subVectors(Os,Us),us.subVectors(Fs,Os),xs.subVectors(Us,Fs);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-xs.z,xs.y,hs.z,0,-hs.x,us.z,0,-us.x,xs.z,0,-xs.x,-hs.y,hs.x,0,-us.y,us.x,0,-xs.y,xs.x,0];return!il(e,Us,Os,Fs,vo)||(e=[1,0,0,0,1,0,0,0,1],!il(e,Us,Os,Fs,vo))?!1:(Mo.crossVectors(hs,us),e=[Mo.x,Mo.y,Mo.z],il(e,Us,Os,Fs,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new k,new k,new k,new k,new k,new k,new k,new k],yi=new k,xo=new Gi,Us=new k,Os=new k,Fs=new k,hs=new k,us=new k,xs=new k,xr=new k,vo=new k,Mo=new k,vs=new k;function il(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vs.fromArray(s,r);const a=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),l=t.dot(vs),c=e.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dn=new k,yo=new Ut;let i0=0;class Gn extends as{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dd,this.updateRanges=[],this.gpuType=_i,this.version=0,this._normalizationScale=t!==void 0?Ca(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix3(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix4(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyNormalMatrix(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.transformDirection(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yc(t,this.array)}}class Fd extends Gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bd extends Gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends Gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const s0=new Gi,vr=new k,sl=new k;class Hi{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):s0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(sl)),this.expandByPoint(vr.copy(t.center).sub(sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let r0=0;const fi=new ze,rl=new Mn,Bs=new k,ci=new Gi,Mr=new Gi,kn=new k;class mn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bp(t)?Bd:Fd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(kn.addVectors(ci.min,Mr.min),ci.expandByPoint(kn),kn.addVectors(ci.max,Mr.max),ci.expandByPoint(kn)):(ci.expandByPoint(Mr.min),ci.expandByPoint(Mr.max))}ci.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)kn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(kn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kn.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),kn.add(Bs)),i=Math.max(i,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)a[F]=new k,l[F]=new k;const h=new k,d=new k,f=new k,u=new Ut,p=new Ut,x=new Ut,m=new k,g=new k;function M(F,U,X){c[F]=c[U]=c[X]=1,h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,X),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,U),x.fromBufferAttribute(r,X),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const st=1/(p.x*x.y-x.x*p.y);isFinite(st)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(st),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(st),a[F].add(m),a[U].add(m),a[X].add(m),l[F].add(g),l[U].add(g),l[X].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,U=E.length;F<U;++F){const X=E[F],st=X.start,j=X.count;for(let N=st,it=st+j;N<it;N+=3)M(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const w=new k,I=new k,P=new k,v=new k;function b(F){P.fromBufferAttribute(i,F),v.copy(P);const U=a[F];w.copy(U),w.sub(P.multiplyScalar(P.dot(U))).normalize(),I.crossVectors(v,U);const st=I.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,st)}for(let F=0,U=n.count;F<U;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)kn.fromBufferAttribute(t,e),kn.normalize(),t.setXYZ(e,kn.x,kn.y,kn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Gn(f,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dd,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=zh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=zh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function zh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ri()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const jn=new k;class no{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Ca(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyMatrix4(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyNormalMatrix(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.transformDirection(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new no(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yc(t,this.data.array)}}const ol=new k,o0=new k,a0=new Ke;class ji{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ol.subVectors(n,e).cross(o0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||a0.getNormalMatrix(t),i=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let l0=0;class ui extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=js,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=xd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){De(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){De(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ji().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class os extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zs;const yr=new k,ks=new k,Gs=new k,Hs=new Ut,Sr=new Ut,kd=new ze,So=new k,br=new k,bo=new k,kh=new Ut,al=new Ut,Gh=new Ut;class Bi extends Mn{constructor(t=new os){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zd(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new no(n,3,0,!1)),zs.setAttribute("uv",new no(n,2,3,!1))}this.geometry=zs,this.material=t,this.center=new Ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Gs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;wo(So.set(-.5,-.5,0),Gs,o,ks,i,r),wo(br.set(.5,-.5,0),Gs,o,ks,i,r),wo(bo.set(.5,.5,0),Gs,o,ks,i,r),kh.set(0,0),al.set(1,0),Gh.set(1,1);let a=t.ray.intersectTriangle(So,br,bo,!1,yr);if(a===null&&(wo(br.set(-.5,.5,0),Gs,o,ks,i,r),al.set(0,1),a=t.ray.intersectTriangle(So,bo,br,!1,yr),a===null))return;const l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:gi.getInterpolation(yr,So,br,bo,kh,al,Gh,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function wo(s,t,e,n,i,r){Hs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Sr.x=r*Hs.x-i*Hs.y,Sr.y=i*Hs.x+r*Hs.y):Sr.copy(Hs),s.copy(t),s.x+=Sr.x,s.y+=Sr.y,s.applyMatrix4(kd)}const Ji=new k,ll=new k,To=new k,Eo=new k;class hr{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ll.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Eo.copy(this.origin).sub(ll);const r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Eo.dot(this.direction),l=-Eo.dot(To),c=Eo.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ll).addScaledVector(To,f),u}intersectSphere(t,e){if(t.radius<0)return null;Ji.subVectors(t.center,this.origin);const n=Ji.dot(this.direction),i=Ji.dot(Ji)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,M=n.y-o.y,E=n.z-o.z,w=Math.abs(l),I=Math.abs(c),P=Math.abs(h);let v,b,F,U,X,st,j,N,it,at,Y,H;if(w>=I&&w>=P?(F=l,st=d,it=p,H=g,l>=0?(v=c,b=h,U=f,X=u,j=x,N=m,at=M,Y=E):(v=h,b=c,U=u,X=f,j=m,N=x,at=E,Y=M)):I>=P?(F=c,st=f,it=x,H=M,c>=0?(v=h,b=l,U=u,X=d,j=m,N=p,at=E,Y=g):(v=l,b=h,U=d,X=u,j=p,N=m,at=g,Y=E)):(F=h,st=u,it=m,H=E,h>=0?(v=l,b=c,U=d,X=f,j=p,N=x,at=g,Y=M):(v=c,b=l,U=f,X=d,j=x,N=p,at=M,Y=g)),F===0)return null;const nt=v/F,ht=b/F,wt=1/F,qt=U-nt*st,ue=X-ht*st,pt=j-nt*it,Yt=N-ht*it,se=at-nt*H,ge=Y-ht*H,Zt=se*Yt-ge*pt,pe=qt*ge-ue*se,Ze=pt*ue-Yt*qt;if(i){if(Zt<0||pe<0||Ze<0)return null}else if((Zt<0||pe<0||Ze<0)&&(Zt>0||pe>0||Ze>0))return null;const me=Zt+pe+Ze;if(me===0)return null;const ye=wt*(Zt*st+pe*it+Ze*H);return(me>0?ye<0:ye>0)?null:this.at(ye/me,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hh=new ze,Ms=new hr,Ao=new Hi,Vh=new k,Ro=new k,Co=new k,Po=new k,cl=new k,Lo=new k,Wh=new k,Do=new k;class He extends Mn{constructor(t=new mn,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(cl.fromBufferAttribute(d,t),o?Lo.addScaledVector(cl,h):Lo.addScaledVector(cl.sub(e),h))}e.add(Lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(Ao.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ao,Vh)===null||Ms.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,I=E;w<I;w+=3){const P=a.getX(w),v=a.getX(w+1),b=a.getX(w+2);i=Io(this,g,t,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);i=Io(this,o,t,n,c,h,d,M,E,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,I=E;w<I;w+=3){const P=w,v=w+1,b=w+2;i=Io(this,g,t,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=m,E=m+1,w=m+2;i=Io(this,o,t,n,c,h,d,M,E,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function c0(s,t,e,n,i,r,o,a){let l;if(t.side===Jn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===gs,a),l===null)return null;Do.copy(a),Do.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:s}}function Io(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ro),s.getVertexPosition(l,Co),s.getVertexPosition(c,Po);const h=c0(s,t,e,n,Ro,Co,Po,Wh);if(h){const d=new k;gi.getBarycoord(Wh,Ro,Co,Po,d),i&&(h.uv=gi.getInterpolatedAttribute(i,a,l,c,d,new Ut)),r&&(h.uv1=gi.getInterpolatedAttribute(r,a,l,c,d,new Ut)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};gi.getNormal(Ro,Co,Po,f.normal),h.face=f,h.barycoord=d}return h}const wr=new _n,Xh=new _n,Yh=new _n,h0=new _n,qh=new ze,No=new k,hl=new Hi,Kh=new ze,ul=new hr;class u0 extends He{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(i),t.ray.intersectsSphere(hl)!==!1&&(Kh.copy(i).invert(),ul.copy(t.ray).applyMatrix4(Kh),!(this.boundingBox!==null&&ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ul)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _n,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Xh.fromBufferAttribute(i.attributes.skinIndex,t),Yh.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(wr.copy(e),e.set(0,0,0,0)):(wr.set(e.x,e.y,e.z,1),e.set(0,0,0)),wr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Yh.getComponent(r);if(o!==0){const a=Xh.getComponent(r);qh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(h0.copy(wr).applyMatrix4(qh),o)}}return e.isVector4&&(e.w=wr.w),e.applyMatrix4(this.bindMatrixInverse)}}class Gd extends Mn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pa extends Fn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Nn,h=Nn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new ze,d0=new ze;class Jc{constructor(t=[],e=[]){this.uuid=Ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ze;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:d0;Zh.multiplyMatrices(a,e[r]),Zh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Pa(e,t,t,Ti,_i);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new Gd),this.bones.push(o),this.boneInverses.push(new ze().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ga extends Gn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vs=new ze,Jh=new ze,Uo=[],$h=new Gi,f0=new ze,Tr=new He,Er=new Hi;class io extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,f0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),$h.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union($h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Er.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vs),Jh.multiplyMatrices(n,Vs),Tr.matrixWorld=Jh,Tr.raycast(t,Uo);for(let o=0,a=Uo.length;o<a;o++){const l=Uo[o];l.instanceId=r,l.object=this,e.push(l)}Uo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pa(new Float32Array(i*this.count),i,this.count,Ra,_i));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ys=new Hi,p0=new Ut(.5,.5),Oo=new k;class so{constructor(t=new ji,e=new ji,n=new ji,i=new ji,r=new ji,o=new ji){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],E=r[13],w=r[14],I=r[15];if(i[0].setComponents(c-o,u-h,g-p,I-M).normalize(),i[1].setComponents(c+o,u+h,g+p,I+M).normalize(),i[2].setComponents(c+a,u+d,g+x,I+E).normalize(),i[3].setComponents(c-a,u-d,g-x,I-E).normalize(),n)i[4].setComponents(l,f,m,w).normalize(),i[5].setComponents(c-l,u-f,g-m,I-w).normalize();else if(i[4].setComponents(c-l,u-f,g-m,I-w).normalize(),e===Ei)i[5].setComponents(c+l,u+f,g+m,I+w).normalize();else if(e===to)i[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const e=p0.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Oo.x=i.normal.x>0?t.max.x:t.min.x,Oo.y=i.normal.y>0?t.max.y:t.min.y,Oo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Qh=new ze;class $c{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];Qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new so),n[i].setFromProjectionMatrix(Qh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new so),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new $c().copy(this)}}class Hd extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new k,xa=new k,jh=new ze,Ar=new hr,Fo=new Hi,dl=new k,tu=new k;class Qc extends Mn{constructor(t=new mn,e=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)_a.fromBufferAttribute(e,i-1),xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_a.distanceTo(xa);t.setAttribute("lineDistance",new Be(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;jh.copy(i).invert(),Ar.copy(t.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=h.getX(x),M=h.getX(x+1),E=Bo(this,t,Ar,l,g,M,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(u),g=Bo(this,t,Ar,l,x,m,p-1);g&&e.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=Bo(this,t,Ar,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=Bo(this,t,Ar,l,p-1,u,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(_a.fromBufferAttribute(a,i),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(_a,xa,dl,tu)>n)return;dl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(dl);if(!(c<t.near||c>t.far))return{distance:c,point:tu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const eu=new k,nu=new k;class m0 extends Qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)eu.fromBufferAttribute(e,i),nu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+eu.distanceTo(nu);t.setAttribute("lineDistance",new Be(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g0 extends Qc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Hr extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iu=new ze,pc=new hr,zo=new Hi,ko=new k;class Nr extends Mn{constructor(t=new mn,e=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;iu.copy(i).invert(),pc.copy(t.ray).applyMatrix4(iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){const m=c.getX(p);ko.fromBufferAttribute(d,m),su(ko,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)ko.fromBufferAttribute(d,p),su(ko,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function su(s,t,e,n,i,r,o){const a=pc.distanceSqToPoint(s);if(a<e){const l=new k;pc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Vd extends Fn{constructor(t=[],e=ir,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mc extends Fn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Fn{constructor(t,e,n=Ai,i,r,o,a=Nn,l=Nn,c,h=_s,d=1){if(h!==_s&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Wd extends Es{constructor(t,e=Ai,n=ir,i,r,o=Nn,a=Nn,l,c=_s){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xd extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pt extends mn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2));function p(x,m,g,M,E,w,I,P,v,b,F){const U=w/v,X=I/b,st=w/2,j=I/2,N=P/2,it=v+1,at=b+1;let Y=0,H=0;const nt=new k;for(let ht=0;ht<at;ht++){const wt=ht*X-j;for(let qt=0;qt<it;qt++){const ue=qt*U-st;nt[x]=ue*M,nt[m]=wt*E,nt[g]=N,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[g]=P>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(qt/v),d.push(1-ht/b),Y+=1}}for(let ht=0;ht<b;ht++)for(let wt=0;wt<v;wt++){const qt=f+wt+it*ht,ue=f+wt+it*(ht+1),pt=f+(wt+1)+it*(ht+1),Yt=f+(wt+1)+it*ht;l.push(qt,ue,Yt),l.push(ue,pt,Yt),H+=6}a.addGroup(u,H,F),u+=H,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class va extends mn{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=n*2+r,x=i+1,m=new k,g=new k;for(let M=0;M<=p;M++){let E=0,w=0,I=0,P=0;if(M<=n){const F=M/n,U=F*Math.PI/2;w=-h-t*Math.cos(U),I=t*Math.sin(U),P=-t*Math.cos(U),E=F*d}else if(M<=n+r){const F=(M-n)/r;w=-h+F*e,I=t,P=0,E=d+F*f}else{const F=(M-n-r)/n,U=F*Math.PI/2;w=h+t*Math.sin(U),I=t*Math.cos(U),P=t*Math.sin(U),E=d+f+F*d}const v=Math.max(0,Math.min(1,E/u));let b=0;M===0?b=.5/i:M===p&&(b=-.5/i);for(let F=0;F<=i;F++){const U=F/i,X=U*Math.PI*2,st=Math.sin(X),j=Math.cos(X);g.x=-I*j,g.y=w,g.z=I*st,a.push(g.x,g.y,g.z),m.set(-I*j,P,I*st),m.normalize(),l.push(m.x,m.y,m.z),c.push(U+b,v)}if(M>0){const F=(M-1)*x;for(let U=0;U<i;U++){const X=F+U,st=F+U+1,j=M*x+U,N=M*x+U+1;o.push(X,st,j),o.push(st,N,j)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class bi extends mn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new k,h=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends mn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(u,2));function M(){const w=new k,I=new k;let P=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const F=[],U=b/r,X=U*(e-t)+t;for(let st=0;st<=i;st++){const j=st/i,N=j*l+a,it=Math.sin(N),at=Math.cos(N);I.x=X*it,I.y=-U*n+m,I.z=X*at,d.push(I.x,I.y,I.z),w.set(it,v,at).normalize(),f.push(w.x,w.y,w.z),u.push(j,1-U),F.push(p++)}x.push(F)}for(let b=0;b<i;b++)for(let F=0;F<r;F++){const U=x[F][b],X=x[F+1][b],st=x[F+1][b+1],j=x[F][b+1];(t>0||F!==0)&&(h.push(U,X,j),P+=3),(e>0||F!==r-1)&&(h.push(X,st,j),P+=3)}c.addGroup(g,P,0),g+=P}function E(w){const I=p,P=new Ut,v=new k;let b=0;const F=w===!0?t:e,U=w===!0?1:-1;for(let st=1;st<=i;st++)d.push(0,m*U,0),f.push(0,U,0),u.push(.5,.5),p++;const X=p;for(let st=0;st<=i;st++){const N=st/i*l+a,it=Math.cos(N),at=Math.sin(N);v.x=F*at,v.y=m*U,v.z=F*it,d.push(v.x,v.y,v.z),f.push(0,U,0),P.x=it*.5+.5,P.y=at*.5*U+.5,u.push(P.x,P.y),p++}for(let st=0;st<i;st++){const j=I+st,N=X+st;w===!0?h.push(N,N+1,j):h.push(N+1,N,j),b+=3}c.addGroup(g,b,w===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends ie{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class La extends mn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new k,w=new k,I=new k;for(let P=0;P<e.length;P+=3)u(e[P+0],E),u(e[P+1],w),u(e[P+2],I),l(E,w,I,M)}function l(M,E,w,I){const P=I+1,v=[];for(let b=0;b<=P;b++){v[b]=[];const F=M.clone().lerp(w,b/P),U=E.clone().lerp(w,b/P),X=P-b;for(let st=0;st<=X;st++)st===0&&b===P?v[b][st]=F:v[b][st]=F.clone().lerp(U,st/X)}for(let b=0;b<P;b++)for(let F=0;F<2*(P-b)-1;F++){const U=Math.floor(F/2);F%2===0?(f(v[b][U+1]),f(v[b+1][U]),f(v[b][U])):(f(v[b][U+1]),f(v[b+1][U+1]),f(v[b+1][U]))}}function c(M){const E=new k;for(let w=0;w<r.length;w+=3)E.x=r[w+0],E.y=r[w+1],E.z=r[w+2],E.normalize().multiplyScalar(M),r[w+0]=E.x,r[w+1]=E.y,r[w+2]=E.z}function h(){const M=new k;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const w=m(M)/2/Math.PI+.5,I=g(M)/Math.PI+.5;o.push(w,1-I)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){const E=o[M+0],w=o[M+2],I=o[M+4],P=Math.max(E,w,I),v=Math.min(E,w,I);P>.9&&v<.1&&(E<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,E){const w=M*3;E.x=t[w+0],E.y=t[w+1],E.z=t[w+2]}function p(){const M=new k,E=new k,w=new k,I=new k,P=new Ut,v=new Ut,b=new Ut;for(let F=0,U=0;F<r.length;F+=9,U+=6){M.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),w.set(r[F+6],r[F+7],r[F+8]),P.set(o[U+0],o[U+1]),v.set(o[U+2],o[U+3]),b.set(o[U+4],o[U+5]),I.copy(M).add(E).add(w).divideScalar(3);const X=m(I);x(P,U+0,M,X),x(v,U+2,E,X),x(b,U+4,w,X)}}function x(M,E,w,I){I<0&&M.x===1&&(o[E]=M.x-1),w.x===0&&w.z===0&&(o[E]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.vertices,t.indices,t.radius,t.detail)}}class Oi extends La{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oi(t.radius,t.detail)}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Ut:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new k,i=[],r=[],o=[],a=new k,l=new ze;for(let u=0;u<=t;u++){const p=u/t;i[u]=this.getTangentAt(p,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(je(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(je(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class jc extends Vi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ut){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _0 extends jc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function th(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ru=new k,ou=new k,fl=new th,pl=new th,ml=new th;class x0 extends Vi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ou.subVectors(i[0],i[1]).add(i[0]),c=ou);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ru.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ru),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),fl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),pl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),ml.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),pl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ml.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(fl.calc(l),pl.calc(l),ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function au(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function v0(s,t){const e=1-s;return e*e*t}function M0(s,t){return 2*(1-s)*s*t}function y0(s,t){return s*s*t}function Vr(s,t,e,n){return v0(s,t)+M0(s,e)+y0(s,n)}function S0(s,t){const e=1-s;return e*e*e*t}function b0(s,t){const e=1-s;return 3*e*e*s*t}function w0(s,t){return 3*(1-s)*s*s*t}function T0(s,t){return s*s*s*t}function Wr(s,t,e,n,i){return S0(s,t)+b0(s,e)+w0(s,n)+T0(s,i)}class Yd extends Vi{constructor(t=new Ut,e=new Ut,n=new Ut,i=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ut){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,r.x,o.x,a.x),Wr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E0 extends Vi{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,r.x,o.x,a.x),Wr(t,i.y,r.y,o.y,a.y),Wr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qd extends Vi{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A0 extends Vi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends Vi{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,i.x,r.x,o.x),Vr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends Vi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,i.x,r.x,o.x),Vr(t,i.y,r.y,o.y),Vr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zd extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(au(a,l.x,c.x,h.x,d.x),au(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ut().fromArray(i))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:_0,CatmullRomCurve3:x0,CubicBezierCurve:Yd,CubicBezierCurve3:E0,EllipseCurve:jc,LineCurve:qd,LineCurve3:A0,QuadraticBezierCurve:Kd,QuadraticBezierCurve3:R0,SplineCurve:Zd});class C0 extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new gc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class lu extends C0{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qd(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Kd(this.currentPoint.clone(),new Ut(t,e),new Ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Yd(this.currentPoint.clone(),new Ut(t,e),new Ut(n,i),new Ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new jc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends lu{constructor(t){super(t),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new lu().fromJSON(i))}return this}}function P0(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Jd(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=U0(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){const u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return oo(r,o,e,a,l,c,0),o}function Jd(s,t,e,n,i){let r;if(i===Y0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=cu(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=cu(o/n|0,s[o],s[o+1],r);return r&&or(r,r.next)&&(lo(r),r=r.next),r}function As(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(or(e,e.next)||wn(e.prev,e,e.next)===0)){if(lo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function oo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&k0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?D0(s,n,i,r):L0(s)){t.push(l.i,s.i,c.i),lo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=I0(As(s),t),oo(s,t,e,n,i,r,2)):o===2&&N0(s,t,e,n,i,r):oo(As(s),t,e,n,i,r,1);break}}}function L0(s){const t=s.prev,e=s,n=s.next;if(wn(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Ur(i,a,r,l,o,c,p.x,p.y)&&wn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function D0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(wn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=_c(u,p,t,e,n),M=_c(x,m,t,e,n);let E=s.prevZ,w=s.nextZ;for(;E&&E.z>=g&&w&&w.z<=M;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Ur(a,h,l,d,c,f,E.x,E.y)&&wn(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Ur(a,h,l,d,c,f,w.x,w.y)&&wn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=g;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Ur(a,h,l,d,c,f,E.x,E.y)&&wn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=M;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Ur(a,h,l,d,c,f,w.x,w.y)&&wn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function I0(s,t){let e=s;do{const n=e.prev,i=e.next.next;!or(n,i)&&Qd(n,e,e.next,i)&&ao(n,i)&&ao(i,n)&&(t.push(n.i,e.i,i.i),lo(e),lo(e.next),e=s=i),e=e.next}while(e!==s);return As(e)}function N0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V0(o,a)){let l=jd(o,a);o=As(o,o.next),l=As(l,l.next),oo(o,t,e,n,i,r,0),oo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function U0(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Jd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(H0(c))}i.sort(O0);for(let r=0;r<i.length;r++)e=F0(i[r],e);return e}function O0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function F0(s,t){const e=B0(s,t);if(!e)return t;const n=jd(e,s);return As(n,n.next),As(e,e.next)}function B0(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(or(s,e))return e;do{if(or(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$d(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);ao(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&z0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function z0(s,t){return wn(s.prev,s,t.prev)<0&&wn(t.next,s,s.next)<0}function k0(s,t,e,n){let i=s;do i.z===0&&(i.z=_c(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,G0(i)}function G0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function _c(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function H0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function $d(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ur(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&$d(s,t,e,n,i,r,o,a)}function V0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!W0(s,t)&&(ao(s,t)&&ao(t,s)&&X0(s,t)&&(wn(s.prev,s,t.prev)||wn(s,t.prev,t))||or(s,t)&&wn(s.prev,s,s.next)>0&&wn(t.prev,t,t.next)>0)}function wn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function or(s,t){return s.x===t.x&&s.y===t.y}function Qd(s,t,e,n){const i=Ho(wn(s,t,e)),r=Ho(wn(s,t,n)),o=Ho(wn(e,n,s)),a=Ho(wn(e,n,t));return!!(i!==r&&o!==a||i===0&&Go(s,e,t)||r===0&&Go(s,n,t)||o===0&&Go(e,s,n)||a===0&&Go(e,t,n))}function Go(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ho(s){return s>0?1:s<0?-1:0}function W0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ao(s,t){return wn(s.prev,s,s.next)<0?wn(s,t,s.next)>=0&&wn(s,s.prev,t)>=0:wn(s,t,s.prev)<0||wn(s,s.next,t)<0}function X0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function jd(s,t){const e=xc(s.i,s.x,s.y),n=xc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cu(s,t,e,n){const i=xc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class q0{static triangulate(t,e,n=2){return P0(t,e,n)}}class es{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return es.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];hu(t),uu(n,t);let o=t.length;e.forEach(hu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,uu(n,e[l]);const a=q0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function uu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ma extends mn{constructor(t=new ro([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Be(i,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:K0;let E,w=!1,I,P,v,b;if(g){E=g.getSpacedPoints(h),w=!0,f=!1;const Rt=g.isCatmullRomCurve3?g.closed:!1;I=g.computeFrenetFrames(h,Rt),P=new k,v=new k,b=new k}f||(m=0,u=0,p=0,x=0);const F=a.extractPoints(c);let U=F.shape;const X=F.holes;if(!es.isClockWise(U)){U=U.reverse();for(let Rt=0,Wt=X.length;Rt<Wt;Rt++){const te=X[Rt];es.isClockWise(te)&&(X[Rt]=te.reverse())}}function j(Rt){const te=10000000000000001e-36;let oe=Rt[0];for(let ee=1;ee<=Rt.length;ee++){const ae=ee%Rt.length,de=Rt[ae],Mt=de.x-oe.x,zt=de.y-oe.y,Ot=Mt*Mt+zt*zt,L=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(oe.x),Math.abs(oe.y)),Qt=te*L*L;if(Ot<=Qt){Rt.splice(ae,1),ee--;continue}oe=de}}j(U),X.forEach(j);const N=X.length,it=U;for(let Rt=0;Rt<N;Rt++){const Wt=X[Rt];U=U.concat(Wt)}function at(Rt,Wt,te){return Wt||ke("ExtrudeGeometry: vec does not exist"),Rt.clone().addScaledVector(Wt,te)}const Y=U.length;function H(Rt,Wt,te){let oe,ee,ae;const de=Rt.x-Wt.x,Mt=Rt.y-Wt.y,zt=te.x-Rt.x,Ot=te.y-Rt.y,L=de*de+Mt*Mt,Qt=de*Ot-Mt*zt;if(Math.abs(Qt)>Number.EPSILON){const Jt=Math.sqrt(L),Xt=Math.sqrt(zt*zt+Ot*Ot),Ct=Wt.x-Mt/Jt,jt=Wt.y+de/Jt,bt=te.x-Ot/Xt,lt=te.y+zt/Xt,C=((bt-Ct)*Ot-(lt-jt)*zt)/(de*Ot-Mt*zt);oe=Ct+de*C-Rt.x,ee=jt+Mt*C-Rt.y;const S=oe*oe+ee*ee;if(S<=2)return new Ut(oe,ee);ae=Math.sqrt(S/2)}else{let Jt=!1;de>Number.EPSILON?zt>Number.EPSILON&&(Jt=!0):de<-Number.EPSILON?zt<-Number.EPSILON&&(Jt=!0):Math.sign(Mt)===Math.sign(Ot)&&(Jt=!0),Jt?(oe=-Mt,ee=de,ae=Math.sqrt(L)):(oe=de,ee=Mt,ae=Math.sqrt(L/2))}return new Ut(oe/ae,ee/ae)}const nt=[];for(let Rt=0,Wt=it.length,te=Wt-1,oe=Rt+1;Rt<Wt;Rt++,te++,oe++)te===Wt&&(te=0),oe===Wt&&(oe=0),nt[Rt]=H(it[Rt],it[te],it[oe]);const ht=[];let wt,qt=nt.concat();for(let Rt=0,Wt=N;Rt<Wt;Rt++){const te=X[Rt];wt=[];for(let oe=0,ee=te.length,ae=ee-1,de=oe+1;oe<ee;oe++,ae++,de++)ae===ee&&(ae=0),de===ee&&(de=0),wt[oe]=H(te[oe],te[ae],te[de]);ht.push(wt),qt=qt.concat(wt)}let ue;if(m===0)ue=es.triangulateShape(it,X);else{const Rt=[],Wt=[];for(let te=0;te<m;te++){const oe=te/m,ee=u*Math.cos(oe*Math.PI/2),ae=p*Math.sin(oe*Math.PI/2)+x;for(let de=0,Mt=it.length;de<Mt;de++){const zt=at(it[de],nt[de],ae);pe(zt.x,zt.y,-ee),oe===0&&Rt.push(zt)}for(let de=0,Mt=N;de<Mt;de++){const zt=X[de];wt=ht[de];const Ot=[];for(let L=0,Qt=zt.length;L<Qt;L++){const Jt=at(zt[L],wt[L],ae);pe(Jt.x,Jt.y,-ee),oe===0&&Ot.push(Jt)}oe===0&&Wt.push(Ot)}}ue=es.triangulateShape(Rt,Wt)}const pt=ue.length,Yt=p+x;for(let Rt=0;Rt<Y;Rt++){const Wt=f?at(U[Rt],qt[Rt],Yt):U[Rt];w?(v.copy(I.normals[0]).multiplyScalar(Wt.x),P.copy(I.binormals[0]).multiplyScalar(Wt.y),b.copy(E[0]).add(v).add(P),pe(b.x,b.y,b.z)):pe(Wt.x,Wt.y,0)}for(let Rt=1;Rt<=h;Rt++)for(let Wt=0;Wt<Y;Wt++){const te=f?at(U[Wt],qt[Wt],Yt):U[Wt];w?(v.copy(I.normals[Rt]).multiplyScalar(te.x),P.copy(I.binormals[Rt]).multiplyScalar(te.y),b.copy(E[Rt]).add(v).add(P),pe(b.x,b.y,b.z)):pe(te.x,te.y,d/h*Rt)}for(let Rt=m-1;Rt>=0;Rt--){const Wt=Rt/m,te=u*Math.cos(Wt*Math.PI/2),oe=p*Math.sin(Wt*Math.PI/2)+x;for(let ee=0,ae=it.length;ee<ae;ee++){const de=at(it[ee],nt[ee],oe);pe(de.x,de.y,d+te)}for(let ee=0,ae=X.length;ee<ae;ee++){const de=X[ee];wt=ht[ee];for(let Mt=0,zt=de.length;Mt<zt;Mt++){const Ot=at(de[Mt],wt[Mt],oe);w?pe(Ot.x,Ot.y+E[h-1].y,E[h-1].x+te):pe(Ot.x,Ot.y,d+te)}}}se(),ge();function se(){const Rt=i.length/3;if(f){let Wt=0,te=Y*Wt;for(let oe=0;oe<pt;oe++){const ee=ue[oe];Ze(ee[2]+te,ee[1]+te,ee[0]+te)}Wt=h+m*2,te=Y*Wt;for(let oe=0;oe<pt;oe++){const ee=ue[oe];Ze(ee[0]+te,ee[1]+te,ee[2]+te)}}else{for(let Wt=0;Wt<pt;Wt++){const te=ue[Wt];Ze(te[2],te[1],te[0])}for(let Wt=0;Wt<pt;Wt++){const te=ue[Wt];Ze(te[0]+Y*h,te[1]+Y*h,te[2]+Y*h)}}n.addGroup(Rt,i.length/3-Rt,0)}function ge(){const Rt=i.length/3;let Wt=0;Zt(it,Wt),Wt+=it.length;for(let te=0,oe=X.length;te<oe;te++){const ee=X[te];Zt(ee,Wt),Wt+=ee.length}n.addGroup(Rt,i.length/3-Rt,1)}function Zt(Rt,Wt){let te=Rt.length;for(;--te>=0;){const oe=te;let ee=te-1;ee<0&&(ee=Rt.length-1);for(let ae=0,de=h+m*2;ae<de;ae++){const Mt=Y*ae,zt=Y*(ae+1),Ot=Wt+oe+Mt,L=Wt+ee+Mt,Qt=Wt+ee+zt,Jt=Wt+oe+zt;me(Ot,L,Qt,Jt)}}}function pe(Rt,Wt,te){l.push(Rt),l.push(Wt),l.push(te)}function Ze(Rt,Wt,te){ye(Rt),ye(Wt),ye(te);const oe=i.length/3,ee=M.generateTopUV(n,i,oe-3,oe-2,oe-1);Ee(ee[0]),Ee(ee[1]),Ee(ee[2])}function me(Rt,Wt,te,oe){ye(Rt),ye(Wt),ye(oe),ye(Wt),ye(te),ye(oe);const ee=i.length/3,ae=M.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Ee(ae[0]),Ee(ae[1]),Ee(ae[3]),Ee(ae[1]),Ee(ae[2]),Ee(ae[3])}function ye(Rt){i.push(l[Rt*3+0]),i.push(l[Rt*3+1]),i.push(l[Rt*3+2])}function Ee(Rt){r.push(Rt.x),r.push(Rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Z0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new gc[i.type]().fromJSON(i)),new Ma(n,t.options)}}const K0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Ut(r,o),new Ut(a,l),new Ut(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ut(o,1-l),new Ut(c,1-d),new Ut(f,1-p),new Ut(x,1-g)]:[new Ut(a,1-l),new Ut(h,1-d),new Ut(u,1-p),new Ut(m,1-g)]}};function Z0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class eh extends mn{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=je(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new k,f=new Ut,u=new k,p=new k,x=new k;let m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let M=0;M<=e;M++){const E=n+M*h*i,w=Math.sin(E),I=Math.cos(E);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*w,d.y=t[P].y,d.z=t[P].x*I,o.push(d.x,d.y,d.z),f.x=M/e,f.y=P/(t.length-1),a.push(f.x,f.y);const v=l[3*P+0]*w,b=l[3*P+1],F=l[3*P+0]*I;c.push(v,b,F)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){const w=E+M*t.length,I=w,P=w+t.length,v=w+t.length+1,b=w+1;r.push(I,P,b),r.push(v,b,P)}this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.points,t.segments,t.phiStart,t.phiLength)}}class nh extends La{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nh(t.radius,t.detail)}}class ln extends mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*f-o;for(let E=0;E<c;E++){const w=E*d-r;p.push(w,-M,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const E=M+c*g,w=M+c*(g+1),I=M+1+c*(g+1),P=M+1+c*g;u.push(E,w,P),u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class ih extends mn{constructor(t=new ro([new Ut(0,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Be(i,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(o,2));function c(h){const d=i.length/3,f=h.extractPoints(e);let u=f.shape;const p=f.holes;es.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];es.isClockWise(M)===!0&&(p[m]=M.reverse())}const x=es.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];u=u.concat(M)}for(let m=0,g=u.length;m<g;m++){const M=u[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=x.length;m<g;m++){const M=x[m],E=M[0]+d,w=M[1]+d,I=M[2]+d;n.push(E,w,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return J0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new ih(n,t.curveSegments)}}function J0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class an extends mn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],E=g/n,w=o+E*a,I=t*Math.cos(w),P=Math.sqrt(t*t-I*I);let v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const F=b/e,U=i+F*r;d.x=-P*Math.cos(U),d.y=I,d.z=P*Math.sin(U),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(F+v,1-E),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const E=h[g][M+1],w=h[g][M],I=h[g+1][M],P=h[g+1][M+1];(g!==0||o>0)&&u.push(E,w,P),(g!==n-1||l<Math.PI)&&u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cn extends mn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new k,u=new k,p=new k;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const M=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,M=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,w=(i+1)*x+m;l.push(g,M,w),l.push(M,E,w)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ar(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(du(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(du(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ei(s){const t={};for(let e=0;e<s.length;e++){const n=ar(s[e]);for(const i in n)t[i]=n[i]}return t}function du(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function $0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rn.workingColorSpace}const co={clone:ar,merge:ei};var Q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _n().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ef extends si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lr extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ci extends lr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return tr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){tr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ia extends ui{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class tm extends ui{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class em extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nm extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ps(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Or(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function im(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function fu(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function sm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class ur{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class rm extends ur{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Js,endingEnd:Js}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $s:r=t,a=2*e-n;break;case da:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $s:o=t,l=2*n-e;break;case da:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,E=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+M*o[c+I]+E*o[l+I]+w*o[d+I];return r}}class nf extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class om extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class am extends ur{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}const f=a*2,u=t-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=u*f+p*2,M=d[g],E=d[g+1],w=t*f+p*2,I=h[w],P=h[w+1],v=cm(n,e,M,I,i);r[p]=sf(v,x,E,P,m)}return r}}function sf(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function lm(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function cm(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=sf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=lm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Pi{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Or(t.settings)&&(n.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new om(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new am(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Qr:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break;case wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Or(this.settings)&&(pu(this.settings.inTangents,t),pu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Or(this.settings)&&(mu(this.settings.inTangents,t),mu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ke("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&wp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ga,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[f+p]||x!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Or(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function pu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function mu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Pi.prototype.ValueTypeName="";Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Qr;class dr extends Pi{constructor(t,e,n){super(t,e,n)}}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=$r;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class rf extends Pi{constructor(t,e,n,i){super(t,e,n,i)}}rf.prototype.ValueTypeName="color";class ho extends Pi{constructor(t,e,n,i){super(t,e,n,i)}}ho.prototype.ValueTypeName="number";class hm extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class uo extends Pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new hm(this.times,this.values,this.getValueSize(),t)}}uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Pi{constructor(t,e,n){super(t,e,n)}}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=$r;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class ya extends Pi{constructor(t,e,n,i){super(t,e,n,i)}}ya.prototype.ValueTypeName="vector";class vc{constructor(t="",e=-1,n=[],i=Vc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(dm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Pi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=im(l);l=fu(l,1,h),c=fu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ho(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function um(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ho;case"vector":case"vector2":case"vector3":case"vector4":return ya;case"color":return rf;case"quaternion":return uo;case"bool":case"boolean":return dr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function dm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=um(s.type);if(s.times===void 0){const n=[],i=[];sm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Or(s.settings)&&(e.settings={inTangents:ps(s.settings.inTangents,Float32Array),outTangents:ps(s.settings.outTangents,Float32Array)}),e}const ns={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(gu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!gu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function gu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class of{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fm=new of;class pr{constructor(t){this.manager=t!==void 0?t:fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class pm extends Error{constructor(t,e){super(t),this.response=e}}class af extends pr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ns.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if($i[t]!==void 0){$i[t].push({onLoad:e,onProgress:n,onError:i});return}$i[t]=[],$i[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$i[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let x=0;const m=new ReadableStream({start(g){M();function M(){d.read().then(({done:E,value:w})=>{if(E)g.close();else{x+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let P=0,v=h.length;P<v;P++){const b=h[P];b.onProgress&&b.onProgress(I)}g.enqueue(w),M()}},E=>{g.error(E)})}}});return new Response(m)}else throw new pm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{ns.add(`file:${t}`,c);const h=$i[t];delete $i[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=$i[t];if(h===void 0)throw this.manager.itemError(t),c;delete $i[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ws=new WeakMap;class mm extends pr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ns.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Ws.get(o);d===void 0&&(d=[],Ws.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=eo("img");function l(){h(),e&&e(this);const d=Ws.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Ws.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),ns.remove(`image:${t}`);const f=Ws.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Ws.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ns.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class gm extends pr{constructor(t){super(t)}load(t,e,n,i){const r=new Fn,o=new mm(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Da extends Mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class _m extends Da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const gl=new ze,_u=new k,xu=new k;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===to||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vo=new k,Wo=new bn,Li=new k;class lf extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Wo,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,Li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vo,Wo,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new k,vu=new Ut,Mu=new Ut;class oi extends lf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,vu,Mu),e.subVectors(Mu,vu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class xm extends sh{constructor(){super(new oi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=rr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class vm extends Da{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Mm extends sh{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class is extends Da{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ia extends lf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ym extends sh{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cf extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new ym}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Xr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const _l=new WeakMap;class Sm extends pr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ns.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{_l.has(o)===!0?(i&&i(_l.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ns.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),_l.set(l,c),ns.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ns.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xs=-90,Ys=1;class Mc extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new oi(Xs,Ys,t,e);i.layers=this.layers,this.add(i);const r=new oi(Xs,Ys,t,e);r.layers=this.layers,this.add(r);const o=new oi(Xs,Ys,t,e);o.layers=this.layers,this.add(o);const a=new oi(Xs,Ys,t,e);a.layers=this.layers,this.add(a);const l=new oi(Xs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new oi(Xs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class bm extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class wm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Tm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Tm(){this._document.hidden===!1&&this.reset()}class Em{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){bn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;bn.multiplyQuaternionsFlat(t,o,t,e,t,n),bn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const rh="\\[\\]\\.:\\/",Am=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",Rm="[^"+rh.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",oh),Pm=/(WCOD+)?/.source.replace("WCOD",Rm),Lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Im=new RegExp("^"+Cm+Pm+Lm+Dm+"$"),Nm=["material","materials","bones","map"];class Um{constructor(t,e,n){const i=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pn{constructor(t,e,n){this.path=e,this.parsedPath=n||pn.parseTrackName(e),this.node=pn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pn.Composite(t,e,n):new pn(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Am,"")}static parseTrackName(t){const e=Im.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Nm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=pn.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pn.Composite=Um;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Om{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:Js,endingEnd:Js};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=up,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fp:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Vc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===dp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===hp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=$s,i.endingEnd=$s):(t?i.endingStart=this.zeroSlopeAtStart?$s:Js:i.endingStart=da,e?i.endingEnd=this.zeroSlopeAtEnd?$s:Js:i.endingEnd=da)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const Fm=new Float32Array(1);class Bm extends as{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new Em(pn.create(n,u,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new nf(new Float32Array(2),new Float32Array(2),1,Fm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?vc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Vc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Om(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?vc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const yu=new ze;class hf{constructor(t,e,n=0,i=1/0){this.ray=new hr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ke("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(t,e=!0,n=[]){return yc(t,this,n,e),n.sort(Su),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)yc(t[i],this,n,e);return n.sort(Su),n}}function Su(s,t){return s.distance-t.distance}function yc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)yc(r[o],t,e,!0)}}class bu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zm extends as{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wu(s,t,e,n){const i=km(n);switch(e){case Ed:return s*t;case Ra:return s*t/i.components*i.byteLength;case kc:return s*t/i.components*i.byteLength;case Ts:return s*t*2/i.components*i.byteLength;case Gc:return s*t*2/i.components*i.byteLength;case Ad:return s*t*3/i.components*i.byteLength;case Ti:return s*t*4/i.components*i.byteLength;case Hc:return s*t*4/i.components*i.byteLength;case jo:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bl:case kl:return Math.max(s,16)*Math.max(t,8)/4;case Fl:case zl:return Math.max(s,8)*Math.max(t,8)/2;case Gl:case Hl:case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vl:case ha:case Yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ac:case lc:case cc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hc:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ua:case dc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(s){switch(s){case hi:case Sd:return{byteLength:1,components:1};case Jr:case bd:case $n:return{byteLength:2,components:1};case Bc:case zc:return{byteLength:2,components:4};case Ai:case Fc:case _i:return{byteLength:4,components:1};case wd:case Td:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);function uf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gm(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eg=`#ifdef USE_IRIDESCENCE
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
#endif`,ng=`#ifdef USE_BUMPMAP
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ug=`#define PI 3.141592653589793
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
} // validated`,dg=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rg=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
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
#endif`,zg=`uniform sampler2D dfgLUT;
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
}`,kg=`
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$g=`#if defined( USE_POINTS_UV )
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
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
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
#endif`,n_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
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
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E_=`float getShadowMask() {
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
}`,A_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,O_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform float backgroundBlurriness;
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,K_=`#if DEPTH_PACKING == 3200
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
}`,Z_=`#define DISTANCE
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
}`,J_=`#define DISTANCE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#define LAMBERT
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,ax=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,cx=`#define PHONG
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
}`,hx=`#define PHONG
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
}`,ux=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,fx=`#define TOON
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
}`,px=`#define TOON
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
}`,mx=`uniform float size;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,en={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:Ym,alphatest_pars_fragment:qm,aomap_fragment:Km,aomap_pars_fragment:Zm,batching_pars_vertex:Jm,batching_vertex:$m,begin_vertex:Qm,beginnormal_vertex:jm,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:hg,common:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:fg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:_g,colorspace_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:yg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Ig,envmap_vertex:bg,fog_vertex:wg,fog_pars_vertex:Tg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Rg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Dg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Ug,lights_phong_fragment:Og,lights_phong_pars_fragment:Fg,lights_physical_fragment:Bg,lights_physical_pars_fragment:zg,lights_fragment_begin:kg,lights_fragment_maps:Gg,lights_fragment_end:Hg,lightprobes_pars_fragment:Vg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:qg,map_fragment:Kg,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:$g,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:jg,morphinstance_vertex:t_,morphcolor_vertex:e_,morphnormal_vertex:n_,morphtarget_pars_vertex:i_,morphtarget_vertex:s_,normal_fragment_begin:r_,normal_fragment_maps:o_,normal_pars_fragment:a_,normal_pars_vertex:l_,normal_vertex:c_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:p_,opaque_fragment:m_,packing:g_,premultiplied_alpha_fragment:__,project_vertex:x_,dithering_fragment:v_,dithering_pars_fragment:M_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:w_,shadowmap_vertex:T_,shadowmask_pars_fragment:E_,skinbase_vertex:A_,skinning_pars_vertex:R_,skinning_vertex:C_,skinnormal_vertex:P_,specularmap_fragment:L_,specularmap_pars_fragment:D_,tonemapping_fragment:I_,tonemapping_pars_fragment:N_,transmission_fragment:U_,transmission_pars_fragment:O_,uv_pars_fragment:F_,uv_pars_vertex:B_,uv_vertex:z_,worldpos_vertex:k_,background_vert:G_,background_frag:H_,backgroundCube_vert:V_,backgroundCube_frag:W_,cube_vert:X_,cube_frag:Y_,depth_vert:q_,depth_frag:K_,distance_vert:Z_,distance_frag:J_,equirect_vert:$_,equirect_frag:Q_,linedashed_vert:j_,linedashed_frag:tx,meshbasic_vert:ex,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:sx,meshmatcap_vert:rx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:hx,meshphysical_vert:ux,meshphysical_frag:dx,meshtoon_vert:fx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:_x,shadow_frag:xx,sprite_vert:vx,sprite_frag:Mx},ve={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ni={basic:{uniforms:ei([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:en.meshbasic_vert,fragmentShader:en.meshbasic_frag},lambert:{uniforms:ei([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:en.meshlambert_vert,fragmentShader:en.meshlambert_frag},phong:{uniforms:ei([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:en.meshphong_vert,fragmentShader:en.meshphong_frag},standard:{uniforms:ei([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag},toon:{uniforms:ei([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:en.meshtoon_vert,fragmentShader:en.meshtoon_frag},matcap:{uniforms:ei([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:en.meshmatcap_vert,fragmentShader:en.meshmatcap_frag},points:{uniforms:ei([ve.points,ve.fog]),vertexShader:en.points_vert,fragmentShader:en.points_frag},dashed:{uniforms:ei([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:en.linedashed_vert,fragmentShader:en.linedashed_frag},depth:{uniforms:ei([ve.common,ve.displacementmap]),vertexShader:en.depth_vert,fragmentShader:en.depth_frag},normal:{uniforms:ei([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:en.meshnormal_vert,fragmentShader:en.meshnormal_frag},sprite:{uniforms:ei([ve.sprite,ve.fog]),vertexShader:en.sprite_vert,fragmentShader:en.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:en.background_vert,fragmentShader:en.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:en.backgroundCube_vert,fragmentShader:en.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:en.cube_vert,fragmentShader:en.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:en.equirect_vert,fragmentShader:en.equirect_frag},distance:{uniforms:ei([ve.common,ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:en.distance_vert,fragmentShader:en.distance_frag},shadow:{uniforms:ei([ve.lights,ve.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:en.shadow_vert,fragmentShader:en.shadow_frag}};Ni.physical={uniforms:ei([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag};const Xo={r:0,b:0,g:0},yx=new ze,df=new Ke;df.set(-1,0,0,0,1,0,0,0,1);function Sx(s,t,e,n,i,r){const o=new Te(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const w=M.backgroundBlurriness>0;E=t.get(E,w)}return E}function p(M){let E=!1;const w=u(M);w===null?m(o,a):w&&w.isColor&&(m(w,1),E=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,E){const w=u(E);w&&w.isCubeTexture?(c===void 0&&(c=new He(new Pt(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:ar(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(df),c.material.toneMapped=rn.getTransfer(w.colorSpace)!==fn,(h!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new He(new ln(2,2),new si({name:"BackgroundMaterial",uniforms:ar(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=rn.getTransfer(w.colorSpace)!==fn,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Xo,tf(s)),e.buffers.color.setClear(Xo.r,Xo.g,Xo.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:x,dispose:g}}function bx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(X,st,j,N,it){let at=!1;const Y=d(X,N,j,st);r!==Y&&(r=Y,c(r.object)),at=u(X,N,j,it),at&&p(X,N,j,it),it!==null&&t.update(it,s.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,w(X,st,j,N),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return s.createVertexArray()}function c(X){return s.bindVertexArray(X)}function h(X){return s.deleteVertexArray(X)}function d(X,st,j,N){const it=N.wireframe===!0;let at=n[st.id];at===void 0&&(at={},n[st.id]=at);const Y=X.isInstancedMesh===!0?X.id:0;let H=at[Y];H===void 0&&(H={},at[Y]=H);let nt=H[j.id];nt===void 0&&(nt={},H[j.id]=nt);let ht=nt[it];return ht===void 0&&(ht=f(l()),nt[it]=ht),ht}function f(X){const st=[],j=[],N=[];for(let it=0;it<e;it++)st[it]=0,j[it]=0,N[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:j,attributeDivisors:N,object:X,attributes:{},index:null}}function u(X,st,j,N){const it=r.attributes,at=st.attributes;let Y=0;const H=j.getAttributes();for(const nt in H)if(H[nt].location>=0){const wt=it[nt];let qt=at[nt];if(qt===void 0&&(nt==="instanceMatrix"&&X.instanceMatrix&&(qt=X.instanceMatrix),nt==="instanceColor"&&X.instanceColor&&(qt=X.instanceColor)),wt===void 0||wt.attribute!==qt||qt&&wt.data!==qt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function p(X,st,j,N){const it={},at=st.attributes;let Y=0;const H=j.getAttributes();for(const nt in H)if(H[nt].location>=0){let wt=at[nt];wt===void 0&&(nt==="instanceMatrix"&&X.instanceMatrix&&(wt=X.instanceMatrix),nt==="instanceColor"&&X.instanceColor&&(wt=X.instanceColor));const qt={};qt.attribute=wt,wt&&wt.data&&(qt.data=wt.data),it[nt]=qt,Y++}r.attributes=it,r.attributesNum=Y,r.index=N}function x(){const X=r.newAttributes;for(let st=0,j=X.length;st<j;st++)X[st]=0}function m(X){g(X,0)}function g(X,st){const j=r.newAttributes,N=r.enabledAttributes,it=r.attributeDivisors;j[X]=1,N[X]===0&&(s.enableVertexAttribArray(X),N[X]=1),it[X]!==st&&(s.vertexAttribDivisor(X,st),it[X]=st)}function M(){const X=r.newAttributes,st=r.enabledAttributes;for(let j=0,N=st.length;j<N;j++)st[j]!==X[j]&&(s.disableVertexAttribArray(j),st[j]=0)}function E(X,st,j,N,it,at,Y){Y===!0?s.vertexAttribIPointer(X,st,j,it,at):s.vertexAttribPointer(X,st,j,N,it,at)}function w(X,st,j,N){x();const it=N.attributes,at=j.getAttributes(),Y=st.defaultAttributeValues;for(const H in at){const nt=at[H];if(nt.location>=0){let ht=it[H];if(ht===void 0&&(H==="instanceMatrix"&&X.instanceMatrix&&(ht=X.instanceMatrix),H==="instanceColor"&&X.instanceColor&&(ht=X.instanceColor)),ht!==void 0){const wt=ht.normalized,qt=ht.itemSize,ue=t.get(ht);if(ue===void 0)continue;const pt=ue.buffer,Yt=ue.type,se=ue.bytesPerElement,ge=Yt===s.INT||Yt===s.UNSIGNED_INT||ht.gpuType===Fc;if(ht.isInterleavedBufferAttribute){const Zt=ht.data,pe=Zt.isInterleavedBuffer===!0?Zt.stride:Zt.itemSize,Ze=ht.offset;if(Zt.isInstancedInterleavedBuffer||Zt.isInstancedBufferAttribute){for(let me=0;me<nt.locationSize;me++)g(nt.location+me,Zt.meshPerAttribute);X.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let me=0;me<nt.locationSize;me++)m(nt.location+me);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let me=0;me<nt.locationSize;me++)E(nt.location+me,qt/nt.locationSize,Yt,wt,pe*se,(Ze+qt/nt.locationSize*me)*se,ge)}else{if(ht.isInstancedBufferAttribute){for(let Zt=0;Zt<nt.locationSize;Zt++)g(nt.location+Zt,ht.meshPerAttribute);X.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Zt=0;Zt<nt.locationSize;Zt++)m(nt.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Zt=0;Zt<nt.locationSize;Zt++)E(nt.location+Zt,qt/nt.locationSize,Yt,wt,qt*se,qt/nt.locationSize*Zt*se,ge)}}else if(Y!==void 0){const wt=Y[H];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(nt.location,wt);break;case 3:s.vertexAttrib3fv(nt.location,wt);break;case 4:s.vertexAttrib4fv(nt.location,wt);break;default:s.vertexAttrib1fv(nt.location,wt)}}}}M()}function I(){F();for(const X in n){const st=n[X];for(const j in st){const N=st[j];for(const it in N){const at=N[it];for(const Y in at)h(at[Y].object),delete at[Y];delete N[it]}}delete n[X]}}function P(X){if(n[X.id]===void 0)return;const st=n[X.id];for(const j in st){const N=st[j];for(const it in N){const at=N[it];for(const Y in at)h(at[Y].object),delete at[Y];delete N[it]}}delete n[X.id]}function v(X){for(const st in n){const j=n[st];for(const N in j){const it=j[N];if(it[X.id]===void 0)continue;const at=it[X.id];for(const Y in at)h(at[Y].object),delete at[Y];delete it[X.id]}}}function b(X){for(const st in n){const j=n[st],N=X.isInstancedMesh===!0?X.id:0,it=j[N];if(it!==void 0){for(const at in it){const Y=it[at];for(const H in Y)h(Y[H].object),delete Y[H];delete it[at]}delete j[N],Object.keys(j).length===0&&delete n[st]}}}function F(){U(),o=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function wx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Tx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==Ti&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const b=v===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==hi&&v!==_i&&!b&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:w,maxSamples:I,samples:P}}function Ex(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ji,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,E=M*4;let w=g.clippingState||null;l.value=w,w=h(p,f,E,u);for(let I=0;I!==E;++I)w[I]=e[I];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=u+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,w=u;E!==x;++E,w+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class ah extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Vd(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pt(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:ws});r.uniforms.tEquirect.value=e;const o=new He(i,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Hn),new Mc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Tu=256,Ax=3,Rx=20,ff=256,pf=16,Cx=3,Px=new k,Lx=new Te;class Sa{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Mc(1,10,null),this._boxMesh=new He(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Px}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Lx));const m=new Mc(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Tu,Nd(t))}_fromTexture(t,e){t.mapping===ir||t.mapping===Zr?this._setSize(t.image.length===0?Tu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Eu(t,!1,!1),n=Math.log2(t)-Ax;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Eu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ir||t.mapping===Zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Au()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dx(),this._integrationMaterial=Ix());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/pf);for(let o=0;o<=n;o++){const a=Sa.lodToRoughness(o,n);if(o>n-Cx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(ff*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Nx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function Eu(s,t,e){return new ah(s,{minFilter:Fi,generateMipmaps:t,type:$n,colorSpace:di,depthBuffer:e})}function fo(s,t,e){return new si({name:s,uniforms:t,vertexShader:en.cube_vert,fragmentShader:e,side:Jn,blending:ws,depthTest:!1,depthWrite:!1})}function Dx(){return fo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ff}u

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
	`)}function Ix(){return fo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pf}},`

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
	`)}function Nx(){return fo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rx}
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
	`)}function Au(){return fo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ru(){return fo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ux(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===za||u===ka)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new ah(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===za||u===ka,x=u===ir||u===Zr;if(p||x){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Sa(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Sa(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===za?f.mapping=ir:u===ka&&(f.mapping=Zr),f}function l(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Ox(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&tr("WebGLRenderer: "+n+" extension not supported."),i}}}function Fx(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?Bd:Fd,w=new E(Math.ceil(M/3)*6,1),I=w.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,F=0;b<M;b+=3){const U=v[b+0],X=v[b+1],st=v[b+2];I[F++]=U,I[F++]=X,I[F++]=X,I[F++]=st,I[F++]=st,I[F++]=U}}else{g=m.version;for(let v=0,b=0;v<M;v+=3){const F=v+0,U=v+1,X=v+2;I[b++]=F,I[b++]=U,I[b++]=U,I[b++]=X,I[b++]=X,I[b++]=F}}w.version=g;const P=r.get(p);P&&t.remove(P),r.set(p,w)}function f(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Bx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kx(s,t,e){const n=new WeakMap,i=new _n;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let F=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;u===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let w=a.attributes.position.count*E,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*I*4*d),v=new Ud(P,w,I,d);v.type=_i,v.needsUpdate=!0;const b=E*4;for(let U=0;U<d;U++){const X=m[U],st=g[U],j=M[U],N=w*I*4*U;for(let it=0;it<X.count;it++){const at=it*b;u===!0&&(i.fromBufferAttribute(X,it),P[N+at+0]=i.x,P[N+at+1]=i.y,P[N+at+2]=i.z,P[N+at+3]=0),p===!0&&(i.fromBufferAttribute(st,it),P[N+at+4]=i.x,P[N+at+5]=i.y,P[N+at+6]=i.z,P[N+at+7]=0),x===!0&&(i.fromBufferAttribute(j,it),P[N+at+8]=i.x,P[N+at+9]=i.y,P[N+at+10]=i.z,P[N+at+11]=j.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new Ut(w,I)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Gx(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Hx={[Lc]:"LINEAR_TONE_MAPPING",[Dc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Oc]:"NEUTRAL_TONE_MAPPING",[Nc]:"CUSTOM_TONE_MAPPING"};function Vx(s,t,e,n,i,r){const o=new Qn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new mn;h.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Be([0,2,0,0,2,0],2));const d=new ef({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new He(h,d),u=new Ia(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,E=[],w=!1;this.setSize=function(I,P){o.setSize(I,P),a!==null&&a.setSize(I,P),l!==null&&l.setSize(I,P);for(let v=0;v<E.length;v++){const b=E[v];b.setSize&&b.setSize(I,P)}},this.setEffects=function(I){E=I,w=E.length>0&&E[0].isRenderPass===!0;const P=o.width,v=o.height;E.length>0&&a===null&&(a=new Qn(P,v,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(P,v,{type:$n,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&E.some(F=>F.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Es(P,v),r===!0&&(c.format=ms,c.type=sr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let F=0;F<E.length;F++){const U=E[F];U.setSize&&U.setSize(P,v),b&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,P){if(m||I.toneMapping===ss&&E.length===0)return!1;if(M=P,P!==null){const v=P.width,b=P.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return w===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=ss,!0},this.hasRenderPass=function(){return w},this.end=function(I,P){I.toneMapping=g,m=!0;let v=o,b=a;for(let F=0;F<E.length;F++){const U=E[F];U.enabled!==!1&&(U.render(I,b,v,P),U.needsSwap!==!1&&(v=b,b=b===a?l:a))}if(p!==I.outputColorSpace||x!==I.toneMapping){p=I.outputColorSpace,x=I.toneMapping,d.defines={},rn.getTransfer(p)===fn&&(d.defines.SRGB_TRANSFER="");const F=Hx[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,I.setRenderTarget(M),I.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const mf=new Fn,gf=new Es(1,1),_f=new Wd(1),xf=new Ud,vf=new Kp,Mf=new Vd,Cu=[],Pu=[],Lu=new Float32Array(16),Du=new Float32Array(9),Iu=new Float32Array(4);function mr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Cu[i];if(r===void 0&&(r=new Float32Array(i),Cu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Bn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function zn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Na(s,t){let e=Pu[t];e===void 0&&(e=new Int32Array(t),Pu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;s.uniform2fv(this.addr,t),zn(e,t)}}function Yx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Bn(e,t))return;s.uniform3fv(this.addr,t),zn(e,t)}}function qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;s.uniform4fv(this.addr,t),zn(e,t)}}function Kx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Bn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),zn(e,t)}else{if(Bn(e,n))return;Iu.set(n),s.uniformMatrix2fv(this.addr,!1,Iu),zn(e,n)}}function Zx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Bn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),zn(e,t)}else{if(Bn(e,n))return;Du.set(n),s.uniformMatrix3fv(this.addr,!1,Du),zn(e,n)}}function Jx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Bn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),zn(e,t)}else{if(Bn(e,n))return;Lu.set(n),s.uniformMatrix4fv(this.addr,!1,Lu),zn(e,n)}}function $x(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;s.uniform2iv(this.addr,t),zn(e,t)}}function jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Bn(e,t))return;s.uniform3iv(this.addr,t),zn(e,t)}}function tv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;s.uniform4iv(this.addr,t),zn(e,t)}}function ev(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function nv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;s.uniform2uiv(this.addr,t),zn(e,t)}}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Bn(e,t))return;s.uniform3uiv(this.addr,t),zn(e,t)}}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;s.uniform4uiv(this.addr,t),zn(e,t)}}function Ua(s){return s.version===0&&(s.compareFunction=Ld,s.needsUpdate=!0),s}function rv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ua(gf):r=mf,e.setTexture2D(t||r,i)}function ov(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vf,i)}function av(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ua(_f):r=Mf,e.setTextureCube(t||r,i)}function lv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xf,i)}function cv(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return qx;case 35674:return Kx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return $x;case 35667:case 35671:return Qx;case 35668:case 35672:return jx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(s,t){s.uniform1fv(this.addr,t)}function uv(s,t){const e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function dv(s,t){const e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function fv(s,t){const e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function pv(s,t){const e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mv(s,t){const e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gv(s,t){const e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _v(s,t){s.uniform1iv(this.addr,t)}function xv(s,t){s.uniform2iv(this.addr,t)}function vv(s,t){s.uniform3iv(this.addr,t)}function Mv(s,t){s.uniform4iv(this.addr,t)}function yv(s,t){s.uniform1uiv(this.addr,t)}function Sv(s,t){s.uniform2uiv(this.addr,t)}function bv(s,t){s.uniform3uiv(this.addr,t)}function wv(s,t){s.uniform4uiv(this.addr,t)}function Tv(s,t,e){const n=this.cache,i=t.length,r=Na(e,i);Bn(n,r)||(s.uniform1iv(this.addr,r),zn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ua(gf):o=mf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Ev(s,t,e){const n=this.cache,i=t.length,r=Na(e,i);Bn(n,r)||(s.uniform1iv(this.addr,r),zn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vf,r[o])}function Av(s,t,e){const n=this.cache,i=t.length,r=Na(e,i);Bn(n,r)||(s.uniform1iv(this.addr,r),zn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ua(_f):o=Mf;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Rv(s,t,e){const n=this.cache,i=t.length,r=Na(e,i);Bn(n,r)||(s.uniform1iv(this.addr,r),zn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xf,r[o])}function Cv(s){switch(s){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return Mv;case 5125:return yv;case 36294:return Sv;case 36295:return bv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}class Pv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}}class Lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cv(e.type)}}class Dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Nu(s,t){s.seq.push(t),s.map[t.id]=t}function Iv(s,t,e){const n=s.name,i=n.length;for(xl.lastIndex=0;;){const r=xl.exec(n),o=xl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nu(e,c===void 0?new Pv(a,s,t):new Lv(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Dv(a),Nu(e,d)),e=d}}}class sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Iv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Uu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Nv=37297;let Uv=0;function Ov(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ou=new Ke;function Fv(s){rn._getMatrix(Ou,rn.workingColorSpace,s);const t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(rn.getTransfer(s)){case fa:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ov(s.getShaderSource(t),a)}else return r}function Bv(s,t){const e=Fv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const zv={[Lc]:"Linear",[Dc]:"Reinhard",[Ic]:"Cineon",[Aa]:"ACESFilmic",[Uc]:"AgX",[Oc]:"Neutral",[Nc]:"Custom"};function kv(s,t){const e=zv[t];return e===void 0?(De("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yo=new k;function Gv(){rn.getLuminanceCoefficients(Yo);const s=Yo.x.toFixed(4),t=Yo.y.toFixed(4),e=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Vv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Fr(s){return s!==""}function Bu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(s){return s.replace(Xv,Yv)}function Yv(s,t){const e=en[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Sc(e)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(s){return s.replace(qv,Kv)}function Kv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const Zv={[zr]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function Jv(s){return Zv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $v={[Zr]:"ENVMAP_MODE_REFRACTION"};function Qv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$v[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jv={[vd]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[lp]:"ENVMAP_BLENDING_ADD"};function tM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jv[s.combine]||"ENVMAP_BLENDING_NONE"}function eM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Jv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Qv(e),d=tM(e),f=Hv(e),u=Vv(r),p=i.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Fr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(x=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?en.tonemapping_pars_fragment:"",e.toneMapping!==ss?kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",en.colorspace_pars_fragment,Bv("linearToOutputTexel",e.outputColorSpace),Gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Sc(o),o=Bu(o,e),o=zu(o,e),a=Sc(a),a=Bu(a,e),a=zu(a,e),o=ku(o),a=ku(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+o,E=g+m+a,w=Uu(i,i.VERTEX_SHADER,M),I=Uu(i,i.FRAGMENT_SHADER,E);i.attachShader(p,w),i.attachShader(p,I),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(U){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(p)||"",st=i.getShaderInfoLog(w)||"",j=i.getShaderInfoLog(I)||"",N=X.trim(),it=st.trim(),at=j.trim();let Y=!0,H=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,I);else{const nt=Fu(i,w,"vertex"),ht=Fu(i,I,"fragment");ke("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+nt+`
`+ht)}else N!==""?De("WebGLProgram: Program Info Log:",N):(it===""||at==="")&&(H=!1);H&&(U.diagnostics={runnable:Y,programLog:N,vertexShader:{log:it,prefix:x},fragmentShader:{log:at,prefix:m}})}i.deleteShader(w),i.deleteShader(I),v=new sa(i,p),b=Wv(i,p)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,Nv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=I,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sM(t),e.set(t,n)),n}}class sM{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}}function rM(s){return s===Ts||s===ha||s===ua}function oM(s,t,e,n,i,r){const o=new Kc,a=new iM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,F,U,X,st){const j=U.fog,N=X.geometry,it=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,at=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=t.get(v.envMap||it,at),H=f[v.type];let nt=n.precision;v.precision!==null&&(nt=n.getMaxPrecision(v.precision),nt!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",nt,"instead."));const ht=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,wt=ht!==void 0?ht.length:0;let qt=0;N.morphAttributes.position!==void 0&&(qt=1),N.morphAttributes.normal!==void 0&&(qt=2),N.morphAttributes.color!==void 0&&(qt=3);let ue,pt,Yt,se;if(H){const O=Ni[H];ue=O.vertexShader,pt=O.fragmentShader}else{ue=v.vertexShader,pt=v.fragmentShader;const O=a.getVertexShaderStage(v),rt=a.getFragmentShaderStage(v);a.update(v,O,rt),Yt=O.id,se=rt.id}const ge=s.getRenderTarget(),Zt=s.state.buffers.depth.getReversed(),pe=X.isInstancedMesh===!0,Ze=X.isBatchedMesh===!0,me=!!v.map,ye=!!v.matcap,Ee=!!Y,Rt=Ee&&Y.isPMREMTexture===!0,Wt=!!v.aoMap,te=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,ee=!!v.normalMap,ae=!!v.displacementMap,de=!!v.emissiveMap,Mt=!!v.metalnessMap,zt=!!v.roughnessMap,Ot=v.anisotropy>0,L=v.clearcoat>0,Qt=v.diffuseRoughness>0,Jt=v.dispersion>0,Xt=v.retroreflectivity>0,Ct=v.iridescence>0,jt=v.sheen>0,bt=v.transmission>0,lt=Ot&&!!v.anisotropyMap,C=L&&!!v.clearcoatMap,S=L&&!!v.clearcoatNormalMap,$=L&&!!v.clearcoatRoughnessMap,yt=Qt&&!!v.diffuseRoughnessMap,mt=Ct&&!!v.iridescenceMap,Nt=Ct&&!!v.iridescenceThicknessMap,kt=jt&&!!v.sheenColorMap,vt=jt&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,Dt=!!v.specularColorMap,V=!!v.specularIntensityMap,xt=bt&&!!v.transmissionMap,_t=bt&&!!v.thicknessMap,Vt=!!v.gradientMap,et=!!v.alphaMap,q=v.alphaTest>0,dt=!!v.alphaHash,Lt=!!v.extensions;let _=ss;v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(_=s.toneMapping);const z=Rt?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,W={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:pt,defines:v.defines,customVertexShaderID:Yt,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:nt,batching:Ze,batchingColor:Ze&&X._colorsTexture!==null,instancing:pe,instancingColor:pe&&X.instanceColor!==null,instancingMorph:pe&&X.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:rn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:me,matcap:ye,envMap:Ee,envMapMode:Ee&&Y.mapping,envMapPMREM:Rt,envMapMaxLod:Rt?z.length-1:null,envMapSize:Rt?z[0].width:null,aoMap:Wt,lightMap:te,bumpMap:oe,normalMap:ee,displacementMap:ae,emissiveMap:de,normalMapObjectSpace:ee&&v.normalMapType===gp,normalMapTangentSpace:ee&&v.normalMapType===jr,packedNormalMap:ee&&v.normalMapType===jr&&rM(v.normalMap.format),metalnessMap:Mt,roughnessMap:zt,anisotropy:Ot,anisotropyMap:lt,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:$,diffuseRoughness:Qt,diffuseRoughnessMap:yt,dispersion:Jt,retroreflection:Xt,iridescence:Ct,iridescenceMap:mt,iridescenceThicknessMap:Nt,sheen:jt,sheenColorMap:kt,sheenRoughnessMap:vt,specularMap:Tt,specularColorMap:Dt,specularIntensityMap:V,transmission:bt,transmissionMap:xt,thicknessMap:_t,gradientMap:Vt,opaque:v.transparent===!1&&v.blending===js&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:q,alphaHash:dt,combine:v.combine,mapUv:me&&u(v.map.channel),aoMapUv:Wt&&u(v.aoMap.channel),lightMapUv:te&&u(v.lightMap.channel),bumpMapUv:oe&&u(v.bumpMap.channel),normalMapUv:ee&&u(v.normalMap.channel),displacementMapUv:ae&&u(v.displacementMap.channel),emissiveMapUv:de&&u(v.emissiveMap.channel),metalnessMapUv:Mt&&u(v.metalnessMap.channel),roughnessMapUv:zt&&u(v.roughnessMap.channel),anisotropyMapUv:lt&&u(v.anisotropyMap.channel),clearcoatMapUv:C&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:yt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:mt&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&u(v.sheenRoughnessMap.channel),specularMapUv:Tt&&u(v.specularMap.channel),specularColorMapUv:Dt&&u(v.specularColorMap.channel),specularIntensityMapUv:V&&u(v.specularIntensityMap.channel),transmissionMapUv:xt&&u(v.transmissionMap.channel),thicknessMapUv:_t&&u(v.thicknessMap.channel),alphaMapUv:et&&u(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ee||Ot),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!N.attributes.uv&&(me||et),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ee===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Zt,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:qt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:st.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:_,decodeVideoTexture:me&&v.map.isVideoTexture===!0&&rn.getTransfer(v.map.colorSpace)===fn,decodeVideoTextureEmissive:de&&v.emissiveMap.isVideoTexture===!0&&rn.getTransfer(v.emissiveMap.colorSpace)===fn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===Jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&v.extensions.multiDraw===!0||Ze)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return W.vertexUv1s=l.has(1),W.vertexUv2s=l.has(2),W.vertexUv3s=l.has(3),l.clear(),W}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const b=f[v.type];let F;if(b){const U=Ni[b];F=co.clone(U.uniforms)}else F=v.uniforms;return F}function E(v,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new eM(s,b,v,i),c.push(F),h.set(b,F)),F}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function I(v){a.remove(v)}function P(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:E,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:P}}function aM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function lM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Hu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=g),t++,M}function l(f,u,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const E=a(f,u,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function c(f,u,p,x,m,g){const M=a(f,u,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(f,u){e.length>1&&e.sort(f||lM),n.length>1&&n.sort(u||Hu),i.length>1&&i.sort(u||Hu)}function d(){for(let f=t,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function cM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Vu,s.set(n,[o])):i>=r.length?(o=new Vu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function hM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Te};break;case"SpotLight":e={position:new k,direction:new k,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":e={color:new Te,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function uM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let dM=0;function fM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function pM(s){const t=new hM,e=uM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new ze,o=new ze;function a(c){let h=0,d=0,f=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,M=0,E=0,w=0,I=0,P=0,v=0,b=0,F=0,U=0;c.sort(fM);for(let st=0,j=c.length;st<j;st++){const N=c[st],it=N.color,at=N.intensity,Y=N.distance;let H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ts?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=it.r*at,d+=it.g*at,f+=it.b*at;else if(N.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(N.sh.coefficients[nt],at);U++}else if(N.isSunLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ht=N.shadow,wt=e.get(N);wt.shadowIntensity=ht.intensity,wt.shadowBias=ht.bias,wt.shadowNormalBias=ht.normalBias,wt.shadowRadius=ht.radius,wt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[p]=wt,n.sunShadowMap[p]=H;const qt=ht.getViewportCount();for(let ue=0;ue<qt;ue++)n.sunShadowMatrix[x+ue]=ht.getMatrix(ue),n.sunShadowCascade[x+ue]=ht._cascadeData[ue];x+=qt,p++}n.sun[u]=nt,u++}else if(N.isDirectionalLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ht=N.shadow,wt=e.get(N);wt.shadowIntensity=ht.intensity,wt.shadowBias=ht.bias,wt.shadowNormalBias=ht.normalBias,wt.shadowRadius=ht.radius,wt.shadowMapSize=ht.mapSize,n.directionalShadow[m]=wt,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=N.shadow.matrix,I++}n.directional[m]=nt,m++}else if(N.isSpotLight){const nt=t.get(N);nt.position.setFromMatrixPosition(N.matrixWorld),nt.color.copy(it).multiplyScalar(at),nt.distance=Y,nt.coneCos=Math.cos(N.angle),nt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),nt.decay=N.decay,n.spot[M]=nt;const ht=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,ht.updateMatrices(N),N.castShadow&&F++),n.spotLightMatrix[M]=ht.matrix,N.castShadow){const wt=e.get(N);wt.shadowIntensity=ht.intensity,wt.shadowBias=ht.bias,wt.shadowNormalBias=ht.normalBias,wt.shadowRadius=ht.radius,wt.shadowMapSize=ht.mapSize,n.spotShadow[M]=wt,n.spotShadowMap[M]=H,v++}M++}else if(N.isRectAreaLight){const nt=t.get(N);nt.color.copy(it).multiplyScalar(at),nt.halfWidth.set(N.width*.5,0,0),nt.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=nt,E++}else if(N.isPointLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),nt.distance=N.distance,nt.decay=N.decay,N.castShadow){const ht=N.shadow,wt=e.get(N);wt.shadowIntensity=ht.intensity,wt.shadowBias=ht.bias,wt.shadowNormalBias=ht.normalBias,wt.shadowRadius=ht.radius,wt.shadowMapSize=ht.mapSize,wt.shadowCameraNear=ht.camera.near,wt.shadowCameraFar=ht.camera.far,n.pointShadow[g]=wt,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=N.shadow.matrix,P++}n.point[g]=nt,g++}else if(N.isHemisphereLight){const nt=t.get(N);nt.skyColor.copy(N.color).multiplyScalar(at),nt.groundColor.copy(N.groundColor).multiplyScalar(at),n.hemi[w]=nt,w++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const X=n.hash;(X.sunLength!==u||X.directionalLength!==m||X.pointLength!==g||X.spotLength!==M||X.rectAreaLength!==E||X.hemiLength!==w||X.numSunShadows!==p||X.numDirectionalShadows!==I||X.numPointShadows!==P||X.numSpotShadows!==v||X.numSpotMaps!==b||X.numLightProbes!==U)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=U,X.sunLength=u,X.directionalLength=m,X.pointLength=g,X.spotLength=M,X.rectAreaLength=E,X.hemiLength=w,X.numSunShadows=p,X.numDirectionalShadows=I,X.numPointShadows=P,X.numSpotShadows=v,X.numSpotMaps=b,X.numLightProbes=U,n.version=dM++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const w=c[M];if(w.isSunLight){const I=n.sun[d];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),d++}else if(w.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),f++}else if(w.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const I=n.rectArea[x];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const I=n.point[u];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Wu(s){const t=new pM(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Wu(s),t.set(i,[a])):r>=o.length?(a=new Wu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`,xM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],vM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Xu=new ze,Rr=new k,vl=new k;function MM(s,t,e){let n=new so;const i=new Ut,r=new Ut,o=new _n,a=new em,l=new nm,c={},h=e.maxTextureSize,d={[gs]:Jn,[Jn]:gs,[Sn]:Sn},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:gM,fragmentShader:_M}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new mn;p.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let g=this.type;this.render=function(P,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===Hf&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);const F=s.getRenderTarget(),U=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),st=s.state;st.setBlending(ws),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const j=g!==this.type;j&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(it=>it.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,it=P.length;N<it;N++){const at=P[N],Y=at.shadow;if(Y===void 0){De("WebGLShadowMap:",at,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const H=Y.getFrameExtents();i.multiply(H),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,Y.mapSize.y=r.y));const nt=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=nt,Y.map===null||j===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Dr){if(at.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Qn(i.x,i.y,{format:Ts,type:$n,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),Y.map.texture.name=at.name+".shadowMap",Y.map.depthTexture=new Es(i.x,i.y,_i),Y.map.depthTexture.name=at.name+".shadowMapDepth",Y.map.depthTexture.format=_s,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nn,Y.map.depthTexture.magFilter=Nn}else at.isPointLight?(Y.map=new ah(i.x),Y.map.depthTexture=new Wd(i.x,Ai)):(Y.map=new Qn(i.x,i.y),Y.map.depthTexture=new Es(i.x,i.y,Ai)),Y.map.depthTexture.name=at.name+".shadowMap",Y.map.depthTexture.format=_s,this.type===zr?(Y.map.depthTexture.compareFunction=nt?Pd:Cd,Y.map.depthTexture.minFilter=Hn,Y.map.depthTexture.magFilter=Hn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nn,Y.map.depthTexture.magFilter=Nn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);const ht=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();at.isPointLight!==!0&&Y.updateMatrices(at,b);const wt=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:b.layers;for(let qt=0;qt<ht;qt++){const ue=Y.getCamera(qt);if(at.isPointLight){const pt=Y.camera,Yt=Y.matrix,se=at.distance||pt.far;se!==pt.far&&(pt.far=se,pt.updateProjectionMatrix()),Rr.setFromMatrixPosition(at.matrixWorld),pt.position.copy(Rr),vl.copy(pt.position),vl.add(xM[qt]),pt.up.copy(vM[qt]),pt.lookAt(vl),pt.updateMatrixWorld(),Yt.makeTranslation(-Rr.x,-Rr.y,-Rr.z),Xu.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Xu,pt.coordinateSystem,pt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,qt),s.clear();else{qt===0&&(s.setRenderTarget(Y.map),s.clear());const pt=Y.getViewport(qt);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),st.viewport(o)}n=Y.getFrustum(qt),w(v,b,ue,at,wt,this.type)}Y.isPointLightShadow!==!0&&this.type===Dr&&M(Y,b),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(F,U,X)};function M(P,v){const b=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null?P.mapPass=new Qn(i.x,i.y,{format:Ts,type:$n}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(v,null,b,f,x,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(v,null,b,u,x,null)}function E(P,v,b,F){let U=null;const X=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)U=X;else if(U=b.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const st=U.uuid,j=v.uuid;let N=c[st];N===void 0&&(N={},c[st]=N);let it=N[j];it===void 0&&(it=U.clone(),N[j]=it,v.addEventListener("dispose",I)),U=it}if(U.visible=v.visible,U.wireframe=v.wireframe,F===Dr?U.side=v.shadowSide!==null?v.shadowSide:v.side:U.side=v.shadowSide!==null?v.shadowSide:d[v.side],U.alphaMap=v.alphaMap,U.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,U.map=v.map,U.clipShadows=v.clipShadows,U.clippingPlanes=v.clippingPlanes,U.clipIntersection=v.clipIntersection,U.displacementMap=v.displacementMap,U.displacementScale=v.displacementScale,U.displacementBias=v.displacementBias,U.wireframeLinewidth=v.wireframeLinewidth,U.linewidth=v.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const st=s.properties.get(U);st.light=b}return U}function w(P,v,b,F,U,X){if(P.visible===!1)return;if(P.layers.test(U)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===Dr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const N=t.update(P),it=P.material;if(Array.isArray(it)){const at=N.groups;for(let Y=0,H=at.length;Y<H;Y++){const nt=at[Y],ht=it[nt.materialIndex];if(ht&&ht.visible){const wt=E(P,ht,F,X);P.onBeforeShadow(s,P,v,b,N,wt,nt),s.renderBufferDirect(b,null,N,wt,P,nt),P.onAfterShadow(s,P,v,b,N,wt,nt)}}}else if(it.visible){const at=E(P,it,F,X);P.onBeforeShadow(s,P,v,b,N,at,null),s.renderBufferDirect(b,null,N,at,P,null),P.onAfterShadow(s,P,v,b,N,at,null)}}const j=P.children;for(let N=0,it=j.length;N<it;N++)w(j[N],v,b,F,U,X)}function I(P){P.target.removeEventListener("dispose",I);for(const b in c){const F=c[b],U=P.target.uuid;U in F&&(F[U].dispose(),delete F[U])}}}function yM(s,t){function e(){let V=!1;const xt=new _n;let _t=null;const Vt=new _n(0,0,0,0);return{setMask:function(et){_t!==et&&!V&&(s.colorMask(et,et,et,et),_t=et)},setLocked:function(et){V=et},setClear:function(et,q,dt,Lt,_){_===!0&&(et*=Lt,q*=Lt,dt*=Lt),xt.set(et,q,dt,Lt),Vt.equals(xt)===!1&&(s.clearColor(et,q,dt,Lt),Vt.copy(xt))},reset:function(){V=!1,_t=null,Vt.set(-1,0,0,0)}}}function n(){let V=!1,xt=!1,_t=null,Vt=null,et=null;return{setReversed:function(q){if(xt!==q){const dt=t.get("EXT_clip_control");q?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),xt=q;const Lt=et;et=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(q){q?Zt(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(q){_t!==q&&!V&&(s.depthMask(q),_t=q)},setFunc:function(q){if(xt&&(q=Ap[q]),Vt!==q){switch(q){case Pl:s.depthFunc(s.NEVER);break;case Ll:s.depthFunc(s.ALWAYS);break;case Dl:s.depthFunc(s.LESS);break;case Kr:s.depthFunc(s.LEQUAL);break;case Il:s.depthFunc(s.EQUAL);break;case Nl:s.depthFunc(s.GEQUAL);break;case Ul:s.depthFunc(s.GREATER);break;case Ol:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Vt=q}},setLocked:function(q){V=q},setClear:function(q){et!==q&&(et=q,xt&&(q=1-q),s.clearDepth(q))},reset:function(){V=!1,_t=null,Vt=null,et=null,xt=!1}}}function i(){let V=!1,xt=null,_t=null,Vt=null,et=null,q=null,dt=null,Lt=null,_=null;return{setTest:function(z){V||(z?Zt(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(z){xt!==z&&!V&&(s.stencilMask(z),xt=z)},setFunc:function(z,W,O){(_t!==z||Vt!==W||et!==O)&&(s.stencilFunc(z,W,O),_t=z,Vt=W,et=O)},setOp:function(z,W,O){(q!==z||dt!==W||Lt!==O)&&(s.stencilOp(z,W,O),q=z,dt=W,Lt=O)},setLocked:function(z){V=z},setClear:function(z){_!==z&&(s.clearStencil(z),_=z)},reset:function(){V=!1,xt=null,_t=null,Vt=null,et=null,q=null,dt=null,Lt=null,_=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,E=null,w=null,I=null,P=null,v=null,b=new Te(0,0,0),F=0,U=!1,X=null,st=null,j=null,N=null,it=null;const at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=H>=1):nt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=H>=2);let ht=null,wt={};const qt=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),pt=new _n().fromArray(qt),Yt=new _n().fromArray(ue);function se(V,xt,_t,Vt){const et=new Uint8Array(4),q=s.createTexture();s.bindTexture(V,q),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<_t;dt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,Vt,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(xt+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return q}const ge={};ge[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Zt(s.DEPTH_TEST),o.setFunc(Kr),oe(!1),ee(Mh),Zt(s.CULL_FACE),Wt(ws);function Zt(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function pe(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Ze(V,xt){return f[V]!==xt?(s.bindFramebuffer(V,xt),f[V]=xt,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=xt),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function me(V,xt){let _t=p,Vt=!1;if(V){_t=u.get(xt),_t===void 0&&(_t=[],u.set(xt,_t));const et=V.textures;if(_t.length!==et.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let q=0,dt=et.length;q<dt;q++)_t[q]=s.COLOR_ATTACHMENT0+q;_t.length=et.length,Vt=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,Vt=!0);Vt&&s.drawBuffers(_t)}function ye(V){return x!==V?(s.useProgram(V),x=V,!0):!1}const Ee={[qs]:s.FUNC_ADD,[Wf]:s.FUNC_SUBTRACT,[Xf]:s.FUNC_REVERSE_SUBTRACT};Ee[Yf]=s.MIN,Ee[qf]=s.MAX;const Rt={[Kf]:s.ZERO,[Zf]:s.ONE,[Jf]:s.SRC_COLOR,[_d]:s.SRC_ALPHA,[np]:s.SRC_ALPHA_SATURATE,[tp]:s.DST_COLOR,[Qf]:s.DST_ALPHA,[$f]:s.ONE_MINUS_SRC_COLOR,[xd]:s.ONE_MINUS_SRC_ALPHA,[ep]:s.ONE_MINUS_DST_COLOR,[jf]:s.ONE_MINUS_DST_ALPHA,[ip]:s.CONSTANT_COLOR,[sp]:s.ONE_MINUS_CONSTANT_COLOR,[rp]:s.CONSTANT_ALPHA,[op]:s.ONE_MINUS_CONSTANT_ALPHA};function Wt(V,xt,_t,Vt,et,q,dt,Lt,_,z){if(V===ws){m===!0&&(pe(s.BLEND),m=!1);return}if(m===!1&&(Zt(s.BLEND),m=!0),V!==Vf){if(V!==g||z!==U){if((M!==qs||I!==qs)&&(s.blendEquation(s.FUNC_ADD),M=qs,I=qs),z)switch(V){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.ONE,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ke("WebGLState: Invalid blending: ",V);break}else switch(V){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yh:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",V);break}E=null,w=null,P=null,v=null,b.set(0,0,0),F=0,g=V,U=z}return}et=et||xt,q=q||_t,dt=dt||Vt,(xt!==M||et!==I)&&(s.blendEquationSeparate(Ee[xt],Ee[et]),M=xt,I=et),(_t!==E||Vt!==w||q!==P||dt!==v)&&(s.blendFuncSeparate(Rt[_t],Rt[Vt],Rt[q],Rt[dt]),E=_t,w=Vt,P=q,v=dt),(Lt.equals(b)===!1||_!==F)&&(s.blendColor(Lt.r,Lt.g,Lt.b,_),b.copy(Lt),F=_),g=V,U=!1}function te(V,xt){V.side===Sn?pe(s.CULL_FACE):Zt(s.CULL_FACE);let _t=V.side===Jn;xt&&(_t=!_t),oe(_t),V.blending===js&&V.transparent===!1?Wt(ws):Wt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Vt=V.stencilWrite;a.setTest(Vt),Vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Zt(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(V){X!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),X=V)}function ee(V){V!==kf?(Zt(s.CULL_FACE),V!==st&&(V===Mh?s.cullFace(s.BACK):V===Gf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),st=V}function ae(V){V!==j&&(Y&&s.lineWidth(V),j=V)}function de(V,xt,_t){V?(Zt(s.POLYGON_OFFSET_FILL),(N!==xt||it!==_t)&&(N=xt,it=_t,o.getReversed()&&(xt=-xt,_t=-_t),s.polygonOffset(xt,_t))):pe(s.POLYGON_OFFSET_FILL)}function Mt(V){V?Zt(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function zt(V){V===void 0&&(V=s.TEXTURE0+at-1),ht!==V&&(s.activeTexture(V),ht=V)}function Ot(V,xt,_t){_t===void 0&&(ht===null?_t=s.TEXTURE0+at-1:_t=ht);let Vt=wt[_t];Vt===void 0&&(Vt={type:void 0,texture:void 0},wt[_t]=Vt),(Vt.type!==V||Vt.texture!==xt)&&(ht!==_t&&(s.activeTexture(_t),ht=_t),s.bindTexture(V,xt||ge[V]),Vt.type=V,Vt.texture=xt)}function L(){const V=wt[ht];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Qt(){try{s.compressedTexImage2D(...arguments)}catch(V){ke("WebGLState:",V)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(V){ke("WebGLState:",V)}}function Xt(){try{s.texSubImage2D(...arguments)}catch(V){ke("WebGLState:",V)}}function Ct(){try{s.texSubImage3D(...arguments)}catch(V){ke("WebGLState:",V)}}function jt(){try{s.compressedTexSubImage2D(...arguments)}catch(V){ke("WebGLState:",V)}}function bt(){try{s.compressedTexSubImage3D(...arguments)}catch(V){ke("WebGLState:",V)}}function lt(){try{s.texStorage2D(...arguments)}catch(V){ke("WebGLState:",V)}}function C(){try{s.texStorage3D(...arguments)}catch(V){ke("WebGLState:",V)}}function S(){try{s.texImage2D(...arguments)}catch(V){ke("WebGLState:",V)}}function $(){try{s.texImage3D(...arguments)}catch(V){ke("WebGLState:",V)}}function yt(V){return d[V]!==void 0?d[V]:s.getParameter(V)}function mt(V,xt){d[V]!==xt&&(s.pixelStorei(V,xt),d[V]=xt)}function Nt(V){pt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),pt.copy(V))}function kt(V){Yt.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Yt.copy(V))}function vt(V,xt){let _t=c.get(xt);_t===void 0&&(_t=new WeakMap,c.set(xt,_t));let Vt=_t.get(V);Vt===void 0&&(Vt=s.getUniformBlockIndex(xt,V.name),s.uniformBlockBinding(xt,Vt,Vt),_t.set(V,Vt))}function Tt(V,xt,_t){const et=c.get(xt).get(V);l[et]!==_t&&(s.bindBufferBase(s.UNIFORM_BUFFER,et,_t),l[et]=_t)}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ht=null,wt={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,E=null,w=null,I=null,P=null,v=null,b=new Te(0,0,0),F=0,U=!1,X=null,st=null,j=null,N=null,it=null,pt.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Zt,disable:pe,bindFramebuffer:Ze,drawBuffers:me,useProgram:ye,setBlending:Wt,setMaterial:te,setFlipSided:oe,setCullFace:ee,setLineWidth:ae,setPolygonOffset:de,setScissorTest:Mt,activeTexture:zt,bindTexture:Ot,unbindTexture:L,compressedTexImage2D:Qt,compressedTexImage3D:Jt,texImage2D:S,texImage3D:$,pixelStorei:mt,getParameter:yt,updateUBOMapping:vt,uniformBlockBinding:Tt,texStorage2D:lt,texStorage3D:C,texSubImage2D:Xt,texSubImage3D:Ct,compressedTexSubImage2D:jt,compressedTexSubImage3D:bt,scissor:Nt,viewport:kt,reset:Dt}}function SM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):eo("canvas")}function M(C,S,$){let yt=1;const mt=lt(C);if((mt.width>$||mt.height>$)&&(yt=$/Math.max(mt.width,mt.height)),yt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Nt=Math.floor(yt*mt.width),kt=Math.floor(yt*mt.height);f===void 0&&(f=g(Nt,kt));const vt=S?g(Nt,kt):f;return vt.width=Nt,vt.height=kt,vt.getContext("2d").drawImage(C,0,0,Nt,kt),De("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Nt+"x"+kt+")."),vt}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),C;return C}function E(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,S,$,yt,mt,Nt=!1){if(C!==null){if(s[C]!==void 0)return s[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let kt;yt&&(kt=t.get("EXT_texture_norm16"),kt||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=S;if(S===s.RED&&($===s.FLOAT&&(vt=s.R32F),$===s.HALF_FLOAT&&(vt=s.R16F),$===s.UNSIGNED_BYTE&&(vt=s.R8),$===s.UNSIGNED_SHORT&&kt&&(vt=kt.R16_EXT),$===s.SHORT&&kt&&(vt=kt.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(vt=s.R8UI),$===s.UNSIGNED_SHORT&&(vt=s.R16UI),$===s.UNSIGNED_INT&&(vt=s.R32UI),$===s.BYTE&&(vt=s.R8I),$===s.SHORT&&(vt=s.R16I),$===s.INT&&(vt=s.R32I)),S===s.RG&&($===s.FLOAT&&(vt=s.RG32F),$===s.HALF_FLOAT&&(vt=s.RG16F),$===s.UNSIGNED_BYTE&&(vt=s.RG8),$===s.UNSIGNED_SHORT&&kt&&(vt=kt.RG16_EXT),$===s.SHORT&&kt&&(vt=kt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(vt=s.RG8UI),$===s.UNSIGNED_SHORT&&(vt=s.RG16UI),$===s.UNSIGNED_INT&&(vt=s.RG32UI),$===s.BYTE&&(vt=s.RG8I),$===s.SHORT&&(vt=s.RG16I),$===s.INT&&(vt=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(vt=s.RGB8UI),$===s.UNSIGNED_SHORT&&(vt=s.RGB16UI),$===s.UNSIGNED_INT&&(vt=s.RGB32UI),$===s.BYTE&&(vt=s.RGB8I),$===s.SHORT&&(vt=s.RGB16I),$===s.INT&&(vt=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(vt=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(vt=s.RGBA16UI),$===s.UNSIGNED_INT&&(vt=s.RGBA32UI),$===s.BYTE&&(vt=s.RGBA8I),$===s.SHORT&&(vt=s.RGBA16I),$===s.INT&&(vt=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&kt&&(vt=kt.RGB16_EXT),$===s.SHORT&&kt&&(vt=kt.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(vt=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(vt=s.R11F_G11F_B10F)),S===s.RGBA){const Tt=Nt?fa:rn.getTransfer(mt);$===s.FLOAT&&(vt=s.RGBA32F),$===s.HALF_FLOAT&&(vt=s.RGBA16F),$===s.UNSIGNED_BYTE&&(vt=Tt===fn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&kt&&(vt=kt.RGBA16_EXT),$===s.SHORT&&kt&&(vt=kt.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(vt=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(vt=s.RGB5_A1)}return(vt===s.R16F||vt===s.R32F||vt===s.RG16F||vt===s.RG32F||vt===s.RGBA16F||vt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function v(C,S){let $;return C?S===null||S===Ai||S===sr?$=s.DEPTH24_STENCIL8:S===_i?$=s.DEPTH32F_STENCIL8:S===Jr&&($=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===sr?$=s.DEPTH_COMPONENT24:S===_i?$=s.DEPTH_COMPONENT32F:S===Jr&&($=s.DEPTH_COMPONENT16),$}function b(C,S){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function F(C){const S=new WeakRef(C);n.get(C).__ref=S,p.add(S),x.register(C,S,S)}function U(C){const S=n.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function X(C){j(C.target)}function st(C){N(C.target)}function j(C){C.removeEventListener("dispose",X),U(C),at(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",st),U(C),H(C)}function it(){for(const C of p){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):j(S))}p.clear(),d.clear()}function at(C){const S=n.get(C);if(S.__webglInit===void 0)return;const $=C.source,yt=u.get($);if(yt){const mt=yt[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&Y(C),Object.keys(yt).length===0&&u.delete($)}n.remove(C)}function Y(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const $=C.source,yt=u.get($);delete yt[S.__cacheKey],o.memory.textures--}function H(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const $=C.depthTexture;if($&&$.renderTarget===C&&j($),C.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(S.__webglFramebuffer[mt]))for(let Nt=0;Nt<S.__webglFramebuffer[mt].length;Nt++)s.deleteFramebuffer(S.__webglFramebuffer[mt][Nt]);else s.deleteFramebuffer(S.__webglFramebuffer[mt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[mt])}else{if(Array.isArray(S.__webglFramebuffer))for(let mt=0;mt<S.__webglFramebuffer.length;mt++)s.deleteFramebuffer(S.__webglFramebuffer[mt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let mt=0;mt<S.__webglColorRenderbuffer.length;mt++)S.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[mt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const yt=C.textures;for(let mt=0,Nt=yt.length;mt<Nt;mt++){const kt=n.get(yt[mt]);kt.__webglTexture&&(s.deleteTexture(kt.__webglTexture),o.memory.textures--),n.remove(yt[mt])}n.remove(C)}let nt=0;function ht(){nt=0}function wt(){return nt}function qt(C){nt=C}function ue(){const C=nt;return C>=i.maxTextures&&De("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),nt+=1,C}function pt(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Yt(C,S){const $=n.get(C);if(C.isVideoTexture&&jt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){const yt=C.image;if(yt===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{te($,C,S);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function se(C,S){const $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){te($,C,S);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function ge(C,S){const $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){te($,C,S);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function Zt(C,S){const $=n.get(C);if(C.version>0&&$.__version!==C.version){oe($,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const pe={[xi]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},Ze={[Nn]:s.NEAREST,[yd]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[Qo]:s.LINEAR_MIPMAP_NEAREST,[Fi]:s.LINEAR_MIPMAP_LINEAR},me={[xp]:s.NEVER,[Ld]:s.ALWAYS,[vp]:s.LESS,[Cd]:s.LEQUAL,[Mp]:s.EQUAL,[Pd]:s.GEQUAL,[yp]:s.GREATER,[Sp]:s.NOTEQUAL};function ye(C,S){if(S.type===_i&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Hn||S.magFilter===Qo||S.magFilter===Ir||S.magFilter===Fi||S.minFilter===Hn||S.minFilter===Qo||S.minFilter===Ir||S.minFilter===Fi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,pe[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,pe[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,pe[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Ze[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Ze[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nn||S.minFilter!==Ir&&S.minFilter!==Fi||S.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(C,S){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",X),F(S));const yt=S.source;let mt=u.get(yt);mt===void 0&&(mt={},u.set(yt,mt));const Nt=pt(S);if(Nt!==C.__cacheKey){mt[Nt]===void 0&&(mt[Nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),mt[Nt].usedTimes++;const kt=mt[C.__cacheKey];kt!==void 0&&(mt[C.__cacheKey].usedTimes--,kt.usedTimes===0&&Y(S)),C.__cacheKey=Nt,C.__webglTexture=mt[Nt].texture}return $}function Rt(C,S,$){return Math.floor(Math.floor(C/$)/S)}function Wt(C,S,$,yt){const Nt=C.updateRanges;if(Nt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,yt,S.data);else{Nt.sort((V,xt)=>V.start-xt.start);let kt=0;for(let V=1;V<Nt.length;V++){const xt=Nt[kt],_t=Nt[V],Vt=xt.start+xt.count,et=Rt(_t.start,S.width,4),q=Rt(xt.start,S.width,4);_t.start<=Vt+1&&et===q&&Rt(_t.start+_t.count-1,S.width,4)===et?xt.count=Math.max(xt.count,_t.start+_t.count-xt.start):(++kt,Nt[kt]=_t)}Nt.length=kt+1;const vt=e.getParameter(s.UNPACK_ROW_LENGTH),Tt=e.getParameter(s.UNPACK_SKIP_PIXELS),Dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let V=0,xt=Nt.length;V<xt;V++){const _t=Nt[V],Vt=Math.floor(_t.start/4),et=Math.ceil(_t.count/4),q=Vt%S.width,dt=Math.floor(Vt/S.width),Lt=et,_=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,q),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(s.TEXTURE_2D,0,q,dt,Lt,_,$,yt,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,vt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Dt)}}function te(C,S,$){let yt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(yt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(yt=s.TEXTURE_3D);const mt=Ee(C,S),Nt=S.source;e.bindTexture(yt,C.__webglTexture,s.TEXTURE0+$);const kt=n.get(Nt);if(Nt.version!==kt.__version||mt===!0){if(e.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const _=rn.getPrimaries(rn.workingColorSpace),z=S.colorSpace===ts?null:rn.getPrimaries(S.colorSpace),W=S.colorSpace===ts||_===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,W)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let Tt=M(S.image,!1,i.maxTextureSize);Tt=bt(S,Tt);const Dt=r.convert(S.format,S.colorSpace),V=r.convert(S.type);let xt=P(S.internalFormat,Dt,V,S.normalized,S.colorSpace,S.isVideoTexture);ye(yt,S);let _t;const Vt=S.mipmaps,et=S.isVideoTexture!==!0,q=kt.__version===void 0||mt===!0,dt=Nt.dataReady,Lt=b(S,Tt);if(S.isDepthTexture)xt=v(S.format===ms,S.type),q&&(et?e.texStorage2D(s.TEXTURE_2D,1,xt,Tt.width,Tt.height):e.texImage2D(s.TEXTURE_2D,0,xt,Tt.width,Tt.height,0,Dt,V,null));else if(S.isDataTexture)if(Vt.length>0){et&&q&&e.texStorage2D(s.TEXTURE_2D,Lt,xt,Vt[0].width,Vt[0].height);for(let _=0,z=Vt.length;_<z;_++)_t=Vt[_],et?dt&&e.texSubImage2D(s.TEXTURE_2D,_,0,0,_t.width,_t.height,Dt,V,_t.data):e.texImage2D(s.TEXTURE_2D,_,xt,_t.width,_t.height,0,Dt,V,_t.data);S.generateMipmaps=!1}else et?(q&&e.texStorage2D(s.TEXTURE_2D,Lt,xt,Tt.width,Tt.height),dt&&Wt(S,Tt,Dt,V)):e.texImage2D(s.TEXTURE_2D,0,xt,Tt.width,Tt.height,0,Dt,V,Tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&q&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,xt,Vt[0].width,Vt[0].height,Tt.depth);for(let _=0,z=Vt.length;_<z;_++)if(_t=Vt[_],S.format!==Ti)if(Dt!==null)if(et){if(dt)if(S.layerUpdates.size>0){const W=wu(_t.width,_t.height,S.format,S.type);for(const O of S.layerUpdates){const rt=_t.data.subarray(O*W/_t.data.BYTES_PER_ELEMENT,(O+1)*W/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,O,_t.width,_t.height,1,Dt,rt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,_t.width,_t.height,Tt.depth,Dt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_,xt,_t.width,_t.height,Tt.depth,0,_t.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,_t.width,_t.height,Tt.depth,Dt,V,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,_,xt,_t.width,_t.height,Tt.depth,0,Dt,V,_t.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&q&&e.texStorage2D(s.TEXTURE_2D,Lt,xt,Vt[0].width,Vt[0].height);for(let _=0,z=Vt.length;_<z;_++)_t=Vt[_],S.format!==Ti?Dt!==null?et?dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,_,0,0,_t.width,_t.height,Dt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,_,xt,_t.width,_t.height,0,_t.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?dt&&e.texSubImage2D(s.TEXTURE_2D,_,0,0,_t.width,_t.height,Dt,V,_t.data):e.texImage2D(s.TEXTURE_2D,_,xt,_t.width,_t.height,0,Dt,V,_t.data)}else if(S.isDataArrayTexture)if(et){if(q&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,xt,Tt.width,Tt.height,Tt.depth),dt)if(S.layerUpdates.size>0){const _=wu(Tt.width,Tt.height,S.format,S.type);for(const z of S.layerUpdates){const W=Tt.data.subarray(z*_/Tt.data.BYTES_PER_ELEMENT,(z+1)*_/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,z,Tt.width,Tt.height,1,Dt,V,W)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Dt,V,Tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,Tt.width,Tt.height,Tt.depth,0,Dt,V,Tt.data);else if(S.isData3DTexture)et?(q&&e.texStorage3D(s.TEXTURE_3D,Lt,xt,Tt.width,Tt.height,Tt.depth),dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Dt,V,Tt.data)):e.texImage3D(s.TEXTURE_3D,0,xt,Tt.width,Tt.height,Tt.depth,0,Dt,V,Tt.data);else if(S.isFramebufferTexture){if(q)if(et)e.texStorage2D(s.TEXTURE_2D,Lt,xt,Tt.width,Tt.height);else{let _=Tt.width,z=Tt.height;for(let W=0;W<Lt;W++)e.texImage2D(s.TEXTURE_2D,W,xt,_,z,0,Dt,V,null),_>>=1,z>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const _=s.canvas;if(_.hasAttribute("layoutsubtree")||_.setAttribute("layoutsubtree","true"),Tt.parentNode!==_){_.appendChild(Tt),d.add(S),_.onpaint=z=>{const W=z.changedElements;for(const O of d)W.includes(O.image)&&(O.needsUpdate=!0)},_.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Tt);else{const W=s.RGBA,O=s.RGBA,rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,W,O,rt,Tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(et&&q){const _=lt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,Lt,xt,_.width,_.height)}for(let _=0,z=Vt.length;_<z;_++)_t=Vt[_],et?dt&&e.texSubImage2D(s.TEXTURE_2D,_,0,0,Dt,V,_t):e.texImage2D(s.TEXTURE_2D,_,xt,Dt,V,_t);S.generateMipmaps=!1}else if(et){if(q){const _=lt(Tt);e.texStorage2D(s.TEXTURE_2D,Lt,xt,_.width,_.height)}dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,V,Tt)}else e.texImage2D(s.TEXTURE_2D,0,xt,Dt,V,Tt);E(S)&&S.mipmapsAutoUpdate===!0&&w(yt),kt.__version=Nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,$){if(S.image.length!==6)return;const yt=Ee(C,S),mt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+$);const Nt=n.get(mt);if(mt.version!==Nt.__version||yt===!0){e.activeTexture(s.TEXTURE0+$);const kt=rn.getPrimaries(rn.workingColorSpace),vt=S.colorSpace===ts?null:rn.getPrimaries(S.colorSpace),Tt=S.colorSpace===ts||kt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,V=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let O=0;O<6;O++)!Dt&&!V?xt[O]=M(S.image[O],!0,i.maxCubemapSize):xt[O]=V?S.image[O].image:S.image[O],xt[O]=bt(S,xt[O]);const _t=xt[0],Vt=r.convert(S.format,S.colorSpace),et=r.convert(S.type);let q=P(S.internalFormat,Vt,et,S.normalized,S.colorSpace);const dt=S.isVideoTexture!==!0,Lt=Nt.__version===void 0||yt===!0,_=mt.dataReady;let z=b(S,_t);ye(s.TEXTURE_CUBE_MAP,S);let W;if(S.isDepthTexture){if(q=v(S.format===ms,S.type),Lt)if(dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,q,_t.width,_t.height);else for(let O=0;O<6;O++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,q,_t.width,_t.height,0,Vt,et,null)}else if(Dt){dt&&Lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,z,q,_t.width,_t.height);for(let O=0;O<6;O++){W=xt[O].mipmaps;for(let rt=0;rt<W.length;rt++){const ct=W[rt];S.format!==Ti?Vt!==null?dt?_&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt,0,0,ct.width,ct.height,Vt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt,q,ct.width,ct.height,0,ct.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt,0,0,ct.width,ct.height,Vt,et,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt,q,ct.width,ct.height,0,Vt,et,ct.data)}}}else{if(W=S.mipmaps,dt&&Lt){W.length>0&&z++;const O=lt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,z,q,O.width,O.height)}for(let O=0;O<6;O++)if(V){dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,xt[O].width,xt[O].height,Vt,et,xt[O].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,q,xt[O].width,xt[O].height,0,Vt,et,xt[O].data);for(let rt=0;rt<W.length;rt++){const Gt=W[rt].image[O].image;dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt+1,0,0,Gt.width,Gt.height,Vt,et,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt+1,q,Gt.width,Gt.height,0,Vt,et,Gt.data)}}else{dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Vt,et,xt[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,q,Vt,et,xt[O]);for(let rt=0;rt<W.length;rt++){const ct=W[rt];dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt+1,0,0,Vt,et,ct.image[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,rt+1,q,Vt,et,ct.image[O])}}}E(S)&&S.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),Nt.__version=mt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ee(C,S,$,yt,mt,Nt){const kt=r.convert($.format,$.colorSpace),vt=r.convert($.type),Tt=P($.internalFormat,kt,vt,$.normalized,$.colorSpace),Dt=n.get(S),V=n.get($);if(V.__renderTarget=S,!Dt.__hasExternalTextures){const xt=Math.max(1,S.width>>Nt),_t=Math.max(1,S.height>>Nt);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,Nt,Tt,xt,_t,S.depth,0,kt,vt,null):e.texImage2D(mt,Nt,Tt,xt,_t,0,kt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ct(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,mt,V.__webglTexture,0,Xt(S)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,yt,mt,V.__webglTexture,Nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(C,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const yt=S.depthTexture,mt=yt&&yt.isDepthTexture?yt.type:null,Nt=v(S.stencilBuffer,mt),kt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ct(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(S),Nt,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(S),Nt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Nt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,kt,s.RENDERBUFFER,C)}else{const yt=S.textures;for(let mt=0;mt<yt.length;mt++){const Nt=yt[mt],kt=r.convert(Nt.format,Nt.colorSpace),vt=r.convert(Nt.type),Tt=P(Nt.internalFormat,kt,vt,Nt.normalized,Nt.colorSpace);Ct(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(S),Tt,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(S),Tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(C,S,$){const yt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const mt=n.get(S.depthTexture);mt.__renderTarget=S;const Nt=yt?S.depthTexture.image[0]:S.depthTexture.image;(!mt.__webglTexture||Nt.width!==S.width||Nt.height!==S.height)&&(Nt.width=S.width,Nt.height=S.height,S.depthTexture.needsUpdate=!0),yt?Zt(S.depthTexture,0):Yt(S.depthTexture,0);const kt=mt.__webglTexture,vt=Xt(S),Tt=yt?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,Dt=S.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===_s)Ct(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,Tt,kt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,Tt,kt,0);else if(S.depthTexture.format===ms)Ct(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,Tt,kt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,Tt,kt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(C){const S=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const yt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),yt){const mt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,yt.removeEventListener("dispose",mt)};yt.addEventListener("dispose",mt),S.__depthDisposeCallback=mt}S.__boundDepthTexture=yt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let yt=0;yt<6;yt++)de(S.__webglFramebuffer[yt],C,yt);else C.texture.mipmaps.length>0?de(S.__webglFramebuffer[0],C,0):de(S.__webglFramebuffer,C,0);else if($){S.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[yt]),S.__webglDepthbuffer[yt]===void 0)S.__webglDepthbuffer[yt]=s.createRenderbuffer(),ae(S.__webglDepthbuffer[yt],C,!1);else{const mt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer[yt];s.bindRenderbuffer(s.RENDERBUFFER,Nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,Nt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ae(S.__webglDepthbuffer,C,!1);else{const mt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,Nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(C,S,$){const yt=n.get(C);S!==void 0&&ee(yt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Mt(C)}function Ot(C){const S=C.texture,$=n.get(C),yt=n.get(S);C.addEventListener("dispose",st),F(C);const mt=C.textures,Nt=C.isWebGLCubeRenderTarget===!0,kt=mt.length>1;if(kt||(yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture()),yt.__version=S.version,o.memory.textures++),Nt){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps.length>0){$.__webglFramebuffer[vt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)$.__webglFramebuffer[vt][Tt]=s.createFramebuffer()}else $.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(S.mipmaps.length>0){$.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)$.__webglFramebuffer[vt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(kt)for(let vt=0,Tt=mt.length;vt<Tt;vt++){const Dt=n.get(mt[vt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Ct(C)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let vt=0;vt<mt.length;vt++){const Tt=mt[vt];$.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[vt]);const Dt=r.convert(Tt.format,Tt.colorSpace),V=r.convert(Tt.type),xt=P(Tt.internalFormat,Dt,V,Tt.normalized,Tt.colorSpace,C.isXRRenderTarget===!0),_t=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,$.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ae($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),ye(s.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)ee($.__webglFramebuffer[vt][Tt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt);else ee($.__webglFramebuffer[vt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(S)?w(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(kt){for(let vt=0,Tt=mt.length;vt<Tt;vt++){const Dt=mt[vt],V=n.get(Dt);let xt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,V.__webglTexture),ye(xt,Dt),ee($.__webglFramebuffer,C,Dt,s.COLOR_ATTACHMENT0+vt,xt,0),E(Dt)&&w(xt)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,yt.__webglTexture),ye(vt,S),S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)ee($.__webglFramebuffer[Tt],C,S,s.COLOR_ATTACHMENT0,vt,Tt);else ee($.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,vt,0);E(S)?w(vt):S.mipmaps.length>0&&s.texParameteri(vt,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Mt(C)}function L(C){const S=C.textures;for(let $=0,yt=S.length;$<yt;$++){const mt=S[$];if(E(mt)&&mt.mipmapsAutoUpdate===!0){const Nt=I(C),kt=n.get(mt).__webglTexture;e.bindTexture(Nt,kt),w(Nt),e.unbindTexture()}}}const Qt=[];function Jt(C){if(C.samples>0){if(Ct(C)===!1){const S=C.textures,$=C.width,yt=C.height;let mt=s.COLOR_BUFFER_BIT;const Nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,kt=n.get(C),vt=S.length>1;if(vt)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,kt.__webglColorRenderbuffer[Dt]);const V=n.get(S[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,$,yt,0,0,$,yt,mt,s.NEAREST),l===!0&&(Qt.length=0,Qt.push(s.COLOR_ATTACHMENT0+Dt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Qt.push(Nt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,kt.__webglColorRenderbuffer[Dt]);const V=n.get(S[Dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,V,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Xt(C){return Math.min(i.maxSamples,C.samples)}function Ct(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function jt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function bt(C,S){const $=C.colorSpace,yt=C.format,mt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==di&&$!==ts&&(rn.getTransfer($)===fn?(yt!==Ti||mt!==hi)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",$)),S}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ue,this.resetTextureUnits=ht,this.getTextureUnits=wt,this.setTextureUnits=qt,this.setTexture2D=Yt,this.setTexture2DArray=se,this.setTexture3D=ge,this.setTextureCube=Zt,this.rebindTextures=zt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ct,this.dispose=it}function bM(s,t){function e(n,i=ts){let r;const o=rn.getTransfer(i);if(n===hi)return s.UNSIGNED_BYTE;if(n===Bc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Td)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sd)return s.BYTE;if(n===bd)return s.SHORT;if(n===Jr)return s.UNSIGNED_SHORT;if(n===Fc)return s.INT;if(n===Ai)return s.UNSIGNED_INT;if(n===_i)return s.FLOAT;if(n===$n)return s.HALF_FLOAT;if(n===Ed)return s.ALPHA;if(n===Ad)return s.RGB;if(n===Ti)return s.RGBA;if(n===_s)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===Ra)return s.RED;if(n===kc)return s.RED_INTEGER;if(n===Ts)return s.RG;if(n===Gc)return s.RG_INTEGER;if(n===Hc)return s.RGBA_INTEGER;if(n===jo||n===ta||n===ea||n===na)if(o===fn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Bl||n===zl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Hl||n===Vl||n===Wl||n===Xl||n===ha||n===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Hl)return o===fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Kl||n===Zl||n===Jl||n===$l||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===ua||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
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

}`;class EM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:wM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends as{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new EM,g={},M=e.getContextAttributes();let E=null,w=null;const I=[],P=[],v=new Ut;let b=null,F=null;const U=new oi;U.viewport=new _n;const X=new oi;X.viewport=new _n;const st=[U,X],j=new bm;let N=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let Yt=I[pt];return Yt===void 0&&(Yt=new Ka,I[pt]=Yt),Yt.getTargetRaySpace()},this.getControllerGrip=function(pt){let Yt=I[pt];return Yt===void 0&&(Yt=new Ka,I[pt]=Yt),Yt.getGripSpace()},this.getHand=function(pt){let Yt=I[pt];return Yt===void 0&&(Yt=new Ka,I[pt]=Yt),Yt.getHandSpace()};function at(pt){const Yt=P.indexOf(pt.inputSource);if(Yt===-1)return;const se=I[Yt];se!==void 0&&(se.update(pt.inputSource,pt.frame,c||o),se.dispatchEvent({type:pt.type,data:pt.inputSource}))}function Y(){i.removeEventListener("select",at),i.removeEventListener("selectstart",at),i.removeEventListener("selectend",at),i.removeEventListener("squeeze",at),i.removeEventListener("squeezestart",at),i.removeEventListener("squeezeend",at),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",H);for(let pt=0;pt<I.length;pt++){const Yt=P[pt];Yt!==null&&(P[pt]=null,I[pt].disconnect(Yt))}N=null,it=null,m.reset();for(const pt in g)delete g[pt];if(t.setRenderTarget(E),u=null,f=null,d=null,i=null,w=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),F!==null){const pt=F.camera;pt.fov=F.fov,pt.zoom=F.zoom,pt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){a=pt,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(pt){c=pt},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(pt){if(i=pt,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",at),i.addEventListener("selectstart",at),i.addEventListener("selectend",at),i.addEventListener("squeeze",at),i.addEventListener("squeezestart",at),i.addEventListener("squeezeend",at),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ge=null,Zt=null;M.depth&&(Zt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,se=M.stencil?ms:_s,ge=M.stencil?sr:Ai);const pe={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(pe),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Qn(f.textureWidth,f.textureHeight,{format:Ti,type:hi,depthTexture:new Es(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,se),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Qn(u.framebufferWidth,u.framebufferHeight,{format:Ti,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(pt){for(let Yt=0;Yt<pt.removed.length;Yt++){const se=pt.removed[Yt],ge=P.indexOf(se);ge>=0&&(P[ge]=null,I[ge].disconnect(se))}for(let Yt=0;Yt<pt.added.length;Yt++){const se=pt.added[Yt];let ge=P.indexOf(se);if(ge===-1){for(let pe=0;pe<I.length;pe++)if(pe>=P.length){P.push(se),ge=pe;break}else if(P[pe]===null){P[pe]=se,ge=pe;break}if(ge===-1)break}const Zt=I[ge];Zt&&Zt.connect(se)}}function nt(pt,Yt){Yt===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(Yt.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(i===null)return;let Yt=pt.near,se=pt.far;m.texture!==null&&(m.depthNear>0&&(Yt=m.depthNear),m.depthFar>0&&(se=m.depthFar)),j.near=X.near=U.near=Yt,j.far=X.far=U.far=se,(N!==j.near||it!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,it=j.far),j.layers.mask=pt.layers.mask|6,U.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const ge=pt.parent,Zt=j.cameras;nt(j,ge);for(let pe=0;pe<Zt.length;pe++)nt(Zt[pe],ge);j.projectionMatrix.copy(U.projectionMatrix),j.projectionMatrixInverse.copy(U.projectionMatrixInverse),F===null&&pt.isPerspectiveCamera&&(F={camera:pt,fov:pt.fov,zoom:pt.zoom}),ht(pt,j,ge)};function ht(pt,Yt,se){se===null?pt.matrix.copy(Yt.matrixWorld):(pt.matrix.copy(se.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(Yt.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(Yt.projectionMatrix),pt.projectionMatrixInverse.copy(Yt.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=rr*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(pt){l=pt,f!==null&&(f.fixedFoveation=pt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=pt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(pt){return g[pt]};let wt=null;function qt(pt,Yt){if(h=Yt.getViewerPose(c||o),p=Yt,h!==null){const se=h.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let ge=!1;se.length!==j.cameras.length&&(j.cameras.length=0,ge=!0);for(let me=0;me<se.length;me++){const ye=se[me];let Ee=null;if(u!==null)Ee=u.getViewport(ye);else{const Wt=d.getViewSubImage(f,ye);Ee=Wt.viewport,me===0&&(t.setRenderTargetTextures(w,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(w))}let Rt=st[me];Rt===void 0&&(Rt=new oi,Rt.layers.enable(me),Rt.viewport=new _n,st[me]=Rt),Rt.matrix.fromArray(ye.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(ye.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),me===0&&(j.matrix.copy(Rt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ge===!0&&j.cameras.push(Rt)}const Zt=i.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const me=d.getDepthInformation(se[0]);me&&me.isValid&&me.texture&&m.init(me,i.renderState)}if(Zt&&Zt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let me=0;me<se.length;me++){const ye=se[me].camera;if(ye){let Ee=g[ye];Ee||(Ee=new Xd,g[ye]=Ee);const Rt=d.getCameraImage(ye);Ee.sourceTexture=Rt}}}}for(let se=0;se<I.length;se++){const ge=P[se],Zt=I[se];ge!==null&&Zt!==void 0&&Zt.update(ge,Yt,c||o)}wt&&wt(pt,Yt),Yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Yt}),p=null}const ue=new uf;ue.setAnimationLoop(qt),this.setAnimationLoop=function(pt){wt=pt},this.dispose=function(){}}}const RM=new ze,yf=new Ke;yf.set(-1,0,0,0,1,0,0,0,1);function CM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,tf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,E,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),E=M.envMap,w=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PM(s,t,e,n){let i={},r={};function o(M,E){const w=E.program;n.uniformBlockBinding(M,w,i[M.id])}function a(M,E){let w=i[M.id];w===void 0&&(p(M),w=l(M),i[M.id]=w,M.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(M,I);const P=t.render.frame;r[M.id]!==P&&(c(M),r[M.id]=P)}function l(M){const E=s.createBuffer(),w=M.__size,I=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,w,I),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(M){const E=i[M.id],w=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,v=w.length;P<v;P++){const b=w[P];if(Array.isArray(b))for(let F=0,U=b.length;F<U;F++)h(b[F],P,F,I);else h(b,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,E,w,I){if(f(M,E,w,I)===!0){const P=M.__offset,v=M.value;if(Array.isArray(v)){let b=0;for(let F=0;F<v.length;F++){const U=v[F],X=x(U,!0);d(U,M.__data,b),b+=X.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,M.__data)}}function d(M,E,w){typeof M=="number"||typeof M=="boolean"?E[w]=M:M.isMatrix3?(E[w]=M.elements[0],E[w+1]=M.elements[1],E[w+2]=M.elements[2],E[w+3]=0,E[w+4]=M.elements[3],E[w+5]=M.elements[4],E[w+6]=M.elements[5],E[w+7]=0,E[w+8]=M.elements[6],E[w+9]=M.elements[7],E[w+10]=M.elements[8],E[w+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-w),w):M.toArray(E,w)}function f(M,E,w,I){const P=M.value,v=E+"_"+w;if(Array.isArray(P)){I[v]===void 0&&(I[v]=[]);const b=I[v];let F=!1;for(let U=0;U<P.length;U++)u(P[U],b,U)===!0&&(F=!0);return F}return u(P,I,v)}function u(M,E,w){if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:ArrayBuffer.isView(M)?E[w]=M.slice():E[w]=M.clone(),!0;{const I=E[w];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return E[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function p(M){const E=M.uniforms;let w=0;const I=16;for(let v=0,b=E.length;v<b;v++){const F=Array.isArray(E[v])?E[v]:[E[v]];for(let U=0,X=F.length;U<X;U++){const st=F[U],j=Array.isArray(st.value)?st.value:[st.value],N=Array.isArray(E[v])||Array.isArray(st.value);let it=w;for(let Y=0,H=j.length;Y<H;Y++){const nt=j[Y],ht=x(nt,N),wt=w%I,qt=wt%ht.boundary,ue=wt+qt;w+=qt,ue!==0&&I-ue<ht.storage&&(w+=I-ue),Y===0&&(it=w),w+=ht.storage}const at=st.type==="int"?Int32Array:st.type==="uint"?Uint32Array:Float32Array;st.__data=new at((w-it)/Float32Array.BYTES_PER_ELEMENT),st.__offset=it}}const P=w%I;return P>0&&(w+=I-P),M.__size=w,M.__cache={},this}function x(M,E){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(M){const E=M.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:g}}const LM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function DM(){return Di===null&&(Di=new Pa(LM,16,16,Ts,$n),Di.name="DFG_LUT",Di.minFilter=Hn,Di.magFilter=Hn,Di.wrapS=ii,Di.wrapT=ii,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class IM{constructor(t={}){const{canvas:e=Tp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=hi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=u,m=new Set([Hc,Gc,kc]),g=new Set([hi,Ai,Jr,sr,Bc,zc]),M=new Uint32Array(4),E=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const v=[],b=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let X=!1,st=null,j=null,N=null,it=null;this._outputColorSpace=In;let at=0,Y=0,H=null,nt=-1,ht=null;const wt=new _n,qt=new _n;let ue=null;const pt=new Te(0);let Yt=0,se=e.width,ge=e.height,Zt=1,pe=null,Ze=null;const me=new _n(0,0,se,ge),ye=new _n(0,0,se,ge);let Ee=!1;const Rt=new so,Wt=new $c;let te=!1,oe=!1;const ee=new ze,ae=new k,de=new _n,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Ot(){return H===null?Zt:1}let L=n;function Qt(y,R){return e.getContext(y,R)}let Jt,Xt,Ct,jt,bt,lt,C,S,$,yt,mt,Nt,kt,vt,Tt,Dt,V,xt,_t,Vt,et,q,dt;try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",O,!1),L===null){const R="webgl2";if(L=Qt(R,y),L===null)throw Qt(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(y){throw e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",O,!1),ke("WebGLRenderer: "+y.message),y}function Lt(){Jt=new Ox(L),Jt.init(),et=new bM(L,Jt),Xt=new Tx(L,Jt,t,et),Ct=new yM(L,Jt),Xt.reversedDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),j=L.createFramebuffer(),N=L.createFramebuffer(),it=L.createFramebuffer(),jt=new zx(L),bt=new aM,lt=new SM(L,Jt,Ct,bt,Xt,et,jt),C=new Ux(U),S=new Gm(L),q=new bx(L,S),$=new Fx(L,S,jt,q),yt=new Gx(L,$,S,q,jt),xt=new kx(L,Xt,lt),Tt=new Ex(bt),mt=new oM(U,C,Jt,Xt,q,Tt),Nt=new CM(U,bt),kt=new cM,vt=new mM(Jt),V=new Sx(U,C,Ct,yt,p,l),Dt=new MM(U,yt,Xt),dt=new PM(L,jt,Xt,Ct),_t=new wx(L,Jt,jt),Vt=new Bx(L,Jt,jt),jt.programs=mt.programs,U.capabilities=Xt,U.extensions=Jt,U.properties=bt,U.renderLists=kt,U.shadowMap=Dt,U.state=Ct,U.info=jt}x!==hi&&(F=new Vx(x,e.width,e.height,a,i,r));const _=new AM(U,L);this.xr=_,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Jt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Jt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Zt},this.setPixelRatio=function(y){y!==void 0&&(Zt=y,this.setSize(se,ge,!1))},this.getSize=function(y){return y.set(se,ge)},this.setSize=function(y,R,Q=!0){if(_.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}se=y,ge=R,e.width=Math.floor(y*Zt),e.height=Math.floor(R*Zt),Q===!0&&(e.style.width=y+"px",e.style.height=R+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(se*Zt,ge*Zt).floor()},this.setDrawingBufferSize=function(y,R,Q){se=y,ge=R,Zt=Q,e.width=Math.floor(y*Q),e.height=Math.floor(R*Q),this.setViewport(0,0,y,R)},this.setEffects=function(y){if(x===hi){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let R=0;R<y.length;R++)if(y[R].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(wt)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,R,Q,B){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,R,Q,B),Ct.viewport(wt.copy(me).multiplyScalar(Ot()).round())},this.getScissor=function(y){return y.copy(ye)},this.setScissor=function(y,R,Q,B){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,R,Q,B),Ct.scissor(qt.copy(ye).multiplyScalar(Ot()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(y){Ct.setScissorTest(Ee=y)},this.setOpaqueSort=function(y){pe=y},this.setTransparentSort=function(y){Ze=y},this.getClearColor=function(y){return y.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(y=!0,R=!0,Q=!0){let B=0;if(y){let K=!1;if(H!==null){const ft=H.texture.format;K=m.has(ft)}if(K){const ft=H.texture.type,It=g.has(ft),Ft=V.getClearColor(),Bt=V.getClearAlpha(),ne=Ft.r,le=Ft.g,he=Ft.b;It?(M[0]=ne,M[1]=le,M[2]=he,M[3]=Bt,L.clearBufferuiv(L.COLOR,0,M)):(E[0]=ne,E[1]=le,E[2]=he,E[3]=Bt,L.clearBufferiv(L.COLOR,0,E))}else B|=L.COLOR_BUFFER_BIT}R&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),st=y},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",O,!1),V.dispose(),kt.dispose(),vt.dispose(),lt.dispose(),bt.dispose(),C.dispose(),yt.dispose(),$.dispose(),q.dispose(),dt.dispose(),mt.dispose(),_.dispose(),_.removeEventListener("sessionstart",Ve),_.removeEventListener("sessionend",Pe),Kt.stop()};function z(y){y.preventDefault(),pa("WebGLRenderer: Context Lost."),X=!0}function W(){pa("WebGLRenderer: Context Restored."),X=!1;const y=jt.autoReset,R=Dt.enabled,Q=Dt.autoUpdate,B=Dt.needsUpdate,K=Dt.type;Lt(),jt.autoReset=y,Dt.enabled=R,Dt.autoUpdate=Q,Dt.needsUpdate=B,Dt.type=K}function O(y){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){const R=y.target;R.removeEventListener("dispose",rt),ct(R)}function ct(y){Gt(y),bt.remove(y)}function Gt(y){const R=bt.get(y).programs;R!==void 0&&(R.forEach(function(Q){mt.releaseProgram(Q)}),y.isShaderMaterial&&mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,Q,B,K,ft){R===null&&(R=Mt);const It=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ft=tt(y,R,Q,B,K);Ct.setMaterial(B,It);let Bt=Q.index,ne=1;if(B.wireframe===!0){if(Bt=$.getWireframeAttribute(Q),Bt===void 0)return;ne=2}const le=Q.drawRange,he=Q.attributes.position;let re=le.start*ne,Ie=(le.start+le.count)*ne;ft!==null&&(re=Math.max(re,ft.start*ne),Ie=Math.min(Ie,(ft.start+ft.count)*ne)),Bt!==null?(re=Math.max(re,0),Ie=Math.min(Ie,Bt.count)):he!=null&&(re=Math.max(re,0),Ie=Math.min(Ie,he.count));const Oe=Ie-re;if(Oe<0||Oe===1/0)return;q.setup(K,B,Ft,Q,Bt);let Le,Ge=_t;if(Bt!==null&&(Le=S.get(Bt),Ge=Vt,Ge.setIndex(Le)),K.isMesh)B.wireframe===!0?(Ct.setLineWidth(B.wireframeLinewidth*Ot()),Ge.setMode(L.LINES)):Ge.setMode(L.TRIANGLES);else if(K.isLine){let dn=B.linewidth;dn===void 0&&(dn=1),Ct.setLineWidth(dn*Ot()),K.isLineSegments?Ge.setMode(L.LINES):K.isLineLoop?Ge.setMode(L.LINE_LOOP):Ge.setMode(L.LINE_STRIP)}else K.isPoints?Ge.setMode(L.POINTS):K.isSprite&&Ge.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const dn=K._multiDrawStarts,Me=K._multiDrawCounts,xn=K._multiDrawCount,We=Bt?S.get(Bt).bytesPerElement:1,Wn=bt.get(B).currentProgram.getUniforms();for(let gn=0;gn<xn;gn++)Wn.setValue(L,"_gl_DrawID",gn),Ge.render(dn[gn]/We,Me[gn])}else if(K.isInstancedMesh)Ge.renderInstances(re,Oe,K.count);else if(Q.isInstancedBufferGeometry){const dn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Me=Math.min(Q.instanceCount,dn);Ge.renderInstances(re,Oe,Me)}else Ge.render(re,Oe)};function we(y,R,Q,B){st!==null&&y.isNodeMaterial&&st.setObject(B,y),te===!0&&Tt.setState(y,Q,!1),y.transparent===!0&&y.side===Sn&&y.forceSinglePass===!1?(y.side=Jn,y.needsUpdate=!0,G(y,R,B),y.side=gs,y.needsUpdate=!0,G(y,R,B),y.side=Sn):G(y,R,B)}this.compile=function(y,R,Q=null){Q===null&&(Q=y),st!==null&&st.renderStart(y,R,Q),P=vt.get(Q),P.init(R),b.push(P),Q.traverseVisible(function(K){K.isLight&&K.layers.test(R.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),y!==Q&&y.traverseVisible(function(K){K.isLight&&K.layers.test(R.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights(),st!==null&&st.updateLights(P.state.lightsArray),oe=this.localClippingEnabled,te=Tt.init(this.clippingPlanes,oe),te===!0&&Tt.setGlobalState(this.clippingPlanes,R),st!==null&&Dt.render(P.state.shadowsArray,Q,R);const B=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const ft=K.material;if(ft)if(Array.isArray(ft))for(let It=0;It<ft.length;It++){const Ft=ft[It];we(Ft,Q,R,K),B.add(Ft)}else we(ft,Q,R,K),B.add(ft)}),P=b.pop(),st!==null&&st.renderEnd(),B},this.compileAsync=function(y,R,Q=null){const B=this.compile(y,R,Q);return new Promise(K=>{function ft(){if(B.forEach(function(It){const Bt=bt.get(It).currentProgram;(Bt===void 0||Bt.isReady())&&B.delete(It)}),B.size===0){K(y);return}setTimeout(ft,10)}Jt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ce=null;function _e(y){Ce&&Ce(y)}function Ve(){Kt.stop()}function Pe(){Kt.start()}const Kt=new uf;Kt.setAnimationLoop(_e),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(y){Ce=y,_.setAnimationLoop(y),y===null?Kt.stop():Kt.start()},_.addEventListener("sessionstart",Ve),_.addEventListener("sessionend",Pe),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;st!==null&&st.renderStart(y,R);const Q=_.enabled===!0&&_.isPresenting===!0,B=F!==null&&(H===null||Q)&&F.begin(U,H);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(_.cameraAutoUpdate===!0&&_.updateCamera(R),R=_.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,R,H),P=vt.get(y,b.length),P.init(R),P.state.textureUnits=lt.getTextureUnits(),b.push(P),ee.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?Wt.setFromArrayCamera(R):Rt.setFromProjectionMatrix(ee,Ei,R.reversedDepth),oe=this.localClippingEnabled,te=Tt.init(this.clippingPlanes,oe),I=kt.get(y,v.length),I.init(),v.push(I),this.info.render.frame++,_.enabled===!0&&_.isPresenting===!0){const It=U.xr.getDepthSensingMesh();It!==null&&ce(It,R,-1/0,U.sortObjects)}ce(y,R,0,U.sortObjects),I.finish(),st!==null&&st.updateLights(P.state.lightsArray),U.sortObjects===!0&&I.sort(pe,Ze),zt=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,zt&&V.addToRenderList(I,y),this.info.autoReset===!0&&this.info.reset(),te===!0&&Tt.beginShadows();const K=P.state.shadowsArray;if(Dt.render(K,y,R),te===!0&&Tt.endShadows(),(B&&F.hasRenderPass())===!1){const It=I.opaque,Ft=I.transmissive;if(P.setupLights(),R.isArrayCamera){const Bt=R.cameras;if(Ft.length>0)for(let ne=0,le=Bt.length;ne<le;ne++){const he=Bt[ne];yn(It,Ft,y,he)}zt&&V.render(y);for(let ne=0,le=Bt.length;ne<le;ne++){const he=Bt[ne];un(I,y,he,he.viewport)}}else Ft.length>0&&yn(It,Ft,y,R),zt&&V.render(y),un(I,y,R)}H!==null&&Y===0&&(lt.updateMultisampleRenderTarget(H),lt.updateRenderTargetMipmap(H)),B&&F.end(U),y.isScene===!0&&y.onAfterRender(U,y,R),q.resetDefaultState(),nt=-1,ht=null,b.pop(),b.length>0?(P=b[b.length-1],lt.setTextureUnits(P.state.textureUnits),te===!0&&Tt.setGlobalState(U.clippingPlanes,P.state.camera)):P=null,v.pop(),v.length>0?I=v[v.length-1]:I=null,st!==null&&st.renderEnd()};function ce(y,R,Q,B){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)Q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){const It=R.isArrayCamera?Wt:Rt;if(!y.frustumCulled||y.intersectsFrustum(It)){B&&de.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);const Ft=yt.update(y),Bt=y.material;Bt.visible&&I.push(y,Ft,Bt,Q,de.z,null,R)}}else if(y.isMesh||y.isLine||y.isPoints){const It=R.isArrayCamera?Wt:Rt;if(!y.frustumCulled||y.intersectsFrustum(It)){const Ft=yt.update(y),Bt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),de.copy(y.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),de.copy(Ft.boundingSphere.center)),de.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(Bt)){const ne=Ft.groups;for(let le=0,he=ne.length;le<he;le++){const re=ne[le],Ie=Bt[re.materialIndex];Ie&&Ie.visible&&I.push(y,Ft,Ie,Q,de.z,re,R)}}else Bt.visible&&I.push(y,Ft,Bt,Q,de.z,null,R)}}}const ft=y.children;for(let It=0,Ft=ft.length;It<Ft;It++)ce(ft[It],R,Q,B)}function un(y,R,Q,B){const{opaque:K,transmissive:ft,transparent:It}=y;P.setupLightsView(Q),te===!0&&Tt.setGlobalState(U.clippingPlanes,Q),B&&Ct.viewport(wt.copy(B)),K.length>0&&En(K,R,Q),ft.length>0&&En(ft,R,Q),It.length>0&&En(It,R,Q),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function yn(y,R,Q,B){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[B.id]===void 0){const re=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[B.id]=new Qn(1,1,{generateMipmaps:!0,type:re?$n:hi,minFilter:Fi,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rn.workingColorSpace})}const ft=P.state.transmissionRenderTarget[B.id],It=B.viewport||wt;ft.setSize(It.z*U.transmissionResolutionScale,It.w*U.transmissionResolutionScale);const Ft=U.getRenderTarget(),Bt=U.getActiveCubeFace(),ne=U.getActiveMipmapLevel();U.setRenderTarget(ft),U.getClearColor(pt),Yt=U.getClearAlpha(),Yt<1&&U.setClearColor(16777215,.5),U.clear(),zt&&V.render(Q);const le=U.toneMapping;U.toneMapping=ss;const he=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),P.setupLightsView(B),te===!0&&Tt.setGlobalState(U.clippingPlanes,B),En(y,Q,B),lt.updateMultisampleRenderTarget(ft),lt.updateRenderTargetMipmap(ft),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Ie=0,Oe=R.length;Ie<Oe;Ie++){const Le=R[Ie],{object:Ge,geometry:dn,material:Me,group:xn}=Le;if(Me.side===Sn&&Ge.layers.test(B.layers)){const We=Me.side;Me.side=Jn,Me.needsUpdate=!0,T(Ge,Q,B,dn,Me,xn),Me.side=We,Me.needsUpdate=!0,re=!0}}re===!0&&(lt.updateMultisampleRenderTarget(ft),lt.updateRenderTargetMipmap(ft))}U.setRenderTarget(Ft,Bt,ne),U.setClearColor(pt,Yt),he!==void 0&&(B.viewport=he),U.toneMapping=le}function En(y,R,Q){const B=R.isScene===!0?R.overrideMaterial:null;for(let K=0,ft=y.length;K<ft;K++){const It=y[K],{object:Ft,geometry:Bt,group:ne}=It;let le=It.material;le.allowOverride===!0&&B!==null&&(le=B),Ft.layers.test(Q.layers)&&T(Ft,R,Q,Bt,le,ne)}}function T(y,R,Q,B,K,ft){st!==null&&K.isNodeMaterial&&st.setObject(y,K),y.onBeforeRender(U,R,Q,B,K,ft),y.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(U,R,Q,B,y,ft),K.transparent===!0&&K.side===Sn&&K.forceSinglePass===!1?(K.side=Jn,K.needsUpdate=!0,U.renderBufferDirect(Q,R,B,K,y,ft),K.side=gs,K.needsUpdate=!0,U.renderBufferDirect(Q,R,B,K,y,ft),K.side=Sn):U.renderBufferDirect(Q,R,B,K,y,ft),y.onAfterRender(U,R,Q,B,K,ft)}function D(y){let R=0;for(const Q of y)Q.texture!==null&&R++;return R}function G(y,R,Q){R.isScene!==!0&&(R=Mt);const B=bt.get(y),K=P.state.lights,ft=P.state.shadowsArray,It=K.state.version,Ft=mt.getParameters(y,K.state,ft,R,Q,P.state.lightProbeGridArray),Bt=mt.getProgramCacheKey(Ft);let ne=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;const le=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=C.get(y.envMap||B.environment,le),B.envMapRotation=B.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,ne===void 0&&(y.addEventListener("dispose",rt),ne=new Map,B.programs=ne,B.programVariants=new Map);let he=ne.get(Bt);if(he!==void 0){if(B.currentProgram===he&&B.lightsStateVersion===It)return Et(y,Ft),he}else Ft.uniforms=mt.getUniforms(y),st!==null&&y.isNodeMaterial&&st.build(y,Q,Ft),y.onBeforeCompile(Ft,U),he=mt.acquireProgram(Ft,Bt),ne.set(Bt,he),B.uniforms=Ft.uniforms;const re=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(re.clippingPlanes=Tt.uniform),Et(y,Ft),B.needsLights=St(y),B.lightsStateVersion=It,B.needsLights&&(re.ambientLightColor.value=K.state.ambient,re.lightProbe.value=K.state.probe,re.sunLights.value=K.state.sun,re.sunLightShadows.value=K.state.sunShadow,re.directionalLights.value=K.state.directional,re.directionalLightShadows.value=K.state.directionalShadow,re.spotLights.value=K.state.spot,re.spotLightShadows.value=K.state.spotShadow,re.rectAreaLights.value=K.state.rectArea,re.ltc_1.value=K.state.rectAreaLTC1,re.ltc_2.value=K.state.rectAreaLTC2,re.pointLights.value=K.state.point,re.pointLightShadows.value=K.state.pointShadow,re.hemisphereLights.value=K.state.hemi,re.sunShadowMatrix.value=K.state.sunShadowMatrix,re.sunShadowCascade.value=K.state.sunShadowCascade,re.directionalShadowMatrix.value=K.state.directionalShadowMatrix,re.spotLightMatrix.value=K.state.spotLightMatrix,re.spotLightMap.value=K.state.spotLightMap,re.pointShadowMatrix.value=K.state.pointShadowMatrix),B.numLightProbeGrids=D(P.state.lightProbeGridArray),B.currentProgram=he,B.uniformsList=null,he}function J(y,R,Q,B,K){const ft=bt.get(y),It=ft.currentProgram.id+","+B+","+K;let Ft=ft.programVariants.get(It);return Ft===void 0?(Ft=G(y,R,Q),ft.programVariants.set(It,Ft)):(ft.currentProgram=Ft,ft.uniformsList=null,ft.outputColorSpace=B,ft.toneMapping=K),Ft}function ut(y){if(y.uniformsList===null){const R=y.currentProgram.getUniforms();y.uniformsList=sa.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function Et(y,R){const Q=bt.get(y);Q.outputColorSpace=R.outputColorSpace,Q.batching=R.batching,Q.batchingColor=R.batchingColor,Q.instancing=R.instancing,Q.instancingColor=R.instancingColor,Q.instancingMorph=R.instancingMorph,Q.skinning=R.skinning,Q.morphTargets=R.morphTargets,Q.morphNormals=R.morphNormals,Q.morphColors=R.morphColors,Q.morphTargetsCount=R.morphTargetsCount,Q.numClippingPlanes=R.numClippingPlanes,Q.numIntersection=R.numClipIntersection,Q.vertexAlphas=R.vertexAlphas,Q.vertexTangents=R.vertexTangents,Q.toneMapping=R.toneMapping}function tt(y,R,Q,B,K){R.isScene!==!0&&(R=Mt),lt.resetTextureUnits();const ft=R.fog,It=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,Ft=H===null?U.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:rn.workingColorSpace,Bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ne=C.get(B.envMap||It,Bt),le=B.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,he=!!Q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),re=!!Q.morphAttributes.position,Ie=!!Q.morphAttributes.normal,Oe=!!Q.morphAttributes.color;let Le=ss;B.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Le=U.toneMapping);const Ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,dn=Ge!==void 0?Ge.length:0,Me=bt.get(B),xn=P.state.lights;if(te===!0&&(oe===!0||y!==ht)){const Je=y===ht&&B.id===nt;Tt.setState(B,y,Je)}let We=!1,Wn=!1;B.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==xn.state.version||K.isBatchedMesh&&Me.batching===!1||!K.isBatchedMesh&&Me.batching===!0||K.isBatchedMesh&&Me.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Me.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Me.instancing===!1||!K.isInstancedMesh&&Me.instancing===!0||K.isSkinnedMesh&&Me.skinning===!1||!K.isSkinnedMesh&&Me.skinning===!0||K.isInstancedMesh&&Me.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Me.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Me.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Me.instancingMorph===!1&&K.morphTexture!==null||Me.envMap!==ne||B.fog===!0&&Me.fog!==ft||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Tt.numPlanes||Me.numIntersection!==Tt.numIntersection)||Me.vertexAlphas!==le||Me.vertexTangents!==he||Me.morphTargets!==re||Me.morphNormals!==Ie||Me.morphColors!==Oe||Me.morphTargetsCount!==dn||Me.numLightProbeGrids!==D(P.state.lightProbeGridArray)?We=!0:(Me.outputColorSpace!==Ft||Me.toneMapping!==Le)&&(Wn=!0):(We=!0,Me.__version=B.version);let gn=Me.currentProgram;(We===!0||Wn===!0)&&(gn=Wn===!0?J(B,R,K,Ft,Le):G(B,R,K),st&&B.isNodeMaterial&&st.onUpdateProgram(B,gn,Me));let ai=!1,Xn=!1,Yn=!1;const Re=gn.getUniforms(),qe=Me.uniforms;if(Ct.useProgram(gn.program)&&(ai=!0,Xn=!0,Yn=!0),B.id!==nt&&(nt=B.id,Xn=!0),ai||ht!==y){Ct.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Re.setValue(L,"projectionMatrix",y.projectionMatrix),Re.setValue(L,"viewMatrix",y.matrixWorldInverse);const Qe=Re.map.cameraPosition;Qe!==void 0&&Qe.setValue(L,ae.setFromMatrixPosition(y.matrixWorld)),Xt.logarithmicDepthBuffer&&Re.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Re.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),ht!==y&&(ht=y,Xn=!0,Yn=!0)}if(Me.needsLights&&(xn.state.sunShadowMap.length>0&&Re.setValue(L,"sunShadowMap",xn.state.sunShadowMap,lt),xn.state.directionalShadowMap.length>0&&Re.setValue(L,"directionalShadowMap",xn.state.directionalShadowMap,lt),xn.state.spotShadowMap.length>0&&Re.setValue(L,"spotShadowMap",xn.state.spotShadowMap,lt),xn.state.pointShadowMap.length>0&&Re.setValue(L,"pointShadowMap",xn.state.pointShadowMap,lt)),K.isSkinnedMesh){Re.setOptional(L,K,"bindMatrix"),Re.setOptional(L,K,"bindMatrixInverse");const Je=K.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Re.setValue(L,"boneTexture",Je.boneTexture,lt))}K.isBatchedMesh&&(Re.setOptional(L,K,"batchingTexture"),Re.setValue(L,"batchingTexture",K._matricesTexture,lt),Re.setOptional(L,K,"batchingIdTexture"),Re.setValue(L,"batchingIdTexture",K._indirectTexture,lt),Re.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Re.setValue(L,"batchingColorTexture",K._colorsTexture,lt));const on=Q.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&xt.update(K,Q,gn),(Xn||Me.receiveShadow!==K.receiveShadow)&&(Me.receiveShadow=K.receiveShadow,Re.setValue(L,"receiveShadow",K.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(qe.envMapIntensity.value=R.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=DM()),Xn){if(Re.setValue(L,"toneMappingExposure",U.toneMappingExposure),Me.needsLights&&A(qe,Yn),ft&&B.fog===!0&&Nt.refreshFogUniforms(qe,ft),Nt.refreshMaterialUniforms(qe,B,Zt,ge,P.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.numLightProbeGrids>0){const Je=w;let Qe=0;for(const Z of P.state.lightProbeGridArray)Z.texture!==null&&(Je.textures[Qe]=Z.texture,Je.min[Qe]=Z.boundingBox.min,Je.max[Qe]=Z.boundingBox.max,Je.resolution[Qe]=Z.resolution,Qe++);for(const Z in Je)Je[Z].length=Qe;qe.probesSH.value=Je.textures,qe.probesMin.value=Je.min,qe.probesMax.value=Je.max,qe.probesResolution.value=Je.resolution}sa.upload(L,ut(Me),qe,lt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(sa.upload(L,ut(Me),qe,lt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Re.setValue(L,"center",K.center),Re.setValue(L,"modelViewMatrix",K.modelViewMatrix),Re.setValue(L,"normalMatrix",K.normalMatrix),Re.setValue(L,"modelMatrix",K.matrixWorld),B.uniformsGroups!==void 0){const Je=B.uniformsGroups;for(let Qe=0,Z=Je.length;Qe<Z;Qe++){const gt=Je[Qe];dt.update(gt,gn),dt.bind(gt,gn)}}return gn}function A(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.sunLights.needsUpdate=R,y.sunLightShadows.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function St(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(y,R,Q){const B=bt.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),bt.get(y.texture).__webglTexture=R,bt.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,R){const Q=bt.get(y);Q.__webglFramebuffer=R,Q.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,Q=0){H=y,at=R,Y=Q;let B=null,K=!1,ft=!1;if(y){const Ft=bt.get(y);if(Ft.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(L.FRAMEBUFFER,Ft.__webglFramebuffer),wt.copy(y.viewport),qt.copy(y.scissor),ue=y.scissorTest,Ct.viewport(wt),Ct.scissor(qt),Ct.setScissorTest(ue),nt=-1;return}else if(Ft.__webglFramebuffer===void 0)lt.setupRenderTarget(y);else if(Ft.__hasExternalTextures)lt.rebindTextures(y,bt.get(y.texture).__webglTexture,bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const le=y.depthTexture;if(Ft.__boundDepthTexture!==le){if(le!==null&&bt.has(le)&&(y.width!==le.image.width||y.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ft=!0);const ne=bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ne[R])?B=ne[R][Q]:B=ne[R],K=!0):y.samples>0&&lt.useMultisampledRTT(y)===!1?B=bt.get(y).__webglMultisampledFramebuffer:Array.isArray(ne)?B=ne[Q]:B=ne,wt.copy(y.viewport),qt.copy(y.scissor),ue=y.scissorTest}else wt.copy(me).multiplyScalar(Zt).floor(),qt.copy(ye).multiplyScalar(Zt).floor(),ue=Ee;if(Q!==0&&(B=j),Ct.bindFramebuffer(L.FRAMEBUFFER,B)&&Ct.drawBuffers(y,B),Ct.viewport(wt),Ct.scissor(qt),Ct.setScissorTest(ue),K){const Ft=bt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ft.__webglTexture,Q)}else if(ft){const Ft=R;for(let Bt=0;Bt<y.textures.length;Bt++){const ne=bt.get(y.textures[Bt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Bt,ne.__webglTexture,Q,Ft)}}else if(y!==null&&Q!==0){const Ft=bt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,Q)}nt=-1};function ot(y){const R=bt.get(y);return(R.__readFormat!==y.format||R.__readType!==y.type)&&(R.__readFormat=y.format,R.__readType=y.type,R.__formatReadable=Xt.textureFormatReadable(y.format),R.__typeReadable=Xt.textureTypeReadable(y.type)),R}this.readRenderTargetPixels=function(y,R,Q,B,K,ft,It,Ft=0){if(!(y&&y.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It],Array.isArray(Bt)&&(Bt=Bt[0])),Bt){Ct.bindFramebuffer(L.FRAMEBUFFER,Bt);try{const ne=y.textures[Ft],le=ne.format,he=ne.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ft);const re=ot(ne);if(re.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(re.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-B&&Q>=0&&Q<=y.height-K&&L.readPixels(R,Q,B,K,et.convert(le),et.convert(he),ft)}finally{const ne=H!==null?bt.get(H).__webglFramebuffer:null;Ct.bindFramebuffer(L.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(y,R,Q,B,K,ft,It,Ft=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It],Array.isArray(Bt)&&(Bt=Bt[0])),Bt)if(R>=0&&R<=y.width-B&&Q>=0&&Q<=y.height-K){Ct.bindFramebuffer(L.FRAMEBUFFER,Bt);const ne=y.textures[Ft],le=ne.format,he=ne.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ft);const re=ot(ne);if(re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(R,Q,B,K,et.convert(le),et.convert(he),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Oe=H!==null?bt.get(H).__webglFramebuffer:null;Ct.bindFramebuffer(L.FRAMEBUFFER,Oe);const Le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ep(L,Le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ie),L.deleteSync(Le),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,R=null,Q=0){const B=Math.pow(2,-Q),K=Math.floor(y.image.width*B),ft=Math.floor(y.image.height*B),It=R!==null?R.x:0,Ft=R!==null?R.y:0;lt.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,It,Ft,K,ft),Ct.unbindTexture()},this.copyTextureToTexture=function(y,R,Q=null,B=null,K=0,ft=0){let It,Ft,Bt,ne,le,he,re,Ie,Oe;const Le=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(Q!==null)It=Q.max.x-Q.min.x,Ft=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,ne=Q.min.x,le=Q.min.y,he=Q.isBox3?Q.min.z:0;else{const Re=Math.pow(2,-K);It=Math.floor(Le.width*Re),Ft=Math.floor(Le.height*Re),y.isDataArrayTexture?Bt=Le.depth:y.isData3DTexture?Bt=Math.floor(Le.depth*Re):Bt=1,ne=0,le=0,he=0}B!==null?(re=B.x,Ie=B.y,Oe=B.z):(re=0,Ie=0,Oe=0);const Ge=et.convert(R.format),dn=et.convert(R.type);let Me;R.isData3DTexture?(lt.setTexture3D(R,0),Me=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(lt.setTexture2DArray(R,0),Me=L.TEXTURE_2D_ARRAY):(lt.setTexture2D(R,0),Me=L.TEXTURE_2D),Ct.activeTexture(L.TEXTURE0),Ct.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),Ct.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Ct.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);const xn=Ct.getParameter(L.UNPACK_ROW_LENGTH),We=Ct.getParameter(L.UNPACK_IMAGE_HEIGHT),Wn=Ct.getParameter(L.UNPACK_SKIP_PIXELS),gn=Ct.getParameter(L.UNPACK_SKIP_ROWS),ai=Ct.getParameter(L.UNPACK_SKIP_IMAGES);Ct.pixelStorei(L.UNPACK_ROW_LENGTH,Le.width),Ct.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le.height),Ct.pixelStorei(L.UNPACK_SKIP_PIXELS,ne),Ct.pixelStorei(L.UNPACK_SKIP_ROWS,le),Ct.pixelStorei(L.UNPACK_SKIP_IMAGES,he);const Xn=y.isDataArrayTexture||y.isData3DTexture,Yn=R.isDataArrayTexture||R.isData3DTexture;if(y.isDepthTexture){const Re=bt.get(y),qe=bt.get(R),on=bt.get(Re.__renderTarget),Je=bt.get(qe.__renderTarget);Ct.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),Ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Qe=0;Qe<Bt;Qe++)Xn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(y).__webglTexture,K,he+Qe),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(R).__webglTexture,ft,Oe+Qe)),L.blitFramebuffer(ne,le,ne+It,le+Ft,re,Ie,re+It,Ie+Ft,L.DEPTH_BUFFER_BIT,L.NEAREST);Ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||y.isRenderTargetTexture||bt.has(y)){const Re=bt.get(y),qe=bt.get(R);Ct.bindFramebuffer(L.READ_FRAMEBUFFER,N),Ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,it);for(let on=0;on<Bt;on++)Xn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,K,he+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,K),Yn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,ft,Oe+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,ft),K!==0?L.blitFramebuffer(ne,le,ne+It,le+Ft,re,Ie,re+It,Ie+Ft,L.COLOR_BUFFER_BIT,L.NEAREST):Yn?L.copyTexSubImage3D(Me,ft,re,Ie,Oe+on,ne,le,It,Ft):L.copyTexSubImage2D(Me,ft,re,Ie,ne,le,It,Ft);Ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Yn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Me,ft,re,Ie,Oe,It,Ft,Bt,Ge,dn,Le.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,ft,re,Ie,Oe,It,Ft,Bt,Ge,Le.data):L.texSubImage3D(Me,ft,re,Ie,Oe,It,Ft,Bt,Ge,dn,Le):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,re,Ie,It,Ft,Ge,dn,Le.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,re,Ie,Le.width,Le.height,Ge,Le.data):L.texSubImage2D(L.TEXTURE_2D,ft,re,Ie,It,Ft,Ge,dn,Le);Ct.pixelStorei(L.UNPACK_ROW_LENGTH,xn),Ct.pixelStorei(L.UNPACK_IMAGE_HEIGHT,We),Ct.pixelStorei(L.UNPACK_SKIP_PIXELS,Wn),Ct.pixelStorei(L.UNPACK_SKIP_ROWS,gn),Ct.pixelStorei(L.UNPACK_SKIP_IMAGES,ai),ft===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&L.generateMipmap(Me),Ct.unbindTexture()},this.initRenderTarget=function(y){bt.get(y).__webglFramebuffer===void 0&&lt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?lt.setTextureCube(y,0):y.isData3DTexture?lt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?lt.setTexture2DArray(y,0):lt.setTexture2D(y,0),Ct.unbindTexture()},this.resetState=function(){at=0,Y=0,H=null,Ct.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(t),e.unpackColorSpace=rn._getUnpackColorSpace()}}const Yu={type:"change"},lh={type:"start"},Sf={type:"end"},qo=new hr,qu=new ji,NM=Math.cos(70*ma.DEG2RAD),Un=new k,ri=2*Math.PI,hn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ml=1e-6;class UM extends zm{constructor(t,e=null){super(t,e),this.state=hn.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new bn,this._lastTargetPosition=new k,this._quat=new bn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bu,this._sphericalDelta=new bu,this._scale=1,this._panOffset=new k,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new k,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FM.bind(this),this._onPointerDown=OM.bind(this),this._onPointerUp=BM.bind(this),this._onContextMenu=XM.bind(this),this._onMouseWheel=GM.bind(this),this._onKeyDown=HM.bind(this),this._onTouchStart=VM.bind(this),this._onTouchMove=WM.bind(this),this._onMouseDown=zM.bind(this),this._onMouseMove=kM.bind(this),this._interceptControlDown=YM.bind(this),this._interceptControlUp=qM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=hn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yu),this.update(),this.state=hn.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Un.copy(e).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===hn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ri:n>Math.PI&&(n-=ri),i<-Math.PI?i+=ri:i>Math.PI&&(i-=ri),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),e.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Un.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<NM?this.object.lookAt(this.target):(qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(qu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ml||this._lastTargetPosition.distanceToSquared(this.target)>Ml?(this.dispatchEvent(Yu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ri/60*this.autoRotateSpeed*t:ri/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Un.setFromMatrixColumn(e,0),Un.multiplyScalar(-t),this._panOffset.add(Un)}_panUp(t,e){this.screenSpacePanning===!0?Un.setFromMatrixColumn(e,1):(Un.setFromMatrixColumn(e,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(t),this._panOffset.add(Un)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Un.copy(i).sub(this.target);let r=Un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/e.clientHeight),this._rotateUp(ri*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/e.clientHeight),this._rotateUp(ri*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function OM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function FM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function BM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=hn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zM(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=hn.DOLLY;break;case Qs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=hn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=hn.ROTATE}break;case Qs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=hn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=hn.PAN}break;default:this.state=hn.NONE}this.state!==hn.NONE&&this.dispatchEvent(lh)}function kM(s){switch(this.state){case hn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case hn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function GM(s){this.enabled===!1||this.enableZoom===!1||this.state!==hn.NONE||(s.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Sf))}function HM(s){this.enabled!==!1&&this._handleKeyDown(s)}function VM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1){this.state=hn.NONE;break}this._handleTouchStartRotate(s),this.state=hn.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1){this.state=hn.NONE;break}this._handleTouchStartPan(s),this.state=hn.TOUCH_PAN;break;default:this.state=hn.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=hn.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=hn.TOUCH_DOLLY_ROTATE;break;default:this.state=hn.NONE}break;default:this.state=hn.NONE}this.state!==hn.NONE&&this.dispatchEvent(lh)}function WM(s){switch(this._trackPointer(s),this.state){case hn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case hn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case hn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case hn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=hn.NONE}}function XM(s){this.enabled!==!1&&s.preventDefault()}function YM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KM=new Ia(-1,1,1,-1,0,1);class ZM extends mn{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}const JM=new ZM;class ch{constructor(t){this._mesh=new He(JM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,KM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class bc extends gr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof si?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=co.clone(t.uniforms),this.material=new si({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ch(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ku extends gr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class $M extends gr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class QM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bc(ra),this.copyPass.material.blending=ws,this.timer=new wm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ku!==void 0&&(o instanceof Ku?n=!0:o instanceof $M&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class jM extends gr{constructor(){super(),this.isOutputPass=!0,this.uniforms=co.clone(Ko.uniforms),this.material=new ef({name:Ko.name,uniforms:this.uniforms,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader}),this._fsQuad=new ch(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},rn.getTransfer(this._outputColorSpace)===fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Nc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class t1 extends gr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const e1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cr extends gr{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ut(t.x,t.y):new Ut(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qn(r,o,{type:$n,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Qn(r,o,{type:$n,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Qn(r,o,{type:$n,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=e1;this.highPassUniforms=co.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new si({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=co.clone(ra.uniforms),this.blendMaterial=new si({uniforms:this.copyUniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,premultipliedAlpha:!0,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new Vn,this._fsQuad=new ch(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new si({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new si({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}cr.BlurDirectionX=new Ut(1,0);cr.BlurDirectionY=new Ut(0,1);function hh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new mn;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Zu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=Zu(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Zu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Gn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Ju(s,t){if(t===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===fc||t===Rd){let e=s.getIndex();if(e===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===fc)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const Zn={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function n1(s,t){const e=wi[s],n=e.kind==="house"?Math.max(e.w,e.d)*1.15+8:e.r*1.6+7,i=Math.hypot(t[0],t[1]),[r,o]=i>0?[t[0]/i,t[1]/i]:[.45,.9];return{target:[e.x,1,e.z],position:[e.x+r*n,n*.85,e.z+o*n]}}const yl={cold:"#5a2a10",one:"#f08a3c",busy:"#ffb15a"},i1=4;function s1(s){const t=Math.max(0,Math.min(s,i1));return{mouth:t===0?yl.cold:t===1?yl.one:yl.busy,heat:.25+t*.35}}const r1=(s,t)=>t?0:Math.sin(s*9)*.08+Math.sin(s*23)*.05,bf={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit"},o1=s=>bf[s]??"idle",wf={lead:["garden-pond","court-well","yard-2"],designer:["garden-easel","garden-pond"],frontend:["yard-1","tavern-1","tavern-3"],backend:["tavern-2","yard-2","tavern-3"],reviewer:["court-bench","tavern-1"]},a1={lead:[8e3,15e3],others:[45e3,9e4]},l1=new Set(["frontend","backend"]);function ba(s,t,e){const{room:n,pose:i}=ni[t],r=l1.has(s)?n==="yard"?"sparks":i==="drink"?"mug":null:null;return{spot:t,clip:o1(i),prop:r,ms:e}}function c1(s,t,e){let n=(s^Math.imul(e+1,2654435761))>>>0;for(const i of t)n=Math.imul(n^i.charCodeAt(0),2246822507)>>>0;return()=>{n=n+1831565813>>>0;let i=n;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function $u(s,t,{seed:e,from:n=null,taken:i=new Set,reducedMotion:r=!1}){if(r)return ba(s,Yr[s],Number.POSITIVE_INFINITY);const o=c1(e,s,t),a=wf[s],l=Math.floor(o()*a.length),c=p=>!i.has(p),h=a.map((p,x)=>a[(l+x)%a.length]),d=h.find(p=>c(p)&&p!==n)??h.find(c)??Yr[s],[f,u]=a1[s==="lead"?"lead":"others"];return ba(s,d,Math.round(f+o()*(u-f)))}function h1(s,t,e,n,{seed:i,reducedMotion:r}){const o={},a={},l=c=>new Set(_h.filter(h=>h!==c).map(h=>o[h]?.act.spot??s[h]?.act.spot??e[h].to??e[h].spot));for(const c of _h){if(!t.has(c))continue;const h=e[c],d=s[c];if(!d){const x=$u(c,0,{seed:i,reducedMotion:r}).ms,m=!h.walking&&wf[c].includes(h.spot);o[c]=m?{n:0,act:ba(c,h.spot,x),since:n}:{n:0,act:ba(c,Yr[c],x),since:null};continue}const f=!h.walking&&h.spot===d.act.spot,u=d.since??(f?n:null);if(u===null||n-u<d.act.ms){o[c]=u===d.since?d:{...d,since:u};continue}const p=$u(c,d.n+1,{seed:i,from:d.act.spot,taken:l(c),reducedMotion:r});o[c]={n:d.n+1,act:p,since:null},p.spot!==h.spot&&(a[c]=p.spot)}return{runs:o,to:a}}const u1=2.5,Qu=3e3,zi=(s,t=Number.NEGATIVE_INFINITY)=>({spot:s,since:t,walk:null,holdUntil:null,next:null}),Tf=s=>({x:ni[s].x,z:ni[s].z});function d1(s,t){const e=ni[s],n=e.viaW?[{x:e.viaW[0],z:e.viaW[1],leave:e.anchor}]:[];return[Tf(s),...n,...$o(e.anchor,t)]}const f1=s=>s.slice(1).reduce((t,e,n)=>t+Math.hypot(e.x-s[n].x,e.z-s[n].z),0);function uh(s,t){let e=Math.max(0,t)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a.x-o.x,a.z-o.z);if(e<l-1e-9){const c=e/l;return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(a.x-o.x,a.z-o.z)}}e-=l}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:ni[s.to].ry}}function p1(s,t,e){const n=uh(s,e-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...$o(r.node,t)]:r?.leave?[i,r,...$o(r.leave,t)]:[i,...$o(ni[s.to].anchor,t)]}function Ef(s,t){return!s.walk||!uh(s.walk,t-s.walk.startedAt).arrived?s:zi(s.walk.to,s.walk.startedAt+f1(s.walk.path)/s.walk.speed*1e3)}const Af=(s,t,e,n)=>({...zi(s,e),walk:{path:d1(s,t),to:t,startedAt:e,speed:n}});function Sl(s,t,e,n,i,r){const o=Ef(s,e);return o.walk?o.walk.to===t?o:i?zi(t,e):{...o,walk:{path:p1(o.walk,t,e),to:t,startedAt:e,speed:n*u1}}:o.holdUntil!==null?t===o.spot?zi(o.spot,o.since):{...o,next:t}:r&&o.spot===r&&t!==r&&e-o.since<Qu?{...o,next:t,holdUntil:o.since+Qu}:o.spot===t?o:i?zi(t,e):Af(o.spot,t,e,n)}function ju(s,t,e,n){return s.walk?Ef(s,t):s.holdUntil===null||t<s.holdUntil?s:s.next?n?zi(s.next,t):Af(s.spot,s.next,t,e):{...s,holdUntil:null}}function m1(s,t){return s.walk?zi(s.walk.to,t):s.holdUntil!==null?zi(s.next??s.spot,t):s}const td=(s,t)=>s.holdUntil!==null&&t<s.holdUntil;function ed(s,t){if(!s.walk)return{...Tf(s.spot),heading:ni[s.spot].ry,walking:!1};const{x:e,z:n,heading:i,arrived:r}=uh(s.walk,t-s.walk.startedAt);return{x:e,z:n,heading:i,walking:!r}}const{PI:nn}=Math,nd=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};function g1(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:x,rr:m,pick:g,tiled:M,instanced:E}=s,{FLAGS:w,SPINNERS:I,skull:P,horns:v,flame:b,anvil:F,weaponRack:U,brazier:X,poleBanner:st,skullPole:j,barrel:N,well:it,bench:at,stall:Y,lampPost:H,crate:nt,sack:ht,torch:wt,dummy:qt,target:ue,hay:pt,easel:Yt,candle:se,plantFlora:ge,bunk:Zt,chest:pe,hangingBanner:Ze,table:me,partition:ye,wolf:Ee,spikes:Rt,cart:Wt,fence:te,skullCandle:oe,tent:ee,signPost:ae}=t,{patch:de}=e,{buildHouse:Mt,inH:zt,outH:Ot,onWall:L}=n,Qt=new lr({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),Jt=new lr({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:Xt,chimneyTop:Ct,emberBase:jt}=(()=>{const et=wi.forge,q=new At;q.position.set(et.x,0,et.z),r.add(q),r.add(i.forge);const dt=-.6,Lt=new At;Lt.position.set(0,.16,dt),q.add(Lt),Lt.add(u(f(new bi(1,24,0,nn),Qt,!1),0,1.05,1.705)),Lt.add(u(f(new ln(2,1.05),Qt,!1),0,.53,1.705)),Lt.add(u(f(new ln(1.4,.45),Jt,!1),0,.32,1.71));{const rt=new At;for(let ct=0;ct<4;ct++)rt.add(u(f(new Pt(.9-ct*.08,.14,1.2-ct*.1),ct%2?o.redD:h("#5a3a2a")),0,.5+ct*.16,0));rt.add(u(f(new Pt(1,.08,1.3),o.wood),0,.45,0)),rt.add(p(u(f(new ie(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,nn/2)),Lt.add(u(rt,-2.9,0,.2))}const _=new is("#ff8a3a",14,16,2);_.position.set(0,1.4,2.8),Lt.add(_),Lt.updateMatrixWorld(!0);const z=Lt.localToWorld(new k(0,10.9,-.5)),W=Lt.localToWorld(new k(0,1,2));x(q,F(),-2.9,2.9,gd(-2.9,2.9,-3.9,3.9)+nn/2,.16);{const rt=new At;rt.add(u(f(new Pt(1.5,.55,.7),o.wood),0,.27,0)),rt.add(p(u(f(new ln(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-nn/2,0,0)),x(q,rt,3.5,3,-.5,.16)}const O=[];for(let rt=0;rt<40;rt++)O.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});E(new Oi(1,0),O,{});for(let rt=0;rt<6;rt++)q.add(u(f(new an(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));x(q,U(4),-5.3,-2,Math.atan2(5.3,2),.16),x(q,U(4),5.7,.9,-nn/2,.16);{const rt=new At;rt.add(u(f(new Pt(.9,.5,.5),o.wood),0,.25,0));const ct=u(p(f(new ie(.45,.45,.16,18),h("#8a8078")),0,0,nn/2),0,.8,0);rt.add(ct),x(q,rt,-4.8,.2,.4,.16)}for(const rt of[.4,2,3.9,5.2])x(q,X(0),Math.cos(rt)*6.9,Math.sin(rt)*6.9,0,.16);return x(q,st(4),-1.9,-3.8,0,.16),x(q,st(4),1.9,-3.8,0,.16),x(q,j(2.6),6,-3.6,0,.16),x(q,N(),-6,2,0,.16),{fireLight:_,chimneyTop:z,emberBase:W}})();{const et=wi.court,q=new At;q.position.set(et.x,0,et.z),r.add(q),x(q,it(),-5.8,2),x(q,at(1.9,!0),-5.2,-4,0),x(q,Y(),6.2,1.2,-nn/2);{const dt=new At;for(const Lt of[-1,1])dt.add(u(f(new Pt(.12,2.2,.12),o.woodD),Lt*.8,1.1,0));dt.add(u(f(new Pt(1.8,1.1,.08),o.wood),0,1.55,0));for(let Lt=0;Lt<6;Lt++)dt.add(u(p(f(new ln(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+Lt%3*.6,1.8-Math.floor(Lt/3)*.5,.05));dt.add(p(u(f(new Pt(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),x(q,dt,5.6,-5.4,-nn/2)}x(q,H(6),-5.8,-1),x(q,N(),8,-.6),x(q,nt(.55),3.8,3.4,.3),x(q,ht(),4.4,3),x(q,j(2.4),-7.8,6);{const dt=new At;dt.add(u(f(new Pt(1.6,.5,.6),o.wood),0,.25,0)),dt.add(p(u(f(new ln(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-nn/2,0,0)),x(q,dt,-7.6,3.6,nn/2)}de("dirt",et.x-4,et.z+.5,4.4,5.6,0,.013)}{const et=wi.yard;if(et.kind==="house")throw new Error("the yard is an open area");const q=et.gate??0,dt=new At;dt.position.set(et.x,0,et.z),r.add(dt),de("sand",et.x,et.z,et.r+.6,et.r+.6,0,.014,5),dt.add(i.yard);{const Lt=new At,_=Math.cos(q),z=Math.sin(q);Lt.position.set(_*et.r,0,z*et.r),Lt.rotation.y=Math.atan2(_,z);for(const W of[-1,1])Lt.add(u(wt(),W*1.55,2,.24));dt.add(Lt),x(dt,j(2.6),_*(et.r+1.6)-z*2.2,z*(et.r+1.6)+_*2.2),x(dt,j(2.2),_*(et.r+1.6)+z*2.2,z*(et.r+1.6)-_*2.2)}x(dt,qt(),-3.2,2.1,nn),x(dt,qt(),1.6,3.2,nn),x(dt,ue(),4.4,3.6,Math.atan2(-4.4,-3.6)),x(dt,U(4),-5.4,-2.6,Math.atan2(5.4,2.6)),x(dt,pt(),-5.6,3.8,.4),x(dt,pt(),-4.8,4.7,1.2),x(dt,p(pt(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const Lt of[2,3.4,4.6])x(dt,st(3.4),Math.cos(Lt)*(et.r-.7),Math.sin(Lt)*(et.r-.7),Math.atan2(-Math.cos(Lt),-Math.sin(Lt)));x(dt,at(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),x(dt,N(),-.6,-5.8),x(dt,X(0,.9),Math.cos(q)*(et.r-1.2)-Math.sin(q)*1.8,Math.sin(q)*(et.r-1.2)+Math.cos(q)*1.8)}const bt={x:-30,z:-20,r:2.6,mouthA:0},lt=l.ripple;lt.wrapS=lt.wrapT=xi;const C=new Te("#1f5f8c"),S=new Te("#6fb6d2"),$=new Te("#a6d8e6"),yt="#bdb3c4",mt=et=>new Vn({map:lt,color:yt,vertexColors:!0,side:Sn,polygonOffset:!0,polygonOffsetFactor:-1-et,polygonOffsetUnits:-4-et*4}),Nt=new Te;function kt(et,q,dt){const Lt=Math.hypot(et-bt.x,q-bt.z),_=nd(1-Lt/bt.r);return Nt.copy(S).lerp(C,_*.95),dt&&Nt.lerp($,dt*nd((Lt-bt.r)/1.2)*.45),[Nt.r*1.27,Nt.g*1.27,Nt.b*1.27]}const vt=2.2;{const Lt=[],_=[],z=[],W=[],O=(A,St)=>{Lt.push(A,.045,St),_.push(...kt(A,St,0)),z.push(A/vt,St/vt)};O(bt.x,bt.z);for(let A=1;A<=5;A++)for(let St=0;St<72;St++){const ot=St/72*2*nn,y=bt.r*A/5;O(bt.x+Math.cos(ot)*y,bt.z+Math.sin(ot)*y)}for(let A=0;A<72;A++)W.push(0,1+(A+1)%72,1+A);for(let A=1;A<5;A++)for(let St=0;St<72;St++){const ot=1+(A-1)*72+St,y=1+(A-1)*72+(St+1)%72,R=ot+72,Q=y+72;W.push(ot,y,R,y,Q,R)}const rt=new mn;rt.setAttribute("position",new Be(Lt,3)),rt.setAttribute("color",new Be(_,3)),rt.setAttribute("uv",new Be(z,2)),rt.setIndex(W),r.add(f(rt,mt(0),!1));const ct=aa,Gt=ct[0],we=Math.hypot(Gt[0]-bt.x,Gt[1]-bt.z),Ce=(Gt[0]-bt.x)/we,_e=(Gt[1]-bt.z)/we;bt.mouthA=Math.atan2(_e,Ce);const Ve=[];for(let A=bt.r-1.2;A<we-.2;A+=.3)Ve.push([bt.x+Ce*A,bt.z+_e*A]);Ve.push(...ct);const Pe=.7,Kt=bt.r*bt.r,ce=Math.sqrt(Kt-1.5*1.5),un=bt.r+.8,yn=-(ce/1.5)*(un-ce),En=A=>{const St=Ve[A],ot=Math.hypot(St[0]-bt.x,St[1]-bt.z);if(ot<=ce)return Math.sqrt(Math.max(0,Kt-ot*ot))-.02;if(ot>=un)return Pe;const y=(ot-ce)/(un-ce),R=y*y,Q=R*y;return(2*Q-3*R+1)*1.48+(Q-2*R+y)*yn+(-2*Q+3*R)*Pe},T=[],D=[],G=[],J=[],ut=[-1,-.5,0,.5,1];for(let A=0;A<Ve.length;A++){const St=Ve[Math.max(0,A-1)],ot=Ve[Math.min(Ve.length-1,A+1)],y=Ve[A],R=Math.hypot(ot[0]-St[0],ot[1]-St[1])||1,Q=-(ot[1]-St[1])/R,B=(ot[0]-St[0])/R,K=En(A);for(const ft of ut){const It=y[0]+Q*ft*K,Ft=y[1]+B*ft*K;T.push(It,.05,Ft),D.push(...kt(It,Ft,Math.abs(ft))),G.push(It/vt,Ft/vt)}if(A>0)for(let ft=0;ft<4;ft++){const It=(A-1)*5+ft,Ft=It+1,Bt=A*5+ft,ne=Bt+1;J.push(It,Bt,Ft,Ft,Bt,ne)}}const Et=new mn;Et.setAttribute("position",new Be(T,3)),Et.setAttribute("color",new Be(D,3)),Et.setAttribute("uv",new Be(G,2)),Et.setIndex(J),r.add(f(Et,mt(1),!1));const tt=[];for(let A=1;A<Ve.length-1;A+=2){const St=Ve[A];if(Math.hypot(St[0]-bt.x,St[1]-bt.z)<bt.r+.9)continue;const ot=Ve[A-1],y=Ve[A+1],R=Math.hypot(y[0]-ot[0],y[1]-ot[1])||1,Q=-(y[1]-ot[1])/R,B=(y[0]-ot[0])/R,K=En(A)+.16;for(const ft of[-1,1])tt.push({x:St[0]+Q*ft*K,y:.06,z:St[1]+B*ft*K,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}E(new Oi(1,0),tt,{})}for(const et of e.crossings){const q=i.bridge.clone();q.position.set(et.x,0,et.z),q.rotation.y=et.ang,q.scale.x=(et.len+.6)/3.4,r.add(q)}{const et=wi.garden;if(et.kind==="house")throw new Error("the garden is an open area");const q=new At;q.position.set(et.x,0,et.z),r.add(q);const dt=Math.atan2(4.6,5.6);q.add(i.garden);{const O=Math.cos(dt)*et.r,rt=Math.sin(dt)*et.r,ct=new At;ct.position.set(O,0,rt),ct.rotation.y=Math.atan2(Math.cos(dt),Math.sin(dt)),ct.add(u(H(0).children[2].clone(),0,2.6,0)),q.add(ct)}const Lt=[],_=[];for(let O=0;O<26;O++){const rt=O/26*2*nn;let ct=Math.abs(rt-bt.mouthA);ct=Math.min(ct,2*nn-ct),!(ct<.62)&&Lt.push({x:bt.x+Math.cos(rt)*2.75,y:.08,z:bt.z+Math.sin(rt)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let O=0;O<7;O++)_.push({x:bt.x+m(-1.6,1.6),y:.065,z:bt.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});E(new Oi(1,0),Lt,{}),E(new ie(.22,.22,.02,12),_,{}),x(q,Yt(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),x(q,at(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[O,rt]of[[-5.6,-2.2],[4.9,-.6]]){const ct=new At;ct.add(u(f(new ie(.22,.28,.9,6),o.stone),0,.45,0)),ct.add(u(f(new Pt(.5,.36,.5),o.stone),0,1.08,0)),ct.add(u(f(new Pt(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),ct.add(u(f(new Pn(.48,.36,4),o.redD),0,1.44,0)),x(q,ct,O,rt,nn/4)}{const O=new At;O.add(u(f(new Pt(.9,.6,.6),o.stone),0,.3,0)),O.add(u(P(.26),0,.75,0));for(const rt of[-1,1])O.add(u(se(.18),rt*.3,.6,.12));x(q,O,-4.4,-5.4,Math.atan2(4.4,5.4))}ge("tree_willow",1,et.x-6.2,et.z-2.8),ge("tree_cherry",.95,et.x+5.3,et.z-4.9),ge("tree_fruit",.85,et.x-3,et.z+6.2);const z=[];let W=0;for(;z.length<90&&W<4e3;){W++;const O=m(0,2*nn),rt=m(5.3,6.7),ct=Math.cos(O)*rt,Gt=Math.sin(O)*rt;Math.min(Math.abs(O-dt),2*nn-Math.abs(O-dt))<.35||Math.hypot(ct-3,Gt+3.4)<1.3||Math.hypot(ct-2.2,Gt+4.3)<1||z.push({x:et.x+ct,y:.18,z:et.z+Gt,sx:.9,sy:.9,sz:.9,c:g([a.red,a.bone,"#d98a3a",a.redL,"#e8c860"])})}E(new an(.11,8,6),z,{})}const Tt=M(l.water,1,6),Dt=[];{const et=aa,[q,dt]=et[et.length-1],[Lt,_]=et[et.length-3],z=Math.hypot(q-Lt,dt-_),W=(q-Lt)/z,O=(dt-_)/z,rt=new He(new ln(1.4,40),new Vn({map:Tt,color:"#acb5c8",transparent:!0,opacity:.85,side:Sn,depthWrite:!1}));rt.position.set(q+W*.9,-20+.05,dt+O*.9),rt.rotation.y=Math.atan2(W,O),r.add(rt);const ct=new os({map:l.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let Gt=0;Gt<9;Gt++){const we=new Bi(ct);we.position.set(q+W*m(1,2.4),m(-38,-30),dt+O*m(1,2.4)+m(-1,1)),we.scale.setScalar(m(3,5.5)),r.add(we),Dt.push(we)}for(let Gt=0;Gt<4;Gt++){const we=new Bi(ct);we.position.set(q+W*1,m(-.6,.3),dt+O*1+m(-.5,.5)),we.scale.setScalar(m(1,1.6)),r.add(we),Dt.push(we)}}for(const et of Cc)if(et.kind==="hut"){const q=Mt({...et,wallH:2.5},{id:et.id,pitch:.66,chimney:et.id==="barracks"?[1.4,-.6]:null});if(et.id==="barracks"&&(zt(q,Zt(),-1.6,-.9),zt(q,Zt(),.4,-.9),zt(q,pe(),2.2,-1.6,-nn/2),zt(q,X(0,.7),2.3,1.2),L(q,"W",U(3),0,Ye,.3),L(q,"S",Ze(.8,1.3),1.6,Ye+2.3,.04)),et.id==="store"){zt(q,me(1.6,.6,.9,o.wood),-1.2,-1.3);for(let dt=0;dt<4;dt++)zt(q,nt(.45),-1.8+dt*.4,-1.3).position.y=Ye+.95;zt(q,N(),1.6,-1.2),zt(q,N(.9),1.9,-.4),zt(q,ht(),.6,-1.3),zt(q,ht(),1,.6),zt(q,nt(.6),-1.8,.8,.3)}if(et.id==="stable"){const dt=f(new ln(et.w-.6,et.d-.6),o.straw,!1);dt.rotation.x=-nn/2,zt(q,dt,0,0).position.y=Ye+.01;for(const Lt of[-1,1.2])zt(q,ye(2.2,1.1),Lt,-.6);zt(q,Ee(),-2.2,-.3,.4),zt(q,Ee(),.1,-.5,-.5).scale.setScalar(.9),zt(q,pt(),2.4,-1,.2);{const Lt=new At;Lt.add(u(f(new Pt(1.2,.4,.45),o.wood),0,.2,0)),Lt.add(p(u(f(new ln(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-nn/2,0,0)),zt(q,Lt,2.2,1)}}if(et.id==="granary"){for(let dt=0;dt<6;dt++)zt(q,ht(),-1.4+dt%3*.5,-1.2+Math.floor(dt/3)*.55);zt(q,N(),1.5,-1.1);{const dt=f(new Pt(1.2,.8,.8),o.wood);dt.position.y=.4;const Lt=new At;Lt.add(dt),Lt.add(u(f(new Pt(1.1,.05,.7),o.straw),0,.78,0)),zt(q,Lt,1.2,.7)}}et.id==="barracks"&&(Ot(q,U(4),-1.4,3.3),Ot(q,Rt(2.6),3.8,3,.6),Ot(q,st(3),3.6,.6),Ot(q,j(2.4),-3.8,2.4)),et.id==="store"&&(Ot(q,nt(.7),-1.6,2.8,.2),Ot(q,nt(.5),-.9,3.1,.7),Ot(q,ht(),.6,2.9),Ot(q,ht(),1.1,3.2),Ot(q,N(),2.3,2.9)),et.id==="stable"&&(Ot(q,pt(),-2.8,2.6,.3),Ot(q,pt(),-2,3,1.1),Ot(q,Wt(),2,3.4,-.3),te(q.g,[[-3.2,4.4],[3.2,4.4]],.9)),et.id==="granary"&&(Ot(q,ht(),-1.2,2.6),Ot(q,ht(),-.6,2.9),Ot(q,ht(),-1,3.3),Ot(q,N(.9),1.6,2.7))}else if(et.kind==="windmill"){const q=new At;q.position.set(et.x,0,et.z),q.add(u(f(new ie(1.7,2.4,6.6,18),h("#ffffff",{map:M(l.castleWall,3,2.2)})),0,3.3,0)),q.add(u(f(new Pn(2.3,2.8,18),h("#ffffff",{map:M(l.roof,4,1.5)})),0,7.9,0)),q.add(u(f(new Pt(1,1.7,.2),o.woodD),0,.85,2.25));for(const[Lt,_]of[[.6,3.6],[-.9,4.8]])q.add(u(p(f(new Pt(.5,.6,.1),o.pane,!1),0,Lt,0),Math.sin(Lt)*2,_,Math.cos(Lt)*2));const dt=u(new At,0,6.2,2);dt.add(p(f(new ie(.22,.22,.5,10),o.woodD),nn/2,0,0));for(let Lt=0;Lt<4;Lt++){const _=new At;_.rotation.z=Lt*nn/2,_.add(u(f(new Pt(.12,4.4,.08),o.woodD),0,2.3,.2)),_.add(u(f(new Pt(.9,3.4,.04),h("#e3d5b6",{side:Sn})),.5,2.6,.24)),_.add(u(f(new Pt(.06,3.4,.06),o.wood),.95,2.6,.26)),dt.add(_)}q.add(dt),I.push({o:dt,axis:"z",v:.5}),q.add(u(ht(),-1.6,0,2.6)),q.add(u(ht(),-2.2,0,2.2)),r.add(q)}else if(et.kind==="watch"){const q=new At;q.position.set(et.x,0,et.z),q.add(i.watch),q.add(u(X(0,.7),.6,6.5,-.6)),r.add(q)}else if(et.kind==="shrine"){const q=new At;q.position.set(et.x,0,et.z),q.add(i.altar);for(const dt of[.9,2.5,4.1,5.6])q.add(u(oe(),Math.cos(dt)*1.4,0,Math.sin(dt)*1.4));q.add(u(X(0,.8),1.6,0,1.4)),r.add(q),de("dirt",et.x,et.z,3.4,3.4,0,.013)}else{const q=new At;q.position.set(et.x,0,et.z),q.add(u(p(ee(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),q.add(u(p(ee(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let dt=0;dt<8;dt++){const Lt=dt/8*2*nn;q.add(u(f(new Oi(.18,0),o.stone),Math.cos(Lt)*.55,.1,Math.sin(Lt)*.55))}for(let dt=0;dt<3;dt++)q.add(p(u(f(new ie(.07,.07,.8,6),o.woodD),0,.12,0),nn/2,dt*1.05,0));b(q,0,.12,0,1.8);for(const dt of[.6,2.4,4.4])q.add(u(p(f(new ie(.2,.2,1.4,8),o.wood),0,-dt,nn/2),Math.cos(dt)*1.6,.2,Math.sin(dt)*1.6));q.add(u(j(2.4),-3.2,0,-1.2)),q.add(u(N(),3.1,0,-.8)),r.add(q),de("dirt",et.x,et.z,4.2,4,0,.013)}function V(et,q,dt,Lt=.018,_=o.dark){const z=new k(...q),W=new k(...dt),O=z.distanceTo(W),rt=f(new ie(Lt,Lt,O,5),_,!1);return rt.position.copy(z).add(W).multiplyScalar(.5),rt.quaternion.setFromUnitVectors(c,W.clone().sub(z).normalize()),et.add(rt),rt}function xt(){const et=new At,q=f(new an(1,22,12,0,nn*2,nn/2,nn/2),h("#ffffff",{map:l.planks}));q.scale.set(2.7,1,1.15),et.add(q);const dt=f(new ie(1,1,.1,24),o.woodL);dt.scale.set(2.62,1,1.1),et.add(u(dt,0,.02,0));const Lt=f(new Cn(1,.06,6,36),o.woodD);Lt.rotation.x=nn/2,Lt.scale.set(2.68,1.13,1),Lt.position.y=.14,et.add(Lt),et.add(p(u(f(new ie(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),et.add(u(p(P(.32),0,nn/2,0),2.75,.32,0)),et.add(u(p(v(.8),0,nn/2,0),2.75,.42,0)),et.add(u(f(new ie(.07,.09,2.8,8),o.woodD),.3,1.4,0));const _=u(new At,.3,2.85,0);_.add(u(f(new Pt(.9,.36,.02),o.red),.45,0,0)),et.add(_),w.push(_);const z=u(new At,-1.5,.06,0);z.add(u(f(new Pt(1.1,.8,1.1),h("#ffffff",{map:l.planks})),0,.4,0)),z.add(u(p(f(new ie(.75,.75,1.3,3),h("#ffffff",{map:l.roof})),0,0,nn/2),0,1.05,0)),z.add(u(f(new Pt(.3,.3,.04),o.pane,!1),.56,.5,0)),et.add(z);const W=f(new an(1,24,16),h("#ffffff",{map:l.balloon}));W.scale.set(3.6,1.5,1.7),W.position.y=4.4,et.add(W);const O=f(new Cn(1,.05,6,40),o.bone);O.rotation.x=nn/2,O.scale.set(3.62,1.72,1),O.position.y=4.1,et.add(O);for(const[ct,Gt,we,Ce]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])V(et,[ct,4.05,Gt],[we,.16,Ce]);const rt=u(new At,-2.95,.65,0);rt.add(p(f(new ie(.1,.1,.3,8),o.iron),0,0,nn/2));for(let ct=0;ct<3;ct++){const Gt=u(new At,0,0,0);Gt.rotation.x=ct/3*nn*2,Gt.add(u(p(f(new Pt(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),rt.add(Gt)}et.add(rt),I.push({o:rt,axis:"x",v:7}),et.add(u(f(new Pt(.06,.9,.7),o.redD),-2.75,.1,0));for(const ct of[2.4,-2.4])et.add(u(f(new an(.1,8,6),d("#ffc070",2.2),!1),ct,.5,0));return et.add(u(nt(.45),1.3,.07,.4)),et.add(u(N(.6),1.2,.07,-.45)),et}const _t=xt(),Vt=xt();{const et=bs.find(Ce=>Ce.id==="dock");if(!et)throw new Error("no dock road");const q=et.line,[dt,Lt]=q[q.length-1],[_,z]=q[q.length-4],W=Math.hypot(dt-_,Lt-z),O=(dt-_)/W,rt=(Lt-z)/W,ct=new At;ct.position.set(dt,0,Lt),ct.rotation.y=Math.atan2(O,rt),r.add(ct),ct.add(i.dock),ct.add(u(nt(.55),2.8,1.17,6.8));for(const[Ce,_e]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])ct.add(u(f(new an(.12,8,6),d("#ffc070",2.2),!1),Ce,1.32,_e));ct.add(u(nt(.6),-.85,.22,1.3)),ct.add(u(nt(.45),-.75,.22,2)),ct.add(u(N(.85),.85,.22,1)),ct.add(u(ht(),.6,.22,3.6)),ct.add(u(st(3.4),-1.45,.22,.4)),_t.position.set(4.1,-.4,5.6),_t.rotation.y=-nn/2,ct.add(_t);const Gt=f(new Pt(1.6,.08,.7),o.woodL);Gt.position.set(2.3,.05,5.6),Gt.rotation.z=-.18,ct.add(Gt);const we=u(new At,-4.6,0,-3.8);we.add(u(wt(),-.2,1.6,1.3)),we.add(u(nt(.6),1.9,0,.8)),we.add(u(N(),1.8,0,-.4)),ct.add(we),ct.add(u(p(ae("SKY DOCK"),0,nn/2,0),2.2,0,-2.4)),r.add(Vt),Vt.scale.setScalar(1.5),Vt.userData={a:1.2,r:96,y:15}}{const et=new At;et.position.set(-44,0,26),r.add(et);for(const[q,dt,Lt]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])et.add(u(p(ee(1.8,2.6,Lt),0,Math.atan2(-q,-dt),0),q,0,dt));for(let q=0;q<8;q++){const dt=q/8*2*nn;et.add(u(f(new Oi(.18,0),o.stone),Math.cos(dt)*.55,.1,Math.sin(dt)*.55))}b(et,0,.1,0,1.8),et.add(u(j(2.6),3.6,0,1.8)),et.add(u(st(3),-3.6,0,1.6)),et.add(u(p(Rt(3),0,.6,0),4.6,0,-2.6)),de("dirt",-44,26,5,4.6,.3,.013)}return de("field",54,-8,6.5,4.2,.35,.013,3),de("field",51,6,5.2,3.6,-.2,.013,3),de("field",10,-44.5,6,3.6,.1,.013,3),x(r,qt(),55.5,-2.6,.4),x(r,pt(),48.6,-12.6,.4),x(r,pt(),49.4,-11.8,1.3),{mouthMat:Qt,coreMat:Jt,fireLight:Xt,chimneyTop:Ct,emberBase:jt,waterTex:lt,fallTex:Tt,mists:Dt,skyBoat:_t,airship:Vt}}const _1=[3,5,7,9,11];function x1(s){const t=[];for(let e=0;e<s;e++)t.push(.39894*Math.exp(-.5*e*e/(s*s))/s);return new si({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}const v1=`

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

		}`,M1=`varying vec2 vUv;
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
				}`;function y1(s){s.separableBlurMaterials.forEach((t,e)=>{t.dispose(),s.separableBlurMaterials[e]=x1(_1[e]??3)}),s.materialHighPassFilter.fragmentShader=v1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=M1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function S1(s){const t=new Map,e=new Map,n=s.clone();return Rf(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Rf(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Rf(s.children[n],t.children[n],e)}class Cf extends pr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new A1(e)}),this.register(function(e){return new R1(e)}),this.register(function(e){return new C1(e)}),this.register(function(e){return new B1(e)}),this.register(function(e){return new z1(e)}),this.register(function(e){return new k1(e)}),this.register(function(e){return new L1(e)}),this.register(function(e){return new D1(e)}),this.register(function(e){return new I1(e)}),this.register(function(e){return new N1(e)}),this.register(function(e){return new E1(e)}),this.register(function(e){return new U1(e)}),this.register(function(e){return new P1(e)}),this.register(function(e){return new F1(e)}),this.register(function(e){return new O1(e)}),this.register(function(e){return new w1(e)}),this.register(function(e){return new id(e,sn.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new id(e,sn.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new G1(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xr.extractUrlBase(t);o=Xr.resolveURL(c,this.path)}else o=Xr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new af(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Pf){try{o[sn.KHR_BINARY_GLTF]=new H1(t)}catch(d){i&&i(d);return}r=JSON.parse(o[sn.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ey(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case sn.KHR_MATERIALS_UNLIT:o[d]=new T1;break;case sn.KHR_DRACO_MESH_COMPRESSION:o[d]=new V1(r,this.dracoLoader);break;case sn.KHR_TEXTURE_TRANSFORM:o[d]=new W1;break;case sn.KHR_MESH_QUANTIZATION:o[d]=new X1;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function b1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Tn(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const sn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class w1{constructor(t){this.parser=t,this.name=sn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],di);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new is(h),c.distance=d;break;case"spot":c=new vm(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class T1{constructor(){this.name=sn.KHR_MATERIALS_UNLIT}getMaterialType(){return Vn}extendParams(t,e,n){const i=[];t.color=new Te(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],di),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,In))}return Promise.all(i)}}class E1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class A1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ut(r,r)}return Promise.all(i)}}class R1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class C1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class P1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class L1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SHEEN}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new Te(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],di)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,In)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class D1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class I1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_VOLUME}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Te().setRGB(r[0],r[1],r[2],di),Promise.all(i)}}class N1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IOR}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class U1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Te().setRGB(r[0],r[1],r[2],di),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,In)),Promise.all(i)}}class O1{constructor(t){this.parser=t,this.name=sn.EXT_MATERIALS_BUMP}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class F1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ci:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class B1{constructor(t){this.parser=t,this.name=sn.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class z1{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class k1{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class id{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class G1{constructor(t){this.name=sn.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const x=new ze,m=new k,g=new bn,M=new k(1,1,1),E=new io(p.geometry,p.material,f);for(let I=0;I<f;I++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,I),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,I),l.SCALE&&M.fromBufferAttribute(l.SCALE,I),E.setMatrixAt(I,x.compose(m,g,M));let w=null;for(const I in l)if(I==="_COLOR_0"){const P=l[I];E.instanceColor=new ga(P.array,P.itemSize,P.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(w===null){const v=E.geometry;w=new mn,w.name=v.name;for(const b in v.attributes)w.setAttribute(b,v.attributes[b]);for(const b in v.morphAttributes)w.morphAttributes[b]=v.morphAttributes[b];v.index!==null&&w.setIndex(v.index),w.morphTargetsRelative=v.morphTargetsRelative;for(const b of v.groups)w.addGroup(b.start,b.count,b.materialIndex);v.boundingBox!==null&&(w.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(w.boundingSphere=v.boundingSphere.clone()),w.drawRange.start=v.drawRange.start,w.drawRange.count=v.drawRange.count,w.userData=Object.assign({},v.userData),E.geometry=w}const P=l[I];w.setAttribute(I,new ga(P.array,P.itemSize,P.normalized))}Mn.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),u.push(E)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Pf="glTF",Cr=12,sd={JSON:1313821514,BIN:5130562};class H1{constructor(t){this.name=sn.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cr,r=new DataView(t,Cr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===sd.JSON){const c=new Uint8Array(t,Cr+o,a);this.content=n.decode(c)}else if(l===sd.BIN){const c=Cr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class V1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=sn.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=wc[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=wc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],u=nr[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const x=u.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(u)},a,c,di,f)})})}}class W1{constructor(){this.name=sn.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class X1{constructor(){this.name=sn.KHR_MESH_QUANTIZATION}}class Lf extends ur{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,d=(n-e)/h,f=d*d,u=f*d,p=t*c,x=p-c,m=-2*u+3*f,g=u-f,M=1-m,E=g-f+d;for(let w=0;w!==a;w++){const I=o[x+w+a],P=o[x+w+l]*h,v=o[p+w+a],b=o[p+w]*h;r[w]=M*I+E*P+m*v+g*b}return r}}const Y1=new bn;class q1 extends Lf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Y1.fromArray(r).normalize().toArray(r),r}}const mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rd={9728:Nn,9729:Hn,9984:yd,9985:Qo,9986:Ir,9987:Fi},od={33071:ii,33648:ca,10497:xi},bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K1={CUBICSPLINE:void 0,LINEAR:Qr,STEP:$r},wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Z1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new lr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gs})),s.DefaultMaterial}function Ss(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ii(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function J1(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(n){const f=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function $1(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Q1(s){let t;const e=s.extensions&&s.extensions[sn.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Tl(e.attributes):t=s.indices+":"+Tl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Tl(s.targets[n]);return t}function Tl(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Tc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ty=new ze;class ey{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new b1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new gm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Sm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new af(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ss(r,a,i),Ii(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[sn.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=bl[i.type],a=nr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Gn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=bl[i.type],c=nr[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(u&&u!==d){const g=Math.floor(f/u),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=e.cache.get(M);E||(x=new c(a,g*u,i.count*u/h),E=new zd(x,u/h),e.cache.add(M,E)),m=new no(E,l,f%u/h,p)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new Gn(x,l,p);if(i.sparse!==void 0){const g=bl.SCALAR,M=nr[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,I=new M(o[1],E,i.sparse.count*g),P=new c(o[2],w,i.sparse.count*l);a!==null&&(m=new Gn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,b=I.length;v<b;v++){const F=I[v];if(m.setX(F,P[v*l]),l>=2&&m.setY(F,P[v*l+1]),l>=3&&m.setZ(F,P[v*l+2]),l>=4&&m.setW(F,P[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=rd[f.magFilter]||Hn,h.minFilter=rd[f.minFilter]||Fi,h.wrapS=od[f.wrapS]||xi,h.wrapT=od[f.wrapT]||xi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nn&&h.minFilter!==Hn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){e.parse(f,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let x=u;e.isImageBitmapLoader===!0&&(x=function(m){const g=new Fn(m);g.needsUpdate=!0,u(g)}),e.load(Xr.resolveURL(f,r.path),x,void 0,p)})})}const d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),Ii(f,o),f.userData.mimeType=o.mimeType||j1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[sn.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[sn.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[sn.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Hr,ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Hd,ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return lr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[sn.KHR_MATERIALS_UNLIT]){const d=i[sn.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,e))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],di),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",d.baseColorTexture,In)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Sn);const h=r.alphaMode||wl.OPAQUE;if(h===wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ut(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Vn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vn){const d=r.emissiveFactor;a.emissive=new Te().setRGB(d[0],d[1],d[2],di)}return r.emissiveTexture!==void 0&&o!==Vn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,In)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ii(d,r),e.associations.set(d,{materials:t}),r.extensions&&Ss(i,d,r),d})}createUniqueName(t){const e=pn.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[sn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return ad(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=Q1(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[sn.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ad(new mn,c,e),c.mode===mi.TRIANGLE_STRIP?f=f.then(u=>Ju(u,Rd)):c.mode===mi.TRIANGLE_FAN&&(f=f.then(u=>Ju(u,fc))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Z1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const x=h[u],m=o[u];let g;const M=c[u];if(m.mode===mi.TRIANGLES||m.mode===mi.TRIANGLE_STRIP||m.mode===mi.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,w=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&w?new u0(x,M):new He(x,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===mi.LINES)g=new m0(x,M);else if(m.mode===mi.LINE_STRIP)g=new Qc(x,M);else if(m.mode===mi.LINE_LOOP)g=new g0(x,M);else if(m.mode===mi.POINTS)g=new Nr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&$1(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),Ii(g,r),m.extensions&&Ss(i,g,m),e.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)e.associations.set(d[u],{meshes:t,primitives:u});if(d.length===1)return r.extensions&&Ss(i,d[0],r),d[0];const f=new At;r.extensions&&Ss(i,f,r),e.associations.set(f,{meshes:t});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new oi(ma.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ia(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ii(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new ze;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Jc(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let E=0,w=f.length;E<w;E++){const I=f[E],P=u[E],v=p[E],b=x[E],F=m[E];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const U=n._createAnimationTracks(I,P,v,b,F);if(U)for(let X=0;X<U.length;X++)g.push(U[X])}const M=new vc(r,void 0,g);return Ii(M,i),M})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,ty)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new k().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Gd:c.length>1?h=new At:c.length===1?h=c[0]:h=new Mn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Ii(h,r),r.extensions&&Ss(n,h,r),r.matrix!==void 0){const d=new ze;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new At;n.name&&(r.name=i.createUniqueName(n.name)),Ii(r,n),n.extensions&&Ss(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(S1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof ui||f instanceof Fn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}fs[r.path]===fs.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(fs[r.path]){case fs.weights:h=ho;break;case fs.rotation:h=uo;break;case fs.translation:case fs.scale:h=ya;break;default:n.itemSize===1?h=ho:h=ya;break}const d=i.interpolation!==void 0?K1[i.interpolation]:Qr,f=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const x=new h(l[u]+"."+fs[r.path],e.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Tc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof uo?q1:Lf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ny(s,t,e){const n=t.attributes,i=new Gi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const h=Tc(nr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=e.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const x=Tc(nr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Hi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ad(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=wc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return rn.workingColorSpace!==di&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rn.workingColorSpace}" not supported.`),Ii(s,t),ny(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?J1(s,t.targets,e):s})}const iy="/assets/altar-BLnKV2Du.glb",sy="/assets/backend-0N1rHeCk.glb",ry="/assets/bridge-ETZK_L1i.glb",oy="/assets/designer-DbLc0S5w.glb",ay="/assets/dock-Dz4b5cxY.glb",ly="/assets/flora-7jxy9LaY.glb",cy="/assets/forge-DNia5kCh.glb",hy="/assets/frontend-BagVIkFr.glb",uy="/assets/garden-iFD0puy8.glb",dy="/assets/gate-CLzj2aEg.glb",fy="/assets/house_library-a_INcIO_.glb",py="/assets/house_studio-prPn7xt-.glb",my="/assets/house_tavern-DhJciONJ.glb",gy="/assets/house_war-CErgsJUC.glb",_y="/assets/house_workshop-DizOAfBl.glb",xy="/assets/lead-B8dKTGTU.glb",vy="/assets/reviewer-CjFLqSzL.glb",My="/assets/towers-DiePBDd1.glb",yy="/assets/underside-CtDt-w8A.glb",Sy="/assets/walls-DL6hLM5P.glb",by="/assets/watch-D_FLfKo1.glb",wy="/assets/yard-BCXHtimJ.glb",Ty="/assets/backend-BO6EdEPd.jpg",Ey="/assets/designer-3Dfjr5eY.jpg",Ay="/assets/frontend-ChC8gXK4.jpg",Ry="/assets/lead-BVut_pmU.jpg",Cy="/assets/reviewer-r8WJ7XTx.jpg",Py=Object.assign({"../models/altar.glb":iy,"../models/backend.glb":sy,"../models/bridge.glb":ry,"../models/designer.glb":oy,"../models/dock.glb":ay,"../models/flora.glb":ly,"../models/forge.glb":cy,"../models/frontend.glb":hy,"../models/garden.glb":uy,"../models/gate.glb":dy,"../models/house_library.glb":fy,"../models/house_studio.glb":py,"../models/house_tavern.glb":my,"../models/house_war.glb":gy,"../models/house_workshop.glb":_y,"../models/lead.glb":xy,"../models/reviewer.glb":vy,"../models/towers.glb":My,"../models/underside.glb":yy,"../models/walls.glb":Sy,"../models/watch.glb":by,"../models/yard.glb":wy}),Ec={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},Ui=["lead","designer","frontend","backend","reviewer"],Ly=Object.assign({"../models/backend.jpg":Ty,"../models/designer.jpg":Ey,"../models/frontend.jpg":Ay,"../models/lead.jpg":Ry,"../models/reviewer.jpg":Cy});function dh(s){const t=Py[`../models/${s}.glb`];if(!t)throw new Error(`no model ${s} in the bundle`);return t}function Dy(s){const t=Ly[`../models/${s}`];if(!t)throw new Error(`no texture ${s} in the bundle`);return t}const El=new ze,Iy=new ze;function Df(s){const t=new Set;return s.scene.traverse(e=>{const n=e.userData.woa_q;if(n&&(El.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),e.matrix.compose(e.position,e.quaternion,e.scale).multiply(Iy.copy(El).invert()),e.matrix.decompose(e.position,e.quaternion,e.scale)),!(e instanceof He)||t.has(e.geometry))return;const i=e.geometry;t.add(i);for(const[o,a]of Object.entries(i.attributes)){if(o==="skinIndex"||a.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in a))continue;const l=a.itemSize,c=new Float32Array(a.count*l);for(let h=0;h<a.count;h++)c[h*l]=a.getX(h),l>1&&(c[h*l+1]=a.getY(h)),l>2&&(c[h*l+2]=a.getZ(h)),l>3&&(c[h*l+3]=a.getW(h));i.setAttribute(o,new Gn(c,l))}const r=n||e.parent?.userData.woa_q;r&&i.applyMatrix4(El.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function If(s,t){const e=t,n=e.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((e.emissiveIntensity||1)*40)/100)):s.toon("#"+e.color.getHexString())}const Ny=s=>s.isMeshStandardMaterial===!0;function Nf(s,t){const e=new Map;return t.traverse(n=>{if(!(n instanceof He))return;const i=If(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.applyMatrix4(n.matrixWorld);const a=e.get(i);a?a.push(o):e.set(i,[o])}),e}function Uy(s,t){t.scene.updateMatrixWorld(!0);const e=new At;for(const[n,i]of Nf(s,t.scene)){const r=i.length===1?i[0]:hh(i,!1);if(!r)continue;const o=new He(r,n);o.castShadow=!Ny(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,e.add(o)}return e}function Uf(s,t){let e=null;return s.scene.traverse(n=>{!e&&(n.userData.name===t||n.name===t)&&(e=n)}),e}async function Oy(){const s=new Cf,t=Object.keys(Ec),e=await Promise.all(t.map(n=>s.loadAsync(dh(n)).then(Df)));return Object.fromEntries(t.map((n,i)=>[n,e[i]]))}function Fy(s,t){const e={};for(const n of Object.keys(Ec)){const i=t[n];e[n]=Ec[n]==="static"?Uy(s,i):i}return e}const Ks={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function By(s,t){const e=.075*s/1.8,n=(t-e)*.5;return Math.max(.5,n+e-.02)}const Al={intensity:2.5,distance:4},Ac=new Set(["type","smash","readsit","sit","drink"]),zy=.59;function ky(s){const t=dh(s),e=new of;return e.setURLModifier(n=>n===t?n:Dy(n.slice(n.lastIndexOf("/")+1))),new Cf(e)}async function Gy(){const s=await Promise.all(Ui.map(t=>ky(t).loadAsync(dh(t)).then(Df)));return s.forEach((t,e)=>{t.scene.traverse(n=>{if(n instanceof He&&!n.material.map)throw new Error(`the ${Ui[e]} model's texture did not load`)})}),Object.fromEntries(Ui.map((t,e)=>[t,s[e]]))}function Hy(s){const t=la.filter(n=>n.kind==="house"),e=wi.forge;return(n,i)=>{for(const r of t){const[o,a]=qr(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(a)<r.d/2+.1)return Ye;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&a>r.deck[2]&&a<r.deck[3])return .2}if(Math.hypot(n-e.x,i-e.z)<7.8)return .16;for(const r of s){const o=n-r.x,a=i-r.z,l=(r.len+.6)/2,c=o*Math.cos(r.ang)-a*Math.sin(r.ang),h=o*Math.sin(r.ang)+a*Math.cos(r.ang);if(Math.abs(c)<l&&Math.abs(h)<.6)return .12+.32*(1-(c/l)**2)}return .02}}const Vy=.055,wa=new k,Br=new k,ld=new k,Wy=new k,oa=new k,Rl=new k,Xy=new k,cd=new bn,hd=new bn,Ta=new bn,ud=new bn,Cl=new hf;function dd(s,t,e){cd.setFromUnitVectors(t,e),s.getWorldQuaternion(hd),s.parent.getWorldQuaternion(Ta).invert(),s.quaternion.copy(Ta.multiply(cd).multiply(hd)),s.updateMatrixWorld(!0)}function Yy(s,t,e,n){const i=s.up.getWorldPosition(Br),r=s.low.getWorldPosition(ld),o=s.foot.getWorldPosition(wa);s.foot.getWorldQuaternion(ud);const a=i.distanceTo(r),l=r.distanceTo(o),c=oa.set(o.x,t+e,o.z).sub(i),h=ma.clamp(c.length(),Math.abs(a-l)+1e-4,a+l-1e-4);c.normalize();const d=Rl.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=ma.clamp((a*a+h*h-l*l)/(2*a*h),-1,1),u=Xy.copy(i).addScaledVector(c,a*f).addScaledVector(d,a*Math.sqrt(1-f*f)),p=Wy.copy(i).addScaledVector(c,h);dd(s.up,Rl.subVectors(r,i).normalize(),oa.subVectors(u,i).normalize());const x=s.low.getWorldPosition(ld),m=s.foot.getWorldPosition(wa);dd(s.low,Rl.subVectors(m,x).normalize(),oa.subVectors(p,x).normalize()),s.foot.parent.getWorldQuaternion(Ta).invert(),s.foot.quaternion.copy(Ta.multiply(ud)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function qy(s,t,e,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of Ui){const f=new At;f.userData.agentId=d,t.add(f);const u=ni[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:x,speed:m}=Ks[d],g=e[d],M=g.scene;M.updateMatrixWorld(!0);const E=new Gi().setFromObject(M),w=p/Math.max(.01,E.max.y-E.min.y);M.scale.setScalar(w);const I=-E.min.y*w;M.position.y=I;const P=new Map;M.traverse(H=>{if(!(H instanceof He))return;const nt=H.material;let ht=P.get(nt);ht||(nt.map&&(nt.map.colorSpace=In),ht=i("#ffffff",{map:nt.map??null}),P.set(nt,ht)),H.material=ht,H.castShadow=!0,H.receiveShadow=!0,H.frustumCulled=!1,H.raycast=()=>{}});let v=null,b=null;if(d==="reviewer"){v=new is("#6dffa0",Al.intensity,Al.distance,2),v.position.set(-.18,2.2,.35),f.add(v);const H=M.getObjectByName("mixamorigRightHand");if(!H)throw new Error("the reviewer model has no right hand");const nt=new At,ht=new At;nt.add(ht);const wt=new Bi(new os({map:n.flameTex,color:new Te(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));wt.center.set(.5,.05),wt.scale.set(.16,.3,1),wt.position.y=.02;const qt=new Bi(new os({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:Si}));qt.scale.setScalar(.25),qt.position.y=.08,wt.raycast=()=>{},qt.raycast=()=>{},ht.add(wt,qt),H.add(nt),M.updateMatrixWorld(!0),nt.scale.setScalar(1/H.getWorldScale(new k).x),b={group:nt,flicker:ht}}const F={};for(const H of g.animations){const nt=H.tracks.find(ht=>/Hips\.position$/.test(ht.name));nt&&(F[H.name]=nt.values[1]*w)}const U=new Bm(M),X={};for(const H of g.animations){const nt=U.clipAction(H);nt.enabled=!0,nt.setEffectiveTimeScale(1),nt.setEffectiveWeight(H.name==="idle"?1:0),nt.time=Math.random()*H.duration,nt.play(),X[H.name]=nt}if(!X.idle||!X.walk||!X.sit||!X.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const st=Math.min(2.6,Math.max(.8,m/(zy*p)));X.walk.timeScale=st,U.update(0);const j=H=>M.getObjectByName("mixamorig"+H),N=["Left","Right"].map(H=>({up:j(H+"UpLeg"),low:j(H+"Leg"),foot:j(H+"Foot")}));M.updateMatrixWorld(!0);const it=N.every(H=>H.up&&H.low&&H.foot)?N.map(H=>({up:H.up,low:H.low,foot:H.foot,saved:[new bn,new bn,new bn]})):null,at=it?Math.min(...it.map(H=>H.foot.getWorldPosition(wa).y)):0,Y=j("Hips");if(!Y)throw new Error(`the ${d} model has no hips`);f.add(M),o[d]={id:d,root:f,H:p,seatY:By(p,x),phase:n.phases[d],model:{obj:M,mixer:U,acts:X,cur:"idle",baseY:I,walkScale:st,seat:F,hips:Y,legs:it,ankleH:at,bent:!1,ikW:0},lantern:v,lamp:b}}const a=new Map;function l(d,f,u,p){const x=a.get(d);if(x!==void 0)return x;const m=[];for(const[M,E]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){Cl.set(wa.set(f+M,p+1.2,u+E),oa.set(0,-1,0)),Cl.far=1.3;for(const w of Cl.intersectObjects(t.children,!0)){let I=!1,P=!0;for(let F=w.object;F;F=F.parent)F.userData.agentId&&(I=!0),F.visible||(P=!1);const v=w.point.y-p,b=w.object;if(!I&&P&&b.isMesh&&!b.material.transparent&&v>.25&&v<.66){m.push(v);break}}}const g=m.length?Math.max(...m):null;return a.set(d,g),g}function c(d,f,u,p,x=1){const m=d.model;if(m.bent&&m.legs)for(const U of m.legs)U.up.quaternion.copy(U.saved[0]),U.low.quaternion.copy(U.saved[1]),U.foot.quaternion.copy(U.saved[2]);m.bent=!1;const g=bf[f],M=g&&m.acts[g]?g:"idle";if(M!==m.cur){const U=m.acts[m.cur],X=m.acts[M];X.enabled=!0,X.setEffectiveWeight(1),X.time=0,r?U.setEffectiveWeight(0):U.crossFadeTo(X,.3,!1),m.cur=M}M==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*x)),m.mixer.update(r?0:u);const E=M!=="walk"&&M!=="idle";let w=null;const I=n.groundY(d.root.position.x,d.root.position.z);if(E&&p&&m.legs&&m.acts[M].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const U=m.hips.getWorldPosition(Br);w=l(p+"|"+d.id,U.x,U.z,I)}let P=m.baseY,v=0,b=0;if(w!==null){P=m.obj.position.y+(I+w+Vy*d.H)-Br.y;const U=d.root.rotation.y,X=Math.cos(U),st=Math.sin(U),j=d.root.position.x-Br.x,N=d.root.position.z-Br.z;v=m.obj.position.x+j*X-N*st,b=m.obj.position.z+j*st+N*X}else E&&m.seat[M]!==void 0&&(P=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[M])));const F=r?1:Math.min(1,u*8);if(m.obj.position.x+=(v-m.obj.position.x)*F,m.obj.position.y+=(P-m.obj.position.y)*F,m.obj.position.z+=(b-m.obj.position.z)*F,m.ikW=w===null?0:Math.min(1,m.ikW+(r?1:u/.3)),w!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const U of m.legs)U.saved[0].copy(U.up.quaternion),U.saved[1].copy(U.low.quaternion),U.saved[2].copy(U.foot.quaternion),Yy(U,I,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!Ac.has(f)&&f!=="read"?Al.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const Pr=new k;function pi(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Pr.copy(t),Pr[n]=0,Pr.normalize();const c=.5*o/(o+a),h=1-Pr.angleTo(s)/l;return Math.sign(Pr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Oa extends Pt{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new k,c=new k,h=new k(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new k,m=.5/o;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[M+0]=pi(x,c,"z","y",r,n),u[M+1]=1-pi(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),u[M+0]=1-pi(x,c,"z","y",r,n),u[M+1]=1-pi(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),u[M+0]=1-pi(x,c,"x","z",r,t),u[M+1]=pi(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[M+0]=1-pi(x,c,"x","z",r,t),u[M+1]=1-pi(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[M+0]=1-pi(x,c,"x","y",r,t),u[M+1]=1-pi(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),u[M+0]=pi(x,c,"x","y",r,t),u[M+1]=1-pi(x,c,"y","x",r,e);break}}static fromJSON(t){return new Oa(t.width,t.height,t.depth,t.segments,t.radius)}}const Ky="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:Qi}=Math,Rc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function Zy(){const s=new FontFace("M PLUS Rounded 1c",`url("${Ky}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const ti={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function Jy(s,t,e,n){s.setPixelRatio(Math.min(n,2)),s.setSize(t,e),s.shadowMap.enabled=!0,s.shadowMap.type=zr,s.toneMapping=Aa,s.toneMappingExposure=.95}function fd(s){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $y(s,t){const e=new Pa(new Uint8Array([70,150,255]),3,1,Ra);e.minFilter=e.magFilter=Nn,e.generateMipmaps=!1,e.needsUpdate=!0;const n=new Vn({color:2824987,side:Jn}),i=0,r=1,o=new k(0,1,0),a={uRimColor:{value:new Te("#ffd2a6")},uRimAmt:{value:.45}};function l(_){return _.onBeforeCompile=z=>{z.uniforms.uRimColor=a.uRimColor,z.uniforms.uRimAmt=a.uRimAmt,z.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+z.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},_.customProgramCacheKey=()=>"rim1",_}const c=new Map;function h(_,z){if(!z){let W=c.get(_);return W||(W=l(new ia({color:_,gradientMap:e})),c.set(_,W)),W}return l(new ia(Object.assign({color:_,gradientMap:e},z)))}const d=new Map;function f(_,z=2){const W=_+z;let O=d.get(W);return O||(O=new lr({color:0,emissive:_,emissiveIntensity:z,roughness:1}),d.set(W,O)),O}function u(_,z,W=!0){z&&z.userData.autoUV&&_.attributes.uv&&!_.userData.planar&&(_.type==="BoxGeometry"||_.type==="RoundedBoxGeometry")&&(X(_,.9),_.userData.planar=!0);const O=new He(_,z);return O.castShadow=W,O.receiveShadow=!0,O}const p=(_,z,W,O=.03)=>new Oa(_,z,W,2,Math.min(O,_/2.1,z/2.1,W/2.1));function x(_,z,W=i,O=!0){const rt=u(_,z,O);if(W){const ct=new He(_,n);ct.scale.setScalar(1+W*r),ct.raycast=()=>{},rt.add(ct)}return rt}function m(_,z,W,O){return _.position.set(z,W,O),_}function g(_,z,W,O){return _.rotation.set(z,W,O),_}function M(_,z,W,O,rt=0,ct=0){return z.position.set(W,ct,O),z.rotation.y=rt,_.add(z),z}function E(_,z,W,O,rt,ct,Gt=i*1.6,we=7){const Ce=W.clone().normalize(),_e=x(new Pn(rt,O,we),ct,Gt);return _e.quaternion.setFromUnitVectors(o,Ce),_e.position.copy(z).addScaledVector(Ce,O*.45),_.add(_e),_e}const w=fd(20261116),I=(_,z)=>_+(z-_)*w(),P=_=>_[Math.floor(w()*_.length)],v=fd(777),b=(_,z)=>_+(z-_)*v();function F(_,z,W,O){const rt=document.createElement("canvas");rt.width=_,rt.height=z;const ct=rt.getContext("2d");ct&&W(ct,_,z);const Gt=new mc(rt);return Gt.colorSpace=In,Gt.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),Gt.wrapS=Gt.wrapT=xi,O&&Gt.repeat.set(O[0],O[1]),Gt}function U(_,z,W){const O=_.clone();return O.wrapS=O.wrapT=xi,O.repeat.set(z,W),O.needsUpdate=!0,O}function X(_,z=1,W=z){const O=_.attributes.position,rt=_.attributes.normal,ct=_.attributes.uv;for(let Gt=0;Gt<O.count;Gt++){const we=Math.abs(rt.getX(Gt)),Ce=Math.abs(rt.getY(Gt)),_e=Math.abs(rt.getZ(Gt));let Ve,Pe;Ce>=we&&Ce>=_e?(Ve=O.getX(Gt),Pe=O.getZ(Gt)):we>=_e?(Ve=O.getZ(Gt),Pe=O.getY(Gt)):(Ve=O.getX(Gt),Pe=O.getY(Gt)),ct.setXY(Gt,Ve/z,Pe/W)}return ct.needsUpdate=!0,_}function st(_,z,W,O=0,rt=z){const ct=_.attributes.position,Gt=_.attributes.normal,we=_.attributes.uv;for(let Ce=0;Ce<ct.count;Ce++){const _e=Math.abs(Gt.getX(Ce)),Ve=Math.abs(Gt.getZ(Ce)),Pe=(_e>Ve?ct.getZ(Ce):ct.getX(Ce))/W;we.setXY(Ce,Pe,(ct.getY(Ce)+z/2+O)/rt)}return we.needsUpdate=!0,_}const j=new ze,N=new bn,it=new ki,at=new k,Y=new k,H=new Te;function nt(_,z,W={}){if(!z.length)return null;const O=W.mat||l(new ia({color:16777215,gradientMap:e})),rt=new io(_,O,z.length);return rt.castShadow=!!W.cast,rt.receiveShadow=W.receive!==!1,z.forEach((ct,Gt)=>{ct.m?j.copy(ct.m):(it.set(ct.rx||0,ct.ry||0,ct.rz||0),N.setFromEuler(it),at.set(ct.x??0,ct.y??0,ct.z??0),Y.set(ct.sx??1,ct.sy??1,ct.sz??1),j.compose(at,N,Y)),rt.setMatrixAt(Gt,j),(!W.mat||W.colors)&&rt.setColorAt(Gt,H.set(ct.c||"#ffffff"))}),rt.instanceMatrix.needsUpdate=!0,rt.instanceColor&&(rt.instanceColor.needsUpdate=!0),rt.computeBoundingSphere(),(W.parent||t).add(rt),rt}const ht=new Pt(1,1,1);function wt(_,z,W,O=!0){return W.length?nt(ht,W.map(([rt,ct,Gt,we,Ce,_e,Ve=0,Pe=0,Kt=0])=>({x:rt,y:ct,z:Gt,sx:we,sy:Ce,sz:_e,rx:Ve,ry:Pe,rz:Kt})),{mat:z,parent:_,cast:O}):null}function qt(_,z,W,O,rt,ct,Gt,we){for(let Ce=0;Ce<rt;Ce++){const _e=b(0,z),Ve=b(0,W),Pe=b(ct,Gt);for(const[Kt,ce]of[[0,0],[z,0],[-z,0],[0,W],[0,-W]]){const un=_.createRadialGradient(_e+Kt,Ve+ce,0,_e+Kt,Ve+ce,Pe),yn=O[Math.floor(v()*O.length)];un.addColorStop(0,yn+we),un.addColorStop(1,yn+"00"),_.fillStyle=un,_.fillRect(_e+Kt-Pe,Ve+ce-Pe,Pe*2,Pe*2)}}}function ue(_,z,W,O=.16){_.globalCompositeOperation="destination-in";const rt=_.createLinearGradient(0,0,z,0);rt.addColorStop(0,"rgba(0,0,0,0)"),rt.addColorStop(O,"rgba(0,0,0,1)"),rt.addColorStop(1-O,"rgba(0,0,0,1)"),rt.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=rt,_.fillRect(0,0,z,W),_.globalCompositeOperation="source-over"}function pt(_,z,W,O,rt,ct,Gt,we,Ce,_e,Ve){for(let Pe=W;Pe<rt;Pe+=ct){let Kt=z-b(0,we);for(;Kt<O;){const ce=b(Gt,we);_.fillStyle=Ce[Math.floor(v()*Ce.length)],_.beginPath(),_.roundRect(Kt+_e,Pe+_e,ce-_e*2,ct-_e*2,Ve),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Kt+_e*2,Pe+_e*1.5,ce-_e*4,3),Kt+=ce}}}function Yt(_,z,W,O,rt,ct,Gt,we,Ce){const _e=W/O;for(let Ve=0;Ve<O;Ve++){const Pe=Ve*_e;let Kt=b(0,ct);const ce=Kt;for(;Kt<ce+z;){const un=Math.min(b(rt,ct),ce+z-Kt);if(un<rt*.5)break;const yn=Gt[Math.floor(v()*Gt.length)];for(const En of[0,-z])_.fillStyle=yn,_.beginPath(),_.roundRect(Kt+En+we,Pe+we,un-we*2,_e-we*2,Ce),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Kt+En+we*2,Pe+we*1.5,un-we*4,3);Kt+=un}}}function se(_,z,W,O){for(let rt=0;rt<8;rt++){let ct=-b(0,200);for(;ct<z;){const Gt=b(160,340);_.fillStyle=O[Math.floor(v()*O.length)],_.fillRect(ct,rt*64,Gt,64),_.strokeStyle="rgba(255, 230, 200, 0.06)",_.lineWidth=2;for(let we=0;we<3;we++){const Ce=rt*64+b(10,54);_.beginPath(),_.moveTo(ct+6,Ce),_.bezierCurveTo(ct+Gt*.3,Ce+b(-4,4),ct+Gt*.6,Ce+b(-4,4),ct+Gt-6,Ce),_.stroke()}_.fillStyle="rgba(20, 10, 6, 0.4)",_.fillRect(ct,rt*64,3,64),_.fillStyle="rgba(20, 10, 6, 0.35)",_.beginPath(),_.arc(ct+10,rt*64+14,2.5,0,Qi*2),_.arc(ct+10,rt*64+50,2.5,0,Qi*2),_.fill(),ct+=Gt}_.fillStyle="rgba(20, 10, 6, 0.45)",_.fillRect(0,rt*64,z,3)}}const ge=(_,z,W)=>{const O=_.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,z),O.addColorStop(1,W),_.fillStyle=O,_.fillRect(0,0,64,64)},Zt=F(512,512,(_,z,W)=>{_.fillStyle="#6f8b49",_.fillRect(0,0,z,W),qt(_,z,W,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let O=0;O<900;O++){_.strokeStyle=v()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",_.lineWidth=2;const rt=b(0,z),ct=b(0,W);_.beginPath(),_.moveTo(rt,ct),_.lineTo(rt+b(-2,2),ct-b(5,10)),_.stroke()}}),pe=F(256,256,(_,z,W)=>{_.fillStyle="#8b6a4b",_.fillRect(0,0,z,W),qt(_,z,W,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let O=0;O<120;O++)_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",_.beginPath(),_.ellipse(b(0,z),b(0,W),b(1.5,4),b(1,3),b(0,3),0,Qi*2),_.fill()}),Ze=F(256,256,(_,z,W)=>{_.fillStyle="#b0906a",_.fillRect(0,0,z,W),qt(_,z,W,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let O=0;O<160;O++)_.fillStyle="rgba(120, 90, 60, 0.25)",_.fillRect(b(0,z),b(0,W),2,2)}),me=F(512,512,(_,z,W)=>{_.fillStyle="#5b524c",_.fillRect(0,0,z,W),Yt(_,z,W,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),ye=F(512,512,(_,z,W)=>{_.fillStyle="#6a6058",_.fillRect(0,0,z,W),Yt(_,z,W,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),Ee=F(512,512,(_,z,W)=>{_.fillStyle="#8f6c4b",_.fillRect(0,0,z,W),qt(_,z,W,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let O=0;O<260;O++){const rt=b(6,z-6),ct=b(6,W-6);_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",_.beginPath(),_.ellipse(rt,ct,b(1.5,4),b(1,3),0,0,Qi*2),_.fill()}}),Rt=F(256,512,(_,z,W)=>{const O=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let rt=0;for(const[ct,Gt]of O)_.fillStyle=ct,_.fillRect(0,rt,z,Gt*W+2),rt+=Gt*W;qt(_,z,W,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let ct=0;ct<40;ct++){_.strokeStyle="rgba(40, 26, 18, 0.35)",_.lineWidth=2;const Gt=b(0,z),we=b(.15*W,W);_.beginPath(),_.moveTo(Gt,we),_.lineTo(Gt+b(-10,10),we+b(10,40)),_.stroke()}_.fillStyle="#5a7a44";for(let ct=0;ct<z;ct+=6)_.beginPath(),_.moveTo(ct,0),_.lineTo(ct+3,b(14,34)),_.lineTo(ct+6,0),_.fill()}),Wt=F(256,128,(_,z,W)=>{_.fillStyle="#7a2420",_.fillRect(0,0,z,W);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a2a24":"#6a1e1a",_.fillRect(O*32,0,32,W);_.fillStyle="#e3d5b6",_.fillRect(0,W*.46,z,W*.08),_.fillStyle="#2a2224",_.fillRect(0,W*.43,z,3),_.fillRect(0,W*.57,z,3)}),te=F(256,256,(_,z,W)=>{for(let O=0;O<2;O++)_.fillStyle=["#a59a8c","#958a7d"][O],_.beginPath(),_.ellipse(z/2+b(-20,20),W*(.25+O*.5),z*.32,W*.17,b(-.3,.3),0,Qi*2),_.fill()}),oe=F(512,512,(_,z,W)=>{_.fillStyle="#5f5650",_.fillRect(0,0,z,W),pt(_,0,0,z,W,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),ee=F(512,512,(_,z,W)=>se(_,z,W,["#5a3a2a","#4e3224","#62402e","#553728"])),ae=F(512,512,(_,z,W)=>se(_,z,W,["#4a3226","#553a2b","#3f2a20","#4e3428"])),de=F(512,512,(_,z,W)=>se(_,z,W,["#a17a55","#94704d","#ab845e","#9a7552"])),Mt=F(512,512,(_,z,W)=>se(_,z,W,["#7a5236","#6e4a31","#84593b","#734d33"])),zt=F(512,512,(_,z,W)=>{_.fillStyle="#3f3a3a",_.fillRect(0,0,z,W);for(let O=0;O<4;O++)for(let rt=0;rt<4;rt++)_.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(rt+O*3)%4],_.beginPath(),_.roundRect(rt*128+4,O*128+4,120,120,6),_.fill(),_.fillStyle="rgba(255,255,255,0.05)",_.fillRect(rt*128+10,O*128+10,108,6)}),Ot=F(512,512,(_,z,W)=>{_.fillStyle="#4f4843",_.fillRect(0,0,z,W),pt(_,0,0,z,W,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),L=F(512,512,(_,z,W)=>{_.fillStyle="#4a433f",_.fillRect(0,0,z,W),pt(_,0,0,z,W,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),qt(_,z,W,["#3e5a34","#4a3a30"],14,20,60,"30")}),Qt=F(512,512,(_,z,W)=>{for(let O=0;O<8;O++)_.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][O%4],_.fillRect(O*64,0,64,W),_.fillStyle="rgba(25, 14, 10, 0.45)",_.fillRect(O*64,0,3,W),_.fillStyle="rgba(255, 220, 190, 0.05)",_.fillRect(O*64+8,0,3,W);_.fillStyle="#7a2320",_.fillRect(0,34,z,70),_.strokeStyle="#d9c9a6",_.lineWidth=6,_.lineJoin="round",_.beginPath();for(let O=0;O<=z;O+=32)_.lineTo(O,O%64?52:86);_.stroke()}),Jt=F(256,256,(_,z,W)=>{_.fillStyle="#4e1612",_.fillRect(0,0,z,W);for(let O=0;O<8;O++){const rt=O%2?16:0;for(let ct=-32;ct<z+32;ct+=32)_.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(v()*4)],_.beginPath(),_.roundRect(ct+rt+1,O*32+2,30,30,[2,2,12,12]),_.fill(),_.fillStyle="rgba(255, 200, 170, 0.12)",_.fillRect(ct+rt+5,O*32+5,22,3);_.fillStyle="rgba(30, 6, 6, 0.35)",_.fillRect(0,O*32,z,3)}}),Xt=F(256,256,(_,z,W)=>{for(let O=0;O<4;O++)_.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][O],_.fillRect(O*64,0,64,W),_.fillStyle="rgba(20, 8, 6, 0.45)",_.fillRect(O*64,0,3,W)}),Ct=F(256,512,(_,z,W)=>{_.fillStyle="#6e1a19",_.fillRect(0,0,z,W),_.fillStyle="#2a1e1f",_.fillRect(0,0,z,26),_.fillRect(0,0,14,W),_.fillRect(z-14,0,14,W),_.fillStyle="#b08a3e",_.fillRect(0,26,z,6),_.fillStyle="#e3d5b6",_.beginPath(),_.moveTo(52,300),_.lineTo(204,300),_.lineTo(188,332),_.lineTo(156,332),_.lineTo(164,368),_.lineTo(196,368),_.lineTo(196,396),_.lineTo(60,396),_.lineTo(60,368),_.lineTo(92,368),_.lineTo(100,332),_.lineTo(68,332),_.closePath(),_.fill(),_.beginPath(),_.moveTo(128,120),_.bezierCurveTo(168,164,176,192,164,216),_.bezierCurveTo(152,236,104,236,92,216),_.bezierCurveTo(80,192,100,176,112,152),_.bezierCurveTo(120,168,124,172,132,176),_.bezierCurveTo(132,160,128,140,128,120),_.fill(),_.fillStyle="#6e1a19",_.beginPath(),_.moveTo(0,W),_.lineTo(z/2,W-60),_.lineTo(z,W),_.fill()}),jt=F(64,256,(_,z,W)=>{_.fillStyle="#6fa9c9",_.fillRect(0,0,z,W);for(let O=0;O<40;O++)_.fillStyle=O%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",_.fillRect(O*23%64,O*41%256,3+O%3*2,18+O%5*10)}),bt=F(128,128,(_,z,W)=>{_.fillStyle="#c4c4c4",_.fillRect(0,0,z,W);for(let O=0;O<70;O++){const rt=O*37%z,ct=(O*59+O%7*11)%W,Gt=4+O%4*3;_.fillStyle=O%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",_.beginPath(),_.ellipse(rt,ct,Gt,1.2+O%3*.5,O*.7%3.14,0,2*Math.PI),_.fill(),rt+Gt>z&&(_.beginPath(),_.ellipse(rt-z,ct,Gt,1.4,O*.7%3.14,0,2*Math.PI),_.fill())}}),lt=F(256,180,(_,z,W)=>{_.fillStyle="#efe4cc",_.fillRect(0,0,z,W),_.strokeStyle="#4f76b0",_.lineWidth=3,_.strokeRect(20,20,216,30),_.strokeRect(20,62,66,46),_.strokeRect(95,62,66,46),_.strokeRect(170,62,66,46),_.strokeRect(20,120,216,42),_.strokeStyle="#b8483e",_.beginPath(),_.moveTo(26,150),_.lineTo(80,132),_.lineTo(130,145),_.lineTo(226,126),_.stroke()}),C=F(256,200,(_,z,W)=>{const O=_.createLinearGradient(0,0,0,W);O.addColorStop(0,"#d98a62"),O.addColorStop(1,"#f2d2a8"),_.fillStyle=O,_.fillRect(0,0,z,W),_.fillStyle="#5c6f48",_.beginPath(),_.moveTo(0,150),_.quadraticCurveTo(80,100,150,140),_.quadraticCurveTo(210,120,256,135),_.lineTo(256,200),_.lineTo(0,200),_.fill(),_.fillStyle="#4a3a3c",_.fillRect(150,70,44,72),_.fillStyle="#7a2420",_.beginPath(),_.moveTo(144,72),_.lineTo(172,40),_.lineTo(200,72),_.fill(),_.fillStyle="#ffd27a",_.fillRect(165,92,14,18)}),S=F(256,200,_=>{_.fillStyle="#c8b18a",_.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((z,W)=>{_.fillStyle=z,_.fillRect(16+W%3*78,16+Math.floor(W/3)*60,66,48)}),_.fillStyle="#efe4cc",_.fillRect(16,140,224,44),_.fillStyle="#2b3a36",_.fillRect(28,152,120,8),_.fillRect(28,166,80,6)}),$=F(256,160,(_,z,W)=>{_.fillStyle="rgba(40, 200, 220, 0.18)",_.fillRect(0,0,z,W);const O=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let rt=0;rt<9;rt++)_.fillStyle=O[rt%4],_.fillRect(18+rt%3*12,18+rt*14,40+rt*53%140,6)}),yt=F(256,128,(_,z,W)=>{_.fillStyle="#3d6f99",_.fillRect(0,0,z,W),_.fillStyle="#8aa866";for(const[O,rt,ct,Gt]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])_.beginPath(),_.ellipse(O,rt,ct,Gt,.3,0,Qi*2),_.fill()}),mt=F(128,128,(_,z,W)=>{_.fillStyle="#c9a75a",_.fillRect(0,0,z,W);for(let O=0;O<160;O++){_.strokeStyle=O%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",_.lineWidth=2;const rt=b(0,z),ct=b(0,W);_.beginPath(),_.moveTo(rt,ct),_.lineTo(rt+6,ct+2),_.stroke()}}),Nt=F(128,128,_=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((z,W)=>{_.fillStyle=z,_.beginPath(),_.arc(64,64,62-W*12,0,Qi*2),_.fill()})}),kt=F(256,256,(_,z,W)=>{_.fillStyle="#7a5a3c",_.fillRect(0,0,z,W);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a9a48":"#a7a24e",_.fillRect(0,O*32+6,z,20)}),vt=F(64,64,_=>ge(_,"rgba(255,255,255,1)","rgba(255,255,255,0)")),Tt=F(64,64,_=>ge(_,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Dt=F(64,64,_=>{_.translate(32,32),_.fillStyle="#fff6c8",_.beginPath();for(let z=0;z<8;z++){const W=z%2?9:30,O=z*Qi/4;_.lineTo(Math.cos(O)*W,Math.sin(O)*W)}_.closePath(),_.fill()}),V=F(8,512,(_,z,W)=>{const O=_.createLinearGradient(0,0,0,W);O.addColorStop(0,"#4c6994"),O.addColorStop(.38,"#8ea6c4"),O.addColorStop(.62,"#d8c2a6"),O.addColorStop(.8,"#e2a682"),O.addColorStop(1,"#b8674f"),_.fillStyle=O,_.fillRect(0,0,z,W)});V.wrapS=V.wrapT=ii;const xt={grass:Zt,dirt:pe,sand:Ze,tCobble:me,tFlag:ye,tDirt:Ee,strata:Rt,balloon:Wt,roadStones:te,plaza:oe,planksWar:ee,planksDark:ae,planksLight:de,planks:Mt,slate:zt,stoneWall:Ot,castleWall:L,plankWall:Qt,roof:Jt,gable:Xt,banner:Ct,water:jt,ripple:bt,paper:lt,painting:C,moodboard:S,code:$,globe:yt,straw:mt,target:Nt,field:kt,soft:vt,blob:Tt,spark:Dt,sky:V,grain:void 0};function _t(_,z=2.2){const W=_.image,O=W.width,rt=W.height;if(!(O>0)||!(rt>0))return _;const ct=W.getContext("2d");if(!ct)return _;const Gt=ct.getImageData(0,0,O,rt).data,we=new Float32Array(O*rt);for(let Kt=0;Kt<O*rt;Kt++)we[Kt]=((Gt[Kt*4]??0)*.299+(Gt[Kt*4+1]??0)*.587+(Gt[Kt*4+2]??0)*.114)/255;const Ce=document.createElement("canvas");Ce.width=O,Ce.height=rt;const _e=Ce.getContext("2d");if(!_e)return _;const Ve=_e.createImageData(O,rt);for(let Kt=0;Kt<rt;Kt++)for(let ce=0;ce<O;ce++){const un=we[Kt*O+(ce-1+O)%O]??0,yn=we[Kt*O+(ce+1)%O]??0,En=we[(Kt-1+rt)%rt*O+ce]??0,T=we[(Kt+1)%rt*O+ce]??0,D=(un-yn)*z,G=(T-En)*z,J=Math.hypot(D,G,1),ut=(Kt*O+ce)*4;Ve.data[ut]=(D/J*.5+.5)*255,Ve.data[ut+1]=(G/J*.5+.5)*255,Ve.data[ut+2]=(1/J*.5+.5)*255,Ve.data[ut+3]=255}_e.putImageData(Ve,0,0);const Pe=new mc(Ce);return Pe.wrapS=Pe.wrapT=xi,Pe.colorSpace=ts,Pe.anisotropy=_.anisotropy,Pe.repeat.copy(_.repeat),Pe}const Vt={},et=(_,z)=>Vt[_]||=_t(xt[_],z);function q(_,z=1,W=1,O=2.2,rt={}){const ct=z===1&&W===1?xt[_]:U(xt[_],z,W),Gt=z===1&&W===1?et(_,O):U(et(_,O),z,W);return h("#ffffff",Object.assign({map:ct,normalMap:Gt,normalScale:new Ut(1,1)},rt))}xt.grain=F(256,256,(_,z,W)=>{_.fillStyle="#d6cbbf",_.fillRect(0,0,z,W);for(let O=0;O<70;O++){_.strokeStyle=v()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",_.lineWidth=b(1,3);const rt=b(0,z);_.beginPath(),_.moveTo(rt,0),_.bezierCurveTo(rt+b(-8,8),W*.3,rt+b(-8,8),W*.7,rt+b(-4,4),W),_.stroke()}for(let O=0;O<6;O++){const rt=b(10,z-10),ct=b(10,W-10);_.strokeStyle="rgba(80, 50, 30, 0.3)",_.lineWidth=2,_.beginPath(),_.ellipse(rt,ct,b(3,6),b(8,14),0,0,Qi*2),_.stroke()}});const dt=_=>{const z=h(_,{map:xt.grain,normalMap:et("grain",1.5)});return z.userData.autoUV=!0,z},Lt={stone:q("stoneWall",1,1,2),castle:q("castleWall",1,1,2),plankWall:q("plankWall",1,1,1.4),timber:h(ti.timber),wood:dt(ti.wood),woodD:dt(ti.woodD),woodL:dt(ti.woodL),iron:h(ti.iron),ironL:h(ti.ironL),rust:h(ti.rust),bone:h(ti.bone),boneD:h(ti.boneD),red:h(ti.red),redD:h(ti.redD),redL:h(ti.redL),black:h(ti.black),gold:h(ti.gold),straw:h("#ffffff",{map:xt.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:t,renderer:s,COL:ti,GRAD:e,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:l,toon:h,glow:f,mesh:u,rbox:p,part:x,at:m,rot:g,put:M,spike:E,rnd:w,rr:I,pick:P,trnd:v,tr:b,canvasTex:F,blobs:qt,edgeFade:ue,tiled:U,planarUV:X,wallUV:st,instanced:nt,boxes:wt,UNIT_BOX:ht,TEX:xt,nrm:et,relief:q,woodMat:dt,M:Lt,_c:H}}const{PI:cn}=Math,On=.32,Zo=s=>s.userData.up,Qy=s=>s.userData.cutY;function jy(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:x,put:m,spike:g,rr:M,pick:E,tiled:w,planarUV:I,wallUV:P,boxes:v}=s,{SPINNERS:b,skull:F,horns:U,torch:X,flame:st,table:j,skullCandle:N,throne:it,rug:at,trophy:Y,hangingBanner:H,weaponRack:nt,shield:ht,brazier:wt,chest:qt,crate:ue,barrel:pt,stool:Yt,drum:se,poleBanner:ge,skullPole:Zt,woodpile:pe,spikes:Ze,bookshelf:me,desk:ye,candle:Ee,fence:Rt,plant:Wt,cauldron:te,bench:oe,lampPost:ee,scrollStack:ae,telescope:de,starGlobe:Mt,crystal:zt,wallMap:Ot,easel:L,bottle:Qt,anvil:Jt,sack:Xt,cart:Ct,roundTable:jt,mug:bt,lanternString:lt,signPost:C,bed:S,curtain:$,partition:yt,wardrobe:mt}=t,{patch:Nt}=e,kt={},vt={war:[l.planksWar,2.6],dark:[l.planksDark,2.6],light:[l.planksLight,2.6],planks:[l.planks,2.6],tiles:[l.slate,3.6]};function Tt(tt,A,St,ot,y,R,Q={}){const B=Q.T||On,K=Q.base||0,ft=Q.stone!==!1,It=ft?1.15:K,Ft=ft?Ye:K,Bt=ft?It:K+.9,ne=p(new At,0,Bt,0);tt.add(ne),tt.userData.up=ne,ne.userData.movesWithWall=!0,tt.userData.cutY=Bt;const le={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function he(Re,qe){const[on,Je,Qe,Z,gt,Ht,fe=0,Ne=0,Se=0]=qe,Ae=Je-gt/2,$t=Je+gt/2,[Ue,Fe]=le[Re];fe||Se||Ae>=Bt-.01?Fe.push([on,Je-Bt,Qe,Z,gt,Ht,fe,Ne,Se]):$t<=Bt+.01?Ue.push(qe):(Ue.push([on,(Ae+Bt)/2,Qe,Z,Bt-Ae,Ht,fe,Ne,Se]),Fe.push([on,(Bt+$t)/2-Bt,Qe,Z,$t-Bt,Ht,fe,Ne,Se]))}const re=ot?ot.x-ot.w/2:0,Ie=ot?ot.x+ot.w/2:0,Oe=ot?[[-A/2,re],[Ie,A/2]]:[[-A/2,A/2]],Le=St-It;for(const[Re,qe]of Oe){const on=qe-Re;if(on<.05)continue;const Je=(Re+qe)/2;if(ft)tt.add(p(u(I(new Pt(on,It,B+.08),1.6),o.stone),Je,It/2,0)),ne.add(p(u(P(new Pt(on,Le,B),Le,1.3),o.plankWall),Je,Le/2,0));else{const Qe=Bt-It,Z=St-Bt;tt.add(p(u(P(new Pt(on,Qe,B),Qe,1.3,0,Le),o.plankWall),Je,It+Qe/2,0)),ne.add(p(u(P(new Pt(on,Z,B),Z,1.3,Qe,Le),o.plankWall),Je,Z/2,0))}}if(ot){const Re=Ye+2.3,qe=St-Re;ne.add(p(u(P(new Pt(ot.w,qe,B),qe,1.3),o.plankWall),ot.x,Re+qe/2-Bt,0)),he("timber",[ot.x-ot.w/2-.1,(Re+.1)/2,0,.24,Re+.1,B+.16]),he("timber",[ot.x+ot.w/2+.1,(Re+.1)/2,0,.24,Re+.1,B+.16]),he("timber",[ot.x,Re+.08,0,ot.w+.8,.3,B+.2]);for(const on of[-1,1])for(let Je=0;Je<4;Je++)he("timber",[ot.x+on*(ot.w/2+.1),.35+Je*.55,B/2+.09,.07,.07,.04]);ne.add(p(F(.26),ot.x,Re+.42-Bt,B/2+.17)),ne.add(p(U(.6),ot.x,Re+.48-Bt,B/2+.15));for(const on of[-1,1])ne.add(p(X(),ot.x+on*(ot.w/2+.55),Ye+1.7-Bt,B/2+.02))}he("timber",[0,It+(ft?0:.09),0,A,.18,B+.12]),he("timber",[0,St-.1,0,A,.22,B+.12]);const Ge=Math.max(1,Math.round(A/2.3)),dn=[];for(let Re=1;Re<Ge;Re++){const qe=-A/2+Re*A/Ge;if(!(ot&&qe>re-.45&&qe<Ie+.45)){dn.push(qe),he("timber",[qe,It+Le/2,0,.2,Le,B+.1]);for(const on of[It+.09,St-.1])he("timber",[qe,on,B/2+.08,.09,.09,.06])}}if(y)for(const Re of[-A/2+.2,A/2-.2])he("timber",[Re,(K+St+.12)/2,0,.42,St-K+.12,B+.18]);const Me=[-A/2+(y?.41:0),...dn,A/2-(y?.41:0)];ot&&Me.push(re-.22,Ie+.22),Me.sort((Re,qe)=>Re-qe);let xn=0;for(let Re=0;Re<Me.length-1;Re++){const qe=Me[Re],on=Me[Re+1],Je=on-qe,Qe=(qe+on)/2;if(!(Je<.9)&&!(ot&&Qe>re-.3&&Qe<Ie+.3)){if(xn++,R&&Je>1.5&&xn%2===1){const Z=Ft+(ft?1.62:1.35);he("panes",[Qe,Z,0,.86,.78,Q.paneT||B+.04]);for(const gt of[[Qe,Z+.44,0,1.08,.1,B+.12],[Qe,Z-.44,0,1.12,.12,B+.16],[Qe-.48,Z,0,.1,.96,B+.12],[Qe+.48,Z,0,.1,.96,B+.12],[Qe,Z,0,.06,.78,B+.06],[Qe,Z,0,.86,.05,B+.06]])he("timber",gt);for(const gt of[-1,1])he("shutters",[Qe+gt*.78,Z,B/2+.05,.42,.86,.05,0,gt*.35,0]),he("timber",[Qe+gt*.78+gt*.012,Z,B/2+.09,.44,.08,.03,0,gt*.35,0])}else if(Je>1){const Z=Le-.3,gt=Math.atan2(Z,Je-.2),Ht=Math.hypot(Z,Je-.2);for(const fe of[-1,1])he("timber",[Qe,It+Le/2,B/2+.04,Ht,.13,.06,0,0,fe*gt])}}}const[We,Wn]=le.timber,[gn,ai]=le.panes,[Xn,Yn]=le.shutters;v(tt,o.timber,We),v(ne,o.timber,Wn),v(tt,o.pane,gn,!1),v(ne,o.pane,ai,!1),v(tt,o.red,Xn),v(ne,o.red,Yn),Vt(tt,Bt)}const Dt=new k,V=new ze,xt=new ze,_t=new ze;function Vt(tt,A){const St=Zo(tt),ot=new Map;tt.traverse(B=>{if(!(B instanceof He)||Array.isArray(B.material))return;for(let It=B;It&&It!==tt;It=It.parent)if(It===St)return;const K=B.material,ft=ot.get(K);ft?ft.push(B):ot.set(K,[B])});const y=B=>{const K=B;return(K.color?K.color.r*.3+K.color.g*.59+K.color.b*.11:0)+(K.map?.5:0)},R=[...ot.keys()].sort((B,K)=>y(B)-y(K));tt.updateWorldMatrix(!0,!0),_t.copy(tt.matrixWorld).invert();const Q=new Set;R.forEach((B,K)=>{if(K)for(const ft of ot.get(B)??[]){const It=ft.geometry;if(Q.has(It))continue;Q.add(It),V.multiplyMatrices(_t,ft.matrixWorld),xt.copy(V).invert();const Ft=It.attributes.position;let Bt=!1;for(let ne=0;ne<Ft.count;ne++)Dt.fromBufferAttribute(Ft,ne).applyMatrix4(V),!(Math.abs(Dt.y-A)>.002)&&(Dt.y-=.003*K,Dt.applyMatrix4(xt),Ft.setXYZ(ne,Dt.x,Dt.y,Dt.z),Bt=!0);Bt&&(Ft.needsUpdate=!0,It.computeBoundingBox(),It.computeBoundingSphere())}})}function et(tt){const A=[],St=new Map;return tt.traverse(ot=>{if(!(ot instanceof He))return;const y=ot.material;let R=St.get(y);R||(R=y.clone(),R.transparent=!0,St.set(y,R),A.push(R)),ot.material=R}),A}function q(tt,A,St){const ot=tt.r,y=St.pitch||.6,R=.6,Q=ot.d/2+R,B=new At;B.position.y=A-R*Math.tan(y),tt.g.add(B);const K=Q*Math.tan(y),ft=R*Math.tan(y),It=Q/Math.cos(y),Ft=d("#ffffff",{map:l.roof});for(const Oe of[-1,1]){const Le=u(I(new Pt(ot.w+R*2,.18,It),1.6),Ft);Le.rotation.x=Oe<0?-y:y,Le.position.set(0,K/2,Oe*Q/2),B.add(Le)}const Bt=new ro;Bt.moveTo(-ot.d/2,ft),Bt.lineTo(ot.d/2,ft),Bt.lineTo(0,K-.12),Bt.closePath();const ne=new ih(Bt),le=d("#ffffff",{map:l.gable,side:Sn});for(const Oe of[-1,1])B.add(p(x(u(ne,le),0,cn/2,0),Oe*(ot.w/2+.02),0,0)),B.add(p(x(F(.34),0,Oe*cn/2,0),Oe*(ot.w/2+.2),ft+(K-ft)*.42,0)),B.add(p(x(U(1.1),0,Oe*cn/2,0),Oe*(ot.w/2+R+.05),K+.12,0));B.add(p(u(new Pt(ot.w+R*2+.2,.2,.26),o.iron),0,K+.04,0));const he=Math.floor((ot.w+R)/1.5);for(let Oe=0;Oe<he;Oe++)g(B,new k(-ot.w/2+.5+Oe*(ot.w-1)/Math.max(1,he-1),K+.12,0),h,.34,.06,o.boneD,0,5);let re=null;if(St.chimney){const[Oe,Le]=St.chimney,Ge=K+1.4;B.add(p(u(I(new Pt(.85,Ge,.85),1.2),o.stone),Oe,Ge/2,Le)),B.add(p(u(new Pt(1.05,.16,1.05),o.iron),Oe,Ge+.05,Le)),re=[Oe,Ge+.3,Le]}const Ie=et(B);return{R:B,mats:Ie,base:B.position.y,hR:K,smokeAt:re}}function dt(tt){return{S:{c:[0,tt.d/2],n:[0,1],L:tt.w+On},N:{c:[0,-tt.d/2],n:[0,-1],L:tt.w+On},E:{c:[tt.w/2,0],n:[1,0],L:tt.d-On},W:{c:[-tt.w/2,0],n:[-1,0],L:tt.d-On}}}function Lt(tt,A){const St=new At;tt.add(St);const ot=new At;return ot.position.set(A.c[0],0,A.c[1]),ot.rotation.y=Math.atan2(A.n[0],A.n[1]),St.add(ot),{sg:St,sf:ot}}function _(tt,A,St){if(!A)return;A.updateWorldMatrix(!0,!0),tt.g.updateMatrixWorld(!0);const ot=[];A.traverse(y=>{y instanceof He&&ot.push(y)});for(const y of ot){const R=y.geometry;R.attributes.uv||R.setAttribute("uv",new Be(new Float32Array(R.attributes.position.count*2),2));const Q=If(s,y.material),B=new He(R,Q);B.castShadow=!Q.isMeshStandardMaterial,B.receiveShadow=!0,y.matrixWorld.decompose(B.position,B.quaternion,B.scale),tt.g.add(B),B.updateMatrixWorld(!0),St.attach(B)}}function z(tt,A,St,ot,y,R={}){const Q=R.T||On,B=R.stone!==!1,K=R.base||0,ft=B?1.15:K+.9,It=p(new At,0,ft,0);if(A.add(It),A.userData.up=It,It.userData.movesWithWall=!0,A.userData.cutY=ft,_(tt,St,A),_(tt,ot,It),Vt(A,ft),y)for(const Ft of[-1,1])It.add(p(X(),y.x+Ft*(y.w/2+.55),Ye+1.7-ft,Q/2+.08))}function W(tt,A,St,ot){const y=tt.r,R=St.pitch||.6,Q=.6,B=y.d/2+Q,K=new At;K.position.y=A-Q*Math.tan(R),tt.g.add(K);const ft=B*Math.tan(R);_(tt,ot,K);const It=et(K);let Ft=null;if(St.chimney){const[Bt,ne]=St.chimney;Ft=[Bt,ft+1.4+.3,ne]}return{R:K,mats:It,base:K.position.y,hR:ft,smokeAt:Ft}}const O={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function rt(tt,A={}){const St=new At;St.position.set(tt.x,0,tt.z),St.rotation.y=tt.ry||0,r.add(St);const ot=tt.id||A.id,y={id:ot,r:tt,g:St,sides:{},lift:0,view:"ground",deco:!!A.deco,name:tt.name,top:0},R=O[ot],Q=le=>R?Uf(R,ot+"_"+le):null;R?_(y,Q("base"),St):St.add(p(u(I(new Pt(tt.w+.6,Ye+.3,tt.d+.6),1.4),o.stone),0,(Ye+.3)/2-.3,0));const[B,K]=vt[tt.floor||"planks"];St.add(x(p(u(new ln(tt.w,tt.d),d("#ffffff",{map:w(B,tt.w/K,tt.d/K)}),!1),0,Ye+.004,0),-cn/2,0,0));const ft=Ye+tt.wallH,It=dt(tt),Ft=tt.doorLocal||[0,tt.d/2],Bt=tt.door?tt.door.side:"S";for(const[le,he]of Object.entries(It)){const{sg:re,sf:Ie}=Lt(St,he),Oe=Math.cos(Ie.rotation.y),Le=-Math.sin(Ie.rotation.y),Ge=Bt===le?{x:(Ft[0]-he.c[0])*Oe+(Ft[1]-he.c[1])*Le,w:tt.door&&tt.door.width||1.4}:null;R?z(y,Ie,Q(le+"_lo"),Q(le+"_hi"),Ge):Tt(Ie,he.L,ft,Ge,le==="N"||le==="S",A.windows!==!1),y.sides[le]={g:re,sf:Ie,up:Zo(Ie),n:he.n,s:1}}if(!R){const le=tt.doorN||[0,1],he=Math.abs(le[0])>0?[.7,(tt.door&&tt.door.width||1.4)+.5]:[(tt.door&&tt.door.width||1.4)+.5,.7];St.add(p(u(I(new Pt(he[0],.14,he[1]),1.2),o.stone),Ft[0]+le[0]*.62,.07,Ft[1]+le[1]*.62))}let ne=ft;if(tt.storeys===2){const le=tt.upperH||2.5,he=p(new At,0,ft,0);he.userData.movesWithWall=!0,St.add(he);const re={U:he,sides:{},lift:0,mats:[],top:ft};if(y.upper=re,R)_(y,Q("Ufloor"),he);else{const Oe=d("#ffffff",{map:B}),[Le,Ge,dn,Me]=A.stairHole||[0,0,0,0],xn=tt.w/2,We=tt.d/2,Wn=A.stairHole?[[-xn,Le,-We,We],[Ge,xn,-We,We],[Le,Ge,-We,dn],[Le,Ge,Me,We]]:[[-xn,xn,-We,We]];for(const[gn,ai,Xn,Yn]of Wn)ai-gn<.05||Yn-Xn<.05||he.add(p(u(I(new Pt(ai-gn,.22,Yn-Xn),K),Oe),(gn+ai)/2,.09,(Xn+Yn)/2))}const Ie=[];for(const[Oe,Le]of Object.entries(It)){const{sg:Ge,sf:dn}=Lt(he,Le);R?z(y,dn,Q("U"+Oe+"_lo"),Q("U"+Oe+"_hi"),null,{base:.2,stone:!1,T:On-.05}):(Tt(dn,Le.L,.2+le,null,Oe==="N"||Oe==="S",!0,{base:.2,stone:!1,T:On-.05,paneT:On-.03}),Ie.push([0,.05,.2,Le.L+.2,.2,.18]),v(dn,o.timber,Ie.slice(-1))),re.sides[Oe]={g:Ge,sf:dn,up:Zo(dn),n:Le.n,s:1}}ne=ft+.2+le}return y.top=ne,y.roof=R?W(y,ne,A,Q("roof")):q(y,ne,A),kt[ot]=y,y}function ct(tt,A,St,ot,y){const R=tt.upper,Q=12,B=R.top+.2-Ye,K=(ot-St)/Q,ft=[];for(let le=0;le<Q;le++){const he=B*(le+1)/Q;ft.push([A,Ye+he/2,St+K*(le+.5),y,he,Math.abs(K)+.01])}v(tt.g,o.wood,ft);const It=A>0?-1:1,Ft=A+It*(y/2+.04);for(let le=0;le<=4;le++){const he=St+(ot-St)*le/4,re=Ye+B*le/4;tt.g.add(p(u(new Pt(.07,.95,.07),o.woodD),Ft,re+.5,he))}const Bt=Math.hypot(ot-St,B),ne=p(u(new Pt(.08,.08,Bt),o.woodL),Ft,Ye+B/2+.95,(St+ot)/2);ne.rotation.x=-Math.atan2(B,ot-St),tt.g.add(ne)}function Gt(tt,A,St,ot,y){const R=Qy(tt);ot>R?(A.position.set(St,ot-R,y),Zo(tt).add(A)):(A.position.set(St,ot,y),tt.add(A))}const we=(tt,A)=>tt==="S"?A:tt==="N"||tt==="E"?-A:A;function Ce(tt,A,St,ot,y,R=.1){const Q=tt.upper.sides[A];return St.rotation.y=cn,Gt(Q.sf,St,we(A,ot),y,-((On-.05)/2+R/2+.01)),St}const _e=(tt,A,St,ot,y=0)=>m(tt.upper.U,A,St,ot,y,.2);function Ve(tt,A,St=0,ot=.9){for(let y=0;y<A.length-1;y++){const[R,Q]=A[y],[B,K]=A[y+1],ft=Math.hypot(B-R,K-Q),It=p(u(new Pt(ft,.07,.07),o.woodL),(R+B)/2,St+ot,(Q+K)/2);It.rotation.y=-Math.atan2(K-Q,B-R),tt.add(It);const Ft=Math.max(1,Math.round(ft/.5));for(let Bt=0;Bt<=Ft;Bt++)tt.add(p(u(new Pt(.05,ot,.05),o.woodD),R+(B-R)*Bt/Ft,St+ot/2,Q+(K-Q)*Bt/Ft))}}function Pe(tt,A,St,ot,y,R=.1,Q=!0){const B=tt.sides[A];return Q&&(St.rotation.y=cn),Gt(B.sf,St,we(A,ot),y,Q?-(On/2+R/2+.01):On/2+R/2+.01),St}const Kt=(tt,A,St,ot,y=0)=>m(tt.g,A,St,ot,y,Ye),ce=(tt,A,St,ot,y=0)=>m(tt.g,A,St,ot,y,0),un=(tt,A,St)=>Of(tt,A,St),yn=document.createElement("canvas");yn.width=512,yn.height=280;const En=new mc(yn);En.colorSpace=In;let T=i;function D(tt=T){T=tt;const A=yn.getContext("2d");if(!A)return;const St=512,ot=tt.filter(R=>R==="done").length;A.fillStyle="#2e2422",A.fillRect(0,0,St,280),A.fillStyle="#e3d5b6",A.font=`800 40px ${Rc}`,A.textAlign="left",A.fillText("TASKS",28,58),A.fillStyle="#ffd27a",A.textAlign="right",A.fillText(`${ot} / 5`,St-28,58);const y={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((R,Q)=>{const B=28+Q*94,K=90;A.fillStyle=y[tt[Q]??"todo"],A.beginPath(),A.roundRect(B,K,78,96,14),A.fill(),A.fillStyle="rgba(255, 255, 255, 0.22)",A.beginPath(),A.roundRect(B+6,K+6,66,18,8),A.fill(),A.fillStyle="#1e1a1c",A.font=`800 46px ${Rc}`,A.textAlign="center",A.fillText(R,B+39,K+70)}),A.fillStyle="#1b1616",A.beginPath(),A.roundRect(28,220,St-56,28,14),A.fill(),ot&&(A.fillStyle="#d9762e",A.beginPath(),A.roundRect(28,220,(St-56)*ot/5,28,14),A.fill()),En.needsUpdate=!0}D(),document.fonts&&document.fonts.ready.then(()=>D());function G(){const tt=new At;return tt.add(u(new Pt(2.7,1.65,.1),o.woodD)),tt.add(p(new He(new ln(2.45,1.35),new Vn({map:En,toneMapped:!1})),0,0,.06)),tt.add(p(u(new Pt(2.9,.14,.2),o.wood),0,.9,.02)),tt.add(p(F(.18),0,1.08,.06)),tt}{const tt=wi.war,A=rt(tt,{pitch:.62}),St=Ye+tt.wallH;Kt(A,j(3.4,2,.86),-2.5,-.6);{const ot=new ln(3,1.7,26,16),y=ot.attributes.position,R=[];for(let B=0;B<y.count;B++){const K=y.getX(B),ft=y.getY(B),It=Math.max(0,Math.sin(K*2.1+1)*Math.cos(ft*2.7)*.1+Math.sin(K*5+ft*3)*.03);y.setZ(B,It),R.push(...It>.08?[.86,.82,.76]:It>.03?[.5,.38,.28]:It>.005?[.42,.55,.32]:[.32,.5,.62])}ot.setAttribute("color",new Be(R,3)),ot.computeVertexNormals();const Q=x(p(u(ot,new ia({vertexColors:!0,gradientMap:c}),!1),-2.5,Ye+.91,-.6),-cn/2,0,0);A.g.add(Q);for(const[B,K,ft]of[[-.9,-.3,a.red],[.4,.3,"#3f5f8f"],[1,-.4,a.gold],[-.2,-.5,a.red]])A.g.add(p(u(new ie(.012,.012,.24,4),o.dark,!1),-2.5+B,Ye+1.05,-.6+K)),A.g.add(p(u(new Pt(.12,.07,.01),d(ft),!1),-2.5+B+.06,Ye+1.13,-.6+K));for(const[B,K]of[[-1.55,-.85],[1.55,.85]])Kt(A,N(),-2.5+B,-.6+K).position.y=Ye+.9}Kt(A,it(),-6.1,-2.6,gd(-6.1,-2.6,-2.5,-.6)),Kt(A,at(1.6,[a.redD,a.bone,a.red,a.black,a.redL,a.redD]),-4.6,.6),Pe(A,"N",G(),3.8,Ye+1.95,.12),Pe(A,"N",Y(),-2.5,Ye+2.2,.1),Pe(A,"N",Y(),.9,Ye+2.1,.1),Pe(A,"N",H(1,1.9),-5.4,St-.3,.04),Pe(A,"N",H(1,1.9),6.4,St-.3,.04),Pe(A,"W",nt(4),.6,Ye,.3),Pe(A,"E",ht(a.red),-2,Ye+1.9,.1),Pe(A,"E",ht(a.black),1.2,Ye+1.9,.1),Kt(A,wt(7),6.3,-3.3),Kt(A,wt(0,.85),-6.7,3.5),Kt(A,qt(),6.3,1.6,-cn/2),Kt(A,ue(.6),5.3,3.6,.3),Kt(A,ue(.45),5.9,3.7,.9),Kt(A,pt(.9),-6.6,-.6),Kt(A,Yt(),-.9,-2.2),Nt("plaza",...un(tt,0,7.4),5.8,3.6,-tt.ry,.014),ce(A,se(),-4.4,6,.3),ce(A,se(),5.6,5.9,-.2),ce(A,ge(3.4),-2.6,5),ce(A,ge(3.4),2.6,5),ce(A,Zt(2.6),-7,6.2),ce(A,Zt(2.2),7.8,5.4),ce(A,wt(0),-6.2,5),ce(A,pe(2.4),-3,-6),ce(A,pt(),4.4,-5.6),ce(A,pt(.9),5,-6.1),ce(A,pt(1,!0),3.6,-6.2,.4),ce(A,x(nt(4),0,cn,0),.8,-5.6),ce(A,Ze(3),-8.6,-1,cn/2)}{const tt=wi.library,A=rt(tt,{pitch:.66,stairHole:[4,4.84,-2,0]}),St=Ye+tt.wallH;for(const R of[-3.6,-1.4])Kt(A,me(2),R,-tt.d/2+On/2+.27);for(const R of[-2.1,.3])Kt(A,me(2),-tt.w/2+On/2+.27,R,cn/2);const ot=ye("books");Kt(A,ot.g,1.8,-1.2),Kt(A,Ee(.18,4),2.45,-.95).position.y=Ye+.79;{const R=new At;R.add(p(u(new Pt(1,.45,.9),d("#5a1f2a")),0,.3,0)),R.add(p(u(new Pt(.86,.12,.74),d("#7a2a36")),0,.58,.04)),R.add(p(u(new Pt(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const Q of[-1,1])R.add(p(u(new Pt(.2,.6,.9),d("#4a1822")),Q*.5,.52,0));Kt(A,R,-3.3,1.9,.9)}Kt(A,at(1.5,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const R=new At;R.add(p(u(new ie(.08,.2,1,8),o.woodD),0,.5,0)),R.add(x(p(u(new Pt(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),R.add(x(p(u(new Pt(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Kt(A,R,2.3,2.5,-.5)}{const R=new At;R.add(p(u(new ie(.05,.2,.9,10),o.woodD),0,.45,0));const Q=p(new At,0,1.25,0);Q.rotation.z=.4;const B=u(new an(.34,24,16),d("#ffffff",{map:l.globe}));Q.add(B),Q.add(x(u(new Cn(.4,.02,6,28),o.gold),0,cn/2,0)),R.add(Q),Kt(A,R,.5,3),b.push({o:B,axis:"y",v:.25})}{const R=new At;R.add(p(u(new ie(.16,.26,.9,8),o.woodD),0,.45,0)),R.add(p(u(new an(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let Q=0;Q<3;Q++){const B=Q/3*cn*2;g(R,new k(Math.cos(B)*.14,.92,Math.sin(B)*.14),new k(Math.cos(B),2,Math.sin(B)),.3,.03,o.bone,0,5)}Kt(A,R,3,-3.2)}const y=[];for(const[R,Q,B]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[K,ft]=un(tt,R,Q);let It=Ye;for(let Ft=0;Ft<B;Ft++){const Bt=M(.06,.1);y.push({x:K+M(-.03,.03),y:It+Bt/2,z:ft+M(-.03,.03),sx:M(.32,.42),sy:Bt,sz:M(.24,.3),ry:tt.ry+M(-.3,.3),c:E(t.BOOK_COLS)}),It+=Bt}}s.instanced(s.UNIT_BOX,y,{cast:!0}),Kt(A,N(),-4.3,3.4).position.y=Ye+.42,Kt(A,Ee(.5),-4.5,2.9),Kt(A,Ee(.34),-4.2,2.7),Pe(A,"E",H(.9,1.6),-3,St-.3,.04),Pe(A,"S",Y(),1.6,Ye+2.1,.1);{const R=new At;R.add(p(u(new ie(2.2,2.4,7.6,22),d("#ffffff",{map:w(l.castleWall,3.5,2.4)})),0,3.8,0)),R.add(p(u(new ie(2.6,2.4,.4,22),o.stone),0,7.7,0)),R.add(p(u(new Pn(2.9,3.6,22),d("#ffffff",{map:w(l.roof,5,2)})),0,9.7,0)),R.add(p(F(.45),0,11.8,0));for(const[Q,B]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])R.add(p(x(u(new Pt(.4,.9,.12),o.pane,!1),0,-Q+cn/2,0),Math.cos(Q)*2.32,B,Math.sin(Q)*2.32));R.add(p(x(H(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),ce(A,R,5.6,3.4)}Rt(A.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let R=0;R<10;R++)ce(A,Wt(M(.6,.9)),M(-8.6,-6.2),M(5.3,7.1));ce(A,te(),1.2,6.2),ce(A,oe(1.6,!0),3,6.7,cn),ce(A,Zt(2.2),-.4,5.6),ce(A,ee(0),-4.6,4.6),ce(A,ue(.55),6.2,-1.4,.3),ce(A,ue(.4),6.3,-.8,.8),Nt("dirt",...un(tt,.5,6.4),4.6,2.2,-tt.ry,.013),ct(A,4.42,-3.4,-.2,.84),Ve(A.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const R of[-3.6,-1.4,1])_e(A,me(2),R,-tt.d/2+On/2+.27);for(const R of[-2.1,.3,2.5])_e(A,me(2),-tt.w/2+On/2+.27,R,cn/2);_e(A,j(2.2,1,.8,o.wood),.2,.7),_e(A,ae(),-.4,.6).position.y=1.04,_e(A,ae(),.9,.9).position.y=1.04,_e(A,p(u(new Pt(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,_e(A,Ee(.2),-.6,1).position.y=1,_e(A,Ee(.14),.95,.4).position.y=1,_e(A,Yt(),.2,1.6),_e(A,Yt(),-.9,1.5),_e(A,de(),2.4,2.9,cn),_e(A,Mt(),-2.6,2.6),_e(A,zt(),2.9,-2.8),_e(A,at(1.3,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Ce(A,"S",Ot(),-.6,1.75,.06),Ce(A,"E",Y(),2.4,1.8,.1),_e(A,qt(),-3.6,3.2,0)}{const tt=wi.studio,A=rt(tt,{pitch:.58}),St=Ye+tt.wallH,ot=ye("paper");Kt(A,ot.g,-2,-1.6);{const ft=new At;ft.add(u(new Pt(1.6,1.25,.08),o.wood)),ft.add(p(new He(new ln(1.45,1.1),new Vn({map:l.moodboard,toneMapped:!1})),0,0,.05)),Pe(A,"N",ft,1.6,Ye+1.75,.08)}Kt(A,j(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[ft,It,Ft]of[[-.35,-.1,"#3f5f8f"],[0,.12,a.red],[.32,-.05,a.gold],[.12,-.2,"#5f8a52"]])Kt(A,p(u(new ie(.08,.09,.16,12),d(Ft)),0,.08,0),2.6+ft,-2+It).position.y=Ye+.78;for(let ft=0;ft<3;ft++){const It=p(u(new Pt(.8,.6,.04),d(E(["#efe4cc","#e2d4b6"]))),0,.3,0);It.rotation.x=-.22,Kt(A,It,3.7-ft*.1,1.4+ft*.12,-cn/2)}Kt(A,Wt(1.1),3.8,2.8),Kt(A,Wt(.9),-3.8,2.9),Kt(A,me(1.6),-tt.w/2+On/2+.27,.6,cn/2),Pe(A,"E",H(.9,1.5),.6,St-.3,.04);const[y,R,Q,B]=tt.deck;A.g.add(p(u(I(new Pt(R-y,.2,B-Q),2.6),d("#ffffff",{map:l.planks})),(y+R)/2,.1,(Q+B)/2));const K=p(new At,0,.2,0);A.g.add(K),Rt(K,[[y,Q+.1],[y,B],[-2,B]],.85),Rt(K,[[3.4,B],[R,B],[R,Q+.1]],.85),m(K,L(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(K,oe(1.6,!0),3,4.4,0),m(K,Wt(1),-3.7,4),m(K,Wt(.8),3.8,7.1),m(K,ee(0),-3.9,7.3),m(K,p(u(new ie(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(K,p(u(new ie(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let ft=0;ft<14;ft++)ce(A,p(u(new an(.14,8,6),d(E([a.red,a.bone,"#d98a3a",a.redL]))),0,.14,0),M(-3.5,3.5),M(-5.2,-4.2));ce(A,Zt(2),4.9,-4.6)}const J=ye("screen"),ut=ye("screen");{const tt=wi.workshop,A=rt(tt,{pitch:.6,chimney:[-4,-1.6]}),St=Ye+tt.wallH;Kt(A,J.g,-3,-1.4),Kt(A,ut.g,2,-1.4),Kt(A,zt(),-5,2.6);{const ot=new At;for(const y of[.9,1.5])ot.add(p(u(new Pt(2.4,.06,.4),o.wood),0,y,0));for(const y of[-1,1])ot.add(p(u(new Pt(.06,1.7,.4),o.woodD),y*1.2,.85,0));for(let y=0;y<7;y++)ot.add(p(Qt(E(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+y*.32,.93+y%2*.6,0));ot.add(p(F(.14),.9,1.65,0)),Kt(A,ot,-.5,-tt.d/2+On/2+.25)}{const ot=j(2,.8,.86,o.woodD);ot.add(p(Jt(),.4,.9,0)),ot.add(x(p(u(new ie(.02,.02,.4,6),o.wood),-.5,.92,.1),cn/2,0,.4)),Kt(A,ot,3.9,-3.2)}{const ot=new At;ot.add(p(u(new Pt(.9,.8,.8),o.iron),0,.4,0)),ot.add(p(u(new ln(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),ot.add(p(u(new ie(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Kt(A,ot,-5.2,.7,cn/2)}for(const[ot,y,R,Q]of[[4.2,1.7,.4,a.gold],[3.5,1.35,.26,a.ironL]]){const B=new At;B.add(x(u(new ie(R,R,.1,18),d(Q)),cn/2,0,0));for(let K=0;K<10;K++){const ft=K/10*cn*2;B.add(p(u(new Pt(.12,.12,.1),d(Q)),Math.cos(ft)*(R+.05),Math.sin(ft)*(R+.05),0))}Pe(A,"N",B,ot,Ye+y,.1),b.push({o:B,axis:"z",v:Q===a.gold?.6:-.9})}Pe(A,"W",nt(4),-1.2,Ye,.3),Pe(A,"S",H(1,1.7),-2.4,St-.3,.04),Pe(A,"S",ht(a.red),2.6,Ye+1.8,.1),Kt(A,pt(),-5.2,-3.2),Kt(A,ue(.6),-4.6,-3.4,.3),Kt(A,ue(.6),5,3.2,.2),Kt(A,Xt(),4.3,3.4),Nt("dirt",...un(tt,0,6.2),6.6,2.8,-tt.ry,.013),ce(A,pe(2.6),-2.6,5.4),ce(A,Ct(),2.6,6.2,.4);{const ot=new At;ot.add(p(u(new ie(.4,.45,.6,12),o.woodL),0,.3,0)),ot.add(x(p(u(new ie(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),ot.add(x(p(u(new Pt(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),ce(A,ot,-5,5.6)}ce(A,pt(),5.2,5),ce(A,pt(.85),5.8,5.6),ce(A,Zt(2.4),-6.6,6.8),ce(A,wt(0,.9),7.4,-1.4)}let Et;{const tt=wi.tavern,A=rt(tt,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),St=Ye+tt.wallH;{const ot=new At;ot.add(p(u(new Pt(.9,1.1,5),o.wood),0,.55,0)),ot.add(p(u(new Pt(1.1,.08,5.2),o.woodL),0,1.14,0));for(let R=0;R<5;R++)ot.add(p(u(new Pt(.02,.9,.9),o.woodD),-.46,.5,-2+R));for(let R=0;R<6;R++)ot.add(p(Qt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),M(-.2,.2),1.18,-2.2+R*.8));ot.add(p(F(.2),0,1.3,2.3)),Kt(A,ot,4.1,-.6);const y=new At;for(const R of[1.5,2])y.add(p(u(new Pt(.3,.05,4),o.wood),0,R,0));for(let R=0;R<10;R++)y.add(p(Qt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,R%2?2.03:1.53,-1.8+R*.4));Kt(A,y,5.12,-.6),Kt(A,pt(.9,!0),4.85,2.6,cn/2),Kt(A,pt(.9,!0),4.85,3.4,cn/2)}{const ot=new At;ot.add(p(u(I(new Pt(2.6,2,.9),1.4),o.stone),0,1,0)),ot.add(p(u(new Pt(2.9,.18,1.1),o.wood),0,2.05,.05)),ot.add(p(u(new ln(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),ot.add(p(te(),0,0,.85)),ot.add(p(F(.22),0,2.32,.1)),Et=new is("#ff9a4a",12,9,2),Et.position.set(0,.9,1.2),ot.add(Et),st(ot,0,.3,.3,1.4),Kt(A,ot,-1.5,-tt.d/2+On/2+.46)}Kt(A,jt(),-2.2,.8),Kt(A,Yt(),-3.1,.8),Kt(A,Yt(),-1.3,.8),Kt(A,jt(.65),1,2.3),Kt(A,Yt(),.1,2.3),Kt(A,Yt(),1.9,2.3),Kt(A,Yt(),1,3.2);for(const[ot,y]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Kt(A,bt(),ot,y).position.y=Ye+.8;Kt(A,Yt(),3.2,-2.4),Pe(A,"N",Y(),2.6,Ye+2.1,.1),Pe(A,"S",ht(a.black),-3,Ye+1.9,.1),Pe(A,"S",H(.9,1.6),1.6,St-.3,.04),Pe(A,"W",Y(),-2.6,Ye+2.2,.1),Nt("dirt",...un(tt,-.5,6.4),4.8,2.6,-tt.ry,.013),ce(A,j(3.6,.9,.8,o.woodL),.4,6.55),ce(A,oe(3.6,!1),.4,5.75),ce(A,oe(3.6,!1),.4,7.35,cn);for(const[ot,y]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])ce(A,bt(),ot,y).position.y=.84;Rt(A.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[ot,y]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])ce(A,p(u(new ie(.06,.08,2.6,6),o.woodD),0,1.3,0),ot,y);lt(A.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),ce(A,pt(),3,5.2),ce(A,pt(.8,!0),2.6,7.9,.3),ce(A,C("TAVERN"),-6.4,3.6,-cn/2),ce(A,Zt(2.2),-8.4,5.6),ct(A,-4.89,-3.6,-.6,.9),Ve(A.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[ot,y]of[[-2.6,a.red],[.8,"#3f5f8f"],[4,a.redD]])_e(A,S(y),ot,-2.75),_e(A,qt(),ot+.95,-3.4,cn/2).scale.setScalar(.7),_e(A,$(.8,1.6),ot-.5,-1.35),_e(A,Ee(.16),ot-.62,-3.55);for(const ot of[-.9,2.4])_e(A,yt(2.5),ot,-2.6);{const ot=u(new ln(8.6,1.1),d(a.redD),!1);ot.rotation.x=-cn/2,_e(A,ot,.4,.9).position.y=.212}_e(A,mt(),.8,3.45,cn),_e(A,oe(1.6,!0),2.8,3.4,cn),_e(A,j(.9,.7,.8,o.woodL),4.4,1.6),_e(A,Yt(),4.4,2.4),_e(A,Ee(.16,0),4.5,1.5).position.y=1;{const ot=new At;ot.add(p(u(new ie(.06,.12,.8,8),o.woodD),0,.4,0)),ot.add(p(u(new ie(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),ot.add(x(p(u(new bi(.24,14),d("#5f8fa8"),!1),0,.92,0),-cn/2,0,0)),_e(A,ot,-2.2,3.3)}_e(A,Wt(.9),-3.6,3.3),Ce(A,"S",ht(a.red),-1.2,1.7,.1),Ce(A,"E",H(.9,1.5),1.6,2.5,.04)}return{HOUSES:kt,buildHouse:rt,inH:Kt,outH:ce,onWall:Pe,W2:un,deskF:J,deskB:ut,hearthLight:Et,drawBoard:D}}const{PI:vn}=Math;function Jo(s,t,e){let n=1e9;for(let i=0;i<e.length-1;i++){const[r,o]=e[i],[a,l]=e[i+1],c=a-r,h=l-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(t-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,t-o-h*f))}return n}function pd(s,t,e,n){const i=e?[...s,s[0]]:s,r=[],o=[],a=[];let l=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(e&&(h===0||h===i.length-1)){const E=s[s.length-1],w=s[1];u=w[0]-E[0],p=w[1]-E[1]}const x=Math.hypot(u,p)||1,m=-p/x,g=u/x,M=i[h];if(h>0){const E=i[h-1];l+=Math.hypot(M[0]-E[0],M[1]-E[1])}if(r.push(M[0]+m*t/2,n,M[1]+g*t/2,M[0]-m*t/2,n,M[1]-g*t/2),o.push(0,l,1,l),h>0){const E=h*2;a.push(E-2,E,E-1,E-1,E,E+1)}}const c=new mn;return c.setAttribute("position",new Be(r,3)),c.setAttribute("uv",new Be(o,2)),c.setIndex(a),c.computeVertexNormals(),c}async function tS(s,t,e){const{scene:n,TEX:i,toon:r,mesh:o,at:a,rot:l,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:x,instanced:m}=s,{SPINNERS:g,plantFlora:M,skullPole:E,totem:w,brazier:I,hay:P}=t,v=new k(-62,27,70).normalize(),b=new He(new an(600,32,16),new si({side:Jn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new Te("#2b3b78")},mid:{value:new Te("#7f8fc4")},hor:{value:new Te("#f2aa7c")},low:{value:new Te("#c98a72")},sunCol:{value:new Te("#ffa864")},sunDir:{value:v}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));b.renderOrder=-100,b.frustumCulled=!1,n.add(b),n.fog=new Zc("#d6a487",230,640),n.add(new _m("#9aa8d8","#4a3428",1.05));const F=new cf("#ffb070",2.3);F.position.copy(v).multiplyScalar(110),F.castShadow=!0,F.shadow.mapSize.set(4096,4096),Object.assign(F.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),F.shadow.camera.updateProjectionMatrix(),F.shadow.bias=-5e-4,F.shadow.normalBias=.05,n.add(F);const U=new ro;for(let Mt=0;Mt<=160;Mt++){const zt=Mt/160*vn*2,Ot=Lr(zt),L=Math.cos(zt)*Ot,Qt=-Math.sin(zt)*Ot;Mt===0?U.moveTo(L,Qt):U.lineTo(L,Qt)}const X=new Ma(U,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});X.rotateX(-vn/2);const st=c(i.grass,1/9,1/9);function j(Mt,zt){const Ot=i.strata.clone();return Ot.wrapS=xi,Ot.wrapT=ii,Ot.repeat.set(1/8,-1/(zt-Mt)),Ot.offset.set(0,zt/(zt-Mt)),Ot.needsUpdate=!0,r("#ffffff",{map:Ot})}const N=new He(X,[r("#ffffff",{map:st}),j(-1.9,1.5)]);N.position.y=-2.9,N.receiveShadow=!0,n.add(N);const it=Fy(s,await e);n.add(it.underside);for(const Mt of["walls","towers","gate"])n.add(it[Mt]);const at=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),Y=new an(1,16,12),H=new At;n.add(H);for(let Mt=0;Mt<22;Mt++){const zt=Mt/22*vn*2+d(-.12,.12),Ot=d(100,260),L=d(1.6,3.2),Qt=new At;for(let Jt=0;Jt<7;Jt++){const Xt=new He(Y,at),Ct=d(1.6,2.8)*L;Xt.scale.set(Ct,Ct*.7,Ct),Xt.position.set(d(-3.5,3.5)*L,d(-.3,1.2)*L,d(-1.8,1.8)*L),Qt.add(Xt)}Qt.position.set(Math.cos(zt)*Ot,d(-45,28),Math.sin(zt)*Ot),H.add(Qt)}{const Mt=[],zt=[],Ot=[];for(let L=0;L<420;L++){const Qt=L/420*vn*2+d(-.006,.006),Jt=Lr(Qt);if(h()<.55){const Xt=d(.5,2.8),Ct=d(-.55,-1.8);Mt.push({x:Math.cos(Qt)*(Jt+.8),y:Ct-Xt/2,z:Math.sin(Qt)*(Jt+.8),sx:d(.7,1.3),sy:Xt,sz:d(.7,1.3),rx:vn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}L%2===0&&zt.push({x:Math.cos(Qt)*(Jt+.3),y:-.06,z:Math.sin(Qt)*(Jt+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let L=0;L<7;L++){const Qt=d(0,vn*2),Jt=Lr(Qt)+d(4,12);Ot.push({x:Math.cos(Qt)*Jt,y:d(-14,-4),z:Math.sin(Qt)*Jt,s:d(.8,2.2)})}m(new Pn(.06,1,4),Mt,{}),m(new an(1,10,6),zt,{});for(const L of Ot){const Qt=new At;Qt.add(a(o(new Oi(1.2*L.s,0),r("#6e5240")),0,-.4*L.s,0)),Qt.add(a(o(new ie(1*L.s,1.1*L.s,.3*L.s,9),r("#6f8b49")),0,.5*L.s,0)),h()<.6&&Qt.add(a(t.tree(f(["pine","autumn","dead"]),.5*L.s),0,.6*L.s,0)),Qt.position.set(L.x,L.y,L.z),Qt.rotation.y=d(0,6),n.add(Qt)}}const nt=j(-.75,1.35),ht={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},wt=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function qt(Mt,zt,Ot,L,Qt){M(zt,Ot,Mt.position.x+L,Mt.position.z+Qt,Mt.position.y)}function ue(Mt,zt,Ot,L){const{trees:Qt,clear:Jt}=ht[Ot],Xt=zt/10,Ct=[...Jt.map(([bt,lt,C])=>[bt,lt,C]),...L.map(([bt,lt])=>[bt,lt,.16])],jt=(bt,lt,C)=>{for(let S=0;S<60;S++){const $=d(0,vn*2),yt=d(bt,lt),mt=Math.cos($)*yt,Nt=Math.sin($)*yt;if(Ct.every(([kt,vt,Tt])=>Math.hypot(mt-kt,Nt-vt)>Tt+C))return Ct.push([mt,Nt,C]),[mt*zt,Nt*zt]}return null};for(let bt=0;bt<7;bt++){const lt=jt(.3,.74,.12);lt&&M(Qt[bt%Qt.length],d(1,1.3)*Xt,Mt.position.x+lt[0],Mt.position.z+lt[1],Mt.position.y)}for(let bt=0;bt<9;bt++){const lt=jt(.15,.78,.05);lt&&M(f(wt),d(.75,1.25)*Xt,Mt.position.x+lt[0],Mt.position.z+lt[1],Mt.position.y)}}const pt=c(i.water,1,4);function Yt(Mt,zt,Ot,L,Qt,Jt){const Xt=new At;Xt.position.set(Mt,zt,Ot),n.add(Xt);const Ct=new ro;for(let C=0;C<=56;C++){const S=C/56*vn*2,$=L*(1+.12*Math.sin(3*S+Jt)+.07*Math.sin(5*S+2*Jt));C===0?Ct.moveTo(Math.cos(S)*$,-Math.sin(S)*$):Ct.lineTo(Math.cos(S)*$,-Math.sin(S)*$)}const jt=new Ma(Ct,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});jt.rotateX(-vn/2),Xt.add(a(new He(jt,[r("#ffffff",{map:st}),nt]),0,-1.75,0));const bt=o(new Pn(L*.95,L*2.3,12,3),r("#6e5240"),!1);bt.rotation.x=vn,bt.position.y=-2.1-L*1.15,Xt.add(bt);for(let C=0;C<14;C++){const S=d(0,vn*2),$=d(.2,.9);Xt.add(a(l(o(new Oi(d(.8,2)*(L/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*L*.95*$,-2.1-(1-$)*L*2.3,Math.sin(S)*L*.95*$))}for(let C=0;C<26;C++){const S=d(0,vn*2),$=d(.6,2.4);Xt.add(a(l(o(new Pn(.07,$,4),r("#4a3424")),vn,0,0),Math.cos(S)*L*1.02,-.6-$/2,Math.sin(S)*L*1.02))}const lt=L/10;if(Qt==="ruin"){const C=a(new At,-L*.25,0,-L*.1);C.add(a(o(new ie(1.7*lt,1.9*lt,5.5*lt,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*lt,0));for(let $=0;$<7;$++){const yt=$/7*vn*2;C.add(a(o(new Pt(.7*lt,d(.4,1.6)*lt,.5*lt),x.stone),Math.cos(yt)*1.6*lt,5.6*lt,Math.sin(yt)*1.6*lt))}C.add(a(o(new Pt(.4*lt,1*lt,.1),x.pane,!1),0,2.6*lt,1.85*lt)),Xt.add(C);for(const $ of[-1,1])Xt.add(a(o(new Pt(.7*lt,3.2*lt,.7*lt),x.stone),L*.35+$*1.3*lt,1.6*lt,L*.3));Xt.add(a(o(new Pt(3.3*lt,.6*lt,.7*lt),x.stone),L*.35,3.4*lt,L*.3)),Xt.add(a(E(2.4),L*.1,0,L*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[$,yt,mt]of S)qt(Xt,mt,1.2*lt,$*L,yt*L);ue(Xt,L,Qt,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(Qt==="farm"){const C=a(new At,-L*.2,0,-L*.15);C.add(a(o(u(new Pt(3.6*lt,2.2*lt,2.8*lt),2.2*lt,1.3),x.plankWall),0,1.1*lt,0));const S=new ie(2.1*lt,2.1*lt,4*lt,3,1);C.add(a(l(o(S,r("#ffffff",{map:i.roof})),0,0,vn/2),0,2.2*lt+.9*lt,0)),C.add(a(o(new Pt(.8*lt,1.5*lt,.1),x.woodD),0,.75*lt,1.42*lt)),C.add(a(o(new Pt(.6*lt,.6*lt,.1),x.pane,!1),1.1*lt,1.3*lt,1.42*lt)),Xt.add(C);const $=o(new ln(L*.8,L*.5),r("#ffffff",{map:i.field}),!1);$.rotation.x=-vn/2,$.position.set(L*.3,.03,L*.25),Xt.add($);const yt=a(new At,L*.35,0,-L*.45);yt.add(a(o(new ie(.8*lt,1.2*lt,4*lt,12),r("#e3d5b6")),0,2*lt,0)),yt.add(a(o(new Pn(1.2*lt,1.4*lt,12),r("#ffffff",{map:i.roof})),0,4.7*lt,0));const mt=a(new At,0,3.6*lt,1*lt);for(let Nt=0;Nt<4;Nt++){const kt=new At;kt.rotation.z=Nt*vn/2,kt.add(a(o(new Pt(.5*lt,2.6*lt,.04),r("#e3d5b6",{side:Sn})),.3*lt,1.5*lt,0)),mt.add(kt)}yt.add(mt),g.push({o:mt,axis:"z",v:.4}),Xt.add(yt),qt(Xt,"tree_maple",1.1*lt,-L*.55,L*.4),Xt.add(a(P(.5*lt),L*.05,0,L*.55)),ue(Xt,L,Qt,[[-.55,.4]])}else if(Qt==="shrine"){for(let S=0;S<6;S++){const $=S/6*vn*2;Xt.add(a(l(o(new Pt(.7*lt,d(2,3)*lt,.5*lt),x.stone),0,-$,d(-.1,.1)),Math.cos($)*3*lt,1.2*lt,Math.sin($)*3*lt))}Xt.add(w(4*lt));for(const S of[.8,3.9])Xt.add(a(I(0,1.2*lt),Math.cos(S)*1.8*lt,0,Math.sin(S)*1.8*lt));const C=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,$]of C)qt(Xt,"tree_maple",1.1*lt,S*L,$*L);ue(Xt,L,Qt,C)}else{const C=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[yt,mt,Nt]of C)qt(Xt,Nt,1.2*lt,yt*L,mt*L);ue(Xt,L,Qt,C),Xt.add(a(l(o(new bi(L*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-vn/2,0,0),L*.25,.04,L*.3));const S=new He(new ln(1.8*lt,L*3.2),new Vn({map:pt,color:"#acb5c8",transparent:!0,opacity:.85,side:Sn,depthWrite:!1}));S.position.set(L*.62,-L*1.6,L*.62),S.rotation.y=vn/4,Xt.add(S);const $=o(new ln(1.2*lt,L*.55),r("#6fa9c9"),!1);$.rotation.set(-vn/2,0,-vn/4),$.position.set(L*.45,.05,L*.45),Xt.add($)}return Xt}Yt(-150,6,-105,11,"ruin",.4),Yt(165,-4,-60,13,"farm",1.7),Yt(115,20,135,9,"shrine",2.9),Yt(-165,-14,85,12,"falls",4.1);const se={};function ge(Mt){const zt=se[Mt];if(zt)return zt;const Ot={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Mt],L=s.canvasTex(256,256,(Jt,Xt,Ct)=>{const jt=Jt.createRadialGradient(Xt/2,Ct/2,Xt*.3,Xt/2,Ct/2,Xt/2);jt.addColorStop(0,"rgba(255,255,255,1)"),jt.addColorStop(1,"rgba(255,255,255,0)"),Jt.fillStyle=jt,Jt.fillRect(0,0,Xt,Ct)});L.wrapS=L.wrapT=ii;const Qt={src:Ot,mask:L};return se[Mt]=Qt,Qt}let Zt=0;function pe(Mt,zt,Ot,L,Qt,Jt=0,Xt=.012,Ct=4){const jt=ge(Mt),bt=c(jt.src,L*2/Ct,Qt*2/Ct),lt=new He(new ln(L*2,Qt*2),r("#ffffff",{map:bt,alphaMap:jt.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Zt}));return lt.rotation.set(-vn/2,0,Jt),lt.position.set(zt,Xt,Ot),lt.receiveShadow=!0,lt.renderOrder=-10+Zt++*.01,n.add(lt),lt}const Ze={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},me={},ye=Mt=>{const zt=Math.max(0,Math.min(1,Mt));return zt*zt*(3-2*zt)},Ee=[],Rt=Mt=>Mt==="cobble"||Mt==="flag",Wt=Mt=>Mt.closed?[...Mt.line,Mt.line[0]]:Mt.line;function te(Mt,zt){let Ot=null,L=1e9;for(const Qt of bs){if(Qt===zt||Qt.kind==="stones")continue;const Jt=Jo(Mt[0],Mt[1],Wt(Qt))-Qt.w/2;Jt<L&&(L=Jt,Ot=Qt)}return L<.6?Ot:null}function oe(Mt,zt,Ot){const L=Wt(Ot),Qt=Ot.w/2+.02,Jt=zt?[...Mt].reverse():[...Mt];let Xt=0;for(;Xt<Jt.length-2&&Jo(Jt[Xt][0],Jt[Xt][1],L)<Qt;)Xt++;if(Xt===0)return null;let Ct=Jt[Xt-1],jt=Jt[Xt];for(let C=0;C<12;C++){const S=[(Ct[0]+jt[0])/2,(Ct[1]+jt[1])/2];Jo(S[0],S[1],L)<Qt?Ct=S:jt=S}const lt=[[(Ct[0]+jt[0])/2,(Ct[1]+jt[1])/2],...Jt.slice(Xt)];return zt?lt.reverse():lt}function ee(Mt,zt){const Ot=Mt.kind;let L=Wt(Mt);const Qt=Mt.closed?[!1,!1]:[!Mt.refs[0],!Mt.refs[Mt.refs.length-1]];if(!Mt.closed&&Rt(Ot))for(const Dt of[0,1]){if(!Qt[Dt])continue;const V=Dt?L[L.length-1]:L[0],xt=te(V,Mt);if(!xt||xt.kind===Ot||!Rt(xt.kind))continue;const _t=oe(L,Dt===1,xt);if(!_t)continue;L=_t,Qt[Dt]=!1;const Vt=Dt?L[L.length-1]:L[0],et=Dt?L[L.length-2]:L[1],q=Math.hypot(Vt[0]-et[0],Vt[1]-et[1])||1;Ee.push({x:Vt[0],z:Vt[1],tx:(Vt[0]-et[0])/q,tz:(Vt[1]-et[1])/q,w:Mt.w,kind:Ot})}const Jt=L.length,[Xt,Ct,jt,bt]=Ze[Ot],lt=[0];for(let Dt=1;Dt<Jt;Dt++){const V=L[Dt],xt=L[Dt-1];lt.push(lt[Dt-1]+Math.hypot(V[0]-xt[0],V[1]-xt[1]))}const C=lt[Jt-1],S=.02+zt*.0015,$=[],yt=[],mt=[],Nt=[];for(let Dt=0;Dt<Jt;Dt++){const V=L[Math.max(0,Dt-1)],xt=L[Math.min(Jt-1,Dt+1)];let _t=xt[0]-V[0],Vt=xt[1]-V[1];if(Mt.closed&&(Dt===0||Dt===Jt-1)){const ct=L[Jt-2],Gt=L[1];_t=Gt[0]-ct[0],Vt=Gt[1]-ct[1]}const et=Math.hypot(_t,Vt)||1,q=-Vt/et,dt=_t/et;let Lt=1,_=1;if(!Mt.closed)for(const ct of[0,1]){const Gt=ct?C-lt[Dt]:lt[Dt];Qt[ct]&&(Lt=Math.max(Lt,1+.5*(1-ye(Gt/2.4))),_=Math.min(_,ye(Gt/2.2)))}const z=Mt.w/2*Lt,W=[-(z+jt),-(z-jt),z-jt,z+jt],O=[0,_,_,0],rt=L[Dt];for(let ct=0;ct<4;ct++){const Gt=rt[0]+q*W[ct],we=rt[1]+dt*W[ct];$.push(Gt,S,we),yt.push(Gt/Ct,we/Ct),mt.push(1,1,1,O[ct])}if(Dt>0)for(let ct=0;ct<3;ct++){const Gt=(Dt-1)*4+ct,we=Gt+1,Ce=Dt*4+ct,_e=Ce+1;Nt.push(we,_e,Gt,Gt,_e,Ce)}}const kt=new mn;kt.setAttribute("position",new Be($,3)),kt.setAttribute("uv",new Be(yt,2)),kt.setAttribute("color",new Be(mt,4)),kt.setIndex(Nt),kt.computeVertexNormals();let vt=me[Ot];vt||(vt=r("#ffffff",{map:Xt,normalMap:p(bt,Ot==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),me[Ot]=vt);const Tt=new He(kt,vt);Tt.receiveShadow=!0,Tt.renderOrder=-5+zt*.01,n.add(Tt)}const ae=[];function de(Mt){const zt=Mt.length,Ot=Mt.map(([Xt,Ct])=>Jo(Xt,Ct,aa)<1.35);if(!Ot.some(Boolean))return[{pts:[...Mt],closed:!0}];const L=Ot.findIndex((Xt,Ct)=>!Xt&&Ot[(Ct-1+zt)%zt]),Qt=[];let Jt=[];for(let Xt=0;Xt<=zt;Xt++){const Ct=(L+Xt)%zt;if(!Ot[Ct]&&Xt<zt){Jt.push(Mt[Ct]);continue}if(Jt.length>1&&Qt.push({pts:Jt,closed:!1}),Xt<zt&&Ot[Ct]&&Jt.length){let jt=Xt;for(;jt<zt&&Ot[(L+jt)%zt];)jt++;const bt=Jt[Jt.length-1],lt=Mt[(L+jt)%zt],C=lt[0]-bt[0],S=lt[1]-bt[1],$=Math.hypot(C,S);ae.push({x:(bt[0]+lt[0])/2,z:(bt[1]+lt[1])/2,ang:Math.atan2(-S,C),len:$})}Jt=[]}return Qt}bs.forEach((Mt,zt)=>{if(Mt.kind!=="stones"){ee(Mt,zt);return}const Ot=i.roadStones.clone();Ot.wrapS=ii,Ot.wrapT=xi,Ot.repeat.set(1,1/1.3),Ot.needsUpdate=!0;const L=r("#ffffff",{map:Ot,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const Qt of de(Mt.line)){const Jt=new He(pd(Qt.pts,Mt.w,Qt.closed,.03),L);Jt.receiveShadow=!0,n.add(Jt)}});{const Mt=(jt,bt,lt,C,S,$)=>{const yt=S-lt,mt=$-C,Nt=yt*yt+mt*mt||1,kt=Math.max(0,Math.min(1,((jt-lt)*yt+(bt-C)*mt)/Nt));return Math.hypot(jt-lt-yt*kt,bt-C-mt*kt)},zt=(jt,bt,lt,C)=>{for(const S of bs){if(S===lt)continue;const $=Wt(S),yt=S.w/2+C;for(let mt=0;mt<$.length-1;mt++){const Nt=$[mt],kt=$[mt+1];if(!(Math.abs(Nt[0]-jt)>yt+1||Math.abs(Nt[1]-bt)>yt+1)&&Mt(jt,bt,Nt[0],Nt[1],kt[0],kt[1])<yt)return!0}}return!1},Ot=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],L=(jt,bt)=>{const lt=Math.hypot(jt,bt),C=Math.atan2(bt,jt);if(lt>7.4&&lt<9&&Ot.some(S=>{let $=Math.abs(C-S)%(2*vn);return $=Math.min($,2*vn-$),$*lt<1.45}))return!0;for(const S of la)if(S.kind==="house"){const[$,yt]=qr(S,jt,bt);if(Math.abs($)<S.w/2+.9&&Math.abs(yt)<S.d/2+.9||S.deck&&$>S.deck[0]-.5&&$<S.deck[1]+.5&&yt>S.deck[2]&&yt<S.deck[3]+.5)return!0}else if(Math.hypot(jt-S.x,bt-S.z)<S.r+.6)return!0;for(const S of Cc)if(S.kind==="hut"){const[$,yt]=qr(S,jt,bt);if(Math.abs($)<S.w/2+.9&&Math.abs(yt)<S.d/2+.9)return!0}else if(Math.hypot(jt-S.x,bt-S.z)<(S.r||2)+.4)return!0;return Math.hypot(jt,bt)>Lr(Math.atan2(bt,jt))-1.2},Qt=[],Jt=[],Xt=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const jt of bs){if(jt.kind==="stones")continue;const bt=Wt(jt),lt=jt.kind!=="dirt",C=S=>{const $=bt[Math.max(0,S-1)],yt=bt[Math.min(bt.length-1,S+1)],mt=Math.hypot(yt[0]-$[0],yt[1]-$[1])||1;return[-(yt[1]-$[1])/mt,(yt[0]-$[0])/mt]};for(let S=0;S<bt.length;S++){const[$,yt]=C(S),mt=Math.atan2($,yt)+vn/2,Nt=bt[S];for(const kt of[-1,1]){const vt=jt.w/2+.07,Tt=Nt[0]+$*kt*vt,Dt=Nt[1]+yt*kt*vt;if(!(L(Tt,Dt)||zt(Tt,Dt,jt,.25))&&(lt&&Qt.push({x:Tt,y:.04,z:Dt,sx:.2,sy:.13,sz:d(.4,.47),ry:mt+d(-.04,.04),c:jt.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const V=vt+(lt?.25:.1)+d(0,.35),xt=Nt[0]+$*kt*V,_t=Nt[1]+yt*kt*V;if(!L(xt,_t)&&!zt(xt,_t,jt,.2)){const Vt=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let et=0;et<5;et++)Jt.push({x:xt+d(-.15,.15),y:.11,z:_t+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Vt})}}}}if(!lt&&jt.w>1.5)for(const S of[-1,1]){const $=bt.map((mt,Nt)=>{const[kt,vt]=C(Nt);return[mt[0]+kt*S*.45,mt[1]+vt*S*.45]}),yt=new He(pd($,.18,!1,.035),Xt);yt.receiveShadow=!0,yt.renderOrder=-4,n.add(yt)}}for(const jt of Ee){const bt=-jt.tz,lt=jt.tx,C=Math.max(2,Math.round((jt.w+.3)/.42));for(let S=0;S<C;S++){const $=-((jt.w+.3)/2)+(S+.5)*(jt.w+.3)/C;Qt.push({x:jt.x+bt*$-jt.tx*.1,y:.045,z:jt.z+lt*$-jt.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(bt,lt)+vn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new Oa(1,1,1,1,.2),Qt,{cast:!1});const Ct=m(new Pn(.06,.24,4),Jt,{});Ct&&(Ct.userData.noLine=!0)}return{models:it,skyDome:b,sun:F,island:N,cloudRing:H,grassTex:st,strataMat:j,crossings:ae,patch:pe}}const{PI:be}=Math;function eS(s){const{M:t,COL:e,TEX:n,toon:i,glow:r,mesh:o,rbox:a,at:l,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:x,tiled:m,planarUV:g,wallUV:M}=s,E=s.scene,w=[],I=[],P=[],v=[],b=x(64,128,(T,D,G)=>{const J=()=>{T.beginPath(),T.moveTo(D/2,2),T.bezierCurveTo(D*.62,G*.3,D*.98,G*.55,D*.86,G*.8),T.bezierCurveTo(D*.76,G*.98,D*.24,G*.98,D*.14,G*.8),T.bezierCurveTo(D*.02,G*.55,D*.38,G*.3,D/2,2),T.closePath()},ut=T.createLinearGradient(0,G,0,0);ut.addColorStop(0,"rgba(255, 246, 214, 1)"),ut.addColorStop(.3,"rgba(255, 196, 92, 1)"),ut.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ut.addColorStop(1,"rgba(220, 40, 30, 0)"),J(),T.fillStyle=ut,T.fill(),T.save(),T.translate(D*.5,G*.92),T.scale(.5,.55),T.translate(-D*.5,-G*.92),J(),T.fillStyle="rgba(255, 252, 235, 0.9)",T.fill(),T.restore()});b.wrapS=b.wrapT=ii;const F=new os({map:b,color:new Te(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),U=new os({map:b,color:new Te(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),X=new os({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Si});function st(T,D,G,J,ut=1){const Et=new At,tt=new Bi(F);tt.center.set(.5,.06),tt.scale.set(.34*ut,.68*ut,1),Et.add(tt);const A=new Bi(U);A.center.set(.5,.04),A.scale.set(.18*ut,.34*ut,1),Et.add(A);const St=new Bi(X);return St.scale.setScalar(1.5*ut),St.position.y=.2*ut,Et.add(St),Et.position.set(D,G,J),T.add(Et),I.push({f:Et,ph:u(0,6),s:ut}),Et}const j=(()=>{const T=new At,D=o(new an(.5,16,12),t.bone);D.scale.set(1,.92,1.05),D.position.y=.14,T.add(D),T.add(l(o(new Pt(.62,.28,.5),t.bone),0,-.24,.16));for(const G of[-1,1]){const J=o(new an(.14,10,8),t.dark,!1);J.scale.z=.5,J.position.set(G*.19,.08,.45),T.add(J)}return T.add(c(l(o(new Pn(.06,.12,3),t.dark,!1),0,-.1,.5),be,0,0)),T.add(l(o(new Pt(.42,.03,.02),t.dark,!1),0,-.25,.42)),T})();function N(T=.3){const D=j.clone();return D.scale.setScalar(T),D}function it(T=1,D=t.bone){const G=new At;for(const J of[-1,1]){const ut=o(new Cn(.5*T,.09*T,6,12,be*.6),D);ut.rotation.set(0,J>0?0:be,.25),ut.position.set(J*.35*T,0,0),G.add(ut)}return G}let at=7;const Y=(T,D)=>T+(D-T)*((at=at*16807%2147483647)/2147483647);function H(T,D,G,J,ut,Et,tt,A,St=0){const ot=l(o(St?a(Et,tt,A,St):new Pt(Et,tt,A),D),G,J,ut);return T.add(ot),ot}function nt(T,D,G,J=.75){const ut=new Pt(T,D,G),Et=ut.attributes.position;for(let tt=0;tt<Et.count;tt++)Et.getY(tt)<0&&(Et.setX(tt,Et.getX(tt)*J),Et.setZ(tt,Et.getZ(tt)*J));return ut.computeVertexNormals(),ut}function ht(T,D,G,J,ut,Et,tt=Math.max(2,Math.round(G/.2))){const A=G/tt;for(let St=0;St<tt;St++)H(T,Et,0,J+Y(-.004,.004),-G/2+A*(St+.5),D+Y(-.02,.02),ut,A-.012,.012)}function wt(T,D,G,J,ut,Et){H(T,t.iron,D-ut*.055,G,J-Et*.012,.13,.014,.028),H(T,t.iron,D-ut*.012,G,J-Et*.055,.028,.014,.13)}const qt=(()=>{const T=[];for(let D=0;D<=10;D++){const G=D/10;T.push(new Ut(.3+Math.sin(G*be)*.06,(G-.5)*.8))}return new eh(T,20)})(),ue=T=>.3+Math.sin((T/.8+.5)*be)*.06;function pt(T=1,D=!1){const G=new At,J=o(qt,i("#ffffff",{map:n.planks}));for(const ut of[-.33,-.17,.17,.33])J.add(l(c(o(new Cn(ue(ut)+.006,.02,5,24),t.iron),be/2,0,0),0,ut,0));for(const ut of[-.17,.17])for(let Et=0;Et<6;Et++){const tt=Et/6*be*2;J.add(l(o(new an(.016,5,4),t.ironL),Math.cos(tt)*(ue(ut)+.025),ut,Math.sin(tt)*(ue(ut)+.025)))}J.add(l(c(o(new bi(.3,20),t.woodD),-be/2,0,0),0,.392,0)),J.add(l(c(o(new Cn(.3,.018,4,24),t.woodD),be/2,0,0),0,.4,0));for(const ut of[-.1,0,.1])J.add(l(o(new Pt(.004,.004,.5),t.dark,!1),ut,.394,0));return J.add(l(o(new ie(.035,.035,.03,8),t.woodL),.15,.4,.05)),J.scale.setScalar(T),D?(J.rotation.z=be/2,J.position.y=.36*T):J.position.y=.4*T,G.add(J),G}const Yt=i("#ffffff",{map:x(128,128,(T,D,G)=>{T.fillStyle="#7a5538",T.fillRect(0,0,D,G);for(let J=0;J<4;J++)T.fillStyle=J%2?"#70502f":"#84603f",T.fillRect(0,J*32,D,30),T.fillStyle="rgba(40, 24, 14, 0.6)",T.fillRect(0,J*32+30,D,2)})});function se(T=.6){const D=new At;H(D,Yt,0,T/2,0,T*.94,T*.94,T*.94);const G=T*.09,J=T/2-G/2;for(const ut of[-1,1])for(const Et of[-1,1])H(D,t.woodD,ut*J,T/2,Et*J,G,T,G),H(D,t.woodD,0,T/2+ut*J,Et*J,T-G*2,G,G),H(D,t.woodD,ut*J,T/2+Et*J,0,G,G,T-G*2);for(const ut of[-1,1]){const Et=H(D,t.woodD,0,T/2,ut*(T*.47+.006),T*1.1,G*.8,G*.4);Et.rotation.z=ut*be/4}for(const ut of[-1,1])for(const Et of[-1,1])for(const tt of[-1,1])H(D,t.iron,ut*(J+.006),T/2+Et*(J+.006),tt*(J+.006),G*1.2,G*1.2,G*1.2);return D}function ge(){const T=new At,D=o(new an(.28,12,10),i("#b8a07a"));return D.scale.set(1,1.15,.9),D.position.y=.3,T.add(D),T.add(l(o(new ie(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),T}function Zt(T,D,G=.8,J=t.wood){const ut=new At,Et=.07;ht(ut,T,D,G-Et/2,Et,J);for(const A of[-1,1])H(ut,t.woodD,0,G-Et-.06,A*(D/2-.12),T-.34,.12,.04,.01),H(ut,t.woodD,A*(T/2-.12),G-Et-.06,0,.04,.12,D-.34,.01);const tt=nt(.1,G-Et,.1,.72);for(const[A,St]of[[-1,-1],[1,-1],[-1,1],[1,1]])ut.add(l(o(tt,t.woodD),A*(T/2-.12),(G-Et)/2,St*(D/2-.12))),wt(ut,A*T/2,G+.004,St*D/2,A,St);H(ut,t.woodD,0,.17,0,T-.3,.06,.05,.01);for(const A of[-1,1])H(ut,t.woodD,A*(T/2-.12),.17,0,.05,.06,D-.3,.01);return ut}function pe(T=.7){const D=new At;D.add(l(o(new ie(T,T,.08,24),t.wood),0,.76,0)),D.add(l(c(o(new Cn(T,.022,5,32),t.iron),be/2,0,0),0,.76,0));for(const G of[-T*.5,0,T*.5])H(D,t.dark,G,.801,0,.006,.004,Math.sqrt(T*T-G*G)*1.96);D.add(l(o(new ie(.08,.11,.7,10),t.woodD),0,.37,0)),D.add(l(o(new ie(.13,.13,.06,10),t.iron),0,.5,0));for(let G=0;G<4;G++){const J=G*be/2+be/4,ut=H(D,t.woodD,Math.sin(J)*T*.25,.05,Math.cos(J)*T*.25,.09,.08,T*.6,.015);ut.rotation.y=J}return D}function Ze(){const T=new At;T.add(l(o(new ie(.24,.24,.07,16),t.wood),0,.45,0)),T.add(l(c(o(new Cn(.24,.012,4,20),t.iron),be/2,0,0),0,.45,0));for(let D=0;D<3;D++){const G=D/3*be*2+.5,J=o(new ie(.028,.034,.46,6),t.woodD);J.position.set(Math.cos(G)*.15,.22,Math.sin(G)*.15),J.rotation.set(-Math.sin(G)*.2,0,Math.cos(G)*.2),T.add(J)}return T.add(l(c(o(new Cn(.16,.014,4,14),t.woodD),be/2,0,0),0,.17,0)),T}function me(T=1.8,D=!0){const G=new At;for(const J of[-1,1])H(G,t.woodL,Y(-.01,.01),.45,J*.11,T,.07,.2,.015);for(const J of[-1,1]){const ut=J*(T/2-.2);for(const Et of[-1,1]){const tt=l(o(nt(.08,.44,.07,1),t.woodD),ut,.21,Et*.12);tt.rotation.x=-Et*.2,G.add(tt)}H(G,t.woodD,ut,.385,0,.09,.06,.44,.01),H(G,t.iron,ut,.487,.2,.1,.012,.03)}if(H(G,t.woodD,0,.14,0,T-.4,.05,.05,.01),D){for(const J of[-1,1])H(G,t.woodD,J*(T/2-.2),.74,-.21,.07,.56,.06,.012);for(const J of[.64,.9])H(G,t.woodL,Y(-.01,.01),J,-.225,T-.1,.11,.05,.015)}return G}function ye(T=.16,D=0){const G=new At;if(G.add(l(o(new ie(.04,.045,T,10),i("#eadfc4")),0,T/2,0)),st(G,0,T,0,.35),D){const J=new is("#ffb36a",D,5,2);J.position.y=T+.15,G.add(J)}return G}function Ee(){const T=new At;return T.add(l(N(.22),0,.12,0)),T.add(l(ye(.14),0,.24,0)),T}function Rt(T){const D=new At,G=i(T,{emissive:T,emissiveIntensity:.18});return D.add(l(o(new ie(.06,.07,.2,10),G),0,.1,0)),D.add(l(o(new ie(.022,.03,.1,8),G),0,.25,0)),D}function Wt(){const T=new At;return T.add(l(o(new ie(.07,.06,.15,12),t.woodL),0,.075,0)),T.add(l(c(o(new bi(.062,12),i("#efe0b0")),-be/2,0,0),0,.14,0)),T.add(l(o(new Cn(.045,.012,6,12),t.woodL),.08,.08,0)),T}function te(T=1){const D=new At;D.add(l(o(new ie(.22*T,.16*T,.34*T,12),i("#8a4a30")),0,.17*T,0));for(let G=0;G<6;G++){const J=G/6*be*2;d(D,new k(Math.cos(J)*.06*T,.32*T,Math.sin(J)*.06*T),new k(Math.cos(J)*.5,1,Math.sin(J)*.5),.5*T,.1*T,i(p([e.leaf,e.leafD,e.leafL])),0,5)}return D}const oe=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],ee=s.UNIT_BOX;function ae(T=2){const D=new At,G=2.4,J=.5;H(D,i("#3a2519"),0,G/2,-J/2+.03,T-.1,G-.1,.04);for(const Et of[-1,1])H(D,t.woodD,Et*(T/2-.04),G/2,0,.08,G,J,.015);for(let Et=0;Et<4;Et++){const tt=Et<3?.27+Et*.72:G-.03;H(D,t.wood,0,tt,0,T-.14,.06,J-.04),H(D,t.woodL,0,tt+.01,J/2-.02,T-.12,.08,.04,.01)}H(D,t.woodD,0,.1,.02,T,.2,J,.02),H(D,t.wood,0,G+.04,.02,T+.1,.08,J+.08,.02),H(D,t.woodD,0,G+.11,.03,T+.18,.07,J+.14,.02);for(const Et of[-1,1])H(D,t.iron,Et*(T/2-.02),G-.12,J/2+.004,.06,.2,.012),H(D,t.iron,Et*(T/2-.1),G-.04,J/2+.004,.2,.06,.012);D.add(l(N(.13),T/2-.25,2.62,.05));const ut=[];for(let Et=0;Et<3;Et++){let tt=-T/2+.12;for(;tt<T/2-.2;){if(f()<.12){tt+=.18;continue}const A=u(.07,.14),St=u(.34,.56),ot=f()<.1?.18:0;ut.push({x:tt+A/2,y:.33+Et*.72+St/2,z:.08,sx:A,sy:St,sz:u(.28,.36),rz:ot,c:p(oe)}),tt+=A+.012+ot*.4}}return s.instanced(ee,ut,{parent:D,cast:!0}),D}function de(T,D){const G=x(512,512,(Et,tt)=>{D.forEach((A,St)=>{Et.fillStyle=A,Et.beginPath(),Et.arc(tt/2,tt/2,tt/2-St*34,0,be*2),Et.fill()}),Et.fillStyle=D[1];for(let A=0;A<12;A++){const St=A/12*be*2;Et.beginPath(),Et.arc(256+Math.cos(St)*196,256+Math.sin(St)*196,10,0,be*2),Et.fill()}}),J=o(new bi(T,48),i("#ffffff",{map:G}),!1);J.rotation.x=-be/2,J.position.y=.012;const ut=new At;return ut.add(J),ut}function Mt(T=n.painting){const D=new At;for(const G of[-1,1]){const J=l(o(new Pt(.06,1.8,.06),t.wood),G*.36,.9,0);J.rotation.z=G*-.12,D.add(J)}return D.add(c(l(o(new Pt(.06,1.7,.06),t.wood),0,.84,-.3),.35,0,0)),D.add(l(o(new Pt(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),D.add(l(new He(new ln(.95,.72),new Vn({map:T,toneMapped:!1})),0,1.25,.079)),D.add(l(o(new Pt(1,.05,.14),t.wood),0,.82,.08)),D}function zt(T){const D=new At;ht(D,1.7,.84,.745,.08,t.woodL,4),H(D,t.woodD,0,.78,.43,1.74,.05,.03,.01),H(D,t.wood,.55,.36,0,.5,.66,.76,.02);for(let J=0;J<3;J++)H(D,t.woodL,.55,.15+J*.2,.385,.44,.17,.02,.01),H(D,t.iron,.55,.17+J*.2,.402,.12,.025,.02);for(const J of[-.34,.34])D.add(l(o(nt(.09,.7,.09,.7),t.woodD),-.76,.35,J));H(D,t.woodD,-.76,.14,0,.05,.05,.62,.01);for(const J of[-1,1])wt(D,J*.85,.79,.42,J,1);const G={g:D,kb:null,screen:null,light:null};if(T==="screen"){const J=l(new At,-.12,.805,-.25);J.userData.y0=.805,J.add(o(new Pt(.62,.035,.2),t.iron));for(const[St,ot]of[[-.06,.54],[0,.56],[.06,.5]])J.add(l(o(new Pt(ot,.012,.04),r("#ff5a3a",.55),!1),0,.022,St));D.add(J),G.kb=J;const ut=new At;ut.add(o(new Pt(1.04,.7,.05),t.woodD));const Et=new Vn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),tt=c(l(new He(new ln(.92,.58),Et),0,0,-.03),0,be,0);ut.add(tt),G.screen=tt,ut.add(l(new He(new ln(.92,.58),Et),0,0,.03)),ut.add(l(o(new Pt(.08,.13,.08),t.woodD),0,-.41,0)),ut.add(l(o(new Pt(.34,.02,.2),t.woodD),0,-.455,0)),ut.add(l(N(.09),.46,.4,0)),ut.position.set(-.12,1.25,.17),D.add(ut);const A=new is("#7fe8ff",0,3.2,2);A.position.set(-.12,1.25,-.35),D.add(A),G.light=A,D.add(l(Wt(),.6,.79,.15))}else T==="paper"?(D.add(c(l(new He(new ln(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-be/2,0,0)),D.add(c(l(o(new ie(.012,.012,.22,6),t.red),.35,.81,.1),0,0,be/2)),D.add(l(ye(.12),.65,.79,-.25))):T==="books"&&(D.add(l(o(new Pt(.42,.06,.3),t.red),-.35,.82,0)),D.add(l(o(new Pt(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),D.add(l(o(new Pt(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),D.add(l(Ee(),.62,.79,-.22)));return D.add(l(o(new ie(.25,.21,.44,14),t.woodD),0,.22,-.78)),G}function Ot(){const T=new At;return T.add(l(o(new ie(.3,.38,.5,10),t.woodD),0,.25,0)),T.add(l(o(new Pt(.34,.2,.22),t.iron),0,.6,0)),T.add(l(o(new Pt(.7,.14,.3),t.ironL),0,.77,0)),d(T,new k(.35,.77,0),new k(1,0,0),.32,.1,t.ironL,0,10),T.add(l(o(new Pt(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),T}function L(){const T=new At;return T.add(l(o(new ie(.06,.06,1.6,8),t.wood),0,.8,0)),T.add(l(o(new ie(.28,.32,.8,12),t.straw),0,1.15,0)),T.add(l(o(new an(.22,12,10),t.straw),0,1.75,0)),T.add(l(o(new Pt(.9,.08,.08),t.wood),0,1.35,0)),T.add(l(c(o(new Cn(.3,.03,6,16),t.red),be/2,0,0),0,1.2,0)),T}function Qt(){const T=new At;T.add(c(l(o(new ie(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),be/2,0,0));for(const D of[-1,1])T.add(c(l(o(new Pt(.06,1.4,.06),t.wood),D*.35,.7,-.2),0,0,D*.2));return T}function Jt(T=.42){const D=new At;return D.add(c(l(o(new ie(T,T,.7,16),t.straw),0,T,0),0,0,be/2)),D}function Xt(T=0,D=1){const G=new At;for(let J=0;J<3;J++){const ut=J/3*be*2,Et=o(new ie(.035,.045,1.1,6),t.iron);Et.position.set(Math.cos(ut)*.22,.5,Math.sin(ut)*.22),Et.rotation.set(Math.sin(ut)*.3,0,-Math.cos(ut)*.3),G.add(Et)}G.add(l(o(new ie(.42,.24,.3,14,1,!0),t.iron),0,1.05,0)),G.add(c(l(o(new bi(.36,14),t.dark,!1),0,1.12,0),-be/2,0,0)),G.add(l(o(new an(.3,10,6,0,be*2,0,be/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let J=0;J<4;J++){const ut=J/4*be*2;d(G,new k(Math.cos(ut)*.42,1.18,Math.sin(ut)*.42),new k(Math.cos(ut)*.4,1,Math.sin(ut)*.4),.22,.04,t.iron,0,5)}if(st(G,0,1.12,0,1.6),T){const J=new is("#ff9a4a",T,9,2);J.position.y=1.7,G.add(J),v.push({l:J,base:T,ph:u(0,6)})}return G.scale.setScalar(D),G}function Ct(){const T=new At;T.add(c(l(o(new Pt(.06,.06,.3),t.iron),0,0,.12),0,0,0));const D=l(o(new ie(.045,.06,.5,8),t.woodD),0,.12,.26);return D.rotation.x=.35,T.add(D),T.add(l(o(new ie(.08,.06,.12,8),t.iron),0,.36,.34)),st(T,0,.4,.35,.9),T}function jt(T=3.2,D=n.banner){const G=new At;G.add(l(o(new ie(.05,.07,T+.6,8),t.woodD),0,(T+.6)/2,0)),G.add(c(l(o(new ie(.03,.03,1,6),t.iron),0,T+.4,.05),0,0,be/2)),G.add(l(N(.16),0,T+.72,.02));const J=new He(new ln(.9,1.9,1,8),i("#ffffff",{map:D,side:Sn})),ut=J.geometry.attributes.position;for(let Et=0;Et<ut.count;Et++)ut.setZ(Et,Math.sin(ut.getY(Et)*2.6)*.05);return J.geometry.computeVertexNormals(),J.position.set(0,T-.55,.08),J.castShadow=!0,G.add(J),G}function bt(T=1.2,D=2.6){const G=new At;G.add(c(l(o(new ie(.04,.04,T+.3,6),t.iron),0,0,.04),0,0,be/2));const J=o(new ln(T,D),i("#ffffff",{map:n.banner,side:Sn}),!1);return J.position.set(0,-D/2,.05),G.add(J),G}function lt(T=2.4){const D=new At;D.add(l(o(new ie(.05,.08,T,7),t.woodD),0,T/2,0)),D.add(l(N(.24),0,T+.12,0)),D.add(l(it(.5),0,T+.2,0));for(let G=0;G<3;G++){const J=o(new ln(.12,u(.5,.9)),i(p([e.red,e.redD,e.bone]),{side:Sn}),!1);J.position.set(Math.cos(G*2.1)*.08,T-.5,Math.sin(G*2.1)*.08),J.rotation.y=G*2.1,D.add(J)}return D}function C(T=3){const D=new At,G=Math.max(2,Math.round(T/.9));D.add(c(l(o(new ie(.1,.1,T,8),t.wood),0,.45,0),0,0,be/2));for(let J=0;J<G;J++){const ut=-T/2+(J+.5)*T/G;for(const Et of[-1,1]){const tt=new At;tt.add(l(o(new ie(.07,.07,1.4,7),t.woodL),0,0,0)),tt.add(l(o(new Pn(.07,.3,7),t.boneD),0,.85,0)),tt.position.set(ut,.45,0),tt.rotation.x=Et*.8,D.add(tt)}}return D}function S(){const T=new At;T.add(l(o(new ie(.55,.5,.9,18),t.redD),0,.75,0)),T.add(l(o(new ie(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let D=0;D<3;D++){const G=D/3*be*2;T.add(c(l(o(new ie(.04,.05,.7,6),t.woodD),Math.cos(G)*.42,.3,Math.sin(G)*.42),Math.sin(G)*.2,0,-Math.cos(G)*.2))}return T.add(l(c(o(new Cn(.53,.03,6,20),t.bone),be/2,0,0),0,1.05,0)),T}function $(T=4){const D=new At,G=[e.red,e.woodL,e.redD,e.wood];for(let J=0;J<4;J++){const ut=o(new ie(.42,.46,T/4,10),i(G[J]));ut.position.y=T/8+J*T/4,D.add(ut);for(const Et of[-1,1])D.add(l(o(new Pt(.12,.08,.06),t.bone),Et*.15,ut.position.y+.05,.42));D.add(l(o(new Pt(.36,.06,.06),t.dark),0,ut.position.y-.18,.43))}D.add(l(N(.45),0,T+.25,0)),D.add(l(it(1.1),0,T+.35,0));for(const J of[-1,1])D.add(c(l(o(new Pt(1,.12,.1),t.woodD),J*.55,T*.72,0),0,0,J*.2));return D}function yt(T=1.9,D=2.6,G="#8a6a4a"){const J=new At,ut=o(new Pn(T,D,8,1,!0),i(G,{side:Sn}));ut.position.y=D/2,J.add(ut);for(let Et=0;Et<3;Et++){const tt=Et/3*be*2+.4;J.add(c(l(o(new ie(.04,.04,.9,6),t.woodD),Math.cos(tt)*.12,D+.25,Math.sin(tt)*.12),Math.sin(tt)*.4,0,-Math.cos(tt)*.4))}return J.add(c(l(o(new ln(.9,1.3),t.dark,!1),0,.65,T*.82),-.6,0,0)),J.add(c(l(o(new Cn(T*.62,.05,6,24),t.redD),0,D*.35,0),be/2,0,0)),J}function mt(T=4){const D=new At;D.add(l(o(new Pt(1.8,.1,.1),t.wood),0,1.25,0)),D.add(l(o(new Pt(1.8,.1,.1),t.wood),0,.3,.12));for(const G of[-1,1])D.add(l(o(new Pt(.1,1.35,.1),t.woodD),G*.85,.67,0));for(let G=0;G<T;G++){const J=-.6+G*1.2/(T-1),ut=new At;G%2?(ut.add(l(o(new Pt(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ut.add(l(o(new Pt(.22,.05,.06),t.gold),0,.2,0))):(ut.add(l(o(new ie(.03,.03,1.4,6),t.woodD),0,.7,0)),ut.add(l(o(new Pt(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ut.position.set(J,.05,.08),ut.rotation.z=.08,D.add(ut)}return D}function Nt(T=2){const D=new At,G=[];for(let J=0;J<4;J++)for(let ut=0;ut<Math.floor(T/.26)-J;ut++)G.push([-T/2+.13+ut*.26+J*.13,.13+J*.22,0]);for(const[J,ut]of G)D.add(c(l(o(new ie(.12,.12,.9,8),i(p([e.woodL,"#8a6440","#6e4a30"]))),J,ut,0),be/2,0,0));return D}function kt(){const T=new At;T.add(l(o(new Pt(1.6,.12,1),t.wood),0,.62,0));for(const D of[-1,1])T.add(l(o(new Pt(1.6,.36,.06),t.woodL),0,.85,D*.47)),T.add(c(l(o(new ie(.42,.42,.08,14),t.woodD),0,.42,D*.58),be/2,0,0));for(const D of[-1,1])T.add(c(l(o(new Pt(1.4,.07,.07),t.woodD),1.3,.55,D*.35),0,0,-.18));return T.add(l(ge(),-.3,.68,.1)),T.add(l(se(.4),.35,.68,-.15)),T}function vt(){const T=new At;T.add(Zt(2.2,.9,.9,t.woodL));for(const[J,ut]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])T.add(l(o(new Pt(.08,2.2,.08),t.woodD),J,1.1,ut));const D=x(256,64,(J,ut,Et)=>{for(let tt=0;tt<8;tt++)J.fillStyle=tt%2?"#e3d5b6":"#8a2420",J.fillRect(tt*32,0,32,Et)}),G=o(new Pt(2.5,.05,1.4),i("#ffffff",{map:D}));G.position.set(0,2.2,.15),G.rotation.x=.22,T.add(G);for(let J=0;J<9;J++)T.add(l(o(new an(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return T.add(l(se(.5),-1.4,0,.3)),T.add(l(pt(.8),1.5,0,-.1)),T}function Tt(){const T=new At;T.add(l(o(g(new ie(1,1.1,.9,22),1.2),t.stone),0,.45,0)),T.add(c(l(o(new bi(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-be/2,0,0));for(const G of[-1,1])T.add(l(o(new Pt(.14,1.7,.14),t.woodD),G*.95,1.5,0));const D=o(new Pn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return D.position.y=2.65,D.rotation.y=be/4,T.add(D),T.add(c(l(o(new ie(.06,.06,1.9,8),t.wood),0,2.05,0),0,0,be/2)),T.add(l(o(new ie(.15,.13,.22,10),t.woodL),.2,1.55,0)),T.add(l(N(.18),0,3.15,0)),T}function Dt(T=0){const D=new At;D.add(l(o(new ie(.07,.1,2.8,8),t.iron),0,1.4,0)),D.add(l(o(new Pt(.55,.06,.06),t.iron),.22,2.7,0));const G=new At;if(G.add(o(new ie(.14,.18,.32,8),t.iron)),G.add(l(o(new an(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),T){const J=new is("#ffc477",T,9,2);G.add(J)}return G.position.set(.44,2.44,0),D.add(G),D}function V(){const T=new At;H(T,t.wood,0,.25,0,1,.5,.6,.02),T.add(c(l(o(new ie(.3,.3,1,16,1,!1,0,be),t.woodL),0,.5,0),0,0,be/2));for(const D of[-.38,.38])H(T,t.iron,D,.27,0,.07,.52,.62),T.add(l(c(o(new Cn(.31,.025,4,16,be),t.iron),0,be/2,0),D,.5,0));for(const D of[-1,1])for(const G of[-1,1])H(T,t.iron,D*.49,.05,G*.29,.06,.1,.06);H(T,t.gold,0,.44,.31,.16,.2,.025),H(T,t.dark,0,.42,.325,.03,.06,.01);for(const D of[-1,1])T.add(l(c(o(new Cn(.06,.012,4,12),t.iron),0,be/2,0),D*.51,.3,0));return T.add(l(N(.1),0,.62,.22)),T}function xt(){const T=new At;H(T,t.woodD,0,.25,0,1.3,.5,1.1,.03),H(T,t.red,0,.58,.05,1.08,.16,.9,.06),H(T,t.woodD,0,1.2,-.48,1.3,1.9,.2,.03),H(T,t.red,0,1.25,-.36,.9,1.3,.06,.03);for(let D=0;D<4;D++)for(const G of[-1,1])T.add(l(o(new an(.03,6,4),t.gold),G*.4,.7+D*.36,-.32));for(const D of[-1,1])H(T,t.woodD,D*.62,.75,0,.18,.5,1,.03),H(T,t.iron,D*.62,1.01,.1,.22,.04,.8,.01),T.add(l(N(.12),D*.62,1.1,.45)),d(T,new k(D*.55,2.15,-.48),new k(D*.3,1,0),.5,.08,t.bone,0,6);return T.add(l(N(.32),0,2.25,-.4)),T.add(l(it(1),0,2.3,-.4)),T}function _t(T=e.red){const D=new At;return D.add(c(o(new ie(.42,.42,.06,18),i(T)),be/2,0,0)),D.add(c(l(o(new Cn(.42,.04,6,20),t.iron),0,0,.03),0,0,0)),D.add(l(N(.16),0,0,.08)),D}function Vt(){const T=new At;return T.add(o(new Pt(.7,.8,.08),t.woodD)),T.add(l(N(.32),0,.02,.18)),T.add(l(it(1),0,.12,.16)),T}function et(T=.7,D=6){const G=new At;G.add(l(o(new ie(.012,.012,1,4),t.iron),0,.5,0)),G.add(c(o(new Cn(T,.04,6,24),t.iron),be/2,0,0));for(let J=0;J<D;J++){const ut=J/D*be*2;G.add(l(ye(.12),Math.cos(ut)*T,.02,Math.sin(ut)*T))}return G}function q(T,D,G,J){for(let ut=0;ut<D.length-1;ut++){const[Et,tt]=D[ut],[A,St]=D[ut+1],ot=5;for(let Q=1;Q<ot;Q++){const B=Q/ot,K=Et+(A-Et)*B,ft=tt+(St-tt)*B,It=G-Math.sin(B*be)*J;T.add(l(o(new an(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),K,It,ft))}const y=Math.hypot(A-Et,St-tt),R=o(new ie(.008,.008,y,3),t.dark,!1);R.position.set((Et+A)/2,G-J*.6,(tt+St)/2),R.rotation.set(0,-Math.atan2(St-tt,A-Et),be/2),T.add(R)}}function dt(T="round",D=1){const G=new At;if(G.add(l(o(new ie(.18*D,.3*D,1.8*D,8),t.wood),0,.9*D,0)),T==="pine")for(let J=0;J<4;J++)G.add(l(o(new Pn((1.5-J*.3)*D,1.4*D,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+J*.8)*D,0));else if(T==="dead")for(let J=0;J<4;J++){const ut=o(new ie(.04*D,.1*D,1.2*D,6),t.woodD),Et=J*1.7;ut.position.set(Math.cos(Et)*.3*D,(1.6+J*.25)*D,Math.sin(Et)*.3*D),ut.rotation.set(Math.sin(Et)*.8,0,-Math.cos(Et)*.8),G.add(ut)}else{const J=T==="autumn"?[e.autumn1,e.autumn2,e.autumn3]:[e.leaf,e.leafD,e.leafL];for(const[ut,Et,tt,A]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])G.add(l(o(new an(A*D,14,10),i(p(J))),ut*D,Et*D,tt*D))}return G.rotation.y=u(0,3),G}const Lt=new Map;function _(T,D,G,J,ut=0){const Et=new ze().compose(new k(G,ut,J),new bn().setFromAxisAngle(new k(0,1,0),u(0,2*be)),new k(D*u(.92,1.08),D*u(.9,1.12),D*u(.92,1.08))),tt=Lt.get(T);return tt?tt.push(Et):Lt.set(T,[Et]),!0}function z(T){T.flora.scene.updateMatrixWorld(!0);for(const[D,G]of Lt){const J=Uf(T.flora,D);if(!J)throw new Error(`no flora model for ${D}`);for(const[ut,Et]of Nf(s,J)){const tt=Et.length===1?Et[0]:hh(Et,!1);if(!tt)continue;const A=new io(tt,ut,G.length);G.forEach((St,ot)=>A.setMatrixAt(ot,St)),A.castShadow=!ut.isMeshStandardMaterial,A.receiveShadow=!0,A.frustumCulled=!1,E.add(A)}}}function W(){const T=new At;T.add(l(o(new ie(.3,.38,.6,8),t.stone),0,.3,0));const D=l(o(new nh(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return D.scale.y=1.7,T.add(D),P.push({o:D,axis:"y",v:.6,bob:!0,y0:1}),T}function O(){const T=new At;T.add(l(o(new an(.5,16,10,0,be*2,be*.3,be*.7),i("#2e2a2c",{side:Sn})),0,.55,0)),T.add(c(l(o(new bi(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-be/2,0,0));for(let D=0;D<3;D++){const G=D/3*be*2;T.add(l(o(new ie(.04,.04,.3,6),t.iron),Math.cos(G)*.32,.12,Math.sin(G)*.32))}return T}function rt(T,D,G=.9,J=-1){for(let ut=0;ut<D.length-1;ut++){if(ut===J)continue;const[Et,tt]=D[ut],[A,St]=D[ut+1],ot=Math.hypot(A-Et,St-tt),y=-Math.atan2(St-tt,A-Et);for(const R of[G*.45,G*.85]){const Q=o(new Pt(ot,.07,.06),t.woodL);Q.position.set((Et+A)/2,R,(tt+St)/2),Q.rotation.y=y,T.add(Q)}for(const[R,Q]of[[Et,tt],[A,St]])T.add(l(o(new Pt(.12,G+.15,.12),t.woodD),R,(G+.15)/2,Q))}}function ct(T){const D=new At;D.add(l(o(new Pt(.1,2.2,.1),t.woodD),0,1.1,0));const G=x(256,96,(J,ut,Et)=>{J.fillStyle="#6a4630",J.fillRect(0,0,ut,Et),J.strokeStyle="#3a2419",J.lineWidth=8,J.strokeRect(4,4,ut-8,Et-8),J.fillStyle="#e3d5b6",J.font=`800 40px ${Rc}`,J.textAlign="center",J.textBaseline="middle",J.fillText(T,ut/2,Et/2+2)});return D.add(l(o(new Pt(1.1,.42,.06),i("#ffffff",{map:G})),.25,1.85,0)),D}function Gt(T=e.red){const D=new At;for(const G of[-1,1])H(D,t.woodD,G*.48,.24,0,.07,.18,1.96,.015);for(const[G,J,ut]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])H(D,t.woodD,G,ut/2,J,.1,ut,.1,.015),D.add(l(o(new an(.065,8,6),t.wood),G,ut+.04,J));for(let G=0;G<5;G++)H(D,t.wood,-.32+G*.16,.66,-.98,.07,.5,.04,.01);return H(D,t.woodD,0,.92,-.98,.98,.09,.07,.015),H(D,t.woodD,0,.42,-.98,.98,.07,.07,.015),H(D,t.woodD,0,.5,.98,.98,.14,.06,.015),H(D,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),H(D,i(T),0,.5,.25,.96,.07,1.36,.03),H(D,i(T),0,.535,-.38,.96,.05,.16,.025),H(D,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),H(D,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),D.add(l(N(.12),0,1.08,-.94)),D}function we(){const T=new At;T.add(Gt(e.redD));const D=Gt("#4a3a30");D.position.y=1.15,T.add(D);for(const[G,J]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])T.add(l(o(new Pt(.1,2.2,.1),t.wood),G,1.1,J));for(let G=0;G<5;G++)T.add(l(o(new Pt(.06,.05,.06),t.woodL),.52,.4+G*.3,.9));return T}function Ce(){const T=new At;H(T,t.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const D of[-1,1]){H(T,t.wood,D*.3,1.05,.31,.56,1.78,.03,.01);for(const G of[.62,1.48])H(T,t.woodL,D*.3,G,.33,.4,.66,.02,.008);for(const G of[.4,1.7])H(T,t.iron,D*.52,G,.33,.14,.05,.015);H(T,t.gold,D*.06,1.08,.34,.03,.14,.03)}H(T,t.wood,0,2.05,0,1.32,.1,.68,.02),H(T,t.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const D of[-1,1])for(const G of[-1,1])H(T,t.woodD,D*.54,.05,G*.24,.12,.1,.12,.02);return T}function _e(T,D=1.8){const G=new At;return G.add(l(o(M(new Pt(.12,D,T),D,1.3),t.plankWall),0,D/2,0)),G.add(l(o(new Pt(.18,.1,T+.04),t.timber),0,D,0)),G}function Ve(T=.8,D=1.6){const G=new He(new ln(T,D,6,1),i(e.red,{side:Sn})),J=G.geometry.attributes.position;for(let Et=0;Et<J.count;Et++)J.setZ(Et,Math.sin(J.getX(Et)*14)*.04);G.geometry.computeVertexNormals(),G.position.y=D/2+.1;const ut=new At;return ut.add(G),ut.add(l(c(o(new ie(.02,.02,T+.2,6),t.iron),0,0,be/2),0,D+.12,0)),ut}function Pe(){const T=new At;for(let D=0;D<5;D++)T.add(c(l(o(new ie(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+D%3*.08,u(-.1,.1)),0,u(-.4,.4),be/2));return T}function Kt(){const T=new At;for(let G=0;G<3;G++){const J=G/3*be*2;T.add(c(l(o(new ie(.025,.03,1.3,6),t.woodD),Math.cos(J)*.22,.62,Math.sin(J)*.22),Math.sin(J)*.32,0,-Math.cos(J)*.32))}const D=l(c(o(new ie(.07,.11,1.3,12),t.gold),.9,0,0),0,1.35,.15);return T.add(D),T}function ce(){const T=new At;T.add(l(o(new ie(.06,.22,.9,10),t.woodD),0,.45,0)),T.add(l(o(new an(.34,20,14),i("#2a3050")),0,1.25,0));for(let D=0;D<14;D++){const G=u(0,2*be),J=u(-1.2,1.2);T.add(l(o(new an(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(G)*Math.cos(J)*.345,1.25+Math.sin(J)*.345,Math.sin(G)*Math.cos(J)*.345))}return T.add(l(c(o(new Cn(.4,.02,6,28),t.gold),0,be/2,.3),0,1.25,0)),T}const un=x(256,192,(T,D,G)=>{T.fillStyle="#d8c8a0",T.fillRect(0,0,D,G),T.strokeStyle="#6a4a30",T.lineWidth=3,T.beginPath(),T.moveTo(30,150),T.bezierCurveTo(60,60,140,40,220,90),T.bezierCurveTo(200,150,120,170,30,150),T.stroke(),T.fillStyle="#8a2420";for(const[J,ut]of[[90,100],[150,80],[180,120]])T.beginPath(),T.arc(J,ut,6,0,be*2),T.fill();T.strokeStyle="rgba(106, 74, 48, 0.5)",T.setLineDash([6,6]),T.beginPath(),T.moveTo(90,100),T.lineTo(150,80),T.lineTo(180,120),T.stroke()});function yn(){const T=new At;return T.add(o(new Pt(1.4,1.05,.04),t.woodD)),T.add(l(new He(new ln(1.3,.95),new Vn({map:un,toneMapped:!1})),0,0,.03)),T}function En(){const T=new At,D=i("#6e6668"),G=i("#4a4446"),J=i("#b8b0a8"),ut=o(new va(.32,.8,6,12),D);ut.rotation.x=be/2,ut.position.set(0,.34,0),ut.scale.set(1.05,1,.85),T.add(ut),T.add(l(o(new an(.24,12,10),J),0,.22,.25));const Et=l(new At,0,.5,.78);Et.add(o(new an(.24,14,10),D)),Et.add(c(l(o(new Pn(.12,.34,10),G),0,-.05,.26),be/2,0,0)),Et.add(l(o(new an(.04,6,4),t.dark,!1),0,-.03,.43));for(const tt of[-1,1])Et.add(c(l(o(new Pn(.07,.2,6),G),tt*.13,.22,-.02),0,0,-tt*.3)),Et.add(l(o(new an(.03,6,4),r("#ffb84a",1.2),!1),tt*.1,.05,.2));Et.rotation.x=.25,T.add(Et);for(const[tt,A]of[[-.2,.55],[.2,.55]])T.add(c(l(o(new va(.07,.36,4,8),D),tt,.08,A+.15),be/2,0,0));return T.add(c(l(o(new Pn(.12,.7,8),G),.25,.22,-.75),1.2,.6,0)),T.add(c(l(o(new Cn(.2,.03,6,16),t.red),0,.42,.62),be/2.4,0,0)),T}return{FLAGS:w,FLAMES:I,SPINNERS:P,FIRE_LIGHTS:v,BOOK_COLS:oe,flameTex:b,flame:st,skull:N,horns:it,fj:Y,bx:H,taper:nt,boards:ht,cornerIron:wt,barrel:pt,crate:se,sack:ge,table:Zt,roundTable:pe,stool:Ze,bench:me,candle:ye,skullCandle:Ee,bottle:Rt,mug:Wt,plant:te,bookshelf:ae,rug:de,easel:Mt,desk:zt,anvil:Ot,dummy:L,target:Qt,hay:Jt,brazier:Xt,torch:Ct,poleBanner:jt,hangingBanner:bt,skullPole:lt,spikes:C,drum:S,totem:$,tent:yt,weaponRack:mt,woodpile:Nt,cart:kt,stall:vt,well:Tt,lampPost:Dt,chest:V,throne:xt,shield:_t,trophy:Vt,chandelier:et,lanternString:q,tree:dt,plantFlora:_,growFlora:z,crystal:W,cauldron:O,fence:rt,signPost:ct,bed:Gt,bunk:we,wardrobe:Ce,partition:_e,curtain:Ve,scrollStack:Pe,telescope:Kt,starGlobe:ce,wallMap:yn,wolf:En,put:h}}const{PI:md}=Math;function nS(s,t,e,n){const{scene:i,COL:r,toon:o,mesh:a,at:l,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:x,growFlora:m,lampPost:g,skullPole:M}=t,E=xh.pts;function w(j,N){let it=!1;for(let at=0,Y=E.length-1;at<E.length;Y=at++){const[H,nt]=E[at],[ht,wt]=E[Y];nt>N!=wt>N&&j<(ht-H)*(N-nt)/(wt-nt)+H&&(it=!it)}return it}function I(j,N,it,at,Y,H){const nt=Y-it,ht=H-at,wt=nt*nt+ht*ht||1,qt=Math.max(0,Math.min(1,((j-it)*nt+(N-at)*ht)/wt));return Math.hypot(j-it-nt*qt,N-at-ht*qt)}const P=[...bs.map(j=>({w:j.w*.65,pts:j.closed?[...j.line,j.line[0]]:j.line})),{w:1,pts:aa}],v=[],b=Ff.map(j=>ni[j]);function F(j,N,it=.6){const at=Math.atan2(N,j);if(Math.hypot(j,N)>Lr(at)-1.6)return!1;for(const Y of P){const H=Y.pts;for(let nt=0;nt<H.length-1;nt++){const ht=H[nt],wt=H[nt+1];if(!(Math.abs(ht[0]-j)>Y.w+it+1.5||Math.abs(ht[1]-N)>Y.w+it+1.5)&&I(j,N,ht[0],ht[1],wt[0],wt[1])<Y.w+it)return!1}}for(const Y of la)if(Y.kind==="house"){const[H,nt]=qr(Y,j,N),ht=3.4+it;if(Math.abs(H)<Y.w/2+ht&&nt>-Y.d/2-ht&&nt<Y.d/2+ht+(Y.deck?4.5:0)+(Y.id==="tavern"?5:0))return!1}else if(Math.hypot(j-Y.x,N-Y.z)<Y.r+(Y.kind==="open"?2.2:1.4)+it)return!1;for(const Y of Cc)if(Y.kind==="hut"){const[H,nt]=qr(Y,j,N);if(Math.abs(H)<Y.w/2+2.6+it&&Math.abs(nt)<Y.d/2+2.6+it)return!1}else if(Math.hypot(j-Y.x,N-Y.z)<Y.r+1.8+it)return!1;for(let Y=0;Y<E.length;Y++){const[H,nt]=E[Y],[ht,wt]=E[(Y+1)%E.length];if(I(j,N,H,nt,ht,wt)<xh.thick/2+.8+it||Math.hypot(j-H,N-nt)<3.6+it)return!1}if(Math.hypot(j+44,N-26)<6+it||Math.hypot(j-vh[0],N-vh[1])<9+it)return!1;for(const Y of b)if(Math.hypot(j-Y.x,N-Y.z)<1.2+it)return!1;for(const Y of v)if(Math.hypot(j-Y.x,N-Y.z)<Y.r+it)return!1;return!0}function U(j,N,it,at){let Y=0;for(let H=0;H<N&&Y<j;H++){const nt=f(0,2*md),ht=Math.sqrt(d())*58,wt=Math.cos(nt)*ht*1.04,qt=Math.sin(nt)*ht*.9;it(wt,qt)&&(at(wt,qt),Y++)}}U(34,6e3,(j,N)=>w(j,N)&&F(j,N,1.4),(j,N)=>{x(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),j,N),v.push({x:j,z:N,r:2.2})}),U(80,9e3,(j,N)=>!w(j,N)&&F(j,N,1.6),(j,N)=>{x(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),j,N),v.push({x:j,z:N,r:2.4})});{const j=[],N=[],it=[];U(90,9e3,(at,Y)=>F(at,Y,.5),(at,Y)=>{const H=f(.55,1);x(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),H*1.25,at,Y),v.push({x:at,z:Y,r:H})}),U(60,6e3,(at,Y)=>F(at,Y,.4),(at,Y)=>{const H=f(.25,.8);j.push({x:at,y:H*.3,z:Y,sx:H,sy:H*f(.5,.85),sz:H*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),v.push({x:at,z:Y,r:H})}),U(1200,16e3,(at,Y)=>F(at,Y,.1),(at,Y)=>{const H=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let nt=0;nt<4;nt++)N.push({x:at+f(-.12,.12),y:.11,z:Y+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:H})}),U(320,12e3,(at,Y)=>F(at,Y,.1),(at,Y)=>{it.push({x:at,y:.16,z:Y,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Oi(1,0),j,{cast:!0});for(const at of[p(new Pn(.06,.24,4),N,{}),p(new an(.09,7,5),it,{})])at&&(at.userData.noLine=!0)}m(n);for(const[j,N,it]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const at=bs.find(H=>H.id===j);if(!at)continue;const Y=at.line;for(let H=6;H<Y.length-6;H+=N*2){const[nt,ht]=Y[H-1],[wt,qt]=Y[H+1],ue=Y[H],pt=Math.hypot(wt-nt,qt-ht)||1,Yt=-(qt-ht)/pt,se=(wt-nt)/pt,ge=H/(N*2)%2?1:-1,Zt=ue[0]+Yt*ge*(at.w*.62+.5),pe=ue[1]+se*ge*(at.w*.62+.5);if(j==="ring"&&Math.hypot(Zt,pe)<10)continue;let Ze=!0;for(const me of b)Math.hypot(Zt-me.x,pe-me.z)<2&&(Ze=!1);for(const me of la)me.kind!=="house"&&Math.hypot(Zt-me.x,pe-me.z)<me.r+.5&&me.id!=="court"&&(Ze=!1);Ze&&h(i,it==="lamp"?g(0):M(f(2,2.6)),Zt,pe,Math.atan2(-Yt*ge,-se*ge))}}const X=[];function st(){const j=new At,N=o("#2a2426");j.add(l(a(new an(.16,8,6),N),0,0,0)),j.children[0].scale.set(1,.8,1.6),j.add(l(a(new an(.1,8,6),N),0,.08,.2)),j.add(c(l(a(new Pn(.03,.12,4),o("#c79a45")),0,.07,.33),md/2,0,0));for(const it of[-1,1]){const at=l(new At,it*.1,.02,0);at.add(l(a(new Pt(.55,.03,.22),N),it*.27,0,0)),j.add(at)}return j}for(let j=0;j<6;j++){const N=st();N.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},N.scale.setScalar(1.8),i.add(N),X.push(N)}for(const j of["war","library","tavern"]){const N=e.HOUSES[j];if(!N)continue;const it=N.roof;for(let at=0;at<2;at++){const Y=st(),H=Y.children[3],nt=Y.children[4];H.visible=nt.visible=!0,H.rotation.z=.9,nt.rotation.z=-.9,Y.position.set(f(-N.r.w/3,N.r.w/3),it.hR+.3,0),Y.rotation.y=f(0,6),it.R.add(Y)}}return{CROWS:X}}async function sS(s){const t=s.reducedMotion;let e=s.width,n=s.height;const i=new IM({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});Jy(i,e,n,s.dpr);const r=new n0,o=$y(i,r),a=Oy(),l=Gy(),c=Zy(),h=eS(o),d=await tS(o,h,a);await c;const f=jy(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=g1(o,h,d,f,d.models),p=nS(o,h,f,d.models),{TEX:x,COL:m,toon:g,rnd:M,rr:E,pick:w,_c:I}=o,{FLAMES:P,SPINNERS:v,FLAGS:b,FIRE_LIGHTS:F}=h,{HOUSES:U,deskF:X,deskB:st,hearthLight:j}=f,{mouthMat:N,coreMat:it,fireLight:at,chimneyTop:Y,emberBase:H,waterTex:nt,fallTex:ht,mists:wt,skyBoat:qt,airship:ue}=u,{CROWS:pt}=p,{skyDome:Yt,cloudRing:se}=d,ge=Object.fromEntries(Ui.map(Z=>[Z,M()*6])),Zt=Hy(d.crossings),pe=qy(o,r,await l,{reducedMotion:t,phases:ge,start:Yr,groundY:Zt,flameTex:h.flameTex}),Ze=Object.values(pe.actors),me=()=>Object.fromEntries(Ui.map(Z=>[Z,zi(Yr[Z])]));let ye=me(),Ee=null,Rt=!1;const Wt=new Set,te=new Set(["thinking","reading","writing","waiting"]),oe={},ee=[];{const Z=new Set;for(const Se of Object.values(U)){for(const Ae of Object.values(Se.sides))Z.add(Ae.up);if(Z.add(Se.roof.R),Se.upper){const Ae=Se.upper;Z.add(Ae.U);const $t=new Map;Ae.U.traverse(Ue=>{if(!(Ue instanceof He))return;const Fe=Ue.material;let Xe=$t.get(Fe);Xe||(Xe=Fe.clone(),$t.set(Fe,Xe),Ae.mats.push(Xe)),Ue.material=Xe})}}for(const Se of Ze)Z.add(Se.root);for(const{f:Se}of P)Z.add(Se);for(const Se of v)Z.add(Se.o);for(const Se of b)Z.add(Se);for(const Se of pt)Z.add(Se);[X.g,st.g,qt,ue,se,Yt].forEach(Se=>Z.add(Se)),r.updateMatrixWorld(!0);const gt=new Map,Ht=["position","normal","uv"],fe=Se=>{if(Z.has(Se))return;for(const xe of[...Se.children])fe(xe);if(!(Se instanceof He)||Se instanceof io||Se.children.length||Array.isArray(Se.material))return;const Ae=Se.material,$t=Se.geometry;if(Ae.transparent||Ae.vertexColors||Ae.isShaderMaterial||Ae.depthWrite===!1||!$t.attributes.uv||!$t.attributes.normal||$t.attributes.color)return;const Ue=$t.index?$t.toNonIndexed():$t.clone();for(const xe of Object.keys(Ue.attributes))Ht.includes(xe)||Ue.deleteAttribute(xe);Ue.morphAttributes={},Ue.clearGroups(),Ue.applyMatrix4(Se.matrixWorld);const Fe=Ae.uuid+(Se.castShadow?"s":"n"),Xe=gt.get(Fe);Xe?Xe.geos.push(Ue):gt.set(Fe,{m:Ae,cast:Se.castShadow,geos:[Ue]}),Se.parent?.remove(Se)};fe(r);for(const{m:Se,cast:Ae,geos:$t}of gt.values()){const Ue=hh($t,!1);if(!Ue){console.warn("could not merge",Se.type);continue}const Fe=new He(Ue,Se);Fe.castShadow=Ae,Fe.receiveShadow=!0,Fe.matrixAutoUpdate=!1,r.add(Fe)}const Ne=new Vn({visible:!1});for(const[Se,Ae]of Object.entries(U)){const $t=Ae.top+Ae.roof.hR,Ue=new He(new Pt(Ae.r.w+.6,$t,Ae.r.d+.6),Ne);Ue.position.set(Ae.r.x,$t/2,Ae.r.z),Ue.rotation.y=Ae.r.ry||0,Ue.userData.houseId=Se,r.add(Ue),Ue.updateMatrixWorld(!0),ee.push(Ue)}}const ae=new oi(Zn.fov,e/n,Zn.near,Zn.far),de={t:new k(...Zn.home.target),p:new k(...Zn.home.position)};ae.position.copy(de.p);const Mt=new UM(ae,i.domElement);Mt.target.copy(de.t),Mt.enableDamping=!0,Mt.dampingFactor=.08,Mt.minDistance=Zn.minDistance,Mt.maxDistance=Zn.maxDistance,Mt.maxPolarAngle=Zn.maxPolarAngle,Mt.minPolarAngle=Zn.minPolarAngle,Mt.screenSpacePanning=!1,Mt.zoomSpeed=.8,Mt.update();function zt(){const Z=Mt.target,gt=Math.hypot(Z.x,Z.z),Ht=Zn.targetRadius;if(gt>Ht){const fe=Ht/gt;ae.position.x-=Z.x*(1-fe),ae.position.z-=Z.z*(1-fe),Z.x*=fe,Z.z*=fe}if(Z.y<Zn.targetMinY||Z.y>Zn.targetMaxY){const fe=Math.max(Zn.targetMinY,Math.min(Zn.targetMaxY,Z.y));ae.position.y+=fe-Z.y,Z.y=fe}ae.position.y<Zn.minHeight&&(ae.position.y=Zn.minHeight)}let Ot=null,L=null,Qt=!1;function Jt(Z,gt){if(t){Mt.target.copy(Z),ae.position.copy(gt),Mt.update();return}Ot={t0:performance.now(),dur:1100,ft:Mt.target.clone(),fp:ae.position.clone(),tt:Z,tp:gt}}function Xt(Z){if(Z==="overview"){L=null,Jt(de.t.clone(),de.p.clone());return}const gt=U[Z];L=Z,gt&&(gt.view="ground");const Ht=n1(Z,[ae.position.x-Mt.target.x,ae.position.z-Mt.target.z]);Jt(new k(...Ht.target),new k(...Ht.position))}let Ct=null,jt=null,bt=null,lt=null;const C=new hf,S=new Ut,$=Ze.map(Z=>Z.root);function yt(Z){const gt=i.domElement.getBoundingClientRect();if(gt.width===0||gt.height===0)return null;S.set((Z.clientX-gt.left)/gt.width*2-1,-((Z.clientY-gt.top)/gt.height)*2+1),C.setFromCamera(S,ae);for(let Ht=C.intersectObjects($,!0)[0]?.object??null;Ht;Ht=Ht.parent){const fe=Ht.userData.agentId;if(fe)return fe}return null}const mt=()=>{Ot=null,bt=null,Ct?.()};let Nt=0;const kt=Z=>{Ot=null,lt={x:Z.clientX,y:Z.clientY,moved:!1}},vt=Z=>{!lt&&Z.pointerType==="mouse"&&Z.timeStamp-Nt>90&&(Nt=Z.timeStamp,i.domElement.style.cursor=yt(Z)?"pointer":""),!(!lt||lt.moved||Math.hypot(Z.clientX-lt.x,Z.clientY-lt.y)<=4)&&(lt.moved=!0,mt())},Tt=Z=>{const gt=lt&&!lt.moved;if(lt=null,Z.type!=="pointerup"||!gt)return;const Ht=yt(Z);Ht&&jt?.(Ht)},V=[["pointerdown",kt],["pointermove",vt],["pointerup",Tt],["pointercancel",Tt],["wheel",mt],["keydown",Z=>{Z.key.startsWith("Arrow")&&mt()}]];for(const[Z,gt]of V)i.domElement.addEventListener(Z,gt,{passive:!0});Mt.listenToKeyEvents(i.domElement);const xt=Z=>{if(!bt)return!1;const gt=ni[ye[bt].spot];return gt.room===Z.id&&!gt.out},_t=Z=>Qt||L===Z.id||!!Z.near||xt(Z);function Vt(Z,gt){const Ht=Mt.target,fe=Math.hypot(Z.r.x-Ht.x,Z.r.z-Ht.z),Ne=Math.max(Z.r.w,Z.r.d)*.8+9;Z.near=Z.near?gt<72&&fe<Ne+4:gt<64&&fe<Ne}function et(Z,gt,Ht){if(Ht.fading!==gt){Ht.fading=gt;for(const fe of Z)fe.transparent=gt,fe.needsUpdate=!0}}function q(Z,gt,Ht){const fe=gt?0:1;Z.s+=(fe-Z.s)*Ht,Math.abs(Z.s-fe)<.004&&(Z.s=fe),Z.up.scale.y=Math.max(.001,Z.s),Z.up.visible=Z.s>.03}function dt(Z){const gt=ae.position.distanceTo(Mt.target),Ht=t?1:Math.min(1,Z*5),fe=t?1:Math.min(1,Z*6);for(const Ne of Object.values(U)){Vt(Ne,gt);const Se=_t(Ne),Ae=Se&&!!Ne.upper&&Ne.view==="upper",$t=Se?1:0;Ne.lift+=($t-Ne.lift)*Ht,Math.abs(Ne.lift-$t)<.002&&(Ne.lift=$t);const Ue=Ne.roof;Ue.R.position.y=Ue.base+Ne.lift*3.4,Ue.R.visible=Ne.lift<.97;for(const tn of Ue.mats)tn.opacity=1-Ne.lift;const Fe=ae.position.x-Ne.r.x,Xe=ae.position.z-Ne.r.z,xe=Math.hypot(Fe,Xe)||1,$e=Math.cos(Ne.r.ry||0),An=Math.sin(Ne.r.ry||0),Ln=tn=>{const Rn=((tn.n[0]*$e+tn.n[1]*An)*Fe+(-tn.n[0]*An+tn.n[1]*$e)*Xe)/xe;return Rn>.32?tn.wish=!0:Rn<.06&&(tn.wish=!1),!!tn.wish};for(const tn of Object.values(Ne.sides))q(tn,Se&&!Ae&&Ln(tn),fe);if(Ne.upper){const tn=Ne.upper,Rn=Se&&!Ae?1:0;tn.lift+=(Rn-tn.lift)*Ht,Math.abs(tn.lift-Rn)<.002&&(tn.lift=Rn),et(tn.mats,tn.lift>0,tn),tn.U.position.y=tn.top+tn.lift*3.4,tn.U.visible=tn.lift<.97;for(const Wi of tn.mats)Wi.opacity=1-tn.lift;for(const Wi of Object.values(tn.sides))q(Wi,Ae&&Ln(Wi),fe)}}}function Lt(Z,gt,Ht,fe,Ne,Se){const Ae=new mn;Ae.setAttribute("position",new Gn(new Float32Array(Z*3),3));const $t=new Nr(Ae,new Hr({color:gt,size:Ht,map:fe,transparent:!0,opacity:Ne,depthWrite:!1,blending:fe?js:Si}));return $t.frustumCulled=!1,$t.userData.seed=Float32Array.from({length:Z},()=>Math.random()),$t.userData.h=Float32Array.from({length:Z},()=>Math.random()*Se),$t.userData.top=Se,$t.visible=!t,r.add($t),$t}const _=[{at:Y,p:Lt(30,"#d8cfc6",2.2,x.soft,.5,9),heat:!0}];for(const Z of Object.values(U)){if(!Z.roof.smokeAt)continue;Z.g.updateMatrixWorld(!0);const gt=Z.roof.R.localToWorld(new k(...Z.roof.smokeAt));_.push({at:gt,p:Lt(14,"#d8cfc6",1.4,x.soft,.45,5),house:Z})}const z=Lt(60,"#ffb04a",.11,null,.9,4),W=[];for(let Z=0;Z<4;Z++){const gt=new Bi(new os({map:x.spark,color:Z%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Si}));gt.scale.setScalar(.25),X.g.add(gt),W.push(gt)}const O=Z=>{const gt=new Bi(new os({map:x.spark,color:Z%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Si}));return gt.scale.setScalar(.22),gt.raycast=()=>{},gt},rt=["yard-1","yard-2"].map((Z,gt)=>{const Ht=ni[Z],fe=new At;fe.position.set(Ht.x+Math.sin(Ht.ry)*1.1,1.2,Ht.z+Math.cos(Ht.ry)*1.1);const Ne=[0,1,2].map(O);return fe.add(...Ne),r.add(fe),{spot:Z,sprites:Ne,ph:gt*1.7}}),ct={};for(const Z of["frontend","backend"]){const gt=pe.actors[Z].root.getObjectByName("mixamorigRightHand");if(!gt)continue;const Ht=new At,fe=new He(new ie(.055,.05,.13,10),g(m.woodL)),Ne=new He(new ie(.057,.057,.025,10),g("#f3ead2"));Ne.position.y=.075,Ht.add(fe,Ne),Ht.position.set(0,.09,.05),gt.add(Ht),pe.actors[Z].root.updateMatrixWorld(!0),Ht.scale.setScalar(1/gt.getWorldScale(new k).x),Ht.visible=!1,ct[Z]=Ht}const Gt=[];{const Z=new Set;for(const Ht of Object.values(U)){Z.add(Ht.roof.R);for(const fe of Object.values(Ht.sides))Z.add(fe.up);if(Ht.upper){Z.add(Ht.upper.U);for(const fe of Object.values(Ht.upper.sides))Z.add(fe.up)}}r.updateMatrixWorld(!0);const gt=[];r.traverse(Ht=>{Ht instanceof is&&gt.push(Ht)});for(const Ht of gt){const fe=[];let Ne=!1;for(let Se=Ht.parent,Ae=0;Se&&Ae<40;Se=Se.parent,Ae++)Z.has(Se)&&fe.push(Se),Se.userData.agentId&&(Ne=!0);Ne||(r.attach(Ht),fe.length&&Gt.push({l:Ht,anc:fe,base:Ht.intensity}))}}function we(){for(const Z of Gt)Z.anc.every(Ht=>Ht.visible)?Z.l.intensity===0&&(Z.l.intensity=Z.base):Z.l.intensity=0}const Ce=1;r.updateMatrixWorld(!0);const _e=[];for(const{f:Z,s:gt}of P){if(gt<1.3)continue;let Ht=Z,fe=!1;for(let Ne=0;Ht&&Ne<40;Ne++)Ht.userData.movesWithWall===!0&&(fe=!0),Ht=Ht.parent;fe||_e.push(Z.getWorldPosition(new k))}function Ve(Z){const gt=new mn;gt.setAttribute("position",new Gn(new Float32Array(Z*3),3)),gt.setAttribute("color",new Gn(new Float32Array(Z*3),3));const Ht=new Nr(gt,new Hr({size:.09,map:x.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Si,toneMapped:!1}));return Ht.frustumCulled=!1,Ht.visible=!t,r.add(Ht),Ht}const Pe=Ve(Math.max(1,_e.length*7)),Kt=Pe.geometry.attributes.position.count,ce={src:Float32Array.from({length:Kt},(Z,gt)=>gt%Math.max(1,_e.length)),life:Float32Array.from({length:Kt},()=>Math.random()),sd:Float32Array.from({length:Kt},()=>Math.random())},un=240,yn=new Nr(new mn,new Hr({size:.07,map:x.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Si}));yn.geometry.setAttribute("position",new Gn(new Float32Array(un*3),3));const En=Float32Array.from({length:un*3},()=>Math.random());yn.frustumCulled=!1,yn.visible=!t,r.add(yn);const T=80,D=new ln(.16,.1),G=new io(D,g("#ffffff",{side:Sn}),T),J=[];for(let Z=0;Z<T;Z++)G.setColorAt(Z,I.set(w([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),J.push({x:E(-30,30),y:E(0,12),z:E(-30,30),r:E(0,6),v:E(.5,.9),w:E(1,3)});G.instanceColor&&(G.instanceColor.needsUpdate=!0),G.frustumCulled=!1,G.visible=!t,r.add(G);const ut=new ze,Et=new bn,tt=new ki,A=new k,St=new k(1,1,1);function ot(Z,gt){const Ht=Pe.geometry.attributes.position,fe=Pe.geometry.attributes.color;for(let Ae=0;Ae<Ht.count;Ae++){const $t=_e[ce.src[Ae]];if(!$t)break;ce.life[Ae]=ce.life[Ae]+gt*(.35+ce.sd[Ae]*.4),ce.life[Ae]>1&&(ce.life[Ae]=ce.life[Ae]-1);const Ue=ce.life[Ae],Fe=ce.sd[Ae];Ht.setXYZ(Ae,$t.x+Math.sin(Z*(1+Fe)+Fe*20)*.25*Ue,$t.y+.2+Ue*2.2,$t.z+Math.cos(Z*(.8+Fe)+Fe*9)*.25*Ue);const Xe=(1-Ue)*(.6+.4*Math.sin(Z*13+Fe*30))*2.2;fe.setXYZ(Ae,Xe,Xe*.48,Xe*.16)}Ht.needsUpdate=!0,fe.needsUpdate=!0;const Ne=yn.geometry.attributes.position,Se=Mt.target;for(let Ae=0;Ae<un;Ae++){const $t=En[Ae*3],Ue=En[Ae*3+1],Fe=En[Ae*3+2],Xe=(($t*44+Z*.25*(Ue-.5)-Se.x)%44+66)%44-22,xe=((Ue*44+Z*.18*($t-.3)-Se.z)%44+66)%44-22;Ne.setXYZ(Ae,Se.x+Xe,.6+Fe*9+Math.sin(Z*.5+$t*20)*.4,Se.z+xe)}Ne.needsUpdate=!0;for(let Ae=0;Ae<T;Ae++){const $t=J[Ae];$t.y-=gt*$t.v,$t.y<.05&&($t.y=E(8,13),$t.x=Se.x+E(-28,28),$t.z=Se.z+E(-28,28)),A.set($t.x+Math.sin(Z*.9+$t.r)*.9,$t.y,$t.z+Math.cos(Z*.7+$t.r)*.6),tt.set(Z*$t.w+$t.r,Z*.6+$t.r,Math.sin(Z*2+$t.r)*1.2),ut.compose(A,Et.setFromEuler(tt),St),G.setMatrixAt(Ae,ut)}G.instanceMatrix.needsUpdate=!0}r.traverse(Z=>{const gt=Z.material;(Z instanceof Nr||Z instanceof Bi||Z.userData.noLine||gt&&!Array.isArray(gt)&&(gt.blending===Si||gt.depthWrite===!1))&&Z.layers.set(Ce)});for(const Z of[se,G,Yt])Z.traverse(gt=>gt.layers.set(Ce));ae.layers.enable(Ce);const y=new tm({side:Sn}),R=new Qn(1,1,{type:$n});R.depthTexture=new Es(1,1),R.depthTexture.type=Ai;const Q=new Te(.5,.5,1),B=new Te;function K(){r.overrideMaterial=y,ae.layers.disable(Ce);const Z=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(B);const gt=i.getClearAlpha();i.setClearColor(Q,1),i.setRenderTarget(R),i.clear(),i.render(r,ae),i.setRenderTarget(null),i.setClearColor(B,gt),i.shadowMap.autoUpdate=Z,ae.layers.enable(Ce),r.overrideMaterial=null}const ft=new QM(i,new Qn(1,1,{type:$n,samples:4}));ft.setPixelRatio(i.getPixelRatio()),ft.addPass(new t1(r,ae));const It="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Ft=new bc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Ut},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:It,fragmentShader:`#include <packing>
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
    }`});ft.addPass(Ft);const Bt=new cr(new Ut(e,n),.42,.55,.88);y1(Bt),ft.addPass(Bt),ft.addPass(new jM);const ne=new bc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Ut},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:It,fragmentShader:`#include <packing>
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
    }`});ft.addPass(ne);const le=Ft.uniforms,he=ne.uniforms,re=(Z,gt)=>Z[gt];re(le,"tDepth").value=R.depthTexture,re(he,"tDepth").value=R.depthTexture;function Ie(Z,gt){const Ht=i.getPixelRatio();i.setSize(Z,gt),ft.setSize(Z,gt),Bt.setSize(Z,gt),R.setSize(Math.floor(Z*Ht),Math.floor(gt*Ht)),re(le,"texel").value.set(1/(Z*Ht),1/(gt*Ht)),re(he,"texel").value.copy(re(le,"texel").value),re(le,"width").value=Math.max(1,Ht*.85),ae.aspect=Z/gt,ae.updateProjectionMatrix()}for(const Z of[le,he])re(Z,"near").value=ae.near,re(Z,"far").value=ae.far;Ie(e,n);let Oe=0,Le="",Ge=-1,dn=0,Me=0,xn=!1;const We=new k,Wn={};let gn={},ai=Number.NEGATIVE_INFINITY;const Xn=24301,Yn=new Set(["idle","done"]),Re={};let qe=null;const on=new k;function Je(){if(!qe)return;const Z={};for(const gt of Ze){gt.root.getWorldPosition(on),on.y+=Ks[gt.id].H*(Re[gt.id]?.74:1)+.25,on.project(ae);const Ht=!!Wn[gt.id],fe=Ht?null:ni[ye[gt.id].spot].room;Z[gt.id]={x:on.x,y:on.y,z:on.z,walking:Ht,room:fe}}qe(Z)}function Qe(Z){Ge<0&&(Ge=Z);const gt=(Z-Ge)/1e3,Ht=Math.min(.05,gt-dn);dn=gt;for(const $t of Ze){const Ue=Ks[$t.id].speed;let Fe=ju(ye[$t.id],Z,Ue,t);if(Ee&&Rt&&!Fe.walk&&Fe.spot===zf[$t.id]&&Ba($t.id,Ee,Rt,Wt)===Fe.spot){for(const Wi of Ee.tasks)Wi.owner===$t.id&&Wt.add(Wi.id);const Rn=Ba($t.id,Ee,Rt,Wt);Rn&&(Fe=Sl(Fe,Rn,Z,Ue,t,po[$t.id]))}ye[$t.id]=Fe;const Xe=ed(Fe,Z);if($t.root.position.x=Xe.x,$t.root.position.z=Xe.z,Xe.walking){const Rn=Xe.heading-$t.root.rotation.y;$t.root.rotation.y+=Math.atan2(Math.sin(Rn),Math.cos(Rn))*Math.min(1,Ht*10)}else $t.root.rotation.y=Xe.heading;const xe=Zt($t.root.position.x,$t.root.position.z);$t.root.position.y+=(xe-$t.root.position.y)*Math.min(1,Ht*12);const $e=td(Fe,Z),An=ni[Fe.spot].pose,Ln=Xe.walking?"walk":$e?Ac.has(An)?"sit":"idle":An;oe[$t.id]=!Xe.walking&&!$e&&Fe.spot===po[$t.id]&&!!Ee&&te.has(Ee.agents[$t.id].state),Wn[$t.id]=Xe.walking,Re[$t.id]=!Xe.walking&&(Ln==="sit"||Ac.has(An)),pe.lanternFor($t,Ln,gt),pe.drive($t,Ln,Ht,Xe.walking?null:Fe.spot,Fe.walk?Fe.walk.speed/Ue:1);const tn=ct[$t.id];if(tn){const Rn=gn[$t.id];tn.visible=!!Rn&&Rn.act.prop==="mug"&&!Xe.walking&&Fe.spot===Rn.act.spot}}if(Ee&&Z-ai>=250){ai=Z;const $t=new Set(Ui.filter(Xe=>Yn.has(Ee?.agents[Xe].state??"idle"))),Ue={};for(const Xe of Ui){const xe=ye[Xe];Ue[Xe]={spot:xe.spot,to:xe.walk?.to??null,walking:!!Wn[Xe]}}const Fe=h1(gn,$t,Ue,Z,{seed:Xn,reducedMotion:t});gn=Fe.runs;for(const[Xe,xe]of Object.entries(Fe.to))ye[Xe]=Sl(ye[Xe],xe,Z,Ks[Xe].speed,t,po[Xe])}const fe=!!oe.frontend&&Ee?.agents.frontend.state==="writing",Ne=s1(Oe),Se=Ne.heat,Ae=r1(gt,t);Ne.mouth!==Le&&(Le=Ne.mouth,N.emissive.set(Ne.mouth)),N.emissiveIntensity=.9+Se*1.4+Ae,it.emissiveIntensity=1.2+Se*1.8+Ae,at.intensity=8+Se*16+Ae*20;for(const[$t,Ue]of[[X,"frontend"],[st,"backend"]]){const Fe=!!oe[Ue],Xe=$t.screen?.material;Xe&&(Xe.opacity+=((Fe?1:.3)-Xe.opacity)*Math.min(1,Ht*4)),$t.light&&($t.light.intensity=Fe?3.5:0)}if(dt(Ht),!t){for(const{f:xe,ph:$e}of P){const An=1+Math.sin(gt*11+$e)*.16+Math.sin(gt*27+$e*2)*.08;xe.scale.set(1/Math.sqrt(An),An,1/Math.sqrt(An))}for(const xe of F)xe.l.intensity=xe.base*(1+Math.sin(gt*9+xe.ph)*.12+Math.sin(gt*23+xe.ph)*.06);j.intensity=11+Math.sin(gt*7)*1.5;for(const xe of v)xe.o.rotation[xe.axis]+=Ht*xe.v,xe.bob&&(xe.o.position.y=(xe.y0??0)+Math.sin(gt*1.6)*.06);const $t=Math.abs(Math.sin(gt*5.2+ge.frontend));W.forEach((xe,$e)=>{const An=fe&&$t<.25;xe.material.opacity=An?1-$t*4:0,xe.position.set(-.4+$e*.19,.95+$e%2*.12+(An?(.25-$t)*.8:0),$e%2*.08-.29),xe.material.rotation=gt*3+$e});for(const xe of rt){const $e=["frontend","backend"].some(Ln=>{const tn=gn[Ln];return tn?.act.prop==="sparks"&&tn.act.spot===xe.spot&&ye[Ln].spot===xe.spot&&!Wn[Ln]}),An=Math.abs(Math.sin(gt*.9+xe.ph));xe.sprites.forEach((Ln,tn)=>{const Rn=$e&&An>.97;Ln.material.opacity=Rn?(An-.97)*33:0,Ln.position.set((tn-1)*.16,tn%2*.1+(Rn?(1-An)*6:0),0),Ln.material.rotation=gt*3+tn})}X.kb&&(X.kb.position.y=X.kb.userData.y0+(fe&&$t<.2?.03:0));const Ue=z.geometry.attributes.position,Fe=z.userData.h,Xe=z.userData.seed;for(let xe=0;xe<Ue.count;xe++){const $e=Xe[xe];Fe[xe]=Fe[xe]+Ht*(.5+$e*.7)*(.5+Se),Fe[xe]>z.userData.top&&(Fe[xe]=0),Ue.setXYZ(xe,H.x+Math.sin(gt*(.6+$e)+$e*10)*.8*$e,H.y+Fe[xe],H.z+Math.cos(gt*.7+$e*7)*.5*$e)}Ue.needsUpdate=!0,z.material.opacity=Math.min(.95,.2+Se*.5);for(const xe of _){const $e=xe.p,An=$e.geometry.attributes.position,Ln=$e.userData.h,tn=$e.userData.seed,Rn=xe.house?xe.house.lift:0;$e.visible=Rn<.5;const Wi=xe.heat?.6+Se:.7;for(let Xi=0;Xi<An.count;Xi++){const Fa=tn[Xi];Ln[Xi]=Ln[Xi]+Ht*(.5+Fa*.4)*Wi,Ln[Xi]>$e.userData.top&&(Ln[Xi]=0);const Rs=Ln[Xi];An.setXYZ(Xi,xe.at.x+Math.sin(Rs*.8+Fa*6)*Rs*.16+Rs*.3,xe.at.y+Rs,xe.at.z+Math.cos(Rs*.6+Fa*4)*Rs*.14)}An.needsUpdate=!0}ht.offset.y=(ht.offset.y+Ht*1.6)%1,nt.offset.x=(nt.offset.x+Ht*.12)%1,se.rotation.y+=Ht*.004,wt.forEach((xe,$e)=>{xe.material.opacity=.42+Math.sin(gt*.8+$e)*.1});for(const xe of pt){const $e=xe.userData;$e.a+=Ht*$e.s,xe.position.set(Math.cos($e.a)*$e.r,$e.y+Math.sin($e.a*3)*.8,Math.sin($e.a)*$e.r),xe.rotation.y=-$e.a,xe.children[3].rotation.z=Math.sin(gt*10+$e.r)*.6,xe.children[4].rotation.z=-Math.sin(gt*10+$e.r)*.6}b.forEach((xe,$e)=>{xe.rotation.y=Math.sin(gt*2+$e)*.3}),qt.position.y=-.4+Math.sin(gt*.9)*.2,qt.rotation.x=Math.sin(gt*.7)*.03;{const xe=ue.userData;xe.a+=Ht*.022,ue.position.set(Math.cos(xe.a)*xe.r,xe.y+Math.sin(gt*.5)*.8,Math.sin(xe.a)*xe.r),ue.rotation.y=Math.atan2(-Math.cos(xe.a),-Math.sin(xe.a))}}if(Ot){const $t=Math.min(1,(performance.now()-Ot.t0)/Ot.dur),Ue=$t<.5?4*$t*$t*$t:1-Math.pow(-2*$t+2,3)/2;Mt.target.lerpVectors(Ot.ft,Ot.tt,Ue),ae.position.lerpVectors(Ot.fp,Ot.tp,Ue),$t>=1&&(Ot=null)}else if(bt){pe.actors[bt].root.getWorldPosition(We),We.y+=.8;const $t=We.sub(Mt.target).multiplyScalar(t?1:Math.min(1,Ht*4));Mt.target.add($t),ae.position.add($t)}we(),Mt.update(),zt(),Je(),t||ot(gt,Ht),Yt.position.copy(ae.position),re(he,"focus").value=ae.position.distanceTo(Mt.target),re(he,"time").value=t?0:gt,K(),ft.render(),Me++}return{renderer:i,scene:r,camera:ae,controls:Mt,housePicks:ee,agentPhase:ge,cast:pe,groundY:Zt,place(Z,gt){const Ht=ni[gt];pe.actors[Z].root.position.y=Zt(Ht.x,Ht.z),ye[Z]=zi(gt,performance.now())},update(Z,gt){Ee=Z,Rt=gt,Oe=Bf(Z);const Ht=performance.now();for(const fe of Ui){const Ne=Yn.has(Z.agents[fe].state)?gn[fe]:void 0,Se=Ne?Ne.act.spot:Ba(fe,Z,Rt,Wt);Se&&(ye[fe]=Sl(ye[fe],Se,Ht,Ks[fe].speed,t,po[fe]))}},land(){const Z=performance.now();for(const gt of Ui)ye[gt]=m1(ye[gt],Z)},restart(){ye=me(),Wt.clear(),gn={}},whereIs(Z){const gt=performance.now(),Ht=ju(ye[Z],gt,Ks[Z].speed,t),fe=ed(Ht,gt).walking,Ne=fe?Ht.walk:null;return{spot:Ht.spot,to:Ne?.to??null,path:Ne?.path??null,walking:fe,held:td(Ht,gt)}},get frames(){return Me},start(){xn=!1,i.setAnimationLoop(Z=>{xn||Qe(Z)})},stop(){xn=!0,i.setAnimationLoop(null)},resize(Z,gt){e=Z,n=gt,Ie(Z,gt)},flyToRoom:Xt,onHandMove(Z){return Ct=Z,()=>{Ct===Z&&(Ct=null)}},onFrame(Z){return qe=Z,()=>{qe===Z&&(qe=null)}},onPick(Z){return jt=Z,()=>{jt===Z&&(jt=null)}},flyToAgent(Z){bt=null;const gt=ni[ye[Z].spot];L=U[gt.room]&&!gt.out?gt.room:null;const Ht=pe.actors[Z].root.getWorldPosition(new k);Ht.y+=.8;const fe=ae.position.clone().sub(Mt.target);fe.lengthSq()<1e-6&&fe.set(.45,.85,.9),fe.normalize(),fe.y=Math.max(fe.y,.6),fe.normalize(),Jt(Ht,Ht.clone().addScaledVector(fe,14))},follow(Z){bt=Z,Z&&(Ot=null,L=null)},setOpenHouses(Z){Qt=Z},setTasks(Z){f.drawBoard(Z)},dispose(){i.setAnimationLoop(null);for(const[Z,gt]of V)i.domElement.removeEventListener(Z,gt);Ct=null,jt=null,qe=null,Mt.dispose(),ft.dispose(),R.dispose(),i.dispose()}}}export{sS as createWorld};
