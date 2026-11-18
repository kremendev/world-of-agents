const Vs={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nf=0,ph=1,Uf=2,Dr=1,Of=2,Tr=3,ss=0,Un=1,ln=2,fs=0,Ws=1,yi=2,mh=3,gh=4,Ff=5,ks=100,Bf=101,kf=102,zf=103,Hf=104,Gf=200,Vf=201,Wf=202,Xf=203,pd=204,md=205,qf=206,Yf=207,Kf=208,Zf=209,Jf=210,$f=211,Qf=212,jf=213,ep=214,bl=0,wl=1,Tl=2,kr=3,El=4,Al=5,Rl=6,Cl=7,gd=0,tp=1,np=2,Vi=0,bc=1,wc=2,Tc=3,Ma=4,Ec=5,Ac=6,Rc=7,_h="attached",ip="detached",_d=300,Zs=301,zr=302,Ia=303,Na=304,si=1e3,Hn=1001,ta=1002,vn=1003,xd=1004,Er=1005,Rn=1006,Wo=1007,bi=1008,Jn=1009,vd=1010,Md=1011,Hr=1012,Cc=1013,ui=1014,ii=1015,On=1016,Pc=1017,Lc=1018,Js=1020,yd=35902,Sd=35899,bd=1021,wd=1022,ci=1023,rs=1026,es=1027,ya=1028,Dc=1029,ms=1030,Ic=1031,Nc=1033,Xo=33776,qo=33777,Yo=33778,Ko=33779,Pl=35840,Ll=35841,Dl=35842,Il=35843,Nl=36196,Ul=37492,Ol=37496,Fl=37488,Bl=37489,na=37490,kl=37491,zl=37808,Hl=37809,Gl=37810,Vl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Kl=37816,Zl=37817,Jl=37818,$l=37819,Ql=37820,jl=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,ia=36285,rc=36286,sp=2200,rp=2201,op=2202,Gr=2300,Vr=2301,Ua=2302,xh=2303,Hs=2400,Gs=2401,sa=2402,Uc=2500,ap=2501,lp=0,Td=1,oc=2,cp=3200,Wr=0,hp=1,ki="",xn="srgb",Qn="srgb-linear",ra="linear",en="srgb",Oa=7680,up=519,dp=512,fp=513,pp=514,Ed=515,mp=516,gp=517,Ad=518,Rd=519,Cd=35044,vh="300 es",hi=2e3,Xr=2001;function _p(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vp(){const s=qr("canvas");return s.style.display="block",s}const Mh={};function oa(...s){const e="THREE."+s.shift();console.log(e,...s)}function Pd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function At(...s){s=Pd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Dt(...s){s=Pd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Xs(...s){const e=s.join(" ");e in Mh||(Mh[e]=!0,At(...s))}function Mp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const yp={[bl]:bl,[Tl]:Rl,[El]:El,[kr]:Al,[wl]:wl,[Rl]:Tl,[Cl]:Cl,[Al]:kr};class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const Ir=Math.PI/180,$s=180/Math.PI;function fi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function Oc(s,e){return(s%e+e)%e}function Sp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function bp(s,e,t){return s!==e?(t-s)/(e-s):0}function Nr(s,e,t){return(1-t)*s+t*e}function wp(s,e,t,n){return Nr(s,e,1-Math.exp(-t*n))}function Tp(s,e=1){return e-Math.abs(Oc(s,e*2)-e)}function Ep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Cp(s,e){return s+Math.random()*(e-s)}function Pp(s){return s*(.5-Math.random())}function Lp(s){s!==void 0&&(yh=s);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dp(s){return s*Ir}function Ip(s){return s*$s}function Np(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Up(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ld(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Op(s,e,t,n,i){const r=Math.cos,o=Math.sin,l=r(t/2),a=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(l*h,a*d,a*f,l*c);break;case"YZY":s.set(a*f,l*h,a*d,l*c);break;case"ZXZ":s.set(a*d,a*f,l*h,l*c);break;case"XZX":s.set(l*h,a*p,a*u,l*c);break;case"YXY":s.set(a*u,l*h,a*p,l*c);break;case"ZYZ":s.set(a*p,a*u,l*h,l*c);break;default:At("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sa(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fc(s,e){if(e.constructor===Float32Array)return s;const t=Sa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Bc(s,e){if(e.constructor===Float32Array)return s;const t=Sa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const aa={DEG2RAD:Ir,RAD2DEG:$s,generateUUID:fi,clamp:kt,euclideanModulo:Oc,mapLinear:Sp,inverseLerp:bp,lerp:Nr,damp:wp,pingpong:Tp,smoothstep:Ep,smootherstep:Ap,randInt:Rp,randFloat:Cp,randFloatSpread:Pp,seededRandom:Lp,degToRad:Dp,radToDeg:Ip,isPowerOfTwo:Np,ceilPowerOfTwo:Up,floorPowerOfTwo:Ld,setQuaternionFromProperEuler:Op,normalize:Bc,denormalize:Fc},lh=class lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let Be=lh;class cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||a!==f||c!==u||h!==p){let m=a*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-l;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);g=Math.sin(g*M)/T,l=Math.sin(l*M)/T,a=a*g+f*l,c=c*g+u*l,h=h*g+p*l,d=d*g+x*l}else{a=a*g+f*l,c=c*g+u*l,h=h*g+p*l,d=d*g+x*l;const M=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=M,c*=M,h*=M,d*=M}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=l*p+h*d+a*u-c*f,e[t+1]=a*p+h*f+c*d-l*u,e[t+2]=c*p+h*u+l*f-a*d,e[t+3]=h*p-l*d-a*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(n/2),h=l(i/2),d=l(r/2),f=a(n/2),u=a(i/2),p=a(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],a=t[9],c=t[2],h=t[6],d=t[10],f=n+l+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-a)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>l&&n>d){const u=2*Math.sqrt(1+n-l-d);this._w=(h-a)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(l>d){const u=2*Math.sqrt(1+l-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(a+h)/u}else{const u=2*Math.sqrt(1+d-n-l);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(a+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+o*l+i*c-r*a,this._y=i*h+o*a+r*l-n*c,this._z=r*h+o*c+n*a-i*l,this._w=o*h-n*l-i*a-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,i=-i,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);a=Math.sin(a*c)/h,t=Math.sin(t*c)/h,this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ch=class ch{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*i-l*n),h=2*(l*t-r*i),d=2*(r*n-o*t);return this.x=t+a*c+o*d-l*h,this.y=n+a*h+l*c-r*d,this.z=i+a*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=i*a-r*l,this.y=r*o-n*a,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;let G=ch;const Fa=new G,Sh=new cn,hh=class hh{constructor(e,t,n,i,r,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c)}set(e,t,n,i,r,o,l,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],M=i[1],T=i[4],w=i[7],N=i[2],L=i[5],v=i[8];return r[0]=o*x+l*M+a*N,r[3]=o*m+l*T+a*L,r[6]=o*g+l*w+a*v,r[1]=c*x+h*M+d*N,r[4]=c*m+h*T+d*L,r[7]=c*g+h*w+d*v,r[2]=f*x+u*M+p*N,r[5]=f*m+u*T+p*L,r[8]=f*g+u*w+p*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8];return t*o*h-t*l*c-n*r*h+n*l*a+i*r*c-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=h*o-l*c,f=l*a-h*r,u=c*r-o*a,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(l*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*a)*x,e[5]=(i*r-l*t)*x,e[6]=u*x,e[7]=(n*a-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+e,-i*c,i*a,-i*(-c*o+a*l)+l+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let Ot=hh;const Ba=new Ot,bh=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){const s={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===en&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===en&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?ra:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qn]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:en,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),s}const qt=Fp();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class Bp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=qr("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kp=0;class kc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(ka(i[o].image)):r.push(ka(i[o]))}else r=ka(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}let zp=0;const za=new G;class Sn extends qi{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=Hn,i=Hn,r=Rn,o=bi,l=ci,a=Jn,c=Sn.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=fi(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){At(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){At(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=_d;Sn.DEFAULT_ANISOTROPY=1;const uh=class uh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const a=e.elements,c=a[0],h=a[4],d=a[8],f=a[1],u=a[5],p=a[9],x=a[2],m=a[6],g=a[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(u+1)/2,N=(g+1)/2,L=(h+f)/4,v=(d+x)/4,b=(p+m)/4;return T>w&&T>N?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=L/n,r=v/n):w>N?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=L/i,r=b/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=v/r,i=b/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;let rn=uh;class Hp extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Sn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new kc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dd extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const va=class va{constructor(e,t,n,i,r,o,l,a,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,x,m)}set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=l,g[13]=a,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,p=l*h,x=l*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=u+p*c,t[5]=f-x*c,t[9]=-l*a,t[2]=x-f*c,t[6]=p+u*c,t[10]=o*a}else if(e.order==="YXZ"){const f=a*h,u=a*d,p=c*h,x=c*d;t[0]=f+x*l,t[4]=p*l-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=u*l-p,t[6]=x+f*l,t[10]=o*a}else if(e.order==="ZXY"){const f=a*h,u=a*d,p=c*h,x=c*d;t[0]=f-x*l,t[4]=-o*d,t[8]=p+u*l,t[1]=u+p*l,t[5]=o*h,t[9]=x-f*l,t[2]=-o*c,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const f=o*h,u=o*d,p=l*h,x=l*d;t[0]=a*h,t[4]=p*c-u,t[8]=f*c+x,t[1]=a*d,t[5]=x*c+f,t[9]=u*c-p,t[2]=-c,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const f=o*a,u=o*c,p=l*a,x=l*c;t[0]=a*h,t[4]=x-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*a,u=o*c,p=l*a,x=l*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=l*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Wp)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Yi.crossVectors(n,Kn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Yi.crossVectors(n,Kn)),Yi.normalize(),oo.crossVectors(Kn,Yi),i[0]=Yi.x,i[4]=oo.x,i[8]=Kn.x,i[1]=Yi.y,i[5]=oo.y,i[9]=Kn.y,i[2]=Yi.z,i[6]=oo.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],T=n[7],w=n[11],N=n[15],L=i[0],v=i[4],b=i[8],z=i[12],F=i[1],q=i[5],re=i[9],Q=i[13],B=i[2],se=i[6],le=i[10],Z=i[14],W=i[3],te=i[7],fe=i[11],Ee=i[15];return r[0]=o*L+l*F+a*B+c*W,r[4]=o*v+l*q+a*se+c*te,r[8]=o*b+l*re+a*le+c*fe,r[12]=o*z+l*Q+a*Z+c*Ee,r[1]=h*L+d*F+f*B+u*W,r[5]=h*v+d*q+f*se+u*te,r[9]=h*b+d*re+f*le+u*fe,r[13]=h*z+d*Q+f*Z+u*Ee,r[2]=p*L+x*F+m*B+g*W,r[6]=p*v+x*q+m*se+g*te,r[10]=p*b+x*re+m*le+g*fe,r[14]=p*z+x*Q+m*Z+g*Ee,r[3]=M*L+T*F+w*B+N*W,r[7]=M*v+T*q+w*se+N*te,r[11]=M*b+T*re+w*le+N*fe,r[15]=M*z+T*Q+w*Z+N*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],a=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],M=a*u-c*f,T=l*u-c*d,w=l*f-a*d,N=o*u-c*h,L=o*f-a*h,v=o*d-l*h;return t*(x*M-m*T+g*w)-n*(p*M-m*N+g*L)+i*(p*T-x*N+g*v)-r*(p*w-x*L+m*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],l=e[9],a=e[2],c=e[6],h=e[10];return t*(o*h-l*c)-n*(r*h-l*a)+i*(r*c-o*a)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],M=t*l-n*o,T=t*a-i*o,w=t*c-r*o,N=n*a-i*l,L=n*c-r*l,v=i*c-r*a,b=h*x-d*p,z=h*m-f*p,F=h*g-u*p,q=d*m-f*x,re=d*g-u*x,Q=f*g-u*m,B=M*Q-T*re+w*q+N*F-L*z+v*b;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/B;return e[0]=(l*Q-a*re+c*q)*se,e[1]=(i*re-n*Q-r*q)*se,e[2]=(x*v-m*L+g*N)*se,e[3]=(f*L-d*v-u*N)*se,e[4]=(a*F-o*Q-c*z)*se,e[5]=(t*Q-i*F+r*z)*se,e[6]=(m*w-p*v-g*T)*se,e[7]=(h*v-f*w+u*T)*se,e[8]=(o*re-l*F+c*b)*se,e[9]=(n*F-t*re-r*b)*se,e[10]=(p*L-x*w+g*M)*se,e[11]=(d*w-h*L-u*M)*se,e[12]=(l*z-o*q-a*b)*se,e[13]=(t*q-n*z+i*b)*se,e[14]=(x*T-p*N-m*M)*se,e[15]=(h*N-d*T+f*M)*se,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,c=r*o,h=r*l;return this.set(c*o+n,c*l-i*a,c*a+i*l,0,c*l+i*a,h*l+n,h*a-i*o,0,c*a-i*l,h*a+i*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,c=r+r,h=o+o,d=l+l,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=l*d,M=a*c,T=a*h,w=a*d,N=n.x,L=n.y,v=n.z;return i[0]=(1-(x+g))*N,i[1]=(u+w)*N,i[2]=(p-T)*N,i[3]=0,i[4]=(u-w)*L,i[5]=(1-(f+g))*L,i[6]=(m+M)*L,i[7]=0,i[8]=(p+T)*v,i[9]=(m-M)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ss.set(i[0],i[1],i[2]).length();const l=Ss.set(i[4],i[5],i[6]).length(),a=Ss.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ri.copy(this);const c=1/o,h=1/l,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,i,r,o,l=hi,a=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let p,x;if(a)p=r/(o-r),x=o*r/(o-r);else if(l===hi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(l===Xr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=hi,a=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,x;if(a)p=1/(o-r),x=o/(o-r);else if(l===hi)p=-2/(o-r),x=-(o+r)/(o-r);else if(l===Xr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};va.prototype.isMatrix4=!0;let Lt=va;const Ss=new G,ri=new Lt,Vp=new G(0,0,0),Wp=new G(1,1,1),Yi=new G,oo=new G,Kn=new G,Th=new Lt,Eh=new cn;class Ai{constructor(e=0,t=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],a=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xp=0;const Ah=new G,bs=new cn,Li=new Lt,ao=new G,hr=new G,qp=new G,Yp=new cn,Rh=new G(1,0,0),Ch=new G(0,1,0),Ph=new G(0,0,1),Lh={type:"added"},Kp={type:"removed"},ws={type:"childadded",child:null},Ha={type:"childremoved",child:null};class an extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new G,t=new Ai,n=new cn,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(hr,ao,this.up):Li.lookAt(ao,hr,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(Li),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),ws.child=e,this.dispatchEvent(ws),ws.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];r(e.shapes,d)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(e.materials,this.material[a]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];i.animations.push(r(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(l){const a=[];for(const c in l){const h=l[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new G(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zp={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return l!==null&&(l.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=Oc(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return qt.colorSpaceToWorking(this,i),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&At("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:At("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);At("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):At("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return qt.workingToColorSpace(Dn.copy(this),e),Math.round(kt(Dn.r*255,0,255))*65536+Math.round(kt(Dn.g*255,0,255))*256+Math.round(kt(Dn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,r=Dn.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let a,c;const h=(l+o)/2;if(l===o)a=0,c=0;else{const d=o-l;switch(c=h<=.5?d/(o+l):d/(2-o-l),o){case n:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-n)/d+2;break;case r:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=xn){qt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(lo);const n=Nr(Ki.h,lo.h,t),i=Nr(Ki.s,lo.s,t),r=Nr(Ki.l,lo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new xt;xt.NAMES=Id;class Hc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new Hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jp extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const oi=new G,Di=new G,Wa=new G,Ii=new G,Ts=new G,Es=new G,Dh=new G,Xa=new G,qa=new G,Ya=new G,Ka=new rn,Za=new rn,Ja=new rn;class ni{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),Di.subVectors(n,t),Wa.subVectors(e,t);const o=oi.dot(oi),l=oi.dot(Di),a=oi.dot(Wa),c=Di.dot(Di),h=Di.dot(Wa),d=o*c-l*l;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*a-l*h)*f,p=(o*h-l*a)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,r,o,l,a){return this.getBarycoord(e,t,n,i,Ii)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Ii.x),a.addScaledVector(o,Ii.y),a.addScaledVector(l,Ii.z),a)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,n),Ja.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Di.subVectors(e,t),oi.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),oi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;Ts.subVectors(i,n),Es.subVectors(r,n),Xa.subVectors(e,n);const a=Ts.dot(Xa),c=Es.dot(Xa);if(a<=0&&c<=0)return t.copy(n);qa.subVectors(e,i);const h=Ts.dot(qa),d=Es.dot(qa);if(h>=0&&d<=h)return t.copy(i);const f=a*d-h*c;if(f<=0&&a>=0&&h<=0&&a-h>0)return o=a/(a-h),t.copy(n).addScaledVector(Ts,o);Ya.subVectors(e,r);const u=Ts.dot(Ya),p=Es.dot(Ya);if(p>=0&&u<=p)return t.copy(r);const x=u*c-a*p;if(x<=0&&c>=0&&p<=0)return l=c/(c-p),t.copy(n).addScaledVector(Es,l);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Dh.subVectors(r,i),l=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(Dh,l);const g=1/(m+x+f);return o=x*g,l=f*g,t.copy(n).addScaledVector(Ts,o).addScaledVector(Es,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ri{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),ho.subVectors(this.max,ur),As.subVectors(e.a,ur),Rs.subVectors(e.b,ur),Cs.subVectors(e.c,ur),Zi.subVectors(Rs,As),Ji.subVectors(Cs,Rs),os.subVectors(As,Cs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-os.z,os.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,os.z,0,-os.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-os.y,os.x,0];return!$a(t,As,Rs,Cs,ho)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,As,Rs,Cs,ho))?!1:(uo.crossVectors(Zi,Ji),t=[uo.x,uo.y,uo.z],$a(t,As,Rs,Cs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new G,new G,new G,new G,new G,new G,new G,new G],ai=new G,co=new Ri,As=new G,Rs=new G,Cs=new G,Zi=new G,Ji=new G,os=new G,ur=new G,ho=new G,uo=new G,as=new G;function $a(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){as.fromArray(s,r);const l=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),a=e.dot(as),c=t.dot(as),h=n.dot(as);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}const _n=new G,fo=new Be;let $p=0;class An extends qi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cd,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?Sa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bc(e,this.array)}}class Nd extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ud extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Qp=new Ri,dr=new G,Qa=new G;class Ci{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Qa)),this.expandByPoint(dr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jp=0;const jn=new Lt,ja=new an,Ps=new G,Zn=new Ri,fr=new Ri,En=new G;class nn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?Ud:Nd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];fr.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(Zn.min,fr.min),Zn.expandByPoint(En),En.addVectors(Zn.max,fr.max),Zn.expandByPoint(En)):(Zn.expandByPoint(fr.min),Zn.expandByPoint(fr.max))}Zn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)En.fromBufferAttribute(l,c),a&&(Ps.fromBufferAttribute(e,c),En.add(Ps)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],a=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)l[z]=new G,a[z]=new G;const h=new G,d=new G,f=new G,u=new Be,p=new Be,x=new Be,m=new G,g=new G;function M(z,F,q){c[z]=c[F]=c[q]=1,h.fromBufferAttribute(n,z),d.fromBufferAttribute(n,F),f.fromBufferAttribute(n,q),u.fromBufferAttribute(r,z),p.fromBufferAttribute(r,F),x.fromBufferAttribute(r,q),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const re=1/(p.x*x.y-x.x*p.y);isFinite(re)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(re),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(re),l[z].add(m),l[F].add(m),l[q].add(m),a[z].add(g),a[F].add(g),a[q].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let z=0,F=T.length;z<F;++z){const q=T[z],re=q.start,Q=q.count;for(let B=re,se=re+Q;B<se;B+=3)M(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new G,N=new G,L=new G,v=new G;function b(z){L.fromBufferAttribute(i,z),v.copy(L);const F=l[z];w.copy(F),w.sub(L.multiplyScalar(L.dot(F))).normalize(),N.crossVectors(v,F);const re=N.dot(a[z])<0?-1:1;o.setXYZW(z,w.x,w.y,w.z,re)}for(let z=0,F=n.count;z<F;++z)c[z]&&b(z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new G,r=new G,o=new G,l=new G,a=new G,c=new G,h=new G,d=new G;if(e)for(let f=0,u=e.count;f<u;f+=3){const p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),l.fromBufferAttribute(n,p),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),l.add(h),a.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(l,a){const c=l.array,h=l.itemSize,d=l.normalized,f=new c.constructor(a.length*h);let u=0,p=0;for(let x=0,m=a.length;x<m;x++){l.isInterleavedBufferAttribute?u=a[x]*l.data.stride+l.offset:u=a[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new An(f,h,d)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const l in i){const a=i[l],c=e(a,n);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const a=[],c=r[l];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);a.push(u)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[a]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Od{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cd,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ih(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ih(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Ih(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=fi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Bn=new G;class Yr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Sa(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bc(e,this.data.array)}}const el=new G,e0=new G,t0=new Ot;class Bi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=el.subVectors(n,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(el),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t0.getNormalMatrix(e),i=this.coplanarPoint(el).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let n0=0;class $n extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ws,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){At(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){At(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const a=r[l];delete a.metadata,o.push(a)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ls;const pr=new G,Ds=new G,Is=new G,Ns=new Be,mr=new Be,Fd=new Lt,po=new G,gr=new G,mo=new G,Nh=new Be,tl=new Be,Uh=new Be;class Xi extends an{constructor(e=new ns){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Od(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Yr(n,3,0,!1)),Ls.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),Fd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Is.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;go(po.set(-.5,-.5,0),Is,o,Ds,i,r),go(gr.set(.5,-.5,0),Is,o,Ds,i,r),go(mo.set(.5,.5,0),Is,o,Ds,i,r),Nh.set(0,0),tl.set(1,0),Uh.set(1,1);let l=e.ray.intersectTriangle(po,gr,mo,!1,pr);if(l===null&&(go(gr.set(-.5,.5,0),Is,o,Ds,i,r),tl.set(0,1),l=e.ray.intersectTriangle(po,mo,gr,!1,pr),l===null))return;const a=e.ray.origin.distanceTo(pr);a<e.near||a>e.far||t.push({distance:a,point:pr.clone(),uv:ni.getInterpolation(pr,po,gr,mo,Nh,tl,Uh,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function go(s,e,t,n,i,r){Ns.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(mr.x=r*Ns.x-i*Ns.y,mr.y=i*Ns.x+r*Ns.y):mr.copy(Ns),s.copy(e),s.x+=mr.x,s.y+=mr.y,s.applyMatrix4(Fd)}const Ui=new G,nl=new G,_o=new G,xo=new G;class nr{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nl.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),xo.copy(this.origin).sub(nl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_o),l=xo.dot(this.direction),a=-xo.dot(_o),c=xo.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*a-l,f=o*l-a,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*l)+f*(o*d+f+2*a)+c}else f=r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f=-r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f<=-p?(d=Math.max(0,-(-o*r+l)),f=d>0?-r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+c):(d=Math.max(0,-(o*r+l)),f=d>0?r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(nl).addScaledVector(_o,f),u}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(l=(e.min.z-f.z)*d,a=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,a=(e.min.z-f.z)*d),n>a||l>i)||((l>n||n!==n)&&(n=l),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,l=this.direction,a=l.x,c=l.y,h=l.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,T=n.z-o.z,w=Math.abs(a),N=Math.abs(c),L=Math.abs(h);let v,b,z,F,q,re,Q,B,se,le,Z,W;if(w>=N&&w>=L?(z=a,re=d,se=p,W=g,a>=0?(v=c,b=h,F=f,q=u,Q=x,B=m,le=M,Z=T):(v=h,b=c,F=u,q=f,Q=m,B=x,le=T,Z=M)):N>=L?(z=c,re=f,se=x,W=M,c>=0?(v=h,b=a,F=u,q=d,Q=m,B=p,le=T,Z=g):(v=a,b=h,F=d,q=u,Q=p,B=m,le=g,Z=T)):(z=h,re=u,se=m,W=T,h>=0?(v=a,b=c,F=d,q=f,Q=p,B=x,le=g,Z=M):(v=c,b=a,F=f,q=d,Q=x,B=p,le=M,Z=g)),z===0)return null;const te=v/z,fe=b/z,Ee=1/z,Ke=F-te*re,at=q-fe*re,_e=Q-te*se,Ye=B-fe*se,st=le-te*W,ut=Z-fe*W,Ze=st*Ye-ut*_e,dt=Ke*ut-at*st,Ft=_e*at-Ye*Ke;if(i){if(Ze<0||dt<0||Ft<0)return null}else if((Ze<0||dt<0||Ft<0)&&(Ze>0||dt>0||Ft>0))return null;const ht=Ze+dt+Ft;if(ht===0)return null;const Mt=Ee*(Ze*re+dt*se+Ft*W);return(ht>0?Mt<0:Mt>0)?null:this.at(Mt/ht,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Oh=new Lt,ls=new nr,vo=new Ci,Fh=new G,Mo=new G,yo=new G,So=new G,il=new G,bo=new G,Bh=new G,wo=new G;class Ut extends an{constructor(e=new nn,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){bo.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const h=l[a],d=r[a];h!==0&&(il.fromBufferAttribute(d,e),o?bo.addScaledVector(il,h):bo.addScaledVector(il.sub(t),h))}t.add(bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(vo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(vo,Fh)===null||ls.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,N=T;w<N;w+=3){const L=l.getX(w),v=l.getX(w+1),b=l.getX(w+2);i=To(this,g,e,n,c,h,d,L,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=l.getX(m),T=l.getX(m+1),w=l.getX(m+2);i=To(this,o,e,n,c,h,d,M,T,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,N=T;w<N;w+=3){const L=w,v=w+1,b=w+2;i=To(this,g,e,n,c,h,d,L,v,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=m,T=m+1,w=m+2;i=To(this,o,e,n,c,h,d,M,T,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function i0(s,e,t,n,i,r,o,l){let a;if(e.side===Un?a=n.intersectTriangle(o,r,i,!0,l):a=n.intersectTriangle(i,r,o,e.side===ss,l),a===null)return null;wo.copy(l),wo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:s}}function To(s,e,t,n,i,r,o,l,a,c){s.getVertexPosition(l,Mo),s.getVertexPosition(a,yo),s.getVertexPosition(c,So);const h=i0(s,e,t,n,Mo,yo,So,Bh);if(h){const d=new G;ni.getBarycoord(Bh,Mo,yo,So,d),i&&(h.uv=ni.getInterpolatedAttribute(i,l,a,c,d,new Be)),r&&(h.uv1=ni.getInterpolatedAttribute(r,l,a,c,d,new Be)),o&&(h.normal=ni.getInterpolatedAttribute(o,l,a,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:a,c,normal:new G,materialIndex:0};ni.getNormal(Mo,yo,So,f.normal),h.face=f,h.barycoord=d}return h}const _r=new rn,kh=new rn,zh=new rn,s0=new rn,Hh=new Lt,Eo=new G,sl=new Ci,Gh=new Lt,rl=new nr;class r0 extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(i),e.ray.intersectsSphere(sl)!==!1&&(Gh.copy(i).invert(),rl.copy(e.ray).applyMatrix4(Gh),!(this.boundingBox!==null&&rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():At("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;kh.fromBufferAttribute(i.attributes.skinIndex,e),zh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(_r.copy(t),t.set(0,0,0,0)):(_r.set(t.x,t.y,t.z,1),t.set(0,0,0)),_r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=zh.getComponent(r);if(o!==0){const l=kh.getComponent(r);Hh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(s0.copy(_r).applyMatrix4(Hh),o)}}return t.isVector4&&(t.w=_r.w),t.applyMatrix4(this.bindMatrixInverse)}}class Bd extends an{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ba extends Sn{constructor(e=null,t=1,n=1,i,r,o,l,a,c=vn,h=vn,d,f){super(null,o,l,a,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new Lt,o0=new Lt;class Gc{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){At("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:o0;Vh.multiplyMatrices(l,t[r]),Vh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ba(t,e,e,ci,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(At("Skeleton: No bone found with UUID:",r),o=new Bd),this.bones.push(o),this.boneInverses.push(new Lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class la extends An{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new Lt,Wh=new Lt,Ao=[],Xh=new Ri,a0=new Lt,xr=new Ut,vr=new Ci;class Kr extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Xh.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(Xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),vr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Us),Wh.multiplyMatrices(n,Us),xr.matrixWorld=Wh,xr.raycast(e,Ao);for(let o=0,l=Ao.length;o<l;o++){const a=Ao[o];a.instanceId=r,a.object=this,t.push(a)}Ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(i*this.count),i,this.count,ya,ii));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=i*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cs=new Ci,l0=new Be(.5,.5),Ro=new G;class Zr{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){const i=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],T=r[13],w=r[14],N=r[15];if(i[0].setComponents(c-o,u-h,g-p,N-M).normalize(),i[1].setComponents(c+o,u+h,g+p,N+M).normalize(),i[2].setComponents(c+l,u+d,g+x,N+T).normalize(),i[3].setComponents(c-l,u-d,g-x,N-T).normalize(),n)i[4].setComponents(a,f,m,w).normalize(),i[5].setComponents(c-a,u-f,g-m,N-w).normalize();else if(i[4].setComponents(c-a,u-f,g-m,N-w).normalize(),t===hi)i[5].setComponents(c+a,u+f,g+m,N+w).normalize();else if(t===Xr)i[5].setComponents(a,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=l0.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ro.x=i.normal.x>0?e.max.x:e.min.x,Ro.y=i.normal.y>0?e.max.y:e.min.y,Ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const qh=new Lt;class Vc{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Zr),n[i].setFromProjectionMatrix(qh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Zr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Vc().copy(this)}}class kd extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ca=new G,ha=new G,Yh=new Lt,Mr=new nr,Co=new Ci,ol=new G,Kh=new G;class Wc extends an{constructor(e=new nn,t=new kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ca.fromBufferAttribute(t,i-1),ha.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ca.distanceTo(ha);e.setAttribute("lineDistance",new Pt(n,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;Yh.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(Yh);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=h.getX(x),M=h.getX(x+1),T=Po(this,e,Mr,a,g,M,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(u),g=Po(this,e,Mr,a,x,m,p-1);g&&t.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){const g=Po(this,e,Mr,a,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=Po(this,e,Mr,a,p-1,u,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Po(s,e,t,n,i,r,o){const l=s.geometry.attributes.position;if(ca.fromBufferAttribute(l,i),ha.fromBufferAttribute(l,r),t.distanceSqToSegment(ca,ha,ol,Kh)>n)return;ol.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:Kh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Zh=new G,Jh=new G;class c0 extends Wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Zh.fromBufferAttribute(t,i),Jh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zh.distanceTo(Jh);e.setAttribute("lineDistance",new Pt(n,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h0 extends Wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ur extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $h=new Lt,ac=new nr,Lo=new Ci,Do=new G;class Ar extends an{constructor(e=new nn,t=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;$h.copy(i).invert(),ac.copy(e.ray).applyMatrix4($h);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){const m=c.getX(p);Do.fromBufferAttribute(d,m),Qh(Do,m,a,i,e,t,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)Do.fromBufferAttribute(d,p),Qh(Do,p,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Qh(s,e,t,n,i,r,o){const l=ac.distanceSqToPoint(s);if(l<t){const a=new G;ac.closestPointToPoint(s,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zd extends Sn{constructor(e=[],t=Zs,n,i,r,o,l,a,c,h){super(e,t,n,i,r,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lc extends Sn{constructor(e,t,n,i,r,o,l,a,c){super(e,t,n,i,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gs extends Sn{constructor(e,t,n=ui,i,r,o,l=vn,a=vn,c,h=rs,d=1){if(h!==rs&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,l,a,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Hd extends gs{constructor(e,t=ui,n=Zs,i,r,o=vn,l=vn,a,c=rs){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,l,a,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gd extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ue extends nn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(d,2));function p(x,m,g,M,T,w,N,L,v,b,z){const F=w/v,q=N/b,re=w/2,Q=N/2,B=L/2,se=v+1,le=b+1;let Z=0,W=0;const te=new G;for(let fe=0;fe<le;fe++){const Ee=fe*q-Q;for(let Ke=0;Ke<se;Ke++){const at=Ke*F-re;te[x]=at*M,te[m]=Ee*T,te[g]=B,c.push(te.x,te.y,te.z),te[x]=0,te[m]=0,te[g]=L>0?1:-1,h.push(te.x,te.y,te.z),d.push(Ke/v),d.push(1-fe/b),Z+=1}}for(let fe=0;fe<b;fe++)for(let Ee=0;Ee<v;Ee++){const Ke=f+Ee+se*fe,at=f+Ee+se*(fe+1),_e=f+(Ee+1)+se*(fe+1),Ye=f+(Ee+1)+se*fe;a.push(Ke,at,Ye),a.push(at,_e,Ye),W+=6}l.addGroup(u,W,z),u+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ue(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ua extends nn{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],l=[],a=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,x=i+1,m=new G,g=new G;for(let M=0;M<=p;M++){let T=0,w=0,N=0,L=0;if(M<=n){const z=M/n,F=z*Math.PI/2;w=-h-e*Math.cos(F),N=e*Math.sin(F),L=-e*Math.cos(F),T=z*d}else if(M<=n+r){const z=(M-n)/r;w=-h+z*t,N=e,L=0,T=d+z*f}else{const z=(M-n-r)/n,F=z*Math.PI/2;w=h+e*Math.sin(F),N=e*Math.cos(F),L=e*Math.sin(F),T=d+f+z*d}const v=Math.max(0,Math.min(1,T/u));let b=0;M===0?b=.5/i:M===p&&(b=-.5/i);for(let z=0;z<=i;z++){const F=z/i,q=F*Math.PI*2,re=Math.sin(q),Q=Math.cos(q);g.x=-N*Q,g.y=w,g.z=N*re,l.push(g.x,g.y,g.z),m.set(-N*Q,L,N*re),m.normalize(),a.push(m.x,m.y,m.z),c.push(F+b,v)}if(M>0){const z=(M-1)*x;for(let F=0;F<i;F++){const q=z+F,re=z+F+1,Q=M*x+F,B=M*x+F+1;o.push(q,re,Q),o.push(re,B,Q)}}}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class li extends nn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],l=[],a=[],c=new G,h=new Be;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,a.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class it extends nn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(u,2));function M(){const w=new G,N=new G;let L=0;const v=(t-e)/n;for(let b=0;b<=r;b++){const z=[],F=b/r,q=F*(t-e)+e;for(let re=0;re<=i;re++){const Q=re/i,B=Q*a+l,se=Math.sin(B),le=Math.cos(B);N.x=q*se,N.y=-F*n+m,N.z=q*le,d.push(N.x,N.y,N.z),w.set(se,v,le).normalize(),f.push(w.x,w.y,w.z),u.push(Q,1-F),z.push(p++)}x.push(z)}for(let b=0;b<i;b++)for(let z=0;z<r;z++){const F=x[z][b],q=x[z+1][b],re=x[z+1][b+1],Q=x[z][b+1];(e>0||z!==0)&&(h.push(F,q,Q),L+=3),(t>0||z!==r-1)&&(h.push(q,re,Q),L+=3)}c.addGroup(g,L,0),g+=L}function T(w){const N=p,L=new Be,v=new G;let b=0;const z=w===!0?e:t,F=w===!0?1:-1;for(let re=1;re<=i;re++)d.push(0,m*F,0),f.push(0,F,0),u.push(.5,.5),p++;const q=p;for(let re=0;re<=i;re++){const B=re/i*a+l,se=Math.cos(B),le=Math.sin(B);v.x=z*le,v.y=m*F,v.z=z*se,d.push(v.x,v.y,v.z),f.push(0,F,0),L.x=se*.5+.5,L.y=le*.5*F+.5,u.push(L.x,L.y),p++}for(let re=0;re<i;re++){const Q=N+re,B=q+re;w===!0?h.push(B,B+1,Q):h.push(B+1,B,Q),b+=3}c.addGroup(g,b,w===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gn extends it{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new gn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends nn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),c(n),h(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const T=new G,w=new G,N=new G;for(let L=0;L<t.length;L+=3)u(t[L+0],T),u(t[L+1],w),u(t[L+2],N),a(T,w,N,M)}function a(M,T,w,N){const L=N+1,v=[];for(let b=0;b<=L;b++){v[b]=[];const z=M.clone().lerp(w,b/L),F=T.clone().lerp(w,b/L),q=L-b;for(let re=0;re<=q;re++)re===0&&b===L?v[b][re]=z:v[b][re]=z.clone().lerp(F,re/q)}for(let b=0;b<L;b++)for(let z=0;z<2*(L-b)-1;z++){const F=Math.floor(z/2);z%2===0?(f(v[b][F+1]),f(v[b+1][F]),f(v[b][F])):(f(v[b][F+1]),f(v[b+1][F+1]),f(v[b+1][F]))}}function c(M){const T=new G;for(let w=0;w<r.length;w+=3)T.x=r[w+0],T.y=r[w+1],T.z=r[w+2],T.normalize().multiplyScalar(M),r[w+0]=T.x,r[w+1]=T.y,r[w+2]=T.z}function h(){const M=new G;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const w=m(M)/2/Math.PI+.5,N=g(M)/Math.PI+.5;o.push(w,1-N)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){const T=o[M+0],w=o[M+2],N=o[M+4],L=Math.max(T,w,N),v=Math.min(T,w,N);L>.9&&v<.1&&(T<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),N<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,T){const w=M*3;T.x=e[w+0],T.y=e[w+1],T.z=e[w+2]}function p(){const M=new G,T=new G,w=new G,N=new G,L=new Be,v=new Be,b=new Be;for(let z=0,F=0;z<r.length;z+=9,F+=6){M.set(r[z+0],r[z+1],r[z+2]),T.set(r[z+3],r[z+4],r[z+5]),w.set(r[z+6],r[z+7],r[z+8]),L.set(o[F+0],o[F+1]),v.set(o[F+2],o[F+3]),b.set(o[F+4],o[F+5]),N.copy(M).add(T).add(w).divideScalar(3);const q=m(N);x(L,F+0,M,q),x(v,F+2,T,q),x(b,F+4,w,q)}}function x(M,T,w,N){N<0&&M.x===1&&(o[T]=M.x-1),w.x===0&&w.z===0&&(o[T]=N/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.detail)}}class Si extends wa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Si(e.radius,e.detail)}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){At("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(i=Math.floor(l+(a-l)/2),c=n[i]-o,c<0)l=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),l=this.getPoint(r),a=t||(o.isVector2?new Be:new G);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new G,i=[],r=[],o=[],l=new G,a=new Lt;for(let u=0;u<=e;u++){const p=u/e;i[u]=this.getTangentAt(p,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),l.crossVectors(i[u-1],i[u]),l.length()>Number.EPSILON){l.normalize();const p=Math.acos(kt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(l,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(kt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(a.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Xc extends Pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Be){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=a-this.aX,u=c-this.aY;a=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(a,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class u0 extends Xc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qc(){let s=0,e=0,t=0,n=0;function i(r,o,l,a){s=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){i(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,h,d){let f=(o-r)/c-(l-r)/(c+h)+(l-o)/h,u=(l-o)/h-(a-o)/(h+d)+(a-l)/d;f*=h,u*=h,i(o,l,f,u)},calc:function(r){const o=r*r,l=o*r;return s+e*r+t*o+n*l}}}const jh=new G,eu=new G,al=new qc,ll=new qc,cl=new qc;class d0 extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new G){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,h;this.closed||l>0?c=i[(l-1)%r]:(eu.subVectors(i[0],i[1]).add(i[0]),c=eu);const d=i[l%r],f=i[(l+1)%r];if(this.closed||l+2<r?h=i[(l+2)%r]:(jh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=jh),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),al.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),ll.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),cl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ll.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),cl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(al.calc(a),ll.calc(a),cl.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new G().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,l=s*s,a=s*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*s+t}function f0(s,e){const t=1-s;return t*t*e}function p0(s,e){return 2*(1-s)*s*e}function m0(s,e){return s*s*e}function Or(s,e,t,n){return f0(s,e)+p0(s,t)+m0(s,n)}function g0(s,e){const t=1-s;return t*t*t*e}function _0(s,e){const t=1-s;return 3*t*t*s*e}function x0(s,e){return 3*(1-s)*s*s*e}function v0(s,e){return s*s*s*e}function Fr(s,e,t,n,i){return g0(s,e)+_0(s,t)+x0(s,n)+v0(s,i)}class Vd extends Pi{constructor(e=new Be,t=new Be,n=new Be,i=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Be){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Fr(e,i.x,r.x,o.x,l.x),Fr(e,i.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M0 extends Pi{constructor(e=new G,t=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new G){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Fr(e,i.x,r.x,o.x,l.x),Fr(e,i.y,r.y,o.y,l.y),Fr(e,i.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wd extends Pi{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y0 extends Pi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Pi{constructor(e=new Be,t=new Be,n=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Be){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Or(e,i.x,r.x,o.x),Or(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S0 extends Pi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Or(e,i.x,r.x,o.x),Or(e,i.y,r.y,o.y),Or(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),l=r-o,a=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(tu(l,a.x,c.x,h.x,d.x),tu(l,a.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Be().fromArray(i))}return this}}var cc=Object.freeze({__proto__:null,ArcCurve:u0,CatmullRomCurve3:d0,CubicBezierCurve:Vd,CubicBezierCurve3:M0,EllipseCurve:Xc,LineCurve:Wd,LineCurve3:y0,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:S0,SplineCurve:qd});class b0 extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let c=0;c<a.length;c++){const h=a[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new cc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class nu extends b0{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wd(this.currentPoint.clone(),new Be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Xd(this.currentPoint.clone(),new Be(e,t),new Be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const l=new Vd(this.currentPoint.clone(),new Be(e,t),new Be(n,i),new Be(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,l,a){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,l,a),this}absellipse(e,t,n,i,r,o,l,a){const c=new Xc(e,t,n,i,r,o,l,a);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jr extends nu{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new nu().fromJSON(i))}return this}}function w0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Yd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let l,a,c;if(n&&(r=C0(s,e,r,t)),s.length>80*t){l=s[0],a=s[1];let h=l,d=a;for(let f=t;f<i;f+=t){const u=s[f],p=s[f+1];u<l&&(l=u),p<a&&(a=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-l,d-a),c=c!==0?32767/c:0}return $r(r,o,t,l,a,c,0),o}function Yd(s,e,t,n,i){let r;if(i===z0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=iu(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=iu(o/n|0,s[o],s[o+1],r);return r&&Qs(r,r.next)&&(jr(r),r=r.next),r}function _s(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Qs(t,t.next)||hn(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(s,e,t,n,i,r,o){if(!s)return;!o&&r&&N0(s,n,i,r);let l=s;for(;s.prev!==s.next;){const a=s.prev,c=s.next;if(r?E0(s,n,i,r):T0(s)){e.push(a.i,s.i,c.i),jr(s),s=c.next,l=c.next;continue}if(s=c,s===l){o?o===1?(s=A0(_s(s),e),$r(s,e,t,n,i,r,2)):o===2&&R0(s,e,t,n,i,r):$r(_s(s),e,t,n,i,r,1);break}}}function T0(s){const e=s.prev,t=s,n=s.next;if(hn(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,l=e.y,a=t.y,c=n.y,h=Math.min(i,r,o),d=Math.min(l,a,c),f=Math.max(i,r,o),u=Math.max(l,a,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Rr(i,l,r,a,o,c,p.x,p.y)&&hn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function E0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(hn(i,r,o)>=0)return!1;const l=i.x,a=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(l,a,c),p=Math.min(h,d,f),x=Math.max(l,a,c),m=Math.max(h,d,f),g=hc(u,p,e,t,n),M=hc(x,m,e,t,n);let T=s.prevZ,w=s.nextZ;for(;T&&T.z>=g&&w&&w.z<=M;){if(T.x>=u&&T.x<=x&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Rr(l,h,a,d,c,f,T.x,T.y)&&hn(T.prev,T,T.next)>=0||(T=T.prevZ,w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Rr(l,h,a,d,c,f,w.x,w.y)&&hn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;T&&T.z>=g;){if(T.x>=u&&T.x<=x&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Rr(l,h,a,d,c,f,T.x,T.y)&&hn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;w&&w.z<=M;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&Rr(l,h,a,d,c,f,w.x,w.y)&&hn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function A0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Qs(n,i)&&Zd(n,t,t.next,i)&&Qr(n,i)&&Qr(i,n)&&(e.push(n.i,t.i,i.i),jr(t),jr(t.next),t=s=i),t=t.next}while(t!==s);return _s(t)}function R0(s,e,t,n,i,r){let o=s;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&F0(o,l)){let a=Jd(o,l);o=_s(o,o.next),a=_s(a,a.next),$r(o,e,t,n,i,r,0),$r(a,e,t,n,i,r,0);return}l=l.next}o=o.next}while(o!==s)}function C0(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const l=e[r]*n,a=r<o-1?e[r+1]*n:s.length,c=Yd(s,l,a,n,!1);c===c.next&&(c.steiner=!0),i.push(O0(c))}i.sort(P0);for(let r=0;r<i.length;r++)t=L0(i[r],t);return t}function P0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function L0(s,e){const t=D0(s,e);if(!t)return e;const n=Jd(t,s);return _s(n,n.next),_s(t,t.next)}function D0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Qs(s,t))return t;do{if(Qs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const l=o,a=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&Kd(i<c?n:r,i,a,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Qr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&I0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function I0(s,e){return hn(s.prev,s,e.prev)<0&&hn(e.next,s,s.next)<0}function N0(s,e,t,n){let i=s;do i.z===0&&(i.z=hc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,U0(i)}function U0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let c=0;c<t&&(l++,o=o.nextZ,!!o);c++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,l--):(i=o,o=o.nextZ,a--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function hc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function O0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Kd(s,e,t,n,i,r,o,l){return(i-o)*(e-l)>=(s-o)*(r-l)&&(s-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(i-o)*(n-l)}function Rr(s,e,t,n,i,r,o,l){return!(s===o&&e===l)&&Kd(s,e,t,n,i,r,o,l)}function F0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!B0(s,e)&&(Qr(s,e)&&Qr(e,s)&&k0(s,e)&&(hn(s.prev,s,e.prev)||hn(s,e.prev,e))||Qs(s,e)&&hn(s.prev,s,s.next)>0&&hn(e.prev,e,e.next)>0)}function hn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Qs(s,e){return s.x===e.x&&s.y===e.y}function Zd(s,e,t,n){const i=No(hn(s,e,t)),r=No(hn(s,e,n)),o=No(hn(t,n,s)),l=No(hn(t,n,e));return!!(i!==r&&o!==l||i===0&&Io(s,t,e)||r===0&&Io(s,n,e)||o===0&&Io(t,s,n)||l===0&&Io(t,e,n))}function Io(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function No(s){return s>0?1:s<0?-1:0}function B0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qr(s,e){return hn(s.prev,s,s.next)<0?hn(s,e,s.next)>=0&&hn(s,s.prev,e)>=0:hn(s,e,s.prev)<0||hn(s,s.next,e)<0}function k0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Jd(s,e){const t=uc(s.i,s.x,s.y),n=uc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function iu(s,e,t,n){const i=uc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function uc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class H0{static triangulate(e,t,n=2){return w0(e,t,n)}}class zi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];su(e),ru(n,e);let o=e.length;t.forEach(su);for(let a=0;a<t.length;a++)i.push(o),o+=t[a].length,ru(n,t[a]);const l=H0.triangulate(n,i);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}}function su(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ru(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class da extends nn{constructor(e=new Jr([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let l=0,a=e.length;l<a;l++){const c=e[l];o(c)}this.setAttribute("position",new Pt(i,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(l){const a=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:G0;let T,w=!1,N,L,v,b;if(g){T=g.getSpacedPoints(h),w=!0,f=!1;const Le=g.isCatmullRomCurve3?g.closed:!1;N=g.computeFrenetFrames(h,Le),L=new G,v=new G,b=new G}f||(m=0,u=0,p=0,x=0);const z=l.extractPoints(c);let F=z.shape;const q=z.holes;if(!zi.isClockWise(F)){F=F.reverse();for(let Le=0,Xe=q.length;Le<Xe;Le++){const et=q[Le];zi.isClockWise(et)&&(q[Le]=et.reverse())}}function Q(Le){const et=10000000000000001e-36;let rt=Le[0];for(let nt=1;nt<=Le.length;nt++){const ot=nt%Le.length,lt=Le[ot],Ae=lt.x-rt.x,ze=lt.y-rt.y,ke=Ae*Ae+ze*ze,I=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(rt.x),Math.abs(rt.y)),je=et*I*I;if(ke<=je){Le.splice(ot,1),nt--;continue}rt=lt}}Q(F),q.forEach(Q);const B=q.length,se=F;for(let Le=0;Le<B;Le++){const Xe=q[Le];F=F.concat(Xe)}function le(Le,Xe,et){return Xe||Dt("ExtrudeGeometry: vec does not exist"),Le.clone().addScaledVector(Xe,et)}const Z=F.length;function W(Le,Xe,et){let rt,nt,ot;const lt=Le.x-Xe.x,Ae=Le.y-Xe.y,ze=et.x-Le.x,ke=et.y-Le.y,I=lt*lt+Ae*Ae,je=lt*ke-Ae*ze;if(Math.abs(je)>Number.EPSILON){const $e=Math.sqrt(I),qe=Math.sqrt(ze*ze+ke*ke),Ie=Xe.x-Ae/$e,tt=Xe.y+lt/$e,Ce=et.x-ke/qe,he=et.y+ze/qe,D=((Ce-Ie)*ke-(he-tt)*ze)/(lt*ke-Ae*ze);rt=Ie+lt*D-Le.x,nt=tt+Ae*D-Le.y;const S=rt*rt+nt*nt;if(S<=2)return new Be(rt,nt);ot=Math.sqrt(S/2)}else{let $e=!1;lt>Number.EPSILON?ze>Number.EPSILON&&($e=!0):lt<-Number.EPSILON?ze<-Number.EPSILON&&($e=!0):Math.sign(Ae)===Math.sign(ke)&&($e=!0),$e?(rt=-Ae,nt=lt,ot=Math.sqrt(I)):(rt=lt,nt=Ae,ot=Math.sqrt(I/2))}return new Be(rt/ot,nt/ot)}const te=[];for(let Le=0,Xe=se.length,et=Xe-1,rt=Le+1;Le<Xe;Le++,et++,rt++)et===Xe&&(et=0),rt===Xe&&(rt=0),te[Le]=W(se[Le],se[et],se[rt]);const fe=[];let Ee,Ke=te.concat();for(let Le=0,Xe=B;Le<Xe;Le++){const et=q[Le];Ee=[];for(let rt=0,nt=et.length,ot=nt-1,lt=rt+1;rt<nt;rt++,ot++,lt++)ot===nt&&(ot=0),lt===nt&&(lt=0),Ee[rt]=W(et[rt],et[ot],et[lt]);fe.push(Ee),Ke=Ke.concat(Ee)}let at;if(m===0)at=zi.triangulateShape(se,q);else{const Le=[],Xe=[];for(let et=0;et<m;et++){const rt=et/m,nt=u*Math.cos(rt*Math.PI/2),ot=p*Math.sin(rt*Math.PI/2)+x;for(let lt=0,Ae=se.length;lt<Ae;lt++){const ze=le(se[lt],te[lt],ot);dt(ze.x,ze.y,-nt),rt===0&&Le.push(ze)}for(let lt=0,Ae=B;lt<Ae;lt++){const ze=q[lt];Ee=fe[lt];const ke=[];for(let I=0,je=ze.length;I<je;I++){const $e=le(ze[I],Ee[I],ot);dt($e.x,$e.y,-nt),rt===0&&ke.push($e)}rt===0&&Xe.push(ke)}}at=zi.triangulateShape(Le,Xe)}const _e=at.length,Ye=p+x;for(let Le=0;Le<Z;Le++){const Xe=f?le(F[Le],Ke[Le],Ye):F[Le];w?(v.copy(N.normals[0]).multiplyScalar(Xe.x),L.copy(N.binormals[0]).multiplyScalar(Xe.y),b.copy(T[0]).add(v).add(L),dt(b.x,b.y,b.z)):dt(Xe.x,Xe.y,0)}for(let Le=1;Le<=h;Le++)for(let Xe=0;Xe<Z;Xe++){const et=f?le(F[Xe],Ke[Xe],Ye):F[Xe];w?(v.copy(N.normals[Le]).multiplyScalar(et.x),L.copy(N.binormals[Le]).multiplyScalar(et.y),b.copy(T[Le]).add(v).add(L),dt(b.x,b.y,b.z)):dt(et.x,et.y,d/h*Le)}for(let Le=m-1;Le>=0;Le--){const Xe=Le/m,et=u*Math.cos(Xe*Math.PI/2),rt=p*Math.sin(Xe*Math.PI/2)+x;for(let nt=0,ot=se.length;nt<ot;nt++){const lt=le(se[nt],te[nt],rt);dt(lt.x,lt.y,d+et)}for(let nt=0,ot=q.length;nt<ot;nt++){const lt=q[nt];Ee=fe[nt];for(let Ae=0,ze=lt.length;Ae<ze;Ae++){const ke=le(lt[Ae],Ee[Ae],rt);w?dt(ke.x,ke.y+T[h-1].y,T[h-1].x+et):dt(ke.x,ke.y,d+et)}}}st(),ut();function st(){const Le=i.length/3;if(f){let Xe=0,et=Z*Xe;for(let rt=0;rt<_e;rt++){const nt=at[rt];Ft(nt[2]+et,nt[1]+et,nt[0]+et)}Xe=h+m*2,et=Z*Xe;for(let rt=0;rt<_e;rt++){const nt=at[rt];Ft(nt[0]+et,nt[1]+et,nt[2]+et)}}else{for(let Xe=0;Xe<_e;Xe++){const et=at[Xe];Ft(et[2],et[1],et[0])}for(let Xe=0;Xe<_e;Xe++){const et=at[Xe];Ft(et[0]+Z*h,et[1]+Z*h,et[2]+Z*h)}}n.addGroup(Le,i.length/3-Le,0)}function ut(){const Le=i.length/3;let Xe=0;Ze(se,Xe),Xe+=se.length;for(let et=0,rt=q.length;et<rt;et++){const nt=q[et];Ze(nt,Xe),Xe+=nt.length}n.addGroup(Le,i.length/3-Le,1)}function Ze(Le,Xe){let et=Le.length;for(;--et>=0;){const rt=et;let nt=et-1;nt<0&&(nt=Le.length-1);for(let ot=0,lt=h+m*2;ot<lt;ot++){const Ae=Z*ot,ze=Z*(ot+1),ke=Xe+rt+Ae,I=Xe+nt+Ae,je=Xe+nt+ze,$e=Xe+rt+ze;ht(ke,I,je,$e)}}}function dt(Le,Xe,et){a.push(Le),a.push(Xe),a.push(et)}function Ft(Le,Xe,et){Mt(Le),Mt(Xe),Mt(et);const rt=i.length/3,nt=M.generateTopUV(n,i,rt-3,rt-2,rt-1);St(nt[0]),St(nt[1]),St(nt[2])}function ht(Le,Xe,et,rt){Mt(Le),Mt(Xe),Mt(rt),Mt(Xe),Mt(et),Mt(rt);const nt=i.length/3,ot=M.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);St(ot[0]),St(ot[1]),St(ot[3]),St(ot[1]),St(ot[2]),St(ot[3])}function Mt(Le){i.push(a[Le*3+0]),i.push(a[Le*3+1]),i.push(a[Le*3+2])}function St(Le){r.push(Le.x),r.push(Le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return V0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new cc[i.type]().fromJSON(i)),new da(n,e.options)}}const G0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],l=e[n*3],a=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Be(r,o),new Be(l,a),new Be(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],l=e[t*3+1],a=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(l-h)<Math.abs(o-c)?[new Be(o,1-a),new Be(c,1-d),new Be(f,1-p),new Be(x,1-g)]:[new Be(l,1-a),new Be(h,1-d),new Be(u,1-p),new Be(m,1-g)]}};function V0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yc extends nn{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=kt(i,0,Math.PI*2);const r=[],o=[],l=[],a=[],c=[],h=1/t,d=new G,f=new Be,u=new G,p=new G,x=new G;let m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:x.normalize(),a.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),a.push(u.x,u.y,u.z),x.copy(p)}for(let M=0;M<=t;M++){const T=n+M*h*i,w=Math.sin(T),N=Math.cos(T);for(let L=0;L<=e.length-1;L++){d.x=e[L].x*w,d.y=e[L].y,d.z=e[L].x*N,o.push(d.x,d.y,d.z),f.x=M/t,f.y=L/(e.length-1),l.push(f.x,f.y);const v=a[3*L+0]*w,b=a[3*L+1],z=a[3*L+0]*N;c.push(v,b,z)}}for(let M=0;M<t;M++)for(let T=0;T<e.length-1;T++){const w=T+M*e.length,N=w,L=w+e.length,v=w+e.length+1,b=w+1;r.push(N,L,b),r.push(v,b,L)}this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("uv",new Pt(l,2)),this.setAttribute("normal",new Pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.points,e.segments,e.phiStart,e.phiLength)}}class Kc extends wa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kc(e.radius,e.detail)}}class Zt extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(i),c=l+1,h=a+1,d=e/l,f=t/a,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*f-o;for(let T=0;T<c;T++){const w=T*d-r;p.push(w,-M,0),x.push(0,0,1),m.push(T/l),m.push(1-g/a)}}for(let g=0;g<a;g++)for(let M=0;M<l;M++){const T=M+c*g,w=M+c*(g+1),N=M+1+c*(g+1),L=M+1+c*g;u.push(T,w,L),u.push(w,N,L)}this.setIndex(u),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zc extends nn{constructor(e=new Jr([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let l=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new Pt(i,3)),this.setAttribute("normal",new Pt(r,3)),this.setAttribute("uv",new Pt(o,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const p=f.holes;zi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];zi.isClockWise(M)===!0&&(p[m]=M.reverse())}const x=zi.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];u=u.concat(M)}for(let m=0,g=u.length;m<g;m++){const M=u[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=x.length;m<g;m++){const M=x[m],T=M[0]+d,w=M[1]+d,N=M[2]+d;n.push(T,w,N),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return W0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Zc(n,e.curveSegments)}}function W0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Kt extends nn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(o+l,Math.PI);let c=0;const h=[],d=new G,f=new G,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],T=g/n,w=o+T*l,N=e*Math.cos(w),L=Math.sqrt(e*e-N*N);let v=0;g===0&&o===0?v=.5/t:g===n&&a===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const z=b/t,F=i+z*r;d.x=-L*Math.cos(F),d.y=N,d.z=L*Math.sin(F),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(z+v,1-T),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){const T=h[g][M+1],w=h[g][M],N=h[g+1][M],L=h[g+1][M+1];(g!==0||o>0)&&u.push(T,w,L),(g!==n-1||a<Math.PI)&&u.push(w,N,L)}this.setIndex(u),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends nn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],h=[],d=[],f=new G,u=new G,p=new G;for(let x=0;x<=n;x++){const m=o+x/n*l;for(let g=0;g<=i;g++){const M=g/i*r;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,M=(i+1)*(x-1)+m-1,T=(i+1)*(x-1)+m,w=(i+1)*x+m;a.push(g,M,w),a.push(M,T,w)}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function js(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(ou(i))i.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ou(i[0])){const r=[];for(let o=0,l=i.length;o<l;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zn(s){const e={};for(let t=0;t<s.length;t++){const n=js(s[t]);for(const i in n)e[i]=n[i]}return e}function ou(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function X0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $d(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qt.workingColorSpace}const eo={clone:js,merge:zn};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new rn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Lt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qd extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class er extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zo extends $n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class K0 extends $n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Z0 extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J0 extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ji(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function $0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function au(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let a=0;a!==e;++a)i[o++]=s[l+a]}return i}function Q0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class j0 extends ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hs,endingEnd:Hs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,l=i[r],a=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Gs:r=e,l=2*t-n;break;case sa:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Gs:o=e,a=2*n-t;break;case sa:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,T=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let N=0;N!==l;++N)r[N]=g*o[h+N]+M*o[c+N]+T*o[a+N]+w*o[d+N];return r}}class jd extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==l;++f)r[f]=o[c+f]*d+o[a+f]*h;return r}}class em extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class tm extends ir{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),x=1-p;for(let m=0;m!==l;++m)r[m]=o[c+m]*x+o[a+m]*p;return r}const f=l*2,u=e-1;for(let p=0;p!==l;++p){const x=o[c+p],m=o[a+p],g=u*f+p*2,M=d[g],T=d[g+1],w=e*f+p*2,N=h[w],L=h[w+1],v=im(n,t,M,N,i);r[p]=ef(v,x,T,L,m)}return r}}function ef(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function nm(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function im(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const l=ef(r,e,t,n,i)-s;if(Math.abs(l)<1e-10)break;const a=nm(r,e,t,n,i);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Cr(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new em(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new j0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new tm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case xh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return At("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Cr(this.settings)&&(lu(this.settings.inTangents,e),lu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Cr(this.settings)&&(cu(this.settings.inTangents,e),cu(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const a=n[l];if(typeof a=="number"&&isNaN(a)){Dt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){Dt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(i!==void 0&&xp(i))for(let l=0,a=i.length;l!==a;++l){const c=i[l];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,r=e.length-1;let o=1;for(let l=1;l<r;++l){let a=!1;const c=e[l],h=e[l+1];if(c!==h&&(l!==1||c!==e[0]))if(i)a=!0;else{const d=l*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const x=t[d+p];if(x!==t[f+p]||x!==t[u+p]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];const d=l*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[l+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Cr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function lu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function cu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Vr;class sr extends mi{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Gr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class tf extends mi{constructor(e,t,n,i){super(e,t,n,i)}}tf.prototype.ValueTypeName="color";class to extends mi{constructor(e,t,n,i){super(e,t,n,i)}}to.prototype.ValueTypeName="number";class sm extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(i-t);let c=e*l;for(let h=c+l;c!==h;c+=4)cn.slerpFlat(r,0,o,c-l,o,c,a);return r}}class no extends mi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new sm(this.times,this.values,this.getValueSize(),e)}}no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends mi{constructor(e,t,n){super(e,t,n)}}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Gr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class fa extends mi{constructor(e,t,n,i){super(e,t,n,i)}}fa.prototype.ValueTypeName="vector";class dc{constructor(e="",t=-1,n=[],i=Uc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(om(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(mi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let l=0;l<r;l++){let a=[],c=[];a.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);const h=$0(a);a=au(a,1,h),c=au(c,1,h),!i&&a[0]===0&&(a.push(r),c.push(c[0])),o.push(new to(".morphTargetInfluences["+t[l].name+"]",a,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,a=e.length;l<a;l++){const c=e[l],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function rm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return fa;case"color":return tf;case"quaternion":return no;case"bool":case"boolean":return sr;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function om(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rm(s.type);if(s.times===void 0){const n=[],i=[];Q0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Cr(s.settings)&&(t.settings={inTangents:ji(s.settings.inTangents,Float32Array),outTangents:ji(s.settings.outTangents,Float32Array)}),t}const Hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(hu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!hu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function hu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class nf{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const am=new nf;class or{constructor(e){this.manager=e!==void 0?e:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}or.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class lm extends Error{constructor(e,t){super(e),this.response=t}}class sf extends or{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,a=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&At("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Oi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let x=0;const m=new ReadableStream({start(g){M();function M(){d.read().then(({done:T,value:w})=>{if(T)g.close();else{x+=w.byteLength;const N=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let L=0,v=h.length;L<v;L++){const b=h[L];b.onProgress&&b.onProgress(N)}g.enqueue(w),M()}},T=>{g.error(T)})}}});return new Response(m)}else throw new lm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return c.json();default:if(l==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Hi.add(`file:${e}`,c);const h=Oi[e];delete Oi[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=new WeakMap;class cm extends or{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Os.get(o);d===void 0&&(d=[],Os.set(o,d)),d.push({onLoad:t,onError:i})}return o}const l=qr("img");function a(){h(),t&&t(this);const d=Os.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Os.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Hi.remove(`image:${e}`);const f=Os.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,l),r.manager.itemStart(e),l.fetchPriority=this.priority,l.src=e,l}}class hm extends or{constructor(e){super(e)}load(e,t,n,i){const r=new Sn,o=new cm(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ta extends an{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class um extends Ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const hl=new Lt,uu=new G,du=new G;class Jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,l=i?i.w/r.y:1,a=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Xr||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uo=new G,Oo=new cn,_i=new G;class rf extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Oo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Oo,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Uo,Oo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Oo,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new G,fu=new Be,pu=new Be;class Xn extends rf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dm extends Jc{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=$s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class fm extends Ta{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class pm extends Jc{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gi extends Ta{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ea extends rf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mm extends Jc{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new mm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Br{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ul=new WeakMap;class gm extends or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&At("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&At("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ul.has(o)===!0?(i&&i(ul.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const l={};l.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",l.headers=this.requestHeader,l.priority=this.priority,l.cache=this.cache,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const a=fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ul.set(a,c),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fs=-90,Bs=1;class fc extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xn(Fs,Bs,e,t);i.layers=this.layers,this.add(i);const r=new Xn(Fs,Bs,e,t);r.layers=this.layers,this.add(r);const o=new Xn(Fs,Bs,e,t);o.layers=this.layers,this.add(o);const l=new Xn(Fs,Bs,e,t);l.layers=this.layers,this.add(l);const a=new Xn(Fs,Bs,e,t);a.layers=this.layers,this.add(a);const c=new Xn(Fs,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,a]=t;for(const c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,a,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class _m extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class xm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function vm(){this._document.hidden===!1&&this.reset()}class Mm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let l=0;l!==i;++l)n[r+l]=n[l];o=t}else{o+=t;const l=t/o;this._mixBufferRegion(n,r,0,l,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){l.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){cn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;cn.multiplyQuaternionsFlat(e,o,e,t,e,n),cn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let l=0;l!==r;++l){const a=t+l;e[a]=e[a]*o+e[n+l]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]+e[n+o]*i}}}const $c="\\[\\]\\.:\\/",ym=new RegExp("["+$c+"]","g"),Qc="[^"+$c+"]",Sm="[^"+$c.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",Qc),wm=/(WCOD+)?/.source.replace("WCOD",Sm),Tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Em=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Am=new RegExp("^"+bm+wm+Tm+Em+"$"),Rm=["material","materials","bones","map"];class Cm{constructor(e,t,n){const i=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tn{constructor(e,t,n){this.path=t,this.parsedPath=n||tn.parseTrackName(t),this.node=tn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tn.Composite(e,t,n):new tn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ym,"")}static parseTrackName(e){const t=Am.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const a=n(l.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tn.Composite=Cm;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,l=new Array(o),a={endingStart:Hs,endingEnd:Hs};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);l[c]=h,h.settings=a}this._interpolantSettings=a,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=rp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,l=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=i._lendControlInterpolant(),this._timeScaleInterpolant=l);const a=l.parameterPositions,c=l.sampleValues;return a[0]=r,a[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const a=(e-r)*n;a<0||n===0?t=0:(this._startTime=null,t=n*a)}t*=this._updateTimeScale(e);const o=this._updateTime(t),l=this._updateWeight(e);if(l>0){const a=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ap:for(let h=0,d=a.length;h!==d;++h)a[h].evaluate(o),c[h].accumulateAdditive(l);break;case Uc:default:for(let h=0,d=a.length;h!==d;++h)a[h].evaluate(o),c[h].accumulate(i,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===op;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===sp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const l=Math.floor(i/t);i-=t*l,r+=Math.abs(l);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Gs,i.endingEnd=Gs):(e?i.endingStart=this.zeroSlopeAtStart?Gs:Hs:i.endingStart=sa,t?i.endingEnd=this.zeroSlopeAtEnd?Gs:Hs:i.endingEnd=sa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const l=o.parameterPositions,a=o.sampleValues;return l[0]=r,a[0]=t,l[1]=r+e,a[1]=n,this}}const Lm=new Float32Array(1);class Dm extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,l=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let h=c[a];h===void 0&&(h={},c[a]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let p=h[u];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,a,u));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;p=new Mm(tn.create(n,u,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,a,u),o[d]=p}l[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,l=o[r],a=l.knownActions,c=a[a.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,a[h]=c,a.pop(),e._byClipCacheIndex=null;const d=l.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],a.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jd(new Float32Array(2),new Float32Array(2),1,Lm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?dc.findByName(i,e):e;const l=o!==null?o.uuid:e,a=this._actionsByClip[l];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Uc),a!==void 0){const d=a.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=a.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Pm(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,l,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?dc.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const l=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)l[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let l=0,a=o.length;l!==a;++l){const c=o[l];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const l=n[o].actionByRoot,a=l[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const mu=new Lt;class Im{constructor(e,t,n=0,i=1/0){this.ray=new nr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,n=[]){return pc(e,this,n,t),n.sort(gu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)pc(e[i],this,n,t);return n.sort(gu),n}}function gu(s,e){return s.distance-e.distance}function pc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,l=r.length;o<l;o++)pc(r[o],e,t,!0)}}class _u{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nm extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xu(s,e,t,n){const i=Um(n);switch(t){case bd:return s*e;case ya:return s*e/i.components*i.byteLength;case Dc:return s*e/i.components*i.byteLength;case ms:return s*e*2/i.components*i.byteLength;case Ic:return s*e*2/i.components*i.byteLength;case wd:return s*e*3/i.components*i.byteLength;case ci:return s*e*4/i.components*i.byteLength;case Nc:return s*e*4/i.components*i.byteLength;case Xo:case qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Il:return Math.max(s,16)*Math.max(e,8)/4;case Pl:case Dl:return Math.max(s,8)*Math.max(e,8)/2;case Nl:case Ul:case Fl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case na:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ia:case rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(s){switch(s){case Jn:case vd:return{byteLength:1,components:1};case Hr:case Md:case On:return{byteLength:2,components:1};case Pc:case Lc:return{byteLength:2,components:4};case ui:case Cc:case ii:return{byteLength:4,components:1};case yd:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function af(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Om(s){const e=new WeakMap;function t(l,a){const c=l.array,h=l.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(a,f),s.bufferData(a,c,h),l.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,a,c){const h=a.array,d=a.updateRanges;if(s.bindBuffer(c,l),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(s.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:i,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,og=`#define PI 3.141592653589793
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
} // validated`,ag=`vec3 transformedNormal = objectNormal;
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
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
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
#endif`,Ng=`uniform sampler2D dfgLUT;
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
}`,Ug=`
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
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
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y_=`float getShadowMask() {
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
}`,S_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,E_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform float backgroundBlurriness;
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
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
}`,V_=`#if DEPTH_PACKING == 3200
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
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,$_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,j_=`#define LAMBERT
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
}`,ex=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,nx=`#define NORMAL
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
}`,ix=`#define NORMAL
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
}`,sx=`#define PHONG
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
}`,rx=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,ax=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,cx=`#define TOON
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
}`,hx=`uniform float size;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 color;
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
}`,px=`uniform float rotation;
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
}`,mx=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Fm,alphahash_pars_fragment:Bm,alphamap_fragment:km,alphamap_pars_fragment:zm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Vm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:Km,bsdfs:Zm,iridescence_fragment:Jm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:eg,clipping_planes_vertex:tg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Rg,envmap_vertex:xg,fog_vertex:vg,fog_pars_vertex:Mg,fog_fragment:yg,fog_pars_fragment:Sg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:wg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Ag,lights_toon_fragment:Cg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Ng,lights_fragment_begin:Ug,lights_fragment_maps:Og,lights_fragment_end:Fg,lightprobes_pars_fragment:Bg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Vg,map_pars_fragment:Wg,map_particle_fragment:Xg,map_particle_pars_fragment:qg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:Zg,morphcolor_vertex:Jg,morphnormal_vertex:$g,morphtarget_pars_vertex:Qg,morphtarget_vertex:jg,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:h_,packing:u_,premultiplied_alpha_fragment:d_,project_vertex:f_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:v_,shadowmap_vertex:M_,shadowmask_pars_fragment:y_,skinbase_vertex:S_,skinning_pars_vertex:b_,skinning_vertex:w_,skinnormal_vertex:T_,specularmap_fragment:E_,specularmap_pars_fragment:A_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:L_,uv_pars_fragment:D_,uv_pars_vertex:I_,uv_vertex:N_,worldpos_vertex:U_,background_vert:O_,background_frag:F_,backgroundCube_vert:B_,backgroundCube_frag:k_,cube_vert:z_,cube_frag:H_,depth_vert:G_,depth_frag:V_,distance_vert:W_,distance_frag:X_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:K_,linedashed_frag:Z_,meshbasic_vert:J_,meshbasic_frag:$_,meshlambert_vert:Q_,meshlambert_frag:j_,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:hx,points_frag:ux,shadow_vert:dx,shadow_frag:fx,sprite_vert:px,sprite_frag:mx},ft={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Mi={basic:{uniforms:zn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:zn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:zn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:zn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:zn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:zn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:zn([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:zn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:zn([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:zn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:zn([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:zn([ft.common,ft.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:zn([ft.lights,ft.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Mi.physical={uniforms:zn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Fo={r:0,b:0,g:0},gx=new Lt,lf=new Ot;lf.set(-1,0,0,0,1,0,0,0,1);function _x(s,e,t,n,i,r){const o=new xt(0);let l=i===!0?0:1,a,c,h=null,d=0,f=null;function u(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const w=M.backgroundBlurriness>0;T=e.get(T,w)}return T}function p(M){let T=!1;const w=u(M);w===null?m(o,l):w&&w.isColor&&(m(w,1),T=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,T){const w=u(T);w&&w.isCubeTexture?(c===void 0&&(c=new Ut(new Ue(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:js(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(N,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lf),c.material.toneMapped=qt.getTransfer(w.colorSpace)!==en,(h!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(a===void 0&&(a=new Ut(new Zt(2,2),new Gn({name:"BackgroundMaterial",uniforms:js(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=w,a.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,a.material.toneMapped=qt.getTransfer(w.colorSpace)!==en,w.matrixAutoUpdate===!0&&w.updateMatrix(),a.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==s.toneMapping)&&(a.material.needsUpdate=!0,h=w,d=w.version,f=s.toneMapping),a.layers.enableAll(),M.unshift(a,a.geometry,a.material,0,0,null))}function m(M,T){M.getRGB(Fo,$d(s)),t.buffers.color.setClear(Fo.r,Fo.g,Fo.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:p,addToRenderList:x,dispose:g}}function xx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function l(q,re,Q,B,se){let le=!1;const Z=d(q,B,Q,re);r!==Z&&(r=Z,c(r.object)),le=u(q,B,Q,se),le&&p(q,B,Q,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,w(q,re,Q,B),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function a(){return s.createVertexArray()}function c(q){return s.bindVertexArray(q)}function h(q){return s.deleteVertexArray(q)}function d(q,re,Q,B){const se=B.wireframe===!0;let le=n[re.id];le===void 0&&(le={},n[re.id]=le);const Z=q.isInstancedMesh===!0?q.id:0;let W=le[Z];W===void 0&&(W={},le[Z]=W);let te=W[Q.id];te===void 0&&(te={},W[Q.id]=te);let fe=te[se];return fe===void 0&&(fe=f(a()),te[se]=fe),fe}function f(q){const re=[],Q=[],B=[];for(let se=0;se<t;se++)re[se]=0,Q[se]=0,B[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:Q,attributeDivisors:B,object:q,attributes:{},index:null}}function u(q,re,Q,B){const se=r.attributes,le=re.attributes;let Z=0;const W=Q.getAttributes();for(const te in W)if(W[te].location>=0){const Ee=se[te];let Ke=le[te];if(Ke===void 0&&(te==="instanceMatrix"&&q.instanceMatrix&&(Ke=q.instanceMatrix),te==="instanceColor"&&q.instanceColor&&(Ke=q.instanceColor)),Ee===void 0||Ee.attribute!==Ke||Ke&&Ee.data!==Ke.data)return!0;Z++}return r.attributesNum!==Z||r.index!==B}function p(q,re,Q,B){const se={},le=re.attributes;let Z=0;const W=Q.getAttributes();for(const te in W)if(W[te].location>=0){let Ee=le[te];Ee===void 0&&(te==="instanceMatrix"&&q.instanceMatrix&&(Ee=q.instanceMatrix),te==="instanceColor"&&q.instanceColor&&(Ee=q.instanceColor));const Ke={};Ke.attribute=Ee,Ee&&Ee.data&&(Ke.data=Ee.data),se[te]=Ke,Z++}r.attributes=se,r.attributesNum=Z,r.index=B}function x(){const q=r.newAttributes;for(let re=0,Q=q.length;re<Q;re++)q[re]=0}function m(q){g(q,0)}function g(q,re){const Q=r.newAttributes,B=r.enabledAttributes,se=r.attributeDivisors;Q[q]=1,B[q]===0&&(s.enableVertexAttribArray(q),B[q]=1),se[q]!==re&&(s.vertexAttribDivisor(q,re),se[q]=re)}function M(){const q=r.newAttributes,re=r.enabledAttributes;for(let Q=0,B=re.length;Q<B;Q++)re[Q]!==q[Q]&&(s.disableVertexAttribArray(Q),re[Q]=0)}function T(q,re,Q,B,se,le,Z){Z===!0?s.vertexAttribIPointer(q,re,Q,se,le):s.vertexAttribPointer(q,re,Q,B,se,le)}function w(q,re,Q,B){x();const se=B.attributes,le=Q.getAttributes(),Z=re.defaultAttributeValues;for(const W in le){const te=le[W];if(te.location>=0){let fe=se[W];if(fe===void 0&&(W==="instanceMatrix"&&q.instanceMatrix&&(fe=q.instanceMatrix),W==="instanceColor"&&q.instanceColor&&(fe=q.instanceColor)),fe!==void 0){const Ee=fe.normalized,Ke=fe.itemSize,at=e.get(fe);if(at===void 0)continue;const _e=at.buffer,Ye=at.type,st=at.bytesPerElement,ut=Ye===s.INT||Ye===s.UNSIGNED_INT||fe.gpuType===Cc;if(fe.isInterleavedBufferAttribute){const Ze=fe.data,dt=Ze.isInterleavedBuffer===!0?Ze.stride:Ze.itemSize,Ft=fe.offset;if(Ze.isInstancedInterleavedBuffer||Ze.isInstancedBufferAttribute){for(let ht=0;ht<te.locationSize;ht++)g(te.location+ht,Ze.meshPerAttribute);q.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let ht=0;ht<te.locationSize;ht++)m(te.location+ht);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let ht=0;ht<te.locationSize;ht++)T(te.location+ht,Ke/te.locationSize,Ye,Ee,dt*st,(Ft+Ke/te.locationSize*ht)*st,ut)}else{if(fe.isInstancedBufferAttribute){for(let Ze=0;Ze<te.locationSize;Ze++)g(te.location+Ze,fe.meshPerAttribute);q.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ze=0;Ze<te.locationSize;Ze++)m(te.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ze=0;Ze<te.locationSize;Ze++)T(te.location+Ze,Ke/te.locationSize,Ye,Ee,Ke*st,Ke/te.locationSize*Ze*st,ut)}}else if(Z!==void 0){const Ee=Z[W];if(Ee!==void 0)switch(Ee.length){case 2:s.vertexAttrib2fv(te.location,Ee);break;case 3:s.vertexAttrib3fv(te.location,Ee);break;case 4:s.vertexAttrib4fv(te.location,Ee);break;default:s.vertexAttrib1fv(te.location,Ee)}}}}M()}function N(){z();for(const q in n){const re=n[q];for(const Q in re){const B=re[Q];for(const se in B){const le=B[se];for(const Z in le)h(le[Z].object),delete le[Z];delete B[se]}}delete n[q]}}function L(q){if(n[q.id]===void 0)return;const re=n[q.id];for(const Q in re){const B=re[Q];for(const se in B){const le=B[se];for(const Z in le)h(le[Z].object),delete le[Z];delete B[se]}}delete n[q.id]}function v(q){for(const re in n){const Q=n[re];for(const B in Q){const se=Q[B];if(se[q.id]===void 0)continue;const le=se[q.id];for(const Z in le)h(le[Z].object),delete le[Z];delete se[q.id]}}}function b(q){for(const re in n){const Q=n[re],B=q.isInstancedMesh===!0?q.id:0,se=Q[B];if(se!==void 0){for(const le in se){const Z=se[le];for(const W in Z)h(Z[W].object),delete Z[W];delete se[le]}delete Q[B],Object.keys(Q).length===0&&delete n[re]}}}function z(){F(),o=!0,r!==i&&(r=i,c(r.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:z,resetDefaultState:F,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function vx(s,e,t){let n;function i(a){n=a}function r(a,c){s.drawArrays(n,a,c),t.update(c,n,1)}function o(a,c,h){h!==0&&(s.drawArraysInstanced(n,a,c,h),t.update(c,n,h))}function l(a,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Mx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==ci&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const b=v===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Jn&&v!==ii&&!b&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function a(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(At("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&At("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:w,maxSamples:N,samples:L}}function yx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Bi,l=new Ot,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,T=M*4;let w=g.clippingState||null;a.value=w,w=h(p,f,T,u);for(let N=0;N!==T;++N)w[N]=t[N];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=a.value,p!==!0||m===null){const g=u+x*4,M=f.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,w=u;T!==x;++T,w+=4)o.copy(d[T]).applyMatrix4(M,l),o.normal.toArray(m,w),m[w+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class jc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ue(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:fs});r.uniforms.tEquirect.value=t;const o=new Ut(i,r),l=t.minFilter;return t.minFilter===bi&&(t.minFilter=Rn),new fc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const vu=256,Sx=3,bx=20,cf=256,hf=16,wx=3,Tx=new G,Ex=new xt;class pa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fc(1,10,null),this._boxMesh=new Ut(new Ue(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:l=Tx}=r,a=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=a.autoClear,f=a.autoClearColor,u=a.autoClearDepth,p=a.autoClearStencil,x=e.background;a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,x===null&&(e.background=a.getClearColor(Ex));const m=new fc(n,i,h);return m.position.copy(l),m.update(a,e),a.autoClear=d,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vu,Ld(e))}_fromTexture(e,t){e.mapping===Zs||e.mapping===zr?this._setSize(e.image.length===0?vu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Mu(e,!1,!1),n=Math.log2(e)-Sx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Zs||e.mapping===zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ax(),this._integrationMaterial=Rx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/hf);for(let o=0;o<=n;o++){const l=pa.lodToRoughness(o,n);if(o>n-wx)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const a=l>0?Math.log2(t)+.5*Math.log2(6/(cf*Math.pow(l,4)))+.5:0;i.roughness.value=l,i.lodBias.value=a,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Mu(s,e,t){return new jc(s,{minFilter:bi,generateMipmaps:e,type:On,colorSpace:Qn,depthBuffer:t})}function so(s,e,t){return new Gn({name:s,uniforms:e,vertexShader:Ht.cube_vert,fragmentShader:t,side:Un,blending:fs,depthTest:!1,depthWrite:!1})}function Ax(){return so("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cf}u

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
	`)}function Rx(){return so("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hf}},`

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
	`)}function Cx(){return so("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bx}
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
	`)}function yu(){return so("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Su(){return so("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Px(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Ia||u===Na)if(e.has(f)){const p=e.get(f).texture;return l(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new jc(p.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),l(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Ia||u===Na,x=u===Zs||u===zr;if(p||x){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new pa(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return p&&M&&M.height>0||x&&M&&a(M)?(n===null&&(n=new pa(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function l(f,u){return u===Ia?f.mapping=Zs:u===Na&&(f.mapping=zr),f}function a(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Lx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xs("WebGLRenderer: "+n+" extension not supported."),i}}}function Dx(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function l(p){a(p.target)}function a(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",l),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",l),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)e.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,T=m.count>=65535?Ud:Nd,w=new T(Math.ceil(M/3)*6,1),N=w.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,z=0;b<M;b+=3){const F=v[b+0],q=v[b+1],re=v[b+2];N[z++]=F,N[z++]=q,N[z++]=q,N[z++]=re,N[z++]=re,N[z++]=F}}else{g=m.version;for(let v=0,b=0;v<M;v+=3){const z=v+0,F=v+1,q=v+2;N[b++]=z,N[b++]=F,N[b++]=F,N[b++]=q,N[b++]=q,N[b++]=z}}w.version=g;const L=r.get(p);L&&e.remove(L),r.set(p,w)}function f(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const x=i[p].deref();x!==void 0&&a(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Ix(s,e,t){let n;function i(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function a(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];t.update(x,n,1)}this.setMode=i,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Nx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:Dt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ux(s,e,t){const n=new WeakMap,i=new rn;function r(o,l,a){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(l);if(f===void 0||f.count!==d){let z=function(){v.dispose(),n.delete(l),l.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();const u=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let T=0;u===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let w=l.attributes.position.count*T,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const L=new Float32Array(w*N*4*d),v=new Dd(L,w,N,d);v.type=ii,v.needsUpdate=!0;const b=T*4;for(let F=0;F<d;F++){const q=m[F],re=g[F],Q=M[F],B=w*N*4*F;for(let se=0;se<q.count;se++){const le=se*b;u===!0&&(i.fromBufferAttribute(q,se),L[B+le+0]=i.x,L[B+le+1]=i.y,L[B+le+2]=i.z,L[B+le+3]=0),p===!0&&(i.fromBufferAttribute(re,se),L[B+le+4]=i.x,L[B+le+5]=i.y,L[B+le+6]=i.z,L[B+le+7]=0),x===!0&&(i.fromBufferAttribute(Q,se),L[B+le+8]=i.x,L[B+le+9]=i.y,L[B+le+10]=i.z,L[B+le+11]=Q.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new Be(w,N)},n.set(l,f),l.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=l.morphTargetsRelative?1:1-u;a.getUniforms().setValue(s,"morphTargetBaseInfluence",p),a.getUniforms().setValue(s,"morphTargetInfluences",c)}a.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),a.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ox(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function l(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const Fx={[bc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Tc]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[Ec]:"CUSTOM_TONE_MAPPING"};function Bx(s,e,t,n,i,r){const o=new Fn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,a=null,c=null;const h=new nn;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const d=new Qd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(h,d),u=new Ea(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,T=[],w=!1;this.setSize=function(N,L){o.setSize(N,L),l!==null&&l.setSize(N,L),a!==null&&a.setSize(N,L);for(let v=0;v<T.length;v++){const b=T[v];b.setSize&&b.setSize(N,L)}},this.setEffects=function(N){T=N,w=T.length>0&&T[0].isRenderPass===!0;const L=o.width,v=o.height;T.length>0&&l===null&&(l=new Fn(L,v,{type:On,depthBuffer:!1,stencilBuffer:!1}),a=new Fn(L,v,{type:On,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&T.some(z=>z.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new gs(L,v),r===!0&&(c.format=es,c.type=Js)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let z=0;z<T.length;z++){const F=T[z];F.setSize&&F.setSize(L,v),b&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(N,L){if(m||N.toneMapping===Vi&&T.length===0)return!1;if(M=L,L!==null){const v=L.width,b=L.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return w===!1&&N.setRenderTarget(o),g=N.toneMapping,N.toneMapping=Vi,!0},this.hasRenderPass=function(){return w},this.end=function(N,L){N.toneMapping=g,m=!0;let v=o,b=l;for(let z=0;z<T.length;z++){const F=T[z];F.enabled!==!1&&(F.render(N,b,v,L),F.needsSwap!==!1&&(v=b,b=b===l?a:l))}if(p!==N.outputColorSpace||x!==N.toneMapping){p=N.outputColorSpace,x=N.toneMapping,d.defines={},qt.getTransfer(p)===en&&(d.defines.SRGB_TRANSFER="");const z=Fx[x];z&&(d.defines[z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,N.setRenderTarget(M),N.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),h.dispose(),d.dispose()}}const uf=new Sn,df=new gs(1,1),ff=new Hd(1),pf=new Dd,mf=new Gp,gf=new zd,bu=[],wu=[],Tu=new Float32Array(16),Eu=new Float32Array(9),Au=new Float32Array(4);function ar(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=bu[i];if(r===void 0&&(r=new Float32Array(i),bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Aa(s,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function Hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function Vx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;Au.set(n),s.uniformMatrix2fv(this.addr,!1,Au),wn(t,n)}}function Wx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;Eu.set(n),s.uniformMatrix3fv(this.addr,!1,Eu),wn(t,n)}}function Xx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;Tu.set(n),s.uniformMatrix4fv(this.addr,!1,Tu),wn(t,n)}}function qx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function Kx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function Zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Jx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function Ra(s){return s.version===0&&(s.compareFunction=Rd,s.needsUpdate=!0),s}function ev(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ra(df):r=uf,t.setTexture2D(e||r,i)}function tv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mf,i)}function nv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ra(ff):r=gf,t.setTextureCube(e||r,i)}function iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pf,i)}function sv(s){switch(s){case 5126:return kx;case 35664:return zx;case 35665:return Hx;case 35666:return Gx;case 35674:return Vx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Kx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return $x;case 36295:return Qx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function rv(s,e){s.uniform1fv(this.addr,e)}function ov(s,e){const t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function av(s,e){const t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function lv(s,e){const t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function cv(s,e){const t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hv(s,e){const t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function uv(s,e){const t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dv(s,e){s.uniform1iv(this.addr,e)}function fv(s,e){s.uniform2iv(this.addr,e)}function pv(s,e){s.uniform3iv(this.addr,e)}function mv(s,e){s.uniform4iv(this.addr,e)}function gv(s,e){s.uniform1uiv(this.addr,e)}function _v(s,e){s.uniform2uiv(this.addr,e)}function xv(s,e){s.uniform3uiv(this.addr,e)}function vv(s,e){s.uniform4uiv(this.addr,e)}function Mv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ra(df):o=uf;for(let l=0;l!==i;++l)t.setTexture2D(e[l]||o,r[l])}function yv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mf,r[o])}function Sv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ra(ff):o=gf;for(let l=0;l!==i;++l)t.setTextureCube(e[l]||o,r[l])}function bv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pf,r[o])}function wv(s){switch(s){case 5126:return rv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return _v;case 36295:return xv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return bv}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sv(t.type)}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wv(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function Ru(s,e){s.seq.push(e),s.map[e.id]=e}function Rv(s,e,t){const n=s.name,i=n.length;for(dl.lastIndex=0;;){const r=dl.exec(n),o=dl.lastIndex;let l=r[1];const a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===i){Ru(t,c===void 0?new Tv(l,s,e):new Ev(l,s,e));break}else{let d=t.map[l];d===void 0&&(d=new Av(l),Ru(t,d)),t=d}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);Rv(l,a,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Cu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Cv=37297;let Pv=0;function Lv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Pu=new Ot;function Dv(s){qt._getMatrix(Pu,qt.workingColorSpace,s);const e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(qt.getTransfer(s)){case ra:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Lv(s.getShaderSource(e),l)}else return r}function Iv(s,e){const t=Dv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Nv={[bc]:"Linear",[wc]:"Reinhard",[Tc]:"Cineon",[Ma]:"ACESFilmic",[Ac]:"AgX",[Rc]:"Neutral",[Ec]:"Custom"};function Uv(s,e){const t=Nv[e];return t===void 0?(At("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bo=new G;function Ov(){qt.getLuminanceCoefficients(Bo);const s=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Bv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function Pr(s){return s!==""}function Du(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Iu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(s){return s.replace(zv,Hv)}function Hv(s,e){const t=Ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mc(t)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(s){return s.replace(Gv,Vv)}function Vv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Wv={[Dr]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Xv(s){return Wv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qv={[zr]:"ENVMAP_MODE_REFRACTION"};function Yv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kv={[gd]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[np]:"ENVMAP_BLENDING_ADD"};function Zv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Kv[s.combine]||"ENVMAP_BLENDING_NONE"}function Jv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=Xv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Yv(t),d=Zv(t),f=Fv(t),u=Bv(r),p=i.createProgram();let x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Pr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(x=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Ht.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),Ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=mc(o),o=Du(o,t),o=Iu(o,t),l=mc(l),l=Du(l,t),l=Iu(l,t),o=Nu(o),l=Nu(l),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+o,T=g+m+l,w=Cu(i,i.VERTEX_SHADER,M),N=Cu(i,i.FRAGMENT_SHADER,T);i.attachShader(p,w),i.attachShader(p,N),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(F){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p)||"",re=i.getShaderInfoLog(w)||"",Q=i.getShaderInfoLog(N)||"",B=q.trim(),se=re.trim(),le=Q.trim();let Z=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,N);else{const te=Lu(i,w,"vertex"),fe=Lu(i,N,"fragment");Dt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+te+`
`+fe)}else B!==""?At("WebGLProgram: Program Info Log:",B):(se===""||le==="")&&(W=!1);W&&(F.diagnostics={runnable:Z,programLog:B,vertexShader:{log:se,prefix:x},fragmentShader:{log:le,prefix:m}})}i.deleteShader(w),i.deleteShader(N),v=new Jo(i,p),b=kv(i,p)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(p,Cv)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=N,this}let $v=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jv(e),t.set(e,n)),n}}class jv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function e1(s){return s===ms||s===na||s===ia}function t1(s,e,t,n,i,r){const o=new zc,l=new Qv,a=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return a.add(v),v===0?"uv":`uv${v}`}function p(v,b,z,F,q,re){const Q=F.fog,B=q.geometry,se=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,le=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||se,le),W=f[v.type];let te=n.precision;v.precision!==null&&(te=n.getMaxPrecision(v.precision),te!==v.precision&&At("WebGLProgram.getParameters:",v.precision,"not supported, using",te,"instead."));const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let Ke=0;B.morphAttributes.position!==void 0&&(Ke=1),B.morphAttributes.normal!==void 0&&(Ke=2),B.morphAttributes.color!==void 0&&(Ke=3);let at,_e,Ye,st;if(W){const k=Mi[W];at=k.vertexShader,_e=k.fragmentShader}else{at=v.vertexShader,_e=v.fragmentShader;const k=l.getVertexShaderStage(v),oe=l.getFragmentShaderStage(v);l.update(v,k,oe),Ye=k.id,st=oe.id}const ut=s.getRenderTarget(),Ze=s.state.buffers.depth.getReversed(),dt=q.isInstancedMesh===!0,Ft=q.isBatchedMesh===!0,ht=!!v.map,Mt=!!v.matcap,St=!!Z,Le=St&&Z.isPMREMTexture===!0,Xe=!!v.aoMap,et=!!v.lightMap,rt=!!v.bumpMap&&v.wireframe===!1,nt=!!v.normalMap,ot=!!v.displacementMap,lt=!!v.emissiveMap,Ae=!!v.metalnessMap,ze=!!v.roughnessMap,ke=v.anisotropy>0,I=v.clearcoat>0,je=v.diffuseRoughness>0,$e=v.dispersion>0,qe=v.retroreflectivity>0,Ie=v.iridescence>0,tt=v.sheen>0,Ce=v.transmission>0,he=ke&&!!v.anisotropyMap,D=I&&!!v.clearcoatMap,S=I&&!!v.clearcoatNormalMap,$=I&&!!v.clearcoatRoughnessMap,we=je&&!!v.diffuseRoughnessMap,ge=Ie&&!!v.iridescenceMap,Fe=Ie&&!!v.iridescenceThicknessMap,He=tt&&!!v.sheenColorMap,ye=tt&&!!v.sheenRoughnessMap,Te=!!v.specularMap,Ne=!!v.specularColorMap,Y=!!v.specularIntensityMap,ve=Ce&&!!v.transmissionMap,xe=Ce&&!!v.thicknessMap,Ge=!!v.gradientMap,ee=!!v.alphaMap,K=v.alphaTest>0,me=!!v.alphaHash,Oe=!!v.extensions;let _=Vi;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(_=s.toneMapping);const H=Le?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,X={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:_e,defines:v.defines,customVertexShaderID:Ye,customFragmentShaderID:st,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:te,batching:Ft,batchingColor:Ft&&q._colorsTexture!==null,instancing:dt,instancingColor:dt&&q.instanceColor!==null,instancingMorph:dt&&q.morphTexture!==null,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ht,matcap:Mt,envMap:St,envMapMode:St&&Z.mapping,envMapPMREM:Le,envMapMaxLod:Le?H.length-1:null,envMapSize:Le?H[0].width:null,aoMap:Xe,lightMap:et,bumpMap:rt,normalMap:nt,displacementMap:ot,emissiveMap:lt,normalMapObjectSpace:nt&&v.normalMapType===hp,normalMapTangentSpace:nt&&v.normalMapType===Wr,packedNormalMap:nt&&v.normalMapType===Wr&&e1(v.normalMap.format),metalnessMap:Ae,roughnessMap:ze,anisotropy:ke,anisotropyMap:he,clearcoat:I,clearcoatMap:D,clearcoatNormalMap:S,clearcoatRoughnessMap:$,diffuseRoughness:je,diffuseRoughnessMap:we,dispersion:$e,retroreflection:qe,iridescence:Ie,iridescenceMap:ge,iridescenceThicknessMap:Fe,sheen:tt,sheenColorMap:He,sheenRoughnessMap:ye,specularMap:Te,specularColorMap:Ne,specularIntensityMap:Y,transmission:Ce,transmissionMap:ve,thicknessMap:xe,gradientMap:Ge,opaque:v.transparent===!1&&v.blending===Ws&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:K,alphaHash:me,combine:v.combine,mapUv:ht&&u(v.map.channel),aoMapUv:Xe&&u(v.aoMap.channel),lightMapUv:et&&u(v.lightMap.channel),bumpMapUv:rt&&u(v.bumpMap.channel),normalMapUv:nt&&u(v.normalMap.channel),displacementMapUv:ot&&u(v.displacementMap.channel),emissiveMapUv:lt&&u(v.emissiveMap.channel),metalnessMapUv:Ae&&u(v.metalnessMap.channel),roughnessMapUv:ze&&u(v.roughnessMap.channel),anisotropyMapUv:he&&u(v.anisotropyMap.channel),clearcoatMapUv:D&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&u(v.sheenRoughnessMap.channel),specularMapUv:Te&&u(v.specularMap.channel),specularColorMapUv:Ne&&u(v.specularColorMap.channel),specularIntensityMapUv:Y&&u(v.specularIntensityMap.channel),transmissionMapUv:ve&&u(v.transmissionMap.channel),thicknessMapUv:xe&&u(v.thicknessMap.channel),alphaMapUv:ee&&u(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(nt||ke),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!B.attributes.uv&&(ht||ee),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ze,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ke,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:re.filter(k=>k.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:_,decodeVideoTexture:ht&&v.map.isVideoTexture===!0&&qt.getTransfer(v.map.colorSpace)===en,decodeVideoTextureEmissive:lt&&v.emissiveMap.isVideoTexture===!0&&qt.getTransfer(v.emissiveMap.colorSpace)===en,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ln,flipSided:v.side===Un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Oe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&v.extensions.multiDraw===!0||Ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return X.vertexUv1s=a.has(1),X.vertexUv2s=a.has(2),X.vertexUv3s=a.has(3),a.clear(),X}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)b.push(z),b.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const b=f[v.type];let z;if(b){const F=Mi[b];z=eo.clone(F.uniforms)}else z=v.uniforms;return z}function T(v,b){let z=h.get(b);return z!==void 0?++z.usedTimes:(z=new Jv(s,b,v,i),c.push(z),h.set(b,z)),z}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function N(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:T,releaseProgram:w,releaseShaderCache:N,programs:c,dispose:L}}function n1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function i(o,l,a){s.get(o)[l]=a}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function i1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ou(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function l(f,u,p,x,m,g){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[e]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=g),e++,M}function a(f,u,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const T=l(f,u,p,x,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):t.push(T)}function c(f,u,p,x,m,g){const M=l(f,u,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(f,u){t.length>1&&t.sort(f||i1),n.length>1&&n.sort(u||Ou),i.length>1&&i.sort(u||Ou)}function d(){for(let f=e,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:h}}function s1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Fu,s.set(n,[o])):i>=r.length?(o=new Fu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new xt};break;case"SpotLight":t={position:new G,direction:new G,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function o1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let a1=0;function l1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function c1(s){const e=new r1,t=o1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,r=new Lt,o=new Lt;function l(c){let h=0,d=0,f=0;for(let re=0;re<9;re++)n.probe[re].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,M=0,T=0,w=0,N=0,L=0,v=0,b=0,z=0,F=0;c.sort(l1);for(let re=0,Q=c.length;re<Q;re++){const B=c[re],se=B.color,le=B.intensity,Z=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ms?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=se.r*le,d+=se.g*le,f+=se.b*le;else if(B.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(B.sh.coefficients[te],le);F++}else if(B.isSunLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const fe=B.shadow,Ee=t.get(B);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),n.sunShadow[p]=Ee,n.sunShadowMap[p]=W;const Ke=fe.getViewportCount();for(let at=0;at<Ke;at++)n.sunShadowMatrix[x+at]=fe.getMatrix(at),n.sunShadowCascade[x+at]=fe._cascadeData[at];x+=Ke,p++}n.sun[u]=te,u++}else if(B.isDirectionalLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const fe=B.shadow,Ee=t.get(B);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize=fe.mapSize,n.directionalShadow[m]=Ee,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=B.shadow.matrix,N++}n.directional[m]=te,m++}else if(B.isSpotLight){const te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(se).multiplyScalar(le),te.distance=Z,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,n.spot[M]=te;const fe=B.shadow;if(B.map&&(n.spotLightMap[b]=B.map,b++,fe.updateMatrices(B),B.castShadow&&z++),n.spotLightMatrix[M]=fe.matrix,B.castShadow){const Ee=t.get(B);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize=fe.mapSize,n.spotShadow[M]=Ee,n.spotShadowMap[M]=W,v++}M++}else if(B.isRectAreaLight){const te=e.get(B);te.color.copy(se).multiplyScalar(le),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),n.rectArea[T]=te,T++}else if(B.isPointLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),te.distance=B.distance,te.decay=B.decay,B.castShadow){const fe=B.shadow,Ee=t.get(B);Ee.shadowIntensity=fe.intensity,Ee.shadowBias=fe.bias,Ee.shadowNormalBias=fe.normalBias,Ee.shadowRadius=fe.radius,Ee.shadowMapSize=fe.mapSize,Ee.shadowCameraNear=fe.camera.near,Ee.shadowCameraFar=fe.camera.far,n.pointShadow[g]=Ee,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=B.shadow.matrix,L++}n.point[g]=te,g++}else if(B.isHemisphereLight){const te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(le),te.groundColor.copy(B.groundColor).multiplyScalar(le),n.hemi[w]=te,w++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const q=n.hash;(q.sunLength!==u||q.directionalLength!==m||q.pointLength!==g||q.spotLength!==M||q.rectAreaLength!==T||q.hemiLength!==w||q.numSunShadows!==p||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==v||q.numSpotMaps!==b||q.numLightProbes!==F)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=g,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.directionalShadowMatrix.length=N,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-z,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=F,q.sunLength=u,q.directionalLength=m,q.pointLength=g,q.spotLength=M,q.rectAreaLength=T,q.hemiLength=w,q.numSunShadows=p,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=v,q.numSpotMaps=b,q.numLightProbes=F,n.version=a1++)}function a(c,h){let d=0,f=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const w=c[M];if(w.isSunLight){const N=n.sun[d];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(g),d++}else if(w.isDirectionalLight){const N=n.directional[f];N.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(i),N.direction.transformDirection(g),f++}else if(w.isSpotLight){const N=n.spot[p];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(i),N.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const N=n.rectArea[x];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const N=n.point[u];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){const N=n.hemi[m];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(g),m++}}}return{setup:l,setupView:a,state:n}}function Bu(s){const e=new c1(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function l(d){n.push(d)}function a(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:l}}function h1(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let l;return o===void 0?(l=new Bu(s),e.set(i,[l])):r>=o.length?(l=new Bu(s),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
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
}`,f1=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],p1=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],ku=new Lt,yr=new G,fl=new G;function m1(s,e,t){let n=new Zr;const i=new Be,r=new Be,o=new rn,l=new Z0,a=new J0,c={},h=t.maxTextureSize,d={[ss]:Un,[Un]:ss,[ln]:ln},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:u1,fragmentShader:d1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new nn;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let g=this.type;this.render=function(L,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;this.type===Of&&(At("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);const z=s.getRenderTarget(),F=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),re=s.state;re.setBlending(fs),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Q=g!==this.type;Q&&v.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(se=>se.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,se=L.length;B<se;B++){const le=L[B],Z=le.shadow;if(Z===void 0){At("WebGLShadowMap:",le,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const W=Z.getFrameExtents();i.multiply(W),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,Z.mapSize.y=r.y));const te=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=te,Z.map===null||Q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Tr){if(le.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Fn(i.x,i.y,{format:ms,type:On,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),Z.map.texture.name=le.name+".shadowMap",Z.map.depthTexture=new gs(i.x,i.y,ii),Z.map.depthTexture.name=le.name+".shadowMapDepth",Z.map.depthTexture.format=rs,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=vn,Z.map.depthTexture.magFilter=vn}else le.isPointLight?(Z.map=new jc(i.x),Z.map.depthTexture=new Hd(i.x,ui)):(Z.map=new Fn(i.x,i.y),Z.map.depthTexture=new gs(i.x,i.y,ui)),Z.map.depthTexture.name=le.name+".shadowMap",Z.map.depthTexture.format=rs,this.type===Dr?(Z.map.depthTexture.compareFunction=te?Ad:Ed,Z.map.depthTexture.minFilter=Rn,Z.map.depthTexture.magFilter=Rn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=vn,Z.map.depthTexture.magFilter=vn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);const fe=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();le.isPointLight!==!0&&Z.updateMatrices(le,b);const Ee=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:b.layers;for(let Ke=0;Ke<fe;Ke++){const at=Z.getCamera(Ke);if(le.isPointLight){const _e=Z.camera,Ye=Z.matrix,st=le.distance||_e.far;st!==_e.far&&(_e.far=st,_e.updateProjectionMatrix()),yr.setFromMatrixPosition(le.matrixWorld),_e.position.copy(yr),fl.copy(_e.position),fl.add(f1[Ke]),_e.up.copy(p1[Ke]),_e.lookAt(fl),_e.updateMatrixWorld(),Ye.makeTranslation(-yr.x,-yr.y,-yr.z),ku.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ku,_e.coordinateSystem,_e.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,Ke),s.clear();else{Ke===0&&(s.setRenderTarget(Z.map),s.clear());const _e=Z.getViewport(Ke);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),re.viewport(o)}n=Z.getFrustum(Ke),w(v,b,at,le,Ee,this.type)}Z.isPointLightShadow!==!0&&this.type===Tr&&M(Z,b),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(z,F,q)};function M(L,v){const b=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null?L.mapPass=new Fn(i.x,i.y,{format:ms,type:On}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(v,null,b,f,x,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value.set(L.map.width,L.map.height),u.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(v,null,b,u,x,null)}function T(L,v,b,z){let F=null;const q=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(q!==void 0)F=q;else if(F=b.isPointLight===!0?a:l,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const re=F.uuid,Q=v.uuid;let B=c[re];B===void 0&&(B={},c[re]=B);let se=B[Q];se===void 0&&(se=F.clone(),B[Q]=se,v.addEventListener("dispose",N)),F=se}if(F.visible=v.visible,F.wireframe=v.wireframe,z===Tr?F.side=v.shadowSide!==null?v.shadowSide:v.side:F.side=v.shadowSide!==null?v.shadowSide:d[v.side],F.alphaMap=v.alphaMap,F.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,F.map=v.map,F.clipShadows=v.clipShadows,F.clippingPlanes=v.clippingPlanes,F.clipIntersection=v.clipIntersection,F.displacementMap=v.displacementMap,F.displacementScale=v.displacementScale,F.displacementBias=v.displacementBias,F.wireframeLinewidth=v.wireframeLinewidth,F.linewidth=v.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const re=s.properties.get(F);re.light=b}return F}function w(L,v,b,z,F,q){if(L.visible===!1)return;if(L.layers.test(F)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Tr)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const B=e.update(L),se=L.material;if(Array.isArray(se)){const le=B.groups;for(let Z=0,W=le.length;Z<W;Z++){const te=le[Z],fe=se[te.materialIndex];if(fe&&fe.visible){const Ee=T(L,fe,z,q);L.onBeforeShadow(s,L,v,b,B,Ee,te),s.renderBufferDirect(b,null,B,Ee,L,te),L.onAfterShadow(s,L,v,b,B,Ee,te)}}}else if(se.visible){const le=T(L,se,z,q);L.onBeforeShadow(s,L,v,b,B,le,null),s.renderBufferDirect(b,null,B,le,L,null),L.onAfterShadow(s,L,v,b,B,le,null)}}const Q=L.children;for(let B=0,se=Q.length;B<se;B++)w(Q[B],v,b,z,F,q)}function N(L){L.target.removeEventListener("dispose",N);for(const b in c){const z=c[b],F=L.target.uuid;F in z&&(z[F].dispose(),delete z[F])}}}function g1(s,e){function t(){let Y=!1;const ve=new rn;let xe=null;const Ge=new rn(0,0,0,0);return{setMask:function(ee){xe!==ee&&!Y&&(s.colorMask(ee,ee,ee,ee),xe=ee)},setLocked:function(ee){Y=ee},setClear:function(ee,K,me,Oe,_){_===!0&&(ee*=Oe,K*=Oe,me*=Oe),ve.set(ee,K,me,Oe),Ge.equals(ve)===!1&&(s.clearColor(ee,K,me,Oe),Ge.copy(ve))},reset:function(){Y=!1,xe=null,Ge.set(-1,0,0,0)}}}function n(){let Y=!1,ve=!1,xe=null,Ge=null,ee=null;return{setReversed:function(K){if(ve!==K){const me=e.get("EXT_clip_control");K?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ve=K;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return ve},setTest:function(K){K?Ze(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(K){xe!==K&&!Y&&(s.depthMask(K),xe=K)},setFunc:function(K){if(ve&&(K=yp[K]),Ge!==K){switch(K){case bl:s.depthFunc(s.NEVER);break;case wl:s.depthFunc(s.ALWAYS);break;case Tl:s.depthFunc(s.LESS);break;case kr:s.depthFunc(s.LEQUAL);break;case El:s.depthFunc(s.EQUAL);break;case Al:s.depthFunc(s.GEQUAL);break;case Rl:s.depthFunc(s.GREATER);break;case Cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=K}},setLocked:function(K){Y=K},setClear:function(K){ee!==K&&(ee=K,ve&&(K=1-K),s.clearDepth(K))},reset:function(){Y=!1,xe=null,Ge=null,ee=null,ve=!1}}}function i(){let Y=!1,ve=null,xe=null,Ge=null,ee=null,K=null,me=null,Oe=null,_=null;return{setTest:function(H){Y||(H?Ze(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(H){ve!==H&&!Y&&(s.stencilMask(H),ve=H)},setFunc:function(H,X,k){(xe!==H||Ge!==X||ee!==k)&&(s.stencilFunc(H,X,k),xe=H,Ge=X,ee=k)},setOp:function(H,X,k){(K!==H||me!==X||Oe!==k)&&(s.stencilOp(H,X,k),K=H,me=X,Oe=k)},setLocked:function(H){Y=H},setClear:function(H){_!==H&&(s.clearStencil(H),_=H)},reset:function(){Y=!1,ve=null,xe=null,Ge=null,ee=null,K=null,me=null,Oe=null,_=null}}}const r=new t,o=new n,l=new i;let a={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,T=null,w=null,N=null,L=null,v=null,b=new xt(0,0,0),z=0,F=!1,q=null,re=null,Q=null,B=null,se=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=W>=1):te.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=W>=2);let fe=null,Ee={};const Ke=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),_e=new rn().fromArray(Ke),Ye=new rn().fromArray(at);function st(Y,ve,xe,Ge){const ee=new Uint8Array(4),K=s.createTexture();s.bindTexture(Y,K),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<xe;me++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(ve+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return K}const ut={};ut[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Ze(s.DEPTH_TEST),o.setFunc(kr),rt(!1),nt(ph),Ze(s.CULL_FACE),Xe(fs);function Ze(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function dt(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function Ft(Y,ve){return f[Y]!==ve?(s.bindFramebuffer(Y,ve),f[Y]=ve,Y===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ve),Y===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function ht(Y,ve){let xe=p,Ge=!1;if(Y){xe=u.get(ve),xe===void 0&&(xe=[],u.set(ve,xe));const ee=Y.textures;if(xe.length!==ee.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let K=0,me=ee.length;K<me;K++)xe[K]=s.COLOR_ATTACHMENT0+K;xe.length=ee.length,Ge=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(xe)}function Mt(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}const St={[ks]:s.FUNC_ADD,[Bf]:s.FUNC_SUBTRACT,[kf]:s.FUNC_REVERSE_SUBTRACT};St[zf]=s.MIN,St[Hf]=s.MAX;const Le={[Gf]:s.ZERO,[Vf]:s.ONE,[Wf]:s.SRC_COLOR,[pd]:s.SRC_ALPHA,[Jf]:s.SRC_ALPHA_SATURATE,[Kf]:s.DST_COLOR,[qf]:s.DST_ALPHA,[Xf]:s.ONE_MINUS_SRC_COLOR,[md]:s.ONE_MINUS_SRC_ALPHA,[Zf]:s.ONE_MINUS_DST_COLOR,[Yf]:s.ONE_MINUS_DST_ALPHA,[$f]:s.CONSTANT_COLOR,[Qf]:s.ONE_MINUS_CONSTANT_COLOR,[jf]:s.CONSTANT_ALPHA,[ep]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(Y,ve,xe,Ge,ee,K,me,Oe,_,H){if(Y===fs){m===!0&&(dt(s.BLEND),m=!1);return}if(m===!1&&(Ze(s.BLEND),m=!0),Y!==Ff){if(Y!==g||H!==F){if((M!==ks||N!==ks)&&(s.blendEquation(s.FUNC_ADD),M=ks,N=ks),H)switch(Y){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yi:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case mh:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",Y);break}T=null,w=null,L=null,v=null,b.set(0,0,0),z=0,g=Y,F=H}return}ee=ee||ve,K=K||xe,me=me||Ge,(ve!==M||ee!==N)&&(s.blendEquationSeparate(St[ve],St[ee]),M=ve,N=ee),(xe!==T||Ge!==w||K!==L||me!==v)&&(s.blendFuncSeparate(Le[xe],Le[Ge],Le[K],Le[me]),T=xe,w=Ge,L=K,v=me),(Oe.equals(b)===!1||_!==z)&&(s.blendColor(Oe.r,Oe.g,Oe.b,_),b.copy(Oe),z=_),g=Y,F=!1}function et(Y,ve){Y.side===ln?dt(s.CULL_FACE):Ze(s.CULL_FACE);let xe=Y.side===Un;ve&&(xe=!xe),rt(xe),Y.blending===Ws&&Y.transparent===!1?Xe(fs):Xe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Ge=Y.stencilWrite;l.setTest(Ge),Ge&&(l.setMask(Y.stencilWriteMask),l.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),l.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),lt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ze(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(Y){q!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),q=Y)}function nt(Y){Y!==Nf?(Ze(s.CULL_FACE),Y!==re&&(Y===ph?s.cullFace(s.BACK):Y===Uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),re=Y}function ot(Y){Y!==Q&&(Z&&s.lineWidth(Y),Q=Y)}function lt(Y,ve,xe){Y?(Ze(s.POLYGON_OFFSET_FILL),(B!==ve||se!==xe)&&(B=ve,se=xe,o.getReversed()&&(ve=-ve,xe=-xe),s.polygonOffset(ve,xe))):dt(s.POLYGON_OFFSET_FILL)}function Ae(Y){Y?Ze(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function ze(Y){Y===void 0&&(Y=s.TEXTURE0+le-1),fe!==Y&&(s.activeTexture(Y),fe=Y)}function ke(Y,ve,xe){xe===void 0&&(fe===null?xe=s.TEXTURE0+le-1:xe=fe);let Ge=Ee[xe];Ge===void 0&&(Ge={type:void 0,texture:void 0},Ee[xe]=Ge),(Ge.type!==Y||Ge.texture!==ve)&&(fe!==xe&&(s.activeTexture(xe),fe=xe),s.bindTexture(Y,ve||ut[Y]),Ge.type=Y,Ge.texture=ve)}function I(){const Y=Ee[fe];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function je(){try{s.compressedTexImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function $e(){try{s.compressedTexImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function qe(){try{s.texSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function tt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function he(){try{s.texStorage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function D(){try{s.texStorage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function S(){try{s.texImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function $(){try{s.texImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function we(Y){return d[Y]!==void 0?d[Y]:s.getParameter(Y)}function ge(Y,ve){d[Y]!==ve&&(s.pixelStorei(Y,ve),d[Y]=ve)}function Fe(Y){_e.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function He(Y){Ye.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Ye.copy(Y))}function ye(Y,ve){let xe=c.get(ve);xe===void 0&&(xe=new WeakMap,c.set(ve,xe));let Ge=xe.get(Y);Ge===void 0&&(Ge=s.getUniformBlockIndex(ve,Y.name),s.uniformBlockBinding(ve,Ge,Ge),xe.set(Y,Ge))}function Te(Y,ve,xe){const ee=c.get(ve).get(Y);a[ee]!==xe&&(s.bindBufferBase(s.UNIFORM_BUFFER,ee,xe),a[ee]=xe)}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},fe=null,Ee={},f={},a={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,T=null,w=null,N=null,L=null,v=null,b=new xt(0,0,0),z=0,F=!1,q=null,re=null,Q=null,B=null,se=null,_e.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:Ze,disable:dt,bindFramebuffer:Ft,drawBuffers:ht,useProgram:Mt,setBlending:Xe,setMaterial:et,setFlipSided:rt,setCullFace:nt,setLineWidth:ot,setPolygonOffset:lt,setScissorTest:Ae,activeTexture:ze,bindTexture:ke,unbindTexture:I,compressedTexImage2D:je,compressedTexImage3D:$e,texImage2D:S,texImage3D:$,pixelStorei:ge,getParameter:we,updateUBOMapping:ye,uniformBlockBinding:Te,texStorage2D:he,texStorage3D:D,texSubImage2D:qe,texSubImage3D:Ie,compressedTexSubImage2D:tt,compressedTexSubImage3D:Ce,scissor:Fe,viewport:He,reset:Ne}}function _1(s,e,t,n,i,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return m?new OffscreenCanvas(D,S):qr("canvas")}function M(D,S,$){let we=1;const ge=he(D);if((ge.width>$||ge.height>$)&&(we=$/Math.max(ge.width,ge.height)),we<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Fe=Math.floor(we*ge.width),He=Math.floor(we*ge.height);f===void 0&&(f=g(Fe,He));const ye=S?g(Fe,He):f;return ye.width=Fe,ye.height=He,ye.getContext("2d").drawImage(D,0,0,Fe,He),At("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Fe+"x"+He+")."),ye}else return"data"in D&&At("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function T(D){return D.generateMipmaps}function w(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,S,$,we,ge,Fe=!1){if(D!==null){if(s[D]!==void 0)return s[D];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let He;we&&(He=e.get("EXT_texture_norm16"),He||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=S;if(S===s.RED&&($===s.FLOAT&&(ye=s.R32F),$===s.HALF_FLOAT&&(ye=s.R16F),$===s.UNSIGNED_BYTE&&(ye=s.R8),$===s.UNSIGNED_SHORT&&He&&(ye=He.R16_EXT),$===s.SHORT&&He&&(ye=He.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ye=s.R8UI),$===s.UNSIGNED_SHORT&&(ye=s.R16UI),$===s.UNSIGNED_INT&&(ye=s.R32UI),$===s.BYTE&&(ye=s.R8I),$===s.SHORT&&(ye=s.R16I),$===s.INT&&(ye=s.R32I)),S===s.RG&&($===s.FLOAT&&(ye=s.RG32F),$===s.HALF_FLOAT&&(ye=s.RG16F),$===s.UNSIGNED_BYTE&&(ye=s.RG8),$===s.UNSIGNED_SHORT&&He&&(ye=He.RG16_EXT),$===s.SHORT&&He&&(ye=He.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ye=s.RG8UI),$===s.UNSIGNED_SHORT&&(ye=s.RG16UI),$===s.UNSIGNED_INT&&(ye=s.RG32UI),$===s.BYTE&&(ye=s.RG8I),$===s.SHORT&&(ye=s.RG16I),$===s.INT&&(ye=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),$===s.UNSIGNED_INT&&(ye=s.RGB32UI),$===s.BYTE&&(ye=s.RGB8I),$===s.SHORT&&(ye=s.RGB16I),$===s.INT&&(ye=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),$===s.UNSIGNED_INT&&(ye=s.RGBA32UI),$===s.BYTE&&(ye=s.RGBA8I),$===s.SHORT&&(ye=s.RGBA16I),$===s.INT&&(ye=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&He&&(ye=He.RGB16_EXT),$===s.SHORT&&He&&(ye=He.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ye=s.R11F_G11F_B10F)),S===s.RGBA){const Te=Fe?ra:qt.getTransfer(ge);$===s.FLOAT&&(ye=s.RGBA32F),$===s.HALF_FLOAT&&(ye=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ye=Te===en?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&He&&(ye=He.RGBA16_EXT),$===s.SHORT&&He&&(ye=He.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function v(D,S){let $;return D?S===null||S===ui||S===Js?$=s.DEPTH24_STENCIL8:S===ii?$=s.DEPTH32F_STENCIL8:S===Hr&&($=s.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ui||S===Js?$=s.DEPTH_COMPONENT24:S===ii?$=s.DEPTH_COMPONENT32F:S===Hr&&($=s.DEPTH_COMPONENT16),$}function b(D,S){return T(D)===!0||D.isFramebufferTexture&&D.minFilter!==vn&&D.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function z(D){const S=new WeakRef(D);n.get(D).__ref=S,p.add(S),x.register(D,S,S)}function F(D){const S=n.get(D).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function q(D){Q(D.target)}function re(D){B(D.target)}function Q(D){D.removeEventListener("dispose",q),F(D),le(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&d.delete(D)}function B(D){D.removeEventListener("dispose",re),F(D),W(D)}function se(){for(const D of p){const S=D.deref();S!==void 0&&(S.isRenderTarget===!0?B(S):Q(S))}p.clear(),d.clear()}function le(D){const S=n.get(D);if(S.__webglInit===void 0)return;const $=D.source,we=u.get($);if(we){const ge=we[S.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Z(D),Object.keys(we).length===0&&u.delete($)}n.remove(D)}function Z(D){const S=n.get(D);s.deleteTexture(S.__webglTexture);const $=D.source,we=u.get($);delete we[S.__cacheKey],o.memory.textures--}function W(D){const S=n.get(D);S.__depthDisposeCallback&&S.__depthDisposeCallback();const $=D.depthTexture;if($&&$.renderTarget===D&&Q($),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(S.__webglFramebuffer[ge]))for(let Fe=0;Fe<S.__webglFramebuffer[ge].length;Fe++)s.deleteFramebuffer(S.__webglFramebuffer[ge][Fe]);else s.deleteFramebuffer(S.__webglFramebuffer[ge]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ge])}else{if(Array.isArray(S.__webglFramebuffer))for(let ge=0;ge<S.__webglFramebuffer.length;ge++)s.deleteFramebuffer(S.__webglFramebuffer[ge]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ge=0;ge<S.__webglColorRenderbuffer.length;ge++)S.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ge]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const we=D.textures;for(let ge=0,Fe=we.length;ge<Fe;ge++){const He=n.get(we[ge]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),o.memory.textures--),n.remove(we[ge])}n.remove(D)}let te=0;function fe(){te=0}function Ee(){return te}function Ke(D){te=D}function at(){const D=te;return D>=i.maxTextures&&At("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),te+=1,D}function _e(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.mipmapsAutoUpdate),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function Ye(D,S){const $=n.get(D);if(D.isVideoTexture&&tt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const we=D.image;if(we===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{et($,D,S);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function st(D,S){const $=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){et($,D,S);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function ut(D,S){const $=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){et($,D,S);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function Ze(D,S){const $=n.get(D);if(D.version>0&&$.__version!==D.version){rt($,D,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const dt={[si]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[ta]:s.MIRRORED_REPEAT},Ft={[vn]:s.NEAREST,[xd]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Wo]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},ht={[dp]:s.NEVER,[Rd]:s.ALWAYS,[fp]:s.LESS,[Ed]:s.LEQUAL,[pp]:s.EQUAL,[Ad]:s.GEQUAL,[mp]:s.GREATER,[gp]:s.NOTEQUAL};function Mt(D,S){if(S.type===ii&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Rn||S.magFilter===Wo||S.magFilter===Er||S.magFilter===bi||S.minFilter===Rn||S.minFilter===Wo||S.minFilter===Er||S.minFilter===bi)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,dt[S.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,dt[S.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,dt[S.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Ft[S.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Ft[S.minFilter]),S.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==Er&&S.minFilter!==bi||S.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function St(D,S){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",q),z(S));const we=S.source;let ge=u.get(we);ge===void 0&&(ge={},u.set(we,ge));const Fe=_e(S);if(Fe!==D.__cacheKey){ge[Fe]===void 0&&(ge[Fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ge[Fe].usedTimes++;const He=ge[D.__cacheKey];He!==void 0&&(ge[D.__cacheKey].usedTimes--,He.usedTimes===0&&Z(S)),D.__cacheKey=Fe,D.__webglTexture=ge[Fe].texture}return $}function Le(D,S,$){return Math.floor(Math.floor(D/$)/S)}function Xe(D,S,$,we){const Fe=D.updateRanges;if(Fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,we,S.data);else{Fe.sort((Y,ve)=>Y.start-ve.start);let He=0;for(let Y=1;Y<Fe.length;Y++){const ve=Fe[He],xe=Fe[Y],Ge=ve.start+ve.count,ee=Le(xe.start,S.width,4),K=Le(ve.start,S.width,4);xe.start<=Ge+1&&ee===K&&Le(xe.start+xe.count-1,S.width,4)===ee?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++He,Fe[He]=xe)}Fe.length=He+1;const ye=t.getParameter(s.UNPACK_ROW_LENGTH),Te=t.getParameter(s.UNPACK_SKIP_PIXELS),Ne=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Y=0,ve=Fe.length;Y<ve;Y++){const xe=Fe[Y],Ge=Math.floor(xe.start/4),ee=Math.ceil(xe.count/4),K=Ge%S.width,me=Math.floor(Ge/S.width),Oe=ee,_=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,K),t.pixelStorei(s.UNPACK_SKIP_ROWS,me),t.texSubImage2D(s.TEXTURE_2D,0,K,me,Oe,_,$,we,S.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ye),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function et(D,S,$){let we=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(we=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(we=s.TEXTURE_3D);const ge=St(D,S),Fe=S.source;t.bindTexture(we,D.__webglTexture,s.TEXTURE0+$);const He=n.get(Fe);if(Fe.version!==He.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const _=qt.getPrimaries(qt.workingColorSpace),H=S.colorSpace===ki?null:qt.getPrimaries(S.colorSpace),X=S.colorSpace===ki||_===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let Te=M(S.image,!1,i.maxTextureSize);Te=Ce(S,Te);const Ne=r.convert(S.format,S.colorSpace),Y=r.convert(S.type);let ve=L(S.internalFormat,Ne,Y,S.normalized,S.colorSpace,S.isVideoTexture);Mt(we,S);let xe;const Ge=S.mipmaps,ee=S.isVideoTexture!==!0,K=He.__version===void 0||ge===!0,me=Fe.dataReady,Oe=b(S,Te);if(S.isDepthTexture)ve=v(S.format===es,S.type),K&&(ee?t.texStorage2D(s.TEXTURE_2D,1,ve,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,ve,Te.width,Te.height,0,Ne,Y,null));else if(S.isDataTexture)if(Ge.length>0){ee&&K&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,Ge[0].width,Ge[0].height);for(let _=0,H=Ge.length;_<H;_++)xe=Ge[_],ee?me&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,xe.width,xe.height,Ne,Y,xe.data):t.texImage2D(s.TEXTURE_2D,_,ve,xe.width,xe.height,0,Ne,Y,xe.data);S.generateMipmaps=!1}else ee?(K&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,Te.width,Te.height),me&&Xe(S,Te,Ne,Y)):t.texImage2D(s.TEXTURE_2D,0,ve,Te.width,Te.height,0,Ne,Y,Te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ee&&K&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ve,Ge[0].width,Ge[0].height,Te.depth);for(let _=0,H=Ge.length;_<H;_++)if(xe=Ge[_],S.format!==ci)if(Ne!==null)if(ee){if(me)if(S.layerUpdates.size>0){const X=xu(xe.width,xe.height,S.format,S.type);for(const k of S.layerUpdates){const oe=xe.data.subarray(k*X/xe.data.BYTES_PER_ELEMENT,(k+1)*X/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,k,xe.width,xe.height,1,Ne,oe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,xe.width,xe.height,Te.depth,Ne,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_,ve,xe.width,xe.height,Te.depth,0,xe.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_,0,0,0,xe.width,xe.height,Te.depth,Ne,Y,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_,ve,xe.width,xe.height,Te.depth,0,Ne,Y,xe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ee&&K&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,Ge[0].width,Ge[0].height);for(let _=0,H=Ge.length;_<H;_++)xe=Ge[_],S.format!==ci?Ne!==null?ee?me&&t.compressedTexSubImage2D(s.TEXTURE_2D,_,0,0,xe.width,xe.height,Ne,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,_,ve,xe.width,xe.height,0,xe.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?me&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,xe.width,xe.height,Ne,Y,xe.data):t.texImage2D(s.TEXTURE_2D,_,ve,xe.width,xe.height,0,Ne,Y,xe.data)}else if(S.isDataArrayTexture)if(ee){if(K&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ve,Te.width,Te.height,Te.depth),me)if(S.layerUpdates.size>0){const _=xu(Te.width,Te.height,S.format,S.type);for(const H of S.layerUpdates){const X=Te.data.subarray(H*_/Te.data.BYTES_PER_ELEMENT,(H+1)*_/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,H,Te.width,Te.height,1,Ne,Y,X)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ne,Y,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,Te.width,Te.height,Te.depth,0,Ne,Y,Te.data);else if(S.isData3DTexture)ee?(K&&t.texStorage3D(s.TEXTURE_3D,Oe,ve,Te.width,Te.height,Te.depth),me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ne,Y,Te.data)):t.texImage3D(s.TEXTURE_3D,0,ve,Te.width,Te.height,Te.depth,0,Ne,Y,Te.data);else if(S.isFramebufferTexture){if(K)if(ee)t.texStorage2D(s.TEXTURE_2D,Oe,ve,Te.width,Te.height);else{let _=Te.width,H=Te.height;for(let X=0;X<Oe;X++)t.texImage2D(s.TEXTURE_2D,X,ve,_,H,0,Ne,Y,null),_>>=1,H>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const _=s.canvas;if(_.hasAttribute("layoutsubtree")||_.setAttribute("layoutsubtree","true"),Te.parentNode!==_){_.appendChild(Te),d.add(S),_.onpaint=H=>{const X=H.changedElements;for(const k of d)X.includes(k.image)&&(k.needsUpdate=!0)},_.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Te);else{const X=s.RGBA,k=s.RGBA,oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,X,k,oe,Te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(ee&&K){const _=he(Ge[0]);t.texStorage2D(s.TEXTURE_2D,Oe,ve,_.width,_.height)}for(let _=0,H=Ge.length;_<H;_++)xe=Ge[_],ee?me&&t.texSubImage2D(s.TEXTURE_2D,_,0,0,Ne,Y,xe):t.texImage2D(s.TEXTURE_2D,_,ve,Ne,Y,xe);S.generateMipmaps=!1}else if(ee){if(K){const _=he(Te);t.texStorage2D(s.TEXTURE_2D,Oe,ve,_.width,_.height)}me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,Y,Te)}else t.texImage2D(s.TEXTURE_2D,0,ve,Ne,Y,Te);T(S)&&S.mipmapsAutoUpdate===!0&&w(we),He.__version=Fe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function rt(D,S,$){if(S.image.length!==6)return;const we=St(D,S),ge=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);const Fe=n.get(ge);if(ge.version!==Fe.__version||we===!0){t.activeTexture(s.TEXTURE0+$);const He=qt.getPrimaries(qt.workingColorSpace),ye=S.colorSpace===ki?null:qt.getPrimaries(S.colorSpace),Te=S.colorSpace===ki||He===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,Y=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let k=0;k<6;k++)!Ne&&!Y?ve[k]=M(S.image[k],!0,i.maxCubemapSize):ve[k]=Y?S.image[k].image:S.image[k],ve[k]=Ce(S,ve[k]);const xe=ve[0],Ge=r.convert(S.format,S.colorSpace),ee=r.convert(S.type);let K=L(S.internalFormat,Ge,ee,S.normalized,S.colorSpace);const me=S.isVideoTexture!==!0,Oe=Fe.__version===void 0||we===!0,_=ge.dataReady;let H=b(S,xe);Mt(s.TEXTURE_CUBE_MAP,S);let X;if(S.isDepthTexture){if(K=v(S.format===es,S.type),Oe)if(me)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,K,xe.width,xe.height);else for(let k=0;k<6;k++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,K,xe.width,xe.height,0,Ge,ee,null)}else if(Ne){me&&Oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,K,xe.width,xe.height);for(let k=0;k<6;k++){X=ve[k].mipmaps;for(let oe=0;oe<X.length;oe++){const ce=X[oe];S.format!==ci?Ge!==null?me?_&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,0,0,ce.width,ce.height,Ge,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,K,ce.width,ce.height,0,ce.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,0,0,ce.width,ce.height,Ge,ee,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,K,ce.width,ce.height,0,Ge,ee,ce.data)}}}else{if(X=S.mipmaps,me&&Oe){X.length>0&&H++;const k=he(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,H,K,k.width,k.height)}for(let k=0;k<6;k++)if(Y){me?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ve[k].width,ve[k].height,Ge,ee,ve[k].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,K,ve[k].width,ve[k].height,0,Ge,ee,ve[k].data);for(let oe=0;oe<X.length;oe++){const Ve=X[oe].image[k].image;me?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,0,0,Ve.width,Ve.height,Ge,ee,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,K,Ve.width,Ve.height,0,Ge,ee,Ve.data)}}else{me?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ge,ee,ve[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,K,Ge,ee,ve[k]);for(let oe=0;oe<X.length;oe++){const ce=X[oe];me?_&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,0,0,Ge,ee,ce.image[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,K,Ge,ee,ce.image[k])}}}T(S)&&S.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),Fe.__version=ge.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function nt(D,S,$,we,ge,Fe){const He=r.convert($.format,$.colorSpace),ye=r.convert($.type),Te=L($.internalFormat,He,ye,$.normalized,$.colorSpace),Ne=n.get(S),Y=n.get($);if(Y.__renderTarget=S,!Ne.__hasExternalTextures){const ve=Math.max(1,S.width>>Fe),xe=Math.max(1,S.height>>Fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Fe,Te,ve,xe,S.depth,0,He,ye,null):t.texImage2D(ge,Fe,Te,ve,xe,0,He,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ie(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,ge,Y.__webglTexture,0,qe(S)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,we,ge,Y.__webglTexture,Fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(D,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),S.depthBuffer){const we=S.depthTexture,ge=we&&we.isDepthTexture?we.type:null,Fe=v(S.stencilBuffer,ge),He=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),Fe,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),Fe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,D)}else{const we=S.textures;for(let ge=0;ge<we.length;ge++){const Fe=we[ge],He=r.convert(Fe.format,Fe.colorSpace),ye=r.convert(Fe.type),Te=L(Fe.internalFormat,He,ye,Fe.normalized,Fe.colorSpace);Ie(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),Te,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),Te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Te,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(D,S,$){const we=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(S.depthTexture);ge.__renderTarget=S;const Fe=we?S.depthTexture.image[0]:S.depthTexture.image;(!ge.__webglTexture||Fe.width!==S.width||Fe.height!==S.height)&&(Fe.width=S.width,Fe.height=S.height,S.depthTexture.needsUpdate=!0),we?Ze(S.depthTexture,0):Ye(S.depthTexture,0);const He=ge.__webglTexture,ye=qe(S),Te=we?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,Ne=S.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===rs)Ie(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,Te,He,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,Ne,Te,He,0);else if(S.depthTexture.format===es)Ie(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,Te,He,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,Ne,Te,He,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(D){const S=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const we=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),we){const ge=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,we.removeEventListener("dispose",ge)};we.addEventListener("dispose",ge),S.__depthDisposeCallback=ge}S.__boundDepthTexture=we}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let we=0;we<6;we++)lt(S.__webglFramebuffer[we],D,we);else D.texture.mipmaps.length>0?lt(S.__webglFramebuffer[0],D,0):lt(S.__webglFramebuffer,D,0);else if($){S.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[we]),S.__webglDepthbuffer[we]===void 0)S.__webglDepthbuffer[we]=s.createRenderbuffer(),ot(S.__webglDepthbuffer[we],D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=S.__webglDepthbuffer[we];s.bindRenderbuffer(s.RENDERBUFFER,Fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Fe)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ot(S.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(D,S,$){const we=n.get(D);S!==void 0&&nt(we.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ae(D)}function ke(D){const S=D.texture,$=n.get(D),we=n.get(S);D.addEventListener("dispose",re),z(D);const ge=D.textures,Fe=D.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture()),we.__version=S.version,o.memory.textures++),Fe){$.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps.length>0){$.__webglFramebuffer[ye]=[];for(let Te=0;Te<S.mipmaps.length;Te++)$.__webglFramebuffer[ye][Te]=s.createFramebuffer()}else $.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(S.mipmaps.length>0){$.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)$.__webglFramebuffer[ye]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(He)for(let ye=0,Te=ge.length;ye<Te;ye++){const Ne=n.get(ge[ye]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&Ie(D)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const Te=ge[ye];$.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ye]);const Ne=r.convert(Te.format,Te.colorSpace),Y=r.convert(Te.type),ve=L(Te.internalFormat,Ne,Y,Te.normalized,Te.colorSpace,D.isXRRenderTarget===!0),xe=qe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ve,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,$.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ot($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)nt($.__webglFramebuffer[ye][Te],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else nt($.__webglFramebuffer[ye],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);T(S)?w(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(He){for(let ye=0,Te=ge.length;ye<Te;ye++){const Ne=ge[ye],Y=n.get(Ne);let ve=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Y.__webglTexture),Mt(ve,Ne),nt($.__webglFramebuffer,D,Ne,s.COLOR_ATTACHMENT0+ye,ve,0),T(Ne)&&w(ve)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,we.__webglTexture),Mt(ye,S),S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)nt($.__webglFramebuffer[Te],D,S,s.COLOR_ATTACHMENT0,ye,Te);else nt($.__webglFramebuffer,D,S,s.COLOR_ATTACHMENT0,ye,0);T(S)?w(ye):S.mipmaps.length>0&&s.texParameteri(ye,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&Ae(D)}function I(D){const S=D.textures;for(let $=0,we=S.length;$<we;$++){const ge=S[$];if(T(ge)&&ge.mipmapsAutoUpdate===!0){const Fe=N(D),He=n.get(ge).__webglTexture;t.bindTexture(Fe,He),w(Fe),t.unbindTexture()}}}const je=[];function $e(D){if(D.samples>0){if(Ie(D)===!1){const S=D.textures,$=D.width,we=D.height;let ge=s.COLOR_BUFFER_BIT;const Fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=n.get(D),ye=S.length>1;if(ye)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const Y=n.get(S[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Y,0)}s.blitFramebuffer(0,0,$,we,0,0,$,we,ge,s.NEAREST),a===!0&&(je.length=0,je.push(s.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&je.push(Fe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const Y=n.get(S[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,Y,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&a){const S=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function qe(D){return Math.min(i.maxSamples,D.samples)}function Ie(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(D){const S=o.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function Ce(D,S){const $=D.colorSpace,we=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Qn&&$!==ki&&(qt.getTransfer($)===en?(we!==ci||ge!==Jn)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",$)),S}function he(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=at,this.resetTextureUnits=fe,this.getTextureUnits=Ee,this.setTextureUnits=Ke,this.setTexture2D=Ye,this.setTexture2DArray=st,this.setTexture3D=ut,this.setTextureCube=Ze,this.rebindTextures=ze,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ie,this.dispose=se}function x1(s,e){function t(n,i=ki){let r;const o=qt.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===Pc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return s.BYTE;if(n===Md)return s.SHORT;if(n===Hr)return s.UNSIGNED_SHORT;if(n===Cc)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===ii)return s.FLOAT;if(n===On)return s.HALF_FLOAT;if(n===bd)return s.ALPHA;if(n===wd)return s.RGB;if(n===ci)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===es)return s.DEPTH_STENCIL;if(n===ya)return s.RED;if(n===Dc)return s.RED_INTEGER;if(n===ms)return s.RG;if(n===Ic)return s.RG_INTEGER;if(n===Nc)return s.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===Ko)if(o===en)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Ll||n===Dl||n===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===na||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Ul)return o===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fl)return r.COMPRESSED_R11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===Jl||n===$l||n===Ql||n===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===tc||n===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ec)return o===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===ia||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Gd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gn({vertexShader:v1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S1 extends qi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",a=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new y1,g={},M=t.getContextAttributes();let T=null,w=null;const N=[],L=[],v=new Be;let b=null,z=null;const F=new Xn;F.viewport=new rn;const q=new Xn;q.viewport=new rn;const re=[F,q],Q=new _m;let B=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_e){let Ye=N[_e];return Ye===void 0&&(Ye=new Ga,N[_e]=Ye),Ye.getTargetRaySpace()},this.getControllerGrip=function(_e){let Ye=N[_e];return Ye===void 0&&(Ye=new Ga,N[_e]=Ye),Ye.getGripSpace()},this.getHand=function(_e){let Ye=N[_e];return Ye===void 0&&(Ye=new Ga,N[_e]=Ye),Ye.getHandSpace()};function le(_e){const Ye=L.indexOf(_e.inputSource);if(Ye===-1)return;const st=N[Ye];st!==void 0&&(st.update(_e.inputSource,_e.frame,c||o),st.dispatchEvent({type:_e.type,data:_e.inputSource}))}function Z(){i.removeEventListener("select",le),i.removeEventListener("selectstart",le),i.removeEventListener("selectend",le),i.removeEventListener("squeeze",le),i.removeEventListener("squeezestart",le),i.removeEventListener("squeezeend",le),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",W);for(let _e=0;_e<N.length;_e++){const Ye=L[_e];Ye!==null&&(L[_e]=null,N[_e].disconnect(Ye))}B=null,se=null,m.reset();for(const _e in g)delete g[_e];if(e.setRenderTarget(T),u=null,f=null,d=null,i=null,w=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),z!==null){const _e=z.camera;_e.fov=z.fov,_e.zoom=z.zoom,_e.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_e){r=_e,n.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_e){l=_e,n.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(_e){c=_e},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(_e){if(i=_e,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",le),i.addEventListener("selectstart",le),i.addEventListener("selectend",le),i.addEventListener("squeeze",le),i.addEventListener("squeezestart",le),i.addEventListener("squeezeend",le),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ut=null,Ze=null;M.depth&&(Ze=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,st=M.stencil?es:rs,ut=M.stencil?Js:ui);const dt={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Fn(f.textureWidth,f.textureHeight,{format:ci,type:Jn,depthTexture:new gs(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const st={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,st),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Fn(u.framebufferWidth,u.framebufferHeight,{format:ci,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await i.requestReferenceSpace(l),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(_e){for(let Ye=0;Ye<_e.removed.length;Ye++){const st=_e.removed[Ye],ut=L.indexOf(st);ut>=0&&(L[ut]=null,N[ut].disconnect(st))}for(let Ye=0;Ye<_e.added.length;Ye++){const st=_e.added[Ye];let ut=L.indexOf(st);if(ut===-1){for(let dt=0;dt<N.length;dt++)if(dt>=L.length){L.push(st),ut=dt;break}else if(L[dt]===null){L[dt]=st,ut=dt;break}if(ut===-1)break}const Ze=N[ut];Ze&&Ze.connect(st)}}function te(_e,Ye){Ye===null?_e.matrixWorld.copy(_e.matrix):_e.matrixWorld.multiplyMatrices(Ye.matrixWorld,_e.matrix),_e.matrixWorldInverse.copy(_e.matrixWorld).invert()}this.updateCamera=function(_e){if(i===null)return;let Ye=_e.near,st=_e.far;m.texture!==null&&(m.depthNear>0&&(Ye=m.depthNear),m.depthFar>0&&(st=m.depthFar)),Q.near=q.near=F.near=Ye,Q.far=q.far=F.far=st,(B!==Q.near||se!==Q.far)&&(i.updateRenderState({depthNear:Q.near,depthFar:Q.far}),B=Q.near,se=Q.far),Q.layers.mask=_e.layers.mask|6,F.layers.mask=Q.layers.mask&-5,q.layers.mask=Q.layers.mask&-3;const ut=_e.parent,Ze=Q.cameras;te(Q,ut);for(let dt=0;dt<Ze.length;dt++)te(Ze[dt],ut);Q.projectionMatrix.copy(F.projectionMatrix),Q.projectionMatrixInverse.copy(F.projectionMatrixInverse),z===null&&_e.isPerspectiveCamera&&(z={camera:_e,fov:_e.fov,zoom:_e.zoom}),fe(_e,Q,ut)};function fe(_e,Ye,st){st===null?_e.matrix.copy(Ye.matrixWorld):(_e.matrix.copy(st.matrixWorld),_e.matrix.invert(),_e.matrix.multiply(Ye.matrixWorld)),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.updateMatrixWorld(!0),_e.projectionMatrix.copy(Ye.projectionMatrix),_e.projectionMatrixInverse.copy(Ye.projectionMatrixInverse),_e.isPerspectiveCamera&&(_e.fov=$s*2*Math.atan(1/_e.projectionMatrix.elements[5]),_e.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&u===null))return a},this.setFoveation=function(_e){a=_e,f!==null&&(f.fixedFoveation=_e),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=_e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(_e){return g[_e]};let Ee=null;function Ke(_e,Ye){if(h=Ye.getViewerPose(c||o),p=Ye,h!==null){const st=h.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let ut=!1;st.length!==Q.cameras.length&&(Q.cameras.length=0,ut=!0);for(let ht=0;ht<st.length;ht++){const Mt=st[ht];let St=null;if(u!==null)St=u.getViewport(Mt);else{const Xe=d.getViewSubImage(f,Mt);St=Xe.viewport,ht===0&&(e.setRenderTargetTextures(w,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(w))}let Le=re[ht];Le===void 0&&(Le=new Xn,Le.layers.enable(ht),Le.viewport=new rn,re[ht]=Le),Le.matrix.fromArray(Mt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Mt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(St.x,St.y,St.width,St.height),ht===0&&(Q.matrix.copy(Le.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ut===!0&&Q.cameras.push(Le)}const Ze=i.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const ht=d.getDepthInformation(st[0]);ht&&ht.isValid&&ht.texture&&m.init(ht,i.renderState)}if(Ze&&Ze.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ht=0;ht<st.length;ht++){const Mt=st[ht].camera;if(Mt){let St=g[Mt];St||(St=new Gd,g[Mt]=St);const Le=d.getCameraImage(Mt);St.sourceTexture=Le}}}}for(let st=0;st<N.length;st++){const ut=L[st],Ze=N[st];ut!==null&&Ze!==void 0&&Ze.update(ut,Ye,c||o)}Ee&&Ee(_e,Ye),Ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ye}),p=null}const at=new af;at.setAnimationLoop(Ke),this.setAnimationLoop=function(_e){Ee=_e},this.dispose=function(){}}}const b1=new Lt,_f=new Ot;_f.set(-1,0,0,0,1,0,0,0,1);function w1(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$d(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,T,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&l(m,g)):g.isPointsMaterial?a(m,g,M,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),T=M.envMap,w=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_f),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function l(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,M,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T1(s,e,t,n){let i={},r={};function o(M,T){const w=T.program;n.uniformBlockBinding(M,w,i[M.id])}function l(M,T){let w=i[M.id];w===void 0&&(p(M),w=a(M),i[M.id]=w,M.addEventListener("dispose",m));const N=T.program;n.updateUBOMapping(M,N);const L=e.render.frame;r[M.id]!==L&&(c(M),r[M.id]=L)}function a(M){const T=s.createBuffer(),w=M.__size,N=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,w,N),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(M){const T=i[M.id],w=M.uniforms,N=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let L=0,v=w.length;L<v;L++){const b=w[L];if(Array.isArray(b))for(let z=0,F=b.length;z<F;z++)h(b[z],L,z,N);else h(b,L,0,N)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,T,w,N){if(f(M,T,w,N)===!0){const L=M.__offset,v=M.value;if(Array.isArray(v)){let b=0;for(let z=0;z<v.length;z++){const F=v[z],q=x(F,!0);d(F,M.__data,b),b+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,L,M.__data)}}function d(M,T,w){typeof M=="number"||typeof M=="boolean"?T[w]=M:M.isMatrix3?(T[w]=M.elements[0],T[w+1]=M.elements[1],T[w+2]=M.elements[2],T[w+3]=0,T[w+4]=M.elements[3],T[w+5]=M.elements[4],T[w+6]=M.elements[5],T[w+7]=0,T[w+8]=M.elements[6],T[w+9]=M.elements[7],T[w+10]=M.elements[8],T[w+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-w),w):M.toArray(T,w)}function f(M,T,w,N){const L=M.value,v=T+"_"+w;if(Array.isArray(L)){N[v]===void 0&&(N[v]=[]);const b=N[v];let z=!1;for(let F=0;F<L.length;F++)u(L[F],b,F)===!0&&(z=!0);return z}return u(L,N,v)}function u(M,T,w){if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{const N=T[w];if(typeof M=="number"||typeof M=="boolean"){if(N!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(N.equals(M)===!1)return N.copy(M),!0}}return!1}function p(M){const T=M.uniforms;let w=0;const N=16;for(let v=0,b=T.length;v<b;v++){const z=Array.isArray(T[v])?T[v]:[T[v]];for(let F=0,q=z.length;F<q;F++){const re=z[F],Q=Array.isArray(re.value)?re.value:[re.value],B=Array.isArray(T[v])||Array.isArray(re.value);let se=w;for(let Z=0,W=Q.length;Z<W;Z++){const te=Q[Z],fe=x(te,B),Ee=w%N,Ke=Ee%fe.boundary,at=Ee+Ke;w+=Ke,at!==0&&N-at<fe.storage&&(w+=N-at),Z===0&&(se=w),w+=fe.storage}const le=re.type==="int"?Int32Array:re.type==="uint"?Uint32Array:Float32Array;re.__data=new le((w-se)/Float32Array.BYTES_PER_ELEMENT),re.__offset=se}}const L=w%N;return L>0&&(w+=N-L),M.__size=w,M.__cache={},this}function x(M,T){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):At("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(M){const T=M.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:l,dispose:g}}const E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function A1(){return xi===null&&(xi=new ba(E1,16,16,ms,On),xi.name="DFG_LUT",xi.minFilter=Rn,xi.magFilter=Rn,xi.wrapS=Hn,xi.wrapT=Hn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class R1{constructor(e={}){const{canvas:t=vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=u,m=new Set([Nc,Ic,Dc]),g=new Set([Jn,ui,Hr,Js,Pc,Lc]),M=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let N=null,L=null;const v=[],b=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let q=!1,re=null,Q=null,B=null,se=null;this._outputColorSpace=xn;let le=0,Z=0,W=null,te=-1,fe=null;const Ee=new rn,Ke=new rn;let at=null;const _e=new xt(0);let Ye=0,st=t.width,ut=t.height,Ze=1,dt=null,Ft=null;const ht=new rn(0,0,st,ut),Mt=new rn(0,0,st,ut);let St=!1;const Le=new Zr,Xe=new Vc;let et=!1,rt=!1;const nt=new Lt,ot=new G,lt=new rn,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ke(){return W===null?Ze:1}let I=n;function je(y,P){return t.getContext(y,P)}let $e,qe,Ie,tt,Ce,he,D,S,$,we,ge,Fe,He,ye,Te,Ne,Y,ve,xe,Ge,ee,K,me;try{const y={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",k,!1),I===null){const P="webgl2";if(I=je(P,y),I===null)throw je(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(y){throw t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",k,!1),Dt("WebGLRenderer: "+y.message),y}function Oe(){$e=new Lx(I),$e.init(),ee=new x1(I,$e),qe=new Mx(I,$e,e,ee),Ie=new g1(I,$e),qe.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),Q=I.createFramebuffer(),B=I.createFramebuffer(),se=I.createFramebuffer(),tt=new Nx(I),Ce=new n1,he=new _1(I,$e,Ie,Ce,qe,ee,tt),D=new Px(F),S=new Om(I),K=new xx(I,S),$=new Dx(I,S,tt,K),we=new Ox(I,$,S,K,tt),ve=new Ux(I,qe,he),Te=new yx(Ce),ge=new t1(F,D,$e,qe,K,Te),Fe=new w1(F,Ce),He=new s1,ye=new h1($e),Y=new _x(F,D,Ie,we,p,a),Ne=new m1(F,we,qe),me=new T1(I,tt,qe,Ie),xe=new vx(I,$e,tt),Ge=new Ix(I,$e,tt),tt.programs=ge.programs,F.capabilities=qe,F.extensions=$e,F.properties=Ce,F.renderLists=He,F.shadowMap=Ne,F.state=Ie,F.info=tt}x!==Jn&&(z=new Bx(x,t.width,t.height,l,i,r));const _=new S1(F,I);this.xr=_,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=$e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(y){y!==void 0&&(Ze=y,this.setSize(st,ut,!1))},this.getSize=function(y){return y.set(st,ut)},this.setSize=function(y,P,R=!0){if(_.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}st=y,ut=P,t.width=Math.floor(y*Ze),t.height=Math.floor(P*Ze),R===!0&&(t.style.width=y+"px",t.style.height=P+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(st*Ze,ut*Ze).floor()},this.setDrawingBufferSize=function(y,P,R){st=y,ut=P,Ze=R,t.width=Math.floor(y*R),t.height=Math.floor(P*R),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(x===Jn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){At("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Ee)},this.getViewport=function(y){return y.copy(ht)},this.setViewport=function(y,P,R,A){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,P,R,A),Ie.viewport(Ee.copy(ht).multiplyScalar(ke()).round())},this.getScissor=function(y){return y.copy(Mt)},this.setScissor=function(y,P,R,A){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,P,R,A),Ie.scissor(Ke.copy(Mt).multiplyScalar(ke()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(y){Ie.setScissorTest(St=y)},this.setOpaqueSort=function(y){dt=y},this.setTransparentSort=function(y){Ft=y},this.getClearColor=function(y){return y.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,R=!0){let A=0;if(y){let O=!1;if(W!==null){const ie=W.texture.format;O=m.has(ie)}if(O){const ie=W.texture.type,pe=g.has(ie),de=Y.getClearColor(),ne=Y.getClearAlpha(),Me=de.r,De=de.g,We=de.b;pe?(M[0]=Me,M[1]=De,M[2]=We,M[3]=ne,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=Me,T[1]=De,T[2]=We,T[3]=ne,I.clearBufferiv(I.COLOR,0,T))}else A|=I.COLOR_BUFFER_BIT}P&&(A|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),R&&(A|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A!==0&&I.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),re=y},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",k,!1),Y.dispose(),He.dispose(),ye.dispose(),he.dispose(),Ce.dispose(),D.dispose(),we.dispose(),$.dispose(),K.dispose(),me.dispose(),ge.dispose(),_.dispose(),_.removeEventListener("sessionstart",Ct),_.removeEventListener("sessionend",bt),Je.stop()};function H(y){y.preventDefault(),oa("WebGLRenderer: Context Lost."),q=!0}function X(){oa("WebGLRenderer: Context Restored."),q=!1;const y=tt.autoReset,P=Ne.enabled,R=Ne.autoUpdate,A=Ne.needsUpdate,O=Ne.type;Oe(),tt.autoReset=y,Ne.enabled=P,Ne.autoUpdate=R,Ne.needsUpdate=A,Ne.type=O}function k(y){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oe(y){const P=y.target;P.removeEventListener("dispose",oe),ce(P)}function ce(y){Ve(y),Ce.remove(y)}function Ve(y){const P=Ce.get(y).programs;P!==void 0&&(P.forEach(function(R){ge.releaseProgram(R)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,R,A,O,ie){P===null&&(P=Ae);const pe=O.isMesh&&O.matrixWorld.determinantAffine()<0,de=j(y,P,R,A,O);Ie.setMaterial(A,pe);let ne=R.index,Me=1;if(A.wireframe===!0){if(ne=$.getWireframeAttribute(R),ne===void 0)return;Me=2}const De=R.drawRange,We=R.attributes.position;let be=De.start*Me,Qe=(De.start+De.count)*Me;ie!==null&&(be=Math.max(be,ie.start*Me),Qe=Math.min(Qe,(ie.start+ie.count)*Me)),ne!==null?(be=Math.max(be,0),Qe=Math.min(Qe,ne.count)):We!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,We.count));const yt=Qe-be;if(yt<0||yt===1/0)return;K.setup(O,A,de,R,ne);let vt,Rt=xe;if(ne!==null&&(vt=S.get(ne),Rt=Ge,Rt.setIndex(vt)),O.isMesh)A.wireframe===!0?(Ie.setLineWidth(A.wireframeLinewidth*ke()),Rt.setMode(I.LINES)):Rt.setMode(I.TRIANGLES);else if(O.isLine){let wt=A.linewidth;wt===void 0&&(wt=1),Ie.setLineWidth(wt*ke()),O.isLineSegments?Rt.setMode(I.LINES):O.isLineLoop?Rt.setMode(I.LINE_LOOP):Rt.setMode(I.LINE_STRIP)}else O.isPoints?Rt.setMode(I.POINTS):O.isSprite&&Rt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const wt=O._multiDrawStarts,ct=O._multiDrawCounts,Wt=O._multiDrawCount,It=ne?S.get(ne).bytesPerElement:1,Tn=Ce.get(A).currentProgram.getUniforms();for(let dn=0;dn<Wt;dn++)Tn.setValue(I,"_gl_DrawID",dn),Rt.render(wt[dn]/It,ct[dn])}else if(O.isInstancedMesh)Rt.renderInstances(be,yt,O.count);else if(R.isInstancedBufferGeometry){const wt=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,ct=Math.min(R.instanceCount,wt);Rt.renderInstances(be,yt,ct)}else Rt.render(be,yt)};function _t(y,P,R,A){re!==null&&y.isNodeMaterial&&re.setObject(A,y),et===!0&&Te.setState(y,R,!1),y.transparent===!0&&y.side===ln&&y.forceSinglePass===!1?(y.side=Un,y.needsUpdate=!0,V(y,P,A),y.side=ss,y.needsUpdate=!0,V(y,P,A),y.side=ln):V(y,P,A)}this.compile=function(y,P,R=null){R===null&&(R=y),re!==null&&re.renderStart(y,P,R),L=ye.get(R),L.init(P),b.push(L),R.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(L.pushLight(O),O.castShadow&&L.pushShadow(O))}),y!==R&&y.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(L.pushLight(O),O.castShadow&&L.pushShadow(O))}),L.setupLights(),re!==null&&re.updateLights(L.state.lightsArray),rt=this.localClippingEnabled,et=Te.init(this.clippingPlanes,rt),et===!0&&Te.setGlobalState(this.clippingPlanes,P),re!==null&&Ne.render(L.state.shadowsArray,R,P);const A=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const de=ie[pe];_t(de,R,P,O),A.add(de)}else _t(ie,R,P,O),A.add(ie)}),L=b.pop(),re!==null&&re.renderEnd(),A},this.compileAsync=function(y,P,R=null){const A=this.compile(y,P,R);return new Promise(O=>{function ie(){if(A.forEach(function(pe){const ne=Ce.get(pe).currentProgram;(ne===void 0||ne.isReady())&&A.delete(pe)}),A.size===0){O(y);return}setTimeout(ie,10)}$e.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Et=null;function pt(y){Et&&Et(y)}function Ct(){Je.stop()}function bt(){Je.start()}const Je=new af;Je.setAnimationLoop(pt),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(y){Et=y,_.setAnimationLoop(y),y===null?Je.stop():Je.start()},_.addEventListener("sessionstart",Ct),_.addEventListener("sessionend",bt),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;re!==null&&re.renderStart(y,P);const R=_.enabled===!0&&_.isPresenting===!0,A=z!==null&&(W===null||R)&&z.begin(F,W);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(_.cameraAutoUpdate===!0&&_.updateCamera(P),P=_.getCamera()),y.isScene===!0&&y.onBeforeRender(F,y,P,W),L=ye.get(y,b.length),L.init(P),L.state.textureUnits=he.getTextureUnits(),b.push(L),nt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Xe.setFromArrayCamera(P):Le.setFromProjectionMatrix(nt,hi,P.reversedDepth),rt=this.localClippingEnabled,et=Te.init(this.clippingPlanes,rt),N=He.get(y,v.length),N.init(),v.push(N),this.info.render.frame++,_.enabled===!0&&_.isPresenting===!0){const pe=F.xr.getDepthSensingMesh();pe!==null&&mt(pe,P,-1/0,F.sortObjects)}mt(y,P,0,F.sortObjects),N.finish(),re!==null&&re.updateLights(L.state.lightsArray),F.sortObjects===!0&&N.sort(dt,Ft),ze=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,ze&&Y.addToRenderList(N,y),this.info.autoReset===!0&&this.info.reset(),et===!0&&Te.beginShadows();const O=L.state.shadowsArray;if(Ne.render(O,y,P),et===!0&&Te.endShadows(),(A&&z.hasRenderPass())===!1){const pe=N.opaque,de=N.transmissive;if(L.setupLights(),P.isArrayCamera){const ne=P.cameras;if(de.length>0)for(let Me=0,De=ne.length;Me<De;Me++){const We=ne[Me];fn(pe,de,y,We)}ze&&Y.render(y);for(let Me=0,De=ne.length;Me<De;Me++){const We=ne[Me];Yt(N,y,We,We.viewport)}}else de.length>0&&fn(pe,de,y,P),ze&&Y.render(y),Yt(N,y,P)}W!==null&&Z===0&&(he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W)),A&&z.end(F),y.isScene===!0&&y.onAfterRender(F,y,P),K.resetDefaultState(),te=-1,fe=null,b.pop(),b.length>0?(L=b[b.length-1],he.setTextureUnits(L.state.textureUnits),et===!0&&Te.setGlobalState(F.clippingPlanes,L.state.camera)):L=null,v.pop(),v.length>0?N=v[v.length-1]:N=null,re!==null&&re.renderEnd()};function mt(y,P,R,A){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)R=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)L.pushLight(y),y.castShadow&&L.pushShadow(y);else if(y.isSprite){const pe=P.isArrayCamera?Xe:Le;if(!y.frustumCulled||y.intersectsFrustum(pe)){A&&lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(nt);const de=we.update(y),ne=y.material;ne.visible&&N.push(y,de,ne,R,lt.z,null,P)}}else if(y.isMesh||y.isLine||y.isPoints){const pe=P.isArrayCamera?Xe:Le;if(!y.frustumCulled||y.intersectsFrustum(pe)){const de=we.update(y),ne=y.material;if(A&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),lt.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),lt.copy(de.boundingSphere.center)),lt.applyMatrix4(y.matrixWorld).applyMatrix4(nt)),Array.isArray(ne)){const Me=de.groups;for(let De=0,We=Me.length;De<We;De++){const be=Me[De],Qe=ne[be.materialIndex];Qe&&Qe.visible&&N.push(y,de,Qe,R,lt.z,be,P)}}else ne.visible&&N.push(y,de,ne,R,lt.z,null,P)}}}const ie=y.children;for(let pe=0,de=ie.length;pe<de;pe++)mt(ie[pe],P,R,A)}function Yt(y,P,R,A){const{opaque:O,transmissive:ie,transparent:pe}=y;L.setupLightsView(R),et===!0&&Te.setGlobalState(F.clippingPlanes,R),A&&Ie.viewport(Ee.copy(A)),O.length>0&&pn(O,P,R),ie.length>0&&pn(ie,P,R),pe.length>0&&pn(pe,P,R),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function fn(y,P,R,A){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[A.id]===void 0){const be=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[A.id]=new Fn(1,1,{generateMipmaps:!0,type:be?On:Jn,minFilter:bi,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ie=L.state.transmissionRenderTarget[A.id],pe=A.viewport||Ee;ie.setSize(pe.z*F.transmissionResolutionScale,pe.w*F.transmissionResolutionScale);const de=F.getRenderTarget(),ne=F.getActiveCubeFace(),Me=F.getActiveMipmapLevel();F.setRenderTarget(ie),F.getClearColor(_e),Ye=F.getClearAlpha(),Ye<1&&F.setClearColor(16777215,.5),F.clear(),ze&&Y.render(R);const De=F.toneMapping;F.toneMapping=Vi;const We=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),L.setupLightsView(A),et===!0&&Te.setGlobalState(F.clippingPlanes,A),pn(y,R,A),he.updateMultisampleRenderTarget(ie),he.updateRenderTargetMipmap(ie),$e.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,yt=P.length;Qe<yt;Qe++){const vt=P[Qe],{object:Rt,geometry:wt,material:ct,group:Wt}=vt;if(ct.side===ln&&Rt.layers.test(A.layers)){const It=ct.side;ct.side=Un,ct.needsUpdate=!0,E(Rt,R,A,wt,ct,Wt),ct.side=It,ct.needsUpdate=!0,be=!0}}be===!0&&(he.updateMultisampleRenderTarget(ie),he.updateRenderTargetMipmap(ie))}F.setRenderTarget(de,ne,Me),F.setClearColor(_e,Ye),We!==void 0&&(A.viewport=We),F.toneMapping=De}function pn(y,P,R){const A=P.isScene===!0?P.overrideMaterial:null;for(let O=0,ie=y.length;O<ie;O++){const pe=y[O],{object:de,geometry:ne,group:Me}=pe;let De=pe.material;De.allowOverride===!0&&A!==null&&(De=A),de.layers.test(R.layers)&&E(de,P,R,ne,De,Me)}}function E(y,P,R,A,O,ie){re!==null&&O.isNodeMaterial&&re.setObject(y,O),y.onBeforeRender(F,P,R,A,O,ie),y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(F,P,R,A,y,ie),O.transparent===!0&&O.side===ln&&O.forceSinglePass===!1?(O.side=Un,O.needsUpdate=!0,F.renderBufferDirect(R,P,A,O,y,ie),O.side=ss,O.needsUpdate=!0,F.renderBufferDirect(R,P,A,O,y,ie),O.side=ln):F.renderBufferDirect(R,P,A,O,y,ie),y.onAfterRender(F,P,R,A,O,ie)}function U(y){let P=0;for(const R of y)R.texture!==null&&P++;return P}function V(y,P,R){P.isScene!==!0&&(P=Ae);const A=Ce.get(y),O=L.state.lights,ie=L.state.shadowsArray,pe=O.state.version,de=ge.getParameters(y,O.state,ie,P,R,L.state.lightProbeGridArray),ne=ge.getProgramCacheKey(de);let Me=A.programs;A.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,A.fog=P.fog;const De=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;A.envMap=D.get(y.envMap||A.environment,De),A.envMapRotation=A.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",oe),Me=new Map,A.programs=Me,A.programVariants=new Map);let We=Me.get(ne);if(We!==void 0){if(A.currentProgram===We&&A.lightsStateVersion===pe)return Re(y,de),We}else de.uniforms=ge.getUniforms(y),re!==null&&y.isNodeMaterial&&re.build(y,R,de),y.onBeforeCompile(de,F),We=ge.acquireProgram(de,ne),Me.set(ne,We),A.uniforms=de.uniforms;const be=A.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=Te.uniform),Re(y,de),A.needsLights=Se(y),A.lightsStateVersion=pe,A.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.sunLights.value=O.state.sun,be.sunLightShadows.value=O.state.sunShadow,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.sunShadowMatrix.value=O.state.sunShadowMatrix,be.sunShadowCascade.value=O.state.sunShadowCascade,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),A.numLightProbeGrids=U(L.state.lightProbeGridArray),A.currentProgram=We,A.uniformsList=null,We}function J(y,P,R,A,O){const ie=Ce.get(y),pe=ie.currentProgram.id+","+A+","+O;let de=ie.programVariants.get(pe);return de===void 0?(de=V(y,P,R),ie.programVariants.set(pe,de)):(ie.currentProgram=de,ie.uniformsList=null,ie.outputColorSpace=A,ie.toneMapping=O),de}function ue(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=Jo.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Re(y,P){const R=Ce.get(y);R.outputColorSpace=P.outputColorSpace,R.batching=P.batching,R.batchingColor=P.batchingColor,R.instancing=P.instancing,R.instancingColor=P.instancingColor,R.instancingMorph=P.instancingMorph,R.skinning=P.skinning,R.morphTargets=P.morphTargets,R.morphNormals=P.morphNormals,R.morphColors=P.morphColors,R.morphTargetsCount=P.morphTargetsCount,R.numClippingPlanes=P.numClippingPlanes,R.numIntersection=P.numClipIntersection,R.vertexAlphas=P.vertexAlphas,R.vertexTangents=P.vertexTangents,R.toneMapping=P.toneMapping}function j(y,P,R,A,O){P.isScene!==!0&&(P=Ae),he.resetTextureUnits();const ie=P.fog,pe=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?P.environment:null,de=W===null?F.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:qt.workingColorSpace,ne=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Me=D.get(A.envMap||pe,ne),De=A.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,We=!!R.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),be=!!R.morphAttributes.position,Qe=!!R.morphAttributes.normal,yt=!!R.morphAttributes.color;let vt=Vi;A.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(vt=F.toneMapping);const Rt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,wt=Rt!==void 0?Rt.length:0,ct=Ce.get(A),Wt=L.state.lights;if(et===!0&&(rt===!0||y!==fe)){const Bt=y===fe&&A.id===te;Te.setState(A,y,Bt)}let It=!1,Tn=!1;A.version===ct.__version?ct.needsLights&&ct.lightsStateVersion!==Wt.state.version||O.isBatchedMesh&&ct.batching===!1||!O.isBatchedMesh&&ct.batching===!0||O.isBatchedMesh&&ct.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&ct.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&ct.instancing===!1||!O.isInstancedMesh&&ct.instancing===!0||O.isSkinnedMesh&&ct.skinning===!1||!O.isSkinnedMesh&&ct.skinning===!0||O.isInstancedMesh&&ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ct.instancingMorph===!1&&O.morphTexture!==null||ct.envMap!==Me||A.fog===!0&&ct.fog!==ie||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Te.numPlanes||ct.numIntersection!==Te.numIntersection)||ct.vertexAlphas!==De||ct.vertexTangents!==We||ct.morphTargets!==be||ct.morphNormals!==Qe||ct.morphColors!==yt||ct.morphTargetsCount!==wt||ct.numLightProbeGrids!==U(L.state.lightProbeGridArray)?It=!0:(ct.outputColorSpace!==de||ct.toneMapping!==vt)&&(Tn=!0):(It=!0,ct.__version=A.version);let dn=ct.currentProgram;(It===!0||Tn===!0)&&(dn=Tn===!0?J(A,P,O,de,vt):V(A,P,O),re&&A.isNodeMaterial&&re.onUpdateProgram(A,dn,ct));let gi=!1,Vn=!1,Yn=!1;const Tt=dn.getUniforms(),Xt=ct.uniforms;if(Ie.useProgram(dn.program)&&(gi=!0,Vn=!0,Yn=!0),A.id!==te&&(te=A.id,Vn=!0),gi||fe!==y){Ie.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Tt.setValue(I,"projectionMatrix",y.projectionMatrix),Tt.setValue(I,"viewMatrix",y.matrixWorldInverse);const zt=Tt.map.cameraPosition;zt!==void 0&&zt.setValue(I,ot.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),fe!==y&&(fe=y,Vn=!0,Yn=!0)}if(ct.needsLights&&(Wt.state.sunShadowMap.length>0&&Tt.setValue(I,"sunShadowMap",Wt.state.sunShadowMap,he),Wt.state.directionalShadowMap.length>0&&Tt.setValue(I,"directionalShadowMap",Wt.state.directionalShadowMap,he),Wt.state.spotShadowMap.length>0&&Tt.setValue(I,"spotShadowMap",Wt.state.spotShadowMap,he),Wt.state.pointShadowMap.length>0&&Tt.setValue(I,"pointShadowMap",Wt.state.pointShadowMap,he)),O.isSkinnedMesh){Tt.setOptional(I,O,"bindMatrix"),Tt.setOptional(I,O,"bindMatrixInverse");const Bt=O.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Tt.setValue(I,"boneTexture",Bt.boneTexture,he))}O.isBatchedMesh&&(Tt.setOptional(I,O,"batchingTexture"),Tt.setValue(I,"batchingTexture",O._matricesTexture,he),Tt.setOptional(I,O,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",O._indirectTexture,he),Tt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",O._colorsTexture,he));const Qt=R.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ve.update(O,R,dn),(Vn||ct.receiveShadow!==O.receiveShadow)&&(ct.receiveShadow=O.receiveShadow,Tt.setValue(I,"receiveShadow",O.receiveShadow)),(A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial)&&A.envMap===null&&P.environment!==null&&(Xt.envMapIntensity.value=P.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=A1()),Vn){if(Tt.setValue(I,"toneMappingExposure",F.toneMappingExposure),ct.needsLights&&C(Xt,Yn),ie&&A.fog===!0&&Fe.refreshFogUniforms(Xt,ie),Fe.refreshMaterialUniforms(Xt,A,Ze,ut,L.state.transmissionRenderTarget[y.id]),ct.needsLights&&ct.numLightProbeGrids>0){const Bt=w;let zt=0;for(const jt of L.state.lightProbeGridArray)jt.texture!==null&&(Bt.textures[zt]=jt.texture,Bt.min[zt]=jt.boundingBox.min,Bt.max[zt]=jt.boundingBox.max,Bt.resolution[zt]=jt.resolution,zt++);for(const jt in Bt)Bt[jt].length=zt;Xt.probesSH.value=Bt.textures,Xt.probesMin.value=Bt.min,Xt.probesMax.value=Bt.max,Xt.probesResolution.value=Bt.resolution}Jo.upload(I,ue(ct),Xt,he)}if(A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Jo.upload(I,ue(ct),Xt,he),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Tt.setValue(I,"center",O.center),Tt.setValue(I,"modelViewMatrix",O.modelViewMatrix),Tt.setValue(I,"normalMatrix",O.normalMatrix),Tt.setValue(I,"modelMatrix",O.matrixWorld),A.uniformsGroups!==void 0){const Bt=A.uniformsGroups;for(let zt=0,jt=Bt.length;zt<jt;zt++){const Pn=Bt[zt];me.update(Pn,dn),me.bind(Pn,dn)}}return dn}function C(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Se(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,P,R){const A=Ce.get(y);A.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,A.__autoAllocateDepthBuffer===!1&&(A.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=P,Ce.get(y.depthTexture).__webglTexture=A.__autoAllocateDepthBuffer?void 0:R,A.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){const R=Ce.get(y);R.__webglFramebuffer=P,R.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,R=0){W=y,le=P,Z=R;let A=null,O=!1,ie=!1;if(y){const de=Ce.get(y);if(de.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(I.FRAMEBUFFER,de.__webglFramebuffer),Ee.copy(y.viewport),Ke.copy(y.scissor),at=y.scissorTest,Ie.viewport(Ee),Ie.scissor(Ke),Ie.setScissorTest(at),te=-1;return}else if(de.__webglFramebuffer===void 0)he.setupRenderTarget(y);else if(de.__hasExternalTextures)he.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(de.__boundDepthTexture!==De){if(De!==null&&Ce.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(y)}}const ne=y.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(ie=!0);const Me=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[P])?A=Me[P][R]:A=Me[P],O=!0):y.samples>0&&he.useMultisampledRTT(y)===!1?A=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?A=Me[R]:A=Me,Ee.copy(y.viewport),Ke.copy(y.scissor),at=y.scissorTest}else Ee.copy(ht).multiplyScalar(Ze).floor(),Ke.copy(Mt).multiplyScalar(Ze).floor(),at=St;if(R!==0&&(A=Q),Ie.bindFramebuffer(I.FRAMEBUFFER,A)&&Ie.drawBuffers(y,A),Ie.viewport(Ee),Ie.scissor(Ke),Ie.setScissorTest(at),O){const de=Ce.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,R)}else if(ie){const de=P;for(let ne=0;ne<y.textures.length;ne++){const Me=Ce.get(y.textures[ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ne,Me.__webglTexture,R,de)}}else if(y!==null&&R!==0){const de=Ce.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,de.__webglTexture,R)}te=-1};function ae(y){const P=Ce.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=qe.textureFormatReadable(y.format),P.__typeReadable=qe.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,R,A,O,ie,pe,de=0){if(!(y&&y.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(ne=ne[pe],Array.isArray(ne)&&(ne=ne[0])),ne){Ie.bindFramebuffer(I.FRAMEBUFFER,ne);try{const Me=y.textures[de],De=Me.format,We=Me.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de);const be=ae(Me);if(be.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-A&&R>=0&&R<=y.height-O&&I.readPixels(P,R,A,O,ee.convert(De),ee.convert(We),ie)}finally{const Me=W!==null?Ce.get(W).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,P,R,A,O,ie,pe,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(ne=ne[pe],Array.isArray(ne)&&(ne=ne[0])),ne)if(P>=0&&P<=y.width-A&&R>=0&&R<=y.height-O){Ie.bindFramebuffer(I.FRAMEBUFFER,ne);const Me=y.textures[de],De=Me.format,We=Me.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de);const be=ae(Me);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(P,R,A,O,ee.convert(De),ee.convert(We),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const yt=W!==null?Ce.get(W).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,yt);const vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Mp(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Qe),I.deleteSync(vt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,R=0){const A=Math.pow(2,-R),O=Math.floor(y.image.width*A),ie=Math.floor(y.image.height*A),pe=P!==null?P.x:0,de=P!==null?P.y:0;he.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,R,0,0,pe,de,O,ie),Ie.unbindTexture()},this.copyTextureToTexture=function(y,P,R=null,A=null,O=0,ie=0){let pe,de,ne,Me,De,We,be,Qe,yt;const vt=y.isCompressedTexture?y.mipmaps[ie]:y.image;if(R!==null)pe=R.max.x-R.min.x,de=R.max.y-R.min.y,ne=R.isBox3?R.max.z-R.min.z:1,Me=R.min.x,De=R.min.y,We=R.isBox3?R.min.z:0;else{const Tt=Math.pow(2,-O);pe=Math.floor(vt.width*Tt),de=Math.floor(vt.height*Tt),y.isDataArrayTexture?ne=vt.depth:y.isData3DTexture?ne=Math.floor(vt.depth*Tt):ne=1,Me=0,De=0,We=0}A!==null?(be=A.x,Qe=A.y,yt=A.z):(be=0,Qe=0,yt=0);const Rt=ee.convert(P.format),wt=ee.convert(P.type);let ct;P.isData3DTexture?(he.setTexture3D(P,0),ct=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(he.setTexture2DArray(P,0),ct=I.TEXTURE_2D_ARRAY):(he.setTexture2D(P,0),ct=I.TEXTURE_2D),Ie.activeTexture(I.TEXTURE0),Ie.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),Ie.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Ie.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const Wt=Ie.getParameter(I.UNPACK_ROW_LENGTH),It=Ie.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=Ie.getParameter(I.UNPACK_SKIP_PIXELS),dn=Ie.getParameter(I.UNPACK_SKIP_ROWS),gi=Ie.getParameter(I.UNPACK_SKIP_IMAGES);Ie.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),Ie.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),Ie.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),Ie.pixelStorei(I.UNPACK_SKIP_ROWS,De),Ie.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Vn=y.isDataArrayTexture||y.isData3DTexture,Yn=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){const Tt=Ce.get(y),Xt=Ce.get(P),Qt=Ce.get(Tt.__renderTarget),Bt=Ce.get(Xt.__renderTarget);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let zt=0;zt<ne;zt++)Vn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,O,We+zt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.get(P).__webglTexture,ie,yt+zt)),I.blitFramebuffer(Me,De,Me+pe,De+de,be,Qe,be+pe,Qe+de,I.DEPTH_BUFFER_BIT,I.NEAREST);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Ce.has(y)){const Tt=Ce.get(y),Xt=Ce.get(P);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,B),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,se);for(let Qt=0;Qt<ne;Qt++)Vn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,O,We+Qt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,O),Yn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.__webglTexture,ie,yt+Qt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xt.__webglTexture,ie),O!==0?I.blitFramebuffer(Me,De,Me+pe,De+de,be,Qe,be+pe,Qe+de,I.COLOR_BUFFER_BIT,I.NEAREST):Yn?I.copyTexSubImage3D(ct,ie,be,Qe,yt+Qt,Me,De,pe,de):I.copyTexSubImage2D(ct,ie,be,Qe,Me,De,pe,de);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Yn?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(ct,ie,be,Qe,yt,pe,de,ne,Rt,wt,vt.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(ct,ie,be,Qe,yt,pe,de,ne,Rt,vt.data):I.texSubImage3D(ct,ie,be,Qe,yt,pe,de,ne,Rt,wt,vt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,be,Qe,pe,de,Rt,wt,vt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,be,Qe,vt.width,vt.height,Rt,vt.data):I.texSubImage2D(I.TEXTURE_2D,ie,be,Qe,pe,de,Rt,wt,vt);Ie.pixelStorei(I.UNPACK_ROW_LENGTH,Wt),Ie.pixelStorei(I.UNPACK_IMAGE_HEIGHT,It),Ie.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),Ie.pixelStorei(I.UNPACK_SKIP_ROWS,dn),Ie.pixelStorei(I.UNPACK_SKIP_IMAGES,gi),ie===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&I.generateMipmap(ct),Ie.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&he.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?he.setTextureCube(y,0):y.isData3DTexture?he.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?he.setTexture2DArray(y,0):he.setTexture2D(y,0),Ie.unbindTexture()},this.resetState=function(){le=0,Z=0,W=null,Ie.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=qt._getUnpackColorSpace()}}const zu={type:"change"},eh={type:"start"},xf={type:"end"},ko=new nr,Hu=new Bi,C1=Math.cos(70*aa.DEG2RAD),Mn=new G,Wn=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pl=1e-6;class P1 extends Nm{constructor(e,t=null){super(e,t),this.state=$t.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new cn,this._lastTargetPosition=new G,this._quat=new cn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _u,this._sphericalDelta=new _u,this._scale=1,this._panOffset=new G,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new G,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D1.bind(this),this._onPointerDown=L1.bind(this),this._onPointerUp=I1.bind(this),this._onContextMenu=z1.bind(this),this._onMouseWheel=O1.bind(this),this._onKeyDown=F1.bind(this),this._onTouchStart=B1.bind(this),this._onTouchMove=k1.bind(this),this._onMouseDown=N1.bind(this),this._onMouseMove=U1.bind(this),this._interceptControlDown=H1.bind(this),this._interceptControlUp=G1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=$t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zu),this.update(),this.state=$t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Wn:n>Math.PI&&(n-=Wn),i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=Mn.length();o=this._clampDistance(l*this._scale);const a=l-o;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),r=!!a}else if(this.object.isOrthographicCamera){const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=a!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),o=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ko.origin.copy(this.object.position),ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ko.direction))<C1?this.object.lookAt(this.target):(Hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ko.intersectPlane(Hu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pl||this._lastTargetPosition.distanceToSquared(this.target)>pl?(this.dispatchEvent(zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Mn.copy(i).sub(this.target);let r=Mn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function L1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function D1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function I1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xf),this.state=$t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function N1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=$t.DOLLY;break;case Vs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=$t.ROTATE}break;case Vs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(eh)}function U1(s){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function O1(s){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(s.preventDefault(),this.dispatchEvent(eh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(xf))}function F1(s){this.enabled!==!1&&this._handleKeyDown(s)}function B1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1){this.state=$t.NONE;break}this._handleTouchStartRotate(s),this.state=$t.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1){this.state=$t.NONE;break}this._handleTouchStartPan(s),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=$t.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(eh)}function k1(s){switch(this._trackPointer(s),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=$t.NONE}}function z1(s){this.enabled!==!1&&s.preventDefault()}function H1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function G1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V1=new Ea(-1,1,1,-1,0,1);class W1 extends nn{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}}const X1=new W1;class th{constructor(e){this._mesh=new Ut(X1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gc extends lr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=eo.clone(e.uniforms),this.material=new Gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new th(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Gu extends lr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class q1 extends lr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Y1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Be);this._width=n.width,this._height=n.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gc($o),this.copyPass.material.blending=fs,this.timer=new xm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(o instanceof Gu?n=!0:o instanceof q1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const zo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class K1 extends lr{constructor(){super(),this.isOutputPass=!0,this.uniforms=eo.clone(zo.uniforms),this.material=new Qd({name:zo.name,uniforms:this.uniforms,vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader}),this._fsQuad=new th(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===en&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ec&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Z1 extends lr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const J1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class tr extends lr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Be(e.x,e.y):new Be(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,o,{type:On,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Fn(r,o,{type:On,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Fn(r,o,{type:On,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const l=J1;this.highPassUniforms=eo.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=eo.clone($o.uniforms),this.blendMaterial=new Gn({uniforms:this.copyUniforms,vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,premultipliedAlpha:!0,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new Cn,this._fsQuad=new th(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=tr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=tr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<e;o+=2){const l=t[o],a=o+1<e?t[o+1]:0,c=l+a;i.push((o*l+(o+1)*a)/c),r.push(c)}return new Gn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}tr.BlurDirectionX=new Be(1,0);tr.BlurDirectionY=new Be(0,1);function nh(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},l=s[0].morphTargetsRelative,a=new nn;a.morphTargetsRelative=l;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}a.setIndex(d)}for(const h in r){const d=Vu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=Vu(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(p)}}}return a}function Vu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),l=new An(o,t,n);let a=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=a/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){const x=h.getComponent(f,p);l.setComponent(f+d,p,x)}}else o.set(h.array,a);a+=h.count*t}return i!==void 0&&(l.gpuType=i),l}function Wu(s,e){if(e===lp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===oc||e===Td){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===oc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const{cos:xs,sin:wi,atan2:ih,hypot:Ys,PI:us}=Math,Nt=.22,is=(s,e,t)=>{const n=s.ry;return[s.x+e*xs(n)+t*wi(n),s.z-e*wi(n)+t*xs(n)]},io=(s,e,t)=>{const n=s.ry,i=e-s.x,r=t-s.z;return[i*xs(n)-r*wi(n),i*wi(n)+r*xs(n)]},Nn=(s,e,t,n)=>ih(t-s,n-e),$1={S:[0,1],N:[0,-1],E:[1,0],W:[-1,0]};function Sr(s){const{side:e,off:t}=s.door,n=$1[e],i=e==="S"?[t,s.d/2]:e==="N"?[t,-s.d/2]:e==="E"?[s.w/2,t]:[-s.w/2,t],r=[i[0]-n[0]*1.1,i[1]-n[1]*1.1],o=[i[0]+n[0]*1.5,i[1]+n[1]*1.5];return{...s,doorLocal:i,doorN:n,inLocal:r,outLocal:o,inW:is(s,...r),outW:is(s,...o),hubW:is(s,...s.hub)}}function Ho(s){return{...s,hubW:is(s,...s.hub),entriesW:s.entries.map(e=>is(s,...e))}}const vs=[Sr({id:"war",name:"War hall",kind:"house",x:-6,z:-22,ry:.06,w:15,d:9,wallH:3,door:{side:"S",off:0,width:2.4},hub:[0,2.7],floor:"war",desc:"Where the Lead/PM plans the run and keeps the task board."}),Sr({id:"library",name:"Library",kind:"house",x:24,z:-21,ry:-.32,w:10,d:8,wallH:2.8,door:{side:"S",off:-2.2,width:1.6},hub:[-1.2,1],floor:"dark",storeys:2,upperH:2.5,desc:"Where the Reviewer checks the work. The archive is upstairs."}),Sr({id:"studio",name:"Design studio",kind:"house",x:30,z:2,ry:-1.37,w:9,d:7,wallH:2.7,door:{side:"S",off:0,width:1.6},hub:[0,1.6],floor:"light",deck:[-4.2,4.2,3.5,7.6],desc:"Where the Designer lays out pages. Paints on the terrace when free."}),Sr({id:"workshop",name:"Workshop",kind:"house",x:-27,z:-4,ry:.28,w:12,d:8,wallH:2.8,door:{side:"E",off:1,width:1.8},hub:[-.5,1.8],floor:"tiles",desc:"Where the Frontend dev and the Backend dev write code."}),Ho({id:"forge",name:"The Forge",kind:"open",x:0,z:0,ry:0,r:7.6,hub:[-5,5],entries:[[-7.3,7.3]],desc:"The furnace burns hotter the more agents are working."}),Sr({id:"tavern",name:"Tavern",kind:"house",x:20.5,z:18.6,ry:-.2,w:11,d:8,wallH:2.8,door:{side:"W",off:1.5,width:1.8},hub:[-3.6,2.6],floor:"planks",storeys:2,upperH:2.5,desc:"Where agents with no task have a drink. Rooms to sleep in upstairs."}),Ho({id:"yard",name:"Training yard",kind:"arena",x:-24,z:17,ry:0,r:7.5,gate:-.526,hub:[.5,-1.4],entries:[[4.85,-2.81],[7.71,-4.47]],desc:"Sparring and target practice between tasks."}),Ho({id:"court",name:"Courtyard",kind:"open",x:2,z:24,ry:0,r:6,hub:[-1.8,.2],entries:[[.4,.2]],desc:"The square inside the gate: the well, the market stall, the notice board."}),Ho({id:"garden",name:"Garden",kind:"open",x:-29,z:-20,ry:0,r:7.4,hub:[3.6,2.4],entries:[[5.6,4.6],[6.6,5.6]],desc:"A quiet ring of hedges around the pond."})],qn=Object.fromEntries(vs.map(s=>[s.id,s])),sn=(s,e,t,n,i,r,o={})=>({room:s,lx:e,lz:t,lry:n,pose:i,doing:r,...o}),vf={"war-table":sn("war",-.3,.9,Nn(-.3,.9,-2.5,-.6),"plan","planning at the war table"),"war-board":sn("war",3.8,-2.8,us,"point","updating the task board"),"war-rug":sn("war",-4,1.8,Nn(-4,1.8,-6.1,-2.6),"idle","thinking it over by the war chief's seat"),"lib-desk":sn("library",1.8,-1.98,0,"readsit","reviewing at the library desk",{via:[.3,-2.1]}),"lib-chair":sn("library",-2,2.3,.4,"read","reading by the armchair"),"lib-shelf":sn("library",-2.4,-2.5,us,"read","browsing the shelves"),"studio-desk":sn("studio",-2,-2.38,0,"type","drafting the layout",{via:[-.6,-2.5]}),"studio-easel":sn("studio",-2.4,6.2,Nn(-2.4,6.2,-1.5,5.3),"paint","painting on the terrace",{out:!0}),"desk-frontend":sn("workshop",-3,-2.18,0,"smash","writing code",{via:[-.5,-2.45]}),"desk-backend":sn("workshop",2,-2.18,0,"type","writing code",{via:[-.5,-2.45]}),"forge-anvil":sn("forge",-3.9,3.9,Nn(-3.9,3.9,-2.9,2.9),"spar","hammering at the anvil"),"tavern-1":sn("tavern",-3.1,.8,us/2,"drink","having a drink in the tavern"),"tavern-2":sn("tavern",-1.3,.8,-us/2,"drink","having a drink in the tavern",{via:[-1,2.1]}),"tavern-3":sn("tavern",.4,5.75,0,"drink","having a drink in the beer garden",{out:!0,via:[-6.2,5]}),"tavern-bar":sn("tavern",2.9,-.8,us/2,"idle","leaning on the bar"),"yard-1":sn("yard",-3.2,.7,0,"spar","sparring in the yard"),"yard-2":sn("yard",1.6,1.8,0,"spar","sparring in the yard"),"court-bench":sn("court",-5.2,-4,0,"sit","resting on the courtyard bench"),"court-well":sn("court",-3.9,1,Nn(-3.9,1,-5.8,2),"idle","chatting by the well"),"garden-easel":sn("garden",3,-3.4,Nn(3,-3.4,2.2,-4.3),"paint","painting in the garden"),"garden-pond":sn("garden",1.4,2.4,Nn(1.4,2.4,-1,0),"idle","watching the pond"),"fetch-designer":sn("war",2.7,-1.6,Nn(2.7,-1.6,3.8,-4.4),"idle","collecting the task scroll"),"fetch-frontend":sn("war",3.8,-1.4,Nn(3.8,-1.4,3.8,-4.4),"idle","collecting the task scroll"),"fetch-backend":sn("war",4.9,-1.6,Nn(4.9,-1.6,3.8,-4.4),"idle","collecting the task scroll"),"visit-designer":sn("studio",-3.3,-2.1,Nn(-3.3,-2.1,-2,-2.38),"read","reviewing the Designer's work",{via:[-3.4,-.6]}),"visit-frontend":sn("workshop",-4.3,-2,Nn(-4.3,-2,-3,-2.18),"read","reviewing the Frontend dev's work",{via:[-4.4,-.4]}),"visit-backend":sn("workshop",3.2,-2,Nn(3.2,-2,2,-2.18),"read","reviewing the Backend dev's work",{via:[3.4,-.4]}),"workshop-check":sn("workshop",-.5,.4,Nn(-.5,.4,-.5,-1.4),"point","checking on the devs")},di=Object.fromEntries(Object.entries(vf).map(([s,e])=>{const t=qn[e.room],[n,i]=is(t,e.lx,e.lz),r={...e,x:n,z:i,ry:e.lry+t.ry,...e.via?{viaW:is(t,...e.via)}:{},anchor:(e.out?"out:":"hub:")+e.room};return[s,r]})),Q1=Object.keys(vf),Xu={pts:[[-38,-28],[-12,-35],[18,-34],[40,-22],[45,4],[38,27],[12,35],[-8,35],[-30,30],[-43,6]],thick:1.6},qu=60,Yu=52,ds=s=>qu*Yu/Ys(Yu*xs(s),qu*wi(s))*(1+.05*wi(3*s+.7)+.035*wi(5*s+2.1)+.02*wi(9*s)),sh=[{kind:"hut",id:"barracks",name:"Barracks",desc:"Bunks and spare weapons.",floor:"planks",x:-35.2,z:5,ry:.42,w:6,d:4.4},{kind:"hut",id:"store",name:"Store house",desc:"Supplies for the keep: crates, sacks and barrels.",floor:"planks",x:-37.6,z:-9.5,ry:1.42,w:5,d:3.6},{kind:"hut",id:"stable",name:"Stable",desc:"Where the wolf mounts sleep.",floor:"planks",x:11.5,z:29.4,ry:-.08,w:6.4,d:3.6},{kind:"hut",id:"granary",name:"Granary",desc:"Grain and flour for the tavern.",floor:"planks",x:9.5,z:-27.5,ry:-.2,w:4.6,d:3.8},{kind:"windmill",x:35,z:13,r:2.6},{kind:"watch",x:36.5,z:-8.5,r:2},{kind:"shrine",x:-17.6,z:-28.4,r:2.8},{kind:"camp",x:-13.5,z:27.5,r:4.2}],Ku=(s,e,t,n,i=0)=>Array.from({length:n},(r,o)=>[s+t*xs(i+o/n*2*us),e+t*wi(i+o/n*2*us)]),Mf=(s,e=0)=>[xs(s)*(ds(s)-e),wi(s)*(ds(s)-e)],j1=[[-32.4,-19.6],[-35.6,-18],[-40,-14.4],[-45.5,-12.6],[-51,-11.8],Mf(ih(-11.4,-56),.4)],_c=Mf(ih(49,2.2)),eM=[{id:"main",w:4.4,kind:"cobble",pts:[[2,33.8],[2.6,28],[1.7,21],[.5,14.5],[0,10.4]]},{id:"ring",w:3.2,kind:"cobble",closed:!0,pts:Ku(0,0,10,16)},{id:"war",w:3.6,kind:"flag",pts:[[-.6,-10.4],[-2.8,-13.6],"out:war"]},{id:"library",w:2.3,kind:"dirt",pts:[[7.3,-7],[11.5,-11.4],[16.4,-14.6],"out:library"]},{id:"studio",w:2.2,kind:"flag",pts:[[10.3,1.2],[15.5,2.9],[20.6,2.7],"out:studio"]},{id:"tavern",w:2.8,kind:"cobble",pts:[[2.6,21.4],[7.5,21.2],[11,19.6],"out:tavern"]},{id:"workshop",w:2.8,kind:"cobble",pts:[[-10.3,-1.4],[-14.6,-3.4],"out:workshop"]},{id:"yard",w:2.3,kind:"dirt",pts:[[-7.3,7.1],[-11.6,9.8],"entry:yard"]},{id:"garden",w:1.7,kind:"dirt",pts:[[-14.6,-3.6],[-17.6,-9.4],[-20.6,-12.8],"entry:garden"]},{id:"lib-war",w:1.6,kind:"dirt",pts:[[11.3,-11.3],[5.6,-14.6],[-1.4,-15.2],[-3.2,-14.6]]},{id:"tav-studio",w:1.5,kind:"dirt",pts:[[11,19.6],[12.6,15.8],[15,11.4],[20.4,8],[24.4,4.4]]},{id:"yard-court",w:1.8,kind:"dirt",pts:[[-11.6,9.8],[-10.2,15.4],[-5.6,20.6],[-.4,22.6]]},{id:"dock",w:3.6,kind:"dirt",nav:!1,pts:[[2,36.4],[3.2,41.5],[2.4,46.2],_c]},{id:"pond",w:1.3,kind:"stones",closed:!0,pts:Ku(-30,-20,4.3,12,.3)},{id:"to-shrine",w:1.3,kind:"dirt",nav:!1,pts:[[-20.6,-12.8],[-18.6,-19],[-17.8,-25]]},{id:"to-mill",w:1.4,kind:"dirt",nav:!1,pts:[[20.4,8],[27,9.8],[32.2,12.2]]},{id:"to-watch",w:1.3,kind:"dirt",nav:!1,pts:[[16.4,-14.6],[24,-11],[30.5,-9.4],[34.2,-8.7]]},{id:"to-barracks",w:1.4,kind:"dirt",nav:!1,pts:[[-19.5,-5.1],[-18.6,-.6],[-22,3.6],[-28.6,4.6],[-32.2,6.6]]},{id:"to-stable",w:1.6,kind:"cobble",nav:!1,pts:[[3.4,30.4],[6,30.9],[7.8,29.8]]},{id:"to-granary",w:1.2,kind:"dirt",nav:!1,pts:[[5.6,-14.6],[7.6,-20],[9,-25.2]]},{id:"to-camp",w:1.3,kind:"dirt",nav:!1,pts:[[-5.6,20.6],[-9,24.4],[-10.6,25.8]]}];function tM(s){const[e,t]=s.split(":"),n=qn[t];if(e==="out"&&n.kind==="house")return n.outW;if(e==="entry"&&n.kind!=="house"){const i=n.entriesW[n.entriesW.length-1];if(i)return i}throw new Error(`no such road point: ${s}`)}function yf(s,e,t){const n=s.length,i=f=>{const u=e?s[(f%n+n)%n]:s[Math.max(0,Math.min(n-1,f))];if(!u)throw new Error("no points to sample");return u},r=[],o=e?n:n-1;for(let f=0;f<o;f++){const u=i(f-1),p=i(f),x=i(f+1),m=i(f+2),g=Math.max(6,Math.ceil(Ys(x[0]-p[0],x[1]-p[1])/.2));for(let M=0;M<g;M++){const T=M/g,w=T*T,N=w*T,L=(v,b,z,F)=>.5*(2*b+(-v+z)*T+(2*v-5*b+4*z-F)*w+(-v+3*b-3*z+F)*N);r.push([L(u[0],p[0],x[0],m[0]),L(u[1],p[1],x[1],m[1])])}}r.push(e?r[0]:i(n-1));const a=[r[0]];let c=0;for(let f=1;f<r.length;f++){const u=r[f-1],p=r[f];c+=Ys(p[0]-u[0],p[1]-u[1]),c>=t&&(a.push(p),c=0)}const h=r[r.length-1],d=a[a.length-1];return Ys(d[0]-h[0],d[1]-h[1])<t*.5?a[a.length-1]=h:a.push(h),e&&a.pop(),a}const Ti=eM.map(s=>{const e=s.pts.map(t=>typeof t=="string"?tM(t):t);return{...s,ctrl:e,refs:s.pts.map(t=>typeof t=="string"?t:null),line:yf(e,!!s.closed,.5)}}),ma=yf(j1,!1,.5);function nM(){const s={},e=(a,c,h)=>s[a]={id:a,x:c,z:h,edges:[]},t=a=>{const c=s[a];if(!c)throw new Error(`no node ${a}`);return c},n=(a,c)=>{a===c||t(a).edges.includes(c)||(t(a).edges.push(c),t(c).edges.push(a))};for(const a of vs)if(e(`hub:${a.id}`,...a.hubW),a.kind==="house")e(`in:${a.id}`,...a.inW),e(`out:${a.id}`,...a.outW),n(`hub:${a.id}`,`in:${a.id}`),n(`in:${a.id}`,`out:${a.id}`);else{let c=`hub:${a.id}`;a.entriesW.forEach((h,d)=>{const f=d===a.entriesW.length-1?`entry:${a.id}`:`e:${a.id}:${d}`;e(f,...h),n(c,f),c=f})}const i={},r={};for(const a of Ti){if(a.nav===!1)continue;const c=[],h=a.line,d=4;for(let f=0;f<h.length;f++){if(!(!a.closed&&(f===0||f===h.length-1))&&f%d!==0)continue;const p=!a.closed&&f===0?a.refs[0]:!a.closed&&f===h.length-1?a.refs[a.refs.length-1]:null,x=p||`r:${a.id}:${f}`,m=h[f];p||e(x,m[0],m[1]);const g=c[c.length-1];g!==void 0&&n(g,x),c.push(x)}a.closed&&n(c[c.length-1],c[0]),i[a.id]=c,r[a.id]=a.closed?[]:[c[0],c[c.length-1]]}const o=(a,c,h)=>{let d=null,f=1/0;for(const[u,p]of Object.entries(i))if(u!==h)for(const x of p){const m=Ys(t(x).x-a,t(x).z-c);m<f&&(f=m,d=x)}return[d,f]};for(const a of Ti)a.nav===!1||a.closed||(r[a.id]??[]).forEach((c,h)=>{if(a.refs[h===0?0:a.refs.length-1])return;const[d,f]=o(t(c).x,t(c).z,a.id);d&&f<4.5&&n(c,d)});for(const a of vs){if(a.kind==="house")continue;const c=`entry:${a.id}`;if(Ti.some(d=>d.refs.includes(c)))continue;const[h]=o(t(c).x,t(c).z,null);h&&n(c,h)}const[l]=o(...qn.garden.hubW,"garden");return l&&l.startsWith("r:pond")&&n("hub:garden",l),s}const iM=nM(),ga=s=>{const e=iM[s];if(!e)throw new Error(`no node ${s}`);return e};function sM(s,e){const t={[s]:0},n={},i=new Set([s]);for(;i.size;){let o=null;for(const a of i)(o===null||(t[a]??1/0)<(t[o]??1/0))&&(o=a);if(o===null||(i.delete(o),o===e))break;const l=ga(o);for(const a of l.edges){const c=ga(a),h=(t[o]??1/0)+Ys(l.x-c.x,l.z-c.z);(t[a]===void 0||h<t[a])&&(t[a]=h,n[a]=o,i.add(a))}}if(t[e]===void 0)return null;const r=[];for(let o=e;o!==void 0&&(r.unshift(o),o!==s);o=n[o]);return r}function rM(s,e){const t=sM(s,e);if(!t)throw new Error(`no way from ${s} to ${e}`);return t.map(n=>({x:ga(n).x,z:ga(n).z,node:n}))}function Qo(s,e){const t=di[e],n=rM(s,t.anchor);return t.viaW&&n.push({x:t.viaW[0],z:t.viaW[1]}),n.push({x:t.x,z:t.z}),n}const In={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function oM(s,e){const t=qn[s],n=t.kind==="house"?Math.max(t.w,t.d)*1.15+8:t.r*1.6+7,i=Math.hypot(e[0],e[1]),[r,o]=i>0?[e[0]/i,e[1]/i]:[.45,.9];return{target:[t.x,1,t.z],position:[t.x+r*n,n*.85,t.z+o*n]}}const xc={lead:"garden-pond",designer:"garden-easel",frontend:"yard-1",backend:"tavern-2",reviewer:"court-bench"},ps={lead:"war-table",designer:"studio-desk",frontend:"desk-frontend",backend:"desk-backend",reviewer:"lib-desk"},rh={designer:"fetch-designer",frontend:"fetch-frontend",backend:"fetch-backend"},aM={designer:"visit-designer",frontend:"visit-frontend",backend:"visit-backend"},lM="workshop-check",cM=new Set(["thinking","reading","writing","needs-you"]),hM=new Set;function uM(s,e,t){const{state:n,taskId:i}=e.agents[s],r=rh[s];return!r||!cM.has(n)?void 0:i?e.tasks.find(l=>l.id===i)?.owner===s&&!t.has(i)?r:void 0:n==="thinking"?null:void 0}function dM(s,e,t){const n=e.tasks.find(i=>i.id===t);return n?n.owner===s?(n.status==="todo"?rh[s]:void 0)??ps[s]:s==="lead"?lM:aM[n.owner]??ps[s]:ps[s]}function ml(s,e,t=!1,n=hM){const{state:i,taskId:r}=e.agents[s];if(t){const o=uM(s,e,n);if(o!==void 0)return o}switch(i){case"walking":return null;case"idle":case"done":return xc[s];case"reading":return dM(s,e,r);case"thinking":case"writing":case"waiting":case"needs-you":case"error":return ps[s]}}const fM=2.5,Zu=3e3,Ei=(s,e=Number.NEGATIVE_INFINITY)=>({spot:s,since:e,walk:null,holdUntil:null,next:null}),Sf=s=>({x:di[s].x,z:di[s].z});function pM(s,e){const t=di[s],n=t.viaW?[{x:t.viaW[0],z:t.viaW[1],leave:t.anchor}]:[];return[Sf(s),...n,...Qo(t.anchor,e)]}const mM=s=>s.slice(1).reduce((e,t,n)=>e+Math.hypot(t.x-s[n].x,t.z-s[n].z),0);function oh(s,e){let t=Math.max(0,e)/1e3*s.speed;const n=s.path;for(let r=1;r<n.length;r++){const o=n[r-1],l=n[r],a=Math.hypot(l.x-o.x,l.z-o.z);if(t<a-1e-9){const c=t/a;return{x:o.x+(l.x-o.x)*c,z:o.z+(l.z-o.z)*c,next:r,arrived:!1,heading:Math.atan2(l.x-o.x,l.z-o.z)}}t-=a}const i=n[n.length-1];return{x:i.x,z:i.z,next:n.length,arrived:!0,heading:di[s.to].ry}}function gM(s,e,t){const n=oh(s,t-s.startedAt),i={x:n.x,z:n.z},r=s.path[n.next];return r?.node?[i,...Qo(r.node,e)]:r?.leave?[i,r,...Qo(r.leave,e)]:[i,...Qo(di[s.to].anchor,e)]}function bf(s,e){return!s.walk||!oh(s.walk,e-s.walk.startedAt).arrived?s:Ei(s.walk.to,s.walk.startedAt+mM(s.walk.path)/s.walk.speed*1e3)}const wf=(s,e,t,n)=>({...Ei(s,t),walk:{path:pM(s,e),to:e,startedAt:t,speed:n}});function Ju(s,e,t,n,i,r){const o=bf(s,t);return o.walk?o.walk.to===e?o:i?Ei(e,t):{...o,walk:{path:gM(o.walk,e,t),to:e,startedAt:t,speed:n*fM}}:o.holdUntil!==null?e===o.spot?Ei(o.spot,o.since):{...o,next:e}:r&&o.spot===r&&e!==r&&t-o.since<Zu?{...o,next:e,holdUntil:o.since+Zu}:o.spot===e?o:i?Ei(e,t):wf(o.spot,e,t,n)}function $u(s,e,t,n){return s.walk?bf(s,e):s.holdUntil===null||e<s.holdUntil?s:s.next?n?Ei(s.next,e):wf(s.spot,s.next,e,t):{...s,holdUntil:null}}function _M(s,e){return s.walk?Ei(s.walk.to,e):s.holdUntil!==null?Ei(s.next??s.spot,e):s}const Qu=(s,e)=>s.holdUntil!==null&&e<s.holdUntil;function ju(s,e){if(!s.walk)return{...Sf(s.spot),heading:di[s.spot].ry,walking:!1};const{x:t,z:n,heading:i,arrived:r}=oh(s.walk,e-s.walk.startedAt);return{x:t,z:n,heading:i,walking:!r}}const{PI:Gt}=Math,ed=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function xM(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:x,rr:m,pick:g,tiled:M,instanced:T}=s,{FLAGS:w,SPINNERS:N,skull:L,horns:v,flame:b,anvil:z,weaponRack:F,brazier:q,poleBanner:re,skullPole:Q,barrel:B,well:se,bench:le,stall:Z,lampPost:W,crate:te,sack:fe,torch:Ee,dummy:Ke,target:at,hay:_e,easel:Ye,candle:st,plantFlora:ut,bunk:Ze,chest:dt,hangingBanner:Ft,table:ht,partition:Mt,wolf:St,spikes:Le,cart:Xe,fence:et,skullCandle:rt,tent:nt,signPost:ot}=e,{patch:lt}=t,{buildHouse:Ae,inH:ze,outH:ke,onWall:I}=n,je=new er({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),$e=new er({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:qe,chimneyTop:Ie,emberBase:tt}=(()=>{const ee=qn.forge,K=new Pe;K.position.set(ee.x,0,ee.z),r.add(K),r.add(i.forge);const me=-.6,Oe=new Pe;Oe.position.set(0,.16,me),K.add(Oe),Oe.add(u(f(new li(1,24,0,Gt),je,!1),0,1.05,1.705)),Oe.add(u(f(new Zt(2,1.05),je,!1),0,.53,1.705)),Oe.add(u(f(new Zt(1.4,.45),$e,!1),0,.32,1.71));{const oe=new Pe;for(let ce=0;ce<4;ce++)oe.add(u(f(new Ue(.9-ce*.08,.14,1.2-ce*.1),ce%2?o.redD:h("#5a3a2a")),0,.5+ce*.16,0));oe.add(u(f(new Ue(1,.08,1.3),o.wood),0,.45,0)),oe.add(p(u(f(new it(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,Gt/2)),Oe.add(u(oe,-2.9,0,.2))}const _=new Gi("#ff8a3a",14,16,2);_.position.set(0,1.4,2.8),Oe.add(_),Oe.updateMatrixWorld(!0);const H=Oe.localToWorld(new G(0,10.9,-.5)),X=Oe.localToWorld(new G(0,1,2));x(K,z(),-2.9,2.9,Nn(-2.9,2.9,-3.9,3.9)+Gt/2,.16);{const oe=new Pe;oe.add(u(f(new Ue(1.5,.55,.7),o.wood),0,.27,0)),oe.add(p(u(f(new Zt(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-Gt/2,0,0)),x(K,oe,3.5,3,-.5,.16)}const k=[];for(let oe=0;oe<40;oe++)k.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:g(["#2e2a2c","#3a3538","#262224"])});T(new Si(1,0),k,{});for(let oe=0;oe<6;oe++)K.add(u(f(new Kt(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));x(K,F(4),-5.3,-2,Math.atan2(5.3,2),.16),x(K,F(4),5.7,.9,-Gt/2,.16);{const oe=new Pe;oe.add(u(f(new Ue(.9,.5,.5),o.wood),0,.25,0));const ce=u(p(f(new it(.45,.45,.16,18),h("#8a8078")),0,0,Gt/2),0,.8,0);oe.add(ce),x(K,oe,-4.8,.2,.4,.16)}for(const oe of[.4,2,3.9,5.2])x(K,q(0),Math.cos(oe)*6.9,Math.sin(oe)*6.9,0,.16);return x(K,re(4),-1.9,-3.8,0,.16),x(K,re(4),1.9,-3.8,0,.16),x(K,Q(2.6),6,-3.6,0,.16),x(K,B(),-6,2,0,.16),{fireLight:_,chimneyTop:H,emberBase:X}})();{const ee=qn.court,K=new Pe;K.position.set(ee.x,0,ee.z),r.add(K),x(K,se(),-5.8,2),x(K,le(1.9,!0),-5.2,-4,0),x(K,Z(),6.2,1.2,-Gt/2);{const me=new Pe;for(const Oe of[-1,1])me.add(u(f(new Ue(.12,2.2,.12),o.woodD),Oe*.8,1.1,0));me.add(u(f(new Ue(1.8,1.1,.08),o.wood),0,1.55,0));for(let Oe=0;Oe<6;Oe++)me.add(u(p(f(new Zt(.34,.42),h(g(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+Oe%3*.6,1.8-Math.floor(Oe/3)*.5,.05));me.add(p(u(f(new Ue(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),x(K,me,5.6,-5.4,-Gt/2)}x(K,W(6),-5.8,-1),x(K,B(),8,-.6),x(K,te(.55),3.8,3.4,.3),x(K,fe(),4.4,3),x(K,Q(2.4),-7.8,6);{const me=new Pe;me.add(u(f(new Ue(1.6,.5,.6),o.wood),0,.25,0)),me.add(p(u(f(new Zt(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-Gt/2,0,0)),x(K,me,-7.6,3.6,Gt/2)}lt("dirt",ee.x-4,ee.z+.5,4.4,5.6,0,.013)}{const ee=qn.yard;if(ee.kind==="house")throw new Error("the yard is an open area");const K=ee.gate??0,me=new Pe;me.position.set(ee.x,0,ee.z),r.add(me),lt("sand",ee.x,ee.z,ee.r+.6,ee.r+.6,0,.014,5),me.add(i.yard);{const Oe=new Pe,_=Math.cos(K),H=Math.sin(K);Oe.position.set(_*ee.r,0,H*ee.r),Oe.rotation.y=Math.atan2(_,H);for(const X of[-1,1])Oe.add(u(Ee(),X*1.55,2,.24));me.add(Oe),x(me,Q(2.6),_*(ee.r+1.6)-H*2.2,H*(ee.r+1.6)+_*2.2),x(me,Q(2.2),_*(ee.r+1.6)+H*2.2,H*(ee.r+1.6)-_*2.2)}x(me,Ke(),-3.2,2.1,Gt),x(me,Ke(),1.6,3.2,Gt),x(me,at(),4.4,3.6,Math.atan2(-4.4,-3.6)),x(me,F(4),-5.4,-2.6,Math.atan2(5.4,2.6)),x(me,_e(),-5.6,3.8,.4),x(me,_e(),-4.8,4.7,1.2),x(me,p(_e(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const Oe of[2,3.4,4.6])x(me,re(3.4),Math.cos(Oe)*(ee.r-.7),Math.sin(Oe)*(ee.r-.7),Math.atan2(-Math.cos(Oe),-Math.sin(Oe)));x(me,le(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),x(me,B(),-.6,-5.8),x(me,q(0,.9),Math.cos(K)*(ee.r-1.2)-Math.sin(K)*1.8,Math.sin(K)*(ee.r-1.2)+Math.cos(K)*1.8)}const Ce={x:-30,z:-20,r:2.6,mouthA:0},he=a.ripple;he.wrapS=he.wrapT=si;const D=new xt("#1f5f8c"),S=new xt("#6fb6d2"),$=new xt("#a6d8e6"),we="#bdb3c4",ge=ee=>new Cn({map:he,color:we,vertexColors:!0,side:ln,polygonOffset:!0,polygonOffsetFactor:-1-ee,polygonOffsetUnits:-4-ee*4}),Fe=new xt;function He(ee,K,me){const Oe=Math.hypot(ee-Ce.x,K-Ce.z),_=ed(1-Oe/Ce.r);return Fe.copy(S).lerp(D,_*.95),me&&Fe.lerp($,me*ed((Oe-Ce.r)/1.2)*.45),[Fe.r*1.27,Fe.g*1.27,Fe.b*1.27]}const ye=2.2;{const Oe=[],_=[],H=[],X=[],k=(C,Se)=>{Oe.push(C,.045,Se),_.push(...He(C,Se,0)),H.push(C/ye,Se/ye)};k(Ce.x,Ce.z);for(let C=1;C<=5;C++)for(let Se=0;Se<72;Se++){const ae=Se/72*2*Gt,y=Ce.r*C/5;k(Ce.x+Math.cos(ae)*y,Ce.z+Math.sin(ae)*y)}for(let C=0;C<72;C++)X.push(0,1+(C+1)%72,1+C);for(let C=1;C<5;C++)for(let Se=0;Se<72;Se++){const ae=1+(C-1)*72+Se,y=1+(C-1)*72+(Se+1)%72,P=ae+72,R=y+72;X.push(ae,y,P,y,R,P)}const oe=new nn;oe.setAttribute("position",new Pt(Oe,3)),oe.setAttribute("color",new Pt(_,3)),oe.setAttribute("uv",new Pt(H,2)),oe.setIndex(X),r.add(f(oe,ge(0),!1));const ce=ma,Ve=ce[0],_t=Math.hypot(Ve[0]-Ce.x,Ve[1]-Ce.z),Et=(Ve[0]-Ce.x)/_t,pt=(Ve[1]-Ce.z)/_t;Ce.mouthA=Math.atan2(pt,Et);const Ct=[];for(let C=Ce.r-1.2;C<_t-.2;C+=.3)Ct.push([Ce.x+Et*C,Ce.z+pt*C]);Ct.push(...ce);const bt=.7,Je=Ce.r*Ce.r,mt=Math.sqrt(Je-1.5*1.5),Yt=Ce.r+.8,fn=-(mt/1.5)*(Yt-mt),pn=C=>{const Se=Ct[C],ae=Math.hypot(Se[0]-Ce.x,Se[1]-Ce.z);if(ae<=mt)return Math.sqrt(Math.max(0,Je-ae*ae))-.02;if(ae>=Yt)return bt;const y=(ae-mt)/(Yt-mt),P=y*y,R=P*y;return(2*R-3*P+1)*1.48+(R-2*P+y)*fn+(-2*R+3*P)*bt},E=[],U=[],V=[],J=[],ue=[-1,-.5,0,.5,1];for(let C=0;C<Ct.length;C++){const Se=Ct[Math.max(0,C-1)],ae=Ct[Math.min(Ct.length-1,C+1)],y=Ct[C],P=Math.hypot(ae[0]-Se[0],ae[1]-Se[1])||1,R=-(ae[1]-Se[1])/P,A=(ae[0]-Se[0])/P,O=pn(C);for(const ie of ue){const pe=y[0]+R*ie*O,de=y[1]+A*ie*O;E.push(pe,.05,de),U.push(...He(pe,de,Math.abs(ie))),V.push(pe/ye,de/ye)}if(C>0)for(let ie=0;ie<4;ie++){const pe=(C-1)*5+ie,de=pe+1,ne=C*5+ie,Me=ne+1;J.push(pe,ne,de,de,ne,Me)}}const Re=new nn;Re.setAttribute("position",new Pt(E,3)),Re.setAttribute("color",new Pt(U,3)),Re.setAttribute("uv",new Pt(V,2)),Re.setIndex(J),r.add(f(Re,ge(1),!1));const j=[];for(let C=1;C<Ct.length-1;C+=2){const Se=Ct[C];if(Math.hypot(Se[0]-Ce.x,Se[1]-Ce.z)<Ce.r+.9)continue;const ae=Ct[C-1],y=Ct[C+1],P=Math.hypot(y[0]-ae[0],y[1]-ae[1])||1,R=-(y[1]-ae[1])/P,A=(y[0]-ae[0])/P,O=pn(C)+.16;for(const ie of[-1,1])j.push({x:Se[0]+R*ie*O,y:.06,z:Se[1]+A*ie*O,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81","#6e665f"])})}T(new Si(1,0),j,{})}for(const ee of t.crossings){const K=i.bridge.clone();K.position.set(ee.x,0,ee.z),K.rotation.y=ee.ang,K.scale.x=(ee.len+.6)/3.4,r.add(K)}{const ee=qn.garden;if(ee.kind==="house")throw new Error("the garden is an open area");const K=new Pe;K.position.set(ee.x,0,ee.z),r.add(K);const me=Math.atan2(4.6,5.6);K.add(i.garden);{const k=Math.cos(me)*ee.r,oe=Math.sin(me)*ee.r,ce=new Pe;ce.position.set(k,0,oe),ce.rotation.y=Math.atan2(Math.cos(me),Math.sin(me)),ce.add(u(W(0).children[2].clone(),0,2.6,0)),K.add(ce)}const Oe=[],_=[];for(let k=0;k<26;k++){const oe=k/26*2*Gt;let ce=Math.abs(oe-Ce.mouthA);ce=Math.min(ce,2*Gt-ce),!(ce<.62)&&Oe.push({x:Ce.x+Math.cos(oe)*2.75,y:.08,z:Ce.z+Math.sin(oe)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:g(["#8d837a","#80766e","#968b81"])})}for(let k=0;k<7;k++)_.push({x:Ce.x+m(-1.6,1.6),y:.065,z:Ce.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:g(["#5f8a4a","#6e9452"])});T(new Si(1,0),Oe,{}),T(new it(.22,.22,.02,12),_,{}),x(K,Ye(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),x(K,le(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[k,oe]of[[-5.6,-2.2],[4.9,-.6]]){const ce=new Pe;ce.add(u(f(new it(.22,.28,.9,6),o.stone),0,.45,0)),ce.add(u(f(new Ue(.5,.36,.5),o.stone),0,1.08,0)),ce.add(u(f(new Ue(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),ce.add(u(f(new gn(.48,.36,4),o.redD),0,1.44,0)),x(K,ce,k,oe,Gt/4)}{const k=new Pe;k.add(u(f(new Ue(.9,.6,.6),o.stone),0,.3,0)),k.add(u(L(.26),0,.75,0));for(const oe of[-1,1])k.add(u(st(.18),oe*.3,.6,.12));x(K,k,-4.4,-5.4,Math.atan2(4.4,5.4))}ut("tree_willow",1,ee.x-6.2,ee.z-2.8),ut("tree_cherry",.95,ee.x+5.3,ee.z-4.9),ut("tree_fruit",.85,ee.x-3,ee.z+6.2);const H=[];let X=0;for(;H.length<90&&X<4e3;){X++;const k=m(0,2*Gt),oe=m(5.3,6.7),ce=Math.cos(k)*oe,Ve=Math.sin(k)*oe;Math.min(Math.abs(k-me),2*Gt-Math.abs(k-me))<.35||Math.hypot(ce-3,Ve+3.4)<1.3||Math.hypot(ce-2.2,Ve+4.3)<1||H.push({x:ee.x+ce,y:.18,z:ee.z+Ve,sx:.9,sy:.9,sz:.9,c:g([l.red,l.bone,"#d98a3a",l.redL,"#e8c860"])})}T(new Kt(.11,8,6),H,{})}const Te=M(a.water,1,6),Ne=[];{const ee=ma,[K,me]=ee[ee.length-1],[Oe,_]=ee[ee.length-3],H=Math.hypot(K-Oe,me-_),X=(K-Oe)/H,k=(me-_)/H,oe=new Ut(new Zt(1.4,40),new Cn({map:Te,color:"#acb5c8",transparent:!0,opacity:.85,side:ln,depthWrite:!1}));oe.position.set(K+X*.9,-20+.05,me+k*.9),oe.rotation.y=Math.atan2(X,k),r.add(oe);const ce=new ns({map:a.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let Ve=0;Ve<9;Ve++){const _t=new Xi(ce);_t.position.set(K+X*m(1,2.4),m(-38,-30),me+k*m(1,2.4)+m(-1,1)),_t.scale.setScalar(m(3,5.5)),r.add(_t),Ne.push(_t)}for(let Ve=0;Ve<4;Ve++){const _t=new Xi(ce);_t.position.set(K+X*1,m(-.6,.3),me+k*1+m(-.5,.5)),_t.scale.setScalar(m(1,1.6)),r.add(_t),Ne.push(_t)}}for(const ee of sh)if(ee.kind==="hut"){const K=Ae({...ee,wallH:2.5},{id:ee.id,pitch:.66,chimney:ee.id==="barracks"?[1.4,-.6]:null});if(ee.id==="barracks"&&(ze(K,Ze(),-1.6,-.9),ze(K,Ze(),.4,-.9),ze(K,dt(),2.2,-1.6,-Gt/2),ze(K,q(0,.7),2.3,1.2),I(K,"W",F(3),0,Nt,.3),I(K,"S",Ft(.8,1.3),1.6,Nt+2.3,.04)),ee.id==="store"){ze(K,ht(1.6,.6,.9,o.wood),-1.2,-1.3);for(let me=0;me<4;me++)ze(K,te(.45),-1.8+me*.4,-1.3).position.y=Nt+.95;ze(K,B(),1.6,-1.2),ze(K,B(.9),1.9,-.4),ze(K,fe(),.6,-1.3),ze(K,fe(),1,.6),ze(K,te(.6),-1.8,.8,.3)}if(ee.id==="stable"){const me=f(new Zt(ee.w-.6,ee.d-.6),o.straw,!1);me.rotation.x=-Gt/2,ze(K,me,0,0).position.y=Nt+.01;for(const Oe of[-1,1.2])ze(K,Mt(2.2,1.1),Oe,-.6);ze(K,St(),-2.2,-.3,.4),ze(K,St(),.1,-.5,-.5).scale.setScalar(.9),ze(K,_e(),2.4,-1,.2);{const Oe=new Pe;Oe.add(u(f(new Ue(1.2,.4,.45),o.wood),0,.2,0)),Oe.add(p(u(f(new Zt(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-Gt/2,0,0)),ze(K,Oe,2.2,1)}}if(ee.id==="granary"){for(let me=0;me<6;me++)ze(K,fe(),-1.4+me%3*.5,-1.2+Math.floor(me/3)*.55);ze(K,B(),1.5,-1.1);{const me=f(new Ue(1.2,.8,.8),o.wood);me.position.y=.4;const Oe=new Pe;Oe.add(me),Oe.add(u(f(new Ue(1.1,.05,.7),o.straw),0,.78,0)),ze(K,Oe,1.2,.7)}}ee.id==="barracks"&&(ke(K,F(4),-1.4,3.3),ke(K,Le(2.6),3.8,3,.6),ke(K,re(3),3.6,.6),ke(K,Q(2.4),-3.8,2.4)),ee.id==="store"&&(ke(K,te(.7),-1.6,2.8,.2),ke(K,te(.5),-.9,3.1,.7),ke(K,fe(),.6,2.9),ke(K,fe(),1.1,3.2),ke(K,B(),2.3,2.9)),ee.id==="stable"&&(ke(K,_e(),-2.8,2.6,.3),ke(K,_e(),-2,3,1.1),ke(K,Xe(),2,3.4,-.3),et(K.g,[[-3.2,4.4],[3.2,4.4]],.9)),ee.id==="granary"&&(ke(K,fe(),-1.2,2.6),ke(K,fe(),-.6,2.9),ke(K,fe(),-1,3.3),ke(K,B(.9),1.6,2.7))}else if(ee.kind==="windmill"){const K=new Pe;K.position.set(ee.x,0,ee.z),K.add(u(f(new it(1.7,2.4,6.6,18),h("#ffffff",{map:M(a.castleWall,3,2.2)})),0,3.3,0)),K.add(u(f(new gn(2.3,2.8,18),h("#ffffff",{map:M(a.roof,4,1.5)})),0,7.9,0)),K.add(u(f(new Ue(1,1.7,.2),o.woodD),0,.85,2.25));for(const[Oe,_]of[[.6,3.6],[-.9,4.8]])K.add(u(p(f(new Ue(.5,.6,.1),o.pane,!1),0,Oe,0),Math.sin(Oe)*2,_,Math.cos(Oe)*2));const me=u(new Pe,0,6.2,2);me.add(p(f(new it(.22,.22,.5,10),o.woodD),Gt/2,0,0));for(let Oe=0;Oe<4;Oe++){const _=new Pe;_.rotation.z=Oe*Gt/2,_.add(u(f(new Ue(.12,4.4,.08),o.woodD),0,2.3,.2)),_.add(u(f(new Ue(.9,3.4,.04),h("#e3d5b6",{side:ln})),.5,2.6,.24)),_.add(u(f(new Ue(.06,3.4,.06),o.wood),.95,2.6,.26)),me.add(_)}K.add(me),N.push({o:me,axis:"z",v:.5}),K.add(u(fe(),-1.6,0,2.6)),K.add(u(fe(),-2.2,0,2.2)),r.add(K)}else if(ee.kind==="watch"){const K=new Pe;K.position.set(ee.x,0,ee.z),K.add(i.watch),K.add(u(q(0,.7),.6,6.5,-.6)),r.add(K)}else if(ee.kind==="shrine"){const K=new Pe;K.position.set(ee.x,0,ee.z),K.add(i.altar);for(const me of[.9,2.5,4.1,5.6])K.add(u(rt(),Math.cos(me)*1.4,0,Math.sin(me)*1.4));K.add(u(q(0,.8),1.6,0,1.4)),r.add(K),lt("dirt",ee.x,ee.z,3.4,3.4,0,.013)}else{const K=new Pe;K.position.set(ee.x,0,ee.z),K.add(u(p(nt(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),K.add(u(p(nt(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let me=0;me<8;me++){const Oe=me/8*2*Gt;K.add(u(f(new Si(.18,0),o.stone),Math.cos(Oe)*.55,.1,Math.sin(Oe)*.55))}for(let me=0;me<3;me++)K.add(p(u(f(new it(.07,.07,.8,6),o.woodD),0,.12,0),Gt/2,me*1.05,0));b(K,0,.12,0,1.8);for(const me of[.6,2.4,4.4])K.add(u(p(f(new it(.2,.2,1.4,8),o.wood),0,-me,Gt/2),Math.cos(me)*1.6,.2,Math.sin(me)*1.6));K.add(u(Q(2.4),-3.2,0,-1.2)),K.add(u(B(),3.1,0,-.8)),r.add(K),lt("dirt",ee.x,ee.z,4.2,4,0,.013)}function Y(ee,K,me,Oe=.018,_=o.dark){const H=new G(...K),X=new G(...me),k=H.distanceTo(X),oe=f(new it(Oe,Oe,k,5),_,!1);return oe.position.copy(H).add(X).multiplyScalar(.5),oe.quaternion.setFromUnitVectors(c,X.clone().sub(H).normalize()),ee.add(oe),oe}function ve(){const ee=new Pe,K=f(new Kt(1,22,12,0,Gt*2,Gt/2,Gt/2),h("#ffffff",{map:a.planks}));K.scale.set(2.7,1,1.15),ee.add(K);const me=f(new it(1,1,.1,24),o.woodL);me.scale.set(2.62,1,1.1),ee.add(u(me,0,.02,0));const Oe=f(new mn(1,.06,6,36),o.woodD);Oe.rotation.x=Gt/2,Oe.scale.set(2.68,1.13,1),Oe.position.y=.14,ee.add(Oe),ee.add(p(u(f(new it(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),ee.add(u(p(L(.32),0,Gt/2,0),2.75,.32,0)),ee.add(u(p(v(.8),0,Gt/2,0),2.75,.42,0)),ee.add(u(f(new it(.07,.09,2.8,8),o.woodD),.3,1.4,0));const _=u(new Pe,.3,2.85,0);_.add(u(f(new Ue(.9,.36,.02),o.red),.45,0,0)),ee.add(_),w.push(_);const H=u(new Pe,-1.5,.06,0);H.add(u(f(new Ue(1.1,.8,1.1),h("#ffffff",{map:a.planks})),0,.4,0)),H.add(u(p(f(new it(.75,.75,1.3,3),h("#ffffff",{map:a.roof})),0,0,Gt/2),0,1.05,0)),H.add(u(f(new Ue(.3,.3,.04),o.pane,!1),.56,.5,0)),ee.add(H);const X=f(new Kt(1,24,16),h("#ffffff",{map:a.balloon}));X.scale.set(3.6,1.5,1.7),X.position.y=4.4,ee.add(X);const k=f(new mn(1,.05,6,40),o.bone);k.rotation.x=Gt/2,k.scale.set(3.62,1.72,1),k.position.y=4.1,ee.add(k);for(const[ce,Ve,_t,Et]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])Y(ee,[ce,4.05,Ve],[_t,.16,Et]);const oe=u(new Pe,-2.95,.65,0);oe.add(p(f(new it(.1,.1,.3,8),o.iron),0,0,Gt/2));for(let ce=0;ce<3;ce++){const Ve=u(new Pe,0,0,0);Ve.rotation.x=ce/3*Gt*2,Ve.add(u(p(f(new Ue(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),oe.add(Ve)}ee.add(oe),N.push({o:oe,axis:"x",v:7}),ee.add(u(f(new Ue(.06,.9,.7),o.redD),-2.75,.1,0));for(const ce of[2.4,-2.4])ee.add(u(f(new Kt(.1,8,6),d("#ffc070",2.2),!1),ce,.5,0));return ee.add(u(te(.45),1.3,.07,.4)),ee.add(u(B(.6),1.2,.07,-.45)),ee}const xe=ve(),Ge=ve();{const ee=Ti.find(Et=>Et.id==="dock");if(!ee)throw new Error("no dock road");const K=ee.line,[me,Oe]=K[K.length-1],[_,H]=K[K.length-4],X=Math.hypot(me-_,Oe-H),k=(me-_)/X,oe=(Oe-H)/X,ce=new Pe;ce.position.set(me,0,Oe),ce.rotation.y=Math.atan2(k,oe),r.add(ce),ce.add(i.dock),ce.add(u(te(.55),2.8,1.17,6.8));for(const[Et,pt]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])ce.add(u(f(new Kt(.12,8,6),d("#ffc070",2.2),!1),Et,1.32,pt));ce.add(u(te(.6),-.85,.22,1.3)),ce.add(u(te(.45),-.75,.22,2)),ce.add(u(B(.85),.85,.22,1)),ce.add(u(fe(),.6,.22,3.6)),ce.add(u(re(3.4),-1.45,.22,.4)),xe.position.set(4.1,-.4,5.6),xe.rotation.y=-Gt/2,ce.add(xe);const Ve=f(new Ue(1.6,.08,.7),o.woodL);Ve.position.set(2.3,.05,5.6),Ve.rotation.z=-.18,ce.add(Ve);const _t=u(new Pe,-4.6,0,-3.8);_t.add(u(Ee(),-.2,1.6,1.3)),_t.add(u(te(.6),1.9,0,.8)),_t.add(u(B(),1.8,0,-.4)),ce.add(_t),ce.add(u(p(ot("SKY DOCK"),0,Gt/2,0),2.2,0,-2.4)),r.add(Ge),Ge.scale.setScalar(1.5),Ge.userData={a:1.2,r:96,y:15}}{const ee=new Pe;ee.position.set(-44,0,26),r.add(ee);for(const[K,me,Oe]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])ee.add(u(p(nt(1.8,2.6,Oe),0,Math.atan2(-K,-me),0),K,0,me));for(let K=0;K<8;K++){const me=K/8*2*Gt;ee.add(u(f(new Si(.18,0),o.stone),Math.cos(me)*.55,.1,Math.sin(me)*.55))}b(ee,0,.1,0,1.8),ee.add(u(Q(2.6),3.6,0,1.8)),ee.add(u(re(3),-3.6,0,1.6)),ee.add(u(p(Le(3),0,.6,0),4.6,0,-2.6)),lt("dirt",-44,26,5,4.6,.3,.013)}return lt("field",54,-8,6.5,4.2,.35,.013,3),lt("field",51,6,5.2,3.6,-.2,.013,3),lt("field",10,-44.5,6,3.6,.1,.013,3),x(r,Ke(),55.5,-2.6,.4),x(r,_e(),48.6,-12.6,.4),x(r,_e(),49.4,-11.8,1.3),{mouthMat:je,coreMat:$e,fireLight:qe,chimneyTop:Ie,emberBase:tt,waterTex:he,fallTex:Te,mists:Ne,skyBoat:xe,airship:Ge}}const vM=[3,5,7,9,11];function MM(s){const e=[];for(let t=0;t<s;t++)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return new Gn({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}const yM=`

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

		}`,SM=`varying vec2 vUv;
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
				}`;function bM(s){s.separableBlurMaterials.forEach((e,t)=>{e.dispose(),s.separableBlurMaterials[t]=MM(vM[t]??3)}),s.materialHighPassFilter.fragmentShader=yM,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=SM,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}function wM(s){const e=new Map,t=new Map,n=s.clone();return Tf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(a){return t.get(a)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Tf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Tf(s.children[n],e.children[n],t)}class Ef extends or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new td(t,Vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new td(t,Vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new VM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Br.extractUrlBase(e);o=Br.resolveURL(c,this.path)}else o=Br.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},a=new sf(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},l={},a=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Af){try{o[Vt.KHR_BINARY_GLTF]=new WM(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Vt.KHR_MATERIALS_UNLIT:o[d]=new AM;break;case Vt.KHR_DRACO_MESH_COMPRESSION:o[d]=new XM(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:o[d]=new qM;break;case Vt.KHR_MESH_QUANTIZATION:o[d]=new YM;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function TM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function un(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class EM{constructor(e){this.parser=e,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new xt(16777215);a.color!==void 0&&h.setRGB(a.color[0],a.color[1],a.color[2],Qn);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new of(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gi(h),c.distance=d;break;case"spot":c=new fm(h),c.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),vi(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return n._getNodeRef(t.cache,l,a)})}}class AM{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const i=[];e.color=new xt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,xn))}return Promise.all(i)}}class RM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class CM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(i)}}class PM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class LM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class DM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class IM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new xt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Qn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class NM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class UM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new xt().setRGB(r[0],r[1],r[2],Qn),Promise.all(i)}}class OM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class FM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new xt().setRGB(r[0],r[1],r[2],Qn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xn)),Promise.all(i)}}class BM{constructor(e){this.parser=e,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class kM{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return un(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class zM{constructor(e){this.parser=e,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class HM{constructor(e){this.parser=e,this.name=Vt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class GM{constructor(e){this.parser=e,this.name=Vt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class td{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(l,a,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class VM{constructor(e){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],a={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(h=>(a[c]=h,a[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const x=new Lt,m=new G,g=new cn,M=new G(1,1,1),T=new Kr(p.geometry,p.material,f);for(let N=0;N<f;N++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,N),a.ROTATION&&g.fromBufferAttribute(a.ROTATION,N),a.SCALE&&M.fromBufferAttribute(a.SCALE,N),T.setMatrixAt(N,x.compose(m,g,M));let w=null;for(const N in a)if(N==="_COLOR_0"){const L=a[N];T.instanceColor=new la(L.array,L.itemSize,L.normalized)}else if(N!=="TRANSLATION"&&N!=="ROTATION"&&N!=="SCALE"){if(w===null){const v=T.geometry;w=new nn,w.name=v.name;for(const b in v.attributes)w.setAttribute(b,v.attributes[b]);for(const b in v.morphAttributes)w.morphAttributes[b]=v.morphAttributes[b];v.index!==null&&w.setIndex(v.index),w.morphTargetsRelative=v.morphTargetsRelative;for(const b of v.groups)w.addGroup(b.start,b.count,b.materialIndex);v.boundingBox!==null&&(w.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(w.boundingSphere=v.boundingSphere.clone()),w.drawRange.start=v.drawRange.start,w.drawRange.count=v.drawRange.count,w.userData=Object.assign({},v.userData),T.geometry=w}const L=a[N];w.setAttribute(N,new la(L.array,L.itemSize,L.normalized))}an.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),u.push(T)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Af="glTF",br=12,nd={JSON:1313821514,BIN:5130562};class WM{constructor(e){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-br,r=new DataView(e,br);let o=0;for(;o<i;){const l=r.getUint32(o,!0);o+=4;const a=r.getUint32(o,!0);if(o+=4,a===nd.JSON){const c=new Uint8Array(e,br+o,l);this.content=n.decode(c)}else if(a===nd.BIN){const c=br+o;this.body=e.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},a={},c={};for(const h in o){const d=vc[h]||h.toLowerCase();l[d]=o[h]}for(const h in e.attributes){const d=vc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],u=Ks[f.componentType];c[d]=u.name,a[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const x=u.attributes[p],m=a[p];m!==void 0&&(x.normalized=m)}d(u)},l,c,Qn,f)})})}}class qM{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class YM{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Rf extends ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=l*2,c=l*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*c,x=p-c,m=-2*u+3*f,g=u-f,M=1-m,T=g-f+d;for(let w=0;w!==l;w++){const N=o[x+w+l],L=o[x+w+a]*h,v=o[p+w+l],b=o[p+w]*h;r[w]=M*N+T*L+m*v+g*b}return r}}const KM=new cn;class ZM extends Rf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return KM.fromArray(r).normalize().toArray(r),r}}const ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},id={9728:vn,9729:Rn,9984:xd,9985:Wo,9986:Er,9987:bi},sd={33071:Hn,33648:ta,10497:si},gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JM={CUBICSPLINE:void 0,LINEAR:Vr,STEP:Gr},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $M(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ss})),s.DefaultMaterial}function hs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],l=[],a=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;l.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;a.push(f)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function jM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ey(s){let e;const t=s.extensions&&s.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xl(t.attributes):e=s.indices+":"+xl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xl(s.targets[n]);return e}function xl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ty(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ny=new Lt;class iy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const a=l.match(/Version\/(\d+)/);i=n&&a?parseInt(a[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new hm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new gm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hs(r,l,i),vi(l,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let l=0,a=o.length;l<a;l++)e[o[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,l)=>{const a=this.associations.get(o);a!=null&&this.associations.set(l,a);for(const[c,h]of o.children.entries())r(h,l.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Br.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=gl[i.type],l=Ks[i.componentType],a=i.normalized===!0,c=new l(i.count*o);return Promise.resolve(new An(c,o,a))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],a=gl[i.type],c=Ks[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*a,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(u&&u!==d){const g=Math.floor(f/u),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=t.cache.get(M);T||(x=new c(l,g*u,i.count*u/h),T=new Od(x,u/h),t.cache.add(M,T)),m=new Yr(T,a,f%u/h,p)}else l===null?x=new c(i.count*a):x=new c(l,f,i.count*a),m=new An(x,a,p);if(i.sparse!==void 0){const g=gl.SCALAR,M=Ks[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,N=new M(o[1],T,i.sparse.count*g),L=new c(o[2],w,i.sparse.count*a);l!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,b=N.length;v<b;v++){const z=N[v];if(m.setX(z,L[v*a]),a>=2&&m.setY(z,L[v*a+1]),a>=3&&m.setZ(z,L[v*a+2]),a>=4&&m.setW(z,L[v*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const a=n.manager.getHandler(o.uri);a!==null&&(l=a)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],l=r.images[t],a=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=id[f.magFilter]||Rn,h.minFilter=id[f.minFilter]||bi,h.wrapS=sd[f.wrapS]||si,h.wrapT=sd[f.wrapT]||si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==vn&&h.minFilter!==Rn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],l=self.URL||self.webkitURL;let a=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(o.bufferView!==void 0)a=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return a=l.createObjectURL(u),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(a).then(function(f){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(m){const g=new Sn(m);g.needsUpdate=!0,u(g)}),t.load(Br.resolveURL(f,r.path),x,void 0,p)})})}const d=h.then(function(f){return c===!0&&l.revokeObjectURL(a),vi(f,o),f.userData.mimeType=o.mimeType||ty(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=r.associations.get(o);o=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,a)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Ur,$n.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(l,a)),n=a}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new kd,$n.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(l,a)),n=a}if(i||r||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=n.clone(),r&&(a.vertexColors=!0),o&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return er}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const l={},a=r.extensions||{},c=[];if(a[Vt.KHR_MATERIALS_UNLIT]){const d=i[Vt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(l,r,t))}else{const d=r.pbrMetallicRoughness||{};if(l.color=new xt(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],Qn),l.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",d.baseColorTexture,xn)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=ln);const h=r.alphaMode||_l.OPAQUE;if(h===_l.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===_l.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;l.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const d=r.emissiveFactor;l.emissive=new xt().setRGB(d[0],d[1],d[2],Qn)}return r.emissiveTexture!==void 0&&o!==Cn&&c.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,xn)),Promise.all(c).then(function(){const d=new o(l);return r.name&&(d.name=r.name),vi(d,r),t.associations.set(d,{materials:e}),r.extensions&&hs(i,d,r),d})}createUniqueName(e){const t=tn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return rd(a,l,t)})}const o=[];for(let l=0,a=e.length;l<a;l++){const c=e[l],h=ey(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=rd(new nn,c,t),c.mode===ti.TRIANGLE_STRIP?f=f.then(u=>Wu(u,Td)):c.mode===ti.TRIANGLE_FAN&&(f=f.then(u=>Wu(u,oc))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let a=0,c=o.length;a<c;a++){const h=o[a].material===void 0?$M(this.cache):this.getDependency("material",o[a].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const x=h[u],m=o[u];let g;const M=c[u];if(m.mode===ti.TRIANGLES||m.mode===ti.TRIANGLE_STRIP||m.mode===ti.TRIANGLE_FAN||m.mode===void 0){const T=r.isSkinnedMesh===!0,w=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");T&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&w?new r0(x,M):new Ut(x,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ti.LINES)g=new c0(x,M);else if(m.mode===ti.LINE_STRIP)g=new Wc(x,M);else if(m.mode===ti.LINE_LOOP)g=new h0(x,M);else if(m.mode===ti.POINTS)g=new Ar(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&jM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),vi(g,r),m.extensions&&hs(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&hs(i,d[0],r),d[0];const f=new Pe;r.extensions&&hs(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xn(aa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ea(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,l=[],a=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){l.push(d);const f=new Lt;r!==null&&f.fromArray(r.array,c*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Gc(l,a)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],l=[],a=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],x=u.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",M)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let T=0,w=f.length;T<w;T++){const N=f[T],L=u[T],v=p[T],b=x[T],z=m[T];if(N===void 0)continue;N.updateMatrix&&N.updateMatrix();const F=n._createAnimationTracks(N,L,v,b,z);if(F)for(let q=0;q<F.length;q++)g.push(F[q])}const M=new dc(r,void 0,g);return vi(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let a=0,c=i.weights.length;a<c;a++)l.morphTargetInfluences[a]=i.weights[a]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=i.children||[];for(let c=0,h=l.length;c<h;c++)o.push(n.getDependency("node",l[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),a]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,ny)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new G().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",l=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&l.push(a),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let h;if(r.isBone===!0?h=new Bd:c.length>1?h=new Pe:c.length===1?h=c[0]:h=new an,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),vi(h,r),r.extensions&&hs(n,h,r),r.matrix!==void 0){const d=new Lt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pe;n.name&&(r.name=i.createUniqueName(n.name)),vi(r,n),n.extensions&&hs(t,r,n);const o=n.nodes||[],l=[];for(let a=0,c=o.length;a<c;a++)l.push(i.getDependency("node",o[a]));return Promise.all(l).then(function(a){for(let h=0,d=a.length;h<d;h++){const f=a[h];f.parent!==null?r.add(wM(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof $n||f instanceof Sn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],l=e.name?e.name:e.uuid,a=[];function c(u){u.morphTargetInfluences&&a.push(u.name?u.name:u.uuid)}Qi[r.path]===Qi.weights?(c(e),e.isGroup&&e.children.forEach(c)):a.push(l);let h;switch(Qi[r.path]){case Qi.weights:h=to;break;case Qi.rotation:h=no;break;case Qi.translation:case Qi.scale:h=fa;break;default:n.itemSize===1?h=to:h=fa;break}const d=i.interpolation!==void 0?JM[i.interpolation]:Vr,f=this._getArrayFromAccessor(n);for(let u=0,p=a.length;u<p;u++){const x=new h(a[u]+"."+Qi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof no?ZM:Rf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sy(s,e,t){const n=e.attributes,i=new Ri;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],a=l.min,c=l.max;if(a!==void 0&&c!==void 0){if(i.set(new G(a[0],a[1],a[2]),new G(c[0],c[1],c[2])),l.normalized){const h=Mc(Ks[l.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new G,a=new G;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const x=Mc(Ks[f.componentType]);a.multiplyScalar(x)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const o=new Ci;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function rd(s,e,t){const n=e.attributes,i=[];function r(o,l){return t.getDependency("accessor",o).then(function(a){s.setAttribute(l,a)})}for(const o in n){const l=vc[o]||o.toLowerCase();l in s.attributes||i.push(r(n[o],l))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(o)}return qt.workingColorSpace!==Qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qt.workingColorSpace}" not supported.`),vi(s,e),sy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QM(s,e.targets,t):s})}const ry="/assets/altar-BLnKV2Du.glb",oy="/assets/backend-0N1rHeCk.glb",ay="/assets/bridge-ETZK_L1i.glb",ly="/assets/designer-DbLc0S5w.glb",cy="/assets/dock-Dz4b5cxY.glb",hy="/assets/flora-7jxy9LaY.glb",uy="/assets/forge-DNia5kCh.glb",dy="/assets/frontend-BagVIkFr.glb",fy="/assets/garden-iFD0puy8.glb",py="/assets/gate-CLzj2aEg.glb",my="/assets/house_library-a_INcIO_.glb",gy="/assets/house_studio-prPn7xt-.glb",_y="/assets/house_tavern-DhJciONJ.glb",xy="/assets/house_war-CErgsJUC.glb",vy="/assets/house_workshop-DizOAfBl.glb",My="/assets/lead-B8dKTGTU.glb",yy="/assets/reviewer-CjFLqSzL.glb",Sy="/assets/towers-DiePBDd1.glb",by="/assets/underside-CtDt-w8A.glb",wy="/assets/walls-DL6hLM5P.glb",Ty="/assets/watch-D_FLfKo1.glb",Ey="/assets/yard-BCXHtimJ.glb",Ay="/assets/backend-BO6EdEPd.jpg",Ry="/assets/designer-3Dfjr5eY.jpg",Cy="/assets/frontend-ChC8gXK4.jpg",Py="/assets/lead-BVut_pmU.jpg",Ly="/assets/reviewer-r8WJ7XTx.jpg",Dy=Object.assign({"../models/altar.glb":ry,"../models/backend.glb":oy,"../models/bridge.glb":ay,"../models/designer.glb":ly,"../models/dock.glb":cy,"../models/flora.glb":hy,"../models/forge.glb":uy,"../models/frontend.glb":dy,"../models/garden.glb":fy,"../models/gate.glb":py,"../models/house_library.glb":my,"../models/house_studio.glb":gy,"../models/house_tavern.glb":_y,"../models/house_war.glb":xy,"../models/house_workshop.glb":vy,"../models/lead.glb":My,"../models/reviewer.glb":yy,"../models/towers.glb":Sy,"../models/underside.glb":by,"../models/walls.glb":wy,"../models/watch.glb":Ty,"../models/yard.glb":Ey}),yc={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"},ts=["lead","designer","frontend","backend","reviewer"],Iy=Object.assign({"../models/backend.jpg":Ay,"../models/designer.jpg":Ry,"../models/frontend.jpg":Cy,"../models/lead.jpg":Py,"../models/reviewer.jpg":Ly});function ah(s){const e=Dy[`../models/${s}.glb`];if(!e)throw new Error(`no model ${s} in the bundle`);return e}function Ny(s){const e=Iy[`../models/${s}`];if(!e)throw new Error(`no texture ${s} in the bundle`);return e}const vl=new Lt,Uy=new Lt;function Cf(s){const e=new Set;return s.scene.traverse(t=>{const n=t.userData.woa_q;if(n&&(vl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),t.matrix.compose(t.position,t.quaternion,t.scale).multiply(Uy.copy(vl).invert()),t.matrix.decompose(t.position,t.quaternion,t.scale)),!(t instanceof Ut)||e.has(t.geometry))return;const i=t.geometry;e.add(i);for(const[o,l]of Object.entries(i.attributes)){if(o==="skinIndex"||l.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in l))continue;const a=l.itemSize,c=new Float32Array(l.count*a);for(let h=0;h<l.count;h++)c[h*a]=l.getX(h),a>1&&(c[h*a+1]=l.getY(h)),a>2&&(c[h*a+2]=l.getZ(h)),a>3&&(c[h*a+3]=l.getW(h));i.setAttribute(o,new An(c,a))}const r=n||t.parent?.userData.woa_q;r&&i.applyMatrix4(vl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function Pf(s,e){const t=e,n=t.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((t.emissiveIntensity||1)*40)/100)):s.toon("#"+t.color.getHexString())}const Oy=s=>s.isMeshStandardMaterial===!0;function Lf(s,e){const t=new Map;return e.traverse(n=>{if(!(n instanceof Ut))return;const i=Pf(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const a of Object.keys(o.attributes))a!=="position"&&a!=="normal"&&o.deleteAttribute(a);o.applyMatrix4(n.matrixWorld);const l=t.get(i);l?l.push(o):t.set(i,[o])}),t}function Fy(s,e){e.scene.updateMatrixWorld(!0);const t=new Pe;for(const[n,i]of Lf(s,e.scene)){const r=i.length===1?i[0]:nh(i,!1);if(!r)continue;const o=new Ut(r,n);o.castShadow=!Oy(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o)}return t}function Df(s,e){let t=null;return s.scene.traverse(n=>{!t&&(n.userData.name===e||n.name===e)&&(t=n)}),t}async function By(){const s=new Ef,e=Object.keys(yc),t=await Promise.all(e.map(n=>s.loadAsync(ah(n)).then(Cf)));return Object.fromEntries(e.map((n,i)=>[n,t[i]]))}function ky(s,e){const t={};for(const n of Object.keys(yc)){const i=e[n];t[n]=yc[n]==="static"?Fy(s,i):i}return t}const jo={lead:{H:1.32,hipY:.6,speed:2.4},designer:{H:1.78,hipY:.9,speed:2.35},frontend:{H:1.92,hipY:.98,speed:2.3},backend:{H:2.18,hipY:1.06,speed:2.25},reviewer:{H:1.95,hipY:.98,speed:2.1}};function zy(s,e){const t=.075*s/1.8,n=(e-t)*.5;return Math.max(.5,n+t-.02)}const Hy={walk:"walk",type:"play_mobile_game",smash:"play_mobile_game",sit:"sit",readsit:"sit",drink:"sit"},Ml={intensity:2.5,distance:4},If=new Set(["type","smash","readsit","sit","drink"]),Gy=.59;function Vy(s){const e=ah(s),t=new nf;return t.setURLModifier(n=>n===e?n:Ny(n.slice(n.lastIndexOf("/")+1))),new Ef(t)}async function Wy(){const s=await Promise.all(ts.map(e=>Vy(e).loadAsync(ah(e)).then(Cf)));return s.forEach((e,t)=>{e.scene.traverse(n=>{if(n instanceof Ut&&!n.material.map)throw new Error(`the ${ts[t]} model's texture did not load`)})}),Object.fromEntries(ts.map((e,t)=>[e,s[t]]))}function Xy(s){const e=vs.filter(n=>n.kind==="house"),t=qn.forge;return(n,i)=>{for(const r of e){const[o,l]=io(r,n,i);if(Math.abs(o)<r.w/2+.1&&Math.abs(l)<r.d/2+.1)return Nt;if(r.deck&&o>r.deck[0]&&o<r.deck[1]&&l>r.deck[2]&&l<r.deck[3])return .2}if(Math.hypot(n-t.x,i-t.z)<7.8)return .16;for(const r of s){const o=n-r.x,l=i-r.z,a=(r.len+.6)/2,c=o*Math.cos(r.ang)-l*Math.sin(r.ang),h=o*Math.sin(r.ang)+l*Math.cos(r.ang);if(Math.abs(c)<a&&Math.abs(h)<.6)return .12+.32*(1-(c/a)**2)}return .02}}const qy=.055,_a=new G,Lr=new G,od=new G,Yy=new G,ea=new G,yl=new G,Ky=new G,ad=new cn,ld=new cn,xa=new cn,cd=new cn,Sl=new Im;function hd(s,e,t){ad.setFromUnitVectors(e,t),s.getWorldQuaternion(ld),s.parent.getWorldQuaternion(xa).invert(),s.quaternion.copy(xa.multiply(ad).multiply(ld)),s.updateMatrixWorld(!0)}function Zy(s,e,t,n){const i=s.up.getWorldPosition(Lr),r=s.low.getWorldPosition(od),o=s.foot.getWorldPosition(_a);s.foot.getWorldQuaternion(cd);const l=i.distanceTo(r),a=r.distanceTo(o),c=ea.set(o.x,e+t,o.z).sub(i),h=aa.clamp(c.length(),Math.abs(l-a)+1e-4,l+a-1e-4);c.normalize();const d=yl.subVectors(r,i);if(d.addScaledVector(c,-d.dot(c)),d.lengthSq()<1e-10)return;d.normalize();const f=aa.clamp((l*l+h*h-a*a)/(2*l*h),-1,1),u=Ky.copy(i).addScaledVector(c,l*f).addScaledVector(d,l*Math.sqrt(1-f*f)),p=Yy.copy(i).addScaledVector(c,h);hd(s.up,yl.subVectors(r,i).normalize(),ea.subVectors(u,i).normalize());const x=s.low.getWorldPosition(od),m=s.foot.getWorldPosition(_a);hd(s.low,yl.subVectors(m,x).normalize(),ea.subVectors(p,x).normalize()),s.foot.parent.getWorldQuaternion(xa).invert(),s.foot.quaternion.copy(xa.multiply(cd)),n<1&&(s.up.quaternion.slerpQuaternions(s.saved[0],s.up.quaternion,n),s.low.quaternion.slerpQuaternions(s.saved[1],s.low.quaternion,n),s.foot.quaternion.slerpQuaternions(s.saved[2],s.foot.quaternion,n)),s.up.updateMatrixWorld(!0)}function Jy(s,e,t,n){const{toon:i}=s,r=n.reducedMotion,o={};for(const d of ts){const f=new Pe;f.userData.agentId=d,e.add(f);const u=di[n.start[d]];f.position.set(u.x,n.groundY(u.x,u.z),u.z),f.rotation.y=u.ry;const{H:p,hipY:x,speed:m}=jo[d],g=t[d],M=g.scene;M.updateMatrixWorld(!0);const T=new Ri().setFromObject(M),w=p/Math.max(.01,T.max.y-T.min.y);M.scale.setScalar(w);const N=-T.min.y*w;M.position.y=N;const L=new Map;M.traverse(W=>{if(!(W instanceof Ut))return;const te=W.material;let fe=L.get(te);fe||(te.map&&(te.map.colorSpace=xn),fe=i("#ffffff",{map:te.map??null}),L.set(te,fe)),W.material=fe,W.castShadow=!0,W.receiveShadow=!0,W.frustumCulled=!1,W.raycast=()=>{}});let v=null,b=null;if(d==="reviewer"){v=new Gi("#6dffa0",Ml.intensity,Ml.distance,2),v.position.set(-.18,2.2,.35),f.add(v);const W=M.getObjectByName("mixamorigRightHand");if(!W)throw new Error("the reviewer model has no right hand");const te=new Pe,fe=new Pe;te.add(fe);const Ee=new Xi(new ns({map:n.flameTex,color:new xt(.6,2.4,1.2),transparent:!0,depthWrite:!1,toneMapped:!1}));Ee.center.set(.5,.05),Ee.scale.set(.16,.3,1),Ee.position.y=.02;const Ke=new Xi(new ns({map:s.TEX.soft,color:"#5effa0",transparent:!0,opacity:.55,depthWrite:!1,blending:yi}));Ke.scale.setScalar(.25),Ke.position.y=.08,Ee.raycast=()=>{},Ke.raycast=()=>{},fe.add(Ee,Ke),W.add(te),M.updateMatrixWorld(!0),te.scale.setScalar(1/W.getWorldScale(new G).x),b={group:te,flicker:fe}}const z={};for(const W of g.animations){const te=W.tracks.find(fe=>/Hips\.position$/.test(fe.name));te&&(z[W.name]=te.values[1]*w)}const F=new Dm(M),q={};for(const W of g.animations){const te=F.clipAction(W);te.enabled=!0,te.setEffectiveTimeScale(1),te.setEffectiveWeight(W.name==="idle"?1:0),te.time=Math.random()*W.duration,te.play(),q[W.name]=te}if(!q.idle||!q.walk||!q.sit||!q.play_mobile_game)throw new Error(`the ${d} model lacks one of its four clips`);const re=Math.min(2.6,Math.max(.8,m/(Gy*p)));q.walk.timeScale=re,F.update(0);const Q=W=>M.getObjectByName("mixamorig"+W),B=["Left","Right"].map(W=>({up:Q(W+"UpLeg"),low:Q(W+"Leg"),foot:Q(W+"Foot")}));M.updateMatrixWorld(!0);const se=B.every(W=>W.up&&W.low&&W.foot)?B.map(W=>({up:W.up,low:W.low,foot:W.foot,saved:[new cn,new cn,new cn]})):null,le=se?Math.min(...se.map(W=>W.foot.getWorldPosition(_a).y)):0,Z=Q("Hips");if(!Z)throw new Error(`the ${d} model has no hips`);f.add(M),o[d]={id:d,root:f,H:p,seatY:zy(p,x),phase:n.phases[d],model:{obj:M,mixer:F,acts:q,cur:"idle",baseY:N,walkScale:re,seat:z,hips:Z,legs:se,ankleH:le,bent:!1,ikW:0},lantern:v,lamp:b}}const l=new Map;function a(d,f,u,p){const x=l.get(d);if(x!==void 0)return x;const m=[];for(const[M,T]of[[0,0],[.05,0],[-.05,0],[0,.05],[0,-.05]]){Sl.set(_a.set(f+M,p+1.2,u+T),ea.set(0,-1,0)),Sl.far=1.3;for(const w of Sl.intersectObjects(e.children,!0)){let N=!1,L=!0;for(let z=w.object;z;z=z.parent)z.userData.agentId&&(N=!0),z.visible||(L=!1);const v=w.point.y-p,b=w.object;if(!N&&L&&b.isMesh&&!b.material.transparent&&v>.25&&v<.66){m.push(v);break}}}const g=m.length?Math.max(...m):null;return l.set(d,g),g}function c(d,f,u,p,x=1){const m=d.model;if(m.bent&&m.legs)for(const F of m.legs)F.up.quaternion.copy(F.saved[0]),F.low.quaternion.copy(F.saved[1]),F.foot.quaternion.copy(F.saved[2]);m.bent=!1;const g=Hy[f],M=g&&m.acts[g]?g:"idle";if(M!==m.cur){const F=m.acts[m.cur],q=m.acts[M];q.enabled=!0,q.setEffectiveWeight(1),q.time=0,r?F.setEffectiveWeight(0):F.crossFadeTo(q,.3,!1),m.cur=M}M==="walk"&&(m.acts.walk.timeScale=Math.min(2.6,m.walkScale*x)),m.mixer.update(r?0:u);const T=M!=="walk"&&M!=="idle";let w=null;const N=n.groundY(d.root.position.x,d.root.position.z);if(T&&p&&m.legs&&m.acts[M].getEffectiveWeight()>.99){m.obj.updateWorldMatrix(!0,!0);const F=m.hips.getWorldPosition(Lr);w=a(p+"|"+d.id,F.x,F.z,N)}let L=m.baseY,v=0,b=0;if(w!==null){L=m.obj.position.y+(N+w+qy*d.H)-Lr.y;const F=d.root.rotation.y,q=Math.cos(F),re=Math.sin(F),Q=d.root.position.x-Lr.x,B=d.root.position.z-Lr.z;v=m.obj.position.x+Q*q-B*re,b=m.obj.position.z+Q*re+B*q}else T&&m.seat[M]!==void 0&&(L=m.baseY+Math.max(-.22,Math.min(0,d.seatY-m.baseY-m.seat[M])));const z=r?1:Math.min(1,u*8);if(m.obj.position.x+=(v-m.obj.position.x)*z,m.obj.position.y+=(L-m.obj.position.y)*z,m.obj.position.z+=(b-m.obj.position.z)*z,m.ikW=w===null?0:Math.min(1,m.ikW+(r?1:u/.3)),w!==null&&m.legs){m.obj.updateWorldMatrix(!0,!0);for(const F of m.legs)F.saved[0].copy(F.up.quaternion),F.saved[1].copy(F.low.quaternion),F.saved[2].copy(F.foot.quaternion),Zy(F,N,m.ankleH,m.ikW);m.bent=!0}}function h(d,f,u){if(!(!d.lantern||!d.lamp)){if(!r){const p=1+Math.sin(u*11+d.phase)*.14+Math.sin(u*27)*.07;d.lantern.intensity=!If.has(f)&&f!=="read"?Ml.intensity*p:0,d.lamp.flicker.scale.set(1/Math.sqrt(p),p,1)}d.lamp.group.visible=d.lantern.intensity>0}}return{actors:o,drive:c,lanternFor:h}}const wr=new G;function ei(s,e,t,n,i,r){const o=2*Math.PI*i/4,l=Math.max(r-2*i,0),a=Math.PI/4;wr.copy(e),wr[n]=0,wr.normalize();const c=.5*o/(o+l),h=1-wr.angleTo(s)/a;return Math.sign(wr[t])===1?h*c:l/(o+l)+c+c*(1-h)}class Ca extends Ue{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const a=new G,c=new G,h=new G(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new G,m=.5/o;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(a.fromArray(d,g),c.copy(a),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(a.x)+c.x*r,d[g+1]=h.y*Math.sign(a.y)+c.y*r,d[g+2]=h.z*Math.sign(a.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[M+0]=ei(x,c,"z","y",r,n),u[M+1]=1-ei(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[M+0]=1-ei(x,c,"z","y",r,n),u[M+1]=1-ei(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[M+0]=1-ei(x,c,"x","z",r,e),u[M+1]=ei(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[M+0]=1-ei(x,c,"x","z",r,e),u[M+1]=1-ei(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[M+0]=1-ei(x,c,"x","y",r,e),u[M+1]=1-ei(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[M+0]=ei(x,c,"x","y",r,e),u[M+1]=1-ei(x,c,"y","x",r,t);break}}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.segments,e.radius)}}const $y="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:Fi}=Math,Sc='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function Qy(){const s=new FontFace("M PLUS Rounded 1c",`url("${$y}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const kn={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function jy(s,e,t,n){s.setPixelRatio(Math.min(n,2)),s.setSize(e,t),s.shadowMap.enabled=!0,s.shadowMap.type=Dr,s.toneMapping=Ma,s.toneMappingExposure=.95}function ud(s){let e=s;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function eS(s,e){const t=new ba(new Uint8Array([70,150,255]),3,1,ya);t.minFilter=t.magFilter=vn,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Cn({color:2824987,side:Un}),i=0,r=1,o=new G(0,1,0),l={uRimColor:{value:new xt("#ffd2a6")},uRimAmt:{value:.45}};function a(_){return _.onBeforeCompile=H=>{H.uniforms.uRimColor=l.uRimColor,H.uniforms.uRimAmt=l.uRimAmt,H.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+H.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},_.customProgramCacheKey=()=>"rim1",_}const c=new Map;function h(_,H){if(!H){let X=c.get(_);return X||(X=a(new Zo({color:_,gradientMap:t})),c.set(_,X)),X}return a(new Zo(Object.assign({color:_,gradientMap:t},H)))}const d=new Map;function f(_,H=2){const X=_+H;let k=d.get(X);return k||(k=new er({color:0,emissive:_,emissiveIntensity:H,roughness:1}),d.set(X,k)),k}function u(_,H,X=!0){H&&H.userData.autoUV&&_.attributes.uv&&!_.userData.planar&&(_.type==="BoxGeometry"||_.type==="RoundedBoxGeometry")&&(q(_,.9),_.userData.planar=!0);const k=new Ut(_,H);return k.castShadow=X,k.receiveShadow=!0,k}const p=(_,H,X,k=.03)=>new Ca(_,H,X,2,Math.min(k,_/2.1,H/2.1,X/2.1));function x(_,H,X=i,k=!0){const oe=u(_,H,k);if(X){const ce=new Ut(_,n);ce.scale.setScalar(1+X*r),ce.raycast=()=>{},oe.add(ce)}return oe}function m(_,H,X,k){return _.position.set(H,X,k),_}function g(_,H,X,k){return _.rotation.set(H,X,k),_}function M(_,H,X,k,oe=0,ce=0){return H.position.set(X,ce,k),H.rotation.y=oe,_.add(H),H}function T(_,H,X,k,oe,ce,Ve=i*1.6,_t=7){const Et=X.clone().normalize(),pt=x(new gn(oe,k,_t),ce,Ve);return pt.quaternion.setFromUnitVectors(o,Et),pt.position.copy(H).addScaledVector(Et,k*.45),_.add(pt),pt}const w=ud(20261116),N=(_,H)=>_+(H-_)*w(),L=_=>_[Math.floor(w()*_.length)],v=ud(777),b=(_,H)=>_+(H-_)*v();function z(_,H,X,k){const oe=document.createElement("canvas");oe.width=_,oe.height=H;const ce=oe.getContext("2d");ce&&X(ce,_,H);const Ve=new lc(oe);return Ve.colorSpace=xn,Ve.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),Ve.wrapS=Ve.wrapT=si,k&&Ve.repeat.set(k[0],k[1]),Ve}function F(_,H,X){const k=_.clone();return k.wrapS=k.wrapT=si,k.repeat.set(H,X),k.needsUpdate=!0,k}function q(_,H=1,X=H){const k=_.attributes.position,oe=_.attributes.normal,ce=_.attributes.uv;for(let Ve=0;Ve<k.count;Ve++){const _t=Math.abs(oe.getX(Ve)),Et=Math.abs(oe.getY(Ve)),pt=Math.abs(oe.getZ(Ve));let Ct,bt;Et>=_t&&Et>=pt?(Ct=k.getX(Ve),bt=k.getZ(Ve)):_t>=pt?(Ct=k.getZ(Ve),bt=k.getY(Ve)):(Ct=k.getX(Ve),bt=k.getY(Ve)),ce.setXY(Ve,Ct/H,bt/X)}return ce.needsUpdate=!0,_}function re(_,H,X,k=0,oe=H){const ce=_.attributes.position,Ve=_.attributes.normal,_t=_.attributes.uv;for(let Et=0;Et<ce.count;Et++){const pt=Math.abs(Ve.getX(Et)),Ct=Math.abs(Ve.getZ(Et)),bt=(pt>Ct?ce.getZ(Et):ce.getX(Et))/X;_t.setXY(Et,bt,(ce.getY(Et)+H/2+k)/oe)}return _t.needsUpdate=!0,_}const Q=new Lt,B=new cn,se=new Ai,le=new G,Z=new G,W=new xt;function te(_,H,X={}){if(!H.length)return null;const k=X.mat||a(new Zo({color:16777215,gradientMap:t})),oe=new Kr(_,k,H.length);return oe.castShadow=!!X.cast,oe.receiveShadow=X.receive!==!1,H.forEach((ce,Ve)=>{ce.m?Q.copy(ce.m):(se.set(ce.rx||0,ce.ry||0,ce.rz||0),B.setFromEuler(se),le.set(ce.x??0,ce.y??0,ce.z??0),Z.set(ce.sx??1,ce.sy??1,ce.sz??1),Q.compose(le,B,Z)),oe.setMatrixAt(Ve,Q),(!X.mat||X.colors)&&oe.setColorAt(Ve,W.set(ce.c||"#ffffff"))}),oe.instanceMatrix.needsUpdate=!0,oe.instanceColor&&(oe.instanceColor.needsUpdate=!0),oe.computeBoundingSphere(),(X.parent||e).add(oe),oe}const fe=new Ue(1,1,1);function Ee(_,H,X,k=!0){return X.length?te(fe,X.map(([oe,ce,Ve,_t,Et,pt,Ct=0,bt=0,Je=0])=>({x:oe,y:ce,z:Ve,sx:_t,sy:Et,sz:pt,rx:Ct,ry:bt,rz:Je})),{mat:H,parent:_,cast:k}):null}function Ke(_,H,X,k,oe,ce,Ve,_t){for(let Et=0;Et<oe;Et++){const pt=b(0,H),Ct=b(0,X),bt=b(ce,Ve);for(const[Je,mt]of[[0,0],[H,0],[-H,0],[0,X],[0,-X]]){const Yt=_.createRadialGradient(pt+Je,Ct+mt,0,pt+Je,Ct+mt,bt),fn=k[Math.floor(v()*k.length)];Yt.addColorStop(0,fn+_t),Yt.addColorStop(1,fn+"00"),_.fillStyle=Yt,_.fillRect(pt+Je-bt,Ct+mt-bt,bt*2,bt*2)}}}function at(_,H,X,k=.16){_.globalCompositeOperation="destination-in";const oe=_.createLinearGradient(0,0,H,0);oe.addColorStop(0,"rgba(0,0,0,0)"),oe.addColorStop(k,"rgba(0,0,0,1)"),oe.addColorStop(1-k,"rgba(0,0,0,1)"),oe.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=oe,_.fillRect(0,0,H,X),_.globalCompositeOperation="source-over"}function _e(_,H,X,k,oe,ce,Ve,_t,Et,pt,Ct){for(let bt=X;bt<oe;bt+=ce){let Je=H-b(0,_t);for(;Je<k;){const mt=b(Ve,_t);_.fillStyle=Et[Math.floor(v()*Et.length)],_.beginPath(),_.roundRect(Je+pt,bt+pt,mt-pt*2,ce-pt*2,Ct),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Je+pt*2,bt+pt*1.5,mt-pt*4,3),Je+=mt}}}function Ye(_,H,X,k,oe,ce,Ve,_t,Et){const pt=X/k;for(let Ct=0;Ct<k;Ct++){const bt=Ct*pt;let Je=b(0,ce);const mt=Je;for(;Je<mt+H;){const Yt=Math.min(b(oe,ce),mt+H-Je);if(Yt<oe*.5)break;const fn=Ve[Math.floor(v()*Ve.length)];for(const pn of[0,-H])_.fillStyle=fn,_.beginPath(),_.roundRect(Je+pn+_t,bt+_t,Yt-_t*2,pt-_t*2,Et),_.fill(),_.fillStyle="rgba(255, 240, 220, 0.10)",_.fillRect(Je+pn+_t*2,bt+_t*1.5,Yt-_t*4,3);Je+=Yt}}}function st(_,H,X,k){for(let oe=0;oe<8;oe++){let ce=-b(0,200);for(;ce<H;){const Ve=b(160,340);_.fillStyle=k[Math.floor(v()*k.length)],_.fillRect(ce,oe*64,Ve,64),_.strokeStyle="rgba(255, 230, 200, 0.06)",_.lineWidth=2;for(let _t=0;_t<3;_t++){const Et=oe*64+b(10,54);_.beginPath(),_.moveTo(ce+6,Et),_.bezierCurveTo(ce+Ve*.3,Et+b(-4,4),ce+Ve*.6,Et+b(-4,4),ce+Ve-6,Et),_.stroke()}_.fillStyle="rgba(20, 10, 6, 0.4)",_.fillRect(ce,oe*64,3,64),_.fillStyle="rgba(20, 10, 6, 0.35)",_.beginPath(),_.arc(ce+10,oe*64+14,2.5,0,Fi*2),_.arc(ce+10,oe*64+50,2.5,0,Fi*2),_.fill(),ce+=Ve}_.fillStyle="rgba(20, 10, 6, 0.45)",_.fillRect(0,oe*64,H,3)}}const ut=(_,H,X)=>{const k=_.createRadialGradient(32,32,0,32,32,32);k.addColorStop(0,H),k.addColorStop(1,X),_.fillStyle=k,_.fillRect(0,0,64,64)},Ze=z(512,512,(_,H,X)=>{_.fillStyle="#6f8b49",_.fillRect(0,0,H,X),Ke(_,H,X,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let k=0;k<900;k++){_.strokeStyle=v()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",_.lineWidth=2;const oe=b(0,H),ce=b(0,X);_.beginPath(),_.moveTo(oe,ce),_.lineTo(oe+b(-2,2),ce-b(5,10)),_.stroke()}}),dt=z(256,256,(_,H,X)=>{_.fillStyle="#8b6a4b",_.fillRect(0,0,H,X),Ke(_,H,X,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let k=0;k<120;k++)_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",_.beginPath(),_.ellipse(b(0,H),b(0,X),b(1.5,4),b(1,3),b(0,3),0,Fi*2),_.fill()}),Ft=z(256,256,(_,H,X)=>{_.fillStyle="#b0906a",_.fillRect(0,0,H,X),Ke(_,H,X,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let k=0;k<160;k++)_.fillStyle="rgba(120, 90, 60, 0.25)",_.fillRect(b(0,H),b(0,X),2,2)}),ht=z(512,512,(_,H,X)=>{_.fillStyle="#5b524c",_.fillRect(0,0,H,X),Ye(_,H,X,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),Mt=z(512,512,(_,H,X)=>{_.fillStyle="#6a6058",_.fillRect(0,0,H,X),Ye(_,H,X,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),St=z(512,512,(_,H,X)=>{_.fillStyle="#8f6c4b",_.fillRect(0,0,H,X),Ke(_,H,X,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let k=0;k<260;k++){const oe=b(6,H-6),ce=b(6,X-6);_.fillStyle=v()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",_.beginPath(),_.ellipse(oe,ce,b(1.5,4),b(1,3),0,0,Fi*2),_.fill()}}),Le=z(256,512,(_,H,X)=>{const k=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let oe=0;for(const[ce,Ve]of k)_.fillStyle=ce,_.fillRect(0,oe,H,Ve*X+2),oe+=Ve*X;Ke(_,H,X,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let ce=0;ce<40;ce++){_.strokeStyle="rgba(40, 26, 18, 0.35)",_.lineWidth=2;const Ve=b(0,H),_t=b(.15*X,X);_.beginPath(),_.moveTo(Ve,_t),_.lineTo(Ve+b(-10,10),_t+b(10,40)),_.stroke()}_.fillStyle="#5a7a44";for(let ce=0;ce<H;ce+=6)_.beginPath(),_.moveTo(ce,0),_.lineTo(ce+3,b(14,34)),_.lineTo(ce+6,0),_.fill()}),Xe=z(256,128,(_,H,X)=>{_.fillStyle="#7a2420",_.fillRect(0,0,H,X);for(let k=0;k<8;k++)_.fillStyle=k%2?"#8a2a24":"#6a1e1a",_.fillRect(k*32,0,32,X);_.fillStyle="#e3d5b6",_.fillRect(0,X*.46,H,X*.08),_.fillStyle="#2a2224",_.fillRect(0,X*.43,H,3),_.fillRect(0,X*.57,H,3)}),et=z(256,256,(_,H,X)=>{for(let k=0;k<2;k++)_.fillStyle=["#a59a8c","#958a7d"][k],_.beginPath(),_.ellipse(H/2+b(-20,20),X*(.25+k*.5),H*.32,X*.17,b(-.3,.3),0,Fi*2),_.fill()}),rt=z(512,512,(_,H,X)=>{_.fillStyle="#5f5650",_.fillRect(0,0,H,X),_e(_,0,0,H,X,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),nt=z(512,512,(_,H,X)=>st(_,H,X,["#5a3a2a","#4e3224","#62402e","#553728"])),ot=z(512,512,(_,H,X)=>st(_,H,X,["#4a3226","#553a2b","#3f2a20","#4e3428"])),lt=z(512,512,(_,H,X)=>st(_,H,X,["#a17a55","#94704d","#ab845e","#9a7552"])),Ae=z(512,512,(_,H,X)=>st(_,H,X,["#7a5236","#6e4a31","#84593b","#734d33"])),ze=z(512,512,(_,H,X)=>{_.fillStyle="#3f3a3a",_.fillRect(0,0,H,X);for(let k=0;k<4;k++)for(let oe=0;oe<4;oe++)_.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(oe+k*3)%4],_.beginPath(),_.roundRect(oe*128+4,k*128+4,120,120,6),_.fill(),_.fillStyle="rgba(255,255,255,0.05)",_.fillRect(oe*128+10,k*128+10,108,6)}),ke=z(512,512,(_,H,X)=>{_.fillStyle="#4f4843",_.fillRect(0,0,H,X),_e(_,0,0,H,X,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),I=z(512,512,(_,H,X)=>{_.fillStyle="#4a433f",_.fillRect(0,0,H,X),_e(_,0,0,H,X,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Ke(_,H,X,["#3e5a34","#4a3a30"],14,20,60,"30")}),je=z(512,512,(_,H,X)=>{for(let k=0;k<8;k++)_.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][k%4],_.fillRect(k*64,0,64,X),_.fillStyle="rgba(25, 14, 10, 0.45)",_.fillRect(k*64,0,3,X),_.fillStyle="rgba(255, 220, 190, 0.05)",_.fillRect(k*64+8,0,3,X);_.fillStyle="#7a2320",_.fillRect(0,34,H,70),_.strokeStyle="#d9c9a6",_.lineWidth=6,_.lineJoin="round",_.beginPath();for(let k=0;k<=H;k+=32)_.lineTo(k,k%64?52:86);_.stroke()}),$e=z(256,256,(_,H,X)=>{_.fillStyle="#4e1612",_.fillRect(0,0,H,X);for(let k=0;k<8;k++){const oe=k%2?16:0;for(let ce=-32;ce<H+32;ce+=32)_.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(v()*4)],_.beginPath(),_.roundRect(ce+oe+1,k*32+2,30,30,[2,2,12,12]),_.fill(),_.fillStyle="rgba(255, 200, 170, 0.12)",_.fillRect(ce+oe+5,k*32+5,22,3);_.fillStyle="rgba(30, 6, 6, 0.35)",_.fillRect(0,k*32,H,3)}}),qe=z(256,256,(_,H,X)=>{for(let k=0;k<4;k++)_.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][k],_.fillRect(k*64,0,64,X),_.fillStyle="rgba(20, 8, 6, 0.45)",_.fillRect(k*64,0,3,X)}),Ie=z(256,512,(_,H,X)=>{_.fillStyle="#6e1a19",_.fillRect(0,0,H,X),_.fillStyle="#2a1e1f",_.fillRect(0,0,H,26),_.fillRect(0,0,14,X),_.fillRect(H-14,0,14,X),_.fillStyle="#b08a3e",_.fillRect(0,26,H,6),_.fillStyle="#e3d5b6",_.beginPath(),_.moveTo(52,300),_.lineTo(204,300),_.lineTo(188,332),_.lineTo(156,332),_.lineTo(164,368),_.lineTo(196,368),_.lineTo(196,396),_.lineTo(60,396),_.lineTo(60,368),_.lineTo(92,368),_.lineTo(100,332),_.lineTo(68,332),_.closePath(),_.fill(),_.beginPath(),_.moveTo(128,120),_.bezierCurveTo(168,164,176,192,164,216),_.bezierCurveTo(152,236,104,236,92,216),_.bezierCurveTo(80,192,100,176,112,152),_.bezierCurveTo(120,168,124,172,132,176),_.bezierCurveTo(132,160,128,140,128,120),_.fill(),_.fillStyle="#6e1a19",_.beginPath(),_.moveTo(0,X),_.lineTo(H/2,X-60),_.lineTo(H,X),_.fill()}),tt=z(64,256,(_,H,X)=>{_.fillStyle="#6fa9c9",_.fillRect(0,0,H,X);for(let k=0;k<40;k++)_.fillStyle=k%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",_.fillRect(k*23%64,k*41%256,3+k%3*2,18+k%5*10)}),Ce=z(128,128,(_,H,X)=>{_.fillStyle="#c4c4c4",_.fillRect(0,0,H,X);for(let k=0;k<70;k++){const oe=k*37%H,ce=(k*59+k%7*11)%X,Ve=4+k%4*3;_.fillStyle=k%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",_.beginPath(),_.ellipse(oe,ce,Ve,1.2+k%3*.5,k*.7%3.14,0,2*Math.PI),_.fill(),oe+Ve>H&&(_.beginPath(),_.ellipse(oe-H,ce,Ve,1.4,k*.7%3.14,0,2*Math.PI),_.fill())}}),he=z(256,180,(_,H,X)=>{_.fillStyle="#efe4cc",_.fillRect(0,0,H,X),_.strokeStyle="#4f76b0",_.lineWidth=3,_.strokeRect(20,20,216,30),_.strokeRect(20,62,66,46),_.strokeRect(95,62,66,46),_.strokeRect(170,62,66,46),_.strokeRect(20,120,216,42),_.strokeStyle="#b8483e",_.beginPath(),_.moveTo(26,150),_.lineTo(80,132),_.lineTo(130,145),_.lineTo(226,126),_.stroke()}),D=z(256,200,(_,H,X)=>{const k=_.createLinearGradient(0,0,0,X);k.addColorStop(0,"#d98a62"),k.addColorStop(1,"#f2d2a8"),_.fillStyle=k,_.fillRect(0,0,H,X),_.fillStyle="#5c6f48",_.beginPath(),_.moveTo(0,150),_.quadraticCurveTo(80,100,150,140),_.quadraticCurveTo(210,120,256,135),_.lineTo(256,200),_.lineTo(0,200),_.fill(),_.fillStyle="#4a3a3c",_.fillRect(150,70,44,72),_.fillStyle="#7a2420",_.beginPath(),_.moveTo(144,72),_.lineTo(172,40),_.lineTo(200,72),_.fill(),_.fillStyle="#ffd27a",_.fillRect(165,92,14,18)}),S=z(256,200,_=>{_.fillStyle="#c8b18a",_.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((H,X)=>{_.fillStyle=H,_.fillRect(16+X%3*78,16+Math.floor(X/3)*60,66,48)}),_.fillStyle="#efe4cc",_.fillRect(16,140,224,44),_.fillStyle="#2b3a36",_.fillRect(28,152,120,8),_.fillRect(28,166,80,6)}),$=z(256,160,(_,H,X)=>{_.fillStyle="rgba(40, 200, 220, 0.18)",_.fillRect(0,0,H,X);const k=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let oe=0;oe<9;oe++)_.fillStyle=k[oe%4],_.fillRect(18+oe%3*12,18+oe*14,40+oe*53%140,6)}),we=z(256,128,(_,H,X)=>{_.fillStyle="#3d6f99",_.fillRect(0,0,H,X),_.fillStyle="#8aa866";for(const[k,oe,ce,Ve]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])_.beginPath(),_.ellipse(k,oe,ce,Ve,.3,0,Fi*2),_.fill()}),ge=z(128,128,(_,H,X)=>{_.fillStyle="#c9a75a",_.fillRect(0,0,H,X);for(let k=0;k<160;k++){_.strokeStyle=k%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",_.lineWidth=2;const oe=b(0,H),ce=b(0,X);_.beginPath(),_.moveTo(oe,ce),_.lineTo(oe+6,ce+2),_.stroke()}}),Fe=z(128,128,_=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((H,X)=>{_.fillStyle=H,_.beginPath(),_.arc(64,64,62-X*12,0,Fi*2),_.fill()})}),He=z(256,256,(_,H,X)=>{_.fillStyle="#7a5a3c",_.fillRect(0,0,H,X);for(let k=0;k<8;k++)_.fillStyle=k%2?"#8a9a48":"#a7a24e",_.fillRect(0,k*32+6,H,20)}),ye=z(64,64,_=>ut(_,"rgba(255,255,255,1)","rgba(255,255,255,0)")),Te=z(64,64,_=>ut(_,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Ne=z(64,64,_=>{_.translate(32,32),_.fillStyle="#fff6c8",_.beginPath();for(let H=0;H<8;H++){const X=H%2?9:30,k=H*Fi/4;_.lineTo(Math.cos(k)*X,Math.sin(k)*X)}_.closePath(),_.fill()}),Y=z(8,512,(_,H,X)=>{const k=_.createLinearGradient(0,0,0,X);k.addColorStop(0,"#4c6994"),k.addColorStop(.38,"#8ea6c4"),k.addColorStop(.62,"#d8c2a6"),k.addColorStop(.8,"#e2a682"),k.addColorStop(1,"#b8674f"),_.fillStyle=k,_.fillRect(0,0,H,X)});Y.wrapS=Y.wrapT=Hn;const ve={grass:Ze,dirt:dt,sand:Ft,tCobble:ht,tFlag:Mt,tDirt:St,strata:Le,balloon:Xe,roadStones:et,plaza:rt,planksWar:nt,planksDark:ot,planksLight:lt,planks:Ae,slate:ze,stoneWall:ke,castleWall:I,plankWall:je,roof:$e,gable:qe,banner:Ie,water:tt,ripple:Ce,paper:he,painting:D,moodboard:S,code:$,globe:we,straw:ge,target:Fe,field:He,soft:ye,blob:Te,spark:Ne,sky:Y,grain:void 0};function xe(_,H=2.2){const X=_.image,k=X.width,oe=X.height;if(!(k>0)||!(oe>0))return _;const ce=X.getContext("2d");if(!ce)return _;const Ve=ce.getImageData(0,0,k,oe).data,_t=new Float32Array(k*oe);for(let Je=0;Je<k*oe;Je++)_t[Je]=((Ve[Je*4]??0)*.299+(Ve[Je*4+1]??0)*.587+(Ve[Je*4+2]??0)*.114)/255;const Et=document.createElement("canvas");Et.width=k,Et.height=oe;const pt=Et.getContext("2d");if(!pt)return _;const Ct=pt.createImageData(k,oe);for(let Je=0;Je<oe;Je++)for(let mt=0;mt<k;mt++){const Yt=_t[Je*k+(mt-1+k)%k]??0,fn=_t[Je*k+(mt+1)%k]??0,pn=_t[(Je-1+oe)%oe*k+mt]??0,E=_t[(Je+1)%oe*k+mt]??0,U=(Yt-fn)*H,V=(E-pn)*H,J=Math.hypot(U,V,1),ue=(Je*k+mt)*4;Ct.data[ue]=(U/J*.5+.5)*255,Ct.data[ue+1]=(V/J*.5+.5)*255,Ct.data[ue+2]=(1/J*.5+.5)*255,Ct.data[ue+3]=255}pt.putImageData(Ct,0,0);const bt=new lc(Et);return bt.wrapS=bt.wrapT=si,bt.colorSpace=ki,bt.anisotropy=_.anisotropy,bt.repeat.copy(_.repeat),bt}const Ge={},ee=(_,H)=>Ge[_]||=xe(ve[_],H);function K(_,H=1,X=1,k=2.2,oe={}){const ce=H===1&&X===1?ve[_]:F(ve[_],H,X),Ve=H===1&&X===1?ee(_,k):F(ee(_,k),H,X);return h("#ffffff",Object.assign({map:ce,normalMap:Ve,normalScale:new Be(1,1)},oe))}ve.grain=z(256,256,(_,H,X)=>{_.fillStyle="#d6cbbf",_.fillRect(0,0,H,X);for(let k=0;k<70;k++){_.strokeStyle=v()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",_.lineWidth=b(1,3);const oe=b(0,H);_.beginPath(),_.moveTo(oe,0),_.bezierCurveTo(oe+b(-8,8),X*.3,oe+b(-8,8),X*.7,oe+b(-4,4),X),_.stroke()}for(let k=0;k<6;k++){const oe=b(10,H-10),ce=b(10,X-10);_.strokeStyle="rgba(80, 50, 30, 0.3)",_.lineWidth=2,_.beginPath(),_.ellipse(oe,ce,b(3,6),b(8,14),0,0,Fi*2),_.stroke()}});const me=_=>{const H=h(_,{map:ve.grain,normalMap:ee("grain",1.5)});return H.userData.autoUV=!0,H},Oe={stone:K("stoneWall",1,1,2),castle:K("castleWall",1,1,2),plankWall:K("plankWall",1,1,1.4),timber:h(kn.timber),wood:me(kn.wood),woodD:me(kn.woodD),woodL:me(kn.woodL),iron:h(kn.iron),ironL:h(kn.ironL),rust:h(kn.rust),bone:h(kn.bone),boneD:h(kn.boneD),red:h(kn.red),redD:h(kn.redD),redL:h(kn.redL),black:h(kn.black),gold:h(kn.gold),straw:h("#ffffff",{map:ve.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:e,renderer:s,COL:kn,GRAD:t,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:a,toon:h,glow:f,mesh:u,rbox:p,part:x,at:m,rot:g,put:M,spike:T,rnd:w,rr:N,pick:L,trnd:v,tr:b,canvasTex:z,blobs:Ke,edgeFade:at,tiled:F,planarUV:q,wallUV:re,instanced:te,boxes:Ee,UNIT_BOX:fe,TEX:ve,nrm:ee,relief:K,woodMat:me,M:Oe,_c:W}}const{PI:Jt}=Math,yn=.32,Go=s=>s.userData.up,tS=s=>s.userData.cutY;function nS(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:x,put:m,spike:g,rr:M,pick:T,tiled:w,planarUV:N,wallUV:L,boxes:v}=s,{SPINNERS:b,skull:z,horns:F,torch:q,flame:re,table:Q,skullCandle:B,throne:se,rug:le,trophy:Z,hangingBanner:W,weaponRack:te,shield:fe,brazier:Ee,chest:Ke,crate:at,barrel:_e,stool:Ye,drum:st,poleBanner:ut,skullPole:Ze,woodpile:dt,spikes:Ft,bookshelf:ht,desk:Mt,candle:St,fence:Le,plant:Xe,cauldron:et,bench:rt,lampPost:nt,scrollStack:ot,telescope:lt,starGlobe:Ae,crystal:ze,wallMap:ke,easel:I,bottle:je,anvil:$e,sack:qe,cart:Ie,roundTable:tt,mug:Ce,lanternString:he,signPost:D,bed:S,curtain:$,partition:we,wardrobe:ge}=e,{patch:Fe}=t,He={},ye={war:[a.planksWar,2.6],dark:[a.planksDark,2.6],light:[a.planksLight,2.6],planks:[a.planks,2.6],tiles:[a.slate,3.6]};function Te(j,C,Se,ae,y,P,R={}){const A=R.T||yn,O=R.base||0,ie=R.stone!==!1,pe=ie?1.15:O,de=ie?Nt:O,ne=ie?pe:O+.9,Me=p(new Pe,0,ne,0);j.add(Me),j.userData.up=Me,Me.userData.movesWithWall=!0,j.userData.cutY=ne;const De={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function We(Tt,Xt){const[Qt,Bt,zt,jt,Pn,cr,Ms=0,Pa=0,ro=0]=Xt,La=Bt-Pn/2,Da=Bt+Pn/2,[dh,fh]=De[Tt];Ms||ro||La>=ne-.01?fh.push([Qt,Bt-ne,zt,jt,Pn,cr,Ms,Pa,ro]):Da<=ne+.01?dh.push(Xt):(dh.push([Qt,(La+ne)/2,zt,jt,ne-La,cr,Ms,Pa,ro]),fh.push([Qt,(ne+Da)/2-ne,zt,jt,Da-ne,cr,Ms,Pa,ro]))}const be=ae?ae.x-ae.w/2:0,Qe=ae?ae.x+ae.w/2:0,yt=ae?[[-C/2,be],[Qe,C/2]]:[[-C/2,C/2]],vt=Se-pe;for(const[Tt,Xt]of yt){const Qt=Xt-Tt;if(Qt<.05)continue;const Bt=(Tt+Xt)/2;if(ie)j.add(p(u(N(new Ue(Qt,pe,A+.08),1.6),o.stone),Bt,pe/2,0)),Me.add(p(u(L(new Ue(Qt,vt,A),vt,1.3),o.plankWall),Bt,vt/2,0));else{const zt=ne-pe,jt=Se-ne;j.add(p(u(L(new Ue(Qt,zt,A),zt,1.3,0,vt),o.plankWall),Bt,pe+zt/2,0)),Me.add(p(u(L(new Ue(Qt,jt,A),jt,1.3,zt,vt),o.plankWall),Bt,jt/2,0))}}if(ae){const Tt=Nt+2.3,Xt=Se-Tt;Me.add(p(u(L(new Ue(ae.w,Xt,A),Xt,1.3),o.plankWall),ae.x,Tt+Xt/2-ne,0)),We("timber",[ae.x-ae.w/2-.1,(Tt+.1)/2,0,.24,Tt+.1,A+.16]),We("timber",[ae.x+ae.w/2+.1,(Tt+.1)/2,0,.24,Tt+.1,A+.16]),We("timber",[ae.x,Tt+.08,0,ae.w+.8,.3,A+.2]);for(const Qt of[-1,1])for(let Bt=0;Bt<4;Bt++)We("timber",[ae.x+Qt*(ae.w/2+.1),.35+Bt*.55,A/2+.09,.07,.07,.04]);Me.add(p(z(.26),ae.x,Tt+.42-ne,A/2+.17)),Me.add(p(F(.6),ae.x,Tt+.48-ne,A/2+.15));for(const Qt of[-1,1])Me.add(p(q(),ae.x+Qt*(ae.w/2+.55),Nt+1.7-ne,A/2+.02))}We("timber",[0,pe+(ie?0:.09),0,C,.18,A+.12]),We("timber",[0,Se-.1,0,C,.22,A+.12]);const Rt=Math.max(1,Math.round(C/2.3)),wt=[];for(let Tt=1;Tt<Rt;Tt++){const Xt=-C/2+Tt*C/Rt;if(!(ae&&Xt>be-.45&&Xt<Qe+.45)){wt.push(Xt),We("timber",[Xt,pe+vt/2,0,.2,vt,A+.1]);for(const Qt of[pe+.09,Se-.1])We("timber",[Xt,Qt,A/2+.08,.09,.09,.06])}}if(y)for(const Tt of[-C/2+.2,C/2-.2])We("timber",[Tt,(O+Se+.12)/2,0,.42,Se-O+.12,A+.18]);const ct=[-C/2+(y?.41:0),...wt,C/2-(y?.41:0)];ae&&ct.push(be-.22,Qe+.22),ct.sort((Tt,Xt)=>Tt-Xt);let Wt=0;for(let Tt=0;Tt<ct.length-1;Tt++){const Xt=ct[Tt],Qt=ct[Tt+1],Bt=Qt-Xt,zt=(Xt+Qt)/2;if(!(Bt<.9)&&!(ae&&zt>be-.3&&zt<Qe+.3)){if(Wt++,P&&Bt>1.5&&Wt%2===1){const jt=de+(ie?1.62:1.35);We("panes",[zt,jt,0,.86,.78,R.paneT||A+.04]);for(const Pn of[[zt,jt+.44,0,1.08,.1,A+.12],[zt,jt-.44,0,1.12,.12,A+.16],[zt-.48,jt,0,.1,.96,A+.12],[zt+.48,jt,0,.1,.96,A+.12],[zt,jt,0,.06,.78,A+.06],[zt,jt,0,.86,.05,A+.06]])We("timber",Pn);for(const Pn of[-1,1])We("shutters",[zt+Pn*.78,jt,A/2+.05,.42,.86,.05,0,Pn*.35,0]),We("timber",[zt+Pn*.78+Pn*.012,jt,A/2+.09,.44,.08,.03,0,Pn*.35,0])}else if(Bt>1){const jt=vt-.3,Pn=Math.atan2(jt,Bt-.2),cr=Math.hypot(jt,Bt-.2);for(const Ms of[-1,1])We("timber",[zt,pe+vt/2,A/2+.04,cr,.13,.06,0,0,Ms*Pn])}}}const[It,Tn]=De.timber,[dn,gi]=De.panes,[Vn,Yn]=De.shutters;v(j,o.timber,It),v(Me,o.timber,Tn),v(j,o.pane,dn,!1),v(Me,o.pane,gi,!1),v(j,o.red,Vn),v(Me,o.red,Yn),Ge(j,ne)}const Ne=new G,Y=new Lt,ve=new Lt,xe=new Lt;function Ge(j,C){const Se=Go(j),ae=new Map;j.traverse(A=>{if(!(A instanceof Ut)||Array.isArray(A.material))return;for(let pe=A;pe&&pe!==j;pe=pe.parent)if(pe===Se)return;const O=A.material,ie=ae.get(O);ie?ie.push(A):ae.set(O,[A])});const y=A=>{const O=A;return(O.color?O.color.r*.3+O.color.g*.59+O.color.b*.11:0)+(O.map?.5:0)},P=[...ae.keys()].sort((A,O)=>y(A)-y(O));j.updateWorldMatrix(!0,!0),xe.copy(j.matrixWorld).invert();const R=new Set;P.forEach((A,O)=>{if(O)for(const ie of ae.get(A)??[]){const pe=ie.geometry;if(R.has(pe))continue;R.add(pe),Y.multiplyMatrices(xe,ie.matrixWorld),ve.copy(Y).invert();const de=pe.attributes.position;let ne=!1;for(let Me=0;Me<de.count;Me++)Ne.fromBufferAttribute(de,Me).applyMatrix4(Y),!(Math.abs(Ne.y-C)>.002)&&(Ne.y-=.003*O,Ne.applyMatrix4(ve),de.setXYZ(Me,Ne.x,Ne.y,Ne.z),ne=!0);ne&&(de.needsUpdate=!0,pe.computeBoundingBox(),pe.computeBoundingSphere())}})}function ee(j){const C=[],Se=new Map;return j.traverse(ae=>{if(!(ae instanceof Ut))return;const y=ae.material;let P=Se.get(y);P||(P=y.clone(),P.transparent=!0,Se.set(y,P),C.push(P)),ae.material=P}),C}function K(j,C,Se){const ae=j.r,y=Se.pitch||.6,P=.6,R=ae.d/2+P,A=new Pe;A.position.y=C-P*Math.tan(y),j.g.add(A);const O=R*Math.tan(y),ie=P*Math.tan(y),pe=R/Math.cos(y),de=d("#ffffff",{map:a.roof});for(const yt of[-1,1]){const vt=u(N(new Ue(ae.w+P*2,.18,pe),1.6),de);vt.rotation.x=yt<0?-y:y,vt.position.set(0,O/2,yt*R/2),A.add(vt)}const ne=new Jr;ne.moveTo(-ae.d/2,ie),ne.lineTo(ae.d/2,ie),ne.lineTo(0,O-.12),ne.closePath();const Me=new Zc(ne),De=d("#ffffff",{map:a.gable,side:ln});for(const yt of[-1,1])A.add(p(x(u(Me,De),0,Jt/2,0),yt*(ae.w/2+.02),0,0)),A.add(p(x(z(.34),0,yt*Jt/2,0),yt*(ae.w/2+.2),ie+(O-ie)*.42,0)),A.add(p(x(F(1.1),0,yt*Jt/2,0),yt*(ae.w/2+P+.05),O+.12,0));A.add(p(u(new Ue(ae.w+P*2+.2,.2,.26),o.iron),0,O+.04,0));const We=Math.floor((ae.w+P)/1.5);for(let yt=0;yt<We;yt++)g(A,new G(-ae.w/2+.5+yt*(ae.w-1)/Math.max(1,We-1),O+.12,0),h,.34,.06,o.boneD,0,5);let be=null;if(Se.chimney){const[yt,vt]=Se.chimney,Rt=O+1.4;A.add(p(u(N(new Ue(.85,Rt,.85),1.2),o.stone),yt,Rt/2,vt)),A.add(p(u(new Ue(1.05,.16,1.05),o.iron),yt,Rt+.05,vt)),be=[yt,Rt+.3,vt]}const Qe=ee(A);return{R:A,mats:Qe,base:A.position.y,hR:O,smokeAt:be}}function me(j){return{S:{c:[0,j.d/2],n:[0,1],L:j.w+yn},N:{c:[0,-j.d/2],n:[0,-1],L:j.w+yn},E:{c:[j.w/2,0],n:[1,0],L:j.d-yn},W:{c:[-j.w/2,0],n:[-1,0],L:j.d-yn}}}function Oe(j,C){const Se=new Pe;j.add(Se);const ae=new Pe;return ae.position.set(C.c[0],0,C.c[1]),ae.rotation.y=Math.atan2(C.n[0],C.n[1]),Se.add(ae),{sg:Se,sf:ae}}function _(j,C,Se){if(!C)return;C.updateWorldMatrix(!0,!0),j.g.updateMatrixWorld(!0);const ae=[];C.traverse(y=>{y instanceof Ut&&ae.push(y)});for(const y of ae){const P=y.geometry;P.attributes.uv||P.setAttribute("uv",new Pt(new Float32Array(P.attributes.position.count*2),2));const R=Pf(s,y.material),A=new Ut(P,R);A.castShadow=!R.isMeshStandardMaterial,A.receiveShadow=!0,y.matrixWorld.decompose(A.position,A.quaternion,A.scale),j.g.add(A),A.updateMatrixWorld(!0),Se.attach(A)}}function H(j,C,Se,ae,y,P={}){const R=P.T||yn,A=P.stone!==!1,O=P.base||0,ie=A?1.15:O+.9,pe=p(new Pe,0,ie,0);if(C.add(pe),C.userData.up=pe,pe.userData.movesWithWall=!0,C.userData.cutY=ie,_(j,Se,C),_(j,ae,pe),Ge(C,ie),y)for(const de of[-1,1])pe.add(p(q(),y.x+de*(y.w/2+.55),Nt+1.7-ie,R/2+.08))}function X(j,C,Se,ae){const y=j.r,P=Se.pitch||.6,R=.6,A=y.d/2+R,O=new Pe;O.position.y=C-R*Math.tan(P),j.g.add(O);const ie=A*Math.tan(P);_(j,ae,O);const pe=ee(O);let de=null;if(Se.chimney){const[ne,Me]=Se.chimney;de=[ne,ie+1.4+.3,Me]}return{R:O,mats:pe,base:O.position.y,hR:ie,smokeAt:de}}const k={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function oe(j,C={}){const Se=new Pe;Se.position.set(j.x,0,j.z),Se.rotation.y=j.ry||0,r.add(Se);const ae=j.id||C.id,y={id:ae,r:j,g:Se,sides:{},lift:0,view:"ground",deco:!!C.deco,name:j.name,top:0},P=k[ae],R=De=>P?Df(P,ae+"_"+De):null;P?_(y,R("base"),Se):Se.add(p(u(N(new Ue(j.w+.6,Nt+.3,j.d+.6),1.4),o.stone),0,(Nt+.3)/2-.3,0));const[A,O]=ye[j.floor||"planks"];Se.add(x(p(u(new Zt(j.w,j.d),d("#ffffff",{map:w(A,j.w/O,j.d/O)}),!1),0,Nt+.004,0),-Jt/2,0,0));const ie=Nt+j.wallH,pe=me(j),de=j.doorLocal||[0,j.d/2],ne=j.door?j.door.side:"S";for(const[De,We]of Object.entries(pe)){const{sg:be,sf:Qe}=Oe(Se,We),yt=Math.cos(Qe.rotation.y),vt=-Math.sin(Qe.rotation.y),Rt=ne===De?{x:(de[0]-We.c[0])*yt+(de[1]-We.c[1])*vt,w:j.door&&j.door.width||1.4}:null;P?H(y,Qe,R(De+"_lo"),R(De+"_hi"),Rt):Te(Qe,We.L,ie,Rt,De==="N"||De==="S",C.windows!==!1),y.sides[De]={g:be,sf:Qe,up:Go(Qe),n:We.n,s:1}}if(!P){const De=j.doorN||[0,1],We=Math.abs(De[0])>0?[.7,(j.door&&j.door.width||1.4)+.5]:[(j.door&&j.door.width||1.4)+.5,.7];Se.add(p(u(N(new Ue(We[0],.14,We[1]),1.2),o.stone),de[0]+De[0]*.62,.07,de[1]+De[1]*.62))}let Me=ie;if(j.storeys===2){const De=j.upperH||2.5,We=p(new Pe,0,ie,0);We.userData.movesWithWall=!0,Se.add(We);const be={U:We,sides:{},lift:0,mats:[],top:ie};if(y.upper=be,P)_(y,R("Ufloor"),We);else{const yt=d("#ffffff",{map:A}),[vt,Rt,wt,ct]=C.stairHole||[0,0,0,0],Wt=j.w/2,It=j.d/2,Tn=C.stairHole?[[-Wt,vt,-It,It],[Rt,Wt,-It,It],[vt,Rt,-It,wt],[vt,Rt,ct,It]]:[[-Wt,Wt,-It,It]];for(const[dn,gi,Vn,Yn]of Tn)gi-dn<.05||Yn-Vn<.05||We.add(p(u(N(new Ue(gi-dn,.22,Yn-Vn),O),yt),(dn+gi)/2,.09,(Vn+Yn)/2))}const Qe=[];for(const[yt,vt]of Object.entries(pe)){const{sg:Rt,sf:wt}=Oe(We,vt);P?H(y,wt,R("U"+yt+"_lo"),R("U"+yt+"_hi"),null,{base:.2,stone:!1,T:yn-.05}):(Te(wt,vt.L,.2+De,null,yt==="N"||yt==="S",!0,{base:.2,stone:!1,T:yn-.05,paneT:yn-.03}),Qe.push([0,.05,.2,vt.L+.2,.2,.18]),v(wt,o.timber,Qe.slice(-1))),be.sides[yt]={g:Rt,sf:wt,up:Go(wt),n:vt.n,s:1}}Me=ie+.2+De}return y.top=Me,y.roof=P?X(y,Me,C,R("roof")):K(y,Me,C),He[ae]=y,y}function ce(j,C,Se,ae,y){const P=j.upper,R=12,A=P.top+.2-Nt,O=(ae-Se)/R,ie=[];for(let De=0;De<R;De++){const We=A*(De+1)/R;ie.push([C,Nt+We/2,Se+O*(De+.5),y,We,Math.abs(O)+.01])}v(j.g,o.wood,ie);const pe=C>0?-1:1,de=C+pe*(y/2+.04);for(let De=0;De<=4;De++){const We=Se+(ae-Se)*De/4,be=Nt+A*De/4;j.g.add(p(u(new Ue(.07,.95,.07),o.woodD),de,be+.5,We))}const ne=Math.hypot(ae-Se,A),Me=p(u(new Ue(.08,.08,ne),o.woodL),de,Nt+A/2+.95,(Se+ae)/2);Me.rotation.x=-Math.atan2(A,ae-Se),j.g.add(Me)}function Ve(j,C,Se,ae,y){const P=tS(j);ae>P?(C.position.set(Se,ae-P,y),Go(j).add(C)):(C.position.set(Se,ae,y),j.add(C))}const _t=(j,C)=>j==="S"?C:j==="N"||j==="E"?-C:C;function Et(j,C,Se,ae,y,P=.1){const R=j.upper.sides[C];return Se.rotation.y=Jt,Ve(R.sf,Se,_t(C,ae),y,-((yn-.05)/2+P/2+.01)),Se}const pt=(j,C,Se,ae,y=0)=>m(j.upper.U,C,Se,ae,y,.2);function Ct(j,C,Se=0,ae=.9){for(let y=0;y<C.length-1;y++){const[P,R]=C[y],[A,O]=C[y+1],ie=Math.hypot(A-P,O-R),pe=p(u(new Ue(ie,.07,.07),o.woodL),(P+A)/2,Se+ae,(R+O)/2);pe.rotation.y=-Math.atan2(O-R,A-P),j.add(pe);const de=Math.max(1,Math.round(ie/.5));for(let ne=0;ne<=de;ne++)j.add(p(u(new Ue(.05,ae,.05),o.woodD),P+(A-P)*ne/de,Se+ae/2,R+(O-R)*ne/de))}}function bt(j,C,Se,ae,y,P=.1,R=!0){const A=j.sides[C];return R&&(Se.rotation.y=Jt),Ve(A.sf,Se,_t(C,ae),y,R?-(yn/2+P/2+.01):yn/2+P/2+.01),Se}const Je=(j,C,Se,ae,y=0)=>m(j.g,C,Se,ae,y,Nt),mt=(j,C,Se,ae,y=0)=>m(j.g,C,Se,ae,y,0),Yt=(j,C,Se)=>is(j,C,Se),fn=document.createElement("canvas");fn.width=512,fn.height=280;const pn=new lc(fn);pn.colorSpace=xn;let E=i;function U(j=E){E=j;const C=fn.getContext("2d");if(!C)return;const Se=512,ae=j.filter(P=>P==="done").length;C.fillStyle="#2e2422",C.fillRect(0,0,Se,280),C.fillStyle="#e3d5b6",C.font=`800 40px ${Sc}`,C.textAlign="left",C.fillText("TASKS",28,58),C.fillStyle="#ffd27a",C.textAlign="right",C.fillText(`${ae} / 5`,Se-28,58);const y={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((P,R)=>{const A=28+R*94,O=90;C.fillStyle=y[j[R]??"todo"],C.beginPath(),C.roundRect(A,O,78,96,14),C.fill(),C.fillStyle="rgba(255, 255, 255, 0.22)",C.beginPath(),C.roundRect(A+6,O+6,66,18,8),C.fill(),C.fillStyle="#1e1a1c",C.font=`800 46px ${Sc}`,C.textAlign="center",C.fillText(P,A+39,O+70)}),C.fillStyle="#1b1616",C.beginPath(),C.roundRect(28,220,Se-56,28,14),C.fill(),ae&&(C.fillStyle="#d9762e",C.beginPath(),C.roundRect(28,220,(Se-56)*ae/5,28,14),C.fill()),pn.needsUpdate=!0}U(),document.fonts&&document.fonts.ready.then(()=>U());function V(){const j=new Pe;return j.add(u(new Ue(2.7,1.65,.1),o.woodD)),j.add(p(new Ut(new Zt(2.45,1.35),new Cn({map:pn,toneMapped:!1})),0,0,.06)),j.add(p(u(new Ue(2.9,.14,.2),o.wood),0,.9,.02)),j.add(p(z(.18),0,1.08,.06)),j}{const j=qn.war,C=oe(j,{pitch:.62}),Se=Nt+j.wallH;Je(C,Q(3.4,2,.86),-2.5,-.6);{const ae=new Zt(3,1.7,26,16),y=ae.attributes.position,P=[];for(let A=0;A<y.count;A++){const O=y.getX(A),ie=y.getY(A),pe=Math.max(0,Math.sin(O*2.1+1)*Math.cos(ie*2.7)*.1+Math.sin(O*5+ie*3)*.03);y.setZ(A,pe),P.push(...pe>.08?[.86,.82,.76]:pe>.03?[.5,.38,.28]:pe>.005?[.42,.55,.32]:[.32,.5,.62])}ae.setAttribute("color",new Pt(P,3)),ae.computeVertexNormals();const R=x(p(u(ae,new Zo({vertexColors:!0,gradientMap:c}),!1),-2.5,Nt+.91,-.6),-Jt/2,0,0);C.g.add(R);for(const[A,O,ie]of[[-.9,-.3,l.red],[.4,.3,"#3f5f8f"],[1,-.4,l.gold],[-.2,-.5,l.red]])C.g.add(p(u(new it(.012,.012,.24,4),o.dark,!1),-2.5+A,Nt+1.05,-.6+O)),C.g.add(p(u(new Ue(.12,.07,.01),d(ie),!1),-2.5+A+.06,Nt+1.13,-.6+O));for(const[A,O]of[[-1.55,-.85],[1.55,.85]])Je(C,B(),-2.5+A,-.6+O).position.y=Nt+.9}Je(C,se(),-6.1,-2.6,Nn(-6.1,-2.6,-2.5,-.6)),Je(C,le(1.6,[l.redD,l.bone,l.red,l.black,l.redL,l.redD]),-4.6,.6),bt(C,"N",V(),3.8,Nt+1.95,.12),bt(C,"N",Z(),-2.5,Nt+2.2,.1),bt(C,"N",Z(),.9,Nt+2.1,.1),bt(C,"N",W(1,1.9),-5.4,Se-.3,.04),bt(C,"N",W(1,1.9),6.4,Se-.3,.04),bt(C,"W",te(4),.6,Nt,.3),bt(C,"E",fe(l.red),-2,Nt+1.9,.1),bt(C,"E",fe(l.black),1.2,Nt+1.9,.1),Je(C,Ee(7),6.3,-3.3),Je(C,Ee(0,.85),-6.7,3.5),Je(C,Ke(),6.3,1.6,-Jt/2),Je(C,at(.6),5.3,3.6,.3),Je(C,at(.45),5.9,3.7,.9),Je(C,_e(.9),-6.6,-.6),Je(C,Ye(),-.9,-2.2),Fe("plaza",...Yt(j,0,7.4),5.8,3.6,-j.ry,.014),mt(C,st(),-4.4,6,.3),mt(C,st(),5.6,5.9,-.2),mt(C,ut(3.4),-2.6,5),mt(C,ut(3.4),2.6,5),mt(C,Ze(2.6),-7,6.2),mt(C,Ze(2.2),7.8,5.4),mt(C,Ee(0),-6.2,5),mt(C,dt(2.4),-3,-6),mt(C,_e(),4.4,-5.6),mt(C,_e(.9),5,-6.1),mt(C,_e(1,!0),3.6,-6.2,.4),mt(C,x(te(4),0,Jt,0),.8,-5.6),mt(C,Ft(3),-8.6,-1,Jt/2)}{const j=qn.library,C=oe(j,{pitch:.66,stairHole:[4,4.84,-2,0]}),Se=Nt+j.wallH;for(const P of[-3.6,-1.4])Je(C,ht(2),P,-j.d/2+yn/2+.27);for(const P of[-2.1,.3])Je(C,ht(2),-j.w/2+yn/2+.27,P,Jt/2);const ae=Mt("books");Je(C,ae.g,1.8,-1.2),Je(C,St(.18,4),2.45,-.95).position.y=Nt+.79;{const P=new Pe;P.add(p(u(new Ue(1,.45,.9),d("#5a1f2a")),0,.3,0)),P.add(p(u(new Ue(.86,.12,.74),d("#7a2a36")),0,.58,.04)),P.add(p(u(new Ue(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const R of[-1,1])P.add(p(u(new Ue(.2,.6,.9),d("#4a1822")),R*.5,.52,0));Je(C,P,-3.3,1.9,.9)}Je(C,le(1.5,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const P=new Pe;P.add(p(u(new it(.08,.2,1,8),o.woodD),0,.5,0)),P.add(x(p(u(new Ue(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),P.add(x(p(u(new Ue(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Je(C,P,2.3,2.5,-.5)}{const P=new Pe;P.add(p(u(new it(.05,.2,.9,10),o.woodD),0,.45,0));const R=p(new Pe,0,1.25,0);R.rotation.z=.4;const A=u(new Kt(.34,24,16),d("#ffffff",{map:a.globe}));R.add(A),R.add(x(u(new mn(.4,.02,6,28),o.gold),0,Jt/2,0)),P.add(R),Je(C,P,.5,3),b.push({o:A,axis:"y",v:.25})}{const P=new Pe;P.add(p(u(new it(.16,.26,.9,8),o.woodD),0,.45,0)),P.add(p(u(new Kt(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let R=0;R<3;R++){const A=R/3*Jt*2;g(P,new G(Math.cos(A)*.14,.92,Math.sin(A)*.14),new G(Math.cos(A),2,Math.sin(A)),.3,.03,o.bone,0,5)}Je(C,P,3,-3.2)}const y=[];for(const[P,R,A]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[O,ie]=Yt(j,P,R);let pe=Nt;for(let de=0;de<A;de++){const ne=M(.06,.1);y.push({x:O+M(-.03,.03),y:pe+ne/2,z:ie+M(-.03,.03),sx:M(.32,.42),sy:ne,sz:M(.24,.3),ry:j.ry+M(-.3,.3),c:T(e.BOOK_COLS)}),pe+=ne}}s.instanced(s.UNIT_BOX,y,{cast:!0}),Je(C,B(),-4.3,3.4).position.y=Nt+.42,Je(C,St(.5),-4.5,2.9),Je(C,St(.34),-4.2,2.7),bt(C,"E",W(.9,1.6),-3,Se-.3,.04),bt(C,"S",Z(),1.6,Nt+2.1,.1);{const P=new Pe;P.add(p(u(new it(2.2,2.4,7.6,22),d("#ffffff",{map:w(a.castleWall,3.5,2.4)})),0,3.8,0)),P.add(p(u(new it(2.6,2.4,.4,22),o.stone),0,7.7,0)),P.add(p(u(new gn(2.9,3.6,22),d("#ffffff",{map:w(a.roof,5,2)})),0,9.7,0)),P.add(p(z(.45),0,11.8,0));for(const[R,A]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])P.add(p(x(u(new Ue(.4,.9,.12),o.pane,!1),0,-R+Jt/2,0),Math.cos(R)*2.32,A,Math.sin(R)*2.32));P.add(p(x(W(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),mt(C,P,5.6,3.4)}Le(C.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let P=0;P<10;P++)mt(C,Xe(M(.6,.9)),M(-8.6,-6.2),M(5.3,7.1));mt(C,et(),1.2,6.2),mt(C,rt(1.6,!0),3,6.7,Jt),mt(C,Ze(2.2),-.4,5.6),mt(C,nt(0),-4.6,4.6),mt(C,at(.55),6.2,-1.4,.3),mt(C,at(.4),6.3,-.8,.8),Fe("dirt",...Yt(j,.5,6.4),4.6,2.2,-j.ry,.013),ce(C,4.42,-3.4,-.2,.84),Ct(C.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const P of[-3.6,-1.4,1])pt(C,ht(2),P,-j.d/2+yn/2+.27);for(const P of[-2.1,.3,2.5])pt(C,ht(2),-j.w/2+yn/2+.27,P,Jt/2);pt(C,Q(2.2,1,.8,o.wood),.2,.7),pt(C,ot(),-.4,.6).position.y=1.04,pt(C,ot(),.9,.9).position.y=1.04,pt(C,p(u(new Ue(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,pt(C,St(.2),-.6,1).position.y=1,pt(C,St(.14),.95,.4).position.y=1,pt(C,Ye(),.2,1.6),pt(C,Ye(),-.9,1.5),pt(C,lt(),2.4,2.9,Jt),pt(C,Ae(),-2.6,2.6),pt(C,ze(),2.9,-2.8),pt(C,le(1.3,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),.2,.7),Et(C,"S",ke(),-.6,1.75,.06),Et(C,"E",Z(),2.4,1.8,.1),pt(C,Ke(),-3.6,3.2,0)}{const j=qn.studio,C=oe(j,{pitch:.58}),Se=Nt+j.wallH,ae=Mt("paper");Je(C,ae.g,-2,-1.6);{const ie=new Pe;ie.add(u(new Ue(1.6,1.25,.08),o.wood)),ie.add(p(new Ut(new Zt(1.45,1.1),new Cn({map:a.moodboard,toneMapped:!1})),0,0,.05)),bt(C,"N",ie,1.6,Nt+1.75,.08)}Je(C,Q(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[ie,pe,de]of[[-.35,-.1,"#3f5f8f"],[0,.12,l.red],[.32,-.05,l.gold],[.12,-.2,"#5f8a52"]])Je(C,p(u(new it(.08,.09,.16,12),d(de)),0,.08,0),2.6+ie,-2+pe).position.y=Nt+.78;for(let ie=0;ie<3;ie++){const pe=p(u(new Ue(.8,.6,.04),d(T(["#efe4cc","#e2d4b6"]))),0,.3,0);pe.rotation.x=-.22,Je(C,pe,3.7-ie*.1,1.4+ie*.12,-Jt/2)}Je(C,Xe(1.1),3.8,2.8),Je(C,Xe(.9),-3.8,2.9),Je(C,ht(1.6),-j.w/2+yn/2+.27,.6,Jt/2),bt(C,"E",W(.9,1.5),.6,Se-.3,.04);const[y,P,R,A]=j.deck;C.g.add(p(u(N(new Ue(P-y,.2,A-R),2.6),d("#ffffff",{map:a.planks})),(y+P)/2,.1,(R+A)/2));const O=p(new Pe,0,.2,0);C.g.add(O),Le(O,[[y,R+.1],[y,A],[-2,A]],.85),Le(O,[[3.4,A],[P,A],[P,R+.1]],.85),m(O,I(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(O,rt(1.6,!0),3,4.4,0),m(O,Xe(1),-3.7,4),m(O,Xe(.8),3.8,7.1),m(O,nt(0),-3.9,7.3),m(O,p(u(new it(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(O,p(u(new it(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let ie=0;ie<14;ie++)mt(C,p(u(new Kt(.14,8,6),d(T([l.red,l.bone,"#d98a3a",l.redL]))),0,.14,0),M(-3.5,3.5),M(-5.2,-4.2));mt(C,Ze(2),4.9,-4.6)}const J=Mt("screen"),ue=Mt("screen");{const j=qn.workshop,C=oe(j,{pitch:.6,chimney:[-4,-1.6]}),Se=Nt+j.wallH;Je(C,J.g,-3,-1.4),Je(C,ue.g,2,-1.4),Je(C,ze(),-5,2.6);{const ae=new Pe;for(const y of[.9,1.5])ae.add(p(u(new Ue(2.4,.06,.4),o.wood),0,y,0));for(const y of[-1,1])ae.add(p(u(new Ue(.06,1.7,.4),o.woodD),y*1.2,.85,0));for(let y=0;y<7;y++)ae.add(p(je(T(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+y*.32,.93+y%2*.6,0));ae.add(p(z(.14),.9,1.65,0)),Je(C,ae,-.5,-j.d/2+yn/2+.25)}{const ae=Q(2,.8,.86,o.woodD);ae.add(p($e(),.4,.9,0)),ae.add(x(p(u(new it(.02,.02,.4,6),o.wood),-.5,.92,.1),Jt/2,0,.4)),Je(C,ae,3.9,-3.2)}{const ae=new Pe;ae.add(p(u(new Ue(.9,.8,.8),o.iron),0,.4,0)),ae.add(p(u(new Zt(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),ae.add(p(u(new it(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Je(C,ae,-5.2,.7,Jt/2)}for(const[ae,y,P,R]of[[4.2,1.7,.4,l.gold],[3.5,1.35,.26,l.ironL]]){const A=new Pe;A.add(x(u(new it(P,P,.1,18),d(R)),Jt/2,0,0));for(let O=0;O<10;O++){const ie=O/10*Jt*2;A.add(p(u(new Ue(.12,.12,.1),d(R)),Math.cos(ie)*(P+.05),Math.sin(ie)*(P+.05),0))}bt(C,"N",A,ae,Nt+y,.1),b.push({o:A,axis:"z",v:R===l.gold?.6:-.9})}bt(C,"W",te(4),-1.2,Nt,.3),bt(C,"S",W(1,1.7),-2.4,Se-.3,.04),bt(C,"S",fe(l.red),2.6,Nt+1.8,.1),Je(C,_e(),-5.2,-3.2),Je(C,at(.6),-4.6,-3.4,.3),Je(C,at(.6),5,3.2,.2),Je(C,qe(),4.3,3.4),Fe("dirt",...Yt(j,0,6.2),6.6,2.8,-j.ry,.013),mt(C,dt(2.6),-2.6,5.4),mt(C,Ie(),2.6,6.2,.4);{const ae=new Pe;ae.add(p(u(new it(.4,.45,.6,12),o.woodL),0,.3,0)),ae.add(x(p(u(new it(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),ae.add(x(p(u(new Ue(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),mt(C,ae,-5,5.6)}mt(C,_e(),5.2,5),mt(C,_e(.85),5.8,5.6),mt(C,Ze(2.4),-6.6,6.8),mt(C,Ee(0,.9),7.4,-1.4)}let Re;{const j=qn.tavern,C=oe(j,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),Se=Nt+j.wallH;{const ae=new Pe;ae.add(p(u(new Ue(.9,1.1,5),o.wood),0,.55,0)),ae.add(p(u(new Ue(1.1,.08,5.2),o.woodL),0,1.14,0));for(let P=0;P<5;P++)ae.add(p(u(new Ue(.02,.9,.9),o.woodD),-.46,.5,-2+P));for(let P=0;P<6;P++)ae.add(p(je(T(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),M(-.2,.2),1.18,-2.2+P*.8));ae.add(p(z(.2),0,1.3,2.3)),Je(C,ae,4.1,-.6);const y=new Pe;for(const P of[1.5,2])y.add(p(u(new Ue(.3,.05,4),o.wood),0,P,0));for(let P=0;P<10;P++)y.add(p(je(T(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,P%2?2.03:1.53,-1.8+P*.4));Je(C,y,5.12,-.6),Je(C,_e(.9,!0),4.85,2.6,Jt/2),Je(C,_e(.9,!0),4.85,3.4,Jt/2)}{const ae=new Pe;ae.add(p(u(N(new Ue(2.6,2,.9),1.4),o.stone),0,1,0)),ae.add(p(u(new Ue(2.9,.18,1.1),o.wood),0,2.05,.05)),ae.add(p(u(new Zt(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),ae.add(p(et(),0,0,.85)),ae.add(p(z(.22),0,2.32,.1)),Re=new Gi("#ff9a4a",12,9,2),Re.position.set(0,.9,1.2),ae.add(Re),re(ae,0,.3,.3,1.4),Je(C,ae,-1.5,-j.d/2+yn/2+.46)}Je(C,tt(),-2.2,.8),Je(C,Ye(),-3.1,.8),Je(C,Ye(),-1.3,.8),Je(C,tt(.65),1,2.3),Je(C,Ye(),.1,2.3),Je(C,Ye(),1.9,2.3),Je(C,Ye(),1,3.2);for(const[ae,y]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Je(C,Ce(),ae,y).position.y=Nt+.8;Je(C,Ye(),3.2,-2.4),bt(C,"N",Z(),2.6,Nt+2.1,.1),bt(C,"S",fe(l.black),-3,Nt+1.9,.1),bt(C,"S",W(.9,1.6),1.6,Se-.3,.04),bt(C,"W",Z(),-2.6,Nt+2.2,.1),Fe("dirt",...Yt(j,-.5,6.4),4.8,2.6,-j.ry,.013),mt(C,Q(3.6,.9,.8,o.woodL),.4,6.55),mt(C,rt(3.6,!1),.4,5.75),mt(C,rt(3.6,!1),.4,7.35,Jt);for(const[ae,y]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])mt(C,Ce(),ae,y).position.y=.84;Le(C.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[ae,y]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])mt(C,p(u(new it(.06,.08,2.6,6),o.woodD),0,1.3,0),ae,y);he(C.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),mt(C,_e(),3,5.2),mt(C,_e(.8,!0),2.6,7.9,.3),mt(C,D("TAVERN"),-6.4,3.6,-Jt/2),mt(C,Ze(2.2),-8.4,5.6),ce(C,-4.89,-3.6,-.6,.9),Ct(C.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[ae,y]of[[-2.6,l.red],[.8,"#3f5f8f"],[4,l.redD]])pt(C,S(y),ae,-2.75),pt(C,Ke(),ae+.95,-3.4,Jt/2).scale.setScalar(.7),pt(C,$(.8,1.6),ae-.5,-1.35),pt(C,St(.16),ae-.62,-3.55);for(const ae of[-.9,2.4])pt(C,we(2.5),ae,-2.6);{const ae=u(new Zt(8.6,1.1),d(l.redD),!1);ae.rotation.x=-Jt/2,pt(C,ae,.4,.9).position.y=.212}pt(C,ge(),.8,3.45,Jt),pt(C,rt(1.6,!0),2.8,3.4,Jt),pt(C,Q(.9,.7,.8,o.woodL),4.4,1.6),pt(C,Ye(),4.4,2.4),pt(C,St(.16,0),4.5,1.5).position.y=1;{const ae=new Pe;ae.add(p(u(new it(.06,.12,.8,8),o.woodD),0,.4,0)),ae.add(p(u(new it(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),ae.add(x(p(u(new li(.24,14),d("#5f8fa8"),!1),0,.92,0),-Jt/2,0,0)),pt(C,ae,-2.2,3.3)}pt(C,Xe(.9),-3.6,3.3),Et(C,"S",fe(l.red),-1.2,1.7,.1),Et(C,"E",W(.9,1.5),1.6,2.5,.04)}return{HOUSES:He,buildHouse:oe,inH:Je,outH:mt,onWall:bt,W2:Yt,deskF:J,deskB:ue,hearthLight:Re,drawBoard:U}}const{PI:on}=Math;function Vo(s,e,t){let n=1e9;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[l,a]=t[i+1],c=l-r,h=a-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(e-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,e-o-h*f))}return n}function dd(s,e,t,n){const i=t?[...s,s[0]]:s,r=[],o=[],l=[];let a=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(t&&(h===0||h===i.length-1)){const T=s[s.length-1],w=s[1];u=w[0]-T[0],p=w[1]-T[1]}const x=Math.hypot(u,p)||1,m=-p/x,g=u/x,M=i[h];if(h>0){const T=i[h-1];a+=Math.hypot(M[0]-T[0],M[1]-T[1])}if(r.push(M[0]+m*e/2,n,M[1]+g*e/2,M[0]-m*e/2,n,M[1]-g*e/2),o.push(0,a,1,a),h>0){const T=h*2;l.push(T-2,T,T-1,T-1,T,T+1)}}const c=new nn;return c.setAttribute("position",new Pt(r,3)),c.setAttribute("uv",new Pt(o,2)),c.setIndex(l),c.computeVertexNormals(),c}async function iS(s,e,t){const{scene:n,TEX:i,toon:r,mesh:o,at:l,rot:a,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:x,instanced:m}=s,{SPINNERS:g,plantFlora:M,skullPole:T,totem:w,brazier:N,hay:L}=e,v=new G(-62,27,70).normalize(),b=new Ut(new Kt(600,32,16),new Gn({side:Un,depthWrite:!1,fog:!1,uniforms:{zen:{value:new xt("#2b3b78")},mid:{value:new xt("#7f8fc4")},hor:{value:new xt("#f2aa7c")},low:{value:new xt("#c98a72")},sunCol:{value:new xt("#ffa864")},sunDir:{value:v}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));b.renderOrder=-100,b.frustumCulled=!1,n.add(b),n.fog=new Hc("#d6a487",230,640),n.add(new um("#9aa8d8","#4a3428",1.05));const z=new of("#ffb070",2.3);z.position.copy(v).multiplyScalar(110),z.castShadow=!0,z.shadow.mapSize.set(4096,4096),Object.assign(z.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),z.shadow.camera.updateProjectionMatrix(),z.shadow.bias=-5e-4,z.shadow.normalBias=.05,n.add(z);const F=new Jr;for(let Ae=0;Ae<=160;Ae++){const ze=Ae/160*on*2,ke=ds(ze),I=Math.cos(ze)*ke,je=-Math.sin(ze)*ke;Ae===0?F.moveTo(I,je):F.lineTo(I,je)}const q=new da(F,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});q.rotateX(-on/2);const re=c(i.grass,1/9,1/9);function Q(Ae,ze){const ke=i.strata.clone();return ke.wrapS=si,ke.wrapT=Hn,ke.repeat.set(1/8,-1/(ze-Ae)),ke.offset.set(0,ze/(ze-Ae)),ke.needsUpdate=!0,r("#ffffff",{map:ke})}const B=new Ut(q,[r("#ffffff",{map:re}),Q(-1.9,1.5)]);B.position.y=-2.9,B.receiveShadow=!0,n.add(B);const se=ky(s,await t);n.add(se.underside);for(const Ae of["walls","towers","gate"])n.add(se[Ae]);const le=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),Z=new Kt(1,16,12),W=new Pe;n.add(W);for(let Ae=0;Ae<22;Ae++){const ze=Ae/22*on*2+d(-.12,.12),ke=d(100,260),I=d(1.6,3.2),je=new Pe;for(let $e=0;$e<7;$e++){const qe=new Ut(Z,le),Ie=d(1.6,2.8)*I;qe.scale.set(Ie,Ie*.7,Ie),qe.position.set(d(-3.5,3.5)*I,d(-.3,1.2)*I,d(-1.8,1.8)*I),je.add(qe)}je.position.set(Math.cos(ze)*ke,d(-45,28),Math.sin(ze)*ke),W.add(je)}{const Ae=[],ze=[],ke=[];for(let I=0;I<420;I++){const je=I/420*on*2+d(-.006,.006),$e=ds(je);if(h()<.55){const qe=d(.5,2.8),Ie=d(-.55,-1.8);Ae.push({x:Math.cos(je)*($e+.8),y:Ie-qe/2,z:Math.sin(je)*($e+.8),sx:d(.7,1.3),sy:qe,sz:d(.7,1.3),rx:on+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}I%2===0&&ze.push({x:Math.cos(je)*($e+.3),y:-.06,z:Math.sin(je)*($e+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let I=0;I<7;I++){const je=d(0,on*2),$e=ds(je)+d(4,12);ke.push({x:Math.cos(je)*$e,y:d(-14,-4),z:Math.sin(je)*$e,s:d(.8,2.2)})}m(new gn(.06,1,4),Ae,{}),m(new Kt(1,10,6),ze,{});for(const I of ke){const je=new Pe;je.add(l(o(new Si(1.2*I.s,0),r("#6e5240")),0,-.4*I.s,0)),je.add(l(o(new it(1*I.s,1.1*I.s,.3*I.s,9),r("#6f8b49")),0,.5*I.s,0)),h()<.6&&je.add(l(e.tree(f(["pine","autumn","dead"]),.5*I.s),0,.6*I.s,0)),je.position.set(I.x,I.y,I.z),je.rotation.y=d(0,6),n.add(je)}}const te=Q(-.75,1.35),fe={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},Ee=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Ke(Ae,ze,ke,I,je){M(ze,ke,Ae.position.x+I,Ae.position.z+je,Ae.position.y)}function at(Ae,ze,ke,I){const{trees:je,clear:$e}=fe[ke],qe=ze/10,Ie=[...$e.map(([Ce,he,D])=>[Ce,he,D]),...I.map(([Ce,he])=>[Ce,he,.16])],tt=(Ce,he,D)=>{for(let S=0;S<60;S++){const $=d(0,on*2),we=d(Ce,he),ge=Math.cos($)*we,Fe=Math.sin($)*we;if(Ie.every(([He,ye,Te])=>Math.hypot(ge-He,Fe-ye)>Te+D))return Ie.push([ge,Fe,D]),[ge*ze,Fe*ze]}return null};for(let Ce=0;Ce<7;Ce++){const he=tt(.3,.74,.12);he&&M(je[Ce%je.length],d(1,1.3)*qe,Ae.position.x+he[0],Ae.position.z+he[1],Ae.position.y)}for(let Ce=0;Ce<9;Ce++){const he=tt(.15,.78,.05);he&&M(f(Ee),d(.75,1.25)*qe,Ae.position.x+he[0],Ae.position.z+he[1],Ae.position.y)}}const _e=c(i.water,1,4);function Ye(Ae,ze,ke,I,je,$e){const qe=new Pe;qe.position.set(Ae,ze,ke),n.add(qe);const Ie=new Jr;for(let D=0;D<=56;D++){const S=D/56*on*2,$=I*(1+.12*Math.sin(3*S+$e)+.07*Math.sin(5*S+2*$e));D===0?Ie.moveTo(Math.cos(S)*$,-Math.sin(S)*$):Ie.lineTo(Math.cos(S)*$,-Math.sin(S)*$)}const tt=new da(Ie,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});tt.rotateX(-on/2),qe.add(l(new Ut(tt,[r("#ffffff",{map:re}),te]),0,-1.75,0));const Ce=o(new gn(I*.95,I*2.3,12,3),r("#6e5240"),!1);Ce.rotation.x=on,Ce.position.y=-2.1-I*1.15,qe.add(Ce);for(let D=0;D<14;D++){const S=d(0,on*2),$=d(.2,.9);qe.add(l(a(o(new Si(d(.8,2)*(I/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*I*.95*$,-2.1-(1-$)*I*2.3,Math.sin(S)*I*.95*$))}for(let D=0;D<26;D++){const S=d(0,on*2),$=d(.6,2.4);qe.add(l(a(o(new gn(.07,$,4),r("#4a3424")),on,0,0),Math.cos(S)*I*1.02,-.6-$/2,Math.sin(S)*I*1.02))}const he=I/10;if(je==="ruin"){const D=l(new Pe,-I*.25,0,-I*.1);D.add(l(o(new it(1.7*he,1.9*he,5.5*he,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*he,0));for(let $=0;$<7;$++){const we=$/7*on*2;D.add(l(o(new Ue(.7*he,d(.4,1.6)*he,.5*he),x.stone),Math.cos(we)*1.6*he,5.6*he,Math.sin(we)*1.6*he))}D.add(l(o(new Ue(.4*he,1*he,.1),x.pane,!1),0,2.6*he,1.85*he)),qe.add(D);for(const $ of[-1,1])qe.add(l(o(new Ue(.7*he,3.2*he,.7*he),x.stone),I*.35+$*1.3*he,1.6*he,I*.3));qe.add(l(o(new Ue(3.3*he,.6*he,.7*he),x.stone),I*.35,3.4*he,I*.3)),qe.add(l(T(2.4),I*.1,0,I*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[$,we,ge]of S)Ke(qe,ge,1.2*he,$*I,we*I);at(qe,I,je,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(je==="farm"){const D=l(new Pe,-I*.2,0,-I*.15);D.add(l(o(u(new Ue(3.6*he,2.2*he,2.8*he),2.2*he,1.3),x.plankWall),0,1.1*he,0));const S=new it(2.1*he,2.1*he,4*he,3,1);D.add(l(a(o(S,r("#ffffff",{map:i.roof})),0,0,on/2),0,2.2*he+.9*he,0)),D.add(l(o(new Ue(.8*he,1.5*he,.1),x.woodD),0,.75*he,1.42*he)),D.add(l(o(new Ue(.6*he,.6*he,.1),x.pane,!1),1.1*he,1.3*he,1.42*he)),qe.add(D);const $=o(new Zt(I*.8,I*.5),r("#ffffff",{map:i.field}),!1);$.rotation.x=-on/2,$.position.set(I*.3,.03,I*.25),qe.add($);const we=l(new Pe,I*.35,0,-I*.45);we.add(l(o(new it(.8*he,1.2*he,4*he,12),r("#e3d5b6")),0,2*he,0)),we.add(l(o(new gn(1.2*he,1.4*he,12),r("#ffffff",{map:i.roof})),0,4.7*he,0));const ge=l(new Pe,0,3.6*he,1*he);for(let Fe=0;Fe<4;Fe++){const He=new Pe;He.rotation.z=Fe*on/2,He.add(l(o(new Ue(.5*he,2.6*he,.04),r("#e3d5b6",{side:ln})),.3*he,1.5*he,0)),ge.add(He)}we.add(ge),g.push({o:ge,axis:"z",v:.4}),qe.add(we),Ke(qe,"tree_maple",1.1*he,-I*.55,I*.4),qe.add(l(L(.5*he),I*.05,0,I*.55)),at(qe,I,je,[[-.55,.4]])}else if(je==="shrine"){for(let S=0;S<6;S++){const $=S/6*on*2;qe.add(l(a(o(new Ue(.7*he,d(2,3)*he,.5*he),x.stone),0,-$,d(-.1,.1)),Math.cos($)*3*he,1.2*he,Math.sin($)*3*he))}qe.add(w(4*he));for(const S of[.8,3.9])qe.add(l(N(0,1.2*he),Math.cos(S)*1.8*he,0,Math.sin(S)*1.8*he));const D=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,$]of D)Ke(qe,"tree_maple",1.1*he,S*I,$*I);at(qe,I,je,D)}else{const D=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[we,ge,Fe]of D)Ke(qe,Fe,1.2*he,we*I,ge*I);at(qe,I,je,D),qe.add(l(a(o(new li(I*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-on/2,0,0),I*.25,.04,I*.3));const S=new Ut(new Zt(1.8*he,I*3.2),new Cn({map:_e,color:"#acb5c8",transparent:!0,opacity:.85,side:ln,depthWrite:!1}));S.position.set(I*.62,-I*1.6,I*.62),S.rotation.y=on/4,qe.add(S);const $=o(new Zt(1.2*he,I*.55),r("#6fa9c9"),!1);$.rotation.set(-on/2,0,-on/4),$.position.set(I*.45,.05,I*.45),qe.add($)}return qe}Ye(-150,6,-105,11,"ruin",.4),Ye(165,-4,-60,13,"farm",1.7),Ye(115,20,135,9,"shrine",2.9),Ye(-165,-14,85,12,"falls",4.1);const st={};function ut(Ae){const ze=st[Ae];if(ze)return ze;const ke={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Ae],I=s.canvasTex(256,256,($e,qe,Ie)=>{const tt=$e.createRadialGradient(qe/2,Ie/2,qe*.3,qe/2,Ie/2,qe/2);tt.addColorStop(0,"rgba(255,255,255,1)"),tt.addColorStop(1,"rgba(255,255,255,0)"),$e.fillStyle=tt,$e.fillRect(0,0,qe,Ie)});I.wrapS=I.wrapT=Hn;const je={src:ke,mask:I};return st[Ae]=je,je}let Ze=0;function dt(Ae,ze,ke,I,je,$e=0,qe=.012,Ie=4){const tt=ut(Ae),Ce=c(tt.src,I*2/Ie,je*2/Ie),he=new Ut(new Zt(I*2,je*2),r("#ffffff",{map:Ce,alphaMap:tt.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Ze}));return he.rotation.set(-on/2,0,$e),he.position.set(ze,qe,ke),he.receiveShadow=!0,he.renderOrder=-10+Ze++*.01,n.add(he),he}const Ft={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},ht={},Mt=Ae=>{const ze=Math.max(0,Math.min(1,Ae));return ze*ze*(3-2*ze)},St=[],Le=Ae=>Ae==="cobble"||Ae==="flag",Xe=Ae=>Ae.closed?[...Ae.line,Ae.line[0]]:Ae.line;function et(Ae,ze){let ke=null,I=1e9;for(const je of Ti){if(je===ze||je.kind==="stones")continue;const $e=Vo(Ae[0],Ae[1],Xe(je))-je.w/2;$e<I&&(I=$e,ke=je)}return I<.6?ke:null}function rt(Ae,ze,ke){const I=Xe(ke),je=ke.w/2+.02,$e=ze?[...Ae].reverse():[...Ae];let qe=0;for(;qe<$e.length-2&&Vo($e[qe][0],$e[qe][1],I)<je;)qe++;if(qe===0)return null;let Ie=$e[qe-1],tt=$e[qe];for(let D=0;D<12;D++){const S=[(Ie[0]+tt[0])/2,(Ie[1]+tt[1])/2];Vo(S[0],S[1],I)<je?Ie=S:tt=S}const he=[[(Ie[0]+tt[0])/2,(Ie[1]+tt[1])/2],...$e.slice(qe)];return ze?he.reverse():he}function nt(Ae,ze){const ke=Ae.kind;let I=Xe(Ae);const je=Ae.closed?[!1,!1]:[!Ae.refs[0],!Ae.refs[Ae.refs.length-1]];if(!Ae.closed&&Le(ke))for(const Ne of[0,1]){if(!je[Ne])continue;const Y=Ne?I[I.length-1]:I[0],ve=et(Y,Ae);if(!ve||ve.kind===ke||!Le(ve.kind))continue;const xe=rt(I,Ne===1,ve);if(!xe)continue;I=xe,je[Ne]=!1;const Ge=Ne?I[I.length-1]:I[0],ee=Ne?I[I.length-2]:I[1],K=Math.hypot(Ge[0]-ee[0],Ge[1]-ee[1])||1;St.push({x:Ge[0],z:Ge[1],tx:(Ge[0]-ee[0])/K,tz:(Ge[1]-ee[1])/K,w:Ae.w,kind:ke})}const $e=I.length,[qe,Ie,tt,Ce]=Ft[ke],he=[0];for(let Ne=1;Ne<$e;Ne++){const Y=I[Ne],ve=I[Ne-1];he.push(he[Ne-1]+Math.hypot(Y[0]-ve[0],Y[1]-ve[1]))}const D=he[$e-1],S=.02+ze*.0015,$=[],we=[],ge=[],Fe=[];for(let Ne=0;Ne<$e;Ne++){const Y=I[Math.max(0,Ne-1)],ve=I[Math.min($e-1,Ne+1)];let xe=ve[0]-Y[0],Ge=ve[1]-Y[1];if(Ae.closed&&(Ne===0||Ne===$e-1)){const ce=I[$e-2],Ve=I[1];xe=Ve[0]-ce[0],Ge=Ve[1]-ce[1]}const ee=Math.hypot(xe,Ge)||1,K=-Ge/ee,me=xe/ee;let Oe=1,_=1;if(!Ae.closed)for(const ce of[0,1]){const Ve=ce?D-he[Ne]:he[Ne];je[ce]&&(Oe=Math.max(Oe,1+.5*(1-Mt(Ve/2.4))),_=Math.min(_,Mt(Ve/2.2)))}const H=Ae.w/2*Oe,X=[-(H+tt),-(H-tt),H-tt,H+tt],k=[0,_,_,0],oe=I[Ne];for(let ce=0;ce<4;ce++){const Ve=oe[0]+K*X[ce],_t=oe[1]+me*X[ce];$.push(Ve,S,_t),we.push(Ve/Ie,_t/Ie),ge.push(1,1,1,k[ce])}if(Ne>0)for(let ce=0;ce<3;ce++){const Ve=(Ne-1)*4+ce,_t=Ve+1,Et=Ne*4+ce,pt=Et+1;Fe.push(_t,pt,Ve,Ve,pt,Et)}}const He=new nn;He.setAttribute("position",new Pt($,3)),He.setAttribute("uv",new Pt(we,2)),He.setAttribute("color",new Pt(ge,4)),He.setIndex(Fe),He.computeVertexNormals();let ye=ht[ke];ye||(ye=r("#ffffff",{map:qe,normalMap:p(Ce,ke==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),ht[ke]=ye);const Te=new Ut(He,ye);Te.receiveShadow=!0,Te.renderOrder=-5+ze*.01,n.add(Te)}const ot=[];function lt(Ae){const ze=Ae.length,ke=Ae.map(([qe,Ie])=>Vo(qe,Ie,ma)<1.35);if(!ke.some(Boolean))return[{pts:[...Ae],closed:!0}];const I=ke.findIndex((qe,Ie)=>!qe&&ke[(Ie-1+ze)%ze]),je=[];let $e=[];for(let qe=0;qe<=ze;qe++){const Ie=(I+qe)%ze;if(!ke[Ie]&&qe<ze){$e.push(Ae[Ie]);continue}if($e.length>1&&je.push({pts:$e,closed:!1}),qe<ze&&ke[Ie]&&$e.length){let tt=qe;for(;tt<ze&&ke[(I+tt)%ze];)tt++;const Ce=$e[$e.length-1],he=Ae[(I+tt)%ze],D=he[0]-Ce[0],S=he[1]-Ce[1],$=Math.hypot(D,S);ot.push({x:(Ce[0]+he[0])/2,z:(Ce[1]+he[1])/2,ang:Math.atan2(-S,D),len:$})}$e=[]}return je}Ti.forEach((Ae,ze)=>{if(Ae.kind!=="stones"){nt(Ae,ze);return}const ke=i.roadStones.clone();ke.wrapS=Hn,ke.wrapT=si,ke.repeat.set(1,1/1.3),ke.needsUpdate=!0;const I=r("#ffffff",{map:ke,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const je of lt(Ae.line)){const $e=new Ut(dd(je.pts,Ae.w,je.closed,.03),I);$e.receiveShadow=!0,n.add($e)}});{const Ae=(tt,Ce,he,D,S,$)=>{const we=S-he,ge=$-D,Fe=we*we+ge*ge||1,He=Math.max(0,Math.min(1,((tt-he)*we+(Ce-D)*ge)/Fe));return Math.hypot(tt-he-we*He,Ce-D-ge*He)},ze=(tt,Ce,he,D)=>{for(const S of Ti){if(S===he)continue;const $=Xe(S),we=S.w/2+D;for(let ge=0;ge<$.length-1;ge++){const Fe=$[ge],He=$[ge+1];if(!(Math.abs(Fe[0]-tt)>we+1||Math.abs(Fe[1]-Ce)>we+1)&&Ae(tt,Ce,Fe[0],Fe[1],He[0],He[1])<we)return!0}}return!1},ke=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],I=(tt,Ce)=>{const he=Math.hypot(tt,Ce),D=Math.atan2(Ce,tt);if(he>7.4&&he<9&&ke.some(S=>{let $=Math.abs(D-S)%(2*on);return $=Math.min($,2*on-$),$*he<1.45}))return!0;for(const S of vs)if(S.kind==="house"){const[$,we]=io(S,tt,Ce);if(Math.abs($)<S.w/2+.9&&Math.abs(we)<S.d/2+.9||S.deck&&$>S.deck[0]-.5&&$<S.deck[1]+.5&&we>S.deck[2]&&we<S.deck[3]+.5)return!0}else if(Math.hypot(tt-S.x,Ce-S.z)<S.r+.6)return!0;for(const S of sh)if(S.kind==="hut"){const[$,we]=io(S,tt,Ce);if(Math.abs($)<S.w/2+.9&&Math.abs(we)<S.d/2+.9)return!0}else if(Math.hypot(tt-S.x,Ce-S.z)<(S.r||2)+.4)return!0;return Math.hypot(tt,Ce)>ds(Math.atan2(Ce,tt))-1.2},je=[],$e=[],qe=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const tt of Ti){if(tt.kind==="stones")continue;const Ce=Xe(tt),he=tt.kind!=="dirt",D=S=>{const $=Ce[Math.max(0,S-1)],we=Ce[Math.min(Ce.length-1,S+1)],ge=Math.hypot(we[0]-$[0],we[1]-$[1])||1;return[-(we[1]-$[1])/ge,(we[0]-$[0])/ge]};for(let S=0;S<Ce.length;S++){const[$,we]=D(S),ge=Math.atan2($,we)+on/2,Fe=Ce[S];for(const He of[-1,1]){const ye=tt.w/2+.07,Te=Fe[0]+$*He*ye,Ne=Fe[1]+we*He*ye;if(!(I(Te,Ne)||ze(Te,Ne,tt,.25))&&(he&&je.push({x:Te,y:.04,z:Ne,sx:.2,sy:.13,sz:d(.4,.47),ry:ge+d(-.04,.04),c:tt.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const Y=ye+(he?.25:.1)+d(0,.35),ve=Fe[0]+$*He*Y,xe=Fe[1]+we*He*Y;if(!I(ve,xe)&&!ze(ve,xe,tt,.2)){const Ge=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let ee=0;ee<5;ee++)$e.push({x:ve+d(-.15,.15),y:.11,z:xe+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Ge})}}}}if(!he&&tt.w>1.5)for(const S of[-1,1]){const $=Ce.map((ge,Fe)=>{const[He,ye]=D(Fe);return[ge[0]+He*S*.45,ge[1]+ye*S*.45]}),we=new Ut(dd($,.18,!1,.035),qe);we.receiveShadow=!0,we.renderOrder=-4,n.add(we)}}for(const tt of St){const Ce=-tt.tz,he=tt.tx,D=Math.max(2,Math.round((tt.w+.3)/.42));for(let S=0;S<D;S++){const $=-((tt.w+.3)/2)+(S+.5)*(tt.w+.3)/D;je.push({x:tt.x+Ce*$-tt.tx*.1,y:.045,z:tt.z+he*$-tt.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(Ce,he)+on/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new Ca(1,1,1,1,.2),je,{cast:!1});const Ie=m(new gn(.06,.24,4),$e,{});Ie&&(Ie.userData.noLine=!0)}return{models:se,skyDome:b,sun:z,island:B,cloudRing:W,grassTex:re,strataMat:Q,crossings:ot,patch:dt}}const{PI:gt}=Math;function sS(s){const{M:e,COL:t,TEX:n,toon:i,glow:r,mesh:o,rbox:l,at:a,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:x,tiled:m,planarUV:g,wallUV:M}=s,T=s.scene,w=[],N=[],L=[],v=[],b=x(64,128,(E,U,V)=>{const J=()=>{E.beginPath(),E.moveTo(U/2,2),E.bezierCurveTo(U*.62,V*.3,U*.98,V*.55,U*.86,V*.8),E.bezierCurveTo(U*.76,V*.98,U*.24,V*.98,U*.14,V*.8),E.bezierCurveTo(U*.02,V*.55,U*.38,V*.3,U/2,2),E.closePath()},ue=E.createLinearGradient(0,V,0,0);ue.addColorStop(0,"rgba(255, 246, 214, 1)"),ue.addColorStop(.3,"rgba(255, 196, 92, 1)"),ue.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),ue.addColorStop(1,"rgba(220, 40, 30, 0)"),J(),E.fillStyle=ue,E.fill(),E.save(),E.translate(U*.5,V*.92),E.scale(.5,.55),E.translate(-U*.5,-V*.92),J(),E.fillStyle="rgba(255, 252, 235, 0.9)",E.fill(),E.restore()});b.wrapS=b.wrapT=Hn;const z=new ns({map:b,color:new xt(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),F=new ns({map:b,color:new xt(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),q=new ns({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:yi});function re(E,U,V,J,ue=1){const Re=new Pe,j=new Xi(z);j.center.set(.5,.06),j.scale.set(.34*ue,.68*ue,1),Re.add(j);const C=new Xi(F);C.center.set(.5,.04),C.scale.set(.18*ue,.34*ue,1),Re.add(C);const Se=new Xi(q);return Se.scale.setScalar(1.5*ue),Se.position.y=.2*ue,Re.add(Se),Re.position.set(U,V,J),E.add(Re),N.push({f:Re,ph:u(0,6),s:ue}),Re}const Q=(()=>{const E=new Pe,U=o(new Kt(.5,16,12),e.bone);U.scale.set(1,.92,1.05),U.position.y=.14,E.add(U),E.add(a(o(new Ue(.62,.28,.5),e.bone),0,-.24,.16));for(const V of[-1,1]){const J=o(new Kt(.14,10,8),e.dark,!1);J.scale.z=.5,J.position.set(V*.19,.08,.45),E.add(J)}return E.add(c(a(o(new gn(.06,.12,3),e.dark,!1),0,-.1,.5),gt,0,0)),E.add(a(o(new Ue(.42,.03,.02),e.dark,!1),0,-.25,.42)),E})();function B(E=.3){const U=Q.clone();return U.scale.setScalar(E),U}function se(E=1,U=e.bone){const V=new Pe;for(const J of[-1,1]){const ue=o(new mn(.5*E,.09*E,6,12,gt*.6),U);ue.rotation.set(0,J>0?0:gt,.25),ue.position.set(J*.35*E,0,0),V.add(ue)}return V}let le=7;const Z=(E,U)=>E+(U-E)*((le=le*16807%2147483647)/2147483647);function W(E,U,V,J,ue,Re,j,C,Se=0){const ae=a(o(Se?l(Re,j,C,Se):new Ue(Re,j,C),U),V,J,ue);return E.add(ae),ae}function te(E,U,V,J=.75){const ue=new Ue(E,U,V),Re=ue.attributes.position;for(let j=0;j<Re.count;j++)Re.getY(j)<0&&(Re.setX(j,Re.getX(j)*J),Re.setZ(j,Re.getZ(j)*J));return ue.computeVertexNormals(),ue}function fe(E,U,V,J,ue,Re,j=Math.max(2,Math.round(V/.2))){const C=V/j;for(let Se=0;Se<j;Se++)W(E,Re,0,J+Z(-.004,.004),-V/2+C*(Se+.5),U+Z(-.02,.02),ue,C-.012,.012)}function Ee(E,U,V,J,ue,Re){W(E,e.iron,U-ue*.055,V,J-Re*.012,.13,.014,.028),W(E,e.iron,U-ue*.012,V,J-Re*.055,.028,.014,.13)}const Ke=(()=>{const E=[];for(let U=0;U<=10;U++){const V=U/10;E.push(new Be(.3+Math.sin(V*gt)*.06,(V-.5)*.8))}return new Yc(E,20)})(),at=E=>.3+Math.sin((E/.8+.5)*gt)*.06;function _e(E=1,U=!1){const V=new Pe,J=o(Ke,i("#ffffff",{map:n.planks}));for(const ue of[-.33,-.17,.17,.33])J.add(a(c(o(new mn(at(ue)+.006,.02,5,24),e.iron),gt/2,0,0),0,ue,0));for(const ue of[-.17,.17])for(let Re=0;Re<6;Re++){const j=Re/6*gt*2;J.add(a(o(new Kt(.016,5,4),e.ironL),Math.cos(j)*(at(ue)+.025),ue,Math.sin(j)*(at(ue)+.025)))}J.add(a(c(o(new li(.3,20),e.woodD),-gt/2,0,0),0,.392,0)),J.add(a(c(o(new mn(.3,.018,4,24),e.woodD),gt/2,0,0),0,.4,0));for(const ue of[-.1,0,.1])J.add(a(o(new Ue(.004,.004,.5),e.dark,!1),ue,.394,0));return J.add(a(o(new it(.035,.035,.03,8),e.woodL),.15,.4,.05)),J.scale.setScalar(E),U?(J.rotation.z=gt/2,J.position.y=.36*E):J.position.y=.4*E,V.add(J),V}const Ye=i("#ffffff",{map:x(128,128,(E,U,V)=>{E.fillStyle="#7a5538",E.fillRect(0,0,U,V);for(let J=0;J<4;J++)E.fillStyle=J%2?"#70502f":"#84603f",E.fillRect(0,J*32,U,30),E.fillStyle="rgba(40, 24, 14, 0.6)",E.fillRect(0,J*32+30,U,2)})});function st(E=.6){const U=new Pe;W(U,Ye,0,E/2,0,E*.94,E*.94,E*.94);const V=E*.09,J=E/2-V/2;for(const ue of[-1,1])for(const Re of[-1,1])W(U,e.woodD,ue*J,E/2,Re*J,V,E,V),W(U,e.woodD,0,E/2+ue*J,Re*J,E-V*2,V,V),W(U,e.woodD,ue*J,E/2+Re*J,0,V,V,E-V*2);for(const ue of[-1,1]){const Re=W(U,e.woodD,0,E/2,ue*(E*.47+.006),E*1.1,V*.8,V*.4);Re.rotation.z=ue*gt/4}for(const ue of[-1,1])for(const Re of[-1,1])for(const j of[-1,1])W(U,e.iron,ue*(J+.006),E/2+Re*(J+.006),j*(J+.006),V*1.2,V*1.2,V*1.2);return U}function ut(){const E=new Pe,U=o(new Kt(.28,12,10),i("#b8a07a"));return U.scale.set(1,1.15,.9),U.position.y=.3,E.add(U),E.add(a(o(new it(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),E}function Ze(E,U,V=.8,J=e.wood){const ue=new Pe,Re=.07;fe(ue,E,U,V-Re/2,Re,J);for(const C of[-1,1])W(ue,e.woodD,0,V-Re-.06,C*(U/2-.12),E-.34,.12,.04,.01),W(ue,e.woodD,C*(E/2-.12),V-Re-.06,0,.04,.12,U-.34,.01);const j=te(.1,V-Re,.1,.72);for(const[C,Se]of[[-1,-1],[1,-1],[-1,1],[1,1]])ue.add(a(o(j,e.woodD),C*(E/2-.12),(V-Re)/2,Se*(U/2-.12))),Ee(ue,C*E/2,V+.004,Se*U/2,C,Se);W(ue,e.woodD,0,.17,0,E-.3,.06,.05,.01);for(const C of[-1,1])W(ue,e.woodD,C*(E/2-.12),.17,0,.05,.06,U-.3,.01);return ue}function dt(E=.7){const U=new Pe;U.add(a(o(new it(E,E,.08,24),e.wood),0,.76,0)),U.add(a(c(o(new mn(E,.022,5,32),e.iron),gt/2,0,0),0,.76,0));for(const V of[-E*.5,0,E*.5])W(U,e.dark,V,.801,0,.006,.004,Math.sqrt(E*E-V*V)*1.96);U.add(a(o(new it(.08,.11,.7,10),e.woodD),0,.37,0)),U.add(a(o(new it(.13,.13,.06,10),e.iron),0,.5,0));for(let V=0;V<4;V++){const J=V*gt/2+gt/4,ue=W(U,e.woodD,Math.sin(J)*E*.25,.05,Math.cos(J)*E*.25,.09,.08,E*.6,.015);ue.rotation.y=J}return U}function Ft(){const E=new Pe;E.add(a(o(new it(.24,.24,.07,16),e.wood),0,.45,0)),E.add(a(c(o(new mn(.24,.012,4,20),e.iron),gt/2,0,0),0,.45,0));for(let U=0;U<3;U++){const V=U/3*gt*2+.5,J=o(new it(.028,.034,.46,6),e.woodD);J.position.set(Math.cos(V)*.15,.22,Math.sin(V)*.15),J.rotation.set(-Math.sin(V)*.2,0,Math.cos(V)*.2),E.add(J)}return E.add(a(c(o(new mn(.16,.014,4,14),e.woodD),gt/2,0,0),0,.17,0)),E}function ht(E=1.8,U=!0){const V=new Pe;for(const J of[-1,1])W(V,e.woodL,Z(-.01,.01),.45,J*.11,E,.07,.2,.015);for(const J of[-1,1]){const ue=J*(E/2-.2);for(const Re of[-1,1]){const j=a(o(te(.08,.44,.07,1),e.woodD),ue,.21,Re*.12);j.rotation.x=-Re*.2,V.add(j)}W(V,e.woodD,ue,.385,0,.09,.06,.44,.01),W(V,e.iron,ue,.487,.2,.1,.012,.03)}if(W(V,e.woodD,0,.14,0,E-.4,.05,.05,.01),U){for(const J of[-1,1])W(V,e.woodD,J*(E/2-.2),.74,-.21,.07,.56,.06,.012);for(const J of[.64,.9])W(V,e.woodL,Z(-.01,.01),J,-.225,E-.1,.11,.05,.015)}return V}function Mt(E=.16,U=0){const V=new Pe;if(V.add(a(o(new it(.04,.045,E,10),i("#eadfc4")),0,E/2,0)),re(V,0,E,0,.35),U){const J=new Gi("#ffb36a",U,5,2);J.position.y=E+.15,V.add(J)}return V}function St(){const E=new Pe;return E.add(a(B(.22),0,.12,0)),E.add(a(Mt(.14),0,.24,0)),E}function Le(E){const U=new Pe,V=i(E,{emissive:E,emissiveIntensity:.18});return U.add(a(o(new it(.06,.07,.2,10),V),0,.1,0)),U.add(a(o(new it(.022,.03,.1,8),V),0,.25,0)),U}function Xe(){const E=new Pe;return E.add(a(o(new it(.07,.06,.15,12),e.woodL),0,.075,0)),E.add(a(c(o(new li(.062,12),i("#efe0b0")),-gt/2,0,0),0,.14,0)),E.add(a(o(new mn(.045,.012,6,12),e.woodL),.08,.08,0)),E}function et(E=1){const U=new Pe;U.add(a(o(new it(.22*E,.16*E,.34*E,12),i("#8a4a30")),0,.17*E,0));for(let V=0;V<6;V++){const J=V/6*gt*2;d(U,new G(Math.cos(J)*.06*E,.32*E,Math.sin(J)*.06*E),new G(Math.cos(J)*.5,1,Math.sin(J)*.5),.5*E,.1*E,i(p([t.leaf,t.leafD,t.leafL])),0,5)}return U}const rt=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],nt=s.UNIT_BOX;function ot(E=2){const U=new Pe,V=2.4,J=.5;W(U,i("#3a2519"),0,V/2,-J/2+.03,E-.1,V-.1,.04);for(const Re of[-1,1])W(U,e.woodD,Re*(E/2-.04),V/2,0,.08,V,J,.015);for(let Re=0;Re<4;Re++){const j=Re<3?.27+Re*.72:V-.03;W(U,e.wood,0,j,0,E-.14,.06,J-.04),W(U,e.woodL,0,j+.01,J/2-.02,E-.12,.08,.04,.01)}W(U,e.woodD,0,.1,.02,E,.2,J,.02),W(U,e.wood,0,V+.04,.02,E+.1,.08,J+.08,.02),W(U,e.woodD,0,V+.11,.03,E+.18,.07,J+.14,.02);for(const Re of[-1,1])W(U,e.iron,Re*(E/2-.02),V-.12,J/2+.004,.06,.2,.012),W(U,e.iron,Re*(E/2-.1),V-.04,J/2+.004,.2,.06,.012);U.add(a(B(.13),E/2-.25,2.62,.05));const ue=[];for(let Re=0;Re<3;Re++){let j=-E/2+.12;for(;j<E/2-.2;){if(f()<.12){j+=.18;continue}const C=u(.07,.14),Se=u(.34,.56),ae=f()<.1?.18:0;ue.push({x:j+C/2,y:.33+Re*.72+Se/2,z:.08,sx:C,sy:Se,sz:u(.28,.36),rz:ae,c:p(rt)}),j+=C+.012+ae*.4}}return s.instanced(nt,ue,{parent:U,cast:!0}),U}function lt(E,U){const V=x(512,512,(Re,j)=>{U.forEach((C,Se)=>{Re.fillStyle=C,Re.beginPath(),Re.arc(j/2,j/2,j/2-Se*34,0,gt*2),Re.fill()}),Re.fillStyle=U[1];for(let C=0;C<12;C++){const Se=C/12*gt*2;Re.beginPath(),Re.arc(256+Math.cos(Se)*196,256+Math.sin(Se)*196,10,0,gt*2),Re.fill()}}),J=o(new li(E,48),i("#ffffff",{map:V}),!1);J.rotation.x=-gt/2,J.position.y=.012;const ue=new Pe;return ue.add(J),ue}function Ae(E=n.painting){const U=new Pe;for(const V of[-1,1]){const J=a(o(new Ue(.06,1.8,.06),e.wood),V*.36,.9,0);J.rotation.z=V*-.12,U.add(J)}return U.add(c(a(o(new Ue(.06,1.7,.06),e.wood),0,.84,-.3),.35,0,0)),U.add(a(o(new Ue(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),U.add(a(new Ut(new Zt(.95,.72),new Cn({map:E,toneMapped:!1})),0,1.25,.079)),U.add(a(o(new Ue(1,.05,.14),e.wood),0,.82,.08)),U}function ze(E){const U=new Pe;fe(U,1.7,.84,.745,.08,e.woodL,4),W(U,e.woodD,0,.78,.43,1.74,.05,.03,.01),W(U,e.wood,.55,.36,0,.5,.66,.76,.02);for(let J=0;J<3;J++)W(U,e.woodL,.55,.15+J*.2,.385,.44,.17,.02,.01),W(U,e.iron,.55,.17+J*.2,.402,.12,.025,.02);for(const J of[-.34,.34])U.add(a(o(te(.09,.7,.09,.7),e.woodD),-.76,.35,J));W(U,e.woodD,-.76,.14,0,.05,.05,.62,.01);for(const J of[-1,1])Ee(U,J*.85,.79,.42,J,1);const V={g:U,kb:null,screen:null,light:null};if(E==="screen"){const J=a(new Pe,-.12,.805,-.25);J.userData.y0=.805,J.add(o(new Ue(.62,.035,.2),e.iron));for(const[Se,ae]of[[-.06,.54],[0,.56],[.06,.5]])J.add(a(o(new Ue(ae,.012,.04),r("#ff5a3a",.55),!1),0,.022,Se));U.add(J),V.kb=J;const ue=new Pe;ue.add(o(new Ue(1.04,.7,.05),e.woodD));const Re=new Cn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),j=c(a(new Ut(new Zt(.92,.58),Re),0,0,-.03),0,gt,0);ue.add(j),V.screen=j,ue.add(a(new Ut(new Zt(.92,.58),Re),0,0,.03)),ue.add(a(o(new Ue(.08,.13,.08),e.woodD),0,-.41,0)),ue.add(a(o(new Ue(.34,.02,.2),e.woodD),0,-.455,0)),ue.add(a(B(.09),.46,.4,0)),ue.position.set(-.12,1.25,.17),U.add(ue);const C=new Gi("#7fe8ff",0,3.2,2);C.position.set(-.12,1.25,-.35),U.add(C),V.light=C,U.add(a(Xe(),.6,.79,.15))}else E==="paper"?(U.add(c(a(new Ut(new Zt(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-gt/2,0,0)),U.add(c(a(o(new it(.012,.012,.22,6),e.red),.35,.81,.1),0,0,gt/2)),U.add(a(Mt(.12),.65,.79,-.25))):E==="books"&&(U.add(a(o(new Ue(.42,.06,.3),e.red),-.35,.82,0)),U.add(a(o(new Ue(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),U.add(a(o(new Ue(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),U.add(a(St(),.62,.79,-.22)));return U.add(a(o(new it(.25,.21,.44,14),e.woodD),0,.22,-.78)),V}function ke(){const E=new Pe;return E.add(a(o(new it(.3,.38,.5,10),e.woodD),0,.25,0)),E.add(a(o(new Ue(.34,.2,.22),e.iron),0,.6,0)),E.add(a(o(new Ue(.7,.14,.3),e.ironL),0,.77,0)),d(E,new G(.35,.77,0),new G(1,0,0),.32,.1,e.ironL,0,10),E.add(a(o(new Ue(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),E}function I(){const E=new Pe;return E.add(a(o(new it(.06,.06,1.6,8),e.wood),0,.8,0)),E.add(a(o(new it(.28,.32,.8,12),e.straw),0,1.15,0)),E.add(a(o(new Kt(.22,12,10),e.straw),0,1.75,0)),E.add(a(o(new Ue(.9,.08,.08),e.wood),0,1.35,0)),E.add(a(c(o(new mn(.3,.03,6,16),e.red),gt/2,0,0),0,1.2,0)),E}function je(){const E=new Pe;E.add(c(a(o(new it(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),gt/2,0,0));for(const U of[-1,1])E.add(c(a(o(new Ue(.06,1.4,.06),e.wood),U*.35,.7,-.2),0,0,U*.2));return E}function $e(E=.42){const U=new Pe;return U.add(c(a(o(new it(E,E,.7,16),e.straw),0,E,0),0,0,gt/2)),U}function qe(E=0,U=1){const V=new Pe;for(let J=0;J<3;J++){const ue=J/3*gt*2,Re=o(new it(.035,.045,1.1,6),e.iron);Re.position.set(Math.cos(ue)*.22,.5,Math.sin(ue)*.22),Re.rotation.set(Math.sin(ue)*.3,0,-Math.cos(ue)*.3),V.add(Re)}V.add(a(o(new it(.42,.24,.3,14,1,!0),e.iron),0,1.05,0)),V.add(c(a(o(new li(.36,14),e.dark,!1),0,1.12,0),-gt/2,0,0)),V.add(a(o(new Kt(.3,10,6,0,gt*2,0,gt/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let J=0;J<4;J++){const ue=J/4*gt*2;d(V,new G(Math.cos(ue)*.42,1.18,Math.sin(ue)*.42),new G(Math.cos(ue)*.4,1,Math.sin(ue)*.4),.22,.04,e.iron,0,5)}if(re(V,0,1.12,0,1.6),E){const J=new Gi("#ff9a4a",E,9,2);J.position.y=1.7,V.add(J),v.push({l:J,base:E,ph:u(0,6)})}return V.scale.setScalar(U),V}function Ie(){const E=new Pe;E.add(c(a(o(new Ue(.06,.06,.3),e.iron),0,0,.12),0,0,0));const U=a(o(new it(.045,.06,.5,8),e.woodD),0,.12,.26);return U.rotation.x=.35,E.add(U),E.add(a(o(new it(.08,.06,.12,8),e.iron),0,.36,.34)),re(E,0,.4,.35,.9),E}function tt(E=3.2,U=n.banner){const V=new Pe;V.add(a(o(new it(.05,.07,E+.6,8),e.woodD),0,(E+.6)/2,0)),V.add(c(a(o(new it(.03,.03,1,6),e.iron),0,E+.4,.05),0,0,gt/2)),V.add(a(B(.16),0,E+.72,.02));const J=new Ut(new Zt(.9,1.9,1,8),i("#ffffff",{map:U,side:ln})),ue=J.geometry.attributes.position;for(let Re=0;Re<ue.count;Re++)ue.setZ(Re,Math.sin(ue.getY(Re)*2.6)*.05);return J.geometry.computeVertexNormals(),J.position.set(0,E-.55,.08),J.castShadow=!0,V.add(J),V}function Ce(E=1.2,U=2.6){const V=new Pe;V.add(c(a(o(new it(.04,.04,E+.3,6),e.iron),0,0,.04),0,0,gt/2));const J=o(new Zt(E,U),i("#ffffff",{map:n.banner,side:ln}),!1);return J.position.set(0,-U/2,.05),V.add(J),V}function he(E=2.4){const U=new Pe;U.add(a(o(new it(.05,.08,E,7),e.woodD),0,E/2,0)),U.add(a(B(.24),0,E+.12,0)),U.add(a(se(.5),0,E+.2,0));for(let V=0;V<3;V++){const J=o(new Zt(.12,u(.5,.9)),i(p([t.red,t.redD,t.bone]),{side:ln}),!1);J.position.set(Math.cos(V*2.1)*.08,E-.5,Math.sin(V*2.1)*.08),J.rotation.y=V*2.1,U.add(J)}return U}function D(E=3){const U=new Pe,V=Math.max(2,Math.round(E/.9));U.add(c(a(o(new it(.1,.1,E,8),e.wood),0,.45,0),0,0,gt/2));for(let J=0;J<V;J++){const ue=-E/2+(J+.5)*E/V;for(const Re of[-1,1]){const j=new Pe;j.add(a(o(new it(.07,.07,1.4,7),e.woodL),0,0,0)),j.add(a(o(new gn(.07,.3,7),e.boneD),0,.85,0)),j.position.set(ue,.45,0),j.rotation.x=Re*.8,U.add(j)}}return U}function S(){const E=new Pe;E.add(a(o(new it(.55,.5,.9,18),e.redD),0,.75,0)),E.add(a(o(new it(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let U=0;U<3;U++){const V=U/3*gt*2;E.add(c(a(o(new it(.04,.05,.7,6),e.woodD),Math.cos(V)*.42,.3,Math.sin(V)*.42),Math.sin(V)*.2,0,-Math.cos(V)*.2))}return E.add(a(c(o(new mn(.53,.03,6,20),e.bone),gt/2,0,0),0,1.05,0)),E}function $(E=4){const U=new Pe,V=[t.red,t.woodL,t.redD,t.wood];for(let J=0;J<4;J++){const ue=o(new it(.42,.46,E/4,10),i(V[J]));ue.position.y=E/8+J*E/4,U.add(ue);for(const Re of[-1,1])U.add(a(o(new Ue(.12,.08,.06),e.bone),Re*.15,ue.position.y+.05,.42));U.add(a(o(new Ue(.36,.06,.06),e.dark),0,ue.position.y-.18,.43))}U.add(a(B(.45),0,E+.25,0)),U.add(a(se(1.1),0,E+.35,0));for(const J of[-1,1])U.add(c(a(o(new Ue(1,.12,.1),e.woodD),J*.55,E*.72,0),0,0,J*.2));return U}function we(E=1.9,U=2.6,V="#8a6a4a"){const J=new Pe,ue=o(new gn(E,U,8,1,!0),i(V,{side:ln}));ue.position.y=U/2,J.add(ue);for(let Re=0;Re<3;Re++){const j=Re/3*gt*2+.4;J.add(c(a(o(new it(.04,.04,.9,6),e.woodD),Math.cos(j)*.12,U+.25,Math.sin(j)*.12),Math.sin(j)*.4,0,-Math.cos(j)*.4))}return J.add(c(a(o(new Zt(.9,1.3),e.dark,!1),0,.65,E*.82),-.6,0,0)),J.add(c(a(o(new mn(E*.62,.05,6,24),e.redD),0,U*.35,0),gt/2,0,0)),J}function ge(E=4){const U=new Pe;U.add(a(o(new Ue(1.8,.1,.1),e.wood),0,1.25,0)),U.add(a(o(new Ue(1.8,.1,.1),e.wood),0,.3,.12));for(const V of[-1,1])U.add(a(o(new Ue(.1,1.35,.1),e.woodD),V*.85,.67,0));for(let V=0;V<E;V++){const J=-.6+V*1.2/(E-1),ue=new Pe;V%2?(ue.add(a(o(new Ue(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),ue.add(a(o(new Ue(.22,.05,.06),e.gold),0,.2,0))):(ue.add(a(o(new it(.03,.03,1.4,6),e.woodD),0,.7,0)),ue.add(a(o(new Ue(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),ue.position.set(J,.05,.08),ue.rotation.z=.08,U.add(ue)}return U}function Fe(E=2){const U=new Pe,V=[];for(let J=0;J<4;J++)for(let ue=0;ue<Math.floor(E/.26)-J;ue++)V.push([-E/2+.13+ue*.26+J*.13,.13+J*.22,0]);for(const[J,ue]of V)U.add(c(a(o(new it(.12,.12,.9,8),i(p([t.woodL,"#8a6440","#6e4a30"]))),J,ue,0),gt/2,0,0));return U}function He(){const E=new Pe;E.add(a(o(new Ue(1.6,.12,1),e.wood),0,.62,0));for(const U of[-1,1])E.add(a(o(new Ue(1.6,.36,.06),e.woodL),0,.85,U*.47)),E.add(c(a(o(new it(.42,.42,.08,14),e.woodD),0,.42,U*.58),gt/2,0,0));for(const U of[-1,1])E.add(c(a(o(new Ue(1.4,.07,.07),e.woodD),1.3,.55,U*.35),0,0,-.18));return E.add(a(ut(),-.3,.68,.1)),E.add(a(st(.4),.35,.68,-.15)),E}function ye(){const E=new Pe;E.add(Ze(2.2,.9,.9,e.woodL));for(const[J,ue]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])E.add(a(o(new Ue(.08,2.2,.08),e.woodD),J,1.1,ue));const U=x(256,64,(J,ue,Re)=>{for(let j=0;j<8;j++)J.fillStyle=j%2?"#e3d5b6":"#8a2420",J.fillRect(j*32,0,32,Re)}),V=o(new Ue(2.5,.05,1.4),i("#ffffff",{map:U}));V.position.set(0,2.2,.15),V.rotation.x=.22,E.add(V);for(let J=0;J<9;J++)E.add(a(o(new Kt(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return E.add(a(st(.5),-1.4,0,.3)),E.add(a(_e(.8),1.5,0,-.1)),E}function Te(){const E=new Pe;E.add(a(o(g(new it(1,1.1,.9,22),1.2),e.stone),0,.45,0)),E.add(c(a(o(new li(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-gt/2,0,0));for(const V of[-1,1])E.add(a(o(new Ue(.14,1.7,.14),e.woodD),V*.95,1.5,0));const U=o(new gn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return U.position.y=2.65,U.rotation.y=gt/4,E.add(U),E.add(c(a(o(new it(.06,.06,1.9,8),e.wood),0,2.05,0),0,0,gt/2)),E.add(a(o(new it(.15,.13,.22,10),e.woodL),.2,1.55,0)),E.add(a(B(.18),0,3.15,0)),E}function Ne(E=0){const U=new Pe;U.add(a(o(new it(.07,.1,2.8,8),e.iron),0,1.4,0)),U.add(a(o(new Ue(.55,.06,.06),e.iron),.22,2.7,0));const V=new Pe;if(V.add(o(new it(.14,.18,.32,8),e.iron)),V.add(a(o(new Kt(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),E){const J=new Gi("#ffc477",E,9,2);V.add(J)}return V.position.set(.44,2.44,0),U.add(V),U}function Y(){const E=new Pe;W(E,e.wood,0,.25,0,1,.5,.6,.02),E.add(c(a(o(new it(.3,.3,1,16,1,!1,0,gt),e.woodL),0,.5,0),0,0,gt/2));for(const U of[-.38,.38])W(E,e.iron,U,.27,0,.07,.52,.62),E.add(a(c(o(new mn(.31,.025,4,16,gt),e.iron),0,gt/2,0),U,.5,0));for(const U of[-1,1])for(const V of[-1,1])W(E,e.iron,U*.49,.05,V*.29,.06,.1,.06);W(E,e.gold,0,.44,.31,.16,.2,.025),W(E,e.dark,0,.42,.325,.03,.06,.01);for(const U of[-1,1])E.add(a(c(o(new mn(.06,.012,4,12),e.iron),0,gt/2,0),U*.51,.3,0));return E.add(a(B(.1),0,.62,.22)),E}function ve(){const E=new Pe;W(E,e.woodD,0,.25,0,1.3,.5,1.1,.03),W(E,e.red,0,.58,.05,1.08,.16,.9,.06),W(E,e.woodD,0,1.2,-.48,1.3,1.9,.2,.03),W(E,e.red,0,1.25,-.36,.9,1.3,.06,.03);for(let U=0;U<4;U++)for(const V of[-1,1])E.add(a(o(new Kt(.03,6,4),e.gold),V*.4,.7+U*.36,-.32));for(const U of[-1,1])W(E,e.woodD,U*.62,.75,0,.18,.5,1,.03),W(E,e.iron,U*.62,1.01,.1,.22,.04,.8,.01),E.add(a(B(.12),U*.62,1.1,.45)),d(E,new G(U*.55,2.15,-.48),new G(U*.3,1,0),.5,.08,e.bone,0,6);return E.add(a(B(.32),0,2.25,-.4)),E.add(a(se(1),0,2.3,-.4)),E}function xe(E=t.red){const U=new Pe;return U.add(c(o(new it(.42,.42,.06,18),i(E)),gt/2,0,0)),U.add(c(a(o(new mn(.42,.04,6,20),e.iron),0,0,.03),0,0,0)),U.add(a(B(.16),0,0,.08)),U}function Ge(){const E=new Pe;return E.add(o(new Ue(.7,.8,.08),e.woodD)),E.add(a(B(.32),0,.02,.18)),E.add(a(se(1),0,.12,.16)),E}function ee(E=.7,U=6){const V=new Pe;V.add(a(o(new it(.012,.012,1,4),e.iron),0,.5,0)),V.add(c(o(new mn(E,.04,6,24),e.iron),gt/2,0,0));for(let J=0;J<U;J++){const ue=J/U*gt*2;V.add(a(Mt(.12),Math.cos(ue)*E,.02,Math.sin(ue)*E))}return V}function K(E,U,V,J){for(let ue=0;ue<U.length-1;ue++){const[Re,j]=U[ue],[C,Se]=U[ue+1],ae=5;for(let R=1;R<ae;R++){const A=R/ae,O=Re+(C-Re)*A,ie=j+(Se-j)*A,pe=V-Math.sin(A*gt)*J;E.add(a(o(new Kt(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),O,pe,ie))}const y=Math.hypot(C-Re,Se-j),P=o(new it(.008,.008,y,3),e.dark,!1);P.position.set((Re+C)/2,V-J*.6,(j+Se)/2),P.rotation.set(0,-Math.atan2(Se-j,C-Re),gt/2),E.add(P)}}function me(E="round",U=1){const V=new Pe;if(V.add(a(o(new it(.18*U,.3*U,1.8*U,8),e.wood),0,.9*U,0)),E==="pine")for(let J=0;J<4;J++)V.add(a(o(new gn((1.5-J*.3)*U,1.4*U,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+J*.8)*U,0));else if(E==="dead")for(let J=0;J<4;J++){const ue=o(new it(.04*U,.1*U,1.2*U,6),e.woodD),Re=J*1.7;ue.position.set(Math.cos(Re)*.3*U,(1.6+J*.25)*U,Math.sin(Re)*.3*U),ue.rotation.set(Math.sin(Re)*.8,0,-Math.cos(Re)*.8),V.add(ue)}else{const J=E==="autumn"?[t.autumn1,t.autumn2,t.autumn3]:[t.leaf,t.leafD,t.leafL];for(const[ue,Re,j,C]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])V.add(a(o(new Kt(C*U,14,10),i(p(J))),ue*U,Re*U,j*U))}return V.rotation.y=u(0,3),V}const Oe=new Map;function _(E,U,V,J,ue=0){const Re=new Lt().compose(new G(V,ue,J),new cn().setFromAxisAngle(new G(0,1,0),u(0,2*gt)),new G(U*u(.92,1.08),U*u(.9,1.12),U*u(.92,1.08))),j=Oe.get(E);return j?j.push(Re):Oe.set(E,[Re]),!0}function H(E){E.flora.scene.updateMatrixWorld(!0);for(const[U,V]of Oe){const J=Df(E.flora,U);if(!J)throw new Error(`no flora model for ${U}`);for(const[ue,Re]of Lf(s,J)){const j=Re.length===1?Re[0]:nh(Re,!1);if(!j)continue;const C=new Kr(j,ue,V.length);V.forEach((Se,ae)=>C.setMatrixAt(ae,Se)),C.castShadow=!ue.isMeshStandardMaterial,C.receiveShadow=!0,C.frustumCulled=!1,T.add(C)}}}function X(){const E=new Pe;E.add(a(o(new it(.3,.38,.6,8),e.stone),0,.3,0));const U=a(o(new Kc(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return U.scale.y=1.7,E.add(U),L.push({o:U,axis:"y",v:.6,bob:!0,y0:1}),E}function k(){const E=new Pe;E.add(a(o(new Kt(.5,16,10,0,gt*2,gt*.3,gt*.7),i("#2e2a2c",{side:ln})),0,.55,0)),E.add(c(a(o(new li(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-gt/2,0,0));for(let U=0;U<3;U++){const V=U/3*gt*2;E.add(a(o(new it(.04,.04,.3,6),e.iron),Math.cos(V)*.32,.12,Math.sin(V)*.32))}return E}function oe(E,U,V=.9,J=-1){for(let ue=0;ue<U.length-1;ue++){if(ue===J)continue;const[Re,j]=U[ue],[C,Se]=U[ue+1],ae=Math.hypot(C-Re,Se-j),y=-Math.atan2(Se-j,C-Re);for(const P of[V*.45,V*.85]){const R=o(new Ue(ae,.07,.06),e.woodL);R.position.set((Re+C)/2,P,(j+Se)/2),R.rotation.y=y,E.add(R)}for(const[P,R]of[[Re,j],[C,Se]])E.add(a(o(new Ue(.12,V+.15,.12),e.woodD),P,(V+.15)/2,R))}}function ce(E){const U=new Pe;U.add(a(o(new Ue(.1,2.2,.1),e.woodD),0,1.1,0));const V=x(256,96,(J,ue,Re)=>{J.fillStyle="#6a4630",J.fillRect(0,0,ue,Re),J.strokeStyle="#3a2419",J.lineWidth=8,J.strokeRect(4,4,ue-8,Re-8),J.fillStyle="#e3d5b6",J.font=`800 40px ${Sc}`,J.textAlign="center",J.textBaseline="middle",J.fillText(E,ue/2,Re/2+2)});return U.add(a(o(new Ue(1.1,.42,.06),i("#ffffff",{map:V})),.25,1.85,0)),U}function Ve(E=t.red){const U=new Pe;for(const V of[-1,1])W(U,e.woodD,V*.48,.24,0,.07,.18,1.96,.015);for(const[V,J,ue]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])W(U,e.woodD,V,ue/2,J,.1,ue,.1,.015),U.add(a(o(new Kt(.065,8,6),e.wood),V,ue+.04,J));for(let V=0;V<5;V++)W(U,e.wood,-.32+V*.16,.66,-.98,.07,.5,.04,.01);return W(U,e.woodD,0,.92,-.98,.98,.09,.07,.015),W(U,e.woodD,0,.42,-.98,.98,.07,.07,.015),W(U,e.woodD,0,.5,.98,.98,.14,.06,.015),W(U,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),W(U,i(E),0,.5,.25,.96,.07,1.36,.03),W(U,i(E),0,.535,-.38,.96,.05,.16,.025),W(U,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),W(U,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),U.add(a(B(.12),0,1.08,-.94)),U}function _t(){const E=new Pe;E.add(Ve(t.redD));const U=Ve("#4a3a30");U.position.y=1.15,E.add(U);for(const[V,J]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])E.add(a(o(new Ue(.1,2.2,.1),e.wood),V,1.1,J));for(let V=0;V<5;V++)E.add(a(o(new Ue(.06,.05,.06),e.woodL),.52,.4+V*.3,.9));return E}function Et(){const E=new Pe;W(E,e.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const U of[-1,1]){W(E,e.wood,U*.3,1.05,.31,.56,1.78,.03,.01);for(const V of[.62,1.48])W(E,e.woodL,U*.3,V,.33,.4,.66,.02,.008);for(const V of[.4,1.7])W(E,e.iron,U*.52,V,.33,.14,.05,.015);W(E,e.gold,U*.06,1.08,.34,.03,.14,.03)}W(E,e.wood,0,2.05,0,1.32,.1,.68,.02),W(E,e.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const U of[-1,1])for(const V of[-1,1])W(E,e.woodD,U*.54,.05,V*.24,.12,.1,.12,.02);return E}function pt(E,U=1.8){const V=new Pe;return V.add(a(o(M(new Ue(.12,U,E),U,1.3),e.plankWall),0,U/2,0)),V.add(a(o(new Ue(.18,.1,E+.04),e.timber),0,U,0)),V}function Ct(E=.8,U=1.6){const V=new Ut(new Zt(E,U,6,1),i(t.red,{side:ln})),J=V.geometry.attributes.position;for(let Re=0;Re<J.count;Re++)J.setZ(Re,Math.sin(J.getX(Re)*14)*.04);V.geometry.computeVertexNormals(),V.position.y=U/2+.1;const ue=new Pe;return ue.add(V),ue.add(a(c(o(new it(.02,.02,E+.2,6),e.iron),0,0,gt/2),0,U+.12,0)),ue}function bt(){const E=new Pe;for(let U=0;U<5;U++)E.add(c(a(o(new it(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+U%3*.08,u(-.1,.1)),0,u(-.4,.4),gt/2));return E}function Je(){const E=new Pe;for(let V=0;V<3;V++){const J=V/3*gt*2;E.add(c(a(o(new it(.025,.03,1.3,6),e.woodD),Math.cos(J)*.22,.62,Math.sin(J)*.22),Math.sin(J)*.32,0,-Math.cos(J)*.32))}const U=a(c(o(new it(.07,.11,1.3,12),e.gold),.9,0,0),0,1.35,.15);return E.add(U),E}function mt(){const E=new Pe;E.add(a(o(new it(.06,.22,.9,10),e.woodD),0,.45,0)),E.add(a(o(new Kt(.34,20,14),i("#2a3050")),0,1.25,0));for(let U=0;U<14;U++){const V=u(0,2*gt),J=u(-1.2,1.2);E.add(a(o(new Kt(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(V)*Math.cos(J)*.345,1.25+Math.sin(J)*.345,Math.sin(V)*Math.cos(J)*.345))}return E.add(a(c(o(new mn(.4,.02,6,28),e.gold),0,gt/2,.3),0,1.25,0)),E}const Yt=x(256,192,(E,U,V)=>{E.fillStyle="#d8c8a0",E.fillRect(0,0,U,V),E.strokeStyle="#6a4a30",E.lineWidth=3,E.beginPath(),E.moveTo(30,150),E.bezierCurveTo(60,60,140,40,220,90),E.bezierCurveTo(200,150,120,170,30,150),E.stroke(),E.fillStyle="#8a2420";for(const[J,ue]of[[90,100],[150,80],[180,120]])E.beginPath(),E.arc(J,ue,6,0,gt*2),E.fill();E.strokeStyle="rgba(106, 74, 48, 0.5)",E.setLineDash([6,6]),E.beginPath(),E.moveTo(90,100),E.lineTo(150,80),E.lineTo(180,120),E.stroke()});function fn(){const E=new Pe;return E.add(o(new Ue(1.4,1.05,.04),e.woodD)),E.add(a(new Ut(new Zt(1.3,.95),new Cn({map:Yt,toneMapped:!1})),0,0,.03)),E}function pn(){const E=new Pe,U=i("#6e6668"),V=i("#4a4446"),J=i("#b8b0a8"),ue=o(new ua(.32,.8,6,12),U);ue.rotation.x=gt/2,ue.position.set(0,.34,0),ue.scale.set(1.05,1,.85),E.add(ue),E.add(a(o(new Kt(.24,12,10),J),0,.22,.25));const Re=a(new Pe,0,.5,.78);Re.add(o(new Kt(.24,14,10),U)),Re.add(c(a(o(new gn(.12,.34,10),V),0,-.05,.26),gt/2,0,0)),Re.add(a(o(new Kt(.04,6,4),e.dark,!1),0,-.03,.43));for(const j of[-1,1])Re.add(c(a(o(new gn(.07,.2,6),V),j*.13,.22,-.02),0,0,-j*.3)),Re.add(a(o(new Kt(.03,6,4),r("#ffb84a",1.2),!1),j*.1,.05,.2));Re.rotation.x=.25,E.add(Re);for(const[j,C]of[[-.2,.55],[.2,.55]])E.add(c(a(o(new ua(.07,.36,4,8),U),j,.08,C+.15),gt/2,0,0));return E.add(c(a(o(new gn(.12,.7,8),V),.25,.22,-.75),1.2,.6,0)),E.add(c(a(o(new mn(.2,.03,6,16),e.red),0,.42,.62),gt/2.4,0,0)),E}return{FLAGS:w,FLAMES:N,SPINNERS:L,FIRE_LIGHTS:v,BOOK_COLS:rt,flameTex:b,flame:re,skull:B,horns:se,fj:Z,bx:W,taper:te,boards:fe,cornerIron:Ee,barrel:_e,crate:st,sack:ut,table:Ze,roundTable:dt,stool:Ft,bench:ht,candle:Mt,skullCandle:St,bottle:Le,mug:Xe,plant:et,bookshelf:ot,rug:lt,easel:Ae,desk:ze,anvil:ke,dummy:I,target:je,hay:$e,brazier:qe,torch:Ie,poleBanner:tt,hangingBanner:Ce,skullPole:he,spikes:D,drum:S,totem:$,tent:we,weaponRack:ge,woodpile:Fe,cart:He,stall:ye,well:Te,lampPost:Ne,chest:Y,throne:ve,shield:xe,trophy:Ge,chandelier:ee,lanternString:K,tree:me,plantFlora:_,growFlora:H,crystal:X,cauldron:k,fence:oe,signPost:ce,bed:Ve,bunk:_t,wardrobe:Et,partition:pt,curtain:Ct,scrollStack:bt,telescope:Je,starGlobe:mt,wallMap:fn,wolf:pn,put:h}}const{PI:fd}=Math;function rS(s,e,t,n){const{scene:i,COL:r,toon:o,mesh:l,at:a,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:x,growFlora:m,lampPost:g,skullPole:M}=e,T=Xu.pts;function w(Q,B){let se=!1;for(let le=0,Z=T.length-1;le<T.length;Z=le++){const[W,te]=T[le],[fe,Ee]=T[Z];te>B!=Ee>B&&Q<(fe-W)*(B-te)/(Ee-te)+W&&(se=!se)}return se}function N(Q,B,se,le,Z,W){const te=Z-se,fe=W-le,Ee=te*te+fe*fe||1,Ke=Math.max(0,Math.min(1,((Q-se)*te+(B-le)*fe)/Ee));return Math.hypot(Q-se-te*Ke,B-le-fe*Ke)}const L=[...Ti.map(Q=>({w:Q.w*.65,pts:Q.closed?[...Q.line,Q.line[0]]:Q.line})),{w:1,pts:ma}],v=[],b=Q1.map(Q=>di[Q]);function z(Q,B,se=.6){const le=Math.atan2(B,Q);if(Math.hypot(Q,B)>ds(le)-1.6)return!1;for(const Z of L){const W=Z.pts;for(let te=0;te<W.length-1;te++){const fe=W[te],Ee=W[te+1];if(!(Math.abs(fe[0]-Q)>Z.w+se+1.5||Math.abs(fe[1]-B)>Z.w+se+1.5)&&N(Q,B,fe[0],fe[1],Ee[0],Ee[1])<Z.w+se)return!1}}for(const Z of vs)if(Z.kind==="house"){const[W,te]=io(Z,Q,B),fe=3.4+se;if(Math.abs(W)<Z.w/2+fe&&te>-Z.d/2-fe&&te<Z.d/2+fe+(Z.deck?4.5:0)+(Z.id==="tavern"?5:0))return!1}else if(Math.hypot(Q-Z.x,B-Z.z)<Z.r+(Z.kind==="open"?2.2:1.4)+se)return!1;for(const Z of sh)if(Z.kind==="hut"){const[W,te]=io(Z,Q,B);if(Math.abs(W)<Z.w/2+2.6+se&&Math.abs(te)<Z.d/2+2.6+se)return!1}else if(Math.hypot(Q-Z.x,B-Z.z)<Z.r+1.8+se)return!1;for(let Z=0;Z<T.length;Z++){const[W,te]=T[Z],[fe,Ee]=T[(Z+1)%T.length];if(N(Q,B,W,te,fe,Ee)<Xu.thick/2+.8+se||Math.hypot(Q-W,B-te)<3.6+se)return!1}if(Math.hypot(Q+44,B-26)<6+se||Math.hypot(Q-_c[0],B-_c[1])<9+se)return!1;for(const Z of b)if(Math.hypot(Q-Z.x,B-Z.z)<1.2+se)return!1;for(const Z of v)if(Math.hypot(Q-Z.x,B-Z.z)<Z.r+se)return!1;return!0}function F(Q,B,se,le){let Z=0;for(let W=0;W<B&&Z<Q;W++){const te=f(0,2*fd),fe=Math.sqrt(d())*58,Ee=Math.cos(te)*fe*1.04,Ke=Math.sin(te)*fe*.9;se(Ee,Ke)&&(le(Ee,Ke),Z++)}}F(34,6e3,(Q,B)=>w(Q,B)&&z(Q,B,1.4),(Q,B)=>{x(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),Q,B),v.push({x:Q,z:B,r:2.2})}),F(80,9e3,(Q,B)=>!w(Q,B)&&z(Q,B,1.6),(Q,B)=>{x(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),Q,B),v.push({x:Q,z:B,r:2.4})});{const Q=[],B=[],se=[];F(90,9e3,(le,Z)=>z(le,Z,.5),(le,Z)=>{const W=f(.55,1);x(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),W*1.25,le,Z),v.push({x:le,z:Z,r:W})}),F(60,6e3,(le,Z)=>z(le,Z,.4),(le,Z)=>{const W=f(.25,.8);Q.push({x:le,y:W*.3,z:Z,sx:W,sy:W*f(.5,.85),sz:W*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),v.push({x:le,z:Z,r:W})}),F(1200,16e3,(le,Z)=>z(le,Z,.1),(le,Z)=>{const W=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let te=0;te<4;te++)B.push({x:le+f(-.12,.12),y:.11,z:Z+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:W})}),F(320,12e3,(le,Z)=>z(le,Z,.1),(le,Z)=>{se.push({x:le,y:.16,z:Z,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Si(1,0),Q,{cast:!0});for(const le of[p(new gn(.06,.24,4),B,{}),p(new Kt(.09,7,5),se,{})])le&&(le.userData.noLine=!0)}m(n);for(const[Q,B,se]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const le=Ti.find(W=>W.id===Q);if(!le)continue;const Z=le.line;for(let W=6;W<Z.length-6;W+=B*2){const[te,fe]=Z[W-1],[Ee,Ke]=Z[W+1],at=Z[W],_e=Math.hypot(Ee-te,Ke-fe)||1,Ye=-(Ke-fe)/_e,st=(Ee-te)/_e,ut=W/(B*2)%2?1:-1,Ze=at[0]+Ye*ut*(le.w*.62+.5),dt=at[1]+st*ut*(le.w*.62+.5);if(Q==="ring"&&Math.hypot(Ze,dt)<10)continue;let Ft=!0;for(const ht of b)Math.hypot(Ze-ht.x,dt-ht.z)<2&&(Ft=!1);for(const ht of vs)ht.kind!=="house"&&Math.hypot(Ze-ht.x,dt-ht.z)<ht.r+.5&&ht.id!=="court"&&(Ft=!1);Ft&&h(i,se==="lamp"?g(0):M(f(2,2.6)),Ze,dt,Math.atan2(-Ye*ut,-st*ut))}}const q=[];function re(){const Q=new Pe,B=o("#2a2426");Q.add(a(l(new Kt(.16,8,6),B),0,0,0)),Q.children[0].scale.set(1,.8,1.6),Q.add(a(l(new Kt(.1,8,6),B),0,.08,.2)),Q.add(c(a(l(new gn(.03,.12,4),o("#c79a45")),0,.07,.33),fd/2,0,0));for(const se of[-1,1]){const le=a(new Pe,se*.1,.02,0);le.add(a(l(new Ue(.55,.03,.22),B),se*.27,0,0)),Q.add(le)}return Q}for(let Q=0;Q<6;Q++){const B=re();B.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},B.scale.setScalar(1.8),i.add(B),q.push(B)}for(const Q of["war","library","tavern"]){const B=t.HOUSES[Q];if(!B)continue;const se=B.roof;for(let le=0;le<2;le++){const Z=re(),W=Z.children[3],te=Z.children[4];W.visible=te.visible=!0,W.rotation.z=.9,te.rotation.z=-.9,Z.position.set(f(-B.r.w/3,B.r.w/3),se.hR+.3,0),Z.rotation.y=f(0,6),se.R.add(Z)}}return{CROWS:q}}async function oS(s){const e=s.reducedMotion;let t=s.width,n=s.height;const i=new R1({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});jy(i,t,n,s.dpr);const r=new Jp,o=eS(i,r),l=By(),a=Wy(),c=Qy(),h=sS(o),d=await iS(o,h,l);await c;const f=nS(o,h,d,d.models,s.tasks??["todo","todo","todo","todo","todo"]),u=xM(o,h,d,f,d.models),p=rS(o,h,f,d.models),{TEX:x,COL:m,toon:g,rnd:M,rr:T,pick:w,_c:N}=o,{FLAMES:L,SPINNERS:v,FLAGS:b,FIRE_LIGHTS:z}=h,{HOUSES:F,deskF:q,deskB:re,hearthLight:Q}=f,{mouthMat:B,coreMat:se,fireLight:le,chimneyTop:Z,emberBase:W,waterTex:te,fallTex:fe,mists:Ee,skyBoat:Ke,airship:at}=u,{CROWS:_e}=p,{skyDome:Ye,cloudRing:st}=d,ut=Object.fromEntries(ts.map(R=>[R,M()*6])),Ze=Xy(d.crossings),dt=Jy(o,r,await a,{reducedMotion:e,phases:ut,start:xc,groundY:Ze,flameTex:h.flameTex}),Ft=Object.values(dt.actors),ht=()=>Object.fromEntries(ts.map(R=>[R,Ei(xc[R])]));let Mt=ht(),St=null,Le=!1;const Xe=new Set,et=new Set(["thinking","reading","writing","waiting"]),rt={},nt=[];{const R=new Set;for(const de of Object.values(F)){for(const ne of Object.values(de.sides))R.add(ne.up);if(R.add(de.roof.R),de.upper){const ne=de.upper;R.add(ne.U);const Me=new Map;ne.U.traverse(De=>{if(!(De instanceof Ut))return;const We=De.material;let be=Me.get(We);be||(be=We.clone(),Me.set(We,be),ne.mats.push(be)),De.material=be})}}for(const de of Ft)R.add(de.root);for(const{f:de}of L)R.add(de);for(const de of v)R.add(de.o);for(const de of b)R.add(de);for(const de of _e)R.add(de);[q.g,re.g,Ke,at,st,Ye].forEach(de=>R.add(de)),r.updateMatrixWorld(!0);const A=new Map,O=["position","normal","uv"],ie=de=>{if(R.has(de))return;for(const Qe of[...de.children])ie(Qe);if(!(de instanceof Ut)||de instanceof Kr||de.children.length||Array.isArray(de.material))return;const ne=de.material,Me=de.geometry;if(ne.transparent||ne.vertexColors||ne.isShaderMaterial||ne.depthWrite===!1||!Me.attributes.uv||!Me.attributes.normal||Me.attributes.color)return;const De=Me.index?Me.toNonIndexed():Me.clone();for(const Qe of Object.keys(De.attributes))O.includes(Qe)||De.deleteAttribute(Qe);De.morphAttributes={},De.clearGroups(),De.applyMatrix4(de.matrixWorld);const We=ne.uuid+(de.castShadow?"s":"n"),be=A.get(We);be?be.geos.push(De):A.set(We,{m:ne,cast:de.castShadow,geos:[De]}),de.parent?.remove(de)};ie(r);for(const{m:de,cast:ne,geos:Me}of A.values()){const De=nh(Me,!1);if(!De){console.warn("could not merge",de.type);continue}const We=new Ut(De,de);We.castShadow=ne,We.receiveShadow=!0,We.matrixAutoUpdate=!1,r.add(We)}const pe=new Cn({visible:!1});for(const[de,ne]of Object.entries(F)){const Me=ne.top+ne.roof.hR,De=new Ut(new Ue(ne.r.w+.6,Me,ne.r.d+.6),pe);De.position.set(ne.r.x,Me/2,ne.r.z),De.rotation.y=ne.r.ry||0,De.userData.houseId=de,r.add(De),De.updateMatrixWorld(!0),nt.push(De)}}const ot=new Xn(In.fov,t/n,In.near,In.far),lt={t:new G(...In.home.target),p:new G(...In.home.position)};ot.position.copy(lt.p);const Ae=new P1(ot,i.domElement);Ae.target.copy(lt.t),Ae.enableDamping=!0,Ae.dampingFactor=.08,Ae.minDistance=In.minDistance,Ae.maxDistance=In.maxDistance,Ae.maxPolarAngle=In.maxPolarAngle,Ae.minPolarAngle=In.minPolarAngle,Ae.screenSpacePanning=!1,Ae.zoomSpeed=.8,Ae.update();function ze(){const R=Ae.target,A=Math.hypot(R.x,R.z),O=In.targetRadius;if(A>O){const ie=O/A;ot.position.x-=R.x*(1-ie),ot.position.z-=R.z*(1-ie),R.x*=ie,R.z*=ie}if(R.y<In.targetMinY||R.y>In.targetMaxY){const ie=Math.max(In.targetMinY,Math.min(In.targetMaxY,R.y));ot.position.y+=ie-R.y,R.y=ie}ot.position.y<In.minHeight&&(ot.position.y=In.minHeight)}let ke=null,I=null,je=!1;function $e(R,A){if(e){Ae.target.copy(R),ot.position.copy(A),Ae.update();return}ke={t0:performance.now(),dur:1100,ft:Ae.target.clone(),fp:ot.position.clone(),tt:R,tp:A}}function qe(R){if(R==="overview"){I=null,$e(lt.t.clone(),lt.p.clone());return}const A=F[R];I=R,A&&(A.view="ground");const O=oM(R,[ot.position.x-Ae.target.x,ot.position.z-Ae.target.z]);$e(new G(...O.target),new G(...O.position))}const Ie=()=>{ke=null};i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("wheel",Ie,{passive:!0});const tt=R=>je||I===R.id||!!R.near;function Ce(R,A){const O=Ae.target,ie=Math.hypot(R.r.x-O.x,R.r.z-O.z),pe=Math.max(R.r.w,R.r.d)*.8+9;R.near=R.near?A<72&&ie<pe+4:A<64&&ie<pe}function he(R,A,O){if(O.fading!==A){O.fading=A;for(const ie of R)ie.transparent=A,ie.needsUpdate=!0}}function D(R,A,O){const ie=A?0:1;R.s+=(ie-R.s)*O,Math.abs(R.s-ie)<.004&&(R.s=ie),R.up.scale.y=Math.max(.001,R.s),R.up.visible=R.s>.03}function S(R){const A=ot.position.distanceTo(Ae.target),O=e?1:Math.min(1,R*5),ie=e?1:Math.min(1,R*6);for(const pe of Object.values(F)){Ce(pe,A);const de=tt(pe),ne=de&&!!pe.upper&&pe.view==="upper",Me=de?1:0;pe.lift+=(Me-pe.lift)*O,Math.abs(pe.lift-Me)<.002&&(pe.lift=Me);const De=pe.roof;De.R.position.y=De.base+pe.lift*3.4,De.R.visible=pe.lift<.97;for(const wt of De.mats)wt.opacity=1-pe.lift;const We=ot.position.x-pe.r.x,be=ot.position.z-pe.r.z,Qe=Math.hypot(We,be)||1,yt=Math.cos(pe.r.ry||0),vt=Math.sin(pe.r.ry||0),Rt=wt=>{const ct=((wt.n[0]*yt+wt.n[1]*vt)*We+(-wt.n[0]*vt+wt.n[1]*yt)*be)/Qe;return ct>.32?wt.wish=!0:ct<.06&&(wt.wish=!1),!!wt.wish};for(const wt of Object.values(pe.sides))D(wt,de&&!ne&&Rt(wt),ie);if(pe.upper){const wt=pe.upper,ct=de&&!ne?1:0;wt.lift+=(ct-wt.lift)*O,Math.abs(wt.lift-ct)<.002&&(wt.lift=ct),he(wt.mats,wt.lift>0,wt),wt.U.position.y=wt.top+wt.lift*3.4,wt.U.visible=wt.lift<.97;for(const Wt of wt.mats)Wt.opacity=1-wt.lift;for(const Wt of Object.values(wt.sides))D(Wt,ne&&Rt(Wt),ie)}}}function $(R,A,O,ie,pe,de){const ne=new nn;ne.setAttribute("position",new An(new Float32Array(R*3),3));const Me=new Ar(ne,new Ur({color:A,size:O,map:ie,transparent:!0,opacity:pe,depthWrite:!1,blending:ie?Ws:yi}));return Me.frustumCulled=!1,Me.userData.seed=Float32Array.from({length:R},()=>Math.random()),Me.userData.h=Float32Array.from({length:R},()=>Math.random()*de),Me.userData.top=de,Me.visible=!e,r.add(Me),Me}const we=[{at:Z,p:$(30,"#d8cfc6",2.2,x.soft,.5,9),heat:!0}];for(const R of Object.values(F)){if(!R.roof.smokeAt)continue;R.g.updateMatrixWorld(!0);const A=R.roof.R.localToWorld(new G(...R.roof.smokeAt));we.push({at:A,p:$(14,"#d8cfc6",1.4,x.soft,.45,5),house:R})}const ge=$(60,"#ffb04a",.11,null,.9,4),Fe=[];for(let R=0;R<4;R++){const A=new Xi(new ns({map:x.spark,color:R%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:yi}));A.scale.setScalar(.25),q.g.add(A),Fe.push(A)}const He=[];{const R=new Set;for(const O of Object.values(F)){R.add(O.roof.R);for(const ie of Object.values(O.sides))R.add(ie.up);if(O.upper){R.add(O.upper.U);for(const ie of Object.values(O.upper.sides))R.add(ie.up)}}r.updateMatrixWorld(!0);const A=[];r.traverse(O=>{O instanceof Gi&&A.push(O)});for(const O of A){const ie=[];let pe=!1;for(let de=O.parent,ne=0;de&&ne<40;de=de.parent,ne++)R.has(de)&&ie.push(de),de.userData.agentId&&(pe=!0);pe||(r.attach(O),ie.length&&He.push({l:O,anc:ie,base:O.intensity}))}}function ye(){for(const R of He)R.anc.every(O=>O.visible)?R.l.intensity===0&&(R.l.intensity=R.base):R.l.intensity=0}const Te=1;r.updateMatrixWorld(!0);const Ne=[];for(const{f:R,s:A}of L){if(A<1.3)continue;let O=R,ie=!1;for(let pe=0;O&&pe<40;pe++)O.userData.movesWithWall===!0&&(ie=!0),O=O.parent;ie||Ne.push(R.getWorldPosition(new G))}function Y(R){const A=new nn;A.setAttribute("position",new An(new Float32Array(R*3),3)),A.setAttribute("color",new An(new Float32Array(R*3),3));const O=new Ar(A,new Ur({size:.09,map:x.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:yi,toneMapped:!1}));return O.frustumCulled=!1,O.visible=!e,r.add(O),O}const ve=Y(Math.max(1,Ne.length*7)),xe=ve.geometry.attributes.position.count,Ge={src:Float32Array.from({length:xe},(R,A)=>A%Math.max(1,Ne.length)),life:Float32Array.from({length:xe},()=>Math.random()),sd:Float32Array.from({length:xe},()=>Math.random())},ee=240,K=new Ar(new nn,new Ur({size:.07,map:x.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:yi}));K.geometry.setAttribute("position",new An(new Float32Array(ee*3),3));const me=Float32Array.from({length:ee*3},()=>Math.random());K.frustumCulled=!1,K.visible=!e,r.add(K);const Oe=80,_=new Zt(.16,.1),H=new Kr(_,g("#ffffff",{side:ln}),Oe),X=[];for(let R=0;R<Oe;R++)H.setColorAt(R,N.set(w([m.autumn1,m.autumn2,m.autumn3,"#c9a03a"]))),X.push({x:T(-30,30),y:T(0,12),z:T(-30,30),r:T(0,6),v:T(.5,.9),w:T(1,3)});H.instanceColor&&(H.instanceColor.needsUpdate=!0),H.frustumCulled=!1,H.visible=!e,r.add(H);const k=new Lt,oe=new cn,ce=new Ai,Ve=new G,_t=new G(1,1,1);function Et(R,A){const O=ve.geometry.attributes.position,ie=ve.geometry.attributes.color;for(let ne=0;ne<O.count;ne++){const Me=Ne[Ge.src[ne]];if(!Me)break;Ge.life[ne]=Ge.life[ne]+A*(.35+Ge.sd[ne]*.4),Ge.life[ne]>1&&(Ge.life[ne]=Ge.life[ne]-1);const De=Ge.life[ne],We=Ge.sd[ne];O.setXYZ(ne,Me.x+Math.sin(R*(1+We)+We*20)*.25*De,Me.y+.2+De*2.2,Me.z+Math.cos(R*(.8+We)+We*9)*.25*De);const be=(1-De)*(.6+.4*Math.sin(R*13+We*30))*2.2;ie.setXYZ(ne,be,be*.48,be*.16)}O.needsUpdate=!0,ie.needsUpdate=!0;const pe=K.geometry.attributes.position,de=Ae.target;for(let ne=0;ne<ee;ne++){const Me=me[ne*3],De=me[ne*3+1],We=me[ne*3+2],be=((Me*44+R*.25*(De-.5)-de.x)%44+66)%44-22,Qe=((De*44+R*.18*(Me-.3)-de.z)%44+66)%44-22;pe.setXYZ(ne,de.x+be,.6+We*9+Math.sin(R*.5+Me*20)*.4,de.z+Qe)}pe.needsUpdate=!0;for(let ne=0;ne<Oe;ne++){const Me=X[ne];Me.y-=A*Me.v,Me.y<.05&&(Me.y=T(8,13),Me.x=de.x+T(-28,28),Me.z=de.z+T(-28,28)),Ve.set(Me.x+Math.sin(R*.9+Me.r)*.9,Me.y,Me.z+Math.cos(R*.7+Me.r)*.6),ce.set(R*Me.w+Me.r,R*.6+Me.r,Math.sin(R*2+Me.r)*1.2),k.compose(Ve,oe.setFromEuler(ce),_t),H.setMatrixAt(ne,k)}H.instanceMatrix.needsUpdate=!0}r.traverse(R=>{const A=R.material;(R instanceof Ar||R instanceof Xi||R.userData.noLine||A&&!Array.isArray(A)&&(A.blending===yi||A.depthWrite===!1))&&R.layers.set(Te)});for(const R of[st,H,Ye])R.traverse(A=>A.layers.set(Te));ot.layers.enable(Te);const pt=new K0({side:ln}),Ct=new Fn(1,1,{type:On});Ct.depthTexture=new gs(1,1),Ct.depthTexture.type=ui;const bt=new xt(.5,.5,1),Je=new xt;function mt(){r.overrideMaterial=pt,ot.layers.disable(Te);const R=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(Je);const A=i.getClearAlpha();i.setClearColor(bt,1),i.setRenderTarget(Ct),i.clear(),i.render(r,ot),i.setRenderTarget(null),i.setClearColor(Je,A),i.shadowMap.autoUpdate=R,ot.layers.enable(Te),r.overrideMaterial=null}const Yt=new Y1(i,new Fn(1,1,{type:On,samples:4}));Yt.setPixelRatio(i.getPixelRatio()),Yt.addPass(new Z1(r,ot));const fn="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",pn=new gc({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Be},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:fn,fragmentShader:`#include <packing>
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
    }`});Yt.addPass(pn);const E=new tr(new Be(t,n),.42,.55,.88);bM(E),Yt.addPass(E),Yt.addPass(new K1);const U=new gc({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Be},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:fn,fragmentShader:`#include <packing>
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
    }`});Yt.addPass(U);const V=pn.uniforms,J=U.uniforms,ue=(R,A)=>R[A];ue(V,"tDepth").value=Ct.depthTexture,ue(J,"tDepth").value=Ct.depthTexture;function Re(R,A){const O=i.getPixelRatio();i.setSize(R,A),Yt.setSize(R,A),E.setSize(R,A),Ct.setSize(Math.floor(R*O),Math.floor(A*O)),ue(V,"texel").value.set(1/(R*O),1/(A*O)),ue(J,"texel").value.copy(ue(V,"texel").value),ue(V,"width").value=Math.max(1,O*.85),ot.aspect=R/A,ot.updateProjectionMatrix()}for(const R of[V,J])ue(R,"near").value=ot.near,ue(R,"far").value=ot.far;Re(t,n);const j=0;let C=-1,Se=0,ae=0,y=!1;function P(R){C<0&&(C=R);const A=(R-C)/1e3,O=Math.min(.05,A-Se);Se=A;for(const ne of Ft){const Me=jo[ne.id].speed;let De=$u(Mt[ne.id],R,Me,e);if(St&&Le&&!De.walk&&De.spot===rh[ne.id]&&ml(ne.id,St,Le,Xe)===De.spot){for(const wt of St.tasks)wt.owner===ne.id&&Xe.add(wt.id);const Rt=ml(ne.id,St,Le,Xe);Rt&&(De=Ju(De,Rt,R,Me,e,ps[ne.id]))}Mt[ne.id]=De;const We=ju(De,R);if(ne.root.position.x=We.x,ne.root.position.z=We.z,We.walking){const Rt=We.heading-ne.root.rotation.y;ne.root.rotation.y+=Math.atan2(Math.sin(Rt),Math.cos(Rt))*Math.min(1,O*10)}else ne.root.rotation.y=We.heading;const be=Ze(ne.root.position.x,ne.root.position.z);ne.root.position.y+=(be-ne.root.position.y)*Math.min(1,O*12);const Qe=Qu(De,R),yt=di[De.spot].pose,vt=We.walking?"walk":Qe?If.has(yt)?"sit":"idle":yt;rt[ne.id]=!We.walking&&!Qe&&De.spot===ps[ne.id]&&!!St&&et.has(St.agents[ne.id].state),dt.lanternFor(ne,vt,A),dt.drive(ne,vt,O,We.walking?null:De.spot,De.walk?De.walk.speed/Me:1)}const ie=!!rt.frontend&&St?.agents.frontend.state==="writing",pe=.25+j*.35,de=e?0:Math.sin(A*9)*.08+Math.sin(A*23)*.05;B.emissiveIntensity=.9+pe*1.4+de,se.emissiveIntensity=1.2+pe*1.8+de,le.intensity=8+pe*16+de*20;for(const[ne,Me]of[[q,"frontend"],[re,"backend"]]){const De=!!rt[Me],We=ne.screen?.material;We&&(We.opacity+=((De?1:.3)-We.opacity)*Math.min(1,O*4)),ne.light&&(ne.light.intensity=De?3.5:0)}if(S(O),!e){for(const{f:be,ph:Qe}of L){const yt=1+Math.sin(A*11+Qe)*.16+Math.sin(A*27+Qe*2)*.08;be.scale.set(1/Math.sqrt(yt),yt,1/Math.sqrt(yt))}for(const be of z)be.l.intensity=be.base*(1+Math.sin(A*9+be.ph)*.12+Math.sin(A*23+be.ph)*.06);Q.intensity=11+Math.sin(A*7)*1.5;for(const be of v)be.o.rotation[be.axis]+=O*be.v,be.bob&&(be.o.position.y=(be.y0??0)+Math.sin(A*1.6)*.06);const ne=Math.abs(Math.sin(A*5.2+ut.frontend));Fe.forEach((be,Qe)=>{const yt=ie&&ne<.25;be.material.opacity=yt?1-ne*4:0,be.position.set(-.4+Qe*.19,.95+Qe%2*.12+(yt?(.25-ne)*.8:0),Qe%2*.08-.29),be.material.rotation=A*3+Qe}),q.kb&&(q.kb.position.y=q.kb.userData.y0+(ie&&ne<.2?.03:0));const Me=ge.geometry.attributes.position,De=ge.userData.h,We=ge.userData.seed;for(let be=0;be<Me.count;be++){const Qe=We[be];De[be]=De[be]+O*(.5+Qe*.7)*(.5+pe),De[be]>ge.userData.top&&(De[be]=0),Me.setXYZ(be,W.x+Math.sin(A*(.6+Qe)+Qe*10)*.8*Qe,W.y+De[be],W.z+Math.cos(A*.7+Qe*7)*.5*Qe)}Me.needsUpdate=!0,ge.material.opacity=Math.min(.95,.2+pe*.5);for(const be of we){const Qe=be.p,yt=Qe.geometry.attributes.position,vt=Qe.userData.h,Rt=Qe.userData.seed,wt=be.house?be.house.lift:0;Qe.visible=wt<.5;const ct=be.heat?.6+pe:.7;for(let Wt=0;Wt<yt.count;Wt++){const It=Rt[Wt];vt[Wt]=vt[Wt]+O*(.5+It*.4)*ct,vt[Wt]>Qe.userData.top&&(vt[Wt]=0);const Tn=vt[Wt];yt.setXYZ(Wt,be.at.x+Math.sin(Tn*.8+It*6)*Tn*.16+Tn*.3,be.at.y+Tn,be.at.z+Math.cos(Tn*.6+It*4)*Tn*.14)}yt.needsUpdate=!0}fe.offset.y=(fe.offset.y+O*1.6)%1,te.offset.x=(te.offset.x+O*.12)%1,st.rotation.y+=O*.004,Ee.forEach((be,Qe)=>{be.material.opacity=.42+Math.sin(A*.8+Qe)*.1});for(const be of _e){const Qe=be.userData;Qe.a+=O*Qe.s,be.position.set(Math.cos(Qe.a)*Qe.r,Qe.y+Math.sin(Qe.a*3)*.8,Math.sin(Qe.a)*Qe.r),be.rotation.y=-Qe.a,be.children[3].rotation.z=Math.sin(A*10+Qe.r)*.6,be.children[4].rotation.z=-Math.sin(A*10+Qe.r)*.6}b.forEach((be,Qe)=>{be.rotation.y=Math.sin(A*2+Qe)*.3}),Ke.position.y=-.4+Math.sin(A*.9)*.2,Ke.rotation.x=Math.sin(A*.7)*.03;{const be=at.userData;be.a+=O*.022,at.position.set(Math.cos(be.a)*be.r,be.y+Math.sin(A*.5)*.8,Math.sin(be.a)*be.r),at.rotation.y=Math.atan2(-Math.cos(be.a),-Math.sin(be.a))}}if(ke){const ne=Math.min(1,(performance.now()-ke.t0)/ke.dur),Me=ne<.5?4*ne*ne*ne:1-Math.pow(-2*ne+2,3)/2;Ae.target.lerpVectors(ke.ft,ke.tt,Me),ot.position.lerpVectors(ke.fp,ke.tp,Me),ne>=1&&(ke=null)}ye(),Ae.update(),ze(),e||Et(A,O),Ye.position.copy(ot.position),ue(J,"focus").value=ot.position.distanceTo(Ae.target),ue(J,"time").value=e?0:A,mt(),Yt.render(),ae++}return{renderer:i,scene:r,camera:ot,controls:Ae,housePicks:nt,agentPhase:ut,cast:dt,groundY:Ze,place(R,A){const O=di[A];dt.actors[R].root.position.y=Ze(O.x,O.z),Mt[R]=Ei(A,performance.now())},update(R,A){St=R,Le=A;const O=performance.now();for(const ie of ts){const pe=ml(ie,R,Le,Xe);pe&&(Mt[ie]=Ju(Mt[ie],pe,O,jo[ie].speed,e,ps[ie]))}},land(){const R=performance.now();for(const A of ts)Mt[A]=_M(Mt[A],R)},restart(){Mt=ht(),Xe.clear()},whereIs(R){const A=performance.now(),O=$u(Mt[R],A,jo[R].speed,e),ie=ju(O,A).walking,pe=ie?O.walk:null;return{spot:O.spot,to:pe?.to??null,path:pe?.path??null,walking:ie,held:Qu(O,A)}},get frames(){return ae},start(){y=!1,i.setAnimationLoop(R=>{y||P(R)})},stop(){y=!0,i.setAnimationLoop(null)},resize(R,A){t=R,n=A,Re(R,A)},flyToRoom:qe,setOpenHouses(R){je=R},setTasks(R){f.drawBoard(R)},dispose(){i.setAnimationLoop(null),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("wheel",Ie),Ae.dispose(),Yt.dispose(),Ct.dispose(),i.dispose()}}}export{oS as createWorld};
