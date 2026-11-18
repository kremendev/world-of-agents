const Us={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qf=0,Gc=1,Yf=2,br=1,Kf=2,_r=3,Qi=0,Dn=1,on=2,ls=0,Os=1,Ui=2,Hc=3,Vc=4,Zf=5,Ns=100,Jf=101,$f=102,Qf=103,jf=104,ed=200,td=201,nd=202,id=203,Du=204,Nu=205,sd=206,rd=207,od=208,ad=209,ld=210,cd=211,hd=212,ud=213,fd=214,sl=0,rl=1,ol=2,Lr=3,al=4,ll=5,cl=6,hl=7,Iu=0,dd=1,pd=2,zi=0,tc=1,nc=2,ic=3,ra=4,sc=5,rc=6,oc=7,Wc="attached",md="detached",Uu=300,Gs=301,Dr=302,xa=303,va=304,ni=1e3,Bn=1001,Wo=1002,_n=1003,Ou=1004,xr=1005,En=1006,Oo=1007,Mi=1008,Yn=1009,Fu=1010,Bu=1011,Nr=1012,ac=1013,hi=1014,ti=1015,Nn=1016,lc=1017,cc=1018,Hs=1020,zu=35902,ku=35899,Gu=1021,Hu=1022,li=1023,ji=1026,Zi=1027,oa=1028,hc=1029,hs=1030,uc=1031,fc=1033,Fo=33776,Bo=33777,zo=33778,ko=33779,ul=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,_l=37496,xl=37488,vl=37489,Xo=37490,Ml=37491,yl=37808,Sl=37809,bl=37810,wl=37811,Tl=37812,El=37813,Al=37814,Rl=37815,Cl=37816,Pl=37817,Ll=37818,Dl=37819,Nl=37820,Il=37821,Ul=36492,Ol=36494,Fl=36495,Bl=36283,zl=36284,qo=36285,kl=36286,Ir=2300,Ur=2301,Ma=2302,Xc=2303,qc=2400,Yc=2401,Kc=2402,gd=2500,_d=0,Vu=1,Gl=2,xd=3200,Or=0,vd=1,Oi="",Mn="srgb",Jn="srgb-linear",Yo="linear",Qt="srgb",ya=7680,Md=519,yd=512,Sd=513,bd=514,Wu=515,wd=516,Td=517,Xu=518,qu=519,Yu=35044,Zc="300 es",ci=2e3,Fr=2001;function Ed(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ad(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rd(){const s=Br("canvas");return s.style.display="block",s}const Jc={};function Ko(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ku(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function bt(...s){s=Ku(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Lt(...s){s=Ku(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Fs(...s){const e=s.join(" ");e in Jc||(Jc[e]=!0,bt(...s))}function Cd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Pd={[sl]:sl,[ol]:cl,[al]:al,[Lr]:ll,[rl]:rl,[cl]:ol,[hl]:hl,[ll]:Lr};class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const wr=Math.PI/180,Vs=180/Math.PI;function ui(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function dc(s,e){return(s%e+e)%e}function Ld(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function Tr(s,e,t){return(1-t)*s+t*e}function Nd(s,e,t,n){return Tr(s,e,1-Math.exp(-t*n))}function Id(s,e=1){return e-Math.abs(dc(s,e*2)-e)}function Ud(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bd(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function kd(s){s!==void 0&&($c=s);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(s){return s*wr}function Hd(s){return s*Vs}function Vd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xd(s,e,t,n,i){const r=Math.cos,o=Math.sin,l=r(t/2),a=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(l*h,a*d,a*f,l*c);break;case"YZY":s.set(a*f,l*h,a*d,l*c);break;case"ZXZ":s.set(a*d,a*f,l*h,l*c);break;case"XZX":s.set(l*h,a*p,a*u,l*c);break;case"YXY":s.set(a*u,l*h,a*p,l*c);break;case"ZYZ":s.set(a*p,a*u,l*h,l*c);break;default:bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function aa(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pc(s,e){if(e.constructor===Float32Array)return s;const t=aa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function mc(s,e){if(e.constructor===Float32Array)return s;const t=aa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Ju={DEG2RAD:wr,RAD2DEG:Vs,generateUUID:ui,clamp:Bt,euclideanModulo:dc,mapLinear:Ld,inverseLerp:Dd,lerp:Tr,damp:Nd,pingpong:Id,smoothstep:Ud,smootherstep:Od,randInt:Fd,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Gd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:Xd,normalize:mc,denormalize:pc},Uc=class Uc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uc.prototype.isVector2=!0;let Ue=Uc;class Vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||a!==f||c!==u||h!==p){let m=a*f+c*u+h*p+d*v;m<0&&(f=-f,u=-u,p=-p,v=-v,m=-m);let _=1-l;if(m<.9995){const y=Math.acos(m),C=Math.sin(y);_=Math.sin(_*y)/C,l=Math.sin(l*y)/C,a=a*_+f*l,c=c*_+u*l,h=h*_+p*l,d=d*_+v*l}else{a=a*_+f*l,c=c*_+u*l,h=h*_+p*l,d=d*_+v*l;const y=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=y,c*=y,h*=y,d*=y}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=l*p+h*d+a*u-c*f,e[t+1]=a*p+h*f+c*d-l*u,e[t+2]=c*p+h*u+l*f-a*d,e[t+3]=h*p-l*d-a*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(n/2),h=l(i/2),d=l(r/2),f=a(n/2),u=a(i/2),p=a(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],a=t[9],c=t[2],h=t[6],d=t[10],f=n+l+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-a)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>l&&n>d){const u=2*Math.sqrt(1+n-l-d);this._w=(h-a)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(l>d){const u=2*Math.sqrt(1+l-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(a+h)/u}else{const u=2*Math.sqrt(1+d-n-l);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(a+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+o*l+i*c-r*a,this._y=i*h+o*a+r*l-n*c,this._z=r*h+o*c+n*a-i*l,this._w=o*h-n*l-i*a-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,i=-i,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);a=Math.sin(a*c)/h,t=Math.sin(t*c)/h,this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oc=class Oc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*i-l*n),h=2*(l*t-r*i),d=2*(r*n-o*t);return this.x=t+a*c+o*d-l*h,this.y=n+a*h+l*c-r*d,this.z=i+a*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=i*a-r*l,this.y=r*o-n*a,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;let V=Oc;const Sa=new V,Qc=new Vn,Fc=class Fc{constructor(e,t,n,i,r,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c)}set(e,t,n,i,r,o,l,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],v=i[0],m=i[3],_=i[6],y=i[1],C=i[4],T=i[7],U=i[2],D=i[5],M=i[8];return r[0]=o*v+l*y+a*U,r[3]=o*m+l*C+a*D,r[6]=o*_+l*T+a*M,r[1]=c*v+h*y+d*U,r[4]=c*m+h*C+d*D,r[7]=c*_+h*T+d*M,r[2]=f*v+u*y+p*U,r[5]=f*m+u*C+p*D,r[8]=f*_+u*T+p*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8];return t*o*h-t*l*c-n*r*h+n*l*a+i*r*c-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=h*o-l*c,f=l*a-h*r,u=c*r-o*a,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(l*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*a)*v,e[5]=(i*r-l*t)*v,e[6]=u*v,e[7]=(n*a-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+e,-i*c,i*a,-i*(-c*o+a*l)+l+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ba.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fc.prototype.isMatrix3=!0;let Nt=Fc;const ba=new Nt,jc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){const s={enabled:!0,workingColorSpace:Jn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Oi?Yo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jn]:{primaries:e,whitePoint:n,transfer:Yo,toXYZ:jc,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:Qt,toXYZ:jc,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),s}const Wt=qd();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ms;class Yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Br("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class gc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(wa(i[o].image)):r.push(wa(i[o]))}else r=wa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function wa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}let Zd=0;const Ta=new V;class yn extends es{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=Bn,i=Bn,r=En,o=Mi,l=li,a=Yn,c=yn.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ui(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){bt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){bt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Uu;yn.DEFAULT_ANISOTROPY=1;const Bc=class Bc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const a=e.elements,c=a[0],h=a[4],d=a[8],f=a[1],u=a[5],p=a[9],v=a[2],m=a[6],_=a[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,T=(u+1)/2,U=(_+1)/2,D=(h+f)/4,M=(d+v)/4,w=(p+m)/4;return C>T&&C>U?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=D/n,r=M/n):T>U?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=D/i,r=w/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=M/r,i=w/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bc.prototype.isVector4=!0;let tn=Bc;class Jd extends es{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new yn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Jd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $u extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sa=class sa{constructor(e,t,n,i,r,o,l,a,c,h,d,f,u,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,v,m)}set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,v,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=l,_[13]=a,_[2]=c,_[6]=h,_[10]=d,_[14]=f,_[3]=u,_[7]=p,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,p=l*h,v=l*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=u+p*c,t[5]=f-v*c,t[9]=-l*a,t[2]=v-f*c,t[6]=p+u*c,t[10]=o*a}else if(e.order==="YXZ"){const f=a*h,u=a*d,p=c*h,v=c*d;t[0]=f+v*l,t[4]=p*l-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=u*l-p,t[6]=v+f*l,t[10]=o*a}else if(e.order==="ZXY"){const f=a*h,u=a*d,p=c*h,v=c*d;t[0]=f-v*l,t[4]=-o*d,t[8]=p+u*l,t[1]=u+p*l,t[5]=o*h,t[9]=v-f*l,t[2]=-o*c,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const f=o*h,u=o*d,p=l*h,v=l*d;t[0]=a*h,t[4]=p*c-u,t[8]=f*c+v,t[1]=a*d,t[5]=v*c+f,t[9]=u*c-p,t[2]=-c,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const f=o*a,u=o*c,p=l*a,v=l*c;t[0]=a*h,t[4]=v-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*a,u=o*c,p=l*a,v=l*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=l*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,jd)}lookAt(e,t,n){const i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Hi.crossVectors(n,Xn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Hi.crossVectors(n,Xn)),Hi.normalize(),Qr.crossVectors(Xn,Hi),i[0]=Hi.x,i[4]=Qr.x,i[8]=Xn.x,i[1]=Hi.y,i[5]=Qr.y,i[9]=Xn.y,i[2]=Hi.z,i[6]=Qr.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],v=n[6],m=n[10],_=n[14],y=n[3],C=n[7],T=n[11],U=n[15],D=i[0],M=i[4],w=i[8],z=i[12],k=i[1],j=i[5],oe=i[9],ee=i[13],F=i[2],re=i[6],le=i[10],J=i[14],ne=i[3],ae=i[7],fe=i[11],we=i[15];return r[0]=o*D+l*k+a*F+c*ne,r[4]=o*M+l*j+a*re+c*ae,r[8]=o*w+l*oe+a*le+c*fe,r[12]=o*z+l*ee+a*J+c*we,r[1]=h*D+d*k+f*F+u*ne,r[5]=h*M+d*j+f*re+u*ae,r[9]=h*w+d*oe+f*le+u*fe,r[13]=h*z+d*ee+f*J+u*we,r[2]=p*D+v*k+m*F+_*ne,r[6]=p*M+v*j+m*re+_*ae,r[10]=p*w+v*oe+m*le+_*fe,r[14]=p*z+v*ee+m*J+_*we,r[3]=y*D+C*k+T*F+U*ne,r[7]=y*M+C*j+T*re+U*ae,r[11]=y*w+C*oe+T*le+U*fe,r[15]=y*z+C*ee+T*J+U*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],a=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],v=e[7],m=e[11],_=e[15],y=a*u-c*f,C=l*u-c*d,T=l*f-a*d,U=o*u-c*h,D=o*f-a*h,M=o*d-l*h;return t*(v*y-m*C+_*T)-n*(p*y-m*U+_*D)+i*(p*C-v*U+_*M)-r*(p*T-v*D+m*M)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],l=e[9],a=e[2],c=e[6],h=e[10];return t*(o*h-l*c)-n*(r*h-l*a)+i*(r*c-o*a)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],v=e[13],m=e[14],_=e[15],y=t*l-n*o,C=t*a-i*o,T=t*c-r*o,U=n*a-i*l,D=n*c-r*l,M=i*c-r*a,w=h*v-d*p,z=h*m-f*p,k=h*_-u*p,j=d*m-f*v,oe=d*_-u*v,ee=f*_-u*m,F=y*ee-C*oe+T*j+U*k-D*z+M*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/F;return e[0]=(l*ee-a*oe+c*j)*re,e[1]=(i*oe-n*ee-r*j)*re,e[2]=(v*M-m*D+_*U)*re,e[3]=(f*D-d*M-u*U)*re,e[4]=(a*k-o*ee-c*z)*re,e[5]=(t*ee-i*k+r*z)*re,e[6]=(m*T-p*M-_*C)*re,e[7]=(h*M-f*T+u*C)*re,e[8]=(o*oe-l*k+c*w)*re,e[9]=(n*k-t*oe-r*w)*re,e[10]=(p*D-v*T+_*y)*re,e[11]=(d*T-h*D-u*y)*re,e[12]=(l*z-o*j-a*w)*re,e[13]=(t*j-n*z+i*w)*re,e[14]=(v*C-p*U-m*y)*re,e[15]=(h*U-d*C+f*y)*re,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,c=r*o,h=r*l;return this.set(c*o+n,c*l-i*a,c*a+i*l,0,c*l+i*a,h*l+n,h*a-i*o,0,c*a-i*l,h*a+i*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,c=r+r,h=o+o,d=l+l,f=r*c,u=r*h,p=r*d,v=o*h,m=o*d,_=l*d,y=a*c,C=a*h,T=a*d,U=n.x,D=n.y,M=n.z;return i[0]=(1-(v+_))*U,i[1]=(u+T)*U,i[2]=(p-C)*U,i[3]=0,i[4]=(u-T)*D,i[5]=(1-(f+_))*D,i[6]=(m+y)*D,i[7]=0,i[8]=(p+C)*M,i[9]=(m-y)*M,i[10]=(1-(f+v))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=gs.set(i[0],i[1],i[2]).length();const l=gs.set(i[4],i[5],i[6]).length(),a=gs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),si.copy(this);const c=1/o,h=1/l,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,i,r,o,l=ci,a=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let p,v;if(a)p=r/(o-r),v=o*r/(o-r);else if(l===ci)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(l===Fr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=ci,a=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,v;if(a)p=1/(o-r),v=o/(o-r);else if(l===ci)p=-2/(o-r),v=-(o+r)/(o-r);else if(l===Fr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};sa.prototype.isMatrix4=!0;let Ct=sa;const gs=new V,si=new Ct,Qd=new V(0,0,0),jd=new V(1,1,1),Hi=new V,Qr=new V,Xn=new V,th=new Ct,nh=new Vn;class bi{constructor(e=0,t=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],a=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const ih=new V,_s=new Vn,Ei=new Ct,jr=new V,nr=new V,tp=new V,np=new Vn,sh=new V(1,0,0),rh=new V(0,1,0),oh=new V(0,0,1),ah={type:"added"},ip={type:"removed"},xs={type:"childadded",child:null},Ea={type:"childremoved",child:null};class rn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new V,t=new bi,n=new Vn,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Nt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(nr,jr,this.up):Ei.lookAt(jr,nr,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Ei),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),xs.child=e,this.dispatchEvent(xs),xs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];r(e.shapes,d)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(e.materials,this.material[a]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];i.animations.push(r(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(l){const a=[];for(const c in l){const h=l[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rn.DEFAULT_UP=new V(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Te extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),_=this._getHandJoint(c,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return l!==null&&(l.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Wt.workingColorSpace){if(e=dc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return Wt.colorSpaceToWorking(this,i),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&bt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:bt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Wt.workingToColorSpace(Pn.copy(this),e),Math.round(Bt(Pn.r*255,0,255))*65536+Math.round(Bt(Pn.g*255,0,255))*256+Math.round(Bt(Pn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Pn.copy(this),t);const n=Pn.r,i=Pn.g,r=Pn.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let a,c;const h=(l+o)/2;if(l===o)a=0,c=0;else{const d=o-l;switch(c=h<=.5?d/(o+l):d/(2-o-l),o){case n:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-n)/d+2;break;case r:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Mn){Wt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,n=Pn.g,i=Pn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(eo);const n=Tr(Vi.h,eo.h,t),i=Tr(Vi.s,eo.s,t),r=Tr(Vi.l,eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new gt;gt.NAMES=ju;class _c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rp extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ri=new V,Ai=new V,Ca=new V,Ri=new V,vs=new V,Ms=new V,lh=new V,Pa=new V,La=new V,Da=new V,Na=new tn,Ia=new tn,Ua=new tn;class ei{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ri.subVectors(e,t),i.cross(ri);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ri.subVectors(i,t),Ai.subVectors(n,t),Ca.subVectors(e,t);const o=ri.dot(ri),l=ri.dot(Ai),a=ri.dot(Ca),c=Ai.dot(Ai),h=Ai.dot(Ca),d=o*c-l*l;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*a-l*h)*f,p=(o*h-l*a)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,r,o,l,a){return this.getBarycoord(e,t,n,i,Ri)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Ri.x),a.addScaledVector(o,Ri.y),a.addScaledVector(l,Ri.z),a)}static getInterpolatedAttribute(e,t,n,i,r,o){return Na.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),Na.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Ua.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Na,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(e,t,n,i){return ri.subVectors(n,t),Ai.subVectors(e,t),ri.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ri.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;vs.subVectors(i,n),Ms.subVectors(r,n),Pa.subVectors(e,n);const a=vs.dot(Pa),c=Ms.dot(Pa);if(a<=0&&c<=0)return t.copy(n);La.subVectors(e,i);const h=vs.dot(La),d=Ms.dot(La);if(h>=0&&d<=h)return t.copy(i);const f=a*d-h*c;if(f<=0&&a>=0&&h<=0&&a-h>0)return o=a/(a-h),t.copy(n).addScaledVector(vs,o);Da.subVectors(e,r);const u=vs.dot(Da),p=Ms.dot(Da);if(p>=0&&u<=p)return t.copy(r);const v=u*c-a*p;if(v<=0&&c>=0&&p<=0)return l=c/(c-p),t.copy(n).addScaledVector(Ms,l);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return lh.subVectors(r,i),l=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(lh,l);const _=1/(m+v+f);return o=v*_,l=f*_,t.copy(n).addScaledVector(vs,o).addScaledVector(Ms,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),no.subVectors(this.max,ir),ys.subVectors(e.a,ir),Ss.subVectors(e.b,ir),bs.subVectors(e.c,ir),Wi.subVectors(Ss,ys),Xi.subVectors(bs,Ss),ts.subVectors(ys,bs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ts.z,ts.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ts.z,0,-ts.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ts.y,ts.x,0];return!Oa(t,ys,Ss,bs,no)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,ys,Ss,bs,no))?!1:(io.crossVectors(Wi,Xi),t=[io.x,io.y,io.z],Oa(t,ys,Ss,bs,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,to=new Gi,ys=new V,Ss=new V,bs=new V,Wi=new V,Xi=new V,ts=new V,ir=new V,no=new V,io=new V,ns=new V;function Oa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ns.fromArray(s,r);const l=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),a=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}const gn=new V,so=new Ue;let op=0;class Tn extends es{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?aa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):mc(e,this.array)}}class ef extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tf extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ap=new Gi,sr=new V,Fa=new V;class wi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Fa)),this.expandByPoint(sr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lp=0;const $n=new Ct,Ba=new rn,ws=new V,qn=new Gi,rr=new Gi,wn=new V;class jt extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?tf:ef)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];rr.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(qn.min,rr.min),qn.expandByPoint(wn),wn.addVectors(qn.max,rr.max),qn.expandByPoint(wn)):(qn.expandByPoint(rr.min),qn.expandByPoint(rr.max))}qn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wn));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)wn.fromBufferAttribute(l,c),a&&(ws.fromBufferAttribute(e,c),wn.add(ws)),i=Math.max(i,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],a=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)l[z]=new V,a[z]=new V;const h=new V,d=new V,f=new V,u=new Ue,p=new Ue,v=new Ue,m=new V,_=new V;function y(z,k,j){c[z]=c[k]=c[j]=1,h.fromBufferAttribute(n,z),d.fromBufferAttribute(n,k),f.fromBufferAttribute(n,j),u.fromBufferAttribute(r,z),p.fromBufferAttribute(r,k),v.fromBufferAttribute(r,j),d.sub(h),f.sub(h),p.sub(u),v.sub(u);const oe=1/(p.x*v.y-v.x*p.y);isFinite(oe)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(oe),_.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(oe),l[z].add(m),l[k].add(m),l[j].add(m),a[z].add(_),a[k].add(_),a[j].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,k=C.length;z<k;++z){const j=C[z],oe=j.start,ee=j.count;for(let F=oe,re=oe+ee;F<re;F+=3)y(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new V,U=new V,D=new V,M=new V;function w(z){D.fromBufferAttribute(i,z),M.copy(D);const k=l[z];T.copy(k),T.sub(D.multiplyScalar(D.dot(k))).normalize(),U.crossVectors(M,k);const oe=U.dot(a[z])<0?-1:1;o.setXYZW(z,T.x,T.y,T.z,oe)}for(let z=0,k=n.count;z<k;++z)c[z]&&w(z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new V,r=new V,o=new V,l=new V,a=new V,c=new V,h=new V,d=new V;if(e)for(let f=0,u=e.count;f<u;f+=3){const p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),l.fromBufferAttribute(n,p),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.add(h),a.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(l,a){const c=l.array,h=l.itemSize,d=l.normalized,f=new c.constructor(a.length*h);let u=0,p=0;for(let v=0,m=a.length;v<m;v++){l.isInterleavedBufferAttribute?u=a[v]*l.data.stride+l.offset:u=a[v]*h;for(let _=0;_<h;_++)f[p++]=c[u++]}return new Tn(f,h,d)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const l in i){const a=i[l],c=e(a,n);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const a=[],c=r[l];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);a.push(u)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[a]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=ch(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=ch(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function ch(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ui()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Un=new V;class zr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?aa(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):mc(e,this.data.array)}}const za=new V,cp=new V,hp=new Nt;class Ii{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=za.subVectors(n,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hp.getNormalMatrix(e),i=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let up=0;class Zn extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Os,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){bt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){bt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const a=r[l];delete a.metadata,o.push(a)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ii().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zs extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const or=new V,Es=new V,As=new V,Rs=new Ue,ar=new Ue,sf=new Ct,ro=new V,lr=new V,oo=new V,hh=new Ue,ka=new Ue,uh=new Ue;class cs extends rn{constructor(e=new zs){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nf(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new zr(n,3,0,!1)),Ts.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ao(ro.set(-.5,-.5,0),As,o,Es,i,r),ao(lr.set(.5,-.5,0),As,o,Es,i,r),ao(oo.set(.5,.5,0),As,o,Es,i,r),hh.set(0,0),ka.set(1,0),uh.set(1,1);let l=e.ray.intersectTriangle(ro,lr,oo,!1,or);if(l===null&&(ao(lr.set(-.5,.5,0),As,o,Es,i,r),ka.set(0,1),l=e.ray.intersectTriangle(ro,oo,lr,!1,or),l===null))return;const a=e.ray.origin.distanceTo(or);a<e.near||a>e.far||t.push({distance:a,point:or.clone(),uv:ei.getInterpolation(or,ro,lr,oo,hh,ka,uh,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ao(s,e,t,n,i,r){Rs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ar.x=r*Rs.x-i*Rs.y,ar.y=i*Rs.x+r*Rs.y):ar.copy(Rs),s.copy(e),s.x+=ar.x,s.y+=ar.y,s.applyMatrix4(sf)}const Pi=new V,Ga=new V,lo=new V,co=new V;class Zr{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ga.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),co.copy(this.origin).sub(Ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lo),l=co.dot(this.direction),a=-co.dot(lo),c=co.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*a-l,f=o*l-a,p=r*h,d>=0)if(f>=-p)if(f<=p){const v=1/h;d*=v,f*=v,u=d*(d+o*f+2*l)+f*(o*d+f+2*a)+c}else f=r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f=-r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f<=-p?(d=Math.max(0,-(-o*r+l)),f=d>0?-r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+c):(d=Math.max(0,-(o*r+l)),f=d>0?r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ga).addScaledVector(lo,f),u}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(l=(e.min.z-f.z)*d,a=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,a=(e.min.z-f.z)*d),n>a||l>i)||((l>n||n!==n)&&(n=l),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,l=this.direction,a=l.x,c=l.y,h=l.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,_=n.x-o.x,y=n.y-o.y,C=n.z-o.z,T=Math.abs(a),U=Math.abs(c),D=Math.abs(h);let M,w,z,k,j,oe,ee,F,re,le,J,ne;if(T>=U&&T>=D?(z=a,oe=d,re=p,ne=_,a>=0?(M=c,w=h,k=f,j=u,ee=v,F=m,le=y,J=C):(M=h,w=c,k=u,j=f,ee=m,F=v,le=C,J=y)):U>=D?(z=c,oe=f,re=v,ne=y,c>=0?(M=h,w=a,k=u,j=d,ee=m,F=p,le=C,J=_):(M=a,w=h,k=d,j=u,ee=p,F=m,le=_,J=C)):(z=h,oe=u,re=m,ne=C,h>=0?(M=a,w=c,k=d,j=f,ee=p,F=v,le=_,J=y):(M=c,w=a,k=f,j=d,ee=v,F=p,le=y,J=_)),z===0)return null;const ae=M/z,fe=w/z,we=1/z,Ze=k-ae*oe,nt=j-fe*oe,me=ee-ae*re,Ve=F-fe*re,et=le-ae*ne,lt=J-fe*ne,Ie=et*Ve-lt*me,ut=Ze*lt-nt*et,xt=me*nt-Ve*Ze;if(i){if(Ie<0||ut<0||xt<0)return null}else if((Ie<0||ut<0||xt<0)&&(Ie>0||ut>0||xt>0))return null;const st=Ie+ut+xt;if(st===0)return null;const _t=we*(Ie*oe+ut*re+xt*ne);return(st>0?_t<0:_t>0)?null:this.at(_t/st,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fh=new Ct,is=new Zr,ho=new wi,dh=new V,uo=new V,fo=new V,po=new V,Ha=new V,mo=new V,ph=new V,go=new V;class Ut extends rn{constructor(e=new jt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){mo.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const h=l[a],d=r[a];h!==0&&(Ha.fromBufferAttribute(d,e),o?mo.addScaledVector(Ha,h):mo.addScaledVector(Ha.sub(t),h))}t.add(mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(ho.containsPoint(is.origin)===!1&&(is.intersectSphere(ho,dh)===null||is.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(fh.copy(r).invert(),is.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],_=o[m.materialIndex],y=Math.max(m.start,u.start),C=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let T=y,U=C;T<U;T+=3){const D=l.getX(T),M=l.getX(T+1),w=l.getX(T+2);i=_o(this,_,e,n,c,h,d,D,M,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=p,_=v;m<_;m+=3){const y=l.getX(m),C=l.getX(m+1),T=l.getX(m+2);i=_o(this,o,e,n,c,h,d,y,C,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],_=o[m.materialIndex],y=Math.max(m.start,u.start),C=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let T=y,U=C;T<U;T+=3){const D=T,M=T+1,w=T+2;i=_o(this,_,e,n,c,h,d,D,M,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=p,_=v;m<_;m+=3){const y=m,C=m+1,T=m+2;i=_o(this,o,e,n,c,h,d,y,C,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fp(s,e,t,n,i,r,o,l){let a;if(e.side===Dn?a=n.intersectTriangle(o,r,i,!0,l):a=n.intersectTriangle(i,r,o,e.side===Qi,l),a===null)return null;go.copy(l),go.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:s}}function _o(s,e,t,n,i,r,o,l,a,c){s.getVertexPosition(l,uo),s.getVertexPosition(a,fo),s.getVertexPosition(c,po);const h=fp(s,e,t,n,uo,fo,po,ph);if(h){const d=new V;ei.getBarycoord(ph,uo,fo,po,d),i&&(h.uv=ei.getInterpolatedAttribute(i,l,a,c,d,new Ue)),r&&(h.uv1=ei.getInterpolatedAttribute(r,l,a,c,d,new Ue)),o&&(h.normal=ei.getInterpolatedAttribute(o,l,a,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:a,c,normal:new V,materialIndex:0};ei.getNormal(uo,fo,po,f.normal),h.face=f,h.barycoord=d}return h}const cr=new tn,mh=new tn,gh=new tn,dp=new tn,_h=new Ct,xo=new V,Va=new wi,xh=new Ct,Wa=new Zr;class pp extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wc,this.bindMatrix=new Ct,this.bindMatrixInverse=new Ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),e.ray.intersectsSphere(Va)!==!1&&(xh.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(xh),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===md?this.bindMatrixInverse.copy(this.bindMatrix).invert():bt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mh.fromBufferAttribute(i.attributes.skinIndex,e),gh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(cr.copy(t),t.set(0,0,0,0)):(cr.set(t.x,t.y,t.z,1),t.set(0,0,0)),cr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=gh.getComponent(r);if(o!==0){const l=mh.getComponent(r);_h.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(dp.copy(cr).applyMatrix4(_h),o)}}return t.isVector4&&(t.w=cr.w),t.applyMatrix4(this.bindMatrixInverse)}}class rf extends rn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class la extends yn{constructor(e=null,t=1,n=1,i,r,o,l,a,c=_n,h=_n,d,f){super(null,o,l,a,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new Ct,mp=new Ct;class xc{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){bt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:mp;vh.multiplyMatrices(l,t[r]),vh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new la(t,e,e,li,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(bt("Skeleton: No bone found with UUID:",r),o=new rf),this.bones.push(o),this.boneInverses.push(new Ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Zo extends Tn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new Ct,Mh=new Ct,vo=[],yh=new Gi,gp=new Ct,hr=new Ut,ur=new wi;class kr extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),yh.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),ur.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cs),Mh.multiplyMatrices(n,Cs),hr.matrixWorld=Mh,hr.raycast(e,vo);for(let o=0,l=vo.length;o<l;o++){const a=vo[o];a.instanceId=r,a.object=this,t.push(a)}vo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new la(new Float32Array(i*this.count),i,this.count,oa,ti));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=i*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ss=new wi,_p=new Ue(.5,.5),Mo=new V;class Gr{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){const i=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],v=r[9],m=r[10],_=r[11],y=r[12],C=r[13],T=r[14],U=r[15];if(i[0].setComponents(c-o,u-h,_-p,U-y).normalize(),i[1].setComponents(c+o,u+h,_+p,U+y).normalize(),i[2].setComponents(c+l,u+d,_+v,U+C).normalize(),i[3].setComponents(c-l,u-d,_-v,U-C).normalize(),n)i[4].setComponents(a,f,m,T).normalize(),i[5].setComponents(c-a,u-f,_-m,U-T).normalize();else if(i[4].setComponents(c-a,u-f,_-m,U-T).normalize(),t===ci)i[5].setComponents(c+a,u+f,_+m,U+T).normalize();else if(t===Fr)i[5].setComponents(a,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=_p.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mo.x=i.normal.x>0?e.max.x:e.min.x,Mo.y=i.normal.y>0?e.max.y:e.min.y,Mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sh=new Ct;class vc{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];Sh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Gr),n[i].setFromProjectionMatrix(Sh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Gr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new vc().copy(this)}}class of extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jo=new V,$o=new V,bh=new Ct,fr=new Zr,yo=new wi,Xa=new V,wh=new V;class Mc extends rn{constructor(e=new jt,t=new of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jo.fromBufferAttribute(t,i-1),$o.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jo.distanceTo($o);e.setAttribute("lineDistance",new Rt(n,1))}else bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;bh.copy(i).invert(),fr.copy(e.ray).applyMatrix4(bh);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const _=h.getX(v),y=h.getX(v+1),C=So(this,e,fr,a,_,y,v);C&&t.push(C)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(u),_=So(this,e,fr,a,v,m,p-1);_&&t.push(_)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const _=So(this,e,fr,a,v,v+1,v);_&&t.push(_)}if(this.isLineLoop){const v=So(this,e,fr,a,p-1,u,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function So(s,e,t,n,i,r,o){const l=s.geometry.attributes.position;if(Jo.fromBufferAttribute(l,i),$o.fromBufferAttribute(l,r),t.distanceSqToSegment(Jo,$o,Xa,wh)>n)return;Xa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Xa);if(!(c<e.near||c>e.far))return{distance:c,point:wh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Th=new V,Eh=new V;class xp extends Mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Th.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(Eh);e.setAttribute("lineDistance",new Rt(n,1))}else bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vp extends Mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Er extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ah=new Ct,Hl=new Zr,bo=new wi,wo=new V;class vr extends rn{constructor(e=new jt,t=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(i),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;Ah.copy(i).invert(),Hl.copy(e.ray).applyMatrix4(Ah);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,v=u;p<v;p++){const m=c.getX(p);wo.fromBufferAttribute(d,m),Rh(wo,m,a,i,e,t,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,v=u;p<v;p++)wo.fromBufferAttribute(d,p),Rh(wo,p,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Rh(s,e,t,n,i,r,o){const l=Hl.distanceSqToPoint(s);if(l<t){const a=new V;Hl.closestPointToPoint(s,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class af extends yn{constructor(e=[],t=Gs,n,i,r,o,l,a,c,h){super(e,t,n,i,r,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vl extends yn{constructor(e,t,n,i,r,o,l,a,c){super(e,t,n,i,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends yn{constructor(e,t,n=hi,i,r,o,l=_n,a=_n,c,h=ji,d=1){if(h!==ji&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,l,a,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class lf extends us{constructor(e,t=hi,n=Gs,i,r,o=_n,l=_n,a,c=ji){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,l,a,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cf extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ae extends jt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(a),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function p(v,m,_,y,C,T,U,D,M,w,z){const k=T/M,j=U/w,oe=T/2,ee=U/2,F=D/2,re=M+1,le=w+1;let J=0,ne=0;const ae=new V;for(let fe=0;fe<le;fe++){const we=fe*j-ee;for(let Ze=0;Ze<re;Ze++){const nt=Ze*k-oe;ae[v]=nt*y,ae[m]=we*C,ae[_]=F,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[_]=D>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Ze/M),d.push(1-fe/w),J+=1}}for(let fe=0;fe<w;fe++)for(let we=0;we<M;we++){const Ze=f+we+re*fe,nt=f+we+re*(fe+1),me=f+(we+1)+re*(fe+1),Ve=f+(we+1)+re*fe;a.push(Ze,nt,Ve),a.push(nt,me,Ve),ne+=6}l.addGroup(u,ne,z),u+=ne,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ae(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qo extends jt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],l=[],a=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,v=i+1,m=new V,_=new V;for(let y=0;y<=p;y++){let C=0,T=0,U=0,D=0;if(y<=n){const z=y/n,k=z*Math.PI/2;T=-h-e*Math.cos(k),U=e*Math.sin(k),D=-e*Math.cos(k),C=z*d}else if(y<=n+r){const z=(y-n)/r;T=-h+z*t,U=e,D=0,C=d+z*f}else{const z=(y-n-r)/n,k=z*Math.PI/2;T=h+e*Math.sin(k),U=e*Math.cos(k),D=e*Math.sin(k),C=d+f+z*d}const M=Math.max(0,Math.min(1,C/u));let w=0;y===0?w=.5/i:y===p&&(w=-.5/i);for(let z=0;z<=i;z++){const k=z/i,j=k*Math.PI*2,oe=Math.sin(j),ee=Math.cos(j);_.x=-U*ee,_.y=T,_.z=U*oe,l.push(_.x,_.y,_.z),m.set(-U*ee,D,U*oe),m.normalize(),a.push(m.x,m.y,m.z),c.push(k+w,M)}if(y>0){const z=(y-1)*v;for(let k=0;k<i;k++){const j=z+k,oe=z+k+1,ee=y*v+k,F=y*v+k+1;o.push(j,oe,ee),o.push(oe,F,ee)}}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ai extends jt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],l=[],a=[],c=new V,h=new Ue;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,a.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class je extends jt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const v=[],m=n/2;let _=0;y(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(u,2));function y(){const T=new V,U=new V;let D=0;const M=(t-e)/n;for(let w=0;w<=r;w++){const z=[],k=w/r,j=k*(t-e)+e;for(let oe=0;oe<=i;oe++){const ee=oe/i,F=ee*a+l,re=Math.sin(F),le=Math.cos(F);U.x=j*re,U.y=-k*n+m,U.z=j*le,d.push(U.x,U.y,U.z),T.set(re,M,le).normalize(),f.push(T.x,T.y,T.z),u.push(ee,1-k),z.push(p++)}v.push(z)}for(let w=0;w<i;w++)for(let z=0;z<r;z++){const k=v[z][w],j=v[z+1][w],oe=v[z+1][w+1],ee=v[z][w+1];(e>0||z!==0)&&(h.push(k,j,ee),D+=3),(t>0||z!==r-1)&&(h.push(j,oe,ee),D+=3)}c.addGroup(_,D,0),_+=D}function C(T){const U=p,D=new Ue,M=new V;let w=0;const z=T===!0?e:t,k=T===!0?1:-1;for(let oe=1;oe<=i;oe++)d.push(0,m*k,0),f.push(0,k,0),u.push(.5,.5),p++;const j=p;for(let oe=0;oe<=i;oe++){const F=oe/i*a+l,re=Math.cos(F),le=Math.sin(F);M.x=z*le,M.y=m*k,M.z=z*re,d.push(M.x,M.y,M.z),f.push(0,k,0),D.x=re*.5+.5,D.y=le*.5*k+.5,u.push(D.x,D.y),p++}for(let oe=0;oe<i;oe++){const ee=U+oe,F=j+oe;T===!0?h.push(F,F+1,ee):h.push(F+1,F,ee),w+=3}c.addGroup(_,w,T===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mn extends je{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new mn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends jt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),c(n),h(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const C=new V,T=new V,U=new V;for(let D=0;D<t.length;D+=3)u(t[D+0],C),u(t[D+1],T),u(t[D+2],U),a(C,T,U,y)}function a(y,C,T,U){const D=U+1,M=[];for(let w=0;w<=D;w++){M[w]=[];const z=y.clone().lerp(T,w/D),k=C.clone().lerp(T,w/D),j=D-w;for(let oe=0;oe<=j;oe++)oe===0&&w===D?M[w][oe]=z:M[w][oe]=z.clone().lerp(k,oe/j)}for(let w=0;w<D;w++)for(let z=0;z<2*(D-w)-1;z++){const k=Math.floor(z/2);z%2===0?(f(M[w][k+1]),f(M[w+1][k]),f(M[w][k])):(f(M[w][k+1]),f(M[w+1][k+1]),f(M[w+1][k]))}}function c(y){const C=new V;for(let T=0;T<r.length;T+=3)C.x=r[T+0],C.y=r[T+1],C.z=r[T+2],C.normalize().multiplyScalar(y),r[T+0]=C.x,r[T+1]=C.y,r[T+2]=C.z}function h(){const y=new V;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];const T=m(y)/2/Math.PI+.5,U=_(y)/Math.PI+.5;o.push(T,1-U)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){const C=o[y+0],T=o[y+2],U=o[y+4],D=Math.max(C,T,U),M=Math.min(C,T,U);D>.9&&M<.1&&(C<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),U<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,C){const T=y*3;C.x=e[T+0],C.y=e[T+1],C.z=e[T+2]}function p(){const y=new V,C=new V,T=new V,U=new V,D=new Ue,M=new Ue,w=new Ue;for(let z=0,k=0;z<r.length;z+=9,k+=6){y.set(r[z+0],r[z+1],r[z+2]),C.set(r[z+3],r[z+4],r[z+5]),T.set(r[z+6],r[z+7],r[z+8]),D.set(o[k+0],o[k+1]),M.set(o[k+2],o[k+3]),w.set(o[k+4],o[k+5]),U.copy(y).add(C).add(T).divideScalar(3);const j=m(U);v(D,k+0,y,j),v(M,k+2,C,j),v(w,k+4,T,j)}}function v(y,C,T,U){U<0&&y.x===1&&(o[C]=y.x-1),T.x===0&&T.z===0&&(o[C]=U/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.detail)}}class vi extends ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vi(e.radius,e.detail)}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){bt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(i=Math.floor(l+(a-l)/2),c=n[i]-o,c<0)l=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),l=this.getPoint(r),a=t||(o.isVector2?new Ue:new V);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new V,i=[],r=[],o=[],l=new V,a=new Ct;for(let u=0;u<=e;u++){const p=u/e;i[u]=this.getTangentAt(p,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),l.crossVectors(i[u-1],i[u]),l.length()>Number.EPSILON){l.normalize();const p=Math.acos(Bt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(l,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(Bt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(a.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class yc extends Ti{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Ue){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=a-this.aX,u=c-this.aY;a=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(a,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mp extends yc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let s=0,e=0,t=0,n=0;function i(r,o,l,a){s=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){i(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,h,d){let f=(o-r)/c-(l-r)/(c+h)+(l-o)/h,u=(l-o)/h-(a-o)/(h+d)+(a-l)/d;f*=h,u*=h,i(o,l,f,u)},calc:function(r){const o=r*r,l=o*r;return s+e*r+t*o+n*l}}}const Ch=new V,Ph=new V,qa=new Sc,Ya=new Sc,Ka=new Sc;class yp extends Ti{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,h;this.closed||l>0?c=i[(l-1)%r]:(Ph.subVectors(i[0],i[1]).add(i[0]),c=Ph);const d=i[l%r],f=i[(l+1)%r];if(this.closed||l+2<r?h=i[(l+2)%r]:(Ch.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),qa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,v,m),Ya.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,v,m),Ka.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ya.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ka.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(qa.calc(a),Ya.calc(a),Ka.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new V().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,l=s*s,a=s*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*s+t}function Sp(s,e){const t=1-s;return t*t*e}function bp(s,e){return 2*(1-s)*s*e}function wp(s,e){return s*s*e}function Ar(s,e,t,n){return Sp(s,e)+bp(s,t)+wp(s,n)}function Tp(s,e){const t=1-s;return t*t*t*e}function Ep(s,e){const t=1-s;return 3*t*t*s*e}function Ap(s,e){return 3*(1-s)*s*s*e}function Rp(s,e){return s*s*s*e}function Rr(s,e,t,n,i){return Tp(s,e)+Ep(s,t)+Ap(s,n)+Rp(s,i)}class hf extends Ti{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ue){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Rr(e,i.x,r.x,o.x,l.x),Rr(e,i.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cp extends Ti{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Rr(e,i.x,r.x,o.x,l.x),Rr(e,i.y,r.y,o.y,l.y),Rr(e,i.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uf extends Ti{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Ti{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends Ti{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends Ti{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y),Ar(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),l=r-o,a=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Lh(l,a.x,c.x,h.x,d.x),Lh(l,a.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ue().fromArray(i))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:Mp,CatmullRomCurve3:yp,CubicBezierCurve:hf,CubicBezierCurve3:Cp,EllipseCurve:yc,LineCurve:uf,LineCurve3:Pp,QuadraticBezierCurve:ff,QuadraticBezierCurve3:Lp,SplineCurve:df});class Dp extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let c=0;c<a.length;c++){const h=a[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Wl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Dh extends Dp{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new uf(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ff(this.currentPoint.clone(),new Ue(e,t),new Ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const l=new hf(this.currentPoint.clone(),new Ue(e,t),new Ue(n,i),new Ue(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new df(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,l,a){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,l,a),this}absellipse(e,t,n,i,r,o,l,a){const c=new yc(e,t,n,i,r,o,l,a);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hr extends Dh{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Dh().fromJSON(i))}return this}}function Np(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=pf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let l,a,c;if(n&&(r=Bp(s,e,r,t)),s.length>80*t){l=s[0],a=s[1];let h=l,d=a;for(let f=t;f<i;f+=t){const u=s[f],p=s[f+1];u<l&&(l=u),p<a&&(a=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-l,d-a),c=c!==0?32767/c:0}return Vr(r,o,t,l,a,c,0),o}function pf(s,e,t,n,i){let r;if(i===Zp(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nh(o/n|0,s[o],s[o+1],r);return r&&Ws(r,r.next)&&(Xr(r),r=r.next),r}function fs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ws(t,t.next)||ln(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Vp(s,n,i,r);let l=s;for(;s.prev!==s.next;){const a=s.prev,c=s.next;if(r?Up(s,n,i,r):Ip(s)){e.push(a.i,s.i,c.i),Xr(s),s=c.next,l=c.next;continue}if(s=c,s===l){o?o===1?(s=Op(fs(s),e),Vr(s,e,t,n,i,r,2)):o===2&&Fp(s,e,t,n,i,r):Vr(fs(s),e,t,n,i,r,1);break}}}function Ip(s){const e=s.prev,t=s,n=s.next;if(ln(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,l=e.y,a=t.y,c=n.y,h=Math.min(i,r,o),d=Math.min(l,a,c),f=Math.max(i,r,o),u=Math.max(l,a,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Mr(i,l,r,a,o,c,p.x,p.y)&&ln(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Up(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ln(i,r,o)>=0)return!1;const l=i.x,a=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(l,a,c),p=Math.min(h,d,f),v=Math.max(l,a,c),m=Math.max(h,d,f),_=Xl(u,p,e,t,n),y=Xl(v,m,e,t,n);let C=s.prevZ,T=s.nextZ;for(;C&&C.z>=_&&T&&T.z<=y;){if(C.x>=u&&C.x<=v&&C.y>=p&&C.y<=m&&C!==i&&C!==o&&Mr(l,h,a,d,c,f,C.x,C.y)&&ln(C.prev,C,C.next)>=0||(C=C.prevZ,T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Mr(l,h,a,d,c,f,T.x,T.y)&&ln(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;C&&C.z>=_;){if(C.x>=u&&C.x<=v&&C.y>=p&&C.y<=m&&C!==i&&C!==o&&Mr(l,h,a,d,c,f,C.x,C.y)&&ln(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;T&&T.z<=y;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&Mr(l,h,a,d,c,f,T.x,T.y)&&ln(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Op(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ws(n,i)&&gf(n,t,t.next,i)&&Wr(n,i)&&Wr(i,n)&&(e.push(n.i,t.i,i.i),Xr(t),Xr(t.next),t=s=i),t=t.next}while(t!==s);return fs(t)}function Fp(s,e,t,n,i,r){let o=s;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&qp(o,l)){let a=_f(o,l);o=fs(o,o.next),a=fs(a,a.next),Vr(o,e,t,n,i,r,0),Vr(a,e,t,n,i,r,0);return}l=l.next}o=o.next}while(o!==s)}function Bp(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const l=e[r]*n,a=r<o-1?e[r+1]*n:s.length,c=pf(s,l,a,n,!1);c===c.next&&(c.steiner=!0),i.push(Xp(c))}i.sort(zp);for(let r=0;r<i.length;r++)t=kp(i[r],t);return t}function zp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function kp(s,e){const t=Gp(s,e);if(!t)return e;const n=_f(t,s);return fs(n,n.next),fs(t,t.next)}function Gp(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Ws(s,t))return t;do{if(Ws(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const l=o,a=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&mf(i<c?n:r,i,a,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Wr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Hp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function Hp(s,e){return ln(s.prev,s,e.prev)<0&&ln(e.next,s,s.next)<0}function Vp(s,e,t,n){let i=s;do i.z===0&&(i.z=Xl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Wp(i)}function Wp(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let c=0;c<t&&(l++,o=o.nextZ,!!o);c++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,l--):(i=o,o=o.nextZ,a--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Xl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Xp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function mf(s,e,t,n,i,r,o,l){return(i-o)*(e-l)>=(s-o)*(r-l)&&(s-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(i-o)*(n-l)}function Mr(s,e,t,n,i,r,o,l){return!(s===o&&e===l)&&mf(s,e,t,n,i,r,o,l)}function qp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Yp(s,e)&&(Wr(s,e)&&Wr(e,s)&&Kp(s,e)&&(ln(s.prev,s,e.prev)||ln(s,e.prev,e))||Ws(s,e)&&ln(s.prev,s,s.next)>0&&ln(e.prev,e,e.next)>0)}function ln(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ws(s,e){return s.x===e.x&&s.y===e.y}function gf(s,e,t,n){const i=Eo(ln(s,e,t)),r=Eo(ln(s,e,n)),o=Eo(ln(t,n,s)),l=Eo(ln(t,n,e));return!!(i!==r&&o!==l||i===0&&To(s,t,e)||r===0&&To(s,n,e)||o===0&&To(t,s,n)||l===0&&To(t,e,n))}function To(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Eo(s){return s>0?1:s<0?-1:0}function Yp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&gf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Wr(s,e){return ln(s.prev,s,s.next)<0?ln(s,e,s.next)>=0&&ln(s,s.prev,e)>=0:ln(s,e,s.prev)<0||ln(s,s.next,e)<0}function Kp(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function _f(s,e){const t=ql(s.i,s.x,s.y),n=ql(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(s,e,t,n){const i=ql(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ql(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zp(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Jp{static triangulate(e,t,n=2){return Np(e,t,n)}}class Fi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ih(e),Uh(n,e);let o=e.length;t.forEach(Ih);for(let a=0;a<t.length;a++)i.push(o),o+=t[a].length,Uh(n,t[a]);const l=Jp.triangulate(n,i);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}}function Ih(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Uh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class jo extends jt{constructor(e=new Hr([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let l=0,a=e.length;l<a;l++){const c=e[l];o(c)}this.setAttribute("position",new Rt(i,3)),this.setAttribute("uv",new Rt(r,2)),this.computeVertexNormals();function o(l){const a=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:$p;let C,T=!1,U,D,M,w;if(_){C=_.getSpacedPoints(h),T=!0,f=!1;const Re=_.isCatmullRomCurve3?_.closed:!1;U=_.computeFrenetFrames(h,Re),D=new V,M=new V,w=new V}f||(m=0,u=0,p=0,v=0);const z=l.extractPoints(c);let k=z.shape;const j=z.holes;if(!Fi.isClockWise(k)){k=k.reverse();for(let Re=0,We=j.length;Re<We;Re++){const $e=j[Re];Fi.isClockWise($e)&&(j[Re]=$e.reverse())}}function ee(Re){const $e=10000000000000001e-36;let tt=Re[0];for(let Qe=1;Qe<=Re.length;Qe++){const wt=Qe%Re.length,rt=Re[wt],Oe=rt.x-tt.x,Be=rt.y-tt.y,ke=Oe*Oe+Be*Be,L=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(tt.x),Math.abs(tt.y)),Xe=$e*L*L;if(ke<=Xe){Re.splice(wt,1),Qe--;continue}tt=rt}}ee(k),j.forEach(ee);const F=j.length,re=k;for(let Re=0;Re<F;Re++){const We=j[Re];k=k.concat(We)}function le(Re,We,$e){return We||Lt("ExtrudeGeometry: vec does not exist"),Re.clone().addScaledVector(We,$e)}const J=k.length;function ne(Re,We,$e){let tt,Qe,wt;const rt=Re.x-We.x,Oe=Re.y-We.y,Be=$e.x-Re.x,ke=$e.y-Re.y,L=rt*rt+Oe*Oe,Xe=rt*ke-Oe*Be;if(Math.abs(Xe)>Number.EPSILON){const Ye=Math.sqrt(L),He=Math.sqrt(Be*Be+ke*ke),Le=We.x-Oe/Ye,Je=We.y+rt/Ye,be=$e.x-ke/He,ue=$e.y+Be/He,P=((be-Le)*ke-(ue-Je)*Be)/(rt*ke-Oe*Be);tt=Le+rt*P-Re.x,Qe=Je+Oe*P-Re.y;const S=tt*tt+Qe*Qe;if(S<=2)return new Ue(tt,Qe);wt=Math.sqrt(S/2)}else{let Ye=!1;rt>Number.EPSILON?Be>Number.EPSILON&&(Ye=!0):rt<-Number.EPSILON?Be<-Number.EPSILON&&(Ye=!0):Math.sign(Oe)===Math.sign(ke)&&(Ye=!0),Ye?(tt=-Oe,Qe=rt,wt=Math.sqrt(L)):(tt=rt,Qe=Oe,wt=Math.sqrt(L/2))}return new Ue(tt/wt,Qe/wt)}const ae=[];for(let Re=0,We=re.length,$e=We-1,tt=Re+1;Re<We;Re++,$e++,tt++)$e===We&&($e=0),tt===We&&(tt=0),ae[Re]=ne(re[Re],re[$e],re[tt]);const fe=[];let we,Ze=ae.concat();for(let Re=0,We=F;Re<We;Re++){const $e=j[Re];we=[];for(let tt=0,Qe=$e.length,wt=Qe-1,rt=tt+1;tt<Qe;tt++,wt++,rt++)wt===Qe&&(wt=0),rt===Qe&&(rt=0),we[tt]=ne($e[tt],$e[wt],$e[rt]);fe.push(we),Ze=Ze.concat(we)}let nt;if(m===0)nt=Fi.triangulateShape(re,j);else{const Re=[],We=[];for(let $e=0;$e<m;$e++){const tt=$e/m,Qe=u*Math.cos(tt*Math.PI/2),wt=p*Math.sin(tt*Math.PI/2)+v;for(let rt=0,Oe=re.length;rt<Oe;rt++){const Be=le(re[rt],ae[rt],wt);ut(Be.x,Be.y,-Qe),tt===0&&Re.push(Be)}for(let rt=0,Oe=F;rt<Oe;rt++){const Be=j[rt];we=fe[rt];const ke=[];for(let L=0,Xe=Be.length;L<Xe;L++){const Ye=le(Be[L],we[L],wt);ut(Ye.x,Ye.y,-Qe),tt===0&&ke.push(Ye)}tt===0&&We.push(ke)}}nt=Fi.triangulateShape(Re,We)}const me=nt.length,Ve=p+v;for(let Re=0;Re<J;Re++){const We=f?le(k[Re],Ze[Re],Ve):k[Re];T?(M.copy(U.normals[0]).multiplyScalar(We.x),D.copy(U.binormals[0]).multiplyScalar(We.y),w.copy(C[0]).add(M).add(D),ut(w.x,w.y,w.z)):ut(We.x,We.y,0)}for(let Re=1;Re<=h;Re++)for(let We=0;We<J;We++){const $e=f?le(k[We],Ze[We],Ve):k[We];T?(M.copy(U.normals[Re]).multiplyScalar($e.x),D.copy(U.binormals[Re]).multiplyScalar($e.y),w.copy(C[Re]).add(M).add(D),ut(w.x,w.y,w.z)):ut($e.x,$e.y,d/h*Re)}for(let Re=m-1;Re>=0;Re--){const We=Re/m,$e=u*Math.cos(We*Math.PI/2),tt=p*Math.sin(We*Math.PI/2)+v;for(let Qe=0,wt=re.length;Qe<wt;Qe++){const rt=le(re[Qe],ae[Qe],tt);ut(rt.x,rt.y,d+$e)}for(let Qe=0,wt=j.length;Qe<wt;Qe++){const rt=j[Qe];we=fe[Qe];for(let Oe=0,Be=rt.length;Oe<Be;Oe++){const ke=le(rt[Oe],we[Oe],tt);T?ut(ke.x,ke.y+C[h-1].y,C[h-1].x+$e):ut(ke.x,ke.y,d+$e)}}}et(),lt();function et(){const Re=i.length/3;if(f){let We=0,$e=J*We;for(let tt=0;tt<me;tt++){const Qe=nt[tt];xt(Qe[2]+$e,Qe[1]+$e,Qe[0]+$e)}We=h+m*2,$e=J*We;for(let tt=0;tt<me;tt++){const Qe=nt[tt];xt(Qe[0]+$e,Qe[1]+$e,Qe[2]+$e)}}else{for(let We=0;We<me;We++){const $e=nt[We];xt($e[2],$e[1],$e[0])}for(let We=0;We<me;We++){const $e=nt[We];xt($e[0]+J*h,$e[1]+J*h,$e[2]+J*h)}}n.addGroup(Re,i.length/3-Re,0)}function lt(){const Re=i.length/3;let We=0;Ie(re,We),We+=re.length;for(let $e=0,tt=j.length;$e<tt;$e++){const Qe=j[$e];Ie(Qe,We),We+=Qe.length}n.addGroup(Re,i.length/3-Re,1)}function Ie(Re,We){let $e=Re.length;for(;--$e>=0;){const tt=$e;let Qe=$e-1;Qe<0&&(Qe=Re.length-1);for(let wt=0,rt=h+m*2;wt<rt;wt++){const Oe=J*wt,Be=J*(wt+1),ke=We+tt+Oe,L=We+Qe+Oe,Xe=We+Qe+Be,Ye=We+tt+Be;st(ke,L,Xe,Ye)}}}function ut(Re,We,$e){a.push(Re),a.push(We),a.push($e)}function xt(Re,We,$e){_t(Re),_t(We),_t($e);const tt=i.length/3,Qe=y.generateTopUV(n,i,tt-3,tt-2,tt-1);St(Qe[0]),St(Qe[1]),St(Qe[2])}function st(Re,We,$e,tt){_t(Re),_t(We),_t(tt),_t(We),_t($e),_t(tt);const Qe=i.length/3,wt=y.generateSideWallUV(n,i,Qe-6,Qe-3,Qe-2,Qe-1);St(wt[0]),St(wt[1]),St(wt[3]),St(wt[1]),St(wt[2]),St(wt[3])}function _t(Re){i.push(a[Re*3+0]),i.push(a[Re*3+1]),i.push(a[Re*3+2])}function St(Re){r.push(Re.x),r.push(Re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Wl[i.type]().fromJSON(i)),new jo(n,e.options)}}const $p={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],l=e[n*3],a=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Ue(r,o),new Ue(l,a),new Ue(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],l=e[t*3+1],a=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],v=e[r*3],m=e[r*3+1],_=e[r*3+2];return Math.abs(l-h)<Math.abs(o-c)?[new Ue(o,1-a),new Ue(c,1-d),new Ue(f,1-p),new Ue(v,1-_)]:[new Ue(l,1-a),new Ue(h,1-d),new Ue(u,1-p),new Ue(m,1-_)]}};function Qp(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bc extends jt{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Bt(i,0,Math.PI*2);const r=[],o=[],l=[],a=[],c=[],h=1/t,d=new V,f=new Ue,u=new V,p=new V,v=new V;let m=0,_=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,_=e[y+1].y-e[y].y,u.x=_*1,u.y=-m,u.z=_*0,v.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:v.normalize(),a.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,_=e[y+1].y-e[y].y,u.x=_*1,u.y=-m,u.z=_*0,p.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),a.push(u.x,u.y,u.z),v.copy(p)}for(let y=0;y<=t;y++){const C=n+y*h*i,T=Math.sin(C),U=Math.cos(C);for(let D=0;D<=e.length-1;D++){d.x=e[D].x*T,d.y=e[D].y,d.z=e[D].x*U,o.push(d.x,d.y,d.z),f.x=y/t,f.y=D/(e.length-1),l.push(f.x,f.y);const M=a[3*D+0]*T,w=a[3*D+1],z=a[3*D+0]*U;c.push(M,w,z)}}for(let y=0;y<t;y++)for(let C=0;C<e.length-1;C++){const T=C+y*e.length,U=T,D=T+e.length,M=T+e.length+1,w=T+1;r.push(U,D,w),r.push(M,w,D)}this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2)),this.setAttribute("normal",new Rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.points,e.segments,e.phiStart,e.phiLength)}}class wc extends ca{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wc(e.radius,e.detail)}}class qt extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(i),c=l+1,h=a+1,d=e/l,f=t/a,u=[],p=[],v=[],m=[];for(let _=0;_<h;_++){const y=_*f-o;for(let C=0;C<c;C++){const T=C*d-r;p.push(T,-y,0),v.push(0,0,1),m.push(C/l),m.push(1-_/a)}}for(let _=0;_<a;_++)for(let y=0;y<l;y++){const C=y+c*_,T=y+c*(_+1),U=y+1+c*(_+1),D=y+1+c*_;u.push(C,T,D),u.push(T,U,D)}this.setIndex(u),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends jt{constructor(e=new Hr([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let l=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new Rt(i,3)),this.setAttribute("normal",new Rt(r,3)),this.setAttribute("uv",new Rt(o,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const p=f.holes;Fi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,_=p.length;m<_;m++){const y=p[m];Fi.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=Fi.triangulateShape(u,p);for(let m=0,_=p.length;m<_;m++){const y=p[m];u=u.concat(y)}for(let m=0,_=u.length;m<_;m++){const y=u[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,_=v.length;m<_;m++){const y=v[m],C=y[0]+d,T=y[1]+d,U=y[2]+d;n.push(C,T,U),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jp(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Tc(n,e.curveSegments)}}function jp(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Xt extends jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(o+l,Math.PI);let c=0;const h=[],d=new V,f=new V,u=[],p=[],v=[],m=[];for(let _=0;_<=n;_++){const y=[],C=_/n,T=o+C*l,U=e*Math.cos(T),D=Math.sqrt(e*e-U*U);let M=0;_===0&&o===0?M=.5/t:_===n&&a===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const z=w/t,k=i+z*r;d.x=-D*Math.cos(k),d.y=U,d.z=D*Math.sin(k),p.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(z+M,1-C),y.push(c++)}h.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const C=h[_][y+1],T=h[_][y],U=h[_+1][y],D=h[_+1][y+1];(_!==0||o>0)&&u.push(C,T,D),(_!==n-1||a<Math.PI)&&u.push(T,U,D)}this.setIndex(u),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pn extends jt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],h=[],d=[],f=new V,u=new V,p=new V;for(let v=0;v<=n;v++){const m=o+v/n*l;for(let _=0;_<=i;_++){const y=_/i*r;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(_/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const _=(i+1)*v+m-1,y=(i+1)*(v-1)+m-1,C=(i+1)*(v-1)+m,T=(i+1)*v+m;a.push(_,y,T),a.push(y,C,T)}this.setIndex(a),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Xs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Oh(i))i.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Oh(i[0])){const r=[];for(let o=0,l=i.length;o<l;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Fn(s){const e={};for(let t=0;t<s.length;t++){const n=Xs(s[t]);for(const i in n)e[i]=n[i]}return e}function Oh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function e0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const qr={clone:Xs,merge:Fn};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new tn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vf extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qs extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends qs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Go extends Zn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class i0 extends Zn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class s0 extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r0 extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ki(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function o0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Fh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let a=0;a!==e;++a)i[o++]=s[l+a]}return i}function a0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class l0 extends Zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,l=i[r],a=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,l=2*t-n;break;case Kc:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Yc:o=e,a=2*n-t;break;case Kc:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,_=-f*m+2*f*v-f*p,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,C=(-1-u)*m+(1.5+u)*v+.5*p,T=u*m-u*v;for(let U=0;U!==l;++U)r[U]=_*o[h+U]+y*o[c+U]+C*o[a+U]+T*o[d+U];return r}}class c0 extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==l;++f)r[f]=o[c+f]*d+o[a+f]*h;return r}}class h0 extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class u0 extends Zs{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),v=1-p;for(let m=0;m!==l;++m)r[m]=o[c+m]*v+o[a+m]*p;return r}const f=l*2,u=e-1;for(let p=0;p!==l;++p){const v=o[c+p],m=o[a+p],_=u*f+p*2,y=d[_],C=d[_+1],T=e*f+p*2,U=h[T],D=h[T+1],M=d0(n,t,y,U,i);r[p]=Mf(M,v,C,D,m)}return r}}function Mf(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function f0(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function d0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const l=Mf(r,e,t,n,i)-s;if(Math.abs(l)<1e-10)break;const a=f0(r,e,t,n,i);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}class di{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),yr(e.settings)&&(n.settings={inTangents:Ki(e.settings.inTangents,Array),outTangents:Ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new h0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new c0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new u0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return bt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;yr(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;yr(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const a=n[l];if(typeof a=="number"&&isNaN(a)){Lt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){Lt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(i!==void 0&&Ad(i))for(let l=0,a=i.length;l!==a;++l){const c=i[l];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ma,r=e.length-1;let o=1;for(let l=1;l<r;++l){let a=!1;const c=e[l],h=e[l+1];if(c!==h&&(l!==1||c!==e[0]))if(i)a=!0;else{const d=l*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[f+p]||v!==t[u+p]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];const d=l*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[l+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,yr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Bh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function zh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Ur;class Js extends di{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Ir;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class yf extends di{constructor(e,t,n,i){super(e,t,n,i)}}yf.prototype.ValueTypeName="color";class Yr extends di{constructor(e,t,n,i){super(e,t,n,i)}}Yr.prototype.ValueTypeName="number";class p0 extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(i-t);let c=e*l;for(let h=c+l;c!==h;c+=4)Vn.slerpFlat(r,0,o,c-l,o,c,a);return r}}class Kr extends di{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new p0(this.times,this.values,this.getValueSize(),e)}}Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends di{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ir;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends di{constructor(e,t,n,i){super(e,t,n,i)}}ea.prototype.ValueTypeName="vector";class m0{constructor(e="",t=-1,n=[],i=gd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(_0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let l=0;l<r;l++){let a=[],c=[];a.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);const h=o0(a);a=Fh(a,1,h),c=Fh(c,1,h),!i&&a[0]===0&&(a.push(r),c.push(c[0])),o.push(new Yr(".morphTargetInfluences["+t[l].name+"]",a,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,a=e.length;l<a;l++){const c=e[l],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function g0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return yf;case"quaternion":return Kr;case"bool":case"boolean":return Js;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=g0(s.type);if(s.times===void 0){const n=[],i=[];a0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),yr(s.settings)&&(t.settings={inTangents:Ki(s.settings.inTangents,Float32Array),outTangents:Ki(s.settings.outTangents,Float32Array)}),t}const Bi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(kh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!kh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function kh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class x0{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const v0=new x0;class Qs{constructor(e){this.manager=e!==void 0?e:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class M0 extends Error{constructor(e,t){super(e),this.response=t}}class Sf extends Qs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:i});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,a=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&bt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Li[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let v=0;const m=new ReadableStream({start(_){y();function y(){d.read().then(({done:C,value:T})=>{if(C)_.close();else{v+=T.byteLength;const U=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:u});for(let D=0,M=h.length;D<M;D++){const w=h[D];w.onProgress&&w.onProgress(U)}_.enqueue(T),y()}},C=>{_.error(C)})}}});return new Response(m)}else throw new M0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return c.json();default:if(l==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Bi.add(`file:${e}`,c);const h=Li[e];delete Li[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=Li[e];if(h===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ps=new WeakMap;class y0 extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ps.get(o);d===void 0&&(d=[],Ps.set(o,d)),d.push({onLoad:t,onError:i})}return o}const l=Br("img");function a(){h(),t&&t(this);const d=Ps.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Ps.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Bi.remove(`image:${e}`);const f=Ps.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,l),r.manager.itemStart(e),l.fetchPriority=this.priority,l.src=e,l}}class S0 extends Qs{constructor(e){super(e)}load(e,t,n,i){const r=new yn,o=new y0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ha extends rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class b0 extends ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Za=new Ct,Gh=new V,Hh=new V;class Ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Za,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,l=i?i.w/r.y:1,a=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ao=new V,Ro=new Vn,mi=new V;class bf extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ao,Ro,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ao,Ro,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new V,Vh=new Ue,Wh=new Ue;class Hn extends bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Vh,Wh),t.subVectors(Wh,Vh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class w0 extends Ec{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class T0 extends ha{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new w0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class E0 extends Ec{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ji extends ha{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new E0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ua extends bf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class A0 extends Ec{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wf extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new A0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Cr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ja=new WeakMap;class R0 extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&bt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&bt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Ja.has(o)===!0?(i&&i(Ja.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const l={};l.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",l.headers=this.requestHeader,l.priority=this.priority,l.cache=this.cache,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const a=fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ja.set(a,c),Bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=-90,Ds=1;class Yl extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(Ls,Ds,e,t);i.layers=this.layers,this.add(i);const r=new Hn(Ls,Ds,e,t);r.layers=this.layers,this.add(r);const o=new Hn(Ls,Ds,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Ls,Ds,e,t);l.layers=this.layers,this.add(l);const a=new Hn(Ls,Ds,e,t);a.layers=this.layers,this.add(a);const c=new Hn(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,a]=t;for(const c of t)this.remove(c);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,a,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class C0 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class P0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=L0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function L0(){this._document.hidden===!1&&this.reset()}const Ac="\\[\\]\\.:\\/",D0=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",N0="[^"+Ac.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",Rc),U0=/(WCOD+)?/.source.replace("WCOD",N0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),B0=new RegExp("^"+I0+U0+O0+F0+"$"),z0=["material","materials","bones","map"];class k0{constructor(e,t,n){const i=n||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class en{constructor(e,t,n){this.path=t,this.parsedPath=n||en.parseTrackName(t),this.node=en.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new en.Composite(e,t,n):new en(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(e){const t=B0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const a=n(l.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=en.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}en.Composite=k0;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G0 extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qh(s,e,t,n){const i=H0(n);switch(t){case Gu:return s*e;case oa:return s*e/i.components*i.byteLength;case hc:return s*e/i.components*i.byteLength;case hs:return s*e*2/i.components*i.byteLength;case uc:return s*e*2/i.components*i.byteLength;case Hu:return s*e*3/i.components*i.byteLength;case li:return s*e*4/i.components*i.byteLength;case fc:return s*e*4/i.components*i.byteLength;case Fo:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fl:case pl:return Math.max(s,16)*Math.max(e,8)/4;case ul:case dl:return Math.max(s,8)*Math.max(e,8)/2;case ml:case gl:case xl:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _l:case Xo:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Ol:case Fl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bl:case zl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qo:case kl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H0(s){switch(s){case Yn:case Fu:return{byteLength:1,components:1};case Nr:case Bu:case Nn:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case hi:case ac:case ti:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Tf(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function V0(s){const e=new WeakMap;function t(l,a){const c=l.array,h=l.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(a,f),s.bufferData(a,c,h),l.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,a,c){const h=a.array,d=a.updateRanges;if(s.bindBuffer(c,l),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],v=d[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const v=d[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(s.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:i,remove:r,update:o}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
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
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,Hm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
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
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform float backgroundBlurriness;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,f_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,__=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:K0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:$0,batching_pars_vertex:Q0,batching_vertex:j0,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:fm,common:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:Mm,envmap_fragment:ym,envmap_common_pars_fragment:Sm,envmap_pars_fragment:bm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Um,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Im,lights_toon_fragment:Om,lights_toon_pars_fragment:Fm,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:km,lights_physical_pars_fragment:Gm,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:yg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Dg,specularmap_fragment:Ng,specularmap_pars_fragment:Ig,tonemapping_fragment:Ug,tonemapping_pars_fragment:Og,transmission_fragment:Fg,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Gg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Kg,depth_vert:Zg,depth_frag:Jg,distance_vert:$g,distance_frag:Qg,equirect_vert:jg,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:M_,sprite_vert:y_,sprite_frag:S_},ht={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},xi={basic:{uniforms:Fn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new gt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fn([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fn([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fn([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Fn([ht.common,ht.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Fn([ht.lights,ht.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};xi.physical={uniforms:Fn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Co={r:0,b:0,g:0},b_=new Ct,Ef=new Nt;Ef.set(-1,0,0,0,1,0,0,0,1);function w_(s,e,t,n,i,r){const o=new gt(0);let l=i===!0?0:1,a,c,h=null,d=0,f=null;function u(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){const T=y.backgroundBlurriness>0;C=e.get(C,T)}return C}function p(y){let C=!1;const T=u(y);T===null?m(o,l):T&&T.isColor&&(m(T,1),C=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,C){const T=u(C);T&&T.isCubeTexture?(c===void 0&&(c=new Ut(new Ae(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Xs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,D,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(C.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=Wt.getTransfer(T.colorSpace)!==Qt,(h!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(a===void 0&&(a=new Ut(new qt(2,2),new zn({name:"BackgroundMaterial",uniforms:Xs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=T,a.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,a.material.toneMapped=Wt.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),a.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(a.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),a.layers.enableAll(),y.unshift(a,a.geometry,a.material,0,0,null))}function m(y,C){y.getRGB(Co,xf(s)),t.buffers.color.setClear(Co.r,Co.g,Co.b,C,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,C=1){o.set(y),l=C,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:p,addToRenderList:v,dispose:_}}function T_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function l(j,oe,ee,F,re){let le=!1;const J=d(j,F,ee,oe);r!==J&&(r=J,c(r.object)),le=u(j,F,ee,re),le&&p(j,F,ee,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,T(j,oe,ee,F),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function a(){return s.createVertexArray()}function c(j){return s.bindVertexArray(j)}function h(j){return s.deleteVertexArray(j)}function d(j,oe,ee,F){const re=F.wireframe===!0;let le=n[oe.id];le===void 0&&(le={},n[oe.id]=le);const J=j.isInstancedMesh===!0?j.id:0;let ne=le[J];ne===void 0&&(ne={},le[J]=ne);let ae=ne[ee.id];ae===void 0&&(ae={},ne[ee.id]=ae);let fe=ae[re];return fe===void 0&&(fe=f(a()),ae[re]=fe),fe}function f(j){const oe=[],ee=[],F=[];for(let re=0;re<t;re++)oe[re]=0,ee[re]=0,F[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:ee,attributeDivisors:F,object:j,attributes:{},index:null}}function u(j,oe,ee,F){const re=r.attributes,le=oe.attributes;let J=0;const ne=ee.getAttributes();for(const ae in ne)if(ne[ae].location>=0){const we=re[ae];let Ze=le[ae];if(Ze===void 0&&(ae==="instanceMatrix"&&j.instanceMatrix&&(Ze=j.instanceMatrix),ae==="instanceColor"&&j.instanceColor&&(Ze=j.instanceColor)),we===void 0||we.attribute!==Ze||Ze&&we.data!==Ze.data)return!0;J++}return r.attributesNum!==J||r.index!==F}function p(j,oe,ee,F){const re={},le=oe.attributes;let J=0;const ne=ee.getAttributes();for(const ae in ne)if(ne[ae].location>=0){let we=le[ae];we===void 0&&(ae==="instanceMatrix"&&j.instanceMatrix&&(we=j.instanceMatrix),ae==="instanceColor"&&j.instanceColor&&(we=j.instanceColor));const Ze={};Ze.attribute=we,we&&we.data&&(Ze.data=we.data),re[ae]=Ze,J++}r.attributes=re,r.attributesNum=J,r.index=F}function v(){const j=r.newAttributes;for(let oe=0,ee=j.length;oe<ee;oe++)j[oe]=0}function m(j){_(j,0)}function _(j,oe){const ee=r.newAttributes,F=r.enabledAttributes,re=r.attributeDivisors;ee[j]=1,F[j]===0&&(s.enableVertexAttribArray(j),F[j]=1),re[j]!==oe&&(s.vertexAttribDivisor(j,oe),re[j]=oe)}function y(){const j=r.newAttributes,oe=r.enabledAttributes;for(let ee=0,F=oe.length;ee<F;ee++)oe[ee]!==j[ee]&&(s.disableVertexAttribArray(ee),oe[ee]=0)}function C(j,oe,ee,F,re,le,J){J===!0?s.vertexAttribIPointer(j,oe,ee,re,le):s.vertexAttribPointer(j,oe,ee,F,re,le)}function T(j,oe,ee,F){v();const re=F.attributes,le=ee.getAttributes(),J=oe.defaultAttributeValues;for(const ne in le){const ae=le[ne];if(ae.location>=0){let fe=re[ne];if(fe===void 0&&(ne==="instanceMatrix"&&j.instanceMatrix&&(fe=j.instanceMatrix),ne==="instanceColor"&&j.instanceColor&&(fe=j.instanceColor)),fe!==void 0){const we=fe.normalized,Ze=fe.itemSize,nt=e.get(fe);if(nt===void 0)continue;const me=nt.buffer,Ve=nt.type,et=nt.bytesPerElement,lt=Ve===s.INT||Ve===s.UNSIGNED_INT||fe.gpuType===ac;if(fe.isInterleavedBufferAttribute){const Ie=fe.data,ut=Ie.isInterleavedBuffer===!0?Ie.stride:Ie.itemSize,xt=fe.offset;if(Ie.isInstancedInterleavedBuffer||Ie.isInstancedBufferAttribute){for(let st=0;st<ae.locationSize;st++)_(ae.location+st,Ie.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let st=0;st<ae.locationSize;st++)m(ae.location+st);s.bindBuffer(s.ARRAY_BUFFER,me);for(let st=0;st<ae.locationSize;st++)C(ae.location+st,Ze/ae.locationSize,Ve,we,ut*et,(xt+Ze/ae.locationSize*st)*et,lt)}else{if(fe.isInstancedBufferAttribute){for(let Ie=0;Ie<ae.locationSize;Ie++)_(ae.location+Ie,fe.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ie=0;Ie<ae.locationSize;Ie++)m(ae.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Ie=0;Ie<ae.locationSize;Ie++)C(ae.location+Ie,Ze/ae.locationSize,Ve,we,Ze*et,Ze/ae.locationSize*Ie*et,lt)}}else if(J!==void 0){const we=J[ne];if(we!==void 0)switch(we.length){case 2:s.vertexAttrib2fv(ae.location,we);break;case 3:s.vertexAttrib3fv(ae.location,we);break;case 4:s.vertexAttrib4fv(ae.location,we);break;default:s.vertexAttrib1fv(ae.location,we)}}}}y()}function U(){z();for(const j in n){const oe=n[j];for(const ee in oe){const F=oe[ee];for(const re in F){const le=F[re];for(const J in le)h(le[J].object),delete le[J];delete F[re]}}delete n[j]}}function D(j){if(n[j.id]===void 0)return;const oe=n[j.id];for(const ee in oe){const F=oe[ee];for(const re in F){const le=F[re];for(const J in le)h(le[J].object),delete le[J];delete F[re]}}delete n[j.id]}function M(j){for(const oe in n){const ee=n[oe];for(const F in ee){const re=ee[F];if(re[j.id]===void 0)continue;const le=re[j.id];for(const J in le)h(le[J].object),delete le[J];delete re[j.id]}}}function w(j){for(const oe in n){const ee=n[oe],F=j.isInstancedMesh===!0?j.id:0,re=ee[F];if(re!==void 0){for(const le in re){const J=re[le];for(const ne in J)h(J[ne].object),delete J[ne];delete re[le]}delete ee[F],Object.keys(ee).length===0&&delete n[oe]}}}function z(){k(),o=!0,r!==i&&(r=i,c(r.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:z,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function E_(s,e,t){let n;function i(a){n=a}function r(a,c){s.drawArrays(n,a,c),t.update(c,n,1)}function o(a,c,h){h!==0&&(s.drawArraysInstanced(n,a,c,h),t.update(c,n,h))}function l(a,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function A_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==li&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(M){const w=M===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Yn&&M!==ti&&!w&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function a(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:T,maxSamples:U,samples:D}}function R_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ii,l=new Nt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,_=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,C=y*4;let T=_.clippingState||null;a.value=T,T=h(p,f,C,u);for(let U=0;U!==C;++U)T[U]=t[U];_.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=a.value,p!==!0||m===null){const _=u+v*4,y=f.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<_)&&(m=new Float32Array(_));for(let C=0,T=u;C!==v;++C,T+=4)o.copy(d[C]).applyMatrix4(y,l),o.normal.toArray(m,T),m[T+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}class Cc extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new af(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ae(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:ls});r.uniforms.tEquirect.value=t;const o=new Ut(i,r),l=t.minFilter;return t.minFilter===Mi&&(t.minFilter=En),new Yl(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Yh=256,C_=3,P_=20,Af=256,Rf=16,L_=3,D_=new V,N_=new gt;class ta{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yl(1,10,null),this._boxMesh=new Ut(new Ae(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:l=D_}=r,a=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=a.autoClear,f=a.autoClearColor,u=a.autoClearDepth,p=a.autoClearStencil,v=e.background;a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,v===null&&(e.background=a.getClearColor(N_));const m=new Yl(n,i,h);return m.position.copy(l),m.update(a,e),a.autoClear=d,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Yh,Zu(e))}_fromTexture(e,t){e.mapping===Gs||e.mapping===Dr?this._setSize(e.image.length===0?Yh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Kh(e,!1,!1),n=Math.log2(e)-C_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gs||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=I_(),this._integrationMaterial=U_());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Rf);for(let o=0;o<=n;o++){const l=ta.lodToRoughness(o,n);if(o>n-L_)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const a=l>0?Math.log2(t)+.5*Math.log2(6/(Af*Math.pow(l,4)))+.5:0;i.roughness.value=l,i.lodBias.value=a,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=O_());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Kh(s,e,t){return new Cc(s,{minFilter:Mi,generateMipmaps:e,type:Nn,colorSpace:Jn,depthBuffer:t})}function Jr(s,e,t){return new zn({name:s,uniforms:e,vertexShader:kt.cube_vert,fragmentShader:t,side:Dn,blending:ls,depthTest:!1,depthWrite:!1})}function I_(){return Jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Af}u

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
	`)}function U_(){return Jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rf}},`

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
	`)}function O_(){return Jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${P_}
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
	`)}function Zh(){return Jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jh(){return Jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function F_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===xa||u===va)if(e.has(f)){const p=e.get(f).texture;return l(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const v=new Cc(p.height);return v.fromEquirectangularTexture(s,f),e.set(f,v),f.addEventListener("dispose",c),l(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===xa||u===va,v=u===Gs||u===Dr;if(p||v){let m=t.get(f);const _=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new ta(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return p&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new ta(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function l(f,u){return u===xa?f.mapping=Gs:u===va&&(f.mapping=Dr),f}function a(f){let u=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function B_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fs("WebGLRenderer: "+n+" extension not supported."),i}}}function z_(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function l(p){a(p.target)}function a(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",l),delete i[p.id],o.unregister(p);const v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",l),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){const v=p.attributes;for(const m in v)e.update(v[m],s.ARRAY_BUFFER)}function d(p){const v=p.index,m=p.attributes.position;let _=0;if(m===void 0)return;const y=v!==null?v.array.length:m.array.length/3-1,C=m.count>=65535?tf:ef,T=new C(Math.ceil(y/3)*6,1),U=T.array;if(v!==null){const M=v.array;_=v.version;for(let w=0,z=0;w<y;w+=3){const k=M[w+0],j=M[w+1],oe=M[w+2];U[z++]=k,U[z++]=j,U[z++]=j,U[z++]=oe,U[z++]=oe,U[z++]=k}}else{_=m.version;for(let M=0,w=0;M<y;M+=3){const z=M+0,k=M+1,j=M+2;U[w++]=z,U[w++]=k,U[w++]=k,U[w++]=j,U[w++]=j,U[w++]=z}}T.version=_;const D=r.get(p);D&&e.remove(D),r.set(p,T)}function f(p){const v=r.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const v=i[p].deref();v!==void 0&&a(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function k_(s,e,t){let n;function i(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function a(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];t.update(v,n,1)}this.setMode=i,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function G_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:Lt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H_(s,e,t){const n=new WeakMap,i=new tn;function r(o,l,a){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(l);if(f===void 0||f.count!==d){let z=function(){M.dispose(),n.delete(l),l.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();const u=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let C=0;u===!0&&(C=1),p===!0&&(C=2),v===!0&&(C=3);let T=l.attributes.position.count*C,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*U*4*d),M=new $u(D,T,U,d);M.type=ti,M.needsUpdate=!0;const w=C*4;for(let k=0;k<d;k++){const j=m[k],oe=_[k],ee=y[k],F=T*U*4*k;for(let re=0;re<j.count;re++){const le=re*w;u===!0&&(i.fromBufferAttribute(j,re),D[F+le+0]=i.x,D[F+le+1]=i.y,D[F+le+2]=i.z,D[F+le+3]=0),p===!0&&(i.fromBufferAttribute(oe,re),D[F+le+4]=i.x,D[F+le+5]=i.y,D[F+le+6]=i.z,D[F+le+7]=0),v===!0&&(i.fromBufferAttribute(ee,re),D[F+le+8]=i.x,D[F+le+9]=i.y,D[F+le+10]=i.z,D[F+le+11]=ee.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new Ue(T,U)},n.set(l,f),l.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const p=l.morphTargetsRelative?1:1-u;a.getUniforms().setValue(s,"morphTargetBaseInfluence",p),a.getUniforms().setValue(s,"morphTargetInfluences",c)}a.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),a.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function V_(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function l(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const W_={[tc]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[ra]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[oc]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function X_(s,e,t,n,i,r){const o=new In(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,a=null,c=null;const h=new jt;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const d=new vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(h,d),u=new ua(-1,1,1,-1,0,1);let p=null,v=null,m=!1,_,y=null,C=[],T=!1;this.setSize=function(U,D){o.setSize(U,D),l!==null&&l.setSize(U,D),a!==null&&a.setSize(U,D);for(let M=0;M<C.length;M++){const w=C[M];w.setSize&&w.setSize(U,D)}},this.setEffects=function(U){C=U,T=C.length>0&&C[0].isRenderPass===!0;const D=o.width,M=o.height;C.length>0&&l===null&&(l=new In(D,M,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),a=new In(D,M,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));const w=i===!0&&C.some(z=>z.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new us(D,M),r===!0&&(c.format=Zi,c.type=Hs)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let z=0;z<C.length;z++){const k=C[z];k.setSize&&k.setSize(D,M),w&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(U,D){if(m||U.toneMapping===zi&&C.length===0)return!1;if(y=D,D!==null){const M=D.width,w=D.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return T===!1&&U.setRenderTarget(o),_=U.toneMapping,U.toneMapping=zi,!0},this.hasRenderPass=function(){return T},this.end=function(U,D){U.toneMapping=_,m=!0;let M=o,w=l;for(let z=0;z<C.length;z++){const k=C[z];k.enabled!==!1&&(k.render(U,w,M,D),k.needsSwap!==!1&&(M=w,w=w===l?a:l))}if(p!==U.outputColorSpace||v!==U.toneMapping){p=U.outputColorSpace,v=U.toneMapping,d.defines={},Wt.getTransfer(p)===Qt&&(d.defines.SRGB_TRANSFER="");const z=W_[v];z&&(d.defines[z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,U.setRenderTarget(y),U.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),h.dispose(),d.dispose()}}const Cf=new yn,Pf=new us(1,1),Lf=new lf(1),Df=new $u,Nf=new $d,If=new af,$h=[],Qh=[],jh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function js(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$h[i];if(r===void 0&&(r=new Float32Array(i),$h[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fa(s,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),bn(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),bn(t,e)}}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),bn(t,e)}}function J_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),bn(t,n)}}function $_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),bn(t,n)}}function Q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;jh.set(n),s.uniformMatrix4fv(this.addr,!1,jh),bn(t,n)}}function j_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),bn(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),bn(t,e)}}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),bn(t,e)}}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),bn(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),bn(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),bn(t,e)}}function da(s){return s.version===0&&(s.compareFunction=qu,s.needsUpdate=!0),s}function ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=da(Pf):r=Cf,t.setTexture2D(e||r,i)}function lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nf,i)}function cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=da(Lf):r=If,t.setTextureCube(e||r,i)}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Df,i)}function ux(s){switch(s){case 5126:return q_;case 35664:return Y_;case 35665:return K_;case 35666:return Z_;case 35674:return J_;case 35675:return $_;case 35676:return Q_;case 5124:case 35670:return j_;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function fx(s,e){s.uniform1fv(this.addr,e)}function dx(s,e){const t=js(e,this.size,2);s.uniform2fv(this.addr,t)}function px(s,e){const t=js(e,this.size,3);s.uniform3fv(this.addr,t)}function mx(s,e){const t=js(e,this.size,4);s.uniform4fv(this.addr,t)}function gx(s,e){const t=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _x(s,e){const t=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xx(s,e){const t=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vx(s,e){s.uniform1iv(this.addr,e)}function Mx(s,e){s.uniform2iv(this.addr,e)}function yx(s,e){s.uniform3iv(this.addr,e)}function Sx(s,e){s.uniform4iv(this.addr,e)}function bx(s,e){s.uniform1uiv(this.addr,e)}function wx(s,e){s.uniform2uiv(this.addr,e)}function Tx(s,e){s.uniform3uiv(this.addr,e)}function Ex(s,e){s.uniform4uiv(this.addr,e)}function Ax(s,e,t){const n=this.cache,i=e.length,r=fa(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=da(Pf):o=Cf;for(let l=0;l!==i;++l)t.setTexture2D(e[l]||o,r[l])}function Rx(s,e,t){const n=this.cache,i=e.length,r=fa(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nf,r[o])}function Cx(s,e,t){const n=this.cache,i=e.length,r=fa(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=da(Lf):o=If;for(let l=0;l!==i;++l)t.setTextureCube(e[l]||o,r[l])}function Px(s,e,t){const n=this.cache,i=e.length,r=fa(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Df,r[o])}function Lx(s){switch(s){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return yx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function Ux(s,e,t){const n=s.name,i=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),o=$a.lastIndex;let l=r[1];const a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===i){nu(t,c===void 0?new Dx(l,s,e):new Nx(l,s,e));break}else{let d=t.map[l];d===void 0&&(d=new Ix(l),nu(t,d)),t=d}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);Ux(l,a,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function iu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ox=37297;let Fx=0;function Bx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const su=new Nt;function zx(s){Wt._getMatrix(su,Wt.workingColorSpace,s);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Yo:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ru(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bx(s.getShaderSource(e),l)}else return r}function kx(s,e){const t=zx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Gx={[tc]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[ra]:"ACESFilmic",[rc]:"AgX",[oc]:"Neutral",[sc]:"Custom"};function Hx(s,e){const t=Gx[e];return t===void 0?(bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new V;function Vx(){Wt.getLuminanceCoefficients(Po);const s=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Xx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function Sr(s){return s!==""}function ou(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(s){return s.replace(Yx,Kx)}function Kx(s,e){const t=kt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Kl(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(s){return s.replace(Zx,Jx)}function Jx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const $x={[br]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function Qx(s){return $x[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jx={[Dr]:"ENVMAP_MODE_REFRACTION"};function ev(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tv={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function nv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tv[s.combine]||"ENVMAP_BLENDING_NONE"}function iv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=Qx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ev(t),d=nv(t),f=Wx(t),u=Xx(r),p=i.createProgram();let v,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Sr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(v=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?kt.tonemapping_pars_fragment:"",t.toneMapping!==zi?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Kl(o),o=ou(o,t),o=au(o,t),l=Kl(l),l=ou(l,t),l=au(l,t),o=lu(o),l=lu(l),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+v+o,C=_+m+l,T=iu(i,i.VERTEX_SHADER,y),U=iu(i,i.FRAGMENT_SHADER,C);i.attachShader(p,T),i.attachShader(p,U),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(k){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(p)||"",oe=i.getShaderInfoLog(T)||"",ee=i.getShaderInfoLog(U)||"",F=j.trim(),re=oe.trim(),le=ee.trim();let J=!0,ne=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,U);else{const ae=ru(i,T,"vertex"),fe=ru(i,U,"fragment");Lt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+ae+`
`+fe)}else F!==""?bt("WebGLProgram: Program Info Log:",F):(re===""||le==="")&&(ne=!1);ne&&(k.diagnostics={runnable:J,programLog:F,vertexShader:{log:re,prefix:v},fragmentShader:{log:le,prefix:m}})}i.deleteShader(T),i.deleteShader(U),M=new Ho(i,p),w=qx(i,p)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(p,Ox)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=U,this}let sv=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}}function av(s){return s===hs||s===Xo||s===qo}function lv(s,e,t,n,i,r){const o=new Qu,l=new rv,a=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return a.add(M),M===0?"uv":`uv${M}`}function p(M,w,z,k,j,oe){const ee=k.fog,F=j.geometry,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,le=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,J=e.get(M.envMap||re,le),ne=f[M.type];let ae=n.precision;M.precision!==null&&(ae=n.getMaxPrecision(M.precision),ae!==M.precision&&bt("WebGLProgram.getParameters:",M.precision,"not supported, using",ae,"instead."));const fe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,we=fe!==void 0?fe.length:0;let Ze=0;F.morphAttributes.position!==void 0&&(Ze=1),F.morphAttributes.normal!==void 0&&(Ze=2),F.morphAttributes.color!==void 0&&(Ze=3);let nt,me,Ve,et;if(ne){const O=xi[ne];nt=O.vertexShader,me=O.fragmentShader}else{nt=M.vertexShader,me=M.fragmentShader;const O=l.getVertexShaderStage(M),se=l.getFragmentShaderStage(M);l.update(M,O,se),Ve=O.id,et=se.id}const lt=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),ut=j.isInstancedMesh===!0,xt=j.isBatchedMesh===!0,st=!!M.map,_t=!!M.matcap,St=!!J,Re=St&&J.isPMREMTexture===!0,We=!!M.aoMap,$e=!!M.lightMap,tt=!!M.bumpMap&&M.wireframe===!1,Qe=!!M.normalMap,wt=!!M.displacementMap,rt=!!M.emissiveMap,Oe=!!M.metalnessMap,Be=!!M.roughnessMap,ke=M.anisotropy>0,L=M.clearcoat>0,Xe=M.diffuseRoughness>0,Ye=M.dispersion>0,He=M.retroreflectivity>0,Le=M.iridescence>0,Je=M.sheen>0,be=M.transmission>0,ue=ke&&!!M.anisotropyMap,P=L&&!!M.clearcoatMap,S=L&&!!M.clearcoatNormalMap,q=L&&!!M.clearcoatRoughnessMap,ye=Xe&&!!M.diffuseRoughnessMap,pe=Le&&!!M.iridescenceMap,De=Le&&!!M.iridescenceThicknessMap,Fe=Je&&!!M.sheenColorMap,Se=Je&&!!M.sheenRoughnessMap,Me=!!M.specularMap,Ce=!!M.specularColorMap,Y=!!M.specularIntensityMap,ve=be&&!!M.transmissionMap,_e=be&&!!M.thicknessMap,Ge=!!M.gradientMap,te=!!M.alphaMap,$=M.alphaTest>0,de=!!M.alphaHash,Ee=!!M.extensions;let x=zi;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(x=s.toneMapping);const G=Re?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,K={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:me,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:et,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ae,batching:xt,batchingColor:xt&&j._colorsTexture!==null,instancing:ut,instancingColor:ut&&j.instanceColor!==null,instancingMorph:ut&&j.morphTexture!==null,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:st,matcap:_t,envMap:St,envMapMode:St&&J.mapping,envMapPMREM:Re,envMapMaxLod:Re?G.length-1:null,envMapSize:Re?G[0].width:null,aoMap:We,lightMap:$e,bumpMap:tt,normalMap:Qe,displacementMap:wt,emissiveMap:rt,normalMapObjectSpace:Qe&&M.normalMapType===vd,normalMapTangentSpace:Qe&&M.normalMapType===Or,packedNormalMap:Qe&&M.normalMapType===Or&&av(M.normalMap.format),metalnessMap:Oe,roughnessMap:Be,anisotropy:ke,anisotropyMap:ue,clearcoat:L,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:q,diffuseRoughness:Xe,diffuseRoughnessMap:ye,dispersion:Ye,retroreflection:He,iridescence:Le,iridescenceMap:pe,iridescenceThicknessMap:De,sheen:Je,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:Me,specularColorMap:Ce,specularIntensityMap:Y,transmission:be,transmissionMap:ve,thicknessMap:_e,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===Os&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:$,alphaHash:de,combine:M.combine,mapUv:st&&u(M.map.channel),aoMapUv:We&&u(M.aoMap.channel),lightMapUv:$e&&u(M.lightMap.channel),bumpMapUv:tt&&u(M.bumpMap.channel),normalMapUv:Qe&&u(M.normalMap.channel),displacementMapUv:wt&&u(M.displacementMap.channel),emissiveMapUv:rt&&u(M.emissiveMap.channel),metalnessMapUv:Oe&&u(M.metalnessMap.channel),roughnessMapUv:Be&&u(M.roughnessMap.channel),anisotropyMapUv:ue&&u(M.anisotropyMap.channel),clearcoatMapUv:P&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&u(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&u(M.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&u(M.sheenRoughnessMap.channel),specularMapUv:Me&&u(M.specularMap.channel),specularColorMapUv:Ce&&u(M.specularColorMap.channel),specularIntensityMapUv:Y&&u(M.specularIntensityMap.channel),transmissionMapUv:ve&&u(M.transmissionMap.channel),thicknessMapUv:_e&&u(M.thicknessMap.channel),alphaMapUv:te&&u(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Qe||ke),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!F.attributes.uv&&(st||te),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&Qe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ze,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:oe.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:x,decodeVideoTexture:st&&M.map.isVideoTexture===!0&&Wt.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return K.vertexUv1s=a.has(1),K.vertexUv2s=a.has(2),K.vertexUv3s=a.has(3),a.clear(),K}function v(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)w.push(z),w.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(m(w,M),_(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapPMREM),M.push(w.envMapMaxLod),M.push(w.envMapSize),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.diffuseRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.numLightProbeGrids),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){const w=f[M.type];let z;if(w){const k=xi[w];z=qr.clone(k.uniforms)}else z=M.uniforms;return z}function C(M,w){let z=h.get(w);return z!==void 0?++z.usedTimes:(z=new iv(s,w,M,i),c.push(z),h.set(w,z)),z}function T(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function U(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:U,programs:c,dispose:D}}function cv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function i(o,l,a){s.get(o)[l]=a}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function hu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function l(f,u,p,v,m,_){let y=s[e];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:_},s[e]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=_),e++,y}function a(f,u,p,v,m,_,y){y.reversedDepth===!0&&(m=-m);const C=l(f,u,p,v,m,_);p.transmission>0?n.push(C):p.transparent===!0?i.push(C):t.push(C)}function c(f,u,p,v,m,_){const y=l(f,u,p,v,m,_);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function h(f,u){t.length>1&&t.sort(f||hv),n.length>1&&n.sort(u||hu),i.length>1&&i.sort(u||hu)}function d(){for(let f=e,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:h}}function uv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new uu,s.set(n,[o])):i>=r.length?(o=new uu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function fv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new gt};break;case"SpotLight":t={position:new V,direction:new V,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function dv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pv=0;function mv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gv(s){const e=new fv,t=dv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,r=new Ct,o=new Ct;function l(c){let h=0,d=0,f=0;for(let oe=0;oe<9;oe++)n.probe[oe].set(0,0,0);let u=0,p=0,v=0,m=0,_=0,y=0,C=0,T=0,U=0,D=0,M=0,w=0,z=0,k=0;c.sort(mv);for(let oe=0,ee=c.length;oe<ee;oe++){const F=c[oe],re=F.color,le=F.intensity,J=F.distance;let ne=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===hs?ne=F.shadow.map.texture:ne=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=re.r*le,d+=re.g*le,f+=re.b*le;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(F.sh.coefficients[ae],le);k++}else if(F.isSunLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const fe=F.shadow,we=t.get(F);we.shadowIntensity=fe.intensity,we.shadowBias=fe.bias,we.shadowNormalBias=fe.normalBias,we.shadowRadius=fe.radius,we.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),n.sunShadow[p]=we,n.sunShadowMap[p]=ne;const Ze=fe.getViewportCount();for(let nt=0;nt<Ze;nt++)n.sunShadowMatrix[v+nt]=fe.getMatrix(nt),n.sunShadowCascade[v+nt]=fe._cascadeData[nt];v+=Ze,p++}n.sun[u]=ae,u++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const fe=F.shadow,we=t.get(F);we.shadowIntensity=fe.intensity,we.shadowBias=fe.bias,we.shadowNormalBias=fe.normalBias,we.shadowRadius=fe.radius,we.shadowMapSize=fe.mapSize,n.directionalShadow[m]=we,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=F.shadow.matrix,U++}n.directional[m]=ae,m++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(re).multiplyScalar(le),ae.distance=J,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,n.spot[y]=ae;const fe=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,fe.updateMatrices(F),F.castShadow&&z++),n.spotLightMatrix[y]=fe.matrix,F.castShadow){const we=t.get(F);we.shadowIntensity=fe.intensity,we.shadowBias=fe.bias,we.shadowNormalBias=fe.normalBias,we.shadowRadius=fe.radius,we.shadowMapSize=fe.mapSize,n.spotShadow[y]=we,n.spotShadowMap[y]=ne,M++}y++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(re).multiplyScalar(le),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),n.rectArea[C]=ae,C++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const fe=F.shadow,we=t.get(F);we.shadowIntensity=fe.intensity,we.shadowBias=fe.bias,we.shadowNormalBias=fe.normalBias,we.shadowRadius=fe.radius,we.shadowMapSize=fe.mapSize,we.shadowCameraNear=fe.camera.near,we.shadowCameraFar=fe.camera.far,n.pointShadow[_]=we,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=F.shadow.matrix,D++}n.point[_]=ae,_++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar(le),ae.groundColor.copy(F.groundColor).multiplyScalar(le),n.hemi[T]=ae,T++}}C>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const j=n.hash;(j.sunLength!==u||j.directionalLength!==m||j.pointLength!==_||j.spotLength!==y||j.rectAreaLength!==C||j.hemiLength!==T||j.numSunShadows!==p||j.numDirectionalShadows!==U||j.numPointShadows!==D||j.numSpotShadows!==M||j.numSpotMaps!==w||j.numLightProbes!==k)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=C,n.point.length=_,n.hemi.length=T,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.directionalShadowMatrix.length=U,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+w-z,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=k,j.sunLength=u,j.directionalLength=m,j.pointLength=_,j.spotLength=y,j.rectAreaLength=C,j.hemiLength=T,j.numSunShadows=p,j.numDirectionalShadows=U,j.numPointShadows=D,j.numSpotShadows=M,j.numSpotMaps=w,j.numLightProbes=k,n.version=pv++)}function a(c,h){let d=0,f=0,u=0,p=0,v=0,m=0;const _=h.matrixWorldInverse;for(let y=0,C=c.length;y<C;y++){const T=c[y];if(T.isSunLight){const U=n.sun[d];U.direction.setFromMatrixPosition(T.matrixWorld),U.direction.transformDirection(_),d++}else if(T.isDirectionalLight){const U=n.directional[f];U.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(i),U.direction.transformDirection(_),f++}else if(T.isSpotLight){const U=n.spot[p];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(i),U.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const U=n.rectArea[v];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(_),o.identity(),r.copy(T.matrixWorld),r.premultiply(_),o.extractRotation(r),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const U=n.point[u];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(_),u++}else if(T.isHemisphereLight){const U=n.hemi[m];U.direction.setFromMatrixPosition(T.matrixWorld),U.direction.transformDirection(_),m++}}}return{setup:l,setupView:a,state:n}}function fu(s){const e=new gv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function l(d){n.push(d)}function a(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:l}}function _v(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let l;return o===void 0?(l=new fu(s),e.set(i,[l])):r>=o.length?(l=new fu(s),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`,Mv=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],yv=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],du=new Ct,dr=new V,Qa=new V;function Sv(s,e,t){let n=new Gr;const i=new Ue,r=new Ue,o=new tn,l=new s0,a=new r0,c={},h=t.maxTextureSize,d={[Qi]:Dn,[Dn]:Qi,[on]:on},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:xv,fragmentShader:vv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new jt;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let _=this.type;this.render=function(D,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===Kf&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=br);const z=s.getRenderTarget(),k=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(ls),oe.buffers.depth.getReversed()===!0?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=_!==this.type;ee&&M.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(re=>re.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,re=D.length;F<re;F++){const le=D[F],J=le.shadow;if(J===void 0){bt("WebGLShadowMap:",le,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const ne=J.getFrameExtents();i.multiply(ne),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,J.mapSize.y=r.y));const ae=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ae,J.map===null||ee===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===_r){if(le.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new In(i.x,i.y,{format:hs,type:Nn,minFilter:En,magFilter:En,generateMipmaps:!1}),J.map.texture.name=le.name+".shadowMap",J.map.depthTexture=new us(i.x,i.y,ti),J.map.depthTexture.name=le.name+".shadowMapDepth",J.map.depthTexture.format=ji,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=_n,J.map.depthTexture.magFilter=_n}else le.isPointLight?(J.map=new Cc(i.x),J.map.depthTexture=new lf(i.x,hi)):(J.map=new In(i.x,i.y),J.map.depthTexture=new us(i.x,i.y,hi)),J.map.depthTexture.name=le.name+".shadowMap",J.map.depthTexture.format=ji,this.type===br?(J.map.depthTexture.compareFunction=ae?Xu:Wu,J.map.depthTexture.minFilter=En,J.map.depthTexture.magFilter=En):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=_n,J.map.depthTexture.magFilter=_n);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==i.x||J.map.height!==i.y)&&J.map.setSize(i.x,i.y);const fe=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();le.isPointLight!==!0&&J.updateMatrices(le,w);const we=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:w.layers;for(let Ze=0;Ze<fe;Ze++){const nt=J.getCamera(Ze);if(le.isPointLight){const me=J.camera,Ve=J.matrix,et=le.distance||me.far;et!==me.far&&(me.far=et,me.updateProjectionMatrix()),dr.setFromMatrixPosition(le.matrixWorld),me.position.copy(dr),Qa.copy(me.position),Qa.add(Mv[Ze]),me.up.copy(yv[Ze]),me.lookAt(Qa),me.updateMatrixWorld(),Ve.makeTranslation(-dr.x,-dr.y,-dr.z),du.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),J._frustum.setFromProjectionMatrix(du,me.coordinateSystem,me.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,Ze),s.clear();else{Ze===0&&(s.setRenderTarget(J.map),s.clear());const me=J.getViewport(Ze);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),oe.viewport(o)}n=J.getFrustum(Ze),T(M,w,nt,le,we,this.type)}J.isPointLightShadow!==!0&&this.type===_r&&y(J,w),J.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(z,k,j)};function y(D,M){const w=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,u.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),D.mapPass===null?D.mapPass=new In(i.x,i.y,{format:hs,type:Nn}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value.set(D.map.width,D.map.height),f.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,v,null),u.uniforms.shadow_pass.value=D.mapPass.texture,u.uniforms.resolution.value.set(D.map.width,D.map.height),u.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(M,null,w,u,v,null)}function C(D,M,w,z){let k=null;const j=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(j!==void 0)k=j;else if(k=w.isPointLight===!0?a:l,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const oe=k.uuid,ee=M.uuid;let F=c[oe];F===void 0&&(F={},c[oe]=F);let re=F[ee];re===void 0&&(re=k.clone(),F[ee]=re,M.addEventListener("dispose",U)),k=re}if(k.visible=M.visible,k.wireframe=M.wireframe,z===_r?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:d[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,k.map=M.map,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const oe=s.properties.get(k);oe.light=w}return k}function T(D,M,w,z,k,j){if(D.visible===!1)return;if(D.layers.test(k)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===_r)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const F=e.update(D),re=D.material;if(Array.isArray(re)){const le=F.groups;for(let J=0,ne=le.length;J<ne;J++){const ae=le[J],fe=re[ae.materialIndex];if(fe&&fe.visible){const we=C(D,fe,z,j);D.onBeforeShadow(s,D,M,w,F,we,ae),s.renderBufferDirect(w,null,F,we,D,ae),D.onAfterShadow(s,D,M,w,F,we,ae)}}}else if(re.visible){const le=C(D,re,z,j);D.onBeforeShadow(s,D,M,w,F,le,null),s.renderBufferDirect(w,null,F,le,D,null),D.onAfterShadow(s,D,M,w,F,le,null)}}const ee=D.children;for(let F=0,re=ee.length;F<re;F++)T(ee[F],M,w,z,k,j)}function U(D){D.target.removeEventListener("dispose",U);for(const w in c){const z=c[w],k=D.target.uuid;k in z&&(z[k].dispose(),delete z[k])}}}function bv(s,e){function t(){let Y=!1;const ve=new tn;let _e=null;const Ge=new tn(0,0,0,0);return{setMask:function(te){_e!==te&&!Y&&(s.colorMask(te,te,te,te),_e=te)},setLocked:function(te){Y=te},setClear:function(te,$,de,Ee,x){x===!0&&(te*=Ee,$*=Ee,de*=Ee),ve.set(te,$,de,Ee),Ge.equals(ve)===!1&&(s.clearColor(te,$,de,Ee),Ge.copy(ve))},reset:function(){Y=!1,_e=null,Ge.set(-1,0,0,0)}}}function n(){let Y=!1,ve=!1,_e=null,Ge=null,te=null;return{setReversed:function($){if(ve!==$){const de=e.get("EXT_clip_control");$?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ve=$;const Ee=te;te=null,this.setClear(Ee)}},getReversed:function(){return ve},setTest:function($){$?Ie(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function($){_e!==$&&!Y&&(s.depthMask($),_e=$)},setFunc:function($){if(ve&&($=Pd[$]),Ge!==$){switch($){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case ol:s.depthFunc(s.LESS);break;case Lr:s.depthFunc(s.LEQUAL);break;case al:s.depthFunc(s.EQUAL);break;case ll:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=$}},setLocked:function($){Y=$},setClear:function($){te!==$&&(te=$,ve&&($=1-$),s.clearDepth($))},reset:function(){Y=!1,_e=null,Ge=null,te=null,ve=!1}}}function i(){let Y=!1,ve=null,_e=null,Ge=null,te=null,$=null,de=null,Ee=null,x=null;return{setTest:function(G){Y||(G?Ie(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(G){ve!==G&&!Y&&(s.stencilMask(G),ve=G)},setFunc:function(G,K,O){(_e!==G||Ge!==K||te!==O)&&(s.stencilFunc(G,K,O),_e=G,Ge=K,te=O)},setOp:function(G,K,O){($!==G||de!==K||Ee!==O)&&(s.stencilOp(G,K,O),$=G,de=K,Ee=O)},setLocked:function(G){Y=G},setClear:function(G){x!==G&&(s.clearStencil(G),x=G)},reset:function(){Y=!1,ve=null,_e=null,Ge=null,te=null,$=null,de=null,Ee=null,x=null}}}const r=new t,o=new n,l=new i;let a={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],v=null,m=!1,_=null,y=null,C=null,T=null,U=null,D=null,M=null,w=new gt(0,0,0),z=0,k=!1,j=null,oe=null,ee=null,F=null,re=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ae)[1]),J=ne>=1):ae.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),J=ne>=2);let fe=null,we={};const Ze=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),me=new tn().fromArray(Ze),Ve=new tn().fromArray(nt);function et(Y,ve,_e,Ge){const te=new Uint8Array(4),$=s.createTexture();s.bindTexture(Y,$),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<_e;de++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(ve+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return $}const lt={};lt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Ie(s.DEPTH_TEST),o.setFunc(Lr),tt(!1),Qe(Gc),Ie(s.CULL_FACE),We(ls);function Ie(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function ut(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function xt(Y,ve){return f[Y]!==ve?(s.bindFramebuffer(Y,ve),f[Y]=ve,Y===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ve),Y===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function st(Y,ve){let _e=p,Ge=!1;if(Y){_e=u.get(ve),_e===void 0&&(_e=[],u.set(ve,_e));const te=Y.textures;if(_e.length!==te.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let $=0,de=te.length;$<de;$++)_e[$]=s.COLOR_ATTACHMENT0+$;_e.length=te.length,Ge=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(_e)}function _t(Y){return v!==Y?(s.useProgram(Y),v=Y,!0):!1}const St={[Ns]:s.FUNC_ADD,[Jf]:s.FUNC_SUBTRACT,[$f]:s.FUNC_REVERSE_SUBTRACT};St[Qf]=s.MIN,St[jf]=s.MAX;const Re={[ed]:s.ZERO,[td]:s.ONE,[nd]:s.SRC_COLOR,[Du]:s.SRC_ALPHA,[ld]:s.SRC_ALPHA_SATURATE,[od]:s.DST_COLOR,[sd]:s.DST_ALPHA,[id]:s.ONE_MINUS_SRC_COLOR,[Nu]:s.ONE_MINUS_SRC_ALPHA,[ad]:s.ONE_MINUS_DST_COLOR,[rd]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[hd]:s.ONE_MINUS_CONSTANT_COLOR,[ud]:s.CONSTANT_ALPHA,[fd]:s.ONE_MINUS_CONSTANT_ALPHA};function We(Y,ve,_e,Ge,te,$,de,Ee,x,G){if(Y===ls){m===!0&&(ut(s.BLEND),m=!1);return}if(m===!1&&(Ie(s.BLEND),m=!0),Y!==Zf){if(Y!==_||G!==k){if((y!==Ns||U!==Ns)&&(s.blendEquation(s.FUNC_ADD),y=Ns,U=Ns),G)switch(Y){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ui:s.blendFunc(s.ONE,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hc:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}C=null,T=null,D=null,M=null,w.set(0,0,0),z=0,_=Y,k=G}return}te=te||ve,$=$||_e,de=de||Ge,(ve!==y||te!==U)&&(s.blendEquationSeparate(St[ve],St[te]),y=ve,U=te),(_e!==C||Ge!==T||$!==D||de!==M)&&(s.blendFuncSeparate(Re[_e],Re[Ge],Re[$],Re[de]),C=_e,T=Ge,D=$,M=de),(Ee.equals(w)===!1||x!==z)&&(s.blendColor(Ee.r,Ee.g,Ee.b,x),w.copy(Ee),z=x),_=Y,k=!1}function $e(Y,ve){Y.side===on?ut(s.CULL_FACE):Ie(s.CULL_FACE);let _e=Y.side===Dn;ve&&(_e=!_e),tt(_e),Y.blending===Os&&Y.transparent===!1?We(ls):We(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Ge=Y.stencilWrite;l.setTest(Ge),Ge&&(l.setMask(Y.stencilWriteMask),l.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),l.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),rt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(Y){j!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),j=Y)}function Qe(Y){Y!==qf?(Ie(s.CULL_FACE),Y!==oe&&(Y===Gc?s.cullFace(s.BACK):Y===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),oe=Y}function wt(Y){Y!==ee&&(J&&s.lineWidth(Y),ee=Y)}function rt(Y,ve,_e){Y?(Ie(s.POLYGON_OFFSET_FILL),(F!==ve||re!==_e)&&(F=ve,re=_e,o.getReversed()&&(ve=-ve,_e=-_e),s.polygonOffset(ve,_e))):ut(s.POLYGON_OFFSET_FILL)}function Oe(Y){Y?Ie(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function Be(Y){Y===void 0&&(Y=s.TEXTURE0+le-1),fe!==Y&&(s.activeTexture(Y),fe=Y)}function ke(Y,ve,_e){_e===void 0&&(fe===null?_e=s.TEXTURE0+le-1:_e=fe);let Ge=we[_e];Ge===void 0&&(Ge={type:void 0,texture:void 0},we[_e]=Ge),(Ge.type!==Y||Ge.texture!==ve)&&(fe!==_e&&(s.activeTexture(_e),fe=_e),s.bindTexture(Y,ve||lt[Y]),Ge.type=Y,Ge.texture=ve)}function L(){const Y=we[fe];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Xe(){try{s.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ye(){try{s.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function He(){try{s.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Le(){try{s.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Je(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ue(){try{s.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function P(){try{s.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function S(){try{s.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function q(){try{s.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ye(Y){return d[Y]!==void 0?d[Y]:s.getParameter(Y)}function pe(Y,ve){d[Y]!==ve&&(s.pixelStorei(Y,ve),d[Y]=ve)}function De(Y){me.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),me.copy(Y))}function Fe(Y){Ve.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Ve.copy(Y))}function Se(Y,ve){let _e=c.get(ve);_e===void 0&&(_e=new WeakMap,c.set(ve,_e));let Ge=_e.get(Y);Ge===void 0&&(Ge=s.getUniformBlockIndex(ve,Y.name),s.uniformBlockBinding(ve,Ge,Ge),_e.set(Y,Ge))}function Me(Y,ve,_e){const te=c.get(ve).get(Y);a[te]!==_e&&(s.bindBufferBase(s.UNIFORM_BUFFER,te,_e),a[te]=_e)}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},fe=null,we={},f={},a={},u=new WeakMap,p=[],v=null,m=!1,_=null,y=null,C=null,T=null,U=null,D=null,M=null,w=new gt(0,0,0),z=0,k=!1,j=null,oe=null,ee=null,F=null,re=null,me.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:Ie,disable:ut,bindFramebuffer:xt,drawBuffers:st,useProgram:_t,setBlending:We,setMaterial:$e,setFlipSided:tt,setCullFace:Qe,setLineWidth:wt,setPolygonOffset:rt,setScissorTest:Oe,activeTexture:Be,bindTexture:ke,unbindTexture:L,compressedTexImage2D:Xe,compressedTexImage3D:Ye,texImage2D:S,texImage3D:q,pixelStorei:pe,getParameter:ye,updateUBOMapping:Se,uniformBlockBinding:Me,texStorage2D:ue,texStorage3D:P,texSubImage2D:He,texSubImage3D:Le,compressedTexSubImage2D:Je,compressedTexSubImage3D:be,scissor:De,viewport:Fe,reset:Ce}}function wv(s,e,t,n,i,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,v=new FinalizationRegistry(P=>p.delete(P));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return m?new OffscreenCanvas(P,S):Br("canvas")}function y(P,S,q){let ye=1;const pe=ue(P);if((pe.width>q||pe.height>q)&&(ye=q/Math.max(pe.width,pe.height)),ye<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const De=Math.floor(ye*pe.width),Fe=Math.floor(ye*pe.height);f===void 0&&(f=_(De,Fe));const Se=S?_(De,Fe):f;return Se.width=De,Se.height=Fe,Se.getContext("2d").drawImage(P,0,0,De,Fe),bt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+De+"x"+Fe+")."),Se}else return"data"in P&&bt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function C(P){return P.generateMipmaps}function T(P){s.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,S,q,ye,pe,De=!1){if(P!==null){if(s[P]!==void 0)return s[P];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Fe;ye&&(Fe=e.get("EXT_texture_norm16"),Fe||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=S;if(S===s.RED&&(q===s.FLOAT&&(Se=s.R32F),q===s.HALF_FLOAT&&(Se=s.R16F),q===s.UNSIGNED_BYTE&&(Se=s.R8),q===s.UNSIGNED_SHORT&&Fe&&(Se=Fe.R16_EXT),q===s.SHORT&&Fe&&(Se=Fe.R16_SNORM_EXT)),S===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Se=s.R8UI),q===s.UNSIGNED_SHORT&&(Se=s.R16UI),q===s.UNSIGNED_INT&&(Se=s.R32UI),q===s.BYTE&&(Se=s.R8I),q===s.SHORT&&(Se=s.R16I),q===s.INT&&(Se=s.R32I)),S===s.RG&&(q===s.FLOAT&&(Se=s.RG32F),q===s.HALF_FLOAT&&(Se=s.RG16F),q===s.UNSIGNED_BYTE&&(Se=s.RG8),q===s.UNSIGNED_SHORT&&Fe&&(Se=Fe.RG16_EXT),q===s.SHORT&&Fe&&(Se=Fe.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Se=s.RG8UI),q===s.UNSIGNED_SHORT&&(Se=s.RG16UI),q===s.UNSIGNED_INT&&(Se=s.RG32UI),q===s.BYTE&&(Se=s.RG8I),q===s.SHORT&&(Se=s.RG16I),q===s.INT&&(Se=s.RG32I)),S===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Se=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Se=s.RGB16UI),q===s.UNSIGNED_INT&&(Se=s.RGB32UI),q===s.BYTE&&(Se=s.RGB8I),q===s.SHORT&&(Se=s.RGB16I),q===s.INT&&(Se=s.RGB32I)),S===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Se=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Se=s.RGBA16UI),q===s.UNSIGNED_INT&&(Se=s.RGBA32UI),q===s.BYTE&&(Se=s.RGBA8I),q===s.SHORT&&(Se=s.RGBA16I),q===s.INT&&(Se=s.RGBA32I)),S===s.RGB&&(q===s.UNSIGNED_SHORT&&Fe&&(Se=Fe.RGB16_EXT),q===s.SHORT&&Fe&&(Se=Fe.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(Se=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(Se=s.R11F_G11F_B10F)),S===s.RGBA){const Me=De?Yo:Wt.getTransfer(pe);q===s.FLOAT&&(Se=s.RGBA32F),q===s.HALF_FLOAT&&(Se=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Se=Me===Qt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Fe&&(Se=Fe.RGBA16_EXT),q===s.SHORT&&Fe&&(Se=Fe.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function M(P,S){let q;return P?S===null||S===hi||S===Hs?q=s.DEPTH24_STENCIL8:S===ti?q=s.DEPTH32F_STENCIL8:S===Nr&&(q=s.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===Hs?q=s.DEPTH_COMPONENT24:S===ti?q=s.DEPTH_COMPONENT32F:S===Nr&&(q=s.DEPTH_COMPONENT16),q}function w(P,S){return C(P)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function z(P){const S=new WeakRef(P);n.get(P).__ref=S,p.add(S),v.register(P,S,S)}function k(P){const S=n.get(P).__ref;S!==void 0&&(p.delete(S),v.unregister(S))}function j(P){ee(P.target)}function oe(P){F(P.target)}function ee(P){P.removeEventListener("dispose",j),k(P),le(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function F(P){P.removeEventListener("dispose",oe),k(P),ne(P)}function re(){for(const P of p){const S=P.deref();S!==void 0&&(S.isRenderTarget===!0?F(S):ee(S))}p.clear(),d.clear()}function le(P){const S=n.get(P);if(S.__webglInit===void 0)return;const q=P.source,ye=u.get(q);if(ye){const pe=ye[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&J(P),Object.keys(ye).length===0&&u.delete(q)}n.remove(P)}function J(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const q=P.source,ye=u.get(q);delete ye[S.__cacheKey],o.memory.textures--}function ne(P){const S=n.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();const q=P.depthTexture;if(q&&q.renderTarget===P&&ee(q),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(S.__webglFramebuffer[pe]))for(let De=0;De<S.__webglFramebuffer[pe].length;De++)s.deleteFramebuffer(S.__webglFramebuffer[pe][De]);else s.deleteFramebuffer(S.__webglFramebuffer[pe]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[pe])}else{if(Array.isArray(S.__webglFramebuffer))for(let pe=0;pe<S.__webglFramebuffer.length;pe++)s.deleteFramebuffer(S.__webglFramebuffer[pe]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pe=0;pe<S.__webglColorRenderbuffer.length;pe++)S.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[pe]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ye=P.textures;for(let pe=0,De=ye.length;pe<De;pe++){const Fe=n.get(ye[pe]);Fe.__webglTexture&&(s.deleteTexture(Fe.__webglTexture),o.memory.textures--),n.remove(ye[pe])}n.remove(P)}let ae=0;function fe(){ae=0}function we(){return ae}function Ze(P){ae=P}function nt(){const P=ae;return P>=i.maxTextures&&bt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),ae+=1,P}function me(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Ve(P,S){const q=n.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const ye=P.image;if(ye===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{$e(q,P,S);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+S)}function et(P,S){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){$e(q,P,S);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+S)}function lt(P,S){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){$e(q,P,S);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+S)}function Ie(P,S){const q=n.get(P);if(P.version>0&&q.__version!==P.version){tt(q,P,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+S)}const ut={[ni]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[Wo]:s.MIRRORED_REPEAT},xt={[_n]:s.NEAREST,[Ou]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Oo]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},st={[yd]:s.NEVER,[qu]:s.ALWAYS,[Sd]:s.LESS,[Wu]:s.LEQUAL,[bd]:s.EQUAL,[Xu]:s.GEQUAL,[wd]:s.GREATER,[Td]:s.NOTEQUAL};function _t(P,S){if(S.type===ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===Oo||S.magFilter===xr||S.magFilter===Mi||S.minFilter===En||S.minFilter===Oo||S.minFilter===xr||S.minFilter===Mi)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ut[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ut[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ut[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,xt[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,xt[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==xr&&S.minFilter!==Mi||S.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function St(P,S){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",j),z(S));const ye=S.source;let pe=u.get(ye);pe===void 0&&(pe={},u.set(ye,pe));const De=me(S);if(De!==P.__cacheKey){pe[De]===void 0&&(pe[De]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),pe[De].usedTimes++;const Fe=pe[P.__cacheKey];Fe!==void 0&&(pe[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&J(S)),P.__cacheKey=De,P.__webglTexture=pe[De].texture}return q}function Re(P,S,q){return Math.floor(Math.floor(P/q)/S)}function We(P,S,q,ye){const De=P.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,q,ye,S.data);else{De.sort((Y,ve)=>Y.start-ve.start);let Fe=0;for(let Y=1;Y<De.length;Y++){const ve=De[Fe],_e=De[Y],Ge=ve.start+ve.count,te=Re(_e.start,S.width,4),$=Re(ve.start,S.width,4);_e.start<=Ge+1&&te===$&&Re(_e.start+_e.count-1,S.width,4)===te?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++Fe,De[Fe]=_e)}De.length=Fe+1;const Se=t.getParameter(s.UNPACK_ROW_LENGTH),Me=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Y=0,ve=De.length;Y<ve;Y++){const _e=De[Y],Ge=Math.floor(_e.start/4),te=Math.ceil(_e.count/4),$=Ge%S.width,de=Math.floor(Ge/S.width),Ee=te,x=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,de),t.texSubImage2D(s.TEXTURE_2D,0,$,de,Ee,x,q,ye,S.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Se),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function $e(P,S,q){let ye=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ye=s.TEXTURE_3D);const pe=St(P,S),De=S.source;t.bindTexture(ye,P.__webglTexture,s.TEXTURE0+q);const Fe=n.get(De);if(De.version!==Fe.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const x=Wt.getPrimaries(Wt.workingColorSpace),G=S.colorSpace===Oi?null:Wt.getPrimaries(S.colorSpace),K=S.colorSpace===Oi||x===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let Me=y(S.image,!1,i.maxTextureSize);Me=be(S,Me);const Ce=r.convert(S.format,S.colorSpace),Y=r.convert(S.type);let ve=D(S.internalFormat,Ce,Y,S.normalized,S.colorSpace,S.isVideoTexture);_t(ye,S);let _e;const Ge=S.mipmaps,te=S.isVideoTexture!==!0,$=Fe.__version===void 0||pe===!0,de=De.dataReady,Ee=w(S,Me);if(S.isDepthTexture)ve=M(S.format===Zi,S.type),$&&(te?t.texStorage2D(s.TEXTURE_2D,1,ve,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,ve,Me.width,Me.height,0,Ce,Y,null));else if(S.isDataTexture)if(Ge.length>0){te&&$&&t.texStorage2D(s.TEXTURE_2D,Ee,ve,Ge[0].width,Ge[0].height);for(let x=0,G=Ge.length;x<G;x++)_e=Ge[x],te?de&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,_e.width,_e.height,Ce,Y,_e.data):t.texImage2D(s.TEXTURE_2D,x,ve,_e.width,_e.height,0,Ce,Y,_e.data);S.generateMipmaps=!1}else te?($&&t.texStorage2D(s.TEXTURE_2D,Ee,ve,Me.width,Me.height),de&&We(S,Me,Ce,Y)):t.texImage2D(s.TEXTURE_2D,0,ve,Me.width,Me.height,0,Ce,Y,Me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&$&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,ve,Ge[0].width,Ge[0].height,Me.depth);for(let x=0,G=Ge.length;x<G;x++)if(_e=Ge[x],S.format!==li)if(Ce!==null)if(te){if(de)if(S.layerUpdates.size>0){const K=qh(_e.width,_e.height,S.format,S.type);for(const O of S.layerUpdates){const se=_e.data.subarray(O*K/_e.data.BYTES_PER_ELEMENT,(O+1)*K/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,O,_e.width,_e.height,1,Ce,se)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,_e.width,_e.height,Me.depth,Ce,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,x,ve,_e.width,_e.height,Me.depth,0,_e.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?de&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,_e.width,_e.height,Me.depth,Ce,Y,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,x,ve,_e.width,_e.height,Me.depth,0,Ce,Y,_e.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{te&&$&&t.texStorage2D(s.TEXTURE_2D,Ee,ve,Ge[0].width,Ge[0].height);for(let x=0,G=Ge.length;x<G;x++)_e=Ge[x],S.format!==li?Ce!==null?te?de&&t.compressedTexSubImage2D(s.TEXTURE_2D,x,0,0,_e.width,_e.height,Ce,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,x,ve,_e.width,_e.height,0,_e.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?de&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,_e.width,_e.height,Ce,Y,_e.data):t.texImage2D(s.TEXTURE_2D,x,ve,_e.width,_e.height,0,Ce,Y,_e.data)}else if(S.isDataArrayTexture)if(te){if($&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,ve,Me.width,Me.height,Me.depth),de)if(S.layerUpdates.size>0){const x=qh(Me.width,Me.height,S.format,S.type);for(const G of S.layerUpdates){const K=Me.data.subarray(G*x/Me.data.BYTES_PER_ELEMENT,(G+1)*x/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,G,Me.width,Me.height,1,Ce,Y,K)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,Y,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,Me.width,Me.height,Me.depth,0,Ce,Y,Me.data);else if(S.isData3DTexture)te?($&&t.texStorage3D(s.TEXTURE_3D,Ee,ve,Me.width,Me.height,Me.depth),de&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,Y,Me.data)):t.texImage3D(s.TEXTURE_3D,0,ve,Me.width,Me.height,Me.depth,0,Ce,Y,Me.data);else if(S.isFramebufferTexture){if($)if(te)t.texStorage2D(s.TEXTURE_2D,Ee,ve,Me.width,Me.height);else{let x=Me.width,G=Me.height;for(let K=0;K<Ee;K++)t.texImage2D(s.TEXTURE_2D,K,ve,x,G,0,Ce,Y,null),x>>=1,G>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const x=s.canvas;if(x.hasAttribute("layoutsubtree")||x.setAttribute("layoutsubtree","true"),Me.parentNode!==x){x.appendChild(Me),d.add(S),x.onpaint=G=>{const K=G.changedElements;for(const O of d)K.includes(O.image)&&(O.needsUpdate=!0)},x.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Me);else{const K=s.RGBA,O=s.RGBA,se=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,K,O,se,Me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(te&&$){const x=ue(Ge[0]);t.texStorage2D(s.TEXTURE_2D,Ee,ve,x.width,x.height)}for(let x=0,G=Ge.length;x<G;x++)_e=Ge[x],te?de&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,Ce,Y,_e):t.texImage2D(s.TEXTURE_2D,x,ve,Ce,Y,_e);S.generateMipmaps=!1}else if(te){if($){const x=ue(Me);t.texStorage2D(s.TEXTURE_2D,Ee,ve,x.width,x.height)}de&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Y,Me)}else t.texImage2D(s.TEXTURE_2D,0,ve,Ce,Y,Me);C(S)&&S.mipmapsAutoUpdate===!0&&T(ye),Fe.__version=De.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function tt(P,S,q){if(S.image.length!==6)return;const ye=St(P,S),pe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);const De=n.get(pe);if(pe.version!==De.__version||ye===!0){t.activeTexture(s.TEXTURE0+q);const Fe=Wt.getPrimaries(Wt.workingColorSpace),Se=S.colorSpace===Oi?null:Wt.getPrimaries(S.colorSpace),Me=S.colorSpace===Oi||Fe===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Y=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let O=0;O<6;O++)!Ce&&!Y?ve[O]=y(S.image[O],!0,i.maxCubemapSize):ve[O]=Y?S.image[O].image:S.image[O],ve[O]=be(S,ve[O]);const _e=ve[0],Ge=r.convert(S.format,S.colorSpace),te=r.convert(S.type);let $=D(S.internalFormat,Ge,te,S.normalized,S.colorSpace);const de=S.isVideoTexture!==!0,Ee=De.__version===void 0||ye===!0,x=pe.dataReady;let G=w(S,_e);_t(s.TEXTURE_CUBE_MAP,S);let K;if(S.isDepthTexture){if($=M(S.format===Zi,S.type),Ee)if(de)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,$,_e.width,_e.height);else for(let O=0;O<6;O++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,$,_e.width,_e.height,0,Ge,te,null)}else if(Ce){de&&Ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,G,$,_e.width,_e.height);for(let O=0;O<6;O++){K=ve[O].mipmaps;for(let se=0;se<K.length;se++){const he=K[se];S.format!==li?Ge!==null?de?x&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,0,0,he.width,he.height,Ge,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,$,he.width,he.height,0,he.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,0,0,he.width,he.height,Ge,te,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,$,he.width,he.height,0,Ge,te,he.data)}}}else{if(K=S.mipmaps,de&&Ee){K.length>0&&G++;const O=ue(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,G,$,O.width,O.height)}for(let O=0;O<6;O++)if(Y){de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ve[O].width,ve[O].height,Ge,te,ve[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,$,ve[O].width,ve[O].height,0,Ge,te,ve[O].data);for(let se=0;se<K.length;se++){const ze=K[se].image[O].image;de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,0,0,ze.width,ze.height,Ge,te,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,$,ze.width,ze.height,0,Ge,te,ze.data)}}else{de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Ge,te,ve[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,$,Ge,te,ve[O]);for(let se=0;se<K.length;se++){const he=K[se];de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,0,0,Ge,te,he.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,$,Ge,te,he.image[O])}}}C(S)&&S.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),De.__version=pe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Qe(P,S,q,ye,pe,De){const Fe=r.convert(q.format,q.colorSpace),Se=r.convert(q.type),Me=D(q.internalFormat,Fe,Se,q.normalized,q.colorSpace),Ce=n.get(S),Y=n.get(q);if(Y.__renderTarget=S,!Ce.__hasExternalTextures){const ve=Math.max(1,S.width>>De),_e=Math.max(1,S.height>>De);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,De,Me,ve,_e,S.depth,0,Fe,Se,null):t.texImage2D(pe,De,Me,ve,_e,0,Fe,Se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Le(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,pe,Y.__webglTexture,0,He(S)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,pe,Y.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(P,S,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const ye=S.depthTexture,pe=ye&&ye.isDepthTexture?ye.type:null,De=M(S.stencilBuffer,pe),Fe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Le(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He(S),De,S.width,S.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,He(S),De,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,De,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,P)}else{const ye=S.textures;for(let pe=0;pe<ye.length;pe++){const De=ye[pe],Fe=r.convert(De.format,De.colorSpace),Se=r.convert(De.type),Me=D(De.internalFormat,Fe,Se,De.normalized,De.colorSpace);Le(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He(S),Me,S.width,S.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,He(S),Me,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Me,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(P,S,q){const ye=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=n.get(S.depthTexture);pe.__renderTarget=S;const De=ye?S.depthTexture.image[0]:S.depthTexture.image;(!pe.__webglTexture||De.width!==S.width||De.height!==S.height)&&(De.width=S.width,De.height=S.height,S.depthTexture.needsUpdate=!0),ye?Ie(S.depthTexture,0):Ve(S.depthTexture,0);const Fe=pe.__webglTexture,Se=He(S),Me=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Ce=S.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)Le(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,Me,Fe,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,Me,Fe,0);else if(S.depthTexture.format===Zi)Le(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,Me,Fe,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,Me,Fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(P){const S=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ye=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ye){const pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ye.removeEventListener("dispose",pe)};ye.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=ye}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let ye=0;ye<6;ye++)rt(S.__webglFramebuffer[ye],P,ye);else P.texture.mipmaps.length>0?rt(S.__webglFramebuffer[0],P,0):rt(S.__webglFramebuffer,P,0);else if(q){S.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ye]),S.__webglDepthbuffer[ye]===void 0)S.__webglDepthbuffer[ye]=s.createRenderbuffer(),wt(S.__webglDepthbuffer[ye],P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=S.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,De)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),wt(S.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,De)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(P,S,q){const ye=n.get(P);S!==void 0&&Qe(ye.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Oe(P)}function ke(P){const S=P.texture,q=n.get(P),ye=n.get(S);P.addEventListener("dispose",oe),z(P);const pe=P.textures,De=P.isWebGLCubeRenderTarget===!0,Fe=pe.length>1;if(Fe||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=S.version,o.memory.textures++),De){q.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps.length>0){q.__webglFramebuffer[Se]=[];for(let Me=0;Me<S.mipmaps.length;Me++)q.__webglFramebuffer[Se][Me]=s.createFramebuffer()}else q.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(S.mipmaps.length>0){q.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)q.__webglFramebuffer[Se]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Se=0,Me=pe.length;Se<Me;Se++){const Ce=n.get(pe[Se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Le(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const Me=pe[Se];q.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Se]);const Ce=r.convert(Me.format,Me.colorSpace),Y=r.convert(Me.type),ve=D(Me.internalFormat,Ce,Y,Me.normalized,Me.colorSpace,P.isXRRenderTarget===!0),_e=He(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,q.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),wt(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),_t(s.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Qe(q.__webglFramebuffer[Se][Me],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Me);else Qe(q.__webglFramebuffer[Se],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);C(S)?T(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Fe){for(let Se=0,Me=pe.length;Se<Me;Se++){const Ce=pe[Se],Y=n.get(Ce);let ve=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Y.__webglTexture),_t(ve,Ce),Qe(q.__webglFramebuffer,P,Ce,s.COLOR_ATTACHMENT0+Se,ve,0),C(Ce)&&T(ve)}t.unbindTexture()}else{let Se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,ye.__webglTexture),_t(Se,S),S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Qe(q.__webglFramebuffer[Me],P,S,s.COLOR_ATTACHMENT0,Se,Me);else Qe(q.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,Se,0);C(S)?T(Se):S.mipmaps.length>0&&s.texParameteri(Se,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Oe(P)}function L(P){const S=P.textures;for(let q=0,ye=S.length;q<ye;q++){const pe=S[q];if(C(pe)&&pe.mipmapsAutoUpdate===!0){const De=U(P),Fe=n.get(pe).__webglTexture;t.bindTexture(De,Fe),T(De),t.unbindTexture()}}}const Xe=[];function Ye(P){if(P.samples>0){if(Le(P)===!1){const S=P.textures,q=P.width,ye=P.height;let pe=s.COLOR_BUFFER_BIT;const De=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(P),Se=S.length>1;if(Se)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ce]);const Y=n.get(S[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Y,0)}s.blitFramebuffer(0,0,q,ye,0,0,q,ye,pe,s.NEAREST),a===!0&&(Xe.length=0,Xe.push(s.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Xe.push(De),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ce]);const Y=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Y,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&a){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function He(P){return Math.min(i.maxSamples,P.samples)}function Le(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function be(P,S){const q=P.colorSpace,ye=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Jn&&q!==Oi&&(Wt.getTransfer(q)===Qt?(ye!==li||pe!==Yn)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",q)),S}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=fe,this.getTextureUnits=we,this.setTextureUnits=Ze,this.setTexture2D=Ve,this.setTexture2DArray=et,this.setTexture3D=lt,this.setTextureCube=Ie,this.rebindTextures=Be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Le,this.dispose=re}function Tv(s,e){function t(n,i=Oi){let r;const o=Wt.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===lc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return s.BYTE;if(n===Bu)return s.SHORT;if(n===Nr)return s.UNSIGNED_SHORT;if(n===ac)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===Nn)return s.HALF_FLOAT;if(n===Gu)return s.ALPHA;if(n===Hu)return s.RGB;if(n===li)return s.RGBA;if(n===ji)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===oa)return s.RED;if(n===hc)return s.RED_INTEGER;if(n===hs)return s.RG;if(n===uc)return s.RG_INTEGER;if(n===fc)return s.RGBA_INTEGER;if(n===Fo||n===Bo||n===zo||n===ko)if(o===Qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===fl||n===dl||n===pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===_l||n===xl||n===vl||n===Xo||n===Ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ml||n===gl)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_l)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xl)return r.COMPRESSED_R11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xo)return r.COMPRESSED_RG11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===Sl||n===bl||n===wl||n===Tl||n===El||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Dl||n===Nl||n===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Ol||n===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ul)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===zl||n===qo||n===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`;class Rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:Ev,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends es{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",a=1,c=null,h=null,d=null,f=null,u=null,p=null;const v=typeof XRWebGLBinding<"u",m=new Rv,_={},y=t.getContextAttributes();let C=null,T=null;const U=[],D=[],M=new Ue;let w=null,z=null;const k=new Hn;k.viewport=new tn;const j=new Hn;j.viewport=new tn;const oe=[k,j],ee=new C0;let F=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let Ve=U[me];return Ve===void 0&&(Ve=new Aa,U[me]=Ve),Ve.getTargetRaySpace()},this.getControllerGrip=function(me){let Ve=U[me];return Ve===void 0&&(Ve=new Aa,U[me]=Ve),Ve.getGripSpace()},this.getHand=function(me){let Ve=U[me];return Ve===void 0&&(Ve=new Aa,U[me]=Ve),Ve.getHandSpace()};function le(me){const Ve=D.indexOf(me.inputSource);if(Ve===-1)return;const et=U[Ve];et!==void 0&&(et.update(me.inputSource,me.frame,c||o),et.dispatchEvent({type:me.type,data:me.inputSource}))}function J(){i.removeEventListener("select",le),i.removeEventListener("selectstart",le),i.removeEventListener("selectend",le),i.removeEventListener("squeeze",le),i.removeEventListener("squeezestart",le),i.removeEventListener("squeezeend",le),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",ne);for(let me=0;me<U.length;me++){const Ve=D[me];Ve!==null&&(D[me]=null,U[me].disconnect(Ve))}F=null,re=null,m.reset();for(const me in _)delete _[me];if(e.setRenderTarget(C),u=null,f=null,d=null,i=null,T=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),z!==null){const me=z.camera;me.fov=z.fov,me.zoom=z.zoom,me.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){r=me,n.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){l=me,n.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(me){if(i=me,i!==null){if(C=e.getRenderTarget(),i.addEventListener("select",le),i.addEventListener("selectstart",le),i.addEventListener("selectend",le),i.addEventListener("squeeze",le),i.addEventListener("squeezestart",le),i.addEventListener("squeezeend",le),i.addEventListener("end",J),i.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,lt=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,et=y.stencil?Zi:ji,lt=y.stencil?Hs:hi);const ut={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ut),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new In(f.textureWidth,f.textureHeight,{format:li,type:Yn,depthTexture:new us(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const et={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,et),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new In(u.framebufferWidth,u.framebufferHeight,{format:li,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await i.requestReferenceSpace(l),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(me){for(let Ve=0;Ve<me.removed.length;Ve++){const et=me.removed[Ve],lt=D.indexOf(et);lt>=0&&(D[lt]=null,U[lt].disconnect(et))}for(let Ve=0;Ve<me.added.length;Ve++){const et=me.added[Ve];let lt=D.indexOf(et);if(lt===-1){for(let ut=0;ut<U.length;ut++)if(ut>=D.length){D.push(et),lt=ut;break}else if(D[ut]===null){D[ut]=et,lt=ut;break}if(lt===-1)break}const Ie=U[lt];Ie&&Ie.connect(et)}}function ae(me,Ve){Ve===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(Ve.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(i===null)return;let Ve=me.near,et=me.far;m.texture!==null&&(m.depthNear>0&&(Ve=m.depthNear),m.depthFar>0&&(et=m.depthFar)),ee.near=j.near=k.near=Ve,ee.far=j.far=k.far=et,(F!==ee.near||re!==ee.far)&&(i.updateRenderState({depthNear:ee.near,depthFar:ee.far}),F=ee.near,re=ee.far),ee.layers.mask=me.layers.mask|6,k.layers.mask=ee.layers.mask&-5,j.layers.mask=ee.layers.mask&-3;const lt=me.parent,Ie=ee.cameras;ae(ee,lt);for(let ut=0;ut<Ie.length;ut++)ae(Ie[ut],lt);ee.projectionMatrix.copy(k.projectionMatrix),ee.projectionMatrixInverse.copy(k.projectionMatrixInverse),z===null&&me.isPerspectiveCamera&&(z={camera:me,fov:me.fov,zoom:me.zoom}),fe(me,ee,lt)};function fe(me,Ve,et){et===null?me.matrix.copy(Ve.matrixWorld):(me.matrix.copy(et.matrixWorld),me.matrix.invert(),me.matrix.multiply(Ve.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(Ve.projectionMatrix),me.projectionMatrixInverse.copy(Ve.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=Vs*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(f===null&&u===null))return a},this.setFoveation=function(me){a=me,f!==null&&(f.fixedFoveation=me),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=me)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ee)},this.getCameraTexture=function(me){return _[me]};let we=null;function Ze(me,Ve){if(h=Ve.getViewerPose(c||o),p=Ve,h!==null){const et=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let lt=!1;et.length!==ee.cameras.length&&(ee.cameras.length=0,lt=!0);for(let st=0;st<et.length;st++){const _t=et[st];let St=null;if(u!==null)St=u.getViewport(_t);else{const We=d.getViewSubImage(f,_t);St=We.viewport,st===0&&(e.setRenderTargetTextures(T,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(T))}let Re=oe[st];Re===void 0&&(Re=new Hn,Re.layers.enable(st),Re.viewport=new tn,oe[st]=Re),Re.matrix.fromArray(_t.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(_t.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(St.x,St.y,St.width,St.height),st===0&&(ee.matrix.copy(Re.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),lt===!0&&ee.cameras.push(Re)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const st=d.getDepthInformation(et[0]);st&&st.isValid&&st.texture&&m.init(st,i.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let st=0;st<et.length;st++){const _t=et[st].camera;if(_t){let St=_[_t];St||(St=new cf,_[_t]=St);const Re=d.getCameraImage(_t);St.sourceTexture=Re}}}}for(let et=0;et<U.length;et++){const lt=D[et],Ie=U[et];lt!==null&&Ie!==void 0&&Ie.update(lt,Ve,c||o)}we&&we(me,Ve),Ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ve}),p=null}const nt=new Tf;nt.setAnimationLoop(Ze),this.setAnimationLoop=function(me){we=me},this.dispose=function(){}}}const Pv=new Ct,Uf=new Nt;Uf.set(-1,0,0,0,1,0,0,0,1);function Lv(s,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,xf(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,y,C,T){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),f(m,_),_.isMeshPhysicalMaterial&&u(m,_,T)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),v(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&l(m,_)):_.isPointsMaterial?a(m,_,y,C):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Dn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Dn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const y=e.get(_),C=y.envMap,T=y.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(T)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uf),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function l(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function a(m,_,y,C){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*y,m.scale.value=C*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function f(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function u(m,_,y){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function v(m,_){const y=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dv(s,e,t,n){let i={},r={};function o(y,C){const T=C.program;n.uniformBlockBinding(y,T,i[y.id])}function l(y,C){let T=i[y.id];T===void 0&&(p(y),T=a(y),i[y.id]=T,y.addEventListener("dispose",m));const U=C.program;n.updateUBOMapping(y,U);const D=e.render.frame;r[y.id]!==D&&(c(y),r[y.id]=D)}function a(y){const C=s.createBuffer(),T=y.__size,U=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,T,U),s.bindBuffer(s.UNIFORM_BUFFER,null),C}function c(y){const C=i[y.id],T=y.uniforms,U=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let D=0,M=T.length;D<M;D++){const w=T[D];if(Array.isArray(w))for(let z=0,k=w.length;z<k;z++)h(w[z],D,z,U);else h(w,D,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,C,T,U){if(f(y,C,T,U)===!0){const D=y.__offset,M=y.value;if(Array.isArray(M)){let w=0;for(let z=0;z<M.length;z++){const k=M[z],j=v(k,!0);d(k,y.__data,w),w+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,y.__data)}}function d(y,C,T){typeof y=="number"||typeof y=="boolean"?C[T]=y:y.isMatrix3?(C[T]=y.elements[0],C[T+1]=y.elements[1],C[T+2]=y.elements[2],C[T+3]=0,C[T+4]=y.elements[3],C[T+5]=y.elements[4],C[T+6]=y.elements[5],C[T+7]=0,C[T+8]=y.elements[6],C[T+9]=y.elements[7],C[T+10]=y.elements[8],C[T+11]=0):ArrayBuffer.isView(y)?C.set(y.subarray(0,C.length-T),T):y.toArray(C,T)}function f(y,C,T,U){const D=y.value,M=C+"_"+T;if(Array.isArray(D)){U[M]===void 0&&(U[M]=[]);const w=U[M];let z=!1;for(let k=0;k<D.length;k++)u(D[k],w,k)===!0&&(z=!0);return z}return u(D,U,M)}function u(y,C,T){if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{const U=C[T];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function p(y){const C=y.uniforms;let T=0;const U=16;for(let M=0,w=C.length;M<w;M++){const z=Array.isArray(C[M])?C[M]:[C[M]];for(let k=0,j=z.length;k<j;k++){const oe=z[k],ee=Array.isArray(oe.value)?oe.value:[oe.value],F=Array.isArray(C[M])||Array.isArray(oe.value);let re=T;for(let J=0,ne=ee.length;J<ne;J++){const ae=ee[J],fe=v(ae,F),we=T%U,Ze=we%fe.boundary,nt=we+Ze;T+=Ze,nt!==0&&U-nt<fe.storage&&(T+=U-nt),J===0&&(re=T),T+=fe.storage}const le=oe.type==="int"?Int32Array:oe.type==="uint"?Uint32Array:Float32Array;oe.__data=new le((T-re)/Float32Array.BYTES_PER_ELEMENT),oe.__offset=re}}const D=T%U;return D>0&&(T+=U-D),y.__size=T,y.__cache={},this}function v(y,C){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=16,T.storage=48):y.isMatrix4?(T.boundary=16,T.storage=64):y.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",y),C===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(y){const C=y.target;C.removeEventListener("dispose",m),s.deleteBuffer(i[C.id]),delete i[C.id],delete r[C.id]}function _(){for(const y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:l,dispose:_}}const Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function Iv(){return gi===null&&(gi=new la(Nv,16,16,hs,Nn),gi.name="DFG_LUT",gi.minFilter=En,gi.magFilter=En,gi.wrapS=Bn,gi.wrapT=Bn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class Uv{constructor(e={}){const{canvas:t=Rd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=u,m=new Set([fc,uc,hc]),_=new Set([Yn,hi,Nr,Hs,lc,cc]),y=new Uint32Array(4),C=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let U=null,D=null;const M=[],w=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let j=!1,oe=null,ee=null,F=null,re=null;this._outputColorSpace=Mn;let le=0,J=0,ne=null,ae=-1,fe=null;const we=new tn,Ze=new tn;let nt=null;const me=new gt(0);let Ve=0,et=t.width,lt=t.height,Ie=1,ut=null,xt=null;const st=new tn(0,0,et,lt),_t=new tn(0,0,et,lt);let St=!1;const Re=new Gr,We=new vc;let $e=!1,tt=!1;const Qe=new Ct,wt=new V,rt=new tn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ke(){return ne===null?Ie:1}let L=n;function Xe(g,E){return t.getContext(g,E)}let Ye,He,Le,Je,be,ue,P,S,q,ye,pe,De,Fe,Se,Me,Ce,Y,ve,_e,Ge,te,$,de;try{const g={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",O,!1),L===null){const E="webgl2";if(L=Xe(E,g),L===null)throw Xe(E)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(g){throw t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",O,!1),Lt("WebGLRenderer: "+g.message),g}function Ee(){Ye=new B_(L),Ye.init(),te=new Tv(L,Ye),He=new A_(L,Ye,e,te),Le=new bv(L,Ye),He.reversedDepthBuffer&&f&&Le.buffers.depth.setReversed(!0),ee=L.createFramebuffer(),F=L.createFramebuffer(),re=L.createFramebuffer(),Je=new G_(L),be=new cv,ue=new wv(L,Ye,Le,be,He,te,Je),P=new F_(k),S=new V0(L),$=new T_(L,S),q=new z_(L,S,Je,$),ye=new V_(L,q,S,$,Je),ve=new H_(L,He,ue),Me=new R_(be),pe=new lv(k,P,Ye,He,$,Me),De=new Lv(k,be),Fe=new uv,Se=new _v(Ye),Y=new w_(k,P,Le,ye,p,a),Ce=new Sv(k,ye,He),de=new Dv(L,Je,He,Le),_e=new E_(L,Ye,Je),Ge=new k_(L,Ye,Je),Je.programs=pe.programs,k.capabilities=He,k.extensions=Ye,k.properties=be,k.renderLists=Fe,k.shadowMap=Ce,k.state=Le,k.info=Je}v!==Yn&&(z=new X_(v,t.width,t.height,l,i,r));const x=new Cv(k,L);this.xr=x,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const g=Ye.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ye.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(g){g!==void 0&&(Ie=g,this.setSize(et,lt,!1))},this.getSize=function(g){return g.set(et,lt)},this.setSize=function(g,E,W=!0){if(x.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=g,lt=E,t.width=Math.floor(g*Ie),t.height=Math.floor(E*Ie),W===!0&&(t.style.width=g+"px",t.style.height=E+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,g,E)},this.getDrawingBufferSize=function(g){return g.set(et*Ie,lt*Ie).floor()},this.setDrawingBufferSize=function(g,E,W){et=g,lt=E,Ie=W,t.width=Math.floor(g*W),t.height=Math.floor(E*W),this.setViewport(0,0,g,E)},this.setEffects=function(g){if(v===Yn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let E=0;E<g.length;E++)if(g[E].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(we)},this.getViewport=function(g){return g.copy(st)},this.setViewport=function(g,E,W,B){g.isVector4?st.set(g.x,g.y,g.z,g.w):st.set(g,E,W,B),Le.viewport(we.copy(st).multiplyScalar(ke()).round())},this.getScissor=function(g){return g.copy(_t)},this.setScissor=function(g,E,W,B){g.isVector4?_t.set(g.x,g.y,g.z,g.w):_t.set(g,E,W,B),Le.scissor(Ze.copy(_t).multiplyScalar(ke()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(g){Le.setScissorTest(St=g)},this.setOpaqueSort=function(g){ut=g},this.setTransparentSort=function(g){xt=g},this.getClearColor=function(g){return g.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(g=!0,E=!0,W=!0){let B=0;if(g){let Z=!1;if(ne!==null){const ge=ne.texture.format;Z=m.has(ge)}if(Z){const ge=ne.texture.type,Pe=_.has(ge),xe=Y.getClearColor(),Ne=Y.getClearAlpha(),qe=xe.r,at=xe.g,ct=xe.b;Pe?(y[0]=qe,y[1]=at,y[2]=ct,y[3]=Ne,L.clearBufferuiv(L.COLOR,0,y)):(C[0]=qe,C[1]=at,C[2]=ct,C[3]=Ne,L.clearBufferiv(L.COLOR,0,C))}else B|=L.COLOR_BUFFER_BIT}E&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),oe=g},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",O,!1),Y.dispose(),Fe.dispose(),Se.dispose(),ue.dispose(),be.dispose(),P.dispose(),ye.dispose(),q.dispose(),$.dispose(),de.dispose(),pe.dispose(),x.dispose(),x.removeEventListener("sessionstart",Tt),x.removeEventListener("sessionend",Mt),Ke.stop()};function G(g){g.preventDefault(),Ko("WebGLRenderer: Context Lost."),j=!0}function K(){Ko("WebGLRenderer: Context Restored."),j=!1;const g=Je.autoReset,E=Ce.enabled,W=Ce.autoUpdate,B=Ce.needsUpdate,Z=Ce.type;Ee(),Je.autoReset=g,Ce.enabled=E,Ce.autoUpdate=W,Ce.needsUpdate=B,Ce.type=Z}function O(g){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function se(g){const E=g.target;E.removeEventListener("dispose",se),he(E)}function he(g){ze(g),be.remove(g)}function ze(g){const E=be.get(g).programs;E!==void 0&&(E.forEach(function(W){pe.releaseProgram(W)}),g.isShaderMaterial&&pe.releaseShaderCache(g))}this.renderBufferDirect=function(g,E,W,B,Z,ge){E===null&&(E=Oe);const Pe=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,xe=H(g,E,W,B,Z);Le.setMaterial(B,Pe);let Ne=W.index,qe=1;if(B.wireframe===!0){if(Ne=q.getWireframeAttribute(W),Ne===void 0)return;qe=2}const at=W.drawRange,ct=W.attributes.position;let it=at.start*qe,At=(at.start+at.count)*qe;ge!==null&&(it=Math.max(it,ge.start*qe),At=Math.min(At,(ge.start+ge.count)*qe)),Ne!==null?(it=Math.max(it,0),At=Math.min(At,Ne.count)):ct!=null&&(it=Math.max(it,0),At=Math.min(At,ct.count));const Pt=At-it;if(Pt<0||Pt===1/0)return;$.setup(Z,B,xe,W,Ne);let Et,It=_e;if(Ne!==null&&(Et=S.get(Ne),It=Ge,It.setIndex(Et)),Z.isMesh)B.wireframe===!0?(Le.setLineWidth(B.wireframeLinewidth*ke()),It.setMode(L.LINES)):It.setMode(L.TRIANGLES);else if(Z.isLine){let nn=B.linewidth;nn===void 0&&(nn=1),Le.setLineWidth(nn*ke()),Z.isLineSegments?It.setMode(L.LINES):Z.isLineLoop?It.setMode(L.LINE_LOOP):It.setMode(L.LINE_STRIP)}else Z.isPoints?It.setMode(L.POINTS):Z.isSprite&&It.setMode(L.TRIANGLES);if(Z.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))It.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const nn=Z._multiDrawStarts,mt=Z._multiDrawCounts,an=Z._multiDrawCount,Ot=Ne?S.get(Ne).bytesPerElement:1,ii=be.get(B).currentProgram.getUniforms();for(let hn=0;hn<an;hn++)ii.setValue(L,"_gl_DrawID",hn),It.render(nn[hn]/Ot,mt[hn])}else if(Z.isInstancedMesh)It.renderInstances(it,Pt,Z.count);else if(W.isInstancedBufferGeometry){const nn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,mt=Math.min(W.instanceCount,nn);It.renderInstances(it,Pt,mt)}else It.render(it,Pt)};function dt(g,E,W,B){oe!==null&&g.isNodeMaterial&&oe.setObject(B,g),$e===!0&&Me.setState(g,W,!1),g.transparent===!0&&g.side===on&&g.forceSinglePass===!1?(g.side=Dn,g.needsUpdate=!0,R(g,E,B),g.side=Qi,g.needsUpdate=!0,R(g,E,B),g.side=on):R(g,E,B)}this.compile=function(g,E,W=null){W===null&&(W=g),oe!==null&&oe.renderStart(g,E,W),D=Se.get(W),D.init(E),w.push(D),W.traverseVisible(function(Z){Z.isLight&&Z.layers.test(E.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),g!==W&&g.traverseVisible(function(Z){Z.isLight&&Z.layers.test(E.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights(),oe!==null&&oe.updateLights(D.state.lightsArray),tt=this.localClippingEnabled,$e=Me.init(this.clippingPlanes,tt),$e===!0&&Me.setGlobalState(this.clippingPlanes,E),oe!==null&&Ce.render(D.state.shadowsArray,W,E);const B=new Set;return g.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const ge=Z.material;if(ge)if(Array.isArray(ge))for(let Pe=0;Pe<ge.length;Pe++){const xe=ge[Pe];dt(xe,W,E,Z),B.add(xe)}else dt(ge,W,E,Z),B.add(ge)}),D=w.pop(),oe!==null&&oe.renderEnd(),B},this.compileAsync=function(g,E,W=null){const B=this.compile(g,E,W);return new Promise(Z=>{function ge(){if(B.forEach(function(Pe){const Ne=be.get(Pe).currentProgram;(Ne===void 0||Ne.isReady())&&B.delete(Pe)}),B.size===0){Z(g);return}setTimeout(ge,10)}Ye.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let vt=null;function ot(g){vt&&vt(g)}function Tt(){Ke.stop()}function Mt(){Ke.start()}const Ke=new Tf;Ke.setAnimationLoop(ot),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(g){vt=g,x.setAnimationLoop(g),g===null?Ke.stop():Ke.start()},x.addEventListener("sessionstart",Tt),x.addEventListener("sessionend",Mt),this.render=function(g,E){if(E!==void 0&&E.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;oe!==null&&oe.renderStart(g,E);const W=x.enabled===!0&&x.isPresenting===!0,B=z!==null&&(ne===null||W)&&z.begin(k,ne);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(x.cameraAutoUpdate===!0&&x.updateCamera(E),E=x.getCamera()),g.isScene===!0&&g.onBeforeRender(k,g,E,ne),D=Se.get(g,w.length),D.init(E),D.state.textureUnits=ue.getTextureUnits(),w.push(D),Qe.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),E.isArrayCamera?We.setFromArrayCamera(E):Re.setFromProjectionMatrix(Qe,ci,E.reversedDepth),tt=this.localClippingEnabled,$e=Me.init(this.clippingPlanes,tt),U=Fe.get(g,M.length),U.init(),M.push(U),this.info.render.frame++,x.enabled===!0&&x.isPresenting===!0){const Pe=k.xr.getDepthSensingMesh();Pe!==null&&ft(Pe,E,-1/0,k.sortObjects)}ft(g,E,0,k.sortObjects),U.finish(),oe!==null&&oe.updateLights(D.state.lightsArray),k.sortObjects===!0&&U.sort(ut,xt),Be=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Be&&Y.addToRenderList(U,g),this.info.autoReset===!0&&this.info.reset(),$e===!0&&Me.beginShadows();const Z=D.state.shadowsArray;if(Ce.render(Z,g,E),$e===!0&&Me.endShadows(),(B&&z.hasRenderPass())===!1){const Pe=U.opaque,xe=U.transmissive;if(D.setupLights(),E.isArrayCamera){const Ne=E.cameras;if(xe.length>0)for(let qe=0,at=Ne.length;qe<at;qe++){const ct=Ne[qe];un(Pe,xe,g,ct)}Be&&Y.render(g);for(let qe=0,at=Ne.length;qe<at;qe++){const ct=Ne[qe];Zt(U,g,ct,ct.viewport)}}else xe.length>0&&un(Pe,xe,g,E),Be&&Y.render(g),Zt(U,g,E)}ne!==null&&J===0&&(ue.updateMultisampleRenderTarget(ne),ue.updateRenderTargetMipmap(ne)),B&&z.end(k),g.isScene===!0&&g.onAfterRender(k,g,E),$.resetDefaultState(),ae=-1,fe=null,w.pop(),w.length>0?(D=w[w.length-1],ue.setTextureUnits(D.state.textureUnits),$e===!0&&Me.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,M.pop(),M.length>0?U=M[M.length-1]:U=null,oe!==null&&oe.renderEnd()};function ft(g,E,W,B){if(g.visible===!1)return;if(g.layers.test(E.layers)){if(g.isGroup)W=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(E);else if(g.isLight)D.pushLight(g),g.castShadow&&D.pushShadow(g);else if(g.isSprite){const Pe=E.isArrayCamera?We:Re;if(!g.frustumCulled||g.intersectsFrustum(Pe)){B&&rt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Qe);const xe=ye.update(g),Ne=g.material;Ne.visible&&U.push(g,xe,Ne,W,rt.z,null,E)}}else if(g.isMesh||g.isLine||g.isPoints){const Pe=E.isArrayCamera?We:Re;if(!g.frustumCulled||g.intersectsFrustum(Pe)){const xe=ye.update(g),Ne=g.material;if(B&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),rt.copy(g.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),rt.copy(xe.boundingSphere.center)),rt.applyMatrix4(g.matrixWorld).applyMatrix4(Qe)),Array.isArray(Ne)){const qe=xe.groups;for(let at=0,ct=qe.length;at<ct;at++){const it=qe[at],At=Ne[it.materialIndex];At&&At.visible&&U.push(g,xe,At,W,rt.z,it,E)}}else Ne.visible&&U.push(g,xe,Ne,W,rt.z,null,E)}}}const ge=g.children;for(let Pe=0,xe=ge.length;Pe<xe;Pe++)ft(ge[Pe],E,W,B)}function Zt(g,E,W,B){const{opaque:Z,transmissive:ge,transparent:Pe}=g;D.setupLightsView(W),$e===!0&&Me.setGlobalState(k.clippingPlanes,W),B&&Le.viewport(we.copy(B)),Z.length>0&&fn(Z,E,W),ge.length>0&&fn(ge,E,W),Pe.length>0&&fn(Pe,E,W),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function un(g,E,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[B.id]===void 0){const it=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[B.id]=new In(1,1,{generateMipmaps:!0,type:it?Nn:Yn,minFilter:Mi,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const ge=D.state.transmissionRenderTarget[B.id],Pe=B.viewport||we;ge.setSize(Pe.z*k.transmissionResolutionScale,Pe.w*k.transmissionResolutionScale);const xe=k.getRenderTarget(),Ne=k.getActiveCubeFace(),qe=k.getActiveMipmapLevel();k.setRenderTarget(ge),k.getClearColor(me),Ve=k.getClearAlpha(),Ve<1&&k.setClearColor(16777215,.5),k.clear(),Be&&Y.render(W);const at=k.toneMapping;k.toneMapping=zi;const ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),D.setupLightsView(B),$e===!0&&Me.setGlobalState(k.clippingPlanes,B),fn(g,W,B),ue.updateMultisampleRenderTarget(ge),ue.updateRenderTargetMipmap(ge),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let At=0,Pt=E.length;At<Pt;At++){const Et=E[At],{object:It,geometry:nn,material:mt,group:an}=Et;if(mt.side===on&&It.layers.test(B.layers)){const Ot=mt.side;mt.side=Dn,mt.needsUpdate=!0,A(It,W,B,nn,mt,an),mt.side=Ot,mt.needsUpdate=!0,it=!0}}it===!0&&(ue.updateMultisampleRenderTarget(ge),ue.updateRenderTargetMipmap(ge))}k.setRenderTarget(xe,Ne,qe),k.setClearColor(me,Ve),ct!==void 0&&(B.viewport=ct),k.toneMapping=at}function fn(g,E,W){const B=E.isScene===!0?E.overrideMaterial:null;for(let Z=0,ge=g.length;Z<ge;Z++){const Pe=g[Z],{object:xe,geometry:Ne,group:qe}=Pe;let at=Pe.material;at.allowOverride===!0&&B!==null&&(at=B),xe.layers.test(W.layers)&&A(xe,E,W,Ne,at,qe)}}function A(g,E,W,B,Z,ge){oe!==null&&Z.isNodeMaterial&&oe.setObject(g,Z),g.onBeforeRender(k,E,W,B,Z,ge),g.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),Z.onBeforeRender(k,E,W,B,g,ge),Z.transparent===!0&&Z.side===on&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,k.renderBufferDirect(W,E,B,Z,g,ge),Z.side=Qi,Z.needsUpdate=!0,k.renderBufferDirect(W,E,B,Z,g,ge),Z.side=on):k.renderBufferDirect(W,E,B,Z,g,ge),g.onAfterRender(k,E,W,B,Z,ge)}function N(g){let E=0;for(const W of g)W.texture!==null&&E++;return E}function R(g,E,W){E.isScene!==!0&&(E=Oe);const B=be.get(g),Z=D.state.lights,ge=D.state.shadowsArray,Pe=Z.state.version,xe=pe.getParameters(g,Z.state,ge,E,W,D.state.lightProbeGridArray),Ne=pe.getProgramCacheKey(xe);let qe=B.programs;B.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?E.environment:null,B.fog=E.fog;const at=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;B.envMap=P.get(g.envMap||B.environment,at),B.envMapRotation=B.environment!==null&&g.envMap===null?E.environmentRotation:g.envMapRotation,qe===void 0&&(g.addEventListener("dispose",se),qe=new Map,B.programs=qe,B.programVariants=new Map);let ct=qe.get(Ne);if(ct!==void 0){if(B.currentProgram===ct&&B.lightsStateVersion===Pe)return ce(g,xe),ct}else xe.uniforms=pe.getUniforms(g),oe!==null&&g.isNodeMaterial&&oe.build(g,W,xe),g.onBeforeCompile(xe,k),ct=pe.acquireProgram(xe,Ne),qe.set(Ne,ct),B.uniforms=xe.uniforms;const it=B.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(it.clippingPlanes=Me.uniform),ce(g,xe),B.needsLights=ie(g),B.lightsStateVersion=Pe,B.needsLights&&(it.ambientLightColor.value=Z.state.ambient,it.lightProbe.value=Z.state.probe,it.sunLights.value=Z.state.sun,it.sunLightShadows.value=Z.state.sunShadow,it.directionalLights.value=Z.state.directional,it.directionalLightShadows.value=Z.state.directionalShadow,it.spotLights.value=Z.state.spot,it.spotLightShadows.value=Z.state.spotShadow,it.rectAreaLights.value=Z.state.rectArea,it.ltc_1.value=Z.state.rectAreaLTC1,it.ltc_2.value=Z.state.rectAreaLTC2,it.pointLights.value=Z.state.point,it.pointLightShadows.value=Z.state.pointShadow,it.hemisphereLights.value=Z.state.hemi,it.sunShadowMatrix.value=Z.state.sunShadowMatrix,it.sunShadowCascade.value=Z.state.sunShadowCascade,it.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,it.spotLightMatrix.value=Z.state.spotLightMatrix,it.spotLightMap.value=Z.state.spotLightMap,it.pointShadowMatrix.value=Z.state.pointShadowMatrix),B.numLightProbeGrids=N(D.state.lightProbeGridArray),B.currentProgram=ct,B.uniformsList=null,ct}function I(g,E,W,B,Z){const ge=be.get(g),Pe=ge.currentProgram.id+","+B+","+Z;let xe=ge.programVariants.get(Pe);return xe===void 0?(xe=R(g,E,W),ge.programVariants.set(Pe,xe)):(ge.currentProgram=xe,ge.uniformsList=null,ge.outputColorSpace=B,ge.toneMapping=Z),xe}function Q(g){if(g.uniformsList===null){const E=g.currentProgram.getUniforms();g.uniformsList=Ho.seqWithValue(E.seq,g.uniforms)}return g.uniformsList}function ce(g,E){const W=be.get(g);W.outputColorSpace=E.outputColorSpace,W.batching=E.batching,W.batchingColor=E.batchingColor,W.instancing=E.instancing,W.instancingColor=E.instancingColor,W.instancingMorph=E.instancingMorph,W.skinning=E.skinning,W.morphTargets=E.morphTargets,W.morphNormals=E.morphNormals,W.morphColors=E.morphColors,W.morphTargetsCount=E.morphTargetsCount,W.numClippingPlanes=E.numClippingPlanes,W.numIntersection=E.numClipIntersection,W.vertexAlphas=E.vertexAlphas,W.vertexTangents=E.vertexTangents,W.toneMapping=E.toneMapping}function H(g,E,W,B,Z){E.isScene!==!0&&(E=Oe),ue.resetTextureUnits();const ge=E.fog,Pe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?E.environment:null,xe=ne===null?k.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Wt.workingColorSpace,Ne=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,qe=P.get(B.envMap||Pe,Ne),at=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ct=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),it=!!W.morphAttributes.position,At=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color;let Et=zi;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Et=k.toneMapping);const It=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nn=It!==void 0?It.length:0,mt=be.get(B),an=D.state.lights;if($e===!0&&(tt===!0||g!==fe)){const Ft=g===fe&&B.id===ae;Me.setState(B,g,Ft)}let Ot=!1,ii=!1;B.version===mt.__version?mt.needsLights&&mt.lightsStateVersion!==an.state.version||Z.isBatchedMesh&&mt.batching===!1||!Z.isBatchedMesh&&mt.batching===!0||Z.isBatchedMesh&&mt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&mt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&mt.instancing===!1||!Z.isInstancedMesh&&mt.instancing===!0||Z.isSkinnedMesh&&mt.skinning===!1||!Z.isSkinnedMesh&&mt.skinning===!0||Z.isInstancedMesh&&mt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&mt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&mt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&mt.instancingMorph===!1&&Z.morphTexture!==null||mt.envMap!==qe||B.fog===!0&&mt.fog!==ge||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Me.numPlanes||mt.numIntersection!==Me.numIntersection)||mt.vertexAlphas!==at||mt.vertexTangents!==ct||mt.morphTargets!==it||mt.morphNormals!==At||mt.morphColors!==Pt||mt.morphTargetsCount!==nn||mt.numLightProbeGrids!==N(D.state.lightProbeGridArray)?Ot=!0:(mt.outputColorSpace!==xe||mt.toneMapping!==Et)&&(ii=!0):(Ot=!0,mt.__version=B.version);let hn=mt.currentProgram;(Ot===!0||ii===!0)&&(hn=ii===!0?I(B,E,Z,xe,Et):R(B,E,Z),oe&&B.isNodeMaterial&&oe.onUpdateProgram(B,hn,mt));let pi=!1,kn=!1,Wn=!1;const yt=hn.getUniforms(),Vt=mt.uniforms;if(Le.useProgram(hn.program)&&(pi=!0,kn=!0,Wn=!0),B.id!==ae&&(ae=B.id,kn=!0),pi||fe!==g){Le.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",g.projectionMatrix),yt.setValue(L,"viewMatrix",g.matrixWorldInverse);const zt=yt.map.cameraPosition;zt!==void 0&&zt.setValue(L,wt.setFromMatrixPosition(g.matrixWorld)),He.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&yt.setValue(L,"isOrthographic",g.isOrthographicCamera===!0),fe!==g&&(fe=g,kn=!0,Wn=!0)}if(mt.needsLights&&(an.state.sunShadowMap.length>0&&yt.setValue(L,"sunShadowMap",an.state.sunShadowMap,ue),an.state.directionalShadowMap.length>0&&yt.setValue(L,"directionalShadowMap",an.state.directionalShadowMap,ue),an.state.spotShadowMap.length>0&&yt.setValue(L,"spotShadowMap",an.state.spotShadowMap,ue),an.state.pointShadowMap.length>0&&yt.setValue(L,"pointShadowMap",an.state.pointShadowMap,ue)),Z.isSkinnedMesh){yt.setOptional(L,Z,"bindMatrix"),yt.setOptional(L,Z,"bindMatrixInverse");const Ft=Z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),yt.setValue(L,"boneTexture",Ft.boneTexture,ue))}Z.isBatchedMesh&&(yt.setOptional(L,Z,"batchingTexture"),yt.setValue(L,"batchingTexture",Z._matricesTexture,ue),yt.setOptional(L,Z,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",Z._indirectTexture,ue),yt.setOptional(L,Z,"batchingColorTexture"),Z._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",Z._colorsTexture,ue));const Jt=W.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ve.update(Z,W,hn),(kn||mt.receiveShadow!==Z.receiveShadow)&&(mt.receiveShadow=Z.receiveShadow,yt.setValue(L,"receiveShadow",Z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&E.environment!==null&&(Vt.envMapIntensity.value=E.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Iv()),kn){if(yt.setValue(L,"toneMappingExposure",k.toneMappingExposure),mt.needsLights&&b(Vt,Wn),ge&&B.fog===!0&&De.refreshFogUniforms(Vt,ge),De.refreshMaterialUniforms(Vt,B,Ie,lt,D.state.transmissionRenderTarget[g.id]),mt.needsLights&&mt.numLightProbeGrids>0){const Ft=T;let zt=0;for(const $t of D.state.lightProbeGridArray)$t.texture!==null&&(Ft.textures[zt]=$t.texture,Ft.min[zt]=$t.boundingBox.min,Ft.max[zt]=$t.boundingBox.max,Ft.resolution[zt]=$t.resolution,zt++);for(const $t in Ft)Ft[$t].length=zt;Vt.probesSH.value=Ft.textures,Vt.probesMin.value=Ft.min,Vt.probesMax.value=Ft.max,Vt.probesResolution.value=Ft.resolution}Ho.upload(L,Q(mt),Vt,ue)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ho.upload(L,Q(mt),Vt,ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&yt.setValue(L,"center",Z.center),yt.setValue(L,"modelViewMatrix",Z.modelViewMatrix),yt.setValue(L,"normalMatrix",Z.normalMatrix),yt.setValue(L,"modelMatrix",Z.matrixWorld),B.uniformsGroups!==void 0){const Ft=B.uniformsGroups;for(let zt=0,$t=Ft.length;zt<$t;zt++){const Rn=Ft[zt];de.update(Rn,hn),de.bind(Rn,hn)}}return hn}function b(g,E){g.ambientLightColor.needsUpdate=E,g.lightProbe.needsUpdate=E,g.sunLights.needsUpdate=E,g.sunLightShadows.needsUpdate=E,g.directionalLights.needsUpdate=E,g.directionalLightShadows.needsUpdate=E,g.pointLights.needsUpdate=E,g.pointLightShadows.needsUpdate=E,g.spotLights.needsUpdate=E,g.spotLightShadows.needsUpdate=E,g.rectAreaLights.needsUpdate=E,g.hemisphereLights.needsUpdate=E}function ie(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(g,E,W){const B=be.get(g);B.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),be.get(g.texture).__webglTexture=E,be.get(g.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,E){const W=be.get(g);W.__webglFramebuffer=E,W.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(g,E=0,W=0){ne=g,le=E,J=W;let B=null,Z=!1,ge=!1;if(g){const xe=be.get(g);if(xe.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),we.copy(g.viewport),Ze.copy(g.scissor),nt=g.scissorTest,Le.viewport(we),Le.scissor(Ze),Le.setScissorTest(nt),ae=-1;return}else if(xe.__webglFramebuffer===void 0)ue.setupRenderTarget(g);else if(xe.__hasExternalTextures)ue.rebindTextures(g,be.get(g.texture).__webglTexture,be.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const at=g.depthTexture;if(xe.__boundDepthTexture!==at){if(at!==null&&be.has(at)&&(g.width!==at.image.width||g.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(g)}}const Ne=g.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);const qe=be.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(qe[E])?B=qe[E][W]:B=qe[E],Z=!0):g.samples>0&&ue.useMultisampledRTT(g)===!1?B=be.get(g).__webglMultisampledFramebuffer:Array.isArray(qe)?B=qe[W]:B=qe,we.copy(g.viewport),Ze.copy(g.scissor),nt=g.scissorTest}else we.copy(st).multiplyScalar(Ie).floor(),Ze.copy(_t).multiplyScalar(Ie).floor(),nt=St;if(W!==0&&(B=ee),Le.bindFramebuffer(L.FRAMEBUFFER,B)&&Le.drawBuffers(g,B),Le.viewport(we),Le.scissor(Ze),Le.setScissorTest(nt),Z){const xe=be.get(g.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+E,xe.__webglTexture,W)}else if(ge){const xe=E;for(let Ne=0;Ne<g.textures.length;Ne++){const qe=be.get(g.textures[Ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ne,qe.__webglTexture,W,xe)}}else if(g!==null&&W!==0){const xe=be.get(g.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,W)}ae=-1};function X(g){const E=be.get(g);return(E.__readFormat!==g.format||E.__readType!==g.type)&&(E.__readFormat=g.format,E.__readType=g.type,E.__formatReadable=He.textureFormatReadable(g.format),E.__typeReadable=He.textureTypeReadable(g.type)),E}this.readRenderTargetPixels=function(g,E,W,B,Z,ge,Pe,xe=0){if(!(g&&g.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=be.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){Le.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const qe=g.textures[xe],at=qe.format,ct=qe.type;g.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe);const it=X(qe);if(it.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=g.width-B&&W>=0&&W<=g.height-Z&&L.readPixels(E,W,B,Z,te.convert(at),te.convert(ct),ge)}finally{const qe=ne!==null?be.get(ne).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(g,E,W,B,Z,ge,Pe,xe=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=be.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(E>=0&&E<=g.width-B&&W>=0&&W<=g.height-Z){Le.bindFramebuffer(L.FRAMEBUFFER,Ne);const qe=g.textures[xe],at=qe.format,ct=qe.type;g.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe);const it=X(qe);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),L.readPixels(E,W,B,Z,te.convert(at),te.convert(ct),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Pt=ne!==null?be.get(ne).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,Pt);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cd(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(At),L.deleteSync(Et),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,E=null,W=0){const B=Math.pow(2,-W),Z=Math.floor(g.image.width*B),ge=Math.floor(g.image.height*B),Pe=E!==null?E.x:0,xe=E!==null?E.y:0;ue.setTexture2D(g,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Pe,xe,Z,ge),Le.unbindTexture()},this.copyTextureToTexture=function(g,E,W=null,B=null,Z=0,ge=0){let Pe,xe,Ne,qe,at,ct,it,At,Pt;const Et=g.isCompressedTexture?g.mipmaps[ge]:g.image;if(W!==null)Pe=W.max.x-W.min.x,xe=W.max.y-W.min.y,Ne=W.isBox3?W.max.z-W.min.z:1,qe=W.min.x,at=W.min.y,ct=W.isBox3?W.min.z:0;else{const yt=Math.pow(2,-Z);Pe=Math.floor(Et.width*yt),xe=Math.floor(Et.height*yt),g.isDataArrayTexture?Ne=Et.depth:g.isData3DTexture?Ne=Math.floor(Et.depth*yt):Ne=1,qe=0,at=0,ct=0}B!==null?(it=B.x,At=B.y,Pt=B.z):(it=0,At=0,Pt=0);const It=te.convert(E.format),nn=te.convert(E.type);let mt;E.isData3DTexture?(ue.setTexture3D(E,0),mt=L.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(ue.setTexture2DArray(E,0),mt=L.TEXTURE_2D_ARRAY):(ue.setTexture2D(E,0),mt=L.TEXTURE_2D),Le.activeTexture(L.TEXTURE0),Le.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,E.flipY),Le.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),Le.pixelStorei(L.UNPACK_ALIGNMENT,E.unpackAlignment);const an=Le.getParameter(L.UNPACK_ROW_LENGTH),Ot=Le.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=Le.getParameter(L.UNPACK_SKIP_PIXELS),hn=Le.getParameter(L.UNPACK_SKIP_ROWS),pi=Le.getParameter(L.UNPACK_SKIP_IMAGES);Le.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),Le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),Le.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),Le.pixelStorei(L.UNPACK_SKIP_ROWS,at),Le.pixelStorei(L.UNPACK_SKIP_IMAGES,ct);const kn=g.isDataArrayTexture||g.isData3DTexture,Wn=E.isDataArrayTexture||E.isData3DTexture;if(g.isDepthTexture){const yt=be.get(g),Vt=be.get(E),Jt=be.get(yt.__renderTarget),Ft=be.get(Vt.__renderTarget);Le.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Le.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let zt=0;zt<Ne;zt++)kn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(g).__webglTexture,Z,ct+zt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(E).__webglTexture,ge,Pt+zt)),L.blitFramebuffer(qe,at,qe+Pe,at+xe,it,At,it+Pe,At+xe,L.DEPTH_BUFFER_BIT,L.NEAREST);Le.bindFramebuffer(L.READ_FRAMEBUFFER,null),Le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Z!==0||g.isRenderTargetTexture||be.has(g)){const yt=be.get(g),Vt=be.get(E);Le.bindFramebuffer(L.READ_FRAMEBUFFER,F),Le.bindFramebuffer(L.DRAW_FRAMEBUFFER,re);for(let Jt=0;Jt<Ne;Jt++)kn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.__webglTexture,Z,ct+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,Z),Wn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,ge,Pt+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,ge),Z!==0?L.blitFramebuffer(qe,at,qe+Pe,at+xe,it,At,it+Pe,At+xe,L.COLOR_BUFFER_BIT,L.NEAREST):Wn?L.copyTexSubImage3D(mt,ge,it,At,Pt+Jt,qe,at,Pe,xe):L.copyTexSubImage2D(mt,ge,it,At,qe,at,Pe,xe);Le.bindFramebuffer(L.READ_FRAMEBUFFER,null),Le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Wn?g.isDataTexture||g.isData3DTexture?L.texSubImage3D(mt,ge,it,At,Pt,Pe,xe,Ne,It,nn,Et.data):E.isCompressedArrayTexture?L.compressedTexSubImage3D(mt,ge,it,At,Pt,Pe,xe,Ne,It,Et.data):L.texSubImage3D(mt,ge,it,At,Pt,Pe,xe,Ne,It,nn,Et):g.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ge,it,At,Pe,xe,It,nn,Et.data):g.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ge,it,At,Et.width,Et.height,It,Et.data):L.texSubImage2D(L.TEXTURE_2D,ge,it,At,Pe,xe,It,nn,Et);Le.pixelStorei(L.UNPACK_ROW_LENGTH,an),Le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot),Le.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),Le.pixelStorei(L.UNPACK_SKIP_ROWS,hn),Le.pixelStorei(L.UNPACK_SKIP_IMAGES,pi),ge===0&&E.generateMipmaps===!0&&E.mipmapsAutoUpdate===!0&&L.generateMipmap(mt),Le.unbindTexture()},this.initRenderTarget=function(g){be.get(g).__webglFramebuffer===void 0&&ue.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?ue.setTextureCube(g,0):g.isData3DTexture?ue.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?ue.setTexture2DArray(g,0):ue.setTexture2D(g,0),Le.unbindTexture()},this.resetState=function(){le=0,J=0,ne=null,Le.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}const pu={type:"change"},Pc={type:"start"},Of={type:"end"},Lo=new Zr,mu=new Ii,Ov=Math.cos(70*Ju.DEG2RAD),xn=new V,Gn=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ja=1e-6;class Fv extends G0{constructor(e,t=null){super(e,t),this.state=Kt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Vn,this._lastTargetPosition=new V,this._quat=new Vn().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xh,this._sphericalDelta=new Xh,this._scale=1,this._panOffset=new V,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new V,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zv.bind(this),this._onPointerDown=Bv.bind(this),this._onPointerUp=kv.bind(this),this._onContextMenu=Yv.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Wv.bind(this),this._onTouchStart=Xv.bind(this),this._onTouchMove=qv.bind(this),this._onMouseDown=Gv.bind(this),this._onMouseMove=Hv.bind(this),this._interceptControlDown=Kv.bind(this),this._interceptControlUp=Zv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Kt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pu),this.update(),this.state=Kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;xn.copy(t).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),i<-Math.PI?i+=Gn:i>Math.PI&&(i-=Gn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),t.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=xn.length();o=this._clampDistance(l*this._scale);const a=l-o;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),r=!!a}else if(this.object.isOrthographicCamera){const l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=a!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),o=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<Ov?this.object.lookAt(this.target):(mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(mu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ja||this._lastTargetPosition.distanceToSquared(this.target)>ja?(this.dispatchEvent(pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xn.setFromMatrixColumn(t,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,t){this.screenSpacePanning===!0?xn.setFromMatrixColumn(t,1):(xn.setFromMatrixColumn(t,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;xn.copy(i).sub(this.target);let r=xn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=Kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Kt.DOLLY;break;case Us.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}break;case Us.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Pc)}function Hv(s){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Vv(s){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(s.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Of))}function Wv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Xv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1){this.state=Kt.NONE;break}this._handleTouchStartRotate(s),this.state=Kt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1){this.state=Kt.NONE;break}this._handleTouchStartPan(s),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Kt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Pc)}function qv(s){switch(this._trackPointer(s),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Kt.NONE}}function Yv(s){this.enabled!==!1&&s.preventDefault()}function Kv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jv=new ua(-1,1,1,-1,0,1);class $v extends jt{constructor(){super(),this.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rt([0,2,0,0,2,0],2))}}const Qv=new $v;class Lc{constructor(e){this._mesh=new Ut(Qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Zl extends er{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qr.clone(e.uniforms),this.material=new zn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gu extends er{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class jv extends er{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class e1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zl(Vo),this.copyPass.material.blending=ls,this.timer=new P0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}gu!==void 0&&(o instanceof gu?n=!0:o instanceof jv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Do={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t1 extends er{constructor(){super(),this.isOutputPass=!0,this.uniforms=qr.clone(Do.uniforms),this.material=new vf({name:Do.name,uniforms:this.uniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this._fsQuad=new Lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class n1 extends er{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const i1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ys extends er{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,o,{type:Nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new In(r,o,{type:Nn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new In(r,o,{type:Nn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const l=i1;this.highPassUniforms=qr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qr.clone(Vo.uniforms),this.blendMaterial=new zn({uniforms:this.copyUniforms,vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,premultipliedAlpha:!0,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new Lc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<e;o+=2){const l=t[o],a=o+1<e?t[o+1]:0,c=l+a;i.push((o*l+(o+1)*a)/c),r.push(c)}return new zn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new zn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ys.BlurDirectionX=new Ue(1,0);Ys.BlurDirectionY=new Ue(0,1);function Dc(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},l=s[0].morphTargetsRelative,a=new jt;a.morphTargetsRelative=l;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}a.setIndex(d)}for(const h in r){const d=_u(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<o[h].length;++v)u.push(o[h][v][f]);const p=_u(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(p)}}}return a}function _u(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),l=new Tn(o,t,n);let a=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=a/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){const v=h.getComponent(f,p);l.setComponent(f+d,p,v)}}else o.set(h.array,a);a+=h.count*t}return i!==void 0&&(l.gpuType=i),l}function xu(s,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Gl||e===Vu){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Gl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const{cos:ds,sin:yi,atan2:Nc,hypot:Pr,PI:os}=Math,Dt=.22,$i=(s,e,t)=>{const n=s.ry;return[s.x+e*ds(n)+t*yi(n),s.z-e*yi(n)+t*ds(n)]},na=(s,e,t)=>{const n=s.ry,i=e-s.x,r=t-s.z;return[i*ds(n)-r*yi(n),i*yi(n)+r*ds(n)]},Ni=(s,e,t,n)=>Nc(t-s,n-e),s1={S:[0,1],N:[0,-1],E:[1,0],W:[-1,0]};function pr(s){const{side:e,off:t}=s.door,n=s1[e],i=e==="S"?[t,s.d/2]:e==="N"?[t,-s.d/2]:e==="E"?[s.w/2,t]:[-s.w/2,t],r=[i[0]-n[0]*1.1,i[1]-n[1]*1.1],o=[i[0]+n[0]*1.5,i[1]+n[1]*1.5];return{...s,doorLocal:i,doorN:n,inLocal:r,outLocal:o,inW:$i(s,...r),outW:$i(s,...o),hubW:$i(s,...s.hub)}}function No(s){return{...s,hubW:$i(s,...s.hub),entriesW:s.entries.map(e=>$i(s,...e))}}const Ks=[pr({id:"war",name:"War hall",kind:"house",x:-6,z:-22,ry:.06,w:15,d:9,wallH:3,door:{side:"S",off:0,width:2.4},hub:[0,2.7],floor:"war",desc:"Where the Lead/PM plans the run and keeps the task board."}),pr({id:"library",name:"Library",kind:"house",x:24,z:-21,ry:-.32,w:10,d:8,wallH:2.8,door:{side:"S",off:-2.2,width:1.6},hub:[-1.2,1],floor:"dark",storeys:2,upperH:2.5,desc:"Where the Reviewer checks the work. The archive is upstairs."}),pr({id:"studio",name:"Design studio",kind:"house",x:30,z:2,ry:-1.37,w:9,d:7,wallH:2.7,door:{side:"S",off:0,width:1.6},hub:[0,1.6],floor:"light",deck:[-4.2,4.2,3.5,7.6],desc:"Where the Designer lays out pages. Paints on the terrace when free."}),pr({id:"workshop",name:"Workshop",kind:"house",x:-27,z:-4,ry:.28,w:12,d:8,wallH:2.8,door:{side:"E",off:1,width:1.8},hub:[-.5,1.8],floor:"tiles",desc:"Where the Frontend dev and the Backend dev write code."}),No({id:"forge",name:"The Forge",kind:"open",x:0,z:0,ry:0,r:7.6,hub:[-5,5],entries:[[-7.3,7.3]],desc:"The furnace burns hotter the more agents are working."}),pr({id:"tavern",name:"Tavern",kind:"house",x:20.5,z:18.6,ry:-.2,w:11,d:8,wallH:2.8,door:{side:"W",off:1.5,width:1.8},hub:[-3.6,2.6],floor:"planks",storeys:2,upperH:2.5,desc:"Where agents with no task have a drink. Rooms to sleep in upstairs."}),No({id:"yard",name:"Training yard",kind:"arena",x:-24,z:17,ry:0,r:7.5,gate:-.526,hub:[.5,-1.4],entries:[[4.85,-2.81],[7.71,-4.47]],desc:"Sparring and target practice between tasks."}),No({id:"court",name:"Courtyard",kind:"open",x:2,z:24,ry:0,r:6,hub:[-1.8,.2],entries:[[.4,.2]],desc:"The square inside the gate: the well, the market stall, the notice board."}),No({id:"garden",name:"Garden",kind:"open",x:-29,z:-20,ry:0,r:7.4,hub:[3.6,2.4],entries:[[5.6,4.6],[6.6,5.6]],desc:"A quiet ring of hedges around the pond."})],Kn=Object.fromEntries(Ks.map(s=>[s.id,s])),dn=(s,e,t,n,i,r,o={})=>({room:s,lx:e,lz:t,lry:n,pose:i,doing:r,...o}),Ff={"war-table":dn("war",-.3,.9,Ni(-.3,.9,-2.5,-.6),"plan","planning at the war table"),"war-board":dn("war",3.8,-2.8,os,"point","updating the task board"),"war-rug":dn("war",-4,1.8,Ni(-4,1.8,-6.1,-2.6),"idle","thinking it over by the war chief's seat"),"lib-desk":dn("library",1.8,-1.98,0,"readsit","reviewing at the library desk",{via:[.3,-2.1]}),"lib-chair":dn("library",-2,2.3,.4,"read","reading by the armchair"),"lib-shelf":dn("library",-2.4,-2.5,os,"read","browsing the shelves"),"studio-desk":dn("studio",-2,-2.38,0,"type","drafting the layout",{via:[-.6,-2.5]}),"studio-easel":dn("studio",-2.4,6.2,Ni(-2.4,6.2,-1.5,5.3),"paint","painting on the terrace",{out:!0}),"desk-frontend":dn("workshop",-3,-2.18,0,"smash","writing code",{via:[-.5,-2.45]}),"desk-backend":dn("workshop",2,-2.18,0,"type","writing code",{via:[-.5,-2.45]}),"forge-anvil":dn("forge",-3.9,3.9,Ni(-3.9,3.9,-2.9,2.9),"spar","hammering at the anvil"),"tavern-1":dn("tavern",-3.1,.8,os/2,"drink","having a drink in the tavern"),"tavern-2":dn("tavern",-1.3,.8,-os/2,"drink","having a drink in the tavern",{via:[-1,2.1]}),"tavern-3":dn("tavern",.4,5.75,0,"drink","having a drink in the beer garden",{out:!0,via:[-6.2,5]}),"tavern-bar":dn("tavern",2.9,-.8,os/2,"idle","leaning on the bar"),"yard-1":dn("yard",-3.2,.7,0,"spar","sparring in the yard"),"yard-2":dn("yard",1.6,1.8,0,"spar","sparring in the yard"),"court-bench":dn("court",-5.2,-4,0,"sit","resting on the courtyard bench"),"court-well":dn("court",-3.9,1,Ni(-3.9,1,-5.8,2),"idle","chatting by the well"),"garden-easel":dn("garden",3,-3.4,Ni(3,-3.4,2.2,-4.3),"paint","painting in the garden"),"garden-pond":dn("garden",1.4,2.4,Ni(1.4,2.4,-1,0),"idle","watching the pond")},r1=Object.fromEntries(Object.entries(Ff).map(([s,e])=>{const t=Kn[e.room],[n,i]=$i(t,e.lx,e.lz),r={...e,x:n,z:i,ry:e.lry+t.ry,...e.via?{viaW:$i(t,...e.via)}:{},anchor:(e.out?"out:":"hub:")+e.room};return[s,r]})),o1=Object.keys(Ff),vu={pts:[[-38,-28],[-12,-35],[18,-34],[40,-22],[45,4],[38,27],[12,35],[-8,35],[-30,30],[-43,6]],thick:1.6},Mu=60,yu=52,as=s=>Mu*yu/Pr(yu*ds(s),Mu*yi(s))*(1+.05*yi(3*s+.7)+.035*yi(5*s+2.1)+.02*yi(9*s)),Ic=[{kind:"hut",id:"barracks",name:"Barracks",desc:"Bunks and spare weapons.",floor:"planks",x:-35.2,z:5,ry:.42,w:6,d:4.4},{kind:"hut",id:"store",name:"Store house",desc:"Supplies for the keep: crates, sacks and barrels.",floor:"planks",x:-37.6,z:-9.5,ry:1.42,w:5,d:3.6},{kind:"hut",id:"stable",name:"Stable",desc:"Where the wolf mounts sleep.",floor:"planks",x:11.5,z:29.4,ry:-.08,w:6.4,d:3.6},{kind:"hut",id:"granary",name:"Granary",desc:"Grain and flour for the tavern.",floor:"planks",x:9.5,z:-27.5,ry:-.2,w:4.6,d:3.8},{kind:"windmill",x:35,z:13,r:2.6},{kind:"watch",x:36.5,z:-8.5,r:2},{kind:"shrine",x:-17.6,z:-28.4,r:2.8},{kind:"camp",x:-13.5,z:27.5,r:4.2}],Su=(s,e,t,n,i=0)=>Array.from({length:n},(r,o)=>[s+t*ds(i+o/n*2*os),e+t*yi(i+o/n*2*os)]),Bf=(s,e=0)=>[ds(s)*(as(s)-e),yi(s)*(as(s)-e)],a1=[[-32.4,-19.6],[-35.6,-18],[-40,-14.4],[-45.5,-12.6],[-51,-11.8],Bf(Nc(-11.4,-56),.4)],Jl=Bf(Nc(49,2.2)),l1=[{id:"main",w:4.4,kind:"cobble",pts:[[2,33.8],[2.6,28],[1.7,21],[.5,14.5],[0,10.4]]},{id:"ring",w:3.2,kind:"cobble",closed:!0,pts:Su(0,0,10,16)},{id:"war",w:3.6,kind:"flag",pts:[[-.6,-10.4],[-2.8,-13.6],"out:war"]},{id:"library",w:2.3,kind:"dirt",pts:[[7.3,-7],[11.5,-11.4],[16.4,-14.6],"out:library"]},{id:"studio",w:2.2,kind:"flag",pts:[[10.3,1.2],[15.5,2.9],[20.6,2.7],"out:studio"]},{id:"tavern",w:2.8,kind:"cobble",pts:[[2.6,21.4],[7.5,21.2],[11,19.6],"out:tavern"]},{id:"workshop",w:2.8,kind:"cobble",pts:[[-10.3,-1.4],[-14.6,-3.4],"out:workshop"]},{id:"yard",w:2.3,kind:"dirt",pts:[[-7.3,7.1],[-11.6,9.8],"entry:yard"]},{id:"garden",w:1.7,kind:"dirt",pts:[[-14.6,-3.6],[-17.6,-9.4],[-20.6,-12.8],"entry:garden"]},{id:"lib-war",w:1.6,kind:"dirt",pts:[[11.3,-11.3],[5.6,-14.6],[-1.4,-15.2],[-3.2,-14.6]]},{id:"tav-studio",w:1.5,kind:"dirt",pts:[[11,19.6],[12.6,15.8],[15,11.4],[20.4,8],[24.4,4.4]]},{id:"yard-court",w:1.8,kind:"dirt",pts:[[-11.6,9.8],[-10.2,15.4],[-5.6,20.6],[-.4,22.6]]},{id:"dock",w:3.6,kind:"dirt",nav:!1,pts:[[2,36.4],[3.2,41.5],[2.4,46.2],Jl]},{id:"pond",w:1.3,kind:"stones",closed:!0,pts:Su(-30,-20,4.3,12,.3)},{id:"to-shrine",w:1.3,kind:"dirt",nav:!1,pts:[[-20.6,-12.8],[-18.6,-19],[-17.8,-25]]},{id:"to-mill",w:1.4,kind:"dirt",nav:!1,pts:[[20.4,8],[27,9.8],[32.2,12.2]]},{id:"to-watch",w:1.3,kind:"dirt",nav:!1,pts:[[16.4,-14.6],[24,-11],[30.5,-9.4],[34.2,-8.7]]},{id:"to-barracks",w:1.4,kind:"dirt",nav:!1,pts:[[-19.5,-5.1],[-18.6,-.6],[-22,3.6],[-28.6,4.6],[-32.2,6.6]]},{id:"to-stable",w:1.6,kind:"cobble",nav:!1,pts:[[3.4,30.4],[6,30.9],[7.8,29.8]]},{id:"to-granary",w:1.2,kind:"dirt",nav:!1,pts:[[5.6,-14.6],[7.6,-20],[9,-25.2]]},{id:"to-camp",w:1.3,kind:"dirt",nav:!1,pts:[[-5.6,20.6],[-9,24.4],[-10.6,25.8]]}];function c1(s){const[e,t]=s.split(":"),n=Kn[t];if(e==="out"&&n.kind==="house")return n.outW;if(e==="entry"&&n.kind!=="house"){const i=n.entriesW[n.entriesW.length-1];if(i)return i}throw new Error(`no such road point: ${s}`)}function zf(s,e,t){const n=s.length,i=f=>{const u=e?s[(f%n+n)%n]:s[Math.max(0,Math.min(n-1,f))];if(!u)throw new Error("no points to sample");return u},r=[],o=e?n:n-1;for(let f=0;f<o;f++){const u=i(f-1),p=i(f),v=i(f+1),m=i(f+2),_=Math.max(6,Math.ceil(Pr(v[0]-p[0],v[1]-p[1])/.2));for(let y=0;y<_;y++){const C=y/_,T=C*C,U=T*C,D=(M,w,z,k)=>.5*(2*w+(-M+z)*C+(2*M-5*w+4*z-k)*T+(-M+3*w-3*z+k)*U);r.push([D(u[0],p[0],v[0],m[0]),D(u[1],p[1],v[1],m[1])])}}r.push(e?r[0]:i(n-1));const a=[r[0]];let c=0;for(let f=1;f<r.length;f++){const u=r[f-1],p=r[f];c+=Pr(p[0]-u[0],p[1]-u[1]),c>=t&&(a.push(p),c=0)}const h=r[r.length-1],d=a[a.length-1];return Pr(d[0]-h[0],d[1]-h[1])<t*.5?a[a.length-1]=h:a.push(h),e&&a.pop(),a}const Si=l1.map(s=>{const e=s.pts.map(t=>typeof t=="string"?c1(t):t);return{...s,ctrl:e,refs:s.pts.map(t=>typeof t=="string"?t:null),line:zf(e,!!s.closed,.5)}}),ia=zf(a1,!1,.5);function h1(){const s={},e=(a,c,h)=>s[a]={id:a,x:c,z:h,edges:[]},t=a=>{const c=s[a];if(!c)throw new Error(`no node ${a}`);return c},n=(a,c)=>{a===c||t(a).edges.includes(c)||(t(a).edges.push(c),t(c).edges.push(a))};for(const a of Ks)if(e(`hub:${a.id}`,...a.hubW),a.kind==="house")e(`in:${a.id}`,...a.inW),e(`out:${a.id}`,...a.outW),n(`hub:${a.id}`,`in:${a.id}`),n(`in:${a.id}`,`out:${a.id}`);else{let c=`hub:${a.id}`;a.entriesW.forEach((h,d)=>{const f=d===a.entriesW.length-1?`entry:${a.id}`:`e:${a.id}:${d}`;e(f,...h),n(c,f),c=f})}const i={},r={};for(const a of Si){if(a.nav===!1)continue;const c=[],h=a.line,d=4;for(let f=0;f<h.length;f++){if(!(!a.closed&&(f===0||f===h.length-1))&&f%d!==0)continue;const p=!a.closed&&f===0?a.refs[0]:!a.closed&&f===h.length-1?a.refs[a.refs.length-1]:null,v=p||`r:${a.id}:${f}`,m=h[f];p||e(v,m[0],m[1]);const _=c[c.length-1];_!==void 0&&n(_,v),c.push(v)}a.closed&&n(c[c.length-1],c[0]),i[a.id]=c,r[a.id]=a.closed?[]:[c[0],c[c.length-1]]}const o=(a,c,h)=>{let d=null,f=1/0;for(const[u,p]of Object.entries(i))if(u!==h)for(const v of p){const m=Pr(t(v).x-a,t(v).z-c);m<f&&(f=m,d=v)}return[d,f]};for(const a of Si)a.nav===!1||a.closed||(r[a.id]??[]).forEach((c,h)=>{if(a.refs[h===0?0:a.refs.length-1])return;const[d,f]=o(t(c).x,t(c).z,a.id);d&&f<4.5&&n(c,d)});for(const a of Ks){if(a.kind==="house")continue;const c=`entry:${a.id}`;if(Si.some(d=>d.refs.includes(c)))continue;const[h]=o(t(c).x,t(c).z,null);h&&n(c,h)}const[l]=o(...Kn.garden.hubW,"garden");return l&&l.startsWith("r:pond")&&n("hub:garden",l),s}h1();const Ln={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function u1(s,e){const t=Kn[s],n=t.kind==="house"?Math.max(t.w,t.d)*1.15+8:t.r*1.6+7,i=Math.hypot(e[0],e[1]),[r,o]=i>0?[e[0]/i,e[1]/i]:[.45,.9];return{target:[t.x,1,t.z],position:[t.x+r*n,n*.85,t.z+o*n]}}const{PI:Gt}=Math,bu=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function f1(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:v,rr:m,pick:_,tiled:y,instanced:C}=s,{FLAGS:T,SPINNERS:U,skull:D,horns:M,flame:w,anvil:z,weaponRack:k,brazier:j,poleBanner:oe,skullPole:ee,barrel:F,well:re,bench:le,stall:J,lampPost:ne,crate:ae,sack:fe,torch:we,dummy:Ze,target:nt,hay:me,easel:Ve,candle:et,plantFlora:lt,bunk:Ie,chest:ut,hangingBanner:xt,table:st,partition:_t,wolf:St,spikes:Re,cart:We,fence:$e,skullCandle:tt,tent:Qe,signPost:wt}=e,{patch:rt}=t,{buildHouse:Oe,inH:Be,outH:ke,onWall:L}=n,Xe=new qs({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),Ye=new qs({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:He,chimneyTop:Le,emberBase:Je}=(()=>{const te=Kn.forge,$=new Te;$.position.set(te.x,0,te.z),r.add($),r.add(i.forge);const de=-.6,Ee=new Te;Ee.position.set(0,.16,de),$.add(Ee),Ee.add(u(f(new ai(1,24,0,Gt),Xe,!1),0,1.05,1.705)),Ee.add(u(f(new qt(2,1.05),Xe,!1),0,.53,1.705)),Ee.add(u(f(new qt(1.4,.45),Ye,!1),0,.32,1.71));{const se=new Te;for(let he=0;he<4;he++)se.add(u(f(new Ae(.9-he*.08,.14,1.2-he*.1),he%2?o.redD:h("#5a3a2a")),0,.5+he*.16,0));se.add(u(f(new Ae(1,.08,1.3),o.wood),0,.45,0)),se.add(p(u(f(new je(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,Gt/2)),Ee.add(u(se,-2.9,0,.2))}const x=new Ji("#ff8a3a",14,16,2);x.position.set(0,1.4,2.8),Ee.add(x),Ee.updateMatrixWorld(!0);const G=Ee.localToWorld(new V(0,10.9,-.5)),K=Ee.localToWorld(new V(0,1,2));v($,z(),-2.9,2.9,Ni(-2.9,2.9,-3.9,3.9)+Gt/2,.16);{const se=new Te;se.add(u(f(new Ae(1.5,.55,.7),o.wood),0,.27,0)),se.add(p(u(f(new qt(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-Gt/2,0,0)),v($,se,3.5,3,-.5,.16)}const O=[];for(let se=0;se<40;se++)O.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:_(["#2e2a2c","#3a3538","#262224"])});C(new vi(1,0),O,{});for(let se=0;se<6;se++)$.add(u(f(new Xt(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));v($,k(4),-5.3,-2,Math.atan2(5.3,2),.16),v($,k(4),5.7,.9,-Gt/2,.16);{const se=new Te;se.add(u(f(new Ae(.9,.5,.5),o.wood),0,.25,0));const he=u(p(f(new je(.45,.45,.16,18),h("#8a8078")),0,0,Gt/2),0,.8,0);se.add(he),v($,se,-4.8,.2,.4,.16)}for(const se of[.4,2,3.9,5.2])v($,j(0),Math.cos(se)*6.9,Math.sin(se)*6.9,0,.16);return v($,oe(4),-1.9,-3.8,0,.16),v($,oe(4),1.9,-3.8,0,.16),v($,ee(2.6),6,-3.6,0,.16),v($,F(),-6,2,0,.16),{fireLight:x,chimneyTop:G,emberBase:K}})();{const te=Kn.court,$=new Te;$.position.set(te.x,0,te.z),r.add($),v($,re(),-5.8,2),v($,le(1.9,!0),-5.2,-4,0),v($,J(),6.2,1.2,-Gt/2);{const de=new Te;for(const Ee of[-1,1])de.add(u(f(new Ae(.12,2.2,.12),o.woodD),Ee*.8,1.1,0));de.add(u(f(new Ae(1.8,1.1,.08),o.wood),0,1.55,0));for(let Ee=0;Ee<6;Ee++)de.add(u(p(f(new qt(.34,.42),h(_(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+Ee%3*.6,1.8-Math.floor(Ee/3)*.5,.05));de.add(p(u(f(new Ae(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),v($,de,5.6,-5.4,-Gt/2)}v($,ne(6),-5.8,-1),v($,F(),8,-.6),v($,ae(.55),3.8,3.4,.3),v($,fe(),4.4,3),v($,ee(2.4),-7.8,6);{const de=new Te;de.add(u(f(new Ae(1.6,.5,.6),o.wood),0,.25,0)),de.add(p(u(f(new qt(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-Gt/2,0,0)),v($,de,-7.6,3.6,Gt/2)}rt("dirt",te.x-4,te.z+.5,4.4,5.6,0,.013)}{const te=Kn.yard;if(te.kind==="house")throw new Error("the yard is an open area");const $=te.gate??0,de=new Te;de.position.set(te.x,0,te.z),r.add(de),rt("sand",te.x,te.z,te.r+.6,te.r+.6,0,.014,5),de.add(i.yard);{const Ee=new Te,x=Math.cos($),G=Math.sin($);Ee.position.set(x*te.r,0,G*te.r),Ee.rotation.y=Math.atan2(x,G);for(const K of[-1,1])Ee.add(u(we(),K*1.55,2,.24));de.add(Ee),v(de,ee(2.6),x*(te.r+1.6)-G*2.2,G*(te.r+1.6)+x*2.2),v(de,ee(2.2),x*(te.r+1.6)+G*2.2,G*(te.r+1.6)-x*2.2)}v(de,Ze(),-3.2,2.1,Gt),v(de,Ze(),1.6,3.2,Gt),v(de,nt(),4.4,3.6,Math.atan2(-4.4,-3.6)),v(de,k(4),-5.4,-2.6,Math.atan2(5.4,2.6)),v(de,me(),-5.6,3.8,.4),v(de,me(),-4.8,4.7,1.2),v(de,p(me(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const Ee of[2,3.4,4.6])v(de,oe(3.4),Math.cos(Ee)*(te.r-.7),Math.sin(Ee)*(te.r-.7),Math.atan2(-Math.cos(Ee),-Math.sin(Ee)));v(de,le(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),v(de,F(),-.6,-5.8),v(de,j(0,.9),Math.cos($)*(te.r-1.2)-Math.sin($)*1.8,Math.sin($)*(te.r-1.2)+Math.cos($)*1.8)}const be={x:-30,z:-20,r:2.6,mouthA:0},ue=a.ripple;ue.wrapS=ue.wrapT=ni;const P=new gt("#1f5f8c"),S=new gt("#6fb6d2"),q=new gt("#a6d8e6"),ye="#bdb3c4",pe=te=>new An({map:ue,color:ye,vertexColors:!0,side:on,polygonOffset:!0,polygonOffsetFactor:-1-te,polygonOffsetUnits:-4-te*4}),De=new gt;function Fe(te,$,de){const Ee=Math.hypot(te-be.x,$-be.z),x=bu(1-Ee/be.r);return De.copy(S).lerp(P,x*.95),de&&De.lerp(q,de*bu((Ee-be.r)/1.2)*.45),[De.r*1.27,De.g*1.27,De.b*1.27]}const Se=2.2;{const Ee=[],x=[],G=[],K=[],O=(b,ie)=>{Ee.push(b,.045,ie),x.push(...Fe(b,ie,0)),G.push(b/Se,ie/Se)};O(be.x,be.z);for(let b=1;b<=5;b++)for(let ie=0;ie<72;ie++){const X=ie/72*2*Gt,g=be.r*b/5;O(be.x+Math.cos(X)*g,be.z+Math.sin(X)*g)}for(let b=0;b<72;b++)K.push(0,1+(b+1)%72,1+b);for(let b=1;b<5;b++)for(let ie=0;ie<72;ie++){const X=1+(b-1)*72+ie,g=1+(b-1)*72+(ie+1)%72,E=X+72,W=g+72;K.push(X,g,E,g,W,E)}const se=new jt;se.setAttribute("position",new Rt(Ee,3)),se.setAttribute("color",new Rt(x,3)),se.setAttribute("uv",new Rt(G,2)),se.setIndex(K),r.add(f(se,pe(0),!1));const he=ia,ze=he[0],dt=Math.hypot(ze[0]-be.x,ze[1]-be.z),vt=(ze[0]-be.x)/dt,ot=(ze[1]-be.z)/dt;be.mouthA=Math.atan2(ot,vt);const Tt=[];for(let b=be.r-1.2;b<dt-.2;b+=.3)Tt.push([be.x+vt*b,be.z+ot*b]);Tt.push(...he);const Mt=.7,Ke=be.r*be.r,ft=Math.sqrt(Ke-1.5*1.5),Zt=be.r+.8,un=-(ft/1.5)*(Zt-ft),fn=b=>{const ie=Tt[b],X=Math.hypot(ie[0]-be.x,ie[1]-be.z);if(X<=ft)return Math.sqrt(Math.max(0,Ke-X*X))-.02;if(X>=Zt)return Mt;const g=(X-ft)/(Zt-ft),E=g*g,W=E*g;return(2*W-3*E+1)*1.48+(W-2*E+g)*un+(-2*W+3*E)*Mt},A=[],N=[],R=[],I=[],Q=[-1,-.5,0,.5,1];for(let b=0;b<Tt.length;b++){const ie=Tt[Math.max(0,b-1)],X=Tt[Math.min(Tt.length-1,b+1)],g=Tt[b],E=Math.hypot(X[0]-ie[0],X[1]-ie[1])||1,W=-(X[1]-ie[1])/E,B=(X[0]-ie[0])/E,Z=fn(b);for(const ge of Q){const Pe=g[0]+W*ge*Z,xe=g[1]+B*ge*Z;A.push(Pe,.05,xe),N.push(...Fe(Pe,xe,Math.abs(ge))),R.push(Pe/Se,xe/Se)}if(b>0)for(let ge=0;ge<4;ge++){const Pe=(b-1)*5+ge,xe=Pe+1,Ne=b*5+ge,qe=Ne+1;I.push(Pe,Ne,xe,xe,Ne,qe)}}const ce=new jt;ce.setAttribute("position",new Rt(A,3)),ce.setAttribute("color",new Rt(N,3)),ce.setAttribute("uv",new Rt(R,2)),ce.setIndex(I),r.add(f(ce,pe(1),!1));const H=[];for(let b=1;b<Tt.length-1;b+=2){const ie=Tt[b];if(Math.hypot(ie[0]-be.x,ie[1]-be.z)<be.r+.9)continue;const X=Tt[b-1],g=Tt[b+1],E=Math.hypot(g[0]-X[0],g[1]-X[1])||1,W=-(g[1]-X[1])/E,B=(g[0]-X[0])/E,Z=fn(b)+.16;for(const ge of[-1,1])H.push({x:ie[0]+W*ge*Z,y:.06,z:ie[1]+B*ge*Z,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:_(["#8d837a","#80766e","#968b81","#6e665f"])})}C(new vi(1,0),H,{})}for(const te of t.crossings){const $=i.bridge.clone();$.position.set(te.x,0,te.z),$.rotation.y=te.ang,$.scale.x=(te.len+.6)/3.4,r.add($)}{const te=Kn.garden;if(te.kind==="house")throw new Error("the garden is an open area");const $=new Te;$.position.set(te.x,0,te.z),r.add($);const de=Math.atan2(4.6,5.6);$.add(i.garden);{const O=Math.cos(de)*te.r,se=Math.sin(de)*te.r,he=new Te;he.position.set(O,0,se),he.rotation.y=Math.atan2(Math.cos(de),Math.sin(de)),he.add(u(ne(0).children[2].clone(),0,2.6,0)),$.add(he)}const Ee=[],x=[];for(let O=0;O<26;O++){const se=O/26*2*Gt;let he=Math.abs(se-be.mouthA);he=Math.min(he,2*Gt-he),!(he<.62)&&Ee.push({x:be.x+Math.cos(se)*2.75,y:.08,z:be.z+Math.sin(se)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:_(["#8d837a","#80766e","#968b81"])})}for(let O=0;O<7;O++)x.push({x:be.x+m(-1.6,1.6),y:.065,z:be.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:_(["#5f8a4a","#6e9452"])});C(new vi(1,0),Ee,{}),C(new je(.22,.22,.02,12),x,{}),v($,Ve(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),v($,le(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[O,se]of[[-5.6,-2.2],[4.9,-.6]]){const he=new Te;he.add(u(f(new je(.22,.28,.9,6),o.stone),0,.45,0)),he.add(u(f(new Ae(.5,.36,.5),o.stone),0,1.08,0)),he.add(u(f(new Ae(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),he.add(u(f(new mn(.48,.36,4),o.redD),0,1.44,0)),v($,he,O,se,Gt/4)}{const O=new Te;O.add(u(f(new Ae(.9,.6,.6),o.stone),0,.3,0)),O.add(u(D(.26),0,.75,0));for(const se of[-1,1])O.add(u(et(.18),se*.3,.6,.12));v($,O,-4.4,-5.4,Math.atan2(4.4,5.4))}lt("tree_willow",1,te.x-6.2,te.z-2.8),lt("tree_cherry",.95,te.x+5.3,te.z-4.9),lt("tree_fruit",.85,te.x-3,te.z+6.2);const G=[];let K=0;for(;G.length<90&&K<4e3;){K++;const O=m(0,2*Gt),se=m(5.3,6.7),he=Math.cos(O)*se,ze=Math.sin(O)*se;Math.min(Math.abs(O-de),2*Gt-Math.abs(O-de))<.35||Math.hypot(he-3,ze+3.4)<1.3||Math.hypot(he-2.2,ze+4.3)<1||G.push({x:te.x+he,y:.18,z:te.z+ze,sx:.9,sy:.9,sz:.9,c:_([l.red,l.bone,"#d98a3a",l.redL,"#e8c860"])})}C(new Xt(.11,8,6),G,{})}const Me=y(a.water,1,6),Ce=[];{const te=ia,[$,de]=te[te.length-1],[Ee,x]=te[te.length-3],G=Math.hypot($-Ee,de-x),K=($-Ee)/G,O=(de-x)/G,se=new Ut(new qt(1.4,40),new An({map:Me,color:"#acb5c8",transparent:!0,opacity:.85,side:on,depthWrite:!1}));se.position.set($+K*.9,-20+.05,de+O*.9),se.rotation.y=Math.atan2(K,O),r.add(se);const he=new zs({map:a.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let ze=0;ze<9;ze++){const dt=new cs(he);dt.position.set($+K*m(1,2.4),m(-38,-30),de+O*m(1,2.4)+m(-1,1)),dt.scale.setScalar(m(3,5.5)),r.add(dt),Ce.push(dt)}for(let ze=0;ze<4;ze++){const dt=new cs(he);dt.position.set($+K*1,m(-.6,.3),de+O*1+m(-.5,.5)),dt.scale.setScalar(m(1,1.6)),r.add(dt),Ce.push(dt)}}for(const te of Ic)if(te.kind==="hut"){const $=Oe({...te,wallH:2.5},{id:te.id,pitch:.66,chimney:te.id==="barracks"?[1.4,-.6]:null});if(te.id==="barracks"&&(Be($,Ie(),-1.6,-.9),Be($,Ie(),.4,-.9),Be($,ut(),2.2,-1.6,-Gt/2),Be($,j(0,.7),2.3,1.2),L($,"W",k(3),0,Dt,.3),L($,"S",xt(.8,1.3),1.6,Dt+2.3,.04)),te.id==="store"){Be($,st(1.6,.6,.9,o.wood),-1.2,-1.3);for(let de=0;de<4;de++)Be($,ae(.45),-1.8+de*.4,-1.3).position.y=Dt+.95;Be($,F(),1.6,-1.2),Be($,F(.9),1.9,-.4),Be($,fe(),.6,-1.3),Be($,fe(),1,.6),Be($,ae(.6),-1.8,.8,.3)}if(te.id==="stable"){const de=f(new qt(te.w-.6,te.d-.6),o.straw,!1);de.rotation.x=-Gt/2,Be($,de,0,0).position.y=Dt+.01;for(const Ee of[-1,1.2])Be($,_t(2.2,1.1),Ee,-.6);Be($,St(),-2.2,-.3,.4),Be($,St(),.1,-.5,-.5).scale.setScalar(.9),Be($,me(),2.4,-1,.2);{const Ee=new Te;Ee.add(u(f(new Ae(1.2,.4,.45),o.wood),0,.2,0)),Ee.add(p(u(f(new qt(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-Gt/2,0,0)),Be($,Ee,2.2,1)}}if(te.id==="granary"){for(let de=0;de<6;de++)Be($,fe(),-1.4+de%3*.5,-1.2+Math.floor(de/3)*.55);Be($,F(),1.5,-1.1);{const de=f(new Ae(1.2,.8,.8),o.wood);de.position.y=.4;const Ee=new Te;Ee.add(de),Ee.add(u(f(new Ae(1.1,.05,.7),o.straw),0,.78,0)),Be($,Ee,1.2,.7)}}te.id==="barracks"&&(ke($,k(4),-1.4,3.3),ke($,Re(2.6),3.8,3,.6),ke($,oe(3),3.6,.6),ke($,ee(2.4),-3.8,2.4)),te.id==="store"&&(ke($,ae(.7),-1.6,2.8,.2),ke($,ae(.5),-.9,3.1,.7),ke($,fe(),.6,2.9),ke($,fe(),1.1,3.2),ke($,F(),2.3,2.9)),te.id==="stable"&&(ke($,me(),-2.8,2.6,.3),ke($,me(),-2,3,1.1),ke($,We(),2,3.4,-.3),$e($.g,[[-3.2,4.4],[3.2,4.4]],.9)),te.id==="granary"&&(ke($,fe(),-1.2,2.6),ke($,fe(),-.6,2.9),ke($,fe(),-1,3.3),ke($,F(.9),1.6,2.7))}else if(te.kind==="windmill"){const $=new Te;$.position.set(te.x,0,te.z),$.add(u(f(new je(1.7,2.4,6.6,18),h("#ffffff",{map:y(a.castleWall,3,2.2)})),0,3.3,0)),$.add(u(f(new mn(2.3,2.8,18),h("#ffffff",{map:y(a.roof,4,1.5)})),0,7.9,0)),$.add(u(f(new Ae(1,1.7,.2),o.woodD),0,.85,2.25));for(const[Ee,x]of[[.6,3.6],[-.9,4.8]])$.add(u(p(f(new Ae(.5,.6,.1),o.pane,!1),0,Ee,0),Math.sin(Ee)*2,x,Math.cos(Ee)*2));const de=u(new Te,0,6.2,2);de.add(p(f(new je(.22,.22,.5,10),o.woodD),Gt/2,0,0));for(let Ee=0;Ee<4;Ee++){const x=new Te;x.rotation.z=Ee*Gt/2,x.add(u(f(new Ae(.12,4.4,.08),o.woodD),0,2.3,.2)),x.add(u(f(new Ae(.9,3.4,.04),h("#e3d5b6",{side:on})),.5,2.6,.24)),x.add(u(f(new Ae(.06,3.4,.06),o.wood),.95,2.6,.26)),de.add(x)}$.add(de),U.push({o:de,axis:"z",v:.5}),$.add(u(fe(),-1.6,0,2.6)),$.add(u(fe(),-2.2,0,2.2)),r.add($)}else if(te.kind==="watch"){const $=new Te;$.position.set(te.x,0,te.z),$.add(i.watch),$.add(u(j(0,.7),.6,6.5,-.6)),r.add($)}else if(te.kind==="shrine"){const $=new Te;$.position.set(te.x,0,te.z),$.add(i.altar);for(const de of[.9,2.5,4.1,5.6])$.add(u(tt(),Math.cos(de)*1.4,0,Math.sin(de)*1.4));$.add(u(j(0,.8),1.6,0,1.4)),r.add($),rt("dirt",te.x,te.z,3.4,3.4,0,.013)}else{const $=new Te;$.position.set(te.x,0,te.z),$.add(u(p(Qe(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),$.add(u(p(Qe(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let de=0;de<8;de++){const Ee=de/8*2*Gt;$.add(u(f(new vi(.18,0),o.stone),Math.cos(Ee)*.55,.1,Math.sin(Ee)*.55))}for(let de=0;de<3;de++)$.add(p(u(f(new je(.07,.07,.8,6),o.woodD),0,.12,0),Gt/2,de*1.05,0));w($,0,.12,0,1.8);for(const de of[.6,2.4,4.4])$.add(u(p(f(new je(.2,.2,1.4,8),o.wood),0,-de,Gt/2),Math.cos(de)*1.6,.2,Math.sin(de)*1.6));$.add(u(ee(2.4),-3.2,0,-1.2)),$.add(u(F(),3.1,0,-.8)),r.add($),rt("dirt",te.x,te.z,4.2,4,0,.013)}function Y(te,$,de,Ee=.018,x=o.dark){const G=new V(...$),K=new V(...de),O=G.distanceTo(K),se=f(new je(Ee,Ee,O,5),x,!1);return se.position.copy(G).add(K).multiplyScalar(.5),se.quaternion.setFromUnitVectors(c,K.clone().sub(G).normalize()),te.add(se),se}function ve(){const te=new Te,$=f(new Xt(1,22,12,0,Gt*2,Gt/2,Gt/2),h("#ffffff",{map:a.planks}));$.scale.set(2.7,1,1.15),te.add($);const de=f(new je(1,1,.1,24),o.woodL);de.scale.set(2.62,1,1.1),te.add(u(de,0,.02,0));const Ee=f(new pn(1,.06,6,36),o.woodD);Ee.rotation.x=Gt/2,Ee.scale.set(2.68,1.13,1),Ee.position.y=.14,te.add(Ee),te.add(p(u(f(new je(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),te.add(u(p(D(.32),0,Gt/2,0),2.75,.32,0)),te.add(u(p(M(.8),0,Gt/2,0),2.75,.42,0)),te.add(u(f(new je(.07,.09,2.8,8),o.woodD),.3,1.4,0));const x=u(new Te,.3,2.85,0);x.add(u(f(new Ae(.9,.36,.02),o.red),.45,0,0)),te.add(x),T.push(x);const G=u(new Te,-1.5,.06,0);G.add(u(f(new Ae(1.1,.8,1.1),h("#ffffff",{map:a.planks})),0,.4,0)),G.add(u(p(f(new je(.75,.75,1.3,3),h("#ffffff",{map:a.roof})),0,0,Gt/2),0,1.05,0)),G.add(u(f(new Ae(.3,.3,.04),o.pane,!1),.56,.5,0)),te.add(G);const K=f(new Xt(1,24,16),h("#ffffff",{map:a.balloon}));K.scale.set(3.6,1.5,1.7),K.position.y=4.4,te.add(K);const O=f(new pn(1,.05,6,40),o.bone);O.rotation.x=Gt/2,O.scale.set(3.62,1.72,1),O.position.y=4.1,te.add(O);for(const[he,ze,dt,vt]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])Y(te,[he,4.05,ze],[dt,.16,vt]);const se=u(new Te,-2.95,.65,0);se.add(p(f(new je(.1,.1,.3,8),o.iron),0,0,Gt/2));for(let he=0;he<3;he++){const ze=u(new Te,0,0,0);ze.rotation.x=he/3*Gt*2,ze.add(u(p(f(new Ae(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),se.add(ze)}te.add(se),U.push({o:se,axis:"x",v:7}),te.add(u(f(new Ae(.06,.9,.7),o.redD),-2.75,.1,0));for(const he of[2.4,-2.4])te.add(u(f(new Xt(.1,8,6),d("#ffc070",2.2),!1),he,.5,0));return te.add(u(ae(.45),1.3,.07,.4)),te.add(u(F(.6),1.2,.07,-.45)),te}const _e=ve(),Ge=ve();{const te=Si.find(vt=>vt.id==="dock");if(!te)throw new Error("no dock road");const $=te.line,[de,Ee]=$[$.length-1],[x,G]=$[$.length-4],K=Math.hypot(de-x,Ee-G),O=(de-x)/K,se=(Ee-G)/K,he=new Te;he.position.set(de,0,Ee),he.rotation.y=Math.atan2(O,se),r.add(he),he.add(i.dock),he.add(u(ae(.55),2.8,1.17,6.8));for(const[vt,ot]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])he.add(u(f(new Xt(.12,8,6),d("#ffc070",2.2),!1),vt,1.32,ot));he.add(u(ae(.6),-.85,.22,1.3)),he.add(u(ae(.45),-.75,.22,2)),he.add(u(F(.85),.85,.22,1)),he.add(u(fe(),.6,.22,3.6)),he.add(u(oe(3.4),-1.45,.22,.4)),_e.position.set(4.1,-.4,5.6),_e.rotation.y=-Gt/2,he.add(_e);const ze=f(new Ae(1.6,.08,.7),o.woodL);ze.position.set(2.3,.05,5.6),ze.rotation.z=-.18,he.add(ze);const dt=u(new Te,-4.6,0,-3.8);dt.add(u(we(),-.2,1.6,1.3)),dt.add(u(ae(.6),1.9,0,.8)),dt.add(u(F(),1.8,0,-.4)),he.add(dt),he.add(u(p(wt("SKY DOCK"),0,Gt/2,0),2.2,0,-2.4)),r.add(Ge),Ge.scale.setScalar(1.5),Ge.userData={a:1.2,r:96,y:15}}{const te=new Te;te.position.set(-44,0,26),r.add(te);for(const[$,de,Ee]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])te.add(u(p(Qe(1.8,2.6,Ee),0,Math.atan2(-$,-de),0),$,0,de));for(let $=0;$<8;$++){const de=$/8*2*Gt;te.add(u(f(new vi(.18,0),o.stone),Math.cos(de)*.55,.1,Math.sin(de)*.55))}w(te,0,.1,0,1.8),te.add(u(ee(2.6),3.6,0,1.8)),te.add(u(oe(3),-3.6,0,1.6)),te.add(u(p(Re(3),0,.6,0),4.6,0,-2.6)),rt("dirt",-44,26,5,4.6,.3,.013)}return rt("field",54,-8,6.5,4.2,.35,.013,3),rt("field",51,6,5.2,3.6,-.2,.013,3),rt("field",10,-44.5,6,3.6,.1,.013,3),v(r,Ze(),55.5,-2.6,.4),v(r,me(),48.6,-12.6,.4),v(r,me(),49.4,-11.8,1.3),{mouthMat:Xe,coreMat:Ye,fireLight:He,chimneyTop:Le,emberBase:Je,waterTex:ue,fallTex:Me,mists:Ce,skyBoat:_e,airship:Ge}}const d1=[3,5,7,9,11];function p1(s){const e=[];for(let t=0;t<s;t++)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return new zn({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}const m1=`

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

		}`,g1=`varying vec2 vUv;
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
				}`;function _1(s){s.separableBlurMaterials.forEach((e,t)=>{e.dispose(),s.separableBlurMaterials[t]=p1(d1[t]??3)}),s.materialHighPassFilter.fragmentShader=m1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=g1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}const mr=new V;function Qn(s,e,t,n,i,r){const o=2*Math.PI*i/4,l=Math.max(r-2*i,0),a=Math.PI/4;mr.copy(e),mr[n]=0,mr.normalize();const c=.5*o/(o+l),h=1-mr.angleTo(s)/a;return Math.sign(mr[t])===1?h*c:l/(o+l)+c+c*(1-h)}class pa extends Ae{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const a=new V,c=new V,h=new V(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,v=new V,m=.5/o;for(let _=0,y=0;_<d.length;_+=3,y+=2)switch(a.fromArray(d,_),c.copy(a),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[_+0]=h.x*Math.sign(a.x)+c.x*r,d[_+1]=h.y*Math.sign(a.y)+c.y*r,d[_+2]=h.z*Math.sign(a.z)+c.z*r,f[_+0]=c.x,f[_+1]=c.y,f[_+2]=c.z,Math.floor(_/p)){case 0:v.set(1,0,0),u[y+0]=Qn(v,c,"z","y",r,n),u[y+1]=1-Qn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),u[y+0]=1-Qn(v,c,"z","y",r,n),u[y+1]=1-Qn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),u[y+0]=1-Qn(v,c,"x","z",r,e),u[y+1]=Qn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[y+0]=1-Qn(v,c,"x","z",r,e),u[y+1]=1-Qn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[y+0]=1-Qn(v,c,"x","y",r,e),u[y+1]=1-Qn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),u[y+0]=Qn(v,c,"x","y",r,e),u[y+1]=1-Qn(v,c,"y","x",r,t);break}}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.segments,e.radius)}}const x1="/assets/m-plus-rounded-1c-latin-800-normal-941enk6N.woff2",{PI:Di}=Math,$l='"M PLUS Rounded 1c", "Inter Variable", sans-serif';async function v1(){const s=new FontFace("M PLUS Rounded 1c",`url("${x1}")`,{weight:"800"});try{await s.load(),document.fonts.add(s)}catch{}}const On={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function M1(s,e,t,n){s.setPixelRatio(Math.min(n,2)),s.setSize(e,t),s.shadowMap.enabled=!0,s.shadowMap.type=br,s.toneMapping=ra,s.toneMappingExposure=.95}function wu(s){let e=s;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function y1(s,e){const t=new la(new Uint8Array([70,150,255]),3,1,oa);t.minFilter=t.magFilter=_n,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new An({color:2824987,side:Dn}),i=0,r=1,o=new V(0,1,0),l={uRimColor:{value:new gt("#ffd2a6")},uRimAmt:{value:.45}};function a(x){return x.onBeforeCompile=G=>{G.uniforms.uRimColor=l.uRimColor,G.uniforms.uRimAmt=l.uRimAmt,G.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+G.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},x.customProgramCacheKey=()=>"rim1",x}const c=new Map;function h(x,G){if(!G){let K=c.get(x);return K||(K=a(new Go({color:x,gradientMap:t})),c.set(x,K)),K}return a(new Go(Object.assign({color:x,gradientMap:t},G)))}const d=new Map;function f(x,G=2){const K=x+G;let O=d.get(K);return O||(O=new qs({color:0,emissive:x,emissiveIntensity:G,roughness:1}),d.set(K,O)),O}function u(x,G,K=!0){G&&G.userData.autoUV&&x.attributes.uv&&!x.userData.planar&&(x.type==="BoxGeometry"||x.type==="RoundedBoxGeometry")&&(j(x,.9),x.userData.planar=!0);const O=new Ut(x,G);return O.castShadow=K,O.receiveShadow=!0,O}const p=(x,G,K,O=.03)=>new pa(x,G,K,2,Math.min(O,x/2.1,G/2.1,K/2.1));function v(x,G,K=i,O=!0){const se=u(x,G,O);if(K){const he=new Ut(x,n);he.scale.setScalar(1+K*r),he.raycast=()=>{},se.add(he)}return se}function m(x,G,K,O){return x.position.set(G,K,O),x}function _(x,G,K,O){return x.rotation.set(G,K,O),x}function y(x,G,K,O,se=0,he=0){return G.position.set(K,he,O),G.rotation.y=se,x.add(G),G}function C(x,G,K,O,se,he,ze=i*1.6,dt=7){const vt=K.clone().normalize(),ot=v(new mn(se,O,dt),he,ze);return ot.quaternion.setFromUnitVectors(o,vt),ot.position.copy(G).addScaledVector(vt,O*.45),x.add(ot),ot}const T=wu(20261116),U=(x,G)=>x+(G-x)*T(),D=x=>x[Math.floor(T()*x.length)],M=wu(777),w=(x,G)=>x+(G-x)*M();function z(x,G,K,O){const se=document.createElement("canvas");se.width=x,se.height=G;const he=se.getContext("2d");he&&K(he,x,G);const ze=new Vl(se);return ze.colorSpace=Mn,ze.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),ze.wrapS=ze.wrapT=ni,O&&ze.repeat.set(O[0],O[1]),ze}function k(x,G,K){const O=x.clone();return O.wrapS=O.wrapT=ni,O.repeat.set(G,K),O.needsUpdate=!0,O}function j(x,G=1,K=G){const O=x.attributes.position,se=x.attributes.normal,he=x.attributes.uv;for(let ze=0;ze<O.count;ze++){const dt=Math.abs(se.getX(ze)),vt=Math.abs(se.getY(ze)),ot=Math.abs(se.getZ(ze));let Tt,Mt;vt>=dt&&vt>=ot?(Tt=O.getX(ze),Mt=O.getZ(ze)):dt>=ot?(Tt=O.getZ(ze),Mt=O.getY(ze)):(Tt=O.getX(ze),Mt=O.getY(ze)),he.setXY(ze,Tt/G,Mt/K)}return he.needsUpdate=!0,x}function oe(x,G,K,O=0,se=G){const he=x.attributes.position,ze=x.attributes.normal,dt=x.attributes.uv;for(let vt=0;vt<he.count;vt++){const ot=Math.abs(ze.getX(vt)),Tt=Math.abs(ze.getZ(vt)),Mt=(ot>Tt?he.getZ(vt):he.getX(vt))/K;dt.setXY(vt,Mt,(he.getY(vt)+G/2+O)/se)}return dt.needsUpdate=!0,x}const ee=new Ct,F=new Vn,re=new bi,le=new V,J=new V,ne=new gt;function ae(x,G,K={}){if(!G.length)return null;const O=K.mat||a(new Go({color:16777215,gradientMap:t})),se=new kr(x,O,G.length);return se.castShadow=!!K.cast,se.receiveShadow=K.receive!==!1,G.forEach((he,ze)=>{he.m?ee.copy(he.m):(re.set(he.rx||0,he.ry||0,he.rz||0),F.setFromEuler(re),le.set(he.x??0,he.y??0,he.z??0),J.set(he.sx??1,he.sy??1,he.sz??1),ee.compose(le,F,J)),se.setMatrixAt(ze,ee),(!K.mat||K.colors)&&se.setColorAt(ze,ne.set(he.c||"#ffffff"))}),se.instanceMatrix.needsUpdate=!0,se.instanceColor&&(se.instanceColor.needsUpdate=!0),se.computeBoundingSphere(),(K.parent||e).add(se),se}const fe=new Ae(1,1,1);function we(x,G,K,O=!0){return K.length?ae(fe,K.map(([se,he,ze,dt,vt,ot,Tt=0,Mt=0,Ke=0])=>({x:se,y:he,z:ze,sx:dt,sy:vt,sz:ot,rx:Tt,ry:Mt,rz:Ke})),{mat:G,parent:x,cast:O}):null}function Ze(x,G,K,O,se,he,ze,dt){for(let vt=0;vt<se;vt++){const ot=w(0,G),Tt=w(0,K),Mt=w(he,ze);for(const[Ke,ft]of[[0,0],[G,0],[-G,0],[0,K],[0,-K]]){const Zt=x.createRadialGradient(ot+Ke,Tt+ft,0,ot+Ke,Tt+ft,Mt),un=O[Math.floor(M()*O.length)];Zt.addColorStop(0,un+dt),Zt.addColorStop(1,un+"00"),x.fillStyle=Zt,x.fillRect(ot+Ke-Mt,Tt+ft-Mt,Mt*2,Mt*2)}}}function nt(x,G,K,O=.16){x.globalCompositeOperation="destination-in";const se=x.createLinearGradient(0,0,G,0);se.addColorStop(0,"rgba(0,0,0,0)"),se.addColorStop(O,"rgba(0,0,0,1)"),se.addColorStop(1-O,"rgba(0,0,0,1)"),se.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=se,x.fillRect(0,0,G,K),x.globalCompositeOperation="source-over"}function me(x,G,K,O,se,he,ze,dt,vt,ot,Tt){for(let Mt=K;Mt<se;Mt+=he){let Ke=G-w(0,dt);for(;Ke<O;){const ft=w(ze,dt);x.fillStyle=vt[Math.floor(M()*vt.length)],x.beginPath(),x.roundRect(Ke+ot,Mt+ot,ft-ot*2,he-ot*2,Tt),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(Ke+ot*2,Mt+ot*1.5,ft-ot*4,3),Ke+=ft}}}function Ve(x,G,K,O,se,he,ze,dt,vt){const ot=K/O;for(let Tt=0;Tt<O;Tt++){const Mt=Tt*ot;let Ke=w(0,he);const ft=Ke;for(;Ke<ft+G;){const Zt=Math.min(w(se,he),ft+G-Ke);if(Zt<se*.5)break;const un=ze[Math.floor(M()*ze.length)];for(const fn of[0,-G])x.fillStyle=un,x.beginPath(),x.roundRect(Ke+fn+dt,Mt+dt,Zt-dt*2,ot-dt*2,vt),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(Ke+fn+dt*2,Mt+dt*1.5,Zt-dt*4,3);Ke+=Zt}}}function et(x,G,K,O){for(let se=0;se<8;se++){let he=-w(0,200);for(;he<G;){const ze=w(160,340);x.fillStyle=O[Math.floor(M()*O.length)],x.fillRect(he,se*64,ze,64),x.strokeStyle="rgba(255, 230, 200, 0.06)",x.lineWidth=2;for(let dt=0;dt<3;dt++){const vt=se*64+w(10,54);x.beginPath(),x.moveTo(he+6,vt),x.bezierCurveTo(he+ze*.3,vt+w(-4,4),he+ze*.6,vt+w(-4,4),he+ze-6,vt),x.stroke()}x.fillStyle="rgba(20, 10, 6, 0.4)",x.fillRect(he,se*64,3,64),x.fillStyle="rgba(20, 10, 6, 0.35)",x.beginPath(),x.arc(he+10,se*64+14,2.5,0,Di*2),x.arc(he+10,se*64+50,2.5,0,Di*2),x.fill(),he+=ze}x.fillStyle="rgba(20, 10, 6, 0.45)",x.fillRect(0,se*64,G,3)}}const lt=(x,G,K)=>{const O=x.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,G),O.addColorStop(1,K),x.fillStyle=O,x.fillRect(0,0,64,64)},Ie=z(512,512,(x,G,K)=>{x.fillStyle="#6f8b49",x.fillRect(0,0,G,K),Ze(x,G,K,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let O=0;O<900;O++){x.strokeStyle=M()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",x.lineWidth=2;const se=w(0,G),he=w(0,K);x.beginPath(),x.moveTo(se,he),x.lineTo(se+w(-2,2),he-w(5,10)),x.stroke()}}),ut=z(256,256,(x,G,K)=>{x.fillStyle="#8b6a4b",x.fillRect(0,0,G,K),Ze(x,G,K,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let O=0;O<120;O++)x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",x.beginPath(),x.ellipse(w(0,G),w(0,K),w(1.5,4),w(1,3),w(0,3),0,Di*2),x.fill()}),xt=z(256,256,(x,G,K)=>{x.fillStyle="#b0906a",x.fillRect(0,0,G,K),Ze(x,G,K,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let O=0;O<160;O++)x.fillStyle="rgba(120, 90, 60, 0.25)",x.fillRect(w(0,G),w(0,K),2,2)}),st=z(512,512,(x,G,K)=>{x.fillStyle="#5b524c",x.fillRect(0,0,G,K),Ve(x,G,K,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),_t=z(512,512,(x,G,K)=>{x.fillStyle="#6a6058",x.fillRect(0,0,G,K),Ve(x,G,K,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),St=z(512,512,(x,G,K)=>{x.fillStyle="#8f6c4b",x.fillRect(0,0,G,K),Ze(x,G,K,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let O=0;O<260;O++){const se=w(6,G-6),he=w(6,K-6);x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",x.beginPath(),x.ellipse(se,he,w(1.5,4),w(1,3),0,0,Di*2),x.fill()}}),Re=z(256,512,(x,G,K)=>{const O=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let se=0;for(const[he,ze]of O)x.fillStyle=he,x.fillRect(0,se,G,ze*K+2),se+=ze*K;Ze(x,G,K,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let he=0;he<40;he++){x.strokeStyle="rgba(40, 26, 18, 0.35)",x.lineWidth=2;const ze=w(0,G),dt=w(.15*K,K);x.beginPath(),x.moveTo(ze,dt),x.lineTo(ze+w(-10,10),dt+w(10,40)),x.stroke()}x.fillStyle="#5a7a44";for(let he=0;he<G;he+=6)x.beginPath(),x.moveTo(he,0),x.lineTo(he+3,w(14,34)),x.lineTo(he+6,0),x.fill()}),We=z(256,128,(x,G,K)=>{x.fillStyle="#7a2420",x.fillRect(0,0,G,K);for(let O=0;O<8;O++)x.fillStyle=O%2?"#8a2a24":"#6a1e1a",x.fillRect(O*32,0,32,K);x.fillStyle="#e3d5b6",x.fillRect(0,K*.46,G,K*.08),x.fillStyle="#2a2224",x.fillRect(0,K*.43,G,3),x.fillRect(0,K*.57,G,3)}),$e=z(256,256,(x,G,K)=>{for(let O=0;O<2;O++)x.fillStyle=["#a59a8c","#958a7d"][O],x.beginPath(),x.ellipse(G/2+w(-20,20),K*(.25+O*.5),G*.32,K*.17,w(-.3,.3),0,Di*2),x.fill()}),tt=z(512,512,(x,G,K)=>{x.fillStyle="#5f5650",x.fillRect(0,0,G,K),me(x,0,0,G,K,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),Qe=z(512,512,(x,G,K)=>et(x,G,K,["#5a3a2a","#4e3224","#62402e","#553728"])),wt=z(512,512,(x,G,K)=>et(x,G,K,["#4a3226","#553a2b","#3f2a20","#4e3428"])),rt=z(512,512,(x,G,K)=>et(x,G,K,["#a17a55","#94704d","#ab845e","#9a7552"])),Oe=z(512,512,(x,G,K)=>et(x,G,K,["#7a5236","#6e4a31","#84593b","#734d33"])),Be=z(512,512,(x,G,K)=>{x.fillStyle="#3f3a3a",x.fillRect(0,0,G,K);for(let O=0;O<4;O++)for(let se=0;se<4;se++)x.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(se+O*3)%4],x.beginPath(),x.roundRect(se*128+4,O*128+4,120,120,6),x.fill(),x.fillStyle="rgba(255,255,255,0.05)",x.fillRect(se*128+10,O*128+10,108,6)}),ke=z(512,512,(x,G,K)=>{x.fillStyle="#4f4843",x.fillRect(0,0,G,K),me(x,0,0,G,K,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),L=z(512,512,(x,G,K)=>{x.fillStyle="#4a433f",x.fillRect(0,0,G,K),me(x,0,0,G,K,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),Ze(x,G,K,["#3e5a34","#4a3a30"],14,20,60,"30")}),Xe=z(512,512,(x,G,K)=>{for(let O=0;O<8;O++)x.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][O%4],x.fillRect(O*64,0,64,K),x.fillStyle="rgba(25, 14, 10, 0.45)",x.fillRect(O*64,0,3,K),x.fillStyle="rgba(255, 220, 190, 0.05)",x.fillRect(O*64+8,0,3,K);x.fillStyle="#7a2320",x.fillRect(0,34,G,70),x.strokeStyle="#d9c9a6",x.lineWidth=6,x.lineJoin="round",x.beginPath();for(let O=0;O<=G;O+=32)x.lineTo(O,O%64?52:86);x.stroke()}),Ye=z(256,256,(x,G,K)=>{x.fillStyle="#4e1612",x.fillRect(0,0,G,K);for(let O=0;O<8;O++){const se=O%2?16:0;for(let he=-32;he<G+32;he+=32)x.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(M()*4)],x.beginPath(),x.roundRect(he+se+1,O*32+2,30,30,[2,2,12,12]),x.fill(),x.fillStyle="rgba(255, 200, 170, 0.12)",x.fillRect(he+se+5,O*32+5,22,3);x.fillStyle="rgba(30, 6, 6, 0.35)",x.fillRect(0,O*32,G,3)}}),He=z(256,256,(x,G,K)=>{for(let O=0;O<4;O++)x.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][O],x.fillRect(O*64,0,64,K),x.fillStyle="rgba(20, 8, 6, 0.45)",x.fillRect(O*64,0,3,K)}),Le=z(256,512,(x,G,K)=>{x.fillStyle="#6e1a19",x.fillRect(0,0,G,K),x.fillStyle="#2a1e1f",x.fillRect(0,0,G,26),x.fillRect(0,0,14,K),x.fillRect(G-14,0,14,K),x.fillStyle="#b08a3e",x.fillRect(0,26,G,6),x.fillStyle="#e3d5b6",x.beginPath(),x.moveTo(52,300),x.lineTo(204,300),x.lineTo(188,332),x.lineTo(156,332),x.lineTo(164,368),x.lineTo(196,368),x.lineTo(196,396),x.lineTo(60,396),x.lineTo(60,368),x.lineTo(92,368),x.lineTo(100,332),x.lineTo(68,332),x.closePath(),x.fill(),x.beginPath(),x.moveTo(128,120),x.bezierCurveTo(168,164,176,192,164,216),x.bezierCurveTo(152,236,104,236,92,216),x.bezierCurveTo(80,192,100,176,112,152),x.bezierCurveTo(120,168,124,172,132,176),x.bezierCurveTo(132,160,128,140,128,120),x.fill(),x.fillStyle="#6e1a19",x.beginPath(),x.moveTo(0,K),x.lineTo(G/2,K-60),x.lineTo(G,K),x.fill()}),Je=z(64,256,(x,G,K)=>{x.fillStyle="#6fa9c9",x.fillRect(0,0,G,K);for(let O=0;O<40;O++)x.fillStyle=O%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",x.fillRect(O*23%64,O*41%256,3+O%3*2,18+O%5*10)}),be=z(128,128,(x,G,K)=>{x.fillStyle="#c4c4c4",x.fillRect(0,0,G,K);for(let O=0;O<70;O++){const se=O*37%G,he=(O*59+O%7*11)%K,ze=4+O%4*3;x.fillStyle=O%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",x.beginPath(),x.ellipse(se,he,ze,1.2+O%3*.5,O*.7%3.14,0,2*Math.PI),x.fill(),se+ze>G&&(x.beginPath(),x.ellipse(se-G,he,ze,1.4,O*.7%3.14,0,2*Math.PI),x.fill())}}),ue=z(256,180,(x,G,K)=>{x.fillStyle="#efe4cc",x.fillRect(0,0,G,K),x.strokeStyle="#4f76b0",x.lineWidth=3,x.strokeRect(20,20,216,30),x.strokeRect(20,62,66,46),x.strokeRect(95,62,66,46),x.strokeRect(170,62,66,46),x.strokeRect(20,120,216,42),x.strokeStyle="#b8483e",x.beginPath(),x.moveTo(26,150),x.lineTo(80,132),x.lineTo(130,145),x.lineTo(226,126),x.stroke()}),P=z(256,200,(x,G,K)=>{const O=x.createLinearGradient(0,0,0,K);O.addColorStop(0,"#d98a62"),O.addColorStop(1,"#f2d2a8"),x.fillStyle=O,x.fillRect(0,0,G,K),x.fillStyle="#5c6f48",x.beginPath(),x.moveTo(0,150),x.quadraticCurveTo(80,100,150,140),x.quadraticCurveTo(210,120,256,135),x.lineTo(256,200),x.lineTo(0,200),x.fill(),x.fillStyle="#4a3a3c",x.fillRect(150,70,44,72),x.fillStyle="#7a2420",x.beginPath(),x.moveTo(144,72),x.lineTo(172,40),x.lineTo(200,72),x.fill(),x.fillStyle="#ffd27a",x.fillRect(165,92,14,18)}),S=z(256,200,x=>{x.fillStyle="#c8b18a",x.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((G,K)=>{x.fillStyle=G,x.fillRect(16+K%3*78,16+Math.floor(K/3)*60,66,48)}),x.fillStyle="#efe4cc",x.fillRect(16,140,224,44),x.fillStyle="#2b3a36",x.fillRect(28,152,120,8),x.fillRect(28,166,80,6)}),q=z(256,160,(x,G,K)=>{x.fillStyle="rgba(40, 200, 220, 0.18)",x.fillRect(0,0,G,K);const O=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let se=0;se<9;se++)x.fillStyle=O[se%4],x.fillRect(18+se%3*12,18+se*14,40+se*53%140,6)}),ye=z(256,128,(x,G,K)=>{x.fillStyle="#3d6f99",x.fillRect(0,0,G,K),x.fillStyle="#8aa866";for(const[O,se,he,ze]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])x.beginPath(),x.ellipse(O,se,he,ze,.3,0,Di*2),x.fill()}),pe=z(128,128,(x,G,K)=>{x.fillStyle="#c9a75a",x.fillRect(0,0,G,K);for(let O=0;O<160;O++){x.strokeStyle=O%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",x.lineWidth=2;const se=w(0,G),he=w(0,K);x.beginPath(),x.moveTo(se,he),x.lineTo(se+6,he+2),x.stroke()}}),De=z(128,128,x=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((G,K)=>{x.fillStyle=G,x.beginPath(),x.arc(64,64,62-K*12,0,Di*2),x.fill()})}),Fe=z(256,256,(x,G,K)=>{x.fillStyle="#7a5a3c",x.fillRect(0,0,G,K);for(let O=0;O<8;O++)x.fillStyle=O%2?"#8a9a48":"#a7a24e",x.fillRect(0,O*32+6,G,20)}),Se=z(64,64,x=>lt(x,"rgba(255,255,255,1)","rgba(255,255,255,0)")),Me=z(64,64,x=>lt(x,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Ce=z(64,64,x=>{x.translate(32,32),x.fillStyle="#fff6c8",x.beginPath();for(let G=0;G<8;G++){const K=G%2?9:30,O=G*Di/4;x.lineTo(Math.cos(O)*K,Math.sin(O)*K)}x.closePath(),x.fill()}),Y=z(8,512,(x,G,K)=>{const O=x.createLinearGradient(0,0,0,K);O.addColorStop(0,"#4c6994"),O.addColorStop(.38,"#8ea6c4"),O.addColorStop(.62,"#d8c2a6"),O.addColorStop(.8,"#e2a682"),O.addColorStop(1,"#b8674f"),x.fillStyle=O,x.fillRect(0,0,G,K)});Y.wrapS=Y.wrapT=Bn;const ve={grass:Ie,dirt:ut,sand:xt,tCobble:st,tFlag:_t,tDirt:St,strata:Re,balloon:We,roadStones:$e,plaza:tt,planksWar:Qe,planksDark:wt,planksLight:rt,planks:Oe,slate:Be,stoneWall:ke,castleWall:L,plankWall:Xe,roof:Ye,gable:He,banner:Le,water:Je,ripple:be,paper:ue,painting:P,moodboard:S,code:q,globe:ye,straw:pe,target:De,field:Fe,soft:Se,blob:Me,spark:Ce,sky:Y,grain:void 0};function _e(x,G=2.2){const K=x.image,O=K.width,se=K.height;if(!(O>0)||!(se>0))return x;const he=K.getContext("2d");if(!he)return x;const ze=he.getImageData(0,0,O,se).data,dt=new Float32Array(O*se);for(let Ke=0;Ke<O*se;Ke++)dt[Ke]=((ze[Ke*4]??0)*.299+(ze[Ke*4+1]??0)*.587+(ze[Ke*4+2]??0)*.114)/255;const vt=document.createElement("canvas");vt.width=O,vt.height=se;const ot=vt.getContext("2d");if(!ot)return x;const Tt=ot.createImageData(O,se);for(let Ke=0;Ke<se;Ke++)for(let ft=0;ft<O;ft++){const Zt=dt[Ke*O+(ft-1+O)%O]??0,un=dt[Ke*O+(ft+1)%O]??0,fn=dt[(Ke-1+se)%se*O+ft]??0,A=dt[(Ke+1)%se*O+ft]??0,N=(Zt-un)*G,R=(A-fn)*G,I=Math.hypot(N,R,1),Q=(Ke*O+ft)*4;Tt.data[Q]=(N/I*.5+.5)*255,Tt.data[Q+1]=(R/I*.5+.5)*255,Tt.data[Q+2]=(1/I*.5+.5)*255,Tt.data[Q+3]=255}ot.putImageData(Tt,0,0);const Mt=new Vl(vt);return Mt.wrapS=Mt.wrapT=ni,Mt.colorSpace=Oi,Mt.anisotropy=x.anisotropy,Mt.repeat.copy(x.repeat),Mt}const Ge={},te=(x,G)=>Ge[x]||=_e(ve[x],G);function $(x,G=1,K=1,O=2.2,se={}){const he=G===1&&K===1?ve[x]:k(ve[x],G,K),ze=G===1&&K===1?te(x,O):k(te(x,O),G,K);return h("#ffffff",Object.assign({map:he,normalMap:ze,normalScale:new Ue(1,1)},se))}ve.grain=z(256,256,(x,G,K)=>{x.fillStyle="#d6cbbf",x.fillRect(0,0,G,K);for(let O=0;O<70;O++){x.strokeStyle=M()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",x.lineWidth=w(1,3);const se=w(0,G);x.beginPath(),x.moveTo(se,0),x.bezierCurveTo(se+w(-8,8),K*.3,se+w(-8,8),K*.7,se+w(-4,4),K),x.stroke()}for(let O=0;O<6;O++){const se=w(10,G-10),he=w(10,K-10);x.strokeStyle="rgba(80, 50, 30, 0.3)",x.lineWidth=2,x.beginPath(),x.ellipse(se,he,w(3,6),w(8,14),0,0,Di*2),x.stroke()}});const de=x=>{const G=h(x,{map:ve.grain,normalMap:te("grain",1.5)});return G.userData.autoUV=!0,G},Ee={stone:$("stoneWall",1,1,2),castle:$("castleWall",1,1,2),plankWall:$("plankWall",1,1,1.4),timber:h(On.timber),wood:de(On.wood),woodD:de(On.woodD),woodL:de(On.woodL),iron:h(On.iron),ironL:h(On.ironL),rust:h(On.rust),bone:h(On.bone),boneD:h(On.boneD),red:h(On.red),redD:h(On.redD),redL:h(On.redL),black:h(On.black),gold:h(On.gold),straw:h("#ffffff",{map:ve.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:e,renderer:s,COL:On,GRAD:t,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:a,toon:h,glow:f,mesh:u,rbox:p,part:v,at:m,rot:_,put:y,spike:C,rnd:T,rr:U,pick:D,trnd:M,tr:w,canvasTex:z,blobs:Ze,edgeFade:nt,tiled:k,planarUV:j,wallUV:oe,instanced:ae,boxes:we,UNIT_BOX:fe,TEX:ve,nrm:te,relief:$,woodMat:de,M:Ee,_c:ne}}const S1="/assets/altar-BLnKV2Du.glb",b1="/assets/backend-0N1rHeCk.glb",w1="/assets/bridge-ETZK_L1i.glb",T1="/assets/designer-DbLc0S5w.glb",E1="/assets/dock-Dz4b5cxY.glb",A1="/assets/flora-7jxy9LaY.glb",R1="/assets/forge-DNia5kCh.glb",C1="/assets/frontend-BagVIkFr.glb",P1="/assets/garden-iFD0puy8.glb",L1="/assets/gate-CLzj2aEg.glb",D1="/assets/house_library-a_INcIO_.glb",N1="/assets/house_studio-prPn7xt-.glb",I1="/assets/house_tavern-DhJciONJ.glb",U1="/assets/house_war-CErgsJUC.glb",O1="/assets/house_workshop-DizOAfBl.glb",F1="/assets/lead-B8dKTGTU.glb",B1="/assets/reviewer-CjFLqSzL.glb",z1="/assets/towers-DiePBDd1.glb",k1="/assets/underside-CtDt-w8A.glb",G1="/assets/walls-DL6hLM5P.glb",H1="/assets/watch-D_FLfKo1.glb",V1="/assets/yard-BCXHtimJ.glb";function W1(s){const e=new Map,t=new Map,n=s.clone();return kf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(a){return t.get(a)}),r.bind(r.skeleton,r.bindMatrix)}),n}function kf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)kf(s.children[n],e.children[n],t)}class X1 extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new J1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new Tu(t,Ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tu(t,Ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Cr.extractUrlBase(e);o=Cr.resolveURL(c,this.path)}else o=Cr.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},a=new Sf(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},l={},a=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Gf){try{o[Ht.KHR_BINARY_GLTF]=new uM(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Ht.KHR_MATERIALS_UNLIT:o[d]=new K1;break;case Ht.KHR_DRACO_MESH_COMPRESSION:o[d]=new fM(r,this.dracoLoader);break;case Ht.KHR_TEXTURE_TRANSFORM:o[d]=new dM;break;case Ht.KHR_MESH_QUANTIZATION:o[d]=new pM;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function q1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function cn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Y1{constructor(e){this.parser=e,this.name=Ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new gt(16777215);a.color!==void 0&&h.setRGB(a.color[0],a.color[1],a.color[2],Jn);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new wf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ji(h),c.distance=d;break;case"spot":c=new T0(h),c.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),_i(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return n._getNodeRef(t.cache,l,a)})}}class K1{constructor(){this.name=Ht.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const i=[];e.color=new gt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Mn))}return Promise.all(i)}}class Z1{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class J1{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(r,r)}return Promise.all(i)}}class $1{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class Q1{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class j1{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class eM{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new gt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class tM{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class nM{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new gt().setRGB(r[0],r[1],r[2],Jn),Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_IOR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class sM{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new gt().setRGB(r[0],r[1],r[2],Jn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mn)),Promise.all(i)}}class rM{constructor(e){this.parser=e,this.name=Ht.EXT_MATERIALS_BUMP}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class oM{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return cn(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class aM{constructor(e){this.parser=e,this.name=Ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lM{constructor(e){this.parser=e,this.name=Ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class cM{constructor(e){this.parser=e,this.name=Ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class Tu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(l,a,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class hM{constructor(e){this.name=Ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==jn.TRIANGLES&&c.mode!==jn.TRIANGLE_STRIP&&c.mode!==jn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],a={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(h=>(a[c]=h,a[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const v=new Ct,m=new V,_=new Vn,y=new V(1,1,1),C=new kr(p.geometry,p.material,f);for(let U=0;U<f;U++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,U),a.ROTATION&&_.fromBufferAttribute(a.ROTATION,U),a.SCALE&&y.fromBufferAttribute(a.SCALE,U),C.setMatrixAt(U,v.compose(m,_,y));let T=null;for(const U in a)if(U==="_COLOR_0"){const D=a[U];C.instanceColor=new Zo(D.array,D.itemSize,D.normalized)}else if(U!=="TRANSLATION"&&U!=="ROTATION"&&U!=="SCALE"){if(T===null){const M=C.geometry;T=new jt,T.name=M.name;for(const w in M.attributes)T.setAttribute(w,M.attributes[w]);for(const w in M.morphAttributes)T.morphAttributes[w]=M.morphAttributes[w];M.index!==null&&T.setIndex(M.index),T.morphTargetsRelative=M.morphTargetsRelative;for(const w of M.groups)T.addGroup(w.start,w.count,w.materialIndex);M.boundingBox!==null&&(T.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(T.boundingSphere=M.boundingSphere.clone()),T.drawRange.start=M.drawRange.start,T.drawRange.count=M.drawRange.count,T.userData=Object.assign({},M.userData),C.geometry=T}const D=a[U];T.setAttribute(U,new Zo(D.array,D.itemSize,D.normalized))}rn.prototype.copy.call(C,p),this.parser.assignFinalMaterial(C),u.push(C)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Gf="glTF",gr=12,Eu={JSON:1313821514,BIN:5130562};class uM{constructor(e){this.name=Ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<i;){const l=r.getUint32(o,!0);o+=4;const a=r.getUint32(o,!0);if(o+=4,a===Eu.JSON){const c=new Uint8Array(e,gr+o,l);this.content=n.decode(c)}else if(a===Eu.BIN){const c=gr+o;this.body=e.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},a={},c={};for(const h in o){const d=Ql[h]||h.toLowerCase();l[d]=o[h]}for(const h in e.attributes){const d=Ql[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],u=ks[f.componentType];c[d]=u.name,a[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const v=u.attributes[p],m=a[p];m!==void 0&&(v.normalized=m)}d(u)},l,c,Jn,f)})})}}class dM{constructor(){this.name=Ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class pM{constructor(){this.name=Ht.KHR_MESH_QUANTIZATION}}class Hf extends Zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=l*2,c=l*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*c,v=p-c,m=-2*u+3*f,_=u-f,y=1-m,C=_-f+d;for(let T=0;T!==l;T++){const U=o[v+T+l],D=o[v+T+a]*h,M=o[p+T+l],w=o[p+T]*h;r[T]=y*U+C*D+m*M+_*w}return r}}const mM=new Vn;class gM extends Hf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return mM.fromArray(r).normalize().toArray(r),r}}const jn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Au={9728:_n,9729:En,9984:Ou,9985:Oo,9986:xr,9987:Mi},Ru={33071:Bn,33648:Wo,10497:ni},el={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_M={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Ir},tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new qs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),s.DefaultMaterial}function rs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],l=[],a=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;l.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;a.push(f)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function MM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yM(s){let e;const t=s.extensions&&s.extensions[Ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nl(t.attributes):e=s.indices+":"+nl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+nl(s.targets[n]);return e}function nl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function jl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bM=new Ct;class wM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const a=l.match(/Version\/(\d+)/);i=n&&a?parseInt(a[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new S0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new R0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return rs(r,l,i),_i(l,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let l=0,a=o.length;l<a;l++)e[o[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,l)=>{const a=this.associations.get(o);a!=null&&this.associations.set(l,a);for(const[c,h]of o.children.entries())r(h,l.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Cr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=el[i.type],l=ks[i.componentType],a=i.normalized===!0,c=new l(i.count*o);return Promise.resolve(new Tn(c,o,a))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],a=el[i.type],c=ks[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*a,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let v,m;if(u&&u!==d){const _=Math.floor(f/u),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let C=t.cache.get(y);C||(v=new c(l,_*u,i.count*u/h),C=new nf(v,u/h),t.cache.add(y,C)),m=new zr(C,a,f%u/h,p)}else l===null?v=new c(i.count*a):v=new c(l,f,i.count*a),m=new Tn(v,a,p);if(i.sparse!==void 0){const _=el.SCALAR,y=ks[i.sparse.indices.componentType],C=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,U=new y(o[1],C,i.sparse.count*_),D=new c(o[2],T,i.sparse.count*a);l!==null&&(m=new Tn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=U.length;M<w;M++){const z=U[M];if(m.setX(z,D[M*a]),a>=2&&m.setY(z,D[M*a+1]),a>=3&&m.setZ(z,D[M*a+2]),a>=4&&m.setW(z,D[M*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const a=n.manager.getHandler(o.uri);a!==null&&(l=a)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],l=r.images[t],a=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Au[f.magFilter]||En,h.minFilter=Au[f.minFilter]||Mi,h.wrapS=Ru[f.wrapS]||ni,h.wrapT=Ru[f.wrapT]||ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==_n&&h.minFilter!==En,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],l=self.URL||self.webkitURL;let a=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(o.bufferView!==void 0)a=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return a=l.createObjectURL(u),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(a).then(function(f){return new Promise(function(u,p){let v=u;t.isImageBitmapLoader===!0&&(v=function(m){const _=new yn(m);_.needsUpdate=!0,u(_)}),t.load(Cr.resolveURL(f,r.path),v,void 0,p)})})}const d=h.then(function(f){return c===!0&&l.revokeObjectURL(a),_i(f,o),f.userData.mimeType=o.mimeType||SM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ht.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Ht.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=r.associations.get(o);o=r.extensions[Ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,a)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Er,Zn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(l,a)),n=a}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new of,Zn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(l,a)),n=a}if(i||r||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=n.clone(),r&&(a.vertexColors=!0),o&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return qs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const l={},a=r.extensions||{},c=[];if(a[Ht.KHR_MATERIALS_UNLIT]){const d=i[Ht.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(l,r,t))}else{const d=r.pbrMetallicRoughness||{};if(l.color=new gt(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],Jn),l.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",d.baseColorTexture,Mn)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=on);const h=r.alphaMode||tl.OPAQUE;if(h===tl.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===tl.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==An&&(c.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;l.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==An&&(c.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==An){const d=r.emissiveFactor;l.emissive=new gt().setRGB(d[0],d[1],d[2],Jn)}return r.emissiveTexture!==void 0&&o!==An&&c.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Mn)),Promise.all(c).then(function(){const d=new o(l);return r.name&&(d.name=r.name),_i(d,r),t.associations.set(d,{materials:e}),r.extensions&&rs(i,d,r),d})}createUniqueName(e){const t=en.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[Ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return Cu(a,l,t)})}const o=[];for(let l=0,a=e.length;l<a;l++){const c=e[l],h=yM(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Cu(new jt,c,t),c.mode===jn.TRIANGLE_STRIP?f=f.then(u=>xu(u,Vu)):c.mode===jn.TRIANGLE_FAN&&(f=f.then(u=>xu(u,Gl))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let a=0,c=o.length;a<c;a++){const h=o[a].material===void 0?xM(this.cache):this.getDependency("material",o[a].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const v=h[u],m=o[u];let _;const y=c[u];if(m.mode===jn.TRIANGLES||m.mode===jn.TRIANGLE_STRIP||m.mode===jn.TRIANGLE_FAN||m.mode===void 0){const C=r.isSkinnedMesh===!0,T=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");C&&T===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),_=C&&T?new pp(v,y):new Ut(v,y),_.isSkinnedMesh===!0&&_.normalizeSkinWeights()}else if(m.mode===jn.LINES)_=new xp(v,y);else if(m.mode===jn.LINE_STRIP)_=new Mc(v,y);else if(m.mode===jn.LINE_LOOP)_=new vp(v,y);else if(m.mode===jn.POINTS)_=new vr(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&MM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),_i(_,r),m.extensions&&rs(i,_,m),t.assignFinalMaterial(_),d.push(_)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&rs(i,d[0],r),d[0];const f=new Te;r.extensions&&rs(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Hn(Ju.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ua(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,l=[],a=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){l.push(d);const f=new Ct;r!==null&&f.fromArray(r.array,c*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xc(l,a)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],l=[],a=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],v=u.target,m=v.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",_)),a.push(this.getDependency("accessor",y)),c.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],v=d[3],m=d[4],_=[];for(let C=0,T=f.length;C<T;C++){const U=f[C],D=u[C],M=p[C],w=v[C],z=m[C];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const k=n._createAnimationTracks(U,D,M,w,z);if(k)for(let j=0;j<k.length;j++)_.push(k[j])}const y=new m0(r,void 0,_);return _i(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let a=0,c=i.weights.length;a<c;a++)l.morphTargetInfluences[a]=i.weights[a]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=i.children||[];for(let c=0,h=l.length;c<h;c++)o.push(n.getDependency("node",l[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),a]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,bM)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new V().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",l=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&l.push(a),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let h;if(r.isBone===!0?h=new rf:c.length>1?h=new Te:c.length===1?h=c[0]:h=new rn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),_i(h,r),r.extensions&&rs(n,h,r),r.matrix!==void 0){const d=new Ct;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Te;n.name&&(r.name=i.createUniqueName(n.name)),_i(r,n),n.extensions&&rs(t,r,n);const o=n.nodes||[],l=[];for(let a=0,c=o.length;a<c;a++)l.push(i.getDependency("node",o[a]));return Promise.all(l).then(function(a){for(let h=0,d=a.length;h<d;h++){const f=a[h];f.parent!==null?r.add(W1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof Zn||f instanceof yn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],l=e.name?e.name:e.uuid,a=[];function c(u){u.morphTargetInfluences&&a.push(u.name?u.name:u.uuid)}Yi[r.path]===Yi.weights?(c(e),e.isGroup&&e.children.forEach(c)):a.push(l);let h;switch(Yi[r.path]){case Yi.weights:h=Yr;break;case Yi.rotation:h=Kr;break;case Yi.translation:case Yi.scale:h=ea;break;default:n.itemSize===1?h=Yr:h=ea;break}const d=i.interpolation!==void 0?_M[i.interpolation]:Ur,f=this._getArrayFromAccessor(n);for(let u=0,p=a.length;u<p;u++){const v=new h(a[u]+"."+Yi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Kr?gM:Hf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TM(s,e,t){const n=e.attributes,i=new Gi;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],a=l.min,c=l.max;if(a!==void 0&&c!==void 0){if(i.set(new V(a[0],a[1],a[2]),new V(c[0],c[1],c[2])),l.normalized){const h=jl(ks[l.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new V,a=new V;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const v=jl(ks[f.componentType]);a.multiplyScalar(v)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const o=new wi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Cu(s,e,t){const n=e.attributes,i=[];function r(o,l){return t.getDependency("accessor",o).then(function(a){s.setAttribute(l,a)})}for(const o in n){const l=Ql[o]||o.toLowerCase();l in s.attributes||i.push(r(n[o],l))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(o)}return Wt.workingColorSpace!==Jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`),_i(s,e),TM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vM(s,e.targets,t):s})}const EM=Object.assign({"../models/altar.glb":S1,"../models/backend.glb":b1,"../models/bridge.glb":w1,"../models/designer.glb":T1,"../models/dock.glb":E1,"../models/flora.glb":A1,"../models/forge.glb":R1,"../models/frontend.glb":C1,"../models/garden.glb":P1,"../models/gate.glb":L1,"../models/house_library.glb":D1,"../models/house_studio.glb":N1,"../models/house_tavern.glb":I1,"../models/house_war.glb":U1,"../models/house_workshop.glb":O1,"../models/lead.glb":F1,"../models/reviewer.glb":B1,"../models/towers.glb":z1,"../models/underside.glb":k1,"../models/walls.glb":G1,"../models/watch.glb":H1,"../models/yard.glb":V1}),ec={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"};function AM(s){const e=EM[`../models/${s}.glb`];if(!e)throw new Error(`no model ${s} in the bundle`);return e}const il=new Ct,RM=new Ct;function CM(s){const e=new Set;return s.scene.traverse(t=>{const n=t.userData.woa_q;if(n&&(il.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),t.matrix.compose(t.position,t.quaternion,t.scale).multiply(RM.copy(il).invert()),t.matrix.decompose(t.position,t.quaternion,t.scale)),!(t instanceof Ut)||e.has(t.geometry))return;const i=t.geometry;e.add(i);for(const[o,l]of Object.entries(i.attributes)){if(o==="skinIndex"||l.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in l))continue;const a=l.itemSize,c=new Float32Array(l.count*a);for(let h=0;h<l.count;h++)c[h*a]=l.getX(h),a>1&&(c[h*a+1]=l.getY(h)),a>2&&(c[h*a+2]=l.getZ(h)),a>3&&(c[h*a+3]=l.getW(h));i.setAttribute(o,new Tn(c,a))}const r=n||t.parent?.userData.woa_q;r&&i.applyMatrix4(il.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function Vf(s,e){const t=e,n=t.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((t.emissiveIntensity||1)*40)/100)):s.toon("#"+t.color.getHexString())}const PM=s=>s.isMeshStandardMaterial===!0;function Wf(s,e){const t=new Map;return e.traverse(n=>{if(!(n instanceof Ut))return;const i=Vf(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const a of Object.keys(o.attributes))a!=="position"&&a!=="normal"&&o.deleteAttribute(a);o.applyMatrix4(n.matrixWorld);const l=t.get(i);l?l.push(o):t.set(i,[o])}),t}function LM(s,e){e.scene.updateMatrixWorld(!0);const t=new Te;for(const[n,i]of Wf(s,e.scene)){const r=i.length===1?i[0]:Dc(i,!1);if(!r)continue;const o=new Ut(r,n);o.castShadow=!PM(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o)}return t}function Xf(s,e){let t=null;return s.scene.traverse(n=>{!t&&(n.userData.name===e||n.name===e)&&(t=n)}),t}async function DM(){const s=new X1,e=Object.keys(ec),t=await Promise.all(e.map(n=>s.loadAsync(AM(n)).then(CM)));return Object.fromEntries(e.map((n,i)=>[n,t[i]]))}function NM(s,e){const t={};for(const n of Object.keys(ec)){const i=e[n];t[n]=ec[n]==="static"?LM(s,i):i}return t}const{PI:Yt}=Math,vn=.32,Io=s=>s.userData.up,IM=s=>s.userData.cutY;function UM(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:v,put:m,spike:_,rr:y,pick:C,tiled:T,planarUV:U,wallUV:D,boxes:M}=s,{SPINNERS:w,skull:z,horns:k,torch:j,flame:oe,table:ee,skullCandle:F,throne:re,rug:le,trophy:J,hangingBanner:ne,weaponRack:ae,shield:fe,brazier:we,chest:Ze,crate:nt,barrel:me,stool:Ve,drum:et,poleBanner:lt,skullPole:Ie,woodpile:ut,spikes:xt,bookshelf:st,desk:_t,candle:St,fence:Re,plant:We,cauldron:$e,bench:tt,lampPost:Qe,scrollStack:wt,telescope:rt,starGlobe:Oe,crystal:Be,wallMap:ke,easel:L,bottle:Xe,anvil:Ye,sack:He,cart:Le,roundTable:Je,mug:be,lanternString:ue,signPost:P,bed:S,curtain:q,partition:ye,wardrobe:pe}=e,{patch:De}=t,Fe={},Se={war:[a.planksWar,2.6],dark:[a.planksDark,2.6],light:[a.planksLight,2.6],planks:[a.planks,2.6],tiles:[a.slate,3.6]};function Me(H,b,ie,X,g,E,W={}){const B=W.T||vn,Z=W.base||0,ge=W.stone!==!1,Pe=ge?1.15:Z,xe=ge?Dt:Z,Ne=ge?Pe:Z+.9,qe=p(new Te,0,Ne,0);H.add(qe),H.userData.up=qe,qe.userData.movesWithWall=!0,H.userData.cutY=Ne;const at={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function ct(yt,Vt){const[Jt,Ft,zt,$t,Rn,tr,ps=0,ma=0,$r=0]=Vt,ga=Ft-Rn/2,_a=Ft+Rn/2,[zc,kc]=at[yt];ps||$r||ga>=Ne-.01?kc.push([Jt,Ft-Ne,zt,$t,Rn,tr,ps,ma,$r]):_a<=Ne+.01?zc.push(Vt):(zc.push([Jt,(ga+Ne)/2,zt,$t,Ne-ga,tr,ps,ma,$r]),kc.push([Jt,(Ne+_a)/2-Ne,zt,$t,_a-Ne,tr,ps,ma,$r]))}const it=X?X.x-X.w/2:0,At=X?X.x+X.w/2:0,Pt=X?[[-b/2,it],[At,b/2]]:[[-b/2,b/2]],Et=ie-Pe;for(const[yt,Vt]of Pt){const Jt=Vt-yt;if(Jt<.05)continue;const Ft=(yt+Vt)/2;if(ge)H.add(p(u(U(new Ae(Jt,Pe,B+.08),1.6),o.stone),Ft,Pe/2,0)),qe.add(p(u(D(new Ae(Jt,Et,B),Et,1.3),o.plankWall),Ft,Et/2,0));else{const zt=Ne-Pe,$t=ie-Ne;H.add(p(u(D(new Ae(Jt,zt,B),zt,1.3,0,Et),o.plankWall),Ft,Pe+zt/2,0)),qe.add(p(u(D(new Ae(Jt,$t,B),$t,1.3,zt,Et),o.plankWall),Ft,$t/2,0))}}if(X){const yt=Dt+2.3,Vt=ie-yt;qe.add(p(u(D(new Ae(X.w,Vt,B),Vt,1.3),o.plankWall),X.x,yt+Vt/2-Ne,0)),ct("timber",[X.x-X.w/2-.1,(yt+.1)/2,0,.24,yt+.1,B+.16]),ct("timber",[X.x+X.w/2+.1,(yt+.1)/2,0,.24,yt+.1,B+.16]),ct("timber",[X.x,yt+.08,0,X.w+.8,.3,B+.2]);for(const Jt of[-1,1])for(let Ft=0;Ft<4;Ft++)ct("timber",[X.x+Jt*(X.w/2+.1),.35+Ft*.55,B/2+.09,.07,.07,.04]);qe.add(p(z(.26),X.x,yt+.42-Ne,B/2+.17)),qe.add(p(k(.6),X.x,yt+.48-Ne,B/2+.15));for(const Jt of[-1,1])qe.add(p(j(),X.x+Jt*(X.w/2+.55),Dt+1.7-Ne,B/2+.02))}ct("timber",[0,Pe+(ge?0:.09),0,b,.18,B+.12]),ct("timber",[0,ie-.1,0,b,.22,B+.12]);const It=Math.max(1,Math.round(b/2.3)),nn=[];for(let yt=1;yt<It;yt++){const Vt=-b/2+yt*b/It;if(!(X&&Vt>it-.45&&Vt<At+.45)){nn.push(Vt),ct("timber",[Vt,Pe+Et/2,0,.2,Et,B+.1]);for(const Jt of[Pe+.09,ie-.1])ct("timber",[Vt,Jt,B/2+.08,.09,.09,.06])}}if(g)for(const yt of[-b/2+.2,b/2-.2])ct("timber",[yt,(Z+ie+.12)/2,0,.42,ie-Z+.12,B+.18]);const mt=[-b/2+(g?.41:0),...nn,b/2-(g?.41:0)];X&&mt.push(it-.22,At+.22),mt.sort((yt,Vt)=>yt-Vt);let an=0;for(let yt=0;yt<mt.length-1;yt++){const Vt=mt[yt],Jt=mt[yt+1],Ft=Jt-Vt,zt=(Vt+Jt)/2;if(!(Ft<.9)&&!(X&&zt>it-.3&&zt<At+.3)){if(an++,E&&Ft>1.5&&an%2===1){const $t=xe+(ge?1.62:1.35);ct("panes",[zt,$t,0,.86,.78,W.paneT||B+.04]);for(const Rn of[[zt,$t+.44,0,1.08,.1,B+.12],[zt,$t-.44,0,1.12,.12,B+.16],[zt-.48,$t,0,.1,.96,B+.12],[zt+.48,$t,0,.1,.96,B+.12],[zt,$t,0,.06,.78,B+.06],[zt,$t,0,.86,.05,B+.06]])ct("timber",Rn);for(const Rn of[-1,1])ct("shutters",[zt+Rn*.78,$t,B/2+.05,.42,.86,.05,0,Rn*.35,0]),ct("timber",[zt+Rn*.78+Rn*.012,$t,B/2+.09,.44,.08,.03,0,Rn*.35,0])}else if(Ft>1){const $t=Et-.3,Rn=Math.atan2($t,Ft-.2),tr=Math.hypot($t,Ft-.2);for(const ps of[-1,1])ct("timber",[zt,Pe+Et/2,B/2+.04,tr,.13,.06,0,0,ps*Rn])}}}const[Ot,ii]=at.timber,[hn,pi]=at.panes,[kn,Wn]=at.shutters;M(H,o.timber,Ot),M(qe,o.timber,ii),M(H,o.pane,hn,!1),M(qe,o.pane,pi,!1),M(H,o.red,kn),M(qe,o.red,Wn),Ge(H,Ne)}const Ce=new V,Y=new Ct,ve=new Ct,_e=new Ct;function Ge(H,b){const ie=Io(H),X=new Map;H.traverse(B=>{if(!(B instanceof Ut)||Array.isArray(B.material))return;for(let Pe=B;Pe&&Pe!==H;Pe=Pe.parent)if(Pe===ie)return;const Z=B.material,ge=X.get(Z);ge?ge.push(B):X.set(Z,[B])});const g=B=>{const Z=B;return(Z.color?Z.color.r*.3+Z.color.g*.59+Z.color.b*.11:0)+(Z.map?.5:0)},E=[...X.keys()].sort((B,Z)=>g(B)-g(Z));H.updateWorldMatrix(!0,!0),_e.copy(H.matrixWorld).invert();const W=new Set;E.forEach((B,Z)=>{if(Z)for(const ge of X.get(B)??[]){const Pe=ge.geometry;if(W.has(Pe))continue;W.add(Pe),Y.multiplyMatrices(_e,ge.matrixWorld),ve.copy(Y).invert();const xe=Pe.attributes.position;let Ne=!1;for(let qe=0;qe<xe.count;qe++)Ce.fromBufferAttribute(xe,qe).applyMatrix4(Y),!(Math.abs(Ce.y-b)>.002)&&(Ce.y-=.003*Z,Ce.applyMatrix4(ve),xe.setXYZ(qe,Ce.x,Ce.y,Ce.z),Ne=!0);Ne&&(xe.needsUpdate=!0,Pe.computeBoundingBox(),Pe.computeBoundingSphere())}})}function te(H){const b=[],ie=new Map;return H.traverse(X=>{if(!(X instanceof Ut))return;const g=X.material;let E=ie.get(g);E||(E=g.clone(),E.transparent=!0,ie.set(g,E),b.push(E)),X.material=E}),b}function $(H,b,ie){const X=H.r,g=ie.pitch||.6,E=.6,W=X.d/2+E,B=new Te;B.position.y=b-E*Math.tan(g),H.g.add(B);const Z=W*Math.tan(g),ge=E*Math.tan(g),Pe=W/Math.cos(g),xe=d("#ffffff",{map:a.roof});for(const Pt of[-1,1]){const Et=u(U(new Ae(X.w+E*2,.18,Pe),1.6),xe);Et.rotation.x=Pt<0?-g:g,Et.position.set(0,Z/2,Pt*W/2),B.add(Et)}const Ne=new Hr;Ne.moveTo(-X.d/2,ge),Ne.lineTo(X.d/2,ge),Ne.lineTo(0,Z-.12),Ne.closePath();const qe=new Tc(Ne),at=d("#ffffff",{map:a.gable,side:on});for(const Pt of[-1,1])B.add(p(v(u(qe,at),0,Yt/2,0),Pt*(X.w/2+.02),0,0)),B.add(p(v(z(.34),0,Pt*Yt/2,0),Pt*(X.w/2+.2),ge+(Z-ge)*.42,0)),B.add(p(v(k(1.1),0,Pt*Yt/2,0),Pt*(X.w/2+E+.05),Z+.12,0));B.add(p(u(new Ae(X.w+E*2+.2,.2,.26),o.iron),0,Z+.04,0));const ct=Math.floor((X.w+E)/1.5);for(let Pt=0;Pt<ct;Pt++)_(B,new V(-X.w/2+.5+Pt*(X.w-1)/Math.max(1,ct-1),Z+.12,0),h,.34,.06,o.boneD,0,5);let it=null;if(ie.chimney){const[Pt,Et]=ie.chimney,It=Z+1.4;B.add(p(u(U(new Ae(.85,It,.85),1.2),o.stone),Pt,It/2,Et)),B.add(p(u(new Ae(1.05,.16,1.05),o.iron),Pt,It+.05,Et)),it=[Pt,It+.3,Et]}const At=te(B);return{R:B,mats:At,base:B.position.y,hR:Z,smokeAt:it}}function de(H){return{S:{c:[0,H.d/2],n:[0,1],L:H.w+vn},N:{c:[0,-H.d/2],n:[0,-1],L:H.w+vn},E:{c:[H.w/2,0],n:[1,0],L:H.d-vn},W:{c:[-H.w/2,0],n:[-1,0],L:H.d-vn}}}function Ee(H,b){const ie=new Te;H.add(ie);const X=new Te;return X.position.set(b.c[0],0,b.c[1]),X.rotation.y=Math.atan2(b.n[0],b.n[1]),ie.add(X),{sg:ie,sf:X}}function x(H,b,ie){if(!b)return;b.updateWorldMatrix(!0,!0),H.g.updateMatrixWorld(!0);const X=[];b.traverse(g=>{g instanceof Ut&&X.push(g)});for(const g of X){const E=g.geometry;E.attributes.uv||E.setAttribute("uv",new Rt(new Float32Array(E.attributes.position.count*2),2));const W=Vf(s,g.material),B=new Ut(E,W);B.castShadow=!W.isMeshStandardMaterial,B.receiveShadow=!0,g.matrixWorld.decompose(B.position,B.quaternion,B.scale),H.g.add(B),B.updateMatrixWorld(!0),ie.attach(B)}}function G(H,b,ie,X,g,E={}){const W=E.T||vn,B=E.stone!==!1,Z=E.base||0,ge=B?1.15:Z+.9,Pe=p(new Te,0,ge,0);if(b.add(Pe),b.userData.up=Pe,Pe.userData.movesWithWall=!0,b.userData.cutY=ge,x(H,ie,b),x(H,X,Pe),Ge(b,ge),g)for(const xe of[-1,1])Pe.add(p(j(),g.x+xe*(g.w/2+.55),Dt+1.7-ge,W/2+.08))}function K(H,b,ie,X){const g=H.r,E=ie.pitch||.6,W=.6,B=g.d/2+W,Z=new Te;Z.position.y=b-W*Math.tan(E),H.g.add(Z);const ge=B*Math.tan(E);x(H,X,Z);const Pe=te(Z);let xe=null;if(ie.chimney){const[Ne,qe]=ie.chimney;xe=[Ne,ge+1.4+.3,qe]}return{R:Z,mats:Pe,base:Z.position.y,hR:ge,smokeAt:xe}}const O={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function se(H,b={}){const ie=new Te;ie.position.set(H.x,0,H.z),ie.rotation.y=H.ry||0,r.add(ie);const X=H.id||b.id,g={id:X,r:H,g:ie,sides:{},lift:0,view:"ground",deco:!!b.deco,name:H.name,top:0},E=O[X],W=at=>E?Xf(E,X+"_"+at):null;E?x(g,W("base"),ie):ie.add(p(u(U(new Ae(H.w+.6,Dt+.3,H.d+.6),1.4),o.stone),0,(Dt+.3)/2-.3,0));const[B,Z]=Se[H.floor||"planks"];ie.add(v(p(u(new qt(H.w,H.d),d("#ffffff",{map:T(B,H.w/Z,H.d/Z)}),!1),0,Dt+.004,0),-Yt/2,0,0));const ge=Dt+H.wallH,Pe=de(H),xe=H.doorLocal||[0,H.d/2],Ne=H.door?H.door.side:"S";for(const[at,ct]of Object.entries(Pe)){const{sg:it,sf:At}=Ee(ie,ct),Pt=Math.cos(At.rotation.y),Et=-Math.sin(At.rotation.y),It=Ne===at?{x:(xe[0]-ct.c[0])*Pt+(xe[1]-ct.c[1])*Et,w:H.door&&H.door.width||1.4}:null;E?G(g,At,W(at+"_lo"),W(at+"_hi"),It):Me(At,ct.L,ge,It,at==="N"||at==="S",b.windows!==!1),g.sides[at]={g:it,sf:At,up:Io(At),n:ct.n,s:1}}if(!E){const at=H.doorN||[0,1],ct=Math.abs(at[0])>0?[.7,(H.door&&H.door.width||1.4)+.5]:[(H.door&&H.door.width||1.4)+.5,.7];ie.add(p(u(U(new Ae(ct[0],.14,ct[1]),1.2),o.stone),xe[0]+at[0]*.62,.07,xe[1]+at[1]*.62))}let qe=ge;if(H.storeys===2){const at=H.upperH||2.5,ct=p(new Te,0,ge,0);ct.userData.movesWithWall=!0,ie.add(ct);const it={U:ct,sides:{},lift:0,mats:[],top:ge};if(g.upper=it,E)x(g,W("Ufloor"),ct);else{const Pt=d("#ffffff",{map:B}),[Et,It,nn,mt]=b.stairHole||[0,0,0,0],an=H.w/2,Ot=H.d/2,ii=b.stairHole?[[-an,Et,-Ot,Ot],[It,an,-Ot,Ot],[Et,It,-Ot,nn],[Et,It,mt,Ot]]:[[-an,an,-Ot,Ot]];for(const[hn,pi,kn,Wn]of ii)pi-hn<.05||Wn-kn<.05||ct.add(p(u(U(new Ae(pi-hn,.22,Wn-kn),Z),Pt),(hn+pi)/2,.09,(kn+Wn)/2))}const At=[];for(const[Pt,Et]of Object.entries(Pe)){const{sg:It,sf:nn}=Ee(ct,Et);E?G(g,nn,W("U"+Pt+"_lo"),W("U"+Pt+"_hi"),null,{base:.2,stone:!1,T:vn-.05}):(Me(nn,Et.L,.2+at,null,Pt==="N"||Pt==="S",!0,{base:.2,stone:!1,T:vn-.05,paneT:vn-.03}),At.push([0,.05,.2,Et.L+.2,.2,.18]),M(nn,o.timber,At.slice(-1))),it.sides[Pt]={g:It,sf:nn,up:Io(nn),n:Et.n,s:1}}qe=ge+.2+at}return g.top=qe,g.roof=E?K(g,qe,b,W("roof")):$(g,qe,b),Fe[X]=g,g}function he(H,b,ie,X,g){const E=H.upper,W=12,B=E.top+.2-Dt,Z=(X-ie)/W,ge=[];for(let at=0;at<W;at++){const ct=B*(at+1)/W;ge.push([b,Dt+ct/2,ie+Z*(at+.5),g,ct,Math.abs(Z)+.01])}M(H.g,o.wood,ge);const Pe=b>0?-1:1,xe=b+Pe*(g/2+.04);for(let at=0;at<=4;at++){const ct=ie+(X-ie)*at/4,it=Dt+B*at/4;H.g.add(p(u(new Ae(.07,.95,.07),o.woodD),xe,it+.5,ct))}const Ne=Math.hypot(X-ie,B),qe=p(u(new Ae(.08,.08,Ne),o.woodL),xe,Dt+B/2+.95,(ie+X)/2);qe.rotation.x=-Math.atan2(B,X-ie),H.g.add(qe)}function ze(H,b,ie,X,g){const E=IM(H);X>E?(b.position.set(ie,X-E,g),Io(H).add(b)):(b.position.set(ie,X,g),H.add(b))}const dt=(H,b)=>H==="S"?b:H==="N"||H==="E"?-b:b;function vt(H,b,ie,X,g,E=.1){const W=H.upper.sides[b];return ie.rotation.y=Yt,ze(W.sf,ie,dt(b,X),g,-((vn-.05)/2+E/2+.01)),ie}const ot=(H,b,ie,X,g=0)=>m(H.upper.U,b,ie,X,g,.2);function Tt(H,b,ie=0,X=.9){for(let g=0;g<b.length-1;g++){const[E,W]=b[g],[B,Z]=b[g+1],ge=Math.hypot(B-E,Z-W),Pe=p(u(new Ae(ge,.07,.07),o.woodL),(E+B)/2,ie+X,(W+Z)/2);Pe.rotation.y=-Math.atan2(Z-W,B-E),H.add(Pe);const xe=Math.max(1,Math.round(ge/.5));for(let Ne=0;Ne<=xe;Ne++)H.add(p(u(new Ae(.05,X,.05),o.woodD),E+(B-E)*Ne/xe,ie+X/2,W+(Z-W)*Ne/xe))}}function Mt(H,b,ie,X,g,E=.1,W=!0){const B=H.sides[b];return W&&(ie.rotation.y=Yt),ze(B.sf,ie,dt(b,X),g,W?-(vn/2+E/2+.01):vn/2+E/2+.01),ie}const Ke=(H,b,ie,X,g=0)=>m(H.g,b,ie,X,g,Dt),ft=(H,b,ie,X,g=0)=>m(H.g,b,ie,X,g,0),Zt=(H,b,ie)=>$i(H,b,ie),un=document.createElement("canvas");un.width=512,un.height=280;const fn=new Vl(un);fn.colorSpace=Mn;let A=i;function N(H=A){A=H;const b=un.getContext("2d");if(!b)return;const ie=512,X=H.filter(E=>E==="done").length;b.fillStyle="#2e2422",b.fillRect(0,0,ie,280),b.fillStyle="#e3d5b6",b.font=`800 40px ${$l}`,b.textAlign="left",b.fillText("TASKS",28,58),b.fillStyle="#ffd27a",b.textAlign="right",b.fillText(`${X} / 5`,ie-28,58);const g={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((E,W)=>{const B=28+W*94,Z=90;b.fillStyle=g[H[W]??"todo"],b.beginPath(),b.roundRect(B,Z,78,96,14),b.fill(),b.fillStyle="rgba(255, 255, 255, 0.22)",b.beginPath(),b.roundRect(B+6,Z+6,66,18,8),b.fill(),b.fillStyle="#1e1a1c",b.font=`800 46px ${$l}`,b.textAlign="center",b.fillText(E,B+39,Z+70)}),b.fillStyle="#1b1616",b.beginPath(),b.roundRect(28,220,ie-56,28,14),b.fill(),X&&(b.fillStyle="#d9762e",b.beginPath(),b.roundRect(28,220,(ie-56)*X/5,28,14),b.fill()),fn.needsUpdate=!0}N(),document.fonts&&document.fonts.ready.then(()=>N());function R(){const H=new Te;return H.add(u(new Ae(2.7,1.65,.1),o.woodD)),H.add(p(new Ut(new qt(2.45,1.35),new An({map:fn,toneMapped:!1})),0,0,.06)),H.add(p(u(new Ae(2.9,.14,.2),o.wood),0,.9,.02)),H.add(p(z(.18),0,1.08,.06)),H}{const H=Kn.war,b=se(H,{pitch:.62}),ie=Dt+H.wallH;Ke(b,ee(3.4,2,.86),-2.5,-.6);{const X=new qt(3,1.7,26,16),g=X.attributes.position,E=[];for(let B=0;B<g.count;B++){const Z=g.getX(B),ge=g.getY(B),Pe=Math.max(0,Math.sin(Z*2.1+1)*Math.cos(ge*2.7)*.1+Math.sin(Z*5+ge*3)*.03);g.setZ(B,Pe),E.push(...Pe>.08?[.86,.82,.76]:Pe>.03?[.5,.38,.28]:Pe>.005?[.42,.55,.32]:[.32,.5,.62])}X.setAttribute("color",new Rt(E,3)),X.computeVertexNormals();const W=v(p(u(X,new Go({vertexColors:!0,gradientMap:c}),!1),-2.5,Dt+.91,-.6),-Yt/2,0,0);b.g.add(W);for(const[B,Z,ge]of[[-.9,-.3,l.red],[.4,.3,"#3f5f8f"],[1,-.4,l.gold],[-.2,-.5,l.red]])b.g.add(p(u(new je(.012,.012,.24,4),o.dark,!1),-2.5+B,Dt+1.05,-.6+Z)),b.g.add(p(u(new Ae(.12,.07,.01),d(ge),!1),-2.5+B+.06,Dt+1.13,-.6+Z));for(const[B,Z]of[[-1.55,-.85],[1.55,.85]])Ke(b,F(),-2.5+B,-.6+Z).position.y=Dt+.9}Ke(b,re(),-6.1,-2.6,Ni(-6.1,-2.6,-2.5,-.6)),Ke(b,le(1.6,[l.redD,l.bone,l.red,l.black,l.redL,l.redD]),-4.6,.6),Mt(b,"N",R(),3.8,Dt+1.95,.12),Mt(b,"N",J(),-2.5,Dt+2.2,.1),Mt(b,"N",J(),.9,Dt+2.1,.1),Mt(b,"N",ne(1,1.9),-5.4,ie-.3,.04),Mt(b,"N",ne(1,1.9),6.4,ie-.3,.04),Mt(b,"W",ae(4),.6,Dt,.3),Mt(b,"E",fe(l.red),-2,Dt+1.9,.1),Mt(b,"E",fe(l.black),1.2,Dt+1.9,.1),Ke(b,we(7),6.3,-3.3),Ke(b,we(0,.85),-6.7,3.5),Ke(b,Ze(),6.3,1.6,-Yt/2),Ke(b,nt(.6),5.3,3.6,.3),Ke(b,nt(.45),5.9,3.7,.9),Ke(b,me(.9),-6.6,-.6),Ke(b,Ve(),-.9,-2.2),De("plaza",...Zt(H,0,7.4),5.8,3.6,-H.ry,.014),ft(b,et(),-4.4,6,.3),ft(b,et(),5.6,5.9,-.2),ft(b,lt(3.4),-2.6,5),ft(b,lt(3.4),2.6,5),ft(b,Ie(2.6),-7,6.2),ft(b,Ie(2.2),7.8,5.4),ft(b,we(0),-6.2,5),ft(b,ut(2.4),-3,-6),ft(b,me(),4.4,-5.6),ft(b,me(.9),5,-6.1),ft(b,me(1,!0),3.6,-6.2,.4),ft(b,v(ae(4),0,Yt,0),.8,-5.6),ft(b,xt(3),-8.6,-1,Yt/2)}{const H=Kn.library,b=se(H,{pitch:.66,stairHole:[4,4.84,-2,0]}),ie=Dt+H.wallH;for(const E of[-3.6,-1.4])Ke(b,st(2),E,-H.d/2+vn/2+.27);for(const E of[-2.1,.3])Ke(b,st(2),-H.w/2+vn/2+.27,E,Yt/2);const X=_t("books");Ke(b,X.g,1.8,-1.2),Ke(b,St(.18,4),2.45,-.95).position.y=Dt+.79;{const E=new Te;E.add(p(u(new Ae(1,.45,.9),d("#5a1f2a")),0,.3,0)),E.add(p(u(new Ae(.86,.12,.74),d("#7a2a36")),0,.58,.04)),E.add(p(u(new Ae(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const W of[-1,1])E.add(p(u(new Ae(.2,.6,.9),d("#4a1822")),W*.5,.52,0));Ke(b,E,-3.3,1.9,.9)}Ke(b,le(1.5,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const E=new Te;E.add(p(u(new je(.08,.2,1,8),o.woodD),0,.5,0)),E.add(v(p(u(new Ae(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),E.add(v(p(u(new Ae(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Ke(b,E,2.3,2.5,-.5)}{const E=new Te;E.add(p(u(new je(.05,.2,.9,10),o.woodD),0,.45,0));const W=p(new Te,0,1.25,0);W.rotation.z=.4;const B=u(new Xt(.34,24,16),d("#ffffff",{map:a.globe}));W.add(B),W.add(v(u(new pn(.4,.02,6,28),o.gold),0,Yt/2,0)),E.add(W),Ke(b,E,.5,3),w.push({o:B,axis:"y",v:.25})}{const E=new Te;E.add(p(u(new je(.16,.26,.9,8),o.woodD),0,.45,0)),E.add(p(u(new Xt(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let W=0;W<3;W++){const B=W/3*Yt*2;_(E,new V(Math.cos(B)*.14,.92,Math.sin(B)*.14),new V(Math.cos(B),2,Math.sin(B)),.3,.03,o.bone,0,5)}Ke(b,E,3,-3.2)}const g=[];for(const[E,W,B]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[Z,ge]=Zt(H,E,W);let Pe=Dt;for(let xe=0;xe<B;xe++){const Ne=y(.06,.1);g.push({x:Z+y(-.03,.03),y:Pe+Ne/2,z:ge+y(-.03,.03),sx:y(.32,.42),sy:Ne,sz:y(.24,.3),ry:H.ry+y(-.3,.3),c:C(e.BOOK_COLS)}),Pe+=Ne}}s.instanced(s.UNIT_BOX,g,{cast:!0}),Ke(b,F(),-4.3,3.4).position.y=Dt+.42,Ke(b,St(.5),-4.5,2.9),Ke(b,St(.34),-4.2,2.7),Mt(b,"E",ne(.9,1.6),-3,ie-.3,.04),Mt(b,"S",J(),1.6,Dt+2.1,.1);{const E=new Te;E.add(p(u(new je(2.2,2.4,7.6,22),d("#ffffff",{map:T(a.castleWall,3.5,2.4)})),0,3.8,0)),E.add(p(u(new je(2.6,2.4,.4,22),o.stone),0,7.7,0)),E.add(p(u(new mn(2.9,3.6,22),d("#ffffff",{map:T(a.roof,5,2)})),0,9.7,0)),E.add(p(z(.45),0,11.8,0));for(const[W,B]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])E.add(p(v(u(new Ae(.4,.9,.12),o.pane,!1),0,-W+Yt/2,0),Math.cos(W)*2.32,B,Math.sin(W)*2.32));E.add(p(v(ne(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),ft(b,E,5.6,3.4)}Re(b.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let E=0;E<10;E++)ft(b,We(y(.6,.9)),y(-8.6,-6.2),y(5.3,7.1));ft(b,$e(),1.2,6.2),ft(b,tt(1.6,!0),3,6.7,Yt),ft(b,Ie(2.2),-.4,5.6),ft(b,Qe(0),-4.6,4.6),ft(b,nt(.55),6.2,-1.4,.3),ft(b,nt(.4),6.3,-.8,.8),De("dirt",...Zt(H,.5,6.4),4.6,2.2,-H.ry,.013),he(b,4.42,-3.4,-.2,.84),Tt(b.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const E of[-3.6,-1.4,1])ot(b,st(2),E,-H.d/2+vn/2+.27);for(const E of[-2.1,.3,2.5])ot(b,st(2),-H.w/2+vn/2+.27,E,Yt/2);ot(b,ee(2.2,1,.8,o.wood),.2,.7),ot(b,wt(),-.4,.6).position.y=1.04,ot(b,wt(),.9,.9).position.y=1.04,ot(b,p(u(new Ae(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,ot(b,St(.2),-.6,1).position.y=1,ot(b,St(.14),.95,.4).position.y=1,ot(b,Ve(),.2,1.6),ot(b,Ve(),-.9,1.5),ot(b,rt(),2.4,2.9,Yt),ot(b,Oe(),-2.6,2.6),ot(b,Be(),2.9,-2.8),ot(b,le(1.3,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),.2,.7),vt(b,"S",ke(),-.6,1.75,.06),vt(b,"E",J(),2.4,1.8,.1),ot(b,Ze(),-3.6,3.2,0)}{const H=Kn.studio,b=se(H,{pitch:.58}),ie=Dt+H.wallH,X=_t("paper");Ke(b,X.g,-2,-1.6);{const ge=new Te;ge.add(u(new Ae(1.6,1.25,.08),o.wood)),ge.add(p(new Ut(new qt(1.45,1.1),new An({map:a.moodboard,toneMapped:!1})),0,0,.05)),Mt(b,"N",ge,1.6,Dt+1.75,.08)}Ke(b,ee(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[ge,Pe,xe]of[[-.35,-.1,"#3f5f8f"],[0,.12,l.red],[.32,-.05,l.gold],[.12,-.2,"#5f8a52"]])Ke(b,p(u(new je(.08,.09,.16,12),d(xe)),0,.08,0),2.6+ge,-2+Pe).position.y=Dt+.78;for(let ge=0;ge<3;ge++){const Pe=p(u(new Ae(.8,.6,.04),d(C(["#efe4cc","#e2d4b6"]))),0,.3,0);Pe.rotation.x=-.22,Ke(b,Pe,3.7-ge*.1,1.4+ge*.12,-Yt/2)}Ke(b,We(1.1),3.8,2.8),Ke(b,We(.9),-3.8,2.9),Ke(b,st(1.6),-H.w/2+vn/2+.27,.6,Yt/2),Mt(b,"E",ne(.9,1.5),.6,ie-.3,.04);const[g,E,W,B]=H.deck;b.g.add(p(u(U(new Ae(E-g,.2,B-W),2.6),d("#ffffff",{map:a.planks})),(g+E)/2,.1,(W+B)/2));const Z=p(new Te,0,.2,0);b.g.add(Z),Re(Z,[[g,W+.1],[g,B],[-2,B]],.85),Re(Z,[[3.4,B],[E,B],[E,W+.1]],.85),m(Z,L(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(Z,tt(1.6,!0),3,4.4,0),m(Z,We(1),-3.7,4),m(Z,We(.8),3.8,7.1),m(Z,Qe(0),-3.9,7.3),m(Z,p(u(new je(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(Z,p(u(new je(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let ge=0;ge<14;ge++)ft(b,p(u(new Xt(.14,8,6),d(C([l.red,l.bone,"#d98a3a",l.redL]))),0,.14,0),y(-3.5,3.5),y(-5.2,-4.2));ft(b,Ie(2),4.9,-4.6)}const I=_t("screen"),Q=_t("screen");{const H=Kn.workshop,b=se(H,{pitch:.6,chimney:[-4,-1.6]}),ie=Dt+H.wallH;Ke(b,I.g,-3,-1.4),Ke(b,Q.g,2,-1.4),Ke(b,Be(),-5,2.6);{const X=new Te;for(const g of[.9,1.5])X.add(p(u(new Ae(2.4,.06,.4),o.wood),0,g,0));for(const g of[-1,1])X.add(p(u(new Ae(.06,1.7,.4),o.woodD),g*1.2,.85,0));for(let g=0;g<7;g++)X.add(p(Xe(C(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+g*.32,.93+g%2*.6,0));X.add(p(z(.14),.9,1.65,0)),Ke(b,X,-.5,-H.d/2+vn/2+.25)}{const X=ee(2,.8,.86,o.woodD);X.add(p(Ye(),.4,.9,0)),X.add(v(p(u(new je(.02,.02,.4,6),o.wood),-.5,.92,.1),Yt/2,0,.4)),Ke(b,X,3.9,-3.2)}{const X=new Te;X.add(p(u(new Ae(.9,.8,.8),o.iron),0,.4,0)),X.add(p(u(new qt(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),X.add(p(u(new je(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Ke(b,X,-5.2,.7,Yt/2)}for(const[X,g,E,W]of[[4.2,1.7,.4,l.gold],[3.5,1.35,.26,l.ironL]]){const B=new Te;B.add(v(u(new je(E,E,.1,18),d(W)),Yt/2,0,0));for(let Z=0;Z<10;Z++){const ge=Z/10*Yt*2;B.add(p(u(new Ae(.12,.12,.1),d(W)),Math.cos(ge)*(E+.05),Math.sin(ge)*(E+.05),0))}Mt(b,"N",B,X,Dt+g,.1),w.push({o:B,axis:"z",v:W===l.gold?.6:-.9})}Mt(b,"W",ae(4),-1.2,Dt,.3),Mt(b,"S",ne(1,1.7),-2.4,ie-.3,.04),Mt(b,"S",fe(l.red),2.6,Dt+1.8,.1),Ke(b,me(),-5.2,-3.2),Ke(b,nt(.6),-4.6,-3.4,.3),Ke(b,nt(.6),5,3.2,.2),Ke(b,He(),4.3,3.4),De("dirt",...Zt(H,0,6.2),6.6,2.8,-H.ry,.013),ft(b,ut(2.6),-2.6,5.4),ft(b,Le(),2.6,6.2,.4);{const X=new Te;X.add(p(u(new je(.4,.45,.6,12),o.woodL),0,.3,0)),X.add(v(p(u(new je(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),X.add(v(p(u(new Ae(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),ft(b,X,-5,5.6)}ft(b,me(),5.2,5),ft(b,me(.85),5.8,5.6),ft(b,Ie(2.4),-6.6,6.8),ft(b,we(0,.9),7.4,-1.4)}let ce;{const H=Kn.tavern,b=se(H,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),ie=Dt+H.wallH;{const X=new Te;X.add(p(u(new Ae(.9,1.1,5),o.wood),0,.55,0)),X.add(p(u(new Ae(1.1,.08,5.2),o.woodL),0,1.14,0));for(let E=0;E<5;E++)X.add(p(u(new Ae(.02,.9,.9),o.woodD),-.46,.5,-2+E));for(let E=0;E<6;E++)X.add(p(Xe(C(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),y(-.2,.2),1.18,-2.2+E*.8));X.add(p(z(.2),0,1.3,2.3)),Ke(b,X,4.1,-.6);const g=new Te;for(const E of[1.5,2])g.add(p(u(new Ae(.3,.05,4),o.wood),0,E,0));for(let E=0;E<10;E++)g.add(p(Xe(C(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,E%2?2.03:1.53,-1.8+E*.4));Ke(b,g,5.12,-.6),Ke(b,me(.9,!0),4.85,2.6,Yt/2),Ke(b,me(.9,!0),4.85,3.4,Yt/2)}{const X=new Te;X.add(p(u(U(new Ae(2.6,2,.9),1.4),o.stone),0,1,0)),X.add(p(u(new Ae(2.9,.18,1.1),o.wood),0,2.05,.05)),X.add(p(u(new qt(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),X.add(p($e(),0,0,.85)),X.add(p(z(.22),0,2.32,.1)),ce=new Ji("#ff9a4a",12,9,2),ce.position.set(0,.9,1.2),X.add(ce),oe(X,0,.3,.3,1.4),Ke(b,X,-1.5,-H.d/2+vn/2+.46)}Ke(b,Je(),-2.2,.8),Ke(b,Ve(),-3.1,.8),Ke(b,Ve(),-1.3,.8),Ke(b,Je(.65),1,2.3),Ke(b,Ve(),.1,2.3),Ke(b,Ve(),1.9,2.3),Ke(b,Ve(),1,3.2);for(const[X,g]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Ke(b,be(),X,g).position.y=Dt+.8;Ke(b,Ve(),3.2,-2.4),Mt(b,"N",J(),2.6,Dt+2.1,.1),Mt(b,"S",fe(l.black),-3,Dt+1.9,.1),Mt(b,"S",ne(.9,1.6),1.6,ie-.3,.04),Mt(b,"W",J(),-2.6,Dt+2.2,.1),De("dirt",...Zt(H,-.5,6.4),4.8,2.6,-H.ry,.013),ft(b,ee(3.6,.9,.8,o.woodL),.4,6.55),ft(b,tt(3.6,!1),.4,5.75),ft(b,tt(3.6,!1),.4,7.35,Yt);for(const[X,g]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])ft(b,be(),X,g).position.y=.84;Re(b.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[X,g]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])ft(b,p(u(new je(.06,.08,2.6,6),o.woodD),0,1.3,0),X,g);ue(b.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),ft(b,me(),3,5.2),ft(b,me(.8,!0),2.6,7.9,.3),ft(b,P("TAVERN"),-6.4,3.6,-Yt/2),ft(b,Ie(2.2),-8.4,5.6),he(b,-4.89,-3.6,-.6,.9),Tt(b.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[X,g]of[[-2.6,l.red],[.8,"#3f5f8f"],[4,l.redD]])ot(b,S(g),X,-2.75),ot(b,Ze(),X+.95,-3.4,Yt/2).scale.setScalar(.7),ot(b,q(.8,1.6),X-.5,-1.35),ot(b,St(.16),X-.62,-3.55);for(const X of[-.9,2.4])ot(b,ye(2.5),X,-2.6);{const X=u(new qt(8.6,1.1),d(l.redD),!1);X.rotation.x=-Yt/2,ot(b,X,.4,.9).position.y=.212}ot(b,pe(),.8,3.45,Yt),ot(b,tt(1.6,!0),2.8,3.4,Yt),ot(b,ee(.9,.7,.8,o.woodL),4.4,1.6),ot(b,Ve(),4.4,2.4),ot(b,St(.16,0),4.5,1.5).position.y=1;{const X=new Te;X.add(p(u(new je(.06,.12,.8,8),o.woodD),0,.4,0)),X.add(p(u(new je(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),X.add(v(p(u(new ai(.24,14),d("#5f8fa8"),!1),0,.92,0),-Yt/2,0,0)),ot(b,X,-2.2,3.3)}ot(b,We(.9),-3.6,3.3),vt(b,"S",fe(l.red),-1.2,1.7,.1),vt(b,"E",ne(.9,1.5),1.6,2.5,.04)}return{HOUSES:Fe,buildHouse:se,inH:Ke,outH:ft,onWall:Mt,W2:Zt,deskF:I,deskB:Q,hearthLight:ce,drawBoard:N}}const{PI:sn}=Math;function Uo(s,e,t){let n=1e9;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[l,a]=t[i+1],c=l-r,h=a-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(e-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,e-o-h*f))}return n}function Pu(s,e,t,n){const i=t?[...s,s[0]]:s,r=[],o=[],l=[];let a=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(t&&(h===0||h===i.length-1)){const C=s[s.length-1],T=s[1];u=T[0]-C[0],p=T[1]-C[1]}const v=Math.hypot(u,p)||1,m=-p/v,_=u/v,y=i[h];if(h>0){const C=i[h-1];a+=Math.hypot(y[0]-C[0],y[1]-C[1])}if(r.push(y[0]+m*e/2,n,y[1]+_*e/2,y[0]-m*e/2,n,y[1]-_*e/2),o.push(0,a,1,a),h>0){const C=h*2;l.push(C-2,C,C-1,C-1,C,C+1)}}const c=new jt;return c.setAttribute("position",new Rt(r,3)),c.setAttribute("uv",new Rt(o,2)),c.setIndex(l),c.computeVertexNormals(),c}async function OM(s,e,t){const{scene:n,TEX:i,toon:r,mesh:o,at:l,rot:a,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:v,instanced:m}=s,{SPINNERS:_,plantFlora:y,skullPole:C,totem:T,brazier:U,hay:D}=e,M=new V(-62,27,70).normalize(),w=new Ut(new Xt(600,32,16),new zn({side:Dn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new gt("#2b3b78")},mid:{value:new gt("#7f8fc4")},hor:{value:new gt("#f2aa7c")},low:{value:new gt("#c98a72")},sunCol:{value:new gt("#ffa864")},sunDir:{value:M}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));w.renderOrder=-100,w.frustumCulled=!1,n.add(w),n.fog=new _c("#d6a487",230,640),n.add(new b0("#9aa8d8","#4a3428",1.05));const z=new wf("#ffb070",2.3);z.position.copy(M).multiplyScalar(110),z.castShadow=!0,z.shadow.mapSize.set(4096,4096),Object.assign(z.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),z.shadow.camera.updateProjectionMatrix(),z.shadow.bias=-5e-4,z.shadow.normalBias=.05,n.add(z);const k=new Hr;for(let Oe=0;Oe<=160;Oe++){const Be=Oe/160*sn*2,ke=as(Be),L=Math.cos(Be)*ke,Xe=-Math.sin(Be)*ke;Oe===0?k.moveTo(L,Xe):k.lineTo(L,Xe)}const j=new jo(k,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});j.rotateX(-sn/2);const oe=c(i.grass,1/9,1/9);function ee(Oe,Be){const ke=i.strata.clone();return ke.wrapS=ni,ke.wrapT=Bn,ke.repeat.set(1/8,-1/(Be-Oe)),ke.offset.set(0,Be/(Be-Oe)),ke.needsUpdate=!0,r("#ffffff",{map:ke})}const F=new Ut(j,[r("#ffffff",{map:oe}),ee(-1.9,1.5)]);F.position.y=-2.9,F.receiveShadow=!0,n.add(F);const re=NM(s,await t);n.add(re.underside);for(const Oe of["walls","towers","gate"])n.add(re[Oe]);const le=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),J=new Xt(1,16,12),ne=new Te;n.add(ne);for(let Oe=0;Oe<22;Oe++){const Be=Oe/22*sn*2+d(-.12,.12),ke=d(100,260),L=d(1.6,3.2),Xe=new Te;for(let Ye=0;Ye<7;Ye++){const He=new Ut(J,le),Le=d(1.6,2.8)*L;He.scale.set(Le,Le*.7,Le),He.position.set(d(-3.5,3.5)*L,d(-.3,1.2)*L,d(-1.8,1.8)*L),Xe.add(He)}Xe.position.set(Math.cos(Be)*ke,d(-45,28),Math.sin(Be)*ke),ne.add(Xe)}{const Oe=[],Be=[],ke=[];for(let L=0;L<420;L++){const Xe=L/420*sn*2+d(-.006,.006),Ye=as(Xe);if(h()<.55){const He=d(.5,2.8),Le=d(-.55,-1.8);Oe.push({x:Math.cos(Xe)*(Ye+.8),y:Le-He/2,z:Math.sin(Xe)*(Ye+.8),sx:d(.7,1.3),sy:He,sz:d(.7,1.3),rx:sn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}L%2===0&&Be.push({x:Math.cos(Xe)*(Ye+.3),y:-.06,z:Math.sin(Xe)*(Ye+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let L=0;L<7;L++){const Xe=d(0,sn*2),Ye=as(Xe)+d(4,12);ke.push({x:Math.cos(Xe)*Ye,y:d(-14,-4),z:Math.sin(Xe)*Ye,s:d(.8,2.2)})}m(new mn(.06,1,4),Oe,{}),m(new Xt(1,10,6),Be,{});for(const L of ke){const Xe=new Te;Xe.add(l(o(new vi(1.2*L.s,0),r("#6e5240")),0,-.4*L.s,0)),Xe.add(l(o(new je(1*L.s,1.1*L.s,.3*L.s,9),r("#6f8b49")),0,.5*L.s,0)),h()<.6&&Xe.add(l(e.tree(f(["pine","autumn","dead"]),.5*L.s),0,.6*L.s,0)),Xe.position.set(L.x,L.y,L.z),Xe.rotation.y=d(0,6),n.add(Xe)}}const ae=ee(-.75,1.35),fe={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},we=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function Ze(Oe,Be,ke,L,Xe){y(Be,ke,Oe.position.x+L,Oe.position.z+Xe,Oe.position.y)}function nt(Oe,Be,ke,L){const{trees:Xe,clear:Ye}=fe[ke],He=Be/10,Le=[...Ye.map(([be,ue,P])=>[be,ue,P]),...L.map(([be,ue])=>[be,ue,.16])],Je=(be,ue,P)=>{for(let S=0;S<60;S++){const q=d(0,sn*2),ye=d(be,ue),pe=Math.cos(q)*ye,De=Math.sin(q)*ye;if(Le.every(([Fe,Se,Me])=>Math.hypot(pe-Fe,De-Se)>Me+P))return Le.push([pe,De,P]),[pe*Be,De*Be]}return null};for(let be=0;be<7;be++){const ue=Je(.3,.74,.12);ue&&y(Xe[be%Xe.length],d(1,1.3)*He,Oe.position.x+ue[0],Oe.position.z+ue[1],Oe.position.y)}for(let be=0;be<9;be++){const ue=Je(.15,.78,.05);ue&&y(f(we),d(.75,1.25)*He,Oe.position.x+ue[0],Oe.position.z+ue[1],Oe.position.y)}}const me=c(i.water,1,4);function Ve(Oe,Be,ke,L,Xe,Ye){const He=new Te;He.position.set(Oe,Be,ke),n.add(He);const Le=new Hr;for(let P=0;P<=56;P++){const S=P/56*sn*2,q=L*(1+.12*Math.sin(3*S+Ye)+.07*Math.sin(5*S+2*Ye));P===0?Le.moveTo(Math.cos(S)*q,-Math.sin(S)*q):Le.lineTo(Math.cos(S)*q,-Math.sin(S)*q)}const Je=new jo(Le,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});Je.rotateX(-sn/2),He.add(l(new Ut(Je,[r("#ffffff",{map:oe}),ae]),0,-1.75,0));const be=o(new mn(L*.95,L*2.3,12,3),r("#6e5240"),!1);be.rotation.x=sn,be.position.y=-2.1-L*1.15,He.add(be);for(let P=0;P<14;P++){const S=d(0,sn*2),q=d(.2,.9);He.add(l(a(o(new vi(d(.8,2)*(L/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(S)*L*.95*q,-2.1-(1-q)*L*2.3,Math.sin(S)*L*.95*q))}for(let P=0;P<26;P++){const S=d(0,sn*2),q=d(.6,2.4);He.add(l(a(o(new mn(.07,q,4),r("#4a3424")),sn,0,0),Math.cos(S)*L*1.02,-.6-q/2,Math.sin(S)*L*1.02))}const ue=L/10;if(Xe==="ruin"){const P=l(new Te,-L*.25,0,-L*.1);P.add(l(o(new je(1.7*ue,1.9*ue,5.5*ue,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*ue,0));for(let q=0;q<7;q++){const ye=q/7*sn*2;P.add(l(o(new Ae(.7*ue,d(.4,1.6)*ue,.5*ue),v.stone),Math.cos(ye)*1.6*ue,5.6*ue,Math.sin(ye)*1.6*ue))}P.add(l(o(new Ae(.4*ue,1*ue,.1),v.pane,!1),0,2.6*ue,1.85*ue)),He.add(P);for(const q of[-1,1])He.add(l(o(new Ae(.7*ue,3.2*ue,.7*ue),v.stone),L*.35+q*1.3*ue,1.6*ue,L*.3));He.add(l(o(new Ae(3.3*ue,.6*ue,.7*ue),v.stone),L*.35,3.4*ue,L*.3)),He.add(l(C(2.4),L*.1,0,L*.5));const S=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[q,ye,pe]of S)Ze(He,pe,1.2*ue,q*L,ye*L);nt(He,L,Xe,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(Xe==="farm"){const P=l(new Te,-L*.2,0,-L*.15);P.add(l(o(u(new Ae(3.6*ue,2.2*ue,2.8*ue),2.2*ue,1.3),v.plankWall),0,1.1*ue,0));const S=new je(2.1*ue,2.1*ue,4*ue,3,1);P.add(l(a(o(S,r("#ffffff",{map:i.roof})),0,0,sn/2),0,2.2*ue+.9*ue,0)),P.add(l(o(new Ae(.8*ue,1.5*ue,.1),v.woodD),0,.75*ue,1.42*ue)),P.add(l(o(new Ae(.6*ue,.6*ue,.1),v.pane,!1),1.1*ue,1.3*ue,1.42*ue)),He.add(P);const q=o(new qt(L*.8,L*.5),r("#ffffff",{map:i.field}),!1);q.rotation.x=-sn/2,q.position.set(L*.3,.03,L*.25),He.add(q);const ye=l(new Te,L*.35,0,-L*.45);ye.add(l(o(new je(.8*ue,1.2*ue,4*ue,12),r("#e3d5b6")),0,2*ue,0)),ye.add(l(o(new mn(1.2*ue,1.4*ue,12),r("#ffffff",{map:i.roof})),0,4.7*ue,0));const pe=l(new Te,0,3.6*ue,1*ue);for(let De=0;De<4;De++){const Fe=new Te;Fe.rotation.z=De*sn/2,Fe.add(l(o(new Ae(.5*ue,2.6*ue,.04),r("#e3d5b6",{side:on})),.3*ue,1.5*ue,0)),pe.add(Fe)}ye.add(pe),_.push({o:pe,axis:"z",v:.4}),He.add(ye),Ze(He,"tree_maple",1.1*ue,-L*.55,L*.4),He.add(l(D(.5*ue),L*.05,0,L*.55)),nt(He,L,Xe,[[-.55,.4]])}else if(Xe==="shrine"){for(let S=0;S<6;S++){const q=S/6*sn*2;He.add(l(a(o(new Ae(.7*ue,d(2,3)*ue,.5*ue),v.stone),0,-q,d(-.1,.1)),Math.cos(q)*3*ue,1.2*ue,Math.sin(q)*3*ue))}He.add(T(4*ue));for(const S of[.8,3.9])He.add(l(U(0,1.2*ue),Math.cos(S)*1.8*ue,0,Math.sin(S)*1.8*ue));const P=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[S,q]of P)Ze(He,"tree_maple",1.1*ue,S*L,q*L);nt(He,L,Xe,P)}else{const P=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[ye,pe,De]of P)Ze(He,De,1.2*ue,ye*L,pe*L);nt(He,L,Xe,P),He.add(l(a(o(new ai(L*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-sn/2,0,0),L*.25,.04,L*.3));const S=new Ut(new qt(1.8*ue,L*3.2),new An({map:me,color:"#acb5c8",transparent:!0,opacity:.85,side:on,depthWrite:!1}));S.position.set(L*.62,-L*1.6,L*.62),S.rotation.y=sn/4,He.add(S);const q=o(new qt(1.2*ue,L*.55),r("#6fa9c9"),!1);q.rotation.set(-sn/2,0,-sn/4),q.position.set(L*.45,.05,L*.45),He.add(q)}return He}Ve(-150,6,-105,11,"ruin",.4),Ve(165,-4,-60,13,"farm",1.7),Ve(115,20,135,9,"shrine",2.9),Ve(-165,-14,85,12,"falls",4.1);const et={};function lt(Oe){const Be=et[Oe];if(Be)return Be;const ke={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Oe],L=s.canvasTex(256,256,(Ye,He,Le)=>{const Je=Ye.createRadialGradient(He/2,Le/2,He*.3,He/2,Le/2,He/2);Je.addColorStop(0,"rgba(255,255,255,1)"),Je.addColorStop(1,"rgba(255,255,255,0)"),Ye.fillStyle=Je,Ye.fillRect(0,0,He,Le)});L.wrapS=L.wrapT=Bn;const Xe={src:ke,mask:L};return et[Oe]=Xe,Xe}let Ie=0;function ut(Oe,Be,ke,L,Xe,Ye=0,He=.012,Le=4){const Je=lt(Oe),be=c(Je.src,L*2/Le,Xe*2/Le),ue=new Ut(new qt(L*2,Xe*2),r("#ffffff",{map:be,alphaMap:Je.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-Ie}));return ue.rotation.set(-sn/2,0,Ye),ue.position.set(Be,He,ke),ue.receiveShadow=!0,ue.renderOrder=-10+Ie++*.01,n.add(ue),ue}const xt={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},st={},_t=Oe=>{const Be=Math.max(0,Math.min(1,Oe));return Be*Be*(3-2*Be)},St=[],Re=Oe=>Oe==="cobble"||Oe==="flag",We=Oe=>Oe.closed?[...Oe.line,Oe.line[0]]:Oe.line;function $e(Oe,Be){let ke=null,L=1e9;for(const Xe of Si){if(Xe===Be||Xe.kind==="stones")continue;const Ye=Uo(Oe[0],Oe[1],We(Xe))-Xe.w/2;Ye<L&&(L=Ye,ke=Xe)}return L<.6?ke:null}function tt(Oe,Be,ke){const L=We(ke),Xe=ke.w/2+.02,Ye=Be?[...Oe].reverse():[...Oe];let He=0;for(;He<Ye.length-2&&Uo(Ye[He][0],Ye[He][1],L)<Xe;)He++;if(He===0)return null;let Le=Ye[He-1],Je=Ye[He];for(let P=0;P<12;P++){const S=[(Le[0]+Je[0])/2,(Le[1]+Je[1])/2];Uo(S[0],S[1],L)<Xe?Le=S:Je=S}const ue=[[(Le[0]+Je[0])/2,(Le[1]+Je[1])/2],...Ye.slice(He)];return Be?ue.reverse():ue}function Qe(Oe,Be){const ke=Oe.kind;let L=We(Oe);const Xe=Oe.closed?[!1,!1]:[!Oe.refs[0],!Oe.refs[Oe.refs.length-1]];if(!Oe.closed&&Re(ke))for(const Ce of[0,1]){if(!Xe[Ce])continue;const Y=Ce?L[L.length-1]:L[0],ve=$e(Y,Oe);if(!ve||ve.kind===ke||!Re(ve.kind))continue;const _e=tt(L,Ce===1,ve);if(!_e)continue;L=_e,Xe[Ce]=!1;const Ge=Ce?L[L.length-1]:L[0],te=Ce?L[L.length-2]:L[1],$=Math.hypot(Ge[0]-te[0],Ge[1]-te[1])||1;St.push({x:Ge[0],z:Ge[1],tx:(Ge[0]-te[0])/$,tz:(Ge[1]-te[1])/$,w:Oe.w,kind:ke})}const Ye=L.length,[He,Le,Je,be]=xt[ke],ue=[0];for(let Ce=1;Ce<Ye;Ce++){const Y=L[Ce],ve=L[Ce-1];ue.push(ue[Ce-1]+Math.hypot(Y[0]-ve[0],Y[1]-ve[1]))}const P=ue[Ye-1],S=.02+Be*.0015,q=[],ye=[],pe=[],De=[];for(let Ce=0;Ce<Ye;Ce++){const Y=L[Math.max(0,Ce-1)],ve=L[Math.min(Ye-1,Ce+1)];let _e=ve[0]-Y[0],Ge=ve[1]-Y[1];if(Oe.closed&&(Ce===0||Ce===Ye-1)){const he=L[Ye-2],ze=L[1];_e=ze[0]-he[0],Ge=ze[1]-he[1]}const te=Math.hypot(_e,Ge)||1,$=-Ge/te,de=_e/te;let Ee=1,x=1;if(!Oe.closed)for(const he of[0,1]){const ze=he?P-ue[Ce]:ue[Ce];Xe[he]&&(Ee=Math.max(Ee,1+.5*(1-_t(ze/2.4))),x=Math.min(x,_t(ze/2.2)))}const G=Oe.w/2*Ee,K=[-(G+Je),-(G-Je),G-Je,G+Je],O=[0,x,x,0],se=L[Ce];for(let he=0;he<4;he++){const ze=se[0]+$*K[he],dt=se[1]+de*K[he];q.push(ze,S,dt),ye.push(ze/Le,dt/Le),pe.push(1,1,1,O[he])}if(Ce>0)for(let he=0;he<3;he++){const ze=(Ce-1)*4+he,dt=ze+1,vt=Ce*4+he,ot=vt+1;De.push(dt,ot,ze,ze,ot,vt)}}const Fe=new jt;Fe.setAttribute("position",new Rt(q,3)),Fe.setAttribute("uv",new Rt(ye,2)),Fe.setAttribute("color",new Rt(pe,4)),Fe.setIndex(De),Fe.computeVertexNormals();let Se=st[ke];Se||(Se=r("#ffffff",{map:He,normalMap:p(be,ke==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),st[ke]=Se);const Me=new Ut(Fe,Se);Me.receiveShadow=!0,Me.renderOrder=-5+Be*.01,n.add(Me)}const wt=[];function rt(Oe){const Be=Oe.length,ke=Oe.map(([He,Le])=>Uo(He,Le,ia)<1.35);if(!ke.some(Boolean))return[{pts:[...Oe],closed:!0}];const L=ke.findIndex((He,Le)=>!He&&ke[(Le-1+Be)%Be]),Xe=[];let Ye=[];for(let He=0;He<=Be;He++){const Le=(L+He)%Be;if(!ke[Le]&&He<Be){Ye.push(Oe[Le]);continue}if(Ye.length>1&&Xe.push({pts:Ye,closed:!1}),He<Be&&ke[Le]&&Ye.length){let Je=He;for(;Je<Be&&ke[(L+Je)%Be];)Je++;const be=Ye[Ye.length-1],ue=Oe[(L+Je)%Be],P=ue[0]-be[0],S=ue[1]-be[1],q=Math.hypot(P,S);wt.push({x:(be[0]+ue[0])/2,z:(be[1]+ue[1])/2,ang:Math.atan2(-S,P),len:q})}Ye=[]}return Xe}Si.forEach((Oe,Be)=>{if(Oe.kind!=="stones"){Qe(Oe,Be);return}const ke=i.roadStones.clone();ke.wrapS=Bn,ke.wrapT=ni,ke.repeat.set(1,1/1.3),ke.needsUpdate=!0;const L=r("#ffffff",{map:ke,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const Xe of rt(Oe.line)){const Ye=new Ut(Pu(Xe.pts,Oe.w,Xe.closed,.03),L);Ye.receiveShadow=!0,n.add(Ye)}});{const Oe=(Je,be,ue,P,S,q)=>{const ye=S-ue,pe=q-P,De=ye*ye+pe*pe||1,Fe=Math.max(0,Math.min(1,((Je-ue)*ye+(be-P)*pe)/De));return Math.hypot(Je-ue-ye*Fe,be-P-pe*Fe)},Be=(Je,be,ue,P)=>{for(const S of Si){if(S===ue)continue;const q=We(S),ye=S.w/2+P;for(let pe=0;pe<q.length-1;pe++){const De=q[pe],Fe=q[pe+1];if(!(Math.abs(De[0]-Je)>ye+1||Math.abs(De[1]-be)>ye+1)&&Oe(Je,be,De[0],De[1],Fe[0],Fe[1])<ye)return!0}}return!1},ke=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],L=(Je,be)=>{const ue=Math.hypot(Je,be),P=Math.atan2(be,Je);if(ue>7.4&&ue<9&&ke.some(S=>{let q=Math.abs(P-S)%(2*sn);return q=Math.min(q,2*sn-q),q*ue<1.45}))return!0;for(const S of Ks)if(S.kind==="house"){const[q,ye]=na(S,Je,be);if(Math.abs(q)<S.w/2+.9&&Math.abs(ye)<S.d/2+.9||S.deck&&q>S.deck[0]-.5&&q<S.deck[1]+.5&&ye>S.deck[2]&&ye<S.deck[3]+.5)return!0}else if(Math.hypot(Je-S.x,be-S.z)<S.r+.6)return!0;for(const S of Ic)if(S.kind==="hut"){const[q,ye]=na(S,Je,be);if(Math.abs(q)<S.w/2+.9&&Math.abs(ye)<S.d/2+.9)return!0}else if(Math.hypot(Je-S.x,be-S.z)<(S.r||2)+.4)return!0;return Math.hypot(Je,be)>as(Math.atan2(be,Je))-1.2},Xe=[],Ye=[],He=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const Je of Si){if(Je.kind==="stones")continue;const be=We(Je),ue=Je.kind!=="dirt",P=S=>{const q=be[Math.max(0,S-1)],ye=be[Math.min(be.length-1,S+1)],pe=Math.hypot(ye[0]-q[0],ye[1]-q[1])||1;return[-(ye[1]-q[1])/pe,(ye[0]-q[0])/pe]};for(let S=0;S<be.length;S++){const[q,ye]=P(S),pe=Math.atan2(q,ye)+sn/2,De=be[S];for(const Fe of[-1,1]){const Se=Je.w/2+.07,Me=De[0]+q*Fe*Se,Ce=De[1]+ye*Fe*Se;if(!(L(Me,Ce)||Be(Me,Ce,Je,.25))&&(ue&&Xe.push({x:Me,y:.04,z:Ce,sx:.2,sy:.13,sz:d(.4,.47),ry:pe+d(-.04,.04),c:Je.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),S%3===0&&h()<.7)){const Y=Se+(ue?.25:.1)+d(0,.35),ve=De[0]+q*Fe*Y,_e=De[1]+ye*Fe*Y;if(!L(ve,_e)&&!Be(ve,_e,Je,.2)){const Ge=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let te=0;te<5;te++)Ye.push({x:ve+d(-.15,.15),y:.11,z:_e+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:Ge})}}}}if(!ue&&Je.w>1.5)for(const S of[-1,1]){const q=be.map((pe,De)=>{const[Fe,Se]=P(De);return[pe[0]+Fe*S*.45,pe[1]+Se*S*.45]}),ye=new Ut(Pu(q,.18,!1,.035),He);ye.receiveShadow=!0,ye.renderOrder=-4,n.add(ye)}}for(const Je of St){const be=-Je.tz,ue=Je.tx,P=Math.max(2,Math.round((Je.w+.3)/.42));for(let S=0;S<P;S++){const q=-((Je.w+.3)/2)+(S+.5)*(Je.w+.3)/P;Xe.push({x:Je.x+be*q-Je.tx*.1,y:.045,z:Je.z+ue*q-Je.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(be,ue)+sn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new pa(1,1,1,1,.2),Xe,{cast:!1});const Le=m(new mn(.06,.24,4),Ye,{});Le&&(Le.userData.noLine=!0)}return{models:re,skyDome:w,sun:z,island:F,cloudRing:ne,grassTex:oe,strataMat:ee,crossings:wt,patch:ut}}const{PI:pt}=Math;function FM(s){const{M:e,COL:t,TEX:n,toon:i,glow:r,mesh:o,rbox:l,at:a,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:v,tiled:m,planarUV:_,wallUV:y}=s,C=s.scene,T=[],U=[],D=[],M=[],w=v(64,128,(A,N,R)=>{const I=()=>{A.beginPath(),A.moveTo(N/2,2),A.bezierCurveTo(N*.62,R*.3,N*.98,R*.55,N*.86,R*.8),A.bezierCurveTo(N*.76,R*.98,N*.24,R*.98,N*.14,R*.8),A.bezierCurveTo(N*.02,R*.55,N*.38,R*.3,N/2,2),A.closePath()},Q=A.createLinearGradient(0,R,0,0);Q.addColorStop(0,"rgba(255, 246, 214, 1)"),Q.addColorStop(.3,"rgba(255, 196, 92, 1)"),Q.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),Q.addColorStop(1,"rgba(220, 40, 30, 0)"),I(),A.fillStyle=Q,A.fill(),A.save(),A.translate(N*.5,R*.92),A.scale(.5,.55),A.translate(-N*.5,-R*.92),I(),A.fillStyle="rgba(255, 252, 235, 0.9)",A.fill(),A.restore()});w.wrapS=w.wrapT=Bn;const z=new zs({map:w,color:new gt(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),k=new zs({map:w,color:new gt(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),j=new zs({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Ui});function oe(A,N,R,I,Q=1){const ce=new Te,H=new cs(z);H.center.set(.5,.06),H.scale.set(.34*Q,.68*Q,1),ce.add(H);const b=new cs(k);b.center.set(.5,.04),b.scale.set(.18*Q,.34*Q,1),ce.add(b);const ie=new cs(j);return ie.scale.setScalar(1.5*Q),ie.position.y=.2*Q,ce.add(ie),ce.position.set(N,R,I),A.add(ce),U.push({f:ce,ph:u(0,6),s:Q}),ce}const ee=(()=>{const A=new Te,N=o(new Xt(.5,16,12),e.bone);N.scale.set(1,.92,1.05),N.position.y=.14,A.add(N),A.add(a(o(new Ae(.62,.28,.5),e.bone),0,-.24,.16));for(const R of[-1,1]){const I=o(new Xt(.14,10,8),e.dark,!1);I.scale.z=.5,I.position.set(R*.19,.08,.45),A.add(I)}return A.add(c(a(o(new mn(.06,.12,3),e.dark,!1),0,-.1,.5),pt,0,0)),A.add(a(o(new Ae(.42,.03,.02),e.dark,!1),0,-.25,.42)),A})();function F(A=.3){const N=ee.clone();return N.scale.setScalar(A),N}function re(A=1,N=e.bone){const R=new Te;for(const I of[-1,1]){const Q=o(new pn(.5*A,.09*A,6,12,pt*.6),N);Q.rotation.set(0,I>0?0:pt,.25),Q.position.set(I*.35*A,0,0),R.add(Q)}return R}let le=7;const J=(A,N)=>A+(N-A)*((le=le*16807%2147483647)/2147483647);function ne(A,N,R,I,Q,ce,H,b,ie=0){const X=a(o(ie?l(ce,H,b,ie):new Ae(ce,H,b),N),R,I,Q);return A.add(X),X}function ae(A,N,R,I=.75){const Q=new Ae(A,N,R),ce=Q.attributes.position;for(let H=0;H<ce.count;H++)ce.getY(H)<0&&(ce.setX(H,ce.getX(H)*I),ce.setZ(H,ce.getZ(H)*I));return Q.computeVertexNormals(),Q}function fe(A,N,R,I,Q,ce,H=Math.max(2,Math.round(R/.2))){const b=R/H;for(let ie=0;ie<H;ie++)ne(A,ce,0,I+J(-.004,.004),-R/2+b*(ie+.5),N+J(-.02,.02),Q,b-.012,.012)}function we(A,N,R,I,Q,ce){ne(A,e.iron,N-Q*.055,R,I-ce*.012,.13,.014,.028),ne(A,e.iron,N-Q*.012,R,I-ce*.055,.028,.014,.13)}const Ze=(()=>{const A=[];for(let N=0;N<=10;N++){const R=N/10;A.push(new Ue(.3+Math.sin(R*pt)*.06,(R-.5)*.8))}return new bc(A,20)})(),nt=A=>.3+Math.sin((A/.8+.5)*pt)*.06;function me(A=1,N=!1){const R=new Te,I=o(Ze,i("#ffffff",{map:n.planks}));for(const Q of[-.33,-.17,.17,.33])I.add(a(c(o(new pn(nt(Q)+.006,.02,5,24),e.iron),pt/2,0,0),0,Q,0));for(const Q of[-.17,.17])for(let ce=0;ce<6;ce++){const H=ce/6*pt*2;I.add(a(o(new Xt(.016,5,4),e.ironL),Math.cos(H)*(nt(Q)+.025),Q,Math.sin(H)*(nt(Q)+.025)))}I.add(a(c(o(new ai(.3,20),e.woodD),-pt/2,0,0),0,.392,0)),I.add(a(c(o(new pn(.3,.018,4,24),e.woodD),pt/2,0,0),0,.4,0));for(const Q of[-.1,0,.1])I.add(a(o(new Ae(.004,.004,.5),e.dark,!1),Q,.394,0));return I.add(a(o(new je(.035,.035,.03,8),e.woodL),.15,.4,.05)),I.scale.setScalar(A),N?(I.rotation.z=pt/2,I.position.y=.36*A):I.position.y=.4*A,R.add(I),R}const Ve=i("#ffffff",{map:v(128,128,(A,N,R)=>{A.fillStyle="#7a5538",A.fillRect(0,0,N,R);for(let I=0;I<4;I++)A.fillStyle=I%2?"#70502f":"#84603f",A.fillRect(0,I*32,N,30),A.fillStyle="rgba(40, 24, 14, 0.6)",A.fillRect(0,I*32+30,N,2)})});function et(A=.6){const N=new Te;ne(N,Ve,0,A/2,0,A*.94,A*.94,A*.94);const R=A*.09,I=A/2-R/2;for(const Q of[-1,1])for(const ce of[-1,1])ne(N,e.woodD,Q*I,A/2,ce*I,R,A,R),ne(N,e.woodD,0,A/2+Q*I,ce*I,A-R*2,R,R),ne(N,e.woodD,Q*I,A/2+ce*I,0,R,R,A-R*2);for(const Q of[-1,1]){const ce=ne(N,e.woodD,0,A/2,Q*(A*.47+.006),A*1.1,R*.8,R*.4);ce.rotation.z=Q*pt/4}for(const Q of[-1,1])for(const ce of[-1,1])for(const H of[-1,1])ne(N,e.iron,Q*(I+.006),A/2+ce*(I+.006),H*(I+.006),R*1.2,R*1.2,R*1.2);return N}function lt(){const A=new Te,N=o(new Xt(.28,12,10),i("#b8a07a"));return N.scale.set(1,1.15,.9),N.position.y=.3,A.add(N),A.add(a(o(new je(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),A}function Ie(A,N,R=.8,I=e.wood){const Q=new Te,ce=.07;fe(Q,A,N,R-ce/2,ce,I);for(const b of[-1,1])ne(Q,e.woodD,0,R-ce-.06,b*(N/2-.12),A-.34,.12,.04,.01),ne(Q,e.woodD,b*(A/2-.12),R-ce-.06,0,.04,.12,N-.34,.01);const H=ae(.1,R-ce,.1,.72);for(const[b,ie]of[[-1,-1],[1,-1],[-1,1],[1,1]])Q.add(a(o(H,e.woodD),b*(A/2-.12),(R-ce)/2,ie*(N/2-.12))),we(Q,b*A/2,R+.004,ie*N/2,b,ie);ne(Q,e.woodD,0,.17,0,A-.3,.06,.05,.01);for(const b of[-1,1])ne(Q,e.woodD,b*(A/2-.12),.17,0,.05,.06,N-.3,.01);return Q}function ut(A=.7){const N=new Te;N.add(a(o(new je(A,A,.08,24),e.wood),0,.76,0)),N.add(a(c(o(new pn(A,.022,5,32),e.iron),pt/2,0,0),0,.76,0));for(const R of[-A*.5,0,A*.5])ne(N,e.dark,R,.801,0,.006,.004,Math.sqrt(A*A-R*R)*1.96);N.add(a(o(new je(.08,.11,.7,10),e.woodD),0,.37,0)),N.add(a(o(new je(.13,.13,.06,10),e.iron),0,.5,0));for(let R=0;R<4;R++){const I=R*pt/2+pt/4,Q=ne(N,e.woodD,Math.sin(I)*A*.25,.05,Math.cos(I)*A*.25,.09,.08,A*.6,.015);Q.rotation.y=I}return N}function xt(){const A=new Te;A.add(a(o(new je(.24,.24,.07,16),e.wood),0,.45,0)),A.add(a(c(o(new pn(.24,.012,4,20),e.iron),pt/2,0,0),0,.45,0));for(let N=0;N<3;N++){const R=N/3*pt*2+.5,I=o(new je(.028,.034,.46,6),e.woodD);I.position.set(Math.cos(R)*.15,.22,Math.sin(R)*.15),I.rotation.set(-Math.sin(R)*.2,0,Math.cos(R)*.2),A.add(I)}return A.add(a(c(o(new pn(.16,.014,4,14),e.woodD),pt/2,0,0),0,.17,0)),A}function st(A=1.8,N=!0){const R=new Te;for(const I of[-1,1])ne(R,e.woodL,J(-.01,.01),.45,I*.11,A,.07,.2,.015);for(const I of[-1,1]){const Q=I*(A/2-.2);for(const ce of[-1,1]){const H=a(o(ae(.08,.44,.07,1),e.woodD),Q,.21,ce*.12);H.rotation.x=-ce*.2,R.add(H)}ne(R,e.woodD,Q,.385,0,.09,.06,.44,.01),ne(R,e.iron,Q,.487,.2,.1,.012,.03)}if(ne(R,e.woodD,0,.14,0,A-.4,.05,.05,.01),N){for(const I of[-1,1])ne(R,e.woodD,I*(A/2-.2),.74,-.21,.07,.56,.06,.012);for(const I of[.64,.9])ne(R,e.woodL,J(-.01,.01),I,-.225,A-.1,.11,.05,.015)}return R}function _t(A=.16,N=0){const R=new Te;if(R.add(a(o(new je(.04,.045,A,10),i("#eadfc4")),0,A/2,0)),oe(R,0,A,0,.35),N){const I=new Ji("#ffb36a",N,5,2);I.position.y=A+.15,R.add(I)}return R}function St(){const A=new Te;return A.add(a(F(.22),0,.12,0)),A.add(a(_t(.14),0,.24,0)),A}function Re(A){const N=new Te,R=i(A,{emissive:A,emissiveIntensity:.18});return N.add(a(o(new je(.06,.07,.2,10),R),0,.1,0)),N.add(a(o(new je(.022,.03,.1,8),R),0,.25,0)),N}function We(){const A=new Te;return A.add(a(o(new je(.07,.06,.15,12),e.woodL),0,.075,0)),A.add(a(c(o(new ai(.062,12),i("#efe0b0")),-pt/2,0,0),0,.14,0)),A.add(a(o(new pn(.045,.012,6,12),e.woodL),.08,.08,0)),A}function $e(A=1){const N=new Te;N.add(a(o(new je(.22*A,.16*A,.34*A,12),i("#8a4a30")),0,.17*A,0));for(let R=0;R<6;R++){const I=R/6*pt*2;d(N,new V(Math.cos(I)*.06*A,.32*A,Math.sin(I)*.06*A),new V(Math.cos(I)*.5,1,Math.sin(I)*.5),.5*A,.1*A,i(p([t.leaf,t.leafD,t.leafL])),0,5)}return N}const tt=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],Qe=s.UNIT_BOX;function wt(A=2){const N=new Te,R=2.4,I=.5;ne(N,i("#3a2519"),0,R/2,-I/2+.03,A-.1,R-.1,.04);for(const ce of[-1,1])ne(N,e.woodD,ce*(A/2-.04),R/2,0,.08,R,I,.015);for(let ce=0;ce<4;ce++){const H=ce<3?.27+ce*.72:R-.03;ne(N,e.wood,0,H,0,A-.14,.06,I-.04),ne(N,e.woodL,0,H+.01,I/2-.02,A-.12,.08,.04,.01)}ne(N,e.woodD,0,.1,.02,A,.2,I,.02),ne(N,e.wood,0,R+.04,.02,A+.1,.08,I+.08,.02),ne(N,e.woodD,0,R+.11,.03,A+.18,.07,I+.14,.02);for(const ce of[-1,1])ne(N,e.iron,ce*(A/2-.02),R-.12,I/2+.004,.06,.2,.012),ne(N,e.iron,ce*(A/2-.1),R-.04,I/2+.004,.2,.06,.012);N.add(a(F(.13),A/2-.25,2.62,.05));const Q=[];for(let ce=0;ce<3;ce++){let H=-A/2+.12;for(;H<A/2-.2;){if(f()<.12){H+=.18;continue}const b=u(.07,.14),ie=u(.34,.56),X=f()<.1?.18:0;Q.push({x:H+b/2,y:.33+ce*.72+ie/2,z:.08,sx:b,sy:ie,sz:u(.28,.36),rz:X,c:p(tt)}),H+=b+.012+X*.4}}return s.instanced(Qe,Q,{parent:N,cast:!0}),N}function rt(A,N){const R=v(512,512,(ce,H)=>{N.forEach((b,ie)=>{ce.fillStyle=b,ce.beginPath(),ce.arc(H/2,H/2,H/2-ie*34,0,pt*2),ce.fill()}),ce.fillStyle=N[1];for(let b=0;b<12;b++){const ie=b/12*pt*2;ce.beginPath(),ce.arc(256+Math.cos(ie)*196,256+Math.sin(ie)*196,10,0,pt*2),ce.fill()}}),I=o(new ai(A,48),i("#ffffff",{map:R}),!1);I.rotation.x=-pt/2,I.position.y=.012;const Q=new Te;return Q.add(I),Q}function Oe(A=n.painting){const N=new Te;for(const R of[-1,1]){const I=a(o(new Ae(.06,1.8,.06),e.wood),R*.36,.9,0);I.rotation.z=R*-.12,N.add(I)}return N.add(c(a(o(new Ae(.06,1.7,.06),e.wood),0,.84,-.3),.35,0,0)),N.add(a(o(new Ae(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),N.add(a(new Ut(new qt(.95,.72),new An({map:A,toneMapped:!1})),0,1.25,.079)),N.add(a(o(new Ae(1,.05,.14),e.wood),0,.82,.08)),N}function Be(A){const N=new Te;fe(N,1.7,.84,.745,.08,e.woodL,4),ne(N,e.woodD,0,.78,.43,1.74,.05,.03,.01),ne(N,e.wood,.55,.36,0,.5,.66,.76,.02);for(let I=0;I<3;I++)ne(N,e.woodL,.55,.15+I*.2,.385,.44,.17,.02,.01),ne(N,e.iron,.55,.17+I*.2,.402,.12,.025,.02);for(const I of[-.34,.34])N.add(a(o(ae(.09,.7,.09,.7),e.woodD),-.76,.35,I));ne(N,e.woodD,-.76,.14,0,.05,.05,.62,.01);for(const I of[-1,1])we(N,I*.85,.79,.42,I,1);const R={g:N,kb:null,screen:null,light:null};if(A==="screen"){const I=a(new Te,-.12,.805,-.25);I.userData.y0=.805,I.add(o(new Ae(.62,.035,.2),e.iron));for(const[ie,X]of[[-.06,.54],[0,.56],[.06,.5]])I.add(a(o(new Ae(X,.012,.04),r("#ff5a3a",.55),!1),0,.022,ie));N.add(I),R.kb=I;const Q=new Te;Q.add(o(new Ae(1.04,.7,.05),e.woodD));const ce=new An({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),H=c(a(new Ut(new qt(.92,.58),ce),0,0,-.03),0,pt,0);Q.add(H),R.screen=H,Q.add(a(new Ut(new qt(.92,.58),ce),0,0,.03)),Q.add(a(o(new Ae(.08,.13,.08),e.woodD),0,-.41,0)),Q.add(a(o(new Ae(.34,.02,.2),e.woodD),0,-.455,0)),Q.add(a(F(.09),.46,.4,0)),Q.position.set(-.12,1.25,.17),N.add(Q);const b=new Ji("#7fe8ff",0,3.2,2);b.position.set(-.12,1.25,-.35),N.add(b),R.light=b,N.add(a(We(),.6,.79,.15))}else A==="paper"?(N.add(c(a(new Ut(new qt(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-pt/2,0,0)),N.add(c(a(o(new je(.012,.012,.22,6),e.red),.35,.81,.1),0,0,pt/2)),N.add(a(_t(.12),.65,.79,-.25))):A==="books"&&(N.add(a(o(new Ae(.42,.06,.3),e.red),-.35,.82,0)),N.add(a(o(new Ae(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),N.add(a(o(new Ae(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),N.add(a(St(),.62,.79,-.22)));return N.add(a(o(new je(.25,.21,.44,14),e.woodD),0,.22,-.78)),R}function ke(){const A=new Te;return A.add(a(o(new je(.3,.38,.5,10),e.woodD),0,.25,0)),A.add(a(o(new Ae(.34,.2,.22),e.iron),0,.6,0)),A.add(a(o(new Ae(.7,.14,.3),e.ironL),0,.77,0)),d(A,new V(.35,.77,0),new V(1,0,0),.32,.1,e.ironL,0,10),A.add(a(o(new Ae(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),A}function L(){const A=new Te;return A.add(a(o(new je(.06,.06,1.6,8),e.wood),0,.8,0)),A.add(a(o(new je(.28,.32,.8,12),e.straw),0,1.15,0)),A.add(a(o(new Xt(.22,12,10),e.straw),0,1.75,0)),A.add(a(o(new Ae(.9,.08,.08),e.wood),0,1.35,0)),A.add(a(c(o(new pn(.3,.03,6,16),e.red),pt/2,0,0),0,1.2,0)),A}function Xe(){const A=new Te;A.add(c(a(o(new je(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),pt/2,0,0));for(const N of[-1,1])A.add(c(a(o(new Ae(.06,1.4,.06),e.wood),N*.35,.7,-.2),0,0,N*.2));return A}function Ye(A=.42){const N=new Te;return N.add(c(a(o(new je(A,A,.7,16),e.straw),0,A,0),0,0,pt/2)),N}function He(A=0,N=1){const R=new Te;for(let I=0;I<3;I++){const Q=I/3*pt*2,ce=o(new je(.035,.045,1.1,6),e.iron);ce.position.set(Math.cos(Q)*.22,.5,Math.sin(Q)*.22),ce.rotation.set(Math.sin(Q)*.3,0,-Math.cos(Q)*.3),R.add(ce)}R.add(a(o(new je(.42,.24,.3,14,1,!0),e.iron),0,1.05,0)),R.add(c(a(o(new ai(.36,14),e.dark,!1),0,1.12,0),-pt/2,0,0)),R.add(a(o(new Xt(.3,10,6,0,pt*2,0,pt/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let I=0;I<4;I++){const Q=I/4*pt*2;d(R,new V(Math.cos(Q)*.42,1.18,Math.sin(Q)*.42),new V(Math.cos(Q)*.4,1,Math.sin(Q)*.4),.22,.04,e.iron,0,5)}if(oe(R,0,1.12,0,1.6),A){const I=new Ji("#ff9a4a",A,9,2);I.position.y=1.7,R.add(I),M.push({l:I,base:A,ph:u(0,6)})}return R.scale.setScalar(N),R}function Le(){const A=new Te;A.add(c(a(o(new Ae(.06,.06,.3),e.iron),0,0,.12),0,0,0));const N=a(o(new je(.045,.06,.5,8),e.woodD),0,.12,.26);return N.rotation.x=.35,A.add(N),A.add(a(o(new je(.08,.06,.12,8),e.iron),0,.36,.34)),oe(A,0,.4,.35,.9),A}function Je(A=3.2,N=n.banner){const R=new Te;R.add(a(o(new je(.05,.07,A+.6,8),e.woodD),0,(A+.6)/2,0)),R.add(c(a(o(new je(.03,.03,1,6),e.iron),0,A+.4,.05),0,0,pt/2)),R.add(a(F(.16),0,A+.72,.02));const I=new Ut(new qt(.9,1.9,1,8),i("#ffffff",{map:N,side:on})),Q=I.geometry.attributes.position;for(let ce=0;ce<Q.count;ce++)Q.setZ(ce,Math.sin(Q.getY(ce)*2.6)*.05);return I.geometry.computeVertexNormals(),I.position.set(0,A-.55,.08),I.castShadow=!0,R.add(I),R}function be(A=1.2,N=2.6){const R=new Te;R.add(c(a(o(new je(.04,.04,A+.3,6),e.iron),0,0,.04),0,0,pt/2));const I=o(new qt(A,N),i("#ffffff",{map:n.banner,side:on}),!1);return I.position.set(0,-N/2,.05),R.add(I),R}function ue(A=2.4){const N=new Te;N.add(a(o(new je(.05,.08,A,7),e.woodD),0,A/2,0)),N.add(a(F(.24),0,A+.12,0)),N.add(a(re(.5),0,A+.2,0));for(let R=0;R<3;R++){const I=o(new qt(.12,u(.5,.9)),i(p([t.red,t.redD,t.bone]),{side:on}),!1);I.position.set(Math.cos(R*2.1)*.08,A-.5,Math.sin(R*2.1)*.08),I.rotation.y=R*2.1,N.add(I)}return N}function P(A=3){const N=new Te,R=Math.max(2,Math.round(A/.9));N.add(c(a(o(new je(.1,.1,A,8),e.wood),0,.45,0),0,0,pt/2));for(let I=0;I<R;I++){const Q=-A/2+(I+.5)*A/R;for(const ce of[-1,1]){const H=new Te;H.add(a(o(new je(.07,.07,1.4,7),e.woodL),0,0,0)),H.add(a(o(new mn(.07,.3,7),e.boneD),0,.85,0)),H.position.set(Q,.45,0),H.rotation.x=ce*.8,N.add(H)}}return N}function S(){const A=new Te;A.add(a(o(new je(.55,.5,.9,18),e.redD),0,.75,0)),A.add(a(o(new je(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let N=0;N<3;N++){const R=N/3*pt*2;A.add(c(a(o(new je(.04,.05,.7,6),e.woodD),Math.cos(R)*.42,.3,Math.sin(R)*.42),Math.sin(R)*.2,0,-Math.cos(R)*.2))}return A.add(a(c(o(new pn(.53,.03,6,20),e.bone),pt/2,0,0),0,1.05,0)),A}function q(A=4){const N=new Te,R=[t.red,t.woodL,t.redD,t.wood];for(let I=0;I<4;I++){const Q=o(new je(.42,.46,A/4,10),i(R[I]));Q.position.y=A/8+I*A/4,N.add(Q);for(const ce of[-1,1])N.add(a(o(new Ae(.12,.08,.06),e.bone),ce*.15,Q.position.y+.05,.42));N.add(a(o(new Ae(.36,.06,.06),e.dark),0,Q.position.y-.18,.43))}N.add(a(F(.45),0,A+.25,0)),N.add(a(re(1.1),0,A+.35,0));for(const I of[-1,1])N.add(c(a(o(new Ae(1,.12,.1),e.woodD),I*.55,A*.72,0),0,0,I*.2));return N}function ye(A=1.9,N=2.6,R="#8a6a4a"){const I=new Te,Q=o(new mn(A,N,8,1,!0),i(R,{side:on}));Q.position.y=N/2,I.add(Q);for(let ce=0;ce<3;ce++){const H=ce/3*pt*2+.4;I.add(c(a(o(new je(.04,.04,.9,6),e.woodD),Math.cos(H)*.12,N+.25,Math.sin(H)*.12),Math.sin(H)*.4,0,-Math.cos(H)*.4))}return I.add(c(a(o(new qt(.9,1.3),e.dark,!1),0,.65,A*.82),-.6,0,0)),I.add(c(a(o(new pn(A*.62,.05,6,24),e.redD),0,N*.35,0),pt/2,0,0)),I}function pe(A=4){const N=new Te;N.add(a(o(new Ae(1.8,.1,.1),e.wood),0,1.25,0)),N.add(a(o(new Ae(1.8,.1,.1),e.wood),0,.3,.12));for(const R of[-1,1])N.add(a(o(new Ae(.1,1.35,.1),e.woodD),R*.85,.67,0));for(let R=0;R<A;R++){const I=-.6+R*1.2/(A-1),Q=new Te;R%2?(Q.add(a(o(new Ae(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),Q.add(a(o(new Ae(.22,.05,.06),e.gold),0,.2,0))):(Q.add(a(o(new je(.03,.03,1.4,6),e.woodD),0,.7,0)),Q.add(a(o(new Ae(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),Q.position.set(I,.05,.08),Q.rotation.z=.08,N.add(Q)}return N}function De(A=2){const N=new Te,R=[];for(let I=0;I<4;I++)for(let Q=0;Q<Math.floor(A/.26)-I;Q++)R.push([-A/2+.13+Q*.26+I*.13,.13+I*.22,0]);for(const[I,Q]of R)N.add(c(a(o(new je(.12,.12,.9,8),i(p([t.woodL,"#8a6440","#6e4a30"]))),I,Q,0),pt/2,0,0));return N}function Fe(){const A=new Te;A.add(a(o(new Ae(1.6,.12,1),e.wood),0,.62,0));for(const N of[-1,1])A.add(a(o(new Ae(1.6,.36,.06),e.woodL),0,.85,N*.47)),A.add(c(a(o(new je(.42,.42,.08,14),e.woodD),0,.42,N*.58),pt/2,0,0));for(const N of[-1,1])A.add(c(a(o(new Ae(1.4,.07,.07),e.woodD),1.3,.55,N*.35),0,0,-.18));return A.add(a(lt(),-.3,.68,.1)),A.add(a(et(.4),.35,.68,-.15)),A}function Se(){const A=new Te;A.add(Ie(2.2,.9,.9,e.woodL));for(const[I,Q]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])A.add(a(o(new Ae(.08,2.2,.08),e.woodD),I,1.1,Q));const N=v(256,64,(I,Q,ce)=>{for(let H=0;H<8;H++)I.fillStyle=H%2?"#e3d5b6":"#8a2420",I.fillRect(H*32,0,32,ce)}),R=o(new Ae(2.5,.05,1.4),i("#ffffff",{map:N}));R.position.set(0,2.2,.15),R.rotation.x=.22,A.add(R);for(let I=0;I<9;I++)A.add(a(o(new Xt(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return A.add(a(et(.5),-1.4,0,.3)),A.add(a(me(.8),1.5,0,-.1)),A}function Me(){const A=new Te;A.add(a(o(_(new je(1,1.1,.9,22),1.2),e.stone),0,.45,0)),A.add(c(a(o(new ai(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-pt/2,0,0));for(const R of[-1,1])A.add(a(o(new Ae(.14,1.7,.14),e.woodD),R*.95,1.5,0));const N=o(new mn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return N.position.y=2.65,N.rotation.y=pt/4,A.add(N),A.add(c(a(o(new je(.06,.06,1.9,8),e.wood),0,2.05,0),0,0,pt/2)),A.add(a(o(new je(.15,.13,.22,10),e.woodL),.2,1.55,0)),A.add(a(F(.18),0,3.15,0)),A}function Ce(A=0){const N=new Te;N.add(a(o(new je(.07,.1,2.8,8),e.iron),0,1.4,0)),N.add(a(o(new Ae(.55,.06,.06),e.iron),.22,2.7,0));const R=new Te;if(R.add(o(new je(.14,.18,.32,8),e.iron)),R.add(a(o(new Xt(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),A){const I=new Ji("#ffc477",A,9,2);R.add(I)}return R.position.set(.44,2.44,0),N.add(R),N}function Y(){const A=new Te;ne(A,e.wood,0,.25,0,1,.5,.6,.02),A.add(c(a(o(new je(.3,.3,1,16,1,!1,0,pt),e.woodL),0,.5,0),0,0,pt/2));for(const N of[-.38,.38])ne(A,e.iron,N,.27,0,.07,.52,.62),A.add(a(c(o(new pn(.31,.025,4,16,pt),e.iron),0,pt/2,0),N,.5,0));for(const N of[-1,1])for(const R of[-1,1])ne(A,e.iron,N*.49,.05,R*.29,.06,.1,.06);ne(A,e.gold,0,.44,.31,.16,.2,.025),ne(A,e.dark,0,.42,.325,.03,.06,.01);for(const N of[-1,1])A.add(a(c(o(new pn(.06,.012,4,12),e.iron),0,pt/2,0),N*.51,.3,0));return A.add(a(F(.1),0,.62,.22)),A}function ve(){const A=new Te;ne(A,e.woodD,0,.25,0,1.3,.5,1.1,.03),ne(A,e.red,0,.58,.05,1.08,.16,.9,.06),ne(A,e.woodD,0,1.2,-.48,1.3,1.9,.2,.03),ne(A,e.red,0,1.25,-.36,.9,1.3,.06,.03);for(let N=0;N<4;N++)for(const R of[-1,1])A.add(a(o(new Xt(.03,6,4),e.gold),R*.4,.7+N*.36,-.32));for(const N of[-1,1])ne(A,e.woodD,N*.62,.75,0,.18,.5,1,.03),ne(A,e.iron,N*.62,1.01,.1,.22,.04,.8,.01),A.add(a(F(.12),N*.62,1.1,.45)),d(A,new V(N*.55,2.15,-.48),new V(N*.3,1,0),.5,.08,e.bone,0,6);return A.add(a(F(.32),0,2.25,-.4)),A.add(a(re(1),0,2.3,-.4)),A}function _e(A=t.red){const N=new Te;return N.add(c(o(new je(.42,.42,.06,18),i(A)),pt/2,0,0)),N.add(c(a(o(new pn(.42,.04,6,20),e.iron),0,0,.03),0,0,0)),N.add(a(F(.16),0,0,.08)),N}function Ge(){const A=new Te;return A.add(o(new Ae(.7,.8,.08),e.woodD)),A.add(a(F(.32),0,.02,.18)),A.add(a(re(1),0,.12,.16)),A}function te(A=.7,N=6){const R=new Te;R.add(a(o(new je(.012,.012,1,4),e.iron),0,.5,0)),R.add(c(o(new pn(A,.04,6,24),e.iron),pt/2,0,0));for(let I=0;I<N;I++){const Q=I/N*pt*2;R.add(a(_t(.12),Math.cos(Q)*A,.02,Math.sin(Q)*A))}return R}function $(A,N,R,I){for(let Q=0;Q<N.length-1;Q++){const[ce,H]=N[Q],[b,ie]=N[Q+1],X=5;for(let W=1;W<X;W++){const B=W/X,Z=ce+(b-ce)*B,ge=H+(ie-H)*B,Pe=R-Math.sin(B*pt)*I;A.add(a(o(new Xt(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),Z,Pe,ge))}const g=Math.hypot(b-ce,ie-H),E=o(new je(.008,.008,g,3),e.dark,!1);E.position.set((ce+b)/2,R-I*.6,(H+ie)/2),E.rotation.set(0,-Math.atan2(ie-H,b-ce),pt/2),A.add(E)}}function de(A="round",N=1){const R=new Te;if(R.add(a(o(new je(.18*N,.3*N,1.8*N,8),e.wood),0,.9*N,0)),A==="pine")for(let I=0;I<4;I++)R.add(a(o(new mn((1.5-I*.3)*N,1.4*N,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+I*.8)*N,0));else if(A==="dead")for(let I=0;I<4;I++){const Q=o(new je(.04*N,.1*N,1.2*N,6),e.woodD),ce=I*1.7;Q.position.set(Math.cos(ce)*.3*N,(1.6+I*.25)*N,Math.sin(ce)*.3*N),Q.rotation.set(Math.sin(ce)*.8,0,-Math.cos(ce)*.8),R.add(Q)}else{const I=A==="autumn"?[t.autumn1,t.autumn2,t.autumn3]:[t.leaf,t.leafD,t.leafL];for(const[Q,ce,H,b]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])R.add(a(o(new Xt(b*N,14,10),i(p(I))),Q*N,ce*N,H*N))}return R.rotation.y=u(0,3),R}const Ee=new Map;function x(A,N,R,I,Q=0){const ce=new Ct().compose(new V(R,Q,I),new Vn().setFromAxisAngle(new V(0,1,0),u(0,2*pt)),new V(N*u(.92,1.08),N*u(.9,1.12),N*u(.92,1.08))),H=Ee.get(A);return H?H.push(ce):Ee.set(A,[ce]),!0}function G(A){A.flora.scene.updateMatrixWorld(!0);for(const[N,R]of Ee){const I=Xf(A.flora,N);if(!I)throw new Error(`no flora model for ${N}`);for(const[Q,ce]of Wf(s,I)){const H=ce.length===1?ce[0]:Dc(ce,!1);if(!H)continue;const b=new kr(H,Q,R.length);R.forEach((ie,X)=>b.setMatrixAt(X,ie)),b.castShadow=!Q.isMeshStandardMaterial,b.receiveShadow=!0,b.frustumCulled=!1,C.add(b)}}}function K(){const A=new Te;A.add(a(o(new je(.3,.38,.6,8),e.stone),0,.3,0));const N=a(o(new wc(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return N.scale.y=1.7,A.add(N),D.push({o:N,axis:"y",v:.6,bob:!0,y0:1}),A}function O(){const A=new Te;A.add(a(o(new Xt(.5,16,10,0,pt*2,pt*.3,pt*.7),i("#2e2a2c",{side:on})),0,.55,0)),A.add(c(a(o(new ai(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-pt/2,0,0));for(let N=0;N<3;N++){const R=N/3*pt*2;A.add(a(o(new je(.04,.04,.3,6),e.iron),Math.cos(R)*.32,.12,Math.sin(R)*.32))}return A}function se(A,N,R=.9,I=-1){for(let Q=0;Q<N.length-1;Q++){if(Q===I)continue;const[ce,H]=N[Q],[b,ie]=N[Q+1],X=Math.hypot(b-ce,ie-H),g=-Math.atan2(ie-H,b-ce);for(const E of[R*.45,R*.85]){const W=o(new Ae(X,.07,.06),e.woodL);W.position.set((ce+b)/2,E,(H+ie)/2),W.rotation.y=g,A.add(W)}for(const[E,W]of[[ce,H],[b,ie]])A.add(a(o(new Ae(.12,R+.15,.12),e.woodD),E,(R+.15)/2,W))}}function he(A){const N=new Te;N.add(a(o(new Ae(.1,2.2,.1),e.woodD),0,1.1,0));const R=v(256,96,(I,Q,ce)=>{I.fillStyle="#6a4630",I.fillRect(0,0,Q,ce),I.strokeStyle="#3a2419",I.lineWidth=8,I.strokeRect(4,4,Q-8,ce-8),I.fillStyle="#e3d5b6",I.font=`800 40px ${$l}`,I.textAlign="center",I.textBaseline="middle",I.fillText(A,Q/2,ce/2+2)});return N.add(a(o(new Ae(1.1,.42,.06),i("#ffffff",{map:R})),.25,1.85,0)),N}function ze(A=t.red){const N=new Te;for(const R of[-1,1])ne(N,e.woodD,R*.48,.24,0,.07,.18,1.96,.015);for(const[R,I,Q]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])ne(N,e.woodD,R,Q/2,I,.1,Q,.1,.015),N.add(a(o(new Xt(.065,8,6),e.wood),R,Q+.04,I));for(let R=0;R<5;R++)ne(N,e.wood,-.32+R*.16,.66,-.98,.07,.5,.04,.01);return ne(N,e.woodD,0,.92,-.98,.98,.09,.07,.015),ne(N,e.woodD,0,.42,-.98,.98,.07,.07,.015),ne(N,e.woodD,0,.5,.98,.98,.14,.06,.015),ne(N,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),ne(N,i(A),0,.5,.25,.96,.07,1.36,.03),ne(N,i(A),0,.535,-.38,.96,.05,.16,.025),ne(N,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),ne(N,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),N.add(a(F(.12),0,1.08,-.94)),N}function dt(){const A=new Te;A.add(ze(t.redD));const N=ze("#4a3a30");N.position.y=1.15,A.add(N);for(const[R,I]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])A.add(a(o(new Ae(.1,2.2,.1),e.wood),R,1.1,I));for(let R=0;R<5;R++)A.add(a(o(new Ae(.06,.05,.06),e.woodL),.52,.4+R*.3,.9));return A}function vt(){const A=new Te;ne(A,e.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const N of[-1,1]){ne(A,e.wood,N*.3,1.05,.31,.56,1.78,.03,.01);for(const R of[.62,1.48])ne(A,e.woodL,N*.3,R,.33,.4,.66,.02,.008);for(const R of[.4,1.7])ne(A,e.iron,N*.52,R,.33,.14,.05,.015);ne(A,e.gold,N*.06,1.08,.34,.03,.14,.03)}ne(A,e.wood,0,2.05,0,1.32,.1,.68,.02),ne(A,e.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const N of[-1,1])for(const R of[-1,1])ne(A,e.woodD,N*.54,.05,R*.24,.12,.1,.12,.02);return A}function ot(A,N=1.8){const R=new Te;return R.add(a(o(y(new Ae(.12,N,A),N,1.3),e.plankWall),0,N/2,0)),R.add(a(o(new Ae(.18,.1,A+.04),e.timber),0,N,0)),R}function Tt(A=.8,N=1.6){const R=new Ut(new qt(A,N,6,1),i(t.red,{side:on})),I=R.geometry.attributes.position;for(let ce=0;ce<I.count;ce++)I.setZ(ce,Math.sin(I.getX(ce)*14)*.04);R.geometry.computeVertexNormals(),R.position.y=N/2+.1;const Q=new Te;return Q.add(R),Q.add(a(c(o(new je(.02,.02,A+.2,6),e.iron),0,0,pt/2),0,N+.12,0)),Q}function Mt(){const A=new Te;for(let N=0;N<5;N++)A.add(c(a(o(new je(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+N%3*.08,u(-.1,.1)),0,u(-.4,.4),pt/2));return A}function Ke(){const A=new Te;for(let R=0;R<3;R++){const I=R/3*pt*2;A.add(c(a(o(new je(.025,.03,1.3,6),e.woodD),Math.cos(I)*.22,.62,Math.sin(I)*.22),Math.sin(I)*.32,0,-Math.cos(I)*.32))}const N=a(c(o(new je(.07,.11,1.3,12),e.gold),.9,0,0),0,1.35,.15);return A.add(N),A}function ft(){const A=new Te;A.add(a(o(new je(.06,.22,.9,10),e.woodD),0,.45,0)),A.add(a(o(new Xt(.34,20,14),i("#2a3050")),0,1.25,0));for(let N=0;N<14;N++){const R=u(0,2*pt),I=u(-1.2,1.2);A.add(a(o(new Xt(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(R)*Math.cos(I)*.345,1.25+Math.sin(I)*.345,Math.sin(R)*Math.cos(I)*.345))}return A.add(a(c(o(new pn(.4,.02,6,28),e.gold),0,pt/2,.3),0,1.25,0)),A}const Zt=v(256,192,(A,N,R)=>{A.fillStyle="#d8c8a0",A.fillRect(0,0,N,R),A.strokeStyle="#6a4a30",A.lineWidth=3,A.beginPath(),A.moveTo(30,150),A.bezierCurveTo(60,60,140,40,220,90),A.bezierCurveTo(200,150,120,170,30,150),A.stroke(),A.fillStyle="#8a2420";for(const[I,Q]of[[90,100],[150,80],[180,120]])A.beginPath(),A.arc(I,Q,6,0,pt*2),A.fill();A.strokeStyle="rgba(106, 74, 48, 0.5)",A.setLineDash([6,6]),A.beginPath(),A.moveTo(90,100),A.lineTo(150,80),A.lineTo(180,120),A.stroke()});function un(){const A=new Te;return A.add(o(new Ae(1.4,1.05,.04),e.woodD)),A.add(a(new Ut(new qt(1.3,.95),new An({map:Zt,toneMapped:!1})),0,0,.03)),A}function fn(){const A=new Te,N=i("#6e6668"),R=i("#4a4446"),I=i("#b8b0a8"),Q=o(new Qo(.32,.8,6,12),N);Q.rotation.x=pt/2,Q.position.set(0,.34,0),Q.scale.set(1.05,1,.85),A.add(Q),A.add(a(o(new Xt(.24,12,10),I),0,.22,.25));const ce=a(new Te,0,.5,.78);ce.add(o(new Xt(.24,14,10),N)),ce.add(c(a(o(new mn(.12,.34,10),R),0,-.05,.26),pt/2,0,0)),ce.add(a(o(new Xt(.04,6,4),e.dark,!1),0,-.03,.43));for(const H of[-1,1])ce.add(c(a(o(new mn(.07,.2,6),R),H*.13,.22,-.02),0,0,-H*.3)),ce.add(a(o(new Xt(.03,6,4),r("#ffb84a",1.2),!1),H*.1,.05,.2));ce.rotation.x=.25,A.add(ce);for(const[H,b]of[[-.2,.55],[.2,.55]])A.add(c(a(o(new Qo(.07,.36,4,8),N),H,.08,b+.15),pt/2,0,0));return A.add(c(a(o(new mn(.12,.7,8),R),.25,.22,-.75),1.2,.6,0)),A.add(c(a(o(new pn(.2,.03,6,16),e.red),0,.42,.62),pt/2.4,0,0)),A}return{FLAGS:T,FLAMES:U,SPINNERS:D,FIRE_LIGHTS:M,BOOK_COLS:tt,flameTex:w,flame:oe,skull:F,horns:re,fj:J,bx:ne,taper:ae,boards:fe,cornerIron:we,barrel:me,crate:et,sack:lt,table:Ie,roundTable:ut,stool:xt,bench:st,candle:_t,skullCandle:St,bottle:Re,mug:We,plant:$e,bookshelf:wt,rug:rt,easel:Oe,desk:Be,anvil:ke,dummy:L,target:Xe,hay:Ye,brazier:He,torch:Le,poleBanner:Je,hangingBanner:be,skullPole:ue,spikes:P,drum:S,totem:q,tent:ye,weaponRack:pe,woodpile:De,cart:Fe,stall:Se,well:Me,lampPost:Ce,chest:Y,throne:ve,shield:_e,trophy:Ge,chandelier:te,lanternString:$,tree:de,plantFlora:x,growFlora:G,crystal:K,cauldron:O,fence:se,signPost:he,bed:ze,bunk:dt,wardrobe:vt,partition:ot,curtain:Tt,scrollStack:Mt,telescope:Ke,starGlobe:ft,wallMap:un,wolf:fn,put:h}}const{PI:Lu}=Math;function BM(s,e,t,n){const{scene:i,COL:r,toon:o,mesh:l,at:a,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:v,growFlora:m,lampPost:_,skullPole:y}=e,C=vu.pts;function T(ee,F){let re=!1;for(let le=0,J=C.length-1;le<C.length;J=le++){const[ne,ae]=C[le],[fe,we]=C[J];ae>F!=we>F&&ee<(fe-ne)*(F-ae)/(we-ae)+ne&&(re=!re)}return re}function U(ee,F,re,le,J,ne){const ae=J-re,fe=ne-le,we=ae*ae+fe*fe||1,Ze=Math.max(0,Math.min(1,((ee-re)*ae+(F-le)*fe)/we));return Math.hypot(ee-re-ae*Ze,F-le-fe*Ze)}const D=[...Si.map(ee=>({w:ee.w*.65,pts:ee.closed?[...ee.line,ee.line[0]]:ee.line})),{w:1,pts:ia}],M=[],w=o1.map(ee=>r1[ee]);function z(ee,F,re=.6){const le=Math.atan2(F,ee);if(Math.hypot(ee,F)>as(le)-1.6)return!1;for(const J of D){const ne=J.pts;for(let ae=0;ae<ne.length-1;ae++){const fe=ne[ae],we=ne[ae+1];if(!(Math.abs(fe[0]-ee)>J.w+re+1.5||Math.abs(fe[1]-F)>J.w+re+1.5)&&U(ee,F,fe[0],fe[1],we[0],we[1])<J.w+re)return!1}}for(const J of Ks)if(J.kind==="house"){const[ne,ae]=na(J,ee,F),fe=3.4+re;if(Math.abs(ne)<J.w/2+fe&&ae>-J.d/2-fe&&ae<J.d/2+fe+(J.deck?4.5:0)+(J.id==="tavern"?5:0))return!1}else if(Math.hypot(ee-J.x,F-J.z)<J.r+(J.kind==="open"?2.2:1.4)+re)return!1;for(const J of Ic)if(J.kind==="hut"){const[ne,ae]=na(J,ee,F);if(Math.abs(ne)<J.w/2+2.6+re&&Math.abs(ae)<J.d/2+2.6+re)return!1}else if(Math.hypot(ee-J.x,F-J.z)<J.r+1.8+re)return!1;for(let J=0;J<C.length;J++){const[ne,ae]=C[J],[fe,we]=C[(J+1)%C.length];if(U(ee,F,ne,ae,fe,we)<vu.thick/2+.8+re||Math.hypot(ee-ne,F-ae)<3.6+re)return!1}if(Math.hypot(ee+44,F-26)<6+re||Math.hypot(ee-Jl[0],F-Jl[1])<9+re)return!1;for(const J of w)if(Math.hypot(ee-J.x,F-J.z)<1.2+re)return!1;for(const J of M)if(Math.hypot(ee-J.x,F-J.z)<J.r+re)return!1;return!0}function k(ee,F,re,le){let J=0;for(let ne=0;ne<F&&J<ee;ne++){const ae=f(0,2*Lu),fe=Math.sqrt(d())*58,we=Math.cos(ae)*fe*1.04,Ze=Math.sin(ae)*fe*.9;re(we,Ze)&&(le(we,Ze),J++)}}k(34,6e3,(ee,F)=>T(ee,F)&&z(ee,F,1.4),(ee,F)=>{v(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),ee,F),M.push({x:ee,z:F,r:2.2})}),k(80,9e3,(ee,F)=>!T(ee,F)&&z(ee,F,1.6),(ee,F)=>{v(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),ee,F),M.push({x:ee,z:F,r:2.4})});{const ee=[],F=[],re=[];k(90,9e3,(le,J)=>z(le,J,.5),(le,J)=>{const ne=f(.55,1);v(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),ne*1.25,le,J),M.push({x:le,z:J,r:ne})}),k(60,6e3,(le,J)=>z(le,J,.4),(le,J)=>{const ne=f(.25,.8);ee.push({x:le,y:ne*.3,z:J,sx:ne,sy:ne*f(.5,.85),sz:ne*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),M.push({x:le,z:J,r:ne})}),k(1200,16e3,(le,J)=>z(le,J,.1),(le,J)=>{const ne=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let ae=0;ae<4;ae++)F.push({x:le+f(-.12,.12),y:.11,z:J+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:ne})}),k(320,12e3,(le,J)=>z(le,J,.1),(le,J)=>{re.push({x:le,y:.16,z:J,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new vi(1,0),ee,{cast:!0});for(const le of[p(new mn(.06,.24,4),F,{}),p(new Xt(.09,7,5),re,{})])le&&(le.userData.noLine=!0)}m(n);for(const[ee,F,re]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const le=Si.find(ne=>ne.id===ee);if(!le)continue;const J=le.line;for(let ne=6;ne<J.length-6;ne+=F*2){const[ae,fe]=J[ne-1],[we,Ze]=J[ne+1],nt=J[ne],me=Math.hypot(we-ae,Ze-fe)||1,Ve=-(Ze-fe)/me,et=(we-ae)/me,lt=ne/(F*2)%2?1:-1,Ie=nt[0]+Ve*lt*(le.w*.62+.5),ut=nt[1]+et*lt*(le.w*.62+.5);if(ee==="ring"&&Math.hypot(Ie,ut)<10)continue;let xt=!0;for(const st of w)Math.hypot(Ie-st.x,ut-st.z)<2&&(xt=!1);for(const st of Ks)st.kind!=="house"&&Math.hypot(Ie-st.x,ut-st.z)<st.r+.5&&st.id!=="court"&&(xt=!1);xt&&h(i,re==="lamp"?_(0):y(f(2,2.6)),Ie,ut,Math.atan2(-Ve*lt,-et*lt))}}const j=[];function oe(){const ee=new Te,F=o("#2a2426");ee.add(a(l(new Xt(.16,8,6),F),0,0,0)),ee.children[0].scale.set(1,.8,1.6),ee.add(a(l(new Xt(.1,8,6),F),0,.08,.2)),ee.add(c(a(l(new mn(.03,.12,4),o("#c79a45")),0,.07,.33),Lu/2,0,0));for(const re of[-1,1]){const le=a(new Te,re*.1,.02,0);le.add(a(l(new Ae(.55,.03,.22),F),re*.27,0,0)),ee.add(le)}return ee}for(let ee=0;ee<6;ee++){const F=oe();F.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},F.scale.setScalar(1.8),i.add(F),j.push(F)}for(const ee of["war","library","tavern"]){const F=t.HOUSES[ee];if(!F)continue;const re=F.roof;for(let le=0;le<2;le++){const J=oe(),ne=J.children[3],ae=J.children[4];ne.visible=ae.visible=!0,ne.rotation.z=.9,ae.rotation.z=-.9,J.position.set(f(-F.r.w/3,F.r.w/3),re.hR+.3,0),J.rotation.y=f(0,6),re.R.add(J)}}return{CROWS:j}}const zM=["lead","designer","frontend","backend","reviewer"];async function kM(s){const e=s.reducedMotion;let t=s.width,n=s.height;const i=new Uv({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});M1(i,t,n,s.dpr);const r=new rp,o=y1(i,r),l=DM(),a=v1(),c=FM(o),h=await OM(o,c,l);await a;const d=UM(o,c,h,h.models,s.tasks??["todo","todo","todo","todo","todo"]),f=f1(o,c,h,d,h.models),u=BM(o,c,d,h.models),{TEX:p,COL:v,toon:m,rnd:_,rr:y,pick:C,_c:T}=o,{FLAMES:U,SPINNERS:D,FLAGS:M,FIRE_LIGHTS:w}=c,{HOUSES:z,deskF:k,deskB:j,hearthLight:oe}=d,{mouthMat:ee,coreMat:F,fireLight:re,chimneyTop:le,emberBase:J,waterTex:ne,fallTex:ae,mists:fe,skyBoat:we,airship:Ze}=f,{CROWS:nt}=u,{skyDome:me,cloudRing:Ve}=h,et=Object.fromEntries(zM.map(R=>[R,_()*6])),lt=[];{const R=new Set;for(const b of Object.values(z)){for(const ie of Object.values(b.sides))R.add(ie.up);if(R.add(b.roof.R),b.upper){const ie=b.upper;R.add(ie.U);const X=new Map;ie.U.traverse(g=>{if(!(g instanceof Ut))return;const E=g.material;let W=X.get(E);W||(W=E.clone(),X.set(E,W),ie.mats.push(W)),g.material=W})}}for(const{f:b}of U)R.add(b);for(const b of D)R.add(b.o);for(const b of M)R.add(b);for(const b of nt)R.add(b);[k.g,j.g,we,Ze,Ve,me].forEach(b=>R.add(b)),r.updateMatrixWorld(!0);const I=new Map,Q=["position","normal","uv"],ce=b=>{if(R.has(b))return;for(const B of[...b.children])ce(B);if(!(b instanceof Ut)||b instanceof kr||b.children.length||Array.isArray(b.material))return;const ie=b.material,X=b.geometry;if(ie.transparent||ie.vertexColors||ie.isShaderMaterial||ie.depthWrite===!1||!X.attributes.uv||!X.attributes.normal||X.attributes.color)return;const g=X.index?X.toNonIndexed():X.clone();for(const B of Object.keys(g.attributes))Q.includes(B)||g.deleteAttribute(B);g.morphAttributes={},g.clearGroups(),g.applyMatrix4(b.matrixWorld);const E=ie.uuid+(b.castShadow?"s":"n"),W=I.get(E);W?W.geos.push(g):I.set(E,{m:ie,cast:b.castShadow,geos:[g]}),b.parent?.remove(b)};ce(r);for(const{m:b,cast:ie,geos:X}of I.values()){const g=Dc(X,!1);if(!g){console.warn("could not merge",b.type);continue}const E=new Ut(g,b);E.castShadow=ie,E.receiveShadow=!0,E.matrixAutoUpdate=!1,r.add(E)}const H=new An({visible:!1});for(const[b,ie]of Object.entries(z)){const X=ie.top+ie.roof.hR,g=new Ut(new Ae(ie.r.w+.6,X,ie.r.d+.6),H);g.position.set(ie.r.x,X/2,ie.r.z),g.rotation.y=ie.r.ry||0,g.userData.houseId=b,r.add(g),g.updateMatrixWorld(!0),lt.push(g)}}const Ie=new Hn(Ln.fov,t/n,Ln.near,Ln.far),ut={t:new V(...Ln.home.target),p:new V(...Ln.home.position)};Ie.position.copy(ut.p);const xt=new Fv(Ie,i.domElement);xt.target.copy(ut.t),xt.enableDamping=!0,xt.dampingFactor=.08,xt.minDistance=Ln.minDistance,xt.maxDistance=Ln.maxDistance,xt.maxPolarAngle=Ln.maxPolarAngle,xt.minPolarAngle=Ln.minPolarAngle,xt.screenSpacePanning=!1,xt.zoomSpeed=.8,xt.update();function st(){const R=xt.target,I=Math.hypot(R.x,R.z),Q=Ln.targetRadius;if(I>Q){const ce=Q/I;Ie.position.x-=R.x*(1-ce),Ie.position.z-=R.z*(1-ce),R.x*=ce,R.z*=ce}if(R.y<Ln.targetMinY||R.y>Ln.targetMaxY){const ce=Math.max(Ln.targetMinY,Math.min(Ln.targetMaxY,R.y));Ie.position.y+=ce-R.y,R.y=ce}Ie.position.y<Ln.minHeight&&(Ie.position.y=Ln.minHeight)}let _t=null,St=null,Re=!1;function We(R,I){if(e){xt.target.copy(R),Ie.position.copy(I),xt.update();return}_t={t0:performance.now(),dur:1100,ft:xt.target.clone(),fp:Ie.position.clone(),tt:R,tp:I}}function $e(R){if(R==="overview"){St=null,We(ut.t.clone(),ut.p.clone());return}const I=z[R];St=R,I&&(I.view="ground");const Q=u1(R,[Ie.position.x-xt.target.x,Ie.position.z-xt.target.z]);We(new V(...Q.target),new V(...Q.position))}const tt=()=>{_t=null};i.domElement.addEventListener("pointerdown",tt),i.domElement.addEventListener("wheel",tt,{passive:!0});const Qe=R=>Re||St===R.id||!!R.near;function wt(R,I){const Q=xt.target,ce=Math.hypot(R.r.x-Q.x,R.r.z-Q.z),H=Math.max(R.r.w,R.r.d)*.8+9;R.near=R.near?I<72&&ce<H+4:I<64&&ce<H}function rt(R,I,Q){if(Q.fading!==I){Q.fading=I;for(const ce of R)ce.transparent=I,ce.needsUpdate=!0}}function Oe(R,I,Q){const ce=I?0:1;R.s+=(ce-R.s)*Q,Math.abs(R.s-ce)<.004&&(R.s=ce),R.up.scale.y=Math.max(.001,R.s),R.up.visible=R.s>.03}function Be(R){const I=Ie.position.distanceTo(xt.target),Q=e?1:Math.min(1,R*5),ce=e?1:Math.min(1,R*6);for(const H of Object.values(z)){wt(H,I);const b=Qe(H),ie=b&&!!H.upper&&H.view==="upper",X=b?1:0;H.lift+=(X-H.lift)*Q,Math.abs(H.lift-X)<.002&&(H.lift=X);const g=H.roof;g.R.position.y=g.base+H.lift*3.4,g.R.visible=H.lift<.97;for(const xe of g.mats)xe.opacity=1-H.lift;const E=Ie.position.x-H.r.x,W=Ie.position.z-H.r.z,B=Math.hypot(E,W)||1,Z=Math.cos(H.r.ry||0),ge=Math.sin(H.r.ry||0),Pe=xe=>{const Ne=((xe.n[0]*Z+xe.n[1]*ge)*E+(-xe.n[0]*ge+xe.n[1]*Z)*W)/B;return Ne>.32?xe.wish=!0:Ne<.06&&(xe.wish=!1),!!xe.wish};for(const xe of Object.values(H.sides))Oe(xe,b&&!ie&&Pe(xe),ce);if(H.upper){const xe=H.upper,Ne=b&&!ie?1:0;xe.lift+=(Ne-xe.lift)*Q,Math.abs(xe.lift-Ne)<.002&&(xe.lift=Ne),rt(xe.mats,xe.lift>0,xe),xe.U.position.y=xe.top+xe.lift*3.4,xe.U.visible=xe.lift<.97;for(const qe of xe.mats)qe.opacity=1-xe.lift;for(const qe of Object.values(xe.sides))Oe(qe,ie&&Pe(qe),ce)}}}function ke(R,I,Q,ce,H,b){const ie=new jt;ie.setAttribute("position",new Tn(new Float32Array(R*3),3));const X=new vr(ie,new Er({color:I,size:Q,map:ce,transparent:!0,opacity:H,depthWrite:!1,blending:ce?Os:Ui}));return X.frustumCulled=!1,X.userData.seed=Float32Array.from({length:R},()=>Math.random()),X.userData.h=Float32Array.from({length:R},()=>Math.random()*b),X.userData.top=b,X.visible=!e,r.add(X),X}const L=[{at:le,p:ke(30,"#d8cfc6",2.2,p.soft,.5,9),heat:!0}];for(const R of Object.values(z)){if(!R.roof.smokeAt)continue;R.g.updateMatrixWorld(!0);const I=R.roof.R.localToWorld(new V(...R.roof.smokeAt));L.push({at:I,p:ke(14,"#d8cfc6",1.4,p.soft,.45,5),house:R})}const Xe=ke(60,"#ffb04a",.11,null,.9,4),Ye=[];for(let R=0;R<4;R++){const I=new cs(new zs({map:p.spark,color:R%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Ui}));I.scale.setScalar(.25),k.g.add(I),Ye.push(I)}const He=[];{const R=new Set;for(const Q of Object.values(z)){R.add(Q.roof.R);for(const ce of Object.values(Q.sides))R.add(ce.up);if(Q.upper){R.add(Q.upper.U);for(const ce of Object.values(Q.upper.sides))R.add(ce.up)}}r.updateMatrixWorld(!0);const I=[];r.traverse(Q=>{Q instanceof Ji&&I.push(Q)});for(const Q of I){const ce=[];for(let H=Q.parent,b=0;H&&b<40;H=H.parent,b++)R.has(H)&&ce.push(H);r.attach(Q),ce.length&&He.push({l:Q,anc:ce,base:Q.intensity})}}function Le(){for(const R of He)R.anc.every(Q=>Q.visible)?R.l.intensity===0&&(R.l.intensity=R.base):R.l.intensity=0}const Je=1;r.updateMatrixWorld(!0);const be=[];for(const{f:R,s:I}of U){if(I<1.3)continue;let Q=R,ce=!1;for(let H=0;Q&&H<40;H++)Q.userData.movesWithWall===!0&&(ce=!0),Q=Q.parent;ce||be.push(R.getWorldPosition(new V))}function ue(R){const I=new jt;I.setAttribute("position",new Tn(new Float32Array(R*3),3)),I.setAttribute("color",new Tn(new Float32Array(R*3),3));const Q=new vr(I,new Er({size:.09,map:p.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ui,toneMapped:!1}));return Q.frustumCulled=!1,Q.visible=!e,r.add(Q),Q}const P=ue(Math.max(1,be.length*7)),S=P.geometry.attributes.position.count,q={src:Float32Array.from({length:S},(R,I)=>I%Math.max(1,be.length)),life:Float32Array.from({length:S},()=>Math.random()),sd:Float32Array.from({length:S},()=>Math.random())},ye=240,pe=new vr(new jt,new Er({size:.07,map:p.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Ui}));pe.geometry.setAttribute("position",new Tn(new Float32Array(ye*3),3));const De=Float32Array.from({length:ye*3},()=>Math.random());pe.frustumCulled=!1,pe.visible=!e,r.add(pe);const Fe=80,Se=new qt(.16,.1),Me=new kr(Se,m("#ffffff",{side:on}),Fe),Ce=[];for(let R=0;R<Fe;R++)Me.setColorAt(R,T.set(C([v.autumn1,v.autumn2,v.autumn3,"#c9a03a"]))),Ce.push({x:y(-30,30),y:y(0,12),z:y(-30,30),r:y(0,6),v:y(.5,.9),w:y(1,3)});Me.instanceColor&&(Me.instanceColor.needsUpdate=!0),Me.frustumCulled=!1,Me.visible=!e,r.add(Me);const Y=new Ct,ve=new Vn,_e=new bi,Ge=new V,te=new V(1,1,1);function $(R,I){const Q=P.geometry.attributes.position,ce=P.geometry.attributes.color;for(let ie=0;ie<Q.count;ie++){const X=be[q.src[ie]];if(!X)break;q.life[ie]=q.life[ie]+I*(.35+q.sd[ie]*.4),q.life[ie]>1&&(q.life[ie]=q.life[ie]-1);const g=q.life[ie],E=q.sd[ie];Q.setXYZ(ie,X.x+Math.sin(R*(1+E)+E*20)*.25*g,X.y+.2+g*2.2,X.z+Math.cos(R*(.8+E)+E*9)*.25*g);const W=(1-g)*(.6+.4*Math.sin(R*13+E*30))*2.2;ce.setXYZ(ie,W,W*.48,W*.16)}Q.needsUpdate=!0,ce.needsUpdate=!0;const H=pe.geometry.attributes.position,b=xt.target;for(let ie=0;ie<ye;ie++){const X=De[ie*3],g=De[ie*3+1],E=De[ie*3+2],W=((X*44+R*.25*(g-.5)-b.x)%44+66)%44-22,B=((g*44+R*.18*(X-.3)-b.z)%44+66)%44-22;H.setXYZ(ie,b.x+W,.6+E*9+Math.sin(R*.5+X*20)*.4,b.z+B)}H.needsUpdate=!0;for(let ie=0;ie<Fe;ie++){const X=Ce[ie];X.y-=I*X.v,X.y<.05&&(X.y=y(8,13),X.x=b.x+y(-28,28),X.z=b.z+y(-28,28)),Ge.set(X.x+Math.sin(R*.9+X.r)*.9,X.y,X.z+Math.cos(R*.7+X.r)*.6),_e.set(R*X.w+X.r,R*.6+X.r,Math.sin(R*2+X.r)*1.2),Y.compose(Ge,ve.setFromEuler(_e),te),Me.setMatrixAt(ie,Y)}Me.instanceMatrix.needsUpdate=!0}r.traverse(R=>{const I=R.material;(R instanceof vr||R instanceof cs||R.userData.noLine||I&&!Array.isArray(I)&&(I.blending===Ui||I.depthWrite===!1))&&R.layers.set(Je)});for(const R of[Ve,Me,me])R.traverse(I=>I.layers.set(Je));Ie.layers.enable(Je);const de=new i0({side:on}),Ee=new In(1,1,{type:Nn});Ee.depthTexture=new us(1,1),Ee.depthTexture.type=hi;const x=new gt(.5,.5,1),G=new gt;function K(){r.overrideMaterial=de,Ie.layers.disable(Je);const R=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(G);const I=i.getClearAlpha();i.setClearColor(x,1),i.setRenderTarget(Ee),i.clear(),i.render(r,Ie),i.setRenderTarget(null),i.setClearColor(G,I),i.shadowMap.autoUpdate=R,Ie.layers.enable(Je),r.overrideMaterial=null}const O=new e1(i,new In(1,1,{type:Nn,samples:4}));O.setPixelRatio(i.getPixelRatio()),O.addPass(new n1(r,Ie));const se="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",he=new Zl({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Ue},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:se,fragmentShader:`#include <packing>
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
    }`});O.addPass(he);const ze=new Ys(new Ue(t,n),.42,.55,.88);_1(ze),O.addPass(ze),O.addPass(new t1);const dt=new Zl({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Ue},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:se,fragmentShader:`#include <packing>
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
    }`});O.addPass(dt);const vt=he.uniforms,ot=dt.uniforms,Tt=(R,I)=>R[I];Tt(vt,"tDepth").value=Ee.depthTexture,Tt(ot,"tDepth").value=Ee.depthTexture;function Mt(R,I){const Q=i.getPixelRatio();i.setSize(R,I),O.setSize(R,I),ze.setSize(R,I),Ee.setSize(Math.floor(R*Q),Math.floor(I*Q)),Tt(vt,"texel").value.set(1/(R*Q),1/(I*Q)),Tt(ot,"texel").value.copy(Tt(vt,"texel").value),Tt(vt,"width").value=Math.max(1,Q*.85),Ie.aspect=R/I,Ie.updateProjectionMatrix()}for(const R of[vt,ot])Tt(R,"near").value=Ie.near,Tt(R,"far").value=Ie.far;Mt(t,n);const Ke=0,ft={frontend:!1,backend:!1};let Zt=-1,un=0,fn=0,A=!1;function N(R){Zt<0&&(Zt=R);const I=(R-Zt)/1e3,Q=Math.min(.05,I-un);un=I;const ce=.25+Ke*.35,H=e?0:Math.sin(I*9)*.08+Math.sin(I*23)*.05;ee.emissiveIntensity=.9+ce*1.4+H,F.emissiveIntensity=1.2+ce*1.8+H,re.intensity=8+ce*16+H*20;for(const[b,ie]of[[k,"frontend"],[j,"backend"]]){const X=ft[ie],g=b.screen?.material;g&&(g.opacity+=((X?1:.3)-g.opacity)*Math.min(1,Q*4)),b.light&&(b.light.intensity=X?3.5:0)}if(Be(Q),!e){for(const{f:g,ph:E}of U){const W=1+Math.sin(I*11+E)*.16+Math.sin(I*27+E*2)*.08;g.scale.set(1/Math.sqrt(W),W,1/Math.sqrt(W))}for(const g of w)g.l.intensity=g.base*(1+Math.sin(I*9+g.ph)*.12+Math.sin(I*23+g.ph)*.06);oe.intensity=11+Math.sin(I*7)*1.5;for(const g of D)g.o.rotation[g.axis]+=Q*g.v,g.bob&&(g.o.position.y=(g.y0??0)+Math.sin(I*1.6)*.06);Math.abs(Math.sin(I*5.2+et.frontend)),Ye.forEach((g,E)=>{g.material.opacity=0,g.position.set(-.4+E*.19,.95+E%2*.12+0,E%2*.08-.29),g.material.rotation=I*3+E}),k.kb&&(k.kb.position.y=k.kb.userData.y0+0);const b=Xe.geometry.attributes.position,ie=Xe.userData.h,X=Xe.userData.seed;for(let g=0;g<b.count;g++){const E=X[g];ie[g]=ie[g]+Q*(.5+E*.7)*(.5+ce),ie[g]>Xe.userData.top&&(ie[g]=0),b.setXYZ(g,J.x+Math.sin(I*(.6+E)+E*10)*.8*E,J.y+ie[g],J.z+Math.cos(I*.7+E*7)*.5*E)}b.needsUpdate=!0,Xe.material.opacity=Math.min(.95,.2+ce*.5);for(const g of L){const E=g.p,W=E.geometry.attributes.position,B=E.userData.h,Z=E.userData.seed,ge=g.house?g.house.lift:0;E.visible=ge<.5;const Pe=g.heat?.6+ce:.7;for(let xe=0;xe<W.count;xe++){const Ne=Z[xe];B[xe]=B[xe]+Q*(.5+Ne*.4)*Pe,B[xe]>E.userData.top&&(B[xe]=0);const qe=B[xe];W.setXYZ(xe,g.at.x+Math.sin(qe*.8+Ne*6)*qe*.16+qe*.3,g.at.y+qe,g.at.z+Math.cos(qe*.6+Ne*4)*qe*.14)}W.needsUpdate=!0}ae.offset.y=(ae.offset.y+Q*1.6)%1,ne.offset.x=(ne.offset.x+Q*.12)%1,Ve.rotation.y+=Q*.004,fe.forEach((g,E)=>{g.material.opacity=.42+Math.sin(I*.8+E)*.1});for(const g of nt){const E=g.userData;E.a+=Q*E.s,g.position.set(Math.cos(E.a)*E.r,E.y+Math.sin(E.a*3)*.8,Math.sin(E.a)*E.r),g.rotation.y=-E.a,g.children[3].rotation.z=Math.sin(I*10+E.r)*.6,g.children[4].rotation.z=-Math.sin(I*10+E.r)*.6}M.forEach((g,E)=>{g.rotation.y=Math.sin(I*2+E)*.3}),we.position.y=-.4+Math.sin(I*.9)*.2,we.rotation.x=Math.sin(I*.7)*.03;{const g=Ze.userData;g.a+=Q*.022,Ze.position.set(Math.cos(g.a)*g.r,g.y+Math.sin(I*.5)*.8,Math.sin(g.a)*g.r),Ze.rotation.y=Math.atan2(-Math.cos(g.a),-Math.sin(g.a))}}if(_t){const b=Math.min(1,(performance.now()-_t.t0)/_t.dur),ie=b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2;xt.target.lerpVectors(_t.ft,_t.tt,ie),Ie.position.lerpVectors(_t.fp,_t.tp,ie),b>=1&&(_t=null)}Le(),xt.update(),st(),e||$(I,Q),me.position.copy(Ie.position),Tt(ot,"focus").value=Ie.position.distanceTo(xt.target),Tt(ot,"time").value=e?0:I,K(),O.render(),fn++}return{renderer:i,scene:r,camera:Ie,controls:xt,housePicks:lt,agentPhase:et,get frames(){return fn},start(){A=!1,i.setAnimationLoop(R=>{A||N(R)})},stop(){A=!0,i.setAnimationLoop(null)},resize(R,I){t=R,n=I,Mt(R,I)},flyToRoom:$e,setOpenHouses(R){Re=R},setTasks(R){d.drawBoard(R)},dispose(){i.setAnimationLoop(null),i.domElement.removeEventListener("pointerdown",tt),i.domElement.removeEventListener("wheel",tt),xt.dispose(),O.dispose(),Ee.dispose(),i.dispose()}}}export{kM as createWorld};
