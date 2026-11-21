import{R as Ri,W as ra,S as Ms,a as $n,A as Rh,r as oa,f as Cd,B as ga,D as kc,F as Ye,b as Ps,c as _a,t as eo,d as Kf,i as zr,e as Zf,C as Ch,g as Ph,w as Jf,p as qa,h as $f}from"./index-CHsQbBbW.js";const zc="187",or={ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qf=0,Lh=1,jf=2,Kr=1,tp=2,Gr=3,Ss=0,Qn=1,Sn=2,Ls=0,ar=1,Ei=2,Dh=3,Ih=4,ep=5,er=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,lp=202,cp=203,Pd=204,Ld=205,hp=206,up=207,dp=208,fp=209,pp=210,mp=211,gp=212,_p=213,xp=214,kl=0,zl=1,Gl=2,no=3,Hl=4,Vl=5,Wl=6,Xl=7,Dd=0,vp=1,Mp=2,cs=0,Gc=1,Hc=2,Vc=3,Oa=4,Wc=5,Xc=6,Yc=7,Nh="attached",yp="detached",Id=300,ur=301,io=302,Ka=303,Za=304,Si=1e3,si=1001,xa=1002,Un=1003,Nd=1004,Hr=1005,Yn=1006,aa=1007,Hi=1008,fi=1009,Ud=1010,Od=1011,so=1012,qc=1013,Li=1014,yi=1015,jn=1016,Kc=1017,Zc=1018,dr=1020,Fd=35902,Bd=35899,kd=1021,zd=1022,Ci=1023,bs=1026,ys=1027,Fa=1028,Jc=1029,Ds=1030,$c=1031,Qc=1033,la=33776,ca=33777,ha=33778,ua=33779,Yl=35840,ql=35841,Kl=35842,Zl=35843,Jl=36196,$l=37492,Ql=37496,jl=37488,tc=37489,va=37490,ec=37491,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,gc=36492,_c=36494,xc=36495,vc=36283,Mc=36284,Ma=36285,yc=36286,Sp=2200,bp=2201,wp=2202,ro=2300,oo=2301,Ja=2302,Uh=2303,sr=2400,rr=2401,ya=2402,jc=2500,Tp=2501,Ep=0,Gd=1,Sc=2,Ap=3200,ao=0,Rp=1,rs="",Nn="srgb",mi="srgb-linear",Sa="linear",pn="srgb",$a=7680,Cp=519,Pp=512,Lp=513,Dp=514,Hd=515,Ip=516,Np=517,Vd=518,Wd=519,Xd=35044,Oh="300 es",Pi=2e3,lo=2001;function Up(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Op(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fp(){const s=co("canvas");return s.style.display="block",s}const Fh={};function ba(...s){const t="THREE."+s.shift();console.log(t,...s)}function Yd(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function De(...s){s=Yd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function He(...s){s=Yd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function lr(...s){const t=s.join(" ");t in Fh||(Fh[t]=!0,De(...s))}function Bp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const kp={[kl]:kl,[Gl]:Wl,[Hl]:Hl,[no]:Vl,[zl]:zl,[Wl]:Gl,[Xl]:Xl,[Vl]:no};class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const Zr=Math.PI/180,fr=180/Math.PI;function Di(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[s&255]+Kn[s>>8&255]+Kn[s>>16&255]+Kn[s>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function je(s,t,e){return Math.max(t,Math.min(e,s))}function th(s,t){return(s%t+t)%t}function zp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Gp(s,t,e){return s!==t?(e-s)/(t-s):0}function Jr(s,t,e){return(1-e)*s+e*t}function Hp(s,t,e,n){return Jr(s,t,1-Math.exp(-e*n))}function Vp(s,t=1){return t-Math.abs(th(s,t*2)-t)}function Wp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Xp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Yp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qp(s,t){return s+Math.random()*(t-s)}function Kp(s){return s*(.5-Math.random())}function Zp(s){s!==void 0&&(Bh=s);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jp(s){return s*Zr}function $p(s){return s*fr}function Qp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function jp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function t0(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ba(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eh(s,t){if(t.constructor===Float32Array)return s;const e=Ba(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function nh(s,t){if(t.constructor===Float32Array)return s;const e=Ba(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const wa={DEG2RAD:Zr,RAD2DEG:fr,generateUUID:Di,clamp:je,euclideanModulo:th,mapLinear:zp,inverseLerp:Gp,lerp:Jr,damp:Hp,pingpong:Vp,smoothstep:Wp,smootherstep:Xp,randInt:Yp,randFloat:qp,randFloatSpread:Kp,seededRandom:Zp,degToRad:Jp,radToDeg:$p,isPowerOfTwo:Qp,ceilPowerOfTwo:jp,floorPowerOfTwo:qd,setQuaternionFromProperEuler:t0,normalize:nh,denormalize:eh},wh=class wh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;let Ut=wh;class bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Th=class Th{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this.z=je(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this.z=je(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;let z=Th;const Qa=new z,kh=new bn,Eh=class Eh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],y=i[1],E=i[4],w=i[7],I=i[2],P=i[5],v=i[8];return r[0]=o*x+a*y+l*I,r[3]=o*m+a*E+l*P,r[6]=o*g+a*w+l*v,r[1]=c*x+h*y+d*I,r[4]=c*m+h*E+d*P,r[7]=c*g+h*w+d*v,r[2]=f*x+u*y+p*I,r[5]=f*m+u*E+p*P,r[8]=f*g+u*w+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ja.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;let Ze=Eh;const ja=new Ze,zh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){const s={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pn&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pn&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rs?Sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mi]:{primaries:t,whitePoint:n,transfer:Sa,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:n,transfer:pn,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),s}const rn=e0();function hs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class n0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=co("canvas")),Fs.width=t.width,Fs.height=t.height;const i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hs(e[n]/255)*255):e[n]=hs(e[n]);return{data:e,width:t.width,height:t.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let i0=0;class ih{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tl(i[o].image)):r.push(tl(i[o]))}else r=tl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?n0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let s0=0;const el=new z;class kn extends ds{constructor(t=kn.DEFAULT_IMAGE,e=kn.DEFAULT_MAPPING,n=si,i=si,r=Yn,o=Hi,a=Ci,l=fi,c=kn.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Di(),this.name="",this.source=new ih(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){De(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){De(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Id;kn.DEFAULT_ANISOTROPY=1;const Ah=class Ah{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,w=(u+1)/2,I=(g+1)/2,P=(h+f)/4,v=(d+x)/4,b=(p+m)/4;return E>w&&E>I?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=v/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=P/i,r=b/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=v/r,i=b/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this.z=je(this.z,t.z,e.z),this.w=je(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this.z=je(this.z,t,e),this.w=je(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;let _n=Ah;class r0 extends ds{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _n(0,0,t,e),this.scissorTest=!1,this.viewport=new _n(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new kn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ih(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends r0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kd extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ua=class Ua{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ua().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,l0)}lookAt(t,e,n){const i=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),fs.crossVectors(n,ui),fs.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),fs.crossVectors(n,ui)),fs.normalize(),bo.crossVectors(ui,fs),i[0]=fs.x,i[4]=bo.x,i[8]=ui.x,i[1]=fs.y,i[5]=bo.y,i[9]=ui.y,i[2]=fs.z,i[6]=bo.z,i[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],E=n[7],w=n[11],I=n[15],P=i[0],v=i[4],b=i[8],F=i[12],U=i[1],W=i[5],rt=i[9],Q=i[13],N=i[2],it=i[6],at=i[10],q=i[14],H=i[3],nt=i[7],ht=i[11],bt=i[15];return r[0]=o*P+a*U+l*N+c*H,r[4]=o*v+a*W+l*it+c*nt,r[8]=o*b+a*rt+l*at+c*ht,r[12]=o*F+a*Q+l*q+c*bt,r[1]=h*P+d*U+f*N+u*H,r[5]=h*v+d*W+f*it+u*nt,r[9]=h*b+d*rt+f*at+u*ht,r[13]=h*F+d*Q+f*q+u*bt,r[2]=p*P+x*U+m*N+g*H,r[6]=p*v+x*W+m*it+g*nt,r[10]=p*b+x*rt+m*at+g*ht,r[14]=p*F+x*Q+m*q+g*bt,r[3]=y*P+E*U+w*N+I*H,r[7]=y*v+E*W+w*it+I*nt,r[11]=y*b+E*rt+w*at+I*ht,r[15]=y*F+E*Q+w*q+I*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*u-c*f,E=a*u-c*d,w=a*f-l*d,I=o*u-c*h,P=o*f-l*h,v=o*d-a*h;return e*(x*y-m*E+g*w)-n*(p*y-m*I+g*P)+i*(p*E-x*I+g*v)-r*(p*w-x*P+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,E=e*l-i*o,w=e*c-r*o,I=n*l-i*a,P=n*c-r*a,v=i*c-r*l,b=h*x-d*p,F=h*m-f*p,U=h*g-u*p,W=d*m-f*x,rt=d*g-u*x,Q=f*g-u*m,N=y*Q-E*rt+w*W+I*U-P*F+v*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/N;return t[0]=(a*Q-l*rt+c*W)*it,t[1]=(i*rt-n*Q-r*W)*it,t[2]=(x*v-m*P+g*I)*it,t[3]=(f*P-d*v-u*I)*it,t[4]=(l*U-o*Q-c*F)*it,t[5]=(e*Q-i*U+r*F)*it,t[6]=(m*w-p*v-g*E)*it,t[7]=(h*v-f*w+u*E)*it,t[8]=(o*rt-a*U+c*b)*it,t[9]=(n*U-e*rt-r*b)*it,t[10]=(p*P-x*w+g*y)*it,t[11]=(d*w-h*P-u*y)*it,t[12]=(a*F-o*W-l*b)*it,t[13]=(e*W-n*F+i*b)*it,t[14]=(x*E-p*I-m*y)*it,t[15]=(h*I-d*E+f*y)*it,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,y=l*c,E=l*h,w=l*d,I=n.x,P=n.y,v=n.z;return i[0]=(1-(x+g))*I,i[1]=(u+w)*I,i[2]=(p-E)*I,i[3]=0,i[4]=(u-w)*P,i[5]=(1-(f+g))*P,i[6]=(m+y)*P,i[7]=0,i[8]=(p+E)*v,i[9]=(m-y)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Bs.set(i[0],i[1],i[2]).length();const a=Bs.set(i[4],i[5],i[6]).length(),l=Bs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),bi.copy(this);const c=1/o,h=1/a,d=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,e.setFromRotationMatrix(bi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Pi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Pi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Pi,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Pi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===lo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ua.prototype.isMatrix4=!0;let Be=Ua;const Bs=new z,bi=new Be,a0=new z(0,0,0),l0=new z(1,1,1),fs=new z,bo=new z,ui=new z,Hh=new Be,Vh=new bn;class Xi{constructor(t=0,e=0,n=0,i=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let c0=0;const Wh=new z,ks=new bn,$i=new Be,wo=new z,Er=new z,h0=new z,u0=new bn,Xh=new z(1,0,0),Yh=new z(0,1,0),qh=new z(0,0,1),Kh={type:"added"},d0={type:"removed"},zs={type:"childadded",child:null},nl={type:"childremoved",child:null};class yn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new z,e=new Xi,n=new bn,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ze}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Wh.copy(t).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Er,wo,this.up):$i.lookAt(wo,Er,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),ks.setFromRotationMatrix($i),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),zs.child=t,this.dispatchEvent(zs),zs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new z(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Et extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},To={h:0,s:0,l:0};function sl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class be{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,rn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=rn.workingColorSpace){return this.r=t,this.g=e,this.b=n,rn.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=rn.workingColorSpace){if(t=th(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sl(o,r,t+1/3),this.g=sl(o,r,t),this.b=sl(o,r,t-1/3)}return rn.colorSpaceToWorking(this,i),this}setStyle(t,e=Nn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:De("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);De("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){const n=Zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):De("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return rn.workingToColorSpace(Zn.copy(this),t),Math.round(je(Zn.r*255,0,255))*65536+Math.round(je(Zn.g*255,0,255))*256+Math.round(je(Zn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=rn.workingColorSpace){rn.workingToColorSpace(Zn.copy(this),e);const n=Zn.r,i=Zn.g,r=Zn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=rn.workingColorSpace){return rn.workingToColorSpace(Zn.copy(this),e),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=Nn){rn.workingToColorSpace(Zn.copy(this),t);const e=Zn.r,n=Zn.g,i=Zn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+e,ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ps),t.getHSL(To);const n=Jr(ps.h,To.h,e),i=Jr(ps.s,To.s,e),r=Jr(ps.l,To.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new be;be.NAMES=Zd;class rh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(t),this.near=e,this.far=n}clone(){return new rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p0 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wi=new z,Qi=new z,rl=new z,ji=new z,Gs=new z,Hs=new z,Zh=new z,ol=new z,al=new z,ll=new z,cl=new _n,hl=new _n,ul=new _n;class Mi{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wi.subVectors(t,e),i.cross(wi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wi.subVectors(i,e),Qi.subVectors(n,e),rl.subVectors(t,e);const o=wi.dot(wi),a=wi.dot(Qi),l=wi.dot(rl),c=Qi.dot(Qi),h=Qi.dot(rl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,n,i){return wi.subVectors(n,e),Qi.subVectors(t,e),wi.cross(Qi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),wi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Mi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Gs.subVectors(i,n),Hs.subVectors(r,n),ol.subVectors(t,n);const l=Gs.dot(ol),c=Hs.dot(ol);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,i);const h=Gs.dot(al),d=Hs.dot(al);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Gs,o);ll.subVectors(t,r);const u=Gs.dot(ll),p=Hs.dot(ll);if(p>=0&&u<=p)return e.copy(r);const x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Hs,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Zh.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(Zh,a);const g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Gs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Ao.subVectors(this.max,Ar),Vs.subVectors(t.a,Ar),Ws.subVectors(t.b,Ar),Xs.subVectors(t.c,Ar),ms.subVectors(Ws,Vs),gs.subVectors(Xs,Ws),Ts.subVectors(Vs,Xs);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ts.z,Ts.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ts.z,0,-Ts.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ts.y,Ts.x,0];return!dl(e,Vs,Ws,Xs,Ao)||(e=[1,0,0,0,1,0,0,0,1],!dl(e,Vs,Ws,Xs,Ao))?!1:(Ro.crossVectors(ms,gs),e=[Ro.x,Ro.y,Ro.z],dl(e,Vs,Ws,Xs,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ts=[new z,new z,new z,new z,new z,new z,new z,new z],Ti=new z,Eo=new Yi,Vs=new z,Ws=new z,Xs=new z,ms=new z,gs=new z,Ts=new z,Ar=new z,Ao=new z,Ro=new z,Es=new z;function dl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);const a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const In=new z,Co=new Ut;let m0=0;class Vn extends ds{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xd,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=t!==void 0?Ba(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):eh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):nh(t,this.array)}}class Jd extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $d extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const g0=new Yi,Rr=new z,fl=new z;class qi{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):g0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);const e=Rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(fl)),this.expandByPoint(Rr.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _0=0;const _i=new Be,pl=new yn,Ys=new z,di=new Yi,Cr=new Yi,Hn=new z;class gn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Up(t)?$d:Jd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(di.min,Cr.min),di.expandByPoint(Hn),Hn.addVectors(di.max,Cr.max),di.expandByPoint(Hn)):(di.expandByPoint(Cr.min),di.expandByPoint(Cr.max))}di.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Hn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Hn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Hn.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(t,c),Hn.add(Ys)),i=Math.max(i,n.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)a[F]=new z,l[F]=new z;const h=new z,d=new z,f=new z,u=new Ut,p=new Ut,x=new Ut,m=new z,g=new z;function y(F,U,W){c[F]=c[U]=c[W]=1,h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,W),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,U),x.fromBufferAttribute(r,W),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const rt=1/(p.x*x.y-x.x*p.y);isFinite(rt)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(rt),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(rt),a[F].add(m),a[U].add(m),a[W].add(m),l[F].add(g),l[U].add(g),l[W].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,U=E.length;F<U;++F){const W=E[F],rt=W.start,Q=W.count;for(let N=rt,it=rt+Q;N<it;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const w=new z,I=new z,P=new z,v=new z;function b(F){P.fromBufferAttribute(i,F),v.copy(P);const U=a[F];w.copy(U),w.sub(P.multiplyScalar(P.dot(U))).normalize(),I.crossVectors(v,U);const rt=I.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,rt)}for(let F=0,U=n.count;F<U;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Hn.fromBufferAttribute(t,e),Hn.normalize(),t.setXYZ(e,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Vn(f,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xd,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Jh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Jh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Jh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Di()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ei=new z;class ho{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Ba(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.applyMatrix4(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.applyNormalMatrix(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.transformDirection(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ho(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):eh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):nh(t,this.data.array)}}const ml=new z,x0=new z,v0=new Ze;class ss{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ml.subVectors(n,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||v0.getNormalMatrix(t),i=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let M0=0;class pi extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ar,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Ld,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){De(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){De(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new be().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ss().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class us extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qs;const Pr=new z,Ks=new z,Zs=new z,Js=new Ut,Lr=new Ut,jd=new Be,Po=new z,Dr=new z,Lo=new z,$h=new Ut,gl=new Ut,Qh=new Ut;class Vi extends yn{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qd(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new ho(n,3,0,!1)),qs.setAttribute("uv",new ho(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new Ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Zs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Do(Po.set(-.5,-.5,0),Zs,o,Ks,i,r),Do(Dr.set(.5,-.5,0),Zs,o,Ks,i,r),Do(Lo.set(.5,.5,0),Zs,o,Ks,i,r),$h.set(0,0),gl.set(1,0),Qh.set(1,1);let a=t.ray.intersectTriangle(Po,Dr,Lo,!1,Pr);if(a===null&&(Do(Dr.set(-.5,.5,0),Zs,o,Ks,i,r),gl.set(0,1),a=t.ray.intersectTriangle(Po,Lo,Dr,!1,Pr),a===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Mi.getInterpolation(Pr,Po,Dr,Lo,$h,gl,Qh,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Do(s,t,e,n,i,r){Js.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Lr.x=r*Js.x-i*Js.y,Lr.y=i*Js.x+r*Js.y):Lr.copy(Js),s.copy(t),s.x+=Lr.x,s.y+=Lr.y,s.applyMatrix4(jd)}const es=new z,_l=new z,Io=new z,No=new z;class xr{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_l.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),No.copy(this.origin).sub(_l);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=No.dot(this.direction),l=-No.dot(Io),c=No.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_l).addScaledVector(Io,f),u}intersectSphere(t,e){if(t.radius<0)return null;es.subVectors(t.center,this.origin);const n=es.dot(this.direction),i=es.dot(es)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,w=Math.abs(l),I=Math.abs(c),P=Math.abs(h);let v,b,F,U,W,rt,Q,N,it,at,q,H;if(w>=I&&w>=P?(F=l,rt=d,it=p,H=g,l>=0?(v=c,b=h,U=f,W=u,Q=x,N=m,at=y,q=E):(v=h,b=c,U=u,W=f,Q=m,N=x,at=E,q=y)):I>=P?(F=c,rt=f,it=x,H=y,c>=0?(v=h,b=l,U=u,W=d,Q=m,N=p,at=E,q=g):(v=l,b=h,U=d,W=u,Q=p,N=m,at=g,q=E)):(F=h,rt=u,it=m,H=E,h>=0?(v=l,b=c,U=d,W=f,Q=p,N=x,at=g,q=y):(v=c,b=l,U=f,W=d,Q=x,N=p,at=y,q=g)),F===0)return null;const nt=v/F,ht=b/F,bt=1/F,Zt=U-nt*rt,he=W-ht*rt,ft=Q-nt*it,Kt=N-ht*it,re=at-nt*H,pe=q-ht*H,Jt=re*Kt-pe*ft,de=Zt*pe-he*re,We=ft*he-Kt*Zt;if(i){if(Jt<0||de<0||We<0)return null}else if((Jt<0||de<0||We<0)&&(Jt>0||de>0||We>0))return null;const fe=Jt+de+We;if(fe===0)return null;const Me=bt*(Jt*rt+de*it+We*H);return(fe>0?Me<0:Me>0)?null:this.at(Me/fe,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jh=new Be,As=new xr,Uo=new qi,tu=new z,Oo=new z,Fo=new z,Bo=new z,xl=new z,ko=new z,eu=new z,zo=new z;class Ve extends yn{constructor(t=new gn,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(xl.fromBufferAttribute(d,t),o?ko.addScaledVector(xl,h):ko.addScaledVector(xl.sub(e),h))}e.add(ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(Uo.containsPoint(As.origin)===!1&&(As.intersectSphere(Uo,tu)===null||As.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(jh.copy(r).invert(),As.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=y,I=E;w<I;w+=3){const P=a.getX(w),v=a.getX(w+1),b=a.getX(w+2);i=Go(this,g,t,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const y=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);i=Go(this,o,t,n,c,h,d,y,E,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=y,I=E;w<I;w+=3){const P=w,v=w+1,b=w+2;i=Go(this,g,t,n,c,h,d,P,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const y=m,E=m+1,w=m+2;i=Go(this,o,t,n,c,h,d,y,E,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function y0(s,t,e,n,i,r,o,a){let l;if(t.side===Qn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ss,a),l===null)return null;zo.copy(a),zo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:s}}function Go(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Oo),s.getVertexPosition(l,Fo),s.getVertexPosition(c,Bo);const h=y0(s,t,e,n,Oo,Fo,Bo,eu);if(h){const d=new z;Mi.getBarycoord(eu,Oo,Fo,Bo,d),i&&(h.uv=Mi.getInterpolatedAttribute(i,a,l,c,d,new Ut)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,d,new Ut)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Mi.getNormal(Oo,Fo,Bo,f.normal),h.face=f,h.barycoord=d}return h}const Ir=new _n,nu=new _n,iu=new _n,S0=new _n,su=new Be,Ho=new z,vl=new qi,ru=new Be,Ml=new xr;class b0 extends Ve{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(i),t.ray.intersectsSphere(vl)!==!1&&(ru.copy(i).invert(),Ml.copy(t.ray).applyMatrix4(ru),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ml)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _n,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yp?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;nu.fromBufferAttribute(i.attributes.skinIndex,t),iu.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Ir.copy(e),e.set(0,0,0,0)):(Ir.set(e.x,e.y,e.z,1),e.set(0,0,0)),Ir.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=iu.getComponent(r);if(o!==0){const a=nu.getComponent(r);su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(S0.copy(Ir).applyMatrix4(su),o)}}return e.isVector4&&(e.w=Ir.w),e.applyMatrix4(this.bindMatrixInverse)}}class tf extends yn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ka extends kn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Un,h=Un,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=new Be,w0=new Be;class oh{constructor(t=[],e=[]){this.uuid=Di(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Be;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:w0;ou.multiplyMatrices(a,e[r]),ou.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new oh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ka(e,t,t,Ci,yi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new tf),this.bones.push(o),this.boneInverses.push(new Be().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ta extends Vn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $s=new Be,au=new Be,Vo=[],lu=new Yi,T0=new Be,Nr=new Ve,Ur=new qi;class uo extends Ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,T0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),lu.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(lu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Ur.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$s),au.multiplyMatrices(n,$s),Nr.matrixWorld=au,Nr.raycast(t,Vo);for(let o=0,a=Vo.length;o<a;o++){const l=Vo[o];l.instanceId=r,l.object=this,e.push(l)}Vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ka(new Float32Array(i*this.count),i,this.count,Fa,yi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rs=new qi,E0=new Ut(.5,.5),Wo=new z;class fo{constructor(t=new ss,e=new ss,n=new ss,i=new ss,r=new ss,o=new ss){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],E=r[13],w=r[14],I=r[15];if(i[0].setComponents(c-o,u-h,g-p,I-y).normalize(),i[1].setComponents(c+o,u+h,g+p,I+y).normalize(),i[2].setComponents(c+a,u+d,g+x,I+E).normalize(),i[3].setComponents(c-a,u-d,g-x,I-E).normalize(),n)i[4].setComponents(l,f,m,w).normalize(),i[5].setComponents(c-l,u-f,g-m,I-w).normalize();else if(i[4].setComponents(c-l,u-f,g-m,I-w).normalize(),e===Pi)i[5].setComponents(c+l,u+f,g+m,I+w).normalize();else if(e===lo)i[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const e=E0.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wo.x=i.normal.x>0?t.max.x:t.min.x,Wo.y=i.normal.y>0?t.max.y:t.min.y,Wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const cu=new Be;class ah{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new fo),n[i].setFromProjectionMatrix(cu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new fo),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new ah().copy(this)}}class ef extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ea=new z,Aa=new z,hu=new Be,Or=new xr,Xo=new qi,yl=new z,uu=new z;class lh extends yn{constructor(t=new gn,e=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ea.fromBufferAttribute(e,i-1),Aa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ea.distanceTo(Aa);t.setAttribute("lineDistance",new Fe(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;hu.copy(i).invert(),Or.copy(t.ray).applyMatrix4(hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=h.getX(x),y=h.getX(x+1),E=Yo(this,t,Or,l,g,y,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(u),g=Yo(this,t,Or,l,x,m,p-1);g&&e.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=Yo(this,t,Or,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=Yo(this,t,Or,l,p-1,u,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ea.fromBufferAttribute(a,i),Aa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ea,Aa,yl,uu)>n)return;yl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yl);if(!(c<t.near||c>t.far))return{distance:c,point:uu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const du=new z,fu=new z;class A0 extends lh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)du.fromBufferAttribute(e,i),fu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+du.distanceTo(fu);t.setAttribute("lineDistance",new Fe(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R0 extends lh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class $r extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pu=new Be,bc=new xr,qo=new qi,Ko=new z;class Vr extends yn{constructor(t=new gn,e=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;pu.copy(i).invert(),bc.copy(t.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){const m=c.getX(p);Ko.fromBufferAttribute(d,m),mu(Ko,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)Ko.fromBufferAttribute(d,p),mu(Ko,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mu(s,t,e,n,i,r,o){const a=bc.distanceSqToPoint(s);if(a<e){const l=new z;bc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class nf extends kn{constructor(t=[],e=ur,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wc extends kn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Is extends kn{constructor(t,e,n=Li,i,r,o,a=Un,l=Un,c,h=bs,d=1){if(h!==bs&&h!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class sf extends Is{constructor(t,e=Li,n=ur,i,r,o=Un,a=Un,l,c=bs){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rf extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ct extends gn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function p(x,m,g,y,E,w,I,P,v,b,F){const U=w/v,W=I/b,rt=w/2,Q=I/2,N=P/2,it=v+1,at=b+1;let q=0,H=0;const nt=new z;for(let ht=0;ht<at;ht++){const bt=ht*W-Q;for(let Zt=0;Zt<it;Zt++){const he=Zt*U-rt;nt[x]=he*y,nt[m]=bt*E,nt[g]=N,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[g]=P>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Zt/v),d.push(1-ht/b),q+=1}}for(let ht=0;ht<b;ht++)for(let bt=0;bt<v;bt++){const Zt=f+bt+it*ht,he=f+bt+it*(ht+1),ft=f+(bt+1)+it*(ht+1),Kt=f+(bt+1)+it*ht;l.push(Zt,he,Kt),l.push(he,ft,Kt),H+=6}a.addGroup(u,H,F),u+=H,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ra extends gn{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=n*2+r,x=i+1,m=new z,g=new z;for(let y=0;y<=p;y++){let E=0,w=0,I=0,P=0;if(y<=n){const F=y/n,U=F*Math.PI/2;w=-h-t*Math.cos(U),I=t*Math.sin(U),P=-t*Math.cos(U),E=F*d}else if(y<=n+r){const F=(y-n)/r;w=-h+F*e,I=t,P=0,E=d+F*f}else{const F=(y-n-r)/n,U=F*Math.PI/2;w=h+t*Math.sin(U),I=t*Math.cos(U),P=t*Math.sin(U),E=d+f+F*d}const v=Math.max(0,Math.min(1,E/u));let b=0;y===0?b=.5/i:y===p&&(b=-.5/i);for(let F=0;F<=i;F++){const U=F/i,W=U*Math.PI*2,rt=Math.sin(W),Q=Math.cos(W);g.x=-I*Q,g.y=w,g.z=I*rt,a.push(g.x,g.y,g.z),m.set(-I*Q,P,I*rt),m.normalize(),l.push(m.x,m.y,m.z),c.push(U+b,v)}if(y>0){const F=(y-1)*x;for(let U=0;U<i;U++){const W=F+U,rt=F+U+1,Q=y*x+U,N=y*x+U+1;o.push(W,rt,Q),o.push(rt,N,Q)}}}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ai extends gn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new z,h=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class se extends gn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(u,2));function y(){const w=new z,I=new z;let P=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const F=[],U=b/r,W=U*(e-t)+t;for(let rt=0;rt<=i;rt++){const Q=rt/i,N=Q*l+a,it=Math.sin(N),at=Math.cos(N);I.x=W*it,I.y=-U*n+m,I.z=W*at,d.push(I.x,I.y,I.z),w.set(it,v,at).normalize(),f.push(w.x,w.y,w.z),u.push(Q,1-U),F.push(p++)}x.push(F)}for(let b=0;b<i;b++)for(let F=0;F<r;F++){const U=x[F][b],W=x[F+1][b],rt=x[F+1][b+1],Q=x[F][b+1];(t>0||F!==0)&&(h.push(U,W,Q),P+=3),(e>0||F!==r-1)&&(h.push(W,rt,Q),P+=3)}c.addGroup(g,P,0),g+=P}function E(w){const I=p,P=new Ut,v=new z;let b=0;const F=w===!0?t:e,U=w===!0?1:-1;for(let rt=1;rt<=i;rt++)d.push(0,m*U,0),f.push(0,U,0),u.push(.5,.5),p++;const W=p;for(let rt=0;rt<=i;rt++){const N=rt/i*l+a,it=Math.cos(N),at=Math.sin(N);v.x=F*at,v.y=m*U,v.z=F*it,d.push(v.x,v.y,v.z),f.push(0,U,0),P.x=it*.5+.5,P.y=at*.5*U+.5,u.push(P.x,P.y),p++}for(let rt=0;rt<i;rt++){const Q=I+rt,N=W+rt;w===!0?h.push(N,N+1,Q):h.push(N+1,N,Q),b+=3}c.addGroup(g,b,w===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends se{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class za extends gn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Fe(r,3)),this.setAttribute("normal",new Fe(r.slice(),3)),this.setAttribute("uv",new Fe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const E=new z,w=new z,I=new z;for(let P=0;P<e.length;P+=3)u(e[P+0],E),u(e[P+1],w),u(e[P+2],I),l(E,w,I,y)}function l(y,E,w,I){const P=I+1,v=[];for(let b=0;b<=P;b++){v[b]=[];const F=y.clone().lerp(w,b/P),U=E.clone().lerp(w,b/P),W=P-b;for(let rt=0;rt<=W;rt++)rt===0&&b===P?v[b][rt]=F:v[b][rt]=F.clone().lerp(U,rt/W)}for(let b=0;b<P;b++)for(let F=0;F<2*(P-b)-1;F++){const U=Math.floor(F/2);F%2===0?(f(v[b][U+1]),f(v[b+1][U]),f(v[b][U])):(f(v[b][U+1]),f(v[b+1][U+1]),f(v[b+1][U]))}}function c(y){const E=new z;for(let w=0;w<r.length;w+=3)E.x=r[w+0],E.y=r[w+1],E.z=r[w+2],E.normalize().multiplyScalar(y),r[w+0]=E.x,r[w+1]=E.y,r[w+2]=E.z}function h(){const y=new z;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const w=m(y)/2/Math.PI+.5,I=g(y)/Math.PI+.5;o.push(w,1-I)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){const E=o[y+0],w=o[y+2],I=o[y+4],P=Math.max(E,w,I),v=Math.min(E,w,I);P>.9&&v<.1&&(E<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,E){const w=y*3;E.x=t[w+0],E.y=t[w+1],E.z=t[w+2]}function p(){const y=new z,E=new z,w=new z,I=new z,P=new Ut,v=new Ut,b=new Ut;for(let F=0,U=0;F<r.length;F+=9,U+=6){y.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),w.set(r[F+6],r[F+7],r[F+8]),P.set(o[U+0],o[U+1]),v.set(o[U+2],o[U+3]),b.set(o[U+4],o[U+5]),I.copy(y).add(E).add(w).divideScalar(3);const W=m(I);x(P,U+0,y,W),x(v,U+2,E,W),x(b,U+4,w,W)}}function x(y,E,w,I){I<0&&y.x===1&&(o[E]=y.x-1),w.x===0&&w.z===0&&(o[E]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.vertices,t.indices,t.radius,t.detail)}}class Gi extends za{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gi(t.radius,t.detail)}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Ut:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new z,i=[],r=[],o=[],a=new z,l=new Be;for(let u=0;u<=t;u++){const p=u/t;i[u]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(je(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(je(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class ch extends Ki{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ut){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class C0 extends ch{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const gu=new z,_u=new z,Sl=new hh,bl=new hh,wl=new hh;class P0 extends Ki{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(_u.subVectors(i[0],i[1]).add(i[0]),c=_u);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(gu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gu),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Sl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),bl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),wl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),bl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),wl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Sl.calc(l),bl.calc(l),wl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xu(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function L0(s,t){const e=1-s;return e*e*t}function D0(s,t){return 2*(1-s)*s*t}function I0(s,t){return s*s*t}function Qr(s,t,e,n){return L0(s,t)+D0(s,e)+I0(s,n)}function N0(s,t){const e=1-s;return e*e*e*t}function U0(s,t){const e=1-s;return 3*e*e*s*t}function O0(s,t){return 3*(1-s)*s*s*t}function F0(s,t){return s*s*s*t}function jr(s,t,e,n,i){return N0(s,t)+U0(s,e)+O0(s,n)+F0(s,i)}class of extends Ki{constructor(t=new Ut,e=new Ut,n=new Ut,i=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ut){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,r.x,o.x,a.x),jr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class B0 extends Ki{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,r.x,o.x,a.x),jr(t,i.y,r.y,o.y,a.y),jr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class af extends Ki{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class k0 extends Ki{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends Ki{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Qr(t,i.x,r.x,o.x),Qr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z0 extends Ki{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Qr(t,i.x,r.x,o.x),Qr(t,i.y,r.y,o.y),Qr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cf extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(xu(a,l.x,c.x,h.x,d.x),xu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ut().fromArray(i))}return this}}var Tc=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:P0,CubicBezierCurve:of,CubicBezierCurve3:B0,EllipseCurve:ch,LineCurve:af,LineCurve3:k0,QuadraticBezierCurve:lf,QuadraticBezierCurve3:z0,SplineCurve:cf});class G0 extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Tc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class vu extends G0{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new af(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new lf(this.currentPoint.clone(),new Ut(t,e),new Ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new of(this.currentPoint.clone(),new Ut(t,e),new Ut(n,i),new Ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new ch(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class po extends vu{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new vu().fromJSON(i))}return this}}function H0(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=hf(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=q0(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){const u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return mo(r,o,e,a,l,c,0),o}function hf(s,t,e,n,i){let r;if(i===sm(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mu(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mu(o/n|0,s[o],s[o+1],r);return r&&pr(r,r.next)&&(_o(r),r=r.next),r}function Ns(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||wn(e.prev,e,e.next)===0)){if(_o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Q0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?W0(s,n,i,r):V0(s)){t.push(l.i,s.i,c.i),_o(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=X0(Ns(s),t),mo(s,t,e,n,i,r,2)):o===2&&Y0(s,t,e,n,i,r):mo(Ns(s),t,e,n,i,r,1);break}}}function V0(s){const t=s.prev,e=s,n=s.next;if(wn(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Wr(i,a,r,l,o,c,p.x,p.y)&&wn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function W0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(wn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=Ec(u,p,t,e,n),y=Ec(x,m,t,e,n);let E=s.prevZ,w=s.nextZ;for(;E&&E.z>=g&&w&&w.z<=y;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Wr(a,h,l,d,c,f,E.x,E.y)&&wn(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Wr(a,h,l,d,c,f,w.x,w.y)&&wn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=g;){if(E.x>=u&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Wr(a,h,l,d,c,f,E.x,E.y)&&wn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=y;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Wr(a,h,l,d,c,f,w.x,w.y)&&wn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function X0(s,t){let e=s;do{const n=e.prev,i=e.next.next;!pr(n,i)&&df(n,e,e.next,i)&&go(n,i)&&go(i,n)&&(t.push(n.i,e.i,i.i),_o(e),_o(e.next),e=s=i),e=e.next}while(e!==s);return Ns(e)}function Y0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&em(o,a)){let l=ff(o,a);o=Ns(o,o.next),l=Ns(l,l.next),mo(o,t,e,n,i,r,0),mo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function q0(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=hf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(tm(c))}i.sort(K0);for(let r=0;r<i.length;r++)e=Z0(i[r],e);return e}function K0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Z0(s,t){const e=J0(s,t);if(!e)return t;const n=ff(e,s);return Ns(n,n.next),Ns(e,e.next)}function J0(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(pr(s,e))return e;do{if(pr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&uf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);go(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&$0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function $0(s,t){return wn(s.prev,s,t.prev)<0&&wn(t.next,s,s.next)<0}function Q0(s,t,e,n){let i=s;do i.z===0&&(i.z=Ec(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,j0(i)}function j0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Ec(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function tm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function uf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Wr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&uf(s,t,e,n,i,r,o,a)}function em(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!nm(s,t)&&(go(s,t)&&go(t,s)&&im(s,t)&&(wn(s.prev,s,t.prev)||wn(s,t.prev,t))||pr(s,t)&&wn(s.prev,s,s.next)>0&&wn(t.prev,t,t.next)>0)}function wn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pr(s,t){return s.x===t.x&&s.y===t.y}function df(s,t,e,n){const i=Jo(wn(s,t,e)),r=Jo(wn(s,t,n)),o=Jo(wn(e,n,s)),a=Jo(wn(e,n,t));return!!(i!==r&&o!==a||i===0&&Zo(s,e,t)||r===0&&Zo(s,n,t)||o===0&&Zo(e,s,n)||a===0&&Zo(e,t,n))}function Zo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jo(s){return s>0?1:s<0?-1:0}function nm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&df(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function go(s,t){return wn(s.prev,s,s.next)<0?wn(s,t,s.next)>=0&&wn(s,s.prev,t)>=0:wn(s,t,s.prev)<0||wn(s,s.next,t)<0}function im(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ff(s,t){const e=Ac(s.i,s.x,s.y),n=Ac(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(s,t,e,n){const i=Ac(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _o(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ac(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class rm{static triangulate(t,e,n=2){return H0(t,e,n)}}class os{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];yu(t),Su(n,t);let o=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Su(n,e[l]);const a=rm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Su(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ca extends gn{constructor(t=new po([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Fe(i,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:om;let E,w=!1,I,P,v,b;if(g){E=g.getSpacedPoints(h),w=!0,f=!1;const At=g.isCatmullRomCurve3?g.closed:!1;I=g.computeFrenetFrames(h,At),P=new z,v=new z,b=new z}f||(m=0,u=0,p=0,x=0);const F=a.extractPoints(c);let U=F.shape;const W=F.holes;if(!os.isClockWise(U)){U=U.reverse();for(let At=0,qt=W.length;At<qt;At++){const ne=W[At];os.isClockWise(ne)&&(W[At]=ne.reverse())}}function Q(At){const ne=10000000000000001e-36;let oe=At[0];for(let Ot=1;Ot<=At.length;Ot++){const Pe=Ot%At.length,$t=At[Pe],Ft=$t.x-oe.x,Lt=$t.y-oe.y,Gt=Ft*Ft+Lt*Lt,D=Math.max(Math.abs($t.x),Math.abs($t.y),Math.abs(oe.x),Math.abs(oe.y)),jt=ne*D*D;if(Gt<=jt){At.splice(Pe,1),Ot--;continue}oe=$t}}Q(U),W.forEach(Q);const N=W.length,it=U;for(let At=0;At<N;At++){const qt=W[At];U=U.concat(qt)}function at(At,qt,ne){return qt||He("ExtrudeGeometry: vec does not exist"),At.clone().addScaledVector(qt,ne)}const q=U.length;function H(At,qt,ne){let oe,Ot,Pe;const $t=At.x-qt.x,Ft=At.y-qt.y,Lt=ne.x-At.x,Gt=ne.y-At.y,D=$t*$t+Ft*Ft,jt=$t*Gt-Ft*Lt;if(Math.abs(jt)>Number.EPSILON){const te=Math.sqrt(D),Wt=Math.sqrt(Lt*Lt+Gt*Gt),Rt=qt.x-Ft/te,ee=qt.y+$t/te,xt=ne.x-Gt/Wt,ct=ne.y+Lt/Wt,C=((xt-Rt)*Gt-(ct-ee)*Lt)/($t*Gt-Ft*Lt);oe=Rt+$t*C-At.x,Ot=ee+Ft*C-At.y;const S=oe*oe+Ot*Ot;if(S<=2)return new Ut(oe,Ot);Pe=Math.sqrt(S/2)}else{let te=!1;$t>Number.EPSILON?Lt>Number.EPSILON&&(te=!0):$t<-Number.EPSILON?Lt<-Number.EPSILON&&(te=!0):Math.sign(Ft)===Math.sign(Gt)&&(te=!0),te?(oe=-Ft,Ot=$t,Pe=Math.sqrt(D)):(oe=$t,Ot=Ft,Pe=Math.sqrt(D/2))}return new Ut(oe/Pe,Ot/Pe)}const nt=[];for(let At=0,qt=it.length,ne=qt-1,oe=At+1;At<qt;At++,ne++,oe++)ne===qt&&(ne=0),oe===qt&&(oe=0),nt[At]=H(it[At],it[ne],it[oe]);const ht=[];let bt,Zt=nt.concat();for(let At=0,qt=N;At<qt;At++){const ne=W[At];bt=[];for(let oe=0,Ot=ne.length,Pe=Ot-1,$t=oe+1;oe<Ot;oe++,Pe++,$t++)Pe===Ot&&(Pe=0),$t===Ot&&($t=0),bt[oe]=H(ne[oe],ne[Pe],ne[$t]);ht.push(bt),Zt=Zt.concat(bt)}let he;if(m===0)he=os.triangulateShape(it,W);else{const At=[],qt=[];for(let ne=0;ne<m;ne++){const oe=ne/m,Ot=u*Math.cos(oe*Math.PI/2),Pe=p*Math.sin(oe*Math.PI/2)+x;for(let $t=0,Ft=it.length;$t<Ft;$t++){const Lt=at(it[$t],nt[$t],Pe);de(Lt.x,Lt.y,-Ot),oe===0&&At.push(Lt)}for(let $t=0,Ft=N;$t<Ft;$t++){const Lt=W[$t];bt=ht[$t];const Gt=[];for(let D=0,jt=Lt.length;D<jt;D++){const te=at(Lt[D],bt[D],Pe);de(te.x,te.y,-Ot),oe===0&&Gt.push(te)}oe===0&&qt.push(Gt)}}he=os.triangulateShape(At,qt)}const ft=he.length,Kt=p+x;for(let At=0;At<q;At++){const qt=f?at(U[At],Zt[At],Kt):U[At];w?(v.copy(I.normals[0]).multiplyScalar(qt.x),P.copy(I.binormals[0]).multiplyScalar(qt.y),b.copy(E[0]).add(v).add(P),de(b.x,b.y,b.z)):de(qt.x,qt.y,0)}for(let At=1;At<=h;At++)for(let qt=0;qt<q;qt++){const ne=f?at(U[qt],Zt[qt],Kt):U[qt];w?(v.copy(I.normals[At]).multiplyScalar(ne.x),P.copy(I.binormals[At]).multiplyScalar(ne.y),b.copy(E[At]).add(v).add(P),de(b.x,b.y,b.z)):de(ne.x,ne.y,d/h*At)}for(let At=m-1;At>=0;At--){const qt=At/m,ne=u*Math.cos(qt*Math.PI/2),oe=p*Math.sin(qt*Math.PI/2)+x;for(let Ot=0,Pe=it.length;Ot<Pe;Ot++){const $t=at(it[Ot],nt[Ot],oe);de($t.x,$t.y,d+ne)}for(let Ot=0,Pe=W.length;Ot<Pe;Ot++){const $t=W[Ot];bt=ht[Ot];for(let Ft=0,Lt=$t.length;Ft<Lt;Ft++){const Gt=at($t[Ft],bt[Ft],oe);w?de(Gt.x,Gt.y+E[h-1].y,E[h-1].x+ne):de(Gt.x,Gt.y,d+ne)}}}re(),pe();function re(){const At=i.length/3;if(f){let qt=0,ne=q*qt;for(let oe=0;oe<ft;oe++){const Ot=he[oe];We(Ot[2]+ne,Ot[1]+ne,Ot[0]+ne)}qt=h+m*2,ne=q*qt;for(let oe=0;oe<ft;oe++){const Ot=he[oe];We(Ot[0]+ne,Ot[1]+ne,Ot[2]+ne)}}else{for(let qt=0;qt<ft;qt++){const ne=he[qt];We(ne[2],ne[1],ne[0])}for(let qt=0;qt<ft;qt++){const ne=he[qt];We(ne[0]+q*h,ne[1]+q*h,ne[2]+q*h)}}n.addGroup(At,i.length/3-At,0)}function pe(){const At=i.length/3;let qt=0;Jt(it,qt),qt+=it.length;for(let ne=0,oe=W.length;ne<oe;ne++){const Ot=W[ne];Jt(Ot,qt),qt+=Ot.length}n.addGroup(At,i.length/3-At,1)}function Jt(At,qt){let ne=At.length;for(;--ne>=0;){const oe=ne;let Ot=ne-1;Ot<0&&(Ot=At.length-1);for(let Pe=0,$t=h+m*2;Pe<$t;Pe++){const Ft=q*Pe,Lt=q*(Pe+1),Gt=qt+oe+Ft,D=qt+Ot+Ft,jt=qt+Ot+Lt,te=qt+oe+Lt;fe(Gt,D,jt,te)}}}function de(At,qt,ne){l.push(At),l.push(qt),l.push(ne)}function We(At,qt,ne){Me(At),Me(qt),Me(ne);const oe=i.length/3,Ot=y.generateTopUV(n,i,oe-3,oe-2,oe-1);we(Ot[0]),we(Ot[1]),we(Ot[2])}function fe(At,qt,ne,oe){Me(At),Me(qt),Me(oe),Me(qt),Me(ne),Me(oe);const Ot=i.length/3,Pe=y.generateSideWallUV(n,i,Ot-6,Ot-3,Ot-2,Ot-1);we(Pe[0]),we(Pe[1]),we(Pe[3]),we(Pe[1]),we(Pe[2]),we(Pe[3])}function Me(At){i.push(l[At*3+0]),i.push(l[At*3+1]),i.push(l[At*3+2])}function we(At){r.push(At.x),r.push(At.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return am(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Tc[i.type]().fromJSON(i)),new Ca(n,t.options)}}const om={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Ut(r,o),new Ut(a,l),new Ut(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ut(o,1-l),new Ut(c,1-d),new Ut(f,1-p),new Ut(x,1-g)]:[new Ut(a,1-l),new Ut(h,1-d),new Ut(u,1-p),new Ut(m,1-g)]}};function am(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class uh extends gn{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=je(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new z,f=new Ut,u=new z,p=new z,x=new z;let m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let y=0;y<=e;y++){const E=n+y*h*i,w=Math.sin(E),I=Math.cos(E);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*w,d.y=t[P].y,d.z=t[P].x*I,o.push(d.x,d.y,d.z),f.x=y/e,f.y=P/(t.length-1),a.push(f.x,f.y);const v=l[3*P+0]*w,b=l[3*P+1],F=l[3*P+0]*I;c.push(v,b,F)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){const w=E+y*t.length,I=w,P=w+t.length,v=w+t.length+1,b=w+1;r.push(I,P,b),r.push(v,b,P)}this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("uv",new Fe(a,2)),this.setAttribute("normal",new Fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.points,t.segments,t.phiStart,t.phiLength)}}class dh extends za{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dh(t.radius,t.detail)}}class ln extends gn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const y=g*f-o;for(let E=0;E<c;E++){const w=E*d-r;p.push(w,-y,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const E=y+c*g,w=y+c*(g+1),I=y+1+c*(g+1),P=y+1+c*g;u.push(E,w,P),u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class fh extends gn{constructor(t=new po([new Ut(0,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(i,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(o,2));function c(h){const d=i.length/3,f=h.extractPoints(e);let u=f.shape;const p=f.holes;os.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];os.isClockWise(y)===!0&&(p[m]=y.reverse())}const x=os.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){const y=u[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){const y=x[m],E=y[0]+d,w=y[1]+d,I=y[2]+d;n.push(E,w,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new fh(n,t.curveSegments)}}function lm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class an extends gn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new z,f=new z,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const y=[],E=g/n,w=o+E*a,I=t*Math.cos(w),P=Math.sqrt(t*t-I*I);let v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const F=b/e,U=i+F*r;d.x=-P*Math.cos(U),d.y=I,d.z=P*Math.sin(U),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(F+v,1-E),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const E=h[g][y+1],w=h[g][y],I=h[g+1][y],P=h[g+1][y+1];(g!==0||o>0)&&u.push(E,w,P),(g!==n-1||l<Math.PI)&&u.push(w,I,P)}this.setIndex(u),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cn extends gn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new z,u=new z,p=new z;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const y=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,y=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,w=(i+1)*x+m;l.push(g,y,w),l.push(y,E,w)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function mr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(bu(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(bu(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ii(s){const t={};for(let e=0;e<s.length;e++){const n=mr(s[e]);for(const i in n)t[i]=n[i]}return t}function bu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function cm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rn.workingColorSpace}const xo={clone:mr,merge:ii};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _n().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class mf extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gr extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ii extends gr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class da extends pi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class dm extends pi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class fm extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pm extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function vs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Xr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function mm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function wu(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function gm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class vr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class _m extends vr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case rr:r=t,a=2*e-n;break;case ya:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rr:o=t,l=2*n-e;break;case ya:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,E=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+y*o[c+I]+E*o[l+I]+w*o[d+I];return r}}class gf extends vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class xm extends vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class vm extends vr{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}const f=a*2,u=t-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=u*f+p*2,y=d[g],E=d[g+1],w=t*f+p*2,I=h[w],P=h[w+1],v=ym(n,e,y,I,i);r[p]=_f(v,x,E,P,m)}return r}}function _f(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Mm(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function ym(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=_f(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Mm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Ni{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Xr(t.settings)&&(n.settings={inTangents:vs(t.settings.inTangents,Array),outTangents:vs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _m(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new vm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break;case Uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Xr(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Xr(this.settings)&&(Eu(this.settings.inTangents,t),Eu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){He("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Op(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ja,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[f+p]||x!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Xr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Tu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Eu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=oo;class Mr extends Ni{constructor(t,e,n){super(t,e,n)}}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=ro;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class xf extends Ni{constructor(t,e,n,i){super(t,e,n,i)}}xf.prototype.ValueTypeName="color";class vo extends Ni{constructor(t,e,n,i){super(t,e,n,i)}}vo.prototype.ValueTypeName="number";class Sm extends vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Mo extends Ni{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Sm(this.times,this.values,this.getValueSize(),t)}}Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends Ni{constructor(t,e,n){super(t,e,n)}}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=ro;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends Ni{constructor(t,e,n,i){super(t,e,n,i)}}Pa.prototype.ValueTypeName="vector";class Rc{constructor(t="",e=-1,n=[],i=jc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(wm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=mm(l);l=wu(l,1,h),c=wu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vo(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function bm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return Pa;case"color":return xf;case"quaternion":return Mo;case"bool":case"boolean":return Mr;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=bm(s.type);if(s.times===void 0){const n=[],i=[];gm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Xr(s.settings)&&(e.settings={inTangents:vs(s.settings.inTangents,Float32Array),outTangents:vs(s.settings.outTangents,Float32Array)}),e}const as={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Au(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Au(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Au(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class vf{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Tm=new vf;class Sr{constructor(t){this.manager=t!==void 0?t:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns={};class Em extends Error{constructor(t,e){super(t),this.response=e}}class Mf extends Sr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=as.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ns[t]!==void 0){ns[t].push({onLoad:e,onProgress:n,onError:i});return}ns[t]=[],ns[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ns[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let x=0;const m=new ReadableStream({start(g){y();function y(){d.read().then(({done:E,value:w})=>{if(E)g.close();else{x+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let P=0,v=h.length;P<v;P++){const b=h[P];b.onProgress&&b.onProgress(I)}g.enqueue(w),y()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Em(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{as.add(`file:${t}`,c);const h=ns[t];delete ns[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=ns[t];if(h===void 0)throw this.manager.itemError(t),c;delete ns[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qs=new WeakMap;class Am extends Sr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=as.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Qs.get(o);d===void 0&&(d=[],Qs.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=co("img");function l(){h(),e&&e(this);const d=Qs.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Qs.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),as.remove(`image:${t}`);const f=Qs.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Qs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),as.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Rm extends Sr{constructor(t){super(t)}load(t,e,n,i){const r=new kn,o=new Am(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ga extends yn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Cm extends Ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Tl=new Be,Ru=new z,Cu=new z;class ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===lo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $o=new z,Qo=new bn,Oi=new z;class yf extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($o,Qo,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Qo,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($o,Qo,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Qo,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new z,Pu=new Ut,Lu=new Ut;class li extends yf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Lu),e.subVectors(Lu,Pu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Pm extends ph{constructor(){super(new li(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=fr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Lm extends Ga{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Dm extends ph{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class ls extends Ga{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ha extends yf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Im extends ph{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Im}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class to{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const El=new WeakMap;class Nm extends Sr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=as.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{El.has(o)===!0?(i&&i(El.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return as.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),El.set(l,c),as.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});as.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const js=-90,tr=1;class Cc extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new li(js,tr,t,e);i.layers=this.layers,this.add(i);const r=new li(js,tr,t,e);r.layers=this.layers,this.add(r);const o=new li(js,tr,t,e);o.layers=this.layers,this.add(o);const a=new li(js,tr,t,e);a.layers=this.layers,this.add(a);const l=new li(js,tr,t,e);l.layers=this.layers,this.add(l);const c=new li(js,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Um extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Om{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Fm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Fm(){this._document.hidden===!1&&this.reset()}class Bm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){bn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;bn.multiplyQuaternionsFlat(t,o,t,e,t,n),bn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const mh="\\[\\]\\.:\\/",km=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",zm="[^"+mh.replace("\\.","")+"]",Gm=/((?:WC+[\/:])*)/.source.replace("WC",gh),Hm=/(WCOD+)?/.source.replace("WCOD",zm),Vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),Xm=new RegExp("^"+Gm+Hm+Vm+Wm+"$"),Ym=["material","materials","bones","map"];class qm{constructor(t,e,n){const i=n||mn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class mn{constructor(t,e,n){this.path=e,this.parsedPath=n||mn.parseTrackName(e),this.node=mn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new mn.Composite(t,e,n):new mn(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(km,"")}static parseTrackName(t){const e=Xm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=mn.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mn.Composite=qm;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Km{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:sr,endingEnd:sr};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=bp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tp:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case jc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===wp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Sp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=rr,i.endingEnd=rr):(t?i.endingStart=this.zeroSlopeAtStart?rr:sr:i.endingStart=ya,e?i.endingEnd=this.zeroSlopeAtEnd?rr:sr:i.endingEnd=ya)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const Zm=new Float32Array(1);class Jm extends ds{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new Bm(mn.create(n,u,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new gf(new Float32Array(2),new Float32Array(2),1,Zm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?Rc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=jc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Km(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Rc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Du=new Be;class bf{constructor(t,e,n=0,i=1/0){this.ray=new xr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):He("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,n=[]){return Pc(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Pc(t[i],this,n,e);return n.sort(Iu),n}}function Iu(s,t){return s.distance-t.distance}function Pc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Pc(r[o],t,e,!0)}}class Nu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $m extends ds{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Uu(s,t,e,n){const i=Qm(n);switch(e){case kd:return s*t;case Fa:return s*t/i.components*i.byteLength;case Jc:return s*t/i.components*i.byteLength;case Ds:return s*t*2/i.components*i.byteLength;case $c:return s*t*2/i.components*i.byteLength;case zd:return s*t*3/i.components*i.byteLength;case Ci:return s*t*4/i.components*i.byteLength;case Qc:return s*t*4/i.components*i.byteLength;case la:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ql:case Zl:return Math.max(s,16)*Math.max(t,8)/4;case Yl:case Kl:return Math.max(s,8)*Math.max(t,8)/2;case Jl:case $l:case jl:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ql:case va:case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case gc:case _c:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vc:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ma:case yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(s){switch(s){case fi:case Ud:return{byteLength:1,components:1};case so:case Od:case jn:return{byteLength:2,components:1};case Kc:case Zc:return{byteLength:2,components:4};case Li:case qc:case yi:return{byteLength:4,components:1};case Fd:case Bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);function wf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jm(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bg=`#define PI 3.141592653589793
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
} // validated`,wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
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
#endif`,$g=`uniform sampler2D dfgLUT;
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
}`,Qg=`
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,n_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c_=`#if defined( USE_POINTS_UV )
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
#endif`,h_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f_=`#if defined( USE_MORPHCOLORS )
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
#endif`,p_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`#ifdef USE_MORPHTARGETS
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
#endif`,g_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
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
#endif`,b_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B_=`float getShadowMask() {
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
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,G_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform float backgroundBlurriness;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
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
}`,_x=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Px=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,en={alphahash_fragment:tg,alphahash_pars_fragment:eg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:og,aomap_pars_fragment:ag,batching_pars_vertex:lg,batching_vertex:cg,begin_vertex:hg,beginnormal_vertex:ug,bsdfs:dg,iridescence_fragment:fg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:xg,color_fragment:vg,color_pars_fragment:Mg,color_pars_vertex:yg,color_vertex:Sg,common:bg,defaultnormal_vertex:wg,displacementmap_pars_vertex:Tg,displacementmap_vertex:Eg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Rg,colorspace_fragment:Cg,colorspace_pars_fragment:Pg,envmap_fragment:Lg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ig,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:Xg,envmap_vertex:Ug,fog_vertex:Og,fog_pars_vertex:Fg,fog_fragment:Bg,fog_pars_fragment:kg,gradientmap_pars_fragment:zg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Wg,lights_toon_fragment:Yg,lights_toon_pars_fragment:qg,lights_phong_fragment:Kg,lights_phong_pars_fragment:Zg,lights_physical_fragment:Jg,lights_physical_pars_fragment:$g,lights_fragment_begin:Qg,lights_fragment_maps:jg,lights_fragment_end:t_,lightprobes_pars_fragment:e_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:r_,map_fragment:o_,map_pars_fragment:a_,map_particle_fragment:l_,map_particle_pars_fragment:c_,metalnessmap_fragment:h_,metalnessmap_pars_fragment:u_,morphinstance_vertex:d_,morphcolor_vertex:f_,morphnormal_vertex:p_,morphtarget_pars_vertex:m_,morphtarget_vertex:g_,normal_fragment_begin:__,normal_fragment_maps:x_,normal_pars_fragment:v_,normal_pars_vertex:M_,normal_vertex:y_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:b_,clearcoat_normal_fragment_maps:w_,clearcoat_pars_fragment:T_,iridescence_pars_fragment:E_,opaque_fragment:A_,packing:R_,premultiplied_alpha_fragment:C_,project_vertex:P_,dithering_fragment:L_,dithering_pars_fragment:D_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:O_,shadowmap_vertex:F_,shadowmask_pars_fragment:B_,skinbase_vertex:k_,skinning_pars_vertex:z_,skinning_vertex:G_,skinnormal_vertex:H_,specularmap_fragment:V_,specularmap_pars_fragment:W_,tonemapping_fragment:X_,tonemapping_pars_fragment:Y_,transmission_fragment:q_,transmission_pars_fragment:K_,uv_pars_fragment:Z_,uv_pars_vertex:J_,uv_vertex:$_,worldpos_vertex:Q_,background_vert:j_,background_frag:tx,backgroundCube_vert:ex,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ox,distance_vert:ax,distance_frag:lx,equirect_vert:cx,equirect_frag:hx,linedashed_vert:ux,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:_x,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:Mx,meshphong_vert:yx,meshphong_frag:Sx,meshphysical_vert:bx,meshphysical_frag:wx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Lx,sprite_frag:Dx},ve={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ki={basic:{uniforms:ii([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:en.meshbasic_vert,fragmentShader:en.meshbasic_frag},lambert:{uniforms:ii([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:en.meshlambert_vert,fragmentShader:en.meshlambert_frag},phong:{uniforms:ii([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:en.meshphong_vert,fragmentShader:en.meshphong_frag},standard:{uniforms:ii([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag},toon:{uniforms:ii([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new be(0)}}]),vertexShader:en.meshtoon_vert,fragmentShader:en.meshtoon_frag},matcap:{uniforms:ii([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:en.meshmatcap_vert,fragmentShader:en.meshmatcap_frag},points:{uniforms:ii([ve.points,ve.fog]),vertexShader:en.points_vert,fragmentShader:en.points_frag},dashed:{uniforms:ii([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:en.linedashed_vert,fragmentShader:en.linedashed_frag},depth:{uniforms:ii([ve.common,ve.displacementmap]),vertexShader:en.depth_vert,fragmentShader:en.depth_frag},normal:{uniforms:ii([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:en.meshnormal_vert,fragmentShader:en.meshnormal_frag},sprite:{uniforms:ii([ve.sprite,ve.fog]),vertexShader:en.sprite_vert,fragmentShader:en.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:en.background_vert,fragmentShader:en.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:en.backgroundCube_vert,fragmentShader:en.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:en.cube_vert,fragmentShader:en.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:en.equirect_vert,fragmentShader:en.equirect_frag},distance:{uniforms:ii([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:en.distance_vert,fragmentShader:en.distance_frag},shadow:{uniforms:ii([ve.lights,ve.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:en.shadow_vert,fragmentShader:en.shadow_frag}};ki.physical={uniforms:ii([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag};const jo={r:0,b:0,g:0},Ix=new Be,Tf=new Ze;Tf.set(-1,0,0,0,1,0,0,0,1);function Nx(s,t,e,n,i,r){const o=new be(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const w=y.backgroundBlurriness>0;E=t.get(E,w)}return E}function p(y){let E=!1;const w=u(y);w===null?m(o,a):w&&w.isColor&&(m(w,1),E=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,E){const w=u(E);w&&w.isCubeTexture?(c===void 0&&(c=new Ve(new Ct(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:mr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tf),c.material.toneMapped=rn.getTransfer(w.colorSpace)!==pn,(h!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ve(new ln(2,2),new ri({name:"BackgroundMaterial",uniforms:mr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=rn.getTransfer(w.colorSpace)!==pn,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(jo,pf(s)),e.buffers.color.setClear(jo.r,jo.g,jo.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Ux(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(W,rt,Q,N,it){let at=!1;const q=d(W,N,Q,rt);r!==q&&(r=q,c(r.object)),at=u(W,N,Q,it),at&&p(W,N,Q,it),it!==null&&t.update(it,s.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,w(W,rt,Q,N),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return s.createVertexArray()}function c(W){return s.bindVertexArray(W)}function h(W){return s.deleteVertexArray(W)}function d(W,rt,Q,N){const it=N.wireframe===!0;let at=n[rt.id];at===void 0&&(at={},n[rt.id]=at);const q=W.isInstancedMesh===!0?W.id:0;let H=at[q];H===void 0&&(H={},at[q]=H);let nt=H[Q.id];nt===void 0&&(nt={},H[Q.id]=nt);let ht=nt[it];return ht===void 0&&(ht=f(l()),nt[it]=ht),ht}function f(W){const rt=[],Q=[],N=[];for(let it=0;it<e;it++)rt[it]=0,Q[it]=0,N[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:Q,attributeDivisors:N,object:W,attributes:{},index:null}}function u(W,rt,Q,N){const it=r.attributes,at=rt.attributes;let q=0;const H=Q.getAttributes();for(const nt in H)if(H[nt].location>=0){const bt=it[nt];let Zt=at[nt];if(Zt===void 0&&(nt==="instanceMatrix"&&W.instanceMatrix&&(Zt=W.instanceMatrix),nt==="instanceColor"&&W.instanceColor&&(Zt=W.instanceColor)),bt===void 0||bt.attribute!==Zt||Zt&&bt.data!==Zt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function p(W,rt,Q,N){const it={},at=rt.attributes;let q=0;const H=Q.getAttributes();for(const nt in H)if(H[nt].location>=0){let bt=at[nt];bt===void 0&&(nt==="instanceMatrix"&&W.instanceMatrix&&(bt=W.instanceMatrix),nt==="instanceColor"&&W.instanceColor&&(bt=W.instanceColor));const Zt={};Zt.attribute=bt,bt&&bt.data&&(Zt.data=bt.data),it[nt]=Zt,q++}r.attributes=it,r.attributesNum=q,r.index=N}function x(){const W=r.newAttributes;for(let rt=0,Q=W.length;rt<Q;rt++)W[rt]=0}function m(W){g(W,0)}function g(W,rt){const Q=r.newAttributes,N=r.enabledAttributes,it=r.attributeDivisors;Q[W]=1,N[W]===0&&(s.enableVertexAttribArray(W),N[W]=1),it[W]!==rt&&(s.vertexAttribDivisor(W,rt),it[W]=rt)}function y(){const W=r.newAttributes,rt=r.enabledAttributes;for(let Q=0,N=rt.length;Q<N;Q++)rt[Q]!==W[Q]&&(s.disableVertexAttribArray(Q),rt[Q]=0)}function E(W,rt,Q,N,it,at,q){q===!0?s.vertexAttribIPointer(W,rt,Q,it,at):s.vertexAttribPointer(W,rt,Q,N,it,at)}function w(W,rt,Q,N){x();const it=N.attributes,at=Q.getAttributes(),q=rt.defaultAttributeValues;for(const H in at){const nt=at[H];if(nt.location>=0){let ht=it[H];if(ht===void 0&&(H==="instanceMatrix"&&W.instanceMatrix&&(ht=W.instanceMatrix),H==="instanceColor"&&W.instanceColor&&(ht=W.instanceColor)),ht!==void 0){const bt=ht.normalized,Zt=ht.itemSize,he=t.get(ht);if(he===void 0)continue;const ft=he.buffer,Kt=he.type,re=he.bytesPerElement,pe=Kt===s.INT||Kt===s.UNSIGNED_INT||ht.gpuType===qc;if(ht.isInterleavedBufferAttribute){const Jt=ht.data,de=Jt.isInterleavedBuffer===!0?Jt.stride:Jt.itemSize,We=ht.offset;if(Jt.isInstancedInterleavedBuffer||Jt.isInstancedBufferAttribute){for(let fe=0;fe<nt.locationSize;fe++)g(nt.location+fe,Jt.meshPerAttribute);W.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Jt.meshPerAttribute*Jt.count)}else for(let fe=0;fe<nt.locationSize;fe++)m(nt.location+fe);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let fe=0;fe<nt.locationSize;fe++)E(nt.location+fe,Zt/nt.locationSize,Kt,bt,de*re,(We+Zt/nt.locationSize*fe)*re,pe)}else{if(ht.isInstancedBufferAttribute){for(let Jt=0;Jt<nt.locationSize;Jt++)g(nt.location+Jt,ht.meshPerAttribute);W.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Jt=0;Jt<nt.locationSize;Jt++)m(nt.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Jt=0;Jt<nt.locationSize;Jt++)E(nt.location+Jt,Zt/nt.locationSize,Kt,bt,Zt*re,Zt/nt.locationSize*Jt*re,pe)}}else if(q!==void 0){const bt=q[H];if(bt!==void 0)switch(bt.length){case 2:s.vertexAttrib2fv(nt.location,bt);break;case 3:s.vertexAttrib3fv(nt.location,bt);break;case 4:s.vertexAttrib4fv(nt.location,bt);break;default:s.vertexAttrib1fv(nt.location,bt)}}}}y()}function I(){F();for(const W in n){const rt=n[W];for(const Q in rt){const N=rt[Q];for(const it in N){const at=N[it];for(const q in at)h(at[q].object),delete at[q];delete N[it]}}delete n[W]}}function P(W){if(n[W.id]===void 0)return;const rt=n[W.id];for(const Q in rt){const N=rt[Q];for(const it in N){const at=N[it];for(const q in at)h(at[q].object),delete at[q];delete N[it]}}delete n[W.id]}function v(W){for(const rt in n){const Q=n[rt];for(const N in Q){const it=Q[N];if(it[W.id]===void 0)continue;const at=it[W.id];for(const q in at)h(at[q].object),delete at[q];delete it[W.id]}}}function b(W){for(const rt in n){const Q=n[rt],N=W.isInstancedMesh===!0?W.id:0,it=Q[N];if(it!==void 0){for(const at in it){const q=it[at];for(const H in q)h(q[H].object),delete q[H];delete it[at]}delete Q[N],Object.keys(Q).length===0&&delete n[rt]}}}function F(){U(),o=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ox(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==Ci&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const b=v===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==fi&&v!==yi&&!b&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:w,maxSamples:I,samples:P}}function Bx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ss,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,E=y*4;let w=g.clippingState||null;l.value=w,w=h(p,f,E,u);for(let I=0;I!==E;++I)w[I]=e[I];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,w=u;E!==x;++E,w+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class _h extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ct(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:Ls});r.uniforms.tEquirect.value=e;const o=new Ve(i,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Yn),new Cc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ou=256,kx=3,zx=20,Ef=256,Af=16,Gx=3,Hx=new z,Vx=new be;class La{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cc(1,10,null),this._boxMesh=new Ve(new Ct(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Hx}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Vx));const m=new Cc(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ou,qd(t))}_fromTexture(t,e){t.mapping===ur||t.mapping===io?this._setSize(t.image.length===0?Ou:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Fu(t,!1,!1),n=Math.log2(t)-kx;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ur||t.mapping===io?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Wx(),this._integrationMaterial=Xx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Af);for(let o=0;o<=n;o++){const a=La.lodToRoughness(o,n);if(o>n-Gx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Ef*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Yx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function Fu(s,t,e){return new _h(s,{minFilter:Hi,generateMipmaps:t,type:jn,colorSpace:mi,depthBuffer:e})}function yo(s,t,e){return new ri({name:s,uniforms:t,vertexShader:en.cube_vert,fragmentShader:e,side:Qn,blending:Ls,depthTest:!1,depthWrite:!1})}function Wx(){return yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ef}u

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
	`)}function Xx(){return yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Af}},`

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
	`)}function Yx(){return yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zx}
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
	`)}function Bu(){return yo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ku(){return yo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Ka||u===Za)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new _h(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Ka||u===Za,x=u===ur||u===io;if(p||x){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new La(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new La(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Ka?f.mapping=ur:u===Za&&(f.mapping=io),f}function l(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Kx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&lr("WebGLRenderer: "+n+" extension not supported."),i}}}function Zx(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const y=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?$d:Jd,w=new E(Math.ceil(y/3)*6,1),I=w.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,F=0;b<y;b+=3){const U=v[b+0],W=v[b+1],rt=v[b+2];I[F++]=U,I[F++]=W,I[F++]=W,I[F++]=rt,I[F++]=rt,I[F++]=U}}else{g=m.version;for(let v=0,b=0;v<y;v+=3){const F=v+0,U=v+1,W=v+2;I[b++]=F,I[b++]=U,I[b++]=U,I[b++]=W,I[b++]=W,I[b++]=F}}w.version=g;const P=r.get(p);P&&t.remove(P),r.set(p,w)}function f(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Jx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $x(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qx(s,t,e){const n=new WeakMap,i=new _n;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let F=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;u===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let w=a.attributes.position.count*E,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*I*4*d),v=new Kd(P,w,I,d);v.type=yi,v.needsUpdate=!0;const b=E*4;for(let U=0;U<d;U++){const W=m[U],rt=g[U],Q=y[U],N=w*I*4*U;for(let it=0;it<W.count;it++){const at=it*b;u===!0&&(i.fromBufferAttribute(W,it),P[N+at+0]=i.x,P[N+at+1]=i.y,P[N+at+2]=i.z,P[N+at+3]=0),p===!0&&(i.fromBufferAttribute(rt,it),P[N+at+4]=i.x,P[N+at+5]=i.y,P[N+at+6]=i.z,P[N+at+7]=0),x===!0&&(i.fromBufferAttribute(Q,it),P[N+at+8]=i.x,P[N+at+9]=i.y,P[N+at+10]=i.z,P[N+at+11]=Q.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new Ut(w,I)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function jx(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const tv={[Gc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Wc]:"CUSTOM_TONE_MAPPING"};function ev(s,t,e,n,i,r){const o=new ti(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new gn;h.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const d=new mf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ve(h,d),u=new Ha(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,y=null,E=[],w=!1;this.setSize=function(I,P){o.setSize(I,P),a!==null&&a.setSize(I,P),l!==null&&l.setSize(I,P);for(let v=0;v<E.length;v++){const b=E[v];b.setSize&&b.setSize(I,P)}},this.setEffects=function(I){E=I,w=E.length>0&&E[0].isRenderPass===!0;const P=o.width,v=o.height;E.length>0&&a===null&&(a=new ti(P,v,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new ti(P,v,{type:jn,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&E.some(F=>F.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Is(P,v),r===!0&&(c.format=ys,c.type=dr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let F=0;F<E.length;F++){const U=E[F];U.setSize&&U.setSize(P,v),b&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,P){if(m||I.toneMapping===cs&&E.length===0)return!1;if(y=P,P!==null){const v=P.width,b=P.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return w===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=cs,!0},this.hasRenderPass=function(){return w},this.end=function(I,P){I.toneMapping=g,m=!0;let v=o,b=a;for(let F=0;F<E.length;F++){const U=E[F];U.enabled!==!1&&(U.render(I,b,v,P),U.needsSwap!==!1&&(v=b,b=b===a?l:a))}if(p!==I.outputColorSpace||x!==I.toneMapping){p=I.outputColorSpace,x=I.toneMapping,d.defines={},rn.getTransfer(p)===pn&&(d.defines.SRGB_TRANSFER="");const F=tv[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,I.setRenderTarget(y),I.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Rf=new kn,Cf=new Is(1,1),Pf=new sf(1),Lf=new Kd,Df=new o0,If=new nf,zu=[],Gu=[],Hu=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function br(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=zu[i];if(r===void 0&&(r=new Float32Array(i),zu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function zn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Gn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Va(s,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function nv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;s.uniform2fv(this.addr,t),Gn(e,t)}}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(zn(e,t))return;s.uniform3fv(this.addr,t),Gn(e,t)}}function rv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;s.uniform4fv(this.addr,t),Gn(e,t)}}function ov(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Gn(e,t)}else{if(zn(e,n))return;Wu.set(n),s.uniformMatrix2fv(this.addr,!1,Wu),Gn(e,n)}}function av(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Gn(e,t)}else{if(zn(e,n))return;Vu.set(n),s.uniformMatrix3fv(this.addr,!1,Vu),Gn(e,n)}}function lv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Gn(e,t)}else{if(zn(e,n))return;Hu.set(n),s.uniformMatrix4fv(this.addr,!1,Hu),Gn(e,n)}}function cv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;s.uniform2iv(this.addr,t),Gn(e,t)}}function uv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;s.uniform3iv(this.addr,t),Gn(e,t)}}function dv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;s.uniform4iv(this.addr,t),Gn(e,t)}}function fv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;s.uniform2uiv(this.addr,t),Gn(e,t)}}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;s.uniform3uiv(this.addr,t),Gn(e,t)}}function gv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;s.uniform4uiv(this.addr,t),Gn(e,t)}}function Wa(s){return s.version===0&&(s.compareFunction=Wd,s.needsUpdate=!0),s}function _v(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Wa(Cf):r=Rf,e.setTexture2D(t||r,i)}function xv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Df,i)}function vv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Wa(Pf):r=If,e.setTextureCube(t||r,i)}function Mv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lf,i)}function yv(s){switch(s){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Sv(s,t){s.uniform1fv(this.addr,t)}function bv(s,t){const e=br(t,this.size,2);s.uniform2fv(this.addr,e)}function wv(s,t){const e=br(t,this.size,3);s.uniform3fv(this.addr,e)}function Tv(s,t){const e=br(t,this.size,4);s.uniform4fv(this.addr,e)}function Ev(s,t){const e=br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Av(s,t){const e=br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rv(s,t){const e=br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cv(s,t){s.uniform1iv(this.addr,t)}function Pv(s,t){s.uniform2iv(this.addr,t)}function Lv(s,t){s.uniform3iv(this.addr,t)}function Dv(s,t){s.uniform4iv(this.addr,t)}function Iv(s,t){s.uniform1uiv(this.addr,t)}function Nv(s,t){s.uniform2uiv(this.addr,t)}function Uv(s,t){s.uniform3uiv(this.addr,t)}function Ov(s,t){s.uniform4uiv(this.addr,t)}function Fv(s,t,e){const n=this.cache,i=t.length,r=Va(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Wa(Cf):o=Rf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Bv(s,t,e){const n=this.cache,i=t.length,r=Va(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Df,r[o])}function kv(s,t,e){const n=this.cache,i=t.length,r=Va(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Wa(Pf):o=If;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function zv(s,t,e){const n=this.cache,i=t.length,r=Va(e,i);zn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Lf,r[o])}function Gv(s){switch(s){case 5126:return Sv;case 35664:return bv;case 35665:return wv;case 35666:return Tv;case 35674:return Ev;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Iv;case 36294:return Nv;case 36295:return Uv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}class Hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yv(e.type)}}class Vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gv(e.type)}}class Wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function Xu(s,t){s.seq.push(t),s.map[t.id]=t}function Xv(s,t,e){const n=s.name,i=n.length;for(Al.lastIndex=0;;){const r=Al.exec(n),o=Al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xu(e,c===void 0?new Hv(a,s,t):new Vv(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Wv(a),Xu(e,d)),e=d}}}class fa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Xv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Yu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Yv=37297;let qv=0;function Kv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qu=new Ze;function Zv(s){rn._getMatrix(qu,rn.workingColorSpace,s);const t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(rn.getTransfer(s)){case Sa:return[t,"LinearTransferOETF"];case pn:return[t,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ku(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Kv(s.getShaderSource(t),a)}else return r}function Jv(s,t){const e=Zv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const $v={[Gc]:"Linear",[Hc]:"Reinhard",[Vc]:"Cineon",[Oa]:"ACESFilmic",[Xc]:"AgX",[Yc]:"Neutral",[Wc]:"Custom"};function Qv(s,t){const e=$v[t];return e===void 0?(De("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new z;function jv(){rn.getLuminanceCoefficients(ta);const s=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function eM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Yr(s){return s!==""}function Zu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ju(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(s){return s.replace(iM,sM)}function sM(s,t){const e=en[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Lc(e)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(s){return s.replace(rM,oM)}function oM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const aM={[Kr]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function lM(s){return aM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cM={[io]:"ENVMAP_MODE_REFRACTION"};function hM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uM={[Dd]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[Mp]:"ENVMAP_BLENDING_ADD"};function dM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uM[s.combine]||"ENVMAP_BLENDING_NONE"}function fM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hM(e),d=dM(e),f=tM(e),u=eM(r),p=i.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Yr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(x=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cs?"#define TONE_MAPPING":"",e.toneMapping!==cs?en.tonemapping_pars_fragment:"",e.toneMapping!==cs?Qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",en.colorspace_pars_fragment,Jv("linearToOutputTexel",e.outputColorSpace),jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Lc(o),o=Zu(o,e),o=Ju(o,e),a=Lc(a),a=Zu(a,e),a=Ju(a,e),o=$u(o),a=$u(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=g+x+o,E=g+m+a,w=Yu(i,i.VERTEX_SHADER,y),I=Yu(i,i.FRAGMENT_SHADER,E);i.attachShader(p,w),i.attachShader(p,I),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(U){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(p)||"",rt=i.getShaderInfoLog(w)||"",Q=i.getShaderInfoLog(I)||"",N=W.trim(),it=rt.trim(),at=Q.trim();let q=!0,H=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,I);else{const nt=Ku(i,w,"vertex"),ht=Ku(i,I,"fragment");He("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+nt+`
`+ht)}else N!==""?De("WebGLProgram: Program Info Log:",N):(it===""||at==="")&&(H=!1);H&&(U.diagnostics={runnable:q,programLog:N,vertexShader:{log:it,prefix:x},fragmentShader:{log:at,prefix:m}})}i.deleteShader(w),i.deleteShader(I),v=new fa(i,p),b=nM(i,p)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,Yv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=I,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gM(t),e.set(t,n)),n}}class gM{constructor(t){this.id=pM++,this.code=t,this.usedTimes=0}}function _M(s){return s===Ds||s===va||s===Ma}function xM(s,t,e,n,i,r){const o=new sh,a=new mM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,F,U,W,rt){const Q=U.fog,N=W.geometry,it=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,at=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=t.get(v.envMap||it,at),H=f[v.type];let nt=n.precision;v.precision!==null&&(nt=n.getMaxPrecision(v.precision),nt!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",nt,"instead."));const ht=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,bt=ht!==void 0?ht.length:0;let Zt=0;N.morphAttributes.position!==void 0&&(Zt=1),N.morphAttributes.normal!==void 0&&(Zt=2),N.morphAttributes.color!==void 0&&(Zt=3);let he,ft,Kt,re;if(H){const O=ki[H];he=O.vertexShader,ft=O.fragmentShader}else{he=v.vertexShader,ft=v.fragmentShader;const O=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,O,st),Kt=O.id,re=st.id}const pe=s.getRenderTarget(),Jt=s.state.buffers.depth.getReversed(),de=W.isInstancedMesh===!0,We=W.isBatchedMesh===!0,fe=!!v.map,Me=!!v.matcap,we=!!q,At=we&&q.isPMREMTexture===!0,qt=!!v.aoMap,ne=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,Ot=!!v.normalMap,Pe=!!v.displacementMap,$t=!!v.emissiveMap,Ft=!!v.metalnessMap,Lt=!!v.roughnessMap,Gt=v.anisotropy>0,D=v.clearcoat>0,jt=v.diffuseRoughness>0,te=v.dispersion>0,Wt=v.retroreflectivity>0,Rt=v.iridescence>0,ee=v.sheen>0,xt=v.transmission>0,ct=Gt&&!!v.anisotropyMap,C=D&&!!v.clearcoatMap,S=D&&!!v.clearcoatNormalMap,Z=D&&!!v.clearcoatRoughnessMap,Mt=jt&&!!v.diffuseRoughnessMap,pt=Rt&&!!v.iridescenceMap,Nt=Rt&&!!v.iridescenceThicknessMap,zt=ee&&!!v.sheenColorMap,vt=ee&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,Pt=!!v.specularColorMap,X=!!v.specularIntensityMap,_t=xt&&!!v.transmissionMap,gt=xt&&!!v.thicknessMap,Yt=!!v.gradientMap,et=!!v.alphaMap,K=v.alphaTest>0,dt=!!v.alphaHash,Dt=!!v.extensions;let _=cs;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_=s.toneMapping);const k=At?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Y={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:he,fragmentShader:ft,defines:v.defines,customVertexShaderID:Kt,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:nt,batching:We,batchingColor:We&&W._colorsTexture!==null,instancing:de,instancingColor:de&&W.instanceColor!==null,instancingMorph:de&&W.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:rn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:Me,envMap:we,envMapMode:we&&q.mapping,envMapPMREM:At,envMapMaxLod:At?k.length-1:null,envMapSize:At?k[0].width:null,aoMap:qt,lightMap:ne,bumpMap:oe,normalMap:Ot,displacementMap:Pe,emissiveMap:$t,normalMapObjectSpace:Ot&&v.normalMapType===Rp,normalMapTangentSpace:Ot&&v.normalMapType===ao,packedNormalMap:Ot&&v.normalMapType===ao&&_M(v.normalMap.format),metalnessMap:Ft,roughnessMap:Lt,anisotropy:Gt,anisotropyMap:ct,clearcoat:D,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:Z,diffuseRoughness:jt,diffuseRoughnessMap:Mt,dispersion:te,retroreflection:Wt,iridescence:Rt,iridescenceMap:pt,iridescenceThicknessMap:Nt,sheen:ee,sheenColorMap:zt,sheenRoughnessMap:vt,specularMap:Tt,specularColorMap:Pt,specularIntensityMap:X,transmission:xt,transmissionMap:_t,thicknessMap:gt,gradientMap:Yt,opaque:v.transparent===!1&&v.blending===ar&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:K,alphaHash:dt,combine:v.combine,mapUv:fe&&u(v.map.channel),aoMapUv:qt&&u(v.aoMap.channel),lightMapUv:ne&&u(v.lightMap.channel),bumpMapUv:oe&&u(v.bumpMap.channel),normalMapUv:Ot&&u(v.normalMap.channel),displacementMapUv:Pe&&u(v.displacementMap.channel),emissiveMapUv:$t&&u(v.emissiveMap.channel),metalnessMapUv:Ft&&u(v.metalnessMap.channel),roughnessMapUv:Lt&&u(v.roughnessMap.channel),anisotropyMapUv:ct&&u(v.anisotropyMap.channel),clearcoatMapUv:C&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Mt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&u(v.sheenRoughnessMap.channel),specularMapUv:Tt&&u(v.specularMap.channel),specularColorMapUv:Pt&&u(v.specularColorMap.channel),specularIntensityMapUv:X&&u(v.specularIntensityMap.channel),transmissionMapUv:_t&&u(v.transmissionMap.channel),thicknessMapUv:gt&&u(v.thicknessMap.channel),alphaMapUv:et&&u(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ot||Gt),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!N.attributes.uv&&(fe||et),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Jt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Zt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:rt.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:_,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&rn.getTransfer(v.map.colorSpace)===pn,decodeVideoTextureEmissive:$t&&v.emissiveMap.isVideoTexture===!0&&rn.getTransfer(v.emissiveMap.colorSpace)===pn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===Qn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&v.extensions.multiDraw===!0||We)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Y.vertexUv1s=l.has(1),Y.vertexUv2s=l.has(2),Y.vertexUv3s=l.has(3),l.clear(),Y}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){const b=f[v.type];let F;if(b){const U=ki[b];F=xo.clone(U.uniforms)}else F=v.uniforms;return F}function E(v,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new fM(s,b,v,i),c.push(F),h.set(b,F)),F}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function I(v){a.remove(v)}function P(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:P}}function vM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function MM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ju(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function td(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,u,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);const E=a(f,u,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function c(f,u,p,x,m,g){const y=a(f,u,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||MM),n.length>1&&n.sort(u||ju),i.length>1&&i.sort(u||ju)}function d(){for(let f=t,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function yM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new td,s.set(n,[o])):i>=r.length?(o=new td,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function SM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new be};break;case"SpotLight":e={position:new z,direction:new z,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new be,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new be,groundColor:new be};break;case"RectAreaLight":e={color:new be,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function bM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wM=0;function TM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function EM(s){const t=new SM,e=bM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new Be,o=new Be;function a(c){let h=0,d=0,f=0;for(let rt=0;rt<9;rt++)n.probe[rt].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,E=0,w=0,I=0,P=0,v=0,b=0,F=0,U=0;c.sort(TM);for(let rt=0,Q=c.length;rt<Q;rt++){const N=c[rt],it=N.color,at=N.intensity,q=N.distance;let H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ds?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=it.r*at,d+=it.g*at,f+=it.b*at;else if(N.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(N.sh.coefficients[nt],at);U++}else if(N.isSunLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ht=N.shadow,bt=e.get(N);bt.shadowIntensity=ht.intensity,bt.shadowBias=ht.bias,bt.shadowNormalBias=ht.normalBias,bt.shadowRadius=ht.radius,bt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[p]=bt,n.sunShadowMap[p]=H;const Zt=ht.getViewportCount();for(let he=0;he<Zt;he++)n.sunShadowMatrix[x+he]=ht.getMatrix(he),n.sunShadowCascade[x+he]=ht._cascadeData[he];x+=Zt,p++}n.sun[u]=nt,u++}else if(N.isDirectionalLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ht=N.shadow,bt=e.get(N);bt.shadowIntensity=ht.intensity,bt.shadowBias=ht.bias,bt.shadowNormalBias=ht.normalBias,bt.shadowRadius=ht.radius,bt.shadowMapSize=ht.mapSize,n.directionalShadow[m]=bt,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=N.shadow.matrix,I++}n.directional[m]=nt,m++}else if(N.isSpotLight){const nt=t.get(N);nt.position.setFromMatrixPosition(N.matrixWorld),nt.color.copy(it).multiplyScalar(at),nt.distance=q,nt.coneCos=Math.cos(N.angle),nt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),nt.decay=N.decay,n.spot[y]=nt;const ht=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,ht.updateMatrices(N),N.castShadow&&F++),n.spotLightMatrix[y]=ht.matrix,N.castShadow){const bt=e.get(N);bt.shadowIntensity=ht.intensity,bt.shadowBias=ht.bias,bt.shadowNormalBias=ht.normalBias,bt.shadowRadius=ht.radius,bt.shadowMapSize=ht.mapSize,n.spotShadow[y]=bt,n.spotShadowMap[y]=H,v++}y++}else if(N.isRectAreaLight){const nt=t.get(N);nt.color.copy(it).multiplyScalar(at),nt.halfWidth.set(N.width*.5,0,0),nt.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=nt,E++}else if(N.isPointLight){const nt=t.get(N);if(nt.color.copy(N.color).multiplyScalar(N.intensity),nt.distance=N.distance,nt.decay=N.decay,N.castShadow){const ht=N.shadow,bt=e.get(N);bt.shadowIntensity=ht.intensity,bt.shadowBias=ht.bias,bt.shadowNormalBias=ht.normalBias,bt.shadowRadius=ht.radius,bt.shadowMapSize=ht.mapSize,bt.shadowCameraNear=ht.camera.near,bt.shadowCameraFar=ht.camera.far,n.pointShadow[g]=bt,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=N.shadow.matrix,P++}n.point[g]=nt,g++}else if(N.isHemisphereLight){const nt=t.get(N);nt.skyColor.copy(N.color).multiplyScalar(at),nt.groundColor.copy(N.groundColor).multiplyScalar(at),n.hemi[w]=nt,w++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const W=n.hash;(W.sunLength!==u||W.directionalLength!==m||W.pointLength!==g||W.spotLength!==y||W.rectAreaLength!==E||W.hemiLength!==w||W.numSunShadows!==p||W.numDirectionalShadows!==I||W.numPointShadows!==P||W.numSpotShadows!==v||W.numSpotMaps!==b||W.numLightProbes!==U)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=U,W.sunLength=u,W.directionalLength=m,W.pointLength=g,W.spotLength=y,W.rectAreaLength=E,W.hemiLength=w,W.numSunShadows=p,W.numDirectionalShadows=I,W.numPointShadows=P,W.numSpotShadows=v,W.numSpotMaps=b,W.numLightProbes=U,n.version=wM++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){const w=c[y];if(w.isSunLight){const I=n.sun[d];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),d++}else if(w.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),f++}else if(w.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const I=n.rectArea[x];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const I=n.point[u];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function ed(s){const t=new EM(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function AM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ed(s),t.set(i,[a])):r>=o.length?(a=new ed(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`,PM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],LM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],nd=new Be,Fr=new z,Rl=new z;function DM(s,t,e){let n=new fo;const i=new Ut,r=new Ut,o=new _n,a=new fm,l=new pm,c={},h=e.maxTextureSize,d={[Ss]:Qn,[Qn]:Ss,[Sn]:Sn},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new gn;p.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ve(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let g=this.type;this.render=function(P,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===tp&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);const F=s.getRenderTarget(),U=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ls),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Q=g!==this.type;Q&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(it=>it.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,it=P.length;N<it;N++){const at=P[N],q=at.shadow;if(q===void 0){De("WebGLShadowMap:",at,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const H=q.getFrameExtents();i.multiply(H),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,q.mapSize.y=r.y));const nt=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=nt,q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Gr){if(at.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ti(i.x,i.y,{format:Ds,type:jn,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),q.map.texture.name=at.name+".shadowMap",q.map.depthTexture=new Is(i.x,i.y,yi),q.map.depthTexture.name=at.name+".shadowMapDepth",q.map.depthTexture.format=bs,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un}else at.isPointLight?(q.map=new _h(i.x),q.map.depthTexture=new sf(i.x,Li)):(q.map=new ti(i.x,i.y),q.map.depthTexture=new Is(i.x,i.y,Li)),q.map.depthTexture.name=at.name+".shadowMap",q.map.depthTexture.format=bs,this.type===Kr?(q.map.depthTexture.compareFunction=nt?Vd:Hd,q.map.depthTexture.minFilter=Yn,q.map.depthTexture.magFilter=Yn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);const ht=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();at.isPointLight!==!0&&q.updateMatrices(at,b);const bt=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let Zt=0;Zt<ht;Zt++){const he=q.getCamera(Zt);if(at.isPointLight){const ft=q.camera,Kt=q.matrix,re=at.distance||ft.far;re!==ft.far&&(ft.far=re,ft.updateProjectionMatrix()),Fr.setFromMatrixPosition(at.matrixWorld),ft.position.copy(Fr),Rl.copy(ft.position),Rl.add(PM[Zt]),ft.up.copy(LM[Zt]),ft.lookAt(Rl),ft.updateMatrixWorld(),Kt.makeTranslation(-Fr.x,-Fr.y,-Fr.z),nd.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),q._frustum.setFromProjectionMatrix(nd,ft.coordinateSystem,ft.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,Zt),s.clear();else{Zt===0&&(s.setRenderTarget(q.map),s.clear());const ft=q.getViewport(Zt);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),rt.viewport(o)}n=q.getFrustum(Zt),w(v,b,he,at,bt,this.type)}q.isPointLightShadow!==!0&&this.type===Gr&&y(q,b),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(F,U,W)};function y(P,v){const b=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null?P.mapPass=new ti(i.x,i.y,{format:Ds,type:jn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(v,null,b,f,x,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(v,null,b,u,x,null)}function E(P,v,b,F){let U=null;const W=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(W!==void 0)U=W;else if(U=b.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const rt=U.uuid,Q=v.uuid;let N=c[rt];N===void 0&&(N={},c[rt]=N);let it=N[Q];it===void 0&&(it=U.clone(),N[Q]=it,v.addEventListener("dispose",I)),U=it}if(U.visible=v.visible,U.wireframe=v.wireframe,F===Gr?U.side=v.shadowSide!==null?v.shadowSide:v.side:U.side=v.shadowSide!==null?v.shadowSide:d[v.side],U.alphaMap=v.alphaMap,U.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,U.map=v.map,U.clipShadows=v.clipShadows,U.clippingPlanes=v.clippingPlanes,U.clipIntersection=v.clipIntersection,U.displacementMap=v.displacementMap,U.displacementScale=v.displacementScale,U.displacementBias=v.displacementBias,U.wireframeLinewidth=v.wireframeLinewidth,U.linewidth=v.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const rt=s.properties.get(U);rt.light=b}return U}function w(P,v,b,F,U,W){if(P.visible===!1)return;if(P.layers.test(U)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===Gr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const N=t.update(P),it=P.material;if(Array.isArray(it)){const at=N.groups;for(let q=0,H=at.length;q<H;q++){const nt=at[q],ht=it[nt.materialIndex];if(ht&&ht.visible){const bt=E(P,ht,F,W);P.onBeforeShadow(s,P,v,b,N,bt,nt),s.renderBufferDirect(b,null,N,bt,P,nt),P.onAfterShadow(s,P,v,b,N,bt,nt)}}}else if(it.visible){const at=E(P,it,F,W);P.onBeforeShadow(s,P,v,b,N,at,null),s.renderBufferDirect(b,null,N,at,P,null),P.onAfterShadow(s,P,v,b,N,at,null)}}const Q=P.children;for(let N=0,it=Q.length;N<it;N++)w(Q[N],v,b,F,U,W)}function I(P){P.target.removeEventListener("dispose",I);for(const b in c){const F=c[b],U=P.target.uuid;U in F&&(F[U].dispose(),delete F[U])}}}function IM(s,t){function e(){let X=!1;const _t=new _n;let gt=null;const Yt=new _n(0,0,0,0);return{setMask:function(et){gt!==et&&!X&&(s.colorMask(et,et,et,et),gt=et)},setLocked:function(et){X=et},setClear:function(et,K,dt,Dt,_){_===!0&&(et*=Dt,K*=Dt,dt*=Dt),_t.set(et,K,dt,Dt),Yt.equals(_t)===!1&&(s.clearColor(et,K,dt,Dt),Yt.copy(_t))},reset:function(){X=!1,gt=null,Yt.set(-1,0,0,0)}}}function n(){let X=!1,_t=!1,gt=null,Yt=null,et=null;return{setReversed:function(K){if(_t!==K){const dt=t.get("EXT_clip_control");K?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),_t=K;const Dt=et;et=null,this.setClear(Dt)}},getReversed:function(){return _t},setTest:function(K){K?Jt(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(K){gt!==K&&!X&&(s.depthMask(K),gt=K)},setFunc:function(K){if(_t&&(K=kp[K]),Yt!==K){switch(K){case kl:s.depthFunc(s.NEVER);break;case zl:s.depthFunc(s.ALWAYS);break;case Gl:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Wl:s.depthFunc(s.GREATER);break;case Xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Yt=K}},setLocked:function(K){X=K},setClear:function(K){et!==K&&(et=K,_t&&(K=1-K),s.clearDepth(K))},reset:function(){X=!1,gt=null,Yt=null,et=null,_t=!1}}}function i(){let X=!1,_t=null,gt=null,Yt=null,et=null,K=null,dt=null,Dt=null,_=null;return{setTest:function(k){X||(k?Jt(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(k){_t!==k&&!X&&(s.stencilMask(k),_t=k)},setFunc:function(k,Y,O){(gt!==k||Yt!==Y||et!==O)&&(s.stencilFunc(k,Y,O),gt=k,Yt=Y,et=O)},setOp:function(k,Y,O){(K!==k||dt!==Y||Dt!==O)&&(s.stencilOp(k,Y,O),K=k,dt=Y,Dt=O)},setLocked:function(k){X=k},setClear:function(k){_!==k&&(s.clearStencil(k),_=k)},reset:function(){X=!1,_t=null,gt=null,Yt=null,et=null,K=null,dt=null,Dt=null,_=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,E=null,w=null,I=null,P=null,v=null,b=new be(0,0,0),F=0,U=!1,W=null,rt=null,Q=null,N=null,it=null;const at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(nt)[1]),q=H>=1):nt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),q=H>=2);let ht=null,bt={};const Zt=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),ft=new _n().fromArray(Zt),Kt=new _n().fromArray(he);function re(X,_t,gt,Yt){const et=new Uint8Array(4),K=s.createTexture();s.bindTexture(X,K),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<gt;dt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,Yt,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(_t+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return K}const pe={};pe[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Jt(s.DEPTH_TEST),o.setFunc(no),oe(!1),Ot(Lh),Jt(s.CULL_FACE),qt(Ls);function Jt(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function de(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function We(X,_t){return f[X]!==_t?(s.bindFramebuffer(X,_t),f[X]=_t,X===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),X===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function fe(X,_t){let gt=p,Yt=!1;if(X){gt=u.get(_t),gt===void 0&&(gt=[],u.set(_t,gt));const et=X.textures;if(gt.length!==et.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,dt=et.length;K<dt;K++)gt[K]=s.COLOR_ATTACHMENT0+K;gt.length=et.length,Yt=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,Yt=!0);Yt&&s.drawBuffers(gt)}function Me(X){return x!==X?(s.useProgram(X),x=X,!0):!1}const we={[er]:s.FUNC_ADD,[np]:s.FUNC_SUBTRACT,[ip]:s.FUNC_REVERSE_SUBTRACT};we[sp]=s.MIN,we[rp]=s.MAX;const At={[op]:s.ZERO,[ap]:s.ONE,[lp]:s.SRC_COLOR,[Pd]:s.SRC_ALPHA,[pp]:s.SRC_ALPHA_SATURATE,[dp]:s.DST_COLOR,[hp]:s.DST_ALPHA,[cp]:s.ONE_MINUS_SRC_COLOR,[Ld]:s.ONE_MINUS_SRC_ALPHA,[fp]:s.ONE_MINUS_DST_COLOR,[up]:s.ONE_MINUS_DST_ALPHA,[mp]:s.CONSTANT_COLOR,[gp]:s.ONE_MINUS_CONSTANT_COLOR,[_p]:s.CONSTANT_ALPHA,[xp]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(X,_t,gt,Yt,et,K,dt,Dt,_,k){if(X===Ls){m===!0&&(de(s.BLEND),m=!1);return}if(m===!1&&(Jt(s.BLEND),m=!0),X!==ep){if(X!==g||k!==U){if((y!==er||I!==er)&&(s.blendEquation(s.FUNC_ADD),y=er,I=er),k)switch(X){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ih:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",X);break}else switch(X){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",X);break}E=null,w=null,P=null,v=null,b.set(0,0,0),F=0,g=X,U=k}return}et=et||_t,K=K||gt,dt=dt||Yt,(_t!==y||et!==I)&&(s.blendEquationSeparate(we[_t],we[et]),y=_t,I=et),(gt!==E||Yt!==w||K!==P||dt!==v)&&(s.blendFuncSeparate(At[gt],At[Yt],At[K],At[dt]),E=gt,w=Yt,P=K,v=dt),(Dt.equals(b)===!1||_!==F)&&(s.blendColor(Dt.r,Dt.g,Dt.b,_),b.copy(Dt),F=_),g=X,U=!1}function ne(X,_t){X.side===Sn?de(s.CULL_FACE):Jt(s.CULL_FACE);let gt=X.side===Qn;_t&&(gt=!gt),oe(gt),X.blending===ar&&X.transparent===!1?qt(Ls):qt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Yt=X.stencilWrite;a.setTest(Yt),Yt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$t(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Jt(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(X){W!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),W=X)}function Ot(X){X!==Qf?(Jt(s.CULL_FACE),X!==rt&&(X===Lh?s.cullFace(s.BACK):X===jf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),rt=X}function Pe(X){X!==Q&&(q&&s.lineWidth(X),Q=X)}function $t(X,_t,gt){X?(Jt(s.POLYGON_OFFSET_FILL),(N!==_t||it!==gt)&&(N=_t,it=gt,o.getReversed()&&(_t=-_t,gt=-gt),s.polygonOffset(_t,gt))):de(s.POLYGON_OFFSET_FILL)}function Ft(X){X?Jt(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function Lt(X){X===void 0&&(X=s.TEXTURE0+at-1),ht!==X&&(s.activeTexture(X),ht=X)}function Gt(X,_t,gt){gt===void 0&&(ht===null?gt=s.TEXTURE0+at-1:gt=ht);let Yt=bt[gt];Yt===void 0&&(Yt={type:void 0,texture:void 0},bt[gt]=Yt),(Yt.type!==X||Yt.texture!==_t)&&(ht!==gt&&(s.activeTexture(gt),ht=gt),s.bindTexture(X,_t||pe[X]),Yt.type=X,Yt.texture=_t)}function D(){const X=bt[ht];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function jt(){try{s.compressedTexImage2D(...arguments)}catch(X){He("WebGLState:",X)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(X){He("WebGLState:",X)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(X){He("WebGLState:",X)}}function Rt(){try{s.texSubImage3D(...arguments)}catch(X){He("WebGLState:",X)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(X){He("WebGLState:",X)}}function xt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){He("WebGLState:",X)}}function ct(){try{s.texStorage2D(...arguments)}catch(X){He("WebGLState:",X)}}function C(){try{s.texStorage3D(...arguments)}catch(X){He("WebGLState:",X)}}function S(){try{s.texImage2D(...arguments)}catch(X){He("WebGLState:",X)}}function Z(){try{s.texImage3D(...arguments)}catch(X){He("WebGLState:",X)}}function Mt(X){return d[X]!==void 0?d[X]:s.getParameter(X)}function pt(X,_t){d[X]!==_t&&(s.pixelStorei(X,_t),d[X]=_t)}function Nt(X){ft.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ft.copy(X))}function zt(X){Kt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Kt.copy(X))}function vt(X,_t){let gt=c.get(_t);gt===void 0&&(gt=new WeakMap,c.set(_t,gt));let Yt=gt.get(X);Yt===void 0&&(Yt=s.getUniformBlockIndex(_t,X.name),s.uniformBlockBinding(_t,Yt,Yt),gt.set(X,Yt))}function Tt(X,_t,gt){const et=c.get(_t).get(X);l[et]!==gt&&(s.bindBufferBase(s.UNIFORM_BUFFER,et,gt),l[et]=gt)}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ht=null,bt={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,E=null,w=null,I=null,P=null,v=null,b=new be(0,0,0),F=0,U=!1,W=null,rt=null,Q=null,N=null,it=null,ft.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Jt,disable:de,bindFramebuffer:We,drawBuffers:fe,useProgram:Me,setBlending:qt,setMaterial:ne,setFlipSided:oe,setCullFace:Ot,setLineWidth:Pe,setPolygonOffset:$t,setScissorTest:Ft,activeTexture:Lt,bindTexture:Gt,unbindTexture:D,compressedTexImage2D:jt,compressedTexImage3D:te,texImage2D:S,texImage3D:Z,pixelStorei:pt,getParameter:Mt,updateUBOMapping:vt,uniformBlockBinding:Tt,texStorage2D:ct,texStorage3D:C,texSubImage2D:Wt,texSubImage3D:Rt,compressedTexSubImage2D:ee,compressedTexSubImage3D:xt,scissor:Nt,viewport:zt,reset:Pt}}function NM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):co("canvas")}function y(C,S,Z){let Mt=1;const pt=ct(C);if((pt.width>Z||pt.height>Z)&&(Mt=Z/Math.max(pt.width,pt.height)),Mt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Nt=Math.floor(Mt*pt.width),zt=Math.floor(Mt*pt.height);f===void 0&&(f=g(Nt,zt));const vt=S?g(Nt,zt):f;return vt.width=Nt,vt.height=zt,vt.getContext("2d").drawImage(C,0,0,Nt,zt),De("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Nt+"x"+zt+")."),vt}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),C;return C}function E(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,S,Z,Mt,pt,Nt=!1){if(C!==null){if(s[C]!==void 0)return s[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let zt;Mt&&(zt=t.get("EXT_texture_norm16"),zt||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=S;if(S===s.RED&&(Z===s.FLOAT&&(vt=s.R32F),Z===s.HALF_FLOAT&&(vt=s.R16F),Z===s.UNSIGNED_BYTE&&(vt=s.R8),Z===s.UNSIGNED_SHORT&&zt&&(vt=zt.R16_EXT),Z===s.SHORT&&zt&&(vt=zt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(vt=s.R8UI),Z===s.UNSIGNED_SHORT&&(vt=s.R16UI),Z===s.UNSIGNED_INT&&(vt=s.R32UI),Z===s.BYTE&&(vt=s.R8I),Z===s.SHORT&&(vt=s.R16I),Z===s.INT&&(vt=s.R32I)),S===s.RG&&(Z===s.FLOAT&&(vt=s.RG32F),Z===s.HALF_FLOAT&&(vt=s.RG16F),Z===s.UNSIGNED_BYTE&&(vt=s.RG8),Z===s.UNSIGNED_SHORT&&zt&&(vt=zt.RG16_EXT),Z===s.SHORT&&zt&&(vt=zt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(vt=s.RG8UI),Z===s.UNSIGNED_SHORT&&(vt=s.RG16UI),Z===s.UNSIGNED_INT&&(vt=s.RG32UI),Z===s.BYTE&&(vt=s.RG8I),Z===s.SHORT&&(vt=s.RG16I),Z===s.INT&&(vt=s.RG32I)),S===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(vt=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(vt=s.RGB16UI),Z===s.UNSIGNED_INT&&(vt=s.RGB32UI),Z===s.BYTE&&(vt=s.RGB8I),Z===s.SHORT&&(vt=s.RGB16I),Z===s.INT&&(vt=s.RGB32I)),S===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(vt=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(vt=s.RGBA16UI),Z===s.UNSIGNED_INT&&(vt=s.RGBA32UI),Z===s.BYTE&&(vt=s.RGBA8I),Z===s.SHORT&&(vt=s.RGBA16I),Z===s.INT&&(vt=s.RGBA32I)),S===s.RGB&&(Z===s.UNSIGNED_SHORT&&zt&&(vt=zt.RGB16_EXT),Z===s.SHORT&&zt&&(vt=zt.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(vt=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(vt=s.R11F_G11F_B10F)),S===s.RGBA){const Tt=Nt?Sa:rn.getTransfer(pt);Z===s.FLOAT&&(vt=s.RGBA32F),Z===s.HALF_FLOAT&&(vt=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(vt=Tt===pn?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&zt&&(vt=zt.RGBA16_EXT),Z===s.SHORT&&zt&&(vt=zt.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(vt=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(vt=s.RGB5_A1)}return(vt===s.R16F||vt===s.R32F||vt===s.RG16F||vt===s.RG32F||vt===s.RGBA16F||vt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function v(C,S){let Z;return C?S===null||S===Li||S===dr?Z=s.DEPTH24_STENCIL8:S===yi?Z=s.DEPTH32F_STENCIL8:S===so&&(Z=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===dr?Z=s.DEPTH_COMPONENT24:S===yi?Z=s.DEPTH_COMPONENT32F:S===so&&(Z=s.DEPTH_COMPONENT16),Z}function b(C,S){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==Yn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function F(C){const S=new WeakRef(C);n.get(C).__ref=S,p.add(S),x.register(C,S,S)}function U(C){const S=n.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function W(C){Q(C.target)}function rt(C){N(C.target)}function Q(C){C.removeEventListener("dispose",W),U(C),at(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function N(C){C.removeEventListener("dispose",rt),U(C),H(C)}function it(){for(const C of p){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):Q(S))}p.clear(),d.clear()}function at(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Z=C.source,Mt=u.get(Z);if(Mt){const pt=Mt[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&q(C),Object.keys(Mt).length===0&&u.delete(Z)}n.remove(C)}function q(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const Z=C.source,Mt=u.get(Z);delete Mt[S.__cacheKey],o.memory.textures--}function H(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const Z=C.depthTexture;if(Z&&Z.renderTarget===C&&Q(Z),C.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(S.__webglFramebuffer[pt]))for(let Nt=0;Nt<S.__webglFramebuffer[pt].length;Nt++)s.deleteFramebuffer(S.__webglFramebuffer[pt][Nt]);else s.deleteFramebuffer(S.__webglFramebuffer[pt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[pt])}else{if(Array.isArray(S.__webglFramebuffer))for(let pt=0;pt<S.__webglFramebuffer.length;pt++)s.deleteFramebuffer(S.__webglFramebuffer[pt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pt=0;pt<S.__webglColorRenderbuffer.length;pt++)S.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[pt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Mt=C.textures;for(let pt=0,Nt=Mt.length;pt<Nt;pt++){const zt=n.get(Mt[pt]);zt.__webglTexture&&(s.deleteTexture(zt.__webglTexture),o.memory.textures--),n.remove(Mt[pt])}n.remove(C)}let nt=0;function ht(){nt=0}function bt(){return nt}function Zt(C){nt=C}function he(){const C=nt;return C>=i.maxTextures&&De("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),nt+=1,C}function ft(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Kt(C,S){const Z=n.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){const Mt=C.image;if(Mt===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Z,C,S);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+S)}function re(C,S){const Z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){ne(Z,C,S);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+S)}function pe(C,S){const Z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){ne(Z,C,S);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+S)}function Jt(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){oe(Z,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+S)}const de={[Si]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[xa]:s.MIRRORED_REPEAT},We={[Un]:s.NEAREST,[Nd]:s.NEAREST_MIPMAP_NEAREST,[Hr]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},fe={[Pp]:s.NEVER,[Wd]:s.ALWAYS,[Lp]:s.LESS,[Hd]:s.LEQUAL,[Dp]:s.EQUAL,[Vd]:s.GEQUAL,[Ip]:s.GREATER,[Np]:s.NOTEQUAL};function Me(C,S){if(S.type===yi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Yn||S.magFilter===aa||S.magFilter===Hr||S.magFilter===Hi||S.minFilter===Yn||S.minFilter===aa||S.minFilter===Hr||S.minFilter===Hi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,de[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,de[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,de[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,We[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,We[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==Hr&&S.minFilter!==Hi||S.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function we(C,S){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",W),F(S));const Mt=S.source;let pt=u.get(Mt);pt===void 0&&(pt={},u.set(Mt,pt));const Nt=ft(S);if(Nt!==C.__cacheKey){pt[Nt]===void 0&&(pt[Nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pt[Nt].usedTimes++;const zt=pt[C.__cacheKey];zt!==void 0&&(pt[C.__cacheKey].usedTimes--,zt.usedTimes===0&&q(S)),C.__cacheKey=Nt,C.__webglTexture=pt[Nt].texture}return Z}function At(C,S,Z){return Math.floor(Math.floor(C/Z)/S)}function qt(C,S,Z,Mt){const Nt=C.updateRanges;if(Nt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,Z,Mt,S.data);else{Nt.sort((X,_t)=>X.start-_t.start);let zt=0;for(let X=1;X<Nt.length;X++){const _t=Nt[zt],gt=Nt[X],Yt=_t.start+_t.count,et=At(gt.start,S.width,4),K=At(_t.start,S.width,4);gt.start<=Yt+1&&et===K&&At(gt.start+gt.count-1,S.width,4)===et?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++zt,Nt[zt]=gt)}Nt.length=zt+1;const vt=e.getParameter(s.UNPACK_ROW_LENGTH),Tt=e.getParameter(s.UNPACK_SKIP_PIXELS),Pt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let X=0,_t=Nt.length;X<_t;X++){const gt=Nt[X],Yt=Math.floor(gt.start/4),et=Math.ceil(gt.count/4),K=Yt%S.width,dt=Math.floor(Yt/S.width),Dt=et,_=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(s.TEXTURE_2D,0,K,dt,Dt,_,Z,Mt,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,vt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function ne(C,S,Z){let Mt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Mt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Mt=s.TEXTURE_3D);const pt=we(C,S),Nt=S.source;e.bindTexture(Mt,C.__webglTexture,s.TEXTURE0+Z);const zt=n.get(Nt);if(Nt.version!==zt.__version||pt===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const _=rn.getPrimaries(rn.workingColorSpace),k=S.colorSpace===rs?null:rn.getPrimaries(S.colorSpace),Y=S.colorSpace===rs||_===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let Tt=y(S.image,!1,i.maxTextureSize);Tt=xt(S,Tt);const Pt=r.convert(S.format,S.colorSpace),X=r.convert(S.type);let _t=P(S.internalFormat,Pt,X,S.normalized,S.colorSpace,S.isVideoTexture);Me(Mt,S);let gt;const Yt=S.mipmaps,et=S.isVideoTexture!==!0,K=zt.__version===void 0||pt===!0,dt=Nt.dataReady,Dt=b(S,Tt);if(S.isDepthTexture)_t=v(S.format===ys,S.type),K&&(et?e.texStorage2D(s.TEXTURE_2D,1,_t,Tt.width,Tt.height):e.texImage2D(s.TEXTURE_2D,0,_t,Tt.width,Tt.height,0,Pt,X,null));else if(S.isDataTexture)if(Yt.length>0){et&&K&&e.texStorage2D(s.TEXTURE_2D,Dt,_t,Yt[0].width,Yt[0].height);for(let _=0,k=Yt.length;_<k;_++)gt=Yt[_],et?dt&&e.texSubImage2D(s.TEXTURE_2D,_,0,0,gt.width,gt.height,Pt,X,gt.data):e.texImage2D(s.TEXTURE_2D,_,_t,gt.width,gt.height,0,Pt,X,gt.data);S.generateMipmaps=!1}else et?(K&&e.texStorage2D(s.TEXTURE_2D,Dt,_t,Tt.width,Tt.height),dt&&qt(S,Tt,Pt,X)):e.texImage2D(s.TEXTURE_2D,0,_t,Tt.width,Tt.height,0,Pt,X,Tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,_t,Yt[0].width,Yt[0].height,Tt.depth);for(let _=0,k=Yt.length;_<k;_++)if(gt=Yt[_],S.format!==Ci)if(Pt!==null)if(et){if(dt)if(S.layerUpdates.size>0){const Y=Uu(gt.width,gt.height,S.format,S.type);for(const O of S.layerUpdates){const st=gt.data.subarray(O*Y/gt.data.BYTES_PER_ELEMENT,(O+1)*Y/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,O,gt.width,gt.height,1,Pt,st)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,gt.width,gt.height,Tt.depth,Pt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_,_t,gt.width,gt.height,Tt.depth,0,gt.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,gt.width,gt.height,Tt.depth,Pt,X,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,_,_t,gt.width,gt.height,Tt.depth,0,Pt,X,gt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&K&&e.texStorage2D(s.TEXTURE_2D,Dt,_t,Yt[0].width,Yt[0].height);for(let _=0,k=Yt.length;_<k;_++)gt=Yt[_],S.format!==Ci?Pt!==null?et?dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,_,0,0,gt.width,gt.height,Pt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,_,_t,gt.width,gt.height,0,gt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?dt&&e.texSubImage2D(s.TEXTURE_2D,_,0,0,gt.width,gt.height,Pt,X,gt.data):e.texImage2D(s.TEXTURE_2D,_,_t,gt.width,gt.height,0,Pt,X,gt.data)}else if(S.isDataArrayTexture)if(et){if(K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,_t,Tt.width,Tt.height,Tt.depth),dt)if(S.layerUpdates.size>0){const _=Uu(Tt.width,Tt.height,S.format,S.type);for(const k of S.layerUpdates){const Y=Tt.data.subarray(k*_/Tt.data.BYTES_PER_ELEMENT,(k+1)*_/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,k,Tt.width,Tt.height,1,Pt,X,Y)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,X,Tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,Tt.width,Tt.height,Tt.depth,0,Pt,X,Tt.data);else if(S.isData3DTexture)et?(K&&e.texStorage3D(s.TEXTURE_3D,Dt,_t,Tt.width,Tt.height,Tt.depth),dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,X,Tt.data)):e.texImage3D(s.TEXTURE_3D,0,_t,Tt.width,Tt.height,Tt.depth,0,Pt,X,Tt.data);else if(S.isFramebufferTexture){if(K)if(et)e.texStorage2D(s.TEXTURE_2D,Dt,_t,Tt.width,Tt.height);else{let _=Tt.width,k=Tt.height;for(let Y=0;Y<Dt;Y++)e.texImage2D(s.TEXTURE_2D,Y,_t,_,k,0,Pt,X,null),_>>=1,k>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const _=s.canvas;if(_.hasAttribute("layoutsubtree")||_.setAttribute("layoutsubtree","true"),Tt.parentNode!==_){_.appendChild(Tt),d.add(S),_.onpaint=k=>{const Y=k.changedElements;for(const O of d)Y.includes(O.image)&&(O.needsUpdate=!0)},_.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Tt);else{const Y=s.RGBA,O=s.RGBA,st=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Y,O,st,Tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(et&&K){const _=ct(Yt[0]);e.texStorage2D(s.TEXTURE_2D,Dt,_t,_.width,_.height)}for(let _=0,k=Yt.length;_<k;_++)gt=Yt[_],et?dt&&e.texSubImage2D(s.TEXTURE_2D,_,0,0,Pt,X,gt):e.texImage2D(s.TEXTURE_2D,_,_t,Pt,X,gt);S.generateMipmaps=!1}else if(et){if(K){const _=ct(Tt);e.texStorage2D(s.TEXTURE_2D,Dt,_t,_.width,_.height)}dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,X,Tt)}else e.texImage2D(s.TEXTURE_2D,0,_t,Pt,X,Tt);E(S)&&S.mipmapsAutoUpdate===!0&&w(Mt),zt.__version=Nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,Z){if(S.image.length!==6)return;const Mt=we(C,S),pt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Z);const Nt=n.get(pt);if(pt.version!==Nt.__version||Mt===!0){e.activeTexture(s.TEXTURE0+Z);const zt=rn.getPrimaries(rn.workingColorSpace),vt=S.colorSpace===rs?null:rn.getPrimaries(S.colorSpace),Tt=S.colorSpace===rs||zt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Pt=S.isCompressedTexture||S.image[0].isCompressedTexture,X=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let O=0;O<6;O++)!Pt&&!X?_t[O]=y(S.image[O],!0,i.maxCubemapSize):_t[O]=X?S.image[O].image:S.image[O],_t[O]=xt(S,_t[O]);const gt=_t[0],Yt=r.convert(S.format,S.colorSpace),et=r.convert(S.type);let K=P(S.internalFormat,Yt,et,S.normalized,S.colorSpace);const dt=S.isVideoTexture!==!0,Dt=Nt.__version===void 0||Mt===!0,_=pt.dataReady;let k=b(S,gt);Me(s.TEXTURE_CUBE_MAP,S);let Y;if(S.isDepthTexture){if(K=v(S.format===ys,S.type),Dt)if(dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,K,gt.width,gt.height);else for(let O=0;O<6;O++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,K,gt.width,gt.height,0,Yt,et,null)}else if(Pt){dt&&Dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,k,K,gt.width,gt.height);for(let O=0;O<6;O++){Y=_t[O].mipmaps;for(let st=0;st<Y.length;st++){const lt=Y[st];S.format!==Ci?Yt!==null?dt?_&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,0,0,lt.width,lt.height,Yt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,K,lt.width,lt.height,0,lt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,0,0,lt.width,lt.height,Yt,et,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,K,lt.width,lt.height,0,Yt,et,lt.data)}}}else{if(Y=S.mipmaps,dt&&Dt){Y.length>0&&k++;const O=ct(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,k,K,O.width,O.height)}for(let O=0;O<6;O++)if(X){dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,_t[O].width,_t[O].height,Yt,et,_t[O].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,K,_t[O].width,_t[O].height,0,Yt,et,_t[O].data);for(let st=0;st<Y.length;st++){const Ht=Y[st].image[O].image;dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,0,0,Ht.width,Ht.height,Yt,et,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,K,Ht.width,Ht.height,0,Yt,et,Ht.data)}}else{dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Yt,et,_t[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,K,Yt,et,_t[O]);for(let st=0;st<Y.length;st++){const lt=Y[st];dt?_&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,0,0,Yt,et,lt.image[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,K,Yt,et,lt.image[O])}}}E(S)&&S.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),Nt.__version=pt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ot(C,S,Z,Mt,pt,Nt){const zt=r.convert(Z.format,Z.colorSpace),vt=r.convert(Z.type),Tt=P(Z.internalFormat,zt,vt,Z.normalized,Z.colorSpace),Pt=n.get(S),X=n.get(Z);if(X.__renderTarget=S,!Pt.__hasExternalTextures){const _t=Math.max(1,S.width>>Nt),gt=Math.max(1,S.height>>Nt);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?e.texImage3D(pt,Nt,Tt,_t,gt,S.depth,0,zt,vt,null):e.texImage2D(pt,Nt,Tt,_t,gt,0,zt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,pt,X.__webglTexture,0,Wt(S)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Mt,pt,X.__webglTexture,Nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(C,S,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Mt=S.depthTexture,pt=Mt&&Mt.isDepthTexture?Mt.type:null,Nt=v(S.stencilBuffer,pt),zt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Rt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(S),Nt,S.width,S.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(S),Nt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Nt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,C)}else{const Mt=S.textures;for(let pt=0;pt<Mt.length;pt++){const Nt=Mt[pt],zt=r.convert(Nt.format,Nt.colorSpace),vt=r.convert(Nt.type),Tt=P(Nt.internalFormat,zt,vt,Nt.normalized,Nt.colorSpace);Rt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(S),Tt,S.width,S.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(S),Tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $t(C,S,Z){const Mt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=n.get(S.depthTexture);pt.__renderTarget=S;const Nt=Mt?S.depthTexture.image[0]:S.depthTexture.image;(!pt.__webglTexture||Nt.width!==S.width||Nt.height!==S.height)&&(Nt.width=S.width,Nt.height=S.height,S.depthTexture.needsUpdate=!0),Mt?Jt(S.depthTexture,0):Kt(S.depthTexture,0);const zt=pt.__webglTexture,vt=Wt(S),Tt=Mt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,Pt=S.depthTexture.format===ys?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===bs)Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pt,Tt,zt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,Pt,Tt,zt,0);else if(S.depthTexture.format===ys)Rt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pt,Tt,zt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,Pt,Tt,zt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(C){const S=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Mt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Mt){const pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Mt.removeEventListener("dispose",pt)};Mt.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=Mt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let Mt=0;Mt<6;Mt++)$t(S.__webglFramebuffer[Mt],C,Mt);else C.texture.mipmaps.length>0?$t(S.__webglFramebuffer[0],C,0):$t(S.__webglFramebuffer,C,0);else if(Z){S.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Mt]),S.__webglDepthbuffer[Mt]===void 0)S.__webglDepthbuffer[Mt]=s.createRenderbuffer(),Pe(S.__webglDepthbuffer[Mt],C,!1);else{const pt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer[Mt];s.bindRenderbuffer(s.RENDERBUFFER,Nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Nt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Pe(S.__webglDepthbuffer,C,!1);else{const pt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(C,S,Z){const Mt=n.get(C);S!==void 0&&Ot(Mt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ft(C)}function Gt(C){const S=C.texture,Z=n.get(C),Mt=n.get(S);C.addEventListener("dispose",rt),F(C);const pt=C.textures,Nt=C.isWebGLCubeRenderTarget===!0,zt=pt.length>1;if(zt||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture()),Mt.__version=S.version,o.memory.textures++),Nt){Z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps.length>0){Z.__webglFramebuffer[vt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)Z.__webglFramebuffer[vt][Tt]=s.createFramebuffer()}else Z.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)Z.__webglFramebuffer[vt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(zt)for(let vt=0,Tt=pt.length;vt<Tt;vt++){const Pt=n.get(pt[vt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let vt=0;vt<pt.length;vt++){const Tt=pt[vt];Z.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[vt]);const Pt=r.convert(Tt.format,Tt.colorSpace),X=r.convert(Tt.type),_t=P(Tt.internalFormat,Pt,X,Tt.normalized,Tt.colorSpace,C.isXRRenderTarget===!0),gt=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(s.TEXTURE_CUBE_MAP,Mt.__webglTexture),Me(s.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)Ot(Z.__webglFramebuffer[vt][Tt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt);else Ot(Z.__webglFramebuffer[vt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(S)?w(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(zt){for(let vt=0,Tt=pt.length;vt<Tt;vt++){const Pt=pt[vt],X=n.get(Pt);let _t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,X.__webglTexture),Me(_t,Pt),Ot(Z.__webglFramebuffer,C,Pt,s.COLOR_ATTACHMENT0+vt,_t,0),E(Pt)&&w(_t)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,Mt.__webglTexture),Me(vt,S),S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)Ot(Z.__webglFramebuffer[Tt],C,S,s.COLOR_ATTACHMENT0,vt,Tt);else Ot(Z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,vt,0);E(S)?w(vt):S.mipmaps.length>0&&s.texParameteri(vt,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Ft(C)}function D(C){const S=C.textures;for(let Z=0,Mt=S.length;Z<Mt;Z++){const pt=S[Z];if(E(pt)&&pt.mipmapsAutoUpdate===!0){const Nt=I(C),zt=n.get(pt).__webglTexture;e.bindTexture(Nt,zt),w(Nt),e.unbindTexture()}}}const jt=[];function te(C){if(C.samples>0){if(Rt(C)===!1){const S=C.textures,Z=C.width,Mt=C.height;let pt=s.COLOR_BUFFER_BIT;const Nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=n.get(C),vt=S.length>1;if(vt)for(let Pt=0;Pt<S.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Pt=0;Pt<S.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Pt]);const X=n.get(S[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,X,0)}s.blitFramebuffer(0,0,Z,Mt,0,0,Z,Mt,pt,s.NEAREST),l===!0&&(jt.length=0,jt.push(s.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&jt.push(Nt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Pt=0;Pt<S.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Pt]);const X=n.get(S[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,X,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function Rt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function xt(C,S){const Z=C.colorSpace,Mt=C.format,pt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==mi&&Z!==rs&&(rn.getTransfer(Z)===pn?(Mt!==Ci||pt!==fi)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",Z)),S}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=he,this.resetTextureUnits=ht,this.getTextureUnits=bt,this.setTextureUnits=Zt,this.setTexture2D=Kt,this.setTexture2DArray=re,this.setTexture3D=pe,this.setTextureCube=Jt,this.rebindTextures=Lt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Rt,this.dispose=it}function UM(s,t){function e(n,i=rs){let r;const o=rn.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Kc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ud)return s.BYTE;if(n===Od)return s.SHORT;if(n===so)return s.UNSIGNED_SHORT;if(n===qc)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===jn)return s.HALF_FLOAT;if(n===kd)return s.ALPHA;if(n===zd)return s.RGB;if(n===Ci)return s.RGBA;if(n===bs)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===Fa)return s.RED;if(n===Jc)return s.RED_INTEGER;if(n===Ds)return s.RG;if(n===$c)return s.RG_INTEGER;if(n===Qc)return s.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===pn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===ql||n===Kl||n===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===$l||n===Ql||n===jl||n===tc||n===va||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===$l)return o===pn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===va)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===_c||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return o===pn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===Mc||n===Ma||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:OM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends ds{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new BM,g={},y=e.getContextAttributes();let E=null,w=null;const I=[],P=[],v=new Ut;let b=null,F=null;const U=new li;U.viewport=new _n;const W=new li;W.viewport=new _n;const rt=[U,W],Q=new Um;let N=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let Kt=I[ft];return Kt===void 0&&(Kt=new il,I[ft]=Kt),Kt.getTargetRaySpace()},this.getControllerGrip=function(ft){let Kt=I[ft];return Kt===void 0&&(Kt=new il,I[ft]=Kt),Kt.getGripSpace()},this.getHand=function(ft){let Kt=I[ft];return Kt===void 0&&(Kt=new il,I[ft]=Kt),Kt.getHandSpace()};function at(ft){const Kt=P.indexOf(ft.inputSource);if(Kt===-1)return;const re=I[Kt];re!==void 0&&(re.update(ft.inputSource,ft.frame,c||o),re.dispatchEvent({type:ft.type,data:ft.inputSource}))}function q(){i.removeEventListener("select",at),i.removeEventListener("selectstart",at),i.removeEventListener("selectend",at),i.removeEventListener("squeeze",at),i.removeEventListener("squeezestart",at),i.removeEventListener("squeezeend",at),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",H);for(let ft=0;ft<I.length;ft++){const Kt=P[ft];Kt!==null&&(P[ft]=null,I[ft].disconnect(Kt))}N=null,it=null,m.reset();for(const ft in g)delete g[ft];if(t.setRenderTarget(E),u=null,f=null,d=null,i=null,w=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),F!==null){const ft=F.camera;ft.fov=F.fov,ft.zoom=F.zoom,ft.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ft){if(i=ft,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",at),i.addEventListener("selectstart",at),i.addEventListener("selectend",at),i.addEventListener("squeeze",at),i.addEventListener("squeezestart",at),i.addEventListener("squeezeend",at),i.addEventListener("end",q),i.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,pe=null,Jt=null;y.depth&&(Jt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,re=y.stencil?ys:bs,pe=y.stencil?dr:Li);const de={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(de),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ti(f.textureWidth,f.textureHeight,{format:Ci,type:fi,depthTexture:new Is(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,re),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new ti(u.framebufferWidth,u.framebufferHeight,{format:Ci,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(ft){for(let Kt=0;Kt<ft.removed.length;Kt++){const re=ft.removed[Kt],pe=P.indexOf(re);pe>=0&&(P[pe]=null,I[pe].disconnect(re))}for(let Kt=0;Kt<ft.added.length;Kt++){const re=ft.added[Kt];let pe=P.indexOf(re);if(pe===-1){for(let de=0;de<I.length;de++)if(de>=P.length){P.push(re),pe=de;break}else if(P[de]===null){P[de]=re,pe=de;break}if(pe===-1)break}const Jt=I[pe];Jt&&Jt.connect(re)}}function nt(ft,Kt){Kt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(Kt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(i===null)return;let Kt=ft.near,re=ft.far;m.texture!==null&&(m.depthNear>0&&(Kt=m.depthNear),m.depthFar>0&&(re=m.depthFar)),Q.near=W.near=U.near=Kt,Q.far=W.far=U.far=re,(N!==Q.near||it!==Q.far)&&(i.updateRenderState({depthNear:Q.near,depthFar:Q.far}),N=Q.near,it=Q.far),Q.layers.mask=ft.layers.mask|6,U.layers.mask=Q.layers.mask&-5,W.layers.mask=Q.layers.mask&-3;const pe=ft.parent,Jt=Q.cameras;nt(Q,pe);for(let de=0;de<Jt.length;de++)nt(Jt[de],pe);Q.projectionMatrix.copy(U.projectionMatrix),Q.projectionMatrixInverse.copy(U.projectionMatrixInverse),F===null&&ft.isPerspectiveCamera&&(F={camera:ft,fov:ft.fov,zoom:ft.zoom}),ht(ft,Q,pe)};function ht(ft,Kt,re){re===null?ft.matrix.copy(Kt.matrixWorld):(ft.matrix.copy(re.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(Kt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(Kt.projectionMatrix),ft.projectionMatrixInverse.copy(Kt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=fr*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(ft){l=ft,f!==null&&(f.fixedFoveation=ft),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ft)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(ft){return g[ft]};let bt=null;function Zt(ft,Kt){if(h=Kt.getViewerPose(c||o),p=Kt,h!==null){const re=h.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let pe=!1;re.length!==Q.cameras.length&&(Q.cameras.length=0,pe=!0);for(let fe=0;fe<re.length;fe++){const Me=re[fe];let we=null;if(u!==null)we=u.getViewport(Me);else{const qt=d.getViewSubImage(f,Me);we=qt.viewport,fe===0&&(t.setRenderTargetTextures(w,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(w))}let At=rt[fe];At===void 0&&(At=new li,At.layers.enable(fe),At.viewport=new _n,rt[fe]=At),At.matrix.fromArray(Me.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Me.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(Q.matrix.copy(At.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),pe===!0&&Q.cameras.push(At)}const Jt=i.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const fe=d.getDepthInformation(re[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,i.renderState)}if(Jt&&Jt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let fe=0;fe<re.length;fe++){const Me=re[fe].camera;if(Me){let we=g[Me];we||(we=new rf,g[Me]=we);const At=d.getCameraImage(Me);we.sourceTexture=At}}}}for(let re=0;re<I.length;re++){const pe=P[re],Jt=I[re];pe!==null&&Jt!==void 0&&Jt.update(pe,Kt,c||o)}bt&&bt(ft,Kt),Kt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Kt}),p=null}const he=new wf;he.setAnimationLoop(Zt),this.setAnimationLoop=function(ft){bt=ft},this.dispose=function(){}}}const zM=new Be,Nf=new Ze;Nf.set(-1,0,0,0,1,0,0,0,1);function GM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,pf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,E,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=t.get(g),E=y.envMap,w=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function HM(s,t,e,n){let i={},r={};function o(y,E){const w=E.program;n.uniformBlockBinding(y,w,i[y.id])}function a(y,E){let w=i[y.id];w===void 0&&(p(y),w=l(y),i[y.id]=w,y.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(y,I);const P=t.render.frame;r[y.id]!==P&&(c(y),r[y.id]=P)}function l(y){const E=s.createBuffer(),w=y.__size,I=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,w,I),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(y){const E=i[y.id],w=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,v=w.length;P<v;P++){const b=w[P];if(Array.isArray(b))for(let F=0,U=b.length;F<U;F++)h(b[F],P,F,I);else h(b,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,E,w,I){if(f(y,E,w,I)===!0){const P=y.__offset,v=y.value;if(Array.isArray(v)){let b=0;for(let F=0;F<v.length;F++){const U=v[F],W=x(U,!0);d(U,y.__data,b),b+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,y.__data)}}function d(y,E,w){typeof y=="number"||typeof y=="boolean"?E[w]=y:y.isMatrix3?(E[w]=y.elements[0],E[w+1]=y.elements[1],E[w+2]=y.elements[2],E[w+3]=0,E[w+4]=y.elements[3],E[w+5]=y.elements[4],E[w+6]=y.elements[5],E[w+7]=0,E[w+8]=y.elements[6],E[w+9]=y.elements[7],E[w+10]=y.elements[8],E[w+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-w),w):y.toArray(E,w)}function f(y,E,w,I){const P=y.value,v=E+"_"+w;if(Array.isArray(P)){I[v]===void 0&&(I[v]=[]);const b=I[v];let F=!1;for(let U=0;U<P.length;U++)u(P[U],b,U)===!0&&(F=!0);return F}return u(P,I,v)}function u(y,E,w){if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{const I=E[w];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function p(y){const E=y.uniforms;let w=0;const I=16;for(let v=0,b=E.length;v<b;v++){const F=Array.isArray(E[v])?E[v]:[E[v]];for(let U=0,W=F.length;U<W;U++){const rt=F[U],Q=Array.isArray(rt.value)?rt.value:[rt.value],N=Array.isArray(E[v])||Array.isArray(rt.value);let it=w;for(let q=0,H=Q.length;q<H;q++){const nt=Q[q],ht=x(nt,N),bt=w%I,Zt=bt%ht.boundary,he=bt+Zt;w+=Zt,he!==0&&I-he<ht.storage&&(w+=I-he),q===0&&(it=w),w+=ht.storage}const at=rt.type==="int"?Int32Array:rt.type==="uint"?Uint32Array:Float32Array;rt.__data=new at((w-it)/Float32Array.BYTES_PER_ELEMENT),rt.__offset=it}}const P=w%I;return P>0&&(w+=I-P),y.__size=w,y.__cache={},this}function x(y,E){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=16,w.storage=48):y.isMatrix4?(w.boundary=16,w.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(y){const E=y.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}const VM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function WM(){return Fi===null&&(Fi=new ka(VM,16,16,Ds,jn),Fi.name="DFG_LUT",Fi.minFilter=Yn,Fi.magFilter=Yn,Fi.wrapS=si,Fi.wrapT=si,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class XM{constructor(t={}){const{canvas:e=Fp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=fi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=u,m=new Set([Qc,$c,Jc]),g=new Set([fi,Li,so,dr,Kc,Zc]),y=new Uint32Array(4),E=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const v=[],b=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let W=!1,rt=null,Q=null,N=null,it=null;this._outputColorSpace=Nn;let at=0,q=0,H=null,nt=-1,ht=null;const bt=new _n,Zt=new _n;let he=null;const ft=new be(0);let Kt=0,re=e.width,pe=e.height,Jt=1,de=null,We=null;const fe=new _n(0,0,re,pe),Me=new _n(0,0,re,pe);let we=!1;const At=new fo,qt=new ah;let ne=!1,oe=!1;const Ot=new Be,Pe=new z,$t=new _n,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Gt(){return H===null?Jt:1}let D=n;function jt(M,R){return e.getContext(M,R)}let te,Wt,Rt,ee,xt,ct,C,S,Z,Mt,pt,Nt,zt,vt,Tt,Pt,X,_t,gt,Yt,et,K,dt;try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",O,!1),D===null){const R="webgl2";if(D=jt(R,M),D===null)throw jt(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(M){throw e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",O,!1),He("WebGLRenderer: "+M.message),M}function Dt(){te=new Kx(D),te.init(),et=new UM(D,te),Wt=new Fx(D,te,t,et),Rt=new IM(D,te),Wt.reversedDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),Q=D.createFramebuffer(),N=D.createFramebuffer(),it=D.createFramebuffer(),ee=new $x(D),xt=new vM,ct=new NM(D,te,Rt,xt,Wt,et,ee),C=new qx(U),S=new jm(D),K=new Ux(D,S),Z=new Zx(D,S,ee,K),Mt=new jx(D,Z,S,K,ee),_t=new Qx(D,Wt,ct),Tt=new Bx(xt),pt=new xM(U,C,te,Wt,K,Tt),Nt=new GM(U,xt),zt=new yM,vt=new AM(te),X=new Nx(U,C,Rt,Mt,p,l),Pt=new DM(U,Mt,Wt),dt=new HM(D,ee,Wt,Rt),gt=new Ox(D,te,ee),Yt=new Jx(D,te,ee),ee.programs=pt.programs,U.capabilities=Wt,U.extensions=te,U.properties=xt,U.renderLists=zt,U.shadowMap=Pt,U.state=Rt,U.info=ee}x!==fi&&(F=new ev(x,e.width,e.height,a,i,r));const _=new kM(U,D);this.xr=_,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Jt},this.setPixelRatio=function(M){M!==void 0&&(Jt=M,this.setSize(re,pe,!1))},this.getSize=function(M){return M.set(re,pe)},this.setSize=function(M,R,$=!0){if(_.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}re=M,pe=R,e.width=Math.floor(M*Jt),e.height=Math.floor(R*Jt),$===!0&&(e.style.width=M+"px",e.style.height=R+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(re*Jt,pe*Jt).floor()},this.setDrawingBufferSize=function(M,R,$){re=M,pe=R,Jt=$,e.width=Math.floor(M*$),e.height=Math.floor(R*$),this.setViewport(0,0,M,R)},this.setEffects=function(M){if(x===fi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let R=0;R<M.length;R++)if(M[R].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(bt)},this.getViewport=function(M){return M.copy(fe)},this.setViewport=function(M,R,$,B){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,R,$,B),Rt.viewport(bt.copy(fe).multiplyScalar(Gt()).round())},this.getScissor=function(M){return M.copy(Me)},this.setScissor=function(M,R,$,B){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,R,$,B),Rt.scissor(Zt.copy(Me).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(M){Rt.setScissorTest(we=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){We=M},this.getClearColor=function(M){return M.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(M=!0,R=!0,$=!0){let B=0;if(M){let V=!1;if(H!==null){const mt=H.texture.format;V=m.has(mt)}if(V){const mt=H.texture.type,It=g.has(mt),Bt=X.getClearColor(),kt=X.getClearAlpha(),ie=Bt.r,le=Bt.g,ae=Bt.b;It?(y[0]=ie,y[1]=le,y[2]=ae,y[3]=kt,D.clearBufferuiv(D.COLOR,0,y)):(E[0]=ie,E[1]=le,E[2]=ae,E[3]=kt,D.clearBufferiv(D.COLOR,0,E))}else B|=D.COLOR_BUFFER_BIT}R&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),rt=M},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",O,!1),X.dispose(),zt.dispose(),vt.dispose(),ct.dispose(),xt.dispose(),C.dispose(),Mt.dispose(),Z.dispose(),K.dispose(),dt.dispose(),pt.dispose(),_.dispose(),_.removeEventListener("sessionstart",ze),_.removeEventListener("sessionend",Ae),Xt.stop()};function k(M){M.preventDefault(),ba("WebGLRenderer: Context Lost."),W=!0}function Y(){ba("WebGLRenderer: Context Restored."),W=!1;const M=ee.autoReset,R=Pt.enabled,$=Pt.autoUpdate,B=Pt.needsUpdate,V=Pt.type;Dt(),ee.autoReset=M,Pt.enabled=R,Pt.autoUpdate=$,Pt.needsUpdate=B,Pt.type=V}function O(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){const R=M.target;R.removeEventListener("dispose",st),lt(R)}function lt(M){Ht(M),xt.remove(M)}function Ht(M){const R=xt.get(M).programs;R!==void 0&&(R.forEach(function($){pt.releaseProgram($)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,$,B,V,mt){R===null&&(R=Ft);const It=V.isMesh&&V.matrixWorld.determinantAffine()<0,Bt=j(M,R,$,B,V);Rt.setMaterial(B,It);let kt=$.index,ie=1;if(B.wireframe===!0){if(kt=Z.getWireframeAttribute($),kt===void 0)return;ie=2}const le=$.drawRange,ae=$.attributes.position;let ce=le.start*ie,Ie=(le.start+le.count)*ie;mt!==null&&(ce=Math.max(ce,mt.start*ie),Ie=Math.min(Ie,(mt.start+mt.count)*ie)),kt!==null?(ce=Math.max(ce,0),Ie=Math.min(Ie,kt.count)):ae!=null&&(ce=Math.max(ce,0),Ie=Math.min(Ie,ae.count));const Ue=Ie-ce;if(Ue<0||Ue===1/0)return;K.setup(V,B,Bt,$,kt);let Le,Ne=gt;if(kt!==null&&(Le=S.get(kt),Ne=Yt,Ne.setIndex(Le)),V.isMesh)B.wireframe===!0?(Rt.setLineWidth(B.wireframeLinewidth*Gt()),Ne.setMode(D.LINES)):Ne.setMode(D.TRIANGLES);else if(V.isLine){let fn=B.linewidth;fn===void 0&&(fn=1),Rt.setLineWidth(fn*Gt()),V.isLineSegments?Ne.setMode(D.LINES):V.isLineLoop?Ne.setMode(D.LINE_LOOP):Ne.setMode(D.LINE_STRIP)}else V.isPoints?Ne.setMode(D.POINTS):V.isSprite&&Ne.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const fn=V._multiDrawStarts,_e=V._multiDrawCounts,Mn=V._multiDrawCount,qe=kt?S.get(kt).bytesPerElement:1,oi=xt.get(B).currentProgram.getUniforms();for(let vn=0;vn<Mn;vn++)oi.setValue(D,"_gl_DrawID",vn),Ne.render(fn[vn]/qe,_e[vn])}else if(V.isInstancedMesh)Ne.renderInstances(ce,Ue,V.count);else if($.isInstancedBufferGeometry){const fn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_e=Math.min($.instanceCount,fn);Ne.renderInstances(ce,Ue,_e)}else Ne.render(ce,Ue)};function me(M,R,$,B){rt!==null&&M.isNodeMaterial&&rt.setObject(B,M),ne===!0&&Tt.setState(M,$,!1),M.transparent===!0&&M.side===Sn&&M.forceSinglePass===!1?(M.side=Qn,M.needsUpdate=!0,G(M,R,B),M.side=Ss,M.needsUpdate=!0,G(M,R,B),M.side=Sn):G(M,R,B)}this.compile=function(M,R,$=null){$===null&&($=M),rt!==null&&rt.renderStart(M,R,$),P=vt.get($),P.init(R),b.push(P),$.traverseVisible(function(V){V.isLight&&V.layers.test(R.layers)&&(P.pushLight(V),V.castShadow&&P.pushShadow(V))}),M!==$&&M.traverseVisible(function(V){V.isLight&&V.layers.test(R.layers)&&(P.pushLight(V),V.castShadow&&P.pushShadow(V))}),P.setupLights(),rt!==null&&rt.updateLights(P.state.lightsArray),oe=this.localClippingEnabled,ne=Tt.init(this.clippingPlanes,oe),ne===!0&&Tt.setGlobalState(this.clippingPlanes,R),rt!==null&&Pt.render(P.state.shadowsArray,$,R);const B=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const mt=V.material;if(mt)if(Array.isArray(mt))for(let It=0;It<mt.length;It++){const Bt=mt[It];me(Bt,$,R,V),B.add(Bt)}else me(mt,$,R,V),B.add(mt)}),P=b.pop(),rt!==null&&rt.renderEnd(),B},this.compileAsync=function(M,R,$=null){const B=this.compile(M,R,$);return new Promise(V=>{function mt(){if(B.forEach(function(It){const kt=xt.get(It).currentProgram;(kt===void 0||kt.isReady())&&B.delete(It)}),B.size===0){V(M);return}setTimeout(mt,10)}te.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Re=null;function ye(M){Re&&Re(M)}function ze(){Xt.stop()}function Ae(){Xt.start()}const Xt=new wf;Xt.setAnimationLoop(ye),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(M){Re=M,_.setAnimationLoop(M),M===null?Xt.stop():Xt.start()},_.addEventListener("sessionstart",ze),_.addEventListener("sessionend",Ae),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;rt!==null&&rt.renderStart(M,R);const $=_.enabled===!0&&_.isPresenting===!0,B=F!==null&&(H===null||$)&&F.begin(U,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(_.cameraAutoUpdate===!0&&_.updateCamera(R),R=_.getCamera()),M.isScene===!0&&M.onBeforeRender(U,M,R,H),P=vt.get(M,b.length),P.init(R),P.state.textureUnits=ct.getTextureUnits(),b.push(P),Ot.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?qt.setFromArrayCamera(R):At.setFromProjectionMatrix(Ot,Pi,R.reversedDepth),oe=this.localClippingEnabled,ne=Tt.init(this.clippingPlanes,oe),I=zt.get(M,v.length),I.init(),v.push(I),this.info.render.frame++,_.enabled===!0&&_.isPresenting===!0){const It=U.xr.getDepthSensingMesh();It!==null&&ge(It,R,-1/0,U.sortObjects)}ge(M,R,0,U.sortObjects),I.finish(),rt!==null&&rt.updateLights(P.state.lightsArray),U.sortObjects===!0&&I.sort(de,We),Lt=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,Lt&&X.addToRenderList(I,M),this.info.autoReset===!0&&this.info.reset(),ne===!0&&Tt.beginShadows();const V=P.state.shadowsArray;if(Pt.render(V,M,R),ne===!0&&Tt.endShadows(),(B&&F.hasRenderPass())===!1){const It=I.opaque,Bt=I.transmissive;if(P.setupLights(),R.isArrayCamera){const kt=R.cameras;if(Bt.length>0)for(let ie=0,le=kt.length;ie<le;ie++){const ae=kt[ie];En(It,Bt,M,ae)}Lt&&X.render(M);for(let ie=0,le=kt.length;ie<le;ie++){const ae=kt[ie];hn(I,M,ae,ae.viewport)}}else Bt.length>0&&En(It,Bt,M,R),Lt&&X.render(M),hn(I,M,R)}H!==null&&q===0&&(ct.updateMultisampleRenderTarget(H),ct.updateRenderTargetMipmap(H)),B&&F.end(U),M.isScene===!0&&M.onAfterRender(U,M,R),K.resetDefaultState(),nt=-1,ht=null,b.pop(),b.length>0?(P=b[b.length-1],ct.setTextureUnits(P.state.textureUnits),ne===!0&&Tt.setGlobalState(U.clippingPlanes,P.state.camera)):P=null,v.pop(),v.length>0?I=v[v.length-1]:I=null,rt!==null&&rt.renderEnd()};function ge(M,R,$,B){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){const It=R.isArrayCamera?qt:At;if(!M.frustumCulled||M.intersectsFrustum(It)){B&&$t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ot);const Bt=Mt.update(M),kt=M.material;kt.visible&&I.push(M,Bt,kt,$,$t.z,null,R)}}else if(M.isMesh||M.isLine||M.isPoints){const It=R.isArrayCamera?qt:At;if(!M.frustumCulled||M.intersectsFrustum(It)){const Bt=Mt.update(M),kt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$t.copy(M.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),$t.copy(Bt.boundingSphere.center)),$t.applyMatrix4(M.matrixWorld).applyMatrix4(Ot)),Array.isArray(kt)){const ie=Bt.groups;for(let le=0,ae=ie.length;le<ae;le++){const ce=ie[le],Ie=kt[ce.materialIndex];Ie&&Ie.visible&&I.push(M,Bt,Ie,$,$t.z,ce,R)}}else kt.visible&&I.push(M,Bt,kt,$,$t.z,null,R)}}}const mt=M.children;for(let It=0,Bt=mt.length;It<Bt;It++)ge(mt[It],R,$,B)}function hn(M,R,$,B){const{opaque:V,transmissive:mt,transparent:It}=M;P.setupLightsView($),ne===!0&&Tt.setGlobalState(U.clippingPlanes,$),B&&Rt.viewport(bt.copy(B)),V.length>0&&An(V,R,$),mt.length>0&&An(mt,R,$),It.length>0&&An(It,R,$),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function En(M,R,$,B){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[B.id]===void 0){const ce=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[B.id]=new ti(1,1,{generateMipmaps:!0,type:ce?jn:fi,minFilter:Hi,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rn.workingColorSpace})}const mt=P.state.transmissionRenderTarget[B.id],It=B.viewport||bt;mt.setSize(It.z*U.transmissionResolutionScale,It.w*U.transmissionResolutionScale);const Bt=U.getRenderTarget(),kt=U.getActiveCubeFace(),ie=U.getActiveMipmapLevel();U.setRenderTarget(mt),U.getClearColor(ft),Kt=U.getClearAlpha(),Kt<1&&U.setClearColor(16777215,.5),U.clear(),Lt&&X.render($);const le=U.toneMapping;U.toneMapping=cs;const ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),P.setupLightsView(B),ne===!0&&Tt.setGlobalState(U.clippingPlanes,B),An(M,$,B),ct.updateMultisampleRenderTarget(mt),ct.updateRenderTargetMipmap(mt),te.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ie=0,Ue=R.length;Ie<Ue;Ie++){const Le=R[Ie],{object:Ne,geometry:fn,material:_e,group:Mn}=Le;if(_e.side===Sn&&Ne.layers.test(B.layers)){const qe=_e.side;_e.side=Qn,_e.needsUpdate=!0,T(Ne,$,B,fn,_e,Mn),_e.side=qe,_e.needsUpdate=!0,ce=!0}}ce===!0&&(ct.updateMultisampleRenderTarget(mt),ct.updateRenderTargetMipmap(mt))}U.setRenderTarget(Bt,kt,ie),U.setClearColor(ft,Kt),ae!==void 0&&(B.viewport=ae),U.toneMapping=le}function An(M,R,$){const B=R.isScene===!0?R.overrideMaterial:null;for(let V=0,mt=M.length;V<mt;V++){const It=M[V],{object:Bt,geometry:kt,group:ie}=It;let le=It.material;le.allowOverride===!0&&B!==null&&(le=B),Bt.layers.test($.layers)&&T(Bt,R,$,kt,le,ie)}}function T(M,R,$,B,V,mt){rt!==null&&V.isNodeMaterial&&rt.setObject(M,V),M.onBeforeRender(U,R,$,B,V,mt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(U,R,$,B,M,mt),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=Qn,V.needsUpdate=!0,U.renderBufferDirect($,R,B,V,M,mt),V.side=Ss,V.needsUpdate=!0,U.renderBufferDirect($,R,B,V,M,mt),V.side=Sn):U.renderBufferDirect($,R,B,V,M,mt),M.onAfterRender(U,R,$,B,V,mt)}function L(M){let R=0;for(const $ of M)$.texture!==null&&R++;return R}function G(M,R,$){R.isScene!==!0&&(R=Ft);const B=xt.get(M),V=P.state.lights,mt=P.state.shadowsArray,It=V.state.version,Bt=pt.getParameters(M,V.state,mt,R,$,P.state.lightProbeGridArray),kt=pt.getProgramCacheKey(Bt);let ie=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;const le=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=C.get(M.envMap||B.environment,le),B.envMapRotation=B.environment!==null&&M.envMap===null?R.environmentRotation:M.envMapRotation,ie===void 0&&(M.addEventListener("dispose",st),ie=new Map,B.programs=ie,B.programVariants=new Map);let ae=ie.get(kt);if(ae!==void 0){if(B.currentProgram===ae&&B.lightsStateVersion===It)return wt(M,Bt),ae}else Bt.uniforms=pt.getUniforms(M),rt!==null&&M.isNodeMaterial&&rt.build(M,$,Bt),M.onBeforeCompile(Bt,U),ae=pt.acquireProgram(Bt,kt),ie.set(kt,ae),B.uniforms=Bt.uniforms;const ce=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ce.clippingPlanes=Tt.uniform),wt(M,Bt),B.needsLights=yt(M),B.lightsStateVersion=It,B.needsLights&&(ce.ambientLightColor.value=V.state.ambient,ce.lightProbe.value=V.state.probe,ce.sunLights.value=V.state.sun,ce.sunLightShadows.value=V.state.sunShadow,ce.directionalLights.value=V.state.directional,ce.directionalLightShadows.value=V.state.directionalShadow,ce.spotLights.value=V.state.spot,ce.spotLightShadows.value=V.state.spotShadow,ce.rectAreaLights.value=V.state.rectArea,ce.ltc_1.value=V.state.rectAreaLTC1,ce.ltc_2.value=V.state.rectAreaLTC2,ce.pointLights.value=V.state.point,ce.pointLightShadows.value=V.state.pointShadow,ce.hemisphereLights.value=V.state.hemi,ce.sunShadowMatrix.value=V.state.sunShadowMatrix,ce.sunShadowCascade.value=V.state.sunShadowCascade,ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ce.spotLightMatrix.value=V.state.spotLightMatrix,ce.spotLightMap.value=V.state.spotLightMap,ce.pointShadowMatrix.value=V.state.pointShadowMatrix),B.numLightProbeGrids=L(P.state.lightProbeGridArray),B.currentProgram=ae,B.uniformsList=null,ae}function J(M,R,$,B,V){const mt=xt.get(M),It=mt.currentProgram.id+","+B+","+V;let Bt=mt.programVariants.get(It);return Bt===void 0?(Bt=G(M,R,$),mt.programVariants.set(It,Bt)):(mt.currentProgram=Bt,mt.uniformsList=null,mt.outputColorSpace=B,mt.toneMapping=V),Bt}function ut(M){if(M.uniformsList===null){const R=M.currentProgram.getUniforms();M.uniformsList=fa.seqWithValue(R.seq,M.uniforms)}return M.uniformsList}function wt(M,R){const $=xt.get(M);$.outputColorSpace=R.outputColorSpace,$.batching=R.batching,$.batchingColor=R.batchingColor,$.instancing=R.instancing,$.instancingColor=R.instancingColor,$.instancingMorph=R.instancingMorph,$.skinning=R.skinning,$.morphTargets=R.morphTargets,$.morphNormals=R.morphNormals,$.morphColors=R.morphColors,$.morphTargetsCount=R.morphTargetsCount,$.numClippingPlanes=R.numClippingPlanes,$.numIntersection=R.numClipIntersection,$.vertexAlphas=R.vertexAlphas,$.vertexTangents=R.vertexTangents,$.toneMapping=R.toneMapping}function j(M,R,$,B,V){R.isScene!==!0&&(R=Ft),ct.resetTextureUnits();const mt=R.fog,It=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,Bt=H===null?U.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:rn.workingColorSpace,kt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ie=C.get(B.envMap||It,kt),le=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ce=!!$.morphAttributes.position,Ie=!!$.morphAttributes.normal,Ue=!!$.morphAttributes.color;let Le=cs;B.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Le=U.toneMapping);const Ne=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fn=Ne!==void 0?Ne.length:0,_e=xt.get(B),Mn=P.state.lights;if(ne===!0&&(oe===!0||M!==ht)){const Ke=M===ht&&B.id===nt;Tt.setState(B,M,Ke)}let qe=!1,oi=!1;B.version===_e.__version?_e.needsLights&&_e.lightsStateVersion!==Mn.state.version||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==ie||B.fog===!0&&_e.fog!==mt||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Tt.numPlanes||_e.numIntersection!==Tt.numIntersection)||_e.vertexAlphas!==le||_e.vertexTangents!==ae||_e.morphTargets!==ce||_e.morphNormals!==Ie||_e.morphColors!==Ue||_e.morphTargetsCount!==fn||_e.numLightProbeGrids!==L(P.state.lightProbeGridArray)?qe=!0:(_e.outputColorSpace!==Bt||_e.toneMapping!==Le)&&(oi=!0):(qe=!0,_e.__version=B.version);let vn=_e.currentProgram;(qe===!0||oi===!0)&&(vn=oi===!0?J(B,R,V,Bt,Le):G(B,R,V),rt&&B.isNodeMaterial&&rt.onUpdateProgram(B,vn,_e));let ci=!1,Wn=!1,Xn=!1;const Ee=vn.getUniforms(),$e=_e.uniforms;if(Rt.useProgram(vn.program)&&(ci=!0,Wn=!0,Xn=!0),B.id!==nt&&(nt=B.id,Wn=!0),ci||ht!==M){Rt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ee.setValue(D,"projectionMatrix",M.projectionMatrix),Ee.setValue(D,"viewMatrix",M.matrixWorldInverse);const Qe=Ee.map.cameraPosition;Qe!==void 0&&Qe.setValue(D,Pe.setFromMatrixPosition(M.matrixWorld)),Wt.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),ht!==M&&(ht=M,Wn=!0,Xn=!0)}if(_e.needsLights&&(Mn.state.sunShadowMap.length>0&&Ee.setValue(D,"sunShadowMap",Mn.state.sunShadowMap,ct),Mn.state.directionalShadowMap.length>0&&Ee.setValue(D,"directionalShadowMap",Mn.state.directionalShadowMap,ct),Mn.state.spotShadowMap.length>0&&Ee.setValue(D,"spotShadowMap",Mn.state.spotShadowMap,ct),Mn.state.pointShadowMap.length>0&&Ee.setValue(D,"pointShadowMap",Mn.state.pointShadowMap,ct)),V.isSkinnedMesh){Ee.setOptional(D,V,"bindMatrix"),Ee.setOptional(D,V,"bindMatrixInverse");const Ke=V.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ee.setValue(D,"boneTexture",Ke.boneTexture,ct))}V.isBatchedMesh&&(Ee.setOptional(D,V,"batchingTexture"),Ee.setValue(D,"batchingTexture",V._matricesTexture,ct),Ee.setOptional(D,V,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",V._indirectTexture,ct),Ee.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",V._colorsTexture,ct));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&_t.update(V,$,vn),(Wn||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,Ee.setValue(D,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&($e.envMapIntensity.value=R.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=WM()),Wn){if(Ee.setValue(D,"toneMappingExposure",U.toneMappingExposure),_e.needsLights&&A($e,Xn),mt&&B.fog===!0&&Nt.refreshFogUniforms($e,mt),Nt.refreshMaterialUniforms($e,B,Jt,pe,P.state.transmissionRenderTarget[M.id]),_e.needsLights&&_e.numLightProbeGrids>0){const Ke=w;let Qe=0;for(const cn of P.state.lightProbeGridArray)cn.texture!==null&&(Ke.textures[Qe]=cn.texture,Ke.min[Qe]=cn.boundingBox.min,Ke.max[Qe]=cn.boundingBox.max,Ke.resolution[Qe]=cn.resolution,Qe++);for(const cn in Ke)Ke[cn].length=Qe;$e.probesSH.value=Ke.textures,$e.probesMin.value=Ke.min,$e.probesMax.value=Ke.max,$e.probesResolution.value=Ke.resolution}fa.upload(D,ut(_e),$e,ct)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fa.upload(D,ut(_e),$e,ct),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ee.setValue(D,"center",V.center),Ee.setValue(D,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(D,"normalMatrix",V.normalMatrix),Ee.setValue(D,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){const Ke=B.uniformsGroups;for(let Qe=0,cn=Ke.length;Qe<cn;Qe++){const On=Ke[Qe];dt.update(On,vn),dt.bind(On,vn)}}return vn}function A(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.sunLights.needsUpdate=R,M.sunLightShadows.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function yt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,R,$){const B=xt.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),xt.get(M.texture).__webglTexture=R,xt.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:$,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,R){const $=xt.get(M);$.__webglFramebuffer=R,$.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,$=0){H=M,at=R,q=$;let B=null,V=!1,mt=!1;if(M){const Bt=xt.get(M);if(Bt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(D.FRAMEBUFFER,Bt.__webglFramebuffer),bt.copy(M.viewport),Zt.copy(M.scissor),he=M.scissorTest,Rt.viewport(bt),Rt.scissor(Zt),Rt.setScissorTest(he),nt=-1;return}else if(Bt.__webglFramebuffer===void 0)ct.setupRenderTarget(M);else if(Bt.__hasExternalTextures)ct.rebindTextures(M,xt.get(M.texture).__webglTexture,xt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const le=M.depthTexture;if(Bt.__boundDepthTexture!==le){if(le!==null&&xt.has(le)&&(M.width!==le.image.width||M.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(M)}}const kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(mt=!0);const ie=xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ie[R])?B=ie[R][$]:B=ie[R],V=!0):M.samples>0&&ct.useMultisampledRTT(M)===!1?B=xt.get(M).__webglMultisampledFramebuffer:Array.isArray(ie)?B=ie[$]:B=ie,bt.copy(M.viewport),Zt.copy(M.scissor),he=M.scissorTest}else bt.copy(fe).multiplyScalar(Jt).floor(),Zt.copy(Me).multiplyScalar(Jt).floor(),he=we;if($!==0&&(B=Q),Rt.bindFramebuffer(D.FRAMEBUFFER,B)&&Rt.drawBuffers(M,B),Rt.viewport(bt),Rt.scissor(Zt),Rt.setScissorTest(he),V){const Bt=xt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,Bt.__webglTexture,$)}else if(mt){const Bt=R;for(let kt=0;kt<M.textures.length;kt++){const ie=xt.get(M.textures[kt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+kt,ie.__webglTexture,$,Bt)}}else if(M!==null&&$!==0){const Bt=xt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bt.__webglTexture,$)}nt=-1};function ot(M){const R=xt.get(M);return(R.__readFormat!==M.format||R.__readType!==M.type)&&(R.__readFormat=M.format,R.__readType=M.type,R.__formatReadable=Wt.textureFormatReadable(M.format),R.__typeReadable=Wt.textureTypeReadable(M.type)),R}this.readRenderTargetPixels=function(M,R,$,B,V,mt,It,Bt=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It],Array.isArray(kt)&&(kt=kt[0])),kt){Rt.bindFramebuffer(D.FRAMEBUFFER,kt);try{const ie=M.textures[Bt],le=ie.format,ae=ie.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Bt);const ce=ot(ie);if(ce.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ce.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-B&&$>=0&&$<=M.height-V&&D.readPixels(R,$,B,V,et.convert(le),et.convert(ae),mt)}finally{const ie=H!==null?xt.get(H).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(M,R,$,B,V,mt,It,Bt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It],Array.isArray(kt)&&(kt=kt[0])),kt)if(R>=0&&R<=M.width-B&&$>=0&&$<=M.height-V){Rt.bindFramebuffer(D.FRAMEBUFFER,kt);const ie=M.textures[Bt],le=ie.format,ae=ie.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Bt);const ce=ot(ie);if(ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(R,$,B,V,et.convert(le),et.convert(ae),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ue=H!==null?xt.get(H).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Ue);const Le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bp(D,Le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ie),D.deleteSync(Le),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,R=null,$=0){const B=Math.pow(2,-$),V=Math.floor(M.image.width*B),mt=Math.floor(M.image.height*B),It=R!==null?R.x:0,Bt=R!==null?R.y:0;ct.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,It,Bt,V,mt),Rt.unbindTexture()},this.copyTextureToTexture=function(M,R,$=null,B=null,V=0,mt=0){let It,Bt,kt,ie,le,ae,ce,Ie,Ue;const Le=M.isCompressedTexture?M.mipmaps[mt]:M.image;if($!==null)It=$.max.x-$.min.x,Bt=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,ie=$.min.x,le=$.min.y,ae=$.isBox3?$.min.z:0;else{const Ee=Math.pow(2,-V);It=Math.floor(Le.width*Ee),Bt=Math.floor(Le.height*Ee),M.isDataArrayTexture?kt=Le.depth:M.isData3DTexture?kt=Math.floor(Le.depth*Ee):kt=1,ie=0,le=0,ae=0}B!==null?(ce=B.x,Ie=B.y,Ue=B.z):(ce=0,Ie=0,Ue=0);const Ne=et.convert(R.format),fn=et.convert(R.type);let _e;R.isData3DTexture?(ct.setTexture3D(R,0),_e=D.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(ct.setTexture2DArray(R,0),_e=D.TEXTURE_2D_ARRAY):(ct.setTexture2D(R,0),_e=D.TEXTURE_2D),Rt.activeTexture(D.TEXTURE0),Rt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),Rt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Rt.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);const Mn=Rt.getParameter(D.UNPACK_ROW_LENGTH),qe=Rt.getParameter(D.UNPACK_IMAGE_HEIGHT),oi=Rt.getParameter(D.UNPACK_SKIP_PIXELS),vn=Rt.getParameter(D.UNPACK_SKIP_ROWS),ci=Rt.getParameter(D.UNPACK_SKIP_IMAGES);Rt.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),Rt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),Rt.pixelStorei(D.UNPACK_SKIP_PIXELS,ie),Rt.pixelStorei(D.UNPACK_SKIP_ROWS,le),Rt.pixelStorei(D.UNPACK_SKIP_IMAGES,ae);const Wn=M.isDataArrayTexture||M.isData3DTexture,Xn=R.isDataArrayTexture||R.isData3DTexture;if(M.isDepthTexture){const Ee=xt.get(M),$e=xt.get(R),on=xt.get(Ee.__renderTarget),Ke=xt.get($e.__renderTarget);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,on.__webglFramebuffer),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Qe=0;Qe<kt;Qe++)Wn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(M).__webglTexture,V,ae+Qe),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(R).__webglTexture,mt,Ue+Qe)),D.blitFramebuffer(ie,le,ie+It,le+Bt,ce,Ie,ce+It,Ie+Bt,D.DEPTH_BUFFER_BIT,D.NEAREST);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||xt.has(M)){const Ee=xt.get(M),$e=xt.get(R);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,N),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,it);for(let on=0;on<kt;on++)Wn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,V,ae+on):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,V),Xn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$e.__webglTexture,mt,Ue+on):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$e.__webglTexture,mt),V!==0?D.blitFramebuffer(ie,le,ie+It,le+Bt,ce,Ie,ce+It,Ie+Bt,D.COLOR_BUFFER_BIT,D.NEAREST):Xn?D.copyTexSubImage3D(_e,mt,ce,Ie,Ue+on,ie,le,It,Bt):D.copyTexSubImage2D(_e,mt,ce,Ie,ie,le,It,Bt);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(_e,mt,ce,Ie,Ue,It,Bt,kt,Ne,fn,Le.data):R.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,mt,ce,Ie,Ue,It,Bt,kt,Ne,Le.data):D.texSubImage3D(_e,mt,ce,Ie,Ue,It,Bt,kt,Ne,fn,Le):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,ce,Ie,It,Bt,Ne,fn,Le.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,ce,Ie,Le.width,Le.height,Ne,Le.data):D.texSubImage2D(D.TEXTURE_2D,mt,ce,Ie,It,Bt,Ne,fn,Le);Rt.pixelStorei(D.UNPACK_ROW_LENGTH,Mn),Rt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),Rt.pixelStorei(D.UNPACK_SKIP_PIXELS,oi),Rt.pixelStorei(D.UNPACK_SKIP_ROWS,vn),Rt.pixelStorei(D.UNPACK_SKIP_IMAGES,ci),mt===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&D.generateMipmap(_e),Rt.unbindTexture()},this.initRenderTarget=function(M){xt.get(M).__webglFramebuffer===void 0&&ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ct.setTextureCube(M,0):M.isData3DTexture?ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ct.setTexture2DArray(M,0):ct.setTexture2D(M,0),Rt.unbindTexture()},this.resetState=function(){at=0,q=0,H=null,Rt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(t),e.unpackColorSpace=rn._getUnpackColorSpace()}}const id={type:"change"},xh={type:"start"},Uf={type:"end"},ea=new xr,sd=new ss,YM=Math.cos(70*wa.DEG2RAD),Fn=new z,ai=2*Math.PI,dn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6;class qM extends $m{constructor(t,e=null){super(t,e),this.state=dn.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new bn,this._lastTargetPosition=new z,this._quat=new bn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nu,this._sphericalDelta=new Nu,this._scale=1,this._panOffset=new z,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new z,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZM.bind(this),this._onPointerDown=KM.bind(this),this._onPointerUp=JM.bind(this),this._onContextMenu=i1.bind(this),this._onMouseWheel=jM.bind(this),this._onKeyDown=t1.bind(this),this._onTouchStart=e1.bind(this),this._onTouchMove=n1.bind(this),this._onMouseDown=$M.bind(this),this._onMouseMove=QM.bind(this),this._interceptControlDown=s1.bind(this),this._interceptControlUp=r1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(id),this.update(),this.state=dn.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Fn.copy(e).sub(this.target),Fn.applyQuaternion(this._quat),this._spherical.setFromVector3(Fn),this.autoRotate&&this.state===dn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ai:n>Math.PI&&(n-=ai),i<-Math.PI?i+=ai:i>Math.PI&&(i-=ai),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fn.setFromSpherical(this._spherical),Fn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ea.origin.copy(this.object.position),ea.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ea.direction))<YM?this.object.lookAt(this.target):(sd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ea.intersectPlane(sd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ai/60*this.autoRotateSpeed*t:ai/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fn.setFromMatrixColumn(e,0),Fn.multiplyScalar(-t),this._panOffset.add(Fn)}_panUp(t,e){this.screenSpacePanning===!0?Fn.setFromMatrixColumn(e,1):(Fn.setFromMatrixColumn(e,0),Fn.crossVectors(this.object.up,Fn)),Fn.multiplyScalar(t),this._panOffset.add(Fn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Fn.copy(i).sub(this.target);let r=Fn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/e.clientHeight),this._rotateUp(ai*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/e.clientHeight),this._rotateUp(ai*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function KM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ZM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function JM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uf),this.state=dn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $M(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=dn.DOLLY;break;case or.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=dn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=dn.ROTATE}break;case or.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=dn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=dn.PAN}break;default:this.state=dn.NONE}this.state!==dn.NONE&&this.dispatchEvent(xh)}function QM(s){switch(this.state){case dn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case dn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function jM(s){this.enabled===!1||this.enableZoom===!1||this.state!==dn.NONE||(s.preventDefault(),this.dispatchEvent(xh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Uf))}function t1(s){this.enabled!==!1&&this._handleKeyDown(s)}function e1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ir.ROTATE:if(this.enableRotate===!1){this.state=dn.NONE;break}this._handleTouchStartRotate(s),this.state=dn.TOUCH_ROTATE;break;case ir.PAN:if(this.enablePan===!1){this.state=dn.NONE;break}this._handleTouchStartPan(s),this.state=dn.TOUCH_PAN;break;default:this.state=dn.NONE}break;case 2:switch(this.touches.TWO){case ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=dn.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=dn.TOUCH_DOLLY_ROTATE;break;default:this.state=dn.NONE}break;default:this.state=dn.NONE}this.state!==dn.NONE&&this.dispatchEvent(xh)}function n1(s){switch(this._trackPointer(s),this.state){case dn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case dn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case dn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case dn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=dn.NONE}}function i1(s){this.enabled!==!1&&s.preventDefault()}function s1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const o1=new Ha(-1,1,1,-1,0,1);class a1 extends gn{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}}const l1=new a1;class vh{constructor(t){this._mesh=new Ve(l1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,o1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Dc extends wr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ri?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xo.clone(t.uniforms),this.material=new ri({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new vh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rd extends wr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class c1 extends wr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class h1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dc(pa),this.copyPass.material.blending=Ls,this.timer=new Om}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rd!==void 0&&(o instanceof rd?n=!0:o instanceof c1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const na={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class u1 extends wr{constructor(){super(),this.isOutputPass=!0,this.uniforms=xo.clone(na.uniforms),this.material=new mf({name:na.name,uniforms:this.uniforms,vertexShader:na.vertexShader,fragmentShader:na.fragmentShader}),this._fsQuad=new vh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},rn.getTransfer(this._outputColorSpace)===pn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class d1 extends wr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const f1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _r extends wr{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ut(t.x,t.y):new Ut(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(r,o,{type:jn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ti(r,o,{type:jn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ti(r,o,{type:jn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=f1;this.highPassUniforms=xo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ri({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xo.clone(pa.uniforms),this.blendMaterial=new ri({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new qn,this._fsQuad=new vh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=_r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new ri({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ri({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}_r.BlurDirectionX=new Ut(1,0);_r.BlurDirectionY=new Ut(0,1);function Mh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new gn;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=od(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=od(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function od(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Vn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function ad(s,t){if(t===Ep)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Sc||t===Gd){let e=s.getIndex();if(e===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Sc)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const Jn={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2},p1={library:[-.38,.92],court:[1,0]};function m1(s,t){const e=Ri[s],n=e.kind==="house"?Math.max(e.w,e.d)*1.15+8:e.r*1.6+7,i=p1[s]??t,r=Math.hypot(i[0],i[1]),[o,a]=r>0?[i[0]/r,i[1]/r]:[.45,.9];return{target:[e.x,1,e.z],position:[e.x+o*n,n*.85,e.z+a*n]}}function g1(s,t,e){if(!e||s<=0||t<=0)return null;const{left:n,right:i,top:r,bottom:o}=e;if(n+i>=s||r+o>=t)return null;const a=(i-n)/2,l=(o-r)/2;return a===0&&l===0?null:{x:a,y:l}}const ld={x:0,y:0},Ic=250;function cd(s,t,e,n){if(n||e>=Ic)return t;const r=1-(1-Math.max(0,e)/Ic)**3;return{x:s.x+(t.x-s.x)*r,y:s.y+(t.y-s.y)*r}}const Pl={cold:"#5a2a10",one:"#f08a3c",busy:"#ffb15a"},_1=4;function x1(s){const t=Math.max(0,Math.min(s,_1));return{mouth:t===0?Pl.cold:t===1?Pl.one:Pl.busy,heat:.25+t*.35}}const v1=(s,t)=>t?0:Math.sin(s*9)*.08+Math.sin(s*23)*.05,Of={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit",raise:"raise_hand"},yh=new Set(["type","smash","readsit","sit","drink"]),M1=s=>Of[s]??"idle";function y1(s){return s.walking?"walk":s.needsYou&&s.hasRaise?"raise":s.needsYou||s.held?yh.has(s.pose)?"sit":"idle":s.pose}const S1=new Set(["thinking","reading","writing","waiting"]);function b1(s,t){return!t.walking&&!t.held&&t.spot===ra[s]&&t.state!==null&&S1.has(t.state)}const Nc={lead:["garden-pond","court-well","yard-2"],designer:["garden-easel","garden-pond"],frontend:["yard-1","tavern-1"],backend:["tavern-2","yard-2"],reviewer:["court-bench","tavern-1"]},w1={lead:[8e3,15e3],others:[45e3,9e4]},T1=new Set(["frontend","backend"]);function Da(s,t,e){const{room:n,pose:i}=$n[t],r=T1.has(s)?n==="yard"?"sparks":i==="drink"?"mug":null:null;return{spot:t,clip:M1(i),prop:r,ms:e}}function E1(s,t,e){let n=(s^Math.imul(e+1,2654435761))>>>0;for(const i of t)n=Math.imul(n^i.charCodeAt(0),2246822507)>>>0;return()=>{n=n+1831565813>>>0;let i=n;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function hd(s,t,{seed:e,from:n=null,taken:i=new Set,reducedMotion:r=!1}){if(r)return Da(s,Ms[s],Number.POSITIVE_INFINITY);const o=E1(e,s,t),a=Nc[s],l=Math.floor(o()*a.length),c=p=>!i.has(p),h=a.map((p,x)=>a[(l+x)%a.length]),d=h.find(p=>c(p)&&p!==n)??h.find(c)??Ms[s],[f,u]=w1[s==="lead"?"lead":"others"];return Da(s,d,Math.round(f+o()*(u-f)))}function A1(s,t,e,n,{seed:i,reducedMotion:r}){const o={},a={},l=c=>new Set(Rh.filter(h=>h!==c).map(h=>o[h]?.act.spot??s[h]?.act.spot??e[h].to??e[h].spot));for(const c of Rh){if(!t.has(c))continue;const h=e[c],d=s[c];if(!d){const x=hd(c,0,{seed:i,reducedMotion:r}).ms,m=l(c);if(!h.walking&&Nc[c].includes(h.spot)&&!m.has(h.spot)){o[c]={n:0,act:Da(c,h.spot,x),since:n};continue}const g=m.has(Ms[c])?Nc[c].find(y=>!m.has(y))??Ms[c]:Ms[c];o[c]={n:0,act:Da(c,g,x),since:null},g!==Ms[c]&&(a[c]=g);continue}const f=!h.walking&&h.spot===d.act.spot,u=d.since??(f?n:null);if(u===null||n-u<d.act.ms){o[c]=u===d.since?d:{...d,since:u};continue}const p=hd(c,d.n+1,{seed:i,from:d.act.spot,taken:l(c),reducedMotion:r});o[c]={n:d.n+1,act:p,since:null},p.spot!==h.spot&&(a[c]=p.spot)}return{runs:o,to:a}}const R1=2.5,ud=3e3,Wi=(s,t=Number.NEGATIVE_INFINITY)=>({spot:s,since:t,walk:null,holdUntil:null,next:null}),Ff=s=>({x:$n[s].x,z:$n[s].z});function C1(s,t){const e=$n[s],n=e.viaW?[{x:e.viaW[0],z:e.viaW[1],leave:e.anchor}]:[];return[Ff(s),...n,...oa(e.anchor,t)]}const P1=s=>s.slice(1).reduce((t,e,n)=>t+Math.hypot(e.x-s[n].x,e.z-s[n].z),0);function Sh(s,t){let e=Math.max(0,t)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a.x-o.x,a.z-o.z);if(e<l-1e-9){const c=e/l;return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(a.x-o.x,a.z-o.z)}}e-=l}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:$n[s.to].ry}}function L1(s,t,e){const n=Sh(s,e-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...oa(r.node,t)]:r?.leave?[i,r,...oa(r.leave,t)]:[i,...oa($n[s.to].anchor,t)]}function Bf(s,t){return!s.walk||!Sh(s.walk,t-s.walk.startedAt).arrived?s:Wi(s.walk.to,s.walk.startedAt+P1(s.walk.path)/s.walk.speed*1e3)}const kf=(s,t,e,n)=>({...Wi(s,e),walk:{path:C1(s,t),to:t,startedAt:e,speed:n}});function Ll(s,t,e,n,i,r){const o=Bf(s,e);return o.walk?o.walk.to===t?o:i?Wi(t,e):{...o,walk:{path:L1(o.walk,t,e),to:t,startedAt:e,speed:n*R1}}:o.holdUntil!==null?t===o.spot?Wi(o.spot,o.since):{...o,next:t}:r&&o.spot===r&&t!==r&&e-o.since<ud?{...o,next:t,holdUntil:o.since+ud}:o.spot===t?o:i?Wi(t,e):kf(o.spot,t,e,n)}function dd(s,t,e,n){return s.walk?Bf(s,t):s.holdUntil===null||t<s.holdUntil?s:s.next?n?Wi(s.next,t):kf(s.spot,s.next,t,e):{...s,holdUntil:null}}function D1(s,t){return s.walk?Wi(s.walk.to,t):s.holdUntil!==null?Wi(s.next??s.spot,t):s}const fd=(s,t)=>s.holdUntil!==null&&t<s.holdUntil;function pd(s,t){if(!s.walk)return{...Ff(s.spot),heading:$n[s.spot].ry,walking:!1};const{x:e,z:n,heading:i,arrived:r}=Sh(s.walk,t-s.walk.startedAt);return{x:e,z:n,heading:i,walking:!r}}const{PI:nn}=Math,md=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};function I1(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:x,rr:m,pick:g,tiled:y,instanced:E}=s,{FLAGS:w,SPINNERS:I,skull:P,horns:v,flame:b,anvil:F,weaponRack:U,brazier:W,poleBanner:rt,skullPole:Q,barrel:N,well:it,bench:at,stall:q,lampPost:H,crate:nt,sack:ht,torch:bt,dummy:Zt,target:he,hay:ft,easel:Kt,candle:re,plantFlora:pe,bunk:Jt,chest:de,hangingBanner:We,table:fe,partition:Me,wolf:we,spikes:At,cart:qt,fence:ne,skullCandle:oe,tent:Ot,signPost:Pe}=t,{patch:$t}=e,{buildHouse:Ft,inH:Lt,outH:Gt,onWall:D}=n,jt=new gr({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),te=new gr({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:Wt,chimneyTop:Rt,emberBase:ee}=(()=>{const et=Ri.forge,K=new Et;K.position.set(et.x,0,et.z),r.add(K),r.add(i.forge);const dt=-.6,Dt=new Et;Dt.position.set(0,.16,dt),K.add(Dt),Dt.add(u(f(new Ai(1,24,0,nn),jt,!1),0,1.05,1.705)),Dt.add(u(f(new ln(2,1.05),jt,!1),0,.53,1.705)),Dt.add(u(f(new ln(1.4,.45),te,!1),0,.32,1.71));{const st=new Et;for(let lt=0;lt<4;lt++)st.add(u(f(new Ct(.9-lt*.08,.14,1.2-lt*.1),lt%2?o.redD:h("#5a3a2a")),0,.5+lt*.16,0));st.add(u(f(new Ct(1,.08,1.3),o.wood),0,.45,0)),st.add(p(u(f(new se(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,nn/2)),Dt.add(u(st,-2.9,0,.2))}const _=new ls("#ff8a3a",14,16,2);_.position.set(0,1.4,2.8),Dt.add(_),Dt.updateMatrixWorld(!0);const k=Dt.localToWorld(new z(0,10.9,-.5)),Y=Dt.localToWorld(new z(0,1,2));x(K,F(),-2.9,2.9,Cd(-2.9,2.9,-3.9,3.9)+nn/2,.16);{const st=new Et;st.add(u(f(new Ct(1.5,.55,.7),o.wood),0,.27,0)),st.add(p(u(f(new ln(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-nn/2,0,0)),x(K,st,3.5,3,-.5,.16)}const O=[];for(let st=0;st<40;st++)O.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});E(new Gi(1,0),O,{});for(let st=0;st<6;st++)K.add(u(f(new an(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));x(K,U(4),-5.3,-2,Math.atan2(5.3,2),.16),x(K,U(4),5.7,.9,-nn/2,.16);{const st=new Et;st.add(u(f(new Ct(.9,.5,.5),o.wood),0,.25,0));const lt=u(p(f(new se(.45,.45,.16,18),h("#8a8078")),0,0,nn/2),0,.8,0);st.add(lt),x(K,st,-4.8,.2,.4,.16)}for(const st of[.4,2,3.9,5.2])x(K,W(0),Math.cos(st)*6.9,Math.sin(st)*6.9,0,.16);return x(K,rt(4),-1.9,-3.8,0,.16),x(K,rt(4),1.9,-3.8,0,.16),x(K,Q(2.6),6,-3.6,0,.16),x(K,N(),-6,2,0,.16),{fireLight:_,chimneyTop:k,emberBase:Y}})();{const et=Ri.court,K=new Et;K.position.set(et.x,0,et.z),r.add(K),x(K,it(),-5.8,2),x(K,at(1.9,!0),-5.2,-4,0),x(K,q(),6.2,1.2,-nn/2);{const dt=new Et;for(const Dt of[-1,1])dt.add(u(f(new Ct(.12,2.2,.12),o.woodD),Dt*.8,1.1,0));dt.add(u(f(new Ct(1.8,1.1,.08),o.wood),0,1.55,0));for(let Dt=0;Dt<6;Dt++)dt.add(u(p(f(new ln(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+Dt%3*.6,1.8-Math.floor(Dt/3)*.5,.05));dt.add(p(u(f(new Ct(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),x(K,dt,5.6,-5.4,-nn/2)}x(K,H(6),-5.8,-1),x(K,N(),8,-.6),x(K,nt(.55),3.8,3.4,.3),x(K,ht(),4.4,3),x(K,Q(2.4),-7.8,6);{const dt=new Et;dt.add(u(f(new Ct(1.6,.5,.6),o.wood),0,.25,0)),dt.add(p(u(f(new ln(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-nn/2,0,0)),x(K,dt,-7.6,3.6,nn/2)}$t("dirt",et.x-4,et.z+.5,4.4,5.6,0,.013)}{const et=Ri.yard;if(et.kind==="house")throw new Error("the yard is an open area");const K=et.gate??0,dt=new Et;dt.position.set(et.x,0,et.z),r.add(dt),$t("sand",et.x,et.z,et.r+.6,et.r+.6,0,.014,5),dt.add(i.yard);{const Dt=new Et,_=Math.cos(K),k=Math.sin(K);Dt.position.set(_*et.r,0,k*et.r),Dt.rotation.y=Math.atan2(_,k);for(const Y of[-1,1])Dt.add(u(bt(),Y*1.55,2,.24));dt.add(Dt),x(dt,Q(2.6),_*(et.r+1.6)-k*2.2,k*(et.r+1.6)+_*2.2),x(dt,Q(2.2),_*(et.r+1.6)+k*2.2,k*(et.r+1.6)-_*2.2)}x(dt,Zt(),-3.2,2.1,nn),x(dt,Zt(),1.6,3.2,nn),x(dt,he(),4.4,3.6,Math.atan2(-4.4,-3.6)),x(dt,U(4),-5.4,-2.6,Math.atan2(5.4,2.6)),x(dt,ft(),-5.6,3.8,.4),x(dt,ft(),-4.8,4.7,1.2),x(dt,p(ft(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const Dt of[2,3.4,4.6])x(dt,rt(3.4),Math.cos(Dt)*(et.r-.7),Math.sin(Dt)*(et.r-.7),Math.atan2(-Math.cos(Dt),-Math.sin(Dt)));x(dt,at(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),x(dt,N(),-.6,-5.8),x(dt,W(0,.9),Math.cos(K)*(et.r-1.2)-Math.sin(K)*1.8,Math.sin(K)*(et.r-1.2)+Math.cos(K)*1.8)}const xt={x:-30,z:-20,r:2.6,mouthA:0},ct=l.ripple;ct.wrapS=ct.wrapT=Si;const C=new be("#1f5f8c"),S=new be("#6fb6d2"),Z=new be("#a6d8e6"),Mt="#bdb3c4",pt=et=>new qn({map:ct,color:Mt,vertexColors:!0,side:Sn,polygonOffset:!0,polygonOffsetFactor:-1-et,polygonOffsetUnits:-4-et*4}),Nt=new be;function zt(et,K,dt){const Dt=Math.hypot(et-xt.x,K-xt.z),_=md(1-Dt/xt.r);return Nt.copy(S).lerp(C,_*.95),dt&&Nt.lerp(Z,dt*md((Dt-xt.r)/1.2)*.45),[Nt.r*1.27,Nt.g*1.27,Nt.b*1.27]}const vt=2.2;{const Dt=[],_=[],k=[],Y=[],O=(A,yt)=>{Dt.push(A,.045,yt),_.push(...zt(A,yt,0)),k.push(A/vt,yt/vt)};O(xt.x,xt.z);for(let A=1;A<=5;A++)for(let yt=0;yt<72;yt++){const ot=yt/72*2*nn,M=xt.r*A/5;O(xt.x+Math.cos(ot)*M,xt.z+Math.sin(ot)*M)}for(let A=0;A<72;A++)Y.push(0,1+(A+1)%72,1+A);for(let A=1;A<5;A++)for(let yt=0;yt<72;yt++){const ot=1+(A-1)*72+yt,M=1+(A-1)*72+(yt+1)%72,R=ot+72,$=M+72;Y.push(ot,M,R,M,$,R)}const st=new gn;st.setAttribute("position",new Fe(Dt,3)),st.setAttribute("color",new Fe(_,3)),st.setAttribute("uv",new Fe(k,2)),st.setIndex(Y),r.add(f(st,pt(0),!1));const lt=ga,Ht=lt[0],me=Math.hypot(Ht[0]-xt.x,Ht[1]-xt.z),Re=(Ht[0]-xt.x)/me,ye=(Ht[1]-xt.z)/me;xt.mouthA=Math.atan2(ye,Re);const ze=[];for(let A=xt.r-1.2;A<me-.2;A+=.3)ze.push([xt.x+Re*A,xt.z+ye*A]);ze.push(...lt);const Ae=.7,Xt=xt.r*xt.r,ge=Math.sqrt(Xt-1.5*1.5),hn=xt.r+.8,En=-(ge/1.5)*(hn-ge),An=A=>{const yt=ze[A],ot=Math.hypot(yt[0]-xt.x,yt[1]-xt.z);if(ot<=ge)return Math.sqrt(Math.max(0,Xt-ot*ot))-.02;if(ot>=hn)return Ae;const M=(ot-ge)/(hn-ge),R=M*M,$=R*M;return(2*$-3*R+1)*1.48+($-2*R+M)*En+(-2*$+3*R)*Ae},T=[],L=[],G=[],J=[],ut=[-1,-.5,0,.5,1];for(let A=0;A<ze.length;A++){const yt=ze[Math.max(0,A-1)],ot=ze[Math.min(ze.length-1,A+1)],M=ze[A],R=Math.hypot(ot[0]-yt[0],ot[1]-yt[1])||1,$=-(ot[1]-yt[1])/R,B=(ot[0]-yt[0])/R,V=An(A);for(const mt of ut){const It=M[0]+$*mt*V,Bt=M[1]+B*mt*V;T.push(It,.05,Bt),L.push(...zt(It,Bt,Math.abs(mt))),G.push(It/vt,Bt/vt)}if(A>0)for(let mt=0;mt<4;mt++){const It=(A-1)*5+mt,Bt=It+1,kt=A*5+mt,ie=kt+1;J.push(It,kt,Bt,Bt,kt,ie)}}const wt=new gn;wt.setAttribute("position",new Fe(T,3)),wt.setAttribute("color",new Fe(L,3)),wt.setAttribute("uv",new Fe(G,2)),wt.setIndex(J),r.add(f(wt,pt(1),!1));const j=[];for(let A=1;A<ze.length-1;A+=2){const yt=ze[A];if(Math.hypot(yt[0]-xt.x,yt[1]-xt.z)<xt.r+.9)continue;const ot=ze[A-1],M=ze[A+1],R=Math.hypot(M[0]-ot[0],M[1]-ot[1])||1,$=-(M[1]-ot[1])/R,B=(M[0]-ot[0])/R,V=An(A)+.16;for(const mt of[-1,1])j.push({x:yt[0]+$*mt*V,y:.06,z:yt[1]+B*mt*V,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}E(new Gi(1,0),j,{})}for(const et of e.crossings){const K=i.bridge.clone();K.position.set(et.x,0,et.z),K.rotation.y=et.ang,K.scale.x=(et.len+.6)/3.4,r.add(K)}{const et=Ri.garden;if(et.kind==="house")throw new Error("the garden is an open area");const K=new Et;K.position.set(et.x,0,et.z),r.add(K);const dt=Math.atan2(4.6,5.6);K.add(i.garden);{const O=Math.cos(dt)*et.r,st=Math.sin(dt)*et.r,lt=new Et;lt.position.set(O,0,st),lt.rotation.y=Math.atan2(Math.cos(dt),Math.sin(dt)),lt.add(u(H(0).children[2].clone(),0,2.6,0)),K.add(lt)}const Dt=[],_=[];for(let O=0;O<26;O++){const st=O/26*2*nn;let lt=Math.abs(st-xt.mouthA);lt=Math.min(lt,2*nn-lt),!(lt<.62)&&Dt.push({x:xt.x+Math.cos(st)*2.75,y:.08,z:xt.z+Math.sin(st)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let O=0;O<7;O++)_.push({x:xt.x+m(-1.6,1.6),y:.065,z:xt.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});E(new Gi(1,0),Dt,{}),E(new se(.22,.22,.02,12),_,{}),x(K,Kt(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),x(K,at(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[O,st]of[[-5.6,-2.2],[4.9,-.6]]){const lt=new Et;lt.add(u(f(new se(.22,.28,.9,6),o.stone),0,.45,0)),lt.add(u(f(new Ct(.5,.36,.5),o.stone),0,1.08,0)),lt.add(u(f(new Ct(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),lt.add(u(f(new Pn(.48,.36,4),o.redD),0,1.44,0)),x(K,lt,O,st,nn/4)}{const O=new Et;O.add(u(f(new Ct(.9,.6,.6),o.stone),0,.3,0)),O.add(u(P(.26),0,.75,0));for(const st of[-1,1])O.add(u(re(.18),st*.3,.6,.12));x(K,O,-4.4,-5.4,Math.atan2(4.4,5.4))}pe("tree_willow",1,et.x-6.2,et.z-2.8),pe("tree_cherry",.95,et.x+5.3,et.z-4.9),pe("tree_fruit",.85,et.x-3,et.z+6.2);const k=[];let Y=0;for(;k.length<90&&Y<4e3;){Y++;const O=m(0,2*nn),st=m(5.3,6.7),lt=Math.cos(O)*st,Ht=Math.sin(O)*st;Math.min(Math.abs(O-dt),2*nn-Math.abs(O-dt))<.35||Math.hypot(lt-3,Ht+3.4)<1.3||Math.hypot(lt-2.2,Ht+4.3)<1||k.push({x:et.x+lt,y:.18,z:et.z+Ht,sx:.9,sy:.9,sz:.9,c:g([a.red,a.bone,"#d98a3a",a.redL,"#e8c860"])})}E(new an(.11,8,6),k,{})}const Tt=y(l.water,1,6),Pt=[];{const et=ga,[K,dt]=et[et.length-1],[Dt,_]=et[et.length-3],k=Math.hypot(K-Dt,dt-_),Y=(K-Dt)/k,O=(dt-_)/k,st=new Ve(new ln(1.4,40),new qn({map:Tt,color:"#acb5c8",transparent:!0,opacity:.85,side:Sn,depthWrite:!1}));st.position.set(K+Y*.9,-20+.05,dt+O*.9),st.rotation.y=Math.atan2(Y,O),r.add(st);const lt=new us({map:l.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let Ht=0;Ht<9;Ht++){const me=new Vi(lt);me.position.set(K+Y*m(1,2.4),m(-38,-30),dt+O*m(1,2.4)+m(-1,1)),me.scale.setScalar(m(3,5.5)),r.add(me),Pt.push(me)}for(let Ht=0;Ht<4;Ht++){const me=new Vi(lt);me.position.set(K+Y*1,m(-.6,.3),dt+O*1+m(-.5,.5)),me.scale.setScalar(m(1,1.6)),r.add(me),Pt.push(me)}}for(const et of kc)if(et.kind==="hut"){const K=Ft({...et,wallH:2.5},{id:et.id,pitch:.66,chimney:et.id==="barracks"?[1.4,-.6]:null});if(et.id==="barracks"&&(Lt(K,Jt(),-1.6,-.9),Lt(K,Jt(),.4,-.9),Lt(K,de(),2.2,-1.6,-nn/2),Lt(K,W(0,.7),2.3,1.2),D(K,"W",U(3),0,Ye,.3),D(K,"S",We(.8,1.3),1.6,Ye+2.3,.04)),et.id==="store"){Lt(K,fe(1.6,.6,.9,o.wood),-1.2,-1.3);for(let dt=0;dt<4;dt++)Lt(K,nt(.45),-1.8+dt*.4,-1.3).position.y=Ye+.95;Lt(K,N(),1.6,-1.2),Lt(K,N(.9),1.9,-.4),Lt(K,ht(),.6,-1.3),Lt(K,ht(),1,.6),Lt(K,nt(.6),-1.8,.8,.3)}if(et.id==="stable"){const dt=f(new ln(et.w-.6,et.d-.6),o.straw,!1);dt.rotation.x=-nn/2,Lt(K,dt,0,0).position.y=Ye+.01;for(const Dt of[-1,1.2])Lt(K,Me(2.2,1.1),Dt,-.6);Lt(K,we(),-2.2,-.3,.4),Lt(K,we(),.1,-.5,-.5).scale.setScalar(.9),Lt(K,ft(),2.4,-1,.2);{const Dt=new Et;Dt.add(u(f(new Ct(1.2,.4,.45),o.wood),0,.2,0)),Dt.add(p(u(f(new ln(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-nn/2,0,0)),Lt(K,Dt,2.2,1)}}if(et.id==="granary"){for(let dt=0;dt<6;dt++)Lt(K,ht(),-1.4+dt%3*.5,-1.2+Math.floor(dt/3)*.55);Lt(K,N(),1.5,-1.1);{const dt=f(new Ct(1.2,.8,.8),o.wood);dt.position.y=.4;const Dt=new Et;Dt.add(dt),Dt.add(u(f(new Ct(1.1,.05,.7),o.straw),0,.78,0)),Lt(K,Dt,1.2,.7)}}et.id==="barracks"&&(Gt(K,U(4),-1.4,3.3),Gt(K,At(2.6),3.8,3,.6),Gt(K,rt(3),3.6,.6),Gt(K,Q(2.4),-3.8,2.4)),et.id==="store"&&(Gt(K,nt(.7),-1.6,2.8,.2),Gt(K,nt(.5),-.9,3.1,.7),Gt(K,ht(),.6,2.9),Gt(K,ht(),1.1,3.2),Gt(K,N(),2.3,2.9)),et.id==="stable"&&(Gt(K,ft(),-2.8,2.6,.3),Gt(K,ft(),-2,3,1.1),Gt(K,qt(),2,3.4,-.3),ne(K.g,[[-3.2,4.4],[3.2,4.4]],.9)),et.id==="granary"&&(Gt(K,ht(),-1.2,2.6),Gt(K,ht(),-.6,2.9),Gt(K,ht(),-1,3.3),Gt(K,N(.9),1.6,2.7))}else if(et.kind==="windmill"){const K=new Et;K.position.set(et.x,0,et.z),K.add(u(f(new se(1.7,2.4,6.6,18),h("#ffffff",{map:y(l.castleWall,3,2.2)})),0,3.3,0)),K.add(u(f(new Pn(2.3,2.8,18),h("#ffffff",{map:y(l.roof,4,1.5)})),0,7.9,0)),K.add(u(f(new Ct(1,1.7,.2),o.woodD),0,.85,2.25));for(const[Dt,_]of[[.6,3.6],[-.9,4.8]])K.add(u(p(f(new Ct(.5,.6,.1),o.pane,!1),0,Dt,0),Math.sin(Dt)*2,_,Math.cos(Dt)*2));const dt=u(new Et,0,6.2,2);dt.add(p(f(new se(.22,.22,.5,10),o.woodD),nn/2,0,0));for(let Dt=0;Dt<4;Dt++){const _=new Et;_.rotation.z=Dt*nn/2,_.add(u(f(new Ct(.12,4.4,.08),o.woodD),0,2.3,.2)),_.add(u(f(new Ct(.9,3.4,.04),h("#e3d5b6",{side:Sn})),.5,2.6,.24)),_.add(u(f(new Ct(.06,3.4,.06),o.wood),.95,2.6,.26)),dt.add(_)}K.add(dt),I.push({o:dt,axis:"z",v:.5}),K.add(u(ht(),-1.6,0,2.6)),K.add(u(ht(),-2.2,0,2.2)),r.add(K)}else if(et.kind==="watch"){const K=new Et;K.position.set(et.x,0,et.z),K.add(i.watch),K.add(u(W(0,.7),.6,6.5,-.6)),r.add(K)}else if(et.kind==="shrine"){const K=new Et;K.position.set(et.x,0,et.z),K.add(i.altar);for(const dt of[.9,2.5,4.1,5.6])K.add(u(oe(),Math.cos(dt)*1.4,0,Math.sin(dt)*1.4));K.add(u(W(0,.8),1.6,0,1.4)),r.add(K),$t("dirt",et.x,et.z,3.4,3.4,0,.013)}else{const K=new Et;K.position.set(et.x,0,et.z),K.add(u(p(Ot(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),K.add(u(p(Ot(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let dt=0;dt<8;dt++){const Dt=dt/8*2*nn;K.add(u(f(new Gi(.18,0),o.stone),Math.cos(Dt)*.55,.1,Math.sin(Dt)*.55))}for(let dt=0;dt<3;dt++)K.add(p(u(f(new se(.07,.07,.8,6),o.woodD),0,.12,0),nn/2,dt*1.05,0));b(K,0,.12,0,1.8);for(const dt of[.6,2.4,4.4])K.add(u(p(f(new se(.2,.2,1.4,8),o.wood),0,-dt,nn/2),Math.cos(dt)*1.6,.2,Math.sin(dt)*1.6));K.add(u(Q(2.4),-3.2,0,-1.2)),K.add(u(N(),3.1,0,-.8)),r.add(K),$t("dirt",et.x,et.z,4.2,4,0,.013)}function X(et,K,dt,Dt=.018,_=o.dark){const k=new z(...K),Y=new z(...dt),O=k.distanceTo(Y),st=f(new se(Dt,Dt,O,5),_,!1);return st.position.copy(k).add(Y).multiplyScalar(.5),st.quaternion.setFromUnitVectors(c,Y.clone().sub(k).normalize()),et.add(st),st}function _t(){const et=new Et,K=f(new an(1,22,12,0,nn*2,nn/2,nn/2),h("#ffffff",{map:l.planks}));K.scale.set(2.7,1,1.15),et.add(K);const dt=f(new se(1,1,.1,24),o.woodL);dt.scale.set(2.62,1,1.1),et.add(u(dt,0,.02,0));const Dt=f(new Cn(1,.06,6,36),o.woodD);Dt.rotation.x=nn/2,Dt.scale.set(2.68,1.13,1),Dt.position.y=.14,et.add(Dt),et.add(p(u(f(new se(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),et.add(u(p(P(.32),0,nn/2,0),2.75,.32,0)),et.add(u(p(v(.8),0,nn/2,0),2.75,.42,0)),et.add(u(f(new se(.07,.09,2.8,8),o.woodD),.3,1.4,0));const _=u(new Et,.3,2.85,0);_.add(u(f(new Ct(.9,.36,.02),o.red),.45,0,0)),et.add(_),w.push(_);const k=u(new Et,-1.5,.06,0);k.add(u(f(new Ct(1.1,.8,1.1),h("#ffffff",{map:l.planks})),0,.4,0)),k.add(u(p(f(new se(.75,.75,1.3,3),h("#ffffff",{map:l.roof})),0,0,nn/2),0,1.05,0)),k.add(u(f(new Ct(.3,.3,.04),o.pane,!1),.56,.5,0)),et.add(k);const Y=f(new an(1,24,16),h("#ffffff",{map:l.balloon}));Y.scale.set(3.6,1.5,1.7),Y.position.y=4.4,et.add(Y);const O=f(new Cn(1,.05,6,40),o.bone);O.rotation.x=nn/2,O.scale.set(3.62,1.72,1),O.position.y=4.1,et.add(O);for(const[lt,Ht,me,Re]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])X(et,[lt,4.05,Ht],[me,.16,Re]);const st=u(new Et,-2.95,.65,0);st.add(p(f(new se(.1,.1,.3,8),o.iron),0,0,nn/2));for(let lt=0;lt<3;lt++){const Ht=u(new Et,0,0,0);Ht.rotation.x=lt/3*nn*2,Ht.add(u(p(f(new Ct(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),st.add(Ht)}et.add(st),I.push({o:st,axis:"x",v:7}),et.add(u(f(new Ct(.06,.9,.7),o.redD),-2.75,.1,0));for(const lt of[2.4,-2.4])et.add(u(f(new an(.1,8,6),d("#ffc070",2.2),!1),lt,.5,0));return et.add(u(nt(.45),1.3,.07,.4)),et.add(u(N(.6),1.2,.07,-.45)),et}const gt=_t(),Yt=_t();{const et=Ps.find(Re=>Re.id==="dock");if(!et)throw new Error("no dock road");const K=et.line,[dt,Dt]=K[K.length-1],[_,k]=K[K.length-4],Y=Math.hypot(dt-_,Dt-k),O=(dt-_)/Y,st=(Dt-k)/Y,lt=new Et;lt.position.set(dt,0,Dt),lt.rotation.y=Math.atan2(O,st),r.add(lt),lt.add(i.dock),lt.add(u(nt(.55),2.8,1.17,6.8));for(const[Re,ye]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])lt.add(u(f(new an(.12,8,6),d("#ffc070",2.2),!1),Re,1.32,ye));lt.add(u(nt(.6),-.85,.22,1.3)),lt.add(u(nt(.45),-.75,.22,2)),lt.add(u(N(.85),.85,.22,1)),lt.add(u(ht(),.6,.22,3.6)),lt.add(u(rt(3.4),-1.45,.22,.4)),gt.position.set(4.1,-.4,5.6),gt.rotation.y=-nn/2,lt.add(gt);const Ht=f(new Ct(1.6,.08,.7),o.woodL);Ht.position.set(2.3,.05,5.6),Ht.rotation.z=-.18,lt.add(Ht);const me=u(new Et,-4.6,0,-3.8);me.add(u(bt(),-.2,1.6,1.3)),me.add(u(nt(.6),1.9,0,.8)),me.add(u(N(),1.8,0,-.4)),lt.add(me),lt.add(u(p(Pe("SKY DOCK"),0,nn/2,0),2.2,0,-2.4)),r.add(Yt),Yt.scale.setScalar(1.5),Yt.userData={a:1.2,r:96,y:15}}{const et=new Et;et.position.set(-44,0,26),r.add(et);for(const[K,dt,Dt]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])et.add(u(p(Ot(1.8,2.6,Dt),0,Math.atan2(-K,-dt),0),K,0,dt));for(let K=0;K<8;K++){const dt=K/8*2*nn;et.add(u(f(new Gi(.18,0),o.stone),Math.cos(dt)*.55,.1,Math.sin(dt)*.55))}b(et,0,.1,0,1.8),et.add(u(Q(2.6),3.6,0,1.8)),et.add(u(rt(3),-3.6,0,1.6)),et.add(u(p(At(3),0,.6,0),4.6,0,-2.6)),$t("dirt",-44,26,5,4.6,.3,.013)}return $t("field",54,-8,6.5,4.2,.35,.013,3),$t("field",51,6,5.2,3.6,-.2,.013,3),$t("field",10,-44.5,6,3.6,.1,.013,3),x(r,Zt(),55.5,-2.6,.4),x(r,ft(),48.6,-12.6,.4),x(r,ft(),49.4,-11.8,1.3),{mouthMat:jt,coreMat:te,fireLight:Wt,chimneyTop:Rt,emberBase:ee,waterTex:ct,fallTex:Tt,mists:Pt,skyBoat:gt,airship:Yt}}const N1=[3,5,7,9,11];function U1(s){const t=[];for(let e=0;e<s;e++)t.push(.39894*Math.exp(-.5*e*e/(s*s))/s);return new ri({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}const O1=`

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

		}`,F1=`varying vec2 vUv;
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
				}`;function B1(s){s.separableBlurMaterials.forEach((t,e)=>{t.dispose(),s.separableBlurMaterials[e]=U1(N1[e]??3)}),s.materialHighPassFilter.fragmentShader=O1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=F1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function k1(s){const t=new Map,e=new Map,n=s.clone();return zf(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zf(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)zf(s.children[n],t.children[n],e)}class Gf extends Sr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new W1(e)}),this.register(function(e){return new X1(e)}),this.register(function(e){return new Y1(e)}),this.register(function(e){return new ey(e)}),this.register(function(e){return new ny(e)}),this.register(function(e){return new iy(e)}),this.register(function(e){return new K1(e)}),this.register(function(e){return new Z1(e)}),this.register(function(e){return new J1(e)}),this.register(function(e){return new $1(e)}),this.register(function(e){return new V1(e)}),this.register(function(e){return new Q1(e)}),this.register(function(e){return new q1(e)}),this.register(function(e){return new ty(e)}),this.register(function(e){return new j1(e)}),this.register(function(e){return new G1(e)}),this.register(function(e){return new gd(e,sn.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new gd(e,sn.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new sy(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=to.extractUrlBase(t);o=to.resolveURL(c,this.path)}else o=to.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Mf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Hf){try{o[sn.KHR_BINARY_GLTF]=new ry(t)}catch(d){i&&i(d);return}r=JSON.parse(o[sn.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case sn.KHR_MATERIALS_UNLIT:o[d]=new H1;break;case sn.KHR_DRACO_MESH_COMPRESSION:o[d]=new oy(r,this.dracoLoader);break;case sn.KHR_TEXTURE_TRANSFORM:o[d]=new ay;break;case sn.KHR_MESH_QUANTIZATION:o[d]=new ly;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function z1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Tn(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const sn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class G1{constructor(t){this.parser=t,this.name=sn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],mi);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Sf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ls(h),c.distance=d;break;case"spot":c=new Lm(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class H1{constructor(){this.name=sn.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(t,e,n){const i=[];t.color=new be(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],mi),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Nn))}return Promise.all(i)}}class V1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class W1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ut(r,r)}return Promise.all(i)}}class X1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class Y1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class q1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class K1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SHEEN}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new be(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],mi)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Nn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Z1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class J1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_VOLUME}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new be().setRGB(r[0],r[1],r[2],mi),Promise.all(i)}}class $1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_IOR}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class Q1{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new be().setRGB(r[0],r[1],r[2],mi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Nn)),Promise.all(i)}}class j1{constructor(t){this.parser=t,this.name=sn.EXT_MATERIALS_BUMP}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class ty{constructor(t){this.parser=t,this.name=sn.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Tn(this.parser,t,this.name)!==null?Ii:null}extendMaterialParams(t,e){const n=Tn(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class ey{constructor(t){this.parser=t,this.name=sn.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class ny{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class iy{constructor(t){this.parser=t,this.name=sn.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class gd{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class sy{constructor(t){this.name=sn.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const x=new Be,m=new z,g=new bn,y=new z(1,1,1),E=new uo(p.geometry,p.material,f);for(let I=0;I<f;I++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,I),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,I),l.SCALE&&y.fromBufferAttribute(l.SCALE,I),E.setMatrixAt(I,x.compose(m,g,y));let w=null;for(const I in l)if(I==="_COLOR_0"){const P=l[I];E.instanceColor=new Ta(P.array,P.itemSize,P.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(w===null){const v=E.geometry;w=new gn,w.name=v.name;for(const b in v.attributes)w.setAttribute(b,v.attributes[b]);for(const b in v.morphAttributes)w.morphAttributes[b]=v.morphAttributes[b];v.index!==null&&w.setIndex(v.index),w.morphTargetsRelative=v.morphTargetsRelative;for(const b of v.groups)w.addGroup(b.start,b.count,b.materialIndex);v.boundingBox!==null&&(w.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(w.boundingSphere=v.boundingSphere.clone()),w.drawRange.start=v.drawRange.start,w.drawRange.count=v.drawRange.count,w.userData=Object.assign({},v.userData),E.geometry=w}const P=l[I];w.setAttribute(I,new Ta(P.array,P.itemSize,P.normalized))}yn.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),u.push(E)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Hf="glTF",Br=12,_d={JSON:1313821514,BIN:5130562};class ry{constructor(t){this.name=sn.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Br,r=new DataView(t,Br);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===_d.JSON){const c=new Uint8Array(t,Br+o,a);this.content=n.decode(c)}else if(l===_d.BIN){const c=Br+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=sn.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Uc[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=Uc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],u=hr[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const x=u.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(u)},a,c,mi,f)})})}}class ay{constructor(){this.name=sn.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class ly{constructor(){this.name=sn.KHR_MESH_QUANTIZATION}}class Vf extends vr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,d=(n-e)/h,f=d*d,u=f*d,p=t*c,x=p-c,m=-2*u+3*f,g=u-f,y=1-m,E=g-f+d;for(let w=0;w!==a;w++){const I=o[x+w+a],P=o[x+w+l]*h,v=o[p+w+a],b=o[p+w]*h;r[w]=y*I+E*P+m*v+g*b}return r}}const cy=new bn;class hy extends Vf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return cy.fromArray(r).normalize().toArray(r),r}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xd={9728:Un,9729:Yn,9984:Nd,9985:aa,9986:Hr,9987:Hi},vd={33071:si,33648:xa,10497:Si},Dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uy={CUBICSPLINE:void 0,LINEAR:oo,STEP:ro},Il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ss})),s.DefaultMaterial}function Cs(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Bi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function fy(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(n){const f=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function py(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function my(s){let t;const e=s.extensions&&s.extensions[sn.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Nl(e.attributes):t=s.indices+":"+Nl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Nl(s.targets[n]);return t}function Nl(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Oc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const _y=new Be;class xy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new z1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Rm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Nm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Cs(r,a,i),Bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[sn.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(to.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Dl[i.type],a=hr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Vn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Dl[i.type],c=hr[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(u&&u!==d){const g=Math.floor(f/u),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=e.cache.get(y);E||(x=new c(a,g*u,i.count*u/h),E=new Qd(x,u/h),e.cache.add(y,E)),m=new ho(E,l,f%u/h,p)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new Vn(x,l,p);if(i.sparse!==void 0){const g=Dl.SCALAR,y=hr[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,I=new y(o[1],E,i.sparse.count*g),P=new c(o[2],w,i.sparse.count*l);a!==null&&(m=new Vn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,b=I.length;v<b;v++){const F=I[v];if(m.setX(F,P[v*l]),l>=2&&m.setY(F,P[v*l+1]),l>=3&&m.setZ(F,P[v*l+2]),l>=4&&m.setW(F,P[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=xd[f.magFilter]||Yn,h.minFilter=xd[f.minFilter]||Hi,h.wrapS=vd[f.wrapS]||Si,h.wrapT=vd[f.wrapT]||Si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Un&&h.minFilter!==Yn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){e.parse(f,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let x=u;e.isImageBitmapLoader===!0&&(x=function(m){const g=new kn(m);g.needsUpdate=!0,u(g)}),e.load(to.resolveURL(f,r.path),x,void 0,p)})})}const d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),Bi(f,o),f.userData.mimeType=o.mimeType||gy(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[sn.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[sn.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[sn.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $r,pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ef,pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return gr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[sn.KHR_MATERIALS_UNLIT]){const d=i[sn.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,e))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],mi),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",d.baseColorTexture,Nn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Sn);const h=r.alphaMode||Il.OPAQUE;if(h===Il.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Il.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ut(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==qn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qn){const d=r.emissiveFactor;a.emissive=new be().setRGB(d[0],d[1],d[2],mi)}return r.emissiveTexture!==void 0&&o!==qn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Nn)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Bi(d,r),e.associations.set(d,{materials:t}),r.extensions&&Cs(i,d,r),d})}createUniqueName(t){const e=mn.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[sn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Md(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=my(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[sn.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Md(new gn,c,e),c.mode===vi.TRIANGLE_STRIP?f=f.then(u=>ad(u,Gd)):c.mode===vi.TRIANGLE_FAN&&(f=f.then(u=>ad(u,Sc))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?dy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const x=h[u],m=o[u];let g;const y=c[u];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,w=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&w?new b0(x,y):new Ve(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===vi.LINES)g=new A0(x,y);else if(m.mode===vi.LINE_STRIP)g=new lh(x,y);else if(m.mode===vi.LINE_LOOP)g=new R0(x,y);else if(m.mode===vi.POINTS)g=new Vr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&py(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),Bi(g,r),m.extensions&&Cs(i,g,m),e.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)e.associations.set(d[u],{meshes:t,primitives:u});if(d.length===1)return r.extensions&&Cs(i,d[0],r),d[0];const f=new Et;r.extensions&&Cs(i,f,r),e.associations.set(f,{meshes:t});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new li(wa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ha(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Bi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const f=new Be;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new oh(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let E=0,w=f.length;E<w;E++){const I=f[E],P=u[E],v=p[E],b=x[E],F=m[E];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const U=n._createAnimationTracks(I,P,v,b,F);if(U)for(let W=0;W<U.length;W++)g.push(U[W])}const y=new Rc(r,void 0,g);return Bi(y,i),y})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,_y)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new z().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new tf:c.length>1?h=new Et:c.length===1?h=c[0]:h=new yn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&Cs(n,h,r),r.matrix!==void 0){const d=new Be;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Et;n.name&&(r.name=i.createUniqueName(n.name)),Bi(r,n),n.extensions&&Cs(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(k1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof pi||f instanceof kn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}xs[r.path]===xs.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(xs[r.path]){case xs.weights:h=vo;break;case xs.rotation:h=Mo;break;case xs.translation:case xs.scale:h=Pa;break;default:n.itemSize===1?h=vo:h=Pa;break}const d=i.interpolation!==void 0?uy[i.interpolation]:oo,f=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const x=new h(l[u]+"."+xs[r.path],e.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Oc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Mo?hy:Vf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vy(s,t,e){const n=t.attributes,i=new Yi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const h=Oc(hr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=e.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const x=Oc(hr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new qi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Md(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Uc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return rn.workingColorSpace!==mi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rn.workingColorSpace}" not supported.`),Bi(s,t),vy(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?fy(s,t.targets,e):s})}const My="/assets/altar-BLnKV2Du.glb",yy="/assets/backend-0N1rHeCk.glb",Sy="/assets/bridge-ETZK_L1i.glb",by="/assets/designer-DbLc0S5w.glb",wy="/assets/dock-Dz4b5cxY.glb",Ty="/assets/flora-7jxy9LaY.glb",Ey="/assets/forge-DNia5kCh.glb",Ay="/assets/frontend-BagVIkFr.glb",Ry="/assets/garden-iFD0puy8.glb",Cy="/assets/gate-CLzj2aEg.glb",Py="/assets/house_library-a_INcIO_.glb",Ly="/assets/house_studio-prPn7xt-.glb",Dy="/assets/house_tavern-DhJciONJ.glb",Iy="/assets/house_war-CErgsJUC.glb",Ny="/assets/house_workshop-DizOAfBl.glb",Uy="/assets/lead-B8dKTGTU.glb",Oy="/assets/reviewer-CjFLqSzL.glb",Fy="/assets/towers-DiePBDd1.glb",By="/assets/underside-CtDt-w8A.glb",ky="/assets/walls-DL6hLM5P.glb",zy="/assets/watch-D_FLfKo1.glb",Gy="/assets/yard-BCXHtimJ.glb",Hy="/assets/backend-BO6EdEPd.jpg",Vy="/assets/designer-3Dfjr5eY.jpg",Wy="/assets/frontend-ChC8gXK4.jpg",Xy="/assets/lead-BVut_pmU.jpg",Yy="/assets/reviewer-r8WJ7XTx.jpg",qy=Object.assign({"../models/altar.glb":My,"../models/backend.glb":yy,"../models/bridge.glb":Sy,"../models/designer.glb":by,"../models/dock.glb":wy,"../models/flora.glb":Ty,"../models/forge.glb":Ey,"../models/frontend.glb":Ay,"../models/garden.glb":Ry,"../models/gate.glb":Cy,"../models/house_library.glb":Py,"../models/house_studio.glb":Ly,"../models/house_tavern.glb":Dy,"../models/house_war.glb":Iy,"../models/house_workshop.glb":Ny,"../models/lead.glb":Uy,"../models/reviewer.glb":Oy,"../models/towers.glb":Fy,"../models/underside.glb":By,"../models/walls.glb":ky,"../models/watch.glb":zy,"../models/yard.glb":Gy}),Fc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},zi=["lead","designer","frontend","backend","reviewer"],Ky=Object.assign({"../models/backend.jpg":Hy,"../models/designer.jpg":Vy,"../models/frontend.jpg":Wy,"../models/lead.jpg":Xy,"../models/reviewer.jpg":Yy});function bh(s){const t=qy[`../models/${s}.glb`];if(!t)throw new Error(`no model ${s} in the bundle`);return t}function Zy(s){const t=Ky[`../models/${s}`];if(!t)throw new Error(`no texture ${s} in the bundle`);return t}const Ul=new Be,Jy=new Be;function Wf(s){const t=new Set;return s.scene.traverse(e=>{const n=e.userData.woa_q;if(n&&(Ul.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),e.matrix.compose(e.position,e.quaternion,e.scale).multiply(Jy.copy(Ul).invert()),e.matrix.decompose(e.position,e.quaternion,e.scale)),!(e instanceof Ve)||t.has(e.geometry))return;const i=e.geometry;t.add(i);for(const[o,a]of Object.entries(i.attributes)){if(o==="skinIndex"||a.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in a))continue;const l=a.itemSize,c=new Float32Array(a.count*l);for(let h=0;h<a.count;h++)c[h*l]=a.getX(h),l>1&&(c[h*l+1]=a.getY(h)),l>2&&(c[h*l+2]=a.getZ(h)),l>3&&(c[h*l+3]=a.getW(h));i.setAttribute(o,new Vn(c,l))}const r=n||e.parent?.userData.woa_q;r&&i.applyMatrix4(Ul.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function Xf(s,t){const e=t,n=e.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((e.emissiveIntensity||1)*40)/100)):s.toon("#"+e.color.getHexString())}const $y=s=>s.isMeshStandardMaterial===!0;function Yf(s,t){const e=new Map;return t.traverse(n=>{if(!(n instanceof Ve))return;const i=Xf(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.applyMatrix4(n.matrixWorld);const a=e.get(i);a?a.push(o):e.set(i,[o])}),e}function Qy(s,t){t.scene.updateMatrixWorld(!0);const e=new Et;for(const[n,i]of Yf(s,t.scene)){const r=i.length===1?i[0]:Mh(i,!1);if(!r)continue;const o=new Ve(r,n);o.castShadow=!$y(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,e.add(o)}return e}function qf(s,t){let e=null;return s.scene.traverse(n=>{!e&&(n.userData.name===t||n.name===t)&&(e=n)}),e}async function jy(){const s=new Gf,t=Object.keys(Fc),e=await Promise.all(t.map(n=>s.loadAsync(bh(n)).then(Wf)));return Object.fromEntries(t.map((n,i)=>[n,e[i]]))}function tS(s,t){const e={};for(const n of Object.keys(Fc)){const i=t[n];e[n]=Fc[n]==="static"?Qy(s,i):i}return e}const nr={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function eS(s,t){const e=.075*s/1.8,n=(t-e)*.5;return Math.max(.5,n+e-.02)}const Ol={intensity:2.5,distance:4},nS=.59;function iS(s){const t=bh(s),e=new vf;return e.setURLModifier(n=>n===t?n:Zy(n.slice(n.lastIndexOf("/")+1))),new Gf(e)}async function sS(){const s=await Promise.all(zi.map(t=>iS(t).loadAsync(bh(t)).then(Wf)));return s.forEach((t,e)=>{t.scene.traverse(n=>{if(n instanceof Ve&&!n.material.map)throw new Error(`the ${zi[e]} model's texture did not load`)})}),Object.fromEntries(zi.map((t,e)=>[t,s[e]]))}function rS(s){const t=_a.filter(n=>n.kind==="house"),e=Ri.forge;return(n,i)=>{for(const r of t){const[o,a]=eo(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(a)<r.d/2+.1)return Ye;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&a>r.deck[2]&&a<r.deck[3])return .2}if(Math.hypot(n-e.x,i-e.z)<7.8)return .16;for(const r of s){const o=n-r.x,a=i-r.z,l=(r.len+.6)/2,c=o*Math.cos(r.ang)-a*Math.sin(r.ang),h=o*Math.sin(r.ang)+a*Math.cos(r.ang);if(Math.abs(c)<l&&Math.abs(h)<.6)return .12+.32*(1-(c/l)**2)}return .02}}const oS=.055,Ia=new z,qr=new z,yd=new z,aS=new z,ma=new z,Fl=new z,lS=new z,Sd=new bn,bd=new bn,Na=new bn,wd=new bn,Bl=new bf;function Td(s,t,e){Sd.setFromUnitVectors(t,e),s.getWorldQuaternion(bd),s.parent.getWorldQuaternion(Na).invert(),s.quaternion.copy(Na.multiply(Sd).multiply(bd)),s.updateMatrixWorld(!0)}function cS(s,t,e,n){const i=s.up.getWorldPosition(qr),r=s.low.getWorldPosition(yd),o=s.foot.getWorldPosition(Ia);s.foot.getWorldQuaternion(wd);const a=i.distanceTo(r),l=r.distanceTo(o),c=ma.set(o.x,t+e,o.z).sub(i),h=wa.clamp(c.length(),Math.abs(a-l)+1e-4,a+l-1e-4);c.normalize();const d=Fl.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=wa.clamp((a*a+h*h-l*l)/(2*a*h),-1,1),u=lS.copy(i).addScaledVector(c,a*f).addScaledVector(d,a*Math.sqrt(1-f*f)),p=aS.copy(i).addScaledVector(c,h);Td(s.up,Fl.subVectors(r,i).normalize(),ma.subVectors(u,i).normalize());const x=s.low.getWorldPosition(yd),m=s.foot.getWorldPosition(Ia);Td(s.low,Fl.subVectors(m,x).normalize(),ma.subVectors(p,x).normalize()),s.foot.parent.getWorldQuaternion(Na).invert(),s.foot.quaternion.copy(Na.multiply(wd)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function hS(s,t,e,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of zi){const f=new Et;f.userData.agentId=d,t.add(f);const u=$n[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:x,speed:m}=nr[d],g=e[d],y=g.scene;y.updateMatrixWorld(!0);const E=new Yi().setFromObject(y),w=p/Math.max(.01,E.max.y-E.min.y);y.scale.setScalar(w);const I=-E.min.y*w;y.position.y=I;const P=new Map;y.traverse(H=>{if(!(H instanceof Ve))return;const nt=H.material;let ht=P.get(nt);ht||(nt.map&&(nt.map.colorSpace=Nn),ht=i("#ffffff",{map:nt.map??null}),P.set(nt,ht)),H.material=ht,H.castShadow=!0,H.receiveShadow=!0,H.frustumCulled=!1,H.raycast=()=>{}});let v=null,b=null;if(d==="reviewer"){v=new ls("#6dffa0",Ol.intensity,Ol.distance,2),v.position.set(-.18,2.2,.35),f.add(v);const H=y.getObjectByName("mixamorigRightHand");if(!H)throw new Error("the reviewer model has no right hand");const nt=new Et,ht=new Et;nt.add(ht);const bt=new Vi(new us({map:n.flameTex,color:new be(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));bt.center.set(.5,.05),bt.scale.set(.16,.3,1),bt.position.y=.02;const Zt=new Vi(new us({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:Ei}));Zt.scale.setScalar(.25),Zt.position.y=.08,bt.raycast=()=>{},Zt.raycast=()=>{},ht.add(bt,Zt),H.add(nt),y.updateMatrixWorld(!0),nt.scale.setScalar(1/H.getWorldScale(new z).x),b={group:nt,flicker:ht}}const F={};for(const H of g.animations){const nt=H.tracks.find(ht=>/Hips\.position$/.test(ht.name));nt&&(F[H.name]=nt.values[1]*w)}const U=new Jm(y),W={};for(const H of g.animations){const nt=U.clipAction(H);nt.enabled=!0,nt.setEffectiveTimeScale(1),nt.setEffectiveWeight(H.name==="idle"?1:0),nt.time=Math.random()*H.duration,nt.play(),W[H.name]=nt}if(!W.idle||!W.walk||!W.sit||!W.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const rt=Math.min(2.6,Math.max(.8,m/(nS*p)));W.walk.timeScale=rt,U.update(0);const Q=H=>y.getObjectByName("mixamorig"+H),N=["Left","Right"].map(H=>({up:Q(H+"UpLeg"),low:Q(H+"Leg"),foot:Q(H+"Foot")}));y.updateMatrixWorld(!0);const it=N.every(H=>H.up&&H.low&&H.foot)?N.map(H=>({up:H.up,low:H.low,foot:H.foot,saved:[new bn,new bn,new bn]})):null,at=it?Math.min(...it.map(H=>H.foot.getWorldPosition(Ia).y)):0,q=Q("Hips");if(!q)throw new Error(`the ${d} model has no hips`);f.add(y),o[d]={id:d,root:f,H:p,seatY:eS(p,x),phase:n.phases[d],model:{obj:y,mixer:U,acts:W,cur:"idle",baseY:I,walkScale:rt,seat:F,hips:q,legs:it,ankleH:at,bent:!1,ikW:0},lantern:v,lamp:b}}const a=new Map;function l(d,f,u,p){const x=a.get(d);if(x!==void 0)return x;const m=[];for(const[y,E]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){Bl.set(Ia.set(f+y,p+1.2,u+E),ma.set(0,-1,0)),Bl.far=1.3;for(const w of Bl.intersectObjects(t.children,!0)){let I=!1,P=!0;for(let F=w.object;F;F=F.parent)F.userData.agentId&&(I=!0),F.visible||(P=!1);const v=w.point.y-p,b=w.object;if(!I&&P&&b.isMesh&&!b.material.transparent&&v>.25&&v<.66){m.push(v);break}}}const g=m.length?Math.max(...m):null;return a.set(d,g),g}function c(d,f,u,p,x=1){const m=d.model;if(m.bent&&m.legs)for(const U of m.legs)U.up.quaternion.copy(U.saved[0]),U.low.quaternion.copy(U.saved[1]),U.foot.quaternion.copy(U.saved[2]);m.bent=!1;const g=Of[f],y=g&&m.acts[g]?g:"idle";if(y!==m.cur){const U=m.acts[m.cur],W=m.acts[y];W.enabled=!0,W.setEffectiveWeight(1),W.time=0,r?U.setEffectiveWeight(0):U.crossFadeTo(W,.3,!1),m.cur=y}y==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*x)),m.mixer.update(r?0:u);const E=y!=="walk"&&y!=="idle";let w=null;const I=n.groundY(d.root.position.x,d.root.position.z);if(E&&p&&m.legs&&m.acts[y].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const U=m.hips.getWorldPosition(qr);w=l(p+"|"+d.id,U.x,U.z,I)}let P=m.baseY,v=0,b=0;if(w!==null){P=m.obj.position.y+(I+w+oS*d.H)-qr.y;const U=d.root.rotation.y,W=Math.cos(U),rt=Math.sin(U),Q=d.root.position.x-qr.x,N=d.root.position.z-qr.z;v=m.obj.position.x+Q*W-N*rt,b=m.obj.position.z+Q*rt+N*W}else E&&m.seat[y]!==void 0&&(P=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[y])));const F=r?1:Math.min(1,u*8);if(m.obj.position.x+=(v-m.obj.position.x)*F,m.obj.position.y+=(P-m.obj.position.y)*F,m.obj.position.z+=(b-m.obj.position.z)*F,m.ikW=w===null?0:Math.min(1,m.ikW+(r?1:u/.3)),w!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const U of m.legs)U.saved[0].copy(U.up.quaternion),U.saved[1].copy(U.low.quaternion),U.saved[2].copy(U.foot.quaternion),cS(U,I,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!yh.has(f)&&f!=="read"?Ol.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const kr=new z;function xi(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;kr.copy(t),kr[n]=0,kr.normalize();const c=.5*o/(o+a),h=1-kr.angleTo(s)/l;return Math.sign(kr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Xa extends Ct{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new z,c=new z,h=new z(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new z,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[y+0]=xi(x,c,"z","y",r,n),u[y+1]=1-xi(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),u[y+0]=1-xi(x,c,"z","y",r,n),u[y+1]=1-xi(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),u[y+0]=1-xi(x,c,"x","z",r,t),u[y+1]=xi(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[y+0]=1-xi(x,c,"x","z",r,t),u[y+1]=1-xi(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[y+0]=1-xi(x,c,"x","y",r,t),u[y+1]=1-xi(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),u[y+0]=xi(x,c,"x","y",r,t),u[y+1]=1-xi(x,c,"y","x",r,e);break}}static fromJSON(t){return new Xa(t.width,t.height,t.depth,t.segments,t.radius)}}const uS="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:is}=Math,Bc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function dS(){const s=new FontFace("M PLUS Rounded 1c",`url("${uS}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const ni={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function fS(s,t,e,n){s.setPixelRatio(Math.min(n,2)),s.setSize(t,e),s.shadowMap.enabled=!0,s.shadowMap.type=Kr,s.toneMapping=Oa,s.toneMappingExposure=.95}function Ed(s){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pS(s,t){const e=new ka(new Uint8Array([70,150,255]),3,1,Fa);e.minFilter=e.magFilter=Un,e.generateMipmaps=!1,e.needsUpdate=!0;const n=new qn({color:2824987,side:Qn}),i=0,r=1,o=new z(0,1,0),a={uRimColor:{value:new be("#ffd2a6")},uRimAmt:{value:.45}};function l(_){return _.onBeforeCompile=k=>{k.uniforms.uRimColor=a.uRimColor,k.uniforms.uRimAmt=a.uRimAmt,k.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+k.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},_.customProgramCacheKey=()=>"rim1",_}const c=new Map;function h(_,k){if(!k){let Y=c.get(_);return Y||(Y=l(new da({color:_,gradientMap:e})),c.set(_,Y)),Y}return l(new da(Object.assign({color:_,gradientMap:e},k)))}const d=new Map;function f(_,k=2){const Y=_+k;let O=d.get(Y);return O||(O=new gr({color:0,emissive:_,emissiveIntensity:k,roughness:1}),d.set(Y,O)),O}function u(_,k,Y=!0){k&&k.userData.autoUV&&_.attributes.uv&&!_.userData.planar&&(_.type==="BoxGeometry"||_.type==="RoundedBoxGeometry")&&(W(_,.9),_.userData.planar=!0);const O=new Ve(_,k);return O.castShadow=Y,O.receiveShadow=!0,O}const p=(_,k,Y,O=.03)=>new Xa(_,k,Y,2,Math.min(O,_/2.1,k/2.1,Y/2.1));function x(_,k,Y=i,O=!0){const st=u(_,k,O);if(Y){const lt=new Ve(_,n);lt.scale.setScalar(1+Y*r),lt.raycast=()=>{},st.add(lt)}return st}function m(_,k,Y,O){return _.position.set(k,Y,O),_}function g(_,k,Y,O){return _.rotation.set(k,Y,O),_}function y(_,k,Y,O,st=0,lt=0){return k.position.set(Y,lt,O),k.rotation.y=st,_.add(k),k}function E(_,k,Y,O,st,lt,Ht=i*1.6,me=7){const Re=Y.clone().normalize(),ye=x(new Pn(st,O,me),lt,Ht);return ye.quaternion.setFromUnitVectors(o,Re),ye.position.copy(k).addScaledVector(Re,O*.45),_.add(ye),ye}const w=Ed(20261116),I=(_,k)=>_+(k-_)*w(),P=_=>_[Math.floor(w()*_.length)],v=Ed(777),b=(_,k)=>_+(k-_)*v();function F(_,k,Y,O){const st=document.createElement("canvas");st.width=_,st.height=k;const lt=st.getContext("2d");lt&&Y(lt,_,k);const Ht=new wc(st);return Ht.colorSpace=Nn,Ht.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),Ht.wrapS=Ht.wrapT=Si,O&&Ht.repeat.set(O[0],O[1]),Ht}function U(_,k,Y){const O=_.clone();return O.wrapS=O.wrapT=Si,O.repeat.set(k,Y),O.needsUpdate=!0,O}function W(_,k=1,Y=k){const O=_.attributes.position,st=_.attributes.normal,lt=_.attributes.uv;for(let Ht=0;Ht<O.count;Ht++){const me=Math.abs(st.getX(Ht)),Re=Math.abs(st.getY(Ht)),ye=Math.abs(st.getZ(Ht));let ze,Ae;Re>=me&&Re>=ye?(ze=O.getX(Ht),Ae=O.getZ(Ht)):me>=ye?(ze=O.getZ(Ht),Ae=O.getY(Ht)):(ze=O.getX(Ht),Ae=O.getY(Ht)),lt.setXY(Ht,ze/k,Ae/Y)}return lt.needsUpdate=!0,_}function rt(_,k,Y,O=0,st=k){const lt=_.attributes.position,Ht=_.attributes.normal,me=_.attributes.uv;for(let Re=0;Re<lt.count;Re++){const ye=Math.abs(Ht.getX(Re)),ze=Math.abs(Ht.getZ(Re)),Ae=(ye>ze?lt.getZ(Re):lt.getX(Re))/Y;me.setXY(Re,Ae,(lt.getY(Re)+k/2+O)/st)}return me.needsUpdate=!0,_}const Q=new Be,N=new bn,it=new Xi,at=new z,q=new z,H=new be;function nt(_,k,Y={}){if(!k.length)return null;const O=Y.mat||l(new da({color:16777215,gradientMap:e})),st=new uo(_,O,k.length);return st.castShadow=!!Y.cast,st.receiveShadow=Y.receive!==!1,k.forEach((lt,Ht)=>{lt.m?Q.copy(lt.m):(it.set(lt.rx||0,lt.ry||0,lt.rz||0),N.setFromEuler(it),at.set(lt.x??0,lt.y??0,lt.z??0),q.set(lt.sx??1,lt.sy??1,lt.sz??1),Q.compose(at,N,q)),st.setMatrixAt(Ht,Q),(!Y.mat||Y.colors)&&st.setColorAt(Ht,H.set(lt.c||"#ffffff"))}),st.instanceMatrix.needsUpdate=!0,st.instanceColor&&(st.instanceColor.needsUpdate=!0),st.computeBoundingSphere(),(Y.parent||t).add(st),st}const ht=new Ct(1,1,1);function bt(_,k,Y,O=!0){return Y.length?nt(ht,Y.map(([st,lt,Ht,me,Re,ye,ze=0,Ae=0,Xt=0])=>({x:st,y:lt,z:Ht,sx:me,sy:Re,sz:ye,rx:ze,ry:Ae,rz:Xt})),{mat:k,parent:_,cast:O}):null}function Zt(_,k,Y,O,st,lt,Ht,me){for(let Re=0;Re<st;Re++){const ye=b(0,k),ze=b(0,Y),Ae=b(lt,Ht);for(const[Xt,ge]of[[0,0],[k,0],[-k,0],[0,Y],[0,-Y]]){const hn=_.createRadialGradient(ye+Xt,ze+ge,0,ye+Xt,ze+ge,Ae),En=O[Math.floor(v()*O.length)];hn.addColorStop(0,En+me),hn.addColorStop(1,En+"00"),_.fillStyle=hn,_.fillRect(ye+Xt-Ae,ze+ge-Ae,Ae*2,Ae*2)}}}function he(_,k,Y,O=.16){_.globalCompositeOperation="destination-in";const st=_.createLinearGradient(0,0,k,0);st.addColorStop(0,"rgba(0,0,0,0)"),st.addColorStop(O,"rgba(0,0,0,1)"),st.addColorStop(1-O,"rgba(0,0,0,1)"),st.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=st,_.fillRect(0,0,k,Y),_.globalCompositeOperation="source-over"}function ft(_,k,Y,O,st,lt,Ht,me,Re,ye,ze){for(let Ae=Y;Ae<st;Ae+=lt){let Xt=k-b(0,me);for(;Xt<O;){const ge=b(Ht,me);_.fillStyle=Re[Math.floor(v()*Re.length)],_.beginPath(),_.roundRect(Xt+ye,Ae+ye,ge-ye*2,lt-ye*2,ze),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Xt+ye*2,Ae+ye*1.5,ge-ye*4,3),Xt+=ge}}}function Kt(_,k,Y,O,st,lt,Ht,me,Re){const ye=Y/O;for(let ze=0;ze<O;ze++){const Ae=ze*ye;let Xt=b(0,lt);const ge=Xt;for(;Xt<ge+k;){const hn=Math.min(b(st,lt),ge+k-Xt);if(hn<st*.5)break;const En=Ht[Math.floor(v()*Ht.length)];for(const An of[0,-k])_.fillStyle=En,_.beginPath(),_.roundRect(Xt+An+me,Ae+me,hn-me*2,ye-me*2,Re),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Xt+An+me*2,Ae+me*1.5,hn-me*4,3);Xt+=hn}}}function re(_,k,Y,O){for(let st=0;st<8;st++){let lt=-b(0,200);for(;lt<k;){const Ht=b(160,340);_.fillStyle=O[Math.floor(v()*O.length)],_.fillRect(lt,st*64,Ht,64),_.strokeStyle="rgba(255, 230, 200, 0.06)",_.lineWidth=2;for(let me=0;me<3;me++){const Re=st*64+b(10,54);_.beginPath(),_.moveTo(lt+6,Re),_.bezierCurveTo(lt+Ht*.3,Re+b(-4,4),lt+Ht*.6,Re+b(-4,4),lt+Ht-6,Re),_.stroke()}_.fillStyle="rgba(20, 10, 6, 0.4)",_.fillRect(lt,st*64,3,64),_.fillStyle="rgba(20, 10, 6, 0.35)",_.beginPath(),_.arc(lt+10,st*64+14,2.5,0,is*2),_.arc(lt+10,st*64+50,2.5,0,is*2),_.fill(),lt+=Ht}_.fillStyle="rgba(20, 10, 6, 0.45)",_.fillRect(0,st*64,k,3)}}const pe=(_,k,Y)=>{const O=_.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,k),O.addColorStop(1,Y),_.fillStyle=O,_.fillRect(0,0,64,64)},Jt=F(512,512,(_,k,Y)=>{_.fillStyle="#6f8b49",_.fillRect(0,0,k,Y),Zt(_,k,Y,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let O=0;O<900;O++){_.strokeStyle=v()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",_.lineWidth=2;const st=b(0,k),lt=b(0,Y);_.beginPath(),_.moveTo(st,lt),_.lineTo(st+b(-2,2),lt-b(5,10)),_.stroke()}}),de=F(256,256,(_,k,Y)=>{_.fillStyle="#8b6a4b",_.fillRect(0,0,k,Y),Zt(_,k,Y,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let O=0;O<120;O++)_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",_.beginPath(),_.ellipse(b(0,k),b(0,Y),b(1.5,4),b(1,3),b(0,3),0,is*2),_.fill()}),We=F(256,256,(_,k,Y)=>{_.fillStyle="#b0906a",_.fillRect(0,0,k,Y),Zt(_,k,Y,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let O=0;O<160;O++)_.fillStyle="rgba(120, 90, 60, 0.25)",_.fillRect(b(0,k),b(0,Y),2,2)}),fe=F(512,512,(_,k,Y)=>{_.fillStyle="#5b524c",_.fillRect(0,0,k,Y),Kt(_,k,Y,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),Me=F(512,512,(_,k,Y)=>{_.fillStyle="#6a6058",_.fillRect(0,0,k,Y),Kt(_,k,Y,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),we=F(512,512,(_,k,Y)=>{_.fillStyle="#8f6c4b",_.fillRect(0,0,k,Y),Zt(_,k,Y,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let O=0;O<260;O++){const st=b(6,k-6),lt=b(6,Y-6);_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",_.beginPath(),_.ellipse(st,lt,b(1.5,4),b(1,3),0,0,is*2),_.fill()}}),At=F(256,512,(_,k,Y)=>{const O=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let st=0;for(const[lt,Ht]of O)_.fillStyle=lt,_.fillRect(0,st,k,Ht*Y+2),st+=Ht*Y;Zt(_,k,Y,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let lt=0;lt<40;lt++){_.strokeStyle="rgba(40, 26, 18, 0.35)",_.lineWidth=2;const Ht=b(0,k),me=b(.15*Y,Y);_.beginPath(),_.moveTo(Ht,me),_.lineTo(Ht+b(-10,10),me+b(10,40)),_.stroke()}_.fillStyle="#5a7a44";for(let lt=0;lt<k;lt+=6)_.beginPath(),_.moveTo(lt,0),_.lineTo(lt+3,b(14,34)),_.lineTo(lt+6,0),_.fill()}),qt=F(256,128,(_,k,Y)=>{_.fillStyle="#7a2420",_.fillRect(0,0,k,Y);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a2a24":"#6a1e1a",_.fillRect(O*32,0,32,Y);_.fillStyle="#e3d5b6",_.fillRect(0,Y*.46,k,Y*.08),_.fillStyle="#2a2224",_.fillRect(0,Y*.43,k,3),_.fillRect(0,Y*.57,k,3)}),ne=F(256,256,(_,k,Y)=>{for(let O=0;O<2;O++)_.fillStyle=["#a59a8c","#958a7d"][O],_.beginPath(),_.ellipse(k/2+b(-20,20),Y*(.25+O*.5),k*.32,Y*.17,b(-.3,.3),0,is*2),_.fill()}),oe=F(512,512,(_,k,Y)=>{_.fillStyle="#5f5650",_.fillRect(0,0,k,Y),ft(_,0,0,k,Y,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),Ot=F(512,512,(_,k,Y)=>re(_,k,Y,["#5a3a2a","#4e3224","#62402e","#553728"])),Pe=F(512,512,(_,k,Y)=>re(_,k,Y,["#4a3226","#553a2b","#3f2a20","#4e3428"])),$t=F(512,512,(_,k,Y)=>re(_,k,Y,["#a17a55","#94704d","#ab845e","#9a7552"])),Ft=F(512,512,(_,k,Y)=>re(_,k,Y,["#7a5236","#6e4a31","#84593b","#734d33"])),Lt=F(512,512,(_,k,Y)=>{_.fillStyle="#3f3a3a",_.fillRect(0,0,k,Y);for(let O=0;O<4;O++)for(let st=0;st<4;st++)_.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(st+O*3)%4],_.beginPath(),_.roundRect(st*128+4,O*128+4,120,120,6),_.fill(),_.fillStyle="rgba(255,255,255,0.05)",_.fillRect(st*128+10,O*128+10,108,6)}),Gt=F(512,512,(_,k,Y)=>{_.fillStyle="#4f4843",_.fillRect(0,0,k,Y),ft(_,0,0,k,Y,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),D=F(512,512,(_,k,Y)=>{_.fillStyle="#4a433f",_.fillRect(0,0,k,Y),ft(_,0,0,k,Y,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Zt(_,k,Y,["#3e5a34","#4a3a30"],14,20,60,"30")}),jt=F(512,512,(_,k,Y)=>{for(let O=0;O<8;O++)_.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][O%4],_.fillRect(O*64,0,64,Y),_.fillStyle="rgba(25, 14, 10, 0.45)",_.fillRect(O*64,0,3,Y),_.fillStyle="rgba(255, 220, 190, 0.05)",_.fillRect(O*64+8,0,3,Y);_.fillStyle="#7a2320",_.fillRect(0,34,k,70),_.strokeStyle="#d9c9a6",_.lineWidth=6,_.lineJoin="round",_.beginPath();for(let O=0;O<=k;O+=32)_.lineTo(O,O%64?52:86);_.stroke()}),te=F(256,256,(_,k,Y)=>{_.fillStyle="#4e1612",_.fillRect(0,0,k,Y);for(let O=0;O<8;O++){const st=O%2?16:0;for(let lt=-32;lt<k+32;lt+=32)_.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(v()*4)],_.beginPath(),_.roundRect(lt+st+1,O*32+2,30,30,[2,2,12,12]),_.fill(),_.fillStyle="rgba(255, 200, 170, 0.12)",_.fillRect(lt+st+5,O*32+5,22,3);_.fillStyle="rgba(30, 6, 6, 0.35)",_.fillRect(0,O*32,k,3)}}),Wt=F(256,256,(_,k,Y)=>{for(let O=0;O<4;O++)_.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][O],_.fillRect(O*64,0,64,Y),_.fillStyle="rgba(20, 8, 6, 0.45)",_.fillRect(O*64,0,3,Y)}),Rt=F(256,512,(_,k,Y)=>{_.fillStyle="#6e1a19",_.fillRect(0,0,k,Y),_.fillStyle="#2a1e1f",_.fillRect(0,0,k,26),_.fillRect(0,0,14,Y),_.fillRect(k-14,0,14,Y),_.fillStyle="#b08a3e",_.fillRect(0,26,k,6),_.fillStyle="#e3d5b6",_.beginPath(),_.moveTo(52,300),_.lineTo(204,300),_.lineTo(188,332),_.lineTo(156,332),_.lineTo(164,368),_.lineTo(196,368),_.lineTo(196,396),_.lineTo(60,396),_.lineTo(60,368),_.lineTo(92,368),_.lineTo(100,332),_.lineTo(68,332),_.closePath(),_.fill(),_.beginPath(),_.moveTo(128,120),_.bezierCurveTo(168,164,176,192,164,216),_.bezierCurveTo(152,236,104,236,92,216),_.bezierCurveTo(80,192,100,176,112,152),_.bezierCurveTo(120,168,124,172,132,176),_.bezierCurveTo(132,160,128,140,128,120),_.fill(),_.fillStyle="#6e1a19",_.beginPath(),_.moveTo(0,Y),_.lineTo(k/2,Y-60),_.lineTo(k,Y),_.fill()}),ee=F(64,256,(_,k,Y)=>{_.fillStyle="#6fa9c9",_.fillRect(0,0,k,Y);for(let O=0;O<40;O++)_.fillStyle=O%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",_.fillRect(O*23%64,O*41%256,3+O%3*2,18+O%5*10)}),xt=F(128,128,(_,k,Y)=>{_.fillStyle="#c4c4c4",_.fillRect(0,0,k,Y);for(let O=0;O<70;O++){const st=O*37%k,lt=(O*59+O%7*11)%Y,Ht=4+O%4*3;_.fillStyle=O%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",_.beginPath(),_.ellipse(st,lt,Ht,1.2+O%3*.5,O*.7%3.14,0,2*Math.PI),_.fill(),st+Ht>k&&(_.beginPath(),_.ellipse(st-k,lt,Ht,1.4,O*.7%3.14,0,2*Math.PI),_.fill())}}),ct=F(256,180,(_,k,Y)=>{_.fillStyle="#efe4cc",_.fillRect(0,0,k,Y),_.strokeStyle="#4f76b0",_.lineWidth=3,_.strokeRect(20,20,216,30),_.strokeRect(20,62,66,46),_.strokeRect(95,62,66,46),_.strokeRect(170,62,66,46),_.strokeRect(20,120,216,42),_.strokeStyle="#b8483e",_.beginPath(),_.moveTo(26,150),_.lineTo(80,132),_.lineTo(130,145),_.lineTo(226,126),_.stroke()}),C=F(256,200,(_,k,Y)=>{const O=_.createLinearGradient(0,0,0,Y);O.addColorStop(0,"#d98a62"),O.addColorStop(1,"#f2d2a8"),_.fillStyle=O,_.fillRect(0,0,k,Y),_.fillStyle="#5c6f48",_.beginPath(),_.moveTo(0,150),_.quadraticCurveTo(80,100,150,140),_.quadraticCurveTo(210,120,256,135),_.lineTo(256,200),_.lineTo(0,200),_.fill(),_.fillStyle="#4a3a3c",_.fillRect(150,70,44,72),_.fillStyle="#7a2420",_.beginPath(),_.moveTo(144,72),_.lineTo(172,40),_.lineTo(200,72),_.fill(),_.fillStyle="#ffd27a",_.fillRect(165,92,14,18)}),S=F(256,200,_=>{_.fillStyle="#c8b18a",_.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((k,Y)=>{_.fillStyle=k,_.fillRect(16+Y%3*78,16+Math.floor(Y/3)*60,66,48)}),_.fillStyle="#efe4cc",_.fillRect(16,140,224,44),_.fillStyle="#2b3a36",_.fillRect(28,152,120,8),_.fillRect(28,166,80,6)}),Z=F(256,160,(_,k,Y)=>{_.fillStyle="rgba(40, 200, 220, 0.18)",_.fillRect(0,0,k,Y);const O=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let st=0;st<9;st++)_.fillStyle=O[st%4],_.fillRect(18+st%3*12,18+st*14,40+st*53%140,6)}),Mt=F(256,128,(_,k,Y)=>{_.fillStyle="#3d6f99",_.fillRect(0,0,k,Y),_.fillStyle="#8aa866";for(const[O,st,lt,Ht]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])_.beginPath(),_.ellipse(O,st,lt,Ht,.3,0,is*2),_.fill()}),pt=F(128,128,(_,k,Y)=>{_.fillStyle="#c9a75a",_.fillRect(0,0,k,Y);for(let O=0;O<160;O++){_.strokeStyle=O%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",_.lineWidth=2;const st=b(0,k),lt=b(0,Y);_.beginPath(),_.moveTo(st,lt),_.lineTo(st+6,lt+2),_.stroke()}}),Nt=F(128,128,_=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((k,Y)=>{_.fillStyle=k,_.beginPath(),_.arc(64,64,62-Y*12,0,is*2),_.fill()})}),zt=F(256,256,(_,k,Y)=>{_.fillStyle="#7a5a3c",_.fillRect(0,0,k,Y);for(let O=0;O<8;O++)_.fillStyle=O%2?"#8a9a48":"#a7a24e",_.fillRect(0,O*32+6,k,20)}),vt=F(64,64,_=>pe(_,"rgba(255,255,255,1)","rgba(255,255,255,0)")),Tt=F(64,64,_=>pe(_,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Pt=F(64,64,_=>{_.translate(32,32),_.fillStyle="#fff6c8",_.beginPath();for(let k=0;k<8;k++){const Y=k%2?9:30,O=k*is/4;_.lineTo(Math.cos(O)*Y,Math.sin(O)*Y)}_.closePath(),_.fill()}),X=F(8,512,(_,k,Y)=>{const O=_.createLinearGradient(0,0,0,Y);O.addColorStop(0,"#4c6994"),O.addColorStop(.38,"#8ea6c4"),O.addColorStop(.62,"#d8c2a6"),O.addColorStop(.8,"#e2a682"),O.addColorStop(1,"#b8674f"),_.fillStyle=O,_.fillRect(0,0,k,Y)});X.wrapS=X.wrapT=si;const _t={grass:Jt,dirt:de,sand:We,tCobble:fe,tFlag:Me,tDirt:we,strata:At,balloon:qt,roadStones:ne,plaza:oe,planksWar:Ot,planksDark:Pe,planksLight:$t,planks:Ft,slate:Lt,stoneWall:Gt,castleWall:D,plankWall:jt,roof:te,gable:Wt,banner:Rt,water:ee,ripple:xt,paper:ct,painting:C,moodboard:S,code:Z,globe:Mt,straw:pt,target:Nt,field:zt,soft:vt,blob:Tt,spark:Pt,sky:X,grain:void 0};function gt(_,k=2.2){const Y=_.image,O=Y.width,st=Y.height;if(!(O>0)||!(st>0))return _;const lt=Y.getContext("2d");if(!lt)return _;const Ht=lt.getImageData(0,0,O,st).data,me=new Float32Array(O*st);for(let Xt=0;Xt<O*st;Xt++)me[Xt]=((Ht[Xt*4]??0)*.299+(Ht[Xt*4+1]??0)*.587+(Ht[Xt*4+2]??0)*.114)/255;const Re=document.createElement("canvas");Re.width=O,Re.height=st;const ye=Re.getContext("2d");if(!ye)return _;const ze=ye.createImageData(O,st);for(let Xt=0;Xt<st;Xt++)for(let ge=0;ge<O;ge++){const hn=me[Xt*O+(ge-1+O)%O]??0,En=me[Xt*O+(ge+1)%O]??0,An=me[(Xt-1+st)%st*O+ge]??0,T=me[(Xt+1)%st*O+ge]??0,L=(hn-En)*k,G=(T-An)*k,J=Math.hypot(L,G,1),ut=(Xt*O+ge)*4;ze.data[ut]=(L/J*.5+.5)*255,ze.data[ut+1]=(G/J*.5+.5)*255,ze.data[ut+2]=(1/J*.5+.5)*255,ze.data[ut+3]=255}ye.putImageData(ze,0,0);const Ae=new wc(Re);return Ae.wrapS=Ae.wrapT=Si,Ae.colorSpace=rs,Ae.anisotropy=_.anisotropy,Ae.repeat.copy(_.repeat),Ae}const Yt={},et=(_,k)=>Yt[_]||=gt(_t[_],k);function K(_,k=1,Y=1,O=2.2,st={}){const lt=k===1&&Y===1?_t[_]:U(_t[_],k,Y),Ht=k===1&&Y===1?et(_,O):U(et(_,O),k,Y);return h("#ffffff",Object.assign({map:lt,normalMap:Ht,normalScale:new Ut(1,1)},st))}_t.grain=F(256,256,(_,k,Y)=>{_.fillStyle="#d6cbbf",_.fillRect(0,0,k,Y);for(let O=0;O<70;O++){_.strokeStyle=v()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",_.lineWidth=b(1,3);const st=b(0,k);_.beginPath(),_.moveTo(st,0),_.bezierCurveTo(st+b(-8,8),Y*.3,st+b(-8,8),Y*.7,st+b(-4,4),Y),_.stroke()}for(let O=0;O<6;O++){const st=b(10,k-10),lt=b(10,Y-10);_.strokeStyle="rgba(80, 50, 30, 0.3)",_.lineWidth=2,_.beginPath(),_.ellipse(st,lt,b(3,6),b(8,14),0,0,is*2),_.stroke()}});const dt=_=>{const k=h(_,{map:_t.grain,normalMap:et("grain",1.5)});return k.userData.autoUV=!0,k},Dt={stone:K("stoneWall",1,1,2),castle:K("castleWall",1,1,2),plankWall:K("plankWall",1,1,1.4),timber:h(ni.timber),wood:dt(ni.wood),woodD:dt(ni.woodD),woodL:dt(ni.woodL),iron:h(ni.iron),ironL:h(ni.ironL),rust:h(ni.rust),bone:h(ni.bone),boneD:h(ni.boneD),red:h(ni.red),redD:h(ni.redD),redL:h(ni.redL),black:h(ni.black),gold:h(ni.gold),straw:h("#ffffff",{map:_t.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:t,renderer:s,COL:ni,GRAD:e,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:l,toon:h,glow:f,mesh:u,rbox:p,part:x,at:m,rot:g,put:y,spike:E,rnd:w,rr:I,pick:P,trnd:v,tr:b,canvasTex:F,blobs:Zt,edgeFade:he,tiled:U,planarUV:W,wallUV:rt,instanced:nt,boxes:bt,UNIT_BOX:ht,TEX:_t,nrm:et,relief:K,woodMat:dt,M:Dt,_c:H}}const{PI:un}=Math,Bn=.32,ia=s=>s.userData.up,mS=s=>s.userData.cutY;function gS(s,t,e,n,i){const{scene:r,M:o,COL:a,TEX:l,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:x,put:m,spike:g,rr:y,pick:E,tiled:w,planarUV:I,wallUV:P,boxes:v}=s,{SPINNERS:b,skull:F,horns:U,torch:W,flame:rt,table:Q,skullCandle:N,throne:it,rug:at,trophy:q,hangingBanner:H,weaponRack:nt,shield:ht,brazier:bt,chest:Zt,crate:he,barrel:ft,stool:Kt,drum:re,poleBanner:pe,skullPole:Jt,woodpile:de,spikes:We,bookshelf:fe,desk:Me,candle:we,fence:At,plant:qt,cauldron:ne,bench:oe,lampPost:Ot,scrollStack:Pe,telescope:$t,starGlobe:Ft,crystal:Lt,wallMap:Gt,easel:D,bottle:jt,anvil:te,sack:Wt,cart:Rt,roundTable:ee,mug:xt,lanternString:ct,signPost:C,bed:S,curtain:Z,partition:Mt,wardrobe:pt}=t,{patch:Nt}=e,zt={},vt={war:[l.planksWar,2.6],dark:[l.planksDark,2.6],light:[l.planksLight,2.6],planks:[l.planks,2.6],tiles:[l.slate,3.6]};function Tt(j,A,yt,ot,M,R,$={}){const B=$.T||Bn,V=$.base||0,mt=$.stone!==!1,It=mt?1.15:V,Bt=mt?Ye:V,kt=mt?It:V+.9,ie=p(new Et,0,kt,0);j.add(ie),j.userData.up=ie,ie.userData.movesWithWall=!0,j.userData.cutY=kt;const le={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function ae(Ee,$e){const[on,Ke,Qe,cn,On,gi,hi=0,ws=0,Us=0]=$e,Ui=Ke-On/2,Tr=Ke+On/2,[So,tt]=le[Ee];hi||Us||Ui>=kt-.01?tt.push([on,Ke-kt,Qe,cn,On,gi,hi,ws,Us]):Tr<=kt+.01?So.push($e):(So.push([on,(Ui+kt)/2,Qe,cn,kt-Ui,gi,hi,ws,Us]),tt.push([on,(kt+Tr)/2-kt,Qe,cn,Tr-kt,gi,hi,ws,Us]))}const ce=ot?ot.x-ot.w/2:0,Ie=ot?ot.x+ot.w/2:0,Ue=ot?[[-A/2,ce],[Ie,A/2]]:[[-A/2,A/2]],Le=yt-It;for(const[Ee,$e]of Ue){const on=$e-Ee;if(on<.05)continue;const Ke=(Ee+$e)/2;if(mt)j.add(p(u(I(new Ct(on,It,B+.08),1.6),o.stone),Ke,It/2,0)),ie.add(p(u(P(new Ct(on,Le,B),Le,1.3),o.plankWall),Ke,Le/2,0));else{const Qe=kt-It,cn=yt-kt;j.add(p(u(P(new Ct(on,Qe,B),Qe,1.3,0,Le),o.plankWall),Ke,It+Qe/2,0)),ie.add(p(u(P(new Ct(on,cn,B),cn,1.3,Qe,Le),o.plankWall),Ke,cn/2,0))}}if(ot){const Ee=Ye+2.3,$e=yt-Ee;ie.add(p(u(P(new Ct(ot.w,$e,B),$e,1.3),o.plankWall),ot.x,Ee+$e/2-kt,0)),ae("timber",[ot.x-ot.w/2-.1,(Ee+.1)/2,0,.24,Ee+.1,B+.16]),ae("timber",[ot.x+ot.w/2+.1,(Ee+.1)/2,0,.24,Ee+.1,B+.16]),ae("timber",[ot.x,Ee+.08,0,ot.w+.8,.3,B+.2]);for(const on of[-1,1])for(let Ke=0;Ke<4;Ke++)ae("timber",[ot.x+on*(ot.w/2+.1),.35+Ke*.55,B/2+.09,.07,.07,.04]);ie.add(p(F(.26),ot.x,Ee+.42-kt,B/2+.17)),ie.add(p(U(.6),ot.x,Ee+.48-kt,B/2+.15));for(const on of[-1,1])ie.add(p(W(),ot.x+on*(ot.w/2+.55),Ye+1.7-kt,B/2+.02))}ae("timber",[0,It+(mt?0:.09),0,A,.18,B+.12]),ae("timber",[0,yt-.1,0,A,.22,B+.12]);const Ne=Math.max(1,Math.round(A/2.3)),fn=[];for(let Ee=1;Ee<Ne;Ee++){const $e=-A/2+Ee*A/Ne;if(!(ot&&$e>ce-.45&&$e<Ie+.45)){fn.push($e),ae("timber",[$e,It+Le/2,0,.2,Le,B+.1]);for(const on of[It+.09,yt-.1])ae("timber",[$e,on,B/2+.08,.09,.09,.06])}}if(M)for(const Ee of[-A/2+.2,A/2-.2])ae("timber",[Ee,(V+yt+.12)/2,0,.42,yt-V+.12,B+.18]);const _e=[-A/2+(M?.41:0),...fn,A/2-(M?.41:0)];ot&&_e.push(ce-.22,Ie+.22),_e.sort((Ee,$e)=>Ee-$e);let Mn=0;for(let Ee=0;Ee<_e.length-1;Ee++){const $e=_e[Ee],on=_e[Ee+1],Ke=on-$e,Qe=($e+on)/2;if(!(Ke<.9)&&!(ot&&Qe>ce-.3&&Qe<Ie+.3)){if(Mn++,R&&Ke>1.5&&Mn%2===1){const cn=Bt+(mt?1.62:1.35);ae("panes",[Qe,cn,0,.86,.78,$.paneT||B+.04]);for(const On of[[Qe,cn+.44,0,1.08,.1,B+.12],[Qe,cn-.44,0,1.12,.12,B+.16],[Qe-.48,cn,0,.1,.96,B+.12],[Qe+.48,cn,0,.1,.96,B+.12],[Qe,cn,0,.06,.78,B+.06],[Qe,cn,0,.86,.05,B+.06]])ae("timber",On);for(const On of[-1,1])ae("shutters",[Qe+On*.78,cn,B/2+.05,.42,.86,.05,0,On*.35,0]),ae("timber",[Qe+On*.78+On*.012,cn,B/2+.09,.44,.08,.03,0,On*.35,0])}else if(Ke>1){const cn=Le-.3,On=Math.atan2(cn,Ke-.2),gi=Math.hypot(cn,Ke-.2);for(const hi of[-1,1])ae("timber",[Qe,It+Le/2,B/2+.04,gi,.13,.06,0,0,hi*On])}}}const[qe,oi]=le.timber,[vn,ci]=le.panes,[Wn,Xn]=le.shutters;v(j,o.timber,qe),v(ie,o.timber,oi),v(j,o.pane,vn,!1),v(ie,o.pane,ci,!1),v(j,o.red,Wn),v(ie,o.red,Xn),Yt(j,kt)}const Pt=new z,X=new Be,_t=new Be,gt=new Be;function Yt(j,A){const yt=ia(j),ot=new Map;j.traverse(B=>{if(!(B instanceof Ve)||Array.isArray(B.material))return;for(let It=B;It&&It!==j;It=It.parent)if(It===yt)return;const V=B.material,mt=ot.get(V);mt?mt.push(B):ot.set(V,[B])});const M=B=>{const V=B;return(V.color?V.color.r*.3+V.color.g*.59+V.color.b*.11:0)+(V.map?.5:0)},R=[...ot.keys()].sort((B,V)=>M(B)-M(V));j.updateWorldMatrix(!0,!0),gt.copy(j.matrixWorld).invert();const $=new Set;R.forEach((B,V)=>{if(V)for(const mt of ot.get(B)??[]){const It=mt.geometry;if($.has(It))continue;$.add(It),X.multiplyMatrices(gt,mt.matrixWorld),_t.copy(X).invert();const Bt=It.attributes.position;let kt=!1;for(let ie=0;ie<Bt.count;ie++)Pt.fromBufferAttribute(Bt,ie).applyMatrix4(X),!(Math.abs(Pt.y-A)>.002)&&(Pt.y-=.003*V,Pt.applyMatrix4(_t),Bt.setXYZ(ie,Pt.x,Pt.y,Pt.z),kt=!0);kt&&(Bt.needsUpdate=!0,It.computeBoundingBox(),It.computeBoundingSphere())}})}function et(j){const A=[],yt=new Map;return j.traverse(ot=>{if(!(ot instanceof Ve))return;const M=ot.material;let R=yt.get(M);R||(R=M.clone(),R.transparent=!0,yt.set(M,R),A.push(R)),ot.material=R}),A}function K(j,A,yt){const ot=j.r,M=yt.pitch||.6,R=.6,$=ot.d/2+R,B=new Et;B.position.y=A-R*Math.tan(M),j.g.add(B);const V=$*Math.tan(M),mt=R*Math.tan(M),It=$/Math.cos(M),Bt=d("#ffffff",{map:l.roof});for(const Ue of[-1,1]){const Le=u(I(new Ct(ot.w+R*2,.18,It),1.6),Bt);Le.rotation.x=Ue<0?-M:M,Le.position.set(0,V/2,Ue*$/2),B.add(Le)}const kt=new po;kt.moveTo(-ot.d/2,mt),kt.lineTo(ot.d/2,mt),kt.lineTo(0,V-.12),kt.closePath();const ie=new fh(kt),le=d("#ffffff",{map:l.gable,side:Sn});for(const Ue of[-1,1])B.add(p(x(u(ie,le),0,un/2,0),Ue*(ot.w/2+.02),0,0)),B.add(p(x(F(.34),0,Ue*un/2,0),Ue*(ot.w/2+.2),mt+(V-mt)*.42,0)),B.add(p(x(U(1.1),0,Ue*un/2,0),Ue*(ot.w/2+R+.05),V+.12,0));B.add(p(u(new Ct(ot.w+R*2+.2,.2,.26),o.iron),0,V+.04,0));const ae=Math.floor((ot.w+R)/1.5);for(let Ue=0;Ue<ae;Ue++)g(B,new z(-ot.w/2+.5+Ue*(ot.w-1)/Math.max(1,ae-1),V+.12,0),h,.34,.06,o.boneD,0,5);let ce=null;if(yt.chimney){const[Ue,Le]=yt.chimney,Ne=V+1.4;B.add(p(u(I(new Ct(.85,Ne,.85),1.2),o.stone),Ue,Ne/2,Le)),B.add(p(u(new Ct(1.05,.16,1.05),o.iron),Ue,Ne+.05,Le)),ce=[Ue,Ne+.3,Le]}const Ie=et(B);return{R:B,mats:Ie,base:B.position.y,hR:V,smokeAt:ce}}function dt(j){return{S:{c:[0,j.d/2],n:[0,1],L:j.w+Bn},N:{c:[0,-j.d/2],n:[0,-1],L:j.w+Bn},E:{c:[j.w/2,0],n:[1,0],L:j.d-Bn},W:{c:[-j.w/2,0],n:[-1,0],L:j.d-Bn}}}function Dt(j,A){const yt=new Et;j.add(yt);const ot=new Et;return ot.position.set(A.c[0],0,A.c[1]),ot.rotation.y=Math.atan2(A.n[0],A.n[1]),yt.add(ot),{sg:yt,sf:ot}}function _(j,A,yt){if(!A)return;A.updateWorldMatrix(!0,!0),j.g.updateMatrixWorld(!0);const ot=[];A.traverse(M=>{M instanceof Ve&&ot.push(M)});for(const M of ot){const R=M.geometry;R.attributes.uv||R.setAttribute("uv",new Fe(new Float32Array(R.attributes.position.count*2),2));const $=Xf(s,M.material),B=new Ve(R,$);B.castShadow=!$.isMeshStandardMaterial,B.receiveShadow=!0,M.matrixWorld.decompose(B.position,B.quaternion,B.scale),j.g.add(B),B.updateMatrixWorld(!0),yt.attach(B)}}function k(j,A,yt,ot,M,R={}){const $=R.T||Bn,B=R.stone!==!1,V=R.base||0,mt=B?1.15:V+.9,It=p(new Et,0,mt,0);if(A.add(It),A.userData.up=It,It.userData.movesWithWall=!0,A.userData.cutY=mt,_(j,yt,A),_(j,ot,It),Yt(A,mt),M)for(const Bt of[-1,1])It.add(p(W(),M.x+Bt*(M.w/2+.55),Ye+1.7-mt,$/2+.08))}function Y(j,A,yt,ot){const M=j.r,R=yt.pitch||.6,$=.6,B=M.d/2+$,V=new Et;V.position.y=A-$*Math.tan(R),j.g.add(V);const mt=B*Math.tan(R);_(j,ot,V);const It=et(V);let Bt=null;if(yt.chimney){const[kt,ie]=yt.chimney;Bt=[kt,mt+1.4+.3,ie]}return{R:V,mats:It,base:V.position.y,hR:mt,smokeAt:Bt}}const O={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function st(j,A={}){const yt=new Et;yt.position.set(j.x,0,j.z),yt.rotation.y=j.ry||0,r.add(yt);const ot=j.id||A.id,M={id:ot,r:j,g:yt,sides:{},lift:0,view:"ground",deco:!!A.deco,name:j.name,top:0},R=O[ot],$=le=>R?qf(R,ot+"_"+le):null;R?_(M,$("base"),yt):yt.add(p(u(I(new Ct(j.w+.6,Ye+.3,j.d+.6),1.4),o.stone),0,(Ye+.3)/2-.3,0));const[B,V]=vt[j.floor||"planks"];yt.add(x(p(u(new ln(j.w,j.d),d("#ffffff",{map:w(B,j.w/V,j.d/V)}),!1),0,Ye+.004,0),-un/2,0,0));const mt=Ye+j.wallH,It=dt(j),Bt=j.doorLocal||[0,j.d/2],kt=j.door?j.door.side:"S";for(const[le,ae]of Object.entries(It)){const{sg:ce,sf:Ie}=Dt(yt,ae),Ue=Math.cos(Ie.rotation.y),Le=-Math.sin(Ie.rotation.y),Ne=kt===le?{x:(Bt[0]-ae.c[0])*Ue+(Bt[1]-ae.c[1])*Le,w:j.door&&j.door.width||1.4}:null;R?k(M,Ie,$(le+"_lo"),$(le+"_hi"),Ne):Tt(Ie,ae.L,mt,Ne,le==="N"||le==="S",A.windows!==!1),M.sides[le]={g:ce,sf:Ie,up:ia(Ie),n:ae.n,s:1}}if(!R){const le=j.doorN||[0,1],ae=Math.abs(le[0])>0?[.7,(j.door&&j.door.width||1.4)+.5]:[(j.door&&j.door.width||1.4)+.5,.7];yt.add(p(u(I(new Ct(ae[0],.14,ae[1]),1.2),o.stone),Bt[0]+le[0]*.62,.07,Bt[1]+le[1]*.62))}let ie=mt;if(j.storeys===2){const le=j.upperH||2.5,ae=p(new Et,0,mt,0);ae.userData.movesWithWall=!0,yt.add(ae);const ce={U:ae,sides:{},lift:0,mats:[],top:mt};if(M.upper=ce,R)_(M,$("Ufloor"),ae);else{const Ue=d("#ffffff",{map:B}),[Le,Ne,fn,_e]=A.stairHole||[0,0,0,0],Mn=j.w/2,qe=j.d/2,oi=A.stairHole?[[-Mn,Le,-qe,qe],[Ne,Mn,-qe,qe],[Le,Ne,-qe,fn],[Le,Ne,_e,qe]]:[[-Mn,Mn,-qe,qe]];for(const[vn,ci,Wn,Xn]of oi)ci-vn<.05||Xn-Wn<.05||ae.add(p(u(I(new Ct(ci-vn,.22,Xn-Wn),V),Ue),(vn+ci)/2,.09,(Wn+Xn)/2))}const Ie=[];for(const[Ue,Le]of Object.entries(It)){const{sg:Ne,sf:fn}=Dt(ae,Le);R?k(M,fn,$("U"+Ue+"_lo"),$("U"+Ue+"_hi"),null,{base:.2,stone:!1,T:Bn-.05}):(Tt(fn,Le.L,.2+le,null,Ue==="N"||Ue==="S",!0,{base:.2,stone:!1,T:Bn-.05,paneT:Bn-.03}),Ie.push([0,.05,.2,Le.L+.2,.2,.18]),v(fn,o.timber,Ie.slice(-1))),ce.sides[Ue]={g:Ne,sf:fn,up:ia(fn),n:Le.n,s:1}}ie=mt+.2+le}return M.top=ie,M.roof=R?Y(M,ie,A,$("roof")):K(M,ie,A),zt[ot]=M,M}function lt(j,A,yt,ot,M){const R=j.upper,$=12,B=R.top+.2-Ye,V=(ot-yt)/$,mt=[];for(let le=0;le<$;le++){const ae=B*(le+1)/$;mt.push([A,Ye+ae/2,yt+V*(le+.5),M,ae,Math.abs(V)+.01])}v(j.g,o.wood,mt);const It=A>0?-1:1,Bt=A+It*(M/2+.04);for(let le=0;le<=4;le++){const ae=yt+(ot-yt)*le/4,ce=Ye+B*le/4;j.g.add(p(u(new Ct(.07,.95,.07),o.woodD),Bt,ce+.5,ae))}const kt=Math.hypot(ot-yt,B),ie=p(u(new Ct(.08,.08,kt),o.woodL),Bt,Ye+B/2+.95,(yt+ot)/2);ie.rotation.x=-Math.atan2(B,ot-yt),j.g.add(ie)}function Ht(j,A,yt,ot,M){const R=mS(j);ot>R?(A.position.set(yt,ot-R,M),ia(j).add(A)):(A.position.set(yt,ot,M),j.add(A))}const me=(j,A)=>j==="S"?A:j==="N"||j==="E"?-A:A;function Re(j,A,yt,ot,M,R=.1){const $=j.upper.sides[A];return yt.rotation.y=un,Ht($.sf,yt,me(A,ot),M,-((Bn-.05)/2+R/2+.01)),yt}const ye=(j,A,yt,ot,M=0)=>m(j.upper.U,A,yt,ot,M,.2);function ze(j,A,yt=0,ot=.9){for(let M=0;M<A.length-1;M++){const[R,$]=A[M],[B,V]=A[M+1],mt=Math.hypot(B-R,V-$),It=p(u(new Ct(mt,.07,.07),o.woodL),(R+B)/2,yt+ot,($+V)/2);It.rotation.y=-Math.atan2(V-$,B-R),j.add(It);const Bt=Math.max(1,Math.round(mt/.5));for(let kt=0;kt<=Bt;kt++)j.add(p(u(new Ct(.05,ot,.05),o.woodD),R+(B-R)*kt/Bt,yt+ot/2,$+(V-$)*kt/Bt))}}function Ae(j,A,yt,ot,M,R=.1,$=!0){const B=j.sides[A];return $&&(yt.rotation.y=un),Ht(B.sf,yt,me(A,ot),M,$?-(Bn/2+R/2+.01):Bn/2+R/2+.01),yt}const Xt=(j,A,yt,ot,M=0)=>m(j.g,A,yt,ot,M,Ye),ge=(j,A,yt,ot,M=0)=>m(j.g,A,yt,ot,M,0),hn=(j,A,yt)=>Kf(j,A,yt),En=document.createElement("canvas");En.width=512,En.height=280;const An=new wc(En);An.colorSpace=Nn;let T=i;function L(j=T){T=j;const A=En.getContext("2d");if(!A)return;const yt=512,ot=j.filter(R=>R==="done").length;A.fillStyle="#2e2422",A.fillRect(0,0,yt,280),A.fillStyle="#e3d5b6",A.font=`800 40px ${Bc}`,A.textAlign="left",A.fillText("TASKS",28,58),A.fillStyle="#ffd27a",A.textAlign="right",A.fillText(`${ot} / 5`,yt-28,58);const M={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((R,$)=>{const B=28+$*94,V=90;A.fillStyle=M[j[$]??"todo"],A.beginPath(),A.roundRect(B,V,78,96,14),A.fill(),A.fillStyle="rgba(255, 255, 255, 0.22)",A.beginPath(),A.roundRect(B+6,V+6,66,18,8),A.fill(),A.fillStyle="#1e1a1c",A.font=`800 46px ${Bc}`,A.textAlign="center",A.fillText(R,B+39,V+70)}),A.fillStyle="#1b1616",A.beginPath(),A.roundRect(28,220,yt-56,28,14),A.fill(),ot&&(A.fillStyle="#d9762e",A.beginPath(),A.roundRect(28,220,(yt-56)*ot/5,28,14),A.fill()),An.needsUpdate=!0}L(),document.fonts&&document.fonts.ready.then(()=>L());function G(){const j=new Et;return j.add(u(new Ct(2.7,1.65,.1),o.woodD)),j.add(p(new Ve(new ln(2.45,1.35),new qn({map:An,toneMapped:!1})),0,0,.06)),j.add(p(u(new Ct(2.9,.14,.2),o.wood),0,.9,.02)),j.add(p(F(.18),0,1.08,.06)),j}{const j=Ri.war,A=st(j,{pitch:.62}),yt=Ye+j.wallH;Xt(A,Q(3.4,2,.86),-2.5,-.6);{const ot=new ln(3,1.7,26,16),M=ot.attributes.position,R=[];for(let B=0;B<M.count;B++){const V=M.getX(B),mt=M.getY(B),It=Math.max(0,Math.sin(V*2.1+1)*Math.cos(mt*2.7)*.1+Math.sin(V*5+mt*3)*.03);M.setZ(B,It),R.push(...It>.08?[.86,.82,.76]:It>.03?[.5,.38,.28]:It>.005?[.42,.55,.32]:[.32,.5,.62])}ot.setAttribute("color",new Fe(R,3)),ot.computeVertexNormals();const $=x(p(u(ot,new da({vertexColors:!0,gradientMap:c}),!1),-2.5,Ye+.91,-.6),-un/2,0,0);A.g.add($);for(const[B,V,mt]of[[-.9,-.3,a.red],[.4,.3,"#3f5f8f"],[1,-.4,a.gold],[-.2,-.5,a.red]])A.g.add(p(u(new se(.012,.012,.24,4),o.dark,!1),-2.5+B,Ye+1.05,-.6+V)),A.g.add(p(u(new Ct(.12,.07,.01),d(mt),!1),-2.5+B+.06,Ye+1.13,-.6+V));for(const[B,V]of[[-1.55,-.85],[1.55,.85]])Xt(A,N(),-2.5+B,-.6+V).position.y=Ye+.9}Xt(A,it(),-6.1,-2.6,Cd(-6.1,-2.6,-2.5,-.6)),Xt(A,at(1.6,[a.redD,a.bone,a.red,a.black,a.redL,a.redD]),-4.6,.6),Ae(A,"N",G(),3.8,Ye+1.95,.12),Ae(A,"N",q(),-2.5,Ye+2.2,.1),Ae(A,"N",q(),.9,Ye+2.1,.1),Ae(A,"N",H(1,1.9),-5.4,yt-.3,.04),Ae(A,"N",H(1,1.9),6.4,yt-.3,.04),Ae(A,"W",nt(4),.6,Ye,.3),Ae(A,"E",ht(a.red),-2,Ye+1.9,.1),Ae(A,"E",ht(a.black),1.2,Ye+1.9,.1),Xt(A,bt(7),6.3,-3.3),Xt(A,bt(0,.85),-6.7,3.5),Xt(A,Zt(),6.3,1.6,-un/2),Xt(A,he(.6),5.3,3.6,.3),Xt(A,he(.45),5.9,3.7,.9),Xt(A,ft(.9),-6.6,-.6),Xt(A,Kt(),-.9,-2.2),Nt("plaza",...hn(j,0,7.4),5.8,3.6,-j.ry,.014),ge(A,re(),-4.4,6,.3),ge(A,re(),5.6,5.9,-.2),ge(A,pe(3.4),-2.6,5),ge(A,pe(3.4),2.6,5),ge(A,Jt(2.6),-7,6.2),ge(A,Jt(2.2),7.8,5.4),ge(A,bt(0),-6.2,5),ge(A,de(2.4),-3,-6),ge(A,ft(),4.4,-5.6),ge(A,ft(.9),5,-6.1),ge(A,ft(1,!0),3.6,-6.2,.4),ge(A,x(nt(4),0,un,0),.8,-5.6),ge(A,We(3),-8.6,-1,un/2)}{const j=Ri.library,A=st(j,{pitch:.66,stairHole:[4,4.84,-2,0]}),yt=Ye+j.wallH;for(const R of[-3.6,-1.4])Xt(A,fe(2),R,-j.d/2+Bn/2+.27);for(const R of[-2.1,.3])Xt(A,fe(2),-j.w/2+Bn/2+.27,R,un/2);const ot=Me("books");Xt(A,ot.g,1.8,-1.2),Xt(A,we(.18,4),2.45,-.95).position.y=Ye+.79;{const R=new Et;R.add(p(u(new Ct(1,.45,.9),d("#5a1f2a")),0,.3,0)),R.add(p(u(new Ct(.86,.12,.74),d("#7a2a36")),0,.58,.04)),R.add(p(u(new Ct(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const $ of[-1,1])R.add(p(u(new Ct(.2,.6,.9),d("#4a1822")),$*.5,.52,0));Xt(A,R,-3.3,1.9,.9)}Xt(A,at(1.5,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const R=new Et;R.add(p(u(new se(.08,.2,1,8),o.woodD),0,.5,0)),R.add(x(p(u(new Ct(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),R.add(x(p(u(new Ct(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Xt(A,R,2.3,2.5,-.5)}{const R=new Et;R.add(p(u(new se(.05,.2,.9,10),o.woodD),0,.45,0));const $=p(new Et,0,1.25,0);$.rotation.z=.4;const B=u(new an(.34,24,16),d("#ffffff",{map:l.globe}));$.add(B),$.add(x(u(new Cn(.4,.02,6,28),o.gold),0,un/2,0)),R.add($),Xt(A,R,.5,3),b.push({o:B,axis:"y",v:.25})}{const R=new Et;R.add(p(u(new se(.16,.26,.9,8),o.woodD),0,.45,0)),R.add(p(u(new an(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let $=0;$<3;$++){const B=$/3*un*2;g(R,new z(Math.cos(B)*.14,.92,Math.sin(B)*.14),new z(Math.cos(B),2,Math.sin(B)),.3,.03,o.bone,0,5)}Xt(A,R,3,-3.2)}const M=[];for(const[R,$,B]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[V,mt]=hn(j,R,$);let It=Ye;for(let Bt=0;Bt<B;Bt++){const kt=y(.06,.1);M.push({x:V+y(-.03,.03),y:It+kt/2,z:mt+y(-.03,.03),sx:y(.32,.42),sy:kt,sz:y(.24,.3),ry:j.ry+y(-.3,.3),c:E(t.BOOK_COLS)}),It+=kt}}s.instanced(s.UNIT_BOX,M,{cast:!0}),Xt(A,N(),-4.3,3.4).position.y=Ye+.42,Xt(A,we(.5),-4.5,2.9),Xt(A,we(.34),-4.2,2.7),Ae(A,"E",H(.9,1.6),-3,yt-.3,.04),Ae(A,"S",q(),1.6,Ye+2.1,.1);{const R=new Et;R.add(p(u(new se(2.2,2.4,7.6,22),d("#ffffff",{map:w(l.castleWall,3.5,2.4)})),0,3.8,0)),R.add(p(u(new se(2.6,2.4,.4,22),o.stone),0,7.7,0)),R.add(p(u(new Pn(2.9,3.6,22),d("#ffffff",{map:w(l.roof,5,2)})),0,9.7,0)),R.add(p(F(.45),0,11.8,0));for(const[$,B]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])R.add(p(x(u(new Ct(.4,.9,.12),o.pane,!1),0,-$+un/2,0),Math.cos($)*2.32,B,Math.sin($)*2.32));R.add(p(x(H(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),ge(A,R,5.6,3.4)}At(A.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let R=0;R<10;R++)ge(A,qt(y(.6,.9)),y(-8.6,-6.2),y(5.3,7.1));ge(A,ne(),1.2,6.2),ge(A,oe(1.6,!0),3,6.7,un),ge(A,Jt(2.2),-.4,5.6),ge(A,Ot(0),-4.6,4.6),ge(A,he(.55),6.2,-1.4,.3),ge(A,he(.4),6.3,-.8,.8),Nt("dirt",...hn(j,.5,6.4),4.6,2.2,-j.ry,.013),lt(A,4.42,-3.4,-.2,.84),ze(A.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const R of[-3.6,-1.4,1])ye(A,fe(2),R,-j.d/2+Bn/2+.27);for(const R of[-2.1,.3,2.5])ye(A,fe(2),-j.w/2+Bn/2+.27,R,un/2);ye(A,Q(2.2,1,.8,o.wood),.2,.7),ye(A,Pe(),-.4,.6).position.y=1.04,ye(A,Pe(),.9,.9).position.y=1.04,ye(A,p(u(new Ct(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,ye(A,we(.2),-.6,1).position.y=1,ye(A,we(.14),.95,.4).position.y=1,ye(A,Kt(),.2,1.6),ye(A,Kt(),-.9,1.5),ye(A,$t(),2.4,2.9,un),ye(A,Ft(),-2.6,2.6),ye(A,Lt(),2.9,-2.8),ye(A,at(1.3,["#3a1f3a",a.bone,"#5a2a4a",a.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Re(A,"S",Gt(),-.6,1.75,.06),Re(A,"E",q(),2.4,1.8,.1),ye(A,Zt(),-3.6,3.2,0)}{const j=Ri.studio,A=st(j,{pitch:.58}),yt=Ye+j.wallH,ot=Me("paper");Xt(A,ot.g,-2,-1.6);{const mt=new Et;mt.add(u(new Ct(1.6,1.25,.08),o.wood)),mt.add(p(new Ve(new ln(1.45,1.1),new qn({map:l.moodboard,toneMapped:!1})),0,0,.05)),Ae(A,"N",mt,1.6,Ye+1.75,.08)}Xt(A,Q(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[mt,It,Bt]of[[-.35,-.1,"#3f5f8f"],[0,.12,a.red],[.32,-.05,a.gold],[.12,-.2,"#5f8a52"]])Xt(A,p(u(new se(.08,.09,.16,12),d(Bt)),0,.08,0),2.6+mt,-2+It).position.y=Ye+.78;for(let mt=0;mt<3;mt++){const It=p(u(new Ct(.8,.6,.04),d(E(["#efe4cc","#e2d4b6"]))),0,.3,0);It.rotation.x=-.22,Xt(A,It,3.7-mt*.1,1.4+mt*.12,-un/2)}Xt(A,qt(1.1),3.8,2.8),Xt(A,qt(.9),-3.8,2.9),Xt(A,fe(1.6),-j.w/2+Bn/2+.27,.6,un/2),Ae(A,"E",H(.9,1.5),.6,yt-.3,.04);const[M,R,$,B]=j.deck;A.g.add(p(u(I(new Ct(R-M,.2,B-$),2.6),d("#ffffff",{map:l.planks})),(M+R)/2,.1,($+B)/2));const V=p(new Et,0,.2,0);A.g.add(V),At(V,[[M,$+.1],[M,B],[-2,B]],.85),At(V,[[3.4,B],[R,B],[R,$+.1]],.85),m(V,D(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(V,oe(1.6,!0),3,4.4,0),m(V,qt(1),-3.7,4),m(V,qt(.8),3.8,7.1),m(V,Ot(0),-3.9,7.3),m(V,p(u(new se(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(V,p(u(new se(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let mt=0;mt<14;mt++)ge(A,p(u(new an(.14,8,6),d(E([a.red,a.bone,"#d98a3a",a.redL]))),0,.14,0),y(-3.5,3.5),y(-5.2,-4.2));ge(A,Jt(2),4.9,-4.6)}const J=Me("screen"),ut=Me("screen");{const j=Ri.workshop,A=st(j,{pitch:.6,chimney:[-4,-1.6]}),yt=Ye+j.wallH;Xt(A,J.g,-3,-1.4),Xt(A,ut.g,2,-1.4),Xt(A,Lt(),-5,2.6);{const ot=new Et;for(const M of[.9,1.5])ot.add(p(u(new Ct(2.4,.06,.4),o.wood),0,M,0));for(const M of[-1,1])ot.add(p(u(new Ct(.06,1.7,.4),o.woodD),M*1.2,.85,0));for(let M=0;M<7;M++)ot.add(p(jt(E(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+M*.32,.93+M%2*.6,0));ot.add(p(F(.14),.9,1.65,0)),Xt(A,ot,-.5,-j.d/2+Bn/2+.25)}{const ot=Q(2,.8,.86,o.woodD);ot.add(p(te(),.4,.9,0)),ot.add(x(p(u(new se(.02,.02,.4,6),o.wood),-.5,.92,.1),un/2,0,.4)),Xt(A,ot,3.9,-3.2)}{const ot=new Et;ot.add(p(u(new Ct(.9,.8,.8),o.iron),0,.4,0)),ot.add(p(u(new ln(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),ot.add(p(u(new se(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Xt(A,ot,-5.2,.7,un/2)}for(const[ot,M,R,$]of[[4.2,1.7,.4,a.gold],[3.5,1.35,.26,a.ironL]]){const B=new Et;B.add(x(u(new se(R,R,.1,18),d($)),un/2,0,0));for(let V=0;V<10;V++){const mt=V/10*un*2;B.add(p(u(new Ct(.12,.12,.1),d($)),Math.cos(mt)*(R+.05),Math.sin(mt)*(R+.05),0))}Ae(A,"N",B,ot,Ye+M,.1),b.push({o:B,axis:"z",v:$===a.gold?.6:-.9})}Ae(A,"W",nt(4),-1.2,Ye,.3),Ae(A,"S",H(1,1.7),-2.4,yt-.3,.04),Ae(A,"S",ht(a.red),2.6,Ye+1.8,.1),Xt(A,ft(),-5.2,-3.2),Xt(A,he(.6),-4.6,-3.4,.3),Xt(A,he(.6),5,3.2,.2),Xt(A,Wt(),4.3,3.4),Nt("dirt",...hn(j,0,6.2),6.6,2.8,-j.ry,.013),ge(A,de(2.6),-2.6,5.4),ge(A,Rt(),2.6,6.2,.4);{const ot=new Et;ot.add(p(u(new se(.4,.45,.6,12),o.woodL),0,.3,0)),ot.add(x(p(u(new se(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),ot.add(x(p(u(new Ct(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),ge(A,ot,-5,5.6)}ge(A,ft(),5.2,5),ge(A,ft(.85),5.8,5.6),ge(A,Jt(2.4),-6.6,6.8),ge(A,bt(0,.9),7.4,-1.4)}let wt;{const j=Ri.tavern,A=st(j,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),yt=Ye+j.wallH;{const ot=new Et;ot.add(p(u(new Ct(.9,1.1,5),o.wood),0,.55,0)),ot.add(p(u(new Ct(1.1,.08,5.2),o.woodL),0,1.14,0));for(let R=0;R<5;R++)ot.add(p(u(new Ct(.02,.9,.9),o.woodD),-.46,.5,-2+R));for(let R=0;R<6;R++)ot.add(p(jt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),y(-.2,.2),1.18,-2.2+R*.8));ot.add(p(F(.2),0,1.3,2.3)),Xt(A,ot,4.1,-.6);const M=new Et;for(const R of[1.5,2])M.add(p(u(new Ct(.3,.05,4),o.wood),0,R,0));for(let R=0;R<10;R++)M.add(p(jt(E(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,R%2?2.03:1.53,-1.8+R*.4));Xt(A,M,5.12,-.6),Xt(A,ft(.9,!0),4.85,2.6,un/2),Xt(A,ft(.9,!0),4.85,3.4,un/2)}{const ot=new Et;ot.add(p(u(I(new Ct(2.6,2,.9),1.4),o.stone),0,1,0)),ot.add(p(u(new Ct(2.9,.18,1.1),o.wood),0,2.05,.05)),ot.add(p(u(new ln(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),ot.add(p(ne(),0,0,.85)),ot.add(p(F(.22),0,2.32,.1)),wt=new ls("#ff9a4a",12,9,2),wt.position.set(0,.9,1.2),ot.add(wt),rt(ot,0,.3,.3,1.4),Xt(A,ot,-1.5,-j.d/2+Bn/2+.46)}Xt(A,ee(),-2.2,.8),Xt(A,Kt(),-3.1,.8),Xt(A,Kt(),-1.3,.8),Xt(A,ee(.65),1,2.3),Xt(A,Kt(),.1,2.3),Xt(A,Kt(),1.9,2.3),Xt(A,Kt(),1,3.2);for(const[ot,M]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Xt(A,xt(),ot,M).position.y=Ye+.8;Xt(A,Kt(),3.2,-2.4),Ae(A,"N",q(),2.6,Ye+2.1,.1),Ae(A,"S",ht(a.black),-3,Ye+1.9,.1),Ae(A,"S",H(.9,1.6),1.6,yt-.3,.04),Ae(A,"W",q(),-2.6,Ye+2.2,.1),Nt("dirt",...hn(j,-.5,6.4),4.8,2.6,-j.ry,.013),ge(A,Q(3.6,.9,.8,o.woodL),.4,6.55),ge(A,oe(3.6,!1),.4,5.75),ge(A,oe(3.6,!1),.4,7.35,un);for(const[ot,M]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])ge(A,xt(),ot,M).position.y=.84;At(A.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[ot,M]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])ge(A,p(u(new se(.06,.08,2.6,6),o.woodD),0,1.3,0),ot,M);ct(A.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),ge(A,ft(),3,5.2),ge(A,ft(.8,!0),2.6,7.9,.3),ge(A,C("TAVERN"),-6.4,3.6,-un/2),ge(A,Jt(2.2),-8.4,5.6),lt(A,-4.89,-3.6,-.6,.9),ze(A.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[ot,M]of[[-2.6,a.red],[.8,"#3f5f8f"],[4,a.redD]])ye(A,S(M),ot,-2.75),ye(A,Zt(),ot+.95,-3.4,un/2).scale.setScalar(.7),ye(A,Z(.8,1.6),ot-.5,-1.35),ye(A,we(.16),ot-.62,-3.55);for(const ot of[-.9,2.4])ye(A,Mt(2.5),ot,-2.6);{const ot=u(new ln(8.6,1.1),d(a.redD),!1);ot.rotation.x=-un/2,ye(A,ot,.4,.9).position.y=.212}ye(A,pt(),.8,3.45,un),ye(A,oe(1.6,!0),2.8,3.4,un),ye(A,Q(.9,.7,.8,o.woodL),4.4,1.6),ye(A,Kt(),4.4,2.4),ye(A,we(.16,0),4.5,1.5).position.y=1;{const ot=new Et;ot.add(p(u(new se(.06,.12,.8,8),o.woodD),0,.4,0)),ot.add(p(u(new se(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),ot.add(x(p(u(new Ai(.24,14),d("#5f8fa8"),!1),0,.92,0),-un/2,0,0)),ye(A,ot,-2.2,3.3)}ye(A,qt(.9),-3.6,3.3),Re(A,"S",ht(a.red),-1.2,1.7,.1),Re(A,"E",H(.9,1.5),1.6,2.5,.04)}return{HOUSES:zt,buildHouse:st,inH:Xt,outH:ge,onWall:Ae,W2:hn,deskF:J,deskB:ut,hearthLight:wt,drawBoard:L}}const{PI:xn}=Math;function sa(s,t,e){let n=1e9;for(let i=0;i<e.length-1;i++){const[r,o]=e[i],[a,l]=e[i+1],c=a-r,h=l-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(t-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,t-o-h*f))}return n}function Ad(s,t,e,n){const i=e?[...s,s[0]]:s,r=[],o=[],a=[];let l=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(e&&(h===0||h===i.length-1)){const E=s[s.length-1],w=s[1];u=w[0]-E[0],p=w[1]-E[1]}const x=Math.hypot(u,p)||1,m=-p/x,g=u/x,y=i[h];if(h>0){const E=i[h-1];l+=Math.hypot(y[0]-E[0],y[1]-E[1])}if(r.push(y[0]+m*t/2,n,y[1]+g*t/2,y[0]-m*t/2,n,y[1]-g*t/2),o.push(0,l,1,l),h>0){const E=h*2;a.push(E-2,E,E-1,E-1,E,E+1)}}const c=new gn;return c.setAttribute("position",new Fe(r,3)),c.setAttribute("uv",new Fe(o,2)),c.setIndex(a),c.computeVertexNormals(),c}async function _S(s,t,e){const{scene:n,TEX:i,toon:r,mesh:o,at:a,rot:l,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:x,instanced:m}=s,{SPINNERS:g,plantFlora:y,skullPole:E,totem:w,brazier:I,hay:P}=t,v=new z(-62,27,70).normalize(),b=new Ve(new an(600,32,16),new ri({side:Qn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new be("#2b3b78")},mid:{value:new be("#7f8fc4")},hor:{value:new be("#f2aa7c")},low:{value:new be("#c98a72")},sunCol:{value:new be("#ffa864")},sunDir:{value:v}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));b.renderOrder=-100,b.frustumCulled=!1,n.add(b),n.fog=new rh("#d6a487",230,640),n.add(new Cm("#9aa8d8","#4a3428",1.05));const F=new Sf("#ffb070",2.3);F.position.copy(v).multiplyScalar(110),F.castShadow=!0,F.shadow.mapSize.set(4096,4096),Object.assign(F.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),F.shadow.camera.updateProjectionMatrix(),F.shadow.bias=-5e-4,F.shadow.normalBias=.05,n.add(F);const U=new po;for(let Ft=0;Ft<=160;Ft++){const Lt=Ft/160*xn*2,Gt=zr(Lt),D=Math.cos(Lt)*Gt,jt=-Math.sin(Lt)*Gt;Ft===0?U.moveTo(D,jt):U.lineTo(D,jt)}const W=new Ca(U,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});W.rotateX(-xn/2);const rt=c(i.grass,1/9,1/9);function Q(Ft,Lt){const Gt=i.strata.clone();return Gt.wrapS=Si,Gt.wrapT=si,Gt.repeat.set(1/8,-1/(Lt-Ft)),Gt.offset.set(0,Lt/(Lt-Ft)),Gt.needsUpdate=!0,r("#ffffff",{map:Gt})}const N=new Ve(W,[r("#ffffff",{map:rt}),Q(-1.9,1.5)]);N.position.y=-2.9,N.receiveShadow=!0,n.add(N);const it=tS(s,await e);n.add(it.underside);for(const Ft of["walls","towers","gate"])n.add(it[Ft]);const at=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),q=new an(1,16,12),H=new Et;n.add(H);for(let Ft=0;Ft<22;Ft++){const Lt=Ft/22*xn*2+d(-.12,.12),Gt=d(100,260),D=d(1.6,3.2),jt=new Et;for(let te=0;te<7;te++){const Wt=new Ve(q,at),Rt=d(1.6,2.8)*D;Wt.scale.set(Rt,Rt*.7,Rt),Wt.position.set(d(-3.5,3.5)*D,d(-.3,1.2)*D,d(-1.8,1.8)*D),jt.add(Wt)}jt.position.set(Math.cos(Lt)*Gt,d(-45,28),Math.sin(Lt)*Gt),H.add(jt)}{const Ft=[],Lt=[],Gt=[];for(let D=0;D<420;D++){const jt=D/420*xn*2+d(-.006,.006),te=zr(jt);if(h()<.55){const Wt=d(.5,2.8),Rt=d(-.55,-1.8);Ft.push({x:Math.cos(jt)*(te+.8),y:Rt-Wt/2,z:Math.sin(jt)*(te+.8),sx:d(.7,1.3),sy:Wt,sz:d(.7,1.3),rx:xn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}D%2===0&&Lt.push({x:Math.cos(jt)*(te+.3),y:-.06,z:Math.sin(jt)*(te+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let D=0;D<7;D++){const jt=d(0,xn*2),te=zr(jt)+d(4,12);Gt.push({x:Math.cos(jt)*te,y:d(-14,-4),z:Math.sin(jt)*te,s:d(.8,2.2)})}m(new Pn(.06,1,4),Ft,{}),m(new an(1,10,6),Lt,{});for(const D of Gt){const jt=new Et;jt.add(a(o(new Gi(1.2*D.s,0),r("#6e5240")),0,-.4*D.s,0)),jt.add(a(o(new se(1*D.s,1.1*D.s,.3*D.s,9),r("#6f8b49")),0,.5*D.s,0)),h()<.6&&jt.add(a(t.tree(f(["pine","autumn","dead"]),.5*D.s),0,.6*D.s,0)),jt.position.set(D.x,D.y,D.z),jt.rotation.y=d(0,6),n.add(jt)}}const nt=Q(-.75,1.35),ht={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},bt=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Zt(Ft,Lt,Gt,D,jt){y(Lt,Gt,Ft.position.x+D,Ft.position.z+jt,Ft.position.y)}function he(Ft,Lt,Gt,D){const{trees:jt,clear:te}=ht[Gt],Wt=Lt/10,Rt=[...te.map(([xt,ct,C])=>[xt,ct,C]),...D.map(([xt,ct])=>[xt,ct,.16])],ee=(xt,ct,C)=>{for(let S=0;S<60;S++){const Z=d(0,xn*2),Mt=d(xt,ct),pt=Math.cos(Z)*Mt,Nt=Math.sin(Z)*Mt;if(Rt.every(([zt,vt,Tt])=>Math.hypot(pt-zt,Nt-vt)>Tt+C))return Rt.push([pt,Nt,C]),[pt*Lt,Nt*Lt]}return null};for(let xt=0;xt<7;xt++){const ct=ee(.3,.74,.12);ct&&y(jt[xt%jt.length],d(1,1.3)*Wt,Ft.position.x+ct[0],Ft.position.z+ct[1],Ft.position.y)}for(let xt=0;xt<9;xt++){const ct=ee(.15,.78,.05);ct&&y(f(bt),d(.75,1.25)*Wt,Ft.position.x+ct[0],Ft.position.z+ct[1],Ft.position.y)}}const ft=c(i.water,1,4);function Kt(Ft,Lt,Gt,D,jt,te){const Wt=new Et;Wt.position.set(Ft,Lt,Gt),n.add(Wt);const Rt=new po;for(let C=0;C<=56;C++){const S=C/56*xn*2,Z=D*(1+.12*Math.sin(3*S+te)+.07*Math.sin(5*S+2*te));C===0?Rt.moveTo(Math.cos(S)*Z,-Math.sin(S)*Z):Rt.lineTo(Math.cos(S)*Z,-Math.sin(S)*Z)}const ee=new Ca(Rt,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});ee.rotateX(-xn/2),Wt.add(a(new Ve(ee,[r("#ffffff",{map:rt}),nt]),0,-1.75,0));const xt=o(new Pn(D*.95,D*2.3,12,3),r("#6e5240"),!1);xt.rotation.x=xn,xt.position.y=-2.1-D*1.15,Wt.add(xt);for(let C=0;C<14;C++){const S=d(0,xn*2),Z=d(.2,.9);Wt.add(a(l(o(new Gi(d(.8,2)*(D/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*D*.95*Z,-2.1-(1-Z)*D*2.3,Math.sin(S)*D*.95*Z))}for(let C=0;C<26;C++){const S=d(0,xn*2),Z=d(.6,2.4);Wt.add(a(l(o(new Pn(.07,Z,4),r("#4a3424")),xn,0,0),Math.cos(S)*D*1.02,-.6-Z/2,Math.sin(S)*D*1.02))}const ct=D/10;if(jt==="ruin"){const C=a(new Et,-D*.25,0,-D*.1);C.add(a(o(new se(1.7*ct,1.9*ct,5.5*ct,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*ct,0));for(let Z=0;Z<7;Z++){const Mt=Z/7*xn*2;C.add(a(o(new Ct(.7*ct,d(.4,1.6)*ct,.5*ct),x.stone),Math.cos(Mt)*1.6*ct,5.6*ct,Math.sin(Mt)*1.6*ct))}C.add(a(o(new Ct(.4*ct,1*ct,.1),x.pane,!1),0,2.6*ct,1.85*ct)),Wt.add(C);for(const Z of[-1,1])Wt.add(a(o(new Ct(.7*ct,3.2*ct,.7*ct),x.stone),D*.35+Z*1.3*ct,1.6*ct,D*.3));Wt.add(a(o(new Ct(3.3*ct,.6*ct,.7*ct),x.stone),D*.35,3.4*ct,D*.3)),Wt.add(a(E(2.4),D*.1,0,D*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[Z,Mt,pt]of S)Zt(Wt,pt,1.2*ct,Z*D,Mt*D);he(Wt,D,jt,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(jt==="farm"){const C=a(new Et,-D*.2,0,-D*.15);C.add(a(o(u(new Ct(3.6*ct,2.2*ct,2.8*ct),2.2*ct,1.3),x.plankWall),0,1.1*ct,0));const S=new se(2.1*ct,2.1*ct,4*ct,3,1);C.add(a(l(o(S,r("#ffffff",{map:i.roof})),0,0,xn/2),0,2.2*ct+.9*ct,0)),C.add(a(o(new Ct(.8*ct,1.5*ct,.1),x.woodD),0,.75*ct,1.42*ct)),C.add(a(o(new Ct(.6*ct,.6*ct,.1),x.pane,!1),1.1*ct,1.3*ct,1.42*ct)),Wt.add(C);const Z=o(new ln(D*.8,D*.5),r("#ffffff",{map:i.field}),!1);Z.rotation.x=-xn/2,Z.position.set(D*.3,.03,D*.25),Wt.add(Z);const Mt=a(new Et,D*.35,0,-D*.45);Mt.add(a(o(new se(.8*ct,1.2*ct,4*ct,12),r("#e3d5b6")),0,2*ct,0)),Mt.add(a(o(new Pn(1.2*ct,1.4*ct,12),r("#ffffff",{map:i.roof})),0,4.7*ct,0));const pt=a(new Et,0,3.6*ct,1*ct);for(let Nt=0;Nt<4;Nt++){const zt=new Et;zt.rotation.z=Nt*xn/2,zt.add(a(o(new Ct(.5*ct,2.6*ct,.04),r("#e3d5b6",{side:Sn})),.3*ct,1.5*ct,0)),pt.add(zt)}Mt.add(pt),g.push({o:pt,axis:"z",v:.4}),Wt.add(Mt),Zt(Wt,"tree_maple",1.1*ct,-D*.55,D*.4),Wt.add(a(P(.5*ct),D*.05,0,D*.55)),he(Wt,D,jt,[[-.55,.4]])}else if(jt==="shrine"){for(let S=0;S<6;S++){const Z=S/6*xn*2;Wt.add(a(l(o(new Ct(.7*ct,d(2,3)*ct,.5*ct),x.stone),0,-Z,d(-.1,.1)),Math.cos(Z)*3*ct,1.2*ct,Math.sin(Z)*3*ct))}Wt.add(w(4*ct));for(const S of[.8,3.9])Wt.add(a(I(0,1.2*ct),Math.cos(S)*1.8*ct,0,Math.sin(S)*1.8*ct));const C=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,Z]of C)Zt(Wt,"tree_maple",1.1*ct,S*D,Z*D);he(Wt,D,jt,C)}else{const C=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[Mt,pt,Nt]of C)Zt(Wt,Nt,1.2*ct,Mt*D,pt*D);he(Wt,D,jt,C),Wt.add(a(l(o(new Ai(D*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-xn/2,0,0),D*.25,.04,D*.3));const S=new Ve(new ln(1.8*ct,D*3.2),new qn({map:ft,color:"#acb5c8",transparent:!0,opacity:.85,side:Sn,depthWrite:!1}));S.position.set(D*.62,-D*1.6,D*.62),S.rotation.y=xn/4,Wt.add(S);const Z=o(new ln(1.2*ct,D*.55),r("#6fa9c9"),!1);Z.rotation.set(-xn/2,0,-xn/4),Z.position.set(D*.45,.05,D*.45),Wt.add(Z)}return Wt}Kt(-150,6,-105,11,"ruin",.4),Kt(165,-4,-60,13,"farm",1.7),Kt(115,20,135,9,"shrine",2.9),Kt(-165,-14,85,12,"falls",4.1);const re={};function pe(Ft){const Lt=re[Ft];if(Lt)return Lt;const Gt={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Ft],D=s.canvasTex(256,256,(te,Wt,Rt)=>{const ee=te.createRadialGradient(Wt/2,Rt/2,Wt*.3,Wt/2,Rt/2,Wt/2);ee.addColorStop(0,"rgba(255,255,255,1)"),ee.addColorStop(1,"rgba(255,255,255,0)"),te.fillStyle=ee,te.fillRect(0,0,Wt,Rt)});D.wrapS=D.wrapT=si;const jt={src:Gt,mask:D};return re[Ft]=jt,jt}let Jt=0;function de(Ft,Lt,Gt,D,jt,te=0,Wt=.012,Rt=4){const ee=pe(Ft),xt=c(ee.src,D*2/Rt,jt*2/Rt),ct=new Ve(new ln(D*2,jt*2),r("#ffffff",{map:xt,alphaMap:ee.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Jt}));return ct.rotation.set(-xn/2,0,te),ct.position.set(Lt,Wt,Gt),ct.receiveShadow=!0,ct.renderOrder=-10+Jt++*.01,n.add(ct),ct}const We={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},fe={},Me=Ft=>{const Lt=Math.max(0,Math.min(1,Ft));return Lt*Lt*(3-2*Lt)},we=[],At=Ft=>Ft==="cobble"||Ft==="flag",qt=Ft=>Ft.closed?[...Ft.line,Ft.line[0]]:Ft.line;function ne(Ft,Lt){let Gt=null,D=1e9;for(const jt of Ps){if(jt===Lt||jt.kind==="stones")continue;const te=sa(Ft[0],Ft[1],qt(jt))-jt.w/2;te<D&&(D=te,Gt=jt)}return D<.6?Gt:null}function oe(Ft,Lt,Gt){const D=qt(Gt),jt=Gt.w/2+.02,te=Lt?[...Ft].reverse():[...Ft];let Wt=0;for(;Wt<te.length-2&&sa(te[Wt][0],te[Wt][1],D)<jt;)Wt++;if(Wt===0)return null;let Rt=te[Wt-1],ee=te[Wt];for(let C=0;C<12;C++){const S=[(Rt[0]+ee[0])/2,(Rt[1]+ee[1])/2];sa(S[0],S[1],D)<jt?Rt=S:ee=S}const ct=[[(Rt[0]+ee[0])/2,(Rt[1]+ee[1])/2],...te.slice(Wt)];return Lt?ct.reverse():ct}function Ot(Ft,Lt){const Gt=Ft.kind;let D=qt(Ft);const jt=Ft.closed?[!1,!1]:[!Ft.refs[0],!Ft.refs[Ft.refs.length-1]];if(!Ft.closed&&At(Gt))for(const Pt of[0,1]){if(!jt[Pt])continue;const X=Pt?D[D.length-1]:D[0],_t=ne(X,Ft);if(!_t||_t.kind===Gt||!At(_t.kind))continue;const gt=oe(D,Pt===1,_t);if(!gt)continue;D=gt,jt[Pt]=!1;const Yt=Pt?D[D.length-1]:D[0],et=Pt?D[D.length-2]:D[1],K=Math.hypot(Yt[0]-et[0],Yt[1]-et[1])||1;we.push({x:Yt[0],z:Yt[1],tx:(Yt[0]-et[0])/K,tz:(Yt[1]-et[1])/K,w:Ft.w,kind:Gt})}const te=D.length,[Wt,Rt,ee,xt]=We[Gt],ct=[0];for(let Pt=1;Pt<te;Pt++){const X=D[Pt],_t=D[Pt-1];ct.push(ct[Pt-1]+Math.hypot(X[0]-_t[0],X[1]-_t[1]))}const C=ct[te-1],S=.02+Lt*.0015,Z=[],Mt=[],pt=[],Nt=[];for(let Pt=0;Pt<te;Pt++){const X=D[Math.max(0,Pt-1)],_t=D[Math.min(te-1,Pt+1)];let gt=_t[0]-X[0],Yt=_t[1]-X[1];if(Ft.closed&&(Pt===0||Pt===te-1)){const lt=D[te-2],Ht=D[1];gt=Ht[0]-lt[0],Yt=Ht[1]-lt[1]}const et=Math.hypot(gt,Yt)||1,K=-Yt/et,dt=gt/et;let Dt=1,_=1;if(!Ft.closed)for(const lt of[0,1]){const Ht=lt?C-ct[Pt]:ct[Pt];jt[lt]&&(Dt=Math.max(Dt,1+.5*(1-Me(Ht/2.4))),_=Math.min(_,Me(Ht/2.2)))}const k=Ft.w/2*Dt,Y=[-(k+ee),-(k-ee),k-ee,k+ee],O=[0,_,_,0],st=D[Pt];for(let lt=0;lt<4;lt++){const Ht=st[0]+K*Y[lt],me=st[1]+dt*Y[lt];Z.push(Ht,S,me),Mt.push(Ht/Rt,me/Rt),pt.push(1,1,1,O[lt])}if(Pt>0)for(let lt=0;lt<3;lt++){const Ht=(Pt-1)*4+lt,me=Ht+1,Re=Pt*4+lt,ye=Re+1;Nt.push(me,ye,Ht,Ht,ye,Re)}}const zt=new gn;zt.setAttribute("position",new Fe(Z,3)),zt.setAttribute("uv",new Fe(Mt,2)),zt.setAttribute("color",new Fe(pt,4)),zt.setIndex(Nt),zt.computeVertexNormals();let vt=fe[Gt];vt||(vt=r("#ffffff",{map:Wt,normalMap:p(xt,Gt==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),fe[Gt]=vt);const Tt=new Ve(zt,vt);Tt.receiveShadow=!0,Tt.renderOrder=-5+Lt*.01,n.add(Tt)}const Pe=[];function $t(Ft){const Lt=Ft.length,Gt=Ft.map(([Wt,Rt])=>sa(Wt,Rt,ga)<1.35);if(!Gt.some(Boolean))return[{pts:[...Ft],closed:!0}];const D=Gt.findIndex((Wt,Rt)=>!Wt&&Gt[(Rt-1+Lt)%Lt]),jt=[];let te=[];for(let Wt=0;Wt<=Lt;Wt++){const Rt=(D+Wt)%Lt;if(!Gt[Rt]&&Wt<Lt){te.push(Ft[Rt]);continue}if(te.length>1&&jt.push({pts:te,closed:!1}),Wt<Lt&&Gt[Rt]&&te.length){let ee=Wt;for(;ee<Lt&&Gt[(D+ee)%Lt];)ee++;const xt=te[te.length-1],ct=Ft[(D+ee)%Lt],C=ct[0]-xt[0],S=ct[1]-xt[1],Z=Math.hypot(C,S);Pe.push({x:(xt[0]+ct[0])/2,z:(xt[1]+ct[1])/2,ang:Math.atan2(-S,C),len:Z})}te=[]}return jt}Ps.forEach((Ft,Lt)=>{if(Ft.kind!=="stones"){Ot(Ft,Lt);return}const Gt=i.roadStones.clone();Gt.wrapS=si,Gt.wrapT=Si,Gt.repeat.set(1,1/1.3),Gt.needsUpdate=!0;const D=r("#ffffff",{map:Gt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const jt of $t(Ft.line)){const te=new Ve(Ad(jt.pts,Ft.w,jt.closed,.03),D);te.receiveShadow=!0,n.add(te)}});{const Ft=(ee,xt,ct,C,S,Z)=>{const Mt=S-ct,pt=Z-C,Nt=Mt*Mt+pt*pt||1,zt=Math.max(0,Math.min(1,((ee-ct)*Mt+(xt-C)*pt)/Nt));return Math.hypot(ee-ct-Mt*zt,xt-C-pt*zt)},Lt=(ee,xt,ct,C)=>{for(const S of Ps){if(S===ct)continue;const Z=qt(S),Mt=S.w/2+C;for(let pt=0;pt<Z.length-1;pt++){const Nt=Z[pt],zt=Z[pt+1];if(!(Math.abs(Nt[0]-ee)>Mt+1||Math.abs(Nt[1]-xt)>Mt+1)&&Ft(ee,xt,Nt[0],Nt[1],zt[0],zt[1])<Mt)return!0}}return!1},Gt=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],D=(ee,xt)=>{const ct=Math.hypot(ee,xt),C=Math.atan2(xt,ee);if(ct>7.4&&ct<9&&Gt.some(S=>{let Z=Math.abs(C-S)%(2*xn);return Z=Math.min(Z,2*xn-Z),Z*ct<1.45}))return!0;for(const S of _a)if(S.kind==="house"){const[Z,Mt]=eo(S,ee,xt);if(Math.abs(Z)<S.w/2+.9&&Math.abs(Mt)<S.d/2+.9||S.deck&&Z>S.deck[0]-.5&&Z<S.deck[1]+.5&&Mt>S.deck[2]&&Mt<S.deck[3]+.5)return!0}else if(Math.hypot(ee-S.x,xt-S.z)<S.r+.6)return!0;for(const S of kc)if(S.kind==="hut"){const[Z,Mt]=eo(S,ee,xt);if(Math.abs(Z)<S.w/2+.9&&Math.abs(Mt)<S.d/2+.9)return!0}else if(Math.hypot(ee-S.x,xt-S.z)<(S.r||2)+.4)return!0;return Math.hypot(ee,xt)>zr(Math.atan2(xt,ee))-1.2},jt=[],te=[],Wt=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const ee of Ps){if(ee.kind==="stones")continue;const xt=qt(ee),ct=ee.kind!=="dirt",C=S=>{const Z=xt[Math.max(0,S-1)],Mt=xt[Math.min(xt.length-1,S+1)],pt=Math.hypot(Mt[0]-Z[0],Mt[1]-Z[1])||1;return[-(Mt[1]-Z[1])/pt,(Mt[0]-Z[0])/pt]};for(let S=0;S<xt.length;S++){const[Z,Mt]=C(S),pt=Math.atan2(Z,Mt)+xn/2,Nt=xt[S];for(const zt of[-1,1]){const vt=ee.w/2+.07,Tt=Nt[0]+Z*zt*vt,Pt=Nt[1]+Mt*zt*vt;if(!(D(Tt,Pt)||Lt(Tt,Pt,ee,.25))&&(ct&&jt.push({x:Tt,y:.04,z:Pt,sx:.2,sy:.13,sz:d(.4,.47),ry:pt+d(-.04,.04),c:ee.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const X=vt+(ct?.25:.1)+d(0,.35),_t=Nt[0]+Z*zt*X,gt=Nt[1]+Mt*zt*X;if(!D(_t,gt)&&!Lt(_t,gt,ee,.2)){const Yt=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let et=0;et<5;et++)te.push({x:_t+d(-.15,.15),y:.11,z:gt+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Yt})}}}}if(!ct&&ee.w>1.5)for(const S of[-1,1]){const Z=xt.map((pt,Nt)=>{const[zt,vt]=C(Nt);return[pt[0]+zt*S*.45,pt[1]+vt*S*.45]}),Mt=new Ve(Ad(Z,.18,!1,.035),Wt);Mt.receiveShadow=!0,Mt.renderOrder=-4,n.add(Mt)}}for(const ee of we){const xt=-ee.tz,ct=ee.tx,C=Math.max(2,Math.round((ee.w+.3)/.42));for(let S=0;S<C;S++){const Z=-((ee.w+.3)/2)+(S+.5)*(ee.w+.3)/C;jt.push({x:ee.x+xt*Z-ee.tx*.1,y:.045,z:ee.z+ct*Z-ee.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(xt,ct)+xn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new Xa(1,1,1,1,.2),jt,{cast:!1});const Rt=m(new Pn(.06,.24,4),te,{});Rt&&(Rt.userData.noLine=!0)}return{models:it,skyDome:b,sun:F,island:N,cloudRing:H,grassTex:rt,strataMat:Q,crossings:Pe,patch:de}}const{PI:Se}=Math;function xS(s){const{M:t,COL:e,TEX:n,toon:i,glow:r,mesh:o,rbox:a,at:l,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:x,tiled:m,planarUV:g,wallUV:y}=s,E=s.scene,w=[],I=[],P=[],v=[],b=x(64,128,(T,L,G)=>{const J=()=>{T.beginPath(),T.moveTo(L/2,2),T.bezierCurveTo(L*.62,G*.3,L*.98,G*.55,L*.86,G*.8),T.bezierCurveTo(L*.76,G*.98,L*.24,G*.98,L*.14,G*.8),T.bezierCurveTo(L*.02,G*.55,L*.38,G*.3,L/2,2),T.closePath()},ut=T.createLinearGradient(0,G,0,0);ut.addColorStop(0,"rgba(255, 246, 214, 1)"),ut.addColorStop(.3,"rgba(255, 196, 92, 1)"),ut.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ut.addColorStop(1,"rgba(220, 40, 30, 0)"),J(),T.fillStyle=ut,T.fill(),T.save(),T.translate(L*.5,G*.92),T.scale(.5,.55),T.translate(-L*.5,-G*.92),J(),T.fillStyle="rgba(255, 252, 235, 0.9)",T.fill(),T.restore()});b.wrapS=b.wrapT=si;const F=new us({map:b,color:new be(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),U=new us({map:b,color:new be(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),W=new us({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Ei});function rt(T,L,G,J,ut=1){const wt=new Et,j=new Vi(F);j.center.set(.5,.06),j.scale.set(.34*ut,.68*ut,1),wt.add(j);const A=new Vi(U);A.center.set(.5,.04),A.scale.set(.18*ut,.34*ut,1),wt.add(A);const yt=new Vi(W);return yt.scale.setScalar(1.5*ut),yt.position.y=.2*ut,wt.add(yt),wt.position.set(L,G,J),T.add(wt),I.push({f:wt,ph:u(0,6),s:ut}),wt}const Q=(()=>{const T=new Et,L=o(new an(.5,16,12),t.bone);L.scale.set(1,.92,1.05),L.position.y=.14,T.add(L),T.add(l(o(new Ct(.62,.28,.5),t.bone),0,-.24,.16));for(const G of[-1,1]){const J=o(new an(.14,10,8),t.dark,!1);J.scale.z=.5,J.position.set(G*.19,.08,.45),T.add(J)}return T.add(c(l(o(new Pn(.06,.12,3),t.dark,!1),0,-.1,.5),Se,0,0)),T.add(l(o(new Ct(.42,.03,.02),t.dark,!1),0,-.25,.42)),T})();function N(T=.3){const L=Q.clone();return L.scale.setScalar(T),L}function it(T=1,L=t.bone){const G=new Et;for(const J of[-1,1]){const ut=o(new Cn(.5*T,.09*T,6,12,Se*.6),L);ut.rotation.set(0,J>0?0:Se,.25),ut.position.set(J*.35*T,0,0),G.add(ut)}return G}let at=7;const q=(T,L)=>T+(L-T)*((at=at*16807%2147483647)/2147483647);function H(T,L,G,J,ut,wt,j,A,yt=0){const ot=l(o(yt?a(wt,j,A,yt):new Ct(wt,j,A),L),G,J,ut);return T.add(ot),ot}function nt(T,L,G,J=.75){const ut=new Ct(T,L,G),wt=ut.attributes.position;for(let j=0;j<wt.count;j++)wt.getY(j)<0&&(wt.setX(j,wt.getX(j)*J),wt.setZ(j,wt.getZ(j)*J));return ut.computeVertexNormals(),ut}function ht(T,L,G,J,ut,wt,j=Math.max(2,Math.round(G/.2))){const A=G/j;for(let yt=0;yt<j;yt++)H(T,wt,0,J+q(-.004,.004),-G/2+A*(yt+.5),L+q(-.02,.02),ut,A-.012,.012)}function bt(T,L,G,J,ut,wt){H(T,t.iron,L-ut*.055,G,J-wt*.012,.13,.014,.028),H(T,t.iron,L-ut*.012,G,J-wt*.055,.028,.014,.13)}const Zt=(()=>{const T=[];for(let L=0;L<=10;L++){const G=L/10;T.push(new Ut(.3+Math.sin(G*Se)*.06,(G-.5)*.8))}return new uh(T,20)})(),he=T=>.3+Math.sin((T/.8+.5)*Se)*.06;function ft(T=1,L=!1){const G=new Et,J=o(Zt,i("#ffffff",{map:n.planks}));for(const ut of[-.33,-.17,.17,.33])J.add(l(c(o(new Cn(he(ut)+.006,.02,5,24),t.iron),Se/2,0,0),0,ut,0));for(const ut of[-.17,.17])for(let wt=0;wt<6;wt++){const j=wt/6*Se*2;J.add(l(o(new an(.016,5,4),t.ironL),Math.cos(j)*(he(ut)+.025),ut,Math.sin(j)*(he(ut)+.025)))}J.add(l(c(o(new Ai(.3,20),t.woodD),-Se/2,0,0),0,.392,0)),J.add(l(c(o(new Cn(.3,.018,4,24),t.woodD),Se/2,0,0),0,.4,0));for(const ut of[-.1,0,.1])J.add(l(o(new Ct(.004,.004,.5),t.dark,!1),ut,.394,0));return J.add(l(o(new se(.035,.035,.03,8),t.woodL),.15,.4,.05)),J.scale.setScalar(T),L?(J.rotation.z=Se/2,J.position.y=.36*T):J.position.y=.4*T,G.add(J),G}const Kt=i("#ffffff",{map:x(128,128,(T,L,G)=>{T.fillStyle="#7a5538",T.fillRect(0,0,L,G);for(let J=0;J<4;J++)T.fillStyle=J%2?"#70502f":"#84603f",T.fillRect(0,J*32,L,30),T.fillStyle="rgba(40, 24, 14, 0.6)",T.fillRect(0,J*32+30,L,2)})});function re(T=.6){const L=new Et;H(L,Kt,0,T/2,0,T*.94,T*.94,T*.94);const G=T*.09,J=T/2-G/2;for(const ut of[-1,1])for(const wt of[-1,1])H(L,t.woodD,ut*J,T/2,wt*J,G,T,G),H(L,t.woodD,0,T/2+ut*J,wt*J,T-G*2,G,G),H(L,t.woodD,ut*J,T/2+wt*J,0,G,G,T-G*2);for(const ut of[-1,1]){const wt=H(L,t.woodD,0,T/2,ut*(T*.47+.006),T*1.1,G*.8,G*.4);wt.rotation.z=ut*Se/4}for(const ut of[-1,1])for(const wt of[-1,1])for(const j of[-1,1])H(L,t.iron,ut*(J+.006),T/2+wt*(J+.006),j*(J+.006),G*1.2,G*1.2,G*1.2);return L}function pe(){const T=new Et,L=o(new an(.28,12,10),i("#b8a07a"));return L.scale.set(1,1.15,.9),L.position.y=.3,T.add(L),T.add(l(o(new se(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),T}function Jt(T,L,G=.8,J=t.wood){const ut=new Et,wt=.07;ht(ut,T,L,G-wt/2,wt,J);for(const A of[-1,1])H(ut,t.woodD,0,G-wt-.06,A*(L/2-.12),T-.34,.12,.04,.01),H(ut,t.woodD,A*(T/2-.12),G-wt-.06,0,.04,.12,L-.34,.01);const j=nt(.1,G-wt,.1,.72);for(const[A,yt]of[[-1,-1],[1,-1],[-1,1],[1,1]])ut.add(l(o(j,t.woodD),A*(T/2-.12),(G-wt)/2,yt*(L/2-.12))),bt(ut,A*T/2,G+.004,yt*L/2,A,yt);H(ut,t.woodD,0,.17,0,T-.3,.06,.05,.01);for(const A of[-1,1])H(ut,t.woodD,A*(T/2-.12),.17,0,.05,.06,L-.3,.01);return ut}function de(T=.7){const L=new Et;L.add(l(o(new se(T,T,.08,24),t.wood),0,.76,0)),L.add(l(c(o(new Cn(T,.022,5,32),t.iron),Se/2,0,0),0,.76,0));for(const G of[-T*.5,0,T*.5])H(L,t.dark,G,.801,0,.006,.004,Math.sqrt(T*T-G*G)*1.96);L.add(l(o(new se(.08,.11,.7,10),t.woodD),0,.37,0)),L.add(l(o(new se(.13,.13,.06,10),t.iron),0,.5,0));for(let G=0;G<4;G++){const J=G*Se/2+Se/4,ut=H(L,t.woodD,Math.sin(J)*T*.25,.05,Math.cos(J)*T*.25,.09,.08,T*.6,.015);ut.rotation.y=J}return L}function We(){const T=new Et;T.add(l(o(new se(.24,.24,.07,16),t.wood),0,.45,0)),T.add(l(c(o(new Cn(.24,.012,4,20),t.iron),Se/2,0,0),0,.45,0));for(let L=0;L<3;L++){const G=L/3*Se*2+.5,J=o(new se(.028,.034,.46,6),t.woodD);J.position.set(Math.cos(G)*.15,.22,Math.sin(G)*.15),J.rotation.set(-Math.sin(G)*.2,0,Math.cos(G)*.2),T.add(J)}return T.add(l(c(o(new Cn(.16,.014,4,14),t.woodD),Se/2,0,0),0,.17,0)),T}function fe(T=1.8,L=!0){const G=new Et;for(const J of[-1,1])H(G,t.woodL,q(-.01,.01),.45,J*.11,T,.07,.2,.015);for(const J of[-1,1]){const ut=J*(T/2-.2);for(const wt of[-1,1]){const j=l(o(nt(.08,.44,.07,1),t.woodD),ut,.21,wt*.12);j.rotation.x=-wt*.2,G.add(j)}H(G,t.woodD,ut,.385,0,.09,.06,.44,.01),H(G,t.iron,ut,.487,.2,.1,.012,.03)}if(H(G,t.woodD,0,.14,0,T-.4,.05,.05,.01),L){for(const J of[-1,1])H(G,t.woodD,J*(T/2-.2),.74,-.21,.07,.56,.06,.012);for(const J of[.64,.9])H(G,t.woodL,q(-.01,.01),J,-.225,T-.1,.11,.05,.015)}return G}function Me(T=.16,L=0){const G=new Et;if(G.add(l(o(new se(.04,.045,T,10),i("#eadfc4")),0,T/2,0)),rt(G,0,T,0,.35),L){const J=new ls("#ffb36a",L,5,2);J.position.y=T+.15,G.add(J)}return G}function we(){const T=new Et;return T.add(l(N(.22),0,.12,0)),T.add(l(Me(.14),0,.24,0)),T}function At(T){const L=new Et,G=i(T,{emissive:T,emissiveIntensity:.18});return L.add(l(o(new se(.06,.07,.2,10),G),0,.1,0)),L.add(l(o(new se(.022,.03,.1,8),G),0,.25,0)),L}function qt(){const T=new Et;return T.add(l(o(new se(.07,.06,.15,12),t.woodL),0,.075,0)),T.add(l(c(o(new Ai(.062,12),i("#efe0b0")),-Se/2,0,0),0,.14,0)),T.add(l(o(new Cn(.045,.012,6,12),t.woodL),.08,.08,0)),T}function ne(T=1){const L=new Et;L.add(l(o(new se(.22*T,.16*T,.34*T,12),i("#8a4a30")),0,.17*T,0));for(let G=0;G<6;G++){const J=G/6*Se*2;d(L,new z(Math.cos(J)*.06*T,.32*T,Math.sin(J)*.06*T),new z(Math.cos(J)*.5,1,Math.sin(J)*.5),.5*T,.1*T,i(p([e.leaf,e.leafD,e.leafL])),0,5)}return L}const oe=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],Ot=s.UNIT_BOX;function Pe(T=2){const L=new Et,G=2.4,J=.5;H(L,i("#3a2519"),0,G/2,-J/2+.03,T-.1,G-.1,.04);for(const wt of[-1,1])H(L,t.woodD,wt*(T/2-.04),G/2,0,.08,G,J,.015);for(let wt=0;wt<4;wt++){const j=wt<3?.27+wt*.72:G-.03;H(L,t.wood,0,j,0,T-.14,.06,J-.04),H(L,t.woodL,0,j+.01,J/2-.02,T-.12,.08,.04,.01)}H(L,t.woodD,0,.1,.02,T,.2,J,.02),H(L,t.wood,0,G+.04,.02,T+.1,.08,J+.08,.02),H(L,t.woodD,0,G+.11,.03,T+.18,.07,J+.14,.02);for(const wt of[-1,1])H(L,t.iron,wt*(T/2-.02),G-.12,J/2+.004,.06,.2,.012),H(L,t.iron,wt*(T/2-.1),G-.04,J/2+.004,.2,.06,.012);L.add(l(N(.13),T/2-.25,2.62,.05));const ut=[];for(let wt=0;wt<3;wt++){let j=-T/2+.12;for(;j<T/2-.2;){if(f()<.12){j+=.18;continue}const A=u(.07,.14),yt=u(.34,.56),ot=f()<.1?.18:0;ut.push({x:j+A/2,y:.33+wt*.72+yt/2,z:.08,sx:A,sy:yt,sz:u(.28,.36),rz:ot,c:p(oe)}),j+=A+.012+ot*.4}}return s.instanced(Ot,ut,{parent:L,cast:!0}),L}function $t(T,L){const G=x(512,512,(wt,j)=>{L.forEach((A,yt)=>{wt.fillStyle=A,wt.beginPath(),wt.arc(j/2,j/2,j/2-yt*34,0,Se*2),wt.fill()}),wt.fillStyle=L[1];for(let A=0;A<12;A++){const yt=A/12*Se*2;wt.beginPath(),wt.arc(256+Math.cos(yt)*196,256+Math.sin(yt)*196,10,0,Se*2),wt.fill()}}),J=o(new Ai(T,48),i("#ffffff",{map:G}),!1);J.rotation.x=-Se/2,J.position.y=.012;const ut=new Et;return ut.add(J),ut}function Ft(T=n.painting){const L=new Et;for(const G of[-1,1]){const J=l(o(new Ct(.06,1.8,.06),t.wood),G*.36,.9,0);J.rotation.z=G*-.12,L.add(J)}return L.add(c(l(o(new Ct(.06,1.7,.06),t.wood),0,.84,-.3),.35,0,0)),L.add(l(o(new Ct(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),L.add(l(new Ve(new ln(.95,.72),new qn({map:T,toneMapped:!1})),0,1.25,.079)),L.add(l(o(new Ct(1,.05,.14),t.wood),0,.82,.08)),L}function Lt(T){const L=new Et;ht(L,1.7,.84,.745,.08,t.woodL,4),H(L,t.woodD,0,.78,.43,1.74,.05,.03,.01),H(L,t.wood,.55,.36,0,.5,.66,.76,.02);for(let J=0;J<3;J++)H(L,t.woodL,.55,.15+J*.2,.385,.44,.17,.02,.01),H(L,t.iron,.55,.17+J*.2,.402,.12,.025,.02);for(const J of[-.34,.34])L.add(l(o(nt(.09,.7,.09,.7),t.woodD),-.76,.35,J));H(L,t.woodD,-.76,.14,0,.05,.05,.62,.01);for(const J of[-1,1])bt(L,J*.85,.79,.42,J,1);const G={g:L,kb:null,screen:null,light:null};if(T==="screen"){const J=l(new Et,-.12,.805,-.25);J.userData.y0=.805,J.add(o(new Ct(.62,.035,.2),t.iron));for(const[yt,ot]of[[-.06,.54],[0,.56],[.06,.5]])J.add(l(o(new Ct(ot,.012,.04),r("#ff5a3a",.55),!1),0,.022,yt));L.add(J),G.kb=J;const ut=new Et;ut.add(o(new Ct(1.04,.7,.05),t.woodD));const wt=new qn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),j=c(l(new Ve(new ln(.92,.58),wt),0,0,-.03),0,Se,0);ut.add(j),G.screen=j,ut.add(l(new Ve(new ln(.92,.58),wt),0,0,.03)),ut.add(l(o(new Ct(.08,.13,.08),t.woodD),0,-.41,0)),ut.add(l(o(new Ct(.34,.02,.2),t.woodD),0,-.455,0)),ut.add(l(N(.09),.46,.4,0)),ut.position.set(-.12,1.25,.17),L.add(ut);const A=new ls("#7fe8ff",0,3.2,2);A.position.set(-.12,1.25,-.35),L.add(A),G.light=A,L.add(l(qt(),.6,.79,.15))}else T==="paper"?(L.add(c(l(new Ve(new ln(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-Se/2,0,0)),L.add(c(l(o(new se(.012,.012,.22,6),t.red),.35,.81,.1),0,0,Se/2)),L.add(l(Me(.12),.65,.79,-.25))):T==="books"&&(L.add(l(o(new Ct(.42,.06,.3),t.red),-.35,.82,0)),L.add(l(o(new Ct(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),L.add(l(o(new Ct(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),L.add(l(we(),.62,.79,-.22)));return L.add(l(o(new se(.25,.21,.44,14),t.woodD),0,.22,-.78)),G}function Gt(){const T=new Et;return T.add(l(o(new se(.3,.38,.5,10),t.woodD),0,.25,0)),T.add(l(o(new Ct(.34,.2,.22),t.iron),0,.6,0)),T.add(l(o(new Ct(.7,.14,.3),t.ironL),0,.77,0)),d(T,new z(.35,.77,0),new z(1,0,0),.32,.1,t.ironL,0,10),T.add(l(o(new Ct(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),T}function D(){const T=new Et;return T.add(l(o(new se(.06,.06,1.6,8),t.wood),0,.8,0)),T.add(l(o(new se(.28,.32,.8,12),t.straw),0,1.15,0)),T.add(l(o(new an(.22,12,10),t.straw),0,1.75,0)),T.add(l(o(new Ct(.9,.08,.08),t.wood),0,1.35,0)),T.add(l(c(o(new Cn(.3,.03,6,16),t.red),Se/2,0,0),0,1.2,0)),T}function jt(){const T=new Et;T.add(c(l(o(new se(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),Se/2,0,0));for(const L of[-1,1])T.add(c(l(o(new Ct(.06,1.4,.06),t.wood),L*.35,.7,-.2),0,0,L*.2));return T}function te(T=.42){const L=new Et;return L.add(c(l(o(new se(T,T,.7,16),t.straw),0,T,0),0,0,Se/2)),L}function Wt(T=0,L=1){const G=new Et;for(let J=0;J<3;J++){const ut=J/3*Se*2,wt=o(new se(.035,.045,1.1,6),t.iron);wt.position.set(Math.cos(ut)*.22,.5,Math.sin(ut)*.22),wt.rotation.set(Math.sin(ut)*.3,0,-Math.cos(ut)*.3),G.add(wt)}G.add(l(o(new se(.42,.24,.3,14,1,!0),t.iron),0,1.05,0)),G.add(c(l(o(new Ai(.36,14),t.dark,!1),0,1.12,0),-Se/2,0,0)),G.add(l(o(new an(.3,10,6,0,Se*2,0,Se/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let J=0;J<4;J++){const ut=J/4*Se*2;d(G,new z(Math.cos(ut)*.42,1.18,Math.sin(ut)*.42),new z(Math.cos(ut)*.4,1,Math.sin(ut)*.4),.22,.04,t.iron,0,5)}if(rt(G,0,1.12,0,1.6),T){const J=new ls("#ff9a4a",T,9,2);J.position.y=1.7,G.add(J),v.push({l:J,base:T,ph:u(0,6)})}return G.scale.setScalar(L),G}function Rt(){const T=new Et;T.add(c(l(o(new Ct(.06,.06,.3),t.iron),0,0,.12),0,0,0));const L=l(o(new se(.045,.06,.5,8),t.woodD),0,.12,.26);return L.rotation.x=.35,T.add(L),T.add(l(o(new se(.08,.06,.12,8),t.iron),0,.36,.34)),rt(T,0,.4,.35,.9),T}function ee(T=3.2,L=n.banner){const G=new Et;G.add(l(o(new se(.05,.07,T+.6,8),t.woodD),0,(T+.6)/2,0)),G.add(c(l(o(new se(.03,.03,1,6),t.iron),0,T+.4,.05),0,0,Se/2)),G.add(l(N(.16),0,T+.72,.02));const J=new Ve(new ln(.9,1.9,1,8),i("#ffffff",{map:L,side:Sn})),ut=J.geometry.attributes.position;for(let wt=0;wt<ut.count;wt++)ut.setZ(wt,Math.sin(ut.getY(wt)*2.6)*.05);return J.geometry.computeVertexNormals(),J.position.set(0,T-.55,.08),J.castShadow=!0,G.add(J),G}function xt(T=1.2,L=2.6){const G=new Et;G.add(c(l(o(new se(.04,.04,T+.3,6),t.iron),0,0,.04),0,0,Se/2));const J=o(new ln(T,L),i("#ffffff",{map:n.banner,side:Sn}),!1);return J.position.set(0,-L/2,.05),G.add(J),G}function ct(T=2.4){const L=new Et;L.add(l(o(new se(.05,.08,T,7),t.woodD),0,T/2,0)),L.add(l(N(.24),0,T+.12,0)),L.add(l(it(.5),0,T+.2,0));for(let G=0;G<3;G++){const J=o(new ln(.12,u(.5,.9)),i(p([e.red,e.redD,e.bone]),{side:Sn}),!1);J.position.set(Math.cos(G*2.1)*.08,T-.5,Math.sin(G*2.1)*.08),J.rotation.y=G*2.1,L.add(J)}return L}function C(T=3){const L=new Et,G=Math.max(2,Math.round(T/.9));L.add(c(l(o(new se(.1,.1,T,8),t.wood),0,.45,0),0,0,Se/2));for(let J=0;J<G;J++){const ut=-T/2+(J+.5)*T/G;for(const wt of[-1,1]){const j=new Et;j.add(l(o(new se(.07,.07,1.4,7),t.woodL),0,0,0)),j.add(l(o(new Pn(.07,.3,7),t.boneD),0,.85,0)),j.position.set(ut,.45,0),j.rotation.x=wt*.8,L.add(j)}}return L}function S(){const T=new Et;T.add(l(o(new se(.55,.5,.9,18),t.redD),0,.75,0)),T.add(l(o(new se(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let L=0;L<3;L++){const G=L/3*Se*2;T.add(c(l(o(new se(.04,.05,.7,6),t.woodD),Math.cos(G)*.42,.3,Math.sin(G)*.42),Math.sin(G)*.2,0,-Math.cos(G)*.2))}return T.add(l(c(o(new Cn(.53,.03,6,20),t.bone),Se/2,0,0),0,1.05,0)),T}function Z(T=4){const L=new Et,G=[e.red,e.woodL,e.redD,e.wood];for(let J=0;J<4;J++){const ut=o(new se(.42,.46,T/4,10),i(G[J]));ut.position.y=T/8+J*T/4,L.add(ut);for(const wt of[-1,1])L.add(l(o(new Ct(.12,.08,.06),t.bone),wt*.15,ut.position.y+.05,.42));L.add(l(o(new Ct(.36,.06,.06),t.dark),0,ut.position.y-.18,.43))}L.add(l(N(.45),0,T+.25,0)),L.add(l(it(1.1),0,T+.35,0));for(const J of[-1,1])L.add(c(l(o(new Ct(1,.12,.1),t.woodD),J*.55,T*.72,0),0,0,J*.2));return L}function Mt(T=1.9,L=2.6,G="#8a6a4a"){const J=new Et,ut=o(new Pn(T,L,8,1,!0),i(G,{side:Sn}));ut.position.y=L/2,J.add(ut);for(let wt=0;wt<3;wt++){const j=wt/3*Se*2+.4;J.add(c(l(o(new se(.04,.04,.9,6),t.woodD),Math.cos(j)*.12,L+.25,Math.sin(j)*.12),Math.sin(j)*.4,0,-Math.cos(j)*.4))}return J.add(c(l(o(new ln(.9,1.3),t.dark,!1),0,.65,T*.82),-.6,0,0)),J.add(c(l(o(new Cn(T*.62,.05,6,24),t.redD),0,L*.35,0),Se/2,0,0)),J}function pt(T=4){const L=new Et;L.add(l(o(new Ct(1.8,.1,.1),t.wood),0,1.25,0)),L.add(l(o(new Ct(1.8,.1,.1),t.wood),0,.3,.12));for(const G of[-1,1])L.add(l(o(new Ct(.1,1.35,.1),t.woodD),G*.85,.67,0));for(let G=0;G<T;G++){const J=-.6+G*1.2/(T-1),ut=new Et;G%2?(ut.add(l(o(new Ct(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ut.add(l(o(new Ct(.22,.05,.06),t.gold),0,.2,0))):(ut.add(l(o(new se(.03,.03,1.4,6),t.woodD),0,.7,0)),ut.add(l(o(new Ct(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ut.position.set(J,.05,.08),ut.rotation.z=.08,L.add(ut)}return L}function Nt(T=2){const L=new Et,G=[];for(let J=0;J<4;J++)for(let ut=0;ut<Math.floor(T/.26)-J;ut++)G.push([-T/2+.13+ut*.26+J*.13,.13+J*.22,0]);for(const[J,ut]of G)L.add(c(l(o(new se(.12,.12,.9,8),i(p([e.woodL,"#8a6440","#6e4a30"]))),J,ut,0),Se/2,0,0));return L}function zt(){const T=new Et;T.add(l(o(new Ct(1.6,.12,1),t.wood),0,.62,0));for(const L of[-1,1])T.add(l(o(new Ct(1.6,.36,.06),t.woodL),0,.85,L*.47)),T.add(c(l(o(new se(.42,.42,.08,14),t.woodD),0,.42,L*.58),Se/2,0,0));for(const L of[-1,1])T.add(c(l(o(new Ct(1.4,.07,.07),t.woodD),1.3,.55,L*.35),0,0,-.18));return T.add(l(pe(),-.3,.68,.1)),T.add(l(re(.4),.35,.68,-.15)),T}function vt(){const T=new Et;T.add(Jt(2.2,.9,.9,t.woodL));for(const[J,ut]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])T.add(l(o(new Ct(.08,2.2,.08),t.woodD),J,1.1,ut));const L=x(256,64,(J,ut,wt)=>{for(let j=0;j<8;j++)J.fillStyle=j%2?"#e3d5b6":"#8a2420",J.fillRect(j*32,0,32,wt)}),G=o(new Ct(2.5,.05,1.4),i("#ffffff",{map:L}));G.position.set(0,2.2,.15),G.rotation.x=.22,T.add(G);for(let J=0;J<9;J++)T.add(l(o(new an(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return T.add(l(re(.5),-1.4,0,.3)),T.add(l(ft(.8),1.5,0,-.1)),T}function Tt(){const T=new Et;T.add(l(o(g(new se(1,1.1,.9,22),1.2),t.stone),0,.45,0)),T.add(c(l(o(new Ai(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-Se/2,0,0));for(const G of[-1,1])T.add(l(o(new Ct(.14,1.7,.14),t.woodD),G*.95,1.5,0));const L=o(new Pn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return L.position.y=2.65,L.rotation.y=Se/4,T.add(L),T.add(c(l(o(new se(.06,.06,1.9,8),t.wood),0,2.05,0),0,0,Se/2)),T.add(l(o(new se(.15,.13,.22,10),t.woodL),.2,1.55,0)),T.add(l(N(.18),0,3.15,0)),T}function Pt(T=0){const L=new Et;L.add(l(o(new se(.07,.1,2.8,8),t.iron),0,1.4,0)),L.add(l(o(new Ct(.55,.06,.06),t.iron),.22,2.7,0));const G=new Et;if(G.add(o(new se(.14,.18,.32,8),t.iron)),G.add(l(o(new an(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),T){const J=new ls("#ffc477",T,9,2);G.add(J)}return G.position.set(.44,2.44,0),L.add(G),L}function X(){const T=new Et;H(T,t.wood,0,.25,0,1,.5,.6,.02),T.add(c(l(o(new se(.3,.3,1,16,1,!1,0,Se),t.woodL),0,.5,0),0,0,Se/2));for(const L of[-.38,.38])H(T,t.iron,L,.27,0,.07,.52,.62),T.add(l(c(o(new Cn(.31,.025,4,16,Se),t.iron),0,Se/2,0),L,.5,0));for(const L of[-1,1])for(const G of[-1,1])H(T,t.iron,L*.49,.05,G*.29,.06,.1,.06);H(T,t.gold,0,.44,.31,.16,.2,.025),H(T,t.dark,0,.42,.325,.03,.06,.01);for(const L of[-1,1])T.add(l(c(o(new Cn(.06,.012,4,12),t.iron),0,Se/2,0),L*.51,.3,0));return T.add(l(N(.1),0,.62,.22)),T}function _t(){const T=new Et;H(T,t.woodD,0,.25,0,1.3,.5,1.1,.03),H(T,t.red,0,.58,.05,1.08,.16,.9,.06),H(T,t.woodD,0,1.2,-.48,1.3,1.9,.2,.03),H(T,t.red,0,1.25,-.36,.9,1.3,.06,.03);for(let L=0;L<4;L++)for(const G of[-1,1])T.add(l(o(new an(.03,6,4),t.gold),G*.4,.7+L*.36,-.32));for(const L of[-1,1])H(T,t.woodD,L*.62,.75,0,.18,.5,1,.03),H(T,t.iron,L*.62,1.01,.1,.22,.04,.8,.01),T.add(l(N(.12),L*.62,1.1,.45)),d(T,new z(L*.55,2.15,-.48),new z(L*.3,1,0),.5,.08,t.bone,0,6);return T.add(l(N(.32),0,2.25,-.4)),T.add(l(it(1),0,2.3,-.4)),T}function gt(T=e.red){const L=new Et;return L.add(c(o(new se(.42,.42,.06,18),i(T)),Se/2,0,0)),L.add(c(l(o(new Cn(.42,.04,6,20),t.iron),0,0,.03),0,0,0)),L.add(l(N(.16),0,0,.08)),L}function Yt(){const T=new Et;return T.add(o(new Ct(.7,.8,.08),t.woodD)),T.add(l(N(.32),0,.02,.18)),T.add(l(it(1),0,.12,.16)),T}function et(T=.7,L=6){const G=new Et;G.add(l(o(new se(.012,.012,1,4),t.iron),0,.5,0)),G.add(c(o(new Cn(T,.04,6,24),t.iron),Se/2,0,0));for(let J=0;J<L;J++){const ut=J/L*Se*2;G.add(l(Me(.12),Math.cos(ut)*T,.02,Math.sin(ut)*T))}return G}function K(T,L,G,J){for(let ut=0;ut<L.length-1;ut++){const[wt,j]=L[ut],[A,yt]=L[ut+1],ot=5;for(let $=1;$<ot;$++){const B=$/ot,V=wt+(A-wt)*B,mt=j+(yt-j)*B,It=G-Math.sin(B*Se)*J;T.add(l(o(new an(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),V,It,mt))}const M=Math.hypot(A-wt,yt-j),R=o(new se(.008,.008,M,3),t.dark,!1);R.position.set((wt+A)/2,G-J*.6,(j+yt)/2),R.rotation.set(0,-Math.atan2(yt-j,A-wt),Se/2),T.add(R)}}function dt(T="round",L=1){const G=new Et;if(G.add(l(o(new se(.18*L,.3*L,1.8*L,8),t.wood),0,.9*L,0)),T==="pine")for(let J=0;J<4;J++)G.add(l(o(new Pn((1.5-J*.3)*L,1.4*L,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+J*.8)*L,0));else if(T==="dead")for(let J=0;J<4;J++){const ut=o(new se(.04*L,.1*L,1.2*L,6),t.woodD),wt=J*1.7;ut.position.set(Math.cos(wt)*.3*L,(1.6+J*.25)*L,Math.sin(wt)*.3*L),ut.rotation.set(Math.sin(wt)*.8,0,-Math.cos(wt)*.8),G.add(ut)}else{const J=T==="autumn"?[e.autumn1,e.autumn2,e.autumn3]:[e.leaf,e.leafD,e.leafL];for(const[ut,wt,j,A]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])G.add(l(o(new an(A*L,14,10),i(p(J))),ut*L,wt*L,j*L))}return G.rotation.y=u(0,3),G}const Dt=new Map;function _(T,L,G,J,ut=0){const wt=new Be().compose(new z(G,ut,J),new bn().setFromAxisAngle(new z(0,1,0),u(0,2*Se)),new z(L*u(.92,1.08),L*u(.9,1.12),L*u(.92,1.08))),j=Dt.get(T);return j?j.push(wt):Dt.set(T,[wt]),!0}function k(T){T.flora.scene.updateMatrixWorld(!0);for(const[L,G]of Dt){const J=qf(T.flora,L);if(!J)throw new Error(`no flora model for ${L}`);for(const[ut,wt]of Yf(s,J)){const j=wt.length===1?wt[0]:Mh(wt,!1);if(!j)continue;const A=new uo(j,ut,G.length);G.forEach((yt,ot)=>A.setMatrixAt(ot,yt)),A.castShadow=!ut.isMeshStandardMaterial,A.receiveShadow=!0,A.frustumCulled=!1,E.add(A)}}}function Y(){const T=new Et;T.add(l(o(new se(.3,.38,.6,8),t.stone),0,.3,0));const L=l(o(new dh(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return L.scale.y=1.7,T.add(L),P.push({o:L,axis:"y",v:.6,bob:!0,y0:1}),T}function O(){const T=new Et;T.add(l(o(new an(.5,16,10,0,Se*2,Se*.3,Se*.7),i("#2e2a2c",{side:Sn})),0,.55,0)),T.add(c(l(o(new Ai(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-Se/2,0,0));for(let L=0;L<3;L++){const G=L/3*Se*2;T.add(l(o(new se(.04,.04,.3,6),t.iron),Math.cos(G)*.32,.12,Math.sin(G)*.32))}return T}function st(T,L,G=.9,J=-1){for(let ut=0;ut<L.length-1;ut++){if(ut===J)continue;const[wt,j]=L[ut],[A,yt]=L[ut+1],ot=Math.hypot(A-wt,yt-j),M=-Math.atan2(yt-j,A-wt);for(const R of[G*.45,G*.85]){const $=o(new Ct(ot,.07,.06),t.woodL);$.position.set((wt+A)/2,R,(j+yt)/2),$.rotation.y=M,T.add($)}for(const[R,$]of[[wt,j],[A,yt]])T.add(l(o(new Ct(.12,G+.15,.12),t.woodD),R,(G+.15)/2,$))}}function lt(T){const L=new Et;L.add(l(o(new Ct(.1,2.2,.1),t.woodD),0,1.1,0));const G=x(256,96,(J,ut,wt)=>{J.fillStyle="#6a4630",J.fillRect(0,0,ut,wt),J.strokeStyle="#3a2419",J.lineWidth=8,J.strokeRect(4,4,ut-8,wt-8),J.fillStyle="#e3d5b6",J.font=`800 40px ${Bc}`,J.textAlign="center",J.textBaseline="middle",J.fillText(T,ut/2,wt/2+2)});return L.add(l(o(new Ct(1.1,.42,.06),i("#ffffff",{map:G})),.25,1.85,0)),L}function Ht(T=e.red){const L=new Et;for(const G of[-1,1])H(L,t.woodD,G*.48,.24,0,.07,.18,1.96,.015);for(const[G,J,ut]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])H(L,t.woodD,G,ut/2,J,.1,ut,.1,.015),L.add(l(o(new an(.065,8,6),t.wood),G,ut+.04,J));for(let G=0;G<5;G++)H(L,t.wood,-.32+G*.16,.66,-.98,.07,.5,.04,.01);return H(L,t.woodD,0,.92,-.98,.98,.09,.07,.015),H(L,t.woodD,0,.42,-.98,.98,.07,.07,.015),H(L,t.woodD,0,.5,.98,.98,.14,.06,.015),H(L,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),H(L,i(T),0,.5,.25,.96,.07,1.36,.03),H(L,i(T),0,.535,-.38,.96,.05,.16,.025),H(L,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),H(L,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),L.add(l(N(.12),0,1.08,-.94)),L}function me(){const T=new Et;T.add(Ht(e.redD));const L=Ht("#4a3a30");L.position.y=1.15,T.add(L);for(const[G,J]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])T.add(l(o(new Ct(.1,2.2,.1),t.wood),G,1.1,J));for(let G=0;G<5;G++)T.add(l(o(new Ct(.06,.05,.06),t.woodL),.52,.4+G*.3,.9));return T}function Re(){const T=new Et;H(T,t.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const L of[-1,1]){H(T,t.wood,L*.3,1.05,.31,.56,1.78,.03,.01);for(const G of[.62,1.48])H(T,t.woodL,L*.3,G,.33,.4,.66,.02,.008);for(const G of[.4,1.7])H(T,t.iron,L*.52,G,.33,.14,.05,.015);H(T,t.gold,L*.06,1.08,.34,.03,.14,.03)}H(T,t.wood,0,2.05,0,1.32,.1,.68,.02),H(T,t.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const L of[-1,1])for(const G of[-1,1])H(T,t.woodD,L*.54,.05,G*.24,.12,.1,.12,.02);return T}function ye(T,L=1.8){const G=new Et;return G.add(l(o(y(new Ct(.12,L,T),L,1.3),t.plankWall),0,L/2,0)),G.add(l(o(new Ct(.18,.1,T+.04),t.timber),0,L,0)),G}function ze(T=.8,L=1.6){const G=new Ve(new ln(T,L,6,1),i(e.red,{side:Sn})),J=G.geometry.attributes.position;for(let wt=0;wt<J.count;wt++)J.setZ(wt,Math.sin(J.getX(wt)*14)*.04);G.geometry.computeVertexNormals(),G.position.y=L/2+.1;const ut=new Et;return ut.add(G),ut.add(l(c(o(new se(.02,.02,T+.2,6),t.iron),0,0,Se/2),0,L+.12,0)),ut}function Ae(){const T=new Et;for(let L=0;L<5;L++)T.add(c(l(o(new se(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+L%3*.08,u(-.1,.1)),0,u(-.4,.4),Se/2));return T}function Xt(){const T=new Et;for(let G=0;G<3;G++){const J=G/3*Se*2;T.add(c(l(o(new se(.025,.03,1.3,6),t.woodD),Math.cos(J)*.22,.62,Math.sin(J)*.22),Math.sin(J)*.32,0,-Math.cos(J)*.32))}const L=l(c(o(new se(.07,.11,1.3,12),t.gold),.9,0,0),0,1.35,.15);return T.add(L),T}function ge(){const T=new Et;T.add(l(o(new se(.06,.22,.9,10),t.woodD),0,.45,0)),T.add(l(o(new an(.34,20,14),i("#2a3050")),0,1.25,0));for(let L=0;L<14;L++){const G=u(0,2*Se),J=u(-1.2,1.2);T.add(l(o(new an(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(G)*Math.cos(J)*.345,1.25+Math.sin(J)*.345,Math.sin(G)*Math.cos(J)*.345))}return T.add(l(c(o(new Cn(.4,.02,6,28),t.gold),0,Se/2,.3),0,1.25,0)),T}const hn=x(256,192,(T,L,G)=>{T.fillStyle="#d8c8a0",T.fillRect(0,0,L,G),T.strokeStyle="#6a4a30",T.lineWidth=3,T.beginPath(),T.moveTo(30,150),T.bezierCurveTo(60,60,140,40,220,90),T.bezierCurveTo(200,150,120,170,30,150),T.stroke(),T.fillStyle="#8a2420";for(const[J,ut]of[[90,100],[150,80],[180,120]])T.beginPath(),T.arc(J,ut,6,0,Se*2),T.fill();T.strokeStyle="rgba(106, 74, 48, 0.5)",T.setLineDash([6,6]),T.beginPath(),T.moveTo(90,100),T.lineTo(150,80),T.lineTo(180,120),T.stroke()});function En(){const T=new Et;return T.add(o(new Ct(1.4,1.05,.04),t.woodD)),T.add(l(new Ve(new ln(1.3,.95),new qn({map:hn,toneMapped:!1})),0,0,.03)),T}function An(){const T=new Et,L=i("#6e6668"),G=i("#4a4446"),J=i("#b8b0a8"),ut=o(new Ra(.32,.8,6,12),L);ut.rotation.x=Se/2,ut.position.set(0,.34,0),ut.scale.set(1.05,1,.85),T.add(ut),T.add(l(o(new an(.24,12,10),J),0,.22,.25));const wt=l(new Et,0,.5,.78);wt.add(o(new an(.24,14,10),L)),wt.add(c(l(o(new Pn(.12,.34,10),G),0,-.05,.26),Se/2,0,0)),wt.add(l(o(new an(.04,6,4),t.dark,!1),0,-.03,.43));for(const j of[-1,1])wt.add(c(l(o(new Pn(.07,.2,6),G),j*.13,.22,-.02),0,0,-j*.3)),wt.add(l(o(new an(.03,6,4),r("#ffb84a",1.2),!1),j*.1,.05,.2));wt.rotation.x=.25,T.add(wt);for(const[j,A]of[[-.2,.55],[.2,.55]])T.add(c(l(o(new Ra(.07,.36,4,8),L),j,.08,A+.15),Se/2,0,0));return T.add(c(l(o(new Pn(.12,.7,8),G),.25,.22,-.75),1.2,.6,0)),T.add(c(l(o(new Cn(.2,.03,6,16),t.red),0,.42,.62),Se/2.4,0,0)),T}return{FLAGS:w,FLAMES:I,SPINNERS:P,FIRE_LIGHTS:v,BOOK_COLS:oe,flameTex:b,flame:rt,skull:N,horns:it,fj:q,bx:H,taper:nt,boards:ht,cornerIron:bt,barrel:ft,crate:re,sack:pe,table:Jt,roundTable:de,stool:We,bench:fe,candle:Me,skullCandle:we,bottle:At,mug:qt,plant:ne,bookshelf:Pe,rug:$t,easel:Ft,desk:Lt,anvil:Gt,dummy:D,target:jt,hay:te,brazier:Wt,torch:Rt,poleBanner:ee,hangingBanner:xt,skullPole:ct,spikes:C,drum:S,totem:Z,tent:Mt,weaponRack:pt,woodpile:Nt,cart:zt,stall:vt,well:Tt,lampPost:Pt,chest:X,throne:_t,shield:gt,trophy:Yt,chandelier:et,lanternString:K,tree:dt,plantFlora:_,growFlora:k,crystal:Y,cauldron:O,fence:st,signPost:lt,bed:Ht,bunk:me,wardrobe:Re,partition:ye,curtain:ze,scrollStack:Ae,telescope:Xt,starGlobe:ge,wallMap:En,wolf:An,put:h}}const{PI:Rd}=Math;function vS(s,t,e,n){const{scene:i,COL:r,toon:o,mesh:a,at:l,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:x,growFlora:m,lampPost:g,skullPole:y}=t,E=Ch.pts;function w(Q,N){let it=!1;for(let at=0,q=E.length-1;at<E.length;q=at++){const[H,nt]=E[at],[ht,bt]=E[q];nt>N!=bt>N&&Q<(ht-H)*(N-nt)/(bt-nt)+H&&(it=!it)}return it}function I(Q,N,it,at,q,H){const nt=q-it,ht=H-at,bt=nt*nt+ht*ht||1,Zt=Math.max(0,Math.min(1,((Q-it)*nt+(N-at)*ht)/bt));return Math.hypot(Q-it-nt*Zt,N-at-ht*Zt)}const P=[...Ps.map(Q=>({w:Q.w*.65,pts:Q.closed?[...Q.line,Q.line[0]]:Q.line})),{w:1,pts:ga}],v=[],b=Zf.map(Q=>$n[Q]);function F(Q,N,it=.6){const at=Math.atan2(N,Q);if(Math.hypot(Q,N)>zr(at)-1.6)return!1;for(const q of P){const H=q.pts;for(let nt=0;nt<H.length-1;nt++){const ht=H[nt],bt=H[nt+1];if(!(Math.abs(ht[0]-Q)>q.w+it+1.5||Math.abs(ht[1]-N)>q.w+it+1.5)&&I(Q,N,ht[0],ht[1],bt[0],bt[1])<q.w+it)return!1}}for(const q of _a)if(q.kind==="house"){const[H,nt]=eo(q,Q,N),ht=3.4+it;if(Math.abs(H)<q.w/2+ht&&nt>-q.d/2-ht&&nt<q.d/2+ht+(q.deck?4.5:0)+(q.id==="tavern"?5:0))return!1}else if(Math.hypot(Q-q.x,N-q.z)<q.r+(q.kind==="open"?2.2:1.4)+it)return!1;for(const q of kc)if(q.kind==="hut"){const[H,nt]=eo(q,Q,N);if(Math.abs(H)<q.w/2+2.6+it&&Math.abs(nt)<q.d/2+2.6+it)return!1}else if(Math.hypot(Q-q.x,N-q.z)<q.r+1.8+it)return!1;for(let q=0;q<E.length;q++){const[H,nt]=E[q],[ht,bt]=E[(q+1)%E.length];if(I(Q,N,H,nt,ht,bt)<Ch.thick/2+.8+it||Math.hypot(Q-H,N-nt)<3.6+it)return!1}if(Math.hypot(Q+44,N-26)<6+it||Math.hypot(Q-Ph[0],N-Ph[1])<9+it)return!1;for(const q of b)if(Math.hypot(Q-q.x,N-q.z)<1.2+it)return!1;for(const q of v)if(Math.hypot(Q-q.x,N-q.z)<q.r+it)return!1;return!0}function U(Q,N,it,at){let q=0;for(let H=0;H<N&&q<Q;H++){const nt=f(0,2*Rd),ht=Math.sqrt(d())*58,bt=Math.cos(nt)*ht*1.04,Zt=Math.sin(nt)*ht*.9;it(bt,Zt)&&(at(bt,Zt),q++)}}U(34,6e3,(Q,N)=>w(Q,N)&&F(Q,N,1.4),(Q,N)=>{x(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),Q,N),v.push({x:Q,z:N,r:2.2})}),U(80,9e3,(Q,N)=>!w(Q,N)&&F(Q,N,1.6),(Q,N)=>{x(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),Q,N),v.push({x:Q,z:N,r:2.4})});{const Q=[],N=[],it=[];U(90,9e3,(at,q)=>F(at,q,.5),(at,q)=>{const H=f(.55,1);x(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),H*1.25,at,q),v.push({x:at,z:q,r:H})}),U(60,6e3,(at,q)=>F(at,q,.4),(at,q)=>{const H=f(.25,.8);Q.push({x:at,y:H*.3,z:q,sx:H,sy:H*f(.5,.85),sz:H*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),v.push({x:at,z:q,r:H})}),U(1200,16e3,(at,q)=>F(at,q,.1),(at,q)=>{const H=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let nt=0;nt<4;nt++)N.push({x:at+f(-.12,.12),y:.11,z:q+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:H})}),U(320,12e3,(at,q)=>F(at,q,.1),(at,q)=>{it.push({x:at,y:.16,z:q,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Gi(1,0),Q,{cast:!0});for(const at of[p(new Pn(.06,.24,4),N,{}),p(new an(.09,7,5),it,{})])at&&(at.userData.noLine=!0)}m(n);for(const[Q,N,it]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const at=Ps.find(H=>H.id===Q);if(!at)continue;const q=at.line;for(let H=6;H<q.length-6;H+=N*2){const[nt,ht]=q[H-1],[bt,Zt]=q[H+1],he=q[H],ft=Math.hypot(bt-nt,Zt-ht)||1,Kt=-(Zt-ht)/ft,re=(bt-nt)/ft,pe=H/(N*2)%2?1:-1,Jt=he[0]+Kt*pe*(at.w*.62+.5),de=he[1]+re*pe*(at.w*.62+.5);if(Q==="ring"&&Math.hypot(Jt,de)<10)continue;let We=!0;for(const fe of b)Math.hypot(Jt-fe.x,de-fe.z)<2&&(We=!1);for(const fe of _a)fe.kind!=="house"&&Math.hypot(Jt-fe.x,de-fe.z)<fe.r+.5&&fe.id!=="court"&&(We=!1);We&&h(i,it==="lamp"?g(0):y(f(2,2.6)),Jt,de,Math.atan2(-Kt*pe,-re*pe))}}const W=[];function rt(){const Q=new Et,N=o("#2a2426");Q.add(l(a(new an(.16,8,6),N),0,0,0)),Q.children[0].scale.set(1,.8,1.6),Q.add(l(a(new an(.1,8,6),N),0,.08,.2)),Q.add(c(l(a(new Pn(.03,.12,4),o("#c79a45")),0,.07,.33),Rd/2,0,0));for(const it of[-1,1]){const at=l(new Et,it*.1,.02,0);at.add(l(a(new Ct(.55,.03,.22),N),it*.27,0,0)),Q.add(at)}return Q}for(let Q=0;Q<6;Q++){const N=rt();N.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},N.scale.setScalar(1.8),i.add(N),W.push(N)}for(const Q of["war","library","tavern"]){const N=e.HOUSES[Q];if(!N)continue;const it=N.roof;for(let at=0;at<2;at++){const q=rt(),H=q.children[3],nt=q.children[4];H.visible=nt.visible=!0,H.rotation.z=.9,nt.rotation.z=-.9,q.position.set(f(-N.r.w/3,N.r.w/3),it.hR+.3,0),q.rotation.y=f(0,6),it.R.add(q)}}return{CROWS:W}}async function yS(s){const t=s.reducedMotion;let e=s.width,n=s.height;const i=new XM({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});fS(i,e,n,s.dpr);const r=new p0,o=pS(i,r),a=jy(),l=sS(),c=dS(),h=xS(o),d=await _S(o,h,a);await c;const f=gS(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=I1(o,h,d,f,d.models),p=vS(o,h,f,d.models),{TEX:x,COL:m,toon:g,rnd:y,rr:E,pick:w,_c:I}=o,{FLAMES:P,SPINNERS:v,FLAGS:b,FIRE_LIGHTS:F}=h,{HOUSES:U,deskF:W,deskB:rt,hearthLight:Q}=f,{mouthMat:N,coreMat:it,fireLight:at,chimneyTop:q,emberBase:H,waterTex:nt,fallTex:ht,mists:bt,skyBoat:Zt,airship:he}=u,{CROWS:ft}=p,{skyDome:Kt,cloudRing:re}=d,pe=Object.fromEntries(zi.map(tt=>[tt,y()*6])),Jt=rS(d.crossings),de=hS(o,r,await l,{reducedMotion:t,phases:pe,start:Ms,groundY:Jt,flameTex:h.flameTex}),We=Object.values(de.actors),fe=()=>Object.fromEntries(zi.map(tt=>[tt,Wi(Ms[tt])]));let Me=fe(),we=null,At=!1;const qt=new Set,ne={},oe=[];{const tt=new Set;for(const Te of Object.values(U)){for(const Ce of Object.values(Te.sides))tt.add(Ce.up);if(tt.add(Te.roof.R),Te.upper){const Ce=Te.upper;tt.add(Ce.U);const Qt=new Map;Ce.U.traverse(ke=>{if(!(ke instanceof Ve))return;const Ge=ke.material;let Xe=Qt.get(Ge);Xe||(Xe=Ge.clone(),Qt.set(Ge,Xe),Ce.mats.push(Xe)),ke.material=Xe})}}for(const Te of We)tt.add(Te.root);for(const{f:Te}of P)tt.add(Te);for(const Te of v)tt.add(Te.o);for(const Te of b)tt.add(Te);for(const Te of ft)tt.add(Te);[W.g,rt.g,Zt,he,re,Kt].forEach(Te=>tt.add(Te)),r.updateMatrixWorld(!0);const St=new Map,Vt=["position","normal","uv"],ue=Te=>{if(tt.has(Te))return;for(const xe of[...Te.children])ue(xe);if(!(Te instanceof Ve)||Te instanceof uo||Te.children.length||Array.isArray(Te.material))return;const Ce=Te.material,Qt=Te.geometry;if(Ce.transparent||Ce.vertexColors||Ce.isShaderMaterial||Ce.depthWrite===!1||!Qt.attributes.uv||!Qt.attributes.normal||Qt.attributes.color)return;const ke=Qt.index?Qt.toNonIndexed():Qt.clone();for(const xe of Object.keys(ke.attributes))Vt.includes(xe)||ke.deleteAttribute(xe);ke.morphAttributes={},ke.clearGroups(),ke.applyMatrix4(Te.matrixWorld);const Ge=Ce.uuid+(Te.castShadow?"s":"n"),Xe=St.get(Ge);Xe?Xe.geos.push(ke):St.set(Ge,{m:Ce,cast:Te.castShadow,geos:[ke]}),Te.parent?.remove(Te)};ue(r);for(const{m:Te,cast:Ce,geos:Qt}of St.values()){const ke=Mh(Qt,!1);if(!ke){console.warn("could not merge",Te.type);continue}const Ge=new Ve(ke,Te);Ge.castShadow=Ce,Ge.receiveShadow=!0,Ge.matrixAutoUpdate=!1,r.add(Ge)}const Oe=new qn({visible:!1});for(const[Te,Ce]of Object.entries(U)){const Qt=Ce.top+Ce.roof.hR,ke=new Ve(new Ct(Ce.r.w+.6,Qt,Ce.r.d+.6),Oe);ke.position.set(Ce.r.x,Qt/2,Ce.r.z),ke.rotation.y=Ce.r.ry||0,ke.userData.houseId=Te,r.add(ke),ke.updateMatrixWorld(!0),oe.push(ke)}}const Ot=new li(Jn.fov,e/n,Jn.near,Jn.far),Pe={t:new z(...Jn.home.target),p:new z(...Jn.home.position)};Ot.position.copy(Pe.p);const $t=new qM(Ot,i.domElement);$t.target.copy(Pe.t),$t.enableDamping=!0,$t.dampingFactor=.08,$t.minDistance=Jn.minDistance,$t.maxDistance=Jn.maxDistance,$t.maxPolarAngle=Jn.maxPolarAngle,$t.minPolarAngle=Jn.minPolarAngle,$t.screenSpacePanning=!1,$t.zoomSpeed=.8,$t.update();function Ft(){const tt=$t.target,St=Math.hypot(tt.x,tt.z),Vt=Jn.targetRadius;if(St>Vt){const ue=Vt/St;Ot.position.x-=tt.x*(1-ue),Ot.position.z-=tt.z*(1-ue),tt.x*=ue,tt.z*=ue}if(tt.y<Jn.targetMinY||tt.y>Jn.targetMaxY){const ue=Math.max(Jn.targetMinY,Math.min(Jn.targetMaxY,tt.y));Ot.position.y+=ue-tt.y,tt.y=ue}Ot.position.y<Jn.minHeight&&(Ot.position.y=Jn.minHeight)}let Lt=null,Gt=null,D=!1;function jt(tt,St){if(t){$t.target.copy(tt),Ot.position.copy(St),$t.update();return}Lt={t0:performance.now(),dur:1100,ft:$t.target.clone(),fp:Ot.position.clone(),tt,tp:St}}function te(tt){if(tt==="overview"){Gt=null,jt(Pe.t.clone(),Pe.p.clone());return}const St=U[tt];Gt=tt,St&&(St.view="ground");const Vt=m1(tt,[Ot.position.x-$t.target.x,Ot.position.z-$t.target.z]);jt(new z(...Vt.target),new z(...Vt.position))}let Wt=null,Rt=null,ee=null,xt=null;const ct=new bf,C=new Ut,S=We.map(tt=>tt.root);function Z(tt){const St=i.domElement.getBoundingClientRect();if(St.width===0||St.height===0)return null;C.set((tt.clientX-St.left)/St.width*2-1,-((tt.clientY-St.top)/St.height)*2+1),ct.setFromCamera(C,Ot);for(let Vt=ct.intersectObjects(S,!0)[0]?.object??null;Vt;Vt=Vt.parent){const ue=Vt.userData.agentId;if(ue)return ue}return null}const Mt=()=>{Lt=null,ee=null,Wt?.()};let pt=0;const Nt=tt=>{Lt=null,xt={x:tt.clientX,y:tt.clientY,moved:!1}},zt=tt=>{!xt&&tt.pointerType==="mouse"&&tt.timeStamp-pt>90&&(pt=tt.timeStamp,i.domElement.style.cursor=Z(tt)?"pointer":""),!(!xt||xt.moved||Math.hypot(tt.clientX-xt.x,tt.clientY-xt.y)<=4)&&(xt.moved=!0,Mt())},vt=tt=>{const St=xt&&!xt.moved;if(xt=null,tt.type!=="pointerup"||!St)return;const Vt=Z(tt);Vt&&Rt?.(Vt)},Pt=[["pointerdown",Nt],["pointermove",zt],["pointerup",vt],["pointercancel",vt],["wheel",Mt],["keydown",tt=>{tt.key.startsWith("Arrow")&&Mt()}]];for(const[tt,St]of Pt)i.domElement.addEventListener(tt,St,{passive:!0});$t.listenToKeyEvents(i.domElement);const X=tt=>{if(!ee)return!1;const St=$n[Me[ee].spot];return St.room===tt.id&&!St.out},_t=tt=>D||Gt===tt.id||!!tt.near||X(tt);function gt(tt,St){const Vt=$t.target,ue=Math.hypot(tt.r.x-Vt.x,tt.r.z-Vt.z),Oe=Math.max(tt.r.w,tt.r.d)*.8+9;tt.near=tt.near?St<72&&ue<Oe+4:St<64&&ue<Oe}function Yt(tt,St,Vt){if(Vt.fading!==St){Vt.fading=St;for(const ue of tt)ue.transparent=St,ue.needsUpdate=!0}}function et(tt,St,Vt){const ue=St?0:1;tt.s+=(ue-tt.s)*Vt,Math.abs(tt.s-ue)<.004&&(tt.s=ue),tt.up.scale.y=Math.max(.001,tt.s),tt.up.visible=tt.s>.03}function K(tt){const St=Ot.position.distanceTo($t.target),Vt=t?1:Math.min(1,tt*5),ue=t?1:Math.min(1,tt*6);for(const Oe of Object.values(U)){gt(Oe,St);const Te=_t(Oe),Ce=Te&&!!Oe.upper&&Oe.view==="upper",Qt=Te?1:0;Oe.lift+=(Qt-Oe.lift)*Vt,Math.abs(Oe.lift-Qt)<.002&&(Oe.lift=Qt);const ke=Oe.roof;ke.R.position.y=ke.base+Oe.lift*3.4,ke.R.visible=Oe.lift<.97;for(const tn of ke.mats)tn.opacity=1-Oe.lift;const Ge=Ot.position.x-Oe.r.x,Xe=Ot.position.z-Oe.r.z,xe=Math.hypot(Ge,Xe)||1,Je=Math.cos(Oe.r.ry||0),Ln=Math.sin(Oe.r.ry||0),Dn=tn=>{const Rn=((tn.n[0]*Je+tn.n[1]*Ln)*Ge+(-tn.n[0]*Ln+tn.n[1]*Je)*Xe)/xe;return Rn>.32?tn.wish=!0:Rn<.06&&(tn.wish=!1),!!tn.wish};for(const tn of Object.values(Oe.sides))et(tn,Te&&!Ce&&Dn(tn),ue);if(Oe.upper){const tn=Oe.upper,Rn=Te&&!Ce?1:0;tn.lift+=(Rn-tn.lift)*Vt,Math.abs(tn.lift-Rn)<.002&&(tn.lift=Rn),Yt(tn.mats,tn.lift>0,tn),tn.U.position.y=tn.top+tn.lift*3.4,tn.U.visible=tn.lift<.97;for(const Zi of tn.mats)Zi.opacity=1-tn.lift;for(const Zi of Object.values(tn.sides))et(Zi,Ce&&Dn(Zi),ue)}}}function dt(tt,St,Vt,ue,Oe,Te){const Ce=new gn;Ce.setAttribute("position",new Vn(new Float32Array(tt*3),3));const Qt=new Vr(Ce,new $r({color:St,size:Vt,map:ue,transparent:!0,opacity:Oe,depthWrite:!1,blending:ue?ar:Ei}));return Qt.frustumCulled=!1,Qt.userData.seed=Float32Array.from({length:tt},()=>Math.random()),Qt.userData.h=Float32Array.from({length:tt},()=>Math.random()*Te),Qt.userData.top=Te,Qt.visible=!t,r.add(Qt),Qt}const Dt=[{at:q,p:dt(30,"#d8cfc6",2.2,x.soft,.5,9),heat:!0}];for(const tt of Object.values(U)){if(!tt.roof.smokeAt)continue;tt.g.updateMatrixWorld(!0);const St=tt.roof.R.localToWorld(new z(...tt.roof.smokeAt));Dt.push({at:St,p:dt(14,"#d8cfc6",1.4,x.soft,.45,5),house:tt})}const _=dt(60,"#ffb04a",.11,null,.9,4),k=[];for(let tt=0;tt<4;tt++){const St=new Vi(new us({map:x.spark,color:tt%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ei}));St.scale.setScalar(.25),W.g.add(St),k.push(St)}const Y=tt=>{const St=new Vi(new us({map:x.spark,color:tt%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ei}));return St.scale.setScalar(.22),St.raycast=()=>{},St},O=["yard-1","yard-2"].map((tt,St)=>{const Vt=$n[tt],ue=new Et;ue.position.set(Vt.x+Math.sin(Vt.ry)*1.1,1.2,Vt.z+Math.cos(Vt.ry)*1.1);const Oe=[0,1,2].map(Y);return ue.add(...Oe),r.add(ue),{spot:tt,sprites:Oe,ph:St*1.7}}),st={};for(const tt of["frontend","backend"]){const St=de.actors[tt].root.getObjectByName("mixamorigRightHand");if(!St)continue;const Vt=new Et,ue=new Ve(new se(.055,.05,.13,10),g(m.woodL)),Oe=new Ve(new se(.057,.057,.025,10),g("#f3ead2"));Oe.position.y=.075,Vt.add(ue,Oe),Vt.position.set(0,.09,.05),St.add(Vt),de.actors[tt].root.updateMatrixWorld(!0),Vt.scale.setScalar(1/St.getWorldScale(new z).x),Vt.visible=!1,st[tt]=Vt}const lt=[];{const tt=new Set;for(const Vt of Object.values(U)){tt.add(Vt.roof.R);for(const ue of Object.values(Vt.sides))tt.add(ue.up);if(Vt.upper){tt.add(Vt.upper.U);for(const ue of Object.values(Vt.upper.sides))tt.add(ue.up)}}r.updateMatrixWorld(!0);const St=[];r.traverse(Vt=>{Vt instanceof ls&&St.push(Vt)});for(const Vt of St){const ue=[];let Oe=!1;for(let Te=Vt.parent,Ce=0;Te&&Ce<40;Te=Te.parent,Ce++)tt.has(Te)&&ue.push(Te),Te.userData.agentId&&(Oe=!0);Oe||(r.attach(Vt),ue.length&&lt.push({l:Vt,anc:ue,base:Vt.intensity}))}}function Ht(){for(const tt of lt)tt.anc.every(Vt=>Vt.visible)?tt.l.intensity===0&&(tt.l.intensity=tt.base):tt.l.intensity=0}const me=1;r.updateMatrixWorld(!0);const Re=[];for(const{f:tt,s:St}of P){if(St<1.3)continue;let Vt=tt,ue=!1;for(let Oe=0;Vt&&Oe<40;Oe++)Vt.userData.movesWithWall===!0&&(ue=!0),Vt=Vt.parent;ue||Re.push(tt.getWorldPosition(new z))}function ye(tt){const St=new gn;St.setAttribute("position",new Vn(new Float32Array(tt*3),3)),St.setAttribute("color",new Vn(new Float32Array(tt*3),3));const Vt=new Vr(St,new $r({size:.09,map:x.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1}));return Vt.frustumCulled=!1,Vt.visible=!t,r.add(Vt),Vt}const ze=ye(Math.max(1,Re.length*7)),Ae=ze.geometry.attributes.position.count,Xt={src:Float32Array.from({length:Ae},(tt,St)=>St%Math.max(1,Re.length)),life:Float32Array.from({length:Ae},()=>Math.random()),sd:Float32Array.from({length:Ae},()=>Math.random())},ge=240,hn=new Vr(new gn,new $r({size:.07,map:x.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Ei}));hn.geometry.setAttribute("position",new Vn(new Float32Array(ge*3),3));const En=Float32Array.from({length:ge*3},()=>Math.random());hn.frustumCulled=!1,hn.visible=!t,r.add(hn);const An=80,T=new ln(.16,.1),L=new uo(T,g("#ffffff",{side:Sn}),An),G=[];for(let tt=0;tt<An;tt++)L.setColorAt(tt,I.set(w([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),G.push({x:E(-30,30),y:E(0,12),z:E(-30,30),r:E(0,6),v:E(.5,.9),w:E(1,3)});L.instanceColor&&(L.instanceColor.needsUpdate=!0),L.frustumCulled=!1,L.visible=!t,r.add(L);const J=new Be,ut=new bn,wt=new Xi,j=new z,A=new z(1,1,1);function yt(tt,St){const Vt=ze.geometry.attributes.position,ue=ze.geometry.attributes.color;for(let Ce=0;Ce<Vt.count;Ce++){const Qt=Re[Xt.src[Ce]];if(!Qt)break;Xt.life[Ce]=Xt.life[Ce]+St*(.35+Xt.sd[Ce]*.4),Xt.life[Ce]>1&&(Xt.life[Ce]=Xt.life[Ce]-1);const ke=Xt.life[Ce],Ge=Xt.sd[Ce];Vt.setXYZ(Ce,Qt.x+Math.sin(tt*(1+Ge)+Ge*20)*.25*ke,Qt.y+.2+ke*2.2,Qt.z+Math.cos(tt*(.8+Ge)+Ge*9)*.25*ke);const Xe=(1-ke)*(.6+.4*Math.sin(tt*13+Ge*30))*2.2;ue.setXYZ(Ce,Xe,Xe*.48,Xe*.16)}Vt.needsUpdate=!0,ue.needsUpdate=!0;const Oe=hn.geometry.attributes.position,Te=$t.target;for(let Ce=0;Ce<ge;Ce++){const Qt=En[Ce*3],ke=En[Ce*3+1],Ge=En[Ce*3+2],Xe=((Qt*44+tt*.25*(ke-.5)-Te.x)%44+66)%44-22,xe=((ke*44+tt*.18*(Qt-.3)-Te.z)%44+66)%44-22;Oe.setXYZ(Ce,Te.x+Xe,.6+Ge*9+Math.sin(tt*.5+Qt*20)*.4,Te.z+xe)}Oe.needsUpdate=!0;for(let Ce=0;Ce<An;Ce++){const Qt=G[Ce];Qt.y-=St*Qt.v,Qt.y<.05&&(Qt.y=E(8,13),Qt.x=Te.x+E(-28,28),Qt.z=Te.z+E(-28,28)),j.set(Qt.x+Math.sin(tt*.9+Qt.r)*.9,Qt.y,Qt.z+Math.cos(tt*.7+Qt.r)*.6),wt.set(tt*Qt.w+Qt.r,tt*.6+Qt.r,Math.sin(tt*2+Qt.r)*1.2),J.compose(j,ut.setFromEuler(wt),A),L.setMatrixAt(Ce,J)}L.instanceMatrix.needsUpdate=!0}r.traverse(tt=>{const St=tt.material;(tt instanceof Vr||tt instanceof Vi||tt.userData.noLine||St&&!Array.isArray(St)&&(St.blending===Ei||St.depthWrite===!1))&&tt.layers.set(me)});for(const tt of[re,L,Kt])tt.traverse(St=>St.layers.set(me));Ot.layers.enable(me);const ot=new dm({side:Sn}),M=new ti(1,1,{type:jn});M.depthTexture=new Is(1,1),M.depthTexture.type=Li;const R=new be(.5,.5,1),$=new be;function B(){r.overrideMaterial=ot,Ot.layers.disable(me);const tt=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor($);const St=i.getClearAlpha();i.setClearColor(R,1),i.setRenderTarget(M),i.clear(),i.render(r,Ot),i.setRenderTarget(null),i.setClearColor($,St),i.shadowMap.autoUpdate=tt,Ot.layers.enable(me),r.overrideMaterial=null}const V=new h1(i,new ti(1,1,{type:jn,samples:4}));V.setPixelRatio(i.getPixelRatio()),V.addPass(new d1(r,Ot));const mt="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",It=new Dc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Ut},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:mt,fragmentShader:`#include <packing>
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
    }`});V.addPass(It);const Bt=new _r(new Ut(e,n),.42,.55,.88);B1(Bt),V.addPass(Bt),V.addPass(new u1);const kt=new Dc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Ut},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:mt,fragmentShader:`#include <packing>
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
    }`});V.addPass(kt);const ie=It.uniforms,le=kt.uniforms,ae=(tt,St)=>tt[St];ae(ie,"tDepth").value=M.depthTexture,ae(le,"tDepth").value=M.depthTexture;function ce(tt,St){const Vt=i.getPixelRatio();i.setSize(tt,St),V.setSize(tt,St),Bt.setSize(tt,St),M.setSize(Math.floor(tt*Vt),Math.floor(St*Vt)),ae(ie,"texel").value.set(1/(tt*Vt),1/(St*Vt)),ae(le,"texel").value.copy(ae(ie,"texel").value),ae(ie,"width").value=Math.max(1,Vt*.85),Ot.aspect=tt/St,Mn()}let Ie=null,Ue=!1,Le=ld,Ne=null;const fn=()=>g1(e,n,Ie)??ld;function _e(tt){Le=tt,tt.x===0&&tt.y===0?Ot.clearViewOffset():Ot.setViewOffset(e,n,tt.x,tt.y,e,n)}function Mn(){Ne=null,_e(fn())}for(const tt of[ie,le])ae(tt,"near").value=Ot.near,ae(tt,"far").value=Ot.far;ce(e,n);let qe=0,oi="",vn=-1,ci=0,Wn=0,Xn=!1;const Ee=new z,$e={};let on={},Ke=Number.NEGATIVE_INFINITY;const Qe=24301,cn=new Set(["idle","done"]),On={};let gi=null,hi=null,ws="";function Us(){if(!hi)return;const tt={};for(const Vt of We){const ue=Me[Vt.id];tt[Vt.id]=$n[ue.next??ue.walk?.to??ue.spot].room}const St=We.map(Vt=>tt[Vt.id]).join();St!==ws&&(ws=St,hi(tt))}const Ui=new z;function Tr(){if(!gi)return;const tt={};for(const St of We){St.root.getWorldPosition(Ui),Ui.y+=nr[St.id].H*(On[St.id]?.74:1)+.25,Ui.project(Ot);const Vt=!!$e[St.id],ue=Vt?null:$n[Me[St.id].spot].room;tt[St.id]={x:Ui.x,y:Ui.y,z:Ui.z,walking:Vt,room:ue}}gi(tt)}function So(tt){vn<0&&(vn=tt);const St=(tt-vn)/1e3,Vt=Math.min(.05,St-ci);ci=St;for(const Qt of We){const ke=nr[Qt.id].speed;let Ge=dd(Me[Qt.id],tt,ke,t);if(we&&At&&!Ge.walk&&Ge.spot===$f[Qt.id]&&qa(Qt.id,we,At,qt)===Ge.spot){for(const Zi of we.tasks)Zi.owner===Qt.id&&qt.add(Zi.id);const Rn=qa(Qt.id,we,At,qt);Rn&&(Ge=Ll(Ge,Rn,tt,ke,t,ra[Qt.id]))}Me[Qt.id]=Ge;const Xe=pd(Ge,tt);if(Qt.root.position.x=Xe.x,Qt.root.position.z=Xe.z,Xe.walking){const Rn=Xe.heading-Qt.root.rotation.y;Qt.root.rotation.y+=Math.atan2(Math.sin(Rn),Math.cos(Rn))*Math.min(1,Vt*10)}else Qt.root.rotation.y=Xe.heading;const xe=Jt(Qt.root.position.x,Qt.root.position.z);Qt.root.position.y+=(xe-Qt.root.position.y)*Math.min(1,Vt*12);const Je=fd(Ge,tt),Ln=$n[Ge.spot].pose,Dn=y1({walking:Xe.walking,pose:Ln,held:Je,needsYou:we?.agents[Qt.id].state==="needs-you",hasRaise:!!Qt.model.acts.raise_hand});ne[Qt.id]=b1(Qt.id,{spot:Ge.spot,walking:Xe.walking,held:Je,state:we?.agents[Qt.id].state??null}),$e[Qt.id]=Xe.walking,On[Qt.id]=!Xe.walking&&(Dn==="sit"||yh.has(Ln)),de.lanternFor(Qt,Dn,St),de.drive(Qt,Dn,Vt,Xe.walking?null:Ge.spot,Ge.walk?Ge.walk.speed/ke:1);const tn=st[Qt.id];if(tn){const Rn=on[Qt.id];tn.visible=!!Rn&&Rn.act.prop==="mug"&&!Xe.walking&&Ge.spot===Rn.act.spot}}if(we&&tt-Ke>=250){Ke=tt;const Qt=new Set(zi.filter(Xe=>cn.has(we?.agents[Xe].state??"idle"))),ke={};for(const Xe of zi){const xe=Me[Xe];ke[Xe]={spot:xe.spot,to:xe.walk?.to??null,walking:!!$e[Xe]}}const Ge=A1(on,Qt,ke,tt,{seed:Qe,reducedMotion:t});on=Ge.runs;for(const[Xe,xe]of Object.entries(Ge.to))Me[Xe]=Ll(Me[Xe],xe,tt,nr[Xe].speed,t,ra[Xe])}const ue=!!ne.frontend&&we?.agents.frontend.state==="writing",Oe=x1(qe),Te=Oe.heat,Ce=v1(St,t);Oe.mouth!==oi&&(oi=Oe.mouth,N.emissive.set(Oe.mouth)),N.emissiveIntensity=.9+Te*1.4+Ce,it.emissiveIntensity=1.2+Te*1.8+Ce,at.intensity=8+Te*16+Ce*20;for(const[Qt,ke]of[[W,"frontend"],[rt,"backend"]]){const Ge=!!ne[ke],Xe=Qt.screen?.material;Xe&&(Xe.opacity+=((Ge?1:.3)-Xe.opacity)*Math.min(1,Vt*4)),Qt.light&&(Qt.light.intensity=Ge?3.5:0)}if(K(Vt),!t){for(const{f:xe,ph:Je}of P){const Ln=1+Math.sin(St*11+Je)*.16+Math.sin(St*27+Je*2)*.08;xe.scale.set(1/Math.sqrt(Ln),Ln,1/Math.sqrt(Ln))}for(const xe of F)xe.l.intensity=xe.base*(1+Math.sin(St*9+xe.ph)*.12+Math.sin(St*23+xe.ph)*.06);Q.intensity=11+Math.sin(St*7)*1.5;for(const xe of v)xe.o.rotation[xe.axis]+=Vt*xe.v,xe.bob&&(xe.o.position.y=(xe.y0??0)+Math.sin(St*1.6)*.06);const Qt=Math.abs(Math.sin(St*5.2+pe.frontend));k.forEach((xe,Je)=>{const Ln=ue&&Qt<.25;xe.material.opacity=Ln?1-Qt*4:0,xe.position.set(-.4+Je*.19,.95+Je%2*.12+(Ln?(.25-Qt)*.8:0),Je%2*.08-.29),xe.material.rotation=St*3+Je});for(const xe of O){const Je=["frontend","backend"].some(Dn=>{const tn=on[Dn];return tn?.act.prop==="sparks"&&tn.act.spot===xe.spot&&Me[Dn].spot===xe.spot&&!$e[Dn]}),Ln=Math.abs(Math.sin(St*.9+xe.ph));xe.sprites.forEach((Dn,tn)=>{const Rn=Je&&Ln>.97;Dn.material.opacity=Rn?(Ln-.97)*33:0,Dn.position.set((tn-1)*.16,tn%2*.1+(Rn?(1-Ln)*6:0),0),Dn.material.rotation=St*3+tn})}W.kb&&(W.kb.position.y=W.kb.userData.y0+(ue&&Qt<.2?.03:0));const ke=_.geometry.attributes.position,Ge=_.userData.h,Xe=_.userData.seed;for(let xe=0;xe<ke.count;xe++){const Je=Xe[xe];Ge[xe]=Ge[xe]+Vt*(.5+Je*.7)*(.5+Te),Ge[xe]>_.userData.top&&(Ge[xe]=0),ke.setXYZ(xe,H.x+Math.sin(St*(.6+Je)+Je*10)*.8*Je,H.y+Ge[xe],H.z+Math.cos(St*.7+Je*7)*.5*Je)}ke.needsUpdate=!0,_.material.opacity=Math.min(.95,.2+Te*.5);for(const xe of Dt){const Je=xe.p,Ln=Je.geometry.attributes.position,Dn=Je.userData.h,tn=Je.userData.seed,Rn=xe.house?xe.house.lift:0;Je.visible=Rn<.5;const Zi=xe.heat?.6+Te:.7;for(let Ji=0;Ji<Ln.count;Ji++){const Ya=tn[Ji];Dn[Ji]=Dn[Ji]+Vt*(.5+Ya*.4)*Zi,Dn[Ji]>Je.userData.top&&(Dn[Ji]=0);const Os=Dn[Ji];Ln.setXYZ(Ji,xe.at.x+Math.sin(Os*.8+Ya*6)*Os*.16+Os*.3,xe.at.y+Os,xe.at.z+Math.cos(Os*.6+Ya*4)*Os*.14)}Ln.needsUpdate=!0}ht.offset.y=(ht.offset.y+Vt*1.6)%1,nt.offset.x=(nt.offset.x+Vt*.12)%1,re.rotation.y+=Vt*.004,bt.forEach((xe,Je)=>{xe.material.opacity=.42+Math.sin(St*.8+Je)*.1});for(const xe of ft){const Je=xe.userData;Je.a+=Vt*Je.s,xe.position.set(Math.cos(Je.a)*Je.r,Je.y+Math.sin(Je.a*3)*.8,Math.sin(Je.a)*Je.r),xe.rotation.y=-Je.a,xe.children[3].rotation.z=Math.sin(St*10+Je.r)*.6,xe.children[4].rotation.z=-Math.sin(St*10+Je.r)*.6}b.forEach((xe,Je)=>{xe.rotation.y=Math.sin(St*2+Je)*.3}),Zt.position.y=-.4+Math.sin(St*.9)*.2,Zt.rotation.x=Math.sin(St*.7)*.03;{const xe=he.userData;xe.a+=Vt*.022,he.position.set(Math.cos(xe.a)*xe.r,xe.y+Math.sin(St*.5)*.8,Math.sin(xe.a)*xe.r),he.rotation.y=Math.atan2(-Math.cos(xe.a),-Math.sin(xe.a))}}if(Lt){const Qt=Math.min(1,(performance.now()-Lt.t0)/Lt.dur),ke=Qt<.5?4*Qt*Qt*Qt:1-Math.pow(-2*Qt+2,3)/2;$t.target.lerpVectors(Lt.ft,Lt.tt,ke),Ot.position.lerpVectors(Lt.fp,Lt.tp,ke),Qt>=1&&(Lt=null)}else if(ee){de.actors[ee].root.getWorldPosition(Ee),Ee.y+=.8;const Qt=Ee.sub($t.target).multiplyScalar(t?1:Math.min(1,Vt*4));$t.target.add(Qt),Ot.position.add(Qt)}if(Ne){const Qt=performance.now()-Ne.t0;_e(cd(Ne.from,Ne.to,Qt,t)),(t||Qt>=Ic)&&(Ne=null)}Ht(),$t.update(),Ft(),Tr(),Us(),t||yt(St,Vt),Kt.position.copy(Ot.position),ae(le,"focus").value=Ot.position.distanceTo($t.target),ae(le,"time").value=t?0:St,B(),V.render(),Wn++}return{renderer:i,scene:r,camera:Ot,controls:$t,housePicks:oe,houses:U,agentPhase:pe,cast:de,groundY:Jt,place(tt,St){const Vt=$n[St];de.actors[tt].root.position.y=Jt(Vt.x,Vt.z),Me[tt]=Wi(St,performance.now())},update(tt,St){we=tt,At=St,qe=Jf(tt);const Vt=performance.now();for(const ue of zi){const Oe=cn.has(tt.agents[ue].state)?on[ue]:void 0,Te=Oe?Oe.act.spot:qa(ue,tt,At,qt);Te&&(Me[ue]=Ll(Me[ue],Te,Vt,nr[ue].speed,t,ra[ue]))}},land(){const tt=performance.now();for(const St of zi)Me[St]=D1(Me[St],tt)},restart(){Me=fe(),qt.clear(),on={}},whereIs(tt){const St=performance.now(),Vt=dd(Me[tt],St,nr[tt].speed,t),ue=pd(Vt,St).walking,Oe=ue?Vt.walk:null;return{spot:Vt.spot,to:Oe?.to??null,path:Oe?.path??null,walking:ue,held:fd(Vt,St)}},get frames(){return Wn},start(){Xn=!1,i.setAnimationLoop(tt=>{Xn||So(tt)})},stop(){Xn=!0,i.setAnimationLoop(null)},resize(tt,St){e=tt,n=St,ce(tt,St)},flyToRoom:te,onHandMove(tt){return Wt=tt,()=>{Wt===tt&&(Wt=null)}},onFrame(tt){return gi=tt,()=>{gi===tt&&(gi=null)}},onRooms(tt){return hi=tt,ws="",()=>{hi===tt&&(hi=null)}},onPick(tt){return Rt=tt,()=>{Rt===tt&&(Rt=null)}},flyToAgent(tt){ee=null;const St=$n[Me[tt].spot];Gt=U[St.room]&&!St.out?St.room:null;const Vt=de.actors[tt].root.getWorldPosition(new z);Vt.y+=.8;const ue=Ot.position.clone().sub($t.target);ue.lengthSq()<1e-6&&ue.set(.45,.85,.9),ue.normalize(),ue.y=Math.max(ue.y,.6),ue.normalize(),jt(Vt,Vt.clone().addScaledVector(ue,14))},follow(tt){ee=tt,tt&&(Lt=null,Gt=null)},setOpenHouses(tt){D=tt},setFreeArea(tt){Ie=tt;const St=fn(),Vt=!Ue;Ue=!0;const ue=Ne?Ne.to:Le;St.x===ue.x&&St.y===ue.y||(Ne={from:Vt?St:Le,to:St,t0:performance.now()},_e(cd(Ne.from,St,0,t)))},setTasks(tt){f.drawBoard(tt)},dispose(){i.setAnimationLoop(null);for(const[tt,St]of Pt)i.domElement.removeEventListener(tt,St);Wt=null,Rt=null,gi=null,hi=null,$t.dispose(),V.dispose(),M.dispose(),i.dispose()}}}export{yS as createWorld};
